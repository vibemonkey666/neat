// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Hos, Los } from "./chunk-wrtp8qz8.js";
import { Eg } from "./chunk-rwaeax2b.js";
import { g } from "./chunk-brszmkb3.js";
import { Ft } from "./chunk-a16y5hcz.js";
import { aSe } from "./chunk-wr0p4ndg.js";
import { tfs, g6e, Dlt, Hlt, xi, M8t } from "./chunk-65wf35er.js";
import { wGe } from "./chunk-6h7ejyet.js";
import { le } from "./chunk-vw9e882a.js";
import { hM } from "./chunk-7c3thgax.js";
import { zhs } from "./chunk-g2rqnn1x.js";
import { de, be, P, C, y, j } from "./chunk-bq35vvkw.js";
import { $a, KZ, nX, VZ } from "./chunk-2bsye2b3.js";
j();
j();
function ft(t) {
  let { watchLoop: e } = be(Eg);
  P(() => (t ? e() : void 0), [t, e]);
}
function oe(t, e) {
  if (e?.offset === t.offset && e.text === t.text) return e.column;
  let r = t.startOfLogicalLine().offset,
    n = on(t.text, r, t.offset);
  return t.text[t.offset] === "\t" ? n + Ke("\t", n) - 1 : n;
}
function on(t, e, r) {
  let n = 0;
  for (let { segment: s } of $a().segment(t.slice(e, r))) n += Ke(s, n);
  return n;
}
function se(t, e, r, n) {
  let s = 0;
  for (let { segment: o, index: i } of $a().segment(t.slice(e, r)))
    if (((s += Ke(o, s)), s > n)) return e + i;
  return r;
}
function Ke(t, e) {
  return t === "\t" ? aSe - (e % aSe) : le(t);
}
var sn = {
  "(": ["(", ")"],
  ")": ["(", ")"],
  b: ["(", ")"],
  "[": ["[", "]"],
  "]": ["[", "]"],
  "{": ["{", "}"],
  "}": ["{", "}"],
  B: ["{", "}"],
  "<": ["<", ">"],
  ">": ["<", ">"],
  '"': ['"', '"'],
  "'": ["'", "'"],
  "`": ["`", "`"]
};
function ne(t, e, r, n) {
  if (r === "w") return ct(t, e, n, g6e);
  if (r === "W") return ct(t, e, n, (o) => !Dlt(o));
  let s = sn[r];
  if (s) {
    let [o, i] = s;
    return o === i ? an(t, e, o, n) : un(t, e, o, i, n);
  }
  return null;
}
function ct(t, e, r, n) {
  let s = [];
  for (let { segment: h, index: b } of $a().segment(t)) s.push({ segment: h, index: b });
  if (s.length === 0) return null;
  let o = s.length - 1;
  for (let h = 0; h < s.length; h++) {
    let b = s[h],
      D = h + 1 < s.length ? s[h + 1].index : t.length;
    if (e >= b.index && e < D) {
      o = h;
      break;
    }
  }
  let i = (h) => s[h]?.segment ?? "",
    u = (h) => (h < s.length ? s[h].index : t.length),
    c = (h) => Dlt(i(h)),
    d = (h) => n(i(h)),
    O = (h) => Hlt(i(h)),
    p = o,
    x = o;
  if (d(o)) {
    while (p > 0 && d(p - 1)) p--;
    while (x < s.length && d(x)) x++;
  } else if (c(o)) {
    while (p > 0 && c(p - 1)) p--;
    while (x < s.length && c(x)) x++;
    return { start: u(p), end: u(x) };
  } else if (O(o)) {
    while (p > 0 && O(p - 1)) p--;
    while (x < s.length && O(x)) x++;
  }
  if (!r) {
    if (x < s.length && c(x)) while (x < s.length && c(x)) x++;
    else if (p > 0 && c(p - 1)) while (p > 0 && c(p - 1)) p--;
  }
  return { start: u(p), end: u(x) };
}
function an(t, e, r, n) {
  let s =
      t.lastIndexOf(
        `
`,
        e - 1
      ) + 1,
    o = t.indexOf(
      `
`,
      e
    ),
    i = o === -1 ? t.length : o,
    u = t.slice(s, i),
    c = e - s,
    d = [];
  for (let O = 0; O < u.length; O++) if (u[O] === r) d.push(O);
  for (let O = 0; O < d.length - 1; O += 2) {
    let p = d[O],
      x = d[O + 1];
    if (p <= c && c <= x)
      return n ? { start: s + p + 1, end: s + x } : { start: s + p, end: s + x + 1 };
  }
  return null;
}
function un(t, e, r, n, s) {
  let o = 0,
    i = -1;
  for (let c = e; c >= 0; c--)
    if (t[c] === n && c !== e) o++;
    else if (t[c] === r) {
      if (o === 0) {
        i = c;
        break;
      }
      o--;
    }
  if (i === -1) return null;
  o = 0;
  let u = -1;
  for (let c = i + 1; c < t.length; c++)
    if (t[c] === r) o++;
    else if (t[c] === n) {
      if (o === 0) {
        u = c;
        break;
      }
      o--;
    }
  if (u === -1) return null;
  return s ? { start: i + 1, end: u } : { start: i, end: u + 1 };
}
var ge = { d: "delete", c: "change", y: "yank" };
function Ue(t) {
  return t in ge;
}
var _ = "\b",
  dt = new Set(["h", "l", " ", _, "j", "k", "w", "b", "e", "W", "B", "E", "0", "^", "$", "%"]),
  xe = new Set(["h", "l", " ", _]),
  Oe = new Set(["f", "F", "t", "T"]),
  ye = { i: "inner", a: "around" };
function Be(t) {
  return t in ye;
}
var Ge = new Set(["w", "W", '"', "'", "`", "(", ")", "b", "[", "]", "{", "}", "B", "<", ">"]),
  pt = 1e4;
