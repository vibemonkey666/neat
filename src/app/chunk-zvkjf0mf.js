// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, tt, _it, ku, qns, RTn } from "./chunk-wrtp8qz8.js";
import { d, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, eCt, _, te, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { g, m } from "./chunk-brszmkb3.js";
import { Gw, _A } from "./chunk-rhk37je5.js";
import { bl } from "./chunk-jwqtbev0.js";
import { pkt, A0 } from "./chunk-tv3shk24.js";
import { Sb } from "./chunk-ajtyjx88.js";
import { ksi } from "./chunk-95k4nfdh.js";
import { zd } from "./chunk-07aq7e5p.js";
import { cD, _Be } from "./chunk-jnpc8m74.js";
import { $Ds, jGn, ov, Ok } from "./chunk-j0tbz6ra.js";
import { Wio, sXt } from "./chunk-t1rf1n9m.js";
import { Ws } from "./chunk-f451a1hs.js";
import { Cgn, Rgn } from "./chunk-t6wy6xxv.js";
import { ad, Rl, Dp, lo, aQe, yhe, PS, Rht, lGe, jC } from "./chunk-fnsjs1v2.js";
import { Bio, OUe, jio } from "./chunk-83z0zmh5.js";
import { vS, oD } from "./chunk-g2rqnn1x.js";
import { G7t } from "./chunk-62j8frac.js";
import { unlink as S } from "fs/promises";
import { createServer as L } from "net";
import { join as H } from "path";
import { StringDecoder as N } from "string_decoder";
class k {
  resolver = null;
  registerResolver(e) {
    this.resolver = e;
  }
}
var R = new W(() => new k());
function oXt(e, r) {
  R.of(e).registerResolver(r);
}
function E(e, r) {
  return R.of(e).resolver?.(r) ?? !1;
}
class D {
  runner = null;
  registerRunner(e) {
    this.runner = e;
  }
}
var P = new W(() => new D());
function Lio(e, r) {
  P.of(e).registerRunner(r);
}
function b(e, r) {
  try {
    return P.of(e).runner?.(r) ?? !1;
  } catch (o) {
    return (t(`[bg-rv] command runner threw, queueing the reply: ${d(o)}`, { level: "warn" }), !1);
  }
}
import { rm as x } from "fs/promises";
import { join as M } from "path";
class u {
  static NAME = ".prompt-draft";
  static MAX_BYTES = 262144;
  #t;
  #r;
  #e = Promise.resolve();
  #o;
  constructor(e) {
    this.#t = e;
  }
  follow() {
    return ((this.#o ??= this.#t.subscribe(this.#s)), this.#n());
  }
  settled() {
    return this.#i(this.#e);
  }
  dispose() {
    (this.#o?.(), (this.#o = void 0));
  }
  #s = () => {
    let { value: e, cameBack: r } = this.#t.getState();
    if (e !== this.#r?.value || r !== this.#r.cameBack) this.#n();
  };
  #n(e = i.CLAUDE_JOB_DIR) {
    if (((this.#r = this.#t.getState()), e)) this.#e = this.#e.then(() => this.#a(e)).catch(Rl);
    return this.#e;
  }
  #a(e) {
    let { value: r, cameBack: o } = this.#t.getState(),
      n = M(e, u.NAME);
    return r !== "" && !o
      ? OUe(n, re(r, u.MAX_BYTES))
      : x(n, { force: !0 }).catch((a) => (Rl(a), OUe(n, "")));
  }
  async #i(e) {
    return (await e, e === this.#e ? void 0 : this.#i(this.#e));
  }
}
var j = 3;
class A {
  server;
  current = void 0;
  heartbeat;
  wedgeTimer = void 0;
  wedgeDisarmed = !1;
  authToken;
  currentAuthed = !1;
  unauthedDrops = 0;
  gateReported = !1;
  nativeBrowserEnv;
  pendingInteractiveMarks;
  storageV5;
  promptInput = cD(T());
  promptDraftFile = new u(this.promptInput);
  promptStash = new jio(this.promptInput);
  constructor(e, r, o, n, s) {
    ((this.authToken = r),
      (this.storageV5 = s),
      (this.nativeBrowserEnv = o),
      (this.pendingInteractiveMarks = n),
      (this.server = L((a) => this.onConnection(a))),
      this.server.on("error", (a) => t(`[bg-rv] server error: ${String(a)}`, { level: "warn" })),
      this.server.listen(e),
      this.server.unref(),
      (this.heartbeat = setInterval(() => this.send({ type: "heartbeat" }), 30000)),
      this.heartbeat.unref());
  }
  onConnection(e) {
    (this.current?.destroy(), (this.current = e), (this.currentAuthed = !1), RTn(!1));
    while (this.pendingInteractiveMarks.length > 0) {
      let n = this.pendingInteractiveMarks[0];
      if (n === void 0 || !this.send(n)) break;
      this.pendingInteractiveMarks.shift();
    }
    ((this.unauthedDrops = 0),
      (this.gateReported = !1),
      this.clearPreBootState().catch((n) => {
        if (!G(n)) Rl(n);
      }),
      this.restorePromptDraft().catch(() => {}),
      this.promptStash.restore().catch(l),
      e.on("error", () => e.destroy()),
      e.once("close", () => {
        if (this.current === e) ((this.current = void 0), RTn(!1));
      }));
    let r = "",
      o = new N("utf8");
    e.on("data", (n) => {
      if (this.current !== e) {
        e.destroy();
        return;
      }
      r += o.write(n);
      let s;
      while (
        (s = r.indexOf(`
`)) >= 0
      ) {
        let a = r.slice(0, s);
        if (((r = r.slice(s + 1)), a)) this.handleLine(a);
      }
      if (r.length > 1048576) ((r = ""), e.destroy());
    });
  }
  stop() {
    (clearInterval(this.heartbeat),
      clearTimeout(this.wedgeTimer),
      (this.wedgeTimer = void 0),
      this.current?.destroy(),
      (this.current = void 0),
      RTn(!1),
      this.restoreNativeBrowserEnv(),
      this.promptDraftFile.dispose(),
      this.promptStash.dispose(),
      this.server.close());
  }
  send(e) {
    if (!this.current || this.current.destroyed) return !1;
    try {
      return (
        this.current.write(
          _(e) +
            `
`
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  noteUnauthedRejection() {
    if ((this.unauthedDrops++, !this.gateReported && this.unauthedDrops >= j))
      ((this.gateReported = !0), m("bg_rv_gate", "unauthed_drops"));
  }
  restoreNativeBrowserEnv() {
    if (this.nativeBrowserEnv === void 0) delete process.env.BROWSER;
    else process.env.BROWSER = this.nativeBrowserEnv;
  }
  handleLine(e) {
    let r;
    try {
      r = te(e);
    } catch {
      return;
    }
    if (!r || typeof r !== "object") return;
    if ("role" in r) {
      if (this.authToken)
        if ("auth" in r && A0(r.auth, this.authToken)) {
          if (((this.currentAuthed = !0), !this.gateReported))
            ((this.gateReported = !0), g("bg_rv_gate"));
        } else {
          if (!this.currentAuthed) this.noteUnauthedRejection();
          this.send({ type: "auth-rejected" });
        }
      return;
    }
    let o = r;
    if (this.authToken && !this.currentAuthed && o.type !== "repaint") {
      if (
        (t(
          `[bg-rv] dropped ${typeof o.type === "string" ? o.type : "unknown"} from un-authed connection`,
          { level: "warn" }
        ),
        o.type !== "attacher-caps")
      )
        this.noteUnauthedRejection();
      this.send({ type: "reply-rejected" });
      return;
    }
    if (o.type === "shutdown") {
      J(this.promptDraftFile, this.storageV5);
      return;
    }
    if (o.type === "repaint") {
      V();
      return;
    }
    if (o.type === "attacher-caps") {
      this.handleAttacherCaps(o);
      return;
    }
    if (o.type === "reply" && typeof o.text === "string") q(o);
  }
  handleAttacherCaps(e) {
    if ((qns(e.caps), RTn(!0), e.caps)) Wio(Date.now());
    else sXt();
    if ((ksi(e.caps?.colorLevel), !e.caps)) this.restoreNativeBrowserEnv();
    else if (typeof e.caps.browser === "string") process.env.BROWSER = e.caps.browser;
    else delete process.env.BROWSER;
    if (e.caps?.systemTheme) G7t(e.caps.systemTheme);
  }
  async waitForInkMount(e) {
    for (let r = 0; !Ws().has(process.stdout); r++) {
      if (r >= 60 || this.current !== e) return !1;
      await X(500);
    }
    return !0;
  }
  async clearPreBootState() {
    let e = i.CLAUDE_JOB_DIR;
    if (!e) return;
    if (!(await this.waitForInkMount(this.current))) return;
    await aQe(async () => {
      let r = await lo(e, this.storageV5);
      if (!r) return;
      if (!r.forkSourceAlive) {
        let n = jGn(i.CLAUDE_CODE_RESUME_SOURCE_ALIVE);
        if (n) (await ad(e, { ...r, ...n }, this.storageV5), Object.assign(r, n));
      }
      if (r.state === "working" && r.detail === yhe) this.armStartupWedgeWatchdog(e);
      let o = (n) => {
        let s = ov.current();
        return n.tempo === "blocked" && Rht(n) && !(s?.overlay === !0 && s.text === n.needs);
      };
      if (o(r)) {
        let n = (await lo(e, this.storageV5)) ?? r;
        if (!o(n)) return;
        (await ad(
          e,
          {
            ...n,
            ...(lGe.includes(n.state) && { state: "running" }),
            tempo: "idle",
            needs: void 0,
            needsOverlay: void 0,
            block: void 0,
            updatedAt: new Date().toISOString()
          },
          this.storageV5
        ),
          this.send({
            type: "state",
            patch: { ...(lGe.includes(n.state) && { state: "running" }), tempo: "idle", needs: "" }
          }));
        return;
      }
      if (!lGe.includes(r.state)) return;
      if (r.tempo === "blocked") return;
      (await ad(
        e,
        { ...r, state: "running", tempo: "idle", updatedAt: new Date().toISOString() },
        this.storageV5
      ),
        this.send({ type: "state", patch: { state: "running", tempo: "idle" } }));
    });
  }
  armStartupWedgeWatchdog(e) {
    if (this.wedgeDisarmed) return;
    clearTimeout(this.wedgeTimer);
    let r = i.CLAUDE_BG_STARTUP_WEDGE_MS || 45000;
    ((this.wedgeTimer = setTimeout((o) => this.onStartupWedgeTimeout(o), r, e)),
      this.wedgeTimer.unref());
  }
  disarmStartupWedgeWatchdog() {
    ((this.wedgeDisarmed = !0), clearTimeout(this.wedgeTimer), (this.wedgeTimer = void 0));
  }
  onStartupWedgeTimeout(e) {
    lo(e, this.storageV5)
      .then(async (r) => {
        if (
          this.wedgeDisarmed ||
          r?.state !== "working" ||
          r.detail !== yhe ||
          r.tempo === "blocked"
        )
          return;
        (await ad(
          e,
          { ...r, tempo: "blocked", detail: h, needs: f, updatedAt: new Date().toISOString() },
          this.storageV5
        ),
          this.send({ type: "state", patch: { tempo: "blocked", detail: h, needs: f } }));
      })
      .catch((r) => {
        if (!G(r)) Rl(r);
      });
  }
  async restorePromptDraft() {
    let e = i.CLAUDE_JOB_DIR;
    if (!e) return;
    let r = H(e, u.NAME),
      o = await bl(r, 4 * u.MAX_BYTES);
    if (o === null) return;
    await S(r).catch(() => {});
    let n = Bio(o);
    if (!n) return;
    if (!Cgn()) Rgn(n);
    if (!(await this.waitForInkMount(this.current))) return;
    if (this.promptInput.getState().value === "") _Be(this.promptInput, n);
  }
}
class B {
  server = void 0;
}
var F = new W(() => new B());
function T() {
  return U();
}
function w() {
  return T().host;
}
function v() {
  return F.of(w());
}
async function Iki(e) {
  let r = i.CLAUDE_BG_RENDEZVOUS_SOCK,
    o = v();
  if (!r || o.server) return;
  let n = i.BROWSER,
    s = [];
  ($Ds((c) => {
    let y = { type: "interactive-mark", ...c };
    if (zpe(y)) return !0;
    return (s.push(y), !0);
  }),
    delete process.env.CLAUDE_BG_RENDEZVOUS_SOCK);
  let a = i.CLAUDE_BG_RV_AUTH;
  delete process.env.CLAUDE_BG_RV_AUTH;
  let p = i.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, p)) {
    let c = await pkt(p);
    if (c?.rvAuth) a = c.rvAuth;
    await S(p).catch(() => {});
  }
  (await S(r).catch(() => {}), (o.server = new A(r, a, n, s, e)));
  let I = o.server;
  bt(() => I.promptStash.flush());
}
function zpe(e) {
  return v().server?.send(e) ?? !1;
}
function J(e, r) {
  zpe({ type: "shutting-down" });
  let o = zd(),
    n = [e.follow()];
  if (o) {
    let s = o.getLastSequenceNum();
    o.teardown({ skipArchive: !0 }).catch(() => {});
    let a = i.CLAUDE_JOB_DIR;
    if (a && s > 0) n.push(K(a, s, r).catch(() => {}));
  }
  (n.push(eCt()),
    Promise.race([
      Promise.all(n)
        .catch(() => {})
        .then(() => e.settled()),
      X(5000)
    ]).finally(() => {
      process.exit(0);
    }));
}
function V() {
  if (ku() !== null) Wio(Date.now());
  if (!Ws().get(process.stdout)?.forceRedraw({ flushReact: !0 }))
    process.stdout.write(
      _A +
        Gw +
        `
  \x1B[2mSession can't redraw right now \u2014 Ctrl+Z to detach\x1B[0m
`
    );
  zpe({ type: "repaint-done" });
}
function q(e) {
  if (e.nextTurn === !0) {
    (Ok({
      agentId: tt(),
      mode: "prompt",
      value: e.text,
      priority: "next",
      origin: { kind: "human" },
      skipSlashCommands: !0
    }),
      _it(),
      t(`[bg-rv] enqueued next-turn prompt: ${e.text.slice(0, 80)}`));
    return;
  }
  if (E(w(), e.text)) {
    t(`[bg-rv] peer reply answered question: ${e.text.slice(0, 80)}`);
    return;
  }
  if (b(w(), e.text)) {
    t(`[bg-rv] peer reply ran at once: ${e.text.slice(0, 80)}`);
    return;
  }
  let r = vS(e.text);
  if (
    (Ok({ agentId: tt(), mode: r, value: oD(e.text), priority: "next", origin: { kind: "human" } }),
    r === "prompt" && !e.text.trim().startsWith("/"))
  )
    _it();
  t(`[bg-rv] enqueued reply: ${e.text.slice(0, 80)}`);
}
var h = "stuck on a startup dialog",
  f = "open this session to continue setup";
function Nio() {
  v().server?.disarmStartupWedgeWatchdog();
}
async function C(e, r, o, n) {
  let s = await lo(e, n);
  if (!s) return { kind: "refused" };
  if (s.tempo === "blocked" && s.needs === r) return { kind: "already" };
  if (s.tempo === "blocked" && s.needs !== PS) return { kind: "refused" };
  return (
    await ad(
      e,
      { ...s, tempo: "blocked", detail: o, needs: r, updatedAt: new Date().toISOString() },
      n
    ),
    zpe({ type: "state", patch: { tempo: "blocked", detail: o, needs: r } }),
    { kind: "wrote", prior: { tempo: s.tempo, needs: s.needs, detail: s.detail } }
  );
}
async function O(e, r, o, n) {
  let s = await lo(e, n);
  if (!s || s.tempo !== "blocked" || s.needs !== r) return;
  (await ad(e, { ...s, ...o, updatedAt: new Date().toISOString() }, n),
    zpe({ type: "state", patch: { tempo: o.tempo, needs: o.needs, detail: o.detail } }));
}
async function Oki(e, r) {
  let o = i.CLAUDE_JOB_DIR;
  if (!o || v().server?.wedgeDisarmed) return;
  let n = e ? `${h} (${e})` : h,
    s = await C(o, f, n, r);
  return s.kind === "wrote" ? s.prior : void 0;
}
async function Mki(e, r) {
  let o = i.CLAUDE_JOB_DIR;
  if (!o) return;
  await O(o, f, e, r);
}
async function $io(e, r, o) {
  let n = i.CLAUDE_JOB_DIR;
  if (!n) return { kind: "refused" };
  return aQe(() => C(n, e, r, o));
}
async function Fio(e, r, o) {
  let n = i.CLAUDE_JOB_DIR;
  if (!n) return;
  await aQe(() => O(n, e, r, o));
}
async function Uio(e) {
  let r = i.CLAUDE_CODE_SESSION_KIND === "bg" ? i.CLAUDE_JOB_DIR : void 0,
    o = r ?? Sb()?.jobDir;
  if (!o) return;
  let n = await lo(o, e);
  if (
    n?.replayOwed === !0 &&
    (await aQe(async () => {
      Dp(o);
      let a = await lo(o, e);
      if (a?.replayOwed !== !0 || a.tempo !== "active" || !jC(a.state)) return !1;
      return ad(
        o,
        { ...a, tempo: "idle", replayOwed: void 0, updatedAt: new Date().toISOString() },
        e
      ).then(
        () => !0,
        (p) => (Rl(p), !1)
      );
    }))
  ) {
    zpe({ type: "state", patch: { tempo: "idle" } });
    return;
  }
  if (!r || !n || n.state !== "working" || n.tempo !== "active") return;
  (await ad(o, { ...n, tempo: "blocked", needs: PS, updatedAt: new Date().toISOString() }, e),
    zpe({ type: "state", patch: { tempo: "blocked", needs: PS } }));
}
async function K(e, r, o) {
  let n = await lo(e, o);
  if (!n || n.bridgeSessionSeq === r) return;
  await ad(e, { ...n, bridgeSessionSeq: r, updatedAt: new Date().toISOString() }, o);
}
export { oXt, Lio, Iki, zpe, Nio, Oki, Mki, $io, Fio, Uio };

//# sourceMappingURL=chunk-zvkjf0mf.js.map
