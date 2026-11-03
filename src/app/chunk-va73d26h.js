// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Llr } from "./chunk-zjzt1ymd.js";
import { jAt } from "./chunk-sbz6hrpt.js";
import { Fe } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
var Osr = "HKLM\\SOFTWARE\\Policies\\ClaudeCode",
  Msr = "HKCU\\SOFTWARE\\Policies\\ClaudeCode",
  Nwn = "Settings";
var uli = 5000,
  L9o = 2097152,
  Bqe = "/mnt/c/Windows/System32/reg.exe",
  EI = "/mnt/c/Program Files/ClaudeCode",
  o = ve({ isCoworkCloud: void 0 }, (e) => {
    e.isCoworkCloud = void 0;
  });
function rqt() {
  if (o.isCoworkCloud === void 0) {
    let e = process.env.CLAUDE_CODE_ENTRYPOINT;
    o.isCoworkCloud = Llr.some((r) => r === e);
  }
  return o.isCoworkCloud;
}
function fli() {
  ((o.isCoworkCloud = void 0), rqt());
}
function oqt() {
  let e = rqt();
  if (process.env.WSL_DISTRO_NAME && !e) return !0;
  try {
    let r = Fe("fs").readFileSync("/proc/version", "utf8").toLowerCase();
    return jAt(r);
  } catch {
    return !1;
  }
}
export { Osr, Msr, Nwn, uli, L9o, Bqe, EI, rqt, fli, oqt };

//# sourceMappingURL=chunk-va73d26h.js.map
