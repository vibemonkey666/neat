// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { e8, lhe, vqn, $T } from "./chunk-f451a1hs.js";
import { w } from "./chunk-7m7t89vx.js";
import { fn, n } from "./chunk-h56pfqh7.js";
import { V } from "./chunk-j32s98r9.js";
import { e } from "./chunk-f790ajz4.js";
import { de, P, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
var U = 2000,
  x = 2000;
function Epe(c) {
  let r = fn(),
    [i, t] = y(null),
    o = C(null),
    u = C(null),
    l = C(null),
    a = C(0),
    s = C(!0),
    p = de(() => {
      ((a.current += 1),
        l.current?.(),
        (l.current = null),
        (u.current = null),
        o.current?.(),
        (o.current = null),
        t(null));
    }, []);
  (P(() => {
    if ((p(), c !== null)) vqn();
  }, [c, p]),
    P(
      () => (
        (s.current = !0),
        () => {
          ((s.current = !1),
            l.current?.(),
            (l.current = null),
            (u.current = null),
            o.current?.(),
            (o.current = null));
        }
      ),
      []
    ));
  let k = de(
    (d) => {
      if (u.current === d) return;
      ((u.current = d),
        l.current?.(),
        (l.current = r.setTimeout(() => {
          ((l.current = null), (u.current = null));
        }, U)));
      let v = lhe(),
        R = a.current;
      $T(d).then((b) => {
        if (!s.current || R !== a.current) return;
        if (b) process.stdout.write(b);
        (o.current?.(), (o.current = null));
        let f = v;
        if (v === "osc52" && e8()) f = lhe() === "native" ? "native" : "none";
        if ((t(f), f === "native"))
          o.current = r.setTimeout(() => {
            ((o.current = null), t(null));
          }, x);
      });
    },
    [r]
  );
  return { copiedVia: i, copy: k, reset: p };
}
function LX(c) {
  let i = w(2),
    { via: r } = c;
  if (r === "native") {
    let t;
    if (i[0] === S) ((t = e(n, { color: "success", children: "(Copied!)" })), (i[0] = t));
    else t = i[0];
    return t;
  }
  if (r === null) {
    let t;
    if (i[1] === S)
      ((t = e(n, { dimColor: !0, children: e(V, { chord: "c", action: "copy", parens: !0 }) })),
        (i[1] = t));
    else t = i[1];
    return t;
  }
  return null;
}
function NX(c) {
  let i = w(3),
    { via: r } = c;
  if (r === "tmux-buffer") {
    let t;
    if (i[0] === S)
      ((t = e(n, {
        dimColor: !0,
        children: "(Copied to tmux buffer \xB7 select the URL manually if paste fails)"
      })),
        (i[0] = t));
    else t = i[0];
    return t;
  }
  if (r === "none") {
    let t;
    if (i[1] === S)
      ((t = e(n, {
        dimColor: !0,
        children: "(Couldn't copy \xB7 select the URL and copy it with your terminal)"
      })),
        (i[1] = t));
    else t = i[1];
    return t;
  }
  if (r === "osc52") {
    let t;
    if (i[2] === S)
      ((t = e(n, {
        dimColor: !0,
        children: "(Sent via OSC 52 \xB7 select the URL manually if paste fails)"
      })),
        (i[2] = t));
    else t = i[2];
    return t;
  }
  return null;
}
export { Epe, LX, NX };

//# sourceMappingURL=chunk-tr5ba667.js.map
