// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E, G } from "./chunk-fs43t96t.js";
import { ie } from "./chunk-4kxznmzw.js";
import { Qr, Le } from "./chunk-jazcqqqr.js";
import { O } from "./chunk-19xvg81r.js";
import { Dn, X0 } from "./chunk-qywdxehb.js";
import { i } from "./chunk-cj37hmns.js";
import { hqe } from "./chunk-tv3shk24.js";
import { createHash as L, randomBytes as w } from "crypto";
import {
  lstatSync as j,
  mkdirSync as K,
  readFileSync as V,
  rmSync as W,
  writeFileSync as z
} from "fs";
import {
  chmod as h,
  lstat as p,
  mkdir as d,
  readdir as m,
  readFile as k,
  rm as N,
  utimes as X
} from "fs/promises";
import { connect as H } from "net";
import { basename as J, dirname as F, join as o, resolve as B } from "path";
import { readFile as x } from "fs/promises";
var f = 65534,
  _ = new Set([
    "/",
    "/dev",
    "/dev/shm",
    "/run",
    "/run/user",
    "/tmp",
    "/var",
    "/var/tmp",
    "/var/run",
    "/home",
    "/var/home",
    "/root",
    "/var/roothome",
    "/mnt",
    "/mnt/wslg"
  ]);
