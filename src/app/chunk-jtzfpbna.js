// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { X_ } from "./chunk-wrtp8qz8.js";
import { rF } from "./chunk-ewvf3tep.js";
import { t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { bir, Ns, Bw, RH, mc, jg } from "./chunk-5rw2zfa0.js";
import { Mt } from "./chunk-adv24f35.js";
import { pe } from "./chunk-7c3thgax.js";
import { Et, cr } from "./chunk-ajtyjx88.js";
import { gi, Frt } from "./chunk-7svjr0za.js";
import { rkt } from "./chunk-9zd34fgb.js";
import { MSr, yOt } from "./chunk-3b0cphjr.js";
import { _ft } from "./chunk-kevxczzp.js";
import { o, u, me, B, A } from "./chunk-0bqrj5ah.js";
var mOt = p(() =>
    u({
      method: A("notifications/claude/channel"),
      params: u({ content: o(), meta: me(o(), o()).optional() })
    })
  ),
  ISr = "notifications/claude/channel/permission",
  wuo = p(() =>
    u({ method: A(ISr), params: u({ request_id: o(), behavior: B(["allow", "deny"]) }) })
  ),
  vuo = "notifications/claude/channel/permission_request",
  f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function gOt(e, i, n) {
  let r = Object.entries(n ?? {}),
    [c, a] = g(r, ([d]) => f.test(d));
  if (a.length > 0)
    t(
      `[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${f.source}: ${a.map(([d]) => d).join(", ")}`,
      { level: "warn" }
    );
  let s = c.map(([d, l]) => ` ${d}="${gi(l)}"`).join(""),
    m = Frt(rF, rkt(i));
  return `<${rF} source="${gi(e)}"${s}>
${m}
</${rF}>`;
}
function g(e, i) {
  let n = [],
    r = [];
  for (let c of e) (i(c) ? n : r).push(c);
  return [n, r];
}
function ELn(e) {
  if (e) return { entries: e, source: "org" };
  return { entries: MSr(), source: "ledger" };
}
function Euo(e) {
  return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function Mct(e) {
  if (Et()) {
    let i = cr();
    return (i === "team" || i === "enterprise") && e?.channelsEnabled !== !0;
  }
  return e !== null && e.channelsEnabled !== !0;
}
function nme(e, i) {
  let n = e.split(":");
  return i.find((r) =>
    r.kind === "server"
      ? e === r.name
      : n[0] === "plugin" && (n[1] === r.name || n[1] === RH(r.name, `${r.name}@${r.marketplace}`))
  );
}
function OSr(e, i) {
  let n = e ? mc(e) : void 0,
    r = mc(Bw(`${i.name}@${i.marketplace}`)).name;
  return (
    n?.marketplace !== void 0 &&
    n.marketplace === i.marketplace &&
    (i.dev ? n.name === r : jg(n.name, r))
  );
}
function hOt(e, i, n, r) {
  if (!_ft(i))
    return {
      action: "skip",
      kind: "capability",
      reason: "server did not declare claude/channel capability"
    };
  if (r === "modern")
    return {
      action: "skip",
      kind: "era",
      reason:
        "connection negotiated a modern protocol revision with no unsolicited notification path"
    };
  if (Ae() !== "firstParty")
    return {
      action: "skip",
      kind: "provider",
      reason: "channels are not available on third-party providers"
    };
  if (yOt())
    return {
      action: "skip",
      kind: "disabled",
      reason: "channels feature is not currently available"
    };
  let c = pe("policySettings");
  if (Mct(c))
    return {
      action: "skip",
      kind: "policy",
      reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
    };
  let a = nme(e, X_());
  if (!a)
    return {
      action: "skip",
      kind: "session",
      reason: `server ${e} not in --channels list for this session`
    };
  if (a.kind === "plugin") {
    let s = n ? mc(n) : void 0;
    if (s?.marketplace === void 0 || !OSr(n, a))
      return {
        action: "skip",
        kind: "marketplace",
        reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== void 0 ? Mt(`${s.name}@${s.marketplace}`) : "from an unknown source"}`
      };
    if (!a.dev) {
      let { entries: m, source: d } = ELn(c?.allowedChannelPlugins);
      if (
        !m.some(
          (l) =>
            l.marketplace === s.marketplace &&
            (l.plugin === s.name || (l.marketplace === Ns && bir(l.plugin) === s.name))
        )
      ) {
        let l = Mt(`${s.name}@${s.marketplace}`);
        return {
          action: "skip",
          kind: "allowlist",
          reason:
            d === "org"
              ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)`
              : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
      }
    }
  } else if (!a.dev)
    return {
      action: "skip",
      kind: "allowlist",
      reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
    };
  return { action: "register" };
}
export { mOt, ISr, wuo, vuo, gOt, ELn, Euo, Mct, nme, OSr, hOt };

//# sourceMappingURL=chunk-jtzfpbna.js.map
