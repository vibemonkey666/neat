// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { X } from "./chunk-4hww8411.js";
import { io, jc } from "./chunk-928ws1pg.js";
import { hye } from "./chunk-5j3z2ycg.js";
import { Pa } from "./chunk-9fktyje6.js";
function lBr(o, e) {
  if (o.type !== "pending") return !1;
  let n = io(o.name);
  return !e.some((t) => jc(t, o.name, n));
}
async function dBr(o, e, n) {
  let { maxWaitMs: t, until: s, pollMs: l = 50 } = n,
    i = (r) => r.clients.some((c) => e(c, r));
  if (!i(o())) return;
  let p = Date.now() + t;
  while (Date.now() < p) {
    await X(l);
    let r = o();
    if (s?.(r) || !i(r)) return;
  }
}
function cFo(o) {
  return o.some(sAe);
}
function sAe(o) {
  return "role" in o.config && o.config.role === "comms";
}
function F_t(o) {
  return o.mcpInfo?.role === "comms";
}
function zde(o) {
  if (Pa()) return o.filter((e) => !F_t(e));
  return o;
}
async function yZe(o) {
  if (!Pa()) return;
  await dBr(o, (e, n) => lBr(e, n.tools) && !sAe(e), { maxWaitMs: hye });
}
export { lBr, dBr, cFo, sAe, F_t, zde, yZe };

//# sourceMappingURL=chunk-mk2r9qgw.js.map
