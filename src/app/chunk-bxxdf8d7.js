// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ht } from "./chunk-ddpw2j06.js";
import { d, ui } from "./chunk-fs43t96t.js";
import { g, m } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { QP, NU } from "./chunk-yw4wqxm9.js";
import { pf } from "./chunk-ak0cmk10.js";
import { o, T, u } from "./chunk-0bqrj5ah.js";
import { Ds, py } from "./chunk-tdv74tcm.js";
var R = "2023-06-01",
  l2e = "https://github.com/apps/claude/installations/new";
function vbt(e) {
  if (!e || typeof e !== "object") return;
  let r = "error" in e ? e.error : e;
  if (r && typeof r === "object" && "reason" in r && typeof r.reason === "string") return r.reason;
  return;
}
var P = "ccr-byoc-2025-07-29";
async function zZe(e, r) {
  let {
      sessionId: i,
      repo: n,
      prNumber: f,
      baseUrl: b,
      getAccessToken: k,
      getTrustedDeviceToken: c
    } = r,
    _ = RBo(e),
    s = k();
  if (!s)
    return (
      t(`[bridge] No access token for ${e}-pr`),
      m(_, "no_token"),
      { ok: !1, reason: "no_token" }
    );
  let y = `${b}/v1/code/github/${e}-pull-request`,
    w = { session_id: pf(i), repo: n, pr_number: f },
    l;
  try {
    l = await Ht.post(y, w, {
      headers: _1r(s, { trustedDeviceToken: await c?.() }),
      timeout: 1e4,
      validateStatus: (a) => a < 500
    });
  } catch (a) {
    return (
      t(`[bridge] ${e}-pr request failed: ${d(a)}`),
      m(_, "request_failed"),
      { ok: !1, reason: "request_failed" }
    );
  }
  if (!((l.status >= 200 && l.status < 300) || l.status === 409)) {
    let a = vbt(l.data),
      h = QP(l.data);
    return (
      t(`[bridge] ${e}-pr failed ${l.status}${a ? ` [${a}]` : ""}${h ? `: ${h}` : ""}`),
      m(_, a === "github_app_not_installed" ? a : "http_error"),
      { ok: !1, reason: a, detail: NU(l.data) }
    );
  }
  return (t(`[bridge] ${e}-pr ${n}#${f} ok`), g(_), { ok: !0 });
}
function RBo(e) {
  return e === "subscribe" ? "bridge_pr_subscribe" : "bridge_pr_unsubscribe";
}
function _1r(e, { orgUUID: r, trustedDeviceToken: i } = {}) {
  let n = {
    Authorization: `Bearer ${e}`,
    "Content-Type": "application/json",
    "anthropic-version": R,
    "anthropic-beta": P,
    "anthropic-client-platform": py(),
    "User-Agent": Ds()
  };
  if (r !== void 0) n["x-organization-uuid"] = r;
  if (i !== void 0) n["X-Trusted-Device-Token"] = i;
  return n;
}
var xBo = "/worker/record-created-pr";
async function Y5s(e) {
  let r = `${e.sessionUrl.replace(/\/+$/, "")}${xBo}`;
  try {
    return {
      ok: !0,
      status: (
        await Ht.post(
          r,
          { owner: e.owner, repo: e.repo, pr_number: e.prNumber, head_ref: e.headRef },
          {
            headers: {
              Authorization: `Bearer ${e.workerToken}`,
              "Content-Type": "application/json",
              "anthropic-version": R,
              "anthropic-client-platform": py(),
              "User-Agent": Ds()
            },
            timeout: e.timeoutMs
          }
        )
      ).status
    };
  } catch (i) {
    let { kind: n, status: f } = ui(i);
    return { ok: !1, kind: n, status: f };
  }
}
var j = p(() => u({ results: T(u({ path: o(), error_reason: o().optional() })) })),
  x = /^chan_[A-Za-z0-9_-]{1,120}$/;
async function X5s(e) {
  let { door: r, items: i, signal: n } = e;
  if (!x.test(r.channelId))
    return (
      m("bridge_project_files_write", "invalid_channel"),
      { ok: !1, reason: "invalid_channel" }
    );
  let f = r.getBearerToken();
  if (!f) return (m("bridge_project_files_write", "no_token"), { ok: !1, reason: "no_token" });
  let b = `${r.apiBaseUrl}/v1/code/sessions/${encodeURIComponent(r.sessionId)}/worker/channels/${encodeURIComponent(r.channelId)}/files:write`,
    k = {
      session_id: r.sessionId,
      channel_id: r.channelId,
      worker_epoch: r.getWorkerEpoch(),
      files: i.map((s) => ({ path: s.path, content: s.content.toString("base64") }))
    },
    c;
  try {
    c = await Ht.post(b, k, {
      headers: _1r(f),
      timeout: 90000,
      maxBodyLength: 1 / 0,
      signal: n,
      validateStatus: (s) => s < 500
    });
  } catch (s) {
    if (Ht.isCancel(s))
      return (m("bridge_project_files_write", "aborted"), { ok: !1, reason: "aborted" });
    return (
      t(`[bridge] project files write request failed: ${d(s)}`),
      m("bridge_project_files_write", "request_failed"),
      { ok: !1, reason: "request_failed" }
    );
  }
  if (c.status !== 200) {
    let s = vbt(c.data);
    return (
      t(`[bridge] project files write refused: status=${c.status}${s ? ` [${s}]` : ""}`),
      m("bridge_project_files_write", "http_error"),
      { ok: !1, reason: "http_error", status: c.status, code: s }
    );
  }
  let _ = j().safeParse(c.data);
  if (!_.success)
    return (m("bridge_project_files_write", "bad_response"), { ok: !1, reason: "bad_response" });
  return (g("bridge_project_files_write"), { ok: !0, results: _.data.results });
}
export { l2e, vbt, zZe, RBo, _1r, xBo, Y5s, X5s };

//# sourceMappingURL=chunk-bxxdf8d7.js.map
