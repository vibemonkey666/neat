// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, J, cm } from "./chunk-wrtp8qz8.js";
import { b, Hn } from "./chunk-acd8w9vv.js";
import { Dt, Au, d, E, CAn, jq } from "./chunk-fs43t96t.js";
import { Ky } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Le } from "./chunk-jazcqqqr.js";
import { y2 } from "./chunk-xc1j8sdj.js";
import { f } from "./chunk-brszmkb3.js";
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { vl } from "./chunk-6xjawpfq.js";
import { O0, wbe, JV } from "./chunk-vbnb89qh.js";
import { g_ } from "./chunk-8w2npe9a.js";
import { it } from "./chunk-qmmh8tq2.js";
import { Dn } from "./chunk-qywdxehb.js";
import { z } from "./chunk-p197ae0z.js";
import { readFileSync as N } from "fs";
import { homedir as ce } from "os";
import { join as P } from "path";
var Sl = Symbol("secureStorage.READ_FAILED");
import { AsyncLocalStorage as H } from "async_hooks";
import { join as B } from "path";
var p = new H(),
  T = Promise.resolve();
async function dwn(e) {
  if (p.getStore()) return e();
  let r = T,
    n;
  T = new Promise((o) => {
    n = o;
  });
  try {
    if ((await r, J())) return await p.run(!0, e);
    let o = O0();
    await ie().mkdir(o);
    let a = await vl(B(o, ".storage-write"), {
      realpath: !1,
      retries: { retries: 10, minTimeout: 100, maxTimeout: 1000 },
      stale: 15000,
      onCompromised: (s) => t(`[secureStorage] write lock compromised: ${d(s)}`, { level: "warn" })
    });
    try {
      return await p.run(!0, e);
    } finally {
      await a().catch((s) =>
        t(`[secureStorage] write lock release failed: ${d(s)}`, { level: "warn" })
      );
    }
  } finally {
    n();
  }
}
async function pai(e) {
  return p.run(!0, e);
}
function S(e, r, n) {
  return dwn(async () => {
    e.invalidateCache?.();
    let o = await (e.readAsyncStrict?.(n, { inaccessibleAs: "failureIfTransient" }) ??
      e.readAsync(n));
    if (o === Sl)
      return (
        f("secure_storage_credentials_write", "read_failed_skip_write"),
        { success: !1, transient: !0 }
      );
    let a = o ?? {},
      s = r(a);
    return s === a ? { success: !0 } : await e.update(s, n);
  });
}
var G = Symbol("secureStorage.fallbackLegs");
function n8o(e) {
  return e[G];
}
function mai(e) {
  let r = e?.slackTag;
  if (typeof r !== "object" || r === null || !("lastBinding" in r)) return e;
  let { lastBinding: n, ...o } = r;
  return { ...e, slackTag: o };
}
var D = 2000;
var X = 44;
async function gai() {
  try {
    let { code: e } = await it(
      "security",
      ["find-generic-password", "-a", JV(), "-w", "-s", wbe()],
      { useCwd: !1, preserveOutputOnError: !1, timeout: D }
    );
    return e === X;
  } catch {
    return !1;
  }
}
var u;
function r8o() {
  if (u !== void 0) return u;
  return ((u = Promise.resolve(!1)), u);
}
import { chmod as q } from "fs/promises";
import { join as Z } from "path";
function g() {
  let e = O0(),
    r = ".credentials.json";
  return { storageDir: e, storagePath: Z(e, ".credentials.json") };
}
function m() {
  return J() ? null : g().storagePath;
}
var g5r = "Warning: Storing credentials in plaintext.";
function Q(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return null;
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return null;
  return Sl;
}
function ee(e, r) {
  return e === "ENOENT" ? null : Sl;
}
var re = {
    async read() {
      let { storagePath: e } = g();
      try {
        let r = await ie().readFile(e, { encoding: "utf8" });
        return te(r);
      } catch {
        return null;
      }
    },
    async readStrict(e) {
      let { storagePath: r } = g(),
        n;
      try {
        n = await ie().readFile(r, { encoding: "utf8" });
      } catch (o) {
        return (e ? ee : Q)(E(o), "linux");
      }
      try {
        return te(n);
      } catch {
        if (e) return Sl;
        return null;
      }
    },
    async write(e) {
      try {
        let { storageDir: r, storagePath: n } = g();
        return (
          await ie().mkdir(r),
          await Dn(n, _(e), 384),
          await q(n, 384),
          { success: !0, warning: g5r }
        );
      } catch {
        return { success: !1 };
      } finally {
        if (z()) CNe();
      }
    },
    async remove() {
      let { storagePath: e } = g();
      try {
        return (await ie().unlink(e), !0);
      } catch (r) {
        if (E(r) === "ENOENT") return !0;
        return !1;
      } finally {
        if (z()) CNe();
      }
    }
  },
  ne = {
    read: async () => null,
    readStrict: async () => null,
    write: async () => ({ success: !1 }),
    remove: async () => !0
  };
