// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { R, N, d, E } from "./chunk-fs43t96t.js";
import { MB } from "./chunk-6bbdndfe.js";
import { De } from "./chunk-2qx8pe6s.js";
import { F, nt } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, _, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { ree } from "./chunk-qywdxehb.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { p } from "./chunk-qmkm2x59.js";
import { aa, so } from "./chunk-5rw2zfa0.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { KA, uv } from "./chunk-d5zj5299.js";
import { tR } from "./chunk-wany0nxw.js";
import { qmn, JWt, SQn, wQn } from "./chunk-e7w635nh.js";
import { Pu, KZe, yp } from "./chunk-m5rm7nsm.js";
import { dQr, D2, H2 } from "./chunk-bha6jwbq.js";
import { zit, QAn } from "./chunk-vnvpyk5w.js";
import { npt } from "./chunk-hm3z7hpp.js";
import { Yin, bFs } from "./chunk-9e3vh36m.js";
import { aY, iqn } from "./chunk-eacq4pgt.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { __e } from "./chunk-m18k9mtt.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, v, oe, T, u, Ue, Gr, B, A } from "./chunk-0bqrj5ah.js";
import { Mb } from "./chunk-c9re0p40.js";
import { randomUUID as qe } from "crypto";
import { join as Ve } from "path";
var Re = 240000,
  U = 32,
  Z = 32,
  ke = p(() =>
    Ue({
      seen: v().int().min(0).optional(),
      life: o().max(64).optional(),
      hold_ms: v().int().min(0).max(Re).optional(),
      told: T(o().max(64)).max(U).optional(),
      tool_use_ids: T(o().min(1).max(256)).max(Z).optional(),
      tool_host_interface: oe().optional()
    })
  );
function Q(e) {
  let n = { told: U, tool_use_ids: Z },
    r = H(e)
      ? Object.entries(n).find(([s, h]) => {
          let y = so(e, s);
          return Array.isArray(y) && y.length > h;
        })
      : void 0;
  if (r !== void 0) {
    let [s, h] = r;
    throw new R(
      `ReadCalls: ${s} has more than ${h} entries`,
      "ReadCalls: a list has more entries than are taken"
    );
  }
  return ke().parse(e);
}
import { randomUUID as Se } from "crypto";
import { constants as M } from "fs";
import {
  lstat as we,
  mkdir as Ee,
  open as Y,
  opendir as ve,
  unlink as Ce,
  writeFile as xe
} from "fs/promises";
import { join as K } from "path";
var ne = 60000,
  se = 256,
  Ae = 604800000,
  Oe = 4 * se,
  Ie = 16,
  ee = 32768,
  V = ".json",
  Te = p(() => {
    let e = v().int().min(0).max(Number.MAX_SAFE_INTEGER);
    return u({
      v: A(1),
      container_start: o().min(1).max(64),
      listed: u({
        taskId: o().refine((n) => aY("local_bash", n)),
        output_path: o().max(4096),
        limit_ms: v().min(0).max(Number.MAX_SAFE_INTEGER)
      }).transform((n) => (iqn(n.taskId, n.output_path) ? n : { ...n, output_path: "" })),
      started_at: e,
      written_at: e,
      ended: u({
        how: Gr("state", [
          u({ state: A("exited"), exit_code: v().int() }),
          u({ state: A("time_limit") }),
          u({ state: A("stopped"), stopped_by: A("session") }),
          u({
            state: A("killed"),
            reason: B(["daemon_exit", "output_limit", "container_stopped"])
              .optional()
              .catch(void 0)
          })
        ]).catch({ state: "killed" }),
        at: e
      }).optional()
    });
  });
