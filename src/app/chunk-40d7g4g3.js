// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ku, KH, Yns, Xns } from "./chunk-wrtp8qz8.js";
import { I } from "./chunk-a16y5hcz.js";
import { Ut } from "./chunk-ajtyjx88.js";
import { thn, Z, N7n } from "./chunk-p27rr8yn.js";
import { n3, hy, yy, P_ } from "./chunk-hgshn9e7.js";
import { kk } from "./chunk-j0tbz6ra.js";
function bve() {
  if (!Ut()) return !0;
  return ku() !== null && Yns();
}
function mvs(e) {
  let t = KH(e),
    n = Xns(e);
  return () => {
    (t(), n());
  };
}
function Bct() {
  if (Z().autoReact.enabledMemo !== !0) return new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function sBe() {
  let { autoReact: e, durable: t, live: n, wakes: r } = Z(),
    i = new Set();
  if (e.enabledMemo === !1 || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (
      s.scanGeneration !== r.scanGeneration ||
      n.retiredInFlightArms.has(o) ||
      t.stopLatches.isStopped(o)
    )
      continue;
    if (!hy(o) || (s.freshPublish && P_(o) && s.stopGeneration === n3(o))) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of Z().live.supervisors.values())
    if (!e.stopped && e.autoReactWiring !== void 0 && !yy(e.slug)) yield e;
}
function awr(e) {
  let { live: t } = Z();
  for (let n of u())
    if (e?.reconnecting !== !0 || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return !0;
  return !1;
}
function gvs() {
  return Z().autoReact.enabledMemo === !0 && awr({ reconnecting: !0 });
}
function AQt(e) {
  let t = Z().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) (thn(r), t.supervisors.delete(n));
    (t.heardVersions.delete(n), N7n(n), Z().liveDocWatch.headSinks.get(n)?.sourceEnded());
  }
  c(e);
}
function c(e) {
  let t = Z().live;
  for (let n of e)
    if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n))
      (t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n));
}
var jct = 1e4;
function a() {
  return Z().autoReact.unattendedReplies;
}
function ffo(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, jct));
}
function pfo(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, jct));
  }
}
function hvs(e) {
  let t = a(),
    n = t.get(e) ?? 0;
  return (t.delete(e), n);
}
function QLn() {
  let e = Z().autoReact,
    t = e.unattendedReplies;
  e.unattendedReplies = new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function ZLn(e, { where: t, stop: n }) {
  return kk(
    `Claude auto-replied to ${e} ${I(e, "comment")}${t} while you were away.${n}`,
    "notice"
  );
}
export { bve, mvs, Bct, sBe, awr, gvs, AQt, jct, ffo, pfo, hvs, QLn, ZLn };

//# sourceMappingURL=chunk-40d7g4g3.js.map