function ae(e) {
  switch (e.state) {
    case "present":
      return e.data;
    case "absent":
    case "corrupt":
      return null;
    case "refused-symlink":
    case "read-failed":
      return Sl;
    default: {
      let r = e;
      return Sl;
    }
  }
}
function oe(e) {
  return {
    async read() {
      let r = m(),
        n = l(),
        o = n.generation,
        a = await h(e.readCredentials(), n);
      return (I(n, a, r, o), a.state === "present" ? a.data : null);
    },
    async readStrict(r) {
      let n = m(),
        o = l(),
        a = o.generation,
        s = await h(r ? e.readCredentials() : e.readCredentialsStrict(), o);
      if ((I(o, s, n, a), r))
        return s.state === "present" ? s.data : s.state === "absent" ? null : Sl;
      return ae(s);
    },
    async write(r) {
      let n = m(),
        o = l(),
        a = o.generation,
        s = await h(e.writeCredentials(r), o);
      if (s.state === "written" && a === o.generation) A(o, n, _(r));
      else c(o);
      return s.state === "written" ? { success: !0, warning: g5r } : { success: !1 };
    },
    async remove() {
      let r = m(),
        n = l(),
        o = n.generation,
        a = await h(e.deleteCredentials(), n);
      if (a.state === "deleted" && o === n.generation) A(n, r, null);
      else c(n);
      return a.state === "deleted";
    }
  };
}
async function h(e, r) {
  try {
    return await e;
  } catch (n) {
    throw (c(r), n);
  }
}
class O {
  copy = void 0;
  generation = 0;
}
var se = new W(() => new O());
function l() {
  return se.of(U().host);
}
function A(e, r, n) {
  ((e.copy = { storagePath: r, text: n }), e.generation++);
}
function I(e, r, n, o) {
  if (o !== e.generation) {
    c(e);
    return;
  }
  switch (r.state) {
    case "present":
      A(e, n, _(r.data));
      return;
    case "absent":
    case "corrupt":
    case "refused-symlink":
      A(e, n, null);
      return;
    case "read-failed":
      c(e);
      return;
    default: {
      let a = r;
      c(e);
    }
  }
}
function c(e) {
  ((e.copy = void 0), e.generation++);
}
function CNe() {
  c(l());
}
function y(e) {
  return z() && e !== void 0 ? oe(e) : J() ? ne : re;
}
var w = {
  name: "plaintext",
  osGuarded: !1,
  read(e) {
    let r = m();
    try {
      let n = z() && e?.fromStoreCopy === !0 ? l().copy : void 0;
      if (n !== void 0 && n.storagePath === r) {
        if (n.text === null) return null;
        return JSON.parse(n.text);
      }
      if (r === null) return null;
      let o = ie().readFileSync(r, { encoding: "utf8" });
      return te(o);
    } catch {
      return null;
    }
  },
  invalidateCache() {
    CNe();
  },
  readAsync(e) {
    return y(e).read();
  },
  readAsyncStrict(e, r) {
    return y(e).readStrict(r?.unreadableFileAs === "failure");
  },
  mutate(e, r) {
    return S(w, e, r);
  },
  update(e, r) {
    return y(r).write(e);
  },
  delete(e) {
    return y(e).remove();
  }
};
class x {
  memo;
  handedIn;
  prime(e, r) {
    if (this.memo !== void 0) return;
    this.handedIn = { enabled: e, ...r() };
  }
  resolve(e, r) {
    if (this.memo !== void 0) return this.memo;
    try {
      let n = e(),
        o = this.handedIn;
      if (o !== void 0 && o.legacyPath === n.legacyPath && o.configPath === n.configPath)
        this.memo = o.enabled;
      else this.memo = r(n);
    } catch {
      this.memo = !1;
    }
    return this.memo;
  }
  reset() {
    ((this.memo = void 0), (this.handedIn = void 0));
  }
}
var ue = new W(() => new x());
function L() {
  return ue.of(U().host);
}
function F() {
  return {
    legacyPath: P(Le(), ".config.json"),
    configPath: P(process.env.CLAUDE_CONFIG_DIR || ce(), `.claude${y2()}.json`)
  };
}
function o8o() {
  if (process.env.CLAUDE_CODE_FORCE_WINDOWS_CREDMAN === "1") return !0;
  return L().resolve(F, le);
}
function le({ legacyPath: e, configPath: r }) {
  let n = "";
  try {
    n = N(e, "utf8");
  } catch (a) {
    let s = E(a);
    if (s !== "ENOENT" && s !== "ENOTDIR" && s !== "EISDIR" && s !== "ELOOP") throw a;
  }
  if (n === "") n = N(r, "utf8");
  return JSON.parse(n).cachedGrowthBookFeatures?.tengu_windows_credman === !0;
}
function s8o(e) {
  L().prime(e, F);
}
var k;
function WVt() {
  return "file";
}
function Kn() {
  if (k) return k;
  return w;
}
import { STATUS_CODES as fe } from "http";
var de = 500,
  i8o = 0.25;
