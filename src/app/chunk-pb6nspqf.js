// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { nt, U, q, tt, EX, Jf, PB, kYe, ye } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { _, Vo, t } from "./chunk-4kxznmzw.js";
import { Bk, thn, Z, uQs, N7n, fQs, pQs } from "./chunk-p27rr8yn.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Cq, l } from "./chunk-ewvf3tep.js";
import { Di } from "./chunk-01qhvw6m.js";
import { Wt } from "./chunk-7svjr0za.js";
import { $g, M$, YE, iI, G_e, rc, k, Jk } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { un } from "./chunk-wr0p4ndg.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { Co, zii, Kii, Vii, qii, U$, ar, gZ, xn, Zk, lC } from "./chunk-r1dvrqha.js";
import { JP, uzo, stt } from "./chunk-khq9hq2s.js";
import { LHs, kIr, BHs, jHs, _Or, bOr, SOr, wOr, Von, vOr, Za, D_ } from "./chunk-j0tbz6ra.js";
import { dht, GJe } from "./chunk-yyq6mj0n.js";
import { HGe, CGs } from "./chunk-0a97myps.js";
import { OT, CHt, Dtn, Ome, LAr, NAr, x9e, k4, Dd, Mme, Dme, Hme, $te } from "./chunk-2nwr73hs.js";
import {
  kHt,
  _So,
  f1n,
  RAr,
  xme,
  v4,
  v9e,
  E9e,
  ktn,
  xAr,
  y1n,
  wP,
  axs,
  g3,
  lxs
} from "./chunk-v3dqhn7m.js";
import { Rft } from "./chunk-322wstk9.js";
import {
  Yvs,
  Dwr,
  Xvs,
  MOt,
  DOt,
  w0n,
  Jvs,
  Qvs,
  Zvs,
  eEs,
  Nfo,
  $fo,
  tEs,
  nEs,
  rEs,
  ZB,
  Uwr,
  Xct,
  LOt,
  iEs,
  aEs,
  lEs,
  uEs,
  ES,
  fEs,
  k0n,
  t3,
  pEs,
  gEs
} from "./chunk-34151x92.js";
import { vve, Eve, kve } from "./chunk-prd2mdq9.js";
import { Fct, JSr, NLn, TIe, EOt, gQt, hQt } from "./chunk-a9gdafcf.js";
import {
  kOt,
  $Ln,
  _ve,
  wws,
  Zuo,
  owr,
  Ews,
  Tws,
  I3e,
  $ws,
  O3e,
  _N,
  CA,
  jws,
  VLn,
  vQt,
  oBe,
  rme,
  Gws
} from "./chunk-8x7w052f.js";
import { avs, fvs } from "./chunk-gtd0g067.js";
import { pw } from "./chunk-ba8g9hsn.js";
import { ifo, afo, tJ, Yws, Uct, M3e, lfo } from "./chunk-46ty1j5h.js";
import { kQt, iwr } from "./chunk-nf60705s.js";
import { awr } from "./chunk-40d7g4g3.js";
import {
  Tve,
  Eae,
  NOt,
  n3,
  $Qt,
  R0n,
  hy,
  yy,
  Jct,
  P_,
  vEs,
  e1,
  IIe,
  mL,
  TEs,
  AEs
} from "./chunk-hgshn9e7.js";
import { W0n } from "./chunk-ajn1cnw7.js";
import { o3 } from "./chunk-7nmtb4b4.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { o, v, M, oe, u } from "./chunk-0bqrj5ah.js";
var si = "Could not register a durable wake subscription; publishing and reading still work.",
  ai = {
    invalid_slug:
      "That address is not an artifact this session can name, so nothing was registered; retrying with the same address will not help.",
    trigger_limit:
      "This session already holds the maximum number of webhook triggers (10); unwatch an artifact to free one.",
    no_originator:
      "This session currently has no linked human originator, so it cannot hold wake subscriptions. Common causes: the session was started by a background event, or the connection between the chat platform and the Claude account needs re-linking. After the user addresses that (re-link and/or restart the session) \u2014 or if the server-side policy changes \u2014 a deliberate watch retry will re-check; automatic retries while the session stays originator-less are answered locally without contacting the server.",
    client_policy:
      "This environment's network policy disables artifact subscriptions; no request was sent, and retrying will not help while the policy is active.",
    no_auth:
      "No credential is available for the artifact service, so the subscription could not be registered; retrying will not help until the session has credentials.",
    session_not_found:
      "The server no longer has an active record of this remote session, so it cannot hold a wake subscription; retrying in this session will not help.",
    unavailable_in_deployment:
      "Wake subscriptions are not provisioned in this deployment; retrying will not help.",
    no_wake_minter:
      "No wake-webhook minter is reachable (the session's own MCP mount was not found or did not connect), so the subscription could not be registered.",
    tool_not_offered:
      "The server does not offer wake subscriptions to this session, so none was registered; retrying will not help while that holds.",
    org_not_enabled:
      "Wake subscriptions are not enabled for the user's organization, so none was registered; retrying will not help while that holds.",
    relay_not_served:
      "This cloud session cannot register wake subscriptions, so none was registered; retrying will not help while that holds.",
    subscribe_forbidden:
      "The artifact service refuses wake subscriptions from this session, for any artifact until the session ends, so retrying will not help. Later publishes in this session are not armed; only an explicit watch re-checks with the service.",
    relay_unavailable:
      "This cloud session reaches the artifact service only through its session gateway, and the gateway refused to carry the wake subscription (commonly because wake subscriptions are not enabled there for the user's organization), so none was registered and retrying will not help while that holds. Later publishes in this session are not armed; only an explicit watch re-checks with the gateway.",
    session_device_bound:
      "This cloud session is bound to the desktop it was started from (Cowork or `claude --cloud`), and that device's trusted-device check means activity on the artifact can't wake it, so no wake subscription was registered. Publishing and reading still work; retrying won't help in this session.",
    aborted:
      "The request was cancelled before the registration finished (the turn was interrupted); nothing is wrong with the artifact or the session.",
    watch_trigger_release_failed:
      "The request was cancelled before the registration finished, and the webhook trigger minted for it could not be released \u2014 it counts against this session until the session ends."
  },
  ui = new Map(Object.entries(ai));
