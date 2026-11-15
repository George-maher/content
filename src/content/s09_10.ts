import { l, type Session } from "./types";

export const s09: Session = {
  id: 9,
  phase: 3,
  minutes: 65,
  title: l("Cryptography Basics: Symmetric and Asymmetric Encryption", "أساسيات التشفير: المتماثل وغير المتماثل"),
  summary: l(
    "Why cryptography exists, classical ciphers and why they fail, modern symmetric (AES) and asymmetric (RSA, ECC) encryption, key exchange and the hybrid model used on the Internet.",
    "لماذا وُجد التشفير، والشيفرات الكلاسيكية ولماذا تفشل، والتشفير المتماثل الحديث (AES) وغير المتماثل (RSA وECC)، وتبادل المفاتيح والنموذج الهجين المستخدم في الإنترنت."
  ),
  objectives: [
    l("Define plaintext, ciphertext, key, algorithm and Kerckhoffs's principle.", "تعريف النص الواضح والنص المشفّر والمفتاح والخوارزمية ومبدأ كيركهوفس."),
    l("Explain why classical ciphers such as Caesar are breakable.", "شرح لماذا يسهل كسر الشيفرات الكلاسيكية مثل قيصر."),
    l("Compare symmetric and asymmetric encryption: speed, key distribution and use cases.", "المقارنة بين التشفير المتماثل وغير المتماثل: السرعة وتوزيع المفاتيح وحالات الاستخدام."),
    l("Describe hybrid encryption and the importance of key management.", "وصف التشفير الهجين وأهمية إدارة المفاتيح."),
  ],
  sections: [
    {
      h: l("1. Core ideas", "1. الأفكار الأساسية"),
      p: [
        l("Encryption transforms readable data (plaintext) into unreadable data (ciphertext) using an algorithm and a secret key; decryption reverses it. It primarily protects confidentiality. Kerckhoffs's principle states that a system must stay secure even if everything about it except the key is public. Hence we trust published, heavily analysed algorithms (AES, RSA, ChaCha20) and never invent our own ('don't roll your own crypto').", "يحوّل التشفير البيانات المقروءة (النص الواضح) إلى بيانات غير مقروءة (النص المشفّر) باستخدام خوارزمية ومفتاح سري، ويعكسه فك التشفير. وهو يحمي السرية أساسًا. ينص مبدأ كيركهوفس على أن النظام يجب أن يبقى آمنًا حتى لو كان كل شيء فيه علنيًا ما عدا المفتاح. لذا نثق بخوارزميات منشورة ومدروسة جيدًا (AES وRSA وChaCha20) ولا نخترع خوارزميتنا بأنفسنا."),
        l("Security comes from the size of the key space. A 128-bit key has 2^128 possibilities — far beyond any brute-force attack. The Caesar cipher (shifting letters by a fixed amount) has only 25 keys and also leaks letter frequencies, so it can be broken by hand; every substitution cipher falls to frequency analysis. Modern ciphers are designed so ciphertext looks random and any change in the key or plaintext changes the output completely.", "يأتي الأمان من حجم فضاء المفاتيح. المفتاح ذو 128 بتًا له 2^128 احتمالًا — أبعد بكثير من أي هجوم قوة غاشمة. أما شيفرة قيصر (إزاحة الحروف بمقدار ثابت) فلها 25 مفتاحًا فقط وتسرّب ترددات الحروف فتُكسر يدويًا؛ وكل شيفرات الاستبدال تسقط أمام تحليل التكرار. وتُصمَّم الشيفرات الحديثة بحيث يبدو النص المشفّر عشوائيًا وأي تغيير في المفتاح أو النص يغيّر الناتج كليًا."),
      ],
    },
    {
      h: l("2. Symmetric encryption", "2. التشفير المتماثل"),
      p: [
        l("Symmetric encryption uses the same secret key to encrypt and decrypt. It is very fast, so it protects bulk data: disks, files, VPN traffic, the content of HTTPS sessions. The standard algorithm is AES with 128, 192 or 256-bit keys; ChaCha20 is a modern alternative that is fast in software. Block ciphers like AES need a mode of operation: ECB (never use — identical blocks give identical ciphertext, leaking patterns), CBC (older) and GCM (recommended — also provides integrity/authentication). Each encryption also needs a unique nonce/IV.", "يستخدم التشفير المتماثل المفتاح السري نفسه للتشفير وفكه. وهو سريع جدًا فيحمي البيانات الضخمة: الأقراص والملفات وحركة VPN ومحتوى جلسات HTTPS. والخوارزمية القياسية AES بمفاتيح 128 أو 192 أو 256 بتًا؛ وChaCha20 بديل حديث سريع في البرمجيات. وتحتاج الشيفرات الكتلية مثل AES إلى نمط تشغيل: ECB (لا يُستخدم أبدًا — الكتل المتطابقة تعطي نصًا مشفّرًا متطابقًا فتتسرب الأنماط) وCBC (أقدم) وGCM (الموصى به — ويوفر السلامة/المصادقة أيضًا). ويحتاج كل تشفير إلى قيمة nonce/IV فريدة."),
        l("The big weakness is key distribution: how do two parties who have never met agree on a shared secret over an insecure channel? And with n people who each need private channels, you need n(n−1)/2 different keys.", "نقطة الضعف الكبرى هي توزيع المفاتيح: كيف يتفق طرفان لم يلتقيا قط على سر مشترك عبر قناة غير آمنة؟ ومع n شخصًا يحتاج كلٌّ منهم قنوات خاصة تلزم n(n−1)/2 مفتاحًا مختلفًا."),
      ],
    },
    {
      h: l("3. Asymmetric (public-key) encryption", "3. التشفير غير المتماثل (المفتاح العام)"),
      p: [
        l("Asymmetric cryptography uses a mathematically linked key pair: a public key that anyone may have, and a private key that only the owner keeps. What one key locks, only the other unlocks. To send a confidential message, encrypt with the recipient's public key — only the recipient's private key can decrypt. To prove authorship, sign with your private key — anyone can verify with your public key (Session 10).", "يستخدم التشفير غير المتماثل زوج مفاتيح مرتبطًا رياضيًا: مفتاحًا عامًا يمكن لأي شخص امتلاكه ومفتاحًا خاصًا يحتفظ به المالك وحده. ما يقفله أحد المفتاحين لا يفتحه إلا الآخر. ولإرسال رسالة سرية شفّر بالمفتاح العام للمستلم — فلا يفكها إلا مفتاحه الخاص. ولإثبات التأليف وقّع بمفتاحك الخاص — فيتحقق أي شخص بمفتاحك العام (الجلسة 10)."),
        l("Common algorithms: RSA (security based on the difficulty of factoring large numbers, 2048-bit minimum), Elliptic Curve Cryptography (ECC, e.g. P-256, Curve25519: equal security with much smaller keys) and Diffie-Hellman key exchange, which lets two parties derive a shared secret over a public channel. Asymmetric operations are roughly 100–1000 times slower than symmetric ones, so they are used for small data: key exchange, signatures and identity.", "من الخوارزميات الشائعة: RSA (يعتمد أمنها على صعوبة تحليل الأعداد الكبيرة، بحد أدنى 2048 بتًا) والتشفير بالمنحنيات الإهليلجية (ECC مثل P-256 وCurve25519: أمان مكافئ بمفاتيح أصغر بكثير) وتبادل المفاتيح ديفي-هيلمان الذي يتيح لطرفين اشتقاق سر مشترك عبر قناة عامة. والعمليات غير المتماثلة أبطأ بنحو 100–1000 مرة من المتماثلة، لذا تُستخدم للبيانات الصغيرة: تبادل المفاتيح والتواقيع والهوية."),
      ],
      table: {
        head: [l("Feature", "الخاصية"), l("Symmetric", "المتماثل"), l("Asymmetric", "غير المتماثل")],
        rows: [
          [l("Keys", "المفاتيح"), l("One shared secret key", "مفتاح سري مشترك واحد"), l("Public + private key pair", "زوج: عام + خاص")],
          [l("Speed", "السرعة"), l("Very fast", "سريع جدًا"), l("Slow", "بطيء")],
          [l("Main problem", "المشكلة الرئيسية"), l("Safely sharing the key", "مشاركة المفتاح بأمان"), l("Speed and certificate trust", "السرعة والثقة بالشهادات")],
          [l("Typical use", "الاستخدام المعتاد"), l("Bulk data, disks, VPN tunnels", "البيانات الضخمة والأقراص وأنفاق VPN"), l("Key exchange, signatures, identity", "تبادل المفاتيح والتواقيع والهوية")],
          [l("Examples", "أمثلة"), l("AES-256-GCM, ChaCha20", "AES-256-GCM وChaCha20"), l("RSA-2048+, ECDSA, ECDH", "RSA-2048+ وECDSA وECDH")],
        ],
      },
    },
    {
      h: l("4. Hybrid encryption and key management", "4. التشفير الهجين وإدارة المفاتيح"),
      p: [
        l("Real systems combine both: when your browser connects to a website, asymmetric cryptography authenticates the server and agrees on a fresh random session key; then fast symmetric encryption (AES-GCM or ChaCha20) protects the actual data. The same pattern is used by encrypted e-mail, VPNs and messaging apps. Modern protocols also provide forward secrecy — session keys are ephemeral, so stealing a server's long-term key later does not reveal recorded past traffic.", "تجمع الأنظمة الحقيقية بين الاثنين: فعند اتصال متصفحك بموقع تُصادق الخوارزميات غير المتماثلة الخادم وتتفق على مفتاح جلسة عشوائي جديد، ثم يحمي التشفير المتماثل السريع (AES-GCM أو ChaCha20) البيانات الفعلية. والنمط نفسه في البريد المشفّر وVPN وتطبيقات المراسلة. وتوفر البروتوكولات الحديثة السرية المستقبلية أيضًا — فمفاتيح الجلسة مؤقتة، لذا لا تكشف سرقة مفتاح الخادم طويل الأمد لاحقًا الحركة المسجلة سابقًا."),
        l("Encryption is only as strong as key management: generate keys with a cryptographically secure random generator, store them in a vault, HSM or the operating system's key store (never in source code or shared chats), rotate them regularly, restrict who can use them, back them up securely, and destroy them when no longer needed. A lost key means permanently lost data; a stolen key means no protection at all.", "قوة التشفير بقوة إدارة المفاتيح: ولّد المفاتيح بمولّد عشوائي آمن تشفيريًا، وخزّنها في خزنة أو وحدة HSM أو مخزن مفاتيح النظام (لا في الشيفرة المصدرية ولا في محادثات مشتركة)، ودوّرها بانتظام، وقيّد من يستخدمها، وانسخها احتياطيًا بأمان، وأتلفها عند انتفاء الحاجة. فالمفتاح الضائع يعني بيانات ضائعة للأبد، والمفتاح المسروق يعني انعدام الحماية."),
      ],
      callout: { kind: "key", text: l("Data states: protect data at rest (disk, database encryption), in transit (TLS, VPN) and, where needed, in use (confidential computing). Quantum computers could break RSA/ECC in the future, so standards bodies are already publishing post-quantum algorithms.", "حالات البيانات: احمِ البيانات في حالة السكون (تشفير القرص وقاعدة البيانات) وأثناء النقل (TLS وVPN) وعند الحاجة أثناء الاستخدام (الحوسبة السرية). وقد تكسر الحواسيب الكمومية RSA/ECC مستقبلًا لذا تنشر جهات المعايير حاليًا خوارزميات ما بعد الكم.") },
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Hybrid encryption – how HTTPS-style protection works", "التشفير الهجين – كيف تعمل حماية بنمط HTTPS"),
    caption: l("Slow asymmetric cryptography solves the key-distribution problem once; fast symmetric cryptography then protects all the data with the shared session key.", "يحل التشفير غير المتماثل البطيء مشكلة توزيع المفاتيح مرة واحدة؛ ثم يحمي التشفير المتماثل السريع كل البيانات بمفتاح الجلسة المشترك."),
    nodes: [
      { label: l("Server public key", "المفتاح العام للخادم"), desc: l("Sent in a certificate", "يُرسل في شهادة") },
      { label: l("Client creates session key", "العميل ينشئ مفتاح الجلسة"), desc: l("Random, fresh each time", "عشوائي وجديد كل مرة") },
      { label: l("Key exchanged securely", "تبادل المفتاح بأمان"), desc: l("Asymmetric / Diffie-Hellman", "غير متماثل / ديفي-هيلمان") },
      { label: l("Both hold the same key", "كلاهما يملك المفتاح نفسه"), desc: l("Shared secret", "سر مشترك") },
      { label: l("Data encrypted with AES", "تشفير البيانات بـ AES"), desc: l("Fast symmetric encryption", "تشفير متماثل سريع") },
    ],
  },
  lab: {
    tool: "cipher",
    title: l("Lab 9 – Break a Caesar cipher, then reason about key size", "المختبر 9 – كسر شيفرة قيصر ثم التفكير في حجم المفتاح"),
    scenario: l("An intercepted note reads \"Phhw ph dw wkh oleudub dw qrrq\". You know it was produced by a simple shift cipher. First encrypt your own message, then break the intercepted one.", "اعتُرضت ملاحظة نصها «Phhw ph dw wkh oleudub dw qrrq». تعلم أنها أُنتجت بشيفرة إزاحة بسيطة. شفّر أولًا رسالتك الخاصة ثم اكسر الرسالة المعترضة."),
    safety: l("Classical ciphers are for learning only. Never use them – or any home-made algorithm – to protect real data. Use vetted tools and algorithms such as AES via your OS or a trusted application.", "الشيفرات الكلاسيكية للتعلم فقط. لا تستخدمها — ولا أي خوارزمية منزلية — لحماية بيانات حقيقية. استخدم أدوات وخوارزميات موثوقة مثل AES عبر نظامك أو تطبيق موثوق."),
    steps: [
      l("Type a short message, choose Encrypt, set the key to 5 and read the ciphertext.", "اكتب رسالة قصيرة واختر تشفير وضع المفتاح 5 واقرأ النص المشفّر."),
      l("Switch to Decrypt with the same key and confirm you recover the plaintext.", "انتقل إلى فك التشفير بالمفتاح نفسه وتأكد من استرجاع النص الأصلي."),
      l("Paste the intercepted note into the text box and use 'Brute-force all 25 keys'.", "الصق الملاحظة المعترضة في مربع النص واستخدم «جرّب المفاتيح الـ25»."),
      l("Find the readable line and record the key (answer: 3).", "اعثر على السطر المقروء وسجّل المفتاح (الجواب: 3)."),
      l("Calculate: if a computer tests 10 billion keys per second, how long does a 128-bit key space (3.4×10^38) take on average? (Hint: about 10^20 years.)", "احسب: إذا اختبر حاسوب 10 مليارات مفتاح في الثانية فكم يستغرق فضاء 128 بتًا (3.4×10^38) في المتوسط؟ (تلميح: نحو 10^20 سنة)."),
      l("Write three sentences on why 'secret algorithm' is not security but 'large secret key' is.", "اكتب ثلاث جمل عن سبب أن «الخوارزمية السرية» ليست أمانًا بينما «المفتاح السري الكبير» كذلك."),
    ],
    expected: l("You decrypt the note (key 3: \"Meet me at the library at noon\") and can explain why a 25-key space is trivial while 2^128 is infeasible.", "تفك الملاحظة (المفتاح 3: «Meet me at the library at noon») وتشرح لماذا فضاء 25 مفتاحًا تافه بينما 2^128 غير ممكن."),
  },
  quiz: [
    { q: l("Which statement describes symmetric encryption?", "أي عبارة تصف التشفير المتماثل؟"), options: [l("Two different keys, public and private", "مفتاحان مختلفان عام وخاص"), l("The same secret key encrypts and decrypts", "المفتاح السري نفسه يشفّر ويفك"), l("No key is needed", "لا حاجة لمفتاح"), l("It only works for signatures", "يعمل للتواقيع فقط")], answer: 1, why: l("Symmetric = shared secret key, fast, ideal for bulk data.", "المتماثل = مفتاح سري مشترك، سريع ومثالي للبيانات الضخمة.") },
    { q: l("To send a confidential message to Alice using asymmetric crypto you encrypt with…", "لإرسال رسالة سرية إلى أليس بالتشفير غير المتماثل تشفّر بـ…"), options: [l("Your private key", "مفتاحك الخاص"), l("Alice's private key", "المفتاح الخاص لأليس"), l("Alice's public key", "المفتاح العام لأليس"), l("Your public key", "مفتاحك العام")], answer: 2, why: l("Only Alice's private key can decrypt what her public key encrypted.", "لا يفك ما شفّره مفتاح أليس العام إلا مفتاحها الخاص.") },
    { q: l("Why is the Caesar cipher insecure?", "لماذا شيفرة قيصر غير آمنة؟"), options: [l("It is too fast", "سريعة جدًا"), l("Only 25 keys and letter frequencies leak", "25 مفتاحًا فقط وتتسرب ترددات الحروف"), l("It uses AES", "تستخدم AES"), l("It needs a certificate", "تحتاج شهادة")], answer: 1, why: l("A tiny key space is brute-forced instantly; frequency analysis also breaks it.", "فضاء المفاتيح الصغير يُكسر فورًا بالقوة الغاشمة وتحليل التكرار يكسرها أيضًا.") },
    { q: l("Which algorithm is the current standard for symmetric encryption?", "أي خوارزمية هي المعيار الحالي للتشفير المتماثل؟"), options: [l("DES", "DES"), l("AES", "AES"), l("MD5", "MD5"), l("ROT13", "ROT13")], answer: 1, why: l("AES (128/256-bit) is the widely approved standard; DES is obsolete, MD5 is a hash, ROT13 is a toy cipher.", "AES (128/256 بتًا) هو المعيار المعتمد؛ وDES متقادم وMD5 دالة تجزئة وROT13 شيفرة لعبة.") },
    { q: l("Why do real systems use hybrid encryption?", "لماذا تستخدم الأنظمة الحقيقية التشفير الهجين؟"), options: [l("It is cheaper to patent", "أرخص في براءة الاختراع"), l("Asymmetric solves key exchange; symmetric is fast for data", "غير المتماثل يحل تبادل المفاتيح والمتماثل سريع للبيانات"), l("Symmetric cannot encrypt files", "المتماثل لا يشفّر الملفات"), l("Asymmetric is faster", "غير المتماثل أسرع")], answer: 1, why: l("Each type compensates for the other's weakness.", "كل نوع يعوض ضعف الآخر.") },
    { q: l("Which block cipher mode should you never use for general data?", "أي نمط تشغيل كتلي يجب ألا تستخدمه أبدًا للبيانات العامة؟"), options: [l("GCM", "GCM"), l("ECB", "ECB"), l("CTR", "CTR"), l("CCM", "CCM")], answer: 1, why: l("ECB encrypts identical blocks identically and reveals patterns.", "يشفّر ECB الكتل المتطابقة بالطريقة نفسها ويكشف الأنماط.") },
    { q: l("Where should encryption keys never be stored?", "أين يجب ألا تُخزَّن مفاتيح التشفير أبدًا؟"), options: [l("In a hardware security module", "في وحدة أمان عتادية"), l("In an OS key store", "في مخزن مفاتيح النظام"), l("In source code or shared chat messages", "في الشيفرة المصدرية أو رسائل المحادثة المشتركة"), l("In a managed vault", "في خزنة مُدارة")], answer: 2, why: l("Hard-coded and shared keys leak easily and are hard to rotate.", "المفاتيح المضمنة في الشيفرة أو المشاركة تتسرب بسهولة ويصعب تدويرها.") },
  ],
  homework: {
    title: l("Homework 9 – Encrypt something real, safely", "الواجب 9 – شفّر شيئًا حقيقيًا بأمان"),
    tasks: [
      l("Turn on device encryption (BitLocker, FileVault, or LUKS) or verify that it is already on; record how the recovery key is stored.", "فعّل تشفير الجهاز (BitLocker أو FileVault أو LUKS) أو تحقق من أنه مفعّل مسبقًا، وسجّل مكان حفظ مفتاح الاسترداد."),
      l("Check that your phone requires a passcode and is encrypted.", "تحقق من أن هاتفك يتطلب رمز مرور وأنه مشفّر."),
      l("Explain in 150 words, in your own words, how hybrid encryption protects a banking website.", "اشرح بنحو 150 كلمة وبأسلوبك كيف يحمي التشفير الهجين موقعًا مصرفيًا."),
      l("Compute n(n−1)/2 for 10, 100 and 1,000 users and comment on key-management scale.", "احسب n(n−1)/2 لـ 10 و100 و1000 مستخدم وعلّق على حجم إدارة المفاتيح."),
    ],
    deliverable: l("A short document with proof of encryption settings (screenshot or description), the explanation and the calculation.", "وثيقة قصيرة بدليل على إعدادات التشفير (لقطة أو وصف) والشرح والحساب."),
  },
  refs: [
    { title: "FIPS 197 – Advanced Encryption Standard (AES)", org: "NIST", url: "https://csrc.nist.gov/pubs/fips/197/final" },
    { title: "Using TLS to protect data", org: "NCSC UK", url: "https://www.ncsc.gov.uk/guidance/using-tls-to-protect-data" },
    { title: "Post-Quantum Cryptography project", org: "NIST", url: "https://csrc.nist.gov/projects/post-quantum-cryptography" },
    { title: "Public key cryptography explained", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/" },
  ],
  terms: [
    { term: l("Plaintext / Ciphertext", "النص الواضح / النص المشفّر"), def: l("Readable data before encryption / unreadable data after encryption.", "بيانات مقروءة قبل التشفير / غير مقروءة بعده.") },
    { term: l("Symmetric encryption", "التشفير المتماثل"), def: l("Encryption where one shared secret key does both encryption and decryption.", "تشفير يقوم فيه مفتاح سري مشترك بالتشفير وفكه.") },
    { term: l("Asymmetric encryption", "التشفير غير المتماثل"), def: l("Encryption using a linked public/private key pair.", "تشفير باستخدام زوج مفاتيح عام/خاص مرتبطين.") },
    { term: l("AES", "معيار التشفير المتقدم"), def: l("The standard symmetric block cipher with 128/192/256-bit keys.", "الشيفرة الكتلية المتماثلة القياسية بمفاتيح 128/192/256 بتًا.") },
    { term: l("RSA", "RSA"), def: l("A public-key algorithm based on factoring large integers.", "خوارزمية مفتاح عام تعتمد على تحليل الأعداد الصحيحة الكبيرة.") },
    { term: l("Diffie-Hellman", "ديفي-هيلمان"), def: l("A method for two parties to derive a shared secret over an open channel.", "طريقة تتيح لطرفين اشتقاق سر مشترك عبر قناة مفتوحة.") },
    { term: l("Forward secrecy", "السرية المستقبلية"), def: l("Property where past sessions stay secret even if long-term keys are later stolen.", "خاصية تبقي الجلسات السابقة سرية حتى لو سُرقت المفاتيح طويلة الأمد لاحقًا.") },
    { term: l("Key management", "إدارة المفاتيح"), def: l("Generating, storing, rotating, backing up and destroying cryptographic keys.", "توليد المفاتيح الشفرية وتخزينها وتدويرها ونسخها وإتلافها.") },
  ],
};

export const s10: Session = {
  id: 10,
  phase: 3,
  minutes: 65,
  title: l("Hashing, Digital Signatures, PKI and TLS", "التجزئة والتواقيع الرقمية وPKI وTLS"),
  summary: l(
    "One-way hash functions, integrity checking, password hashing, digital signatures, certificates and certificate authorities, and how the TLS handshake builds trust.",
    "دوال التجزئة أحادية الاتجاه، وفحص السلامة، وتجزئة كلمات المرور، والتواقيع الرقمية، والشهادات وسلطات التصديق، وكيف تبني مصافحة TLS الثقة."
  ),
  objectives: [
    l("Explain hash properties: one-way, deterministic, avalanche, collision-resistant.", "شرح خصائص التجزئة: أحادية الاتجاه، حتمية، أثر الانهيار، مقاومة التصادم."),
    l("Use hashes to verify file integrity and understand why passwords need salted slow hashes.", "استخدام التجزئة للتحقق من سلامة الملفات وفهم لماذا تحتاج كلمات المرور إلى تجزئة بطيئة مملّحة."),
    l("Describe how digital signatures provide integrity, authenticity and non-repudiation.", "وصف كيف توفر التواقيع الرقمية السلامة والأصالة وعدم الإنكار."),
    l("Explain certificates, CAs, the chain of trust and the main steps of a TLS handshake.", "شرح الشهادات وسلطات التصديق وسلسلة الثقة والخطوات الرئيسية لمصافحة TLS."),
  ],
  sections: [
    {
      h: l("1. Hash functions", "1. دوال التجزئة"),
      p: [
        l("A cryptographic hash function turns input of any size into a fixed-size 'fingerprint'. SHA-256 always outputs 256 bits (64 hex characters). Good hashes are deterministic (same input → same output), one-way (you cannot recover the input from the hash), show the avalanche effect (changing one bit of input changes about half the output bits) and are collision-resistant (it is infeasible to find two different inputs with the same hash).", "تحوّل دالة التجزئة التشفيرية مدخلات بأي حجم إلى «بصمة» ثابتة الحجم. تُخرج SHA-256 دائمًا 256 بتًا (64 خانة ست عشرية). والتجزئة الجيدة حتمية (المدخل نفسه ← المخرج نفسه)، وأحادية الاتجاه (لا يمكن استرجاع المدخل من التجزئة)، وذات أثر انهيار (تغيير بت واحد في المدخل يغيّر نحو نصف بتات المخرج)، ومقاومة للتصادم (يستحيل إيجاد مدخلين مختلفين بالتجزئة نفسها)."),
        l("Algorithms: MD5 and SHA-1 are broken for security use (practical collisions exist) – avoid them. Use SHA-256/SHA-3. Hashing is not encryption: there is no key and no decryption.", "الخوارزميات: MD5 وSHA-1 مكسورتان للاستخدام الأمني (توجد تصادمات عملية) — تجنبهما. استخدم SHA-256/SHA-3. والتجزئة ليست تشفيرًا: لا مفتاح ولا فك."),
      ],
      bullets: [
        l("Integrity: publish the SHA-256 of a download; users hash their copy and compare.", "السلامة: انشر SHA-256 لملف تنزيل؛ ويجزّئ المستخدم نسخته ويقارن."),
        l("Deduplication and forensics: identify known files by hash.", "كشف التكرار والأدلة الجنائية: تحديد الملفات المعروفة بالتجزئة."),
        l("Building block of signatures, HMAC, blockchains and password storage.", "لبنة في التواقيع وHMAC وسلاسل الكتل وتخزين كلمات المرور."),
      ],
    },
    {
      h: l("2. Storing passwords correctly", "2. تخزين كلمات المرور بشكل صحيح"),
      p: [
        l("Systems should never store passwords in clear text or encrypted reversibly. They store a hash. But a fast hash like plain SHA-256 lets attackers who steal the database test billions of guesses per second, and identical passwords produce identical hashes (revealing duplicates and allowing precomputed rainbow tables). Therefore passwords need a unique random salt per user and a deliberately slow, memory-hard algorithm: Argon2id (preferred), scrypt, bcrypt or PBKDF2 with a high iteration count.", "يجب ألا تخزّن الأنظمة كلمات المرور بنص واضح ولا بتشفير قابل للعكس. بل تخزّن تجزئة. لكن التجزئة السريعة كـ SHA-256 العادية تتيح لمن يسرق قاعدة البيانات اختبار مليارات التخمينات في الثانية، وتنتج كلمات المرور المتطابقة تجزئات متطابقة (فتكشف التكرار وتتيح جداول قوس القزح المسبقة). لذا تحتاج كلمات المرور إلى ملح عشوائي فريد لكل مستخدم وخوارزمية بطيئة عمدًا وكثيفة الذاكرة: Argon2id (المفضلة) أو scrypt أو bcrypt أو PBKDF2 بعدد تكرارات عالٍ."),
        l("At login the system hashes the entered password with the stored salt and compares the result. A 'pepper' (a secret value kept outside the database) can add another layer.", "عند الدخول يجزّئ النظام كلمة المرور المدخلة بالملح المخزن ويقارن الناتج. ويمكن لـ«الفلفل» (قيمة سرية خارج قاعدة البيانات) أن يضيف طبقة أخرى."),
      ],
      callout: { kind: "warn", text: l("If a website can e-mail you your original password, it stores it insecurely. Stop using that password everywhere else.", "إذا كان موقع قادرًا على إرسال كلمة مرورك الأصلية لك بالبريد فهو يخزنها بشكل غير آمن. وتوقف عن استخدامها في أي مكان آخر.") },
    },
    {
      h: l("3. Digital signatures", "3. التواقيع الرقمية"),
      p: [
        l("A digital signature proves who created a message and that it has not changed. The signer hashes the message and encrypts the hash with their private key; the result is the signature. The verifier hashes the received message, decrypts the signature with the signer's public key and compares: equal hashes mean the message is intact (integrity), came from the private key's owner (authenticity) and the owner cannot plausibly deny it (non-repudiation). Signatures protect software updates, documents, code, e-mail (S/MIME) and certificates.", "يثبت التوقيع الرقمي من أنشأ الرسالة وأنها لم تتغير. يجزّئ الموقّع الرسالة ويشفّر التجزئة بمفتاحه الخاص فينتج التوقيع. ويجزّئ المتحقق الرسالة المستلمة ويفك التوقيع بالمفتاح العام للموقّع ويقارن: تطابق التجزئتين يعني أن الرسالة سليمة (السلامة) وصادرة عن مالك المفتاح الخاص (الأصالة) ولا يستطيع إنكارها بشكل معقول (عدم الإنكار). وتحمي التواقيع تحديثات البرمجيات والمستندات والشيفرة والبريد (S/MIME) والشهادات."),
        l("Signature ≠ encryption: a signed message may still be readable by everyone. Combine both when you need confidentiality and proof of origin.", "التوقيع ≠ التشفير: قد تبقى الرسالة الموقّعة مقروءة للجميع. اجمع بينهما عندما تحتاج السرية وإثبات المصدر."),
      ],
    },
    {
      h: l("4. Certificates, PKI and the TLS handshake", "4. الشهادات وPKI ومصافحة TLS"),
      p: [
        l("How do you know that a public key really belongs to bank.example and not an impostor? A digital certificate (X.509) binds a public key to an identity (domain name, organisation) and is signed by a Certificate Authority (CA). Your operating system and browser ship with a store of trusted root CAs. A server presents its certificate plus intermediate certificates; the browser verifies each signature up the chain to a trusted root, checks that the domain matches, that it has not expired and has not been revoked (CRL/OCSP). Together, the CAs, policies, software and processes form the Public Key Infrastructure (PKI).", "كيف تعرف أن مفتاحًا عامًا يخص فعلًا bank.example وليس منتحلًا؟ الشهادة الرقمية (X.509) تربط مفتاحًا عامًا بهوية (اسم نطاق، مؤسسة) وتُوقَّع من سلطة تصديق (CA). ويأتي نظام التشغيل والمتصفح بمخزن من سلطات الجذر الموثوقة. يقدم الخادم شهادته مع الشهادات الوسيطة؛ ويتحقق المتصفح من كل توقيع صعودًا حتى جذر موثوق، ويفحص تطابق النطاق وعدم انتهاء الصلاحية وعدم الإلغاء (CRL/OCSP). ومجموع سلطات التصديق والسياسات والبرمجيات والعمليات هو البنية التحتية للمفتاح العام (PKI)."),
        l("TLS 1.3 handshake in short: (1) ClientHello – supported ciphers and a key share; (2) ServerHello – chosen cipher, key share and certificate; (3) the client validates the certificate chain and the server proves it holds the private key; (4) both derive identical session keys; (5) encrypted application data flows. Use TLS 1.2 or 1.3 only; disable SSL and early TLS. Certificate errors in the browser are warnings you must not click through: they may mean an interception attack.", "مصافحة TLS 1.3 باختصار: (1) ClientHello – الشيفرات المدعومة وحصة المفتاح؛ (2) ServerHello – الشيفرة المختارة وحصة المفتاح والشهادة؛ (3) يتحقق العميل من سلسلة الشهادات ويثبت الخادم امتلاكه المفتاح الخاص؛ (4) يشتق الطرفان مفاتيح جلسة متطابقة؛ (5) تتدفق بيانات التطبيق مشفّرة. استخدم TLS 1.2 أو 1.3 فقط وعطّل SSL وإصدارات TLS القديمة. وأخطاء الشهادات في المتصفح تحذيرات يجب ألا تتجاوزها: فقد تعني هجوم اعتراض."),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("Digital signature – sign with the private key, verify with the public key", "التوقيع الرقمي – وقّع بالمفتاح الخاص وتحقق بالمفتاح العام"),
    caption: l("Matching hashes prove the message is unchanged and came from the key owner. A certificate authority vouches that the public key belongs to the claimed identity.", "تطابق التجزئتين يثبت أن الرسالة لم تتغير وأنها من مالك المفتاح. وتشهد سلطة التصديق أن المفتاح العام يخص الهوية المدّعاة."),
    nodes: [
      { label: l("Message", "الرسالة"), desc: l("Any content", "أي محتوى") },
      { label: l("Hash (SHA-256)", "التجزئة (SHA-256)"), desc: l("Fixed-size fingerprint", "بصمة ثابتة الحجم") },
      { label: l("Sign with private key", "التوقيع بالمفتاح الخاص"), desc: l("Signature created", "ينتج التوقيع") },
      { label: l("Send message + signature", "إرسال الرسالة + التوقيع"), desc: l("Untrusted channel", "قناة غير موثوقة") },
      { label: l("Verify with public key", "التحقق بالمفتاح العام"), desc: l("Hashes equal → valid", "تجزئتان متساويتان ← صالح") },
    ],
  },
  lab: {
    tool: "hash",
    title: l("Lab 10 – Avalanche effect and integrity check", "المختبر 10 – أثر الانهيار وفحص السلامة"),
    scenario: l("Finance sends the instruction \"Transfer $100 to Alice\" together with its SHA-256 hash through a different channel. An attacker on the network tries to change the amount. Use the tool to see how even a tiny change is detected.", "ترسل المالية التعليمة «Transfer $100 to Alice» مع تجزئة SHA-256 الخاصة بها عبر قناة أخرى. يحاول مهاجم على الشبكة تغيير المبلغ. استخدم الأداة لترى كيف يُكتشف حتى التغيير الصغير."),
    safety: l("The hash tool runs entirely in your browser and sends nothing anywhere. Never paste real passwords or secrets into any online tool you do not control.", "تعمل أداة التجزئة بالكامل داخل متصفحك ولا ترسل شيئًا. لا تلصق كلمات مرور أو أسرارًا حقيقية في أي أداة إنترنت لا تتحكم بها."),
    steps: [
      l("Read the two hashes for messages A ($100) and B ($900) and note how many hex characters differ (about 60 of 64).", "اقرأ تجزئتي الرسالتين A ($100) وB ($900) ولاحظ عدد الخانات المختلفة (نحو 60 من 64)."),
      l("Change a single character in message B (for example a space or capital letter) and observe the new hash.", "غيّر حرفًا واحدًا في الرسالة B (مثل مسافة أو حرف كبير) ولاحظ التجزئة الجديدة."),
      l("Make the two messages identical – the hashes become identical (determinism).", "اجعل الرسالتين متطابقتين — تتطابق التجزئتان (الحتمية)."),
      l("Copy hash A into the integrity-check box and observe the match message; then edit the message and see the mismatch.", "انسخ تجزئة A إلى مربع فحص السلامة ولاحظ رسالة التطابق؛ ثم عدّل الرسالة وشاهد عدم التطابق."),
      l("Empty the message: the hash of nothing is e3b0c442…b855. Write why a hash alone does not authenticate the sender (anyone can compute it) and what adds authenticity (a signature or HMAC).", "أفرغ الرسالة: تجزئة «لا شيء» هي e3b0c442…b855. اكتب لماذا لا تصادق التجزئة وحدها المرسل (يستطيع أي شخص حسابها) وما الذي يضيف الأصالة (التوقيع أو HMAC)."),
    ],
    expected: l("You observe ~50% of bits changing for a 1-character edit, confirm integrity checking works, and can state that signatures/HMAC are needed to prove who produced a message.", "تلاحظ تغير نحو 50% من البتات عند تعديل حرف واحد وتتأكد من عمل فحص السلامة وتستطيع القول إن التواقيع/HMAC لازمة لإثبات من أنتج الرسالة."),
  },
  quiz: [
    { q: l("Which property means a tiny input change completely changes the hash?", "أي خاصية تعني أن تغييرًا صغيرًا في المدخل يغيّر التجزئة كليًا؟"), options: [l("Determinism", "الحتمية"), l("Avalanche effect", "أثر الانهيار"), l("Reversibility", "قابلية العكس"), l("Compression", "الضغط")], answer: 1, why: l("The avalanche effect ensures similar inputs do not give similar hashes.", "يضمن أثر الانهيار ألا تعطي المدخلات المتشابهة تجزئات متشابهة.") },
    { q: l("Which is the right way to store user passwords?", "ما الطريقة الصحيحة لتخزين كلمات مرور المستخدمين؟"), options: [l("Plain text", "نص واضح"), l("Reversible encryption", "تشفير قابل للعكس"), l("Salted, slow hash such as Argon2id or bcrypt", "تجزئة بطيئة مملّحة مثل Argon2id أو bcrypt"), l("MD5 without salt", "MD5 بلا ملح")], answer: 2, why: l("Unique salts and slow hashing make mass cracking after a breach expensive.", "الأملاح الفريدة والتجزئة البطيئة تجعل الكسر الجماعي بعد التسريب مكلفًا.") },
    { q: l("A digital signature is created with…", "يُنشأ التوقيع الرقمي بـ…"), options: [l("The signer's private key", "المفتاح الخاص للموقّع"), l("The verifier's private key", "المفتاح الخاص للمتحقق"), l("A shared password", "كلمة مرور مشتركة"), l("The CA's public key", "المفتاح العام لسلطة التصديق")], answer: 0, why: l("Only the owner of the private key can sign; anyone with the public key can verify.", "لا يوقّع إلا مالك المفتاح الخاص ويتحقق كل من لديه المفتاح العام.") },
    { q: l("What does a Certificate Authority do?", "ماذا تفعل سلطة التصديق؟"), options: [l("Encrypts all traffic", "تشفّر كل الحركة"), l("Signs certificates to vouch that a public key belongs to an identity", "توقّع الشهادات لتشهد أن مفتاحًا عامًا يخص هوية"), l("Stores user passwords", "تخزن كلمات المرور"), l("Blocks malware", "تحجب البرمجيات الخبيثة")], answer: 1, why: l("CAs are trusted third parties that bind identities to public keys.", "سلطات التصديق أطراف ثالثة موثوقة تربط الهويات بالمفاتيح العامة.") },
    { q: l("Which algorithms are broken for security use?", "أي الخوارزميات مكسورة للاستخدام الأمني؟"), options: [l("SHA-256 and SHA-3", "SHA-256 وSHA-3"), l("MD5 and SHA-1", "MD5 وSHA-1"), l("AES-GCM", "AES-GCM"), l("Argon2id", "Argon2id")], answer: 1, why: l("Practical collisions have been demonstrated for MD5 and SHA-1.", "ثبتت تصادمات عملية لـ MD5 وSHA-1.") },
    { q: l("You see a browser warning 'certificate not trusted' on your bank's site. What do you do?", "ظهر تحذير «الشهادة غير موثوقة» على موقع مصرفك. ماذا تفعل؟"), options: [l("Click through, it is probably fine", "تتجاوز فالأمر على الأرجح سليم"), l("Stop, do not enter credentials, and report/verify via another network", "تتوقف ولا تدخل بيانات وتبلّغ/تتحقق عبر شبكة أخرى"), l("Disable the browser's security", "تعطّل أمان المتصفح"), l("Reload until it disappears", "تعيد التحميل حتى يختفي")], answer: 1, why: l("It may indicate interception or a fake site.", "قد يشير إلى اعتراض أو موقع مزيف.") },
    { q: l("A hash value alone cannot prove who sent a message because…", "لا تستطيع قيمة التجزئة وحدها إثبات من أرسل الرسالة لأن…"), options: [l("Hashes are encrypted", "التجزئات مشفّرة"), l("Anyone can compute the hash of any message", "يستطيع أي شخص حساب تجزئة أي رسالة"), l("Hashes are too long", "التجزئات طويلة جدًا"), l("Hashes need a CA", "التجزئات تحتاج سلطة تصديق")], answer: 1, why: l("No secret is involved; authenticity requires a signature or HMAC.", "لا سر فيها؛ والأصالة تتطلب توقيعًا أو HMAC.") },
  ],
  homework: {
    title: l("Homework 10 – Verify a download and inspect a certificate", "الواجب 10 – تحقق من تنزيل وافحص شهادة"),
    tasks: [
      l("Download a small open-source installer from an official site that publishes a SHA-256 checksum.", "نزّل مثبّتًا صغيرًا مفتوح المصدر من موقع رسمي ينشر المجموع الاختباري SHA-256."),
      l("Compute its hash (Windows: certutil -hashfile file SHA256; Linux/macOS: sha256sum file or shasum -a 256 file) and compare.", "احسب تجزئته (ويندوز: certutil -hashfile file SHA256؛ لينكس/ماك: sha256sum file أو shasum -a 256 file) وقارن."),
      l("Open three HTTPS sites and write down issuer, expiry date and the chain of certificates for each.", "افتح ثلاثة مواقع HTTPS ودوّن الجهة المصدرة وتاريخ الانتهاء وسلسلة الشهادات لكل منها."),
      l("Explain in one paragraph why a signed installer is stronger than a checksum on the same web page.", "اشرح في فقرة لماذا المثبّت الموقّع أقوى من مجموع اختباري على الصفحة نفسها."),
    ],
    deliverable: l("A report with the hash comparison result, three certificate summaries and the paragraph.", "تقرير بنتيجة مقارنة التجزئة وملخص ثلاث شهادات والفقرة."),
  },
  refs: [
    { title: "FIPS 180-4 – Secure Hash Standard", org: "NIST", url: "https://csrc.nist.gov/pubs/fips/180-4/upd1/final" },
    { title: "Password Storage Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
    { title: "RFC 8446 – TLS 1.3", org: "IETF", url: "https://www.rfc-editor.org/rfc/rfc8446" },
    { title: "How SSL/TLS certificates work", org: "Cloudflare Learning Center", url: "https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/" },
  ],
  terms: [
    { term: l("Hash function", "دالة التجزئة"), def: l("One-way function mapping any input to a fixed-size fingerprint.", "دالة أحادية الاتجاه تحوّل أي مدخل إلى بصمة ثابتة الحجم.") },
    { term: l("Salt", "الملح"), def: l("Unique random value added to a password before hashing.", "قيمة عشوائية فريدة تُضاف إلى كلمة المرور قبل تجزئتها.") },
    { term: l("Collision", "التصادم"), def: l("Two different inputs producing the same hash.", "مدخلان مختلفان ينتجان التجزئة نفسها.") },
    { term: l("Digital signature", "التوقيع الرقمي"), def: l("Hash signed with a private key to prove origin and integrity.", "تجزئة موقّعة بمفتاح خاص لإثبات المصدر والسلامة.") },
    { term: l("Certificate (X.509)", "الشهادة (X.509)"), def: l("Signed document binding a public key to an identity.", "وثيقة موقّعة تربط مفتاحًا عامًا بهوية.") },
    { term: l("Certificate Authority", "سلطة التصديق"), def: l("Trusted entity that issues and signs certificates.", "جهة موثوقة تصدر الشهادات وتوقّعها.") },
    { term: l("PKI", "البنية التحتية للمفتاح العام"), def: l("The CAs, policies and systems that manage certificates and trust.", "سلطات التصديق والسياسات والأنظمة التي تدير الشهادات والثقة.") },
    { term: l("HMAC", "رمز مصادقة الرسالة"), def: l("A hash combined with a shared secret key to authenticate a message.", "تجزئة مقترنة بمفتاح سري مشترك لمصادقة رسالة.") },
  ],
};