function B$(e, r, n = 32000, o = Math.random, a = de) {
  let s = Math.round(
    Ky({ attempt: e, baseMs: a, capMs: n, jitter: { kind: "proportional", ratio: i8o }, random: o })
  );
  if (r) {
    let i = parseInt(r, 10);
    if (!isNaN(i)) return Math.max(i * 1000, s);
  }
  return s;
}
var hai = 600000;
function h5r(e) {
  return e.escalated ? e.retryWindowMs : e.firstWindowMs;
}
class GVt extends Error {
  deadline;
  sleptMs;
  code = "StreamNoResponse";
  constructor(e, r) {
    super("No response from API within the first-byte window");
    this.deadline = e;
    this.sleptMs = r;
    this.name = "StreamNoResponseError";
  }
}
function cwn(e) {
  let r = jq(e, (n) => n instanceof GVt);
  return r instanceof GVt ? r : void 0;
}
var Vl = "API Error",
  RNe = 1000;
function Y5(e) {
  if (!(e instanceof Dt)) return !1;
  let r = e.message ?? "";
  return (
    (e.status === 403 && r.includes("OAuth token has been revoked")) ||
    (e.status === 401 && r.includes("OAuth access token has been revoked"))
  );
}
function Brt(e) {
  if (!(e instanceof Dt) || e.status !== 403) return !1;
  let r = e.message ?? "";
  return (
    (e.type === "permission_error" || r.includes('"type":"permission_error"')) &&
    r.includes("model:")
  );
}
function a8o(e) {
  return e.type === "not_found_error" || (e.message?.includes('"type":"not_found_error"') ?? !1);
}
function xNe(e) {
  if (!(e instanceof Dt) || e.status !== 404) return !1;
  return a8o(e) && (e.message ?? "").includes("model:");
}
function Kz(e) {
  if (!(e instanceof Dt)) return !1;
  return e.status === 529 || (e.message?.includes('"type":"overloaded_error"') ?? !1);
}
function M(e) {
  return e instanceof Dt && e.status === 503 && e.headers?.get("x-should-retry") === "false";
}
function y5r(e) {
  return M(e) ? b("headerless_decline") : b("headerless_retryable_503");
}
function _5r(e) {
  return M(e) ? 0 : B$(1);
}
function Se(e) {
  if (!(e instanceof Dt)) return !1;
  return e.status === 429 || (e.message?.includes('"type":"rate_limit_error"') ?? !1);
}
function b5r(e) {
  return e >= 400 && e < 500 && e !== 401 && e !== 408 && e !== 409 && e !== 429 && e !== 451;
}
var PNe = "dlp_request_denied";
function jrt(e) {
  return KVt(e) === PNe;
}
var ge = "extra_usage_out_of_credits";
function yai(e) {
  return KVt(e) === ge;
}
function _ai(e) {
  if (!(e instanceof Dt) || e.status !== 400 || !R(e)) return !1;
  return e.error?.error?.type === "policy_blocked";
}
var zkt = "claude_code_version_too_old";
function S5r(e) {
  return KVt(e) === zkt;
}
var me =
  /\bClaude Code \S+ (?:does not support this model; version \S+ or newer is required|is older than the minimum version required by your organization's policy)/;
function bai(e) {
  if (S5r(e)) return !0;
  if (!(e instanceof Dt) || e.status !== 400) return !1;
  return me.test(asr(e) ?? e.message);
}
var sse = "safety_monitor_blocked";
function Mqe(e) {
  return !1;
}
function zVt(e) {
  return !1;
}
function Sai(e) {
  return (
    pe(e, "The requested features are not available for HIPAA-") &&
    e.status === 400 &&
    KVt(e) === void 0
  );
}
function pe(e, r) {
  if (!(e instanceof Dt) || !R(e)) return !1;
  let o = e.error?.error;
  return (
    o?.type === "invalid_request_error" && typeof o.message === "string" && o.message.startsWith(r)
  );
}
function KVt(e) {
  if (!(e instanceof Dt) || !R(e)) return;
  return e.error?.error?.details?.error_code;
}
var Ee = /^[a-z][a-z0-9_]{0,63}$/;
function wai(e) {
  let r = KVt(e);
  return typeof r === "string" && Ee.test(r) ? r : void 0;
}
function rsr(e) {
  if (typeof e.status === "number") return e.status;
  if (Kz(e)) return 529;
  if (Se(e)) return 429;
  return;
}
var bbe = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "CERT_SIGNATURE_FAILURE",
    "CERT_NOT_YET_VALID",
    "CERT_HAS_EXPIRED",
    "CERT_REVOKED",
    "CERT_REJECTED",
    "CERT_UNTRUSTED",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN",
    "CERT_CHAIN_TOO_LONG",
    "PATH_LENGTH_EXCEEDED",
    "ERR_TLS_CERT_ALTNAME_INVALID",
    "HOSTNAME_MISMATCH"
  ]),
  vai = new Set([
    "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
    "UNABLE_TO_GET_ISSUER_CERT",
    "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
    "DEPTH_ZERO_SELF_SIGNED_CERT",
    "SELF_SIGNED_CERT_IN_CHAIN"
  ]),
  _e = new Set([
    ...bbe,
    "ERR_TLS_HANDSHAKE_TIMEOUT",
    "ERR_SSL_WRONG_VERSION_NUMBER",
    "ERR_SSL_DECRYPTION_FAILED_OR_BAD_RECORD_MAC"
  ]),
  aB = new Set([
    "ECONNREFUSED",
    "ConnectionRefused",
    "ENOTFOUND",
    "ENETUNREACH",
    "ENETDOWN",
    "EHOSTUNREACH",
    "EHOSTDOWN",
    "EAI_AGAIN",
    "FailedToOpenSocket",
    "ERR_PROXY_TUNNEL"
  ]),
  l8o = new Set(["ECONNRESET", "EPIPE", "ConnectionClosed", "ERR_SOCKET_CLOSED"]),
  XV = new Set([
    ...l8o,
    "UND_ERR_SOCKET",
    "ETIMEDOUT",
    "ECONNABORTED",
    "StreamSuspended",
    "StreamTruncated"
  ]);
