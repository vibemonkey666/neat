// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N } from "./chunk-fs43t96t.js";
import { yS, hT, jSe, See, Ol } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ss } from "./chunk-1e5yp9hx.js";
import { Ns, Bw, Tqt, jg, or, Bh } from "./chunk-5rw2zfa0.js";
import { nfe, Eb, pe, pt } from "./chunk-7c3thgax.js";
import { oS } from "./chunk-rve8yzwm.js";
import { br } from "./chunk-wejdb0zs.js";
import { iSt } from "./chunk-vn4qkmxw.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { vp } from "./chunk-pbffp8rf.js";
import { I6n } from "./chunk-w35wpr7b.js";
import { nye } from "./chunk-80t8235z.js";
import { DS } from "./chunk-y609bddh.js";
import { AV, Jer } from "./chunk-mg0tfavz.js";
function hcn() {
  try {
    return oS();
  } catch (e) {
    return (l(N(e)), !0);
  }
}
function XLo(e) {
  if (!vp(e)) return;
  let n = Bw(e).slice(0, -`@${Ns}`.length);
  for (let [o, r] of br().builtinPlugins)
    if (jg(o, n)) return r.enabledFromTrustedSettingsOnly === !0 ? `${o}@${Ns}` : void 0;
  return;
}
var wY = (e) => XLo(e) !== void 0;
import { join as c } from "path";
var B$r = ["settings.json", "settings.local.json"];
function CQ() {
  let e = {};
  if (nfe()) return e;
  for (let n of Ol())
    for (let o of B$r) {
      let { settings: r } = Eb(c(n, ".claude", o));
      if (!r?.enabledPlugins) continue;
      Object.assign(e, r.enabledPlugins);
    }
  return e;
}
function j$r() {
  if (nfe()) return {};
  let e = Ol(),
    n = `${Ss().epoch}\x00${e.join("\x00")}`,
    o = Ie();
  if (o.addDirMarketplacesMemo?.key === n) return o.addDirMarketplacesMemo.value;
  let r = {};
  for (let i of e)
    for (let d of B$r) {
      let { settings: s } = Eb(c(i, ".claude", d));
      if (!s?.extraKnownMarketplaces) continue;
      for (let [u, f] of Object.entries(s.extraKnownMarketplaces)) r[u] = m(u, f);
    }
  return ((o.addDirMarketplacesMemo = { key: n, value: r }), r);
}
function m(e, n) {
  let o = n.source;
  if (o.source === "url") {
    let { headersHelper: r, headers: i, ...d } = o;
    if (r !== void 0)
      t(
        `--add-dir marketplace ${Bh(e)}: dropping its headersHelper (an --add-dir declaration may not run commands)`,
        { level: "warn" }
      );
    return {
      ...n,
      source: { ...d, ...(i && { headers: I6n(i, `--add-dir marketplace ${Bh(e)}`) }) }
    };
  }
  if (o.source === "settings")
    return {
      ...n,
      source: {
        ...o,
        plugins: o.plugins
          .filter((r) => {
            let i = typeof r.source === "object" && r.source.source === "command";
            if (i)
              t(`--add-dir marketplace ${Bh(e)}: dropping command-sourced entry ${Bh(r.name)}`, {
                level: "warn"
              });
            return !i;
          })
          .map(({ headersHelper: r, headers: i, ...d }) => {
            if (r !== void 0)
              t(
                `--add-dir marketplace ${Bh(e)}: dropping entry ${Bh(d.name)}'s headersHelper (an --add-dir declaration may not run commands)`,
                { level: "warn" }
              );
            return {
              ...d,
              ...(i && { headers: I6n(i, `--add-dir marketplace ${Bh(e)} entry ${Bh(d.name)}`) })
            };
          })
      }
    };
  return n;
}
async function A7e() {
  return JLo();
}
function JLo() {
  let e = pt(),
    n = [],
    o = CQ();
  for (let [r, i] of Object.entries(o)) {
    if (wY(r)) continue;
    if (r.includes("@") && i) n.push(r);
  }
  if (e.enabledPlugins)
    for (let [r, i] of Object.entries(e.enabledPlugins)) {
      if (!r.includes("@")) continue;
      let d = wY(r) ? Jer(r) : i,
        s = n.indexOf(r);
      if (d) {
        if (s === -1) n.push(r);
      } else if (s !== -1) n.splice(s, 1);
    }
  return n;
}
function _8() {
  let e = new Map(),
    n = CQ();
  for (let [r, i] of Object.entries(n)) {
    if (!r.includes("@")) continue;
    if (wY(r)) continue;
    if (i === !0) e.set(r, "flag");
    else if (i === !1) e.delete(r);
  }
  let o = [
    { scope: "managed", source: "policySettings" },
    { scope: "user", source: "userSettings" },
    { scope: "project", source: "projectSettings" },
    { scope: "local", source: "localSettings" },
    { scope: "flag", source: "flagSettings" }
  ];
  for (let { scope: r, source: i } of o) {
    let d = pe(i);
    if (!d?.enabledPlugins) continue;
    for (let [s, u] of Object.entries(d.enabledPlugins)) {
      if (!s.includes("@")) continue;
      if (s in n && n[s] !== u) t(`Plugin ${s} from --add-dir (${n[s]}) overridden by ${i} (${u})`);
      if (!AV.includes(i) && wY(s)) continue;
      if (u === !0) e.set(s, r);
      else if (u === !1) e.delete(s);
    }
  }
  return (
    t(
      `Found ${e.size} enabled plugins with scopes: ${Array.from(e.entries())
        .map(([r, i]) => `${r}(${i})`)
        .join(", ")}`
    ),
    e
  );
}
function ycn(e, n) {
  let o = e.get(n);
  if (o !== void 0 || !Tqt(n)) return o;
  let r = or(n);
  for (let [i, d] of e) if (or(i) === r) return d;
  return;
}
function g() {
  try {
    let e = Ie();
    return (
      JLo().some((o) => !vp(o)) ||
      [...e.pluginsWithHooks].some((o) => !vp(o)) ||
      e.loadedModules.some((o) => !DS(o)) ||
      iSt() ||
      oS() ||
      yS().length > 0 ||
      hT().length > 0 ||
      jSe().length > 0 ||
      See().length > 0
    );
  } catch (e) {
    return (l(N(e)), !0);
  }
}
function Ade() {
  try {
    let e = Ie();
    return (
      (e.hookRegistrationOwed ||
        e.hookRegistrationInFlight !== void 0 ||
        e.hooksUnknownCause !== void 0 ||
        e.hookRegistrationRanBlind ||
        hcn()) &&
      nye() &&
      g()
    );
  } catch (e) {
    return (l(N(e)), !0);
  }
}
export { XLo, wY, B$r, CQ, j$r, hcn, A7e, JLo, _8, ycn, Ade };

//# sourceMappingURL=chunk-tsf65jkw.js.map
