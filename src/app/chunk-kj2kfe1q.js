import {
  fileURLToPath as __filePath_aed151569873811e,
  URL as __filePath_aed151569873811e_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { d, E, Er, tw, wg, Iss, G } from "./chunk-fs43t96t.js";
import { Ne, De } from "./chunk-2qx8pe6s.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { uP } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { m, fo } from "./chunk-brszmkb3.js";
import { _, te, yn, Ms, t } from "./chunk-4kxznmzw.js";
import { fie } from "./chunk-jazcqqqr.js";
import { rTn, Kw, tts, nts } from "./chunk-45h8cn90.js";
import { zr } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { cB, Yj, not, Vqe, TH, Qsr, pqt, mqt, tir, oot, gqt, vZ } from "./chunk-5rw2zfa0.js";
import { SR } from "./chunk-7c3thgax.js";
import { eC, ftt, nm, _m, A$ } from "./chunk-0hjcje8e.js";
import { xu } from "./chunk-zvsmc5fn.js";
import { _d, Zui } from "./chunk-8w2npe9a.js";
import { qOo, Fne } from "./chunk-8w56k4pg.js";
import { pa, k } from "./chunk-ajtyjx88.js";
import { H4t, L4t } from "./chunk-rhk37je5.js";
import { J4e, F$e, Gfe } from "./chunk-t0wrcf3t.js";
import { Vi } from "./chunk-at88wjsn.js";
import { AYr, ARe, ibe, gqe, _or, kd, abe } from "./chunk-bh50mq9d.js";
import { pkt } from "./chunk-tv3shk24.js";
import { dp } from "./chunk-rj6gws00.js";
import { bl } from "./chunk-jwqtbev0.js";
import { GX, KPe, qee, Ahr, HPt, hms, Chr, yms, L6e, koo } from "./chunk-kjgmmff6.js";
import { sg, Xu } from "./chunk-byyv32qz.js";
import { lUr, jqs, b_t, S_t, w_t, Mun, GT, Ude, Gqs, zqs, aye, GA, KL } from "./chunk-n2fmpv44.js";
import {
  Oc,
  Dne,
  wht,
  ILr,
  kOo,
  nde,
  iGe,
  DFt,
  OLr,
  ax,
  _o,
  ad,
  rde,
  lo,
  PS,
  $Ft,
  ab,
  Wa,
  Iht
} from "./chunk-fnsjs1v2.js";
import { Yat, lxt, xpr, T3t, U5e, Qxn } from "./chunk-t5yf7jby.js";
import { gwe } from "./chunk-kx54qvc0.js";
import { BAn, jAn } from "./chunk-rysz7cj6.js";
import { q3t } from "./chunk-hhkqrdqe.js";
import { Fro } from "./chunk-qw72gnne.js";
import { AUe } from "./chunk-bgwqkh89.js";
import { Qq } from "./chunk-psw7zg7w.js";
import { yG, Mk } from "./chunk-arcvz535.js";
import { Mht, Jan, Qan, Zan, ZF, e4n } from "./chunk-e4f7sb0e.js";
import { _ye } from "./chunk-dysx3hgk.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { eee } from "./chunk-4zb0cwjd.js";
import { z } from "./chunk-p197ae0z.js";
import { randomBytes as Re } from "crypto";
import { unlinkSync as Nt } from "fs";
import { mkdir as Mt, open as xt, readdir as Ut, unlink as Y } from "fs/promises";
import { connect as be } from "net";
import { join as ue } from "path";
import { randomBytes as de } from "crypto";
import { statSync as Fe } from "fs";
import { access as ft, mkdir as tt, unlink as he, writeFile as Ee } from "fs/promises";
import { basename as gt, dirname as mt, isAbsolute as _t } from "path";
var Oe = 2000,
  ne = sg,
  nt = /\x1b\[\d*D/g;
function ke(e, r) {
  let s = "",
    h = "",
    n = !0,
    p = 0,
    o = "",
    u = !1;
  function g(v, A) {
    let S = Xu(Ms(h), ne),
      y = `${v}|${A}|${S}`;
    if (y === o) return;
    ((o = y),
      lo(e, r)
        .then((R) =>
          R && !u
            ? ad(e, { ...R, state: v, tempo: A, detail: S, updatedAt: new Date().toISOString() }, r)
            : void 0
        )
        .catch(l));
  }
  let f = setInterval(() => {
    if (p > 0 && Date.now() - p < Oe) g("working", "active");
    else if (!n && h) g("blocked", "blocked");
    else g("working", "idle");
  }, Oe);
  return (
    f.unref(),
    {
      feed(v) {
        let A = yn(v.replace(nt, "\x00"))
          .replace(
            /\r\n?/g,
            `
`
          )
          .replace(/\0+$/, "")
          .replace(
            /\0/g,
            `
`
          );
        if (!A) return;
        ((p = Date.now()), (s += A));
        let S = s.split(`
`);
        if (
          ((s = S.pop() ?? ""),
          (n = s === ""),
          (h = s.trim() || S.findLast((R) => R.trim())?.trim() || h),
          s.length > ne * 2)
        )
          s = s.slice(-ne);
        if (o.startsWith("blocked|")) g("working", "active");
      },
      dispose() {
        ((u = !0), clearInterval(f));
      },
      get lastLine() {
        return Xu(Ms(h), ne);
      }
    }
  );
}
import { rename as ot, unlink as oe } from "fs/promises";
import { Socket as at } from "net";
import { StringDecoder as dt } from "string_decoder";
var Le = [50, 100, 250, 500, 1000, 2000],
  Me = 30,
  ct = 4,
  ht = 1e4,
  xe = 8 * Qan,
  lt = 50;
function ae(e, r, s) {
  let { procStart: h, short: n, hostProc: p, auth: o, onAuthRequired: u } = s ?? {},
    g = De(),
    f = De(),
    v,
    A = new dt("utf8"),
    S,
    y = !1,
    R = !1,
    L = 0,
    I = 0,
    x,
    B,
    D,
    C,
    T = 0,
    H,
    W,
    K,
    F = !1,
    se = !1,
    fe = !1,
    Z = "",
    Ce = !1,
    q = h;
  if (q === void 0)
    kd(r, { skipCache: !0 }).then((w) => {
      q = w;
    });
  let Te = [],
    ge = 0;
  function Q(w) {
    if (S) {
      if (S.destroyed) return !1;
      if (!S.write(w)) {
        if (!D)
          ((D = setTimeout(() => {
            ((D = void 0), S?.destroy());
          }, ht)),
            D.unref());
        if (!C && S.writableLength > xe)
          ((C = setTimeout(() => {
            if (((C = void 0), S && !S.destroyed && S.writableLength > xe)) (ie(), S.destroy());
          }, lt)),
            C.unref());
      }
      return !0;
    }
    if (ge < 2 * Qan) (Te.push(w), (ge += w.length));
    return !1;
  }
  function ie() {
    if (D) (clearTimeout(D), (D = void 0));
    if (C) (clearTimeout(C), (C = void 0));
  }
  function J(w, P, N) {
    if (R) return;
    if (((R = !0), (y = !0), B)) (clearTimeout(B), (B = void 0));
    (ie(), S?.destroy(), (S = void 0));
    let M = A.end();
    if (M) g.emit(M);
    f.emit({ exitCode: w, signal: P, hostStderr: N });
  }
  function me(w) {
    let P = bl(GA(e), 1048576)
      .then((U) => U ?? "")
      .catch(() => "");
    (P.then((U) => {
      let V = U.slice(0, 2000).trim();
      if (V.length > 0) t(`[bg-pty] host crash: ${V}`, { level: "warn" });
      let j = [...V.matchAll(/\bE[A-Z]{2,14}\b/g)].find(
        (Se) => !"/\\".includes(V[Se.index - 1] ?? ".")
      )?.[0];
      a("tengu_bg_ptyhost_crash", {
        hadBreadcrumb: V.length > 0,
        hadHello: F,
        via: c(w),
        short: n === void 0 ? void 0 : ax(n),
        stderr_errno: tw(j)
      });
    }),
      ARe(T ? [-r, T] : [-r], w !== "hung" ? void 0 : q),
      ibe(T, H));
    let N = nm().length > 0,
      M = N
        ? (U, V) =>
            void P.then(
              (j) => J(U, V, Ue(j)),
              () => J(U, V)
            )
        : J;
    if (p) {
      let U = null;
      (p.exited.then(
        (V) => {
          ((U = { code: V, signal: p.signalCode ?? void 0 }), M(V, U.signal));
        },
        () => M(-1)
      ),
        setTimeout(() => J(U ? U.code : -1, U?.signal), 1000).unref());
      return;
    }
    if ((M(-1), N)) setTimeout(J, 1000, -1).unref();
  }
  function st(w) {
    if (w.kind === Mht) {
      if (!se) {
        let P = A.write(w.payload);
        if (fe) g.emit(P);
        else if (P.length > 0) {
          let N = (Z + P).replaceAll(Dne, ""),
            M = pt(N);
          Z = M > 0 ? N.slice(N.length - M) : "";
          let U = M > 0 ? N.slice(0, N.length - M) : N;
          if (U.length > 0) g.emit(U);
        }
      }
    } else if (w.ctrl.t === "hello") {
      if (F) ((se = !0), A.end(), (Z = ""));
      else oe(KL(e)).catch(() => {});
      if (
        ((F = !0),
        (T = w.ctrl.replPid),
        (K = w.ctrl.version),
        (H = void 0),
        T > 1 && O() !== "windows")
      ) {
        let P = T;
        abe(P).then((N) => {
          if (T !== P || R || y || N === void 0) return;
          ((H = N), W?.(T, N));
        });
      }
    } else if (w.ctrl.t === "live") {
      if (!fe) {
        if (((fe = !0), Z.length > 0)) (g.emit(Z), (Z = ""));
      }
      if (se) ((se = !1), v?.());
    } else if (w.ctrl.t === "exit") J(w.ctrl.code, w.ctrl.signal);
    else if (w.ctrl.t === "ping") Q(ZF({ t: "pong" }));
    else if (w.ctrl.t === "auth-required")
      if (o)
        (t(
          `[bg-pty] ${n ?? e}: host rejected auth token \u2014 roster ptyAuth poisoned; input is dead until the worker is re-keyed`,
          { level: "warn" }
        ),
          u?.());
      else
        t(
          `[bg-pty] ${n ?? e}: host dropped input \u2014 DATA auth token missing (version skew; respawn the worker to re-key)`,
          { level: "warn" }
        );
  }
  function Ie() {
    if (y) return;
    let w = new at(),
      P = !1;
    (w.on("error", (N) => {
      ((Ce = E(N) === "ENOENT"), _e());
    }),
      w.once("close", () => {
        if (S === w) ((S = void 0), ie());
        if (y) return;
        if (P && !R) {
          try {
            (process.kill(r, 0),
              t("[bg-pty] dropped by host; reconnecting", { level: "debug" }),
              (I = ct),
              (L = 0),
              _e());
            return;
          } catch {}
          me("close");
          return;
        }
        _e();
      }),
      w.once("connect", () => {
        ((P = !0), (L = 0), (I = 0), (S = w), w.on("drain", ie));
        let N = GA(e),
          M = `${N}.read`;
        if (
          (ot(N, M)
            .then(() => bl(M, 1048576))
            .then((V) => {
              let j = (V ?? "").slice(0, 2000).trim();
              if (j.length > 0)
                t(
                  `[bg-pty] pre-connect stderr:
${j}`,
                  { level: "warn" }
                );
            })
            .catch(() => {})
            .finally(() => oe(M).catch(() => {})),
          Q(ZF({ t: "pong" })),
          o)
        )
          Q(ZF({ t: "auth", token: o }));
        for (let V of Te.splice(0)) Q(V);
        ge = 0;
        let U = e4n(st, (V) => {
          (t(`[bg-pty] frame error: ${V}`, { level: "warn" }), w.destroy());
        });
        w.on("data", U);
      }),
      w.connect(e));
  }
  function _e() {
    if (y || x) return;
    try {
      process.kill(r, 0);
    } catch {
      ((y = !0),
        bl(KL(e), 8388608)
          .then((P) => P ?? "")
          .then((P) => {
            if (!F && P.length > 0) g.emit(P.replaceAll(Dne, ""));
            (oe(KL(e)).catch(() => {}), me("connect"));
          }));
      return;
    }
    if (I > 0 && --I === 0) {
      me("hung");
      return;
    }
    if (h !== void 0 && Ce && L >= 3)
      (t(`[bg-pty] ${e}: ENOENT on adopt \u2014 sock file externally deleted; respawning`, {
        level: "warn"
      }),
        a("tengu_bg_adopt_sock_unlinked", {}),
        (L = Me));
    if (L >= Me) {
      t(`[bg-pty] ${e}: ${L} connect attempts failed; treating host as dead`, { level: "warn" });
      let P = q && gqe(r);
      if (r > 1 && (!q || !P || q === P))
        try {
          process.kill(-r, "SIGKILL");
        } catch {
          try {
            process.kill(r, "SIGKILL");
          } catch {}
        }
      ((y = !0),
        bl(KL(e), 8388608)
          .then((N) => N ?? "")
          .then((N) => {
            if (!F && N.length > 0) g.emit(N.replaceAll(Dne, ""));
            oe(KL(e)).catch(() => {});
            let M = nm().length > 0,
              U = (V, j) => {
                if (!M) {
                  J(V, j);
                  return;
                }
                bl(GA(e), 1048576).then(
                  (Se) => J(V, j, Ue(Se ?? "")),
                  () => J(V, j)
                );
              };
            if (p) {
              let V = null;
              (p.exited.then(
                (j) => {
                  ((V = { code: j, signal: p.signalCode ?? void 0 }), U(j, V.signal));
                },
                () => U(-1)
              ),
                setTimeout(() => J(V ? V.code : -1, V?.signal), 1000).unref());
            } else if ((U(-1), M)) setTimeout(J, 1000, -1).unref();
          }));
      return;
    }
    let w = Le[Math.min(L, Le.length - 1)];
    (L++,
      (x = setTimeout(() => {
        ((x = void 0), Ie());
      }, w)),
      x.unref());
  }
  return (
    Ie(),
    {
      pid: r,
      replPid: () => T,
      replVersion: () => K,
      onRepl: (w) => {
        if (((W = w), T > 1 && H !== void 0)) w(T, H);
      },
      onResume: (w) => {
        v = w;
      },
      write: (w) => {
        if (R) return;
        let P = Buffer.from(w, "utf8"),
          N = Qan - 1;
        for (let M = 0; M < P.length; M += N) Q(Zan(P.subarray(M, M + N)));
      },
      resize: (w, P) => Q(ZF({ t: "resize", cols: w, rows: P })),
      kill: (w) => {
        let P = w === "SIGKILL" ? "SIGKILL" : "SIGTERM",
          N = Q(ZF({ t: "kill", sig: P }));
        if (r <= 1) return;
        if (O() === "windows" && P === "SIGTERM" && N) {
          if (B) clearTimeout(B);
          ((B = setTimeout(
            (M, U) => {
              if (!_or(M, q)) {
                U(-1);
                return;
              }
              try {
                process.kill(M, "SIGKILL");
              } catch {
                U(-1);
              }
            },
            5000,
            r,
            J
          )),
            B.unref());
          return;
        }
        try {
          process.kill(-r, P);
        } catch {
          try {
            process.kill(r, P);
          } catch {
            J(-1);
          }
        }
        if ((ibe(T, H, P), P === "SIGTERM" && !R)) {
          if (B) clearTimeout(B);
          ((B = setTimeout(
            (M, U) => {
              if (!_or(M, q)) {
                U(-1);
                return;
              }
              ibe(T, H, "SIGKILL");
              try {
                process.kill(-M, "SIGKILL");
              } catch {
                try {
                  process.kill(M, "SIGKILL");
                } catch {
                  U(-1);
                }
              }
            },
            5000,
            r,
            J
          )),
            B.unref());
        }
      },
      dispose: () => {
        if (((y = !0), x)) (clearTimeout(x), (x = void 0));
        if (B) (clearTimeout(B), (B = void 0));
        (ie(), S?.destroy(), (S = void 0));
      },
      onData: (w) => ({ dispose: g.subscribe(w) }),
      onExit: (w) => ({ dispose: f.subscribe(w) })
    }
  );
}
function Ue(e) {
  return e
    .slice(0, 2000)
    .split(/\r?\n/)
    .map((r) => r.trim())
    .find((r) => r.length > 0);
}
function pt(e) {
  let r = Math.min(Dne.length - 1, e.length);
  for (let s = r; s > 0; s--) if (e.endsWith(Dne.slice(0, s))) return s;
  return 0;
}
import { Socket as ut } from "net";
var Ve = [100, 250, 500, 1000, 2000],
  Be = 30;
function He(e, r, s, h, n) {
  let p,
    o = !1,
    u = 0,
    g = !1,
    f;
  function v() {
    if (o) return;
    let S = new ut(),
      y = !1;
    (S.on("error", () => A()),
      S.once("close", () => {
        if (p === S) p = void 0;
        if (o) return;
        if (y) s();
        A();
      }),
      S.once("connect", () => {
        ((y = !0),
          (u = 0),
          (g = !1),
          (p = S),
          S.write(
            _({ proto: Oc, role: "supervisor", supervisorPid: process.pid, auth: n }) +
              `
`
          ),
          h?.(),
          q3t(S, (R) => {
            let L;
            try {
              L = te(R);
            } catch {
              return;
            }
            if (L && typeof L === "object" && "type" in L) r(L);
          }));
      }),
      S.connect(e));
  }
  function A() {
    if (o || f || g) return;
    if (u >= Be) {
      ((g = !0),
        t(
          `[bg-rv] ${e}: ${u} connect attempts failed \u2014 giving up (pid-poll is liveness backstop)`,
          { level: "warn" }
        ),
        a("tengu_bg_rv_connect_exhausted", { attempts: u }));
      return;
    }
    let S = Ve[Math.min(u, Ve.length - 1)];
    (u++,
      (f = setTimeout(() => {
        ((f = void 0), v());
      }, S)),
      f.unref());
  }
  return (
    v(),
    {
      send(S) {
        if (!p || p.destroyed) {
          if (u >= Be) ((u = 0), (g = !1), A());
          return !1;
        }
        try {
          return (
            p.write(
              _(S) +
                `
`
            ),
            !0
          );
        } catch (y) {
          return (t(`[bg-rv] send failed: ${String(y)}`), !1);
        }
      },
      close() {
        if (((o = !0), f)) clearTimeout(f);
        (p?.destroy(), (p = void 0));
      }
    }
  );
}
var St = 1e4,
  $e = 20,
  kt = new Set([129, 143]);
function Ge() {
  return k("tengu_bg_revival_guard", !0);
}
function vt() {
  return k("tengu_greedy_crane", !0) !== !1;
}
function Et() {
  return k("tengu_cosmic_cookie", !1) === !0;
}
var At =
    "Continue from where you left off. Note: this session was automatically restarted after its process exited unexpectedly; the user has not sent a new message since the restart. Re-verify anything time-sensitive (branch state, running processes, prior partial work) before continuing.",
  wt = 3600000,
  yt = 3,
  We = 5000,
  Rt = 300000,
  bt = 60000,
  le = 200,
  Ke =
    "session ID already belongs to another conversation \u2014 open again to start with a new ID";
function EJr(e) {
  return `working directory no longer exists or is not accessible: ${e}`;
}
var ve = 5000,
  ze = ve * 3,
  Ct = 120000,
  Je = 120000,
  kJr = 1000,
  Tt = 300000,
  je = { release: "2.1.213", commitMs: Date.UTC(2026, 6, 16, 18, 0, 5) },
  Dt = { release: "2.1.287", commitMs: Date.UTC(2026, 8, 30, 14, 52, 7) },
  it = ["local_bash", "in_process_teammate", "dream", "auto_mode_scan", "local_memory_import"],
  Pt = 3600000,
  Ye = 4096;
function TJr() {
  return (e, r, s) => {
    let { cmd: h, prefixArgs: n } = xu({ pinToCurrentBinary: !0 }),
      p = [h, ...n, "--bg-pty-host", s.ptySock, String(s.cols), String(s.rows), "--", e, ...r],
      o = {
        cwd: s.cwd,
        env: s.env,
        detached: !0,
        windowsHide: !0,
        ..._d("agent"),
        ...(O() !== "windows" && { argv0: "claude bg-pty-host" })
      },
      u;
    try {
      u = Bun.spawn(p, { ...o, stdio: ["ignore", "ignore", Bun.file(GA(s.ptySock))] });
    } catch (g) {
      let f = E(g);
      if (f !== "ENOENT" && f !== "ENOSPC" && f !== "EACCES" && f !== "EROFS") throw g;
      t(
        `bg: ptyHost stderr breadcrumb open failed (${f}) at ${GA(s.ptySock)} \u2014 spawning with stderr discarded (crash diagnostics degraded): ${d(g)}`,
        { level: "warn" }
      );
      let { cgroup: v, ...A } = o;
      if (v !== void 0)
        t(`bg: retrying ptyHost spawn without tool cgroup placement (${v})`, { level: "warn" });
      u = Bun.spawn(p, { ...A, stdio: ["ignore", "ignore", "ignore"] });
    }
    return (u.unref(), ae(s.ptySock, u.pid, { short: s.short, hostProc: u, auth: s.ptyAuth }));
  };
}
function qe(e, r, s, h, n, p) {
  if (e.launch.mode === "exec") return e.launch.args.map(uP);
  if (r > 1 && s) return Fne(["--resume", n ?? h, ...Iht(p)]);
  if (r > 1 && h !== e.sessionId) return Fne(["--session-id", h, ...Iht(p)]);
  if (e.launch.mode === "resume")
    return Fne([
      ...(e.launch.fork ? ["--session-id", e.sessionId, "--fork-session"] : []),
      "--resume",
      e.launch.transcriptPath ?? e.launch.sessionId,
      ...Iht(e.launch.flagArgs)
    ]);
  return Fne(Iht(e.launch.args));
}
function Xe(e, r, s, h, n) {
  let p = { ...process.env };
  if ((ee(p), e.env)) ee(e.env);
  let o = {
      ...p,
      ...(s && { CLAUDE_BG_AUTH_SNAPSHOT_PATH: s }),
      ...(z() && k("tengu_hover_rest", !1) && { CLAUDE_CODE_HOVER_REST: "1" }),
      ...(O() === "windows" && { CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT: "1" }),
      ...e.env,
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      CLAUDE_BG_SOURCE: e.source,
      CLAUDE_JOB_DIR: r,
      CLAUDE_CODE_SESSION_NAME: Vi(e.seed?.name || e.seed?.intent || e.short),
      CLAUDE_BG_RENDEZVOUS_SOCK: h,
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true"
    },
    u = Object.hasOwn(p, "PATH") ? "PATH" : Object.keys(p).find((f) => f.toUpperCase() === "PATH"),
    g = e.env?.PATH || (u ? p[u] : void 0);
  for (let f of Object.keys(o)) if (f.toUpperCase() === "PATH") delete o[f];
  if (g) o[u ?? "PATH"] = g;
  if (process.env.CLAUDE_CONFIG_DIR) o.CLAUDE_CONFIG_DIR = process.env.CLAUDE_CONFIG_DIR;
  else if (
    o.CLAUDE_CONFIG_DIR !== void 0 &&
    (!_t(o.CLAUDE_CONFIG_DIR) ||
      o.CLAUDE_CONFIG_DIR.split(/[\\/]/).includes("..") ||
      !fie(o.CLAUDE_CONFIG_DIR))
  )
    (t(
      `bg spawn ${e.short}: dropped dispatch CLAUDE_CONFIG_DIR \u2014 not an absolute, dot-dot-free spelling of this daemon's config home`,
      { level: "warn" }
    ),
      delete o.CLAUDE_CONFIG_DIR);
  for (let f of KPe) if (!e.env?.[f]) delete o[f];
  if ((qee(o), HPt(o), hms(o, p), !e.env?.CLAUDE_CODE_ENTRYPOINT)) GX(o);
  if (e.isolation === "worktree") o.CLAUDE_BG_ISOLATION = "worktree";
  for (let f of pe) if (!e.env?.[f]) delete o[f];
  for (let f of Object.keys(o)) if (tir.some((v) => f.startsWith(v)) && !e.env?.[f]) delete o[f];
  if (gqt(p) || GYe(e)) {
    for (let A of TH) delete o[A];
    if (GYe(e) || Ne(p.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) mqt(o, e.env);
    let f = vZ(p);
    if (f) (ee(o, [f]), delete o[f]);
    let v = e.env?.CLAUDE_CODE_HOST_CREDS_FILE ?? (GYe(e) ? p.CLAUDE_CODE_HOST_CREDS_FILE : void 0);
    if (v) o.CLAUDE_CODE_HOST_CREDS_FILE = v;
    for (let A of Vqe) delete o[A];
  } else {
    let f = new Set(),
      v = new Set(),
      A = new Set(),
      S = !1,
      y = !1;
    for (let R of not) {
      let L = R.selection === void 0 || Ne(o[R.selection]);
      if (
        o[R.endpoint] === p[R.endpoint] &&
        (!o[R.endpoint] || L) &&
        R.companions.every((x) => !Qsr.includes(x) || Ne(o[x]) === Ne(p[x]))
      ) {
        if (o[R.endpoint]) {
          for (let x of R.companions) f.add(x);
          S ||= re(p, R);
        }
        continue;
      }
      for (let x of [R.endpoint, ...R.companions])
        if ((v.add(x), o[R.endpoint] && o[x] !== p[x])) A.add(x);
      if (R.endpoint === "ANTHROPIC_BASE_URL" && p.ANTHROPIC_BASE_URL)
        delete o.ANTHROPIC_AUTH_TOKEN;
      else y ||= re(p, R);
    }
    for (let R of v) if (!f.has(R) || A.has(R)) delete o[R];
    if (y && !S) delete o.ANTHROPIC_AUTH_TOKEN;
  }
  if (n) ((o.CLAUDE_BG_RV_AUTH = n.rvAuth), (o.CLAUDE_BG_PTY_AUTH = n.ptyAuth));
  if (s) delete o.CLAUDE_CODE_OAUTH_TOKEN;
  if (e.launch.mode === "exec") {
    let f = not.some((v) => re(o, v));
    for (let v of Object.keys(o))
      if (
        (v.startsWith("CLAUDE_") &&
          v !== "CLAUDE_JOB_DIR" &&
          v !== "CLAUDE_CONFIG_DIR" &&
          v !== "CLAUDE_BG_PTY_AUTH") ||
        v.startsWith("OTEL_")
      )
        delete o[v];
    if ((delete o.BROWSER, f)) delete o.ANTHROPIC_AUTH_TOKEN;
    for (let v of Vqe) delete o[v];
    o.CLAUDE_PTY_HOST_EXEC = "1";
  }
  return o;
}
function Qe(e, r) {
  let s = process.env[eC];
  if (r.launch.mode === "exec" || s === void 0) delete e[eC];
  else e[eC] = s;
}
async function Ae(e, r) {
  if (!r || O() !== "macos") return;
  let s = S_t(e);
  try {
    return (
      await tt(b_t(), { recursive: !0, mode: 448 }),
      await Ee(s, JSON.stringify(r), { mode: 384 }),
      s
    );
  } catch (h) {
    t(`writeAuthSnapshot failed: ${d(h)}`, { level: "warn" });
    return;
  }
}
async function we(e, r) {
  if (O() === "windows") return;
  let s = w_t(e);
  try {
    return (
      await tt(b_t(), { recursive: !0, mode: 448 }),
      await Ee(s, JSON.stringify(r), { mode: 384 }),
      s
    );
  } catch (h) {
    t(`writeSocketTokensFile failed: ${d(h)}`, { level: "warn" });
    return;
  }
}
var pe = [
    ...qOo,
    "CLAUDE_CODE_CLIENT_DATA_URL",
    "CLAUDE_CODE_ALLOW_OTHER_MODELS",
    "CLAUDE_CODE_REMOVE_PROMPT_STRINGS",
    "CLAUDE_CODE_ATTRIBUTION_PROJECT",
    "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS",
    "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES",
    ...cB,
    "CLAUDE_CODE_EXTRA_BODY",
    "CLAUDE_CODE_AUTO_MODE_MODEL",
    ...Yj,
    ...Qsr,
    "ANTHROPIC_CUSTOM_HEADERS",
    ...oot,
    "CLAUDE_CODE_HOST_GATEWAY_LINEAGE",
    "CLAUDE_CODE_HOST_CREDS_FILE"
  ],
  GYe = (e) => Ne(e.env?.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST),
  UAn = (e) => e.launch.mode !== "exec" && !GYe(e),
  It = new Map(
    ["CLAUDE_CONFIG_DIR", ...KPe, ...Ahr, ...pe, ...Vqe, ...TH, ...pqt].map((e) => [
      e.toUpperCase(),
      e
    ])
  );
function ee(e, r = []) {
  if (O() !== "windows") return;
  let s = new Map(r.map((h) => [h.toUpperCase(), h]));
  for (let h of Object.keys(e)) {
    let n = h.toUpperCase(),
      p = It.get(n) ?? s.get(n);
    if (p === void 0 || p === h) continue;
    if (e[p] === void 0) e[p] = e[h];
    delete e[h];
  }
}
function re(e, r) {
  return (
    !!e[r.endpoint] &&
    (r.endpoint === "ANTHROPIC_BASE_URL" || r.companions.some((s) => Qsr.includes(s) && Ne(e[s])))
  );
}
function ye(e) {
  let r = (e.inFlight?.kinds ?? []).filter(
      (n) => n !== "artifact_watch" || !(e.inFlight?.drainableMonitors ?? 0)
    ),
    s = Wa(e) && r.length > 0 && r.every((n) => it.includes(n)),
    h = (e.inFlight?.tasks ?? 0) - (e.inFlight?.drainableMonitors ?? 0);
  return (e.inFlight?.queued ?? 0) > 0 || (h > 0 && !s) || r.includes("session_cron");
}
function Ot(e) {
  if (!e) return null;
  if (Wa(e)) return "settled";
  if (e.tempo === "active") return "active";
  if (ye(e)) return "inflight";
  return null;
}
function Ze(e, r) {
  let s = Ot(e);
  if (s === "settled" && r !== "missing-at-adopt") return e && ye(e) ? "inflight" : null;
  return s;
}
function et(e) {
  return e.kind === "retiring"
    ? `retiring:${e.reason}`
    : e.kind === "retired"
      ? `retired:${e.outcome}`
      : e.kind;
}
function Lt(e, r) {
  if (e.kind === "retired") return !1;
  switch (r.kind) {
    case "spawning":
      return e.kind === "upgrading" || e.kind === "running";
    case "running":
      return e.kind === "spawning";
    case "upgrading":
      return e.kind === "running";
    case "retiring":
      return !0;
    case "retired":
      return !0;
  }
}
class fpe {
  dispatch;
  spawnPty;
  getAuthSnapshot;
  via;
  storageV5;
  credentials;
  record;
  onStream = De();
  onState = De();
  onSettle = De();
  onRepaintDone = De();
  attachers = new Map();
  lastInputAttacher;
  pty;
  procStart;
  replPid = 0;
  replProcStart;
  ptyCols = 200;
  ptyRows = 50;
  decModes = T3t();
  execTracker;
  execLastLine;
  offData;
  offExit;
  ring = [];
  ringBytes = 0;
  ringSpawnMark = 0;
  attempt = 0;
  lastSpawnAt = 0;
  fastCrashStreak = 0;
  lastExitCause;
  lastExitExternalStop = !1;
  effectiveCwd;
  liveTranscriptPath;
  hostWokeAt;
  backoffTimer = null;
  pidPoll = null;
  rv;
  rvRejected = !1;
  rvSockPath;
  ptySockPath;
  rvAuth = de(16).toString("hex");
  ptyAuth = de(16).toString("hex");
  authRekeyFired = !1;
  authRekeyCount = 0;
  pendingAuthRekey;
  rosterExtras = {};
  unverifiedSock;
  phase = { kind: "spawning" };
  workerReady = !1;
  sessionIdTakenLatch = !1;
  firedInteractiveMarks = [];
  bootedViaResume = !1;
  resizeDeferred = !1;
  lastInputAt;
  downgradeRefusalLogged = !1;
  deleteJobDirOnSettle = !1;
  get shouldDeleteJobDir() {
    return this.deleteJobDirOnSettle;
  }
  adoptedAt;
  lastRvHeartbeat;
  stalledLogged = !1;
  lastCheckPidAt = Date.now();
  replyChain = Promise.resolve();
  killOutcome = "killed";
  handoffKill = !1;
  get isKilling() {
    return this.phase.kind === "retiring" && this.phase.reason === "reap";
  }
  get isHandoffKill() {
    return this.handoffKill;
  }
  get isRetiring() {
    return this.phase.kind === "retiring" && this.phase.reason === "grace";
  }
  get isUpgrading() {
    return this.phase.kind === "upgrading";
  }
  get isBooting() {
    return !this.record.outcome && (this.phase.kind === "upgrading" || !this.workerReady);
  }
  get isSpawnPending() {
    return this.phase.kind === "spawning";
  }
  get isReplyQueueOnly() {
    return (
      this.dispatch.launch.mode !== "exec" &&
      vt() &&
      xpr(
        this.record.cliVersion,
        Dt,
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      )
    );
  }
  replayInteractiveMarksTo(e) {
    let r = this.attachers.get(e);
    if (!r || r.caps?.imark !== !0) return;
    for (let s of this.firedInteractiveMarks) r.deliver(ILr({ ...s, nonce: r.imarkNonce }));
  }
  get isVersionStale() {
    return (
      !!this.record.cliVersion &&
      this.record.cliVersion !==
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
    );
  }
  get marksCapable() {
    if (this.isVersionStale) return !1;
    return this.bootedViaResume || this.firedInteractiveMarks.length > 0;
  }
  get bootingForAttachMetrics() {
    return this.isBooting || (this.marksCapable && this.firedInteractiveMarks.length === 0);
  }
  get isUnverified() {
    return this.unverifiedSock !== void 0;
  }
  getPhase() {
    return this.phase;
  }
  get isTransitioning() {
    return this.phase.kind !== "running" || !this.pty || this.record.pid === 0;
  }
  get isDetached() {
    return this.phase.kind === "retiring" && this.phase.reason === "stop";
  }
  transitionTo(e) {
    if (!Lt(this.phase, e))
      return (
        t(
          `[bg] illegal worker-phase transition ${et(this.phase)} \u2192 ${et(e)} for ${this.record.short}`,
          { level: "warn" }
        ),
        a("tengu_bg_phase_illegal", {}),
        !1
      );
    return ((this.phase = e), !0);
  }
  shutdownWorker() {
    let e = this.rv?.send({ type: "shutdown" }) ?? !1;
    if (!e) this.sigtermWorker();
    else
      setTimeout(
        (r) => {
          let s = r.phase;
          if (
            (s.kind === "upgrading" || (s.kind === "retiring" && s.reason === "grace")) &&
            !r.record.outcome
          )
            r.sigtermWorker();
        },
        5000,
        this
      ).unref();
    return e;
  }
  noteDowngradeRefused(e) {
    if (this.downgradeRefusalLogged || !this.record.cliVersion) return;
    ((this.downgradeRefusalLogged = !0),
      a("tengu_bg_respawn_downgrade_refused", {
        short: ax(this.dispatch.short),
        trigger: c(e),
        worker_cli_version: pa(this.record.cliVersion)
      }));
  }
  async respawnIfIdleStale(e, r = "sweep") {
    if (this.dispatch.launch.mode === "exec") return { respawned: !1, reason: "not-stale" };
    if (this.isTransitioning) return { respawned: !1, reason: "in-progress" };
    if (this.record.outcome) return { respawned: !1, reason: "no-state" };
    if (
      this.record.cliVersion &&
      lxt(
        this.record.cliVersion,
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      )
    )
      return (this.noteDowngradeRefused(r), { respawned: !1, reason: "not-stale" });
    if (
      Yat(
        this.record.cliVersion,
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      )
    )
      return { respawned: !1, reason: "not-stale" };
    if (this.attachers.size > 0) return { respawned: !1, reason: "attached" };
    if (!this.isVersionStale) return { respawned: !1, reason: "not-stale" };
    if (r !== "attach" && this.lastInputAt && Date.now() - this.lastInputAt < Pt)
      return { respawned: !1, reason: "busy" };
    let s = Date.now(),
      h = await lo(_o(this.dispatch.short), this.storageV5);
    if (this.isTransitioning) return { respawned: !1, reason: "in-progress" };
    if (this.record.outcome) return { respawned: !1, reason: "no-state" };
    if (this.attachers.size > 0) return { respawned: !1, reason: "attached" };
    if (this.lastInputAt && this.lastInputAt >= s) return { respawned: !1, reason: "busy" };
    if (!h) return { respawned: !1, reason: "no-state" };
    if (r !== "attach" && !Wa(h) && this.adoptedAt && Date.now() - this.adoptedAt < Je)
      return { respawned: !1, reason: "busy" };
    if (Wa(h) && r === "sweep" && !e?.has(this.dispatch.short))
      return { respawned: !1, reason: "settled" };
    if (!Wa(h) && h.tempo !== "idle" && !(this.isParkedIdleFork(h) && h.inFlight !== void 0))
      return { respawned: !1, reason: "busy" };
    if (ye(h)) return { respawned: !1, reason: "inflight" };
    if (!this.transitionTo({ kind: "upgrading" })) return { respawned: !1, reason: "in-progress" };
    return (
      this.onState.emit({ pid: this.record.pid }),
      a("tengu_bg_respawn_stale", {
        short: ax(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        trigger: c(r),
        worker_cli_version: pa(this.record.cliVersion)
      }),
      { respawned: !0 }
    );
  }
  isParkedIdleFork(e) {
    return (
      (xpr(
        this.record.cliVersion,
        je,
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      ) ||
        e.inFlight?.drainableMonitors !== void 0) &&
      e.state === "working" &&
      e.tempo === "blocked" &&
      e.needs === PS &&
      e.interactiveLineage === !0
    );
  }
  async retireIfSettled(e, r, s = e, { shedMonitoringOnly: h = !1 } = {}) {
    if (this.isTransitioning) return { retired: !1, reason: "in-progress" };
    if (this.record.outcome) return { retired: !1, reason: "no-state" };
    if (this.attachers.size > 0) return { retired: !1, reason: "attached" };
    if (GYe(this.dispatch)) return { retired: !1, reason: "host-managed" };
    if (r?.has(this.dispatch.short)) return { retired: !1, reason: "pinned" };
    if (this.adoptedAt && Date.now() - this.adoptedAt < Je)
      return { retired: !1, reason: "recent-adopt" };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return { retired: !1, reason: "recent-input" };
    let n = await lo(_o(this.dispatch.short), this.storageV5);
    if (this.isTransitioning || this.attachers.size > 0)
      return { retired: !1, reason: "in-progress" };
    if (this.lastInputAt && Date.now() - this.lastInputAt < e)
      return { retired: !1, reason: "recent-input" };
    if (!n) {
      if (this.dispatch.source === "spare" && Date.now() - this.dispatch.createdAt > e) {
        if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
          return { retired: !1, reason: "in-progress" };
        let D = Date.now() - this.dispatch.createdAt;
        return (
          a("tengu_bg_retired", {
            short: ax(this.dispatch.short),
            rvSent: this.shutdownWorker(),
            settledForMs: D,
            state: b("stale-spare"),
            cause: b("stale-spare"),
            worker_cli_version: pa(this.record.cliVersion)
          }),
          { retired: !0, cause: "stale-spare", idleMs: D }
        );
      }
      return { retired: !1, reason: "no-state" };
    }
    if (
      this.dispatch.source !== "shell" &&
      !_ye() &&
      !n.name &&
      !n.intent &&
      !n.worktreePath &&
      n.template === "bg" &&
      n.state === "working" &&
      n.tempo === "blocked" &&
      !((n.inFlight?.tasks ?? 0) > 0)
    ) {
      let D = Date.parse(n.createdAt),
        C = Date.parse(n.updatedAt),
        T = Date.now() - (C > D ? C : D);
      if (T < Tt) return { retired: !1, reason: "empty-idle-grace" };
      if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
        return { retired: !1, reason: "in-progress" };
      return (
        (this.deleteJobDirOnSettle = !0),
        a("tengu_bg_retired", {
          short: ax(this.dispatch.short),
          rvSent: this.shutdownWorker(),
          settledForMs: T,
          state: b("empty-idle"),
          cause: b("empty-idle"),
          worker_cli_version: pa(this.record.cliVersion)
        }),
        { retired: !0, cause: "empty-idle", idleMs: T }
      );
    }
    let p = this.isParkedIdleFork(n),
      o =
        Wa(n) ||
        (this.dispatch.launch.mode !== "exec" &&
          (n.tempo === "idle" || (n.state === "blocked" && n.tempo === "blocked") || p)),
      u = Date.parse(n.updatedAt),
      g = n.tempo === "blocked" && n.state !== "blocked" && n.needs !== void 0 && n.needs !== PS,
      f =
        this.isVersionStale &&
        !(
          this.record.cliVersion &&
          lxt(
            this.record.cliVersion,
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __filePath_aed151569873811e(
                new __filePath_aed151569873811e_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            }.VERSION
          )
        ) &&
        !Yat(
          this.record.cliVersion,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_aed151569873811e(
              new __filePath_aed151569873811e_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION
        ) &&
        this.dispatch.launch.mode !== "exec" &&
        n.tempo !== "active" &&
        !g &&
        !n.routine &&
        (n.inFlight?.tasks ?? 0) - (n.inFlight?.drainableMonitors ?? 0) === 0 &&
        (n.inFlight?.queued ?? 0) === 0 &&
        !(n.inFlight?.kinds ?? []).includes("session_cron") &&
        u < Date.now() - $Ft;
    if (!o && !f) return { retired: !1, reason: "not-settled" };
    let v = h || f ? (n.inFlight?.drainableMonitors ?? 0) : 0,
      A = (n.inFlight?.kinds ?? []).filter((D) => D !== "artifact_watch" || v === 0),
      S = Wa(n) && A.length > 0 && A.every((D) => it.includes(D)),
      y =
        n.interactiveLineage === !0 &&
        xpr(
          this.record.cliVersion,
          je,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_aed151569873811e(
              new __filePath_aed151569873811e_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION
        ),
      R = f && !y ? 0 : 1;
    if ((n.inFlight?.queued ?? R) > 0 || ((n.inFlight?.tasks ?? R) - v > 0 && !S))
      return { retired: !1, reason: "inflight" };
    if (A.includes("session_cron")) return { retired: !1, reason: "session-cron" };
    if (n.routine) return { retired: !1, reason: "routine" };
    let L = n.bridgeSessionId ? Math.max(e, s) : e,
      I = n.updatedAt && Date.now() - Date.parse(n.updatedAt);
    if (!I || I < L) return { retired: !1, reason: "grace" };
    if (!this.transitionTo({ kind: "retiring", reason: "grace" }))
      return { retired: !1, reason: "in-progress" };
    let x = n.inFlight?.tasks !== void 0 && n.inFlight.queued !== void 0,
      B = !o || !x || (!h && v > 0) ? "abandoned-stale" : Wa(n) ? "settled" : "idle-prompt";
    return (
      a("tengu_bg_retired", {
        short: ax(this.dispatch.short),
        rvSent: this.shutdownWorker(),
        settledForMs: I,
        bridged: !!n.bridgeSessionId,
        detritusOnly: S,
        state: Qq(n.state),
        cause: c(B),
        worker_cli_version: pa(this.record.cliVersion)
      }),
      { retired: !0, cause: B, idleMs: I }
    );
  }
  sigtermWorker() {
    try {
      this.pty?.kill("SIGTERM");
    } catch {}
  }
  onPtyAuthRequired() {
    let e = this.dispatch.launch.mode;
    if ((a("tengu_bg_pty_auth_mismatch", { mode: c(e) }), e === "exec")) {
      t(
        `[bg] exec worker ${this.dispatch.short}: ptyHost rejected auth token \u2014 roster ptyAuth poisoned; input is dead until re-dispatch (exec workers are never auto-respawned)`,
        { level: "warn" }
      );
      return;
    }
    this.rekeyForAuthMismatch("pty-auth-required");
  }
  rekeyForAuthMismatch(e) {
    if (
      this.authRekeyFired ||
      this.authRekeyCount >= yt ||
      this.phase.kind !== "running" ||
      this.record.outcome ||
      this.dispatch.launch.mode === "exec"
    ) {
      t(
        `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 not re-keying ` +
          `(via=${this.via} phase=${this.phase.kind} mode=${this.dispatch.launch.mode} fired=${this.authRekeyFired} count=${this.authRekeyCount})`,
        { level: "warn" }
      );
      return;
    }
    ((this.authRekeyFired = !0),
      lo(_o(this.dispatch.short), this.storageV5).then((r) => {
        let s = Ze(r, e);
        if (s === "settled") {
          ((this.authRekeyFired = !1),
            a("tengu_bg_adopt_token_lost_respawn", {
              source: c(e),
              deferred: !1,
              skipped: b("settled")
            }),
            t(
              `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 worker already settled; leaving to retireIfSettled`,
              { level: "warn" }
            ));
          return;
        }
        if (s !== null) {
          (a("tengu_bg_adopt_token_lost_respawn", { source: c(e), deferred: !0, reason: c(s) }),
            t(
              `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 ` +
                (s === "active"
                  ? "worker is mid-turn"
                  : "worker has non-resumable in-flight work") +
                "; deferring re-key respawn until safe",
              { level: "warn" }
            ),
            (this.pendingAuthRekey = e));
          return;
        }
        (a("tengu_bg_adopt_token_lost_respawn", { source: c(e), deferred: !1 }),
          t(
            `[bg] worker ${this.dispatch.short}: auth mismatch (${e}) \u2014 respawning to re-key (--resume preserves the session)`,
            { level: "warn" }
          ),
          this.fireAuthRekey());
      }));
  }
  fireAuthRekey() {
    if (((this.pendingAuthRekey = void 0), this.phase.kind !== "running" || this.record.outcome))
      return;
    if (!this.transitionTo({ kind: "upgrading" })) return;
    (this.authRekeyCount++, this.onState.emit({ pid: this.record.pid }), this.sigtermWorker());
  }
  constructor(e, r, s, h, n, p, o) {
    this.dispatch = e;
    this.spawnPty = r;
    this.getAuthSnapshot = s;
    this.via = h;
    this.storageV5 = p;
    this.credentials = o;
    if (
      ((this.record = {
        short: e.short,
        nonce: e.nonce,
        sessionId: e.sessionId,
        pid: 0,
        attempt: 0,
        startedAt: Date.now(),
        createdAt: e.createdAt,
        cwd: e.cwd,
        backend: "daemon",
        tempo: "active",
        state: "starting",
        detail: "",
        intent: e.seed?.intent ?? "",
        name: e.seed?.name,
        agent: e.agent,
        routine: e.routine,
        worktreePath: e.worktree?.path,
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        source: e.source,
        ...n
      }),
      e.cols)
    )
      this.ptyCols = e.cols;
    if (e.rows) this.ptyRows = e.rows;
  }
  static spawn(e, r, s, h, n, p) {
    let o = new fpe(e, r ?? TJr(), s, "cold", void 0, n, p);
    if (h?.afterUpgrade)
      return (
        (o.attempt = 1),
        o
          .buildBridgeReattachEnvFromState()
          .then((u) => o.doSpawn(u, !0))
          .catch(l),
        o
      );
    return (o.doSpawn(e.reattachEnv).catch(l), o);
  }
  static claim(e, r) {
    let s = new fpe(
      e,
      r.spawnPty,
      r.getAuthSnapshot,
      "spare",
      {
        pid: r.pid,
        attempt: 1,
        state: "running",
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      },
      r.storageV5,
      r.credentials
    );
    if (
      ((s.attempt = 1),
      (s.bootedViaResume =
        e.launch.mode !== "exec" && (e.launch.restoresTranscript ?? e.launch.mode === "resume")),
      (s.ptySockPath = r.ptySockPath),
      (s.rvSockPath = Mun(e.short)),
      r.ptyAuth)
    )
      s.ptyAuth = r.ptyAuth;
    return (
      s.wirePty(ae(r.ptySockPath, r.pid, { short: e.short, auth: s.ptyAuth })),
      s.resize(e.cols ?? 200, e.rows ?? 50),
      s.connectRv(),
      kd(r.pid, { skipCache: !0 }).then((h) => {
        if (s.record.pid !== r.pid || s.isDetached || s.record.outcome) return;
        if (h) s.procStart = h;
        s.patch({ pid: r.pid });
      }),
      s
    );
  }
  socketAuth() {
    return (
      (this.rvAuth ??= de(16).toString("hex")),
      (this.ptyAuth ??= de(16).toString("hex")),
      { rvAuth: this.rvAuth, ptyAuth: this.ptyAuth }
    );
  }
  static buildClaimFrame(e, r, s) {
    let h = _o(e.short),
      n = Xe(e, h, r, Mun(e.short), s);
    (delete n.CLAUDE_BG_PTY_AUTH,
      koo(n, e.reattachEnv),
      qee(n),
      Qe(n, e),
      delete n.CLAUDE_PTY_HOST_NO_STABLE_PATH);
    let p = qe(e, 1, !1, e.sessionId, void 0, e.respawnFlags);
    return { env: n, argv: p };
  }
  static async adopt(e, r, s, h, n, p) {
    if (r.dispatch.env) r.dispatch.env = L6e(r.dispatch.env, yms);
    if ((delete r.dispatch.reattachEnv, !Xa(r.pid))) return null;
    let o = await Pe(kd(r.pid, { skipCache: !0 }), kJr);
    if (o && r.procStart !== o) return null;
    let u = new fpe(
      r.dispatch,
      s,
      h,
      "adopted",
      {
        pid: r.pid,
        attempt: r.attempt,
        startedAt: r.startedAt,
        messagingSock: r.messagingSock,
        state: "adopted",
        detail: "adopted from previous supervisor",
        cliVersion: r.cliVersion,
        ...(r.ptySock ? {} : { legacy: !0 })
      },
      n,
      p
    );
    if (
      ((u.attempt = r.attempt),
      (u.procStart = r.procStart),
      (u.rosterExtras = OLr(r)),
      (u.workerReady = !0),
      (u.adoptedAt = Date.now()),
      (u.rvSockPath = r.rendezvousSock),
      (u.ptySockPath = r.ptySock),
      (u.rvAuth = r.rvAuth),
      (u.ptyAuth = r.ptyAuth),
      u.dispatch.launch.mode === "exec")
    )
      ((u.execTracker = ke(_o(u.dispatch.short), u.storageV5)), (u.workerReady = !0));
    if (r.ptySock)
      (u.wirePty(
        ae(r.ptySock, r.pid, {
          procStart: u.procStart,
          short: u.dispatch.short,
          auth: u.ptyAuth,
          onAuthRequired: () => u.onPtyAuthRequired()
        })
      ),
        (u.ptyCols = 0),
        u.seedFocus(!1));
    if (r.decModes) u.decModes.seed(r.decModes);
    if (r.firedInteractiveMarks) u.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    if (
      ((u.replPid = r.replPid ?? 0),
      (u.replProcStart = r.replProcStart),
      (u.bootedViaResume =
        r.dispatch.launch.mode !== "exec" &&
        (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume")),
      u.connectRv(),
      r.pendingRespawn === "upgrade" &&
        !(
          r.cliVersion &&
          lxt(
            r.cliVersion,
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __filePath_aed151569873811e(
                new __filePath_aed151569873811e_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            }.VERSION
          )
        ) &&
        !Yat(
          r.cliVersion,
          {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_aed151569873811e(
              new __filePath_aed151569873811e_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION
        ))
    )
      (u.transitionTo({ kind: "upgrading" }),
        setTimeout(
          (g) => {
            if (g.phase.kind === "upgrading" && !g.record.outcome) g.sigtermWorker();
          },
          5000,
          u
        ).unref());
    if (
      u.dispatch.launch.mode !== "exec" &&
      r.ptySock &&
      r.cliVersion &&
      (r.rvAuth === void 0 || r.ptyAuth === void 0)
    )
      return (
        t(
          `[bg] adopt ${u.dispatch.short}: roster rvAuth/ptyAuth missing for token-era worker \u2014 schema-skewed daemon stripped them`,
          { level: "warn" }
        ),
        u.rekeyForAuthMismatch("missing-at-adopt"),
        u
      );
    return u;
  }
  static unverified(e, r, s, h) {
    let n = new fpe(
      r.dispatch,
      void 0,
      void 0,
      "adopted",
      {
        pid: r.pid,
        attempt: r.attempt,
        startedAt: r.startedAt,
        messagingSock: r.messagingSock,
        state: "adopted",
        detail: "adopted (pid unverifiable; tracking via pty.sock)",
        cliVersion: r.cliVersion
      },
      s,
      h
    );
    if (
      ((n.attempt = r.attempt),
      (n.procStart = r.procStart),
      (n.rosterExtras = OLr(r)),
      r.firedInteractiveMarks)
    )
      n.firedInteractiveMarks = r.firedInteractiveMarks.slice(0, 2);
    return (
      (n.replPid = r.replPid ?? 0),
      (n.replProcStart = r.replProcStart),
      (n.bootedViaResume =
        r.dispatch.launch.mode !== "exec" &&
        (r.dispatch.launch.restoresTranscript ?? r.dispatch.launch.mode === "resume")),
      (n.rvSockPath = r.rendezvousSock),
      (n.ptySockPath = r.ptySock),
      (n.rvAuth = r.rvAuth),
      (n.ptyAuth = r.ptyAuth),
      (n.unverifiedSock = r.ptySock),
      (n.lastInputAt = Date.now()),
      (n.pidPoll = setInterval(
        (p) => {
          if (p.record.outcome || !p.unverifiedSock) return;
          Qxn(p.unverifiedSock).then((o) => {
            if (o || p.record.outcome || p.phase.kind !== "spawning") return;
            p.settle("crashed");
          });
        },
        ve,
        n
      )),
      n.pidPoll.unref(),
      a("tengu_bg_adopt_unverified", { short: ax(e) }),
      n
    );
  }
  tail(e) {
    return e > 0 ? this.ring.slice(-e) : [];
  }
  ringSnapshot() {
    return this.ring;
  }
  get sessionIdTaken() {
    return this.sessionIdTakenLatch;
  }
  preInitErrorTail() {
    let e = yn(this.ring.slice(this.ringSpawnMark).join("")).replace(/\s+/g, " ").trim();
    if (!e) return;
    return e.length > le ? `\u2026${e.slice(-le)}` : e;
  }
  decModeSnapshot() {
    return this.decModes.snapshot();
  }
  write(e) {
    ((this.lastInputAt = Date.now()), this.pty?.write(e));
  }
  noteActivity() {
    this.lastInputAt = Date.now();
  }
  shiftGraceClocksForward(e) {
    if (e <= 0) return;
    if (((this.hostWokeAt = Date.now()), this.adoptedAt !== void 0)) this.adoptedAt += e;
    if (this.lastInputAt !== void 0) this.lastInputAt += e;
  }
  seedFocus(e) {
    if (this.dispatch.launch.mode === "exec") return;
    this.pty?.write(e ? H4t : L4t);
  }
  resize(e, r) {
    if (((this.ptyCols = e), (this.ptyRows = r), O() === "windows" && !this.workerReady)) {
      this.resizeDeferred = !0;
      return;
    }
    try {
      this.pty?.resize(e, r);
    } catch {}
  }
  signalPtyPgrp() {
    if (O() === "windows" || !this.record.pid) return;
    setTimeout(
      (e) => {
        try {
          process.kill(-e, "SIGWINCH");
        } catch {}
      },
      15,
      this.record.pid
    );
  }
  resizeForRepaint(e, r) {
    if (e !== this.ptyCols || r !== this.ptyRows)
      return (
        this.resize(e, r),
        this.signalPtyPgrp(),
        this.rv?.send({ type: "repaint" }),
        () => {}
      );
    let s = this.rv?.send({ type: "repaint" }) === !0,
      h = () => {},
      n = setTimeout(
        (p, o) => {
          if ((h(), this.ptyCols !== p || this.ptyRows !== o)) return;
          let u = Math.max(2, p - 1);
          (this.resize(u, o),
            this.signalPtyPgrp(),
            setTimeout(
              (g, f, v) => {
                if (this.ptyCols === v && this.ptyRows === f)
                  (this.resize(g, f), this.signalPtyPgrp());
              },
              30,
              p,
              o,
              u
            ));
        },
        s ? 50 : 0,
        e,
        r
      );
    if (s)
      h = this.onRepaintDone.subscribe(() => {
        (h(), clearTimeout(n));
      });
    return () => {
      (h(), clearTimeout(n));
    };
  }
  rosterEntry() {
    return {
      ...this.rosterExtras,
      pid: this.record.pid,
      procStart: this.procStart,
      sessionId: this.record.sessionId,
      rendezvousSock: this.rvSockPath ?? Mun(this.dispatch.short),
      ptySock: this.record.legacy ? void 0 : (this.ptySockPath ?? GT(this.dispatch.short)),
      messagingSock: this.record.messagingSock,
      cliVersion: this.record.cliVersion,
      startedAt: this.record.startedAt,
      attempt: this.attempt,
      cwd: this.dispatch.cwd,
      worktreePath: this.dispatch.worktree?.path,
      dispatch: this.cappedDispatch(),
      pendingRespawn: this.phase.kind === "upgrading" ? "upgrade" : void 0,
      decModes: this.decModes.snapshot(),
      firedInteractiveMarks:
        this.firedInteractiveMarks.length > 0 ? this.firedInteractiveMarks.slice(0, 2) : void 0,
      rvAuth: this.rvAuth,
      ptyAuth: this.ptyAuth,
      replPid: this.replPid > 1 ? this.replPid : void 0,
      replProcStart: this.replPid > 1 ? this.replProcStart : void 0
    };
  }
  cappedDispatch() {
    return JSON.parse(
      JSON.stringify(this.dispatch, (e, r) => {
        let s = e.toUpperCase();
        if (
          e === "reattachEnv" ||
          e === "attachStallRespawns" ||
          Chr.includes(s === "PATH" ? e : s)
        )
          return;
        if (typeof r === "string" && r.length > Ye) return r.slice(0, Ye);
        return r;
      })
    );
  }
  async reply(e, { nextTurn: r = !1 } = {}) {
    if (
      ((this.lastInputAt = Date.now()), (this.lastInputAttacher = void 0), this.isReplyQueueOnly)
    ) {
      let p;
      if (this.rvRejected) p = "the worker rejected the rendezvous token";
      else if (!this.rv) p = "no rendezvous client";
      else if (!this.rv.send({ type: "reply", text: e, ...(r && { nextTurn: r }) }))
        p = "the rendezvous is not connected";
      if (p) t(`[bg] ${this.record.short}: reply refused: ${p}`);
      return !p;
    }
    let s = await lo(_o(this.dispatch.short), this.storageV5),
      n = s?.tempo === "blocked" || (await this.isReplWaiting()) || this.record.tempo === "blocked";
    if ((!s || n || r) && this.rv?.send({ type: "reply", text: e, ...(r && { nextTurn: r }) }))
      return !0;
    if (r || (n && this.dispatch.launch.mode !== "exec")) return !1;
    if (this.pty) {
      let p = this.dispatch.launch.mode !== "exec";
      return (
        (this.replyChain = this.replyChain.then(
          () =>
            new Promise((o) => {
              (this.pty?.write(p ? `\x1B[200~${e}\x1B[201~` : e),
                setTimeout(
                  (u) => {
                    (this.pty?.write("\r"), u());
                  },
                  10,
                  o
                ));
            })
        )),
        !0
      );
    }
    return this.rv?.send({ type: "reply", text: e }) ?? !1;
  }
  async isReplWaiting() {
    if (this.replPid <= 1 || this.dispatch.launch.mode === "exec") return !1;
    try {
      let { liveStatusOfJob: e } = await import("./chunk-w0prrq68.js");
      return (await e(this.replPid, this.dispatch.short)) === "waiting";
    } catch (e) {
      return (
        t(
          `[bg] ${this.dispatch.short}: live status unreadable (${E(e) ?? d(e)}), treating as waiting`
        ),
        !0
      );
    }
  }
  sendAttacherCaps(e) {
    return this.rv?.send({ type: "attacher-caps", caps: e }) ?? !1;
  }
  kill(e = "SIGTERM", r = "killed", s) {
    if (this.phase.kind === "retired") return;
    if (
      ((this.killOutcome = r === "failed" ? "failed" : "killed"),
      (this.handoffKill = this.handoffKill || r === "handoff"),
      s)
    )
      this.patch({ detail: s });
    if ((this.transitionTo({ kind: "retiring", reason: "reap" }), this.backoffTimer))
      (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    if (this.unverifiedSock) {
      U5e(this.unverifiedSock, this.storageV5).finally(() => this.settle(this.killOutcome));
      return;
    }
    if (this.pty)
      try {
        this.pty.kill(e);
      } catch {}
    else if (this.record.pid && !this.pidRecycled())
      try {
        process.kill(-this.record.pid, e);
      } catch {
        try {
          process.kill(this.record.pid, e);
        } catch {}
      }
    if (!this.pty) this.settle(this.killOutcome);
  }
  stop() {
    if (this.phase.kind === "retiring" && this.phase.reason === "reap")
      this.settle(this.killOutcome);
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace") this.settle("done");
    else if (this.phase.kind !== "retired") this.transitionTo({ kind: "retiring", reason: "stop" });
    if (this.backoffTimer) (clearTimeout(this.backoffTimer), (this.backoffTimer = null));
    (this.clearLiveness(),
      this.offData?.dispose(),
      this.offExit?.dispose(),
      this.execTracker?.dispose(),
      (this.execTracker = void 0),
      this.pty?.dispose(),
      (this.pty = void 0));
  }
  async doSpawn(e, r = !1) {
    if (
      (this.attempt++,
      (this.authRekeyFired = !1),
      (this.pendingAuthRekey = void 0),
      (this.workerReady = !1),
      (this.firedInteractiveMarks = []),
      this.attempt > 1)
    )
      this.liveTranscriptPath = null;
    ((this.resizeDeferred = !1),
      (this.ringSpawnMark = this.ring.length),
      (this.lastSpawnAt = Date.now()),
      (this.lastExitExternalStop = !1));
    let s = this.dispatch,
      h = _o(s.short);
    await AUe(s.short, this.storageV5).catch(() => {});
    let n = _m();
    if (n) {
      (a("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
        m("agent_launcher", "worker_refused"),
        this.patch({ state: "crashed", detail: n }));
      let C = this.dimNotice(n);
      return (this.pushRing(C), this.onStream.emit(C), this.settle("crashed"));
    }
    let p = UAn(s) ? await Ae(s.short, this.getAuthSnapshot?.()) : void 0,
      o = await we(
        s.short,
        s.launch.mode === "exec" ? { ptyAuth: this.socketAuth().ptyAuth } : this.socketAuth()
      );
    try {
      await jqs(mt(GA(this.ptySockPath ?? GT(s.short))));
    } catch (C) {
      if (this.credentials)
        await Promise.all([
          o ? this.credentials.discardSpentCredentialFile(o).catch(() => {}) : void 0,
          p ? this.credentials.discardSpentCredentialFile(p).catch(() => {}) : void 0
        ]);
      else
        await Promise.all([o ? he(o).catch(() => {}) : void 0, p ? he(p).catch(() => {}) : void 0]);
      if (this.record.outcome) return;
      if (E(C) === lUr) {
        let T = `worker socket directory is not owned by this user \u2014 ${d(C)}`;
        this.patch({ state: "crashed", detail: T });
        let H = this.dimNotice(T);
        return (this.pushRing(H), this.onStream.emit(H), this.settle("crashed"));
      }
      return this.scheduleRespawn(d(C));
    }
    await he(GA(this.ptySockPath ?? GT(s.short))).catch(() => {});
    let u = s.launch.mode === "resume" ? s.launch.sessionId : void 0,
      g = !1,
      f = !1,
      v = s.sessionId,
      A,
      { respawnFlags: S, cwd: y } = s,
      R = !1;
    if (this.attempt > 1) {
      let C = await lo(h, this.storageV5);
      ((v = C?.resumeSessionId ?? s.sessionId),
        (S = C?.respawnFlags ?? s.respawnFlags),
        (y = C?.cwd ?? s.cwd),
        (R = C?.interactiveLineage === !0));
      let T = Mk(yG(this.storageV5)),
        H = await Gfe(v, y, C?.linkScanPath, void 0, T);
      if (((g = H.hasMessages), g)) ((A = H.path), (this.liveTranscriptPath = H.path));
      let W = u !== void 0 && F$e(u);
      if (
        ((f =
          !g &&
          u !== void 0 &&
          !(await Gfe(W ? gt(u, ".jsonl") : u, y, W ? u : void 0, void 0, T)).hasMessages),
        !g)
      )
        await J4e(H.path, T);
    }
    if (
      ((this.effectiveCwd = y),
      this.phase.kind === "retiring" || this.phase.kind === "retired" || this.record.outcome)
    ) {
      if (o)
        if (this.credentials) this.credentials.discardSpentCredentialFile(o).catch(() => {});
        else he(o).catch(() => {});
      return;
    }
    if (f)
      return (
        this.patch({ state: "crashed", detail: `source session ${u} not found` }),
        this.settle("crashed")
      );
    if (!this.spawnPty)
      return (
        this.patch({ state: "crashed", detail: "Bun.Terminal unavailable (running under Node?)" }),
        a("tengu_bg_pty_unavailable", { short: ax(this.dispatch.short) }),
        this.settle("crashed")
      );
    let L = qe(s, this.attempt, g, v, A, S);
    this.bootedViaResume =
      (s.launch.mode === "prompt" || s.launch.mode === "resume") &&
      (this.attempt === 1 || (!g && v === s.sessionId))
        ? (s.launch.restoresTranscript ?? L.includes("--resume"))
        : L.includes("--resume");
    let I = Xe(s, h, p, this.rvSockPath ?? Mun(s.short), this.socketAuth());
    if (this.attempt > 1 && g && !r) {
      if (((I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN = "1"), Ge())) {
        if (((I.CLAUDE_CODE_RESUME_PROMPT ??= At), R))
          I.CLAUDE_CODE_RESUME_INTERRUPTED_TURN_MAX_AGE_MS ??= String(wt);
      }
    }
    if (this.attempt > 1 && !g && v !== s.sessionId) I.CLAUDE_BG_POST_CLEAR_RESPAWN = "1";
    if ((koo(I, e), o))
      (delete I.CLAUDE_BG_RV_AUTH,
        delete I.CLAUDE_BG_PTY_AUTH,
        (I.CLAUDE_BG_SOCKET_TOKENS_PATH = o));
    if ((qee(I), Qe(I, s), O() === "macos" && Fro() && Et()))
      I.CLAUDE_PTY_HOST_NO_STABLE_PATH = "1";
    else delete I.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    delete I.CLAUDE_CODE_DISABLE_BG_STABLE_PATH;
    let x = this.ptyCols || (s.cols ?? 200),
      B = this.ptyRows || (s.rows ?? 50),
      D;
    try {
      let { cmd: C, prefixArgs: T } =
        s.launch.mode === "exec"
          ? { cmd: uP(s.launch.cmd), prefixArgs: [] }
          : xu({ pinToCurrentBinary: !0 });
      D = this.spawnPty(C, [...T, ...L], {
        cols: x,
        rows: B,
        cwd: y,
        env: I,
        ptySock: this.ptySockPath ?? GT(s.short),
        short: s.short,
        ptyAuth: this.ptyAuth
      });
    } catch (C) {
      let T = E(C),
        H = nm()[0];
      if (G(C)) {
        let W = await ft(y).then(
          () => !0,
          () => !1
        );
        if (this.record.outcome) return;
        if (!W) return this.settleCwdGone("cold", y);
        let K = H
          ? `launcher \`${H}\` was deleted or moved (ENOENT) \u2014 fix CLAUDE_CODE_PROCESS_WRAPPER, then run your command again`
          : s.launch.mode === "exec"
            ? `${s.launch.cmd}: command not found`
            : "daemon binary was deleted (upgrade in progress) \u2014 run your command again to use the new version";
        if (H)
          (a("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
            m("agent_launcher", "worker_launcher_enoent"));
        else
          a("tengu_bg_spawn_binary_gone", {
            short: ax(this.dispatch.short),
            attempt: this.attempt
          });
        this.patch({ state: "crashed", detail: K });
        let F = this.dimNotice(K);
        return (this.pushRing(F), this.onStream.emit(F), this.settle("crashed"));
      }
      if (H && (T === "EACCES" || T === "EPERM")) {
        if (this.record.outcome) return;
        let W = `launcher \`${H}\` could not be executed (${T})`;
        (a("tengu_bg_launcher_worker_refused", { attempt: this.attempt }),
          m("agent_launcher", T === "EACCES" ? "worker_launcher_eacces" : "worker_launcher_eperm"),
          this.patch({ state: "crashed", detail: W }));
        let K = this.dimNotice(W);
        return (this.pushRing(K), this.onStream.emit(K), this.settle("crashed"));
      }
      return this.scheduleRespawn(d(C));
    }
    if (s.launch.mode === "exec")
      (this.execTracker?.dispose(),
        (this.execTracker = ke(h, this.storageV5)),
        (this.workerReady = !0));
    if (O() === "windows") Ee(aye(s.short), String(D.pid)).catch(() => {});
    (this.wirePty(D),
      this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1),
      this.connectRv(),
      this.patch({
        pid: D.pid,
        attempt: this.attempt,
        state: this.attempt > 1 ? "resuming" : "running",
        detail: "",
        cliVersion: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_aed151569873811e(
            new __filePath_aed151569873811e_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      }),
      a("tengu_bg_worker_spawn", {
        short: ax(this.dispatch.short),
        attempt: this.attempt,
        source: c(this.dispatch.source),
        launch_mode: c(this.dispatch.launch.mode)
      }),
      kd(D.pid, { skipCache: !0 }).then((C) => {
        if (!C || this.record.pid !== D.pid || this.isDetached || this.record.outcome) return;
        ((this.procStart = C), this.patch({ pid: D.pid }));
      }));
  }
  wirePty(e) {
    ((this.pty = e),
      this.transitionTo({ kind: "running" }),
      (this.decModes = T3t()),
      e.onResume?.(() => {
        this.rv?.send({ type: "repaint" });
      }),
      e.onRepl?.((s, h) => {
        if (!this.record.pid || this.record.outcome || this.isDetached) return;
        ((this.replPid = s), (this.replProcStart = h), this.onState.emit({ pid: this.record.pid }));
      }),
      (this.offData = e.onData((s) => {
        if (this.decModes.feed(s) && this.record.pid) this.onState.emit({ pid: this.record.pid });
        (this.execTracker?.feed(s),
          this.pushRing(s.includes(Dne) ? s.replaceAll(Dne, "") : s),
          this.onStream.emit(s));
      })));
    let r = !1;
    this.offExit = e.onExit(({ exitCode: s, signal: h, hostStderr: n }) => {
      if (r) return;
      ((r = !0),
        this.offData?.dispose(),
        (this.execLastLine = this.execTracker?.lastLine),
        this.execTracker?.dispose(),
        (this.execTracker = void 0),
        (this.pty = void 0),
        this.onExit(s, h, n));
    });
  }
  dimNotice(e) {
    return wht(`\r
\x1B[2m[${e}]\x1B[0m\r
`);
  }
  pushRing(e) {
    if (
      (this.ring.push(e),
      (this.ringBytes += e.length),
      this.ringBytes > Jan * 1.25 && this.ring.length > 1)
    ) {
      let r = 0,
        s = 0;
      while (this.ringBytes - s > Jan && r < this.ring.length - 1)
        ((s += this.ring[r].length), r++);
      (this.ring.splice(0, r),
        (this.ringBytes -= s),
        (this.ringSpawnMark = Math.max(0, this.ringSpawnMark - r)));
    }
  }
  patch(e) {
    if (
      (Object.assign(this.record, e),
      this.onState.emit(e),
      this.pendingAuthRekey !== void 0 && e.tempo !== void 0 && e.tempo !== "active")
    ) {
      let r = this.pendingAuthRekey;
      lo(_o(this.dispatch.short), this.storageV5).then((s) => {
        if (this.pendingAuthRekey !== r) return;
        let h = Ze(s, r);
        if (h === "settled") {
          ((this.pendingAuthRekey = void 0),
            (this.authRekeyFired = !1),
            t(
              `[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) dropped \u2014 worker settled; leaving to retireIfSettled`,
              { level: "warn" }
            ));
          return;
        }
        if (h !== null) return;
        (t(
          `[bg] worker ${this.dispatch.short}: deferred auth-mismatch re-key (${r}) firing on tempo='${e.tempo}'`,
          { level: "warn" }
        ),
          this.fireAuthRekey());
      });
    }
  }
  onExit(e, r, s) {
    if (this.isDetached) return;
    if (this.phase.kind === "retired") return;
    let h = this.lastSpawnAt ? Date.now() - this.lastSpawnAt : void 0;
    if (Date.now() - this.lastCheckPidAt > ze) this.hostWokeAt = Date.now();
    let n = this.hostWokeAt !== void 0 && Date.now() - this.hostWokeAt < bt,
      p = !n && h !== void 0 && h < We && e !== 0;
    if (p) this.fastCrashStreak++;
    else this.fastCrashStreak = 0;
    let o = this.fastCrashStreak >= 3,
      u = this.workerReady && h !== void 0 && h >= Rt;
    this.lastExitExternalStop = (r !== void 0 || kt.has(e ?? -1)) && !n;
    let g = this.workerReady ? void 0 : this.preInitErrorTail(),
      f = nm()[0],
      v = s ? Xu(zr(yn(s)), le) || void 0 : void 0,
      A = f && !this.workerReady && !g && v ? `(launch command: \`${f}\` \u2026): ${v}` : void 0,
      S = !!f && e === 0 && !this.workerReady && h !== void 0 && h < ftt,
      y = e !== 0 ? tts(_o(this.dispatch.short)) : void 0,
      R = y ? nts(_o(this.dispatch.short), y) : void 0,
      L = R ? Xu(zr(yn(R)), le) || void 0 : void 0,
      I = !g && L ? `: ${L}` : "",
      x = p && !!y && y === this.lastExitCause;
    this.lastExitCause = p ? y : void 0;
    let B = !this.workerReady && y === rTn,
      D = g ? ` \u2014 ${g}` : A ? ` \u2014 ${A}` : y ? ` \u2014 ${y}` : "",
      C = this.effectiveCwd ?? this.dispatch.cwd,
      T = !1;
    if (y === "setcwd")
      try {
        T = !Fe(C).isDirectory();
      } catch {
        T = !0;
      }
    let H = this.dispatch.launch.mode === "exec" && (r === "SIGINT" || r === "SIGQUIT"),
      W;
    if (this.phase.kind === "retiring" && this.phase.reason === "reap") W = this.killOutcome;
    else if (this.phase.kind === "retiring" && this.phase.reason === "grace") W = "done";
    else if (this.phase.kind === "upgrading") W = void 0;
    else if (S) W = "crashed";
    else if (e === 0) W = "done";
    else if (this.dispatch.launch.mode === "exec") W = H ? "killed" : "crashed";
    else if (
      T ||
      B ||
      (!this.workerReady && (this.attempt >= 2 || g || A)) ||
      o ||
      x ||
      (!u && this.attempt >= $e)
    )
      W = "crashed";
    if (
      (a("tengu_bg_worker_exit", {
        short: ax(this.dispatch.short),
        code: e ?? void 0,
        signal: ce(r),
        attempt: this.attempt,
        procUptimeMs: h,
        source: c(this.dispatch.source),
        launch_mode: c(this.dispatch.launch.mode),
        outcome: ce(W),
        exitCause: Iss(y),
        worker_cli_version: pa(this.record.cliVersion),
        worker_stale: this.isVersionStale
      }),
      this.phase.kind === "retiring")
    )
      return this.settle(this.phase.reason === "reap" ? this.killOutcome : "done");
    if (this.phase.kind === "upgrading") {
      (this.transitionTo({ kind: "spawning" }),
        (this.attempt = 1),
        (this.fastCrashStreak = 0),
        (this.lastExitCause = void 0),
        this.patch({ pid: 0, state: "starting", detail: "upgrading" }),
        (this.procStart = void 0),
        this.buildBridgeReattachEnvFromState()
          .then((F) => this.doSpawn(F, !0))
          .catch(l));
      return;
    }
    if (S) {
      let F = `the launcher exited before Claude Code started \u2014 \`${f}\` must exec, not daemonize${A ? ` \u2014 ${A}` : ""}`;
      return (
        a("tengu_bg_launcher_fork_and_exit", { attempt: this.attempt }),
        m("agent_launcher", "worker_fork_and_exit"),
        this.patch({ state: "crashed", detail: F }),
        this.settle("crashed")
      );
    }
    if (e === 0) {
      if (this.dispatch.launch.mode === "exec") {
        if (!this.execLastLine && this.ringBytes > 0)
          a("tengu_bg_exec_no_lastline", { ring_bytes: this.ringBytes });
        this.patch({ detail: this.execLastLine || "(no output)" });
      }
      return this.settle("done");
    }
    let K = r ? `${r} (${e})` : `exit ${e}`;
    if (this.dispatch.launch.mode === "exec") {
      let F = this.execLastLine;
      return (
        this.patch({
          state: H ? "stopped" : "crashed",
          detail: F ? `${K} \u2014 ${F}` : `${K}${D}`
        }),
        this.settle(H ? "killed" : "crashed")
      );
    }
    if (B) {
      ((this.sessionIdTakenLatch = !0),
        a("tengu_bg_session_id_taken", {
          short: ax(this.dispatch.short),
          attempt: this.attempt,
          via: c(this.via),
          launch_mode: c(this.dispatch.launch.mode)
        }),
        this.patch({ state: "crashed", detail: Ke }));
      let F = this.dimNotice(Ke);
      return (this.pushRing(F), this.onStream.emit(F), this.settle("crashed"));
    }
    if (!this.workerReady && y?.startsWith("spare_postclaim:"))
      try {
        if (!Fe(this.dispatch.cwd).isDirectory()) return this.settleCwdGone("spare");
      } catch {
        return this.settleCwdGone("spare");
      }
    if (T) return this.settleCwdGone("boot", C);
    if (!this.workerReady && (this.attempt >= 2 || g || A)) {
      let F = !r && gwe() ? " \u2014 possibly low memory \u2014 free some up and retry" : "";
      return (
        this.patch({ state: "crashed", detail: `${K} before init${D || F}` }),
        this.settle("crashed")
      );
    }
    if (o || x)
      return (
        this.patch({
          state: "crashed",
          detail: x
            ? `${K} \xD7${this.attempt}${D}${I}`
            : `${K} within ${We / 1000}s of spawn \xD7${this.fastCrashStreak}${D}${I}`
        }),
        this.settle("crashed")
      );
    if (u) this.attempt = 1;
    this.scheduleRespawn(`${K}${D}${I}`);
  }
  async doSpawnUnlessSettledOnDisk() {
    let e = Ge()
      ? await lo(_o(this.dispatch.short), this.storageV5).catch(() => {
          return;
        })
      : void 0;
    if (this.record.outcome || this.phase.kind === "retiring" || this.phase.kind === "retired")
      return;
    if (e && Wa(e) && !e.queuedPrompt) {
      a("tengu_bg_respawn_suppressed", {
        short: ax(this.dispatch.short),
        reason: b("settled_on_disk")
      });
      let r = ab(e.state);
      return this.settle(r === "success" ? "done" : r === "failure" ? "failed" : "killed");
    }
    if (e?.interactiveLineage && this.lastExitExternalStop)
      return (
        a("tengu_bg_respawn_suppressed", {
          short: ax(this.dispatch.short),
          reason: b("no_task_contract")
        }),
        this.patch({ state: "stopped", detail: "stopped by an external signal" }),
        this.settle("killed")
      );
    return this.doSpawn();
  }
  settleCwdGone(e, r = this.dispatch.cwd) {
    let s = EJr(r);
    (a("tengu_bg_spawn_cwd_gone", {
      short: ax(this.dispatch.short),
      attempt: this.attempt,
      via: c(e)
    }),
      this.patch({ state: "crashed", detail: s }));
    let h = this.dimNotice(`${s} \u2014 this job cannot be respawned`);
    (this.pushRing(h), this.onStream.emit(h), this.settle("crashed"));
  }
  async buildBridgeReattachEnvFromState() {
    let e = await lo(_o(this.dispatch.short), this.storageV5).catch(() => null);
    if (!e) return;
    return rde(
      e.bridgeSessionId,
      e.bridgeSessionSeq,
      e.bridgeOutboundOnly,
      e.bridgeSessionGroupingId,
      {
        ownerAccountUuid: e.bridgeOwnerAccountUuid,
        ownerOrganizationUuid: e.bridgeOwnerOrganizationUuid,
        noHistoryBackfill: e.bridgeNoHistoryBackfill
      }
    );
  }
  scheduleRespawn(e) {
    if (this.attempt >= $e)
      return (
        a("tengu_bg_respawn_exhausted", { short: ax(this.dispatch.short), attempts: this.attempt }),
        this.patch({ state: "crashed", detail: e }),
        this.settle("crashed")
      );
    if (this.phase.kind === "running") this.transitionTo({ kind: "spawning" });
    (this.patch({ pid: 0, state: "crashed", detail: `${e}; respawning` }),
      (this.procStart = void 0));
    let r = this.dimNotice(`worker crashed (${e}) \u2014 respawning\u2026`);
    (this.pushRing(r),
      this.onStream.emit(r),
      (this.backoffTimer = setTimeout(() => {
        if (
          ((this.backoffTimer = null),
          this.phase.kind !== "retiring" && this.phase.kind !== "retired")
        )
          this.doSpawnUnlessSettledOnDisk().catch(l);
      }, St)),
      this.backoffTimer.unref());
  }
  settle(e) {
    if (this.record.outcome) return;
    (a("tengu_bg_settle", {
      short: ax(this.dispatch.short),
      outcome: c(e),
      uptimeMs: Date.now() - this.record.startedAt,
      attempt: this.attempt,
      worker_cli_version: pa(this.record.cliVersion),
      worker_stale: this.isVersionStale
    }),
      this.transitionTo({ kind: "retired", outcome: e }),
      this.clearLiveness(),
      this.patch({ outcome: e, settledAt: Date.now(), tempo: "idle" }),
      this.onSettle.emit(e));
  }
  connectRv() {
    if (this.rv || this.isDetached || this.record.outcome) return;
    if (this.dispatch.launch.mode === "exec") {
      this.startPidPoll();
      return;
    }
    ((this.rv = He(
      this.rvSockPath ?? Mun(this.dispatch.short),
      (e) => {
        if (e.type === "heartbeat") this.lastRvHeartbeat = Date.now();
        else if (e.type === "auth-rejected" || e.type === "reply-rejected")
          ((this.rvRejected = !0),
            a(
              e.type === "auth-rejected"
                ? "tengu_bg_rv_auth_mismatch"
                : "tengu_bg_rv_reply_rejected",
              {}
            ),
            this.rekeyForAuthMismatch(
              e.type === "auth-rejected" ? "rv-auth-rejected" : "rv-reply-rejected"
            ));
        else if (e.type === "done") this.settle(e.outcome);
        else if (e.type === "state") this.patch(e.patch);
        else if (e.type === "detach-request") {
          let r = nde(e.msg),
            s = this.attachers.get(this.lastInputAttacher);
          if (!e.broadcast && s) s.deliver(r);
          else if (this.attachers.size > 0) for (let h of this.attachers.values()) h.deliver(r);
          else this.onStream.emit(r);
        } else if (e.type === "repaint-done") this.onRepaintDone.emit();
        else if (e.type === "interactive-mark") {
          let r = kOo(e);
          if (!r) {
            (t(`[bg ${this.record.short}] dropped malformed rv interactive-mark frame`, {
              level: "warn"
            }),
              a("tengu_bg_imark_malformed", {}));
            return;
          }
          if (
            this.firedInteractiveMarks.length < 2 &&
            !this.firedInteractiveMarks.some((s) => s.kind === r.kind)
          ) {
            if ((this.firedInteractiveMarks.push(r), this.record.pid))
              this.onState.emit({ pid: this.record.pid });
          }
          for (let s of this.attachers.values())
            if (s.caps?.imark === !0) s.deliver(ILr({ ...r, nonce: s.imarkNonce }));
        }
      },
      () => void this.checkPid(),
      () => {
        if (((this.workerReady = !0), (this.rvRejected = !1), this.resizeDeferred))
          ((this.resizeDeferred = !1), this.resize(this.ptyCols, this.ptyRows));
        if (this.attachers.size > 0) {
          let e = [...this.attachers.values()].at(-1);
          this.sendAttacherCaps(e.caps ?? null);
        } else this.sendAttacherCaps(null);
      },
      this.rvAuth
    )),
      this.startPidPoll());
  }
  startPidPoll() {
    if (this.pidPoll) return;
    ((this.lastCheckPidAt = Date.now()),
      (this.pidPoll = setInterval(() => void this.checkPid(!0), ve)),
      this.pidPoll.unref());
  }
  pidRecycled() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = gqe(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async pidRecycledAsync() {
    if (!this.procStart || !this.record.pid) return !1;
    let e = await kd(this.record.pid);
    return e !== void 0 && e !== this.procStart;
  }
  async failIfHostExited(e) {
    let r = this.record.pid;
    if (!r || this.record.outcome || this.isKilling || !this.pty) return !1;
    let s = await AYr(r);
    if (!eee(s)) return !1;
    if (this.record.outcome || this.isKilling || !this.pty || this.record.pid !== r) return !1;
    return (
      t(
        `bg: ${this.dispatch.short} pty host pid=${r} has exited but is unreaped (state ${s}) via=${e} \u2014 reaping it and marking the session failed`,
        { level: "warn" }
      ),
      a("tengu_bg_ptyhost_zombie", {
        short: ax(this.dispatch.short),
        via: c(e),
        state: c(s === "Z" ? "Z" : "X"),
        uptimeMs: Date.now() - this.record.startedAt,
        attachers: this.attachers.size
      }),
      this.kill("SIGKILL", "failed", this.dispatch.launch.mode === "exec" ? DFt : iGe),
      !0
    );
  }
  pidPollTick = 0;
  async checkPid(e = !1) {
    let r = Date.now() - this.lastCheckPidAt;
    this.lastCheckPidAt = Date.now();
    let s = r > ze;
    if (s) this.hostWokeAt = Date.now();
    if (this.record.outcome || !this.record.pid) return;
    if (s && this.lastRvHeartbeat !== void 0) this.lastRvHeartbeat = Date.now();
    if (!this.pty)
      try {
        process.kill(this.record.pid, 0);
      } catch (n) {
        let p = E(n);
        if (p === "ESRCH" || p === "EPERM")
          (this.logVanished(!1, e), this.settle(this.isKilling ? "killed" : "crashed"));
        return;
      }
    let h = this.lastRvHeartbeat;
    if (!s && !this.stalledLogged && h !== void 0 && Date.now() - h > Ct) {
      let n = await lo(_o(this.dispatch.short), this.storageV5);
      if (!this.stalledLogged && (n?.tempo ?? this.record.tempo) === "active")
        ((this.stalledLogged = !0),
          a("tengu_bg_worker_stalled", {
            short: ax(this.dispatch.short),
            sinceMs: Date.now() - h
          }));
    }
    if (this.pty) {
      await this.failIfHostExited("poll");
      return;
    }
    if (e && this.pidPollTick++ % 12 !== 0) return;
    if (await this.pidRecycledAsync()) {
      if (this.record.outcome || this.pty) return;
      (this.logVanished(!0, e), this.settle(this.isKilling ? "killed" : "crashed"));
    }
  }
  logVanished(e, r) {
    if (this.isKilling) return;
    a("tengu_bg_worker_vanished", {
      short: ax(this.dispatch.short),
      recycled: e,
      fromPoll: r,
      uptimeMs: Date.now() - this.record.startedAt,
      worker_cli_version: pa(this.record.cliVersion),
      worker_stale: this.isVersionStale
    });
  }
  clearLiveness() {
    if (this.pidPoll) (clearInterval(this.pidPoll), (this.pidPoll = null));
    (this.rv?.close(),
      (this.rv = void 0),
      (this.lastRvHeartbeat = void 0),
      (this.stalledLogged = !1));
  }
}
async function pvi(e) {
  let r = e[0];
  if (!r)
    (process.stderr.write(`[bg-spare] missing claim sock path
`),
      process.exit(2));
  let s = await Vt(),
    h = import("./chunk-kfdf5pq3.js");
  (import("./chunk-r57z5ye3.js").catch(() => {}), import("./chunk-0x2m04n3.js").catch(() => {}));
  let n = () => {
      try {
        Nt(r);
      } catch {}
    },
    p = () => {
      (n(), process.exit(0));
    },
    o = (A) => {
      (n(),
        process.stderr.write(`[bg-spare] uncaughtException: ${d(A)}
`),
        Kw("spare_uncaught"),
        process.exit(1));
    },
    u = process.ppid,
    g = setInterval(
      (A, S) => {
        if (process.ppid !== A) (S(), process.exit(0));
      },
      2000,
      u,
      n
    );
  g.unref();
  for (let A of ["SIGTERM", "SIGHUP", "SIGINT"]) process.on(A, p);
  process.on("uncaughtException", o);
  let f = () => {
      clearInterval(g);
      for (let A of ["SIGTERM", "SIGHUP", "SIGINT"]) process.off(A, p);
      process.off("uncaughtException", o);
    },
    v;
  try {
    v = await BAn(r, void 0, s);
  } catch (A) {
    (n(),
      process.stderr.write(`[bg-spare] claim recv failed: ${d(A)}
`),
      Kw("spare_claim_recv"),
      process.exit(1));
  }
  f();
  try {
    (await h, await jAn(v, h));
  } catch (A) {
    let S = Er(A) ?? wg(A) ?? "Error";
    throw (
      Kw("spare_postclaim:" + S, v.env.CLAUDE_JOB_DIR),
      process.stderr.write(`[bg-spare] post-claim init failed: ${d(A)}
`),
      A
    );
  }
}
async function Vt() {
  let e = i.CLAUDE_BG_CLAIM_AUTH;
  delete process.env.CLAUDE_BG_CLAIM_AUTH;
  let r = i.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if ((delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, !r)) return e;
  let s = await pkt(r);
  if ((await Y(r).catch(() => {}), !s?.claimAuth))
    t("[bg-spare] tokens file unreadable; claim gate degraded", { level: "warn" });
  return s?.claimAuth ?? e;
}
var Bt = 2000;
async function AJr(e) {
  if (O() === "windows") return null;
  if (_m()) return null;
  if (!(await A$())) {
    if (!e.launcherNotRunnableEpisode.logged)
      ((e.launcherNotRunnableEpisode.logged = !0),
        m("agent_launcher", "spare_launcher_not_runnable"),
        t(
          `bg spare: launcher \`${nm()[0]}\` was deleted or is not executable \u2014 not minting a warm spare until it is restored`,
          { level: "warn" }
        ));
    return null;
  }
  return (
    (e.launcherNotRunnableEpisode.logged = !1),
    fo("daemon_bg_spare_refill", async () => {
      let r = Re(4).toString("hex"),
        s = Gqs(r),
        h = zqs(r),
        n = Re(16).toString("hex"),
        p = Re(16).toString("hex");
      await Mt(Ude(), { recursive: !0, mode: 448 }).catch(() => {});
      let o = await we(`spare-${r}`, { ptyAuth: n, claimAuth: p });
      (await Y(s).catch(() => {}), await Y(h).catch(() => {}));
      let { cmd: u, prefixArgs: g } = xu({ pinToCurrentBinary: !0 }),
        f = await xt(GA(s), "w").catch(() => null),
        v = Zui("agent"),
        A = v?.(),
        S;
      try {
        ((S = Bun.spawn(
          [u, ...g, "--bg-pty-host", s, "200", "50", "--", u, ...g, "--bg-spare", h],
          {
            cwd: Ude(),
            env: Ht(o ? { tokensPath: o } : { ptyAuth: n, claimAuth: p }),
            stdio: ["ignore", "ignore", f?.fd ?? "ignore"],
            detached: !0,
            windowsHide: !0,
            ..._d("agent"),
            argv0: "claude bg-pty-host"
          }
        )),
          S.unref());
      } catch (L) {
        if (o)
          if (z() && e.credentials !== void 0)
            e.credentials.discardSpentCredentialFile(o).catch(() => {});
          else Y(o).catch(() => {});
        throw L;
      } finally {
        await f?.close().catch(() => {});
      }
      let y = {
          hostPid: S.pid,
          ptySock: s,
          claimSock: h,
          ptyAuth: n,
          claimAuth: p,
          startedAt: Date.now(),
          cliVersion: {
            ISSUES_EXPLAINER:
              "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.310",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-23T17:43:32Z",
            GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
            HOOKS_WORKER_URL: __filePath_aed151569873811e(
              new __filePath_aed151569873811e_URL(
                "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                import.meta.url
              )
            ),
            DD_SOURCEMAP_GROUP: "default"
          }.VERSION,
          claimed: !1,
          dispose() {
            R = !0;
            try {
              S.kill("SIGTERM");
            } catch {}
          }
        },
        R = !1;
      return (
        S.exited.then(async (L) => {
          let I = Date.now(),
            x = v?.(),
            B = L !== 0 && A !== void 0 && x !== void 0 && x > A;
          if ((Y(s).catch(() => {}), Y(h).catch(() => {}), o))
            if (z() && e.credentials !== void 0)
              e.credentials.discardSpentCredentialFile(o).catch(() => {});
            else Y(o).catch(() => {});
          let D = ((await bl(GA(s), 1048576)) ?? "").slice(0, 2000).trim();
          if (D.length > 0)
            t(
              `bg spare host pid=${S.pid} exit stderr:
${D}`,
              { level: "warn" }
            );
          (Y(GA(s)).catch(() => {}), Y(KL(s)).catch(() => {}));
          let C = I - y.startedAt,
            T = !R && !y.claimed && !B && nm().length > 0 && (C < Bt || (L === 0 && C < ftt));
          if (B && !y.claimed && !R)
            t(
              `bg spare: host pid=${S.pid} died ${C}ms after spawn while the tool memory cgroup OOM-killed a member \u2014 not attributed to the launcher`,
              { level: "warn" }
            );
          if (T)
            (ARe([-S.pid]),
              m("agent_launcher", "spare_fork_or_crash"),
              t(
                `bg spare: launcher \`${nm()[0]}\` exited ${C}ms after spawn \u2014 it either daemonized instead of calling \`exec\` (launcher contract #1) or crashed at startup. Warm spares are disabled until the background service restarts; sessions still start, without the warm-attach shortcut.`,
                { level: "warn" }
              ));
          e.onExit(T);
        }),
        e.log(`bg spare spawned host pid=${S.pid}`),
        y
      );
    })
  );
}
function Ht(e) {
  let r = SR(() => ({ ...process.env }));
  ee(r);
  for (let s of KPe) delete r[s];
  if ((qee(r), HPt(r), GX(r), gqt(r))) {
    let s = vZ(r);
    if (s) (ee(r, [s]), delete r[s]);
    for (let h of TH) delete r[h];
    if (Ne(r.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) mqt(r);
  } else if (not.some((s) => re(r, s))) delete r.ANTHROPIC_AUTH_TOKEN;
  for (let s of pe) delete r[s];
  for (let s of Object.keys(r)) if (tir.some((h) => s.startsWith(h))) delete r[s];
  if (O() === "macos") delete r.CLAUDE_CODE_OAUTH_TOKEN;
  return (
    Object.assign(r, {
      CLAUDE_CODE_SESSION_KIND: "bg",
      CLAUDE_BG_BACKEND: "daemon",
      FORCE_COLOR: "3",
      COLORTERM: "truecolor",
      BROWSER: "true",
      ...("tokensPath" in e
        ? { CLAUDE_BG_SOCKET_TOKENS_PATH: e.tokensPath }
        : { CLAUDE_BG_PTY_AUTH: e.ptyAuth, CLAUDE_BG_CLAIM_AUTH: e.claimAuth })
    }),
    r
  );
}
function CJr(e, r, s, h, n, p) {
  r.claimed = !0;
  let o = fpe.claim(e, {
    pid: r.hostPid,
    ptySockPath: r.ptySock,
    spawnPty: s,
    getAuthSnapshot: h,
    ptyAuth: r.ptyAuth,
    storageV5: n,
    credentials: p
  });
  return (
    Ae(e.short, UAn(e) ? h?.() : void 0)
      .then((u) => $t(r.claimSock, Ft(e, u, o.socketAuth(), r.claimAuth)))
      .catch((u) => {
        (a("tengu_bg_sendclaim_failed", { short: ax(e.short), errno: Er(u), ...dp(u) }),
          t(`[bg-spare] send-claim failed: ${d(u)}`, { level: "warn" }));
        let g = be(r.ptySock);
        (g.on("error", () => {}),
          g.once("connect", () => {
            (g.write(ZF({ t: "kill", sig: "SIGTERM" })), g.end());
          }));
      }),
    o
  );
}
function Ft(e, r, s, h) {
  let { env: n, argv: p } = fpe.buildClaimFrame(e, r, s);
  return { cwd: e.cwd, env: n, argv: p, sessionId: e.sessionId, auth: h };
}
var rt = [50, 100, 150, 200, 250, 300, 400, 500, 500, 500];
async function $t(e, r) {
  let s = Date.now(),
    h = 5000;
  for (let n = 0; ; n++) {
    if (Date.now() - s > 5000) throw Error("send-claim timeout");
    try {
      await Gt(e, r);
      return;
    } catch (p) {
      let o = E(p);
      if (!(o === "ENOENT" || o === "ECONNREFUSED") || n >= rt.length) throw p;
      await X(rt[n] ?? 500);
    }
  }
}
function Gt(e, r) {
  return new Promise((s, h) => {
    let n = be(e);
    (n.once("error", h),
      n.once("connect", () => {
        n.end(
          _(r) +
            `
`,
          () => s()
        );
      }));
  });
}
async function RJr(e, r) {
  if (O() === "windows") return;
  let s = new Set();
  for (let p of e.values()) {
    let o = p.rosterEntry().ptySock;
    if (o) s.add(o);
  }
  let h = await Ut(Ude()).catch(() => []),
    n = 0;
  for (let p of h) {
    if (!p.endsWith(".pty.sock")) continue;
    let o = ue(Ude(), p);
    if (s.has(o)) continue;
    n++;
    let u = be(o);
    (u.on("error", () => {
      Y(o).catch(() => {});
    }),
      u.once("connect", () => {
        (u.resume(),
          u.write(ZF({ t: "kill", sig: "SIGTERM" })),
          u.end(),
          setTimeout((g) => g.destroy(), 2000, u).unref());
      }));
  }
  for (let p of h) {
    let o = [".err", ".late", ".err.read"].find((u) => p.endsWith(`.pty.sock${u}`));
    if (o) {
      let u = p.slice(0, -o.length);
      if (!h.includes(u)) Y(ue(Ude(), p)).catch(() => {});
    }
    if (p.endsWith(".claim.sock")) {
      let u = ue(Ude(), `${p.slice(0, -11)}.pty.sock`);
      if (!s.has(u)) Y(ue(Ude(), p)).catch(() => {});
    }
  }
  if (n) r(`bg orphan-spare reap: ${n}`);
}
export { EJr, kJr, TJr, GYe, UAn, fpe, pvi, AJr, CJr, RJr };

//# sourceMappingURL=chunk-kj2kfe1q.js.map
