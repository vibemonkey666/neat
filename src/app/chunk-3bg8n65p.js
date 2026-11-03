// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { O9, ba } from "./chunk-ajtyjx88.js";
import { hr } from "./chunk-dc0nzty2.js";
import { Le, dy } from "./chunk-jazcqqqr.js";
import { Ji } from "./chunk-a16y5hcz.js";
import { Zo } from "./chunk-13nwb0xt.js";
import { m_ } from "./chunk-wr0p4ndg.js";
import { c2e, r1o, HS, N1r } from "./chunk-d5zj5299.js";
import { l4n, lln } from "./chunk-6h7ejyet.js";
import { hgt } from "./chunk-j0tbz6ra.js";
import { join as m } from "path";
function c(t) {
  return hr(t) !== null;
}
function xxn(t, o, n = "  ") {
  let r = m(Le(), "CLAUDE.md"),
    s = m(o, "CLAUDE.md"),
    i = m(o, ".claude", "CLAUDE.md"),
    p = m(o, "CLAUDE.local.md"),
    f = t.some((e) => e.path === r),
    g = t.some((e) => e.path === s),
    y = [
      ...t.filter((e) => e.type !== "AutoMem" && !hgt(e.path)).map((e) => ({ ...e, exists: !0 })),
      ...(f ? [] : [{ path: r, type: "User", content: "", exists: !1 }]),
      ...(g ? [] : [{ path: s, type: "Project", content: "", exists: !1 }])
    ],
    h = c(o),
    u = new Map();
  return y.map((e) => {
    let d = Zo(e.path),
      a = e.parent ? (u.get(e.parent) ?? 0) + 1 : 0;
    u.set(e.path, a);
    let b = a > 0 ? Ji(n, a - 1) : "",
      l =
        e.type === "User" && e.path === r
          ? "user"
          : e.type === "Project" && e.path === s
            ? "project"
            : a === 0 && e.type === "Project" && e.path === i
              ? "project-alt"
              : a === 0 && e.type === "Local" && e.path === p
                ? "local"
                : "other",
      M =
        l === "user"
          ? "User instructions"
          : l === "project"
            ? "Project instructions"
            : a > 0
              ? `${b}L ${d}`
              : d,
      R =
        e.type === "User"
          ? "Saved in ~/.claude/CLAUDE.md"
          : l === "project"
            ? `${h ? "Checked in at" : "Saved in"} ./CLAUDE.md`
            : e.parent
              ? "@-imported"
              : "";
    return { kind: l, path: e.path, label: M, description: R, exists: e.exists };
  });
}
function Pxn() {
  let t = [{ kind: "auto", path: ba(), label: "Open auto-memory folder", description: "" }];
  if (O9() && r1o())
    t.push({ kind: "team", path: HS(), label: "Open team memory folder", description: "" });
  return t;
}
function Ixn(t, o = (n) => n) {
  let n = [];
  for (let r of t)
    if (r.memory)
      n.push({
        kind: "agent",
        path: N1r(r.agentType, r.memory),
        label: `Open ${o(r.agentType)} agent memory`,
        description: `${r.memory} scope`
      });
  return n;
}
function jds() {
  let t = lln();
  if (t === "open" || t === "pending") return t;
  if (t === "account_off" || t === "local_memory_off") {
    let o = l4n();
    return o === "denied" ? "closed" : o;
  }
  return "closed";
}
function k5e() {
  return c2e();
}
function Wds() {
  return !1;
}
var Oxn = "can't be turned on here; use a session started outside Claude Code";
function Mxn({ enabled: t, modelDisabled: o, safeMode: n, raiseAllowed: r }) {
  if (o && !t)
    return { status: "unavailable for current model", detail: "", dim: !0, toggleable: !1 };
  if (n)
    return { status: "off in safe mode", detail: `${dy()} to re-enable`, dim: !0, toggleable: !1 };
  if (!t && !r) return { status: "off", detail: Oxn, dim: !0, toggleable: !1 };
  return { status: t ? "on" : "off", detail: "", dim: !1, toggleable: !o };
}
function Dxn({
  autoMemoryOn: t,
  enabled: o,
  running: n,
  lastDreamAt: r,
  raiseAllowed: s,
  heldDetail: i
}) {
  if (!t) return { status: "off while auto-memory is off", detail: "", dim: !0, toggleable: !1 };
  if (i !== void 0) return { status: o ? "on" : "off", detail: i, dim: !0, toggleable: !1 };
  if (!o && !s) return { status: "off", detail: Oxn, dim: !0, toggleable: !1 };
  let p = n ? "running" : r === null ? "" : r === 0 ? "never" : `last ran ${m_(new Date(r))}`;
  return { status: o ? "on" : "off", detail: p, dim: !1, toggleable: !0 };
}
export { xxn, Pxn, Ixn, jds, k5e, Wds, Oxn, Mxn, Dxn };

//# sourceMappingURL=chunk-3bg8n65p.js.map
