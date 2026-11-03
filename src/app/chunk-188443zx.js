// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { Sn, Ns, Jx, mc, vTt, mot } from "./chunk-5rw2zfa0.js";
import { zk } from "./chunk-pbffp8rf.js";
import { zv } from "./chunk-w1zqgmvm.js";
import { OE, bY, oLo } from "./chunk-783pymr7.js";
import { Rd, BA } from "./chunk-j0tbz6ra.js";
async function fwe(n, i, r) {
  let o = Jx(n),
    { name: a, marketplace: e } = mc(o);
  if (e === Sn && OE().nameRegistration === void 0) await Rd(r);
  let l = bY(a, e, i),
    m = vTt(e);
  if (!m && e !== Ns && !mot(a, e)) return l;
  let s = !1;
  try {
    s = await c(o, a, e, r);
  } catch (u) {
    t(
      `Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(u)}); logging its name as third-party`
    );
  }
  return {
    ...l,
    ...(m && e !== void 0 && { marketplace_name_redacted: oLo(e) }),
    ...(!s && { plugin_name_redacted: b(zv) })
  };
}
async function c(n, i, r, o) {
  if (mot(i, r)) return !0;
  if (r === Ns) return zk(i) !== void 0;
  return (await BA(n, o)) !== null;
}
export { fwe };

//# sourceMappingURL=chunk-188443zx.js.map
