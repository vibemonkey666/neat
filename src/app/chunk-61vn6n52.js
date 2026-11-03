// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { xe } from "./chunk-pnyqvnxs.js";
import { Gt, be, ee, j } from "./chunk-bq35vvkw.js";
import { Fyn } from "./chunk-5b88xb0z.js";
j();
var zI = Gt(null),
  Rgr = Gt(null),
  xgr = Gt(null);
function $8t() {
  let e = be(xgr);
  if (!e)
    throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");
  return e;
}
var Pgr = Gt(null);
function Yq() {
  let e = be(Pgr);
  if (!e)
    throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");
  return e;
}
function Qw() {
  let e = be(Rgr);
  if (!e)
    throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");
  return e;
}
function t() {
  let e = be(zI);
  if (!e)
    throw ReferenceError(
      "useAppState/useSetAppState cannot be called outside of an <AppStateProvider />"
    );
  return e;
}
function K(e) {
  let n = t();
  return xe(n, e);
}
function Gn() {
  return t().setState;
}
function Yno() {
  let e = t();
  return ee(() => Fyn(e.setState), [e]);
}
function xr() {
  return t();
}
function qo(e) {
  return xe(be(zI), e);
}
export { zI, Rgr, xgr, $8t, Pgr, Yq, Qw, K, Gn, Yno, xr, qo };

//# sourceMappingURL=chunk-61vn6n52.js.map
