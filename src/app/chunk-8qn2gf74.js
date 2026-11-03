// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Wr } from "./chunk-wrtp8qz8.js";
import { l } from "./chunk-ewvf3tep.js";
import { Wvt, Ln, Et, gn, iRe } from "./chunk-ajtyjx88.js";
import { xae } from "./chunk-dx5awfq0.js";
import { hPe, txt, mwe } from "./chunk-7m50s6j1.js";
import { e } from "./chunk-f790ajz4.js";
import { Js } from "./chunk-6jn0brsm.js";
function s(a) {
  return `https://claude.ai/upgrade/max?utm_source=claude_code&utm_medium=cli&utm_campaign=${a}`;
}
async function gEi(a, i) {
  return w5e(a, i, "upgrade_command");
}
async function w5e(a, i, m) {
  let u = xae(a),
    c = s(m);
  try {
    if (Et()) {
      let o = Ln(),
        n = !1;
      if (o?.subscriptionType && o?.rateLimitTier)
        n = o.subscriptionType === "max" && o.rateLimitTier === "default_claude_max_20x";
      else if (o?.accessToken) {
        let t = await Wvt(o.accessToken);
        n =
          t?.organization?.organization_type === "claude_max" &&
          t?.organization?.rate_limit_tier === "default_claude_max_20x";
      }
      if (n) {
        let t = iRe();
        return (
          setTimeout(
            u,
            0,
            t
              ? `You\u2019re already on the highest Max subscription plan. For additional usage, run ${t}.`
              : "You are already on the highest Max subscription plan. For additional usage, run /login to switch to an API usage-billed account."
          ),
          null
        );
      }
    }
    await Js(c);
    let r = gn(),
      p = r && { accountUuid: r.accountUuid, organizationUuid: r.organizationUuid },
      d = Wr();
    return e(mwe, {
      startingMessage:
        "Starting new login following /upgrade. Exit with Ctrl-C to use existing account.",
      onDone: async (o, n, t) => {
        let g = await hPe(i, o, { setAppState: t, previousAccount: p, previousGatewayAuth: d });
        u(...txt(i, o, g));
      }
    });
  } catch (r) {
    (l(r), setTimeout(u, 0, `Failed to open browser. Please visit ${c} to upgrade.`));
  }
  return null;
}
export { gEi, w5e };

//# sourceMappingURL=chunk-8qn2gf74.js.map
