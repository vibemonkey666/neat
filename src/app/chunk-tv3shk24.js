// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { te } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { tii } from "./chunk-4b5gpbbs.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { readlinkSync as e } from "fs";
import { hostname as u } from "os";
class o {
  pidSpace = null;
  pidDomain = void 0;
  uidsCollapse = null;
}
var hqe = ve(new o(), (t) => {
  t.pidDomain = void 0;
});
function lbe() {
  if (hqe.pidSpace === null) {
    let t = "";
    try {
      t = e("/proc/self/ns/pid");
    } catch {
      t = "";
    }
    hqe.pidSpace = `${u()}${t === "" ? "" : "#" + t}`;
  }
  return hqe.pidSpace;
}
function hR() {
  return (
    (hqe.pidDomain ??= (async () => tii(O()))().catch((t) => {
      throw ((hqe.pidDomain = void 0), t);
    })),
    hqe.pidDomain
  );
}
import { timingSafeEqual as f } from "crypto";
import { readFile as a } from "fs/promises";
async function pkt(t) {
  try {
    let n = te(await a(t, "utf8"));
    if (n === null || typeof n !== "object") return;
    let i = {};
    if ("rvAuth" in n && typeof n.rvAuth === "string") i.rvAuth = n.rvAuth;
    if ("ptyAuth" in n && typeof n.ptyAuth === "string") i.ptyAuth = n.ptyAuth;
    if ("claimAuth" in n && typeof n.claimAuth === "string") i.claimAuth = n.claimAuth;
    return i;
  } catch {
    return;
  }
}
function A0(t, n) {
  if (typeof t !== "string" || !n || t.length === 0) return !1;
  let i = Buffer.from(t),
    r = Buffer.from(n);
  if (i.length !== r.length) return !1;
  return f(i, r);
}
export { hqe, lbe, hR, pkt, A0 };

//# sourceMappingURL=chunk-tv3shk24.js.map
