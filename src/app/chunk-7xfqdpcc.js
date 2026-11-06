import {
  fileURLToPath as __sourceFilePath_6ec4e60cdc839510,
  URL as __sourceFilePath_6ec4e60cdc839510_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { T_ } from "./chunk-6bbdndfe.js";
import { F, L, vi, q, fE, HI, Nq, MCt } from "./chunk-wrtp8qz8.js";
import { c, ce } from "./chunk-acd8w9vv.js";
import { hk, Ye, Ke, N, d } from "./chunk-fs43t96t.js";
import { si } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, jo, t } from "./chunk-4kxznmzw.js";
import { Mr } from "./chunk-jazcqqqr.js";
import { I, Ja } from "./chunk-a16y5hcz.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { tr } from "./chunk-xe386mry.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { i } from "./chunk-cj37hmns.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { c1t } from "./chunk-frrn501g.js";
import { Uf } from "./chunk-zqbn04bq.js";
import { Djt, nXn, Ljt, r7, oV, BG, xa, _2e, qT } from "./chunk-d5zj5299.js";
import {
  wt,
  yb,
  b5,
  cH,
  DV,
  v5,
  YE,
  uo,
  Ar,
  Nn,
  k,
  $4r,
  ZYo,
  $Et,
  Foi,
  Knt,
  Oue,
  t5o,
  Uoi,
  jf,
  P5,
  qnt,
  krr,
  ba,
  WV,
  Oj,
  iZ
} from "./chunk-ajtyjx88.js";
import { j0, ot } from "./chunk-8r2m7vfp.js";
import { PH, HTt } from "./chunk-63a6mqbs.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { lA } from "./chunk-1e5yp9hx.js";
import { at, qt, Be, At } from "./chunk-at88wjsn.js";
import { e9n } from "./chunk-bbw420pv.js";
import { ur } from "./chunk-t86k189s.js";
import { B1s, j1s, W1s, TMo, G1s, TQe, Cln } from "./chunk-6h7ejyet.js";
import { vd, Rt } from "./chunk-wany0nxw.js";
import { q1 } from "./chunk-gv3j9e36.js";
import { Op, Mje, rWe, INt, F3, ZR, LNt, IL, Oe, Bt, _Vn } from "./chunk-j0tbz6ra.js";
import { Pd, hu, UE, oo, Va } from "./chunk-39ayby14.js";
import { li } from "./chunk-f7aya6cs.js";
import { XF } from "./chunk-zg0g4fdz.js";
import { po, ks } from "./chunk-1rjw35bb.js";
import { f_e } from "./chunk-160x3d5g.js";
import { g_r } from "./chunk-6h2vv539.js";
import { $gs } from "./chunk-thfm0d3y.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { ww, Nm, gu } from "./chunk-1wbxh4p6.js";
import { xy } from "./chunk-b10syt1j.js";
import { ki } from "./chunk-ngmg7f2n.js";
import { Pa } from "./chunk-9fktyje6.js";
import { qe } from "./chunk-0np0053t.js";
async function HOn(e, r) {
  if (r.paths.length === 0) return;
  let n = [];
  for (let s of r.paths)
    try {
      let o = ut(s);
      n.push(o);
      let u = await c1t(e.readFileState, o, { requireReadBeforeWrite: !0 });
      if (u !== null)
        t(
          `[memdir] re-synced readFileState for ${s} after the background ${r.source} pass wrote it (${u === "changed" ? "content changed" : "mtime only, content identical"})`
        );
    } catch (o) {
      t(
        `[memdir] left ${_(s)} out of the background ${r.source} pass's change notice, could not resolve it: ${d(o)}`
      );
    }
  if (n.length === 0) return;
  e.enqueuePendingMemoryUpdate({ ...r, paths: L(n) });
}
import { basename as Nt, sep as Lt } from "path";
var st = new WeakSet();
function LOn(e) {
  return `the ${e.ruleBehavior} rule "${dn(e.ruleValue)}"`;
}
function Rhr(e, r, n) {
  if (st.has(e)) return;
  st.add(e);
  let s = `${LOn(r)} (from ${lA(r.source)})`,
    o =
      r.ruleBehavior === "deny"
        ? `${s} blocks those writes`
        : `${s} needs your approval for each write, and background saving can't ask`;
  return `Claude isn't saving memories to ${n} in the background: ${o}. Saving resumes once that rule is removed or no longer covers that folder, and may then include what was skipped.`;
}
class it {
  extractor = null;
  drainer = async () => {};
  disarm = () => {};
  owedWithin = () => !1;
  onPassEnded = null;
  savePlace = null;
  restoredPlace = null;
  restoredPlaceAt = null;
}
var re = new W(() => new it());
var ct = 2,
  or =
    /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}\p{Script=Tibetan}]/gu,
  sr = new Set(["?", "\uFF1F", "\u061F"]),
  ir = /^[\s\p{P}\p{S}\p{M}]$/u;
