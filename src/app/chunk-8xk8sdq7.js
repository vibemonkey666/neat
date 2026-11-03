// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { _ } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Z } from "./chunk-p27rr8yn.js";
import { Itr, dR, YE, iI, uR, X_n, vEt, As, z0e } from "./chunk-ajtyjx88.js";
import { a } from "./chunk-4cgvah10.js";
import { m } from "./chunk-brszmkb3.js";
import { nr, Gg } from "./chunk-tcvjb2c0.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { Ls } from "./chunk-at88wjsn.js";
import { Lt, Em, jz } from "./chunk-r1dvrqha.js";
import { QT } from "./chunk-6dwr3g2n.js";
import { Ct, lCe } from "./chunk-khq9hq2s.js";
import { Ih, pb, KSt, sh, ae } from "./chunk-ar6ynjt8.js";
import {
  Zv,
  cwt,
  QY,
  WJs,
  sCe,
  GJs,
  VGo,
  ttt,
  uwt,
  _Gt,
  T7,
  ntt,
  rR,
  Q8,
  k$,
  Tx
} from "./chunk-fh50nzzj.js";
import { FHt, Bte, m1 } from "./chunk-1vdj04pp.js";
import { COe } from "./chunk-etxcb881.js";
import { exs } from "./chunk-v3dqhn7m.js";
import { r3, cBe, Ip, gL, QOt, LIe, dme } from "./chunk-hkkvy507.js";
import { zkr } from "./chunk-ft3tfmt7.js";
import { WEs, zEs, G0n, z0n } from "./chunk-ajn1cnw7.js";
import { gr } from "./chunk-z2vz1f06.js";
import { H } from "./chunk-p8tprgqa.js";
import { _e } from "./chunk-n8wdmnah.js";
var J = "__artifactAsk",
  X = [
    "Claude wants to upload a file to this artifact.",
    "Claude wants to copy files from another artifact into this one.",
    "Claude wants to edit this artifact's data."
  ],
  ee = 64,
  FEs = 3;
function ne(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
var N = /"[^"]*"/g,
  F = "Let Claude read the comments on ";
