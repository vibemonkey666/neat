// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { OH } from "./chunk-7zgz07kc.js";
import { Mt } from "./chunk-adv24f35.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { u_e } from "./chunk-52qzr232.js";
import { o, u, $e } from "./chunk-0bqrj5ah.js";
var a = 8192,
  w = 512,
  m = 200,
  k = 120,
  E = p(() =>
    u({
      message: o()
        .optional()
        .catch(void 0),
      error: $e([o(), u({ message: o() })])
        .optional()
        .catch(void 0),
      detail: o()
        .optional()
        .catch(void 0)
    })
  );
function roe(n, e, r) {
  let i = S(n);
  return { mediaType: i, ...O(i, e, r), proxyError: h(n, r), requestId: A(n, r) };
}
function h(n, e) {
  let r = n?.["x-proxy-error"];
  return typeof r === "string" ? l(g(r), e, k) : void 0;
}
function A(n, e) {
  let r = n?.["x-request-id"];
  return typeof r === "string" && /^[A-Za-z0-9._:-]{1,128}$/.test(r) && e(r) === r ? r : void 0;
}
function S(n) {
  let e = n?.["content-type"];
  if (typeof e !== "string") return "";
  let r = e.indexOf(";");
  return (r === -1 ? e : e.slice(0, r))
    .replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "")
    .replace(/[A-Z]/g, (i) => i.toLowerCase());
}
var f = { reason: void 0, code: void 0 };
function O(n, e, r) {
  let i = n === "application/json" || n.endsWith("+json"),
    s = typeof e === "string" ? g(e) : P(e);
  if (s !== void 0) {
    let { text: d, truncated: c } = s;
    if (d.includes("\uFFFD") || d.includes("\x00")) return f;
    if (i || (n === "" && d.trimStart().startsWith("{"))) return c ? f : b(ot(d, !1), r);
    return { reason: n === "text/plain" ? l(s, r, m) : void 0, code: void 0 };
  }
  if (e !== null && typeof e === "object") return b(e, r);
  return f;
}
function b(n, e) {
  let r = E().safeParse(n);
  if (!r.success) return f;
  let { message: i, error: s, detail: d } = r.data,
    c = typeof s === "string" ? s : s?.message,
    y = [i, c, d].find((x) => x !== void 0 && x.trim() !== "");
  return {
    reason: y === void 0 ? void 0 : l(g(y), e, m),
    code: typeof s === "string" && u_e(s) ? s : void 0
  };
}
function l({ text: n, truncated: e }, r, i) {
  let s = r(n),
    d = e ? re(s, s.length - w) : s,
    c = Mt(d, i);
  return c === "" ? void 0 : c;
}
function g(n) {
  return { text: re(n, a), truncated: n.length > a };
}
function P(n) {
  let e;
  if (n instanceof ArrayBuffer) e = new Uint8Array(n);
  else if (ArrayBuffer.isView(n)) e = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
  else return;
  let r = e.byteLength > a,
    i = r ? T(e, a) : e.byteLength;
  return { text: new TextDecoder("utf-8").decode(e.subarray(0, i)), truncated: r };
}
function T(n, e) {
  let r = e - 1,
    i = 0;
  while (r >= 0 && i < 3 && ((n[r] ?? 0) & 192) === 128) (r--, i++);
  if (r < 0) return e;
  let s = n[r] ?? 0,
    d = s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
  return i + 1 < d ? r : e;
}
var _ = "x-proxy-error",
  R = "x-deny-reason";
function uj(n, e) {
  return n === 403 && (e?.[_] === "blocked-by-allowlist" || e?.[R] === "host_not_allowed");
}
function gCe(n) {
  let e = OH(n);
  return e !== void 0 && uj(e.connectStatus, e.headers);
}
function Yzo(n, e) {
  if (n !== 403) return;
  if (e.mediaType === "text/plain" && z(e.reason)) return "proxy_denied";
  if (e.code !== "content_scan_blocked") return;
  return e.reason?.endsWith("(fail closed)") ? "content_scan_transient" : "content_scan_permanent";
}
function z(n) {
  return !1;
}
function Rwt({ status: n, headers: e, data: r, redact: i, label: s }) {
  if (n !== 403) return;
  let d = roe(e, r, i),
    c = Yzo(n, d);
  if (c !== void 0) t(`${s}: sandbox proxy denied, ${c} (${d.reason ?? "no reason"})`);
  return c;
}
var xwt = {
  content_scan_transient:
    "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.",
  content_scan_permanent:
    "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.",
  proxy_denied:
    "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help."
};
function XQs(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 429;
}
function D(n, e, r) {
  let i = n?.[e];
  return typeof i === "string" && i.length <= 64 && r.test(i) ? i : void 0;
}
function Pwt(n) {
  return D(n, _, /^[a-z0-9_-]+$/);
}
function ooe(n) {
  return D(n, R, /^[a-z0-9_]+$/);
}
export { roe, uj, gCe, Yzo, Rwt, xwt, XQs, Pwt, ooe };

//# sourceMappingURL=chunk-8v77jr62.js.map
