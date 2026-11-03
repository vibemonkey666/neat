// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { lKt, Gri, k, Re, ue } from "./chunk-ajtyjx88.js";
import { c } from "./chunk-acd8w9vv.js";
import { S_, i } from "./chunk-cj37hmns.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { Hu } from "./chunk-dvghjmtr.js";
import { mA, Cm, K_ } from "./chunk-7zgz07kc.js";
import { tm } from "./chunk-h2tyaevk.js";
import { Ti } from "./chunk-0v8111n2.js";
import { o, v, u, A } from "./chunk-0bqrj5ah.js";
var T = "tengu_gentle_hammock",
  L = "tengu_golden_popcorn",
  D = 4096,
  j = 1024,
  M = 604800000,
  N = 8192;
function D5s() {
  let e = i.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? k(L, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0;
}
function O(e) {
  return e === "ccr_worker"
    ? i.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES
    : i.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}
function U(e) {
  return e === "ccr_worker" ? j : D;
}
function H(e) {
  if (i.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if (Cm() !== void 0 && !K_(e)) return "proxy";
  let n = mA();
  if (n?.cert !== void 0 || n?.key !== void 0) return "mtls";
  if (i.NODE_EXTRA_CA_CERTS) {
    let r = tm();
    if (!(
      nr() ||
      (i.CLAUDE_CODE_ENTRYPOINT === "local-agent" &&
        (r === void 0 || r.NODE_EXTRA_CA_CERTS !== void 0))
    ))
      return "custom_ca";
  }
  return;
}
function cjt(e, n, r, s = "api") {
  if (!Hu(e)) return;
  let d = typeof n === "string" ? n.length : void 0,
    l = O(s);
  if (l === !1) return { gzip: !1, reason: "env_off", bodyChars: d };
  if (!S_()) return { gzip: !1, reason: "not_bun_runtime", bodyChars: d };
  if (d === void 0) return { gzip: !1, reason: "non_string_body", bodyChars: d };
  if (d < U(s)) return { gzip: !1, reason: "below_min_size", bodyChars: d };
  if (l === !0)
    return Ti().gzipRequestBody.rejectedThisProcess
      ? { gzip: !1, reason: "latched_off", bodyChars: d }
      : { gzip: !0, bodyChars: d };
  let _ = H(e);
  if (_ !== void 0) return { gzip: !1, reason: _, bodyChars: d };
  if (s === "ccr_worker" && !k(T, !1)) return { gzip: !1, reason: "flag_off", bodyChars: d };
  if (ee(r)) return { gzip: !1, reason: "latched_off", bodyChars: d };
  return { gzip: !0, bodyChars: d };
}
var Y = p(() => u({ type: A("error"), error: u({ type: o(), message: o() }) })),
  F = p(() => u({ latchedAt: v().finite(), status: v() })),
  J = p(() => u({ error: o(), reason: o() })),
  K = [
    "The request body is not valid JSON",
    "Failed to parse request: could not parse request body as JSON"
  ],
  G = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;
function R(e) {
  return { status: e.status, header: (n) => e.headers.get(n) ?? void 0, bodyText: () => W(e) };
}
function Q(e) {
  return (e.header("request-id")?.startsWith("req_") ?? !1) || e.header("cf-ray") !== void 0;
}
async function W(e) {
  let n = e.clone().body?.getReader();
  if (!n) return "";
  let r = new TextDecoder(),
    s = "",
    d = N;
  try {
    while (d > 0) {
      let { done: l, value: _ } = await n.read();
      if (l) break;
      let y = _.subarray(0, d);
      ((d -= y.byteLength), (s += r.decode(y, { stream: !0 })));
    }
  } catch {
  } finally {
    n.cancel().catch(() => {});
  }
  return s;
}
function Z(e) {
  let n;
  try {
    n = te(e);
  } catch {
    return G.test(e.trimEnd());
  }
  let r = Y().safeParse(n);
  if (r.success) return K.some((d) => r.data.error.message.startsWith(d));
  let s = J().safeParse(n);
  return s.success && s.data.reason === "bad_json" && G.test(s.data.error);
}
async function h(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!Q(e)) return "non_anthropic_rejection";
  if (e.status === 400 && Z(await e.bodyText())) return "invalid_json_at_origin";
  return null;
}
async function yBo(e) {
  if (e.ok) return null;
  return h(R(e));
}
async function V(e) {
  if ((await h(e)) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response";
}
function X() {
  let e;
  try {
    e = ue().gzipRequestBodiesLatchedOff;
  } catch {
    return "unavailable";
  }
  if (e === void 0) return;
  let n = F().safeParse(e);
  return n.success ? n.data : "malformed";
}
function E(e, n) {
  Re((r) => {
    let s = F().safeParse(r.gzipRequestBodiesLatchedOff);
    return (s.success ? s.data.latchedAt === e : r.gzipRequestBodiesLatchedOff !== void 0)
      ? { ...r, gzipRequestBodiesLatchedOff: void 0 }
      : r;
  }, n);
}
function ee(e) {
  let n = Ti().gzipRequestBody;
  if (n.latchedOff) return !0;
  if (n.persistedLatchChecked) return !1;
  let r = X();
  if (r === "unavailable") return !1;
  if (((n.persistedLatchChecked = !0), r === void 0)) return !1;
  if (r === "malformed")
    return (
      E(void 0, e),
      a("tengu_gzip_request_body_latch_cleared", { reason: c("malformed") }),
      !1
    );
  let s = Date.now() - r.latchedAt;
  if (s >= 0 && s < M) return ((n.latchedOff = !0), (n.persistedLatchInEffect = !0), !0);
  return (
    E(r.latchedAt, e),
    a("tengu_gzip_request_body_latch_cleared", {
      reason: s < 0 ? c("malformed") : c("expired"),
      latchedStatus: r.status,
      latchedAgeHours: Math.max(0, Math.round(s / 3600000))
    }),
    !1
  );
}
function q() {
  let e = Ti().gzipRequestBody;
  ((e.latchedOff = !0), (e.rejectedThisProcess = !0), (e.persistedLatchChecked = !0));
}
function C({ persist: e, status: n, storageV5: r, rollout: s = "api" }) {
  q();
  let d = Ti().gzipRequestBody;
  if (e && !d.persistedLatchInEffect && O(s) !== !0)
    ((d.persistedLatchInEffect = !0),
      Re((l) => ({ ...l, gzipRequestBodiesLatchedOff: { latchedAt: Date.now(), status: n } }), r));
  return d.persistedLatchInEffect ? "persisted" : "process";
}
function x(e, n) {
  switch (e) {
    case "api":
      if (n === "fell_back") f("api_gzip_request_body", "fell_back");
      else if (Ti().once("gzip_request_body_ok")) g("api_gzip_request_body");
      return;
    case "ccr_worker":
      if (n === "fell_back") f("ccr_worker_gzip_request_body", "fell_back");
      else if (Ti().once("ccr_worker_gzip_request_body_ok")) g("ccr_worker_gzip_request_body");
      return;
    case "frame_publish":
      if (n === "fell_back") f("artifact_publish_gzip_request_body", "fell_back");
      else if (Ti().once("artifact_publish_gzip_request_body_ok"))
        g("artifact_publish_gzip_request_body");
      return;
  }
}
function Jfn(e = "api") {
  x(e, "sent");
}
function ne(e, n) {
  if (e !== "ccr_worker") return;
  let r = Ti().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (r.has(n.reason)) return;
  (r.add(n.reason),
    a("tengu_gzip_request_body_skipped", {
      rollout: c(e),
      reason: c(n.reason),
      requestBodyChars: n.bodyChars
    }));
}
function S({
  rejection: e,
  status: n,
  viaCloudflare: r,
  retryOutcome: s,
  retryStatus: d,
  latched: l,
  bodyChars: _,
  rollout: y = "api"
}) {
  (x(y, "fell_back"),
    t(
      `[API REQUEST] gzip request body rejected (rollout=${y} status=${n} kind=${e}); re-sent uncompressed \u2192 ${s}${d !== void 0 ? ` status=${d}` : ""}; gzip latched off: ${l}`,
      { level: "warn" }
    ),
    a("tengu_gzip_request_body_fallback", {
      rollout: c(y),
      rejection: c(e),
      status: n,
      viaCloudflare: r,
      retryOutcome: c(s),
      retryStatus: d,
      latched: c(l),
      requestBodyChars: _
    }));
}
async function w({
  rejection: e,
  first: n,
  resend: r,
  facts: s,
  aborted: d,
  bodyChars: l,
  storageV5: _,
  rollout: y
}) {
  let z = {
      rejection: e,
      status: n.status,
      viaCloudflare: n.header("cf-ray") !== void 0,
      bodyChars: l,
      rollout: y
    },
    m;
  try {
    m = await r();
  } catch (I) {
    throw (
      S({
        ...z,
        retryOutcome: d() ? "aborted" : "network_error",
        retryStatus: void 0,
        latched: C({ persist: !1, status: n.status, storageV5: _, rollout: y })
      }),
      I
    );
  }
  let b = s(m),
    B = await V(b),
    P = C({
      persist: y !== "ccr_worker" && e === "non_anthropic_rejection" && B === "api_response",
      status: n.status,
      storageV5: _,
      rollout: y
    });
  return (S({ ...z, retryOutcome: B, retryStatus: b.status, latched: P }), m);
}
async function _Bo({
  res: e,
  dispatch: n,
  finalInit: r,
  identityBody: s,
  clientRequestId: d,
  storageV5: l,
  rollout: _ = "api"
}) {
  let y = await yBo(e);
  if (y === null) return e;
  (q(), e.body?.cancel().catch(() => {}));
  let { compress: z, ...m } = r,
    b = { ...m, body: s };
  if (d !== void 0) {
    let B = Ti().gzipRequestBody.telemetryByClientRequestId.get(d);
    bBo(d, {
      requestBodyEncoding: "identity",
      requestBodyChars: s.length,
      gzipFallbackStatus: e.status,
      ...(B !== void 0 && "gzipBlocks" in B && { gzipBlocks: B.gzipBlocks })
    });
  }
  return w({
    rejection: y,
    first: R(e),
    resend: () => n(b),
    facts: R,
    aborted: () => r.signal?.aborted === !0,
    bodyChars: s.length,
    storageV5: l,
    rollout: _
  });
}
async function H5s({
  answer: e,
  facts: n,
  resendIdentity: r,
  aborted: s,
  bodyChars: d,
  storageV5: l,
  rollout: _
}) {
  let y = n(e),
    z = await h(y);
  if (z === null) return e;
  return (
    q(),
    w({
      rejection: z,
      first: y,
      resend: r,
      facts: n,
      aborted: s,
      bodyChars: d,
      storageV5: l,
      rollout: _
    })
  );
}
function bbt(e, n) {
  return async (r, s, d) => {
    let l = cjt(r, s.body, n, e);
    if (!l?.gzip) {
      if (l !== void 0) ne(e, l);
      return d(s);
    }
    Jfn(e);
    let _ = { ...s, compress: "gzip", body: lKt(s.body) },
      y = await d(_);
    return _Bo({
      res: y,
      dispatch: d,
      finalInit: _,
      identityBody: s.body,
      clientRequestId: void 0,
      storageV5: n,
      rollout: e
    });
  };
}
function bBo(e, n) {
  Ti().gzipRequestBody.telemetryByClientRequestId.set(e, n);
}
function Qfn(e, n) {
  if (e === null) return;
  let r = Ti().gzipRequestBody.telemetryByClientRequestId,
    s = r.get(e);
  if (s?.requestBodyEncoding !== "gzip") return;
  r.set(e, {
    ...s,
    gzipBlocks: s.gzipBlocks?.outcome === "as_blocks" ? { ...s.gzipBlocks, outcome: "rejected" } : n
  });
}
function L5s(e, n) {
  Ti().gzipRequestBody.dispatchAtByClientRequestId.set(e, n);
}
function N5s(e) {
  if (e === void 0) return;
  let n = Ti().gzipRequestBody.dispatchAtByClientRequestId,
    r = n.get(e);
  return (n.delete(e), r);
}
function ujt(e) {
  if (e === void 0) return;
  let n = Ti().gzipRequestBody.telemetryByClientRequestId,
    r = n.get(e);
  return (n.delete(e), r);
}
function C9n(e) {
  if (e === void 0) return {};
  return {
    requestBodyEncoding: c(e.requestBodyEncoding),
    requestBodyChars: e.requestBodyChars,
    ...(e.requestBodyEncoding === "gzip" &&
      e.requestBodyGzipLevel !== void 0 && { requestBodyGzipLevel: e.requestBodyGzipLevel }),
    ...("requestPrepareMs" in e &&
      e.requestPrepareMs !== void 0 && { requestPrepareMs: e.requestPrepareMs }),
    ...("gzipBlocks" in e &&
      e.gzipBlocks !== void 0 && {
        requestBodyGzipBlocksMode: e.gzipBlocks.mode,
        requestBodyGzipBlocksOutcome: c(e.gzipBlocks.outcome),
        ...(e.gzipBlocks.planned !== void 0 && {
          requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount,
          requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount,
          requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes,
          requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs,
          ...(e.gzipBlocks.planned.gzippedBytes !== void 0 && {
            requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes
          }),
          requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes,
          requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount
        })
      }),
    ...("gzipSkipReason" in e && { gzipSkipReason: c(e.gzipSkipReason) }),
    ...("gzipFallbackStatus" in e && { gzipFallback: !0, gzipFallbackStatus: e.gzipFallbackStatus })
  };
}
Gri(cjt);
export { D5s, cjt, yBo, Jfn, _Bo, H5s, bbt, bBo, Qfn, L5s, N5s, ujt, C9n };

//# sourceMappingURL=chunk-wfjw07k3.js.map
