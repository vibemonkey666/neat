// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { K } from "./chunk-61vn6n52.js";
import { ed } from "./chunk-hhgrzgnb.js";
import { rt, s, ja } from "./chunk-h56pfqh7.js";
import { Cwe } from "./chunk-tgsekzq8.js";
import { If } from "./chunk-df5gvbw5.js";
import { e } from "./chunk-f790ajz4.js";
function Yy() {
  return K((n) => ed(n));
}
var t = 150;
function Dxt(n) {
  let m = w(8),
    { tone: f, text: i } = n,
    E = If(),
    S = rt(),
    o = E || S,
    [c, T] = ja(o ? null : t);
  const p = Math.floor(T / t);
  let r;
  if (m[0] !== o || m[1] !== p || m[2] !== i || m[3] !== f)
    ((r = e(Cwe, { state: "live", tone: f, text: i, linkify: !1, frame: p, reducedMotion: o })),
      (m[0] = o),
      (m[1] = p),
      (m[2] = i),
      (m[3] = f),
      (m[4] = r));
  else r = m[4];
  let u;
  if (m[5] !== c || m[6] !== r)
    ((u = e(s, { ref: c, flexDirection: "column", children: r })),
      (m[5] = c),
      (m[6] = r),
      (m[7] = u));
  else u = m[7];
  return u;
}
var Awe = 0;
export { Yy, Dxt, Awe };

//# sourceMappingURL=chunk-zfdv17z6.js.map
