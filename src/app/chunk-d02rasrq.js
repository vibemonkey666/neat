import {
  fileURLToPath as __sourceFilePath_fcb4fa4d4ba9ce74,
  URL as __sourceFilePath_fcb4fa4d4ba9ce74_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Z } from "./chunk-p27rr8yn.js";
import { g, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { Pj } from "./chunk-ajtyjx88.js";
import { Id } from "./chunk-zf79f62g.js";
import { hd } from "./chunk-zem4yd4w.js";
import { cl } from "./chunk-ggnzxsv7.js";
import { xhe } from "./chunk-6h7ejyet.js";
import { Qct } from "./chunk-hgshn9e7.js";
import { Tun, kze } from "./chunk-7qstrcyg.js";
function c() {
  if (hd.isSelfHostedRunnerChild) return Pj;
  if (i.CLAUDE_CODE_REMOTE || i.CLAUDE_CODE_REMOTE_SESSION_ID) return null;
  if (Tun() === void 0 && !cl()) return null;
  return import.meta.require(
    __sourceFilePath_fcb4fa4d4ba9ce74(
      new __sourceFilePath_fcb4fa4d4ba9ce74_URL("./chunk-dyqwyx2x.js", import.meta.url)
    )
  ).isArtifactsMcpLaptopEntry;
}
function s(e) {
  let t = Tun();
  return t !== void 0 && e(t.config) ? t : void 0;
}
function u(e) {
  let t = s(e);
  if (t === void 0 || kze(t)) return !1;
  return t.type === "connected" || t.type === "cached";
}
function y() {
  return (
    import.meta
      .require(
        __sourceFilePath_fcb4fa4d4ba9ce74(
          new __sourceFilePath_fcb4fa4d4ba9ce74_URL("./chunk-ncp58mjd.js", import.meta.url)
        )
      )
      .artifactToolWithholdingGate() !== null
  );
}
function p() {
  return import.meta.require(
    __sourceFilePath_fcb4fa4d4ba9ce74(
      new __sourceFilePath_fcb4fa4d4ba9ce74_URL("./chunk-eatfga6h.js", import.meta.url)
    )
  ).MCP_ROW_TOOL_NAMES;
}
function A(e, t) {
  let n = p();
  return t.some((r) => r.mcpInfo?.serverName === Id && !n.includes(r.mcpInfo.toolName)) && u(e);
}
function cDn(e, t = e) {
  let n = c();
  if (n === null) return [...e];
  let r = () => e.filter((o) => o.mcpInfo?.serverName !== Id),
    a = s(n);
  if (a !== void 0 && (kze(a) || y())) return r();
  let T = p(),
    l = t.filter((o) => o.mcpInfo?.serverName === Id);
  if (l.length === 0 || l.some((o) => !T.includes(o.mcpInfo?.toolName ?? "")) || !u(n))
    return [...e];
  return r();
}
function lys(e, t) {
  if (!cl()) {
    let n = c();
    if (n === null || !A(n, t)) return [...e];
    let r = Z();
    ((r.builtInArtifactHiddenForMcp = !0),
      (r.autoReact.enabledMemo = !1),
      g("artifact_mcp_swap"),
      Qct(r.live),
      d());
  }
  return m(e);
}
function dys() {
  if (!cl()) return;
  let e = c();
  if (e === null) return;
  let t = s(e);
  if (t !== void 0 && kze(t)) f("artifact_mcp_swap", "entry_not_served");
  else
    switch (t?.type) {
      case void 0:
        f("artifact_mcp_swap", "entry_gone");
        break;
      case "failed":
        f("artifact_mcp_swap", "entry_failed");
        break;
      case "needs-auth":
        f("artifact_mcp_swap", "entry_needs_auth");
        break;
      case "connected":
      case "cached":
      case "pending":
      case "disabled":
        return;
      default:
        return;
    }
  let n = Z();
  ((n.builtInArtifactHiddenForMcp = !1),
    (n.autoReact.optIn = !1),
    (n.autoReact.wakeEnabledMemo = !1),
    Qct(n.live));
  for (let r of [...n.wakes.takenFrom.keys()])
    import("./chunk-eb6at7v2.js").then((a) => a.handBackTakenOverSlug(r));
  d();
}
function d() {
  import.meta
    .require(
      __sourceFilePath_fcb4fa4d4ba9ce74(
        new __sourceFilePath_fcb4fa4d4ba9ce74_URL("./chunk-w4af92p2.js", import.meta.url)
      )
    )
    .clearCommandMemoizationCaches();
}
function cys(e) {
  return cl() ? m(e) : [...e];
}
function aao(e) {
  if (xhe(e)) return !0;
  let t = import.meta.require(
    __sourceFilePath_fcb4fa4d4ba9ce74(
      new __sourceFilePath_fcb4fa4d4ba9ce74_URL("./chunk-ttpzppxt.js", import.meta.url)
    )
  ).APPIFACT_REPL_TOOL_NAME;
  return t !== void 0 && e.mcpInfo === void 0 && e.name === t;
}
function m(e) {
  return e.filter((t) => !aao(t));
}
export { cDn, lys, dys, cys, aao };

//# sourceMappingURL=chunk-d02rasrq.js.map
