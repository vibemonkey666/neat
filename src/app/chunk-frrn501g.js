// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, J, Il } from "./chunk-wrtp8qz8.js";
import { Ye, R, N, d, E, Er, G, Us } from "./chunk-fs43t96t.js";
import { Iv, Yn, A_, zy, _T, Sg } from "./chunk-h5gbmqm1.js";
import { Iee } from "./chunk-jgvfzp2r.js";
import { Qr, Le, up } from "./chunk-jazcqqqr.js";
import { Flr, w_, i } from "./chunk-cj37hmns.js";
import { Wu, _, te, aee, h6, jo, t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { Z2e, egn, uV, Ece } from "./chunk-yv5e7kyr.js";
import { Ll } from "./chunk-wany0nxw.js";
import { Gnt } from "./chunk-ajtyjx88.js";
import { Q9, BEn } from "./chunk-dc0nzty2.js";
import { $s } from "./chunk-vw9e882a.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Gar } from "./chunk-v4kbwz0z.js";
import { ck } from "./chunk-13nwb0xt.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { pl, vir, Jj, bse, xir, xqt, exe } from "./chunk-5rw2zfa0.js";
import { ri, PH } from "./chunk-63a6mqbs.js";
import { kfe, dn } from "./chunk-9z5ybxhe.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { LZ, YQo } from "./chunk-nrysaqwk.js";
import { URe } from "./chunk-vbnb89qh.js";
import { JC, wU, cv, vx, uce, Oye, D8, pv, Mye, Iu, xa } from "./chunk-d5zj5299.js";
import { Czr } from "./chunk-cr7a2cdd.js";
import { EU } from "./chunk-1fnv3zry.js";
import { oo, Va } from "./chunk-39ayby14.js";
import { Hze, Lze, _1t, x$o, DUr, o4s, b1t, U$o, GD } from "./chunk-1ww4jg8j.js";
import { tm } from "./chunk-h2tyaevk.js";
import { y$o, v3n, sye, CY, b_t } from "./chunk-n2fmpv44.js";
import { cqs, _He } from "./chunk-14k612dp.js";
import { DG } from "./chunk-gwryn340.js";
import { yx, l4s, Wun } from "./chunk-1ky5r8qb.js";
import { qe } from "./chunk-0np0053t.js";
import { Qsi } from "./chunk-4b5gpbbs.js";
import { IRe, Hor } from "./chunk-j4601ec1.js";
import { o, v, oe, u, me, A } from "./chunk-0bqrj5ah.js";
import { zfe, $At, y_ } from "./chunk-hc5j8sxy.js";
import { et } from "./chunk-c9re0p40.js";
import { zse } from "./chunk-f9x3sh8a.js";
import { en } from "./chunk-rc7xvf0x.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { sd } from "./chunk-6jbh8yja.js";
import { constants as Z } from "fs";
import { lstat as St, open as _t, readlink as Kn, realpath as U, stat as wt } from "fs/promises";
import { basename as pt, dirname as Et, extname as qn, isAbsolute as Xn, sep as he } from "path";
import { realpath as Gn } from "fs/promises";
import { basename as ct, dirname as Wn, resolve as zn } from "path";
import { isAbsolute as ie } from "path";
var ye = String.raw`\.sw[a-p]|\.un~|\.rej|\.save\.\d+|\.save|\.tmp|\.temp|\.bak|\.old|\.orig|\.backup|\.~\d+~|~`,
  kt = String.raw`\.part(?:ial)?|\.(?:cr)?download| copy| - copy| \d+| ?\(\d+\)| \((?=[^()/]*(?:conflict|copy))[^()/]*\)|\.sync-conflict-[\w-]+`,
  ee = `${ye}|${kt}`,
  Pe = ".~ (";
import { homedir as P, tmpdir as jt } from "os";
import { basename as B, dirname as k, isAbsolute as Gt, join as I, sep as Wt } from "path";
var Me = /[\\^$.*+?()[\]{}|]/g,
  Nt = RegExp(Me.source);
function Dt(e) {
  return ((e = zse(e)), e && Nt.test(e) ? e.replace(Me, "\\$&") : e);
}
var Se = Dt;
import { join as Pt } from "path";
var h3n = "remote-settings-consent.json",
  Be = "remote-settings-consent",
  _e = 1,
  Mt = 20,
  $t = 86400000,
  K = 1048576,
  Bt = p(() => u({ accountUuid: o(), dangerousSettingsHash: o(), updatedAt: v() })),
  Ut = p(() => u({ version: A(_e), records: me(o(), oe()) })),
  Ht = p(() => u({ version: v().gt(_e) }));
function Ue() {
  return Pt(Le(), h3n);
}
function ne() {
  return { records: new Map(), newerVersion: !1, unreadable: !0 };
}
function $e() {
  return (
    t(`Remote settings: Consent records file exceeds ${K} bytes; treating it as unreadable`),
    ne()
  );
}
async function He(e) {
  let n;
  if (z() && e !== void 0) {
    let r;
    try {
      r = await e.readText([{ key: We.state(Be), offset: 0, length: K + 1 }]);
    } catch (a) {
      return (t(`Remote settings: Consent records unreadable - ${d(a)}`), ne());
    }
    if (!r.ok) return (t(`Remote settings: Consent records unreadable - ${vt(r.error)}`), ne());
    let s = r.value.items[0];
    if (!s.found) return { records: new Map(), newerVersion: !1, unreadable: !1 };
    if (s.totalBytes > K) return $e();
    n = s.value;
  } else {
    if (J()) return { records: new Map(), newerVersion: !1, unreadable: !1 };
    let r = Ue();
    try {
      if ($s === 0) {
        let a = await hn().lstat(r);
        if (a !== void 0 && !a.isFile) return ne();
      }
      let s = await hn().readTail(r, K + 1, { noFollow: !0 });
      if (s.length > K) return $e();
      n = s.toString("utf8");
    } catch (s) {
      return { records: new Map(), newerVersion: !1, unreadable: !G(s) };
    }
  }
  try {
    let r = te(n),
      s = Ut().safeParse(r);
    if (!s.success)
      return { records: new Map(), newerVersion: Ht().safeParse(r).success, unreadable: !1 };
    let a = new Map();
    for (let [l, f] of Object.entries(s.data.records)) {
      let c = Bt().safeParse(f);
      if (c.success) a.set(l, c.data);
    }
    return { records: a, newerVersion: !1, unreadable: !1 };
  } catch {
    return { records: new Map(), newerVersion: !1, unreadable: !1 };
  }
}
async function Iqs(e, n) {
  let { records: r } = await He(n),
    s = r.get(e.organizationUuid);
  if (!s || s.accountUuid !== e.accountUuid) return null;
  return s.dangerousSettingsHash;
}
async function Oqs(e, n, r) {
  try {
    let { records: s, newerVersion: a, unreadable: l } = await He(r);
    if (a || l) {
      t(
        `Remote settings: Consent records file is ${a ? "from a newer version" : "unreadable"}; not overwriting it`
      );
      return;
    }
    let f = Jj(n),
      c = s.get(e.organizationUuid),
      m = c?.accountUuid === e.accountUuid,
      y = !bse(f);
    if (y && !(c && m)) return;
    let g = y && c ? c.dangerousSettingsHash : xir(f),
      w = Date.now();
    if (m && c.dangerousSettingsHash === g && w - c.updatedAt < $t) return;
    s.delete(e.organizationUuid);
    let h = [...s].sort(([, b], [, F]) => F.updatedAt - b.updatedAt).slice(0, Mt - 1);
    h.unshift([
      e.organizationUuid,
      { accountUuid: e.accountUuid, dangerousSettingsHash: g, updatedAt: w }
    ]);
    let S = _({ version: _e, records: Object.fromEntries(h) });
    if (z() && r !== void 0) {
      let b = await r.write(We.state(Be), S, { mode: 384 });
      if (!b.ok) t(`Remote settings: Failed to record org consent - ${vt(b.error)}`);
      return;
    }
    if (J()) return;
    await hn().atomicWrite(Ue(), S, 384);
  } catch (s) {
    t(`Remote settings: Failed to record org consent - ${d(s)}`);
  }
}
function d$() {
  return L([up(), I(P(), ".claude"), URe()].filter((e) => e !== null));
}
var Ee = [h3n, exe, xqt, Czr];
function se() {
  return [
    P(),
    up() ?? "",
    URe() ?? "",
    ...(Iee() ? ["", ""] : [Flr(), w_()]),
    i.CLAUDE_CODE_HOST_CREDS_FILE ?? "",
    i.TMPDIR ?? "",
    ...(Iee() ? [j("TMPDIR") ?? ""] : []),
    j("APPDATA") ?? "",
    j("LOCALAPPDATA") ?? ""
  ].join("\x00");
}
var o$o = Qr(() => {
    let e = d$(),
      n = L([...(Iee() ? [] : [k(Flr())]), P()]);
    return MG([
      ...b1t(),
      ...e.flatMap((r) => [I(r, Hze), I(r, Lze)]),
      ...n.flatMap((r) => DUr.map((s) => I(r, s))),
      ...e.map((r) => I(r, _1t)),
      ...(i.CLAUDE_CODE_HOST_CREDS_FILE ? [re(i.CLAUDE_CODE_HOST_CREDS_FILE)] : [])
    ]);
  }, se),
  je = Qr(() => {
    let e = MG(Kt()),
      n = [
        ...o$o(),
        ...MG([I(P(), ".claude", "state", "unattended-serving-consent.json")]),
        ...MG([I(P(), ".claude", "state", "settings-review.json")]),
        ...MG(
          d$().flatMap((r) => [
            I(r, "state", "device-mcp-consent.json"),
            I(r, "state", "device-mcp-snapshot.json")
          ])
        ),
        ...MG(d$().flatMap((r) => Ee.map((s) => I(r, s)))),
        ...MG(d$().flatMap((r) => [v3n(r), y$o(r), CY(r)]))
      ];
    return ri(
      [
        ...n.flatMap((r) => [
          ...nUr(B(r)).flatMap((s) => [
            { literal: I(k(r), s), tail: "", place: s === B(r) },
            { literal: I(k(r), s), tail: ".*", place: !1 }
          ]),
          ...rUr(B(r)).map((s) => ({ literal: k(r), tail: `/${s}`, place: !1 }))
        ]),
        ...MG([
          ...d$().flatMap((r) => [I(r, "backups"), b_t(r), sye(r), I(r, "state")]),
          I(P(), ".claude", "state", "served-calls"),
          ...(O() === "macos" ? [I(P(), "Library", "Keychains")] : []),
          ...(O() === "windows" ? zt() : [])
        ]).map((r) => ({ literal: r, tail: "/**", place: !0 })),
        ...MG(d$().map((r) => Qsi(r))).flatMap((r) => [
          ...nUr("*.key").flatMap((s) => [
            { literal: r, tail: `/${s}`, place: s === "*.key" },
            { literal: r, tail: `/${s}.*`, place: !1 }
          ]),
          ...rUr("*.key").map((s) => ({ literal: r, tail: `/${s}`, place: !1 }))
        ]),
        ...e.map((r) => ({ literal: r, tail: "/claude-resume-*", place: !0 })),
        ...(O() === "macos"
          ? MG(["/var/folders"]).map((r) => ({
              literal: r,
              tail: "/*/*/*/claude-resume-*",
              place: !0
            }))
          : []),
        ...(Iee()
          ? e.flatMap((r) => [
              { literal: r, tail: `/${we}*/.claude/**`, place: !0 },
              { literal: r, tail: `/${we}*/*/claude-resume-*`, place: !0 }
            ])
          : [])
      ],
      ({ literal: r, tail: s, place: a }) => `${r}\x00${s}\x00${a}`
    );
  }, se),
  Rze = Qr(() => Ge(je()), se),
  s$o = Qr(() => {
    let e = je().filter((r) => r.place),
      n = e.filter((r) => r.tail === "/**").map((r) => `${r.literal}${Wt}`);
    return Ge(e.filter((r) => !n.some((s) => r.literal.startsWith(s))));
  }, se);
function Ge(e) {
  return ri(
    e.map(({ literal: n, tail: r }) => ({ literal: n, tail: r })),
    ({ literal: n, tail: r }) => `${n}\x00${r}`
  );
}
function zt() {
  let { local: e, roaming: n } = Vt();
  return L([
    ...e.flatMap((r) => [I(r, "Microsoft", "Credentials"), I(r, "Microsoft", "Vault")]),
    ...n.flatMap((r) => [
      I(r, "Microsoft", "Credentials"),
      I(r, "Microsoft", "Vault"),
      I(r, "Microsoft", "Protect")
    ])
  ]);
}
function Vt() {
  return {
    local: L(
      [j("LOCALAPPDATA"), I(P(), "AppData", "Local")].filter((e) => e !== void 0 && e !== "")
    ),
    roaming: L([j("APPDATA"), I(P(), "AppData", "Roaming")].filter((e) => e !== void 0 && e !== ""))
  };
}
function j(e) {
  let n = tm();
  return n !== void 0 ? n[e] : i[e];
}
function Kt() {
  let e = L(
    [jt(), i.TMPDIR, ...(Iee() ? [j("TMPDIR")] : []), "/tmp", "/var/tmp"]
      .filter((n) => n !== void 0 && Gt(n))
      .map(re)
  );
  return Iee() ? L(e.map((n) => (B(k(n)).startsWith(we) ? k(k(n)) : n))) : e;
}
var we = "cc-tenant-";
function nUr(e) {
  return [e, `.${e}`, `#${e}#`, `.#${e}`].flatMap((n) => [n, `${n}~`]);
}
function rUr(e) {
  let n = e.lastIndexOf("."),
    r = n === -1 ? e : e.slice(0, n),
    s = n === -1 ? "" : e.slice(n);
  return [
    ...["", ".", "#", ".#"].flatMap((a) => [
      `${a}${e}~*`,
      ...["BACKUP", "BASE", "LOCAL", "REMOTE"].map(
        (l) => `${a}${r}_${l}_*${s === "" ? "" : `${s}*`}`
      )
    ]),
    `#${e}#~*`
  ];
}
function MG(e) {
  return L(e.flatMap((n) => [n, ...jo(n)]));
}
function i$o(e) {
  let n = O(),
    r = n === "linux" || n === "wsl",
    s = new Map();
  function a(g) {
    if (!s.has(g)) s.set(g, e.realpathIfExists(g));
    return s.get(g);
  }
  let l = new Map();
  function f(g, w) {
    let h = l.get(g);
    if (h === void 0) ((h = e.namesIn(g) ?? []), l.set(g, h));
    let S = new RegExp(`^${Se(w).replaceAll("\\*", "[^/]*")}$`);
    return h.filter((b) => S.test(b)).map((b) => I(g, b));
  }
  let c = new Set(MG(d$()).map(re)),
    m = new Set([...c, ...MG([P()]).map(re)]),
    y = new Set(
      Rze()
        .filter(({ tail: g }) => g === "/**")
        .flatMap(({ literal: g }) => [g, k(g)])
        .filter((g) => c.has(k(g)))
    );
  return L(
    Rze().flatMap(({ literal: g, tail: w }) => {
      let h = k(g),
        S = a(h) ?? (y.has(h) ? (((C) => C && I(C, B(h)))(a(k(h))) ?? void 0) : void 0);
      if (!S) return [];
      let b = I(S, B(g));
      if (w === "") return [a(b) ?? b];
      if (w === "/**") return [`${b}/`];
      let T = `${w.startsWith("/") && m.has(g) ? (a(g) ?? b) : b}${w}`;
      if (!r) return [T];
      let D = k(T);
      return f(a(D) ?? D, B(T));
    })
  );
}
function g_t(e = Rze()) {
  return L(
    e.map(
      ({ literal: n, tail: r }) =>
        `${Xt(kfe(vx(n), { escapeGlobs: !0 }))}${r.endsWith("claude-resume-*") ? `${r}/**` : r}`
    )
  );
}
function EHe(e) {
  if (Iee()) return !1;
  let n = ut(e),
    r = n.includes("\\") ? n.replaceAll("\\", "/") : n;
  if (!Yt(Rze()).test(r)) return !1;
  return xa(e, qt(g_t()), "read", "deny", { asSpelledOnly: !0 }) !== null;
}
var Yt = Qr(
    (e) =>
      new RegExp(
        `^(?:${L(
          e.map(({ literal: n, tail: r }) =>
            (r === "" || r === ".*" ? k(n) : n).replaceAll("\\", "/")
          )
        )
          .map(Se)
          .join("|")})`,
        "i"
      )
  ),
  qt = Qr(
    (e) => ({
      ...Ll(),
      alwaysDenyRules: { hostCredential: e.map((n) => dn({ toolName: qe, ruleContent: n })) }
    }),
    (e) => e.join("\x00")
  );
function Xt(e) {
  return e === "" || e.startsWith("/") ? `/${e}` : e;
}
function re(e) {
  return e.replace(/[\\/]+$/, "") || e;
}
var a$o = "tengu_violin_maple";
async function h_t() {
  try {
    return await Gnt(a$o);
  } catch {
    return !1;
  }
}
async function y3n() {
  return !1;
}
function QTe() {
  return !1;
}
var Zt = [".ssh", ".aws", ".azure", ".gnupg", ".kube", ".docker"],
  tn = [
    [".config", "git"],
    [".config", "gh"],
    [".config", "glab-cli"],
    [".config", "gcloud"],
    ["appdata", "roaming", "gcloud"],
    [".cargo", "credentials"],
    [".cargo", "credentials.toml"],
    [".gem", "credentials"],
    [".m2", "settings.xml"],
    [".gradle", "gradle.properties"],
    ["documents", "powershell", "profile.ps1"],
    ["documents", "windowspowershell", "profile.ps1"],
    [".config", "powershell", "profile.ps1"],
    [".claude", "settings.json"],
    [".claude", "settings.local.json"],
    [".claude", "state", "unattended-serving-consent.json"],
    [".claude", "state", "device-mcp-consent.json"],
    [".claude", "state", "device-mcp-snapshot.json"],
    [".claude", "state", "served-calls"],
    [".claude", "state", "settings-review.json"],
    [".claude", "state"],
    ["appdata", "roaming", "github cli"],
    ["appdata", "roaming", "gh"],
    ["appdata", "roaming", "glab-cli"],
    ["appdata", "roaming", "gnupg"],
    ["appdata", "local", "microsoft", "credentials"],
    ["appdata", "roaming", "microsoft", "credentials"],
    ["appdata", "local", "microsoft", "vault"],
    ["appdata", "roaming", "microsoft", "vault"],
    ["appdata", "roaming", "microsoft", "protect"],
    ["library", "keychains"]
  ],
  nn = [
    ".netrc",
    "_netrc",
    ".git-credentials",
    ".gitconfig",
    Hze,
    Lze,
    x$o,
    ".envrc",
    ".mcp.json",
    ".npmrc",
    ".yarnrc",
    ".yarnrc.yml",
    ".pypirc",
    ".pgpass",
    ".my.cnf",
    ".mylogin.cnf",
    ".terraformrc",
    "terraform.rc",
    "credentials.tfrc.json",
    ".boto",
    ".s3cfg",
    "kubeconfig",
    "kubeconfig.yaml",
    "kubeconfig.yml",
    "kubeconfig.json",
    ".bashrc",
    ".bash_profile",
    ".bash_login",
    ".bash_logout",
    ".bash_aliases",
    ".profile",
    ".zshrc",
    ".zshenv",
    ".zprofile",
    ".zlogin",
    ".zlogout",
    "config.fish",
    "microsoft.powershell_profile.ps1",
    "microsoft.vscode_profile.ps1",
    "microsoft.powershellise_profile.ps1",
    ".bash_history",
    ".zsh_history",
    "fish_history",
    "consolehost_history.txt",
    ".python_history",
    ".node_repl_history",
    ".psql_history",
    ".mysql_history"
  ],
  Je =
    /(?:\.(?:pem|key|p12|pfx|keystore|jks)|_(?:rsa|dsa|ecdsa|ed25519)(?:_sk(?:_rk(?:_.*)?)?)?|secrets?\.(?:ya?ml|json|toml))$/s,
  Y = ".env",
  rn = x$o,
  Qe = ["example", "sample", "template", "dist"],
  Ze = new RegExp(`(?:${ee})$`, "i"),
  on = new RegExp(`(?:${ye})$`, "i"),
  sn = new RegExp(`(?:${ee})((?!(?:${ee})$)(?!\\.\\d+$)\\.[^./]+)$`, "i"),
  V = 64,
  rye = 255,
  an = [/(?!)/, /:[^:]*$/, /:[^:]*:[^:]*$/, /:.*$/s],
  ln = /~[^/~.][^/~]*$/,
  l$o = "(?:BACKUP|BASE|LOCAL|REMOTE)",
  d$o = `_${l$o}_(?:[LR]CONFL_)?\\d{2,}`,
  cn = new RegExp(`^(.*)${d$o}(\\.[^./]*)?$`, "is"),
  un = ".git",
  ze = "config";
function _3n(e) {
  return pn(e, { exceptFiles: fn, withGitConfigBelowGitFolders: !0 });
}
var fn = new Set();
function pn(e, { exceptFiles: n, withGitConfigBelowGitFolders: r }) {
  let s = X(e);
  if (s.some((h) => h.length > rye)) return !0;
  let l = `/${s.map(pl).join("/")}`;
  if (ie(e) && (l === e ? [e] : [e, l]).some((h) => EHe(h) || Ve(h).some(EHe))) return !0;
  let f = `/${s.join("/")}`;
  if (ie(e) && (f === l ? [f] : [f, l]).some(mn)) return !0;
  let c = `/${s.map((h, S) => (S === s.length - 1 ? h : Ce(h, pe))).join("/")}`;
  if (ie(e) && c !== f && (EHe(c) || Ve(c).some(EHe))) return !0;
  let { readingsByFold: m, readings: y, present: g } = Re(s),
    w = y.at(-1) ?? [];
  return (
    m.some((h) => h.some((S) => S.length > V)) ||
    y.some((h) => h.some((S) => Zt.includes(S))) ||
    tn.some((h) => le(y, h) || le(g, h)) ||
    it(g) ||
    Ke(y) ||
    Ke(g) ||
    w.some((h) => xn(h, n)) ||
    (r && w.some(kn) && y.slice(0, -1).some((h) => h.some((S) => S.endsWith(un))))
  );
}
function Re(e) {
  let n = e.map((s, a) => q(s, a === e.length - 1)),
    r = n.map((s) => L(s.flat()));
  return {
    readingsByFold: n,
    readings: r,
    present: r.filter((s, a) => a === e.length - 1 || !n[a]?.[0]?.some(W))
  };
}
function q(e, n) {
  let r = tZe(e, { leadingDot: n });
  return S3n(e).map((s) => L([...tZe(s(e), { leadingDot: n }), ...r.map(s)]));
}
function Mqs(e) {
  return L(q(e, !1).flat());
}
function Ce(e, n) {
  if (e.length > rye) return e;
  let r = e;
  for (;;) {
    let s = n.reduce((a, l) => (a === r ? l(a) : a), r);
    if (s === r || ge.has(s)) return r;
    r = s;
  }
}
function fe(e) {
  let n = e.split("/"),
    r = n.at(-1) ?? "",
    s = n.slice(0, -1),
    a = s.filter((m) => !W(m)).map((m) => Ce(m, nt)),
    l = Ce(r, pe),
    f = W(r) || W(l) || (r.length <= rye && tZe(r, { leadingDot: !0 }).some(W)) ? "" : l,
    c = (m, y) => [...m, y].join("/");
  return L([c(s, f), c(s, Oe(r)), c(s, ae(r)), c(s, ae(f)), c(a, r), c(a, f), c(a, ae(f))]).filter(
    (m) => m !== e
  );
}
function Ve(e) {
  let n =
    O() === "windows" ? Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\")) : e.lastIndexOf("/");
  if (n === -1) return [];
  let r = e.slice(n + 1);
  return tZe(r, { leadingDot: !0 })
    .filter((s) => s !== r)
    .map((s) => `${e.slice(0, n + 1)}${s}`);
}
function mn(e) {
  let n = y_t(e);
  return n === null ? !0 : n.some((r) => ie(r) && EHe(r));
}
function W1(e) {
  return [e, ...fe(e)].some(_3n);
}
function Dqs(e) {
  let n = X(e).at(-1);
  if (n === void 0) return !0;
  return S3n(n)
    .flatMap((r) => [r(n), ce(r(ce(n)))])
    .some((r) => st(r) || Je.test(r));
}
function gn() {
  return O() === "windows" ? /[\\/]/ : "/";
}
function X(e) {
  return e.split(gn()).filter((n) => n !== "");
}
function le(e, n) {
  return e.some((r, s) => n.every((a, l) => e[s + l]?.includes(a) === !0));
}
function Ke(e) {
  return e.some(
    (n, r) =>
      n.includes(".claude") &&
      e[r + 1]?.some((s) => Ee.some((a) => s === a || s.startsWith(`${a}.`))) === !0
  );
}
var tt = [En, bn, rt, Oe, ce],
  nt = [_n, ...tt],
  pe = [Sn, wn, ...tt],
  yn = [...pe, ae],
  ge = new Set(["", ".", ".."]);
function tZe(e, { leadingDot: n = !0, copyMarks: r = !0 } = {}) {
  let s = n ? yn : r ? pe : nt;
  if (s.every((l) => l(e) === e)) return [e];
  let a = (l, f) => {
    if (f.length === 0 || l.size > V) return l;
    let c = L(f.flatMap((m) => s.map((y) => y(m)))).filter((m) => !l.has(m) && !ge.has(m));
    return a(new Set([...l, ...c]), c);
  };
  return [...a(new Set([e]), [e])];
}
function Sn(e) {
  let n = Ze.exec(e);
  return n === null || n.index === 0 ? e : e.slice(0, n.index);
}
function _n(e) {
  let n = on.exec(e);
  return n === null || n.index === 0 ? e : e.slice(0, n.index);
}
function wn(e) {
  let n = sn.exec(e);
  return n === null ? e : e.slice(0, n.index) + (n[1] ?? "");
}
function En(e) {
  let n = ln.exec(e);
  return n === null || n.index === 0 ? e : e.slice(0, n.index);
}
function bn(e) {
  let n = cn.exec(e),
    r = n === null ? "" : `${n[1]}${n[2] ?? ""}`;
  return r === "" ? e : r;
}
function rt(e) {
  return e.length > 2 && e.startsWith("#") && e.endsWith("#") ? e.slice(1, -1) : e;
}
function Oe(e) {
  return e.length > 2 && e.startsWith(".#") ? e.slice(2) : e;
}
function ae(e) {
  return e.replace(/^\.(?=.)/s, "");
}
var ot = `
\r\u2028\u2029. `;
function ce(e) {
  let n = e.length;
  while (n > 0 && ot.includes(e[n - 1] ?? "")) n -= 1;
  return e.slice(0, n);
}
function W(e) {
  if (ge.has(e) || !oUr.includes(e[0] ?? "") || e.length > rye) return !1;
  let n = e;
  for (;;) {
    let r = ce(n.replace(Ze, "")),
      s = rt(r),
      a = s === r ? Oe(r) : s;
    if (a === "") return !0;
    if (a === n) return !1;
    n = a;
  }
}
var oUr = `${Pe}#${ot}`;
function y_t(e) {
  if (c$o(e)) return null;
  let n = Xe(e);
  if (n === null) return null;
  let r = Cn(e);
  if (r.length === 0) return n;
  let s = r.map(Xe);
  return s.some((a) => a === null)
    ? null
    : L([...n, ...r, ...s.flatMap((a) => a ?? [])]).filter((a) => a !== e);
}
function c$o(e) {
  let n = e.split("/");
  return e.length > Fn || n.length > Tn || n.some((r) => r.length > rye);
}
function Xe(e) {
  let n = e.split("/"),
    r = n.map((a, l) => {
      let f = l === n.length - 1,
        c = tZe(a, { leadingDot: f, copyMarks: f });
      return { readings: c, absentToo: !f && c.some(W) };
    });
  if (r.every((a) => a.readings.length === 1 && !a.absentToo)) return [];
  let s = r.reduce(
    (a, { readings: l, absentToo: f }) => {
      if (a === null || l.length > V) return null;
      let c = a.flatMap((m) => [...l.map((y) => [...m, y]), ...(f ? [m] : [])]);
      return c.length > V ? null : c;
    },
    [[]]
  );
  return s === null ? null : L(s.map((a) => a.join("/"))).filter((a) => a !== e);
}
function Cn(e) {
  if (In.test(e)) return [];
  let n = e.split("/");
  return L(
    Rn.map((r) =>
      n
        .map((s) => {
          let a = r(s);
          return a !== s && On(a, s) ? a : s;
        })
        .join("/")
    )
  ).filter((r) => r !== e);
}
var be = (e) => e.replace(An, ""),
  Rn = [
    be,
    (e) => be(e).normalize("NFKC"),
    (e) =>
      be(e)
        .normalize("NFKD")
        .toLowerCase()
        .toUpperCase()
        .toLowerCase()
        .replace(/i\u0307/g, "i")
        .replace(/\u03c2/g, "\u03C3")
        .normalize("NFC")
  ];
function On(e, n) {
  return (
    !ge.has(e) &&
    !e.includes("/") &&
    e.length <= rye &&
    [...Ln].every((r) => e.split(r).length - 1 <= n.split(r).length - 1)
  );
}
var In = /^[\x00-\x7f]*$/,
  An = /\p{Default_Ignorable_Code_Point}/gu,
  Ln = '\\:*?"<>|',
  Fn = 4096,
  Tn = 256;
function xn(e, n) {
  return (
    (nn.includes(e) && !n.has(e)) ||
    Je.test(e) ||
    st(e) ||
    e.startsWith(`${rn}.`) ||
    e.startsWith(".config.json.") ||
    e.startsWith(`${Hze}.`) ||
    e.startsWith(`${Lze}.`) ||
    vn(e) ||
    Un(e)
  );
}
function st(e) {
  return e === Y || (e.startsWith(`${Y}.`) && !Qe.includes(e.slice(Y.length + 1))) || Nn(e);
}
function kn(e) {
  return e === ze || e.startsWith(`${ze}.`);
}
function Nn(e) {
  return e.endsWith(Y) && !de(e.slice(0, -Y.length));
}
var Dn = /^(.*)\.tfvars(?:\.json)?$/s;
function vn(e) {
  let n = Dn.exec(e)?.[1];
  return n !== void 0 && !de(n);
}
var Pn = [
    "deploy_key",
    "credentials.json",
    "application_default_credentials.json",
    "fish_variables",
    "htpasswd",
    ".htdigest",
    ".msmtprc",
    ".fetchmailrc",
    ".sentryclirc",
    ".dev.vars",
    ".secrets",
    ".vault-token",
    ".dockercfg",
    ".clasprc.json",
    ".transifexrc",
    ".databrickscfg",
    ".ftpconfig",
    ".remote-sync.json",
    ".wakatime.cfg"
  ],
  Mn =
    /^(?:service[-_]account(?:[-_]?key)?\.json|serviceaccountkey\.json|client_secret_.+\.apps\.googleusercontent\.com\.json|ssh_host_(?:rsa|dsa|ecdsa|ed25519)_key|fishd\.[0-9a-f]{12})$/s,
  $n = /^\.(?:dev\.vars\.|vault_pass)/,
  Bn = /^(.*)\.(?:tfstate(?:\.\d+)?|kdbx|ovpn)$/s;
function Un(e) {
  return at(e) && ue();
}
function ue() {
  if (Il()) return !0;
  if (sd()) return !0;
  return !1;
}
var a1t = [
  ["git", "credentials"],
  ["gh", "hosts.yml"],
  ["gcloud", "credentials.db"],
  ["gcloud", "access_tokens.db"]
];
function it(e) {
  return a1t.some((n) => le(e.slice(-n.length), n)) && ue();
}
function u$o(e) {
  return [e, ...fe(e)].some((n) => {
    let r = X(n);
    if (r.some((f) => f.length > rye)) return ue();
    let s = q(r.at(-1) ?? "", !0).flat();
    if (!a1t.some(([, f]) => s.includes(f))) return !1;
    let { readingsByFold: a, present: l } = Re(r);
    return a.some((f) => f.some((c) => c.length > V)) ? ue() : it(l);
  });
}
function Hqs(e) {
  return [e, ...fe(e)].some((n) => {
    let r = X(n);
    if (r.some((f) => f.length > rye)) return !0;
    let s = q(r.at(-1) ?? "", !0).flat();
    if (!a1t.some(([, f]) => s.includes(f))) return !1;
    let { readingsByFold: a, present: l } = Re(r);
    return a.some((f) => f.some((c) => c.length > V)) || a1t.some((f) => le(l.slice(-f.length), f));
  });
}
function at(e) {
  let n = Bn.exec(e)?.[1];
  return Pn.includes(e) || Mn.test(e) || ($n.test(e) && !de(e)) || (n !== void 0 && !de(n));
}
function b3n(e) {
  return [e, ...fe(e)].some((n) =>
    q(X(n).at(-1) ?? "", !0)
      .flat()
      .some(at)
  );
}
function de(e) {
  return Qe.includes(e.split(".").at(-1) ?? "");
}
function S3n(e) {
  return e.includes(":") ? [pl, ...an.map((n) => (r) => vir(r.replace(n, "")))] : [pl];
}
import { sep as Hn } from "path";
var jn = ["/proc", "/sys", "/dev"];
function l1t(e) {
  return jn.some((n) => e === n || e.startsWith(n + Hn));
}
var Run = 4096;
function dt(e) {
  return Gn(e).catch(() => {
    return;
  });
}
async function nZe(e, n, { attached: r = !1, readable: s = !1, realDirectory: a = dt } = {}) {
  if (l1t(n) || (s ? ft(n) : await __t(n, a))) return "own_or_device";
  return !r && (W1(e) || (n !== e && W1(n))) ? "credential_name" : void 0;
}
async function kHe(e, n) {
  return (await nZe(e, n)) !== void 0;
}
async function __t(e, n = dt) {
  if (ft(e)) return !0;
  let r = lt(e);
  for (let s of [...d$(), Wn(LZ)]) {
    let a = lt((await n(s)) ?? zn(s));
    if (r === a || r.startsWith(`${a}/`)) return !0;
  }
  return !1;
}
function ft(e) {
  return EHe(e) || Vn(ct(e));
}
function lt(e) {
  return e.normalize("NFC").split(/[\\/]/).map(pl).join("/");
}
function Vn(e) {
  let n = pl(e);
  if (/^\.claude.*\.json/.test(n)) return !0;
  return [...o4s, ...YQo.map((r) => ct(r))].some((r) => {
    let s = pl(r);
    return n === s || n === `${s}~` || n.startsWith(`${s}.`);
  });
}
class rZe extends Error {
  constructor() {
    super("the name or the place of a credential");
  }
}
var bt = Z.O_NOFOLLOW,
  Jn = Z.O_NONBLOCK,
  Qn = Z.O_DIRECTORY,
  d1t = 10485760,
  Ie = {
    tag: "chrome",
    validate: THe,
    rejection: er,
    noPaths:
      "file_upload requires a non-empty `paths` array of files the user has shared with this session.",
    namesSource: !1
  };
async function Zn(e) {
  let n = [{ path: yx(), kind: "attachments" }];
  if (e.isRemoteMode || i.CLAUDE_STAGE_FILE_ROOT)
    try {
      if (
        (n.push({ path: uV(), kind: "staging", fromChat: !0 }),
        EU(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND))
      )
        n.push({ path: Ece(), kind: "staging" });
    } catch (r) {
      t(
        `[chrome file_upload] stage root unresolvable, skipping staging roots (${r instanceof Error ? r.message : String(r)})`
      );
    }
  return n;
}
async function f$o(e, n, r, { maxTotalBytes: s = d1t, hosted: a, screen: l = Ie.validate } = {}) {
  let f = { remaining: s, total: s },
    c = () => Te(e, n, (g) => Ot(g, r, f, { ...Ie, validate: l }));
  if (a === void 0) return c();
  if (e !== "file_upload") {
    let g = { error: Hor };
    return Te(e, n, async () => g, _He.peek(a.session)?.host ? g : Ne);
  }
  if ("files" in n)
    return {
      error:
        "file_upload takes `paths`, not `files`. Nothing was uploaded. Call it again without `files`."
    };
  let m = J() ? _He.peek(a.session)?.host : void 0,
    y;
  if (m) {
    let { paths: g } = n;
    if (!Array.isArray(g) || g.length === 0) return { error: Ie.noPaths };
    y = await m.read(g, r, s, a.signal, !1);
  } else {
    let g = await c();
    y = { files: g.input?.files, error: g.error };
  }
  return y.error !== void 0 ? { error: y.error } : { input: n, callMeta: { [cqs]: y.files } };
}
async function p$o(e, n, { hostAsksPerFile: r }) {
  if (J()) return Ne;
  if (Array.isArray(e.paths) && e.paths.length > 1)
    return {
      error:
        "file_upload takes one file per call in this browser pane. Nothing was uploaded. Call it once for each file."
    };
  return Ot(
    e,
    n,
    { remaining: d1t, total: d1t },
    {
      tag: "pane",
      validate: (a, l) => lr(a, l, r),
      rejection: Rt,
      noPaths:
        "file_upload needs `paths` to be an array holding one absolute file path. Nothing was uploaded.",
      namesSource: !0
    }
  );
}
async function fRi(e, n, r) {
  return Te(e, n, async (s) => {
    let a = s.paths;
    if (!Array.isArray(a) || a.length === 0)
      return {
        error:
          "file_upload requires a non-empty `paths` array of files the user has shared with this session."
      };
    let l = [];
    for (let y of a) {
      if (typeof y !== "string") return { error: "file_upload `paths` entries must be strings." };
      try {
        l.push(await ke(y, r));
      } catch (g) {
        return (
          t(
            `[chrome file_upload] rejected path (pass-through): ${y} (${g instanceof Error ? g.message : String(g)})`
          ),
          { error: g instanceof ve ? tr(y) : g instanceof rZe ? Ct(y) : Rt(y) }
        );
      }
    }
    let { files: f, paths: c, ...m } = s;
    return { input: { ...m, paths: l } };
  });
}
async function Te(e, n, r, s = Ne) {
  if (e === "file_upload") return J() ? s : r(n);
  if (e === "browser_batch") {
    if (!Array.isArray(n.actions)) return { error: "browser_batch requires an `actions` array." };
    let a = [...n.actions],
      l = !1;
    for (let f = 0; f < a.length; f++) {
      let c = a[f];
      if (typeof c !== "object" || c === null || typeof c.name !== "string")
        return {
          error:
            "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested."
        };
      let m = c.name;
      if (!/^[\x20-\x7E]+$/.test(m)) return { error: mt(m) };
      let y = m.trim().toLowerCase();
      if (y === "browser_batch")
        return {
          error:
            "browser_batch sub-actions must be objects with a string name, and browser_batch cannot be nested."
        };
      if (y === "file_upload" && m !== "file_upload") return { error: mt(m) };
      if (m !== "file_upload") continue;
      let g = c,
        w = typeof g.input === "object" && g.input !== null ? g.input : {},
        h = J() ? s : await r(w);
      if (h.error) return { error: h.error };
      if (h.input !== g.input) ((a[f] = { ...g, input: h.input }), (l = !0));
    }
    return l ? { input: { ...n, actions: a } } : { input: n };
  }
  return { input: n };
}
var Ne = { error: IRe };
function H(e) {
  return e.replace(/["\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, "\uFFFD");
}
function er(e) {
  return `Cannot upload "${H(e)}": only files this session is allowed to read can be uploaded. Ask the user to share the file with this session, or to add its folder with /add-dir.`;
}
function Ct(e) {
  return `Cannot upload "${H(e)}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not uploaded on Claude's word alone. Tell the user it was not uploaded.`;
}
function Rt(e) {
  return `Cannot upload "${H(e)}": only files this session is allowed to read can be uploaded. Ask the user to share the file or its folder with this session.`;
}
function tr(e) {
  return `Cannot upload "${H(e)}": file_upload \`paths\` must be absolute paths as this session sees them (for example /sessions/\u2026 in a Cowork VM, or a drive-letter path on Windows).`;
}
function mt(e) {
  return `browser_batch sub-action name "${H(e)}" is not a valid tool name.`;
}
async function Ot(e, n, r, s) {
  let a = e.paths;
  if (!Array.isArray(a) || a.length === 0) return { error: s.noPaths };
  let l = [];
  for (let S of a) {
    if (typeof S !== "string") return { error: "file_upload `paths` entries must be strings." };
    let b, F, T, D;
    try {
      ({
        realPath: b,
        requiredDigest: F,
        outsideWorkingFolders: T,
        needsHostAsk: D
      } = await s.validate(S, n));
    } catch (x) {
      return (
        t(
          `[${s.tag} file_upload] rejected path: ${S} (${x instanceof Error ? x.message : String(x)})`
        ),
        { error: x instanceof rZe ? Ct(S) : s.rejection(S) }
      );
    }
    let C = await pr(S, b, r, s.tag, T ? s.rejection : void 0);
    if ("error" in C) return { error: C.error };
    if (F !== void 0 && et(C.buf) !== F)
      return (
        t(`[${s.tag} file_upload] registered attachment digest mismatch: ${S}`),
        { error: s.rejection(S) }
      );
    l.push({
      data: C.buf.toString("base64"),
      name: await xze(b),
      mimeType: hr(b),
      ...(s.namesSource && {
        sourcePath: b,
        requestedPath: H(S).replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g, "\uFFFD"),
        needsHostAsk: D !== !1
      })
    });
  }
  let { paths: f, ...c } = e;
  if (!s.namesSource) return { input: { ...c, files: l } };
  let { needsHostAsk: m, sourcePath: y, requestedPath: g, hostAsksPerFile: w, ...h } = c;
  return { input: { ...h, files: l } };
}
async function xze(e) {
  let n = await U(yx()).catch(() => {
    return;
  });
  return n !== void 0 && Et(e) === n ? l4s(pt(e)) : pt(e);
}
function It(e, n) {
  let r = ut(e),
    s = e.trim();
  if (A_(s) || A_(r))
    throw new R(
      `network path not allowed: ${A_(s) ? s : r}`,
      "claudeInChrome/fileUpload: network path rejected before filesystem access"
    );
  let { paths: a, vetted: l } = h6(r);
  if (!l)
    throw new R(
      "path could not be vetted (symbolic link chain or unreadable component)",
      "claudeInChrome/fileUpload: unvettable path ancestry rejected before filesystem access"
    );
  let f = n.trustedNetworkDirectories;
  for (let c of [s, ...a]) De(c, f);
  return { absPath: r, absChain: a };
}
function De(e, n) {
  if (uce(e, n) || Oye(e, n))
    throw new R(
      `network path not allowed: ${e}`,
      "claudeInChrome/fileUpload: network path rejected"
    );
  if (D8(e, n))
    throw new R(
      `suspicious path spelling: ${e}`,
      "claudeInChrome/fileUpload: suspicious Windows path pattern rejected"
    );
}
function xe(e, n, r = {}) {
  for (let s of e) {
    if (xa(s, n, "read", "deny", r))
      throw new R(`read denied: ${s}`, "claudeInChrome/fileUpload: path matches a read deny rule");
    if (xa(s, n, "read", "ask", r))
      throw new R(
        `read requires approval: ${s}`,
        "claudeInChrome/fileUpload: path matches a read ask rule"
      );
  }
}
var rr = 4096,
  At = 3,
  or = 64;
async function ke(e, n, r = At, s = new Set()) {
  return (await sUr(e, n, r, s)).judged;
}
async function sUr(e, n, r = At, s = new Set()) {
  let a = e.trim();
  if (a !== e)
    throw new R(
      "surrounding whitespace",
      "claudeInChrome/fileUpload: whitespace-padded path rejected on the pass-through"
    );
  if (a.length > rr)
    throw new R(
      "path too long",
      "claudeInChrome/fileUpload: over-long path rejected on the pass-through"
    );
  if (r < 0)
    throw new R(
      `nested percent-encoding: ${a}`,
      "claudeInChrome/fileUpload: multiply percent-encoded path rejected on the pass-through"
    );
  if (a.split(/[/\\]/).some((h) => h === ".."))
    throw new R(
      `parent-segment spelling not allowed: ${a}`,
      "claudeInChrome/fileUpload: dot-dot segment rejected on the pass-through"
    );
  Fe(a);
  let l = ut(a);
  if (!sr(a, l)) throw new ve();
  if (O() !== "windows" && a.includes("\\"))
    throw new R(
      `backslash in a POSIX spelling: ${a}`,
      "claudeInChrome/fileUpload: backslash spelling rejected on the pass-through"
    );
  if (/[/\\]\.?$/.test(a))
    throw new R(
      "trailing separator",
      "claudeInChrome/fileUpload: trailing-separator path rejected on the pass-through"
    );
  if (oo(n, { name: qe }) !== null || Va(n, { name: qe }) !== null)
    throw new R(
      "Read tool is restricted for this session",
      "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session (pass-through)"
    );
  for (let h of [a, l]) {
    let S = await gt(h);
    if (S !== void 0)
      throw S === "credential_name"
        ? new rZe()
        : Ae("a kernel or device path, or one of Claude Code's own credentials");
  }
  let f = a
    .split(/([/\\])/)
    .map((h) => {
      if (h === "/" || h === "\\" || !h.includes("%")) return h;
      try {
        return decodeURIComponent(h);
      } catch {
        return h;
      }
    })
    .join("");
  if (f !== a) await ke(f, n, r - 1, s);
  let { absChain: c } = It(a, n);
  for (let h of c) Fe(h);
  let { realPath: m, looped: y, spellings: g } = await ar(l);
  for (let h of g) (De(h, n.trustedNetworkDirectories), Fe(h));
  let w = new Set();
  for (let h of new Set([a, ...c, ...g])) {
    let S = ir(h);
    if (S !== null && !s.has(S)) {
      if (s.size >= or)
        throw new R(
          "too many stream-base spellings",
          "claudeInChrome/fileUpload: stream-base fan-out rejected on the pass-through"
        );
      s.add(S);
      try {
        await ke(S, n, r, s);
      } catch (b) {
        throw b instanceof rZe ? Ae(ht) : b;
      }
    }
    for (let b of [h, _T(h)]) w.add(b).add(b.normalize("NFC")).add(b.normalize("NFD"));
  }
  (xe(w, n), xe(w, n, { caseInsensitiveTarget: !0 }));
  for (let h of w) if ((await gt(h)) !== void 0) throw Ae(ht);
  return { judged: l, resolved: m, linked: c.length > 1 || y };
}
function gt(e) {
  return nZe(e, e, { readable: !0 });
}
var ht =
  "a name or place reached through a link, a case- or Unicode-folded spelling, or the file before a ':stream'";
function Ae(e) {
  return new R(
    e,
    "claudeInChrome/fileUpload: path refused by its name or place on the pass-through"
  );
}
function sr(e, n) {
  if (Yn(e) || Yn(n)) return !0;
  if (!Xn(e)) return !1;
  return O() !== "windows" || /^[a-z]:[\\/]/i.test(n);
}
function ir(e) {
  let n = e.length;
  for (;;) {
    let f = e[n - 1];
    if (f === "/" || f === "\\") {
      n -= 1;
      continue;
    }
    if (f === "." && n >= 2 && (e[n - 2] === "/" || e[n - 2] === "\\")) {
      n -= 2;
      continue;
    }
    break;
  }
  let r = e.slice(0, n),
    s = Math.max(r.lastIndexOf("/"), r.lastIndexOf("\\")) + 1,
    a = r.indexOf(":", s + 1);
  if (a === -1 || (s === 0 && a === 1)) return null;
  let l = a;
  while (l > s && r[l - 1] === " ") l -= 1;
  return r.slice(0, l);
}
class ve extends Error {
  constructor() {
    super("not an anchored absolute path");
  }
}
async function ar(e) {
  let n;
  try {
    n = await U(e);
  } catch (r) {
    return { realPath: void 0, looped: E(r) === "ELOOP", spellings: [] };
  }
  return { realPath: n, looped: !1, spellings: jo(n) };
}
function Fe(e) {
  let n = e.replace(/\\/g, "/");
  if (
    /^\/(?:dev|proc)(?:\/|$)/i.test(n) ||
    zy(n) ||
    /(?:^|\/)\.\.namedfork(?:\/|$)/i.test(n) ||
    /:\$[a-z_]/i.test(n) ||
    Sg(n) ||
    n.split("/").some(Iv)
  )
    throw new R(
      `alias namespace path not allowed: ${e}`,
      "claudeInChrome/fileUpload: kernel alias namespace path rejected on the pass-through"
    );
}
async function Q(e, n) {
  if ((await nZe(e, n, { readable: !0 })) === "credential_name") throw new rZe();
}
async function Lt(e, n) {
  if (e.length > Run)
    throw new R("path too long", "claudeInChrome/fileUpload: over-long path rejected");
  let r = await Zn(n),
    s = ut(e);
  if (!r.some((y) => (y.fromChat || y.kind === "attachments") && s.startsWith(y.path + he)))
    await Q(s, s);
  let { absPath: a, absChain: l } = It(e, n),
    f = n.trustedNetworkDirectories,
    c = await U(a),
    m = new Set([...l, ...jo(c)]);
  for (let y of m) De(y, f);
  if ((xe(m, n), (await nZe(a, c, { readable: !0, attached: !0 })) !== void 0))
    throw new R(
      `kernel or device path, or one of Claude Code's credentials: ${c}`,
      "claudeInChrome/fileUpload: kernel or device path, or one of Claude Code's own credentials"
    );
  for (let y of r) {
    let g = await St(y.path).catch(() => null);
    if (g === null || g.isSymbolicLink() || !g.isDirectory()) continue;
    let w = await _t(y.path, Z.O_RDONLY | Qn | bt).catch(() => null);
    if (w === null) continue;
    let h;
    try {
      let S = await w.stat();
      if (!S.isDirectory()) continue;
      let b = await U(y.path).catch(() => {
        return;
      });
      if (b === void 0) continue;
      let F = await wt(b).catch(() => null);
      if (F === null || F.ino !== S.ino || F.dev !== S.dev) continue;
      h = b;
    } finally {
      await w.close();
    }
    if (c === h || c.startsWith(h + he)) {
      if (y.kind === "staging") {
        let b = await U(Le()).catch(() => Le());
        if (h === b || h.startsWith(b + he) || b.startsWith(h + he)) continue;
        if (!y.fromChat) await Q(a, c);
        return {
          absPath: a,
          realPath: c,
          pathsToCheck: m,
          sharedWithSession: y.fromChat ? { fromChat: !0 } : {}
        };
      }
      let S = Wun(c);
      if (S !== void 0)
        return {
          absPath: a,
          realPath: c,
          pathsToCheck: m,
          sharedWithSession: { requiredDigest: S }
        };
      break;
    }
  }
  if (oo(n, { name: qe }) !== null || Va(n, { name: qe }) !== null)
    throw new R(
      "Read tool is restricted for this session",
      "claudeInChrome/fileUpload: Read tool denied or ask-gated for this session"
    );
  if (n.blockReadsOutsideWorkingDirectories)
    for (let y of m) {
      let g = GD(y, n, "read");
      if (!g.allowed && g.decisionReason?.type === "safetyCheck" && g.decisionReason.reason === PH)
        throw new R(
          `read not allowed: ${y}`,
          "claudeInChrome/fileUpload: path outside the working directories under the read block"
        );
    }
  return { absPath: a, realPath: c, pathsToCheck: m };
}
async function THe(e, n) {
  let { absPath: r, realPath: s, pathsToCheck: a, sharedWithSession: l } = await Lt(e, n);
  if (l !== void 0) return { realPath: s, ...l };
  if (n.mode === "bypassPermissions") return (await Q(r, s), { realPath: s });
  for (let f of a)
    if (!GD(f, n, "read").allowed)
      throw new R(
        `read not allowed: ${f}`,
        "claudeInChrome/fileUpload: path read not allowed by session permissions"
      );
  return (await Q(r, s), { realPath: s });
}
async function lr(e, n, r) {
  let { absPath: s, realPath: a, pathsToCheck: l, sharedWithSession: f } = await Lt(e, n);
  if (f !== void 0) return { realPath: a, ...f, needsHostAsk: !0 };
  let { restricted: c } = n,
    m = cr(a, n),
    y = !1,
    g = !1;
  for (let h of l) {
    let S = GD(h, n, "read");
    if (
      S.allowed &&
      !(c && S.decisionReason?.type === "rule") &&
      (S.decisionReason !== void 0 || m)
    ) {
      g ||= S.decisionReason !== void 0;
      continue;
    }
    let b =
      !S.allowed && !U$o(S)
        ? `refused by isPathAllowed (${S.decisionReason?.type ?? "no reason given"})`
        : c
          ? "--restricted session: no rule or host question reaches outside the working folders"
          : !r
            ? "outside the working folders, and the host does not ask per file"
            : void 0;
    if (b !== void 0)
      throw new R(
        `read not allowed (${b}): ${h}`,
        "claudeInChrome/fileUpload: pane path read not allowed by session permissions"
      );
    y = !0;
  }
  if (!y)
    return (
      await Q(s, a),
      {
        realPath: a,
        needsHostAsk:
          g ||
          (await __t(a, yt).catch(
            (h) => (t(`[pane file_upload] own-files check failed, so the host asks: ${d(h)}`), !0)
          ))
      }
    );
  let w = await nZe(s, a, { realDirectory: yt });
  if (w !== void 0)
    throw new R(
      `refused by its name or place (${w}): ${a}`,
      "claudeInChrome/fileUpload: pane path outside the working folders is one of Claude Code's own files or is named like a credential"
    );
  return { realPath: a, outsideWorkingFolders: !0, needsHostAsk: !0 };
}
function cr(e, n) {
  return Array.from(pv(n))
    .flatMap((r) => Mye(r))
    .some((r) => Iu(e, r, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 }));
}
async function yt(e) {
  try {
    return await U(e);
  } catch (n) {
    if (ur(e, n)) return;
    throw n;
  }
}
function ur(e, n) {
  if (Us(n)) return !0;
  let r = E(n);
  return e === Et(LZ) && (r === "EACCES" || r === "EPERM");
}
async function dr(e, n) {
  let r = n + 1,
    s = Buffer.allocUnsafe(r),
    a = 0;
  while (a < r) {
    let { bytesRead: l } = await e.read(s, a, r - a, a);
    if (l === 0) break;
    a += l;
  }
  if (a > n) return "grew";
  return { buf: s.subarray(0, a) };
}
function fr(e) {
  return e instanceof Error && "code" in e && e.code === "ENAMETOOLONG" ? "moved" : "fallback";
}
async function iUr(e, n, r) {
  {
    let l = null;
    try {
      l = await Kn(`/proc/self/fd/${e.fd}`);
    } catch (f) {
      if (fr(f) === "moved") return "moved";
      t(
        `verifyHandleBinding: /proc handle-path read unavailable, using two-sample fallback (${f instanceof Error ? f.message : String(f)})`
      );
    }
    if (l !== null) {
      if (l.endsWith(" (deleted)")) return "moved";
      return l === n ? "ok" : "moved";
    }
  }
  let a = (await U(n).catch(() => null)) === n ? await wt(n).catch(() => null) : null;
  if (a === null || a.ino !== r.ino || a.dev !== r.dev) return "moved";
  return "ok";
}
async function Pze(e, n) {
  let r = await St(e).catch(() => null);
  if (r === null || !r.isFile()) return { refusal: "not_regular" };
  let s;
  try {
    s = await _t(e, Z.O_RDONLY | bt | Jn);
  } catch (a) {
    return (
      t(`readValidatedFileWithin: open failed: ${d(a)}`),
      { refusal: "open_failed", detail: Er(a) ?? "unknown error" }
    );
  }
  try {
    let a = await s.stat();
    if (a.nlink > 1) return { refusal: "hard_links" };
    if (!a.isFile()) return { refusal: "moved" };
    if ((await iUr(s, e, a)) === "moved") return { refusal: "moved" };
    if (a.size > n) return { refusal: "too_large" };
    let l = await dr(s, a.size);
    if (l === "grew") return { refusal: "grew" };
    return { buf: l.buf };
  } catch (a) {
    return (
      t(`readValidatedFileWithin: read failed: ${d(a)}`),
      { refusal: "read_failed", detail: Er(a) ?? "unknown error" }
    );
  } finally {
    await s.close();
  }
}
async function pr(e, n, r, s, a) {
  let l = await Pze(n, r.remaining);
  if ("buf" in l) return ((r.remaining -= l.buf.length), l);
  if (a !== void 0) {
    let f = "detail" in l ? `: ${l.detail}` : "";
    return (t(`[${s} file_upload] read refused (${l.refusal}${f}): ${e}`), { error: a(e) });
  }
  return { error: mr(e, l, r.total) };
}
function mr(e, n, r = d1t) {
  let s = H(e);
  switch (n.refusal) {
    case "not_regular":
      return `Cannot upload "${s}": not a regular file.`;
    case "open_failed":
      return `Cannot upload "${s}": failed to open file (${n.detail}).`;
    case "hard_links":
      return `Cannot upload "${s}": the file has multiple hard links, which can alias a file outside the session's allowed directories. This commonly triggers for files inside package-manager stores like node_modules (Bun and pnpm hard-link packages). Copy the file (e.g. with cp) and upload the copy.`;
    case "moved":
      return `Cannot upload "${s}": path moved during validation.`;
    case "too_large":
      return `Cannot upload "${s}": total upload size would exceed ${r >= 1048576 ? `${Math.floor((r * 10) / 1048576) / 10} MB` : r >= 1024 ? `${Math.floor(r / 1024)} KB` : `${r} bytes`}. file_upload sends file contents over the browser bridge in a single message; use a smaller file, or split across multiple file_upload calls if the page accepts files one at a time.`;
    case "grew":
      return `Cannot upload "${s}": file grew during read.`;
    case "read_failed":
      return `Cannot upload "${s}": failed to read file (${n.detail}).`;
  }
}
var gr = {
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
  ".md": "text/markdown",
  ".csv": "text/csv",
  ".tsv": "text/tab-separated-values",
  ".json": "application/json",
  ".html": "text/html",
  ".htm": "text/html",
  ".xml": "application/xml",
  ".zip": "application/zip",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".xls": "application/vnd.ms-excel",
  ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ".ppt": "application/vnd.ms-powerpoint",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".webm": "video/webm"
};
function hr(e) {
  return gr[qn(e).toLowerCase()] ?? "application/octet-stream";
}
import { StringDecoder as Ft } from "string_decoder";
import { Readable as yr } from "stream";
import { createReadStream as Sr, fstat as _r } from "fs";
import { stat as wr, readFile as br } from "fs/promises";
var Cr = 10485760,
  m$o = 134217728;
class Ize extends Error {
  sizeInBytes;
  maxSizeBytes;
  constructor(e, n, r = "") {
    super(
      `File content (${en(e)}) exceeds maximum allowed size (${en(n)}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`
    );
    this.sizeInBytes = e;
    this.maxSizeBytes = n;
    this.name = "FileTooLargeError";
  }
}
class oZe extends Error {
  selectedBytes;
  maxSelectedBytes;
  constructor(e, n, r = "") {
    super(
      `The requested line range contains over ${en(n)} of text, more than a read can return. Use a smaller limit \u2014 or, if a single line is this large, no limit will fit it: search for specific content instead.${r}`
    );
    this.selectedBytes = e;
    this.maxSelectedBytes = n;
    this.name = "SelectedRangeTooLargeError";
  }
}
async function oye(e, n = 0, r, s, a, l) {
  a?.throwIfAborted();
  let f = l?.truncateOnByteLimit ?? !1,
    c = l?.maxSelectedBytes,
    m = l?.handle,
    y = m ? (l?.handleStats ?? (await m.stat())) : await wr(e);
  if (c !== void 0 && y.isFile() && y.size <= c) c = void 0;
  if (y.isDirectory())
    throw Object.assign(Error(`EISDIR: illegal operation on a directory, read '${e}'`), {
      code: "EISDIR",
      errno: -21,
      syscall: "read",
      path: e
    });
  if (y.isFile() && y.size < Cr) {
    if (!f && s !== void 0 && y.size > s) throw new Ize(y.size, s);
    let g = m ? await m.readFile({ signal: a }) : await br(e, { signal: a });
    if (!f && s !== void 0) {
      if (g.length > s) throw new Ize(g.length, s);
    }
    let { encoding: w, notText: h } = $At(g);
    return {
      ...g$o(g.toString(w), y.size, y.mtimeMs, n, r, f ? s : void 0, c),
      ...(h && { notText: h })
    };
  }
  return Ar(
    e,
    n,
    r,
    s,
    c,
    y.isFile() ? void 0 : m$o,
    f,
    a,
    m ? { handle: m, mtimeMs: y.mtimeMs, positional: y.isFile() } : void 0
  );
}
function g$o(e, n, r, s, a, l, f) {
  let c = e.charCodeAt(0) === 65279;
  if (c) n -= 3;
  let m = c ? e.slice(1) : e;
  if (s === 0 && a === void 0 && l === void 0 && f === void 0) {
    let C = m.includes("\r")
      ? m.replaceAll(
          `\r
`,
          `
`
        )
      : m;
    if (C.endsWith("\r")) C = C.slice(0, -1);
    let x = 1,
      M = C.indexOf(`
`);
    while (M !== -1)
      (x++,
        (M = C.indexOf(
          `
`,
          M + 1
        )));
    return {
      content: C,
      lineCount: x,
      totalLines: x,
      totalBytes: n,
      readBytes: Buffer.byteLength(C, "utf8"),
      mtimeMs: r,
      truncatedByBytes: !1
    };
  }
  let y = a !== void 0 ? s + a : 1 / 0,
    g = [],
    w = 0,
    h = 0,
    S,
    b = 0,
    F = !1;
  function T(C) {
    if (f !== void 0 || l !== void 0) {
      let x = g.length > 0 ? 1 : 0,
        M = b + x + Buffer.byteLength(C);
      if (l !== void 0 && M > l) return ((F = !0), !1);
      if (f !== void 0 && M > f) throw new oZe(M, f);
      b = M;
    }
    return (g.push(C), !0);
  }
  while (
    (S = m.indexOf(
      `
`,
      h
    )) !== -1
  ) {
    if (w >= s && w < y && !F) {
      let C = m.slice(h, S);
      if (C.endsWith("\r")) C = C.slice(0, -1);
      T(C);
    }
    (w++, (h = S + 1));
  }
  if (w >= s && w < y && !F) {
    let C = m.slice(h);
    if (C.endsWith("\r")) C = C.slice(0, -1);
    T(C);
  }
  w++;
  let D = g.join(`
`);
  return {
    content: D,
    lineCount: g.length,
    totalLines: w,
    totalBytes: n,
    readBytes: Buffer.byteLength(D, "utf8"),
    mtimeMs: r,
    truncatedByBytes: F
  };
}
function Rr(e) {
  _r(e, (n, r) => {
    this.resolveMtime(n ? 0 : r.mtimeMs);
  });
}
function Or(e) {
  if (this.isFirstChunk && zfe(e) === "utf16le") this.decoder = new Ft("utf16le");
  let n = this.decoder.write(e);
  if (n.length > 0) Tt.call(this, n);
}
function Tt(e) {
  let n = e;
  if (this.isFirstChunk) {
    if (((this.isFirstChunk = !1), n.charCodeAt(0) === 65279)) n = n.slice(1);
  }
  let r = Buffer.byteLength(n);
  if (
    ((this.totalBytesRead += r),
    this.hardCapBytes !== void 0 && this.totalBytesRead > this.hardCapBytes)
  ) {
    this.stream.destroy(new Ize(this.totalBytesRead, this.hardCapBytes));
    return;
  }
  if (
    !this.truncateOnByteLimit &&
    this.maxBytes !== void 0 &&
    this.totalBytesRead > this.maxBytes
  ) {
    this.stream.destroy(new Ize(this.totalBytesRead, this.maxBytes));
    return;
  }
  let s = this.partial.length > 0 ? this.partial + n : n,
    a = this.partialBytes + r;
  ((this.partial = ""), (this.partialBytes = 0));
  let l = 0,
    f;
  while (
    (f = s.indexOf(
      `
`,
      l
    )) !== -1
  ) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let c = s.slice(l, f);
      if (c.endsWith("\r")) c = c.slice(0, -1);
      let m = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (m || this.maxSelectedBytes !== void 0) {
        let y = this.selectedLines.length > 0 ? 1 : 0,
          g = this.selectedBytes + y + Buffer.byteLength(c);
        if (m && g > this.maxBytes)
          ((this.truncatedByBytes = !0), (this.endLine = this.currentLineIndex));
        else if (this.maxSelectedBytes !== void 0 && g > this.maxSelectedBytes) {
          this.stream.destroy(new oZe(g, this.maxSelectedBytes));
          return;
        } else ((this.selectedBytes = g), this.selectedLines.push(c));
      } else this.selectedLines.push(c);
    }
    (this.currentLineIndex++, (l = f + 1));
  }
  if (l < s.length) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let c = s.slice(l),
        m = l === 0 ? a : Buffer.byteLength(c),
        y = this.truncateOnByteLimit && this.maxBytes !== void 0;
      if (y || this.maxSelectedBytes !== void 0) {
        let g = this.selectedLines.length > 0 ? 1 : 0,
          w = this.selectedBytes + g + m;
        if (y && w > this.maxBytes) {
          ((this.truncatedByBytes = !0), (this.endLine = this.currentLineIndex));
          return;
        }
        if (this.maxSelectedBytes !== void 0 && w > this.maxSelectedBytes) {
          this.stream.destroy(new oZe(w, this.maxSelectedBytes));
          return;
        }
      }
      ((this.partial = c), (this.partialBytes = m));
    }
  }
}
function Ir() {
  let e = this.decoder.end();
  if (e.length > 0) {
    if ((Tt.call(this, e), this.stream.destroyed)) return;
  }
  let n = this.partial;
  if (n.endsWith("\r")) n = n.slice(0, -1);
  if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine)
    if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
      let a = this.selectedLines.length > 0 ? 1 : 0;
      if (this.selectedBytes + a + Buffer.byteLength(n) > this.maxBytes) this.truncatedByBytes = !0;
      else this.selectedLines.push(n);
    } else this.selectedLines.push(n);
  this.currentLineIndex++;
  let r = this.selectedLines.join(`
`),
    s = this.truncatedByBytes;
  this.mtimeReady.then((a) => {
    this.resolve({
      content: r,
      lineCount: this.selectedLines.length,
      totalLines: this.currentLineIndex,
      totalBytes: this.totalBytesRead,
      readBytes: Buffer.byteLength(r, "utf8"),
      mtimeMs: a,
      truncatedByBytes: s
    });
  });
}
function Ar(e, n, r, s, a, l, f, c, m) {
  return new Promise((y, g) => {
    let w = {
      stream: m
        ? h$o(m.handle, m.positional, c)
        : Sr(e, { highWaterMark: 524288, ...(c ? { signal: c } : void 0) }),
      decoder: new Ft("utf8"),
      offset: n,
      endLine: r !== void 0 ? n + r : 1 / 0,
      maxBytes: s,
      maxSelectedBytes: a,
      hardCapBytes: l,
      truncateOnByteLimit: f,
      resolve: y,
      totalBytesRead: 0,
      selectedBytes: 0,
      truncatedByBytes: !1,
      currentLineIndex: 0,
      selectedLines: [],
      partial: "",
      partialBytes: 0,
      isFirstChunk: !0,
      resolveMtime: () => {},
      mtimeReady: null
    };
    if (
      ((w.mtimeReady = new Promise((h) => {
        w.resolveMtime = h;
      })),
      m)
    )
      w.resolveMtime(m.mtimeMs);
    else w.stream.once("open", Rr.bind(w));
    (w.stream.on("data", Lr.bind(w)), w.stream.once("end", Fr.bind(w)), w.stream.once("error", g));
  });
}
function xt(e) {
  return function (...n) {
    try {
      e.apply(this, n);
    } catch (r) {
      this.stream.destroy(N(r));
    }
  };
}
var Lr = xt(Or),
  Fr = xt(Ir);
function h$o(e, n, r) {
  let a = Buffer.allocUnsafe(524288),
    l = n ? 0 : null,
    f = !1,
    c = new yr({
      read() {
        if (f) return;
        ((f = !0),
          e
            .read(a, 0, 524288, l)
            .then(({ bytesRead: m }) => {
              if (((f = !1), c.destroyed)) return;
              if (m === 0) {
                c.push(null);
                return;
              }
              if (l !== null) l += m;
              c.push(Buffer.from(a.subarray(0, m)));
            })
            .catch((m) => {
              ((f = !1), c.destroy(N(m)));
            }));
      }
    });
  if (r) {
    let m = () => {
      c.destroy(r.reason instanceof Error ? r.reason : new Ye());
    };
    if (r.aborted) m();
    else
      (r.addEventListener("abort", m, { once: !0 }),
        c.once("close", () => r.removeEventListener("abort", m)));
  }
  return c;
}
import { constants as Tr } from "fs";
import { open as xr, readlink as kr } from "fs/promises";
async function c1t(e, n, r = {}) {
  if (J()) {
    if (e.has(n)) DG("file_state_resync");
    return null;
  }
  let s = Nr(e, n);
  if (!s) return null;
  try {
    let a = await ck(n);
    if (a <= s.timestamp) return null;
    let l = cv((await y_(n)).content);
    if (e.get(n) !== s) return null;
    return Dr(e, n, s, a, l, r.requireReadBeforeWrite === !0);
  } catch {
    return null;
  }
}
function Nr(e, n) {
  let r = e.get(n);
  if (!r) return null;
  let s = r.isPartialView === !0 && (r.offset ?? 1) <= 1 && r.limit === void 0;
  return JC(r) || s ? r : null;
}
function Dr(e, n, r, s, a, l) {
  let f = wU(r, a);
  return (
    e.set(n, {
      content: a,
      timestamp: s,
      offset: void 0,
      limit: void 0,
      ...((!f || r.contentNotInModelContext) && { contentNotInModelContext: !0 }),
      ...((r.isPartialView || (l && !f)) && { isPartialView: !0 }),
      ...(((l && !f) || r.refreshedBehindModel) && { refreshedBehindModel: !0 }),
      ...(r.startupMemorySeed && { startupMemorySeed: !0 }),
      ...(f && r.seededFromContext && { seededFromContext: !0 })
    }),
    f ? "unchanged" : "changed"
  );
}
function vr(e, n) {
  if (e.content === "" && e.contentHash !== void 0) {
    let a = e.contentLength ?? 0;
    return n < a || n > a * 4 + 3;
  }
  let r = Buffer.byteLength(e.content),
    s = 0;
  for (
    let a = e.content.indexOf(`
`);
    a !== -1;
  )
    (s++,
      (a = e.content.indexOf(
        `
`,
        a + 1
      )));
  return n < r || n > r + s + 3;
}
function w3n() {
  return nr() ? { product: Z2e, attach: egn } : void 0;
}
function xun(e, n, r) {
  let s = `${r.product}/`;
  if (!e.startsWith(s)) return !1;
  let a = e.slice(s.length);
  return a.split("/").every((f) => f !== "" && f !== "." && f !== "..") && n === `${r.attach}/${a}`;
}
async function Lqs(e, n, r, s, a, l = {}) {
  let f = !1,
    c = (m, y) => {
      if (!f && !a.aborted) ((f = !0), l.onOutcome?.(m, y));
    };
  try {
    return await Pr(e, n, r, s, a, l, c);
  } catch (m) {
    throw (c("other", !1), m);
  }
}
async function Pr(e, n, r, s, a, l, f) {
  let c = (S) => (f(S, !1), !1);
  if (!JC(r)) return c("partial_view");
  if (r.touchCompared) return c("already_compared");
  a.throwIfAborted();
  let m = aee(),
    y = O(),
    g = y === "linux" || y === "wsl",
    w = typeof m === "number" && (g || (y === "macos" && !(await Gar()))),
    h;
  try {
    if (!w && (await BEn(n)) === void 0) return c("other");
    h = typeof m === "number" ? await Q9(n, m | Tr.O_NOFOLLOW, y) : await xr(n, m);
  } catch (S) {
    let b = E(S);
    if (b === "ENOENT" || b === "ELOOP") return c(b === "ENOENT" ? "enoent" : "leaf_link");
    throw S;
  }
  try {
    let S = await h.stat(),
      b = g
        ? await kr(`/proc/self/fd/${h.fd}`).catch(() => {
            return;
          })
        : n,
      F =
        b !== n &&
        b !== void 0 &&
        l.outputsLink !== void 0 &&
        xun(n, b, l.outputsLink) &&
        l.isLandingJudged?.(b) === !0;
    if (!S.isFile()) return c("not_regular");
    if (S.size > s) return c("oversize");
    if (S.nlink > 1) return c("nlink");
    if (b === void 0) return c("other");
    if (b !== n && !F) return c("link_on_path");
    if (!w) {
      let C = await h.stat({ bigint: !0 }),
        x = await BEn(n);
      if (x === void 0 || x.dev !== C.dev || x.ino !== C.ino || Wu(x.ino)) return c("link_on_path");
    }
    let T = !1,
      D = !1;
    try {
      ((T =
        !vr(r, S.size) &&
        wU(r, (await oye(n, 0, void 0, s, a, { handle: h, handleStats: S })).content)),
        (D = !0));
    } finally {
      if (!a.aborted && e.get(n) === r) {
        if (
          (e.set(n, { ...r, ...(T && { timestamp: Math.floor(S.mtimeMs) }), touchCompared: !0 }), D)
        )
          f(T ? "same" : "differs", F);
      } else ((T = !1), f("other", !1));
    }
    return T;
  } finally {
    let S = h.close();
    if (a.aborted) S.catch(() => {});
    else await S;
  }
}
export {
  h3n,
  Iqs,
  Oqs,
  d$,
  o$o,
  Rze,
  s$o,
  nUr,
  rUr,
  MG,
  i$o,
  g_t,
  EHe,
  a$o,
  h_t,
  y3n,
  QTe,
  rye,
  l$o,
  d$o,
  _3n,
  Mqs,
  W1,
  Dqs,
  tZe,
  oUr,
  y_t,
  c$o,
  a1t,
  u$o,
  Hqs,
  b3n,
  S3n,
  l1t,
  Run,
  nZe,
  kHe,
  __t,
  rZe,
  d1t,
  f$o,
  p$o,
  fRi,
  xze,
  sUr,
  THe,
  iUr,
  Pze,
  m$o,
  Ize,
  oZe,
  oye,
  g$o,
  h$o,
  c1t,
  w3n,
  xun,
  Lqs
};

//# sourceMappingURL=chunk-frrn501g.js.map
