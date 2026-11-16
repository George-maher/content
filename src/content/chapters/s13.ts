import { l, type Session } from "../types";

export const s13: Session = {
  id: 13,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Identity and Access Management: Authentication, Access Control and the IAM Lifecycle",
    "إدارة الهوية والوصول: المصادقة والتحكم بالوصول ودورة حياة إدارة الهوية والوصول",
  ),
  summary: l(
    "How systems verify who you are and decide what you may do. Authentication, password attacks and strong passwords, MFA and passkeys, access control models (DAC, MAC, RBAC, ABAC), least privilege, separation of duties, the joiner-mover-leaver lifecycle, SSO and privileged access.",
    "كيف تتحقق الأنظمة من هويتك وتقرر ما يجوز لك فعله. والمصادقة وهجمات كلمات المرور وكلمات المرور القوية، وMFA ومفاتيح المرور، ونماذج التحكم بالوصول (DAC وMAC وRBAC وABAC)، وأقل صلاحية وفصل المهام ودورة الانضمام-النقل-المغادرة وSSO والوصول الممتاز.",
  ),
  overview: l(
    "Identity and Access Management (IAM) is how an organisation answers two questions: who are you (authentication) and what are you allowed to do (authorisation). This session merges authentication and access control into one coherent picture. You will learn how authentication factors work and why passwords fail, how to build strong passwords and choose phishing-resistant MFA and passkeys, how access control models (DAC, MAC, RBAC, ABAC) decide who may do what, and the principles — least privilege, need-to-know, separation of duties, default deny — that every model must respect. You will also learn the identity lifecycle (joiner, mover, leaver, review) and how SSO, federation and privileged access management (PAM) operate at scale. The session closes with a lab where you use an RBAC simulator to design a least-privilege access matrix.",
    "إدارة الهوية والوصول هي كيف تجيب المؤسسة عن سؤالين: من أنت (المصادقة) وما يجوز لك فعله (التفويض). وتدمج هذه الجلسة المصادقة والتحكم بالوصول في صورة متماسكة. ستتعلم كيف تعمل عوامل المصادقة ولماذا تفشل كلمات المرور، وكيف تبني كلمات مرور قوية وتختار MFA ومفاتيح مرور مقاومة للتصيّد، وكيف تقرر نماذج التحكم بالوصول (DAC وMAC وRBAC وABAC) من يجوز له فعل ماذا، والمبادئ — أقل صلاحية والحاجة إلى المعرفة وفصل المهام والمنع افتراضيًا — التي يجب أن يلتزم بها كل نموذج. ستتعلم أيضًا دورة حياة الهوية (انضمام ونقل ومغادرة ومراجعة) وكيف يعمل SSO والاتحاد وإدارة الوصول الممتاز (PAM) على نطاق واسع. وتنتهي الجلسة بمختبر تستخدم فيه محاكي RBAC لتصميم مصفوفة وصول بأقل صلاحية.",
  ),
  whyItMatters: l(
    "Broken access control is the number-one web risk, and most breaches begin with an identity: a stolen password, an over-privileged account, or a forgotten login that was never disabled. Understanding authentication and access control together lets you reason about the full path from 'who is this person' to 'what can this person do', and design systems where the answers are strong and enforced consistently. These principles apply from a single account to an enterprise of thousands.",
    "التحكم المكسور بالوصول هو الخطر الأول على الويب، ومعظم الاختراقات تبدأ بهوية: كلمة مرور مسروقة أو حساب مفرط الصلاحية أو دخول منسيّ لم يُعطَّل. ويُمكّنك فهم المصادقة والتحكم بالوصول معًا من التفكير في المسار الكامل من «من هذا الشخص» إلى «ما يستطيع هذا الشخص فعله»، وتصميم أنظمة تكون إجاباتها قوية ومُطبّقة بانتظام. وتنطبق هذه المبادئ من حساب واحد إلى مؤسسة من آلاف الأشخاص.",
  ),
  prerequisites: [
    l(
      "Session 12, Web Application Security: how login forms, sessions and cookies are attacked.",
      "الجلسة 12، أمن تطبيقات الويب: كيف تُهاجم نماذج الدخول والجلسات وملفات الارتباط.",
    ),
    l(
      "Session 9, Cryptography: how hashing and signatures support authentication.",
      "الجلسة 9، التشفير: كيف تدعم التجزئة والتوقيعات المصادقة.",
    ),
    l(
      "A legal and ethical mindset: test access controls only on systems you own or are authorized to test.",
      "عقلية قانونية وأخلاقية: اختبر ضوابط الوصول فقط على الأنظمة التي تملكها أو لديك إذن باختبارها.",
    ),
  ],
  objectives: [
    l(
      "Differentiate identification, authentication, authorisation and accounting (AAA).",
      "التمييز بين تعريف الهوية والمصادقة والتفويض والمحاسبة (AAA).",
    ),
    l(
      "Explain password attacks and apply modern guidance for strong passwords and MFA.",
      "شرح هجمات كلمات المرور وتطبيق الإرشادات الحديثة لكلمات المرور القوية وMFA.",
    ),
    l(
      "Compare DAC, MAC, RBAC and ABAC and choose where each fits.",
      "المقارنة بين DAC وMAC وRBAC وABAC واختيار موضع كلٍّ منها.",
    ),
    l(
      "Apply least privilege, need-to-know, separation of duties and default deny.",
      "تطبيق أقل صلاحية والحاجة إلى المعرفة وفصل المهام والمنع افتراضيًا.",
    ),
    l(
      "Explain the identity lifecycle, SSO/federation and privileged access management.",
      "شرح دورة حياة الهوية وSSO/الاتحاد وإدارة الوصول الممتاز.",
    ),
    l(
      "Design a least-privilege access matrix for a set of roles and resources.",
      "تصميم مصفوفة وصول بأقل صلاحية لمجموعة من الأدوار والموارد.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("AAA: identity, authentication, authorisation", "AAA: الهوية والمصادقة والتفويض"), minutes: 12 },
    { label: l("Password attacks and strong passwords", "هجمات كلمات المرور وكلمات المرور القوية"), minutes: 13 },
    { label: l("Multi-factor authentication and passkeys", "المصادقة متعددة العوامل ومفاتيح المرور"), minutes: 13 },
    { label: l("Access control models (DAC, MAC, RBAC, ABAC)", "نماذج التحكم بالوصول (DAC وMAC وRBAC وABAC)"), minutes: 12 },
    { label: l("Core principles: least privilege and separation of duties", "المبادئ الأساسية: أقل صلاحية وفصل المهام"), minutes: 12 },
    { label: l("The identity lifecycle: joiner, mover, leaver", "دورة حياة الهوية: انضمام ونقل ومغادرة"), minutes: 11 },
    { label: l("SSO, federation, PAM and practical assessment", "SSO والاتحاد وPAM والتمرين العملي والتقييم"), minutes: 12 },
  ],
  introduction: l(
    "Identity and Access Management (IAM) answers two questions: who are you, and what are you allowed to do. This session merges authentication and access control into one coherent picture. You will learn how authentication factors work and why passwords fail, how to build strong passwords and choose phishing-resistant MFA and passkeys, how access control models decide who may do what, and the principles every model must respect. You will also learn the identity lifecycle and how SSO, federation and privileged access management operate at scale. The session closes with a lab where you use an RBAC simulator to design a least-privilege access matrix.",
    "تجيب إدارة الهوية والوصول عن سؤالين: من أنت، وما يجوز لك فعله. وتدمج هذه الجلسة المصادقة والتحكم بالوصول في صورة متماسكة. ستتعلم كيف تعمل عوامل المصادقة ولماذا تفشل كلمات المرور، وكيف تبني كلمات مرور قوية وتختار MFA ومفاتيح مرور مقاومة للتصيّد، وكيف تقرر نماذج التحكم بالوصول من يجوز له فعل ماذا، والمبادئ التي يجب أن يلتزم بها كل نموذج. ستتعلم أيضًا دورة حياة الهوية وكيف يعمل SSO والاتحاد وإدارة الوصول الممتاز على نطاق واسع. وتنتهي الجلسة بمختبر تستخدم فيه محاكي RBAC لتصميم مصفوفة وصول بأقل صلاحية.",
  ),
  sections: [
    {
      h: l("1. AAA: identity, authentication, authorisation", "1. AAA: الهوية والمصادقة والتفويض"),
      p: [
        l(
          "Access control is a chain. Identification is claiming an identity (a username). Authentication is proving it. Authorisation decides what the proven identity may do (read, write, delete, approve). Accounting — logging — records what it did. Together these are the AAA services. Authentication proves one or more factors: something you know (password, PIN), something you have (phone, hardware key, smart card) and something you are (fingerprint, face), often with context signals such as location and device health.",
          "التحكم بالوصول سلسلة. فتعريف الهوية هو ادّعاء هوية (اسم مستخدم). والمصادقة هي إثباتها. والتفويض يقرر ما يحق للهوية المثبتة فعله (قراءة، كتابة، حذف، اعتماد). والمحاسبة — التسجيل — توثق ما فعلته. وهذه معًا خدمات AAA. وتثبت المصادقة عاملًا أو أكثر: شيء تعرفه (كلمة مرور، رقم سري) وشيء تملكه (هاتف، مفتاح عتادي، بطاقة ذكية) وشيء أنت عليه (بصمة، وجه)، وكثيرًا ما تُضاف إشارات سياق مثل الموقع وسلامة الجهاز.",
        ),
        l(
          "Weak access control is consistently among the top causes of breaches. After authentication proves identity, authorisation must enforce the permitted actions on every request and every resource, and accounting must log it. A system that authenticates well but authorises loosely is still broken: the door may be locked, but once inside, anyone can go anywhere.",
          "يُعد ضعف التحكم بالوصول باستمرار من أبرز أسباب الاختراقات. فبعد أن تثبت المصادقة الهوية، يجب أن يفرض التفويض الإجراءات المسموحة على كل طلب ولكل مورد، وتسجّل المحاسبة ذلك. فالنظام الذي يصادق جيدًا لكنه يفوض بسلاسة لا يزال معطوبًا: قد يكون الباب مقفلًا، لكن بمجرد الدخول يستطيع أي شخص الذهاب إلى أي مكان.",
        ),
      ],
    },
    {
      h: l("2. Password attacks and strong passwords", "2. هجمات كلمات المرور وكلمات المرور القوية"),
      p: [
        l(
          "Understanding attacks explains the advice — attackers rarely type guesses by hand. Brute force tries every combination online or offline against a stolen hash database; dictionary and rule-based attacks try common words and predictable patterns like Summer2024!; credential stuffing reuses leaked e-mail/password pairs across sites; password spraying tries one common password across many accounts to avoid lockouts; phishing and infostealers steal typed or saved passwords; shoulder surfing and keyloggers observe or record keystrokes.",
          "يفهم الهجمات يفسر النصائح — فالمهاجمون نادرًا ما يكتبون التخمينات يدويًا. فالقوة الغاشمة تجرب كل التركيبات عبر الشبكة أو دون اتصال على قاعد تجزئات مسروقة؛ وهجمات القاموس والقواعد تجرب كلمات وأنماطًا شائعة مثل Summer2024!؛ وحشو بيانات الدخول يعيد استخدام أزواج بريد/كلمة مرور مسرّبة في مواقع أخرى؛ ورش كلمات المرور يجرب كلمة شائعة واحدة على حسابات كثيرة لتفادي القفل؛ والتصيّد وسارقو المعلومات يسرقون الكلمات المكتوبة أو المحفوظة؛ والتلصص ومسجلات المفاتيح يراقبون أو يسجلون ضغطات المفاتيح.",
        ),
        l(
          "Entropy (measured in bits) estimates how unpredictable a secret is; each added character multiplies the possibilities, so length beats complexity. Current NIST (SP 800-63B) guidance: prefer length (at least 8, ideally 15 or more), allow all characters and long passphrases, check new passwords against breached and common-password lists, do not force periodic changes, and do not use security questions or composition rules that push users toward predictable patterns. A password manager generates and stores a long random unique password per account and fills it only on the real domain — which also helps defeat phishing — so you remember one strong master passphrase protected by MFA.",
          "تقدّر الإنتروبيا (بالبتات) مدى عدم قابلية السر للتوقع؛ وكل حرف مضاف يضاعف الاحتمالات، لذا يتفوق الطول على التعقيد. والإرشاد الحالي من NIST (SP 800-63B): فضّل الطول (8 على الأقل ويفضل 15 أو أكثر)، وأتح كل الرموز والعبارات الطويلة، وافحص كلمات المرور الجديدة بقوائم التسريبات والشائعة، ولا تفرض تغييرًا دوريًا، ولا تستخدم أسئلة الأمان أو قواعد تركيب تدفع المستخدمين لأنماط متوقعة. ويولّد مدير كلمات المرور كلمة مرور عشوائية طويلة فريدة لكل حساب ويخزنها ويملؤها فقط في النطاق الحقيقي — وهو ما يساعد على إفشال التصيّد — فتذكر عبارة رئيسية قوية واحدة محمية بـ MFA.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l("Check whether your e-mail appears in known breaches with a reputable breach-notification service, and change the passwords of any affected accounts.", "تحقق إن كان بريدك ضمن تسريبات معروفة عبر خدمة إشعار تسريبات موثوقة وغيّر كلمات مرور الحسابات المتأثرة."),
      },
    },
    {
      h: l("3. Multi-factor authentication and passkeys", "3. المصادقة متعددة العوامل ومفاتيح المرور"),
      p: [
        l(
          "MFA stops the large majority of automated account takeovers, because a stolen password alone is no longer enough. Not all factors are equal: SMS codes can be intercepted via SIM-swapping; app-based one-time codes (TOTP) are better but can be phished in real time by a look-alike site; push approvals can be abused by 'MFA fatigue' bombing (use number matching); FIDO2 hardware keys and passkeys are the strongest, because the cryptographic response is bound to the real website's domain and cannot be replayed on a fake one.",
          "توقف MFA الغالبية العظمى من عمليات الاستيلاء الآلي على الحسابات، لأن كلمة المرور المسروقة وحدها لم تعد كافية. وليست العوامل كلها سواء: رموز SMS يمكن اعتراضها عبر تبديل الشريحة؛ والرموز المؤقتة من تطبيق (TOTP) أفضل لكنها قد تُصطاد لحظيًا بموقع مشابه؛ وموافقات الإشعارات قد تُستغل بإغراق «إرهاق MFA» (استخدم مطابقة الأرقام)؛ ومفاتيح FIDO2 العتادية ومفاتيح المرور هي الأقوى لأن الاستجابة التشفيرية مرتبطة بنطاق الموقع الحقيقي ولا يمكن إعادة استخدامها على موقع مزيف.",
        ),
        l(
          "Passkeys replace the password with a key pair: the private key stays on your device (protected by a biometric or PIN) and the website stores only the public key. Nothing secret crosses the network, so there is nothing to phish, stuff or leak from the server. Also plan account recovery carefully: weak recovery questions or help-desk resets are the favourite way around strong authentication. Two or more different categories make genuine MFA; two passwords are not MFA.",
          "تستبدل مفاتيح المرور كلمة المرور بزوج مفاتيح: يبقى المفتاح الخاص على جهازك (محميًا ببصمة أو رقم سري) ولا يخزّن الموقع إلا المفتاح العام. ولا ينتقل أي سر عبر الشبكة فلا شيء يُصطاد أو يُحشى أو يتسرب من الخادم. وخطط أيضًا لاستعادة الحساب بعناية: فأسئلة الاستعادة الضعيفة وإعادة التعيين عبر مكتب المساعدة هي الطريق المفضل للالتفاف على المصادقة القوية. وفئتان مختلفتان أو أكثر يشكلان MFA حقيقية؛ أما كلمتا مرور فليستا MFA.",
        ),
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
    {
      h: l("4. Access control models", "4. نماذج التحكم بالوصول"),
      p: [
        l("Different models answer 'who decides?' differently:", "تجيب النماذج المختلفة عن سؤال «من يقرر؟» بطرق مختلفة:"),
      ],
      table: {
        head: [l("Model", "النموذج"), l("Who decides", "من يقرر"), l("How", "كيف"), l("Typical use", "الاستخدام المعتاد")],
        rows: [
          [l("DAC — Discretionary", "DAC — تقديري"), l("The resource owner", "مالك المورد"), l("Owner grants rights to others (file sharing, chmod)", "يمنح المالك الحقوق للآخرين (مشاركة الملفات وchmod)"), l("Personal and team files", "الملفات الشخصية والجماعية")],
          [l("MAC — Mandatory", "MAC — إلزامي"), l("The system / central authority", "النظام / سلطة مركزية"), l("Labels on data and clearances on users (Secret, Top Secret)", "تصنيفات على البيانات وتصاريح للمستخدمين (سري، سري للغاية)"), l("Military, government, SELinux", "العسكري والحكومي وSELinux")],
          [l("RBAC — Role-based", "RBAC — بالأدوار"), l("Administrators define roles", "المديرون يعرّفون الأدوار"), l("Permissions attach to roles; users get roles", "ترتبط الصلاحيات بالأدوار ويحصل المستخدمون على أدوار"), l("Most enterprises", "معظم المؤسسات")],
          [l("ABAC — Attribute-based", "ABAC — بالسمات"), l("A policy engine", "محرك سياسات"), l("Rules on attributes: department, location, time, device health, data sensitivity", "قواعد على السمات: القسم والموقع والوقت وسلامة الجهاز وحساسية البيانات"), l("Cloud, zero trust, fine-grained rules", "السحابة وانعدام الثقة والقواعد الدقيقة")],
        ],
      },
      callout: { kind: "key", text: l("RBAC is the workhorse of enterprises: permissions attach to roles, and users are assigned roles, so administration and auditing are simplified. ABAC extends this with fine-grained rules on attributes, which suits cloud and zero-trust environments. DAC is common for files and personal systems, while MAC is used where central policy is mandatory, such as military and government. Most real systems combine models.", "RBAC هو العمود الفقري للمؤسسات: ترتبط الصلاحيات بالأدوار ويُمنح المستخدمون أدوارًا، فتُبسّط الإدارة والتدقيق. ويوسّع ABAC هذا بقواعد دقيقة على السمات، وهو ما يناسب بيئات السحابة وانعدام الثقة. ويشيع DAC للملفات والأنظمة الشخصية، بينما يُستخدم MAC حيث تكون السياسة المركزية إلزامية، كالعسكري والحكومي. وتجمع معظم الأنظمة الحقيقية بين النماذج.") },
    },
    {
      h: l("5. Core principles: least privilege and separation of duties", "5. المبادئ الأساسية: أقل صلاحية وفصل المهام"),
      p: [l("Whatever model you use, apply these principles:", "أيًّا كان النموذج، طبّق هذه المبادئ:")],
      bullets: [
        l("Least privilege — give only the permissions needed for the job, for the shortest time needed. Prefer read over write, and temporary elevation over permanent admin rights.", "أقل صلاحية — امنح فقط الصلاحيات اللازمة للعمل وللمدة الأقصر اللازمة. فضّل القراءة على الكتابة والرفع المؤقت على صلاحيات المدير الدائمة."),
        l("Need-to-know — even with the right clearance, access is limited to the information needed for the task.", "الحاجة إلى المعرفة — حتى مع التصريح المناسب يقتصر الوصول على المعلومات اللازمة للمهمة."),
        l("Separation of duties — no single person can complete a critical process alone (one raises a payment, another approves it), preventing fraud and errors.", "فصل المهام — لا يستطيع شخص واحد إتمام عملية حرجة بمفرده (واحد ينشئ الدفعة وآخر يعتمدها) منعًا للاحتيال والأخطاء."),
        l("Default deny — access is refused unless explicitly granted.", "المنع افتراضيًا — يُرفض الوصول ما لم يُمنح صراحة."),
        l("Individual accounts — no shared logins, so every action is attributable (accountability).", "حسابات فردية — لا دخول مشترك ليمكن نسب كل إجراء لصاحبه (المساءلة)."),
      ],
      callout: { kind: "key", text: l("These principles are the contract that any access-control model must honour. Least privilege and need-to-know limit the blast radius of a compromised account; separation of duties prevents one person from committing and hiding fraud; default deny and individual accounts ensure access is deliberate and actions are attributable. Applying them consistently is more important than choosing the 'right' model.", "هذه المبادئ هي العقد الذي يجب أن يلتزم به أي نموذج للتحكم بالوصول. فتُحد أقل صلاحية والحاجة إلى المعرفة من دائرة ضرر الحساب المخترق؛ ويمنع فصل المهام شخصًا واحدًا من ارتكاب الاحتيال وإخفائه؛ ويضمن المنع افتراضيًا والحسابات الفردية أن يكون الوصول مدروسًا والإجراءات قابلة للنسب. وتطبيقها بانتظام أهم من اختيار النموذج «الصحيح».") },
    },
    {
      h: l("6. The identity lifecycle: joiner, mover, leaver", "6. دورة حياة الهوية: انضمام ونقل ومغادرة"),
      p: [
        l(
          "IAM manages digital identities through a lifecycle. Joiner: create the account with role-based starter access and enrol MFA. Mover: when someone changes jobs, add the new role and remove old permissions — otherwise 'privilege creep' accumulates. Leaver: disable accounts and revoke tokens immediately at departure. Periodic access reviews (recertification) ask managers to confirm that each person's access is still justified. Orphaned accounts of former staff are a classic attack path.",
          "تدير IAM الهويات الرقمية عبر دورة حياة. المنضم: إنشاء الحساب بوصول مبدئي بحسب الدور وتسجيل MFA. المنتقل: عند تغيير الوظيفة يُضاف الدور الجديد وتُزال الصلاحيات القديمة — وإلا يتراكم «زحف الصلاحيات». المغادر: تعطيل الحسابات وإلغاء الرموز فور المغادرة. وتطلب المراجعات الدورية للوصول (إعادة التصديق) من المديرين تأكيد أن وصول كل شخص لا يزال مبررًا. والحسابات اليتيمة للموظفين السابقين مسار هجوم كلاسيكي.",
        ),
        l(
          "The cycle repeats: provision, use (authenticate, authorise, log), adjust, recertify, deprovision. Access must change as people change. Regular recertification closes the loop and catches privilege creep and orphaned accounts before attackers find them. Every step should be logged and attributable.",
          "تتكرر الدورة: تهيئة واستخدام (مصادقة وتفويض وتسجيل) وتعديل وإعادة تصديق وإلغاء. ويجب أن يتغير الوصول بتغير الأشخاص. وتغلق إعادة التصديق المنتظمة الحلقة وتلتقط زحف الصلاحيات والحسابات اليتيمة قبل أن يجدها المهاجمون. ويجب تسجيل كل خطوة ونسبها.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l("Ask in every access review: 'If this account were stolen tonight, what is the worst thing the attacker could do?' If the answer is frightening, reduce the access.", "اسأل في كل مراجعة وصول: «لو سُرق هذا الحساب الليلة فما أسوأ ما يستطيع المهاجم فعله؟» إن كان الجواب مخيفًا فقلّل الوصول."),
      },
    },
    {
      h: l("7. SSO, federation and privileged access management", "7. SSO والاتحاد وإدارة الوصول الممتاز"),
      p: [
        l(
          "Single Sign-On (SSO) lets users authenticate once with a central identity provider and reach many applications using standards such as SAML or OpenID Connect; it improves usability and lets you enforce MFA and conditional access in one place. Federation extends trust between organisations. Privileged Access Management (PAM) protects administrator accounts: separate admin accounts, just-in-time elevation, vaulted credentials, session recording and strong MFA — because one compromised admin account usually means total compromise. Service accounts and API keys are identities too and need owners, rotation and minimal rights.",
          "يتيح الدخول الموحد (SSO) للمستخدمين المصادقة مرة واحدة لدى مزوّد هوية مركزي والوصول إلى تطبيقات كثيرة بمعايير مثل SAML أو OpenID Connect؛ وهو يحسّن سهولة الاستخدام ويتيح فرض MFA والوصول المشروط في مكان واحد. ويمدّ الاتحاد الثقة بين المؤسسات. وتحمي إدارة الوصول الممتاز (PAM) حسابات المديرين: حسابات إدارة منفصلة، ورفع صلاحية في الوقت المناسب، وبيانات دخول في خزنة، وتسجيل الجلسات، وMFA قوي — لأن حساب مدير واحد مخترق يعني عادةً اختراقًا كاملًا. وحسابات الخدمة ومفاتيح API هويات أيضًا وتحتاج مالكًا وتدويرًا وأقل صلاحيات.",
        ),
        l(
          "SSO centralises the authentication decision, so one strong, monitored login point replaces many weak ones, and policy can be enforced consistently. PAM recognises that privileged accounts are the highest-value targets and applies the strictest controls to them. Together, authentication, authorisation, the lifecycle and these central services form a defence-in-depth identity layer: if one control fails, others still constrain the attacker.",
          "يمركز SSO قرار المصادقة، فتكون نقطة دخول قوية واحدة مراقبة بدل نقاط ضعيفة كثيرة، ويمكن فرض السياسة بانتظام. وتعترف PAM أن حسابات الامتياز هي الأعلى قيمة وتفرض أشد الضوابط عليها. ومعًا تشكل المصادقة والتفويض ودورة الحياة وهذه الخدمات المركزية طبقة دفاع في طبقات للهوية: فإذا فشل ضابط واحد تظل الضوابط الأخرى تقيّد المهاجم.",
        ),
      ],
    },
    {
      h: l("8. Bringing it together: a secure identity and access path", "8. جمع الأفكار: مسار آمن للهوية والوصول"),
      p: [
        l(
          "A secure identity and access path runs: identify, authenticate with strong factors (passwords plus MFA/passkeys), authorise with least privilege on every request, and account for every action. The lifecycle keeps access aligned with people as they join, move and leave, and SSO and PAM extend the model at scale. Understanding the whole path lets you reason about where a system is weak — a stolen password, an over-privileged account, a forgotten login — and fix it at the right point.",
          "يسير مسار آمن للهوية والوصول: تعريف الهوية، ومصادقة بعوامل قوية (كلمات مرور مع MFA/مفاتيح مرور)، وتفويض بأقل صلاحية على كل طلب، ومحاسبة كل إجراء. وتحفظ دورة الحياة الوصول متوافقًا مع الأشخاص عند انضمامهم وانتقالهم ومغادرتهم، ويوسّع SSO وPAM النموذج على نطاق واسع. ويُمكّنك فهم المسار كله من التفكير في مواضع ضعف النظام — كلمة مرور مسروقة أو حساب مفرط الصلاحية أو دخول منسيّ — وإصلاحه في الموضع الصحيح.",
        ),
        l(
          "As you practise, remember the boundary: test access controls and identity mechanisms only on systems you own or are explicitly authorized to test. Understanding how authentication and authorisation work is essential, but exercising them against real systems without permission is illegal and unethical. Use the simulators and legal practice environments to build the skill safely.",
          "عند التدرّب تذكّر الحد: اختبر ضوابط الوصول وآليات الهوية فقط على الأنظمة التي تملكها أو لديك إذن صريح باختبارها. ففهم كيفية عمل المصادقة والتفويض أساسي، لكن ممارستها على أنظمة حقيقية دون إذن مخالف للقانون وغير أخلاقي. واستخدم المحاكيات وبيئات التدريب القانونية لبناء المهارة بأمان.",
        ),
      ],
    },
  ],
  examples: [
    l(
      "A user types a username (identification), then a password and an authenticator code (authentication). The system checks the password against a salted hash and verifies the code, then authorisation decides the user may read a report but not delete it, and accounting logs the read. Each step has a distinct job in the AAA chain.",
      "يكتب المستخدم اسمًا (تعريف الهوية)، ثم كلمة مرور ورمز تطبيق مصادقة (المصادقة). ويفحص النظام كلمة المرور مقابل تجزئة مملحة ويتحقق من الرمز، ثم يقرر التفويض أن المستخدم يجوز له قراءة تقرير لا حذفه، وتسجّل المحاسبة القراءة. ولكل خطوة دور مميز في سلسلة AAA.",
    ),
    l(
      "In RBAC, an accountant is assigned the 'Accountant' role, which grants read and approve access to invoices but no access to payroll. When the accountant moves to the sales team, the Accountant role is removed and the 'Sales' role added — the old invoice rights do not linger, preventing privilege creep.",
      "في RBAC يُمنح المحاسب دور «محاسب» يمنحه قراءة واعتماد الفواتير دون وصول إلى الرواتب. وعند انتقال المحاسب إلى فريق المبيعات يُزال دور المحاسب ويُضاف دور «مبيعات» — فلا تبقى صلاحيات الفواتير القديمة، مما يمنع زحف الصلاحيات.",
    ),
    l(
      "A passkey replaces a password: the device holds the private key behind a biometric, and the website stores only the public key. Because the cryptographic response is bound to the real domain, a fake site cannot replay it — this is why passkeys are the most phishing-resistant authentication method.",
      "يستبدل مفتاح المرور كلمة المرور: يحوز الجهاز المفتاح الخاص خلف بصمة، ولا يخزّن الموقع إلا المفتاح العام. ولأن الاستجابة التشفيرية مرتبطة بالنطاق الحقيقي فلا يمكن لموقِع مزيف إعادة استخدامها — ولهذا تُعد مفاتيح المرور أكثر طرق المصادقة مقاومة للتصيّد.",
    ),
  ],
  realWorldScenarios: [
    l(
      "After a breach, investigators find that a departed employee's account was never disabled; attackers used the orphaned login to access customer data for months. A timely leaver step — disable and revoke — would have closed the door immediately.",
      "بعد اختراق يجد المحققون أن حساب موظف مغادر لم يُعطَّل؛ واستخدم المهاجمون هذا الدخول المنسيّ للوصول إلى بيانات العملاء لأشهر. وكانت خطوة المغادر في وقتها — تعطيل وإلغاء — ستُغلق الباب فورًا.",
    ),
    l(
      "A company's four roles all had read/write access to everything. After an intern accidentally deleted production data, management redesigned the access matrix so each role gets only the access it needs — least privilege and separation of duties applied to stop a single mistake becoming a disaster.",
      "كانت الأدوار الأربعة في شركة ما تملك صلاحية قراءة/كتابة على كل شيء. وبعد أن حذف متدرب بيانات الإنتاج عن طريق الخطأ، أعادت الإدارة تصميم مصفوفة الوصول فيحصر كل دور بالوصول الذي يحتاجه فقط — تطبيقًا لأقل صلاحية وفصل المهام لمنع خطأ واحد من أن يتحول إلى كارثة.",
    ),
    l(
      "A bank enables SSO with a central identity provider and FIDO2 passkeys for staff. One strong, monitored login point replaces many weak passwords, and conditional access blocks logins from unusual locations — centralising authentication and policy enforcement.",
      "يُفعّل بنك SSO مع مزوّد هوية مركزي ومفاتيح مرور FIDO2 للموظفين. فتكون نقطة دخول قوية واحدة مراقبة بدل كلمات مرور ضعيفة كثيرة، ويمنع الوصول المشروط الدخول من مواقع غير معتادة — بمركزة المصادقة وإنفاذ السياسة.",
    ),
  ],
  diagram: {
    kind: "cycle",
    title: l("The identity lifecycle — access changes as people change", "دورة حياة الهوية — يتغير الوصول بتغير الأشخاص"),
    caption: l("Provision, use, adjust, recertify, deprovision. Regular recertification closes the loop and catches privilege creep and orphaned accounts.", "تهيئة واستخدام وتعديل وإعادة تصديق وإلغاء. وتغلق إعادة التصديق المنتظمة الحلقة وتلتقط زحف الصلاحيات والحسابات اليتيمة."),
    nodes: [
      { label: l("Joiner — provision", "المنضم — التهيئة"), desc: l("Create account, assign role, enrol MFA", "إنشاء الحساب وتعيين الدور وتسجيل MFA") },
      { label: l("Use — enforce", "الاستخدام — الإنفاذ"), desc: l("Authenticate, authorise, log every action", "مصادقة وتفويض وتسجيل كل إجراء") },
      { label: l("Mover — adjust", "المنتقل — التعديل"), desc: l("Add new role, remove old access", "إضافة الدور الجديد وإزالة الوصول القديم") },
      { label: l("Review — recertify", "المراجعة — إعادة التصديق"), desc: l("Managers confirm access is still needed", "يؤكد المديرون أن الوصول لا يزال لازمًا") },
      { label: l("Leaver — deprovision", "المغادر — الإلغاء"), desc: l("Disable account, revoke tokens, recover assets", "تعطيل الحساب وإلغاء الرموز واسترداد الأصول") },
    ],
  },
  instructorDemo: l(
    "Demonstrate the RBAC simulator and the AAA chain. Show a login (identification, authentication with password + MFA), then authorisation deciding what the role may do, and accounting logging it. Then in the RBAC simulator, walk a real access matrix: cycle cells between none, read-only and read/write, run 'check against policy', and explain each red violation in terms of least privilege or separation of duties. Connect the lab back to the lifecycle (joiner/mover/leaver) and the core principles. Run only in the simulator — never against a real system.",
    "اعرض محاكي RBAC وسلسلة AAA. واعرض تسجيل الدخول (تعريف الهوية ومصادقة بكلمة مرور + MFA)، ثم التفويض الذي يقرر ما يجوز للدور فعله، والمحاسبة التي تسجله. ثم في محاكي RBAC اشرح مصفوفة وصول حقيقية: دوّر الخلايا بين لا شيء وقراءة فقط وقراءة/كتابة، وشغّل «تحقق من السياسة»، واشرح كل مخالفة حمراء بحسب أقل صلاحية أو فصل المهام. واربط المختبر بدورة الحياة (انضمام/نقل/مغادرة) والمبادئ الأساسية. ونفّذ فقط في المحاكٍ — لا ضد أي نظام حقيقي.",
  ),
  exercises: [
    {
      title: l("Match each concept to its place in the AAA chain", "مطابقة كل مفهوم بموضعه في سلسلة AAA"),
      instructions: l(
        "For identification, authentication, authorisation and accounting, state what each does in one sentence and explain how they connect.",
        "لكل من تعريف الهوية والمصادقة والتفويض والمحاسبة، اذكر ما يفعله كل منها في جملة واحدة واشرح كيف تتصل.",
      ),
      expected: l(
        "Identification claims who you are; authentication proves it; authorisation decides what you may do; accounting logs what you did.",
        "تعريف الهوية يدّعي من أنت؛ والمصادقة تثبتها؛ والتفويض يقرر ما يجوز لك فعله؛ والمحاسبة تسجل ما فعلته.",
      ),
    },
    {
      title: l("Design a least-privilege access matrix", "تصميم مصفوفة وصول بأقل صلاحية"),
      instructions: l(
        "For three roles (e.g. accountant, salesperson, developer) and three resources (invoices, payroll, source code), decide none, read-only or read/write for each cell, applying least privilege and separation of duties. Justify two cells.",
        "لثلاثة أدوار (محاسب، ومندوب مبيعات، ومطوّر) وثلاثة موارد (الفواتير، والرواتب، وشيفرة المصدر) قرر لا شيء أو قراءة فقط أو قراءة/كتابة لكل خلية، مطبقًا أقل صلاحية وفصل المهام. وبرر خليتين.",
      ),
      expected: l(
        "A matrix where each role gets only the access it needs, with no role able to both create and approve a critical action, and clear justifications.",
        "مصفوفة يحصل فيها كل دور فقط على الوصول الذي يحتاجه، دون دور يستطيع إنشاء واعتماد إجراء حرجي معًا، وتبريرات واضحة.",
      ),
    },
  ],
  expectedResults: l(
    "After this session you can differentiate identification, authentication, authorisation and accounting, explain password attacks and apply modern guidance for strong passwords and MFA, compare DAC/MAC/RBAC/ABAC, apply least privilege, need-to-know, separation of duties and default deny, explain the identity lifecycle, SSO/federation and PAM, and design a least-privilege access matrix using a simulator.",
    "بعد هذه الجلسة يمكنك التمييز بين تعريف الهوية والمصادقة والتفويض والمحاسبة، وشرح هجمات كلمات المرور وتطبيق الإرشادات الحديثة لكلمات المرور القوية وMFA، والمقارنة بين DAC/MAC/RBAC/ABAC، وتطبيق أقل صلاحية والحاجة إلى المعرفة وفصل المهام والمنع افتراضيًا، وشرح دورة حياة الهوية وSSO/الاتحاد وPAM، وتصميم مصفوفة وصول بأقل صلاحية باستخدام محاكي.",
  ),
  commonMistakes: [
    l("Treating two passwords as MFA: MFA requires two or more different factor categories, not two knowledge factors.", "اعتبار كلمتي مرور MFA: فـ MFA تحتاج فئتين مختلفتين من العوامل لا عاملي معرفة."),
    l("Granting broad read/write to all roles: apply least privilege so each role gets only what it needs.", "منح صلاحية قراءة/كتابة واسعة لكل الأدوار: فطبّق أقل صلاحية ليحصل كل دور فقط على ما يحتاجه."),
    l("Leaving old permissions when someone changes roles: remove them to prevent privilege creep.", "إبقاء الصلاحيات القديمة عند تغيير الدور: فأزِلها لمنع زحف الصلاحيات."),
    l("Using shared accounts: they break accountability because actions cannot be traced to one person.", "استخدام حسابات مشتركة: فتكسر المساءلة لأن الإجراءات لا تُنسب لفرد واحد."),
    l("Skipping MFA or choosing SMS-only: weak factors leave accounts open to takeover; prefer FIDO2/passkeys.", "تخطّي MFA أو اختيار SMS فقط: فالعوامل الضعيفة تترك الحسابات معرضة للاستيلاء؛ ففضّل FIDO2/مفاتيح المرور."),
  ],
  bestPractices: [
    l("Use long, unique passwords from a manager, protected by strong phishing-resistant MFA or passkeys.", "استخدم كلمات مرور طويلة فريدة من مدير، محمية بـ MFA أو مفاتيح مرور قوية مقاومة للتصيّد."),
    l("Apply least privilege, need-to-know and separation of duties to every role and resource.", "طبّق أقل صلاحية والحاجة إلى المعرفة وفصل المهام على كل دور ومورد."),
    l("Deny by default and use individual accounts so access is deliberate and attributable.", "امنح افتراضيًا واستخدم حسابات فردية ليكون الوصول مدروسًا وقابلًا للنسب."),
    l("Run the identity lifecycle: provision at join, adjust at move, disable and revoke at leave, recertify regularly.", "نفّذ دورة حياة الهوية: تهيئة عند الانضمام وتعديل عند الانتقال وتعطيل وإلغاء عند المغادرة وإعادة تصديق دوري."),
    l("Centralise authentication with SSO and protect privileged accounts with PAM.", "مركزّ المصادقة بـ SSO وحمِ الحسابات الممتازة بـ PAM."),
  ],
  keyTakeaways: [
    l("IAM answers who you are (authentication) and what you may do (authorisation), with accounting recording what you did.", "تجيب IAM من أنت (المصادقة) وما يجوز لك فعله (التفويض)، مع تسجيل المحاسبة ما فعلته."),
    l("Use long unique passwords, strong MFA or passkeys — length beats complexity and FIDO2 resists phishing.", "استخدم كلمات مرور طويلة فريدة وMFA قوية أو مفاتيح مرور — فيتفوق الطول على التعقيد وتقاوم FIDO2 التصيّد."),
    l("DAC, MAC, RBAC and ABAC differ in who decides; most systems combine them.", "تختلف DAC وMAC وRBAC وABAC فيمن يقرر؛ وتجمع معظم الأنظمة بينها."),
    l("Least privilege, need-to-know, separation of duties, default deny and individual accounts are the core principles.", "أقل صلاحية والحاجة إلى المعرفة وفصل المهام والمنع افتراضيًا والحسابات الفردية هي المبادئ الأساسية."),
    l("The identity lifecycle (joiner, mover, leaver, review) keeps access aligned with people; SSO and PAM extend it at scale.", "تحفظ دورة حياة الهوية (انضمام ونقل ومغادرة ومراجعة) الوصول متوافقًا مع الأشخاص؛ ويوسّع SSO وPAM النموذج على نطاق واسع."),
  ],
  lab: {
    title: l("Lab 8 — Identity & Access Management: Least-Privilege Access Matrix", "المختبر 8 — إدارة الهوية والوصول: مصفوفة وصول بأقل صلاحية"),
    scenario: l(
      "A software company's four roles all currently have read/write access to everything. After an intern accidentally deleted production data, management asks you to fix the access matrix without blocking anyone's real work, applying least privilege and separation of duties.",
      "تملك الأدوار الأربعة في شركة برمجيات حاليًا صلاحية قراءة/كتابة على كل شيء. وبعد أن حذف متدرب بيانات الإنتاج عن طريق الخطأ، تطلب الإدارة منك إصلاح مصفوفة الوصول دون تعطيل عمل أحد الحقيقي، مطبقًا أقل صلاحية وفصل المهام.",
    ),
    safety: l(
      "The simulator only displays an access matrix and policy results; nothing is changed on any real system. In real environments, never remove access in bulk without testing and communicating the change, and always keep at least two break-glass administrator accounts under strong control.",
      "يعرض المحاكي فقط مصفوفة وصول ونتائج السياسة؛ ولا يُغيَّر شيء على أي نظام حقيقي. وفي البيئات الحقيقية لا تُزِل الوصول بالجملة دون اختبار وإبلاغ بالتغيير، وأبقِ دائمًا حسابَي مدير طوارئ على الأقل تحت ضبط صارم.",
    ),
    steps: [
      l("Read the job description under each role", "اقرأ وصف الوظيفة تحت كل دور"),
      l("Cycle each cell between none, read-only (R) and read/write (R/W)", "دوّر كل خلية بين لا شيء وقراءة فقط (R) وقراءة/كتابة (R/W)"),
      l("Run 'Check against policy' and fix every highlighted red cell", "شغّل «تحقق من السياسة» وأصلح كل خلية حمراء"),
      l("Explain which cells illustrate separation of duties", "اشرح أي الخلايا تُجسد فصل المهام"),
      l("Propose a just-in-time access process for debugging production", "اقترح عملية وصول في الوقت المناسب لتشخيص الإنتاج"),
      l("List three events that should trigger an immediate access review", "اذكر ثلاثة أحداث ينبغي أن تستدعي مراجعة وصول فورية"),
    ],
    expected: l(
      "You can produce a matrix with zero policy violations, a clear explanation of least privilege and separation of duties, and a short just-in-time access procedure, matching the RBAC model and core principles.",
      "يمكنك إنتاج مصفوفة بلا مخالفات سياسة، وشرح واضح لأقل صلاحية وفصل المهام، وإجراء وصول في الوقت المناسب قصير، مطابقًا لنموذج RBAC والمبادئ الأساسية.",
    ),
    tool: "rbac",
    objectives: [
      l("Apply least privilege to a set of roles and resources", "تطبيق أقل صلاحية على مجموعة أدوار وموارد"),
      l("Identify and fix policy violations in an access matrix", "تحديد وإصلاح مخالفات السياسة في مصفوفة الوصول"),
      l("Explain separation of duties using the matrix", "شرح فصل المهام باستخدام المصفوفة"),
      l("Design a just-in-time access procedure", "تصميم إجراء وصول في الوقت المناسب"),
      l("Identify events that trigger an access review", "تحديد الأحداث التي تستدعي مراجعة وصول"),
    ],
    prerequisites: [
      l("Session 12: how login forms, sessions and cookies are attacked", "الجلسة 12: كيف تُهاجم نماذج الدخول والجلسات وملفات الارتباط"),
      l("Session 9: how hashing and signatures support authentication", "الجلسة 9: كيف تدعم التجزئة والتوقيعات المصادقة"),
    ],
    environment: l(
      "The companion RBAC simulator in a browser (display only). No real accounts, roles or systems are involved. All matrix changes shown are simulated.",
      "محاكي RBAC المرافق في متصفح (عرض فقط). لا توجد حسابات أو أدوار أو أنظمة حقيقية. وجميع تغييرات المصفوفة المعروضة محاكاة.",
    ),
    tools: [
      l("RBAC access-matrix simulator (companion browser tool, display only)", "محاكي مصفوفة الوصول RBAC (أداة متصفح مساندة، عرض فقط"),
      l("Access-control policy reference (for the 'check against policy' step)", "مرجع سياسة التحكم بالوصول (لخطوة «تحقق من السياسة»)"),
    ],
    authorization: l(
      "Scope: use the display-only simulator. Prohibited: modifying access on any real system without written authorization. Stop condition: if asked to change access on a real system, stop and confirm authorization first.",
      "النطاق: استخدم محاكٍ العرض فقط. المحظور: تعديل الوصول على أي نظام حقيقي دون تصريح كتابي. شرط التوقف: إذا طُلب منك تغيير الوصول على نظام حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the role descriptions", "اقرأ أوصاف الأدوار"),
        command: "RBAC simulator: role descriptions",
        explanation: l(
          "Read the job description under each role. Note what each role actually needs to do its job, so you can decide the minimum access each requires.",
          "اقرأ وصف الوظيفة تحت كل دور. ولاحظ ما يحتاجه كل دور فعليًا لإنجاز عمله، كي تتمكن من تحديد أقل وصول يحتاجه.",
        ),
        expected: l("You can state, for each role, the minimum access it needs based on its job description.", "يمكنك بيان، لكل دور، أقل وصول يحتاجه بناءً على وصف وظيفته."),
      },
      {
        title: l("Set each cell in the matrix", "ضبط كل خلية في المصفوفة"),
        command: "RBAC simulator: cycle cells",
        explanation: l(
          "Click cells to cycle between none, read-only (R) and read/write (R/W) for every role/resource pair. Start from the principle of least privilege: grant only what the role's job requires, preferring read over write.",
          "انقر على الخلايا للتبديل بين لا شيء وقراءة فقط (R) وقراءة/كتابة (R/W) لكل زوج دور/مورد. وابدأ من مبدأ أقل صلاحية: امنح فقط ما يتطلبه عمل الدور، مع تفضيل القراءة على الكتابة.",
        ),
        expected: l("You can set each cell to none, R or R/W in line with the role's needs.", "يمكنك ضبط كل خلية إلى لا شيء أو R أو R/W بما يتوافق مع احتياجات الدور."),
      },
      {
        title: l("Check against policy and fix violations", "التحقق من السياسة وإصلاح المخالفات"),
        command: "RBAC simulator: check against policy",
        explanation: l(
          "Run 'Check against policy'. Each highlighted red cell is a violation of least privilege or separation of duties. Fix every red cell and re-run the check until the matrix reports no violations.",
          "شغّل «تحقق من السياسة». فكل خلية حمراء مظللة هي مخالفة لأقل صلاحية أو فصل المهام. وأصلح كل خلية حمراء وأعد تشغيل الفحص حتى تُبلغ المصفوفة عن عدم وجود مخالفات.",
        ),
        expected: l("You can reach a matrix with zero policy violations by correcting the flagged cells.", "يمكنك الوصول إلى مصفوفة بلا مخالفات سياسة بتصحيح الخلايا المُعلَّمة."),
      },
      {
        title: l("Explain separation of duties", "شرح فصل المهام"),
        command: "Table: separation of duties in the matrix",
        explanation: l(
          "Identify cells that illustrate separation of duties — for example, no role that changes data should also be able to edit the audit logs. Explain in one or two sentences why splitting the action prevents fraud or error.",
          "حدد الخلايا التي تُجسد فصل المهام — مثل: لا دور ممن يغيّر البيانات ينبغي أن يستطيع أيضًا تعديل سجلات التدقيق. واشرح في جملة أو جملتين سبب منع تقسيم الإجراء للاحتيال أو الخطأ.",
        ),
        expected: l("You can point to specific cells and explain how splitting a critical action prevents one person from completing it alone.", "يمكنك الإشارة إلى خلايا محددة وشرح كيف يمنع تقسيم إجراء حرجي شخصًا واحدًا من إتمامه بمفرده."),
      },
      {
        title: l("Design a just-in-time access process", "تصميم إجراء وصول في الوقت المناسب"),
        command: "Write a short JIT procedure",
        explanation: l(
          "When a developer legitimately needs to debug production, write a short just-in-time process: request access, approve it, grant it for a limited time, log it, and revoke it automatically when the time expires.",
          "عندما يحتاج مطوّر بشكل مشروع لتشخيص الإنتاج، اكتب إجراء وصول في الوقت المناسب قصير: اطلب الوصول واعتمده وامنحْه لوقت محدود وسجله وألغِه تلقائيًا عند انتهاء الوقت.",
        ),
        expected: l("A short procedure with request, approval, time-limited grant, logging and automatic revocation.", "إجراء قصير يشمل الطلب والاعتماد والمنح لوقت محدود والتسجيل والإبطال التلقائي."),
      },
      {
        title: l("List triggers for an access review", "ذكر محفزات مراجعة الوصول"),
        command: "List three triggers",
        explanation: l(
          "List three events that should trigger an immediate access review: a role change, a departure, and a detected anomaly or suspected compromise. Explain why each warrants a review.",
          "اذكر ثلاثة أحداث ينبغي أن تستدعي مراجعة وصول فورية: تغيير دور، ومغادرة، واكتشاف شذوذ أو اختراق مشتبه به. واشرح سبب استحقاق كل منها مراجعة.",
        ),
        expected: l("Three triggers — role change, departure, anomaly/compromise — each justified.", "ثلاثة محفزات — تغيير دور، ومغادرة، وشذوذ/اختراق — مع تبرير كل منها."),
      },
    ],
    troubleshooting: [
      {
        problem: l("A cell keeps failing the policy check", "خلية تفشل فحص السياسة باستمرار"),
        fix: l("Re-read the role description and the core principles. Least privilege and separation of duties usually mean reducing a cell from R/W to R or to none.", "أعد قراءة وصف الدور والمبادئ الأساسية. فعادةً ما يعني أقل صلاحية وفصل المهام خفض الخلية من R/W إلى R أو إلى لا شيء."),
      },
      {
        problem: l("Unsure how much access a role needs", "لست متأكدًا من مقدار الوصول الذي يحتاجه دور"),
        fix: l("Start from the job description: what must this role do? Grant exactly that. Prefer read over write, and deny what is not required.", "ابدأ من وصف الوظيفة: ما يجب على هذا الدور فعله؟ فامنح هذا بالضبط. وفضّل القراءة على الكتابة، وامنع ما لا يُطلب."),
      },
      {
        problem: l("Confusing least privilege with no access", "الخلط بين أقل صلاحية وانعدام الوصول"),
        fix: l("Least privilege means the minimum needed to do the job — not zero. Grant what the role genuinely needs, and nothing more.", "أقل صلاحية تعني الحد الأدنى اللازم للعمل — لا الصفر. فامنح ما يحتاجه الدور حقًا، ولا أكثر."),
      },
      {
        problem: l("Unsure whether to test a real access change", "لست متأكدًا مما إذا كان ينبغي اختبار تغيير وصول حقيقي"),
        fix: l("Stop. Use the display-only simulator or systems you own or are explicitly authorized to test. Unauthorized access changes are illegal and unethical.", "توقف. فاستعمل محاكٍ العرض أو الأنظمة التي تملكها أو لديك إذن صريح باختبارها. فتغييرات الوصول غير المصرح بها مخالفة للقانون وغير أخلاقية."),
      },
    ],
    deliverables: [
      l("A least-privilege access matrix with zero policy violations", "مصفوفة وصول بأقل صلاحية بلا مخالفات سياسة"),
      l("An explanation of separation of duties using the matrix", "شرح لفصل المهام باستخدام المصفوفة"),
      l("A short just-in-time access procedure", "إجراء وصول في الوقت المناسب قصير"),
      l("Three triggers for an access review with justifications", "ثلاثة محفزات لمراجعة الوصول مع تبريرات"),
      l("A summary of the AAA chain and core principles applied", "ملخص لسلسلة AAA والمبادئ الأساسية المُطبقة"),
      l("A note on how the identity lifecycle prevents privilege creep", "ملاحظة عن كيف تحبط دورة حياة الهوية زحف الصلاحيات"),
    ],
    rubric: [
      { criterion: l("Correct least-privilege matrix with zero violations", "مصفوفة صحيحة بأقل صلاحية بلا مخالفات"), weight: 30 },
      { criterion: l("Correct identification and fix of policy violations", "تحديد وإصلاح صحيح لمخالفات السياسة"), weight: 20 },
      { criterion: l("Clear separation-of-duties explanation", "شرح واضح لفصل المهام"), weight: 20 },
      { criterion: l("Sound just-in-time access procedure", "إجراء سليم للوصول في الوقت المناسب"), weight: 20 },
      { criterion: l("Appropriate access-review triggers and safety awareness", "محفزات مناسبة لمراجعة الوصول ووعي بالسلامة"), weight: 10 },
    ],
  },
  majorLabId: "lab-08",
  quiz: [
    {
      q: l("Which step proves a claimed identity is genuine?", "أي خطوة تثبت أن هوية مُدّعاة حقيقية؟"),
      options: [
        l("Identification", "تعريف الهوية"),
        l("Authentication", "المصادقة"),
        l("Authorisation", "التفويض"),
        l("Accounting", "المحاسبة"),
      ],
      answer: 1,
      why: l("Authentication is the step that proves the claimed identity is genuine.", "المصادقة هي الخطوة التي تثبت أن الهوية المدّعاة حقيقية."),
    },
    {
      q: l("What makes two passwords NOT genuine MFA?", "ما الذي يجعل كلمتي المرور ليست MFA حقيقية؟"),
      options: [
        l("They are the same category (both 'something you know')", "هما من الفئة نفسها (كلاهما «شيء تعرفه»)"),
        l("They are too long", "هما طويلتان جدًا"),
        l("They use a manager", "تستخدم مديرًا"),
        l("They contain a symbol", "فيهما رمز"),
      ],
      answer: 0,
      why: l("MFA requires two or more different factor categories, not two knowledge factors.", "تحتاج MFA فئتين مختلفتين أو أكثر من العوامل لا عامل معرفة اثنين."),
    },
    {
      q: l("Which MFA method is the most phishing-resistant?", "أي طريقة MFA هي الأكثر مقاومة للتصيّد؟"),
      options: [
        l("SMS code", "رمز SMS"),
        l("Email code", "رمز البريد"),
        l("FIDO2 security key / passkey", "مفتاح أمان FIDO2 / مفتاح مرور"),
        l("Security question", "سؤال أمان"),
      ],
      answer: 2,
      why: l("The cryptographic proof is tied to the genuine site's domain.", "الإثبات التشفيري مرتبط بنطاق الموقع الحقيقي."),
    },
    {
      q: l("Which model lets the resource owner decide who gets access?", "أي نموذج يتيح لمالك المورد تقرير من يحصل على الوصول؟"),
      options: [
        l("MAC", "MAC"),
        l("DAC", "DAC"),
        l("RBAC", "RBAC"),
        l("ABAC", "ABAC"),
      ],
      answer: 1,
      why: l("Discretionary Access Control leaves permission decisions to the owner.", "التحكم التقديري يترك قرارات الصلاحيات للمالك."),
    },
    {
      q: l("Assigning permissions to job roles rather than individuals is…", "منح الصلاحيات لأدوار وظيفية بدل الأفراد هو…"),
      options: [
        l("RBAC", "RBAC"),
        l("MAC", "MAC"),
        l("DAC", "DAC"),
        l("Brute force", "القوة الغاشمة"),
      ],
      answer: 0,
      why: l("Role-based access control assigns permissions to roles, simplifying administration and auditing.", "يمنح التحكم بالوصول بالأدوار الصلاحيات للأدوار، مبسّطًا الإدارة والتدقيق."),
    },
    {
      q: l("Requiring one employee to create a payment and another to approve it is…", "اشتراط أن ينشئ موظف دفعة ويعتمدها آخر هو…"),
      options: [
        l("Privilege creep", "زحف الصلاحيات"),
        l("Separation of duties", "فصل المهام"),
        l("Single sign-on", "الدخول الموحد"),
        l("Default deny", "المنع افتراضيًا"),
      ],
      answer: 1,
      why: l("It prevents one person from committing and hiding fraud alone.", "يمنع شخصًا واحدًا من ارتكاب الاحتيال وإخفائه بمفرده."),
    },
    {
      q: l("'Privilege creep' occurs when…", "يحدث «زحف الصلاحيات» عندما…"),
      options: [
        l("Users accumulate permissions as they change roles", "يراكم المستخدمون الصلاحيات مع تغيير أدوارهم"),
        l("Admins lose their passwords", "يفقد المديرون كلمات مرورهم"),
        l("Firewalls block traffic", "تحجب الجدران النارية الحركة"),
        l("Backups fail", "تفشل النسخ الاحتياطية"),
      ],
      answer: 0,
      why: l("Old access is not removed during moves, leaving excessive rights.", "لا يُزال الوصول القديم عند النقل فتبقى صلاحيات زائدة."),
    },
    {
      q: l("What is the most urgent identity task when an employee leaves?", "ما أكثر مهام الهوية إلحاحًا عند مغادرة موظف؟"),
      options: [
        l("Wait a month", "الانتظار شهرًا"),
        l("Disable accounts and revoke access immediately", "تعطيل الحسابات وإلغاء الوصول فورًا"),
        l("Share the password with the team", "مشاركة كلمة المرور مع الفريق"),
        l("Rename the account", "إعادة تسمية الحساب"),
      ],
      answer: 1,
      why: l("Orphaned accounts are an attack path and an insider risk.", "الحسابات اليتيمة مسار هجوم وخطر داخلي."),
    },
    {
      q: l("SSO mainly improves security by…", "يحسّن SSO الأمن أساسًا عبر…"),
      options: [
        l("Removing authentication", "إلغاء المصادقة"),
        l("Centralising authentication, MFA and policy enforcement", "مركزة المصادقة وMFA وإنفاذ السياسات"),
        l("Making passwords shorter", "تقصير كلمات المرور"),
        l("Disabling logs", "تعطيل السجلات"),
      ],
      answer: 1,
      why: l("One strong, monitored login point replaces many weak ones.", "نقطة دخول قوية ومراقبة واحدة بدل نقاط ضعيفة كثيرة."),
    },
    {
      q: l("Why are shared accounts a problem?", "لماذا تشكل الحسابات المشتركة مشكلة؟"),
      options: [
        l("They are cheaper", "هي أرخص"),
        l("Actions cannot be traced to one individual", "لا يمكن نسب الإجراءات لفرد واحد"),
        l("They always use MFA", "تستخدم MFA دائمًا"),
        l("They improve accountability", "تحسّن المساءلة"),
      ],
      answer: 1,
      why: l("No accountability means investigations and audits cannot attribute actions.", "غياب المساءلة يعني أن التحقيقات والتدقيق لا تنسب الإجراءات."),
    },
    {
      q: l("What does the principle of least privilege mean?", "ما معنى مبدأ أقل صلاحية؟"),
      options: [
        l("Granting only the access needed for a task", "منح الوصول اللازم للمهمة فقط"),
        l("Granting admin rights to everyone", "منح صلاحيات المدير للجميع"),
        l("Never granting any access", "عدم منح أي وصول أبدًا"),
        l("Granting permanent access", "منح وصول دائم"),
      ],
      answer: 0,
      why: l("It grants the minimum access needed for the task, for the time needed.", "يمنح الحد الأدنى من الوصول اللازم للمهمة وللمدة اللازمة."),
    },
  ],
  trueFalse: [
    {
      q: l("Two different passwords constitute genuine MFA.", "كلمتان مختلفتان من كلمات المرور تُشكّلان MFA حقيقية."),
      answer: false,
      why: l("MFA requires two or more different factor categories, not two knowledge factors.", "تحتاج MFA فئتين مختلفتين أو أكثر من العوامل لا عامل معرفة اثنين."),
    },
    {
      q: l("Length is more important than complexity when building a strong password.", "الطول أهم من التعقيد عند بناء كلمة مرور قوية."),
      answer: true,
      why: l("Each added character multiplies possibilities, so a long passphrase can be stronger and easier to remember.", "كل حرف مضاف يضاعف الاحتمالات، لذا قد تكون عبارة المرور الطويلة أقوى وأسهل حفظًا."),
    },
    {
      q: l("RBAC assigns permissions to roles, not directly to individuals.", "يمنح RBAC الصلاحيات للأدوار لا للأفراد مباشرة."),
      answer: true,
      why: l("Users are assigned roles that carry the permissions, simplifying administration.", "يُمنح المستخدمون أدوارًا تحمل الصلاحيات، مبسّطًا الإدارة."),
    },
    {
      q: l("Default deny means access is refused unless explicitly granted.", "المنع افتراضيًا يعني أن الوصول يُرفض ما لم يُمنح صراحة."),
      answer: true,
      why: l("Access is only permitted when it has been deliberately allowed, never assumed.", "يُسمح بالوصول فقط حين يُمنح بقصد، ولا يُفترض أبدًا."),
    },
    {
      q: l("You should force users to change passwords every 30 days.", "يجب أن تفرض على المستخدمين تغيير كلمات المرور كل 30 يومًا."),
      answer: false,
      why: l("Periodic forced changes push users toward predictable patterns; change only after suspected compromise.", "التدوير الإجباري الدوري يدفع المستخدمين لأنماط متوقعة؛ فغيّر فقط عند الاشتباه بالاختراق."),
    },
    {
      q: l("An orphaned account from a departed employee is an attack path.", "الحساب اليتيم لموظف مغادر هو مسار هجوم."),
      answer: true,
      why: l("Unused accounts can be used by attackers with no owner watching them.", "يمكن للمهاجمين استخدام الحسابات غير المستخدمة دون رقابة مالك."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item by its place in the AAA chain", "صنّف كل عنصر بموضعه في سلسلة AAA"),
      categories: [
        l("Identification", "تعريف الهوية"),
        l("Authentication", "المصادقة"),
        l("Authorisation", "التفويض"),
        l("Accounting", "المحاسبة"),
      ],
      items: [
        { text: l("Claiming a username", "ادّعاء اسم مستخدم"), answer: 0 },
        { text: l("Proving identity with a password", "إثبات الهوية بكلمة مرور"), answer: 1 },
        { text: l("Deciding what a role may read", "تقرير ما يجوز للدور قراءته"), answer: 2 },
        { text: l("Logging a file access", "تسجيل الوصول إلى ملف"), answer: 3 },
      ],
      why: l("These are the four steps of the AAA chain, each with a distinct job.", "هذه الخطوات الأربع لسلسلة AAA، ولكل منها دور مميز."),
    },
    {
      prompt: l("Classify each authentication factor by its category", "صنّف كل عامل مصادقة بحسب فئته"),
      categories: [
        l("Something you KNOW", "شيء تعرفه"),
        l("Something you HAVE", "شيء تملكه"),
        l("Something you ARE", "شيء أنت عليه"),
      ],
      items: [
        { text: l("Password", "كلمة المرور"), answer: 0 },
        { text: l("Hardware key", "المفتاح العتادي"), answer: 1 },
        { text: l("Fingerprint", "البصمة"), answer: 2 },
        { text: l("PIN", "الرقم السري"), answer: 0 },
      ],
      why: l("Authentication factors fall into three categories; MFA combines categories, not copies.", "تنقسم عوامل المصادقة إلى ثلاث فئات؛ وتجمع MFA الفئات لا النسخ."),
    },
    {
      prompt: l("Match each access control model to who decides", "زاوج كل نموذج تحكم بالوصول بمن يقرر"),
      categories: [
        l("Resource owner", "مالك المورد"),
        l("Central authority", "سلطة مركزية"),
        l("Role definitions", "تعريفات الأدوار"),
        l("Policy engine", "محرك السياسات"),
      ],
      items: [
        { text: l("DAC", "DAC"), answer: 0 },
        { text: l("MAC", "MAC"), answer: 1 },
        { text: l("RBAC", "RBAC"), answer: 2 },
        { text: l("ABAC", "ABAC"), answer: 3 },
      ],
      why: l("The four models differ in who makes the access decision.", "تختلف النماذج الأربعة فيمن يتخذ قرار الوصول."),
    },
    {
      prompt: l("Classify each action as least-privilege compliant or not", "صنّف كل إجراء بكونه متوافقًا مع أقل صلاحية أو غير متوافق"),
      categories: [
        l("Compliant", "متوافق"),
        l("Not compliant", "غير متوافق"),
      ],
      items: [
        { text: l("Granting a temporary elevation that auto-expires", "منح رفع صلاحية مؤقت ينقضي تلقائيًا"), answer: 0 },
        { text: l("Granting permanent admin rights to all staff", "منح صلاحيات مدير دائمة لكل الموظفين"), answer: 1 },
        { text: l("Granting read-only where write is not needed", "منح قراءة فقط حيث لا تحتاج كتابة"), answer: 0 },
        { text: l("Keeping old permissions after a role change", "إبقاء الصلاحيات القديمة بعد تغيير الدور"), answer: 1 },
      ],
      why: l("Least privilege means the minimum access for the job, for the time needed.", "أقل صلاحية تعني الحد الأدنى من الوصول للعمل وللمدة اللازمة."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "An employee moves from the finance team to the marketing team. Their old finance access is left in place because 'it's easier'.",
        "ينتقل موظف من فريق المالية إلى فريق التسويق. ويُترك وصوله المالي القديم لأنه «أسهل».",
      ),
      question: l("What problem occurs and how is it prevented?", "ما المشكلة التي تحدث وكيف تمنع؟"),
      options: [
        l("Privilege creep; remove old access during the move", "زحف الصلاحيات؛ أزِل الوصول القديم عند الانتقال"),
        l("Nothing; access should stay", "لا شيء؛ يجب أن يبقى الوصول"),
        l("MFA failure; add more passwords", "فشل MFA؛ أضف كلمات مرور أكثر"),
        l("Deny by default; disable all accounts", "المنع افتراضيًا؛ عيّط كل الحسابات"),
      ],
      answer: 0,
      why: l("Leaving old access causes privilege creep; the mover step removes it.", "يسبب إبقاء الوصول القديم زحف الصلاحيات؛ وتزيل خطوة الانتقال بناءً عليه."),
    },
    {
      scenario: l(
        "A team uses one shared login for a production server so 'no one has to remember a password'. A suspicious action is found but cannot be traced to any person.",
        "يستخدم فريق دخولًا مشتركًا واحدًا لخادم الإنتاج «حتى لا يضطر أحد لتذكر كلمة مرور». ويُعثر على إجراء مريب لكن لا يمكن نسبته لأي شخص.",
      ),
      question: l("What is the core problem?", "ما المشكلة الجذرية؟"),
      options: [
        l("Shared accounts break accountability", "الحسابات المشتركة تكسّر المساءلة"),
        l("The password is too short", "كلمة المرور قصيرة جدًا"),
        l("MFA is missing", "MFA مفقود"),
        l("The server is slow", "الخادم بطيء"),
      ],
      answer: 0,
      why: l("With a shared login, actions cannot be attributed to a single individual.", "مع الدخول المشترك لا يمكن نسب الإجراءات لفرد واحد."),
    },
    {
      scenario: l(
        "A company requires every user to change passwords every 30 days and to use one uppercase, one number and one symbol. Users respond with patterns like Summer2025! and Winter2026!.",
        "تشترط شركة على كل مستخدم تغيير كلمات المرور كل 30 يومًا واستخدام حرف كبير ورقم ورمز. ويستجيب المستخدمون بأنماط مثل Summer2025! وWinter2026!.",
      ),
      question: l("What is the issue with this policy?", "ما المشكلة في هذه السياسة؟"),
      options: [
        l("It pushes users toward predictable patterns", "تدفع المستخدمين لأنماط متوقعة"),
        l("It is exactly what NIST recommends", "هي بالضبط ما يوصي به NIST"),
        l("It removes the need for MFA", "تلغي الحاجة لـ MFA"),
        l("It is too lenient", "هي متساهلة جدًا"),
      ],
      answer: 0,
      why: l("Composition rules and forced rotation produce predictable patterns, which are weak.", "قواعد التركيب والتدوير الإجباري تنتج أنماطًا متوقعة، وهي ضعيفة."),
    },
  ],
  practicalChecks: [
    {
      task: l("Explain in one sentence why least privilege matters", "اشرح في جملة واحدة سبب أهمية أقل صلاحية"),
      expected: l("It limits the damage a single compromised account can do by granting only the access needed for the job.", "يحد من ضرر الحساب المخترق الواحد بمنح الوصول اللازم للعمل فقط."),
      hint: l("Think about what an attacker could do with a broadly privileged account.", "فكّر فيما يستطيع المهاجم فعله بحساب واسع الصلاحية."),
    },
    {
      task: l("State the three factor categories used in authentication", "اذكر فئات العوامل الثلاث المستخدمة في المصادقة"),
      expected: l("Something you know, something you have, and something you are.", "شيء تعرفه وشيء تملكه وشيء أنت عليه."),
    },
  ],
  homework: {
    title: l("Homework 13 — Upgrade your identity and review your access", "الواجب 13 — طوّر هويتك وراجع وصولك"),
    tasks: [
      l("Set up a password manager with unique long passwords and enable phishing-resistant MFA (or a passkey) on your e-mail and banking.", "أعدّ مدير كلمات مرور بكلمات مرور طويلة فريدة وفعّل MFA مقاومة للتصيّد (أو مفتاح مرور) على بريدك وبنكك."),
      l("List every shared account or shared document folder you use and who can access it.", "اذكر كل حساب مشترك أو مجلد مستندات مشترك تستخدمه ومن يستطيع الوصول إليه."),
      l("For each shared item, decide none, read-only or edit access for each person and remove surplus rights.", "لكل عنصر مشترك قرر لا شيء أو قراءة أو تعديل لكل شخص وأزِل الحقوق الزائدة."),
      l("Write a joiner/mover/leaver checklist (five items each) for a small business of ten people.", "اكتب قائمة انضمام/نقل/مغادرة (خمسة بنود لكل منها) لشركة صغيرة من عشرة أشخاص."),
    ],
    deliverable: l(
      "A table of account protection upgrades, an access review of shared items, and the three lifecycle checklists.",
      "جدول ترقيات حماية الحسابات ومراجعة وصول للعناصر المشتركة والقوائم الثلاث لدورة الحياة.",
    ),
    criteria: [
      l("Correct password-manager and MFA setup", "إعداد صحيح لمدير كلمات المرور وMFA"),
      l("Complete inventory of shared accounts and folders", "حصر كامل للحسابات والمجلدات المشتركة"),
      l("Correct least-privilege decisions for shared access", "قرارات صحيحة بأقل صلاحية للوصول المشترك"),
      l("Practical joiner/mover/leaver checklists", "قوائم عملية للانضمام والنقل والمغادرة"),
    ],
    challenge: l(
      "Optional challenge: research one real breach caused by weak access control or identity management and explain which principle (least privilege, separation of duties, lifecycle) would have prevented it.",
      "مهمة تحدٍ اختيارية: ابحث في اختراق حقيقي سببه ضعف التحكم بالوصول أو إدارة الهوية واشرح أي مبدأ (أقل صلاحية أو فصل المهام أو دورة الحياة) كان سيمنعته.",
    ),
  },
  refs: [
    { title: "Digital Identity Guidelines: Authentication (SP 800-63B)", org: "NIST", url: "https://pages.nist.gov/800-63-4/sp800-63b.html" },
    { title: "Authentication Cheat Sheet", org: "OWASP", url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html" },
    { title: "10 Steps: Identity and access management", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/10-steps/identity-and-access-management" },
    { title: "A01:2021 Broken Access Control", org: "OWASP", url: "https://owasp.org/Top10/A01_2021-Broken_Access_Control/" },
    { title: "Passkeys overview", org: "FIDO Alliance", url: "https://fidoalliance.org/passkeys/" },
  ],
  terms: [
    { term: l("Identity", "الهوية"), def: l("The claim of who a user or account is.", "ادعاء من هو المستخدم أو الحساب.") },
    { term: l("Authentication", "المصادقة"), def: l("Proving that a claimed identity is genuine.", "إثبات أن الهوية المدّعاة حقيقية.") },
    { term: l("Authorisation", "التفويض"), def: l("Deciding what a proven identity is permitted to do.", "تقرير ما يُسمح للهوية المثبتة بفعله.") },
    { term: l("Accounting", "المحاسبة"), def: l("Logging what an identity did.", "تسجيل ما فعلته هوية.") },
    { term: l("AAA", "AAA"), def: l("Authentication, Authorisation and Accounting.", "المصادقة والتفويض والمحاسبة.") },
    { term: l("MFA", "المصادقة متعددة العوامل"), def: l("Using two or more different categories of authentication factors.", "استخدام فئتين أو أكثر مختلفتين من عوامل المصادقة.") },
    { term: l("Passkey", "مفتاح المرور"), def: l("A FIDO2 credential using a device-held private key instead of a password.", "اعتماد FIDO2 يستخدم مفتاحًا خاصًا على الجهاز بدل كلمة المرور.") },
    { term: l("TOTP", "كلمة مرور مؤقتة زمنيًا"), def: l("Time-based one-time password generated by an authenticator app.", "كلمة مرور لمرة واحدة تعتمد على الوقت يولدها تطبيق مصادقة.") },
    { term: l("SIM swapping", "تبديل الشريحة"), def: l("Fraudulently moving a victim's phone number to the attacker's SIM.", "نقل رقم هاتف الضحية احتياليًا إلى شريحة المهاجم.") },
    { term: l("Entropy", "الإنتروبيا"), def: l("A measure, in bits, of how unpredictable a secret is.", "مقياس بالبتات لمدى عدم قابلية السر للتوقع.") },
    { term: l("Credential stuffing", "حشو بيانات الدخول"), def: l("Automated login attempts using leaked username/password pairs.", "محاولات دخول آلية بأزواج مستخدم/كلمة مرور مسرّبة.") },
    { term: l("Access control", "التحكم بالوصول"), def: l("Enforcing who may perform which action on which resource.", "فرض من يجوز له تنفيذ أي إجراء على أي مورد.") },
    { term: l("DAC", "التحكم التقديري"), def: l("Access control where the resource owner decides access.", "تحكم بالوصول يقرر فيه مالك المورد الوصول.") },
    { term: l("MAC", "التحكم الإلزامي"), def: l("Access control decided by a central authority via labels.", "تحكم بالوصول تقرره سلطة مركزية عبر التصنيفات.") },
    { term: l("RBAC", "التحكم بالوصول بالأدوار"), def: l("Access control where permissions are assigned to roles.", "تحكم تُمنح فيه الصلاحيات للأدوار.") },
    { term: l("ABAC", "التحكم بالوصول بالسمات"), def: l("Access decisions based on attributes of user, resource and context.", "قرارات وصول مبنية على سمات المستخدم والمورد والسياق.") },
    { term: l("Least privilege", "أقل صلاحية"), def: l("Granting only the access needed for a task, for the time needed.", "منح الوصول اللازم للمهمة فقط وللمدة اللازمة.") },
    { term: l("Need-to-know", "الحاجة إلى المعرفة"), def: l("Limiting access to the information needed for the task.", "قصر الوصول على المعلومات اللازمة للمهمة.") },
    { term: l("Separation of duties", "فصل المهام"), def: l("Splitting critical tasks among people to prevent abuse.", "تقسيم المهام الحرجة بين أشخاص لمنع إساءة الاستخدام.") },
    { term: l("Default deny", "المنع افتراضيًا"), def: l("Refusing access unless it is explicitly granted.", "رفض الوصول ما لم يُمنح صراحة.") },
    { term: l("IAM", "إدارة الهوية والوصول"), def: l("The systems and processes that manage identities and their access.", "الأنظمة والعمليات التي تدير الهويات ووصولها.") },
    { term: l("SSO", "الدخول الموحد"), def: l("One authentication granting access to many applications.", "مصادقة واحدة تتيح الوصول لتطبيقات كثيرة.") },
    { term: l("Federation", "الاتحاد"), def: l("Extending trust between organisations for identity.", "مد الثقة بين المؤسسات في الهوية.") },
    { term: l("PAM", "إدارة الوصول الممتاز"), def: l("Controls and monitoring for administrator and other privileged accounts.", "ضوابط ومراقبة لحسابات المديرين والحسابات الممتازة الأخرى.") },
    { term: l("Privilege creep", "زحف الصلاحيات"), def: l("Gradual accumulation of unnecessary access rights over time.", "تراكم تدريجي لحقوق وصول غير ضرورية مع الزمن.") },
    { term: l("Orphaned account", "الحساب اليتيم"), def: l("An account of a departed user that was never disabled.", "حساب لموظف مغادر لم يُعطَّل.") },
    { term: l("Break-glass", "دخول الطوارئ"), def: l("Highly controlled emergency admin accounts used when normal access fails.", "حسابات إدارة طوارئ خاضعة لضبط صارم تُستخدم عند فشل الوصول العادي.") },
  ],
};