function UEs(e) {
  return `${F}${e ? `"${e}"` : "this artifact"}?`;
}
function te(e) {
  if (!e.startsWith(F)) return;
  for (let n of e.matchAll(new RegExp(`${N.source}|\\?(?=\\s)`, "g")))
    if (n[0] === "?") return n.index + 1;
  return;
}
function S(e) {
  try {
    return e === void 0 ? void 0 : zkr(e);
  } catch {
    return;
  }
}
function N0n(e, n, t) {
  let s = Z().askCards.get(n);
  if (s === void 0 || s.reason !== t || S(e) !== s.input) return;
  return s.card;
}
function BEs(e, n = (t) => t) {
  let { request: t, script: s, text: o, documents: d, files: i, file: u, source: l } = e,
    p = [];
  if (H(t) && typeof t.method === "string" && typeof t.path === "string") {
    let g = H(t.query)
        ? new URLSearchParams(
            Object.entries(t.query).flatMap(([h, r]) => {
              let k = typeof r === "string" ? r : _(r);
              return k === void 0 ? [] : [[h, k]];
            })
          ).toString()
        : "",
      f = n(g === "" ? t.path : `${t.path}?${g}`);
    if (/^[A-Za-z]{1,16}$/.test(t.method) && /^[^\s\p{Cc}]+$/u.test(f)) {
      if ((p.push(`${t.method.toUpperCase()} ${f}`), t.body !== void 0))
        p.push(`Request body \xB7 ${E(x(t.body))}`);
    }
  }
  for (let g of [s, o])
    if (typeof g === "string" && g.trim() !== "") {
      let [f = "", ...h] = L(g.trim());
      p.push(`${E(h.length + 1)} \xB7 ${f}`);
    }
  if (d !== void 0) p.push(`${d} ${I(d, "document")}`);
  if (i !== void 0) {
    let g = i.count - i.names.length,
      f = i.names.map((r) => `"${r}"`),
      h = ne(g > 0 ? [...f, `${g} more`] : f);
    p.push(`${i.count} ${I(i.count, "file")} \xB7 ${h}`);
  }
  if (l !== void 0) p.push(`source: ${l}`);
  if (u !== void 0) p.push(`file: ${u}`);
  return p;
}
function x(e, n = new WeakSet()) {
  if (typeof e === "string") return L(e).length;
  if (typeof e !== "object" || e === null || n.has(e)) return 1;
  n.add(e);
  let t = Array.isArray(e) ? e : Object.values(e);
  return t.length === 0 ? 1 : t.reduce((s, o) => s + (typeof o === "string" ? 1 : x(o, n)), 2);
}
function L(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/);
}
function E(e) {
  return `${e} ${e === 1 ? "line" : "lines"}`;
}
function se(e, n, t, s = Z().askCardFacts.get(e)) {
  let o = Z(),
    d = o.askClassCards.get(e),
    i = s?.target,
    u = s?.values ?? [],
    l = s?.audience ?? "";
  if (
    (o.askClassCards.delete(e),
    o.askCardFacts.delete(e),
    s === void 0 ||
      s.generic === !0 ||
      n.behavior !== "ask" ||
      (n.decisionReason?.type !== "safetyCheck" && n.decisionReason?.type !== "other") ||
      n.decisionReason.reason.trim() === "")
  )
    return;
  let p = n.decisionReason.reason,
    g = p.indexOf(`

`),
    f = g === -1 ? p : p.slice(0, g),
    h =
      g === -1
        ? []
        : p
            .slice(g + 2)
            .split(
              `
`
            )
            .filter((b) => b !== ""),
    r = n.updatedInput ?? t,
    k = H(r) ? r[J] : void 0,
    y;
  if (k === void 0) {
    let C = X.find((T) => f.startsWith(T))?.length ?? te(f),
      A = C === void 0 ? f : f.slice(0, C),
      D = C === void 0 ? "" : f.slice(C).trim(),
      v = i?.title ?? "",
      P = v !== "" ? `"${v}"` : i?.url,
      R = [],
      U = (T) => h.some((Q) => Q.endsWith(T));
    if (P !== void 0 && !A.includes(P) && !U(P)) R.push(P);
    let O = i?.url;
    if (s?.foreign === !0 && O !== void 0 && !A.includes(O) && !R.includes(O) && !U(O)) R.push(O);
    if (D !== "") R.push(D);
    let Y = l === "" || f.replace(N, "").includes(l);
    y = { question: A, lines: R, values: [...h, ...(Y ? u : [...u, l])] };
  } else if (d !== void 0 && d.reason === f && S(k) === d.stamp) {
    let [b, ...C] = d.parts,
      A = l === "" || d.saysPublic;
    y = b === void 0 ? void 0 : { question: b, lines: C, values: A ? u : [...u, l] };
  }
  let w = S(r);
  if (w !== void 0 && y !== void 0) lme(o.askCards, e, { input: w, card: y, reason: p });
}
function jEs(e, n) {
  let t = e.checkPermissions;
  return Ywr(e, {
    async checkPermissions(s, o) {
      let d = await t.call(this, s, o),
        i = o.toolUseId,
        u = d.behavior === "ask" ? (d.updatedInput ?? s) : null;
      if (i !== void 0 && H(u)) {
        let l;
        try {
          l = n(u, o);
        } catch {
          l = { values: [], generic: !0 };
        }
        lme(Z().askCardFacts, i, l);
      }
      return d;
    }
  });
}
function $0n(e) {
  let n = e.checkPermissions;
  return Ywr(e, {
    async checkPermissions(t, s) {
      let o = s.toolUseId;
      if (o !== void 0) {
        let i = Z();
        (i.askCards.delete(o), i.askClassCards.delete(o), i.askCardFacts.delete(o));
      }
      let d = await n.call(this, t, s);
      if (o !== void 0) se(o, d, t);
      return d;
    }
  });
}
function lme(e, n, t) {
  if ((e.delete(n), e.set(n, t), e.size > ee)) {
    let s = e.keys().next().value;
    if (s !== void 0) e.delete(s);
  }
}
function Ywr(e, n) {
  return Object.defineProperties(
    Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)),
    Object.getOwnPropertyDescriptors(n)
  );
}
function Xwr(e, n) {
  let t = Ct(e);
  return lCe(t, n.toolUseId)
    ? BOt(t)
    : {
        owned: void 0,
        public: void 0,
        outsideOrg: k$(t) || M(),
        invitedByOtherOrg: t?.external === !0
      };
}
function BOt(e) {
  let n = e?.external === !0;
  if (e === void 0 || e.probeFailed === !0)
    return { owned: void 0, public: void 0, outsideOrg: k$(e) || M(), invitedByOtherOrg: n };
  let t = e.mode === "unknown" ? void 0 : e.mode === "public",
    s = k$(e);
  if (e.role === void 0)
    return { owned: t === !0 ? !1 : void 0, public: t, outsideOrg: s, invitedByOtherOrg: n };
  return {
    owned: e.role === "unknown" ? void 0 : e.role === "owner",
    public: t,
    outsideOrg: s,
    invitedByOtherOrg: n,
    ...((e.role === "owner" || e.role === "writer") && { canWrite: !0 })
  };
}
function M() {
  return QT() ? void 0 : !1;
}
function _P(e, n, t) {
  let s = Xwr(n.slug, t);
  return {
    operation: e,
    artifactId: n.slug,
    owned: s.owned,
    public: s.public,
    outsideOrg: s.outsideOrg,
    invitedByOtherOrg: s.invitedByOtherOrg,
    networkOff: jOt(n),
    turnStartedByHuman: iI(t.messages),
    ...(s.canWrite === !0 && { canWrite: !0 })
  };
}
var re = new Set(["scheduled", "retry", "catch_up", "manual"]);
function j(e) {
  return (
    e?.kind === "task-notification" &&
    e.subkind === "scheduled-trigger" &&
    e.fireReason !== void 0 &&
    re.has(e.fireReason)
  );
}
function eut(e) {
  if (q(e)) return !1;
  if (!j(uR(e.messages).decider?.origin)) return !1;
  let n = Z();
  if (!n.routineRunTainted && !X_n(e.messages, (t, s) => YE(s) || j(t))) n.routineRunTainted = !0;
  return !n.routineRunTainted;
}
function F0n() {
  if (z0e() !== void 0) return !1;
  if (nr()) return Bte() && oe() && Itr();
  return !Gg() && rR() && Ae() === "firstParty" && dR() === "env";
}
function W() {
  return FHt("POST", "/api/frame/deploy/direct");
}
function B(e) {
  return Z().frameRelay.servedUntil.get(e) ?? 0;
}
function oe() {
  let e = W();
  if (e === null || m1(e)) return !1;
  let n = Z().routineRelayNotCarried;
  return n === null || B(e) > n.servedUntil;
}
function rpo() {
  let e = W();
  Z().routineRelayNotCarried = { servedUntil: e === null ? 0 : B(e) };
}
function q(e) {
  let { mode: n, modeBeforeRewrite: t } = ae(e);
  return Ls(n) || (t !== void 0 && Ls(t));
}
function tut(e, n) {
  if (q(e)) return !1;
  let { messages: t } = e,
    s = uR(t).decider;
  if (s === null || t[s.index]?.type !== "user" || s.origin?.kind !== "task-notification")
    return !1;
  let o = s.index;
  for (; o > 0; o--) {
    let i = t[o - 1];
    if (
      i == null ||
      i.type === "assistant" ||
      (i.type === "user" && !vEt(i) && i.origin?.kind !== "task-notification")
    )
      break;
  }
  let d = t.slice(o);
  return (
    X_n(
      d,
      (i, u) =>
        u.type === "user" &&
        i?.kind === "task-notification" &&
        i.subkind === void 0 &&
        WEs(u.uuid) === n
    ) && ie(d, n)
  );
}
function ie(e, n) {
  let t = e[0] === void 0 ? NaN : Date.parse(e[0].timestamp),
    s = z0n();
  if (s !== void 0 && !(Number.isFinite(t) && s < t)) return !1;
  if (G0n(n, t)) return !1;
  let o = !1;
  for (let d of e) {
    if (d?.type !== "assistant" || !Array.isArray(d.message.content)) continue;
    for (let i of d.message.content)
      if (i.type === "tool_use" && de(i.name, i.input)) {
        let u = zEs(i.id);
        if (u?.ownWordsOnly !== !0 || u.slug !== n) return !1;
        o = !0;
      }
  }
  return o;
}
function de(e, n) {
  let t = e === Em ? COe("comments", n) : e === Lt ? n : void 0;
  return typeof t === "object" && t !== null && "action" in t && t.action === "comments";
}
var dBe = !0;
function i4(e, n) {
  return (e.ask && e.basis === "unattended") || (dBe && ae(n).mode === "plan");
}
var Jwr = !0;
function WW(e) {
  return Jwr && ae(e).mode === "plan";
}
function DIe(e, n, t, s, o = () => Zv(_P("read", n, e))) {
  return !t && s && !WW(e) ? o() : null;
}
function K(e) {
  return rR() && sh(e);
}
function Tae(e, n, t) {
  let s = K(e) && !iI(e.messages);
  if (!s && !pb(e)) return null;
  let o = t.endsWith(".") ? t : `${t}.`;
  return {
    behavior: "deny",
    message: `${n}. This needs a yes to: ${o} ${s ? "No one can answer that prompt in this Cowork session, and this turn was not started by the user's own message \u2014 tell the user in chat; do not retry it on this turn." : "No one can answer that prompt from plan mode in this session \u2014 keep planning in the plan file and raise it with the user in chat; do not retry while plan mode is on."}`,
    decisionReason: {
      type: "safetyCheck",
      reason: s
        ? "Artifact call with a new-comments notice pending, on a turn the user's own message did not start, in a Cowork session that has no one to answer its prompt"
        : "Notification-triggered artifact call in plan mode has no one to answer its prompt",
      classifierApprovable: !1
    }
  };
}
function Ave(e, n, t) {
  if (!Qwr(e, t)) return null;
  return {
    behavior: "deny",
    message: `${n}. Reading content of an artifact the user does not own, or whose ownership couldn't be confirmed, needs a person's yes, and no one can answer the prompt in this session \u2014 tell the user in chat instead of retrying.`,
    decisionReason: {
      type: "safetyCheck",
      reason:
        "Reading content of an artifact that is not confirmed to be the user's own requires a live human consent surface in this session",
      classifierApprovable: !1
    }
  };
}
function Qwr(e, n) {
  return sh(e) && (rR() || n);
}
function jOt(e) {
  return exs(e?.env);
}
var G = "this artifact",
  ue =
    "no one was asked first \u2014 nothing was returned; retry the same action so the user is asked",
  le =
    "no one can be asked about it in this session \u2014 nothing was returned; do not retry it here",
  ce =
    "a PermissionRequest hook answered the permission prompt in the user's place; only the user's own approval allows this read \u2014 nothing was returned; do not retry it here, and tell the user their hook answered for them (to approve it themselves they would narrow the hook so it no longer answers this prompt)";
