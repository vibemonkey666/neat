// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { p } from "./chunk-qmkm2x59.js";
import { X } from "./chunk-4hww8411.js";
import { A4 } from "./chunk-tbj8hqy2.js";
import { P_t } from "./chunk-sdz0xp27.js";
import { dye, LG } from "./chunk-vxpcbg5q.js";
import { o, v, M, oe, yt, Gr, me, B, A } from "./chunk-0bqrj5ah.js";
var iCr = "Mcp-Name",
  b = 250,
  H = 30000,
  J = 2000,
  z = 5,
  L = 16,
  g = p(() =>
    yt({
      taskId: o().min(1).max(dye).regex(LG),
      status: B(["working", "input_required", "completed", "failed", "cancelled"]),
      statusMessage: o()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      createdAt: o()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      lastUpdatedAt: o()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      ttlMs: v()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      pollIntervalMs: v()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional()
    })
  ),
  oCi = p(() => g().extend({ resultType: A("task") })),
  jxs = "com.anthropic/agent-task",
  Q = 20000,
  W = 64,
  Y = p(() =>
    yt({
      sessionId: o()
        .max(dye)
        .regex(LG)
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      modelImmediateResponse: o()
        .max(Q)
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      taskId: o()
        .max(dye)
        .regex(LG)
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      merged: M()
        .nullish()
        .transform((e) => e ?? void 0)
        .optional(),
      kind: o()
        .max(W)
        .regex(LG)
        .nullish()
        .transform((e) => e ?? void 0)
        .optional()
    })
  );
function sCi(e) {
  let r = Lhi(e);
  if (r === void 0) return;
  let a = {
    ...(r.sessionId !== void 0 && { sessionId: r.sessionId }),
    ...(r.taskId !== void 0 && { taskId: r.taskId }),
    ...(r.kind !== void 0 && { kind: r.kind }),
    ...(r.merged !== void 0 && { merged: r.merged })
  };
  return Object.keys(a).length > 0 ? { [jxs]: a } : void 0;
}
function Lhi(e) {
  if (typeof e !== "object" || e === null) return;
  let r = e[jxs];
  if (r === void 0) return;
  let a = Y().safeParse(r);
  return a.success ? a.data : void 0;
}
var Z = p(() =>
    yt({
      method: o().min(1).max(dye).regex(LG),
      params: me(o(), oe())
        .nullish()
        .transform((e) => e ?? void 0)
        .optional()
    })
  ),
  ee = p(() =>
    Gr("status", [
      g().extend({ status: A("working") }),
      g().extend({
        status: A("input_required"),
        inputRequests: me(o().min(1).max(512), Z())
          .nullish()
          .transform((e) => e ?? {})
      }),
      g().extend({
        status: A("completed"),
        result: me(o(), oe())
          .nullish()
          .transform((e) => e ?? {})
      }),
      g().extend({
        status: A("failed"),
        error: yt({
          code: v()
            .nullish()
            .transform((e) => e ?? void 0)
            .optional(),
          message: o()
            .nullish()
            .transform((e) => e ?? void 0)
            .optional(),
          data: oe().optional()
        })
          .nullish()
          .transform((e) => e ?? {})
      }),
      g().extend({ status: A("cancelled") })
    ])
  );
