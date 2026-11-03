// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re, Ja, Ft } from "./chunk-a16y5hcz.js";
import { B_e, unr, q2t, Pz } from "./chunk-ajtyjx88.js";
import { Xbe } from "./chunk-928ws1pg.js";
import { j4e } from "./chunk-wr0p4ndg.js";
import { ti } from "./chunk-gq77tz5k.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { w } from "./chunk-7m7t89vx.js";
import { ol, xW, lN } from "./chunk-skanvern.js";
import { Oxr } from "./chunk-j0tbz6ra.js";
import { ne } from "./chunk-39xmt821.js";
import { blt } from "./chunk-9m3pz4v7.js";
import { Ql } from "./chunk-q7wvyqpk.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { TT } from "./chunk-nw94cdht.js";
import { l8e, iEr, hMt, Qks } from "./chunk-7k6w7b54.js";
import { M$e, c2 } from "./chunk-2bsye2b3.js";
import { $r, vn } from "./chunk-a2y39866.js";
var M6 = {};
$r(M6, { default: () => M6, deliveredBy: () => Y, useUserMessageSite: () => q5e });
function ZFe(i, t = new Date()) {
  let o = new Date(i);
  if (Number.isNaN(o.getTime())) return "";
  let a = l8e(),
    d = hMt(),
    { timeZone: m } = d,
    f = V(t, m) - V(o, m),
    c = Math.round(f / 86400000),
    u = "older";
  if (c === 0) u = "today";
  else if (c > 0 && c < 7) u = "week";
  if (d.kind === "preset") return iEr(d, se[u], a, o);
  let l = Qks(d.pattern, m, o);
  if (u === "today") return l;
  let g = c2(a, M$e(de[u], m)).format(o);
  return u === "week" ? `${g} ${l}` : `${g}, ${l}`;
}
var se = {
    today: { hour: "numeric", minute: "2-digit" },
    week: { weekday: "long", hour: "numeric", minute: "2-digit" },
    older: { weekday: "long", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }
  },
  de = { week: { weekday: "long" }, older: { weekday: "long", month: "short", day: "numeric" } };
function V(i, t) {
  if (!t) return new Date(i.getFullYear(), i.getMonth(), i.getDate()).getTime();
  let o = c2("en-US", M$e(ae, t)).formatToParts(i),
    a = {};
  for (let d of o) a[d.type] = d.value;
  return Date.UTC(Number(a.year), Number(a.month) - 1, Number(a.day));
}
var ae = { year: "numeric", month: "2-digit", day: "2-digit" };
function Y(i) {
  switch (i.kind) {
    case "plugin":
      return i.name;
    case "channel":
      return Xbe(i.server)?.pluginName;
    default:
      return;
  }
}
function q5e({ messageId: i, stored: t, text: o, isExpanded: a, task: d, sender: m, draw: f }) {
  let c = ti(d),
    u = ti(m),
    l = lN(
      "UserMessage",
      () => ({
        requestId: i,
        props: {
          text: o,
          origin: Oxr(t),
          isExpanded: a,
          ...(d !== void 0 && { task: d }),
          ...(m !== void 0 && { from: m })
        }
      }),
      [i, o, t, a, c, u]
    );
  return xW(l, (g) => f(g.props.text), Y(l.props.origin));
}
var me = 1e4,
  ue = 2500,
  pe = 2500;
