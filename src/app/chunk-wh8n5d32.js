// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { kd } from "./chunk-bh50mq9d.js";
import { Dw } from "./chunk-ajtyjx88.js";
import { readFile as s } from "fs/promises";
class o {
  firedSites = new Set();
  fire(e) {
    if (this.firedSites.has(e)) return;
    (this.firedSites.add(e), a("tengu_dead_probe_adopt_ticks_token", { site: c(e) }));
  }
  reset() {
    this.firedSites.clear();
  }
}
var l = new W(() => new o());
function f() {
  return l.of(U().host);
}
function Hno(e) {
  f().fire(e);
}
async function T8t(e) {
  try {
    let t = await s(`/proc/${e}/stat`, "utf-8"),
      r = t.lastIndexOf(")"),
      n = t.slice(r + 2).split(" "),
      i = Number(n[19]);
    return Number.isFinite(i) ? i : null;
  } catch {
    return null;
  }
}
async function Plt(e, t, r) {
  if (r !== void 0) {
    if ((await kd(e, { skipCache: !0 })) !== r) return;
  } else if (t !== void 0) {
    if ((Hno("kill_gate"), (await T8t(e)) !== t)) return;
  } else return;
  await Dw(e, "SIGTERM").catch(() => {});
}
export { Hno, T8t, Plt };

//# sourceMappingURL=chunk-wh8n5d32.js.map
