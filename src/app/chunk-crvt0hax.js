import {
  fileURLToPath as __sourceFilePath_1d6b17b428786f01,
  URL as __sourceFilePath_1d6b17b428786f01_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { L, qpi, U, q, CYe, Nns, ye, Wr, LI, J, uF } from "./chunk-wrtp8qz8.js";
import { d, Er, FI, ui } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { p } from "./chunk-qmkm2x59.js";
import { dtr, KU, Bc, gn, rA, Xri, sA, Bf, rbn, _H } from "./chunk-ajtyjx88.js";
import { fl, Vm } from "./chunk-at88wjsn.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { di } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { Uu } from "./chunk-4nzy53ma.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { dar } from "./chunk-928ws1pg.js";
import { Pt } from "./chunk-xe386mry.js";
import { y8r, zZ } from "./chunk-dc0nzty2.js";
import { Wt } from "./chunk-7svjr0za.js";
import { Qet, Zet } from "./chunk-70kfjmfv.js";
import { h7n, k7 } from "./chunk-pzpqyt29.js";
import { ge, lr, Tt } from "./chunk-522pfw8k.js";
import { od } from "./chunk-gvf25gp4.js";
import { T$e, Kci, TM } from "./chunk-527647eb.js";
import { Ce } from "./chunk-a2y39866.js";
var C = Ce(fl(), 1),
  Re = Ce(Vm(), 1);
var we = p(() =>
  Tt({
    sub: ge()
      .optional()
      .catch(void 0),
    email: ge()
      .optional()
      .catch(void 0),
    groups: lr(ge())
      .optional()
      .catch(void 0)
  }).passthrough()
);
function G(e) {
  let n = e.indexOf("."),
    o = e.indexOf(".", n + 1);
  if (n < 0 || o < 0) return null;
  try {
    let r = we().safeParse(te(Buffer.from(e.slice(n + 1, o), "base64url").toString("utf8")));
    return r.success ? r.data : null;
  } catch {
    return null;
  }
}
function m7n(e) {
  return LI(e) ? G(e.jwt)?.sub || void 0 : void 0;
}
var D = Object.freeze({}),
  Ie = new W(() => ({ jwt: void 0, attrs: D }));
function TGr() {
  let e = Wr(),
    n = LI(e) ? e.jwt : void 0,
    o = Ie.of(U().host);
  if (n === o.jwt) return o.attrs;
  if (((o.jwt = n), !n)) return (o.attrs = D);
  let r = G(n);
  if (!r) return (o.attrs = D);
  let s = { "identity.source": "gateway-oidc" };
  if (r.sub) s["user.id"] = r.sub;
  if (r.email) s["user.email"] = r.email;
  if (r.groups && r.groups.length > 0) s["user.groups"] = r.groups.join(",");
  return (o.attrs = Object.freeze(s));
}
var be = {
    OTEL_METRICS_INCLUDE_SESSION_ID: !0,
    OTEL_METRICS_INCLUDE_VERSION: !1,
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID: !0,
    OTEL_METRICS_INCLUDE_ENTRYPOINT: !1,
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES: !0,
    OTEL_METRICS_INCLUDE_REPOSITORY: !1
  },
  I = "vcs.repository.url.full",
  k = "vcs.repository.name",
  N = "vcs.owner.name",
  P = "vcs.provider.name",
  Me = "vcs.ref.head.revision",
  Oe = "vcs.ref.head.name",
  ve = "vcs.ref.head.type",
  De = [I, N, k, P],
  ke = "gitea.com",
  Le = /^ssh:\/\/[^/?#]*:7999(?=[/?#]|$)/i;
function R(e) {
  let n = be[e],
    o = process.env[e];
  if (o === void 0) return n;
  return Ne(o);
}
function V(e) {
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o < 33 || o === 44 || o === 59 || o === 92 || o > 126) return !1;
  }
  return !0;
}
var Y = 255,
  X = Qr((e) => {
    if (!e) return {};
    let n = {};
    try {
      for (let o of e.split(",")) {
        let [r, s, ...c] = o.split("=");
        if (r === void 0 || s === void 0 || c.length > 0) continue;
        let u = r.trim(),
          f = s.trim().split(/^"|"$/).join("");
        if (u.length === 0 || u.length > Y || !V(u)) throw Error("invalid resource attribute key");
        if (f.length > Y || !V(f)) throw Error("invalid resource attribute value");
        n[u] = decodeURIComponent(f);
      }
    } catch {
      return {};
    }
    return n;
  });
