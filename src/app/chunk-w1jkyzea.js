// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mh, qZ, nl } from "./chunk-rhk37je5.js";
import { lTe, t_, gm } from "./chunk-f451a1hs.js";
import { yoe } from "./chunk-62gnvq5y.js";
function e9t() {
  return {
    bold: !1,
    dim: !1,
    italic: !1,
    underline: "none",
    blink: !1,
    inverse: !1,
    hidden: !1,
    strikethrough: !1,
    overline: !1,
    fg: { type: "default" },
    bg: { type: "default" },
    underlineColor: { type: "default" }
  };
}
var yfs = nl(0, "m"),
  BIn = nl(1, "m"),
  jIn = nl(2, "m"),
  _fs = nl(4, "m"),
  bfs = nl(7, "m"),
  Sfs = nl(33, "m"),
  Ygr = nl(22, "m"),
  WIn = nl(24, "m"),
  t9t = nl(27, "m"),
  wfs = nl(29, "m"),
  GIn = nl(39, "m"),
  Xgr = nl(49, "m"),
  vfs = nl(55, "m"),
  h = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite"
  ],
  q = ["none", "single", "double", "curly", "dotted", "dashed"];
function _(e) {
  if (e === "") return [{ value: 0, subparams: [], colon: !1 }];
  let n = [],
    o = { value: null, subparams: [], colon: !1 },
    t = "",
    i = !1;
  for (let s = 0; s <= e.length; s++) {
    let r = e[s];
    if (r === ";" || r === void 0) {
      let u = t === "" ? null : parseInt(t, 10);
      if (i) {
        if (u !== null) o.subparams.push(u);
      } else o.value = u;
      (n.push(o), (o = { value: null, subparams: [], colon: !1 }), (t = ""), (i = !1));
    } else if (r === ":") {
      let u = t === "" ? null : parseInt(t, 10);
      if (!i) ((o.value = u), (o.colon = !0), (i = !0));
      else if (u !== null) o.subparams.push(u);
      t = "";
    } else if (r >= "0" && r <= "9") t += r;
  }
  return n;
}
function A(e, n) {
  let o = e[n];
  if (!o) return null;
  if (o.colon && o.subparams.length >= 1) {
    if (o.subparams[0] === 5 && o.subparams.length >= 2) return { index: o.subparams[1] };
    if (o.subparams[0] === 2 && o.subparams.length >= 4) {
      let i = o.subparams.length >= 5 ? 1 : 0;
      return { r: o.subparams[1 + i], g: o.subparams[2 + i], b: o.subparams[3 + i] };
    }
  }
  let t = e[n + 1];
  if (!t) return null;
  if (t.value === 5 && e[n + 2]?.value !== null && e[n + 2]?.value !== void 0)
    return { index: e[n + 2].value };
  if (t.value === 2) {
    let i = e[n + 2]?.value,
      s = e[n + 3]?.value,
      r = e[n + 4]?.value;
    if (i !== null && i !== void 0 && s !== null && s !== void 0 && r !== null && r !== void 0)
      return { r: i, g: s, b: r };
  }
  return null;
}
function Efs(e, n) {
  let o = _(e),
    t = { ...n },
    i = 0;
  while (i < o.length) {
    let s = o[i],
      r = s.value ?? 0;
    if (r === 0) {
      ((t = e9t()), i++);
      continue;
    }
    if (r === 1) {
      ((t.bold = !0), i++);
      continue;
    }
    if (r === 2) {
      ((t.dim = !0), i++);
      continue;
    }
    if (r === 3) {
      ((t.italic = !0), i++);
      continue;
    }
    if (r === 4) {
      ((t.underline = s.colon ? (q[s.subparams[0]] ?? "single") : "single"), i++);
      continue;
    }
    if (r === 5 || r === 6) {
      ((t.blink = !0), i++);
      continue;
    }
    if (r === 7) {
      ((t.inverse = !0), i++);
      continue;
    }
    if (r === 8) {
      ((t.hidden = !0), i++);
      continue;
    }
    if (r === 9) {
      ((t.strikethrough = !0), i++);
      continue;
    }
    if (r === 21) {
      ((t.underline = "double"), i++);
      continue;
    }
    if (r === 22) {
      ((t.bold = !1), (t.dim = !1), i++);
      continue;
    }
    if (r === 23) {
      ((t.italic = !1), i++);
      continue;
    }
    if (r === 24) {
      ((t.underline = "none"), i++);
      continue;
    }
    if (r === 25) {
      ((t.blink = !1), i++);
      continue;
    }
    if (r === 27) {
      ((t.inverse = !1), i++);
      continue;
    }
    if (r === 28) {
      ((t.hidden = !1), i++);
      continue;
    }
    if (r === 29) {
      ((t.strikethrough = !1), i++);
      continue;
    }
    if (r === 53) {
      ((t.overline = !0), i++);
      continue;
    }
    if (r === 55) {
      ((t.overline = !1), i++);
      continue;
    }
    if (r >= 30 && r <= 37) {
      ((t.fg = { type: "named", name: h[r - 30] }), i++);
      continue;
    }
    if (r === 39) {
      ((t.fg = { type: "default" }), i++);
      continue;
    }
    if (r >= 40 && r <= 47) {
      ((t.bg = { type: "named", name: h[r - 40] }), i++);
      continue;
    }
    if (r === 49) {
      ((t.bg = { type: "default" }), i++);
      continue;
    }
    if (r >= 90 && r <= 97) {
      ((t.fg = { type: "named", name: h[r - 90 + 8] }), i++);
      continue;
    }
    if (r >= 100 && r <= 107) {
      ((t.bg = { type: "named", name: h[r - 100 + 8] }), i++);
      continue;
    }
    if (r === 38 || r === 48 || r === 58) {
      let u = A(o, i);
      if (u) {
        let p = "index" in u ? { type: "indexed", index: u.index } : { type: "rgb", ...u };
        if (r === 38) t.fg = p;
        else if (r === 48) t.bg = p;
        else t.underlineColor = p;
      }
      let m = o[i + 1]?.value;
      i += s.colon ? 1 : m === 5 ? 3 : m === 2 ? 5 : 1;
      continue;
    }
    if (r === 59) {
      ((t.underlineColor = { type: "default" }), i++);
      continue;
    }
    i++;
  }
  return t;
}
var w = mh + String.fromCharCode(qZ.APC),
  P = `${w}G`,
  f = 4096,
  G = 1109742,
  K = String.fromCodePoint(G),
  hPt = 256,
  b = 4294967295,
  x = 1e4,
  y = { mask: 255, redShift: 16, greenShift: 8 },
  N = (f / 4) * 3;
