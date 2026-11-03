// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { es, FM, NSe } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Vo, t } from "./chunk-4kxznmzw.js";
import { k4e, dE } from "./chunk-nrysaqwk.js";
import { Uzo } from "./chunk-h2tyaevk.js";
import { sd } from "./chunk-6jbh8yja.js";
import { O2 } from "./chunk-pxvxgfdj.js";
import { closeSync as c, openSync as d } from "fs";
import { devNull as g } from "os";
class p {
  line;
}
var l = new W(() => new p());
function lao(e = 0) {
  {
    if (!process.argv.includes("--session-tunnel") || !sd()) return;
    O2((u) => t(`[session tunnel] ${u}`, { level: "warn" }));
    let o = k4e(e, "the session tunnel's line of JSON") ?? void 0;
    es(l).line = o;
    let f = d(g, "r");
    if (f !== e) c(f);
    let n;
    try {
      n = Vo(o ?? "null");
    } catch {
      n = null;
    }
    let r = typeof n?.oauth_token === "string" ? n.oauth_token.trim() : "",
      i = typeof n?.agent_proxy_token === "string" ? n.agent_proxy_token.trim() : "";
    if (r !== "") (dE(), FM(r), NSe("CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR"));
    let a =
        typeof n?.env === "object" && n.env !== null && !Array.isArray(n.env)
          ? Object.entries(n.env)
          : [],
      s = {};
    for (let [u, m] of a) if (typeof m === "string") s[u] = m;
    return (
      Uzo(s),
      t(
        `[session tunnel] the line has ${r === "" ? "no" : "an"} OAuth token, ${i === "" ? "no" : "an"} agent proxy token; variables: ${Object.keys(s).length} of ${a.length}`
      ),
      i === "" ? void 0 : i
    );
  }
  return;
}
function jki() {
  return es(l).line;
}
function dao() {
  let e = es(l),
    o = e.line;
  return ((e.line = void 0), o);
}
export { lao, jki, dao };

//# sourceMappingURL=chunk-r4yya6cc.js.map
