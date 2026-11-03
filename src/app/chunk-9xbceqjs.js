// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn, ke, ao, WTn, bW } from "./chunk-wrtp8qz8.js";
import { Lcr } from "./chunk-s5htztrv.js";
import { lqe } from "./chunk-at88wjsn.js";
import { p } from "./chunk-qmkm2x59.js";
import { _ } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { ni, pot, Vs } from "./chunk-5rw2zfa0.js";
import { Ud } from "./chunk-d54avynm.js";
import { fe } from "./chunk-xe386mry.js";
import { Y } from "./chunk-arw2bgak.js";
import { er } from "./chunk-1e5yp9hx.js";
import { I5r, J5, ZV } from "./chunk-7c3thgax.js";
import { vp } from "./chunk-pbffp8rf.js";
import { _p, j8 } from "./chunk-p56qmwgb.js";
import { ure, wBt, w6n, fre } from "./chunk-xt7fs806.js";
import { oS } from "./chunk-rve8yzwm.js";
import { CJ, A3, vEo, uG, dKn, fgt, cRo, fRo, _Kn, Vge, fi } from "./chunk-j0tbz6ra.js";
import { Rn } from "./chunk-wany0nxw.js";
import { fQ } from "./chunk-6h7ejyet.js";
import { Ub } from "./chunk-pp7zwndm.js";
import { qYe, qJr } from "./chunk-myze9f54.js";
import { JYe } from "./chunk-w6j1j35n.js";
import { t3n } from "./chunk-80t8235z.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { Up } from "./chunk-t1ptejf0.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, v, M, oe, T, u, me, B } from "./chunk-0bqrj5ah.js";
import { isAbsolute as K, sep as V } from "path";
function Hcr() {
  return ZV() || I5r(J5()) !== void 0;
}
function z(n, { accountListing: e, lastCompleteList: s }, t, r) {
  try {
    if (!w6n()) return "sync_not_armed";
    if (!fre() || bW()) return "sync_off";
    if (e === "refused") return "listing_refused";
    if (s === null || t === null) return "unknown";
    let a = _p(n),
      i = new Set();
    for (let [d, h] of s.dirsById) for (let y of h) if (_p(Vge(y)) === a) i.add(d);
    if (i.size === 0) return "absent_from_listing";
    let c = t.find((d) => d.bucket === s.bucket && d.pluginId !== void 0 && i.has(d.pluginId));
    switch (c?.outcome) {
      case void 0:
        return "no_copy_at_load";
      case "held_back":
        return "held_back";
      case "not_loaded": {
        let d = pot(c.pluginName, ni);
        return r.some((h) => h.type === "synced-plugin-shadowed" && h.source === d)
          ? "local_copy_wins"
          : "not_loaded";
      }
      case "loaded":
        return "unknown";
    }
  } catch (a) {
    return (Y("warn", "plugins_sync_absence_unreadable"), l(a), "unknown");
  }
}
var vis = "RunPluginHook",
  Eis = "RunPluginHookIf",
  UJr = p(() =>
    u({
      pluginId: o(),
      hookEvent: B(Ud),
      command: o(),
      args: T(o()).optional(),
      if: o().optional(),
      timeout: v().positive().optional(),
      jsonInput: o(),
      hookIndex: v().int().nonnegative().optional()
    })
  ),
  G = p(() =>
    u({ session_id: o().regex(dKn), cwd: o(), effort: u({ level: o().regex(dKn) }).optional() })
  ),
  D = p(() => me(o(), oe())),
  J = /(?:^|_)(?:path|dir|cwd|directory)$/;
var q = new Set(["file_path", "trigger_file_path", "parent_file_path"]),
  E = 1048576;
var F = "this machine's policy cannot be read for now",
  X = "this machine's policy would stop claude from starting",
  C = "The hook printed more than is passed on.";
function N(n, e) {
  if (qYe(n) <= E) return n;
  let s = { ...n, output: C, repairedInput: void 0 };
  if (qYe(s) <= E) return s;
  let t = { ...s, stderr: C, ...(vEo(e, n.status) && { stdioClosedWithoutEnd: !0 }) };
  if (qYe(t) <= E) return t;
  if (n.status !== 2 && !n.stdioIncomplete && !n.stdioClosedWithoutEnd && A3.has(e) && !fgt(e))
    return {
      stdout: "",
      stderr: C,
      output: C,
      status: 1,
      spawnFailed: !0,
      ...(n.aborted && { aborted: !0 })
    };
  let r = { ...t, stdout: "", stdioClosedWithoutEnd: !0 },
    a = { ...r, stderr: n.stderr };
  return n.stderr !== "" && qYe(a) <= E ? a : r;
}
var Qn = p(() =>
    u({
      stdout: o(),
      stderr: o(),
      output: o(),
      status: v(),
      aborted: M().optional(),
      spawnFailed: M().optional(),
      notStarted: M().optional(),
      stdioIncomplete: M().optional(),
      stdioClosedWithoutEnd: M().optional(),
      repairedInput: D().optional()
    })
  ),
  Q = "this machine has not settled its plugins yet: ask again",
  Z = "no enabled plugin with that id",
  nn = "anthropic/pluginAbsence",
  on = "the plugin declares no such hook for that event here",
  W =
    "this machine keeps the plugin's hooks off (its settings or policy, how it was launched, or a folder nobody has trusted)",
  en = "this machine could not judge the hook's condition";
