// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Mwe, mt } from "./chunk-18g32wet.js";
import { e, r } from "./chunk-f790ajz4.js";
function Kc(x) {
  let i = w(9),
    { status: t, children: l } = x,
    { color: o } = Mwe[t],
    c;
  if (i[0] !== t)
    ((c = e(s, { width: 2, flexShrink: 0, children: e(mt, { status: t }) })),
      (i[0] = t),
      (i[1] = c));
  else c = i[1];
  const u = !o;
  let a;
  if (i[2] !== l || i[3] !== o || i[4] !== u)
    ((a = e(s, {
      flexGrow: 1,
      flexShrink: 1,
      children: e(n, { color: o, dimColor: u, children: l })
    })),
      (i[2] = l),
      (i[3] = o),
      (i[4] = u),
      (i[5] = a));
  else a = i[5];
  let d;
  if (i[6] !== c || i[7] !== a)
    ((d = r(s, { flexDirection: "row", children: [c, a] })), (i[6] = c), (i[7] = a), (i[8] = d));
  else d = i[8];
  return d;
}
export { Kc };

//# sourceMappingURL=chunk-gppw1293.js.map
