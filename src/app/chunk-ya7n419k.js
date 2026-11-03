// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uX } from "./chunk-cj37hmns.js";
var xbe = [
    "claude-3-5-haiku",
    "claude-3-5-sonnet",
    "claude-3-7-sonnet",
    "claude-fable-5",
    "claude-fable-5-1",
    "claude-haiku-4-5",
    "claude-haiku-5-5",
    "claude-mythos-5",
    "claude-mythos-5-1",
    "claude-opus-4-0",
    "claude-opus-4-1",
    "claude-opus-4-5",
    "claude-opus-4-6",
    "claude-opus-4-7",
    "claude-opus-4-8",
    "claude-opus-5",
    "claude-opus-5-5",
    "claude-sonnet-4-0",
    "claude-sonnet-4-5",
    "claude-sonnet-4-6",
    "claude-sonnet-5",
    "claude-sonnet-5-5"
  ],
  Z5 = [
    "sonnet",
    "opus",
    "haiku",
    "fable",
    "best",
    "sonnet[1m]",
    "opus[1m]",
    "fable[1m]",
    "opusplan"
  ],
  e6 = ["sonnet", "opus", "haiku", "fable"];
var iqt = "claude-mythos-preview";
function W_(e) {
  return Z5.includes(e);
}
function Pbe(e) {
  if (W_(e)) return !0;
  let n = Ot(e);
  return n !== e && Ot(n) === n && W_(n);
}
function Ot(e) {
  return e.replace(/\[1m\]$/i, "");
}
function nk(e, n) {
  return Ot(e).toLowerCase() === Ot(n).toLowerCase();
}
function $n(e) {
  return e.replace(/\[(1|2)m\]/gi, "");
}
function p_(e) {
  return e6.includes(e);
}
function Tc(e) {
  let n = e.trim().toLowerCase();
  if (n === "" || /\s/.test(n)) return null;
  n = n.replace(/\[[12]m\]$/, "");
  let s = n.lastIndexOf("/");
  if (s !== -1) n = n.slice(s + 1);
  let t = /^(?:([a-z-]+)\.)?anthropic\.(claude-.*)$/.exec(n);
  if (t) {
    let [, a, l = ""] = t;
    if (a !== void 0 && !uX.includes(a)) return null;
    n = l;
  }
  let r = u(n);
  if (!r) return null;
  let o = n.slice(r.base.length);
  if (o !== "" && !/^[-@]/.test(o)) return null;
  let i = {
    family: r.family,
    major: r.major,
    legacyVersionFirst: r.legacyVersionFirst,
    base: r.base
  };
  if (r.minor !== void 0) i.minor = r.minor;
  if (!W9o(o)) i.trailer = o;
  else {
    let a = /(?:-v\d+@|[-@])(\d{8})/.exec(o)?.[1];
    if (a !== void 0) i.date = a;
  }
  return i;
}
function W9o(e) {
  return /^(?:-fast|-latest)?(?:-v\d{1,3}@\d{8}|[-@]\d{8})?(?:-v\d{1,3}(?::\d{1,3})?)?$/.test(e);
}
function _li(e) {
  return /-v\d+(?::\d+)?$/.test(e);
}
function H0(e) {
  return e !== null && e.trailer === void 0;
}
function jqe(e, n) {
  return e.major - n.major || (e.minor ?? 0) - (n.minor ?? 0);
}
function aTt(e, n) {
  return e.family === n.family && e.legacyVersionFirst === n.legacyVersionFirst && jqe(e, n) === 0;
}
function Usr(e) {
  switch (e) {
    case "haiku":
      return 0;
    case "sonnet":
      return 1;
    case "opus":
      return 2;
    case "fable":
    case "mythos":
      return 3;
    default:
      return;
  }
}
function bli(e, n) {
  if (typeof e !== "string") return !1;
  let s = Tc(e),
    t = Tc(n);
  if (!H0(s) || !H0(t)) return !1;
  let r = Usr(s.family),
    o = Usr(t.family);
  if (r === void 0 || o === void 0) return !1;
  return o >= r && jqe(t, s) >= 0;
}
function u(e) {
  let n = /^claude-([a-z]+)-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?/.exec(e);
  if (n) {
    let [t, r = "", o = "", i] = n;
    return {
      family: r,
      major: Number(o),
      minor: i === void 0 ? void 0 : Number(i),
      legacyVersionFirst: !1,
      base: t
    };
  }
  let s = /^claude-(\d{1,2})(?!\d)(?:-(\d{1,2})(?!\d))?-([a-z]+)/.exec(e);
  if (s) {
    let [t, r = "", o, i = ""] = s;
    return {
      family: i,
      major: Number(r),
      minor: o === void 0 ? void 0 : Number(o),
      legacyVersionFirst: !0,
      base: t
    };
  }
  return null;
}
export { xbe, Z5, e6, iqt, W_, Pbe, Ot, nk, $n, p_, Tc, W9o, _li, H0, jqe, aTt, Usr, bli };

//# sourceMappingURL=chunk-ya7n419k.js.map
