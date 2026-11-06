import {
  fileURLToPath as __sourceFilePath_517ec12a51703291,
  URL as __sourceFilePath_517ec12a51703291_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ce } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { _, pW, t } from "./chunk-4kxznmzw.js";
import { di, re } from "./chunk-a16y5hcz.js";
import { gc, _4e, gar } from "./chunk-9z5ybxhe.js";
import {
  mCt,
  dts,
  uTn,
  iF,
  pk,
  _g,
  Kp,
  F,
  L,
  Bi,
  nt,
  U,
  yrs,
  J,
  dss,
  css,
  Qdr,
  ZXr,
  OCt,
  bss,
  ps
} from "./chunk-wrtp8qz8.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { i } from "./chunk-cj37hmns.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { l } from "./chunk-ewvf3tep.js";
import { Qs } from "./chunk-dvghjmtr.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { qdi, Ydi, Xdi, Efe, Jdi, Qdi, QTt, Zdi, Zqt, Nr, io, Xo } from "./chunk-928ws1pg.js";
import { Ef, S2t, xtr, Jo, Xe, XCe, xue, Nn, k, uI, ue } from "./chunk-ajtyjx88.js";
import { pI, GS, uS, Hj, Be, At } from "./chunk-at88wjsn.js";
import { yM, rvn, lir, ufe, ovn } from "./chunk-5rw2zfa0.js";
import { ri } from "./chunk-63a6mqbs.js";
import { Xvn, u$e } from "./chunk-gg53p5cf.js";
import { eQo } from "./chunk-d54avynm.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { Vd, Gf } from "./chunk-qakn3b85.js";
import { zo, Id, Hrt, tai } from "./chunk-zf79f62g.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { pU } from "./chunk-e0ax8qma.js";
import { UXs } from "./chunk-gdcb8skc.js";
import { Rt, Xye, rj, Rn } from "./chunk-wany0nxw.js";
import { jet, ZG } from "./chunk-q1myka9a.js";
import { YWo } from "./chunk-ggnzxsv7.js";
import { Ig, HTe, vde } from "./chunk-csvfdyfe.js";
import { qa } from "./chunk-gmxe4kpt.js";
import { YG, Pd, hu, oo, wjo, Emn, zye, WAe } from "./chunk-39ayby14.js";
import { Zh, BL } from "./chunk-n32nf3yj.js";
import { kze } from "./chunk-7qstrcyg.js";
import { N8n, X_t, AZe, wye } from "./chunk-gb7afnsg.js";
import { a0 } from "./chunk-b10syt1j.js";
import { qn } from "./chunk-0ex22bw7.js";
import { ki } from "./chunk-ngmg7f2n.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { Dor } from "./chunk-j4601ec1.js";
import { En } from "./chunk-errevp3y.js";
import { et } from "./chunk-c9re0p40.js";
import { isDeepStrictEqual as Z } from "util";
var Le = [
  "betas",
  "tool_choice",
  "thinking",
  "context_management",
  "output_config",
  "speed",
  "temperature",
  "max_tokens"
];
function zzs(e) {
  return {
    model: e.model,
    tools: e.tools.map((n, o) => ({
      key: Ie(n, o),
      deferred: qdn(n),
      bound: qdn(n),
      cacheControl: void 0,
      body: n
    })),
    system: e.system.map((n) => ({ preamble: !1, cacheControl: void 0, body: n })),
    messages: [],
    envelope: {},
    seeded: !0
  };
}
function wLo(e, n = {}) {
  let o =
      n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === !0 ? gn(e.messages) : void 0),
    r = typeof e.system === "string" ? [{ type: "text", text: e.system }] : (e.system ?? []),
    d = {};
  for (let s of Le) {
    let c = s === "betas" ? mn(e.betas) : e[s];
    if (c !== void 0) d[s] = c;
  }
  return {
    model: e.model,
    envelope: d,
    tools: (e.tools ?? []).map((s, c) => ({
      key: Ie(s, c),
      deferred: s.defer_loading === !0,
      bound: s.defer_loading === !0 && typeof s.name === "string" && o?.has(s.name) === !0,
      cacheControl: Re(s),
      body: Se(s)
    })),
    system: r.map((s) => ({ preamble: ZG(s), cacheControl: Re(s), body: Se(s) })),
    messages: e.messages.map((s, c, u) => ({
      role: s.role,
      turnScopedSystem: s.role === "system" && c === u.length - 1,
      blocks:
        typeof s.content === "string"
          ? [{ thinking: !1, cacheControl: void 0, body: { type: "text", text: s.content } }]
          : s.content.map((R) => ({
              thinking: R.type === "thinking" || R.type === "redacted_thinking",
              cacheControl: Re(R),
              body: hn(Se(R))
            }))
    }))
  };
}
function Vdn(e) {
  return {
    model: e.model,
    tools: e.tools.filter(yn).map((n) => n.body),
    system: e.system.filter((n) => !n.preamble).map((n) => n.body),
    messages: e.messages
      .filter((n) => !n.turnScopedSystem)
      .map((n) => ({
        role: n.role,
        content: n.blocks.filter((o) => !o.thinking).map((o) => o.body)
      }))
  };
}
function Kzs(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}
var de = 16;
function vLo(e, n) {
  return e.seeded ? Ae(e, n) : [...Ae(e, n), ...fn(e, n), ...un(e, n), ...pn(e, n)];
}
function Ae(e, n) {
  let o = Vdn(e),
    r = Vdn(n),
    d = [],
    s = (T) => (d.push(T), d.length < de),
    c = (T) =>
      new Map(
        [...T.filter((b) => !b.deferred), ...T.filter((b) => b.bound)].map((b) => [b.key, b])
      ),
    u = c(e.tools),
    R = c(n.tools),
    y = [],
    p = !1;
  for (let [T, b] of u) {
    let x = b.body,
      M = R.get(T);
    if (M === void 0) {
      if (b.deferred) {
        if (!e.seeded) y.push({ part: "tool", id: T, kind: "removed", prev: x });
        continue;
      }
      if (((p = !0), !s({ part: "tool", id: T, kind: "removed", prev: x }))) return d;
    } else if (b.deferred !== M.deferred) {
      p = !0;
      let O = b.deferred
        ? { part: "tool", id: T, kind: "added", next: M.body }
        : { part: "tool", id: T, kind: "removed", prev: x };
      if (!s(O)) return d;
    } else if (!Z(x, M.body)) {
      p ||= !b.deferred;
      let O = M.body,
        A = [...Object.keys(x), ...Object.keys(O)].find((B) => !Z(FP(x, B), FP(O, B))) ?? "?";
      if (!s({ part: "tool", id: T, kind: "changed", field: A, prev: x, next: O })) return d;
    }
  }
  for (let [T, b] of R)
    if (!u.has(T) && !b.deferred) {
      if (((p = !0), !s({ part: "tool", id: T, kind: "added", next: b.body }))) return d;
    }
  if (!p) {
    let T = (O) => [...O.values()].flatMap((A) => (A.deferred ? [] : [A.key])),
      b = T(u),
      M = T(R)
        .filter((O) => u.has(O))
        .find((O, A) => b[A] !== O);
    if (M !== void 0) s({ part: "tool", id: M, kind: "reordered" });
  }
  let E = Math.max(o.system.length, r.system.length);
  for (let T = 0; T < E; T++) {
    let b = o.system[T],
      x = r.system[T],
      M = b === void 0 ? "added" : x === void 0 ? "removed" : "changed";
    if (M !== "changed" || !Z(b, x)) {
      if (!s({ part: "system", index: T, kind: M, prev: b, next: x })) return d;
    }
  }
  for (let T = 0; T < o.messages.length; T++) {
    let b = o.messages[T],
      x = r.messages[T];
    if (x !== void 0 && Z(b, x)) continue;
    let M = {
      part: "message",
      index: T,
      role: b.role,
      kind: x === void 0 ? "removed" : "changed",
      prev: b,
      next: x
    };
    if (!s(M)) return d;
  }
  for (let T of y) if (!s(T)) break;
  return d;
}
function fn(e, n) {
  let o = [],
    r = Math.min(e.messages.length, n.messages.length);
  for (let d = 0; d < r && o.length < de; d++) {
    let s = De(e.messages[d]),
      c = De(n.messages[d]);
    if (s.length === 0 && c.length === 0) continue;
    if (s.length === c.length && s.every((R, y) => R === c[y])) continue;
    let u =
      s.slice(0, c.length).every((R, y) => R === c[y]) ||
      c.slice(0, s.length).every((R, y) => R === s[y]);
    o.push({
      part: "thinking",
      index: d,
      kind: !u ? "changed" : c.length < s.length ? "dropped" : "added",
      prevCount: s.length,
      nextCount: c.length
    });
  }
  return o;
}
function De(e) {
  return e.blocks.flatMap((n) => {
    if (!n.thinking) return [];
    let o = FP(n.body, "signature"),
      r = FP(n.body, "data");
    return [typeof o === "string" ? o : typeof r === "string" ? r : "?"];
  });
}
function un(e, n) {
  let o = Pe(e, e.messages.length),
    r = Pe(n, e.messages.length),
    d = [];
  for (let [s, { at: c, marker: u }] of o) {
    if (d.length >= de) return d;
    let R = r.get(s);
    if (R === void 0) d.push({ part: "cache", at: c, kind: "dropped", prev: u, next: void 0 });
    else if (!Z(u, R.marker))
      d.push({ part: "cache", at: c, kind: "changed", prev: u, next: R.marker });
  }
  for (let [s, { at: c, marker: u }] of r) {
    if (d.length >= de) return d;
    if (!o.has(s)) d.push({ part: "cache", at: c, kind: "added", prev: void 0, next: u });
  }
  return d;
}
function Pe(e, n) {
  let o = new Map();
  for (let r of e.tools)
    if (r.cacheControl !== void 0)
      o.set(`tools:${r.key}`, { at: { segment: "tools", key: r.key }, marker: r.cacheControl });
  return (
    e.system.forEach((r, d) => {
      if (r.cacheControl !== void 0)
        o.set(`system:${d}`, { at: { segment: "system", index: d }, marker: r.cacheControl });
    }),
    e.messages.slice(0, n).forEach((r, d) => {
      r.blocks.forEach((s, c) => {
        if (s.cacheControl !== void 0)
          o.set(`messages:${d}.${c}`, {
            at: { segment: "messages", index: d, block: c },
            marker: s.cacheControl
          });
      });
    }),
    o
  );
}
function pn(e, n) {
  return [
    ["model", e.model, n.model],
    ["attribution_header", ve(e), ve(n)],
    ["deferred_tools", Ne(e), Ne(n)],
    ...Le.map((r) => [r, e.envelope[r], n.envelope[r]])
  ]
    .filter(([, r, d]) => !Z(r, d))
    .map(([r, d, s]) => ({ part: "envelope", id: r, kind: "changed", prev: d, next: s }));
}
function mn(e) {
  return e && [...e].sort();
}
function ve(e) {
  for (let n of e.system) {
    let o = FP(n.body, "text");
    if (typeof o === "string" && o.startsWith(jet)) return o;
  }
  return "";
}
function Ne(e) {
  return e.tools
    .filter((n) => n.deferred)
    .map((n) => n.key)
    .sort()
    .join(",");
}
function yn(e) {
  return !e.deferred || e.bound;
}
function qdn(e) {
  return FP(e, "defer_loading") === !0;
}
function gn(e) {
  let n = new Set();
  for (let o of e) {
    if (typeof o.content === "string") continue;
    if (o.role === "system") {
      for (let d of o.content) {
        let s = FP(d, "tool"),
          c =
            FP(d, "type") === "tool_addition" && typeof s === "object" && s !== null
              ? FP(s, "name")
              : void 0;
        if (typeof c === "string") n.add(gc(c));
      }
      continue;
    }
    if (o.role !== "user") continue;
    for (let d of o.content) {
      if (!AZe(d)) continue;
      for (let s of d.content) if (X_t(s)) n.add(gc(s.tool_name));
    }
  }
  return n;
}
function Re(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}
function Se(e) {
  if (!("cache_control" in e)) return e;
  let { cache_control: n, ...o } = e;
  return o;
}
function hn(e) {
  if (!("safeguards" in e)) return e;
  let { safeguards: n, ...o } = e;
  return o;
}
function FP(e, n) {
  if (e === void 0) return;
  return Object.entries(e).find(([o]) => o === n)?.[1];
}
function Ie(e, n) {
  let o = FP(e, "name");
  if (typeof o === "string") return o;
  let r = FP(e, "type");
  return typeof r === "string" ? r : `tools[${n}]`;
}
function m$r() {
  return i.CLAUDE_CODE_WEBSEARCH_CITATIONS && Qs() && !Hj();
}
function Ydn(e) {
  let n = FP(e, "type");
  return (
    typeof FP(e, "name") === "string" &&
    FP(e, "defer_loading") === !0 &&
    (n === void 0 || n === "custom") &&
    Fe(FP(e, "input_schema")) &&
    !("cache_control" in e)
  );
}
function Vzs(e) {
  let n = FP(e, "type"),
    o = FP(e, "description");
  return (
    typeof FP(e, "name") === "string" &&
    (o === void 0 || typeof o === "string") &&
    FP(e, "defer_loading") !== !0 &&
    (n === void 0 || n === "custom") &&
    Fe(FP(e, "input_schema")) &&
    !("cache_control" in e)
  );
}
var le = ["strict", "eager_input_streaming", "citations"];
function fe(e) {
  return e.some((n) => FP(n, "eager_input_streaming") === !0);
}
function ne(e, { strict: n, eager: o }) {
  let r = { ...e };
  if (!n && "strict" in r) {
    let { strict: d, ...s } = r;
    r = s;
  }
  if (!o && "eager_input_streaming" in r) {
    let { eager_input_streaming: d, ...s } = r;
    r = s;
  }
  if (!m$r() && "citations" in r) {
    let { citations: d, ...s } = r;
    r = s;
  }
  return r;
}
function Fe(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && FP(e, "type") === "object";
}
function qzs(e) {
  return et(_(yM(e))).slice(0, 16);
}
function Tn(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(
    (n) =>
      typeof n === "object" &&
      n !== null &&
      typeof n.name === "string" &&
      typeof n.listing === "string" &&
      ((typeof n.definition === "object" && n.definition !== null) || typeof n.sameAs === "string")
  );
}
function Myt(e, n = new Set()) {
  let o = new Map();
  for (let r of e) {
    if (
      r.type !== "attachment" ||
      r.attachment?.type !== "deferred_tools_delta" ||
      typeof r.uuid !== "string" ||
      n.has(r.uuid)
    )
      continue;
    let d = new Map();
    for (let s of Tn(r.attachment.surfacedDefinitions)) {
      if ("definition" in s) {
        d.set(s.name, { definition: s.definition, listing: s.listing, definedIn: r.uuid });
        continue;
      }
      let c = o.get(s.sameAs)?.get(s.name);
      if (c !== void 0) d.set(s.name, c);
    }
    if (d.size > 0) o.set(r.uuid, d);
  }
  return o;
}
function Yzs(e, n = new Set()) {
  let o = new Set();
  for (let r of Myt(e, n).values()) for (let d of r.keys()) o.add(d);
  return o;
}
function g$r(e, n) {
  let o = Myt(e, n),
    r = new Map(),
    d = new Set();
  for (let s of e) {
    if (
      s.type !== "attachment" ||
      s.attachment?.type !== "deferred_tools_delta" ||
      (typeof s.uuid === "string" && n.has(s.uuid))
    )
      continue;
    for (let c of Bi(s.attachment.removedByBlock)) if (r.has(c)) d.add(c);
    if (typeof s.uuid !== "string") continue;
    for (let [c, u] of o.get(s.uuid) ?? []) (r.set(c, u), d.delete(c));
  }
  return { definedByValue: r, withdrawn: d };
}
function cBt(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
function Xzs(e, n = new Set()) {
  return new Set(Myt(e, n).keys());
}
var _n = "tengu_marlin_thicket",
  Sn = "ide",
  bn = new nt(() => ({ read: !1 }));
function Ue(e, n) {
  return e && Object.hasOwn(e, n) ? e[n] : void 0;
}
async function kn(e, n) {
  let o;
  if (
    !(await uI(
      (d) => (
        (o = Ue(d.mcpLegacyKeyOwners, e) ?? n),
        { ...d, mcpLegacyKeyOwners: { ...d.mcpLegacyKeyOwners, [e]: o } }
      )
    ))
  ) {
    f("mcp_standard_key", "owner_not_saved");
    return;
  }
  return o;
}
function Ghe() {
  let e = bn.of(U());
  if (!e.read) {
    if (((e.read = !0), k(_n, !1)))
      Xdi({
        read: (n) => (J() ? void 0 : Ue(ue().mcpLegacyKeyOwners, n)),
        claim: J() ? async (n, o) => o : kn
      });
  }
  return Efe();
}
function Cn(e) {
  try {
    return Gf(e) || new URL(e).host === new URL(rn().MCP_PROXY_URL).host;
  } catch {
    return !0;
  }
}
function je(e) {
  let n = Cn(e) ? void 0 : qdi(e);
  return n === void 0 ? void 0 : { key: n, pinned: !1 };
}
function C5n(e, n, o) {
  if (o || xue(e)) return { key: En(e), pinned: !0 };
  switch (n.type) {
    case "sse-ide":
    case "ws-ide":
      return { key: Sn, pinned: !0 };
    case "http":
    case "sse":
      return je(n.url);
    case "claudeai-proxy":
      return pU(n) === void 0 ? void 0 : je(n.url);
    case "stdio":
    case void 0: {
      let { command: r, args: d } = n.configuredCommand ?? n,
        s = Ydi(r, d ?? []);
      return s === void 0 ? void 0 : { key: s, pinned: !1 };
    }
    default:
      return;
  }
}
var We = new nt(() => ({ ok: !1, kept: !1, failed: !1 }));
function On(e) {
  return ri(e, "name").flatMap((n) =>
    n.mcpInfo !== void 0 && n.name === Xo(n.mcpInfo.serverName, n.mcpInfo.toolName)
      ? [{ name: n.name, server: n.mcpInfo, standardKey: n.mcpInfo.standardKey }]
      : []
  );
}
function xn(e) {
  return "name" in e && typeof e.name === "string" ? { ...e, name: QTt(e.name) } : e;
}
function Ve(e) {
  return typeof e === "object" && e !== null;
}
function pe(e) {
  return typeof e === "string" ? QTt(e) : e;
}
function me(e) {
  if (Array.isArray(e)) return e.map(me);
  if (!Ve(e)) return e;
  let n = {};
  for (let o of Object.keys(e)) {
    let r = e[o];
    n[o] = o === "input" ? r : o === "exclude_tools" && Array.isArray(r) ? r.map(pe) : me(r);
  }
  switch (n.type) {
    case "tool_use":
      return { ...n, name: typeof n.name === "string" ? Zdi(n.name) : n.name };
    case "tool_reference":
      return {
        ...n,
        ...("name" in n && { name: pe(n.name) }),
        ...("tool_name" in n && { tool_name: pe(n.tool_name) })
      };
    case "tool_definition":
      return Ve(n.definition)
        ? { ...n, definition: { ...n.definition, name: pe(n.definition.name) } }
        : n;
    default:
      return n;
  }
}
function Mn(e) {
  return Array.isArray(e.content) ? { ...e, content: me(e.content) } : e;
}
function wn() {
  let e = We.of(U());
  if (Jdi() > 0 && !e.kept) ((e.kept = !0), f("mcp_standard_key", "kept_legacy_names"));
  else if (!e.ok && !e.kept) ((e.ok = !0), g("mcp_standard_key"));
}
function Ke(e) {
  l(e);
  let n = We.of(U());
  if (!n.failed) ((n.failed = !0), m("mcp_standard_key", "translate_failed"));
}
function h$r(e) {
  try {
    if (e.some((n) => n.mcpInfo !== void 0) && Ghe()) (Qdi(On(e)), wn());
    return !0;
  } catch (n) {
    return (Ke(n), !1);
  }
}
function Xdn(e) {
  try {
    if (!Ghe()) return e;
    let n = e.tool_choice;
    return {
      ...e,
      messages: e.messages.map(Mn),
      ...(e.context_management != null && { context_management: me(e.context_management) }),
      ...(e.tools !== void 0 && { tools: e.tools.map(xn) }),
      ...(n !== void 0 &&
        "name" in n &&
        typeof n.name === "string" && { tool_choice: { ...n, name: QTt(n.name) } })
    };
  } catch (n) {
    return (Ke(n), e);
  }
}
function Jzs(e) {
  for (let n of e.content) if (n.type === "tool_use" && n.name !== void 0) n.name = Zqt(n.name);
}
var He = Symbol.for("claude-code.hostOnlyNativeTool");
function t2s(e) {
  return (Object.defineProperty(e, He, { value: !0, enumerable: !0 }), e);
}
function EG(e) {
  return He in e;
}
import { isDeepStrictEqual as $e } from "util";
function ee(e, n) {
  return a0(e) && n(e) ? e : gc(e);
}
function ze() {
  if (!Ef()) return !1;
  return !(i.CLAUDE_CODE_SIMPLE || i.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function VDe() {
  let e = Lo();
  return ((e.keptDeferredToolsEnabled ??= ze()), e.keptDeferredToolsEnabled);
}
function ncn() {
  return Lo().keptDeferredToolsEnabled ?? ze();
}
var An = 5000;
function q(e) {
  return N8n(e.toolUseId, e.toolName);
}
class Ye {
  #e = new Map();
  #n = new Set();
  #o = new Map();
  #t = !1;
  #r = 0;
  get(e) {
    return this.#e.get(q(e));
  }
  set(e, n) {
    let o = q(e);
    if (!this.#e.delete(o) && this.#e.size >= An) {
      let r = this.#e.keys().next().value;
      if (r !== void 0) this.#e.delete(r);
    }
    (this.#e.set(o, n), this.#n.add(e.toolName));
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#o.get(e)) return !1;
    return (this.#o.set(e, n), !0);
  }
  get generation() {
    return this.#r;
  }
  noteRetractionFailure() {
    let e = !this.#t;
    return ((this.#t = !0), e);
  }
  clear() {
    (this.#e.clear(), this.#n.clear(), this.#o.clear(), this.#r++);
  }
}
var rcn = new nt(() => new Ye());
function VK() {
  return rcn.of(U());
}
function Ge(e, n, o, r = !0, d) {
  let s = new Set(o.map((p) => p.name)),
    c = new Map();
  for (let p of n) {
    let E = e.get(p),
      T = E?.kind === "sent" && "name" in E.entry.schema ? E.entry.schema.name : void 0,
      b = ee(p.toolName, (x) => s.has(x) || x === T);
    if (c.has(b)) continue;
    if (E?.kind === "sent" && (r || !E.entry.isMcp)) c.set(b, E.entry);
  }
  let u = new Set(),
    R = [],
    y = [];
  for (let p of n) {
    let E = e.get(p);
    if (E?.kind === "stripped") {
      u.add(q(p));
      continue;
    }
    if (E?.kind === "sent") continue;
    let T = ee(p.toolName, (x) => s.has(x) || c.has(x)),
      b = c.get(T);
    if (b) R.push({ reference: p, entry: b });
    else if (!s.has(T) && !d?.keeps(T)) y.push(p);
  }
  return { kept: c, strippedReferenceKeys: u, resolvedAgainstKept: R, unrecordedDepartures: y };
}
function kLo(e, n, o, { keepMcp: r = !0, surfacedOnWire: d, declaredInline: s } = {}) {
  try {
    if (!VDe()) return;
    let c = wye(e, { surfacedOnWire: d });
    if (c.length === 0) return;
    let u = VK(),
      R = u.generation,
      y = Jo(o),
      p = be(y, o),
      {
        kept: E,
        strippedReferenceKeys: T,
        resolvedAgainstKept: b,
        unrecordedDepartures: x
      } = Ge(u, c, n, r, s);
    if (p) {
      for (let { reference: M, entry: O } of b) u.set(M, { kind: "sent", entry: O });
      for (let M of x) u.set(M, { kind: "stripped" });
    }
    return {
      references: c,
      kept: E,
      strippedReferenceKeys: T,
      writes: p,
      category: y,
      querySource: o,
      generation: R
    };
  } catch (c) {
    (l(c), m("mcp_kept_deferred_tools", "plan_failed"));
    return;
  }
}
function n2s(e, n, { keepMcp: o = !0, surfacedOnWire: r } = {}) {
  try {
    let d = VK();
    if (!VDe()) return;
    let { kept: s } = Ge(d, wye(e, { surfacedOnWire: r }), n, o),
      c = new Set(n.map((u) => u.name));
    return [...s.keys()].filter((u) => !c.has(u));
  } catch (d) {
    ocn(d);
    return;
  }
}
function S$r(e) {
  let n = VK(),
    o = e.findLastIndex((r) => r.type === "system" && r.subtype === "compact_boundary");
  return new Set(
    wye(e.slice(o + 1))
      .filter((r) => n.get(r)?.kind !== "stripped")
      .map((r) => r.toolName)
  );
}
function r2s(e) {
  let n = VK(),
    o = new Set();
  for (let r of e?.references ?? []) if (n.get(r)?.kind === "stripped") o.add(q(r));
  return o;
}
function ocn(e) {
  if ((l(e), VK().noteRetractionFailure())) m("mcp_kept_deferred_tools", "retraction_failed");
}
function o2s(e, n, o, { requestCarriesStructuredOutputs: r }) {
  try {
    let d = Math.max(n.length - 1, 0),
      s = VK(),
      c = s.generation !== e.generation,
      u = { strict: r, eager: fe(n) },
      R = [],
      y = [];
    for (let [T, b] of e.kept) {
      let x = n.findIndex((O) => "name" in O && Rt(O, T)),
        M = n[x];
      if (M !== void 0) {
        if ("defer_loading" in M && M.defer_loading && !c) n[x] = ne(b.schema, u);
        continue;
      }
      (y.push([T, b]), R.push(ne(b.schema, u)));
    }
    if ((n.splice(d, 0, ...R), !e.writes || c)) return;
    let p = e.querySource ?? "";
    if (y.length === 0 && e.strippedReferenceKeys.size === 0) s.telemetrySignatureChanged(p, "");
    else {
      t(
        `Dynamic tool loading: keeping ${y.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`
      );
      let T = `${y
        .map(([b]) => b)
        .sort()
        .join(",")}|${e.strippedReferenceKeys.size}`;
      if (s.telemetrySignatureChanged(p, T)) {
        let b = ce(e.category);
        g("mcp_kept_deferred_tools", {
          kept_count: y.length,
          kept_mcp_count: F(y, ([, x]) => x.isMcp),
          stripped_reference_count: e.strippedReferenceKeys.size,
          ...(b !== void 0 && { query_source_category: b })
        });
      }
    }
    let E = new Map();
    for (let T of e.references) {
      if (e.strippedReferenceKeys.has(q(T))) continue;
      let b = ee(T.toolName, (O) => o.has(O) || e.kept.has(O)),
        x = o.get(b);
      if (e.kept.has(b) || !x || !("defer_loading" in x.schema) || x.schema.defer_loading !== !0)
        continue;
      let M = E.get(b);
      if (M === void 0) ((M = { schema: x.schema, isMcp: x.isMcp }), E.set(b, M));
      s.set(T, { kind: "sent", entry: M });
    }
  } catch (d) {
    (l(d), m("mcp_kept_deferred_tools", "record_failed"));
  }
}
function x5n(e, n, o) {
  try {
    let r = o?.strippedReferences ?? new Set();
    if ((n.length === 0 && r.size === 0) || !ncn()) return 0;
    let d = VK(),
      s = new Map();
    for (let y of n)
      if (Ydn(y) && !s.has(y.name)) s.set(y.name, { schema: y, isMcp: y.name.startsWith("mcp__") });
    let c;
    if (o?.surfacedCarrier !== void 0) {
      c = new Set();
      for (let y of e) {
        if (
          y.type !== "attachment" ||
          y.attachment.type !== "deferred_tools_delta" ||
          o.surfacedCarrier.nameOnlyAnnouncements.has(y.uuid)
        )
          continue;
        let p = y.attachment.surfacedNames;
        for (let E of Array.isArray(p) ? p : []) if (typeof E === "string" && s.has(E)) c.add(E);
      }
      for (let y of c) o.surfacedCarrier.surfacedOnWire.add(y);
    }
    let u = 0,
      R = new Set();
    for (let y of wye(e, { surfacedOnWire: c })) {
      let p = d.get(y);
      if (r.has(q(y))) {
        if (p?.kind !== "stripped") (d.set(y, { kind: "stripped" }), u++);
        continue;
      }
      if (p !== void 0) continue;
      let E = ee(y.toolName, (b) => s.has(b)),
        T = s.get(E);
      if (T === void 0) continue;
      (d.set(y, { kind: "sent", entry: T }), R.add(E), u++);
    }
    if (u > 0)
      t(
        `Dynamic tool loading: seeded ${u} tool reference(s) to ${R.size} deferred tool(s) the previous process sent`
      );
    return u;
  } catch (r) {
    return (l(r), m("mcp_kept_deferred_tools", "seed_failed"), 0);
  }
}
function Dn(e, n) {
  if ($e(e, n)) return !0;
  let o = { ...e };
  for (let r of le) if (!(r in n)) delete o[r];
  return $e(o, n);
}
function s2s(e, n, o, r, d, s) {
  try {
    if (n.size === 0 || !VDe()) return;
    let c = VK();
    if (c.generation !== s) return;
    if (!be(Jo(d), d)) return;
    let u = new Map();
    for (let R of wye(e, { surfacedOnWire: n })) {
      if (c.get(R) !== void 0) continue;
      let y = ee(R.toolName, (T) => r?.kept.has(T) === !0 || o.has(T)),
        p = r?.kept.get(y) ?? o.get(y);
      if (!p || !("defer_loading" in p.schema) || p.schema.defer_loading !== !0) continue;
      let E = u.get(y);
      if (E === void 0) ((E = { schema: p.schema, isMcp: p.isMcp }), u.set(y, E));
      c.set(R, { kind: "sent", entry: E });
    }
  } catch (c) {
    (l(c), m("mcp_kept_deferred_tools", "record_failed"));
  }
}
function i2s(e, n) {
  try {
    let o = qe(n);
    for (let r = 0; r < e.length; r++) {
      let d = o.get(e[r].name);
      if (d !== void 0 && Ydn(d)) e[r] = d;
    }
  } catch (o) {
    l(o);
  }
}
function a2s(e, n) {
  try {
    let o = VK();
    if (!e.writes || o.generation !== e.generation) return;
    let r = qe(n),
      d = new Map();
    for (let s of e.references) {
      if (e.strippedReferenceKeys.has(q(s))) continue;
      let c = ee(s.toolName, (p) => r.has(p)),
        u = r.get(c),
        R = o.get(s);
      if (u === void 0 || R?.kind !== "sent" || Dn(R.entry.schema, u)) continue;
      let y = d.get(c);
      if (y === void 0) ((y = { schema: u, isMcp: R.entry.isMcp }), d.set(c, y));
      o.set(s, { kind: "sent", entry: y });
    }
  } catch (o) {
    (l(o), m("mcp_kept_deferred_tools", "record_failed"));
  }
}
function be(e, n) {
  return e === "main" || (e === "subagent" && n !== UXs);
}
function TLo(e) {
  return be(Jo(e), e);
}
function qe(e) {
  let n = new Map();
  for (let o of e)
    if ("defer_loading" in o && o.defer_loading === !0 && "name" in o && typeof o.name === "string")
      if ("cache_control" in o) {
        let { cache_control: r, ...d } = o;
        n.set(o.name, d);
      } else n.set(o.name, o);
  return n;
}
function OS(e, n, o) {
  return Rn(e, n, o);
}
var _7e = "authenticate",
  Jdn = "complete_authentication";
function y$r(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = e;
  return (
    typeof n.name === "string" &&
    (n.errorCode === void 0 || typeof n.errorCode === "string") &&
    (n.error === void 0 || typeof n.error === "string")
  );
}
var Pn = 200;
function co(e, n = 64) {
  if (typeof e !== "string") return "";
  return jl(pW(e).replace(/['`]/g, " "), n, "none");
}
function Qzs(e, n = 1024) {
  return jl(e, n);
}
function jl(e, n = Pn, o = "all") {
  if (typeof e !== "string") return "";
  let r = eQo(pW(e))
      .replaceAll(
        /[<>";\u2018\u2019\u201A\u201C\u201D\u201E\u00AB\u00BB\u2039\u203A\u2329\u232A\u27E8\u27E9\u27EA\u27EB\u3008\u3009\u300A\u300B]/g,
        " "
      )
      .replaceAll(/\s+/g, " ")
      .trim(),
    d = Math.max(ye, n + nn),
    s = r.length > d,
    c = Qdn(s ? re(r, d) : r, o);
  return s || c.length > n ? `${re(c, n)}\u2026` : c;
}
var Qe = 500;
function bw(e) {
  let n = eQo(e).replaceAll(/\s+/g, " ").trim(),
    o = Qdn(n.length > ye ? re(n, ye) : n);
  return o.length > Qe ? `${re(o, Qe)}\u2026` : o;
}
var oe = String.raw`(?:access[-_ ]?|refresh[-_ ]?|id[-_ ]?|client[-_ ]?|api[-_ ]?|x[-_]api[-_ ]?|session[-_ ]?|auth[-_ ]?)?(?:token|key|secret|password|authorization|credential)s?`,
  vn = String.raw`\b${oe}(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${oe}=*(?![A-Za-z0-9._~+/=%-]))(?=[A-Za-z0-9._~+/=%-]{8})[A-Za-z]*[0-9._~+/=%-]`,
  en = String.raw`(?:[A-Za-z0-9._~+/=%-]+?(?=${vn})|[A-Za-z0-9._~+/=%-]{8,})`,
  Bn = new RegExp(
    String.raw`(?:\b|(?<=\\[A-Za-z"']))(bearer|basic)(?![\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?${oe}=*(?![A-Za-z0-9._~+/=%-]))[\s:=\uFF1A\uFF1D]+(?:(?:\\*["']|\\+)\s*)?(${en})`,
    "gi"
  ),
  Ln = new RegExp(
    String.raw`(?:\b|(?<=\\[A-Za-z"']))(${oe})(?:\\*["']|\\+)?\s*[:=\uFF1A\uFF1D]\s*(?:\\*["']|\\+)?\s*(?!=*${oe}=*(?![A-Za-z0-9._~+/=%-]))(${en})`,
    "gi"
  );
function Ze(e, n, o, r, d) {
  if (!/[0-9._~+/=%-]/.test(o)) return e;
  return /\w/.test(d[r + e.length] ?? "") ? `${n} [redacted] ` : `${n} [redacted]`;
}
function Qdn(e, n = "all") {
  if (n === "none") return e;
  return e.replace(Bn, Ze).replace(Ln, Ze);
}
var In =
    /^(?:bearer|basic|(?:access|refresh|id|client|api|x[-_]api|session|auth)?[-_ ]?(?:token|key|secret|password|authorization|credential)s?)$/i,
  Fn =
    /(?:^|[^A-Za-z0-9_\s])(?:bearer|basic|token|key|secret|password|authorization|credential)s?$/i;
function jn(e) {
  let n = e.split(/[:=\uFF1A\uFF1D]+/).map((r) => r.trim()),
    o = 0;
  for (let [r, d] of n.entries()) {
    if (d === "") continue;
    let s = r < n.length - 1 || d.startsWith("-");
    if (!In.test(d) && !(s && Fn.test(d))) return !1;
    o++;
  }
  return o > 0;
}
var ye = 2000,
  nn = 512,
  Je = ye + nn,
  Un = 32,
  Vn = 262144,
  Wn = 131072,
  Kn = 8192,
  Hn = 65536,
  $n = /^(?:[\p{Cc}\p{Cf}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs})$/u;
function _$r(e) {
  let n = e.errorCode ? ` (${e.errorCode})` : "",
    o = e.error ? `: "${e.error}"` : "";
  return `${e.name}${n}${o}`;
}
var ore = "Blocked by enterprise managed policy",
  ELo = "Disabled by disableClaudeAiConnectors setting",
  Zzs = "Not approved for this project - approve it via /mcp first",
  Zdn = "Refused - Claude Code reserves this address for its own use",
  R5n = "Account changed while connecting - reconnect to use it",
  Dyt = "Disabled in /mcp",
  zn = new Set([ore, ELo]);
function ecn(e) {
  return e !== void 0 && zn.has(e);
}
function tcn(e) {
  return e === Zdn;
}
function RO(e) {
  return e.type === "failed" && e.errorCode === "UNCONFIGURED";
}
function aU(e) {
  return e.type === "failed" && e.errorCode === "404" && e.name === Id && Vd(e.config);
}
function b$r(e, n = () => !1) {
  return e
    .filter((o) => o.type === "failed")
    .filter((o) => !RO(o))
    .filter((o) => !aU(o))
    .filter((o) => !0)
    .map((o) => ({
      name: jl(o.name),
      ...(o.errorCode !== void 0 && { errorCode: jl(o.errorCode) }),
      ...((o.error !== void 0 || o.displayDetail !== void 0) && {
        error: [o.error, o.displayDetail]
          .filter((r) => Boolean(r))
          .map((r) => jl(r))
          .join(" ")
      }),
      ...(n(o) && { willRetry: !0 })
    }));
}
function Yn(e, n) {
  if (!e || !n || !e.includes("${")) return [];
  let o = Xvn(e);
  if (o.length < 2) return [];
  if (n.length > 2000 || o.length > 9) return [];
  let r = o.map(di),
    d = [];
  if (o.length === 2) {
    let [s = "", c = ""] = o;
    if (n.length >= s.length + c.length && n.startsWith(s) && n.endsWith(c))
      d.push(n.slice(s.length, n.length - c.length));
  } else if (o.length === 3) {
    let [s = "", c = "", u = ""] = o;
    if (n.startsWith(s) && n.endsWith(u)) {
      let R = n.slice(s.length, n.length - u.length);
      if (c === "") d.push(R);
      else {
        let y = [];
        for (let E = R.indexOf(c); E !== -1 && y.length <= 64; E = R.indexOf(c, E + 1)) y.push(E);
        let p = y.length > 64 ? [y[0] ?? 0, R.lastIndexOf(c)] : y;
        for (let E of p) d.push(R.slice(0, E), R.slice(E + c.length));
      }
    }
  } else {
    for (let u = 1; u < o.length - 1; u++) if (o[u] === "") return [];
    let s = "^";
    for (let u = 0; u < r.length; u++)
      if (((s += r[u]), u < r.length - 1)) {
        let R = o[u + 1] ?? "";
        if (R === "") s += "([\\s\\S]*)";
        else {
          let y = R.charAt(0).replace(/[.*+?^${}()|[\]\\-]/g, "\\$&");
          s += `([^${y}]*)`;
        }
      }
    let c = n.match(new RegExp(s + "$"));
    if (c) d.push(...c.slice(1).filter((u) => u !== ""));
  }
  return L(d);
}
function Gn(e, n) {
  if (!e) return [];
  let o = [],
    r = (d, s) => {
      if (typeof d === "string" && typeof s === "string") o.push(...Yn(d, s));
    };
  if ("url" in e && "url" in n) r(e.url, n.url);
  if ("command" in e && "command" in n) {
    r(e.command, n.command);
    let d = Array.isArray(e.args) ? e.args : [],
      s = Array.isArray(n.args) ? n.args : [];
    for (let c = 0; c < Math.min(d.length, s.length); c++) r(d[c], s[c]);
  }
  for (let d of ["headers", "env"]) {
    let s = d in e ? e[d] : void 0,
      c = d in n ? n[d] : void 0;
    if (s && c && typeof s === "object" && typeof c === "object")
      for (let [u, R] of Object.entries(s)) r(R, c[u]);
  }
  return o;
}
function Qn(e, n) {
  for (let o of n) {
    if (o.length <= e.length) return !1;
    if (o.startsWith(e)) return !0;
  }
  return !1;
}
function e2s(e, n, o, r) {
  let d = o ?? "[mcp-endpoint]",
    s = new TextDecoder("utf-8", { fatal: !1 }),
    c = (h) =>
      h.replace(/(?:%[0-9A-Fa-f]{2})+/g, (S) =>
        s.decode(Uint8Array.from(S.match(/[0-9A-Fa-f]{2}/g) ?? [], (C) => parseInt(C, 16)))
      ),
    u = new Map(),
    R = (h) => {
      if (
        h ===
          `
` ||
        h === "\t"
      )
        return !1;
      if (h.length === 1) {
        let C = h.charCodeAt(0);
        if (C >= 55296 && C <= 57343) return !0;
      }
      let S = u.get(h);
      if (S === void 0) ((S = $n.test(h)), u.set(h, S));
      return S;
    },
    y = (h) => {
      let S = "",
        C = 0;
      while (C < h.length) {
        if (h[C] !== "%") {
          ((S += h[C]), C++);
          continue;
        }
        let w = [],
          D = C + 1,
          V = !1;
        while (D < h.length && w.length < 2) {
          let j = String.fromCodePoint(h.codePointAt(D) ?? 0);
          if (/^[0-9A-Fa-f]$/.test(j)) (w.push(j), (D += j.length));
          else if ((R(j) && !/[\n\t]/.test(j)) || /^\p{M}$/u.test(j)) ((V = !0), (D += j.length));
          else break;
        }
        if (w.length === 2 && V) ((S += "%" + w.join("")), (C = D));
        else ((S += "%"), C++);
      }
      return S;
    },
    p = 0,
    E = (h) => {
      let S = h,
        C = 0;
      for (let w = 0; w <= Un; w++) {
        if (((C += S.length), (p += w === 0 ? 0 : S.length), C > Vn || p > Wn)) break;
        let D = pW(c(y(S)));
        if (D === S) return S;
        S = D;
      }
      throw Error("MCP error text or config too long or too deeply encoded");
    },
    T = new Map(),
    b = (h) => {
      let S = T.get(h);
      if (S === void 0)
        ((S = /\p{M}/u.test(h.normalize("NFD"))
          ? [...h.normalize("NFD")].filter((C) => !/\p{M}/u.test(C)).join("")
          : h),
          T.set(h, S));
      return S;
    },
    x = new Map(),
    M = (h) => {
      let S = x.get(h);
      if (S === void 0)
        ((S = [...E(h)]
          .filter((C) => !R(C))
          .map(b)
          .join("")),
          x.set(h, S));
      return S;
    },
    O = e.length > Je,
    A = /%[%0-9A-Fa-f]{0,11}$/,
    B = O
      ? E(re(e, Je).replace(A, ""))
          .replace(A, "")
          .replace(/\uFFFD+$/, "")
      : E(e);
  if (B.length > Kn) throw Error("MCP error text too long once decoded");
  let P = "",
    W = "",
    z = [];
  for (let h of B) {
    if (R(h)) {
      W += " ";
      continue;
    }
    let S = b(h);
    for (let C = 0; C < S.length; C++) z.push(W.length + Math.min(C, h.length - 1));
    ((P += S), (W += h));
  }
  z.push(W.length);
  let Q = [],
    Y = (h, S, C) => {
      let w = h === void 0 ? void 0 : M(h);
      if (!w || w.length < 4) return;
      if (S !== "[redacted]" && S.includes(w)) return;
      Q.push([w, S, C?.wordBoundary === !0]);
    },
    X = (h, S = d) => {
      let C = h === void 0 ? void 0 : M(h);
      if (C && (S.includes(C) || jn(C.trim()))) return;
      Y(C, "[redacted]");
    },
    K = (h, S = d) => {
      if (!h) return;
      if ((X(h, S), h.includes("+"))) X(h.replaceAll("+", " "), S);
      if (h.includes(" ")) X(h.replaceAll(" ", "+"), S);
      for (let C of [h, h.replaceAll("+", " ")]) {
        let w = C.split(/\s+/);
        if (w.length > 1) for (let D of w) X(D, S);
      }
    },
    Ce = (h, S) => {
      Y(h, S);
      let C = URL.parse(h);
      if (C === null) return;
      if ((Y(C.href, S), C.origin !== "null")) Y(C.origin, S);
      (Y(C.host, S), Y(C.hostname, S));
      let w = C.hostname.replace(/^\[|\]$/g, "");
      if (w !== C.hostname) Y(w, S);
      (K(C.username, S), K(C.password, S), X(C.pathname !== "/" ? C.pathname : void 0, S));
      for (let D of C.pathname.split("/")) K(D, S);
      X(C.search, S);
      for (let [D, V] of C.searchParams.entries()) (K(D, S), K(V, S));
      for (let D of C.search.replace(/^\?/, "").split("&")) {
        let V = D.indexOf("=");
        if (V === -1) K(D, S);
        else (K(D.slice(0, V), S), K(D.slice(V + 1), S));
      }
    };
  for (let h of Gn(r, n)) K(h);
  if ("url" in n && typeof n.url === "string") Ce(n.url, d);
  if ("oauth" in n && typeof n.oauth?.authServerMetadataUrl === "string") {
    let h = n.oauth.authServerMetadataUrl,
      S = "[redacted]";
    try {
      let C = new URL(h).origin;
      if (C !== "null") S = C;
    } catch {}
    Ce(h, S);
  }
  if ("command" in n && typeof n.command === "string") {
    let h = r && "command" in r && typeof r.command === "string" ? u$e(r.command) : void 0;
    if ((Y(n.command, h ?? d, { wordBoundary: !0 }), Array.isArray(n.args)))
      for (let S of n.args) K(S);
  }
  if ("headers" in n && n.headers) for (let h of Object.values(n.headers)) K(h);
  if ("env" in n && n.env) for (let h of Object.values(n.env)) K(h);
  if ("authToken" in n && typeof n.authToken === "string") K(n.authToken);
  if (Q.length === 0) return O ? `${W}\u2026` : e;
  Q.sort((h, S) => S[0].length - h[0].length);
  let ie = new Map();
  for (let [h, S, C] of Q) {
    let w = ie.get(h);
    if (!w) ie.set(h, { replacement: S, wordBoundary: C });
    else if (w.replacement === "[redacted]" && S !== "[redacted]")
      ie.set(h, { replacement: S, wordBoundary: w.wordBoundary && C });
  }
  let Te = new Int32Array(P.length),
    Oe = [],
    xe = new Set(),
    dn = 0,
    ln = P.toUpperCase();
  for (let [h, S] of ie) {
    if (!ln.includes(h.toUpperCase())) continue;
    let C = S.wordBoundary && /^[\w-]+$/.test(h),
      w = `${C}:${h.replace(/[a-z]+/g, (I) => I.toUpperCase())}`;
    if (xe.has(w)) continue;
    xe.add(w);
    let D = di(h),
      V = C ? `(?<![\\w:.-])${D}(?![\\w:.-])` : D,
      j = new RegExp(V, "gi");
    for (let I = j.exec(P); I !== null; I = j.exec(P)) {
      if (++dn > Hn) throw Error("MCP error text repeats too much of the config");
      let v = I.index + I[0].length;
      if (v > (Te[I.index] ?? 0)) ((Te[I.index] = v), (Oe[I.index] = S.replacement));
      j.lastIndex = I.index + 1;
    }
  }
  let _e = [];
  for (let [h, S] of Te.entries()) {
    if (S === 0) continue;
    let C = _e.at(-1);
    if (C && h < C.end) C.end = Math.max(C.end, S);
    else _e.push({ start: h, end: S, replacement: Oe[h] ?? "" });
  }
  let H = P.length;
  if (O) {
    let h = H,
      S = 12;
    while (h > 0 && H - h < S && /[%0-9A-Fa-f\uFFFD]/.test(P[h - 1] ?? "")) h--;
    if (h < H && /[%\uFFFD]/.test(P.slice(h, H))) {
      let v = P.slice(h, H).search(/[%\uFFFD]/);
      H = h + v;
    }
    let C = Q[0]?.[0].length ?? 0,
      w = Math.max(0, H - (C - 1)),
      D = L(Q.map(([v]) => v.toUpperCase())).sort((v, ae) => ae.length - v.length),
      V = P.slice(w, H),
      j = [],
      I = "";
    for (let v of V) (j.push(I.length, ...(v.length === 2 ? [-1] : [])), (I += v.toUpperCase()));
    for (let v = 0; v < V.length; v++) {
      let ae = j[v] ?? 0,
        cn = ae === -1 ? V.charAt(v) + I.slice(j[v + 1] ?? I.length) : I.slice(ae);
      if (Qn(cn, D)) {
        H = w + v;
        break;
      }
    }
  }
  let Me = (h) => (h === 0 ? 0 : (z[h - 1] ?? 0) + 1),
    G = "",
    se = 0;
  for (let h of _e) {
    if (h.start >= H) break;
    ((G += W.slice(Me(se), z[h.start]) + h.replacement), (se = h.end));
  }
  if (se < H) G += W.slice(Me(se), z[H]);
  let we = G.charCodeAt(G.length - 1);
  if (we >= 55296 && we <= 56319) G = G.slice(0, -1);
  return O ? `${G}\u2026` : G;
}
var ALo = "bypassPermissions not supported in restricted mode";
function l2s(e) {
  return e.restricted &&
    (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions)
    ? ALo
    : void 0;
}
function d2s(e) {
  return e.some((n) => n.startsWith("preset:")) ? new Set() : new Set(e);
}
function scn(e, n) {
  let o = [...e, qn].filter((s) => !n.has(s)),
    r = [...(n.has(Be) ? [] : [_4e]), ...(n.has(qn) ? [] : [gar])],
    d = [
      ...[...rvn].map((s) => Xo(s, Dor)),
      ...lir.map((s) => Xo(zo, `${s}${Dor}`)),
      Xo(ufe, `${ovn}${Dor}`)
    ];
  return [...o, ...r, Hrt, tai, ...d];
}
var Xn = ["default"];
function w$r(e) {
  let n = e.toLowerCase();
  if (!Xn.includes(n)) return null;
  return n;
}
function P5n(e) {
  return new Set([...e.filter((n) => n.enablesCodeExecution).map((n) => n.name), At]);
}
function v$r(e) {
  return e.filter((n) => n.isEnabled()).map((n) => n.name);
}
function TQ(e, n) {
  let o = h$r(e),
    r = [...Pd(n), ...eo(e, n)],
    d = Emn(n, r);
  return e.filter((s) => {
    if (
      on(n, s, r, d) ||
      s.mcpInfo?.effectiveMaxPermission === "blocked" ||
      (!o && s.mcpInfo?.standardKey !== void 0)
    )
      return !1;
    if (!uBt(n, s)) return !0;
    if (qi().claim(`tool_outside_launch_list:${s.name}`))
      (t(
        `${Ig(s)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`,
        { level: "warn" }
      ),
        a("tengu_tool_withheld_outside_launch_list", { toolName: Nn(Ig(s)) }));
    return !1;
  });
}
function uBt({ toolsKeptByLaunchList: e }, n) {
  return !(
    e === void 0 ||
    Zh(n) ||
    n.mcpInfo !== void 0 ||
    EG(n) ||
    YG(n) ||
    e.includes(n.name) ||
    (n.familyParentToolName !== void 0 && e.includes(n.familyParentToolName))
  );
}
function b7e(e, n, o = Pd(e), r) {
  return on(e, n, o, r);
}
function on(e, n, o, r) {
  let d = (s) => (r !== void 0 ? WAe(e, r, s) : oo(e, s, o) !== null);
  if (d(n)) return !0;
  if (n.underlyingV1ToolName && d({ name: n.underlyingV1ToolName })) return !0;
  if (n.mcpInfo === void 0) {
    let s = HTe(n.name);
    if (s !== void 0 && d(s) && s.isEnabled()) return !0;
  }
  if (EG(n) && Zn(e, o)) return !0;
  if (n.mcpInfo === void 0 && pBt().includes(n.name) && ke(e, o) !== null) return !0;
  return !1;
}
function fBt(e, n) {
  if (!yrs().has(n.name)) return !1;
  if (Ks("hipaa")) return !1;
  let o = Pd(e).filter((r) => r.source !== "toolsNarrowing");
  return !b7e(e, n, o);
}
function Zn(e, n) {
  return n.some((o) => o.ruleValue.toolName === Be);
}
function pBt() {
  return [
    Gs,
    import.meta.require(
      __sourceFilePath_517ec12a51703291(
        new __sourceFilePath_517ec12a51703291_URL("./chunk-ttpzppxt.js", import.meta.url)
      )
    ).APPIFACT_REPL_TOOL_NAME
  ];
}
function ke(e, n) {
  return Jn(
    e,
    n.filter((o) => o.source !== "toolsNarrowing")
  );
}
function icn(e, n) {
  let o = ke(e, Pd(e));
  if (o !== null)
    return {
      rule: o,
      verdict: {
        behavior: "deny",
        message: `Permission to use ${n} has been denied: it runs code as ${Be} does, and a rule denies ${Be}.`,
        decisionReason: { type: "rule", rule: o }
      }
    };
  let r = ke(e, hu(e));
  return r === null
    ? null
    : {
        rule: r,
        verdict: {
          behavior: "ask",
          message: `${n} runs code as ${Be} does, and a rule asks before ${Be} runs.`,
          decisionReason: { type: "rule", rule: r }
        }
      };
}
function Jn(e, n) {
  let o = e.toolAliases?.[Be],
    r = [Be, ...(o !== void 0 ? [o] : [])];
  for (let d of r) {
    let s = oo(e, { name: d }, n);
    if (s !== null) return s;
  }
  return (
    n.find(
      (d) =>
        r.includes(d.ruleValue.toolName) &&
        d.ruleValue.ruleContent !== void 0 &&
        wjo(d.ruleValue.ruleContent)
    ) ?? null
  );
}
function eo(e, { restricted: n, toolsKeptByLaunchList: o }) {
  if (!(n === !0 && o === void 0)) return [];
  let r = new Set([...e.filter((d) => d.enablesCodeExecution).map((d) => d.name), At]);
  return scn(r, new Set()).map((d) => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: { toolName: d }
  }));
}
function E$r(e) {
  switch (e.kind) {
    case "policy_blocked":
    case "reserved_address":
    case "org_blocked":
    case "denied":
    case "disabled":
    case "switched_off":
    case "not_configured":
    case "replaced":
      return !0;
    case "reconnecting":
    case "needs_auth":
    case "disconnected":
    case "auth_completed":
    case "not_offered":
    case "withdrawn":
      return !1;
  }
}
function k$r(e) {
  return E$r(e) && e.kind !== "replaced";
}
function DTe(e, n, o, r, d = zye(o)) {
  let s = r?.mcpInfo;
  if (s === void 0 && Nr(e) === null) {
    let p = {
      ...r,
      name: e,
      underlyingV1ToolName: vde(e),
      familyParentToolName: r?.familyParentToolName
    };
    if (b7e(o, p, d.rules, d.index) && !fBt(o, p)) return { kind: "denied", serverName: void 0 };
    return YWo(p) ? { kind: "replaced" } : { kind: "withdrawn" };
  }
  let c =
      s === void 0
        ? WAe(o, d.index, { name: e })
        : b7e(o, { name: e, mcpInfo: s }, d.rules, d.index),
    R = tn(e, n, s).map(({ row: p, upstream: E }) => no(p, E, c)),
    y =
      R.find(E$r) ?? R.find((p) => p.kind === "not_offered" || p.kind === "auth_completed") ?? R[0];
  if (y) return y;
  return c ? { kind: "denied", serverName: void 0 } : { kind: "not_configured" };
}
function c2s(e, n) {
  return tn(e, n, void 0)
    .filter(({ row: o }) => o.type === "pending")
    .map(({ row: o }) => o.name);
}
function tn(e, n, o) {
  if (o !== void 0) {
    let s = En(o.toolName);
    return n.filter((c) => c.name === o.serverName).map((c) => ({ row: c, upstream: s }));
  }
  let r = n.map((s) => ({ row: s, prefix: io(s.name) })).filter(({ prefix: s }) => e.startsWith(s)),
    d = Math.max(0, ...r.map(({ prefix: s }) => s.length));
  return r
    .filter(({ prefix: s }) => s.length === d)
    .map(({ row: s, prefix: c }) => ({ row: s, upstream: e.slice(c.length) }));
}
function no(e, n, o) {
  let r = jl(e.name);
  if (o) return { kind: "denied", serverName: r };
  if (to(e, n)) return { kind: "org_blocked", serverName: r };
  switch (e.type) {
    case "pending":
      return { kind: "reconnecting", serverName: r };
    case "needs-auth":
      return { kind: "needs_auth", serverName: r };
    case "failed":
      if (ecn(e.error)) return { kind: "policy_blocked", serverName: r };
      if (tcn(e.error)) return { kind: "reserved_address", serverName: r };
      return RO(e) ? { kind: "not_configured" } : { kind: "disconnected", serverName: r };
    case "disabled":
      return { kind: e.config.type === "sdk" ? "switched_off" : "disabled", serverName: r };
    case "connected":
    case "cached":
      if (kze(e)) return { kind: "switched_off", serverName: r };
      return n === _7e || n === Jdn
        ? { kind: "auth_completed", serverName: r }
        : { kind: "not_offered", serverName: r };
  }
}
function to(e, n) {
  if (!("toolPermissions" in e.config)) return !1;
  let o = e.config.toolPermissions;
  if (!o) return !1;
  return Object.entries(o).some(([r, d]) => d === "blocked" && En(r) === n);
}
function zhe() {
  return Ef();
}
class AQ {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = { only: new Map(), order: [] }) {
    ((this.names = n.names ?? [...e.map((o) => o.name), ...n.only.keys()]),
      (this.recordedOnly = n.only),
      (this.recordOrder = n.order),
      (this.#e = new Map(e.map((o) => [o.name, o]))));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== qa;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new AQ(
      [...this.#e.values()].filter((n) => !e.has(n.name)),
      {
        only: new Map([...this.recordedOnly].filter(([n]) => !e.has(n))),
        order: this.recordOrder.filter((n) => !e.has(n)),
        names: this.names.filter((n) => !e.has(n))
      }
    );
  }
  sourceFor(e) {
    let n = this.#e.get(e),
      o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return sn(e, o);
  }
}
function CLo(e) {
  return e ?? ps();
}
function Khe(e) {
  let n = e.declaredTools;
  return n instanceof AQ ? n : void 0;
}
function acn(e) {
  let n = e.noChannelTools;
  return n instanceof AQ ? n : void 0;
}
function RLo(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !zhe()) return;
  let r = o();
  return ((e.noChannelTools = r), r);
}
function xLo(e, n, o) {
  let r = new Set([...n, ...e].map((p) => p.name)),
    d = new Map([...(o ?? [])].filter(([p]) => !r.has(p)));
  if (d.size === 0) return new AQ(e);
  let s = (p) => p.isMcp === !0 || Nr(p.name) !== null,
    c = e.findIndex(s),
    u = (p, E) => !s(p) && ((p.name === qa && E === e.length - 1) || (c !== -1 && E > c)),
    R = [...e.filter(s).map((p) => p.name), ...d.keys()].sort((p, E) =>
      Xye({ name: p }, { name: E })
    ),
    y = [
      ...e.filter((p, E) => !s(p) && !u(p, E)).map((p) => p.name),
      ...R,
      ...e.filter(u).map((p) => p.name)
    ];
  return new AQ(e, { only: d, order: y, names: y });
}
var ro = new Set(["name", "description", "input_schema", "type", ...le]);
async function u2s(
  {
    recordedToolDescriptions: e,
    recordedToolServers: n,
    recordedToolEntries: o,
    mcpClients: r = [],
    getToolPermissionContext: d
  },
  s,
  c
) {
  if (e === void 0 || e.has(ki) || !zhe()) return;
  let u = new Set(s.map((T) => T.name)),
    R = [];
  for (let T of e.keys()) {
    let b = o?.get(T),
      x = n?.get(T);
    if (
      !u.has(T) &&
      c?.has(T) !== !0 &&
      b !== void 0 &&
      x !== void 0 &&
      T.startsWith(io(x)) &&
      b.name === T &&
      /^[a-zA-Z0-9_-]+$/.test(T) &&
      Object.keys(b).every((M) => ro.has(M))
    )
      R.push({ name: T, entry: b, server: x });
  }
  if (R.length === 0) return;
  let y = await d(),
    p = new Map(),
    E;
  for (let { name: T, entry: b, server: x } of R)
    try {
      if (((E ??= zye(y)), DTe(T, r, y, sn(T, x), E).kind === "reconnecting"))
        p.set(T, { entry: b, server: x });
    } catch (M) {
      l(N(M));
    }
  return p.size === 0 ? void 0 : p;
}
async function f2s(e, n, { mcpClients: o, getPermissionContext: r, byValue: d }) {
  let s = I5n(e, n, !0);
  if (s.length === 0) return { kept: e, unread: 0 };
  let c = Ks("hipaa"),
    u = (b) => c && !he(b, e.sourceFor(b)?.mcpInfo?.serverName),
    R = (b) => d?.has(b) === !0 || u(b),
    y;
  try {
    y = await r();
  } catch (b) {
    l(N(b));
    let x = new Set(s.filter(R));
    return { kept: x.size === 0 ? e : e.without(x), unread: 0 };
  }
  let p = 0,
    E,
    T = new Set(
      s.filter((b) => {
        if (R(b)) return !0;
        try {
          return ((E ??= zye(y)), k$r(DTe(b, o, y, e.sourceFor(b), E)));
        } catch (x) {
          return (l(N(x)), p++, !0);
        }
      })
    );
  return { kept: T.size === 0 ? e : e.without(T), unread: p };
}
function VGe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return CLo(e.stickyBetas);
}
function S7e(e) {
  let n = VGe(e);
  return n === void 0 ? void 0 : Khe(n);
}
function lcn(e) {
  let n = VGe(e);
  return n === void 0 ? void 0 : acn(n);
}
function p2s(e, n) {
  if ((mCt(e), e.declaredTools !== void 0 || !zhe())) return !1;
  return (uTn(e, new AQ(n)), !0);
}
function so(e, n, { servers: o, entries: r } = ao, d) {
  let s = new Map(n.map((O) => [O.name, O])),
    c,
    u = () => ((c ??= rj() ?? null), c ?? void 0),
    R = (O) => {
      let A = u()?.find((B) => Rt(B, O))?.underlyingV1ToolName;
      return A === void 0 ? void 0 : s.get(A);
    },
    y = new Map(),
    p = new Map(),
    E = 0,
    T = 0,
    b = 0,
    x = (O) => {
      return;
    },
    M = [...e];
  for (let O of M) {
    let A = s.get(O) ?? x(O) ?? R(O);
    if (A === void 0) {
      let P = r?.get(O),
        W = o?.get(O);
      if (P === void 0 || go(O, W, u())) continue;
      if (lo(O, W, u(), n)) p.set(O, { entry: P, server: W });
      else {
        let z = fo(O, u(), d);
        if (z === "launch_omitted") (p.set(O, { entry: P, server: W }), b++);
        else if (z === "gate_off") {
          if ((p.set(O, { entry: P, server: W }), E++, uo(O, u()))) T++;
        }
      }
      continue;
    }
    y.set(A.name, A);
    let B = A.underlyingV1ToolName === void 0 ? void 0 : s.get(A.underlyingV1ToolName);
    if (B !== void 0) y.set(B.name, B);
  }
  for (let O of n)
    if (O.underlyingV1ToolName !== void 0 && y.has(O.underlyingV1ToolName)) y.set(O.name, O);
  for (let O of y.keys()) p.delete(O);
  return y.size === 0 && p.size === 0
    ? void 0
    : {
        held: new AQ(
          n.filter((O) => y.has(O.name)),
          { only: p, order: M }
        ),
        recorded: M.length,
        gateOff: E,
        needsUser: T,
        launchOmitted: b
      };
}
function mBt(e, n, o, { latch: r, permissionContext: d }) {
  let s = Khe(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (r) mCt(e);
  if (e.declaredTools !== void 0 || !zhe()) return;
  let c = n(),
    u = c === void 0 ? void 0 : so(c.names, o, c, d);
  if (u === void 0 || !r) return u?.held;
  return (
    uTn(e, u.held),
    a("tengu_declared_tool_set_from_record", {
      recorded: u.recorded,
      held: u.held.names.length - u.held.recordedOnly.size,
      heldByName: u.held.recordedOnly.size,
      heldGateOff: u.gateOff,
      heldNeedsUser: u.needsUser,
      heldLaunchOmitted: u.launchOmitted
    }),
    u.held
  );
}
function T$r(e, n) {
  if (n === void 0) return { tools: e, redeclared: [] };
  let o = new Set(e.map((c) => c.name)),
    r = (c) => (o.has(c) || !n.keeps(c) ? void 0 : n.toolFor(c));
  if (n.names.every((c) => r(c) === void 0)) return { tools: e, redeclared: [] };
  let d = [...e],
    s = [];
  return (
    n.names.forEach((c, u) => {
      let R = r(c);
      if (!R) return;
      let y = -1;
      for (let p = u - 1; p >= 0 && y === -1; p--) {
        let E = n.names[p];
        y = d.findIndex((T) => T.name === E);
      }
      if (y !== -1) d.splice(y + 1, 0, R);
      else {
        let p = d.findIndex((E) => n.has(E.name));
        d.splice(p === -1 ? 0 : p, 0, R);
      }
      (o.add(c), s.push(c));
    }),
    s.length === 0 ? { tools: e, redeclared: s } : { tools: d, redeclared: s }
  );
}
function A$r(e, n) {
  let o = n.turnDeniedTools;
  return T$r(e, o instanceof AQ ? o : void 0).tools;
}
function m2s(e, n) {
  let o = Khe(e);
  if (o === void 0 || n.length === 0) return;
  ((e.declaredTools = o.without(new Set(n))),
    a("tengu_declared_tools_dropped_at_compaction", { dropped: n.length, noDeferredChannel: !1 }));
}
function g2s(e, n) {
  let o = e === void 0 ? void 0 : acn(e);
  return I5n(o, n, !0);
}
function h2s(e, n) {
  let o = acn(e);
  if (o === void 0 || n.length === 0) return;
  ((e.noChannelTools = o.without(new Set(n))),
    a("tengu_declared_tools_dropped_at_compaction", { dropped: n.length, noDeferredChannel: !0 }));
}
function I5n(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map((d) => d.name));
  return e.names.filter((d) => {
    if (r.has(d) || !e.keeps(d)) return !1;
    let s = e.sourceFor(d)?.mcpInfo;
    return o || !he(d, s?.serverName);
  });
}
var ao = { servers: void 0, entries: void 0 };
function lo(e, n, o, r) {
  if (e === qa) return !1;
  if (n !== void 0) return !0;
  if (Nr(e) !== null) return !1;
  if (e === BL && !r.some((d) => Rt(d, ki))) return !0;
  return o !== void 0 && OS(o, e) === void 0;
}
function fo(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === qa || e === BL || Nr(e) !== null) return;
  let r = n.find((d) => d.name === e);
  if (r === void 0 || r.isMcp === !0) return;
  if (!mo() || Ks("hipaa")) return;
  if (b7e(o, r)) return fBt(o, r) ? "launch_omitted" : void 0;
  if (uBt(o, r))
    return o.builtInToolsDisabled === !0 ||
      (o.restricted === !0 && scn(P5n([r]), new Set()).includes(r.name))
      ? void 0
      : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off";
}
function uo(e, n) {
  return n?.find((o) => o.name === e)?.requiresUserInteraction?.() === !0;
}
var po = "tengu_gleaming_cupcake";
function mo() {
  return k(po, !0);
}
var yo = "tengu_joyful_anchor";
function go(e, n, o) {
  if (he(e, n)) return !1;
  let r = k(yo, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let d = o?.find((s) => Rt(s, e));
  return r.some((s) => typeof s === "string" && (s === e || (d !== void 0 && Rt(d, s))));
}
function sn(e, n) {
  let o = io(n);
  return { mcpInfo: { serverName: n, toolName: e.startsWith(o) ? e.slice(o.length) : e } };
}
function he(e, n) {
  return n !== void 0 || Nr(e) !== null;
}
function y2s(
  e,
  n,
  { pool: o, keptDeferred: r, keepMcp: d, requestCarriesStructuredOutputs: s, recordedEntries: c }
) {
  let u = new Set(PLo(n, { pool: o, keptDeferred: r, keepMcp: d }));
  if (u.size === 0) return [];
  let R = new Set(e.map(ge)),
    y = n.recordOrder,
    p = { strict: s, eager: fe(e) },
    E = [];
  return (
    y.forEach((T, b) => {
      let x = n.recordedOnly.get(T);
      if (x === void 0 || R.has(T) || !u.has(T)) return;
      let M = c?.get(T) ?? x.entry,
        O = -1;
      for (let A = b - 1; A >= 0 && O === -1; A--) {
        let B = y[A];
        if (R.has(B)) O = e.findIndex((P) => ge(P) === B) + 1;
      }
      if (O === -1) {
        let A = new Set(y),
          B = e.findIndex((P) => A.has(ge(P) ?? ""));
        O = B === -1 ? 0 : B;
      }
      (e.splice(O, 0, ne(M, p)), R.add(T), E.push(T));
    }),
    E
  );
}
function PLo(e, { pool: n, keptDeferred: o, keepMcp: r }) {
  let d = new Set([...n.map((s) => s.name), ...o]);
  return e.recordOrder.filter((s) => {
    let c = e.recordedOnly.get(s);
    return c !== void 0 && !d.has(s) && (r || !he(s, c.server));
  });
}
function ge(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}
function _2s() {
  return VDe();
}
function b2s(e) {
  let n = new Set();
  for (let o of e) {
    let r = ge(o);
    if (r !== void 0) n.add(r);
  }
  return n;
}
function S2s(e) {
  if (
    e.deferredLate === 0 &&
    e.redeclared === 0 &&
    e.fromRecord === 0 &&
    e.unclassifiedDepartures === 0
  )
    return;
  a("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...(e.queryDepth !== void 0 && { queryDepth: e.queryDepth }),
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures
  });
}
function te(e, n) {
  return w7e(e) && XCe(n);
}
function w7e(e) {
  return pk(e, GS) && !Ee(e);
}
function Ee(e) {
  return Kp(e, pI) || dss() || !VDe();
}
function qDe(e, n) {
  return (pk(e, GS) || (xtr() && !Kp(e, GS))) && !Ee(e) && XCe(n);
}
function w2s(e, n) {
  return O5n(e) && te(e, n);
}
function O5n(e) {
  return pk(e, uS) && !Qdr() && w7e(e);
}
function C$r(e, n) {
  if (Qdr() || Kp(e, uS)) return !1;
  if (pk(e, uS)) return qDe(e, n);
  return !pk(e, GS) && S2t() && qDe(e, n);
}
function R$r(e, n, { toolSearchToolFilteredOut: o, toolPoolRefreshes: r, aheadOfRequest: d }) {
  return o && (d ? qDe(e, n) : te(e, n)) && (Khe(e) !== void 0 || (r && zhe()));
}
function v2s(e, n, o) {
  let r = !pk(e, GS);
  if (n.includes(GS) && !Ee(e)) {
    if ((iF(e, GS), r && n.includes(uS) && !Qdr() && !Kp(e, uS))) iF(e, uS);
  }
  let d = te(e, o),
    s = d && O5n(e),
    c = n;
  if (d && !c.includes(GS)) c = [...c, GS];
  if (!d && c.includes(GS)) c = c.filter((u) => u !== GS);
  if (s && !c.includes(uS)) c = [...c, uS];
  if (!s && c.includes(uS)) c = c.filter((u) => u !== uS);
  return c;
}
function E2s(e, n, o, r) {
  if (te(e, o) && XCe(r)) {
    let d = n.includes(GS) ? n : [...n, GS],
      s = O5n(e);
    if (s && !d.includes(uS)) return [...d, uS];
    return s ? d : d.filter((c) => c !== uS);
  }
  return n.filter((d) => d !== GS && d !== uS);
}
function k2s(
  e,
  n,
  {
    mintModel: o,
    retryModel: r,
    advisorEntryMoved: d,
    deferredEntriesMoved: s,
    hasDeferredChannel: c
  }
) {
  try {
    if (!te(e, o) || XCe(r)) return;
    let u = {
      advisor_entry: d,
      deferred_entries: s,
      announcement_blocks: c && n.some((R) => ho(e, R))
    };
    return Object.values(u).some(Boolean) ? u : void 0;
  } catch (u) {
    l(N(u));
    return;
  }
}
function ho(e, n) {
  if (
    n.type !== "attachment" ||
    n.attachment.type !== "deferred_tools_delta" ||
    e.nameOnlyAnnouncements.has(n.uuid)
  )
    return !1;
  let o = n.attachment.surfacedNames;
  return (
    Array.isArray(o) &&
    o.some((r) => typeof r === "string" && (e.surfacedOnWire.has(r) || e.definedByValue.has(r)))
  );
}
function T2s(e, n, o, r, d = new Set()) {
  if (!r) return;
  let s = !w7e(e);
  for (let c of n) {
    if (
      c.type !== "attachment" ||
      c.attachment.type !== "deferred_tools_delta" ||
      e.nameOnlyAnnouncements.has(c.uuid)
    )
      continue;
    let u = c.attachment.surfacedNames;
    if (
      Array.isArray(u) &&
      u.length > 0 &&
      (s || u.some((R) => typeof R !== "string" || (!o.has(R) && !d.has(R))))
    )
      e.nameOnlyAnnouncements.add(c.uuid);
  }
}
function ILo(
  e,
  n,
  o,
  {
    useToolSearch: r,
    toolSearchAbsent: d,
    blocksEligible: s,
    byValueNames: c = new Set(),
    byValueStaysOut: u
  }
) {
  if (!r && !d) return;
  if (!s) {
    if (!w7e(e)) (e.surfacedOnWire.clear(), e.definedByValue.clear());
    else if (u) e.definedByValue.clear();
    return;
  }
  (e.surfacedOnWire.clear(), e.definedByValue.clear());
  let R = new Set();
  for (let y of o)
    if (y.type === "api_system") {
      for (let p of y.toolRemovals ?? []) e.definedByValue.delete(p);
      for (let p of y.toolAdditions ?? [])
        if (cBt(y.toolDefinitions, p) !== void 0) (R.add(p), e.definedByValue.add(p));
        else e.surfacedOnWire.add(p);
    }
  if (d) return;
  for (let y of n) {
    if (
      y.type !== "attachment" ||
      y.attachment.type !== "deferred_tools_delta" ||
      e.nameOnlyAnnouncements.has(y.uuid)
    )
      continue;
    let p = y.attachment.surfacedNames;
    if (
      Array.isArray(p) &&
      p.some((E) => typeof E === "string" && !e.surfacedOnWire.has(E) && !R.has(E) && !c.has(E))
    )
      e.nameOnlyAnnouncements.add(y.uuid);
  }
}
function A2s(e, n, o, r) {
  if ((OLo(e), n === "header_rejected" || n === "block_type_unknown")) {
    if ((css(), n === "header_rejected")) {
      if ((OCt(GS), r)) (ZXr(), OCt(uS));
    }
  } else if (n === "model_unsupported") bss(Xe(o));
  (t(
    `[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`,
    { level: "warn" }
  ),
    f("mcp_late_tool_additions", `rejected_${n}`));
}
function OLo(e) {
  if (pk(e, GS)) _g(e, GS);
  (an(e), e.surfacedOnWire.clear());
}
function an(e) {
  if (pk(e, uS)) dts(e, uS);
  e.definedByValue.clear();
}
function C2s(e, n) {
  if ((an(e), n === "header_rejected" || n === "unsupported_on_platform")) {
    if ((ZXr(), n === "header_rejected")) OCt(uS);
  }
  (t(
    `[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`,
    { level: "warn" }
  ),
    f("mcp_inline_tools", `rejected_${n}`));
}
function R2s(e, n, o, r = [], d = {}) {
  let s = [
    ...(e ? [{ type: "text", text: e }] : []),
    ...r.map((c) => ({ type: "tool_removal", tool: { type: "tool_reference", name: c } })),
    ...n.map((c) => {
      let u = cBt(d, c);
      return u === void 0
        ? { type: "tool_addition", tool: { type: "tool_reference", name: c } }
        : { type: "tool_addition", tool: { type: "tool_definition", definition: u } };
    })
  ];
  if (o !== void 0 && s.length > 0) s.push({ ...s.pop(), cache_control: o });
  return s;
}
export {
  zzs,
  wLo,
  Vdn,
  Kzs,
  vLo,
  qdn,
  FP,
  m$r,
  Ydn,
  Vzs,
  qzs,
  Myt,
  Yzs,
  g$r,
  cBt,
  Xzs,
  Ghe,
  C5n,
  h$r,
  Xdn,
  Jzs,
  _7e,
  Jdn,
  y$r,
  co,
  Qzs,
  jl,
  bw,
  Qdn,
  _$r,
  ore,
  ELo,
  Zzs,
  Zdn,
  R5n,
  Dyt,
  ecn,
  tcn,
  RO,
  aU,
  b$r,
  e2s,
  t2s,
  EG,
  VDe,
  ncn,
  rcn,
  VK,
  kLo,
  n2s,
  S$r,
  r2s,
  ocn,
  o2s,
  x5n,
  s2s,
  i2s,
  a2s,
  TLo,
  OS,
  ALo,
  l2s,
  d2s,
  scn,
  w$r,
  P5n,
  v$r,
  TQ,
  uBt,
  b7e,
  fBt,
  pBt,
  icn,
  E$r,
  k$r,
  DTe,
  c2s,
  zhe,
  AQ,
  CLo,
  Khe,
  acn,
  RLo,
  xLo,
  u2s,
  f2s,
  VGe,
  S7e,
  lcn,
  p2s,
  mBt,
  T$r,
  A$r,
  m2s,
  g2s,
  h2s,
  I5n,
  y2s,
  PLo,
  _2s,
  b2s,
  S2s,
  w7e,
  qDe,
  w2s,
  O5n,
  C$r,
  R$r,
  v2s,
  E2s,
  k2s,
  T2s,
  ILo,
  A2s,
  OLo,
  C2s,
  R2s
};

//# sourceMappingURL=chunk-ybr49gcx.js.map