function Me(e) {
  return F(e.split(/\s+/), Boolean);
}
function dt(e) {
  return e.match(or)?.length ?? 0;
}
function mt(e, r) {
  return Me(e) >= r || dt(e) >= r * ct;
}
function Te(e) {
  return Math.max(Me(e), Math.floor(dt(e) / ct));
}
function lt(e) {
  if (e < 3) return "0-2";
  if (e < 10) return "3-9";
  if (e < 40) return "10-39";
  return "40+";
}
function ft(e) {
  let r = [...e];
  for (let n = r.length - 1; n >= 0; n--) {
    let s = r[n];
    if (sr.has(s)) return !0;
    if (!ir.test(s)) return !1;
  }
  return !1;
}
function We(e) {
  return e.type === "user" || e.type === "assistant";
}
function ht(e, r) {
  if (r === null || r === void 0) return F(e, We);
  let n = !1,
    s = 0;
  for (let o of e) {
    if (!n) {
      if (o.uuid === r) n = !0;
      continue;
    }
    if (We(o)) s++;
  }
  if (!n) return F(e, We);
  return s;
}
var _t = 3;
function yt(e, r) {
  let n = new Set(r.map((s) => s.uuid));
  return e.filter((s) => !n.has(s.uuid));
}
function Mt(e) {
  return e.some((r) => r.type === "attachment" && r.attachment.type === "max_turns_reached");
}
function kt(e) {
  return e.findLast((r) => r.type === "assistant")?.isApiErrorMessage === !0;
}
function Ue(e, r, n) {
  let s = r === void 0,
    o = new Set();
  for (let u of e) {
    if (!s) {
      if (u.uuid === r) s = !0;
      continue;
    }
    if (u.type === "user") {
      let p = u.message.content;
      if (
        Array.isArray(p) &&
        p.some((x) => x.type === "tool_result" && x.is_error !== !0 && o.has(x.tool_use_id))
      )
        return !0;
      continue;
    }
    if (u.type !== "assistant") continue;
    let y = u.message.content;
    if (!Array.isArray(y)) continue;
    for (let p of y) {
      if (n && p.type === "tool_use" && $Et.has(p.name)) return !0;
      if (p.type === "tool_use" && p.name === gu) {
        o.add(p.id);
        continue;
      }
      let x = He(p);
      if (x !== void 0 && Oj(x)) return !0;
    }
  }
  return n && !s && Ue(e, void 0, !0);
}
var pt = 3;
function gt(e) {
  if (e.type !== "user" || e.isMeta) return !1;
  let r = e.message.content;
  if (typeof r === "string") return Me(r) >= pt;
  if (!Array.isArray(r)) return !1;
  return r.some((n) => n.type === "text" && Me(n.text) >= pt);
}
function xt(e, r) {
  for (let n = e.length - 1; n >= 0; n--) {
    let s = e[n];
    if (s === void 0 || !YE(s)) continue;
    if (s.type === "user") {
      if (!s.isMeta) return s.uuid;
    } else if (
      s.type === "attachment" &&
      s.attachment.type === "queued_command" &&
      !s.attachment.isMeta &&
      s.attachment.source_uuid !== void 0
    )
      return s.attachment.source_uuid;
  }
  return r?.uuid;
}
function Et(e, r) {
  let n = r === void 0;
  for (let s of e) {
    if (!n) {
      if (s.uuid === r) n = !0;
      continue;
    }
    if (gt(s)) return !0;
  }
  if (!n) return e.some(gt);
  return !1;
}
function ar(e, r) {
  if (r === void 0) return e;
  let n = e.findIndex((s) => s.uuid === r);
  return n === -1 ? e : e.slice(n + 1);
}
function le(e) {
  if (e.type === "attachment") {
    let { attachment: n } = e;
    return n.type === "queued_command" && !n.isMeta ? $e(n.prompt) : void 0;
  }
  if (e.type !== "user" || e.isMeta || e.isCompactSummary) return;
  let r = e.message.content;
  if (Array.isArray(r) && r.every((n) => n.type === "tool_result")) return;
  return $e(r);
}
function $e(e) {
  return typeof e === "string"
    ? e
    : e.filter((r) => r.type === "text").map((r) => r.text).join(`
`);
}
function Ne(e) {
  if (e.type !== "assistant") return;
  let r = e.message.content;
  return Array.isArray(r) ? $e(r) : void 0;
}
function Pt(e, r, n) {
  let o = e
    .flatMap((u, y) => {
      let p = le(u);
      return p === void 0 ? [] : [{ index: y, text: p }];
    })
    .at(-1);
  if (o === void 0) return !1;
  return mt(De(e, n), r) || (o.text.trim() !== "" && cr(e, o.index));
}
function De(e, r) {
  return e.flatMap((n) => le(n) ?? []).slice(-Math.max(r, 1)).join(`
`);
}
function cr(e, r) {
  for (let n = r - 1; n >= 0; n--) {
    let s = e[n];
    if (le(s) !== void 0) return !1;
    let o = Ne(s);
    if (o !== void 0 && o.trim() !== "") return ft(o);
  }
  return !1;
}
function bt(e, r) {
  let n = ar(e, r).flatMap((o) => {
      let u = le(o);
      if (u === void 0) return [];
      let y =
        o.type === "attachment" && o.attachment.type === "queued_command"
          ? o.attachment.origin
          : o.type === "user"
            ? o.origin
            : void 0;
      return [{ message: o, text: u, origin: y }];
    }),
    s = n.filter((o) => YE(o.message));
  return {
    userTurns: n.length,
    ownWordsTurns: s.length,
    ownWordsChars: s.reduce((o, u) => o + u.text.length, 0),
    taskNotificationTurns: F(n, (o) => o.origin?.kind === "task-notification"),
    unstampedTurns: F(n, (o) => o.origin === void 0),
    proseWords: Te(
      n.map((o) => o.text).join(`
`)
    )
  };
}
function He(e) {
  if (e.type !== "tool_use" || (e.name !== at && e.name !== qt)) return;
  let r = e.input;
  if (typeof r === "object" && r !== null && "file_path" in r) {
    let n = r.file_path;
    return typeof n === "string" ? n : void 0;
  }
  return;
}
var dr = 64,
  Tt = 20000,
  mr = 'Answer with JSON only: {"write_likely": true} or {"write_likely": false}.',
  St = `

`,
  vt = "\u2026",
  lr = [
    { fresh: !0, user: !0 },
    { fresh: !0, user: !1 },
    { fresh: !1, user: !0 },
    { fresh: !1, user: !1 }
  ];
