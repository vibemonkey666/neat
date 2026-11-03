// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { nw, Bit } from "./chunk-c3npf81n.js";
import { Pe } from "./chunk-4hww8411.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { sH } from "./chunk-3hjc969z.js";
var l = 1000;
function kzt(e = process.argv.slice(2)) {
  return Bit(e) && nw("--output-format", e) === "stream-json";
}
function v_e() {
  return Ne(process.env.CLAUDE_CODE_STARTUP_FAILURE_RESULTS);
}
function Tzt(e, t = process.argv.slice(2)) {
  let r = nw("--session-id", t);
  return (nw("--sdk-url", t) === void 0 ? Kt(r) : r) || e;
}
function OKe({ sessionId: e, message: t, reason: r, resultIndex: n = 0 }) {
  return {
    ...sH(e, [t]),
    ...(r !== void 0 && { startup_failure_reason: r }),
    ...(n !== null && { result_index: n })
  };
}
async function kV(e) {
  if (v_e()) await Ntt([OKe({ ...e, sessionId: Tzt(e.sessionId) })]);
}
async function Ntt(e, { goesOn: t = !1 } = {}) {
  let r = process.stdout;
  if (!kzt() || r.writableEnded || r.destroyed) return !1;
  let n = e
      .map(
        (o) =>
          JSON.stringify(o) +
          `
`
      )
      .join(""),
    s = (o) => {},
    u = new Promise((o) => {
      s = o;
    }),
    i = () => s(!1);
  r.once("error", i);
  try {
    r.write(n, (o) => s(!o));
  } catch {
    return !1;
  }
  let a = (await Pe(u, l)) ?? !1;
  if (t && a) r.off("error", i);
  return a;
}
export { kzt, v_e, Tzt, OKe, kV, Ntt };

//# sourceMappingURL=chunk-sx4xfr26.js.map
