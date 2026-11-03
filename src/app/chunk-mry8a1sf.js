// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Su } from "./chunk-9z5ybxhe.js";
var e = "self_hosted_runner_";
function FXt(n) {
  return n.startsWith(e);
}
function GDn(n) {
  return Su([...n]).some(FXt);
}
function Ylo(n) {
  return Su([n])
    .filter((t) => !FXt(t))
    .join(",");
}
function Xlo(n) {
  if (n === void 0) return !1;
  let t = typeof n === "string" ? n : String(n);
  return Su([t]).some(FXt);
}
function __s(n) {
  let t = n.tools;
  if (t === void 0) return n;
  let o = typeof t === "string" ? t : String(t);
  if (!Xlo(o)) return typeof t === "string" ? n : { ...n, tools: o };
  return { ...n, tools: Ylo(o) };
}
export { FXt, GDn, Ylo, Xlo, __s };

//# sourceMappingURL=chunk-mry8a1sf.js.map
