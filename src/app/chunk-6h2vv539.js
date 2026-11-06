import {
  fileURLToPath as __sourceFilePath_d642a17a92c057e8,
  URL as __sourceFilePath_d642a17a92c057e8_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ug } from "./chunk-wvbfdbhr.js";
import { i } from "./chunk-cj37hmns.js";
import { Rt, Xye, BE } from "./chunk-wany0nxw.js";
import { Be } from "./chunk-at88wjsn.js";
import { $w } from "./chunk-5rw2zfa0.js";
import { Td } from "./chunk-exz0w70z.js";
import { ri } from "./chunk-63a6mqbs.js";
import { io, jc } from "./chunk-928ws1pg.js";
import { rm } from "./chunk-1g9x3zw8.js";
import { L3s } from "./chunk-39ayby14.js";
import { Ght } from "./chunk-6h7ejyet.js";
import { n6n, u0o, MKs, vcn } from "./chunk-s4n2rnah.js";
import { cDn, cys } from "./chunk-d02rasrq.js";
import { sAe, F_t } from "./chunk-mk2r9qgw.js";
import { dDn } from "./chunk-g7nfbdtr.js";
import { EG } from "./chunk-ybr49gcx.js";
import { Zh } from "./chunk-n32nf3yj.js";
var c = new Set([rm, Ug]);
function sao(o, e) {
  if (e.length === 0) return o;
  let t = e.map((m) => [m, io(m)]),
    n = o.filter((m) => !t.some(([s, r]) => jc(m, s, r)));
  return n.length === o.length ? o : n;
}
function f(o) {
  return o.mcpInfo?.cliOwned === !0 && o.mcpInfo.serverName === Td;
}
var a = import.meta.require(
  __sourceFilePath_d642a17a92c057e8(
    new __sourceFilePath_d642a17a92c057e8_URL("./chunk-atxvbyzx.js", import.meta.url)
  )
);
function lDn() {
  return (process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS ?? "")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
}
function iao(o, e = lDn()) {
  if (sAe(o) || u0o.includes(o.name)) return !0;
  let t = io(o.name);
  return e.some((n) => n.startsWith(t));
}
function g_r(o, e = () => !1) {
  let t = i.CLAUDE_CODE_BRIEF,
    n = new Set(lDn()),
    m = vcn(),
    s = o.some(F_t);
  return o.filter(
    (r) =>
      n6n.has(r.name) ||
      (m && Rt(r, Be) && !Zh(r)) ||
      MKs(r.name) ||
      f(r) ||
      F_t(r) ||
      (t && c.has(r.name)) ||
      BE(r, n) ||
      (!s && e(r))
  );
}
function cXt(o, e, t, n, m) {
  let [s, r] = $w(dDn(ri(Ght([...o, ...e]), "name"), n), (p) => Zh(p) || EG(p)),
    l = [...cys(r).sort(Xye), ...cDn(s, n ?? s).sort(Xye)];
  if (a.isCoordinatorMode()) return g_r(l, m);
  return l;
}
function uXt(o, e) {
  let t = o.length === 1 ? o[0] : void 0;
  if (t && L3s(e, t)) return [];
  return o;
}
export { sao, lDn, iao, g_r, cXt, uXt };

//# sourceMappingURL=chunk-6h2vv539.js.map
