// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qf } from "./chunk-cj37hmns.js";
import { nm } from "./chunk-0hjcje8e.js";
import { lhn, s9 } from "./chunk-ny2y84j1.js";
import { oy } from "./chunk-at88wjsn.js";
import { Ce } from "./chunk-a2y39866.js";
var o = Ce(oy(), 1);
import { readdir as c, stat as p } from "fs/promises";
import { join as a, sep as f } from "path";
function FQ() {
  if (!qf()) return !1;
  let r = lhn() + f;
  return process.execPath.startsWith(r);
}
function xu(r = {}) {
  return E8(Tze(r));
}
function Tze(r = {}) {
  if (!r.pinToCurrentBinary && FQ()) {
    let t = Z7e();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if (qf()) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function Z7e() {
  return a(s9(), "claude");
}
function E8(r) {
  let e = nm();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return { cmd: e[0], prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs], target: r.target };
}
async function r1t() {
  let r = lhn(),
    e;
  try {
    e = await c(r);
  } catch {
    return null;
  }
  let t = e.filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && o.valid(n)).sort(o.rcompare);
  for (let n of t) {
    let i = a(r, n);
    try {
      let s = await p(i);
      if (s.isFile() && s.size > 0) return i;
    } catch {}
  }
  return null;
}
export { FQ, xu, Tze, Z7e, E8, r1t };

//# sourceMappingURL=chunk-zvsmc5fn.js.map
