// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, ke, kC, ao, Bxe } from "./chunk-wrtp8qz8.js";
import { R, N, d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { Kw } from "./chunk-45h8cn90.js";
import { Xse, eCt, ndr, hh, Ixe, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { m } from "./chunk-brszmkb3.js";
import { lLn } from "./chunk-k5nwr7mq.js";
import { bM } from "./chunk-5rw2zfa0.js";
import { SR } from "./chunk-7c3thgax.js";
import { eC, nm, _m, A$ } from "./chunk-0hjcje8e.js";
import { D$e } from "./chunk-arw2bgak.js";
import {
  NF,
  xd,
  fxo,
  Ik,
  _$t,
  Ru,
  iv,
  qMe,
  sY,
  nHr,
  MWe,
  Xn,
  ys,
  Ein,
  Bt
} from "./chunk-j0tbz6ra.js";
import { oP } from "./chunk-8w2npe9a.js";
import { Zb } from "./chunk-zjm5ncxc.js";
import { i_t } from "./chunk-ssq884a9.js";
import { xu, E8 } from "./chunk-zvsmc5fn.js";
import { OOo } from "./chunk-fnsjs1v2.js";
import { a$n, l$n, LBe } from "./chunk-dx5awfq0.js";
import { zco, BSs } from "./chunk-nzvp0yb4.js";
import { rLn, oLn } from "./chunk-d9vd9tj2.js";
import { sLn } from "./chunk-1npbkxek.js";
import { iLn } from "./chunk-0rge8xb0.js";
import { dMt, hNn } from "./chunk-ehkxehn3.js";
import { $7t, F7t, CMt, U7t, QNn, ZNn } from "./chunk-7dgevdgb.js";
import { Mp } from "./chunk-arcvz535.js";
import { spawnSync as I } from "child_process";
import { stat as w } from "fs/promises";
import { constants as y } from "os";
import { dirname as D } from "path";
async function p() {
  await Promise.all([
    Nt(Ixe(), 2000, "debug flush timeout (exec)").catch(() => {}),
    Nt(D$e(), 2000, "diag flush timeout (exec)").catch(() => {}),
    Nt(ndr(), 2000, "pre-exit flush timeout (exec)").catch(() => {}),
    Nt(bM(), 2000, "write queue drain timeout (exec)").catch(() => {})
  ]);
}
import { isAbsolute as T } from "path";
function h(e, r, i, n) {
  if ((oP(), O() === "windows" || !T(e))) return;
  let a, s;
  try {
    if (n) ((s = process.cwd()), hh(n));
    (process.execve(e, r, sLn(i)),
      t(`execve(${e}) returned \u2014 handing back to the caller`, { level: "warn" }));
  } catch (u) {
    ((a = N(u)),
      t(`execReplaceProcess: ${d(u)} \u2014 handing the error back to the caller`, {
        level: "warn"
      }));
  } finally {
    if (s !== void 0)
      try {
        hh(s);
      } catch {}
  }
  return a;
}
async function A(e) {
  let r = xd();
  if (!r) return !1;
  return L(r, e);
}
async function L(e, r) {
  if (
    await w(e).then(
      (a) => a.size > 0,
      () => !1
    )
  )
    return !0;
  let n = Mp(e, r);
  if (n === void 0) return !1;
  try {
    let a = await n.backend.statMeta(n.key);
    if (!a.ok && a.error.code !== "NotFound")
      t(`transcriptHasBytes: backend statMeta failed: ${a.error.code}`);
    return a.ok && a.value.size > 0;
  } catch (a) {
    return (l(a), !1);
  }
}
async function ZX(e, r, { responseStreaming: i = !1 } = {}, n) {
  let a = l$n(r);
  if (!a || i) return a;
  try {
    if ((await Ik([...e, Bt(a$n[r], "warning")], void 0, void 0, void 0, n), r === "relaunch"))
      await Q2(e, n);
  } catch (s) {
    throw (LBe(), s);
  }
  return !0;
}
async function ySr(e, { responseStreaming: r = !1 } = {}, i) {
  try {
    await ZX(e, "process_exit", { responseStreaming: r }, i);
  } catch (n) {
    l(n);
  }
}
async function fve(e, r = {}, i, n) {
  if ((await ySr(e, r, i), n)) await Xn(0, "prompt_input_exit", { removeWorktree: n });
  else await Xn(0, "prompt_input_exit");
}
var E =
    "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)",
  g = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`,
  S = "Automatic continue at the usage-limit reset was cancelled.";
function pve(e, r) {
  return r.includes(E) || r.includes(g) || r.includes(S) ? `${e} ${g}` : e;
}
function nte(e, r, { as: i = "sentence", exitsAfterward: n = !1 } = {}) {
  if ((LBe(), !r)) return e;
  if (i === "clause") return `${e} \u2014 ${E}`;
  return `${e}
${n ? S : g}`;
}
function Rct(e, r, i) {
  return s4(r, i).catch((n) => {
    if (n instanceof Error) n.message = nte(n.message, e, { as: "clause" });
    else LBe();
    throw n;
  });
}
async function Q2(e, r) {
  let i = C3e(e)?.uuid;
  try {
    if (i) await _$t(i, void 0, r);
    else if (fxo() && (await A(r))) await _$t(null, void 0, r);
  } catch (n) {
    l(n);
  }
}
function C3e(e) {
  return e.findLast((r) => (r.type === "user" || r.type === "assistant") && iv(r) && !NF(r.uuid));
}
var v =
    "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.",
  P = "Claude Code couldn't restart. Start Claude Code again.";
async function mve() {
  if (await A$()) return;
  throw (
    m("agent_launcher", "relaunch_launcher_not_runnable"),
    new R(
      _m() ??
        `${eC}: launcher \`${nm()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`,
      "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable"
    )
  );
}
async function s4(e = {}, r) {
  oP();
  let { cmd: i, prefixArgs: n } = SR(() => E8(e.launcher ?? xu()));
  await mve();
  let a = e.extraArgs ?? [],
    s;
  if (e.args) s = e.args;
  else if (e.freshIfNoTranscript && !(await A(r))) s = a;
  else s = ["--resume", q(), ...a];
  let u = s[0] === "--resume" && !e.args,
    C = ys();
  if ((Ein(), !C)) e.onShutdownClaimed?.();
  (qMe(),
    nHr(),
    await Promise.all([
      Nt(Ru(), 30000, "flush timeout (relaunch)").catch(() => {}),
      Nt(eCt(), Xse, "cleanup timeout")
        .catch(() => {})
        .then(() => Nt(MWe(), 1000, "analytics flush timeout").catch(() => {}))
    ]),
    e.preSpawn?.());
  let o = i_t(SR(() => ({ ...process.env })));
  if (
    (oLn(o),
    delete o.CLAUDE_CODE_TUI_JUST_SWITCHED,
    delete o.CLAUDE_CODE_TUI_TRIAL,
    delete o.CLAUDE_BRIDGE_REATTACH_SESSION,
    delete o.CLAUDE_BRIDGE_REATTACH_SEQ,
    delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY,
    delete o.CLAUDE_BRIDGE_REATTACH_GROUPING,
    delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT,
    delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG,
    delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL,
    delete o[OOo],
    delete o.CLAUDE_BG_WORKSPACE_TRUSTED,
    delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256,
    delete o[zco],
    kC() && Bxe())
  )
    ((o.CLAUDE_BG_WORKSPACE_TRUSTED = "1"), Object.assign(o, await BSs()));
  if (
    (delete o[dMt],
    iLn(o, s),
    delete o[$7t],
    delete o[CMt],
    delete o[U7t],
    delete o[F7t],
    e.proactivity && !e.args)
  )
    Object.assign(o, QNn(e.proactivity), ZNn(e.proactivity));
  Object.assign(o, e.env);
  for (let f of e.dropEnv ?? []) delete o[f];
  Object.assign(o, hNn());
  let _ = nLn();
  (await p(), lLn(), h(i, [i, ...n, ...s], o, _));
  for (let f of ["SIGINT", "SIGTERM", "SIGHUP"])
    (process.removeAllListeners(f), process.on(f, () => {}));
  (await p(), rLn());
  let c = I(i, [...n, ...s], { stdio: "inherit", env: o, cwd: _ });
  if ((process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), c.error))
    (t(`Failed to relaunch: ${c.error.message}`, { level: "error" }),
      await p(),
      sY(e.failedLine ?? (u ? v : P)),
      Kw("relaunch_spawn_error"),
      process.exit(1));
  if (c.signal)
    (process.removeAllListeners(c.signal),
      process.kill(process.pid, c.signal),
      process.exit(128 + (y.signals[c.signal] ?? 0)));
  process.exit(c.status ?? (c.signal ? 1 : 0));
}
function nLn() {
  let e = xd(),
    r = ke();
  if (e && D(e) === Zb(r)) return r;
  return ao();
}
export { ZX, ySr, fve, pve, nte, Rct, Q2, C3e, mve, s4, nLn };

//# sourceMappingURL=chunk-6z861t7d.js.map
