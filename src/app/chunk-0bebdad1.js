// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { yn } from "./chunk-4kxznmzw.js";
import { Ji, Ft, Pq } from "./chunk-a16y5hcz.js";
import { he } from "./chunk-95k4nfdh.js";
import { uGe, WC, RDe, eh } from "./chunk-6h7ejyet.js";
import { BT } from "./chunk-b08qnart.js";
import { Nu, oXo, sXo } from "./chunk-5rw2zfa0.js";
import { uw } from "./chunk-ykrqc7ar.js";
import { r5r, zx } from "./chunk-r1dvrqha.js";
import { n8r } from "./chunk-5y69fhjv.js";
import { vr, Pst } from "./chunk-azq9hjy0.js";
import { le } from "./chunk-vw9e882a.js";
import { B4e } from "./chunk-wr0p4ndg.js";
import { p7n, NGo, kGr, FGo } from "./chunk-971jjch9.js";
import { q3 } from "./chunk-j0tbz6ra.js";
import { Sqn } from "./chunk-yyq6mj0n.js";
import { tv, Udo } from "./chunk-tnj7z4dw.js";
import { Qn } from "./chunk-n35x7axc.js";
import { TM } from "./chunk-527647eb.js";
import { Ac } from "./chunk-mapzg9k3.js";
import { ve } from "./chunk-vk5p9xv3.js";
var et = new Set([
  "iTerm.app",
  "vscode",
  "WezTerm",
  "WarpTerminal",
  "Hyper",
  "Tabby",
  "rio",
  "contour",
  "alacritty"
]);
function GPn() {
  if (i.CLAUDE_CODE_FORCE_STRIKETHROUGH) return !0;
  let e = i.TERM;
  if (i.TERM_PROGRAM === "Apple_Terminal" || e === "linux") return !1;
  return (
    et.has(i.TERM_PROGRAM ?? "") ||
    BT.isGhostty() ||
    BT.isMintty() ||
    BT.isJetBrainsIdeTerminal() ||
    i.LC_TERMINAL === "iTerm2" ||
    !!e?.includes("kitty") ||
    !!e?.includes("alacritty") ||
    !!e?.startsWith("foot") ||
    !!i.KITTY_WINDOW_ID ||
    !!i.ALACRITTY_LOG ||
    !!i.KONSOLE_VERSION ||
    !!i.WT_SESSION ||
    !!i.ZED_TERM ||
    parseInt(i.VTE_VERSION ?? "", 10) >= 4400
  );
}
var A = 1000,
  de = 16000,
  me = 100,
  tt = 4000,
  Y = 100,
  Te = A * me,
  D = WC.rules.block.gfm,
  be = /\r\n?/g,
  nt = `x
`,
  rt = /^\n*/,
  st = /\n*$/,
  J = new RegExp(`^(?:[^\\n]+\\n){1,${Y}}? {0,3}(?:=+|-+) *(?:\\n|$)`),
  ye = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;
