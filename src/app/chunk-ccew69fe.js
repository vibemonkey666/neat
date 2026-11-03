// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { a } from "./chunk-4cgvah10.js";
import { i } from "./chunk-cj37hmns.js";
import { yr } from "./chunk-wr0p4ndg.js";
import { Un } from "./chunk-7c3thgax.js";
import { wt, Qo } from "./chunk-ajtyjx88.js";
import { Hf } from "./chunk-t5b6h5a5.js";
import { wGo, pJs } from "./chunk-hhgrzgnb.js";
import { _c, wje, s0t, JMs, Orn, TS, Cko, i0t, a0t } from "./chunk-j0tbz6ra.js";
var v = {
  env: "from CLAUDE_CODE_AUTO_COMPACT_WINDOW",
  "unknown-model": "default for an unrecognized model",
  "model-default": "default for this model",
  settings: "from settings"
};
function A(e, o) {
  let s = _c(e),
    { window: n, configured: r, source: d } = TS(s, o),
    t = r > n ? ` \xB7 capped to ${yr(n)} by model` : "",
    m =
      d === "auto"
        ? "auto"
        : d === "experiment" || d === "clientdata"
          ? `auto (${yr(r)} tokens)${t}`
          : `${yr(r)} tokens (${v[d]})${t}`,
    u = [`Auto-compact window for ${Qo(s.settingsKey)}: ${m}`],
    p = wje(i.CLAUDE_CODE_AUTO_COMPACT_WINDOW);
  if (p !== null) u.push(p);
  if (!Hf()) u.push("Auto-compact is currently disabled (see /config)");
  if (
    (u.push(
      "Auto-compact summarizes the conversation when context usage approaches this limit. The actual threshold is the minimum of this setting and your model's maximum context window."
    ),
    L$n(s.settingsKey))
  )
    u.push(
      "The auto setting picks a window tuned for your model and is strongly recommended for the best cost and performance."
    );
  if (i0t(d) && N$n(s, r))
    u.push(
      "Overriding auto may result in high token usage, especially when resuming long sessions."
    );
  return u.join(`
`);
}
function L$n(e) {
  return !pJs(e);
}
function N$n(e, o) {
  return Math.min(e.contextWindow, o) > Cko(e).window;
}
async function w8e(e, o, s) {
  let n = _c(o.options.mainLoopModel);
  if (TS(n, void 0).source === "env")
    return "CLAUDE_CODE_AUTO_COMPACT_WINDOW is set and takes precedence. Unset it to change this setting.";
  let r = e.trim().toLowerCase(),
    t = r === "reset" || r === "unset" || r === "default" ? "auto" : Orn(r);
  if (t === void 0)
    return `Couldn't parse '${e}'. Expected 'auto' or 100k\u20131M tokens (e.g. 500k, 200000, or 200 as shorthand)`;
  let m = t === "auto" ? void 0 : t,
    u = a0t(n, o.options.autoCompactWindow),
    { error: p } = await Un(
      "userSettings",
      wGo(n.model, { autoCompactWindow: t }, { autoCompactWindow: m }),
      void 0,
      o.storageV5
    );
  if (p) return `Couldn't save setting: ${p.message}`;
  JMs(n.settingsKey, t);
  let { window: l, configured: C, source: y } = TS(n, s0t()),
    f = (y === "settings" ? C : void 0) !== m;
  (o.onQueryEvent?.({ type: "apply_flag_settings", settings: { autoCompactWindow: null } }),
    a("tengu_autocompact_command", {
      action: b(t === "auto" ? "auto" : "set"),
      ...(m !== void 0 && { tokens: m }),
      window_model: wt(n.settingsKey),
      previous_tokens: u.window,
      previous_origin: c(u.origin),
      resulting_tokens: l,
      overridden: f,
      route: c(s)
    }));
  let g = `Auto-compact window for ${Qo(n.settingsKey)}`;
  if (t === "auto")
    return f
      ? `${g} set to auto in settings, but a higher-priority override is active (${yr(l)} tokens)`
      : `${g} set to auto`;
  let w = "";
  if (f) w = `, but a higher-priority override is active (${yr(l)} tokens)`;
  else if (l < t) w = ` (capped to model limit of ${yr(l)})`;
  return `${g} set to ${yr(t)} tokens${w}`;
}
var mAi = async (e, o) => {
  let s = e.trim();
  if (!s) return { type: "text", value: A(o.options.mainLoopModel, o.options.autoCompactWindow) };
  return { type: "text", value: await w8e(s, o, "noninteractive") };
};
export { L$n, N$n, w8e, mAi };

//# sourceMappingURL=chunk-ccew69fe.js.map
