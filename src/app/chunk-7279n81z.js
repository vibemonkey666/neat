import {
  fileURLToPath as __filePath_8f8d241be9f553d0,
  URL as __filePath_8f8d241be9f553d0_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { U } from "./chunk-wrtp8qz8.js";
import { R, d, E, G } from "./chunk-fs43t96t.js";
import { Jl, X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, te } from "./chunk-4kxznmzw.js";
import { hdr } from "./chunk-45h8cn90.js";
import { I, Ja } from "./chunk-a16y5hcz.js";
import { NU } from "./chunk-yw4wqxm9.js";
import { p } from "./chunk-qmkm2x59.js";
import { Nf, FSt, USt, BSt } from "./chunk-bg15swpd.js";
import { g, f } from "./chunk-brszmkb3.js";
import { O } from "./chunk-19xvg81r.js";
import { Kco } from "./chunk-k5nwr7mq.js";
import { Qd } from "./chunk-nwy76t58.js";
import { _d } from "./chunk-8w2npe9a.js";
import { C8r, ct } from "./chunk-qmmh8tq2.js";
import { Ly } from "./chunk-bh50mq9d.js";
import { Al } from "./chunk-a3zzd6aj.js";
import { u_e } from "./chunk-52qzr232.js";
import { cC } from "./chunk-928ws1pg.js";
import { o, v, u, $e } from "./chunk-0bqrj5ah.js";
import { ws } from "./chunk-v4kbwz0z.js";
import { oW, dlr, L8r, gSe, eee } from "./chunk-4zb0cwjd.js";
import { Ds } from "./chunk-tdv74tcm.js";
var re = ["allow", "environment", "soft_deny"],
  fe = {
    allow: "CCR_AUTO_MODE_ALLOW",
    environment: "CCR_AUTO_MODE_ENVIRONMENT",
    soft_deny: "CCR_AUTO_MODE_SOFT_DENY"
  };
function bn(e) {
  return e.trim().length > 0 && !FSt(e) && !USt(e) && BSt(e) === null;
}
function wn(e) {
  if (!Array.isArray(e) || !e.every((h) => h === null || typeof h === "string")) return null;
  let n = new Set(e);
  n.delete(Nf);
  let r = [...n].filter((h) => h !== null && bn(h));
  return { entries: r, refused: n.size - r.length };
}
function De(e) {
  let n = {},
    r = {};
  for (let a of re) {
    let t = e?.[a];
    if (t === void 0) continue;
    let s = wn(t);
    if (s === null) {
      r[a] = "unreadable";
      continue;
    }
    if (s.refused > 0) r[a] = s.refused;
    if (s.entries.length > 0) n[a] = s.entries;
  }
  let h =
    (r.soft_deny !== void 0 || r.environment !== void 0) &&
    (n.allow !== void 0 || n.environment !== void 0);
  if (h) (delete n.allow, delete n.environment);
  return { rules: n, refused: r, grantsWithheld: h };
}
function Ue(e) {
  let n = {};
  for (let r of re) {
    let h = e[r];
    if (h !== void 0) n[r] = [Nf, ...h];
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
var Sn = { all: [], "no-allow": ["allow"], none: re },
  He = 2097152,
  IAn = "CCR_AUTO_MODE_APPLY";
function yJr(e) {
  let n = e.environment_variables ?? {};
  return Object.hasOwn(n, IAn) && n[IAn] === "1";
}
function Kss(e) {
  if (!yJr(e))
    return {
      allow: { state: "absent" },
      environment: { state: "absent" },
      soft_deny: { state: "absent" }
    };
  let n = e.environment_variables ?? {};
  return {
    allow: Se(n, fe.allow),
    environment: Se(n, fe.environment),
    soft_deny: Se(n, fe.soft_deny)
  };
}
var jit = "no-allow";
function Vss(e, n) {
  let r = { ...e },
    h = [];
  for (let a of Sn[n]) {
    let t = e[a],
      s = t.state === "decoded" && Array.isArray(t.value) && t.value.length === 0;
    if (t.state !== "absent" && !s) h.push(a);
    r[a] = { state: "absent" };
  }
  return { carried: r, withheld: h };
}
var yn =
  "nothing on this runner needs changing; if an admin of your organization wrote the entry, a line break, some emoji or a blank rule can cause this";
function qss(e) {
  let n = {};
  for (let i of re) {
    let c = e[i];
    if (c.state !== "absent") n[i] = c.state === "decoded" ? c.value : null;
  }
  let { rules: r, refused: h, grantsWithheld: a } = De(n),
    t = [],
    s = { refused_entries: 0, unreadable_lists: 0 };
  for (let i of re) {
    let c = e[i],
      l = h[i];
    if (c.state === "absent" || l === void 0) continue;
    if (l === "unreadable") s.unreadable_lists++;
    else s.refused_entries += l;
    t.push(
      l === "unreadable"
        ? `ignoring the server's autoMode.${i} list for this session: its ${c.carrier} value ${c.state === "decoded" ? "is not an array of strings" : `is not valid JSON text, or is longer than ${He} characters`} (a server-side fault: nothing on this runner needs changing)`
        : `ignoring ${l} of the entries in the server's autoMode.${i} list (${c.carrier}) for this session: null, blank, or containing a control character, an invisible character or markup reserved for the auto mode classifier's prompt; ${a && i !== "soft_deny" ? "any other entries in the list are not applied either (see below)" : "any other entries in the list still apply"} (${yn})`
    );
  }
  if (a) {
    let i = ["allow", "environment"]
      .filter((c) => e[c].state !== "absent")
      .map((c) => `autoMode.${c}`)
      .join(" or ");
    t.push(
      `not applying any ${i} entries from the server for this session: part or all of its autoMode.environment or autoMode.soft_deny list was ignored (see above), and without it the ${i} entries could allow more than the server meant. Auto mode still works but may block more actions than usual (nothing on this runner needs changing)`
    );
  }
  return { autoMode: Ue(r), statusLines: t, grantsWithheld: a, refusedCounts: s };
}
function Se(e, n) {
  let r = Object.hasOwn(e, n) ? e[n] : void 0;
  if (r === void 0 || r === "") return { state: "absent" };
  if (typeof r !== "string" || r.length > He) return { state: "undecodable", carrier: n };
  try {
    return { state: "decoded", carrier: n, value: te(r) };
  } catch {
    return { state: "undecodable", carrier: n };
  }
}
class Ee extends Error {
  constructor() {
    super("IssueSessionToken: response holds a tools_host that this runner cannot read");
    this.name = "UnreadableToolsHostError";
  }
}
var En = p(() =>
    u({
      tool_server_hosting: $e([v(), o().regex(/^\d+$/).transform(Number)]).pipe(v().int().min(1)),
      api_base_url: o().min(1),
      cwd: o()
        .nullish()
        .transform((e) => e || void 0)
    })
  ),
  WYe = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.310",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-23T17:43:32Z",
    GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
    HOOKS_WORKER_URL: __filePath_8f8d241be9f553d0(
      new __filePath_8f8d241be9f553d0_URL(
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        import.meta.url
      )
    ),
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION.replace(/^v/, "").split(/[-+]/)[0],
  kn = {
    all: "SERVER_AUTO_MODE_LISTS_ALL",
    "no-allow": "SERVER_AUTO_MODE_LISTS_NO_ALLOW",
    none: "SERVER_AUTO_MODE_LISTS_NONE"
  },
  vn = /^[a-zA-Z0-9_-]+$/,
  wcr = 1e4,
  OAn = 15000,
  Ge = 256,
  Rn = 65536;
function Fe(e) {
  return typeof e === "string" && e.length <= Ge && vn.test(e);
}
function CX(e, n) {
  if (!Fe(e)) throw Error(`Invalid ${n}: contains unsafe characters or exceeds ${Ge} characters`);
  return e;
}
function ye(e) {
  return {
    "User-Agent": Ds(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": WYe
  };
}
function se(e) {
  return {
    "User-Agent": Ds(),
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01",
    "x-self-hosted-runner-version": WYe
  };
}
function ie(e) {
  return {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": "2023-06-01"
  };
}
function xe(e) {
  return ge(e, "type");
}
function ge(e, n) {
  if (
    e !== null &&
    typeof e === "object" &&
    "error" in e &&
    e.error !== null &&
    typeof e.error === "object"
  ) {
    let r = Reflect.get(e.error, n);
    return typeof r === "string" ? r : void 0;
  }
  return;
}
function Tn(e) {
  let n = ge(e, "reason");
  return u_e(n) ? n : void 0;
}
function Pn(e) {
  return ge(e, "resource");
}
var An = "self_hosted_runners_disabled_by_org";
function z(e, n, r) {
  if (e >= 200 && e < 300) return;
  let h = NU(n),
    a = xe(n),
    t = { errorType: u_e(a) ? a : void 0, errorReason: Tn(n), serverMessage: h };
  switch (e) {
    case 401:
      throw Object.assign(
        Error(`${r}: Authentication failed (401)${h ? `: ${h}` : ""}. Check your credentials.`),
        { isAuthFailure: !0, httpStatus: e, ...t }
      );
    case 403: {
      let s = Pn(n) === An;
      throw Object.assign(
        Error(
          `${r}: Access denied (403)${h ? `: ${h}` : ""}. ${s ? "The organization is not enabled for self-hosted environments." : "Token may be revoked."}`
        ),
        { isAuthFailure: !0, ...(s && { isSelfHostedDisabledByOrg: !0 }), httpStatus: e }
      );
    }
    case 404:
      throw Object.assign(Error(h ?? `${r}: Not found (404). The resource may not exist.`), {
        isNotFound: !0,
        httpStatus: e,
        errorType: xe(n),
        resourceType: ge(n, "resource_type")
      });
    case 409:
      if (t.errorType === "session_not_active")
        throw Object.assign(
          Error("Session not active (409): the session was archived or deleted."),
          { isEpochMismatch: !0, isSessionNotActive: !0, httpStatus: e, ...t }
        );
      throw Object.assign(
        Error(
          `${r}: Epoch conflict (409)${h ? `: ${h}` : ""}. Another runner has taken over this session.`
        ),
        { isEpochMismatch: !0, httpStatus: e, ...t }
      );
    case 429:
      throw Object.assign(Error(`${r}: Rate limited (429). Polling too frequently.`), {
        httpStatus: e
      });
    default:
      throw Object.assign(Error(`${r}: Failed with status ${e}${h ? `: ${h}` : ""}`), {
        httpStatus: e,
        ...t
      });
  }
}
function Sie(e) {
  if (e !== null && typeof e === "object") {
    let n = e;
    if (typeof n.httpStatus === "number") return n.httpStatus;
    if (typeof n.response?.status === "number") return n.response.status;
  }
  return;
}
function Yss(e) {
  let n = e !== null && typeof e === "object" ? e : {};
  return {
    errorType: "errorType" in n && typeof n.errorType === "string" ? n.errorType : void 0,
    errorReason: "errorReason" in n && typeof n.errorReason === "string" ? n.errorReason : void 0,
    serverMessage:
      "serverMessage" in n && typeof n.serverMessage === "string" ? n.serverMessage : void 0
  };
}
function upe(e) {
  if (e !== null && typeof e === "object") {
    let r = e;
    if (r.name === "AbortError" || r.code === "ERR_CANCELED") return !1;
  }
  if (e instanceof Ee) return !1;
  let n = Sie(e);
  return n === void 0 || n === 429 || n >= 500;
}
var vcr = ["transport", "timeout", "5xx", "429", "4xx"];
function VCt(e) {
  if (e !== null && typeof e === "object") {
    let r = e.code;
    if (r === "ECONNABORTED" || r === "ETIMEDOUT") return "timeout";
  }
  let n = Sie(e);
  if (n === void 0) return "transport";
  if (n >= 500) return "5xx";
  if (n === 429) return "429";
  return "4xx";
}
function MAn() {
  return { transport: 0, timeout: 0, "5xx": 0, "429": 0, "4xx": 0 };
}
function DAn(e) {
  function n(t) {
    e.onDebug?.(t);
  }
  let r = 0,
    h = 30,
    a = { "x-self-hosted-runner-capabilities": e.capabilities.join(",") || null };
  return {
    async registerRunner(t = {}) {
      let {
        clientLabel: s,
        lockToAccountId: i,
        useAnthropicGitProxy: c,
        serverAutoModeLists: l
      } = t;
      n("[runner:api] POST /v1/code/runners/self-hosted/runners/register");
      let b = {
        runner_version: WYe,
        capabilities: e.capabilities,
        use_anthropic_git_proxy: c ?? !1,
        server_auto_mode_lists: kn[l ?? jit]
      };
      if (s) b.client_label = s;
      if (i) b.lock_to_account_id = i;
      let w = await Ht.post(`${e.baseUrl}/v1/code/runners/self-hosted/runners/register`, b, {
        headers: ye(e.poolSecret),
        timeout: 15000,
        validateStatus: (S) => S < 500
      });
      return (
        z(w.status, w.data, "RegisterRunner"),
        CX(w.data.runner_id, "runner_id"),
        n(`[runner:api] RegisterRunner -> ${w.status} runner_id=${w.data.runner_id}`),
        w.data
      );
    },
    async pollSpawnHints(t, s) {
      let i = await Ht.post(`${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/poll`, t, {
        headers: ye(e.poolSecret),
        timeout: 30000,
        signal: s,
        validateStatus: (S) => S < 500
      });
      z(i.status, i.data, "PollSpawnHints");
      let c = typeof i.headers?.date === "string" ? i.headers.date : null,
        l = (S) => ({
          ...S,
          session_uuid: S.session_uuid ?? "",
          attempt: S.attempt ?? 0,
          work_order_jwt: S.work_order_jwt ?? "",
          sources: S.sources ?? []
        }),
        b = i.data.slots,
        w = {
          hints: (i.data.hints ?? []).map(l),
          warm_hints: (i.data.warm_hints ?? []).map(l),
          pending_count: i.data.pending_count ?? 0,
          backing_off_count: i.data.backing_off_count ?? 0,
          circuit_broken_count: i.data.circuit_broken_count ?? 0,
          pool_pending_session_count: i.data.pool_pending_session_count ?? 0,
          pool_active_session_count: i.data.pool_active_session_count ?? 0,
          ...(typeof b === "number" && Number.isInteger(b) && b >= 1 && { slots: b }),
          server_date: c
        };
      return (
        n(
          `[runner:api] PollSpawnHints -> ${i.status} hints=${w.hints.length} warm=${w.warm_hints.length} pending=${w.pending_count} backing_off=${w.backing_off_count} circuit_broken=${w.circuit_broken_count} slots=${w.slots ?? "-"}`
        ),
        w
      );
    },
    async nackSpawnHint(t, s) {
      n(
        `[runner:api] POST /v1/code/runners/self-hosted/spawn-hints/nack session=${t.session_uuid} attempt=${t.attempt} retryable=${t.retryable}${t.failure_kind ? ` cause=${t.failure_kind}` : ""}`
      );
      let i = t.error.length > 512 ? t.error.slice(0, 512) : t.error,
        c = await Ht.post(
          `${e.baseUrl}/v1/code/runners/self-hosted/spawn-hints/nack`,
          { ...t, error: i },
          { headers: ye(e.poolSecret), timeout: OAn, signal: s, validateStatus: (l) => l < 500 }
        );
      (z(c.status, c.data, "NackSpawnHint"), n(`[runner:api] NackSpawnHint -> ${c.status}`));
    },
    async pollWork(t, s, i, c, l, b) {
      CX(s, "runnerId");
      let w = r;
      r = 0;
      let S = await Ht.post(
        `${e.baseUrl}/v1/code/runners/self-hosted/runners/${s}/poll`,
        {
          available_capacity: i,
          ...(l !== void 0 && { wake_source: l }),
          ...(b !== void 0 && { warmup_complete: b })
        },
        { headers: se(t), timeout: wcr, signal: c, validateStatus: (B) => B < 500 }
      );
      z(S.status, S.data, "PollWork");
      let A = S.data;
      if (typeof A !== "object" || A === null || Array.isArray(A))
        throw Error(
          "PollWork: response body is not a JSON object (an intercepting proxy may have answered) \u2014 rejecting the malformed poll response"
        );
      let L = S.data.assignment_ids;
      if (L !== void 0 && L !== null && !Array.isArray(L))
        throw Error(
          "PollWork: response assignment_ids is not an array \u2014 rejecting the malformed poll response"
        );
      if (Array.isArray(L) && !L.every(Fe))
        throw Error(
          "PollWork: response assignment_ids contains a malformed session id \u2014 rejecting the malformed poll response"
        );
      let D = S.data.assignment_ids ?? [];
      if (D.length === 0) {
        if (((r = w + 1), r === 1 || r % h === 0))
          n(`[runner:api] PollWork -> ${S.status} (no work, ${r} consecutive empty polls)`);
      } else n(`[runner:api] PollWork -> ${S.status} assignments=${D.length}`);
      let k = S.data.lease_expires_at,
        C = S.data.suggested_poll_interval;
      return {
        assignment_ids: D,
        lease_expires_at: typeof k === "string" ? k : void 0,
        session_assignments: Array.isArray(S.data.session_assignments)
          ? S.data.session_assignments
          : [],
        suggested_poll_interval: typeof C === "string" ? C : void 0
      };
    },
    async issueSessionToken(t, s, i) {
      CX(s, "sessionId");
      let c = `/v1/code/runners/self-hosted/sessions/${encodeURIComponent(s)}/token`;
      n(`[runner:api] POST ${c}`);
      let l = await Ht.post(
        `${e.baseUrl}${c}`,
        {},
        { headers: se(t), timeout: 15000, signal: i, validateStatus: (A) => A < 500 }
      );
      if ((z(l.status, l.data, "IssueSessionToken"), !l.data.session_token))
        throw Error("IssueSessionToken: response missing session_token");
      n(`[runner:api] IssueSessionToken -> ${l.status}`);
      let { session_token: b, tools_host: w } = l.data;
      if (w === void 0 || w === null) return { session_token: b };
      let S = En().safeParse(w);
      if (!S.success) throw new Ee();
      return { session_token: b, tools_host: S.data };
    },
    async reportSessionFailure(t, s, i, c, l) {
      (CX(s, "sessionId"),
        n(
          `[runner:api] POST /v1/code/runners/self-hosted/sessions/${s}/report-failure reason=${i}${c ? ` kind=${c}` : ""}${l ? ` cause=${l}` : ""}`
        ));
      let b = await Ht.post(
        `${e.baseUrl}/v1/code/runners/self-hosted/sessions/${s}/report-failure`,
        { reason: i, ...(c && { setup_failure_kind: c }), ...(l && { failure_kind: l }) },
        { headers: se(t), timeout: 15000, validateStatus: (w) => w < 500 }
      );
      return (
        z(b.status, b.data, "ReportSessionFailure"),
        n(
          `[runner:api] ReportSessionFailure -> ${b.status} excluded_count=${b.data.excluded_count} stuck=${b.data.stuck}`
        ),
        b.data
      );
    },
    async releaseSession(t, s) {
      (CX(s, "sessionId"),
        n(`[runner:api] POST /v1/code/runners/self-hosted/sessions/${s}/release`));
      let i = await Ht.post(
        `${e.baseUrl}/v1/code/runners/self-hosted/sessions/${s}/release`,
        {},
        { headers: se(t), timeout: 15000, validateStatus: (l) => l < 500 }
      );
      z(i.status, i.data, "ReleaseSession");
      let c = i.data.released ?? !0;
      return (n(`[runner:api] ReleaseSession -> ${i.status} released=${c}`), { released: c });
    },
    async deregisterRunner(t, s = {}) {
      n(
        `[runner:api] POST /v1/code/runners/self-hosted/deregister reason=${s.reason ?? ""}` +
          (s.drain_hold
            ? ` drain_hold=${s.drain_hold.outcome} held_ms=${s.drain_hold.held_ms} busy_at_release=${s.drain_hold.busy_session_ids_at_release.length}`
            : "")
      );
      let i = await Ht.post(
        `${e.baseUrl}/v1/code/runners/self-hosted/deregister`,
        {
          ...(s.reason && { reason: s.reason }),
          ...(s.drain_hold && { drain_hold: s.drain_hold })
        },
        { headers: se(t), timeout: 1e4, validateStatus: (c) => c < 500 }
      );
      (z(i.status, i.data, "DeregisterRunner"), n(`[runner:api] DeregisterRunner -> ${i.status}`));
    },
    async refreshToken(t) {
      n("[runner:api] POST /v1/code/auth/refresh");
      let s = await Ht.post(
        `${e.baseUrl}/v1/code/auth/refresh`,
        {},
        { headers: se(t), timeout: 15000, validateStatus: (i) => i < 500 }
      );
      if ((z(s.status, s.data, "RefreshToken"), !s.data.token))
        throw Error("RefreshToken: response missing token");
      return (n(`[runner:api] RefreshToken -> ${s.status}`), s.data);
    },
    async getSessionRemoteConfig(t, s, i, c) {
      (CX(t, "sessionId"), n(`[runner:api] GET /v1/code/sessions/${t}/remote`));
      let l = await Ht.get(`${e.baseUrl}/v1/code/sessions/${t}/remote`, {
        headers: { ...c?.headers, ...ie(s), "User-Agent": Ds(), ...a },
        timeout: c?.timeoutMs ?? 15000,
        signal: i,
        validateStatus: (w) => w < 500,
        ...(c?.beforeParsing && {
          maxContentLength: c.beforeParsing.mostBytes,
          responseType: "text",
          transformResponse: (w, S, A) => {
            if (A !== void 0 && A >= 200 && A < 300) c.beforeParsing?.admit(w);
            else if (w.length > Rn) return w;
            try {
              return te(w);
            } catch {
              return w;
            }
          }
        })
      });
      z(l.status, l.data, "GetSessionRemoteConfig");
      let b = l.data;
      return {
        ...b,
        sources: b.sources ?? [],
        push_targets: b.push_targets ?? [],
        claude_code_args: b.claude_code_args ?? {},
        environment_variables: b.environment_variables ?? {}
      };
    },
    async registerWorker(t, s, i, c) {
      (CX(s, "sessionId"), n(`[runner:api] POST ${t}/v1/code/sessions/${s}/worker/register`));
      let l = await Ht.post(
        `${t}/v1/code/sessions/${s}/worker/register`,
        { session_id: s },
        { headers: ie(i), timeout: 30000, signal: c, validateStatus: (w) => w < 500 }
      );
      z(l.status, l.data, "RegisterWorker");
      let b = parseInt(String(l.data.worker_epoch), 10);
      if (isNaN(b))
        throw Error(`RegisterWorker: invalid worker_epoch in response: ${l.data.worker_epoch}`);
      return (n(`[runner:api] RegisterWorker -> ${l.status} worker_epoch=${b}`), b);
    },
    async postWorkerEvents(t, s, i, c, l, b) {
      (CX(s, "sessionId"),
        n(
          `[runner:api] POST ${t}/v1/code/sessions/${s}/worker/events (${l.length} ${I(l.length, "event")})`
        ));
      let w = await Ht.post(
        `${t}/v1/code/sessions/${s}/worker/events`,
        { worker_epoch: c, events: l.map((S) => ({ payload: S })) },
        { headers: ie(i), timeout: 15000, signal: b, validateStatus: (S) => S < 500 }
      );
      (z(w.status, w.data, "PostWorkerEvents"), n(`[runner:api] PostWorkerEvents -> ${w.status}`));
    },
    async updateSessionWorkerState(t, s, i, c, l, b) {
      (CX(s, "sessionId"), n(`[runner:api] PUT ${t}/v1/code/sessions/${s}/worker`));
      let w = await Ht.put(
        `${t}/v1/code/sessions/${s}/worker`,
        {
          worker_epoch: c,
          ...(typeof l === "string" && { worker_status: l }),
          ...(typeof l === "object" && { connection_status: l.connectionStatus })
        },
        { headers: ie(i), timeout: 15000, signal: b, validateStatus: (S) => S < 500 }
      );
      (z(w.status, w.data, "UpdateSessionWorkerState"),
        n(`[runner:api] UpdateSessionWorkerState -> ${w.status}`));
    },
    async heartbeat(t, s, i, c, l) {
      CX(s, "sessionId");
      let b = await Ht.post(
        `${t}/v1/code/sessions/${s}/worker/heartbeat`,
        { worker_epoch: c },
        { headers: ie(i), timeout: 1e4, signal: l, validateStatus: (w) => w < 500 }
      );
      z(b.status, b.data, "Heartbeat");
    },
    async forwardDiagnostics(t, s, i, c, l) {
      if ((CX(s, "sessionId"), l.length === 0)) return;
      n(`[runner:api] POST ${t}/v1/code/sessions/${s}/worker/diagnostics (${l.length} lines)`);
      let b = await Ht.post(
        `${t}/v1/code/sessions/${s}/worker/diagnostics`,
        { worker_epoch: c, lines: l },
        { headers: ie(i), timeout: 30000, validateStatus: (w) => w < 500 }
      );
      (z(b.status, b.data, "ForwardDiagnostics"),
        n(`[runner:api] ForwardDiagnostics -> ${b.status}`));
    }
  };
}
import { createServer as $n } from "http";
var Vxe = "unknown",
  _Jr = /^[A-Za-z0-9_.-]{1,64}$/;
function Wit(e) {
  if (!e || e === "unknown" || !_Jr.test(e) || e.startsWith("-") || /^\.{1,2}$/.test(e)) return;
  return e;
}
function f5t(e) {
  return Array.from(e.slice(0, 128))
    .map((n) => (/[A-Za-z0-9_.-]/.test(n) ? n : `\\u{${n.codePointAt(0).toString(16)}}`))
    .join("");
}
var ce = [1, 2.5, 5, 10, 20, 40, 80, 160, 320, 640, 1280];
function Xss() {
  return { buckets: ce.map(() => 0), count: 0, sum: 0 };
}
function Jss(e, n) {
  ((e.sum += n), (e.count += 1));
  for (let r = 0; r < ce.length; r++) if (n <= ce[r]) e.buckets[r]++;
}
function wie(e) {
  return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}
function We(e) {
  return e.replace(/[^a-zA-Z0-9_]/g, "_").replace(/^[0-9]/, "_$&");
}
var Ke = "claude_code_self_hosted_runner";
function On(e, n = Date.now()) {
  let r = e.lastPollAt > 0 ? (n - e.lastPollAt) / 1000 : 0,
    h = `runner_id="${wie(e.runnerId)}",version="${wie(e.version)}",client_label="${wie(e.clientLabel)}"`,
    a = Ke,
    t = "";
  ((t += `# HELP ${a}_info Self-hosted runner identity (info-style gauge; value is always 1).
`),
    (t += `# TYPE ${a}_info gauge
`),
    (t += `${a}_info{${h}} 1
`),
    (t += `# HELP ${a}_capacity Max concurrent sessions this runner accepts (--capacity).
`),
    (t += `# TYPE ${a}_capacity gauge
`),
    (t += `${a}_capacity ${e.capacity}
`),
    (t += `# HELP ${a}_active_sessions Sessions currently being handled by this runner.
`),
    (t += `# TYPE ${a}_active_sessions gauge
`),
    (t += `${a}_active_sessions ${e.activeSessions}
`));
  for (let [i, c] of [
    ["sessions_started_total", e.sessionsStarted],
    ["sessions_completed_total", e.sessionsCompleted],
    ["sessions_failed_total", e.sessionsFailed],
    ["sessions_interrupted_total", e.sessionsInterrupted]
  ]) {
    ((t += `# HELP ${a}_${i} ${i === "sessions_started_total" ? "Session child processes spawned over the runner's lifetime. One increment per child spawn; a session that is re-spawned (runner restart, re-assignment) counts again. NOT comparable to the orchestrator's spawn_hooks_total (which counts orchestrator spawn-runner hook runs, including warm hints)." : i === "sessions_completed_total" ? "Session child processes that ended cleanly over the runner's lifetime: child exited 0, the server closed the session (archive/delete), or the runner released the slot as a clean handoff (idle release, startup timeout, retire / max-session-age release, server deassign). Drain/SIGTERM and the max-lifetime hard-cap kill are NOT counted (those increment sessions_interrupted_total instead)." : i === "sessions_failed_total" ? "Session child processes that exited with a non-zero code over the runner's lifetime (crash, OOM, spawn error). Does NOT include idle-release or a server deassign the poll loop observed first (those count as completed); a deassign the child notices first via its epoch-409 exit still lands here." : "Session child processes that were terminated for a non-session-outcome reason over its lifetime (drain/SIGTERM, max-lifetime hard-cap kill, released=false backstop, or an external signal). Watchdog and external-signal kills are additionally reported to the server as session failures. Closes the accounting: started - (completed + failed + interrupted) equals the number of session children currently running."}
`),
      (t += `# TYPE ${a}_${i} counter
`));
    for (let [b, w] of c)
      t += `${a}_${i}{client_platform="${wie(b)}"} ${w}
`;
  }
  if (
    ((t += `# HELP ${a}_locked_account Present (value 1) once the runner is locked to an account; absent while fungible.
`),
    (t += `# TYPE ${a}_locked_account gauge
`),
    e.lockedAccountEmail !== null)
  )
    t += `${a}_locked_account{email="${wie(e.lockedAccountEmail)}"} 1
`;
  ((t += `# HELP ${a}_last_poll_age_seconds Seconds since the last successful pollWork return.
`),
    (t += `# TYPE ${a}_last_poll_age_seconds gauge
`),
    (t += `${a}_last_poll_age_seconds ${r}
`),
    (t += `# HELP ${a}_poll_errors_total PollWork request failures by error kind (transport=no HTTP response; timeout=client deadline; 5xx/429/4xx by status). All five series present from process start so rate() works and absent() means process-down.
`),
    (t += `# TYPE ${a}_poll_errors_total counter
`));
  for (let i of vcr)
    t += `${a}_poll_errors_total{error_kind="${i}"} ${e.pollErrors[i]}
`;
  ((t += `# HELP ${a}_initializing_sessions Sessions currently in the init phase (handleSession entry to child system/init).
`),
    (t += `# TYPE ${a}_initializing_sessions gauge
`),
    (t += `${a}_initializing_sessions ${e.initializingSessions}
`),
    (t += `# HELP ${a}_session_init_errors_total Sessions that exited as failed before the child reached init (checkout hook / git prep / token issue / pre-init child crash).
`),
    (t += `# TYPE ${a}_session_init_errors_total counter
`),
    (t += `${a}_session_init_errors_total ${e.sessionInitErrors}
`),
    (t += `# HELP ${a}_session_init_duration_seconds Wall-clock seconds from session assignment to child init (successful inits only).
`),
    (t += `# TYPE ${a}_session_init_duration_seconds histogram
`));
  let s = e.sessionInitDurations;
  for (let i = 0; i < ce.length; i++)
    t += `${a}_session_init_duration_seconds_bucket{le="${ce[i]}"} ${s.buckets[i]}
`;
  ((t += `${a}_session_init_duration_seconds_bucket{le="+Inf"} ${s.count}
`),
    (t += `${a}_session_init_duration_seconds_sum ${s.sum}
`),
    (t += `${a}_session_init_duration_seconds_count ${s.count}
`),
    (t += `# HELP ${a}_session_start_hook_errors_total SessionStart hooks that reported an error outcome (nonzero exit, validation/spawn failure, or HTTP/MCP error; one per failing hook execution).
`),
    (t += `# TYPE ${a}_session_start_hook_errors_total counter
`),
    (t += `${a}_session_start_hook_errors_total ${e.sessionStartHookErrors}
`),
    (t += `# HELP ${a}_session_idle_seconds Seconds since the session went idle (turn-end or awaiting-action); 0 while a turn is running, background work is pending, or the session is initializing. One series per active session; disappears at session end.
`),
    (t += `# TYPE ${a}_session_idle_seconds gauge
`));
  for (let [i, c] of e.sessionIdle) {
    let l = c === null ? 0 : ((n - c) / 1000).toFixed(3),
      b = e.sessionClientPlatform.get(i) ?? Vxe;
    t += `${a}_session_idle_seconds{session_id="${wie(i)}",client_platform="${wie(b)}"} ${l}
`;
  }
  for (let [i, c] of e.childMetrics ?? []) {
    let l = c.help.replace(/\\/g, "\\\\").replace(/\n/g, "\\n");
    ((t += `# HELP ${i} ${l}
`),
      (t += `# TYPE ${i} ${c.type}
`));
    for (let [b, w] of c.points)
      t += `${i}${b} ${w}
`;
  }
  return t;
}
function Cn(e, n) {
  let r = (e.childMetrics ??= new Map()),
    h = n;
  for (let a of h.resourceMetrics ?? []) {
    let t = Be(a.resource?.attributes, "session.id"),
      s = Be(a.resource?.attributes, "client.platform");
    for (let i of a.scopeMetrics ?? [])
      for (let c of i.metrics ?? []) {
        if (typeof c.name !== "string" || c.name === "") continue;
        let l = We(c.name),
          b,
          w,
          S;
        if (c.sum)
          ((b = c.sum.isMonotonic ? "counter" : "gauge"),
            (w = c.sum.isMonotonic && !l.endsWith("_total") ? `${l}_total` : l),
            (S = c.sum.dataPoints));
        else if (c.gauge) ((b = "gauge"), (w = l), (S = c.gauge.dataPoints));
        else continue;
        if (w.startsWith(Ke)) continue;
        let A = r.get(w) ?? { help: c.description ?? "", type: b, points: new Map() };
        for (let L of S ?? []) {
          let D = [],
            k = new Set();
          if (t !== void 0) (D.push(["session_id", t]), k.add("session_id"));
          if (s !== void 0) (D.push(["client_platform", s]), k.add("client_platform"));
          for (let j of L.attributes ?? []) {
            if (typeof j.key !== "string") continue;
            let J = je(j.value);
            if (J === void 0) continue;
            let V = We(j.key);
            if (V === "" || k.has(V)) continue;
            (k.add(V), D.push([V, J]));
          }
          let C = D.length > 0 ? `{${D.map(([j, J]) => `${j}="${wie(J)}"`).join(",")}}` : "",
            B =
              typeof L.asDouble === "number"
                ? L.asDouble
                : L.asInt !== void 0
                  ? Number(L.asInt)
                  : void 0;
          if (B === void 0 || !Number.isFinite(B)) continue;
          A.points.set(C, B);
        }
        r.set(w, A);
      }
  }
}
function Qss(e, n) {
  let r = e.childMetrics;
  if (r === void 0) return;
  let h = `session_id="${wie(n)}"`;
  for (let [a, t] of r) {
    for (let s of t.points.keys()) if (s.includes(h)) t.points.delete(s);
    if (t.points.size === 0) r.delete(a);
  }
}
function Be(e, n) {
  for (let r of e ?? []) if (r.key === n) return je(r.value);
  return;
}
function je(e) {
  if (e === void 0) return;
  if (typeof e.stringValue === "string") return e.stringValue;
  if (e.intValue !== void 0) return String(e.intValue);
  if (typeof e.doubleValue === "number") return String(e.doubleValue);
  if (typeof e.boolValue === "boolean") return String(e.boolValue);
  return;
}
function Zss(e, n, r, h, a) {
  let t = $n((i, c) => {
    if (i.method === "POST" && i.url === "/v1/metrics") {
      if (!Ln(i)) {
        c.writeHead(403).end();
        return;
      }
      let A = [],
        L = 0,
        D = !1;
      (i.on("data", (k) => {
        if (((L += k.length), L > 1048576)) {
          ((D = !0), c.writeHead(413).end(), i.destroy());
          return;
        }
        A.push(k);
      }),
        i.on("end", () => {
          if (D) return;
          try {
            (Cn(n, te(Buffer.concat(A).toString("utf8"))), c.writeHead(200).end());
          } catch (k) {
            (r(`[runner:warn] /v1/metrics rejected malformed body: ${d(k)}`),
              c.writeHead(400).end());
          }
        }));
      return;
    }
    let l = void 0;
    if (i.method === "GET" && i.url === "/metrics") {
      let A = On(n);
      (c.writeHead(200, {
        "Content-Type": "text/plain; version=0.0.4; charset=utf-8",
        "Content-Length": Buffer.byteLength(A)
      }),
        c.end(A));
      return;
    }
    if (i.method !== "GET" || i.url !== "/healthz") {
      (c.writeHead(404, { "Content-Type": "text/plain" }),
        c.end(`not found
`));
      return;
    }
    let b = Date.now(),
      w = n.lastPollAt > 0 ? b - n.lastPollAt : null,
      S = _({
        status: "ok",
        runner_id: n.runnerId,
        active_sessions: n.activeSessions,
        last_poll_at: n.lastPollAt > 0 ? new Date(n.lastPollAt).toISOString() : null,
        last_poll_age_ms: w
      });
    if (
      (c.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(S)
      }),
      c.end(S),
      n.claimVisibility !== void 0)
    ) {
      for (let A of n.claimVisibility.values())
        if (A.visibleMs === void 0) A.visibleMs = Math.max(0, b - A.pickedUpAt);
    }
  });
  t.unref();
  let s = !1;
  return (
    t.on("error", (i) => {
      if (!t.listening) n.listeningOn = void 0;
      if (!s) ((s = !0), f("self_hosted_healthz_listen", "listen_failed"));
      r(
        `[runner:warn] /healthz listener failed on port ${e}: ${i.message} \u2014 continuing without health endpoint`
      );
    }),
    t.listen(e, () => {
      if (((n.listeningOn = t.address()?.port ?? e), !s))
        ((s = !0), g("self_hosted_healthz_listen"));
      r(`[runner:health] /healthz and /metrics listening on :${e}`);
    }),
    t
  );
}
function Ln(e) {
  let n = e.socket.remoteAddress;
  return n === "127.0.0.1" || n === "::1" || n === "::ffff:127.0.0.1";
}
import { constants as ze, fstatSync as ke, openSync as Mn, writeSync as In } from "fs";
import { isatty as Nn } from "tty";
var Dn = 262144,
  ve = 5,
  Ye = 100,
  Ve = 500;
function Un(e) {
  let n = 0;
  for (let r = e.indexOf(10); r !== -1; r = e.indexOf(10, r + 1)) n++;
  return n;
}
var [Re, Te, Je] = [0, 1, 2],
  Ze = 65536,
  Hn = 5000,
  Xe = ["EPIPE", "ECONNRESET", "ENXIO", "EBADF", "EIO", "ENOSPC", "EINVAL"],
  xn = `
const { writeSync } = require('fs')
let fd, shared, errnos
onmessage = ({ data }) => {
  if (shared === undefined) {
    ;({ fd, shared, errnos } = data)
    Atomics.store(shared, 3, 1)
    return
  }
  let written = 0
  let errno = 0
  while (written < data.length) {
    // Whole lines of at most PIPE_BUF bytes in one write(2), so that another writer to the same
    // pipe cannot land inside one of them, as with one line per write before; a longer line alone.
    let end = Math.min(written + 4096, data.length)
    if (end < data.length) {
      const lastNewline = data.lastIndexOf(10, end - 1)
      end = lastNewline >= written ? lastNewline + 1 : data.indexOf(10, written) + 1 || data.length
    }
    try {
      written += writeSync(fd, data, written, end - written)
    } catch (e) {
      // The description may be non-blocking: in the runner, code that reads process.stderr at
      // import (the debug package) makes stderr so, and process.stdout where no terminal is
      // named in the environment; another holder may too. Then try again in 5 ms.
      if (e.code === 'EAGAIN') {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5)
      } else if (e.code !== 'EINTR') {
        errno = errnos.indexOf(e.code) + 1 || errnos.length + 1
        break
      }
    }
  }
  Atomics.store(shared, 1, written)
  Atomics.store(shared, 2, errno)
  Atomics.store(shared, 0, ${Je})
  Atomics.notify(shared, 0)
  postMessage(0)
}
`,
  Gn = {
    openOwn(e) {
      try {
        if (Nn(e)) {
          let r = Kco(e);
          return (
            r.fd ?? {
              refused: `the terminal could not be opened a second time: ${r.errno ?? r.reason}`,
              writtenHere: O() === "windows"
            }
          );
        }
        let n = ke(e);
        if (!n.isFIFO())
          return {
            refused: n.isSocket()
              ? "a socket cannot be opened a second time"
              : "only a terminal, or a pipe on Linux, can be opened a second time",
            writtenHere: n.isFile() || n.isCharacterDevice() || O() === "windows"
          };
        return Mn(`/proc/self/fd/${e}`, ze.O_WRONLY | ze.O_NONBLOCK | ws);
      } catch (n) {
        return {
          refused: `it could not be opened a second time: ${E(n) ?? "unknown"}`,
          writtenHere: O() === "windows"
        };
      }
    },
    sameFile(e, n) {
      try {
        let [r, h] = [ke(e), ke(n)];
        return r.dev === h.dev && r.ino === h.ino && r.rdev === h.rdev;
      } catch {
        return !1;
      }
    },
    writeSync: (e, n, r) => In(e, n, r),
    writeOnAThread(e, n) {
      let r = new Int32Array(new SharedArrayBuffer(16)),
        h,
        a,
        t;
      try {
        let c = URL.createObjectURL(new Blob([xn], { type: "application/javascript" }));
        ((h = new Worker(c)),
          h.unref?.(),
          (h.onmessage = n),
          (h.onerror = () => {
            h = void 0;
          }),
          h.postMessage({ fd: e, shared: r, errnos: Xe }));
      } catch {
        h = void 0;
      }
      let s = (c) => {
        throw Object.assign(Error("the thread did not write the bytes"), { code: c });
      };
      return {
        write: (c, l) => {
          if (t !== void 0) {
            let w = t;
            ((t = void 0), s(w));
          }
          let b = Atomics.load(r, 0);
          if (b === Je) {
            let [w, S] = [Atomics.load(r, 1), Atomics.load(r, 2)];
            if ((Atomics.store(r, 0, Re), S > 0)) {
              let A = Xe[S - 1] ?? "unknown";
              if (w === 0) s(A);
              t = A;
            }
            return w;
          }
          if (b === Te && Atomics.load(r, 3) === 0 && a !== void 0 && performance.now() - a > Hn)
            (h?.terminate(), (h = void 0), Atomics.store(r, 0, Re));
          if (h === void 0)
            throw Object.assign(Error("the thread could not be started"), { code: "NO_THREAD" });
          if (b === Re)
            (Atomics.store(r, 0, Te),
              (a = performance.now()),
              h.postMessage(Uint8Array.prototype.slice.call(c, l, l + Ze)));
          throw Object.assign(Error("the thread has the bytes"), { code: "EINPROGRESS" });
        },
        wait(c) {
          Atomics.wait(r, 0, Te, c);
        }
      };
    },
    sleep(e) {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, e);
    }
  };
function HAn(e) {
  let n = e.io ?? Gn,
    r = e.clock ?? Jl,
    h = (m, y) => {
      let T = n.openOwn(m),
        M = typeof T === "number" ? T : m,
        N = typeof T === "number" || T.writtenHere ? void 0 : n.writeOnAThread(m, () => q(H)),
        H = {
          name: y,
          fd: M,
          via:
            typeof T === "number"
              ? "a non-blocking descriptor"
              : T.writtenHere
                ? "the descriptor this process was given"
                : "the descriptor this process was given, on a thread of its own",
          because: typeof T === "number" ? void 0 : T.refused,
          write: N?.write ?? ((Q, oe) => n.writeSync(M, Q, oe)),
          waitForTheThread: N?.wait,
          waiting: [],
          waitingBytes: 0,
          gone: !1,
          unannounced: 0,
          retryMs: ve
        };
      return H;
    },
    a = n.sameFile(1, 2),
    t = h(1, a ? "stdout and stderr" : "stdout"),
    s = a ? t : h(2, "stderr"),
    i = a ? [t] : [t, s],
    c = {},
    l = new Set(),
    b = 0,
    w = !1,
    S = !1;
  function A(m, y) {
    ((m.unannouncedSinceMs ??= r.monotonicNow()), (m.unannounced += y), (b += y));
  }
  function L(m) {
    if (m.unannounced > 0) {
      let y = m.unannounced;
      m.unannounced = 0;
      let T = Math.max(1, Math.ceil((r.monotonicNow() - (m.unannouncedSinceMs ?? 0)) / 1000)),
        M = e.stamp(
          `[runner:log] ${y === 1 ? "1 log line" : `${y} log lines`} to ${m.name} ${y === 1 ? "was" : "were"} dropped over ${T} s: whatever reads ${m.name} was paused or too slow`
        ),
        N = {
          bytes: Buffer.from(
            M +
              `
`
          ),
          offset: 0,
          lines: 0,
          announces: y
        },
        H = m.waitForTheThread === void 0 ? void 0 : D(m);
      return H === void 0
        ? N
        : {
            bytes: Buffer.concat([N.bytes, H.bytes]),
            offset: 0,
            lines: H.lines,
            announces: y,
            notice: M
          };
    }
    return D(m);
  }
  function D(m) {
    let y = m.waiting.shift();
    if (y === void 0) return;
    if (((m.waitingBytes -= y.bytes.length), m.waitForTheThread === void 0))
      return { bytes: y.bytes, offset: 0, lines: y.lines, announces: 0 };
    let T = [y],
      M = y.bytes.length;
    while (m.waiting.length > 0 && M + m.waiting[0].bytes.length <= Ze) {
      let N = m.waiting.shift();
      ((m.waitingBytes -= N.bytes.length), (M += N.bytes.length), T.push(N));
    }
    return {
      bytes:
        T.length === 1
          ? y.bytes
          : Buffer.concat(
              T.map((N) => N.bytes),
              M
            ),
      offset: 0,
      lines: T.reduce((N, H) => N + H.lines, 0),
      announces: 0
    };
  }
  function k(m, y) {
    if (y.announces > 0) {
      if ((e.onOwnLine?.(y.notice ?? y.bytes.toString().trimEnd()), m.unannounced === 0))
        m.unannouncedSinceMs = void 0;
    }
    m.retryMs = ve;
  }
  function C(m, y = "stdout") {
    let T = e.stamp(m);
    if ((e.onOwnLine?.(T), !S)) ne.write(y, T);
  }
  function B(m, y) {
    (m.waiting.push(y), (m.waitingBytes += y.bytes.length));
    while (m.waitingBytes > Dn && m.waiting.length > 1) {
      let T = m.waiting.shift();
      ((m.waitingBytes -= T.bytes.length), A(m, T.lines));
    }
  }
  function j(m) {
    ((m.write = (y, T) => n.writeSync(m.fd, y, T)),
      (m.waitForTheThread = void 0),
      (m.via = "the descriptor this process was given"),
      (m.because = `${m.because ?? "it could not be opened a second time"}, and no thread could write to it`),
      C(
        `[runner:warn] The thread that writes this process's ${m.name} could not start, or it stopped, so this process writes there itself. If nothing reads ${m.name}, that can hold this process up. Make sure something reads it, such as the journal or a log file.`,
        m === t ? "stderr" : "stdout"
      ));
  }
  function J(m, y, T) {
    let M = !l.has(`${m.name} ${T}`);
    l.add(`${m.name} ${T}`);
    let N =
      y.offset === 0
        ? y
        : { bytes: y.bytes.subarray(y.offset), lines: Un(y.bytes.subarray(y.offset)) };
    if (!hdr.has(T)) {
      if (((c[T] = (c[T] ?? 0) + N.lines), M))
        C(
          `[runner:warn] A write to this process's ${m.name} failed (${T}), so some log lines are missing there. This process keeps running. If this error happens again on ${m.name}, it will not be reported.`,
          m === t ? "stderr" : "stdout"
        );
      return;
    }
    m.gone = !0;
    let H = [N, ...m.waiting];
    if (
      ((m.waiting = []),
      (m.waitingBytes = 0),
      (m.unannounced = 0),
      (m.unannouncedSinceMs = void 0),
      C(
        `[runner:warn] Nobody can read this process's ${m.name} anymore (${T}), so nothing more is written there.` +
          (m === t && !s.gone ? " Status lines go to stderr from here on." : "")
      ),
      m === t && !s.gone)
    ) {
      for (let Q of H) if (Q.lines > 0) B(s, { bytes: Q.bytes, lines: Q.lines });
      q(s);
    }
  }
  function V(m) {
    while (!m.gone) {
      m.head ??= L(m);
      let y = m.head;
      if (y === void 0) return;
      let T = "EAGAIN";
      try {
        let M = m.write(y.bytes, y.offset);
        if (((y.offset += M), M > 0)) {
          if (y.offset >= y.bytes.length) ((m.head = void 0), k(m, y));
          continue;
        }
      } catch (M) {
        T = E(M) ?? "unknown";
      }
      if (T === "EINTR") continue;
      if (T === "NO_THREAD") {
        j(m);
        continue;
      }
      if (T !== "EAGAIN" && T !== "EINPROGRESS") {
        ((m.head = void 0), J(m, y, T));
        continue;
      }
      if (T === "EAGAIN" && y.offset === 0) {
        if (((m.head = void 0), (m.unannounced += y.announces), y.announces === 0))
          (m.waiting.unshift({ bytes: y.bytes, lines: y.lines }),
            (m.waitingBytes += y.bytes.length));
      }
      if (!w && !S && m.cancelRetry === void 0)
        ((m.cancelRetry = r.setTimeout(
          () => {
            ((m.cancelRetry = void 0), q(m));
          },
          m.retryMs,
          { unref: !0 }
        )),
          (m.retryMs = Math.min(m.retryMs * 2, Ye)));
      return;
    }
  }
  function q(m) {
    if (!w) V(m);
  }
  function ue(m) {
    let y = r.monotonicNow() + m;
    for (;;) {
      for (let H of i) q(H);
      let T = i.some((H) => H.head !== void 0 || H.waiting.length > 0),
        M = y - r.monotonicNow();
      if (!T || M <= 0) return;
      let N = i.find((H) => H.head !== void 0 && H.waitForTheThread !== void 0);
      if (N?.waitForTheThread) N.waitForTheThread(Math.min(M, Ye));
      else n.sleep(Math.min(M, ve));
    }
  }
  let Z = () => {
      ((S = !0), ue(Ve));
    },
    ne = {
      write(m, y) {
        let T = m === "stdout" ? t : s,
          M = T.gone ? s : T;
        if (w || M.gone) return;
        (B(M, {
          bytes: Buffer.from(
            y +
              `
`
          ),
          lines: 1
        }),
          q(M));
      },
      stats: () => ({
        queuedBytes: i.reduce(
          (m, y) => m + y.waitingBytes + (y.head ? y.head.bytes.length - y.head.offset : 0),
          0
        ),
        droppedLines: b,
        failedLines: { ...c }
      }),
      describe: () =>
        "log lines reach " +
        i
          .map(
            (m) =>
              `${m.name}${a ? " (same place)" : ""} through ${m.via}` +
              (m.because === void 0 ? "" : ` (because ${m.because})`)
          )
          .join("; "),
      close() {
        if (w) return;
        ((S = !0), ue(Ve), (w = !0), process.off("exit", Z));
        for (let m of i) m.cancelRetry?.();
      }
    };
  return (process.on("exit", Z), ne);
}
import { spawn as un } from "child_process";
import { constants as Jn } from "fs";
import { access as Zn, stat as Ce } from "fs/promises";
import { join as dn } from "path";
import { readdirSync as Fn, readFileSync as nn } from "fs";
import { readFile as Wn } from "fs/promises";
var Ae = 4096,
  qe = 64;
function Ecr(e, n) {
  if (!Number.isInteger(e.pid) || e.pid <= 1) return Promise.resolve(void 0);
  let r = O();
  if (r === "linux" || r === "wsl") {
    let h = Kn();
    return Promise.resolve(h && Qe(e, h));
  }
  if (r === "windows") return Promise.resolve(void 0);
  return zn(n).then(
    (h) => h && Qe(e, h),
    () => {
      return;
    }
  );
}
var he = 3000;
async function tn(e, n) {
  let r = [...e.pinned],
    h = new Map(),
    a,
    t = !1,
    s = O(),
    i;
  if (s === "macos")
    i = Vn([process.pid, ...r.map(([l]) => l)], n).then((l) => {
      let b = Bn(l, process.pid, e.pinned);
      if (b === void 0) {
        t = !0;
        return;
      }
      a = b.ownPgrp;
      for (let [w, S] of b.proven) h.set(w, S);
    });
  else if (s === "linux" || s === "wsl")
    ((a = jn()),
      (i = en(r, async ([l, b]) => {
        let w = await Wn(`/proc/${l}/stat`, "utf8").catch(() => {
          return;
        });
        if (w !== void 0 && oW(w) === b && !eee(gSe(w))) h.set(l, L8r(w));
      })));
  else
    i = en(r, async ([l, b]) => {
      if ((await Ly(l, b)) === !0) h.set(l, void 0);
    });
  let c = await Pe(
    i.then(() => !0),
    n
  ).catch(() => {
    return;
  });
  return { proven: h, ownPgrp: a, incomplete: t || c !== !0 };
}
function Bn(e, n, r) {
  let h = e.get(n);
  if (h === void 0) return;
  let a = new Map();
  for (let [t, s] of r) {
    let i = e.get(t);
    if (i !== void 0 && i.token === s) a.set(t, i.pgrp);
  }
  return { proven: a, ownPgrp: h.pgrp };
}
async function kcr(e, n = he) {
  let { proven: r, incomplete: h } = await tn(e, n);
  return { live: r.size, incomplete: h };
}
async function LAn(e, n, r = he) {
  let { proven: h, ownPgrp: a, incomplete: t } = await tn(e, r),
    s = 0;
  if (a !== void 0) {
    let c = new Set();
    for (let l of h.values())
      if (l !== void 0 && l > 1 && l !== e.rootPid && l !== a && l !== process.pid) c.add(l);
    for (let l of c)
      try {
        (process.kill(-l, n), s++);
      } catch {}
  }
  let i = 0;
  for (let c of h.keys())
    try {
      (process.kill(c, n), i++);
    } catch {}
  return { proven: h.size, pids: i, groups: s, incomplete: t };
}
function Qe(e, n) {
  let r = new Map(),
    h = [],
    a;
  for (let l of n.rows) {
    let b = r.get(l.ppid);
    if (b) b.push(l);
    else r.set(l.ppid, [l]);
    if (l.pid === e.pid) a = l;
    else if (l.pgrp === e.pid) h.push(l);
  }
  let t = e.alive ? a !== void 0 && e.token !== void 0 && a.token !== e.token : a !== void 0,
    s = {
      rootPid: e.pid,
      pinned: new Map(),
      unpinned: 0,
      truncated: !1,
      degraded: n.degraded,
      rootRecycled: t
    };
  if (t) return s;
  let i = e.alive ? [...h, ...(r.get(e.pid) ?? [])] : h,
    c = new Set([e.pid]);
  while (i.length > 0) {
    let l = i.shift();
    if (l.pid <= 1 || c.has(l.pid)) continue;
    if (c.size > Ae) {
      s.truncated = !0;
      break;
    }
    if ((c.add(l.pid), l.token === void 0)) s.unpinned++;
    else s.pinned.set(l.pid, l.token);
    i.push(...(r.get(l.pid) ?? []));
  }
  return s;
}
function Kn() {
  let e;
  try {
    e = Fn("/proc");
  } catch {
    return;
  }
  let n = [];
  for (let r of e) {
    if (!/^\d+$/.test(r)) continue;
    try {
      let h = nn(`/proc/${r}/stat`, "utf8"),
        a = dlr(h);
      if (a === void 0 || eee(gSe(h))) continue;
      let t = oW(h);
      n.push({
        pid: Number(r),
        ppid: a,
        pgrp: L8r(h),
        token: t !== void 0 && t.length > 0 ? t : void 0
      });
    } catch {}
  }
  return { rows: n, degraded: !1 };
}
function jn() {
  try {
    return L8r(nn("/proc/self/stat", "utf8"));
  } catch {
    return;
  }
}
function on() {
  return { USER_TYPE: "external", NODE_ENV: "production", LC_ALL: "C", TZ: "UTC" };
}
async function zn(e) {
  let n = await ct(
      "ps",
      ["-A", "-o", "pid=", "-o", "ppid=", "-o", "pgid=", "-o", "stat=", "-o", "lstart="],
      { timeout: e, env: on(), cwd: "/", stripFinalNewline: !1 }
    ),
    r = Yn(n.stdout);
  return r.length === 0 ? void 0 : { rows: r, degraded: n.code !== 0 };
}
function Yn(e) {
  let n = [],
    r = e.slice(
      0,
      e.lastIndexOf(`
`) + 1
    );
  for (let h of r.split(`
`)) {
    let a = /^\s*(\d+)\s+(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(h),
      t = a?.[4];
    if (a && t !== void 0 && !t.startsWith("Z"))
      n.push({ pid: Number(a[1]), ppid: Number(a[2]), pgrp: Number(a[3]), token: a[5] });
  }
  return n;
}
async function Vn(e, n) {
  let r = await ct(
    "ps",
    ["-o", "pid=", "-o", "pgid=", "-o", "stat=", "-o", "lstart=", "-p", e.join(",")],
    { timeout: n, env: on(), cwd: "/", stripFinalNewline: !1 }
  );
  return Xn(r.stdout);
}
function Xn(e) {
  let n = new Map(),
    r = e.slice(
      0,
      e.lastIndexOf(`
`) + 1
    );
  for (let h of r.split(`
`)) {
    let a = /^\s*(\d+)\s+(\d+)\s+(\S+)\s+(\S.*?)\s*$/.exec(h),
      t = a?.[3],
      s = a?.[4];
    if (a && t !== void 0 && s !== void 0 && !t.startsWith("Z"))
      n.set(Number(a[1]), { pgrp: Number(a[2]), token: s });
  }
  return n;
}
async function en(e, n) {
  for (let r = 0; r < e.length; r += qe) await Promise.all(e.slice(r, r + qe).map(n));
}
var be = 5000;
function ae() {
  return {
    ...process.env,
    SELF_HOSTED_RUNNER_POOL_SECRET: void 0,
    SELF_HOSTED_RUNNER_ENVIRONMENT_SECRET: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_COMMAND: void 0,
    SELF_HOSTED_RUNNER_PROXY_AUTHORIZATION_FILE: void 0
  };
}
function p5t(e, n = "linux") {
  if (n !== "win32") return;
  switch (e) {
    case "--hooks-dir":
      throw Error(
        "--hooks-dir is not supported on Windows: lifecycle hooks currently require a Linux or macOS host, because they are POSIX executables that the runner spawns directly (no shell, no .cmd/.ps1/.exe resolution). Run the runner on a Linux or macOS host to use hooks, or drop --hooks-dir / SELF_HOSTED_RUNNER_HOOKS_DIR to use the built-in checkout and command behavior. See docs/self-hosted-runners-guide.md \xA7 Lifecycle hooks."
      );
    case "orchestrator mode":
      throw Error(
        "orchestrator mode is not supported on Windows: it is driven by the spawn-runner lifecycle hook, and lifecycle hooks currently require a Linux or macOS host because they are POSIX executables spawned directly (no shell, no .cmd/.ps1/.exe resolution). Run the orchestrator on a Linux or macOS host; the runners it provisions are unaffected. See docs/self-hosted-runners-guide.md \xA7 Lifecycle hooks."
      );
  }
}
async function qCt(e, n) {
  if (!e) return null;
  let r = dn(e, n);
  try {
    if (!(await Al(Ce(r), be, `stat ${r}`)).isFile()) return null;
    return (await Al(Zn(r, Jn.X_OK), be, `access ${r}`), r);
  } catch {
    return null;
  }
}
var Tcr = [
    ["core.fsmonitor", ""],
    ["core.askPass", ""],
    ["log.showSignature", "false"],
    ["tag.forceSignAnnotated", "false"],
    ["init.templateDir", ""],
    ["gpg.ssh.defaultKeyCommand", ""],
    ["push.gpgSign", "false"],
    ["protocol.ext.allow", "never"],
    ["protocol.fd.allow", "never"],
    ["protocol.git.allow", "never"],
    ["protocol.file.allow", "user"],
    ["merge.verifySignatures", "false"],
    ["core.alternateRefsCommand", C8r],
    ["core.attributesFile", "/dev/null"]
  ],
  mmi = {
    GIT_PROXY_COMMAND: "",
    GIT_ALLOW_PROTOCOL: "https:http:ssh",
    GIT_EDITOR: ":",
    GIT_SEQUENCE_EDITOR: ":",
    GIT_SSH_COMMAND: "ssh"
  };
function eis(e = ae()) {
  let n;
  for (let [r, h] of Object.entries(mmi)) {
    if (e[r] !== void 0) continue;
    ((n ??= { ...e }),
      (n[r] =
        r === "GIT_SSH_COMMAND" && e.GIT_SSH !== void 0
          ? `'${e.GIT_SSH.replace(/'/g, "'\\''")}'`
          : h));
  }
  if (gmi(e) === "handedOn") ((n ??= { ...e }), (n.GIT_ASKPASS = e.SSH_ASKPASS));
  return n ?? e;
}
function gmi(e = ae()) {
  if (e.GIT_ASKPASS !== void 0 || ymi("core.askPass", e)) return "own";
  return e.SSH_ASKPASS ? "handedOn" : "none";
}
var qn = 256;
function hmi(e = ae()) {
  let n = /^\s*\+?(\d+)$/.exec(e.GIT_CONFIG_COUNT ?? ""),
    r = n ? parseInt(n[1], 10) : 0;
  if (!Number.isSafeInteger(r) || r === 0) return { count: 0, announced: 0 };
  if (r > qn) return { count: 0, discarded: "too-many", announced: r };
  if (e[`GIT_CONFIG_KEY_${r - 1}`] === void 0)
    return { count: 0, discarded: "sparse", announced: r };
  return { count: r, announced: r };
}
function cn(e) {
  return hmi(e).count;
}
function ymi(e, n = ae()) {
  let r = cn(n),
    h = e.toLowerCase();
  for (let a = 0; a < r; a++) if ((n[`GIT_CONFIG_KEY_${a}`] ?? "").toLowerCase() === h) return !0;
  return !1;
}
function Acr(e, n) {
  let r = [
    ["gpg.program", e.gpg],
    ["gpg.openpgp.program", e.gpg],
    ["gpg.x509.program", e.gpgsm]
  ];
  if (n) r.push(["gpg.ssh.program", e.sshKeygen]);
  return r;
}
function ln(e, n, r) {
  if (!n?.length) return e;
  let h = cn(e),
    a = { ...e },
    t = n.length;
  for (let s = 0; s < h; s++) (delete a[`GIT_CONFIG_KEY_${s}`], delete a[`GIT_CONFIG_VALUE_${s}`]);
  for (let s = 0; s < h; s++) {
    let i = e[`GIT_CONFIG_KEY_${s}`],
      c = e[`GIT_CONFIG_VALUE_${s}`];
    if (i !== void 0) a[`GIT_CONFIG_KEY_${t + s}`] = i;
    if (c !== void 0) a[`GIT_CONFIG_VALUE_${t + s}`] = c;
  }
  if (
    (n.forEach(([s, i], c) => {
      ((a[`GIT_CONFIG_KEY_${c}`] = s), (a[`GIT_CONFIG_VALUE_${c}`] = i));
    }),
    (a.GIT_CONFIG_COUNT = String(t + h)),
    r?.legacyParams)
  ) {
    let s = (l) => `'${l.replace(/'/g, "'\\''")}'`,
      i = n.map(([l, b]) => s(`${l}=${b}`)),
      c = [];
    for (let l = 0; l < h; l++) {
      let b = e[`GIT_CONFIG_KEY_${l}`];
      if (b !== void 0) c.push(s(`${b}=${e[`GIT_CONFIG_VALUE_${l}`] ?? ""}`));
    }
    a.GIT_CONFIG_PARAMETERS = [
      ...i,
      ...c,
      ...(e.GIT_CONFIG_PARAMETERS ? [e.GIT_CONFIG_PARAMETERS] : [])
    ].join(" ");
  }
  return a;
}
function pn(e, n, r) {
  let h = n?.commandScopeEntries ?? [],
    a = r && h.some(([t]) => t.includes("=")) ? [] : h;
  return [...(e ?? []), ...a];
}
var me = 1000,
  rn = 1500,
  Oe = 5000,
  fn = 500,
  Qn = fn + he,
  et = 100,
  Le =
    "a hook should `exec` or `wait` for its long-running commands, stop a command's child processes too if it stops that command early, and start a daemon with its output redirected: >/dev/null 2>&1";
function Me(e) {
  return e.signalCode !== null ? `signal ${e.signalCode}` : `status ${e.exitCode}`;
}
function sn(e) {
  return `hook exited (${Me(e)}) but a process it started still holds its output pipes; not waiting for them to close. The runner has not stopped that process, and it may still be running (${Le})`;
}
function _e(e) {
  if (e < 1000) return `${e}ms`;
  if (e % 60000 === 0) return `${e / 60000}min`;
  return e % 1000 === 0 ? `${e / 1000}s` : `${(e / 1000).toFixed(1)}s`;
}
class kFe extends R {
  exitCode;
  constructor(e, n, r) {
    super(e, r);
    ((this.name = "CheckoutHookFailedError"), (this.exitCode = n));
  }
}
class NAn extends R {
  constructor(e) {
    super(e, "checkout hook timed out");
    this.name = "CheckoutHookTimedOutError";
  }
}
async function bJr(e) {
  let r = {
      ...ae(),
      ...e.gitEnvironment?.envOverrides,
      ...!1,
      CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
      CLAUDE_RUNNER_SESSION_UUID: cC(e.sessionId),
      CLAUDE_RUNNER_REPO_URL: e.repoUrl,
      CLAUDE_RUNNER_REPO_REF: e.repoRef ?? "",
      CLAUDE_RUNNER_CHECKOUT_PATH: e.checkoutPath,
      CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
      CLAUDE_RUNNER_GIT_MOUNT_URL: e.gitMountUrl,
      CLAUDE_RUNNER_CLIENT_PLATFORM: Wit(e.clientPlatform),
      CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
    },
    h = (b) => {
      try {
        e.onStatus(b);
      } catch {}
    },
    a = (b) => {
      try {
        e.onDebug(b);
      } catch {}
    };
  h(`[runner:hook] checkout ${Qd(e.repoUrl)} -> ${e.checkoutPath} (via ${e.hookPath})`);
  let t = [],
    s = (b) => {
      try {
        e.onStderrLine?.(b);
      } catch {}
    },
    i = !1,
    c = !1;
  await new Promise((b, w) => {
    let S = un(e.hookPath, [], {
        cwd: e.cwd,
        env: ln(
          e.gitConfigPins?.length ? eis(r) : r,
          pn(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams),
          { legacyParams: e.gitConfigLegacyParams }
        ),
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: !0,
        ..._d("hooks")
      }),
      A = !1,
      L = [],
      D = () => {
        for (let P of L.splice(0)) clearTimeout(P);
      },
      k = "",
      C = "",
      B = (P, F) => {
        let K = P.split(`
`),
          x = K.pop() ?? "";
        for (let Y of K) {
          let ee = Qd(Y);
          if ((a(`[runner:hook:checkout] ${ee}`), F))
            (t.push(
              ee +
                `
`
            ),
              s(ee));
        }
        if (F) {
          let Y = t.reduce((ee, le) => ee + le.length, 0);
          while (Y > 4096 && t.length > 1) Y -= t.shift().length;
        }
        return x;
      };
    (S.stdout.on("data", (P) => {
      ((k += P.toString()), (k = B(k, !1)));
    }),
      S.stderr.on("data", (P) => {
        ((C += P.toString()), (C = B(C, !0)));
      }));
    let j = (P, F) => {
        if (A) return;
        if (((A = !0), D(), e.signal?.removeEventListener("abort", oe), F !== void 0))
          (h(`[runner:hook:checkout] ${F}`), S.stdout.destroy(), S.stderr.destroy());
        if (k) a(`[runner:hook:checkout] ${Qd(k)}`);
        if (C) {
          let x = Qd(C);
          (a(`[runner:hook:checkout] ${x}`), t.push(x), s(x));
        }
        let K = Ja(t.join(""), 4096);
        if (c) {
          if (K.trim() !== "") {
            let x = Qd(K);
            h(
              `[runner:hook:checkout] the hook's last output before the time limit: ${x.length > rn ? "\u2026" : ""}${Ja(
                x,
                rn
              )
                .trimEnd()
                .replace(/\s*[\r\n]+\s*/g, " | ")
                .replace(/[\p{C}\p{Zl}\p{Zp}]/gu, " ")}`
            );
          }
          w(
            new NAn(
              `checkout hook timed out after ${_e(e.timeoutMs ?? 0)} (the runner's --checkout-hook-timeout-min limit)`
            )
          );
        } else if (i) w(Error("checkout hook aborted"));
        else if (P === 0) b();
        else {
          let Y = `checkout hook failed (exit ${P}): ${K}`;
          w(
            P === null
              ? new R(Y, "checkout hook killed by signal")
              : new kFe(Y, P, `exited with status ${P}`)
          );
        }
      },
      J = !1,
      V = !1,
      q = !1,
      ue = !1,
      Z = () => S.exitCode === null && S.signalCode === null,
      ne,
      m = !1,
      y = async (P, F) => {
        let K = S.pid,
          x = [],
          Y = !1;
        if (K !== void 0 && Z()) {
          let Ne = Ecr({ pid: K, alive: !0, token: void 0 }, fn);
          ne = Promise.all([ne, Ne]).then(([we, pe]) =>
            we === void 0 || pe === void 0
              ? (we ?? pe)
              : { ...pe, pinned: new Map([...we.pinned, ...pe.pinned]) }
          );
          let de = await Ne;
          if (
            ((Y = Z() && S.kill(P)),
            (V ||= Y),
            a(
              Y
                ? `[runner:hook:checkout] ${F}, sending ${P} to the hook's process tree (pid=${K})`
                : `[runner:hook:checkout] ${F}, but the hook process could no longer be sent ${P}; what it started still is, as far as it was listed`
            ),
            de === void 0)
          )
            x.push(`the process table could not be read before ${P}`);
          else {
            if (de.unpinned > 0) x.push(`${de.unpinned} could not be identified`);
            if (de.truncated) x.push(`it had more than ${Ae} processes`);
            if (de.degraded) x.push("`ps` failed part-way");
          }
        }
        let ee = await ne;
        if (ee === void 0) {
          if (x.length > 0 && P === "SIGTERM")
            h(
              `[runner:hook:checkout] could not read the process table (is /proc mounted? on macOS, is \`ps\` on PATH?), so ${Y ? "only the hook process was sent SIGTERM" : "nothing was sent SIGTERM"}; programs the hook started, such as git, may still be running and writing to ${e.checkoutPath}`
            );
          return;
        }
        let { pids: le, incomplete: _n } = await LAn(ee, P);
        if (x.length > 0)
          h(
            `[runner:hook:checkout] may not have stopped everything the hook started: ${x.join("; ")}`
          );
        if (P === "SIGTERM") return;
        if (le > 0)
          h(
            `[runner:hook:checkout] ${le} program(s) the hook started were still running ${_e(Oe)} after SIGTERM and were sent SIGKILL`
          );
        if (_n)
          h(
            "[runner:hook:checkout] could not check which of the hook's programs were still running; some may be"
          );
      },
      T = (P, F) => y(P, F).catch(() => {}),
      M = (P) => {
        L.push(setTimeout((F, K, x) => F(K, sn(x)), me, j, P, S));
      },
      N = () => {
        if (!V && !Z() && !q) {
          ue = !0;
          return;
        }
        let P = Z();
        if (P) S.unref();
        j(
          S.exitCode,
          P
            ? "hook process did not exit after SIGTERM and then SIGKILL (it may be stuck on a disk or network mount); abandoning it, and not waiting for its output pipes to close"
            : m
              ? `hook exited (${Me(S)}) but programs it started may still be running, and may still write to ${e.checkoutPath}; giving up on them`
              : sn(S)
        );
      },
      H = () => {
        if (!A) L.push(setTimeout((P) => P(), me, N));
      },
      Q = (P) => {
        if (J || A) return;
        if (!Z()) {
          h(
            `[runner:hook:checkout] ${P}, but the hook has already exited and there is nothing left to stop; still waiting for its output pipes to close, which a process it started may hold, and the slot stays held until then (${Le})`
          );
          return;
        }
        ((J = !0),
          T("SIGTERM", P),
          L.push(
            setTimeout(
              (F, K) => void F("SIGKILL", "still running after SIGTERM").then(K),
              Oe,
              T,
              H
            ),
            setTimeout((F) => F(), Oe + Qn + me, N)
          ));
      },
      oe = () => {
        ((i = !0), Q("abort received"));
      };
    if (e.signal?.aborted) oe();
    else e.signal?.addEventListener("abort", oe, { once: !0 });
    if (e.timeoutMs !== void 0 && e.timeoutMs > 0)
      L.push(
        setTimeout(
          (P) => {
            if (A || i) return;
            if (!Z()) return;
            ((c = !0),
              h(
                `[runner:hook:checkout] timed out after ${_e(P)} (--checkout-hook-timeout-min) \u2014 stopping the hook and failing this session's setup`
              ),
              Q(`timed out after ${_e(P)}`));
          },
          Math.min(e.timeoutMs, 2147483647),
          e.timeoutMs
        )
      );
    S.on("error", (P) => {
      if (A) return;
      ((A = !0), D(), e.signal?.removeEventListener("abort", oe), w(P));
    });
    let mn,
      Ie = () =>
        (mn ??= (async () => {
          while (!A) {
            let P = await ne;
            if (P === void 0) return;
            let { live: F, incomplete: K } = await kcr(P);
            if (((m = F > 0 || K), !m)) return;
            await X(et);
          }
        })());
    (S.on("exit", (P) => {
      Ie().then(() => {
        if (A) return;
        if (V) {
          M(P);
          return;
        }
        L.push(
          setTimeout(
            (F, K, x) => {
              F(
                `[runner:hook:checkout] hook exited (${Me(K)}) but a process it started still holds its output pipes. ${x() ? "The slot is not freed" : K.exitCode === 0 ? "The session does not start" : "The hook's failure is not reported"} until that process ends or closes them. The time limit (--checkout-hook-timeout-min) does not end this wait: it stops only a hook that is still running (${Le})`
              );
            },
            me,
            h,
            S,
            () => i || c
          )
        );
      });
    }),
      S.on("close", (P) => {
        if (((q = !0), Ie().then(() => j(P)), ue)) H();
      }));
  });
  let l;
  try {
    l = await Al(Ce(e.checkoutPath), be, `stat ${e.checkoutPath}`);
  } catch (b) {
    if (G(b))
      throw new kFe(
        `checkout hook exited 0 but ${e.checkoutPath} does not exist`,
        0,
        "exited 0 but did not create the checkout directory"
      );
    throw b;
  }
  if (!l.isDirectory())
    throw new kFe(
      `checkout hook exited 0 but ${e.checkoutPath} is not a directory`,
      0,
      "exited 0 but the checkout path is not a directory"
    );
  if (process.env.CLAUDE_RUNNER_SKIP_GIT_VERIFY !== "1")
    try {
      await Al(Ce(dn(e.checkoutPath, ".git")), be, `stat ${e.checkoutPath}/.git`);
    } catch (b) {
      if (G(b))
        throw new kFe(
          `checkout hook succeeded but ${e.checkoutPath}/.git is missing (for non-git SCMs, set CLAUDE_RUNNER_SKIP_GIT_VERIFY=1 in the runner's environment)`,
          0,
          "exited 0 but left no .git in the checkout directory"
        );
      throw b;
    }
}
var an = 2000;
class gn {
  inFlight = 0;
  increment() {
    this.inFlight++;
  }
  decrement() {
    this.inFlight--;
  }
}
var nt = new W(() => new gn());
function hn() {
  return nt.of(U().host);
}
function Ccr() {
  return hn().inFlight;
}
async function SJr(e) {
  let n = {
    ...ae(),
    ...e.gitEnvironment?.envOverrides,
    CLAUDE_RUNNER_SESSION_ID: e.sessionId.replace(/^cse_/, "session_"),
    CLAUDE_RUNNER_SESSION_UUID: cC(e.sessionId),
    CLAUDE_RUNNER_EXIT_REASON: e.exitReason,
    CLAUDE_RUNNER_DEBUG_LOG_PATH: e.debugLogPath,
    CLAUDE_RUNNER_WORKSPACE_PATHS: e.workspacePaths.join(":"),
    CLAUDE_RUNNER_API_BASE_URL: e.apiBaseUrl,
    CLAUDE_RUNNER_CLIENT_PLATFORM: Wit(e.clientPlatform),
    CLAUDE_CODE_SESSION_ACCESS_TOKEN: e.sessionAccessToken
  };
  e.onStatus(
    `[runner:hook] post-session hook starting (session exit: ${e.exitReason}, budget ${e.timeoutMs}ms, via ${e.hookPath})`
  );
  let r = Date.now(),
    h = () => {},
    a = new Promise((k) => {
      h = k;
    }),
    t = un(e.hookPath, [], {
      cwd: e.cwd,
      env: ln(
        e.gitConfigPins?.length ? eis(n) : n,
        pn(e.gitConfigPins, e.gitEnvironment, e.gitConfigLegacyParams),
        { legacyParams: e.gitConfigLegacyParams }
      ),
      stdio: ["ignore", "pipe", "pipe"],
      windowsHide: !0,
      ..._d("hooks"),
      detached: !0
    }),
    s = hn();
  s.increment();
  let i = !1,
    c = !1,
    l = [],
    b = () => {
      if (i) return;
      ((i = !0), s.decrement());
      for (let k of l) clearTimeout(k);
      h();
    },
    w = (k) => {
      let C = t.pid;
      if (C === void 0) {
        t.kill(k);
        return;
      }
      if (C <= 1) return;
      try {
        process.kill(-C, k);
      } catch {
        t.kill(k);
      }
    },
    S = e.timeoutMs > 0 ? e.timeoutMs : 1;
  l.push(
    setTimeout(
      (k, C, B, j) => {
        if (C.exitCode !== null || C.signalCode !== null) return;
        ((c = !0),
          k(
            `[runner:hook:post-session] timed out after ${B}ms, sending SIGTERM to the hook's process group (pgid=${C.pid})`
          ),
          j("SIGTERM"));
      },
      S,
      e.onDebug,
      t,
      S,
      w
    ),
    setTimeout(
      (k, C, B) => {
        if (!c) return;
        (k(
          `[runner:hook:post-session] still running after SIGTERM, sending SIGKILL to the hook's process group (pgid=${C.pid})`
        ),
          B("SIGKILL"));
      },
      Math.min(S + an, 2147483647),
      e.onDebug,
      t,
      w
    ),
    setTimeout(
      (k, C, B) => {
        (k(
          `[runner:hook:post-session] resolved without 'close' (${Date.now() - B}ms, grandchild likely holding stdio pipes; ignored)`
        ),
          C());
      },
      Math.min(S + an + 1000, 2147483647),
      e.onStatus,
      b,
      r
    )
  );
  let A = "",
    L = "",
    D = (k) => {
      let C = k.split(`
`),
        B = C.pop() ?? "";
      for (let j of C) e.onDebug(`[runner:hook:post-session] ${Qd(j)}`);
      return B;
    };
  return (
    t.stdout.on("data", (k) => {
      ((A += k.toString()), (A = D(A)));
    }),
    t.stderr.on("data", (k) => {
      ((L += k.toString()), (L = D(L)));
    }),
    t.on("error", (k) => {
      (e.onStatus(
        `[runner:hook:post-session] spawn error (ignored): ${Qd(k instanceof Error ? k.message : String(k))}`
      ),
        b());
    }),
    t.on("close", (k) => {
      if (A) e.onDebug(`[runner:hook:post-session] ${Qd(A)}`);
      if (L) e.onDebug(`[runner:hook:post-session] ${Qd(L)}`);
      let C = Date.now() - r;
      if (c) e.onStatus(`[runner:hook:post-session] killed after timeout (${C}ms, ignored)`);
      else if (k !== 0)
        e.onStatus(`[runner:hook:post-session] exited ${k ?? "via signal"} (${C}ms, ignored)`);
      else e.onStatus(`[runner:hook:post-session] done (exit 0, ${C}ms)`);
      b();
    }),
    a
  );
}
export {
  IAn,
  yJr,
  Kss,
  jit,
  Vss,
  qss,
  WYe,
  wcr,
  OAn,
  CX,
  Sie,
  Yss,
  upe,
  vcr,
  VCt,
  MAn,
  DAn,
  Vxe,
  _Jr,
  Wit,
  f5t,
  Xss,
  Jss,
  wie,
  Qss,
  Zss,
  HAn,
  Ecr,
  kcr,
  LAn,
  p5t,
  qCt,
  Tcr,
  mmi,
  eis,
  gmi,
  hmi,
  ymi,
  Acr,
  kFe,
  NAn,
  bJr,
  Ccr,
  SJr
};

//# sourceMappingURL=chunk-7279n81z.js.map
