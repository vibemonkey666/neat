// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { St } from "./chunk-5x56j97h.js";
import { isIP as P } from "net";
import { BlockList as W, connect as N, isIP as u } from "net";
import { connect as k } from "tls";
import { URL as x } from "url";
import { BlockList as H, isIP as O } from "net";
var G$o = ["127.0.0.0/8", "::1"];
function E(e) {
  let t = O(e);
  return t === 4 ? "ipv4" : t === 6 ? "ipv6" : void 0;
}
function z$o(e) {
  let t = e.indexOf("/"),
    r = h(t === -1 ? e : e.slice(0, t)),
    n = E(r);
  if (!n) return;
  let o = n === "ipv6" ? 128 : 32,
    i = o;
  if (t !== -1) {
    let s = e.slice(t + 1);
    if (!/^\d{1,3}$/.test(s) || Number(s) > o) return;
    i = Number(s);
  }
  let c = n === "ipv6" ? m(r) : void 0;
  if (c !== void 0) return i < 96 ? void 0 : { address: c, prefix: i - 96, family: "ipv4" };
  return { address: r, prefix: i, family: n };
}
function E1t(e, t) {
  let r = z$o(t);
  if (!r) return !1;
  try {
    e.addSubnet(r.address, r.prefix, r.family);
  } catch {
    return !1;
  }
  return !0;
}
function S(e) {
  let t = new H();
  for (let r of e)
    if (!E1t(t, r)) throw Error(`Invalid IP address or CIDR range: ${JSON.stringify(r)}`);
  return t;
}
function I_t(e, t) {
  let r = h(t),
    n = E(r);
  return n !== void 0 && e.check(r, n);
}
function h(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function b(e) {
  let t;
  try {
    t = new URL(`http://[${h(e)}]/`).hostname.slice(1, -1);
  } catch {
    return;
  }
  let [r = "", n] = t.split("::"),
    o = r ? r.split(":") : [],
    i = n ? n.split(":") : [],
    c = n === void 0 ? 0 : 8 - o.length - i.length;
  if (c < 0 || o.length + c + i.length !== 8) return;
  return [...o, ...Array(c).fill("0"), ...i].map((s) => parseInt(s, 16));
}
var p = (e, t) => `${e >> 8}.${e & 255}.${t >> 8}.${t & 255}`;
function m(e) {
  if (!/ffff/i.test(e)) return;
  let t = b(e);
  return t && t.slice(0, 5).every((r) => r === 0) && t[5] === 65535 ? p(t[6], t[7]) : void 0;
}
function m4s(e) {
  if (O(e) !== 6) return;
  let t = b(e);
  if (!t) return;
  let r = (o, i) => t.slice(o, i).every((c) => c === 0);
  if (t[0] === 8194) return p(t[1], t[2]);
  let n = p(t[6], t[7]);
  if (t[0] === 100 && t[1] === 65435 && r(2, 6)) return n;
  if (r(0, 5) && (t[5] === 0 || t[5] === 65535)) return n;
  if (r(0, 4) && t[4] === 65535 && t[5] === 0) return n;
  return;
}
var A = S(G$o);
function QUr(e) {
  return I_t(A, e);
}
function g4s(e) {
  let t = e.toLowerCase().replace(/\.$/, "");
  return t === "localhost" || t.endsWith(".localhost");
}
var I = 30000,
  B = new Set([
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "proxy-connection",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade"
  ]);
function K$o(e) {
  let t = e?.http ?? process.env.HTTP_PROXY ?? process.env.http_proxy ?? void 0,
    r = e?.https ?? process.env.HTTPS_PROXY ?? process.env.https_proxy ?? t,
    n = e?.noProxy ?? process.env.NO_PROXY ?? process.env.no_proxy ?? "";
  if (!t && !r) return;
  let o = (s) => {
      if (!s) return;
      let f = /^[a-z][a-z0-9+.-]*:\/\//i.test(s) ? s : `http://${s}`;
      try {
        let l = new x(f);
        if ((l.protocol !== "http:" && l.protocol !== "https:") || !l.hostname)
          throw Error("unsupported scheme or empty host");
        return l;
      } catch {
        St(`Invalid parent proxy URL, ignoring: ${R(s)}`, { level: "error" });
        return;
      }
    },
    i = o(t),
    c = o(r);
  if (!i && !c) return;
  return { httpUrl: i, httpsUrl: c, noProxy: _(n) };
}
function _(e) {
  let t = { all: !1, suffixes: [], cidr: new W() };
  for (let r of e.split(",")) {
    if (((r = r.trim()), !r)) continue;
    if (r === "*") {
      t.all = !0;
      continue;
    }
    if (r.includes("/")) {
      E1t(t.cidr, r);
      continue;
    }
    let n = r.toLowerCase(),
      o = /^\[([^\]]+)\](?::\d+)?$/.exec(n);
    if (o) n = o[1];
    if (n.startsWith("*.")) n = n.slice(1);
    if (!u(n)) {
      let i = n.lastIndexOf(":");
      if (i !== -1 && /^\d+$/.test(n.slice(i + 1))) n = n.slice(0, i);
    } else if (E1t(t.cidr, n)) continue;
    t.suffixes.push(n);
  }
  return t;
}
function Y3n(e, t) {
  let r = PHe(t.toLowerCase().replace(/\.$/, ""));
  if (r === "localhost" || QUr(r)) return !0;
  if (e.noProxy.all) return !0;
  if (I_t(e.noProxy.cidr, r)) return !0;
  for (let n of e.noProxy.suffixes)
    if (n.startsWith(".")) {
      if (r === n.slice(1) || r.endsWith(n)) return !0;
    } else if (r === n || r.endsWith("." + n)) return !0;
  return !1;
}
function X3n(e, t) {
  if (t.isHttps) return e.httpsUrl ?? e.httpUrl;
  return e.httpUrl;
}
function V$o(e) {
  let { destHost: t, destPort: r } = e,
    n = PHe(t);
  if (!qun(n))
    return Promise.reject(Error(`Invalid destination host for CONNECT: ${JSON.stringify(t)}`));
  if (!Number.isInteger(r) || r < 1 || r > 65535)
    return Promise.reject(Error(`Invalid destination port: ${r}`));
  let o = u(n) === 6 ? `[${n}]:${r}` : `${n}:${r}`;
  return new Promise((i, c) => {
    let s = e.dial(),
      a = !1,
      f = (d) => {
        if (a) return;
        ((a = !0), s.destroy(), c(d));
      },
      l = () => f(Error("Proxy closed during CONNECT handshake"));
    (s.setTimeout(e.timeoutMs ?? I, () => f(Error("CONNECT handshake timed out"))),
      s.once("error", f),
      s.once("close", l),
      s.once(e.readyEvent, () => {
        s.write(
          `CONNECT ${o} HTTP/1.1\r
Host: ${o}\r
` +
            (e.authHeader
              ? `Proxy-Authorization: ${e.authHeader}\r
`
              : "") +
            `\r
`
        );
        let d = "",
          w = (L) => {
            d += L.toString("latin1");
            let y = d.indexOf(`\r
\r
`);
            if (y === -1) {
              if (d.length > 16384) f(Error("CONNECT response header too large"));
              return;
            }
            (s.pause(), s.removeListener("data", w));
            let g = d.slice(
              0,
              d.indexOf(`\r
`)
            );
            if (!/^HTTP\/1\.[01] 2\d\d(?:\s|$)/.test(g))
              return f(Error(`Proxy refused CONNECT: ${g.trim()}`));
            let C = d.slice(y + 4);
            if (C.length) s.unshift(Buffer.from(C, "latin1"));
            ((a = !0),
              s.setTimeout(0),
              s.removeListener("error", f),
              s.removeListener("close", l),
              i(s));
          };
        s.on("data", w);
      }));
  });
}
function ZUr(e, t, r) {
  let n = PHe(e.hostname),
    o = Number(e.port) || (e.protocol === "https:" ? 443 : 80),
    i = e.protocol === "https:";
  return V$o({
    destHost: t,
    destPort: r,
    authHeader: q$o(e),
    readyEvent: i ? "secureConnect" : "connect",
    dial: () => (i ? k({ host: n, port: o, ...(u(n) ? {} : { servername: n }) }) : N(o, n))
  });
}
function q$o(e) {
  if (!e.username && !e.password) return;
  try {
    let t = `${decodeURIComponent(e.username)}:${decodeURIComponent(e.password)}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  } catch {
    let t = `${e.username}:${e.password}`;
    return `Basic ${Buffer.from(t).toString("base64")}`;
  }
}
function Vun(e, t, r = uZe(t.headers)) {
  try {
    return (e.writeHead(t.statusCode ?? 502, r), !0);
  } catch (n) {
    if (
      (St(
        `Invalid upstream response head (status ${t.statusCode}): ${n instanceof Error ? n.message : String(n)}`,
        { level: "error" }
      ),
      t.destroy(),
      e.headersSent)
    )
      return (e.destroy(), !1);
    for (let o of e.getHeaderNames()) e.removeHeader(o);
    return (e.writeHead(502, { "Content-Type": "text/plain" }), e.end("Bad Gateway"), !1);
  }
}
function eBr(e, t) {
  let r;
  (e.once("response", (n) => {
    r = n;
  }),
    e.on("error", (n) => {
      if (r?.complete) {
        St(`Upstream connection failed after a whole answer: ${n.message}`);
        return;
      }
      t(n);
    }));
}
function uZe(e, { folded: t = !1 } = {}) {
  let r = (c) => {
      let s = c.trim().toLowerCase();
      return t ? s.replace(/[_.]/g, "-") : s;
    },
    n = new Set(),
    o = e.connection;
  if (o) for (let c of String(o).split(",")) n.add(r(c));
  let i = {};
  for (let [c, s] of Object.entries(e)) {
    let a = r(c);
    if (!B.has(a) && !n.has(a)) i[c] = s;
  }
  return i;
}
function PHe(e) {
  return e.startsWith("[") && e.endsWith("]") ? e.slice(1, -1) : e;
}
function Y$o(e) {
  if (!e) return "-";
  if (!e.username && !e.password) return e.href;
  let t = new x(e.href);
  return ((t.username = "***"), (t.password = "***"), t.href);
}
function R(e) {
  return e.replace(/\/\/[^@/]*@/, "//***:***@");
}
function qun(e) {
  if (!e || e.length > 255) return !1;
  let t = PHe(e);
  if (t.includes("%")) return !1;
  if (u(t)) return !0;
  return /^[A-Za-z0-9._-]+$/.test(t);
}
function c$(e) {
  try {
    let t = PHe(e),
      r = u(t) === 6 ? `[${t}]` : t,
      n = PHe(new x(`http://${r}/`).hostname);
    return u(n) === 6 ? (m(n) ?? n) : n.replace(/\.$/, "");
  } catch {
    return;
  }
}
function O_t(e, t, r) {
  let n = u(e) === 6 ? `[${e}]` : e;
  return t === r ? n : `${n}:${t}`;
}
async function tBr(e, t, r, n) {
  let o = e;
  if (r && !u(e)) {
    let i = await J3n(e, t, r);
    if (((o = i.remoteAddress ?? ""), i.destroy(), !o))
      throw Error(`connect ${e}:${t}: no peer address`);
  }
  return { host: o, port: t, ...(n && !u(e) ? { servername: e } : {}), agent: !1 };
}
function J3n(e, t, r, n = I) {
  return new Promise((o, i) => {
    let c = N({ port: t, host: e, lookup: r }),
      s = !1,
      a = (f) => {
        if (s) return;
        if (((s = !0), c.setTimeout(0), f)) (c.destroy(), i(f));
        else o(c);
      };
    (c.setTimeout(n, () => a(Error("connect timed out"))),
      c.once("connect", () => a()),
      c.once("error", a),
      c.once("close", () => a(Error("socket closed before connect"))));
  });
}
function v(e) {
  let t = e.indexOf("%");
  return t === -1 ? e : e.slice(0, t);
}
function yre(e) {
  if (e.startsWith("[")) {
    let n = e.indexOf("]");
    if (n === -1) return { hostPattern: e, port: void 0 };
    let o = v(e.slice(1, n)),
      i = c$(o) ?? o,
      c = e.slice(n + 1);
    if (c === "") return { hostPattern: i, port: void 0 };
    let s = T(c.startsWith(":") ? c.slice(1) : "");
    return s === void 0 ? { hostPattern: e, port: void 0 } : { hostPattern: i, port: s };
  }
  let t = e.lastIndexOf(":");
  if (t === -1) return { hostPattern: e, port: void 0 };
  if (e.indexOf(":") !== t) {
    let n = v(e);
    return { hostPattern: c$(n) ?? n, port: void 0 };
  }
  let r = T(e.slice(t + 1));
  if (r === void 0) return { hostPattern: e, port: void 0 };
  return { hostPattern: e.slice(0, t), port: r };
}
function T(e) {
  if (!/^[1-9][0-9]{0,4}$/.test(e)) return;
  let t = Number(e);
  return t > 65535 ? void 0 : t;
}
function nBr(e) {
  if (P(e) === 6) return !0;
  if (e.includes("://") || e.includes("/") || e.includes(":")) return !1;
  if (e === "localhost") return !0;
  if (e.startsWith("*.")) {
    let t = e.slice(2);
    if (!t.includes(".") || t.startsWith(".") || t.endsWith(".")) return !1;
    let r = t.split(".");
    return r.length >= 2 && r.every((n) => n.length > 0);
  }
  if (e.includes("*")) return !1;
  return e.includes(".") && !e.startsWith(".") && !e.endsWith(".");
}
var rBr =
  'Invalid domain pattern. Must be a valid domain (e.g., "example.com"), a wildcard (e.g., "*.example.com"), or a bracketed IPv6 literal (e.g., "[::1]", "[2001:db8::1]:443"). Overly broad patterns like "*.com" or "*" are not allowed for security reasons.';