function MLn(e, n) {
  let r = ui.get(e) ?? si;
  if (n === void 0) return r;
  let s = /[.!?]['")\]]*$/.test(n) ? "" : ".";
  return `${r} Server said: "${n}"${s}`;
}
function Ouo(e) {
  if (e.status === void 0) return;
  if (e.relayed)
    return e.fromGateway
      ? `HTTP ${e.status} via the session gateway, not attributed to the artifact service`
      : `HTTP ${e.status} from the artifact service via the session gateway`;
  if (e.gatewayDeclined === void 0) return `HTTP ${e.status} from the artifact service`;
  return e.gatewayDeclined === 0
    ? `HTTP ${e.status} direct from the artifact service, after the session gateway did not answer`
    : `HTTP ${e.status} direct from the artifact service, after the session gateway declined with HTTP ${e.gatewayDeclined}`;
}
var ci = new Set([
  "no_originator",
  "client_policy",
  "no_auth",
  "session_not_found",
  "unavailable_in_deployment",
  "tool_not_offered",
  "org_not_enabled",
  "relay_not_served",
  "subscribe_forbidden",
  "relay_unavailable",
  "session_device_bound",
  "invalid_slug"
]);
function USr(e) {
  return ci.has(e) ? null : SOr;
}
function yws(e) {
  let { armsInFlight: n } = Z().durable;
  n.set(e, (n.get(e) ?? 0) + 1);
}
function _ws(e, n) {
  let r = Z().durable,
    s = (r.armsInFlight.get(e) ?? 1) - 1;
  if (s > 0) r.armsInFlight.set(e, s);
  else r.armsInFlight.delete(e);
  if (n?.outcome === "subscribed" || n?.outcome === "already_watching")
    return (Duo(e), { settled: "registered" });
  let d = n === void 0 ? "arm_threw" : n.reason;
  if (d === "stop_latched" || r.stopLatches.isStopped(e)) return { settled: "stopped" };
  let a = r.armOutcomes.get(e),
    h = n?.outcome === "failed" && n.latched && a?.reason === d ? a : void 0,
    b = (n?.outcome === "failed" ? Ouo(n) : void 0) ?? h?.detail,
    w = (n?.outcome === "failed" ? n.serverMessage : void 0) ?? h?.serverMessage,
    S = {
      reason: d,
      ...(b !== void 0 && { detail: b }),
      ...(w !== void 0 && { serverMessage: w })
    };
  return (
    wOr(r.armOutcomes, e, { ...S, at: Date.now() }, _Or),
    s > 0 ? { settled: "pending", ...S } : { settled: "unregistered", ...S }
  );
}
function Muo(e) {
  let n = Z().durable;
  for (let [r, s] of n.armOutcomes) if (s.reason === e) n.armOutcomes.delete(r);
  for (let r of n.announcedArmFailures) if (r.endsWith(`:${e}`)) n.announcedArmFailures.delete(r);
}
function Duo(e) {
  let n = Z().durable;
  (n.armOutcomes.delete(e), vOr(n.announcedArmFailures, e));
}
function Wn(e, n) {
  return Von(Z().durable.announcedArmFailures, `${e}:${n}`, bOr);
}
function bws(e) {
  let n = Z().durable,
    r = [],
    s = new Set();
  for (let d of n.armsInFlight.keys()) {
    if (!Ln(n, d, e)) continue;
    (r.push({ slug: d, state: "arming" }), s.add(d));
  }
  for (let [d, a] of n.armOutcomes) {
    if (!Ln(n, d, e) || s.has(d)) continue;
    r.push({
      slug: d,
      state: "failed",
      reason: a.reason,
      ...(a.detail !== void 0 && { detail: a.detail }),
      ...(a.serverMessage !== void 0 && { serverMessage: a.serverMessage }),
      at: a.at
    });
  }
  return r;
}
function Ln(e, n, r) {
  return (r === void 0 || n === r) && !e.rows.has(n) && !e.stopLatches.isStopped(n);
}
class In {
  working = Ps({ working: !1 });
  userPrompt = Ps({ waitingFor: void 0 });
}
var Se = new nt(() => new In());
function $ct(e, n) {
  Se.of(e).working.setState((r) => (r.working === n ? r : { working: n }));
}
function PLn(e) {
  return Se.of(e).working.getState().working;
}
function $Sr(e, n) {
  return Se.of(e).working.subscribe(n);
}
function ILn(e, n) {
  Se.of(e).userPrompt.setState((r) => (r.waitingFor === n ? r : { waitingFor: n }));
}
function OLn(e) {
  return Iuo(e) !== void 0;
}
function Iuo(e) {
  return Se.of(e).userPrompt.getState().waitingFor;
}
function hws(e, n) {
  return Se.of(e).userPrompt.subscribe(n);
}
var Pt = 120,
  On = `act:${Pt}`,
  di = "act:0";
function Mn(e) {
  if (!e.activityOkReported) ((e.activityOkReported = !0), g("artifact_activity_emit"));
}
function Pn(e, n, r) {
  (n(r), Mn(e));
}
function Dn(e, n, r) {
  (n(r), Mn(e));
}
function Mt(e, n) {
  for (let r of e.activitySenders.values()) Pn(e, r, n ? On : di);
  for (let r of e.agentActivitySinks.values()) Dn(e, r, n ? Pt : 0);
}
function Fn(e) {
  return e.activitySenders.size + e.agentActivitySinks.size;
}
function Dt(e) {
  if (Fn(e) === 0) return;
  if (e.activityRefreshTimer !== void 0) return;
  ((e.activityRefreshTimer = setInterval((n) => Mt(n, !0), e.activityRefreshMs, e)),
    e.activityRefreshTimer.unref?.());
}
function Vn(e) {
  if (Fn(e) === 0 && e.activityRefreshTimer !== void 0)
    (clearInterval(e.activityRefreshTimer), (e.activityRefreshTimer = void 0));
}
function li(e, n) {
  if (n) {
    if (e.activityClearTimer !== void 0) {
      (clearTimeout(e.activityClearTimer), (e.activityClearTimer = void 0));
      return;
    }
    ((e.activityOnsetTimer ??= setTimeout(
      (r) => {
        ((r.activityOnsetTimer = void 0), Mt(r, !0), Dt(r));
      },
      e.activityEdgeDebounceMs,
      e
    )),
      e.activityOnsetTimer.unref?.());
  } else {
    if (e.activityOnsetTimer !== void 0) {
      (clearTimeout(e.activityOnsetTimer), (e.activityOnsetTimer = void 0));
      return;
    }
    ((e.activityClearTimer ??= setTimeout(
      (r) => {
        if (((r.activityClearTimer = void 0), r.activityRefreshTimer !== void 0))
          (clearInterval(r.activityRefreshTimer), (r.activityRefreshTimer = void 0));
        Mt(r, !1);
      },
      e.activityEdgeDebounceMs,
      e
    )),
      e.activityClearTimer.unref?.());
  }
}
function Nn() {
  return U();
}
function Un(e) {
  if (e.activityUnsubscribe !== void 0) return;
  let n = Nn();
  e.activityUnsubscribe = $Sr(n, () => {
    try {
      li(e, PLn(n));
    } catch (r) {
      l(r);
    }
  });
}
function Gn(e) {
  return (PLn(Nn()) && e.activityOnsetTimer === void 0) || e.activityClearTimer !== void 0;
}
function $n(e, n, r) {
  if (e.disposed) return;
  if ((Un(e), e.activitySenders.set(n, r), TEs(e, n), Gn(e))) (Pn(e, r, On), Dt(e));
}
function Hn(e, n, r) {
  if (e.activitySenders.get(n) === r) (e.activitySenders.delete(n), AEs(e, n), Vn(e));
}
function Xe(e, n, r) {
  if (e.disposed) return;
  if ((Un(e), e.agentActivitySinks.set(n, r), Gn(e))) (Dn(e, r, Pt), Dt(e));
}
function Qe(e, n, r) {
  if (e.agentActivitySinks.get(n) === r) (e.agentActivitySinks.delete(n), Vn(e));
}
var Ze = "frame-sync.v1";
function Pe(e, n) {
  let r = new URL("/api/frame/sync", Vii());
  if ((r.searchParams.set("slug", e), n?.commentHint === !0))
    r.searchParams.set("comment_hint", "1");
  if (n?.versionNotices === !0) r.searchParams.set("vn", kHt);
  return JSr(r);
}
var Ft = /^(?=.{1,1024}$)[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){5}$/;
function ve(e) {
  if (!Ft.test(e)) return !1;
  let n = e.split(".", 4)[2];
  return n !== void 0 && pi(n).role.endsWith("_agent");
}
var fi = 28;
function pi(e) {
  let n = e.length - fi;
  if (n <= 0 || e.slice(n, n + 4) !== "_id_") return { role: e };
  let r = e.slice(n + 4);
  return Rft.test(r) ? { role: e.slice(0, n), id: r } : { role: "" };
}
function et(e) {
  let n = e.split(".", 6)[4];
  if (n === void 0 || !/^[0-9]{1,12}$/.test(n)) return;
  let r = Number(n);
  return Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
var mi = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function me(e) {
  let [n, r] = e.split(".", 3);
  if (n === void 0 || r === void 0 || r === "") return;
  let s = Buffer.from(n, "base64url").toString("utf8");
  if (!mi.test(s) || Buffer.from(s, "utf8").toString("base64url") !== n) return;
  return { accountUuid: s, organizationUuid: r };
}
var hi = 60000,
  Kn = "boot_request_error",
  Vt = "TOKEN_REFRESH_DECLINED_REASON_LINEAGE_EXPIRED",
  jn = "JOIN_DENIED_REASON_DENIED",
  qn = "JOIN_DENIED_REASON_CAP_INVALID",
  zn = { on: "socket", detail: "4503", opened: !0, uptimeMs: 0, ageMs: 0 },
  rt = p(() =>
    u({ kind: o(), slug: o().optional(), actor: o().optional(), payload: oe().optional() })
  ),
  Nt = p(() => u({ cap: o(), exp: v() })),
  De = p(() => u({ reason: o() }));
function Ut(e, n) {
  return _({ kind: "activity", slug: e, payload: { busyS: n } });
}
function Yn(e) {
  if (i.CLAUDE_CODE_REMOTE) return "remote";
  if (qii()) return "cp_override";
  if (hQt(Pe(e)) !== null) return "egress_denied";
  return null;
}
async function Jn(e, n) {
  let r = e.storedCap;
  if (!e.rebootNeeded && r !== void 0 && r.exp * 1000 - Date.now() > hi) {
    let w = await Jk(e.context.storageV5).catch(() => {
      return;
    });
    if (!n.isCurrent()) return { outcome: "stale" };
    if ($g(e.owner, w)) return { outcome: "token", token: r.cap, boot: void 0 };
  }
  let s,
    d = Date.now();
  try {
    s = await wP({ slug: e.slug, env: Co() }, n.feature, e.abort.signal, {
      agentPeer: !0,
      ...(e.bootedVersion !== void 0 && {
        lean: { version: e.bootedVersion, mustCarry: (w) => "syncToken" in w }
      }),
      speculative: !0,
      credentials: e.context.credentials
    });
  } catch {
    s = { err: "boot threw", errorCode: Kn };
  }
  if (!n.isCurrent()) return { outcome: "stale" };
  if (s.err !== null) {
    if (v4(s)) return { outcome: "other_org" };
    if (xme(s)) return { outcome: "not_found" };
    return {
      outcome: "boot_failed",
      status: s.status,
      noAnswer: s.errorCode === Kn,
      elapsedMs: Date.now() - d
    };
  }
  if (s.assetToken === void 0) return { outcome: "public_outside_org" };
  let a = s.data.syncToken,
    h = typeof a === "string" && Ft.test(a) ? me(a) : void 0;
  if (e.owner !== void 0 && h !== void 0 && !$g(e.owner, h)) return { outcome: "owner_changed" };
  let b = typeof a === "string" && ve(a) ? h : void 0;
  if (typeof a !== "string" || b === void 0) return { outcome: "not_admitted" };
  return (
    (e.owner = b),
    (e.rebootNeeded = !1),
    (e.bootedVersion = s.ver),
    Xn(e, gi(a)),
    { outcome: "token", token: a, boot: s.data }
  );
}
function gi(e) {
  return { cap: e, exp: et(e) ?? Math.floor((Date.now() + w0n) / 1000) };
}
function Xn(e, n) {
  let r = Date.now(),
    s = Math.min(r + w0n, Math.max(r + Jvs, n.exp * 1000));
  ((e.storedCap = { cap: n.cap, exp: Math.floor(s / 1000) }), (e.capStrikes = 0));
}
function Qn(e, n, r) {
  switch (n) {
    case "ctrl:token_refresh": {
      let s = Nt().safeParse(r);
      if (s.success && ve(s.data.cap) && $g(e.owner, me(s.data.cap)))
        Xn(e, { cap: s.data.cap, exp: s.data.exp });
      return !0;
    }
    case "ctrl:token_refresh_declined": {
      let s = De().safeParse(r);
      if (s.success && s.data.reason === Vt) ((e.rebootNeeded = !0), (e.storedCap = void 0));
      return !0;
    }
    default:
      return !1;
  }
}
function bi(e, n, r) {
  if (n()) return;
  if (e.taskId !== void 0)
    try {
      ES(e.taskId, e.context.taskRegistry, { quiet: !0 });
    } catch {}
  r("error");
}
function it(e) {
  if (((e.stopped = !0), (e.storedCap = void 0), e.abort.abort(), e.reconnectTimer !== void 0))
    (clearTimeout(e.reconnectTimer), (e.reconnectTimer = void 0));
  if (((e.send = void 0), (e.state = "closed"), e.taskId !== void 0)) {
    let n = e.taskId;
    e.taskId = void 0;
    try {
      ES(n, e.context.taskRegistry, { quiet: !0 });
    } catch {}
  }
}
var _i = 404;
function Si(e) {
  let n = Number(e);
  return n === 1008 || (n >= 4000 && n <= 4999);
}
function Zn(e, n, r) {
  switch (n.on) {
    case "dial_error":
      return n.deterministic ? "refused" : "dropped";
    case "boot":
      if (g3(n.status)) return "unavailable";
      if (n.noAnswer) return n.elapsedMs >= r.stallThresholdMs ? "unavailable" : "dropped";
      return "refused";
    case "socket": {
      if (n.detail === DOt) return "revoked";
      if (n.opened) {
        if (n.uptimeMs >= r.stallThresholdMs) return "dropped";
        if (n.detail === MOt && !e.rebootNeeded) return "unavailable";
        return Si(n.detail) ? "refused" : "dropped";
      }
      let s = TIe(n.detail);
      if (s !== null)
        return g3(s.status) || s.cfMitigated || s.status === _i ? "unavailable" : "refused";
      return n.detail === NLn || n.ageMs >= r.stallThresholdMs ? "unavailable" : "dropped";
    }
  }
}
function er(e, n, r) {
  let s = Zn(e, n, r);
  return s === "refused" || s === "revoked";
}
function tr(e, n, r) {
  let s = Zn(e, r, n);
  if (s === "revoked" || s === "refused") e.storedCap = void 0;
  else if (s === "dropped" && r.on !== "boot" && e.storedCap !== void 0) {
    let a = r.on === "socket" && r.opened && r.uptimeMs >= n.minUptimeMs;
    if (((e.capStrikes = a ? 0 : e.capStrikes + 1), e.capStrikes >= Qvs)) e.storedCap = void 0;
  }
  if (s === "revoked") return { next: "end", reason: "revoked" };
  if (s === "unavailable") {
    let a = e.stalledSince === void 0;
    if (a) ((e.stalledSince = Date.now()), (e.stalls = 0));
    let h = Math.min(n.stallMinMs * 2 ** e.stalls, n.stallMaxMs / 2),
      b = Math.min(h * 2, n.stallMaxMs);
    return (
      e.stalls++,
      {
        next: "redial",
        delayMs: Math.round(h + Math.random() * (b - h)),
        stalled: !0,
        stallRunStarted: a
      }
    );
  }
  if (((e.stalledSince = void 0), s === "refused")) {
    if ((e.refusals++, e.refusals > n.maxConsecutiveRefusals))
      return { next: "end", reason: "refused" };
  }
  if (r.on === "socket" && r.opened) {
    if (r.uptimeMs >= n.stallThresholdMs) e.refusals = 0;
    if (r.uptimeMs >= n.minUptimeMs) e.backoff = 0;
  }
  let d = Math.min(n.capMs, n.baseMs * 2 ** Math.min(e.backoff, 5));
  return (
    e.backoff++,
    { next: "redial", delayMs: Math.round(Math.random() * d), stalled: !1, stallRunStarted: !1 }
  );
}
function Gt(e, n, r) {
  if (e.reconnectTimer !== void 0) clearTimeout(e.reconnectTimer);
  ((e.state = "closed"), (e.reconnectTimer = setTimeout(vi, n, e, r)), e.reconnectTimer.unref?.());
}
function vi(e, n) {
  ((e.reconnectTimer = void 0), n(e));
}
async function nr(e, n, r, s) {
  let { slug: d } = e,
    { live: a } = Z(),
    h = !1,
    b = !1,
    w,
    S,
    R = () => b || !s(),
    x = Date.now(),
    H = () => (h && e.openedAt > 0 ? Date.now() - e.openedAt : 0),
    L = (y) => {
      if (R()) return;
      b = !0;
      let T = H(),
        P = Date.now() - x;
      if (e.send === w) ((e.send = void 0), (e.state = "closed"), (e.openedAt = 0));
      r.onEnded(y, { opened: h, uptimeMs: T, ageMs: P });
    };
  try {
    let y = await gQt(
      {
        ws: { url: Pe(d, { versionNotices: !0 }), protocols: [Ze, n] },
        headers: { "User-Agent": M$() },
        description: r.description,
        timeout_ms: 0,
        persistent: !0,
        quietLifecycle: !0,
        ambient: !0,
        handshakeDeadlineMs: r.handshakeDeadlineMs,
        ...(e.taskId !== void 0 && { reuseTaskId: e.taskId }),
        transform: (T) => (r.onFrame(T), null),
        keepalive: r.keepalive,
        onSender: (T) => {
          if (R()) return;
          ((w = T),
            (e.send = T),
            (e.state = "open"),
            (S = (P) => T(Ut(d, P))),
            Xe(a, r.activitySinkKey, S));
        },
        onSenderClosed: () => {
          if (S !== void 0) Qe(a, r.activitySinkKey, S);
          if (w !== void 0 && e.send === w) {
            if (((e.send = void 0), e.state === "open")) e.state = "closed";
          }
          if (R()) return;
          let T = e.taskId,
            P = T === void 0 ? void 0 : e.context.taskRegistry.all()[T];
          if (T !== void 0 && P?.status !== "running") {
            L("task_ended");
            return;
          }
          setTimeout(bi, 0, e, R, L).unref?.();
        },
        onLifecycle: (T, P) => {
          if (R()) return;
          if (T === "open") {
            ((h = !0), (e.everOpened = !0), (e.openedAt = Date.now()), r.onOpen());
            return;
          }
          L(P);
        }
      },
      e.context
    );
    if (((e.taskId = y.data.taskId), !s()))
      return (ES(y.data.taskId, e.context.taskRegistry, { quiet: !0 }), { outcome: "stale" });
    return { outcome: "armed" };
  } catch (y) {
    return (
      t(`[${r.label}] connect failed slug=${d}: ${y instanceof Error ? y.name : "error"}`),
      { outcome: "error", error: y }
    );
  }
}
var wi = "tengu_slate_lantern_hush",
  Ai = [600, 86400],
  Ri = [25, 600],
  yi = 50,
  ki = p(() => {
    let e = v()
      .optional()
      .catch(void 0);
    return u({ idleAfterS: e, idleKeepaliveS: e });
  });
function rr(e, [n, r]) {
  return Math.min(Math.max(Math.round(e), n), r);
}
function Ei() {
  let e = k(wi, null);
  if (typeof e === "string") e = ot(e, !1);
  let n = ki().safeParse(e),
    r = n.success ? n.data : {},
    s = r.idleAfterS === void 0 || r.idleAfterS <= 0 ? 0 : rr(r.idleAfterS, Ai) * 1000,
    d = (r.idleKeepaliveS === void 0 ? yi : rr(r.idleKeepaliveS, Ri)) * 1000;
  return { idleAfterMs: s, idleKeepaliveMs: d };
}
function Ti(e, n) {
  if (HGe()) return 0;
  let r = Math.max(CGs(), Jf(), EX() ?? 0, e.lastArtifactToolCallAt);
  return Math.max(0, n - r);
}
function st(e, n, r = Date.now()) {
  let s = Ei();
  if (s.idleAfterMs <= 0) return n;
  return Ti(e, r) >= s.idleAfterMs ? Math.max(s.idleKeepaliveMs, n) : n;
}
var $t = p(() => u({ tag: o(), ver: o(), replay: M().optional() })),
  Ht = "INVALIDATE_TAG_LIVE",
  Kt = "INVALIDATE_TAG_SHARED",
  or = "INVALIDATE_TAG_HEAD",
  sr = p(() => u({ commentsEmpty: M(), readAtMs: v().int().positive().max(8640000000000000) }));
function Bt(e) {
  return e * 3 + 5000;
}
function Ci() {
  return i.CLAUDE_CODE_ARTIFACT_PRESENCE ?? k("tengu_brass_plover", !1);
}
function at(e) {
  if (!Ci()) return "flag_off";
  return Yn(e);
}
function Ae() {
  return Z().presence;
}
function Fe(e) {
  return !e.stopped && Ae().conns.get(e.slug) === e;
}
function ur(e) {
  let { slug: n, url: r } = e;
  try {
    let s = at(n);
    if (s !== null) {
      if (s !== "flag_off") t(`[artifactPresence] not arming slug=${n}: ${s}`);
      return;
    }
    let d = Ae();
    if (d.declined.has(n)) return;
    let a = EOt(e.context);
    ((d.dispose = Pi), (d.accountChanged = Fi), (d.disposeSlug = Mi), (d.retireSlug = lr));
    let h = d.conns.get(n);
    if (h !== void 0 && !h.stopped) {
      if (((h.url = r), h.stalledSince !== void 0 && h.reconnectTimer !== void 0))
        Gt(h, Math.round(Math.random() * d.timing.capMs), dr);
      return;
    }
    xi(d, n, r, a);
  } catch (s) {
    t(`[artifactPresence] arm threw slug=${n}: ${s instanceof Error ? s.name : "error"}`);
  }
}
function xi(e, n, r, s) {
  let d = {
    slug: n,
    url: r,
    context: s,
    send: void 0,
    state: "connecting",
    storedCap: void 0,
    capStrikes: 0,
    owner: void 0,
    rebootNeeded: !1,
    bootedVersion: void 0,
    backoff: 0,
    refusals: 0,
    stalledSince: void 0,
    stalls: 0,
    openedAt: 0,
    everOpened: !1,
    reconnectTimer: void 0,
    taskId: void 0,
    refusedAdmission: !1,
    stopped: !1,
    abort: new AbortController()
  };
  (e.conns.set(n, d),
    lEs(Li),
    cr(d, "initial").catch((a) => {
      (t(`[artifactPresence] connect threw slug=${n}: ${a instanceof Error ? a.name : "error"}`),
        we(d, { on: "dial_error", deterministic: !1 }));
    }));
}
var Li = { closeByTaskId: (e) => Wi(e) };
function Wi(e) {
  let n = uQs();
  if (n === void 0) return !1;
  for (let r of n.conns.values()) {
    if (r.taskId !== e) continue;
    return ((r.taskId = void 0), n.declined.add(r.slug), re(r), !0);
  }
  return !1;
}
async function cr(e, n) {
  let r = at(e.slug);
  if (r !== null) {
    (t(`[artifactPresence] closing slug=${e.slug}: ${r}`), re(e));
    return;
  }
  e.state = "connecting";
  let s = await Jn(e, { feature: "artifact_presence", isCurrent: () => Fe(e) });
  switch (s.outcome) {
    case "stale":
      return;
    case "not_found":
      re(e);
      return;
    case "other_org":
    case "public_outside_org":
      (f("artifact_presence", s.outcome), re(e));
      return;
    case "boot_failed": {
      let d = { on: "boot", status: s.status, noAnswer: s.noAnswer, elapsedMs: s.elapsedMs };
      if (n === "initial" && er(e, d, Ae().timing))
        (t(`[artifactPresence] boot failed for slug=${e.slug}; no presence connection`), re(e));
      else we(e, d);
      return;
    }
    case "not_admitted":
      (t(`[artifactPresence] no agent token minted for slug=${e.slug}; no presence connection`),
        re(e));
      return;
    case "owner_changed":
      (f("artifact_presence", "owner_changed"), re(e));
      return;
    case "token":
      await Ii(e, s.token);
      return;
  }
}
async function Ii(e, n) {
  let { timing: r } = Ae(),
    { slug: s } = e,
    d = !e.everOpened;
  e.refusedAdmission = !1;
  let a = await nr(
    e,
    n,
    {
      description: `presence on artifact ${e.url}`,
      keepalive: {
        openFrames: [],
        frame: _({ kind: "ping", slug: s }),
        intervalMs: r.keepaliveMs,
        sendEveryMs: () => st(Z().live, r.keepaliveMs),
        deadlineMs: r.keepaliveDeadlineMs ?? Bt(r.keepaliveMs)
      },
      onFrame: (b) => Oi(e, b),
      onOpen: () => {
        if (d) g("artifact_presence", { connected: !0 });
      },
      onEnded: (b, w) => {
        let S = e.refusedAdmission;
        if (((e.refusedAdmission = !1), S && b !== DOt)) {
          we(e, zn);
          return;
        }
        if (w.opened) {
          if (b !== MOt && b !== DOt) f("artifact_presence", `closed_${b ?? "unknown"}`);
        } else {
          let R = TIe(b);
          m(
            "artifact_presence",
            "connect_failed",
            R === null ? void 0 : { http_status: R.status, cf_mitigated: R.cfMitigated }
          );
        }
        we(e, { on: "socket", detail: b, ...w });
      },
      handshakeDeadlineMs: r.handshakeDeadlineMs,
      activitySinkKey: `presence:${s}`,
      label: "artifactPresence"
    },
    () => Fe(e)
  );
  if (a.outcome !== "error") return;
  let h = a.error instanceof Fct && !a.error.message.startsWith("could not resolve");
  if (!Fe(e)) return;
  if (d && h) {
    (m("artifact_presence", "ws_open_error"), re(e));
    return;
  }
  (f("artifact_presence", "ws_open_error"),
    (e.state = "closed"),
    we(e, { on: "dial_error", deterministic: h }));
}
function we(e, n) {
  if (!Fe(e)) return;
  let r = tr(e, Ae().timing, n);
  if (r.next === "end") {
    (f("artifact_presence", r.reason === "revoked" ? "closed_4403" : "refused_gave_up"), re(e));
    return;
  }
  if (r.stallRunStarted) {
    let s = n.on === "boot" ? n.status : n.on === "socket" ? TIe(n.detail)?.status : void 0;
    f("artifact_presence", "stall_run_started", {
      boot: n.on === "boot",
      ...(s !== void 0 && { http_status: s })
    });
  }
  Gt(e, r.delayMs, dr);
}
function dr(e) {
  if (!Fe(e)) return;
  cr(e, "reconnect").catch((n) => {
    (t(
      `[artifactPresence] reconnect threw slug=${e.slug}: ${n instanceof Error ? n.name : "error"}`
    ),
      we(e, { on: "dial_error", deterministic: !1 }));
  });
}
function re(e) {
  it(e);
  let n = Ae();
  if (n.conns.get(e.slug) === e) n.conns.delete(e.slug);
}
function Oi(e, n) {
  if (e.stopped || n.charCodeAt(0) !== 123) return;
  let r;
  try {
    r = Vo(n);
  } catch {
    return;
  }
  let s = rt().safeParse(r);
  if (!s.success) return;
  let { kind: d, slug: a, actor: h, payload: b } = s.data;
  if (h !== void 0 || (a !== void 0 && a !== e.slug)) return;
  if (Qn(e, d, b)) return;
  switch (d) {
    case "join_denied": {
      let w = De().safeParse(b).data?.reason;
      if (w === jn) {
        (m("artifact_presence", "join_denied"), re(e));
        return;
      }
      if ((f("artifact_presence", "join_denied"), w === qn)) e.storedCap = void 0;
      if (((e.refusedAdmission = !0), e.taskId !== void 0))
        try {
          ES(e.taskId, e.context.taskRegistry, { quiet: !0 });
        } catch {}
      return;
    }
    case "ctrl:comment":
      ir(e.slug)?.comment();
      return;
    case "ctrl:invalidate": {
      let w = $t().safeParse(b);
      if (w.success && (w.data.tag === Ht || w.data.tag === Kt))
        ir(e.slug)?.ver(w.data.ver, "sync");
      return;
    }
    default:
      return;
  }
}
function ir(e) {
  let n = Z().live.supervisors.get(e);
  return n !== void 0 && !n.stopped ? n.wake : void 0;
}
function Mi(e, n) {
  (e.declined.delete(n), lr(e, n));
}
function lr(e, n) {
  let r = e.conns.get(n);
  if (r !== void 0) re(r);
}
function Pi(e) {
  e.declined.clear();
  for (let n of [...e.conns.values()]) it(n);
  e.conns.clear();
}
function Fi(e, n) {
  for (let r of [...e.conns.values()]) {
    if ($g(r.owner, n)) continue;
    if ((it(r), e.conns.get(r.slug) === r)) e.conns.delete(r.slug);
  }
}
function FSr(e, n) {
  return jt(e, n) >= 0;
}
function jt(e, n) {
  return qt(e, n).at(-1) ?? -1;
}
function qt(e, n) {
  let r = n.toLowerCase(),
    s = [];
  for (let d = 0; d < e.length; d++) {
    let a = e[d];
    try {
      let h = !YE(a)
        ? null
        : a.type === "user"
          ? mr(a.message?.content)
          : a.type === "attachment" && a.attachment.type === "queued_command"
            ? mr(a.attachment.prompt)
            : null;
      if (h !== null && Bi(h, r)) s.push(d);
    } catch {}
  }
  return s;
}
var fr = /^https?:\/\//i,
  Vi = /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d+)?\//i,
  hr = "\\t\\n\\v\\f\\r \\u00a0\\u1680\\u2000-\\u200a\\u2028\\u2029\\u202f\\u205f\\u3000",
  Ni = new RegExp(`[${hr}]+`),
  Ui = /[\u200b-\u200f\u202a-\u202e\u2060-\u2064\ufeff]/,
  gr = "(<[{'\"`*_~",
  Gi = new RegExp(`^[${gr}]+`),
  $i = /[.,;:!?)\]}'">`*_~\u200b]+$/,
  Hi = new RegExp(`(?<=^|[${hr}])[${gr}]*!?\\[[^\\][\\n]*\\]\\(([^\\s()]+)\\)`, "g"),
  Ki = "artifact-files";
