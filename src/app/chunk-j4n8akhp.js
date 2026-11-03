// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ye } from "./chunk-fs43t96t.js";
import { Jl, Pe, si } from "./chunk-4hww8411.js";
import { f } from "./chunk-brszmkb3.js";
import { k } from "./chunk-ajtyjx88.js";
import { l } from "./chunk-ewvf3tep.js";
import { zi } from "./chunk-ynkasage.js";
var C = 5000,
  b = 4000,
  a = 1000,
  m = 4000,
  S = 1000,
  p = 250;
function ACs(e) {
  (e.browserRosterVersion++, e.browserRosterChanged.emit());
}
async function CCs(e) {
  let n = zi(),
    t = n.bridgeBinding,
    o = t?.socketClient;
  if (
    t === void 0 ||
    o?.listConnectedExtensions === void 0 ||
    o.hasActiveSelection?.() === !0 ||
    !k("tengu_hushed_lantern", !0)
  )
    return !1;
  if (!(
    Boolean(t.context.getPersistedDeviceId?.()) ||
    ((
      await Pe(
        Promise.resolve().then(() => t.context.getLocalDeviceIds?.()),
        a
      ).catch(() => {
        return;
      })
    )?.size ?? 0) > 0
  ))
    return !1;
  if (n.relayConnectFailed === o && !o.isConnected()) return !1;
  let d = o.listConnectedExtensions.bind(o),
    i = Jl.monotonicNow(),
    c = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion,
    r = c
      ? "none_cached"
      : await si(g(n, o, d), e, () => new Ye()).catch((_) => {
          if (e.aborted) return "aborted";
          return (l(_), "failed");
        });
  if (r !== "present" && r !== "roster_changed" && !c)
    f("chrome_permission_prompt", `browser_check_${r}`, {
      elapsed_ms: Math.round(Jl.monotonicNow() - i)
    });
  return r === "none" || r === "none_short_wait" || r === "none_cached";
}
async function RCs() {
  let e = zi().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return !1;
  let n = await w(e, e.listConnectedExtensions.bind(e), a).catch((t) => (l(t), "failed"));
  if (n !== "none" && n !== "present") f("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none";
}
async function g(e, n, t) {
  let o = Jl.now() + C;
  if ((await Pe(n.ensureConnected(), b)) !== !0)
    return ((e.relayConnectFailed = n), "connect_failed");
  e.relayConnectFailed = void 0;
  let s = e.browserRosterVersion,
    d = Jl.now(),
    i = await w(n, t, a);
  if (i !== "none" || e.browserRosterVersion !== s) return i === "none" ? "roster_changed" : i;
  let c = Math.min(m, o - Jl.now() - p);
  if (c < S) return "no_time_to_wait";
  let r = () => {},
    _ = new Promise((h) => {
      r = e.browserRosterChanged.subscribe(h);
    });
  if ((await Pe(_, c).finally(() => r()), e.browserRosterVersion !== s)) return "roster_changed";
  let u = await w(n, t, a);
  if (u !== "none" || e.browserRosterVersion !== s) return u === "none" ? "roster_changed" : u;
  if (Jl.now() - d < m) return "none_short_wait";
  return ((e.noBrowserFound = { client: n, rosterVersion: s }), "none");
}
async function w(e, n, t) {
  let o = await Pe(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none";
}
export { ACs, CCs, RCs };

//# sourceMappingURL=chunk-j4n8akhp.js.map
