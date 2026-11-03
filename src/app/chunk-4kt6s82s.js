// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { fl } from "./chunk-at88wjsn.js";
import { x, Fe } from "./chunk-a2y39866.js";
var d = x(function (i) {
  Object.defineProperty(i, "__esModule", { value: !0 });
  i.getMachineId = void 0;
  var t = Fe("fs"),
    r = fl();
  async function s() {
    let c = ["/etc/machine-id", "/var/lib/dbus/machine-id"];
    for (let a of c)
      try {
        return (await t.promises.readFile(a, { encoding: "utf8" })).trim();
      } catch (e) {
        r.diag.debug(`error reading machine id: ${e}`);
      }
    return;
  }
  i.getMachineId = s;
});
export default d();

//# sourceMappingURL=chunk-4kt6s82s.js.map
