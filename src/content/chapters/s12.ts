import { l, type Session } from "../types";

export const s12: Session = {
  id: 9,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Cryptography Fundamentals: Symmetric, Asymmetric, Hashing, Signatures, PKI and TLS",
    "أساسيات التشفير: التماثلي، وغير المتماثل، والتشفير الكتلي، والتوقيعات، والـ PKI، وTLS",
  ),
  summary: l(
    "How cryptography protects data: confidentiality, integrity and authentication. Symmetric and asymmetric encryption, hash functions, storing passwords, digital signatures, certificates and PKI, and the TLS handshake that secures the web.",
    "كيف يحمي التشفير البيانات: السرية والسلامة والمصادقة. والتشفير المتماثل وغير المتماثل، ودوال التجزئة، وتخزين كلمات المرور، والتوقيعات الرقمية، والشهادات وPKI، ومصافحة TLS التي تأمين الويب.",
  ),
  overview: l(
    "Cryptography is the mathematical foundation of digital security: it hides data, proves its integrity, and verifies who sent it. This session covers the core ideas, then the two families of encryption — symmetric (shared secret) and asymmetric (public/private key pairs) — and how they combine in hybrid encryption. You will learn hash functions and how to store passwords safely, digital signatures, and how certificates, PKI and the TLS handshake put it all together to secure web traffic. The session closes with a lab where you encode and break a Caesar cipher and observe the avalanche effect and an integrity check with a hash simulator.",
    "التشفير هو الأساس الرياضي للأمن الرقمي: يخفي البيانات ويثبت سلامتها ويتحقق من مرسلها. وتغطي هذه الجلسة الأفكار الأساسية ثم عائلتين للتشفير — التماثلي (سر مشترك) وغير المتماثل (أزواج مفاتيح عامة/خاصة) — وكيف يدمجان في التشفير المختلط. ستتعلم دوال التجزئة وكيفية تخزين كلمات المرور بأمان، والتوقيعات الرقمية، وكيف تجمع الشهادات وPKI ومصافحة TLS كل ذلك لتأمين حركة الويب. وتنتهي الجلسة بمختبر تُرمّز فيه شيفرة سيزار وتكسرها وتلاحظ تأثير الانهيار وفحص السلامة بمحاكي التجزئة.",
  ),
  whyItMatters: l(
    "Every secure message, login, payment and web session depends on cryptography. Understanding it lets you reason about what a system actually protects — confidentiality (only the intended reader can read it), integrity (no one altered it) and authentication (you know who sent it) — and how each mechanism achieves it. It also clarifies where weaknesses come from: weak keys, poor password storage, expired certificates or a misconfigured TLS, so you can spot and avoid them.",
    "كل رسالة آمنة ودخول ودفع وجلسة ويب تعتمد على التشفير. ويُمكّنك فهم التشفير من التفكير في ما يحمي التطبيق فعليًا — السرية (القارئ المقصود فقط يقرأها)، والسلامة (لم يعدّلها أحد)، والمصادقة (تعرف من أرسلها) — وفي كيفية تحقيق كل آلية لكل هدف. كما يوضح مصادر الضعف: مفاتيح ضعيفة، وتخزين كلمات مرور سيئ، وشهادات منتهية، أو TLS غير مضبوط، كي يمكنك التعرف عليها وتجنبها.",
  ),
  prerequisites: [
    l(
      "Session 12, Web Application Security: how HTTP and TLS protect web traffic.",
      "الجلسة 12، أمن تطبيقات الويب: كيف يحمي HTTP وTLS حركة الويب.",
    ),
    l(
      "Basic arithmetic comfort; no prior cryptography or number theory is assumed.",
      "راحة أساسية مع الحساب؛ ولا يُفترض معرفة سابقة بالتشفير أو نظرية الأعداد.",
    ),
    l(
      "A legal and ethical mindset: use cryptographic tools only to protect your own data or in authorized practice environments.",
      "عقلية قانونية وأخلاقية: استخدم أدوات التشفير فقط لحماية بياناتك أو في بيئة تدريب مصرح بها.",
    ),
  ],
  objectives: [
    l(
      "Describe what cryptography protects: confidentiality, integrity and authentication.",
      "وصف ما يحمي التشفير: السرية والسلامة والمصادقة.",
    ),
    l(
      "Compare symmetric and asymmetric encryption and state their trade-offs.",
      "مقارنة التشفير المتماثل وغير المتماثل وذكر مقاييس كل منهما.",
    ),
    l(
      "Explain hybrid encryption and why it combines both families.",
      "شرح التشفير المختلط وسبب دمجه العائلتين.",
    ),
    l(
      "Explain hash functions and how to store passwords safely.",
      "شرح دوال التجزئة وكيفية تخزين كلمات المرور بأمان.",
    ),
    l(
      "Explain digital signatures and how they provide integrity and authentication.",
      "شرح التوقيعات الرقمية وكيف توفر السلامة والمصادقة.",
    ),
    l(
      "Explain certificates, PKI and the TLS handshake.",
      "شرح الشهادات وPKI ومصافحة TLS.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Core ideas: what cryptography protects", "الأفكار الأساسية: ما يحمي التشفير"), minutes: 12 },
    { label: l("Symmetric encryption", "التشفير المتماثل"), minutes: 13 },
    { label: l("Asymmetric (public-key) encryption", "التشفير غير المتماثل (المفتاح العام)"), minutes: 13 },
    { label: l("Hybrid encryption and key management", "التشفير المختلط وإدارة المفاتيح"), minutes: 11 },
    { label: l("Hash functions and integrity", "دوال التجزئة والسلامة"), minutes: 11 },
    { label: l("Passwords and digital signatures", "كلمات المرور والتوقيعات الرقمية"), minutes: 11 },
    { label: l("PKI, TLS and practical assessment", "PKI وTLS والتمرين العملي والتقييم"), minutes: 14 },
  ],
  introduction: l(
    "Cryptography is the mathematical foundation of digital security. It hides data, proves it has not been altered, and verifies who sent it. This session builds up from the core ideas — confidentiality, integrity and authentication — to the two families of encryption and how they combine, then to hash functions, safe password storage, digital signatures, and the certificates, PKI and TLS handshake that secure web traffic. The session closes with a lab where you encode and break a Caesar cipher and observe the avalanche effect and an integrity check with a hash simulator.",
    "التشفير هو الأساس الرياضي للأمن الرقمي. فهو يخفي البيانات ويثبت عدم تعديلها ويتحقق من مرسلها. وتبني هذه الجلسة من الأفكار الأساسية — السرية والسلامة والمصادقة — إلى عائلتين للتشفير وكيف يمتزجان، ثم إلى دوال التجزئة وتخزين كلمات المرور الآمن والتوقيعات الرقمية والشهادات وPKI ومصافحة TLS التي تأمين حركة الويب. وتنتهي الجلسة بمختبر تُرمّز فيه شيفرة سيزار وتكسرها وتلاحظ تأثير الانهيار وفحص السلامة بمحاكي التجزئة.",
  ),
  sections: [
    {
      h: l("1. Core ideas: what cryptography protects", "1. الأفكار الأساسية: ما يحمي التشفير"),
      p: [
        l(
          "Cryptography protects three core properties. Confidentiality means only the intended reader can read the data. Integrity means the data has not been altered in transit. Authentication means the receiver can confirm who sent it (and sometimes that the sender cannot later deny sending it — non-repudiation). A single mechanism rarely provides all three, and mixing them requires care: encryption hides contents but does not by itself prove the sender or that nothing was changed.",
          "يحمي التشفير ثلاث خواص جوهرية. فالسرية تعني أن القارئ المقصود فقط يقرأ البيانات. والسلامة تعني أن البيانات لم تُعدّل أثناء النقل. والمصادقة تعني أن المتلقي يستطيع تأكيد من أرسلها (وأحيانًا أن المرسل لا يستطيع إنكار إرسالها لاحقًا — عدم الإنكار). ونادرًا ما توفر آلية واحدة الخواص الثلاث، ودمجها يحتاج دقة: فإخفاء المضمون لا يثبت المرسل ولا يثبت عدم التلاعب.",
        ),
        l(
          "A useful mental model: cryptography is about keys, not about hiding the algorithm. The methods are public; security depends on keeping the key secret and choosing it well. Kerckhoffs' principle states that a cryptographic system should be secure even if everything about the system, except the key, is public knowledge. This is why we openly study AES and TLS — their strength rests on the secret key, not on secrecy of the design.",
          "نموذج ذهني مفيد: التشفير قائم على المفاتيح لا على إخفاء الخوارزمية. فالخوارزميات عامة، ويعتمد الأمن على إبقاء المفتاح سرًا واختياره جيدًا. وتقول قاعدة كيركهوف أن النظام التشفيري يجب أن يكون آمنًا حتى لو كان كل شيء عن النظام علنيًا عدا المفتاح. ولهذا ندرس AES وTLS علنًا — فقوتها ترتكز على المفتاح السري لا على سرية التصميم.",
        ),
      ],
    },
    {
      h: l("2. Symmetric encryption", "2. التشفير المتماثل"),
      p: [
        l(
          "Symmetric encryption uses a single shared secret key to encrypt and decrypt. Both parties must hold the same key. Examples include the Caesar cipher (a historic toy that shifts each letter) and modern block ciphers such as AES, which works on blocks of bits in different key sizes (AES-128, AES-256). It is fast and well suited to encrypting large amounts of data, but its central weakness is key distribution: you must get the shared secret to the other party securely, and anyone who learns it can read everything.",
          "يستخدم التشفير المتماثل مفتاحًا سريًا واحدًا مشتركًا للتشفير وفك التشفير. ويجب أن يملك الطرفان المفتاح نفسه. ومن الأمثلة شيفرة سيزار (لعبة تاريخية تبدل كل حرف) وأفضلية التشفير الحديثة مثل AES التي تعمل على كتل من البتات بأطوال مفاتيح مختلفة (AES-128 وAES-256). وهي سريعة ومناسبة لتشفير كميات كبيرة من البيانات، لكن ضعفها الرئيس توزيع المفاتيح: فلابد من إيصال السر المشترك للطرف الآخر بأمان، وأي شخص يعرفه يستطيع قراءة كل شيء.",
        ),
        l(
          "The Caesar cipher illustrates the idea: replace each letter with the one a fixed number of places down the alphabet. It is easy to encode, but equally easy to break by trying all 25 shifts — the key space is tiny. Modern ciphers use far larger key spaces and complex operations, but the principle is the same: a shared key turns readable plaintext into ciphertext and back.",
          "تبيّن شيفرة سيزار الفكرة: استبدل كل حرف بالحرف الذي يقع بعده بعدد ثابت من المواضع في الأبجدية. فتشفيرها سهل، لكن كسرها بنفس السهولة بتجربة الـ 25 إزاحة كلها — ففضاء المفاتيح صغير جدًا. وتستخدم التشفير الحديثة فضاء مفاتيح أكبر بكثير وعمليات معقدة، لكن المبدأ نفسه: مفتاح مشترك يحوّل النص الواضح إلى نص مشفر والعكس.",
        ),
      ],
    },
    {
      h: l("3. Asymmetric (public-key) encryption", "3. التشفير غير المتماثل (المفتاح العام)"),
      p: [
        l(
          "Asymmetric encryption uses a mathematically linked pair of keys: a public key that anyone can use to encrypt, and a private key that only the owner keeps. Data encrypted with the public key can only be decrypted with the matching private key. This solves the key-distribution problem — you never need to share a secret; you just publish your public key. Examples include RSA and elliptic-curve cryptography (ECC). Asymmetric crypto is slower than symmetric, so it is used to protect keys, not bulk data.",
          "يستخدم التشفير غير المتماثل زوجًا من المفاتيح مرتبطًا رياضيًا: مفتاح عام يستطيع أي شخص استخدامه للتشفير، ومفتاح خاص يحتفظ به المالك وحده. ولا يمكن فك تشفير البيانات المشفرة بالمفتاح العام إلا بالمفتاح الخاص المطابق. وهذا يحل مشكلة توزيع المفاتيح — فلا حاجة لمشاركة سر؛ فقط انشر مفتاحك العام. ومن الأمثلة RSA والتشفير بالمنحنيات الإهليلجية (ECC). والتشفير غير المتماثل أبطأ من المتماثل، لذا يستخدم لحماية المفاتيح لا لتشفير كميات كبيرة من البيانات.",
        ),
        l(
          "A public key can also be used in reverse for authentication and non-repudiation: the owner signs data with their private key, and anyone can verify it with the public key. The two directions — encrypt with public / decrypt with private for confidentiality, and sign with private / verify with public for authentication — are the backbone of secure communications and are what TLS uses.",
          "يمكن أيضًا استخدام المفتاح العام في الاتجاه المعاكس للمصادقة وعدم الإنكار: فالمالك يوقّع البيانات بمفتاحه الخاص، وأي شخص يستطيع التحقق منها بالمفتاح العام. والاتجاهان — التشفير بالمفتاح العام / فك التشفير بالمفتاح الخاص للسرية، والتوقيع بالمفتاح الخاص / التحقق بالمفتاح العام للمصادقة — هما العمود الفقري للاتصالات الآمنة وهو ما يستخدمه TLS.",
        ),
      ],
    },
    {
      h: l("4. Hybrid encryption and key management", "4. التشفير المختلط وإدارة المفاتيح"),
      p: [
        l(
          "Because asymmetric encryption is slow, real systems use hybrid encryption: a symmetric session key encrypts the bulk data (fast), and the symmetric key itself is encrypted with the recipient's public key (safe to transmit). The recipient decrypts the session key with their private key, then decrypts the data with the symmetric key. TLS uses exactly this pattern, so you get both the speed of symmetric encryption and the convenience of asymmetric key exchange.",
          "لأن التشفير غير المتماثل بطيء، تستخدم الأنظمة الحقيقية التشفير المختلط: يُشفّر مفتاح الجلسة المتماثل البيانات الضخمة (بسرعة)، ويُشفّر مفتاح الجلسة نفسه بمفتاح المتلقي العام (آمن للنقل). ويفك المتلقي مفتاح الجلسة بمفتاحه الخاص، ثم يفك تشفير البيانات بالمفتاح المتماثل. ويستخدم TLS هذا النمط تحديدًا، فتحصل على سرعة التشفير المتماثل وراحة تبادل المفاتيح غير المتماثل.",
        ),
        l(
          "Key management is where much real risk lies: keys must be generated strongly, stored securely (not in plaintext files or code), rotated periodically, revoked when compromised, and protected by hardware security modules or key vaults where appropriate. A strong cipher is useless if the key is leaked — most real cryptographic failures are failures of key management, not of the mathematics.",
          "تكمن كثير من المخاطر الحقيقية في إدارة المفاتيح: يجب توليد المفاتيح بقوة، وتخزينها بأمان (لا في ملفات نصية أو شيفرة)، وتدويرها دوريًا، وإبطالها عند الاختراق، وحمايتها بوحدات أمن العتاد أو خزائن المفاتيح حيث يلزم. فالخوارزمية القوية تصبح عديمة الفائدة إذا تسرّب المفتاح — فمعظم الإخفاقات التشفيرية الحقيقية هي إخفاقات في إدارة المفاتيح لا في الرياضيات.",
        ),
      ],
    },
    {
      h: l("5. Hash functions and integrity", "5. دوال التجزئة والسلامة"),
      p: [
        l(
          "A hash function takes any input and produces a fixed-size output (a hash or digest). Good hash functions are one-way (hard to reverse), deterministic (the same input always gives the same output), and exhibit the avalanche effect — a tiny change in the input changes the entire output dramatically. SHA-256 is a widely used hash. Hashes verify integrity: the sender computes a hash of the data and sends it; the receiver recomputes the hash and compares. A match means the data was not altered.",
          "تأخذ دالة التجزئة أي مدخل وتُنتج مخرجًا بحجم ثابت (تجزئة أو ملخص). ودوال التجزئة الجيدة أحادية الاتجاه (صعبة العكس)، وحتمية (المدخل نفسه يعطي المخرج نفسه دائمًا)، وتُظهر تأثير الانهيار — فتغيير صغير في المدخل يغير المخرج كله بشكل جذري. وSHA-256 تجزئة شائعة الاستخدام. وتتحقق التجزئة من السلامة: يحسب المرسل تجزئة للبيانات ويرسلها؛ ويعيد المتلقي حساب التجزئة ويقارن. فالتطابق يعني أن البيانات لم تُعدّل.",
        ),
        l(
          "Hashes are not encryption: you cannot retrieve the original from a hash. They are also not signatures: a hash alone does not prove who sent the data. A hash proves the data has not changed; to also prove who sent it, combine a hash with asymmetric signing (next section). This separation of concerns is essential for reasoning about what each mechanism actually guarantees.",
          "التجزئة ليست تشفيرًا: فلا يمكنك استرجاع الأصل من التجزئة. وهي أيضًا ليست توقيعًا: فالتجزئة وحدها لا تثبت من أرسل البيانات. فالتجزئة تثبت أن البيانات لم تتغير؛ أما لإثبات من أرسلها أيضًا، فادمج التجزئة مع التوقيع غير المتماثل (القسم التالي). وهذا الفصل بين الهواجس أساسي للتفكير في ما تضمنته كل آلية فعليًا.",
        ),
      ],
    },
    {
      h: l("6. Storing passwords and digital signatures", "6. تخزين كلمات المرور والتوقيعات الرقمية"),
      p: [
        l(
          "Storing passwords correctly means never storing them in plaintext or reversible form. Use a strong, slow, salted hash (a per-user random salt plus many iterations) such as bcrypt, scrypt or Argon2, so a stolen database does not instantly reveal passwords. The salt prevents precomputed tables, and the many iterations make brute-force attacks expensive. Plain hashing (fast SHA-256) is insufficient because it is too easy to crack at scale.",
          "تخزين كلمات المرور بشكل صحيح يعني عدم تخزينها أبدًا كنص واضح أو بشكل قابل للعكس. استخدم تجزئة قوية وبطيئة ومملحة (ملح عشوائي لكل مستخدم مع تكرارات كثيرة) مثل bcrypt أو scrypt أو Argon2، حتى لا يكشف قاعدة بيانات مسروقة كلمات المرور فورًا. فالملح يمنع الجداول المحسوبة مسبقًا، والتكرارات الكثيرة تجعل هجمات القوة الغاشمة مكلفة. أما التجزئة العادية (SHA-256 السريعة) فغير كافية لأن كسرها سهل جدًا على نطاق واسع.",
        ),
        l(
          "A digital signature proves integrity and authentication together. The sender hashes the data, then encrypts that hash with their private key; the signature travels with the data. The receiver recomputes the hash, decrypts the signature with the sender's public key, and compares. A match proves the data is intact and came from the holder of the private key. Signatures give non-repudiation: the sender cannot plausibly deny having sent it.",
          "يثبت التوقيع الرقمي السلامة والمصادقة معًا. فالمرسل يجزئ البيانات ثم يُشفّر تلك التجزئة بمفتاحه الخاص؛ وينتقل التوقيع مع البيانات. ويعيد المتلقي حساب التجزئة، ويفك تشفير التوقيع بمفتاح المرسل العام، ويقارن. فالتطابق يثبت أن البيانات سليمة وأنها جاءت من حامل المفتاح الخاص. وتمنح التوقيعات عدم الإنكار: فلا يستطيع المرسل إنكار إرسالها بشكل معقول.",
        ),
      ],
    },
    {
      h: l("7. Certificates, PKI and the TLS handshake", "7. الشهادات وPKI ومصافحة TLS"),
      p: [
        l(
          "To use asymmetric cryptography over the web, you need to trust that a public key really belongs to the site you are contacting. Public Key Infrastructure (PKI) solves this with digital certificates: an X.509 certificate binds a public key to an identity and is signed by a trusted third party — a Certificate Authority (CA). Browsers and systems hold a set of trusted root CAs; a chain of signatures from a root down to the site's certificate lets the client verify the site's identity before exchanging keys.",
          "لاستخدام التشفير غير المتماثل على الويب، تحتاج إلى الثقة أن مفتاحًا عامًا يعود بالفعل للموقع الذي تتصل به. وتحل البنية التحتية للمفاتيح العامة (PKI) هذه المشكلة بالشهادات الرقمية: فشهادة X.509 تربط مفتاحًا عامًا بهوية وتوقّعها طرف ثالث موثوق — سلطة شهادات (CA). ويحوي المتصفحات والأنظمة مجموعة من سلطات الجذور الموثوقة؛ وتتيح سلسلة التوقيعات من الجذر حتى شهادة الموقع للعميل التحقق من هوية الموقع قبل تبادل المفاتيح.",
        ),
        l(
          "The TLS handshake puts it all together: the server presents its certificate; the client verifies it against trusted roots; the two negotiate a symmetric session key (hybrid encryption); and all further traffic is encrypted with that key. The padlock you see in the browser confirms the certificate verified and the connection is private. A misconfigured or expired certificate, or an attacker with a fraudulent one, breaks this trust — which is why certificate validation must never be skipped.",
          "تجمع مصافحة TLS كل ذلك: يُقدم الخادم شهادته؛ ويتحقق العميل منها مقابل الجذور الموثوقة؛ ويتفاوض الطرفان على مفتاح جلسة متماثل (تشفير مختلط)؛ ثم يُشفّر كل الحركة اللاحقة بهذا المفتاح. ويؤكد القفل الذي تراه في المتصفح أن الشهادة تم التحقق منها وأن الاتصال سري. وشهادة غير مضبوطة أو منتهية، أو مهاجم بحوزته شهادة زائفة، يكسران هذه الثقة — ولهذا يجب ألا يُتجاهل التحقق من الشهادة أبدًا.",
        ),
      ],
    },
    {
      h: l("8. Bringing it together: the secure channel", "8. جمع الأفكار: القناة الآمنة"),
      p: [
        l(
          "A secure channel combines the pieces: symmetric encryption for speed, asymmetric keys to exchange the symmetric key safely, hashes to verify integrity, signatures to authenticate, and certificates/PKI to establish trust. TLS orchestrates all of them. Understanding each part's job — and which property it provides — lets you reason about why a channel is or is not secure, and where a failure (a weak key, a skipped certificate check, a leaked session key) would break it.",
          "تجمع القناة الآمنة الأجزاء: التشفير المتماثل للسرعة، والمفاتيح غير المتماثلة لتبادل المفتاح المتماثل بأمان، والتجزئات للتحقق من السلامة، والتوقيعات للمصادقة، والشهادات/PKI لإقامة الثقة. ويُنسّق TLS كل ذلك. ويُمكّنك فهم دور كل جزء — وأي خاصية يقدمها — من التفكير في سبب أمان القناة أو عدم أمانها، وفي أي فشل (مفتاح ضعيف، أو تجاهل فحص الشهادة، أو تسرّب مفتاح الجلسة) يكسرها.",
        ),
        l(
          "As you practise, remember the boundary: use cryptographic tools to protect your own data or in authorized practice environments. Implementing or breaking cryptography against systems you do not own, without permission, is illegal and unethical. The simulators used here are display-only and safe — they exist to build intuition, not to target real systems.",
          "عند التدرّب تذكّر الحد: استخدم أدوات التشفير لحماية بياناتك أو في بيئة تدريب مصرح بها. فتطبيق التشفير أو كسره على أنظمة لا تملكها دون إذن مخالف للقانون وغير أخلاقي. والمحاكيات المستخدمة هنا للعرض فقط وآمنة — إنها موجودة لبناء الفهم لا لاستهداف أنظمة حقيقية.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A Caesar cipher with shift 3 turns A→D, B→E, C→F. The plaintext 'HELLO' becomes 'KHOOR'. Decoding shifts back 3 places. The key is the number 3, and the whole cipher has only 25 possible keys, so an attacker tries each shift and reads the result — a reminder that key space size matters.",
      "تحول شيفرة سيزار بإزاحة 3 الحرف A إلى D وB إلى E وC إلى F. فيتحول النص الواضح HELLO إلى KHOOR. ويعيد الترميز الإزاحة 3 إلى الخلف. والمفتاح هو الرقم 3، ولشيفرة كاملة 25 مفتاحًا ممكنًا فقط، فيجرِّب المهاجم كل إزاحة ويقرأ النتيجة — تذكير بأن حجم فضاء المفاتيح مهم.",
    ),
    l(
      "In symmetric encryption, Alice and Bob share one secret. Alice encrypts a message with the shared key; Bob decrypts with the same key. Anyone who intercepts the key can read or alter the message. In asymmetric encryption, Alice encrypts with Bob's public key; only Bob's private key decrypts it, so Alice never needs to share a secret with Bob.",
      "في التشفير المتماثل يتشارك آلان وبوب مفتاحًا سريًا واحدًا. فيشفر آلان الرسالة بالمفتاح المشترك؛ ويفك بوب التشفير بالمفتاح نفسه. وأي شخص يعترض المفتاح يستطيع قراءة الرسالة أو تعديلها. وفي التشفير غير المتماثل تشفر آلان بمفتاح بوب العام؛ ولا يفك تشفيرها إلا مفتاح بوب الخاص، فلا يحتاج آلان أبدًا لمشاركة سر مع بوب.",
    ),
    l(
      "A digital signature: the sender hashes a message and encrypts the hash with their private key. The receiver decrypts the hash with the sender's public key and compares it to the hash they compute themselves. If they match, the message is intact and genuinely from the sender — integrity and authentication together.",
      "التوقيع الرقمي: يُجزّئ المرسل الرسالة ويُشفّر التجزئة بمفتاحه الخاص. ويفك المتلقي التجزئة بمفتاح المرسل العام ويقارنها بالتجزئة التي حسبها بنفسه. فإذا تطابقت كانت الرسالة سليمة وحقيقية من المرسل — السلامة والمصادقة معًا.",
    ),
  ],
  realWorldScenarios: [
    l(
      "When you open a bank's website, your browser runs the TLS handshake: it verifies the server's certificate against trusted roots, negotiates a symmetric session key, and encrypts all traffic. If the certificate is invalid or expired, the browser warns you — because skipping that check would let a attacker impersonate the bank and read your data.",
      "عند فتح موقع بنك يجري متصفحك مصافحة TLS: يتحقق من شهادة الخادم مقابل الجذور الموثوقة، ويتفاوض على مفتاح جلسة متماثل، ويشفّر كل الحركة. فإذا كانت الشهادة غير صالحة أو منتهية يحذرك المتصفح — لأن تجاهل هذا الفحص يسمح لمهاجم بتقليد البنك وقراءة بياناتك.",
    ),
    l(
      "A company stores passwords using plain SHA-256. After a breach, attackers crack millions of passwords in hours using precomputed tables, because the hashes are fast and unsalted. Re-implementing with bcrypt and per-user salts would have made the same breach far harder to exploit.",
      "تخزّن شركة كلمات المرور باستخدام SHA-256 الخام. وبعد اختراق يفك المهاجمون ملايين كلمات المرور في ساعات باستخدام جداول محسوبة مسبقًا، لأن التجزئات سريعة وغير مملحة. وكان إعادة التطبيق بـ bcrypt وملح لكل مستخدم سيجعل استغلال الاختراق نفسه أصعب بكثير.",
    ),
    l(
      "Two parties exchange a symmetric session key encrypted with the recipient's public key, then encrypt bulk data with the symmetric key. This hybrid approach gives both the security of asymmetric key exchange and the speed of symmetric encryption — the pattern TLS uses for every secure web session.",
      "يتبادلان مفتاح جلسة متماثل مشفرًا بمفتاح المتلقي العام، ثم يشفرتان البيانات الضخمة بالمفتاح المتماثل. ويعطي هذا النهج المختلط أمن تبادل المفاتيح غير المتماثل وسرعة التشفير المتماثل — النمط الذي يستخدمه TLS في كل جلسة ويب آمنة.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l("TLS handshake — how the secure channel is built", "مصافحة TLS — كيف تُبنى القناة الآمنة"),
    caption: l("Certificate verify → symmetric key exchange → encrypted bulk data.", "التحقق من الشهادة ← تبادل مفتاح متماثل ← بيانات مشفرة الضخمة."),
    nodes: [
      { label: l("Client + Server", "العميل والخادم"), desc: l("Both start untrusted", "كلاهما يبدأ غير موثوق") },
      { label: l("Verify certificate", "التحقق من الشهادة"), desc: l("Chain up to trusted root CAs", "سلسلة حتى سلطات الجذور الموثوقة") },
      { label: l("Exchange session key", "تبادل مفتاح الجلسة"), desc: l("Encrypted with public key", "مشفر بالمفتاح العام") },
      { label: l("Symmetric bulk encryption", "تشفير متماثل للبيانات الضخمة"), desc: l("Fast, per-session key", "سريع ومفتاح لكل جلسة") },
      { label: l("Encrypted traffic", "حركة مشفرة"), desc: l("Confidential + integrity", "سرية + سلامة") },
    ],
  },
  instructorDemo: l(
    "Demonstrate symmetric vs asymmetric encryption with the cipher simulator, then the hash simulator. Show encoding and breaking the Caesar cipher (trying all 25 shifts) to make key-space concrete. Show the avalanche effect: change one character and watch the entire hash change. Show an integrity check: hash the same data twice and confirm the digests match, then alter one character and show the mismatch. Connect each observation to the concept — key space, one-way hash, integrity — and note that these are display-only simulators, never real systems.",
    "اعرض التشفير المتماثل مقابل غير المتماثل بمحاكي الشيفرة، ثم بمحاكي التجزئة. واعرض تشفير وكسر شيفرة سيزار (بتجربة الـ 25 إزاحة كلها) لتجسيد فضاء المفاتيح. واعرض تأثير الانهيار: غيّ حرفًا واحدًا وشاهد التجزئة كله يتغير. واعرض فحص السلامة: جزئي البيانات نفسها مرتين وتحقق من تطابق الملخصين، ثم غيّ حرفًا واحدًا وأظهر عدم التطابق. واربط كل ملاحظة بالمفهوم — فضاء المفاتيح والتجزئة أحادية الاتجاه والسلامة — ونبه أن هذه محاكيات عرض فقط لا أنظمة حقيقية.",
  ),
  exercises: [
    {
      title: l("Match each mechanism to the property it provides", "مطابقة كل آلية بالخاصية التي توفرها"),
      instructions: l(
        "For symmetric encryption, asymmetric encryption, hashing and digital signatures, state which of confidentiality, integrity and authentication it provides, in one sentence each.",
        "لكل من التشفير المتماثل والتشفير غير المتماثل والتجزئة والتوقيع الرقمي، اذكر أيًا من السرية والسلامة والمصادقة يوفرها، في جملة واحدة لكل منها.",
      ),
      expected: l(
        "Symmetric/asymmetric → confidentiality; hashing → integrity; signatures → integrity + authentication.",
        "المتماثل/غير المتماثل → السرية؛ التجزئة → السلامة؛ التوقيعات → السلامة + المصادقة.",
      ),
    },
    {
      title: l("Explain why TLS uses hybrid encryption", "اشرح سبب استخدام TLS للتشفير المختلط"),
      instructions: l(
        "In a few sentences, explain why TLS encrypts the session key with asymmetric encryption but the bulk data with symmetric encryption.",
        "في بضع جمل اشرح لماذا يشفّر TLS مفتاح الجلسة بتشفير غير متماثل لكن البيانات الضخمة بتشفير متماثل.",
      ),
      expected: l(
        "Asymmetric is safe to transmit but slow; symmetric is fast. Hybrid gets the secure key exchange of asymmetric and the speed of symmetric.",
        "التشفير غير المتماثل آمن للنقل لكنه بطيء؛ والمتماثل سريع. ويجمع المختلط تبادل المفاتيح الآمن لغير المتماثل مع سرعة المتماثل.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can describe what cryptography protects (confidentiality, integrity, authentication), compare symmetric and asymmetric encryption with their trade-offs, explain hybrid encryption and key management, explain hash functions and safe password storage, explain digital signatures, and explain certificates, PKI and the TLS handshake. You can also use a simulator to encode and break a Caesar cipher and observe the avalanche effect and an integrity check.",
    "بعد هذه الجلسة يمكنك وصف ما يحمي التشفير (السرية والسلامة والمصادقة)، ومقارنة التشفير المتماثل وغير المتماثل بمقاييسهما، وشرح التشفير المختلط وإدارة المفاتيح، وشرح دوال التجزئة وتخزين كلمات المرور الآمن، وشرح التوقيعات الرقمية، وشرح الشهادات وPKI ومصافحة TLS. ويمكنك أيضًا استخدام محاكي لتشفير وكسر شيفرة سيزار وملاحظة تأثير الانهيار وفحص السلامة.",
  ),
  commonMistakes: [
    l("Confusing hashing with encryption: you cannot retrieve the original from a hash.", "الخلط بين التجزئة والتشفير: فلا يمكنك استرجاع الأصل من التجزئة."),
    l("Storing passwords with a fast, unsalted hash: too easy to crack at scale; use a slow salted hash (bcrypt, scrypt, Argon2).", "تخزين كلمات المرور بتجزئة سريعة غير مملحة: فكسرها سهل على نطاق واسع؛ واستخدم تجزئة بطيئة مملحة (bcrypt أو scrypt أو Argon2)."),
    l("Thinking asymmetric encryption is used to encrypt all data: it is too slow; it protects keys, while symmetric encrypts the bulk data.", "الظن أن التشفير غير المتماثل يستخدم لتشفير كل البيانات: فهو بطيء جدًا؛ فهو يحمي المفاتيح، بينما يشفّر المتماثل البيانات الضخمة."),
    l("Trusting a certificate without verifying the chain: an invalid or expired certificate means the identity is not proven.", "الثقة بشهادة دون التحقق من السلسلة: فالشهادة غير الصالحة أو المنتهية تعني أن الهوية غير مثبتة."),
    l("Relying on a weak key (small key space): the cipher's strength is bounded by the key, so a small key space is trivially breakable.", "الاعتماد على مفتاح ضعيف (فضاء مفاتيح صغير): فقوة الخوارزمية مقيدة بالمفتاح، وفضاء المفاتيح الصغير يُكسر بسهولة."),
  ],
  bestPractices: [
    l("Use proven, standard algorithms (AES, RSA, ECC, SHA-2) rather than designing your own.", "استخدم خوارزميات معيارية معروفة (AES وRSA وECC وSHA-2) لا أن تصمم خوارزميتك."),
    l("Manage keys securely: generate strongly, store in a vault or HSM, rotate and revoke on compromise.", "أدر المفاتيح بأمان: ولدها بقوة، واحتزّنها في خزنة أو HSM، ودرّها وأبطلها عند الاختراق."),
    l("Store passwords with a slow salted hash (bcrypt, scrypt, Argon2), never plaintext or a fast hash.", "اخزّن كلمات المرور بتجزئة بطيئة مملحة (bcrypt أو scrypt أو Argon2)، لا كنص واضح أو تجزئة سريعة."),
    l("Use hybrid encryption: asymmetric for key exchange, symmetric for the bulk data.", "استخدم التشفير المختلط: غير المتماثل لتبادل المفاتيح والمتماثل للبيانات الضخمة."),
    l("Verify certificate chains; never disable certificate validation to 'fix' a connection.", "تحقق من سلاسل الشهادات؛ ولا تعطِّل التحقق من الشهادة لـ«إصلاح» اتصال."),
  ],
  keyTakeaways: [
    l("Cryptography protects confidentiality, integrity and authentication; different mechanisms provide different properties.", "يحمي التشفير السرية والسلامة والمصادقة؛ وآليات مختلفة توفر خواصًا مختلفة."),
    l("Symmetric encryption is fast but needs a shared secret; asymmetric encryption avoids sharing a secret but is slower.", "التشفير المتماثل سريع لكنه يحتاج سرًا مشتركًا؛ والتشفير غير المتماثل يتجنب مشاركة السر لكنه أبطأ."),
    l("Hybrid encryption combines both: asymmetric protects the session key, symmetric protects the bulk data.", "يجمع التشفير المختلط الاثنين: غير المتماثل يحمي مفتاح الجلسة والمتماثل يحمي البيانات الضخمة."),
    l("Hashes are one-way and verify integrity; signatures add authentication and non-repudiation.", "التجزئات أحادية الاتجاه وتتحقق من السلامة؛ والتوقيعات تضيف المصادقة وعدم الإنكار."),
    l("Certificates, PKI and the TLS handshake establish trust and secure web traffic; never skip certificate validation.", "تقيم الشهادات وPKI ومصافحة TLS الثقة وتأمين حركة الويب؛ ولا تتجاهل التحقق من الشهادة أبدًا."),
  ],
  lab: {
    title: l("Lab 8 — Cryptography: Ciphers, Hashing and Integrity", "المختبر 8 — التشفير: الشيفرات والتجزئة والسلامة"),
    scenario: l(
      "Use the companion simulators (display only; nothing is run against real systems) to explore the Caesar cipher and hash functions. Encode and decode text with the Caesar cipher, break it by trying all shifts, observe the avalanche effect of a hash, and verify integrity with a hash comparison.",
      "استخدم المحاكيات المرافقة (عرض فقط؛ ولا يُنفَّذ شيء على أنظمة حقيقية) لاستكشف شيفرة سيزار ودوال التجزئة. ورمِّز النص وفكه بشيفرة سيزار، واكسرها بتجربة كل الإزاحات، ولاحظ تأثير الانهيار للتجزئة، وتحقق من السلامة بمقارنة التجزئة.",
    ),
    safety: l(
      "The simulators only display text and computed results; nothing is encrypted or transmitted on real systems. Do not attempt to break encryption on systems you do not own or are not authorized to test. Cryptographic practice belongs in controlled, authorized environments.",
      "المحاكيات تعرض نصوصًا ونتائج محسوبة فقط؛ ولا يُشفّر شيء ولا يُرسل على أنظمة حقيقية. ولا تحاول كسر التشفير على أنظمة لا تملكها أو لست مصرحًا باختبارها. وممارسة التشفير تنتمي إلى بيئات مضبوطة ومصرح بها.",
    ),
    steps: [
      l("Encode and decode text with the Caesar cipher", "ترميز وفك تشفير النص بشيفرة سيزار"),
      l("Break the cipher by trying all shifts", "كسر الشيفرة بتجربة كل الإزاحات"),
      l("Observe the avalanche effect of a hash", "ملاحظة تأثير الانهيار للتجزئة"),
      l("Verify integrity with a hash comparison", "التحقق من السلامة بمقارنة التجزئة"),
      l("Match mechanisms to the properties they provide", "مطابقة الآليات بالخواص التي توفرها"),
      l("Design a secure password-storage approach", "تصميم نهج لتخزين كلمات مرور آمن"),
    ],
    expected: l(
      "You can encode and decode with the Caesar cipher, explain how trying all shifts breaks it, describe the avalanche effect and integrity check, and match symmetric, asymmetric, hash and signature mechanisms to the properties they provide.",
      "يمكنك الترميز وفك التشفير بشيفرة سيزار، وشرح كيف يكسر تجربة كل الإزاحات، ووصف تأثير الانهيار وفحص السلامة، ومطابقة آليات المتماثل وغير المتماثل والتجزئة والتوقيع بالخواص التي توفرها.",
    ),
    tool: "cipher",
    objectives: [
      l("Encode and decode text with the Caesar cipher", "ترميز وفك تشفير النص بشيفرة سيزار"),
      l("Explain how trying all shifts breaks the cipher", "شرح كيف يكسر تجربة كل الإزاحات الشيفرة"),
      l("Describe the avalanche effect and integrity check", "وصف تأثير الانهيار وفحص السلامة"),
      l("Match mechanisms to the properties they provide", "مطابقة الآليات بالخواص التي توفرها"),
      l("Design a secure password-storage approach", "تصميم نهج لتخزين كلمات مرور آمن"),
    ],
    prerequisites: [
      l("Session 12: how TLS and web security use cryptography", "الجلسة 12: كيف يستخدم TLS وأمن الويب التشفير"),
      l("Basic arithmetic comfort; no number theory required", "راحة أساسية مع الحساب؛ ولا حاجة لنظرية الأعداد"),
    ],
    environment: l(
      "The companion cipher and hash simulators in a browser (display only). No real encryption, database or system is involved. All outputs shown are simulated.",
      "محاكيا الشيفرة والتجزئة المرافقان في متصفح (عرض فقط). لا توجد عملية تشفير أو قاعدة بيانات أو نظام حقيقي. وجميع المخرجات المعروضة محاكاة.",
    ),
    tools: [
      l("Caesar cipher simulator (companion browser tool, display only)", "محاكي شيفرة سيزار (أداة متصفح مساندة، عرض فقط"),
      l("Hash simulator (companion browser tool, display only)", "محاكي التجزئة (أداة متصفح مساندة، عرض فقط"),
    ],
    authorization: l(
      "Scope: use the display-only simulators. Prohibited: attempting to break or weaken encryption on any real system without written authorization. Stop condition: if asked to test a real system, stop and confirm authorization first.",
      "النطاق: استخدم محاكيات العرض فقط. المحظور: محاولة كسر أو إضعاف التشفير على أي نظام حقيقي دون تصريح كتابي. شرط التوقف: إذا طُلب منك اختبار نظام حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Encode text with the Caesar cipher", "ترميز النص بشيفرة سيزار"),
        command: "cipher simulator: encode mode",
        explanation: l(
          "In encode mode, enter plaintext and a shift value. Observe how each letter is replaced by the letter a fixed number of places down the alphabet, and note that the same shift always produces the same ciphertext.",
          "في وضع الترميز أدخل نصًا واضحًا وقيمة إزاحة. ولاحظ كيف يُستبدل كل حرف بالحرف الذي يقع بعده بعدد ثابت من المواضع في الأبجدية، وتنبّه أن الإزاحة نفسها تنتج دائمًا نفس النص المشفر.",
        ),
        expected: l("You can encode text with a chosen shift and reproduce the same ciphertext from the same input.", "يمكنك ترميز النص بإزاحة مختارة وإعادة إنتاج نفس النص المشفر من نفس المدخل."),
      },
      {
        title: l("Decode text with the Caesar cipher", "فك تشفير النص بشيفرة سيزار"),
        command: "cipher simulator: decode mode",
        explanation: l(
          "Switch to decode mode, enter the ciphertext and the shift, and observe the plaintext recovered. Note that decoding is the reverse of encoding: it shifts each letter back by the same number of places.",
          "انتقل إلى وضع فك التشفير، وأدخل النص المشفر والإزاحة، ولاحظ النص الواضح المستعاد. وتنبّه أن فك التشفير هو عكس الترميز: فيزيح كل حرف إلى الخلف بنفس العدد من المواضع.",
        ),
        expected: l("You can recover the plaintext from ciphertext and the shift, confirming the reversible nature of this cipher.", "يمكنك استعادة النص الواضح من النص المشفر والإزاحة، مما يؤكد الطبيعة القابلة للعكس لهذه الشيفرة."),
      },
      {
        title: l("Break the cipher by trying all shifts", "كسر الشيفرة بتجربة كل الإزاحات"),
        command: "cipher simulator: try all shifts",
        explanation: l(
          "With only 25 possible shifts, try each one on the ciphertext and read the outputs. Identify which shift yields readable text and explain why the tiny key space makes this trivial — the cipher's weakness is the size of its key space, not secrecy of the method.",
          "مع 25 إزاحة ممكنة فقط، جرِّب كل واحدة على النص المشفر واقرأ المخرجات. وحدد أي إزاحة تعطي نصًا مقروءًا واشرح سبب بساطة الأمر — فضعف الشيفرة هو حجم فضاء مفاتيحها لا سرية الخوارزمية.",
        ),
        expected: l("You can find the correct shift by brute force over all 25 possibilities and read the plaintext.", "يمكنك إيجاد الإزاحة الصحيحة بالقوة الغاشمة عبر كل الـ 25 احتمالًا وقراءة النص الواضح."),
      },
      {
        title: l("Observe the avalanche effect", "ملاحظة تأثير الانهيار"),
        command: "hash simulator: avalanche mode",
        explanation: l(
          "Enter two nearly identical inputs (differing in one character). Observe that their hashes differ completely. Explain the avalanche effect: a tiny input change changes the entire output, so hashes are sensitive to any alteration.",
          "أدخل مدخلين متشابهين جدًا (يختلفان في حرف واحد). ولاحظ أن تجزئتيهما تختلفان تمامًا. واشرح تأثير الانهيار: فتغيير صغير في المدخل يغيّر المخرج كله، لذا تكون التجزئات حساسة لأي تعديل.",
        ),
        expected: l("You can show that changing one character produces a completely different hash, confirming the avalanche effect.", "يمكنك إظهار أن تغيير حرف واحد ينتج تجزئة مختلفة تمامًا، مما يؤكد تأثير الانهيار."),
      },
      {
        title: l("Verify integrity with a hash comparison", "التحقق من السلامة بمقارنة التجزئة"),
        command: "hash simulator: integrity mode",
        explanation: l(
          "Hash the same data twice and confirm the digests match. Then alter one character in the data and hash again, showing the digests now differ. Explain that this is how a sender and receiver confirm the data was not altered in transit.",
          "جزئي البيانات نفسها مرتين وتحقق من تطابق الملخصين. ثم غيّ حرفًا واحدًا في البيانات وجزئها مجددًا، وأظهر أن الملخصين يختلفان الآن. واشرح أن هذه هي الطريقة التي يتأكد بها المرسل والمتلقي من أن البيانات لم تُعدّل أثناء النقل.",
        ),
        expected: l("You can demonstrate that identical data yields matching hashes and any alteration yields a mismatch, proving integrity.", "يمكنك إثبات أن البيانات المطابقة تعطي تجزئات متطابقة وأن أي تعديل يعطي عدم تطابق، مما يثبت السلامة."),
      },
      {
        title: l("Match mechanisms to properties", "مطابقة الآليات بالخواص"),
        command: "Table: mechanism → property",
        explanation: l(
          "Match each mechanism to the property it provides: symmetric encryption → confidentiality; asymmetric encryption → confidentiality; hashing → integrity; digital signatures → integrity + authentication. Justify each pairing briefly.",
          "اربط كل آلية بالخاصية التي توفرها: التشفير المتماثل ← السرية؛ والتشفير غير المتماثل ← السرية؛ والتجزئة ← السلامة؛ والتوقيعات الرقمية ← السلامة + المصادقة. وبرر كل اقتران باختصار.",
        ),
        expected: l("A table pairing each mechanism with its property and a one-line justification.", "جدول يزاوج كل آلية بخاصيتها مع تبرير من سطر واحد."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The Caesar cipher output looks like gibberish", "يبدو مخرج شيفرة سيزار كلامًا غير مفهوم"),
        fix: l("Check the shift direction and value; encoding shifts forward, decoding shifts back. A wrong shift or direction produces unreadable text.", "تحقق من اتجاه الإزاحة وقيمتها؛ فالترميز يزيح للأمام وفك التشفير للخلف. والإزاحة أو الاتجاه الخاطئ ينتج نصًا غير مقروء."),
      },
      {
        problem: l("Cannot tell which shift is correct when breaking", "لا تستطيع تحديد الإزاحة الصحيحة عند الكسر"),
        fix: l("Look for readable words and letter frequency; English text has common letters. Try shifts in order and read each result.", "ابحث عن كلمات مقروءة وتكرار الحروف؛ فالنص الإنجليزي له حروف شائعة. وجرب الإزاحات بالترتيب واقرأ كل نتيجة."),
      },
      {
        problem: l("Confusing hashing with encryption", "الخلط بين التجزئة والتشفير"),
        fix: l("Remember you cannot recover the original from a hash; it is a fixed-size digest for integrity, not reversible encryption.", "تذكّر أنك لا تستطيع استعادة الأصل من التجزئة؛ فهي ملخص بحجم ثابت للسلامة لا تشفيرًا قابلًا للعكس."),
      },
      {
        problem: l("Unsure whether cryptographic practice is authorized", "لست متأكدًا من أن ممارسة التشفير مصرح بها"),
        fix: l("Stop. Use the display-only simulators or systems you own or are explicitly authorized to test. Unauthorized cryptographic testing is illegal and unethical.", "توقف. فاستعمل محاكيات العرض أو الأنظمة التي تملكها أو لديك إذن صريح باختبارها. فاختبار التشفير غير المصرح به مخالف للقانون وغير أخلاقي."),
      },
    ],
    deliverables: [
      l("Encoded and decoded text with the Caesar cipher", "نص مرمّز وفاقد التشفير بشيفرة سيزار"),
      l("A working brute-force break of the cipher across all shifts", "كسر بالقوة الغاشمة يعمل للشيفرة عبر كل الإزاحات"),
      l("Evidence of the avalanche effect", "دليل على تأثير الانهيار"),
      l("An integrity check showing match and mismatch", "فحص سلامة يظهر التطابق وعدم التطابق"),
      l("A table matching mechanisms to properties", "جدول يزاوج الآليات بالخواص"),
      l("A design for secure password storage", "تصميم لتخزين كلمات مرور آمن"),
    ],
    rubric: [
      { criterion: l("Correct encode/decode with the Caesar cipher", "الترميز/فك التشفير الصحيح بشيفرة سيزار"), weight: 20 },
      { criterion: l("Correct brute-force break across all shifts", "الكسر الصحيح بالقوة الغاشمة عبر كل الإزاحات"), weight: 20 },
      { criterion: l("Correct demonstration of avalanche and integrity", "الإثبات الصحيح للانهيار والسلامة"), weight: 20 },
      { criterion: l("Correct mechanism-to-property matching", "المطابقة الصحيحة للآليات بالخواص"), weight: 20 },
      { criterion: l("Sound password-storage design and safety awareness", "تصميم سليم لتخزين كلمات المرور ووعي بالسلامة"), weight: 20 },
    ],
  },
  majorLabId: "lab-08",
  quiz: [
    {
      q: l("What does confidentiality ensure?", "ما الذي تضمنته السرية؟"),
      options: [
        l("Only the intended reader can read the data", "القارئ المقصود فقط يقرأ البيانات"),
        l("The data was not altered", "لم تُعدّل البيانات"),
        l("You know who sent the data", "تعرف من أرسل البيانات"),
        l("The sender cannot deny sending", "لا يستطيع المرسل إنكار الإرسال"),
      ],
      answer: 0,
      why: l("Confidentiality means only the intended reader can read the data.", "السرية تعني أن القارئ المقصود فقط يقرأ البيانات."),
    },
    {
      q: l("Which property does a hash function primarily provide?", "أي خاصية توفرها دالة التجزئة أساسًا؟"),
      options: [
        l("Confidentiality", "السرية"),
        l("Integrity", "السلامة"),
        l("Non-repudiation", "عدم الإنكار"),
        l("Speed", "السرعة"),
      ],
      answer: 1,
      why: l("A hash lets you confirm the data has not been altered, i.e. integrity.", "تتيح التجزئة تأكيد عدم تعديل البيانات، أي السلامة."),
    },
    {
      q: l("In the Caesar cipher, how many possible keys exist?", "في شيفرة سيزار كم مفتاحًا ممكنًا يوجد؟"),
      options: [
        l("25", "25"),
        l("26", "26"),
        l("128", "128"),
        l("256", "256"),
      ],
      answer: 0,
      why: l("Shifting the 26-letter alphabet, a shift of 0 is a no-op, leaving 25 real keys.", "بإزاحة الأبجدية المكونة من 26 حرفًا، تكون الإزاحة 0 بلا تأثير، وتتبقى 25 مفتاحًا حقيقيًا."),
    },
    {
      q: l("Why does TLS use symmetric encryption for bulk data?", "لماذا يستخدم TLS التشفير المتماثل للبيانات الضخمة؟"),
      options: [
        l("Because symmetric encryption is fast", "لأن التشفير المتماثل سريع"),
        l("Because asymmetric encryption is too slow", "لأن التشفير غير المتماثل بطيء جدًا"),
        l("Both of the above", "كلاهما صحيح"),
        l("Because symmetric keys are larger", "لأن مفاتيح المتماثل أكبر"),
      ],
      answer: 2,
      why: l("Symmetric is fast and asymmetric is slow, so hybrid uses each where it is strongest.", "المتماثل سريع وغير المتماثل بطيء، لذا يجمع المختلط كلًا فيما يتميز به."),
    },
    {
      q: l("What does the avalanche effect mean?", "ماذا يعني تأثير الانهيار؟"),
      options: [
        l("A tiny input change alters the entire hash", "تغيير صغير في المدخل يغيّر التجزئة كلها"),
        l("Hash output is the same length as input", "مخرج التجزئة بنفس طول المدخل"),
        l("Hashes can be reversed", "يمكن عكس التجزئات"),
        l("Hashes are always encrypted", "التجزئات مشفّرة دائمًا"),
      ],
      answer: 0,
      why: l("The avalanche effect means a small input change changes the entire output dramatically.", "تأثير الانهيار يعني أن تغييرًا صغيرًا في المدخل يغيّر المخرج كله بشكل جذري."),
    },
    {
      q: l("How should passwords be stored at rest?", "كيف يجب تخزين كلمات المرور في حالة السكون؟"),
      options: [
        l("In plaintext for quick access", "كنص واضح لسرعة الوصول"),
        l("With a fast, unsalted hash", "بتجزئة سريعة غير مملحة"),
        l("With a slow, salted hash (bcrypt/scrypt/Argon2)", "بتجزئة بطيئة مملحة (bcrypt/scrypt/Argon2)"),
        l("In the URL parameter", "في معامل العنوان URL"),
      ],
      answer: 2,
      why: l("A slow salted hash resists cracking at scale far better than plaintext or fast hashes.", "تجزئة بطيئة مملحة تقاوم الكسر على نطاق واسع أفضل بكثير من النص الصريح أو التجزئات السريعة."),
    },
    {
      q: l("What does a digital signature provide?", "ماذا يوفر التوقيع الرقمي؟"),
      options: [
        l("Only confidentiality", "السرية فقط"),
        l("Integrity and authentication", "السلامة والمصادقة"),
        l("Only speed", "السرعة فقط"),
        l("Only confidentiality and speed", "السرية والسرعة فقط"),
      ],
      answer: 1,
      why: l("A signature proves the data is intact and came from the private-key holder.", "يثبت التوقيع أن البيانات سليمة وأنها جاءت من حامل المفتاح الخاص."),
    },
    {
      q: l("What does a certificate bind together?", "ماذا تربط الشهادة معًا؟"),
      options: [
        l("A public key to an identity", "مفتاحًا عامًا بهوية"),
        l("A private key to a speed", "مفتاحًا خاصًا بسرعة"),
        l("Two symmetric keys", "مفتاحين متماثلين"),
        l("A hash to a plaintext", "تجزئة بنص واضح"),
      ],
      answer: 0,
      why: l("An X.509 certificate binds a public key to an identity and is signed by a CA.", "تربط شهادة X.509 مفتاحًا عامًا بهوية وتوقّعها سلطة شهادات."),
    },
    {
      q: l("What is Kerckhoffs' principle?", "ما قاعدة كيركهوف؟"),
      options: [
        l("Keep the algorithm secret", "أخفِ الخوارزمية"),
        l("Security should rest on the key, not secrecy of the design", "يجب أن يرتكز الأمن على المفتاح لا سرية التصميم"),
        l("Use only symmetric keys", "استخدم مفاتيح متماثلة فقط"),
        l("Hash all passwords", "جزئي كل كلمات المرور"),
      ],
      answer: 1,
      why: l("The system should be secure even if everything except the key is public.", "يجب أن يكون النظام آمنًا حتى لو كان كل شيء عدا المفتاح علنيًا."),
    },
    {
      q: l("Which two properties does TLS provide for web traffic?", "أي خاصتين يوفرهما TLS لحركة الويب؟"),
      options: [
        l("Confidentiality and integrity", "السرية والسلامة"),
        l("Speed and simplicity", "السرعة والبساطة"),
        l("Only non-repudiation", "عدم الإنكار فقط"),
        l("Only speed", "السرعة فقط"),
      ],
      answer: 0,
      why: l("TLS encrypts traffic for confidentiality and uses hashes for integrity.", "يشفّر TLS الحركة للسرية ويستخدم التجزئات للسلامة."),
    },
    {
      q: l("Why is asymmetric encryption used for the session key?", "لماذا يستخدم التشفير غير المتماثل لمفتاح الجلسة؟"),
      options: [
        l("It is faster than symmetric", "هو أسرع من المتماثل"),
        l("It can be shared safely without a pre-existing secret", "يمكن مشاركته بأمان دون سر موجود مسبقًا"),
        l("It encrypts bulk data best", "يشفّر البيانات الضخمة أفضل"),
        l("It needs no keys", "لا يحتاج مفاتيح"),
      ],
      answer: 1,
      why: l("The public key can be exchanged openly, avoiding the need to share a secret beforehand.", "يمكن تبادل المفتاح العام علنًا دون الحاجة لمشاركة سر مسبقًا."),
    },
  ],
  trueFalse: [
    {
      q: l("A hash function can be used to retrieve the original data.", "يمكن استخدام دالة التجزئة لاستعادة البيانات الأصلية."),
      answer: false,
      why: l("Hashes are one-way; you cannot reverse a digest to get the original input.", "التجزئات أحادية الاتجاه؛ فلا يمكنك عكس الملخص للحصول على المدخل الأصلي."),
    },
    {
      q: l("Symmetric encryption uses a single shared secret key.", "يستخدم التشفير المتماثل مفتاحًا سريًا مشتركًا واحدًا."),
      answer: true,
      why: l("Both parties use the same key to encrypt and decrypt.", "يستخدم الطرفان المفتاح نفسه للتشفير وفك التشفير."),
    },
    {
      q: l("Asymmetric encryption is faster than symmetric encryption.", "التشفير غير المتماثل أسرع من التشفير المتماثل."),
      answer: false,
      why: l("Asymmetric encryption is much slower, so it protects keys rather than bulk data.", "التشفير غير المتماثل أبطأ بكثير، لذا يحمي المفاتيح لا البيانات الضخمة."),
    },
    {
      q: l("The avalanche effect means a small input change changes the whole hash.", "تأثير الانهيار يعني أن تغييرًا صغيرًا في المدخل يغيّر التجزئة كلها."),
      answer: true,
      why: l("Good hashes are highly sensitive: a tiny input change alters the entire digest.", "التجزئات الجيدة حساسة جدًا: فتغيير صغير في المدخل يغيّر الملخص كله."),
    },
    {
      q: l("You should store passwords using a fast hash like plain SHA-256.", "يجب تخزين كلمات المرور بتجزئة سريعة مثل SHA-256 الخام."),
      answer: false,
      why: l("Fast unsalted hashes are too easy to crack at scale; use a slow salted hash.", "التجزئات السريعة غير المملحة يسهل كسرها على نطاق واسع؛ فاستخدم تجزئة بطيئة مملحة."),
    },
    {
      q: l("A digital signature can provide non-repudiation.", "يمكن للتوقيع الرقمي أن يوفر عدم الإنكار."),
      answer: true,
      why: l("Because only the private-key holder could have produced the signature.", "لأنه لا يمكن لأحد سوى حامل المفتاح الخاص إنتاج التوقيع."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each mechanism by the primary property it provides", "صنّف كل آلية بالخاصية الأساسية التي توفرها"),
      categories: [
        l("Confidentiality", "السرية"),
        l("Integrity", "السلامة"),
        l("Authentication", "المصادقة"),
      ],
      items: [
        { text: l("Symmetric encryption", "التشفير المتماثل"), answer: 0 },
        { text: l("Hash function", "دالة التجزئة"), answer: 1 },
        { text: l("Digital signature", "التوقيع الرقمي"), answer: 2 },
        { text: l("Asymmetric encryption (encrypt-with-public)", "التشفير غير المتماثل (التشفير بالمفتاح العام)"), answer: 0 },
      ],
      why: l("Each mechanism targets a distinct property; signatures combine integrity and authentication.", "تستهدف كل آلية خاصية مميزة؛ وتجمع التوقيعات السلامة والمصادقة."),
    },
    {
      prompt: l("Classify each encryption approach by who holds the keys", "صنّف كل نهج تشفير بحسب من يحوز المفاتيح"),
      categories: [
        l("Shared single key", "مفتاح واحد مشترك"),
        l("Public/private key pair", "زوج مفتاح عام/خاص"),
      ],
      items: [
        { text: l("AES symmetric encryption", "التشفير المتماثل AES"), answer: 0 },
        { text: l("RSA public-key encryption", "التشفير بالمفتاح العام RSA"), answer: 1 },
        { text: l("Caesar cipher", "شيفرة سيزار"), answer: 0 },
        { text: l("Digital signature verification", "التحقق من التوقيع الرقمي"), answer: 1 },
      ],
      why: l("Symmetric uses a shared key; asymmetric uses a linked public/private pair.", "المتماثل يستخدم مفتاحًا مشتركًا؛ وغير المتماثل يستخدم زوجًا مرتبطًا عامًا/خاصًا."),
    },
    {
      prompt: l("Match each concept to its description", "زاوج كل مفهوم بوصفه"),
      categories: [
        l("Hash", "التجزئة"),
        l("Certificate", "الشهادة"),
        l("Session key", "مفتاح الجلسة"),
        l("Salt", "الملح"),
      ],
      items: [
        { text: l("Fixed-size one-way digest of data", "ملخص أحادي الاتجاه بحجم ثابت للبيانات"), answer: 0 },
        { text: l("Binds a public key to an identity", "يربط مفتاحًا عامًا بهوية"), answer: 1 },
        { text: l("Symmetric key exchanged for one session", "مفتاح متماثل يُبادَل لجلسة واحدة"), answer: 2 },
        { text: l("Random value preventing precomputed tables", "قيمة عشوائية تمنع الجداول المحسوبة مسبقًا"), answer: 3 },
      ],
      why: l("These are four core cryptographic concepts; each has a distinct definition.", "هذه أربعة مفاهيم تشفيرية أساسية؛ ولكل منها تعريف مميز."),
    },
    {
      prompt: l("Classify each password-storage method as safe or unsafe", "صنّف كل طريقة لتخزين كلمات المرور إلى آمنة أو غير آمنة"),
      categories: [
        l("Safe", "آمن"),
        l("Unsafe", "غير آمن"),
      ],
      items: [
        { text: l("bcrypt with per-user salt", "bcrypt بملح لكل مستخدم"), answer: 0 },
        { text: l("Plaintext", "نص واضح"), answer: 1 },
        { text: l("Argon2 with salt and iterations", "Argon2 بملح وتكرارات"), answer: 0 },
        { text: l("Fast unsalted SHA-256", "SHA-256 سريع غير مملحة"), answer: 1 },
      ],
      why: l("Slow salted hashes are safe; plaintext and fast unsalted hashes are easily cracked.", "التجزئات البطيئة المملحة آمنة؛ والنص الصريح والتجزئات السريعة غير المملحة تُكسر بسهولة."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "Two people want to exchange private messages and cannot meet to share a secret. They want a way to encrypt without ever sending a shared key in advance.",
        "يريد شخصان تبادل رسائل خاصة ولا يمكنهما اللقاء لمشاركة سر. ويريدان طريقة للتشفير دون إرسال مفتاح مشترك مسبقًا.",
      ),
      question: l("Which approach solves this?", "أي نهج يحل هذا؟"),
      options: [
        l("Symmetric encryption with a pre-shared key", "التشفير المتماثل بمفتاح مشارك مسبقًا"),
        l("Asymmetric encryption: encrypt with the recipient's public key", "التشفير غير المتماثل: التشفير بمفتاح المتلقي العام"),
        l("Plain hashing", "تجزئة خام"),
        l("Caesar cipher with shift 3", "شيفرة سيزار بإزاحة 3"),
      ],
      answer: 1,
      why: l("The public key can be shared openly; only the recipient's private key decrypts.", "يمكن مشاركة المفتاح العام علنًا؛ ولا يفك التشفير إلا مفتاح المتلقي الخاص."),
    },
    {
      scenario: l(
        "A server stores user passwords as fast, unsalted SHA-256 hashes. After a breach, attackers crack most passwords within hours.",
        "يخزّن خادم كلمات مرور المستخدمين كتجزئات SHA-256 سريعة غير مملحة. وبعد اختراق يفك المهاجمون معظم كلمات المرور في ساعات.",
      ),
      question: l("What is the root problem and the fix?", "ما المشكلة الجذرية وما الحل؟"),
      options: [
        l("The hashes are too slow; use plaintext", "التجزئات بطيئة جدًا؛ استخدم النص الصريح"),
        l("The hashes are fast and unsalted; switch to a slow salted hash (bcrypt/Argon2)", "التجزئات سريعة وغير مملحة؛ استبدلها بتجزئة بطيئة مملحة (bcrypt/Argon2)"),
        l("The passwords are too short; just require longer passwords", "كلمات المرور قصيرة جدًا؛ فقط اشترط كلمات أطول"),
        l("There is no fix", "لا حل"),
      ],
      answer: 1,
      why: l("Fast unsalted hashes are easily cracked; a slow salted hash makes cracking impractical.", "التجزئات السريعة غير المملحة يسهل كسرها؛ وتجزئة بطيئة مملحة تجعل الكسر غير عملي."),
    },
    {
      scenario: l(
        "A website uses TLS, but the operator disables certificate validation to silence warnings. Attackers can now present fraudulent certificates and read traffic.",
        "يستخدم موقع ويب TLS، لكن المُشغّل يعطّل التحقق من الشهادة لإسكات التحذيرات. ويمكن للمهاجمين الآن تقديم شهادات زائفة وقراءة الحركة.",
      ),
      question: l("What went wrong?", "ما الذي حدث بشكل خاطئ؟"),
      options: [
        l("TLS is broken by design", "TLS معطل بالتصميم"),
        l("Disabling certificate validation removed the trust anchor", "إيقاف التحقق من الشهادة أزال مرساة الثقة"),
        l("Symmetric encryption is insecure", "التشفير المتماثل غير آمن"),
        l("Hashes are unnecessary", "التجزئات غير ضرورية"),
      ],
      answer: 1,
      why: l("Certificate validation establishes trust; skipping it lets attackers impersonate the site.", "التحقق من الشهادة يقيم الثقة؛ وتجاهلها يسمح للمهاجمين بتقليد الموقع."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain in one sentence why the Caesar cipher is weak", "اشرح في جملة واحدة سبب ضعف شيفرة سيزار"),
      expected: l("It has only 25 possible keys, so every shift can be tried quickly by brute force.", "لديها 25 مفتاحًا ممكنًا فقط، فيمكن تجربة كل إزاحة بسرعة بالقوة الغاشمة."),
      hint: l("Think about the number of possible shifts.", "فكّر في عدد الإزاحات الممكنة."),
    },
    {
      task: l("State two properties a hash function should have", "اذكر خاصيتين ينبغي أن تمتلكهما دالة التجزئة"),
      expected: l("One-way (hard to reverse) and the avalanche effect (a small input change changes the whole output).", "أحادية الاتجاه (صعبة العكس) وتأثير الانهيار (تغيير صغير في المدخل يغيّر المخرج كله)."),
    },
  ],
  homework: {
    title: l("Homework 12 — Secure storage and a TLS walkthrough", "الواجب 12 — التخزين الآمن وشرح TLS"),
    tasks: [
      l("Explain the difference between confidentiality, integrity and authentication in your own words, one paragraph each.", "اشرح الفرق بين السرية والسلامة والمصادقة بأسلوبك، في فقرة لكل منها."),
      l("Describe why storing passwords as a slow salted hash is safer than a fast unsalted hash.", "صف سبب كون تخزين كلمات المرور بتجزئة بطيئة مملحة أكثر أمانًا من تجزئة سريعة غير مملحة."),
      l("Look up what the padlock in your browser means and write a short note on the TLS handshake in three steps.", "ابحث عن معنى القفل في متصفحك واكتب ملاحظة قصيرة عن مصافحة TLS في ثلاث خطوات."),
      l("Draw a simple diagram showing how a session key is exchanged with asymmetric encryption and used for bulk data.", "ارسم مخططًا بسيطًا يوضح كيف يُبادَل مفتاح الجلسة بتشفير غير متماثل ويستخدم للبيانات الضخمة."),
    ],
    deliverable: l(
      "A one-page write-up with the three-property explanation, password-storage note, TLS handshake steps and a key-exchange diagram.",
      "ورقة من صفحة واحدة تشمل شرح الخواص الثلاث وملاحظة تخزين كلمات المرور وخطوات مصافحة TLS ومخطط تبادل المفتاح.",
    ),
    criteria: [
      l("Accurate explanation of the three properties", "شرح دقيق للخواص الثلاث"),
      l("Clear, correct password-storage reasoning", "تبرير واضح وصحيح لتخزين كلمات المرور"),
      l("Correct three-step TLS handshake note", "ملاحظة صحيحة لمصافحة TLS في ثلاث خطوات"),
      l("Coherent key-exchange diagram", "مخطط متماسك لتبادل المفتاح"),
    ],
    challenge: l(
      "Optional challenge: research one historical cipher weakness (e.g. the Enigma or a broken export-grade cipher) and explain which cryptographic principle it violated.",
      "مهمة تحدٍ اختيارية: ابحث في ضعف تاريخي لشيفرة (مثل Enigma أو شيفرة بتقنية تصدير مكسورة) واشرح أي مبدأ تشفيري انتهكته.",
    ),
  },
  refs: [
    { title: "Cryptography Basics", org: "NIST", url: "https://csrc.nist.gov/topics/cryptography" },
    { title: "Digital Signature Standard (SP 800-186)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/186/final" },
    { title: "TLS 1.3 Specification", org: "IETF", url: "https://datatracker.ietf.org/doc/html/rfc8446" },
    { title: "Public Key Infrastructure (PKI)", org: "NIST", url: "https://csrc.nist.gov/projects/pki" },
    { title: "Password Storage (OWASP Cheat Sheet)", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
  ],
  terms: [
    { term: l("Confidentiality", "السرية"), def: l("Only the intended reader can read the data.", "القارئ المقصود فقط يقرأ البيانات."), example: l("Encrypting a message so no one else can read it.", "تشفير رسالة كي لا يقرأها أحد آخر.") },
    { term: l("Integrity", "السلامة"), def: l("The data has not been altered in transit.", "لم تُعدّل البيانات أثناء النقل.") },
    { term: l("Authentication", "المصادقة"), def: l("Confirming who sent or controls the data.", "التأكيد على من أرسل أو يسيطر على البيانات.") },
    { term: l("Non-repudiation", "عدم الإنكار"), def: l("The sender cannot plausibly deny sending the data.", "لا يستطيع المرسل إنكار إرسال البيانات بشكل معقول.") },
    { term: l("Symmetric encryption", "التشفير المتماثل"), def: l("Encryption that uses one shared secret key for both directions.", "تشفير يستخدم مفتاحًا سريًا مشتركًا واحدًا للاتجاهين.") },
    { term: l("Asymmetric encryption", "التشفير غير المتماثل"), def: l("Encryption that uses a public/private key pair.", "تشفير يستخدم زوجًا من المفاتيح العامة/الخاصة.") },
    { term: l("Public key", "المفتاح العام"), def: l("A key anyone can use to encrypt for the owner.", "مفتاح يستطيع أي شخص استخدامه للتشفير للمُلك.") },
    { term: l("Private key", "المفتاح الخاص"), def: l("A key only the owner keeps, used to decrypt or sign.", "مفتاح يحتفظ به المالك وحده ويستخدم لفك التشفير أو التوقيع.") },
    { term: l("Caesar cipher", "شيفرة سيزار"), def: l("A toy cipher that shifts each letter by a fixed number.", "شيفرة بسيطة تبدل كل حرف بعدد ثابت.") },
    { term: l("AES", "AES"), def: l("A widely used symmetric block cipher.", "خوارزمية تشفير متماثل شائعة الاستخدام.") },
    { term: l("RSA", "RSA"), def: l("A public-key algorithm based on factoring large numbers.", "خوارزمية بمفتاح عام قائمة على تحليل الأعداد الكبيرة.") },
    { term: l("ECC", "ECC"), def: l("Elliptic-curve cryptography, a public-key method.", "تشفير بالمنحنيات الإهليلجية، وهو نهج بمفتاح عام.") },
    { term: l("Hybrid encryption", "التشفير المختلط"), def: l("Using asymmetric for key exchange and symmetric for data.", "استخدام غير المتماثل لتبادل المفاتيح والمتماثل للبيانات.") },
    { term: l("Hash function", "دالة التجزئة"), def: l("A function producing a fixed-size one-way digest.", "دالة تُنتج ملخصًا أحادي الاتجاه بحجم ثابت.") },
    { term: l("Hash / digest", "التجزئة / الملخص"), def: l("The fixed-size output of a hash function.", "المخرج ذو الحجم الثابت لدالة التجزئة.") },
    { term: l("Avalanche effect", "تأثير الانهيار"), def: l("A tiny input change changes the entire output.", "تغيير صغير في المدخل يغيّر المخرج كله.") },
    { term: l("SHA-256", "SHA-256"), def: l("A common hash function producing 256-bit digests.", "دالة تجزئة شائعة تُنتج ملخصات بحجم 256 بت.") },
    { term: l("Salt", "الملح"), def: l("A random value mixed into a hash to prevent precomputed tables.", "قيمة عشوائية تُخلط في التجزئة لمنع الجداول المحسوبة مسبقًا.") },
    { term: l("Key space", "فضاء المفاتيح"), def: l("The number of possible keys; larger means stronger.", "عدد المفاتيح الممكنة؛ وكلما كبر كان أقوى.") },
    { term: l("Key management", "إدارة المفاتيح"), def: l("Generating, storing, rotating and revoking keys securely.", "توليد المفاتيح وتخزينها وتدويرها وإبطالها بأمان.") },
    { term: l("Digital signature", "التوقيع الرقمي"), def: l("A hash encrypted with the private key to prove integrity and sender.", "تجزئة مشفّرة بالمفتاح الخاص لإثبات السلامة والمرسل.") },
    { term: l("Certificate", "الشهادة"), def: l("A document binding a public key to an identity.", "وثيقة تربط مفتاحًا عامًا بهوية.") },
    { term: l("Certificate Authority (CA)", "سلطة الشهادات"), def: l("A trusted party that signs certificates.", "طرف موثوق يوقّع الشهادات.") },
    { term: l("PKI", "البنية التحتية للمفاتيح العامة"), def: l("The system of certificates and CAs that establishes trust.", "نظام الشهادات وسلطات الشهادات الذي يقيم الثقة.") },
    { term: l("TLS handshake", "مصافحة TLS"), def: l("The negotiation that verifies identity and sets up the session key.", "المفاوضة التي تتحقق من الهوية وتنشئ مفتاح الجلسة."), example: l("What your browser does before a secure page loads.", "ما يفعله متصفحك قبل تحميل صفحة آمنة.") },
  ],
};
