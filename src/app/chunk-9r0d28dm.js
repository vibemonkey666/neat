// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Wn } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { NAt } from "./chunk-13nwb0xt.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { qe, rbe } from "./chunk-0np0053t.js";
var MVo = 25000,
  KZs = ` To read it anyway, up to what still fits in your context, call ${qe} again with ${rbe}: true \u2014 only if you genuinely need all of it or the user asked for the whole file.`,
  DVo = ` Even with ${rbe}, this is more than fits in the context you have left this turn (other large reads in the same turn share that room).`,
  VZs = ` ${rbe} is not available where this read runs; read it in parts with offset and limit.`,
  HVo = 128;
class sue extends Error {
  tokenCount;
  maxTokens;
  constructor(e, t, r = "") {
    super(
      `File content (${e} tokens) exceeds maximum allowed tokens (${t}). Use offset and limit parameters to read specific portions of the file, or search for specific content instead of reading the whole file.${r}`
    );
    this.tokenCount = e;
    this.maxTokens = t;
    this.name = "MaxFileReadTokenExceededError";
  }
}
var n = new WeakMap();
function LVo(e, t) {
  n.set(e, t);
}
function xer(e) {
  return n.get(e);
}
function o() {
  let e = i.CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS;
  if (e !== void 0 && e > 0) return e;
  return;
}
function bj() {
  let e = Lo();
  return (
    (e.defaultFileReadingLimits ??= { maxSizeBytes: NAt, maxTokens: o() ?? MVo }),
    e.defaultFileReadingLimits
  );
}
function Qtt() {
  return Wn("tengu_tab_read_sep", !1);
}
export { MVo, KZs, DVo, VZs, HVo, sue, LVo, xer, bj, Qtt };

//# sourceMappingURL=chunk-9r0d28dm.js.map
