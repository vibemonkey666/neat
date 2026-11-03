// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { OTn, Ers, Ars, Crs, xp, TC, Rrs, gXr, USe, EXr } from "./chunk-wrtp8qz8.js";
import { d, E, G, $B } from "./chunk-fs43t96t.js";
import { dl } from "./chunk-h5gbmqm1.js";
import { mie } from "./chunk-jazcqqqr.js";
import { _, Po, Jse, uW, v9r, ie, t } from "./chunk-4kxznmzw.js";
import { om, CI } from "./chunk-5rw2zfa0.js";
import { pn } from "./chunk-0evsancd.js";
import { nw, bS } from "./chunk-c3npf81n.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { EM } from "./chunk-tcvjb2c0.js";
import { go } from "./chunk-c57c64b0.js";
import { Dr } from "./chunk-kc27mwew.js";
import { gxe } from "./chunk-v4kbwz0z.js";
import { er, D9o, Tf } from "./chunk-1e5yp9hx.js";
import { vQs } from "./chunk-hy8pzezr.js";
import { H } from "./chunk-p8tprgqa.js";
import { Bse, SB } from "./chunk-hc5j8sxy.js";
var ohn = "apply-project-settings",
  wQs = "Review and accept settings changes for cloud sessions that use this computer";
function nzr(e = process.argv) {
  return e[2] === "apply-project-settings";
}
function U7n(e) {
  return _(e).replace(
    /[\u007f-\u009f]/g,
    (r) => "\\u" + r.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")
  );
}
function vbi(e) {
  try {
    let r = e.trim(),
      i = r.startsWith("{") && r.endsWith("}"),
      a;
    if (i) {
      let o = ot(r);
      if (!o) return pn("Error: Invalid JSON provided to --settings");
      let s = U7n(o);
      ((a = gxe("claude-settings", ".json", { contentHash: s })), Ars(s));
    } else {
      let o = e,
        s = e,
        c;
      try {
        if (CI(e)) ((o = Po(ie(), e).resolvedPath), (s = o));
        else {
          let n = uW(ie(), e);
          ((o = n.resolvedPath), (s = l(n.linksResolvedPath ?? n.resolvedPath)));
        }
        c = SB(o, om);
      } catch (n) {
        if (v9r(n)) return pn(`Error: Cannot use settings file ${e}: ${d(n)}`);
        if (G(n)) return pn(`Error: Settings file not found: ${o}`);
        if (E(n) === "ERR_FILE_TOO_LARGE")
          return pn(`Error: Settings file exceeds the ${om / 1048576}MiB limit: ${o}`);
        if (Bse(n) || $B(n)) return pn(`Error: Cannot use settings file (${d(n)}): ${o}`);
        throw n;
      }
      ((a = s), Crs(c));
    }
    (Ers(a), er());
  } catch (r) {
    if (r instanceof Error) t(`Error processing --settings: ${d(r)}`, { level: "error" });
    return pn(`Error processing settings: ${d(r)}`);
  }
}
function Ebi(e) {
  let r = ot(e.trim(), !1);
  if (!H(r)) {
    (t("--managed-settings ignored: invalid JSON object", { level: "warn" }), gXr(!0));
    return;
  }
  let { tier: i, organization: a, memberLost: o } = vQs(r);
  if (o) gXr(!0);
  (Rrs(i, a), er());
}
function g(e) {
  try {
    let r = D9o(e);
    (EXr(r), er());
  } catch (r) {
    if (r instanceof Error) t(`Invalid --setting-sources flag: ${d(r)}`, { level: "error" });
    return pn(`Error processing --setting-sources: ${d(r)}`);
  }
}
function Dzo() {
  let e = performance.now();
  go("eagerLoadSettings_start");
  let r = nw("--settings");
  if (r) vbi(r);
  let i = nw("--managed-settings");
  if (i) Ebi(i);
  (rzr(), f(), go("eagerLoadSettings_end"), Dr("settings_load_ms", performance.now() - e, e));
}
function f() {
  let e = nw("--fast-mode");
  if (e !== "on" && e !== "off") return;
  (TC({ ...(xp() ?? {}), fastMode: e === "on" }), er());
}
function rzr() {
  let e = nw("--setting-sources");
  if (e !== void 0) g(e);
  if (bS("--restricted") || mie()) (g(""), OTn(!0));
  if (EM()) g("");
  if (nzr()) (EXr(USe().filter((r) => !Tf.has(r))), er());
}
function l(e) {
  if (dl(e)) return e;
  try {
    let r = Jse(ie(), e);
    return r.toLowerCase() === e.toLowerCase() ? r : e;
  } catch {
    return e;
  }
}
export { ohn, wQs, nzr, U7n, vbi, Ebi, Dzo, rzr };

//# sourceMappingURL=chunk-fw8xqd84.js.map
