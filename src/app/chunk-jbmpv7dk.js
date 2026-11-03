// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Bhn } from "./chunk-h1hx6twe.js";
import { fl } from "./chunk-at88wjsn.js";
import { x } from "./chunk-a2y39866.js";
var o = x(function (c) {
  Object.defineProperty(c, "__esModule", { value: !0 });
  c.getMachineId = void 0;
  var i = Bhn(),
    n = fl();
  async function u() {
    try {
      let t = (await i.execAsync('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout
        .split(
          `
`
        )
        .find((d) => d.includes("IOPlatformUUID"));
      if (!t) return;
      let r = t.split('" = "');
      if (r.length === 2) return r[1].slice(0, -1);
    } catch (e) {
      n.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  c.getMachineId = u;
});
export default o();

//# sourceMappingURL=chunk-jbmpv7dk.js.map
