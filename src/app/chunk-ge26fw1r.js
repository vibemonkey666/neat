// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4cgvah10.js";
import { m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-8w2npe9a.js";
import "./chunk-xe386mry.js";
import "./chunk-cjnzngfc.js";
import { it } from "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import { KQ, EFo, D1t } from "./chunk-pfg5vy47.js";
import { xG, Jyt } from "./chunk-7yq9w6fa.js";
import "./chunk-m25ae09s.js";
import { iX } from "./chunk-nqsvrwdr.js";
import "./chunk-f9x3sh8a.js";
function c(e) {
  return it(EFo(), e);
}
function p(e) {
  let s = e.match(/Created new pane:\s*(.+)/);
  if (s && s[1]) return s[1].trim();
  return "";
}
function I() {
  let e = i.ITERM_SESSION_ID;
  if (!e) return null;
  let s = e.indexOf(":");
  if (s === -1) return null;
  return e.slice(s + 1);
}
class g {
  type = "iterm2";
  displayName = "iTerm2";
  teammateSessionIds = [];
  firstPaneUsed = !1;
  paneCreationLock = iX();
  async isAvailable() {
    let e = KQ();
    if ((t(`[ITermBackend] isAvailable check: inITerm2=${e}`), !e))
      return (t("[ITermBackend] isAvailable: false (not in iTerm2)"), !1);
    let s = await D1t();
    return (t(`[ITermBackend] isAvailable: ${s} (it2 CLI ${s ? "found" : "not found"})`), s);
  }
  async isRunningInside() {
    let e = KQ();
    return (t(`[ITermBackend] isRunningInside: ${e}`), e);
  }
  async createTeammatePaneInSwarmView(e, s) {
    t(`[ITermBackend] createTeammatePaneInSwarmView called for ${e} with color ${s}`);
    let o = await this.paneCreationLock.acquire();
    try {
      while (!0) {
        let n = !this.firstPaneUsed;
        t(
          `[ITermBackend] Creating pane: isFirstTeammate=${n}, existingPanes=${this.teammateSessionIds.length}`
        );
        let r, a;
        if (n) {
          let l = I();
          if (l)
            ((r = ["session", "split", "-v", "-s", l]),
              t(`[ITermBackend] First split from leader session: ${l}`));
          else
            ((r = ["session", "split", "-v"]),
              t("[ITermBackend] First split from active session (no leader ID)"));
        } else if (((a = this.teammateSessionIds.at(-1)), a))
          ((r = ["session", "split", "-s", a]),
            t(`[ITermBackend] Subsequent split from teammate session: ${a}`));
        else
          ((r = ["session", "split"]),
            t("[ITermBackend] Subsequent split from active session (no teammate ID)"));
        let d = await c(r);
        if (d.code !== 0) {
          if (a) {
            let l = await c(["session", "list"]);
            if (l.code === 0 && !l.stdout.includes(a)) {
              t(
                `[ITermBackend] Split failed targeting dead session ${a}, pruning and retrying: ${d.stderr}`
              );
              let f = this.teammateSessionIds.indexOf(a);
              if (f !== -1) this.teammateSessionIds.splice(f, 1);
              if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
              continue;
            }
          }
          throw new xG(`Failed to create iTerm2 split pane: ${d.stderr}`);
        }
        let u = p(d.stdout);
        if (!u) throw Error(`Failed to parse session ID from split output: ${d.stdout}`);
        if ((t(`[ITermBackend] Created teammate pane for ${e}: ${u}`), n)) this.firstPaneUsed = !0;
        return (this.teammateSessionIds.push(u), { paneId: u, isFirstTeammate: n });
      }
    } finally {
      o();
    }
  }
  async sendCommandToPane(e, s, o) {
    try {
      Jyt(s);
    } catch (a) {
      throw (m("swarm_pane_spawn", "swarm_pane_command_control_chars"), a);
    }
    let n = e ? ["-s", e] : [];
    await c(["session", "send", ...n, "\x15"]);
    let r = await c(["session", "run", ...n, s]);
    if (r.code !== 0) throw new xG(`Failed to send command to iTerm2 pane ${e}: ${r.stderr}`);
  }
  async setPaneBorderColor(e, s, o) {}
  async setPaneTitle(e, s, o, n) {}
  async enablePaneBorderStatus(e, s) {}
  async killPane(e, s) {
    let o = await c(["session", "close", "-f", "-s", e]),
      n = this.teammateSessionIds.indexOf(e);
    if (n !== -1) this.teammateSessionIds.splice(n, 1);
    if (this.teammateSessionIds.length === 0) this.firstPaneUsed = !1;
    return o.code === 0;
  }
}
export { g as ITermBackend };

//# sourceMappingURL=chunk-ge26fw1r.js.map
