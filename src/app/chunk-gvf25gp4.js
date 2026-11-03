// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xYe, LSe } from "./chunk-wrtp8qz8.js";
import { Pse, $3r, F3r } from "./chunk-nrysaqwk.js";
function s() {
  return $3r({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: Pse,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse,
    label: "token",
    fileLabel: "session ingress token",
    getCached: xYe,
    setCached: LSe,
    skipInReviewOrigin: !0
  });
}
async function uci(e) {
  if (process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN) return;
  await F3r({
    envVar: "CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",
    wellKnownPath: Pse,
    readPath: process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE ?? Pse,
    label: "token",
    fileLabel: "session ingress token",
    getCached: xYe,
    setCached: LSe,
    credentials: e,
    skipInReviewOrigin: !0
  });
}
function od() {
  let e = process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;
  if (e) return e;
  return s();
}
function y$e() {
  return od() !== null;
}
function eW() {
  let e = od();
  if (!e) return {};
  if (e.startsWith("sk-ant-sid")) {
    let n = { Cookie: `sessionKey=${e}` },
      r = process.env.CLAUDE_CODE_ORGANIZATION_UUID;
    if (r) n["X-Organization-Uuid"] = r;
    return n;
  }
  return oxe(e);
}
function oxe(e) {
  return e ? { Authorization: `Bearer ${e}` } : {};
}
function Sar(e) {
  process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN = e;
}
export { uci, od, y$e, eW, oxe, Sar };

//# sourceMappingURL=chunk-gvf25gp4.js.map
