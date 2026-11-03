// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Mbe, Vwn, Jsr, fA } from "./chunk-5rw2zfa0.js";
import { Ro } from "./chunk-1e5yp9hx.js";
import { see } from "./chunk-cj37hmns.js";
import { kbn, Woi, dI, ue } from "./chunk-ajtyjx88.js";
import { ln, mg, Krt, pe, Xm } from "./chunk-7c3thgax.js";
import { mCe } from "./chunk-96sx3c3k.js";
import { Nzo } from "./chunk-h2tyaevk.js";
import { TP, G3, fm } from "./chunk-j0tbz6ra.js";
function zve() {
  let t = Xm(),
    i = G3.flatMap((e) => fm(e).errors.map((s) => (s.file ? s : { ...s, file: TP(e) }))),
    r = ue(),
    o = mCe
      .filter((e) => t.settings[e] === void 0 && r[e] !== dI[e] && Woi(e, r[e]))
      .map((e) => ({
        file: see(),
        path: e,
        message: kbn(e)
          ? "Not a valid value for this setting, so it is ignored and the setting counts as off"
          : "Not a valid value for this setting, so it is ignored and the setting counts as unset",
        severity: "warning",
        suggestion: "Set it with /config, or delete the key from this file"
      })),
    n = Dho();
  return { settings: t.settings, errors: [...t.errors, ...i, ...o, ...n.ignored, ...n.turnedOff] };
}
var c = new Set(Vwn);
function Dho() {
  let t = [],
    i = [],
    r = Ro();
  for (let o of r) {
    if (!Mbe(o)) continue;
    if (o === "projectSettings" && r.includes("userSettings") && mg()) continue;
    let n = pe(o)?.env ?? {},
      e = [],
      s = [];
    for (let a of Object.keys(n)) {
      let f = a.toUpperCase();
      if (!c.has(f)) continue;
      if (Jsr(a, n[a], Nzo)) s.push(a);
      else e.push(a);
    }
    let l = ln(o),
      g = fA(o);
    if (e.length > 0)
      t.push({
        file: l,
        path: "env",
        message: `Claude Code ignores these telemetry variables in ${g}: ${e.join(", ")}. A project's settings files can only turn telemetry off: set OTEL_LOGS_EXPORTER, OTEL_METRICS_EXPORTER, or OTEL_TRACES_EXPORTER to none, or a content variable such as OTEL_LOG_USER_PROMPTS to 0, with the name in upper case. That doesn't work for a variable that managed settings, a --settings file, or the environment you start Claude Code from already sets. If you set them on purpose, set them in your shell, your user settings (~/.claude/settings.json), or managed settings instead.`,
        severity: "warning",
        statusOnly: !0
      });
    if (s.length > 0)
      i.push({
        file: l,
        path: "env",
        message: `${g} turns telemetry off with these variables: ${s.join(", ")}. Claude Code uses these values unless managed settings or a --settings file sets the same variable. Your user settings don't override this file. To keep one on, set it in the environment you start Claude Code from, in a --settings file, or in managed settings.`,
        severity: "warning",
        statusOnly: !0
      });
  }
  return { ignored: t, turnedOff: i };
}
function yZt() {
  return Krt().filter((t) => !t.preserveOnWrite);
}
function Iut() {
  let t = ln("localSettings");
  return [
    ...zve().errors.filter((r) => !r.mcpErrorMetadata && r.severity !== "warning" && r.file !== t),
    ...yZt()
  ];
}
export { zve, Dho, yZt, Iut };

//# sourceMappingURL=chunk-zv0be35s.js.map
