// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, Gc } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { Ofi } from "./chunk-4nzy53ma.js";
import { J$ } from "./chunk-afxq0vrk.js";
import { Mo } from "./chunk-r00j5r9s.js";
import { AsyncLocalStorage as p } from "async_hooks";
var u = new p();
function Bx() {
  return u.getStore();
}
function Xsi(e, t) {
  return u.run(e, t);
}
function D9() {
  return u.getStore() !== void 0;
}
function Jsi(e) {
  return { ...e, isInProcess: !0 };
}
import { spawnSync as x } from "child_process";
function jx() {
  let e = Bx();
  if (e) return e.parentSessionId;
  let t = n();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class g {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  ambientMarkerProbe = f(C);
  isChildSessionMarkerAmbientInTmux = () => this.ambientMarkerProbe() === "ambient";
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.ambientMarkerProbe = f(e);
  }
}
var gwi = new W(() => new g());
function n() {
  return gwi.of(U().host);
}
function PPi(e) {
  n().setCliParentSessionId(e);
}
function IPi(e) {
  n().setDynamicTeamContext(e);
}
function OPi() {
  n().setDynamicTeamContext(null);
}
function uM() {
  return n().dynamicTeamContext;
}
function gI() {
  let e = Bx();
  if (e) return e.agentId;
  return n().dynamicTeamContext?.agentId;
}
function rE() {
  let e = Bx();
  if (e) return e.agentName;
  return n().dynamicTeamContext?.agentName;
}
function oc(e) {
  let t = Bx();
  if (t) return t.teamName;
  let { dynamicTeamContext: r } = n();
  if (r?.teamName) return r.teamName;
  return e?.teamName;
}
function fc() {
  if (Bx()) return !0;
  let { dynamicTeamContext: t } = n();
  return !!(t?.agentId && t?.teamName);
}
function F$(e) {
  return e !== void 0 || fc() || i.CLAUDE_CODE_CHILD_SESSION;
}
function grt() {
  if (i.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return !1;
  if (!(i.CLAUDE_CODE_CHILD_SESSION && Gc() && !fc())) return !1;
  return !n().isChildSessionMarkerAmbientInTmux();
}
function M6o() {
  if (!i.CLAUDE_CODE_CHILD_SESSION) return !1;
  if (process.stdin.isTTY || process.stdout.isTTY) return !1;
  if (!Ofi()) return !1;
  return n().ambientMarkerProbe() === "absent";
}
function fNe() {
  if (i.CLAUDE_CODE_CHILD_SESSION) return !0;
  if (!i.CLAUDECODE) return !1;
  return i.CLAUDE_CODE_SKIP_PROMPT_HISTORY || (!process.stdin.isTTY && !process.stdout.isTTY);
}
function MPi(e) {
  n().setAmbientMarkerProbe(
    e === null
      ? C
      : () => {
          let t = e();
          return t === !0 ? "ambient" : t === !1 ? "absent" : t;
        }
  );
}
function f(e) {
  let t = null;
  return () => {
    if (t === null)
      try {
        t = e();
      } catch {
        t = "unknown";
      }
    return t;
  };
}
function C() {
  if (!i.TMUX) return "absent";
  let e = J$("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = x(e, ["show-environment", "-g"], {
      encoding: "utf8",
      timeout: 250,
      stdio: ["ignore", "pipe", "ignore"],
      cwd: void 0,
      env: Mo(),
      windowsHide: !0
    });
  } catch {
    return "unknown";
  }
  if (t.status !== 0) return "unknown";
  return hwi(t.stdout) ? "ambient" : "absent";
}
function hwi(e) {
  return e
    .split(
      `
`
    )
    .some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function Wx() {
  let e = Bx();
  if (e) return e.color;
  return n().dynamicTeamContext?.color;
}
function D6o() {
  let e = Bx();
  if (e) return e.planModeRequired;
  let { dynamicTeamContext: t } = n();
  if (t !== null) return t.planModeRequired;
  return i.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function pqe(e) {
  if (!e) return !1;
  let { leadAgentId: t, teammates: r } = e;
  return Object.keys(r).some((s) => s !== t);
}
function eB(e) {
  if (!e?.leadAgentId) return !1;
  let t = gI(),
    r = e.leadAgentId;
  if (t === r) return !0;
  if (!t) return !0;
  return !1;
}
function fkt(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running") return !0;
  return !1;
}
function gSn(e) {
  for (let t of Object.values(e.tasks))
    if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return !0;
  return !1;
}
function H6o(e, t) {
  let r = [];
  for (let [s, o] of Object.entries(t.tasks))
    if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) r.push(s);
  if (r.length === 0) return Promise.resolve();
  return new Promise((s) => {
    let o = r.length,
      d = () => {
        if ((o--, o === 0)) s();
      };
    e((l) => {
      let m = { ...l.tasks };
      for (let c of r) {
        let a = m[c];
        if (a && a.type === "in_process_teammate")
          if (a.isIdle) d();
          else m[c] = { ...a, onIdleCallbacks: [...(a.onIdleCallbacks ?? []), d] };
      }
      return { ...l, tasks: m };
    });
  });
}
export {
  Bx,
  Xsi,
  D9,
  Jsi,
  jx,
  gwi,
  PPi,
  IPi,
  OPi,
  uM,
  gI,
  rE,
  oc,
  fc,
  F$,
  grt,
  M6o,
  fNe,
  MPi,
  hwi,
  Wx,
  D6o,
  pqe,
  eB,
  fkt,
  gSn,
  H6o
};

//# sourceMappingURL=chunk-vchq4g74.js.map
