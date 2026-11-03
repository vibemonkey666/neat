// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xJ, F4 } from "./chunk-j0tbz6ra.js";
import { Ns } from "./chunk-5rw2zfa0.js";
var r = [
  {
    pluginSource: `${F4}@${Ns}`,
    serverName: xJ,
    title: "Claude Test (built into Claude Code)",
    personOnly: !0
  }
];
function Ibo(i, n) {
  return r.find((e) => e.pluginSource === n && e.serverName === i)?.title;
}
function yft(i, n) {
  return Ibo(i, n) !== void 0;
}
function PBn(i, n) {
  return r.some((e) => e.personOnly && e.serverName === i && (!n || e.pluginSource === n));
}
function ltn(i, n, e, t) {
  return (
    e === "password" &&
    t.type === "string" &&
    !("format" in t && t.format !== void 0) &&
    !("enum" in t) &&
    !("oneOf" in t) &&
    yft(i, n)
  );
}
export { Ibo, yft, PBn, ltn };

//# sourceMappingURL=chunk-bedhwrf8.js.map
