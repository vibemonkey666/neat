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
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-c3npf81n.js";
import { pNe } from "./chunk-qakn3b85.js";
import { bt, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-4kxy1036.js";
import "./chunk-4nzy53ma.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-xe386mry.js";
import "./chunk-qywdxehb.js";
import "./chunk-afxq0vrk.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import { Pse, _$e } from "./chunk-nrysaqwk.js";
import { dCn } from "./chunk-6ffkmvm9.js";
import { bl } from "./chunk-jwqtbev0.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-6jbh8yja.js";
async function _({ sessionId: e, sdkUrl: s }) {
  try {
    let r = i.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse;
    if (!(await bl(r, _$e))?.trim()) {
      t("[vitals] no session token file on this worker; guest vitals disabled");
      return;
    }
    let o = await dCn({
      sessionId: e,
      apiBaseUrl: pNe(new URL(s)).origin,
      tokenFilePath: r,
      binaryResolution: "search",
      log: t
    });
    if (o) bt(() => o.stop());
  } catch (r) {
    t(`[vitals] not started: ${d(r)}`);
  }
}
export { _ as startHostedWorkerVitalsEmitter };

//# sourceMappingURL=chunk-1rj35x4j.js.map
