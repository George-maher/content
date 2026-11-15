import { useMemo, useState } from "react";
import { useLang } from "../store";
import { caesar, passwordStats, sha256 } from "../lib/sha256";
import { Box, Btn, inp } from "./ui";

/* ---------- Caesar cipher + brute force ---------- */
export function CipherTool() {
  const { tr } = useLang();
  const [text, setText] = useState("Meet me at the library at noon");
  const [shift, setShift] = useState(3);
  const [dec, setDec] = useState(false);
  const out = caesar(text, dec ? -shift : shift);
  const [show, setShow] = useState(false);
  return (
    <Box title={tr("Caesar cipher & brute-force", "تشفير قيصر وهجوم القوة الغاشمة")}>
      <div className="space-y-3" dir="ltr">
        <textarea className={`${inp} w-full font-mono`} rows={2} aria-label={tr("Text to encrypt or decrypt", "النص المطلوب تشفيره أو فك تشفيره")} value={text} onChange={(e) => setText(e.target.value)} />
        <div className="flex flex-wrap items-center gap-3">
          <Btn active={!dec} onClick={() => setDec(false)}>{tr("Encrypt", "تشفير")}</Btn>
          <Btn active={dec} onClick={() => setDec(true)}>{tr("Decrypt", "فك التشفير")}</Btn>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            {tr("Key (shift)", "المفتاح (الإزاحة)")}: <b className="w-6 text-emerald-300">{shift}</b>
            <input type="range" min={1} max={25} value={shift} onChange={(e) => setShift(Number(e.target.value))} className="accent-emerald-400" />
          </label>
        </div>
        <div className="rounded-lg bg-slate-900 p-3 font-mono text-emerald-300">{out}</div>
        <Btn onClick={() => setShow((s) => !s)}>{show ? tr("Hide", "إخفاء") : tr("Brute-force all 25 keys on the text above", "جرّب المفاتيح الـ25 على النص أعلاه")}</Btn>
        {show && (
          <div className="grid max-h-56 gap-0.5 overflow-auto rounded-lg bg-slate-900 p-3 font-mono text-xs text-slate-300">
            {Array.from({ length: 25 }, (_, i) => i + 1).map((k) => (
              <div key={k}><span className="inline-block w-8 text-slate-400">{k}</span>{caesar(text, -k)}</div>
            ))}
          </div>
        )}
        <p className="text-xs text-slate-400">{tr("Only 25 possible keys: a computer tries them all instantly. Security must come from a large key space, not from secrecy of the method.", "لا يوجد سوى 25 مفتاحًا: الحاسوب يجربها كلها فورًا. يجب أن يأتي الأمان من فضاء مفاتيح كبير لا من سرّية الطريقة.")}</p>
      </div>
    </Box>
  );
}

/* ---------- Hash / avalanche ---------- */
export function HashTool() {
  const { tr } = useLang();
  const [a, setA] = useState("Transfer $100 to Alice");
  const [b, setB] = useState("Transfer $900 to Alice");
  const [exp, setExp] = useState("");
  const ha = useMemo(() => sha256(a), [a]);
  const hb = useMemo(() => sha256(b), [b]);
  const diffHex = [...ha].filter((c, i) => c !== hb[i]).length;
  let bits = 0;
  for (let i = 0; i < 64; i++) { let x = parseInt(ha[i], 16) ^ parseInt(hb[i], 16); while (x) { bits += x & 1; x >>= 1; } }
  const matches = exp.trim().toLowerCase() === ha;
  return (
    <Box title={tr("SHA-256 hashing & the avalanche effect", "تجزئة SHA-256 وأثر الانهيار")}>
      <div className="space-y-3" dir="ltr">
        {[[a, setA, ha, "A"], [b, setB, hb, "B"]].map(([v, set, h, n]) => (
          <div key={n as string}>
            <input className={`${inp} w-full font-mono`} aria-label={n === "A" ? tr("Message A", "الرسالة A") : tr("Message B", "الرسالة B")} value={v as string} onChange={(e) => (set as (s: string) => void)(e.target.value)} />
            <div className="mt-1 break-all rounded bg-slate-900 p-2 font-mono text-xs text-emerald-300">{h as string}</div>
          </div>
        ))}
        <p className="text-sm text-slate-300">{tr("Hex characters that differ", "عدد الخانات المختلفة")}: <b className="text-amber-300">{diffHex}/64</b> · {tr("bits that differ", "بتات مختلفة")}: <b className="text-amber-300">{bits}/256</b> ({Math.round((bits / 256) * 100)}%)</p>
        <div className="border-t border-slate-800 pt-3">
          <p className="mb-1 text-sm text-slate-300">{tr("Integrity check: paste the published hash of message A", "فحص السلامة: الصق التجزئة المنشورة للرسالة A")}</p>
          <input className={`${inp} w-full font-mono text-xs`} aria-label={tr("Published SHA-256 hash", "تجزئة SHA-256 المنشورة")} value={exp} onChange={(e) => setExp(e.target.value)} placeholder={tr("64 hex characters", "64 خانة ست عشرية")} />
          {exp && <p className={`mt-1 text-sm font-semibold ${matches ? "text-emerald-400" : "text-red-400"}`} role="status" aria-live="polite">{matches ? tr("✓ Match – file/message is intact", "✓ مطابقة – الملف/الرسالة سليمة") : tr("✗ Mismatch – content was altered or the hash is wrong", "✗ عدم تطابق – تم تعديل المحتوى أو التجزئة خاطئة")}</p>}
        </div>
      </div>
    </Box>
  );
}

