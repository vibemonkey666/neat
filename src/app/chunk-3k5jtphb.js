// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { I5o, $bn } from "./chunk-at88wjsn.js";
import { wn } from "./chunk-wrtp8qz8.js";
import { a } from "./chunk-4cgvah10.js";
import { m, f, fo } from "./chunk-brszmkb3.js";
import { pS } from "./chunk-znkwh1rm.js";
import { U4e } from "./chunk-dc0nzty2.js";
import { Fy, pf, Yl } from "./chunk-ak0cmk10.js";
import { t } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { gzr, c_e, e2o, Oh, QP, NU, Owt } from "./chunk-yw4wqxm9.js";
import { i9, MLe } from "./chunk-njnxaswh.js";
import { y_e, rzt } from "./chunk-csks5ccj.js";
import { Sms } from "./chunk-hhwwdjaf.js";
import { Ds, py } from "./chunk-tdv74tcm.js";
class WR extends Error {
  status;
  errorType;
  suppressible;
  constructor(e, n, p, y = !1) {
    super(e);
    ((this.name = "BridgeFatalError"),
      (this.status = n),
      (this.errorType = p),
      (this.suppressible = y));
  }
}
async function M(e, n, p, y, u, v, T) {
  let h = i9(y.data);
  if (h === void 0) return y;
  let R = !1;
  if (MLe(h)) {
    p(`[bridge:api] ${T}: 403 untrusted_device, enrolling this computer and retrying`);
    let k = await e.recover(u);
    if (k) {
      let S = await v(n(), k),
        r = S.status === 403 ? i9(S.data) : void 0;
      if (r === void 0) return S;
      ((h = r), (R = !0), p(`[bridge:api] ${T}: retry after enrollment also got untrusted_device`));
    }
  }
  throw new WR(`${T}: ${e.hint(h, { justEnrolled: R })}`, 403, "untrusted_device");
}
function yoo(e) {
  function n(r) {
    e.onDebug?.(r);
  }
  let p = 0,
    y = 100;
  async function u(r, i) {
    let o = {
        Authorization: `Bearer ${r}`,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
        "anthropic-beta": I5o.header,
        "x-environment-runner-version": e.runnerVersion,
        "User-Agent": Ds()
      },
      s = i ?? (await e.getTrustedDeviceToken?.());
    if (s) o["X-Trusted-Device-Token"] = s;
    return o;
  }
  function v() {
    let r = e.getAccessToken();
    if (!r) throw Error(y_e);
    return r;
  }
  async function T(r, i, o) {
    let s = o === "enroll_and_retry" ? e.untrustedDevice : void 0,
      g = s ? await e.getTrustedDeviceToken?.() : void 0,
      _ = v(),
      E = await r(_, g);
    if (E.status === 403 && s) return M(s, v, n, E, g, r, i);
    if (E.status !== 401) return E;
    if (!e.onAuth401) return (n(`[bridge:api] ${i}: 401 received, no refresh handler`), E);
    if ((n(`[bridge:api] ${i}: 401 received, attempting token refresh`), await e.onAuth401(_))) {
      n(`[bridge:api] ${i}: Token refreshed, retrying request`);
      let D = v(),
        P = await r(D, g);
      if (P.status === 403 && s) return M(s, v, n, P, g, r, i);
      if (P.status !== 401) return P;
      n(`[bridge:api] ${i}: Retry after refresh also got 401`);
    } else n(`[bridge:api] ${i}: Token refresh failed`);
    return E;
  }
  let h = {
    async registerBridgeEnvironment(r, i) {
      return fo(
        "bridge_environment_register",
        async () => {
          n(`[bridge:api] POST /v1/environments/bridge bridgeId=${r.bridgeId}`);
          let o,
            s = r.getToolHostAdvert?.() ?? { kind: "withdraw" };
          switch (s.kind) {
            case "advertise":
              o = {
                tool_host: "2",
                tool_host_cc_version: s.advert.cliVersion,
                tool_host_platform: s.advert.platform
              };
              break;
            case "withdraw":
              if (r.reuseEnvironmentId)
                o = {
                  tool_host: "",
                  tool_host_cc_version: "",
                  tool_host_platform: "",
                  tool_host_blocker: ""
                };
              break;
            case "unknown":
              break;
          }
          let g = {
              machine_name: r.machineName,
              ...(r.machineId != null && { machine_id: r.machineId }),
              directory: r.dir,
              branch: r.branch,
              git_repo_url: U4e(r.gitRepoUrl),
              max_sessions: r.maxSessions,
              metadata: {
                worker_type: r.workerType,
                ...(r.machineId != null && { machine_id: r.machineId }),
                ...o
              },
              ...(r.hostProfile && { host: r.hostProfile }),
              ...(r.reuseEnvironmentId && { environment_id: r.reuseEnvironmentId })
            },
            _ = await T(
              async (E, w) =>
                Ht.post(`${e.baseUrl}/v1/environments/bridge`, g, {
                  headers: await u(E, w),
                  timeout: 15000,
                  signal: i,
                  validateStatus: (D) => D < 500
                }),
              "Registration",
              "enroll_and_retry"
            );
          if (_.status === 409 && Owt(_.data) === rzt)
            throw new WR(
              NU(_.data) ??
                "This folder is already served by another Claude Code on this device. Stop it first.",
              409,
              rzt
            );
          return (
            A(_.status, _.data, "Registration", _.headers),
            n(
              `[bridge:api] POST /v1/environments/bridge -> ${_.status} environment_id=${_.data.environment_id}`
            ),
            n(
              `[bridge:api] >>> ${gzr({ ...g, ...(g.host && { host: { tools: g.host.tools.length, mcp: g.host.mcp_servers?.length ?? 0 } }) })}`
            ),
            n(`[bridge:api] <<< ${gzr(_.data)}`),
            _.data
          );
        },
        x
      );
    },
    async pollForWork(r, i, o, s, g) {
      Fy(r, "environmentId");
      let _ = p;
      p = 0;
      let E = {};
      if (s !== void 0) E.reclaim_older_than_ms = s;
      if (g !== void 0) E.poll_interval_ms = g;
      let w = await Ht.get(`${e.baseUrl}/v1/environments/${r}/work/poll`, {
        headers: await u(i),
        params: Object.keys(E).length > 0 ? E : void 0,
        timeout: 1e4,
        signal: o,
        validateStatus: (P) => P < 500
      });
      if ((A(w.status, w.data, "Poll", w.headers), !w.data)) {
        if (((p = _ + 1), p === 1 || p % y === 0))
          n(
            `[bridge:api] GET .../work/poll -> ${w.status} (no work, ${p} consecutive empty polls)`
          );
        return null;
      }
      let D = w.data.data?.mode;
      if (D != null) {
        let { id: P, data: O } = w.data;
        return (
          n(
            `[bridge:api] GET .../work/poll -> ${w.status} workId=${c_e(P)} type=${e2o(O.type)} mode=${e2o(D)} sessionId=${c_e(O.id)}`
          ),
          w.data
        );
      }
      return (
        n(
          `[bridge:api] GET .../work/poll -> ${w.status} workId=${w.data.id} type=${w.data.data?.type}${w.data.data?.id ? ` sessionId=${w.data.data.id}` : ""}`
        ),
        n(`[bridge:api] <<< ${gzr(w.data)}`),
        w.data
      );
    },
    async acknowledgeWork(r, i, o, s = i) {
      (Fy(r, "environmentId"), Fy(i, "workId"), n(`[bridge:api] POST .../work/${s}/ack`));
      let g = await Ht.post(
        `${e.baseUrl}/v1/environments/${r}/work/${i}/ack`,
        {},
        { headers: await u(o), timeout: 1e4, validateStatus: (_) => _ < 500 }
      );
      (A(g.status, g.data, "Acknowledge", g.headers),
        n(`[bridge:api] POST .../work/${s}/ack -> ${g.status}`));
    },
    async stopWork(r, i, o, s, g = i) {
      (Fy(r, "environmentId"),
        Fy(i, "workId"),
        n(`[bridge:api] POST .../work/${g}/stop force=${s}`));
      let _ = await Ht.post(
        `${e.baseUrl}/v1/environments/${r}/work/${i}/stop`,
        { force: s },
        { headers: await u(o), timeout: 1e4, validateStatus: (E) => E < 500 }
      );
      (A(_.status, _.data, "StopWork"), n(`[bridge:api] POST .../work/${g}/stop -> ${_.status}`));
    },
    async deregisterEnvironment(r) {
      (Fy(r, "environmentId"), n(`[bridge:api] DELETE /v1/environments/bridge/${r}`));
      let i = await T(
        async (o, s) =>
          Ht.delete(`${e.baseUrl}/v1/environments/bridge/${r}`, {
            headers: await u(o, s),
            timeout: 1e4,
            validateStatus: (g) => g < 500
          }),
        "Deregister",
        "pass_through"
      );
      (A(i.status, i.data, "Deregister"),
        n(`[bridge:api] DELETE /v1/environments/bridge/${r} -> ${i.status}`));
    },
    async markEnvironmentOffline(r, i) {
      Fy(r, "environmentId");
      let o = `/v1/environments/bridge/${r}/offline`;
      n(`[bridge:api] POST ${o}`);
      let s = await Ht.post(`${e.baseUrl}${o}`, void 0, {
        headers: await u(i),
        timeout: 5000,
        validateStatus: (g) => g < 500
      });
      (A(s.status, s.data, "MarkOffline"), n(`[bridge:api] POST ${o} -> ${s.status}`));
    },
    async archiveSession(r) {
      Fy(r, "sessionId");
      let i = e.useCcrV2SessionCrud?.()
        ? `/v1/code/sessions/${Yl(r)}/archive`
        : `/v1/sessions/${pf(r)}/archive`;
      n(`[bridge:api] POST ${i}`);
      let o = await T(
        async (s, g) =>
          Ht.post(
            `${e.baseUrl}${i}`,
            {},
            { headers: await u(s, g), timeout: 1e4, validateStatus: (_) => _ < 500 }
          ),
        "ArchiveSession",
        "pass_through"
      );
      if (o.status === 409) {
        n(`[bridge:api] POST ${i} -> 409 (already archived)`);
        return;
      }
      (A(o.status, o.data, "ArchiveSession"), n(`[bridge:api] POST ${i} -> ${o.status}`));
    },
    async reconnectSession(r, i, o) {
      return fo(
        "bridge_session_reconnect",
        async () => {
          (Fy(r, "environmentId"),
            Fy(i, "sessionId"),
            n(`[bridge:api] POST /v1/environments/${r}/bridge/reconnect session_id=${i}`));
          let s = await T(
            async (g, _) =>
              Ht.post(
                `${e.baseUrl}/v1/environments/${r}/bridge/reconnect`,
                { session_id: i },
                { headers: await u(g, _), timeout: 1e4, signal: o, validateStatus: (E) => E < 500 }
              ),
            "ReconnectSession",
            "enroll_and_retry"
          );
          (A(s.status, s.data, "ReconnectSession"),
            n(`[bridge:api] POST .../bridge/reconnect -> ${s.status}`));
        },
        x
      );
    },
    async heartbeatWork(r, i, o) {
      (Fy(r, "environmentId"), Fy(i, "workId"), n(`[bridge:api] POST .../work/${i}/heartbeat`));
      let s = await Ht.post(
        `${e.baseUrl}/v1/environments/${r}/work/${i}/heartbeat`,
        {},
        { headers: await u(o), timeout: 1e4, validateStatus: (g) => g < 500 }
      );
      return (
        A(s.status, s.data, "Heartbeat"),
        n(
          `[bridge:api] POST .../work/${i}/heartbeat -> ${s.status} lease_extended=${s.data.lease_extended} state=${s.data.state}`
        ),
        s.data
      );
    }
  };
  function R(r) {
    return r instanceof Error && "status" in r && typeof r.status === "number"
      ? `http_${r.status}`
      : x(r);
  }
  h.refuseToolHost = async (r, i, o, s) => {
    let g = `[bridge:api] POST /v1/code/sessions/${c_e(r)}/tool_hosts/refuse workId=${c_e(i)} code=${o}`;
    try {
      if (Ae() !== "firstParty" || _t() || !pS("allow_remote_control")) {
        n(`${g} not sent`);
        return;
      }
      await fo(
        "bridge_tool_host_refuse",
        async () => {
          (Fy(r, "sessionId"), n(g));
          let _ = await Ht.post(
            `${e.baseUrl}/v1/code/sessions/${Yl(r)}/tool_hosts/refuse`,
            { work_id: i, code: o },
            {
              headers: {
                ...(await u(v())),
                "anthropic-beta": $bn.header,
                "anthropic-client-feature": "ccr"
              },
              timeout: 5000,
              signal: s,
              maxRedirects: 0,
              validateStatus: (E) => E < 500
            }
          );
          (A(_.status, _.data, "RefuseToolHost"), n(`${g} -> ${_.status}`));
        },
        R
      );
    } catch (_) {
      n(`${g} failed (${R(_)}); not retried`);
    }
  };
  async function k(r) {
    let { "anthropic-beta": i, ...o } = await u(r);
    return { ...o, "anthropic-client-platform": py(), "anthropic-client-version": e.runnerVersion };
  }
  function S(r) {
    let i = r["retry-after"];
    return typeof i === "string" ? Oh(i) : void 0;
  }
  return (
    (h.sessionsWatch = {
      async mintResumeToken(r, i) {
        let {
          status: o,
          data: s,
          headers: g
        } = await Ht.get(`${e.baseUrl}/v1/code/sessions?limit=1`, {
          headers: await k(r),
          timeout: 1e4,
          signal: i,
          maxRedirects: 0,
          validateStatus: () => !0
        });
        n(`[bridge:api] GET /v1/code/sessions?limit=1 -> ${o}`);
        let _ =
          s !== null && typeof s === "object" && "resume_token" in s ? s.resume_token : void 0;
        return { status: o, retryAfterMs: S(g), ...(typeof _ === "string" && { resumeToken: _ }) };
      },
      async open(r, i, o) {
        let {
          status: s,
          data: g,
          headers: _
        } = await Ht.get(
          `${e.baseUrl}/v1/code/sessions/watch?include_trigger_sessions=true&exclude_tags=-`,
          {
            headers: { ...(await k(r)), Accept: "text/event-stream", "Last-Event-ID": i },
            responseType: "stream",
            timeout: 0,
            signal: o,
            maxRedirects: 0,
            validateStatus: () => !0
          }
        );
        n(`[bridge:api] GET /v1/code/sessions/watch -> ${s}`);
        let E = _["content-type"];
        if (s === 200 && typeof E === "string" && E.includes("text/event-stream"))
          return { status: s, body: g };
        return (g.destroy(), { status: s, retryAfterMs: S(_) });
      }
    }),
    h
  );
}
function A(e, n, p, y) {
  if (e === 200 || e === 204) return;
  let u = NU(n),
    v = B(n);
  switch (e) {
    case 401:
      throw new WR(`${p}: Authentication failed (401)${u ? `: ${u}` : ""}. ${y_e}`, 401, v);
    case 403:
      if (OPt(v)) throw new WR("Remote Control session expired.", 403, v);
      throw new WR(
        `${p}: Access denied (403)${u ? `: ${u}` : ""}. Check your organization permissions.`,
        403,
        v,
        QP(n)?.includes("external_poll_sessions")
      );
    case 404:
      throw new WR(
        u ?? `${p}: Not found (404). Remote Control may not be available for this organization.`,
        404,
        v
      );
    case 410:
      throw new WR(u ?? "Remote Control session expired.", 410, v ?? "environment_expired");
    case 429: {
      let T = Oh(typeof y?.["retry-after"] === "string" ? y["retry-after"] : void 0);
      throw Object.assign(
        Error(`${p}: Rate limited (429). Polling too frequently.`),
        T !== void 0 ? { status: e, retryAfterMs: T } : { status: e }
      );
    }
    default:
      throw Object.assign(Error(`${p}: Failed with status ${e}${u ? `: ${u}` : ""}`), {
        status: e
      });
  }
}
function OPt(e) {
  if (!e) return !1;
  return e.includes("expired") || e.includes("lifetime");
}
function _oo(e) {
  return e.suppressible;
}
function x(e) {
  if (e instanceof WR) return e.status === 401 ? "auth_failed" : "http_error";
  if (e instanceof Error) {
    if (e.message === y_e) return "no_token";
    if ("status" in e && typeof e.status === "number") return "http_error";
  }
  return "request_failed";
}
function B(e) {
  if (e && typeof e === "object") {
    if (
      "error" in e &&
      e.error &&
      typeof e.error === "object" &&
      "type" in e.error &&
      typeof e.error.type === "string"
    )
      return e.error.type;
  }
  return;
}
var COn = 3,
  dms = 20,
  H = 60000,
  I = 3600000,
  U = 900000,
  j = 86400000,
  V = 0.25,
  W = 3600000;
