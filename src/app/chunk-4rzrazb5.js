// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k_, Lq } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { pt } from "./chunk-7c3thgax.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { Rt } from "./chunk-wany0nxw.js";
import { jm } from "./chunk-m83s757k.js";
import { Ao } from "./chunk-ar6ynjt8.js";
import { c0 } from "./chunk-ctvsv6p4.js";
import { f5, RV } from "./chunk-s6fbb5tf.js";
function VUe(o) {
  let l = Lo();
  return (
    (l.workflowAuthoringSkillAvailable ??= e()),
    l.workflowAuthoringSkillAvailable && !RV(c0) && (o === void 0 || r(o))
  );
}
function e() {
  if (!jm()) return !1;
  if (f5() || k_()) return !1;
  if (i.CLAUDE_CODE_ENTRYPOINT === "local-agent") return !1;
  let o = pt().skillOverrides?.[c0];
  if (o === "off" || o === "user-invocable-only") return !1;
  let l = Lq();
  if (l !== void 0 && !l.includes(c0)) return !1;
  return !0;
}
function r(o) {
  return o.some((l) => Rt(l, Ao));
}
export { VUe };

//# sourceMappingURL=chunk-4rzrazb5.js.map