function $qs() {
  return _;
}
async function v() {
  try {
    return U(await x("/proc/self/uid_map", "utf8"));
  } catch {
    return;
  }
}
function U(e) {
  let n = [];
  for (let t of e.split(`
`)) {
    if (t.trim() === "") continue;
    let r = t.trim().split(/\s+/),
      s = Number(r[0]),
      u = Number(r[1]),
      a = Number(r[2]);
    if (
      r.length !== 3 ||
      !Number.isSafeInteger(s) ||
      s < 0 ||
      !Number.isSafeInteger(u) ||
      u < 0 ||
      !Number.isSafeInteger(a) ||
      a <= 0
    )
      return;
    n.push({ innerStart: s, hostStart: u, count: a });
  }
  return n;
}
function l(e) {
  return e.length === 1 && e[0].innerStart === 0 && e[0].count >= 4294967295;
}
async function g() {
  try {
    return b(await x("/proc/sys/kernel/overflowuid", "utf8"));
  } catch {
    return;
  }
}
function b(e) {
  let n = e.trim();
  if (!/^\d+$/.test(n)) return;
  let t = Number(n);
  return Number.isSafeInteger(t) ? t : void 0;
}
function I(e, n) {
  if (e.length === 0 || n === void 0) return;
  return e.some((r) => n >= r.innerStart && n < r.innerStart + r.count) ? void 0 : n;
}
async function Fqs() {
  let e = process.getuid?.(),
    n = await v();
  if (n === void 0) {
    let t = (await g()) ?? f;
    return e === t
      ? { unmappedOwnerUid: void 0, uidCollapses: !0, rootUidAmbiguous: t === 0 }
      : void 0;
  }
  if (l(n)) return;
  return M(n, e);
}
async function M(e, n) {
  let t = await g(),
    r = t ?? f;
  return {
    unmappedOwnerUid: I(e, t),
    uidCollapses: e.length === 0 || (n !== void 0 && n === r),
    rootUidAmbiguous: t === 0
  };
}
async function Pun() {
  let e = process.getuid?.();
  if (e === void 0) return;
  let n = await v();
  if (n === void 0) return;
  if (l(n)) return e;
  let t = (await g()) ?? f;
  if (n.length === 0 || e === t) return;
  if (((u) => n.some((a) => u >= a.innerStart && u < a.innerStart + a.count))(t)) return e;
  let s = n.find((u) => e >= u.innerStart && e < u.innerStart + u.count);
  return s === void 0 ? void 0 : s.hostStart + (e - s.innerStart);
}
function aUr() {
  return ((hqe.uidsCollapse ??= A(ie())), hqe.uidsCollapse);
}
function A(e) {
  let n = process.getuid?.(),
    t;
  try {
    let u = e.readFileSync("/proc/self/uid_map", { encoding: "utf8" });
    t = U(u);
  } catch {
    t = void 0;
  }
  let r;
  try {
    let a = e.readFileSync("/proc/sys/kernel/overflowuid", { encoding: "utf8" });
    r = b(a);
  } catch {
    r = void 0;
  }
  let s = r ?? f;
  if (t === void 0) return n === s;
  if (l(t)) return !1;
  return t.length === 0 || (n !== void 0 && n === s);
}
function c(e) {
  return e === void 0 ? o(Le(), "daemon") : o(e, "daemon");
}
function Y() {
  return L("sha256").update(B(Le())).digest("hex").slice(0, 8);
}
function AHe() {
  let e = process.getuid?.() ?? 0,
    n = i.TERMUX_VERSION && i.PREFIX ? o(i.PREFIX, "tmp") : "/tmp";
  return o(n, `cc-daemon-${e}`, Y());
}
var q = /^[a-f0-9]{16}$/;
function y$o(e) {
  return o(c(e), "pipe.key");
}
var Q = Qr(
  () => {
    let e = y$o();
    for (let n = 0; n < 8; n++) {
      let t;
      try {
        let s = j(e);
        if (!s.isFile() || s.size > 4096) {
          try {
            W(e, { recursive: !0, force: !0 });
          } catch {}
          t = "invalid";
        } else t = V(e, "utf8").trim();
      } catch (s) {
        if (!G(s)) throw s;
      }
      if (t !== void 0) {
        if (q.test(t)) return t;
        if (t === "" && n < 3) continue;
        let s = w(8).toString("hex");
        return (X0(e, s, 384), s);
      }
      let r = w(8).toString("hex");
      K(c(), { recursive: !0, mode: 448 });
      try {
        return (z(e, r, { flag: "wx", mode: 384 }), r);
      } catch (s) {
        if (E(s) !== "EEXIST") throw s;
      }
    }
    throw Error("daemon pipe.key is not a valid nonce");
  },
  () => Le()
);
function y(e) {
  return `\\\\.\\pipe\\cc-daemon-${Q()}-${e}`;
}
function WT(e) {
  return e.replace(/cc-daemon-[0-9a-f]{16}/g, "cc-daemon-*");
}
function u1t(e) {
  if (e instanceof Error) {
    if (((e.message = WT(e.message)), typeof e.stack === "string")) e.stack = WT(e.stack);
  }
  return e;
}
function v3n(e) {
  return o(c(e), "control.key");
}
async function Uqs() {
  let e = v3n();
  try {
    let t = await p(e);
    if (t.isFile() && t.size <= 4096) {
      let r = (await k(e, "utf8")).trim();
      if (r) return r;
    } else await N(e, { recursive: !0, force: !0 }).catch(() => {});
  } catch (t) {
    if (!G(t)) throw t;
  }
  let n = w(16).toString("hex");
  return (await d(c(), { recursive: !0, mode: 448 }), await Dn(e, n, 384), n);
}
async function CHe() {
  try {
    let e = await p(v3n());
    if (!e.isFile() || e.size > 4096) return;
    return (await k(v3n(), "utf8")).trim() || void 0;
  } catch {
    return;
  }
}
async function Bqs() {
  let e = c();
  if (O() === "windows") {
    (await d(e, { recursive: !0 }), await h(e, 448).catch(() => {}));
    return;
  }
  (await d(e, { recursive: !0, mode: 448 }), S());
  let n = process.getuid?.(),
    t = await p(e);
  if (n !== void 0 && t.uid !== n)
    throw Error(`refusing to use daemon dir: ${e} is owned by uid ${t.uid}`);
  if ((t.mode & 511) !== 448) await h(e, 448);
}
async function Iun() {
  if (O() === "windows") return;
  let e = AHe();
  await d(e, { recursive: !0, mode: 448 });
  let n = new Date();
  (await X(e, n, n).catch(() => {}), await P([F(e), e]));
}
var lUr = "ENOTOWNED";
async function P(e) {
  let n = process.getuid?.();
  S();
  for (let t of e) {
    let r = await p(t);
    if (n !== void 0 && r.uid !== n)
      throw Object.assign(Error(`refusing to bind: ${t} is owned by uid ${r.uid}`), { code: lUr });
    if ((r.mode & 511) !== 448) await h(t, 448);
  }
}
var _$o =
  "refusing to use the daemon socket: this process runs in a user namespace without a uid mapping, so directory and peer ownership cannot be verified (start it with a mapping, e.g. unshare -Ur)";
