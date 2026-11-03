// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { So } from "./chunk-wrtp8qz8.js";
import { f } from "./chunk-brszmkb3.js";
import { ri, t2 } from "./chunk-63a6mqbs.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { _, gW, Hb } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { o, M, T, u, Ue, A } from "./chunk-0bqrj5ah.js";
import { createHash as w } from "crypto";
import { realpath as P, stat as x } from "fs/promises";
var A5t = "anthropic/permissionAsks";
function Wvi() {
  return { experimental: { [A5t]: { v: 1 } } };
}
var W = p(() => u({ experimental: u({ [A5t]: u({ v: A(1) }) }) })),
  C = "anthropic/permissionQuestion",
  k = 32,
  b = 2000,
  O = 1024,
  E = new RegExp(`[${Hb}]+`, "gu");
function XYe(n) {
  return gW(n.replace(E, "\uFFFD"));
}
var R = p(() => o().regex(/^[0-9a-f]{64}$/)),
  z = p(() => Ue({ v: A(1), approved: Ue({ ask_digest: R(), attested: M() }).optional() })),
  Z = p(() =>
    Ue({
      v: A(1),
      outcome: A("needs_approval"),
      ask_digest: R(),
      reasons: T(
        Ue({
          reason: o().min(1).max(b),
          classifier_approvable: M(),
          circuit_breaker: o().max(64).optional(),
          also: T(o().max(64)).max(k).optional()
        })
      )
        .min(1)
        .max(k)
    })
  );
function Kcr(n) {
  let e = mn(n) ? n[A5t] : void 0;
  if (e === void 0) return { kind: "absent" };
  if (typeof e !== "string" || e.length > O) return { kind: "unreadable" };
  let r = z().safeParse(ot(e, !1)).data;
  if (r === void 0) return { kind: "unreadable" };
  return r.approved === void 0
    ? { kind: "can_ask" }
    : { kind: "approved", askDigest: r.approved.ask_digest, attested: r.approved.attested };
}
function Vcr(n, e) {
  return {
    reason: XYe(n.reason),
    classifier_approvable: e && !t2(n),
    ...(n.circuitBreaker !== void 0 && { circuit_breaker: n.circuitBreaker }),
    ...(n.also !== void 0 && { also: [...n.also] })
  };
}
function ZAn(n) {
  if (n?.type === "safetyCheck") return [n];
  return n?.type === "subcommandResults"
    ? [...n.reasons.values()].flatMap((e) => ZAn(e.decisionReason))
    : [];
}
function v({ matchedAskRule: n, decisionReason: e }) {
  return [
    ...(n?.ruleBehavior === "ask" ? [g(n)] : []),
    ...(e?.type === "rule" && e.rule.ruleBehavior === "ask" ? [g(e.rule)] : []),
    ...(e?.type === "other" ? [S(e.reason)] : []),
    ...(e?.type === "subcommandResults"
      ? [...e.reasons.values()].flatMap((r) => (r.behavior === "ask" ? v(r) : []))
      : [])
  ];
}
function g(n) {
  return S(
    `A permission rule says to ask a person before a call like this one: '${dn(n.ruleValue)}'`
  );
}
function S(n) {
  return { type: "safetyCheck", reason: n, classifierApprovable: !1 };
}
function j(n, e, { path: r, identity: c }, s) {
  return w("sha256")
    .update(_([n, e, r, c ?? null, s]))
    .digest("hex");
}
function Q(n, e, r, c) {
  let s = (a) => Vcr(a, a.classifierApprovable),
    t = ZAn(r.decisionReason).map(s),
    d = v(r).map(s),
    m =
      d.length === 0
        ? t
        : [
            ...t.toSorted(
              (a, y) => Number(a.classifier_approvable) - Number(y.classifier_approvable)
            ),
            ...d
          ].map((a) => ({ ...a, classifier_approvable: !1 })),
    i = ri(m, _);
  if (i.length === 0 || i.length > k) return;
  if (i.some((a) => a.reason.length > b)) return;
  return { v: 1, outcome: "needs_approval", ask_digest: j(n.name, e, c, i), reasons: i };
}
async function hQr(n, e, r, c, s) {
  let t = Kcr(n);
  if (t.kind === "absent") return "as_without_the_key";
  if (s === void 0)
    return t.kind === "approved" ? l(e, "question_changed", h) : "as_without_the_key";
  if (t.kind === "unreadable")
    return l(
      e,
      "asks_key_unreadable",
      `${s.message} That needs a person's approval, and this server could not read its caller's offer to ask for one, so nobody was asked. Retrying won't help.`
    );
  let d = So(c).cwd,
    m = {
      path: d,
      identity: await Promise.all([P(d), x(d, { bigint: !0 })]).then(
        ([a, y]) => (a === d ? `${y.dev}:${y.ino}` : void 0),
        () => {
          return;
        }
      )
    };
  if (m.identity === void 0)
    return t.kind === "approved"
      ? l(e, "question_changed", h)
      : l(
          e,
          "start_folder_unconfirmed",
          `${s.message} That needs a person's approval, and nobody was asked, because the working directory was moved, is gone or cannot be read. Change directory first, then send the call again.`
        );
  let i = Q(e, r, s, m);
  if (i === void 0)
    return l(
      e,
      "question_too_large",
      `${s.message} The permission check's objections are too many, or one is too long, for this server to put to a person, so nobody was asked. Send smaller calls, or use shorter paths.`
    );
  switch (t.kind) {
    case "can_ask":
      return (
        f("mcp_serve_plain_call", "asked"),
        {
          rejection: `${e.name} was not run: ${s.message} A person has to approve this call, and none did. Tell the user what you wanted to run and why.`,
          meta: { [C]: i }
        }
      );
    case "approved":
      if (!t.attested)
        return l(
          e,
          "approval_not_from_person",
          "the approval sent with this call did not come from a person, and only a person's counts. Tell the user what you wanted to run and why."
        );
      return i.ask_digest === t.askDigest ? "run" : l(e, "question_changed", h);
  }
}
var h =
  "what a person approved is no longer what this call would do: the working directory, or what the permission check found, has changed since, or the working directory was moved, is gone or cannot be read. If it was moved, is gone or cannot be read, change directory first. Then send the call again to have it checked afresh.";
function l(n, e, r) {
  return (f("mcp_serve_plain_call", e), { rejection: `${n.name} was not run: ${r}` });
}
export { A5t, Wvi, XYe, Kcr, Vcr, ZAn, hQr };

//# sourceMappingURL=chunk-xdktexnk.js.map
