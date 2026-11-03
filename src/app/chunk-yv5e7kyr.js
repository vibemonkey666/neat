// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { posix as _ } from "path";
var { dirname: o, isAbsolute: n, join: e, normalize: E, relative: T, sep: p } = _,
  fLe = "/mnt/user-data/uploads",
  Get = "/uploads",
  BWo = "/uploads/cowork-folders/",
  Z2e = e(o(fLe), "outputs"),
  egn = "/mnt/attach/outputs",
  O = e(o(fLe), "attachments"),
  c = e(o(fLe), "project-docs"),
  u = "/home/claude",
  zet = "/uploads/.home",
  nGt = "/outputs",
  xU = ".stage-tmp.";
function tgn(t) {
  if (!t) return fLe;
  if (!n(t)) throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
  return E(t);
}
function uV() {
  return tgn(i.CLAUDE_STAGE_FILE_ROOT);
}
function Ece() {
  return e(o(uV()), "outputs");
}
function Vre() {
  return u;
}
function ngn() {
  return O;
}
function jWo() {
  return c;
}
var qWr = [fLe, Z2e];
function WWo() {
  return qWr;
}
function rgn(t, s) {
  let r = T(t, s);
  return !(r === ".." || r.startsWith(".." + p) || n(r));
}
export { fLe, Get, BWo, Z2e, egn, zet, nGt, xU, tgn, uV, Ece, Vre, ngn, jWo, qWr, WWo, rgn };

//# sourceMappingURL=chunk-yv5e7kyr.js.map