function Bi(e, n) {
  for (let r of e.matchAll(Hi)) if (pr(r[1], n)) return !0;
  return e.split(Ni).some((r) => pr(r.replace(Gi, ""), n));
}
function pr(e, n) {
  let r = e.replace($i, "");
  if (Ui.test(r)) return !1;
  if (fr.test(r) || Vi.test(r)) {
    let d = fr.test(r) ? r : `https://${r}`;
    return gZ(d)?.slug === n;
  }
  let s = r.toLowerCase().split(/[/\\]/);
  if (s.length > 1) return s.some((d, a) => d === n && s[a - 1] === Ki);
  return s[0] === n || U$(r) === n;
}
function mr(e) {
  if (typeof e === "string") return e;
  if (!Array.isArray(e)) return null;
  let n = [];
  for (let r of e)
    if (
      typeof r === "object" &&
      r !== null &&
      "type" in r &&
      r.type === "text" &&
      "text" in r &&
      typeof r.text === "string"
    )
      n.push(r.text);
  return n.length > 0
    ? n.join(`
`)
    : null;
}
var ji = "frame-live.v1",
  qi = { enqueuePendingNotification: (e) => Za(e) },
  zi = 25000;
function Huo() {
  Z().live.lastArtifactToolCallAt = Date.now();
}
var Yi = 90000,
  Yt =
    "To pause them again, press Ctrl+C at an idle prompt (Stop in Desktop/SDK); to stop them for good, \u2715 the watch in the tasks list or use the kill-all-agents gesture.",
  Ji =
    "If this wasn't intended, kill the task again to stop them for this artifact, or use the kill-all-agents gesture to disarm auto-replies for the whole session.";
