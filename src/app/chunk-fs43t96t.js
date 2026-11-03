// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, Hn } from "./chunk-acd8w9vv.js";
function SFe(n) {
  return (
    typeof n === "object" &&
    n !== null &&
    (("name" in n && n.name === "AbortError") ||
      ("message" in n && String(n.message).includes("FetchRequestCanceledException")))
  );
}
var ZYt = (n) => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      let e = Object.prototype.toString.call(n);
      if (e === "[object Error]" || e === "[object DOMException]") {
        let t = Error(n.message, n.cause ? { cause: n.cause } : {});
        if (n.stack) t.stack = n.stack;
        if (n.cause && !t.cause) t.cause = n.cause;
        if (n.name) t.name = n.name;
        return t;
      }
    } catch {}
    try {
      return Error(JSON.stringify(n));
    } catch {}
  }
  return Error(n);
};
var sr = (() => {
  class n extends Error {}
  return n;
})();
class Dt extends sr {
  constructor(n, e, t, r, o) {
    super(`${Dt.makeMessage(n, e, t)}`);
    ((this.status = n),
      (this.headers = r),
      (this.requestID = r?.get("request-id")),
      (this.workspaceID = r?.get("anthropic-workspace-id")),
      (this.error = e),
      (this.type = o ?? null));
  }
  static makeMessage(n, e, t) {
    let r = e?.message
      ? typeof e.message === "string"
        ? e.message
        : JSON.stringify(e.message)
      : e
        ? JSON.stringify(e)
        : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)";
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new Au({ message: t, cause: ZYt(e) });
    let o = e,
      i = o?.error?.type;
    if (n === 400) return new e5t(n, o, t, r, i);
    if (n === 401) return new UYe(n, o, t, r, i);
    if (n === 403) return new t5t(n, o, t, r, i);
    if (n === 404) return new BYe(n, o, t, r, i);
    if (n === 409) return new n5t(n, o, t, r, i);
    if (n === 422) return new r5t(n, o, t, r, i);
    if (n === 429) return new o5t(n, o, t, r, i);
    if (n >= 500) return new s5t(n, o, t, r, i);
    return new Dt(n, o, t, r, i);
  }
}
class zu extends Dt {
  constructor({ message: n } = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0);
  }
}
class Au extends Dt {
  constructor({ message: n, cause: e }) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e;
  }
}
class hk extends Au {
  constructor({ message: n } = {}) {
    super({ message: n ?? "Request timed out." });
  }
}
class AAn extends sr {
  constructor(n, { cause: e } = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e;
  }
}
class e5t extends Dt {}
class UYe extends Dt {}
class t5t extends Dt {}
class BYe extends Dt {}
class n5t extends Dt {}
class r5t extends Dt {}
class o5t extends Dt {}
class s5t extends Dt {}
class wFe extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name;
  }
}
class vA extends Error {}
class fy extends Error {
  name = "CliUserError";
}
class Ye extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError";
  }
}
class Xd extends Ye {}
function Ke(n) {
  try {
    return (
      n instanceof Ye ||
      n instanceof zu ||
      (n instanceof Error &&
        (n.name === "AbortError" || ("__CANCEL__" in n && Boolean(n.__CANCEL__))))
    );
  } catch {
    return !1;
  }
}
class NI extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    ((this.name = "ConfigParseError"), (this.filePath = e), (this.defaultConfig = t));
  }
}
class HB extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  sandboxViolations;
  sandboxed;
  constructor(n) {
    super("Shell command failed");
    ((this.name = "ShellError"),
      (this.stdout = n.stdout),
      (this.stderr = n.stderr),
      (this.code = n.code),
      (this.interrupted = n.interrupted),
      (this.hadSandboxViolation = n.hadSandboxViolation ?? !1),
      (this.sandboxViolations = n.sandboxViolations),
      (this.sandboxed = n.sandboxed));
  }
}
class Qf extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError";
  }
}
class R extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    ((this.name = "TelemetrySafeError"), (this.telemetryMessage = e ?? n), (this.errorClass = t));
  }
}
class Rr extends R {}
var Qe = (n, e) => {
    try {
      if (
        n !== null &&
        typeof n === "object" &&
        !("telemetryMessage" in n) &&
        Object.isExtensible(n)
      )
        Object.assign(n, { telemetryMessage: e });
    } catch {}
    return n;
  },
  a = [
    "AggregateError",
    "Error",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SuppressedError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ],
  Rss = new Set(a);
function GCt(n) {
  try {
    let e = n instanceof Error ? n.name : void 0,
      t = a.find((r) => r === e);
    if (t !== void 0) return t;
  } catch {}
  return "a value that is not a built-in error";
}
var Bq = (n, e) => {
    try {
      if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
        let t = n,
          r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
        Object.assign(t, Object.fromEntries(r));
      }
    } catch {}
    return n;
  },
  s = Symbol("telemetryChildExitStatus"),
  xss = (n, e) => {
    try {
      if (
        e !== void 0 &&
        n !== null &&
        typeof n === "object" &&
        !Object.hasOwn(n, s) &&
        Object.isExtensible(n)
      )
        Object.defineProperty(n, s, { value: e, enumerable: !1, writable: !1, configurable: !1 });
    } catch {}
    return n;
  };
function kW(n) {
  try {
    if (
      n !== null &&
      typeof n === "object" &&
      "telemetryMessage" in n &&
      typeof n.telemetryMessage === "string"
    )
      return n.telemetryMessage;
  } catch {}
  return;
}
function $I(n, e) {
  return n instanceof Error && n.message === e;
}
function N(n) {
  return n instanceof Error ? n : Error(String(n));
}
function d(n) {
  return n instanceof Error ? n.message : String(n);
}
function E(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return;
}
function Er(n) {
  return tw(E(n));
}
function tw(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? Hn(n) : void 0;
}
var l = -2147483648,
  p = 4294967295;
