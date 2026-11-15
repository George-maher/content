import { l, type Session } from "./types";

export const s13: Session = {
  id: 13,
  phase: 4,
  minutes: 65,
  title: l("Web Application Security Basics: OWASP Top 10, Injection and XSS", "أساسيات أمن تطبيقات الويب: OWASP Top 10 والحقن وXSS"),
  summary: l(
    "How web applications fail: broken access control, injection, cross-site scripting, weak sessions and misconfiguration — and the secure-design habits that prevent them.",
    "كيف تفشل تطبيقات الويب: التحكم المكسور بالوصول، والحقن، والنصوص عبر المواقع، والجلسات الضعيفة، وسوء الإعداد — وعادات التصميم الآمن التي تمنعها."
  ),
  objectives: [
    l("Describe how a web request flows and where untrusted input enters.", "وصف مسار طلب الويب وأين تدخل المدخلات غير الموثوقة."),
    l("Explain the OWASP Top 10 risk categories at a conceptual level.", "شرح فئات مخاطر OWASP Top 10 على المستوى المفاهيمي."),
    l("Differentiate SQL injection, XSS and CSRF and state the right defence for each.", "التمييز بين حقن SQL وXSS وCSRF وذكر الدفاع المناسب لكل منها."),
    l("Apply secure-development principles: validate input, encode output, parameterise queries, least privilege.", "تطبيق مبادئ التطوير الآمن: التحقق من المدخلات وترميز المخرجات وتعميل الاستعلامات وأقل صلاحية."),
  ],
  sections: [
    {
      h: l("1. Where the risk comes from: untrusted input", "1. مصدر الخطر: المدخلات غير الموثوقة"),
      p: [
        l("A web application receives data from browsers — form fields, URL parameters, cookies, headers and uploaded files — and uses it to query databases, build pages and make decisions. The browser is under the user's (or attacker's) control, so everything that arrives from it is untrusted input. Most web vulnerabilities share one root cause: the application mixes untrusted data with code or commands without separating them, or trusts the client to enforce rules (hidden fields, JavaScript checks) that only the server can enforce.", "يتلقى تطبيق الويب بيانات من المتصفحات — حقول النماذج ومعاملات العنوان وملفات الارتباط والترويسات والملفات المرفوعة — ويستخدمها للاستعلام من قواعد البيانات وبناء الصفحات واتخاذ القرارات. والمتصفح تحت سيطرة المستخدم (أو المهاجم)، لذا فكل ما يصل منه مدخل غير موثوق. ومعظم ثغرات الويب لها سبب جذري واحد: يخلط التطبيق البيانات غير الموثوقة بالشيفرة أو الأوامر دون فصلها، أو يثق بالعميل في تطبيق قواعد (حقول مخفية وفحوص جافاسكربت) لا يستطيع تطبيقها إلا الخادم."),
        l("The OWASP Top 10 is the community-maintained list of the most critical web risks. The 2021 edition includes: A01 Broken Access Control, A02 Cryptographic Failures, A03 Injection, A04 Insecure Design, A05 Security Misconfiguration, A06 Vulnerable and Outdated Components, A07 Identification and Authentication Failures, A08 Software and Data Integrity Failures, A09 Security Logging and Monitoring Failures, A10 Server-Side Request Forgery.", "قائمة OWASP Top 10 هي قائمة يصونها المجتمع لأخطر مخاطر الويب. وتضم نسخة 2021: A01 التحكم المكسور بالوصول، A02 إخفاقات التشفير، A03 الحقن، A04 التصميم غير الآمن، A05 سوء إعداد الأمان، A06 المكوّنات الضعيفة والمتقادمة، A07 إخفاقات التعريف والمصادقة، A08 إخفاقات سلامة البرمجيات والبيانات، A09 إخفاقات التسجيل والمراقبة، A10 تزوير الطلبات من جهة الخادم."),
      ],
    },
    {
      h: l("2. Injection and SQL injection", "2. الحقن وحقن SQL"),
      p: [
        l("Injection happens when untrusted data is sent to an interpreter (database, operating system, LDAP) as part of a command, and the interpreter cannot tell data from instructions. In SQL injection the application builds a query by pasting user input into the SQL text. A crafted input containing a quote can end the intended string and add new logic — for example making a login condition always true, reading other tables, or modifying data. Impact ranges from authentication bypass to complete database disclosure.", "يحدث الحقن عندما تُرسل بيانات غير موثوقة إلى مفسِّر (قاعدة بيانات أو نظام تشغيل أو LDAP) كجزء من أمر فلا يستطيع المفسِّر التمييز بين البيانات والتعليمات. وفي حقن SQL يبني التطبيق الاستعلام بلصق مدخلات المستخدم في نص SQL. ومدخل مصمَّم يحوي علامة اقتباس قد ينهي النص المقصود ويضيف منطقًا جديدًا — كجعل شرط الدخول صحيحًا دائمًا أو قراءة جداول أخرى أو تعديل البيانات. ويتراوح الأثر بين تجاوز المصادقة والكشف الكامل لقاعدة البيانات."),
        l("The fix is structural, not cosmetic: use parameterised queries (prepared statements) so the database receives the command and the values separately; use ORMs correctly; validate input with allow-lists (type, length, format); run the application's database account with minimal rights (no DROP, no access to unrelated tables); hide detailed error messages from users. Filtering 'bad words' is unreliable. A WAF is an extra layer, never the primary defence.", "الحل بنيوي لا شكلي: استخدم الاستعلامات المُعامَلة (العبارات المُعدّة) ليتلقى قاعدة البيانات الأمر والقيم منفصلين؛ واستخدم أدوات ORM بشكل صحيح؛ وتحقق من المدخلات بقوائم السماح (النوع والطول والصيغة)؛ وشغّل حساب قاعدة بيانات التطبيق بأقل صلاحيات (دون DROP ودون وصول لجداول غير ذات صلة)؛ وأخفِ رسائل الأخطاء التفصيلية عن المستخدمين. أما ترشيح «الكلمات السيئة» فغير موثوق. والـ WAF طبقة إضافية لا دفاعًا أساسيًا."),
      ],
      callout: { kind: "warn", text: l("Test for injection only on applications you own or are explicitly authorised in writing to test, ideally in a practice environment. Unauthorised testing is illegal in most countries.", "اختبر الحقن فقط على تطبيقات تملكها أو مفوَّض كتابيًا باختبارها وفي بيئة تدريب ما أمكن. فالاختبار غير المصرح به مخالف للقانون في معظم الدول.") },
    },
    {
      h: l("3. Cross-site scripting (XSS), CSRF and broken access control", "3. النصوص عبر المواقع (XSS) وCSRF والتحكم المكسور بالوصول"),
      p: [
        l("Cross-site scripting (XSS) occurs when an application includes untrusted data in a page without proper encoding, so the victim's browser runs attacker-supplied script in the context of the trusted site. It can steal session cookies, perform actions as the user or alter the page. Types: stored (saved in the database, e.g. a malicious comment), reflected (in a crafted link) and DOM-based (client-side code). Defences: context-aware output encoding, templating frameworks that escape by default, a Content-Security-Policy header, and the HttpOnly and Secure flags on session cookies.", "يحدث XSS عندما يُدرج التطبيق بيانات غير موثوقة في صفحة دون ترميز مناسب فيشغّل متصفح الضحية سكربتًا من المهاجم في سياق الموقع الموثوق. وقد يسرق ملفات ارتباط الجلسة أو ينفذ إجراءات باسم المستخدم أو يغيّر الصفحة. وأنواعه: مخزَّن (محفوظ في قاعدة البيانات كتعليق خبيث) وعاكس (في رابط مصمَّم) ومبني على DOM (شيفرة جهة العميل). والدفاعات: ترميز المخرجات بحسب السياق، وأطر قوالب تهرّب افتراضيًا، وترويسة Content-Security-Policy، وخاصيتا HttpOnly وSecure لملفات ارتباط الجلسة."),
        l("Cross-Site Request Forgery (CSRF) tricks a logged-in user's browser into sending an unwanted request (change e-mail, transfer money) to a site that trusts the browser's cookies; defend with anti-CSRF tokens and SameSite cookies. Broken access control — the number-one OWASP risk — means the server fails to check permissions: changing an id in a URL (/invoice/1042 → /invoice/1043) reveals someone else's data (IDOR), or an ordinary user can call an admin function. Defence: check authorisation on the server for every request, deny by default, and never rely on hidden links or client-side checks.", "يخدع CSRF متصفح مستخدم مسجَّل الدخول لإرسال طلب غير مرغوب (تغيير البريد، تحويل مال) إلى موقع يثق بملفات ارتباط المتصفح؛ ويُدافَع عنه برموز مكافحة CSRF وملفات SameSite. أما التحكم المكسور بالوصول — الخطر الأول في OWASP — فيعني أن الخادم لا يفحص الصلاحيات: فتغيير رقم في العنوان (/invoice/1042 ← /invoice/1043) يكشف بيانات شخص آخر (IDOR)، أو يستطيع مستخدم عادي استدعاء وظيفة مدير. الدفاع: افحص التفويض على الخادم لكل طلب، وامنع افتراضيًا، ولا تعتمد على روابط مخفية أو فحوص جهة العميل."),
      ],
    },
    {
      h: l("4. Building and operating web apps securely", "4. بناء تطبيقات الويب وتشغيلها بأمان"),
      p: [l("Security belongs in every phase of the software development life cycle (SDLC), not only at the end:", "ينتمي الأمن إلى كل مرحلة من دورة حياة تطوير البرمجيات (SDLC) لا إلى نهايتها فقط:")],
      bullets: [
        l("Design: threat-model features ('what could go wrong?'), plan authentication and authorisation up front.", "التصميم: نمذجة التهديدات للميزات («ما الذي قد يسوء؟») وتخطيط المصادقة والتفويض مبكرًا."),
        l("Code: validate input, encode output, use parameterised queries, never hard-code secrets, handle errors safely.", "الشيفرة: التحقق من المدخلات وترميز المخرجات واستخدام استعلامات مُعامَلة وعدم تضمين الأسرار وإدارة الأخطاء بأمان."),
        l("Dependencies: track libraries (software bill of materials) and patch known-vulnerable components quickly.", "الاعتماديات: تتبع المكتبات (قائمة مكونات البرمجية) وترقيع المكونات المعروفة الضعف بسرعة."),
        l("Test: code review, static and dynamic scanning, penetration tests before release.", "الاختبار: مراجعة الشيفرة والفحص الساكن والديناميكي واختبارات الاختراق قبل الإصدار."),
        l("Deploy: HTTPS only (HSTS), secure headers, minimal server exposure, separate environments, secrets in a vault.", "النشر: HTTPS فقط (HSTS) وترويسات آمنة وتعريض أدنى للخادم وبيئات منفصلة وأسرار في خزنة."),
        l("Operate: log security events, monitor, have an incident plan and a way to patch quickly.", "التشغيل: تسجيل أحداث الأمن ومراقبتها وخطة حوادث وطريقة للترقيع السريع."),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Secure request handling – a control at every step", "معالجة آمنة للطلب – ضابط عند كل خطوة"),
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
  lab: {
    tool: "sqli",
    title: l("Lab 13 – See why string-building queries are dangerous", "المختبر 13 – لماذا الاستعلامات المبنية بالنصوص خطرة"),
    scenario: l("A login form builds its SQL by joining the typed username and password into one text string. Use the simulator (display only; nothing is run against a database) to compare it with a parameterised query.", "يبني نموذج دخول استعلام SQL بضم اسم المستخدم وكلمة المرور المكتوبين في نص واحد. استخدم المحاكي (عرض فقط ولا يُنفَّذ شيء على قاعدة بيانات) لمقارنته باستعلام مُعامَل."),
    safety: l("The simulator only displays text. Do not try injection strings against real websites – even 'just to see' – without written permission. Use deliberately vulnerable practice labs such as OWASP Juice Shop or WebGoat on your own machine.", "المحاكي يعرض نصوصًا فقط. لا تجرّب سلاسل الحقن على مواقع حقيقية — حتى «للتجربة» — دون إذن كتابي. استخدم مختبرات تدريب ضعيفة عمدًا مثل OWASP Juice Shop أو WebGoat على جهازك."),
    steps: [
      l("Click 'Normal login' and read both generated queries.", "اضغط «Normal login» واقرأ الاستعلامين الناتجين."),
      l("Click 'Comment-out attack' and identify which part of the original query is neutralised by the comment marker.", "اضغط «Comment-out attack» وحدد أي جزء من الاستعلام الأصلي أبطله رمز التعليق."),
      l("Click 'Always-true attack' and explain why the WHERE condition is now true for every row.", "اضغط «Always-true attack» واشرح لماذا صار شرط WHERE صحيحًا لكل صف."),
      l("In the safe query, observe that the same input is bound as a plain value; explain why quotes no longer matter.", "في الاستعلام الآمن لاحظ أن المدخل نفسه يُربط كقيمة عادية؛ واشرح لماذا لم تعد علامات الاقتباس مهمة."),
      l("Write three defences besides parameterised queries (allow-list validation, least-privilege DB account, generic error messages).", "اكتب ثلاثة دفاعات إضافية إلى جانب الاستعلامات المُعامَلة (التحقق بقوائم السماح، حساب قاعدة بيانات بأقل صلاحية، رسائل أخطاء عامة)."),
      l("Match each of XSS, CSRF and IDOR to its main defence in a small table.", "اربط كلًّا من XSS وCSRF وIDOR بدفاعه الرئيسي في جدول صغير."),
    ],
    expected: l("You can explain, in plain language, how data becomes code in a concatenated query, why parameterisation prevents it, and the primary defence for XSS (output encoding + CSP), CSRF (tokens + SameSite) and IDOR (server-side authorisation).", "تشرح بلغة بسيطة كيف تصبح البيانات شيفرة في استعلام مضموم ولماذا يمنعه التعميل والدفاع الرئيسي لكل من XSS (ترميز المخرجات + CSP) وCSRF (الرموز + SameSite) وIDOR (التفويض على الخادم)."),
  },
  quiz: [
    { q: l("What is the best primary defence against SQL injection?", "ما أفضل دفاع أساسي ضد حقن SQL؟"), options: [l("Parameterised queries / prepared statements", "الاستعلامات المُعامَلة / العبارات المُعدّة"), l("Hiding the login page", "إخفاء صفحة الدخول"), l("Blocking the word 'select'", "حجب كلمة select"), l("Longer passwords", "كلمات مرور أطول")], answer: 0, why: l("Parameterisation keeps data and commands separate by design.", "التعميل يبقي البيانات والأوامر منفصلة بالتصميم.") },
    { q: l("In XSS, who ends up running the attacker's script?", "في XSS من يشغّل سكربت المهاجم في النهاية؟"), options: [l("The database", "قاعدة البيانات"), l("The victim's browser", "متصفح الضحية"), l("The firewall", "الجدار الناري"), l("The router", "الموجّه")], answer: 1, why: l("The browser trusts content from the site and runs the injected script in that site's context.", "يثق المتصفح بمحتوى الموقع فيشغّل السكربت المحقون في سياقه.") },
    { q: l("Changing /invoice/1042 to /invoice/1043 shows another customer's invoice. This is…", "تغيير /invoice/1042 إلى /invoice/1043 يعرض فاتورة عميل آخر. هذا…"), options: [l("CSRF", "CSRF"), l("Broken access control (IDOR)", "تحكم مكسور بالوصول (IDOR)"), l("A DDoS", "هجوم حجب خدمة"), l("Phishing", "تصيّد")], answer: 1, why: l("The server did not verify that the user owns that invoice.", "لم يتحقق الخادم من ملكية المستخدم لتلك الفاتورة.") },
    { q: l("Which control best defends against CSRF?", "أي ضابط يدافع أفضل ضد CSRF؟"), options: [l("Anti-CSRF tokens and SameSite cookies", "رموز مكافحة CSRF وملفات SameSite"), l("Image compression", "ضغط الصور"), l("A faster server", "خادم أسرع"), l("Removing HTTPS", "إزالة HTTPS")], answer: 0, why: l("Tokens prove the request originated from the genuine form.", "تثبت الرموز أن الطلب صدر من النموذج الحقيقي.") },
    { q: l("What does the HttpOnly cookie flag do?", "ماذا تفعل خاصية HttpOnly لملف الارتباط؟"), options: [l("Forces HTTP instead of HTTPS", "تفرض HTTP بدل HTTPS"), l("Prevents client-side scripts from reading the cookie", "تمنع سكربتات جهة العميل من قراءة الملف"), l("Deletes the cookie", "تحذف الملف"), l("Encrypts the cookie", "تشفّر الملف")], answer: 1, why: l("It limits the damage of XSS by protecting session cookies from script access.", "تحد من أثر XSS بحماية ملفات الجلسة من وصول السكربتات.") },
    { q: l("Which statement about client-side validation is correct?", "أي عبارة عن التحقق في جهة العميل صحيحة؟"), options: [l("It is enough on its own", "كافٍ بمفرده"), l("It improves usability but the server must validate again", "يحسّن الاستخدام لكن يجب أن يتحقق الخادم مجددًا"), l("It replaces authentication", "يحل محل المصادقة"), l("It prevents all attacks", "يمنع كل الهجمات")], answer: 1, why: l("Attackers bypass the browser entirely and send crafted requests straight to the server.", "يتجاوز المهاجمون المتصفح كليًا ويرسلون طلبات مصمَّمة مباشرة إلى الخادم.") },
    { q: l("OWASP A06 'Vulnerable and Outdated Components' is best addressed by…", "تُعالج OWASP A06 «المكوّنات الضعيفة والمتقادمة» بأفضل شكل عبر…"), options: [l("Never updating libraries", "عدم تحديث المكتبات أبدًا"), l("Tracking dependencies and patching quickly", "تتبع الاعتماديات والترقيع السريع"), l("Using more libraries", "استخدام مكتبات أكثر"), l("Disabling logs", "تعطيل السجلات")], answer: 1, why: l("An inventory and a fast patch process remove known flaws.", "الحصر وعملية ترقيع سريعة يزيلان الثغرات المعروفة.") },
  ],
  homework: {
    title: l("Homework 13 – Security review of a web app you use", "الواجب 13 – مراجعة أمنية لتطبيق ويب تستخدمه"),
    tasks: [
      l("Pick a site you use daily and check for HTTPS, a valid certificate and a visible logout button.", "اختر موقعًا تستخدمه يوميًا وافحص وجود HTTPS وشهادة صالحة وزر تسجيل خروج ظاهر."),
      l("Using your browser's developer tools (Application tab), list its cookies and note which have Secure, HttpOnly and SameSite flags.", "باستخدام أدوات المطور (تبويب Application) اذكر ملفات ارتباطه ولاحظ أيها يحمل Secure وHttpOnly وSameSite."),
      l("Read the OWASP Top 10 page and choose the three risks most relevant to that kind of site; justify each in one sentence.", "اقرأ صفحة OWASP Top 10 واختر ثلاثة مخاطر الأكثر صلة بذلك النوع من المواقع وبرر كلًا بجملة."),
      l("Write a five-item secure-coding checklist for a small team building a customer portal.", "اكتب قائمة من خمسة بنود للبرمجة الآمنة لفريق صغير يبني بوابة عملاء."),
    ],
    deliverable: l("A one-page review with cookie table, three prioritised risks and the checklist.", "مراجعة من صفحة واحدة بجدول ملفات الارتباط وثلاثة مخاطر مرتبة والقائمة."),
  },
  refs: [
    { title: "OWASP Top 10", org: "OWASP", url: "https://owasp.org/www-project-top-ten/" },
    { title: "SQL Injection Prevention Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
    { title: "Cross Site Scripting Prevention Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
    { title: "Web Security Academy", org: "PortSwigger", url: "https://portswigger.net/web-security" },
    { title: "Secure Software Development Framework (SP 800-218)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/218/final" },
  ],
  terms: [
    { term: l("OWASP", "OWASP"), def: l("Open Worldwide Application Security Project – community producing application security guidance.", "مشروع مجتمعي ينتج إرشادات أمن التطبيقات.") },
    { term: l("SQL injection", "حقن SQL"), def: l("Attack where input alters the structure of a database query.", "هجوم تغيّر فيه المدخلات بنية استعلام قاعدة البيانات.") },
    { term: l("XSS", "النصوص عبر المواقع"), def: l("Cross-site scripting: injecting script that runs in other users' browsers.", "حقن سكربت يعمل في متصفحات مستخدمين آخرين.") },
    { term: l("CSRF", "تزوير الطلبات عبر المواقع"), def: l("Forcing a logged-in user's browser to send an unwanted request.", "إجبار متصفح مستخدم مسجَّل الدخول على إرسال طلب غير مرغوب.") },
    { term: l("IDOR", "مرجع كائن مباشر غير آمن"), def: l("Accessing others' data by changing an identifier because ownership is not checked.", "الوصول لبيانات الآخرين بتغيير معرّف لعدم فحص الملكية.") },
    { term: l("Parameterised query", "الاستعلام المُعامَل"), def: l("A query where user values are passed separately from the SQL command.", "استعلام تُمرَّر فيه قيم المستخدم منفصلة عن أمر SQL.") },
    { term: l("CSP", "سياسة أمان المحتوى"), def: l("HTTP header restricting which scripts and resources a page may load.", "ترويسة HTTP تقيّد السكربتات والموارد التي يجوز للصفحة تحميلها.") },
    { term: l("SDLC", "دورة حياة تطوير البرمجيات"), def: l("The phases of planning, building, testing, deploying and maintaining software.", "مراحل تخطيط البرمجيات وبنائها واختبارها ونشرها وصيانتها.") },
  ],
};

export const s14: Session = {
  id: 14,
  phase: 4,
  minutes: 60,
  title: l("Endpoint Protection, Patching and Vulnerability Management", "حماية النقاط الطرفية والترقيع وإدارة الثغرات"),
  summary: l(
    "How organisations find and fix weaknesses systematically: asset inventory, vulnerability scanning, CVE and CVSS, risk-based patch prioritisation, configuration baselines and endpoint protection.",
    "كيف تجد المؤسسات الضعف وتصلحه بمنهجية: حصر الأصول، وفحص الثغرات، وCVE وCVSS، وأولويات الترقيع القائمة على المخاطر، وخطوط الأساس للإعدادات، وحماية النقاط الطرفية."
  ),
  objectives: [
    l("Explain why you cannot protect what you do not know you own (asset inventory).", "شرح لماذا لا يمكن حماية ما لا تعرف أنك تملكه (حصر الأصول)."),
    l("Interpret CVE identifiers and CVSS scores and their limits.", "تفسير معرّفات CVE ودرجات CVSS وحدودها."),
    l("Prioritise remediation by exploitability, exposure and asset value.", "ترتيب أولويات المعالجة بحسب قابلية الاستغلال والتعرض وقيمة الأصل."),
    l("Describe the vulnerability-management cycle and endpoint protection layers.", "وصف دورة إدارة الثغرات وطبقات حماية النقاط الطرفية."),
  ],
  sections: [
    {
      h: l("1. Why vulnerability management matters", "1. لماذا تهم إدارة الثغرات"),
      p: [
        l("A vulnerability is a weakness in software, hardware, configuration or process that an attacker can exploit. Thousands of new flaws are published every year, and attackers often weaponise them within days. Many of the largest breaches used a flaw for which a fix had existed for months. Vulnerability management is the continuous process of finding, prioritising, fixing and verifying weaknesses before attackers use them.", "الثغرة ضعف في برمجية أو عتاد أو إعداد أو عملية يمكن للمهاجم استغلاله. تُنشر آلاف الثغرات الجديدة كل عام وغالبًا ما يسلّحها المهاجمون خلال أيام. واستخدم كثير من أكبر الاختراقات ثغرة كان إصلاحها متاحًا منذ شهور. وإدارة الثغرات هي العملية المستمرة لإيجاد الضعف وترتيبه وإصلاحه والتحقق منه قبل أن يستخدمه المهاجمون."),
        l("The foundation is an asset inventory: a current list of every device, operating system, application, cloud service and owner. Unknown 'shadow IT' systems are never patched. Pair it with software inventory (versions) so that when a new critical flaw is announced you can answer within minutes: 'Are we affected, and where?'", "الأساس هو حصر الأصول: قائمة محدّثة بكل جهاز ونظام تشغيل وتطبيق وخدمة سحابية ومالكها. و«تقنية المعلومات الظل» المجهولة لا تُرقَّع أبدًا. وأقرنه بحصر البرمجيات (الإصدارات) لتجيب خلال دقائق عند إعلان ثغرة حرجة جديدة: «هل نحن متأثرون وأين؟»"),
      ],
    },
    {
      h: l("2. CVE, CVSS and prioritisation", "2. CVE وCVSS وترتيب الأولويات"),
      p: [
        l("A CVE (Common Vulnerabilities and Exposures) identifier such as CVE-2021-44228 gives each publicly known flaw a unique name so tools and teams talk about the same issue. CVSS (Common Vulnerability Scoring System) scores technical severity from 0.0 to 10.0: Low 0.1–3.9, Medium 4.0–6.9, High 7.0–8.9, Critical 9.0–10.0. The NVD publishes scores; vendors publish advisories.", "يعطي معرّف CVE (الثغرات والتعرضات الشائعة) مثل CVE-2021-44228 كل ثغرة معروفة علنًا اسمًا فريدًا لتتحدث الأدوات والفرق عن المسألة نفسها. ويقيّم CVSS (نظام تسجيل الثغرات الشائع) الشدة التقنية من 0.0 إلى 10.0: منخفضة 0.1–3.9 ومتوسطة 4.0–6.9 وعالية 7.0–8.9 وحرجة 9.0–10.0. وتنشر NVD الدرجات وينشر المورّدون النشرات."),
        l("CVSS alone is a poor patch order. Real priority also depends on: Is it exploited in the wild (check CISA's Known Exploited Vulnerabilities catalogue and EPSS probability)? Is the asset exposed to the Internet? How valuable is the data or function on it? Are compensating controls in place (segmentation, WAF)? A 'Critical' flaw on an isolated test box may rank below a 'High' flaw on an Internet-facing server with a public exploit.", "ولا يصلح CVSS وحده ترتيبًا للترقيع. فالأولوية الحقيقية تعتمد أيضًا على: هل تُستغل في الواقع (راجع كتالوج CISA للثغرات المستغلة المعروفة واحتمال EPSS)؟ وهل الأصل معرّض للإنترنت؟ وما قيمة البيانات أو الوظيفة عليه؟ وهل توجد ضوابط تعويضية (تقسيم، WAF)؟ فقد تأتي ثغرة «حرجة» على جهاز اختبار معزول بعد ثغرة «عالية» على خادم مواجه للإنترنت بثغرة لها استغلال علني."),
      ],
      table: {
        head: [l("Factor", "العامل"), l("Question to ask", "السؤال"), l("Raises priority when…", "يرفع الأولوية عندما…")],
        rows: [
          [l("Exploitation", "الاستغلال"), l("Is it used by attackers now?", "هل يستخدمه المهاجمون الآن؟"), l("Listed in KEV, public exploit code exists", "مدرج في KEV وتوجد شيفرة استغلال علنية")],
          [l("Exposure", "التعرض"), l("Can an attacker reach it?", "هل يستطيع المهاجم الوصول إليه؟"), l("Internet-facing, remote and unauthenticated", "مواجه للإنترنت وعن بُعد ودون مصادقة")],
          [l("Asset value", "قيمة الأصل"), l("What is at stake?", "ما المعرّض للخطر؟"), l("Holds sensitive data or runs a critical service", "يحمل بيانات حساسة أو يشغّل خدمة حرجة")],
          [l("Compensating controls", "الضوابط التعويضية"), l("What already limits impact?", "ما الذي يحد الأثر أصلًا؟"), l("None in place", "لا يوجد أي منها")],
        ],
      },
    },
    {
      h: l("3. The vulnerability-management cycle and patching", "3. دورة إدارة الثغرات والترقيع"),
      p: [
        l("The cycle is: discover assets → scan (authenticated scans see far more than unauthenticated) → prioritise → remediate → verify with a re-scan → report metrics → repeat. Remediation options are patch/upgrade, change configuration, apply a mitigation or workaround (disable the feature, block the port), isolate the system, or formally accept the risk with owner approval and an expiry date.", "الدورة: اكتشاف الأصول ← الفحص (الفحص بمصادقة يرى أكثر بكثير من الفحص دونها) ← ترتيب الأولويات ← المعالجة ← التحقق بإعادة الفحص ← رفع المقاييس ← التكرار. وخيارات المعالجة: ترقيع/ترقية، أو تغيير إعداد، أو تطبيق تخفيف أو حل بديل (تعطيل الميزة وحجب المنفذ)، أو عزل النظام، أو قبول المخاطرة رسميًا بموافقة المالك وتاريخ انتهاء."),
        l("Good patching practice: test patches on a pilot group, schedule regular windows (for example monthly) with an emergency path for actively exploited flaws, keep a rollback plan, automate for workstations, and track metrics such as time-to-patch for critical issues, patch coverage and the number of overdue exceptions. Unsupported (end-of-life) systems can no longer be patched and should be replaced or strictly isolated.", "ممارسة الترقيع الجيدة: اختبر الرقع على مجموعة تجريبية، وحدد نوافذ منتظمة (مثلًا شهريًا) مع مسار طوارئ للثغرات المستغلة فعليًا، وأبقِ خطة تراجع، وأتمت ذلك للحواسيب، وتتبع مقاييس مثل زمن الترقيع للمسائل الحرجة وتغطية الترقيع وعدد الاستثناءات المتأخرة. أما الأنظمة غير المدعومة (منتهية العمر) فلا يمكن ترقيعها ويجب استبدالها أو عزلها بصرامة."),
      ],
      callout: { kind: "key", text: l("A scanner finds known flaws; a penetration test shows how they chain together. They complement each other and neither replaces patching discipline.", "يجد الماسح الثغرات المعروفة ويُظهر اختبار الاختراق كيف تتسلسل. ويكمل كلٌّ منهما الآخر ولا يغني أحدهما عن انضباط الترقيع.") },
    },
    {
      h: l("4. Endpoint protection and configuration baselines", "4. حماية النقاط الطرفية وخطوط الأساس للإعدادات"),
      p: [l("Endpoints — laptops, desktops, servers, phones — are where users meet attackers. Layer the protections:", "النقاط الطرفية — الحواسيب المحمولة والمكتبية والخوادم والهواتف — هي حيث يلتقي المستخدمون بالمهاجمين. اجمع الحمايات في طبقات:")],
      bullets: [
        l("Anti-malware / EDR: signature and behaviour detection with remote isolation and investigation tools.", "مكافحة البرمجيات الخبيثة / EDR: كشف بالتواقيع والسلوك مع أدوات عزل وتحقيق عن بُعد."),
        l("Configuration baselines (CIS Benchmarks) and automated compliance checks to prevent drift.", "خطوط أساس للإعدادات (CIS Benchmarks) وفحوص امتثال آلية لمنع الانحراف."),
        l("Application control: allow only approved software; block macros and scripts from untrusted sources.", "التحكم بالتطبيقات: السماح بالبرمجيات المعتمدة فقط وحجب الماكرو والسكربتات من مصادر غير موثوقة."),
        l("Disk encryption, host firewall, screen lock, removable-media policy.", "تشفير القرص وجدار الجهاز الناري وقفل الشاشة وسياسة الوسائط القابلة للإزالة."),
        l("Mobile device management (MDM) for phones and tablets: enforce passcodes, encryption, updates and remote wipe.", "إدارة الأجهزة المحمولة (MDM) للهواتف والأجهزة اللوحية: فرض رموز المرور والتشفير والتحديثات والمسح عن بُعد."),
        l("Backups and recovery tested regularly.", "نسخ احتياطية واستعادة تُختبر بانتظام."),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("The vulnerability-management cycle", "دورة إدارة الثغرات"),
    caption: l("A continuous loop, not a project: new assets and new flaws appear every week, so discovery and scanning never stop.", "حلقة مستمرة لا مشروع: تظهر أصول وثغرات جديدة كل أسبوع فلا يتوقف الاكتشاف والفحص."),
    nodes: [
      { label: l("Discover assets", "اكتشاف الأصول"), desc: l("Inventory hardware, software, cloud, owners", "حصر العتاد والبرمجيات والسحابة والمالكين") },
      { label: l("Scan", "الفحص"), desc: l("Authenticated vulnerability scans", "فحوص ثغرات بمصادقة") },
      { label: l("Prioritise", "ترتيب الأولويات"), desc: l("Exploitation × exposure × asset value", "الاستغلال × التعرض × قيمة الأصل") },
      { label: l("Remediate", "المعالجة"), desc: l("Patch, configure, mitigate, isolate", "ترقيع وإعداد وتخفيف وعزل") },
      { label: l("Verify & report", "التحقق والإبلاغ"), desc: l("Re-scan, track time-to-patch", "إعادة فحص وتتبع زمن الترقيع") },
    ],
  },
  lab: {
    tool: "order",
    title: l("Lab 14 – Rank findings from a vulnerability scan", "المختبر 14 – رتّب نتائج فحص الثغرات"),
    scenario: l("A scan produced five findings and the team can fix only two this week. Rank them from most to least urgent using exploitation, exposure and asset value – not CVSS alone.", "أنتج فحص خمس نتائج ولا يستطيع الفريق إصلاح سوى اثنتين هذا الأسبوع. رتّبها من الأكثر إلى الأقل إلحاحًا باستخدام الاستغلال والتعرض وقيمة الأصل — لا CVSS وحده."),
    safety: l("Run vulnerability scanners only against assets you own or are authorised to scan, at agreed times, because scans can disrupt fragile systems. Handle scan reports as sensitive: they are a roadmap for attackers.", "شغّل ماسحات الثغرات فقط على أصول تملكها أو مفوّض بفحصها وفي أوقات متفق عليها لأن الفحص قد يعطل أنظمة هشة. وتعامل مع تقارير الفحص كمعلومات حساسة: فهي خريطة طريق للمهاجمين."),
    steps: [
      l("Read the five findings and note exposure, exploitation status and asset value for each.", "اقرأ النتائج الخمس ولاحظ التعرض وحالة الاستغلال وقيمة الأصل لكل منها."),
      l("Click the findings in your chosen order, most urgent first.", "انقر على النتائج بترتيبك المختار والأكثر إلحاحًا أولًا."),
      l("Check your order and read the hint for any misplaced item.", "تحقق من ترتيبك واقرأ التلميح لأي عنصر في غير موضعه."),
      l("For the top two, write the remediation action and a deadline (for example 48 hours for actively exploited, Internet-facing flaws).", "للأولَيَين اكتب إجراء المعالجة وموعدًا (مثل 48 ساعة للثغرات المستغلة المواجهة للإنترنت)."),
      l("For the lowest-ranked item, decide whether to patch in the normal cycle or accept the risk – and record who approves and when it expires.", "للعنصر الأدنى ترتيبًا قرر هل تُرقَّع في الدورة العادية أم يُقبل الخطر — وسجّل من يوافق ومتى تنتهي الموافقة."),
    ],
    expected: l("Correct order: exploited Internet-facing VPN flaw → Internet-facing web server with public exploit → critical internal server flaw → medium internal wiki issue → low isolated test machine; plus written actions and deadlines.", "الترتيب الصحيح: ثغرة VPN مستغلة ومواجهة للإنترنت ← خادم ويب مواجه للإنترنت باستغلال علني ← ثغرة حرجة على خادم داخلي ← مسألة متوسطة على ويكي داخلي ← جهاز اختبار معزول منخفض؛ مع إجراءات ومواعيد مكتوبة."),
    order: {
      prompt: l("Rank the scan findings: most urgent first", "رتّب نتائج الفحص: الأكثر إلحاحًا أولًا"),
      items: [
        { text: l("Critical remote-code-execution flaw in the Internet-facing VPN appliance; confirmed exploited in the wild (on the KEV list).", "ثغرة تنفيذ شيفرة عن بُعد حرجة في جهاز VPN المواجه للإنترنت؛ ومؤكد استغلالها في الواقع (ضمن KEV)."), hint: l("Exposed + actively exploited = first.", "مكشوفة ومستغلة فعليًا = الأولى.") },
        { text: l("High-severity flaw in the Internet-facing web server; public exploit code is available.", "ثغرة عالية الشدة في خادم الويب المواجه للإنترنت؛ شيفرة استغلال علنية متاحة."), hint: l("Exposed with a public exploit – very soon.", "مكشوفة مع استغلال علني — قريبًا جدًا.") },
        { text: l("Critical flaw on an internal file server in a segmented network; no known exploit.", "ثغرة حرجة على خادم ملفات داخلي في شبكة مقسّمة؛ لا استغلال معروف."), hint: l("High score, but not reachable and not exploited.", "درجة عالية لكن غير قابلة للوصول وغير مستغلة.") },
        { text: l("Medium cross-site scripting issue on the internal staff wiki.", "مسألة نصوص عبر المواقع متوسطة على ويكي الموظفين الداخلي."), hint: l("Internal, limited impact.", "داخلية وأثرها محدود.") },
        { text: l("Low-severity information disclosure on an isolated test machine holding no real data.", "كشف معلومات منخفض الشدة على جهاز اختبار معزول لا يحمل بيانات حقيقية."), hint: l("Lowest value and exposure.", "أدنى قيمة وتعرض.") },
      ],
    },
  },
  quiz: [
    { q: l("What does CVE stand for and do?", "ماذا يعني CVE وماذا يفعل؟"), options: [l("A unique identifier for a publicly known vulnerability", "معرّف فريد لثغرة معروفة علنًا"), l("A type of firewall", "نوع من الجدران النارية"), l("A malware family", "عائلة برمجيات خبيثة"), l("A password standard", "معيار لكلمات المرور")], answer: 0, why: l("Common Vulnerabilities and Exposures gives each flaw a standard ID.", "تمنح CVE كل ثغرة رقمًا معياريًا.") },
    { q: l("A CVSS score of 9.8 is rated…", "درجة CVSS 9.8 تُصنَّف…"), options: [l("Low", "منخفضة"), l("Medium", "متوسطة"), l("High", "عالية"), l("Critical", "حرجة")], answer: 3, why: l("9.0–10.0 is Critical.", "النطاق 9.0–10.0 حرج.") },
    { q: l("Which factor most strongly raises patch priority?", "أي عامل يرفع أولوية الترقيع أكثر؟"), options: [l("The vendor's logo", "شعار المورّد"), l("Active exploitation in the wild on an Internet-facing asset", "استغلال فعلي في الواقع على أصل مواجه للإنترنت"), l("The patch size", "حجم الرقعة"), l("The age of the server", "عمر الخادم")], answer: 1, why: l("Real attacks plus exposure mean the risk is immediate.", "الهجمات الحقيقية مع التعرض تعني خطرًا فوريًا.") },
    { q: l("Why are authenticated scans valuable?", "لماذا تفيد الفحوص بمصادقة؟"), options: [l("They are faster", "أسرع"), l("They see installed software and missing patches from the inside", "ترى البرمجيات المثبتة والرقع الناقصة من الداخل"), l("They hide results", "تخفي النتائج"), l("They need no credentials", "لا تحتاج بيانات دخول")], answer: 1, why: l("Logging in reveals local patch levels and configuration that remote probing cannot see.", "يكشف الدخول مستويات الترقيع والإعدادات المحلية التي لا يراها الفحص البعيد.") },
    { q: l("What should be done with an unpatchable end-of-life system that must stay running?", "ماذا يُفعل بنظام منتهي العمر لا يمكن ترقيعه ويجب أن يبقى عاملًا؟"), options: [l("Ignore it", "تجاهله"), l("Isolate it, restrict access, monitor it and plan replacement", "عزله وتقييد الوصول ومراقبته والتخطيط للاستبدال"), l("Expose it to the Internet", "تعريضه للإنترنت"), l("Disable logging", "تعطيل التسجيل")], answer: 1, why: l("Compensating controls reduce risk while replacement is planned.", "الضوابط التعويضية تقلل الخطر ريثما يُخطَّط للاستبدال.") },
    { q: l("The first step of the vulnerability-management cycle is…", "الخطوة الأولى في دورة إدارة الثغرات هي…"), options: [l("Patching", "الترقيع"), l("Knowing your assets", "معرفة أصولك"), l("Buying a firewall", "شراء جدار ناري"), l("Hiring a hacker", "توظيف مخترق")], answer: 1, why: l("You cannot scan or patch what you do not know exists.", "لا يمكنك فحص أو ترقيع ما لا تعلم بوجوده.") },
    { q: l("Which metric best shows how responsive a patch process is?", "أي مقياس يوضح أفضل استجابة عملية الترقيع؟"), options: [l("Number of servers", "عدد الخوادم"), l("Time-to-patch for critical vulnerabilities", "زمن الترقيع للثغرات الحرجة"), l("Number of employees", "عدد الموظفين"), l("Screen resolution", "دقة الشاشة")], answer: 1, why: l("It measures how long exposure to serious flaws lasts.", "يقيس مدة التعرض للثغرات الخطيرة.") },
  ],
  homework: {
    title: l("Homework 14 – Mini patch audit", "الواجب 14 – تدقيق ترقيع مصغّر"),
    tasks: [
      l("List every device you use (phone, laptop, tablet, router, smart TV, console) with its OS/firmware version.", "اذكر كل جهاز تستخدمه (هاتف، حاسوب، لوحي، موجّه، تلفاز ذكي، منصة ألعاب) مع إصدار نظامه/برمجيته."),
      l("Check each for pending updates and whether it still receives security updates (look up end-of-support dates).", "تحقق من كل منها لوجود تحديثات معلقة وهل لا يزال يتلقى تحديثات أمنية (ابحث عن تواريخ انتهاء الدعم)."),
      l("Visit CISA's Known Exploited Vulnerabilities catalogue and note two entries affecting products you use or know.", "زر كتالوج CISA للثغرات المستغلة المعروفة ودوّن مدخلين يمسّان منتجات تستخدمها أو تعرفها."),
      l("Create a 'device register' with owner, version, update status and next action.", "أنشئ «سجل أجهزة» بالمالك والإصدار وحالة التحديث والإجراء التالي."),
    ],
    deliverable: l("The completed device register and a one-paragraph summary of your highest-risk device and how you will fix it.", "سجل الأجهزة المكتمل وفقرة تلخص أعلى أجهزتك خطرًا وكيف ستصلحه."),
  },
  refs: [
    { title: "Known Exploited Vulnerabilities Catalog", org: "CISA", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" },
    { title: "National Vulnerability Database", org: "NIST", url: "https://nvd.nist.gov/" },
    { title: "CVSS specification", org: "FIRST", url: "https://www.first.org/cvss/" },
    { title: "Guide to Enterprise Patch Management Planning (SP 800-40 Rev.4)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/40/r4/final" },
    { title: "Vulnerability management guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/vulnerability-management" },
  ],
  terms: [
    { term: l("Vulnerability", "الثغرة"), def: l("A weakness that can be exploited to compromise security.", "ضعف يمكن استغلاله لانتهاك الأمن.") },
    { term: l("CVE", "معرّف الثغرات الشائعة"), def: l("Standard identifier for a publicly known vulnerability.", "معرّف قياسي لثغرة معروفة علنًا.") },
    { term: l("CVSS", "نظام تسجيل الثغرات"), def: l("Scoring system rating technical severity from 0 to 10.", "نظام تقييم يعطي الشدة التقنية من 0 إلى 10.") },
    { term: l("KEV", "كتالوج الثغرات المستغلة"), def: l("CISA's list of vulnerabilities known to be exploited in the wild.", "قائمة CISA للثغرات المعروف استغلالها في الواقع.") },
    { term: l("Patch", "الرقعة"), def: l("A software update that fixes flaws.", "تحديث برمجي يصلح الثغرات.") },
    { term: l("Zero-day", "ثغرة اليوم الصفري"), def: l("A flaw exploited before a fix is available.", "ثغرة تُستغل قبل توفر إصلاح.") },
    { term: l("Configuration drift", "انحراف الإعدادات"), def: l("Gradual deviation of systems from their approved secure baseline.", "ابتعاد الأنظمة تدريجيًا عن خط الأساس الآمن المعتمد.") },
    { term: l("EDR / MDM", "EDR / MDM"), def: l("Endpoint detection & response / mobile device management.", "كشف النقاط الطرفية والاستجابة / إدارة الأجهزة المحمولة.") },
  ],
};