function Xi(e, n, r) {
  let s = e.supervisors.get(n);
  if (s !== void 0) s.explicit = !1;
  for (let d of Object.values(r.all()))
    if (ZB(d) && d.status === "running" && d.frameLive?.slug === n && d.frameLive.explicit)
      r.update(d.id, (a) =>
        ZB(a) && a.frameLive !== void 0
          ? {
              ...a,
              description: Jt(xn({ slug: n, env: Co() }), !1, a.frameLive.armedVia),
              frameLive: { ...a.frameLive, explicit: !1 }
            }
          : a
      );
}
function Qi(e, n) {
  let r = Z().live,
    s = r.supervisors.get(e)?.context.storageV5 ?? afo();
  $Ln(s);
  let d;
  if (n.taskStop) {
    if ((Z().durable.stopLatches.confirmStop(e), !e1(e)))
      (Uct(e, { storageV5: s }),
        import("./chunk-eb6at7v2.js").then((h) => h.notifyTakenOverSlugStopped(e)));
    let { wasWatching: a } = wr({
      slug: e,
      taskRegistry: n.taskRegistry,
      announce: !n.running,
      killRow: (h) => {
        if (h.id !== n.taskId) ES(h.id, n.taskRegistry, { userStop: !0 });
      }
    });
    d = a;
  } else {
    if (!Zi(r, e, n)) return !1;
    (te(r, e), (d = !0));
  }
  if (n.modelOrigin !== !0) iwr(e, s);
  return d;
}
function wr(e) {
  let { slug: n, taskRegistry: r } = e,
    s = Z().live,
    d = s.supervisors.get(n),
    a = (d !== void 0 && !d.stopped) || s.inFlightSubscribes.has(n);
  if (d?.autoReactWiring !== void 0) fEs(n);
  let h = Object.values(r.all()).filter(
    (b) => ZB(b) && b.status === "running" && b.frameLive?.slug === n
  );
  if (
    e.announce &&
    d !== void 0 &&
    !d.stopped &&
    h.length === 0 &&
    (d.taskId !== void 0 || d.timer !== void 0)
  )
    dt(s, d, "watching this artifact was stopped just now");
  else te(s, n);
  for (let b of h) ((a = !0), e.killRow(b));
  if (a && P_(n)) k0n(n);
  return (Zuo(n), { wasWatching: a });
}
function Zi(e, n, r) {
  let s = e.supervisors.get(n);
  if (s === void 0 || s.stopped) return !1;
  if (r.running) return s.taskId === void 0 || s.taskId === r.taskId;
  if (s.taskId === void 0 || s.taskId !== r.taskId) return !1;
  return s.timer !== void 0 || e.inFlightSubscribes.has(n);
}
function te(e, n) {
  let r = e.supervisors.get(n);
  if (r) (thn(r), e.supervisors.delete(n));
  (f1n(n), N7n(n), Ve(n)?.sourceEnded());
}
function Re(e, n, r) {
  if (r) return { ...n, humanTurnSnapshot: !0 };
  if (e === void 0) return n;
  let { humanTurnSnapshot: s, ...d } = n;
  return {
    ...d,
    context: e.context,
    publishTranscript: e.publishTranscript,
    ...(e.humanTurnSnapshot && { humanTurnSnapshot: !0 })
  };
}
function br(e, n, r) {
  let s = e.supervisors.get(n)?.autoReactWiring;
  return s?.humanTurnSnapshot === !0 && (r?.humanTurnSnapshot !== !0 || s.context !== r.context);
}
function _r(e, n) {
  let r = e.supervisors.get(n.slug);
  if (r && !r.stopped) {
    if (n.carriedVer !== void 0) r.carriedVer = n.carriedVer;
    let d = r.armedVia === "mcp_write";
    if (!n.machineArm) {
      if (((r.lastActivityAt = Date.now()), r.timer !== void 0))
        (clearTimeout(r.timer), (r.timer = void 0));
      if (
        ((r.stalledSince = void 0),
        (r.lastStalledAt = void 0),
        (r.stallOutAfterMs = void 0),
        r.taskId === void 0 &&
          !e.inFlightSubscribes.has(n.slug) &&
          yve(n.context, n.slug).length === 0)
      )
        ((r.watchedSince = Date.now()), (r.armedVia = n.armedVia), owr(n.slug));
      else if (n.armedVia === "publish") r.armedVia = "publish";
      else if (r.armedVia === "mcp_write") r.armedVia = n.armedVia;
      if (d && r.armedVia !== "mcp_write") mL(e, n.slug);
    }
    if (((r.explicit = r.explicit || n.explicit), n.autoReactWiring !== void 0)) {
      let a = r.autoReactWiring !== void 0;
      if (
        ((r.autoReactWiring = Re(r.autoReactWiring, n.autoReactWiring, n.humanTurnWiring === !0)),
        !a)
      )
        mL(e, n.slug);
    }
    return r;
  }
  let s = {
    slug: n.slug,
    url: n.url,
    getKnownVer: n.getKnownVer,
    ownPublishes: n.ownPublishes,
    context: n.context,
    abort: new AbortController(),
    explicit: n.explicit,
    stopped: !1,
    watchedSince: Date.now(),
    lastActivityAt: Date.now(),
    armedVia: n.armedVia,
    consecutiveFailures: 0,
    ...(n.carriedVer !== void 0 && { carriedVer: n.carriedVer }),
    ...(n.autoReactWiring !== void 0 && {
      autoReactWiring: Re(void 0, n.autoReactWiring, n.humanTurnWiring === !0)
    })
  };
  return (e.supervisors.set(n.slug, s), owr(n.slug, s.watchedSince), s);
}
function eo(e, n, r, s) {
  if (e.supervisors.get(r) === n) n.taskId = s;
}
function to(e, n) {
  let { rewatchTiming: r } = e;
  if (r.idleTtlMs <= 0) return !1;
  if (n.explicit || Ar(e, n) || Date.now() - n.lastActivityAt < r.idleTtlMs) return !1;
  return !(n.autoReactWiring !== void 0 && CA() && (!hy(n.slug) || P_(n.slug)));
}
function Ar(e, n) {
  return n.slug === e.mostRecentPublishSlug && n.armedVia !== "mcp_write";
}
function DLn(e, n) {
  return e ? "watch" : n === "watch" ? "watch_stopped" : n;
}
function BSr(e) {
  return rEs.find((n) => n === e) ?? "publish";
}
function cQt(e) {
  switch (e) {
    case "publish":
      return {
        task: "auto-armed on publish",
        row: "armed by a publish",
        idle: "automatically when you published this artifact"
      };
    case "attach":
      return {
        task: "attached via /artifacts",
        row: "armed when the user attached it from /artifacts",
        idle: "automatically when you attached this artifact from /artifacts"
      };
    case "watch":
      return {
        task: "watch requested",
        row: "requested by you",
        idle: "when you asked to watch this artifact"
      };
    case "resume":
      return {
        task: "resume requested",
        row: "re-armed when the user asked to resume replies",
        idle: "when you asked to resume its comment auto-replies"
      };
    case "session_resume":
      return {
        task: "re-armed on session resume",
        row: "re-armed when this session was resumed",
        idle: "automatically when this session was resumed"
      };
    case "mcp_write":
      return {
        task: "presence while editing via MCP",
        row: "armed when this session edited the page through an MCP tool",
        idle: "automatically when this session edited this page through an MCP tool"
      };
    case "watch_stopped":
      return {
        task: "watch requested; auto-replies since stopped",
        row: "requested by you; its auto-replies since stopped by the user",
        idle: "when you asked to watch this artifact"
      };
  }
}
function no(e, n) {
  let r = cQt(n.armedVia).idle,
    s =
      n.armedVia === "watch"
        ? "(your watch request was later stopped; idle auto-armed watches are retired)"
        : "(idle auto-armed watches are retired)";
  return `it was armed ${r} and has seen no activity for over ${un(e.rewatchTiming.idleTtlMs, { hideTrailingZeros: !0 })} ${s}`;
}
function ro(e, n, r) {
  return e === NLn || n >= r.stallThresholdMs;
}
function io(e) {
  let n = TIe(e);
  return n !== null && (g3(n.status) || n.cfMitigated);
}
function oo(e) {
  return Math.max(e.stallMaxMs, e.longStallMaxMs) + 2 * xAr + e.handshakeDeadlineMs + 60000;
}
function Qt(e, n, r) {
  let { uptimeMs: s, resumeNeverOpened: d = !1, stalled: a = !1 } = r,
    { rewatchTiming: h } = e,
    b = e.supervisors.get(n);
  if (!b || b.stopped) return;
  if (Z().durable.stopLatches.isStopped(n)) {
    if ((f("artifact_live_subscribe", "stop_latched"), d))
      he(
        e,
        b,
        "the resumed live watch could not connect, so the earlier stop stays in place and comment auto-replies were not resumed",
        "could not connect",
        {
          advice:
            "tell the user, and call resume_replies again only if they still want auto-replies resumed"
        }
      );
    else dt(e, b);
    return;
  }
  if (to(e, b)) {
    (g("artifact_live_subscribe", { idle_retired: !0 }),
      he(e, b, no(e, b), "idle", { advice: Oo, passive: !0 }));
    return;
  }
  let w = !1,
    S = !1;
  if (a) {
    let y = Date.now();
    if (
      b.stalledSince === void 0 ||
      b.lastStalledAt === void 0 ||
      b.stallOutAfterMs === void 0 ||
      y - b.lastStalledAt > oo(h)
    ) {
      ((b.stalledSince = y),
        (b.stallOutAfterMs = h.maxStallMs + Math.round(Math.random() * h.stallOutJitterMs)));
      let T = r.httpStatus ?? TIe(r.closeCode)?.status;
      f("artifact_live_subscribe", "stall_run_started", {
        boot: r.closeCode === void 0,
        ...(T !== void 0 && { http_status: T })
      });
    } else S = !0;
    ((b.lastStalledAt = y), (w = y - b.stalledSince >= b.stallOutAfterMs));
  } else if (
    ((b.stalledSince = void 0),
    (b.lastStalledAt = void 0),
    (b.stallOutAfterMs = void 0),
    s >= h.minUptimeMs)
  )
    b.consecutiveFailures = 0;
  else if (r.reuseRefused !== !0) b.consecutiveFailures++;
  if (b.consecutiveFailures > h.maxConsecutiveFailures || w) {
    if (w) f("artifact_live_subscribe", "rewatch_gave_up", { stalled: !0 });
    else f("artifact_live_subscribe", "rewatch_gave_up");
    he(e, b, "the live connection kept failing and reconnecting has stopped", Nr, {
      advice: ft,
      passive: !0
    });
    return;
  }
  let R = Dme(),
    x =
      a &&
      S &&
      (TIe(r.closeCode)?.cfMitigated === !0 ||
        !R ||
        b.lease === void 0 ||
        !$fo(b.lease, h, Z().accountEpoch, Date.now() + h.stallMinMs)),
    H =
      s > 0 &&
      s >= h.minUptimeMs &&
      r.closeCode !== void 0 &&
      !(r.expired === !0 && b.transport !== "sync"),
    L = tEs({
      timing: h,
      consecutiveFailures: b.consecutiveFailures,
      leaseMode: R,
      stalled: a,
      longStall: x,
      spread: H
    });
  if (R && H && r.expired !== !0) b.spreadReconnect = !0;
  if (b.timer !== void 0) clearTimeout(b.timer);
  ((b.timer = setTimeout(Rr, L, e, n)), b.timer.unref?.(), (b.nextRewatchAt = Date.now() + L));
}
function he(
  e,
  n,
  r,
  s,
  { advice: d = "watch it again if you still need that", passive: a = !1 } = {}
) {
  if (e.supervisors.get(n.slug) === n) {
    if ((te(e, n.slug), !Z().durable.stopLatches.isStopped(n.slug))) {
      if ((Pr(e, n.slug, "ended", s), n.autoReactWiring !== void 0))
        import("./chunk-eb6at7v2.js").then((w) => w.handBackTakenOverSlug(n.slug));
    }
  } else thn(n);
  let h = n.resumeAnnounce;
  if (h !== void 0) ((n.resumeAnnounce = void 0), h.onGiveUp());
  if (n.armedVia === "mcp_write") return;
  let b = oBe(() => n.autoReactWiring?.title, n.url);
  Za({
    value: Di({
      taskType: Cq,
      summary: Wt(BHs(b, s)),
      body: `
<event>${Wt(`Watch on ${n.url} ended \u2014 ${r}. This session no longer keeps track of new versions of it; ${d}.`)}</event>`
    }),
    mode: "task-notification",
    ...(a && { passive: !0 }),
    priority: "next",
    origin: { kind: "task-notification", source: Cq, slug: n.slug, displayName: b, watchEnded: !0 },
    agentId: tt()
  });
}
function dt(e, n, r = "watching this artifact was stopped earlier in this session") {
  ((n.resumeAnnounce = void 0),
    he(e, n, r, "stopped", { advice: "do not watch it again unless the user asks you to" }));
}
function X(e, n, r, s, d, { unavailable: a = !1, httpStatus: h } = {}) {
  return (
    Zt(e, n, r, { unavailable: a, httpStatus: h }),
    xo(e, n, r, s, d),
    {
      outcome: "skipped",
      reason: s,
      ...(a && { unavailable: !0 }),
      ...(a && h !== void 0 && { httpStatus: h })
    }
  );
}
function Zt(e, n, r, { unavailable: s = !1, httpStatus: d } = {}) {
  if (r) return;
  let a = e.supervisors.get(n);
  if (a !== void 0 && !a.stopped && a.timer === void 0)
    Qt(e, n, { uptimeMs: 0, stalled: s, ...(d !== void 0 && { httpStatus: d }) });
}
async function Rr(e, n) {
  let r = e.supervisors.get(n);
  if (!r || r.stopped) return;
  if (((r.timer = void 0), Z().durable.stopLatches.isStopped(n))) {
    (f("artifact_live_subscribe", "stop_latched"), dt(e, r));
    return;
  }
  if (r.autoReactWiring !== void 0 && hy(n) && !P_(n)) delete r.autoReactWiring;
  g("artifact_live_subscribe", { rewatch_attempt: !0 });
  let s = await pe(e, {
    slug: r.slug,
    url: r.url,
    getKnownVer: r.getKnownVer,
    ownPublishes: r.ownPublishes,
    context: r.context,
    signal: r.abort.signal,
    machineArm: !0,
    seedKnownVerFromBoot: !0,
    ...(r.carriedVer !== void 0 && { seedSurfacedVer: r.carriedVer }),
    ...(r.autoReactWiring !== void 0 && { autoReactWiring: r.autoReactWiring })
  });
  if (s.outcome === "skipped" && s.reason === "stop_latched") return;
  if (r.stopped || e.supervisors.get(n) !== r) {
    if (s.outcome === "skipped")
      Zt(e, n, void 0, { unavailable: s.unavailable === !0, httpStatus: s.httpStatus });
    return;
  }
  if (s.outcome === "skipped")
    if (
      s.reason === "boot_failed" ||
      s.reason === "ws_open_error" ||
      s.reason === "sync_unavailable"
    )
      ((r.lastFailure = s.reason),
        Qt(e, n, {
          uptimeMs: 0,
          stalled: s.unavailable === !0,
          ...(s.httpStatus !== void 0 && { httpStatus: s.httpStatus })
        }));
    else
      (f("artifact_live_subscribe", `rewatch_stopped_${s.reason}`),
        he(e, r, nBe(s.reason) ?? s.reason, nn[s.reason] ?? Gr, Po(s.reason)));
}
async function so(e, n) {
  let r = e.supervisors.get(n),
    s = r?.lease;
  if (!Dme() || r === void 0 || r.stopped || s === void 0 || s.probed) return;
  s.probed = !0;
  let d;
  try {
    d = await y1n({ slug: n, env: Co() }, r.abort.signal, {
      agentPeer: ct(n),
      syncLive: ct(n),
      watchBoot: !0,
      credentials: r.context.credentials
    });
  } catch {
    return;
  }
  if (e.supervisors.get(n) !== r || r.stopped) return;
  let a =
    d.err === null
      ? d.assetToken === void 0
        ? "public_outside_org"
        : void 0
      : d.status === 404
        ? "not_found"
        : v4(d)
          ? "other_org"
          : void 0;
  if (a !== void 0) {
    (f("artifact_live_subscribe", `read_stopped_${a}`),
      he(e, r, nBe(a) ?? a, nn[a] ?? a, { advice: rBe(a) }));
    for (let w of Object.values(r.context.taskRegistry.all()))
      if (ZB(w) && w.status === "running" && w.frameLive?.slug === n)
        ES(w.id, r.context.taskRegistry, { quiet: !0 });
    return;
  }
  if (d.err === null && RAr(d.data) !== void 0) {
    g("artifact_live_subscribe", { read_refused_boot_ok: !0 });
    return;
  }
  let h = d.err === null ? "tokenless" : (d.status ?? d.errorCode);
  if (
    (f("artifact_live_subscribe", `read_refused_boot_${h}`),
    (h === "tokenless" || (typeof h === "number" && h < 500 && h !== 408 && h !== 429)) &&
      r.lease === s)
  )
    (delete r.lease, delete r.renewable);
}
function yr(e) {
  return JSr(new URL(`/edge-api/frame-live/${e}/ws`, zii()));
}
var ao = 8;
function uo(e) {
  let { slug: n, url: r, ownPublishes: s, getKnownVer: d, autoReact: a, onSurfaced: h } = e,
    b = e.surfacedVers ?? [];
  function w(y) {
    if ((b.push(y), b.length > ao)) b.shift();
  }
  if (e.seedSurfacedVer !== void 0 && !b.includes(e.seedSurfacedVer)) w(e.seedSurfacedVer);
  let S = kve(vve, Eve),
    R = !1,
    x = !1;
  function H() {
    if ((kr(n), Ews(n), a && CA()))
      rme({
        slug: n,
        url: r,
        env: a.env,
        tool: a.tool,
        context: a.context,
        ...(a.publishTranscript !== void 0 && { publishTranscript: a.publishTranscript }),
        ...(a.getWiring !== void 0 && { getWiring: a.getWiring }),
        abort: a.abort,
        notify: a.notify,
        ...(a.getTitle !== void 0 && { getTitle: a.getTitle }),
        ...(a.onReadRefused !== void 0 && { onReadRefused: a.onReadRefused })
      });
  }
  function L(y, T) {
    if (!y || !OT.test(y)) return;
    if (e.presenceOnly?.()) return;
    if ((_So(n, y), b.includes(y))) return;
    let P = T === "sync" && { via_sync: !0 };
    if (Dtn(s, n, y)) {
      (g("artifact_live_subscribe", {
        ...(R ? { suppressed_own: !0 } : { suppressed_catch_up: !0 }),
        ...P
      }),
        (R = !0));
      return;
    }
    if (y === d()) return;
    if (x9e(s, n)) {
      g("artifact_live_subscribe", { suppressed_in_flight: !0, ...P });
      return;
    }
    if (!S.tryConsume()) {
      if (!x) ((x = !0), f("artifact_live_subscribe", "ver_rate_suppressed", { ...P }));
      return;
    }
    ((x = !1), w(y));
    try {
      h?.(y);
    } catch {}
    g("artifact_live_subscribe", { surfaced: !0, passive: kHt === "passive", ...P });
  }
  return { comment: H, ver: L };
}
function co(e) {
  return (n) => {
    if (!n.startsWith("{")) return null;
    let r;
    try {
      r = Vo(n);
    } catch {
      return null;
    }
    if (r.kind === "comment") return (e.comment(), null);
    if (r.kind === "summon") return null;
    if (typeof r.ver === "string") e.ver(r.ver, "live");
    return null;
  };
}
var lo = /^\d{1,15}$/;
function Ve(e) {
  return Z().liveDocWatch.headSinks.get(e);
}
function kr(e) {
  let n = Z().live,
    r = n.supervisors.get(e);
  if (r !== void 0 && !r.stopped && r.armedVia !== "mcp_write" && !n.inFlightSubscribes.has(e))
    r.lastActivityAt = Date.now();
}
function fo(e, n, r) {
  return (s) => {
    if (s.charCodeAt(0) !== 123) return null;
    let d;
    try {
      d = Vo(s);
    } catch {
      return null;
    }
    let a = rt().safeParse(d);
    if (!a.success) return null;
    let { kind: h, actor: b, payload: w } = a.data;
    if (b !== void 0 || (a.data.slug !== void 0 && a.data.slug !== n)) return null;
    switch (h) {
      case "ctrl:comment":
        return (e.comment(), null);
      case "ctrl:invalidate": {
        let S = $t().safeParse(w);
        if (!S.success) return null;
        if (S.data.tag === Ht || S.data.tag === Kt) e.ver(S.data.ver, "sync");
        else if (S.data.tag === or && lo.test(S.data.ver)) (kr(n), Ve(n)?.seq(Number(S.data.ver)));
        return null;
      }
      case "ctrl:token_refresh": {
        let S = Nt().safeParse(w);
        if (S.success && ve(S.data.cap)) r.onTokenRefresh(S.data.cap, S.data.exp);
        return null;
      }
      case "ctrl:token_refresh_declined": {
        let S = De().safeParse(w);
        if (S.success && S.data.reason === Vt) r.onExpiryAnnounced();
        return null;
      }
      case "ctrl:comment_hint": {
        let S = sr().safeParse(w);
        if (S.success) r.onCommentHint(S.data.commentsEmpty, S.data.readAtMs);
        return null;
      }
      default:
        return null;
    }
  };
}
function Er(e, n, r, s, d, a) {
  if (!a(e, r)) return "dead";
  return s && (hy(n) ? d && (e.autoReactArmed !== !0 || !P_(n) || IIe(n)) : e.autoReactArmed !== !0)
    ? "replace"
    : "keep";
}
function po(e, n) {
  return LOt(e.id) && Xct(e, n);
}
function mo(e, n, r, s) {
  let d = Date.now(),
    a = null;
  for (let h of Object.values(e.taskRegistry.all())) {
    if (!ZB(h) || h.status !== "running" || h.frameLive?.slug !== n) continue;
    let b = Er(h, n, d, r, s, Xct);
    if (b !== "dead") {
      if (b === "replace") {
        ES(h.id, e.taskRegistry, { quiet: !0 });
        continue;
      }
      a = h.id;
      continue;
    }
    ES(h.id, e.taskRegistry, { quiet: !0, connectionLost: !0 });
  }
  return a;
}
function Tr(e, n) {
  return Object.values(e.all()).some(
    (r) => ZB(r) && r.status === "running" && r.frameLive?.slug === n
  );
}
function ho(e) {
  return Uwr(e, CA, { includeStopLatched: !0 });
}
function uQt(e) {
  return Uwr(e, CA);
}
function hve(e, n) {
  ($Ln(n?.storageV5), Eae(), NOt());
  let r = Z().live,
    s = n?.durable !== !1,
    d = 0,
    a = new Set();
  for (let h of Object.values(e.all()))
    if (ho(h)) {
      let b =
        h.autoReactSlug !== void 0 &&
        hy(h.autoReactSlug) &&
        (!P_(h.autoReactSlug) || e1(h.autoReactSlug));
      if (s) {
        if ((ES(h.id, e, { quiet: !0, userStop: !0 }), h.autoReactSlug !== void 0))
          (vQt(h.autoReactSlug), a.add(h.autoReactSlug));
      } else if (h.autoReactSlug !== void 0) a.add(h.autoReactSlug);
      if (!b && !(h.autoReactSlug !== void 0 && !s && hy(h.autoReactSlug))) {
        if ((d++, !s && h.autoReactSlug !== void 0)) (Jct(h.autoReactSlug), mL(r, h.autoReactSlug));
      }
    }
  for (let h of r.supervisors.values()) {
    if (h.autoReactWiring === void 0) continue;
    if (s) delete h.autoReactWiring;
    if (s && CA() && (!hy(h.slug) || a.has(h.slug)))
      if (Tr(e, h.slug) || r.inFlightSubscribes.has(h.slug)) Xi(r, h.slug, e);
      else (te(r, h.slug), iwr(h.slug, h.context.storageV5));
    if (!a.has(h.slug) && CA() && !hy(h.slug))
      if ((a.add(h.slug), d++, s)) (vQt(h.slug), $Qt(h.slug));
      else Jct(h.slug);
  }
  if (s) VLn({ storageV5: n?.storageV5 });
  else if (d > 0) _ve({ flush: !0, storageV5: n?.storageV5 });
  return d;
}
function en(e, n, r, s) {
  if (!P_(n) || IIe(n) || !CA()) return null;
  let d = Cr(e, n);
  if (d === void 0) return null;
  s?.();
  let { live: a, wakes: h } = Z();
  (R0n(n), h.liftedAtScanGeneration.set(n, h.scanGeneration), mL(a, n));
  let b = Tve(n).lastWakeArgs;
  if (!LOt(d.id) || b === null) return "cleared";
  return (
    r?.(b),
    rme({
      ...b,
      seed: !1,
      confirm: void 0,
      confirmBase: void 0,
      confirmAfter: void 0,
      reentry: void 0,
      idlePass: void 0,
      suppressSummonStatus: void 0
    }),
    "lifted"
  );
}
function Cr(e, n) {
  return Object.values(e.all()).find(
    (r) =>
      ZB(r) && r.status === "running" && r.autoReactArmed === !0 && r.autoReactSlug === n && Xct(r)
  );
}
function go(e, n) {
  if (n.ownWords) {
    let r = pEs((s) => jws(s) || bo(e, uzo(s)));
    if (r > 0) g("artifact_live_subscribe", { notice_latch_released: r });
  }
  return So(e);
}
function bo(e, n) {
  if (n === void 0) return !1;
  return Object.values(e.all()).some((r) => r.startTime >= n && _o(r));
}
function _o(e) {
  let n = e.status === "running" || e.status === "pending";
  if (e.type === "local_bash" || dht(e)) return n;
  if (!GJe.has(e.type) || e.type === "in_process_teammate") return !1;
  let r =
      e.status === "completed" &&
      "keepaliveReasons" in e &&
      e.keepaliveReasons instanceof Set &&
      [...e.keepaliveReasons].some((d) => d !== "flag:idle-window"),
    s = "resuming" in e && e.resuming === !0;
  return n || r || s;
}
function So(e) {
  let { wakes: n } = Z();
  n.humanTurnAtScanGeneration = n.scanGeneration;
  let r = 0;
  for (let s of [...n.sweptSlugs]) if (en(e, s) !== null) r++;
  if (r > 0) g("artifact_live_subscribe", { unpaused_on_turn: r });
  return r;
}
function fQt() {
  return Z().builtInArtifactHiddenForMcp ? awr() && CA() : CA() && awr();
}
function yve(e, n) {
  let r = [],
    s,
    d = () => (s ??= _N()),
    a = Z(),
    h = a.autoReact.userDisarmed;
  for (let b of Object.values(e.taskRegistry.all())) {
    if (
      !ZB(b) ||
      b.status !== "running" ||
      b.frameLive === void 0 ||
      (n !== void 0 && b.frameLive.slug !== n)
    )
      continue;
    let w = a.live.supervisors.get(b.frameLive.slug);
    r.push({
      slug: b.frameLive.slug,
      taskId: b.id,
      since: b.frameLive.watchedSince,
      explicit: w?.explicit ?? b.frameLive.explicit,
      connected: Xct(b),
      tokenExpiresAt:
        w?.lease?.expMs ?? b.frameLive.armedAt + (w?.transport === "sync" ? w0n : Dwr),
      armedVia: w?.armedVia ?? b.frameLive.armedVia,
      autoReply:
        b.autoReactArmed !== !0
          ? yy(b.frameLive.slug)
            ? h
              ? "disarmed"
              : d()
                ? "stopped"
                : "none"
            : "none"
          : h
            ? "disarmed"
            : !d()
              ? "none"
              : b.autoReactSlug !== void 0 && yy(b.autoReactSlug)
                ? P_(b.autoReactSlug)
                  ? e1(b.autoReactSlug)
                    ? "yielded"
                    : "paused"
                  : "stopped"
                : vo(b.frameLive.slug)
    });
  }
  return r.sort((b, w) => b.since - w.since);
}
function vo(e) {
  let n = Z().autoReact.artifacts.get(e),
    r = n?.lastProbeDeniedBy ?? null;
  if (r !== null) return r === "denied_by_auto_mode" ? "declined" : "denied";
  return n?.lastReplyDeclinedByAutoMode === !0 ? "declined" : "armed";
}
function jSr(e, n) {
  let { live: r, autoReact: s, wakes: d } = Z(),
    a = [],
    h,
    b = () => (h ??= _N());
  for (let w of d.stoppedSlugs) {
    if (n !== void 0 && w !== n) continue;
    if (Tr(e.taskRegistry, w) || r.inFlightSubscribes.has(w) || (!s.userDisarmed && !b())) continue;
    let S = r.supervisors.get(w),
      R = S !== void 0 && !S.stopped ? S : void 0;
    a.push({
      slug: w,
      ...(R !== void 0 && { since: R.watchedSince, explicit: R.explicit, armedVia: R.armedVia }),
      stopKind: P_(w) ? (e1(w) ? "yielded" : "interrupt") : "user",
      autoReply: s.userDisarmed ? "disarmed" : "stopped"
    });
  }
  return a.sort(
    (w, S) => (w.since ?? Number.POSITIVE_INFINITY) - (S.since ?? Number.POSITIVE_INFINITY)
  );
}
function ut(e, n, { forPublish: r = !1 } = {}) {
  let { supervisors: s } = e,
    d = [];
  for (let a of yve(n)) {
    let h = s.get(a.slug),
      b = Wr(e, a, n);
    if (b === "explicit" || b === "most_recent_publish") continue;
    if (b === "auto_reply") {
      if (!r || $ws(a.slug)) continue;
      d.push({ row: a, tier: 3 });
      continue;
    }
    d.push({ row: a, tier: h === void 0 || h.stopped ? 0 : h.armedVia === "mcp_write" ? 1 : 2 });
  }
  return d
    .sort((a, h) => {
      if (a.tier !== h.tier) return a.tier - h.tier;
      let b = s.get(a.row.slug),
        w = s.get(h.row.slug),
        S = b && !b.stopped ? b.lastActivityAt : 0,
        R = w && !w.stopped ? w.lastActivityAt : 0;
      return S - R || a.row.since - h.row.since;
    })
    .map((a) => a.row);
}
function xr(e, n, r, s) {
  let d = e.supervisors.get(n.slug),
    a = Wr(e, n, r) === "auto_reply";
  if ((ES(n.taskId, r.taskRegistry, { quiet: !0 }), a && !e1(n.slug)))
    M3e(n.slug, { storageV5: d?.context.storageV5 ?? afo() });
  if (d !== void 0 && !d.stopped)
    he(
      e,
      d,
      s?.why ??
        `this session reached its limit of ${Bk} artifact watches and made room to watch a newer one${a ? "; it was auto-replying to comments, and that stops until its next publish" : ""}`,
      s?.shortReason ?? "made room for a newer watch",
      s !== void 0
        ? { advice: ft, passive: !0 }
        : a
          ? { advice: "do not watch it again unless the user asks" }
          : void 0
    );
  else te(e, n.slug);
  g("artifact_live_subscribe", { evicted_least_active: !0, ...(a && { evicted_autoreply: !0 }) });
}
function Lr(e, n) {
  let r = e.supervisors.get(n);
  if (r === void 0 || r.stopped) return null;
  if (r.explicit) return "explicit";
  if (Ar(e, r)) return "most_recent_publish";
  return r.autoReactWiring !== void 0 && CA() && (!hy(n) || P_(n)) ? "auto_reply" : null;
}
function Sr(e, n) {
  return Lr(e, n) !== null;
}
function Wr(e, n, r) {
  let s = e.supervisors.get(n.slug);
  if (s !== void 0 && !s.stopped) return Lr(e, n.slug);
  let d = r.taskRegistry.all()[n.taskId];
  return n.explicit ? "explicit" : uQt(d) ? "auto_reply" : null;
}
function wo(e, n) {
  let r = ut(e, n);
  if (r.length === 0) return !1;
  return (
    xr(e, r[0], n, {
      why: `this session reached its limit of ${Bk} artifact watches and made room for a protected watch to reconnect`,
      shortReason: tn
    }),
    !0
  );
}
function Luo() {
  let e = Z().live;
  ((e.handoffGeneration += 1),
    e.bootingWiredArms.clear(),
    kYe(kQt(PB())),
    _ve({ flush: !0 }),
    wws(),
    Eae(),
    NOt());
  for (let n of [...e.supervisors.keys()]) te(e, n);
  (e.armOutcomes.clear(), e.announcedArmFailures.clear(), gEs());
}
function Ao(e) {
  let n = Z().live;
  ((n.handoffGeneration += 1), Eae(), NOt());
  let r = 0;
  for (let a of [...n.supervisors.values()]) {
    if (!a.stopped) r++;
    if (a.autoReactWiring !== void 0) {
      let { slug: h } = a;
      import("./chunk-eb6at7v2.js").then((b) => b.handBackTakenOverSlug(h));
    }
    (delete a.autoReactWiring, te(n, a.slug));
    for (let h of Object.values(a.context.taskRegistry.all())) {
      if (!ZB(h) || h.status !== "running" || h.frameLive?.slug !== a.slug) continue;
      ES(h.id, a.context.taskRegistry, { quiet: !0 });
    }
  }
  if ((n.armOutcomes.clear(), n.announcedArmFailures.clear(), r === 0)) return r;
  let s = `${r} artifact ${r === 1 ? "watch" : "watches"}`,
    d =
      e === "signed_out"
        ? "Those watches were opened as the account that signed out: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours once someone is signed in opens a fresh watch; do not re-watch just to resume listening unless the user asks."
        : "Those watches were opened as the previous account: this session no longer keeps track of new versions of those artifacts or hears comments on them, and their comment auto-replies are off. A publish or watch of yours opens a fresh watch as the current account; do not re-watch just to resume listening unless the user asks.";
  return (
    Za({
      value: Di({
        taskType: Cq,
        summary: Wt(
          `Stopped watching ${s} (${e === "signed_out" ? "signed out" : "the signed-in account changed"})`
        ),
        body: `
<event>${Wt(d)}</event>`
      }),
      mode: "task-notification",
      passive: !0,
      priority: "next",
      origin: { kind: "task-notification", source: Cq },
      agentId: tt()
    }),
    r
  );
}
function Nuo(e, n, r) {
  let { wasWatching: s } = Ir(e, n);
  if ((Z().live.nonEditorSlugs.delete(e), r !== void 0)) {
    let d = Z().live.repliesConsent,
      a = d.outstanding.get(e);
    if (a !== void 0) {
      if ((d.outstanding.delete(e), a.allowed !== !0))
        d.declined.set(e, { namingMessages: a.namingMessages });
    }
    d.approved.delete(e);
  }
  return (g("artifact_live_subscribe", { unwatched: s }), { wasWatching: s });
}
function $uo(e, n) {
  iwr(e, n.storageV5);
  let { wasWatching: r } = Ir(e, n);
  if (r) g("artifact_live_subscribe", { unwatched: !0, artifact_deleted: !0 });
}
function Ir(e, n) {
  let r = Z().live;
  ($Ln(n.storageV5), r.armOutcomes.delete(e), Xt(r, e), Tws(e));
  let s = r.supervisors.get(e)?.autoReactWiring !== void 0,
    { wasWatching: d } = wr({
      slug: e,
      taskRegistry: n.taskRegistry,
      announce: !1,
      killRow: (a) => {
        let h = a.autoReactArmed === !0;
        if (
          (ES(
            a.id,
            n.taskRegistry,
            h ? { quiet: !0, userStop: !0, modelOrigin: !0 } : { quiet: !0 }
          ),
          h && a.autoReactSlug !== void 0)
        )
          vQt(a.autoReactSlug);
      }
    });
  if (s) vQt(e);
  return { wasWatching: d };
}
async function Fuo(e) {
  let {
    slug: n,
    url: r,
    publishContext: s,
    getKnownVer: d,
    context: a,
    tool: h,
    commentVerbsInSchema: b
  } = e;
  if (!o3(s)) return { outcome: "skipped", reason: "publish_context" };
  let w = Z().live,
    S = h !== void 0 && b === !0 && _N(),
    R = !S
      ? void 0
      : !G_e(a.messages)
        ? "unattended_turn"
        : !FSr(a.messages, n) || !iI(a.messages)
          ? "not_named_by_user"
          : w.repliesConsent.declined.has(n)
            ? "declined"
            : w.nonEditorSlugs.has(n)
              ? "not_editor"
              : e.repliesApproved !== !0
                ? "not_approved"
                : void 0,
    x = Or({ tool: S && R === void 0 ? h : void 0, commentVerbsInSchema: b, context: a }),
    H = x.autoReactWiring !== void 0,
    L = w.supervisors.get(n)?.autoReactWiring?.title,
    y = await pe(w, {
      slug: n,
      url: r,
      getKnownVer: d,
      ownPublishes: a.artifactRegistries.ownPublishes,
      ...ke(a),
      ...x,
      pickUpRecentSummons: H,
      ...(x.autoReactWiring !== void 0 && {
        autoReactWiring: { ...x.autoReactWiring, title: L },
        editorGatedWiring: !0
      })
    });
  if (H && y.outcome === "armed" && y.degraded === void 0 && !(hy(n) && !P_(n)) && Ne())
    lt(n, { title: w.supervisors.get(n)?.autoReactWiring?.title ?? L, storageV5: a.storageV5 });
  if (R !== void 0 && y.outcome === "armed") return { ...y, degraded: R };
  if (R !== void 0 && y.outcome === "already_watching") return { ...y, degraded: R };
  return y;
}
function Uuo(e) {
  return Z().live.nonEditorSlugs.has(e);
}
function Buo(e, n, r, s) {
  let d = Z().live.repliesConsent,
    a = d.outstanding.get(n);
  if (e === void 0)
    return {
      declined:
        d.declined.has(n) ||
        (r !== void 0 && a !== void 0 && a.toolUseId !== r && a.allowed !== !0),
      approved: !1
    };
  if (r !== void 0 && a !== void 0 && a.toolUseId !== r) {
    if ((d.outstanding.delete(n), a.allowed !== !0))
      d.declined.set(n, { namingMessages: a.namingMessages });
  }
  let h = d.declined.get(n),
    b = Ro(s, n);
  if (h !== void 0 && b !== null && !h.namingMessages.has(b)) d.declined.delete(n);
  return { declined: d.declined.has(n), approved: d.approved.has(n) };
}
function Ro(e, n) {
  let r = jt(e, n);
  return r >= 0 ? (e[r]?.uuid ?? null) : null;
}
function WSr(e, n, r, s, d = !1) {
  if (e === void 0) return;
  Z().live.repliesConsent.outstanding.set(n, {
    toolUseId: r,
    ...(d && { allowed: !0 }),
    namingMessages: new Set(qt(s, n).flatMap((a) => (s[a]?.uuid !== void 0 ? [s[a].uuid] : [])))
  });
}
function juo(e, n) {
  if (e === void 0 || n === void 0) return;
  let { outstanding: r } = Z().live.repliesConsent;
  for (let [s, d] of r) if (d.toolUseId === n) return (r.delete(s), { slug: s });
  return;
}
function Wuo(e, n, r, s) {
  let d = Z().live.repliesConsent;
  if (e === void 0) return !1;
  let a = n?.slug === r;
  if (a && s) (d.approved.add(r), d.declined.delete(r));
  return a || d.approved.has(r);
}
function pQt(e) {
  return Z().live.repliesConsent.declined.has(e);
}
function Guo(e) {
  let { declined: n, outstanding: r } = Z().live.repliesConsent,
    s = r.get(e);
  return n.has(e) || (s !== void 0 && s.allowed !== !0);
}
function yo(e, n) {
  let r = e.mcpWriteSlugs.get(n);
  if (r === void 0) ((r = { arming: !1 }), e.mcpWriteSlugs.set(n, r));
  return r;
}
var ko = new Set([
    "not_found",
    "no_subscription_token",
    "publish_context",
    "invalid_slug",
    "remote"
  ]),
  Eo = 5000;
