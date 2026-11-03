// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, vCt, CYe, ye, Wr } from "./chunk-wrtp8qz8.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, Vo, t } from "./chunk-4kxznmzw.js";
import { Fp, pn, $Gt, dj } from "./chunk-0evsancd.js";
import { nw, bS } from "./chunk-c3npf81n.js";
import { v_e, Tzt, kV, Ntt } from "./chunk-sx4xfr26.js";
import { dW, Yfe } from "./chunk-4nzy53ma.js";
import { NVe, Cs } from "./chunk-ajtyjx88.js";
import { p } from "./chunk-qmkm2x59.js";
import { DXe, Ld } from "./chunk-j0tbz6ra.js";
import { nCe } from "./chunk-crvt0hax.js";
import { noe } from "./chunk-h2tyaevk.js";
import { hhn } from "./chunk-gjpjdnzc.js";
import { u_r, bIt, Zio } from "./chunk-92zkks00.js";
import { lXt, dXt, aDn } from "./chunk-655shhf4.js";
import { sH } from "./chunk-3hjc969z.js";
import { o, M, oe, yt, A } from "./chunk-0bqrj5ah.js";
import { randomUUID as c } from "crypto";
var g = 1000,
  S = p(() =>
    yt({
      type: A("user"),
      initiator: o().optional(),
      origin: oe().optional(),
      isSynthetic: M().optional(),
      is_meta: M().optional(),
      seeded_summon: M().optional(),
      shouldQuery: M().optional()
    })
  );
function y(e) {
  try {
    let r = S().safeParse(Vo(e));
    return (
      r.success &&
      DXe(r.data.initiator) === void 0 &&
      !NVe(r.data.origin, r.data.isSynthetic) &&
      !r.data.is_meta &&
      !r.data.seeded_summon &&
      r.data.shouldQuery !== !1
    );
  } catch {
    return !1;
  }
}
async function w(e, r) {
  let a = (async () => {
    let s = "";
    for (;;) {
      let { done: d, value: l } = await e.next();
      if (d) return !1;
      if (
        ((s += l),
        !l.includes(`
`))
      )
        continue;
      let n = s.split(`
`);
      if (((s = n.pop() ?? ""), n.some(y))) return !0;
    }
  })().catch(() => !1);
  return (await Pe(a, r)) ?? !1;
}
async function f(e, r = g) {
  if (
    Wr()?.hostVerdict === void 0 ||
    !dW() ||
    v_e() ||
    Yfe() ||
    nw("--input-format") !== "stream-json" ||
    bS("--no-session-persistence") ||
    i.CLAUDE_BRIDGE_REATTACH_SESSION !== void 0 ||
    !(await w(u_r() ?? bIt(), r))
  )
    return !1;
  let a = Tzt(q()),
    s = `Claude Code didn't start. ${e.replace(/\s+/g, " ").replace(/(?:[a-z][a-z\d+.-]*:\/\/|www\.|[\w.+-]+@)[^\s<`]*[^\s<`.,;:)]|[\\`*_[\]<]/gi, (n) => (n.length > 1 ? `\`${n}\`` : n === "<" ? "&lt;" : `\\${n}`))}`,
    { errors: d, ...l } = sH(a, []);
  return Ntt([
    {
      type: "assistant",
      message: Ld({ content: s }).message,
      parent_tool_use_id: null,
      session_id: a,
      uuid: c()
    },
    { ...l, subtype: "success", is_error: !1, result: s, terminal_reason: "turn_setup_failed" }
  ]);
}
var u = 2000;
async function MUe(e) {
  try {
    if ((Zio(e), dXt() || aDn())) await m();
  } catch {
    t("[3P telemetry] managed-settings refusal send failed", { level: "error" });
  }
}
async function oIe(e) {
  if (e.policyUnreadable) await MUe("policy_invalid");
  else if (e.reason === "provider_not_allowed") await MUe("provider_not_allowed");
}
function _It(e) {
  if ((Zio(e), CYe() === null && (dXt() || aDn()))) bt(m);
}
async function m() {
  try {
    if (CYe() === null) {
      if (!Cs() && !ye()) return;
      (noe(), await Promise.race([lXt(), X(u)]));
    }
    let e = vCt();
    if (e) await Promise.race([nCe.settledWithin(u / 2).then(() => e.forceFlush()), X(u)]);
  } catch {
    t("[3P telemetry] managed-settings refusal export failed", { level: "error" });
  }
}
async function Xio({ message: e, reason: r, errorType: a, print: s, beforeExit: d }) {
  if (s === void 0) Fp(e);
  else await s(e);
  if (a !== void 0) await MUe(a);
  let l = await f(e);
  return (
    await kV({ sessionId: q(), message: e, reason: r }),
    await d?.(),
    await hhn(),
    await dj(),
    l ? $Gt(0) : pn(void 0, s === void 0 ? "cli_error" : "exit_with_message")
  );
}
export { MUe, oIe, _It, Xio };

//# sourceMappingURL=chunk-5rbbn9bc.js.map
