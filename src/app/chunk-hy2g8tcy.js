// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { w } from "./chunk-7m7t89vx.js";
import { GI } from "./chunk-j32s98r9.js";
import { Zl } from "./chunk-3xhvyvev.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { Md } from "./chunk-ftfxe7en.js";
import { RQ, AG } from "./chunk-ce3m2y48.js";
import { qs } from "./chunk-y43e6aw3.js";
import { xW, lN, cc } from "./chunk-skanvern.js";
import { sIr, con, iQ } from "./chunk-j0tbz6ra.js";
import { ow } from "./chunk-rym69hf6.js";
import { alt } from "./chunk-qdz0773v.js";
import { eUe } from "./chunk-nnjtz66e.js";
import { slt, ilt } from "./chunk-a2a77szc.js";
import { llt, vg } from "./chunk-r9bthft1.js";
import { TA } from "./chunk-63zjsa96.js";
import { e, r } from "./chunk-f790ajz4.js";
import { XN } from "./chunk-jcn0axk8.js";
import { P, Bo, ee, j } from "./chunk-bq35vvkw.js";
import { ap } from "./chunk-m18k9mtt.js";
import { $r } from "./chunk-a2y39866.js";
var h = {};
$r(h, { PILL_INDENT_COLUMNS: () => b, ToolProgressHint: () => S, default: () => h });
j();
var g = "ctrl+b",
  B = "ctrl+x ctrl+b",
  _ = new Set([g, B].map((a) => AG(RQ(a))));
function D(a) {
  for (let o of a) {
    if (o.context !== "Task") continue;
    let m = AG(o.chord);
    if (o.action === "task:background") {
      if (!_.has(m)) return !0;
    } else if (o.action === null && _.has(m)) return !0;
  }
  return !1;
}
function U3t({ handler: a, isActive: o }) {
  let m = TA(),
    l = qs("task:background", "Task", g),
    d = Md(),
    c = d?.bindings,
    t = ee(() => (c ? D(c) : !1), [c]),
    u = Bo(a),
    p = !(m && !t);
  P(() => {
    if (!d || !o) return;
    return d.registerHandler({
      action: "task:background",
      context: "Task",
      handler: () => u(),
      singleKey: p
    });
  }, [d, o, p]);
  let f = t ? l : B,
    x =
      l === ""
        ? ""
        : i.terminal === "tmux"
          ? f
              .split(" ")
              .map((k) => (k === g ? `${g} ${g}` : k))
              .join(" ")
          : f;
  return { cohesionFixes: m, gateOnShortcut: x, resolvedShortcut: l };
}
var b = 5;
function z(t) {
  return t.props.hint === ""
    ? null
    : e(s, { paddingLeft: b, children: e(n, { dimColor: !0, children: t.props.hint }) });
}
var S = (a) => {
  let l = w(4),
    { toolUseId: o, hint: m } = a,
    d,
    c;
  if (l[0] !== m || l[1] !== o)
    ((d = () => ({ requestId: o, props: { tool_use_id: o, kind: "background_hint", hint: m } })),
      (c = [o, m]),
      (l[0] = m),
      (l[1] = o),
      (l[2] = d),
      (l[3] = c));
  else ((d = l[2]), (c = l[3]));
  return cc.useRenderHook(cc.useRenderInput("ToolProgress", d, c), z);
};
var O = 2,
  T = 160;
function Zpr(a) {
  let t = w(10),
    { toolUseId: o, keyOnly: m, onBackground: l } = a,
    d = m === void 0 ? !1 : m,
    c = ow(),
    u;
  if (t[0] !== l || t[1] !== c)
    ((u = () => {
      (iQ(c), l?.());
    }),
      (t[0] = l),
      (t[1] = c),
      (t[2] = u));
  else u = t[2];
  let p = u,
    f;
  if (t[3] !== p) ((f = { handler: p, isActive: !0 }), (t[3] = p), (t[4] = f));
  else f = t[4];
  let { cohesionFixes: x, gateOnShortcut: k } = U3t(f),
    U = qs("task:background", "Task", "ctrl+b"),
    y = x ? k : i.terminal === "tmux" && U === "ctrl+b" ? "ctrl+b ctrl+b (twice)" : U;
  if (d) {
    return null;
  }
  if (ap() || (x && y === "")) {
    return null;
  }
  let F;
  if (t[5] !== y)
    ((F = GI({ chord: y, action: "run in background", parens: !0, format: { keyCase: "lower" } })),
      (t[5] = y),
      (t[6] = F));
  else F = t[6];
  let R = F;
  if (R === "") {
    return null;
  }
  let A;
  if (t[7] !== R || t[8] !== o)
    ((A = e(h.ToolProgressHint, { toolUseId: o, hint: R })), (t[7] = R), (t[8] = o), (t[9] = A));
  else A = t[9];
  return A;
}
function xEi(a, { verbose: o, theme: m }) {
  let { command: l } = a;
  if (!l) return null;
  if (!o) {
    let d = l.split(`
`);
    if (Zl()) {
      let u = sIr(l);
      if (u) return u.length > T ? u.slice(0, T) + "\u2026" : u;
    }
    let c = d.length > O,
      t = l.length > T;
    if (c || t) {
      let u = l;
      if (c)
        u = d.slice(0, O).join(`
`);
      if (u.length > T) u = u.slice(0, T);
      return r(n, { children: [u.trim(), "\u2026"] });
    }
  }
  return l;
}
function PEi(a, { verbose: o, tools: m, terminalSize: l, inProgressToolCallCount: d }) {
  let c = a.at(-1);
  if (!c || !c.data) return ilt();
  let t = c.data;
  return e(eUe, {
    fullOutput: t.fullOutput,
    output: t.output,
    elapsedTimeSeconds: t.elapsedTimeSeconds,
    totalLines: t.totalLines,
    totalBytes: t.totalBytes,
    timeoutMs: t.timeoutMs,
    taskId: t.taskId,
    verbose: o
  });
}
function IEi() {
  return slt();
}
function OEi(a, o, { verbose: m, theme: l, tools: d, style: c, input: t }) {
  let p = o.at(-1)?.data?.timeoutMs,
    f =
      typeof t === "object" && t !== null && "command" in t && typeof t.command === "string"
        ? t.command
        : void 0;
  return e(alt, { content: a, verbose: m, timeoutMs: p, style: c, command: f });
}
function MEi(a, { verbose: o, progressMessagesForMessage: m, tools: l }) {
  return e(vg, { result: a, verbose: o });
}
function DEi(a, { columns: o }) {
  if (a.isImage) return !1;
  return (
    XN(a.stdout, o) ||
    XN(typeof a.stderr === "string" ? llt(a.stderr).trim().replace(con, "") : a.stderr, o)
  );
}
export { U3t, Zpr, xEi, PEi, IEi, OEi, MEi, DEi };

//# sourceMappingURL=chunk-hy2g8tcy.js.map