function vr(e, n) {
  (LAr(e, n), setTimeout((r, s) => NAr(r, s), Eo, e, n).unref?.());
}
async function UTi(e, n, r) {
  try {
    if (!ar.test(e)) return;
    let s = Z(),
      d = s.live;
    if (d.disposed) return;
    let a = d.supervisors.get(e),
      h = n.artifactRegistries.ownPublishes;
    if (a !== void 0 && !a.stopped) {
      if ((vr(h, e), d.inFlightSubscribes.has(e))) return;
      if (
        ((a.lastActivityAt = Date.now()),
        a.timer !== void 0 && a.consecutiveFailures === 0 && a.stalledSince === void 0)
      )
        (clearTimeout(a.timer), (a.timer = void 0), (a.nextRewatchAt = void 0), Rr(d, e));
      return;
    }
    let b = yo(d, e);
    if (d.inFlightSubscribes.has(e)) {
      if (b.arming) vr(h, e);
      return;
    }
    let { publishContext: w } = Hme({
      agentId: n.agentId,
      agentType: n.agentContext?.agentType,
      isNonInteractiveSession: n.options.isNonInteractiveSession
    });
    if (!o3(w)) return;
    if (b.declinedEpoch === s.accountEpoch) return;
    let S = s.accountEpoch;
    ((b.arming = !0),
      await pe(d, {
        slug: e,
        url: xn({ slug: e, env: Co() }),
        getKnownVer: r,
        ownPublishes: h,
        ...ke(n),
        seedKnownVerFromBoot: !0,
        mcpWrite: !0
      }).then(
        (R) => {
          if (((b.arming = !1), R.outcome === "skipped" && ko.has(R.reason))) b.declinedEpoch = S;
        },
        (R) => {
          ((b.arming = !1), l(R));
        }
      ));
  } catch (s) {
    l(s);
  }
}
async function zuo(e) {
  let { slug: n, url: r, publishContext: s, getKnownVer: d, context: a } = e;
  if (Z().autoReact.userDisarmed) return { outcome: "refused", reason: "session_disarmed" };
  if (!o3(s)) return { outcome: "skipped", reason: "publish_context" };
  if (!e.commentVerbsInSchema) return { outcome: "skipped", reason: "comments_off" };
  if (!hy(n)) return { outcome: "skipped", reason: "not_stopped" };
  if (!_N()) return { outcome: "skipped", reason: "not_enabled" };
  let h = Z().live;
  if (a.abortController.signal.aborted) return { outcome: "skipped", reason: "cancelled" };
  let b = Cr(a.taskRegistry, n)?.id,
    w = en(
      a.taskRegistry,
      n,
      (S) => {
        (JP(n),
          S.notify({
            summary: kIr(oBe(S.getTitle, r)),
            detail: `Auto-replies on artifact ${r} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop). ${Yt}`
          }));
      },
      () => {
        let S = h.supervisors.get(n);
        if (S !== void 0 && !S.stopped)
          S.autoReactWiring = Re(
            S.autoReactWiring,
            {
              tool: e.tool,
              commentVerbsInSchema: e.commentVerbsInSchema,
              context: a,
              title: S.autoReactWiring?.title
            },
            !0
          );
      }
    );
  if (w !== null && b !== void 0) {
    if ((g("artifact_live_subscribe", { resumed_in_place: !0 }), w === "cleared"))
      Z().wakes.pendingResumeDisclosure.add(n);
    return {
      outcome: "armed",
      taskId: b,
      inPlace: w === "lifted",
      ...(w === "cleared" && { connecting: !0 })
    };
  }
  return pe(h, {
    slug: n,
    url: r,
    getKnownVer: d,
    ownPublishes: a.artifactRegistries.ownPublishes,
    ...ke(a),
    seedKnownVerFromBoot: !0,
    autoReactWiring: {
      tool: e.tool,
      commentVerbsInSchema: e.commentVerbsInSchema,
      context: a,
      title: h.supervisors.get(n)?.autoReactWiring?.title
    },
    userResumeWiring: !0,
    approvedRelatchGen: e.approvedRelatchGen
  });
}
function GSr(e, n) {
  let { live: r } = Z();
  if (!r.inFlightSubscribes.has(e)) {
    n();
    return;
  }
  let s = r.armSettleWaiters.get(e) ?? [];
  (s.push(n), r.armSettleWaiters.set(e, s));
}
function zSr(e) {
  let n = Z().live.supervisors.get(e);
  return n !== void 0 && !n.stopped && n.autoReactWiring !== void 0;
}
async function Kuo(e) {
  let { slug: n, url: r, getKnownVer: s, tool: d, commentVerbsInSchema: a, context: h } = e;
  if (d !== void 0 && rc())
    ifo().catch(() => {
      return;
    });
  let b = Z(),
    w = await pe(b.live, {
      slug: n,
      url: r,
      getKnownVer: s,
      ownPublishes: h.artifactRegistries.ownPublishes,
      ...ke(h),
      ...Or({ tool: d, commentVerbsInSchema: a, context: h })
    });
  if (d !== void 0 && a === !0 && w.outcome !== "skipped" && Ne())
    lt(n, { title: b.live.supervisors.get(n)?.autoReactWiring?.title, storageV5: h.storageV5 });
  return w;
}
function Or(e) {
  let { tool: n, commentVerbsInSchema: r, context: s } = e;
  return {
    seedKnownVerFromBoot: !0,
    explicit: !0,
    pickUpRecentSummons: !0,
    ...(n !== void 0 &&
      r === !0 && { autoReactWiring: { tool: n, commentVerbsInSchema: r, context: s } })
  };
}
async function kIe(e) {
  let {
    slug: n,
    url: r,
    version: s,
    publishContext: d,
    getKnownVer: a,
    tool: h,
    commentVerbsInSchema: b,
    title: w,
    context: S
  } = e;
  if (h !== void 0 && rc())
    ifo().catch(() => {
      return;
    });
  let R = S.artifactRegistries.ownPublishes,
    x = Z().live;
  if (s !== void 0) {
    CHt(R, n, s, { merged: !Ome(R, n, s) });
    let T = x.supervisors.get(n);
    if (T !== void 0 && !T.stopped) T.lastActivityAt = Date.now();
    if (o3(d)) x.mostRecentPublishSlug = n;
  }
  if (!o3(d))
    return (
      f("artifact_live_subscribe", "publish_context", { publish_context: c(d) }),
      { outcome: "skipped", reason: "publish_context" }
    );
  let H = h !== void 0 && b === !0,
    L =
      e.carriedPublishConsent !== !0 &&
      e.resumedPublishConsent !== !0 &&
      e.chainPublish !== !0 &&
      e.adoptedPublish !== !0 &&
      G_e(S.messages),
    y = await pe(x, {
      slug: n,
      url: r,
      getKnownVer: a,
      ownPublishes: R,
      ...ke(S),
      ...(e.onOpen !== void 0 &&
        e.onGiveUp !== void 0 && { onOpen: e.onOpen, onGiveUp: e.onGiveUp }),
      ...(e.seedKnownVerFromBoot === !0 && { seedKnownVerFromBoot: !0 }),
      ...((e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0) && {
        requireEditor: !0
      }),
      ...(e.sessionResume === !0 && { sessionResume: !0 }),
      ...(L && s !== void 0 && { freshPublish: !0 }),
      ...(e.announceArmlessEnd === !0 && { announceArmlessEnd: !0 }),
      ...(e.resumedPublishConsent === !0 && H && { pickUpRecentSummons: !0 }),
      ...(H && {
        autoReactWiring: {
          tool: h,
          commentVerbsInSchema: b,
          context: S,
          title: w,
          ...(e.publishTranscript !== void 0 && { publishTranscript: e.publishTranscript })
        },
        ...(L && { freshPublishWiring: !0 })
      })
    });
  if ((s !== void 0 || e.adoptedPublish === !0) && y.outcome !== "skipped") {
    let { autoReact: T, wakes: P } = Z(),
      ie = !H
        ? "bare_watch_comments_off"
        : T.userDisarmed
          ? "bare_watch_session_disarmed"
          : !O3e()
            ? "bare_watch_autoreact_off"
            : hy(n) && !L && !(P_(n) && !IIe(n) && P.humanTurnAtScanGeneration === P.scanGeneration)
              ? "bare_watch_slug_stopped"
              : void 0;
    if (ie !== void 0) f("artifact_live_subscribe", ie, { publish_context: c(d) });
  }
  if (
    H &&
    y.outcome !== "skipped" &&
    !(
      y.outcome === "already_watching" &&
      (e.resumedPublishConsent === !0 || e.carriedPublishConsent === !0)
    ) &&
    !(y.outcome === "armed" && y.degraded !== void 0) &&
    Ne()
  )
    lt(n, { title: x.supervisors.get(n)?.autoReactWiring?.title ?? w, storageV5: S.storageV5 });
  return y;
}
function Ne() {
  return !Z().autoReact.userDisarmed && O3e();
}
function lt(e, n) {
  if (Z().builtInArtifactHiddenForMcp) {
    lfo(e, { storageV5: n.storageV5 });
    return;
  }
  Yws(e, n);
}
function Jt(e, n, r) {
  return `live updates for artifact ${e} (${cQt(DLn(n, r)).task})`;
}
function ke(e) {
  return { context: EOt(e), signal: e.abortController.signal };
}
function wOt(e, n) {
  return () => $te(e(), n);
}
function Mr(e) {
  if (!Mme()) return { reason: "flag_off" };
  if (i.CLAUDE_CODE_REMOTE) return { reason: "remote" };
  return To(yr(e));
}
function ct(e) {
  return Mme() && at(e) === null && !pQs(e);
}
function To(e) {
  if (Kii()) return { reason: "cp_override" };
  let n = hQt(e);
  if (n !== null) return { reason: "egress_denied", egressKind: n.kind };
  return null;
}
function Vuo(e) {
  let { context: n, slug: r, wantWiring: s, canClearLatch: d } = e,
    a = Date.now();
  for (let h of Object.values(n.taskRegistry.all()))
    if (
      ZB(h) &&
      h.status === "running" &&
      h.frameLive?.slug === r &&
      Er(h, r, a, s, d, po) === "keep"
    )
      return !0;
  return !1;
}
function HLn(e) {
  if (Z().durable.stopLatches.isStopped(e.slug)) return "stop_latched";
  if (!o3(e.publishContext)) return "publish_context";
  return Mr(e.slug)?.reason ?? null;
}
var vOt = "auto-replies armed",
  KSr =
    "auto-replies paused by the user's interrupt (Ctrl+C or Stop) \u2014 the user's next message resumes them, as does a publish of this artifact the user asks for or an asked-for resume (publishing it without being asked, while handling a notification or a wake-up, leaves them paused); comments sent to Claude meanwhile are answered then; no comment notifications arrive until then (do not republish or resume just to re-enable them)",
  VSr =
    "auto-replies handed to another session of this conversation (the user reopened the conversation there, or published there) \u2014 that session answers the comments now; a publish of this artifact the user asks for here, or resume_replies when the user asks for it, takes them back (do not republish or call resume_replies just to take them back unless the user asks \u2014 the user asking is not itself the take-back); no comment notifications arrive here meanwhile",
  qSr =
    "auto mode did not approve the last comment's auto-reply; the next comment is checked again unless repeated refusals pause the thread",
  YSr =
    "a permission rule or setting blocked the last comment's auto-reply (no notice); later comments are still checked";