function fGt() {
  let e = _H(),
    n = q(),
    o = TGr(),
    r = Object.keys(o).length > 0,
    s = {},
    c = X(i.OTEL_RESOURCE_ATTRIBUTES);
  if (R("OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES"))
    for (let [a, y] of Object.entries(c)) {
      if (r && (a.startsWith("user.") || a.startsWith("identity."))) continue;
      s[a] = y;
    }
  if (((s["user.id"] = e), R("OTEL_METRICS_INCLUDE_SESSION_ID"))) {
    if (((s["session.id"] = n), i.CLAUDE_CODE_REMOTE_SESSION_ID))
      s["ccr.session.id"] = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  }
  if (R("OTEL_METRICS_INCLUDE_VERSION"))
    s["app.version"] = {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __sourceFilePath_1d6b17b428786f01(
        new __sourceFilePath_1d6b17b428786f01_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION;
  if (R("OTEL_METRICS_INCLUDE_ENTRYPOINT")) {
    let a = Uu();
    if (a) s["app.entrypoint"] = a;
  }
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY")) {
    let a = c[I] === void 0 ? Q().attributes : void 0;
    for (let y of De) {
      let m = c[y] ?? a?.[y];
      if (m) s[y] = m;
    }
  }
  let u = rA() ?? gn() ?? Fe();
  if (u) {
    let a = u.organizationUuid,
      y = !J() ? u.emailAddress : Qet() ? i.CLAUDE_CODE_USER_EMAIL : void 0,
      m = u.accountUuid;
    if (a) s["organization.id"] = a;
    if (y) s["user.email"] = y;
    if (m && R("OTEL_METRICS_INCLUDE_ACCOUNT_UUID")) {
      s["user.account_uuid"] = m;
      let E = i.CLAUDE_CODE_ACCOUNT_TAGGED_ID || dar("user", m);
      if (E) s["user.account_id"] = E;
    }
  }
  Object.assign(s, o);
  let f = J() ? Xri : sA.terminal;
  if (f) s["terminal.type"] = f;
  return s;
}
var Ue = new W(() => ({ settled: void 0, attributes: void 0 }));
function Q() {
  let e = Ue.of(U().host);
  if (e.settled === void 0 && !Pt())
    e.settled = y8r()
      .then((n) => {
        e.attributes = n ? Be(n) : void 0;
      })
      .catch(l);
  return e;
}
function Be(e) {
  let n = e.search(/[?#]/);
  if (n >= 0 && e.includes("@", n)) return;
  let o = zZ((n >= 0 ? e.slice(0, n) : e).replace(/\/+$/, ""));
  if (!o) return;
  let [r = "", ...s] = o.split("/"),
    c = T$e(r),
    u = s.filter((w) => w.length > 0),
    f = u.at(-1);
  if (
    !c ||
    !f ||
    c.includes("@") ||
    (c.includes(":") && !/^\[[0-9a-f:.]+\]$/i.test(c)) ||
    u.some((w) => w.includes("@"))
  )
    return;
  let a = TM(c),
    y = a === "other" ? c : Kci[a],
    m = a !== "other" ? a : y === ke ? "gitea" : void 0,
    E = u.length - 3,
    g = m === void 0 && E >= 0 && u[E] === "scm",
    T = g ? [...u.slice(0, E), ...u.slice(E + 1)] : u,
    h = T.slice(0, -1),
    x = h.at(-1);
  if (m === void 0 && x !== void 0 && (g || Le.test(e.trim()))) {
    let w = [...h.slice(0, -1), "projects", x, "repos", f];
    return { [I]: `https://${y}/${w.join("/")}`, [N]: x, [k]: f, [P]: "bitbucket" };
  }
  return {
    [I]: `https://${y}/${T.join("/")}`,
    ...(h.length > 0 && { [N]: h.join("/") }),
    [k]: f,
    ...(m !== void 0 && { [P]: m })
  };
}
function AJs({ commitId: e, branch: n }) {
  return { [Me]: e, ...(n !== void 0 && { [Oe]: n, [ve]: "branch" }) };
}
async function CJs() {
  if (R("OTEL_METRICS_INCLUDE_REPOSITORY") && X(i.OTEL_RESOURCE_ATTRIBUTES)[I] === void 0)
    await Q().settled;
}
var je = new W(() => ({ token: void 0, identity: null }));
function Fe() {
  if (!i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  let e = od();
  if (!e) return null;
  let n = je.of(U().host);
  if (e === n.token) return n.identity;
  n.token = e;
  let o = KU(e.replace(/^sk-ant-[a-z0-9]+-/, ""));
  if (typeof o !== "object" || o === null) return (n.identity = null);
  let r = o,
    s = (u) => (typeof u === "string" && u.length > 0 ? u : void 0),
    c = r.act ?? {};
  return (n.identity = {
    organizationUuid: s(r.organization_uuid),
    accountUuid: s(r.account_uuid),
    emailAddress: s(r.account_email) ?? s(c.email)
  });
}
var He = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/,
  B = String.raw`[0-9a-f]{4}`,
  Ke = String.raw`[0-9a-f]{8}-${B}-${B}-${B}-[0-9a-f]{12}`,
  ze = new RegExp(String.raw`^(?:hook-agent-)?${Ke}$`);
function j(e) {
  let n = He.exec(e),
    o = ze.test(e) ? e : void 0;
  return n ? `a${n[1]}` : o;
}
function Dgn(e) {
  return Zet() ? j(e) : e;
}
function Z(e) {
  if (!e || Bf(e)) return {};
  let n = j(e.agentId),
    o = j(e.parentAgentId ?? "");
  return { ...(n !== void 0 && { agent_id: n }), ...(o !== void 0 && { parent_agent_id: o }) };
}
var A = Ce(fl(), 1);
var ee = (e) =>
  ["string", "number", "boolean"].includes(typeof e) ||
  (Array.isArray(e) && e.every((n) => typeof n === "string"));
function ne({ event: e, attributes: n, loggedAt: o, eventContext: r }) {
  let s = A.trace.getSpanContext(r ?? A.context.active()),
    c = s !== void 0 && A.isSpanContextValid(s);
  return {
    to: "collector",
    event: e,
    attributes: Ko(n, ee),
    loggedAt: o.toISOString(),
    ...(c && { span: { traceId: s.traceId, spanId: s.spanId, traceFlags: s.traceFlags } })
  };
}
function oe(e, { entry: n, signal: o, hookOrigin: r }) {
  let s = () =>
      t(
        `[3P telemetry] Event record dropped (${n.event}): still on the collector road when a flush stopped waiting`
      ),
    c = (u) =>
      t(`[3P telemetry] Event record lost (${n.event}): its raise failed: ${d(u)}`, {
        level: "warn"
      });
  return o.aborted
    ? s()
    : e.send(n, o, r).then(
        () => {
          return;
        },
        (u) => (o.aborted ? s() : c(u))
      );
}
function re() {
  let e = Bc(),
    n = Promise.withResolvers(),
    o = null,
    r = new AbortController(),
    s = 0;
  async function c() {
    while (o !== null) await o;
  }
  function u() {
    if (o === null) return;
    (t(
      "[3P telemetry] A flush stopped waiting for the collector road; records still on it are dropped"
    ),
      r.abort(),
      (r = new AbortController()),
      (o = null));
  }
  return {
    setRoad: (f) => {
      if ((e.set(f), f === null)) n = Promise.withResolvers();
      else ((s = 0), n.resolve(f));
    },
    getRoad: e.get,
    route: (f, a) => {
      let y = e.get() === null;
      if (y && s >= qpi)
        return (
          t(
            "[3P telemetry] Event record dropped: no road installed and too many already waiting for one",
            { level: "warn" }
          ),
          Promise.resolve()
        );
      s += y ? 1 : 0;
      let m = { entry: f(), signal: r.signal, hookOrigin: a },
        E = (o ?? Promise.resolve())
          .then(() => e.get() ?? n.promise)
          .then((g) => oe(g, m))
          .catch((g) => t(`[3P telemetry] Event record dropped: ${d(g)}`, { level: "warn" }));
      return (
        (o = E),
        E.then(() => {
          if (o === E) o = null;
        }),
        E
      );
    },
    settled: c,
    settledWithin: (f) => Pe(c(), f).then(u)
  };
}
var nCe = re();
import { createHash as Ge } from "crypto";
var $e = 8388608,
  F = 24;
class ie {
  shown = new Set();
  toolTexts = new Set();
  shownChars = 0;
  toolTextChars = 0;
  dropped = !1;
  genuine = !1;
  version = 0;
}
var S = new W(() => new ie());
function RJs(e) {
  let n = S.of(e);
  ((n.dropped = !0), n.version++);
}
function xJs(e) {
  S.of(e).genuine = !0;
}
function AGr(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !ce(o.shown, n)) return;
  ((o.shownChars = se(o, o.shown, o.shownChars + n.length)), o.version++);
}
function CGr(e, n) {
  let o = S.of(e);
  if (n.trim() === "" || !ce(o.toolTexts, n)) return;
  ((o.toolTextChars = se(o, o.toolTexts, o.toolTextChars + n.length)), o.version++);
}
function PJs(e) {
  if (e === void 0) return !0;
  let n = S.of(e);
  return n.shown.size > 0 || n.toolTexts.size > 0 || n.genuine || n.dropped;
}
function RGr(e) {
  return S.of(e);
}
function se(e, n, o) {
  let r = o;
  while (r > $e && n.size > 0) {
    let s = n.values().next().value;
    (n.delete(s), (r -= s.length), (e.dropped = !0));
  }
  return r;
}
function ce(e, n) {
  let o = e.delete(n);
  return (e.add(n), !o);
}
var ue = Object.freeze({
    blocks: Object.freeze([]),
    lines: Object.freeze([]),
    unsearchable: !1,
    toolNames: new Set()
  }),
  O = "[account memory text not recorded]";
function J8(e) {
  return `<${e.length} chars; not recorded>`;
}
function dwt(e) {
  return `<not recorded: ${e}>`;
}
function Ve(e) {
  return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream";
}
function pGt(e, n, o) {
  if (Ve(n)) return { withheld: "memory_operation" };
  try {
    let r = e();
    if (r.unsearchable) return { withheld: "account_memory_text_not_identified" };
    return { value: o(r) };
  } catch {
    return { withheld: "account_memory_redaction_failed" };
  }
}
function s_e(e, n, o) {
  let r =
    e === void 0 ? { withheld: "account_memory_text_not_identified" } : pGt(e, n, (s) => mGt(o, s));
  return "withheld" in r ? dwt(r.withheld) : r.value;
}
var We = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;
function UGo({ rendered: e, verbatim: n, toolNames: o = ue.toolNames, unsearchable: r = !1 }) {
  let s = (g) => g.trim() !== "",
    c = L(e.map((g) => g.trim()).filter(s)),
    u = L(n.map((g) => g.trim()).filter(s));
  if (c.length === 0 && u.length === 0 && o.size === 0 && !r) return ue;
  let f = (g, T) => T.length - g.length,
    a = (g) => (_(g) ?? `"${g}"`).slice(1, -1),
    y = (g) =>
      L(
        g.flatMap((T) => {
          let h = Wt(T);
          return [T, h, a(T), a(h), Wt(a(T)), Wt(h), a(a(T))];
        })
      ).sort(f),
    m = y([...c, ...u.filter((g) => g.length >= F)]),
    E = y(
      [...c, ...u]
        .flatMap((g) =>
          g.split(`
`)
        )
        .flatMap((g) => {
          let T = g.trim(),
            h = T.replace(We, "");
          return [T, h].filter((x) => x.length >= F);
        })
    );
  return { blocks: m, lines: E, unsearchable: r, toolNames: o };
}
function kLe(e) {
  let n = RGr(e),
    o = de.get(e);
  if (o !== void 0 && o.version === n.version) return o.keys;
  let r = UGo({ rendered: [], verbatim: [...n.shown, ...n.toolTexts], unsearchable: n.dropped });
  return (de.set(e, { version: n.version, keys: r }), r);
}
var de = new WeakMap();
function mGt(e, n) {
  if (n.blocks.length === 0 && n.lines.length === 0) return e;
  let { blocks: o, lines: r } = Je(n);
  return fe(fe(e, o), r);
}
var Ye = 131072,
  Xe = 8,
  b = new Map(),
  le = new WeakMap();
function Je(e) {
  let n = le.get(e);
  if (n !== void 0) return n;
  let o = Ge("sha256")
      .update(_([e.blocks, e.lines]))
      .digest("hex"),
    r = b.get(o);
  if (r === void 0) {
    if (((r = { blocks: ae(e.blocks), lines: ae(e.lines) }), b.size >= Xe))
      b.delete(b.keys().next().value);
    b.set(o, r);
  }
  return (le.set(e, r), r);
}
function ae(e) {
  let n = e
      .filter((c) => c !== "" && !O.includes(c))
      .toSorted((c, u) => u.length - c.length)
      .map(di),
    o = [],
    r = [],
    s = 0;
  for (let c of n) {
    if (r.length > 0 && s + c.length > Ye)
      (o.push(new RegExp(r.join("|"), "g")), (r = []), (s = 0));
    (r.push(c), (s += c.length + 1));
  }
  if (r.length > 0) o.push(new RegExp(r.join("|"), "g"));
  return o;
}
function fe(e, n) {
  let o = e;
  for (let r of n) o = o.replace(r, O);
  if (o === e) return e;
  for (let r = 0; n.some((s) => o.search(s) !== -1); r++) {
    if (r >= 16)
      throw Error("account-memory text still matched a search key after 16 replacement rounds");
    for (let s of n) o = o.replace(s, O);
  }
  return o;
}
function v(e) {
  return e;
}
function g7n(e, n, o = e) {
  let r = new Set();
  for (let s of o) {
    if (s.role !== "assistant" || typeof s.content === "string") continue;
    for (let c of s.content) {
      let u = v(c).id;
      if (_e(c, n) && typeof u === "string") r.add(u);
    }
  }
  return e.map((s) => {
    let c = H(s.content, n, r);
    return c === s.content ? s : { ...s, content: c };
  });
}
function IJs(e, n) {
  return me(e, n, new Set());
}
function OJs(e, n) {
  return H(e, n, new Set());
}
function H(e, n, o) {
  if (typeof e === "string") return mGt(e, n);
  let r = me(e, n, o);
  return r.every((s, c) => s === e[c]) ? e : r;
}
function me(e, n, o) {
  return e.map((r) => {
    let { text: s, thinking: c, input: u, tool_use_id: f, content: a } = v(r);
    if (
      (r.type === "text" && typeof s === "string") ||
      (r.type === "thinking" && typeof c === "string")
    ) {
      let m = M(r, n, 0);
      return m === r ? r : m;
    }
    if (r.type === "tool_use" || r.type === "server_tool_use") {
      if (_e(r, n)) return { ...r, input: { not_recorded: J8(pe(u)) } };
      let m = M(u, n, 0);
      return m === u ? r : { ...r, input: m };
    }
    if (r.type === "tool_result" && a !== void 0 && a !== null) {
      if (typeof f === "string" && o.has(f))
        return { ...r, content: J8(typeof a === "string" ? a : pe(a)) };
      if (typeof a === "string" || Array.isArray(a)) {
        let m = H(a, n, o);
        return m === a ? r : { ...r, content: m };
      }
    }
    if (qe.has(r.type) || Qe(r)) return r;
    let y = M(r, n, 0);
    return y === r ? r : y;
  });
}
var qe = new Set(["image", "redacted_thinking", "container_upload"]);
function Qe(e) {
  let { source: n } = v(e);
  return e.type === "document" && typeof n === "object" && n !== null && n.type === "base64";
}
function _e(e, n) {
  let { name: o } = v(e);
  return (
    (e.type === "tool_use" || e.type === "server_tool_use") &&
    typeof o === "string" &&
    k7(o, h7n(n.toolNames), "history")
  );
}
var Ze = 6;
function M(e, n, o) {
  if (typeof e === "string") return mGt(e, n);
  if (typeof e !== "object" || e === null) return e;
  if (o >= Ze) return O;
  if (Array.isArray(e)) {
    let c = e.map((u) => M(u, n, o + 1));
    return c.every((u, f) => u === e[f]) ? e : c;
  }
  let r = !1,
    s = Object.entries(e).map(([c, u]) => {
      let f = mGt(c, n),
        a = M(u, n, o + 1);
      return ((r ||= a !== u || f !== c), [f, a]);
    });
  return r ? Object.fromEntries(s) : e;
}
function pe(e) {
  try {
    return _(e) ?? "";
  } catch {
    return "";
  }
}
var K = Ce(fl(), 1);
import { AsyncLocalStorage as et } from "async_hooks";
class Ee {
  als = new et();
  active() {
    return this.als.getStore() ?? K.ROOT_CONTEXT;
  }
  with(e, n, o, ...r) {
    let s = o == null ? n : n.bind(o);
    return this.als.run(e, s, ...r);
  }
  enterWith(e) {
    this.als.enterWith(e);
  }
  bind(e, n) {
    if (typeof n === "function") {
      let o = (...r) => this.with(e, () => n(...r));
      return (
        Object.defineProperty(o, "length", {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: n.length
        }),
        o
      );
    }
    return n;
  }
  enable() {
    return this;
  }
  disable() {
    return (this.als.disable(), this);
  }
}
var rCe = new Ee();
class Te {
  current = void 0;
}
var he = new W(() => new Te());
function BGo(e) {
  he.of(U().host).current = e;
}
function jGo() {
  return he.of(U().host).current;
}
function xGr() {
  let e = rCe.active();
  if (e !== K.ROOT_CONTEXT) return e;
  return jGo() ?? e;
}
class Ae {
  nextSequence = 0;
  warnedNoEventLogger = !1;
}
var Se = new W(() => new Ae());
function xe() {
  return i.OTEL_LOG_USER_PROMPTS;
}
function tt(e) {
  return xe() ? e : "<REDACTED>";
}
function MJs(e) {
  if (e === void 0) return { prompt: "<REDACTED>", prompt_text: "<REDACTED>" };
  let n = xe() ? s_e(() => kLe(U().host), void 0, e) : tt(e);
  return { prompt: n, prompt_text: n };
}
function DJs() {
  return i.OTEL_LOG_ASSISTANT_RESPONSES ?? i.OTEL_LOG_USER_PROMPTS;
}
var nt = new Re.W3CTraceContextPropagator();
function ot() {
  let e = xGr(),
    n = C.trace.getSpanContext(e);
  if (n && C.isSpanContextValid(n)) return e;
  if (ye() && i.TRACEPARENT)
    return nt.extract(
      e,
      { traceparent: i.TRACEPARENT, tracestate: i.TRACESTATE },
      C.defaultTextMapGetter
    );
  return;
}
async function Si(e, n = {}, o, r) {
  let s = Se.of(U().host),
    c = {
      ...fGt(),
      "event.name": e,
      "event.timestamp": new Date().toISOString(),
      "event.sequence": s.nextSequence++
    },
    u = uF();
  if (u) c["prompt.id"] = u;
  let f = i.CLAUDE_CODE_WORKSPACE_HOST_PATHS;
  if (f) c["workspace.host_paths"] = f.split("|");
  Object.assign(c, rbn(o));
  for (let [m, E] of Object.entries(J() ? dtr(n) : n)) {
    let g = m === "error" && J() && !/^[a-z0-9_]+$/.test(String(E));
    if (E !== void 0 && !g) c[m] = E;
  }
  try {
    Object.assign(c, Z(o));
  } catch (m) {
    t(`[3P telemetry] Agent ids not stamped: ${String(m)}`, { level: "warn" });
  }
  let a = new Date(),
    y = ot();
  await nCe.route(() => ne({ event: e, attributes: c, loggedAt: a, eventContext: y }), r);
}
function HJs(e, n, o, r) {
  return {
    timestamp: o,
    observedTimestamp: o,
    body: `claude_code.${e}`,
    attributes: n,
    ...(r && { context: r })
  };
}
function LJs(e, n) {
  let o = CYe();
  if (o) {
    o.emit(e);
    return;
  }
  let r = Se.of(U().host);
  if (!Nns(e) && !r.warnedNoEventLogger)
    ((r.warnedNoEventLogger = !0),
      t(`[3P telemetry] Event dropped (no event logger initialized): ${n}`, {
        level: Ne(process.env.CLAUDE_CODE_ENABLE_TELEMETRY) ? "warn" : "debug"
      }));
}
function xce(e, n) {
  if (e.from === e.to) return;
  Si(
    "permission_mode_changed",
    { from_mode: e.from, to_mode: e.to, ...(e.trigger && { trigger: e.trigger }) },
    n
  );
}
function cKe(e, n) {
  Si(
    "compaction",
    {
      trigger: e.trigger,
      success: String(e.success),
      duration_ms: String(Math.round(e.durationMs)),
      ...(e.preTokens !== void 0 && { pre_tokens: String(e.preTokens) }),
      ...(e.postTokens !== void 0 && { post_tokens: String(e.postTokens) }),
      ...(e.error && { error: e.error }),
      ...(e.precomputeReuse && { precompute_reuse: e.precomputeReuse })
    },
    n
  );
}
function WGo(e) {
  Si("retention_sweep", {
    result: e.result,
    period_days: String(e.periodDays),
    used_default: String(e.usedDefault),
    ...(e.skipReason && { skip_reason: e.skipReason }),
    ...(e.transcriptsDeleted !== void 0 && { transcripts_deleted: String(e.transcriptsDeleted) }),
    ...(e.transcriptsExemptedDesktop !== void 0 && {
      transcripts_exempted_desktop: String(e.transcriptsExemptedDesktop)
    }),
    ...(e.sessionFilesDeleted !== void 0 && {
      session_files_deleted: String(e.sessionFilesDeleted)
    }),
    ...(e.artifactsDeleted !== void 0 && { artifacts_deleted: String(e.artifactsDeleted) }),
    ...(e.filesRetainedFresh !== void 0 && { files_retained_fresh: String(e.filesRetainedFresh) }),
    ...(e.filesPastCutoff !== void 0 && { files_past_cutoff: String(e.filesPastCutoff) }),
    ...(e.errorCount !== void 0 && { error_count: String(e.errorCount) }),
    ...(e.historyEntriesPruned !== void 0 && {
      history_entries_pruned: String(e.historyEntriesPruned)
    })
  });
}
var z = !1;
function NJs(e) {
  if (z) return;
  z = !0;
  try {
    let n = e.name !== "Error" ? e.name : e.constructor?.name || "Error";
    Si("internal_error", { error_name: FI(n) ?? "Error", error_code: Er(e) });
  } finally {
    z = !1;
  }
}
function Jre(e) {
  Si("at_mention", { mention_type: e.mentionType, success: String(e.success) });
}
function Pce(e) {
  let n = e.error !== void 0 ? ui(e.error) : null;
  Si("auth", {
    action: e.action,
    success: String(e.success),
    auth_method: e.authMethod,
    ...(n && {
      error_category: n.kind,
      ...(n.status !== void 0 && { status_code: String(n.status) })
    })
  });
}
export {
  m7n,
  TGr,
  fGt,
  AJs,
  CJs,
  Dgn,
  nCe,
  RJs,
  xJs,
  AGr,
  CGr,
  PJs,
  RGr,
  J8,
  dwt,
  pGt,
  s_e,
  UGo,
  kLe,
  mGt,
  g7n,
  IJs,
  OJs,
  rCe,
  BGo,
  jGo,
  xGr,
  MJs,
  DJs,
  Si,
  HJs,
  LJs,
  xce,
  cKe,
  WGo,
  NJs,
  Jre,
  Pce
};

//# sourceMappingURL=chunk-crvt0hax.js.map
