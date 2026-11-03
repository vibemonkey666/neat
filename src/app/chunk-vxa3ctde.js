import {
  fileURLToPath as __filePath_9cdf3d49409842a8,
  URL as __filePath_9cdf3d49409842a8_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { b, c, Hn } from "./chunk-acd8w9vv.js";
import { Qe, N } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { mc } from "./chunk-5rw2zfa0.js";
import { a } from "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { pr } from "./chunk-7c3thgax.js";
import { iut, ute, ZEs, zW } from "./chunk-pwnqr15h.js";
import { jdo, jbr, gIe } from "./chunk-veg1r3k2.js";
import { df } from "./chunk-gjsrpxk2.js";
class u {
  seated = void 0;
  picker = void 0;
  seat(e) {
    this.seated = e;
  }
  vacate(e) {
    if (this.seated === e) this.seated = void 0;
  }
  current() {
    return this.seated;
  }
  install(e) {
    this.picker = e;
  }
  pickDue() {
    if (this.picker === void 0 || this.seated === void 0) return !1;
    return (this.picker(this.seated), !0);
  }
}
var qIt = new W(() => new u());
function YIt() {
  return import.meta.require(
    __filePath_9cdf3d49409842a8(
      new __filePath_9cdf3d49409842a8_URL("./chunk-jak6ta5v.js", import.meta.url)
    )
  );
}
function m(e) {
  if (e.id.startsWith(jdo) || e.id.startsWith(jbr)) return b("org-tip");
  let { isBuiltInTipId: i, MARKETPLACE_PLUGIN_TIP_ID_PREFIX: t } = YIt();
  if (e.id.startsWith(t))
    return e.pluginId !== void 0 && mc(e.pluginId).marketplace === df
      ? Hn(e.id)
      : b("marketplace-plugin:org-marketplace");
  return i(e.id) ? Hn(e.id) : b("other");
}
function T(e) {
  if (e.length === 0) return;
  if (e.length === 1) return e[0];
  let i = e.map((t) => ({ tip: t, sessions: zW(t.id) }));
  return (
    i.sort((t, n) => {
      if (t.sessions !== n.sessions) return n.sessions - t.sessions;
      return (n.tip.priority ?? 0) - (t.tip.priority ?? 0);
    }),
    i[0]?.tip
  );
}
async function Vbs(e) {
  if (pr().spinnerTipsEnabled === !1) return;
  let { getRelevantTips: i } = await import("./chunk-jak6ta5v.js"),
    t = await i(e);
  if (t.length === 0) return;
  return T(t);
}
async function qbs(e, i) {
  try {
    return await e.content(i);
  } catch (t) {
    let { tipSessionCaches: n } = await import("./chunk-jak6ta5v.js");
    return (n.of(i.session.host).failedTipIds.add(e.id), l(Qe(N(t), "tip content threw")), "");
  }
}
var s = 2;
class h {
  fired = new Set();
  fire(e, i) {
    if (e <= 0) return;
    let t = e > i ? "true" : "false",
      n = e >= s && i < s ? "true" : "false",
      r = `${t}|${n}`;
    if (this.fired.has(r)) return;
    (this.fired.add(r),
      a("tengu_dead_probe_legacy_plugin_tip_counts", { changes_max: c(t), changes_outcome: c(n) }));
  }
}
var S = new W(() => new h());
function _() {
  return S.of(U().host);
}
async function Ybs(e) {
  if (pr().spinnerTipsEnabled === !1) return;
  let { isTipRelevantSafe: i, tipSessionCaches: t } = await import("./chunk-jak6ta5v.js"),
    n = t.of(e.session.host);
  if (gIe()) return;
  let r = await n.getMarketplacePluginTips(e.storageV5);
  if (r.length === 0) return;
  let p = [];
  for (let o of r) {
    if (!o.pluginId) continue;
    if (n.failedTipIds.has(o.id)) continue;
    let d = ute(o.id),
      f = ZEs(o.pluginId);
    if ((_().fire(f, d), Math.max(d, f) >= s)) continue;
    if (zW(o.id) < o.cooldownSessions) continue;
    if (await i(o, e)) p.push(o);
  }
  return T(p);
}
function XIt(e, i = "spinner", t) {
  (iut(e.id, t, e.advertisedCommand),
    g(i === "startup" ? "tips_startup_show" : "tips_spinner_show"),
    a("tengu_tip_shown", {
      tipIdLength: m(e),
      cooldownSessions: e.cooldownSessions,
      surface: c(i)
    }));
}
var act = "cc-plugin-tips";
export { qIt, YIt, Vbs, qbs, Ybs, XIt, act };

//# sourceMappingURL=chunk-vxa3ctde.js.map