function zt() {
  return pw()
    ? `; a comment on it sent to Claude reaches this session while this artifact's status row says ${vOt}, and plain comments never notify \u2014 read them with ${Dd('action "comments"', () => `the ${k4("comments")}`)} when asked`
    : "";
}
function nBe(e) {
  switch (e) {
    case "flag_off":
      return "the live-subscribe feature flag is off in this session's cached config, so this session does not keep track of new versions of this artifact published elsewhere";
    case "publish_context":
      return "only a main-loop session (interactive, SDK, or background) holds the watch, not a subagent, teammate, or print session";
    case "stop_latched":
      return "watching this artifact was stopped earlier in this session; do not retry on your own. If the user asks you to resume watching it, call the watch action (in permission modes that prompt, they confirm it there)";
    case "remote":
      return "remote sessions do not hold the watch";
    case "cp_override":
      return "the artifact control plane is overridden to a local stack, so the live edge is not reachable";
    case "egress_denied":
      return "network egress to the claude.ai edge is denied by policy, so this session does not keep track of new versions of this artifact published elsewhere";
    case "not_found":
      return "no such artifact for this account (it was deleted, or it has not been shared with the user)";
    case "other_org":
      return v9e;
    case "public_outside_org":
      return ktn;
    case "not_editor":
      return "a restored publish decision does not carry for an artifact this account cannot publish to";
    case "no_subscription_token":
      return "the control plane minted no live-channel credential for this artifact";
    case "boot_failed":
      return "the artifact could not be read right now (network or auth); try again later";
    case "watch_cap":
      return `this session already holds its maximum of ${Bk} artifact watches and none could make room (each is a watch you requested, the artifact you most recently published, or one auto-replying to comments: a new publish can displace an idle one, a watch request cannot; or watch slots are still connecting); unwatch one first`;
    case "watch_cap_reconnect":
      return `this session was already holding its maximum of ${Bk} artifact watches when this one tried to reconnect, and none of the other watches could make room`;
    case "invalid_slug":
      return "that is not an artifact this session can name";
    case "cancelled":
      return "the request was cancelled before the connection opened";
    case "ws_open_error":
      return "the live connection could not be opened from this environment";
    case "sync_unavailable":
      return "the live channel is not available to this session right now";
    default:
      return null;
  }
}
function mQt(e) {
  switch (e) {
    case "arming":
      return `Live subscription: arming in the background \u2014 not connected yet, so this is not a watch until \`status\` shows it connected (you are told if it cannot connect, unless this turn is interrupted first). Once connected, this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "connected":
      return `Live subscription: already connected from earlier in this session \u2014 this session keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "publish_adopted":
      return `Live subscription: this agent holds no watch; the session that launched it takes over live updates for this artifact when this agent finishes normally \u2014 that session then keeps track of new versions of this artifact published elsewhere; a new version starts no turn and sends no notification${zt()}.`;
    case "publish_context":
      return "Live subscription: none \u2014 this is a print (-p), cloud, subagent, or teammate session, which does not keep track of new versions of this artifact published elsewhere (only the main conversation of a local interactive, background, or TypeScript/Python Agent SDK session does). Expected; not an error.";
    case "remote_unsupported": {
      let n = pw();
      return `Live subscription: not supported yet from remote sessions \u2014 nothing notifies this session of new versions${n ? " or of comments sent to Claude" : ""}; re-read the artifact${n ? " (and its comments)" : ""} when the user asks.`;
    }
    default: {
      let n = nBe(e);
      return n !== null
        ? `Live subscription: skipped \u2014 ${n}.`
        : `Live subscription: skipped (${lC(e, 64)}).`;
    }
  }
}
var quo =
  "Live subscription: none in this kind of session (see the earlier publish result); not an error.";
