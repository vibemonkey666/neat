// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { g, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { te } from "./chunk-4kxznmzw.js";
import { o, oe, T, u, me, A } from "./chunk-0bqrj5ah.js";
var whi = '<wake reason="external-event"';
function SCs(e) {
  return e.startsWith(whi);
}
var O = /^[a-z0-9-]{1,32}$/,
  w = /^[a-z0-9_.-]{1,64}$/,
  b = 2048,
  d = /([a-z][a-z-]*)="([^"\s]{0,256})"/g,
  N = new Set(["reason", "current-time"]),
  P = new Set(["source", "kind", "from", "trust", "untrusted-keys"]),
  j = p(() => me(o(), oe()));
function c(e) {
  return e.trim() === "";
}
function YBe(e) {
  if (!SCs(e)) return null;
  let n = e.indexOf(">");
  if (n === -1 || n > b) return null;
  let r = e.slice(5, n);
  if (!c(r.replace(d, " "))) return null;
  for (let i of r.matchAll(d)) if (!N.has(i[1])) return null;
  let t = e.indexOf("<event ", n + 1);
  if (t === -1 || !c(e.slice(n + 1, t))) return null;
  let s = e.indexOf(">", t);
  if (s === -1 || s - t > b) return null;
  let E = e.indexOf("</event>", s + 1);
  if (E === -1) return null;
  let y = E + 8,
    m = e.indexOf("</wake>", y);
  if (m === -1 || !c(e.slice(y, m))) return null;
  if (!c(e.slice(m + 7))) return null;
  let a = new Map(),
    h = e.slice(t + 6, s);
  if (!c(h.replace(d, " "))) return null;
  for (let i of h.matchAll(d)) {
    if (!P.has(i[1])) return null;
    let S = i[1];
    if (!a.has(S)) a.set(S, i[2]);
  }
  let k = a.get("source"),
    _ = a.get("kind");
  if (k === void 0 || _ === void 0 || !O.test(k) || !w.test(_)) return null;
  let l = e.slice(s + 1, E),
    x = l.indexOf("<!--");
  if (x !== -1) {
    if (!c(l.slice(0, x))) return null;
    let i = l.indexOf("-->", x + 4);
    if (i === -1) return null;
    l = l.slice(i + 3);
  }
  let z = I(l);
  if (z === null) return null;
  let R = a.get("from"),
    W = (a.get("untrusted-keys") ?? "").split(",").filter((i) => i !== "");
  return { source: k, kind: _, ...(R !== void 0 && { from: R }), data: z, untrustedKeys: W };
}
var v = /^[^"'<>&\s]{0,256}$/,
  C = /^[^"'<>&\s,]{1,256}$/,
  K = p(() =>
    u({
      reason: A("external-event"),
      current_time: o().regex(v),
      event: u({
        source: o().regex(O),
        kind: o().regex(w),
        from: o().regex(v),
        trust: o().regex(v),
        untrusted_keys: T(o().regex(C))
          .refine((e) => e.join(",").length <= 256)
          .optional(),
        guidance: o()
          .refine((e) => !e.includes("--") && !e.includes("</event>"))
          .optional(),
        data: o()
      })
    })
  );
function xAi(e, n) {
  if (!SCs(e)) return null;
  let r = K().safeParse(n);
  if (!r.success) {
    if (B().safeParse(n).success) f("ccr_external_event_record", "malformed_record");
    return YBe(e);
  }
  let { event: t } = r.data;
  if (D(r.data) !== e) return (f("ccr_external_event_record", "text_mismatch"), YBe(e));
  let s = I(t.data);
  if (s === null) return (f("ccr_external_event_record", "malformed_record"), YBe(e));
  return (
    g("ccr_external_event_record"),
    { source: t.source, kind: t.kind, from: t.from, data: s, untrustedKeys: t.untrusted_keys ?? [] }
  );
}
var B = p(() => u({ reason: A("external-event") }));
function D({ current_time: e, event: n }) {
  let r =
      n.untrusted_keys === void 0 || n.untrusted_keys.length === 0
        ? ""
        : ` untrusted-keys="${n.untrusted_keys.join(",")}"`,
    t =
      n.guidance === void 0 || n.guidance === ""
        ? ""
        : `    <!-- ${n.guidance} -->
`,
    s = n.data.replaceAll("<", "\\u003c").replaceAll(">", "\\u003e").replaceAll("&", "\\u0026");
  return (
    `<wake reason="external-event" current-time="${e}">
  <event source="${n.source}" kind="${n.kind}" from="${n.from}" trust="${n.trust}"${r}>
` +
    t +
    `    ${s}
  </event>
</wake>`
  );
}
function I(e) {
  let n = e.trim();
  if (!n.startsWith("{")) return null;
  let r;
  try {
    r = te(n);
  } catch {
    return null;
  }
  if (typeof r !== "object" || r === null || Array.isArray(r)) return null;
  let t = j().safeParse(r);
  return t.success ? t.data : null;
}
function mDt(e) {
  return e.source === "session-inbox" && e.kind === "message.received";
}
function NFn(e) {
  return e?.kind === "task-notification" && e.subkind === "session-inbox";
}
function Yut(e) {
  return mDt(e) && e.from === "rc_owner" && e.data.sender_kind === "rc_owner";
}
function Uyo(e, n) {
  if (!NFn(e)) return;
  let r = YBe(n),
    t = r !== null && Yut(r) ? r.data.file_id : void 0;
  return typeof t === "string" ? t : void 0;
}
export { whi, SCs, YBe, xAi, mDt, NFn, Yut, Uyo };

//# sourceMappingURL=chunk-btv59fx5.js.map
