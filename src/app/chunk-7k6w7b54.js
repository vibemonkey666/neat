// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { i } from "./chunk-cj37hmns.js";
import { re, Ze, $M, qg } from "./chunk-a16y5hcz.js";
import { Rot } from "./chunk-dmtyt8s1.js";
import { js } from "./chunk-96sx3c3k.js";
import { M$e, c2 } from "./chunk-2bsye2b3.js";
var y = new Map();
function l8e() {
  let t = i.LC_ALL || i.LC_TIME || i.LANG || "";
  if (y.has(t)) return y.get(t);
  let e = b(t);
  return (y.set(t, e), e);
}
function b(t) {
  if (!t || t === "C" || t === "POSIX") return;
  let e = Ze(Ze(t, "."), "@");
  if (!e) return;
  let r = e.replaceAll("_", "-");
  try {
    return (new Intl.DateTimeFormat(r), r);
  } catch {
    return;
  }
}
var I = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short"
  },
  M = { weekday: "short", calendar: "gregory" },
  N = { weekday: "long", calendar: "gregory" },
  x = { month: "short", calendar: "gregory" },
  _ = { month: "long", calendar: "gregory" };
function P(t, e, { locale: r, timeZone: s }) {
  let g = c2("en-US", M$e(I, s)).formatToParts(e),
    o = {};
  for (let T of g) o[T.type] = T.value;
  let u = Number(o.year),
    n = Number(o.month),
    c = Number(o.day),
    m = Number(o.hour),
    p = ((m + 11) % 12) + 1,
    h = new Date(Date.UTC(u, n - 1, c)).getUTCDay();
  return t.replace(/%(-?)([\s\S])/g, (T, f, O) => {
    switch (O) {
      case "Y":
        return String(u);
      case "y":
        return a(u % 100, f);
      case "C":
        return a(Math.floor(u / 100), f);
      case "m":
        return a(n, f);
      case "d":
        return a(c, f);
      case "e":
        return D(c, f);
      case "j":
        return A(Z(u, n, c), f);
      case "u":
        return String(h === 0 ? 7 : h);
      case "w":
        return String(h);
      case "H":
        return a(m, f);
      case "k":
        return D(m, f);
      case "I":
        return a(p, f);
      case "l":
        return D(p, f);
      case "M":
        return a(Number(o.minute), f);
      case "S":
        return a(Number(o.second), f);
      case "p":
        return m < 12 ? "AM" : "PM";
      case "P":
        return m < 12 ? "am" : "pm";
      case "s":
        return String(Math.floor(e.getTime() / 1000));
      case "a":
        return d(e, r, s, M);
      case "A":
        return d(e, r, s, N);
      case "b":
      case "h":
        return d(e, r, s, x);
      case "B":
        return d(e, r, s, _);
      case "Z":
        return o.timeZoneName ?? "";
      case "z":
        return k(e, u, n, c, m, o);
      case "F":
        return `${u}-${a(n, "")}-${a(c, "")}`;
      case "D":
        return `${a(n, "")}/${a(c, "")}/${a(u % 100, "")}`;
      case "T":
        return `${a(m, "")}:${o.minute}:${o.second}`;
      case "R":
        return `${a(m, "")}:${o.minute}`;
      case "r":
        return `${a(p, "")}:${o.minute}:${o.second} ${m < 12 ? "AM" : "PM"}`;
      case "%":
        return "%";
      default:
        return T;
    }
  });
}
function a(t, e) {
  return e ? String(t) : String(t).padStart(2, "0");
}
function A(t, e) {
  return e ? String(t) : String(t).padStart(3, "0");
}
function D(t, e) {
  return e ? String(t) : String(t).padStart(2, " ");
}
function Z(t, e, r) {
  return (Date.UTC(t, e - 1, r) - Date.UTC(t, 0, 1)) / 86400000 + 1;
}
function d(t, e, r, s) {
  return c2(e, M$e(s, r)).format(t);
}
function k(t, e, r, s, g, o) {
  let u = Date.UTC(e, r - 1, s, g, Number(o.minute), Number(o.second)),
    n = Math.floor(t.getTime() / 1000) * 1000,
    c = Math.round((u - n) / 60000),
    m = c < 0 ? "-" : "+",
    p = Math.abs(c);
  return `${m}${String(Math.floor(p / 60)).padStart(2, "0")}${String(p % 60).padStart(2, "0")}`;
}
var F = 100;
function sEr(t) {
  return re($M(qg(t)), F);
}
function C(t, e) {
  let r = Rot.find((o) => o === t);
  if (r === "24-hour-utc") return { kind: "preset", preset: r, timeZone: "UTC" };
  let s = L(e);
  if (r) return { kind: "preset", preset: r, timeZone: s };
  let g = sEr(t);
  return g.includes("%")
    ? { kind: "pattern", pattern: g, timeZone: s }
    : { kind: "preset", preset: "auto", timeZone: s };
}
function L(t) {
  if (!t) return;
  try {
    return (c2("en-US", { timeZone: t }), t);
  } catch {
    return;
  }
}
function S(t, e, r) {
  switch (e) {
    case "auto":
      return M$e(t, r);
    case "12-hour":
      return M$e({ ...t, hourCycle: "h12" }, r);
    case "24-hour":
    case "24-hour-utc":
      return M$e({ ...t, hourCycle: "h23" }, r);
  }
}
function iEr(t, e, r, s) {
  let g = c2(r, S(e, t.preset, t.timeZone));
  if (t.preset !== "24-hour-utc") return g.format(s);
  let o = g.formatToParts(s),
    u = o.findLastIndex((n) => n.type === "minute" || n.type === "second");
  return o.map((n, c) => (c === u ? `${n.value}Z` : n.value)).join("");
}
function l(t, e, r, s) {
  return re(P(t, r, { locale: s, timeZone: e }), F);
}
var E = {
  "2-digit": { hour: "2-digit", minute: "2-digit", hourCycle: "h12" },
  numeric: { hour: "numeric", minute: "2-digit", hourCycle: "h12" }
};
function Xks(t, e, r, s = "2-digit") {
  return t.kind === "pattern" ? l(t.pattern, t.timeZone, e, r) : iEr(t, E[s], "en-US", e);
}
var R = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
  timeZoneName: "short"
};
function Jks(t, e, r, s) {
  let g = t.timeZone ?? s;
  if (t.kind === "pattern") return l(t.pattern, g, e, r);
  let o = S(R, t.preset, g),
    u = c2("en-US", o).formatToParts(e),
    n = {};
  for (let p of u) n[p.type] = p.value;
  let c = n.dayPeriod ? ` ${n.dayPeriod}` : "",
    m = "";
  if (t.preset === "24-hour-utc") m = "Z";
  else if (n.timeZoneName) m = ` ${n.timeZoneName}`;
  return `${n.year}-${n.month}-${n.day} ${n.hour}:${n.minute}:${n.second}${c}${m}`;
}
function hMt() {
  return C(js("timeFormat", "auto").value, js("timeZone", "").value);
}
function Qks(t, e, r) {
  return l(t, e, r, l8e());
}
export { l8e, sEr, iEr, Xks, Jks, hMt, Qks };

//# sourceMappingURL=chunk-7k6w7b54.js.map