function a(e, n) {
  if (!Number.isInteger(e) || e < 1 || e > n)
    throw TypeError(
      "kitty graphics: an id, cell count or pixel size must be a positive integer within its range"
    );
}
function L(e) {
  if (typeof e !== "string" || !/^[A-Za-z0-9+/]*={0,2}$/.test(e))
    throw TypeError("kitty graphics: payload must be standard base64 (A-Z a-z 0-9 + / =)");
}
function S(e) {
  if (!(
    typeof e === "string" &&
    e !== "" &&
    !e.includes("\x00") &&
    Buffer.byteLength(e, "utf8") <= N
  ))
    throw TypeError(
      "kitty graphics: a file path or shared-memory name must be a non-empty string of at most 3072 bytes, no NUL"
    );
}
var k = (e) => Buffer.from(e, "utf8").toString("base64");
function D(e) {
  a(e, b);
  let n = e < hPt,
    o = (e >>> y.redShift) & y.mask,
    t = (e >>> y.greenShift) & y.mask,
    i = e & y.mask;
  return nl(n ? `38;5;${e}m` : `38;2;${o};${t};${i}m`);
}
var R = (e) => yoe.slice(0, e).map((n) => String.fromCodePoint(n));
function kfs(e, n, o) {
  (a(n, yoe.length), a(o, yoe.length));
  let t = D(e),
    i = R(n);
  return R(o).map((s) => t + i.map((r) => K + s + r).join("") + GIn).join(`
`);
}
function c(e, n) {
  let o = n === void 0 ? "" : `;${n}`;
  return `${P}${e}${o}${lTe}`;
}
var O = { png: "f=100", rgba: "f=32", rgb: "f=24" },
  Y = { file: "t=f", shm: "t=s" };
