// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { jWr, qmn, SQn, wQn } from "./chunk-e7w635nh.js";
import { t } from "./chunk-4kxznmzw.js";
import { oE } from "./chunk-xt4k95hv.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { o, oe, u } from "./chunk-0bqrj5ah.js";
var _ = "anthropic/toolHostInterface";
function eCn() {
  return tCn();
}
function tCn() {
  let { version: e } = qmn;
  return { version: e, min_version: jWr(oE.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION, e) };
}
function Gvi() {
  let e = eCn(),
    n = oE.CLAUDE_CODE_MCP_SERVE_INTERFACE_MIN_VERSION;
  if (n !== void 0 && e?.min_version !== n)
    f("mcp_serve_tool_output", "launch_min_version_ignored", {
      launch_min_version: n,
      ...(e && { daemon_interface_version: e.version, daemon_interface_min_version: e.min_version })
    });
  return { experimental: e === void 0 ? {} : { [_]: e } };
}
var l = 100;
function zvi(e, n) {
  let i = mn(n) ? n[_] : void 0;
  if (i === void 0) return;
  let r = eCn();
  if (r === void 0) return;
  let s = typeof i === "string" && i.length <= l ? SQn(ot(i, !1)) : void 0,
    a =
      s === void 0
        ? "unreadable"
        : { peer_too_old: "session_too_old", self_too_old: "daemon_too_old", agreed: void 0 }[
            wQn(r, s).kind
          ];
  if (a === void 0) return;
  let d = `${e} was not run: ${s === void 0 ? "this server could not read the version of the interface that its caller stated with the call" : a === "session_too_old" ? `this session speaks version ${s.version} of the interface to this server, which works with version ${r.min_version} or later` : `this session works with version ${s.min_version} or later of the interface to this server, which speaks version ${r.version}`}. Retrying won't help: tell the user.`;
  return (
    t(`MCP server: ${d}`, { level: "warn" }),
    f("mcp_serve_tool_output", `caller_interface_${a}`, {
      daemon_interface_min_version: r.min_version
    }),
    { isError: !0, content: [{ type: "text", text: d }], _meta: { [_]: { refused: a, range: r } } }
  );
}
var O = p(() => u({ refused: o(), range: oe().optional() }));
export { eCn, tCn, Gvi, zvi };

//# sourceMappingURL=chunk-n4mqndb0.js.map
