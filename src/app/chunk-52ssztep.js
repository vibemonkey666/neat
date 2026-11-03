// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Pe } from "./chunk-4hww8411.js";
import { wr } from "./chunk-jazcqqqr.js";
import { dsr, wbe, JV, BRe, Aai, Cai } from "./chunk-vbnb89qh.js";
import { execFile as c } from "child_process";
var l = 1e4,
  u8o = 250,
  o = null,
  u;
function FPi() {
  return u === !0;
}
function UPi() {
  return BRe().lastKnown;
}
function BPi(n) {
  BRe().lastKnown = n;
}
function s(n) {
  return new Promise((e) => {
    try {
      c(
        "security",
        ["find-generic-password", "-a", JV(), "-w", "-s", n],
        { encoding: "utf-8", timeout: l, windowsHide: !0 },
        (t, i) => {
          let a = Boolean(t && "killed" in t && t.killed);
          e(a ? null : { stdout: t ? null : i?.trim() || null });
        }
      );
    } catch {
      e(null);
    }
  });
}
function f8o() {
  let n = wr();
  if (o || n) return;
  let e = BRe(),
    t = e.generation;
  return;
}
async function pwn(n) {
  if (!o) return;
  await (n === void 0 ? o : Pe(o, n));
}
function v5r() {
  BRe().legacyApiKeyPrefetch = null;
}
export { u8o, FPi, UPi, BPi, f8o, pwn, v5r };

//# sourceMappingURL=chunk-52ssztep.js.map