class Wxs extends Error {
  constructor(e) {
    super(e);
    this.name = "TaskInputUnservableError";
  }
}
function WHt(e) {
  return Math.min(H, Math.max(b, e ?? J));
}
function S(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (Object.prototype.toString.call(e) === "[object DOMException]") return !1;
  if (
    e instanceof Error &&
    (e.name === "AbortError" ||
      e.name === "TimeoutError" ||
      e.message.startsWith("SSE error: ") ||
      e.message.startsWith("Streamable HTTP error: "))
  )
    return !1;
  return (
    "code" in e && typeof e.code === "number" && "message" in e && typeof e.message === "string"
  );
}
function te(e) {
  return (
    S(e) ||
    (e instanceof Error &&
      (e.name === "UnauthorizedError" || ("status" in e && typeof e.status === "number")))
  );
}
function q(e) {
  if (j(e)) return !1;
  return e === -32603 || e === -32700 || (e >= -32099 && e <= -32000);
}
function j(e) {
  return e === -32021 || e === -32003;
}
function K1n(e) {
  return e === -32601 || j(e);
}
var H9e = Symbol("TASK_DRIVE_QUIET_STOP");
async function Awo({
  task: e,
  request: r,
  signal: a,
  onStatus: K,
  resolveInputRequest: N,
  log: d,
  errorText: l = A4,
  isSignInRefusal: D,
  answeredKeys: U,
  outstandingInputKeys: F,
  endsAtFirstFailedPoll: G,
  holdsProcess: V
}) {
  let { taskId: s } = e,
    y = { [iCr]: s },
    x = U ?? new Set(),
    P = new Set(),
    I = new Map(),
    h = F ?? { served: new Set(), capLogged: !1 },
    E = WHt(e.pollIntervalMs),
    T,
    m = 0,
    k = 0,
    u = () => {
      if (a.reason === H9e) return;
      r("tasks/cancel", { taskId: s }, { headers: y, signal: AbortSignal.timeout(P_t) }).then(
        () => d?.(`task ${s}: cancel sent`),
        (i) => d?.(`task ${s}: cancel failed: ${l(i)}`)
      );
    },
    C = !0;
  for (;;) {
    if (C) C = !1;
    else {
      let n = T ?? E;
      ((T = void 0), await X(n, a, { unref: V === !1 }));
    }
    if (a.aborted)
      return (u(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } });
    let i;
    try {
      let n = await r("tasks/get", { taskId: s }, { headers: y, signal: a }),
        c = ee().safeParse(n);
      if (!c.success)
        return (
          u(),
          {
            status: "error",
            error: {
              kind: "malformed",
              message: `Malformed tasks/get response for task ${s}: ${c.error.message}`
            }
          }
        );
      ((i = c.data), (m = 0));
    } catch (n) {
      if (a.aborted)
        return (u(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } });
      if (S(n) && !q(n.code))
        return {
          status: "error",
          error: {
            kind: "poll_failed",
            message: `tasks/get failed for task ${s}: ${n.message}`,
            code: n.code,
            data: n.data
          }
        };
      let c = await D?.(n).catch(
        (f) => (d?.(`task ${s}: could not tell whether the server asks for a sign-in: ${l(f)}`), !1)
      );
      if (a.aborted)
        return (u(), { status: "error", error: { kind: "cancelled", message: "Task cancelled" } });
      if (c === !0)
        return {
          status: "error",
          error: {
            kind: "poll_failed",
            message: `a poll of task ${s} was refused: ${l(n)}`,
            signInRefused: !0
          }
        };
      m += 1;
      let _ = G?.() === !0 ? 1 : z;
      if ((d?.(`task ${s}: poll failure ${m}/${_}: ${l(n)}`), m >= _))
        return {
          status: "error",
          error: {
            kind: "poll_failed",
            ...(te(n)
              ? {
                  message: `${m} polls of task ${s} failed in a row, the last with an error answer: ${l(n)}`,
                  answered: !0
                }
              : { message: `Lost contact with task ${s} after ${m} failed polls: ${l(n)}` })
          }
        };
      continue;
    }
    if ((K?.(i), (E = WHt(i.pollIntervalMs ?? E)), i.status !== "input_required")) k = 0;
    switch (i.status) {
      case "working":
        continue;
      case "completed":
        return { status: "completed", result: i.result };
      case "failed":
        return {
          status: "error",
          error: {
            kind: "failed",
            message: i.error.message ?? i.statusMessage ?? "Task failed",
            code: i.error.code,
            data: i.error.data
          }
        };
      case "cancelled":
        return {
          status: "error",
          error: {
            kind: "cancelled",
            message: i.statusMessage ?? "Task was cancelled by the server"
          }
        };
      case "input_required": {
        let n = Object.entries(i.inputRequests).filter(([t]) => !x.has(t));
        if (n.length === 0) continue;
        let c = n.filter(([t]) => !P.has(t));
        if (c.length === 0)
          return (
            u(),
            {
              status: "error",
              error: {
                kind: "unsupported_input",
                message: `Task ${s}: the server rejected the submitted answer to ${n.map(([t]) => t).join(", ")} and still requires input`
              }
            }
          );
        let _ = c.filter(([t]) => {
          if (h.served.has(t)) return !0;
          if (h.served.size >= L) {
            if (!h.capLogged)
              (d?.(`task ${s}: reached ${L} distinct input-request keys; ignoring new keys`),
                (h.capLogged = !0));
            return !1;
          }
          return (h.served.add(t), !0);
        });
        if (_.length === 0) continue;
        let f = {};
        for (let [t, w] of _) {
          if (a.aborted) break;
          let R;
          if (I.has(t)) R = I.get(t);
          else {
            try {
              R = await N(t, w);
            } catch (O) {
              if (O instanceof Wxs)
                return (
                  u(),
                  {
                    status: "error",
                    error: {
                      kind: "input_unservable",
                      message:
                        "the task asked the user a question that this session cannot show yet, so Claude Code asked the server to cancel it"
                    }
                  }
                );
              throw O;
            }
            if (R === void 0)
              return (
                u(),
                {
                  status: "error",
                  error: {
                    kind: "unsupported_input",
                    message: `Task ${s} asked for ${w.method}, which this client cannot serve`
                  }
                }
              );
            I.set(t, R);
          }
          f[t] = R;
        }
        if (a.aborted)
          return (
            u(),
            { status: "error", error: { kind: "cancelled", message: "Task cancelled" } }
          );
        try {
          (await r("tasks/update", { taskId: s, inputResponses: f }, { headers: y, signal: a }),
            (k = 0));
          for (let t of Object.keys(f)) x.add(t);
          d?.(`task ${s}: answered ${Object.keys(f).join(", ")}`);
        } catch (t) {
          if (a.aborted)
            return (
              u(),
              { status: "error", error: { kind: "cancelled", message: "Task cancelled" } }
            );
          if (S(t) && K1n(t.code))
            return {
              status: "error",
              error: {
                kind: "poll_failed",
                message: `tasks/update failed for task ${s}: ${t.message}`,
                code: t.code,
                data: t.data
              }
            };
          if (S(t) && !q(t.code)) {
            for (let w of Object.keys(f)) P.add(w);
            (d?.(
              `task ${s}: tasks/update JSON-RPC error ${t.code} (${t instanceof Error ? t.message : String(t)}); re-polling for real state`
            ),
              (T = b));
            continue;
          }
          if (((k += 1), d?.(`task ${s}: tasks/update failure ${k}/${z}: ${l(t)}`), k >= z))
            return {
              status: "error",
              error: {
                kind: "poll_failed",
                message: `Lost contact with task ${s} after ${k} failed tasks/update attempts: ${l(t)}`,
                phase: "update"
              }
            };
          T = b;
          continue;
        }
        T = b;
        continue;
      }
    }
  }
}
export { iCr, oCi, jxs, sCi, Lhi, Wxs, WHt, K1n, H9e, Awo };

//# sourceMappingURL=chunk-txa8r69x.js.map
