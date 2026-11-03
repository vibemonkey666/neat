// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { FCt, In, Vp } from "./chunk-h5gbmqm1.js";
import { Iee } from "./chunk-jgvfzp2r.js";
var g = "Expected a function";
function c(e, n) {
  if (typeof e != "function" || (n != null && typeof n != "function")) throw TypeError(g);
  var r = function () {
    var t = arguments,
      o = n ? n.apply(this, t) : t[0],
      u = r.cache;
    if (u.has(o)) return u.get(o);
    var d = e.apply(this, t);
    return ((r.cache = u.set(o, d) || u), d);
  };
  return ((r.cache = new (c.Cache || FCt)()), r);
}
c.Cache = FCt;
var Qr = c;
import { homedir as A } from "os";
import { basename as T, dirname as I, join as E, resolve as i } from "path";
var R = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function O(e) {
  return !!e && R.test(e);
}
function xee(e) {
  return O(e) ? e : void 0;
}
var D = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/,
  _ = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/,
  p = /[_,\u00A0\u202F ]/g;
function Ess(e) {
  if (e.length <= 32) {
    if (D.test(e)) {
      let n = Number(e);
      return Number.isInteger(n) ? n : NaN;
    }
    if (_.test(e)) return parseInt(e.replace(p, ""), 10);
  }
  return;
}
function Tu(e) {
  let n = String(e).trim();
  return Ess(n) ?? parseInt(n, 10);
}
function R2(e) {
  let n = Number(e);
  if (!Number.isNaN(n)) return n;
  let r = String(e).trim();
  return r.length <= 32 && _.test(r) ? parseInt(r.replace(p, ""), 10) : NaN;
}
var f = [
  ["claude-3-5-sonnet", "VERTEX_REGION_CLAUDE_3_5_SONNET"],
  ["claude-3-7-sonnet", "VERTEX_REGION_CLAUDE_3_7_SONNET"],
  ["claude-sonnet-4-5", "VERTEX_REGION_CLAUDE_4_5_SONNET"],
  ["claude-sonnet-4-6", "VERTEX_REGION_CLAUDE_4_6_SONNET"],
  ["claude-sonnet-5-5", "VERTEX_REGION_CLAUDE_5_5_SONNET"],
  ["claude-3-5-haiku", "VERTEX_REGION_CLAUDE_3_5_HAIKU"],
  ["claude-fable-5-1", "VERTEX_REGION_CLAUDE_FABLE_5_1"],
  ["claude-haiku-4-5", "VERTEX_REGION_CLAUDE_HAIKU_4_5"],
  ["claude-haiku-5-5", "VERTEX_REGION_CLAUDE_HAIKU_5_5"],
  ["claude-opus-4-1", "VERTEX_REGION_CLAUDE_4_1_OPUS"],
  ["claude-opus-4-5", "VERTEX_REGION_CLAUDE_4_5_OPUS"],
  ["claude-opus-4-6", "VERTEX_REGION_CLAUDE_4_6_OPUS"],
  ["claude-opus-4-7", "VERTEX_REGION_CLAUDE_4_7_OPUS"],
  ["claude-opus-4-8", "VERTEX_REGION_CLAUDE_4_8_OPUS"],
  ["claude-opus-5-5", "VERTEX_REGION_CLAUDE_5_5_OPUS"],
  ["claude-sonnet-4", "VERTEX_REGION_CLAUDE_4_0_SONNET"],
  ["claude-sonnet-5", "VERTEX_REGION_CLAUDE_5_SONNET"],
  ["claude-fable-5", "VERTEX_REGION_CLAUDE_FABLE_5"],
  ["claude-opus-4", "VERTEX_REGION_CLAUDE_4_0_OPUS"],
  ["claude-opus-5", "VERTEX_REGION_CLAUDE_5_OPUS"]
];
function s() {
  return process.env.CLAUDE_CONFIG_DIR;
}
function ecr(e) {
  let n = e === "CLAUDE_CONFIG_DIR" ? s() : process.env[e];
  if (n === void 0) return;
  let r = String(n).trim();
  return r ? r : void 0;
}
function tJr(e) {
  return Ne(process.env[e]);
}
var Le = Qr(() => (s() ?? E(A(), ".claude")).normalize("NFC"), s);
function up() {
  return Iee() ? null : Le();
}
function fie(e) {
  let n = up();
  return n === null || e === null ? n === e : i(n) === i(e);
}
function Oit() {
  return E(Le(), "teams");
}
function m() {
  return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
var S = /^[A-Za-z0-9_-]{1,64}$/,
  v = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function kss(e) {
  if (!e || !S.test(e) || v.test(e)) return;
  return e;
}
function U() {
  return `${Iee()}\x00${s() ?? ""}\x00${m() ?? ""}`;
}
var SAn = Qr(() => (s() || Iee() ? kss(m()) : void 0), U);
function pie(e) {
  let n = up();
  if (n === null) return !1;
  if (i(e) === i(n)) return !0;
  return l(e) === l(n);
}
function l(e) {
  let n = i(e),
    r = I(n),
    t = Vp(r) ?? r;
  return In(E(t, T(n)));
}
function qYt(e) {
  let n = process.env.NODE_OPTIONS;
  if (!n) return !1;
  return n.split(/\s+/).includes(e);
}
function nJr(e, n) {
  if (e === void 0) return n;
  let r = Tu(e);
  return Number.isNaN(r) ? n : r;
}
function Xpi(e) {
  if (e !== void 0) return e;
  let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
  if (!n) return;
  let r = R2(n);
  if (!Number.isInteger(r) || r <= 0)
    throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
  return r;
}
function Jpi(e) {
  let n = Number(e);
  return isNaN(n) || n <= 0 ? void 0 : n;
}
function a(e) {
  let n = process.argv.indexOf("--");
  return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}
function wr() {
  return Ne(process.env.CLAUDE_CODE_SIMPLE) || a("--bare");
}
function Mr() {
  return Ne(process.env.CLAUDE_CODE_SAFE_MODE) || a("--safe-mode");
}
function mie() {
  return Ne(process.env.CLAUDE_CODE_RESTRICTED);
}
function N(e) {
  return process.env.CLAUDE_CODE_SESSION_KIND === "bg"
    ? "run /stop, then claude --resume from your shell"
    : `restart without ${e}`;
}
function dy() {
  return a("--safe-mode") ? N("--safe-mode") : "unset CLAUDE_CODE_SAFE_MODE";
}
function HCt() {
  return a("--bare") ? N("--bare") : "unset CLAUDE_CODE_SIMPLE";
}
function wAn() {
  return Ne(process.env.CLAUDE_CODE_SUPERVISED);
}
function Qpi(e) {
  let n = {};
  if (e)
    for (let r of e) {
      let [t, ...o] = r.split("=");
      if (!t || o.length === 0)
        throw Error(
          `Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`
        );
      n[t] = o.join("=");
    }
  return n;
}
function YYt() {
  return xee(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function LCt(e) {
  switch (e) {
    case "global":
      return "https://aiplatform.googleapis.com";
    case "us":
    case "eu":
      return `https://aiplatform.${e}.rep.googleapis.com`;
    default:
      return `https://${e}-aiplatform.googleapis.com`;
  }
}
function tcr() {
  return Ne(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function Pv() {
  return !1;
}
function iN() {
  return !1;
}
function Zpi() {
  return { namespace: void 0, cluster: void 0 };
}
function VSe(e) {
  if (e) {
    let n = f.find(([r]) => e.startsWith(r));
    if (n) return xee(process.env[n[1]]?.trim()) || YYt();
  }
  return YYt();
}
export {
  Qr,
  xee,
  Ess,
  Tu,
  R2,
  ecr,
  tJr,
  Le,
  up,
  fie,
  Oit,
  kss,
  SAn,
  pie,
  qYt,
  nJr,
  Xpi,
  Jpi,
  wr,
  Mr,
  mie,
  dy,
  HCt,
  wAn,
  Qpi,
  YYt,
  LCt,
  tcr,
  Pv,
  iN,
  Zpi,
  VSe
};

//# sourceMappingURL=chunk-jazcqqqr.js.map