function $3t(i) {
  if (i.length <= me) return i;
  let t = re(i, ue),
    o = Ja(i, pe),
    a =
      Ft(
        i,
        `
`,
        t.length
      ) -
      Ft(
        o,
        `
`
      ),
    d = i.length - t.length - o.length;
  return { head: t, hiddenLines: a, hiddenChars: d, tail: o };
}
var fe = 4000;
function Jpr(i) {
  return i.length <= fe && !(B_e() && unr(i));
}
function F3t(i) {
  let b = w(34),
    { text: t, useBriefLayout: o, timestamp: a, bodyOnly: d, awaitingModel: m, markLinks: f } = i,
    c = d === void 0 ? !1 : d,
    u = m === void 0 ? !1 : m,
    l = blt(),
    g = l?.isQueued ?? !1,
    p = typeof t === "object",
    M;
  if (b[0] !== t || b[1] !== p) ((M = !p && Jpr(t)), (b[0] = t), (b[1] = p), (b[2] = M));
  else M = b[2];
  let C = M,
    x = l?.selectionHighlight === "on",
    y = g || u;
  if (o || c) {
    let P;
    if (b[3] !== a) ((P = a ? ZFe(a) : ""), (b[3] = a), (b[4] = P));
    else P = b[4];
    let K = P;
    let S = x ? "suggestion" : y ? (c ? "inactive" : "subtle") : "text";
    const k = c ? 0 : 2;
    let D;
    if (b[5] !== c || b[6] !== x || b[7] !== K || b[8] !== y)
      ((D = c
        ? null
        : r(s, {
            flexDirection: "row",
            children: [
              x
                ? r(n, {
                    "aria-label": "selected:",
                    color: "suggestion",
                    children: [ne.pointer, " "]
                  })
                : null,
              e(n, { color: x ? "suggestion" : y ? "subtle" : "briefLabelYou", children: "You" }),
              K ? r(n, { dimColor: !0, children: [" ", K] }) : null
            ]
          })),
        (b[5] = c),
        (b[6] = x),
        (b[7] = K),
        (b[8] = y),
        (b[9] = D));
    else D = b[9];
    let q;
    if (
      b[10] !== c ||
      b[11] !== f ||
      b[12] !== C ||
      b[13] !== t ||
      b[14] !== S ||
      b[15] !== p ||
      b[16] !== y
    )
      ((q = p
        ? r(Q, {
            children: [
              e(n, { color: S, children: t.head }),
              e(R, { hiddenLines: t.hiddenLines, indent: c ? 0 : 2 }),
              e(n, { color: S, children: t.tail })
            ]
          })
        : C
          ? e(ol, { promptMode: !0, color: S, monochrome: y, markLinks: f, children: t })
          : e(n, { color: S, children: t })),
        (b[10] = c),
        (b[11] = f),
        (b[12] = C),
        (b[13] = t),
        (b[14] = S),
        (b[15] = p),
        (b[16] = y),
        (b[17] = q));
    else q = b[17];
    let ie;
    if (b[18] !== k || b[19] !== D || b[20] !== q)
      ((ie = r(s, { flexDirection: "column", paddingLeft: k, children: [D, q] })),
        (b[18] = k),
        (b[19] = D),
        (b[20] = q),
        (b[21] = ie));
    else ie = b[21];
    return ie;
  }
  let v = x ? "suggestion" : y ? "inactive" : "text",
    P;
  if (b[22] !== l?.selectionHighlight || b[23] !== x)
    ((P = e(s, {
      flexShrink: 0,
      children:
        l?.selectionHighlight === "off"
          ? e(n, { children: "  " })
          : r(n, {
              "aria-label": x ? "selected:" : "you:",
              color: x ? "suggestion" : "inactive",
              children: [ne.pointer, " "]
            })
    })),
      (b[22] = l?.selectionHighlight),
      (b[23] = x),
      (b[24] = P));
  else P = b[24];
  let k;
  if (b[25] !== C || b[26] !== t || b[27] !== v || b[28] !== p || b[29] !== y)
    ((k = p
      ? r(s, {
          flexDirection: "column",
          children: [
            e(L, { text: t.head, color: v }),
            e(R, { hiddenLines: t.hiddenLines, indent: 3 }),
            e(L, { text: t.tail, color: v })
          ]
        })
      : C
        ? e(ol, { promptMode: !0, color: v, monochrome: y, children: t })
        : e(L, { text: t, color: v })),
      (b[25] = C),
      (b[26] = t),
      (b[27] = v),
      (b[28] = p),
      (b[29] = y),
      (b[30] = k));
  else k = b[30];
  let D;
  if (b[31] !== P || b[32] !== k)
    ((D = r(s, { flexDirection: "row", children: [P, k] })), (b[31] = P), (b[32] = k), (b[33] = D));
  else D = b[33];
  return D;
}
function R(i) {
  let m = w(7),
    { hiddenLines: t, hiddenChars: o, indent: a } = i,
    d = `${t} ${t === 1 ? "line" : "lines"}`,
    f;
  if (m[0] !== o || m[1] !== t || m[2] !== d)
    ((f =
      o === void 0
        ? `(${d} hidden)`
        : t === 0
          ? `(~${j4e(o)} KB hidden)`
          : `(${d}, ~${j4e(o)} KB hidden)`),
      (m[0] = o),
      (m[1] = t),
      (m[2] = d),
      (m[3] = f));
  else f = m[3];
  let c = f,
    u;
  if (m[4] !== a || m[5] !== c)
    ((u = e(Ql, { title: c, titleAlign: "start", color: "subtle", padding: a })),
      (m[4] = a),
      (m[5] = c),
      (m[6] = u));
  else u = m[6];
  return u;
}
function L(i) {
  let a = w(4),
    { text: t, color: o } = i,
    d,
    m;
  if (a[0] !== o || a[1] !== t) {
    m = vn;
    c: {
      let f = B_e() ? q2t(t) : [];
      if (f.length === 0) {
        m = e(n, { color: o, children: t });
        break c;
      }
      let u = [];
      let l = 0;
      for (const g of f) {
        if (g.start > l) u.push(e(n, { color: o, children: t.slice(l, g.start) }, `plain-${l}`));
        for (let p = g.start; p < g.end; p++)
          u.push(e(n, { color: Pz(p - g.start), children: t[p] }, `rb-${p}`));
        l = g.end;
      }
      if (l < t.length) u.push(e(n, { color: o, children: t.slice(l) }, `plain-${l}`));
      d = e(n, { children: u });
    }
    ((a[0] = o), (a[1] = t), (a[2] = d), (a[3] = m));
  } else ((d = a[2]), (m = a[3]));
  if (m !== vn) return m;
  return d;
}
function BI(i) {
  let o = w(19),
    { text: t } = i,
    a,
    d,
    m,
    f,
    c,
    u,
    l,
    g;
  if (o[0] !== t) {
    g = vn;
    b: {
      let p = $3t(t);
      if (typeof p === "string") {
        g = e(n, { wrap: "wrap", children: TT(p) });
        break b;
      }
      d = s;
      c = "column";
      u = e(n, { wrap: "wrap", children: TT(p.head) });
      l = e(R, { hiddenLines: p.hiddenLines, hiddenChars: p.hiddenChars, indent: 0 });
      a = n;
      m = "wrap";
      f = TT(p.tail);
    }
    ((o[0] = t),
      (o[1] = a),
      (o[2] = d),
      (o[3] = m),
      (o[4] = f),
      (o[5] = c),
      (o[6] = u),
      (o[7] = l),
      (o[8] = g));
  } else
    ((a = o[1]),
      (d = o[2]),
      (m = o[3]),
      (f = o[4]),
      (c = o[5]),
      (u = o[6]),
      (l = o[7]),
      (g = o[8]));
  if (g !== vn) return g;
  let M;
  if (o[9] !== a || o[10] !== m || o[11] !== f)
    ((M = e(a, { wrap: m, children: f })), (o[9] = a), (o[10] = m), (o[11] = f), (o[12] = M));
  else M = o[12];
  let C;
  if (o[13] !== d || o[14] !== c || o[15] !== u || o[16] !== l || o[17] !== M)
    ((C = r(d, { flexDirection: c, children: [u, l, M] })),
      (o[13] = d),
      (o[14] = c),
      (o[15] = u),
      (o[16] = l),
      (o[17] = M),
      (o[18] = C));
  else C = o[18];
  return C;
}
export { ZFe, q5e, M6, $3t, Jpr, F3t, BI };

//# sourceMappingURL=chunk-xxgwx7rx.js.map
