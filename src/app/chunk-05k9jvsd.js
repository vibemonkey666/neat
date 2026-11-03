// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Xd } from "./chunk-fs43t96t.js";
import {
  xRr,
  zhi,
  Vhi,
  Arn,
  Crn,
  DMs,
  OJ,
  qpt,
  UGn,
  nn,
  cgt,
  uG,
  pgt,
  pKn,
  uWe,
  Oe,
  Bt,
  IJe,
  wVn,
  F$t
} from "./chunk-j0tbz6ra.js";
import { t } from "./chunk-4kxznmzw.js";
import { ENe } from "./chunk-r1dvrqha.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { mu } from "./chunk-64ygy579.js";
import { E_e, ti, _j } from "./chunk-gq77tz5k.js";
import { d8 } from "./chunk-g240bny9.js";
import { QQe, BUt } from "./chunk-7jgmpv5v.js";
import { j_i, MHo } from "./chunk-53nx6xac.js";
import { yL, c8e, r1 } from "./chunk-rntn87dm.js";
import { Ni } from "./chunk-e36t8chg.js";
import { Jhn, FZn } from "./chunk-89y2kzae.js";
import { H } from "./chunk-p8tprgqa.js";
var K = (e, o) =>
  o ? { drop: o.resultText ?? "blocked by a UserPromptSubmit hook" } : { text: e };
import { randomUUID as Se } from "crypto";
var KNn = (e, o = "UserPromptSubmit") =>
  nn({
    type: "hook_additional_context",
    content: [...e],
    hookName: o,
    toolUseID: `hook-${Se()}`,
    hookEvent: "UserPromptSubmit"
  });
var N = !0;
var U = (e, o) => ({
  messages: [{ ...Bt(e, "warning", void 0, N), promptSubmitEnding: { ending: o, promptKept: !1 } }],
  shouldQuery: !1,
  resultText: e
});
function J(e, o, r) {
  return r === !0
    ? e
    : `${e}

Original prompt: ${o}`;
}
var EMt = { wasCancelled: !0 };
var B = (e) => e.wasCancelled === !0 && (e.blocked === void 0 || e.stopped !== void 0);
var E = (e, o, r) =>
  B(e) ? EMt : { ended: o, stopped: e.stopped, text: r, wasCancelled: e.wasCancelled };
var X = () =>
  U("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", {
    kind: "no_verdict",
    noVerdictKind: "hooks_never_ran"
  });
function Y(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== !0 ? F$t(e.text, o.name, { midTurn: !1 }) : e.text;
}
var Z = (e, o, r) => ({
  proceeds: { text: e, sessionTitle: o, ...(r !== void 0 && r.length > 0 && { context: r }) }
});
var j = (e, o) => ({ ...e, ...(o?.length && { context: o }) });
var Ne = (e, o, r) =>
  !e
    ? { ended: X() }
    : e.blocked
      ? j(E(e, e.blocked, o.text), o.context)
      : { ...Z(Y(o), r, o.context), wasCancelled: e.wasCancelled };
