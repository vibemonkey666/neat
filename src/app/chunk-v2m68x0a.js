// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { Fo } from "./chunk-j0tbz6ra.js";
import { o, oe, T, u, A } from "./chunk-0bqrj5ah.js";
var a_s = "Resumed agent. Its final report is not in this message.",
  l_s = "Resumed agent. Its final report follows this JSON, framed by the harness.";
function Plo({ displayName: e, content: n }) {
  return `Resumed agent ${e}. Result:

${
  Fo(
    n,
    `
`
  ) || "(no text output)"
}`;
}
var Ilo = p(() =>
  u({
    message: o().optional(),
    display: o().optional(),
    inlineHandback: u({ displayName: o(), content: T(u({ type: A("text"), text: o() })) })
      .optional()
      .catch(void 0),
    routing: oe().optional(),
    request_id: oe().optional(),
    target: oe().optional()
  })
);
function Olo(e) {
  if (e.routing) return;
  if (e.request_id !== void 0 && e.target !== void 0) return;
  return e.display ?? (e.inlineHandback ? Plo(e.inlineHandback) : e.message);
}
function d_s(e) {
  let n = Ilo().safeParse(e);
  return n.success ? (Olo(n.data) ?? "") : "";
}
export { a_s, l_s, Plo, Ilo, Olo, d_s };

//# sourceMappingURL=chunk-v2m68x0a.js.map
