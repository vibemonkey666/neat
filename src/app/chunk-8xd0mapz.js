// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { z2e } from "./chunk-wany0nxw.js";
import { p } from "./chunk-qmkm2x59.js";
import { Be, At } from "./chunk-at88wjsn.js";
import { o, v, M, u, B, A } from "./chunk-0bqrj5ah.js";
var d = 2147483647;
var Xro = 2,
  c = 64,
  y = /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/,
  l = p(() => v().int().min(0).max(d)),
  S = p(() =>
    u({
      side: B(["device", "cloud"]),
      generation: l(),
      tree: o().regex(y).nullable(),
      appliedGeneration: l(),
      mayHaveUnuploadedChanges: M(),
      shipping: l().nullable(),
      appliesOtherSide: M(),
      instanceId: o().regex(z2e),
      sequence: v().int().min(0).max(d)
    })
  ),
  m = ["shipped", "shipping", "unchanged", "deferred", "kept_here", "failed", "not_running"],
  f = (e) =>
    o()
      .max(e)
      .regex(/^[a-z0-9_]+$/),
  s = p(() => f(c)),
  h = p(() =>
    u({
      v: A(Xro),
      frame: S(),
      outcome: u({ kind: B(m), reason: s().optional() }),
      ask_id: o().regex(z2e).optional()
    })
  );
function yps(e) {
  let n = h().safeParse(e);
  if (!n.success) return null;
  let { v: t, frame: r, outcome: a, ask_id: i } = n.data;
  if (r.side !== "device") return null;
  return {
    v: t,
    frame: r,
    outcome: { kind: a.kind, ...(a.reason !== void 0 && { reason: a.reason }) },
    ...(i !== void 0 && { askId: i })
  };
}
function _ps(e) {
  let n = s().safeParse(e.outcome.reason);
  return {
    v: e.v,
    frame: e.frame,
    outcome: { kind: e.outcome.kind, ...(n.success && { reason: n.data }) },
    ...(e.askId !== void 0 && { ask_id: e.askId })
  };
}
var g = { frame: null, heardAt: null, stale: !0 };
function ddt() {
  let e = new Map(),
    n = (r) => `${r.source}:${r.name}`,
    t = (r) => {
      let a = e.get(n(r));
      return a !== void 0 && a.servingEpoch === r.description?.epoch ? a.value : void 0;
    };
  return {
    of: t,
    file(r, a) {
      let i = r.description?.epoch;
      if (i !== void 0) e.set(n(r), { servingEpoch: i, value: a(t(r)) });
    }
  };
}
function bps() {
  let e = ddt(),
    n = 0;
  return {
    peer(t) {
      let r = e.of(t);
      return r === void 0 ? g : { frame: r.frame, heardAt: r.heardAt, stale: r.era < n };
    },
    heard(t, r, a) {
      e.file(t, (i) =>
        i === void 0 || i.frame.instanceId !== r.instanceId || r.sequence > i.frame.sequence
          ? { frame: r, heardAt: a, era: n }
          : i
      );
    },
    invalidateAll() {
      n += 1;
    }
  };
}
var _ = /^(bash|powershell|bash\+powershell)(?::(core|desktop))?$/;
function gps(e) {
  let n = [...(e.bash ? ["bash"] : []), ...(e.powershell ? ["powershell"] : [])];
  if (n.length === 0) return;
  let t = e.powershell?.edition;
  return `${n.join("+")}${t === void 0 ? "" : `:${t}`}`;
}
function dOn(e) {
  let n = e === void 0 ? null : _.exec(e);
  if (n === null) return;
  let t = n[2];
  if (n[1] === "bash") return t === void 0 ? { bash: !0, powershell: void 0 } : void 0;
  return { bash: n[1] === "bash+powershell", powershell: { edition: t } };
}
function hps(e, n) {
  return { bash: e.includes(Be), powershell: e.includes(At) ? { edition: n ?? void 0 } : void 0 };
}
var zee = 86400000;
export { gps, dOn, hps, zee, Xro, yps, _ps, ddt, bps };

//# sourceMappingURL=chunk-8xd0mapz.js.map