function ot() {
  let e = 0;
  return {
    isHeld: () => e > 0,
    during: (t) => {
      e += 1;
      try {
        return t();
      } finally {
        e -= 1;
      }
    }
  };
}
var ee = ot();
function $us(e, t) {
  let n = new WC(e.defaults);
  return (t.includes("<") && n.lex(t), n.state.inLink || n.state.inRawBlock);
}
function Nmr(e) {
  let t = e.replace(
    be,
    `
`
  );
  return re(N([], t, A)).length === t.length && !v(t.slice(D.fences.exec(t)?.[0].length));
}
function vlt(e, t) {
  let n = !Nmr(t);
  return { tokens: n ? ee.during(() => lt(e, t)) : e.lexer(t), isWindowed: n };
}
function it(e) {
  let t = "tokens" in e;
  return oe(e)
    ? e.items
    : X(e)
      ? [...e.header, ...e.rows.flat()].flatMap((n) => n.tokens)
      : t
        ? (e.tokens ?? [])
        : [];
}
function lt(e, t) {
  let n = [],
    r = N(
      [],
      t.replace(
        be,
        `
`
      ),
      A
    );
  while (r.rest !== "") {
    r = { declining: r.declining, ...at(e, r) };
    for (let s of r.taken) {
      let o = n.at(-1);
      o?.type === "space" && s.type === "space" ? (o.raw += s.raw) : n.push(s);
    }
  }
  return n;
}
function at(e, t) {
  let n = re(t),
    { header: r = "", fromRow: s = t.rest } = t.declining ?? {},
    o = n.length + s.length <= t.rest.length && n.startsWith(r);
  return ct(e, n) ? q(t.rest) : o ? te(e, t.rest) : pt(e, t, n);
}
function ct(e, t) {
  let r = v(t) ? new WC(e.defaults).blockTokens(t) : [],
    s = !1;
  while (!s && r.length > 0) ((s = r.some((o) => ut(o).some(v))), (r = r.flatMap(it)));
  return s;
}
function ut(e) {
  let t =
    (se(e) || e.type === "heading" || e.type === "text") &&
    "text" in e &&
    typeof e.text === "string";
  return X(e) ? [e.raw] : t ? [e.text] : [];
}
function pt(e, t, n) {
  let r = e.lexer(n),
    o = n.length === t.rest.length ? r.length : kt(r, n),
    l = xe(r, o, n);
  return l > 0 ? N(r.slice(0, o), t.rest.slice(l), A) : ft(e, t, r);
}
function ft(e, t, n) {
  let [r] = n,
    s = n.length === 1,
    o = s && se(r) && !Le(t.rest),
    l = s && X(r),
    a = we(r?.raw ?? ""),
    c = t.declining?.fromRow ?? t.rest,
    p = l && a.length + c.length <= t.rest.length && !ne(e, a + c.slice(0, M(c, 0, 1)));
  return o ? ke(e, t.rest) : p ? te(e, t.rest) : l ? mt(e, r, t.rest) : dt(t, n);
}
function dt(e, t) {
  let [n] = t,
    r = t.findLastIndex(Re) <= 0,
    s = r && t.some(Ie),
    o = e.lines < de && !(s && se(n)),
    l = r && oe(n),
    a = r && (n?.type === "code" || (s && n?.type !== "html"));
  return o ? N([], e.rest, de) : l ? gt(e, n) : a ? N(t, Et(e), e.lines) : q(e.rest);
}
function gt(e, t) {
  let n = t.items.slice(0, -1),
    r = H(n);
  return r !== "" && e.rest.startsWith(r)
    ? N([Rt(t, r, n)], e.rest.slice(r.length), e.lines)
    : q(e.rest);
}
function ke(e, t) {
  let n = ht(t),
    r = M(n.text, 0, tt) === n.text.length && !v(n.text);
  return N(
    [{ ...n, tokens: r ? new WC(e.defaults).inlineTokens(n.text) : [Se(n.text)] }],
    t.slice(n.raw.length),
    A
  );
}
var te = (e, t) => (Le(t) ? q(t) : ke(e, t));
function Le(e) {
  return J.test(e) && D.lheading.test(e);
}
function ht(e) {
  let t = xt(),
    n = ge(e, "");
  while (n.nextLines !== "")
    ((t.text +=
      t.raw === ""
        ? n.nextLines
        : `
${n.nextLines}`),
      (t.raw += n.nextLines + n.lineBreak),
      (n = ge(n.isOpen ? e.slice(t.raw.length) : "", nt)));
  return t;
}
function ge(e, t) {
  let n = M(e, 0, A),
    r =
      e[n - 1] ===
      `
`
        ? n - 1
        : n,
    s = (D.paragraph.exec(t + e.slice(0, M(e, n, 1)))?.[0] ?? t).slice(t.length),
    o = s.slice(0, r),
    l = s.length > r,
    a =
      l ||
      D.newline.exec(e.slice(o.length))?.[0] ===
        `
`;
  return {
    nextLines: o,
    lineBreak: a
      ? `
`
      : "",
    isOpen: l
  };
}
function mt(e, t, n) {
  let r = we(t.raw),
    s = bt(r, n),
    o = Ee(n.slice(r.length, s), A),
    l = [],
    a = !1;
  while (!a && l.length < o.length) {
    let p = ne(e, r + (o[l.length] ?? ""));
    ((a = p === void 0), p && l.push(p));
  }
  let c = n.slice(0, s) + (rt.exec(n.slice(s))?.[0] ?? "");
  return a
    ? Tt(e, r, o.slice(0, l.length + 1), n)
    : N(
        [
          St(
            t,
            c,
            l.flatMap((p) => p.rows)
          )
        ],
        n.slice(c.length),
        A
      );
}
function Tt(e, t, n, r) {
  let s = te(e, r),
    o = t.length + n.join("").length,
    l = r.length - s.rest.length < o,
    a = l ? Ee(n.at(-1) ?? "", 1) : [],
    c = Math.floor(Te / t.length),
    p = a.slice(0, c).findIndex((R) => !ne(e, t + R)),
    d = p >= 0 ? p : c < a.length ? c : 0,
    b = r.slice(o - a.slice(d).join("").length);
  return { ...s, declining: l ? { header: t, fromRow: b } : void 0 };
}
function bt(e, t) {
  let n = e.length,
    r = n < t.length;
  while (r) {
    let s = t.slice(n, M(t, n, A)),
      o = yt(e, s);
    ((n += o), (r = o === s.length && n < t.length));
  }
  return n;
}
function yt(e, t) {
  let n = (D.table.exec(e + t)?.[0] ?? e).slice(e.length),
    r = n.replace(st, "");
  return r !== "" && n.length > r.length ? r.length + 1 : r.length;
}
function ne(e, t) {
  let [n] = v(t) ? [] : e.lexer(t);
  return X(n) && n.raw.length === t.length ? n : void 0;
}
function Ee(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r = M(e, r, t)) n.push(e.slice(r, M(e, r, t)));
  return n;
}
function kt(e, t) {
  let n = Lt(e),
    r = e.findLastIndex((l, a) => a < n && Ie(l)) + 1,
    s = n,
    o = 0;
  for (let l = e.length - 1; l >= r && o <= Y; l--)
    ((o += Ft(
      e[l]?.raw ?? "",
      `
`
    )),
      (s = o <= Y ? Math.min(s, l) : s));
  return [r, s].find((l) => xe(e, l, t) > 0) ?? 0;
}
function Lt(e) {
  let t = e.findLastIndex((r) => r.raw.trim() !== "");
  return oe(e[t]) ? t : Math.max(e.findLastIndex(Re), 0);
}
var Fus = (e, t) => H(e) === t;
function Uus(e, t, n) {
  let r = H(e.slice(0, t)),
    s = H(e.slice(t)),
    o = n.endsWith(s);
  return n.startsWith(r) ? r.length : o ? n.length - s.length : 0;
}
function xe(e, t, n) {
  let r = H(e.slice(0, t)),
    s = H(e.slice(t)),
    o = r.length + s.length === n.length || n.startsWith(r),
    l = n.endsWith(s);
  return o ? r.length : l ? n.length - s.length : 0;
}
function M(e, t, n) {
  let r = t;
  for (let s = 0; s < n && r < e.length && r - t < n * me; s++) {
    let o = e.indexOf(
      `
`,
      r
    );
    r = o === -1 ? e.length : o + 1;
  }
  return r;
}
function v(e) {
  let t = 0,
    n = !1;
  while (!n && t < e.length) {
    let r = e.indexOf(
        `
`,
        t
      ),
      s = r === -1 ? e.length : r;
    ((n = s - t > Te), (t = s + 1));
  }
  return n;
}
function re({ rest: e, lines: t }) {
  return e.slice(0, M(e, D.fences.exec(e)?.[0].length ?? 0, t));
}
function Et(e) {
  return e.rest.slice(re(e).length);
}
function we(e) {
  return e.slice(
    0,
    e.indexOf(
      `
`,
      e.indexOf(`
`) + 1
    ) + 1
  );
}
function N(e, t, n) {
  return { taken: e, rest: t, lines: n };
}
function q(e) {
  return N([wt(e)], "", A);
}
function xt() {
  return { type: "paragraph", raw: "", text: "", tokens: [] };
}
function wt(e) {
  return { type: "paragraph", raw: e, text: e, tokens: [Se(e)] };
}
function Se(e) {
  return { type: "text", raw: e, text: e, escaped: !1 };
}
function St(e, t, n) {
  return { ...e, raw: t, rows: n };
}
function Rt(e, t, n) {
  return { ...e, raw: t, items: n };
}
function Re(e) {
  return e.type !== "space";
}
function Ie(e) {
  return (
    e.type === "space" ||
    e.raw.endsWith(`

`)
  );
}
function se(e) {
  return e?.type === "paragraph";
}
function oe(e) {
  return e?.type === "list";
}
function X(e) {
  return e?.type === "table";
}
function H(e) {
  return e.map((t) => t.raw).join("");
}
var It = /^[ \t>]+/gm,
  _t = /[ \t]+/g,
  At = /\n{3,}/g;
