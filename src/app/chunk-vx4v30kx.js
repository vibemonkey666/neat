// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { w } from "./chunk-7m7t89vx.js";
import { s, n, zB } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { Tr } from "./chunk-nh2498vy.js";
import { ne } from "./chunk-39xmt821.js";
import { Jr } from "./chunk-en1bapsd.js";
import { V } from "./chunk-j32s98r9.js";
import { Je } from "./chunk-fgf47p3n.js";
import { Ee } from "./chunk-xzcese97.js";
import { we } from "./chunk-bf8qkzmg.js";
import { wPe } from "./chunk-jv280qck.js";
import { TCn } from "./chunk-mdxeekqd.js";
import { Do } from "./chunk-bffrn2r2.js";
import { vs } from "./chunk-artk45zy.js";
import { ft } from "./chunk-g2kc6h82.js";
import { e, r } from "./chunk-f790ajz4.js";
import { Yve, Xve } from "./chunk-2kejgqna.js";
import { P, ee, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function He(l) {
  return l.replace(/[\r\n]/g, "");
}
var W = [
  { value: "yes-session", label: "Yes, for this session" },
  { value: "yes-remember", label: "Yes, and remember this directory" },
  { value: "no", label: "No" }
];
function O() {
  let R = w(1),
    i;
  if (R[0] === S)
    ((i = e(n, {
      dimColor: !0,
      children:
        "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
    })),
      (R[0] = i));
  else i = R[0];
  return i;
}
function Y(R) {
  let d = w(5),
    { path: i } = R,
    a;
  if (d[0] !== i) ((a = e(n, { color: "permission", children: i })), (d[0] = i), (d[1] = a));
  else a = d[1];
  let p;
  if (d[2] === S) ((p = e(O, {})), (d[2] = p));
  else p = d[2];
  let t;
  if (d[3] !== a)
    ((t = r(s, { flexDirection: "column", gap: 1, children: [a, p] })), (d[3] = a), (d[4] = t));
  else t = d[4];
  return t;
}
function q(R) {
  let m = w(16),
    {
      value: i,
      onChange: d,
      cursorOffset: a,
      onChangeCursorOffset: p,
      onSubmit: t,
      error: C,
      suggestions: c,
      selectedSuggestion: k
    } = R,
    E;
  if (m[0] === S) ((E = e(n, { children: "Enter the path to the directory:" })), (m[0] = E));
  else E = m[0];
  let f;
  if (m[1] !== a || m[2] !== d || m[3] !== p || m[4] !== t || m[5] !== i)
    ((f = e(s, {
      borderDimColor: !0,
      borderStyle: "round",
      marginTop: 1,
      paddingLeft: 1,
      children: e(Tr, {
        showCursor: !0,
        focus: !0,
        placeholder: `Directory path${ne.ellipsis}`,
        value: i,
        onChange: d,
        onSubmit: t,
        columns: 80,
        cursorOffset: a,
        onChangeCursorOffset: p,
        inputFilter: He,
        disableCursorMovementForUpDownKeys: !0
      })
    })),
      (m[1] = a),
      (m[2] = d),
      (m[3] = p),
      (m[4] = t),
      (m[5] = i),
      (m[6] = f));
  else f = m[6];
  let v;
  if (m[7] !== k || m[8] !== c)
    ((v =
      c.length > 0 &&
      e(s, {
        marginBottom: 1,
        children: e(wPe, { suggestions: c, selectedSuggestion: k, noPad: !0 })
      })),
      (m[7] = k),
      (m[8] = c),
      (m[9] = v));
  else v = m[9];
  let o;
  if (m[10] !== C) ((o = e(vs, { error: C })), (m[10] = C), (m[11] = o));
  else o = m[11];
  let F;
  if (m[12] !== f || m[13] !== v || m[14] !== o)
    ((F = r(s, { flexDirection: "column", children: [E, f, v, o] })),
      (m[12] = f),
      (m[13] = v),
      (m[14] = o),
      (m[15] = F));
  else F = m[15];
  return F;
}
function plt(R) {
  let o = w(38),
    {
      onAddDirectory: i,
      onAlreadyAccessible: d,
      onCancel: a,
      permissionContext: p,
      directoryPath: t
    } = R,
    C = Jr(),
    [c, k] = y(""),
    [m, E] = y(0),
    [f, v] = y(null),
    F;
  if (o[0] === S) ((F = []), (o[0] = F));
  else F = o[0];
  let [l, ge] = y(F),
    [D, K] = y(0),
    de;
  if (o[1] !== C)
    ((de = async (pe) => {
      if (!pe) {
        (ge([]), K(0));
        return;
      }
      let _e = await TCn(C, pe);
      (ge(_e), K(0));
    }),
      (o[1] = C),
      (o[2] = de));
  else de = o[2];
  let T = zB(de, 100),
    me,
    fe;
  if (o[3] !== T || o[4] !== c)
    ((me = () => {
      T(c);
    }),
      (fe = [c, T]),
      (o[3] = T),
      (o[4] = c),
      (o[5] = me),
      (o[6] = fe));
  else ((me = o[5]), (fe = o[6]));
  P(me, fe);
  let he;
  if (o[7] === S)
    ((he = (et) => {
      let ye = et.id + "/";
      (k(ye), E(ye.length), v(null));
    }),
      (o[7] = he));
  else he = o[7];
  let tt = he,
    be;
  if (o[8] !== i || o[9] !== d || o[10] !== p)
    ((be = async (ot) => {
      let x = await Yve(ot, p);
      if (x.resultType === "success") {
        i(x.absolutePath, !1);
        return;
      }
      if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && d?.(x)) {
        return;
      }
      v(Xve(x));
    }),
      (o[8] = i),
      (o[9] = d),
      (o[10] = p),
      (o[11] = be));
  else be = o[11];
  let z = be,
    Se;
  if (o[12] === S) ((Se = { context: "Settings" }), (o[12] = Se));
  else Se = o[12];
  lt("confirm:no", a, Se);
  let Ce;
  if (o[13] !== D || o[14] !== l)
    ((Ce = (g) => {
      if (l.length > 0) {
        if (g.name === "tab") {
          g.preventDefault();
          let ve = l[D];
          if (ve) tt(ve);
          return;
        }
        if (g.name === "up" || (g.ctrl && g.name === "p")) {
          (g.preventDefault(), K((De) => (De <= 0 ? l.length - 1 : De - 1)));
          return;
        }
        if (g.name === "down" || (g.ctrl && g.name === "n")) {
          (g.preventDefault(), K((xe) => (xe >= l.length - 1 ? 0 : xe + 1)));
          return;
        }
      }
    }),
      (o[13] = D),
      (o[14] = l),
      (o[15] = Ce));
  else Ce = o[15];
  let Q = Ce,
    Ae;
  if (o[16] !== t || o[17] !== i || o[18] !== a)
    ((Ae = (rt) => {
      if (!t) {
        return;
      }
      kt: switch (rt) {
        case "yes-session": {
          i(t, !1);
          break kt;
        }
        case "yes-remember": {
          i(t, !0);
          break kt;
        }
        case "no": {
          a();
        }
      }
    }),
      (o[16] = t),
      (o[17] = i),
      (o[18] = a),
      (o[19] = Ae));
  else Ae = o[19];
  let N = Ae,
    B;
  if (o[20] !== t)
    ((B = t
      ? void 0
      : r(Ee, {
          children: [
            e(V, { chord: "tab", action: "complete" }),
            e(V, { chord: "enter", action: "add" }),
            e(ft, {
              action: "confirm:no",
              context: "Settings",
              fallback: "Esc",
              description: "cancel"
            })
          ]
        })),
      (o[20] = t),
      (o[21] = B));
  else B = o[21];
  let L;
  if (
    o[22] !== m ||
    o[23] !== c ||
    o[24] !== t ||
    o[25] !== f ||
    o[26] !== N ||
    o[27] !== z ||
    o[28] !== D ||
    o[29] !== l
  )
    ((L = t
      ? r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(Y, { path: t }), e(Je, { options: W, onChange: N, onCancel: () => N("no") })]
        })
      : r(s, {
          flexDirection: "column",
          gap: 1,
          children: [
            e(O, {}),
            e(q, {
              value: c,
              onChange: k,
              cursorOffset: m,
              onChangeCursorOffset: E,
              onSubmit: z,
              error: f,
              suggestions: l,
              selectedSuggestion: D
            })
          ]
        })),
      (o[22] = m),
      (o[23] = c),
      (o[24] = t),
      (o[25] = f),
      (o[26] = N),
      (o[27] = z),
      (o[28] = D),
      (o[29] = l),
      (o[30] = L));
  else L = o[30];
  let U;
  if (o[31] !== a || o[32] !== B || o[33] !== L)
    ((U = e(we, {
      title: "Add directory to workspace",
      onCancel: a,
      color: "permission",
      isCancelActive: !1,
      inputGuide: B,
      children: L
    })),
      (o[31] = a),
      (o[32] = B),
      (o[33] = L),
      (o[34] = U));
  else U = o[34];
  let Oe;
  if (o[35] !== Q || o[36] !== U)
    ((Oe = e(Do, { onKeyDown: Q, children: U })), (o[35] = Q), (o[36] = U), (o[37] = Oe));
  else Oe = o[37];
  return Oe;
}
export { plt };

//# sourceMappingURL=chunk-vx4v30kx.js.map
