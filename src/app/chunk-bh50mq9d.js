// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U } from "./chunk-wrtp8qz8.js";
import { E } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { ie } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { kq, Cxe } from "./chunk-cj37hmns.js";
import { Zar, it, ct } from "./chunk-qmmh8tq2.js";
import { oW, gSe, eee } from "./chunk-4zb0cwjd.js";
import { delimiter as l, join as w } from "path";
function Pi(e, t) {
  if (t in e) return e[t];
  if (O() !== "windows") return;
  let n = Object.keys(e).find((r) => r.toUpperCase() === t.toUpperCase());
  return n === void 0 ? void 0 : e[n];
}
class d {
  #e = !1;
  get forcedUnavailable() {
    return this.#e;
  }
  forceUnavailable(e) {
    this.#e = e;
  }
}
var L = new d();
function u() {
  return !1;
}
function L6o(e) {
  if (!Number.isInteger(e) || e <= 0) return;
  try {
    return Bun.ant.windowsProcessCreationTime(e) ?? void 0;
  } catch {
    return;
  }
}
async function AYr(e) {
  if (O() !== "linux" && O() !== "wsl") return;
  if (!KV(e)) return;
  try {
    let t = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
    return gSe(t);
  } catch {
    return;
  }
}
async function sbe(e) {
  return eee(await AYr(e));
}
async function hSn(e) {
  if (O() !== "macos") return sbe(e);
  let { code: t, stdout: n } = await it("ps", ["-o", "stat=", "-p", String(e)], { timeout: 1000 });
  return t === 0 && n.trim().startsWith("Z");
}
var T = 2147483647;
function KV(e) {
  return Number.isInteger(e) && e > 1 && e <= T;
}
function qm(e) {
  if (!KV(e)) return !1;
  try {
    return (process.kill(e, 0), !1);
  } catch (t) {
    return E(t) === "ESRCH";
  }
}
var g = 16;
async function mqe() {
  let e = O();
  if (e !== "linux" && e !== "wsl") return !0;
  let t = ie(),
    n = await t.readlink("/proc/self").catch(() => null);
  if (n === null || n !== String(process.pid)) return !1;
  let r = await t.readdir("/proc").catch(() => null);
  if (!r) return !1;
  return r.filter((i) => /^\d+$/.test(i.name)).length >= g;
}
function ARe(e, t) {
  let n = e.filter((r) => Math.abs(r) > 1);
  for (let r of n) {
    try {
      process.kill(r, "SIGTERM");
    } catch {
      continue;
    }
    return (
      setTimeout(
        (o, i, s) => {
          if (!_or(i, s)) return;
          try {
            process.kill(o, "SIGKILL");
          } catch {}
        },
        5000,
        r,
        Math.abs(n[0]),
        t
      ).unref(),
      !0
    );
  }
  return !1;
}
async function ibe(e, t, n = "SIGTERM") {
  if (!e || e <= 1 || t === void 0) return !1;
  if ((await f(e, t)) === "other") return !1;
  try {
    process.kill(-e, n);
  } catch {
    return !1;
  }
  if (n !== "SIGKILL")
    setTimeout(
      (r, o) => {
        f(r, o).then((i) => {
          if (i === "other") return;
          try {
            process.kill(-r, "SIGKILL");
          } catch {}
        });
      },
      5000,
      e,
      t
    ).unref();
  return !0;
}
async function f(e, t) {
  let n = await abe(e);
  if (n !== void 0) return RRe(t, n) ? "same" : "other";
  try {
    return (process.kill(e, 0), "other");
  } catch (r) {
    return E(r) === "ESRCH" ? "gone" : "other";
  }
}
function CRe(e) {
  try {
    let t = ie().readFileSync(`/proc/${e}/stat`, { encoding: "utf8" }),
      n = oW(t);
    return n && n.length > 0 ? n : void 0;
  } catch {
    return;
  }
}
function N6o(e, t = 12) {
  let n = [],
    r = e;
  for (let o = 0; o < t; o++) {
    let i = 0;
    try {
      let s = ie().readFileSync(`/proc/${r}/stat`, { encoding: "utf8" }),
        a = s.lastIndexOf(")"),
        c = s.slice(a + 2).split(" ");
      i = Number(c[1]);
    } catch {
      break;
    }
    if (!Number.isInteger(i) || i < 1) break;
    if ((n.push(i), i === 1)) break;
    r = i;
  }
  return n;
}
async function $6o(e, t = 10) {
  return (await yor(e, t)).ancestors;
}
async function yor(e, t = 10) {
  let n = `pid=${String(e)}; for i in $(seq 1 ${t}); do ppid=$(ps -o ppid= -p $pid 2>/dev/null | tr -d ' '); if [ -z "$ppid" ]; then echo FAIL; exit 0; fi; if [ "$ppid" = "0" ] || [ "$ppid" = "1" ]; then echo END; exit 0; fi; echo $ppid; pid=$ppid; done`,
    r = await ct("sh", ["-c", n], { timeout: 3000 }),
    o = (r.stdout ?? "")
      .trim()
      .split(
        `
`
      )
      .filter(Boolean);
  return {
    ancestors: o
      .filter((i) => i !== "END" && i !== "FAIL")
      .map((i) => parseInt(i, 10))
      .filter((i) => !isNaN(i)),
    readFailed: r.code !== 0 || o.at(-1) === "FAIL",
    truncated: r.code === 0 && o.at(-1) !== "END" && o.at(-1) !== "FAIL"
  };
}
function F6o(e) {
  try {
    let n = `ps -o command= -p ${String(e)}`,
      r = Zar(n, { timeout: 1000 });
    return r ? r.trim() : null;
  } catch {
    return null;
  }
}
function gqe(e) {
  try {
    {
      let n = ie().readFileSync(`/proc/${e}/stat`, { encoding: "utf8" });
      return oW(n);
    }
    let t = Zar(`LC_ALL=C TZ=UTC ps -o lstart= -p ${e}`, { timeout: 1000 });
    return t ? t.trim() : void 0;
  } catch {
    return;
  }
}
function _or(e, t) {
  if (t === void 0) return !0;
  return P(t, gqe(e));
}
function RRe(e, t) {
  if (t === e) return !0;
  return !1;
}
function P(e, t) {
  return t === void 0 || t === e || C(e, t);
}
function C(e, t) {
  if (!u()) return !1;
  let n = Number(e),
    r = Number(t);
  return (
    Number.isFinite(n) && Number.isFinite(r) && n > 300000000000000000 !== r > 300000000000000000
  );
}
async function JE(e, t) {
  if (t === void 0) return !0;
  return P(t, await kd(e));
}
async function Ly(e, t) {
  let n = await kd(e, { skipCache: !0 });
  return n === void 0 ? void 0 : RRe(t, n);
}
class h {
  #e = void 0;
  get token() {
    return this.#e;
  }
  set(e) {
    return ((this.#e = e), e);
  }
  reset() {
    this.#e = void 0;
  }
}
var Vue = new h();
class S {
  #e = new Map();
  get(e) {
    return this.#e.get(e);
  }
  set(e, t) {
    this.#e.set(e, t);
  }
}
var _ = new W(() => new S());
function que() {
  return Vue.token ?? Vue.set(gqe(process.pid));
}
var y = 1000;
async function vb() {
  return (
    Vue.token ??
    (await Pe(
      kd(process.pid).then((e) => Vue.token ?? Vue.set(e)),
      y
    ))
  );
}
function T0(e) {
  if (u()) return e.procStart !== void 0 ? void 0 : e.procStartFt;
  return e.procStart;
}
function ese(e) {
  return u() ? { procStart: void 0, procStartFt: e } : { procStart: e, procStartFt: void 0 };
}
var x = 60000,
  N = 5000;
async function kd(e, t) {
  let n = Date.now(),
    r = _.of(U().host);
  if (t?.env !== void 0) return b(e, t.env);
  if (!t?.skipCache) {
    let a = r.get(e),
      c = a?.miss ? N : x;
    if (a && n - a.at < c) return a.p;
  }
  let o = b(e),
    i = { at: n, p: o };
  r.set(e, i);
  let s = await o;
  if (s === void 0 && r.get(e) === i) ((i.miss = !0), (i.at = Date.now()));
  return s;
}
var m = 250,
  p = 2500;
async function abe(e) {
  let t = Date.now() + p,
    n = !1,
    r = await Pe(
      kd(e, { skipCache: !0 }).finally(() => {
        n = !0;
      }),
      p
    );
  if (r !== void 0 || !n) return r;
  let o = m + Math.floor(Math.random() * m),
    i = t - Date.now() - o;
  if (i <= 0) return;
  return (await X(o), Pe(kd(e, { skipCache: !0 }), i));
}
function I(e) {
  let t = Cxe(Pi(e, "PATH") ?? "").split(l);
  return t.filter((r) => /^\/bin\/*$/.test(r)).join(l);
}
async function b(e, t) {
  let n = t === void 0 ? {} : { env: t, extendEnv: !1 };
  try {
    {
      let i = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" });
      return oW(i);
    }
    let r = t === void 0 ? "ps" : kq("ps", I(t));
    if (r === null) return;
    let o = await ct(r, ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      ...n,
      env: { ...(t ?? process.env), LC_ALL: "C", TZ: "UTC" }
    });
    return o.code === 0 && o.stdout ? o.stdout.trim() : void 0;
  } catch {
    return;
  }
}
async function hrt(e) {
  try {
    {
      let r = await ie().readFile(`/proc/${e}/stat`, { encoding: "utf8" }),
        o = Number(oW(r)),
        i = await ie().readFile("/proc/stat", { encoding: "utf8" }),
        s = Number(/^btime (\d+)/m.exec(i)?.[1]);
      if (!Number.isFinite(o) || !Number.isFinite(s)) return null;
      return s * 1000 + (o / 100) * 1000;
    }
    let t = await ct("ps", ["-o", "lstart=", "-p", String(e)], {
      timeout: 1000,
      env: { ...process.env, LC_ALL: "C", TZ: "UTC" }
    });
    if (t.code !== 0 || !t.stdout?.trim()) return null;
    let n = Date.parse(`${t.stdout.trim()} UTC`);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}
export {
  Pi,
  L6o,
  AYr,
  sbe,
  hSn,
  KV,
  qm,
  mqe,
  ARe,
  ibe,
  CRe,
  N6o,
  $6o,
  yor,
  F6o,
  gqe,
  _or,
  RRe,
  JE,
  Ly,
  Vue,
  que,
  vb,
  T0,
  ese,
  kd,
  abe,
  hrt
};

//# sourceMappingURL=chunk-bh50mq9d.js.map
