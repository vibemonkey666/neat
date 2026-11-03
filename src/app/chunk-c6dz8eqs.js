// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { _ } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { yWr, _Wr, bWr } from "./chunk-wany0nxw.js";
import { MOn, Aoo } from "./chunk-hhwwdjaf.js";
import { udt } from "./chunk-e1t9hs0f.js";
import { statfs as u } from "fs/promises";
import { availableParallelism as d, totalmem as p } from "os";
var c = ["gcloud", "aws", "az", "gh", "brew", "apt", "sqlite3", "ffmpeg", "rg", "jq"],
  s = 2000,
  a = 2n ** 30n;
function ahr() {
  try {
    return udt() && MOn("basic") !== "off";
  } catch (t) {
    return (l(N(t)), !1);
  }
}
async function nki(t) {
  try {
    if (!ahr()) return;
    let [e, r] = await Promise.all([
      Aoo({ includeMcpServers: !1, signal: AbortSignal.timeout(s), alsoLookFor: c, maxTools: yWr }),
      Pe(u(t, { bigint: !0 }), s).catch(() => {
        return;
      })
    ]);
    if (e === void 0) {
      m("remote_tools_host_inventory", "unsupported_platform");
      return;
    }
    let n = r === void 0 ? -1n : r.bavail * r.bsize;
    if (!e.complete) f("remote_tools_host_inventory", "deadline");
    else if (n < 0n) f("remote_tools_host_inventory", "disk_unread");
    else g("remote_tools_host_inventory");
    let i = {
        ...(!e.complete && { incomplete: !0 }),
        cpus: d(),
        memory_gb: Math.round(p() / Number(a)),
        ...(n >= 0n && { disk_free_gb: Math.min(Number(n / a), _Wr) })
      },
      o = e.profile.tools;
    while (o.length > 0 && _({ tools: o, ...i }).length > bWr) o = o.slice(0, -1);
    return { tools: o, ...i };
  } catch (e) {
    (l(N(e)), m("remote_tools_host_inventory", "error"));
    return;
  }
}
export { ahr, nki };

//# sourceMappingURL=chunk-c6dz8eqs.js.map