function Tfs(e) {
  let { id: n, source: o, columns: t, rows: i } = e;
  if ((a(n, b), a(t, yoe.length), a(i, yoe.length), o.format !== "png"))
    (a(o.width, x), a(o.height, x));
  let r = o.format !== "png" ? `,s=${o.width},v=${o.height}` : "",
    u = `${O[o.format]}${r}`,
    m = `i=${n},c=${t},r=${i}`;
  if ("medium" in o) {
    S(o.name);
    let l = Y[o.medium];
    return c(`a=T,U=1,q=1,${u},${l},${m}`, k(o.name));
  }
  L(o.base64);
  let p = `a=T,U=1,q=2,${u},${m}`,
    { base64: d } = o;
  if (d.length <= f) return c(p, d);
  let g = [];
  for (let l = 0; l < d.length; l += f) {
    let T = l + f >= d.length ? "m=0" : "m=1",
      C = l === 0 ? `${p},${T}` : `${T},q=2`;
    g.push(c(C, d.slice(l, l + f)));
  }
  return g.join("");
}
function Afs(e) {
  return (a(e, b), c(`a=d,d=I,i=${e},q=2`));
}
function v(e) {
  return (a(e, b), c(`i=${e},s=1,v=1,a=q,t=d,f=24`, "AAAA"));
}
function Cfs(e, n) {
  return (a(e, b), S(n), c(`i=${e},s=1,v=1,a=q,t=f,f=32`, k(n)));
}
function _ro(e) {
  return { request: nl(`?${e}$p`), match: (n) => n.type === "decrpm" && n.mode === e };
}
function Rfs() {
  return { request: nl("?u"), match: (e) => e.type === "kittyKeyboard" };
}
function xfs() {
  return { request: nl("?6n"), match: (e) => e.type === "cursorPosition" };
}
function Pfs(e) {
  return { request: t_(e, "?"), match: (n) => n.type === "osc" && n.code === e };
}
function Ifs() {
  return {
    request: t_(gm.PROGRAM_STATUS, "?"),
    match: (e) => e.type === "osc" && e.code === gm.PROGRAM_STATUS && e.data.startsWith("?")
  };
}
function Ofs() {
  return { request: nl(">0q"), match: (e) => e.type === "xtversion" };
}
function bro() {
  return { request: nl("16t"), match: (e) => e.type === "cellSize" };
}
var E = 31;
function Mfs() {
  return { request: v(E), match: (e) => e.type === "kittyGraphics" && e.id === E };
}
var I = nl("c");
class Sro {
  stdout;
  queue = [];
  isInputAttached = !1;
  themeChangeSubscribers = new Set();
  constructor(e) {
    this.stdout = e;
  }
  setInputAttached(e) {
    if (((this.isInputAttached = e), !e)) return;
    for (let n of this.queue) if (n.kind !== "barrier" && !n.written) this.write(n);
  }
  owed() {
    let e = 0;
    for (let n of this.queue) if (n.kind === "barrier" || (n.kind === "sentinel" && n.written)) e++;
    return e;
  }
  subscribeThemeChange(e) {
    return (
      this.themeChangeSubscribers.add(e),
      () => {
        this.themeChangeSubscribers.delete(e);
      }
    );
  }
  send(e) {
    return new Promise((n) => {
      this.enqueue({
        kind: "query",
        request: e.request,
        written: !1,
        match: e.match,
        resolve: (o) => n(o)
      });
    });
  }
  flush() {
    return new Promise((e) => {
      this.enqueue({ kind: "sentinel", request: I, written: !1, resolve: e });
    });
  }
  cancel(e) {
    let n = this.queue.findIndex((t) => t.kind === "query" && t.match === e.match);
    if (n === -1) return;
    let [o] = this.queue.splice(n, 1);
    if (o?.kind === "query") o.resolve(void 0);
  }
  resync({ probe: e }) {
    for (let n of this.queue.splice(0))
      if (n.kind === "query") n.resolve(void 0);
      else if (n.kind === "sentinel") n.resolve(!1);
    if (e && this.isInputAttached) (this.queue.push({ kind: "barrier" }), this.stdout.write(I));
  }
  onResponse(e) {
    if (e.type === "themeNotify") {
      for (let t of this.themeChangeSubscribers) t(e.dark);
      return !0;
    }
    if (this.queue[0]?.kind === "barrier") {
      if (e.type === "da1") this.queue.shift();
      return !0;
    }
    let n = this.queue.findIndex((t) => t.kind === "query" && t.match(e));
    if (n !== -1) {
      let [t] = this.queue.splice(n, 1);
      if (t?.kind === "query") t.resolve(e);
      return !0;
    }
    if (e.type !== "da1") return !1;
    let o = this.queue.findIndex((t) => t.kind === "sentinel");
    if (o === -1) return !1;
    for (let t of this.queue.splice(0, o + 1))
      if (t.kind === "query") t.resolve(void 0);
      else if (t.kind === "sentinel") t.resolve(!0);
    return !0;
  }
  enqueue(e) {
    if ((this.queue.push(e), this.isInputAttached)) this.write(e);
  }
  write(e) {
    ((e.written = !0), this.stdout.write(e.request));
  }
}
export {
  e9t,
  yfs,
  BIn,
  jIn,
  _fs,
  bfs,
  Sfs,
  Ygr,
  WIn,
  t9t,
  wfs,
  GIn,
  Xgr,
  vfs,
  Efs,
  hPt,
  kfs,
  Tfs,
  Afs,
  Cfs,
  _ro,
  Rfs,
  xfs,
  Pfs,
  Ifs,
  Ofs,
  bro,
  Mfs,
  Sro
};

//# sourceMappingURL=chunk-w1jkyzea.js.map
