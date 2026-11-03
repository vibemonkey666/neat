// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { rt, s } from "./chunk-h56pfqh7.js";
import { e } from "./chunk-f790ajz4.js";
function Tl(f) {
  let b = w(6),
    { children: r, paddingX: a, marginTop: o, marginBottom: n } = f,
    d = a === void 0 ? 1 : a;
  const t = rt() ? void 0 : "dashed";
  let i;
  if (b[0] !== r || b[1] !== n || b[2] !== o || b[3] !== d || b[4] !== t)
    ((i = e(s, {
      borderStyle: t,
      borderColor: "subtle",
      borderLeft: !1,
      borderRight: !1,
      flexDirection: "column",
      overflow: "hidden",
      paddingX: d,
      marginTop: o,
      marginBottom: n,
      children: r
    })),
      (b[0] = r),
      (b[1] = n),
      (b[2] = o),
      (b[3] = d),
      (b[4] = t),
      (b[5] = i));
  else i = b[5];
  return i;
}
export { Tl };

//# sourceMappingURL=chunk-ga7dw895.js.map