/* ---------- Password strength ---------- */
const COMMON = ["password", "123456", "12345678", "qwerty", "letmein", "welcome", "admin", "iloveyou", "password1", "abc123", "111111", "monkey", "dragon", "p@ssw0rd", "passw0rd"];
function human(sec: number, tr: (a: string, b: string) => string) {
  if (sec < 1) return tr("instantly", "فوريًا");
  if (sec < 60) return `${Math.round(sec)} ${tr("seconds", "ثانية")}`;
  if (sec < 3600) return `${Math.round(sec / 60)} ${tr("minutes", "دقيقة")}`;
  if (sec < 86400) return `${Math.round(sec / 3600)} ${tr("hours", "ساعة")}`;
  if (sec < 31536000) return `${Math.round(sec / 86400)} ${tr("days", "يوم")}`;
  const y = sec / 31536000;
  if (y > 1e9) return tr("longer than the age of the universe", "أطول من عمر الكون");
  return `${y >= 1e6 ? y.toExponential(1) : Math.round(y).toLocaleString("en")} ${tr("years", "سنة")}`;
}
export function PasswordTool() {
  const { tr } = useLang();
  const [pw, setPw] = useState("Summer2024!");
  const { pool, bits } = passwordStats(pw);
  const common = COMMON.includes(pw.toLowerCase());
  const eff = common ? 0 : bits;
  const rate = 1e10;
  const sec = common ? 0 : 2 ** Math.max(eff - 1, 0) / rate;
  const level = common || eff < 40 ? 0 : eff < 60 ? 1 : eff < 80 ? 2 : 3;
  const lab = [tr("Very weak", "ضعيفة جدًا"), tr("Weak", "ضعيفة"), tr("Good", "جيدة"), tr("Strong", "قوية")][level];
  const col = ["bg-red-500", "bg-amber-500", "bg-cyan-400", "bg-emerald-400"][level];
  return (
    <Box title={tr("Password entropy & offline cracking estimate", "إنتروبيا كلمة المرور وتقدير الكسر دون اتصال")}>
      <div className="space-y-3" dir="ltr">
        <input className={`${inp} w-full font-mono`} value={pw} onChange={(e) => setPw(e.target.value)} aria-label={tr("Password to test", "كلمة المرور المراد اختبارها")} />
        <div
          className="h-3 overflow-hidden rounded-full bg-slate-800"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(Math.min(100, eff))}
          aria-label={tr("Password strength", "قوة كلمة المرور")}
        >
          <div className={`h-full ${col} transition-all`} style={{ width: `${Math.min(100, (eff / 100) * 100)}%` }} />
        </div>
        <dl className="grid grid-cols-2 gap-2 text-sm">
          <dt className="text-slate-400">{tr("Rating", "التقييم")}</dt><dd className="font-semibold text-slate-100">{lab}</dd>
          <dt className="text-slate-400">{tr("Length / pool size", "الطول / حجم مجموعة الرموز")}</dt><dd className="font-mono">{pw.length} / {pool}</dd>
          <dt className="text-slate-400">{tr("Entropy (upper bound)", "الإنتروبيا (حد أعلى)")}</dt><dd className="font-mono">{Math.round(eff)} bits</dd>
          <dt className="text-slate-400">{tr("Time at 10 billion guesses/s", "الزمن عند 10 مليارات تخمين/ث")}</dt><dd className="font-semibold text-amber-300">{human(sec, tr)}</dd>
        </dl>
        {common && <p className="text-sm text-red-400" role="status" aria-live="polite">{tr("This is in every attacker's wordlist – it falls immediately regardless of 'complexity'.", "هذه ضمن قوائم كلمات كل مهاجم – تُكسر فورًا مهما بدت معقدة.")}</p>}
        <p className="text-xs text-slate-400">{tr("Note: this treats characters as random. Human patterns such as Season+Year+! are guessed far faster than the number shows. Try the passphrase 'violet-harbor-tractor-lemon-quiet' to compare.", "ملاحظة: يفترض الحساب أن الرموز عشوائية. الأنماط البشرية مثل (فصل+سنة+!) تُخمَّن أسرع بكثير. جرّب عبارة المرور 'violet-harbor-tractor-lemon-quiet' للمقارنة.")}</p>
      </div>
    </Box>
  );
}

