// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { gc, Cse } from "./chunk-9z5ybxhe.js";
import { at, qt } from "./chunk-at88wjsn.js";
import { Lt, _u } from "./chunk-r1dvrqha.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { Lde, Y6n, j1, a_t } from "./chunk-brsp4twh.js";
import { HE } from "./chunk-q85nvv4x.js";
import { Ni } from "./chunk-e36t8chg.js";
import { IG } from "./chunk-80t8235z.js";
import { DS } from "./chunk-y609bddh.js";
var a = [Lt, _u].flatMap((o) => [o, ...Cse(o)]);
function c(o, t) {
  let r = [
      ...Object.entries(o.options.toolAliases ?? {}),
      ...Object.entries(ae(o).toolAliases ?? {})
    ],
    e = r.flatMap(([n, i]) => [...(t.includes(i) ? [n] : []), ...(t.includes(n) ? [i] : [])]),
    s = r.flatMap(([n, i]) => (e.includes(i) ? [n] : []));
  return [...t, ...e, ...s];
}
function u(o) {
  return o.hooks.some((t) => !a_t({ hook: t }));
}
function f(o, t, r = !0) {
  if (!o || o === "*") return !0;
  if (/^[a-zA-Z0-9_|, -]+$/.test(o))
    return o
      .split(/[|,]/)
      .map((e) => e.trim())
      .some((e) => t.includes(e) || t.includes(gc(e)));
  try {
    let e = Y6n(o);
    return t.some((s) => e.test(s));
  } catch (e) {
    return r || e instanceof Lde;
  }
}
function l(o, t, r = () => !1) {
  let e = HE("tool.call").filter((n) => !r(n)),
    s = HE("tool.check");
  return (
    Ni("classic.PreToolUse", void 0, HE("classic.PreToolUse")) ||
    o.some(
      (n) =>
        Ni("tool.call", { tool: n }, e) || Ni("tool.check", t ? { tool: n } : j1({ name: n }), s)
    )
  );
}
function myo(o, t) {
  try {
    let r = t.flatMap((s) => [s, ...Cse(s)]),
      e = c(o, r);
    return l(e, e.length > r.length, DS);
  } catch {
    return !0;
  }
}
function gyo(o, t) {
  try {
    let r = t === void 0 ? a : [...a, t, ...Cse(t)],
      e = c(o, r);
    if (l(e, e.length > r.length)) return !0;
    if (o.sessionHooksRegistry.has(o.agentId ?? o.session.id, "PreToolUse")) return !0;
    return IG("PreToolUse").some((s) => f(s.matcher, e) && u(s));
  } catch {
    return !0;
  }
}
var d = [at, qt].flatMap((o) => [o, ...Cse(o)]);
function hyo() {
  return l(d, !1, DS) || IG("PreToolUse").some((o) => f(o.matcher, d, !1) && u(o));
}
export { myo, gyo, hyo };

//# sourceMappingURL=chunk-9s6nq5y2.js.map