class S extends Lcr {}
class b extends Error {}
async function BJr(n, e, s) {
  let t = s.toolUseContext();
  return jJr(n, t, (r) => qJr(s, t.abortController.signal, r));
}
async function jJr(n, e, s) {
  let { storageV5: t, credentials: r } = e,
    a = e.abortController.signal,
    {
      pluginId: i,
      hookEvent: c,
      command: d,
      args: h,
      if: y,
      timeout: I,
      jsonInput: R,
      hookIndex: P
    } = UJr().parse(n);
  if ((er(), j(i), vp(i))) throw Error("a built-in plugin's hooks are not run for another machine");
  let m = await A(i, t, r);
  if (m.plugin === void 0 && s !== void 0) {
    let g = await s(async () => ((m = await A(i, t, r)), m.plugin !== void 0));
    if (m.plugin === void 0) m = await A(i, t, r);
    let { accountListing: O, syncErrors: k } = e.session.pluginsSync;
    if (
      m.plugin === void 0 &&
      (!g ||
        O === "pending" ||
        k.some((L) => {
          if (!("plugin" in L) || L.plugin === void 0) return !1;
          try {
            return Vge(j8(L.plugin, V)) === i;
          } catch {
            return !1;
          }
        }))
    )
      throw new b(Q);
  }
  let { plugin: f } = m;
  if (f === void 0)
    throw new S(
      Z,
      Vs(i) === ni ? { [nn]: z(i, e.session.pluginsSync, WTn(), m.warnings) } : void 0
    );
  U(f);
  let w = _Kn(f)
    [c].flatMap((g) => g.hooks)
    .find(
      (g) =>
        g.type === "command" && g.command === d && wn(g.args, h) && (y === void 0 || g.if === y)
    );
  if (w === void 0 || w.type !== "command") {
    let { errors: g } = await fi(t, r),
      O = f;
    if (g.some((k) => "plugin" in k && k.plugin === O.name))
      throw Error("this machine could not read the plugin's hooks for now");
    throw new S(on);
  }
  let x = QCt(R);
  if (y !== void 0 && w.if && !(await ZCt(w.if, x)))
    return {
      summary: "its condition does not hold",
      output: { stdout: "", stderr: "", output: "", status: 0 }
    };
  return (
    a.throwIfAborted(),
    er(),
    j(f.source),
    U(f),
    eRt({ ...w, timeout: I ?? w.timeout }, c, x, P, e, { root: f.path, id: f.source })
  );
}
function QCt(n) {
  let e = JSON.parse(n),
    s = G().parse(e),
    t = fe(),
    r = tn(D().parse(e), (d) => K(d) && Up(ao(), d, !1));
  r.cwd = t;
  let i = (typeof r.tool_name === "string" ? Rn(JYe(!0), r.tool_name) : void 0)?.coerceInput?.(
      r.tool_input
    )?.input,
    c = H(i) ? i : void 0;
  if (c) r.tool_input = c;
  return { envContext: fQ(s), cwd: t, stdin: r, repairedInput: c };
}
function tn({ scratchpad_dir: n, ...e }, s) {
  let t = { ...e, transcript_path: "" },
    r =
      e.hook_event_name === "InstructionsLoaded" &&
      (e.memory_type === "Project" || e.memory_type === "Local");
  for (let [a, i] of Object.entries(e))
    if (J.test(a) && !(r && q.has(a) && typeof i === "string" && s(i))) t[a] = "";
  if (!t.file_path) t.globs = void 0;
  return t;
}
async function ZCt(n, { stdin: e, cwd: s }) {
  let t = lqe().safeParse(e),
    r = t.success ? await fRo(n, t.data, Ub(), s) : null;
  if (r === null) throw new S(en);
  return r;
}
async function eRt(
  n,
  e,
  { envContext: s, cwd: t, stdin: r, repairedInput: a },
  i,
  { abortController: c, storageV5: d, credentials: h },
  y,
  I = !1,
  R
) {
  let P = Ts(c.signal, { timeoutMs: n.timeout ? n.timeout * 1000 : void 0 }),
    m = await cRo({
      hook: n,
      hookEvent: e,
      jsonInput: _(r),
      envContext: s,
      project: { originalCwd: ke(), projectRoot: ao() },
      cwd: t,
      hookIndex: i,
      signal: P.signal,
      plugin: y,
      skillRoot: R,
      managed: I,
      fitted: (f) => N(f, e),
      storageV5: d,
      credentials: h
    }).finally(P.cleanup);
  if (rn.has(e)) CJ();
  return { summary: `exit ${m.status}`, output: N({ ...m, repairedInput: a }, e) };
}
function WJr() {
  if (oS()) throw new b(F);
}
function j(n) {
  if ((WJr(), XAn(), !t3n(n) || uG())) throw new S(W);
}
function XAn() {
  if (Hcr()) throw new b(oS() ? F : X);
}
function U(n) {
  if (Vs(n.source) === ni && ure()) {
    if (wBt()) throw new S(W);
    throw Error("this machine's settings hold account plugins for now");
  }
}
var rn = new Set(["SessionStart", "Setup", "CwdChanged", "FileChanged"]);
async function A(n, e, s) {
  let { enabled: t, warnings: r } = await fi(e, s);
  return {
    plugin:
      Vs(n) === ni
        ? t.find((i) => Vs(i.source) === ni && Vge(i.path) === n)
        : t.find((i) => i.source === n),
    warnings: r
  };
}
export { Hcr, vis, Eis, UJr, BJr, jJr, QCt, ZCt, eRt, WJr, XAn };

//# sourceMappingURL=chunk-9xbceqjs.js.map
