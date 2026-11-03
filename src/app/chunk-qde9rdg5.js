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
import { x, Fe } from "./chunk-a2y39866.js";
var u = x(function (n) {
  Object.defineProperty(n, "__esModule", { value: !0 });
  n.getMachineId = void 0;
  var r = Fe("fs"),
    i = Bhn(),
    t = fl();
  async function c() {
    try {
      return (await r.promises.readFile("/etc/hostid", { encoding: "utf8" })).trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    try {
      return (await i.execAsync("kenv -q smbios.system.uuid")).stdout.trim();
    } catch (e) {
      t.diag.debug(`error reading machine id: ${e}`);
    }
    return;
  }
  n.getMachineId = c;
});
export default u();

//# sourceMappingURL=chunk-qde9rdg5.js.map
