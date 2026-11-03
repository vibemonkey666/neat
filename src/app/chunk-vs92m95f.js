// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { d4t, Ise } from "./chunk-v19xty83.js";
import { n, Yt } from "./chunk-h56pfqh7.js";
import { e } from "./chunk-f790ajz4.js";
function F2(H) {
  let y = w(10),
    { children: r, color: u, bold: m, linkHref: a } = H,
    o;
  if (y[0] !== r || y[1] !== a) {
    o = [];
    let l = 0;
    for (const i of r.matchAll(d4t)) {
      let x = Ise(i[0]);
      let k = a === void 0 ? x : a(x);
      if (k === void 0) {
        continue;
      }
      if (i.index > l) o.push(r.slice(l, i.index));
      (o.push(e(Yt, { url: k, children: k }, i.index)), (l = i.index + x.length));
    }
    let s;
    if (y[3] !== r || y[4] !== l) ((s = r.slice(l)), (y[3] = r), (y[4] = l), (y[5] = s));
    else s = y[5];
    o.push(s);
    ((y[0] = r), (y[1] = a), (y[2] = o));
  } else o = y[2];
  let s;
  if (y[6] !== m || y[7] !== u || y[8] !== o)
    ((s = e(n, { color: u, bold: m, children: o })),
      (y[6] = m),
      (y[7] = u),
      (y[8] = o),
      (y[9] = s));
  else s = y[9];
  return s;
}
export { F2 };

//# sourceMappingURL=chunk-vs92m95f.js.map
