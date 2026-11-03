// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { fe } from "./chunk-xe386mry.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { _ } from "./chunk-4kxznmzw.js";
import { pn, HU, Ff, Oo } from "./chunk-0evsancd.js";
async function T6e(o = m) {
  let { env: d } = await import("./chunk-pr8j0peh.js");
  return d.CLAUDE_CODE_CHILD_SESSION ? o : void 0;
}
var m =
    "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.",
  f =
    "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function a(o) {
  let d = [],
    i = 0,
    n = Bun.stdin.stream().getReader();
  for (;;) {
    let { done: r, value: t } = await n.read();
    if (r) break;
    if (((i += t.byteLength), i > o)) return (await n.cancel(), null);
    d.push(t);
  }
  return new TextDecoder().decode(Buffer.concat(d));
}
function kro(o, d) {
  (o
    .command("edit-permission-rules", { hidden: !0 })
    .allowExcessArguments(!1)
    .description(
      "Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)"
    )
    .requiredOption("--json", "Read the edit as JSON from stdin")
    .action(
      d(async (i) => {
        if (process.stdin.isTTY)
          return pn(
            "claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand"
          );
        let n = await T6e();
        if (n !== void 0) return pn(n);
        let { runPermissionRuleEdit: r } = await import("./chunk-cfns046p.js"),
          t = await a(2097152),
          s = t === null ? null : ot(t, !1);
        if (s === null) return pn("claude edit-permission-rules: stdin is not a JSON edit");
        let e = await r(s, i);
        if (!e.ok) return pn(e.error);
        return (
          await Ff(
            _({ ok: !0, warnings: e.warnings, stored: e.stored }) +
              `
`
          ),
          HU()
        );
      })
    ),
    o
      .command("edit-memory-settings", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)"
      )
      .requiredOption("--json", "Read the edit as JSON from stdin")
      .action(
        d(async (i) => {
          if (process.stdin.isTTY)
            return pn(
              "claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand"
            );
          let n = await T6e();
          if (n !== void 0) return pn(n);
          let { runMemorySettingsEdit: r } = await import("./chunk-kqkn29pt.js"),
            t = await a(4096),
            s = t === null ? null : ot(t, !1);
          if (s === null) return pn("claude edit-memory-settings: stdin is not a JSON edit");
          let e = await r(s, i);
          if (!e.ok) return pn(e.error);
          return (
            await Ff(
              _({ ok: !0, written: e.written }) +
                `
`
            ),
            Oo(0)
          );
        })
      ),
    o
      .command("edit-skill-overrides", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Apply one skill state edit read as JSON from stdin (used by the VS Code extension)"
      )
      .requiredOption("--json", "Read the edit as JSON from stdin")
      .action(
        d(async (i) => {
          if (process.stdin.isTTY)
            return pn(
              "claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand"
            );
          let n = await T6e();
          if (n !== void 0) return pn(n);
          let { runSkillOverrideEdit: r } = await import("./chunk-tq9jjw2c.js"),
            t = await a(4096),
            s = t === null ? null : ot(t, !1);
          if (s === null) return pn("claude edit-skill-overrides: stdin is not a JSON edit");
          let e = await r(s, fe(), i);
          if (!e.ok) return pn(e.error);
          return (
            await Ff(
              _({ ok: !0, written: e.written, changed: e.changed }) +
                `
`
            ),
            HU()
          );
        })
      ),
    o
      .command("edit-sandbox-settings", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)"
      )
      .requiredOption("--json", "Read the edit as JSON from stdin")
      .action(async () => {
        if (process.stdin.isTTY)
          return pn(
            "claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand"
          );
        let i = await T6e();
        if (i !== void 0) return pn(i);
        let { runSandboxSettingsEdit: n } = await import("./chunk-0yqhf2py.js"),
          r = await a(4096),
          t = r === null ? null : ot(r, !1);
        if (t === null) return pn("claude edit-sandbox-settings: stdin is not a JSON edit");
        let s = await n(t);
        if (!s.ok) return pn(s.error);
        return (
          await Ff(
            _({ ok: !0, written: s.written }) +
              `
`
          ),
          Oo(0)
        );
      }),
    o
      .command("design-login", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)"
      )
      .requiredOption("--json", "Write JSON lines to stdout")
      .option("--status", "Report whether design-system access is authorized, and exit")
      .action(
        d(async (i, n) => {
          if (process.stdin.isTTY)
            return pn(
              "claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session"
            );
          let { isSpawnedByClaudeCodeSession: r } = await import("./chunk-0jqp1kv2.js");
          if (r()) return pn(f);
          let { designLoginStatus: t, runDesignLoginSignIn: s } =
            await import("./chunk-8765tk46.js");
          if (n.status)
            return (
              await Ff(
                _(await t()) +
                  `
`
              ),
              Oo(0)
            );
          let e = new AbortController(),
            { markPrintModeSignalHandlersRegistered: u } = await import("./chunk-78yj3qej.js");
          (process.once("SIGTERM", () => e.abort()), process.once("SIGINT", () => e.abort()), u());
          let l = await s({
            stdin: process.stdin,
            write: (c) =>
              Ff(
                c +
                  `
`
              ),
            signal: e.signal
          });
          return Oo(l.ok ? 0 : 1);
        })
      ),
    o
      .command("edit-chrome-settings", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)"
      )
      .requiredOption("--json", "Read the edit as JSON from stdin")
      .action(
        d(async (i) => {
          if (process.stdin.isTTY)
            return pn(
              "claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand"
            );
          let n = await T6e();
          if (n !== void 0) return pn(n);
          let { runChromeSettingsEdit: r } = await import("./chunk-7015xvc2.js"),
            t = await a(4096),
            s = t === null ? null : ot(t, !1);
          if (s === null) return pn("claude edit-chrome-settings: stdin is not a JSON edit");
          let e = await r(s, i);
          if (!e.ok) return pn(e.error);
          return (
            await Ff(
              _({ ok: !0, written: e.written }) +
                `
`
            ),
            HU()
          );
        })
      ),
    o
      .command("drop-worktree-registrations", { hidden: !0 })
      .allowExcessArguments(!1)
      .description(
        "Drop deleted worktrees' git registrations named as JSON on stdin (used by the VS Code extension)"
      )
      .requiredOption("--json", "Read the request as JSON from stdin")
      .action(async () => {
        if (process.stdin.isTTY)
          return pn(
            "claude drop-worktree-registrations reads one JSON request from stdin; it is run by the VS Code extension, not by hand"
          );
        let i = await T6e(
          "claude drop-worktree-registrations cannot run from inside a Claude Code session; it is run by the VS Code extension"
        );
        if (i !== void 0) return pn(i);
        let { registrationDropsLine: n, runWorktreeRegistrationDrops: r } =
            await import("./chunk-perrq2m3.js"),
          t = await a(262144),
          s = t === null ? null : ot(t, !1);
        if (s === null)
          return pn("claude drop-worktree-registrations: stdin is not a JSON request");
        let e = await r(s);
        if (!e.ok) return pn(e.error);
        return (
          await Ff(
            n(e.outcomes) +
              `
`
          ),
          HU()
        );
      }));
}
export { T6e, kro };

//# sourceMappingURL=chunk-k3ct9cth.js.map