function Nt() {
  let e = new WeakMap(),
    t = (n) => (e.get(n) ?? 0) >= 100;
  return {
    isAtMaxNesting: t,
    lexLevel: (n, r) => {
      if (t(n)) return;
      let o = e.get(n) ?? 0;
      e.set(n, o + 1);
      try {
        return r();
      } finally {
        e.set(n, o);
      }
    }
  };
}
var F = Nt(),
  _e = (e) =>
    e
      .replace(It, (t) => t.replace(_t, " ").trimStart())
      .replace(
        At,
        `

`
      )
      .trimEnd();
var Ot = 6,
  Ct = 16,
  B = `
`,
  ie = (e) => ({ rows: e, isDone: !1 }),
  Oe = (e) => (e === "" || e.endsWith(B) ? e : e + B),
  Ae = (e) => (e === "" ? [] : [ie(e)]),
  Ce = (e) => yn(e).trim() !== "";
function Mt(e) {
  let t = he.dim(sXo);
  return ie(
    e
      .split(B)
      .map((n) => (Ce(n) ? `${t} ${he.italic(n)}` : n))
      .join(B)
  );
}
function Ne(e) {
  let t = `${sXo} `.repeat(Math.max(0, e)).trimEnd();
  return t === "" ? "" : `${he.dim(t)} `;
}
function Pt(e, t, n) {
  let r = Math.min(t + 1, Ct) - n.around,
    s = n.around === 0,
    o = Ne(s ? 1 : r),
    l = Ne(s ? r - 1 : 0),
    a = s ? he.italic : (c) => c;
  return {
    rows: Oe(e)
      .split(B)
      .map((c) => (Ce(c) ? o + a(l + c) : c))
      .join(B),
    isDone: !0
  };
}
function Dt(e) {
  let t = [],
    n = "";
  for (let r of e)
    if (r.isDone) (t.push(...Ae(Oe(n)), r), (n = ""));
    else n += r.rows;
  return [...t, ...Ae(n)];
}
function Me(e, t, n) {
  let s = t < Ot ? Mt : (o) => Pt(o, t, n);
  return Dt(
    e.flatMap((o) =>
      o.type === "blockquote" ? Me(o.tokens ?? [], t + 1, n) : [ie(n.draw(o, t + 1))]
    )
  ).map((o) => (o.isDone ? o : s(o.rows)));
}
var Pe = (e, t, n) =>
  Me(e, t, { around: t, draw: n })
    .map((r) => r.rows)
    .join("");
var ae = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/,
  Wt = new RegExp(`(?!${B4e(";:")})${ae.source}`, "g"),
  $mr = (e) =>
    e
      .replace(
        /\r\n?/g,
        `
`
      )
      .replace(Wt, "");
