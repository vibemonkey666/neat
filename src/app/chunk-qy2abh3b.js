// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import { Wl } from "./chunk-5j3z2ycg.js";
import { Yi } from "./chunk-yvs3tmdx.js";
import { o, oe, T, u } from "./chunk-0bqrj5ah.js";
var i = p(() => u({ skills: T(oe()), nextCursor: o().nullish() })),
  s = p(() => u({ skill: oe() }));
function c(t, e) {
  return Yi(t.client).request(
    { method: "skills/list", params: e === void 0 ? {} : { cursor: e } },
    i(),
    { timeout: Wl() }
  );
}
function S(t, e, l) {
  return Yi(t.client).request({ method: "skills/get", params: { uri: e } }, s(), {
    timeout: Wl(),
    signal: l?.signal
  });
}
export { S as getMcpSkill, c as listMcpSkillPage };

//# sourceMappingURL=chunk-qy2abh3b.js.map
