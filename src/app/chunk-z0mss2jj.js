import {
  fileURLToPath as __filePath_92cae6dfac4d81bd,
  URL as __filePath_92cae6dfac4d81bd_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Bkn } from "./chunk-ewvf3tep.js";
import { Nn, k } from "./chunk-ajtyjx88.js";
import { c } from "./chunk-acd8w9vv.js";
import { N, E } from "./chunk-fs43t96t.js";
import { Iv } from "./chunk-h5gbmqm1.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { re, TSe } from "./chunk-a16y5hcz.js";
import { Uar, d6, AM, WEn, F7o } from "./chunk-dc0nzty2.js";
import { a } from "./chunk-4cgvah10.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { R0, Eqe, jii, Bor, Wii, Gii } from "./chunk-r1dvrqha.js";
import { cb, YGe } from "./chunk-er8bc2me.js";
import { Ed } from "./chunk-gnr1s81e.js";
import { en } from "./chunk-rc7xvf0x.js";
import { Zm } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { basename as K, dirname as O, join as Y } from "path";
var EQ = "<persisted-output>",
  rBt = "</persisted-output>",
  s$r = "<truncated-output>",
  sLo = "</truncated-output>",
  J = "[Old tool result content cleared]",
  Z = "tengu_velvet_ibis";
function Sde(e, n, r = R0, s = !1) {
  if (!Number.isFinite(n)) return n;
  if (s) return Math.min(n, r);
  let o = k(Z, {})?.[e];
  if (typeof o === "number" && Number.isFinite(o) && o > 0) return o;
  return Math.min(n, r);
}
var GDe = 2000,
  U = "tool result was not saved";