function Pss(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s),
      t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= l && t <= p ? t : void 0;
  } catch {
    return;
  }
}
var Lit = "did not become reachable within",
  Nit = "exited before it became reachable",
  CAn = "The socket connection was closed unexpectedly";
function ycr(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)]
    .filter((e) => !"/\\".includes(n[e.index - 1] ?? "."))
    .map((e) => e[0]);
}
function wg(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? Hn(e) : void 0;
}
function yh(n) {
  return Er(n) ?? wg(n);
}
function LB(n) {
  return Hn(Er(n)?.toLowerCase() ?? "other");
}
function NB(n) {
  return wg(n);
}
function yie(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? Hn(n) : void 0;
}
function i5t(n) {
  let e = yie(n);
  return e === void 0 ? void 0 : Hn(e.toLowerCase());
}
function FI(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? Hn(n) : void 0;
}
function RAn(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? Hn(n) : b("unparseable");
}
function _S(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? Hn(n) : b("unparseable");
}
function A6(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? Hn(n) : b("nonconforming");
}
function Iss(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"),
    t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return b("unparseable");
  if (e === -1) return Hn(t);
  let r = n.slice(e + 1),
    o = tw(r) ?? FI(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return Hn(`${t}:${o}`);
}
function Oss(n) {
  return FI(n);
}
function $it(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? Hn(e) : b("unparseable");
}
function uJr(n) {
  return x.test(n) ? Hn(n) : void 0;
}
var x =
    /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/,
  XSe = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
function Fit(n) {
  let e = E(n);
  return e === "ENOSPC" || e === "EDQUOT";
}
var Mss = new Set(["EACCES", "EPERM", "EROFS"]);
function Fs(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}
function jq(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause;
  }
  return;
}
function G(n) {
  return E(n) === "ENOENT";
}
function Us(n) {
  let e = E(n);
  return e === "ENOENT" || e === "ENOTDIR";
}
function $B(n) {
  return E(n) === "EISDIR";
}
function Dss(n) {
  return E(n) === "E2BIG";
}
function Hss(n) {
  try {
    if (E(n) !== "ECONNRESET") return !1;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return !1;
    let t = e
      .split(
        `
`
      )
      .find((r) => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server");
  } catch {
    return !1;
  }
}
function _cr(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return;
}
function a5t(n) {
  let e = n.message ? `${n.name}: ${n.message}` : n.name,
    t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`
`),
    o = r[0] ?? "",
    i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [e, ...i].join(`
`);
}
var u = new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);
function Vt(n) {
  return EA(E(n));
}
function EA(n) {
  return n !== void 0 && u.has(n);
}
function kA(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0;
}
var c = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);
function J_(n) {
  return fJr(E(n));
}
function fJr(n) {
  return (
    n === "EDEADLK" ||
    n === "EINTR" ||
    n === "ENXIO" ||
    n === "ENODEV" ||
    n === "ECANCELED" ||
    n === "ENEEDAUTH" ||
    n === "ESTALE" ||
    n === "EUNKNOWN" ||
    n === "ENOMEM" ||
    (n !== void 0 && f(n))
  );
}
function f(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error");
}
function l5t(n, e = "linux") {
  if (e !== "win32") return !1;
  try {
    return Fs(n) && n.code === "EBADF" && n.syscall === "read";
  } catch {
    return !1;
  }
}
function I2(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || f(n) ? n : void 0;
}
function Lss(n) {
  let e = E(n);
  return e !== void 0 && c.has(e);
}
function tg(n) {
  return d5t(E(n));
}
function d5t(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || c.has(n));
}
function Pp(n, e) {
  if (e?.(n)) return !0;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return !1;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429;
}
function ZH(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}
function ui(n) {
  let e = d(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError)
    return { kind: "other", message: e };
  let t = n,
    r = t.response?.status;
  if (r === 401 || r === 403) return { kind: "auth", status: r, message: e };
  if (t.code === "ECONNABORTED") return { kind: "timeout", status: r, message: e };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND")
    return { kind: "network", status: r, message: e };
  return { kind: "http", status: r, message: e };
}
function _ie(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}
export {
  SFe,
  ZYt,
  sr,
  Dt,
  zu,
  Au,
  hk,
  AAn,
  e5t,
  UYe,
  t5t,
  BYe,
  n5t,
  r5t,
  o5t,
  s5t,
  wFe,
  vA,
  fy,
  Ye,
  Xd,
  Ke,
  NI,
  HB,
  Qf,
  R,
  Rr,
  Qe,
  Rss,
  GCt,
  Bq,
  xss,
  kW,
  $I,
  N,
  d,
  E,
  Er,
  tw,
  Pss,
  Lit,
  Nit,
  CAn,
  ycr,
  wg,
  yh,
  LB,
  NB,
  yie,
  i5t,
  FI,
  RAn,
  _S,
  A6,
  Iss,
  Oss,
  $it,
  uJr,
  XSe,
  Fit,
  Mss,
  Fs,
  jq,
  G,
  Us,
  $B,
  Dss,
  Hss,
  _cr,
  a5t,
  Vt,
  EA,
  kA,
  J_,
  fJr,
  l5t,
  I2,
  Lss,
  tg,
  d5t,
  Pp,
  ZH,
  ui,
  _ie
};

//# sourceMappingURL=chunk-fs43t96t.js.map
