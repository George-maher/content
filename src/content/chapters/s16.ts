import { l, type Session } from "../types";

export const s16: Session = {
  id: 16,
  phase: 4,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Incident Response Foundations: Preparing, Detecting, Containing, Recovering and Learning",
    "أساسيات الاستجابة للحوادث: الاستعداد والكشف والاحتواء والتعافي والتعلّم",
  ),
  summary: l(
    "What to do when prevention fails: the NIST incident response lifecycle, roles and severity, containment decisions and trade-offs, eradication and recovery, communication and legal duties, and the lessons-learned loop that makes the next incident cheaper.",
    "ماذا نفعل حين تفشل الوقاية: دورة الاستجابة للحوادث وفق NIST، والأدوار والشدة، وقرارات الاحتواء والمفاضات، والاستئصال والتعافي، والاتصال والواجبات القانونية، وحلقة الدروس المستفادة التي تجعل الحادثة التالية أقل كلفة.",
  ),
  overview: l(
    "Prevention cannot be perfect; somewhere, sometime, an attacker will get through. Incident response is the disciplined set of steps an organisation follows when that happens, so that damage is limited, systems are restored safely, and the same failure is not repeated. This session covers the NIST SP 800-61 lifecycle — preparation, detection and analysis, containment, eradication, recovery and post-incident activity — the roles and severity levels that drive speed and escalation, the trade-offs in containment decisions, the communication and legal duties (including GDPR's 72-hour breach notification), and the documentation and lessons-learned loop that turns an incident into improvement. The session closes with a lab where you order the response actions for a simulated ransomware incident.",
    "لا يمكن للوقاية أن تكون كاملة؛ ففي مكان ما ووقت ما سينجح مهاجم. والاستجابة للحوادث هي الخطوات المنضبطة التي تتبعها المؤسسة حين يحدث ذلك، لكي يُحدّ من الضرر وتُستعاد الأنظمة بأمان ولا يتكرر نفس الإخفاق. وتغطي هذه الجلسة دورة NIST SP 800-61 — الاستعداد والكشف والتحليل والاحتواء والاستئصال والتعافي وما بعد الحادثة — والأدوار ودرجات الشدة التي تقود السرعة والتصعيد، والمفاضات في قرارات الاحتواء، والواجبات الاتصالية والقانونية (بما في ذلك إخطار الاختراق خلال 72 ساعة وفق GDPR)، وحلقة التوثيق والدروس المستفادة التي تحوّل الحادثة إلى تحسين. وتنتهي الجلسة بمختبر ترتب فيه إجراءات الاستجابة لحادثة فدية محاكاة.",
  ),
  whyItMatters: l(
    "A breach is measured not only by how it happened but by how the organisation responded. An unprepared team wastes hours debating what to do, contains too late, restores systems while the attacker is still inside, and repeats the same mistakes. A prepared team activates a plan, knows who is in charge, isolates the damage, communicates clearly, and closes the loop with a blameless review. Incident response is the difference between a contained event and a catastrophic, repeated one.",
    "لا يُقاس الاختراق فقط بكيف حدث بل كيف استجابت المؤسسة له. فالفريق غير المستعد يقضي ساعات في نقاش ما يجب فعله، وياحتوي متأخرًا، ويستعيد الأنظمة بينما المهاجم ما زال داخلًا، ويكرر نفس الأخطاء. أما الفريق المستعد فيفعّل الخطة ويعرف من هو المسؤول ويحصر الضرر ويتصل بوضوح ويغلق الحلقة بمراجعة بلا لوم. والاستجابة للحوادث هي الفارق بين حدث محصور وحادثة كارثية متكررة.",
  ),
  prerequisites: [
    l(
      "Session 13, IAM: how accounts, access and least privilege limit what a compromised identity can reach.",
      "الجلسة 13، إدارة الهوية والوصول: كيف يحدّ الحسابات والوصول وأقل صلاحية مما يستطيع الهوية المخترقة الوصول إليه.",
    ),
    l(
      "Session 15, Security Monitoring & SIEM: how alerts and detection turn raw logs into the signal that triggers response.",
      "الجلسة 15، المراقبة الأمنية وSIEM: كيف تحوّل التنبيهات والكشف السجلات الخام إلى الإشارة التي تفعّل الاستجابة.",
    ),
    l(
      "A legal and ethical mindset: follow your organisation's incident plan, involve management and counsel, and never contact attackers or pay ransoms on your own authority.",
      "عقلية قانونية وأخلاقية: اتبع خطة الحوادث لمؤسستك وأشرك الإدارة والمستشار، ولا تتواصل مع المهاجمين ولا تدفع فدية بسلطتك الخاصة.",
    ),
  ],
  objectives: [
    l(
      "Distinguish an event, an incident and a breach, and explain why triage separates alerts from incidents.",
      "التمييز بين الحدث والحادثة والاختراق، وشرح سبب فصل الفرز للتنبيهات عن الحوادث.",
    ),
    l(
      "Describe the phases of the NIST incident response lifecycle in order and the goal of each.",
      "وصف مراحل دورة الاستجابة للحوادث وفق NIST بالترتيب وهدف كل مرحلة.",
    ),
    l(
      "Make sensible containment decisions that balance stopping damage, evidence and business continuity.",
      "اتخاذ قرارات احتواء سليمة توازن بين إيقاف الضرر والأدلة واستمرارية العمل.",
    ),
    l(
      "Explain eradication and recovery discipline, and why systems must be clean before they are restored.",
      "شرح ضبط الاستئصال والتعافي، ولماذا يجب أن تكون الأنظمة نظيفة قبل استعادتها.",
    ),
    l(
      "State communication, escalation and legal duties, including GDPR's 72-hour breach notification.",
      "ذكر واجبات الاتصال والتصعيد والواجبات القانونية، بما في ذلك إخطار الاختراق خلال 72 ساعة وفق GDPR.",
    ),
    l(
      "Order the response actions for a simulated incident and justify the sequence.",
      "ترتيب إجراءات الاستجابة لحادثة محاكاة وتبرير التسلسل.",
    ),
  ],
  agenda: [
    { label: l("Welcome and prior-knowledge check", "الترحيب والتحقق من المعرفة السابقة"), minutes: 5 },
    { label: l("Events, incidents and preparation", "الأحداث والحوادث والاستعداد"), minutes: 12 },
    { label: l("The NIST incident response lifecycle", "دورة الاستجابة للحوادث وفق NIST"), minutes: 12 },
    { label: l("Detection, analysis and containment trade-offs", "الكشف والتحليل ومفاضات الاحتواء"), minutes: 13 },
    { label: l("Eradication, recovery and restoring clean", "الاستئصال والتعافي واستعادة نظيف"), minutes: 12 },
    { label: l("Communication, escalation and legal duties", "الاتصال والتصعيد والواجبات القانونية"), minutes: 11 },
    { label: l("Roles, command and the lessons-learned loop", "الأدوار والقيادة وحلقة الدروس المستفادة"), minutes: 11 },
    { label: l("Practical exercise and assessment", "التمرين العملي والتقييم"), minutes: 14 },
  ],
  introduction: l(
    "Prevention cannot be perfect; somewhere, sometime, an attacker will get through. Incident response is the disciplined set of steps an organisation follows when that happens, so that damage is limited, systems are restored safely, and the same failure is not repeated. This session follows the NIST SP 800-61 lifecycle — preparation, detection and analysis, containment, eradication, recovery and post-incident activity — and the roles, severity levels, trade-offs, communication and legal duties that make response fast and safe. The session closes with a lab where you order the response actions for a simulated ransomware incident.",
    "لا يمكن للوقاية أن تكون كاملة؛ ففي مكان ما ووقت ما سينجح مهاجم. والاستجابة للحوادث هي الخطوات المنضبطة التي تتبعها المؤسسة حين يحدث ذلك، لكي يُحدّ من الضرر وتُستعاد الأنظمة بأمان ولا يتكرر نفس الإخفاق. وتتبع هذه الجلسة دورة NIST SP 800-61 — الاستعداد والكشف والتحليل والاحتواء والاستئصال والتعافي وما بعد الحادثة — والأدوار ودرجات الشدة والمفاضات والواجبات الاتصالية والقانونية التي تجعل الاستجابة سريعة وآمنة. وتنتهي الجلسة بمختبر ترتب فيه إجراءات الاستجابة لحادثة فدية محاكاة.",
  ),
  sections: [
    {
      h: l("1. Events, incidents and preparation", "1. الأحداث والحوادث والاستعداد"),
      p: [
        l(
          "An event is any observable occurrence — a login, a blocked packet, a failed scan. An incident is an event, or a series of events, that actually or potentially compromises confidentiality, integrity or availability, or violates policy. A breach is an incident in which protected data was actually accessed or disclosed without authorisation, and it often triggers legal notification duties. Not every alert is an incident; the job of detection and analysis is to triage — separate the noise from the signal and confirm what is real.",
          "الحدث هو أي واقعة ملحوظة — تسجيل دخول أو حزمة محجوبة أو فحص فاشل. والحادثة حدث أو سلسلة أحداث تنتهك فعليًا أو احتماليًا السرية أو السلامة أو التوافر أو تخالف السياسة. والاختراق حادثة طُّلع فيها على بيانات محمية أو كُشفت دون تصريح، وغالبًا ما يستوجب التزامات إخطار قانونية. وليس كل تنبيه حادثة؛ فمهمة الكشف والتحليل هي الفرز — فصل الضوضاء عن الإشارة وتأكيد ما هو حقيقي.",
        ),
        l(
          "Preparation decides how the incident goes before anything happens. Write an incident response plan and playbooks for common scenarios — ransomware, phishing, a lost device, a data leak — so the team is not improvising under pressure. Name an incident commander and set roles: technical lead, communications, legal, HR and an executive sponsor. Keep an out-of-band contact list, because the systems you normally use (e-mail, chat, phones) may be the very things under attack. Verify that logging, backups and forensic tooling work, and run tabletop exercises so people practise before the real crisis.",
          "يحدد الاستعداد كيف ستجري الحادثة قبل أن يحدث أي شيء. فاكتب خطة استجابة وأدلة تشغيل لسيناريوهات شائعة — فدية وتصيّد وجهاز مفقود وتسريب بيانات — كي لا يبتكرالفريق تحت الضغط. وسمِّ قائد الحادثة وحدّد الأدوار: القيادة التقنية والاتصال والقانونية والموارد البشرية والراعي التنفيذي. وأبقِ قائمة اتصال خارج القناة، لأن الأنظمة التي تستخدمها عادة (البريد والدرّد والهاتف) قد تكون نفسها المهاجمة. وتحقق من عمل التسجيل والنسخ الاحتياطي والأدوات الجنائية، ونفّذ تمارين طاولة ليتدرب الناس قبل الأزمة الحقيقية.",
        ),
      ],
      callout: { kind: "key", text: l("Preparation is the phase that happens when there is no incident. Everything done in the first minutes of a real incident is possible only because it was decided, written and rehearsed in advance.", "الاستعداد هو المرحلة التي تقع عندما لا توجد حادثة. فكل ما يُفعل في الدقائق الأولى من حادثة حقيقية لا يمكن أن يحدث إلا لأنه حُدّد وكتب ومُثّل مسبقًا.") },
    },
    {
      h: l("2. The NIST incident response lifecycle", "2. دورة الاستجابة للحوادث وفق NIST"),
      p: [
        l(
          "NIST SP 800-61 describes the response as a lifecycle. In practice it is often expanded into six ordered steps, each with a clear goal. The sequence matters: you cannot contain what you have not confirmed, and you must not restore what you have not yet cleaned. The table summarises the phases and the typical actions in each.",
          "يصف NIST SP 800-61 الاستجابة كدورة. وعمليًا تُوسَّع غالبًا إلى ست خطوات مرتبة لكل منها هدف واضح. ويهم التسلسل: فلا يمكنك احتواء ما لم تؤكده، ولا يجب أن تستعيد ما لم تنظفه بعد. ويوجز الجدول المراحل والإجراءات النموذجية في كل منها.",
        ),
      ],
      table: {
        head: [l("Phase", "المرحلة"), l("Goal", "الهدف"), l("Typical actions", "إجراءات نموذجية")],
        rows: [
          [l("1 Preparation", "1 الاستعداد"), l("Be ready", "أن نكون جاهزين"), l("Plans, playbooks, team, tools, contacts, backups, exercises", "خطط وأدلة تشغيل وفريق وأدوات وجهات اتصال ونسخ وتمارين")],
          [l("2 Detection & analysis", "2 الكشف والتحليل"), l("Confirm and scope", "تأكيد الحادثة وتحديد نطاقها"), l("Triage alerts, set severity, build a timeline and case log", "فرز التنبيهات وضبط الشدة وبناء خط زمني وسجل حالة")],
          [l("3a Containment", "3أ الاحتواء"), l("Stop the spread", "إيقاف الانتشار"), l("Isolate hosts, disable accounts, block IPs and domains", "عزل الأجهزة وتعطيل الحسابات وحجب العناوين والنطاقات")],
          [l("3b Eradication", "3ب الاستئصال"), l("Remove the cause", "إزالة السبب"), l("Delete malware, close the entry point, patch, reset credentials", "حذف البرمجية وإغلاق نقطة الدخول والترقيع وإعادة تعيين بيانات الدخول")],
          [l("3c Recovery", "3ج التعافي"), l("Return to normal safely", "العودة للوضع الطبيعي بأمان"), l("Rebuild and restore from clean backups, monitor for re-infection", "إعادة بناء واستعادة من نسخ نظيفة ومراقبة لإعادة الإصابة")],
          [l("4 Post-incident", "4 ما بعد الحادثة"), l("Learn and improve", "التعلم والتحسين"), l("Lessons-learned review, report, update plans and controls", "مراجعة الدروس وتقرير وتحديث الخطط والضوابط")],
        ],
      },
      callout: { kind: "key", text: l("Contain before you eradicate, and eradicate before you recover. Restoring systems while the attacker still has access only gives them new machines to control.", "احتوِ قبل أن تستأصل واستأصل قبل أن تتعافى. فاستعادة الأنظمة بينما لا يزال المهاجم يملك الوصول لا تعطيه سوى أجهزة جديدة ليتحكم بها.") },
    },
    {
      h: l("3. Detection and analysis: confirming and scoping", "3. الكشف والتحليل: التأكيد وتحديد النطاق"),
      p: [
        l(
          "Detection and analysis turn an alert into a confirmed, scoped incident. Triage each alert: is it a real incident, a false positive, or a known benign event? Confirm what happened, when it started, which systems and accounts are affected, and whether data was exposed. Set the severity — for example P1 critical (active data theft or ransomware spreading), P2 high, P3 medium, P4 low — so response speed and escalation match the impact. From the first minute, build a timeline of events and a case log of every action, decision and time, because the log becomes the record of the response and the basis of any report.",
          "يحوّل الكشف والتحليل التنبيه إلى حادثة مؤكدة محددة النطاق. فالفرز لكل تنبيه: هل هي حادثة حقيقية أم إيجابية كاذبة أم حدث سليم معروف؟ وأكد ما حدث ومتى بدأ وأي الأنظمة والحسابات المتأثرة وهل كُشفت بيانات. وحدد الشدة — مثلًا P1 حرجة (سرقة بيانات نشطة أو فدية تنتشر) وP2 عالية وP3 متوسطة وP4 منخفضة — لتتناسب سرعة الاستجابة والتصعيد مع الأثر. ومن اللحظة الأولى أنشئ خطًا زمنيًا للأحداث وسجل حالة بكل إجراء وقرار ووقت، لأن السجل يصبح سجل الاستجابة وأساس أي تقرير.",
        ),
        l(
          "Determining scope is often the hardest part. A single compromised account may lead to lateral movement across many systems, so confirm the blast radius before acting at scale. Ask what the attacker could reach, what data is at risk, and whether the incident is contained to one segment or spreading. Scope drives every later decision: who to involve, how fast to escalate, and how far containment must reach.",
          "غالبًا ما يكون تحديد النطاق هو الجزء الأصعب. فالحساب المخترق الواحد قد يؤدي إلى حركة جانبية عبر أنظمة كثيرة، لذا أكد دائرة التأثير قبل التصرف على نطاق واسع. واسأل ما الذي يستطيع المهاجم الوصول إليه وأي البيانات في خطر وهل الحادثة محصورة في قطاع واحد أم تنتشر. ويقود النطاق كل قرار لاحق: من تشركه وكيف تصعد بسرعة وإلى أي مدى يجب أن يصل الاحتواء.",
        ),
      ],
      callout: { kind: "key", text: l("Analysis before scale: confirm scope and severity before you act across many systems, so containment targets the real threat and does not waste effort or tip off a sophisticated attacker.", "التحليل قبل النطاق: أكد النطاق والشدة قبل أن تتصرف عبر أنظمة كثيرة، لكي يستهدف الاحتواء التهديد الحقيقي ولا يهدّر الجهد أو ينبه مهاجمًا متمرسًا.") },
    },
    {
      h: l("4. Containment decisions and trade-offs", "4. قرارات الاحتواء والمفاضات"),
      p: [
        l(
          "Containment is a trade-off. Pulling a server offline stops damage but interrupts the business, may destroy volatile evidence, or may alert a sophisticated attacker who then hides. Short-term containment — network isolation, disabling accounts, blocking IPs and domains — buys time by limiting the spread while you analyse. Long-term containment — temporary patches, rebuilt network segments, a quarantine network — keeps essential operations running during the clean-up. The right choice depends on severity, the value of the affected service, and what evidence must be preserved.",
          "الاحتواء مفاضلة. فإخراج خادم من الخدمة يوقف الضرر لكنه يقطع الأعمال وقد يتلف أدلة متطايرة أو ينبّه مهاجمًا متمرسًا فيختبئ. والاحتواء قصير الأمد — عزل الشبكة وتعطيل الحسابات وحجب العناوين والنطاقات — يكسب وقتًا بتقييد الانتشار بينما تحلل. والاحتواء طويل الأمد — رقع مؤقتة وقطاعات أعيد بناؤها وشبكة حجر صحي — يبقي العمليات الأساسية جارية أثناء التنظيف. ويعتمد الاختيار الصحيح على الشدة وقيمة الخدمة المتأثرة وما الأدلة التي يجب حفظها.",
        ),
        l(
          "Containment must preserve evidence. Isolating a suspect machine is usually wiser than powering it off, because powering off destroys the volatile data in memory that can reveal processes, connections and keys. Preserve the state you need before you change it, and document every containment action and its reason in the case log. A containment decision that stops the spread but loses the evidence is a partial success at best.",
          "يجب أن يحفظ الاحتواء الأدلة. فعزل الجهاز المشتبه به عادة أحكم من إطفائه، لأن الإطفاء يتلف البيانات المتطايرة في الذاكرة التي قد تكشف العمليات والاتصالات والمفاتيح. واحفظ الحالة التي تحتاجها قبل أن تغيّرها، ووثّق كل إجراء احتواء وسببه في سجل الحالة. وقرار الاحتواء الذي يوقف الانتشار لكنه يفقد الدليل هو نجاح جزئي على أحسن تقدير.",
        ),
      ],
      callout: { kind: "key", text: l("Contain to limit the spread, but contain in a way that preserves the evidence you will need to eradicate the cause and explain what happened.", "احتواء لتقييد الانتشار، لكن احتواء بطريقة تحفظ الأدلة التي ستحتاجها لاستئصال السبب وشرح ما حدث.") },
    },
    {
      h: l("5. Eradication, recovery and restoring clean", "5. الاستئصال والتعافي واستعادة نظيف"),
      p: [
        l(
          "Eradication removes the cause of the incident: delete the malware, close the entry point that was used, apply patches, and reset the credentials that were compromised. Recovery then returns the organisation to normal — but only from a clean state. Rebuild or restore from verified clean backups, because restoring from a backup taken after the attacker was inside only re-infects the system. After recovery, monitor closely for signs of re-infection and confirm the entry point is truly closed before declaring the incident over.",
          "يزيل الاستئصال سبب الحادثة: حذف البرمجية الخبيثة وإغلاق نقطة الدخول التي استُخدمت وتطبيق الرقع وإعادة تعيين بيانات الدخول التي اختُرقلت. ثم يعيد التعافي المؤسسة إلى الوضع الطبيعي — ولكن فقط من حالة نظيفة. فأعد البناء أو استعد من نسخ احتياطية نظيفة موثقة، لأن الاستعادة من نسخة التُقطت بعد دخول المهاجم لا تُعيد إصابة النظام فحسب. وبعد التعافي راقب عن كثب علامات إعادة الإصابة وتأكد من إغلاق نقطة الدخول حقًا قبل الإعلان عن انتهاء الحادثة.",
        ),
        l(
          "The order is the discipline: contain first so the attacker cannot reach new systems, eradicate next so the cause is gone, and recover last so you do not build on a still-infected foundation. Jumping ahead — restoring before cleaning, or cleaning before containing — undoes the work and lets the attacker back in. Recovery is not finished when systems are back up; it is finished when they are clean, monitored and the entry point is closed.",
          "التسلسل هو الضبط: احتواء أولًا كي لا يصل المهاجم إلى أنظمة جديدة، ثم استئصال كي يختفي السبب، وأخيرًا تعافٍ كي لا تبني على أساس لا يزال مصابًا. فالقفز للأمام — استعادة قبل التنظيف أو تنظيف قبل الاحتواء — يبطل العمل ويعيد المهاجم إلى الداخل. ولا ينتهي التعافي عندما تعود الأنظمة للعمل؛ بل ينتهي عندما تكون نظيفة ومراقبتها مغلقة نقطة الدخول.",
        ),
      ],
      callout: { kind: "key", text: l("Never restore from a backup you cannot prove is clean, and never declare recovery before the entry point is closed and monitored.", "لا تستعد أبدًا من نسخة لا تستطيع إثبات أنها نظيفة، ولا تعلن التعافي قبل إغلاق نقطة الدخول ومراقبتها.") },
    },
    {
      h: l("6. Communication, escalation and legal duties", "6. الاتصال والتصعيد والواجبات القانونية"),
      p: [
        l(
          "Communication is part of the response, not something done after it. Keep an accurate case log; speak only through designated spokespeople; and involve legal counsel early, because data-protection law and contracts may impose notification duties. Under GDPR, a personal-data breach must generally be reported to the regulator within 72 hours of the organisation becoming aware of it, and affected individuals may also need to be told. Notify only as the law and the plan require, and never discuss the incident over channels that may themselves be compromised.",
          "الاتصال جزء من الاستجابة لا يُفعل بعدها. فأبقِ سجل حالة دقيقًا، وتحدث فقط عبر متحدثين محددين، وأشرك المستشار القانوني مبكرًا لأن قانون حماية البيانات والعقود قد يُلزمان بالإخطار. ووفق GDPR يجب عمومًا إبلاغ الجهة التنظيمية عن تسريب بيانات شخصية خلال 72 ساعة من علم المؤسسة به، وقد يحتاج الأفراد المتأثرون أيضًا إلى إخطارهم. ولا تُبلغ إلا بقدر ما يفرض القانون والخطة، ولا تناقش الحادثة عبر قنوات قد تكون مخترقة هي نفسها.",
        ),
        l(
          "Escalation must match the severity. A P1 critical incident reaches the incident commander, management and legal immediately; a lower-severity event may be handled by the on-call team. Be factual and never speculative with customers, media or staff — say what is known, what is not known, what is being done, and when the next update will come. A clear, honest update protects trust far better than a premature, inaccurate one.",
          "يجب أن يوافق التصعيد الشدة. فتصل الحادثة P1 الحرجة إلى قائد الحادثة والإدارة والجهة القانونية فورًا، بينما قد يعالج فريق المناوبة حدثًا منخفض الشدة. وكن واقعيًا ولا تخمينيًا مع العملاء أو الإعلام أو الموظفين — وقل المعروف وغير المعروف وما يُفعل وموعد التحديث التالي. فالتحديث الواضح الصادق يحمي الثقة أفضل بكثير من تحديث مبكر غير دقيق.",
        ),
      ],
      callout: { kind: "key", text: l("Involve legal early, notify only as the law requires, and communicate through designated channels with facts, not speculation.", "أشرك الجهة القانونية مبكرًا، وأبلغ فقط بقدر ما يفرض القانون، وتواصل عبر قنوات محددة بحقائق لا تخمين.") },
    },
    {
      h: l("7. Roles, command and the lessons-learned loop", "7. الأدوار والقيادة وحلقة الدروس المستفادة"),
      p: [
        l(
          "Every incident needs a clear owner. The incident commander coordinates the response and makes the key containment and escalation calls, backed by a technical lead, a communications owner, legal and HR, and an executive sponsor who authorises decisions that affect the business. One person is in charge so that decisions are not delayed by ambiguity. The case log is the shared memory: who did what, when, why, and what was decided, so the response can be reconstructed and defended later.",
          "تحتاج كل حادثة إلى صاحب واضح. فيقيّم قائد الحادثة الاستجابة ويجري قرارات الاحتواء والتصعيد الرئيسية، مدعومًا بقائد تقني ومسؤول اتصال وجهة قانونية وقسم الموارد البشرية وراعٍ تنفيذي يصرّح بالقرارات التي تؤثر في الأعمال. شخص واحد مسؤول كي لا تتأخر القرارات بسبب الغموض. وسجل الحالة هو الذاكرة المشتركة: من فعل ماذا ومتى ولماذا وما القرار، لكي يمكن إعادة بناء الاستجابة والدفاع عنها لاحقًا.",
        ),
        l(
          "The post-incident review closes the loop. Hold a blameless lessons-learned meeting: what happened, how it was detected, how the response went, what worked and what failed, and what controls, plans or detections to change. Write a report, update the plan and playbooks, and feed the findings back into preparation — better detection rules, clearer playbooks, stronger backups, more training. A blameless review turns a painful incident into the cheapest improvement the organisation will ever get.",
          "تغلق المراجعة بعد الحادثة الحلقة. فاعقد اجتماع دروس مستفادة بلا لوم: ماذا حدث وكيف كُشف وكيف سارت الاستجابة وما نجح وما فشل وما الضوابط أو الخطط أو الكشفات التي يجب تغييرها. واكتب تقريرًا وحدّد الخطة وأدلة التشغيل وغذّ النتائج في الاستعداد — قواعد كشف أفضل وأدلة أوضح ونسخ احتياطية أقوى وتدريب أكثر. وتحوّل المراجعة بلا لوم الحادثة المؤلمة إلى أرخص تحسين ستحصل عليه المؤسسة أبدًا.",
        ),
      ],
      callout: { kind: "key", text: l("One commander, one case log, and a blameless review: clear ownership during the crisis and a loop that makes the next incident smaller.", "قائد واحد وسجل حالة واحد ومراجعة بلا لوم: ملكية واضحة أثناء الأزمة وحلقة تجعل الحادثة التالية أصغر.") },
    },
    {
      h: l("8. Bringing it together: the first hour", "8. جمع الأفكار: الساعة الأولى"),
      p: [
        l(
          "The first hour of a real incident is the test of everything prepared. The on-call analyst confirms the alert is a real incident and sets severity, the commander activates the plan and roles, containment limits the spread while preserving evidence, and the case log starts. Communication is factual and legal is engaged. No single action is heroic on its own; the value comes from the order: prepare, detect and confirm, contain, eradicate, recover, and learn. Practising that order — as you will in the lab — is what turns panic into a controlled, recoverable response.",
          "الساعة الأولى من حادثة حقيقية هي اختبار لكل ما أُعدّ. فالمحلل المناوب يؤكد أن التنبيه حادثة حقيقية ويضبط الشدة، وينشئ القائد الخطة والأدوار، ويحتوي الاحتواء لتقييد الانتشار مع حفظ الأدلة، ويبدأ سجل الحالة. والاتصال واقعي والجهة القانونية مشتركة. ولا يوجد إجراء واحد بطولي بذاته؛ بل تأتي القيمة من التسلسل: استعداد وكشف وتأكيد واحتواء واستئصال وتعافٍ وتعلّم. ومجربة ذلك التسلسل — كما ستفعل في المختبر — هو ما يحوّل الذعر إلى استجابة منضبطة قابلة للتعافي.",
        ),
      ],
    },
  ],
  diagram: {
    kind: "cycle",
    title: l("NIST incident response lifecycle", "دورة الاستجابة للحوادث وفق NIST"),
    caption: l("Lessons learned feed back into preparation, so each incident makes the organisation harder to attack next time.", "تغذي الدروس المستفادة الاستعداد فتجعل كل حادثة المؤسسة أصعب اختراقًا في المرة التالية."),
    nodes: [
      { label: l("Preparation", "الاستعداد"), desc: l("Plans, team, tools, backups, exercises", "خطط وفريق وأدوات ونسخ وتمارين") },
      { label: l("Detection & analysis", "الكشف والتحليل"), desc: l("Confirm, scope, set severity", "تأكيد وتحديد النطاق وضبط الشدة") },
      { label: l("Containment", "الاحتواء"), desc: l("Stop the spread, preserve evidence", "إيقاف الانتشار وحفظ الأدلة") },
      { label: l("Eradication", "الاستئصال"), desc: l("Remove cause, fix entry point", "إزالة السبب وإصلاح نقطة الدخول") },
      { label: l("Recovery", "التعافي"), desc: l("Restore clean, monitor", "استعادة نظيفة ومراقبة") },
      { label: l("Lessons learned", "الدروس المستفادة"), desc: l("Report, improve controls and plans", "تقرير وتحسين الضوابط والخطط") },
    ],
  },
  examples: [
    l(
      "A single failed login is a normal event. Twenty failures from one IP trying root, admin, test and oracle, followed by a success for admin, is a confirmed incident: an attacker has likely gained access, and the response must begin — confirm severity, contain the host and account, and start the case log.",
      "تكون محاولة دخول فاشلة واحدة حدثًا طبيعيًا. لكن عشرين محاولة فاشلة من عنوان واحد يجرّر root وadmin وtest وoracle ثم نجاح لـ admin هو حادثة مؤكدة: فالمهاجم ربما نجح في الوصول، ويجب أن تبدأ الاستجابة — تأكيد الشدة واحتواء الجهاز والحساب وبدء سجل الحالة.",
    ),
    l(
      "An organisation that skipped preparation improvises during a ransomware event: no commander, no playbook, no out-of-band contacts. Hours are lost, backups are re-infected because they were taken after the attacker entered, and the same gaps remain open for the next attack. A prepared plan, ordered correctly, avoids each of these failures.",
      "المؤسسة التي تخلفت عن الاستعداد تبدع أثناء حادثة فدية: لا قائد ولا دليل تشغيل ولا جهات اتصال خارج القناة. فتُهدر الساعات وتُعاد إصابة النسخ الاحتياطية لأنها التُقطت بعد دخول المهاجم، وتبقى نفس الثغرات مفتوحة لل атак التالي. وتجنب الخطة المستعدّة المرتبة كل واحد من هذه الإخفاقات.",
    ),
    l(
      "A blameless lessons-learned review after a breach finds that detection missed the initial access for months. The finding feeds back into preparation: new detection rules for that behaviour, a tighter playbook, and better monitoring — so the next attempt is caught in minutes, not months.",
      "تكتشف مراجعة دروس مستفادة بلا لوم بعد اختراق أن الكشف أخطأ الدخول الأولي لأشهر. وتُغذّي النتيجة الاستعداد: قواعد كشف جديدة لهذا السلوك ودليل تشغيل أضيق ومراقبة أفضل — ف يُكتشف المحاول التالي في دقائق لا في أشهر.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A company learns of a breach from an external party, not its own response team. The incident had been spreading for weeks because there was no commander, no severity model and no playbook; containment came too late and re-infected backups delayed recovery. The post-incident review traced every failure back to missing preparation.",
      "تتعلم شركة بالاختراق من طرف خارجي لا من فريق الاستجابة نفسه. وكانت الحادثة تنتشر لأسابيع لأنه لا قائد ولا نموذج شدة ولا دليل تشغيل؛ فجاء الاحتواء متأخرًا وأعادت الإصابة النسخ الاحتياطية تأخير التعافي. ورَدّت المراجعة بعد الحادثة كل إخفاق إلى غياب الاستعداد.",
    ),
    l(
      "A ransomware incident is declared P1 critical. The commander activates the plan, isolates infected hosts without powering them off, and preserves memory evidence. Legal is engaged within the hour, and the regulator is notified within the 72-hour GDPR window. Systems are rebuilt from verified clean backups only after the entry point is closed and monitored.",
      "تُعلن حادثة فدية P1 حرجة. فينشئ القائد الخطة ويعزز الأجهزة المصابة دون إطفائها ويحفظ أدلة الذاكرة. وتشارك الجهة القانونية خلال الساعة ويُبلغ الجهة التنظيمية ضمن نافذة GDPR البالغة 72 ساعة. وتُعاد بناء الأنظمة من نسخ نظيفة موثقة فقط بعد إغلاق نقطة الدخول ومراقبتها.",
    ),
    l(
      "A lower-severity event — a single account showing odd logins — is triaged by the on-call team, confirmed as an attempted compromise, and handled locally: reset the account, force re-registration, and add a detection rule. It does not reach the commander, but the case log records it and the lessons feed back into detection.",
      "يُفرز حدث منخفض الشدة — حساب واحد يُظهر تسجيلات دخول غريبة — من قبل فريق المناوبة، ويُؤكد كمحاولة اختراق، ويُعالج محليًا: إعادة تعيين الحساب وإجبار إعادة التسجيل وإضافة قاعدة كشف. ولا يصل إلى القائد، لكن سجل الحالة يسجله وتغذي الدروس الكشف.",
    ),
  ],
  instructorDemo: l(
    "Demonstrate the lab's ordering tool with a visible example: show the six ransomware response actions shuffled, then reason aloud about which phase each belongs to before placing them in order. Emphasise the non-negotiable sequence — activate the plan, confirm scope, contain, eradicate, recover clean, then learn — and why restoring before containing is the classic mistake.",
    "عرض أداة الترتيب في المختبر بمثال مرئي: اعرض إجراءات الاستجابة الستة للفدية بعد خلطها، ثم فكّر بصوت عالٍ حول المرحلة التي ينتمي إليها كل إجراء قبل وضعها بالترتيب. وركّز على التسلسل غير القابل للمساومة — تفعيل الخطة وتأكيد النطاق والاحتواء والاستئصال والتعافي النظيف ثم التعلّم — ولماذا يُعد التعافي قبل الاحتواء الخطأ النمطي.",
  ),
  exercises: [
    {
      title: l("Order a ransomware response", "ترتيب استجابة الفدية"),
      instructions: l(
        "In the lab, read the six ransomware response actions and place them in the correct NIST order. After checking, correct any misplaced action and explain in one sentence why the order matters.",
        "في المختبر، اقرأ إجراءات الاستجابة الستة للفدية وضعها بالترتيب الصحيح وفق NIST. وبعد التحقق، صحّح أي إجراء في غير موضعه واشرح في جملة واحدة لماذا يهم الترتيب.",
      ),
      expected: l("The correct order is: activate the plan, confirm scope and severity, contain, eradicate, recover from clean backups, then hold the lessons-learned review.", "الترتيب الصحيح: تفعيل الخطة، ثم تأكيد النطاق والشدة، ثم الاحتواء، ثم الاستئصال، ثم التعافي من نسخ نظيفة، ثم مراجعة الدروس المستفادة."),
    },
    {
      title: l("Write the first management message", "كتابة أول رسالة للإدارة"),
      instructions: l(
        "Draft the first message to management for a confirmed ransomware incident: state what is known, what is not known, the current actions, and the time of the next update. Keep it factual and non-speculative.",
        "صغ أول رسالة للإدارة لحادثة فدية مؤكدة: اذكر المعروف وغير المعروف والإجراءات الحالية وموعد التحديث التالي. واجعلها واقعية غير تخمينية.",
      ),
      expected: l("A short message covering the confirmed fact, the unknown scope, the containment actions underway, and a firm time for the next update.", "رسالة قصيرة تغطي الحقيقة المؤكدة والنطاق غير المعروف وإجراءات الاحتواء الجارية ووقت محدد للتحديث التالي."),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can distinguish an event from an incident and a breach, recite the NIST response lifecycle in order, justify containment trade-offs that preserve evidence, explain the eradicate-before-recover discipline, state communication and GDPR notification duties, and correctly order the response actions for a simulated ransomware incident.",
    "بنهاية الجلسة يستطيع المتعلمون التمييز بين الحدث والحادثة والاختراق، وتلاوة دورة الاستجابة وفق NIST بالترتيب، وتبرير مفاضات الاحتواء التي تحفظ الأدلة، وشرح ضبط الاستأصال قبل التعافي، وذكر واجبات الاتصال وإخطار GDPR، وترتيب إجراءات الاستجابة لحادثة فدية محاكاة ترتيبًا صحيحًا.",
  ),
  commonMistakes: [
    l(
      "Jumping to recovery: restoring systems before containment and eradication, so the attacker is still inside and re-infects the restored systems.",
      "القفز إلى التعافي: استعادة الأنظمة قبل الاحتواء والاستئصال، فيظل المهاجم داخلًا ويُعيد إصابة الأنظمة المستعادة.",
    ),
    l(
      "Powering off suspect machines immediately, destroying the volatile memory evidence before it can be captured.",
      "إطفاء الأجهزة المشتبه بها فورًا، مما يتلف أدلة الذاكرة المتطايرة قبل التقاطها.",
    ),
    l(
      "Communicating over possibly compromised channels, or making speculative statements to customers and media before facts are confirmed.",
      "التواصل عبر قنوات قد تكون مخترقة، أو التصريح بتخمينات للعملاء والإعلام قبل تأكيد الحقائق.",
    ),
    l(
      "Skipping the lessons-learned review, so the same detection gaps and plan weaknesses cause the next incident.",
      "تجاوز مراجعة الدروس المستفادة، فتتسبب نفس ثغرات الكشف وضعف الخطة في الحادثة التالية.",
    ),
  ],
  bestPractices: [
    l(
      "Write and rehearse a plan and playbooks; prepare contacts, tools, backups and detections before any incident.",
      "اكتب خطة وأدلة تشغيل ومُثّل عليها؛ واستعد جهات الاتصال والأدوات والنسخ والكشفات قبل أي حادثة.",
    ),
    l(
      "Confirm scope and severity before acting at scale, and record every action and decision in a case log from the first minute.",
      "أكد النطاق والشدة قبل التصرف على نطاق واسع، وسجّل كل إجراء وقرار في سجل حالة من اللحظة الأولى.",
    ),
    l(
      "Contain to limit spread but preserve evidence; eradicate fully before recovering; recover only from verified clean backups.",
      "احتواء لتقييد الانتشار مع حفظ الأدلة؛ واستأصل بالكامل قبل التعافي؛ واستعد فقط من نسخ نظيفة موثقة.",
    ),
    l(
      "Involve legal early, notify only as the law requires, and communicate factual, scheduled updates through designated channels.",
      "أشرك الجهة القانونية مبكرًا، وأبلغ فقط بقدر ما يفرض القانون، وتواصل بحيث تحديثات واقعية مجدولة عبر قنوات محددة.",
    ),
    l(
      "Hold a blameless lessons-learned review and feed the findings back into preparation, detection and playbooks.",
      "عقد مراجعة دروس مستفادة بلا لوم وغذّ النتائج في الاستعداد والكشف وأدلة التشغيل.",
    ),
  ],
  keyTakeaways: [
    l("An event is an observable occurrence; an incident compromises or violates policy; a breach exposes protected data and may trigger legal duties.", "الحدث واقعة ملحوظة؛ والحادثة تُنتهك فيها السياسة أو تهدد الأمن؛ والاختراق يكشف بيانات محمية وقد يستوجب واجبات قانونية."),
    l("Follow the lifecycle in order: prepare, detect and confirm scope, contain, eradicate, recover clean, then learn.", "اتبع الدورة بالترتيب: استعداد وكشف وتأكيد النطاق واحتواء واستئصال وتعافٍ نظيف ثم تعلّم."),
    l("Contain before you eradicate, and eradicate before you recover — restoring while the attacker is inside only re-infects.", "احتواء قبل الاستأصال واستأصال قبل التعافي — فالاستعادة بينما المهاجم داخل تُعيد الإصابة فحسب."),
    l("One commander, one case log, factual communication, and early legal involvement drive a controlled response.", "قائد واحد وسجل حالة واحد واتصال واقعي ومشاركة قانونية مبكرة تقود استجابة منضبطة."),
    l("A blameless lessons-learned review turns a painful incident into the organisation's cheapest improvement.", "تحوّل مراجعة الدروس المستفادة بلا لوم الحادثة المؤلمة إلى أرخص تحسين للمؤسسة."),
  ],
  lab: {
    title: l("Lab 10 — Incident Response: Ordering the First Hour of a Ransomware Incident", "المختبر 10 — الاستجابة للحوادث: ترتيب الساعة الأولى من حادثة فدية"),
    scenario: l(
      "At 07:50 several staff report that files on the shared drive have changed extension to '.locked' and a ransom note is on the screen. You are the on-call analyst. Use the ordering simulator (display only; nothing is executed or changed on a real system) to put the response actions in the correct order, then explain why the sequence matters and what evidence to preserve first.",
      "في الساعة 07:50 يبلّغ عدة موظفين أن ملفات القرص المشترك تغيّر امتدادها إلى «.locked» وأن رسالة فدية تظهر على الشاشة. أنت المحلل المناوب. استخدم محاكي الترتيب (عرض فقط؛ لا يُنفذ أو يُغيّر شيء على أي نظام حقيقي) لترتيب إجراءات الاستجابة بالترتيب الصحيح، ثم اشرح لماذا يهم التسلسل وما الأدلة التي تُحفظ أولًا.",
    ),
    safety: l(
      "This is a tabletop simulation using a display-only ordering tool; nothing is executed, connected or changed on any real system. In real incidents, follow your organisation's plan, involve management and legal counsel, and never contact the attackers or pay a ransom on your own authority.",
      "هذه محاكاة على الطاولة باستخدام أداة ترتيب للعرض فقط؛ ولا يُنفذ أو يُوصَل أو يُغيّر شيء على أي نظام حقيقي. وفي الحوادث الحقيقية اتبع خطة مؤسستك وأشرك الإدارة والمستشار القانوني ولا تتواصل مع المهاجمين ولا تدفع فدية بسلطتك الخاصة.",
    ),
    steps: [
      l("Read the six response actions and decide which phase each belongs to", "اقرأ إجراءات الاستجابة الستة وحدد المرحلة التي ينتمي إليها كل إجراء"),
      l("Click the actions in your chosen order and press Check", "انقر على الإجراءات بالترتيب الذي اخترته واضغط تحقق"),
      l("Correct any misplaced action and explain in one sentence why order matters", "صحّح أي إجراء في غير موضعه واشرح في جملة واحدة لماذا يهم الترتيب"),
      l("List which evidence you would preserve first and why you would not power off the machines immediately", "اذكر الأدلة التي ستحفظها أولًا ولماذا لن تطفئ الأجهزة فورًا"),
      l("Write the first message to management: known, unknown, current actions, next update time", "اكتب أول رسالة للإدارة: المعروف وغير المعروف والإجراءات الحالية وموعد التحديث التالي"),
      l("Draft three lessons-learned questions: how they got in, why not detected earlier, did backups work", "صُغ ثلاثة أسئلة للدروس المستفادة: كيف دخلوا، لماذا لم يُكتشف مبكرًا، هل عملت النسخ"),
    ],
    expected: l(
      "The correct order is: activate the prepared plan and roles → confirm the ransomware and its scope and severity → contain by isolating hosts and protecting backups → eradicate by removing the malware and closing the entry point → recover from verified clean backups → hold the lessons-learned review — plus a short management message and a first-evidence list.",
      "الترتيب الصحيح: تفعيل الخطة والأدوار المعدة ← تأكيد الفدية ونطاقها وشددتها ← الاحتواء بعزل الأجهزة وحماية النسخ ← الاستئصال بإزالة البرمجية وإغلاق نقطة الدخول ← التعافي من نسخ نظيفة موثقة ← مراجعة الدروس المستفادة — مع رسالة قصيرة للإدارة وقائمة بالأدلة الأولى.",
    ),
    tool: "order",
    order: {
      prompt: l("Put the incident response steps in the correct order", "رتّب خطوات الاستجابة للحوادث بالترتيب الصحيح"),
      items: [
        { text: l("Activate the prepared incident response plan, open a case log and assign roles.", "تفعيل خطة الاستجابة المعدّة وفتح سجل حالة وتوزيع الأدوار."), hint: l("Preparation comes first.", "الاستعداد أولًا.") },
        { text: l("Confirm it is ransomware and identify affected systems, the first infected host and the severity.", "تأكيد أنها فدية وتحديد الأنظمة المتأثرة وأول جهاز مصاب والشدة."), hint: l("Analyse before acting at scale.", "حلّل قبل التصرف على نطاق واسع.") },
        { text: l("Isolate infected machines from the network, disable compromised accounts and protect backups.", "عزل الأجهزة المصابة عن الشبكة وتعطيل الحسابات المخترقة وحماية النسخ الاحتياطية."), hint: l("Contain to stop the spread.", "احتوِ لإيقاف الانتشار.") },
        { text: l("Remove the malware, close the initial entry point (e.g. exposed RDP), patch and reset credentials.", "إزالة البرمجية الخبيثة وإغلاق نقطة الدخول الأولى (مثل RDP مكشوف) والترقيع وإعادة تعيين بيانات الدخول."), hint: l("Eradicate before restoring.", "استأصل قبل الاستعادة.") },
        { text: l("Rebuild systems and restore data from verified clean backups; monitor closely.", "إعادة بناء الأنظمة واستعادة البيانات من نسخ نظيفة موثّقة والمراقبة اللصيقة."), hint: l("Recover only when the attacker is out.", "تعافَ فقط بعد خروج المهاجم.") },
        { text: l("Hold a lessons-learned review, write the report and update the plan and controls.", "عقد مراجعة دروس مستفادة وكتابة التقرير وتحديث الخطة والضوابط."), hint: l("Learn last, feed back to preparation.", "التعلّم أخيرًا وتغذية الاستعداد.") },
      ],
    },
    objectives: [
      l("Order the six response actions along the NIST lifecycle", "ترتيب إجراءات الاستجابة الستة على دورة NIST"),
      l("Justify why each action belongs in its phase", "تبرير سبب انتماء كل إجراء إلى مرحلته"),
      l("Explain the contain-before-eradicate-before-recover discipline", "شرح ضبط الاحتواء قبل الاستئصال قبل التعافي"),
      l("State which evidence to preserve first and why not to power off immediately", "ذكر أي الأدلة تُحفظ أولًا ولماذا لا تُطفأ الأجهزة فورًا"),
      l("Draft a factual management message and lessons-learned questions", "صياغة رسالة واقعية للإدارة وأسئلة للدروس المستفادة"),
    ],
    prerequisites: [
      l("Session 15: how alerts and detection trigger the response that begins this lifecycle", "الجلسة 15: كيف تُفعّل التنبيهات والكشف الاستجابة التي تبدأ هذه الدورة"),
      l("Basic understanding of the NIST incident response phases", "فهم أساسي لمراحل الاستجابة للحوادث وفق NIST"),
    ],
    environment: l(
      "The companion ordering simulator in a browser (display only). No real systems are isolated, erased, restored or changed. All actions are simulated on screen.",
      "محاكي الترتيب المرافق في متصفح (عرض فقط). لا تُعزل أو تُمحى أو تُستعاد أو تُغيّر أنظمة حقيقية. وجميع الإجراءات محاكاة على الشاشة.",
    ),
    tools: [
      l("Incident-response ordering simulator (companion browser tool, display only)", "محاكي ترتيب الاستجابة للحوادث (أداة متصفح مساندة، عرض فقط"),
      l("NIST SP 800-61 lifecycle reference (for the ordering discussion)", "مرجع دورة NIST SP 800-61 (لنقاش الترتيب"),
    ],
    authorization: l(
      "Scope: use the display-only simulator. Prohibited: disconnecting, erasing, restoring or otherwise changing any real system without written authorization, and contacting attackers or paying a ransom. Stop condition: if asked to take any action on a real system, stop and confirm authorization first.",
      "النطاق: استخدم محاكٍ العرض فقط. المحظور: فصل أو محو أو استعادة أو تغيير أي نظام حقيقي دون تصريح كتابي، والتواصل مع المهاجمين أو دفع فدية. شرط التوقف: إذا طُلب منك أي إجراء على نظام حقيقي، توقف وتحقق من التصريح أولًا.",
    ),
    detailedSteps: [
      {
        title: l("Read the six response actions", "اقرأ إجراءات الاستجابة الستة"),
        command: "Ordering simulator: read the shuffled actions",
        explanation: l(
          "Read the six preset response actions displayed in shuffled order: activate the plan and roles, confirm the ransomware and scope, isolate hosts and protect backups, remove the malware and close the entry point, rebuild and restore from clean backups, and hold the lessons-learned review. Note what each action does and which lifecycle phase it belongs to.",
          "اقرأ إجراءات الاستجابة الستة المسبقة المعروضة بترتيب مختلط: تفعيل الخطة والأدوار، وتأكيد الفدية ونطاقها، وعزل الأجهزة وحماية النسخ، وإزالة البرمجية وإغلاق نقطة الدخول، وإعادة البناء والاستعادة من نسخ نظيفة، وعقد مراجعة الدروس المستفادة. ولاحظ ما يفعله كل إجراء والمرحلة التي ينتمي إليها من الدورة.",
        ),
        expected: l("You can list the six actions and name the phase each belongs to.", "يمكنك سرد الإجراءات الستة وتسمية المرحلة التي ينتمي إليها كل منها."),
      },
      {
        title: l("Order the actions by phase", "ترتيب الإجراءات حسب المرحلة"),
        command: "Ordering simulator: click actions in order",
        explanation: l(
          "Click the actions in the order the NIST lifecycle requires: preparation (activate the plan), detection and analysis (confirm scope and severity), containment (isolate and protect), eradication (remove the cause and close the entry point), recovery (restore clean), and post-incident (lessons learned). Press Check when the list is complete.",
          "انقر على الإجراءات بالترتيب الذي تقتضيه دورة NIST: الاستعداد (تفعيل الخطة)، والكشف والتحليل (تأكيد النطاق والشدة)، والاحتواء (العزل والحماية)، والاستئصال (إزالة السبب وإغلاق نقطة الدخول)، والتعافي (استعادة نظيفة)، وما بعد الحادثة (الدروس المستفادة). واضغط تحقق عند اكتمال القائمة.",
        ),
        expected: l("You can place all six actions in the correct order and see the check result.", "يمكنك وضع الإجراءات الستة جميعها بالترتيب الصحيح وترى نتيجة التحقق."),
      },
      {
        title: l("Check and correct", "تحقق وصحّح"),
        command: "Ordering simulator: Check, then correct",
        explanation: l(
          "Press Check. Any misplaced action is flagged. Correct the order and re-check until all six are correct. For each action you corrected, explain in one sentence why it belongs in its phase — for example, why recovery must follow eradication and containment.",
          "اضغط تحقق. ويُشار إلى أي إجراء في غير موضعه. فصحّح الترتيب وأعد التحقق حتى تصح الإجراءات الستة كلها. ولكل إجراء صحّحته اشرح في جملة واحدة لماذا ينتمي إلى مرحلته — مثل سبب وجوب أن يأتي التعافي بعد الاستئصال والاحتواء.",
        ),
        expected: l("You can reach a correct order and justify each placement in one sentence.", "يمكنك الوصول إلى ترتيب صحيح وتبرير كل موضع في جملة واحدة."),
      },
      {
        title: l("Preserve evidence first", "احفظ الأدلة أولًا"),
        command: "Case log: first-evidence list",
        explanation: l(
          "List the evidence you would preserve first: running memory (processes, connections, keys), network state, disk images, and remote logs — in order of volatility. Explain why you would isolate the infected machines from the network but not power them off immediately: power-off destroys the most volatile evidence before it can be captured.",
          "اذكر الأدلة التي تُحفظ أولًا: الذاكرة الجارية (العمليات والاتصالات والمفاتيح) وحالة الشبكة وصور الأقراص والسجلات البعيدة — بحسب ترتيب التطاير. واشرح لماذا تعزل الأجهزة المصابة عن الشبكة لكن لا تطفئها فورًا: لأن الإطفاء يتلف الأدلة الأكثر تطايرًا قبل التقاطها.",
        ),
        expected: l("You can name the first evidence to preserve and explain why not to power off immediately.", "يمكنك ذكر أول الأدلة التي تُحفظ وشرح سبب عدم الإطفاء الفوري."),
      },
      {
        title: l("Write the first management message", "اكتب أول رسالة للإدارة"),
        command: "Case log: management message",
        explanation: l(
          "Draft the first message to management. State what is known (ransomware confirmed, X systems affected), what is not known (the initial entry point, whether data was exfiltrated), the current actions (containment underway, backups protected), and the time of the next update. Keep it factual and non-speculative.",
          "صغ أول رسالة للإدارة. واذكر المعروف (فدية مؤكدة، X من الأنظمة المتأثرة) وغير المعروف (نقطة الدخول الأولى، وهل سُرقت البيانات) والإجراءات الحالية (احتواء جارٍ والنسخ محمية) وموعد التحديث التالي. واجعلها واقعية غير تخمينية.",
        ),
        expected: l("You can draft a short message covering known, unknown, actions and next update time.", "يمكنك صياغة رسالة قصيرة تغطي المعروف وغير المعروف والإجراءات وموعد التحديث التالي."),
      },
      {
        title: l("Draft lessons-learned questions", "صُغ أسئلة للدروس المستفادة"),
        command: "Post-incident: lessons questions",
        explanation: l(
          "Draft three questions for the lessons-learned review: How did the attacker get in? Why was the initial access not detected earlier? Did the backups work as designed, and what should change for next time? These questions turn the incident into measurable improvement.",
          "صُغ ثلاثة أسئلة لمراجعة الدروس المستفادة: كيف دخل المهاجم؟ لماذا لم يُكشف الدخول الأولي مبكرًا؟ وهل عملت النسخ كما صممت، وما الذي يجب تغييره للمستقبل؟ فتحول هذه الأسئلة الحادثة إلى تحسين قابل للقياس.",
        ),
        expected: l("You can draft three review questions covering entry, detection and backups.", "يمكنك صياغة ثلاثة أسئلة للمراجعة تغطي الدخول والكشف والنسخ."),
      },
    ],
    troubleshooting: [
      {
        problem: l("An action seems plausible in more than one phase", "يبدو إجراء ما معقولًا في أكثر من مرحلة"),
        fix: l("Ask what the action achieves. Activating the plan is preparation; confirming scope is detection; isolation is containment; removing the cause is eradication; restoring is recovery; the review is post-incident. The phase is defined by the goal, not the words.", "اسأل ما الذي يحققه الإجراء. فتفعيل الخطة هو استعداد؛ وتأكيد النطاق كشف؛ والعزل احتواء؛ وإزالة السبب استئصال؛ والاستعادة تعافٍ؛ والمراجعة ما بعد الحادثة. وتُحدّد المرحلة بالهدف لا بالكلمات."),
      },
      {
        problem: l("Recovery is placed before containment", "يُوضع التعافي قبل الاحتواء"),
        fix: l("Remember that restoring while the attacker is still inside gives them new machines to control and re-infects the restored systems. Contain first, then eradicate, then recover.", "تذكّر أن الاستعادة بينما المهاجم داخل تعطيه أجهزة جديدة ليتحكم بها وتعيد إصابة الأنظمة المستعادة. فااحتواء أولًا ثم استأصل ثم تعافٍ."),
      },
      {
        problem: l("Unsure what evidence to preserve first", "لست متأكدًا مما تُحفظ الأدلة أولًا"),
        fix: l("Collect in order of volatility, most fleeting first: memory (processes, connections, keys), network state, then disk and remote logs. That is why you isolate but do not power off a suspect machine before capturing memory.", "اجمع بحسب ترتيب التطاير، الأسرع زوالًا أولًا: الذاكرة (العمليات والاتصالات والمفاتيح) وحالة الشبكة ثم القرص والسجلات البعيدة. ولهذا تعزل لكن لا تطفئ الجهاز المشتبه به قبل التقاط الذاكرة."),
      },
    ],
    deliverables: [
      l("The correctly ordered list of all six response actions", "قائمة مرتبة بشكل صحيح بجميع إجراءات الاستجابة الستة"),
      l("A one-sentence justification for each placement", "تبرير في جملة واحدة لكل موضع"),
      l("A first-evidence list with the power-off reasoning", "قائمة بالأدلة الأولى مع سبب عدم الإطفاء"),
      l("A draft management message and three lessons-learned questions", "مسودة رسالة للإدارة وثلاثة أسئلة للدروس المستفادة"),
      l("A short reflection linking the order to the NIST lifecycle", "تأمل قصير يربط الترتيب بدورة NIST"),
      l("A note on following the real organisation plan and involving legal", "ملاحظة عن اتباع خطة المؤسسة الحقيقية وإشراك الجهة القانونية"),
    ],
    rubric: [
      { criterion: l("All six actions ordered correctly along the NIST lifecycle", "ترتيب صحيح لجميع الإجراءات الستة على دورة NIST"), weight: 30 },
      { criterion: l("Each placement justified against the phase goal", "تبرير كل موضع مقابل هدف المرحلة"), weight: 20 },
      { criterion: l("Correct contain-before-eradicate-before-recover reasoning", "تبرير سليم للاحتواء قبل الاستئصال قبل التعافي"), weight: 20 },
      { criterion: l("Accurate first-evidence list and power-off reasoning", "قائمة دقيقة للأدلة الأولى وسبب عدم الإطفاء"), weight: 15 },
      { criterion: l("Factual management message and lessons-learned questions", "رسالة واقعية للإدارة وأسئلة للدروس المستفادة"), weight: 15 },
    ],
  },
  majorLabId: "lab-10",
  quiz: [
    {
      q: l("Which is the correct order of the response phases?", "ما الترتيب الصحيح لمراحل الاستجابة؟"),
      options: [
        l("Recovery → Containment → Detection", "التعافي ← الاحتواء ← الكشف"),
        l("Preparation → Detection & analysis → Containment/Eradication/Recovery → Post-incident", "الاستعداد ← الكشف والتحليل ← الاحتواء/الاستئصال/التعافي ← ما بعد الحادثة"),
        l("Eradication → Preparation → Detection", "الاستئصال ← الاستعداد ← الكشف"),
        l("Lessons learned → Preparation → Recovery", "الدروس ← الاستعداد ← التعافي"),
      ],
      answer: 1,
      why: l("This follows the NIST SP 800-61 lifecycle.", "يتبع ذلك دورة NIST SP 800-61."),
    },
    {
      q: l("Which term describes an incident in which protected data was actually accessed or disclosed?", "ما المصطلح الذي يصف حادثة طُّلع فيها على بيانات محمية أو كُشفت؟"),
      options: [
        l("Event", "حدث"),
        l("Incident", "حادثة"),
        l("Breach", "اختراق"),
        l("Alert", "تنبيه"),
      ],
      answer: 2,
      why: l("A breach is the incident where protected data is exposed, often triggering legal notification.", "الاختراق هو الحادثة التي تُكشف فيها البيانات المحمية، وغالبًا ما يستوجب إخطارًا قانونيًا."),
    },
    {
      q: l("Why create a forensic image instead of examining the original disk?", "لماذا ننشئ صورة جنائية بدل فحص القرص الأصلي؟"),
      options: [
        l("To preserve the original evidence unchanged", "للحفاظ على الدليل الأصلي دون تغيير"),
        l("To save disk space", "لتوفير مساحة القرص"),
        l("To speed up the computer", "لتسريع الحاسوب"),
        l("It is not important", "ليس مهمًا"),
      ],
      answer: 0,
      why: l("Working on a copy with matching hashes keeps the original admissible and unaltered.", "العمل على نسخة بتجزئات متطابقة يُبقي الأصل سليمًا ومقبولًا."),
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
      why: l("It is the documented trail that proves the evidence was not tampered with.", "هو السجل الموثق الذي يثبت أن الدليل لم يُعبث به."),
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
      q: l("Containment should come…", "ينبغي أن يأتي الاحتواء…"),
      options: [
        l("After full recovery", "بعد التعافي الكامل"),
        l("Before eradication and recovery", "قبل الاستئصال والتعافي"),
        l("Never", "أبدًا"),
        l("After the press release", "بعد البيان الصحفي"),
      ],
      answer: 1,
      why: l("Stop the spread first; otherwise cleanup and restore are undone.", "أوقف الانتشار أولًا وإلا ضاع التنظيف والاستعادة."),
    },
    {
      q: l("Under GDPR, a personal-data breach must generally be reported to the regulator within…", "وفق GDPR يجب الإبلاغ عن تسريب البيانات الشخصية إلى الجهة التنظيمية عمومًا خلال…"),
      options: [
        l("72 hours of becoming aware", "72 ساعة من العلم به"),
        l("1 year", "سنة"),
        l("7 days after the audit", "7 أيام بعد التدقيق"),
        l("Never", "أبدًا"),
      ],
      answer: 0,
      why: l("Article 33 sets a 72-hour notification window where feasible.", "تحدد المادة 33 نافذة إخطار مدتها 72 ساعة حيثما أمكن."),
    },
    {
      q: l("The main purpose of a lessons-learned review is…", "الغرض الرئيسي من مراجعة الدروس المستفادة هو…"),
      options: [
        l("To assign blame", "تحديد اللوم"),
        l("To improve plans, controls and detection", "تحسين الخطط والضوابط والكشف"),
        l("To delete logs", "حذف السجلات"),
        l("To skip documentation", "تجاوز التوثيق"),
      ],
      answer: 1,
      why: l("A blameless review turns incidents into improvements.", "تحوّل المراجعة بلا لوم الحوادث إلى تحسينات."),
    },
    {
      q: l("Who normally coordinates an incident response and makes key containment calls?", "من ينسق عادة الاستجابة للحوادث ويجري قرارات الاحتواء الرئيسية؟"),
      options: [
        l("The incident commander", "قائد الحادثة"),
        l("The marketing team", "فريق التسويق"),
        l("The external attacker", "المهاجم الخارجي"),
        l("No one; each analyst acts alone", "لا أحد؛ كل محلل يتصرف وحده"),
      ],
      answer: 0,
      why: l("One clear owner prevents delayed, ambiguous decisions during the crisis.", "يقيّد المالك الواحد الواضح القرارات الغامضة المتأخرة أثناء الأزمة."),
    },
    {
      q: l("Which is the classic ordering mistake in a ransomware response?", "ما الخطأ النمطي في الترتيب أثناء استجابة الفدية؟"),
      options: [
        l("Activating the plan first", "تفعيل الخطة أولًا"),
        l("Confirming scope before acting at scale", "تأكيد النطاق قبل التصرف على نطاق واسع"),
        l("Restoring systems before containing and eradicating", "استعادة الأنظمة قبل الاحتواء والاستئصال"),
        l("Recording actions in a case log", "تسجيل الإجراءات في سجل حالة"),
      ],
      answer: 2,
      why: l("Restoring while the attacker is still inside re-infects the restored systems.", "الاستعادة بينما المهاجم داخل تُعيد إصابة الأنظمة المستعادة."),
    },
    {
      q: l("Why keep an out-of-band contact list for incidents?", "لماذا يُحتفظ بقائمة اتصال خارج القناة للحوادث؟"),
      options: [
        l("Because the usual communication channels may be the ones under attack", "لأن قنوات الاتصال المعتادة قد تكون هي المهاجمة"),
        l("It is a legal formality with no use", "هو شكلية قانونية بلا فائدة"),
        l("To contact attackers", "للتواصل مع المهاجمين"),
        l("To avoid using backups", "لتجنب استخدام النسخ"),
      ],
      answer: 0,
      why: l("E-mail, chat and phones can fail during an incident, so an independent channel is needed.", "يمكن أن تفشل البريد والدرّد والهواتف أثناء الحادثة، لذا تلزم قناة مستقلة."),
    },
  ],
  trueFalse: [
    {
      q: l("Every alert is automatically a security incident.", "كل تنبيه هو حادثة أمنية تلقائيًا."),
      answer: false,
      why: l("Triage separates real incidents from false positives and benign events.", "يفصل الفرز الحوادث الحقيقية عن الإيجابيات الكاذبة والأحداث السليمة."),
    },
    {
      q: l("Containment should always come before eradication and recovery.", "ينبغي دائمًا أن يأتي الاحتواء قبل الاستئصال والتعافي."),
      answer: true,
      why: l("Stopping the spread first prevents cleanup and restore from being undone.", "إيقاف الانتشار أولًا يمنع إبطال التنظيف والاستعادة."),
    },
    {
      q: l("It is safe to restore systems from any backup before removing the cause.", "من الآمن استعادة الأنظمة من أي نسخة قبل إزالة السبب."),
      answer: false,
      why: l("A backup taken after the attacker entered will re-infect the restored system.", "النسخة التُقطت بعد دخول المهاجم تُعيد إصابة النظام المستعاد."),
    },
    {
      q: l("Powering off a suspect machine immediately preserves the most evidence.", "إطفاء الجهاز المشتبه به فورًا يحفظ أكبر قدر من الأدلة."),
      answer: false,
      why: l("Powering off destroys volatile memory evidence before it can be captured.", "الإطفاء يتلف أدلة الذاكرة المتطايرة قبل التقاطها."),
    },
    {
      q: l("A blameless lessons-learned review improves future detection and response.", "تحسّن مراجعة الدروس المستفادة بلا لوم الكشف والاستجابة في المستقبل."),
      answer: true,
      why: l("Reviewing without blame turns incidents into concrete improvements.", "تُحوّل المراجعة بلا لوم الحوادث إلى تحسينات ملموسة."),
    },
    {
      q: l("Communication during an incident should be speculative to reassure people.", "يجب أن يكون الاتصال أثناء الحادثة تخمينيًا لطمأنة الناس."),
      answer: false,
      why: l("Speculative statements can be wrong and erode trust; be factual instead.", "التصريحات التخمينية قد تكون خاطئة وتُضعف الثقة؛ فكن واقعيًا."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each item as a response phase or a response role", "صنّف كل عنصر كمرحلة استجابة أو دور استجابة"),
      categories: [
        l("Phase", "مرحلة"),
        l("Role", "دور"),
      ],
      items: [
        { text: l("Incident commander", "قائد الحادثة"), answer: 1 },
        { text: l("Containment", "الاحتواء"), answer: 0 },
        { text: l("Technical lead", "القيادة التقنية"), answer: 1 },
        { text: l("Recovery", "التعافي"), answer: 0 },
      ],
      why: l("Containment and recovery are phases; the commander and technical lead are roles.", "الاحتواء والتعافي مرحلتان؛ وقائد الحادثة والقيادة التقنية أدوار."),
    },
    {
      prompt: l("Classify each containment action by its time horizon", "صنّف كل إجراء احتواء بحسب أفقه الزمني"),
      categories: [
        l("Short-term containment", "احتواء قصير الأمد"),
        l("Long-term containment", "احتواء طويل الأمد"),
      ],
      items: [
        { text: l("Isolate the affected host from the network", "عزل الجهاز المتأثر عن الشبكة"), answer: 0 },
        { text: l("Rebuild the affected network segment", "إعادة بناء قطاع الشبكة المتأثر"), answer: 1 },
        { text: l("Disable a compromised account", "تعطيل حساب مخترق"), answer: 0 },
        { text: l("Deploy a temporary patch and quarantine network", "تطبيق رقعة مؤقتة وشبكة حجر صحي"), answer: 1 },
      ],
      why: l("Isolation and account disablement buy time; rebuilt segments and temporary patches keep operations running during clean-up.", "العزل وتعطيل الحساب يكسبان وقتًا؛ وإعادة بناء القطاعات والرقع المؤقتة تبقي العمليات جارية أثناء التنظيف."),
    },
    {
      prompt: l("Classify each severity level by its typical meaning", "صنّف كل مستوى شدة بحسب معناه النموذجي"),
      categories: [
        l("Critical (P1)", "حرجة (P1)"),
        l("High (P2)", "عالية (P2)"),
        l("Low (P4)", "منخفضة (P4)"),
      ],
      items: [
        { text: l("Ransomware actively spreading", "فدية تنتشر بنشاط"), answer: 0 },
        { text: l("A confirmed compromise needing fast response", "اختراق مؤكد يحتاج استجابة سريعة"), answer: 1 },
        { text: l("A minor policy violation handled locally", "انتهاك بسيط للسياسة يُعالج محليًا"), answer: 2 },
      ],
      why: l("P1 is for active, spreading damage; P2 for confirmed incidents needing fast response; P4 for minor local issues.", "P1 للضرر النشط المنتشر؛ وP2 للحوادث المؤكدة التي تحتاج استجابة سريعة؛ وP4 للقضايا المحلية البسيطة."),
    },
    {
      prompt: l("Match each response duty to the phase it belongs to", "زاوج كل واجب استجابة بالمرحلة التي ينتمي إليها"),
      categories: [
        l("Preparation", "الاستعداد"),
        l("Detection & analysis", "الكشف والتحليل"),
        l("Post-incident", "ما بعد الحادثة"),
      ],
      items: [
        { text: l("Rehearse playbooks and exercises", "مُثاقبة أدلة التشغيل والتمارين"), answer: 0 },
        { text: l("Build a timeline and case log", "بناء خط زمني وسجل حالة"), answer: 1 },
        { text: l("Update plans and controls from findings", "تحديث الخطط والضوابط من النتائج"), answer: 2 },
      ],
      why: l("Rehearsal is preparation; the timeline and case log are built during detection and analysis; updating plans is post-incident activity.", "المُثاقبة استعداد؛ ويُبنى الخط الزمني وسجل الحالة أثناء الكشف والتحليل؛ وتحديث الخطط من أنشطة ما بعد الحادثة."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "At 07:50 files on a shared drive change to '.locked' and a ransom note appears. You are the on-call analyst and have an incident plan but no commander is on duty yet.",
        "في 07:50 تتغيّر ملفات قرص مشترك إلى «.locked» وتظهر رسالة فدية. أنت المحلل المناوب ولديك خطة حوادث لكن لا يوجد قائد في المناوبة بعد.",
      ),
      question: l("What is the first action, and why?", "ما الإجراء الأول ولماذا؟"),
      options: [
        l("Activate the prepared plan, open a case log and assign roles", "تفعيل الخطة المعدة وفتح سجل حالة وتوزيع الأدوار"),
        l("Restore all files from the nearest backup immediately", "استعادة كل الملفات من أقرب نسخة فورًا"),
        l("Contact the attackers to negotiate", "التواصل مع المهاجمين للتفاوض"),
        l("Wait for more reports before doing anything", "انتظار المزيد من البلاغات قبل أي إجراء"),
      ],
      answer: 0,
      why: l("Preparation comes first: activate the plan and assign a commander so the response is coordinated.", "يأتي الاستعداد أولًا: تفعيل الخطة وتعيين قائد كي تكون الاستجابة منضبطة."),
    },
    {
      scenario: l(
        "During a ransomware incident an engineer proposes restoring the affected file server from last night's backup right now, before the infected hosts have been isolated.",
        "أثناء حادثة فدية يقترح مهندس استعادة خادم الملفات المتأثر من نسخة البارحة الآن، قبل عزل الأجهزة المصابة.",
      ),
      question: l("What is the right call?", "ما القرار الصحيح؟"),
      options: [
        l("Restore now to limit downtime", "استعادة الآن لتقليل التوقف"),
        l("Contain and eradicate first; restore only from a verified clean backup", "احتواء واستئصال أولًا؛ والاستعادة فقط من نسخة نظيفة موثقة"),
        l("Skip containment and delete the ransomware by hand", "تجاوز الاحتواء وحذف الفدية يدويًا"),
        l("Power off all servers immediately", "إطفاء كل الخوادم فورًا"),
      ],
      answer: 1,
      why: l("Restoring before containment and eradication re-infects the system; restore only from a verified clean backup.", "الاستعادة قبل الاحتواء والاستئصال تُعيد إصابة النظام؛ فاستعد فقط من نسخة نظيفة موثقة."),
    },
    {
      scenario: l(
        "A P1 ransomware incident is confirmed and the case log is started. Legal has been engaged. The incident commander must decide how to communicate with staff and the regulator.",
        "تُؤكد حادثة فدية P1 وبدأ سجل الحالة. وتشارك الجهة القانونية. وعلى قائد الحادثة تقرير كيف يتواصل مع الموظفين والجهة التنظيمية.",
      ),
      question: l("Which communication approach is correct?", "أي أساليب الاتصال صحيح؟"),
      options: [
        l("Discuss details over the company chat, then post on social media", "مناقشة التفاصيل عبر دردشة الشركة ثم النشر على وسائل التواصل"),
        l("Use designated channels, give factual updates and notify the regulator within the legal window", "استخدام قنوات محددة وإعطاء تحديثات واقعية وإبلاغ الجهة التنظيمية ضمن النافذة القانونية"),
        l("Stay silent to avoid alarming anyone", "الصمت لتجنب إثارة القلق"),
        l("Speculate about the attacker to reassure staff", "التخمين حول المهاجم لطمأنة الموظفين"),
      ],
      answer: 1,
      why: l("Designated, factual channels and timely legal notification protect trust and meet duties.", "القنوات المحددة الواقعية والإبلاغ القانوني في الوقت المناسب تحمي الثقة وتلبي الواجبات."),
    },
  ],
  practicalChecks: [
    {
      task: l("Recite the four NIST response phases in order", "تلاوة مراحل الاستجابة وفق NIST بالترتيب"),
      expected: l("Preparation → Detection and analysis → Containment/Eradication/Recovery → Post-incident activity.", "الاستعداد ← الكشف والتحليل ← الاحتواء/الاستئصال/التعافي ← نشاط ما بعد الحادثة."),
    },
    {
      task: l("State the GDPR breach-notification window", "ذكر نافذة إخطار الاختراق وفق GDPR"),
      expected: l("72 hours from becoming aware of a personal-data breach, where feasible.", "72 ساعة من العلم بتسريب بيانات شخصية، حيثما أمكن."),
    },
    {
      task: l("Explain in one sentence why you would isolate but not power off a suspect machine", "اشرح في جملة واحدة لماذا تعزل ولا تطفئ الجهاز المشتبه به"),
      expected: l("Isolation stops the spread while preserving the volatile memory evidence that powering off would destroy.", "العزل يوقف الانتشار مع حفظ أدلة الذاكرة المتطايرة التي يتلفها الإطفاء."),
    },
  ],
  homework: {
    title: l("Homework 16 — Write a one-page incident playbook", "الواجب 16 — اكتب دليل حادثة من صفحة واحدة"),
    tasks: [
      l("Choose one scenario: a lost laptop, a phishing click, or a compromised account.", "اختر سيناريو واحدًا: حاسوب مفقود أو نقرة تصيّد أو حساب مخترق."),
      l("Write the playbook steps for each NIST phase with specific actions and owners.", "اكتب خطوات الدليل لكل مرحلة من NIST بإجراءات محددة ومالكين."),
      l("Add an escalation table (who to call, when, how) and a communication template.", "أضف جدول تصعيد (من نتصل به ومتى وكيف) وقالب اتصال."),
      l("Run a 15-minute tabletop with a friend or colleague and record what was unclear.", "نفّذ تمرين طاولة لمدة 15 دقيقة مع صديق أو زميل وسجّل ما لم يكن واضحًا."),
    ],
    deliverable: l("The playbook, the escalation table and a short note on improvements found during the tabletop.", "الدليل وجدول التصعيد وملاحظة قصيرة عن التحسينات التي ظهرت أثناء التمرين."),
    criteria: [
      l("Playbook steps for each NIST phase with specific actions", "خطوات الدليل لكل مرحلة من NIST بإجراءات محددة"),
      l("A clear owner named for each step", "تحديد مسؤول واضح لكل خطوة"),
      l("An escalation table covering who, when and how", "جدول تصعيد يغطي من ومتى وكيف"),
      l("A communication template that is factual and non-speculative", "قالب اتصال واقعي غير تخميني"),
      l("A tabletop note recording what was unclear and how to fix it", "ملاحظة تمرين تسجل ما لم يكن واضحًا وكيف عُولج"),
    ],
    challenge: l(
      "Optional challenge: design a 10-minute tabletop for a data-leak incident with three scripted questions, and pre-write the expected 'correct' responses for each phase of the NIST lifecycle.",
      "مهمة تحدٍ اختيارية: صمّم تمرين طاولة لمدة 10 دقائق لحادثة تسريب بيانات بثلاثة أسئلة مكتوبة مسبقًا، واكتب مسبقًا الإجابات «الصحيحة» المتوقعة لكل مرحلة من دورة NIST.",
    ),
  },
  refs: [
    { title: "Computer Security Incident Handling Guide (SP 800-61 Rev.2)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" },
    { title: "Incident response plan basics", org: "CISA", url: "https://www.cisa.gov/sites/default/files/publications/Incident-Response-Plan-Basics_508c.pdf" },
    { title: "Incident management guidance", org: "NCSC UK", url: "https://www.ncsc.gov.uk/collection/incident-management" },
    { title: "Guide to Integrating Forensic Techniques into Incident Response (SP 800-86)", org: "NIST", url: "https://csrc.nist.gov/pubs/sp/800/86/final" },
    { title: "GDPR: personal data breach notification (Article 33)", org: "EDPB / EU", url: "https://gdpr-info.eu/art-33-gdpr/" },
  ],
  terms: [
    { term: l("Event", "الحدث"), def: l("Any observable occurrence, such as a login or a blocked packet.", "أي واقعة ملحوظة مثل تسجيل دخول أو حزمة محجوبة.") },
    { term: l("Incident", "الحادثة"), def: l("An event, or series of events, that compromises or threatens security or violates policy.", "حدث أو سلسلة أحداث تهدد الأمن أو تُنتهك أو تخالف السياسة.") },
    { term: l("Breach", "الاختراق / التسريب"), def: l("An incident in which protected data is accessed or disclosed without authorisation.", "حادثة يُطّلع فيها على بيانات محمية أو تُكشف دون تصريح.") },
    { term: l("Incident response plan", "خطة الاستجابة للحوادث"), def: l("A documented plan describing how an organisation will handle incidents.", "خطة موثقة تصف كيف تتعامل المؤسسة مع الحوادث.") },
    { term: l("Playbook", "دليل التشغيل"), def: l("A documented set of steps for handling a specific incident type.", "مجموعة خطوات موثقة للتعامل مع نوع محدد من الحوادث.") },
    { term: l("Incident commander", "قائد الحادثة"), def: l("The person who coordinates the response and makes key containment and escalation calls.", "الشخص الذي ينسق الاستجابة ويجري قرارات الاحتواء والتصعيد الرئيسية.") },
    { term: l("Detection and analysis", "الكشف والتحليل"), def: l("The phase that confirms the incident and determines its scope and severity.", "المرحلة التي تؤكد الحادثة وتحدد نطاقها وشددتها.") },
    { term: l("Containment", "الاحتواء"), def: l("Actions that stop an incident from spreading or causing more damage.", "إجراءات توقف انتشار الحادثة أو زيادة ضررها.") },
    { term: l("Eradication", "الاستئصال"), def: l("Removing the cause of the incident, such as deleting malware and closing the entry point.", "إزالة سبب الحادثة مثل حذف البرمجية الخبيثة وإغلاق نقطة الدخول.") },
    { term: l("Recovery", "التعافي"), def: l("Restoring systems to normal operation from a clean, verified state.", "استعادة الأنظمة إلى العمل الطبيعي من حالة نظيفة موثقة.") },
    { term: l("Post-incident activity", "نشاط ما بعد الحادثة"), def: l("The lessons-learned review, report and update of plans and controls.", "مراجعة الدروس والتقرير وتحديث الخطط والضوابط.") },
    { term: l("Severity", "الشدة"), def: l("A classification (such as P1–P4) that sets response speed and escalation.", "تصنيف (مثل P1–P4) يحدد سرعة الاستجابة والتصعيد.") },
    { term: l("Case log", "سجل الحالة"), def: l("The record of every action, decision and time during the response.", "سجل كل إجراء وقرار ووقت أثناء الاستجابة.") },
    { term: l("Order of volatility", "ترتيب التطاير"), def: l("Collecting the most short-lived evidence first.", "جمع الأدلة الأسرع زوالًا أولًا.") },
    { term: l("Chain of custody", "سلسلة الحيازة"), def: l("The documented trail of who handled evidence and when.", "السجل الموثق لمن تعامل مع الدليل ومتى.") },
    { term: l("Forensic image", "الصورة الجنائية"), def: l("A bit-for-bit copy of evidence used for analysis, preserving the original.", "نسخة بت ببت من الدليل تُستخدم للتحليل مع حفظ الأصل.") },
    { term: l("Tabletop exercise", "تمرين الطاولة"), def: l("A discussion-based simulation of an incident to test plans.", "محاكاة قائمة على النقاش لحادثة لاختبار الخطط.") },
    { term: l("Escalation", "التصعيد"), def: l("Routing the incident to the right people based on severity.", "توجيه الحادثة إلى الأشخاص المناسبين بحسب الشدة."),
    },
    { term: l("Out-of-band communication", "الاتصال خارج القناة"), def: l("Using an independent channel that may not be affected by the incident.", "استخدام قناة مستقلة قد لا تتأثر بالحادثة."),
    },
    { term: l("Lessons learned", "الدروس المستفادة"), def: l("A blameless review that turns incidents into improvements.", "مراجعة بلا لوم تحوّل الحوادث إلى تحسينات."),
    },
    { term: l("Notification duty", "واجب الإخطار"), def: l("The legal requirement to report a breach to authorities or individuals.", "الالتزام القانوني بالإبلاغ عن اختراق إلى الجهات أو الأفراد."),
    },
  ],
};
