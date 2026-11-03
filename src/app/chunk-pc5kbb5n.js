// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { He } from "./chunk-1hp0t8kv.js";
import { p } from "./chunk-qmkm2x59.js";
import { kRr, mWe, Oe, pHr, NWe, Bt } from "./chunk-j0tbz6ra.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { F, sf, Y_ } from "./chunk-wrtp8qz8.js";
import { o, M, T, yt, $e, A } from "./chunk-0bqrj5ah.js";
var iIt = p(() => yt({ type: A("text"), text: o().min(1) }));
var Hso = (t) => (t.kind === "plugin" && "name" in t ? t.name : void 0);
function Lso(t, e) {
  let { message: n } = t,
    r = n.content.flatMap((s) => {
      let u = iIt().safeParse(s);
      return u.success ? [u.data.text] : [];
    }),
    i = n.content.find((s) => s.type !== "text");
  if (i !== void 0 || r.length !== n.content.length)
    return {
      reason: `a ${i?.type ?? "text"} block the conversation does not take from a plugin (a row a plugin appends carries text blocks)`
    };
  if (n.type === "system") {
    let [s] = r;
    return s !== void 0 && r.length === 1
      ? { row: { ...Bt(s, "info"), uuid: e } }
      : { reason: "a notice that is not one text block" };
  }
  let f = n.type === "user" && n.isMeta === !0,
    m = Hso(t.origin);
  return f
    ? {
        row: Oe({
          content: r.map((s) => ({ type: "text", text: s })),
          isMeta: !0,
          uuid: e,
          ...(m !== void 0 && { origin: { kind: "plugin", name: m } })
        })
      }
    : {
        reason:
          `a ${n.type} row` +
          (n.type === "user" ? " that is not isMeta" : "") +
          " (a plugin appends a user-role isMeta row or a system notice; a prompt is $.prompt.submit)"
      };
}
function Nso(t, e) {
  let n = t ?? "main";
  if (e) return `${n} is a conversation no plugin may shape`;
  if (t === void 0) return "this session keeps no conversation to append to";
  return `no running loop is ${t}`;
}
var gMn = (t) => NWe(t).messages.map((e) => ({ content: e.message.content }));
function aIt(t) {
  let { content: e } = t;
  return typeof e === "string" ? [e] : e.flatMap((r) => (r.type === "text" ? [r.text] : []));
}
function $so(t) {
  let e = "content" in t ? t.content : void 0;
  return typeof e === "string" && e !== "" ? e : void 0;
}
function hMn(t) {
  switch (t.type) {
    case "user":
    case "assistant":
      return kRr(t.message.content);
    case "attachment":
      return gMn(t)
        .flatMap(aIt)
        .map((e) => ({ type: "text", text: e }));
    case "system": {
      let e = $so(t);
      return e === void 0 ? [] : [{ type: "text", text: e }];
    }
  }
}
function Ryr(t) {
  let e = t.type === "attachment",
    n = t.type === "system",
    r = e ? t.attachment.type : n ? t.subtype : void 0,
    i = !Y_(t),
    f = t.type === "assistant" ? "assistant" : "user",
    m = "isMeta" in t && t.isMeta === !0;
  return {
    type: t.type,
    ...(r !== void 0 && { name: r }),
    ...(i && { role: f }),
    ...(m && { isMeta: !0 }),
    content: hMn(t)
  };
}
var Fso = (t, e) =>
  !pHr(t) &&
  e.length > 0 &&
  e.every(({ content: n }) => typeof n === "string" || n.every((r) => r.type === "text"));
async function j9t(t, e) {
  let r = e?.isHookable === !0 ? e : void 0,
    i = Kt(t.uuid),
    f = Nso(t.agentId, e !== void 0),
    s =
      i !== null && r !== void 0
        ? Lso(t, i)
        : { reason: i === null ? "a uuid the engine did not mint" : f };
  if (r === void 0 || "reason" in s) {
    let u = "reason" in s ? s.reason : f;
    throw new He(`$.session.append: refused: ${u}`);
  }
  return (
    (r.keepArrived ?? r.keep)([s.row]),
    r.arrived([s.row]),
    { message: Ryr(s.row), uuid: s.row.uuid }
  );
}
var yMn = new Set(["text", "image", "document"]);
function Tdt(t) {
  let e = new Map();
  return t.map((n) => {
    if (yMn.has(n.type)) return;
    if (n.type === "tool_use" && typeof n.id === "string") return `tool_use:${n.id}`;
    let r = n.tool_use_id;
    if (n.type === "tool_result" && typeof r === "string") return `tool_result:${r}`;
    let i = e.get(n.type) ?? 0;
    return (e.set(n.type, i + 1), `${n.type}#${i}`);
  });
}
var Uso = p(() => yt({ type: o() }));
var W6e = (t) =>
  Array.isArray(t)
    ? t.flatMap((e) => {
        let n = Uso().safeParse(e);
        return n.success ? [n.data] : [];
      })
    : [];
