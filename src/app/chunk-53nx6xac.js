// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nui, AR } from "./chunk-dc0nzty2.js";
import { Xe, k } from "./chunk-ajtyjx88.js";
import { xl, Ae, Od, Qs, Ci } from "./chunk-dvghjmtr.js";
import { wb } from "./chunk-at88wjsn.js";
import { Xb, Sbt } from "./chunk-wdvpwq3x.js";
import { Ed } from "./chunk-gnr1s81e.js";
import { H } from "./chunk-p8tprgqa.js";
import { ve } from "./chunk-vk5p9xv3.js";
function uyt(e) {
  return e === "now" || e === "next" || e === "later" ? e : void 0;
}
function NGe(e) {
  return e.type === "image" && e.content.length > 0;
}
function fyt(e) {
  return e.mode === "poll-event" || e.mode === "task-notification" || e.skipAttachments === !0;
}
function VYn(e) {
  return e.findLast((t) => t.type === "user" || t.type === "assistant");
}
function JQe(e) {
  let t = (n) =>
      n.type === "user" &&
      Array.isArray(n.message.content) &&
      n.message.content.length > 0 &&
      n.message.content.every((i) => i.type === "tool_result"),
    o = e.filter((n) => n.type === "user" || n.type === "assistant"),
    r = o.length - 1,
    a = new Set();
  while (r >= 0 && t(o[r])) {
    let n = o[r];
    if (n.type === "user" && Array.isArray(n.message.content)) {
      for (let i of n.message.content) if (i.type === "tool_result") a.add(i.tool_use_id);
    }
    r--;
  }
  for (; r >= 0 && o[r].type === "assistant"; r--) {
    let n = o[r];
    if (
      n.type === "assistant" &&
      Array.isArray(n.message.content) &&
      n.message.content.some((i) => i.type === "tool_use" && !a.has(i.id))
    )
      return !0;
  }
  return !1;
}
function _dn(e) {
  return (
    e.findLast(
      (t) =>
        t.type === "assistant" &&
        Array.isArray(t.message.content) &&
        t.message.content.some((o) => o.type === "tool_use")
    ) ?? e.at(-1)
  );
}
var _ = 1568,
  R = {
    firstParty: 2000,
    bedrock: 2000,
    vertex: 2000,
    foundry: 2000,
    anthropicAws: 2000,
    anthropicGoogleCloud: 2000,
    mantle: 2000,
    gateway: 2000
  };
function w(e) {
  return Qs() && k("tengu_mossy_gray", !1) === !0 ? 1 / 0 : R[Od(e)];
}
function ld(e) {
  let t = O(),
    o = e ? Xe(e) : void 0,
    r = o ? xl(o)?.image_limits : void 0,
    a = void 0,
    n = w(e),
    i = n,
    l = Math.min(r?.maxWidth ?? AR.maxWidth, n),
    u = Math.min(r?.maxHeight ?? AR.maxHeight, n),
    s = Math.min(f((void 0)?.maxWidth, l), i),
    m = Math.min(f((void 0)?.maxHeight, u), i),
    c = r?.maxImageTokens,
    d = r?.maxBase64Size ?? t;
  if (c === void 0 && s === AR.maxWidth && m === AR.maxHeight && d === AR.maxBase64Size) return AR;
  return {
    maxWidth: s,
    maxHeight: m,
    maxImageTokens: c,
    rejectMaxWidth: Math.max(l, s),
    rejectMaxHeight: Math.max(u, m),
    maxBase64Size: d,
    targetRawSize: (d * 3) / 4
  };
}
function f(e, t) {
  return e === void 0 ? t : Math.max(_, e);
}
function O() {
  if (Ae() === "firstParty" && Ci() && k("tengu_crimson_vector", !1)) return nui;
  return AR.maxBase64Size;
}
var qYn = 4194304;
var YYn = qYn;
import { randomUUID as D } from "crypto";
var y = 3;
function g(e, t) {
  if (e.bytes === void 0) return e;
  let o = e.bytes.length,
    r = Math.min(t + YYn, o),
    a = r < o ? r - ((r - t) % y) : r;
  return t > 0 && t >= o
    ? { deny: `offset ${t} is at or past the item's ${o} bytes` }
    : {
        type: e.type,
        mediaType: e.mediaType,
        base64: e.bytes.subarray(t, a).toString("base64"),
        size: o,
        ...(a < o && { next: a })
      };
}
var HNr = Object.freeze({ deny: "no prompt.submit in flight carries an attachment under that id" });
function h() {
  let e = new Map();
  return {
    hold: (t, o) =>
      t.map((r) => {
        let a = `media_${D().replace(/-/g, "")}`;
        return (
          e.set(
            a,
            wb(() => r.read(o))
          ),
          { ...r.attachment, id: a }
        );
      }),
    release: (t) => t.forEach((o) => e.delete(o.id ?? "")),
    read: async ({ id: t, offset: o }) => {
      let r = await e.get(t)?.();
      return r === void 0 || !e.has(t) ? HNr : g(r, o ?? 0);
    },
    clear: () => e.clear()
  };
}
var LNr = ve(h(), (e) => {
  e.clear();
});
function j_i(e, t, o) {
  let r = LNr.hold(e, t);
  return new Promise((a) => {
    a(o(r));
  }).finally(() => LNr.release(r));
}
var x = Object.freeze({ deny: "the image is not held inline: its block names a URL or a file" });
function b(e) {
  if (e.block.type === "text") return { unreadable: e.block.text };
  let { source: t } = e.block;
  return t.type === "base64"
    ? { type: "image", mediaType: t.media_type, bytes: Buffer.from(t.data, "base64") }
    : x;
}
var I = Object.freeze({
  deny: "the document is not held as inline bytes: its block names a URL or a file, or nests other blocks"
});
var M = "application/octet-stream";
function T(e) {
  let t = H(e) ? e : {},
    { data: o, media_type: r } = t,
    a = t.type === "base64";
  return typeof o === "string" && (a || t.type === "text")
    ? {
        type: "document",
        mediaType: typeof r === "string" ? r : M,
        bytes: Buffer.from(o, a ? "base64" : "utf8")
      }
    : I;
}
var P = (e) => ({ attachment: { type: "document" }, read: async () => T(e.source) });
function v({ source: e }) {
  let t = Ed(e) ? e : void 0,
    o = t?.type === "base64" ? t.media_type : void 0;
  return { type: "image", mediaType: typeof o === "string" ? o : void 0 };
}
var A = (e) => ({ attachment: v(e), read: async (t) => b(await Sbt(e, ld(t))) });
function S(e) {
  if (!Ed(e)) return [];
  return e.type === "image" ? [A(e)] : e.type === "document" ? [P(e)] : [];
}
var E = Object.freeze({ unreadable: "the pasted image is empty" });
var C = (e) => ({
  attachment: { type: "image", mediaType: e.mediaType, filename: e.filename },
  read: async (t) =>
    NGe(e) ? b(await Xb({ data: e.content, mediaType: e.mediaType, limits: ld(t) })) : E
});
var MHo = (e, t) => [
  ...(typeof e === "string" ? [] : e.flatMap(S)),
  ...Object.values(t ?? {})
    .filter((o) => o.type === "image")
    .map(C)
];
export { uyt, NGe, fyt, VYn, JQe, _dn, ld, qYn, YYn, HNr, LNr, j_i, MHo };

//# sourceMappingURL=chunk-53nx6xac.js.map
