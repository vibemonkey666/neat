// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { F } from "./chunk-wrtp8qz8.js";
import { X } from "./chunk-4hww8411.js";
import { oF, Vo, t } from "./chunk-4kxznmzw.js";
import { dc } from "./chunk-a16y5hcz.js";
import { O } from "./chunk-19xvg81r.js";
import { uE, hn } from "./chunk-wr0p4ndg.js";
import { J9 } from "./chunk-adv24f35.js";
import { qm, mqe, Ly, vb, kd } from "./chunk-bh50mq9d.js";
import { p } from "./chunk-qmkm2x59.js";
import { lbe, hR } from "./chunk-tv3shk24.js";
import { SG } from "./chunk-6h7ejyet.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { o, v, Bd, u, A } from "./chunk-0bqrj5ah.js";
import { join as y } from "path";
var too = /^[A-Za-z0-9]{1,64}$/,
  R = /^background-[A-Za-z0-9]{1,64}\.jsonl$/,
  S = 80,
  _ = 64,
  B = 8192,
  L = 256,
  w = 32,
  z = 250,
  C = p(() =>
    u({
      v: A(1),
      id: o().regex(too),
      owner: Bd().positive().max(2147483647),
      owner_start: o().min(1).max(64).optional(),
      pid: Bd().positive().max(2147483647).optional(),
      pid_start: o().min(1).max(64).optional(),
      pids_in: o().min(1).max(1024).optional(),
      started_at: v().nonnegative(),
      command: o().max(4 * S),
      caller: o().max(4 * _),
      folder: o().min(1).max(4096)
    })
  );
async function noo(e) {
  if (!too.test(e.id)) return;
  try {
    let n = {
      v: 1,
      id: e.id,
      owner: process.pid,
      owner_start: await vb(),
      pid: e.pid,
      pid_start: e.pid === void 0 ? void 0 : await kd(e.pid, { skipCache: !0 }),
      pids_in: await P(),
      started_at: Date.now(),
      command: c(e.command, S),
      caller: c(e.caller, _),
      folder: e.folder
    };
    (await hn().mkdir(SG(), 448), await hn().writeExclusive(m(e.id), oF(n), 384), await Lps());
  } catch (n) {
    t(`[remote-tools] background command record not written: ${d(n)}`, { level: "warn" });
  }
}
async function hhr(e) {
  (await f(l(e)), await f(m(e)));
}
function yhr(e) {
  return f(l(e));
}
async function Lps() {
  let e = [];
  try {
    let n = await hn().list(SG());
    for (let i of n.filter((r) => R.test(r)).slice(0, L)) {
      let r = await ugi(i.slice(11, -6));
      if (r !== void 0 && r !== "ended") e.push(r);
    }
  } catch (n) {
    t(`served background records: ${d(n)}`);
  }
  return e.sort(
    (n, i) =>
      n.folder.localeCompare(i.folder) ||
      n.caller.localeCompare(i.caller) ||
      n.started_at - i.started_at ||
      n.id.localeCompare(i.id)
  );
}
async function ugi(e) {
  if (!too.test(e)) return;
  try {
    let n = await hn().readTail(m(e), B, { noFollow: !0 }),
      i = C().safeParse(Vo(n.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let r = i.data,
      a =
        (r.owner === process.pid && r.owner_start !== void 0 && r.owner_start === (await vb())) ||
        (await k(r.owner, r.owner_start));
    if (a || (await k(r.pid, r.pid_start))) return { ...r, ownerGone: !a };
    if (await D(r)) return (await hhr(e), "ended");
  } catch {}
  return;
}
async function rki(e) {
  return F(await Lps(), (n) => !n.ownerGone && e.includes(n.folder));
}
async function oki(e, n = 1e4) {
  let i = hn();
  try {
    await i.writeExclusive(
      l(e),
      `{}
`,
      384
    );
  } catch (a) {
    if (E(a) !== "EEXIST") return "not_asked";
  }
  let r = Date.now() + n;
  while (Date.now() < r)
    if ((await X(z), (await i.lstat(m(e)).catch(() => null)) === void 0))
      return (await yhr(e), "stopped");
  return (await f(l(e))) ? "unanswered" : "pending";
}
function ski(e, { now: n, stopHint: i }) {
  if (e.length === 0) return [];
  let r = ["background commands started by cloud sessions:"],
    a;
  for (let s of e.slice(0, w)) {
    let g = `  in ${c(s.folder, 200)}, cloud session ${c(s.caller, _ + 1)}:`;
    if (g !== a) ((a = g), r.push(g));
    let b = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`,
      x = uE(Math.max(0, n - s.started_at));
    r.push(
      `    ${s.id}  ${b}  running ${x}  ${c(s.command, S + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`
    );
  }
  if (e.length > w) r.push(`  and ${e.length - w} more`);
  if (i) r.push("  stop one: claude daemon remote-control stop-shell <id>");
  return r;
}
function m(e) {
  return y(SG(), `background-${e}.jsonl`);
}
function l(e) {
  return y(SG(), `background-${e}.stop.jsonl`);
}
async function k(e, n) {
  return e !== void 0 && Xa(e) && (n === void 0 || (await Ly(e, n)) !== !1);
}
async function D(e) {
  if (
    e.pids_in === void 0 ||
    e.pids_in !== (await P()) ||
    !(await mqe()) ||
    !(await h(e.owner, e.owner_start))
  )
    return !1;
  let { pid: n } = e;
  if (n === void 0 || !(await h(n, e.pid_start))) return !1;
  if (!qm(n) || O() === "windows") return !0;
  try {
    return (process.kill(-n, 0), !1);
  } catch (i) {
    return E(i) === "ESRCH";
  }
}
async function h(e, n) {
  return qm(e) || (n !== void 0 && (await Ly(e, n)) === !1);
}
async function P() {
  try {
    return `${await hR()} ${lbe()}`;
  } catch {
    return;
  }
}
async function f(e) {
  try {
    return (await hn().delete(e), !0);
  } catch {
    return !1;
  }
}
function c(e, n) {
  return J9(dc(e), n);
}
export { too, noo, hhr, yhr, Lps, ugi, rki, oki, ski };

//# sourceMappingURL=chunk-47k1e1dm.js.map