function X$o(e) {
  let t = e.indexOf(":");
  return !(t !== -1 && e.indexOf(":", t + 1) !== -1) || e.startsWith("[");
}
function Q3n(e) {
  return X$o(e) && nBr(yre(e).hostPattern);
}
var Z3n = rBr + ' An optional ":port" suffix (1-65535) restricts the entry to that port.';
function J$o(e) {
  return e.flatMap((t) => {
    let { hostPattern: r, port: n } = yre(t);
    return P(r) ? [{ range: r, port: n }] : [];
  });
}
function Yun(e) {
  return yre(e).hostPattern;
}
function fZe(e, t) {
  let r = e.toLowerCase();
  if (t === "*") return !0;
  if (t.startsWith("*.")) {
    if (P(PHe(r))) return !1;
    let n = t.substring(2).toLowerCase();
    return r.endsWith("." + n);
  }
  return r === t.toLowerCase();
}
function e8n(e, t, r) {
  let { hostPattern: n, port: o } = yre(r);
  if (o !== void 0 && o !== t) return !1;
  return fZe(e, n);
}
function k1t(e, t) {
  let r = t.map(Yun);
  if (!e.startsWith("*.")) return r.some((o) => fZe(e, o));
  let n = e.slice(2).toLowerCase();
  return r.some((o) => {
    if (!o.startsWith("*.")) return !1;
    let i = o.slice(2).toLowerCase();
    return n === i || n.endsWith("." + i);
  });
}
export {
  G$o,
  z$o,
  E1t,
  I_t,
  m4s,
  QUr,
  g4s,
  K$o,
  Y3n,
  X3n,
  V$o,
  ZUr,
  q$o,
  Vun,
  eBr,
  uZe,
  PHe,
  Y$o,
  qun,
  c$,
  O_t,
  tBr,
  J3n,
  yre,
  nBr,
  rBr,
  X$o,
  Q3n,
  Z3n,
  J$o,
  Yun,
  fZe,
  e8n,
  k1t
};

//# sourceMappingURL=chunk-qm3c9a07.js.map