function S() {
  if (aUr()) throw Object.assign(Error(_$o), { code: lUr });
}
async function jqs(e) {
  if (O() === "windows") {
    await d(e, { recursive: !0 }).catch(() => {});
    return;
  }
  await Iun();
  let n = [v_t(), dUr()];
  for (let t of n) await d(t, { recursive: !0, mode: 448 });
  if (!n.includes(e)) {
    if (
      await d(e, { recursive: !0, mode: 448 }).then(
        () => !0,
        () => !1
      )
    )
      n.push(e);
  }
  await P(n);
}
function Wqs() {
  if (O() === "windows") return;
  let e = AHe(),
    n = F(e),
    t = J(e);
  m(n, { withFileTypes: !0 })
    .then(async (r) => {
      for (let s of r) {
        if (!s.isDirectory() || s.name === t) continue;
        let u = o(n, s.name);
        if (!(await Z(o(u, "control.sock")))) continue;
        let a = await p(u).catch(() => null);
        if (!a || Date.now() - a.mtimeMs < 1e4) continue;
        let R = await m(o(u, "rv")).catch(() => []),
          T = await m(o(u, "pty")).catch(() => []),
          C = await m(o(u, "spare")).catch(() => []);
        if (R.length || T.length || C.length) continue;
        await N(u, { recursive: !0, force: !0 }).catch(() => {});
      }
    })
    .catch(() => {});
}
function b$o(e) {
  return e === "ENOENT" || e === "ECONNREFUSED" || e === "ENOTSOCK";
}
function Z(e) {
  let n,
    t = new Promise((s) => {
      n = s;
    }),
    r = H(e);
  return (
    r.setTimeout(1000, () => {
      (r.destroy(), n(!1));
    }),
    r.on("error", (s) => {
      n(b$o(E(s)));
    }),
    r.once("connect", () => {
      (r.end(`{"op":"ping"}
`),
        n(!1));
    }),
    t
  );
}
function sye(e) {
  return o(c(e), "dispatch");
}
function S$o() {
  return o(c(), "dispatch", "rejected");
}
function CY(e) {
  return o(c(e), "roster.json");
}
var E3n = "attach-journal";
function iye() {
  return o(c(), E3n);
}
function dUr() {
  return o(AHe(), "rv");
}
function b_t(e) {
  return o(c(e), "auth");
}
function S_t(e) {
  return o(b_t(), `${e}.json`);
}
function Oun() {
  return o(c(), "host-managed");
}
function ZTe(e) {
  return o(Oun(), e);
}
function w_t(e) {
  return o(b_t(), `${e}.tokens.json`);
}
function Mun(e) {
  if (O() === "windows") return y(`rv-${e}`);
  return o(dUr(), `${e}.sock`);
}
function v_t() {
  return o(AHe(), "pty");
}
function GT(e) {
  if (O() === "windows") return y(`pty-${e}`);
  return o(v_t(), `${e}.sock`);
}
function Ude() {
  return o(AHe(), "spare");
}
function Gqs(e) {
  return o(Ude(), `${e}.pty.sock`);
}
function zqs(e) {
  return o(Ude(), `${e}.claim.sock`);
}
function sZe() {
  return o(c(), "pty-pids");
}
function aye(e) {
  return o(sZe(), `${e}.pid`);
}
function GA(e) {
  return D(e, "err");
}
function KL(e) {
  return D(e, "late");
}
function D(e, n) {
  if (O() === "windows") return o(sZe(), `${e.split("\\").pop()}.${n}`);
  return `${e}.${n}`;
}
function UQ(e) {
  if (O() === "windows") return o(sZe(), `${e.split("\\").pop()}.exec-exit`);
  return `${e}.exec-exit`;
}
function RY() {
  if (O() === "windows") return y("control");
  return (S(), o(AHe(), "control.sock"));
}
export {
  $qs,
  Fqs,
  Pun,
  aUr,
  AHe,
  y$o,
  WT,
  u1t,
  v3n,
  Uqs,
  CHe,
  Bqs,
  Iun,
  lUr,
  _$o,
  jqs,
  Wqs,
  b$o,
  sye,
  S$o,
  CY,
  E3n,
  iye,
  dUr,
  b_t,
  S_t,
  Oun,
  ZTe,
  w_t,
  Mun,
  v_t,
  GT,
  Ude,
  Gqs,
  zqs,
  sZe,
  aye,
  GA,
  KL,
  UQ,
  RY
};

//# sourceMappingURL=chunk-n2fmpv44.js.map
