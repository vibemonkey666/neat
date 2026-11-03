// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _r, We } from "./chunk-pgnjjhxv.js";
import { E, G } from "./chunk-fs43t96t.js";
import { sg, Xu } from "./chunk-byyv32qz.js";
import { yn, Ms } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { v_t, GT, Ude, sZe, aye, GA, KL, UQ } from "./chunk-n2fmpv44.js";
import { bl } from "./chunk-jwqtbev0.js";
import { JN, Hne, dQe } from "./chunk-fnsjs1v2.js";
import { fo } from "./chunk-brszmkb3.js";
import { ARe, ibe, abe } from "./chunk-bh50mq9d.js";
import { oy } from "./chunk-at88wjsn.js";
import { ZF } from "./chunk-e4f7sb0e.js";
import { Ce } from "./chunk-a2y39866.js";
var h = Ce(oy(), 1),
  B = ["dev", "engine"];
function qat(n) {
  return B.find((e) => n.includes(`-${e}.`)) ?? null;
}
function k3t(n) {
  return qat(n) !== null;
}
function Yat(n, e) {
  if (!n) return !1;
  let r = qat(n),
    t = qat(e);
  return r !== null && t !== null && r !== t;
}
function Xat(n) {
  let e;
  for (let f of n.matchAll(/-(?:dev|engine)\.(\d{8})\.t(\d{6})(?:\.|$)/g)) e = f;
  let r = e?.[1],
    t = e?.[2];
  if (!r || !t) return null;
  let i = Date.UTC(
    Number(r.slice(0, 4)),
    Number(r.slice(4, 6)) - 1,
    Number(r.slice(6, 8)),
    Number(t.slice(0, 2)),
    Number(t.slice(2, 4)),
    Number(t.slice(4, 6))
  );
  return new Date(i).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") ===
    `${r}t${t}`
    ? i
    : null;
}
function kcs(n, e) {
  let r = Xat(n),
    t = Xat(e);
  return r !== null && t !== null && t < r;
}
function lxt(n, e) {
  let r = Xat(n),
    t = Xat(e);
  if (r !== null && t !== null) {
    if (qat(n) !== qat(e)) return !1;
    return r > t;
  }
  if (k3t(n) || k3t(e)) return !1;
  return h.valid(n) !== null && h.valid(e) !== null && h.gt(n, e);
}
function xpr(n, e, r) {
  if (!n) return !1;
  if (n === r) return !0;
  let t = Xat(n);
  if (t !== null) return t >= e.commitMs;
  if (k3t(n)) return !1;
  return h.valid(n) !== null && h.gte(n, e.release);
}
var P = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]),
  A = /\x1b\[\?([\d;]+)([hl])/g;
function T3t() {
  let n = new Set(),
    e = "";
  return {
    feed(r, t) {
      let i = e ? e + r : r,
        a = 0,
        c = !1;
      for (let m of i.matchAll(A)) {
        let k = m[2] === "h";
        for (let w of m[1].split(";")) {
          let o = Number(w);
          if (P.has(o) && n.has(o) !== k) {
            if (k) (n.add(o), t?.(o));
            else n.delete(o);
            c = !0;
          }
        }
        a = m.index + m[0].length;
      }
      let f = i.slice(Math.max(a, i.length - 16)),
        y = f.lastIndexOf("\x1B");
      return ((e = y >= 0 && /^\x1b(\[(\?[\d;]*)?)?$/.test(f.slice(y)) ? f.slice(y) : ""), c);
    },
    seed(r) {
      for (let t of r) if (P.has(t)) n.add(t);
    },
    snapshot() {
      return [...n];
    }
  };
}
import { lstat as C, readdir as b, unlink as p } from "fs/promises";
import { connect as v } from "net";
import { basename as S, join as x } from "path";
async function Ppr(n, e) {
  if (e.launch.mode !== "exec" || !n) return null;
  try {
    let r = await bl(UQ(n), 8192);
    if (r == null) return null;
    let t = JSON.parse(r);
    if (typeof t?.code !== "number") return null;
    let i =
        yn(typeof t.tail === "string" ? t.tail : "")
          .replace(
            /\r\n?/g,
            `
`
          )
          .split(
            `
`
          )
          .findLast((y) => y.trim())
          ?.trim() ?? "",
      a = Xu(Ms(i), sg);
    if (t.code === 0) return { state: "done", detail: a || "(no output)", code: 0 };
    let c = typeof t.signal === "string" ? t.signal : void 0;
    if (c === "SIGINT" || c === "SIGQUIT")
      return { state: "stopped", detail: "stopped", code: t.code };
    let f = c ? `${c} (${t.code})` : `exit ${t.code}`;
    return { state: "crashed", detail: a ? `${f} \u2014 ${a}` : f, signal: c, code: t.code };
  } catch {
    return null;
  }
}
async function $eo(n = {}, e) {
  return fo("daemon_bg_reap_all", async () => {
    let r = await JN({ silent: !0 }, e),
      t = new Map();
    for (let [o, s] of Object.entries(r.workers))
      t.set(o, {
        pid: s.pid,
        procStart: s.procStart,
        ptySock: s.ptySock,
        dispatch: s.dispatch,
        replPid: s.replPid,
        replProcStart: s.replProcStart
      });
    let i = O() === "windows",
      [a, c] = i ? [sZe(), ".pid"] : [v_t(), ".sock"],
      f = i && e ? await Feo(e) : await b(a).catch(() => []),
      y = new Set(f.filter((o) => o.endsWith(c)));
    for (let o of f) {
      if (!o.endsWith(c)) {
        if (!i) {
          let d = [".err", ".late", ".exec-exit", ".err.read"].find((g) => o.endsWith(`.sock${g}`));
          if (d && !y.has(o.slice(0, -d.length))) {
            let g = o.slice(0, -`.sock${d}`.length);
            if (!(d === ".exec-exit" && t.has(g))) await p(x(a, o)).catch(() => {});
          }
        }
        continue;
      }
      let s = o.slice(0, -c.length);
      if (t.has(s)) continue;
      let u = i ? Number((e ? await Ueo(e, s) : await bl(aye(s), A3t)) ?? "0") : 0;
      t.set(s, { pid: u, ptySock: GT(s) });
    }
    if (!i) {
      let o = new Set();
      for (let u of t.values()) if (u.ptySock) o.add(u.ptySock);
      let s = await b(Ude()).catch(() => []);
      for (let u of s) {
        if (!u.endsWith(".pty.sock")) continue;
        let d = x(Ude(), u);
        if (o.has(d)) continue;
        t.set(`spare:${u}`, { pid: 0, ptySock: d });
      }
    }
    let m = 0,
      k = new Set(),
      w = setInterval(() => {}, 60000);
    if (
      (await Promise.all(
        Array.from(t.entries()).map(async ([o, s]) => {
          let u = s.dispatch ? await Ppr(s.ptySock, s.dispatch) : null;
          if (s.ptySock && (await U5e(s.ptySock, e))) m++;
          else if (s.pid) {
            let d = await Beo(s.pid, s.procStart),
              g = d !== "unverified" && (await ibe(s.replPid, s.replProcStart));
            switch (d) {
              case "killed":
                m++;
                break;
              case "unverified":
                k.add(o);
                return;
              case "gone":
              case "foreign":
                if (g) m++;
                break;
              default:
            }
          }
          if (!o.startsWith("spare:")) {
            let d = { state: "stopped", detail: "stopped" },
              g = u?.state === "done" ? u : n.supervisorKilledAll ? d : (u ?? d);
            if ((await dQe(o, g.state, g.detail, void 0, e), i && e))
              await e.delete(We.daemon(["pty-pids", S(UQ(s.ptySock ?? GT(o)))])).catch(() => {});
            else await p(UQ(s.ptySock ?? GT(o))).catch(() => {});
          }
          if (i)
            if (e) await D(e, o);
            else {
              await p(aye(o)).catch(() => {});
              let d = GA(GT(o));
              (await p(d).catch(() => {}),
                await p(`${d}.read`).catch(() => {}),
                await p(KL(GT(o))).catch(() => {}));
            }
        })
      ).finally(() => clearInterval(w)),
      t.size > 0)
    )
      await Hne((o) => {
        for (let s of t.keys()) if (!k.has(s)) delete o.workers[s];
      }, e).catch(l);
    return { reaped: m, kept: k.size };
  });
}
async function Feo(n) {
  let e = [],
    r;
  do {
    let t = await n
      .listEntries(
        { namespace: "daemon", relPath: ["pty-pids"] },
        { cursor: r, skipKeyStats: !0, skipScopeStats: !0 }
      )
      .catch(() => {
        return;
      });
    if (t === void 0 || !t.ok) return [];
    for (let i of t.value.items)
      if (i.kind === "key" && i.key.namespace === "daemon") {
        let a = i.key.relPath.at(-1);
        if (a !== void 0 && i.key.relPath.length === 2 && _r(a)) e.push(a);
      }
    r = t.value.cursor;
  } while (r !== void 0);
  return e;
}
var A3t = 4096;
async function N(n) {
  try {
    let e = await C(aye(n));
    return !e.isFile() || e.size > A3t;
  } catch (e) {
    return !G(e);
  }
}
async function Ueo(n, e) {
  if (await N(e)) return null;
  let r = await n
    .readText([{ key: We.daemon(["pty-pids", `${e}.pid`]), offset: 0, length: A3t + 1 }])
    .catch(() => {
      return;
    });
  if (r === void 0 || !r.ok) return null;
  let t = r.value.items[0];
  if (!t.found || t.totalBytes > A3t) return null;
  return t.value;
}
async function D(n, e) {
  (await n.delete(We.daemon(["pty-pids", `${e}.pid`])).catch(() => {}), await T(n, GT(e)));
}
async function T(n, e) {
  let r = GA(e);
  for (let t of [S(r), `${S(r)}.read`, S(KL(e))])
    await n.delete(We.daemon(["pty-pids", t])).catch(() => {});
}
function U5e(n, e) {
  return new Promise((r) => {
    let t = !1,
      i = (c) => {
        if (t) return;
        ((t = !0), r(c));
      },
      a = v(n);
    (a.unref(),
      a.setTimeout(2000, () => {
        (a.destroy(), i(!1));
      }),
      a.on("error", () => {
        p(n).catch(() => {});
        let c = GA(n);
        if (e && O() === "windows") T(e, n).catch(() => {});
        else (p(c).catch(() => {}), p(`${c}.read`).catch(() => {}), p(KL(n)).catch(() => {}));
        i(!1);
      }),
      a.once("connect", () => {
        (a.resume(), a.write(ZF({ t: "kill", sig: "SIGTERM" })));
      }),
      a.once("close", () => i(!0)));
  });
}
function Qxn(n) {
  return new Promise((e) => {
    let r = !1,
      t = (a) => {
        if (r) return;
        ((r = !0), e(a));
      },
      i = v(n);
    (i.unref(),
      i.setTimeout(250, () => {
        (i.destroy(), t(!1));
      }),
      i.on("error", () => t(!1)),
      i.once("connect", () => {
        (i.end(ZF({ t: "pong" })), t(!0));
      }));
  });
}
async function Beo(n, e) {
  try {
    process.kill(n, 0);
  } catch (t) {
    if (E(t) !== "ESRCH") return "foreign";
    return ARe([-n, n], e) ? "killed" : "gone";
  }
  if (e === void 0) return "foreign";
  let r = await abe(n);
  if (r === void 0) return "unverified";
  if (r !== e) return "foreign";
  return ARe([-n, n], e) ? "killed" : "gone";
}
export { qat, k3t, Yat, Xat, kcs, lxt, xpr, T3t, Ppr, $eo, Feo, A3t, Ueo, U5e, Qxn, Beo };

//# sourceMappingURL=chunk-t5yf7jby.js.map
