// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Bf, iA } from "./chunk-ajtyjx88.js";
import { am } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { Td } from "./chunk-exz0w70z.js";
import { Vd, Por } from "./chunk-qakn3b85.js";
import { Df } from "./chunk-yyq6mj0n.js";
var g = "claudecode/agentId",
  p = "claudecode/agentType",
  c = "claudecode/isObserver",
  d = 128,
  f = 64;
function rtn(r) {
  let { name: n, config: e } = r;
  if (n !== Td) return !1;
  return Vd(e) || (e.scope === "dynamic" && "url" in e && typeof e.url === "string" && Por(e.url));
}
function fBn(r, n) {
  let { agentId: e, agentContext: t } = n;
  if (e === void 0 || !rtn(r)) return {};
  if (iA(t) && t.isMainSession === !0 && t.agentId === e) return {};
  let o = re(am(n.agentType ?? ""), d);
  return { [g]: e, ...(o !== "" && { [p]: o }), ...(u(e, n) && { [c]: !0 }) };
}
function u(r, { agentContext: n, taskRegistry: e }) {
  let t = [r],
    o = new Set();
  for (let i = t.pop(); i !== void 0; i = t.pop()) {
    if (o.has(i)) continue;
    if (o.size >= f) return !0;
    o.add(i);
    let s = e.get(i);
    if (s !== void 0 && Df(s)) return !0;
    if (s !== void 0 && "parentAgentId" in s && typeof s.parentAgentId === "string")
      t.push(s.parentAgentId);
    if (!Bf(n)) {
      let a = i === n.agentId ? n.parentAgentId : i === r ? n.agentId : void 0;
      if (a !== void 0) t.push(a);
    }
  }
  return !1;
}
export { rtn, fBn };

//# sourceMappingURL=chunk-sw2zm7yp.js.map
