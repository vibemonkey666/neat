// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import * as J from "fs";
function h4s() {
  try {
    let e = J.readFileSync("/proc/version", { encoding: "utf8" }),
      t = e.match(/WSL(\d+)/i);
    if (t && t[1]) return t[1];
    if (e.toLowerCase().includes("microsoft")) return "1";
    return;
  } catch {
    return;
  }
}
function qv() {
  switch ("linux") {
    case "darwin":
      return "macos";
    case "linux":
      return "linux";
    case "win32":
      return "windows";
    default:
      return "unknown";
  }
}
import { homedir as B } from "os";
import * as p from "path";
import * as G from "fs";
function St(e, t) {
  if (!process.env.SRT_DEBUG) return;
  let r = t?.level || "info",
    n = "[SandboxDebug]";
  switch (r) {
    case "error":
      console.error(`${n} ${e}`);
      break;
    case "warn":
      console.warn(`${n} ${e}`);
      break;
    default:
      console.error(`${n} ${e}`);
  }
}
import * as L from "fs";
import * as U from "path";
var re = 40;
function P(e, t) {
  let r = e(t);
  if (r.includes("\uFFFD") && !e(t, "buffer").equals(Buffer.from(r)))
    throw Object.assign(Error(`EILSEQ: illegal byte sequence, '${t}'`), { code: "EILSEQ" });
  return r;
}
function cye(e) {
  let t = U.isAbsolute(e) ? "" : process.cwd(),
    r = U.resolve(t, e);
  if (!(t + e).includes("\\")) return P(L.realpathSync.native, r);
  let { real: n, notThere: c } = Q$o(r);
  if (c !== void 0) throw c;
  return n || "/";
}
function Q$o(e) {
  let t = "",
    r = 0,
    n = e.split("/");
  for (let c = n.shift(); c !== void 0; c = n.shift()) {
    if (c === "" || c === "." || c === "..") {
      try {
        L.lstatSync(`${t}/.`);
      } catch (i) {
        if (i.code !== "EACCES") throw i;
        return { real: t, rest: [c, ...n], notThere: i };
      }
      if (c === "..") t = t.slice(0, t.lastIndexOf("/"));
      continue;
    }
    let f = `${t}/${c}`,
      a;
    try {
      a = L.lstatSync(f).isSymbolicLink();
    } catch (i) {
      let { code: s } = i;
      if (s !== "ENOENT" && s !== "ENOTDIR" && s !== "EACCES") throw i;
      return { real: t, rest: [c, ...n], notThere: i };
    }
    if (!a) {
      t = f;
      continue;
    }
    if (++r > re)
      throw Object.assign(Error(`ELOOP: too many symbolic links encountered, realpath '${e}'`), {
        code: "ELOOP",
        syscall: "realpath",
        path: e
      });
    let o = P(L.readlinkSync, f);
    if (o.startsWith("/")) t = "";
    n.unshift(...o.split("/"));
  }
  return { real: t, rest: n };
}
var g;
(function (e) {
  ((e.Text = "text"),
    (e.Separator = "separator"),
    (e.AnyChar = "anyChar"),
    (e.Star = "star"),
    (e.Globstar = "globstar"),
    (e.GlobstarSlash = "globstarSlash"),
    (e.Set = "set"));
})(g || (g = {}));
function se(e) {
  if (e === "") return;
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r + 1] === "-" && r + 2 < e.length,
      c = e.charCodeAt(r);
    if (n) r += 2;
    let f = e.charCodeAt(r);
    if (f < c) return;
    t.push([c, f]);
  }
  return t;
}
var ee = 47;
function W(e) {
  let t = [],
    r = 0,
    n = (i) => {
      if (r < i) {
        let s = e.slice(r, i);
        t.push({ kind: g.Text, text: s });
      }
    },
    c = (i) => {
      let { Star: s, Globstar: b, GlobstarSlash: R } = g,
        _ = (I) => t[t.length - I]?.kind;
      if (_(1) === b || _(1) === i) return;
      if (!(i === b || (_(2) === i && (_(1) === s || _(1) === R)))) {
        t.push({ kind: i });
        return;
      }
      while (_(1) === s || _(1) === R) t.pop();
      t.push({ kind: b });
    },
    f = 0,
    a = [],
    o = 0;
  while (o < e.length)
    switch (e[o]) {
      case "/":
        (n(o), t.push({ kind: g.Separator }), (r = ++o));
        break;
      case "?":
        (n(o), t.push({ kind: g.AnyChar }), (r = ++o));
        break;
      case "*": {
        n(o);
        let i = o;
        while (e[o] === "*") o++;
        let s = o - i >= 2 && e[o] === "/",
          b = o - i - (s ? 2 : 0);
        if (b >= 2) c(g.Globstar);
        if (b === 1) c(g.Star);
        if (s) c(g.GlobstarSlash);
        r = s ? ++o : o;
        break;
      }
      case "[": {
        if (o < f) {
          o++;
          break;
        }
        let i = e.indexOf("]", o + 1);
        if (i === -1) {
          (a.push(e.slice(o)), (f = e.length), o++);
          break;
        }
        let s = e.slice(o + 1, i),
          b = se(s);
        if (b === void 0) {
          (a.push(`[${s}]`), (f = i + 1), o++);
          break;
        }
        (n(o),
          t.push({
            kind: g.Set,
            members: s,
            matchesSeparator: b.some(([R, _]) => R <= ee && ee <= _)
          }),
          (r = o = i + 1));
        break;
      }
      default:
        o++;
    }
  if ((n(o), a.length > 0))
    St(
      `[Sandbox] The brackets in ${a.join(", ")} spell no set of characters, so they are read as text: ${e}`,
      { level: "warn" }
    );
  return t;
}
function T1t(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function X(e) {
  switch (e.kind) {
    case g.Text:
      return T1t(e.text);
    case g.Separator:
      return "/";
    case g.AnyChar:
      return "[^/]";
    case g.Star:
      return "[^/]*";
    case g.Globstar:
      return ".*";
    case g.GlobstarSlash:
      return "(.*/)?";
    case g.Set:
      return `[${e.members.replace(/[.^$+{}()|\\]/g, "\\$&")}]`;
  }
}
function M_t(e) {
  return `^${W(e).map(X).join("")}$`;
}
function Xun(e) {
  return M_t(e).slice(0, -1) + "(/.*)?$";
}
var t8n = [
    ".gitconfig",
    ".gitmodules",
    ".bashrc",
    ".bash_profile",
    ".zshrc",
    ".zprofile",
    ".profile",
    ".ripgreprc",
    ".mcp.json"
  ],
  oe = [".git", ".vscode", ".idea"];
function n8n() {
  return [...oe.filter((e) => e !== ".git"), ".claude/commands", ".claude/agents"];
}
function A1t(e) {
  return e.toLowerCase();
}
function ub(e, t) {
  return e === t || e.startsWith(t === "/" ? "/" : t + "/");
}
function pZe(e, t) {
  return e !== t && ub(e, t);
}
function* Jun(e) {
  for (let t = e.lastIndexOf("/"); t > 0; t = e.lastIndexOf("/", t - 1)) yield e.slice(0, t);
  if (e !== "/") yield "/";
}
function C1t(e) {
  try {
    let t = cye(e);
    if (t !== e) return [e, t];
  } catch {}
  return [e];
}
function oBr(e, t) {
  if (e === "/") return e;
  let r = t(p.dirname(e));
  return `${r === "/" ? "" : r}/${p.basename(e)}`;
}
function Qun() {
  try {
    return process.cwd();
  } catch {
    return;
  }
}
function Uze(e) {
  let t = e?.code;
  return t === "ENOENT" || t === "ENOTDIR" || t === "ELOOP" || t === "ENAMETOOLONG";
}
function dd(e) {
  return e.includes("*") || e.includes("?") || e.includes("[") || e.includes("]");
}
function rAe(e) {
  return e.includes("*") || e.includes("?");
}
function D_t(e) {
  return qv() === "windows" ? rAe(e) : dd(e);
}
function R1t(e) {
  let t = e;
  if (
    t === null ||
    typeof t !== "object" ||
    typeof t.path !== "string" ||
    t.path === "" ||
    t.literal !== !0
  )
    throw TypeError(
      `A filesystem path entry must be a path, or { path, literal: true }; got ${JSON.stringify(e) ?? String(e)}`
    );
  return t.path;
}
function LO(e) {
  if (/^\\\\\?\\unc\\/i.test(e)) return "\\\\" + e.slice(8);
  if (e.startsWith("\\\\?\\")) return e.slice(4);
  return e;
}
function x1t(e) {
  let t = p.win32.toNamespacedPath(e);
  return /^[\\/]{2}[?.][\\/]unc[\\/]/i.test(t);
}
function xh(e) {
  return e.replace(/\/\*\*$/, "") || "/";
}
function Zun(e, t) {
  let r = p.normalize(e),
    n = p.normalize(t);
  if (n === r) return !1;
  if (r.startsWith("/tmp/") && n === "/private" + r) return !1;
  if (r.startsWith("/var/") && n === "/private" + r) return !1;
  if (n === "/") return !0;
  if (n.split("/").filter(Boolean).length <= 1) return !0;
  if (r.startsWith(n + "/")) return !0;
  let f = r;
  if (r.startsWith("/tmp/")) f = "/private" + r;
  else if (r.startsWith("/var/")) f = "/private" + r;
  if (f !== r && f.startsWith(n + "/")) return !0;
  let a = n.startsWith(r + "/"),
    o = f !== r && n.startsWith(f + "/");
  if (!(f !== r && n === f) && !a && !o) return !0;
  return !1;
}
function P1t(e) {
  if (e === "~") return B();
  if (e.startsWith("~/")) return B() + e.slice(1);
  return e;
}
function mZe(e) {
  let t = B(),
    r = /^[A-Za-z]:/.test(t) ? t.slice(0, 2) : "",
    n = r ? t.slice(2) : t;
  return e
    .replace(/%USERPROFILE%/gi, t)
    .replace(/%HOMEDRIVE%/gi, r)
    .replace(/%HOMEPATH%/gi, n);
}
function Z$o(e) {
  return e.replace(/\/{2,}/g, "/").replace(/\/\.(?=\/)/g, "");
}
function z(e) {
  if (qv() !== "windows" && /(?:^|\/)\.\.(?:\/|$)/.test(e))
    St(
      `[Sandbox] "${e}" could not be resolved and still contains a ".." component, so a rule spelled this way may not match.`,
      { level: "warn" }
    );
  return e;
}
function fb(e, t) {
  let r = (c) => !t?.literal && D_t(c);
  if (qv() === "windows") {
    if (((e = LO(mZe(e))), /^[a-z]:/.test(e))) e = e[0].toUpperCase() + e.slice(1);
    if (x1t(e) && !r(e)) return p.win32.normalize(e);
  }
  if (qv() !== "windows" && e.endsWith("/") && !r(e)) e = e.replace(/\/+$/, "") || "/";
  let n = P1t(e);
  if (n === e && !p.isAbsolute(e)) n = p.resolve(process.cwd(), e);
  if (qv() !== "windows") n = Z$o(n);
  if (r(n)) {
    let c = qv() === "windows" ? /[*?]/ : /[*?[\]]/,
      f = n.split(c)[0];
    if (f && f !== "/") {
      let a = f.endsWith("/") ? f.slice(0, -1) : p.dirname(f);
      try {
        let o = cye(a);
        if (!Zun(a, o)) {
          let i = n.slice(a.length);
          return z(o + i);
        }
      } catch {}
    }
    return z(n);
  }
  if (qv() !== "windows" && n !== "") n = n.replace(/\/\.$/, "").replace(/\/+$/, "") || "/";
  try {
    let c = cye(n);
    if (!Zun(n, c)) n = c;
  } catch {}
  return z(n);
}
var ie = [
    "/dev/stdout",
    "/dev/stderr",
    "/dev/null",
    "/dev/tty",
    "/dev/dtracehelper",
    "/dev/autofs_nowait",
    "/tmp/claude",
    "/private/tmp/claude"
  ],
  te = [".npm/_logs", ".claude/debug"];
function zD(e) {
  let t = B(),
    r = !e || e.denyRead.length === 0 ? te : ce(t, e.denyRead, e.allowRead);
  return [...ie, ...r.map((n) => p.join(t, n))];
}
function ce(e, t, r = []) {
  let n = [...new Set([e, fb(e, { literal: !0 })])],
    c = t.map((a) => ae(a)),
    f = r
      .flatMap((a) => {
        if (typeof a !== "string") return [R1t(a)];
        let o = xh(a);
        return D_t(o) ? [] : [o];
      })
      .map((a) => fb(a, { literal: !0 }));
  return te.filter((a) => {
    let o = n.map((i) => p.join(i, a));
    return !c.some((i) => o.some(i) && !f.some((s) => i(s) && o.some((b) => ub(b, s))));
  });
}
function ae(e) {
  if (typeof e !== "string") {
    let n = fb(R1t(e), { literal: !0 });
    return (c) => ub(c, n);
  }
  let t = xh(e);
  if (D_t(t)) {
    let n = le(fb(t));
    return n === null ? () => !0 : (c) => n.test(c);
  }
  let r = fb(t, { literal: !0 });
  return (n) => ub(n, r);
}
function le(e) {
  let t = K.get(e);
  if (t === void 0) {
    try {
      ((t = new RegExp(Xun(e))), t.test(""));
    } catch {
      t = null;
    }
    if (((Z += e.length), Z > fe)) (K.clear(), (Z = e.length));
    K.set(e, t);
  }
  return t;
}
var K = new Map(),
  Z = 0,
  fe = 1048576,
  ue = [
    "NODE_EXTRA_CA_CERTS",
    "SSL_CERT_FILE",
    "CURL_CA_BUNDLE",
    "REQUESTS_CA_BUNDLE",
    "PIP_CERT",
    "GIT_SSL_CAINFO",
    "AWS_CA_BUNDLE",
    "CARGO_HTTP_CAINFO",
    "DENO_CERT",
    "CLOUDSDK_CORE_CUSTOM_CA_CERTS_FILE",
    "NIX_SSL_CERT_FILE"
  ];
function gZe(e, t, r, n, c, f) {
  let a = he(f),
    o = a === jze ? a : encodeURIComponent(a),
    i = n ? `${o}:${n}@` : "",
    s = ["SANDBOX_RUNTIME=1"];
  if (!c) {
    let _ = process.env.CLAUDE_CODE_TMPDIR || process.env.CLAUDE_TMPDIR || "/tmp/claude";
    s.push(`TMPDIR=${_}`);
  }
  if (r) for (let _ of ue) s.push(`${_}=${r}`);
  if (!e && !t) return s;
  let b = [
    "localhost",
    "127.0.0.1",
    "::1",
    "169.254.0.0/16",
    "10.0.0.0/8",
    "172.16.0.0/12",
    "192.168.0.0/16"
  ].join(",");
  if ((s.push(`NO_PROXY=${b}`), s.push(`no_proxy=${b}`), e)) {
    if (
      (s.push(`HTTP_PROXY=http://${i}localhost:${e}`),
      s.push(`HTTPS_PROXY=http://${i}localhost:${e}`),
      s.push(`http_proxy=http://${i}localhost:${e}`),
      s.push(`https_proxy=http://${i}localhost:${e}`),
      n)
    )
      s.push("GIT_CONFIG_PARAMETERS='http.proxyAuthMethod=basic'");
  }
  let R = e ? `http://${i}localhost:${e}` : `socks5h://${i}localhost:${t}`;
  if (
    (s.push(`ALL_PROXY=${R}`),
    s.push(`all_proxy=${R}`),
    s.push(`GRPC_PROXY=${R}`),
    s.push(`grpc_proxy=${R}`),
    t)
  ) {
    let v = qv();
    if (v === "macos" && n && e === t) {
      let I = Buffer.from(`${a}:${n}`);
      s.push(
        `SRT_SSH_PROXY_COMMAND=${de(t, I.toString("base64"))}`,
        `GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand="/bin/sh -c 'eval \\"\\\${SRT_SSH_PROXY_COMMAND:?unset, but GIT_SSH_COMMAND needs it}\\"' sh '%h' %p"`
      );
    } else if (v === "macos")
      s.push(
        `GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='nc -X 5 -x localhost:${t} %h %p'`
      );
    else if (v === "linux" && e) {
      let I = n ? `,proxyauth=${a}:${n}` : "";
      s.push(
        `GIT_SSH_COMMAND=ssh -o ControlMaster=no -o ControlPath=none -o ProxyCommand='socat - PROXY:localhost:%h:%p,proxyport=${e}${I}'`
      );
    }
    if (
      (s.push(`FTP_PROXY=socks5h://${i}localhost:${t}`),
      s.push(`ftp_proxy=socks5h://${i}localhost:${t}`),
      s.push(`RSYNC_PROXY=localhost:${t}`),
      s.push(`DOCKER_HTTP_PROXY=http://${i}localhost:${e || t}`),
      s.push(`DOCKER_HTTPS_PROXY=http://${i}localhost:${e || t}`),
      e)
    ) {
      if (
        (s.push("CLOUDSDK_PROXY_TYPE=http"),
        s.push("CLOUDSDK_PROXY_ADDRESS=localhost"),
        s.push(`CLOUDSDK_PROXY_PORT=${e}`),
        n)
      )
        (s.push(`CLOUDSDK_PROXY_USERNAME=${a}`), s.push(`CLOUDSDK_PROXY_PASSWORD=${n}`));
    }
  }
  return s;
}
function de(e, t, r = "/usr/bin/nc") {
  return `LC_ALL=C; no() { printf "sandbox proxy: %s\\n" "$*" >&2; exit 1; }; case $1 in ""|*[!A-Za-z0-9._:-]*) no bad host;; *:*) set -- "[$1]" "$2";; esac; case $2 in ""|*[!0-9]*) no bad port;; esac; exec 3<&0; { printf "CONNECT %s HTTP/1.1\\r\\nHost: %s\\r\\nProxy-Authorization: Basic ${t}\\r\\n\\r\\n" "$1:$2" "$1:$2"; exec /bin/cat <&3; } | ${r} 127.0.0.1 ${e} | { read -r v why; while read -r v; do case $v in ""|?) break;; esac; done; case $why in "200 "*) exec /bin/cat;; esac; why=\${why%?}; no "$1:$2: \${why:-no answer}"; } & exec >&-; wait $!`;
}
var pe = 8;
function sBr(e) {
  if (e.baseEnv?.GIT_CONFIG_COUNT === "0") return {};
  let t = Number.parseInt(e.baseEnv?.GIT_CONFIG_COUNT ?? "", 10),
    r = Number.isFinite(t) && t >= 0 ? t : 0,
    n = r,
    c = {},
    f = (o, i) => {
      ((c[`GIT_CONFIG_KEY_${n}`] = o), (c[`GIT_CONFIG_VALUE_${n}`] = i), n++);
    },
    a = [
      ...new Set(
        e.safeDirs
          .filter((o) => !!o)
          .map((o) => {
            let s = o.replace(/\\/g, "/").replace(/\/+$/, "");
            if (s === "" || /^[A-Za-z]:$/.test(s)) return `${s}/`;
            return s;
          })
      )
    ];
  if (a.length > pe) f("safe.directory", "*");
  else
    for (let o of a)
      (f("safe.directory", o), f("safe.directory", o.endsWith("/") ? `${o}*` : `${o}/*`));
  if (e.schannelCa)
    (f("http.schannelUseSSLCAInfo", "true"), f("http.schannelCheckRevoke", "false"));
  if (e.opensslBackend) f("http.sslBackend", "openssl");
  if (n === r) return {};
  return ((c.GIT_CONFIG_COUNT = String(n)), c);
}
function iBr(e) {
  let t = { GIT_CONFIG_COUNT: process.env.GIT_CONFIG_COUNT };
  for (let r of e.unsetEnvVars ?? []) delete t[r];
  return (Object.assign(t, e.setEnvVars ?? {}), sBr({ safeDirs: e.safeDirs, baseEnv: t }));
}
var eFo = 100;
function H_t(e, t) {
  return !t ? e : t;
}
function uye(e) {
  let t = e.slice(0, eFo);
  return Buffer.from(t).toString("base64");
}
function Bze(e) {
  return Buffer.from(e, "base64").toString("utf8");
}
var jze = "srt",
  ne = 255,
  tFo = ne - Buffer.byteLength(`${jze}.`);
function he(e) {
  if (!e) return jze;
  let t = `${jze}.${e}`;
  return Buffer.byteLength(t) <= ne ? t : jze;
}
function efn(e) {
  if (!e || !e.startsWith(`${jze}.`)) return;
  let t = e.slice(jze.length + 1);
  if (!t || Buffer.byteLength(t) > tFo) return;
  return t;
}
function tfn(e) {
  for (;;) {
    let t = e.next();
    if (t.done) return t.value;
  }
}
var me = 10;
async function y4s(e, t) {
  t?.throwIfAborted();
  let r = performance.now();
  for (;;) {
    let n = e.next();
    if (!n.done && performance.now() - r < me) continue;
    if (!n.done) await new Promise((c) => setImmediate(c));
    if ((t?.throwIfAborted(), n.done)) return n.value;
    r = performance.now();
  }
}
function r8n(e, t = {}) {
  return ge(e, t).matches;
}
function Se(e, t) {
  let r = new RegExp(M_t(e), t),
    n = xh(e),
    c = n !== e ? new RegExp(M_t(n), t) : void 0,
    f = {
      splits: !1,
      start: [0],
      next: () => [0],
      matches: (m, T, O) => r.test(O),
      matchesDirectoryForm: (m, T, O) => c?.test(O) === !0
    },
    a = [],
    o = X({ kind: g.Star }),
    i = (m) => {
      let T = m.map(X),
        O = new Map(),
        y = (d) => a.push({ then: d }) - 1,
        D = (d, C) => {
          let h = `${d}${C ? "*" : ""}`,
            x = O.get(h);
          if (x !== void 0) return x;
          if (!C && m[d]?.kind === g.GlobstarSlash) {
            let u = y(void 0);
            return (O.set(h, u), (a[u].then = D(d + 1, !1)), u);
          }
          if (!C && m[d]?.kind === g.Globstar && d === m.length - 1) {
            let u = y(void 0);
            return (O.set(h, u), u);
          }
          let w = { edges: [] },
            E = a.push(w) - 1;
          O.set(h, E);
          let S = (u, A) => {
              w.edges.push({ regex: new RegExp(`^${u}$`, t), to: A });
            },
            l = C ? o : "";
          for (let u = d; ; u++) {
            let A = m[u];
            if (A === void 0) {
              S(l, void 0);
              break;
            }
            if (A.kind === g.Separator) {
              S(l, D(u + 1, !1));
              break;
            }
            if (A.kind === g.Globstar) (S(l + o, y(D(u + 1, !0))), (l += o));
            else if (A.kind === g.GlobstarSlash) S(l + o, y(D(u + 1, !1)));
            else if (A.kind === g.Set && A.matchesSeparator)
              (S(l, D(u + 1, !1)), (l += `(?!/)${T[u]}`));
            else l += T[u];
          }
          return E;
        };
      return D(0, !1);
    },
    s,
    b;
  try {
    if (((s = [i(W(e))]), (b = a.length), c)) s.push(i(W(n)));
  } catch {
    return f;
  }
  let R = (m, T) => {
      for (let O = T; O !== void 0 && !m.has(O);) {
        m.add(O);
        let y = a[O];
        O = "then" in y ? y.then : void 0;
      }
    },
    _ = (m) => [...m].sort((T, O) => T - O),
    v = (m, T, O) =>
      m.some((y) => {
        if (y >= b !== O) return !1;
        let D = a[y];
        return "then" in D
          ? D.then === void 0
          : D.edges.some((d) => d.to === void 0 && d.regex.test(T));
      }),
    I = new Set();
  for (let m of s) R(I, m);
  return {
    splits: !0,
    start: _(I),
    next: (m, T) => {
      let O = new Set();
      for (let y of m) {
        let D = a[y];
        if ("then" in D) R(O, y);
        else for (let d of D.edges) if (d.to !== void 0 && d.regex.test(T)) R(O, d.to);
      }
      return _(O);
    },
    matches: (m, T) => v(m, T, !1),
    matchesDirectoryForm: (m, T) => v(m, T, !0)
  };
}
function nFo(e) {
  let t = e.split(/[*?[\]]/)[0];
  if (!t) return "";
  return t.endsWith("/") ? t.slice(0, -1) : p.posix.dirname(t);
}
function rFo(e) {
  return e === "" || e === "/";
}
function I1t(e) {
  return e;
}
function ge(e, t = {}) {
  return tfn(o8n(e, t));
}
function* o8n(e, t = {}) {
  let r = {
      baseLocation: "",
      matches: [],
      directoryMatches: [],
      symlinks: new Set(),
      uninspectableLinks: new Set(),
      unlisted: [],
      realOf: new Map()
    },
    n = t.anchor === void 0 ? void 0 : I1t(t.anchor),
    c = n === void 0 ? I1t(fb(e)) : I1t(e).slice(n.length);
  if (
    n !== void 0 &&
    (!/[^/]/.test(n) || !I1t(e).startsWith(n) || !(n.endsWith("/") || /^(\/|$)/.test(c)))
  )
    throw TypeError(`Glob pattern ${e} does not lie beneath the anchor ${t.anchor}`);
  let f = nFo(c),
    a = f === "/" ? "" : f,
    o = n === void 0 ? f : n + a;
  if (rFo(o))
    return (
      St(
        `[Sandbox] Glob pattern has no literal directory below the root to start from, skipping: ${e}`,
        { level: "warn" }
      ),
      r
    );
  let i = t.caseInsensitive ? "is" : "s",
    s = Se(c, i);
  if (t.followSymlinkedDirectories && !s.splits)
    St(
      `[Sandbox] Glob pattern ${e} cannot be followed one path component at a time, so it is matched against real paths only and not through symlinked directories`,
      { level: "warn" }
    );
  let b = new Map(),
    R = t.listings ?? new Map(),
    _ = [],
    v = (d) => d?.code,
    I = (d, C, h, x, w) => {
      try {
        return h(d);
      } catch (E) {
        if (C === d) throw E;
        let S;
        try {
          S = h(C);
        } catch (l) {
          throw x(E) && !x(l) ? l : E;
        }
        if (!x(E) && v(E) !== "ENAMETOOLONG")
          (St(
            `[Sandbox] ${d} could not be read for glob pattern ${e}, so it is covered whole, whatever ${C} leads to: ${E}`,
            { level: "warn" }
          ),
            w());
        return S;
      }
    },
    m = new Map(),
    T = (d, C) => {
      let h = m.get(C);
      if (h !== void 0) return h;
      let x;
      try {
        let w = !1;
        x = {
          ...I(
            C,
            d,
            (S) => ({ isDirectory: G.statSync(S).isDirectory(), real: cye(S) }),
            Uze,
            () => (w = !0)
          ),
          unread: w
        };
      } catch (w) {
        x = Uze(w) ? "absent" : "uninspectable";
      }
      return (m.set(C, x), x);
    },
    O = (d, C, h) => {
      if (
        d.isFile() ||
        d.isDirectory() ||
        d.isSymbolicLink() ||
        d.isFIFO() ||
        d.isSocket() ||
        d.isCharacterDevice() ||
        d.isBlockDevice()
      )
        return d;
      let { name: x } = d,
        w = p.join(C, x),
        E = "other";
      try {
        let S = G.lstatSync(w);
        if (S.isDirectory()) E = "directory";
        else if (S.isSymbolicLink()) E = "link";
      } catch {
        try {
          let S = G.statSync(w).isDirectory();
          if (cye(w) !== p.join(h, x)) E = "link";
          else if (S) E = "directory";
        } catch (S) {
          let l = S?.code;
          if (l === "ELOOP") E = "link";
          else if (l !== "ENOENT")
            ((E = "directory"), R.set(p.join(h, x), S instanceof Error ? S : Error(String(S))));
        }
      }
      return { name: x, isDirectory: () => E === "directory", isSymbolicLink: () => E === "link" };
    },
    y = /^[A-Za-z]:$/.test(o) ? `${o}/` : o,
    D = y;
  try {
    D = cye(y);
  } catch {}
  ((r.baseLocation = D),
    _.push({
      dir: y,
      real: D,
      short: y.length < D.length ? y : D,
      positions: (n === void 0 ? o : a).split("/").reduce(s.next, s.start)
    }));
  for (let d = _.pop(); d !== void 0; d = _.pop()) {
    let { dir: C, real: h } = d,
      x = b.get(h) ?? { listedFor: new Set() };
    b.set(h, x);
    let w = d.positions.filter((l) => !x.listedFor.has(l));
    if (w.length === 0) continue;
    yield;
    let E = () => {
        if (x.unlisted) return;
        if (((x.unlisted = !0), r.unlisted.push(C), h !== C)) r.realOf.set(C, h);
      },
      S;
    try {
      let l = R.get(h);
      if (l instanceof Error) throw l;
      ((S =
        l ??
        I(
          h,
          d.short,
          (u) => G.readdirSync(u, { withFileTypes: !0 }).map((A) => O(A, u, h)),
          (u) => v(u) === "ENOENT",
          E
        )),
        R.set(h, S));
    } catch (l) {
      let u = v(l);
      if (
        (St(`[Sandbox] Error listing ${C} for glob pattern ${e}: ${l}`, {
          level: u === "ENOENT" ? "info" : "warn"
        }),
        u !== "ENOENT")
      ) {
        if (t.listings !== void 0) R.set(h, l instanceof Error ? l : Error(String(l)));
        E();
      }
      continue;
    }
    for (let l of w) x.listedFor.add(l);
    for (let l of S) {
      if (s.splits && !l.isDirectory() && !l.isSymbolicLink() && !s.matches(w, l.name, ""))
        continue;
      let u = p.join(C, l.name),
        A = p.join(h, l.name),
        Y = I1t(u),
        H = n !== void 0 && Y.startsWith(n) ? Y.slice(n.length) : Y,
        M = s.matches(w, l.name, H);
      if (M) r.matches.push(u);
      if (l.isDirectory()) {
        let Q = s.next(w, l.name),
          q = t.withDirectoryForm === !0 && s.matchesDirectoryForm(w, l.name, H);
        if (q) r.directoryMatches.push(u);
        if ((M || q) && A !== u) r.realOf.set(u, A);
        if (Q.length > 0) _.push({ dir: u, real: A, short: p.join(d.short, l.name), positions: Q });
        continue;
      }
      if (!l.isSymbolicLink()) {
        if (M && A !== u) r.realOf.set(u, A);
        continue;
      }
      if ((r.symlinks.add(u), !t.followSymlinkedDirectories)) continue;
      let k = t.withDirectoryForm === !0 && s.matchesDirectoryForm(w, l.name, H),
        j = s.splits ? s.next(w, l.name) : [];
      if (!M && !k && j.length === 0) continue;
      let V = p.join(d.short, l.name),
        N = T(V, A);
      if (N === "absent") continue;
      let F = N === "uninspectable" || N.unread;
      if (F) {
        if ((r.uninspectableLinks.add(u), k)) r.directoryMatches.push(u);
      }
      if (N === "uninspectable") continue;
      if (F && (M || (k && N.isDirectory))) r.matches.push(N.real === "/" ? h : N.real);
      if (M && !F) r.realOf.set(u, N.real);
      if (!N.isDirectory) continue;
      if (k && !F) (r.directoryMatches.push(u), r.realOf.set(u, N.real));
      if (j.length === 0) continue;
      if (ub(h, N.real) || ub(D, N.real)) {
        St(
          `[Sandbox] Not following symlink ${u} -> ${N.real} for glob pattern ${e}: it leads back up the tree`
        );
        continue;
      }
      (St(`[Sandbox] Following symlink ${u} -> ${N.real} for glob pattern ${e}`),
        _.push({
          dir: N.real,
          real: N.real,
          short: V.length < N.real.length ? V : N.real,
          positions: j
        }));
    }
  }
  return r;
}
export {
  h4s,
  qv,
  St,
  cye,
  Q$o,
  T1t,
  M_t,
  Xun,
  t8n,
  n8n,
  A1t,
  ub,
  pZe,
  Jun,
  C1t,
  oBr,
  Qun,
  Uze,
  dd,
  rAe,
  D_t,
  R1t,
  LO,
  x1t,
  xh,
  Zun,
  P1t,
  mZe,
  Z$o,
  fb,
  zD,
  gZe,
  sBr,
  iBr,
  eFo,
  H_t,
  uye,
  Bze,
  jze,
  tFo,
  efn,
  tfn,
  y4s,
  r8n,
  nFo,
  rFo,
  I1t,
  o8n
};

//# sourceMappingURL=chunk-5x56j97h.js.map