var G6e = (t, e) =>
  e.flatMap((n) => {
    let r = n.kind === "text" ? n.text : t[n.index];
    return r === void 0 ? [] : [r];
  });
function W9t(t, e) {
  if (e === void 0 || typeof e === "string") return e ?? t;
  let n = Array.isArray(t) ? t : [],
    r = new Set();
  return e.flatMap((i) => {
    let f = n.findIndex((u, x) => !r.has(x) && mWe(u, i)),
      m = n[f],
      s = iIt().safeParse(i);
    if (m !== void 0) return (r.add(f), [m]);
    return s.success ? [{ type: "text", text: s.data.text }] : [];
  });
}
var Bso = new Set(["thinking", "redacted_thinking", "tool_result"]);
function jso(t, e, n) {
  let r = e.findIndex((f, m) => !n.has(m) && yMn.has(f.type) && mWe(f, t));
  if (r !== -1) return (n.add(r), { kind: "raised", index: r });
  let i = iIt().safeParse(t);
  return i.success ? { kind: "text", text: i.data.text } : void 0;
}
var _Mn = "^";
var Wso = (t, e, n) => ({
  kind: "tool-result",
  index: t,
  ...(e !== void 0 && { content: e }),
  isError: n
});
var Gso = p(() =>
  yt({
    type: A("tool_result"),
    content: $e([o(), T(yt({ type: o() }))]).optional(),
    is_error: M().optional()
  })
);
function zso(t, e, n) {
  let r = Gso().safeParse(e);
  return r.success ? Wso(t, r.data.content, r.data.is_error ?? n) : { kind: "raised", index: t };
}
function G9t(t, e) {
  if (t.length === 0) return [];
  let n = Tdt(t),
    r = new Set(n.filter((a) => a !== void 0)),
    i = n.filter((a, c) => a !== void 0 && t[c]?.type === "tool_result"),
    f = Tdt(e),
    m = F(e, (a) => a.type === "tool_result" && typeof a.tool_use_id !== "string") === i.length,
    s = new Map(),
    u = new Map(),
    x = new Set(),
    g = _Mn,
    C = 0;
  e.forEach((a, c) => {
    let y = a.type === "tool_result" && typeof a.tool_use_id !== "string",
      d = y ? (m ? i[C++] : void 0) : f[c];
    if (d === void 0 && !y) {
      let O = jso(a, t, x),
        H = s.get(g) ?? [];
      if (O !== void 0) s.set(g, [...H, O]);
      return;
    }
    if (d === void 0 || !r.has(d)) return;
    if (((g = d), a.type === "tool_result")) u.set(d, a);
  });
  let k = t.findIndex((a) => !Bso.has(a.type)),
    h = k === -1 ? t.length : k,
    l = [];
  if (
    (t.forEach((a, c) => {
      if (c === h) l.push(...(s.get(_Mn) ?? []));
      let y = n[c];
      if (y === void 0) return;
      let d = u.get(y);
      l.push(
        d === void 0 ? { kind: "raised", index: c } : zso(c, d, a.is_error === !0),
        ...(s.get(y) ?? [])
      );
    }),
    h === t.length)
  )
    l.push(...(s.get(_Mn) ?? []));
  return l.length > 0 ? l : [{ kind: "text", text: sf }];
}
import { randomUUID as rt } from "crypto";
var z9t = ({ message: t, agentId: e }, n) => ({
  message: {
    type: t.type,
    ...(t.type === "user" && { role: "user", isMeta: !0 }),
    content: t.content
  },
  door: "note",
  origin: { kind: "plugin", name: n },
  uuid: rt(),
  ...(e !== void 0 && { agentId: e })
});
export {
  iIt,
  Hso,
  Lso,
  Nso,
  gMn,
  aIt,
  $so,
  hMn,
  Ryr,
  Fso,
  j9t,
  yMn,
  Tdt,
  Uso,
  W6e,
  G6e,
  W9t,
  Bso,
  jso,
  _Mn,
  Wso,
  Gso,
  zso,
  G9t,
  z9t
};

//# sourceMappingURL=chunk-pc5kbb5n.js.map