function nut(e, n, t, s) {
  if (ye(n, t)) return !0;
  if (
    T7(KSt(n), s === "page" ? "artifactReadConsentSlugs" : "artifactAssetReadHumanConsentSlugs", t)
  )
    return !0;
  if (sh(n) || dme(n)) return !1;
  return cBe(e, n) || (!Ls(ae(n).mode) && !fe(e) && r3(e, n));
}
function z(e) {
  let n = e.toolUseId === void 0 ? void 0 : e.toolDecisions?.get(e.toolUseId);
  return n?.source === "hook" && n.decision !== "reject";
}
function WOt(e, n = !1, t) {
  let s = z(e),
    o = n ? !Ih(e) || (sh(e) && !Ls(ae(e).mode)) : sh(e);
  if (!n)
    return `this turned out to be a public artifact from outside your organization, and ${o ? le : s ? ce : ue}`;
  let d = t === void 0 ? "nothing was copied" : "nothing was published",
    i =
      t === void 0
        ? "Retry the same action so that question is asked."
        : t.retryUrl !== void 0
          ? `Retry publishing with url: ${_(t.retryUrl)} so that question is asked.`
          : "Retry the same publish so that question is asked.";
  return o
    ? `the source artifact belongs to another organization and nobody can be asked about copying from it in this session, so ${d}. Don't retry it here.`
    : `the source artifact belongs to another organization and nobody was asked whether to copy from another organization's artifact, so ${d}. ${i}`;
}
function U0n(e, n, t) {
  return Tx(Ct(n)) && (t || Zwr(e, n));
}
function Zwr(e, n) {
  return VGo(n) || T7(KSt(e), "artifactOutsideOrgConsentSlugs", n);
}
function fe(e) {
  let n = Reflect.get(e, gL);
  return typeof n === "object" && n !== null && Reflect.get(n, "classifier") === !0;
}
var B0n = "This artifact was created outside your organization.";
function j0n(e, n, t) {
  let s = jz(n),
    o = s ? `"${s}"` : G,
    d = s ? `"${s}"` : "This artifact",
    i = `Let Claude read it${t ? ` and ${t}` : ""}?`;
  switch (e) {
    case "someone_else":
      return `${d} was made by someone else. ${i}`;
    case "unknown":
      return `Claude couldn't check who made ${o}. ${i}`;
    case "cowritten":
      return `Other people can edit ${o}. ${i}`;
    case "from_type":
      return `${d} was made from someone else's artifact type. ${i}`;
  }
}
function opo(e) {
  return `Approving covers its files${e ? ", and copying them into other artifacts," : ""} for the rest of the conversation.`;
}
function pe(e, n, t) {
  let s = ge(e, n, t);
  if (e.remember !== "artifact") return s;
  let o = Q8() ? "task" : "conversation";
  return s.replace(/\?$/, ` for the rest of this ${o}?`);
}
function V(e) {
  return (
    e.class === "public_change" &&
    e.basis !== "unattended" &&
    e.about !== "someone_else" &&
    e.missing !== "public"
  );
}
function ge(e, n, t) {
  let s = jz(n),
    o = s ? `"${s}"` : G,
    d = s ? `"${s}"` : "This artifact";
  switch (e.class) {
    case "delete":
      return `Permanently delete ${s || t === void 0 ? o : t}?`;
    case "public_change":
      if (V(e)) return `${d} is public. Allow Claude to change it?`;
      if (e.basis === "unattended") return `Allow Claude to change ${o}?`;
      if (e.about === "someone_else")
        return e.missing === "owned"
          ? `Claude couldn't check who made ${o}. Allow Claude to change it?`
          : `${d} was made by someone else. Allow Claude to change it?`;
      return `Claude couldn't check who can see ${o}. Allow Claude to change it?`;
    case "access_change":
      return `Allow Claude to change who can open or comment on ${o}?`;
    case "standing_job":
      return `Allow Claude to keep replying to comments on ${o}?`;
    case "foreign_read":
      return j0n(e.missing === "owned" ? "unknown" : "someone_else", n);
  }
}
function me(e) {
  return e.about === "outside_org" ? B0n : void 0;
}
function RF(e) {
  return z3e(e.input, e.context, [e]);
}
function z3e(e, n, t) {
  if (n.toolUseId !== void 0)
    (Z().askClassPending.delete(n.toolUseId), Z().askClassCards.delete(n.toolUseId));
  let s = [];
  for (let r of t)
    if (!r.ruling.ask) {
      if (r.ruling.foreignRead) zOt(r.action, r.slug, r.ownerAccountId, r.ruling.attested);
    } else if (
      r.ruling.remember !== "artifact" ||
      !(r.consentHeld ?? sCe(r.ruling, r.slug, r.userOnly === !0)) ||
      r.heldYesDoesNotCover === !0
    )
      s.push({ ...r, ruling: r.ruling });
  if (s.length === 0) return { behavior: "allow", updatedInput: { ...e, [Ip]: !1 } };
  let o = (r) => r.ruling.answeredBy === "person" || r.userOnly === !0;
  s.sort((r, k) => Number(o(k)) - Number(o(r)));
  let d = s.some(o),
    i = s.map((r) => ({
      display: r.display,
      question: pe(r.ruling, r.display.title, r.display.url),
      note: me(r.ruling),
      linked:
        r.ruling.class === "foreign_read" ||
        r.ruling.about === "someone_else" ||
        r.ruling.missing === "owned",
      reach: r.note
    })),
    u = i.flatMap((r) => (r.reach === void 0 ? [r.question] : [r.question, r.reach])).join(" ");
  if (d ? sh(n) : pb(n) || (s.some((r) => r.ruling.class === "foreign_read") && K(n)))
    return {
      behavior: "deny",
      message: `Nothing was done. This needs a yes to: ${i.map((r) => r.question).join(" ")} No one can answer in this session.`,
      decisionReason: {
        type: "safetyCheck",
        reason: `Artifact ${s.map((r) => r.ruling.class).join(", ")} ask has no one to answer it`,
        classifierApprovable: !1
      }
    };
  let p = Ih(n),
    g = ntt(),
    f = s.map((r) => ({
      class: r.ruling.class,
      remember: r.ruling.remember,
      ...(r.ruling.endpoint && { endpoint: !0 }),
      slug: r.slug,
      url: r.display.url,
      ...(r.display.title !== void 0 && { title: r.display.title }),
      reachable: p,
      askedIn: g
    }));
  ttt(
    n,
    s
      .filter((r) => "about" in r.ruling && r.ruling.about === "outside_org" && !r.ruling.endpoint)
      .map((r) => r.slug),
    p
  );
  let h = f.length === 1 ? f[0] : f;
  if (n.toolUseId !== void 0) {
    if ((lme(Z().askClassPending, n.toolUseId, f), d))
      lme(Z().askClassPersonAsked, n.toolUseId, !0);
    else Z().askClassPersonAsked.delete(n.toolUseId);
    if (Ls(ae(n).mode)) Z().askClassNoClassifier.delete(n.toolUseId);
    else lme(Z().askClassNoClassifier, n.toolUseId, !0);
    let r = S(h);
    if (r !== void 0) {
      let k = i.flatMap(({ display: y, question: w, note: b, linked: C, reach: A }) => [
        w,
        ...(b === void 0 ? [] : [b]),
        ...(w.includes(y.url) || (!C && jz(y.title)) ? [] : [y.url]),
        ...(A === void 0 ? [] : [A])
      ]);
      lme(Z().askClassCards, n.toolUseId, {
        stamp: r,
        parts: k,
        saysPublic: s.some((y) => V(y.ruling)),
        reason: u
      });
    }
  }
  return {
    behavior: "ask",
    message: u,
    updatedInput: { ...e, [Ip]: !1, [QOt]: h },
    ...(s.some((r) => r.ruling.class === "delete" || r.ruling.class === "access_change") && {
      defaultToNo: !0
    }),
    ...(s.some((r) => r.ruling.class === "access_change") && { personOnly: !0 }),
    suppressAlwaysAllowRule: !0,
    localDisplayOnly: !0,
    decisionReason: { type: "safetyCheck", reason: u, classifierApprovable: !d }
  };
}
function spo(e) {
  if (e.toolUseId === void 0) return;
  let n = Z(),
    t = n.askClassPending,
    s = t.get(e.toolUseId) ?? [];
  t.delete(e.toolUseId);
  let o = n.askClassPersonAsked.get(e.toolUseId);
  n.askClassPersonAsked.delete(e.toolUseId);
  let d = n.askClassNoClassifier.get(e.toolUseId);
  n.askClassNoClassifier.delete(e.toolUseId);
  let i = LIe(e),
    u = !sh(e) && !dme(e) && (i || o === !0 || (d === !0 && !Ls(ae(e).mode)));
  if (s[0]?.reachable !== !0 || s[0].askedIn !== ntt() || !Ih(e)) return;
  if ((lme(n.askClassTaken, e.toolUseId, s), u)) lme(n.askClassTakenByPerson, e.toolUseId, !0);
  if (As(e.agentContext)) return;
  for (let l of s)
    if (l.remember === "artifact" && (i || !l.endpoint)) {
      if ((WJs(cwt(l), l.slug, u), !l.endpoint && uwt(e, l.slug) && (u || (o !== !0 && !z(e)))))
        GJs(l.slug);
    }
}
function ipo(e, n, t) {
  return he(e, n, t);
}
function he(e, n, t) {
  let s = e.toolUseId === void 0 ? void 0 : Z().askClassTaken.get(e.toolUseId);
  return (
    s !== void 0 &&
    s.some((o) => cwt(o) === n && o.slug === t && o.remember === "artifact") &&
    QY(n, t)
  );
}
function ye(e, n) {
  let t = Z();
  return (
    (e.toolUseId !== void 0 &&
      t.askClassTakenByPerson.get(e.toolUseId) === !0 &&
      (t.askClassTaken.get(e.toolUseId)?.some((o) => cwt(o) === "foreign_read" && o.slug === n) ??
        !1)) ||
    LIe(e) ||
    _Gt("foreign_read", n)
  );
}
function KTi(e, n, t) {
  if (e.toolUseId === void 0) return;
  let s = Z();
  (lme(s.askClassPending, e.toolUseId, [
    {
      class: "foreign_read",
      remember: "this_call",
      slug: n,
      url: t,
      reachable: Ih(e),
      askedIn: ntt()
    }
  ]),
    lme(s.askClassPersonAsked, e.toolUseId, !0));
}
function apo(e, n) {
  a("tengu_artifact_routine_write_unasked", { db_op: c(e), artifact_id: _e(n) });
}
function lpo(e, n) {
  a("tengu_artifact_comment_write_unasked", { db_op: c(e), artifact_id: _e(n) });
}
function dpo(e) {
  a("tengu_artifact_comment_publish_unasked", { artifact_id: _e(e) });
}
function cpo(e) {
  Z().commentRepublishedPaths.add(e);
}
function evr(e) {
  Z().routineRepublishedPaths.add(e);
}
function upo(e) {
  if (e === void 0) return;
  let n = Z();
  (n.askClassPending.delete(e),
    n.askClassCards.delete(e),
    n.askClassPersonAsked.delete(e),
    n.askClassNoClassifier.delete(e),
    n.askNamedOtherOrg.delete(e));
}
function fpo(e) {
  a("tengu_artifact_routine_publish_unasked", { artifact_id: _e(e) });
}
function tvr() {
  return gr("tengu_proud_honey", { safe: !1 });
}
function ppo(e, n) {
  let t = c(n ?? "absent");
  if (
    (a("tengu_artifact_quiet_caps_publish_unasked", { artifact_id: _e(e), mode: t }),
    n === "owner" || n === "empty")
  )
    return;
  (m("artifact_publish", "quiet_caps_publish_not_owner_only", { mode: t }),
    (Z().quietCapsCardKept = !0));
}
function GOt(e, n, t) {
  let s = c(n ?? "absent");
  if (
    (a("tengu_artifact_routine_first_publish_unasked", {
      ...(e !== void 0 && { artifact_id: _e(e) }),
      mode: s,
      ...(t?.fromType && { from_type: !0 })
    }),
    n === "owner" || n === "refused_before_send")
  )
    return;
  if (n !== "stranded" && n !== "refused_shape" && n !== "unknown_outcome")
    m("artifact_publish", "routine_first_publish_not_owner_only", {
      mode: s,
      ...(t?.fromType && { from_type: !0 })
    });
  Z().routineRunTainted = !0;
}
function zOt(e, n, t, s) {
  a("tengu_artifact_foreign_read_unasked", {
    action: c(e),
    artifact_id: _e(n),
    ...(t !== void 0 && { owner_account_id: _e(t) }),
    ...(s && { attested: !0 })
  });
}
export {
  FEs,
  UEs,
  N0n,
  BEs,
  jEs,
  $0n,
  lme,
  Ywr,
  Xwr,
  BOt,
  _P,
  eut,
  F0n,
  rpo,
  tut,
  dBe,
  i4,
  Jwr,
  WW,
  DIe,
  Tae,
  Ave,
  Qwr,
  jOt,
  nut,
  WOt,
  U0n,
  Zwr,
  B0n,
  j0n,
  opo,
  RF,
  z3e,
  spo,
  ipo,
  KTi,
  apo,
  lpo,
  dpo,
  cpo,
  evr,
  upo,
  fpo,
  tvr,
  ppo,
  GOt,
  zOt
};

//# sourceMappingURL=chunk-8xk8sdq7.js.map
