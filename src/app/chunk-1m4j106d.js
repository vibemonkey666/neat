import {
  fileURLToPath as __filePath_9a6e0c03229a9467,
  URL as __filePath_9a6e0c03229a9467_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { rr } from "./chunk-ak0cmk10.js";
import { sy, bo, F5, lSn, A6o } from "./chunk-9zd34fgb.js";
import { u_, kRe, Kue } from "./chunk-jwqtbev0.js";
import { tZ } from "./chunk-ajtyjx88.js";
import { sbt } from "./chunk-07aq7e5p.js";
import { yAe } from "./chunk-2rr85c4a.js";
var zHn = "target is this session itself \u2014 there is no one else to send to",
  u = `address the main conversation as "${sy}"`;
function nOt(e) {
  let { ownMessagingSocket: s } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-w0prrq68.js", import.meta.url)
      )
    ),
    n = s();
  return n !== void 0 && kRe(e, n);
}
function qUe(e) {
  let { ownMessagingSocket: s } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-w0prrq68.js", import.meta.url)
      )
    ),
    n = s();
  return n !== void 0 && Kue(e, n);
}
function d(e) {
  let { ownMessagingSocket: s } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-w0prrq68.js", import.meta.url)
      )
    ),
    n = s(),
    t = F5(e);
  return n !== void 0 && t !== null && A6o(t.ref, n);
}
function NJt(e, s) {
  return d(e) && !nOt(s);
}
function $Jt(e) {
  return `'${e}' is the name-and-ref token this session advertises for ITSELF, yet a different session record on this machine claims it \u2014 not sent. A record impersonating this session is suspicious: ask the user. (If you meant yourself, there is no one to send to.)`;
}
function SSs(e) {
  return `Not sent \u2014 '${e}' is this session's own name and ref, but another session record on this machine claims it.`;
}
function v3e(e) {
  return `'${e}' is this session's own address \u2014 a message or file sent there would only come back to this conversation; there is no one else at that address to send to.`;
}
function gae(e) {
  let s = rr(e);
  return [sbt()?.bridgeSessionId, yAe()].some((n) => typeof n === "string" && rr(n) === s);
}
function lD(e) {
  return e.teammateContext !== void 0 || (e.agentContext !== void 0 && tZ(e.agentContext));
}
function _ct(e) {
  return `Not sent \u2014 '${e}' is this session's own name.`;
}
function rOt(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-tcbrmxh8.js", import.meta.url)
      )
    ),
    o = lSn(t()?.name),
    i = o === null ? "this session" : `this session ("${o}")`;
  return s
    ? `
('${e}' also addresses ${i} \u2014 this process's main session; to reach the main conversation from inside it, ${n}.)`
    : `
('${e}' also addresses ${i} itself \u2014 if you meant yourself, there is no one to send to.)`;
}
function oOt(e) {
  return (
    !e.cloudUnavailable &&
    !e.bridgeUnavailable &&
    !e.localUnavailable &&
    !e.searchTruncated &&
    !e.pinnedIdentityClaimedLocally
  );
}
function sOt(e) {
  let { getRegisteredSessionName: s, getHeldSessionNames: n } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-tcbrmxh8.js", import.meta.url)
      )
    ),
    { ownMessagingSocket: t } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-w0prrq68.js", import.meta.url)
      )
    ),
    o = s(),
    i = t();
  if (o === void 0 || i === void 0 || u_(e).scheme !== "other") return "no";
  let r = F5(e);
  if (r !== null) {
    let a = bo(r.name);
    if (!A6o(r.ref, i)) return "no";
    if (a !== bo(o.name)) {
      let c = n().get(a);
      if (c === void 0) return "no";
      return c === "derived" ? "categorical" : "note";
    }
  } else if (bo(e) !== bo(o.name)) return "no";
  let { getSessionNamingState: l } = import.meta.require(
    __filePath_9a6e0c03229a9467(
      new __filePath_9a6e0c03229a9467_URL("./chunk-2wwgcyx0.js", import.meta.url)
    )
  );
  return o.source === "derived" ||
    ((o.source === "user" || o.source === "collision") && l().userTypedName === o.name)
    ? "categorical"
    : "note";
}
function ete(e, s, n = u) {
  let { getRegisteredSessionName: t } = import.meta.require(
      __filePath_9a6e0c03229a9467(
        new __filePath_9a6e0c03229a9467_URL("./chunk-tcbrmxh8.js", import.meta.url)
      )
    ),
    o = lSn(t()?.name);
  if (s) {
    let i = o !== null ? ` ("${o}" is the name OTHER sessions use for it)` : "";
    return `'${e}' is this process's own main session${i} \u2014 from inside it, ${n} instead.`;
  }
  return o !== null
    ? `'${e}' is this session itself \u2014 "${o}" is the name other sessions use to message YOU; there is no one else by that name to send to.`
    : `'${e}' is this session itself \u2014 there is no one else at that address to send to.`;
}
export { zHn, nOt, qUe, NJt, $Jt, SSs, v3e, gae, lD, _ct, rOt, oOt, sOt, ete };

//# sourceMappingURL=chunk-1m4j106d.js.map
