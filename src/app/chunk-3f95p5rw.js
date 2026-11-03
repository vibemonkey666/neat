// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { re, zr, $M } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { QFr, WD } from "./chunk-qg3fkqqr.js";
import { qa } from "./chunk-gmxe4kpt.js";
var yLn = 5,
  YSs = "Structured output was retracted by a model fallback and no retry produced a valid result",
  d = 600;
function XSs(t, r, e) {
  if (r > 0)
    return `Failed to provide surviving structured output after ${t} attempts (${r} retracted by a model fallback)`;
  let n = `Failed to provide valid structured output after ${t} attempts`;
  return e === void 0 ? n : `${n} \u2014 last StructuredOutput error: ${e}`;
}
function euo(t) {
  let r =
    typeof t === "string"
      ? t
      : Array.isArray(t)
        ? t.flatMap((i) => (i.type === "text" ? [i.text] : [])).join(`
`)
        : void 0;
  if (r === void 0) return;
  let n = r
      .replace(/^<tool_use_error>/, "")
      .replace(/<\/tool_use_error>$/, "")
      .replace(
        QFr,
        `
`
      )
      .split(
        `
`
      )
      .map($M).join(`
`),
    o = WD(n, { prependMarker: !1 }).sanitized,
    u = zr(o);
  if (u.length === 0) return;
  let s = u.length > d ? re(u, d) + "\u2026" : u;
  return WD(s, { prependMarker: !1 }).sanitized;
}
function JSs(t, r) {
  try {
    let e = r === void 0 ? 0 : t.lastIndexOf(r) + 1;
    return a(e === 0 ? t : t.slice(e));
  } catch (e) {
    l(e);
    return;
  }
}
function a(t) {
  let r = new Set();
  for (let e of t) {
    if (e?.type !== "assistant") continue;
    let n = e.message.content;
    if (!Array.isArray(n)) continue;
    for (let o of n) if (o.type === "tool_use" && o.name === qa) r.add(o.id);
  }
  if (r.size === 0) return;
  for (let e = t.length - 1; e >= 0; e--) {
    let n = t[e];
    if (n?.type !== "user") continue;
    let o = n.message.content;
    if (!Array.isArray(o)) continue;
    for (let u = o.length - 1; u >= 0; u--) {
      let s = o[u];
      if (s?.type === "tool_result" && s.is_error === !0 && r.has(s.tool_use_id))
        return euo(s.content);
    }
  }
  return;
}
export { yLn, YSs, XSs, euo, JSs };

//# sourceMappingURL=chunk-3f95p5rw.js.map
