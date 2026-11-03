// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { d, E, yie, ui } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { up } from "./chunk-jazcqqqr.js";
import { WAt } from "./chunk-xc1j8sdj.js";
import {
  nt,
  U,
  es,
  gT,
  iie,
  aie,
  jTn,
  See,
  GTn,
  KTn,
  Qrs,
  Zrs,
  bW,
  Eee,
  Pn
} from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { Ae, Fn } from "./chunk-dvghjmtr.js";
import { QRe, ni, Vs } from "./chunk-5rw2zfa0.js";
import { J4t } from "./chunk-4nzy53ma.js";
import { Ud, lq } from "./chunk-d54avynm.js";
import { rr } from "./chunk-ak0cmk10.js";
import { ikn, Sst, Y } from "./chunk-arw2bgak.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { Eb, ln, Fh, pe, i9o, KRe, ife, ek, cse, NNe, xsr } from "./chunk-7c3thgax.js";
import { ua, Ln, fa, jt, k } from "./chunk-ajtyjx88.js";
import { pS, bR } from "./chunk-znkwh1rm.js";
import { xjr, hce, Met, _p, Q1, n0, C3s } from "./chunk-p56qmwgb.js";
import { GTe } from "./chunk-w35wpr7b.js";
import { mr } from "./chunk-spwjh8kb.js";
import { vc, zTe } from "./chunk-5ns6j8e0.js";
import { Ca } from "./chunk-87f056s4.js";
import { JG, $et } from "./chunk-wany0nxw.js";
import { ge, Go, lr, Tt } from "./chunk-522pfw8k.js";
import { H } from "./chunk-p8tprgqa.js";
import { od } from "./chunk-gvf25gp4.js";
import { o, v, M, oe, T, u, B, A } from "./chunk-0bqrj5ah.js";
var n_ = 1e6;
async function Ne(e) {
  let n = (r, f) => (t(`[plugins-scope] ${r}: ${f}`), r);
  if (!pS("allow_plugin_skill_search")) return n("send", "policy refuses the plugin routes");
  if (!Fn()) return n("send", "not a first-party provider session");
  if (_t()) return n("send", "essential traffic only");
  if (od()) return n("send", "CCR session token");
  try {
    await fa({ credentials: e });
  } catch (r) {
    t(`[plugins-scope] pre-check token freshen failed: ${d(r)}`);
  }
  let s = Ln();
  if (!s?.accessToken) return n("send", "no claude.ai token");
  if (s.scopes?.includes(WAt)) return n("send", "token carries user:plugins");
  if (!s.refreshToken) return n("send", "host-injected token, scopes unknown here");
  if (s.clientId) return n("send", "third-party OAuth client");
  return n("skip_no_scope", "login token lacks user:plugins until its next refresh");
}
var Ke = 1e4;
async function iHe(e, n, s = Ke) {
  if (e?.aborted) return "send";
  let r = Ne(n).catch((y) => (t(`[plugins-scope] unexpected gate error: ${d(y)}`), "send")),
    f;
  if (!e) f = await Pe(r, s);
  else {
    let y,
      S = new Promise((h) => {
        ((y = () => h(void 0)), e.addEventListener("abort", y, { once: !0 }));
      });
    try {
      f = await Pe(Promise.race([r, S]), s);
    } finally {
      e.removeEventListener("abort", y);
    }
  }
  return f ?? "send";
}
import { createWriteStream as tn } from "fs";
import { open as on, rm as ke, writeFile as sn } from "fs/promises";
import { Transform as rn } from "stream";
import { pipeline as an } from "stream/promises";
function eFr(e) {
  let n = (r, f) => {
      let y = Eb(r, f);
      return y.settings === null && NNe(y.errors).length > 0;
    },
    s = ["userSettings", "localSettings", "flagSettings"].some((r) => {
      let f = ln(r);
      if (f === void 0) return !1;
      switch (r) {
        case "flagSettings":
          return n(f, gT() ?? iie());
        case "localSettings": {
          let y = Fh();
          return n(f) || (y !== void 0 && y !== f && n(y));
        }
        case "userSettings":
          return n(f);
      }
    });
  return (
    ze(e) ||
    (cse().length > 0 && ek() !== "helper") ||
    s ||
    i9o(e.settingKey) ||
    (aie() && KRe()) ||
    bR(e.policyKey) === "unregistered"
  );
}
function tFr(e) {
  if (!xsr(e.settingKey)) return !1;
  if (!e.isTierInPlay()) return !1;
  if (Ae() !== "firstParty") return !1;
  if (i.ANTHROPIC_UNIX_SOCKET) return !1;
  if (Pn()) return !1;
  if (ua().source !== "claude.ai") return !1;
  if (_t()) return !1;
  if (!pS(e.policyKey)) return !1;
  return K(e);
}
function L7e() {
  return ua().source === "claude.ai" && !Pn();
}
function K(e) {
  return k(e.flagName, !1) === !0;
}
function nFr(e) {
  return !$et() && _6n(e);
}
function _6n(e) {
  let n = bR(e.policyKey);
  return n === "cache_miss" || n === "route_missing";
}
function ze(e) {
  let n = bR(e.policyKey);
  return !xsr(e.settingKey) || n === "org_denied" || n === "latched";
}
function rFr(e) {
  let n = [...ife(), pe("userSettings")],
    s = bR(e.policyKey);
  return n.some((r) => r?.[e.settingKey] === !1) || s === "org_denied" || s === "latched";
}
import { join as Ve, resolve as Ye, sep as D } from "path";
import { sep as $e } from "path";
function g6n(e, n) {
  if (e.type !== n.type) return !1;
  let s = (r, f) => (r.if ?? "") === (f.if ?? "");
  switch (e.type) {
    case "command": {
      let r = JG();
      return (
        n.type === "command" &&
        e.command === n.command &&
        _(e.args ?? null) === _(n.args ?? null) &&
        (e.shell ?? r) === (n.shell ?? r) &&
        s(e, n)
      );
    }
    case "prompt":
      return n.type === "prompt" && e.prompt === n.prompt && s(e, n);
    case "agent":
      return n.type === "agent" && e.prompt === n.prompt && s(e, n);
    case "http":
      return n.type === "http" && e.url === n.url && s(e, n);
    case "mcp_tool":
      return (
        n.type === "mcp_tool" &&
        e.server === n.server &&
        e.tool === n.tool &&
        _(e.input ?? {}) === _(n.input ?? {}) &&
        s(e, n)
      );
    case "script":
      return (
        n.type === "script" &&
        (e.script ?? null) === (n.script ?? null) &&
        (e.file ?? null) === (n.file ?? null) &&
        s(e, n)
      );
    case "function":
      return !1;
  }
}
function Ue(e) {
  return e.map((n) => ({
    matcher: n.matcher,
    skillRoot: n.skillRoot,
    ...(n.personal === !0 && { personal: !0 }),
    ...(n.checkout === !0 && { checkout: !0 }),
    hooks: n.hooks.map((s) => s.hook).filter((s) => s.type !== "function")
  }));
}
function Ge(e) {
  return e
    .map((n) => ({
      matcher: n.matcher,
      hooks: n.hooks.map((s) => s.hook).filter((s) => s.type === "function")
    }))
    .filter((n) => n.hooks.length > 0);
}
class ie {
  sessions = new Map();
  draws = new Map();
  skillDraws(e) {
    let n = this.draws.get(e) ?? new Map();
    return (this.draws.set(e, n), n);
  }
  add(e, n, s, r, f) {
    this.addEntry(
      e,
      n,
      s,
      r,
      f?.onHookSuccess,
      f?.skillRoot,
      f?.personal === !0,
      f?.checkout === !0
    );
  }
  addFunctionHook(e, n, s, r, f, y) {
    let S = y?.id || `function-hook-${Date.now()}-${Math.random()}`,
      h = { type: "function", id: S, timeout: y?.timeout || 5000, callback: r, errorMessage: f };
    return (this.addEntry(e, n, s, h, void 0, void 0, !1, !1), S);
  }
  addEntry(e, n, s, r, f, y, S, h) {
    let w = this.sessions.get(e) ?? { hooks: {} },
      P = w.hooks[n] || [],
      C = P.findIndex(
        (R) =>
          R.matcher === s &&
          R.skillRoot === y &&
          (R.personal === !0) === S &&
          (R.checkout === !0) === h
      ),
      O;
    if (C >= 0) {
      O = [...P];
      let R = O[C],
        L = R.hooks.findIndex((x) =>
          r.type === "function"
            ? Boolean(r.id) && x.hook.type === "function" && x.hook.id === r.id
            : g6n(x.hook, r)
        ),
        F =
          L >= 0
            ? R.hooks.with(L, { ...R.hooks[L], hook: r })
            : [...R.hooks, { hook: r, onHookSuccess: f }];
      O[C] = { ...R, hooks: F };
    } else
      O = [
        ...P,
        {
          matcher: s,
          skillRoot: y,
          ...(S && { personal: !0 }),
          ...(h && { checkout: !0 }),
          hooks: [{ hook: r, onHookSuccess: f }]
        }
      ];
    (this.sessions.set(e, { hooks: { ...w.hooks, [n]: O } }),
      We(this.sessions),
      Eee(),
      t(`Added session hook for event ${n} in session ${e}`));
  }
  remove(e, n, s, r) {
    let f = this.sessions.get(e);
    if (f) {
      let S = (f.hooks[n] || [])
          .map((w) => {
            if (r !== void 0 && w.skillRoot !== r.skillRoot) return w;
            let P = w.hooks.filter((C) => !g6n(C.hook, s));
            return P.length > 0 ? { ...w, hooks: P } : null;
          })
          .filter((w) => w !== null),
        h = S.length > 0 ? { ...f.hooks, [n]: S } : { ...f.hooks };
      if (S.length === 0) delete h[n];
      (this.sessions.set(e, { ...f, hooks: h }), Eee());
    }
    t(`Removed session hook for event ${n} in session ${e}`);
  }
  clear(e) {
    (this.sessions.delete(e),
      this.draws.delete(e),
      Eee(),
      t(`Cleared all session hooks for session ${e}`));
  }
  get(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let f of n ? [n] : Ud) {
      let y = r.hooks[f];
      if (y) s.set(f, Ue(y));
    }
    return s;
  }
  getFunctionHooks(e, n) {
    let s = new Map(),
      r = this.sessions.get(e);
    if (!r) return s;
    for (let f of n ? [n] : Ud) {
      let y = r.hooks[f];
      if (y) {
        let S = Ge(y);
        if (S.length > 0) s.set(f, S);
      }
    }
    return s;
  }
  getEntry(e, n, s, r, f) {
    let y = this.sessions.get(e)?.hooks[n];
    if (!y) return;
    for (let S of y)
      if ((S.matcher === s || s === "") && S.skillRoot === f.skillRoot) {
        let h = S.hooks.find((w) => g6n(w.hook, r));
        if (h) return h;
      }
    return;
  }
  has(e, n) {
    return this.sessions.get(e)?.hooks[n] !== void 0;
  }
}
var Be = new W(() => new Set());
function V() {
  return es(Be);
}
function We(e) {
  ikn(V(), e);
}
function h6n() {
  let e = [];
  for (let n of Sst(V()))
    for (let s of n.values())
      for (let r of Ud)
        for (let f of s.hooks[r] ?? [])
          for (let { hook: y } of f.hooks)
            if (y.type !== "function") e.push({ event: r, hook: y, skillRoot: f.skillRoot });
  return e;
}
function ae(e) {
  if (e.size === 0) return 0;
  let n = 0;
  for (let s of Sst(V()))
    for (let [r, f] of s) {
      let y = {},
        S = n;
      for (let h of Ud) {
        let w = [];
        for (let P of f.hooks[h] ?? [])
          if (P.skillRoot !== void 0 && e.has(P.skillRoot)) n += P.hooks.length;
          else w.push(P);
        if (w.length > 0) y[h] = w;
      }
      if (n > S) s.set(r, { ...f, hooks: y });
    }
  if (n > 0) Eee();
  return n;
}
function Ide() {
  return new ie();
}
var je = {
  sync_off: (e) => `${e} sync is off (a setting or the organization's policy).`,
  account_change: () => "A sign-out, or a sign-in not verified as the same account.",
  skill_gone: () => "Those skills are gone from this account's list or from the disk."
};
function y6n(e) {
  let n = e + $e,
    s = new Set();
  for (let { skillRoot: r } of h6n()) if (r?.startsWith(n)) s.add(r);
  return s;
}
function Ccn(e, n, s) {
  let r = ae(n);
  if (r === 0) return;
  (t(`Hooks of ${e.hooksOf} removed: ${r}. ${je[s](e.sync)}`),
    Y("info", e.event, { count: r, reason: s }));
}
var le = {
    sync: "Plugins",
    hooksOf: "synced plugins' skills",
    event: "plugins_sync_skill_hooks_removed"
  },
  ue = new W(() => new Set());
