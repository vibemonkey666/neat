// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, U } from "./chunk-wrtp8qz8.js";
import { GCt } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { g, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Rn, JD } from "./chunk-wany0nxw.js";
import { at, qt, Be } from "./chunk-at88wjsn.js";
import { Nn } from "./chunk-ajtyjx88.js";
import { fV } from "./chunk-ar6ynjt8.js";
import { ec } from "./chunk-nhj692ya.js";
import { qe } from "./chunk-0np0053t.js";
import { pC } from "./chunk-0bqrj5ah.js";
var T = {
  skill: "skill_tool",
  mcp: "mcp_tool",
  evalRegistered: "eval_registered",
  dynamic: "dynamic_tool",
  unreadable: "unreadable_tool"
};
function Ig(e) {
  try {
    if (e.name.startsWith(fV)) return T.skill;
    let r = String(Nn(e.name));
    if (r !== e.name) return r;
    if (e.mcpInfo !== void 0) return T.mcp;
    if (e.name.startsWith("eval_registered__")) return T.evalRegistered;
    if (e.uiTableKey !== void 0 || e.name.includes("__")) return T.dynamic;
    return e.name;
  } catch {
    return T.unreadable;
  }
}
var E = [...Object.values(T), Be, ec, at, qe, qt];
function x$r(e) {
  let r = Ig(e);
  return E.find((c) => c === r) ?? "other_tool";
}
var x = new W(() => new Set());
function _(e, r) {
  return `${e}_${r}`;
}
var k = /_(\d+)$/;
function qGe(e) {
  let r = k.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function R(e, r, c) {
  let i = Rn(r, e.name);
  if (i === void 0 || !JD(i)) return null;
  let a = (u) => (
    f("batch_tools", u, { tool_name: Nn(i.name), isMcp: !1 }),
    [
      {
        type: "tool_use",
        id: _(e.id, 0),
        name: i.name,
        input: e.input,
        ...(e.caller !== void 0 && { caller: e.caller })
      }
    ]
  );
  try {
    let u = i.inputSchema.safeParse(e.input);
    if (!u.success) return { synthetics: a("parse_failed"), decomposed: !1 };
    let { v1Tool: n, entries: o } = i.perEntryHookInputs(u.data);
    if (o.length === 0) return { synthetics: a("zero_entries"), decomposed: !1 };
    return {
      decomposed: !0,
      synthetics: o.map((s, p) => {
        let m = s;
        try {
          m = c(n, s);
        } catch (d) {
          if (d instanceof Error && d.name === "ZodError") {
            let h = d instanceof pC ? L(d.issues.map((y) => y.code)).join(",") : "unknown";
            t(
              `Normalizing a batch entry's input for tool=${Ig(n)} was rejected: issues ${h}; the error text (${d.message.length} characters) is not logged`,
              { level: "error" }
            );
          } else
            l(
              Error(
                `Normalizing a batch entry's input for tool=${x$r(n)} failed: ${GCt(d)} was thrown; its text is not logged`
              )
            );
        }
        return {
          type: "tool_use",
          id: _(e.id, p),
          name: n.name,
          input: m,
          ...(e.caller !== void 0 && { caller: e.caller })
        };
      })
    };
  } catch {
    return { synthetics: a("per_entry_threw"), decomposed: !1 };
  }
}
function M5n(e) {
  let r;
  for (let c of e) if (JD(c)) ((r ??= new Set()), r.add(c.underlyingV1ToolName));
  if (r === void 0) return e;
  return e.filter((c) => !r.has(c.name));
}
function dcn(e, r, c) {
  let i,
    a = [];
  for (let u = 0; u < e.length; u++) {
    let n = e[u];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue;
    }
    let o = R(n, r, c);
    if (o === null) {
      i?.push(n);
      continue;
    }
    if (((i ??= e.slice(0, u)), i.push(...o.synthetics), o.decomposed))
      (a.push({ id: n.id, name: n.name }), g("batch_tools", { tool_name: Nn(n.name), isMcp: !1 }));
  }
  return { content: i ?? e, batchToolUses: a };
}
function x2s(e, r, c) {
  if (r === void 0 || r.length === 0) return e;
  let i = new Map();
  for (let o of r) if (!i.has(o.id)) i.set(o.id, o);
  let a = new Map();
  for (let o of i.values()) {
    let s = Rn(c, o.name);
    if (s === void 0 || !JD(s)) continue;
    let p = [],
      m;
    for (let d of e) if (d.type === "tool_use" && qGe(d.id) === o.id) ((m ??= d), p.push(d.input));
    try {
      a.set(o.id, {
        type: "tool_use",
        id: o.id,
        name: o.name,
        input: s.reassemble(p),
        ...(m?.caller !== void 0 && { caller: m.caller })
      });
    } catch {
      let d = x.of(U().host);
      if (!d.has(o.id))
        (d.add(o.id), f("batch_tools", "reassemble_threw", { tool_name: Nn(o.name), isMcp: !1 }));
    }
  }
  let u = new Set(),
    n = [];
  for (let o of e) {
    if (o.type === "tool_use") {
      let s = qGe(o.id);
      if (s !== void 0 && a.has(s)) {
        if (!u.has(s)) (u.add(s), n.push(a.get(s)));
        continue;
      }
    }
    n.push(o);
  }
  return n;
}
function P2s(e, r) {
  let c = !1;
  for (let n of e) {
    if (n.type === "assistant") {
      for (let o of n.message.content)
        if (o.type === "tool_use") {
          let s = Rn(r, o.name);
          if (s !== void 0 && JD(s)) c = !0;
        }
    }
    if (n.type === "user" && !c) {
      if (
        Array.isArray(n.message.content) &&
        n.message.content.some((o) => o.type === "tool_result" && qGe(o.tool_use_id) !== void 0)
      )
        c = !0;
    }
  }
  if (!c) return e;
  let i = new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let o of n.message.content) if (o.type === "tool_use") i.set(o.id, o);
  }
  let a = new Map();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) {
      if (o.type !== "tool_result") continue;
      let s = qGe(o.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let p = a.get(s);
      if (p === void 0) ((p = new Map()), a.set(s, p));
      if (!p.has(o.tool_use_id)) p.set(o.tool_use_id, o);
    }
  }
  if (a.size === 0) return e;
  let u = new Set();
  return e.flatMap((n) => {
    if (n.type !== "user" || !Array.isArray(n.message.content)) return [n];
    let o = !1,
      s = [];
    for (let p of n.message.content) {
      if (p.type !== "tool_result") {
        s.push(p);
        continue;
      }
      let m = qGe(p.tool_use_id),
        d = m !== void 0 ? a.get(m) : void 0;
      if (m === void 0 || d === void 0) {
        s.push(p);
        continue;
      }
      if (((o = !0), u.has(m))) continue;
      u.add(m);
      let h = i.get(m),
        y = Rn(r, h.name),
        B = y !== void 0 && JD(y) ? y : void 0;
      s.push(w(B, m, O(B, h.input, m, d)));
    }
    if (!o) return [n];
    if (s.length === 0) return [];
    return [{ ...n, message: { ...n.message, content: s } }];
  });
}
function O(e, r, c, i) {
  let a;
  if (e !== void 0)
    try {
      let n = e.inputSchema.safeParse(r);
      if (n.success) a = e.perEntryHookInputs(n.data).entries;
    } catch {}
  let u = a?.length ?? 0;
  for (let n of i.keys()) {
    let o = k.exec(n);
    if (o) u = Math.max(u, Number(o[1]) + 1);
  }
  if (u > 1000) u = a?.length ?? i.size;
  return Array.from({ length: u }, (n, o) => {
    let s = i.get(_(c, o));
    return s !== void 0 ? { input: a?.[o], result: s } : { input: a?.[o], error: "no result" };
  });
}
function w(e, r, c) {
  let i = [],
    a = "",
    u = !1,
    n = (s) => {
      if (s.length > 0)
        a =
          a === ""
            ? s
            : `${a}
${s}`;
    },
    o = () => {
      if (a !== "") (i.push({ type: "text", text: a }), (a = ""));
    };
  for (let [s, p] of c.entries()) {
    let m = p.result === void 0 || p.result.is_error === !0;
    if (m) u = !0;
    if ((n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`), p.result !== void 0)) {
      let d = p.result.content;
      if (typeof d === "string") n(d);
      else if (Array.isArray(d))
        for (let h of d)
          if (h.type === "text") n(h.text);
          else (o(), i.push(h));
    } else n(`[entry ${s + 1} error: ${p.error ?? "no result"}]`);
  }
  if (c.length === 1 && e !== void 0)
    n(
      `<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`
    );
  return (
    o(),
    {
      type: "tool_result",
      tool_use_id: r,
      content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
      ...(u && { is_error: !0 })
    }
  );
}
var b = new Map();
function HTe(e) {
  return b.get(e);
}
function D5n(e) {
  return e
    .map(HTe)
    .filter((r) => r !== void 0)
    .filter((r) => r.isEnabled());
}
function I2s(e, r) {
  return r.find((c) => c.underlyingV1ToolName === e)?.name ?? e;
}
function vde(e) {
  for (let [r, c] of b) if (c.name === e) return r;
  return;
}
export { Ig, x$r, qGe, M5n, dcn, x2s, P2s, HTe, D5n, I2s, vde };

//# sourceMappingURL=chunk-csvfdyfe.js.map
