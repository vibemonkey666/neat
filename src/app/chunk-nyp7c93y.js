// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rn } from "./chunk-xc1j8sdj.js";
import { Fn } from "./chunk-dvghjmtr.js";
import { Ln, il, Et, IVe } from "./chunk-ajtyjx88.js";
import { bZ } from "./chunk-38g9s4wc.js";
import { z } from "./chunk-p197ae0z.js";
import { hostname as n } from "os";
function Sx() {
  return;
}
function Aye() {
  return;
}
function NE() {
  let e = Sx();
  if (e !== void 0) return e;
  if (!Fn() || !Et()) return;
  return bZ(Ln())?.accessToken;
}
async function Fk(e) {
  if (!(z() && e !== void 0)) return NE();
  let r = Sx();
  if (r !== void 0) return r;
  if (!Fn() || !(await IVe(e))) return;
  return bZ(await il(e))?.accessToken;
}
function h$() {
  return Aye() ?? rn().BASE_API_URL;
}
function a2e() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || n();
  return t(e) || "remote-control";
}
function t(e) {
  return e
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export { Sx, Aye, NE, Fk, h$, a2e };

//# sourceMappingURL=chunk-nyp7c93y.js.map