function fr(e, r, n, s) {
  let o = r === void 0 ? -1 : e.findIndex((T) => T.uuid === r),
    u = [],
    y = 0;
  for (let T = e.length - 1; T >= 0; T--) {
    let v = e[T],
      M =
        v.type === "assistant"
          ? v.isApiErrorMessage || v.message.model === vi
            ? void 0
            : Ne(v)
          : pr(v)
            ? void 0
            : le(v);
    if (M === void 0 || M.trim() === "") continue;
    let P = v.type !== "assistant";
    if ((u.push({ user: P, fresh: T > o, body: M.trim() }), P && ++y >= n)) break;
  }
  if (!u[0]?.fresh) return { text: "", userTurns: 0 };
  let p = new Map(),
    x = s;
  for (let { fresh: T, user: v } of lr)
    for (let [M, P] of u.entries()) {
      if (P.fresh !== T || P.user !== v) continue;
      let U = v ? "User: " : "Assistant: ",
        R = (p.size > 0 ? St.length : 0) + U.length;
      if (R + P.body.length <= x) {
        (p.set(M, U + P.body), (x -= R + P.body.length));
        continue;
      }
      let H = x - R - vt.length;
      if (H > 0) p.set(M, U + vt + Ja(P.body, H));
      x = 0;
      break;
    }
  return {
    text: u
      .map((T, v) => p.get(v))
      .filter((T) => T !== void 0)
      .reverse()
      .join(St),
    userTurns: y
  };
}
async function Ot({ config: e, messages: r, sinceUuid: n, window: s, signal: o, credentials: u }) {
  let y = Date.now(),
    p = e.model ?? "",
    x = "",
    C = 0,
    T = (M, P) => {
      if (P !== void 0) f("ccr_memory_first_look", P);
      else if (M !== "empty") g("ccr_memory_first_look");
      return {
        verdict: M,
        error: P,
        model: p,
        durationMs: Date.now() - y,
        inputChars: x.length,
        userTurns: C
      };
    },
    v = Ts(o, { timeoutMs: Tt, refTimer: !0 });
  try {
    let M = e.model ?? i.ANTHROPIC_SMALL_FAST_MODEL ?? cH();
    p = e.model ?? yb();
    let P = fr(r, n, s, e.maxInputChars);
    if (((x = P.text), (C = P.userTurns), x === "")) return T("empty");
    if (!DV(p))
      return (
        t(
          `[extractMemories] first look: ${p} is not permitted by the organization's model policy; the pass is not skipped`
        ),
        T("error", "policy")
      );
    if (b5(M) !== M || b5(p) !== p)
      return (
        t(
          `[extractMemories] first look: managed settings deny the first look's model (${M}, sent as ${p}); the pass is not skipped`
        ),
        T("error", "managed_denied")
      );
    let [U, R] = v5(p),
      H = rWe(r),
      Q = H.length > 0 ? INt(H) : "",
      G = await si(
        IL({
          model: p,
          system: e.instruction,
          skipSystemPromptPrefix: !0,
          messages: [
            {
              role: "user",
              content: `${Q}<exchanges>
${x}
</exchanges>

${mr}`
            }
          ],
          max_tokens: dr + R,
          thinking: U,
          output_format: {
            type: "json_schema",
            schema: {
              type: "object",
              properties: { write_likely: { type: "boolean" } },
              required: ["write_likely"],
              additionalProperties: !1
            }
          },
          timeout: Tt,
          maxRetries: 0,
          signal: v.signal,
          forceAttributionHeader: !0,
          querySource: "extract_memories_first_look",
          credentials: u
        }),
        v.signal,
        () => new Ye()
      ),
      X = G.content.find((ue) => ue.type === "text"),
      Y = X?.type === "text" ? ot(j0(X.text), !1) : null,
      se = typeof Y === "object" && Y !== null && "write_likely" in Y ? Y.write_likely : void 0;
    if (typeof se !== "boolean")
      return (
        t(
          `[extractMemories] first look: the model did not answer {"write_likely": true|false} (stop reason ${G.stop_reason}); the pass is not skipped`
        ),
        T("error", "no_boolean")
      );
    return T(se ? "yes" : "no");
  } catch (M) {
    return (
      t(`[extractMemories] first look failed: ${d(M)}; the pass is not skipped`),
      T(
        "error",
        M instanceof hk || (v.signal.aborted && !o.aborted)
          ? "timeout"
          : Ke(M)
            ? "aborted"
            : "api_error"
      )
    );
  } finally {
    v.cleanup();
  }
}
function pr(e) {
  let r =
    e.type === "attachment" && e.attachment.type === "queued_command"
      ? XF(e.attachment.origin, e.attachment.commandMode)
      : e.type === "user"
        ? e.origin
        : void 0;
  return r?.kind === "task-notification" && r.subkind !== "scheduled-trigger";
}
function Ct(e, r, n, s, o) {
  let u = vd(),
    y = u ? Be : At,
    p = u
      ? "ls/find/cat/stat/wc/head/tail and similar"
      : "Get-ChildItem/Get-Content/Select-Object -First/-Last and similar",
    x = u ? "rm" : "Remove-Item",
    C =
      r.length > 0
        ? `

## Existing memory files

${r}

Check this list before writing \u2014 update an existing file rather than creating a duplicate.`
        : "",
    T = n ? "scope guidance, " : "",
    v = `Available tools: ${qe}, ${Ar}, ${uo}, read-only ${y} (${p}), and ${at}/${qt} for paths inside the memory directory only, and ${y} ${x} of .md files inside the memory directory only (outside protected subdirectories like .git or agents${u ? "; rm takes no flags except -f" : ""}). All other tools \u2014 MCP, Agent, write-capable ${y}, etc \u2014 will be denied.`,
    M = `You have a limited turn budget. ${at} requires a prior ${qe} of the same file, so the efficient strategy is: turn 1 \u2014 issue all ${qe} calls in parallel for every file you might update; turn 2 \u2014 issue all ${qt}/${at} calls in parallel. Do not interleave reads and writes across multiple turns.`;
  return [
    `You are now acting as the memory extraction subagent. Analyze the most recent ~${e} messages above and use them to update your persistent memory systems.`,
    "",
    v,
    "",
    M,
    "",
    `You MUST only use content from the last ~${e} messages to update your persistent memories. Do not waste any turns attempting to investigate or verify that content further \u2014 no grepping source files, no reading code to confirm a pattern exists, no git commands.` +
      C,
    "",
    "If nothing is worth saving, output only 'Nothing to save.' Do not explain why.",
    "",
    "If the user explicitly asks you to remember something, save it immediately as whichever type fits best. If they ask you to forget something, find and remove the relevant entry.",
    "",
    `Apply the memory types, ${T}what-not-to-save criteria, and frontmatter format from the Memory section of your system prompt \u2014 it is already in your context above.`,
    ...(Djt()
      ? [
          "",
          "Skip the project-skill upkeep step here: your writes are restricted to the memory directory, so record the correction as a feedback memory only."
        ]
      : []),
    ...(s
      ? [
          "",
          `The ${ww} / ${Nm} / ${gu} tools are unavailable here, so skip anything the scope guidance marks as shared with the project \u2014 the main conversation saves those; never file them in the personal directory instead. Save only what belongs in your personal memory directory.`
        ]
      : []),
    ...[]
  ].join(`
`);
}
var ke = null,
  It = null,
  oe = null,
  xhr = "rm|remove-item|ri|del|erase",
  gr = new RegExp(`^(?:${xhr})$`, "i");
