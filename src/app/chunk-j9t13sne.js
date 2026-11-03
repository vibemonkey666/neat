// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, L } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { N, _S } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { Ze } from "./chunk-a16y5hcz.js";
import { a } from "./chunk-4cgvah10.js";
import { NEn, l6, cxe, hC, d6, AM, Dfe } from "./chunk-dc0nzty2.js";
import { pt } from "./chunk-7c3thgax.js";
import { cb, YGe } from "./chunk-er8bc2me.js";
import { Z } from "./chunk-p27rr8yn.js";
import { R0, Uor, Trt, LSn, NSn, $Sn, FSn, je } from "./chunk-r1dvrqha.js";
import { w2t } from "./chunk-ajtyjx88.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { en } from "./chunk-rc7xvf0x.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
var LLo = 150000,
  O$r = 30000;
function v7e() {
  return R(pt().bashOutputMaxChars) ?? O$r;
}
function are() {
  let e = R(pt().bashOutputMaxChars);
  if (e !== void 0) return e;
  return w2t("BASH_MAX_OUTPUT_LENGTH", process.env.BASH_MAX_OUTPUT_LENGTH, O$r, LLo).effective;
}
function R(e) {
  if (e === void 0) return;
  return Math.min(Math.max(e, Uor), Trt);
}
import { dirname as y } from "path";
function Vhe() {
  if (cb() !== void 0) return { dirs: [], paths: [] };
  return { dirs: [hC()], paths: [] };
}
function ucn(e, r) {
  if (!e) return;
  let n = y(r);
  if (!e.dirs.includes(n)) e.dirs.push(n);
  if (!e.paths.includes(r)) e.paths.push(r);
}
function H2s(e, r) {
  if (!e) return;
  e.paths = e.paths.filter((n) => n !== r);
}
function H$r(e, r, n, i) {
  let o = w(e.webFetchSavedFiles, r),
    s = o === e.webFetchSavedFiles ? e : { ...e, webFetchSavedFiles: o };
  return n ? s : i(s);
}
function w(e, r) {
  if (!r) return e;
  if (e && r.dirs.every((n) => e.dirs.includes(n)) && r.paths.every((n) => e.paths.includes(n)))
    return e;
  return { dirs: L([...(e?.dirs ?? []), ...r.dirs]), paths: L([...(e?.paths ?? []), ...r.paths]) };
}
import { basename as _, dirname as v, join as S } from "path";
var T = Buffer.from("%PDF-");
function D$r(e) {
  return e.subarray(0, T.length).equals(T);
}
function M$r(e) {
  if (typeof e !== "string") return;
  let r = Ze(e, ";").trim();
  return r.length <= 100 && /^[\w.+-]+\/[\w.+-]+$/.test(r) ? r : void 0;
}
function H5n(e) {
  if (!e) return "bin";
  switch (Ze(e, ";").trim().toLowerCase()) {
    case "application/pdf":
      return "pdf";
    case "application/json":
      return "json";
    case "text/csv":
      return "csv";
    case "text/plain":
      return "txt";
    case "text/html":
      return "html";
    case "text/markdown":
      return "md";
    case "application/zip":
      return "zip";
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return "docx";
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return "xlsx";
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return "pptx";
    case "application/msword":
      return "doc";
    case "application/vnd.ms-excel":
      return "xls";
    case "audio/mpeg":
      return "mp3";
    case "audio/wav":
      return "wav";
    case "audio/ogg":
      return "ogg";
    case "video/mp4":
      return "mp4";
    case "video/webm":
      return "webm";
    case "image/png":
      return "png";
    case "image/jpeg":
      return "jpg";
    case "image/gif":
      return "gif";
    case "image/webp":
      return "webp";
    case "image/svg+xml":
      return "svg";
    case "image/x-icon":
    case "image/vnd.microsoft.icon":
      return "ico";
    case "text/css":
      return "css";
    case "text/javascript":
    case "application/javascript":
      return "js";
    case "application/xml":
    case "text/xml":
      return "xml";
    case "application/manifest+json":
      return "webmanifest";
    case "font/woff2":
    case "application/font-woff2":
      return "woff2";
    case "font/woff":
    case "application/font-woff":
      return "woff";
    case "font/ttf":
      return "ttf";
    case "font/otf":
      return "otf";
    case "application/wasm":
      return "wasm";
    default:
      return "bin";
  }
}
var E7e = NEn;
async function jA(e, r, n, i, o) {
  if (e.length > E7e)
    return { error: `content is ${e.length} bytes, over the ${E7e} byte persist limit` };
  let s = cb();
  if (s !== void 0) {
    let l = H5n(r),
      f = e.length > s.maxBytes ? null : await YGe(s, { leafName: `${n}.${l}`, data: e });
    if (f === null) return { error: "binary content was not saved" };
    return (
      ucn(i, f.path),
      a("tengu_binary_content_persisted", { sizeBytes: e.length, ext: c(l) }),
      { filepath: f.path, size: e.length, ext: l }
    );
  }
  let u = hC();
  if (z() && o !== void 0) {
    let l = await I(o, u, e, r, n, i);
    if (l !== void 0) return l;
  }
  await AM(u, o);
  let d = H5n(r),
    p = S(u, `${n}.${d}`);
  try {
    await Dfe(p, e);
  } catch (l) {
    let f = N(l);
    return (
      t(`Failed to persist binary content to ${p}: ${f.message}`, { level: "error" }),
      { error: f.message }
    );
  }
  return (
    ucn(i, p),
    a("tengu_binary_content_persisted", { sizeBytes: e.length, ext: c(d) }),
    { filepath: p, size: e.length, ext: d }
  );
}
function k7e(e, r) {
  let n = (i) => i.replace(/[^\w-]/g, "");
  return `artifact-${n(e).slice(0, 8)}-${n(r)}`;
}
function L2s(e) {
  return _(e).toLowerCase().startsWith("artifact-") && _(v(e)).toLowerCase() === cxe;
}
async function I(e, r, n, i, o, s) {
  let u = H5n(i),
    d = `${o}.${u}`,
    p = d6(r, d);
  if (p === void 0) return;
  let l = S(r, d),
    f = await e.write(p, n, { mode: 438 & ~process.umask() });
  if (!f.ok) {
    let x = vt(f.error);
    return (
      t(`Failed to persist binary content to ${l}: ${x}`, { level: "error" }),
      { error: `storage write failed (${x})` }
    );
  }
  return (
    ucn(s, l),
    a("tengu_binary_content_persisted", { sizeBytes: n.length, ext: c(u) }),
    { filepath: l, size: n.length, ext: u }
  );
}
function Ede(e, r, n, i) {
  return `${i}Binary content (${r || "unknown type"}, ${en(n)}) saved to ${e}`;
}
function L5n(e, r, n) {
  let i = cb();
  if (
    Ze(r ?? "", ";")
      .trim()
      .toLowerCase() !== "application/pdf" ||
    !D$r(e)
  )
    return;
  if (e.length > (i?.inlinePdfBytes?.(n) ?? 0))
    return i?.servesTheModelsFiles?.(n) === !0 ? { type: "text", text: O(e.length) } : void 0;
  return {
    type: "document",
    source: { type: "base64", media_type: "application/pdf", data: e.toString("base64") }
  };
}
function O(e) {
  return `[This PDF (${en(e)}) cannot be shown whole in this session. Read it again with the pages parameter, for example pages: "1-5", at most ${l6} pages per call.]`;
}
var C = "[Another PDF in this result was left out: only the first is shown.]";
function N5n(e) {
  if (!Array.isArray(e) || F(e, (n) => n.type === "document") < 2) return e;
  let r = !1;
  return e.map((n) => {
    if (n.type !== "document" || !r) return ((r ||= n.type === "document"), n);
    return { type: "text", text: C };
  });
}
function kde(e, r) {
  return `[Binary content (${M$r(e) ?? "application/octet-stream"}, ${en(r)}) was not kept: it could not be saved.]`;
}
var $5n = "[The portion truncated above was not kept: it could not be saved.]";
var B = 64;
function N2s(e) {
  let { staged: r, chainPublishIds: n, chainPublishSlots: i } = Z().autoEditAttribution,
    o = { ...e, consumed: !1 };
  if ((r.set(e.slug, o), i.set(e.expectedToolUseId, o), n.add(e.expectedToolUseId), n.size > B)) {
    let s = n.values().next().value;
    if (s !== void 0) n.delete(s);
  }
  return o;
}
function gBt(e) {
  return e !== void 0 && Z().autoEditAttribution.chainPublishIds.has(e);
}
function b(e) {
  if (e === void 0) return;
  return Z().autoEditAttribution.chainPublishSlots.get(e);
}
function NLo(e) {
  return b(e) !== void 0;
}
function $2s(e) {
  let r = b(e),
    n = { roundTrip: r?.roundTrip };
  if (r !== void 0) r.roundTrip = void 0;
  return n;
}
function $Lo(e, r) {
  let n = Z().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return n.baseVersion;
}
function F2s(e, r, n) {
  let i = Z().autoEditAttribution.staged.get(e);
  if (i === void 0 || i.consumed || r === void 0 || i.expectedToolUseId !== r || i.slug !== e)
    return null;
  let o = Object.keys(n),
    s = Object.keys(i.input);
  if (o.length !== s.length || !s.every((u) => n[u] === i.input[u])) return null;
  return { contentSha256: i.contentSha256 };
}
function U2s(e, r) {
  let n = Z().autoEditAttribution.staged.get(e);
  if (n === void 0 || n.consumed || r === void 0 || n.expectedToolUseId !== r) return null;
  return (
    (n.consumed = !0),
    {
      threadId: n.threadId,
      commentId: n.commentId,
      recordVersionEcho: (i) => {
        n.versionEcho = i;
      }
    }
  );
}
function B2s(e) {
  let { staged: r, chainPublishSlots: n } = Z().autoEditAttribution;
  if (r.get(e.slug) === e) r.delete(e.slug);
  if (n.get(e.expectedToolUseId) === e) n.delete(e.expectedToolUseId);
}
function j2s(e) {
  let r = { ...e, consumed: !1 };
  return (Z().pipelineReplyOrigins.set(e.expectedToolUseId, r), r);
}
function W2s(e, r, n) {
  let i = n === void 0 ? void 0 : Z().pipelineReplyOrigins.get(n);
  if (i === void 0 || i.consumed || i.slug !== e || i.threadId !== r) return !1;
  return ((i.consumed = !0), !0);
}
function A(e) {
  return e !== void 0 && Z().pipelineReplyOrigins.has(e);
}
function G2s(e) {
  let r = Z().pipelineReplyOrigins;
  if (r.get(e.expectedToolUseId) === e) r.delete(e.expectedToolUseId);
}
var h = 3,
  k = 1024,
  j = new Set([
    `ec_${LSn}`,
    NSn,
    `ec_${$Sn}`,
    "policy_fetch_failed",
    "policy_route_missing",
    ...Object.values(FSn)
  ]);
