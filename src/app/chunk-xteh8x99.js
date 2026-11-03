// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { YSt } from "./chunk-5z6t3gwt.js";
import { randomBytes as o } from "crypto";
import { hostname as s } from "os";
var i = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/,
  a = /^[A-Za-z]{1,64}$/,
  c = /^([A-Za-z0-9][A-Za-z0-9._-]{0,63})\/([A-Za-z]{1,64})\/(\d{1,4})$/,
  m = 8,
  I = 64,
  d = 9999,
  r = { hostname: s, randomHex: (n) => o(n).toString("hex") };
function Yds(n = r) {
  return `dev-${n.randomHex(m)}`;
}
function XRt(n = r) {
  let [t = ""] = n.hostname().split(".");
  return YSt(t, I);
}
function Xds(n, t, e) {
  if (!i.test(n) || !a.test(t) || !Number.isInteger(e) || e < 0 || e > d)
    throw Error("cannot form a device hook id from these inputs");
  return `${n}/${t}/${e}`;
}
function pwe(n) {
  let t = c.exec(n);
  return t ? { instanceId: t[1], event: t[2], index: Number(t[3]) } : null;
}
export { Yds, XRt, Xds, pwe };

//# sourceMappingURL=chunk-xteh8x99.js.map