function V(e, r, n) {
  return (
    t(`[autoMem] denied ${e.name} (${n}): ${r}`),
    a("tengu_auto_mem_tool_denied", { tool_name: Nn(e.name), reason: c(n) }),
    { behavior: "deny", message: r, decisionReason: { type: "other", reason: r } }
  );
}
function hr(e, r) {
  let n = e.trim().match(/"[^"]*"|'[^']*'|\S+/g) ?? [];
  if (n.length < 2) return;
  if (!gr.test(n[0])) return;
  let s = [];
  for (let o = 1; o < n.length; o++) {
    let u = n[o];
    if (/^-(?:Literal)?Path$/i.test(u)) continue;
    if (u.startsWith("-")) return;
    let y =
      (u.startsWith('"') && u.endsWith('"')) || (u.startsWith("'") && u.endsWith("'"))
        ? u.slice(1, -1)
        : u;
    if (/[*?[\]$`(){}|;&<>"',]/.test(y)) return;
    if (!NPt(y, r)) return;
    s.push(y);
  }
  return s.length > 0 ? s : void 0;
}
var _r = new Set([qe, Ar, uo, at, qt]),
  yr = {
    restored: "restored",
    none_saved: "none saved",
    not_in_transcript: "not restored: that message is no longer in the transcript"
  };
async function kr(e, r) {
  let n = await q1(e);
  if (n.kind !== "simple" || n.commands.length !== 1) return !1;
  let s = n.commands[0];
  if (
    s === void 0 ||
    s.argvSourceLiteral !== !0 ||
    s.argv[0] !== "ls" ||
    s.redirects.length > 0 ||
    s.envVars.length > 0
  )
    return !1;
  let o = (p) => p.replace(/[/\\]+$/, ""),
    u = new Set(jo(r).map(o)),
    y = s.argv.slice(1).filter((p) => !/^-[laA1hF]+$/.test(p));
  return (
    y.length > 0 &&
    y.every((p) => {
      if (
        p.startsWith("-") ||
        p.startsWith("~") ||
        p !== p.trim() ||
        p.split(/[/\\]/).includes("..") ||
        /[*?[]/.test(p) ||
        p.includes("\\")
      )
        return !1;
      try {
        return jo(ut(p)).every((x) => u.has(o(x)));
      } catch {
        return !1;
      }
    })
  );
}
function xr(e) {
  return e.replace(/['"`\\\u2018-\u201F]/g, "").includes("..");
}
function Ge(e, r) {
  if (e?.type === "subcommandResults")
    return [...e.reasons.values()].some((n) => Ge(n.decisionReason, r));
  return r === "rule"
    ? e?.type === "rule" && e.rule.ruleBehavior !== "allow"
    : (e?.type === "safetyCheck" && e.circuitBreaker === "outsideReadsBlocked") ||
        (e?.type === "other" && e.reason === PH);
}
function Phr(e, r) {
  try {
    for (let n of [qt, at]) {
      let s = oo(e, { name: n }) ?? Va(e, { name: n });
      if (s !== null) return s;
    }
    for (let n of jo(r))
      for (let s of ["deny", "ask"]) {
        let o = xa(n, e, "edit", s);
        if (o !== null) return o;
      }
  } catch (n) {
    l(N(n));
  }
  return;
}
async function wr(e, r) {
  let n = await q1(e);
  if (n.kind !== "simple") return;
  if (n.commands.length !== 1) return;
  let s = n.commands[0];
  if (!s) return;
  if (s.argv[0] !== "rm") return;
  if (s.redirects.length > 0) return;
  if (s.envVars.length > 0) return;
  let o = [],
    u = !1;
  for (let y = 1; y < s.argv.length; y++) {
    let p = s.argv[y];
    if (p === void 0) continue;
    if (!u) {
      if (p === "--") {
        u = !0;
        continue;
      }
      if (p.startsWith("-")) {
        if (p === "-f" || p === "--force") continue;
        return;
      }
    }
    if (/[*?[]/.test(p)) return;
    if (!p.startsWith("/") || !NPt(p, r)) return;
    o.push(p);
  }
  return o.length > 0 ? o : void 0;
}
function NPt(e, r) {
  return e.endsWith(".md") && iZ(e, r);
}
function Ihr(e, r, { fork: n = "dream", onWriteAllowed: s } = {}) {
  return async (o, u, y, p, x, C) => {
    if (P5()) return V(o, HTt, "memory_paused");
    if (o.mcpInfo) return V(o, "MCP tools are not available to the memory agent", "mcp_tool");
    if (C !== void 0 || y.hookAskFloor)
      return V(
        o,
        "a PreToolUse hook requires confirmation for this call, and the memory agent runs headless with no user to answer \u2014 the call is denied",
        "hook_ask"
      );
    let T;
    if (o.name === Be || o.name === At) {
      let M = $gs("the memory agent", u);
      if (M.deniedFlag !== void 0) return V(o, M.message, "shell_flag");
      if (
        ((T = M.sanitizedInput),
        O() === "windows" &&
          y.getAppState().toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 &&
          typeof u.command === "string" &&
          xr(u.command))
      )
        return V(
          o,
          "On Windows with permissions.blockReadsOutsideWorkingDirectories on, the memory agent's shell commands may not contain '..' anywhere, even split by quotes or a backslash, because where it leads cannot be checked. Use absolute paths, and avoid '..' in patterns too.",
          "windows_dot_dot"
        );
    }
    try {
      let M = import.meta.require(
          __sourceFilePath_6ec4e60cdc839510(
            new __sourceFilePath_6ec4e60cdc839510_URL("./chunk-95a1sr5v.js", import.meta.url)
          )
        ),
        { checkRuleBasedPermissions: P } = M,
        { carriesAskRuleIntent: U } = M,
        R = y.getAppState(),
        H = e.replace(/[/\\]+$/, ""),
        Q =
          R.toolPermissionContext.blockReadsOutsideWorkingDirectories === !0 &&
          R.toolPermissionContext.restricted !== !0 &&
          !Ljt() &&
          ![H, ...jo(H)].some((ue) => krr(ue.replace(/[/\\]+$/, ""))),
        G = { ...y, toolUseId: x },
        X = {
          ...G,
          getAppState: () => ({
            ...R,
            toolPermissionContext: {
              ...R.toolPermissionContext,
              additionalWorkingDirectories: new Map([
                ...R.toolPermissionContext.additionalWorkingDirectories,
                [H, { path: H, source: "session" }]
              ])
            }
          })
        },
        Y = await P(o, u, Q && _r.has(o.name) ? X : G, { crashIsObjection: !0 }),
        se =
          Y?.behavior === "ask" &&
          O() !== "windows" &&
          Q &&
          o.name === Be &&
          Y.decisionReason?.type === "safetyCheck" &&
          Y.decisionReason.circuitBreaker === "outsideReadsBlocked" &&
          !U(Y) &&
          typeof u.command === "string" &&
          (await kr(u.command, e)) &&
          (await P(o, u, X, { crashIsObjection: !0 })) === null;
      if (Y !== null && !se)
        return V(
          o,
          Y.message ?? "a configured permission rule blocks this call for the memory agent",
          Ge(Y.decisionReason, "rule") || (Y.behavior === "ask" && U(Y))
            ? "permission_rule"
            : Ge(Y.decisionReason, "read_block")
              ? "read_block"
              : "permission_check"
        );
    } catch (M) {
      return (
        l(N(M)),
        V(
          o,
          "the memory agent could not evaluate configured permission rules; failing closed",
          "rule_check_failed"
        )
      );
    }
    if (o.name === xy) return { behavior: "allow", updatedInput: u };
    if (o.name === qe || o.name === Ar || o.name === uo) {
      let M = y.getAppState().toolPermissionContext,
        P = _2e(o, u, M);
      if (P) return V(o, P.message, "network_path");
      if (M.blockReadsOutsideWorkingDirectories === !0) {
        let U = qT(o, u, M);
        if (U.behavior === "deny") {
          let R = o.getPath?.(u),
            H = jo(e).map((G) => (G.endsWith(Lt) ? G : G + Lt));
          if (
            !(R !== void 0 && !Ljt() && jo(R).every((G) => H.some((X) => iZ(G, X)))) ||
            U.decisionReason.type !== "other" ||
            U.decisionReason.reason !== PH
          )
            return V(o, U.message, "read_block");
        }
      }
      return { behavior: "allow", updatedInput: u };
    }
    if (o.name === Be || o.name === At) {
      let M = T ?? u,
        P = o.inputSchema.safeParse(u);
      if (P.success) {
        if (o.isReadOnly(P.data, y)) return { behavior: "allow", updatedInput: M };
        let H = P.data.command;
        if (typeof H === "string") {
          if ((o.name === Be ? await wr(H, e) : hr(H, e)) !== void 0)
            return { behavior: "allow", updatedInput: M };
        }
      }
      let U = o.name === Be;
      return V(
        o,
        `Only read-only shell commands and ${U ? "rm (no flags except -f)" : "Remove-Item"} of .md files under ${e} (not protected subdirectories like .git or agents) are permitted in this context (${U ? "ls, find, grep, cat, stat, wc, head, tail, and similar" : "Get-ChildItem, Get-Content, Select-Object -First/-Last, and similar"})`,
        "shell_not_allowed"
      );
    }
    if ((o.name === at || o.name === qt) && "file_path" in u) {
      let M = u.file_path;
      if (typeof M === "string" && NPt(M, e))
        return (s?.(M, x), { behavior: "allow", updatedInput: u });
    }
    let v = vd() ? Be : At;
    return V(
      o,
      `only ${qe}, ${Ar}, ${uo}, read-only ${v}, and ${at}/${qt} within ${e} are allowed`,
      "tool_not_allowed"
    );
  };
}
function Er(e, r) {
  return async (n, s, o) => {
    if (HI()) return V(n, HTt, "memory_paused");
    let u = o.getAppState().toolPermissionContext;
    if (Mje(u))
      return (
        r(),
        V(
          n,
          "tool calls are held in this session until the user writes; this background memory pass cannot run",
          "tools_held"
        )
      );
    if (n.name === ki || n.name === xy) return { behavior: "allow", updatedInput: s };
    if (!Oue(t5o(o.options.mcpClients)))
      return V(
        n,
        "the session has no CCR memory server; this background memory pass cannot run",
        "no_memory_server"
      );
    if ([...Pd(u), ...hu(u)].some((y) => UE(u, n, y)))
      return V(n, `${n.name} is blocked by a permission rule for this session`, "permission_rule");
    if (!ZYo.has(n.name))
      return V(
        n,
        `this background memory pass may only call ${[...ZYo].join(", ")}`,
        "tool_not_allowed"
      );
    if ($Et.has(n.name) && Nq() !== e)
      return (
        r(),
        V(
          n,
          "a newer user turn has started; this background memory pass may no longer write",
          "newer_turn"
        )
      );
    return { behavior: "allow", updatedInput: s };
  };
}
function Dt(e) {
  let r = new Set();
  for (let n of e) {
    if (n.type !== "user") continue;
    let s = n.message.content;
    if (!Array.isArray(s)) continue;
    for (let o of s) if (o.type === "tool_result" && o.is_error === !0) r.add(o.tool_use_id);
  }
  return r;
}
function Ht(e, r) {
  let n = He(e);
  if (n === void 0) return;
  let s;
  try {
    s = ut(n);
  } catch {
    return;
  }
  return NPt(s, r) ? s : void 0;
}
function Pr(e, r) {
  let n = Dt(e),
    s = [];
  for (let o of e) {
    if (o.type !== "assistant") continue;
    let u = o.message.content;
    if (!Array.isArray(u)) continue;
    for (let y of u) {
      if (y.type === "tool_use" && n.has(y.id)) continue;
      let p = Ht(y, r);
      if (p !== void 0) s.push(p);
    }
  }
  return L(s);
}
function Ft(e) {
  let r = F(e, (n) => Nt(n) !== Uf);
  return {
    source: "extract",
    summary: r > 0 ? `saved ${r} ${I(r, "memory", "memories")}` : "updated the memory index",
    paths: e
  };
}
function br(e, r) {
  let n = new Map(),
    s = [];
  return {
    onMessage: (u) => {
      if (u.type === "assistant") {
        let p = u.message.content;
        if (!Array.isArray(p)) return;
        for (let x of p) {
          let C = Ht(x, r);
          if (x.type === "tool_use" && C !== void 0) n.set(x.id, C);
        }
        return;
      }
      if (u.type !== "user") return;
      let y = u.message.content;
      if (!Array.isArray(y)) return;
      for (let p of y) {
        if (p.type !== "tool_result") continue;
        let x = n.get(p.tool_use_id);
        if (x === void 0) continue;
        if ((n.delete(p.tool_use_id), p.is_error === !0)) continue;
        (s.push(x), c1t(e, x, { requireReadBeforeWrite: !0 }));
      }
    },
    completedWritePaths: () => L(s)
  };
}
function je(e) {
  let r = e.toolUseContext.queryTracking;
  return {
    overageInUse: r?.billedToUsageCredits ?? li().overageInUse === !0,
    longContextBilled: r?.longContextBilled === !0
  };
}
function Wt(e, r) {
  return r.overageInUse && e9n() ? e.whenOverage : "run";
}
function Coo(e) {
  if (i.CLAUDE_CODE_POST_TURN_MEMORY && Knt() === null)
    (t(
      "[extractMemories] CLAUDE_CODE_POST_TURN_MEMORY is set but CLAUDE_CODE_POST_TURN_MEMORY_CONFIG is missing or invalid; the pass is off"
    ),
      f("ccr_memory_extract", "config_invalid"));
  let r = new Set(),
    n,
    s,
    o = 0;
  function u(h) {
    if (h) ((n = h), (s = void 0), (o = 0));
  }
  function y(h, E) {
    if (!h) {
      if ((o++, o >= _t)) {
        (t(
          `[extractMemories] (mcp) stopped early ${o} passes in a row; the cursor moves on and these turns are not reviewed again`
        ),
          u(E));
        return;
      }
    }
    ((s = q()),
      t(
        `[extractMemories] (mcp) ${h ? "writes refused after a newer prompt" : "the pass stopped early (an API error, the turn cap with nothing saved, or a throw)"}; the cursor stays and the next pass reviews these turns again`
      ));
  }
  let p = !1,
    x = !1,
    C = 0,
    T = !1,
    v,
    M,
    P,
    U,
    R;
  function H(h) {
    return (r.add(h), h.finally(() => r.delete(h)));
  }
  let Q = ke?.createLaptopExtractRunner(e, H);
  function G() {
    let h = R;
    if (((R = void 0), h?.timer !== void 0)) clearTimeout(h.timer);
    return h;
  }
  function X(h, E, A = Nq(), B = MCt(), K = je(E), D = !0) {
    if ((G(), h.idleFlushSeconds === 0)) return;
    R = {
      timer: D ? setTimeout(Y, h.idleFlushSeconds * 1000).unref() : void 0,
      dueAt: D ? performance.now() + h.idleFlushSeconds * 1000 : 1 / 0,
      promptIndex: A,
      personPrompt: B,
      billing: K,
      context: E
    };
  }
  function Y() {
    let h = G();
    if (!h || x || f_e() || Nq() !== h.promptIndex) return;
    H(
      Ae({
        context: h.context,
        trigger: "idle_flush",
        promptIndex: h.promptIndex,
        personPrompt: h.personPrompt,
        billing: h.billing
      })
    );
  }
  function se(h) {
    try {
      re.of(e).onPassEnded?.(h);
    } catch (E) {
      l(N(E));
    }
  }
  function ue(h) {
    if (T) return;
    T = !0;
    let { restoredPlace: E, restoredPlaceAt: A } = re.of(e);
    if (!E) return;
    let B = E.passAt !== null && (A ?? Date.now()) >= E.passAt,
      K = B ? E.tail : E.cursor;
    if (((C = B ? 0 : E.turns), (v = C), (M = B), K !== null && h.some((b) => b.uuid === K))) n = K;
    let D = n !== void 0 ? "restored" : K === null ? "none_saved" : "not_in_transcript";
    ((P = c(D)),
      t(
        `[extractMemories] (mcp) resumed from the previous worker: ${C} turn end(s) since its last pass${B ? " (the pass it had scheduled is counted as run)" : ""}; cursor ${yr[D]}`
      ));
  }
  function ie(h, E) {
    let A = { turns: C, cursor: n ?? null, tail: h.at(-1)?.uuid ?? null, passAt: E };
    try {
      re.of(e).savePlace?.(A);
    } catch (B) {
      l(N(B));
    }
  }
  async function Ae({
    context: h,
    appendSystemMessage: E,
    trigger: A,
    promptIndex: B = Nq(),
    personPrompt: K = MCt(),
    billing: D = je(h)
  }) {
    let { messages: b } = h,
      w = Knt(),
      de = w?.carryAcrossRestarts === !0 && A === void 0;
    if (w?.carryAcrossRestarts) ue(b);
    let Z = ht(b, n);
    if (s !== void 0 && s !== q()) ((s = void 0), (o = 0));
    if (s === void 0 && Ue(b, n, !!w)) {
      if (
        (t("[extractMemories] skipping \u2014 conversation already wrote to memory in this range"),
        u(b.at(-1)?.uuid),
        de)
      )
        ie(b, null);
      a("tengu_extract_memories_skipped_direct_write", { message_count: Z });
      return;
    }
    let ee = w ? bt(b, n) : void 0,
      Se = w?.proseGate === "chat",
      Ve = Se ? Math.max(w.reviewWindow, ee?.userTurns ?? 0) : 0,
      Gt = Se ? Pt(b, w.minProseWords, Ve) : Et(b, n),
      xe = w && ee ? lt(Se ? Te(De(b, Ve)) : ee.proseWords) : void 0;
    if (!Gt) {
      if ((t("[extractMemories] skipping \u2014 not enough user prose"), u(b.at(-1)?.uuid), de))
        ie(b, null);
      a("tengu_extract_memories_skipped_no_prose", {
        message_count: Z,
        prose_gate: ce(w?.proseGate),
        prose_words_bucket: ce(xe)
      });
      return;
    }
    let ve = w?.everyNTurns ?? k("tengu_bramble_lintel", null) ?? 1,
      ze = F3(h),
      pe = w ? Wt(w, D) : "run";
    if (A === void 0) {
      if ((C++, C < ve)) {
        if (w) {
          let S = C >= w.idleFlushMinTurns;
          if ((X(w, h, B, K, D, S), de))
            ie(
              b,
              S && w.idleFlushSeconds > 0 && pe !== "skip"
                ? Date.now() + w.idleFlushSeconds * 1000
                : null
            );
        }
        return;
      }
    }
    let Je = C;
    if (((C = 0), de)) ie(b, Date.now());
    let { toolPermissionContext: Qe } = h.toolUseContext.getAppState(),
      Re = w ? void 0 : Phr(Qe, WV());
    if (Re !== void 0) {
      if (
        (t(`[extractMemories] skipping \u2014 ${LOn(Re)} would refuse memory writes`),
        a("tengu_extract_memories_skipped_permission_rule", { message_count: Z }),
        E !== void 0)
      ) {
        let S = Rhr(e, Re, ba());
        if (S !== void 0) E(Bt(S, "warning"));
      }
      return;
    }
    x = !0;
    let we = Date.now(),
      Ce;
    try {
      if (w) {
        if (Nq() !== B) {
          t("[extractMemories] skipping (mcp) \u2014 a newer turn started");
          return;
        }
        if (Mje(Qe)) {
          if (
            (t("[extractMemories] skipping (mcp) \u2014 tool calls are held until a person writes"),
            de)
          )
            ie(b, null);
          return;
        }
        if (pe === "skip") {
          if (
            ((s = q()),
            t(
              "[extractMemories] skipping (mcp) \u2014 the turn was billed to Extra Usage and when_overage is 'skip'; these turns wait for the next pass"
            ),
            a("tengu_extract_memories_skipped_overage", {
              message_count: Z,
              trigger: c(A ?? "cadence"),
              long_context_billed: D.longContextBilled,
              prose_words_bucket: ce(xe),
              own_words_turns: ee?.ownWordsTurns
            }),
            de)
          )
            ie(b, null);
          return;
        }
        let J = w.firstLook === void 0 ? "off" : pe === "first_look" ? "enforce" : w.firstLook.mode,
          Fe =
            w.firstLook !== void 0 && J !== "off"
              ? Ot({
                  config: w.firstLook,
                  messages: b,
                  sinceUuid: n,
                  window: w.reviewWindow,
                  signal: h.toolUseContext.abortController.signal,
                  credentials: h.toolUseContext.credentials
                })
              : void 0;
        if (Fe !== void 0 && J === "enforce") {
          let j = await Fe;
          if (
            (t(
              `[extractMemories] first look (enforce, a "no" skips the pass) answered ${j.verdict} after ${j.durationMs}ms`
            ),
            Nq() !== B)
          ) {
            ((C = Je),
              t(
                "[extractMemories] skipping (mcp) \u2014 a newer turn started during the first look"
              ));
            return;
          }
          if (Mje(h.toolUseContext.getAppState().toolPermissionContext)) {
            t("[extractMemories] skipping (mcp) \u2014 tool calls were held during the first look");
            return;
          }
          if (j.verdict === "no" || j.verdict === "empty") {
            (t(
              `[extractMemories] skipping (mcp) \u2014 the first look answered ${j.verdict}; these turns wait for the next pass`
            ),
              a("tengu_extract_memories_skipped_first_look", {
                message_count: Z,
                trigger: c(A ?? "cadence"),
                overage_in_use: D.overageInUse,
                when_overage: c(pe),
                first_look_verdict: c(j.verdict),
                first_look_model: wt(j.model),
                first_look_ms: j.durationMs,
                first_look_input_chars: j.inputChars,
                first_look_user_turns: j.userTurns,
                prose_words_bucket: ce(xe),
                own_words_turns: ee?.ownWordsTurns
              }));
            return;
          }
        }
        t(`[extractMemories] starting (mcp, ${A ?? "cadence"}) \u2014 ${Z} new messages`);
        let Pe = w.staleNote ? B1s(e) : void 0,
          tt = Pe ? TMo(Pe, ks(b), G1s) : "",
          rt = j1s(e),
          be = 0,
          Zt = Date.now(),
          _e = await ZR({
            promptMessages: [Oe({ content: (rt ?? w.instruction) + tt })],
            cacheSafeParams: ze,
            canUseTool: Er(B, () => {
              be++;
            }),
            querySource: "extract_memories",
            forkLabel: "extract_memories",
            overrides: { mcpRequestMeta: Uoi({ citesEvent: xt(b, K) }) },
            skipTranscript: !0,
            maxTurns: w.maxTurns,
            skipCacheWrite: !0
          }),
          er = Date.now() - Zt,
          te = await Fe;
        if (te !== void 0 && J === "shadow")
          t(
            `[extractMemories] first look (shadow, the pass ran regardless) answered ${te.verdict} after ${te.durationMs}ms`
          );
        let ae = yt(_e.messages, b);
        if (Pe) W1s(e, Pe, ae);
        let rr = Dt(ae),
          me = F(
            ae.flatMap((j) =>
              j.type === "assistant" && Array.isArray(j.message.content) ? j.message.content : []
            ),
            (j) => j.type === "tool_use" && $Et.has(j.name) && !rr.has(j.id)
          ),
          nt = Mt(ae),
          ye = kt(ae) || (me === 0 && nt),
          nr = ye && me === 0 ? o + 1 : 0;
        if (me > 0 || (be === 0 && !ye)) u(b.at(-1)?.uuid);
        else y(!ye, b.at(-1)?.uuid);
        (a("tengu_extract_memories_extraction", {
          mode: c("mcp"),
          trigger: c(A ?? "cadence"),
          account_memory_line_rendered: !1,
          every_n_turns: ve,
          input_tokens: _e.totalUsage.input_tokens,
          output_tokens: _e.totalUsage.output_tokens,
          cache_read_input_tokens: _e.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: _e.totalUsage.cache_creation_input_tokens,
          message_count: Z,
          parent_context_tokens: Op(b),
          compacted_in_fork: ae.some(po),
          turn_count: F(ae, (j) => j.type === "assistant"),
          written: me,
          superseded_writes: be,
          instruction_source: c(rt === void 0 ? "env" : "memory_context"),
          stale_note_rendered: tt !== "",
          review_unfinished: ye,
          unfinished_in_a_row: nr,
          reached_cap: nt,
          duration_ms: er,
          fork_model: wt(h.toolUseContext.options.mainLoopModel),
          turns_since_last_pass: Je,
          prose_gate: c(w.proseGate),
          prose_words_bucket: ce(xe),
          user_turns: ee?.userTurns,
          own_words_turns: ee?.ownWordsTurns,
          own_words_chars: ee?.ownWordsChars,
          task_notification_turns: ee?.taskNotificationTurns,
          unstamped_turns: ee?.unstampedTurns,
          overage_in_use: D.overageInUse,
          long_context_billed: D.longContextBilled,
          when_overage: c(pe),
          first_look_mode: c(J),
          first_look_verdict: ce(te?.verdict),
          first_look_error: ce(te?.error),
          first_look_model: wt(te?.model),
          first_look_ms: te?.durationMs,
          first_look_input_chars: te?.inputChars,
          first_look_user_turns: te?.userTurns,
          idle_flush_min_turns: w.idleFlushMinTurns,
          carry_across_restarts: w.carryAcrossRestarts,
          resumed_turns: v,
          resumed_pass_counted_run: M,
          resumed_cursor: P
        }),
          g("ccr_memory_extract"),
          se({
            outcome:
              me > 0 ? "saved" : ye ? "unfinished" : be > 0 ? "writes_refused" : "nothing_to_save",
            trigger: A ?? "cadence",
            written: me,
            durationMs: Date.now() - we
          }));
        return;
      }
      let S = ba();
      t(`[extractMemories] starting \u2014 ${Z} new messages, memoryDir=${S}`);
      let ge = nXn(),
        Le = oV() || ge,
        Vt = Ihr(S, void 0, { fork: "extraction" }),
        Kt = Cln(await TQe(S, ur().signal, h.toolUseContext.storageV5)),
        Xe = !1,
        Ie =
          oe?.isPromoterExtractorOn() === !0
            ? oe.typedTurnsInWindow(e, h.toolUseContext.session.id, b, n)
            : [],
        zt = Ct(Z, Kt, Le, ge, Xe) + (oe?.typedTurnsPromptBlock(Ie) ?? ""),
        Ee = oe !== null && Ie.length > 0 ? T_("extract_memories") : void 0,
        Jt = Ee === void 0 ? void 0 : oe?.registerExtractorFork(e, Ee, Ie);
      Ce = br(h.toolUseContext.readFileState, S);
      let z = await ZR({
        promptMessages: [Oe({ content: zt })],
        cacheSafeParams: ze,
        canUseTool: Vt,
        querySource: "extract_memories",
        forkLabel: "extract_memories",
        ...(Ee !== void 0 && { overrides: { agentId: Ee } }),
        skipTranscript: !0,
        maxTurns: 5,
        skipCacheWrite: LNt(),
        onMessage: Ce.onMessage
      }).finally(() => Jt?.());
      u(b.at(-1)?.uuid);
      let ne = Pr(z.messages, S),
        Qt = F(z.messages, (J) => J.type === "assistant"),
        Ze =
          z.totalUsage.input_tokens +
          z.totalUsage.cache_creation_input_tokens +
          z.totalUsage.cache_read_input_tokens,
        Xt = Ze > 0 ? ((z.totalUsage.cache_read_input_tokens / Ze) * 100).toFixed(1) : "0.0";
      if (
        (t(
          `[extractMemories] finished \u2014 ${ne.length} files written, cache: read=${z.totalUsage.cache_read_input_tokens} create=${z.totalUsage.cache_creation_input_tokens} input=${z.totalUsage.input_tokens} (${Xt}% hit)`
        ),
        ne.length > 0)
      )
        t(`[extractMemories] memories saved: ${ne.join(", ")}`);
      else t("[extractMemories] no memories saved this run");
      let he = ne.filter((J) => Nt(J) !== Uf),
        et = F(he, BG);
      if (
        (a("tengu_extract_memories_extraction", {
          mode: c("file"),
          input_tokens: z.totalUsage.input_tokens,
          output_tokens: z.totalUsage.output_tokens,
          cache_read_input_tokens: z.totalUsage.cache_read_input_tokens,
          cache_creation_input_tokens: z.totalUsage.cache_creation_input_tokens,
          message_count: Z,
          parent_context_tokens: Op(b),
          compacted_in_fork: z.messages.some(po),
          turn_count: Qt,
          files_written: ne.length,
          memories_saved: he.length,
          team_memories_saved: et,
          account_memory_line_rendered: Xe,
          duration_ms: Date.now() - we
        }),
        t(
          `[extractMemories] writtenPaths=${ne.length} memoryPaths=${he.length} appendSystemMessage defined=${E != null}`
        ),
        he.length > 0)
      ) {
        let J = _Vn(he);
        ((J.teamCount = et), E?.(J));
      }
      if (ne.length > 0) await HOn(h.toolUseContext, Ft(ne));
      g("memory_extract");
    } catch (S) {
      if (
        (t(`[extractMemories] error: ${S}`),
        a("tengu_extract_memories_error", {
          duration_ms: Date.now() - we,
          mode: c(w ? "mcp" : "file")
        }),
        m(w ? "ccr_memory_extract" : "memory_extract", "agent_error"),
        w)
      )
        (se({
          outcome: "failed",
          trigger: A ?? "cadence",
          written: 0,
          durationMs: Date.now() - we
        }),
          y(!1, b.at(-1)?.uuid));
      let ge = Ce?.completedWritePaths() ?? [];
      if (ge.length > 0)
        try {
          await HOn(h.toolUseContext, Ft(ge));
        } catch (Le) {
          t(
            `[extractMemories] could not queue the notice for writes that landed before the error: ${d(Le)}`
          );
        }
    } finally {
      x = !1;
      let S = U;
      if (((U = void 0), S && ve <= 1))
        (t("[extractMemories] running trailing extraction for stashed context"),
          await Ae({
            context: S.context,
            appendSystemMessage: S.appendSystemMessage,
            trigger: "trailing",
            promptIndex: S.promptIndex,
            personPrompt: S.personPrompt,
            billing: S.billing
          }));
      else if (S && w) X(w, S.context, S.promptIndex, S.personPrompt, S.billing);
    }
  }
  async function jt(h, E) {
    if (h.toolUseContext.agentId) return;
    let A = Q?.onTurnEnd(h, E);
    try {
      if (qnt() || $t()) await Yt(h, E);
    } finally {
      await A;
    }
  }
  async function Yt(h, E) {
    G();
    let A = Knt(),
      B = A !== null,
      K = (D) => {
        if (A?.carryAcrossRestarts) (ue(h.messages), ie(h.messages, D));
      };
    if (B && (HI() || Mr() || fE())) {
      K(null);
      return;
    }
    if (
      B &&
      !(
        Oue(t5o(h.toolUseContext.options.mcpClients)) &&
        h.toolUseContext.options.tools.some((D) => Rt(D, $4r))
      )
    ) {
      (t("[extractMemories] skipping (mcp) \u2014 CCR memory server not mounted"), K(null));
      return;
    }
    if (B && Pa() && g_r(h.toolUseContext.options.tools.filter((D) => Rt(D, $4r))).length === 0) {
      (t(
        "[extractMemories] skipping (mcp) \u2014 coordinator mode: the write tool is held on the memory server's word alone"
      ),
        K(null));
      return;
    }
    if (!B && !k("tengu_passport_quail", !1) && !$t()) return;
    if (!B && !jf()) {
      if (P5()) n = h.messages.at(-1)?.uuid ?? n;
      return;
    }
    if (!B && r7()) return;
    if (tr() !== null) return;
    if (x) {
      (t("[extractMemories] extraction in progress \u2014 stashing for trailing run"),
        a("tengu_extract_memories_coalesced", {}));
      let D = je(h);
      if (
        ((U = {
          context: h,
          appendSystemMessage: E,
          promptIndex: Nq(),
          personPrompt: MCt(),
          billing: D
        }),
        A)
      )
        K(
          (A.everyNTurns <= 1 || A.idleFlushSeconds > 0) && Wt(A, D) !== "skip"
            ? Date.now() + A.idleFlushSeconds * 1000
            : null
        );
      return;
    }
    await Ae({ context: h, appendSystemMessage: E });
  }
  let fe = re.of(e);
  ((fe.extractor = (h, E) => H(jt(h, E))),
    (fe.drainer = async (h = 60000) => {
      let E = Date.now() + h;
      (Y(), Q?.disarmIdleFlush());
      while (r.size > 0 && Date.now() < E)
        (await Promise.race([
          Promise.all(r).catch(() => {}),
          new Promise((A) => setTimeout(A, E - Date.now()).unref())
        ]),
          Y());
    }),
    (fe.disarm = () => {
      ((fe.extractor = null), (U = void 0), G(), Q?.disarmIdleFlush());
    }),
    (fe.owedWithin = (h) =>
      r.size > 0 ||
      (R?.timer !== void 0 && R.promptIndex === Nq() && R.dueAt - performance.now() <= h)));
}
function $t() {
  return oe !== null && oe.EXTRACTOR_RUNS_FOR_PROMOTER && oe.isPromoterExtractorOn();
}
function iki(e) {
  return ke !== null && ke.isLaptopExtractDispatched(e);
}
function aki(e) {
  return ke !== null && ke.isLaptopExtractSync(e);
}
async function lki(e, r) {
  await re.of(e.toolUseContext.session.host).extractor?.(e, r);
}
async function dki(e, r) {
  await re.of(e).drainer(r);
}
function cki(e, r) {
  let n = re.of(e);
  ((n.restoredPlace = Foi(r)), (n.restoredPlaceAt = Date.now()));
}
function uki(e, r) {
  re.of(e).savePlace = r;
}
export { HOn, LOn, Rhr, xhr, Phr, NPt, Ihr, Coo, iki, aki, lki, dki, cki, uki };

//# sourceMappingURL=chunk-7xfqdpcc.js.map