function osr(e) {
  return XV.has(e) || aB.has(e) ? Hn(e) : b("other");
}
function Kkt(e) {
  return aB.has(e) || XV.has(e) || bbe.has(e) ? Hn(e) : void 0;
}
function Wrt(e, r) {
  let n = /^[a-z][a-z0-9_]{0,63}$/.test(e) ? e : "unknown";
  return Hn(`API error: type=${n} status=${typeof r === "number" ? r : "none"}`);
}
var v = "Failed to resolve AWS credentials from the credential provider chain.",
  ssr = "Failed to acquire Google OAuth credentials.";
function Ym(e) {
  if (!e || typeof e !== "object") return null;
  let r = e,
    n = 5,
    o = 0;
  while (r && o < n) {
    if (r instanceof Error) {
      if ("code" in r && typeof r.code === "string") {
        let a = r.code,
          s = _e.has(a);
        return { code: a, message: r.message, isSSLError: s };
      }
      if (r.message.startsWith(CAn))
        return { code: "ConnectionClosed", message: r.message, isSSLError: !1 };
    }
    if (r instanceof Error && "cause" in r && r.cause !== r) ((r = r.cause), o++);
    else break;
  }
  return null;
}
function he(e) {
  let r = Ym(e);
  return r !== null && aB.has(r.code);
}
var ye = new Set([
  "ENOTFOUND",
  "EAI_AGAIN",
  "ENETUNREACH",
  "ENETDOWN",
  "EHOSTUNREACH",
  "EHOSTDOWN",
  "FailedToOpenSocket",
  "ECONNREFUSED",
  "ConnectionRefused"
]);
function d8o(e) {
  return jq(e, (r) => E(r) === "ERR_PROXY_TUNNEL");
}
function isr(e) {
  if (!(e instanceof Au)) return !1;
  let r = Ym(e)?.code;
  if (r !== "ERR_PROXY_TUNNEL") return r !== void 0 && ye.has(r);
  let n = d8o(e),
    o = n !== void 0 && "status" in n ? n.status : void 0;
  return o === 502 || o === 503;
}
function uwn(e) {
  return Ym(e)?.code === "StreamSuspended";
}
function _Z(e) {
  let r = Ym(e);
  if (!r?.isSSLError) return null;
  return `SSL certificate error (${r.code}). If you are behind a corporate proxy or TLS-intercepting firewall, set NODE_EXTRA_CA_CERTS to your CA bundle path, or ask IT to allowlist *.anthropic.com. Run \`claude doctor\` for details.`;
}
function C(e) {
  if (/<!DOCTYPE html|<html\b/i.test(e)) {
    let r = e.match(/<title>([^<]+)<\/title>/i);
    if (r && r[1]) return r[1].trim();
    return "";
  }
  return e;
}
function c8o(e) {
  let r = e.message;
  if (!r) return "";
  return C(r);
}
function R(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "error" in e &&
    typeof e.error === "object" &&
    e.error !== null
  );
}
function asr(e) {
  if (!R(e)) return null;
  let n = e.error,
    o = n?.error?.message;
  if (typeof o === "string" && o.length > 0) {
    let s = C(o);
    if (s.length > 0) return s;
  }
  let a = n?.message;
  if (typeof a === "string" && a.length > 0) {
    let s = C(a);
    if (s.length > 0) return s;
  }
  return null;
}
function Sbe(e) {
  let r = Ym(e);
  if (r) {
    let { code: a, isSSLError: s } = r;
    if (a === "StreamSuspended")
      return cm() ? "Connection lost" : "Connection lost while your computer was asleep";
    if (a === "StreamTruncated") return "Connection closed before the response finished";
    if (a === "StreamNoResponse") return "No response from API";
    if (a === "BedrockUnexpectedContentType") return r.message;
    if (a === "ETIMEDOUT")
      return cm()
        ? "Request timed out"
        : "Request timed out. Check your internet connection and proxy settings";
    if (s) {
      let i = `(${a}). The certificate comes from an authority Claude Code doesn't trust, usually a TLS-inspecting corporate proxy or a gateway signed by a private CA: set NODE_EXTRA_CA_CERTS to that CA bundle, or add it to the system certificate store \xB7 see https://code.claude.com/docs/en/network-config`;
      switch (a) {
        case "UNABLE_TO_VERIFY_LEAF_SIGNATURE":
        case "UNABLE_TO_GET_ISSUER_CERT":
        case "UNABLE_TO_GET_ISSUER_CERT_LOCALLY":
          return `Unable to connect to API: SSL certificate verification failed ${i}`;
        case "CERT_HAS_EXPIRED":
          return "Unable to connect to API: SSL certificate has expired";
        case "CERT_REVOKED":
          return "Unable to connect to API: SSL certificate has been revoked";
        case "DEPTH_ZERO_SELF_SIGNED_CERT":
        case "SELF_SIGNED_CERT_IN_CHAIN":
          return `Unable to connect to API: Self-signed certificate detected ${i}`;
        case "ERR_TLS_CERT_ALTNAME_INVALID":
        case "HOSTNAME_MISMATCH":
          return "Unable to connect to API: SSL certificate hostname mismatch";
        case "CERT_NOT_YET_VALID":
          return "Unable to connect to API: SSL certificate is not yet valid";
        default:
          return `Unable to connect to API: SSL error (${a})`;
      }
    }
  }
  if (e.message === v || e.message === ssr) {
    let a = jq(e.cause, (s) => s.message.trim().length > 0 && s.message !== v && s.message !== ssr);
    if (a) {
      let s = C(a.message.trim());
      if (s.length > 0) return s;
    }
  }
  if (e.message === "Connection error.") {
    let a = r?.code;
    if (cm()) return a === void 0 ? "Unable to connect to API" : `Unable to connect to API (${a})`;
    if (a === void 0) return "Unable to connect to API. Check your internet connection";
    switch (a) {
      case "ECONNRESET":
      case "EPIPE":
      case "ECONNABORTED":
      case "ConnectionClosed":
      case "ERR_SOCKET_CLOSED":
      case "UND_ERR_SOCKET":
        return `Connection dropped (${a})`;
      case "ECONNREFUSED":
      case "ConnectionRefused":
        return `Connection refused \u2014 a firewall or proxy may be blocking it (${a})`;
      case "ENOTFOUND":
      case "EAI_AGAIN":
      case "FailedToOpenSocket":
        return `Can't reach the API server \u2014 check your internet or DNS (${a})`;
      case "ENETUNREACH":
      case "ENETDOWN":
      case "EHOSTUNREACH":
      case "EHOSTDOWN":
        return `No internet route \u2014 check your connection or VPN (${a})`;
      case "ERR_PROXY_TUNNEL":
        return `Couldn't connect through your proxy (${a}) \u2014 the proxy refused the tunnel: check its credentials and that it allows this host`;
      default:
        return `Unable to connect to API (${a})`;
    }
  }
  if (!e.message) return asr(e) ?? `API error (status ${e.status ?? "unknown"})`;
  if (e.message.includes('{"')) {
    let a = asr(e);
    if (a) return e.status ? `${e.status} ${a}` : a;
  }
  let n = c8o(e),
    o = /^(\d+ )?\s*</.test(e.message);
  if (n.length === 0 && o) {
    if (!e.status) return "API error (status unknown)";
    let a = fe[e.status];
    return a ? `${e.status} ${a}` : String(e.status);
  }
  if (n !== e.message && n.length > 0) {
    let a = e.status ? String(e.status) : void 0;
    return a && !n.match(/\d+/g)?.includes(a) ? `${a} ${n}` : n;
  }
  return e.message.trimEnd();
}
function lsr(e) {
  let r = (i) => e.headers?.get?.(i) ?? void 0,
    n = r("anthropic-ratelimit-unified-representative-claim"),
    o = r("anthropic-ratelimit-unified-reset"),
    a = r("anthropic-ratelimit-unified-overage-status"),
    s = cwn(e);
  return {
    message: e.message,
    status: e.status,
    requestId: e.requestID ?? void 0,
    formatted: Sbe(e),
    connection: Ym(e),
    isNetworkDown: he(e),
    rateLimits:
      n || a
        ? { ...(n && { rateLimitType: n }), ...(o && { resetsAt: Math.round(Number(o)) }) }
        : null,
    noResponse: s ? { waitedMs: h5r(s.deadline), retryWaitMs: s.deadline.retryWindowMs } : null
  };
}
class fwn extends Error {
  constructor() {
    super("Stream ended without receiving any events");
    this.name = "StreamNoEventsError";
  }
}
class ise extends Error {
  blockState;
  constructor(e) {
    super("Content block not found");
    if (((this.name = "StreamMalformedEventError"), (this.blockState = e), e === "closed"))
      this.message = "Content block already closed";
    if (e === "unreadable") this.message = "Stream event unreadable";
  }
}
class w5r extends Error {
  code = "StreamTruncated";
  constructor() {
    super("Stream ended before the response was complete");
    this.name = "StreamTruncatedError";
  }
}
function Eai({
  connDetails: e,
  isStaleConnection: r,
  isContextHintSse: n,
  streamIdleAborted: o,
  noEvents: a,
  malformedStream: s
}) {
  if (e?.code === "StreamSuspended") return "stream_suspended";
  if (e?.code === "StreamTruncated") return "stream_truncated";
  if (r) return "stale_connection";
  if (n) return "context_hint_sse";
  if (o) return "watchdog";
  if (a) return "no_events";
  if (s) return "malformed_stream";
  return "other";
}
export {
  Sl,
  dwn,
  pai,
  n8o,
  mai,
  gai,
  r8o,
  g5r,
  CNe,
  o8o,
  s8o,
  WVt,
  Kn,
  i8o,
  B$,
  hai,
  h5r,
  GVt,
  cwn,
  Vl,
  RNe,
  Y5,
  Brt,
  a8o,
  xNe,
  Kz,
  y5r,
  _5r,
  b5r,
  PNe,
  jrt,
  yai,
  _ai,
  zkt,
  S5r,
  bai,
  sse,
  Mqe,
  zVt,
  Sai,
  KVt,
  wai,
  rsr,
  bbe,
  vai,
  aB,
  l8o,
  XV,
  osr,
  Kkt,
  Wrt,
  ssr,
  Ym,
  d8o,
  isr,
  uwn,
  _Z,
  c8o,
  asr,
  Sbe,
  lsr,
  fwn,
  ise,
  w5r,
  Eai
};

//# sourceMappingURL=chunk-x8k0r295.js.map