function g(e) {
  return typeof e === "string" ? e.slice(0, k) : "";
}
function M(e) {
  if (typeof e !== "object" || e === null) return "publish\x00\x00\x00";
  let r = "action" in e ? g(e.action) : "",
    n = "file_path" in e ? g(e.file_path) : "",
    i = "url" in e ? g(e.url) : "",
    o = "thread_id" in e ? g(e.thread_id) : "";
  return `${r || "publish"}\x00${n}\x00${i}\x00${o}`;
}
function E(e, r, n) {
  let i = Z().rejectBreaker,
    o = M(e),
    s = i.get(o),
    u = s !== void 0 && s.reason === r && s.fingerprint === n ? s.count + 1 : 1;
  if ((i.set(o, { count: u, reason: r, fingerprint: n }), u === h))
    a("tengu_artifact_reject_breaker", { reason: _S(r) });
  return u >= h;
}
var m = `IMPORTANT: Artifact calls for this target have now been rejected ${h} or more times in this session for the same reason. Do not send the same call again: either make the specific change the error describes, or stop calling Artifact for this target and tell the user what is failing and why.`,
  Hyt = m.length + 2;
function Lyt(e) {
  return e.startsWith(`${m}

`)
    ? e.slice(m.length + 2)
    : e;
}
var D = "live_edit_conflict";
function L$r(e, r, n) {
  let i = Lyt(r),
    o = n === D ? cn(i + U(e, i)) : cn(i);
  return E(e, n, o) && !j.has(n)
    ? `${m}

${i}`
    : i;
}
function U(e, r) {
  if (
    typeof e !== "object" ||
    e === null ||
    !("action" in e) ||
    e.action !== "live-edit" ||
    !("ops" in e) ||
    !Array.isArray(e.ops)
  )
    return "";
  let n = /\bops\[(\d+)\]/.exec(r),
    i = n === null ? e.ops : [e.ops[Number.parseInt(n[1], 10)]],
    o = new Set();
  for (let s of i) {
    if (typeof s !== "object" || s === null) continue;
    for (let u of ["target", "before", "after", "parent"])
      if (u in s) {
        let d = g(s[u]);
        if (d !== "") o.add(d);
      }
  }
  return o.size === 0 ? "" : `\x00${[...o].sort().join("\x00")}`;
}
var H = "schema";
function V(e) {
  if (e === void 0) return "";
  return e.issues
    .map((r) => {
      let n = r.code === "unrecognized_keys" ? [...r.keys].sort().join(",") : "";
      return `${r.code}:${r.path.map(String).join(".")}:${n}`;
    })
    .sort()
    .join("|");
}
function P(e) {
  return A(e.toolUseId) || gBt(e.toolUseId);
}
function z2s(e, r = {}) {
  let { validationErrorSteer: n, validateInput: i, call: o } = e,
    s = {
      validationErrorSteer: (u, d) =>
        X(u, d, r.schemaSteerOverride?.(u) ?? null, n?.(u, d) ?? null),
      ...(i !== void 0 && { validateInput: G(i, r.onValidateReject) }),
      call: K(o)
    };
  return Object.defineProperties(
    Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)),
    Object.getOwnPropertyDescriptors(s)
  );
}
function X(e, r, n, i) {
  let o = (n !== null ? "override|" : "") + V(r),
    s = E(e, H, o);
  if (n !== null) return n;
  let d = [s ? m : null, i].filter((p) => p !== null).join(`

`);
  return d === "" ? null : d;
}
function G(e, r) {
  return async (n, i) => {
    let o = await e(n, i);
    if (o.result) return o;
    let s = P(i);
    try {
      r?.(n, { ...o }, { unattended: s });
    } catch (u) {
      t(`artifact reject observer threw: ${u instanceof Error ? u.message : typeof u}`, {
        level: "error"
      });
    }
    if (s) return o;
    return { ...o, message: L$r(n, o.message, `ec_${o.errorCode}`) };
  };
}
function K(e) {
  return async (r, n, ...i) => {
    if (P(n)) return e(r, n, ...i);
    let o;
    try {
      o = await e(r, n, ...i);
    } catch (s) {
      if (s instanceof je) s.message = L$r(r, s.message, s.reasonCode ?? "unknown");
      throw s;
    }
    return (W(), o);
  };
}
function W() {
  Z().rejectBreaker.clear();
}
import { STATUS_CODES as Y } from "http";
var F5n = 1e5,
  fcn = R0 - 2000;
function lre(e) {
  return Y[e] ?? "Unknown Status";
}
export {
  LLo,
  O$r,
  v7e,
  are,
  M$r,
  D$r,
  Vhe,
  ucn,
  H2s,
  H$r,
  H5n,
  E7e,
  jA,
  k7e,
  L2s,
  Ede,
  L5n,
  N5n,
  kde,
  $5n,
  N2s,
  gBt,
  NLo,
  $2s,
  $Lo,
  F2s,
  U2s,
  B2s,
  j2s,
  W2s,
  G2s,
  Hyt,
  Lyt,
  L$r,
  z2s,
  F5n,
  fcn,
  lre
};

//# sourceMappingURL=chunk-j9t13sne.js.map
