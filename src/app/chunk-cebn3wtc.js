// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, ye } from "./chunk-wrtp8qz8.js";
import { g } from "./chunk-brszmkb3.js";
import { Xe, k } from "./chunk-ajtyjx88.js";
import { l } from "./chunk-ewvf3tep.js";
import {
  NFs,
  $Fs,
  FFs,
  UFs,
  mIo,
  BFs,
  BVn,
  jFs,
  WFs,
  GFs,
  yIo,
  tUs,
  nUs,
  _Io,
  YWe,
  rUs
} from "./chunk-f7aya6cs.js";
import { cHr, Oe, Bt } from "./chunk-j0tbz6ra.js";
var C = "tengu_lantern_wick_release",
  x = "tengu_lantern_wick_braid",
  I = "tengu_lantern_wick_braid_text",
  w = "tengu_lantern_wick_braid_release",
  y = "tengu_lantern_wick_text_by_model",
  L = "tengu_lantern_wick_release_by_model";
function P(t, n, e) {
  return Ogo(t, e) ?? k(n, "");
}
function Ogo(t, n) {
  let e = k(t, {});
  if (typeof e !== "object" || e === null) return;
  let u = e;
  return [n, Xe(n), "default"].map((a) => u[a]).find((a) => typeof a === "string");
}
function S(t) {
  let n = typeof t === "string" ? t.trim() : "";
  return n ? `[${n}]` : "";
}
function _(t) {
  for (let n = t.length - 1; n >= 0; n--) {
    let e = t[n];
    if (e?.type === "user" && e.usageLimitNote !== void 0) return e.usageLimitNote;
  }
  return;
}
function* PTs(
  t,
  {
    resumeActive: n,
    isMainLoop: e,
    querySource: u,
    depth: a,
    model: N,
    toolUseContext: p,
    now: c,
    uuid: m
  }
) {
  let { agentContext: f } = p,
    W =
      !e &&
      u.startsWith("agent:") &&
      f.agentType !== "teammate" &&
      !(f.agentType === "subagent" && f.workflowRunId);
  if (n || !(e || W)) return t;
  let o = [];
  try {
    let s = e && a === 0 && cHr(t),
      d = s && _Io();
    if (e && a === 0 && !d) yIo();
    let R = !1,
      E = !1;
    if (e && (a > 0 || d)) {
      if (((E = tUs()), d && !E)) {
        let r = _(t);
        if (r !== "wrap_up" && r !== "near_limit") yIo();
      }
    }
    if (e ? E : _Io() && k(x, !1) === !0 && _(t) !== "wrap_up") {
      let r = (e ? null : mIo(k(I, ""))) ?? mIo(P(y, UFs, N)),
        i = r !== null ? "custom" : FFs(k($Fs, "off"));
      if (i !== "off") {
        if (
          (o.push(
            Oe({
              content: r ?? (i === "next-steps" ? BFs : NFs),
              isMeta: !0,
              turnCompanion: !0,
              usageLimitNote: "wrap_up",
              now: c,
              uuidFn: m
            })
          ),
          g(e ? "usage_limit_grace_wrapup" : "usage_limit_grace_wrapup_subagent", {
            next_steps: i === "next-steps",
            custom: i === "custom"
          }),
          (R = !0),
          e)
        )
          nUs();
      }
    }
    let G = !e || s ? YWe() : null,
      T = G !== null && G.extraUsageStatus === void 0,
      U;
    if (e) {
      let r = a === 0 ? _(t) : void 0;
      U = !T && (r === "wrap_up" || r === "near_limit");
    } else U = !T && _(t) === "wrap_up" && k(x, !1) === !0;
    if (U) {
      let r = (e ? "" : S(k(w, ""))) || S(P(L, C, N));
      if (r)
        (o.push(
          Oe({
            content: r,
            isMeta: !0,
            turnCompanion: !0,
            usageLimitNote: "release",
            now: c,
            uuidFn: m
          })
        ),
          g(e ? "usage_limit_grace_release" : "usage_limit_grace_release_subagent"));
    }
    if (e && a > 0 && rUs() && k(BVn, !1)) {
      if ((o.push(Bt(WFs, GFs)), !R))
        o.push(
          Oe({
            content: jFs,
            isMeta: !0,
            turnCompanion: !0,
            usageLimitNote: "near_limit",
            now: c,
            uuidFn: m
          })
        );
      if ((g("usage_limit_near_wrapup"), !ye()))
        import("./chunk-atd2wcj4.js")
          .then(({ performRateLimitCheckpoint: r }) =>
            r({ todos: p.getAppState().todos[p.agentId ?? q()] ?? [], trigger: "near_limit" })
          )
          .catch(() => {});
    }
  } catch (s) {
    l(s);
  }
  let A = [];
  for (let s of o) if ((yield s, s.type === "user")) A.push(s);
  return A.length === 0 ? t : [...t, ...A];
}
export { Ogo, PTs };

//# sourceMappingURL=chunk-cebn3wtc.js.map
