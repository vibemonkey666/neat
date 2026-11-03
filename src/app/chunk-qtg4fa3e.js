// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { m } from "./chunk-brszmkb3.js";
import { vl } from "./chunk-6xjawpfq.js";
import { Rqr } from "./chunk-ajtyjx88.js";
import { O0 } from "./chunk-vbnb89qh.js";
import { join as f } from "path";
var p = 5;
class uGt extends Error {
  constructor() {
    super("OAuth refresh lock contention: another process is holding the refresh lock");
    this.name = "OauthSlotLockContendedError";
  }
}
async function d7n(o, n) {
  if (J())
    throw (
      m("oauth_token_refresh", "oauth_slot_refresh_diskless"),
      Error("This hosted session (claude-code-server) cannot refresh an OAuth token")
    );
  let s = O0();
  await ie().mkdir(s);
  let i = f(s, o),
    a = !1,
    r,
    l = 0;
  while (!r) {
    l++;
    try {
      r = await vl(i, {
        lockfilePath: i,
        realpath: !1,
        stale: 60000,
        update: 5000,
        onCompromised: (e) => {
          ((a = !0), t(`OAuth refresh lock ${o} compromised: ${e.message}`, { level: "error" }));
        }
      });
    } catch (e) {
      if (e.code === "ELOCKED") {
        if (l < p) {
          await X(1000 + Math.random() * 1000);
          continue;
        }
        throw new uGt();
      }
      throw e;
    }
  }
  let c = { isCompromised: () => a },
    h = Rqr();
  try {
    return await n(c);
  } finally {
    try {
      try {
        await r();
      } catch (e) {
        t(`OAuth refresh lock ${o} release failed: ${d(e)}`, { level: "error" });
      }
    } finally {
      h();
    }
  }
}
export { uGt, d7n };

//# sourceMappingURL=chunk-qtg4fa3e.js.map
