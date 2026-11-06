import {
  fileURLToPath as __sourceFilePath_13dadc6b101fd520,
  URL as __sourceFilePath_13dadc6b101fd520_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xt } from "./chunk-qakn3b85.js";
import { hJ } from "./chunk-syntvyhn.js";
import { ir, Ul } from "./chunk-j0tbz6ra.js";
function s() {
  return import.meta
    .require(
      __sourceFilePath_13dadc6b101fd520(
        new __sourceFilePath_13dadc6b101fd520_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule();
}
async function aae(e, c, d) {
  let i = ir(e.name, e.config),
    {
      captureDiscoveryGrantLeg: h,
      ensureDiscoveryCacheAccount: l,
      getMcpIdentityEpoch: f,
      persistRefreshedToolsIfPresent: m
    } = s();
  l();
  let a = Ul() ? h(e.name, e.config) : void 0,
    n = xt().toolRefreshSequences,
    r = n.get(e) ?? { started: 0, applied: 0 };
  (n.set(e, r), (r.started += 1));
  let p = r.started,
    { fetchToolsForClient: t } = s(),
    v = t.cache.get(i),
    g = f();
  t.cache.delete(i);
  let o = await t(e, d),
    u = s().getToolsListErrorForResult(o);
  if (u) return { status: "kept-previous", error: u };
  if (e.discoveryAuthFailure && o.length === 0)
    return {
      status: "kept-previous",
      error:
        "the server rejected tool discovery as unauthorized \u2014 the user needs to authorize this connector (e.g. via /mcp) before its tools are available"
    };
  if (r.applied > p)
    return {
      status: "kept-previous",
      error:
        "superseded by a newer concurrent refresh of this server \u2014 the newer refresh result is the one applied"
    };
  if (((r.applied = p), c(e.name, hJ(e, o)), a))
    a.then((y) => m(e, o, { identityEpoch: g, grantLeg: y }));
  return { status: "refreshed", newTools: o, previousToolsPromise: v };
}
export { aae };

//# sourceMappingURL=chunk-3nrh7z4g.js.map