function mt() {
  return { mode: "INSERT", insertedText: "" };
}
function gt() {
  return { lastFind: null, register: "", registerIsLinewise: !1 };
}
function z(t, e, r) {
  if (t === "%" && r !== 1) return e;
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = ln(t, n);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function ln(t, e) {
  switch (t) {
    case "h":
      return e.offset === e.startOfLogicalLine().offset ? e : e.left();
    case "l":
      return e.offset === e.endOfLogicalLine().offset ? e : e.right();
    case " ":
      return e.right();
    case _:
      return e.left();
    case "j":
      return e.downLogicalLine();
    case "k":
      return e.upLogicalLine();
    case "gj":
      return e.down();
    case "gk":
      return e.up();
    case "w":
      return e.nextVimWord();
    case "b":
      return e.prevVimWord();
    case "e":
      return e.endOfVimWord();
    case "W":
      return e.nextWORD();
    case "B":
      return e.prevWORD();
    case "E":
      return e.endOfWORD();
    case "0":
      return e.startOfLogicalLine();
    case "^":
      return e.firstNonBlankInLogicalLine();
    case "$":
      return e.lastCharInLogicalLine();
    case "G":
      return e.startOfLastLine();
    case "%": {
      let r = fn(tfs(e.text), e.offset);
      return r === null ? e : new xi(e.measuredText, r);
    }
    default:
      return e;
  }
}
function fn(t, e) {
  let r = t.indexOf(
      `
`,
      e
    ),
    n = r === -1 ? t.length : r,
    s = t.slice(e, n).search(/[()[\]{}]/);
  if (s === -1) return null;
  let o = e + s,
    i = ne(t, o, t[o], !1);
  if (!i) return null;
  return i.start === o ? i.end - 1 : i.start;
}
function He(t) {
  return "eE$%".includes(t);
}
function xt(t) {
  return "jkG".includes(t) || t === "gg";
}
function q(t, e, r, n) {
  let s = z(e, n.cursor, r);
  if (xt(e)) {
    let u = W(n.text, n.cursor.offset),
      c = W(n.text, s.offset);
    if (c !== u) {
      let d = Z(n.text, s.offset),
        O = n.text.indexOf(
          `
`,
          d
        ),
        p = O === -1 ? n.text.length : O,
        x = se(n.text, d, p, oe(n.cursor, n.wantedColumn)),
        h = x === p && p > d && jee(n.cursor, p) === p ? n.cursor.measuredText.prevOffset(p) : x,
        b = e === "k" ? Le(n.cursor, h, d) : Math.min(n.cursor.offset, s.offset);
      (Ae(t, u, c, n, b), B(n, { type: "operator", op: t, motion: e, count: r }));
    }
    return;
  }
  if (e === "%" && s.equals(n.cursor)) return;
  if (s.equals(n.cursor) && !He(e)) {
    let u = (e === "w" || e === "W") && r > 0;
    if (e === "0" || e === "^" || u || xe.has(e)) {
      if (t === "yank") n.setRegister("", !1);
      else if (t === "change") n.enterInsert(n.cursor.offset);
      B(n, { type: "operator", op: t, motion: e, count: r });
    }
    return;
  }
  let o = cn(n.cursor, s, e, t, r);
  if (o.from === o.to && !(o.linewise && e === " ")) {
    if (t === "change" || t === "yank") n.setRegister("", !1);
    if (t === "change")
      (n.enterInsert(o.from), B(n, { type: "operator", op: t, motion: e, count: r }));
    return;
  }
  let i = n.cursor.offset;
  if ((Se(t, o.from, o.to, n, o.linewise), t === "yank" && o.linewise)) n.setOffset(i);
  B(n, { type: "operator", op: t, motion: e, count: r });
}
function Te(t, e, r, n, s) {
  let o = s.cursor.findCharacter(r, e, n);
  if (o === null) return;
  let i = new xi(s.cursor.measuredText, o),
    u = dn(s.cursor, i, e);
  (Se(t, u.from, u.to, s),
    s.setLastFind(e, r),
    B(s, { type: "operatorFind", op: t, find: e, char: r, count: n }));
}
function he(t, e, r, n, s) {
  let o = ne(s.text, s.cursor.offset, r, e === "inner");
  if (!o) return;
  Se(t, o.start, o.end, s);
  let { start: i } = o,
    u =
      e === "inner" &&
      n === 1 &&
      i > 0 &&
      "([{<".includes(s.text[i - 1] ?? " ") &&
      s.text[i] ===
        `
`;
  if (t === "yank" && u) s.setOffset(i + 1);
  B(s, { type: "operatorTextObj", op: t, objType: r, scope: e, count: n });
}
function Q(t, e, r) {
  if (e < 1) return;
  let n = W(r.text, r.cursor.offset);
  if (
    e > 1 &&
    !r.cursor.text.includes(
      `
`,
      r.cursor.offset
    )
  )
    return;
  let { offset: s } = r.cursor,
    o =
      r.text[s] ===
      `
`
        ? r.cursor.placeholderEndingAt(s)
        : null,
    i = o !== null && wGe(r.text.slice(o.start, o.end));
  (Ae(t, n, n + e - 1, r, i ? r.cursor.startOfLogicalLine().offset : s),
    B(r, { type: "operator", op: t, motion: t[0], count: e }));
}
function Ce(t, e) {
  let r = e.cursor.offset;
  if (r >= e.text.length) return;
  let n = bt(e, t);
  if (n === r) return;
  let s = e.text.slice(r, n),
    o = e.text.slice(0, r) + e.text.slice(n);
  (e.setRegister(s, !1),
    e.setText(o),
    e.setOffset(Xie(o, r)),
    e.recordChange({ type: "x", count: t }));
}
function Re(t, e) {
  let r = e.cursor.offset,
    n = bt(e, t);
  if (n > r)
    (e.setRegister(e.text.slice(r, n), !1), e.setText(e.text.slice(0, r) + e.text.slice(n)));
  (e.enterInsert(r), e.recordChange({ type: "substitute", count: t }));
}
function ve(t, e, r) {
  let n = r.cursor.offset,
    s = r.text,
    o = n;
  for (let i = 0; i < e; i++) {
    if (
      o >= s.length ||
      s[o] ===
        `
`
    )
      return;
    o += KZ(s.slice(o)).length || 1;
  }
  (r.setText(s.slice(0, n) + t.repeat(e) + s.slice(o)),
    r.setOffset(n + t.length * (e - 1)),
    r.recordChange({ type: "replace", char: t, count: e }));
}
function Ie(t, e) {
  let r = e.cursor.measuredText.columns,
    n = e.text,
    s = e.cursor.offset,
    o = 0;
  while (
    s < n.length &&
    n[s] !==
      `
` &&
    o < t
  ) {
    let u = KZ(n.slice(s)),
      c = u.length,
      d = (u === u.toUpperCase() ? u.toLowerCase() : u.toUpperCase()).normalize("NFC");
    ((n = n.slice(0, s) + d + n.slice(s + c)), (s += d.length), o++);
  }
  if (o === 0) return;
  let i = xi.fromText(n, r);
  (e.setText(n), e.setOffset(jee(i, s)), e.recordChange({ type: "toggleCase", count: t }));
}
function Je(t, e) {
  let r = e.text.split(`
`),
    n = W(e.cursor.text, e.cursor.offset);
  if (n >= r.length - 1) {
    if (t >= 3)
      (e.setOffset(Z(e.cursor.text, e.cursor.offset)), e.recordChange({ type: "join", count: 2 }));
    return;
  }
  let s = Math.min(Math.max(t, 2) - 1, r.length - n - 1);
  Ot(r, n, s, e);
}
function Ot(t, e, r, n) {
  let s = t[e],
    o = s.length,
    i = s;
  for (let d = 1; d <= r; d++) {
    o = s.length;
    let O = t[e + d].replace(/^[ \t\r]+/, "");
    if (O.length > 0 && s.length > 0 && !O.startsWith(")") && !/[ \t]$/.test(i)) s += " ";
    ((s += O), (i = O));
  }
  let u = [...t.slice(0, e), s, ...t.slice(e + r + 1)],
    c = u.join(`
`);
  (n.setText(c), n.setOffset(Xie(c, X(u, e) + o)), n.recordChange({ type: "join", count: r + 1 }));
}
function ie(t, e, r) {
  let n = r.getRegister();
  if (!n) return;
  r.recordChange({ type: "paste", after: t, count: e });
  let s = r.getRegisterIsLinewise(),
    o =
      s &&
      n.endsWith(`
`)
        ? n.slice(0, -1)
        : n;
  if (s) {
    let i = r.text,
      u = i.split(`
`),
      c = W(r.cursor.text, r.cursor.offset),
      d = t ? c + 1 : c,
      O = o.split(`
`),
      p = [];
    for (let ce = 0; ce < e; ce++) p.push(...O);
    let x = [...u.slice(0, d), ...p, ...u.slice(d)],
      h = x.join(`
`),
      b = X(x, d),
      D = xi.fromText(O[0] ?? "", r.cursor.measuredText.columns),
      K = je(D);
    (r.setText(h, { previous: { value: i, cursorOffset: b } }),
      r.setOffset(b + (D.placeholderStartingAt(K) ? 0 : K)));
  } else {
    let i = o.repeat(e),
      u = r.cursor.offset,
      c =
        r.text[u] ===
          `
` &&
        (u === 0 ||
          r.text[u - 1] ===
            `
`),
      d = t && u < r.text.length && !c ? r.cursor.measuredText.nextOffset(u) : u,
      O = r.text.slice(0, d) + i + r.text.slice(d),
      p = i.includes(`
`)
        ? Xie(O, d)
        : d + i.length - (nX(i).length || 1);
    (r.setText(O, { previous: { value: r.text, cursorOffset: d } }), r.setOffset(p));
  }
}
function we(t, e, r) {
  let s = r.text.split(`
`),
    o = W(r.cursor.text, r.cursor.offset);
  if (e > 1 && o === s.length - 1) return;
  let i = Math.min(e, s.length - o);
  ze(s, o, o + i - 1, t);
  let u = s.join(`
`),
    c = fe(s[o] ?? "");
  (r.setText(u), r.setOffset(X(s, o) + c), r.recordChange({ type: "indent", dir: t, count: e }));
}
function ae(t, e) {
  let r = e.text,
    n = r.split(`
`),
    s = W(e.cursor.text, e.cursor.offset),
    o = t === "below" ? s + 1 : s,
    i = [...n.slice(0, o), "", ...n.slice(o)],
    u = i.join(`
`),
    c = X(i, o);
  (e.setText(u, { previous: { value: r, cursorOffset: c } }),
    e.enterInsert(c),
    e.recordChange({ type: "openLine", direction: t }));
}
function B(t, e) {
  if (e.op !== "yank") t.recordChange(e);
}
function bt(t, e) {
  let r = t.cursor;
  for (let n = 0; n < e && !r.isAtEnd(); n++) {
    if (
      t.text[r.offset] ===
      `
`
    )
      break;
    r = r.right();
  }
  return r.offset;
}
function X(t, e) {
  return (
    t.slice(0, e).join(`
`).length + (e > 0 ? 1 : 0)
  );
}
function cn(t, e, r, n, s) {
  let o = Math.min(t.offset, e.offset),
    i = Math.max(t.offset, e.offset),
    u = !1,
    c = n === "change" && (r === "w" || r === "W"),
    d = t.text[t.offset],
    O =
      (d === " " ||
        d === "\t" ||
        d ===
          `
`) &&
      t.snapOutOfPlaceholder(t.offset, "start") === t.offset;
  if (c && O) {
    let p = t;
    for (let x = 0; x < s - 1; x++) {
      let h = r === "w" ? p.nextVimWord() : p.nextWORD();
      if (h.offset === p.offset) break;
      p = h;
    }
    if (
      ((i = Math.min(i, p.endOfLogicalLine().offset)),
      i > o &&
        t.text[i - 1] ===
          `
`)
    ) {
      i -= 1;
      let x = t.startOfLogicalLine().offset;
      if (/^[ \t]*$/.test(t.text.slice(x, o))) ((o = x), (u = !0));
    }
  } else if (c) {
    let p = t;
    for (let K = 0; K < s - 1; K++) p = r === "w" ? p.nextVimWord() : p.nextWORD();
    let x = r === "w" ? p.endOfVimWord() : p.endOfWORD(),
      h = t.measuredText.nextOffset(p.offset),
      b = r === "w" ? p.nextVimWord() : p.nextWORD();
    if (
      (h >= t.text.length || Dlt(t.text[h] ?? "") || b.offset === h) &&
      !Dlt(t.text[t.offset] ?? "") &&
      !Dlt(t.text[p.offset] ?? "")
    )
      x = p;
    i = t.measuredText.nextOffset(x.offset);
  } else if (
    He(r) &&
    (r === "%" || t.offset <= e.offset) &&
    t.text[i] !==
      `
`
  )
    i = t.measuredText.nextOffset(i);
  if (
    r === " " &&
    i > o &&
    t.text[i - 1] ===
      `
`
  ) {
    let p = Z(t.text, o);
    ((u = /^[ \t]*$/.test(t.text.slice(p, o))),
      (o = u ? p : o),
      (i = u && n !== "change" ? i : i - 1));
  }
  return (
    (o = t.snapOutOfPlaceholder(o, "start")),
    (i = t.snapOutOfPlaceholder(i, "end")),
    { from: o, to: i, linewise: u }
  );
}
function dn(t, e, r) {
  let n = Math.max(t.offset, e.offset),
    s = t.snapOutOfPlaceholder(Math.min(t.offset, e.offset), "start"),
    o = t.snapOutOfPlaceholder(t.measuredText.nextOffset(n), "end");
  return { from: s, to: o };
}
function Se(t, e, r, n, s = !1) {
  let o = n.text.slice(e, r);
  if (
    s &&
    !o.endsWith(`
`)
  )
    o =
      o +
      `
`;
  if ((n.setRegister(o, s), t === "yank")) n.setOffset(jee(n.cursor, e));
  else if (t === "delete") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    (n.setText(i), n.setOffset(Xie(i, e)));
  } else if (t === "change") {
    let i = n.text.slice(0, e) + n.text.slice(r);
    (n.setText(i), n.enterInsert(e));
  }
}
function Xie(t, e) {
  if (
    t[e] ===
      `
` &&
    e > 0 &&
    t[e - 1] !==
      `
`
  )
    return e - (nX(t.slice(0, e)).length || 1);
  if (
    e >= t.length &&
    !t.endsWith(`
`)
  )
    return Math.max(0, t.length - (nX(t).length || 1));
  return e;
}
function Le(t, e, r) {
  let n = $e(t, e),
    s = e;
  while (n && n.start > r) ((s = t.measuredText.prevOffset(n.start)), (n = $e(t, s)));
  if (!n) return s;
  let o = n.end;
  while ((n = $e(t, o))) o = n.end;
  return o;
}
function $e(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  return t.placeholderStartingAt(r);
}
function jee(t, e, r = t.text) {
  let n = Xie(r, e);
  return t.snapOutOfPlaceholder(n, "start") === n ? n : e;
}
function Z(t, e) {
  if (e === 0) return 0;
  let r = t.lastIndexOf(
    `
`,
    e - 1
  );
  return r === -1 ? 0 : r + 1;
}
function Ve(t, e) {
  if (e) {
    let r = Ft(
      t,
      `
`
    );
    return t.endsWith(`
`)
      ? r
      : r + 1;
  }
  return VZ(t);
}
function ue(t, e, r) {
  let n = t.text;
  if (r) {
    let i = Z(n, t.cursor.offset),
      u = i;
    for (let c = 0; c < e; c++) {
      let d = n.indexOf(
        `
`,
        u
      );
      if (d === -1) {
        u = n.length;
        break;
      }
      u = d + 1;
    }
    return { from: i, to: u };
  }
  let s = t.cursor.offset,
    o = s;
  for (let i = 0; i < e && o < n.length; i++) o = t.cursor.measuredText.nextOffset(o);
  return { from: s, to: o };
}
function Me(t, e, r) {
  let n = Math.min(t, e.cursor.offset),
    s = Math.max(t, e.cursor.offset);
  if (!r) return { from: n, to: e.cursor.measuredText.nextOffset(s) };
  let o = e.text,
    i = Z(o, n),
    u = o.indexOf(
      `
`,
      s
    ),
    c = u === -1 ? o.length : u + 1;
  return { from: i, to: c };
}
function ze(t, e, r, n) {
  for (let o = e; o <= r; o++) {
    let i = t[o] ?? "";
    if (i === "") continue;
    if (n === ">") t[o] = "  " + i;
    else if (i.startsWith("  ")) t[o] = i.slice(2);
    else if (i.startsWith("\t")) t[o] = i.slice(1);
    else {
      let u = 0;
      while (u < i.length && u < 2 && /\s/.test(i[u])) u++;
      t[o] = i.slice(u);
    }
  }
}
function yt(t, e, r) {
  let n = Math.min(t, e.cursor.offset),
    s = Math.max(t, e.cursor.offset),
    o = e.text,
    i = Ft(
      o.slice(0, n),
      `
`
    ),
    u =
      Ft(
        o.slice(n, s),
        `
`
      ) + 1,
    c = o.split(`
`);
  if (i >= c.length - 1) {
    (e.setOffset(r ? Z(e.cursor.text, n) : Xie(e.cursor.text, n)),
      e.recordChange({ type: "join", count: 2 }));
    return;
  }
  let d = Math.max(1, Math.min(u - 1, c.length - i - 1));
  Ot(c, i, d, e);
}
function Tt(t, e) {
  let r = e.text.split(`
`);
  if (W(e.cursor.text, e.cursor.offset) < r.length - 1) Je(t, e);
}
function ht(t, e, r, n) {
  let s = Math.min(r, n.cursor.offset),
    o = Math.max(r, n.cursor.offset),
    i = n.text,
    u = Ft(
      i.slice(0, s),
      `
`
    ),
    c =
      u +
      Ft(
        i.slice(s, o),
        `
`
      ),
    d = i.split(`
`);
  for (let x = 0; x < e; x++) ze(d, u, c, t);
  let O = d.join(`
`),
    p = fe(d[u] ?? "");
  (n.setText(O),
    n.setOffset(X(d, u) + p),
    n.recordChange({ type: "visualIndent", dir: t, count: e, lines: c - u + 1 }));
}
function Ct(t, e, r, n) {
  let s = n.text,
    o = s.split(`
`),
    i = Ft(
      s.slice(0, n.cursor.offset),
      `
`
    ),
    u = Math.min(i + r - 1, o.length - 1);
  for (let O = 0; O < e; O++) ze(o, i, u, t);
  let c = o.join(`
`),
    d = fe(o[i] ?? "");
  (n.setText(c), n.setOffset(X(o, i) + d));
}
function Rt(t, e, r, n, s, o = !1) {
  if (s && t === "change") {
    let i = n.text.slice(e, r),
      u = i;
    if (
      !u.endsWith(`
`)
    )
      u += `
`;
    n.setRegister(u, !0);
    let c = n.text.slice(0, e),
      d = n.text.slice(r),
      O =
        d !== "" ||
        (i.endsWith(`
`) &&
          !o);
    (n.setText(
      c +
        (O
          ? `
`
          : "") +
        d
    ),
      n.enterInsert(e));
    return;
  }
  if (s && t === "delete") {
    let i = n.text.slice(e, r);
    if (
      !i.endsWith(`
`)
    )
      i += `
`;
    n.setRegister(i, !0);
    let u = e;
    if (
      r === n.text.length &&
      e > 0 &&
      n.text[e - 1] ===
        `
`
    )
      u -= 1;
    let c = r < n.text.length,
      d = n.text.slice(0, u) + n.text.slice(r);
    n.setText(d);
    let O = c ? e : Z(d, d.length),
      p = d.indexOf(
        `
`,
        O
      ),
      x = p === -1 ? d.length : p,
      h = xi.fromText(d.slice(O, x), n.cursor.measuredText.columns + 1),
      b = Wt(h, c),
      D = !c && h.placeholderStartingAt(b) !== null;
    n.setOffset(D ? Xie(d, d.length) : O + b);
    return;
  }
  Se(t, e, r, n, s);
}
function vt(t, e, r, n) {
  let { from: s, to: o } = Me(e, r, n),
    i = Ve(r.text.slice(s, o), n),
    u =
      n &&
      r.text.endsWith(`
`) &&
      Math.max(e, r.cursor.offset) >= r.text.length;
  (Rt(t, s, o, r, n, u), B(r, { type: "visualOp", op: t, span: i, linewise: n }));
}
function It(t, e, r, n) {
  let { from: s, to: o } = ue(n, e, r);
  if (s === o && !(r && n.text.length > 0)) return;
  Rt(t, s, o, n, r);
}
function wt(t, e, r) {
  let { from: n, to: s } = ue(r, t, e);
  if (n === s && !e) return;
  let o = r.text.slice(n, s),
    i = o;
  if (
    e &&
    !i.endsWith(`
`)
  )
    i += `
`;
  r.setRegister(i, e);
  let u = r.text.slice(s),
    c =
      e &&
      (u !== "" ||
        o.endsWith(`
`))
        ? `
` + u
        : u;
  (r.setText(r.text.slice(0, n) + c), r.enterInsert(n));
}
function St(t, e, r, n) {
  let s = n.text.slice(e, r),
    o = "";
  for (let { segment: c } of $a().segment(s))
    o +=
      c ===
      `
`
        ? `
`
        : t;
  let i = n.text.slice(0, e) + o + n.text.slice(r),
    u = n.cursor;
  (n.setText(i), n.setOffset(jee(u, e, i)));
}
function Lt(t, e, r, n) {
  let { from: s, to: o } = Me(e, r, n),
    i = Ve(r.text.slice(s, o), n);
  (St(t, s, o, r), r.recordChange({ type: "visualReplace", char: t, span: i, linewise: n }));
}
function Vt(t, e, r, n) {
  let { from: s, to: o } = ue(n, e, r);
  if (s === o) return;
  St(t, s, o, n);
}
function Mt(t, e, r, n) {
  let s = n.text.slice(e, r),
    o = "";
  for (let { segment: c } of $a().segment(s))
    if (t === "upper") o += c.toUpperCase();
    else if (t === "lower") o += c.toLowerCase();
    else o += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  let i = n.text.slice(0, e) + o + n.text.slice(r),
    u = n.cursor;
  (n.setText(i), n.setOffset(jee(u, e, i)));
}
function kt(t, e, r, n) {
  let { from: s, to: o } = Me(e, r, n),
    i = Ve(r.text.slice(s, o), n);
  (Mt(t, s, o, r), r.recordChange({ type: "visualCase", caseOp: t, span: i, linewise: n }));
}
function Et(t, e, r, n) {
  let { from: s, to: o } = ue(n, e, r);
  if (s === o) return;
  Mt(t, s, o, n);
}
function At(t, e, r) {
  let n = e.getRegister();
  if (!n) return;
  let { from: s, to: o } = Me(t, e, r),
    i = Ve(e.text.slice(s, o), r),
    u = Nt(n, s, o, e, r);
  e.recordChange({ type: "visualPaste", content: u, span: i, linewise: r });
}
function jt(t, e, r, n) {
  let { from: s, to: o } = ue(n, e, r);
  if (s === o && !r) return;
  Nt(t, s, o, n, r);
}
function Nt(t, e, r, n, s) {
  let o = n.text.slice(e, r).endsWith(`
`),
    i = t.endsWith(`
`)
      ? t.slice(0, -1)
      : t;
  if (
    o &&
    !i.endsWith(`
`)
  )
    i += `
`;
  let u = n.text.slice(e, r);
  if (
    s &&
    !u.endsWith(`
`)
  )
    u += `
`;
  n.setRegister(u, s);
  let c = n.text.slice(0, e) + i + n.text.slice(r);
  if ((n.setText(c), s)) {
    let d = xi.fromText(c, n.cursor.measuredText.columns, e),
      O = je(d);
    n.setOffset(d.placeholderStartingAt(O) ? e : O);
  } else if (
    i.endsWith(`
`)
  )
    n.setOffset(e);
  else {
    let d = nX(i);
    n.setOffset(Math.max(e, e + i.length - (d.length || 1)));
  }
  return i;
}
function ke(t, e, r) {
  let n = e === 0 ? r.cursor.startOfLastLine() : r.cursor.goToLine(e);
  (Ae(t, W(r.text, r.cursor.offset), W(r.text, n.offset), r, Math.min(r.cursor.offset, je(n))),
    B(r, { type: "operator", op: t, motion: "G", count: e }));
}
function Ee(t, e, r) {
  let n = e === 1 ? r.cursor.startOfFirstLine() : r.cursor.goToLine(e);
  (Ae(t, W(r.text, r.cursor.offset), W(r.text, n.offset), r, Math.min(r.cursor.offset, je(n))),
    B(r, { type: "operator", op: t, motion: "gg", count: e }));
}
function Ae(t, e, r, n, s) {
  let o = n.text.split(`
`),
    i = Math.min(e, r),
    u = Math.min(Math.max(e, r) + 1, o.length),
    c = o.slice(0, i),
    d = o.slice(u),
    O = X(o, i),
    p = o
      .slice(i, u)
      .map(
        (x) =>
          x +
          `
`
      )
      .join("");
  if ((n.setRegister(p, !0), t === "yank")) {
    let x = Xie(n.text, s);
    n.setOffset(s === n.text.length ? Pt(n.cursor, x) : n.cursor.snapOutOfPlaceholder(x, "start"));
  } else if (t === "delete") {
    let x = [...c, ...d];
    n.setText(
      x.join(`
`)
    );
    let h = Math.max(0, Math.min(i, x.length - 1)),
      b = xi.fromText(x[h] ?? "", n.cursor.measuredText.columns + 1);
    n.setOffset(X(x, h) + Wt(b, d.length > 0));
  } else if (t === "change")
    (n.setText(
      [...c, "", ...d].join(`
`)
    ),
      n.enterInsert(O));
}
function W(t, e) {
  return Ft(
    t.slice(0, e),
    `
`
  );
}
function fe(t) {
  let e = 0;
  for (let { segment: r, index: n } of $a().segment(t))
    if (((e = n), r !== " " && r !== "\t")) break;
  return e;
}
function Wt(t, e) {
  let r = fe(t.text);
  if (t.placeholderStartingAt(r) === null) return r;
  if (r > 0 || e) return 0;
  let n = Xie(t.text, t.text.length);
  return Pt(t, n);
}
function Pt(t, e) {
  let r = t.snapOutOfPlaceholder(e, "start");
  if (r === e) return e;
  let n = t.snapOutOfPlaceholder(e, "end");
  return wGe(t.text.slice(r, n)) ? n : r;
}
function je(t) {
  let e = t.startOfLogicalLine().offset,
    r = t.endOfLogicalLine().offset;
  return e + fe(t.text.slice(e, r));
}
var _t = 1000;
function pn(t) {
  let e = new Map();
  for (let [r, n] of Object.entries(t)) {
    if (typeof n !== "string" || n.toLowerCase() !== "<esc>") continue;
    let s = r.normalize("NFC");
    if (!/^[^\p{C}\p{Z}]{2}$/u.test(s) || VZ(s) !== 2) continue;
    e.set(s, "<Esc>");
  }
  return e;
}
function P8t() {
  return pn(hM("vimInsertModeRemaps")[0] ?? {});
}
function Xe(t, e, r) {
  switch (t.type) {
    case "idle":
      return gn(e, r);
    case "count":
      return xn(t, e, r);
    case "operator":
      return On(t, e, r);
    case "operatorCount":
      return bn(t, e, r);
    case "operatorFind":
      return yn(t, e, r);
    case "operatorTextObj":
      return Tn(t, e, r);
    case "find":
      return hn(t, e, r);
    case "g":
      return Cn(t, e, r);
    case "operatorG":
      return Rn(t, e, r);
    case "replace":
      return vn(t, e, r);
    case "indent":
      return In(t, e, r);
  }
}
var mn = Object.assign(Object.create(null), {
  g: (t) => ({ next: { type: "g", count: t } }),
  r: (t) => ({ next: { type: "replace", count: t } }),
  ">": (t) => ({ next: { type: "indent", dir: ">", count: t } }),
  "<": (t) => ({ next: { type: "indent", dir: "<", count: t } }),
  "~": (t, e) => ({ execute: () => Ie(t, e) }),
  x: (t, e) => ({ execute: () => Ce(t, e), wanted: null }),
  s: (t, e) => ({ execute: () => Re(t, e) }),
  S: (t, e) => ({ execute: () => Q("change", t, e) }),
  J: (t, e) => ({ execute: () => Je(t, e) }),
  p: (t, e) => ({ execute: () => ie(!0, t, e), wanted: e.getRegister() === "" ? void 0 : null }),
  P: (t, e) => ({ execute: () => ie(!1, t, e), wanted: e.getRegister() === "" ? void 0 : null }),
  D: (t, e) => ({ execute: () => q("delete", "$", 1, e), wanted: null }),
  C: (t, e) => ({ execute: () => q("change", "$", 1, e) }),
  Y: (t, e) => ({ execute: () => Q("yank", t, e) }),
  ";": (t, e) => ({ execute: () => Fe(!1, t, e) }),
  ",": (t, e) => ({ execute: () => Fe(!0, t, e) }),
  u: (t, e) => ({ execute: () => e.onUndo?.(), wanted: null }),
  i: (t, e) => ({ execute: () => Ne("i", e) }),
  I: (t, e) => ({ execute: () => Ne("I", e) }),
  a: (t, e) => ({ execute: () => Ne("a", e) }),
  A: (t, e) => ({ execute: () => Ne("A", e) }),
  o: (t, e) => ({ execute: () => ae("below", e) }),
  O: (t, e) => ({ execute: () => ae("above", e) })
});
function Dt(t, e, r, n) {
  if (Ue(t)) return { next: { type: "operator", op: ge[t], count: e, countTyped: r } };
  if (t === "G")
    return {
      execute: () => {
        n.setOffset(
          r
            ? n.cursor.goToLine(e).offset
            : n.text.lastIndexOf(`
`) + 1
        );
      }
    };
  if (t === "j" || t === "k") {
    let { offset: s, column: o } = Ht(t === "j", e, n),
      { text: i } = n.cursor;
    if (s === null)
      return { next: { type: "idle" }, wanted: { column: o, offset: n.cursor.offset, text: i } };
    let u = jee(n.cursor, s);
    return { execute: () => n.setOffset(u), wanted: { column: o, offset: u, text: i } };
  }
  if (t === "$") {
    let s = n.cursor.lastCharInLogicalLine().offset;
    return {
      execute: () => n.setOffset(s),
      wanted: { column: 1 / 0, offset: s, text: n.cursor.text }
    };
  }
  if (Ye(t, r)) {
    let s = t === " " || t === _ ? En(t, n.cursor, e) : z(t, n.cursor, e),
      o = jee(s, s.offset);
    if (o === n.cursor.offset && Gt(t)) return { next: { type: "idle" } };
    return { execute: () => n.setOffset(o), wanted: null };
  }
  if (Oe.has(t)) return { next: { type: "find", find: t, count: e } };
  if (t === ".") return { execute: () => n.onDotRepeat?.(r ? e : void 0) };
  return mn[t]?.(e, n) ?? null;
}
function Kt(t, e, r, n, s) {
  if (Be(n)) return { next: { type: "operatorTextObj", op: t, count: e, scope: ye[n] } };
  if (Oe.has(n)) return { next: { type: "operatorFind", op: t, count: e, find: n } };
  if (Ye(n, r))
    return {
      execute: () => q(t, n, e, s),
      wanted: n === "j" || n === "k" || n === "%" ? void 0 : null
    };
  if (n === "G") {
    let o = r ? e : 0;
    return { execute: () => ke(t, o, s) };
  }
  if (n === "g") return { next: { type: "operatorG", op: t, count: e } };
  return null;
}
function gn(t, e) {
  if (/[1-9]/.test(t)) return { next: { type: "count", count: parseInt(t, 10) } };
  if (t === "0") return { execute: () => e.setOffset(e.cursor.startOfLogicalLine().offset) };
  let r = Dt(t, 1, !1, e);
  if (r) return r;
  return {};
}
function xn(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { type: "count", count: qe(t.count, e) } };
  let n = Dt(e, t.count, !0, r);
  if (n) return n;
  return { next: { type: "idle" } };
}
function On(t, e, r) {
  if (e === t.op[0]) return { execute: () => Q(t.op, t.count, r) };
  if (/[1-9]/.test(e))
    return {
      next: { type: "operatorCount", op: t.op, count: t.count, motionCount: parseInt(e, 10) }
    };
  let n = t.countTyped ?? !1,
    s = Kt(t.op, t.count, n, e, r);
  if (s) return s;
  return { next: { type: "idle" } };
}
function bn(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { ...t, motionCount: qe(t.motionCount, e) } };
  let n = t.count * t.motionCount;
  if (e === t.op[0]) return { execute: () => Q(t.op, n, r) };
  let s = Kt(t.op, n, !0, e, r);
  if (s) return s;
  return { next: { type: "idle" } };
}
function yn(t, e, r) {
  return {
    execute: () => {
      if (e !== "") r.setLastFind(t.find, e);
      Te(t.op, t.find, e, t.count, r);
    }
  };
}
function Tn(t, e, r) {
  if (Ge.has(e)) return { execute: () => he(t.op, t.scope, e, t.count, r) };
  return { next: { type: "idle" } };
}
function hn(t, e, r) {
  return {
    execute: () => {
      if (e !== "") r.setLastFind(t.find, e);
      let n = r.cursor.findCharacter(e, t.find, t.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function Cn(t, e, r) {
  if (e === "j" || e === "k") {
    let { offset: n, column: s } = $t(`g${e}`, t.count, r),
      o = jee(r.cursor, n);
    return {
      execute: () => r.setOffset(o),
      wanted: s === null ? null : { column: s, offset: o, text: r.cursor.text }
    };
  }
  if (e === "g") {
    if (t.count > 1)
      return {
        execute: () => {
          let n = r.text.split(`
`),
            s = Math.min(t.count - 1, n.length - 1),
            o = 0;
          for (let i = 0; i < s; i++) o += (n[i]?.length ?? 0) + 1;
          r.setOffset(o);
        }
      };
    return { execute: () => r.setOffset(r.cursor.startOfFirstLine().offset) };
  }
  return { next: { type: "idle" } };
}
function Rn(t, e, r) {
  if (e === "j" || e === "k") return { execute: () => q(t.op, `g${e}`, t.count, r) };
  if (e === "g") return { execute: () => Ee(t.op, t.count, r) };
  return { next: { type: "idle" } };
}
function vn(t, e, r) {
  if (e === "") return { next: { type: "idle" } };
  return { execute: () => ve(e, t.count, r) };
}
function In(t, e, r) {
  if (e === t.dir) return { execute: () => we(t.dir, t.count, r) };
  return { next: { type: "idle" } };
}
function Fe(t, e, r) {
  let n = r.getLastFind();
  if (!n) return;
  let s = n.type;
  if (t) s = { f: "F", F: "f", t: "T", T: "t" }[s];
  let o = r.cursor.findCharacter(n.char, s, e);
  if (o !== null) r.setOffset(o);
}
function Ut(t, e, r) {
  switch (t.type) {
    case "idle":
      return Sn(e, r);
    case "count":
      return Ln(t, e, r);
    case "find":
      return Vn(t, e, r);
    case "g":
      return Mn(t, e, r);
    case "replace":
      if (e === "") return { next: { type: "idle" } };
      return { exit: "replace", char: e };
    case "textObject":
      return kn(t, e, r);
  }
}
var wn = Object.assign(Object.create(null), {
  x: () => ({ exit: "operator", op: "delete" }),
  s: () => ({ exit: "operator", op: "change" }),
  X: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
  D: () => ({ exit: "operator", op: "delete", forceLinewise: !0 }),
  C: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  S: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  R: () => ({ exit: "operator", op: "change", forceLinewise: !0 }),
  Y: () => ({ exit: "operator", op: "yank", forceLinewise: !0 }),
  r: () => ({ next: { type: "replace" } }),
  "~": () => ({ exit: "case", op: "toggle" }),
  u: () => ({ exit: "case", op: "lower" }),
  U: () => ({ exit: "case", op: "upper" }),
  p: () => ({ exit: "paste" }),
  P: () => ({ exit: "paste" }),
  ">": (t) => ({ exit: "indent", dir: ">", count: t }),
  "<": (t) => ({ exit: "indent", dir: "<", count: t }),
  v: () => ({ exit: "toggleKind", key: "v" }),
  V: () => ({ exit: "toggleKind", key: "V" }),
  o: () => ({ exit: "swap" }),
  J: () => ({ exit: "join" }),
  $: (t, e) => {
    let r = e.cursor.endOfLogicalLine().offset;
    return {
      next: { type: "idle" },
      move: () => e.setOffset(r),
      wanted: { column: 1 / 0, offset: r, text: e.cursor.text }
    };
  },
  g: (t) => ({ next: { type: "g", count: t } }),
  ";": (t, e) => ({ next: { type: "idle" }, move: () => Fe(!1, t, e) }),
  ",": (t, e) => ({ next: { type: "idle" }, move: () => Fe(!0, t, e) })
});
function Bt(t, e, r, n) {
  if (Ue(t)) return { exit: "operator", op: ge[t] };
  if (t === "G")
    return {
      next: { type: "idle" },
      move: () => {
        n.setOffset(
          r
            ? n.cursor.goToLine(e).offset
            : n.text.lastIndexOf(`
`) + 1
        );
      }
    };
  let s = wn[t];
  if (s) return s(e, n);
  if (Be(t)) return { next: { type: "textObject", scope: ye[t], count: e } };
  if (t === "j" || t === "k") {
    let o = Ht(t === "j", e, n),
      i = o.offset ?? n.cursor.offset;
    return {
      next: { type: "idle" },
      move: () => n.setOffset(i),
      wanted: { column: o.column, offset: i, text: n.cursor.text }
    };
  }
  if (Ye(t, r)) {
    let { offset: o } = z(t, n.cursor, e);
    if (o === n.cursor.offset && Gt(t)) return { next: { type: "idle" } };
    return { next: { type: "idle" }, move: () => n.setOffset(o) };
  }
  if (Oe.has(t)) return { next: { type: "find", find: t, count: e } };
  return null;
}
function Sn(t, e) {
  if (/[1-9]/.test(t)) return { next: { type: "count", count: parseInt(t, 10) } };
  if (t === "0")
    return {
      next: { type: "idle" },
      move: () => e.setOffset(e.cursor.startOfLogicalLine().offset)
    };
  return Bt(t, 1, !1, e) ?? { next: { type: "idle" } };
}
function Ln(t, e, r) {
  if (/[0-9]/.test(e)) return { next: { type: "count", count: qe(t.count, e) } };
  return Bt(e, t.count, !0, r) ?? { next: { type: "idle" } };
}
function Vn(t, e, r) {
  return {
    next: { type: "idle" },
    move: () => {
      if (e !== "") r.setLastFind(t.find, e);
      let n = r.cursor.findCharacter(e, t.find, t.count);
      if (n !== null) r.setOffset(n);
    }
  };
}
function Mn(t, e, r) {
  if (e === "j" || e === "k") {
    let { offset: n, column: s } = $t(`g${e}`, t.count, r);
    return {
      next: { type: "idle" },
      move: () => r.setOffset(n),
      wanted: s === null ? null : { column: s, offset: n, text: r.cursor.text }
    };
  }
  if (e === "g")
    return {
      next: { type: "idle" },
      move: () => {
        let n = t.count > 1 ? r.cursor.goToLine(t.count) : r.cursor.startOfFirstLine();
        r.setOffset(n.offset);
      }
    };
  return { next: { type: "idle" } };
}
function kn(t, e, r) {
  if (Ge.has(e)) {
    let n = ne(r.text, r.cursor.offset, e, t.scope === "inner");
    if (n) return { exit: "selectRange", start: n.start, end: n.end };
  }
  return { next: { type: "idle" } };
}
function Ye(t, e) {
  return dt.has(t) && !(t === "%" && e);
}
function Gt(t) {
  return xe.has(t) || t === "%";
}
function qe(t, e) {
  return Math.min(t * 10 + parseInt(e, 10), pt);
}
function Qe(t, e) {
  switch (t) {
    case "i":
      return e.offset;
    case "I":
      return e.firstNonBlankInLogicalLine().offset;
    case "a":
      return e.isAtEnd() ||
        e.text[e.offset] ===
          `
`
        ? e.offset
        : e.right().offset;
    case "A":
      return e.endOfLogicalLine().offset;
  }
}
function Ne(t, e) {
  (e.enterInsert(Qe(t, e.cursor)), e.recordChange({ type: "insertCommand", key: t }));
}
function En(t, e, r) {
  let n = e;
  for (let s = 0; s < r; s++) {
    let o = z(t, n, 1),
      { text: i, offset: u } = o;
    if (
      i[u] ===
        `
` &&
      u > 0 &&
      i[u - 1] !==
        `
`
    )
      o = t === _ ? new xi(o.measuredText, jee(o, u)) : z(t, o, 1);
    if (o.equals(n)) break;
    n = o;
  }
  return n;
}
function Ht(t, e, r) {
  let { cursor: n } = r,
    s = n.text,
    o = n.startOfLogicalLine().offset,
    i = oe(n, r.wantedColumn),
    u = o;
  for (let p = 0; p < e; p++)
    if (t) {
      let x = s.indexOf(
        `
`,
        u
      );
      if (x === -1) break;
      u = x + 1;
    } else if (u === 0) break;
    else
      u =
        u === 1
          ? 0
          : s.lastIndexOf(
              `
`,
              u - 2
            ) + 1;
  if (u === o) return { offset: null, column: i };
  let c = s.indexOf(
      `
`,
      u
    ),
    d = c === -1 ? s.length : c,
    O = se(s, u, d, i);
  return { offset: Le(n, O, u), column: i };
}
function $t(t, e, r) {
  let { cursor: n } = r,
    s = z(t, n, e),
    o = n.measuredText.getWrappedLines(),
    i = o[n.getPosition().line],
    u = o[s.getPosition().line],
    c = i?.startOffset === 0 || i?.isPrecededByNewline,
    d = u?.startOffset === 0 || u?.isPrecededByNewline;
  if (s.equals(n) || !c || !d || !u) return { offset: s.offset, column: null };
  let O = oe(n, r.wantedColumn),
    p = u.startOffset + u.text.length,
    x = se(n.text, u.startOffset, p, O),
    h = Le(n, x, u.startOffset),
    b = !u.endsWithNewline && p < n.text.length;
  return { offset: h === p && b ? n.measuredText.prevOffset(p) : h, column: O };
}
var An = /^\x1b(?![[\]P_\\])[\x21-\x7e]$/,
  rt = new Set([
    "backspace",
    "delete",
    "tab",
    "home",
    "end",
    "pageup",
    "pagedown",
    "insert",
    "clear",
    "enter",
    "center",
    "undefined",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
  ]);
function Ze(t, e) {
  return (e || t.name === "") && !rt.has(t.name);
}
function et(t) {
  if (!t) return !1;
  switch (t.type) {
    case "insertCommand":
    case "openLine":
    case "substitute":
      return !0;
    case "operator":
    case "operatorFind":
    case "operatorTextObj":
    case "visualOp":
      return t.op === "change";
    default:
      return !1;
  }
}
function jn(t) {
  switch (t.type) {
    case "x":
    case "substitute":
    case "paste":
    case "operatorTextObj":
      return !0;
    case "operator":
      return !["h", "l", " ", _, "gj", "gk", "%"].includes(t.motion);
    default:
      return !1;
  }
}
function tt(t, e) {
  return {
    ...t,
    setText: (r, n) => {
      (e(), t.setText(r, n));
    },
    setOffset: (r) => {
      (e(), t.setOffset(r));
    },
    enterInsert: (r) => {
      (e(), t.enterInsert(r));
    },
    setRegister: (r, n) => {
      (e(), t.setRegister(r, n));
    }
  };
}
function Jt(t, e) {
  let r = jee(t, t.offset);
  if (r !== t.offset) e.setOffset(r);
  return r;
}
function nt(t, e, r) {
  if (t.wanted !== void 0) return t.wanted ?? void 0;
  return e ? void 0 : r;
}
function jno(t) {
  let {
      value: e,
      onChange: r,
      columns: n,
      disableEscapeDoublePress: s,
      onModeChange: o,
      onUndo: i,
      onOpenHistorySearch: u,
      onToggleHelp: c,
      onHistoryUp: d,
      onHistoryDown: O,
      inputFilter: p,
      getInputMode: x,
      isActive: h
    } = t,
    b = C(mt()),
    [D, K] = y("INSERT"),
    [ce, H] = y(null),
    [zt, ot] = y(!1);
  ft(h && D === "INSERT");
  let ee = C(null),
    te = C(Nn()),
    J = C(null),
    pe = C(null),
    We = C(null);
  function Xt(a, f) {
    let l = b.current;
    if (l.mode === "INSERT" && !f.ctrl && !f.meta && Ze(f, [...f.key].length === 1))
      b.current = { mode: "INSERT", insertedText: l.insertedText + a.normalize("NFC") };
  }
  let Yt = de((a, f = "") => {
    let l = b.current;
    if (l.mode !== "INSERT") return;
    let m =
      f !== "" && l.insertedText.endsWith(f) ? l.insertedText.slice(0, -f.length) : l.insertedText;
    b.current = { mode: "INSERT", insertedText: m + a };
  }, []);
  function st(a, f, l, m) {
    for (let T of a.keys())
      if (T.startsWith(f)) {
        ee.current = { char: f, at: Date.now(), offsetAfter: l, recorded: m };
        return;
      }
  }
  let qt = de(() => {
      ee.current = null;
    }, []),
    Qt = de(() => {
      let a = b.current;
      if (a.mode !== "INSERT") b.current = { ...a, wanted: void 0 };
    }, []),
    Pe = de(
      (a, f) => {
        if (f !== void 0) a.setOffset(f);
        ((ee.current = null),
          (pe.current = null),
          (We.current = null),
          (b.current = { mode: "INSERT", insertedText: "" }),
          K("INSERT"),
          H(null),
          o?.("INSERT"));
      },
      [o]
    ),
    F = de(
      (a, f) => {
        let l = b.current;
        if (l.mode === "INSERT") {
          let m = J.current,
            T = m === pe.current;
          if (m?.type === "visualOp" && m.op === "change" && T)
            J.current = {
              type: "visualChange",
              span: m.span,
              linewise: m.linewise,
              text: l.insertedText ?? ""
            };
          else if (
            et(m) &&
            m.type !== "visualOp" &&
            T &&
            (l.insertedText || (f?.buffer ? f.buffer.text : e.normalize("NFC")) === We.current)
          )
            J.current = { ...m, insertedText: l.insertedText };
          else if (l.insertedText || (f?.claimEmptyInsert && !et(m)))
            J.current = { type: "insert", text: l.insertedText };
          let v = f?.buffer ? f.buffer.offset : a.offset,
            V = f?.buffer ? f.buffer.text : e.normalize("NFC");
          if (
            v > 0 &&
            V[v - 1] !==
              `
`
          ) {
            let w = v > V.length ? 1 : nX(V.slice(0, v)).length;
            a.setOffset(v - w);
          } else if (f?.buffer) a.setOffset(v);
        }
        ((b.current = { mode: "NORMAL", command: { type: "idle" } }),
          K("NORMAL"),
          H(null),
          o?.("NORMAL"));
      },
      [o, e]
    ),
    _e = de(
      (a, f, l) => {
        b.current = { mode: "VISUAL", kind: f, anchor: a, command: { type: "idle" }, wanted: l };
        let m = f === "line" ? "VISUAL LINE" : "VISUAL";
        (K(m), H(a), o?.(m));
      },
      [o]
    );
  function re(a, f, l = !1) {
    let m;
    return {
      cursor: a,
      text: a.text,
      setText: (T, v) => {
        ((m = T), r(T, v));
      },
      setOffset: (T) => f.setOffset(T),
      enterInsert: (T) => {
        (Pe(f, T), (We.current = m ?? a.text));
      },
      getRegister: () => te.current.register,
      getRegisterIsLinewise: () => te.current.registerIsLinewise,
      setRegister: (T, v) => {
        ((te.current.register = T), (te.current.registerIsLinewise = v));
      },
      getLastFind: () => te.current.lastFind,
      setLastFind: (T, v) => {
        te.current.lastFind = { type: T, char: v };
      },
      recordChange: l
        ? () => {}
        : (T) => {
            if (((J.current = T), et(T) && b.current.mode === "INSERT")) pe.current = T;
          }
    };
  }
  function it(a, f, l) {
    let m = a.text;
    return {
      ...a,
      setText: (T, v) => {
        let V = { value: m, cursorOffset: a.cursor.offset };
        ((m = T), a.setText(T, v ?? { previous: V }));
      },
      enterInsert: (T) => {
        let v = m.slice(0, T) + f + m.slice(T),
          V = { value: m, cursorOffset: T },
          w = me(v, l, V) ? f.slice(1) : f;
        a.setText(v, { previous: V });
        let S = m.slice(0, T),
          I = (S + w).normalize("NFC"),
          M = I.startsWith(S) ? nX(I.slice(S.length)) : "",
          L = M && !/^[\p{Mn}\p{Me}]/u.test(M) ? M : nX(I),
          E = I.endsWith(`
`)
            ? I.length
            : I.length - L.length,
          N =
            T > 0 &&
            S[T - 1] !==
              `
`
              ? T - nX(S).length
              : T;
        a.setOffset(w ? E : N);
      }
    };
  }
  function me(a, f, l) {
    return (
      x !== void 0 &&
      zhs({
        nextValue: a,
        value: l?.value ?? e,
        cursorOffset: l?.cursorOffset ?? f.offset,
        mode: x()
      })
    );
  }
  function at(a, f, l, m) {
    if (a.type === "insertCommand") {
      if (a.insertedText === void 0) return;
      let T = Qe(a.key, f);
      ((f = new xi(f.measuredText, T)), (a = { type: "insert", text: a.insertedText }));
    }
    if ("insertedText" in a && a.insertedText !== void 0) l = it(l, a.insertedText, m);
    switch (a.type) {
      case "insert":
        if (a.text) {
          let T = f.insert(a.text),
            v = me(T.text, m);
          l.setText(T.text);
          let V = v ? T.text.slice(1) : T.text,
            w = T.offset - (v ? 1 : 0);
          l.setOffset(
            V[w - 1] ===
              `
`
              ? w
              : w - nX(V.slice(0, w)).length
          );
        }
        break;
      case "x":
        Ce(a.count, l);
        break;
      case "substitute":
        Re(a.count, l);
        break;
      case "replace":
        ve(a.char, a.count, l);
        break;
      case "toggleCase":
        Ie(a.count, l);
        break;
      case "indent":
        we(a.dir, a.count, l);
        break;
      case "join":
        Tt(a.count, l);
        break;
      case "openLine":
        ae(a.direction, l);
        break;
      case "operator":
        if (a.motion === a.op[0]) Q(a.op, a.count, l);
        else if (a.motion === "gg") Ee(a.op, a.count, l);
        else if (a.motion === "G") ke(a.op, a.count, l);
        else q(a.op, a.motion, a.count, l);
        break;
      case "operatorFind":
        Te(a.op, a.find, a.char, a.count, l);
        break;
      case "operatorTextObj":
        he(a.op, a.scope, a.objType, a.count, l);
        break;
      case "visualOp":
        It(a.op, a.span, a.linewise, l);
        break;
      case "visualReplace":
        Vt(a.char, a.span, a.linewise, l);
        break;
      case "visualCase":
        Et(a.caseOp, a.span, a.linewise, l);
        break;
      case "visualPaste":
        jt(a.content, a.span, a.linewise, l);
        break;
      case "visualIndent":
        Ct(a.dir, a.count, a.lines, l);
        break;
      case "visualChange":
        wt(a.span, a.linewise, it(l, a.text, m));
        break;
      case "paste":
        ie(a.after, a.count, l);
        break;
    }
  }
  function ut(a) {
    let f = J.current;
    if (f && a !== void 0 && "count" in f && jn(f)) return { ...f, count: a };
    return f;
  }
  function lt(a, f) {
    let l = ut(f);
    if (!l) return;
    let m = xi.fromText(e, n, a.offset);
    at(l, m, re(m, a, !0), a);
  }
  function Zt(a, f) {
    let l = e.normalize("NFC"),
      m = f.offset,
      T = (w, S) => {
        let I = S?.previous;
        if (!me(w, f, I)) l = w;
        else if (w.length !== (I?.value ?? e).length + 1) l = w.slice(1);
        r(w, S);
      },
      v = (w) => {
        let S = ut(w);
        if (!S) return;
        let I = xi.fromText(l, n, m);
        at(
          S,
          I,
          {
            ...re(I, f, !0),
            text: l,
            setText: T,
            setOffset: (M) => {
              ((m = M), f.setOffset(M));
            },
            enterInsert: (M) => {
              ((m = M), Pe(f, M));
            }
          },
          f
        );
      },
      V = [...a];
    for (let w = 0; w < V.length; w++) {
      if (b.current.mode === "INSERT") {
        let R = V.slice(w).join(""),
          U = P8t();
        if (U.size > 0 && U.has(R.normalize("NFC"))) {
          (g("vim_insert_remap"), F(f, { buffer: { text: l, offset: m }, claimEmptyInsert: !0 }));
          return;
        }
        let A = xi.fromText(l, n, m).insert(R),
          Y = me(A.text, f),
          G = A.offset - (Y ? 1 : 0);
        (r(A.text),
          f.setOffset(G),
          (b.current = { mode: "INSERT", insertedText: b.current.insertedText + R }));
        let rn = Y ? R.slice(1) : R,
          De = nX(A.text.slice(0, A.offset));
        if (De && rn.endsWith(De)) st(U, De, G, !0);
        return;
      }
      let S = b.current;
      if (S.mode !== "NORMAL") return;
      let I = V[w];
      if ((I === "v" || I === "V") && (S.command.type === "idle" || S.command.type === "count")) {
        _e(m, I === "V" ? "line" : "char", S.wanted);
        return;
      }
      let M = xi.fromText(l, n, m),
        L = !1,
        E = {
          ...re(M, f, !1),
          text: l,
          setText: T,
          setOffset: (R) => {
            ((m = R), f.setOffset(R));
          },
          enterInsert: (R) => {
            ((m = R), Pe(f, R));
          },
          onDotRepeat: (R) => {
            ((L ||= J.current !== null), v(R));
          },
          wantedColumn: S.wanted
        },
        N = tt(E, () => {
          L = !0;
        }),
        k = Xe(S.command, I, N);
      if (k.execute) k.execute();
      if (b.current.mode === "NORMAL" && (k.next || k.execute || k.wanted !== void 0))
        b.current = {
          mode: "NORMAL",
          command: k.next ?? { type: "idle" },
          wanted: nt(k, L, S.wanted)
        };
    }
  }
  function en(a, f) {
    tn(a, f);
    let l = b.current;
    ot(l.mode !== "INSERT" && l.command.type !== "idle");
  }
  function tn(a, f) {
    let l = b.current;
    if (l.mode === "INSERT" && a.readLate && An.test(a.sequence) && a.readAsEscapeThenKey()) {
      a.preventDefault();
      return;
    }
    let m = xi.fromText(e, n, f.offset),
      T = () => p?.(a.key, a);
    if (!(a.name === "left" && !a.ctrl && !a.meta && !a.fn && !a.superKey && !a.shift))
      f.disarmLeftArrowConfirm?.();
    let v = ee.current;
    if (((ee.current = null), a.ctrl || a.meta)) {
      if (l.mode === "VISUAL") {
        (T(), F(f), a.preventDefault());
        return;
      }
      f.handleKeyDown(a);
      return;
    }
    if (a.name === "escape") {
      if ((T(), l.mode === "NORMAL"))
        b.current = { mode: "NORMAL", command: { type: "idle" }, wanted: l.wanted };
      else if (l.mode === "VISUAL" && l.command.type !== "idle")
        b.current = { ...l, command: { type: "idle" } };
      else {
        if (l.mode === "VISUAL") Jt(m, f);
        F(f);
      }
      if (!s) a.preventDefault();
      return;
    }
    if (a.name === "return" && l.mode !== "VISUAL") {
      f.handleKeyDown(a);
      return;
    }
    if (l.mode === "INSERT") {
      if (a.name === "backspace" || a.name === "delete") {
        if (l.insertedText.length > 0)
          b.current = {
            mode: "INSERT",
            insertedText: l.insertedText.slice(0, -(nX(l.insertedText).length || 1))
          };
      }
      let L = P8t();
      if (L.size > 0) {
        let E = a.key.normalize("NFC"),
          N = [...E].length,
          k = N === 1,
          R = Ze(a, k);
        if (
          R &&
          N <= 2 &&
          v &&
          L.has(v.char + KZ(E)) &&
          Date.now() - v.at <= _t &&
          f.offset === v.offsetAfter &&
          m.text.startsWith(v.char, m.offset - v.char.length)
        ) {
          if ((T(), v.recorded && l.insertedText.endsWith(v.char)))
            b.current = { mode: "INSERT", insertedText: l.insertedText.slice(0, -v.char.length) };
          let Y = m.offset - v.char.length,
            G = m.text.slice(0, Y) + m.text.slice(m.offset);
          (r(G),
            g("vim_insert_remap"),
            F(f, { buffer: { text: G, offset: Y }, claimEmptyInsert: !0 }),
            a.preventDefault());
          return;
        }
        if (R && !k && L.has(E)) {
          (T(), g("vim_insert_remap"), F(f, { claimEmptyInsert: !0 }), a.preventDefault());
          return;
        }
        let A = R ? nX(E) : "";
        if (A) st(L, A, f.offset + E.length, Ze(a, [...a.key].length === 1));
      }
      f.handleKeyDown(a);
      return;
    }
    if (l.mode === "VISUAL") {
      let L = !1,
        E = tt(
          { ...re(m, f, !1), onUndo: i, onDotRepeat: () => lt(f), wantedColumn: l.wanted },
          () => {
            L = !0;
          }
        ),
        N = l.command.type === "idle" || l.command.type === "count",
        k = a.key;
      if (a.name === "left") k = N ? "h" : "";
      else if (a.name === "right") k = N ? "l" : "";
      else if (a.name === "up") k = N ? "k" : "";
      else if (a.name === "down") k = N ? "j" : "";
      else if (a.name === "return")
        k = N
          ? "j"
          : `
`;
      else if (a.name === "backspace") k = N ? _ : "";
      else if (a.name === "delete") k = N && l.command.type !== "count" ? "x" : "";
      else if (a.key === "" || rt.has(a.name)) {
        a.preventDefault();
        return;
      } else if ([...a.key].length > 1) {
        a.preventDefault();
        return;
      }
      T();
      let R = Ut(l.command, k, E),
        U = l.kind === "line";
      if ("next" in R)
        (R.move?.(),
          (b.current = {
            mode: "VISUAL",
            kind: l.kind,
            anchor: l.anchor,
            command: R.next,
            wanted: nt(R, L, l.wanted)
          }));
      else
        switch (R.exit) {
          case "operator":
            if ((vt(R.op, l.anchor, E, U || R.forceLinewise === !0), b.current.mode === "VISUAL"))
              F(f);
            break;
          case "replace":
            (Lt(R.char, l.anchor, E, U), F(f));
            break;
          case "case":
            (kt(R.op, l.anchor, E, U), F(f));
            break;
          case "paste":
            if (E.getRegister()) (At(l.anchor, E, U), F(f));
            else b.current = { ...l, command: { type: "idle" } };
            break;
          case "join":
            (yt(l.anchor, E, U), F(f));
            break;
          case "indent":
            (ht(R.dir, R.count, l.anchor, E), F(f));
            break;
          case "swap": {
            let A = m.offset;
            (f.setOffset(l.anchor),
              (b.current = { mode: "VISUAL", kind: l.kind, anchor: A, command: { type: "idle" } }),
              H(A));
            break;
          }
          case "selectRange": {
            let A = R.end > R.start ? m.measuredText.prevOffset(R.end) : R.start;
            (f.setOffset(A),
              (b.current = {
                mode: "VISUAL",
                kind: l.kind,
                anchor: R.start,
                command: { type: "idle" }
              }),
              H(R.start));
            break;
          }
          default: {
            let A = R.key === "V" ? "line" : "char";
            if (A === l.kind) {
              let Y = Jt(m, f);
              F(f);
              let { wanted: G } = l;
              if (G?.offset === m.offset && G.text === m.text)
                b.current = {
                  mode: "NORMAL",
                  command: { type: "idle" },
                  wanted: { ...G, offset: Y }
                };
            } else _e(l.anchor, A, l.wanted);
            break;
          }
        }
      a.preventDefault();
      return;
    }
    if (l.mode !== "NORMAL") return;
    if (
      l.command.type === "idle" &&
      !a.shift &&
      (a.name === "up" || a.name === "down" || (a.name === "left" && m.text === ""))
    ) {
      f.handleKeyDown(a);
      return;
    }
    if (l.command.type === "idle" && a.key === "?" && c) {
      (c(), a.preventDefault());
      return;
    }
    if ((T(), l.command.type === "idle" && a.key === "/" && u)) {
      (u(), a.preventDefault());
      return;
    }
    if (l.command.type === "idle") {
      if (a.key === "k") {
        let L = m.text.indexOf(`
`);
        if (L === -1 || m.offset <= L) {
          (d?.(), a.preventDefault());
          return;
        }
      }
      if (a.key === "j") {
        let L = m.text.lastIndexOf(`
`);
        if (L === -1 || m.offset > L) {
          (O?.(), a.preventDefault());
          return;
        }
      }
    }
    let V = !1,
      w = tt(
        {
          ...re(m, f, !1),
          onUndo: i,
          onDotRepeat: (L) => {
            ((V ||= J.current !== null), lt(f, L));
          },
          wantedColumn: l.wanted
        },
        () => {
          V = !0;
        }
      ),
      S =
        l.command.type === "idle" ||
        l.command.type === "count" ||
        l.command.type === "operator" ||
        l.command.type === "operatorCount",
      I = a.key;
    if (a.name === "left") I = "h";
    else if (a.name === "right") I = "l";
    else if (a.name === "up") I = "k";
    else if (a.name === "down") I = "j";
    else if (S && a.name === "backspace") I = _;
    else if (S && l.command.type !== "count" && a.name === "delete") I = "x";
    else if (a.key === "" || rt.has(a.name)) return;
    else if ([...a.key].length > 1) {
      (Zt(a.key, f), a.preventDefault());
      return;
    }
    if ((I === "v" || I === "V") && (l.command.type === "idle" || l.command.type === "count")) {
      _e(m.offset, I === "V" ? "line" : "char", l.wanted);
      return;
    }
    let M = Xe(l.command, I, w);
    if (M.execute) M.execute();
    if (b.current.mode === "NORMAL" && (M.next || M.execute || M.wanted !== void 0))
      b.current = {
        mode: "NORMAL",
        command: M.next ?? { type: "idle" },
        wanted: nt(M, V, l.wanted)
      };
    a.preventDefault();
  }
  let nn = de(
    (a, f) => {
      if (((ee.current = null), (pe.current = null), a === "INSERT"))
        ((b.current = { mode: "INSERT", insertedText: "" }), H(null));
      else if (a === "NORMAL")
        ((b.current = { mode: "NORMAL", command: { type: "idle" } }), H(null));
      else {
        let l = a === "VISUAL LINE" ? "line" : "char",
          m = f.offset;
        ((b.current = { mode: "VISUAL", kind: l, anchor: m, command: { type: "idle" } }), H(m));
      }
      (K(a), ot(!1), o?.(a));
    },
    [o]
  );
  return {
    handleKeyDown: en,
    mode: D,
    setMode: nn,
    visualAnchor: ce,
    recordInsertedText: Xt,
    recordInsert: Yt,
    cancelPendingRemap: qt,
    forgetColumn: Qt,
    isCommandPending: zt
  };
}
function Qus(t) {
  let { inputFilter: e } = t,
    r = C(null),
    n = jno({
      value: t.value,
      onChange: (o, i) => {
        if (o === "" && t.value !== "") r.current?.();
        t.onChange(o, i);
      },
      columns: t.columns,
      disableEscapeDoublePress: t.disableEscapeDoublePress,
      onModeChange: t.onModeChange,
      onUndo:
        t.onUndo &&
        (() => {
          (r.current?.(), t.onUndo?.());
        }),
      onOpenHistorySearch: t.onOpenHistorySearch,
      onToggleHelp: t.onToggleHelp,
      onHistoryUp:
        t.onHistoryUp &&
        (() => {
          (r.current?.(), t.onHistoryUp?.());
        }),
      onHistoryDown:
        t.onHistoryDown &&
        (() => {
          (r.current?.(), t.onHistoryDown?.());
        }),
      inputFilter: e,
      getInputMode: t.getInputMode,
      isActive: t.focus !== !1
    }),
    s = M8t({
      ...t,
      selectionAnchor: n.visualAnchor,
      selectionLinewise: n.mode === "VISUAL LINE",
      isCursorOnCharacter: n.mode !== "INSERT",
      inputFilter: (o, i) => {
        let u = e ? e(o, i) : o;
        if (
          o ===
            `
` &&
          (i.name === "return" || i.name === "enter" || (i.ctrl && i.name === "j"))
        ) {
          let c = i.name === "return" && t.multiline === !0 && t.disableBackslashReturn !== !0;
          n.recordInsert(u, c ? "\\" : "");
        } else n.recordInsertedText(u, i);
        return u;
      }
    });
  return (
    (r.current = s.noteKeystrokeEmptied ?? null),
    {
      ...s,
      handleKeyDown: (o) => n.handleKeyDown(o, s),
      recordInsert: n.recordInsert,
      mode: n.mode,
      setMode: (o) => n.setMode(o, s),
      cancelPendingRemap: n.cancelPendingRemap,
      forgetColumn: n.forgetColumn,
      isCommandPending: n.isCommandPending
    }
  );
}
function Nn() {
  let t = Hos();
  if (t) return t;
  let e = gt();
  return (Los(e), e);
}
export { Xie, jee, P8t, jno, Qus };

//# sourceMappingURL=chunk-sr5xxc5x.js.map
