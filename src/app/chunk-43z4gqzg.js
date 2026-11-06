import {
  fileURLToPath as __sourceFilePath_1a86d702f36446a2,
  URL as __sourceFilePath_1a86d702f36446a2_URL
} from "node:url";
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
import { b, c } from "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { Xzo } from "./chunk-3h5x2j7k.js";
import { Zs } from "./chunk-4cgvah10.js";
import { qi } from "./chunk-rh5ymkjp.js";
import "./chunk-ajtyjx88.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-dc0nzty2.js";
import "./chunk-brszmkb3.js";
import "./chunk-ak0cmk10.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-rhk37je5.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-qmkm2x59.js";
import "./chunk-4nzy53ma.js";
import "./chunk-qakn3b85.js";
import "./chunk-zf79f62g.js";
import "./chunk-c3npf81n.js";
import "./chunk-zem4yd4w.js";
import "./chunk-exz0w70z.js";
import "./chunk-gg53p5cf.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-6xjawpfq.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-95k4nfdh.js";
import "./chunk-at88wjsn.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-rj6gws00.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import { NO } from "./chunk-1p2e13sm.js";
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
function n(t, e) {
  if (!qi().claim("mcp_tree_id_tripwire")) return;
  Xzo(
    Zs("tengu_mcp_tripwire", {
      expected: c(t),
      loaded: e === "v1" || e === "v2" ? c(e) : b("other")
    }).catch(() => {})
  );
}
function m() {
  if (NO() === "v2") {
    let i = import.meta.require(
        __sourceFilePath_1a86d702f36446a2(
          new __sourceFilePath_1a86d702f36446a2_URL("./chunk-r4g83g7p.js", import.meta.url)
        )
      ),
      o = i.MCP_TREE_ID;
    if (o !== "v2")
      throw (
        n("v2", o),
        Error(
          "MCP runtime accessor tripwire: resolved generation is v2 but the loaded client module does not carry MCP_TREE_ID v2"
        )
      );
    return i;
  }
  let t = import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-34bfdsb0.js", import.meta.url)
      )
    ),
    e = t.MCP_TREE_ID;
  if (e !== "v1")
    throw (
      n("v1", e),
      Error(
        "MCP runtime accessor tripwire: resolved generation is v1 but the loaded client module does not carry MCP_TREE_ID v1"
      )
    );
  return t;
}
function d() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-r4g83g7p.js", import.meta.url)
      )
    ).createSep2663TaskBinding;
  return;
}
function l() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-sv7we1qf.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-rtcb5ftx.js", import.meta.url)
    )
  );
}
function y() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-yey2xw14.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-axdscm7y.js", import.meta.url)
    )
  );
}
function _() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-g4hrqh92.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-4dq0v2z7.js", import.meta.url)
    )
  );
}
function v() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-7aw9bk05.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-evc20fm1.js", import.meta.url)
    )
  );
}
function j() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-dx6ja2cy.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-zj2z3dee.js", import.meta.url)
    )
  );
}
function M() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-8kdat012.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-f5fmsabz.js", import.meta.url)
    )
  );
}
function E() {
  if (NO() === "v2")
    return import.meta.require(
      __sourceFilePath_1a86d702f36446a2(
        new __sourceFilePath_1a86d702f36446a2_URL("./chunk-cydng5ke.js", import.meta.url)
      )
    );
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-pvh2gz0a.js", import.meta.url)
    )
  );
}
function h() {
  return import.meta.require(
    __sourceFilePath_1a86d702f36446a2(
      new __sourceFilePath_1a86d702f36446a2_URL("./chunk-qy2abh3b.js", import.meta.url)
    )
  );
}
export {
  n as emitTripwireEvent,
  l as mcpAuthModule,
  m as mcpClientModule,
  j as mcpDirectoryReadModule,
  y as mcpElicitationHandlerModule,
  M as mcpIsListAuthErrorModule,
  v as mcpSdkErrorClassificationModule,
  d as mcpSep2663TaskBinding,
  h as mcpSkillsListModule,
  _ as mcpTaskWatcherModule,
  E as mcpXaaIdpLoginModule
};

//# sourceMappingURL=chunk-43z4gqzg.js.map
