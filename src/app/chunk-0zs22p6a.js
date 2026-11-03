// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Te } from "./chunk-pbpv20s6.js";
import { _, te } from "./chunk-4kxznmzw.js";
import { Zno } from "./chunk-rwaeax2b.js";
import { Pr } from "./chunk-rf7g1m78.js";
import { w } from "./chunk-7m7t89vx.js";
import { n, ts } from "./chunk-h56pfqh7.js";
import { Ge } from "./chunk-1sr6vjz6.js";
import { qq } from "./chunk-gabg18jp.js";
import { e } from "./chunk-f790ajz4.js";
import { tv } from "./chunk-tnj7z4dw.js";
import { TIo } from "./chunk-jcn0axk8.js";
import { Gt, be, ee, j } from "./chunk-bq35vvkw.js";
j();
j();
j();
var c = Gt(!1);
function emr(r) {
  let s = w(2),
    { children: t } = r,
    o;
  if (s[0] !== t) ((o = e(c.Provider, { value: !0, children: t })), (s[0] = t), (s[1] = o));
  else o = s[1];
  return o;
}
function u() {
  return be(c);
}
function M(r) {
  try {
    let t = te(r),
      s = _(t),
      o = r.replaceAll("\\/", "/").replace(/\s+/g, ""),
      m = s.replace(/\s+/g, "");
    if (o !== m) return r;
    return _(t, null, 2);
  } catch {
    return r;
  }
}
var P = 1e4;
function b(r) {
  if (r.length > P) return r;
  return r
    .split(
      `
`
    )
    .map(M).join(`
`);
}
var A = /https?:\/\/[^\s"'<>\\\x00-\x1f]+/g,
  C = 1e5;
function tmr(r, t) {
  if (r.length > C) return r;
  let s = (o) => o.replace(A, (m) => tv(m, void 0, { themeName: t }));
  if (!r.includes(Zno)) return s(r);
  return r
    .split(
      `
`
    )
    .map((o) => (o.includes(Zno) ? o : s(o))).join(`
`);
}
function jI(r) {
  let l = w(14),
    { content: t, verbose: s, isError: o, isWarning: m } = r,
    { columns: d } = Te(),
    [g] = Pr(),
    z = u(),
    h = be(qq),
    G = s || z,
    O;
  if (l[0] !== t || l[1] !== g) ((O = tmr(b(t), g)), (l[0] = t), (l[1] = g), (l[2] = O));
  else O = l[2];
  let a = O,
    N;
  cr: {
    if (G) {
      let i;
      if (l[3] !== a) ((i = f(a)), (l[3] = a), (l[4] = i));
      else i = l[4];
      N = i;
      break cr;
    }
    let i;
    if (l[5] !== d || l[6] !== a || l[7] !== h)
      ((i = f(TIo(a, d, h))), (l[5] = d), (l[6] = a), (l[7] = h), (l[8] = i));
    else i = l[8];
    N = i;
  }
  let R = N,
    x = o ? "error" : m ? "warning" : void 0,
    i;
  if (l[9] !== R) ((i = e(ts, { children: R })), (l[9] = R), (l[10] = i));
  else i = l[10];
  let v;
  if (l[11] !== x || l[12] !== i)
    ((v = e(Ge, { children: e(n, { color: x, children: i }) })),
      (l[11] = x),
      (l[12] = i),
      (l[13] = v));
  else v = l[13];
  return v;
}
function f(r) {
  return r.replace(/\u001b\[([0-9]+;)*4(;[0-9]+)*m|\u001b\[4(;[0-9]+)*m|\u001b\[([0-9]+;)*4m/g, "");
}
export { emr, tmr, jI };

//# sourceMappingURL=chunk-0zs22p6a.js.map
