import { useMemo, useState, type ReactNode } from "react";
import type { MatchData, OrderData } from "../content/types";
import { summarizePermissions } from "../lib/permissions";
import { useLang } from "../store";
import { Box, Btn, inp } from "./ui";

/* ---------- CIA classifier ---------- */
export function CiaTool() {
  const { tr } = useLang();
  const items = [
    { en: "A laptop holding unencrypted customer records is stolen from a car.", ar: "سرقة حاسوب محمول يحتوي على سجلات عملاء غير مشفّرة من داخل سيارة.", a: 0 },
    { en: "An attacker silently changes salary amounts in the payroll database.", ar: "مهاجم يغيّر مبالغ الرواتب في قاعدة بيانات الرواتب بصمت.", a: 1 },
    { en: "A flood of traffic takes the online store offline for six hours.", ar: "سيل من الزيارات يُخرج المتجر الإلكتروني عن الخدمة ست ساعات.", a: 2 },
    { en: "An employee e-mails a confidential contract to the wrong recipient.", ar: "موظف يرسل عقدًا سريًا إلى مستلم خاطئ بالبريد الإلكتروني.", a: 0 },
    { en: "Ransomware encrypts the hospital's patient-scheduling server.", ar: "برمجية فدية تشفّر خادم جدولة المرضى في المستشفى.", a: 2 },
    { en: "An intruder edits log files to erase evidence of their login.", ar: "متسلل يعدّل ملفات السجلات لمحو أثر دخوله.", a: 1 },
  ];
  const names = [tr("Confidentiality", "السرية"), tr("Integrity", "السلامة"), tr("Availability", "التوافر")];
  const [pick, setPick] = useState<(number | null)[]>(items.map(() => null));
  const right = pick.filter((p, i) => p === items[i].a).length;
  return (
    <Box title={tr("Which part of the CIA Traid is primarily broken?", "أي ركن من CIA Traid تم انتهاكه بشكل أساسي؟")}>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="rounded-lg bg-slate-900/70 p-3">
            <p className="mb-2 text-sm text-slate-200">{tr(it.en, it.ar)}</p>
            <div className="flex flex-wrap gap-2">
              {names.map((n, k) => (
                <Btn key={k} active={pick[i] === k} onClick={() => setPick((p) => p.map((v, j) => j === i ? k : v))}>
                  {n}
                </Btn>
              ))}
              {pick[i] !== null && (
                <span className={`self-center text-sm ${pick[i] === it.a ? "text-emerald-400" : "text-red-400"}`}>
                  {pick[i] === it.a ? "✓" : `✗ → ${names[it.a]}`}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate-400" role="status" aria-live="polite">
        {tr("Correct so far", "الإجابات الصحيحة حتى الآن")}: <b className="text-emerald-300">{right}/{items.length}</b>
      </p>
    </Box>
  );
}

/* ---------- Phishing spotter ---------- */
export function PhishTool() {
  const { tr } = useLang();
  const parts = [
    { en: "From: support@paypa1-secure-alerts.com", ar: "من: support@paypa1-secure-alerts.com", bad: true, why: ["Look-alike domain (paypa1 with the digit 1).", "نطاق مشابه شكليًا (الرقم 1 بدل الحرف l)."] },
    { en: "Subject: URGENT – account suspended in 24 hours!", ar: "الموضوع: عاجل – سيتم تعليق حسابك خلال 24 ساعة!", bad: true, why: ["Artificial urgency pressures you to skip thinking.", "استعجال مصطنع يدفعك لتجاوز التفكير."] },
    { en: "Dear Customer,", ar: "عزيزي العميل،", bad: true, why: ["Generic greeting – a real provider usually uses your name.", "تحية عامة – المزود الحقيقي يستخدم اسمك عادةً."] },
    { en: "Link: Verify now → http://paypa1-login.example-verify.net/signin", ar: "الرابط: تحقق الآن ← http://paypa1-login.example-verify.net/signin", bad: true, why: ["The real destination domain does not belong to the brand.", "النطاق الفعلي للوجهة لا يعود للعلامة التجارية."] },
    { en: "Attachment: Invoice_2291.pdf.exe", ar: "المرفق: Invoice_2291.pdf.exe", bad: true, why: ["Double extension – it is an executable, not a PDF.", "امتداد مزدوج – هو ملف تنفيذي وليس PDF."] },
    { en: "Date received: Tuesday 09:14, during business hours", ar: "تاريخ الاستلام: الثلاثاء 09:14 في ساعات العمل", bad: false, why: ["Normal timing alone proves nothing either way.", "التوقيت الطبيعي وحده لا يثبت شيئًا."] },
    { en: "Footer: 'We will never ask for your password by e-mail.'", ar: "التذييل: «لن نطلب كلمة مرورك عبر البريد الإلكتروني».", bad: false, why: ["Consistent with good security practice (but attackers can copy it).", "يتوافق مع الممارسات الجيدة (لكن المهاجم قد ينسخه)."] },
  ];
  const [sel, setSel] = useState<boolean[]>(parts.map(() => false));
  const [rev, setRev] = useState(false);
  const good = parts.filter((p, i) => p.bad === sel[i]).length;
  return (
    <Box title={tr("Click every suspicious element of this e-mail", "انقر على كل عنصر مشبوه في هذه الرسالة")}>
      <div className="space-y-2 rounded-xl bg-white/95 p-4 text-slate-800">
        {parts.map((p, i) => (
          <button
            key={i}
            type="button"
            aria-pressed={sel[i]}
            onClick={() => !rev && setSel((s) => s.map((v, j) => j === i ? !v : v))}
            className={`block min-h-11 w-full rounded border px-3 py-2 text-start text-sm focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${
              rev ? (p.bad === sel[i] ? "border-emerald-500 bg-emerald-100" : "border-red-500 bg-red-100") : sel[i] ? "border-amber-500 bg-amber-100" : "border-slate-300 hover:bg-slate-100"}
            }`}
          >
            {tr(p.en, p.ar)}
            {rev && <span className="mt-1 block text-xs font-medium text-slate-600">{p.bad ? "⚠ " : "ℹ "}{tr(p.why[0], p.why[1])}</span>}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Btn onClick={() => setRev(true)} disabled={rev}>{tr("Reveal analysis", "اكشف التحليل")}</Btn>
        <Btn onClick={() => { setRev(false); setSel(parts.map(() => false)); }}>{tr("Reset", "إعادة")}</Btn>
        {rev && <span className="text-sm text-slate-300" role="status" aria-live="polite">{good}/{parts.length} {tr("judged correctly", "حُكم عليها بشكل صحيح")}</span>}
      </div>
    </Box>
  );
}

/* ---------- Linux permission calculator ---------- */
export function PermTool() {
  const { tr } = useLang();
  const [b, setB] = useState<boolean[]>([true, true, false, true, false, false, false, false, false]);
  const who = [tr("Owner", "المالك"), tr("Group", "المجموعة"), tr("Others", "الآخرون")];
  const what = [tr("Read (4)", "قراءة (4)"), tr("Write (2)", "كتابة (2)"), tr("Execute (1)", "تنفيذ (1)")];
  const perms = summarizePermissions(b);
  const warn = perms.worldWritable
    ? tr("World-writable: any user on the system can modify this file. Avoid.", "قابل للكتابة من الجميع: أي مستخدم يستطيع تعديل الملف. تجنّب ذلك.")
    : perms.everyoneReadable
      ? tr("Everyone can read it – is that intended for sensitive data?", "الجميع يستطيع قراءته – هل هذا مقصود للبيانات الحساسة؟")
      : perms.groupWritable
        ? tr("Group-writable: members of the file's group can modify it.", "قابل للكتابة منgruppe: أعضاء مجموعة الملف يستطيعون تعديله.")
        : tr("Looks reasonable for a private working file.", "يبدو مناسبًا لملف عمل خاص.");
  return (
    <Box title={tr("Linux permission calculator (chmod)", "حاسبة صلاحيات لينكس (chmod)")}>
      <div className="grid grid-cols-4 gap-2 text-sm" dir="ltr">
        <div />
        {what.map((w) => <div key={w} className="text-center text-xs text-slate-400">{w}</div>)}
        {who.map((w, g) => (
          <div key={g} className="contents">
            <div className="self-center text-slate-300">{w}</div>
            {[0, 1, 2].map((k) => (
              <label key={k} className="flex min-h-11 min-w-11 items-center justify-center p-1.5">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label={`${who[g]} – ${what[k]}`}
                  checked={b[g * 3 + k]}
                  onChange={() => setB((s) => s.map((v, j) => j === g * 3 + k ? !v : v))}
                />
              </label>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 font-mono text-lg" dir="ltr">
        <span className="rounded bg-slate-900 px-3 py-1 text-emerald-300">-{perms.symbolic}</span>
        <span className="rounded bg-slate-900 px-3 py-1 text-cyan-300">chmod {perms.octal} file.txt</span>
      </div>
      <p className={`mt-3 text-sm ${perms.worldWritable ? "text-red-400" : "text-slate-300"}`}>{warn}</p>
    </Box>
  );
}

/* ---------- CIDR calculator ---------- */
const toNum = (s: string) => {
  const p = s.trim().split(".");
  if (p.length !== 4 || p.some((x) => !/^\d{1,3}$/.test(x) || Number(x) > 255)) return null;
  return ((Number(p[0]) << 24) | (Number(p[1]) << 16) | (Number(p[2]) << 8) | Number(p[3])) >>> 0;
};
const toIp = (n: number) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join(".");
export function CidrTool() {
  const { tr } = useLang();
  const [ip, setIp] = useState("192.168.10.77");
  const [pre, setPre] = useState(26);
  const n = toNum(ip);
  let out: ReactNode = <p className="text-sm text-red-400">{tr("Enter a valid IPv4 address.", "أدخل عنوان IPv4 صحيحًا.")}</p>;
  if (n !== null) {
    const mask = pre === 0 ? 0 : (0xffffffff << (32 - pre)) >>> 0;
    const net = (n & mask) >>> 0;
    const bc = (net | (~mask >>> 0)) >>> 0;
    const hosts = pre >= 31 ? (pre === 31 ? 2 : 1) : 2 ** (32 - pre) - 2;
    const first = pre >= 31 ? net : net + 1;
    const last = pre >= 31 ? bc : bc - 1;
    const a = n >>> 24, b2 = (n >>> 16) & 255;
    const kind = a === 10 || (a === 172 && b2 >= 16 && b2 <= 31) || (a === 192 && b2 === 168) ? tr("Private (RFC 1918)", "خاص (RFC 1918)") : a === 127 ? tr("Loopback", "حلقة محلية") : a === 169 && b2 === 254 ? tr("Link-local (APIPA)", "محلي الرابط (APIPA)") : tr("Public / routable", "عام / قابل للتوجيه");
    const rows: [string, string][] = [
      [tr("Subnet mask", "قناع الشبكة"), toIp(mask)],
      [tr("Network address", "عنوان الشبكة"), toIp(net)],
      [tr("Broadcast address", "عنوان البث"), toIp(bc)],
      [tr("Usable range", "النطاق القابل للاستخدام"), `${toIp(first)} – ${toIp(last)}`],
      [tr("Usable hosts", "عدد الأجهزة"), String(hosts)],
      [tr("Address type", "نوع العنوان"), kind],
    ];
    out = (
      <dl className="grid gap-1 text-sm" dir="ltr">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-b border-slate-800 py-1">
            <dt className="text-slate-400">{k}</dt>
            <dd className="font-mono text-emerald-300">{v}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <Box title={tr("IPv4 / CIDR subnet calculator", "حاسبة شبكات IPv4 / CIDR")}>
      <div className="mb-4 flex flex-wrap items-center gap-2" dir="ltr">
        <input className={`${inp} w-44 font-mono`} value={ip} onChange={(e) => setIp(e.target.value)} aria-label={tr("IPv4 address", "عنوان IPv4")} />
        <span className="text-slate-400" aria-hidden="true">/</span>
        <input type="number" min={0} max={32} className={`${inp} w-20 font-mono`} value={pre} onChange={(e) => setPre(Math.min(32, Math.max(0, Number(e.target.value) || 0)))} aria-label={tr("Prefix length", "طول البادئة")} />
      </div>
      {out}
    </Box>
  );
}

/* ---------- Port reference ---------- */
const PORTS: [number, string, boolean, string, string][] = [
  [21, "FTP", false, "Clear-text file transfer – use SFTP/FTPS", "نقل ملفات بنص واضح – استخدم SFTP/FTPS"],
  [22, "SSH / SFTP", true, "Encrypted remote administration", "إدارة عن بُعد مشفّرة"],
  [23, "Telnet", false, "Clear-text remote shell – retire it", "طرفية عن بُعد بنص واضح – أوقفه"],
  [25, "SMTP", false, "Mail relay between servers (use STARTTLS)", "ترحيل البريد بين الخوادم (استخدم STARTTLS)"],
  [53, "DNS", false, "Name resolution (UDP/TCP) – watch for tunnelling", "تحليل الأسماء (UDP/TCP) – راقب الأنفاق"],
  [67, "DHCP", false, "Automatic IP configuration (UDP 67/68)", "إعداد IP تلقائي (UDP 67/68)"],
  [80, "HTTP", false, "Unencrypted web traffic", "حركة ويب غير مشفّرة"],
  [110, "POP3", false, "Clear-text mail retrieval", "جلب بريد بنص واضح"],
  [123, "NTP", false, "Time sync – abused for amplification", "مزامنة الوقت – تُستغل في التضخيم"],
  [143, "IMAP", false, "Mail access (use IMAPS 993)", "الوصول للبريد (استخدم IMAPS 993)"],
  [161, "SNMP", false, "Device management – v1/v2 are weak", "إدارة الأجهزة – النسختان 1 و2 ضعيفتان"],
  [389, "LDAP", false, "Directory queries (use LDAPS 636)", "استعلامات الدليل (استخدم LDAPS 636)"],
  [443, "HTTPS", true, "Web traffic protected by TLS", "ويب محمي بـ TLS"],
  [445, "SMB", false, "Windows file sharing – never expose to the Internet", "مشاركة ملفات ويندوز – لا تعرضه للإنترنت"],
  [3306, "MySQL", false, "Database – keep internal only", "قاعدة بيانات – أبقها داخلية فقط"],
  [3389, "RDP", false, "Remote Desktop – top ransomware entry point", "سطح المكتب البعيد – بوابة دخول رئيسية للفدية"],
];
export function PortTool() {
  const { tr } = useLang();
  const [q, setQ] = useState("");
  const [f, setF] = useState<"all" | "enc" | "clear">("all");
  const rows = PORTS.filter(([p, n, e]) => (f === "all" || (f === "enc") === e) && (`${p} ${n}`.toLowerCase().includes(q.toLowerCase())));
  return (
    <Box title={tr("Common ports & protocols reference", "مرجع المنافذ والبروتوكولات الشائعة")}>
      <div className="mb-3 flex flex-wrap gap-2">
        <input className={inp} placeholder={tr("Search port or name…", "ابحث برقم المنفذ أو الاسم…")} aria-label={tr("Search ports and protocols", "ابحث في المنافذ والبروتوكولات")} value={q} onChange={(e) => setQ(e.target.value)} />
        <Btn active={f === "all"} onClick={() => setF("all")}>{tr("All", "الكل")}</Btn>
        <Btn active={f === "enc"} onClick={() => setF("enc")}>{tr("Encrypted by default", "مشفّر افتراضيًا")}</Btn>
        <Btn active={f === "clear"} onClick={() => setF("clear")}>{tr("Needs care", "يحتاج حذرًا")}</Btn>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-start text-sm" aria-label={tr("Common ports and protocols", "المنافذ والبروتوكولات الشائعة")}>
          <tbody>
            {rows.map(([p, n, e, en, ar]) => (
              <tr key={p} className="border-b border-slate-800">
                <td className="py-1.5 pe-3 font-mono text-cyan-300">{p}</td>
                <td className="pe-3 font-semibold text-slate-100">{n}</td>
                <td className="pe-3">{e ? "🔒" : "⚠"}</td>
                <td className="text-slate-400">{tr(en, ar)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}

/* ---------- Firewall rule simulator ---------- */
type Rule = { id: number; src: "any" | "admin"; port: number | 0; action: "allow" | "deny" };
export function FirewallTool() {
  const { tr } = useLang();
  const [rules, setRules] = useState<Rule[]>([
    { id: 1, src: "any", port: 80, action: "allow" },
    { id: 2, src: "any", port: 443, action: "allow" },
    { id: 3, src: "admin", port: 22, action: "allow" },
    { id: 4, src: "any", port: 3389, action: "allow" },
    { id: 5, src: "any", port: 0, action: "deny" },
  ]);
  const pk = [
    { src: "any", port: 443, want: "allow" },
    { src: "any", port: 80, want: "deny" },
    { src: "admin", port: 22, want: "allow" },
    { src: "any", port: 22, want: "deny" },
    { src: "any", port: 3389, want: "deny" },
    { src: "any", port: 23, want: "deny" },
  ] as const;
  const evalPk = (p: (typeof pk)[number]) => {
    const r = rules.find((r) => (r.src === "any" || r.src === p.src) && (r.port === 0 || r.port === p.port));
    return r ?? null;
  };
  const move = (i: number, d: number) => setRules((rs) => { const a = rs.slice(); const j = i + d; if (j < 0 || j >= a.length) return rs; [a[i], a[j]] = [a[j], a[i]]; return a; });
  const okAll = pk.every((p) => (evalPk(p)?.action ?? "deny") === p.want);
  return (
    <Box title={tr("Firewall rule simulator – first match wins", "محاكي قواعد الجدار الناري – أول تطابق يُطبَّق")}>
      <p className="mb-3 text-sm text-slate-400">{tr("Policy goal: from the Internet only HTTPS (443) is allowed; SSH (22) only from the admin network. Edit the rules until every packet matches the goal.", "هدف السياسة: من الإنترنت يُسمح فقط بـ HTTPS (443)، وSSH (22) فقط من شبكة الإدارة. عدّل القواعد حتى تطابق كل الحزم الهدف.")}</p>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full min-w-[28rem] text-sm" dir="ltr" aria-label={tr("Firewall rules", "قواعد الجدار الناري")}>
          <thead><tr className="text-xs text-slate-400"><th>#</th><th>{tr("Source", "المصدر")}</th><th>{tr("Port", "المنفذ")}</th><th>{tr("Action", "الإجراء")}</th><th><span className="sr-only">{tr("Reorder", "إعادة الترتيب")}</span></th></tr></thead>
          <tbody>
            {rules.map((r, i) => (
              <tr key={r.id} className="border-t border-slate-800 text-center">
                <td className="py-1 text-slate-400">{i + 1}</td>
                <td>{r.src === "admin" ? tr("Admin network", "شبكة الإدارة") : tr("Any source", "أي مصدر")}</td>
                <td className="font-mono">{r.port === 0 ? tr("any", "أي") : r.port}</td>
                <td>
                  <button type="button" onClick={() => setRules((rs) => rs.map((x) => (x.id === r.id ? { ...x, action: x.action === "allow" ? "deny" : "allow" } : x)))} className={`min-h-11 rounded px-2 py-1 text-xs font-bold focus-visible:ring-2 focus-visible:ring-emerald-400 ${r.action === "allow" ? "bg-emerald-500/20 text-emerald-300" : "bg-red-500/20 text-red-300"}`}>
                    {r.action.toUpperCase()}
                  </button>
                </td>
                <td className="space-x-1"><Btn onClick={() => move(i, -1)} label={tr("Move rule up", "نقل القاعدة لأعلى")}>↑</Btn><Btn onClick={() => move(i, 1)} label={tr("Move rule down", "نقل القاعدة لأسفل")}>↓</Btn></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-1.5 sm:grid-cols-2">
        {pk.map((p, i) => {
          const r = evalPk(p);
          const act = r?.action ?? "deny";
          const good = act === p.want;
          return (
            <div key={i} className={`rounded-lg border px-3 py-2 text-xs ${good ? "border-emerald-600/60 bg-emerald-500/10" : "border-red-600/60 bg-red-500/10"}`} dir="ltr">
              {p.src === "admin" ? tr("Admin network", "شبكة الإدارة") : tr("Internet", "الإنترنت")} <span aria-hidden="true">→</span> TCP/{p.port} : <b>{act.toUpperCase()}</b> {good ? <span aria-label={tr("matches goal", "يطابق الهدف")}>✓</span> : `✗ (${tr("goal", "الهدف")}: ${p.want.toUpperCase()})`}
            </div>
          );
        })}
      </div>
      {okAll && <p className="mt-3 font-semibold text-emerald-400">✓ {tr("Policy goal achieved – least privilege in action.", "تحقق هدف السياسة – تطبيق لمبدأ أقل صلاحية.")}</p>}
    </Box>
  );
}

/* ---------- Generic match tool ---------- */
export function MatchTool({ data }: { data: MatchData }) {
  const { t, tr } = useLang();
  const [pick, setPick] = useState<number[]>(data.items.map(() => -1));
  const [chk, setChk] = useState(false);
  const right = pick.filter((p, i) => p === data.items[i].answer).length;
  return (
    <Box title={t(data.prompt)}>
      <div className="space-y-2">
        {data.items.map((it, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg bg-slate-900/70 p-3 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm text-slate-200">{t(it.text)}</p>
            <select className={inp} aria-label={t(it.text)} value={pick[i]} onChange={(e) => { setChk(false); setPick((p) => p.map((v, j) => (j === i ? Number(e.target.value) : v))); }}>
              <option value={-1}>—</option>
              {data.options.map((o, k) => <option key={k} value={k}>{t(o)}</option>)}
            </select>
            {chk && <span className={pick[i] === it.answer ? "text-emerald-400" : "text-red-400"}>{pick[i] === it.answer ? "✓" : `✗ → ${t(data.options[it.answer])}`}</span>}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Btn onClick={() => setChk(true)} disabled={pick.includes(-1)}>{tr("Check", "تحقق")}</Btn>
        {chk && <span className="text-sm text-slate-300" role="status" aria-live="polite">{right}/{data.items.length}</span>}
      </div>
    </Box>
  );
}

/* ---------- Generic ordering tool ---------- */
export function OrderTool({ data }: { data: OrderData }) {
  const { t, tr } = useLang();
  const n = data.items.length;
  const shuffled = useMemo(() => {
    const idx = data.items.map((_, i) => i);
    let seed = 7 + n;
    for (let i = n - 1; i > 0; i--) { seed = (seed * 9301 + 49297) % 233280; const j = seed % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    if (idx.every((v, i) => v === i)) idx.reverse();
    return idx;
  }, [data, n]);
  const [picks, setPicks] = useState<number[]>([]);
  const [chk, setChk] = useState(false);
  const right = picks.filter((p, i) => p === i).length;
  return (
    <Box title={t(data.prompt)}>
      <p className="mb-2 text-xs text-slate-400">{tr("Click the items in the correct order (1st, 2nd, …).", "انقر على العناصر بالترتيب الصحيح (الأول، الثاني، …).")}</p>
      <div className="grid gap-2">
        {shuffled.map((i) => {
          const pos = picks.indexOf(i);
          return (
            <button key={i} type="button" aria-pressed={pos >= 0} onClick={() => { setChk(false); setPicks((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i])); }} className={`flex min-h-11 items-center gap-3 rounded-lg border px-3 py-2 text-start text-sm focus-visible:ring-2 focus-visible:ring-emerald-400 ${pos >= 0 ? (chk ? (pos === i ? "border-emerald-500 bg-emerald-500/10" : "border-red-500 bg-red-500/10") : "border-cyan-400 bg-cyan-400/10") : "border-slate-700 bg-slate-900/70 hover:border-slate-500"}`}>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-emerald-300">{pos >= 0 ? pos + 1 : "·"}</span>
              <span className="text-slate-200">{t(data.items[i].text)}</span>
              {chk && pos >= 0 && pos !== i && data.items[i].hint && <span className="ms-auto text-xs text-amber-300">{t(data.items[i].hint!)}</span>}
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <Btn onClick={() => setChk(true)} disabled={picks.length !== n}>{tr("Check", "تحقق")}</Btn>
        <Btn onClick={() => { setPicks([]); setChk(false); }}>{tr("Reset", "إعادة")}</Btn>
        {chk && <span className={`text-sm ${right === n ? "text-emerald-400" : "text-amber-300"}`} role="status" aria-live="polite">{right === n ? tr("Perfect order ✓", "ترتيب مثالي ✓") : `${right}/${n}`}</span>}
      </div>
    </Box>
  );
}