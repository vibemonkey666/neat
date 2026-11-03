// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { R, d } from "./chunk-fs43t96t.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { Yye } from "./chunk-wany0nxw.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { xte } from "./chunk-jz8fz1z5.js";
import { H4, Ld } from "./chunk-j0tbz6ra.js";
import { vUn, EUn, WCs } from "./chunk-6x5bx278.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { o, M, oe, u, me } from "./chunk-0bqrj5ah.js";
import { randomUUID as V } from "crypto";
var IDt = "confirm_";
function G8e(e) {
  let r = ae(e);
  return H4() && r.shouldAvoidPermissionPrompts !== !0 && r.mode !== "dontAsk";
}
async function ift(e) {
  let { toolUseContext: r, source: i } = e;
  if (!G8e(r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  let s;
  try {
    s = await b(e);
  } catch (n) {
    if (r.abortController.signal.aborted)
      (t(`confirmWithUser(${i}): ask aborted with the turn: ${d(n)}`), (s = { kind: "aborted" }));
    else (l(n), (s = { kind: "unanswered", reason: "error" }));
  }
  let a = { source_hash: cn(i) };
  switch (s.kind) {
    case "chose":
    case "declined":
    case "aborted":
      g("permission_confirm_with_user", { ...a, answer: c(s.kind) });
      break;
    case "unanswered":
      if (s.reason === "error") m("permission_confirm_with_user", "error", a);
      else f("permission_confirm_with_user", s.reason, a);
      break;
  }
  return s;
}
async function b({
  canUseTool: e,
  toolUseContext: r,
  source: i,
  header: s,
  question: a,
  choices: n,
  personOnly: k
}) {
  let h = xte.inputSchema.safeParse({
    questions: [
      {
        question: a,
        header: s,
        options: n.map(({ label: W, description: A }) => ({ label: W, description: A ?? "" })),
        multiSelect: !1
      }
    ],
    metadata: { source: i }
  });
  if (!h.success)
    throw new R(
      `confirmWithUser(${i}): the question does not satisfy the AskUserQuestion schema: ${h.error.message}`,
      "confirmWithUser: the question does not satisfy the AskUserQuestion schema"
    );
  let U = await xte.checkPermissions(h.data, r);
  if (U.behavior !== "ask")
    throw new R(
      `confirmWithUser(${i}): AskUserQuestion.checkPermissions answered ${U.behavior}, not ask`,
      "confirmWithUser: AskUserQuestion.checkPermissions did not answer ask"
    );
  let w = { ...U, forcedByCaller: !0, ...(k === !0 && { personOnly: !0 }) },
    _ = `${IDt}${V()}`,
    y = await e(xte, h.data, r, Ld({ content: [] }), _, w).finally(() => Yye(r.session, _));
  return P(y, w, r.abortController.signal, a, n);
}
function P(e, r, i, s, a) {
  if (vUn(e, r)) return { kind: "unanswered", reason: "no_one_to_ask" };
  if (i.aborted) return { kind: "aborted" };
  switch (e.behavior) {
    case "allow": {
      let n = x().safeParse(e.updatedInput);
      if (!n.success) return { kind: "unanswered", reason: "no_selection" };
      if (n.data.followUp === !0) return { kind: "declined" };
      let k = T(n.data.answers?.[s]);
      if (k === "") return { kind: "unanswered", reason: "no_selection" };
      let h = a.find((U) => C(U.label) === k);
      return h !== void 0
        ? { kind: "chose", value: h.value }
        : { kind: "declined", typedAnswer: k };
    }
    case "deny":
      if (e.decisionReason.type === "other" && WCs(e.decisionReason.reason))
        return { kind: "unanswered", reason: "host_closed" };
      if (
        e.decisionReason.type === "asyncAgent" ||
        (e.decisionReason.type === "other" && EUn(e.decisionReason.reason))
      )
        return { kind: "unanswered", reason: "no_one_to_ask" };
      return { kind: "declined" };
    case "ask":
      return { kind: "declined" };
  }
}
var x = p(() => u({ answers: me(o(), oe()).optional(), followUp: M().optional() }));
function T(e) {
  if (typeof e === "string") return C(e);
  if (Array.isArray(e)) return C(e.filter((r) => typeof r === "string").join(", "));
  return "";
}
function C(e) {
  return e.replace(/\s+/g, " ").trim();
}
export { IDt, G8e, ift };

//# sourceMappingURL=chunk-6477an49.js.map
