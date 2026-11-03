// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Pn } from "./chunk-wrtp8qz8.js";
import { Npt, Qa } from "./chunk-j0tbz6ra.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { vm } from "./chunk-r1dvrqha.js";
import { EO } from "./chunk-6h7ejyet.js";
import { CE } from "./chunk-b9vagsrs.js";
import { IBe, N7t } from "./chunk-05k9jvsd.js";
function PBe() {
  return CE() && !Pn();
}
function p(e, n) {
  if (!e) return "idle-fork";
  return n ? "defer-then-fork" : "abort-then-fork";
}
function d(e) {
  let { inFlight: n } = e;
  if (e.isBg) return { ok: !0, via: "detach", inFlight: n };
  if (!e.fleetEnabled) return { ok: !1, reason: "fleet-disabled", inFlight: n };
  if (e.isRemote) return { ok: !1, reason: "remote", inFlight: n };
  if (e.persistenceDisabled) return { ok: !1, reason: "persistence", inFlight: n };
  if (e.isExternalLoading) return { ok: !1, reason: "loading", inFlight: n };
  return { ok: !0, via: p(e.isLoading, e.betweenCalls), inFlight: n };
}
function BNn(e, n) {
  return !n && !f(e);
}
function f(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return !1;
  }
  return !1;
}
function pEr(e) {
  let n = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type === "assistant") {
      if (o.message?.stop_reason !== null) return n;
      for (let i of o.message?.content ?? [])
        if (i.type === "text" && typeof i.text === "string") n += i.text.length;
    } else if (o.type === "user") return n;
  }
  return n;
}
function mEr(e, n) {
  let r = e.length;
  for (let i = e.length - 1; i >= 0; i--) {
    let s = e[i];
    if (s.type === "assistant") {
      if (s.message?.stop_reason !== null) break;
      r = i;
    } else if (s.type === "user") break;
  }
  let o = "";
  for (let i = r; i < e.length; i++) {
    let s = e[i];
    if (s.type !== "assistant") continue;
    for (let a of s.message?.content ?? [])
      if (a.type === "text" && typeof a.text === "string") o += a.text;
  }
  return o + (n ?? "");
}
function jNn(e) {
  let n,
    r = !1;
  return (o) => {
    if (r) return !0;
    try {
      return ((n ??= IBe(e())), N7t(o.under, n));
    } catch (i) {
      return (
        (r = !0),
        t(`heldScreening could not read the screening: ${i}`, { level: "error" }),
        !0
      );
    }
  };
}
function gEr(e, n) {
  let r = 0;
  for (let o of e) {
    if (Npt(o)) continue;
    if (
      o.priority === "later" ||
      o.drainOnly === !0 ||
      o.screeningPending === !0 ||
      (o.promptSubmitted !== void 0 && n !== void 0 && n(o.promptSubmitted)) ||
      o.mode === "bash" ||
      o.mode === "poll-event" ||
      (EO(o.value) && !o.skipSlashCommands)
    )
      r++;
  }
  return r;
}
function tTs(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${I(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function H7t(e, n) {
  return `Backgrounding cancelled \u2014 ${e}.${n === void 0 ? "" : ` ${n}`}`;
}
var WNn = H7t("you have unsent text in the input", "Send it or clear it, then press \u2190 again."),
  nTs = "Still backgrounding after the current tool \u2014 a question is waiting for your answer.",
  hEr = H7t("the turn was stopped");
function l(e) {
  if (e.type !== "user") return !1;
  let n = e.message?.content;
  return (
    Array.isArray(n) &&
    n[0]?.type === "tool_result" &&
    n.every((r) => r.type === "tool_result" || r.type === "text" || r.type === "image")
  );
}
function g(e) {
  if (e.type === "system") return !0;
  if (e.type === "assistant") {
    let n = e.message?.stop_reason;
    return n === null || n === "tool_use";
  }
  if (e.type === "user") return vm(e);
  return !1;
}
function wMt(e) {
  let n = e.length,
    r = !1;
  while (n > 0) {
    let i = e[n - 1];
    if (i.type === "user")
      if (vm(i)) r ||= l(i);
      else if (r && l(i)) ;
      else break;
    else if (i.type === "assistant") {
      if (!g(i)) break;
      r = !1;
    }
    n--;
  }
  let o = e
    .slice(n)
    .filter((i) => i.type !== "user" && i.type !== "assistant" && i.type !== "system");
  if (n + o.length === e.length) return e;
  return [...e.slice(0, n), ...o];
}
function L7t(e) {
  let n = wMt(e);
  for (let r = n.length - 1; r >= 0; r--) {
    let o = n[r].type;
    if (o === "user" || o === "assistant") return n[r].uuid;
  }
  return;
}
function rTs(e, n) {
  if (e === null || e.length < 1 || e.length > n.length) return !1;
  let r = e.length - 1;
  if (n[r]?.uuid !== e.uuid) return !1;
  for (let o = e.length; o < n.length; o++) {
    let i = n[o].type;
    if (i === "user" || i === "assistant") return !1;
  }
  return !0;
}
function GNn(e) {
  for (let n = e.length - 1; n >= 0; n--) {
    let r = e[n];
    if (r.type === "user") return !vm(r);
    if (r.type === "assistant") return !1;
  }
  return !1;
}
function zNn(e) {
  return e.ok && e.via !== "detach";
}
function vMt(e) {
  return d({ ...e, fleetEnabled: CE(), isRemote: Pn(), persistenceDisabled: Qa() });
}
export { PBe, BNn, pEr, mEr, jNn, gEr, tTs, H7t, WNn, nTs, hEr, wMt, L7t, rTs, GNn, zNn, vMt };

//# sourceMappingURL=chunk-9d4hz6n9.js.map
