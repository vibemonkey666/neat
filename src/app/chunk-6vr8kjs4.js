import {
  fileURLToPath as __sourceFilePath_197dc91ed8365e93,
  URL as __sourceFilePath_197dc91ed8365e93_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xv } from "./chunk-wrtp8qz8.js";
import { wr } from "./chunk-jazcqqqr.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { zo } from "./chunk-zf79f62g.js";
import { ONe } from "./chunk-7c3thgax.js";
import { RS, qJ, DT, Io } from "./chunk-j0tbz6ra.js";
import { gas } from "./chunk-ycrnnn2z.js";
import { KR } from "./chunk-1t7vm9a1.js";
function $5t() {
  return qJ(zo);
}
async function YQr() {
  await Promise.all([KR(), ONe()]);
}
function XQr(e, r) {
  return gas(r.scope) && !Io(e);
}
function RFe(e, r) {
  return XQr(e, r) && !t(r);
}
function t(e) {
  return import.meta
    .require(
      __sourceFilePath_197dc91ed8365e93(
        new __sourceFilePath_197dc91ed8365e93_URL("./chunk-43z4gqzg.js", import.meta.url)
      )
    )
    .mcpClientModule()
    .isFirstPartyDesignServerConfig(e);
}
function JQr(e) {
  switch (e.type) {
    case void 0:
    case "stdio":
    case "http":
    case "sse":
    case "ws":
      return !0;
    case "sdk":
    case "sse-ide":
    case "ws-ide":
    case "claudeai-proxy":
      return !1;
  }
}
function i(e) {
  return Object.assign(RS(), Ko(e, JQr));
}
async function QQr({ storageV5: e } = {}) {
  if (xv() || wr()) return { configs: RS(), deniedBySettings: !1 };
  await YQr();
  let { servers: r } = await DT({}, { purpose: "deviceBridge", storageV5: e });
  return { configs: i(r), deniedBySettings: $5t() };
}
async function yCn(e = {}) {
  let { configs: r, deniedBySettings: o } = await QQr(e);
  return o ? RS() : r;
}
export { $5t, YQr, XQr, RFe, JQr, QQr, yCn };

//# sourceMappingURL=chunk-6vr8kjs4.js.map
