// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-ewvf3tep.js";
import "./chunk-jazcqqqr.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-19xvg81r.js";
import "./chunk-znkwh1rm.js";
import "./chunk-4kxy1036.js";
import "./chunk-4nzy53ma.js";
import "./chunk-1g9x3zw8.js";
import { Xi } from "./chunk-r1dvrqha.js";
import "./chunk-7svjr0za.js";
import "./chunk-hk0dvhmb.js";
import { wo } from "./chunk-rnxkk435.js";
function c(t, o, a, d) {
  let e = (i, r) => typeof i === "string" && typeof r === "string" && i === a(r),
    s = e(t.saved_pages_dir, o)
      ? `[A quickstart in this conversation saved reference pages of this type on disk in ${wo([t.saved_pages_dir])}; its result lists them, so those are not attached here.]`
      : "";
  if (t.not_listed === !0)
    return s === ""
      ? ""
      : `

${s}`;
  let n = s === "" ? "" : ` ${s}`;
  if (typeof t.saved_system === "string" && e(t.saved_system_dir, t.saved_system))
    return `

[A quickstart in this conversation already listed the design systems and saved the files of ${Xi(t.saved_system, "(unrecognized address)")} on disk \u2014 skip the instructions' step that lists them and reads that README; its result lists the saved files.]${n}`;
  return s === "" ? null : `${d}${n}`;
}
export { c as afterQuickstartSavedLine };

//# sourceMappingURL=chunk-at4angf3.js.map
