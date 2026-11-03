// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, xit } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { ue, WEt } from "./chunk-ajtyjx88.js";
import { Ss } from "./chunk-1e5yp9hx.js";
import { ONe, QVt, ase, M0, Vz, J5 } from "./chunk-7c3thgax.js";
import { u8o, pwn } from "./chunk-52ssztep.js";
import { INe } from "./chunk-38g9s4wc.js";
import { noe } from "./chunk-h2tyaevk.js";
import { SQs } from "./chunk-238vvv39.js";
import { rzr } from "./chunk-fw8xqd84.js";
import { z } from "./chunk-p197ae0z.js";
class s {
  settingsLoaded = !1;
  helperResult = null;
  claimSettingsLoad() {
    if (this.settingsLoaded) return !1;
    return ((this.settingsLoaded = !0), !0);
  }
  beginHelperRun() {
    return ((this.helperResult = { error: null }), this.helperResult);
  }
}
var p = new W(() => new s());
function l() {
  return p.of(U().host);
}
async function NGt(t) {
  if (!l().claimSettingsLoad()) return;
  rzr();
  let e = z() ? t?.backend : void 0;
  if (z() && e !== void 0) {
    let [
      { seedUserSettings: o },
      { primeWindowsCredManBackendEnabled: i },
      { primeRemoteManagedSettingsCache: a },
      { primeWorkspaceRoots: r }
    ] = await Promise.all([
      import("./chunk-epqaqtk4.js"),
      import("./chunk-ab0q740z.js"),
      import("./chunk-atrc3zha.js"),
      import("./chunk-cje0q6ms.js")
    ]);
    (await r(e),
      await Promise.all([WEt(e), o(e, Ss())]),
      i(ue().cachedGrowthBookFeatures?.tengu_windows_credman === !0),
      await a(e));
  } else await WEt();
  if ((await ONe(), await pwn(u8o), z() && e !== void 0)) {
    let [
        { credentialsStoreFor: o },
        { primeFileDescriptorCredentials: i },
        { primeStoredLoginCopy: a }
      ] = await Promise.all([
        import("./chunk-f2e9c2ck.js"),
        import("./chunk-3yehhs3s.js"),
        import("./chunk-8amfvyqf.js")
      ]),
      r = o(e);
    if (r !== void 0) (await i(r, { bgAuthSnapshot: "leave" }), await a(r));
  }
  (xit(INe), noe());
  let n = SQs();
  if (n)
    (process.stderr.write(`${n}
`),
      process.exit(1));
}
async function F7n() {
  let t = l();
  if (t.helperResult) return t.helperResult.error;
  let e = t.beginHelperRun();
  if (((e.error = await QVt(M0(), Vz(), J5())), ase())) noe();
  return e.error;
}
async function Mzo(t) {
  return (await NGt(t), F7n());
}
export { NGt, F7n, Mzo };

//# sourceMappingURL=chunk-rg29ns8n.js.map
