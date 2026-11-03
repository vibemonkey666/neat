// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Yf } from "./chunk-4kxznmzw.js";
import { Ft } from "./chunk-a16y5hcz.js";
import { cst } from "./chunk-dc0nzty2.js";
import { $5 } from "./chunk-9zd34fgb.js";
var Uf = "MEMORY.md",
  GU = 200,
  iue = 25000,
  ZKr = 4 * iue,
  s0e = 200,
  aue = 4096;
function Cvt(t) {
  let r = t.trim();
  return {
    trimmed: r,
    lineCount:
      Ft(
        r,
        `
`
      ) + 1,
    byteCount: r.length
  };
}
function aH(t) {
  return t.normalize("NFC").toLowerCase();
}
function TV(t) {
  let r = t?.lastIndexOf("/") ?? -1;
  if (r <= 0) return "";
  let n = t.slice(0, r + 1);
  return n.split("/").some((e) => e.startsWith(".")) ? "" : n;
}
var ZKe =
    "This directory already exists \u2014 write to it directly with the Write tool (do not run mkdir or check for its existence).",
  eVr =
    "Both directories already exist \u2014 write to them directly with the Write tool (do not run mkdir or check for their existence).";
function zU(t) {
  let r = "";
  for (let n of cst(
    Yf(
      t.replace(
        /\r\n?|[\u2028\u2029]/g,
        `
`
      )
    )
  )) {
    let e = n.codePointAt(0),
      o = e !== 9 && e !== 10 && (e < 32 || (e >= 127 && e <= 159));
    r += o ? "\uFFFD" : n;
  }
  return r;
}
function boe(t) {
  return $5(s(t));
}
function Xer(t) {
  return Rvt(t) || /[\p{Cc}\u2028\u2029]/u.test(t);
}
function Nyn(t) {
  return boe(t.replace(/[\t\n\r\u2028\u2029]/g, ""));
}
var aqo = new Set([8204, 8205, 65038, 65039]),
  i = /^[\p{Cf}\p{Co}\p{Cn}\p{Cs}\p{DI}]$/u;
function Rvt(t) {
  let r = t.codePointAt(0);
  if (aqo.has(r) || r === 9 || r === 10 || r === 13) return !1;
  return i.test(t) || r < 32 || (r >= 127 && r <= 159);
}
function s(t) {
  let r = "";
  for (let n of t.replace(
    /\r\n?|[\u2028\u2029]/g,
    `
`
  )) {
    if (Rvt(n)) continue;
    r += n;
  }
  return r;
}
export { Uf, GU, iue, ZKr, s0e, aue, Cvt, aH, TV, ZKe, eVr, zU, boe, Xer, Nyn, aqo, Rvt };

//# sourceMappingURL=chunk-zqbn04bq.js.map