function L(e) {
  let n = e.charCodeAt(0);
  if (e.length === 1 && n >= 55296 && n <= 57343) return `%u${n.toString(16).toUpperCase()}`;
  return Array.from(
    Buffer.from(e),
    (r) => `%${r.toString(16).toUpperCase().padStart(2, "0")}`
  ).join("");
}
function V(e) {
  let n = "";
  for (let r of String(e)) {
    let s = /^[A-Za-z0-9_-]$/.test(r) || (r === "." && n !== "");
    n += s ? r : L(r);
  }
  if (n === "") return "%";
  return Iv(n) ? L(n.charAt(0)) + n.slice(1) : n;
}
function F(e, n) {
  return `${V(e)}.${n ? "json" : "txt"}`;
}
function WGe(e, n, r) {
  return Y(e, F(n, r));
}
async function h8(e, n, r, s, i = Wii) {
  let o = Array.isArray(e);
  if (o) {
    if (e.some((g) => !Ed(g) || g.type !== "text"))
      return { error: "Cannot persist tool results containing non-text content" };
  }
  let l = cb();
  if (l !== void 0) {
    let p = Math.min(i, l.maxBytes),
      g,
      d,
      R;
    try {
      ((g = o ? _(e, null, 2) : e), (d = TSe(g, p)), (R = Buffer.from(d)));
    } catch {
      return { error: U };
    }
    let C = await YGe(l, { leafName: F(n, o), data: R });
    if (C === null) return { error: U };
    let { preview: A, hasMore: M } = Ayt(d, GDe);
    return {
      filepath: C.path,
      originalSize: g.length,
      isJson: o,
      preview: A,
      hasMore: M,
      truncatedAtBytes: d === g ? void 0 : p
    };
  }
  if (r === null) return { error: U };
  await AM(r, s);
  let u = WGe(r, n, o),
    h,
    f;
  try {
    ((h = o ? _(e, null, 2) : e), (f = TSe(h, i)));
  } catch (p) {
    let g = I(N(p));
    return (t(`Failed to persist tool result to ${u}: ${g}`, { level: "error" }), { error: g });
  }
  let T = f === h ? void 0 : i,
    S = z() && s !== void 0 ? d6(O(u), K(u)) : void 0;
  if (z() && s !== void 0 && S !== void 0) {
    let p = await s.write(S, f, {
      precondition: { type: "ifAbsent" },
      mode: 438 & ~process.umask()
    });
    if (!p.ok && p.error.code !== "AlreadyExists") {
      let g = le(p.error, u);
      return (t(`Failed to persist tool result to ${u}: ${g}`, { level: "error" }), { error: g });
    }
    if (p.ok) t(`Persisted tool result to ${u} (${en(f.length)})`);
  } else {
    let p = hn();
    try {
      (await WEn(O(u), p),
        await F7o(u, p),
        await p.writeExclusive(u, f),
        t(`Persisted tool result to ${u} (${en(f.length)})`));
    } catch (g) {
      if (E(g) !== "EEXIST")
        return (
          t(`Failed to persist tool result to ${u}: ${I(N(g))}`, { level: "error" }),
          { error: I(N(g)) }
        );
      let d;
      try {
        d = await p.lstat(u);
      } catch {
        return { error: "tool result path could not be checked; not persisted" };
      }
      if (d?.isSymbolicLink) return { error: "tool result path is a link; not persisted" };
      if (d?.isFile !== !0)
        return { error: "tool result path is not a regular file; not persisted" };
      if (d.nlink > 1) return { error: "tool result path has another name; not persisted" };
    }
  }
  let { preview: y, hasMore: P } = Ayt(f, GDe);
  return {
    filepath: u,
    originalSize: h.length,
    isJson: o,
    preview: y,
    hasMore: P,
    truncatedAtBytes: T
  };
}
function zDe(e) {
  let n = `${EQ}
`;
  return (
    (n +=
      e.truncatedAtBytes === void 0
        ? `Output too large (${en(e.originalSize)}). Full output saved to: ${e.filepath}

`
        : `Output exceeded the ${en(e.truncatedAtBytes)} persist limit; only the first ${en(e.truncatedAtBytes)} were saved to: ${e.filepath}

`),
    (n += `Preview (first ${en(GDe)}):
`),
    (n += e.preview),
    (n += e.hasMore
      ? `
...
`
      : `
`),
    (n += rBt),
    n
  );
}
var q = "1023 bytes";
function i$r(e, n) {
  if (Array.isArray(e) && e.some((l) => !Ed(l) || l.type !== "text")) return null;
  let r =
      typeof e === "string"
        ? e
        : e.flatMap((l) =>
            l.type === "text" && "text" in l && typeof l.text === "string" ? [l.text] : []
          ).join(`
`),
    s = en(r.length),
    i = Math.max(0, n - v(s, q, "").length),
    o = re(r, Ayt(r, i).preview.length);
  if (o.length === r.length) return null;
  return { message: v(s, en(o.length), o), originalSize: r.length };
}
function v(e, n, r) {
  return `${s$r}
Output too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.

${r}
${sLo}`;
}
async function Udn(e, n, r, s, i) {
  return wde(e.mapToolResultToToolResultBlockParam(n, r), e, s, i);
}
async function wde(e, n, r, s) {
  return Q(
    e,
    n.name,
    r,
    Sde(
      n.name,
      n.maxResultSizeChars,
      n.persistenceThresholdCeiling,
      n.skipAggregateToolResultBudget === !0
    ),
    s
  );
}
function iLo(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every(
    (n) =>
      Ed(n) &&
      n.type === "text" &&
      "text" in n &&
      (typeof n.text !== "string" || n.text.trim() === "")
  );
}
async function Q(e, n, r, s, i) {
  let o = e.content;
  if (iLo(o))
    return (
      a("tengu_tool_empty_result", { toolName: Nn(n) }),
      { ...e, content: `(${n} completed with no output)` }
    );
  if (!o) return e;
  let l = s ?? jii;
  if (!aLo(o, l)) return e;
  let u = await h8(o, e.tool_use_id, r, i);
  if (y8(u)) {
    if (cb() !== void 0) {
      let f = i$r(o, l);
      if (f === null) return e;
      return (
        a("tengu_tool_result_persisted", {
          toolName: Nn(n),
          originalSizeBytes: f.originalSize,
          persistedSizeBytes: f.message.length,
          estimatedOriginalTokens: Math.ceil(f.originalSize / Eqe),
          estimatedPersistedTokens: Math.ceil(f.message.length / Eqe),
          thresholdUsed: l,
          stored: !1
        }),
        { ...e, content: f.message }
      );
    }
    return e;
  }
  let h = zDe(u);
  return (
    a("tengu_tool_result_persisted", {
      toolName: Nn(n),
      originalSizeBytes: u.originalSize,
      persistedSizeBytes: h.length,
      estimatedOriginalTokens: Math.ceil(u.originalSize / Eqe),
      estimatedPersistedTokens: Math.ceil(h.length / Eqe),
      thresholdUsed: l,
      truncatedAtCap: u.truncatedAtBytes !== void 0
    }),
    { ...e, content: h }
  );
}
function Ayt(e, n) {
  if (e.length <= n) return { preview: e, hasMore: !1 };
  let s = e.slice(0, n).lastIndexOf(`
`),
    i = s > n * 0.5 ? s : n;
  return { preview: re(e, i), hasMore: !0 };
}
function y8(e) {
  return "error" in e;
}
function p5n() {
  return { seenIds: new Set(), replacements: new Map() };
}
function vzs(e) {
  return { seenIds: new Set(e.seenIds), replacements: new Map(e.replacements) };
}
function Ezs(e, n) {
  if (!k("tengu_hawthorn_steeple", !1)) return;
  if (e) return a$r(e, n ?? []);
  return p5n();
}
function D(e) {
  if (typeof e !== "string") return !1;
  let n = e.startsWith(Bkn) ? e.slice(Bkn.length) : e;
  return n.startsWith(EQ) || n === J;
}
function kzs(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let s = e[r];
    if (s.type !== "user" || s.isVirtual || !Array.isArray(s.message.content)) continue;
    for (let i of s.message.content)
      if (i.type === "tool_result" && i.tool_use_id === n) {
        let { content: o } = i;
        return !i.is_error && !!o && !D(o) && !(typeof o === "string" && o.startsWith(s$r));
      }
  }
  return !1;
}
function aLo(e, n) {
  return !H(e) && G(e) > n;
}
function H(e) {
  return Array.isArray(e) && e.some((n) => Ed(n) && (n.type === "image" || n.type === "document"));
}
function G(e) {
  if (typeof e === "string") return e.length;
  if (!Array.isArray(e)) return 0;
  return e.reduce(
    (n, r) =>
      n +
      (Ed(r) && r.type === "text" && "text" in r && typeof r.text === "string" ? r.text.length : 0),
    0
  );
}
function ee(e) {
  let n = new Map();
  for (let r of e) {
    if (r.type !== "assistant") continue;
    let s = r.message.content;
    if (!Array.isArray(s)) continue;
    for (let i of s) if (Ed(i) && i.type === "tool_use") n.set(i.id, i.name);
  }
  return n;
}
function te(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap((n) => {
    if (!Ed(n) || n.type !== "tool_result" || !n.content) return [];
    if (D(n.content)) return [];
    if (H(n.content)) return [];
    return [{ toolUseId: n.tool_use_id, content: n.content, size: G(n.content) }];
  });
}
function j(e) {
  let n = [],
    r = [],
    s = () => {
      if (r.length > 0) n.push(r);
      r = [];
    },
    i = new Set();
  for (let o of e)
    if (o.type === "user") r.push(...te(o));
    else if (o.type === "assistant") {
      if (!i.has(o.message.id)) (s(), i.add(o.message.id));
    }
  return (s(), n);
}
function ne(e, n) {
  return e.reduce(
    (r, s) => {
      let i = n.replacements.get(s.toolUseId);
      if (i !== void 0) r.mustReapply.push({ ...s, replacement: i });
      else if (n.seenIds.has(s.toolUseId)) r.frozen.push(s);
      else r.fresh.push(s);
      return r;
    },
    { mustReapply: [], frozen: [], fresh: [] }
  );
}
function oe(e, n, r) {
  let s = [...e].sort((l, u) => u.size - l.size),
    i = [],
    o = n + e.reduce((l, u) => l + u.size, 0);
  for (let l of s) {
    if (o <= r) break;
    (i.push(l), (o -= l.size));
  }
  return i;
}
function se(e, n) {
  return e.map((r) => {
    if (r.type !== "user" || !Array.isArray(r.message.content)) return r;
    let s = r.message.content;
    if (!s.some((o) => Ed(o) && o.type === "tool_result" && n.has(o.tool_use_id))) return r;
    return {
      ...r,
      message: {
        ...r.message,
        content: s.map((o) => {
          if (!Ed(o) || o.type !== "tool_result") return o;
          let l = n.get(o.tool_use_id);
          return l === void 0 ? o : { ...o, content: l };
        })
      }
    };
  });
}
async function ie(e, n, r) {
  let s = await h8(e.content, e.toolUseId, n, r);
  if (y8(s)) return null;
  return {
    content: zDe(s),
    originalSize: s.originalSize,
    truncatedAtCap: s.truncatedAtBytes !== void 0
  };
}
function Tzs(e) {
  let n = new Set();
  for (let r of e)
    if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === !0) {
      n.add(r.name);
      for (let s of r.aliases ?? []) n.add(s);
    }
  return n;
}
async function ae(e, n, r, s, i = new Set()) {
  let o = j(e),
    l = i.size > 0 ? ee(e) : void 0,
    u = (d) => l !== void 0 && i.has(l.get(d) ?? ""),
    h = Bor,
    f = new Map(),
    T = [],
    S = 0,
    y = 0;
  for (let d of o) {
    let { mustReapply: R, frozen: C, fresh: A } = ne(d, n);
    if ((R.forEach((m) => f.set(m.toolUseId, m.replacement)), (S += R.length), A.length === 0)) {
      d.forEach((m) => n.seenIds.add(m.toolUseId));
      continue;
    }
    A.filter((m) => u(m.toolUseId)).forEach((m) => n.seenIds.add(m.toolUseId));
    let w = A.filter((m) => !u(m.toolUseId)),
      b = C.reduce((m, x) => m + (u(x.toolUseId) ? 0 : x.size), 0),
      W = w.reduce((m, x) => m + x.size, 0),
      B = b + W > h ? oe(w, b, h) : [],
      X = new Set(B.map((m) => m.toolUseId));
    if (
      (d.filter((m) => !X.has(m.toolUseId)).forEach((m) => n.seenIds.add(m.toolUseId)),
      B.length === 0)
    )
      continue;
    (y++, T.push(...B));
  }
  if (f.size === 0 && T.length === 0) return { messages: e, newlyReplaced: [] };
  let P = await Promise.all(T.map(async (d) => [d, await ie(d, r, s)])),
    p = [],
    g = 0;
  for (let [d, R] of P) {
    if ((n.seenIds.add(d.toolUseId), R === null)) continue;
    ((g += d.size),
      f.set(d.toolUseId, R.content),
      n.replacements.set(d.toolUseId, R.content),
      p.push({ kind: "tool-result", toolUseId: d.toolUseId, replacement: R.content }),
      a("tengu_tool_result_persisted_message_budget", {
        originalSizeBytes: R.originalSize,
        persistedSizeBytes: R.content.length,
        estimatedOriginalTokens: Math.ceil(R.originalSize / Eqe),
        estimatedPersistedTokens: Math.ceil(R.content.length / Eqe),
        truncatedAtCap: R.truncatedAtCap
      }));
  }
  if (f.size === 0) return { messages: e, newlyReplaced: [] };
  if (p.length > 0)
    (t(
      `Per-message budget: persisted ${p.length} tool results across ${y} over-budget message(s), shed ~${en(g)}, ${S} re-applied`
    ),
      a("tengu_message_level_tool_result_budget_enforced", {
        resultsPersisted: p.length,
        messagesOverBudget: y,
        replacedSizeBytes: g,
        reapplied: S
      }));
  return { messages: se(e, f), newlyReplaced: p };
}
async function Azs(e, n, r, s, i, o) {
  if (!n) return e;
  let l = await ae(e, n, r, o, i);
  if (l.newlyReplaced.length > 0) s?.(l.newlyReplaced);
  return l.messages;
}
function a$r(e, n, r) {
  let s = p5n(),
    i = new Set(
      j(e)
        .flat()
        .map((o) => o.toolUseId)
    );
  for (let o of i) s.seenIds.add(o);
  for (let o of n)
    if (o.kind === "tool-result" && i.has(o.toolUseId))
      s.replacements.set(o.toolUseId, o.replacement);
  if (r) {
    for (let [o, l] of r) if (i.has(o) && !s.replacements.has(o)) s.replacements.set(o, l);
  }
  return s;
}
function m5n(e, n, r) {
  if (!e) return;
  return a$r(n, r, e.replacements);
}
function le(e, n) {
  let r = Zm(e);
  if (r === void 0) return `storage write failed: ${e.code}`;
  let s = Error("storage write failed");
  return ((s.code = r), (s.path = n), I(s));
}
function I(e) {
  let n = e;
  if (n.code)
    switch (n.code) {
      case "ENOENT":
        return `Directory not found: ${n.path ?? "unknown path"}`;
      case "EACCES":
        return `Permission denied: ${n.path ?? "unknown path"}`;
      case "ENOSPC":
        return "No space left on device";
      case "EROFS":
        return "Read-only file system";
      case "EMFILE":
        return "Too many open files";
      case "EEXIST":
        return `File already exists: ${n.path ?? "unknown path"}`;
      default:
        return `${n.code}: ${n.message}`;
    }
  return e.message;
}
async function jhe(e, n, r, { threshold: s = Gii, storageV5: i } = {}) {
  if (e.length <= s) return e;
  let o = await h8(e, `hook-${n}-${r}`, Uar(), i);
  if (y8(o)) {
    if (cb() !== void 0) return i$r(e, s)?.message ?? e;
    return (
      a("tengu_hook_output_persisted", {
        source: c(r),
        originalSizeBytes: e.length,
        persistedSizeBytes: 0,
        truncatedFallback: !0
      }),
      `${re(e, s)}

[Hook ${r} truncated at ${s} chars \u2014 persist-to-disk failed: ${o.error}]`
    );
  }
  let l = zDe(o);
  return (
    a("tengu_hook_output_persisted", {
      source: c(r),
      originalSizeBytes: o.originalSize,
      persistedSizeBytes: l.length,
      truncatedFallback: !1,
      truncatedAtCap: o.truncatedAtBytes !== void 0
    }),
    l
  );
}
function g5n(e, n) {
  return n.startsWith(EQ) && n.endsWith(rBt) && n !== e;
}
var Cyt = "https://claude.com/claude-code",
  Czs = "https://claude.ai";