function ce() {
  try {
    let e = up();
    return e === null ? void 0 : Ye(Ve(e, Q1));
  } catch (e) {
    t(`The synced plugins' folder could not be made absolute (${E(e) ?? d(e)})`, {
      level: "error"
    });
    return;
  }
}
function dVs() {
  let e = ce();
  if (e !== void 0) es(ue).add(e);
}
function Z() {
  let e = new Set(es(ue)),
    n = ce();
  if (n !== void 0) e.add(n);
  return e;
}
function Pcn(e) {
  return e !== void 0 && Vs(e) === ni;
}
function B0o(e, n) {
  if (!Pcn(e) || n === void 0) return [];
  return [...Z()].filter((s) => n.startsWith(s + D));
}
async function j0o() {
  try {
    return (await n0()) ?? C3s();
  } catch (e) {
    return (l(e), null);
  }
}
function Icn(e, n) {
  let [s = ""] = n.slice(e.length + 1).split(D);
  return _p(Met(s));
}
function cVs(e, n, s) {
  try {
    let r = jTn(),
      f = n.map((S) => S + D + e).find((S) => s.startsWith(S + D));
    if (r === null || r.bucket !== e || f === void 0) return;
    let y = Icn(f, s);
    return Array.from(r.dirsById.values()).some((S) => S.has(y)) ? void 0 : "not_listed";
  } catch (r) {
    return (Y("warn", "plugins_sync_last_list_unreadable"), l(r), "list_unreadable");
  }
}
function uVs(e, n, s) {
  if (e === null) return "no_account";
  return n.some((r) => s.startsWith(r + D + e + D)) ? void 0 : "other_account";
}
var q = {
  sync_off:
    "plugins sync is turned off in the person's own settings, in an admin's, or by the organization's policy",
  other_account: "its plugin was synced for another account",
  no_account: "no account could be resolved for its synced plugin",
  not_listed: "the account's latest complete list of plugins does not hold its plugin's folder",
  list_unreadable: "this session's record of the account's plugins could not be read",
  no_folder: "its plugin's folder could not be found under the synced plugins' folder"
};
function zyt(e) {
  return q[e];
}
function fVs(e, n, s) {
  let r = [
    ...(s.hooks ? ["its hooks"] : []),
    ...(s.grant ? ["the tools its allowed-tools grants"] : [])
  ].join(" and without ");
  (t(`Plugin skill '${e}' runs without ${r}: ${q[n]}.`, { level: "warn" }),
    Y("info", "plugins_sync_skill_hooks_refused", { reason: n }));
}
function pVs(e, n) {
  (t(`Plugin command '${e}' was not run: ${q[n]}.`, { level: "warn" }),
    Y("info", "plugins_sync_command_refused", { reason: n }));
}
function sFr(e) {
  let n = new Set();
  for (let s of Z()) for (let r of y6n(s)) n.add(r);
  Ccn(le, n, e);
}
function mVs({ bucket: e, delistedDirs: n, listedDirs: s }) {
  try {
    let r = new Set();
    for (let f of Z()) {
      let y = f + D + e;
      for (let S of y6n(y)) {
        let h = Icn(y, S);
        if (n.has(h) && !s.has(h)) r.add(S);
      }
    }
    return (Ccn(le, r, "skill_gone"), !0);
  } catch (r) {
    return (Y("warn", "plugins_sync_skill_hooks_removal_failed"), l(r), !1);
  }
}
var I = {
  settingKey: "syncClaudeAiPlugins",
  policyKey: "allow_account_plugins_sync",
  flagName: "tengu_claudeai_plugins_sync_enabled",
  isTierInPlay: () => fre()
};
function S6n() {
  v8();
  let e = Ze() && !bW();
  return (Qrs(e), e);
}
function v8() {
  let e = eFr(I);
  if ((Zrs(e), e && aFr())) sFr("sync_off");
}
function ure() {
  return (v8(), bW());
}
function wBt() {
  return aFr();
}
function gVs() {
  return !wBt() && (ure() || _6n(I));
}
function w6n() {
  return See().length > 0 || Ocn();
}
function Ocn() {
  return v6n() || iFr();
}
function iFr() {
  return !v6n() && K(I) && L7e();
}
function W0o() {
  return v6n() || L7e();
}
function vBt() {
  return K(I) && L7e() && fre() && !ure();
}
function hVs() {
  return K(I);
}
function v6n() {
  return i.CLAUDE_CODE_SYNC_PLUGINS || i.CLAUDE_CODE_SYNC_SESSION_REFS;
}
function Kyt() {
  return nFr(I);
}
function fre() {
  return !mr("plugins") && Qt("userSettings");
}
function Ze() {
  return tFr(I);
}
function aFr() {
  return rFr(I);
}
function lFr(e, n) {
  if (!n.ok)
    return n.reason === "no-auth"
      ? { success: !1, error: n.detail, kind: "no_auth" }
      : { success: !1, error: n.reason, kind: "gated" };
  let s = E6n().safeParse(n.data);
  if (s.success) {
    let r = s.data.error.type ?? "error_envelope_no_type";
    return (
      Y("warn", e === "skills" ? "skills_sync_list_error" : "plugins_sync_list_error", {
        serverError: r,
        status: n.status
      }),
      { success: !1, error: r, kind: "server_error", status: n.status }
    );
  }
  return (
    Y("warn", e === "skills" ? "skills_sync_list_malformed" : "plugins_sync_list_malformed"),
    { success: !1, error: `malformed list-${e} response`, kind: "malformed" }
  );
}
function dFr(e) {
  let { kind: n, message: s } = ui(e),
    r = yie(E(e));
  return { success: !1, error: s, kind: n, ...(r !== void 0 && { errno: r }) };
}
function IQ(e) {
  return e.kind === "server_error" && e.status === 404 && e.error === "not_found_error";
}
function N7e(e) {
  return e.status === 403 || e.kind === "no_scope" || IQ(e);
}
function $7e(e) {
  return {
    kind: c(e.kind),
    ...(e.status !== void 0 && { status: e.status }),
    ...(e.errno !== void 0 && { errno: e.errno })
  };
}
var E6n = p(() =>
  Tt({
    error: Tt({
      type: ge().optional(),
      message: ge()
        .nullish()
        .catch(void 0)
    })
  })
);
function k6n(e) {
  try {
    let n = E6n().safeParse(te(e.toString("utf8", 0, 2048)));
    if (n.success) return n.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
var Je = ["prompt", "agent", "http", "mcp_tool"],
  Qe = p(() =>
    u({
      type: A("command"),
      command: o(),
      args: T(o()).nullish(),
      if: o().nullish(),
      shell: o().nullish(),
      timeout: v().nullish(),
      on_failure: B(["continue", "block"]).nullish().catch("block"),
      status_message: o().nullish(),
      once: M().nullish(),
      async: M().nullish(),
      async_rewake: M().nullish(),
      rewake_message: o().nullish(),
      rewake_summary: o().nullish()
    })
  ),
  en = p(() => T(u({ event: o(), matchers: T(u({ matcher: o().nullish(), hooks: T(oe()) })) })));
function de(e) {
  if (!Array.isArray(e.hook_modules) || e.hook_modules.length > 0) return;
  let n = en().safeParse(e.hooks === null ? [] : e.hooks);
  if (!n.success) return;
  let s = {},
    r = 0,
    f = !1,
    y = new Set(),
    S = Ud;
  for (let { event: P, matchers: C } of n.data) {
    if (!S.includes(P)) {
      r += C.reduce((O, R) => O + R.hooks.length, 0);
      continue;
    }
    for (let { matcher: O, hooks: R } of C) {
      let L = R.flatMap((F) => {
        let x = Qe().safeParse(F);
        if (!x.success) {
          f = !0;
          let N = H(F) ? Je.find((De) => De === F.type) : void 0;
          if (N !== void 0) y.add(N);
          return [];
        }
        let b = x.data;
        return [
          {
            type: "command",
            command: b.command,
            ...(b.args != null && { args: b.args }),
            ...(b.if != null && { if: b.if }),
            ...(b.shell != null && { shell: b.shell }),
            ...(b.timeout != null && { timeout: b.timeout }),
            ...(b.on_failure != null && { onFailure: b.on_failure }),
            ...(b.status_message != null && { statusMessage: b.status_message }),
            ...(b.once != null && { once: b.once }),
            ...(b.async != null && { async: b.async }),
            ...(b.async_rewake != null && { asyncRewake: b.async_rewake }),
            ...(b.rewake_message != null && { rewakeMessage: b.rewake_message }),
            ...(b.rewake_summary != null && { rewakeSummary: b.rewake_summary })
          }
        ];
      });
      if (L.length > 0) (s[P] ??= []).push({ ...(O != null && { matcher: O }), hooks: L });
    }
  }
  let h = lq().safeParse(s);
  if (!h.success) return;
  let w = { hooks: h.data, unknownEvents: r };
  return f ? { ...w, hasOtherKinds: !0, otherKinds: [...y] } : w;
}
function fe(e, { components: n = !1 } = {}) {
  let s = xjr(e.installation_preference);
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null,
    ...(typeof e.marketplace_name === "string" &&
      e.marketplace_name && { marketplaceName: e.marketplace_name }),
    ...(s && { installationPreference: s }),
    ...(typeof e.presents_as === "string" && e.presents_as && { presentsAs: e.presents_as }),
    ...(n &&
      Array.isArray(e.components) && {
        components: e.components.flatMap((r) => {
          let f = nn().safeParse(r);
          if (!f.success) return [];
          let { type: y, name: S, description: h } = f.data;
          return [{ type: y, name: S, ...(h != null && { description: h }) }];
        })
      })
  };
}
var nn = p(() => u({ type: o(), name: o(), description: o().nullish() }));
function me(e) {
  return e.enabled !== !1;
}
function T6n(e) {
  return e.map((n) => _([n.pluginId, n.name, n.version, n.updatedAt])).toSorted().join(`
`);
}
var un = 1e4,
  ee = 60000,
  he = 500,
  ye = 100,
  J = 20,
  Q = GTe;
function cn() {
  return i.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? ee;
}
var _e = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";
var we = "&include_component_details=true&include_hooks=true",
  dn = "&wrapped_skills_as_plugins=true",
  ho = Me(`${_e}${we}`, 0);
async function fn(e) {
  let n = await e();
  if (n.ok) return n;
  return (await X(he), e());
}
async function F7e(e = {}) {
  let n = await pn(
    `${_e}${e.componentDetails === !0 ? we : ""}${e.convertedSkillsAsPlugins === !0 ? dn : ""}`,
    e
  );
  return n.success
    ? {
        success: !0,
        plugins: n.rows.map((s) => fe(s, { components: e.componentDetails === !0 })),
        ...(n.degraded && { degraded: n.degraded }),
        ...(n.convertedSkillsAsPlugins && { convertedSkillsAsPlugins: n.convertedSkillsAsPlugins }),
        ...(e.componentDetails === !0 &&
          !gn() && {
            hooks: new Map(
              n.rows.flatMap((s) => {
                let r = mn(s) ? void 0 : de(s);
                return r === void 0 ? [] : [[s.id, r]];
              })
            )
          })
      }
    : n;
}
async function pn(e, n) {
  if ((await iHe(n.signal, n.credentials)) === "skip_no_scope")
    return {
      success: !1,
      error: "claude.ai login lacks the user:plugins scope in this session",
      kind: "no_scope"
    };
  let r = await Se(e, n);
  if (r.success || r.status === 403) return r;
  await X(he);
  let f = await Se(e, n);
  return !f.success && IQ(f) && !IQ(r) ? { success: !1, error: f.error, kind: f.kind } : f;
}
async function Se(e, n) {
  let s = [],
    r = !1,
    f = !0;
  try {
    for (let y = 0; y < J; y++) {
      let S = await jt.get(Me(e, y), {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: un,
        credentials: n.credentials,
        earlyAnswer: n.earlyAnswer
      });
      if (!S.ok || !Array.isArray(S.data?.plugins)) {
        let h = lFr("plugins", S);
        return y > 0 && IQ(h) ? { success: !1, error: h.error, kind: h.kind } : h;
      }
      if (
        (s.push(...S.data.plugins.filter(me)),
        (r ||= S.data.degraded === !0),
        (f &&= S.data.converted_skills_as_plugins === !0),
        S.data.has_more !== !0)
      )
        return {
          success: !0,
          rows: [
            ...s.filter((h) => h.installation_preference === "required"),
            ...s.filter((h) => h.installation_preference !== "required")
          ],
          ...(r && { degraded: r }),
          ...(f && { convertedSkillsAsPlugins: f })
        };
    }
    return (
      Y("warn", "plugins_sync_list_page_cap", { pages: J, collected: s.length }),
      { success: !1, error: `list-plugins page cap (${J}) exceeded`, kind: "page_cap" }
    );
  } catch (y) {
    return dFr(y);
  }
}
function gn() {
  let e = bR("allow_account_plugins_sync"),
    n = e === "cache_miss" || e === "route_missing";
  return (v8(), bW() || (e !== null && !(n && $et())));
}
function mn(e) {
  return e.enabled !== !0 || e.skills_display_degraded === !0;
}
function G0o(e, n) {
  let s = [];
  if (n) s.push(`version=${encodeURIComponent(n)}`);
  if (i.CLAUDE_CODE_CCR_SURFACE === "tag")
    s.push("included_default_marketplaces=claude-tag-plugins");
  let r = s.length > 0 ? `?${s.join("&")}` : "";
  return `/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download${r}`;
}
async function cFr(e, n, s, r = {}) {
  return fn(() => kn(e, n, s, r));
}
async function kn(e, n, s, r) {
  let f = G0o(e, s);
  if (i.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return yn(f, n, r);
  let y = 0,
    S = !1;
  try {
    let O = function () {
        ((S = !0), C.destroy(Error("plugin download stream stalled")));
      },
      h = await jt.get(f, {
        auth: "teleport-org",
        isBackground: r.isBackground,
        timeout: ee,
        responseType: "stream",
        credentials: r.credentials
      });
    if (!h.ok || !h.data) {
      let x = h.ok ? "empty_body" : h.reason;
      return (Y("warn", "plugins_sync_download_not_ok", { reason: x }), { ok: !1, reason: x });
    }
    let w = cn(),
      P,
      C = new rn({
        transform(x, b, N) {
          if ((clearTimeout(P), (P = setTimeout(O, w)), (y += x.length), y > Q))
            N(Error("plugin zip exceeds download byte cap"));
          else N(null, x);
        },
        flush(x) {
          (clearTimeout(P), x());
        }
      });
    P = setTimeout(O, w);
    try {
      await an(h.data, C, tn(n));
    } finally {
      clearTimeout(P);
    }
    let R = Buffer.alloc(2048),
      L = await on(n, "r"),
      F;
    try {
      F = (await L.read(R, 0, R.length, 0)).bytesRead;
    } finally {
      await L.close();
    }
    if (F < 2 || R[0] !== 80 || R[1] !== 75) {
      await ke(n, { force: !0 });
      let x = F === 0 ? "empty_body" : k6n(R.subarray(0, F));
      return (
        Y("warn", "plugins_sync_download_not_zip", { serverError: x, bodyLen: y }),
        { ok: !1, reason: x }
      );
    }
    return { ok: !0 };
  } catch (h) {
    await ke(n, { force: !0 }).catch(() => {});
    let w = h?.response?.data;
    if (w !== null && typeof w === "object" && "destroy" in w && typeof w.destroy === "function")
      w.destroy();
    let P = h !== null && typeof h === "object" && "code" in h ? h.code : void 0,
      C = S
        ? "timeout"
        : y > Q
          ? "too_large"
          : P === "ECONNRESET" || P === "EPIPE" || P === "ETIMEDOUT"
            ? "network"
            : ui(h).kind;
    return (Y("warn", "plugins_sync_download_exception", { kind: C }), { ok: !1, reason: C });
  }
}
async function yn(e, n, s) {
  try {
    let r = await jt.get(e, {
      auth: "teleport-org",
      isBackground: s.isBackground,
      timeout: ee,
      responseType: "arraybuffer",
      maxContentLength: Q,
      credentials: s.credentials
    });
    if (!r.ok || !r.data) {
      let y = r.ok ? "empty_body" : r.reason;
      return (Y("warn", "plugins_sync_download_not_ok", { reason: y }), { ok: !1, reason: y });
    }
    let f = Buffer.from(r.data);
    if (f.length < 2 || f[0] !== 80 || f[1] !== 75) {
      let y = f.length === 0 ? "empty_body" : k6n(f);
      return (
        Y("warn", "plugins_sync_download_not_zip", { serverError: y, bodyLen: f.length }),
        { ok: !1, reason: y }
      );
    }
    return (await sn(n, f), { ok: !0 });
  } catch (r) {
    let { kind: f } = ui(r);
    return (Y("warn", "plugins_sync_download_exception", { kind: f }), { ok: !1, reason: f });
  }
}
function Me(e, n) {
  return `${e}&limit=${ye}&offset=${n * ye}`;
}
function ize(e) {
  let n = e.sessionRefsGate;
  if (n.ccrSessionID() === void 0) {
    let s = i.CLAUDE_CODE_SESSION_ID;
    if (s && rr(s) !== s) n.latchCcrSessionID(s);
  }
  return n.ccrSessionID();
}
function Sn(e) {
  return ize(e) !== void 0;
}
function PO(e) {
  let n = e.sessionRefsGate.syncEnabled();
  if (n !== void 0) return n;
  return e.sessionRefsGate.latchSyncEnabled(!!i.CLAUDE_CODE_SYNC_SESSION_REFS && Sn(e));
}
class z {
  texts = new Map();
  readingForCalls = new Map();
  lastReadForCalls = Promise.resolve(void 0);
}
class be {
  syncPromise = null;
  firstSyncPromise = null;
  firstListDeferred = null;
  firstRoundSettled = !1;
  firstRoundEmitted = !1;
  resyncTimer = null;
  resyncRunRound = null;
  resyncArmed = null;
  stopAwaitingActivity = null;
  consecutiveFailedRounds = 0;
  lostRowsRecheckMs = 100;
  bucketGeneration = null;
  pendingDownloads = new Map();
  placeholders = new Map();
  listedSkills = new Map();
  listedOwnerships = new Map();
  listedSkillsAnswer = "none_yet";
  listNeverStarted = !1;
  hostMountKinds = new Map();
  hostMountWorkOutstanding = null;
  hostMountWorkStartedAt = 0;
  hostMountWorkIsCatalogs = !1;
  hostCatalog = new z();
  missingSkillResyncAt = -1 / 0;
  missingSkillResync = null;
  reset() {
    if (
      ((this.syncPromise = null),
      (this.firstSyncPromise = null),
      (this.firstListDeferred = null),
      (this.firstRoundEmitted = !1),
      (this.firstRoundSettled = !1),
      KTn(!1),
      GTn(!1),
      this.resyncTimer)
    )
      (clearTimeout(this.resyncTimer), (this.resyncTimer = null));
    ((this.resyncRunRound = null),
      (this.resyncArmed = null),
      this.stopAwaitingActivity?.(),
      (this.consecutiveFailedRounds = 0),
      (this.lostRowsRecheckMs = 100),
      (this.bucketGeneration = null),
      this.listedSkills.clear(),
      this.listedOwnerships.clear(),
      (this.listedSkillsAnswer = "none_yet"),
      (this.listNeverStarted = !1),
      this.hostMountKinds.clear(),
      (this.hostMountWorkOutstanding = null),
      (this.hostMountWorkStartedAt = 0),
      (this.hostMountWorkIsCatalogs = !1),
      (this.hostCatalog = new z()),
      this.pendingDownloads.clear(),
      this.placeholders.clear(),
      (this.missingSkillResyncAt = -1 / 0),
      (this.missingSkillResync = null));
  }
}
var hn = new W(() => new be());
function op() {
  return hn.of(U().host);
}
var _n = p(() => {
    let e = ge()
        .nullish()
        .transform((r) => r ?? ""),
      n = Tt({
        id: e,
        name: e,
        description: e,
        version: e,
        directory: e,
        marketplace_name: ge()
          .nullish()
          .catch(void 0),
        is_official: Go()
          .nullish()
          .catch(void 0)
      }).transform(({ marketplace_name: r, is_official: f, ...y }) => ({
        ...y,
        ...(r && { marketplaceName: r }),
        ...(f === !0 && { isOfficial: !0 })
      })),
      s = lr(n)
        .nullish()
        .transform((r) => r ?? []);
    return Tt({ skills: s, plugins: s }).strict();
  }),
  wn = 30000,
  Mn = 500;
class Re {
  inflight = null;
  featureEventReported = new Set();
  startupResponse = null;
  fetch() {
    if (!this.inflight) {
      let e = bn().finally(() => {
        if (this.inflight === e) this.inflight = null;
      });
      this.inflight = e;
    }
    return this.inflight;
  }
  discardInflight() {
    ((this.inflight = null), (this.startupResponse = null));
  }
  async listEntries(e, { startup: n }) {
    let s = e === "skills" ? "sync_session_refs_skills" : "sync_session_refs_plugins",
      r = !this.featureEventReported.has(e);
    this.featureEventReported.add(e);
    let f = await (n ? (this.startupResponse ??= this.fetch()) : this.fetch());
    if (!f.ok) {
      if (
        (a(
          e === "skills"
            ? "tengu_skills_sync_manifest_failed"
            : "tengu_plugins_sync_manifest_failed",
          { unavailable: f.reason === "unavailable" }
        ),
        r)
      )
        m(s, f.reason);
      return { success: !1, error: `manifest ${f.reason}`, kind: "manifest" };
    }
    if (r) g(s);
    return { success: !0, entries: f[e] };
  }
}
var aze = new nt(() => new Re());
async function bn() {
  let e = await He();
  if (e.ok || e.reason === "no_auth" || e.reason === "gated") return e;
  return (await X(Mn), He());
}
async function He() {
  try {
    let e = await jt.get("/worker/skill-manifest", {
      host: "ccr-session",
      auth: "session-jwt",
      headers: { "anthropic-version": "2023-06-01" },
      timeout: wn,
      validateStatus: () => !0
    });
    if (!e.ok) {
      if (e.reason === "no-auth")
        return (Y("warn", "session_refs_manifest_no_auth"), { ok: !1, reason: "no_auth" });
      return (
        Y("warn", "session_refs_manifest_gated", { reason: e.reason }),
        { ok: !1, reason: "gated" }
      );
    }
    if (e.status === 503)
      return (Y("warn", "session_refs_manifest_unavailable"), { ok: !1, reason: "unavailable" });
    if (e.status >= 300)
      return (
        Y("warn", "session_refs_manifest_http_error", { status: e.status }),
        { ok: !1, reason: "http_error" }
      );
    let n = _n().safeParse(e.data);
    if (!n.success)
      return (Y("warn", "session_refs_manifest_malformed"), { ok: !1, reason: "malformed" });
    return {
      ok: !0,
      skills: n.data.skills.filter((s) => s.id),
      plugins: n.data.plugins.filter((s) => s.id)
    };
  } catch (e) {
    let { kind: n } = ui(e);
    return (
      Y("warn", "session_refs_manifest_exception", { kind: n }),
      { ok: !1, reason: "transport" }
    );
  }
}
import { lstat as ve, open as Hn, realpath as Ce } from "fs/promises";
import { join as j } from "path";
function oFr(e) {
  return e.length >= 2 && e[0] === 80 && e[1] === 75;
}
var Rcn = "/mnt/skills",
  ne = { public: "anthropic", examples: "anthropic-example" },
  xcn = "public",
  re = 3000,
  An = 33554432,
  Rn = 600000,
  vn = /^\d{4}-\d\d-\d\dT.*(?:Z|[+-]\d\d:\d\d)$/;
function N0o(e, n, s) {
  (s.set(n.reason, (s.get(n.reason) ?? 0) + 1),
    Y("info", "skills_sync_host_mount_miss", { kind: e, ...n }));
}
function b6n(e) {
  return Object.fromEntries(Array.from(e, ([n, s]) => [`mount_miss_${n}`, s]));
}
function En(e) {
  if (e.creator_type !== "anthropic" || e.id !== e.name || !QRe(e.name)) return;
  if (e.source === ne.public) return "public";
  return e.source === ne.examples && e.is_public_provisioned === !0 ? "examples" : void 0;
}
function eVs(e) {
  let { hostMountKinds: n } = op();
  n.clear();
  for (let s of e) {
    let r = En(s);
    if (r !== void 0) n.set(s.id, r);
  }
}
function Te() {
  return J4t() && zTe() !== 0;
}
function tVs(e) {
  let n = op().hostMountKinds.get(e.skillId);
  return n !== void 0 &&
    Te() &&
    e.name === e.skillId &&
    e.source === ne[n] &&
    e.requestedVersion === void 0
    ? n
    : void 0;
}
async function nVs(e, n) {
  if (!Te()) return null;
  let s = { deadline: performance.now() + re, spentMs: 0, waitedMs: 0 },
    r = await Ee(s, () => Fe(e)),
    f = Ca(1, (y, S, h) => Ee(s, () => xn(y, S, h)));
  return {
    async readZip(y, S) {
      let h = "reason" in r ? r : (r.get(y) ?? G),
        w = "reason" in h ? h : await f(j(Rcn, y, `${S.name}.skill`), S.updatedAt, h.device);
      if ("zip" in w) return w.zip;
      N0o(y, w, n);
      return;
    },
    spentMs: () => Math.round(s.spentMs),
    waitedMs: () => Math.round(s.waitedMs)
  };
}
async function Ee(e, n) {
  let s = op();
  while (s.hostMountWorkOutstanding !== null && s.hostMountWorkIsCatalogs) {
    let S = s.hostMountWorkOutstanding,
      h = performance.now(),
      w = Math.min(e.deadline, s.hostMountWorkStartedAt + re) - h;
    if (w > 0)
      (await Pe(
        S.catch(() => {}),
        w
      ),
        (e.waitedMs += performance.now() - h));
    if (s.hostMountWorkOutstanding === S) break;
  }
  let r = performance.now();
  if (s.hostMountWorkOutstanding !== null) return { reason: "earlier_work_outstanding" };
  if (r >= e.deadline) return { reason: "budget_spent" };
  let f = Oe(s, n, r, !1),
    y = await Pe(f, e.deadline - r);
  return ((e.spentMs += performance.now() - r), y ?? { reason: "timed_out" });
}
async function $0o(e) {
  let n = op();
  while (n.hostMountWorkOutstanding !== null) {
    let s = n.hostMountWorkOutstanding;
    if ((await s.catch(() => {}), n.hostMountWorkOutstanding === s))
      n.hostMountWorkOutstanding = null;
  }
  return Oe(n, e, performance.now(), !0);
}
function rVs() {
  let e = op();
  return e.hostMountWorkOutstanding !== null && performance.now() - e.hostMountWorkStartedAt >= re;
}
function Oe(e, n, s, r) {
  let f = n();
  ((e.hostMountWorkOutstanding = f),
    (e.hostMountWorkStartedAt = s),
    (e.hostMountWorkIsCatalogs = r));
  let y = () => {
    if (e.hostMountWorkOutstanding === f) e.hostMountWorkOutstanding = null;
  };
  return (f.then(y, y), f);
}
var G = { reason: "not_a_mount" };
async function Fe(e) {
  let n = await ve(Rcn).catch(se),
    s = "reason" in n || n.isDirectory() ? n : G,
    r = new Map();
  for (let f of e) {
    if ("reason" in s) {
      r.set(f, s);
      continue;
    }
    let y = await ve(j(Rcn, f)).catch(se);
    r.set(f, "reason" in y ? y : y.isDirectory() && y.dev !== s.dev ? { device: y.dev } : G);
  }
  return r;
}
function se(e) {
  let n = E(e);
  return n === "ENOENT" ? { reason: "no_mount" } : { reason: "probe_failed", code: n ?? "unknown" };
}
function xn(e, n, s) {
  return Le(e, s, An, async (r, f) => {
    let y = n !== null && vn.test(n) ? Date.parse(n) : Number.NaN;
    if (Number.isNaN(y)) return { reason: "row_date_unreadable" };
    if (f.mtimeMs <= y + Rn) return { reason: "not_newer_than_row" };
    let S = await r.readFile();
    return oFr(S) ? { zip: S } : { reason: "not_zip" };
  });
}
async function F0o(e) {
  return (await Fe(new Set([e]))).get(e) ?? G;
}
async function oVs() {
  let e = await F0o(xcn),
    n = "reason" in e ? e : await Ce(j(Rcn, xcn)).then((s) => ({ device: e.device, root: s }), se);
  if ("reason" in n) Y("warn", "skill_host_catalog_not_read", n);
  return n;
}
async function sVs(e, n, s) {
  let r = j(e, n, "SKILL.md"),
    f = (await xe(r)) ?? (await U0o(r, s, n_));
  return "reason" in f ? f : ((await xe(r)) ?? { text: f.text, filePath: r });
}
async function xe(e) {
  try {
    return (await Ce(e)) === e ? void 0 : { reason: "file_is_link" };
  } catch (n) {
    return Ie(n);
  }
}
function U0o(e, n, s) {
  return Le(e, n, s, async (r) => ({ text: await r.readFile({ encoding: "utf-8" }) }));
}
async function Le(e, n, s, r) {
  let f;
  try {
    f = await Hn(e, vc());
    let y = await f.stat();
    if (y.dev !== n) return { reason: "file_on_other_device" };
    if (!y.isFile()) return { reason: "not_a_file" };
    if (y.size > s) return { reason: "too_large" };
    return await r(f, y);
  } catch (y) {
    return Ie(y);
  } finally {
    await f?.close().catch(() => {});
  }
}
function Ie(e) {
  let n = E(e);
  switch (n) {
    case "ENOENT":
      return { reason: "file_absent" };
    case "ELOOP":
      return { reason: "file_is_link" };
    default:
      return { reason: "read_failed", code: n ?? "unknown" };
  }
}
function iVs(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null,
    ...(typeof e.backing_plugin_id === "string" &&
      hce(e.backing_plugin_id) && { backingPluginId: e.backing_plugin_id }),
    ...(e.user_invocable != null && { userInvocable: e.user_invocable === !0 }),
    ...(e.disable_model_invocation != null && {
      disableModelInvocation: e.disable_model_invocation !== !1
    })
  };
}
function aVs(e) {
  if (typeof e.creator_type !== "string") return;
  if (e.creator_type === "anthropic") return "anthropic";
  if (e.is_shared === !0) return "shared";
  if (e.partition_by === "organization") return "org";
  let n = e.partition_by === "account";
  if (typeof e.backing_plugin_id === "string") return n ? "own" : "other";
  return n || e.partition_by == null ? "own" : "other";
}
function lVs(e) {
  return e.enabled !== !1;
}
var sze = "collision-loser";
export {
  g6n,
  h6n,
  Ide,
  y6n,
  Ccn,
  eFr,
  tFr,
  L7e,
  nFr,
  _6n,
  rFr,
  n_,
  oFr,
  op,
  Rcn,
  xcn,
  N0o,
  b6n,
  eVs,
  tVs,
  nVs,
  $0o,
  rVs,
  F0o,
  oVs,
  sVs,
  U0o,
  iVs,
  aVs,
  lVs,
  sze,
  dVs,
  Pcn,
  B0o,
  j0o,
  Icn,
  cVs,
  uVs,
  zyt,
  fVs,
  pVs,
  sFr,
  mVs,
  S6n,
  v8,
  ure,
  wBt,
  gVs,
  w6n,
  Ocn,
  iFr,
  W0o,
  vBt,
  hVs,
  v6n,
  Kyt,
  fre,
  aFr,
  iHe,
  lFr,
  dFr,
  IQ,
  N7e,
  $7e,
  E6n,
  k6n,
  T6n,
  F7e,
  G0o,
  cFr,
  ize,
  PO,
  aze
};

//# sourceMappingURL=chunk-xt7fs806.js.map
