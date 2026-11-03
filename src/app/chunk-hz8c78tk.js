import {
  fileURLToPath as __filePath_2495f817daf1c951,
  URL as __filePath_2495f817daf1c951_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qw, Kt } from "./chunk-6bbdndfe.js";
import { L, vi, nt, q, hS, ke, MI, $c, rN, Rp, CYt, RYt, J, ape, Vdr } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { E, Vt } from "./chunk-fs43t96t.js";
import { Yn, cy, A_, ml, gl, Yw, Sg, zs, Fq } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { wpi, LM, Zfe, Im, Db, hh, Cn, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ud } from "./chunk-d54avynm.js";
import { W$ } from "./chunk-5rw2zfa0.js";
import { a } from "./chunk-4cgvah10.js";
import { f } from "./chunk-brszmkb3.js";
import { OI, Os } from "./chunk-qywdxehb.js";
import { b_ } from "./chunk-4nzy53ma.js";
import { fh } from "./chunk-63a6mqbs.js";
import { fe } from "./chunk-xe386mry.js";
import { JS } from "./chunk-t0wrcf3t.js";
import { cE, c6, m8r } from "./chunk-dc0nzty2.js";
import { hli, bu } from "./chunk-dvghjmtr.js";
import { ud, VY } from "./chunk-rve8yzwm.js";
import {
  f0e,
  Aoe,
  Xr,
  D2t,
  i_,
  uH,
  vVe,
  nEt,
  dS,
  Xe,
  $t,
  wm,
  z7,
  Hy,
  yl,
  NKt
} from "./chunk-ajtyjx88.js";
import { Ks } from "./chunk-znkwh1rm.js";
import { br } from "./chunk-wejdb0zs.js";
import { eLe } from "./chunk-krgv9fvy.js";
import {
  EJ,
  Ojn,
  tke,
  XOe,
  mMs,
  Zy,
  U4,
  uO,
  wrn,
  ble,
  NC,
  OXe,
  zGn,
  KGn,
  mp,
  z0t,
  EMe,
  g2n,
  HMe,
  Jp,
  Qa,
  Xge,
  XJ,
  Wke,
  Gke,
  CWe,
  IK,
  OK,
  KN,
  zle,
  Bt
} from "./chunk-j0tbz6ra.js";
import { Yee } from "./chunk-t6k5fjxp.js";
import { CIe, pwr, D3e, Wct, iBe } from "./chunk-gdqrmwqs.js";
import { zd } from "./chunk-07aq7e5p.js";
import { tR, nR, cV } from "./chunk-wany0nxw.js";
import { SLe } from "./chunk-cn4azb2f.js";
import { e_e } from "./chunk-hhgrzgnb.js";
import { Np, WG } from "./chunk-zjm5ncxc.js";
import { mv, Ec } from "./chunk-1fnv3zry.js";
import { d2e } from "./chunk-m5rm7nsm.js";
import { Ide } from "./chunk-xt7fs806.js";
import { M9n, wbt } from "./chunk-nahqyybs.js";
import { l8 } from "./chunk-1kkad38y.js";
import { nre } from "./chunk-4n57vbs9.js";
import { IO } from "./chunk-bydv9c9r.js";
import { mx } from "./chunk-s4n2rnah.js";
import { K1t } from "./chunk-r5xsp8d0.js";
import { x8e } from "./chunk-1b92s9tx.js";
import { ydt } from "./chunk-qh4bhk2n.js";
import { cgs, Jwe } from "./chunk-5atvhy8m.js";
import { _0n, qct } from "./chunk-7awex5qc.js";
import { Uve } from "./chunk-cefq50ab.js";
import { Hho, Lho } from "./chunk-1gb6cw37.js";
import { i0e } from "./chunk-bm0f9j8a.js";
import { Ot, nk, $n } from "./chunk-ya7n419k.js";
import { z } from "./chunk-p197ae0z.js";
import { ve } from "./chunk-vk5p9xv3.js";
function U6e(e) {
  if (!e || !_0n(e.hooks)) {
    Vdr(void 0);
    return;
  }
  let r = !ud("hooks") || VY(e.source),
    o = tke(e);
  if (r && o) {
    let n = eLe(e) ? V(e.hooks, "personal") : qct(e.source) ? V(e.hooks, "checkout") : e.hooks;
    (i0e(e.hooks, e.source === "plugin" ? e.plugin : void 0), Vdr(n));
    return;
  }
  if (r && !o) XOe(e, "mainThread");
  Vdr(void 0);
}
function V(e, r) {
  let o = {};
  for (let n of Ud) {
    let s = e[n];
    if (s !== void 0)
      o[n] = s.map((d) => (r === "personal" ? { ...d, personal: !0 } : { ...d, checkout: !0 }));
  }
  return o;
}
import { dirname as ie, resolve as Pe, win32 as se } from "path";
import { realpathSync as be, statSync as Ae } from "fs";
import { appendFile as tt, readdir as ot, rename as le, rmdir as me } from "fs/promises";
import { basename as G, dirname as it, join as D, relative as K } from "path";
class Y {
  filePath = null;
  key = void 0;
  timestamp = 0;
  recorder = null;
  failed = !1;
  setFile(e, r, o) {
    ((this.filePath = e), (this.key = o), (this.timestamp = r));
  }
  setFilePath(e, r) {
    ((this.filePath = e), (this.key = r));
  }
  setRecorder(e) {
    this.recorder = e;
  }
  markFailed() {
    this.failed = !0;
  }
}
function pe(e, r, o) {
  return { namespace: "recording", projectKey: e, sessionId: r, stamp: String(o) };
}
var ge = new nt(() => new Y());
async function qOn(e, r) {
  let o = ge.of(e),
    n = o.filePath;
  if (!n || o.timestamp === 0) return;
  let s = JS(ke()),
    d = o.key,
    u = WG(s);
  if (z() && r !== void 0 && d !== void 0 && u !== void 0) {
    if (o.failed) return;
    let y = q(),
      S = D(s, y, `${o.timestamp}.cast`);
    if (n === S) return;
    let P = pe(u, y, o.timestamp),
      k = K(s, n),
      w = K(s, S),
      v = async () => {
        if (o.failed) return;
        try {
          (await he(r, d, P),
            o.setFilePath(S, P),
            t(`[asciicast] Renamed recording: ${k} \u2192 ${w}`));
        } catch {
          t(`[asciicast] Failed to rename recording from ${k} to ${w}`);
        }
      };
    await (o.recorder?.park(v) ?? v());
    return;
  }
  let m = D(s, `${q()}-${o.timestamp}.cast`);
  if (n === m) return;
  await o.recorder?.flush();
  let p = G(n),
    h = G(m);
  try {
    (await le(n, m), o.setFilePath(m), t(`[asciicast] Renamed recording: ${p} \u2192 ${h}`));
  } catch {
    t(`[asciicast] Failed to rename recording from ${p} to ${h}`);
  }
}
async function he(e, r, o) {
  (wpi(await e.move(r, o)), await me(D(Np(), r.projectKey, r.sessionId)).catch(() => {}));
}
import { open as ye, readdir as Se, unlink as X } from "fs/promises";
import { join as Q } from "path";
var we = 200,
  Re = 64;
