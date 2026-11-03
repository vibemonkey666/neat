// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { yn } from "./chunk-4kxznmzw.js";
import { HIn } from "./chunk-b77hptpq.js";
import { w } from "./chunk-7m7t89vx.js";
import { BR, KB } from "./chunk-h56pfqh7.js";
import { Q, e } from "./chunk-f790ajz4.js";
import { Gt, Xt, j } from "./chunk-bq35vvkw.js";
j();
import { PassThrough as u } from "stream";
function m() {}
var Lxt = Gt(!1);
function XM(r) {
  let i = w(5),
    { children: t } = r,
    { exit: n } = BR(),
    a,
    o;
  if (i[0] !== n)
    ((a = () => {
      let d = setTimeout(n, 0);
      return () => clearTimeout(d);
    }),
      (o = [n]),
      (i[0] = n),
      (i[1] = a),
      (i[2] = o));
  else ((a = i[1]), (o = i[2]));
  Xt(a, o);
  let c;
  if (i[3] !== t) ((c = e(Q, { children: t })), (i[3] = t), (i[4] = c));
  else c = i[4];
  return c;
}
async function JM(r, t) {
  (r.render(e(XM, { children: t })), await r.waitUntilExit());
}
async function i6e(r, { columns: t, storageV5: n }) {
  let i = "",
    a = !1,
    o = new u();
  if (t !== void 0) o.columns = t;
  return (
    o.on("data", (c) => {
      if (a) return;
      ((a = !0), (i = c.toString()));
    }),
    await (
      await KB(
        e(XM, {
          children: e(Lxt.Provider, { value: !0, children: e(HIn, { value: m, children: r }) })
        }),
        { stdout: o, patchConsole: !1 },
        { storageV5: n }
      )
    ).waitUntilExit(),
    i
  );
}
async function WPn(r, t) {
  let n = await i6e(r, t);
  return yn(n);
}
export { Lxt, XM, JM, i6e, WPn };

//# sourceMappingURL=chunk-wa4mxzf9.js.map
