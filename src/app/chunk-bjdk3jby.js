// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vj, Re, L$ } from "./chunk-ajtyjx88.js";
import { Me } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { iUe, RPe, we } from "./chunk-bf8qkzmg.js";
import { e, r } from "./chunk-f790ajz4.js";
import { S } from "./chunk-a2y39866.js";
function Ycr(E) {
  let o = w(20),
    { customApiKeyTruncated: a, onDone: c } = E,
    { storageV5: d } = Me(),
    y = iUe() ? 2 : 0,
    C;
  if (o[0] !== a || o[1] !== c || o[2] !== d)
    ((C = function t(L) {
      G: switch (L) {
        case "yes": {
          (Re((b) => {
            let { approved: V, rejected: H } = L$(b);
            return { ...b, customApiKeyResponses: { approved: [...V, a], rejected: H } };
          }, d),
            vj(),
            c(!0));
          break G;
        }
        case "no": {
          (Re((D) => {
            let { approved: O, rejected: Y } = L$(D);
            return { ...D, customApiKeyResponses: { approved: O, rejected: [...Y, a] } };
          }, d),
            c(!1));
        }
      }
    }),
      (o[0] = a),
      (o[1] = c),
      (o[2] = d),
      (o[3] = C));
  else C = o[3];
  let t = C,
    i;
  if (o[4] !== t) ((i = () => t("no")), (o[4] = t), (o[5] = i));
  else i = o[5];
  let I;
  if (o[6] === S) ((I = e(RPe, { bold: !0, children: "ANTHROPIC_API_KEY" })), (o[6] = I));
  else I = o[6];
  let u;
  if (o[7] !== a)
    ((u = r(n, { children: [I, r(n, { children: [": sk-ant-...", a] })] })),
      (o[7] = a),
      (o[8] = u));
  else u = o[8];
  let p;
  if (o[9] !== y || o[10] !== u)
    ((p = e(s, { paddingLeft: y, children: u })), (o[9] = y), (o[10] = u), (o[11] = p));
  else p = o[11];
  let P;
  if (o[12] === S) ((P = e(n, { children: "Do you want to use this API key?" })), (o[12] = P));
  else P = o[12];
  let T;
  if (o[13] === S)
    ((T = r(n, { children: ["No (", e(RPe, { bold: !0, children: "recommended" }), ")"] })),
      (o[13] = T));
  else T = o[13];
  let m;
  if (o[14] !== t)
    ((m = e(dr, {
      hideIndexes: !0,
      focus: "cancel",
      cancelLabel: T,
      onConfirm: () => t("yes"),
      onCancel: () => t("no")
    })),
      (o[14] = t),
      (o[15] = m));
  else m = o[15];
  let k;
  if (o[16] !== i || o[17] !== p || o[18] !== m)
    ((k = r(we, {
      title: "Detected a custom API key in your environment",
      color: "warning",
      onCancel: i,
      exitOnCtrlCD: !0,
      children: [p, P, m]
    })),
      (o[16] = i),
      (o[17] = p),
      (o[18] = m),
      (o[19] = k));
  else k = o[19];
  return k;
}
export { Ycr };

//# sourceMappingURL=chunk-bjdk3jby.js.map
