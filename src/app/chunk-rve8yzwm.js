// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es, aie, Eee } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Mr } from "./chunk-jazcqqqr.js";
import { er, Qt } from "./chunk-1e5yp9hx.js";
import { pe, KRe, pr, kb, NNe } from "./chunk-7c3thgax.js";
import { rhn } from "./chunk-5tf578w6.js";
import { My } from "./chunk-enp5gvra.js";
function ud(o) {
  let t = pe("policySettings")?.strictPluginOnlyCustomization;
  if (t === !0) return !0;
  if (Array.isArray(t)) return t.includes(o);
  return !1;
}
var p = new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function VY(o) {
  return o !== void 0 && p.has(o);
}
function a(o) {
  return o;
}
function SXs() {
  return null;
}
function wXs(o) {
  return !1;
}
function TQn(o) {
  return null;
}
var c = "cli";
class g {
  snapshotKey = () => c;
  snapshotsBySessionId = new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(),
      t = this.snapshotsBySessionId.get(o);
    if (!t) ((t = { initialHooksConfig: null }), this.snapshotsBySessionId.set(o, t));
    return t;
  }
  store(o) {
    let t = this.current();
    if (((t.initialHooksConfig = o), My())) t.userHooksConfig = pe("userSettings")?.hooks ?? {};
    else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = pe("policySettings")?.hooks ?? {};
    } catch {
      t.policyHooksConfig = "unreadable";
    }
  }
  evict(o) {
    if (o === c) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var k = new W(() => new g());
function e() {
  return es(k);
}
function r() {
  let o = pe("policySettings");
  if (o?.disableAllHooks === !0) return {};
  if (o?.allowManagedHooksOnly === !0 || Mr()) return o?.hooks ?? {};
  if (ud("hooks")) return o?.hooks ?? {};
  let t = pr();
  if (t.disableAllHooks === !0) {
    if (!AQn()) return o?.hooks ?? {};
    return m(f.filter(Qt).map((n) => pe(n)?.hooks));
  }
  return a(t.hooks ?? {});
}
var f = ["userSettings", "flagSettings", "policySettings"];
function m(o) {
  let t = {};
  for (let n of o)
    for (let [s, l] of Object.entries(n ?? {})) {
      let i = s;
      t[i] = [...(t[i] ?? []), ...(l ?? [])];
    }
  return t;
}
function AQn() {
  return d() && !oS();
}
function $Wo() {
  return d() && oS();
}
function d() {
  if (!My() || Mr() || ud("hooks") || pr().disableAllHooks !== !0) return !1;
  return (
    pe("policySettings")?.allowManagedHooksOnly !== !0 &&
    f.filter(Qt).every((t) => pe(t)?.disableAllHooks !== !0)
  );
}
function Py() {
  return Mr() || _7();
}
function _7() {
  let o = pe("policySettings");
  if (o?.allowManagedHooksOnly === !0) return !0;
  if (pr().disableAllHooks === !0 && o?.disableAllHooks !== !0) return !0;
  return !1;
}
function CQn() {
  return Mr() || pe("policySettings")?.allowManagedHooksOnly === !0 || oS();
}
function oS() {
  return NNe(kb()).length > 0 || (aie() && KRe());
}
function RQn() {
  return CQn() || ud("hooks");
}
function Ph() {
  return pe("policySettings")?.disableAllHooks === !0;
}
function X8() {
  return Ph() || _7();
}
function FWo() {
  (e().store(r()), Eee());
}
function ez(o) {
  (er(o), e().store(r()), Eee());
}
async function tGt(o) {
  let t = await rhn(o);
  try {
    (e().store(r()), Eee());
  } finally {
    t?.();
  }
}
function* UWo() {
  for (let o of e().snapshotsBySessionId.values())
    if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function tz() {
  let o = e().current();
  if (o.initialHooksConfig === null) (er(), e().store(r()), Eee());
  return o.initialHooksConfig;
}
function KWr() {
  return (tz(), e().current().policyHooksConfig ?? "unreadable");
}
function VWr() {
  return (tz(), e().current().userHooksConfig ?? (My() ? (pe("userSettings")?.hooks ?? {}) : {}));
}
export {
  ud,
  VY,
  SXs,
  wXs,
  TQn,
  AQn,
  $Wo,
  Py,
  _7,
  CQn,
  oS,
  RQn,
  Ph,
  X8,
  FWo,
  ez,
  tGt,
  UWo,
  tz,
  KWr,
  VWr
};

//# sourceMappingURL=chunk-rve8yzwm.js.map