function F() {
  if (J() || Qa()) return null;
  try {
    return Q(tR(), q(), Hho);
  } catch (e) {
    return (t(`Image store unavailable: ${e}`, { level: "warn" }), null);
  }
}
function lgs() {
  return F() !== null;
}
async function syr() {
  let e = F();
  if (e === null) return 0;
  let r;
  try {
    r = await Se(e);
  } catch (n) {
    if (!Vt(n)) t(`Could not list stored images: ${n}`, { level: "warn" });
    return 0;
  }
  let o = 0;
  for (let n of r) {
    let s = Number(Lho.exec(n)?.[1]);
    if (Number.isSafeInteger(s) && s > o) o = s;
  }
  return o;
}
function Z(e) {
  if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "")
    return null;
  let r = F();
  if (r === null) return null;
  let o = wbt(e.content.slice(0, Re));
  return Q(r, `${e.id}.${M9n[o]}`);
}
function XPe(e, r) {
  if (e.type !== "image") return null;
  let o = Z(e);
  if (o !== null) r((n) => O(n, e.id, o));
  return o;
}
async function JPe(e, r) {
  let o = await ee(e);
  if (o) r((n) => O(n, e.id, o));
  return o;
}
async function dgs(e, r) {
  let o = new Map();
  for (let [n, s] of Object.entries(e))
    if (s.type === "image") {
      let d = await ee(s);
      if (d) o.set(Number(n), d);
    }
  if (o.size > 0)
    r((n) => {
      let s = n;
      for (let [d, u] of o) s = O(s, d, u);
      return s;
    });
  return o;
}
async function ee(e) {
  if (e.type !== "image") return null;
  try {
    let r = Z(e);
    if (r === null) return null;
    let o = await cE(r, [r], { createParents: !0, leaf: "replace" }),
      n = OI(o.ioPath),
      s = !1;
    try {
      let d = await ye(n, "wx", 384);
      s = !0;
      try {
        (await d.writeFile(e.content, { encoding: "base64" }), await d.datasync());
      } finally {
        await d.close();
      }
      await o.recheckBeforeWrite();
      try {
        await Os(n, o.ioPath);
      } catch (u) {
        if (E(u) !== "EEXIST") throw u;
        (await o.recheckBeforeWrite(),
          await X(o.ioPath).catch(() => {}),
          await o.recheckBeforeWrite(),
          await Os(n, o.ioPath));
      }
      s = !1;
    } finally {
      if (s)
        try {
          (await o.recheckBeforeWrite(), await X(n));
        } catch {}
      await o.close();
    }
    return (t(`Stored image ${e.id} to ${r}`), r);
  } catch (r) {
    return (t(`Failed to store image: ${r}`), null);
  }
}
function O(e, r, o) {
  if (e.get(r) === o) return e;
  let n = new Map(e);
  if (!n.has(r))
    while (n.size >= we) {
      let s = n.keys().next().value;
      if (s === void 0) break;
      n.delete(s);
    }
  return (n.set(r, o), n);
}
var te = ve({ recorded: null }, (e) => {
  e.recorded = null;
});
function iyr({ sourceSessionId: e, transcriptPath: r }) {
  let o = Kt(e);
  te.recorded =
    o === null
      ? null
      : { liveSessionId: q(), source: { sessionId: o, transcriptPath: r ?? Jp(o) } };
}
function YOn() {
  let { recorded: e } = te;
  return e !== null && e.liveSessionId === q() ? e.source : null;
}
function Te(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type !== "assistant") continue;
    let n = o.message.content.find((u) => u.type === "tool_use" && u.name === mx);
    if (!n || n.type !== "tool_use") continue;
    let s = n.input;
    if (s === null || typeof s !== "object") return [];
    let d = OXe().safeParse(s.todos);
    return d.success ? d.data : [];
  }
  return [];
}
function uso(e) {
  if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) return !1;
  let r = Kt(e.resume);
  if (!r) return !1;
  return (hS(qw(r), "resume"), !0);
}
function YPt(e, r, o, n) {
  try {
    EMe(e.messages ?? []);
  } catch (s) {
    l(s);
  }
  if ((syr().then(g2n).catch(l), e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0))
    wrn(e.fileHistorySnapshots, (s) => {
      r((d) => ({ ...d, fileHistory: s }));
    });
  if (
    (import.meta
      .require(
        __filePath_2495f817daf1c951(
          new __filePath_2495f817daf1c951_URL("./chunk-2n6f9qgg.js", import.meta.url)
        )
      )
      .restoreGoalFromTranscript(e.messages, r, o),
    !IO() && e.messages && e.messages.length > 0)
  ) {
    let s = Te(e.messages);
    if (s.length > 0) {
      let d = q();
      r((u) => ({ ...u, todos: { ...u.todos, [d]: s } }));
    }
  }
}
function Me(e) {
  return;
}
function XPt(e, r) {
  if (!e && !r) return;
  return { name: e ?? "", color: r === "default" ? void 0 : r };
}
function Xwe(e, r, o, n) {
  if (r) return { agentDefinition: r, agentType: void 0 };
  if (!e) return (ape(void 0), U6e(void 0), { agentDefinition: void 0, agentType: void 0 });
  let s = n?.sessionAgentDefinitions ? l8(n.sessionAgentDefinitions.activeAgents, e) : void 0,
    d = s ?? l8(o.activeAgents, e);
  if (s)
    t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
  if (!d) {
    if (
      (t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`),
      e !== x8e.agentType)
    ) {
      if ((f("session_resume", "agent_resolve_miss"), n?.onResolveMiss)) {
        let u = ke(),
          m =
            n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== u
              ? `${n.sessionCwd} or ${u}`
              : u;
        n.onResolveMiss(
          Cn(
            `This session was running agent '${e}', which is no longer available (no agent by that name in ${m}). ` +
              "Continuing with the default tools and system prompt \u2014 the agent's tool restrictions no longer apply. " +
              "To restore it, re-create the agent, or resume with an explicit --agent <name>."
          )
        );
      }
    }
    return (ape(void 0), U6e(void 0), { agentDefinition: void 0, agentType: void 0 });
  }
  if ((ape(d.agentType), U6e(d), !$c() && d.model && d.model !== "inherit")) {
    let u = $t(d.model);
    if (dS(u) || Xr(u)) Rp(u);
    else
      t(
        `Agent model "${d.model}" is not in the availableModels allowlist; keeping the session model`,
        { level: "warn" }
      );
  }
  return { agentDefinition: d, agentType: d.agentType };
}
async function CUe(e, r) {
  if (!e || e === ke()) return;
  let o = Pe(e);
  if (Yn(e) || Yn(o) || A_(e) || A_(o) || A_(se.normalize(e)) || Sg(e) || Sg(o) || ml(e)) {
    t(`Resume: refusing cross-host session home shape "${e}"`);
    return;
  }
  if (await Zfe(e)) {
    t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
    return;
  }
  if (!NKt(e)) {
    t(
      `Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`
    );
    return;
  }
  try {
    return await NC(e, r);
  } catch {
    return;
  }
}
function fso(e) {
  if (!e.resumedAgentSetting || e.mainThreadAgentType || b_()) return { attempt: !1, loud: !1 };
  if (e.hasStreamingInput) return { attempt: !e.explicitAgentFlag, loud: !1 };
  return { attempt: !0, loud: !0 };
}
async function _e(e, r) {
  if (r || !e) return;
  let o = fh(e);
  if (o === void 0) return;
  if (o === "plan" || o === "bypassPermissions") return;
  if (o === "default") {
    let { isAutoModeFromFallback: n, setProvisionalStartupMode: s } =
      await import("./chunk-k4tty4ge.js");
    if ((s(void 0), n())) return "default";
    return;
  }
  if (o === "auto") {
    let { isAutoStartWithheldForHipaaTaint: n } = await import("./chunk-k4tty4ge.js");
    if (n() || Ks("hipaa")) return;
    let { isAutoModeGateEnabled: s } = await import("./chunk-kxx6n2z6.js");
    if (!s()) return;
  }
  return o;
}
async function JPt({
  storedPermissionMode: e,
  messages: r,
  forkSession: o,
  permissionModeSuppliedOnInvocation: n,
  lane: s
}) {
  let d;
  try {
    ({ planModeOnInteractiveResume: d } = await import("./chunk-w0272p9c.js"));
  } catch (u) {
    l(u);
  }
  return (u) => {
    if (d === void 0) return;
    try {
      let m = u.startupModeDecidedByProactivityLevel !== void 0 && nR();
      return d(u, {
        storedPermissionMode: e,
        messages: r,
        forkSession: o,
        startupModePinned: n || m,
        lane: s
      });
    } catch (m) {
      l(m);
      return;
    }
  };
}
var Ce = {
  unknown_family: "not a model this version of Claude Code recognizes",
  not_allowed: "not allowed by this account's model settings",
  retired: "retired"
};
function hdt() {
  return Boolean(
    $c() !== void 0 ||
    i.ANTHROPIC_MODEL ||
    i.ANTHROPIC_DEFAULT_FABLE_MODEL ||
    i.ANTHROPIC_DEFAULT_OPUS_MODEL ||
    i.ANTHROPIC_DEFAULT_SONNET_MODEL ||
    i.ANTHROPIC_DEFAULT_HAIKU_MODEL ||
    vVe() ||
    !bu()
  );
}
async function RUe(
  e,
  r,
  o,
  { scheduleTelemetry: n = (u) => u(), storageV5: s, credentials: d } = {}
) {
  if (hdt()) return;
  let u = N(e, r),
    m = u.kind === "declined" && u.reason === "not_allowed" ? await Uve(u.model, s, d) : void 0;
  if (m !== void 0 && hdt()) return;
  let p = m === "overturned" ? N(e, r) : u;
  if (p.kind === "none") return;
  if (p.kind === "mode_dependent_setting") {
    n(() =>
      a("tengu_resume_model_restore", { outcome: c("skipped_mode_dependent_setting"), is_eap: !1 })
    );
    return;
  }
  if (p.kind === "declined")
    n(() =>
      a("tengu_resume_model_restore", {
        outcome: c("declined"),
        decline_reason: ce(p.reason),
        entitlement_reprobe: ce(m),
        is_eap: SLe(p.model)
      })
    );
  if (p.kind === "declined") {
    let h = (r && $n(r)) || "the default model";
    o?.(
      `Session model ${p.model} could not be restored (${Ce[p.reason]}) \u2014 using ${h} instead.`
    );
    return;
  }
  return p.model;
}
function pso(e, r) {
  let o = N(e, r);
  return o.kind === "ok" ? o.model : void 0;
}
function Ie(e, r) {
  if (e === "opusplan") return r.includes("opus") || r.includes("sonnet");
  if (e === "haiku") return r.includes("haiku") || r.includes("sonnet");
  return !1;
}
function N(e, r) {
  let o = new Set(hli.map((d) => Xe(d))),
    n = r ? $t(r) : void 0,
    s = n ? $n(n) : void 0;
  for (let d = e.length - 1; d >= 0; d--) {
    let u = e[d];
    if (
      u?.type !== "assistant" ||
      u.isMeta ||
      typeof u.message?.model !== "string" ||
      u.message.model === vi
    )
      continue;
    let m = u.message.model,
      p = i_(),
      h = typeof p === "string" ? Ot(p) : p;
    if (uH(h) && !SLe(m) && Ie(h, Xe(m))) return { kind: "mode_dependent_setting" };
    let y = f0e(m),
      S = !(o.has(Xe(m)) || SLe(m) || (y !== void 0 && D2t(y)) || $n(m) === s)
        ? "unknown_family"
        : !dS(m) && !Xr(m)
          ? "not_allowed"
          : Aoe(m)
            ? "retired"
            : void 0;
    if (S) return { kind: "declined", model: m, reason: S };
    let P = (r && wm(r)) || (n !== void 0 && wm(n)),
      k = P && ($n(m) === s || (r && Xe($t($n(r))) === Xe(m))),
      w = Ojn(e)?.modelId,
      v = w !== void 0 && wm(w) && Xe($n(w)) === Xe(m),
      A = (P && n !== void 0 && nk(n, m)) || (w !== void 0 && wm(w) && nk(w, m));
    if (((k || v) && z7(m)) || (A && !nEt(m) && z7(m, Xe(m, { identity: !0, overridesMap: {} }))))
      return { kind: "ok", model: m + "[1m]" };
    return { kind: "ok", model: m };
  }
  return { kind: "none" };
}
function ae(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") return o;
  }
  return;
}
function Ee(e, r) {
  let o = ae(e);
  if (!o) return !1;
  let n = $n(o.fallbackModel),
    s = $n(r);
  return n === s || Xe(n) === Xe(s);
}
function QPt(e) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o?.type === "system" && o.subtype === "model_refusal_fallback") o.neutralizedByFork = !0;
  }
}
function De(e) {
  let r = ae(e);
  return r?.neutralizedByFork === !0 ? { fallbackModel: r.fallbackModel } : void 0;
}
function _(e, r) {
  a("tengu_resume_model_restore", { outcome: c(e), is_eap: SLe(r) });
}
function oe(e, r) {
  K1t(import("./chunk-czdwggd8.js").then((o) => o.fetchBootstrapData(e, r)));
}
function xUe(e, r, o, n, s) {
  if (!Ee(e, r)) return (Rp(r), oe(n, s), _("restored", r), r);
  if (o) {
    (a("tengu_refusal_fallback_resume_latch", { action: c("fork_skip_restore") }),
      _("skipped_fork_fallback", r));
    return;
  }
  let d = De(e);
  if (d && $n(d.fallbackModel) === $n(r)) {
    (a("tengu_refusal_fallback_resume_latch", { action: c("fork_neutralized_skip") }),
      _("skipped_fork_neutralized", r));
    return;
  }
  return (
    Rp(r),
    oe(n, s),
    RYt({
      fallbackModel: r,
      previousOverride: void 0,
      previousAppStateModel: rN() ?? null,
      previousModelForSession: null
    }),
    _("restored", r),
    a("tengu_refusal_fallback_resume_latch", { action: c("model_latch_only") }),
    r
  );
}
function PUe(e, r) {
  if (r) return;
  let o = e.flatMap((n) =>
    n?.type === "system" &&
    n.subtype === "model_refusal_fallback" &&
    (n.apiRefusalCategory === "cyber" || n.sawCyberRefusal === !0) &&
    n.neutralizedByFork !== !0
      ? [n]
      : []
  );
  if (o.length > 0)
    (CYt(
      o.find((n) => n.apiRefusalCategory === "cyber" && n.requestId != null)?.requestId ?? void 0
    ),
      a("tengu_refusal_fallback_resume_latch", { action: c("header_rearmed") }));
}
async function Fe(e, r, o, n, s) {
  if (!e) return n;
  return QPe(r, o, s);
}
async function QPe(e, r, o) {
  br().agentDefinitions.clear();
  let n = await NC(e, o);
  return ble(n, [...n.allAgents, ...r]);
}
function re(e) {
  try {
    return be(e);
  } catch {
    return e;
  }
}
function ne(e) {
  try {
    return Ae(e).isDirectory() ? "present" : "gone";
  } catch (r) {
    let o = E(r);
    return o === "ENOENT" || o === "ENOTDIR" ? "gone" : "inaccessible";
  }
}
var x = "The worktree binding could not be cleared because transcript saving is off";
function XOn(e, r) {
  if (e.reason === "pin-is-own-launch-tree")
    return `Error: ${Zy(e.message)} The worktree binding is kept.
`;
  if (!e.poisoned)
    return `Error: could not verify worktree ${Zy(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
  let o =
    r?.bindingCleared === void 0
      ? ""
      : r.bindingCleared
        ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation."
        : ` ${x} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
  return `Error: cannot resume into worktree ${Zy(e.worktreePath)}: ${Zy(e.message)} This session was not started.${o}
`;
}
function mso(e, r) {
  let o = r.bindingCleared
    ? "The worktree binding has been cleared."
    : `${x} for this run; a later resume will re-check it.`;
  return `Notice: the worktree ${Zy(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${o}
`;
}
function ZPt(e) {
  let r = `${x}; a later --resume will re-check it.`;
  if (e.reason === "worktree-gone")
    return `Your worktree ${Zy(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${Qa() ? r : "The worktree binding has been cleared."}`;
  if (e.reason === "pin-is-own-launch-tree")
    return `Could not re-enter your worktree ${Zy(e.worktreePath)}: ${Zy(e.message)} The worktree binding is kept.`;
  if (e.poisoned) {
    let o = Qa()
      ? `You are working in the current directory without worktree isolation. ${r}`
      : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
    return `Did not re-enter your worktree ${Zy(e.worktreePath)}: ${Zy(e.message)} ${o}`;
  }
  return `Could not verify your worktree ${Zy(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
var Oe = "Memory is still paused from";
function ayr() {
  return;
}
var Ne = "Auto-memory is still off for this session";
function lyr() {
  return;
}
function eIt(e) {
  for (let [r, o] of [
    [ayr(), Oe],
    [lyr(), Ne]
  ]) {
    if (r === void 0) continue;
    let n = e.findLastIndex(
      (s) =>
        s.type === "system" &&
        s.subtype === "informational" &&
        typeof s.content === "string" &&
        s.content.includes(o)
    );
    if (n !== -1 && !e.slice(n + 1).some((s) => s.type === "user" || s.type === "assistant"))
      continue;
    e.push(Bt(r, "notice"));
  }
}
function B(e) {
  if (zs(e) || A_(e) || A_(se.normalize(e)))
    return (
      t("[sessionRestore] transcript path is a network/NT-namespace path \u2014 not chdir-ing", {
        level: "warn"
      }),
      !0
    );
  return !1;
}
function IUe(e, r, o, n) {
  let s = Le(r, o, n);
  return (e.record(s), s);
}
function Le(e, r, o) {
  let n = yl();
  if (n && o?.preserveBinding !== !0) return (KN(n), null);
  if (!e) {
    if (e === null)
      return (
        a("tengu_worktree_resume_root_rejected", {
          reason: b("worktree-exited-resume"),
          poisoned: b("false")
        }),
        t(
          "[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation"
        ),
        null
      );
    if (!r || fe() === r) return null;
    if (B(r)) return null;
    if (LM(r))
      return (
        t("[worktree] resume: the recorded project path has a network spelling; staying put"),
        null
      );
    try {
      hh(r);
    } catch {
      return null;
    }
    if ((mp(r), iBe(r, D3e(CIe)))) MI(fe());
    return (
      HMe(),
      EJ("resume"),
      Ec.cache.clear?.(),
      mv(o?.storageV5),
      c6(),
      m8r(),
      zd()?.refreshGitBranch?.(),
      null
    );
  }
  let s = o?.preserveBinding === !0;
  if (
    B(e.worktreePath) ||
    cy(e.worktreePath) ||
    gl(e.worktreePath) ||
    Yw(e.worktreePath) ||
    Im(Db, e.worktreePath, { surfaceNetworkRaw: !0, unreadableAncestry: "unverified" }) !== void 0
  ) {
    if (!s) KN(null);
    return (
      a("tengu_worktree_resume_root_rejected", {
        reason: b("network-spelled-pin"),
        poisoned: b("true")
      }),
      {
        worktreePath: e.worktreePath,
        reason: "invalid-linked-worktree",
        message:
          "its recorded path has a network spelling, which can never be a local isolation worktree.",
        poisoned: !0
      }
    );
  }
  let d = ne(e.worktreePath);
  if (d === "gone") {
    if (!s) KN(null);
    return (
      a("tengu_worktree_resume_root_rejected", { reason: b("worktree-gone"), poisoned: b("true") }),
      {
        worktreePath: e.worktreePath,
        reason: "worktree-gone",
        message: "the worktree directory no longer exists",
        poisoned: !0
      }
    );
  }
  if (d === "inaccessible")
    return (
      t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, {
        level: "error"
      }),
      a("tengu_worktree_resume_root_rejected", { reason: b("unverifiable"), poisoned: b("false") }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be examined right now",
        poisoned: !1
      }
    );
  let u = o?.liveLaunchDir ?? CIe,
    m = pwr(fe(), e.worktreePath),
    p = mMs(e.worktreePath, uO(e.originalCwd), L([re(u), ...uO(u), re(CIe), ...uO(CIe)]), {
      declineSelfOwningPinUnderLiveRoot: !0
    });
  if (!p.ok) {
    let h = p.reason !== "unverifiable" && p.reason !== "pin-is-own-launch-tree";
    if (
      (t(`[worktree] declining to resume into ${e.worktreePath} (${p.reason}): ${p.message}`, {
        level: "error"
      }),
      a("tengu_worktree_resume_root_rejected", {
        reason: c(p.reason),
        poisoned: b(h ? "true" : "false")
      }),
      h)
    ) {
      if (!s) KN(null);
      if (m) {
        let y = ie(e.worktreePath),
          S = ne(y) === "present" ? y : e.originalCwd;
        if (pwr(S, e.worktreePath))
          return {
            worktreePath: e.worktreePath,
            reason: p.reason,
            message: p.message,
            poisoned: h
          };
        try {
          (hh(S), mp(S));
          let P = (A) => U4(A, e.worktreePath) === "same",
            k = Fq(e.worktreePath),
            w = k !== null ? [k] : [],
            v = [...uO(u), ...w].filter((A) => !P(A));
          if (iBe(S, v, { requireCovered: !0 })) MI(S);
          (HMe(),
            EJ("resume"),
            m8r(),
            Ec.cache.clear?.(),
            mv(o?.storageV5),
            c6(),
            zd()?.refreshGitBranch?.());
        } catch {}
      }
    }
    return { worktreePath: e.worktreePath, reason: p.reason, message: p.message, poisoned: h };
  }
  try {
    hh(e.worktreePath);
  } catch (h) {
    let y = E(h);
    if (y === "ENOENT" || y === "ENOTDIR") {
      if (!s) KN(null);
      return (
        a("tengu_worktree_resume_root_rejected", {
          reason: b("worktree-gone"),
          poisoned: b("true")
        }),
        {
          worktreePath: e.worktreePath,
          reason: "worktree-gone",
          message: "the worktree directory no longer exists",
          poisoned: !0
        }
      );
    }
    return (
      a("tengu_worktree_resume_root_rejected", { reason: b("unverifiable"), poisoned: b("false") }),
      {
        worktreePath: e.worktreePath,
        reason: "unverifiable",
        message: "the worktree directory could not be entered right now",
        poisoned: !1
      }
    );
  }
  return (
    mp(e.worktreePath),
    MI(fe()),
    z0t({ ...e, liveLaunchAnchor: u, originalChangeset: void 0 }),
    HMe(),
    EJ("resume"),
    Ec.cache.clear?.(),
    mv(o?.storageV5),
    c6(),
    zd()?.refreshGitBranch?.(),
    null
  );
}
function gso(e, r) {
  let o = yl();
  if (!o) return;
  if ((z0t(null), HMe(), EJ("resume"), o.worktreePath === e)) {
    (Ec.cache.clear?.(), mv(r));
    return;
  }
  if (B(o.originalCwd)) return;
  if (LM(o.originalCwd)) {
    t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
    return;
  }
  try {
    hh(o.originalCwd);
  } catch {
    return;
  }
  mp(o.originalCwd);
  let n = o.liveLaunchAnchor;
  if (
    n === void 0 ||
    iBe(o.originalCwd, D3e(n, o.worktreePath), {
      requireCovered: !0,
      coveredWitnesses: Wct(n, o.worktreePath),
      extraCoveredRoots: (() => {
        let s = Fq(o.worktreePath);
        return s !== null ? [s] : [];
      })()
    })
  )
    MI(fe());
  (Ec.cache.clear?.(), mv(r), c6(), zd()?.refreshGitBranch?.());
}
async function JOn(e, r, o) {
  ydt(o.session.host);
  let n = o.modeApi?.matchSessionMode(e.mode);
  if (n) e.messages.push(Bt(n, "warning"));
  let s = cgs({ ...e, source: r.resumeSource ?? "file" }, (g) => e.messages.push(Bt(g, "warning"))),
    { adoptedSessionId: d, effectiveFork: u } = d2e(
      r.sessionIdOverride ?? e.sessionId,
      r.forkSession
    );
  if (d)
    (hS(d, "resume", r.transcriptPath ? ie(r.transcriptPath) : null),
      await qOn(o.session, o.storageV5),
      await XJ());
  if (u) {
    if (
      (await CWe(e, { stripWorktreeSession: !0, stripRelocatedCwd: !0, storageV5: o.storageV5 }),
      e.contentReplacements?.length)
    )
      await Xge(e.contentReplacements, void 0, o.storageV5);
  } else IK(e, { storageV5: o.storageV5 });
  if ((Jwe(s.declined === !0), eIt(e.messages), zle(e), !u)) {
    let g = IUe(Yee.of(o.session.host), e.worktreeSession, void 0, { storageV5: o.storageV5 });
    if (g) e.messages.push(Bt(ZPt(g), "warning"));
    if (z() && o.storageV5 !== void 0) await Gke(o.storageV5);
    else Wke();
  }
  let m = await CUe(e.projectPath, o.storageV5),
    { agentDefinition: p, agentType: h } = Xwe(
      e.agentSetting,
      o.mainThreadAgentDefinition,
      o.agentDefinitions,
      {
        sessionAgentDefinitions: m,
        sessionCwd: e.projectPath,
        onResolveMiss: (g) => e.messages.push(Bt(g, "warning"))
      }
    ),
    y = e.permissionMode,
    S = !1;
  if (
    !o.permissionModeCliSet &&
    fh(y) === "auto" &&
    o.initialState.proactivityLevel === "ask" &&
    !cV()
  )
    ((y = e_e("ask", { isAutoModeAvailable: !1, isBypassPermissionsModeAvailable: !1 }, void 0)),
      (S = !0),
      t(
        `[sessionRestore] stored mode 'auto' read as '${y}': proactivity 'ask' with levels off in this process`
      ));
  let P =
      o.initialState.toolPermissionContext.startupModeDecidedByProactivityLevel !== void 0 && nR(),
    k = await _e(y, o.permissionModeCliSet || P);
  if (S) {
    let g = k ?? o.initialState.toolPermissionContext.mode;
    if (g !== "auto")
      e.messages.push(
        Bt(
          `Resumed in ${W$(g).toLowerCase()} mode instead of auto: this session is set to ask before each file edit, and auto mode alone would not. Press shift+tab to switch modes.`,
          "warning"
        )
      );
  }
  let w = null;
  if (u) QPt(e.messages);
  let v = await RUe(
      e.messages,
      o.initialState.mainLoopModel,
      (g) => e.messages.push(Bt(g, "warning")),
      { storageV5: o.storageV5, credentials: o.credentials }
    ),
    A = v ? xUe(e.messages, v, u, o.storageV5, o.credentials) : void 0;
  (PUe(e.messages, u), tIt(e.messages, { fork: u, startup: !0 }));
  let T;
  if (k) {
    let { transitionPermissionMode: g } = await import("./chunk-kxx6n2z6.js"),
      I = o.initialState.toolPermissionContext;
    try {
      if (((T = { ...g(I.mode, k, I), mode: k }), !I.proactivityBaseline?.fromRelaunchHandoff))
        T = { ...T, proactivityBaseline: { mode: k, fromRelaunchHandoff: !1 } };
    } catch (ue) {
      t(`[sessionRestore] transitionPermissionMode rejected restored mode '${k}': ${ue}`);
    }
  }
  ((T =
    (
      await JPt({
        storedPermissionMode: y,
        messages: e.messages,
        forkSession: u,
        permissionModeSuppliedOnInvocation: o.permissionModeSuppliedOnInvocation,
        lane: "interactive"
      })
    )(T ?? o.initialState.toolPermissionContext) ?? T),
    OK(o.modeApi?.isCoordinatorMode() ? "coordinator" : "normal"));
  let H = r.includeAttribution ? Me(e) : void 0,
    j = XPt(e.agentName, e.agentColor),
    C = o.initialState.standaloneAgentContext
      ? { ...j, ...o.initialState.standaloneAgentContext }
      : j;
  nre(C?.name, o.storageV5, {
    autoOnly: !e.customTitle && !o.initialState.standaloneAgentContext?.name
  });
  let de = await Fe(!!n, o.currentCwd, o.cliAgents, o.agentDefinitions, o.storageV5),
    W = o.initialState.initialMessage;
  if (
    i.CLAUDE_CODE_RESUME_INTERRUPTED_TURN &&
    e.turnInterruptionState?.kind === "interrupted_prompt" &&
    Hy(e.turnInterruptionState.message.origin)
  )
    (t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn"),
      zGn("repl_restore", e.turnInterruptionState.message, { tail: e.turnInterruptionState.tail }),
      KGn(e.messages, e.turnInterruptionState.message),
      (W = { message: e.turnInterruptionState.message }));
  let M = o.initialState;
  iyr({ sourceSessionId: r.sessionIdOverride ?? e.sessionId, transcriptPath: r.transcriptPath });
  let U = Ide();
  return (
    import.meta
      .require(
        __filePath_2495f817daf1c951(
          new __filePath_2495f817daf1c951_URL("./chunk-2n6f9qgg.js", import.meta.url)
        )
      )
      .restoreGoalFromTranscript(
        e.messages,
        (g) => {
          M = g(M);
        },
        U
      ),
    {
      messages: e.messages.filter(
        (g) =>
          !(
            g.type === "system" &&
            (g.subtype === "bridge_status" || g.subtype === "cloud_session_status")
          )
      ),
      sessionStartHooks: e.sessionStartHooks,
      fileHistorySnapshots: e.fileHistorySnapshots,
      contentReplacements: e.contentReplacements,
      agentName: e.agentName,
      agentColor: e.agentColor === "default" ? void 0 : e.agentColor,
      restoredAgentDef: p,
      initialState: {
        ...M,
        initialMessage: W,
        ...(!u &&
          e.bridgeSessionId &&
          !(M.replBridgeEnabled && !M.replBridgeOutboundOnly) && {
            replBridgeEnabled: !0,
            replBridgeOutboundOnly: !1
          }),
        ...(e.endedByModel ? { endedByModel: !0 } : {}),
        ...(h && { agent: h }),
        ...(w && { attentionBudget: w }),
        ...(A && { mainLoopModel: A }),
        ...(H && { attribution: H }),
        ...(C && { standaloneAgentContext: C }),
        ...(T && { toolPermissionContext: T }),
        agentDefinitions: de
      },
      sessionHooks: U
    }
  );
}
function tIt(e, r) {}
export {
  U6e,
  qOn,
  lgs,
  syr,
  XPe,
  JPe,
  dgs,
  iyr,
  YOn,
  uso,
  YPt,
  XPt,
  Xwe,
  CUe,
  fso,
  JPt,
  hdt,
  RUe,
  pso,
  QPt,
  xUe,
  PUe,
  QPe,
  XOn,
  mso,
  ZPt,
  ayr,
  lyr,
  eIt,
  IUe,
  gso,
  JOn,
  tIt
};

//# sourceMappingURL=chunk-hz8c78tk.js.map
