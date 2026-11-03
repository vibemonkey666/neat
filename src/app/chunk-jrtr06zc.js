// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { F, L } from "./chunk-wrtp8qz8.js";
import { _, te, Ues, xpi, iCt, Xkn } from "./chunk-4kxznmzw.js";
import { Ft } from "./chunk-a16y5hcz.js";
import { yM, JRe, Xqe, JNe, Dbe, gS } from "./chunk-5rw2zfa0.js";
import { Ug } from "./chunk-wvbfdbhr.js";
import { bRe, at, qt, At } from "./chunk-at88wjsn.js";
import { ra, uo, Ar } from "./chunk-ajtyjx88.js";
import { vr } from "./chunk-azq9hjy0.js";
import { zo, Hrt } from "./chunk-zf79f62g.js";
import { Tv, tAt, Bn } from "./chunk-9z5ybxhe.js";
import { Nr, Xo } from "./chunk-928ws1pg.js";
import { Lt, qV } from "./chunk-r1dvrqha.js";
import { IAe } from "./chunk-d5zj5299.js";
import { pj } from "./chunk-g49hnbqz.js";
import { v8e, Iae, uZt, fZt, VMt } from "./chunk-54jzcsty.js";
import { vft } from "./chunk-dt3z0m7t.js";
import { cre, B1 } from "./chunk-s4n2rnah.js";
import { pu } from "./chunk-dggktcda.js";
import { hme, vho, pAs } from "./chunk-z29ek0s6.js";
import { SY } from "./chunk-6ngdk9eb.js";
import { qn } from "./chunk-0ex22bw7.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { qe } from "./chunk-0np0053t.js";
import { za, wii } from "./chunk-j4601ec1.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, Pci, Bd, M, oe, T, u, Ue, me, A } from "./chunk-0bqrj5ah.js";
import { Mb, et } from "./chunk-c9re0p40.js";
var O = 1,
  rkr = 2147483648,
  K$n = 8388608,
  N = 32,
  ce = 1e5,
  de = 1024,
  I = 4096,
  pe = N + 16,
  E = new Set(["__proto__", "constructor", "prototype"]),
  fe = new Set([
    "language",
    "outputStyle",
    "attribution",
    "includeCoAuthoredBy",
    "includeGitInstructions",
    "alwaysThinkingEnabled",
    "showThinkingSummaries",
    "permissions"
  ]),
  he = new Set(["commit", "pr", "sessionUrl", "commitTrailers"]),
  ge = new Set(["allow", "deny", "ask"]),
  _e = 32,
  ye = 64,
  D = p(() => Bd().min(0)),
  m = p(() => Bd().min(0).default(0)),
  Se = p(() => u({ version: Bd() })),
  Ee = p(() => u({ generation: Bd().min(1).max(rkr) })),
  we = p(() =>
    u({
      withheldSensitive: m(),
      withheldReadDenied: m(),
      rulesUnreadable: M().default(!1),
      includesNotSent: m(),
      symlinksNotSent: m(),
      notDestinations: m(),
      overCap: m(),
      unreadable: m(),
      settingsKeysWithheld: m(),
      credentialTextsWithheld: m(),
      rulesCoveringDeviceTools: m(),
      droppedRules: u({
        rooted: m(),
        device: m(),
        invalid: m(),
        overCap: m(),
        credential: m(),
        credentialRestrictions: m(),
        guarded: m()
      }).default(() => ({
        rooted: 0,
        device: 0,
        invalid: 0,
        overCap: 0,
        credential: 0,
        credentialRestrictions: 0,
        guarded: 0
      }))
    })
  ),
  Ae = p(() => Ue({ path: o().min(1).max(de), size: D(), sha256: o().regex(Mb), content: Pci() })),
  z = p(() =>
    u({
      version: A(O),
      generation: Bd().min(1).max(rkr),
      writtenAtMs: D(),
      files: T(Ae()).max(I),
      settings: me(o(), oe()).nullable(),
      summary: we()
    })
  );
