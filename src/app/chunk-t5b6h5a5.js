// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { i } from "./chunk-cj37hmns.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { xz, k } from "./chunk-ajtyjx88.js";
import { js } from "./chunk-96sx3c3k.js";
var Rzs = "claude-opus-4-8";
function xzs() {
  return k("tengu_amber_redwood2", "") || k("tengu_amber_redwood3", "");
}
var r = "tengu_goofy_jellyfish";
function Pzs() {
  return k(r, "");
}
function t() {
  return Boolean(Ne(process.env.DISABLE_COMPACT) || i.DISABLE_AUTO_COMPACT);
}
function Hf() {
  if (t()) return !1;
  return js("autoCompactEnabled", !0).value;
}
function Ryt() {
  return js("idleCompaction", !0).value;
}
function d$r() {
  return js("precomputeCompactionEnabled", !0).value;
}
function dLo() {
  if (t()) return !1;
  let e = js("autoCompactEnabled", !0);
  if (e.value) return !1;
  if (e.source === "userSettings") return !0;
  if (e.source === "legacyGlobalConfig") return Qt("userSettings");
  return !1;
}
class n {
  latched = void 0;
  isOpen() {
    return ((this.latched ??= k("tengu_reactive_compact_remote", !1)), this.latched);
  }
  reset() {
    this.latched = void 0;
  }
}
var u = new n();
function o$() {
  if (i.CLAUDE_CODE_REMOTE) {
    if (!u.isOpen()) return !1;
  }
  return !0;
}
function cLo() {
  return k("tengu_hidden_frog", !0);
}
function Izs() {
  return !xz() && k("tengu_woolly_forest", !0);
}
function Ozs() {
  return k("tengu_plain_heron", !0);
}
function Mzs() {
  return k("tengu_clever_garden", !1);
}
function Dzs() {
  return k("tengu_sleepy_ripple", !0);
}
function Hzs() {
  return k("tengu_groovy_eclipse", !1);
}
var a = "tengu_wise_comet";
function Lzs(e) {
  let o = i.CLAUDE_CODE_WISE_COMET;
  if (o !== void 0) return { strip: o, source: "env" };
  if (e !== "adaptive") return { strip: !1, source: "thinking_type" };
  return { strip: k(a, !1), source: "flag" };
}
var l = new Set(["prompt_suggestion", "away_summary", "agent_summary", "hook_prompt"]);
function GGe(e) {
  return e !== void 0 && l.has(e);
}
var s = new Set(["side_question", "extract_memories"]);
function c$r(e) {
  return e !== void 0 && s.has(e);
}
function Nzs() {
  return k("tengu_tidy_origami", !1);
}
function sBt(e) {
  return e === "compact";
}
export {
  Rzs,
  xzs,
  Pzs,
  Hf,
  Ryt,
  d$r,
  dLo,
  o$,
  cLo,
  Izs,
  Ozs,
  Mzs,
  Dzs,
  Hzs,
  Lzs,
  GGe,
  c$r,
  Nzs,
  sBt
};

//# sourceMappingURL=chunk-t5b6h5a5.js.map
