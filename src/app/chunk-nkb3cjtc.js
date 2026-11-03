// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ye } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { W9 } from "./chunk-5rw2zfa0.js";
import { Y } from "./chunk-arw2bgak.js";
import { nf } from "./chunk-ajtyjx88.js";
import { mLt, eEo, lJe, fi, G3, fm } from "./chunk-j0tbz6ra.js";
import { Dr, yKe } from "./chunk-kc27mwew.js";
import { vp } from "./chunk-pbffp8rf.js";
import { htt, DLe, vzr } from "./chunk-gjpjdnzc.js";
import { KW, SN, lMt, Ive, uNn } from "./chunk-5hjs1kac.js";
async function VB(r) {
  let n = performance.now(),
    o = !1,
    e,
    a = Ive(),
    i = !1;
  if (uNn())
    (t(
      "[mcp-policy-cold-start] waiting on remote managed-settings confirmation (managedMcpServers is withheld from the unverified cache)"
    ),
      (e = performance.now()),
      await SN(),
      (o = !0),
      (i = !0));
  else if (!a && !DLe()) ;
  else if (r.hasDynamicMcpConfig || !r.pluginStateReliable || ye() || (await m(r.storageV5))) {
    if (a)
      (t("[mcp-policy-cold-start] waiting on remote managed-settings load"),
        (e = performance.now()),
        await KW(),
        (o = !0));
    i = !0;
  } else t("[mcp-policy-cold-start] skipped \u2014 no MCP server source visible");
  if (e !== void 0 && yKe("mcp_policy_settings_wait_ms") === void 0) {
    let s = performance.now() - e,
      c = lMt();
    Dr("mcp_policy_settings_wait_ms", s, e);
    let d = c ? "timed_out" : Ive() || uNn() ? "load_failed" : "ok";
    Y(d === "ok" ? "info" : "warn", "mcp_policy_settings_wait", {
      waited_ms: Math.round(s),
      timed_out: c,
      outcome: d,
      ...(W9() && { stored_copy: "not_read" })
    });
  }
  if (
    (htt("settings", () => (!o ? "not_awaited" : lMt() ? "timed_out" : "completed"), {
      since: o ? n : void 0
    }),
    i && DLe())
  ) {
    if (
      (t(
        "[mcp-policy-cold-start] waiting on the policy-limits verdict (compliance taints feed config ${VAR} expansion)"
      ),
      (await vzr()) === "timed_out")
    )
      t(
        "[mcp-policy-cold-start] policy-limits verdict did not land within the cold-start budget; loading MCP configs without it"
      );
  }
}
async function m(r) {
  for (let n of G3) if (Object.keys(fm(n, { expandVars: !1 }).servers).length > 0) return !0;
  if (lJe()) return !0;
  try {
    for (let { record: e } of eEo(mLt()))
      for (let [a, i] of Object.entries(e ?? {}))
        if ((i === !0 || Array.isArray(i)) && !vp(a)) return !0;
    let { enabled: n, errors: o } = await fi(r);
    if (o.length > 0) return !0;
    for (let e of n)
      if (!e.isBuiltin || (e.mcpServers !== void 0 && Object.keys(e.mcpServers).length > 0))
        return !0;
  } catch {
    return !0;
  }
  return nf();
}
export { VB };

//# sourceMappingURL=chunk-nkb3cjtc.js.map
