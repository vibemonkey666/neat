// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { NVt, Qor, FRe } from "./chunk-zf79f62g.js";
import { _fe } from "./chunk-d54avynm.js";
import { i } from "./chunk-cj37hmns.js";
import { zae } from "./chunk-5kfjd6mt.js";
import { Fbo } from "./chunk-g46q1g7w.js";
import { hxr } from "./chunk-j0tbz6ra.js";
var Abo = ["Docs"],
  t = new Set(["claudedocs", "claudepages"]);
function VTr(o) {
  return o.tier === "core" && Abo.some((e) => zae(o.title) === zae(e));
}
var tRs =
  "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";
function ntn(o) {
  return (
    (o.config.type === "claudeai-proxy" && _fe(o.config) && hxr(o.config)) ||
    (Fbo() &&
      o.config.type === "sdk" &&
      Kt(o.name) !== null &&
      t.has(FRe(o.serverInfo?.name ?? ""))) ||
    (i.CLAUDE_CODE_REMOTE === !0 &&
      o.config.type === "http" &&
      o.config.scope === "dynamic" &&
      (Qor(o.config) || NVt.has(o.name)))
  );
}
function qTr(o) {
  return o.some(
    (e) => (e.type === "connected" || e.type === "pending" || e.type === "cached") && ntn(e)
  );
}
export { Abo, VTr, tRs, ntn, qTr };

//# sourceMappingURL=chunk-zrcae60v.js.map
