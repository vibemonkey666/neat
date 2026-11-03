// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { s, BR } from "./chunk-h56pfqh7.js";
import { w } from "./chunk-7m7t89vx.js";
import { an, B6 } from "./chunk-kk8f9f8q.js";
import { qs } from "./chunk-y43e6aw3.js";
import { ds } from "./chunk-1kj0zhn3.js";
import { Te } from "./chunk-pbpv20s6.js";
import { TA } from "./chunk-63zjsa96.js";
import { e } from "./chunk-f790ajz4.js";
import { Gt, de, be, ee, C, y, j } from "./chunk-bq35vvkw.js";
j();
function ls(a, o, n = !0) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a),
    l = ee(() => ({ "app:interrupt": r, "app:exit": t }), [r, t]);
  return (an(l, { context: "Global", isActive: n }), i);
}
function Uxt(a, o, n = !0) {
  let { handleInterrupt: r, handleExit: t, exitState: i } = b(o, a);
  return {
    entries: ee(
      () =>
        n
          ? [
              { action: "app:interrupt", run: r },
              { action: "app:exit", run: t }
            ]
          : [],
      [n, r, t]
    ),
    exitState: i
  };
}
function b(a, o) {
  let { exit: n } = BR(),
    [r, t] = y({ pending: !1, keyName: null }),
    i = ee(() => o ?? n, [o, n]),
    l = TA(),
    p = qs("app:interrupt", "Global", "Ctrl-C"),
    u = qs("app:exit", "Global", "Ctrl-D"),
    E = l && p ? p : "Ctrl-C",
    h = l && u ? u : "Ctrl-D",
    m = B6((x) => t({ pending: x, keyName: E }), i),
    d = B6((x) => t({ pending: x, keyName: h }), i),
    D = de(() => {
      if (a?.()) return;
      m();
    }, [m, a]),
    S = de(() => {
      d();
    }, [d]);
  return { handleInterrupt: D, handleExit: S, exitState: r };
}
j();
var c = Gt(null),
  B2 = 1;
function klt(a) {
  let i = w(8),
    { reserve: o, children: n } = a,
    r = C(null),
    { rows: t } = ds(Te()),
    l;
  if (i[0] !== o || i[1] !== t)
    ((l = { box: r, rows: t, reserve: o }), (i[0] = o), (i[1] = t), (i[2] = l));
  else l = i[2];
  let p;
  if (i[3] !== n)
    ((p = e(s, { ref: r, flexDirection: "column", children: n })), (i[3] = n), (i[4] = p));
  else p = i[4];
  let u;
  if (i[5] !== l || i[6] !== p)
    ((u = e(c, { value: l, children: p })), (i[5] = l), (i[6] = p), (i[7] = u));
  else u = i[7];
  return u;
}
function j2() {
  return be(c);
}
export { ls, Uxt, B2, klt, j2 };

//# sourceMappingURL=chunk-vgsmcxaz.js.map
