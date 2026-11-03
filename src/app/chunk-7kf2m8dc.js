import {
  fileURLToPath as __filePath_7aae3e1aa6a2277c,
  URL as __filePath_7aae3e1aa6a2277c_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { k } from "./chunk-ajtyjx88.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-dc0nzty2.js";
import "./chunk-4cgvah10.js";
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
import { Ks, Gkt, zz } from "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import { Wp } from "./chunk-rj6gws00.js";
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
import { P$, aS } from "./chunk-pbffp8rf.js";
import "./chunk-1hp0t8kv.js";
import "./chunk-m5htsswa.js";
import "./chunk-9bs4nz62.js";
import "./chunk-mg0tfavz.js";
import "./chunk-pdcz0wmt.js";
import "./chunk-s6fbb5tf.js";
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
import { x, $r } from "./chunk-a2y39866.js";
import "./chunk-6jbh8yja.js";
var u = x(function (F, m) {
  m.exports = {
    scan: {
      hooks: ["session.start", "session.attach", "prompt.section", "tool.call", "ui.render"],
      calls: [
        "clock.now",
        "clock.sleep",
        "env.get",
        "session.messages",
        "session.surfaces",
        "settings.read",
        "telemetry.log",
        "telemetry.mark",
        "tool.register",
        "ui.log",
        "ui.resolve"
      ],
      env: { reads: ["CLAUDE_AX_SCREEN_READER"], writes: [] }
    },
    files: {}
  };
});
var s = {};
$r(s, {
  PLUGIN_DESCRIPTION: () => o,
  SUPPLEMENTED_MODULE: () => l,
  availabilityFlag: () => e,
  default: () => s,
  isAvailable: () => t,
  isOnByDefault: () => r,
  registerPlugin: () => E
});
function e() {
  return "tengu_joyful_otter";
}
var l = {
  register: (a, i) =>
    import.meta
      .require(
        __filePath_7aae3e1aa6a2277c(
          new __filePath_7aae3e1aa6a2277c_URL("./chunk-dzh36vh3.js", import.meta.url)
        )
      )
      .register(a, i, {
        isReaderOn: () => Wp(),
        isBatchAwaited: () => k("tengu_virtual_toast", !1)
      })
};
var r = !1;
var c = new Set(["linux", "macos"]);
function t() {
  if (k(e(), r) !== !0) return !1;
  return (c.has(O()) || !1) && Gkt() && !zz() && !Ks("hipaa") && !Ks("zdr");
}
var o =
  "Draws charts in the transcript: a chart tool for Claude, and automatic charts for MCP results that are metrics over time";
var E = () =>
  aS({
    name: "cc-plugin-easel",
    description: o,
    isAvailable: t,
    hooksModule: P$(import.meta.dir, l, () => u()),
    userConfig: {
      autoCharts: {
        type: "boolean",
        title: "Auto charts",
        description:
          "Draw a chart under an MCP result that is metrics over time, without being asked. Off: only the charts Claude asks for.",
        required: !1,
        default: !0
      },
      autoChartSkip: {
        type: "string",
        title: "Auto charts: servers to skip",
        description:
          'MCP servers whose results never get an auto chart, separated by commas. A server is named as its tools name it: "grafana" for mcp__grafana__query.',
        required: !1,
        default: ""
      }
    }
  });
export {
  o as PLUGIN_DESCRIPTION,
  l as SUPPLEMENTED_MODULE,
  e as availabilityFlag,
  s as default,
  t as isAvailable,
  r as isOnByDefault,
  E as registerPlugin
};

//# sourceMappingURL=chunk-7kf2m8dc.js.map
