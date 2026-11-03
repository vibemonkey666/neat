// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Vt } from "./chunk-fs43t96t.js";
import { Re, ue } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { it } from "./chunk-qmmh8tq2.js";
import { stat as i } from "fs/promises";
import { homedir as s } from "os";
import { join as c } from "path";
async function u(e, a) {
  await Re((r) => ({ ...r, appleTerminalSetupInProgress: !0, appleTerminalBackupPath: e }), a);
}
async function Y9t(e) {
  await Re((a) => ({ ...a, appleTerminalSetupInProgress: !1 }), e);
}
function p() {
  let e = ue();
  return {
    inProgress: e.appleTerminalSetupInProgress ?? !1,
    backupPath: e.appleTerminalBackupPath || null
  };
}
function X9t() {
  return c(s(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function Kgs(e) {
  let a = X9t(),
    r = `${a}.bak`;
  try {
    let { code: n } = await it("defaults", ["export", "com.apple.Terminal", a]);
    if (n !== 0) return null;
    try {
      await i(a);
    } catch {
      return null;
    }
    return (await it("defaults", ["export", "com.apple.Terminal", r]), await u(r, e), r);
  } catch (n) {
    if (Vt(n)) return (t(`backupTerminalPreferences: fs inaccessible: ${n}`), null);
    return (l(n), null);
  }
}
async function MMn(e) {
  let { inProgress: a, backupPath: r } = p();
  if (!a) return { status: "no_backup" };
  if (!r) return (await Y9t(e), { status: "no_backup" });
  try {
    await i(r);
  } catch {
    return (await Y9t(e), { status: "no_backup" });
  }
  let n = !1;
  try {
    let { code: o } = await it("defaults", ["import", "com.apple.Terminal", r]);
    if (o !== 0) return { status: "failed", backupPath: r };
    return ((n = !0), await it("killall", ["cfprefsd"]), await Y9t(e), { status: "restored" });
  } catch (o) {
    if (Vt(o)) t(`checkAndRestoreTerminalBackup: fs inaccessible: ${o}`);
    else l(o);
    return (await Y9t(e), n ? { status: "restored" } : { status: "failed", backupPath: r });
  }
}
export { Y9t, X9t, Kgs, MMn };

//# sourceMappingURL=chunk-6e3yxj2r.js.map