/* ---------- RBAC least-privilege matrix ---------- */
export function RbacTool() {
  const { tr } = useLang();
  const roles = [
    [tr("Intern", "متدرب"), tr("Learns the codebase. No production access.", "يتعلم الشيفرة. لا وصول للإنتاج.")],
    [tr("Developer", "مطوّر"), tr("Writes and commits code. Never touches production data.", "يكتب الشيفرة. لا يلمس بيانات الإنتاج.")],
    [tr("DBA", "مدير قواعد البيانات"), tr("Maintains the production database only.", "يدير قاعدة بيانات الإنتاج فقط.")],
    [tr("Auditor", "مدقق"), tr("Reviews data, logs and payroll. Must never modify anything.", "يراجع البيانات والسجلات والرواتب. يجب ألا يعدّل شيئًا.")],
  ];
  const res = [tr("Source code", "الشيفرة"), tr("Prod DB", "قاعدة الإنتاج"), tr("Audit logs", "سجلات التدقيق"), tr("Payroll", "الرواتب")];
  const target = [[1, 0, 0, 0], [2, 0, 0, 0], [0, 2, 0, 0], [0, 1, 1, 1]];
  const [m, setM] = useState<number[][]>(roles.map(() => res.map(() => 2)));
  const [chk, setChk] = useState(false);
  const lab = ["–", "R", "R/W"];
  const cls = ["bg-slate-800 text-slate-400", "bg-cyan-500/20 text-cyan-200", "bg-red-500/20 text-red-300"];
  const wrong = m.flat().filter((v, i) => v !== target.flat()[i]).length;
  return (
    <Box title={tr("Least-privilege access matrix – click a cell to cycle none → read → read/write", "مصفوفة أقل صلاحية – انقر على الخلية للتبديل: لا شيء ← قراءة ← قراءة/كتابة")}>
      <p className="mb-3 text-xs text-slate-400">{tr("Everyone starts with full access (typical of an unmanaged system). Reduce each role to what its job needs.", "يبدأ الجميع بصلاحيات كاملة (وضع النظام غير المدار). اختصر كل دور إلى ما تتطلبه وظيفته.")}</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm" aria-label={tr("Least-privilege access matrix", "مصفوفة أقل صلاحية")}>
          <thead><tr><th className="p-1 text-start text-xs text-slate-400" />{res.map((r) => <th key={r} className="p-1 text-xs text-slate-400">{r}</th>)}</tr></thead>
          <tbody>
            {roles.map(([n, d], i) => (
              <tr key={i} className="border-t border-slate-800">
                <td className="py-1.5 pe-2"><div className="font-semibold text-slate-100">{n}</div><div className="text-xs text-slate-400">{d}</div></td>
                {res.map((_, j) => (
                  <td key={j} className="p-1 text-center">
                    <button
                      type="button"
                      aria-label={`${roles[i][0]} – ${res[j]}: ${lab[m[i][j]]}`}
                      onClick={() => { setChk(false); setM((x) => x.map((row, a) => row.map((v, b) => (a === i && b === j ? (v + 1) % 3 : v)))); }}
                      className={`h-11 w-16 rounded-md text-xs font-bold focus-visible:ring-2 focus-visible:ring-emerald-400 ${cls[m[i][j]]} ${chk ? (m[i][j] === target[i][j] ? "ring-2 ring-emerald-400" : "ring-2 ring-red-500") : ""}`}
                    >
                      {lab[m[i][j]]}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Btn onClick={() => setChk(true)}>{tr("Check against policy", "تحقق من السياسة")}</Btn>
        {chk && <span className={`text-sm ${wrong === 0 ? "text-emerald-400" : "text-amber-300"}`}>{wrong === 0 ? tr("✓ Perfect least-privilege design", "✓ تصميم مثالي لأقل صلاحية") : `${wrong} ${tr("cells still violate least privilege or block legitimate work", "خلايا تنتهك أقل صلاحية أو تعطل عملًا مشروعًا")}`}</span>}
      </div>
    </Box>
  );
}

/* ---------- SQL injection (display-only simulation) ---------- */
export function SqliTool() {
  const { tr } = useLang();
  const [u, setU] = useState("alice");
  const [p, setP] = useState("S3cret");
  const hasQuote = /'/.test(u + p);
  const bypass = hasQuote && (/\bor\b\s*['"]?\w+['"]?\s*=\s*['"]?\w+/i.test(u + p) || /--|#/.test(u));
  const presets: [string, string, string][] = [["Normal login", "alice", "S3cret"], ["Comment-out attack", "admin' --", "x"], ["Always-true attack", "' OR '1'='1", "' OR '1'='1"]];
  return (
    <Box title={tr("SQL injection: string-building vs parameterised queries (simulation only – nothing is executed)", "حقن SQL: بناء النص مقابل الاستعلامات المُعامَلة (محاكاة فقط – لا يتم تنفيذ شيء)")}>
      <div className="space-y-3" dir="ltr">
        <div className="flex flex-wrap gap-2">{presets.map(([n, a, b]) => <Btn key={n} onClick={() => { setU(a); setP(b); }}>{n}</Btn>)}</div>
        <div className="flex flex-wrap gap-2">
          <input className={`${inp} font-mono`} value={u} onChange={(e) => setU(e.target.value)} placeholder={tr("username", "اسم المستخدم")} aria-label={tr("Simulated username", "اسم المستخدم المحاكى")} />
          <input className={`${inp} font-mono`} value={p} onChange={(e) => setP(e.target.value)} placeholder={tr("password", "كلمة المرور")} aria-label={tr("Simulated password", "كلمة المرور المحاكاة")} />
        </div>
        <div>
          <div className="mb-1 text-xs font-semibold text-red-300">✗ {tr("Vulnerable: user input pasted into the SQL text", "ضعيف: مدخلات المستخدم تُلصق داخل نص SQL")}</div>
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-900 p-3 text-xs text-red-200">{`SELECT * FROM users\nWHERE name = '${u}' AND pass = '${p}'`}</pre>
          <p className={`mt-1 text-sm ${bypass ? "font-semibold text-red-400" : hasQuote ? "text-amber-300" : "text-slate-300"}`}>
            {bypass ? tr("The quote closes the string and changes the logic: the condition becomes always true (or the password check is commented out) → authentication bypass.", "علامة الاقتباس تغلق النص وتغيّر المنطق: يصبح الشرط صحيحًا دائمًا (أو يُعطَّل فحص كلمة المرور) ← تجاوز المصادقة.") : hasQuote ? tr("The quote breaks the SQL syntax – at minimum an error leak, at worst an injection.", "علامة الاقتباس تكسر صياغة SQL – في الحد الأدنى تسرّب خطأ وفي الأسوأ حقن.") : tr("Input is plain data – the query behaves as designed.", "المدخلات بيانات عادية – الاستعلام يعمل كما صُمم.")}
          </p>
        </div>
        <div>
          <div className="mb-1 text-xs font-semibold text-emerald-300">✓ {tr("Safe: parameterised query – input is always data, never code", "آمن: استعلام مُعامَل – المدخلات دائمًا بيانات وليست شيفرة")}</div>
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-900 p-3 text-xs text-emerald-200">{`SELECT * FROM users\nWHERE name = ? AND pass = ?\n-- bound values: [${JSON.stringify(u)}, ${JSON.stringify(p)}]`}</pre>
          <p className="mt-1 text-sm text-slate-300">{tr("The database treats the bound values as literal text, so quotes have no special meaning.", "تتعامل قاعدة البيانات مع القيم المربوطة كنص حرفي، فلا معنى خاصًا لعلامات الاقتباس.")}</p>
        </div>
      </div>
    </Box>
  );
}

/* ---------- Risk matrix ---------- */
export function RiskTool() {
  const { tr } = useLang();
  const init = [
    [tr("Phishing leads to stolen staff credentials", "تصيّد يؤدي إلى سرقة بيانات دخول الموظفين"), 4, 4],
    [tr("Unpatched public-facing web server", "خادم ويب عام غير محدّث"), 3, 5],
    [tr("Ransomware encrypts file server", "فدية تشفّر خادم الملفات"), 3, 5],
    [tr("Laptop with customer data is lost", "فقدان حاسوب محمول يحتوي بيانات عملاء"), 3, 3],
    [tr("Power outage in the server room", "انقطاع الكهرباء عن غرفة الخوادم"), 2, 3],
  ] as [string, number, number][];
  const [r, setR] = useState(init.map(([, l, i]) => ({ l, i, tx: 0 })));
  const rating = (s: number) => (s >= 17 ? [tr("Critical", "حرج"), "bg-red-600"] : s >= 10 ? [tr("High", "مرتفع"), "bg-orange-500"] : s >= 5 ? [tr("Medium", "متوسط"), "bg-amber-400 text-slate-900"] : [tr("Low", "منخفض"), "bg-emerald-500"]);
  const tx = [tr("Mitigate", "تخفيف"), tr("Transfer", "نقل"), tr("Accept", "قبول"), tr("Avoid", "تجنب")];
  const order = r.map((_, k) => k).sort((a, b) => r[b].l * r[b].i - r[a].l * r[a].i);
  const set = (k: number, f: Partial<(typeof r)[0]>) => setR((x) => x.map((v, j) => (j === k ? { ...v, ...f } : v)));
  return (
    <Box title={tr("Risk register: Risk = Likelihood × Impact (1–5)", "سجل المخاطر: الخطر = الاحتمالية × الأثر (1–5)")}>
      <div className="space-y-2">
        {order.map((k) => {
          const s = r[k].l * r[k].i;
          const [name, c] = rating(s);
          return (
            <div key={k} className="rounded-lg bg-slate-900/70 p-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm text-slate-100">{init[k][0]}</p>
                <span className={`shrink-0 rounded px-2 py-0.5 text-xs font-bold text-white ${c}`}>{s} · {name}</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <label>{tr("Likelihood", "الاحتمالية")} {r[k].l} <input type="range" min={1} max={5} value={r[k].l} onChange={(e) => set(k, { l: Number(e.target.value) })} className="accent-cyan-400" /></label>
                <label>{tr("Impact", "الأثر")} {r[k].i} <input type="range" min={1} max={5} value={r[k].i} onChange={(e) => set(k, { i: Number(e.target.value) })} className="accent-cyan-400" /></label>
                <select className={inp} aria-label={tr("Risk treatment", "معالجة الخطر")} value={r[k].tx} onChange={(e) => set(k, { tx: Number(e.target.value) })}>{tx.map((x, j) => <option key={j} value={j}>{x}</option>)}</select>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-xs text-slate-400">{tr("Re-rate after imagining a control (e.g. MFA lowers phishing impact; offline backups lower ransomware impact). Sorting shows what to treat first.", "أعد التقييم بعد تخيّل ضابط (مثل المصادقة متعددة العوامل أو النسخ الاحتياطي المعزول). يبيّن الترتيب ما يجب معالجته أولًا.")}</p>
    </Box>
  );
}

/* ---------- Log analyzer ---------- */
const SAMPLE = [
  "Mar 14 02:11:05 srv1 sshd[811]: Failed password for root from 203.0.113.45 port 40122 ssh2",
  "Mar 14 02:11:07 srv1 sshd[812]: Failed password for admin from 203.0.113.45 port 40130 ssh2",
  "Mar 14 02:11:09 srv1 sshd[813]: Failed password for admin from 203.0.113.45 port 40138 ssh2",
  "Mar 14 02:11:12 srv1 sshd[814]: Failed password for test from 203.0.113.45 port 40144 ssh2",
  "Mar 14 02:11:15 srv1 sshd[815]: Failed password for oracle from 203.0.113.45 port 40152 ssh2",
  "Mar 14 02:11:18 srv1 sshd[816]: Failed password for admin from 203.0.113.45 port 40160 ssh2",
  "Mar 14 02:11:21 srv1 sshd[817]: Accepted password for admin from 203.0.113.45 port 40168 ssh2",
  "Mar 14 08:30:44 srv1 sshd[901]: Accepted password for alice from 198.51.100.7 port 51200 ssh2",
  "Mar 14 09:02:10 srv1 sshd[930]: Failed password for bob from 192.0.2.10 port 33001 ssh2",
  "Mar 14 09:02:19 srv1 sshd[931]: Accepted password for bob from 192.0.2.10 port 33005 ssh2",
].join("\n");
export function LogTool() {
  const { tr } = useLang();
  const [log, setLog] = useState(SAMPLE);
  const [run, setRun] = useState(true);
  const stats = useMemo(() => {
    const m = new Map<string, { fail: number; ok: number; users: Set<string>; okAfterFail: boolean }>();
    for (const line of log.split("\n")) {
      const x = /(Failed|Accepted) password for (\S+) from (\S+)/.exec(line);
      if (!x) continue;
      const e = m.get(x[3]) ?? { fail: 0, ok: 0, users: new Set<string>(), okAfterFail: false };
      if (x[1] === "Failed") e.fail++;
      else { e.ok++; if (e.fail >= 3) e.okAfterFail = true; }
      e.users.add(x[2]);
      m.set(x[3], e);
    }
    return [...m.entries()].sort((a, b) => b[1].fail - a[1].fail);
  }, [log]);
  return (
    <Box title={tr("Authentication log analyzer", "محلل سجلات المصادقة")}>
      <textarea className={`${inp} h-40 w-full font-mono text-[11px]`} dir="ltr" aria-label={tr("Authentication log", "سجل المصادقة")} value={log} onChange={(e) => setLog(e.target.value)} spellCheck={false} />
      <div className="my-3 flex gap-2"><Btn onClick={() => setRun(true)}>{tr("Analyze", "تحليل")}</Btn><Btn onClick={() => setLog(SAMPLE)}>{tr("Restore sample", "استعادة العينة")}</Btn></div>
      {run && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[30rem] text-sm" dir="ltr" aria-label={tr("Authentication log findings", "نتائج سجل المصادقة")}>
            <thead><tr className="text-xs text-slate-400"><th className="text-start">IP</th><th>{tr("Failed", "فشل")}</th><th>{tr("Accepted", "نجح")}</th><th>{tr("Users tried", "المستخدمون")}</th><th className="text-start">{tr("Finding", "النتيجة")}</th></tr></thead>
            <tbody>
              {stats.map(([ip, e]) => (
                <tr key={ip} className="border-t border-slate-800 text-center">
                  <td className="py-1.5 text-start font-mono text-cyan-300">{ip}</td><td>{e.fail}</td><td>{e.ok}</td><td>{e.users.size}</td>
                  <td className="text-start">
                    {e.okAfterFail ? <b className="text-red-400">🚨 {tr("Brute force SUCCEEDED – treat as compromise", "نجح هجوم التخمين – تعامل معه كاختراق")}</b> : e.fail >= 5 ? <b className="text-amber-300">⚠ {tr("Brute-force pattern", "نمط تخمين مكثف")}</b> : <span className="text-slate-400">{tr("Normal", "طبيعي")}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Box>
  );
}