async function XSr(e) {
  let { slug: n, url: r, getKnownVer: s, context: d } = e;
  return pe(Z().live, {
    slug: n,
    url: r,
    getKnownVer: s,
    ownPublishes: d.artifactRegistries.ownPublishes,
    ...ke(d),
    seedKnownVerFromBoot: !0
  });
}
async function pe(e, n) {
  let {
    slug: r,
    url: s,
    getKnownVer: d,
    ownPublishes: a,
    context: h,
    seedKnownVerFromBoot: b,
    seedSurfacedVer: w,
    explicit: S = !1,
    signal: R
  } = n;
  kOt();
  let x = e.supervisors.get(r)?.carriedVer;
  e.endAll ??= Ao;
  let H = n.autoReactWiring !== void 0 && n.autoReactWiring.commentVerbsInSchema,
    L =
      n.userResumeWiring === !0
        ? "resume"
        : S
          ? "watch"
          : n.sessionResume === !0
            ? "session_resume"
            : n.mcpWrite === !0
              ? "mcp_write"
              : b
                ? "attach"
                : "publish";
  if (!ar.test(r)) return { outcome: "skipped", reason: "invalid_slug" };
  e.armOutcomes.delete(r);
  let y = Z().durable.stopLatches;
  tJ({ storageV5: h.storageV5 });
  let T = n.userResumeWiring === !0 ? n.approvedRelatchGen : void 0,
    P = () => y.isStopped(r) && (T === void 0 || y.latchGeneration(r) !== T);
  if (P())
    return (
      f("artifact_live_subscribe", "stop_latched"),
      { outcome: "skipped", reason: "stop_latched" }
    );
  let ie = Mr(r);
  if (ie !== null) {
    if (ie.reason === "cp_override") f("artifact_live_subscribe", "cp_override_active");
    else if (ie.reason === "egress_denied")
      f(
        "artifact_live_subscribe",
        `egress_denied_${ie.egressKind === "sandbox-policy" ? "sandbox_policy" : ie.egressKind}`
      );
    return { outcome: "skipped", reason: ie.reason };
  }
  let Hr = yr(r),
    pt = ct(r),
    Ee = (n.freshPublishWiring === !0 || n.userResumeWiring === !0) && !n.signal.aborted,
    mt = e.supervisors.get(r)?.autoReactWiring,
    ae = mo(h, r, H, Ee);
  if (ae !== null || e.inFlightSubscribes.has(r)) {
    if (ae === null && T !== void 0 && y.isStopped(r))
      return (
        f("artifact_live_subscribe", "arm_in_flight"),
        { outcome: "skipped", reason: "arm_in_flight" }
      );
    if (!(L === "resume" && ae === null && !e.supervisors.has(r)))
      _r(e, {
        slug: r,
        url: s,
        getKnownVer: d,
        ownPublishes: a,
        context: h,
        explicit: S,
        machineArm: n.machineArm,
        armedVia: L,
        ...(n.requireEditor !== !0 &&
          n.editorGatedWiring !== !0 && { autoReactWiring: n.autoReactWiring, humanTurnWiring: Ee })
      });
    if (ae !== null) {
      let C = e.supervisors.get(r);
      if (C !== void 0) {
        let J = Jt(s, C.explicit, C.armedVia);
        h.taskRegistry.update(ae, (D) => {
          if (!ZB(D) || D.frameLive === void 0) return D;
          if (
            D.description === J &&
            D.frameLive.explicit === C.explicit &&
            D.frameLive.armedVia === C.armedVia
          )
            return D;
          return {
            ...D,
            description: J,
            frameLive: { ...D.frameLive, explicit: C.explicit, armedVia: C.armedVia }
          };
        });
      }
    }
    if (ae !== null && n.freshPublishWiring === !0 && !n.signal.aborted) en(h.taskRegistry, r);
    if (
      ae === null &&
      n.autoReactWiring !== void 0 &&
      n.autoReactWiring.commentVerbsInSchema &&
      n.requireEditor !== !0 &&
      n.editorGatedWiring !== !0
    ) {
      let C = e.pendingInFlightWiring.get(r),
        J = n.freshPublishWiring === !0 && !n.signal.aborted,
        D =
          J || C === void 0
            ? { scanGeneration: Z().wakes.scanGeneration, stopGeneration: n3(r) }
            : { scanGeneration: C.scanGeneration, stopGeneration: C.stopGeneration };
      if (
        (e.pendingInFlightWiring.set(r, {
          wiring: Re(C?.wiring, n.autoReactWiring, Ee),
          freshPublishWiring: J || C?.freshPublishWiring === !0,
          ...D
        }),
        e.inFlightWiredIntent.add(r),
        Ne())
      )
        lfo(r, { storageV5: h.storageV5 });
      if (J && O3e())
        e.bootingWiredArms.set(r, { title: n.autoReactWiring.title, freshPublish: !0, ...D });
    }
    return { outcome: "already_watching", ...(ae !== null && { taskId: ae }) };
  }
  let Y = {
      url: s,
      announce: n.announceArmlessEnd === !0 && !n.machineArm,
      handoffGen: e.handoffGeneration,
      getTitle: () => e.supervisors.get(r)?.autoReactWiring?.title ?? n.autoReactWiring?.title
    },
    rn = yve(h).length + e.inFlightSubscribes.size;
  if (n.machineArm && yve(h).length >= Bk) {
    if (!Sr(e, r) || ut(e, h).length === 0)
      return (
        f("artifact_live_subscribe", "watch_cap_reconnect"),
        { outcome: "skipped", reason: "watch_cap_reconnect" }
      );
  }
  if (n.mcpWrite && rn >= Bk)
    return (f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y));
  let on = !n.machineArm && n.freshPublish === !0;
  if (!n.machineArm && rn >= Bk && ut(e, h, { forPublish: on }).length === 0)
    return (f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y));
  let Te = Z().wakes.scanGeneration,
    Ue = n3(r),
    sn = n.machineArm ? e.supervisors.get(r)?.lastActivityAt : void 0,
    an = e.handoffGeneration;
  if (
    (iEs(Qi),
    uEs(Zuo),
    aEs((C) => go(h.taskRegistry, C)),
    e.inFlightSubscribes.add(r),
    e.inFlightGenerations.set(r, an),
    n.autoReactWiring !== void 0)
  )
    e.inFlightWiredIntent.add(r);
  let Ce,
    xe = !1;
  try {
    if (
      n.autoReactWiring?.commentVerbsInSchema === !0 &&
      n.requireEditor !== !0 &&
      n.machineArm !== !0 &&
      n.userResumeWiring !== !0 &&
      O3e()
    )
      e.bootingWiredArms.set(r, {
        title: n.autoReactWiring.title,
        freshPublish: n.freshPublishWiring === !0 && !n.signal.aborted,
        scanGeneration: Te,
        stopGeneration: Ue
      });
    let C = () => e.handoffGeneration !== an || e.retiredInFlightArms.has(r),
      J = Dme();
    if (!J) {
      let A = e.supervisors.get(r);
      if (A !== void 0) (delete A.lease, delete A.renewable);
    }
    let D = Z().accountEpoch,
      ge = J && n.machineArm === !0 ? e.supervisors.get(r)?.lease : void 0,
      F =
        ge !== void 0 && (ge.transport === "live" || pt) && $fo(ge, e.rewatchTiming, D)
          ? ge
          : void 0;
    if (F !== void 0 && F.transport === "sync") {
      let A = await Jk(h.storageV5).catch(() => {
        return;
      });
      if (!$g(me(F.token), A)) F = void 0;
      if (R.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    }
    let W,
      ht = !1,
      cn = 0;
    if (F !== void 0)
      W = {
        err: null,
        token: F.token,
        transport: F.transport,
        ver: F.ver,
        editor: void 0,
        tokenExp: void 0,
        renewable: !1
      };
    else {
      let A = J && !pt && n.machineArm === !0 && e.supervisors.get(r)?.renewable === !0;
      try {
        let B;
        if (A) {
          let be = await lxs(r, R, h.credentials);
          if (be.err === null) ((B = be), (ht = !0));
          else {
            f("artifact_live_subscribe", `renew_miss_${be.status ?? "no_response"}`);
            let ue = e.supervisors.get(r);
            if (ue !== void 0) delete ue.renewable;
            if (R.aborted || C()) return X(e, r, !0, "cancelled", Y);
          }
        }
        ((cn = Date.now()),
          (W =
            B ??
            (await axs(r, R, h.credentials, {
              syncLive: pt,
              ...(n.machineArm === !0 && { lean: e.supervisors.get(r)?.bootedVersion })
            }))));
      } catch {
        return X(e, r, n.machineArm, R.aborted || C() ? "cancelled" : "boot_failed", Y);
      }
    }
    let Kr = Date.now();
    if (C()) return X(e, r, n.machineArm, "cancelled", Y);
    if (W.err !== null) {
      let A = R.aborted
          ? "cancelled"
          : W.status === 404
            ? "not_found"
            : v4(W)
              ? "other_org"
              : W.publicOutsideOrg === !0
                ? "public_outside_org"
                : "boot_failed",
        B =
          A === "boot_failed" &&
          (W.unavailable === !0 ||
            (W.noAnswer === !0 && Date.now() - cn >= e.rewatchTiming.stallThresholdMs));
      return X(e, r, n.machineArm, A, Y, { unavailable: B, httpStatus: W.status });
    }
    let Ge = n.requireEditor === !0 && !W.editor,
      se = Ge || (n.editorGatedWiring === !0 && n.autoReactWiring !== void 0 && W.editor !== !0),
      dn = Ge ? "restored_consent_not_editor" : "watch_not_editor";
    if (W.editor === !0) e.nonEditorSlugs.delete(r);
    if (se) {
      if (
        (e.inFlightWiredIntent.delete(r),
        e.bootingWiredArms.delete(r),
        !Ge && Z().accountEpoch === D)
      )
        e.nonEditorSlugs.add(r);
    }
    let ln = W.title === void 0 ? null : Zk(W.title),
      le =
        se || n.autoReactWiring === void 0
          ? void 0
          : ln === null
            ? n.autoReactWiring
            : { ...n.autoReactWiring, title: ln },
      gt = se ? void 0 : n.onOpen,
      fn = se ? void 0 : n.onGiveUp,
      K = W.transport;
    if (K === "sync" && (!ct(r) || W.token === void 0 || !ve(W.token)))
      return (
        f("artifact_live_subscribe", "sync_unavailable"),
        X(e, r, n.machineArm, "sync_unavailable", Y, { unavailable: !0 })
      );
    let Le = W.token;
    if (!Le)
      return (
        f("artifact_live_subscribe", se ? dn : "no_subscription_token"),
        X(e, r, n.machineArm, Ge ? "not_editor" : "no_subscription_token", Y)
      );
    if (se) f("artifact_live_subscribe", dn);
    let $e = W.ver,
      Br = b ? () => d() ?? $e : d,
      O =
        F ??
        (J
          ? Zvs({
              transport: K,
              token: Le,
              ver: $e,
              accountEpoch: D,
              expUnixSeconds: K === "sync" ? et(Le) : W.tokenExp,
              receivedAtMs: Kr
            })
          : void 0);
    if (R.aborted || C()) return X(e, r, n.machineArm, "cancelled", Y);
    let He = yve(h).length + e.inFlightSubscribes.size - 1,
      bt = e.supervisors.get(r),
      jr =
        n.machineArm === !0 &&
        sn !== void 0 &&
        bt !== void 0 &&
        !bt.stopped &&
        bt.lastActivityAt > sn,
      pn = yve(h).length + e.pendingRegistrations;
    if (n.machineArm && !jr && He >= Bk) {
      if (pn >= Bk) {
        if (!Sr(e, r) || !wo(e, h))
          return (
            f("artifact_live_subscribe", "watch_cap_reconnect"),
            { outcome: "skipped", reason: "watch_cap_reconnect" }
          );
      }
    } else if (n.mcpWrite && He >= Bk)
      return (f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y));
    else if (He >= Bk) {
      let A = He - Bk + 1,
        B = ut(e, h, { forPublish: on });
      if (B.length < A) {
        if (n.machineArm)
          return (
            f("artifact_live_subscribe", "watch_cap_reconnect"),
            { outcome: "skipped", reason: "watch_cap_reconnect" }
          );
        return (f("artifact_live_subscribe", "watch_cap"), X(e, r, n.machineArm, "watch_cap", Y));
      }
      if (pn >= Bk)
        xr(
          e,
          B[0],
          h,
          n.machineArm
            ? {
                why: `this session reached its limit of ${Bk} artifact watches and made room for an already-held watch to reconnect`,
                shortReason: tn
              }
            : void 0
        );
    }
    (e.pendingRegistrations++, (xe = !0));
    let j = e.supervisors.get(r),
      qr = j !== void 0 && !j.stopped && j.explicit,
      _t = S || qr,
      St = j !== void 0 && !j.stopped,
      mn = St ? j.taskId : void 0,
      zr = j === void 0,
      Yr = S && j !== void 0 && !j.explicit,
      hn =
        !n.machineArm &&
        j !== void 0 &&
        j.armedVia === "mcp_write" &&
        L !== "publish" &&
        L !== "mcp_write",
      gn = hn ? j.autoReactWiring : void 0,
      bn = le !== void 0 && !br(e, r, mt),
      _n = n.userResumeWiring === !0 && bn && St && j.autoReactWiring?.humanTurnSnapshot === !0,
      vt = e.supervisors.get(r)?.carriedVer,
      wt = vt !== void 0 && vt !== x ? vt : w,
      E = _r(e, {
        slug: r,
        url: s,
        getKnownVer: d,
        ownPublishes: a,
        context: h,
        explicit: S,
        machineArm: n.machineArm,
        armedVia: L,
        carriedVer: wt ?? W.ver,
        ...(bn && { autoReactWiring: le }),
        humanTurnWiring: Ee && !_n
      });
    if (F === void 0 && E.armedVia !== "mcp_write") _So(r, $e);
    if (F === void 0 && !ht) E.bootedVersion = $e;
    let Jr = E.autoReactWiring;
    if (O !== void 0 && O.accountEpoch === Z().accountEpoch) {
      if (((E.lease = O), F === void 0 && W.renewable)) E.renewable = !0;
      else if (F === void 0) delete E.renewable;
    } else (delete E.lease, delete E.renewable);
    let Xr = E.lastActivityAt;
    if (gt !== void 0 && fn !== void 0)
      E.resumeAnnounce = { onOpen: gt, onGiveUp: fn, wired: le !== void 0 };
    let At =
      L === "resume" && E.armedVia !== "watch" && E.armedVia !== "resume" ? E.armedVia : void 0;
    if (At !== void 0) E.armedVia = "resume";
    E.transport = K;
    let ne = !1,
      Sn = q(),
      vn = !1,
      Rt,
      Ke,
      wn = !1,
      We,
      Qr = new AbortController(),
      Q = se ? void 0 : e.pendingInFlightWiring.get(r);
    if (!se) e.pendingInFlightWiring.delete(r);
    let fe = le ?? Q?.wiring,
      Zr =
        Q?.wiring.humanTurnSnapshot === !0 &&
        (mt?.humanTurnSnapshot !== !0 || Q.wiring.context !== mt.context);
    if (Q !== void 0 && (le === void 0 || Zr) && Q.stopGeneration === n3(r)) {
      let A = e.supervisors.get(r);
      if (A !== void 0 && !A.stopped)
        A.autoReactWiring = Re(
          A.autoReactWiring,
          { ...Q.wiring, title: Q.wiring.title ?? A.autoReactWiring?.title },
          Q.wiring.humanTurnSnapshot === !0
        );
    }
    let An = n.freshPublishWiring === !0 || Q?.freshPublishWiring === !0;
    if (Q?.freshPublishWiring === !0) ((Te = Q.scanGeneration), (Ue = Q.stopGeneration));
    let ee = n.userResumeWiring === !0,
      ei = Ee || fe?.humanTurnSnapshot === !0,
      yt = () => e.supervisors.get(r)?.autoReactWiring?.title ?? fe?.title,
      I =
        fe === void 0 || !fe.commentVerbsInSchema
          ? void 0
          : {
              env: Co(),
              tool: fe.tool,
              context: fe.context,
              ...(fe.publishTranscript !== void 0 && { publishTranscript: fe.publishTranscript }),
              getWiring: () => {
                let A = e.supervisors.get(r)?.autoReactWiring;
                return A?.humanTurnSnapshot === !0 || !ei ? A : void 0;
              },
              abort: Qr,
              getTitle: yt,
              onReadRefused: () => {
                so(e, r);
              },
              notify: (A) => {
                if ("coalesce" in A) {
                  Yvs({
                    queue: qi,
                    slug: r,
                    family: A.coalesce.family,
                    artifactName: A.coalesce.artifactName,
                    threadId: A.coalesce.threadId,
                    detail: A.detail,
                    mergeDetails: "append",
                    ownGesture: A.ownGesture === !0
                  });
                  return;
                }
                Za({
                  value: Di({
                    taskType: "artifact-auto-react",
                    summary: Wt(A.summary),
                    body: `
${Wt(A.detail)}`
                  }),
                  mode: "task-notification",
                  origin: {
                    kind: "task-notification",
                    source: "artifact-auto-react",
                    slug: r,
                    displayName: oBe(yt, s)
                  },
                  uuid: W0n(A.handOff, A.ownGesture === !0 ? r : void 0),
                  ...(A.handOff !== void 0 && { artifactCommentTurn: "handoff" }),
                  agentId: tt()
                });
              }
            };
    E.surfacedVers ??= [];
    let Rn = E.wake,
      Be = uo({
        slug: r,
        url: s,
        ownPublishes: a,
        presenceOnly: () => e.supervisors.get(r)?.armedVia === "mcp_write",
        getKnownVer: Br,
        surfacedVers: E.surfacedVers,
        ...(wt !== void 0 && { seedSurfacedVer: wt }),
        onSurfaced: (A) => {
          let B = e.supervisors.get(r);
          if (B && !B.stopped) ((B.carriedVer = A), (B.lastActivityAt = Date.now()));
        },
        autoReact: I
      });
    E.wake = Be;
    let kt = 0,
      Et,
      ti = F?.opened === !0 ? F : void 0;
    try {
      let A = await gQt(
        {
          ws:
            K === "sync"
              ? {
                  url: Pe(r, { commentHint: I !== void 0 && CA() && !hy(r), versionNotices: !0 }),
                  protocols: [Ze, Le]
                }
              : { url: Hr, protocols: [ji, Le] },
          ...(K === "sync" && { headers: { "User-Agent": M$() } }),
          description: Jt(s, _t, E.armedVia),
          timeout_ms: 0,
          persistent: !0,
          quietLifecycle: !0,
          ...(mn !== void 0 && { reuseTaskId: mn }),
          ambient: !0,
          handshakeDeadlineMs: e.rewatchTiming.handshakeDeadlineMs,
          autoReactArmed: I !== void 0,
          autoReactSlug: I !== void 0 ? r : void 0,
          frameLive: { slug: r, explicit: _t, watchedSince: E.watchedSince, armedVia: E.armedVia },
          transform:
            K === "sync"
              ? fo(Be, r, {
                  onTokenRefresh: (G, V) => {
                    if (O !== void 0 && $g(me(O.token), me(G)))
                      eEs(O, { token: G, expUnixSeconds: V, receivedAtMs: Date.now() });
                  },
                  onExpiryAnnounced: () => {
                    wn = !0;
                  },
                  onCommentHint: (G, V) => {
                    let Ie = Et;
                    Et = void 0;
                    let _e = G && Ie !== void 0 && Gws(r, Ie, V);
                    g("artifact_live_subscribe", {
                      comment_hint: !0,
                      comments_empty: G,
                      seed_parked: Ie !== void 0,
                      seed_skipped: _e,
                      sync_transport: !0
                    });
                  }
                })
              : co(Be),
          keepalive:
            K === "sync"
              ? {
                  openFrames: [],
                  frame: _({ kind: "ping", slug: r }),
                  intervalMs: Z().presence.timing.keepaliveMs,
                  sendEveryMs: () => st(e, Z().presence.timing.keepaliveMs),
                  deadlineMs:
                    Z().presence.timing.keepaliveDeadlineMs ?? Bt(Z().presence.timing.keepaliveMs)
                }
              : { openFrames: ["ping", "hb"], frame: "ping", intervalMs: zi },
          onSender: (G) => {
            if (K === "sync") {
              ((Ke = (V) => G(Ut(r, V))), Xe(e, `watch:${r}`, Ke));
              return;
            }
            ((Rt = G), $n(e, r, G));
          },
          onSenderClosed: () => {
            if (Ke !== void 0) Qe(e, `watch:${r}`, Ke);
            if (Rt !== void 0) Hn(e, r, Rt);
          },
          onLifecycle: (G, V, Ie) => {
            if (G === "open") {
              ((ne = !0),
                (E.lastFailure = void 0),
                (We = {
                  stalledSince: E.stalledSince,
                  lastStalledAt: E.lastStalledAt,
                  stallOutAfterMs: E.stallOutAfterMs
                }),
                (E.stalledSince = void 0),
                (E.lastStalledAt = void 0),
                (E.stallOutAfterMs = void 0));
              let Oe = E.spreadReconnect === !0;
              if (((E.spreadReconnect = void 0), (kt = Date.now()), O !== void 0)) O.opened = !0;
              if (T !== void 0 && R.aborted && y.isStopped(r) && E.taskId !== void 0) {
                (ES(E.taskId, h.taskRegistry, { quiet: !0 }),
                  te(e, r),
                  f("artifact_live_subscribe", "stop_latched"));
                return;
              }
              let Me = e.supervisors.get(r);
              if (Me !== void 0 && !Me.stopped)
                if (K === "sync") (fQs(r), Ve(r)?.reopened());
                else (ur({ slug: r, url: s, context: h }), Ve(r)?.sourceEnded());
              g("artifact_live_subscribe", {
                armed: !0,
                ...(K === "sync" && { sync_transport: !0 }),
                ...(_t && { explicit: !0 }),
                ...(F !== void 0 && {
                  token_reused: !0,
                  lease_remaining_min: Math.max(0, Math.floor((F.expMs - kt) / 60000))
                }),
                ...(ht && { token_renewed: !0 })
              });
              let En = I !== void 0 && Z().wakes.scanGeneration !== Te,
                ri = n3(r) !== Ue,
                { wakes: ce } = Z(),
                ii =
                  ce.liftedAtScanGeneration.get(r) === ce.scanGeneration ||
                  ce.humanTurnAtScanGeneration === ce.scanGeneration;
              if (En && !ii && !hy(r) && CA())
                (Jct(r),
                  t3(1, [], { catchUp: !1, nameChordGesture: !ye(), passive: !ye() }),
                  _ve({ flush: !0 }));
              if (T !== void 0 && !R.aborted) y.clearByApprovedRewatch(r, T);
              if (I !== void 0) Tve(r).lastWakeArgs = { slug: r, url: s, ...I };
              let Tn = ee && P();
              if (ee && I !== void 0 && !R.aborted && !Tn && Ne()) {
                let N = e.supervisors.get(r)?.autoReactWiring;
                lt(r, { title: N?.title, storageV5: N?.context.storageV5 });
              }
              if (I !== void 0 && R.aborted) ;
              else if (I !== void 0)
                if (!ee && P_(r) && !IIe(r) && ce.humanTurnAtScanGeneration === ce.scanGeneration)
                  (R0n(r),
                    ce.liftedAtScanGeneration.set(r, ce.scanGeneration),
                    mL(e, r),
                    rme({ slug: r, url: s, ...I, seed: !1 }));
                else if (hy(r) && (En || ri || Tn || !(An || ee)))
                  ;
                else if (hy(r)) {
                  let N = P_(r),
                    de = e1(r);
                  if (CA() && (ee || !N || de))
                    (JP(r),
                      stt(r),
                      I.notify({
                        summary: (ee ? kIr : LHs)(oBe(I.getTitle, s)),
                        detail: `Auto-replies on artifact ${s} were ${ee ? "resumed by a resume_replies request" : "re-enabled by this publish"} \u2014 they had been ${de ? "handed to another session of this conversation that resumed it or published there" : N ? "paused when the user interrupted the session (Ctrl+C or Stop) and the watch had since dropped" : "stopped when their live-updates task was killed"}. ${N && !de ? Yt : Ji}`
                      }));
                  if (!N || de) vQt(r);
                  (vEs(r), fvs(r), R0n(r), mL(e, r), rme({ slug: r, url: s, ...I, seed: !0 }));
                } else {
                  if (ce.pendingResumeDisclosure.delete(r))
                    (JP(r),
                      stt(r),
                      I.notify({
                        summary: kIr(oBe(I.getTitle, s)),
                        detail: `Auto-replies on artifact ${s} were resumed by a resume_replies request \u2014 they had been paused when the user interrupted the session (Ctrl+C or Stop); the watch has now connected. ${Yt}`
                      }));
                  if (
                    (rme({
                      slug: r,
                      url: s,
                      ...I,
                      seed: !0,
                      ...(n.pickUpRecentSummons === !0 &&
                        n.machineArm !== !0 && { pickUpRecentSummons: !0 }),
                      ...(n.machineArm === !0 && Oe && Dme() && { deferMs: nEs(e.rewatchTiming) })
                    }),
                    K === "sync")
                  ) {
                    let N = Tve(r);
                    Et = { kickCount: N.kickCount, cancelGeneration: N.cancelGeneration };
                  }
                }
              let qe = e.supervisors.get(r),
                It = qe?.resumeAnnounce;
              if (qe !== void 0 && It !== void 0) {
                qe.resumeAnnounce = void 0;
                let { autoReact: N } = Z(),
                  de = I !== void 0 && !yy(r) && !N.userDisarmed && N.enabledMemo === !0;
                if (
                  !R.aborted &&
                  !qe.stopped &&
                  !y.isStopped(r) &&
                  (de || (!It.wired && I === void 0))
                )
                  It.onOpen();
              }
              if (
                I !== void 0 &&
                (An || ee || S) &&
                !vn &&
                !R.aborted &&
                !y.isStopped(r) &&
                !yy(r) &&
                !Z().autoReact.userDisarmed &&
                Z().autoReact.wakeEnabledMemo === !0
              ) {
                vn = !0;
                let N = avs([r], Date.now());
                (async () => {
                  let de = await import("./chunk-w0prrq68.js"),
                    ze = await import("./chunk-s3vgphyy.js"),
                    Ye = await I3e({
                      records: await de.listRegisteredSessionRecords(),
                      sessionId: Sn,
                      selfPid: process.pid,
                      isRunning: ze.isProcessRunning,
                      isSameProcess: ze.provenSameProcessAsync
                    });
                  if (Ye.verdict !== "live") {
                    N.end();
                    return;
                  }
                  let { requestReplyTakeover: oi } = await import("./chunk-eb6at7v2.js"),
                    Ot = (
                      await oi({
                        holders: [Ye.holder, ...Ye.otherHolders],
                        holdersIncomplete: Ye.unproven === !0,
                        conversationId: Sn,
                        slugs: [r],
                        reason: "claim",
                        alreadyReplying: !0,
                        claim: N
                      })
                    ).yielded.has(r),
                    Cn = !Ot && N.lost.has(r),
                    Je = oBe(() => yt(), s);
                  Za({
                    value: Di({
                      taskType: Cq,
                      summary: Wt(
                        Ot
                          ? `Another session of this conversation handed its replies on ${Je} to this one`
                          : Cn
                            ? `This session handed its replies on ${Je} to another session of this conversation`
                            : `Another session of this conversation is open while replies are armed on ${Je}`
                      ),
                      body: `
<event>${Wt(Ot ? `Another live session of this same conversation was also armed to reply to comments on ${s}; it paused its replies at this session's request, so only this session answers them now. Nothing to do; do not stop a watch on your own.` : Cn ? `Another live session of this same conversation claimed the replies to comments on ${s} a moment after this one; this session paused its own at that session's request, so only that session answers them now. Nothing to do \u2014 a publish the user asks for here takes them back; do not republish or stop a watch on your own.` : `Another live session of this same conversation is running. If it is also replying to comments on ${s}, every comment will get a reply from both sessions until one stops. Tell the user; they can end either session's live-updates task in /tasks. Do not stop a watch on your own.`)}</event>`
                    }),
                    mode: "task-notification",
                    passive: !0,
                    priority: "next",
                    origin: { kind: "task-notification", source: Cq, slug: r, displayName: Je },
                    agentId: tt()
                  });
                })().catch(() => {
                  N.end();
                });
              }
              return;
            }
            let _e = ne ? Date.now() - kt : 0,
              Tt = !ne && io(V),
              Ct =
                K === "sync"
                  ? V === MOt && (wn || (O !== void 0 && Date.now() >= O.expMs - Yi))
                  : V === Xvs,
              je = K === "sync" && ((ne && V === MOt && !Ct) || (!ne && TIe(V)?.status === 404)),
              xt = je || (!ne && (Tt || ro(V, Ie, e.rewatchTiming))),
              Lt = ne || xt ? void 0 : ti,
              z = e.supervisors.get(r);
            if (
              je &&
              ne &&
              _e < e.rewatchTiming.minUptimeMs &&
              z !== void 0 &&
              z.stalledSince === void 0 &&
              We?.stalledSince !== void 0
            )
              ((z.stalledSince = We.stalledSince),
                (z.lastStalledAt = We.lastStalledAt),
                (z.stallOutAfterMs = We.stallOutAfterMs));
            if (z !== void 0 && K === "sync" && V === DOt && O !== void 0 && z.lease === O)
              delete z.lease;
            if (
              O !== void 0 &&
              z?.lease === O &&
              (!Dme() ||
                (!Tt &&
                  !je &&
                  !Nfo(O, {
                    expired: Ct,
                    refused: Lt !== void 0,
                    healthy: ne && _e >= e.rewatchTiming.minUptimeMs
                  })))
            ) {
              if ((delete z.lease, !O.opened)) delete z.renewable;
            }
            if (ne)
              f("artifact_live_subscribe", `socket_closed_${V ?? "unknown"}`, {
                chain_spared: Z().autoReact.artifacts.get(r)?.scanning === !0
              });
            else if (Lt !== void 0) f("artifact_live_subscribe", "reuse_connect_failed");
            else {
              let Oe = TIe(V),
                Me = {
                  ...(xt && { stalled: !0 }),
                  ...(Tt && { shed: !0 }),
                  ...(Oe !== null && { http_status: Oe.status, cf_mitigated: Oe.cfMitigated })
                };
              if (Object.keys(Me).length > 0) m("artifact_live_subscribe", "connect_failed", Me);
              else m("artifact_live_subscribe", "connect_failed");
            }
            if (z !== void 0 && !z.stopped)
              z.lastFailure = _e < e.rewatchTiming.minUptimeMs ? (V ?? "unknown") : void 0;
            Qt(e, r, {
              uptimeMs: je ? 0 : _e,
              ...(V !== void 0 && { closeCode: V }),
              resumeNeverOpened: ee && !ne,
              reuseRefused: Lt !== void 0,
              stalled: xt,
              expired: Ct
            });
          }
        },
        h
      );
      if ((eo(e, E, r, A.data.taskId), xe)) (e.pendingRegistrations--, (xe = !1));
      let B = e.supervisors.get(r);
      if (B === void 0 || B !== E)
        return (
          ES(A.data.taskId, h.taskRegistry, { quiet: !0 }),
          Zt(e, r, n.machineArm),
          { outcome: "skipped", reason: "cancelled" }
        );
      if (C())
        return (
          ES(A.data.taskId, h.taskRegistry, { quiet: !0 }),
          te(e, r),
          { outcome: "skipped", reason: "cancelled" }
        );
      if (P()) {
        if (
          (ES(A.data.taskId, h.taskRegistry, { quiet: !0 }),
          f("artifact_live_subscribe", "stop_latched"),
          e.armOutcomes.delete(r),
          Xt(e, r),
          St || E.lastActivityAt !== Xr)
        )
          dt(e, E);
        else te(e, r);
        return { outcome: "skipped", reason: "stop_latched" };
      }
      let be = ee && R.aborted;
      if (be && T !== void 0 && y.isStopped(r))
        return (
          ES(A.data.taskId, h.taskRegistry, { quiet: !0 }),
          te(e, r),
          { outcome: "skipped", reason: "cancelled" }
        );
      if ((e.armOutcomes.delete(r), Xt(e, r), be))
        return { outcome: "skipped", reason: "cancelled" };
      if (ee && (Z().wakes.scanGeneration !== Te || n3(r) !== Ue))
        return { outcome: "skipped", reason: "stopped_again" };
      if (_n && le !== void 0) {
        let G = e.supervisors.get(r);
        if (G === E && !G.stopped && !br(e, r, Jr))
          G.autoReactWiring = Re(
            G.autoReactWiring,
            { ...le, title: G.autoReactWiring?.title ?? le.title },
            !0
          );
      }
      let ue = se ? void 0 : e.pendingInFlightWiring.get(r),
        yn = hy(r),
        ni = yn || (I !== void 0 && Z().wakes.scanGeneration !== Te),
        kn =
          ue !== void 0 &&
          ue.freshPublishWiring &&
          ue.scanGeneration === Z().wakes.scanGeneration &&
          ue.stopGeneration === n3(r);
      if (ue === void 0 || R.aborted || !(I === void 0 ? !yn || kn : !ee && ni && kn))
        return { outcome: "armed", taskId: A.data.taskId, ...(se && { degraded: "not_editor" }) };
      (e.pendingInFlightWiring.delete(r),
        (Ce = ue),
        ES(A.data.taskId, h.taskRegistry, { quiet: !0 }));
    } catch {
      let A = e.supervisors.get(r);
      if (zr && A === E && !(A !== void 0 && A.explicit && !S)) te(e, r);
      else if (Yr && A !== void 0 && A === j) A.explicit = !1;
      if (At !== void 0 && A === E && A.armedVia === "resume") A.armedVia = At;
      else if (hn && A === E && A.armedVia === L && !A.explicit) {
        if (((A.armedVia = "mcp_write"), gn === void 0)) delete A.autoReactWiring;
        else A.autoReactWiring = gn;
        mL(e, r);
      }
      if (A !== void 0 && A === E && A.wake === Be)
        if (Rn === void 0) delete A.wake;
        else A.wake = Rn;
      if (A !== void 0 && gt !== void 0) A.resumeAnnounce = void 0;
      if (O !== void 0 && A?.lease === O && !Nfo(O, { expired: !1, refused: !1, healthy: !1 })) {
        if ((delete A.lease, !O.opened)) delete A.renewable;
      }
      return (
        m("artifact_live_subscribe", F !== void 0 ? "reuse_ws_open_error" : "ws_open_error"),
        X(e, r, n.machineArm, "ws_open_error", Y)
      );
    }
  } finally {
    (e.inFlightSubscribes.delete(r),
      e.inFlightWiredIntent.delete(r),
      e.retiredInFlightArms.delete(r),
      e.inFlightGenerations.delete(r),
      e.bootingWiredArms.delete(r));
    let C = e.supervisors.get(r);
    if (C === void 0 || C.stopped) Ve(r)?.sourceEnded();
    let J = e.armSettleWaiters.get(r) ?? [];
    e.armSettleWaiters.delete(r);
    for (let D of J)
      try {
        D();
      } catch (ge) {
        l(ge);
      }
    if ((e.pendingInFlightWiring.delete(r), xe)) (e.pendingRegistrations--, (xe = !1));
  }
  if (Ce === void 0) throw Error("armLiveSubscription: late-park fall-through lost its park");
  return pe(e, {
    ...n,
    machineArm: void 0,
    userResumeWiring: void 0,
    approvedRelatchGen: void 0,
    sessionResume: void 0,
    pickUpRecentSummons: void 0,
    editorGatedWiring: void 0,
    autoReactWiring: Ce.wiring,
    freshPublishWiring: Ce.freshPublishWiring,
    freshPublish: n.freshPublish === !0 || Ce.freshPublishWiring
  });
}
function Pr(e, n, r, s) {
  wOr(e.armOutcomes, n, { outcome: r, reason: s, at: Date.now() }, _Or);
}
function xo(e, n, r, s, d) {
  if (r || e.handoffGeneration !== d.handoffGen || e.retiredInFlightArms.has(n)) return;
  let a = e.supervisors.get(n);
  if (a !== void 0 && !a.stopped && a.timer !== void 0) {
    if (s !== "cancelled") a.lastFailure = s;
    return;
  }
  if (e.armOutcomes.has(n)) return;
  let h = Z().durable.stopLatches.isStopped(n);
  if (!h) Pr(e, n, "failed", s);
  if (d.announce && s !== "cancelled" && !h) Do(e, n, d, s);
}
var Dr = "artifact not found",
  Lo = "there is nothing to retry unless the artifact is shared with the user again",
  Fr = "other organization",
  Vr = "public, outside your organization",
  Wo = `there is nothing to retry until ${E9e}`,
  Io = "there is nothing to retry: read it with the read action instead",
  ft =
    "it will not come back on its own \u2014 watch it again only if the user asks or your current task still depends on its republishes",
  Oo = "watch it again when you next work on this artifact",
  Mo = "there is nothing to re-watch while live updates are switched off";
