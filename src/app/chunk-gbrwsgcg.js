// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { oBt } from "./chunk-z0mss2jj.js";
import { m_ } from "./chunk-wr0p4ndg.js";
import { $a } from "./chunk-2bsye2b3.js";
import { le } from "./chunk-vw9e882a.js";
var Ffs = 30000,
  NW = "bridge-failed",
  Jlt = "disabled after repeated failures \xB7 restart to retry",
  Iro = "Remote Control not started here";
function Ufs(t, { crossSessionMessaging: e }, r = new Date()) {
  let n =
    t.startedAt > 0 && t.startedAt <= r.getTime()
      ? ` (started ${m_(new Date(t.startedAt), { now: r })})`
      : "";
  return `${Iro} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${e ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xB7 run /remote-control to move it to this terminal`;
}
var Oro = 150;
function C6e() {
  let t = new Date(),
    e = String(t.getHours()).padStart(2, "0"),
    r = String(t.getMinutes()).padStart(2, "0"),
    n = String(t.getSeconds()).padStart(2, "0");
  return `${e}:${r}:${n}`;
}
function qIn(t, e) {
  return `${oBt(void 0, e)}/code?environment=${t}`;
}
function Mro(t, e) {
  let r = e + 20;
  return e + 10 - (t % r);
}
function _Pt(t, e) {
  let r = le(t),
    n = e - 1,
    i = e + 1;
  if (n >= r || i < 0) return { before: t, shimmer: "", after: "" };
  let g = Math.max(0, n),
    s = 0,
    c = "",
    a = "",
    l = "";
  for (let { segment: o } of $a().segment(t)) {
    let u = le(o);
    if (s + u <= g) c += o;
    else if (s > i) l += o;
    else a += o;
    s += u;
  }
  return { before: c, shimmer: a, after: l };
}
var m = { label: "/rc failed", color: "error" },
  d = { label: "/rc reconnecting", color: "warning" },
  f = { label: "/rc active", color: "success" },
  p = { label: "/rc connecting\u2026", color: "warning" };
function R6e({ error: t, connected: e, sessionActive: r, reconnecting: n }) {
  if (t) return m;
  if (n) return d;
  if (r || e) return f;
  return p;
}
function o9t(t) {
  return `Code anywhere with the Claude mobile app or ${t}`;
}
var Bfs = "Or ask Claude to work in this folder from your projects on claude.ai";
function s9t(t) {
  return `Continue coding in the Claude mobile app or ${t}`;
}
var Dro = "Run /remote-control to retry";
function jfs(t, e) {
  return `\x1B]8;;${e}\x07${t}\x1B]8;;\x07`;
}
export { Ffs, NW, Jlt, Iro, Ufs, Oro, C6e, qIn, Mro, _Pt, R6e, o9t, Bfs, s9t, Dro, jfs };

//# sourceMappingURL=chunk-gbrwsgcg.js.map
