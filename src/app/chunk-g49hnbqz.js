// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ai, kn, k, cS, Gnt, Ij } from "./chunk-ajtyjx88.js";
async function n() {
  try {
    return await cS("tengu_violin_strad");
  } catch {
    return !1;
  }
}
function t() {
  try {
    return k("tengu_violin_strad", !1);
  } catch {
    return !1;
  }
}
async function tI() {
  try {
    return await cS("tengu_violin_wood");
  } catch {
    return !1;
  }
}
function Gm() {
  try {
    return k("tengu_violin_wood", !1);
  } catch {
    return !1;
  }
}
var a = "tengu_violin_maple";
async function dzt() {
  try {
    return (await tI()) || (await Gnt(a));
  } catch {
    return !1;
  }
}
function zm() {
  try {
    return Gm() || k(a, !1);
  } catch {
    return !1;
  }
}
async function UU() {
  return (await tI()) && (await n());
}
function pj() {
  return Gm() && t();
}
function b_e(e) {
  return e ? null : "flag_off";
}
function gz(e) {
  return b_e(e) === null;
}
function Mtt() {
  try {
    let { value: e, source: o } = kn("tengu_violin_wood", !1);
    return e === !1 && Ij(o);
  } catch {
    return !1;
  }
}
function jhn() {
  return Gm() && $bi("tengu_violin_wood");
}
async function cKo() {
  let e = performance.now();
  return (await Ai().catch(() => null), Math.round(performance.now() - e));
}
function $bi(e) {
  try {
    return Ij(kn(e, !1).source);
  } catch {
    return !1;
  }
}
async function Fbi() {
  try {
    return await cS("tengu_violin_amati");
  } catch {
    return !1;
  }
}
function c2r() {
  try {
    return k("tengu_violin_amati", !1);
  } catch {
    return !1;
  }
}
function Whn() {
  return Gm() && c2r();
}
async function czt() {
  let [e, o] = await Promise.all([tI(), Fbi()]);
  return e && o;
}
export { tI, Gm, dzt, zm, UU, pj, b_e, gz, Mtt, jhn, cKo, $bi, Fbi, c2r, Whn, czt };

//# sourceMappingURL=chunk-g49hnbqz.js.map