class G {
  #o;
  #t;
  #r;
  #n;
  #e = new Map();
  constructor({
    folder: e,
    failed: n,
    containerStartFile: r = K("/dev/shm", `claude-${process.getuid?.() ?? 0}-container-start`),
    containerStart: s
  }) {
    ((this.#o = e), (this.#n = n), (this.#t = r), (this.#r = s));
  }
  #a() {
    return (
      (this.#r ??= (async () => {
        let e = this.#t;
        await xe(e, Se(), { flag: "wx", mode: 384 }).catch((r) => {
          if (E(r) !== "EEXIST") throw r;
        });
        let n = await Y(e, M.O_RDONLY | M.O_NOFOLLOW | M.O_NONBLOCK);
        try {
          let r = await n.stat();
          if (!r.isFile() || r.uid !== process.getuid?.())
            throw Error(
              "The file that identifies this container start is not a regular file owned by this user."
            );
          let { buffer: s, bytesRead: h } = await n.read({ buffer: Buffer.alloc(64) }),
            y = s.subarray(0, h).toString("utf8").trim();
          if (y.length === 0)
            throw Error("The file that identifies this container start is empty.");
          return y;
        } finally {
          await n.close();
        }
      })().catch((e) => {
        throw ((this.#r = void 0), e);
      })),
      this.#r
    );
  }
  write(e) {
    this.#i(e.listed.taskId, async (n, r) => {
      if (
        (await ree(K(n, e.listed.taskId + V), _({ v: 1, ...e, container_start: r }), {
          flush: !0,
          mode: 384
        }),
        e.ended !== void 0)
      )
        await te(n);
    });
  }
  remove(e) {
    this.#i(e, async (n) => {
      await Ce(K(n, e + V)).catch((r) => {
        if (E(r) !== "ENOENT") throw r;
      });
    });
  }
  async settled(e) {
    await this.#e.get(e);
  }
  async settledAll() {
    while (this.#e.size > 0) await Promise.all(this.#e.values());
    await this.#s()
      .then((e) => (e === void 0 ? void 0 : te(e)))
      .catch(this.#n);
  }
  async readEarlier() {
    let e = await this.#a().catch((y) => {
        t(
          `mcp serve: could not read or make the file that identifies this container start, so commands that earlier daemons started are not listed: ${d(y)}`,
          { level: "error" }
        );
        return;
      }),
      n =
        e === void 0
          ? void 0
          : await this.#s().catch((y) => {
              t(
                `mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(y)}`,
                { level: "error" }
              );
              return;
            }),
      r = [];
    if (n !== void 0) {
      let y = 0;
      try {
        for await (let S of await ve(n)) {
          if ((y++, S.name.endsWith(V) && aY("local_bash", S.name.slice(0, -V.length))))
            r.push({ name: S.name, path: K(n, S.name) });
          if (y >= Oe || r.length >= se) break;
        }
      } catch (S) {
        t(
          `mcp serve: could not read the folder of saved background command records, so commands that earlier daemons started are not listed: ${d(S)}`,
          { level: "error" }
        );
      }
    }
    let s = Date.now(),
      h = [];
    for (let y of npt(r, Ie))
      h.push(
        ...(await Promise.all(
          y.map(async ({ name: S, path: w }) => {
            let O = await Y(w, M.O_RDONLY | M.O_NOFOLLOW | M.O_NONBLOCK)
                .then(async (j) => {
                  try {
                    let C = await j.stat();
                    if (!C.isFile() || C.size > ee) return;
                    let { buffer: L, bytesRead: q } = await j.read({ buffer: Buffer.alloc(ee) });
                    return L.subarray(0, q).toString("utf8");
                  } finally {
                    await j.close();
                  }
                })
                .catch(() => {
                  return;
                }),
              x = Te().safeParse(O === void 0 ? void 0 : ot(O, !1));
            if (!x.success || x.data.listed.taskId + V !== S) return { fate: "unreadable" };
            let { container_start: z, listed: I, started_at: k, written_at: P, ended: D } = x.data;
            if (s - P > Ae) return (this.remove(I.taskId), { fate: "too_old" });
            if (z === e && D === void 0) return { fate: "maybe_still_running" };
            return D === void 0
              ? {
                  fate: "container_stopped",
                  command: {
                    listed: I,
                    started_at: k,
                    ended: { how: { state: "killed", reason: "container_stopped" }, at: P }
                  }
                }
              : { fate: "with_end", command: { listed: I, started_at: k, ended: D } };
          })
        ))
      );
    return {
      commands: h
        .flatMap((y) => ("command" in y ? [y.command] : []))
        .toSorted((y, S) => y.ended.at - S.ended.at),
      counted: {
        with_end: F(h, ({ fate: y }) => y === "with_end"),
        container_stopped: F(h, ({ fate: y }) => y === "container_stopped"),
        maybe_still_running: F(h, ({ fate: y }) => y === "maybe_still_running"),
        too_old: F(h, ({ fate: y }) => y === "too_old"),
        unreadable: F(h, ({ fate: y }) => y === "unreadable")
      }
    };
  }
  async #s(e = !1) {
    let n = this.#o();
    if (e) await Ee(n, { recursive: !0, mode: 448 });
    let r = await we(n).catch((s) => {
      if (E(s) !== "ENOENT") throw s;
      return;
    });
    if (r === void 0) return;
    if (!r.isDirectory() || r.uid !== process.getuid?.())
      throw Error(
        "The folder for background command records is a symbolic link or not a directory owned by this user."
      );
    return n;
  }
  #i(e, n) {
    let r = (this.#e.get(e) ?? Promise.resolve())
      .then(async () => {
        let s = await this.#a(),
          h = s === void 0 ? void 0 : await this.#s(!0);
        if (s !== void 0 && h !== void 0) await n(h, s);
      })
      .catch(this.#n);
    (this.#e.set(e, r),
      r.then(() => {
        if (this.#e.get(e) === r) this.#e.delete(e);
      }));
  }
}
async function te(e) {
  let n = await Y(e, M.O_RDONLY | M.O_DIRECTORY | M.O_NOFOLLOW);
  try {
    await n.sync();
  } finally {
    await n.close();
  }
}
import { randomUUID as Pe } from "crypto";
var ze = 1024,
  Fe = 1024,
  ie = 32;
function ae() {
  return uv(KA, void 0, !0);
}
var mpe = new nt(() => ({
  id: Pe(),
  now: () => performance.now(),
  runningRuns: new Map(),
  finishedRuns: new Map(),
  barredRuns: new Map(),
  newestDropped: void 0,
  runEnded: De(),
  readFileState: ae(),
  subagentReadFileStates: new Map(),
  changedFilesPasses: new WeakMap()
}));
function Lis(e) {
  return mpe.of(e).id;
}
function QJr(e, n) {
  let r = mpe.of(e),
    { runningRuns: s, finishedRuns: h, barredRuns: y } = r;
  if (y.has(n)) return "barred";
  if (s.has(n) || h.has(n)) return "started_before";
  return (s.set(n, r.now()), "claimed");
}
var de = (e, n) => (e === void 0 || n === void 0 ? (e ?? n) : Math.max(e, n));
function ue(e, n, r, s) {
  e.set(n, s);
  let [h] = e;
  if (e.size <= r || h === void 0) return;
  return (e.delete(h[0]), h[1]);
}
function ZJr(e, n) {
  let r = mpe.of(e);
  if (!r.runningRuns.delete(n)) return;
  ((r.newestDropped = de(r.newestDropped, ue(r.finishedRuns, n, ze, r.now()))), r.runEnded.emit());
}
function le(e, n) {
  let r = mpe.of(e),
    s = r.runningRuns.get(n);
  if (s !== void 0) return { state: "running", since_ms: Math.round(r.now() - s) };
  if (r.finishedRuns.has(n)) return { state: "finished" };
  if (!r.barredRuns.has(n)) r.newestDropped = de(r.newestDropped, ue(r.barredRuns, n, Fe, r.now()));
  return { state: "unknown", barred: !0 };
}
function Nis(e, n) {
  return mpe.of(e).barredRuns.has(n);
}
function me(e, n) {
  return mpe.of(e).runningRuns.has(n);
}
function pe(e, n) {
  return mpe.of(e).runEnded.subscribe(n);
}
function fe(e) {
  return [...mpe.of(e).runningRuns.keys()];
}
function _e(e) {
  let { newestDropped: n, now: r } = mpe.of(e);
  return n === void 0 ? void 0 : Math.round(r() - n);
}
function $is(e, n) {
  let { readFileState: r, subagentReadFileStates: s } = mpe.of(e);
  return n === void 0 ? r : s.get(n);
}
function Fis(e, n) {
  let { readFileState: r, subagentReadFileStates: s } = mpe.of(e);
  if (n === void 0) return r;
  let h = s.get(n) ?? ae();
  (s.delete(n), s.set(n, h));
  let [y] = s.keys();
  if (s.size > ie && y !== void 0)
    (s.delete(y), t(`[mcp serve] more than ${ie} subagents: dropped the read record of ${y}`));
  return h;
}
var ge = 128,
  Me = 16,
  Le = 256,
  Ne = ["background_operator", "unresolved_shell_write"];
function Uis(e) {
  switch (e.step) {
    case "check":
      return !1;
    case "run":
      return e.approval !== void 0;
  }
}
function Bis(e) {
  switch (e.step) {
    case "check":
      return !1;
    case "run":
      return e.agent_id === void 0;
  }
}
var J = p(() =>
    o()
      .max(ge)
      .regex(/^[\w.:@-]+$/)
      .regex(/[^.]/)
  ),
  eQr = p(() => o().refine(MB)),
  He = p(() =>
    T(o().max(ge))
      .max(Me)
      .transform((e) => Ne.filter((n) => e.includes(n)))
  ),
  je = p(() =>
    o()
      .max(Le)
      .regex(/^\P{Cc}+$/u)
  ),
  tQr = p(() => o().regex(Mb)),
  Be = p(() => {
    let e = {
      tool_host_interface: JWt(),
      tool_use_id: J(),
      agent_id: eQr().optional(),
      main_loop_model: je(),
      classifier_may_approve: He().optional(),
      agent_has_read_tool: A(!0).optional(),
      agent_effort_level: B(aa).optional(),
      permission_context: D2()
    };
    return Gr("step", [
      Ue({ ...e, step: A("check") }),
      Ue({
        ...e,
        step: A("run"),
        approval: Ue({ ask_digest: tQr(), approver: B(bFs), permission_context: D2() }).optional()
      })
    ]);
  });
function nQr(e, n = qmn) {
  let r = mn(e) ? e[zit] : void 0;
  if (r === void 0) return { kind: "absent" };
  if (!QAn(r)) return { kind: "other_request" };
  let s = SQn(r.tool_host_interface);
  if (s === void 0) return { kind: "malformed" };
  switch (wQn(n, s).kind) {
    case "peer_too_old":
      return { kind: "session_too_old", session: s };
    case "self_too_old":
      return { kind: "daemon_too_old", session: s };
    case "agreed":
      break;
  }
  let h = mn(r.approval) ? r.approval : void 0;
  if (H2(r.permission_context) || H2(h?.permission_context)) return { kind: "too_large" };
  let y = Be().safeParse(r);
  if (y.success) return { kind: "requested", request: y.data };
  return {
    kind:
      dQr(r.permission_context) || dQr(h?.permission_context)
        ? "unlisted_restriction_on"
        : "malformed"
  };
}
var $cr = "ReadCalls",
  rQr = "StopBackgroundCommand",
  $e = 3 * U,
  he = 1000,
  ye = "anthropic/backgroundCommands";
function Lvi(e) {
  return { experimental: { [ye]: { v: 1, life: e } } };
}
var rn = p(() => u({ experimental: u({ [ye]: u({ v: A(1) }) }) }));
var Ke = p(() => Ue({ taskId: o().min(1).max(64) }));
function Xe({ interrupted: e, code: n, outputFileSize: r }) {
  return !e
    ? { state: "exited", exit_code: n }
    : { state: "killed", ...(r !== void 0 && { reason: "output_limit" }) };
}
class be {
  life = qe();
  #o = 0;
  #t = new Map();
  #r = De();
  #n;
  #e;
  #a = Promise.resolve();
  #s;
  #i;
  constructor(e = () => performance.now()) {
    this.#n = e;
  }
  keepRecordsIn(e, n = Date.now) {
    if (this.#e !== void 0) return;
    ((this.#e = { store: e, wallNow: n }), (this.#a = this.#m(e, n)), bt(() => e.settledAll()));
  }
  get restored() {
    return this.#a;
  }
  get version() {
    return this.#o;
  }
  starterFor(e) {
    return {
      reserve: () => {
        return;
      },
      adopt: (n, r, s) => {
        try {
          let h = this.#l(n, r, s, e);
          return (g("mcp_serve_background_command"), h);
        } catch (h) {
          throw (m("mcp_serve_background_command", "not_kept"), n.kill(), n.cleanup(), h);
        }
      }
    };
  }
  taskIdOf(e) {
    return [...this.#t.values()].find(({ listed: n }) => n.tool_use_id === e)?.listed.taskId;
  }
  msSinceNewestDropped() {
    return this.#s === void 0 ? void 0 : Math.round(this.#n() - this.#s);
  }
  list() {
    let e = this.#n();
    return {
      life: this.life,
      commands_version: this.#o,
      commands: Array.from(
        this.#t.values(),
        ({ listed: n, startedAt: r, ended: s, unwanted: h }) => ({
          ...n,
          ...(s
            ? { ...s.how, ended_ms_ago: Math.round(e - s.at) }
            : { state: "running", ...(h && { told: !0 }) }),
          ran_ms: Math.round((s?.at ?? e) - r)
        })
      )
    };
  }
  forget(e) {
    let n = e.flatMap((r) => this.#t.get(r) ?? []);
    (n
      .filter(({ ended: r }) => r)
      .forEach(({ listed: r }) => {
        (this.#t.delete(r.taskId), this.#e?.store.remove(r.taskId));
      }),
      n
        .filter(({ ended: r }) => !r)
        .forEach((r) => {
          ((r.unwanted = !0), this.#e?.store.remove(r.listed.taskId));
        }));
  }
  stop(e) {
    return this.#t.get(e)?.cut({ state: "stopped", stopped_by: "session" }) ?? !1;
  }
  async changedSince(e, n) {
    let { promise: r, resolve: s } = Promise.withResolvers(),
      h = () => s(),
      y = this.#r.subscribe(h);
    if ((n.addEventListener("abort", h, { once: !0 }), e !== this.#o || n.aborted)) h();
    (await r, y(), n.removeEventListener("abort", h));
  }
  #l(e, n, r, s) {
    let h = e.taskOutput.taskId,
      y = Pu(h);
    if (!e.background(h))
      throw Error(
        "The command had already ended when it was to be moved to the background, and its output was not kept. Run it again without run_in_background."
      );
    let S = Yin(n),
      w = {
        listed: {
          taskId: h,
          ...(s.toolUseId !== void 0 && { tool_use_id: s.toolUseId }),
          ...(s.agentId !== void 0 && { agent_id: s.agentId }),
          command: re(r, he),
          ...(s.description && { description: re(s.description, he) }),
          output_path: y,
          limit_ms: S
        },
        startedAt: this.#n(),
        cut: (k) => {
          if (w.ended || e.status !== "backgrounded") return !1;
          return (O(k), !0);
        }
      },
      O = (k) => {
        if (w.ended) return;
        if (
          (clearTimeout(x),
          I(),
          (w.ended = { how: k, at: this.#n() }),
          this.#t.delete(h),
          w.unwanted)
        )
          this.#e?.store.remove(h);
        else (this.#t.set(h, w), this.#d(w));
        (this.#u().forEach(() => f("mcp_serve_background_command", "ending_dropped")),
          z.resolve(),
          this.#o++,
          this.#r.emit());
        try {
          if (e.status === "backgrounded") e.kill();
          (e.cleanup(),
            KZe(
              h,
              k.state === "exited"
                ? `
[exited with code ${k.exit_code}]
`
                : `
[killed]
`
            ),
            yp(h),
            t(
              `mcp serve: background command ${h} ended: ${k.state}${k.state === "killed" && k.reason ? ` (${k.reason})` : ""}`
            ),
            a("tengu_background_shell_settled", {
              elapsed_ms: Math.round(w.ended.at - w.startedAt),
              requested_timeout_ms: n ?? 0,
              deadline_ms: S,
              outcome: c(
                k.state !== "exited" ? "killed" : k.exit_code === 0 ? "completed" : "failed"
              ),
              stop_cause:
                k.state === "time_limit"
                  ? b("deadline")
                  : k.state === "killed"
                    ? ce(k.reason)
                    : void 0,
              stopped_by: ce(k.state === "stopped" ? k.stopped_by : void 0),
              subagent_owned: s.agentId !== void 0,
              unwanted: w.unwanted === !0
            }));
        } catch (P) {
          l(N(P));
        }
      },
      x = setTimeout(w.cut, S, { state: "time_limit" }).unref(),
      z = Promise.withResolvers(),
      I = bt(async () => {
        w.cut({ state: "killed", reason: "daemon_exit" });
        let k = this.#e;
        if (k !== void 0) (await z.promise, await k.store.settled(h));
      });
    if ((this.#t.set(h, w), this.#d(w), this.#e !== void 0))
      this.#i ??= setInterval(() => {
        let k = [...this.#t.values()].filter(({ ended: P, unwanted: D }) => !P && !D);
        if (k.length === 0) (clearInterval(this.#i), (this.#i = void 0));
        k.forEach((P) => this.#d(P));
      }, ne).unref();
    return (
      e.result
        .then(async (k) => {
          (await e.taskOutput.flush().catch((P) => l(N(P))), O(Xe(k)));
        })
        .catch((k) => {
          (l(N(k)), O({ state: "killed" }));
        }),
      this.#o++,
      this.#r.emit(),
      h
    );
  }
  #d({ listed: e, startedAt: n, ended: r }) {
    if (this.#e === void 0) return;
    let { store: s, wallNow: h } = this.#e,
      y = this.#n(),
      S = h(),
      { taskId: w, output_path: O, limit_ms: x } = e;
    s.write({
      listed: { taskId: w, output_path: O, limit_ms: x },
      started_at: Math.round(S - (y - n)),
      written_at: Math.round(S),
      ...(r && { ended: { how: r.how, at: Math.round(S - (y - r.at)) } })
    });
  }
  #u() {
    let e = [...this.#t.values()].filter((n) => n.ended).slice(0, -$e);
    return (
      e.forEach((n) => {
        (this.#t.delete(n.listed.taskId),
          this.#e?.store.remove(n.listed.taskId),
          (this.#s = n.ended?.at));
      }),
      e
    );
  }
  async #m(e, n) {
    try {
      let { commands: r, counted: s } = await e.readEarlier(),
        h = this.#n(),
        y = n(),
        S = r.map(({ listed: x, started_at: z, ended: I }) => {
          let k = h - Math.max(0, y - I.at);
          return {
            listed: x,
            startedAt: Math.min(k, h - Math.max(0, y - z)),
            cut: () => !1,
            ended: { how: I.how, at: k }
          };
        }),
        w = [...this.#t.values()];
      (this.#t.clear(), [...S, ...w].forEach((x) => this.#t.set(x.listed.taskId, x)));
      let O = this.#u();
      if (Object.values(s).some((x) => x > 0))
        a("tengu_mcp_serve_background_records_read", { ...s, dropped_for_room: O.length });
      if (S.length > 0) (this.#o++, this.#r.emit());
    } catch (r) {
      l(N(r));
    }
  }
}
var E5t = new W(() => new be());
function oQr(e, n) {
  if (
    n !== "tool-container" ||
    !nr() ||
    i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" ||
    __e()
  )
    return;
  let r = { said: !1 };
  E5t.of(e).keepRecordsIn(
    new G({
      folder: () => Ve(tR(), "background-commands"),
      failed: (s) => {
        if (
          (t(
            `mcp serve: could not save or delete a background command's record on disk, so after a restart that command may be missing, out of date, or listed again after it was acknowledged: ${d(s)}`,
            { level: "error" }
          ),
          !r.said)
        )
          ((r.said = !0), f("mcp_serve_background_command", "record_failed"));
      }
    })
  );
}
async function sQr(e, n, { session: r, callerGone: s }) {
  let { seen: h, life: y, hold_ms: S, told: w, tool_use_ids: O } = Q(e ?? {}),
    [x, ...z] = (O ?? []).filter((C) => !J().safeParse(C).success);
  if (x !== void 0)
    throw new R(
      `ReadCalls: ${_(x)} is not a valid tool_use_id${z.length > 0 ? ` (and ${z.length} more)` : ""}. An id is 1 to 128 letters, digits or _ . : @ -, and not only dots.`,
      "ReadCalls: a tool_use_id is not valid"
    );
  let I = E5t.of(r.host);
  (await I.restored, I.forget(w ?? []));
  let k = () => O?.some((C) => !me(r, C)) ?? !1;
  if (h !== void 0 && y === I.life && S !== void 0 && !k()) {
    let C = new AbortController(),
      L = pe(r, () => {
        if (k()) C.abort();
      }),
      q = Ts(n, { signalB: s, timeoutMs: S, refTimer: !0 });
    try {
      await I.changedSince(h, AbortSignal.any([q.signal, C.signal]));
    } finally {
      (q.cleanup(), L());
    }
  }
  let P = (O ?? fe(r)).map((C) => {
    let L = I.taskIdOf(C);
    return { tool_use_id: C, ...(L === void 0 ? le(r, C) : { state: "background", taskId: L }) };
  });
  if (O !== void 0 && O.length > 0) {
    let C = (L) => F(P, (q) => q.state === L);
    a("tengu_mcp_serve_calls_read_by_id", {
      background: C("background"),
      running: C("running"),
      finished: C("finished"),
      unknown: C("unknown")
    });
  }
  let D = [I.msSinceNewestDropped(), _e(r)].filter((C) => C !== void 0),
    j = { ...I.list(), calls: P, ...(D.length > 0 && { dropped_ended_ms_ago: Math.min(...D) }) };
  return { summary: `${j.commands.length} commands, ${j.calls.length} calls`, output: j };
}
async function iQr(e, n, { session: r }) {
  let { taskId: s } = Ke().parse(e),
    h = E5t.of(r.host).stop(s);
  return { summary: `stopped: ${h}`, output: { stopped: h } };
}
export {
  mpe,
  Lis,
  QJr,
  ZJr,
  Nis,
  $is,
  Fis,
  Uis,
  Bis,
  eQr,
  tQr,
  nQr,
  $cr,
  rQr,
  Lvi,
  E5t,
  oQr,
  sQr,
  iQr
};

//# sourceMappingURL=chunk-3tvw3r87.js.map