function Po(e) {
  switch (e) {
    case "not_found":
    case "other_org":
    case "public_outside_org":
      return { advice: rBe(e) };
    case "flag_off":
      return { advice: Mo, passive: !0 };
    default:
      return { advice: ft, passive: !0 };
  }
}
function rBe(e) {
  switch (e) {
    case "not_found":
    case Dr:
      return Lo;
    case "other_org":
    case Fr:
      return Wo;
    case "public_outside_org":
    case Vr:
      return Io;
    case Nr:
    case Ur:
    case Gr:
    case tn:
      return ft;
    default:
      return;
  }
}
var Nr = "connection lost",
  Ur = "no live credential",
  Gr = "could not reconnect",
  tn = "made room for another watch",
  nn = {
    boot_failed: "could not connect",
    ws_open_error: "could not connect",
    sync_unavailable: "could not connect",
    not_found: Dr,
    other_org: Fr,
    public_outside_org: Vr,
    no_subscription_token: Ur,
    watch_cap: "watch limit reached"
  };
function Xt(e, n) {
  (vOr(e.announcedArmFailures, n), LLn(n));
}
function LLn(e) {
  D_(
    (n) =>
      n.origin?.kind === "task-notification" &&
      n.origin.source === Cq &&
      n.origin.slug === e &&
      (n.origin.armFailed === !0 || n.origin.watchEnded === !0)
  );
}
function Do(e, n, r, s) {
  if (!Von(e.announcedArmFailures, `${n}:${s}`, bOr)) return;
  let d = nBe(s) ?? s,
    a = rBe(s) ?? (Z().builtInArtifactHiddenForMcp ? void 0 : SOr);
  $r({
    slug: n,
    artifactName: oBe(r.getTitle, r.url),
    shortReason: nn[s] ?? "not armed",
    event: `The live subscription for ${r.url} did not arm \u2014 ${d}. This session is NOT watching it and does not keep track of new versions of it; ${a === void 0 ? "do not claim to be watching it" : `${a}, and do not claim to be watching it meanwhile`}.`
  });
}
function $r(e) {
  Za({
    value: Di({
      taskType: Cq,
      summary: Wt(jHs(e.artifactName, e.shortReason)),
      body: `
<event>${Wt(e.event)}</event>`
    }),
    mode: "task-notification",
    priority: "next",
    origin: {
      kind: "task-notification",
      source: Cq,
      slug: e.slug,
      displayName: e.artifactName,
      armFailed: !0
    },
    agentId: tt()
  });
}
function Yuo(e) {
  let { slug: n, url: r, liveDocLoss: s, settlement: d } = e;
  if (d.settled === "registered") {
    LLn(n);
    return;
  }
  if (d.settled !== "unregistered" || !Wn(n, d.reason)) return;
  let { reason: a, detail: h, serverMessage: b } = d,
    w =
      s ??
      `This session will NOT be woken when ${pw() ? "it is republished or a comment on it is sent to Claude" : "it is republished"}`,
    S = USr(a);
  $r({
    slug: n,
    artifactName: oBe(e.getTitle, r),
    shortReason: "wake subscription not registered",
    event: `The durable wake subscription for ${r} was not registered (${a}${h !== void 0 ? `: ${h}` : ""}) \u2014 ${MLn(a, b)} ${w}${S === null ? "" : `; ${S}`} \u2014 do not claim to be subscribed to it meanwhile.`
  });
}
function Xuo(e) {
  return e.connected && !LOt(e.taskId);
}
function Juo(e, n) {
  let r = Z().live,
    s = new Set();
  for (let S of Object.values(e.taskRegistry.all()))
    if (ZB(S) && S.status === "running" && S.frameLive !== void 0) s.add(S.frameLive.slug);
  let d = Z().durable.stopLatches,
    a = (S) => (n === void 0 || S === n) && !s.has(S) && !d.isStopped(S),
    h = new Set(jSr(e, n).map((S) => S.slug)),
    b = [],
    w = new Set();
  for (let S of r.inFlightSubscribes) {
    if (
      !a(S) ||
      (r.inFlightGenerations.get(S) ?? r.handoffGeneration) !== r.handoffGeneration ||
      r.retiredInFlightArms.has(S)
    )
      continue;
    w.add(S);
    let R = r.supervisors.get(S),
      x = R !== void 0 && !R.stopped ? R : void 0;
    b.push({
      slug: S,
      state: "arming",
      reconnect: x?.taskId !== void 0,
      failures: x?.consecutiveFailures ?? 0,
      ...(x?.lastFailure !== void 0 && { lastFailure: x.lastFailure })
    });
  }
  for (let S of r.supervisors.values()) {
    if (!a(S.slug) || w.has(S.slug) || S.stopped || S.timer === void 0) continue;
    if ((w.add(S.slug), h.has(S.slug))) continue;
    b.push({
      slug: S.slug,
      state: "backing_off",
      failures: S.consecutiveFailures,
      maxFailures: r.rewatchTiming.maxConsecutiveFailures,
      nextAt: S.nextRewatchAt ?? Date.now(),
      ...(S.lastFailure !== void 0 && { lastFailure: S.lastFailure })
    });
  }
  for (let [S, R] of r.armOutcomes) {
    if (!a(S) || w.has(S)) continue;
    b.push({ slug: S, state: R.outcome, reason: R.reason, at: R.at });
  }
  return b;
}
export {
  $ct,
  PLn,
  $Sr,
  ILn,
  OLn,
  Iuo,
  hws,
  FSr,
  MLn,
  Ouo,
  USr,
  yws,
  _ws,
  Muo,
  Duo,
  bws,
  Huo,
  DLn,
  BSr,
  cQt,
  uQt,
  hve,
  fQt,
  yve,
  jSr,
  Luo,
  Nuo,
  $uo,
  Fuo,
  Uuo,
  Buo,
  WSr,
  juo,
  Wuo,
  pQt,
  Guo,
  UTi,
  zuo,
  GSr,
  zSr,
  Kuo,
  kIe,
  wOt,
  Vuo,
  HLn,
  vOt,
  KSr,
  VSr,
  qSr,
  YSr,
  nBe,
  mQt,
  quo,
  XSr,
  rBe,
  LLn,
  Yuo,
  Xuo,
  Juo
};

//# sourceMappingURL=chunk-pb6nspqf.js.map
