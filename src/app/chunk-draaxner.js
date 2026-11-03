// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { a } from "./chunk-4cgvah10.js";
import { PAn } from "./chunk-c3npf81n.js";
import { t } from "./chunk-4kxznmzw.js";
import { ASe } from "./chunk-45h8cn90.js";
import { dp, Wp } from "./chunk-rj6gws00.js";
import { wks } from "./chunk-ehkxehn3.js";
import { openSync as o } from "fs";
import { ReadStream as s } from "tty";
function p() {
  if (process.stdin.isTTY) return { kind: "stdin" };
  if (Ne(!1)) return { kind: "unavailable", reason: "ci" };
  if (PAn() === "mcp") return { kind: "unavailable", reason: "mcp" };
  try {
    let n = o("/dev/tty", "r"),
      e = new s(n);
    return (
      ASe(e),
      e.on("error", (r) => {
        (a("tengu_tty_stream_error", dp(r)), t(`/dev/tty stream error: ${r}`, { level: "debug" }));
      }),
      (e.isTTY = !0),
      { kind: "override", stream: e }
    );
  } catch (n) {
    return (
      t(`Could not open /dev/tty for stdin override: ${n}`, { level: "error" }),
      { kind: "unavailable", reason: "tty_unavailable" }
    );
  }
}
class i {
  input = null;
  get() {
    return (this.input ??= p());
  }
  reset() {
    this.input = null;
  }
}
var dut = new i();
function MC(n = !1) {
  wks();
  let e = dut.get(),
    r = { exitOnCtrlC: n };
  if (e.kind === "override") r.stdin = e.stream;
  return ((r.isScreenReaderEnabled = Wp()), r);
}
export { dut, MC };

//# sourceMappingURL=chunk-draaxner.js.map
