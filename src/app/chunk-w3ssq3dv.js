// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rn } from "./chunk-xc1j8sdj.js";
import { _ } from "./chunk-4kxznmzw.js";
import { I, re } from "./chunk-a16y5hcz.js";
import { _t } from "./chunk-ewvf3tep.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { MQe } from "./chunk-6h7ejyet.js";
function fJ() {
  try {
    MQe(rn().BASE_API_URL);
  } catch {
    return "egress_blocked";
  }
  if (Ks("zdr")) return "egress_blocked";
  return _t() ? "essential_traffic" : void 0;
}
import { basename as f } from "path";
var l = 100,
  g = 900,
  a = 300;
function Rte(t) {
  return _(t).replace(
    /[^\x20-\x7e]/g,
    (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`
  );
}
function MTr(t) {
  let n = Rte(t);
  if (n.length <= a) return n;
  let e = [...t],
    r = e.length,
    s = 5;
  while (r > 0) {
    if (((s += Rte(e[r - 1]).length - 2), s > a)) break;
    r--;
  }
  return Rte(`...${e.slice(r).join("")}`);
}
function MCs(t) {
  let n = [],
    e = 0;
  for (let { path: s, name: i, size: c } of t) {
    let o = `${MTr(s)}${f(s) === i ? "" : `, the file ${MTr(i)}`} (${c} bytes)`;
    if (((e += o.length + 2), e > g)) break;
    n.push(o);
  }
  let r = t.length - n.length;
  return `Attaches ${t.length} ${I(t.length, "file")}: ${n.join("; ")}${r > 0 ? `; and ${r} more` : ""}`;
}
function DCs(t) {
  if (t === "") return;
  let n = t
    .slice(1)
    .split("/")
    .map((e) => e.replaceAll("~1", "/").replaceAll("~0", "~"))
    .map((e, r) => (r === 0 ? e : /^\d+$/.test(e) ? `[${e}]` : `.${e}`))
    .join("");
  return pJ(n);
}
function pJ(t) {
  return Rte(t.length > l ? `${re(t, l)}...` : t);
}
export { fJ, Rte, MTr, MCs, DCs, pJ };

//# sourceMappingURL=chunk-w3ssq3dv.js.map