function ue(e, n) {
  return e?.includes("_staging_") === !0 || n?.includes("staging") === !0;
}
function l$r(e, n) {
  return e?.includes("_local_") === !0 || n?.includes("localhost") === !0;
}
function oBt(e, n) {
  if (l$r(e, n)) return "http://localhost:4000";
  if (ue(e, n)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function Nd(e, n, r) {
  let { toCompatSessionId: s } = import.meta.require(
      __filePath_92cae6dfac4d81bd(
        new __filePath_92cae6dfac4d81bd_URL("./chunk-0rn9gz7s.js", import.meta.url)
      )
    ),
    i = s(e),
    l = `${oBt(i, n)}/code/${i}`;
  return r ? `${l}?${new URLSearchParams(r)}` : l;
}
export {
  EQ,
  rBt,
  s$r,
  sLo,
  Sde,
  GDe,
  WGe,
  h8,
  zDe,
  i$r,
  Udn,
  wde,
  iLo,
  Ayt,
  y8,
  p5n,
  vzs,
  Ezs,
  kzs,
  aLo,
  Tzs,
  Azs,
  a$r,
  m5n,
  jhe,
  g5n,
  Cyt,
  Czs,
  l$r,
  oBt,
  Nd
};

//# sourceMappingURL=chunk-z0mss2jj.js.map
