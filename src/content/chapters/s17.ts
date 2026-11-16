import { l, type Session } from "../types";

export const s17: Session = {
  id: 17,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Digital Forensics Essentials: Evidence, Acquisition, Integrity and Reporting",
    "أساسيات التحقيق الجنائي الرقمي: الأدلة والاكتساب والسلامة والتقارير",
  ),
  summary: l(
    "How to collect, preserve and analyse digital evidence so that conclusions are reliable and admissible: the forensic discipline and its branches, evidence handling and hashing, the order of volatility, chain of custody, acquisition techniques, analysis, and reporting that stands up under scrutiny.",
    "كيفية جمع الأدلة الرقمية وحفظها وتحليلها لتكون الاستنتاجات موثوقة ومقبولة: المنهج الجنائي الرقمي وتخصصاته، والتعامل مع الأدلة والتجزئة، وترتيب التطاير، وسلسلة الحيازة، وتقنيات الاكتساب، والتحليل، والتقارير التي تصمد أمام الفحص.",
  ),
  overview: l(
    "Digital forensics is the careful, methodical collection and analysis of digital evidence so that what is concluded is reliable, reproducible, and, when needed, acceptable in court or a disciplinary hearing. It overlaps with incident response — forensics often happens during and after an incident — but forensics has its own discipline: work only on copies, prove integrity with hashes, document every action, and preserve the most fleeting evidence first. This session covers what digital forensics is and its main branches, the principles of evidence handling and cryptographic hashing, the order of volatility that governs what to collect first, chain of custody and documentation, acquisition and preservation techniques, analysis and reporting, and the ethics that keep investigations lawful and fair. The session closes with a lab where you use a SHA-256 hashing tool to verify evidence integrity and observe the avalanche effect.",
    "التحقيق الجنائي الرقمي هو الجمع والتحليل الدقيق المنضبط للأدلة الرقمية لتكون الاستنتاجات موثوقة وقابلة لإعادة الإنتاج ومقبولة عند الحاجة أمام المحكمة أو جلسة تأديبية. وهو يتقاطع مع الاستجابة للحوادث — فكثيرًا ما يحدث التحقيق أثناء الحادثة وبعدها — لكن له تخصصه: العمل على النسخ فقط، وإثبات السلامة بالتجزئة، وتوثيق كل إجراء، وحفظ الأدلة الأسرع زوالًا أولًا. وتغطي هذه الجلسة ماهية التحقيق الجنائي الرقمي وتخصصاته الرئيسية، ومبادئ التعامل مع الأدلة والتجزئة التشفيرية، وترتيب التطاير الذي يحكم ما يُجمع أولًا، وسلسلة الحيازة والتوثيق، وتقنيات الاكتساب والحفظ، والتحليل والتقارير، والأخلاقيات التي تحفظ التحقيقات قانونية وعادلة. وتنتهي الجلسة بمختبر تستخدم فيه أداة تجزئة SHA-256 للتحقق من سلامة الأدلة وملاحظة أثر الانهيار.",
  ),
  whyItMatters: l(
    "Digital evidence is easy to alter and easy to lose. A careless investigator who works on the original, powers off a machine before capturing memory, or fails to document handling can destroy the very evidence that matters — and any conclusion drawn from it becomes unreliable and inadmissible. Digital forensics provides the discipline that makes evidence trustworthy: bit-for-bit copies, cryptographic hashes that prove nothing changed, a documented chain of custody, and the right order of collection. Without it, organisations cannot prove what happened, cannot defend themselves legally, and cannot learn from incidents.",
    "الأدلة الرقمية سهلة التعديل وسهلة الفقد. فالمُحث الذي يعمل على الأصل أو يطفئ الجهاز قبل التقاط الذاكرة أو يفشل في توثيق التعامل يمكن أن يتلف نفس الأدلة المهمة — وأي استنتاج يُستخلص منها يصبح غير موثوق وغير مقبول. ويوفّر التحقيق الجنائي الرقمي الضبط الذي يجعل الأدلة موثوقة: نسخ بت ببت، وتجزئات تشفيرية تثبت عدم التغيير، وسلسلة حيازة موثقة، وترتيب جمع صحيح. وبدونه لا تستطيع المنظمات إثبات ما حدث ولا الدفاع عن نفسها قانونيًا ولا التعلم من الحوادث.",
  ),
  prerequisites: [
    l(
      "Session 15, Security Monitoring & SIEM: how logs and alerts generate the evidence forensics preserves and analyses.",
      "الجلسة 15، المراقبة الأمنية وSIEM: كيف تولّد السجلات والتنبيهات الأدلة التي يحفظها التحقيق الجنائي ويحللها.",
    ),
    l(
      "Session 16, Incident Response: how forensics fits inside the incident lifecycle and evidence preservation during containment.",
      "الجلسة 16، الاستجابة للحوادث: كيف يندمج التحقيق الجنائي في دورة الحوادث وكيف تُحفظ الأدلة أثناء الاحتواء.",
    ),
    l(
      "Session 9, Cryptography: how hash functions produce fixed-length fingerprints used to verify integrity.",
      "الجلسة 9، التشفير: كيف تُنتج دوال التجزئة بصمات ثابتة الطول تُستخدم للتحقق من السلامة.",
    ),
    l(
      "A legal and ethical mindset: collect evidence only from systems you are authorised to investigate, and preserve it exactly as found.",
      "عقلية قانونية وأخلاقية: اجمع الأدلة فقط من الأنظمة التي لديك إذن بالتحقيق فيها، وحافظ عليها كما وُجدت تمامًا.",
    ),
  ],
  objectives: [
    l(
      "Define digital forensics and distinguish it from incident response.",
      "تعريف التحقيق الجنائي الرقمي والتمييز بينه وبين الاستجابة للحوادث.",
    ),
    l(
      "Describe the main branches of digital forensics and the evidence each handles.",
      "وصف التخصصات الرئيسية للتحقيق الجنائي الرقمي والأدلة التي تتعامل معها كل منها.",
    ),
    l(
      "Explain evidence handling: forensic imaging, hashing and working only on copies.",
      "شرح التعامل مع الأدلة: الصور الجنائية والتجزئة والعمل على النسخ فقط.",
    ),
    l(
      "Apply the order of volatility to decide what evidence to collect first.",
      "تطبيق ترتيب التطاير لتقرير أي الأدلة تُجمع أولًا.",
    ),
    l(
      "Maintain a chain of custody and document every action for admissibility.",
      "الحفاظ على سلسلة الحيازة وتوثيق كل إجراء لضمان القبول.",
    ),
    l(
      "Verify evidence integrity with a hash and explain the avalanche effect.",
      "التحقق من سلامة الأدلة بالتجزئة وشرح أثر الانهيار.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("What digital forensics is and why it matters", "ما التحقيق الجنائي الرقمي ولماذا يهم"), minutes: 12 },
    { label: l("The branches of digital forensics", "تخصصات التحقيق الجنائي الرقمي"), minutes: 12 },
    { label: l("Evidence handling and hashing", "التعامل مع الأدلة والتجزئة"), minutes: 13 },
    { label: l("Order of volatility and acquisition", "ترتيب التطاير والاكتساب"), minutes: 12 },
    { label: l("Chain of custody and documentation", "سلسلة الحيازة والتوثيق"), minutes: 12 },
    { label: l("Analysis, reporting and ethics", "التحليل والتقارير والأخلاقيات"), minutes: 12 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 12 },
  ],
  introduction: l(
    "Digital forensics is the careful, methodical collection and analysis of digital evidence so that what is concluded is reliable, reproducible, and, when needed, acceptable in court. It overlaps with incident response but has its own discipline: work only on copies, prove integrity with hashes, document every action, and preserve the most fleeting evidence first. This session covers the forensic discipline and its branches, evidence handling and hashing, the order of volatility, chain of custody, acquisition techniques, analysis, reporting, and ethics. The session closes with a lab where you verify evidence integrity with a SHA-256 tool and observe the avalanche effect.",
    "التحقيق الجنائي الرقمي هو الجمع والتحليل الدقيق المنضبط للأدلة الرقمية لتكون الاستنتاجات موثوقة وقابلة لإعادة الإنتاج ومقبولة عند الحاجة أمام المحكمة. وهو يتقاطع مع الاستجابة للحوادث لكن له تخصصه: العمل على النسخ فقط، وإثبات السلامة بالتجزئة، وتوثيق كل إجراء، وحفظ الأدلة الأسرع زوالًا أولًا. وتغطي هذه الجلسة التخصص الجنائي وتخصصاته، والتعامل مع الأدلة والتجزئة، وترتيب التطاير، وسلسلة الحيازة، وتقنيات الاكتساب، والتحليل والتقارير والأخلاقيات. وتنتهي الجلسة بمختبر تتحقق فيه من سلامة الأدلة بأداة SHA-256 وتلاحظ فيه أثر الانهيار.",
  ),
  sections: [
    {
      h: l("1. What digital forensics is and why it matters", "1. ما التحقيق الجنائي الرقمي ولماذا يهم"),
      p: [
        l(
          "Digital forensics is the process of collecting, preserving, examining and presenting digital evidence in a way that is reliable, repeatable and, where required, legally admissible. Its goal is to establish what happened on a device or network, who was responsible, when, and how — and to do so in a manner that others (a court, a regulator, management) can trust and verify. Forensics is not guesswork or intuition; it is a method with rules that protect the integrity of the evidence and the validity of the conclusions.",
          "التحقيق الجنائي الرقمي هو عملية جمع الأدلة الرقمية وحفظها وفحصها وتقديمها بطريقة موثوقة وقابلة للتكرار ومقبولة قانونيًا عند الحاجة. وهدفها تحديد ما حدث على جهاز أو شبكة، ومن المسؤول، ومتى، وكيف — وبطريقة يمكن للآخرين (المحكمة أو الجهة التنظيمية أو الإدارة) أن يثقوا بها ويتحققوا منها. والتحقيق الجنائي ليس تخمينًا أو حدسًا؛ بل هو أسلوب له قواعد تحمي سلامة الأدلة وصحة الاستنتاجات.",
        ),
        l(
          "Forensics overlaps with incident response but is distinct. Incident response asks 'what do we do now to stop the damage and recover?' — it is action-oriented and time-critical. Forensics asks 'what exactly happened, and can we prove it?' — it is evidence-oriented and concerned with reliability and admissibility. The two work together: forensics preserves and analyses the evidence that the incident response must not destroy, and incident response often triggers and constrains forensic activity. A good investigator knows both the urgency of response and the discipline of evidence.",
          "يتقاطع التحقيق الجنائي مع الاستجابة للحوادث لكنه متميز. فالاستجابة تسأل «ماذا نفعل الآن لإيقاف الضرر والتعافي؟» — وهي أعمال موجهة وحساسة للزمن. أما التحقيق الجنائي فيسأل «ماذا حدث بالضبط وهل يمكننا إثباته؟» — وهو موجه للأدلة ومهتم بالموثوقية والقبول. ويعمل الاثنان معًا: يحفظ التحقيق الجنائي الأدلة ويحللها التي يجب على الاستجابة عدم إتلافها، وكثيرًا ما تفعّل الاستجابة النشاط الجنائي وتقيده. والمحقق الجيد يعرف إلحاح الاستجابة وضبط الأدلة معًا.",
        ),
      ],
      callout: { kind: "key", text: l("Forensics answers 'what happened and can we prove it?' — reliably and admissibly — while incident response answers 'what do we do now?'. The discipline of evidence must not be sacrificed to the urgency of response.", "يجيب التحقيق الجنائي «ماذا حدث وهل يمكننا إثباته؟» — بموثوقية وقبول — بينما تجيب الاستجابة للحوادث «ماذا نفعل الآن؟». ولا يجب التضحية بضبط الأدلة على حساب إلحاح الاستجابة.") },
    },
    {
      h: l("2. The branches of digital forensics", "2. تخصصات التحقيق الجنائي الرقمي"),
      p: [
        l(
          "Digital forensics divides into specialised branches, each dealing with a particular kind of evidence and device. The table summarises the main branches, the evidence they handle, and typical questions they answer. Together they cover the devices and media an investigator may encounter, from a seized laptop to a network capture to a cloud account.",
          "يتقسم التحقيق الجنائي الرقمي إلى تخصصات، لكل منها نوع محدد من الأدلة والجهاز. ويوجز الجدول التخصصات الرئيسية والأدلة التي تتعامل معها والأسئلة النموذجية التي تجيب عنها. وتغطي معًا الأجهزة والوسائط التي قد يواجهها المحقق، من حاسوب محمول مصادر إلى التقاط شبكة إلى حساب سحابي.",
        ),
      ],
      table: {
        head: [l("Branch", "التخصص"), l("Evidence handled", "الأدلة التي تتعامل معها"), l("Typical questions", "أسئلة نموذجية")],
        rows: [
          [l("Disk / storage forensics", "التحقيق في الأقراص / التخزين"), l("Hard drives, SSDs, file systems", "الأقراص الصلبة وSSD وأنظمة الملفات"), l("What files existed, were created, edited or deleted?", "ما الملفات التي كانت موجودة أو أُنشئت أو عُدّلت أو حُذفت؟")],
          [l("Memory (RAM) forensics", "التحقيق في الذاكرة"), l("Running processes, connections, keys in RAM", "العمليات الجارية والاتصالات والمفاتيح في الذاكرة"), l("What was running when the device was seized?", "ما الذي كان يعمل عند مصادرة الجهاز؟")],
          [l("Network forensics", "التحقيق الشبكـي"), l("Packet captures, logs, traffic", "التقاط الحزم والسجلات والحركة"), l("What communications occurred and with whom?", "ما الاتصالات التي حدثت ومع من؟")],
          [l("Mobile forensics", "التحقيق في الأجهزة المحمولة"), l("Phone and tablet data, app data", "بيانات الهاتف واللوحي وتطبيقاته"), l("What is on the device and who used it?", "ما الموجود على الجهاز ومن استخدمه؟")],
          [l("Cloud forensics", "التحقيق السحابي"), l("Cloud logs, API records, account data", "سجلات السحابة وسجلات API وبيانات الحساب"), l("What happened in the cloud account and when?", "ماذا حدث في الحساب السحابي ومتى؟")],
          [l("Malware forensics", "التحقيق في البرمجيات الخبيثة"), l("Malicious code, behaviour analysis", "الشيفرة الخبيثة وتحليل السلوك"), l("What does the malware do and how did it spread?", "ماذا تفعل البرمجية الخبيثة وكيف انتشرت؟")],
        ],
      },
      callout: { kind: "key", text: l("Each branch has its own tools and techniques, but they share one rule: preserve the evidence exactly as found, and prove with hashes that it never changed.", "لكل تخصص أدواته وتقنياته، لكنها تشترك في قاعدة واحدة: احفظ الأدلة كما وُجدت تمامًا، وأثبت بالتجزئة أنها لم تتغير.") },
    },
    {
      h: l("3. Evidence handling and hashing", "3. التعامل مع الأدلة والتجزئة"),
      p: [
        l(
          "The foundation of every forensic investigation is the rule: never work on the original evidence. Create a forensic image — a bit-for-bit copy of the storage — and perform all analysis on the copy. This protects the original from being altered by the investigation itself. To prove the copy is faithful and that neither the original nor the copy was tampered with, compute a cryptographic hash (such as SHA-256) of the original and of the copy; if the two hashes match, the copies are identical and the evidence is provably unchanged. Record these hashes and use them to verify integrity at every later stage.",
          "أساس كل تحقيق جنائي هو القاعدة: لا تعمل أبدًا على الدليل الأصلي. فأنشئ صورة جنائية — نسخة بت ببت من التخزين — وأجرِ كل التحليل على النسخة. ويحمي هذا الأصل من التعديل بواسطة التحقيق نفسه. ولتثبت أن النسخة أمينة وأن الأصل والنسخة لم يُعبث بهما، احسب تجزئة تشفيرية (مثل SHA-256) للأصل والنسخة؛ فإذا تطابقت التجزئتان فهما متطابقان والأدلة ثابتة عدم التغيير. وسجّل هذه التجزئات واستخدمها للتحقق من السلامة في كل مرحلة لاحقًا.",
        ),
        l(
          "Hashing is the backbone of integrity. A hash function turns any input into a fixed-length fingerprint: tiny changes in the input produce a completely different fingerprint. Two files with the same SHA-256 are, with overwhelming probability, identical; if the hash of a preserved image later differs from the hash recorded at acquisition, the evidence has been altered and its reliability is compromised. Hash at acquisition, hash again before analysis, and hash when presenting — and compare against the recorded value each time.",
          "التجزئة هي عماد السلامة. فتُحوّل دالة التجزئة أي مدخل إلى بصمة ثابتة الطول: فالتغيرات الطفيفة في المدخل تنتج بصمة مختلفة تمامًا. وملفان لهما نفس SHA-256 هما، باحتمال سائد، متطابقان؛ فإذا اختلفت تجزئة الصورة المحفوظة لاحقًا عن التجزئة المسجلة عند الاكتساب فقد عُدّلت الأدلة وتضررت موثوقيتها. فَجِّر عند الاكتساب، وجرّه مرة أخرى قبل التحليل، وجرّه عند التقديم — وقيّس مقابل القيمة المسجلة كل مرة.",
        ),
      ],
      callout: { kind: "key", text: l("Work only on copies, prove identity with matching hashes, and re-verify integrity at every stage. A single mismatch means the evidence has been altered and is no longer trustworthy.", "اعمل على النسخ فقط، وأثبت التطابق بالتجزئات المتطابقة، وأعد التحقق من السلامة في كل مرحلة. فعدم التطابق الواحد يعني أن الأدلة عُدّلت ولم تعد موثوقة.") },
    },
    {
      h: l("4. Order of volatility and acquisition", "4. ترتيب التطاير والاكتساب"),
      p: [
        l(
          "Collect evidence in order of volatility, most fleeting first. Data that disappears quickly — CPU registers and cache, then memory (RAM: running processes, network connections, encryption keys) — must be captured before it is lost, because powering off a device destroys it. Then capture network state, running processes, disk images, remote logs and backups, and finally physical configuration and archival media. This order is why you usually isolate a suspect machine from the network but do not power it off before memory is captured: isolation stops remote changes while preserving the volatile data.",
          "اجمع الأدلة بحسب ترتيب التطاير، الأسرع زوالًا أولًا. فالبياناتا التي تختفي بسرعة — سجلات المعالج والذاكرة المخبأة، ثم الذاكرة (RAM: العمليات الجارية والاتصالات الشبكية ومفاتيح التشفير) — يجب التقاطها قبل فقدها، لأن إطفاء الجهاز يتلفها. ثم التقط حالة الشبكة والعمليات الجارية وصور الأقراص والسجلات البعيدة والنسخ الاحتياطية، وأخيرًا الإعداد المادي ووسائط الأرشفة. وهذا الترتيب هو سبب أنك تعزل عادة الجهاز المشتبه به عن الشبكة لكن لا تطفئه قبل التقاط الذاكرة: فالعزل يوقف التغييرات البعيدة مع حفظ البيانات المتطايرة.",
        ),
        l(
          "Acquisition must be non-destructive. Use write-blocking where possible so that reading the evidence cannot alter it, work on a copy rather than the original, and capture the full disk rather than selected files, because context matters and partial collections miss deletions, hidden data and metadata. Document exactly what was acquired, from where, by whom, and when, and record the hashes immediately. A careful acquisition at the start saves far more time and credibility than any clever analysis performed on poorly preserved evidence.",
          "يجب أن يكون الاكتساب غير مُتلف. فاستخدم حجب الكتابة حيثما أمكن كي لا يغيّر قراءة الأدلة، واعمل على نسخة لا على الأصل، والتقط القرص الكامل لا ملفات مختارة، لأن السياق يهم والجمع الجزئي يفوّت الحذف والبيانات المخفية والبيانات التعريفية. ووثّق بالضبط ما اكتسبته ومن أي مكان وبمن ومتى، وسجّل التجزئات فورًا. فالاكتساب الدقيق في البداية يوفر وقتًا ومصداقية أكثر بكثير من أي تحليل ذكي يُجرى على أدلة لم تُحفظ جيدًا.",
        ),
      ],
      callout: { kind: "key", text: l("Most fleeting first: memory before disk, disk before remote logs. Capture what vanishes at power-off before you isolate and never destroy volatile evidence by switching off too early.", "الأسرع زوالًا أولًا: الذاكرة قبل القرص، والقرص قبل السجلات البعيدة. فالتقط ما يختفي عند الإطفاء قبل العزل ولا تتلف الأدلة المتطايرة بالإطفاء المبكر أبدًا.") },
    },
    {
      h: l("5. Chain of custody and documentation", "5. سلسلة الحيازة والتوثيق"),
      p: [
        l(
          "Chain of custody is the documented, unbroken record of who handled each piece of evidence, when, where, and why — from the moment it was seized to the moment it is presented or returned. It proves the evidence was not tampered with, substituted, or mishandled, and it is what makes the evidence admissible and the conclusions credible. Every transfer of evidence must be logged: who took it, who gave it, the date and time, the purpose, and any handling performed. A broken or undocumented chain is the fastest way to have evidence rejected.",
          "سلسلة الحيازة هي السجل الموثق غير المنقطع لمن تعامل مع كل دليل ومتى وأي مكان ولماذا — من لحظة ضبطه إلى لحظة تقديمه أو إعادته. وهي تثبت أن الدليل لم يُعبث به أو يُستبدل أو يُساء التعامل معه، وهي ما يجعل الدليل مقبولًا والاستنتاجات موثوقة. ويجب توثيق كل انتقال للأدلة: من أخذها ومن أعطاها والتاريخ والوقت والغرض وأي تعامل أُجري. فسلسلة الحيازة المنقطعة أو غير الموثقة هي أسرع طريقة لرفض الأدلة.",
        ),
        l(
          "Documentation is the investigator's memory. Keep an investigation log of every action taken, every tool used, every hash computed, and every conclusion reached, with timestamps. The log must be detailed enough that another investigator could repeat the work and reach the same result — that reproducibility is what separates science from opinion. Write notes as you go, not from memory afterwards, and never alter or overwrite original notes; if a correction is needed, add a dated entry explaining the change.",
          "التوثيق هو ذاكرة المحقق. فأبقِ سجل تحقيق بكل إجراء اتُّخذ وكل أداة استُخدمت وكل تجزئة حُسبت وكل استنتاج بُلوغ، مع طوابع زمنية. ويجب أن يكون السجل مفصلًا بما يكفي ليتمكن محقق آخر من تكرار العمل والوصول إلى نفس النتيجة — فهذه القابلية لإعادة الإنتاج هي ما يفرق العلم عن الرأي. فاكتب الملاحظات أثناء السير لا من الذاكرة بعد، ولا تُعدّل الملاحظات الأصلية أو تتجاوزها أبدًا؛ وإذا لزم تصحيح فأضف مدخلًا مؤرخًا يشرح التغيير.",
        ),
      ],
      callout: { kind: "key", text: l("If it is not documented, it did not happen. A complete chain of custody and a detailed, reproducible log are what make evidence trustworthy and admissible.", "ما لم يُوثّق فإنه لم يحدث. فسلسلة الحيازة الكاملة والسجل التفصيلي القابل لإعادة الإنتاج هما ما يجعل الأدلة موثوقة ومقبولة.") },
    },
    {
      h: l("6. Analysis and reporting", "6. التحليل والتقارير"),
      p: [
        l(
          "Analysis happens on the preserved copy, following the plan and the questions being asked. The analyst examines the evidence to reconstruct events: which files were created, modified or deleted, what processes ran, what connections were made, and when. Analysis must be methodical and hypothesis-driven — form a question, examine the relevant evidence, and let the evidence support or refute the hypothesis — rather than narrative-driven or assumption-driven. Every step is recorded so the analysis can be reviewed and repeated.",
          "يحدث التحليل على النسخة المحفوظة، اتباعًا للخطة والأسئلة المطروحة. ويفحص المحقق الأدلة لإعادة بناء الأحداث: أي الملفات أُنشئت أو عُدّلت أو حُذفت، وأي العمليات جرت، وأي الاتصالات قُطعت، ومتى. ويجب أن يكون التحليل منضبطًا ومدفوعًا بالفرضيات — ضع سؤالًا وافحص الأدلة ذات الصلة ودَعْ الأدلة تدعم الفرضية أو تدحضها — لا مدفوعًا بالسرد أو الافتراض. ويُسجّل كل خطوة لكي يُمكن مراجعة التحليل وتكراره.",
        ),
        l(
          "Reporting turns analysis into a defensible account. A forensic report states the scope and authority, the evidence examined and its integrity (hashes), the methodology used, the findings, and the conclusions — clearly separating what is established by evidence from what is inference or opinion. The report is written for a specific audience and purpose, uses plain and precise language, avoids speculation, and is supported by the documentation and chain of custody. A good report lets a non-technical reader understand what was found and why it is trustworthy.",
          "يحوّل التقرير التحليل إلى سرد قابل للدفاع. فيذكر تقرير التحقيق الجنائي النطاق والسلطة والأدلة التي فُحصت وسلامتها (التجزئات) والمنهجية المستخدمة والنتائج والاستنتاجات — مع الفصل الواضح بين ما تثبته الأدلة وما هو استدلال أو رأي. ويُكتب التقرير لجمهور وهدف محددين، ويستخدم لغة واضحة دقيقة، ويتجنب التخمين، ويستند إلى التوثيق وسلسلة الحيازة. ويتيح التقرير الجيد لغير المتخصص فهم ما وجد ولماذا هو موثوق.",
        ),
      ],
      callout: { kind: "key", text: l("Report what the evidence establishes, separate it from inference, and support every claim with the documentation and hashes behind it.", "أبلغ بما تثبته الأدلة، وافصله عن الاستدلال، ودَعْ كل ادعاء مستندًا إلى التوثيق والتجزئات التي تدعمه.") },
    },
    {
      h: l("7. Ethics and the law", "7. الأخلاقيات والقانون"),
      p: [
        l(
          "Forensics is bound by law and ethics. Collect and examine evidence only from systems and devices you are authorised to investigate — seizure and examination without authority can itself be unlawful and can taint the evidence. Respect privacy and data-protection laws: examine only what the investigation requires, handle personal data as sensitive, and disclose findings only to those with a need to know. Maintain objectivity: do not let an expectation of guilt or innocence steer the analysis, and report findings honestly even when they are unwelcome.",
          "التحقيق الجنائي مقيّد بالقانون والأخلاقيات. فاجمع وافحص الأدلة فقط من الأنظمة والأجهزة التي لديك إذن بالتحقيق فيها — فضبط الأدلة وفحصها دون تصريح قد يكون غير قانوني بحد ذاته وينلّ الأدلة. واحترم قوانين الخصوصية وحماية البيانات: فافحص فقط ما تتطلبه التحقيق، وتعامل مع البيانات الشخصية كبيانات حساسة، وأفصح عن النتائج فقط لمن هم بحاجة لمعرفة. وحافظ على الموضوعية: فلا تدع توقّع الذنب أو البراءة يوجّه التحليل، وأبلغ عن النتائج بصدق حتى لو كانت غير مرغوب فيها.",
        ),
        l(
          "Ethics protects both the investigation and the investigator. Do not alter, delete or 'clean up' evidence before the investigation is complete; do not run tools that modify the evidence; do not access data beyond the scope of the investigation; and do not discuss findings carelessly. A forensic investigator's credibility is their most valuable asset — a single breach of ethics or procedure can discredit an otherwise sound investigation and end a career. Integrity is not a constraint on forensics; it is what makes forensics possible.",
          "تحمي الأخلاقيات التحقيق والمحقق معًا. فلا تُعدّل أو تحذف أو «تنظّف» الأدلة قبل اكتمال التحقيق؛ ولا تشغّل أدوات تغيّر الأدلة؛ ولا تصل إلى بيانات تتجاوز نطاق التحقيق؛ ولا تناقش النتائج بإهمال. ومصداقية المحقق الجنائي هي أثمن ما يملك — فخرق واحد للأخلاقيات أو الإجراءات يمكن أن يسخط تحقيقًا سليمًا بذاته وينهي مسيرة. وليست الأخلاقيات قيدًا على التحقيق الجنائي؛ بل هي ما يجعله ممكنًا.",
        ),
      ],
      callout: { kind: "key", text: l("Authorised, objective, privacy-respecting and honest: ethics is not a constraint on forensics but the condition that makes its conclusions credible and lawful.", "تصريح وموضوعية واحترام للخصوصية وصدق: فالأخلاقيات ليست قيدًا على التحقيق الجنائي بل الشرط الذي يجعل استنتاجاته موثوقة وقانونية.") },
    },
    {
      h: l("8. Bringing it together: forensics in the lifecycle", "8. جمع الأفكار: التحقيق الجنائي في الدورة"),
      p: [
        l(
          "Forensics fits into the wider incident and investigation lifecycle. During an incident, forensics preserves the evidence that containment and recovery must not destroy — capture volatile data, image disks, record hashes, and start the chain of custody. After the incident, forensics analyses what was preserved to establish exactly what happened, supports the lessons-learned review with facts, and produces a report that can be relied upon by management, legal and, if necessary, a court. The discipline of forensics — copies, hashes, order of volatility, chain of custody, documentation, ethics — is what turns raw devices and logs into trustworthy, defensible answers. Practising that discipline, as you will in the lab with hashing, is the foundation of reliable digital forensics.",
          "يندمج التحقيق الجنائي في دورة الحوادث والتحقيق الأوسع. فأثناء الحادثة يحفظ التحقيق الجنائي الأدلة التي يجب ألا يدمرها الاحتواء والتعافي — يلتقط البيانات المتطايرة ويصور الأقراص ويسجّل التجزئات ويبدأ سلسلة الحيازة. وبعد الحادثة يحلل التحقيق الجنائي ما حُفظ ليحدد بالضبط ما حدث، ويدعم مراجعة الدروس المستفادة بحقائق، وينتج تقريرًا يمكن للإدارة والجهة القانونية، وعند الحاجة للمحكمة، الاعتماد عليه. وضبط التحقيق الجنائي — النسخ والتجزئات وترتيب التطاير وسلسلة الحيازة والتوثيق والأخلاقيات — هو ما يحوّل الأجهزة والسجلات الخام إلى إجابات موثوقة قابلة للدفاع. ومجربة هذا الضبط، كما ستفعل في المختبر بالتجزئة، هو أساس التحقيق الجنائي الرقمي الموثوق.",
        ),
      ],
    },
  ],
  diagram: {
    kind: "flow",
    title: l("The forensic process", "العملية الجنائية"),
    caption: l("Each stage protects the next: acquire non-destructively, verify with hashes, document the chain, analyse on the copy, and report only what the evidence supports.", "تحمي كل مرحلة التالية: اكتساب غير متلف، وتحقق بالتجزئات، ووثّق السلسلة، وحلل على النسخة، وأبلغ فقط بما تدعمه الأدلة."),
    nodes: [
      { label: l("Acquire", "الاكتساب"), desc: l("Capture volatile then persistent evidence", "التقاط الأدلة المتطايرة ثم الثابتة") },
      { label: l("Verify", "التحقق"), desc: l("Hash and record integrity", "التجزئة وتسجيل السلامة") },
      { label: l("Document", "التوثيق"), desc: l("Chain of custody and log", "سلسلة الحيازة والسجل") },
      { label: l("Analyse", "التحليل"), desc: l("Reconstruct events on the copy", "إعادة بناء الأحداث على النسخة") },
      { label: l("Report", "التقرير"), desc: l("Findings supported by evidence", "نتائج مستدمة بالأدلة") },
    ],
  },
  examples: [
    l(
      "An investigator seizes a laptop suspected in a data theft. Instead of browsing the original drive, she creates a bit-for-bit image, records its SHA-256 hash, and analyses the copy. At trial, the matching hash proves the analysed image is identical to the evidence as seized, and the documented chain of custody shows it was never unsupervised or altered.",
      "يضبط محقق حاسوبًا محمولًا مشتبهًا به في سرقة بيانات. وبدلًا من تصفح القرص الأصلي، تُنشئ صورة بت ببت وتسجّل تجزئتها SHA-256 وتحلل النسخة. وعند المحاكمة تثبت التجزئة المطابقة أن الصورة المُحللة متطابقة مع الأدلة كما سُيطت، وتُظهر سلسلة الحيازة الموثقة أنها لم تُترك دون مراقبة أو تُعدّل.",
    ),
    l(
      "Powering off a suspect server before capturing memory destroys the running processes, open connections and encryption keys that could reveal what the attacker did. A forensic-aware responder isolates the server from the network (stopping remote changes) but keeps it powered on long enough to capture the volatile evidence first.",
      "إطفاء خادم مشتبه به قبل التقاط الذاكرة يتلف العمليات الجارية والاتصالات المفتوحة ومفاتيح التشفير التي قد تكشف ما فعله المهاجم. فالمستجيب الواعي جنائيًا يعزل الخادم عن الشبكة (ويوقف التغييرات البعيدة) لكن يُبقيه مشغّلًا بما يكفي لالتقاط الأدلة المتطايرة أولًا.",
    ),
    l(
      "A hash mismatch discovered before analysis saves an investigation from an embarrassing collapse: the preserved image's hash no longer matches the value recorded at acquisition, signalling tampering. Rather than reporting a compromised conclusion, the investigator documents the discrepancy, re-acquires and re-hashes, and preserves the chain of custody — protecting the credibility of the whole investigation.",
      "عدم تطابق في التجزئة يُكتشف قبل التحليل يُنقذ تحقيقًا من انهيار محرج: فلم تعد تجزئة الصورة المحفوظة تطابق القيمة المسجلة عند الاكتساب، مشيرًا إلى عبث. وبدلًا من الإبلاغ عن استنتاج مخترق، يوثق المحقق التفاوت ويعيد الاكتساب والتجزئة ويحفظ سلسلة الحيازة — محميًا مصداقية التحقيق كله.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company is suing a former employee for data theft. The forensic report is thrown out because the chain of custody is incomplete — evidence was left unattended on a desk overnight and no record shows who accessed it. The methodology may have been sound, but the missing documentation made the evidence inadmissible and the case weak.",
      "تقاضي شركة موظفًا سابقًا بسرقة بيانات. ويُرفض تقرير التحقيق الجنائي لأن سلسلة الحيازة ناقصة — تُرك الدليل دون مراقبة على مكتب طوال الليل ولا يوجد سجل يظهر من وصل إليه. وقد يكون المنهج صحيحًا، لكن التوثيق المفقود جعل الدليل غير مقبول والقضية ضعيفة.",
    ),
    l(
      "In a ransomware case, a forensic team captures memory from infected servers before they are powered off, isolating them from the network first. The captured processes and connections reveal the attacker's entry point and lateral movement, giving the incident response team the facts it needs to close the vulnerability and the report the evidence to support its findings.",
      "في قضية فدية، يلتقط فريق تحقيق جنائي الذاكرة من الخوادم المصابة قبل إطفائها، بعد عزلها عن الشبكة أولًا. وتكشف العمليات والاتصالات الملتقطة نقطة دخول المهاجم والحركة الجانبية، معطيةً فريق الاستجابة الحقائق التي يحتاجها لإغلاق الثغرة والتقرير الذي يدعم نتائجه بالأدلة.",
    ),
    l(
      "An investigator is asked to examine a device beyond the scope of the authorised investigation, which happens to contain personal data unrelated to the case. Ethically and legally, they decline to examine the unrelated data, document the scope of what was examined, and escalate the request — protecting privacy and the investigation's integrity.",
      "يُطلب من محقق فحص جهاز يتجاوز نطاق التحقيق المصرح به، والذي يحتوي على بيانات شخصية لا صلة لها بالقضية. فمن الناحية الأخلاقية والقانونية يرفض فحص البيانات غير ذات الصلة ويوثّق نطاق ما فُحص ويُصعّد الطلب — محميًا الخصوصية وسلامة التحقيق.",
    ),
  ],
  instructorDemo: l(
    "Demonstrate the lab's hashing tool live: enter two almost identical messages, show that their SHA-256 hashes are completely different (the avalanche effect), then paste a published hash and show the integrity check confirming a match when the content is intact and a mismatch when it is altered. Emphasise that this same check, done at acquisition and again at analysis, is how forensics proves evidence was not tampered with.",
    "اعرض أداة التجزئة في المختبر مباشرةً: أدخل رسالتين متطابقتين تقريبًا وأظهر أن تجزئتيهما SHA-256 مختلفتان تمامًا (أثر الانهيار)، ثم الصق تجزئة منشورة وأظهر فحص السلامة الذي يؤكد المطابقة عندما يكون المحتوى سليمًا وعدم التطابق عندما يُعدّل. وركّز على أن هذا الفحص نفسه، عند الاكتساب ثم مرة أخرى عند التحليل، هو كيف يثبت التحقيق الجنائي أن الأدلة لم تُعبث بها.",
  ),
  exercises: [
    {
      title: l("Verify evidence integrity with a hash", "التحقق من سلامة الأدلة بالتجزئة"),
      instructions: l(
        "In the lab, enter a message (the 'evidence'), note its SHA-256 hash, then paste that same hash into the integrity check to confirm it matches. Then change a single character of the message and observe the hash change and the mismatch.",
        "في المختبر، أدخل رسالة («الدليل») وسجّل تجزئتها SHA-256، ثم الصق نفس التجزئة في فحص السلامة للتأكد من تطابقها. ثم غيّر حرفًا واحدًا من الرسالة ولاحظ تغير التجزئة وعدم التطابق.",
      ),
      expected: l("The integrity check confirms a match for the unchanged message and reports a mismatch after a single-character change, demonstrating that any alteration is detectable.", "يؤكد فحص السلامة المطابقة للرسالة غير المعدّلة ويُبلغ عن عدم تطابق بعد تغيير حرف واحد، مظهرًا أن أي تعديل قابل للاكتشاف."),
    },
    {
      title: l("Order the evidence collection", "ترتيب جمع الأدلة"),
      instructions: l(
        "List the evidence in order of volatility — CPU registers, memory (RAM), network state, running processes, disk, remote logs, archival media — and justify why the most fleeting items are captured first and why a suspect machine is isolated but not powered off immediately.",
        "رتّب الأدلة بحسب ترتيب التطاير — سجلات المعالج والذاكرة (RAM) وحالة الشبكة والعمليات الجارية والقرص والسجلات البعيدة ووسائط الأرشفة — وبرّر سبب التقاط الأكثر زوالًا أولًا وسبب عزل الجهاز المشتبه به دون إطفائه فورًا.",
      ),
      expected: l("Memory and other volatile data are captured before power-off, and the suspect machine is isolated to stop remote changes while volatile evidence is preserved.", "تُلتقط الذاكرة وغيرها من البيانات المتطايرة قبل الإطفاء، ويُعزل الجهاز المشتبه به لإيقاف التغييرات البعيدة مع حفظ الأدلة المتطايرة."),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can define digital forensics and distinguish it from incident response, name its main branches, apply evidence-handling rules (copies and hashing), collect evidence in order of volatility, maintain a chain of custody, verify integrity with a hash, and explain the avalanche effect and the ethics that keep investigations lawful.",
    "بنهاية الجلسة يستطيع المتعلمون تعريف التحقيق الجنائي الرقمي والتمييز بينه وبين الاستجابة للحوادث، وتسمية تخصصاته الرئيسية، وتطبيق قواعد التعامل مع الأدلة (النسخ والتجزئة)، وجمع الأدلة بحسب ترتيب التطاير، والحفاظ على سلسلة الحيازة، والتحقق من السلامة بالتجزئة، وشرح أثر الانهيار والأخلاقيات التي تحفظ التحقيقات قانونية.",
  ),
  commonMistakes: [
    l(
      "Working on the original evidence instead of a forensic image, risking alteration of the very evidence being investigated.",
      "العمل على الدليل الأصلي بدل الصورة الجنائية، معرضًا الأدلة الممتحنة للتعديل.",
    ),
    l(
      "Powering off a suspect device before capturing memory, destroying the volatile evidence that could reveal what happened.",
      "إطفاء الجهاز المشتبه به قبل التقاط الذاكرة، مما يتلف الأدلة المتطايرة التي قد تكشف ما حدث.",
    ),
    l(
      "Failing to record hashes at acquisition, so there is no way to prove later that the evidence was not altered.",
      "الإخفاق في تسجيل التجزئات عند الاكتساب، فلا يوجد وسيلة لإثبات لاحقًا أن الأدلة لم تُعدّل.",
    ),
    l(
      "Skipping chain-of-custody documentation, leaving evidence unattended or unaccounted for and making it inadmissible.",
      "تجاوز توثيق سلسلة الحيازة، فتُترك الأدلة دون مراقبة أو دون حساب وتصبح غير مقبولة.",
    ),
    l(
      "Examining data beyond the authorised scope or letting expectations of guilt steer the analysis, compromising objectivity.",
      "فحص بيانات تتجاوز النطاق المصرح به أو ترك توقعات الذنب توجه التحليل، بما يضر بالموضوعية.",
    ),
  ],
  bestPractices: [
    l(
      "Work only on forensic images, never on the original evidence, and compute and record hashes at every stage.",
      "اعمل على الصور الجنائية فقط، لا على الدليل الأصلي أبدًا، واحسب وسجّل التجزئات في كل مرحلة.",
    ),
    l(
      "Collect in order of volatility, most fleeting first, and capture memory before powering off a device.",
      "اجمع بحسب ترتيب التطاير، الأسرع زوالًا أولًا، والتقط الذاكرة قبل إطفاء الجهاز.",
    ),
    l(
      "Maintain an unbroken chain of custody and a detailed, reproducible investigation log for every action.",
      "حافظ على سلسلة حيازة غير منقطعة وسجل تحقيق تفصيلي قابل لإعادة الإنتاج لكل إجراء.",
    ),
    l(
      "Analyse methodically on the copy, separate evidence from inference, and report only what is supported.",
      "حلّل بضبط على النسخة، وافصل الأدلة عن الاستدلال، وأبلغ فقط بما هو مدعوم.",
    ),
    l(
      "Collect only what you are authorised to, respect privacy, and keep the analysis objective and honest.",
      "اجمع فقط ما لديك إذن به، واحترم الخصوصية، وحافظ على التحليل موضوعيًا وصادقًا.",
    ),
  ],
  keyTakeaways: [
    l("Digital forensics establishes what happened and can prove it, reliably and admissibly, through a disciplined method.", "يحدد التحقيق الجنائي الرقمي ما حدث ويمكنه إثباته، بموثوقية وقبول، عبر أسلوب منضبط."),
    l("Never work on the original: image it, hash it, and verify integrity at every stage.", "لا تعمل على الأصل أبدًا: صوّره وجرّه وتحقق من السلامة في كل مرحلة."),
    l("Collect in order of volatility — most fleeting first — and capture memory before power-off.", "اجمع بحسب ترتيب التطاير — الأسرع زوالًا أولًا — والتقط الذاكرة قبل الإطفاء."),
    l("An unbroken chain of custody and a reproducible log are what make evidence admissible and conclusions credible.", "سلسلة الحيازة غير المنقطعة والسجل القابل لإعادة الإنتاج هما ما يجعل الأدلة مقبولة والاستنتاجات موثوقة."),
    l("Ethics and law bound every investigation: authorised, objective, privacy-respecting and honest.", "تقيد الأخلاقيات والقانون كل تحقيق: تصريح وموضوعية واحترام للخصوصية وصدق."),
  ],
  lab: {
    title: l("Forensics Lab — Verifying Evidence Integrity with SHA-256 Hashing", "مختبر التحقيق الجنائي — التحقق من سلامة الأدلة بتجزئة SHA-256"),
    scenario: l(
      "You are preserving a piece of digital evidence — a message file — before analysis. Use the SHA-256 hashing simulator (display only; nothing is collected from a real system) to compute its hash, record it, observe the avalanche effect when the content changes, and use the integrity check to prove whether the evidence is intact or has been altered.",
      "أنت تحفظ دليلًا رقميًا — ملف رسالة — قبل تحليله. استخدم محاكي التجزئة SHA-256 (عرض فقط؛ لا يُجمع أي شيء من أي نظام حقيقي) لحساب تجزئة الملف وتسجيلها وملاحظة أثر الانهيار عند تغيير المحتوى واستخدام فحص السلامة لإثبات ما إذا كان الدليل سليمًا أو عُدّل.",
    ),
    safety: l(
      "The simulator only hashes text you type into a browser; nothing is collected, seized or changed on any real system, and no real evidence is involved. In real investigations, collect and hash evidence only from systems you are authorised to investigate, and record every hash and handling in the case file.",
      "المحاكي يحسب تجزئة النص الذي تُدخله في المتصفح فقط؛ ولا يُجمع أو يُضبط أو يُغيّر أي شيء على أي نظام حقيقي، ولا توجد أدلة حقيقية. وفي التحقيقات الحقيقية، اجمع الأدلة واحسب تجزئتها فقط من الأنظمة التي لديك إذن بالتحقيق فيها، وسجّل كل تجزئة وكل تعامل في ملف القضية.",
    ),
    steps: [
      l("Enter the evidence message and compute its SHA-256 hash", "أدخل رسالة الدليل واحسب تجزئتها SHA-256"),
      l("Record the hash as the integrity baseline", "سجّل التجزئة كخط أساس للسلامة"),
      l("Paste the recorded hash into the integrity check", "الصق التجزئة المسجلة في فحص السلامة"),
      l("Change one character and observe the avalanche effect", "غيّر حرفًا واحدًا ولاحظ أثر الانهيار"),
      l("Re-check integrity and confirm the mismatch", "أعد فحص السلامة وتأكد من عدم التطابق"),
      l("Restore the original message and confirm the match", "أعد الرسالة الأصلية وتأكد من المطابقة"),
    ],
    expected: l(
      "You can compute a SHA-256 hash of the evidence, record it, confirm a match with the integrity check when the content is unchanged, and observe that a single-character change produces a completely different hash and a mismatch — proving that any alteration is detectable.",
      "يمكنك حساب تجزئة SHA-256 للدليل وتسجيلها وتأكيد المطابقة مع فحص السلامة عند عدم تغيير المحتوى، وملاحظة أن تغيير حرف واحد ينتج تجزئة مختلفة تمامًا وعدم تطابق — مثبتًا أن أي تعديل قابل للاكتشاف.",
    ),
    tool: "hash",
    objectives: [
      l("Compute a SHA-256 hash of a piece of evidence", "حساب تجزئة SHA-256 لدليل"),
      l("Record the hash as an integrity baseline", "تسجيل التجزئة كخط أساس للسلامة"),
      l("Verify integrity by matching a recorded hash", "التحقق من السلامة بمطابقة تجزئة مسجلة"),
      l("Demonstrate the avalanche effect with a single-character change", "إظهار أثر الانهيار بتغيير حرف واحد"),
      l("Explain why hashing proves evidence was not altered", "شرح سبب إثبات التجزئة عدم تعديل الأدلة"),
    ],
    prerequisites: [
      l("Session 9: how hash functions produce fixed-length fingerprints", "الجلسة 9: كيف تُنتج دوال التجزئة بصمات ثابتة الطول"),
      l("Session 16: how evidence is preserved during incident response", "الجلسة 16: كيف تُحفظ الأدلة أثناء الاستجابة للحوادث"),
    ],
    environment: l(
      "The companion SHA-256 hashing simulator in a browser (display only). No real evidence is collected, seized or analysed. All hashing is performed on text you type, and all matches are simulated on screen.",
      "محاكي التجزئة SHA-256 المرافق في متصفح (عرض فقط). لا تُجمع أو تُضبط أو تُحلل أي أدلة حقيقية. وتُحسب جميع التجزئات على النص الذي تُدخله، وجميع المطابقات محاكاة على الشاشة.",
    ),
    tools: [
      l("SHA-256 hashing simulator (companion browser tool, display only)", "محاكي التجزئة SHA-256 (أداة متصفح مساندة، عرض فقط"),
      l("Case file / investigation log (for recording hashes and chain of custody)", "ملف القضية / سجل التحقيق (لتسجيل التجزئات وسلسلة الحيازة)"),
    ],
    authorization: l(
      "Scope: use the display-only simulator to hash text you type. Prohibited: collecting, seizing or hashing evidence from any real system without written authorization, or altering evidence under investigation. Stop condition: if asked to hash or handle real evidence, stop and confirm authorization and procedure first.",
      "النطاق: استخدم محاكٍ العرض فقط لحساب تجزئة النص الذي تُدخله. المحظور: جمع أو ضبط أو تجزئة أدلة من أي نظام حقيقي دون تصريح كتابي، أو تعديل أدلة قيد التحقيق. شرط التوقف: إذا طُلب منك تجزئة أو التعامل مع أدلة حقيقية، توقف وتحقق من التصريح والإجراء أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Enter the evidence and compute its hash", "أدخل الدليل واحسب تجزئته"),
        command: "Hashing simulator: enter message A",
        explanation: l(
          "Enter the evidence message (for example, the contents of a seized message file) into message A of the simulator and note the SHA-256 hash it computes. This hash is the fingerprint of the evidence as it stands — the value you will use to verify integrity later.",
          "أدخل رسالة الدليل (مثل محتوى ملف رسالة مصادر) في الرسالة A من المحاكٍ وسجّل تجزئة SHA-256 التي يحسبها. فهذه التجزئة هي بصمة الدليل كما هو — القيمة التي ستستخدمها للتحقق من السلامة لاحقًا.",
        ),
        expected: l("You can enter the evidence and read its SHA-256 hash.", "يمكنك إدخال الدليل وقراءة تجزئته SHA-256."),
      },
      {
        title: l("Record the hash as the baseline", "سجّل التجزئة كخط أساس"),
        command: "Case file: record the SHA-256 hash",
        explanation: l(
          "Record the computed hash in your case file or investigation log, with the date, time and a note that it was the hash at acquisition. This recorded value is the integrity baseline: any later hash that differs from it means the evidence has been altered.",
          "سجّل التجزئة المحسوبة في ملف قضيتك أو سجل التحقيق، مع التاريخ والوقت وملاحظة أنها التجزئة عند الاكتساب. فهذه القيمة المسجلة هي خط أساس السلامة: أي تجزئة لاحقة تختلف عنها تعني أن الدليل عُدّل.",
        ),
        expected: l("You can record the hash and its context in the case file.", "يمكنك تسجيل التجزئة وسياقه في ملف القضية."),
      },
      {
        title: l("Verify integrity with the check", "تحقق من السلامة بالفحص"),
        command: "Hashing simulator: paste the published hash",
        explanation: l(
          "Paste the hash you recorded into the simulator's integrity-check field. Because the content is unchanged, the check should confirm a match, proving the evidence is intact and identical to what was recorded.",
          "الصق التجزئة التي سجلتها في حقل فحص السلامة في المحاكٍ. ولأن المحتوى غير معدّل، يجب أن يؤكد الفحص المطابقة، مثبتًا أن الدليل سليم ومتطابق مع ما سُجّل.",
        ),
        expected: l("The integrity check confirms a match for the unchanged evidence.", "يؤكد فحص السلامة المطابقة للدليل غير المعدّل."),
      },
      {
        title: l("Observe the avalanche effect", "لاحظ أثر الانهيار"),
        command: "Hashing simulator: change one character in message B",
        explanation: l(
          "Change a single character of the message (in message B) and observe that the new SHA-256 hash is completely different. Note how many hex characters and bits differ — even a tiny change produces a totally new fingerprint. This is the avalanche effect that makes hashing a reliable integrity check.",
          "غيّر حرفًا واحدًا من الرسالة (في الرسالة B) ولاحظ أن تجزئة SHA-256 الجديدة مختلفة تمامًا. ولاحظ عدد الخانات الست عشرية والبتات المختلفة — فحتى التغيير الطفيف ينتج بصمة جديدة تمامًا. وهذا هو أثر الانهيار الذي يجعل التجزئة فحص سلامة موثوقًا.",
        ),
        expected: l("You can observe that a one-character change produces a completely different hash and a large difference in bits.", "يمكنك ملاحظة أن تغيير حرف واحد ينتج تجزئة مختلفة تمامًا واختلافًا كبيرًا في البتات."),
      },
      {
        title: l("Confirm the mismatch", "تأكد من عدم التطابق"),
        command: "Hashing simulator: re-run the integrity check",
        explanation: l(
          "Re-run the integrity check against the original recorded hash with the altered message. The check should report a mismatch, demonstrating that the alteration is detected. Explain that in a real case this mismatch would signal that the evidence has been tampered with and its reliability is in question.",
          "أعد تشغيل فحص السلامة مقابل التجزئة المسجلة الأصلية مع الرسالة المعدلة. ويجب أن يُبلغ الفحص عن عدم تطابق، مظهرًا أن التعديل يُكتشف. واشرح أن عدم التطابق هذا في قضية حقيقية كان سيشير إلى أن الدليل عُبث به وأن موثوقيته موضع شك.",
        ),
        expected: l("The integrity check reports a mismatch for the altered evidence, detecting the change.", "يُبلغ فحص السلامة عن عدم تطابق للدليل المعدّل، كاشفًا التغيير."),
      },
      {
        title: l("Restore and re-confirm", "أعد وأعد التأكيد"),
        command: "Hashing simulator: restore the original message",
        explanation: l(
          "Restore the original, unchanged message and re-run the integrity check. The check should again confirm a match, closing the loop and showing that the same hash reliably identifies the same, unaltered evidence every time.",
          "أعد الرسالة الأصلية غير المعدّلة وأعد تشغيل فحص السلامة. ويجب أن يؤكد الفحص المطابقة مرة أخرى، مغلقًا الحلقة ومظهرًا أن نفس التجزئة تحدد بشكل موثوق نفس الدليل غير المعدّل كل مرة.",
        ),
        expected: l("The integrity check reconfirms a match for the restored, unchanged evidence.", "يؤكد فحص السلامة مجددًا المطابقة للدليل المستعاد غير المعدّل."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The hash looks similar to the original but is not a match", "تبدو التجزئة قريبة من الأصلية لكنها لا تطابقها"),
        fix: l("Hashes are all-or-nothing: any difference at all means a mismatch. Copy the recorded hash exactly, in the correct case, and ensure no whitespace or extra characters were added when pasting.", "التجزئات إما مطابقة تمامًا أو لا: أي اختلاف على الإطلاق يعني عدم تطابق. فنسخ التجزئة المسجلة تمامًا، وبالحالة الصحيحة، وتأكد من عدم إضافة مسافات أو رموز زائدة عند الصق."),
      },
      {
        problem: l("The avalanche effect is not obvious at a glance", "أثر الانهيار ليس واضحًا للوهلة الأولى"),
        fix: l("Look at the reported number of differing hex characters and bits: even one changed character flips about half the bits. The hash string itself looks random, so the counter is the clearest evidence of the effect.", "انظر إلى عدد الخانات الست عشرية والبتات المختلفة المبلغ عنه: فحتى حرف متغير واحد يُقلب نحو نصف البتات. وسلسلة التجزئة نفسها تبدو عشوائية، لذا يكون العداد أوضح دليل على الأثر."),
      },
      {
        problem: l("Unsure what counts as evidence alteration", "لست متأكدًا مما يُعد تعديلًا للأدلة"),
        fix: l("Any change to the content — a character, a trailing newline, an encoding change — produces a different hash. That is why evidence must be preserved exactly as found and hashes recorded at acquisition, before any handling.", "أي تغيير في المحتوى — حرف أو سطر جديد في النهاية أو تغيير في الترميز — ينتج تجزئة مختلفة. ولهذا يجب حفظ الأدلة كما وُجدت تمامًا وتسجيل التجزئات عند الاكتساب، قبل أي تعامل."),
      },
    ],
    deliverables: [
      l("The SHA-256 hash of the evidence, recorded with date and time", "تجزئة SHA-256 للدليل، مسجلة مع التاريخ والوقت"),
      l("A note of the integrity check result (match) for the unchanged evidence", "ملاحظة بنتيجة فحص السلامة (مطابقة) للدليل غير المعدّل"),
      l("A record of the avalanche-effect observation (bits changed)", "سجل لملاحظة أثر الانهيار (البتات المتغيرة"),
      l("A confirmation of the mismatch after the single-character change", "تأكيد عدم التطابق بعد تغيير حرف واحد"),
      l("A short explanation of why hashing proves evidence was not altered", "شرح قصير لسبب إثبات التجزئة عدم تعديل الأدلة"),
      l("A note on applying the same checks to real, authorised evidence", "ملاحظة عن تطبيق نفس الفحوصات على أدلة حقيقية مصرح بها"),
    ],
    rubric: [
      { criterion: l("Correct SHA-256 hash computed and recorded as baseline", "حساب تجزئة SHA-256 صحيحة وتسجيلها كخط أساس"), weight: 25 },
      { criterion: l("Integrity check correctly confirms a match for unchanged evidence", "فحص السلامة يؤكد بصورة صحيحة مطابقة الدليل غير المعدّل"), weight: 20 },
      { criterion: l("Avalanche effect demonstrated with a one-character change", "إظهار أثر الانهيار بتغيير حرف واحد"), weight: 20 },
      { criterion: l("Mismatch correctly identified and explained as tampering signal", "تحديد عدم التطابق بصورة صحيحة وشرح إشارته إلى العبث"), weight: 20 },
      { criterion: l("Clear explanation of hashing, integrity and forensic discipline", "شرح واضح للتجزئة والسلامة وضبط التحقيق الجنائي"), weight: 15 },
    ],
  },
  quiz: [
    {
      q: l("What is the primary rule of digital forensics regarding the original evidence?", "ما القاعدة الأساسية للتحقيق الجنائي الرقمي بخصوص الدليل الأصلي؟"),
      options: [
        l("Never work on the original; analyse a forensic image", "لا تعمل على الأصل أبدًا؛ حلل صورة جنائية"),
        l("Always work on the original for accuracy", "اعمل على الأصل دائمًا للدقة"),
        l("Delete the original after imaging", "احذف الأصل بعد التصوير"),
        l("Share the original with the defence", "شارك الأصل مع الدفاع"),
      ],
      answer: 0,
      why: l("Working on a copy protects the original from alteration and keeps it admissible.", "العمل على نسخة يحمي الأصل من التعديل ويُبقيه مقبولًا."),
    },
    {
      q: l("What does a matching SHA-256 hash between the original and the image prove?", "ما الذي تثبته تجزئة SHA-256 المطابقة بين الأصل والصورة؟"),
      options: [
        l("The image is identical to the original and unchanged", "الصورة متطابقة مع الأصل ولم تُعدّل"),
        l("The image is faster to analyse", "الصورة أسرع في التحليل"),
        l("The image is smaller in size", "الصورة أصغر حجمًا"),
        l("Nothing; hashes are decorative", "لا شيء؛ التجزئات شكلية"),
      ],
      answer: 0,
      why: l("Equal hashes show the copy is bit-for-bit identical and the evidence has not been altered.", "تظهر التجزئات المتساوية أن النسخة متطابقة بت ببت وأن الأدلة لم تُعدّل."),
    },
    {
      q: l("Which evidence is MOST volatile and should be captured first?", "أي الأدلة هي الأكثر تطايرًا ويُلتقط أولًا؟"),
      options: [
        l("Hard disk", "القرص الصلب"),
        l("Memory (RAM) contents", "محتويات الذاكرة (RAM)"),
        l("Printed reports", "التقارير المطبوعة"),
        l("Backup tapes", "أشرطة النسخ الاحتياطي"),
      ],
      answer: 1,
      why: l("RAM is lost at power-off and holds processes, connections and keys.", "تضيع الذاكرة عند الإطفاء وتحتوي العمليات والاتصالات والمفاتيح."),
    },
    {
      q: l("What does 'chain of custody' document?", "ماذا توثّق «سلسلة الحيازة»؟"),
      options: [
        l("Who handled the evidence, when and why", "من تعامل مع الدليل ومتى ولماذا"),
        l("The firewall rules", "قواعد الجدار الناري"),
        l("Employee salaries", "رواتب الموظفين"),
        l("The network topology", "طوبولوجيا الشبكة"),
      ],
      answer: 0,
      why: l("It is the unbroken record that proves the evidence was not tampered with.", "هو السجل غير المنقطع الذي يثبت أن الدليل لم يُعبث به."),
    },
    {
      q: l("Which branch of forensics examines running processes and keys held in RAM?", "أي تخصص التحقيق الجنائي يفحص العمليات الجارية والمفاتيح في الذاكرة؟"),
      options: [
        l("Disk forensics", "التحقيق في الأقراص"),
        l("Memory (RAM) forensics", "التحقيق في الذاكرة"),
        l("Network forensics", "التحقيق الشبكي"),
        l("Mobile forensics", "التحقيق في الأجهزة المحمولة"),
      ],
      answer: 1,
      why: l("Memory forensics captures and analyses the volatile contents of RAM.", "يلتقط التحقيق في الذاكرة محتوى RAM المتطاير ويحللها."),
    },
    {
      q: l("The 'avalanche effect' in hashing means that…", "«أثر الانهيار» في التجزئة يعني أن…"),
      options: [
        l("A small change in input produces a completely different hash", "تغيير صغير في المدخل ينتج تجزئة مختلفة تمامًا"),
        l("Hashes grow with the size of the input", "تتضخم التجزئات مع حجم المدخل"),
        l("Hashes can be reversed to find the input", "يمكن عكس التجزئات لإيجاد المدخل"),
        l("Hashes are always the same length as the input", "التجزئات دائمًا بنفس طول المدخل"),
      ],
      answer: 0,
      why: l("Even a one-character change flips many bits, producing a totally different fingerprint.", "حتى تغيير حرف واحد يُقلب كثيرًا من البتات، منتجًا بصمة مختلفة تمامًا."),
    },
    {
      q: l("Why isolate a suspect machine rather than power it off immediately?", "لماذا يُعزل الجهاز المشتبه به بدل إطفائه فورًا؟"),
      options: [
        l("To preserve volatile evidence in memory before it is lost", "لحفظ الأدلة المتطايرة في الذاكرة قبل فقدها"),
        l("To let the attacker keep access", "لإبقاء وصول المهاجم"),
        l("Because powering off is illegal", "لأن الإطفاء غير قانوني"),
        l("It makes analysis slower", "لأنه يجعل التحليل أبطأ"),
      ],
      answer: 0,
      why: l("Isolation stops remote changes while memory — which vanishes at power-off — is captured.", "العزل يوقف التغييرات البعيدة بينما تُلتقط الذاكرة — التي تختفي عند الإطفاء — أولًا."),
    },
    {
      q: l("A forensic image is…", "الصورة الجنائية هي…"),
      options: [
        l("A bit-for-bit copy of the storage used for analysis", "نسخة بت ببت من التخزين تُستخدم للتحليل"),
        l("A summary of the files on the disk", "ملخص للملفات على القرص"),
        l("A backup of user documents only", "نسخ احتياطي لوثائق المستخدم فقط"),
        l("A password-protected archive", "أرشيف محمي بكلمة مرور"),
      ],
      answer: 0,
      why: l("A forensic image is a complete bit-for-bit copy so the original is preserved untouched.", "الصورة الجنائية نسخة كاملة بت ببت كي يُحفظ الأصل دون تغيير."),
    },
    {
      q: l("What makes a forensic report defensible?", "ما الذي يجعل تقرير التحقيق الجنائي قابلًا للدفاع؟"),
      options: [
        l("Findings separated from inference, supported by documentation and hashes", "فصل النتائج عن الاستدلال، مدعومة بالتوثيق والتجزئات"),
        l("Speculation about motive", "التخمين حول الدافع"),
        l("Only the conclusion, with no method", "الاستنتاج فقط دون منهجية"),
        l("Opinion stated as fact without evidence", "الرأي المذكور كحقيقة دون دليل"),
      ],
      answer: 0,
      why: l("A defensible report separates evidence from inference and backs every claim with the record.", "يفصل التقرير القابل للدفاع الأدلة عن الاستدلال ويدعم كل ادعاء بالسجل."),
    },
    {
      q: l("An investigator should examine data beyond the authorised scope only if…", "يجب على المحقق فحص بيانات تتجاوز النطاق المصرح به فقط إذا…"),
      options: [
        l("It might be interesting", "قد يكون مثيرًا للاهتمام"),
        l("The investigation authorisation explicitly permits it", "يسمح تصريح التحقيق بذلك صراحةً"),
        l("The device owner asks", "يطلب مالك الجهاز ذلك"),
        l("It is quick to do", "كان سريعًا"),
      ],
      answer: 1,
      why: l("Examining beyond scope breaches privacy and law and taints the evidence and the investigator.", "فحص ما يتجاوز النطاق ينتهك الخصوصية والقانون ويلطخ الأدلة والمحقق."),
    },
    {
      q: l("Which action best supports reproducibility of a forensic analysis?", "أي إجراء يدعم على أفضل وجه قابلية إعادة إنتاج التحليل الجنائي؟"),
      options: [
        l("A detailed investigation log of every action and tool", "سجل تحقيق تفصيلي لكل إجراء وأداة"),
        l("Working quickly from memory", "العمل بسرعة من الذاكرة"),
        l("Overwriting original notes with corrections", "تجاوز الملاحظات الأصلية بتصحيحات"),
        l("Skipping documentation to save time", "تجاوز التوثيق لتوفير الوقت"),
      ],
      answer: 0,
      why: l("A detailed log lets another investigator repeat the work and reach the same result.", "يتيح السجل التفصيلي لمحقق آخر تكرار العمل والوصول إلى نفس النتيجة."),
    },
  ],
  trueFalse: [
    {
      q: l("You should perform forensic analysis directly on the original evidence.", "يجب إجراء التحليل الجنائي مباشرة على الدليل الأصلي."),
      answer: false,
      why: l("Working on the original risks altering it; always analyse a forensic image.", "العمل على الأصل يعرضه للتعديل؛ فحلل دائمًا صورة جنائية."),
    },
    {
      q: l("Two files with the same SHA-256 hash are, with very high probability, identical.", "ملفان لهما نفس تجزئة SHA-256 هما، باحتمال مرتفع جدًا، متطابقان."),
      answer: true,
      why: l("Equal hashes indicate bit-for-bit identical, unchanged content.", "تشير التجزئات المتساوية إلى محتوى متطابق بت ببت وغير معدّل."),
    },
    {
      q: l("Powering off a suspect device is the best way to preserve its evidence.", "إطفاء الجهاز المشتبه به هو أفضل طريقة لحفظ أدلة."),
      answer: false,
      why: l("Powering off destroys volatile memory evidence before it can be captured.", "الإطفاء يتلف أدلة الذاكرة المتطايرة قبل التقاطها."),
    },
    {
      q: l("A broken chain of custody can make evidence inadmissible.", "يمكن لسلسلة حيازة منقطعة أن تجعل الأدلة غير مقبولة."),
      answer: true,
      why: l("Without an unbroken record of handling, the evidence cannot be shown to be unaltered.", "بدون سجل غير منقطع للتعامل لا يمكن إثبات أن الدليل غير معدّل."),
    },
    {
      q: l("Forensic analysis should be driven by assumptions about who is guilty.", "يجب أن يكون التحليل الجنائي مدفوعًا بافتراضات حول من هو المذنب."),
      answer: false,
      why: l("Analysis must be objective and evidence-driven, not shaped by expectations of guilt.", "يجب أن يكون التحليل موضوعيًا ومدفوعًا بالأدلة، لا مُشكّلًا بتوقعات الذنب."),
    },
    {
      q: l("The order of volatility requires collecting the most short-lived evidence first.", "يتطلب ترتيب التطاير جمع الأدلة الأقصر عمرًا أولًا."),
      answer: true,
      why: l("Volatile data vanishes first, so it must be captured before it is lost.", "تختفي البيانات المتطايرة أولًا، لذا يجب التقاطها قبل فقدها."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item as a forensic branch or a forensic principle", "صنّف كل عنصر كتخصص جنائي أو مبدأ جنائي"),
      categories: [
        l("Branch", "تخصص"),
        l("Principle", "مبدأ"),
      ],
      items: [
        { text: l("Memory (RAM) forensics", "التحقيق في الذاكرة"), answer: 0 },
        { text: l("Chain of custody", "سلسلة الحيازة"), answer: 1 },
        { text: l("Network forensics", "التحقيق الشبكي"), answer: 0 },
        { text: l("Order of volatility", "ترتيب التطاير"), answer: 1 },
      ],
      why: l("Memory and network forensics are branches; chain of custody and order of volatility are principles.", "التحقيق في الذاكرة والشبكة تخصصات؛ وسلسلة الحيازة وترتيب التطاير مبادئ."),
    },
    {
      prompt: l("Classify each evidence item by its volatility", "صنّف كل دليل بحسب تطايريته"),
      categories: [
        l("Highly volatile", "شديدة التطاير"),
        l("Less volatile", "أقل تطايرًا"),
      ],
      items: [
        { text: l("CPU registers and cache", "سجلات المعالج والذاكرة المخبأة"), answer: 0 },
        { text: l("Hard disk contents", "محتويات القرص الصلب"), answer: 1 },
        { text: l("RAM contents", "محتويات الذاكرة"), answer: 0 },
        { text: l("Archived backup tapes", "أشرطة النسخ الاحتياطي المؤرشفة"), answer: 1 },
      ],
      why: l("Registers, cache and RAM vanish quickly; disk and archival media persist and are captured later.", "تختفي السجلات والمخبأة والذاكرة بسرعة؛ بينما يبقى القرص والوسائط المؤرشفة ويُلتقطان لاحقًا."),
    },
    {
      prompt: l("Match each forensic action to the principle it supports", "زاوج كل إجراء جنائي بالمبدأ الذي يدعمه"),
      categories: [
        l("Integrity", "السلامة"),
        l("Admissibility", "القبول"),
        l("Reproducibility", "إعادة الإنتاج"),
      ],
      items: [
        { text: l("Compute and record a SHA-256 hash", "حساب تجزئة SHA-256 وتسجيلها"), answer: 0 },
        { text: l("Maintain a chain of custody", "الحفاظ على سلسلة الحيازة"), answer: 1 },
        { text: l("Keep a detailed investigation log", "الاحتفاظ بسجل تحقيق تفصيلي"), answer: 2 },
      ],
      why: l("Hashes prove integrity, chain of custody supports admissibility, and a detailed log supports reproducibility.", "تثبت التجزئات السلامة، وتدعم سلسلة الحيازة القبول، ويدعم السجل التفصيلي إعادة الإنتاج."),
    },
    {
      prompt: l("Classify each action as correct or a forensic mistake", "صنّف كل إجراء كإجراء صحيح أو خطأ جنائي"),
      categories: [
        l("Correct", "صحيح"),
        l("Mistake", "خطأ"),
      ],
      items: [
        { text: l("Analyse a forensic image of the evidence", "تحليل صورة جنائية للدليل"), answer: 0 },
        { text: l("Power off the device before capturing memory", "إطفاء الجهاز قبل التقاط الذاكرة"), answer: 1 },
        { text: l("Record the hash at acquisition", "تسجيل التجزئة عند الاكتساب"), answer: 0 },
        { text: l("Leave evidence unattended without a custody record", "ترك الأدلة دون مراقبة دون سجل حيازة"), answer: 1 },
      ],
      why: l("Imaging and recording hashes are correct; powering off early and leaving evidence unattended are mistakes.", "التصوير وتسجيل التجزئات صحيحان؛ والإطفاء المبكر وترك الأدلة دون مراقبة خطآن."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "You are about to seize a laptop in a suspected data-theft case. The device is powered on and you need to decide how to handle it at the scene.",
        "أنت على وشك ضبط حاسوب محمول في قضية سرقة بيانات مشتبه بها. الجهاز مشغّل وعليك تقرير كيف تتعامل معه في الموقع.",
      ),
      question: l("What is the correct first action?", "ما الإجراء الأول الصحيح؟"),
      options: [
        l("Power it off immediately to secure it", "إطفائه فورًا لتبكيله"),
        l("Isolate it from the network and capture its volatile memory before any power-off", "عزله عن الشبكة والتقاط ذاكرة المتطايرة قبل أي إطفاء"),
        l("Start browsing its files on site", "البدء بتصفح ملفاته في الموقع"),
        l("Let it run and collect it later", "تركه يعمل وجمعته لاحقًا"),
      ],
      answer: 1,
      why: l("Isolation stops remote changes while memory — which vanishes at power-off — is captured first.", "العزل يوقف التغييرات البعيدة بينما تُلتقط الذاكرة — التي تختفي عند الإطفاء — أولًا."),
    },
    {
      scenario: l(
        "Before analysis, an investigator recomputes the SHA-256 hash of a preserved image and finds it differs from the hash recorded at acquisition.",
        "قبل التحليل، يُعيد محقق حساب تجزئة SHA-256 لصورة محفوظة ويجد أنها تختلف عن التجزئة المسجلة عند الاكتساب.",
      ),
      question: l("What should the investigator conclude and do?", "ما الذي يجب أن يستنتجه المحقق ويفعله؟"),
      options: [
        l("Proceed with analysis; the difference is negligible", "المضي في التحليل؛ الفرق ضئيل"),
        l("Document the discrepancy, suspend reliance on the evidence and re-acquire and re-hash", "توثيق التفاوت، وتعليق الاعتماد على الدليل وإعادة الاكتساب والتجزئة"),
        l("Overwrite the image with the new hash", "تجاوز الصورة بالتجزئة الجديدة"),
        l("Ignore it and report the original findings", "تجاهله والإبلاغ بالنتائج الأصلية"),
      ],
      answer: 1,
      why: l("A hash mismatch signals tampering; the evidence is no longer trustworthy until re-acquired and re-verified.", "عدم تطابق التجزئة يشير إلى عبث؛ ولم تعد الأدلة موثوقة حتى تُعاد اكتسابها والتحقق منها."),
    },
    {
      scenario: l(
        "A manager asks a forensic investigator to quickly examine a colleague's device for personal, unrelated data to 'get ahead' of a possible issue, without a formal authorisation.",
        "يطلب مدير من محقق جنائي فحص جهاز زميل بسرعة لبيانات شخصية غير ذات صلة «للسبق» في مشكلة محتملة، دون تصريح رسمي.",
      ),
      question: l("What is the correct response?", "ما الرد الصحيح؟"),
      options: [
        l("Examine everything to be thorough", "فحص كل شيء للدقة"),
        l("Decline to examine beyond authorised scope; document the request and escalate", "رفض الفحص بما يتجاوز النطاق المصرح به؛ وتوثيق الطلب والتصعيد"),
        l("Examine only the personal data", "فحص البيانات الشخصية فقط"),
        l("Report the colleague immediately", "إبلاغ الزميل فورًا"),
      ],
      answer: 1,
      why: l("Examining beyond scope breaches privacy and law and taints the investigation and investigator.", "فحص ما يتجاوز النطاق ينتهك الخصوصية والقانون ويلطخ التحقيق والمحقق."),
    },
  ],
  practicalChecks: [
    {
      task: l("State the rule about working on original versus copied evidence", "ذكر القاعدة الخاصة بالعمل على الأصل مقابل النسخة من الأدلة"),
      expected: l("Never work on the original; create a forensic image and analyse the copy, proving integrity with matching hashes.", "لا تعمل على الأصل أبدًا؛ أنشئ صورة جنائية وحلل النسخة، وأثبت السلامة بالتجزئات المتطابقة."),
    },
    {
      task: l("List the evidence in order of volatility, most fleeting first", "اذكر الأدلة بحسب ترتيب التطاير، الأسرع زوالًا أولًا"),
      expected: l("CPU registers/cache → memory (RAM) → network state → running processes → disk → remote logs/backups → archival media.", "سجلات المعالج/المخبأة ← الذاكرة (RAM) ← حالة الشبكة ← العمليات الجارية ← القرص ← السجلات البعيدة/النسخ ← الوسائط المؤرشفة."),
    },
    {
      task: l("Explain in one sentence why a matching hash proves integrity", "اشرح في جملة واحدة سبب إثبات التجزئة المطابقة السلامة"),
      expected: l("Two inputs with the same SHA-256 are, with overwhelming probability, identical, so a matching hash shows the evidence has not been altered.", "مدخلان لهما نفس SHA-256 هما، باحتمال سائد، متطابقان، فالتجزئة المطابقة تظهر أن الأدلة لم تُعدّل."),
    },
  ],
  homework: {
    title: l("Homework 17 — Mini evidence-integrity and chain-of-custody log", "الواجب 17 — سجل مصغّر لسلامة الأدلة وسلسلة الحيازة"),
    tasks: [
      l("Choose a sample text file (a message, a note, or a short document) to treat as 'evidence'.", "اختر ملف نصي عياري (رسالة أو ملاحظة أو وثيقة قصيرة) لتتعامل معه كـ«دليل»."),
      l("Compute its SHA-256 hash and record it as the integrity baseline with the date and time.", "احسب تجزئته SHA-256 وسجّلها كخط أساس للسلامة مع التاريخ والوقت."),
      l("Make a single-character change, recompute the hash, and note the mismatch.", "أجرِ تغييرًا بحرف واحد وأعد حساب التجزئة ودوّن عدم التطابق."),
      l("Write a short chain-of-custody log: who held the evidence, when, and every action taken, in order.", "اكتب سجل سلسلة حيازة قصير: من احتفظ بالدليل ومتى وكل إجراء اتُّخذ، بالترتيب."),
      l("Write three sentences explaining why the order of volatility and hashing matter in a real case.", "اكتب ثلاث جمل تشرح سبب أهمية ترتيب التطاير والتجزئة في قضية حقيقية."),
    ],
    deliverable: l("The original and modified hashes, a chain-of-custody log, and a short explanation of integrity and volatility.", "التجزئتان الأصلية والمعدلة، وسجل سلسلة الحيازة، وشرح قصير للسلامة والتطاير."),
    criteria: [
      l("Correct baseline hash recorded with date and time", "تسجيل تجزئة خط أساس صحيحة مع التاريخ والوقت"),
      l("Single-character change and resulting mismatch documented", "توثيق تغيير حرف واحد وعدم التطابق الناتج"),
      l("A complete, ordered chain-of-custody log", "سجل سلسلة حيازة كامل مرتب"),
      l("Accurate explanation of integrity and the avalanche effect", "شرح دقيق للسلامة وأثر الانهيار"),
      l("A clear link to the order of volatility and real forensic practice", "ربط واضح بترتيب التطاير والممارسة الجنائية الحقيقية"),
    ],
    challenge: l(
      "Optional challenge: research one real case where a broken chain of custody or a hash mismatch affected the outcome, and explain which forensic principle was violated and how it could have been avoided.",
      "مهمة تحدٍ اختيارية: ابحث في قضية حقيقية أثّر فيها انقطاع سلسلة الحيازة أو عدم تطابق التجزئة على النتيجة، واشرح أي مبدأ جنائي انتُهك وكيف كان يمكن تجنّبه.",
    ),
  },
  refs: [
    { title: "Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/86/final" },
    { title: "Computer Security Incident Handling Guide (SP 800-61 Rev.2)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
    { title: "Digital Forensics and Incident Response", org: "SANS Institute (manual)", url: "https://www.sans.org/books/digital-forensics-and-incident-response/" },
    { title: "Forensic science: handling digital evidence", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/forensics" },
    { title: "Electronic Evidence and Digital Forensics", org: "CISA", url: "https://www.cisa.gov/topics/forensics" },
    { title: "SWGDE best practices for digital forensics", org: "SWGDE", url: "https://www.swgde.org/" },
  ],
  terms: [
    { term: l("Digital forensics", "التحقيق الجنائي الرقمي"), def: l("The disciplined collection, preservation, analysis and presentation of digital evidence.", "أسلوب منضبط لجمع الأدلة الرقمية وحفظها وتحليلها وتقديمها.") },
    { term: l("Evidence", "الدليل"), def: l("Any data that can establish what happened and support a conclusion.", "أي بيانات يمكن أن تحدد ما حدث وتدعم استنتاجًا.") },
    { term: l("Forensic image", "الصورة الجنائية"), def: l("A bit-for-bit copy of storage, made for analysis while preserving the original.", "نسخة بت ببت من التخزين، تُصنع للتحليل مع حفظ الأصل.") },
    { term: l("Hash / hash function", "التجزئة / دالة التجزئة"), def: l("A function producing a fixed-length fingerprint of data, used to verify integrity.", "دالة تُنتج بصمة ثابتة الطول للبيانات، تُستخدم للتحقق من السلامة.") },
    { term: l("SHA-256", "SHA-256"), def: l("A cryptographic hash producing a 256-bit fingerprint, widely used for integrity.", "تجزئة تشفيرية تُنتج بصمة 256 بت، تُستخدم كثيرًا للسلامة.") },
    { term: l("Integrity", "السلامة"), def: l("The property that data has not been altered in an undetected way.", "خاصية عدم تعديل البيانات بطريقة غير مكتشفة.") },
    { term: l("Avalanche effect", "أثر الانهيار"), def: l("A small change in input producing a completely different hash output.", "تغيير صغير في المدخل ينتج خرج تجزئة مختلفًا تمامًا.") },
    { term: l("Order of volatility", "ترتيب التطاير"), def: l("Collecting the most short-lived evidence first, most fleeting to most persistent.", "جمع الأدلة الأقصر عمرًا أولًا، من الأسرع زوالًا إلى الأكثر ثباتًا.") },
    { term: l("Volatile data", "البيانات المتطايرة"), def: l("Data lost when a device is powered off, such as memory contents.", "بيانات تُفقد عند إطفاء الجهاز، مثل محتوى الذاكرة.") },
    { term: l("Chain of custody", "سلسلة الحيازة"), def: l("The documented, unbroken record of who handled evidence and when.", "السجل الموثق غير المنقطع لمن تعامل مع الدليل ومتى.") },
    { term: l("Acquisition", "الاكتساب"), def: l("The process of collecting and preserving evidence non-destructively.", "عملية جمع الأدلة وحفظها بطريقة غير متلف.") },
    { term: l("Write-blocking", "حجب الكتابة"), def: l("A technique that prevents reading from altering the evidence.", "تقنية تمنع قراءة الأدلة من تعديلها.") },
    { term: l("Analysis", "التحليل"), def: l("Examining preserved evidence to reconstruct events and answer questions.", "فحص الأدلة المحفوظة لإعادة بناء الأحداث والإجابة عن الأسئلة.") },
    { term: l("Reporting", "التقارير"), def: l("Presenting findings clearly, separating evidence from inference.", "تقديم النتائج بوضوح، مع فصل الأدلة عن الاستدلال.") },
    { term: l("Reproducibility", "إعادة الإنتاج"), def: l("The ability of another investigator to repeat the work and reach the same result.", "قدرة محقق آخر على تكرار العمل والوصول إلى نفس النتيجة."), },
    { term: l("Admissibility", "القبول"), def: l("The legal acceptability of evidence in a court or hearing.", "القبول القانوني للأدلة في المحكمة أو الجلسة."), },
    { term: l("Disk forensics", "التحقيق في الأقراص"), def: l("The branch examining hard drives, SSDs and file systems.", "التخصص الذي يفحص الأقراص الصلبة وSSD وأنظمة الملفات."), },
    { term: l("Memory forensics", "التحقيق في الذاكرة"), def: l("The branch examining the volatile contents of RAM.", "التخصص الذي يفحص محتوى الذاكرة المتطاير."), },
    { term: l("Network forensics", "التحقيق الشبكي"), def: l("The branch examining packet captures, logs and traffic.", "التخصص الذي يفحص التقاط الحزم والسجلات والحركة."), },
    { term: l("Mobile forensics", "التحقيق في الأجهزة المحمولة"), def: l("The branch examining phone and tablet data.", "التخصص الذي يفحص بيانات الهاتف واللوحي."), },
    { term: l("Objectivity", "الموضوعية"), def: l("Unbiased analysis that lets evidence, not expectation, drive conclusions.", "تحليل غير متحيز يترك الأدلة لا التوقع تقود الاستنتاجات."), },
  ],
};
