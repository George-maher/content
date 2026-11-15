import { l, type Session } from "../types";

export const s05: Session = {
  id: 5,
  phase: 2,
  schemaVersion: 2,
  minutes: 90,
  title: l(
    "Files, Accounts and Permissions: Access Control in Practice",
    "الملفات والحسابات والصلاحيات: التحكم بالوصول عمليًا",
  ),
  summary: l(
    "How Linux mode bits and Windows NTFS access control lists decide who can read, change or execute a resource, how accounts and groups should be structured, and how to review effective access without breaking production.",
    "كيف تحدد بتات الصلاحيات في لينكس وقوائم التحكم بالوصول في ويندوز من يستطيع قراءة مورد أو تعديله أو تنفيذه، وكيف ينبغي بناء الحسابات والمجموعات، وكيف تراجع الوصول الفعلي دون تعطيل الإنتاج.",
  ),
  overview: l(
    "Permissions are where security policy becomes concrete. A well-designed permission model lets people do their work while limiting what a stolen account, a malicious file or an accidental action can reach. This session compares Linux ownership and mode bits with Windows NTFS access control lists, then connects both to account design, privileged access, shared data and periodic review. The goal is not to memorise every flag but to read an access decision, explain why it happened and propose a safer design.",
    "الصلاحيات هي الموضع الذي تتحول فيه سياسة الأمن إلى واقع ملموس. ويتيح نموذج الصلاحيات الجيد للناس أداء عملهم مع الحد مما يمكن لحساب مسروق أو ملف خبيث أو إجراء عرضي الوصول إليه. وتقارن هذه الجلسة الملكية وبتات الصلاحيات في لينكس بقوائم التحكم بالوصول في ويندوز، ثم تربط كليهما بتصميم الحسابات والوصول المميز والبيانات المشتركة والمراجعة الدورية. والهدف ليس حفظ كل علامة بل قراءة قرار وصول وشرح سببه واقتراح تصميم أكثر أمانًا.",
  ),
  whyItMatters: l(
    "Every ransomware incident, data leak and insider misuse eventually involves a permission decision. The attacker rarely needs to defeat every control; one over-broad group, one world-writable script or one shared administrator password is enough. Permission mistakes also cause outages and compliance findings. Learning to read effective access prevents both the quiet over-permission that enables a breach and the blunt restriction that blocks legitimate work.",
    "كل حادث فدية أو تسريب بيانات أو سوء استخدام داخلي يتضمن في النهاية قرار صلاحية. ونادرًا ما يحتاج المهاجم إلى هزيمة كل الضوابط؛ تكفي مجموعة واحدة واسعة أو سكربت واحد قابل للكتابة من الجميع أو كلمة مرور مسؤول مشتركة. وتسبب أخطاء الصلاحيات أيضًا انقطاعات وملاحظات امتثال. ويقي تعلم قراءة الوصول الفعلي من خطرين: منح صلاحيات واسعة بصمت تتيح الاختراق، والتقييد الأخرق الذي يعطل العمل المشروع.",
  ),
  prerequisites: [
    l(
      "Session 4: kernel, user mode, processes, services, identity context and logging.",
      "الجلسة 4: النواة ووضع المستخدم والعمليات والخدمات وسياق الهوية والتسجيل.",
    ),
    l(
      "Session 2: attackers reuse valid accounts and move laterally with stolen credentials.",
      "الجلسة 2: يعيد المهاجمون استخدام حسابات صالحة ويتحركون جانبيًا ببيانات اعتماد مسروقة.",
    ),
    l(
      "Access to a test directory on a Linux or Windows system you own, with permission to change permissions there.",
      "الوصول إلى مجلد اختبار على نظام لينكس أو ويندوز تملكه، مع إذن بتغيير الصلاحيات فيه.",
    ),
  ],
  objectives: [
    l(
      "Explain subjects, objects, permissions, inheritance and effective access.",
      "شرح الذوات والأشياء والصلاحيات والوراثة والوصول الفعلي.",
    ),
    l(
      "Read and calculate Linux mode bits, including octal notation and umask.",
      "قراءة وحساب بتات الصلاحيات في لينكس، بما فيها الصيغة الثمانية وقناع umask.",
    ),
    l(
      "Interpret Windows NTFS allow and deny entries, inheritance and share permissions.",
      "تفسير مدخلات السماح والمنع في ويندوز والوراثة وصلاحيات المشاركة.",
    ),
    l(
      "Design groups and accounts that support least privilege and separation of duties.",
      "تصميم مجموعات وحسابات تدعم أقل امتياز وفصل المهام.",
    ),
    l(
      "Identify dangerous permissions such as world-writable files, SUID programs and over-broad groups.",
      "تحديد الصلاحيات الخطرة مثل الملفات القابلة للكتابة من الجميع وبرامج SUID والمجموعات الواسعة.",
    ),
    l(
      "Review effective access on a shared resource and document the evidence.",
      "مراجعة الوصول الفعلي على مورد مشترك وتوثيق الأدلة.",
    ),
    l(
      "Propose a permission change with testing, approval and rollback.",
      "اقتراح تغيير صلاحيات مع اختبار وموافقة وتراجع.",
    ),
  ],
  agenda: [
    { label: l("Recap, access-control vocabulary and the least-privilege goal", "المراجعة ومفردات التحكم بالوصول وهدف أقل امتياز"), minutes: 5 },
    { label: l("Linux ownership, mode bits and umask", "الملكية وبتات الصلاحيات وقناع umask في لينكس"), minutes: 12 },
    { label: l("Special bits, ACLs and dangerous permission patterns", "البتات الخاصة وقوائم الوصول وأنماط الصلاحيات الخطرة"), minutes: 14 },
    { label: l("Windows NTFS permissions, inheritance and effective access", "صلاحيات ويندوز والوراثة والوصول الفعلي"), minutes: 14 },
    { label: l("Accounts, groups and the joiner-mover-leaver process", "الحسابات والمجموعات وعملية الانضمام والنقل والمغادرة"), minutes: 12 },
    { label: l("Privileged access, elevation and service identities", "الوصول المميز ورفع الصلاحية وهويات الخدمة"), minutes: 10 },
    { label: l("Shared data design and permission review", "تصميم البيانات المشتركة ومراجعة الصلاحيات"), minutes: 10 },
    { label: l("Instructor demonstration and lab briefing", "عرض المدرب وإحاطة المختبر"), minutes: 8 },
    { label: l("Assessment, recap and homework", "التقييم والمراجعة والواجب"), minutes: 5 },
  ],
  introduction: l(
    "A permission is a small decision with a large consequence. It answers a simple question: may this identity perform this action on this resource? Yet the answer depends on ownership, group membership, inheritance, deny entries, share permissions, elevation and the application's own checks. Two administrators can look at the same folder and disagree about who has access, because one is reading the visible groups and the other is calculating effective access. This session teaches the second skill.",
    "الصلاحية قرار صغير بأثر كبير. وهي تجيب عن سؤال بسيط: هل يجوز لهذه الهوية تنفيذ هذا الإجراء على هذا المورد؟ لكن الإجابة تعتمد على الملكية وعضوية المجموعات والوراثة ومدخلات المنع وصلاحيات المشاركة ورفع الصلاحية وفحوص التطبيق نفسه. وقد ينظر مسؤولان إلى المجلد نفسه ويختلفان حول من يملك الوصول، لأن أحدهما يقرأ المجموعات الظاهرة والآخر يحسب الوصول الفعلي. وتعلّم هذه الجلسة المهارة الثانية.",
  ),
  sections: [
    {
      h: l("1. Access control vocabulary and the least-privilege goal", "1. مفردات التحكم بالوصول وهدف أقل امتياز"),
      p: [
        l(
          "Access control connects a subject, an object and an action. The subject is the identity making the request: a user, a process, a service or a group. The object is the resource: a file, folder, registry key, printer, database or API. The action is what the subject wants to do, such as read, write, execute or delete. A permission is the policy decision that allows or denies that combination.",
          "يربط التحكم بالوصول بين ذات وموضوع وإجراء. فالذات هي الهوية التي تقدم الطلب: مستخدم أو عملية أو خدمة أو مجموعة. والموضوع هو المورد: ملف أو مجلد أو مفتاح سجل أو طابعة أو قاعدة بيانات أو واجهة برمجية. والإجراء هو ما تريد الذات فعله، مثل القراءة أو الكتابة أو التنفيذ أو الحذف. والصلاحية هي قرار السياسة الذي يسمح بذلك المزيج أو يمنعه.",
        ),
        l(
          "Least privilege means granting the minimum access needed for a task, for the shortest time, with the least chance of accidental misuse. It is not a single setting; it is a design habit. A finance clerk needs to read invoices, not administer the file server. A backup agent needs to read protected data, not change its permissions. A developer needs to deploy to a test environment, not to production on a Friday afternoon without review.",
          "يعني أقل امتياز منح الحد الأدنى من الوصول اللازم لمهمة، لأقصر مدة، وبأقل فرصة لإساءة الاستخدام العرضي. وهو ليس إعدادًا واحدًا؛ بل عادة تصميم. فموظف المالية يحتاج قراءة الفواتير لا إدارة خادم الملفات. ووكيل النسخ الاحتياطي يحتاج قراءة البيانات المحمية لا تغيير صلاحياتها. والمطور يحتاج النشر إلى بيئة اختبار لا إلى الإنتاج عصر يوم جمعة دون مراجعة.",
        ),
        l(
          "Two related principles complete the picture. Separation of duties prevents one person from both requesting and approving a sensitive action. Need to know limits access to data to those who require it for their role, even if they have the technical ability to reach more. Together with least privilege, they reduce the chance that one compromised or careless identity can cause widespread harm.",
          "يكمل الصورة مبدآن مرتبطان. فصل المهام يمنع شخصًا واحدًا من طلب إجراء حساس والموافقة عليه معًا. والحاجة إلى المعرفة تحصر الوصول إلى البيانات فيمن يحتاجها لدوره، حتى لو كانت لديه القدرة التقنية على الوصول إلى أكثر. ومع أقل امتياز، يقللان فرصة أن تسبب هوية واحدة مخترقة أو مهملة ضررًا واسعًا.",
        ),
      ],
      table: {
        head: [l("Term", "المصطلح"), l("Meaning", "المعنى"), l("Example", "مثال")],
        rows: [
          [l("Subject", "الذات"), l("Identity requesting access", "الهوية التي تطلب الوصول"), l("A user, service or process", "مستخدم أو خدمة أو عملية")],
          [l("Object", "الموضوع"), l("Resource being protected", "المورد المحمي"), l("A payroll folder", "مجلد الرواتب")],
          [l("Permission", "الصلاحية"), l("Allowed action on an object", "الإجراء المسموح على موضوع"), l("Read, write or execute", "قراءة أو كتابة أو تنفيذ")],
          [l("Inheritance", "الوراثة"), l("Child objects receive parent entries", "تستلم العناصر الفرعية مدخلات الأب"), l("A new file inherits folder access", "ملف جديد يرث وصول المجلد")],
          [l("Effective access", "الوصول الفعلي"), l("The final result after all rules", "النتيجة النهائية بعد كل القواعد"), l("Group plus explicit plus deny", "مجموعة مع صريح مع منع")],
        ],
      },
      callout: {
        kind: "key",
        text: l(
          "The question is never 'does this person have a permission?' but 'what can this identity actually do to this object, and why?'",
          "السؤال ليس «هل يملك هذا الشخص صلاحية؟» بل «ما الذي تستطيع هذه الهوية فعله بهذا الموضوع، ولماذا؟»",
        ),
      },
    },
    {
      h: l("2. Linux ownership, mode bits and umask", "2. الملكية وبتات الصلاحيات وقناع umask في لينكس"),
      p: [
        l(
          "Every Linux file has an owner, a group and three permission triples: owner, group and other. Each triple contains read, write and execute. The numeric values are 4, 2 and 1, so rwx is 7, rw- is 6, r-- is 4 and --- is 0. The command ls -l shows the mode, owner and group; chmod changes the mode; chown changes ownership; chgrp changes the group. A directory needs execute permission to be entered and to reach files inside it.",
          "لكل ملف في لينكس مالك ومجموعة وثلاث مجموعات صلاحيات: المالك والمجموعة والآخرون. وتحتوي كل مجموعة على قراءة وكتابة وتنفيذ. والقيم الرقمية 4 و2 و1، لذا rwx تساوي 7 وrw- تساوي 6 وr-- تساوي 4 و--- تساوي 0. ويعرض الأمر ls -l الوضع والمالك والمجموعة؛ ويغيّر chmod الوضع؛ ويغيّر chown الملكية؛ ويغيّر chgrp المجموعة. ويحتاج المجلد إلى صلاحية تنفيذ لدخوله والوصول إلى الملفات داخله.",
        ),
        l(
          "Reading a mode is a calculation, not a guess. The mode 640 means the owner can read and write, the group can read and others have nothing. The mode 750 adds execute for the owner and group. The mode 777 gives everyone read, write and execute and is almost always a mistake. Symbolic notation such as u+rw,g+r,o-rwx is easier to review because it names the class being changed.",
          "قراءة الوضع عملية حساب لا تخمين. فالوضع 640 يعني أن المالك يقرأ ويكتب والمجموعة تقرأ والآخرين لا شيء. ويضيف الوضع 750 تنفيذًا للمالك والمجموعة. ويمنح الوضع 777 الجميع قراءة وكتابة وتنفيذًا وهو خطأ في الغالب. والصيغة الرمزية مثل u+rw,g+r,o-rwx أسهل في المراجعة لأنها تسمي الفئة التي تُغيَّر.",
        ),
        l(
          "New files do not start with 777. The umask subtracts permission bits from a default base, usually 666 for files and 777 for directories. A umask of 022 produces files with 644 and directories with 755. A stricter umask of 077 produces 600 and 700. The umask explains why two users with the same shell can create files with different default exposure, and why a service that creates sensitive files should set a restrictive umask explicitly.",
          "لا تبدأ الملفات الجديدة بالوضع 777. ويطرح قناع umask بتات صلاحيات من أساس افتراضي، هو عادةً 666 للملفات و777 للمجلدات. وينتج قناع 022 ملفات بالوضع 644 ومجلدات بالوضع 755. وينتج قناع أكثر صرامة 077 الوضعين 600 و700. ويفسر umask سبب إنشاء مستخدمين لهما الصدفة نفسها ملفات بدرجات تعرض مختلفة، وسبب وجوب ضبط خدمة تنشئ ملفات حساسة لقناع صارم صراحةً.",
        ),
      ],
      table: {
        head: [l("Mode", "الوضع"), l("Owner", "المالك"), l("Group", "المجموعة"), l("Others", "الآخرون"), l("Typical use", "الاستخدام النموذجي")],
        rows: [
          [l("600", "600"), l("read, write", "قراءة وكتابة"), l("none", "لا شيء"), l("none", "لا شيء"), l("Private key or personal note", "مفتاح خاص أو ملاحظة شخصية")],
          [l("640", "640"), l("read, write", "قراءة وكتابة"), l("read", "قراءة"), l("none", "لا شيء"), l("Payroll file for a finance group", "ملف رواتب لمجموعة المالية")],
          [l("644", "644"), l("read, write", "قراءة وكتابة"), l("read", "قراءة"), l("read", "قراءة"), l("Public document owned by one editor", "مستند عام يملكه محرر واحد")],
          [l("700", "700"), l("read, write, execute", "قراءة وكتابة وتنفيذ"), l("none", "لا شيء"), l("none", "لا شيء"), l("Private script or home directory", "سكربت خاص أو مجلد منزل")],
          [l("755", "755"), l("read, write, execute", "قراءة وكتابة وتنفيذ"), l("read, execute", "قراءة وتنفيذ"), l("read, execute", "قراءة وتنفيذ"), l("Shared executable directory", "مجلد تنفيذي مشترك")],
        ],
      },
      callout: {
        kind: "tip",
        text: l(
          "Use ls -l and getfacl to review the real mode and ACL; do not assume a file is private because it sits in a private-looking folder.",
          "استخدم ls -l وgetfacl لمراجعة الوضع الفعلي وقائمة الوصول؛ ولا تفترض أن ملفًا خاصًا لأنه في مجلد يبدو خاصًا.",
        ),
      },
    },
    {
      h: l("3. Special bits, ACLs and dangerous permission patterns", "3. البتات الخاصة وقوائم الوصول وأنماط الصلاحيات الخطرة"),
      p: [
        l(
          "Three special bits change normal behaviour. The set-user-ID bit makes a program run with the file owner's identity, which is how passwd can update protected files. If a root-owned SUID program is flawed, an ordinary user may gain root. The set-group-ID bit makes a program run with the file's group or makes a directory inherit its group. The sticky bit on a shared directory lets users delete only their own files, which is why /tmp usually has it.",
          "تغيّر ثلاث بتات خاصة السلوك المعتاد. فبت set-user-ID يجعل البرنامج يعمل بهوية مالك الملف، وهكذا يستطيع passwd تحديث ملفات محمية. وإذا كان برنامج SUID مملوكًا للمستخدم الأعلى معيبًا، فقد يحصل مستخدم عادي على صلاحيات المستخدم الأعلى. وبت set-group-ID يجعل البرنامج يعمل بمجموعة الملف أو يجعل مجلدًا يرث مجموعته. وبت sticky في مجلد مشترك يتيح للمستخدمين حذف ملفاتهم فقط، ولهذا يوجد عادةً في /tmp.",
        ),
        l(
          "Access control lists extend the three-class model. getfacl shows entries for named users and groups; setfacl adds or removes them. An ACL can grant read access to one auditor without adding that auditor to the finance group. It can also create a mask that limits the effective rights of named entries. ACLs are useful for exceptions, but too many named entries turn a readable policy into a maze.",
          "توسع قوائم التحكم بالوصول نموذج الفئات الثلاث. ويعرض getfacl مدخلات لمستخدمين ومجموعات مسمين؛ ويضيفها setfacl أو يحذفها. ويمكن لقائمة وصول منح مدقق واحد وصول قراءة دون إضافته إلى مجموعة المالية. ويمكنها أيضًا إنشاء قناع يحد من الحقوق الفعلية للمدخلات المسماة. والقوائم مفيدة للاستثناءات، لكن كثرة المدخلات المسماة تحول سياسة مقروءة إلى متاهة.",
        ),
        l(
          "Dangerous patterns recur in reviews: world-writable files and directories, SUID binaries that are not on an approved list, scripts executed by root but writable by users, private keys readable by a group, home directories exposed to everyone, and copied permissions that no longer match the data classification. Each pattern is a question, not an automatic verdict. A public upload folder may legitimately be world-writable if it is isolated, monitored and stripped of execute permission.",
          "تتكرر أنماط خطرة في المراجعات: ملفات ومجلدات قابلة للكتابة من الجميع، وبرامج SUID ليست في قائمة معتمدة، وسكربتات يشغّلها المستخدم الأعلى لكن المستخدمين يستطيعون كتابتها، ومفاتيح خاصة تقرؤها مجموعة، ومجلدات منزل مكشوفة للجميع، وصلاحيات منسوخة لم تعد تطابق تصنيف البيانات. وكل نمط سؤال لا حكمًا تلقائيًا. فقد يكون مجلد رفع عام قابلًا للكتابة من الجميع بشكل مشروع إذا كان معزولًا ومراقبًا ومنزوع صلاحية التنفيذ.",
        ),
      ],
      bullets: [
        l("World-writable file: anyone can modify content or replace data.", "ملف قابل للكتابة من الجميع: أي شخص يعدل المحتوى أو يستبدل البيانات."),
        l("World-writable directory without sticky bit: anyone can delete or rename others' files.", "مجلد قابل للكتابة من الجميع بلا بت sticky: أي شخص يحذف ملفات الآخرين أو يعيد تسميتها."),
        l("SUID root binary outside the approved set: potential privilege escalation.", "برنامج SUID مملوك للمستخدم الأعلى خارج المجموعة المعتمدة: احتمال رفع امتيازات."),
        l("Root-executed script writable by a standard user: direct code execution as root.", "سكربت يشغّله المستخدم الأعلى ويستطيع مستخدم عادي كتابته: تنفيذ شيفرة مباشر بصلاحيات المستخدم الأعلى."),
        l("Private key with group or other read access: credential exposure.", "مفتاح خاص بوصول قراءة للمجموعة أو الآخرين: تعرض بيانات اعتماد."),
        l("Broad ACL entry for a named user: an exception that outlives its reason.", "مدخل قائمة وصول واسع لمستخدم مسمى: استثناء يبقى بعد زوال سببه."),
      ],
      callout: {
        kind: "warn",
        text: l(
          "Never test permissions with chmod -R 777. It removes protection across an entire tree and is difficult to reverse accurately.",
          "لا تختبر الصلاحيات أبدًا باستخدام chmod -R 777. فهو يزيل الحماية عن شجرة كاملة ويصعب التراجع عنه بدقة.",
        ),
      },
    },
    {
      h: l("4. Windows NTFS permissions, inheritance and effective access", "4. صلاحيات ويندوز والوراثة والوصول الفعلي"),
      p: [
        l(
          "Windows stores access rules in a discretionary access control list attached to each object. Each entry names a security principal, states allow or deny and lists the rights granted or refused. NTFS rights include Full control, Modify, Read and execute, List folder contents, Read and Write, plus advanced rights such as Take ownership and Change permissions. Deny entries generally take precedence over allow entries, which is why a single deny can create a confusing support case.",
          "يخزن ويندوز قواعد الوصول في قائمة تحكم وصول تقديرية مرتبطة بكل موضوع. ويسمي كل مدخل كيانًا أمنيًا، ويحدد سماحًا أو منعًا، ويسرد الحقوق الممنوحة أو المرفوضة. وتشمل حقوق NTFS التحكم الكامل والتعديل والقراءة والتنفيذ وسرد محتويات المجلد والقراءة والكتابة، إضافة إلى حقوق متقدمة مثل امتلاك الملكية وتغيير الصلاحيات. وتعطي مدخلات المنع الأولوية عادةً على مدخلات السماح، ولهذا قد ينشئ منع واحد حالة دعم مربكة.",
        ),
        l(
          "Inheritance lets a child object receive entries from its parent. Breaking inheritance copies or removes those entries and can create an island that no longer follows policy. Explicit entries are those added directly to the object; inherited entries come from above. Effective access is the final combination of all allow and deny entries, group memberships, share permissions and any application-level checks. The Security tab shows entries, not necessarily the final answer.",
          "تتيح الوراثة للعنصر الفرعي استلام مدخلات من أبيه. ويقطع كسر الوراثة نسخ تلك المدخلات أو إزالتها وقد ينشئ جزيرة لا تتبع السياسة. والمدخلات الصريحة هي المضافة مباشرة إلى الموضوع؛ أما الموروثة فتأتي من الأعلى. والوصول الفعلي هو المزيج النهائي لكل مدخلات السماح والمنع وعضويات المجموعات وصلاحيات المشاركة وأي فحوص على مستوى التطبيق. وتعرض علامة التبويب الأمان مدخلات لا الإجابة النهائية بالضرورة.",
        ),
        l(
          "Share permissions and NTFS permissions are both evaluated when a user reaches a folder over SMB. The more restrictive result wins. A common design is to set share permissions broad enough not to interfere and control access with NTFS, but that choice must be documented and tested. Local access is governed by NTFS only. icacls displays and edits entries from the command line and is useful for repeatable audits.",
          "تُقيَّم صلاحيات المشاركة وصلاحيات NTFS معًا عندما يصل المستخدم إلى مجلد عبر SMB. وتفوز النتيجة الأكثر تقييدًا. ومن التصاميم الشائعة ضبط صلاحيات المشاركة واسعة بما يكفي لعدم التداخل والتحكم بالوصول عبر NTFS، لكن يجب توثيق ذلك الاختيار واختباره. ويحكم NTFS وحده الوصول المحلي. ويعرض icacls المدخلات ويعدلها من سطر الأوامر وهو مفيد للمراجعات القابلة للتكرار.",
        ),
      ],
      table: {
        head: [l("Right", "الحق"), l("Allows", "يتيح"), l("Risk note", "ملاحظة مخاطر")],
        rows: [
          [l("Full control", "التحكم الكامل"), l("Change permissions and take ownership", "تغيير الصلاحيات وامتلاك الملكية"), l("Equivalent to control of the object's security", "يعادل التحكم بأمن الموضوع")],
          [l("Modify", "التعديل"), l("Read, write, execute and delete", "القراءة والكتابة والتنفيذ والحذف"), l("Can destroy or tamper with data", "قد يتلف البيانات أو يعبث بها")],
          [l("Read and execute", "القراءة والتنفيذ"), l("View and run files", "عرض الملفات وتشغيلها"), l("Scripts may perform actions with the caller's rights", "قد تنفذ السكربتات إجراءات بصلاحيات المستدعي")],
          [l("Write", "الكتابة"), l("Create files and change content", "إنشاء ملفات وتغيير المحتوى"), l("Can plant malicious content or alter records", "قد يزرع محتوى خبيثًا أو يعدل السجلات")],
          [l("Change permissions", "تغيير الصلاحيات"), l("Modify the access control list", "تعديل قائمة التحكم بالوصول"), l("Can grant access to others", "قد يمنح الوصول للآخرين")],
          [l("Take ownership", "امتلاك الملكية"), l("Become the owner", "أن يصبح مالكًا"), l("Can lead to full control", "قد يؤدي إلى تحكم كامل")],
        ],
      },
      callout: {
        kind: "key",
        text: l(
          "Effective access is calculated, not read from a single tab. Check direct entries, inherited entries, group membership, deny rules and share permissions.",
          "يُحسب الوصول الفعلي ولا يُقرأ من علامة تبويب واحدة. افحص المدخلات المباشرة والموروثة وعضوية المجموعات وقواعد المنع وصلاحيات المشاركة.",
        ),
      },
    },
    {
      h: l("5. Accounts, groups and the joiner-mover-leaver process", "5. الحسابات والمجموعات وعملية الانضمام والنقل والمغادرة"),
      p: [
        l(
          "Accounts should represent people, services or devices, never shared tasks. A named account creates accountability: logs can show who acted, access can be removed when the person leaves and behaviour can be compared with a baseline. Shared accounts destroy all three. Groups are the main scaling mechanism: grant access to a role group, then manage membership instead of editing permissions on every file.",
          "ينبغي أن تمثل الحسابات أشخاصًا أو خدمات أو أجهزة، لا مهام مشتركة. فالحساب المسمى ينشئ المساءلة: تعرض السجلات من تصرف، ويمكن إزالة الوصول عند مغادرة الشخص، وتقارن السلوك بخط أساس. أما الحسابات المشتركة فتدمر الثلاثة. والمجموعات هي آلية التوسع الرئيسية: امنح الوصول إلى مجموعة دور، ثم أدر العضوية بدل تعديل الصلاحيات على كل ملف.",
        ),
        l(
          "The joiner-mover-leaver process keeps membership honest. When someone joins, create the account with a documented role and the minimum groups. When someone moves, remove the old role's access before adding the new one. When someone leaves, disable the account, revoke sessions and tokens, transfer data ownership and retain evidence according to policy. The mover step is the most commonly skipped and the most useful to an attacker.",
          "تُبقي عملية الانضمام والنقل والمغادرة العضوية صادقة. فعند انضمام شخص، أنشئ الحساب بدور موثق وأقل المجموعات. وعند انتقاله، أزل وصول الدور القديم قبل إضافة الجديد. وعند مغادرته، عطّل الحساب وأبطل الجلسات والرموز وانقل ملكية البيانات واحفظ الأدلة وفق السياسة. وخطوة النقل هي الأكثر إغفالًا والأكثر فائدة للمهاجم.",
        ),
        l(
          "Group design should follow function, not org charts alone. A finance-read group, a finance-write group and a finance-approve group express different powers; a single finance group grants all three. Nesting can reduce administration but obscures effective access, so document the hierarchy and review it. Orphaned groups, empty groups with permissions and groups named after former projects are warning signs that access has outlived its purpose.",
          "يجب أن يتبع تصميم المجموعات الوظيفة لا الهيكل التنظيمي وحده. فمجموعة قراءة المالية ومجموعة كتابة المالية ومجموعة اعتماد المالية تعبر عن صلاحيات مختلفة؛ أما مجموعة مالية واحدة فتمنح الثلاث. وقد يقلل التداخل الإدارة لكنه يخفي الوصول الفعلي، لذا وثّق الهرم وراجعه. والمجموعات اليتيمة والمجموعات الفارغة التي تملك صلاحيات والمجموعات المسماة بمشاريع سابقة علامات على أن الوصول بقي بعد زوال غرضه.",
        ),
      ],
      bullets: [
        l("One named account per person; no shared credentials.", "حساب مسمى واحد لكل شخص؛ ولا بيانات اعتماد مشتركة."),
        l("Role groups for access; membership is the change control.", "مجموعات أدوار للوصول؛ والعضوية هي ضابط التغيير."),
        l("Disable leaver accounts before deleting them, then remove sessions and tokens.", "عطّل حسابات المغادرين قبل حذفها، ثم أزل الجلسات والرموز."),
        l("Review groups with no owner, no members or old project names.", "راجع المجموعات بلا مالك أو بلا أعضاء أو ذات أسماء مشاريع قديمة."),
        l("Document every exception with a reason and an expiry date.", "وثّق كل استثناء بسببه وتاريخ انتهاء صلاحيته."),
      ],
      callout: {
        kind: "warn",
        text: l(
          "A disabled account is not enough if its active sessions and refresh tokens remain valid. Revoke them as part of the leaver process.",
          "تعطيل الحساب لا يكفي إذا بقيت جلساته النشطة ورموز التحديث صالحة. أبطلها ضمن عملية المغادرة.",
        ),
      },
    },
    {
      h: l("6. Privileged access, elevation and service identities", "6. الوصول المميز ورفع الصلاحية وهويات الخدمة"),
      p: [
        l(
          "Privileged access is the ability to change security settings, install software, read protected data or manage other accounts. It should be rare, named, time-bound and monitored. Administrative accounts should be separate from daily accounts, used only on dedicated administration workstations and protected with phishing-resistant authentication. The goal is to make the powerful action deliberate and visible, not impossible.",
          "الوصول المميز هو القدرة على تغيير إعدادات الأمن أو تثبيت برمجيات أو قراءة بيانات محمية أو إدارة حسابات أخرى. وينبغي أن يكون نادرًا ومسمى ومحدد المدة ومراقبًا. ويجب فصل الحسابات الإدارية عن الحسابات اليومية، واستخدامها فقط على أجهزة إدارة مخصصة، وحمايتها بمصادقة مقاومة للتصيّد. والهدف جعل الإجراء القوي مدروسًا وظاهرًا لا مستحيلًا.",
        ),
        l(
          "Linux sudo policies should name the commands, the accounts and the conditions. A rule that allows a user to run any command as root is equivalent to giving away the system. Windows User Account Control is a consent mechanism, not a boundary against a determined local administrator; it reduces accidental elevation and supports audit, but it does not replace account separation. Both systems need logging of who elevated, when, from where and for what.",
          "ينبغي لسياسات sudo في لينكس تسمية الأوامر والحسابات والشروط. والقاعدة التي تتيح لمستخدم تشغيل أي أمر بصلاحيات المستخدم الأعلى تعادل تسليم النظام. ويمثل التحكم بحساب المستخدم في ويندوز آلية موافقة لا حدًا أمام مسؤول محلي مصمم؛ فهو يقلل رفع الصلاحية العرضي ويدعم التدقيق لكنه لا يستبدل فصل الحسابات. ويحتاج النظامان تسجيل من رفع الصلاحية ومتى ومن أين ولأي غرض.",
        ),
        l(
          "Service identities need the same discipline as human administrators. Give each service a unique account, document its owner and purpose, restrict logon rights, rotate secrets and monitor for interactive logons. A service account that can log in interactively and browse the network is often a hidden administrative account. Managed service accounts or short-lived workload identities are preferable to static passwords stored in scripts.",
          "تحتاج هويات الخدمة الانضباط نفسه الذي يحتاجه المسؤولون البشر. امنح كل خدمة حسابًا فريدًا، ووثّق مالكه وغرضه، وقيّد حقوق تسجيل الدخول، وابدّل الأسرار، وراقب تسجيلات الدخول التفاعلية. فحساب الخدمة الذي يستطيع الدخول تفاعليًا وتصفح الشبكة غالبًا حساب إداري خفي. وتفضل حسابات الخدمة المُدارة أو هويات أحمال العمل قصيرة العمر على كلمات مرور ثابتة محفوظة في سكربتات.",
        ),
      ],
      table: {
        head: [l("Control", "الضابط"), l("What it prevents", "ما يمنعه"), l("Evidence to keep", "الدليل الواجب حفظه")],
        rows: [
          [l("Separate admin account", "حساب إداري منفصل"), l("Daily browsing from a powerful identity", "التصفح اليومي بهوية قوية"), l("Account inventory and role mapping", "جرد الحسابات وربط الأدوار")],
          [l("Just-in-time elevation", "رفع الصلاحية عند الحاجة"), l("Permanent standing privilege", "امتياز دائم قائم"), l("Ticket, approver, start and expiry time", "تذكرة ومعتمد ووقت بدء وانتهاء")],
          [l("Dedicated admin workstation", "جهاز عمل إداري مخصص"), l("Compromise from ordinary endpoints", "الاختراق من الأجهزة العادية"), l("Device compliance and patch state", "امتثال الجهاز وحالة تحديثه")],
          [l("Phishing-resistant MFA", "مصادقة مقاومة للتصيّد"), l("Session theft and credential phishing", "سرقة الجلسات وتصيّد بيانات الاعتماد"), l("Authentication logs and key registration", "سجلات المصادقة وتسجيل المفاتيح")],
          [l("Service account restrictions", "قيود حسابات الخدمة"), l("Interactive use and lateral movement", "الاستخدام التفاعلي والحركة الجانبية"), l("Logon type, owner and rotation record", "نوع الدخول والمالك وسجل التبديل")],
        ],
      },
      callout: {
        kind: "key",
        text: l(
          "Standing administrator rights are a permanent bet that no administrator will ever be phished. Just-in-time access replaces the bet with a check.",
          "الحقوق الإدارية الدائمة رهان دائم بأن أي مسؤول لن يتعرض للتصيّد. ويستبدل الوصول عند الحاجة الرهان بفحص.",
        ),
      },
    },
    {
      h: l("7. Designing shared data and reviewing access", "7. تصميم البيانات المشتركة ومراجعة الوصول"),
      p: [
        l(
          "Start shared-data design from classification and roles. Identify the data owner, the sensitivity level, the people who need read access and the smaller set who need write or approve access. Create role groups, assign permissions to the groups and add people to the groups. Avoid granting permissions directly to individuals: direct entries are harder to review and often survive role changes.",
          "ابدأ تصميم البيانات المشتركة من التصنيف والأدوار. حدد مالك البيانات ومستوى حساسيتها والأشخاص الذين يحتاجون وصول قراءة والمجموعة الأصغر التي تحتاج كتابة أو اعتمادًا. وأنشئ مجموعات أدوار، وأسند الصلاحيات إلى المجموعات، وأضف الأشخاص إليها. وتجنب منح الصلاحيات مباشرة للأفراد: فالمدخلات المباشرة أصعب في المراجعة وغالبًا تبقى بعد تغير الأدوار.",
        ),
        l(
          "A permission review compares the intended policy with the actual state. Gather the access list, the group memberships and the data owner's confirmation, then look for anomalies: departed users, external accounts, nested groups, deny entries, inherited exceptions and accounts with more rights than their role requires. Sample a few files and test effective access rather than trusting the folder summary.",
          "تقارن مراجعة الصلاحيات السياسة المقصودة بالحالة الفعلية. اجمع قائمة الوصول وعضويات المجموعات وتأكيد مالك البيانات، ثم ابحث عن الشذوذ: مستخدمون مغادرون وحسابات خارجية ومجموعات متداخلة ومدخلات منع واستثناءات موروثة وحسابات تملك حقوقًا أكثر من دورها. وعاين بعض الملفات واختبر الوصول الفعلي بدل الثقة بملخص المجلد.",
        ),
        l(
          "Changes should follow a controlled path: state the intended access, capture the current state, test on a copy or a pilot group, obtain approval, apply the smallest change, verify with a real test account and record a rollback. Bulk recursive changes are especially risky because they can remove inherited access, break applications or expose data. A permission change without a test is an untested security control.",
          "ينبغي أن تتبع التغييرات مسارًا مضبوطًا: حدد الوصول المقصود، والتقط الحالة الحالية، واختبر على نسخة أو مجموعة تجريبية، واحصل على موافقة، وطبّق أصغر تغيير، وتحقق بحساب اختبار حقيقي، وسجّل تراجعًا. والتغييرات التكرارية الشاملة خطرة بشكل خاص لأنها قد تزيل وصولًا موروثًا أو تعطل تطبيقات أو تكشف بيانات. والتغيير بلا اختبار ضابط أمني غير مختبر.",
        ),
      ],
      bullets: [
        l("Name a data owner for every shared repository.", "سمِّ مالك بيانات لكل مستودع مشترك."),
        l("Grant to role groups, not to individuals.", "امنح الصلاحيات لمجموعات الأدوار لا للأفراد."),
        l("Use a test account that represents the real role.", "استخدم حساب اختبار يمثل الدور الحقيقي."),
        l("Record current state, approval, change and rollback.", "سجّل الحالة الحالية والموافقة والتغيير والتراجع."),
        l("Review high-value access at least quarterly and after role changes.", "راجع الوصول عالي القيمة ربع سنويًا على الأقل وبعد تغييرات الأدوار."),
      ],
    },
    {
      h: l("8. Auditing permissions without breaking production", "8. تدقيق الصلاحيات دون تعطيل الإنتاج"),
      p: [
        l(
          "Permission auditing is evidence work. Capture the object path, the access list, the group expansion and the identity used for the test. Compare the result with the approved request. A finding should state the observed access, the intended access, the gap and the risk, not merely call a folder 'insecure'. This structure lets a data owner make a decision without needing to understand every technical detail.",
          "تدقيق الصلاحيات عمل أدلة. التقط مسار الموضوع وقائمة الوصول وتوسيع المجموعات والهوية المستخدمة للاختبار. وقارن النتيجة بالطلب المعتمد. وينبغي أن تذكر الملاحظة الوصول المرصود والوصول المقصود والفجوة والخطر، لا أن تصف مجلدًا بأنه «غير آمن» فقط. ويتيح هذا الهيكل لمالك البيانات اتخاذ قرار دون فهم كل تفصيل تقني.",
        ),
        l(
          "Some checks are safe to automate: listing world-writable files, finding SUID binaries, listing members of privileged groups, detecting accounts with passwords that never expire and comparing folder ACLs with a baseline. Others require a change window: correcting inheritance, removing a deny entry or migrating to role groups. Keep the two categories separate in the report so that observation is not confused with remediation.",
          "بعض الفحوص آمنة للأتمتة: سرد الملفات القابلة للكتابة من الجميع، والعثور على برامج SUID، وسرد أعضاء المجموعات المميزة، وكشف الحسابات التي لا تنتهي صلاحية كلمات مرورها، ومقارنة قوائم وصول المجلدات بخط أساس. ويحتاج بعضها الآخر نافذة تغيير: تصحيح الوراثة أو إزالة مدخل منع أو الانتقال إلى مجموعات الأدوار. وافصل الفئتين في التقرير كي لا تختلط الملاحظة بالإصلاح.",
        ),
        l(
          "Metrics make the program credible: percentage of shared folders with a named owner, number of standing administrators, time to remove leaver access, number of world-writable paths, and percentage of exceptions with an expiry date. Avoid counting the number of permission changes as success. A high change count may mean churn, not control.",
          "تجعل المقاييس البرنامج موثوقًا: نسبة المجلدات المشتركة التي لها مالك مسمى، وعدد المسؤولين الدائمين، وزمن إزالة وصول المغادر، وعدد المسارات القابلة للكتابة من الجميع، ونسبة الاستثناءات التي لها تاريخ انتهاء. وتجنب عدّ عدد تغييرات الصلاحيات نجاحًا. فقد يعني العدد الكبير اضطرابًا لا تحكمًا.",
        ),
      ],
      table: {
        head: [l("Check", "الفحص"), l("Safe to automate", "آمن للأتمتة"), l("Requires change approval", "يتطلب موافقة تغيير")],
        rows: [
          [l("List world-writable paths", "سرد المسارات القابلة للكتابة من الجميع"), l("Yes, read-only scan", "نعم، مسح للقراءة فقط"), l("No, until remediation", "لا، حتى الإصلاح")],
          [l("List privileged group members", "سرد أعضاء المجموعات المميزة"), l("Yes, directory query", "نعم، استعلام دليل"), l("No", "لا")],
          [l("Correct folder inheritance", "تصحيح وراثة مجلد"), l("No", "لا"), l("Yes, with a rollback plan", "نعم، بخطة تراجع")],
          [l("Test effective access with a role account", "اختبار الوصول الفعلي بحساب دور"), l("Yes, read-only test", "نعم، اختبار للقراءة فقط"), l("No, if it only reads", "لا، إذا كان يقرأ فقط")],
          [l("Remove a stale group", "إزالة مجموعة قديمة"), l("No", "لا"), l("Yes, after owner confirmation", "نعم، بعد تأكيد المالك")],
        ],
      },
    },
    {
      h: l("9. Common permission mistakes and a review method", "9. أخطاء الصلاحيات الشائعة وطريقة المراجعة"),
      p: [
        l(
          "The most common mistake is granting access to a person instead of a role. The second is copying permissions from an old folder without checking the data classification. The third is using deny entries to patch a design problem, which produces rules that are hard to explain and easy to break. Other recurring errors include breaking inheritance without documenting it, leaving former employees in groups, and giving service accounts interactive logon rights.",
          "الخطأ الأكثر شيوعًا منح الوصول لشخص بدل دور. والثاني نسخ الصلاحيات من مجلد قديم دون فحص تصنيف البيانات. والثالث استخدام مدخلات المنع لترقيع مشكلة تصميم، فينتج قواعد يصعب شرحها ويسهل كسرها. وتشمل الأخطاء المتكررة الأخرى كسر الوراثة دون توثيق، وإبقاء الموظفين السابقين في المجموعات، ومنح حسابات الخدمة حقوق دخول تفاعلي.",
        ),
        l(
          "A practical review method has six steps: identify the data owner, state the intended access, expand groups and calculate effective access, test with a representative account, record gaps and agree remediation with an owner and a date. Repeat on a schedule and after major changes. The review is successful when the data owner can explain who has access and why, not when the spreadsheet has no red cells.",
          "لطريقة المراجعة العملية ست خطوات: حدد مالك البيانات، وحدد الوصول المقصود، ووسّع المجموعات واحسب الوصول الفعلي، واختبر بحساب ممثل، وسجّل الفجوات واتفق على الإصلاح بمالك وتاريخ. وكرر وفق جدول وبعد التغييرات الكبيرة. وتنجح المراجعة عندما يستطيع مالك البيانات شرح من يملك الوصول ولماذا، لا عندما يخلو الجدول من الخلايا الحمراء.",
        ),
        l(
          "Finally, remember that permissions are not the only control. Encryption protects data if a permission fails; logging detects misuse; backups allow recovery from accidental deletion; and data classification tells you which permissions matter most. Permission design is strongest when it is one layer in a coherent system rather than a substitute for every other control.",
          "وأخيرًا، تذكّر أن الصلاحيات ليست الضابط الوحيد. فالتشفير يحمي البيانات إذا فشلت صلاحية؛ والتسجيل يكشف سوء الاستخدام؛ والنسخ الاحتياطي يتيح التعافي من حذف عرضي؛ وتصنيف البيانات يخبرك أي الصلاحيات أهم. ويكون تصميم الصلاحيات أقوى عندما يمثل طبقة في نظام متماسك لا بديلًا عن كل ضابط آخر.",
        ),
      ],
      callout: {
        kind: "tip",
        text: l(
          "If you cannot explain why an identity has access, treat that as a finding even before you find evidence of misuse.",
          "إذا لم تستطع تفسير سبب امتلاك هوية للوصول، فاعتبر ذلك ملاحظة حتى قبل أن تجد دليل سوء استخدام.",
        ),
      },
    },
  ],
  examples: [
    l(
      "A payroll folder is owned by finance-admin with mode 750. The finance group can read and enter, others have no access. A new auditor needs read access for one week, so the administrator adds a named ACL entry with an expiry review rather than adding the auditor to the finance group.",
      "مجلد رواتب يملكه مسؤول المالية بالوضع 750. وتستطيع مجموعة المالية القراءة والدخول، ولا يملك الآخرون وصولًا. ويحتاج مدقق جديد وصول قراءة لأسبوع واحد، فيضيف المسؤول مدخل قائمة وصول مسمى بمراجعة انتهاء بدل إضافة المدقق إلى مجموعة المالية.",
    ),
    l(
      "A shared folder has a deny entry for a former contractor. The contractor's account was deleted, but the deny entry remains and later blocks a new employee who received the same user name. The review finds the stale entry because it documents the security identifier, not only the displayed name.",
      "مجلد مشترك به مدخل منع لمقاول سابق. حُذف حساب المقاول، لكن مدخل المنع بقي ولاحقًا منع موظفًا جديدًا حصل على اسم المستخدم نفسه. وتجد المراجعة المدخل القديم لأنها توثق معرّف الأمان لا الاسم المعروض فقط.",
    ),
    l(
      "A web application writes uploaded files to a directory that is world-writable and executable. An attacker uploads a script and requests it through the web server. The safer design stores uploads outside the web root, removes execute permission and scans files before any processing.",
      "يكتب تطبيق ويب الملفات المرفوعة إلى مجلد قابل للكتابة من الجميع وقابل للتنفيذ. فيرفع مهاجم سكربتًا ويطلبه عبر خادم الويب. ويخزن التصميم الأكثر أمانًا المرفوعات خارج جذر الويب، ويزيل صلاحية التنفيذ، ويفحص الملفات قبل أي معالجة.",
    ),
    l(
      "A backup service runs as a domain administrator because the backup software needed to read every file. A review replaces it with a managed service account that has backup rights only, cannot log in interactively and has its password rotated automatically.",
      "تعمل خدمة نسخ احتياطي بحساب مسؤول نطاق لأن برنامج النسخ احتاج قراءة كل ملف. وتستبدلها مراجعة بحساب خدمة مُدار يملك حقوق نسخ فقط، ولا يستطيع الدخول تفاعليًا، وتُبدّل كلمة مروره تلقائيًا.",
    ),
  ],
  realWorldScenarios: [
    l(
      "A hospital shares patient reports with an external billing vendor through a folder. The folder grants Modify to the Everyone group because a previous project needed quick access. A ransomware variant encrypts the shared reports, and the vendor's account also has write access to unrelated clinical documents.",
      "يشارك مستشفى تقارير المرضى مع مورّد فوترة خارجي عبر مجلد. ويمنح المجلد صلاحية التعديل لمجموعة الجميع لأن مشروعًا سابقًا احتاج وصولًا سريعًا. ويشفّر نوع من الفدية التقارير المشتركة، ويملك حساب المورّد أيضًا وصول كتابة إلى مستندات سريرية غير ذات صلة.",
    ),
    l(
      "A software company gives every developer local administrator rights because build tools require them. One developer runs a malicious package from a public registry, and the installer disables the endpoint agent. The incident review finds that only two build servers actually needed the privilege.",
      "شركة برمجيات تمنح كل مطور حقوق مسؤول محلي لأن أدوات البناء تتطلبها. ويشغّل مطور حزمة خبيثة من مستودع عام، فيعطّل المثبت وكيل الأجهزة. وتجد مراجعة الحادث أن خادمي بناء فقط كانا يحتاجان الامتياز فعليًا.",
    ),
    l(
      "A university department uses a shared staff account for a legacy application. When a staff member leaves, the password is not changed because other people still use the account. Months later, the departed employee logs in from outside and downloads student records.",
      "قسم جامعي يستخدم حساب موظفين مشتركًا لتطبيق قديم. وعند مغادرة موظف، لا تُغيَّر كلمة المرور لأن آخرين ما زالوا يستخدمون الحساب. وبعد أشهر، يسجل الموظف المغادر الدخول من الخارج وينزّل سجلات الطلاب.",
    ),
  ],
  diagram: {
    kind: "flow",
    title: l(
      "How an access decision is made",
      "كيف يُتخذ قرار الوصول",
    ),
    caption: l(
      "A request passes through identity, group expansion, object rules and additional controls. The final answer is effective access, not a single checkbox.",
      "يمر الطلب عبر الهوية وتوسيع المجموعات وقواعد الموضوع وضوابط إضافية. والإجابة النهائية هي الوصول الفعلي لا مربع اختيار واحد.",
    ),
    nodes: [
      { label: l("1. Identity", "1. الهوية"), desc: l("User, service or process context", "سياق المستخدم أو الخدمة أو العملية") },
      { label: l("2. Group expansion", "2. توسيع المجموعات"), desc: l("Direct and nested memberships", "العضويات المباشرة والمتداخلة") },
      { label: l("3. Object rules", "3. قواعد الموضوع"), desc: l("Allow, deny, explicit and inherited", "سماح ومنع وصريح وموروث") },
      { label: l("4. Additional controls", "4. ضوابط إضافية"), desc: l("Share permissions, encryption, application checks", "صلاحيات المشاركة والتشفير وفحوص التطبيق") },
      { label: l("5. Effective access", "5. الوصول الفعلي"), desc: l("The final permitted action", "الإجراء المسموح النهائي") },
      { label: l("6. Evidence", "6. الدليل"), desc: l("Who accessed what, when and from where", "من وصل إلى ماذا ومتى ومن أين") },
    ],
  },
  instructorDemo: l(
    "The instructor creates a test directory on a virtual machine they own and demonstrates three access decisions. First, they create a file with mode 640 and show why a second unprivileged user cannot read it. Second, they add a named ACL entry for a test account and show the effective access with getfacl. Third, they switch to a Windows host, copy a test folder, inspect inherited and explicit NTFS entries with icacls and explain why the Security tab alone is not enough. Every change happens on a disposable test path, and the instructor restores the original state at the end.",
    "ينشئ المدرب مجلد اختبار على جهاز افتراضي يملكه ويعرض ثلاثة قرارات وصول. أولًا، ينشئ ملفًا بالوضع 640 ويوضح لماذا لا يستطيع مستخدم ثانٍ بلا امتياز قراءته. ثانيًا، يضيف مدخل قائمة وصول مسمى لحساب اختبار ويعرض الوصول الفعلي بـ getfacl. ثالثًا، ينتقل إلى مضيف ويندوز وينسخ مجلد اختبار ويفحص مدخلات NTFS الموروثة والصريحة بـ icacls ويشرح لماذا لا تكفي علامة التبويب الأمان وحدها. ويجري كل تغيير على مسار اختبار قابل للتخلص منه، ويعيد المدرب الحالة الأصلية في النهاية.",
  ),
  exercises: [
    {
      title: l("Calculate six modes", "احسب ستة أوضاع"),
      instructions: l(
        "For each requirement, write the octal mode and the symbolic equivalent: a private key, a payroll file readable by a finance group, a public read-only policy, a private script, a shared executable directory and a file that only its owner may change. Explain one risk in the last case.",
        "لكل متطلب، اكتب الوضع الثماني والمكافئ الرمزي: مفتاح خاص، وملف رواتب تقرؤه مجموعة المالية، وسياسة عامة للقراءة فقط، وسكربت خاص، ومجلد تنفيذي مشترك، وملف لا يغيّره إلا مالكه. واشرح خطرًا واحدًا في الحالة الأخيرة.",
      ),
      expected: l(
        "Six correct modes with symbolic notation and a risk explanation that distinguishes confidentiality from integrity.",
        "ستة أوضاع صحيحة بصيغة رمزية وشرح خطر يميز السرية من السلامة.",
      ),
    },
    {
      title: l("Expand a group and predict access", "وسّع مجموعة وتوقع الوصول"),
      instructions: l(
        "Draw a small group hierarchy with three role groups and two nested groups. Add two users, mark one departed account and predict the effective access of each user to a folder granted to one parent group. Then state which single membership you would remove first and why.",
        "ارسم هرمًا صغيرًا بثلاث مجموعات أدوار ومجموعتين متداخلتين. وأضف مستخدمين، وعلّم حسابًا لمغادر، وتوقع الوصول الفعلي لكل مستخدم إلى مجلد ممنوح لمجموعة أب واحدة. ثم حدد العضوية الواحدة التي ستزيلها أولًا ولماذا.",
      ),
      expected: l(
        "A readable hierarchy, two access predictions and a justified removal that reduces risk without breaking a current role.",
        "هرم مقروء وتوقعان للوصول وإزالة مبررة تقلل المخاطر دون تعطيل دور حالي.",
      ),
    },
    {
      title: l("Write a permission change request", "اكتب طلب تغيير صلاحية"),
      instructions: l(
        "A new analyst needs read access to a shared incident folder for 30 days. Write a change request with the intended access, current state, test plan, approver, expiry and rollback. Keep it under one page.",
        "يحتاج محلل جديد وصول قراءة إلى مجلد حوادث مشترك لمدة 30 يومًا. اكتب طلب تغيير يتضمن الوصول المقصود والحالة الحالية وخطة الاختبار والمعتمد وتاريخ الانتهاء والتراجع. واجعل الطول أقل من صفحة.",
      ),
      expected: l(
        "A one-page request with a test account, least-privilege scope, expiry and a rollback that restores the exact previous state.",
        "طلب من صفحة واحدة بحساب اختبار ونطاق أقل امتياز وتاريخ انتهاء وتراجع يعيد الحالة السابقة بدقة.",
      ),
    },
  ],
  expectedResults: l(
    "By the end of the session, learners can read Linux mode bits and Windows NTFS entries, calculate effective access across groups and inheritance, identify dangerous permission patterns, design role-based groups and review a shared resource with evidence, a test account and an approval-based change plan.",
    "بنهاية الجلسة، يستطيع المتعلمون قراءة بتات الصلاحيات في لينكس ومدخلات NTFS في ويندوز، وحساب الوصول الفعلي عبر المجموعات والوراثة، وتحديد أنماط الصلاحيات الخطرة، وتصميم مجموعات قائمة على الأدوار، ومراجعة مورد مشترك بأدلة وحساب اختبار وخطة تغيير قائمة على الموافقة.",
  ),
  commonMistakes: [
    l(
      "Granting permissions directly to individuals instead of role groups.",
      "منح الصلاحيات مباشرة للأفراد بدل مجموعات الأدوار.",
    ),
    l(
      "Using chmod 777 or Everyone:Full control to make an application work.",
      "استخدام chmod 777 أو منح الجميع تحكمًا كاملًا لجعل تطبيق يعمل.",
    ),
    l(
      "Breaking inheritance without documenting the new explicit entries.",
      "كسر الوراثة دون توثيق المدخلات الصريحة الجديدة.",
    ),
    l(
      "Assuming the Security tab shows effective access rather than the configured entries.",
      "افتراض أن علامة التبويب الأمن تعرض الوصول الفعلي لا المدخلات المضبوطة.",
    ),
    l(
      "Leaving former employees in groups because their accounts were disabled but not removed.",
      "إبقاء الموظفين السابقين في المجموعات لأن حساباتهم عُطّلت ولم تُزل.",
    ),
    l(
      "Giving a service account interactive logon rights and broad network access.",
      "منح حساب خدمة حقوق دخول تفاعلي ووصول شبكي واسع.",
    ),
  ],
  bestPractices: [
    l("Grant to role groups and manage membership as the change control.", "امنح الصلاحيات لمجموعات الأدوار وأدر العضوية كضابط تغيير."),
    l("Document the data owner, classification and intended access for every shared repository.", "وثّق مالك البيانات وتصنيفها والوصول المقصود لكل مستودع مشترك."),
    l("Test effective access with an account that represents the real role.", "اختبر الوصول الفعلي بحساب يمثل الدور الحقيقي."),
    l("Keep privileged accounts separate, time-bound and fully logged.", "أبقِ الحسابات المميزة منفصلة ومحددة المدة ومسجلة بالكامل."),
    l("Review world-writable paths, SUID programs and privileged groups on a schedule.", "راجع المسارات القابلة للكتابة من الجميع وبرامج SUID والمجموعات المميزة وفق جدول."),
    l("Record current state and a rollback before changing permissions.", "سجّل الحالة الحالية وتراجعًا قبل تغيير الصلاحيات."),
  ],
  keyTakeaways: [
    l(
      "Effective access is the result of identity, groups, object rules, inheritance and additional controls.",
      "الوصول الفعلي نتيجة الهوية والمجموعات وقواعد الموضوع والوراثة والضوابط الإضافية.",
    ),
    l(
      "Linux mode bits are simple to read but easy to over-grant; 777 is almost always a finding.",
      "بتات الصلاحيات في لينكس سهلة القراءة لكن يسهل منحها بشكل واسع؛ والوضع 777 ملاحظة في الغالب.",
    ),
    l(
      "Windows deny entries, inheritance and share permissions make effective access a calculation.",
      "تجعل مدخلات المنع والوراثة وصلاحيات المشاركة في ويندوز الوصول الفعلي عملية حساب.",
    ),
    l(
      "Role groups and the joiner-mover-leaver process scale access control better than individual grants.",
      "توسع مجموعات الأدوار وعملية الانضمام والنقل والمغادرة التحكم بالوصول أفضل من المنح الفردية.",
    ),
    l(
      "Privileged access should be separate, temporary and visible; service identities deserve the same discipline.",
      "ينبغي أن يكون الوصول المميز منفصلًا ومؤقتًا وظاهرًا؛ وتستحق هويات الخدمة الانضباط نفسه.",
    ),
    l(
      "A permission review compares intended access with observed access and records evidence, owner and remediation.",
      "تقارن مراجعة الصلاحيات الوصول المقصود بالمرصود وتسجل الدليل والمالك والإصلاح.",
    ),
  ],
  lab: {
    title: l(
      "Lab 5 — Design and verify access for a small clinic share",
      "المختبر 5 — تصميم والتحقق من الوصول لمشاركة عيادة صغيرة",
    ),
    scenario: l(
      "A clinic stores four kinds of files on one file server: payroll, patient summaries, a public opening-hours notice and a deployment script for the appointment system. Staff, finance, clinicians and one external auditor need different levels of access. You must design the permissions, apply them only in a test directory or virtual machine, and prove the result with a test account.",
      "تخزن عيادة أربعة أنواع من الملفات على خادم ملفات واحد: الرواتب وملخصات المرضى وإشعار ساعات العمل العام وسكربت نشر لنظام المواعيد. ويحتاج الموظفون والمالية والأطباء ومدقق خارجي واحد إلى مستويات وصول مختلفة. عليك تصميم الصلاحيات، وتطبيقها فقط في مجلد اختبار أو جهاز افتراضي، وإثبات النتيجة بحساب اختبار.",
    ),
    safety: l(
      "Use only a disposable test directory on a system you own or a virtual machine you control. Do not change permissions on real payroll, patient, system or shared production folders. Do not use chmod -R 777, do not remove inheritance on a production share and do not grant access to real external accounts. Restore or delete the test directory when you finish, and do not copy real patient data into the exercise.",
      "استخدم فقط مجلد اختبار قابلًا للتخلص منه على نظام تملكه أو جهازًا افتراضيًا تتحكم به. لا تغيّر صلاحيات مجلدات الرواتب أو المرضى أو النظام أو المشاركات الإنتاجية الحقيقية. لا تستخدم chmod -R 777، ولا تزل الوراثة على مشاركة إنتاجية، ولا تمنح وصولًا لحسابات خارجية حقيقية. أعد المجلد التجريبي أو احذفه عند الانتهاء، ولا تنسخ بيانات مرضى حقيقية إلى التمرين.",
    ),
    steps: [
      l("Create a disposable test directory with four subfolders: payroll, patients, public and scripts.", "أنشئ مجلد اختبار قابلًا للتخلص منه بأربعة مجلدات فرعية: الرواتب والمرضى والعام والسكربتات."),
      l("Create harmless sample files in each folder and record the starting permissions.", "أنشئ ملفات عينة غير ضارة في كل مجلد وسجّل الصلاحيات الابتدائية."),
      l("Apply the designed Linux modes or Windows NTFS entries to each folder and file.", "طبّق أوضاع لينكس أو مدخلات NTFS المصممة على كل مجلد وملف."),
      l("Add one named auditor exception with read-only access and a documented expiry.", "أضف استثناء مدقق مسمى واحدًا بوصول قراءة فقط وانتهاء موثق."),
      l("Test each role with a representative account or a clearly simulated identity, and record allow and deny results.", "اختبر كل دور بحساب ممثل أو هوية محاكاة بوضوح، وسجّل نتائج السماح والمنع."),
      l("Run a read-only check for world-writable paths and unexpected special bits.", "شغّل فحصًا للقراءة فقط للمسارات القابلة للكتابة من الجميع والبتات الخاصة غير المتوقعة."),
      l("Write the access matrix, the evidence, one residual risk and the rollback steps.", "اكتب مصفوفة الوصول والأدلة وخطرًا متبقيًا واحدًا وخطوات التراجع."),
    ],
    expected: l(
      "An access matrix for four data types and four roles, an applied and tested permission design in a disposable directory, one documented auditor exception and a rollback that restores the starting state.",
      "مصفوفة وصول لأربعة أنواع بيانات وأربعة أدوار، وتصميم صلاحيات مطبق ومختبر في مجلد قابل للتخلص منه، واستثناء مدقق موثق واحد، وتراجع يعيد الحالة الابتدائية.",
    ),
    tool: "perm",
    objectives: [
      l("Translate data classification and roles into concrete Linux and Windows permissions.", "ترجمة تصنيف البيانات والأدوار إلى صلاحيات لينكس وويندوز ملموسة."),
      l("Apply role-based access with the smallest useful privilege.", "تطبيق وصول قائم على الأدوار بأقل صلاحية مفيدة."),
      l("Test effective access rather than assuming a folder summary is correct.", "اختبار الوصول الفعلي بدل افتراض صحة ملخص المجلد."),
      l("Document an exception with a reason, an owner and an expiry.", "توثيق استثناء بسبب ومالك وتاريخ انتهاء."),
      l("Produce a rollback that restores the exact previous permissions.", "إنتاج تراجع يعيد الصلاحيات السابقة بدقة."),
    ],
    prerequisites: [
      l("Session 4: identity context, services and read-only inspection.", "الجلسة 4: سياق الهوية والخدمات والفحص للقراءة فقط."),
      l("Session 5 theory: Linux modes, NTFS entries, inheritance and effective access.", "نظرية الجلسة 5: أوضاع لينكس ومدخلات NTFS والوراثة والوصول الفعلي."),
      l("A disposable test directory or virtual machine you own.", "مجلد اختبار قابل للتخلص منه أو جهاز افتراضي تملكه."),
    ],
    environment: l(
      "A Linux virtual machine with a test directory, or a Windows virtual machine with a test folder. The exercise does not require a network share, real users or production data. If you use Windows, a local test group and a second standard account are sufficient; if you use Linux, a test group and a second unprivileged account are sufficient.",
      "جهاز افتراضي لينكس بمجلد اختبار، أو جهاز افتراضي ويندوز بمجلد اختبار. لا يتطلب التمرين مشاركة شبكية أو مستخدمين حقيقيين أو بيانات إنتاج. وإذا استخدمت ويندوز، تكفي مجموعة اختبار محلية وحساب عادي ثانٍ؛ وإذا استخدمت لينكس، تكفي مجموعة اختبار وحساب ثانٍ بلا امتياز.",
    ),
    tools: [
      l("Linux shell with chmod, chown, getfacl and setfacl", "صدفة لينكس مع chmod وchown وgetfacl وsetfacl"),
      l("Or Windows command prompt or PowerShell with icacls", "أو موجه أوامر ويندوز أو PowerShell مع icacls"),
      l("A spreadsheet for the access matrix", "جدول بيانات لمصفوفة الوصول"),
      l("A second test account for verification", "حساب اختبار ثانٍ للتحقق"),
    ],
    authorization: l(
      "Scope: one disposable test directory or virtual machine that you own. Do not touch production shares, system directories, real payroll or patient data, or accounts you do not administer. Do not use recursive permission changes outside the test directory. Stop and restore the starting state if a command affects a path outside the approved scope.",
      "النطاق: مجلد اختبار واحد قابل للتخلص منه أو جهاز افتراضي تملكه. لا تلمس مشاركات إنتاجية أو مجلدات نظام أو بيانات رواتب أو مرضى حقيقية أو حسابات لا تديرها. لا تستخدم تغييرات صلاحيات تكرارية خارج مجلد الاختبار. وتوقف وأعد الحالة الابتدائية إذا أثّر أمر في مسار خارج النطاق المعتمد.",
    ),
    detailedSteps: [
      {
        title: l("Build the test structure", "أنشئ البنية التجريبية"),
        command: "mkdir -p /tmp/clinic-lab/{payroll,patients,public,scripts}",
        explanation: l(
          "Create four folders that represent different data classifications. On Windows, use New-Item -ItemType Directory for the same names under a test path such as C:\\ClinicLab. Record the starting owner, group and mode with ls -ld or icacls before making any change.",
          "أنشئ أربعة مجلدات تمثل تصنيفات بيانات مختلفة. وفي ويندوز استخدم New-Item -ItemType Directory للأسماء نفسها تحت مسار اختبار مثل C:\\ClinicLab. وسجّل المالك والمجموعة والوضع الابتدائي بـ ls -ld أو icacls قبل أي تغيير.",
        ),
        expected: l("Four empty test folders and a recorded starting state.", "أربعة مجلدات اختبار فارغة وحالة ابتدائية مسجلة."),
      },
      {
        title: l("Create harmless files and define the matrix", "أنشئ ملفات غير ضارة وحدد المصفوفة"),
        command: "printf 'test payroll\\n' > /tmp/clinic-lab/payroll/payroll.txt",
        explanation: l(
          "Create one text file per folder. Then write the intended access matrix: finance reads payroll, clinicians read patient summaries, all staff read the public notice, and only the deployment owner executes the script. Name the group or account that will receive each access.",
          "أنشئ ملفًا نصيًا واحدًا لكل مجلد. ثم اكتب مصفوفة الوصول المقصودة: المالية تقرأ الرواتب، والأطباء يقرؤون ملخصات المرضى، وجميع الموظفين يقرؤون الإشعار العام، ومالك النشر وحده ينفذ السكربت. وسمِّ المجموعة أو الحساب الذي سيستلم كل وصول.",
        ),
        expected: l("Four harmless files and a complete role-to-data matrix.", "أربعة ملفات غير ضارة ومصفوفة كاملة تربط الأدوار بالبيانات."),
      },
      {
        title: l("Apply Linux modes", "طبّق أوضاع لينكس"),
        command: "chmod 640 payroll/payroll.txt && chmod 750 payroll",
        explanation: l(
          "Set payroll to owner read/write, group read, others none; the directory needs execute for the group to enter it. Set the public notice to 644 and the scripts directory to 750 with the script at 700. Explain each digit before running the command, and check the result with ls -l.",
          "اضبط الرواتب على قراءة وكتابة للمالك وقراءة للمجموعة ولا شيء للآخرين؛ ويحتاج المجلد تنفيذًا للمجموعة لدخوله. واضبط الإشعار العام على 644 ومجلد السكربتات على 750 والسكربت على 700. واشرح كل رقم قبل تشغيل الأمر، وافحص النتيجة بـ ls -l.",
        ),
        expected: l("Correct modes for each object and a written explanation of every digit.", "أوضاع صحيحة لكل موضوع وشرح مكتوب لكل رقم."),
      },
      {
        title: l("Apply a named exception safely", "طبّق استثناءً مسمى بأمان"),
        command: "setfacl -m u:auditor:r-- public/notice.txt && getfacl public/notice.txt",
        explanation: l(
          "Use a test account named auditor. Grant read-only access to the public notice, not to payroll or patients. Read the resulting ACL and note the mask and the named entry. On Windows, the equivalent is icacls with a grant for the test account. Record the expiry date and the reason in the matrix.",
          "استخدم حساب اختبار باسم auditor. وامنح وصول قراءة فقط إلى الإشعار العام لا إلى الرواتب أو المرضى. واقرأ قائمة الوصول الناتجة ولاحظ القناع والمدخل المسمى. وفي ويندوز، المكافئ هو icacls بمنح للحساب التجريبي. وسجّل تاريخ الانتهاء والسبب في المصفوفة.",
        ),
        expected: l("A named read-only ACL entry, a visible mask and a documented expiry.", "مدخل قائمة وصول مسمى للقراءة فقط وقناع ظاهر وانتهاء موثق."),
      },
      {
        title: l("Test each role", "اختبر كل دور"),
        explanation: l(
          "Use the second test account to attempt read and write actions that the matrix should allow or deny. Record the actual result, including error messages. Do not use a real employee account and do not test against production. A denied action is evidence only if you record the identity, the path and the command.",
          "استخدم حساب الاختبار الثاني لمحاولة إجراءات قراءة وكتابة ينبغي أن تسمح بها المصفوفة أو تمنعها. وسجّل النتيجة الفعلية بما فيها رسائل الخطأ. لا تستخدم حساب موظف حقيقي ولا تختبر ضد الإنتاج. والإجراء الممنوع دليل فقط إذا سجّلت الهوية والمسار والأمر.",
        ),
        expected: l("An allow/deny result for each role and action, with the exact evidence.", "نتيجة سماح أو منع لكل دور وإجراء، مع الدليل الدقيق."),
      },
      {
        title: l("Check for accidental exposure", "افحص التعرض العرضي"),
        command: "find /tmp/clinic-lab -perm -o+w -o -perm -4000",
        explanation: l(
          "Search the test tree for world-writable paths and SUID files. On Windows, review the ACL summary with icacls and look for Everyone or broad group entries. Explain any finding and decide whether it is intentional and isolated or a design error.",
          "ابحث في الشجرة التجريبية عن المسارات القابلة للكتابة من الجميع وملفات SUID. وفي ويندوز، راجع ملخص قائمة الوصول بـ icacls وابحث عن مدخلات الجميع أو المجموعات الواسعة. واشرح أي ملاحظة وقرر هل هي مقصودة ومعزولة أم خطأ تصميم.",
        ),
        expected: l("A short finding list with a justification for every exception.", "قائمة ملاحظات قصيرة بتبرير لكل استثناء."),
      },
      {
        title: l("Write the rollback and limitations", "اكتب التراجع والقيود"),
        explanation: l(
          "Record the exact commands or GUI steps that restore the starting permissions, delete the test files and remove the test ACL entry. Add a limitations statement: what you did not test, which account was simulated and why the result may differ on a production file server.",
          "سجّل الأوامر أو خطوات الواجهة الدقيقة التي تعيد الصلاحيات الابتدائية وتحذف الملفات التجريبية وتزيل مدخل قائمة الوصول التجريبي. وأضف بيان قيود: ما لم تختبره، وأي حساب حاكيته، ولماذا قد تختلف النتيجة على خادم ملفات إنتاجي.",
        ),
        expected: l("A tested rollback, a clean test directory and an explicit limitations statement.", "تراجع مختبر ومجلد اختبار نظيف وبيان قيود صريح."),
      },
    ],
    troubleshooting: [
      {
        problem: l("The second account can still read a file after chmod.", "ما زال الحساب الثاني يقرأ ملفًا بعد chmod."),
        fix: l("Check the file's ACL, the account's groups and whether the account is a member of the owning group. A named ACL entry or a supplementary group may override the simple mode.", "افحص قائمة وصول الملف ومجموعات الحساب وهل الحساب عضو في المجموعة المالكة. فقد يتجاوز مدخل قائمة وصول مسمى أو مجموعة إضافية الوضع البسيط."),
      },
      {
        problem: l("Windows reports access denied even though the Security tab shows Allow.", "يعرض ويندوز رفض الوصول رغم أن علامة التبويب الأمن تعرض سماحًا."),
        fix: l("Check deny entries, share permissions, the account's token and whether the user is in a group that is denied. Compare the effective access rather than one tab.", "افحص مدخلات المنع وصلاحيات المشاركة ورمز الحساب وهل المستخدم في مجموعة ممنوعة. وقارن الوصول الفعلي لا علامة تبويب واحدة."),
      },
      {
        problem: l("A recursive permission command changed more files than expected.", "غيّر أمر صلاحيات تكراري ملفات أكثر من المتوقع."),
        fix: l("Stop, record the command and restore from the documented starting state or a snapshot. Never continue a recursive change in production without a verified rollback.", "توقف وسجّل الأمر واستعد من الحالة الابتدائية الموثقة أو لقطة. ولا تتابع تغييرًا تكراريًا في الإنتاج دون تراجع متحقق منه."),
      },
    ],
    deliverables: [
      l("An access matrix covering four data types and four roles.", "مصفوفة وصول تغطي أربعة أنواع بيانات وأربعة أدوار."),
      l("Applied permissions in a disposable directory with recorded before and after states.", "صلاحيات مطبقة في مجلد قابل للتخلص منه بحالات قبل وبعد مسجلة."),
      l("A test log with identity, path, command and allow/deny result.", "سجل اختبار بالهوية والمسار والأمر ونتيجة السماح أو المنع."),
      l("A documented exception with reason, owner, expiry and rollback.", "استثناء موثق بالسبب والمالك والانتهاء والتراجع."),
    ],
    rubric: [
      { criterion: l("Access design matches data classification and role", "مطابقة تصميم الوصول لتصنيف البيانات والدور"), weight: 25 },
      { criterion: l("Correct and minimal permission application", "تطبيق الصلاحيات بشكل صحيح وأدنى حد"), weight: 20 },
      { criterion: l("Quality of effective-access testing and evidence", "جودة اختبار الوصول الفعلي والأدلة"), weight: 25 },
      { criterion: l("Exception handling, expiry and least privilege", "معالجة الاستثناء والانتهاء وأقل امتياز"), weight: 15 },
      { criterion: l("Rollback, limitations and clarity", "التراجع والقيود والوضوح"), weight: 15 },
    ],
  },
  quiz: [
    {
      q: l("What does mode 640 mean on Linux?", "ماذا يعني الوضع 640 في لينكس؟"),
      options: [
        l("Owner read/write, group read, others none", "المالك قراءة وكتابة، والمجموعة قراءة، والآخرون لا شيء"),
        l("Owner read/write/execute, group read, others none", "المالك قراءة وكتابة وتنفيذ، والمجموعة قراءة، والآخرون لا شيء"),
        l("Everyone read and write", "الجميع قراءة وكتابة"),
        l("Owner read only, group write only", "المالك قراءة فقط، والمجموعة كتابة فقط"),
      ],
      answer: 0,
      why: l("6 = read plus write for the owner, 4 = read for the group, 0 = no access for others.", "6 تعني قراءة وكتابة للمالك، و4 تعني قراءة للمجموعة، و0 تعني لا وصول للآخرين."),
    },
    {
      q: l("What does a umask of 077 usually produce for a new file?", "ماذا ينتج قناع umask بالقيمة 077 عادةً لملف جديد؟"),
      options: [
        l("Mode 777", "الوضع 777"),
        l("Mode 700", "الوضع 700"),
        l("Mode 600", "الوضع 600"),
        l("Mode 644", "الوضع 644"),
      ],
      answer: 2,
      why: l("The base 666 minus 077 leaves 600: read and write for the owner only.", "الأساس 666 ناقص 077 يترك 600: قراءة وكتابة للمالك فقط."),
    },
    {
      q: l("Why is a root-owned SUID binary a security concern?", "لماذا يعد برنامج SUID مملوكًا للمستخدم الأعلى قلقًا أمنيًا؟"),
      options: [
        l("It runs with the file owner's identity, so a flaw may yield root", "يعمل بهوية مالك الملف، فقد يمنح خلل ما صلاحيات المستخدم الأعلى"),
        l("It cannot be executed by anyone", "لا يستطيع أي شخص تنفيذه"),
        l("It encrypts the file system", "يشفر نظام الملفات"),
        l("It disables logging", "يعطّل التسجيل"),
      ],
      answer: 0,
      why: l("SUID elevates the process to the file owner. A vulnerable root-owned SUID program can become a privilege-escalation path.", "يرفع SUID العملية إلى مالك الملف. وقد يصبح برنامج SUID ضعيف مملوك للمستخدم الأعلى مسارًا لرفع الامتيازات."),
    },
    {
      q: l("What is the purpose of the sticky bit on a shared directory?", "ما الغرض من بت sticky في مجلد مشترك؟"),
      options: [
        l("It encrypts every file", "يشفر كل ملف"),
        l("It lets users delete only their own files", "يتيح للمستخدمين حذف ملفاتهم فقط"),
        l("It gives everyone execute permission", "يمنح الجميع صلاحية تنفيذ"),
        l("It hides the directory", "يخفي المجلد"),
      ],
      answer: 1,
      why: l("The sticky bit prevents users from deleting or renaming other users' files in a shared directory such as /tmp.", "يمنع بت sticky المستخدمين من حذف ملفات الآخرين أو إعادة تسميتها في مجلد مشترك مثل /tmp."),
    },
    {
      q: l("In Windows, which entry generally takes precedence?", "في ويندوز، أي مدخل تكون له الأولوية عادةً؟"),
      options: [
        l("An inherited allow entry", "مدخل سماح موروث"),
        l("An explicit allow entry", "مدخل سماح صريح"),
        l("A deny entry", "مدخل منع"),
        l("A share permission", "صلاحية مشاركة"),
      ],
      answer: 2,
      why: l("Deny entries generally take precedence over allow entries, which is why one deny can block otherwise valid access.", "تكون لمدخلات المنع الأولوية عادةً على مدخلات السماح، ولهذا قد يحجب منع واحد وصولًا صالحًا في غير ذلك."),
    },
    {
      q: l("What is effective access?", "ما الوصول الفعلي؟"),
      options: [
        l("The permission shown in one folder tab", "الصلاحية المعروضة في علامة تبويب مجلد واحدة"),
        l("The final result after groups, inheritance, deny rules and additional controls", "النتيجة النهائية بعد المجموعات والوراثة وقواعد المنع والضوابط الإضافية"),
        l("The owner's permission only", "صلاحية المالك فقط"),
        l("The permission assigned to the Everyone group", "الصلاحية المسندة لمجموعة الجميع"),
      ],
      answer: 1,
      why: l("Effective access is calculated from every applicable rule and the identity's actual group membership.", "يُحسب الوصول الفعلي من كل قاعدة منطبقة وعضوية الهوية الفعلية في المجموعات."),
    },
    {
      q: l("Which account design best supports accountability?", "أي تصميم حسابات يدعم المساءلة أفضل؟"),
      options: [
        l("One shared team account", "حساب فريق مشترك واحد"),
        l("A named account per person plus role groups", "حساب مسمى لكل شخص مع مجموعات أدوار"),
        l("One administrator account used by everyone", "حساب مسؤول واحد يستخدمه الجميع"),
        l("A guest account with no password", "حساب ضيف بلا كلمة مرور"),
      ],
      answer: 1,
      why: l("Named accounts make actions attributable, while role groups keep permission management scalable.", "تجعل الحسابات المسماة الإجراءات قابلة للنسب، وتبقي مجموعات الأدوار إدارة الصلاحيات قابلة للتوسع."),
    },
    {
      q: l("A user moves from finance to marketing. What should happen to the finance access?", "ينتقل مستخدم من المالية إلى التسويق. ماذا يجب أن يحدث بوصول المالية؟"),
      options: [
        l("It should remain for convenience", "يبقى للراحة"),
        l("It should be removed before or during the move", "يجب إزالته قبل النقل أو أثناءه"),
        l("It should be granted to the whole marketing team", "يجب منحه لفريق التسويق كله"),
        l("It should be converted into a shared password", "يجب تحويله إلى كلمة مرور مشتركة"),
      ],
      answer: 1,
      why: l("The mover step removes access that the new role no longer requires, preventing privilege accumulation.", "تزيل خطوة النقل الوصول الذي لم يعد الدور الجديد يحتاجه، فتمنع تراكم الامتيازات."),
    },
    {
      q: l("Why should service accounts not have interactive logon rights?", "لماذا لا ينبغي أن تملك حسابات الخدمة حقوق دخول تفاعلي؟"),
      options: [
        l("It slows down the service", "يبطئ الخدمة"),
        l("It turns a service identity into a hidden interactive account", "يحوّل هوية الخدمة إلى حساب تفاعلي خفي"),
        l("It prevents logging", "يمنع التسجيل"),
        l("It breaks disk encryption", "يعطل تشفير القرص"),
      ],
      answer: 1,
      why: l("Interactive logon lets a service account browse, run tools and move laterally like a human administrator, increasing exposure.", "يتيح الدخول التفاعلي لحساب الخدمة التصفح وتشغيل الأدوات والتحرك الجانبي مثل مسؤول بشري، فيزيد التعرض."),
    },
    {
      q: l("What is the safest first step before changing permissions on a production share?", "ما أول خطوة آمنة قبل تغيير الصلاحيات على مشاركة إنتاجية؟"),
      options: [
        l("Apply the change and see whether users complain", "تطبيق التغيير ورؤية هل يشتكي المستخدمون"),
        l("Capture the current state and define a rollback", "التقاط الحالة الحالية وتحديد تراجع"),
        l("Grant Everyone full control temporarily", "منح الجميع تحكمًا كاملًا مؤقتًا"),
        l("Delete the share and recreate it", "حذف المشاركة وإعادة إنشائها"),
      ],
      answer: 1,
      why: l("A documented starting state and rollback make the change reversible and allow an accurate comparison afterward.", "تجعل الحالة الابتدائية الموثقة والتراجع التغيير قابلًا للعكس وتتيح مقارنة دقيقة بعد ذلك."),
    },
    {
      q: l("Which finding is most serious on a shared upload directory?", "أي ملاحظة أخطر في مجلد رفع مشترك؟"),
      options: [
        l("The directory has a description", "للمجلد وصف"),
        l("The directory is world-writable and executable by the web server", "المجلد قابل للكتابة من الجميع وقابل للتنفيذ بواسطة خادم الويب"),
        l("The directory contains many files", "المجلد يحتوي ملفات كثيرة"),
        l("The directory name is long", "اسم المجلد طويل"),
      ],
      answer: 1,
      why: l("Write plus execute on a web-accessible path can allow an attacker to upload and run code.", "الكتابة مع التنفيذ في مسار يمكن الوصول إليه عبر الويب قد تتيح للمهاجم رفع شيفرة وتشغيلها."),
    },
    {
      q: l("What should a permission review compare?", "ماذا ينبغي أن تقارن مراجعة الصلاحيات؟"),
      options: [
        l("File names with folder names", "أسماء الملفات بأسماء المجلدات"),
        l("Intended access with observed effective access", "الوصول المقصود بالوصول الفعلي المرصود"),
        l("Disk size with backup size", "حجم القرص بحجم النسخة الاحتياطية"),
        l("The number of files with the number of users", "عدد الملفات بعدد المستخدمين"),
      ],
      answer: 1,
      why: l("The review is meaningful only when the approved intent is compared with what the system actually permits.", "لا تكون المراجعة ذات معنى إلا عند مقارنة النية المعتمدة بما يسمح به النظام فعليًا."),
    },
  ],
  trueFalse: [
    {
      q: l("A world-writable file is always malicious.", "الملف القابل للكتابة من الجميع خبيث دائمًا."),
      answer: false,
      why: l("It is a risk pattern, not proof of malice. Public upload areas can be legitimate if isolated, monitored and non-executable.", "هو نمط خطر لا دليل خبث. وقد تكون مناطق الرفع العامة مشروعة إذا كانت معزولة ومراقبة وغير قابلة للتنفيذ."),
    },
    {
      q: l("The execute bit on a directory is required to enter it and reach files inside.", "يلزم بت التنفيذ على المجلد لدخوله والوصول إلى الملفات داخله."),
      answer: true,
      why: l("Directories use execute permission for traversal, read for listing and write for creating or deleting entries.", "تستخدم المجلدات صلاحية التنفيذ للعبور والقراءة للسرد والكتابة لإنشاء المدخلات أو حذفها."),
    },
    {
      q: l("A deny entry in Windows can override an allow entry.", "يمكن لمدخل منع في ويندوز تجاوز مدخل سماح."),
      answer: true,
      why: l("Deny entries generally take precedence, so they must be used carefully and documented.", "تكون لمدخلات المنع الأولوية عادةً، لذا يجب استخدامها بحذر وتوثيقها."),
    },
    {
      q: l("If a user leaves, disabling the account immediately invalidates every existing session and token.", "إذا غادر مستخدم، فإن تعطيل الحساب يبطل فورًا كل جلسة ورمز موجود."),
      answer: false,
      why: l("Active sessions and refresh tokens may remain valid. Revoke them explicitly and check connected devices.", "قد تبقى الجلسات النشطة ورموز التحديث صالحة. أبطلها صراحةً وافحص الأجهزة المتصلة."),
    },
    {
      q: l("Share permissions and NTFS permissions are both evaluated for a network access attempt.", "تُقيَّم صلاحيات المشاركة وصلاحيات NTFS معًا لمحاولة وصول شبكي."),
      answer: true,
      why: l("The more restrictive combination applies when a user reaches a folder over SMB.", "تنطبق النتيجة الأكثر تقييدًا عندما يصل المستخدم إلى مجلد عبر SMB."),
    },
    {
      q: l("Giving a service account domain administrator rights is acceptable if the service is internal.", "منح حساب خدمة حقوق مسؤول نطاق مقبول إذا كانت الخدمة داخلية."),
      answer: false,
      why: l("Internal services are still attack paths. Use the minimum rights the service needs and restrict interactive logon.", "تظل الخدمات الداخلية مسارات هجوم. استخدم أقل الحقوق التي تحتاجها الخدمة وقيّد الدخول التفاعلي."),
    },
  ],
  classification: [
    {
      prompt: l("Classify each Linux mode as private, group-readable, public or dangerous.", "صنّف كل وضع لينكس كخاص أو مقروء للمجموعة أو عام أو خطر."),
      categories: [
        l("Private", "خاص"),
        l("Group-readable", "مقروء للمجموعة"),
        l("Public", "عام"),
        l("Dangerous", "خطر"),
      ],
      items: [
        { text: l("600", "600"), answer: 0 },
        { text: l("640", "640"), answer: 1 },
        { text: l("644", "644"), answer: 2 },
        { text: l("777", "777"), answer: 3 },
        { text: l("700", "700"), answer: 0 },
      ],
      why: l("The last two digits show group and other access; 777 gives everyone write and execute and is almost always dangerous.", "يظهر الرقمان الأخيران وصول المجموعة والآخرين؛ و777 يمنح الجميع الكتابة والتنفيذ وهو خطر في الغالب."),
    },
    {
      prompt: l("Classify each Windows right as read-level, modify-level or administrative.", "صنّف كل حق في ويندوز كمستوى قراءة أو مستوى تعديل أو إداري."),
      categories: [
        l("Read-level", "مستوى قراءة"),
        l("Modify-level", "مستوى تعديل"),
        l("Administrative", "إداري"),
      ],
      items: [
        { text: l("Read and execute", "القراءة والتنفيذ"), answer: 0 },
        { text: l("Write", "الكتابة"), answer: 1 },
        { text: l("Change permissions", "تغيير الصلاحيات"), answer: 2 },
        { text: l("Modify", "التعديل"), answer: 1 },
        { text: l("Take ownership", "امتلاك الملكية"), answer: 2 },
      ],
      why: l("Read-level rights observe, modify-level rights change data, and administrative rights change the object's security.", "حقوق مستوى القراءة تلاحظ، وحقوق مستوى التعديل تغيّر البيانات، والحقوق الإدارية تغيّر أمن الموضوع."),
    },
    {
      prompt: l("Classify each access-control activity as design, review or remediation.", "صنّف كل نشاط تحكم بالوصول كتصميم أو مراجعة أو إصلاح."),
      categories: [
        l("Design", "تصميم"),
        l("Review", "مراجعة"),
        l("Remediation", "إصلاح"),
      ],
      items: [
        { text: l("Creating a finance-read role group", "إنشاء مجموعة دور لقراءة المالية"), answer: 0 },
        { text: l("Comparing intended access with observed access", "مقارنة الوصول المقصود بالوصول المرصود"), answer: 1 },
        { text: l("Removing a stale group membership", "إزالة عضوية مجموعة قديمة"), answer: 2 },
        { text: l("Writing the access matrix for a new share", "كتابة مصفوفة الوصول لمشاركة جديدة"), answer: 0 },
        { text: l("Restoring inheritance after a mistaken change", "استعادة الوراثة بعد تغيير خاطئ"), answer: 2 },
      ],
      why: l("Design sets intent, review compares intent with reality, and remediation corrects a specific gap.", "يحدد التصميم النية، وتقارن المراجعة النية بالواقع، ويصحح الإصلاح فجوة محددة."),
    },
    {
      prompt: l("Classify each account as standard, privileged or service.", "صنّف كل حساب كعادي أو مميز أو خدمة."),
      categories: [
        l("Standard", "عادي"),
        l("Privileged", "مميز"),
        l("Service", "خدمة"),
      ],
      items: [
        { text: l("A named account used only for domain administration", "حساب مسمى يستخدم لإدارة النطاق فقط"), answer: 1 },
        { text: l("A daily account used for email and documents", "حساب يومي للبريد والمستندات"), answer: 0 },
        { text: l("The identity running the appointment database", "الهوية التي تشغّل قاعدة بيانات المواعيد"), answer: 2 },
        { text: l("A temporary account approved for one maintenance window", "حساب مؤقت معتمد لنافذة صيانة واحدة"), answer: 1 },
      ],
      why: l("Separate identities make it possible to apply different controls and to attribute actions.", "تتيح الهويات المنفصلة تطبيق ضوابط مختلفة ونسب الإجراءات."),
    },
  ],
  scenarios: [
    {
      scenario: l(
        "A finance team stores payroll on a shared folder. The folder is owned by one administrator, grants Modify to the Everyone group and has no logging of file access. Staff complain that the folder is convenient, and the administrator is reluctant to change it during quarter end.",
        "فريق مالية يخزن الرواتب في مجلد مشترك. يملك المجلد مسؤول واحد، ويمنح صلاحية التعديل لمجموعة الجميع، ولا يسجل الوصول إلى الملفات. ويشتكي الموظفون من أن المجلد مريح، ويتردد المسؤول في تغييره أثناء نهاية الربع.",
      ),
      question: l("What is the best immediate risk-reduction step?", "ما أفضل خطوة فورية لتقليل المخاطر؟"),
      options: [
        l("Delete the folder and ask staff to use email attachments", "حذف المجلد وطلب استخدام مرفقات البريد"),
        l("Replace Everyone:Modify with a finance role group and log the change before quarter end", "استبدال صلاحية الجميع:تعديل بمجموعة دور مالية وتسجيل التغيير قبل نهاية الربع"),
        l("Give everyone administrator rights so they can manage it themselves", "منح الجميع حقوق مسؤول ليديروا المجلد بأنفسهم"),
        l("Wait until after quarter end and do nothing", "الانتظار بعد نهاية الربع وعدم فعل شيء"),
      ],
      answer: 1,
      why: l("Replacing the broad group with a role group reduces exposure immediately. The change should be tested and logged, not deferred indefinitely.", "يقلل استبدال المجموعة الواسعة بمجموعة دور التعرض فورًا. ويجب اختبار التغيير وتسجيله لا تأجيله بلا نهاية."),
    },
    {
      scenario: l(
        "A Linux web server has an upload directory with mode 777. The application writes files there, and the web server serves them directly. Users report that uploaded images sometimes disappear, and an analyst finds a file with a double extension in the directory.",
        "خادم ويب لينكس به مجلد رفع بالوضع 777. ويكتب التطبيق ملفات هناك، ويقدم خادم الويب الملفات مباشرة. ويبلغ المستخدمون عن اختفاء صور مرفوعة أحيانًا، ويجد محلل ملفًا بامتداد مزدوج في المجلد.",
      ),
      question: l("Which sequence best addresses the risk?", "أي تسلسل يعالج الخطر أفضل؟"),
      options: [
        l("Leave 777 because the application needs it, and rename suspicious files", "ترك 777 لأن التطبيق يحتاجه وإعادة تسمية الملفات المشبوهة"),
        l("Move uploads outside the web root, remove execute permission, restrict write access and investigate the suspicious file", "نقل المرفوعات خارج جذر الويب وإزالة صلاحية التنفيذ وتقييد الكتابة والتحقيق في الملف المشبوه"),
        l("Give the upload directory to the database administrator", "منح مجلد الرفع لمسؤول قاعدة البيانات"),
        l("Disable the web server permanently", "تعطيل خادم الويب نهائيًا"),
      ],
      answer: 1,
      why: l("The design should separate storage from execution, restrict write access and preserve the suspicious file as evidence for investigation.", "ينبغي للتصميم فصل التخزين عن التنفيذ وتقييد الكتابة وحفظ الملف المشبوه كدليل للتحقيق."),
    },
    {
      scenario: l(
        "A manager asks you to grant a contractor access to a project folder for three months. The contractor uses a personal email account and an unmanaged laptop. The folder contains confidential designs and the contractor's company has no security agreement on file.",
        "يطلب مدير منح مقاول وصولًا إلى مجلد مشروع لثلاثة أشهر. ويستخدم المقاول حساب بريد شخصيًا وحاسوبًا محمولًا غير مُدار. ويحتوي المجلد على تصاميم سرية ولا يوجد اتفاق أمني مع شركة المقاول.",
      ),
      question: l("What is the most defensible response?", "ما الاستجابة الأكثر قابلية للدفاع؟"),
      options: [
        l("Grant full control immediately because the manager approved it", "منح تحكمًا كاملًا فورًا لأن المدير وافق"),
        l("Grant the minimum access through a managed identity, with a security agreement, expiry and review", "منح أقل وصول عبر هوية مُدارة مع اتفاق أمني وانتهاء ومراجعة"),
        l("Send the designs by personal email instead", "إرسال التصاميم بالبريد الشخصي بدلًا من ذلك"),
        l("Give the contractor an administrator account to avoid future requests", "منح المقاول حساب مسؤول لتجنب الطلبات المستقبلية"),
      ],
      answer: 1,
      why: l("The request needs an approved identity, a security agreement, least privilege and an expiry. Manager approval alone does not address the data-protection risk.", "يحتاج الطلب هوية معتمدة واتفاقًا أمنيًا وأقل امتياز وانتهاءً. وموافقة المدير وحدها لا تعالج خطر حماية البيانات."),
    },
  ],
  practicalChecks: [
    {
      task: l(
        "On a test directory you own, create a file with mode 640 and a second unprivileged test account. Attempt to read the file as the second account, record the result and explain which permission class decided the outcome.",
        "في مجلد اختبار تملكه، أنشئ ملفًا بالوضع 640 وحساب اختبار ثانيًا بلا امتياز. وحاول قراءة الملف بالحساب الثاني، وسجّل النتيجة واشرح أي فئة صلاحية قررت النتيجة.",
      ),
      expected: l(
        "The second account is denied unless it belongs to the owning group, and the explanation names the group and other permission classes correctly.",
        "يُرفض الحساب الثاني ما لم يكن عضوًا في المجموعة المالكة، ويسمي الشرح فئتي المجموعة والآخرين بشكل صحيح.",
      ),
      hint: l("Check id and the file's group before concluding that the mode is wrong.", "افحص id ومجموعة الملف قبل استنتاج أن الوضع خاطئ."),
    },
    {
      task: l(
        "Inspect one shared folder on a system you administer. Record its owner, group, mode or ACL, inherited entries and one effective-access question you cannot answer without a test account.",
        "افحص مجلدًا مشتركًا واحدًا على نظام تديره. وسجّل مالكه ومجموعته ووضعه أو قائمة وصوله ومدخلاته الموروثة وسؤال وصول فعلي واحدًا لا تستطيع الإجابة عنه دون حساب اختبار.",
      ),
      expected: l(
        "A factual record with owner, group, entries and an explicit test question rather than a guess about access.",
        "سجل واقعي بالمالك والمجموعة والمدخلات وسؤال اختبار صريح بدل تخمين الوصول.",
      ),
      hint: l("Inherited entries and nested groups often explain why a simple mode does not match observed behaviour.", "غالبًا ما تشرح المدخلات الموروثة والمجموعات المتداخلة سبب عدم مطابقة الوضع البسيط للسلوك المرصود."),
    },
  ],
  homework: {
    title: l("Homework 5 — Audit one shared folder and design a safer model", "الواجب 5 — دقّق مجلدًا مشتركًا وصمّم نموذجًا أكثر أمانًا"),
    tasks: [
      l("Choose one shared folder you own or administer and record its owner, group, mode or ACL and inherited entries.", "اختر مجلدًا مشتركًا تملكه أو تديره وسجّل مالكه ومجموعته ووضعه أو قائمة وصوله ومدخلاته الموروثة."),
      l("List the roles that need access and the minimum action each role needs.", "اسرد الأدوار التي تحتاج الوصول والحد الأدنى من الإجراء الذي يحتاجه كل دور."),
      l("Identify every direct user entry, broad group entry and stale account.", "حدد كل مدخل مستخدم مباشر ومدخل مجموعة واسعة وحساب قديم."),
      l("Design a role-group model with owner, members and expiry rules.", "صمّم نموذج مجموعات أدوار بمالك وأعضاء وقواعد انتهاء."),
      l("Write a test plan using a representative account and a rollback that restores the current state.", "اكتب خطة اختبار بحساب ممثل وتراجع يعيد الحالة الحالية."),
      l("Add one paragraph explaining the residual risk that permissions alone cannot remove.", "أضف فقرة تشرح الخطر المتبقي الذي لا تستطيع الصلاحيات وحدها إزالته."),
    ],
    deliverable: l(
      "A two-page access review with the current state, role matrix, findings, proposed role groups, test plan, rollback and residual-risk paragraph.",
      "مراجعة وصول من صفحتين بالحالة الحالية ومصفوفة الأدوار والملاحظات ومجموعات الأدوار المقترحة وخطة الاختبار والتراجع وفقرة الخطر المتبقي.",
    ),
    criteria: [
      l("The current state is factual and reproducible.", "الحالة الحالية واقعية وقابلة لإعادة الإنتاج."),
      l("The role matrix applies least privilege and separation of duties.", "تطبق مصفوفة الأدوار أقل امتياز وفصل المهام."),
      l("Findings distinguish observed access from inferred risk.", "تميز الملاحظات الوصول المرصود من الخطر المستنتج."),
      l("The test plan uses a representative account and a real rollback.", "تستخدم خطة الاختبار حسابًا ممثلًا وتراجعًا حقيقيًا."),
      l("The residual-risk paragraph is specific, not generic.", "فقرة الخطر المتبقي محددة لا عامة."),
    ],
    challenge: l(
      "Compare Linux and Windows implementations of the same role model and explain one place where inheritance or deny semantics changes the result.",
      "قارن تطبيقي لينكس وويندوز لنموذج الأدوار نفسه واشرح موضعًا واحدًا تغيّر فيه الوراثة أو دلالات المنع النتيجة.",
    ),
  },
  refs: [
    {
      title: "chmod invocation",
      org: "GNU Coreutils",
      url: "https://www.gnu.org/software/coreutils/manual/html_node/chmod-invocation.html",
      desc: l("The authoritative reference for symbolic and numeric mode changes.", "المرجع المعتمد لتغييرات الأوضاع الرمزية والرقمية."),
    },
    {
      title: "NTFS overview",
      org: "Microsoft",
      url: "https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview",
      desc: l("Microsoft's overview of NTFS features, permissions and access control.", "نظرة Microsoft على ميزات NTFS والصلاحيات والتحكم بالوصول."),
    },
    {
      title: "Access control",
      org: "Microsoft",
      url: "https://learn.microsoft.com/en-us/windows/win32/secauthz/access-control",
      desc: l("Technical reference for security descriptors, ACLs, ACEs and access checks.", "مرجع تقني لواصفات الأمان وقوائم التحكم ومدخلاتها وفحوص الوصول."),
    },
    {
      title: "Windows security documentation",
      org: "Microsoft",
      url: "https://learn.microsoft.com/en-us/windows/security/",
      desc: l("Official guidance on identity, privileged access, auditing and hardening.", "إرشادات رسمية حول الهوية والوصول المميز والتدقيق والتحصين."),
    },
    {
      title: "CIS Benchmarks",
      org: "Center for Internet Security",
      url: "https://www.cisecurity.org/cis-benchmarks",
      desc: l("Configuration benchmarks that include account and permission controls.", "معايير إعداد تشمل ضوابط الحسابات والصلاحيات."),
    },
    {
      title: "Device security guidance",
      org: "NCSC UK",
      url: "https://www.ncsc.gov.uk/collection/device-security-guidance",
      desc: l("Practical guidance on accounts, least privilege and device configuration.", "إرشادات عملية حول الحسابات وأقل امتياز وإعداد الأجهزة."),
    },
  ],
  terms: [
    {
      term: l("Access control", "التحكم بالوصول"),
      def: l("The process of deciding whether a subject may perform an action on an object.", "عملية تقرير هل يجوز لذات تنفيذ إجراء على موضوع."),
      example: l("A file server checks group membership before opening a folder.", "يفحص خادم الملفات عضوية المجموعة قبل فتح مجلد."),
    },
    {
      term: l("Subject", "الذات"),
      def: l("The identity requesting access, such as a user, service or process.", "الهوية التي تطلب الوصول، مثل مستخدم أو خدمة أو عملية."),
      example: l("A backup service is a subject when it reads files.", "خدمة النسخ الاحتياطي ذات عندما تقرأ الملفات."),
    },
    {
      term: l("Object", "الموضوع"),
      def: l("The resource being protected, such as a file, folder or registry key.", "المورد المحمي، مثل ملف أو مجلد أو مفتاح سجل."),
      example: l("A payroll folder is an object.", "مجلد الرواتب موضوع."),
    },
    {
      term: l("Permission", "الصلاحية"),
      def: l("An allowed action on an object, such as read, write or execute.", "إجراء مسموح على موضوع، مثل القراءة أو الكتابة أو التنفيذ."),
      example: l("Read permission lets a user view a file.", "تتيح صلاحية القراءة للمستخدم عرض ملف."),
    },
    {
      term: l("Least privilege", "أقل امتياز"),
      def: l("Granting the minimum access needed for a task, for the shortest time.", "منح الحد الأدنى من الوصول اللازم لمهمة، لأقصر مدة."),
      example: l("An analyst receives read access, not modify access.", "يحصل المحلل على وصول قراءة لا تعديل."),
    },
    {
      term: l("Mode bits", "بتات الصلاحيات"),
      def: l("The Linux owner, group and other permission triples shown by ls -l.", "ثلاثيات صلاحيات المالك والمجموعة والآخرين في لينكس التي يعرضها ls -l."),
      example: l("The mode 640 gives the owner read and write.", "الوضع 640 يمنح المالك القراءة والكتابة."),
    },
    {
      term: l("umask", "قناع الصلاحيات"),
      def: l("A mask that removes default permission bits from newly created files and directories.", "قناع يزيل بتات الصلاحيات الافتراضية من الملفات والمجلدات الجديدة."),
      example: l("umask 077 creates private files by default.", "ينشئ القناع 077 ملفات خاصة افتراضيًا."),
    },
    {
      term: l("SUID", "معرّف المستخدم المحدد"),
      def: l("A special bit that makes a program run with the file owner's identity.", "بت خاص يجعل البرنامج يعمل بهوية مالك الملف."),
      example: l("A flawed root-owned SUID program can enable privilege escalation.", "قد يتيح برنامج SUID ضعيف مملوك للمستخدم الأعلى رفع الامتيازات."),
    },
    {
      term: l("Sticky bit", "البت اللاصق"),
      def: l("A directory bit that lets users delete only their own files.", "بت مجلد يتيح للمستخدمين حذف ملفاتهم فقط."),
      example: l("/tmp uses the sticky bit for shared temporary files.", "يستخدم /tmp البت اللاصق للملفات المؤقتة المشتركة."),
    },
    {
      term: l("ACL", "قائمة التحكم بالوصول"),
      def: l("A list of access entries attached to an object, including named users and groups.", "قائمة مدخلات وصول مرتبطة بموضوع، تشمل مستخدمين ومجموعات مسمين."),
      example: l("An ACL grants one auditor read access without adding them to finance.", "تمنح قائمة وصول مدققًا واحدًا قراءة دون إضافته إلى المالية."),
    },
    {
      term: l("DACL", "قائمة التحكم بالوصول التقديرية"),
      def: l("The Windows list of allow and deny entries attached to an object.", "قائمة ويندوز لمدخلات السماح والمنع المرتبطة بموضوع."),
      example: l("A DACL may allow a group and deny a specific user.", "قد تسمح قائمة الوصول لمجموعة وتمنع مستخدمًا محددًا."),
    },
    {
      term: l("ACE", "مدخل التحكم بالوصول"),
      def: l("One entry in an access control list naming a principal and its rights.", "مدخل واحد في قائمة تحكم بالوصول يسمي كيانًا وحقوقه."),
      example: l("An ACE allows the finance group to read a folder.", "يسمح مدخل وصول لمجموعة المالية بقراءة مجلد."),
    },
    {
      term: l("Inheritance", "الوراثة"),
      def: l("The mechanism by which child objects receive access entries from a parent.", "آلية استلام العناصر الفرعية مدخلات وصول من الأب."),
      example: l("A new file inherits the folder's permissions by default.", "يرث ملف جديد صلاحيات المجلد افتراضيًا."),
    },
    {
      term: l("Explicit permission", "صلاحية صريحة"),
      def: l("An access entry added directly to an object rather than inherited.", "مدخل وصول يضاف مباشرة إلى موضوع لا بالميراث."),
      example: l("A named auditor entry is explicit.", "مدخل المدقق المسمى صريح."),
    },
    {
      term: l("Effective access", "الوصول الفعلي"),
      def: l("The final access result after groups, inheritance, deny rules and other controls.", "نتيجة الوصول النهائية بعد المجموعات والوراثة وقواعد المنع وضوابط أخرى."),
      example: l("Effective access may deny a user even when one group is allowed.", "قد يمنع الوصول الفعلي مستخدمًا حتى عندما تُسمح له مجموعة واحدة."),
    },
    {
      term: l("Share permission", "صلاحية المشاركة"),
      def: l("A permission applied to a folder shared over SMB, evaluated with NTFS permissions.", "صلاحية تطبق على مجلد مشترك عبر SMB وتقيَّم مع صلاحيات NTFS."),
      example: l("The more restrictive of share and NTFS permissions applies.", "تنطبق الصلاحية الأكثر تقييدًا من صلاحيات المشاركة وNTFS."),
    },
    {
      term: l("Role group", "مجموعة الدور"),
      def: l("A group representing a job function, used to grant access consistently.", "مجموعة تمثل وظيفة وتستخدم لمنح الوصول باتساق."),
      example: l("finance-read is a role group for read-only finance access.", "finance-read مجموعة دور لوصول قراءة المالية."),
    },
    {
      term: l("Privileged access", "الوصول المميز"),
      def: l("Access that can change security settings, install software or manage other identities.", "وصول يستطيع تغيير إعدادات الأمن أو تثبيت برمجيات أو إدارة هويات أخرى."),
      example: l("Domain administrator is a privileged identity.", "مسؤول النطاق هوية مميزة."),
    },
    {
      term: l("Service account", "حساب الخدمة"),
      def: l("A dedicated identity used by a service rather than a person.", "هوية مخصصة تستخدمها خدمة لا شخص."),
      example: l("The backup agent uses a service account with backup rights only.", "يستخدم وكيل النسخ الاحتياطي حساب خدمة بحقوق نسخ فقط."),
    },
    {
      term: l("Joiner-mover-leaver", "الانضمام والنقل والمغادرة"),
      def: l("The lifecycle process that creates, changes and removes account access.", "عملية دورة الحياة التي تنشئ وصول الحساب وتغيّره وتزيله."),
      example: l("The mover step removes access that the new role no longer needs.", "تزيل خطوة النقل الوصول الذي لم يعد الدور الجديد يحتاجه."),
    },
    {
      term: l("Separation of duties", "فصل المهام"),
      def: l("Dividing sensitive work so one person cannot complete it alone.", "تقسيم العمل الحساس بحيث لا يستطيع شخص واحد إكماله وحده."),
      example: l("A payment requires a requester and an independent approver.", "تتطلب الدفعة طالبًا ومعتمدًا مستقلًا."),
    },
    {
      term: l("Need to know", "الحاجة إلى المعرفة"),
      def: l("Limiting data access to people who require it for their role.", "حصر الوصول إلى البيانات فيمن يحتاجها لدوره."),
      example: l("An engineer with server access may still not need patient records.", "قد لا يحتاج مهندس لديه وصول إلى الخادم إلى سجلات المرضى."),
    },
    {
      term: l("Access review", "مراجعة الوصول"),
      def: l("A periodic comparison of intended access with observed effective access.", "مقارنة دورية للوصول المقصود بالوصول الفعلي المرصود."),
      example: l("The review found three departed users still in a role group.", "وجدت المراجعة ثلاثة مستخدمين مغادرين ما زالوا في مجموعة دور."),
    },
    {
      term: l("Privilege escalation", "رفع الامتيازات"),
      def: l("Gaining higher rights than originally granted, often through a flawed permission or service.", "الحصول على حقوق أعلى مما مُنح أصلًا، غالبًا عبر صلاحية أو خدمة معيبة."),
      example: l("A writable root-executed script is a privilege-escalation path.", "السكربت القابل للكتابة والذي يشغّله المستخدم الأعلى مسار لرفع الامتيازات."),
    },
    {
      term: l("World-writable", "قابل للكتابة من الجميع"),
      def: l("A file or directory that any local user can modify.", "ملف أو مجلد يستطيع أي مستخدم محلي تعديله."),
      example: l("A world-writable directory without the sticky bit is especially risky.", "المجلد القابل للكتابة من الجميع بلا بت لاصق خطر بشكل خاص."),
    },
  ],
};
