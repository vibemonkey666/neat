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
import { ui } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-jazcqqqr.js";
import "./chunk-ak0cmk10.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { _t } from "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-7svjr0za.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-4nzy53ma.js";
import "./chunk-afxq0vrk.js";
import "./chunk-c3npf81n.js";
import "./chunk-qakn3b85.js";
import "./chunk-zem4yd4w.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-gg53p5cf.js";
import "./chunk-znkwh1rm.js";
import "./chunk-qmkm2x59.js";
import "./chunk-v19xty83.js";
import "./chunk-7c3thgax.js";
import "./chunk-xt4k95hv.js";
import { wu } from "./chunk-dc0nzty2.js";
import "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
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
import "./chunk-6xjawpfq.js";
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
import "./chunk-jwqtbev0.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import { PV, jt } from "./chunk-ajtyjx88.js";
import "./chunk-at88wjsn.js";
import "./chunk-95k4nfdh.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-rj6gws00.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-6z6dbjsw.js";
import "./chunk-tzrn3e6a.js";
import { Yv, zd } from "./chunk-07aq7e5p.js";
import "./chunk-yw4wqxm9.js";
import { xBo } from "./chunk-bxxdf8d7.js";
import "./chunk-m18k9mtt.js";
import "./chunk-3hjc969z.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var u = 1500;
async function D(r, e) {
  let d = PV(),
    c = d ? null : (zd() ?? Yv());
  if (!d && !c?.recordCreatedPR) return;
  if (r.provider !== "github") return;
  if (_t()) return;
  let n = r.prRepository.indexOf("/"),
    s = r.prRepository.slice(0, n),
    a = r.prRepository.slice(n + 1),
    p = await wu(e),
    l = p === "HEAD" ? "" : p;
  try {
    if (c?.recordCreatedPR) {
      let o = await c.recordCreatedPR({ owner: s, repo: a, prNumber: r.prNumber, headRef: l }, u);
      if (o.ok) _(o.status);
      else if ("skipped" in o) R(o.skipped);
      else C(o.kind, o.status);
      return;
    }
    let i = await jt.post(
      xBo,
      { owner: s, repo: a, pr_number: r.prNumber, head_ref: l },
      {
        auth: "session-jwt",
        host: "ccr-session",
        headers: { "anthropic-version": "2023-06-01" },
        timeout: u
      }
    );
    if (!i.ok) {
      R(i.reason);
      return;
    }
    _(i.status);
  } catch (i) {
    let { kind: o, status: P } = ui(i);
    C(o, P);
  }
}
function _(r) {
  (g("ccr_record_created_pr"), t(`recordCreatedPrToCcr: RecordCreatedPR -> ${r}`));
}
function R(r) {
  (f("ccr_record_created_pr", r), t(`recordCreatedPrToCcr: skipped (${r})`));
}
function C(r, e) {
  if (e === 404 || e === 501) f("ccr_record_created_pr", "not_deployed");
  else m("ccr_record_created_pr", `${r}${e ? `_${e}` : ""}`);
  t(`recordCreatedPrToCcr: RecordCreatedPR failed: ${r}${e ? ` ${e}` : ""}`);
}
export { D as recordCreatedPrToCcr };

//# sourceMappingURL=chunk-5t0tcb8t.js.map
