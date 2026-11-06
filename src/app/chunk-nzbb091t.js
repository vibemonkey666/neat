import {
  fileURLToPath as __sourceFilePath_23489a956e190331,
  URL as __sourceFilePath_23489a956e190331_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { R } from "./chunk-fs43t96t.js";
import { p } from "./chunk-qmkm2x59.js";
import { air, hse } from "./chunk-5rw2zfa0.js";
import { $h } from "./chunk-qakn3b85.js";
import { Yi } from "./chunk-yvs3tmdx.js";
import { En } from "./chunk-errevp3y.js";
import { yt } from "./chunk-0bqrj5ah.js";
var l = new Set([
  "server/discover",
  "initialize",
  "notifications/initialized",
  "ping",
  "tools/list",
  "tools/call",
  "notifications/cancelled",
  "notifications/roots/list_changed"
]);
function rx(e) {
  return hse({ serverName: e.name }) ? new R(air, "hosted desktop reached past its tools") : void 0;
}
function tDe(e, o) {
  let t = rx(e);
  if (t === void 0) return;
  let i = o.send.bind(o);
  o.send = async (n, ...s) => {
    if (
      !("method" in n
        ? typeof n.method === "string" && l.has(n.method)
        : !Array.isArray(n) && "id" in n && ("result" in n || "error" in n))
    )
      throw t;
    return i(n, ...s);
  };
}
function c(e) {
  if (En(e.name) !== $h) return;
  let o = import.meta.require(
    __sourceFilePath_23489a956e190331(
      new __sourceFilePath_23489a956e190331_URL("./chunk-j49fgam8.js", import.meta.url)
    )
  );
  return o.refusesRemoteBrowserCallOutsideChecks(e.name)
    ? Promise.reject(
        new R(
          o.REMOTE_BROWSER_OUTSIDE_CHECKS_REFUSED,
          "cloud browser called outside its permission check"
        )
      )
    : void 0;
}
function r(e, o) {
  let t = rx(e) ?? void 0;
  return t && Promise.reject(t);
}
var d = "toolbox.text_blocks_left_out";
async function hG(e, o, t, i = !1) {
  let n = await (r(e, i ? o.name : void 0) ??
    c(e) ??
    import.meta
      .require(
        __sourceFilePath_23489a956e190331(
          new __sourceFilePath_23489a956e190331_URL("./chunk-43z4gqzg.js", import.meta.url)
        )
      )
      .mcpClientModule()
      .invokeToolRaw(e.client, o, t));
  if (
    n._meta?.[d] !== void 0 &&
    !(Array.isArray(n.content) && n.content.some((s) => s.type === "text"))
  )
    throw new R(
      `The result of MCP tool "${o.name}" on server "${e.name}" arrived without its text. A result that is too large arrives this way. The tool may have run: check whether it did before running it again, and when you run it again, ask for less data.`,
      "MCP tool result arrived without its text blocks"
    );
  return n;
}
function Wgt(e, o, t) {
  return (
    r(e) ??
    import.meta
      .require(
        __sourceFilePath_23489a956e190331(
          new __sourceFilePath_23489a956e190331_URL("./chunk-43z4gqzg.js", import.meta.url)
        )
      )
      .mcpClientModule()
      .readResourceRaw(e.client, o, t)
  );
}
function Ggt(e, o) {
  return (
    r(e) ??
    import.meta
      .require(
        __sourceFilePath_23489a956e190331(
          new __sourceFilePath_23489a956e190331_URL("./chunk-43z4gqzg.js", import.meta.url)
        )
      )
      .mcpClientModule()
      .listToolsRaw(e.client, o)
  );
}
var a = p(() => yt({}));
function rIo(e, o, t) {
  return (
    r(e) ??
    (o.method === "tools/call" ? c(e) : void 0) ??
    Yi(e.client).request(o, a(), { ...t, cacheMode: "bypass" })
  );
}
function $K(e, o, t) {
  import.meta
    .require(
      __sourceFilePath_23489a956e190331(
        new __sourceFilePath_23489a956e190331_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule()
    .onMcpNotification(e, o, t);
}
function ohe(e, o) {
  Yi(e.client).onclose = o;
}
function SFs(e, o) {
  let t = Yi(e.client),
    i = t.onclose;
  t.onclose = () => {
    (i?.(), o());
  };
}
function wFs(e, o) {
  return r(e) ?? Yi(e.client).notification(o);
}
function vFs(e, o) {
  Yi(e.client)?.transport?.onmessage?.(o);
}
export { rx, tDe, hG, Wgt, Ggt, rIo, $K, ohe, SFs, wFs, vFs };

//# sourceMappingURL=chunk-nzbb091t.js.map