function Ehr(e, n = Date.now(), p = Math.random) {
  if (typeof e !== "number" || !Number.isFinite(e) || e * 1000 < W) return;
  let y = e * 1000,
    v = Math.min(Math.max(y / 10, U), j) * (1 + V * p());
  return n + y - v;
}
var cms = 300000,
  ums = 3600000,
  fms = 3,
  ROn = 5;
async function khr({
  api: e,
  config: n,
  environmentId: p,
  activeSessions: y,
  attempt: u,
  trigger: v,
  signal: T
}) {
  if (v === "tool_host_advert_changed")
    t(
      `[bridge:poll] What this environment advertises changed; re-registering environment ${p} (attempt ${u})`
    );
  else if (v === "proactive")
    t(
      `[bridge:poll] Environment secret expires soon; re-registering environment ${p} to renew it (attempt ${u})`,
      { level: "info" }
    );
  else
    t(
      `[bridge:poll] Poll returned ${v === "poll_401" ? 401 : 404}; re-registering environment ${p} (attempt ${u}/${COn})`,
      { level: "warn" }
    );
  let h, R;
  try {
    let { hostProfile: r, ...i } = n,
      o = await Sms(r);
    n.hostProfile = o;
    let s = n.getToolHostAdvert?.();
    ((R = s),
      (h = await e.registerBridgeEnvironment(
        {
          ...i,
          ...(o && { hostProfile: o }),
          ...(s && { getToolHostAdvert: () => s }),
          reuseEnvironmentId: p
        },
        T
      )));
  } catch (r) {
    let i = r instanceof Error && r.message === y_e ? 401 : N(r),
      o = i !== void 0;
    if (
      (t(
        `[bridge:poll] Re-registration of ${p} ${o ? "rejected" : "failed transiently"}: ${d(r)}`,
        { level: o ? "error" : "warn" }
      ),
      !o && R !== void 0 && R.kind !== "unknown" && !C(R, n.registeredToolHostAdvert))
    )
      n.registeredToolHostAdvert = "unconfirmed";
    if (T.aborted) return { outcome: "transient" };
    if (
      (a("tengu_bridge_env_reregister", {
        attempt: u,
        outcome: o ? b("register_rejected") : b("register_transient"),
        trigger: c(v)
      }),
      i !== void 0)
    ) {
      if (v === "tool_host_advert_changed") f("bridge_env_reregister", "advert_register_rejected");
      else if (v === "proactive") f("bridge_env_reregister", "proactive_register_rejected");
      else m("bridge_env_reregister", "register_rejected");
      return { outcome: "fatal", reason: "register_rejected", status: i, message: d(r) };
    }
    return { outcome: "transient", retryAfterMs: boo(r) };
  }
  if (h.environment_id !== p) {
    if (
      (t(`[bridge:poll] Re-registration returned ${h.environment_id}, not ${p}; not adopting it`, {
        level: "warn"
      }),
      a("tengu_bridge_env_reregister", { attempt: u, outcome: b("replaced"), trigger: c(v) }),
      v === "tool_host_advert_changed")
    )
      f("bridge_env_reregister", "advert_replaced");
    else if (v === "proactive") f("bridge_env_reregister", "proactive_replaced");
    else m("bridge_env_reregister", "replaced");
    return (
      await e
        .deregisterEnvironment(h.environment_id)
        .catch((r) =>
          t(`[bridge:poll] Failed to delete replacement environment ${h.environment_id}: ${d(r)}`, {
            level: "warn"
          })
        ),
      { outcome: "fatal", reason: "replaced" }
    );
  }
  Thr(n, R, !0);
  let k = [...y.keys()];
  if (
    (a("tengu_bridge_env_reregister", {
      attempt: u,
      outcome: b("reregistered"),
      active_sessions: k.length,
      trigger: c(v)
    }),
    Y("info", "bridge_env_reregistered", { attempt: u, active_sessions: k.length, trigger: v }),
    v === "proactive")
  )
    return (
      t(`[bridge:poll] Environment ${p} re-registered in place; secret renewed`, { level: "info" }),
      {
        outcome: "reregistered",
        environmentSecret: h.environment_secret,
        ...(h.environment_secret_expires_in !== void 0 && {
          environmentSecretExpiresIn: h.environment_secret_expires_in
        }),
        pendingRequeues: []
      }
    );
  t(`[bridge:poll] Environment ${p} re-registered in place; re-queuing ${k.length} session(s)`, {
    level: "info"
  });
  let S = [];
  for (let r of k) {
    if (T.aborted) break;
    if (!y.has(r)) continue;
    if ((await xOn(e, p, r, T)) !== "done") S.push(r);
  }
  return {
    outcome: "reregistered",
    environmentSecret: h.environment_secret,
    ...(h.environment_secret_expires_in !== void 0 && {
      environmentSecretExpiresIn: h.environment_secret_expires_in
    }),
    pendingRequeues: S
  };
}
async function pms({
  api: e,
  config: n,
  environmentId: p,
  activeSessions: y,
  pacing: u,
  signal: v
}) {
  let T;
  try {
    let R = n.getToolHostAdvert?.();
    if (R === void 0 || R.kind === "unknown") return;
    if (C(R, n.registeredToolHostAdvert)) {
      u.failures = 0;
      return;
    }
    let k = u.notBefore - Date.now();
    if (k > 0 && k <= I) return;
    T = await khr({
      api: e,
      config: n,
      environmentId: p,
      activeSessions: y,
      attempt: u.failures + 1,
      trigger: "tool_host_advert_changed",
      signal: v
    });
  } catch (R) {
    if (!v.aborted) l(R);
  }
  let h = T?.outcome === "reregistered" ? T : void 0;
  return (
    (u.failures = h ? 0 : u.failures + 1),
    (u.notBefore = Date.now() + Math.min(H * 2 ** u.failures, I)),
    h
  );
}
function Thr(e, n, p) {
  if (n === void 0 || (n.kind === "unknown" && p)) return;
  let y = e.registeredToolHostAdvert,
    u = n.kind === "advertise" ? { kind: "advertise", advert: n.advert } : { kind: "withdraw" };
  if (((e.registeredToolHostAdvert = u), !C(u, y ?? { kind: "withdraw" })))
    a("tengu_bridge_tool_host_advert", { advertised: u.kind === "advertise" });
}
async function xOn(e, n, p, y) {
  try {
    return (await e.reconnectSession(n, p, y), "done");
  } catch (u) {
    let v = Soo(u);
    if (
      (t(
        `[bridge:poll] reconnectSession(${p}) after re-registration ${v ? "rejected" : "failed transiently"}: ${d(u)}`,
        { level: "warn" }
      ),
      v)
    )
      return "done";
    return y.aborted ? "aborted" : "retry";
  }
}
function C(e, n) {
  if (n === void 0 || n === "unconfirmed") return !1;
  return e.kind === "advertise" && n.kind === "advertise"
    ? wn(e.advert, n.advert)
    : e.kind === n.kind;
}
function boo(e) {
  return e && typeof e === "object" && "retryAfterMs" in e && typeof e.retryAfterMs === "number"
    ? e.retryAfterMs
    : void 0;
}
function Soo(e) {
  return N(e) !== void 0;
}
function N(e) {
  if (e instanceof WR) return e.status;
  if (
    e &&
    typeof e === "object" &&
    "status" in e &&
    typeof e.status === "number" &&
    e.status >= 400 &&
    e.status < 500 &&
    e.status !== 408 &&
    e.status !== 429
  )
    return e.status;
  return;
}
export { WR, yoo, OPt, _oo, COn, dms, Ehr, cms, ums, fms, ROn, khr, pms, Thr, xOn, boo, Soo };

//# sourceMappingURL=chunk-3k5jtphb.js.map