function B(e) {
  let t = e.map(fZt),
    n = new Set(
      t.flatMap((r) =>
        r
          .split("/")
          .slice(0, -1)
          .map((s, i, c) => c.slice(0, i + 1).join("/"))
      )
    );
  return new Set(t).size === t.length && t.every((r) => !n.has(r));
}
function cAs(e, t) {
  return { path: e, content: t, sha256: et(t) };
}
function W(e) {
  return e.length <= v8e && e.every((t) => t <= Iae) && e.reduce((t, n) => t + n, 0) <= uZt;
}
function Re(e) {
  return W(e.map((t) => t.content.length));
}
function uAs(e) {
  let { kept: t, droppedOverCap: n } = e.reduce(
    (r, s) => {
      if (r.kept.length < v8e && s.content.length <= Iae && r.keptBytes + s.content.length <= uZt)
        (r.kept.push(s), (r.keptBytes += s.content.length));
      else r.droppedOverCap.push(s);
      return r;
    },
    { kept: [], droppedOverCap: [], keptBytes: 0 }
  );
  return { kept: t, droppedOverCap: n };
}
function zMt(e) {
  if (!Re(e.files)) throw Error("home pack files exceed the caps");
  if (!B(e.files.map((i) => i.path)))
    throw Error("home pack lists two paths that are one file, or one as a directory of another");
  if (e.files.some((i) => et(i.content) !== i.sha256))
    throw Error("home pack file digest is stale");
  if (!e.files.every((i) => VMt(i.path)))
    throw Error("home pack names a path that is no destination");
  if (e.settings !== null && !G(e.settings))
    throw Error("home pack settings nest too deep or hold too much");
  if (e.settings !== null && !j(e.settings))
    throw Error("home pack settings hold a value JSON cannot carry");
  let t = K(e.settings);
  if (t === "over_bounds")
    throw Error("home pack settings carry more or longer keys than the portable filter writes");
  if (t === "not_portable_key")
    throw Error("home pack settings carry a key the portable filter never writes");
  let n = {
      version: O,
      generation: e.generation,
      writtenAtMs: e.writtenAtMs,
      files: e.files
        .toSorted(ke)
        .map((i) => ({
          path: i.path,
          size: i.content.length,
          sha256: i.sha256,
          content: i.content.toString("base64")
        })),
      settings: e.settings === null ? null : P(e.settings),
      summary: e.summary
    },
    r = z().safeParse(n);
  if (!r.success) throw Error("home pack is off its own schema");
  let s = Buffer.from(_(r.data));
  if (s.length > K$n) throw Error("home pack exceeds the row byte cap");
  return s;
}
function mme(e) {
  if (e.length > K$n) return { ok: !1, reason: "oversize" };
  let t = e.toString("utf8");
  if (U(t)) return { ok: !1, reason: "malformed" };
  let n = cZt(t),
    r = Se().safeParse(n);
  if (r.success && r.data.version !== O) return { ok: !1, reason: "unsupported_version" };
  if (be(n)) return { ok: !1, reason: "malformed" };
  if (!Oe(n)) return { ok: !1, reason: "malformed" };
  let s = z().safeParse(n);
  if (!s.success) return { ok: !1, reason: "malformed" };
  let i = s.data,
    c = i.files.filter(Pe);
  if (!B(c.map((h) => h.path))) return { ok: !1, reason: "malformed" };
  let a = c.filter((h) => h.size <= Iae);
  if (!W(a.map((h) => h.size))) return { ok: !1, reason: "over_cap" };
  let l = a.map(Ce),
    f = l.filter((h) => h !== null);
  if (f.length !== l.length) return { ok: !1, reason: "content_mismatch" };
  let d = K(i.settings);
  return {
    ok: !0,
    pack: {
      generation: i.generation,
      writtenAtMs: i.writtenAtMs,
      files: f,
      settings: i.settings === null ? null : d === "none" ? P(i.settings) : mho(i.settings),
      summary: i.summary
    },
    refused: { destination: i.files.length - c.length, overCap: c.length - a.length, settings: d }
  };
}
function fAs(e) {
  if (e.length > K$n) return null;
  let t = e.toString("utf8");
  if (U(t)) return null;
  let n = Ee().safeParse(cZt(t));
  return n.success ? n.data.generation : null;
}
function K(e) {
  if (e === null) return "none";
  let t = Object.keys(e).filter((r) => !E.has(r));
  if (t.length > _e || t.some((r) => r.length > ye)) return "over_bounds";
  return t.every((r) => fe.has(r)) &&
    x(e.attribution, he) &&
    x(e.permissions, ge) &&
    (!H(e.permissions) || Object.entries(e.permissions).every(([r, s]) => E.has(r) || Te(s)))
    ? "none"
    : "not_portable_key";
}
function mho(e) {
  let { permissions: t } = e;
  if (!H(t)) return null;
  let n = ["deny", "ask"].flatMap((r) => {
    let s = t[r],
      i = Array.isArray(s) ? s.filter((c) => typeof c === "string") : [];
    return i.length === 0 ? [] : [[r, i]];
  });
  return n.length === 0 ? null : { permissions: Object.fromEntries(n) };
}
function x(e, t) {
  return e === void 0 || (H(e) && Object.keys(e).every((n) => t.has(n) || E.has(n)));
}
function Te(e) {
  return Array.isArray(e) && e.every((t) => typeof t === "string");
}
function cZt(e) {
  try {
    return te(e);
  } catch {
    return;
  }
}
function U(e) {
  let t = 0,
    n = !1;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    if (n) {
      if (s === "\\") r++;
      else if (s === '"') n = !1;
    } else if (s === '"') n = !0;
    else if (s === "[" || s === "{") {
      if ((t++, t > pe)) return !0;
    } else if (s === "]" || s === "}") t--;
  }
  return !1;
}
function be(e) {
  let t = H(e) ? e.files : void 0;
  return Array.isArray(t) && t.length > I;
}
function Oe(e) {
  return !H(e) || (G(e.settings) && j(e.settings));
}
function Pe(e) {
  return VMt(e.path);
}
function Ce(e) {
  if (e.content.length !== Math.ceil(e.size / 3) * 4) return null;
  let t = Buffer.from(e.content, "base64");
  return t.length === e.size && et(t) === e.sha256
    ? { path: e.path, content: t, sha256: e.sha256 }
    : null;
}
function G(e) {
  let t = [{ value: e, depth: 0 }],
    n = 1;
  for (let r = t.pop(); r !== void 0; r = t.pop()) {
    let { value: s, depth: i } = r;
    if (i > N) return !1;
    if (typeof s !== "object" || s === null) continue;
    let c = Array.isArray(s) ? s : Object.values(s);
    if (((n += c.length), n > ce)) return !1;
    for (let a of c) t.push({ value: a, depth: i + 1 });
  }
  return !0;
}
function j(e) {
  let t = [e];
  while (t.length > 0) {
    let n = t.pop();
    if (
      n === null ||
      typeof n === "string" ||
      typeof n === "boolean" ||
      (typeof n === "number" && Number.isFinite(n))
    )
      continue;
    if (Array.isArray(n)) {
      for (let r = 0; r < n.length; r++) t.push(n[r]);
      continue;
    }
    if (H(n)) {
      let r = Object.getPrototypeOf(n);
      if (r === Object.prototype || r === null) {
        for (let s of Object.values(n)) t.push(s);
        continue;
      }
    }
    return !1;
  }
  return !0;
}
function P(e) {
  return Object.fromEntries(
    Object.keys(e)
      .filter((t) => !E.has(t))
      .toSorted()
      .map((t) => [t, Z(e[t])])
  );
}
function Z(e) {
  return Array.isArray(e) ? e.map(Z) : H(e) ? P(e) : e;
}
function ke(e, t) {
  return e.path < t.path ? -1 : e.path > t.path ? 1 : 0;
}
var ve = new RegExp(
    `^(?:${[String.raw`\*+`, String.raw`(["']?)(?:\$(?:env:)?[A-Za-z_]\w*|\$\{(?:env:)?[A-Za-z_][\w.]*(?::?\?[^{}]*)?\}|\$\{\{[^{}]*\}\}|\$\([^()]*\)|%[A-Za-z_]\w*%)\1`, String.raw`<[^<>]*>|\{[^{}]*\}|\{\{[^{}]*\}\}|%s|x+`, "password|passwd|pass|secret|changeme|example"].join("|")})?$`,
    "i"
  ),
  xe = /^(?:\[[^\]]*\]|[^:?#]*)(?::\d*)?[?#]/,
  Le = /^sha256:(?:[0-9a-f]{64}(?![\w.-])|[*$<{])/i;
function Gve(e) {
  return V(e) || (e.includes("\x00") && V(e.replaceAll("\x00", "")));
}
function V(e) {
  let t = e.replace(/%[0-9A-Fa-f]{2}|\\[nrt]/g, " "),
    n = t.replace(/[^\w.~+/=-]+/g, " "),
    r = [n, n.replace(/[.~+/=]+(?= |$)/g, " "), t.replace(/[^\w-]+/g, " ")];
  return (
    bRe(e) ||
    bRe(t) ||
    r.some((s) => iCt(s).length > 0) ||
    xpi(e).some(({ start: s, end: i, separatorEnd: c }) => {
      let a = e.slice(s, i),
        l = Xkn.exec(a);
      return (
        l !== null &&
        !ve.test(a.slice(l.index + l[0].length)) &&
        !Le.test(e.slice(c, c + 72)) &&
        !(xe.test(a) && Ues.test(e.slice(Math.max(0, s - 11), s - 3)))
      );
    })
  );
}
var Ne = [
    "language",
    "outputStyle",
    "attribution",
    "includeCoAuthoredBy",
    "includeGitInstructions",
    "alwaysThinkingEnabled",
    "showThinkingSummaries",
    "permissions"
  ],
  Ie = ["commit", "pr", "sessionUrl", "commitTrailers"],
  Me = ["allow", "deny", "ask"],
  Fe = Hrt,
  De = 256,
  He = 8192,
  ze = 1024,
  Y = 1000,
  Be = 1048576,
  re = new Set([...Xqe.filePatternTools, Ar, "MultiEdit", "LS"]),
  se = [
    qe,
    Ar,
    uo,
    B1,
    ...qV,
    pu,
    SY,
    Ug,
    ...wii.map((e) => Xo(za, e)),
    ...[...JRe].flatMap((e) => vft.map((t) => Xo(e, t))),
    "NotebookRead",
    "LS",
    ...Xqe.bashPrefixTools,
    At,
    Gs
  ],
  We = qV,
  $e = [...Xqe.bashPrefixTools, Gs],
  Ke = [at, qt, ra, ...qV, "MultiEdit", cre, ...se];
function Ge(e) {
  if (e === at) return Ke;
  if (e === Lt) return We;
  if (e === qe) return se;
  if (Xqe.bashPrefixTools.includes(e)) return $e;
  let t = Nr(e);
  if (t !== null && t.toolName === void 0 && !Tv(e)) return [`${Xo(t.serverName, "")}*`];
  return [e];
}
var je = new Set([...Xqe.bashPrefixTools, At]),
  Ze = new Set([qn, "WebBrowser"]),
  Ve = "/",
  ie = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]/u,
  Ye = /[\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}]|[^\P{Cc}\t\n\r]|\r(?!\n)/u,
  Xe = /^[\w*-]+$/,
  Je = /\*{3,}/,
  Qe = 8;
function V$n(
  e,
  { settingsToCloud: t = pj, preToolUseHookActiveHere: n, hasLostAnAllowEntryAtParse: r }
) {
  if (!tt(t))
    return {
      document: null,
      reason: "flag_off",
      counts: { forwardedKeys: 0, withheldKeys: 0, withheldCredentialTexts: 0, rules: k() }
    };
  if (!H(e))
    return {
      document: null,
      reason: "settings_unreadable",
      counts: { forwardedKeys: 0, withheldKeys: 0, withheldCredentialTexts: 0, rules: k() }
    };
  let s = St(g(e, "permissions"), n, r),
    i = g(e, "language"),
    c = {
      language: ee(typeof i === "string" ? i.trim() : i),
      outputStyle: ee(g(e, "outputStyle")),
      attribution: Ct(g(e, "attribution")),
      includeCoAuthoredBy: w(g(e, "includeCoAuthoredBy")),
      includeGitInstructions: w(g(e, "includeGitInstructions")),
      alwaysThinkingEnabled: w(g(e, "alwaysThinkingEnabled")),
      showThinkingSummaries: w(g(e, "showThinkingSummaries")),
      permissions: s.value
    },
    a = le(Ne.reduce((b, ue) => vt(b, c, ue), {})),
    l = a.kept ?? {},
    f = Object.keys(e),
    d = {
      forwardedKeys: Object.keys(l).length,
      withheldKeys: F(f, (b) => !Object.hasOwn(l, b)),
      withheldCredentialTexts: a.withheld,
      rules: s.counts
    };
  if (d.forwardedKeys === 0) return { document: null, reason: "nothing_to_send", counts: d };
  let h = {
    ...d,
    forwardedKeys: 0,
    withheldKeys: f.length,
    rules: { ...d.rules, kept: 0, coveringDeviceTools: 0 }
  };
  if (!Dbe(l).safeParse(l).success) return { document: null, reason: "schema_rejected", counts: h };
  if (Buffer.byteLength(gho(l), "utf8") > Be)
    return { document: null, reason: "settings_too_large", counts: h };
  return { document: l, counts: d };
}
function tt(e) {
  try {
    return e();
  } catch {
    return !1;
  }
}
function gho(e) {
  return (
    _(yM(e), null, 2) +
    `
`
  );
}
function nt(e, t) {
  if (e.length > ze) return "over_cap";
  if (Gve(e)) return "credential";
  if (ie.test(e) || Je.test(e) || F([...e], (s) => s === "*") > Qe || !JNe(e, t).valid)
    return "invalid";
  let { toolName: n, ruleContent: r } = Bn(e);
  if (!Xe.test(n)) return "invalid";
  if (Nr(n)?.serverName === zo) return t === "allow" ? "device" : "keep_covers_device_tools";
  if (r !== void 0 && (re.has(n) || Tv(n))) {
    let s = yt(r);
    if (s === "machine" || (s === "home" && t === "allow")) return "rooted";
  }
  if (r !== void 0 && t === "allow" && je.has(n) && !it(r, n)) return "rooted";
  if (r !== void 0 && t === "allow" && Ze.has(n) && ht(r)) return "rooted";
  if (t !== "allow" && _t(n)) return "keep_covers_device_tools";
  return "keep";
}
var X = "[A-Za-z0-9_.@*+][A-Za-z0-9_.@*+:~-]*",
  rt = new RegExp(`^(?:(?:\\./)?${X}(?:/${X})*/?|-{1,2}(?:[A-Za-z0-9][A-Za-z0-9_.-]*)?)$`),
  ot = new Set([
    "curl",
    "wget",
    "nc",
    "ncat",
    "netcat",
    "telnet",
    "ssh",
    "scp",
    "sftp",
    "rsync",
    "ping",
    "ping6",
    "traceroute",
    "dig",
    "nslookup",
    "host",
    "socat",
    "psql",
    "mysql",
    "redis-cli",
    "mongosh",
    "ftp",
    "http",
    "https",
    "xh",
    "nmap",
    "mtr",
    "mosh",
    "grpcurl",
    "websocat",
    "aria2c",
    "w3m",
    "lynx",
    "whois",
    "iwr",
    "irm",
    "invoke-webrequest",
    "invoke-restmethod",
    "test-netconnection",
    "tnc",
    "test-connection",
    "resolve-dnsname",
    "pg_dump",
    "pg_dumpall",
    "pg_restore",
    "pg_isready",
    "createdb",
    "dropdb",
    "mysqldump",
    "mysqladmin",
    "mariadb",
    "mariadb-dump",
    "mongo",
    "mongodump",
    "mongorestore",
    "mongoexport",
    "mongoimport",
    "redis-benchmark",
    "pgcli",
    "mycli",
    "mysqlsh",
    "clickhouse-client",
    "mongostat",
    "mongotop",
    "mongofiles"
  ]),
  q = new Set([
    "sudo",
    "doas",
    "env",
    "time",
    "timeout",
    "gtimeout",
    "watch",
    "xargs",
    "command",
    "builtin",
    "exec",
    "nohup",
    "nice",
    "caffeinate",
    "setsid",
    "stdbuf",
    "ionice",
    "chrt",
    "strace",
    "unbuffer",
    "sshpass",
    "proxychains",
    "proxychains4",
    "torsocks",
    "tsocks",
    "taskset",
    "numactl",
    "setpriv",
    "flock",
    "runuser"
  ]),
  st = new Set([
    vr,
    "gitlab.com",
    "bitbucket.org",
    "ssh.dev.azure.com",
    `ssh.${vr}`,
    "altssh.gitlab.com",
    "altssh.bitbucket.org",
    "codeberg.org"
  ]);
function it(e, t) {
  if (/(?:^|[\s:=])\d{4,}:\*$/.test(e.trim())) return !1;
  let n = e
      .trim()
      .replace(/(?::\*|\s+\*)$/, "")
      .split(/\s+/)
      .filter((i) => i !== ""),
    r = ct(n),
    s = r === null && S(n, 0) !== null && !n.some((i) => R(i) || /[*/\\]/.test(i));
  return (
    n.length > 0 &&
    n.every(
      (i, c) =>
        (s && ut(n, c)) ||
        (rt.test(i) &&
          !i.endsWith(":") &&
          !i.split(/[/:@]/).some(dt) &&
          !(i.startsWith("-") && i.includes("..")) &&
          !/\*[A-Za-z]*\.\./.test(i) &&
          !/^\*+-[A-Za-z]*\.\.(?:\/|$)/.test(i) &&
          !/^~|:\**~/.test(i) &&
          !/^[A-Za-z]:(?!:)/.test(i) &&
          !/[:@]\//.test(i) &&
          !(t === At && /^\**[A-Za-z][\w*]*:/.test(i)) &&
          !pt(i, r !== null && c > r && !i.startsWith("-")))
    )
  );
}
var J = new Set(["--host", "--hostname", "--bind", "--listen", "--addr", "--address", "-H", "-b"]),
  lt = new Set(["HOST", "HOSTNAME", "BIND", "BIND_ADDR", "BIND_ADDRESS"]);
function ut(e, t) {
  let n = e[t] ?? "",
    r = /^(--[a-z-]+)=(.+)$/.exec(n);
  if (r !== null) return J.has(r[1] ?? "") && C(r[2] ?? "");
  let s = /^([A-Z_]+)=(.+)$/.exec(n);
  if (s !== null) return lt.has(s[1] ?? "") && C(s[2] ?? "");
  return t > 0 && J.has(e[t - 1] ?? "") && C(n);
}
function C(e) {
  let t = e.toLowerCase();
  return [t, t.replace(/:\d{1,5}$/, "")].some(
    (n) =>
      n === "0.0.0.0" ||
      n === "127.0.0.1" ||
      n === "localhost" ||
      /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+localhost$/.test(n) ||
      n === "::" ||
      n === "[::]" ||
      n === "::1" ||
      n === "[::1]"
  );
}
function ct(e) {
  let t = S(e, 0);
  if (t !== null && R(e[t] ?? "")) return t;
  let n = e.findIndex((r, s) => s > (t ?? 0) && /^-(?:exec|execdir|ok|okdir)$/.test(r));
  if (n >= 0) {
    let r = S(e, n + 1);
    return r !== null && R(e[r] ?? "") ? r : null;
  }
  return null;
}
function R(e) {
  return ot.has(e.toLowerCase().replace(/\.(?:exe|cmd|bat|ps1)$/, ""));
}
function S(e, t) {
  let n = e[t];
  if (n === void 0) return null;
  if (/^[A-Za-z_][A-Za-z0-9_]*=/.test(n)) return S(e, t + 1);
  let r = n.toLowerCase().replace(/\.exe$/, "");
  if (!q.has(r)) return t;
  let s = t + 1;
  while (s < e.length) {
    let i = e[s] ?? "";
    if (i.startsWith("-")) {
      let c =
        (/^(?:-[A-Za-z]|--[A-Za-z][A-Za-z-]*)$/.test(i) ||
          ((r === "sudo" || r === "doas") && /^-[A-Za-z]+[ugUCDrtTph]$/.test(i))) &&
        !(e[s + 1] ?? "").startsWith("-") &&
        !R(e[s + 1] ?? "") &&
        !q.has((e[s + 1] ?? "").toLowerCase().replace(/\.exe$/, ""));
      s += c ? 2 : 1;
    } else if (/^\d[\d.]*[smhd]?$/.test(i)) s += 1;
    else break;
  }
  return S(e, s);
}
function dt(e) {
  return /^[.*]+$/.test(e) && !/^(?:\.|\.{3,}|\*{1,2}|\*\.\*)$/.test(e);
}
function pt(e, t = !1) {
  let n = /^-[A-Za-z][A-Za-z0-9_.-]+$/.test(e)
      ? Array.from({ length: e.length - 2 }, (a, l) => l + 2)
          .filter((a) => /^[A-Za-z]+$/.test(e.slice(1, a)))
          .map((a) => e.slice(a))
      : [],
    r = n[0],
    s = t || /[:@]/.test(e) || r !== void 0,
    i = e.startsWith("--")
      ? e
          .replace(/^--[^=]*=|^--/, "")
          .split(/[/:@]/)
          .filter((a) => a !== "")
      : e.startsWith("-")
        ? n
        : e.split(/[/:@]/).filter((a) => a !== ""),
    c = e.split("@").slice(e.startsWith("@") ? 2 : 1);
  return (
    (t && e.includes("*")) ||
    e.split("/").some((a) => {
      let l = a.split(":");
      return l.length > 1 && l.some((f) => /^(?:\d{4,}|\*+)$/.test(f));
    }) ||
    e
      .split(/[/@]/)
      .flatMap(mt)
      .some(
        (a) => /\d/.test(a) && /^[0-9a-f:*]+$/i.test(a) && (a.includes("::") || Ft(a, ":") >= 2)
      ) ||
    c.some((a) => {
      let l = a.replace(/[/:].*$/, "").toLowerCase();
      if (st.has(l)) return !1;
      return (
        /^[a-z0-9*-]+(?:\.[a-z0-9*-]+)*\.[a-z*][a-z0-9*-]*$/.test(l) ||
        hme(l.replace(/\*/g, "")) ||
        /^(?:0+|0x[0-9a-f]*)$/.test(l) ||
        (t && l !== "")
      );
    }) ||
    /^0+\//.test(e) ||
    (t && /^0+:/.test(e)) ||
    i.some(
      (a, l) =>
        ft(a) ||
        ((t || (r !== void 0 && l === 0)) &&
          !e.startsWith("--") &&
          /^(?:0+|0x[0-9a-f]*|[0-9a-fx]*\.[0-9a-fx.]*)$/i.test(a) &&
          /\d/.test(a))
    ) ||
    (e.includes("*") &&
      (e.includes(":") ||
        i.some((a) => /^[0-9a-fx.*]+$/i.test(a) && /\d/.test(a) && a.includes("*")))) ||
    i.some((a) => (s ? hme(a.replace(/\*/g, "")) : vho(a.replace(/\*/g, ""))))
  );
}
function mt(e) {
  let t = [e],
    n = e;
  for (;;) {
    let r = n.replace(/^[a-z][\w-]*:/i, "");
    if (r === n || r === "") return t;
    (t.push(r), (n = r));
  }
}
function ft(e) {
  let t = e.replace(/\.+$/, "");
  return (
    /^(?:(?:\d+|0x[0-9a-f]+)\.){3}(?:\d+|0x[0-9a-f]+)$/i.test(t) ||
    /^(?:127\.|0\d+\.|0x[0-9a-f]*\.)[0-9a-fx.]*$/i.test(t) ||
    /^0x[0-9a-f]+$/i.test(t) ||
    /^\d{8,}$/.test(t)
  );
}
function ht(e) {
  let t = e
      .replace(/^domain:/i, "")
      .trim()
      .toLowerCase()
      .replace(/%.*$/, ""),
    n = t
      .replace(/\.+(?=(?::(?:\d+|\*))*$)/, "")
      .replace(/(?::(?:\d+|\*))+$/, "")
      .replace(/\.+$/, "");
  return (
    hme(n) ||
    (n === "*" && n !== t) ||
    (/^[\[\]0-9a-fx.:*]+$/.test(n) && /[\d:]/.test(n)) ||
    (n.includes("*") && n !== "*" && !/^\*\.[^*]+$/.test(n)) ||
    (/^\*\./.test(n) && pAs(n.slice(2)))
  );
}
function gt(e) {
  return (
    e.startsWith("~\\") ||
    (e.startsWith("\\") && e[1] !== "!" && e[1] !== "#") ||
    /^[A-Za-z]:[/\\]/.test(e)
  );
}
function _t(e) {
  return Tv(e) && tAt(e, Fe);
}
function yt(e) {
  let t = e.replace(/^\s+/, "").replace(/^[!#]/, "").trim();
  if (t.split("/").includes("..") || gt(t) || /^~[^/]/.test(t)) return "machine";
  if (t === "~" || t.startsWith("~/")) return "home";
  return IAe(t, Ve).root !== null ? "machine" : "none";
}
function hho(e) {
  let t = H(e) ? g(e, "PreToolUse") : void 0;
  return Array.isArray(t) ? t.length > 0 : t != null;
}
function St(e, t, n) {
  if (!H(e)) return { value: void 0, counts: k() };
  let r = Me.map((a) => {
      let l = Tt(g(e, a), a);
      return a === "allow" && typeof t === "function" ? wt(l, t) : l;
    }),
    s =
      t === !0 ||
      n ||
      r.some(({ behavior: a, counts: l, carveOutLost: f }) => (a === "allow" ? f : Et(l) > 0)),
    i = r.map((a) => (a.behavior === "allow" && s ? Rt(a) : a)),
    c = i.reduce((a, { behavior: l, rules: f }) => {
      if (f.length > 0) a[l] = f;
      return a;
    }, {});
  return {
    value: i.some(({ rules: a }) => a.length > 0) ? c : void 0,
    counts: i.map(({ counts: a }) => a).reduce(Ot)
  };
}
function Et(e) {
  return (
    e.droppedRooted + e.droppedDevice + e.droppedInvalid + e.droppedOverCap + e.droppedCredential
  );
}
function wt(e, t) {
  let n = (s) => Ge(Bn(s).toolName).some(t),
    r = e.rules.filter(n);
  if (r.length === 0) return e;
  return {
    ...e,
    rules: e.rules.filter((s) => !n(s)),
    carveOutLost: e.carveOutLost || r.some(ae),
    counts: {
      ...e.counts,
      kept: e.counts.kept - r.length,
      droppedGuarded: e.counts.droppedGuarded + r.length
    }
  };
}
function Rt(e) {
  return {
    behavior: e.behavior,
    rules: [],
    carveOutLost: e.carveOutLost,
    counts: {
      ...e.counts,
      kept: 0,
      coveringDeviceTools: 0,
      droppedGuarded: e.counts.droppedGuarded + e.rules.length
    }
  };
}
function Tt(e, t) {
  let n = Array.isArray(e) ? e : [],
    r = n.slice(0, Y),
    s = r.filter((d) => typeof d === "string"),
    i = L(s),
    c = new Set(i),
    a = F(n.slice(Y), (d) => typeof d !== "string" || !c.has(d)),
    l = i.map((d) => ({ rule: d, verdict: nt(d, t) })),
    f = l.filter(({ verdict: d }) => Q(d));
  return {
    behavior: t,
    rules: f.map(({ rule: d }) => d),
    carveOutLost: t === "allow" && (a > 0 || l.some(({ rule: d, verdict: h }) => !Q(h) && ae(d))),
    counts: {
      kept: f.length,
      duplicates: s.length - i.length + (n.length - r.length - a),
      droppedRooted: y(l, "rooted"),
      droppedDevice: y(l, "device"),
      droppedInvalid:
        y(l, "invalid") + (r.length - s.length) + (e !== void 0 && !Array.isArray(e) ? 1 : 0),
      droppedOverCap: y(l, "over_cap") + a,
      droppedCredential: y(l, "credential"),
      droppedCredentialRestrictions: t === "allow" ? 0 : y(l, "credential"),
      droppedGuarded: 0,
      coveringDeviceTools: y(f, "keep_covers_device_tools")
    }
  };
}
function Q(e) {
  return e === "keep" || e === "keep_covers_device_tools";
}
function ae(e) {
  return bt(e)?.trimStart().startsWith("!") ?? !1;
}
function bt(e) {
  let { toolName: t, ruleContent: n } = Bn(e);
  return re.has(t) || Tv(t) ? n : void 0;
}
function y(e, t) {
  return F(e, ({ verdict: n }) => n === t);
}
function k() {
  return {
    kept: 0,
    duplicates: 0,
    droppedRooted: 0,
    droppedDevice: 0,
    droppedInvalid: 0,
    droppedOverCap: 0,
    droppedCredential: 0,
    droppedCredentialRestrictions: 0,
    droppedGuarded: 0,
    coveringDeviceTools: 0
  };
}
function Ot(e, t) {
  return {
    kept: e.kept + t.kept,
    duplicates: e.duplicates + t.duplicates,
    droppedRooted: e.droppedRooted + t.droppedRooted,
    droppedDevice: e.droppedDevice + t.droppedDevice,
    droppedInvalid: e.droppedInvalid + t.droppedInvalid,
    droppedOverCap: e.droppedOverCap + t.droppedOverCap,
    droppedCredential: e.droppedCredential + t.droppedCredential,
    droppedCredentialRestrictions:
      e.droppedCredentialRestrictions + t.droppedCredentialRestrictions,
    droppedGuarded: e.droppedGuarded + t.droppedGuarded,
    coveringDeviceTools: e.coveringDeviceTools + t.coveringDeviceTools
  };
}
var Pt = { commit: ne, pr: ne, sessionUrl: v, commitTrailers: v };
function Ct(e) {
  if (!H(e)) return;
  let t = Ie.reduce((n, r) => kt(n, e, r), {});
  return Object.keys(t).length > 0 ? t : void 0;
}
function le(e) {
  if (typeof e === "string")
    return Gve(e) ? { kept: void 0, withheld: 1 } : { kept: e, withheld: 0 };
  if (typeof e !== "object" || e === null) return { kept: e, withheld: 0 };
  let t = Object.entries(e).map(([r, s]) => [r, Gve(r) ? { kept: void 0, withheld: 1 } : le(s)]),
    n = t.flatMap(([r, s]) => (s.kept === void 0 ? [] : [[r, s.kept]]));
  return {
    kept: n.length === 0 ? void 0 : Array.isArray(e) ? n.map(([, r]) => r) : Object.fromEntries(n),
    withheld: t.reduce((r, [, s]) => r + s.withheld, 0)
  };
}
function kt(e, t, n) {
  let r = g(t, n);
  if (Pt[n](r)) e[n] = r;
  return e;
}
function vt(e, t, n) {
  let r = t[n];
  if (r !== void 0 && gS(n).safeParse(r).success) e[n] = r;
  return e;
}
function ee(e) {
  return typeof e === "string" && e.trim() !== "" && e.length <= De && !ie.test(e) ? e : void 0;
}
function w(e) {
  return v(e) ? e : void 0;
}
function v(e) {
  return typeof e === "boolean";
}
function ne(e) {
  return typeof e === "string" && Buffer.byteLength(e, "utf8") <= He && !Ye.test(e);
}
function g(e, t) {
  return Object.hasOwn(e, t) ? e[t] : void 0;
}
export { rkr, K$n, cAs, uAs, zMt, mme, fAs, mho, cZt, Gve, V$n, gho, hho };

//# sourceMappingURL=chunk-jrtr06zc.js.map
