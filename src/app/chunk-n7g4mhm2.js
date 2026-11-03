// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q } from "./chunk-wrtp8qz8.js";
import { fc } from "./chunk-vchq4g74.js";
import { Sx, Aye } from "./chunk-nyp7c93y.js";
import { zd } from "./chunk-07aq7e5p.js";
import { Pg, Gan } from "./chunk-fnsjs1v2.js";
import { Yb, pze } from "./chunk-xq3dwnzp.js";
import { bf } from "./chunk-zjm5ncxc.js";
import { gin } from "./chunk-j0tbz6ra.js";
import { S8e } from "./chunk-68w4m6yn.js";
var c = ["default", "reset", "none", "gray", "grey"];
async function pAi(n, e, o) {
  return (n(await YEr(o, e), { display: "system" }), null);
}
async function YEr(n, e) {
  if (fc())
    return "Cannot set color: This session is a teammate. Teammate colors are assigned by the team leader.";
  let o = n?.trim() ?? "",
    t = o === "" ? Yb[Math.floor(Math.random() * Yb.length)] : o.toLowerCase(),
    r = c.includes(t);
  if (!r && !Yb.includes(t)) {
    let s = Yb.join(", ");
    return `Invalid color "${t}". Available colors: ${s}, default`;
  }
  let d = q(),
    m = bf(),
    i = r ? "default" : t,
    l = r ? void 0 : t;
  (await gin(d, i, m, e.storageV5), e.setAppState((s) => S8e(s, { color: l })));
  let a = e.getAppState(),
    g = a.agent ? a.agentDefinitions.activeAgents.find((s) => s.agentType === a.agent) : void 0;
  return (
    Gan(Pg(), pze({ userOverride: l, agentDefinitionColor: g?.color }), e.storageV5),
    p(i, e.credentials),
    r ? "Session color reset to default" : `Session color set to: ${t}`
  );
}
function p(n, e) {
  let o = zd()?.bridgeSessionId;
  if (!o) return;
  let t = Sx();
  import("./chunk-dn6dwtyr.js").then(({ updateBridgeSessionColorTag: r }) =>
    r(o, n, Yb, { baseUrl: Aye(), getAccessToken: t ? () => t : void 0, credentials: e }).catch(
      () => {}
    )
  );
}
export { pAi, YEr };

//# sourceMappingURL=chunk-n7g4mhm2.js.map