var q = (e) => e.aborted;
function ee(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var oe = "the turn was interrupted while the prompt was checked";
var te = (e) => e instanceof Xd;
var Ve = (e, o) => ti(e) === ti(o?.made);
var D = (e, o) => e || q(o);
var re =
  "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var ahi = (e, o) => e.plugins !== o.plugins;
function se() {
  let e = new WeakMap(),
    o = 0;
  return {
    of: (r) => {
      let s = e.get(r);
      if (s === void 0) ((o += 1), (s = o), e.set(r, s));
      return s;
    }
  };
}
var ne = se();
function v() {
  let e = BUt("prompt.submit");
  return e.length === 0
    ? ""
    : JSON.stringify([ne.of(QQe.plugins()), e.map((r) => [r.plugin, r.generation])]);
}
var yEr = (e, o) => ({
  ...Bt(e, "warning", void 0, N),
  promptSubmitEnding: { ending: o, promptKept: !0 }
});
var pe = (e) => (e === void 0 ? ENe : `${ENe}: ${e}`);
var _Er = (e) => Oe({ content: e, isMeta: !0 });
var ie = (e, o, r) => ({ blocked: e, stopped: o, ...(r && { wasCancelled: !0 }) });
var me = (e, o) => UGn({ promptSource: e ?? "sdk", wakeupSource: o });
function ue(e, o) {
  return (
    e.message?.type === "attachment" &&
    e.message.attachment.type === "hook_cancelled" &&
    e.message.attachment.timedOut !== !0 &&
    o.aborted
  );
}
async function bEr({
  text: e,
  typed: o,
  context: r,
  result: s,
  promptSource: d,
  wakeupSource: c,
  tiers: a
}) {
  let g,
    u = r.abortController.signal.aborted,
    S = r1();
  try {
    for await (let n of cgt(e, ae(r).mode, r, me(d, c), a)) {
      if (n.message?.type === "progress") continue;
      if (ue(n, r.abortController.signal)) u = !0;
      if (n.blockingError) {
        let i = D(u, r.abortController.signal),
          p = n.suppressOriginalPrompt === !0 || o !== e || yL(S) || c8e({ isRunReached: !1 }),
          f = n.blockingError.promptEnding;
        return {
          blocked: U(
            J(uWe(n.blockingError), e, p),
            f !== void 0 && "noVerdict" in f
              ? { kind: "no_verdict", noVerdictKind: f.noVerdict }
              : { kind: "blocked_by_hook", ...wVn(f?.reason) }
          ),
          ...(i && { wasCancelled: !0 })
        };
      }
      if (n.preventContinuation) {
        let i = pe(n.stopReason);
        return (
          (s.messages = [
            ...s.messages,
            _Er(i),
            yEr(i, { kind: "stopped_by_hook", ...wVn(n.stopReason) })
          ]),
          (s.shouldQuery = !1),
          (s.resultText = i),
          (s.allowedTools = void 0),
          ie(s, i, D(u, r.abortController.signal))
        );
      }
      if (n.sessionTitle) g = n.sessionTitle;
      let k = n.additionalContexts;
      if (k !== void 0 && k.length > 0) s.messages = [...s.messages, KNn(k)];
      let y = ee(n.message);
      if (y) s.messages = [...s.messages, y];
    }
  } catch (n) {
    let P = Jhn(n, r.abortController.signal),
      k = !te(n);
    if (!P) throw n;
    t(
      k
        ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)"
        : "UserPromptSubmit hooks cancelled (control stream closed)"
    );
  }
  return D(u, r.abortController.signal)
    ? { sessionTitle: g, wasCancelled: !0 }
    : { sessionTitle: g };
}
var de = (e) => ({
  ...e,
  messages: [...e.messages],
  allowedTools: e.allowedTools && [...e.allowedTools]
});
var Jmo = (e) => pKn(e) !== "" || v() !== "";
var SEr = () =>
  Ie().loadedModules.some(
    (e) =>
      !d8(e.args.pluginStorageId) &&
      mu(e) &&
      (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit"))
  );
var po = (e) =>
  e === void 0 ||
  e.hooks !== "" ||
  ["prompt.submit", "classic.UserPromptSubmit"].some((o) =>
    BUt(o).some((r) => r.tier !== "builtin")
  );
var IBe = (e) => ({
  permissionMode: ae(e).mode,
  hooks: pKn(e),
  plugins: v(),
  hooksSkippedByTrust: uG()
});
function Qmo(e, { latch: o }) {
  let r,
    s = !1;
  return () => {
    if (s || (o && r)) return r;
    try {
      r = IBe(e());
    } catch (d) {
      ((r = void 0),
        (s = o),
        t(`could not read what screens a prompt now: ${d}`, { level: "error" }));
    }
    return r;
  };
}
var N7t = (e, o) =>
  e.hooks !== o.hooks ||
  e.hooksSkippedByTrust !== o.hooksSkippedByTrust ||
  e.plugins !== o.plugins ||
  (e.permissionMode !== o.permissionMode && o.hooks !== "");
var fe = (e, o) => ({
  scratch: e,
  blocked: o.blocked,
  sessionTitle: o.sessionTitle,
  stopped: o.stopped,
  wasCancelled: o.wasCancelled
});
function lo({ typed: e, result: o, context: r, promptSource: s, wakeupSource: d }) {
  let c,
    a,
    g = new Map(),
    u = new Set();
  async function S(i, p) {
    let f = p.managedHooksExcluded === !0,
      T = de(f ? (a?.scratch ?? o) : o),
      l = fe(
        T,
        await bEr({
          text: i,
          typed: e,
          context: r,
          result: T,
          promptSource: s,
          wakeupSource: d,
          tiers: p
        })
      );
    return (g.delete(i), g.set(i, l), l);
  }
  function n(i, p) {
    let f = S(i, p);
    return (u.add(f), f.finally(() => u.delete(f)));
  }
  async function P() {
    while (u.size > 0) await Promise.allSettled([...u]);
  }
  function k() {
    let [i, p] = [...g].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? i : void 0;
  }
  async function A(i) {
    let p = await n(i, pgt);
    return ((a = p), (c = p.sessionTitle ?? c), p);
  }
  function y(i) {
    let p = g.get(i);
    if (!p) return;
    return (
      (o.messages = p.scratch.messages),
      (o.allowedTools = p.scratch.allowedTools),
      (o.shouldQuery = p.scratch.shouldQuery),
      (o.resultText = p.scratch.resultText),
      (c = p.sessionTitle ?? c),
      p
    );
  }
  return {
    managed: A,
    pass: n,
    commit: y,
    settled: P,
    blockedText: k,
    managedRun: () => a,
    sessionTitle: () => c
  };
}
var ce = ({ submission: e, attachments: o, origin: r, turnId: s, shouldWait: d }) => ({
  text: e.text,
  wait: d,
  ...(o.length > 0 && { attachments: o }),
  origin: r,
  ...(s !== void 0 && { turnId: s }),
  ...(e.command !== void 0 && { command: e.command }),
  ...(e.isMeta === !0 && { isMeta: e.isMeta })
});
function lhi(e) {
  let o = !1;
  return {
    origin: e?.origin,
    settle(r) {
      ((o = !0), e?.settle(r));
    },
    settleWhen(r) {
      ((o = !0),
        r.then(
          (s) => e?.settle(s),
          () => e?.settle({ drop: re })
        ));
    },
    [Symbol.dispose]() {
      if (!o) ((o = !0), e?.settle({ drop: re }));
    }
  };
}
function le(e, o) {
  let r = Ni("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function ge(e, o) {
  let r = new Set(o ?? []);
  for (let s of e.toSorted((d, c) => c.index - d.index)) {
    let d = s.returned,
      c = H(d) ? d.context : void 0,
      a = (_j(c) ?? []).filter((u) => !r.has(u));
    if (a.length === 0) continue;
    for (let u of a) r.add(u);
    let g = a.reduce((u, S) => u + S.length, 0);
    t(
      `prompt.submit: ${s.plugin} put ${a.length} context ${a.length === 1 ? "entry" : "entries"} (${g} characters) on its result after next(); not attached, the prompt had entered`,
      { level: "warn" }
    );
  }
}
async function VNn({
  submission: e,
  origin: o,
  bridgeOrigin: r,
  mode: s,
  turnId: d,
  shouldWait: c,
  context: a,
  result: g,
  promptSource: u,
  wakeupSource: S,
  queued: n,
  isStartInput: P,
  enter: k,
  bound: A
}) {
  if (!P) await OJ.get();
  A?.();
  let { signal: y } = a.abortController,
    i = Qmo(() => a, { latch: !1 }),
    p = () => po(i()) || SEr(),
    f = p(),
    T = () => f || p();
  if (f && y.aborted) return (n?.settle({ drop: oe }), EMt);
  let l = lo({ typed: e.text, result: g, context: a, promptSource: u, wakeupSource: S }),
    M = Crn(xRr),
    { unplaceable: O } = e,
    C = Vhi(async (m, x) => {
      if (O !== void 0 && m !== e.text) return { drop: O };
      let b = await (x.managedHooksOnly ? l.managed(m) : l.pass(m, x));
      if (B(b) && T()) throw E_e(y);
      return K(m, b.blocked);
    }, M.perform),
    L,
    _ = await FZn(
      Arn(
        M,
        j_i(MHo(e.input, e.pastedContents), a.options.mainLoopModel, (m) =>
          qpt({
            signal: y,
            origin: n?.origin,
            core: { "prompt.submit": C.core },
            managed: { "prompt.submit": C.managed },
            trace: (x) => {
              if (L) ge(x, L.context);
            }
          }).prompt.submit(
            ce({
              submission: e,
              attachments: m,
              origin: DMs({
                origin: o,
                bridgeOrigin: r,
                wakeupSource: S,
                mode: s,
                promptSource: u
              }),
              turnId: d,
              shouldWait: c
            })
          )
        )
      ),
      y
    );
  if (_ === void 0) {
    await l.settled();
    let m = l.blockedText(),
      x = m === void 0 ? void 0 : l.commit(m),
      I = x?.blocked,
      b = m !== void 0 && x !== void 0 && I !== void 0;
    return (
      t(
        "prompt.submit: interrupted while a hook checked the prompt: " +
          (b ? "the block given beneath it stands" : "no verdict")
      ),
      n?.settle(b ? K(m, I) : { drop: oe }),
      b ? j(E(x, I, m), C.arrivedContext()) : EMt
    );
  }
  if (_.arrived) {
    let m = _.arrived;
    if (((L = m), m.text !== e.text))
      t(`prompt.submit: text rewritten by a hook (${e.text.length} -> ${m.text.length} chars)`);
    let x = Ne(l.commit(m.text), m, l.sessionTitle()),
      b = x.wasCancelled === !0 && T() && x.proceeds ? EMt : x,
      z = le(k, b);
    return (
      n?.settleWhen(z.then(() => m)),
      z.then(
        () => M.done(m),
        (ke) => M.failed(ke)
      ),
      b
    );
  }
  let R = _.answered,
    h = C.runs.last(),
    W = zhi(R, h?.made);
  (t(`prompt.submit: dropped (${W.drop})`), n?.settle(W));
  let V = l.managedRun();
  if (V?.blocked) return (l.commit(e.text), E(V, V.blocked, e.text));
  if (O !== void 0 && h?.made.drop === O)
    return { ended: U(O, { kind: "no_verdict", noVerdictKind: "rewrite_unplaceable" }) };
  let w = h ? l.commit(h.input) : void 0,
    Q = w?.blocked,
    xe = R.drop !== void 0 && h !== void 0 && !Ve(R, h),
    ye = C.arrivedContext();
  if (h !== void 0 && w !== void 0 && Q !== void 0 && !xe) return j(E(w, Q, h.input), ye);
  if (y.aborted && (w?.blocked === void 0 || B(w)) && T()) return EMt;
  let G = R.drop !== void 0;
  return {
    ended: U(
      G ? `Prompt dropped by a hook: ${IJe(R.drop)}` : `Prompt not submitted: ${xRr}`,
      G ? { kind: "dropped_by_hook", ...wVn(R.drop) } : { kind: "not_passed_on" }
    )
  };
}
export { KNn, EMt, ahi, yEr, _Er, bEr, Jmo, SEr, IBe, Qmo, N7t, lhi, VNn };

//# sourceMappingURL=chunk-05k9jvsd.js.map
