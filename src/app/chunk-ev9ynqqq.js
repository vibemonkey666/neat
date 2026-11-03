// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { di } from "./chunk-a16y5hcz.js";
import { Wt, Wz, sE } from "./chunk-7svjr0za.js";
function VNo(t) {
  return (
    "  " +
    t.replace(
      vze,
      `
`
    ).split(`
`).join(`
  `)
  );
}
var qNo = l$,
  vze = /\r\n?|[\u001c-\u001e\u2028\u2029\u0085\v\f]/g;
function Eze(t) {
  return t.replace(
    vze,
    `
`
  );
}
var JTe = /[\p{Cf}\p{Default_Ignorable_Code_Point}]/gu,
  { open: e, close: o, slash: i } = Wz;
function t1t(t, r) {
  return r
    .replace(JTe, "")
    .replace(
      new RegExp(`[${e}]([\\s${i}]*${di(t)}\\b(?:[^${e}${o}]*[${o}])?)`, "gi"),
      (n, s) => "[" + s
    );
}
var n1t = "forwarded_user_turns",
  wHe = "forwarded_turn",
  p = ["transcript", n1t, wHe];
function Q7e(t) {
  let r = t;
  for (let n of p) r = t1t(n, r);
  return r;
}
function l$(t) {
  return (
    "  " +
    Q7e(Eze(t)).split(`
`).join(`
  `)
  );
}
var a = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/g;
function qFr(t) {
  return VNo(Wt(sE(Eze(t).replace(JTe, "").replace(a, ""))));
}
export { VNo, qNo, vze, Eze, JTe, t1t, n1t, wHe, Q7e, l$, qFr };

//# sourceMappingURL=chunk-ev9ynqqq.js.map