function Fmr(e) {
  let n = e.some((o) => ae.test(o.raw)) ? [e] : [];
  for (let o of n)
    for (let [l, a] of Object.entries(o)) {
      let c = typeof a === "string" && l !== "href";
      if (typeof a === "object" && a !== null) n.push(a);
      else if (c) Reflect.set(o, l, $mr(a));
    }
  let r = n.some((o) =>
      Object.entries(o).some(
        ([l, a]) => l !== "href" && typeof a === "string" && a.includes("\x1B")
      )
    ),
    s = n.filter(
      (o) => "type" in o && (o.type === "link" || o.type === "image" || o.type === "codespan")
    );
  for (let o of r ? s : []) Object.assign(o, { afterStyle: !0 });
  return e;
}
var m = `
`,
  Fe = new RegExp(`^[${p7n}]+`, "u"),
  $t = new RegExp(`(?:^|[^${p7n}])([${p7n}]*)$`, "u");
function ce(e) {
  let t = $t.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var Ge = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g,
  Ht = /\x9d|\x1b(?!\[)/,
  Bt = /\x9d/g,
  jt = /\x1b(?!\[)/g,
  j = (e) =>
    Array.from(e)
      .filter((t) => {
        let n = t.codePointAt(0) ?? 0;
        return n !== 10697 && !zx(n);
      })
      .join(""),
  Qe = "\x1B[28m\x1B[39m\x1B[49m",
  z = (e) => ("afterStyle" in e && e.afterStyle === !0 ? Qe : ""),
  De = (e, t) => `${t}${j(e)}`,
  pe = (e, t, n = "") => `${t} (${j(e)}${n})`,
  fe = (e) => pe(e, Qe);
function We(e) {
  if (!e.includes("\x1B]8;")) return e;
  let t = [],
    n = null;
  for (let a of e.matchAll(Ge)) {
    let c = a.index + a[0].length;
    if (n !== null)
      (t.push({ href: n.href, openEnd: n.openEnd, closeStart: a.index, closeEnd: c }), (n = null));
    let p = a[1] ?? "";
    if (p !== "") n = { href: p, openEnd: c };
  }
  if (n !== null)
    t.push({ href: n.href, openEnd: n.openEnd, closeStart: e.length, closeEnd: e.length });
  let r = "",
    s = 0,
    o = 0,
    l = !1;
  for (let a of t) {
    let c = e.lastIndexOf("\x1B]8;", a.openEnd - 1),
      p = ce(yn(e.slice(0, c))),
      d = o;
    o = a.closeStart;
    let b = r5r(a.href),
      R = l;
    if (((l = b), !b)) {
      let f = yn(e.slice(d, c)),
        h = f.includes(Nu),
        T = R && ce(f) === "";
      if (!h && !p.endsWith(Nu) && !T) continue;
    } else if (!p.endsWith(Nu)) continue;
    if (b) {
      let f = e.slice(a.openEnd, a.closeStart),
        h = yn(f).startsWith(`${Nu} `) ? f.indexOf(`${Nu} `) : -1;
      if (h !== -1)
        ((r += e.slice(s, a.openEnd)),
          (r += f.slice(0, h)),
          (r += f.slice(h + Nu.length + 1)),
          (s = a.closeStart));
      else {
        let T = e.slice(s, c),
          k = `${Nu} `;
        if (T.endsWith(k)) {
          let g = T.slice(0, -k.length);
          if (ce(yn(r + g)).endsWith(Nu)) ((r += g), (s = c));
        }
      }
      continue;
    }
    let y = fe(a.href),
      u = a.closeEnd;
    if (e.startsWith(y, u)) continue;
    ((r += e.slice(s, u) + y), (s = u));
  }
  return r + e.slice(s);
}
function d8t(e, t) {
  let n = t();
  if (!n.includes("\x1B]8;")) return n;
  let r = We(n);
  if (!n.includes(Nu) && r === n) return n;
  let s = Ke(e ?? []);
  if (s.length === 0) return r;
  try {
    for (let o of s) Object.assign(o, { defanged: !0 });
    return We(t());
  } finally {
    for (let o of s) Reflect.deleteProperty(o, "defanged");
  }
}
function Ke(e) {
  return e.flatMap((t) => {
    if (t.type === "codespan")
      return !("defanged" in t && t.defanged === !0) && Ve.test(t.text) ? [t] : [];
    return "tokens" in t && Array.isArray(t.tokens) ? Ke(t.tokens) : [];
  });
}
class qe {
  #e = !1;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = !0;
  }
  reset() {
    ((this.#e = !1), eh.setOptions(eh.getDefaults()));
  }
}
var $e = ve(new qe(), (e) => e.reset());
class Xe {
  #e = new Ac({ max: 200, ttl: 30000 });
  get(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
}
var pr = new W(() => new Xe()),
  He = uGe.prototype.table,
  Ut = uGe.prototype.blockquote,
  vt = uGe.prototype.list,
  Gt = uGe.prototype.emStrong,
  ze = {
    tokenizer: {
      del(e) {
        let t = /^~~(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))~~(?=[^~]|$)/.exec(e),
          n = t?.[1];
        if (!t || n === void 0) return;
        return { type: "del", raw: t[0], text: n, tokens: this.lexer.inlineTokens(n) };
      },
      blockquote(e) {
        return this.rules.other.blockquoteStart.test(e)
          ? F.lexLevel(this.lexer, () => Ut.call(this, e))
          : void 0;
      },
      list(e) {
        return this.rules.block.list.test(e)
          ? F.lexLevel(this.lexer, () => vt.call(this, e))
          : void 0;
      },
      emStrong(e, t, n) {
        return this.rules.inline.emStrongLDelim.test(e)
          ? F.lexLevel(this.lexer, () => Gt.call(this, e, t, n))
          : void 0;
      },
      paragraph(e) {
        let t = Be(this, e);
        return t ? { type: "paragraph", ...t } : !1;
      },
      text(e) {
        let t = Be(this, e);
        return t ? { type: "text", ...t } : !1;
      },
      def() {
        return;
      },
      lheading(e) {
        return (ee.isHeld() ? J.test(e) : ye.test(e)) ? !1 : void 0;
      },
      table(e) {
        let t = this.rules.block.table.exec(e);
        if (!t) return;
        let n = t[0],
          r = n
            .split(
              `
`
            )
            .map(Yt),
          s = r.join(`
`),
          o = s === n ? He.call(this, e) : He.call(this, s + e.slice(n.length));
        if (o) {
          if (Jt(r, o.header.length)) return;
          if (s !== n) o.raw = n;
        }
        return o;
      }
    }
  };
function Be(e, t) {
  if (
    !F.isAtMaxNesting(e.lexer) ||
    !(e.rules.block.list.test(t) || e.rules.other.blockquoteStart.test(t))
  )
    return;
  let n = _e(t);
  return { raw: t, text: n, tokens: e.lexer.inline(n) };
}
function $xt() {
  if ($e.configured) return;
  ($e.set(), eh.use(ze));
}
var Bus = new RDe(ze, {
  tokenizer: {
    emStrong(e) {
      return e.startsWith("_") ? void 0 : !1;
    },
    table() {
      return;
    },
    blockquote() {
      return;
    },
    hr() {
      return;
    },
    lheading() {
      return;
    },
    link() {
      return;
    },
    autolink() {
      return;
    },
    url() {
      return;
    },
    escape() {
      return;
    },
    br() {
      return;
    }
  }
});
function c8t(e, t, n = null) {
  $xt();
  let { tokens: r, isWindowed: s } = vlt(eh, q3(e)),
    o = !s && uw();
  return Fmr(r)
    .map((l) =>
      dN(l, t, {
        listDepth: 0,
        orderedListNumber: null,
        parent: null,
        highlight: n,
        linkCap: o,
        windowed: s
      })
    )
    .join("")
    .trim();
}
var Qt = /\s/,
  Kt = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g,
  nno = 32;
function zPn(e) {
  if (
    !e.endsWith(`
`)
  )
    return !1;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (
      n ===
      `
`
    )
      return !0;
    if (!Qt.test(n)) return !1;
  }
  return !1;
}
function dN(e, t, n) {
  let r = qt(e, t, n);
  return n.windowed && Ht.test(r) ? r.replace(Ge, "").replace(Bt, "").replace(jt, "") : r;
}
function qt(e, t, n) {
  let {
      listDepth: r = 0,
      orderedListNumber: s = null,
      parent: o = null,
      highlight: l = null,
      glueProse: a = !1,
      screenReader: c = !1,
      listIndent: p = "",
      promptMode: d = !1,
      windowed: b,
      quotesAround: R = 0
    } = n,
    y = !b && (n.linkCap ?? uw());
  switch (e.type) {
    case "blockquote":
      return Pe(e.tokens ?? [], R, (u, f) =>
        dN(u, t, {
          listDepth: 0,
          orderedListNumber: null,
          parent: null,
          highlight: l,
          glueProse: !1,
          linkCap: y,
          windowed: b,
          screenReader: c,
          promptMode: d,
          quotesAround: f
        })
      );
    case "code": {
      let u = e.lang ?? "";
      if (!u && e.codeBlockStyle !== "indented")
        return e.text.replace(/\S(?:.*\S)?/g, Qn("permission", t)) + m;
      let f = u.match(/^[\w.+#-]+/)?.[0] ?? "",
        h = l && u && l.supportsLanguage(u) ? u : l && f && l.supportsLanguage(f) ? f : "plaintext",
        T = u && !l?.supportsLanguage(u) ? he.dim(u) + m : "";
      if (!l) return T + e.text + m;
      return T + l.highlight(e.text, { language: h }) + m;
    }
    case "codespan": {
      let u = Qn("permission", t)(e.text),
        f =
          d ||
          o?.type === "link" ||
          ("defanged" in e && e.defanged === !0) ||
          ("afterStyle" in e && e.afterStyle === !0);
      if (y && !f && Ve.test(e.text) && URL.canParse(e.text))
        return tv(e.text, u, { themeName: t, supportsHyperlinks: !0 });
      return u;
    }
    case "em":
      return he.italic(
        (e.tokens ?? [])
          .map((u) =>
            dN(u, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: o,
              highlight: l,
              glueProse: a,
              linkCap: y,
              windowed: b,
              promptMode: d
            })
          )
          .join("")
      );
    case "strong":
      return he.bold(
        (e.tokens ?? [])
          .map((u) =>
            dN(u, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: o,
              highlight: l,
              glueProse: a,
              linkCap: y,
              windowed: b,
              promptMode: d
            })
          )
          .join("")
      );
    case "del": {
      let u = (e.tokens ?? [])
        .map((f) =>
          dN(f, t, {
            listDepth: 0,
            orderedListNumber: null,
            parent: o,
            highlight: l,
            glueProse: a,
            linkCap: y,
            windowed: b,
            promptMode: d
          })
        )
        .join("");
      return GPn() && he.level > 0 ? he.strikethrough(u) : `~~${u}~~`;
    }
    case "heading": {
      let u = () =>
        (e.tokens ?? [])
          .map((h) =>
            dN(h, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: null,
              highlight: l,
              glueProse: !1,
              linkCap: y,
              windowed: b,
              promptMode: d
            })
          )
          .join("");
      return (e.depth === 1 ? he.bold.italic.underline : he.bold)(d8t(e.tokens, u)) + m + m;
    }
    case "hr":
      return "---" + m;
    case "image": {
      if (!e.text && !e.title) return De(e.href, z(e));
      let u = e.title ? ` "${e.title}"` : "",
        f = pe(e.href, z(e), u);
      return e.text ? `${e.text}${f}` : f.replace(" (", "(");
    }
    case "link": {
      let u = e.title ? ` ("${e.title}")` : "";
      if (/^mailto:/i.test(e.href)) {
        let _ = e.href.replace(/^mailto:/i, ""),
          Q = z(e);
        return (e.text && e.text !== j(_) ? `${e.text}${pe(_, Q)}` : De(_, Q)) + u;
      }
      let f = y ? Vt(e.href) : null,
        h = "defanged" in e && e.defanged === !0,
        T = f !== null && !h,
        k = z(e),
        g = T ? f : j(f ?? e.href),
        L = (e.tokens ?? [])
          .map((_) =>
            dN(_, t, {
              listDepth: 0,
              orderedListNumber: null,
              parent: e,
              highlight: l,
              glueProse: !1,
              linkCap: y,
              windowed: b,
              promptMode: d
            })
          )
          .join(""),
        E = yn(L),
        w = r5r(e.href),
        S = Boolean(E && E !== e.href),
        I = (_) => _.replace(Fe, "").startsWith(Nu),
        P = I(E) || I(e.text ?? ""),
        x = E.includes(Nu) || (e.text ?? "").includes(Nu);
      if (w && S) {
        let _ = Array.from(E)
            .filter((Je) => {
              let K = Je.codePointAt(0) ?? 0;
              if (K === 8205 || (K >= 65024 && K <= 65039)) return !0;
              return !zx(K);
            })
            .join(""),
          Q = P ? _ : oXo(_);
        return (
          tv(g, Q, { themeName: t, supportsHyperlinks: T, shownUrlStart: k }) +
          (T && e.title ? fe(g) : "") +
          u
        );
      }
      let G = !S || Udo(g, E),
        O = T && G ? k : "",
        Z = O === "" ? L : j(E),
        U = S ? Z : T ? j(e.href) : g,
        C = tv(g, U, { themeName: t, supportsHyperlinks: T, shownUrlStart: k }),
        V = (!w && x) || Boolean(e.title);
      if (T && S && V) return O + C + fe(g) + u;
      return O + (w ? oXo(C) : C) + u;
    }
    case "list":
      return e.items
        .map((u, f) =>
          dN(u, t, {
            listDepth: r,
            orderedListNumber: e.ordered ? e.start + f : null,
            parent: e,
            highlight: l,
            glueProse: !1,
            linkCap: y,
            windowed: b,
            screenReader: c,
            listIndent: p,
            promptMode: d,
            quotesAround: R
          })
        )
        .join("");
    case "list_item": {
      let f =
          (d && s !== null ? /^ *(\d+[.)])/.exec(e.raw)?.[1] : void 0) ??
          ono(r, s !== null && o?.type === "list" ? { number: s, ...rno(o) } : null),
        h = p + Ji(" ", le(f) + 1),
        T = Ji(" ", Math.min(h.length, nno)),
        k = e.tokens ? Umr(e) : e,
        g = k.tokens ?? [],
        L = g.findIndex((x) => x.type !== "space"),
        E = L === -1 ? [] : g.slice(L),
        w = E[0],
        S =
          w !== void 0 &&
          (w.type === "code" ||
            w.type === "blockquote" ||
            w.type === "hr" ||
            w.type === "table" ||
            w.type === "list"),
        I = !S,
        P = E.map((x) => {
          let G = x.type === "blockquote" ? Ye(x) : void 0,
            O = dN(G ?? x, t, {
              listDepth: r + 1,
              orderedListNumber: s,
              parent: k,
              highlight: l,
              glueProse: !1,
              linkCap: y,
              windowed: b,
              screenReader: c,
              listIndent: T,
              promptMode: d,
              quotesAround: R
            });
          if (x.type === "code" && O === m) return "";
          if (
            x.type === "code" ||
            x.type === "blockquote" ||
            x.type === "hr" ||
            x.type === "table" ||
            x.type === "list" ||
            x.type === "space"
          )
            return (x.type === "blockquote" && G === void 0) ||
              x.type === "hr" ||
              x.type === "table"
              ? O.replace(/^\n+/, "")
              : O;
          let Z = I ? `${p}${f} ` : h;
          I = !1;
          let U = O.split(m)
            .map((C, V) => (V === 0 ? Z + C : C === "" ? C : h + C))
            .join(m);
          return x.type === "html" && !U.endsWith(m) ? U + m : U;
        }).join("");
      return I || S ? `${p}${f}${m}${P}` : P;
    }
    case "paragraph":
      return (
        d8t(e.tokens, () =>
          (e.tokens ?? [])
            .map((u) =>
              dN(u, t, {
                listDepth: 0,
                orderedListNumber: null,
                parent: null,
                highlight: l,
                glueProse: !1,
                linkCap: y,
                windowed: b,
                promptMode: d
              })
            )
            .join("")
        ) + m
      );
    case "space":
      return m;
    case "br":
      return m;
    case "text": {
      if (o?.type === "link") return e.text;
      let u = !d && e.escaped === !1 ? e.text.replace(Kt, " ") : e.text;
      if (o?.type === "list_item") {
        let h = e.tokens
            ? d8t(e.tokens, () =>
                (e.tokens ?? [])
                  .map((g) =>
                    dN(g, t, {
                      listDepth: r,
                      orderedListNumber: s,
                      parent: e,
                      highlight: l,
                      glueProse: !0,
                      linkCap: y,
                      windowed: b,
                      promptMode: d
                    })
                  )
                  .join("")
              )
            : Ue(je(u, t, y, o, d)),
          T = o.tokens?.[0] === e;
        return `${o.task && T ? `[${o.checked ? "x" : " "}] ` : ""}${h}${m}`;
      }
      let f = je(u, t, y, o, d);
      return a ? Ue(f) : f;
    }
    case "table": {
      let f = function (g) {
          return d8t(
            g,
            () =>
              g
                ?.map((L) =>
                  dN(L, t, {
                    listDepth: 0,
                    orderedListNumber: null,
                    parent: null,
                    highlight: l,
                    glueProse: !1,
                    linkCap: y,
                    windowed: b,
                    promptMode: d
                  })
                )
                .join("") ?? ""
          );
        },
        h = function (g) {
          return yn(f(g));
        },
        u = e;
      if (c)
        return (
          sno(
            u.header.map((g) => h(g.tokens)),
            u.rows.map((g) => g.map((L) => h(L.tokens)))
          ) +
          m +
          m
        );
      let T = u.header.map((g, L) => {
          let E = le(h(g.tokens));
          for (let w of u.rows) {
            let S = le(h(w[L]?.tokens));
            E = Math.max(E, S);
          }
          return Math.max(E, 3);
        }),
        k = "| ";
      return (
        u.header.forEach((g, L) => {
          let E = f(g.tokens),
            w = h(g.tokens),
            S = T[L],
            I = u.align?.[L];
          k += Bmr(E, le(w), S, I) + " | ";
        }),
        (k = k.trimEnd() + m),
        (k += "|"),
        T.forEach((g) => {
          let L = "-".repeat(g + 2);
          k += L + "|";
        }),
        (k += m),
        u.rows.forEach((g) => {
          ((k += "| "),
            g.forEach((L, E) => {
              let w = f(L.tokens),
                S = h(L.tokens),
                I = T[E],
                P = u.align?.[E];
              k += Bmr(w, le(S), I, P) + " | ";
            }),
            (k = k.trimEnd() + m));
        }),
        k + m
      );
    }
    case "escape":
      return e.text;
    case "html":
      return e.text;
    case "def":
      return "";
  }
  return e.raw;
}
var Xt = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g,
  zt = new Set([
    "gitlab.com",
    "bitbucket.org",
    "codeberg.org",
    "gitea.com",
    "git.sr.ht",
    "dev.azure.com"
  ]),
  Ze = /^[a-z][a-z0-9+.-]*:/i,
  Ve = /^https?:\/\/[\w\-.~:/?#[\]@!$&'()*+,;=%]+$/i;
function Zt(e, t) {
  let n = Ze.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function KPn(e, t) {
  for (let n of e) {
    if (n.type === "codespan" || (n.type === "link" && Zt(n.href, t)))
      Object.assign(n, { defanged: !0 });
    if (n.type === "table") {
      let r = n;
      for (let s of [...r.header, ...r.rows.flat()]) KPn(s.tokens, t);
    } else if (n.type === "list") for (let r of n.items) KPn(r.tokens, t);
    else if ("tokens" in n && Array.isArray(n.tokens)) KPn(n.tokens, t);
  }
}
function Vt(e) {
  let t = Sqn(e);
  if (t === null || Pq.test(t) || Fe.test(t) || t !== t.trimEnd()) return null;
  if (Ze.test(t)) return t;
  let n = FGo(t),
    r = n.some((s) => /^file:/i.test(NGo(s)));
  return kGr(t, n) || r ? null : t;
}
function Yt(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [],
    n = [];
  for (let c = 0; c < e.length;) {
    if (e[c] !== "`") {
      c++;
      continue;
    }
    let p = 0;
    while (e[c + p] === "`") p++;
    (t.push(c), n.push(p), (c += p));
  }
  let r = Array(t.length).fill(-1),
    s = new Map();
  for (let c = t.length - 1; c >= 0; c--) {
    let p = s.get(n[c]);
    if (p !== void 0) r[c] = p;
    s.set(n[c], c);
  }
  let o = "",
    l = 0,
    a = 0;
  while (l < e.length) {
    if (e[l] !== "`") {
      o += e[l++];
      continue;
    }
    let c = n[a],
      p = e.slice(l, l + c),
      d = r[a];
    if (d === -1) {
      ((o += p), (l += c), a++);
      continue;
    }
    let b = t[d];
    o += p;
    let R = 0;
    for (let y = l + c; y < b; y++) {
      let u = e[y];
      if (u === "\\") {
        (R++, (o += u));
        continue;
      }
      if (u === "|") o += R % 2 === 0 ? "\\|" : "|";
      else o += u;
      R = 0;
    }
    ((o += p), (l = b + c), (a = d + 1));
  }
  return o;
}
function Jt(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = en(e[n]);
    for (let s = t; s < r.length; s++) if (r[s].trim()) return !0;
  }
  return !1;
}
function en(e) {
  let n = e
    .replace(/\|/g, (r, s, o) => {
      let l = !1,
        a = s;
      while (--a >= 0 && o[a] === "\\") l = !l;
      return l ? "|" : " |";
    })
    .split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function je(e, t, n, r, s) {
  if (s) return e;
  return tn(nn(e, t, n), t, n, r);
}
function tn(e, t, n = uw(), r) {
  return e;
}
function nn(e, t, n = uw()) {
  if (!n) return e;
  if (!e.includes("#")) return e;
  let r = n8r(),
    s = r !== null && TM(r) === "gitlab";
  if (!s && r !== null && zt.has(Pst(r))) return e;
  let o = r ?? vr,
    l = s ? "/-/issues/" : "/issues/";
  return e.replace(
    Xt,
    (a, c, p, d) =>
      c + tv(`https://${o}/${p}${l}${d}`, `${p}#${d}`, { themeName: t, supportsHyperlinks: n })
  );
}
function rn(e) {
  let t = "";
  while (e > 0) (e--, (t = String.fromCharCode(97 + (e % 26)) + t), (e = Math.floor(e / 26)));
  return t;
}
var sn = [
  [1000, "m"],
  [900, "cm"],
  [500, "d"],
  [400, "cd"],
  [100, "c"],
  [90, "xc"],
  [50, "l"],
  [40, "xl"],
  [10, "x"],
  [9, "ix"],
  [5, "v"],
  [4, "iv"],
  [1, "i"]
];
function on(e) {
  let t = "";
  for (let [n, r] of sn) while (e >= n) ((t += r), (e -= n));
  return t;
}
function Ue(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function rno(e) {
  let t = e.start === "" ? 1 : e.start;
  return { first: t, last: t + e.items.length - 1 };
}
function Umr(e) {
  let t = e.tokens.map((n) => {
    if (n.type !== "list" || !n.ordered) return n;
    let r = [];
    for (let o of n.items) {
      let l = /^ *(\d{1,9}[.)])/.exec(o.raw)?.[1];
      if (o.tokens.length > 0 || l === void 0) return n;
      r.push(l);
    }
    let s = r.join(`
`);
    return { type: "text", raw: s, text: s };
  });
  return t.every((n, r) => n === e.tokens[r]) ? e : { ...e, tokens: t };
}
function Ye(e) {
  let t = e.tokens.findIndex(
      (s) => s.type !== "space" && !(s.type === "code" && s.text === "" && !s.lang)
    ),
    n = e.tokens[t],
    r = n?.type === "blockquote" ? Ye(n) : n?.type === "code" && n.text !== "" ? n : void 0;
  return r && { ...e, tokens: [r, ...e.tokens.slice(t + 1)] };
}
function ono(e, t) {
  return t === null ? "-" : `${ln(e + 1, t)}.`;
}
function ln(e, { number: t, first: n, last: r }) {
  switch (e) {
    case 2:
      return n >= 1 ? rn(t) : t.toString();
    case 3:
      return n >= 1 && r <= 3999 ? on(t) : t.toString();
    default:
      return t.toString();
  }
}
function Bmr(e, t, n, r) {
  let s = Math.max(0, n - t);
  if (r === "center") {
    let o = Math.floor(s / 2);
    return " ".repeat(o) + e + Ji(" ", s - o);
  }
  if (r === "right") return " ".repeat(s) + e;
  return e + " ".repeat(s);
}
function sno(e, t) {
  function n(l) {
    return l.replace(/\s+/g, " ").trim();
  }
  function r(l) {
    return /[.!?\u2026]["')\]]*$/.test(l) ? l : `${l}.`;
  }
  function s(l) {
    return l
      .map((a, c) => {
        let p = n(e[c] ?? ""),
          d = n(a);
        if (!p && !d) return null;
        return r(p ? `${p}: ${d}` : d);
      })
      .filter((a) => a !== null)
      .join(" ");
  }
  return (t.length > 0 ? t.map(s) : [e.map(n).filter(Boolean).map(r).join(" ")])
    .filter((l) => l.length > 0)
    .join(m);
}
export {
  GPn,
  $us,
  Nmr,
  vlt,
  Fus,
  Uus,
  $mr,
  Fmr,
  d8t,
  $xt,
  Bus,
  c8t,
  nno,
  zPn,
  dN,
  KPn,
  rno,
  Umr,
  ono,
  Bmr,
  sno
};

//# sourceMappingURL=chunk-0bebdad1.js.map
