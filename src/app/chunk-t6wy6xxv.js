// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, hee, Jf } from "./chunk-wrtp8qz8.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { bS } from "./chunk-c3npf81n.js";
import { nX } from "./chunk-2bsye2b3.js";
var a = 1500;
class u {
  buffer = "";
  seeded = "";
  capturing = !1;
  readableHandler = null;
  hasField = !1;
  fieldKeyAt = 0;
  fieldClosedAt = null;
}
var f = new W(() => new u());
function r() {
  return f.of(U().host);
}
function ARi() {
  let e = r();
  if (!process.stdin.isTTY || e.capturing || bS("-p") || bS("--print")) return;
  ((e.capturing = !0), (e.buffer = ""), (e.seeded = ""), (e.hasField = !1), (e.fieldKeyAt = 0));
  try {
    (process.stdin.setEncoding("utf8"),
      process.stdin.setRawMode(!0),
      process.stdin.ref(),
      (e.readableHandler = () => {
        let t = process.stdin.read();
        while (t !== null) {
          if (typeof t === "string") d(t);
          t = process.stdin.read();
        }
      }),
      process.stdin.on("readable", e.readableHandler));
  } catch {
    e.capturing = !1;
  }
}
function d(e) {
  let t = r(),
    n = 0;
  while (n < e.length) {
    let s = e[n],
      o = s.charCodeAt(0);
    if (o === 3) {
      (d0(), process.exit(130));
      return;
    }
    if (o === 4) {
      d0();
      return;
    }
    if (o === 127 || o === 8) {
      if (t.buffer.length > 0) {
        let i = nX(t.buffer);
        t.buffer = t.buffer.slice(0, -(i.length || 1));
      }
      n++;
      continue;
    }
    if (o === 27) {
      n++;
      let i = n < e.length ? e.charCodeAt(n) : -1;
      if (i === 91) {
        n++;
        while (n < e.length && e.charCodeAt(n) < 64) n++;
        if (n < e.length) n++;
      } else if (i === 93 || i === 80 || i === 88 || i === 94 || i === 95) {
        n++;
        while (n < e.length) {
          let l = e.charCodeAt(n);
          if (l === 7) {
            n++;
            break;
          }
          if (l === 27 && n + 1 < e.length && e.charCodeAt(n + 1) === 92) {
            n += 2;
            break;
          }
          n++;
        }
      } else if (i === 79) n += 2;
      else if (i !== -1 && i !== 27) n++;
      continue;
    }
    if (o < 32 && o !== 9 && o !== 10 && o !== 13) {
      n++;
      continue;
    }
    if (o === 13) {
      ((t.buffer += `
`),
        n++);
      continue;
    }
    ((t.buffer += s), n++);
  }
}
function d0() {
  let e = r();
  if (!e.capturing) return;
  if (((e.capturing = !1), e.readableHandler))
    (process.stdin.removeListener("readable", e.readableHandler), (e.readableHandler = null));
}
function cGt() {
  d0();
  let e = r(),
    t = e.buffer.trim();
  if (((e.buffer = ""), (e.seeded = ""), e.hasField)) e.fieldClosedAt = Date.now();
  return ((e.hasField = !1), (e.fieldKeyAt = 0), t);
}
function Cgn() {
  return r().buffer.trim().length > 0;
}
function Rgn(e) {
  let t = r();
  ((t.buffer = e), (t.seeded = e));
}
function Xet() {
  let { buffer: e, seeded: t } = r();
  return e !== t;
}
function wGr() {
  d0();
  let e = r();
  if (!e.hasField && Xet()) xgn();
  return ((e.hasField = !0), e.buffer);
}
function vGr(e) {
  ((r().buffer = e), xgn());
}
function xgn() {
  r().fieldKeyAt = Date.now();
}
function Pgn() {
  let e = r();
  if (!e.hasField || !Xet()) return "";
  let t = e.buffer.trim();
  return ((e.buffer = ""), (e.seeded = ""), t);
}
function dKe() {
  return r().hasField;
}
function Jet() {
  let { hasField: e, fieldClosedAt: t } = r();
  return e || t !== null;
}
function MGo() {
  let { fieldClosedAt: e } = r();
  return e === null ? 1 / 0 : Date.now() - e;
}
function EGr() {
  let e = Date.now() - r().fieldKeyAt;
  return e < 0 ? 0 : Math.max(0, a - e);
}
async function DGo(e) {
  for (;;) {
    let t = EGr();
    if (t === 0 || e.aborted) return;
    await X(t, e);
  }
}
async function HGo() {
  for (;;) {
    hee();
    let e = Date.now() - Jf();
    if (e >= a) return;
    if (e < 0) {
      await X(a);
      return;
    }
    await X(a - e);
  }
}
export { ARi, d0, cGt, Cgn, Rgn, Xet, wGr, vGr, xgn, Pgn, dKe, Jet, MGo, EGr, DGo, HGo };

//# sourceMappingURL=chunk-t6wy6xxv.js.map
