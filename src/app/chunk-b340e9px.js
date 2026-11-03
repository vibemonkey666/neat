// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import { q, ke, jXr, Ros } from "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { Yb } from "./chunk-xq3dwnzp.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-qmkm2x59.js";
import "./chunk-6xjawpfq.js";
import "./chunk-znr3gw2p.js";
import "./chunk-vchq4g74.js";
import "./chunk-4nzy53ma.js";
import "./chunk-afxq0vrk.js";
import "./chunk-c3npf81n.js";
import "./chunk-qakn3b85.js";
import "./chunk-ak0cmk10.js";
import "./chunk-zem4yd4w.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-gg53p5cf.js";
import "./chunk-znkwh1rm.js";
import "./chunk-v19xty83.js";
import "./chunk-7c3thgax.js";
import "./chunk-xt4k95hv.js";
import "./chunk-dc0nzty2.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-rhk37je5.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-7zgz07kc.js";
import "./chunk-r00j5r9s.js";
import { RVs, dU, zcn } from "./chunk-bydv9c9r.js";
import { uze, MS, bFr, SFr, tNo } from "./chunk-7yq9w6fa.js";
import "./chunk-m99mv31n.js";
import { $j, Ya } from "./chunk-jwqtbev0.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
import { rename as d } from "fs/promises";
var l = "session";
function c(t) {
  return `${l}-${t.slice(0, 8)}`;
}
function p() {
  if (jXr() === void 0) {
    let t = process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME || null;
    (delete process.env.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME, Ros(t));
  }
  return jXr() ?? null;
}
async function x(t, n) {
  let i = t?.existingTeamName || p(),
    e = i ?? c(q()),
    a = $j(Ya, e),
    m = uze(e);
  if (!(i ? await MS(e, n) : null)) {
    let r = {
      name: e,
      createdAt: Date.now(),
      leadAgentId: a,
      leadSessionId: q(),
      members: [
        {
          agentId: a,
          name: Ya,
          agentType: Ya,
          joinedAt: Date.now(),
          tmuxPaneId: "leader",
          cwd: ke(),
          subscriptions: [],
          backendType: "in-process"
        }
      ]
    };
    await SFr(e, r, n).catch((T) => bFr(e, T));
  }
  RVs(e);
  let o = q();
  if (e !== o) await d(dU(o), dU(e)).catch(() => {});
  (await zcn(e, n), tNo(e));
  let s = Yb[0];
  return {
    teamContext: {
      teamName: e,
      teamFilePath: m,
      leadAgentId: a,
      teammates: {
        [a]: {
          name: Ya,
          agentType: Ya,
          color: s,
          tmuxSessionName: "in-process",
          tmuxPaneId: "leader",
          cwd: ke(),
          spawnedAt: Date.now()
        }
      }
    },
    teammateColors: { assignments: new Map([[a, s]]), index: 1 }
  };
}
export { x as initializeSessionTeam };

//# sourceMappingURL=chunk-b340e9px.js.map
