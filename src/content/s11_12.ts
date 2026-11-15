import { l, type Session } from "./types";

export const s11: Session = {
  id: 11,
  phase: 3,
  minutes: 60,
  title: l("Authentication: Passwords, MFA and Passkeys", "المصادقة: كلمات المرور والمصادقة متعددة العوامل ومفاتيح المرور"),
  summary: l(
    "How systems verify identity, why passwords fail, how attackers crack and reuse them, and the modern defences: password managers, MFA and phishing-resistant passkeys.",
    "كيف تتحقق الأنظمة من الهوية، ولماذا تفشل كلمات المرور، وكيف يكسرها المهاجمون ويعيدون استخدامها، والدفاعات الحديثة: مديرو كلمات المرور وMFA ومفاتيح المرور المقاومة للتصيّد."
  ),
  objectives: [
    l("Differentiate identification, authentication and authorisation.", "التمييز بين تعريف الهوية والمصادقة والتفويض."),
    l("Explain the main password attacks and what makes a password strong.", "شرح هجمات كلمات المرور الرئيسية وما يجعل كلمة المرور قوية."),
    l("Compare authentication factors and MFA methods by phishing resistance.", "المقارنة بين عوامل المصادقة وطرق MFA من حيث مقاومة التصيّد."),
    l("Apply modern password guidance (length, uniqueness, managers, breach checks).", "تطبيق الإرشادات الحديثة لكلمات المرور (الطول والتفرد والمديرون وفحص التسريبات)."),
  ],
  sections: [
    {
      h: l("1. Identity, authentication and authorisation", "1. الهوية والمصادقة والتفويض"),
      p: [
        l("Identification is claiming an identity (a username). Authentication is proving it. Authorisation decides what the proven identity may do. Accounting (logging) records what it did. Together these are the AAA services. Authentication proves one or more factors: something you know (password, PIN), something you have (phone, hardware key, smart card) and something you are (fingerprint, face). Using two or more different categories is multi-factor authentication (MFA); two passwords is not MFA.", "تعريف الهوية هو ادّعاء هوية (اسم مستخدم). والمصادقة هي إثباتها. والتفويض يقرر ما يحق للهوية المثبتة فعله. والمحاسبة (التسجيل) توثق ما فعلته. وهذه معًا خدمات AAA. وتثبت المصادقة عاملًا أو أكثر: شيء تعرفه (كلمة مرور، رقم سري) وشيء تملكه (هاتف، مفتاح عتادي، بطاقة ذكية) وشيء أنت عليه (بصمة، وجه). واستخدام فئتين مختلفتين أو أكثر هو المصادقة متعددة العوامل (MFA)؛ أما كلمتا مرور فليستا MFA."),
      ],
    },
    {
      h: l("2. How passwords are attacked", "2. كيف تُهاجَم كلمات المرور"),
      p: [l("Understanding attacks explains the advice. Attackers rarely type guesses by hand.", "فهم الهجمات يفسر النصائح. ونادرًا ما يكتب المهاجمون التخمينات يدويًا.")],
      table: {
        head: [l("Attack", "الهجوم"), l("How it works", "كيف يعمل"), l("Best defence", "أفضل دفاع")],
        rows: [
          [l("Brute force", "القوة الغاشمة"), l("Tries every combination (online, or offline against a stolen hash database).", "يجرب كل التركيبات (عبر الشبكة أو دون اتصال على قاعدة تجزئات مسروقة)."), l("Length, slow hashing, lockout/rate limiting", "الطول، التجزئة البطيئة، القفل/تحديد المعدل")],
          [l("Dictionary / rule-based", "القاموس / القواعد"), l("Tries common words and patterns like Summer2024!.", "يجرب كلمات وأنماطًا شائعة مثل Summer2024!."), l("Avoid predictable patterns; blocklists", "تجنب الأنماط المتوقعة؛ قوائم الحظر")],
          [l("Credential stuffing", "حشو بيانات الدخول"), l("Reuses leaked e-mail/password pairs on other sites.", "يعيد استخدام أزواج بريد/كلمة مرور مسرّبة في مواقع أخرى."), l("Unique password per site, MFA", "كلمة مرور فريدة لكل موقع، MFA")],
          [l("Password spraying", "رش كلمات المرور"), l("One common password tried across many accounts to avoid lockouts.", "كلمة مرور شائعة واحدة تُجرَّب على حسابات كثيرة لتفادي القفل."), l("MFA, monitoring failed logins across accounts", "MFA، مراقبة محاولات الفشل عبر الحسابات")],
          [l("Phishing / infostealers", "التصيّد / سارقو المعلومات"), l("Tricks the user or malware steals the typed or saved password.", "يخدع المستخدم أو تسرق برمجية الكلمة المكتوبة أو المحفوظة."), l("Phishing-resistant MFA, endpoint protection", "MFA مقاوم للتصيّد، حماية الأجهزة")],
          [l("Shoulder surfing / keylogging", "التلصص / مسجلات المفاتيح"), l("Observes or records keystrokes.", "يراقب أو يسجل ضغطات المفاتيح."), l("Awareness, anti-malware, password managers", "الوعي، مكافحة البرمجيات الخبيثة، مديرو كلمات المرور")],
        ],
      },
    },
    {
      h: l("3. What makes a strong password today", "3. ما الذي يجعل كلمة المرور قوية اليوم"),
      p: [
        l("Entropy (measured in bits) estimates how unpredictable a secret is. Each added character multiplies the possibilities, so length beats complexity: a random 4-word passphrase can be stronger and easier to remember than an 8-character mix of symbols. Current guidance from NIST (SP 800-63B) is: prefer length (at least 8, ideally 15 or more), allow all characters and long passphrases, check new passwords against lists of breached and common passwords, do not force periodic changes (change only after suspected compromise) and do not use security questions or composition rules that push users toward predictable patterns.", "تقدّر الإنتروبيا (بالبتات) مدى عدم قابلية السر للتوقع. وكل حرف مضاف يضاعف الاحتمالات، لذا يتفوق الطول على التعقيد: عبارة مرور عشوائية من 4 كلمات قد تكون أقوى وأسهل حفظًا من 8 رموز مختلطة. والإرشاد الحالي من NIST (SP 800-63B): فضّل الطول (8 على الأقل ويفضل 15 أو أكثر)، وأتح كل الرموز والعبارات الطويلة، وافحص كلمات المرور الجديدة بقوائم التسريبات والشائعة، ولا تفرض تغييرًا دوريًا (غيّر فقط عند الاشتباه بالاختراق)، ولا تستخدم أسئلة الأمان أو قواعد تركيب تدفع المستخدمين لأنماط متوقعة."),
        l("A password manager solves the human problem: it generates and stores a long random unique password for every account, fills it only on the real domain (which also helps defeat phishing), and you remember a single strong master passphrase protected by MFA. Never reuse the master passphrase elsewhere.", "يحل مدير كلمات المرور المشكلة البشرية: فهو يولّد ويخزّن كلمة مرور عشوائية طويلة فريدة لكل حساب، ويملؤها فقط في النطاق الحقيقي (وهذا يساعد على إفشال التصيّد)، وأنت تتذكر عبارة مرور رئيسية قوية واحدة محمية بـ MFA. ولا تعد استخدام العبارة الرئيسية في أي مكان آخر."),
      ],
      callout: { kind: "tip", text: l("Check whether your e-mail appears in known breaches with a reputable breach-notification service, and change the passwords of any affected accounts.", "تحقق إن كان بريدك ضمن تسريبات معروفة عبر خدمة إشعار تسريبات موثوقة وغيّر كلمات مرور الحسابات المتأثرة.") },
    },
    {
      h: l("4. Multi-factor authentication and passkeys", "4. المصادقة متعددة العوامل ومفاتيح المرور"),
      p: [
        l("MFA stops the large majority of automated account takeovers, because a stolen password alone is no longer enough. Not all factors are equal: SMS codes can be intercepted via SIM-swapping; app-based one-time codes (TOTP) are better but can be phished in real time by a look-alike site; push approvals can be abused by 'MFA fatigue' bombing (use number matching); FIDO2 hardware keys and passkeys are the strongest, because the cryptographic response is bound to the real website's domain and cannot be replayed on a fake one.", "توقف المصادقة متعددة العوامل الغالبية العظمى من عمليات الاستيلاء الآلي على الحسابات، لأن كلمة المرور المسروقة وحدها لم تعد كافية. وليست العوامل كلها سواء: رموز SMS يمكن اعتراضها عبر تبديل الشريحة؛ والرموز المؤقتة من تطبيق (TOTP) أفضل لكنها قد تُصطاد لحظيًا بموقع مشابه؛ وموافقات الإشعارات قد تُستغل بإغراق «إرهاق MFA» (استخدم مطابقة الأرقام)؛ ومفاتيح FIDO2 العتادية ومفاتيح المرور هي الأقوى لأن الاستجابة التشفيرية مرتبطة بنطاق الموقع الحقيقي ولا يمكن إعادة استخدامها على موقع مزيف."),
        l("Passkeys replace the password with a key pair: the private key stays on your device (protected by a biometric or PIN) and the website stores only the public key. Nothing secret crosses the network, so there is nothing to phish, stuff or leak from the server. Also plan account recovery carefully: weak recovery questions or help-desk resets are the favourite way around strong authentication.", "تستبدل مفاتيح المرور كلمة المرور بزوج مفاتيح: يبقى المفتاح الخاص على جهازك (محميًا ببصمة أو رقم سري) ولا يخزّن الموقع إلا المفتاح العام. ولا ينتقل أي سر عبر الشبكة فلا شيء يُصطاد أو يُحشى أو يتسرب من الخادم. وخطط أيضًا لاستعادة الحساب بعناية: فأسئلة الاستعادة الضعيفة وإعادة التعيين عبر مكتب المساعدة هي الطريق المفضل للالتفاف على المصادقة القوية."),
      ],
      table: {
        head: [l("MFA method", "طريقة MFA"), l("Phishing resistance", "مقاومة التصيّد"), l("Comment", "تعليق")],
        rows: [
          [l("SMS code", "رمز SMS"), l("Low", "منخفضة"), l("Better than nothing; SIM-swap risk", "أفضل من لا شيء؛ خطر تبديل الشريحة")],
          [l("Authenticator app (TOTP)", "تطبيق المصادقة (TOTP)"), l("Medium", "متوسطة"), l("Offline, but can be relayed by fake sites", "يعمل دون اتصال لكن قد يُمرَّر عبر مواقع مزيفة")],
          [l("Push with number matching", "إشعار مع مطابقة الأرقام"), l("Medium", "متوسطة"), l("Reduces accidental approvals", "يقلل الموافقات العرضية")],
          [l("FIDO2 key / passkey", "مفتاح FIDO2 / مفتاح مرور"), l("High", "عالية"), l("Bound to the real domain", "مرتبط بالنطاق الحقيقي")],
        ],
      },
    },
  ],
  diagram: {
    kind: "grid",
    title: l("Three authentication factors – combine categories, not copies", "عوامل المصادقة الثلاثة – اجمع بين الفئات لا النسخ"),
    caption: l("MFA requires at least two different categories. The strongest modern option removes the shared secret entirely (passkeys).", "تتطلب MFA فئتين مختلفتين على الأقل. وأقوى خيار حديث يزيل السر المشترك كليًا (مفاتيح المرور)."),
    nodes: [
      { label: l("Something you KNOW", "شيء تعرفه"), desc: l("Password, PIN, passphrase – can be guessed, phished, leaked", "كلمة مرور أو رقم سري أو عبارة – قد تُخمَّن أو تُصطاد أو تتسرب") },
      { label: l("Something you HAVE", "شيء تملكه"), desc: l("Phone app, hardware key, smart card – can be lost or stolen", "تطبيق هاتف أو مفتاح عتادي أو بطاقة ذكية – قد تُفقد أو تُسرق") },
      { label: l("Something you ARE", "شيء أنت عليه"), desc: l("Fingerprint, face – convenient, cannot be changed if leaked", "بصمة أو وجه – مريحة ولا يمكن تغييرها إن تسربت") },
      { label: l("Somewhere you ARE (context)", "مكان وجودك (السياق)"), desc: l("Location, device health, time – adds risk signals", "الموقع وسلامة الجهاز والوقت – تضيف إشارات خطر") },
      { label: l("Passkey (FIDO2)", "مفتاح المرور (FIDO2)"), desc: l("Device key + biometric/PIN, bound to the real site", "مفتاح الجهاز + بصمة/رقم سري، مرتبط بالموقع الحقيقي") },
      { label: l("Password manager", "مدير كلمات المرور"), desc: l("Unique long passwords, auto-fills only on the real domain", "كلمات مرور طويلة فريدة وتُملأ فقط في النطاق الحقيقي") },
    ],
  },
  lab: {
    tool: "password",
    title: l("Lab 11 – Measure password strength and plan a better setup", "المختبر 11 – قِس قوة كلمة المرور وخطط لإعداد أفضل"),
    scenario: l("A colleague says 'my password Summer2024! is complex – it has upper, lower, number and symbol'. Use the entropy estimator to test that claim and compare it with alternatives.", "يقول زميل «كلمة مروري Summer2024! معقدة – فيها حروف كبيرة وصغيرة ورقم ورمز». استخدم مقدّر الإنتروبيا لاختبار الادعاء ومقارنته ببدائل."),
    safety: l("Use only invented example passwords in the tool. Never type a password you currently use anywhere, even in a local tool, and never share passwords with anyone – including 'IT support'.", "استخدم كلمات مرور مخترعة كأمثلة فقط في الأداة. لا تكتب كلمة مرور تستخدمها حاليًا في أي مكان حتى في أداة محلية، ولا تشاركها مع أحد — ولو «الدعم الفني»."),
    steps: [
      l("Enter Summer2024! and note the entropy and cracking time shown.", "أدخل Summer2024! ولاحظ الإنتروبيا وزمن الكسر المعروضين."),
      l("Enter 'password' and 'Passw0rd' – compare with the 'common password' warning.", "أدخل «password» و«Passw0rd» وقارن مع تحذير «كلمة مرور شائعة»."),
      l("Enter a 12-character random-looking string (invent one) and then the passphrase 'violet-harbor-tractor-lemon-quiet'; compare bits and time.", "أدخل سلسلة عشوائية المظهر من 12 حرفًا (اخترع واحدة) ثم عبارة المرور 'violet-harbor-tractor-lemon-quiet' وقارن البتات والزمن."),
      l("Explain why the tool's number overestimates the strength of Summer2024! (human pattern: season + year + symbol).", "اشرح لماذا يبالغ رقم الأداة في تقدير قوة Summer2024! (نمط بشري: فصل + سنة + رمز)."),
      l("Write your personal plan: password manager, MFA on e-mail and banking first, passkeys where offered, and the recovery methods you will keep updated.", "اكتب خطتك الشخصية: مدير كلمات مرور، وMFA للبريد والبنك أولًا، ومفاتيح مرور حيث تتوافر، وطرق الاستعادة التي ستحدّثها."),
    ],
    expected: l("You show that length beats complexity, that common patterns are weaker than their entropy suggests, and produce a prioritised plan for password manager + MFA.", "تثبت أن الطول يتفوق على التعقيد وأن الأنماط الشائعة أضعف مما توحي إنتروبيتها وتضع خطة مرتبة الأولويات لمدير كلمات المرور وMFA."),
  },
  quiz: [
    { q: l("Which two items together make genuine multi-factor authentication?", "أي عنصرين معًا يشكّلان مصادقة متعددة العوامل حقيقية؟"), options: [l("Password + security question", "كلمة مرور + سؤال أمان"), l("Password + authenticator app code", "كلمة مرور + رمز تطبيق مصادقة"), l("Two different passwords", "كلمتا مرور مختلفتان"), l("PIN + password", "رقم سري + كلمة مرور")], answer: 1, why: l("It combines 'something you know' with 'something you have'. The others are all knowledge factors.", "تجمع «شيئًا تعرفه» مع «شيء تملكه». أما الباقي فكله عوامل معرفة.") },
    { q: l("Credential stuffing relies on…", "يعتمد حشو بيانات الدخول على…"), options: [l("Reuse of leaked passwords across sites", "إعادة استخدام كلمات مرور مسرّبة عبر المواقع"), l("Breaking encryption", "كسر التشفير"), l("Physical theft", "السرقة المادية"), l("DNS poisoning", "تسميم DNS")], answer: 0, why: l("Attackers automate login attempts using breached pairs; unique passwords break the attack.", "يؤتمت المهاجمون محاولات الدخول بأزواج مسرّبة؛ وكلمات المرور الفريدة تُفشل الهجوم.") },
    { q: l("According to current NIST guidance, which is best?", "وفق إرشادات NIST الحالية أيّ مما يلي أفضل؟"), options: [l("Force password change every 30 days", "فرض تغيير كلمة المرور كل 30 يومًا"), l("Prefer long passphrases and check against breached lists", "تفضيل العبارات الطويلة والفحص بقوائم التسريبات"), l("Require exactly one symbol", "اشتراط رمز واحد بالضبط"), l("Use security questions", "استخدام أسئلة الأمان")], answer: 1, why: l("Length and breach-checking help; forced rotation and composition rules cause predictable patterns.", "الطول وفحص التسريبات يفيدان؛ والتدوير الإجباري وقواعد التركيب تنتج أنماطًا متوقعة.") },
    { q: l("Which MFA method is the most phishing-resistant?", "أي طريقة MFA هي الأكثر مقاومة للتصيّد؟"), options: [l("SMS code", "رمز SMS"), l("Email code", "رمز البريد"), l("FIDO2 security key / passkey", "مفتاح أمان FIDO2 / مفتاح مرور"), l("Security question", "سؤال أمان")], answer: 2, why: l("The cryptographic proof is tied to the genuine site's domain.", "الإثبات التشفيري مرتبط بنطاق الموقع الحقيقي.") },
    { q: l("Password spraying means…", "رش كلمات المرور يعني…"), options: [l("Trying many passwords on one account", "تجربة كلمات مرور كثيرة على حساب واحد"), l("Trying one or a few common passwords across many accounts", "تجربة كلمة أو بضع كلمات شائعة على حسابات كثيرة"), l("Stealing a password manager", "سرقة مدير كلمات مرور"), l("Cracking a Wi-Fi key", "كسر مفتاح واي فاي")], answer: 1, why: l("It avoids per-account lockouts by staying below the threshold.", "يتفادى القفل لكل حساب بالبقاء تحت العتبة.") },
    { q: l("Why is a password manager recommended?", "لماذا يُوصى بمدير كلمات المرور؟"), options: [l("It lets you reuse one password", "يتيح إعادة استخدام كلمة مرور واحدة"), l("It creates unique strong passwords and fills them only on real domains", "ينشئ كلمات مرور قوية فريدة ويملؤها في النطاقات الحقيقية فقط"), l("It removes the need for updates", "يلغي الحاجة للتحديثات"), l("It disables MFA", "يعطل MFA")], answer: 1, why: l("It removes memory limits and gives phishing protection through domain matching.", "يزيل حدود الذاكرة ويمنح حماية من التصيّد بمطابقة النطاق.") },
    { q: l("Which of these has the highest entropy (assume random)?", "أي مما يلي أعلى إنتروبيا (بافتراض العشوائية)؟"), options: [l("8 characters, all character types", "8 رموز من كل الأنواع"), l("16 random lowercase letters", "16 حرفًا صغيرًا عشوائيًا"), l("The word 'password' with a ! at the end", "كلمة password مع ! في آخرها"), l("Your birth year", "سنة ميلادك")], answer: 1, why: l("16×log2(26) ≈ 75 bits versus ≈ 52 bits for 8 characters from a 95-symbol set.", "16×log2(26) ≈ 75 بتًا مقابل ≈ 52 بتًا لـ 8 رموز من مجموعة 95.") },
  ],
  homework: {
    title: l("Homework 11 – Upgrade your own authentication", "الواجب 11 – طوّر مصادقتك الشخصية"),
    tasks: [
      l("Set up a reputable password manager (or built-in OS/browser manager) and move your five most important accounts into it with new unique passwords.", "أعدّ مدير كلمات مرور موثوقًا (أو المدمج في النظام/المتصفح) وانقل أهم خمسة حسابات إليه بكلمات مرور فريدة جديدة."),
      l("Enable MFA on e-mail, banking and social accounts – choose an app or hardware key rather than SMS where possible.", "فعّل MFA على البريد والبنك والحسابات الاجتماعية — واختر تطبيقًا أو مفتاحًا عتاديًا بدل SMS إن أمكن."),
      l("Enable a passkey on at least one service that supports it.", "فعّل مفتاح مرور على خدمة واحدة على الأقل تدعمه."),
      l("Review and update account recovery options (backup codes stored offline, recovery e-mail, phone number).", "راجع وحدّث خيارات استعادة الحساب (رموز احتياطية مخزنة دون اتصال، بريد استعادة، رقم هاتف)."),
    ],
    deliverable: l("A table: account | old protection | new protection | recovery method, plus a note about where backup codes are stored.", "جدول: الحساب | الحماية القديمة | الحماية الجديدة | طريقة الاستعادة، مع ملاحظة عن مكان حفظ الرموز الاحتياطية."),
  },
  refs: [
    { title: "Digital Identity Guidelines: Authentication (SP 800-63B)", org: "NIST", url: "https://pages.nist.gov/800-63-4/sp800-63b.html" },
    { title: "Authentication Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
    { title: "Passkeys overview", org: "FIDO Alliance", url: "https://fidoalliance.org/passkeys/" },
    { title: "Have I Been Pwned", org: "Troy Hunt", url: "https://haveibeenpwned.com/" },
  ],
  terms: [
    { term: l("Authentication", "المصادقة"), def: l("Proving that a claimed identity is genuine.", "إثبات أن الهوية المدّعاة حقيقية.") },
    { term: l("MFA", "المصادقة متعددة العوامل"), def: l("Using two or more different categories of authentication factors.", "استخدام فئتين أو أكثر مختلفتين من عوامل المصادقة.") },
    { term: l("Credential stuffing", "حشو بيانات الدخول"), def: l("Automated login attempts using leaked username/password pairs.", "محاولات دخول آلية بأزواج مستخدم/كلمة مرور مسرّبة.") },
    { term: l("Entropy", "الإنتروبيا"), def: l("A measure, in bits, of how unpredictable a secret is.", "مقياس بالبتات لمدى عدم قابلية السر للتوقع.") },
    { term: l("TOTP", "كلمة مرور مؤقتة زمنيًا"), def: l("Time-based one-time password generated by an authenticator app.", "كلمة مرور لمرة واحدة تعتمد على الوقت يولدها تطبيق مصادقة.") },
    { term: l("Passkey", "مفتاح المرور"), def: l("A FIDO2 credential using a device-held private key instead of a password.", "اعتماد FIDO2 يستخدم مفتاحًا خاصًا على الجهاز بدل كلمة المرور.") },
    { term: l("SIM swapping", "تبديل الشريحة"), def: l("Fraudulently moving a victim's phone number to the attacker's SIM.", "نقل رقم هاتف الضحية احتياليًا إلى شريحة المهاجم.") },
  ],
};

export const s12: Session = {
  id: 12,
  phase: 3,
  minutes: 60,
  title: l("Access Control and Identity & Access Management (IAM)", "التحكم بالوصول وإدارة الهوية والوصول (IAM)"),
  summary: l(
    "How organisations decide who can do what: AAA, access control models (DAC, MAC, RBAC, ABAC), least privilege, separation of duties, the joiner-mover-leaver lifecycle, SSO and privileged access.",
    "كيف تقرر المؤسسات من يستطيع فعل ماذا: AAA ونماذج التحكم بالوصول (DAC وMAC وRBAC وABAC) وأقل صلاحية وفصل المهام ودورة الانضمام-النقل-المغادرة وSSO والوصول الممتاز."
  ),
  objectives: [
    l("Describe AAA and the difference between authentication and authorisation.", "وصف AAA والفرق بين المصادقة والتفويض."),
    l("Compare DAC, MAC, RBAC and ABAC and choose where each fits.", "المقارنة بين DAC وMAC وRBAC وABAC واختيار موضع كلٍّ منها."),
    l("Apply least privilege, need-to-know and separation of duties.", "تطبيق أقل صلاحية والحاجة إلى المعرفة وفصل المهام."),
    l("Explain the identity lifecycle, SSO/federation and privileged access management.", "شرح دورة حياة الهوية وSSO/الاتحاد وإدارة الوصول الممتاز."),
  ],
  sections: [
    {
      h: l("1. Why access control matters", "1. لماذا يهم التحكم بالوصول"),
      p: [
        l("Access control enforces policy over who (subject) may perform which action (read, write, delete, approve) on which resource (object). After authentication proves identity, authorisation decides the permitted actions, and accounting logs what happened. Weak access control is consistently among the top causes of breaches: broken access control is the number-one category in the OWASP Top 10, and most ransomware operators rely on over-privileged accounts to spread.", "يفرض التحكم بالوصول سياسة حول من (الفاعل) يستطيع تنفيذ أي إجراء (قراءة، كتابة، حذف، اعتماد) على أي مورد (الكائن). وبعد أن تثبت المصادقة الهوية يقرر التفويض الإجراءات المسموحة وتسجّل المحاسبة ما جرى. ويُعد ضعف التحكم بالوصول باستمرار من أبرز أسباب الاختراقات: فالتحكم المكسور بالوصول هو الفئة الأولى في OWASP Top 10 ويعتمد معظم مشغّلي الفدية على حسابات مفرطة الصلاحية للانتشار."),
      ],
    },
    {
      h: l("2. Access control models", "2. نماذج التحكم بالوصول"),
      p: [l("Different models answer 'who decides?' differently:", "تجيب النماذج المختلفة عن سؤال «من يقرر؟» بطرق مختلفة:")],
      table: {
        head: [l("Model", "النموذج"), l("Who decides", "من يقرر"), l("How", "كيف"), l("Typical use", "الاستخدام المعتاد")],
        rows: [
          [l("DAC – Discretionary", "DAC – تقديري"), l("The resource owner", "مالك المورد"), l("Owner grants rights to others (file sharing, chmod)", "يمنح المالك الحقوق للآخرين (مشاركة الملفات وchmod)"), l("Personal and team files", "الملفات الشخصية والجماعية")],
          [l("MAC – Mandatory", "MAC – إلزامي"), l("The system / central authority", "النظام / سلطة مركزية"), l("Labels on data and clearances on users (Secret, Top Secret)", "تصنيفات على البيانات وتصاريح للمستخدمين (سري، سري للغاية)"), l("Military, government, SELinux", "العسكري والحكومي وSELinux")],
          [l("RBAC – Role-based", "RBAC – بالأدوار"), l("Administrators define roles", "المديرون يعرّفون الأدوار"), l("Permissions attach to roles; users get roles", "ترتبط الصلاحيات بالأدوار ويحصل المستخدمون على أدوار"), l("Most enterprises", "معظم المؤسسات")],
          [l("ABAC – Attribute-based", "ABAC – بالسمات"), l("A policy engine", "محرك سياسات"), l("Rules on attributes: department, location, time, device health, data sensitivity", "قواعد على السمات: القسم والموقع والوقت وسلامة الجهاز وحساسية البيانات"), l("Cloud, zero trust, fine-grained rules", "السحابة وانعدام الثقة والقواعد الدقيقة")],
        ],
      },
    },
    {
      h: l("3. Core principles", "3. المبادئ الأساسية"),
      p: [l("Whatever model you use, apply these principles:", "أيًّا كان النموذج، طبّق هذه المبادئ:")],
      bullets: [
        l("Least privilege – give only the permissions needed for the job, for the shortest time needed. Prefer read over write, and temporary elevation over permanent admin rights.", "أقل صلاحية – امنح فقط الصلاحيات اللازمة للعمل وللمدة الأقصر اللازمة. فضّل القراءة على الكتابة والرفع المؤقت على صلاحيات المدير الدائمة."),
        l("Need-to-know – even with the right clearance, access is limited to the information needed for the task.", "الحاجة إلى المعرفة – حتى مع التصريح المناسب يقتصر الوصول على المعلومات اللازمة للمهمة."),
        l("Separation of duties – no single person can complete a critical process alone (one raises a payment, another approves it), preventing fraud and errors.", "فصل المهام – لا يستطيع شخص واحد إتمام عملية حرجة بمفرده (واحد ينشئ الدفعة وآخر يعتمدها) منعًا للاحتيال والأخطاء."),
        l("Default deny – access is refused unless explicitly granted.", "المنع افتراضيًا – يُرفض الوصول ما لم يُمنح صراحة."),
        l("Individual accounts – no shared logins, so every action is attributable (accountability).", "حسابات فردية – لا دخول مشترك ليمكن نسب كل إجراء لصاحبه (المساءلة)."),
      ],
    },
    {
      h: l("4. The identity lifecycle, SSO and privileged access", "4. دورة حياة الهوية وSSO والوصول الممتاز"),
      p: [
        l("Identity and Access Management (IAM) manages digital identities through a lifecycle. Joiner: create the account with role-based starter access. Mover: when someone changes jobs, remove old permissions (otherwise 'privilege creep' accumulates). Leaver: disable accounts and revoke tokens immediately at departure. Periodic access reviews (recertification) ask managers to confirm that each person's access is still justified. Orphaned accounts of former staff are a classic attack path.", "تدير إدارة الهوية والوصول (IAM) الهويات الرقمية عبر دورة حياة. المنضم: إنشاء الحساب بوصول مبدئي بحسب الدور. المنتقل: عند تغيير الوظيفة تُزال الصلاحيات القديمة (وإلا تتراكم «زحف الصلاحيات»). المغادر: تعطيل الحسابات وإلغاء الرموز فور المغادرة. وتطلب المراجعات الدورية للوصول (إعادة التصديق) من المديرين تأكيد أن وصول كل شخص لا يزال مبررًا. والحسابات اليتيمة للموظفين السابقين مسار هجوم كلاسيكي."),
        l("Single Sign-On (SSO) lets users authenticate once with a central identity provider and reach many applications using standards such as SAML or OpenID Connect; it improves usability and lets you enforce MFA and conditional access in one place. Federation extends trust between organisations. Privileged Access Management (PAM) protects administrator accounts: separate admin accounts, just-in-time elevation, vaulted credentials, session recording and strong MFA — because one compromised admin account usually means total compromise. Service accounts and API keys are identities too and need owners, rotation and minimal rights.", "يتيح الدخول الموحد (SSO) للمستخدمين المصادقة مرة واحدة لدى مزوّد هوية مركزي والوصول إلى تطبيقات كثيرة بمعايير مثل SAML أو OpenID Connect؛ وهو يحسّن سهولة الاستخدام ويتيح فرض MFA والوصول المشروط في مكان واحد. ويمدّ الاتحاد الثقة بين المؤسسات. وتحمي إدارة الوصول الممتاز (PAM) حسابات المديرين: حسابات إدارة منفصلة، ورفع صلاحية في الوقت المناسب، وبيانات دخول في خزنة، وتسجيل الجلسات، وMFA قوي — لأن حساب مدير واحد مخترق يعني عادةً اختراقًا كاملًا. وحسابات الخدمة ومفاتيح API هويات أيضًا وتحتاج مالكًا وتدويرًا وأقل صلاحيات."),
      ],
      callout: { kind: "tip", text: l("Ask in every access review: 'If this account were stolen tonight, what is the worst thing the attacker could do?' If the answer is frightening, reduce the access.", "اسأل في كل مراجعة وصول: «لو سُرق هذا الحساب الليلة فما أسوأ ما يستطيع المهاجم فعله؟» إن كان الجواب مخيفًا فقلّل الوصول.") },
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("The identity lifecycle – joiner, mover, leaver, review", "دورة حياة الهوية – انضمام ونقل ومغادرة ومراجعة"),
    caption: l("Access must change as people change. Regular recertification closes the loop and catches privilege creep and orphaned accounts.", "يجب أن يتغير الوصول بتغير الأشخاص. وتغلق إعادة التصديق المنتظمة الحلقة وتلتقط زحف الصلاحيات والحسابات اليتيمة."),
    nodes: [
      { label: l("Joiner – provision", "المنضم – التهيئة"), desc: l("Create account, assign role, enrol MFA", "إنشاء الحساب وتعيين الدور وتسجيل MFA") },
      { label: l("Use – enforce", "الاستخدام – الإنفاذ"), desc: l("Authenticate, authorise, log every action", "مصادقة وتفويض وتسجيل كل إجراء") },
      { label: l("Mover – adjust", "المنتقل – التعديل"), desc: l("Add new role, remove old access", "إضافة الدور الجديد وإزالة الوصول القديم") },
      { label: l("Review – recertify", "المراجعة – إعادة التصديق"), desc: l("Managers confirm access is still needed", "يؤكد المديرون أن الوصول لا يزال لازمًا") },
      { label: l("Leaver – deprovision", "المغادر – الإلغاء"), desc: l("Disable account, revoke tokens, recover assets", "تعطيل الحساب وإلغاء الرموز واسترداد الأصول") },
    ],
  },
  lab: {
    tool: "rbac",
    title: l("Lab 12 – Design a least-privilege access matrix", "المختبر 12 – صمّم مصفوفة وصول بأقل صلاحية"),
    scenario: l("A software company's four roles all currently have read/write access to everything. After an intern accidentally deleted production data, management asks you to fix the access matrix without blocking anyone's real work.", "تملك الأدوار الأربعة في شركة برمجيات حاليًا صلاحية قراءة/كتابة على كل شيء. وبعد أن حذف متدرب بيانات الإنتاج عن طريق الخطأ، تطلب الإدارة منك إصلاح مصفوفة الوصول دون تعطيل عمل أحد الحقيقي."),
    safety: l("In real environments, never remove access in bulk without testing and communicating the change, and always keep at least two break-glass administrator accounts under strong control.", "في البيئات الحقيقية لا تُزِل الوصول بالجملة دون اختبار وإبلاغ بالتغيير، وأبقِ دائمًا حسابَي مدير طوارئ على الأقل تحت ضبط صارم."),
    steps: [
      l("Read the job description under each role.", "اقرأ وصف الوظيفة تحت كل دور."),
      l("Click cells to cycle between none, read-only (R) and read/write (R/W) for every role/resource.", "انقر على الخلايا للتبديل بين لا شيء وقراءة فقط (R) وقراءة/كتابة (R/W) لكل دور/مورد."),
      l("Click 'Check against policy' and fix every highlighted red cell.", "اضغط «تحقق من السياسة» وأصلح كل خلية حمراء."),
      l("Explain which cells illustrate separation of duties (e.g. nobody who changes data can edit the audit logs).", "اشرح أي الخلايا تُجسد فصل المهام (مثل: لا أحد ممن يغيّر البيانات يعدّل سجلات التدقيق)."),
      l("Propose a 'temporary access' process for when the developer legitimately needs to debug production.", "اقترح عملية «وصول مؤقت» لحالة حاجة المطوّر المشروعة لتشخيص الإنتاج."),
      l("List three events that should trigger an immediate access review.", "اذكر ثلاثة أحداث ينبغي أن تستدعي مراجعة وصول فورية."),
    ],
    expected: l("A matrix with zero violations, a clear explanation of least privilege and separation of duties, and a short just-in-time access procedure.", "مصفوفة بلا مخالفات وشرح واضح لأقل صلاحية وفصل المهام وإجراء وصول مؤقت قصير."),
  },
  quiz: [
    { q: l("Which model lets the resource owner decide who gets access?", "أي نموذج يتيح لمالك المورد تقرير من يحصل على الوصول؟"), options: [l("MAC", "MAC"), l("DAC", "DAC"), l("RBAC", "RBAC"), l("ABAC", "ABAC")], answer: 1, why: l("Discretionary Access Control leaves permission decisions to the owner.", "التحكم التقديري يترك قرارات الصلاحيات للمالك.") },
    { q: l("Assigning permissions to job roles rather than individuals is…", "منح الصلاحيات لأدوار وظيفية بدل الأفراد هو…"), options: [l("RBAC", "RBAC"), l("MAC", "MAC"), l("DAC", "DAC"), l("Brute force", "القوة الغاشمة")], answer: 0, why: l("Role-based access control simplifies administration and auditing.", "التحكم بالوصول بالأدوار يبسّط الإدارة والتدقيق.") },
    { q: l("Requiring one employee to create a payment and another to approve it is…", "اشتراط أن ينشئ موظف دفعة ويعتمدها آخر هو…"), options: [l("Privilege creep", "زحف الصلاحيات"), l("Separation of duties", "فصل المهام"), l("Single sign-on", "الدخول الموحد"), l("Port security", "أمان المنافذ")], answer: 1, why: l("It prevents one person from committing and hiding fraud alone.", "يمنع شخصًا واحدًا من ارتكاب الاحتيال وإخفائه بمفرده.") },
    { q: l("'Privilege creep' occurs when…", "يحدث «زحف الصلاحيات» عندما…"), options: [l("Users accumulate permissions as they change roles", "يراكم المستخدمون الصلاحيات مع تغيير أدوارهم"), l("Admins lose their passwords", "يفقد المديرون كلمات مرورهم"), l("Firewalls block traffic", "تحجب الجدران النارية الحركة"), l("Backups fail", "تفشل النسخ الاحتياطية")], answer: 0, why: l("Old access is not removed during moves, leaving excessive rights.", "لا يُزال الوصول القديم عند النقل فتبقى صلاحيات زائدة.") },
    { q: l("What is the most urgent identity task when an employee leaves?", "ما أكثر مهام الهوية إلحاحًا عند مغادرة موظف؟"), options: [l("Wait a month", "الانتظار شهرًا"), l("Disable accounts and revoke access immediately", "تعطيل الحسابات وإلغاء الوصول فورًا"), l("Share the password with the team", "مشاركة كلمة المرور مع الفريق"), l("Rename the account", "إعادة تسمية الحساب")], answer: 1, why: l("Orphaned accounts are an attack path and an insider risk.", "الحسابات اليتيمة مسار هجوم وخطر داخلي.") },
    { q: l("SSO mainly improves security by…", "يحسّن SSO الأمن أساسًا عبر…"), options: [l("Removing authentication", "إلغاء المصادقة"), l("Centralising authentication, MFA and policy enforcement", "مركزة المصادقة وMFA وإنفاذ السياسات"), l("Making passwords shorter", "تقصير كلمات المرور"), l("Disabling logs", "تعطيل السجلات")], answer: 1, why: l("One strong, monitored login point replaces many weak ones.", "نقطة دخول قوية ومراقبة واحدة بدل نقاط ضعيفة كثيرة.") },
    { q: l("Why are shared accounts a problem?", "لماذا تشكل الحسابات المشتركة مشكلة؟"), options: [l("They are cheaper", "هي أرخص"), l("Actions cannot be traced to one individual", "لا يمكن نسب الإجراءات لفرد واحد"), l("They always use MFA", "تستخدم MFA دائمًا"), l("They improve accountability", "تحسّن المساءلة")], answer: 1, why: l("No accountability means investigations and audits cannot attribute actions.", "غياب المساءلة يعني أن التحقيقات والتدقيق لا تنسب الإجراءات.") },
  ],
  homework: {
    title: l("Homework 12 – Access review of a family or team account set", "الواجب 12 – مراجعة وصول لمجموعة حسابات عائلية أو فريق"),
    tasks: [
      l("List every shared account or shared document folder you use and who can access it.", "اذكر كل حساب مشترك أو مجلد مستندات مشترك تستخدمه ومن يستطيع الوصول إليه."),
      l("For each, decide whether each person needs none, read-only or edit access and remove surplus rights.", "لكل منها قرر هل يحتاج كل شخص إلى لا شيء أو قراءة أو تعديل وأزِل الحقوق الزائدة."),
      l("Find at least one old account, app authorisation or device you no longer use and revoke it.", "اعثر على حساب قديم أو تفويض تطبيق أو جهاز واحد على الأقل لم تعد تستخدمه وألغِه."),
      l("Write a joiner/mover/leaver checklist (five items each) for a small business of ten people.", "اكتب قائمة انضمام/نقل/مغادرة (خمسة بنود لكل منها) لشركة صغيرة من عشرة أشخاص."),
    ],
    deliverable: l("An access matrix, a list of revoked access and the three checklists.", "مصفوفة وصول وقائمة بما أُلغي من وصول والقوائم الثلاث."),
  },
  refs: [
    { title: "10 Steps: Identity and access management", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management" },
    { title: "A01:2021 Broken Access Control", org: "OWASP", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
    { title: "Guide to ABAC (SP 800-162)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/162/upd2/final" },
    { title: "Privileged Access Management overview", org: "CISA", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" },
  ],
  terms: [
    { term: l("AAA", "AAA"), def: l("Authentication, Authorisation and Accounting.", "المصادقة والتفويض والمحاسبة.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("Granting only the access needed for a task, for the time needed.", "منح الوصول اللازم للمهمة فقط وللمدة اللازمة.") },
    { term: l("RBAC", "التحكم بالوصول بالأدوار"), def: l("Access control where permissions are assigned to roles.", "تحكم تُمنح فيه الصلاحيات للأدوار.") },
    { term: l("ABAC", "التحكم بالوصول بالسمات"), def: l("Access decisions based on attributes of user, resource and context.", "قرارات وصول مبنية على سمات المستخدم والمورد والسياق.") },
    { term: l("Separation of duties", "فصل المهام"), def: l("Splitting critical tasks among people to prevent abuse.", "تقسيم المهام الحرجة بين أشخاص لمنع إساءة الاستخدام.") },
    { term: l("SSO", "الدخول الموحد"), def: l("One authentication granting access to many applications.", "مصادقة واحدة تتيح الوصول لتطبيقات كثيرة.") },
    { term: l("PAM", "إدارة الوصول الممتاز"), def: l("Controls and monitoring for administrator and other privileged accounts.", "ضوابط ومراقبة لحسابات المديرين والحسابات الممتازة الأخرى.") },
    { term: l("Privilege creep", "زحف الصلاحيات"), def: l("Gradual accumulation of unnecessary access rights over time.", "تراكم تدريجي لحقوق وصول غير ضرورية مع الزمن.") },
  ],
};
