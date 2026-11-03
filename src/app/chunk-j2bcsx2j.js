// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { yo } from "./chunk-azq9hjy0.js";
function GGo(e, { maxLines: s = 2000 } = {}) {
  let o = [];
  return (
    hGt(
      e,
      {
        entry(f, c, i) {
          if (i !== void 0 && i !== "" && f !== null && C(f) && (c === "url" || c === "pushurl"))
            o.push(i);
        }
      },
      { maxLines: s }
    ),
    o
  );
}
function C({ name: e, quoted: s }) {
  if (s) return e === "remote" || e.startsWith("remote.");
  let o = e.indexOf(".");
  return o !== -1 && e.slice(0, o) === "remote";
}
function hGt(e, s, { maxLines: o = 2000, keepsBlanksAsWritten: f = !1 } = {}) {
  let i = (e.codePointAt(0) === 65279 ? e.slice(1) : e).split(/\r\n|\n/).slice(0, o),
    t = null,
    u = () => {
      ((t = null), s.malformed?.());
    },
    l = 0;
  while (l < i.length) {
    let r = i[l] ?? "";
    l++;
    let n = g(r, 0),
      p = !1;
    while (r[n] === "[") {
      let N = M(r, n);
      if (N === null) {
        (u(), (p = !0));
        break;
      }
      let { end: O, ...b } = N;
      ((t = b), s.header?.(t), (n = g(r, O)));
    }
    if (p) continue;
    let a = r[n];
    if (a === void 0 || a === "#" || a === ";") continue;
    if (!y(a)) {
      u();
      continue;
    }
    let d = n;
    while (n < r.length && v(r[n] ?? "")) n++;
    let w = r.slice(d, n).toLowerCase();
    while (n < r.length && (r[n] === " " || r[n] === "\t")) n++;
    if (n >= r.length) {
      s.entry?.(t, w, void 0);
      continue;
    }
    if (r[n] !== "=") {
      u();
      continue;
    }
    let h = x(r, n + 1, i, l, f);
    if (((l = h.nextLineIndex), h.value === null)) {
      u();
      continue;
    }
    s.entry?.(t, w, h.value);
  }
}
function M(e, s) {
  let o = s + 1,
    f = o;
  while (o < e.length) {
    let t = e[o];
    if (t === void 0 || !(v(t) || t === ".")) break;
    o++;
  }
  let c = e.slice(f, o);
  if (e[o] === "]") {
    if (c === "") return null;
    return { name: c.toLowerCase(), quoted: !1, end: o + 1 };
  }
  if (e[o] !== " " && e[o] !== "\t" && e[o] !== "\r") return null;
  if (((o = g(e, o)), e[o] !== '"')) return null;
  o++;
  let i = "";
  while (!0) {
    if (o >= e.length) return null;
    let t = e[o];
    if (t === "\\") {
      ((i += e[o + 1] ?? ""), (o += 2));
      continue;
    }
    if ((o++, t === '"')) break;
    i += t ?? "";
  }
  if (e[o] !== "]") return null;
  return { name: c.toLowerCase(), quoted: !0, subsection: i, end: o + 1 };
}
function x(e, s, o, f, c) {
  let i = e,
    t = f,
    u = "",
    l = "",
    r = !1,
    n = s;
  while (!0) {
    if (n >= i.length) {
      if (r) return { value: null, nextLineIndex: t };
      break;
    }
    let a = i[n];
    if (!r && (a === " " || a === "\t" || a === "\r")) {
      if (u !== "") l += c ? a : " ";
      n++;
      continue;
    }
    if (!r && (a === ";" || a === "#")) break;
    if (((u += l), (l = ""), a === "\\")) {
      if (n + 1 >= i.length) {
        if (t >= o.length) return { value: null, nextLineIndex: t };
        ((i = o[t] ?? ""), t++, (n = 0));
        continue;
      }
      let d;
      switch (i[n + 1]) {
        case "\\":
          d = "\\";
          break;
        case '"':
          d = '"';
          break;
        case "n":
          d = `
`;
          break;
        case "t":
          d = "\t";
          break;
        case "b":
          d = "\b";
          break;
        default:
          return { value: null, nextLineIndex: t };
      }
      ((u += d), (n += 2));
      continue;
    }
    if (a === '"') {
      ((r = !r), n++);
      continue;
    }
    ((u += a), n++);
  }
  let p = u.indexOf("\x00");
  return { value: p === -1 ? u : u.slice(0, p), nextLineIndex: t };
}
function g(e, s) {
  while (s < e.length && (e[s] === " " || e[s] === "\t" || e[s] === "\r")) s++;
  return s;
}
function y(e) {
  return (e >= "a" && e <= "z") || (e >= "A" && e <= "Z");
}
function v(e) {
  return y(e) || (e >= "0" && e <= "9") || e === "-";
}
var _ = "anthropics",
  m = "anthropic",
  le = `github.com/${_}/${m}`;
var fe = new RegExp(`${_}[^]*${m}`),
  de = new RegExp(`^${m}(?:\\.git)*$`);
function FJs() {
  return;
}
function y7n(e) {
  return yo(e.host) && e.owner.toLowerCase() === _ && e.name.toLowerCase() === m;
}
export { GGo, hGt, FJs, y7n };

//# sourceMappingURL=chunk-j2bcsx2j.js.map
