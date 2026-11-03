// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-2qx8pe6s.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-jazcqqqr.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-ddpw2j06.js";
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
import "./chunk-nrysaqwk.js";
import "./chunk-ak0cmk10.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import "./chunk-8w2npe9a.js";
import { kr } from "./chunk-gw43xwvt.js";
import "./chunk-gvf25gp4.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-6jbh8yja.js";
var c = 25000;
function t() {
  process.exit(0);
}
function u(o, p) {
  let n = i.CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS || c,
    s = !1,
    r = (a) => {
      if ((p(), s))
        (kr(
          "warn",
          `${a} received while shutting down: not waiting any longer, closing open requests now and exiting`
        ),
          o.stop(),
          t());
      ((s = !0),
        kr(
          "info",
          `${a} received: shutting down. Refusing new connections; open requests get up to ${n / 1000}s to finish (set by CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS)`
        ));
      let d = n + 3000;
      (setTimeout(
        (e) => {
          (kr(
            "warn",
            `shutdown still not finished ${e / 1000}s after the signal: exiting now. Requests still open are cut and their spend may not be recorded`
          ),
            t());
        },
        d,
        d
      ).unref(),
        o.drain(n).then((e) => {
          (kr(
            e === 0 ? "info" : "warn",
            e === 0
              ? "shutdown complete: every open request finished, none was cut"
              : `drain window over after ${n / 1000}s: cut ${e} request(s) still open. Raise CLAUDE_GATEWAY_DRAIN_TIMEOUT_MS and the orchestrator's grace period together to give streams longer`
          ),
            t());
        }));
    };
  (process.prependListener("SIGTERM", () => r("SIGTERM")),
    process.prependListener("SIGINT", () => r("SIGINT")));
}
export { u as drainOnSignal };

//# sourceMappingURL=chunk-eh1wzg6h.js.map
