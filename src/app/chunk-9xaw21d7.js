// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xp, TC, ps } from "./chunk-wrtp8qz8.js";
import { b } from "./chunk-acd8w9vv.js";
import { wt, G7 } from "./chunk-ajtyjx88.js";
import { yn } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { tr, ll } from "./chunk-xe386mry.js";
import { Un } from "./chunk-7c3thgax.js";
import { qDe } from "./chunk-ybr49gcx.js";
import { uY, pQe, s8, Ehe, Nht, $ht, gTe, mQe, qFt } from "./chunk-6h7ejyet.js";
import { tLn } from "./chunk-z0xq7hyq.js";
import { $n } from "./chunk-ya7n419k.js";
function Uco(o, n = !1) {
  return `${Nht(o)} Run ${$ht(o)}${n ? " in an interactive terminal session" : ""} to review and enable, then set it as the advisor.`;
}
function Cct(o, n, f, u, t = !0, m = !1, r = []) {
  let d = ll(),
    e = o === "off" ? void 0 : $n(o),
    s = e === void 0 || pQe(e);
  if (
    (a("tengu_advisor_command", {
      advisor: e === void 0 ? b("off") : s ? wt(o) : Ehe(e) ? b("consent_pending") : b("invalid"),
      remote: d
    }),
    !d && tr())
  )
    return "The advisor can't be changed from this client \u2014 this connection is view-only or has no control channel";
  let c = d
    ? " (this session only)"
    : t
      ? ""
      : " for this session \u2014 run /advisor in the terminal to change your default";
  if (e === void 0) {
    if ((f((i) => (i.advisorModel === void 0 ? i : { ...i, advisorModel: void 0 })), d))
      tr()
        ?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: null } })
        .catch(l);
    else if ((S(""), t)) Un("userSettings", { advisorModel: void 0 }, void 0, u);
    return `Advisor disabled${c}${h(r, void 0, n)}`;
  }
  if (!s) {
    if (Ehe(e)) return Uco(e, m);
    let i = [...s8(), "off"].join(", ");
    return `${yn(G7(e))} cannot be used as an advisor. Valid options: ${i}`;
  }
  if ((f((i) => (i.advisorModel === e ? i : { ...i, advisorModel: e })), d))
    tr()
      ?.sendControlRequest({ subtype: "apply_flag_settings", settings: { advisorModel: e } })
      .catch(l);
  else if ((S(e), t)) Un("userSettings", { advisorModel: e }, void 0, u);
  let p = yn(G7(e)),
    v = yn(G7(n)),
    g = `Advisor set to ${p}${c}`;
  if (!uY(n))
    g += `
Note: the current main model (${v}) does not support the advisor. It will activate when you switch to a supported main model.`;
  else if (!gTe(n, e))
    g += `
Note: ${p} is less capable than the current main model (${v}), so the advisor will not activate. Choose a more capable advisor, or switch to a smaller main model.`;
  return g + h(r, e, n);
}
function h(o, n, f) {
  let u = ps(),
    t = u.advisorHeld ?? tLn(qFt(o));
  if (t === void 0) return "";
  if (t.refused)
    return n === void 0
      ? ""
      : `
The API refused the advisor for the current conversation, so it runs without one until /clear or /compact; the setting applies from there and in new conversations.`;
  let m = qDe(u, f);
  if (t.model === void 0 && m) return "";
  if (t.viaToolChange && (m || (t.inFallback !== !0 && t.model !== void 0)))
    return t.model !== void 0 && n !== void 0 && !y(n, t.model)
      ? `
The current conversation keeps ${yn(G7(t.model))} as its advisor model until /clear or /compact, so the tool it has already declared stays unchanged; turning the advisor on or off applies right away.`
      : "";
  let r = qFt(o),
    d = r !== void 0 && !r.available && r.toolChange && !r.byBase,
    e = t.standby === !0 && r === void 0,
    s = d || e ? void 0 : t.model;
  if (s === n || (s !== void 0 && n !== void 0 && y(n, s))) return "";
  return `
The current conversation ${s === void 0 ? "runs without the advisor" : `keeps ${yn(G7(s))} as its advisor`} until /clear or /compact, so the prompt it has already sent stays unchanged; the new setting applies from there and in new conversations.`;
}
function y(o, n) {
  return mQe(o, n);
}
function S(o) {
  TC({ ...(xp() ?? {}), advisorModel: o });
}
export { Uco, Cct };

//# sourceMappingURL=chunk-9xaw21d7.js.map
