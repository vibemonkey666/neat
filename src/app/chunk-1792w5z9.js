// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { ALr } from "./chunk-b9vagsrs.js";
import { n7e } from "./chunk-b08qnart.js";
import { vIn } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { lPt } from "./chunk-90gdrs86.js";
import { uwe } from "./chunk-dkkqpcew.js";
import { oGe, _G } from "./chunk-3xhvyvev.js";
import { e } from "./chunk-f790ajz4.js";
import { n$n, xMt, z7t } from "./chunk-62j8frac.js";
import { P, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
var s = {
  light: { background: "#f9f9f7", foreground: "#000000" },
  dark: { background: "#1f1f1e", foreground: "#ffffff" }
};
function vds(n, t, o) {
  if (!o) return;
  let r;
  if (n === "auto") {
    if (t === void 0) return;
    r = t;
  } else r = z7t(n);
  return n7e(r) ? s.light : s.dark;
}
function l() {
  let o = w(4),
    [n, t] = y(n$n),
    r,
    m;
  if (o[0] === S) ((r = () => xMt(() => t(n$n()))), (m = []), (o[0] = r), (o[1] = m));
  else ((r = o[0]), (m = o[1]));
  P(r, m);
  let f;
  if (o[2] !== n) ((f = vds(vIn(), n, ALr())), (o[2] = n), (o[3] = f));
  else f = o[3];
  return f;
}
function Ofr(n) {
  let f = w(9),
    { children: t, mouseTracking: o, killRing: r } = n,
    m = l(),
    c;
  if (f[0] !== t || f[1] !== r)
    ((c = e(lPt, { handle: r, children: t })), (f[0] = t), (f[1] = r), (f[2] = c));
  else c = f[2];
  let a = c;
  if (oGe()) {
    let d;
    if (f[3] !== o) ((d = o ?? _G()), (f[3] = o), (f[4] = d));
    else d = f[4];
    let p;
    if (f[5] !== m || f[6] !== d || f[7] !== a)
      ((p = e(uwe, { mouseTracking: d, surface: m, children: a })),
        (f[5] = m),
        (f[6] = d),
        (f[7] = a),
        (f[8] = p));
    else p = f[8];
    return p;
  }
  return a;
}
function pEi() {
  if (O() === "windows" || i.WT_SESSION) process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ??= "1";
}
export { vds, Ofr, pEi };

//# sourceMappingURL=chunk-1792w5z9.js.map
