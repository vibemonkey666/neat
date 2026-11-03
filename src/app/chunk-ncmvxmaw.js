// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ks, bR } from "./chunk-znkwh1rm.js";
import { mf } from "./chunk-4nzy53ma.js";
import { Fn } from "./chunk-dvghjmtr.js";
import { nOe } from "./chunk-gcktn2s0.js";
import { G6n } from "./chunk-qyvshzj3.js";
class r {
  reader = void 0;
  register(e) {
    this.reader = e;
  }
  read() {
    return this.reader?.() ?? !1;
  }
}
var o = new r();
function tyo(e) {
  o.register(e);
}
function C8e() {
  let e = bR("allow_plugin_skill_search");
  if (e === "org_denied" || e === "latched" || e === "unregistered" || (e !== null && Ks("hipaa")))
    return !1;
  if (nOe()) return !0;
  return mf() && Fn() && o.read();
}
function TAi(e) {
  if (!G6n.includes(e)) return !0;
  return C8e();
}
export { tyo, C8e, TAi };

//# sourceMappingURL=chunk-ncmvxmaw.js.map
