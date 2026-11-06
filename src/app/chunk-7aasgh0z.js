import {
  fileURLToPath as __sourceFilePath_a0d1e55633cb3209,
  URL as __sourceFilePath_a0d1e55633cb3209_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { X } from "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import { R2 } from "./chunk-jazcqqqr.js";
import { Kw } from "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { X0 } from "./chunk-qywdxehb.js";
import "./chunk-3b9j76mf.js";
import { i } from "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxy1036.js";
import { pkt, A0 } from "./chunk-tv3shk24.js";
import { GA, KL, UQ } from "./chunk-n2fmpv44.js";
import { Xfs } from "./chunk-qw72gnne.js";
import { Mht, Zqn, Jan, bDe, Zan, ZF, e4n } from "./chunk-e4f7sb0e.js";
import "./chunk-ny2y84j1.js";
import { appendFileSync as Q, createWriteStream as V, mkdirSync as j } from "fs";
import { appendFile as q, mkdir as J, unlink as x, writeFile as Z } from "fs/promises";
import { createServer as ee } from "net";
import { getPriority as te, setPriority as ne } from "os";
import { dirname as F } from "path";
var re = 1048576;
async function _e(s) {
  let t = s.indexOf("--"),
    r = s.includes("--bg-spare", t + 1);
  if (!r) await Xfs();
  if ((i.unset("CLAUDE_PTY_HOST_NO_STABLE_PATH"), t < 3 || t === s.length - 1))
    return P(void 0, "bad argv: --bg-pty-host <sock> <cols> <rows> -- <file> [args...]");
  let c = s[0];
  (process.on("uncaughtException", (e) => P(c, `uncaught: ${e?.stack ?? String(e)}`)),
    process.on("unhandledRejection", (e) => P(c, `unhandledRejection: ${e?.stack ?? String(e)}`)));
  let l = Number(s[1]) || 200,
    u = Number(s[2]) || 50,
    m = s[t + 1],
    h = s.slice(t + 2),
    a = process.env.CLAUDE_PTY_HOST_EXEC === "1";
  delete process.env.CLAUDE_PTY_HOST_EXEC;
  let k = process.env.CLAUDE_BG_PTY_AUTH;
  delete process.env.CLAUDE_BG_PTY_AUTH;
  let C = process.env.CLAUDE_BG_SOCKET_TOKENS_PATH;
  if (C) {
    let e = await pkt(C);
    if (e?.ptyAuth) k = e.ptyAuth;
    else if (!k) await Y(c, "tokens-file unreadable; DATA gate fail-open");
    if (a) (delete process.env.CLAUDE_BG_SOCKET_TOKENS_PATH, await x(C).catch(() => {}));
  }
  if (O() !== "windows")
    try {
      ne(0, Math.min(te(0) + 5, 19));
    } catch {}
  let b = se(Jan),
    p = new Set(),
    R = new WeakMap(),
    H = new WeakSet(),
    N = new WeakSet(),
    S = !1,
    y = !1,
    G = !1,
    M = process.ppid,
    B = 0,
    T = null,
    D = ce(process.env.CLAUDE_PTY_RECORD, l, u);
  function K(e) {
    for (let o of p) {
      if (o.destroyed) {
        p.delete(o);
        continue;
      }
      if (o.writableLength > re) {
        (o.destroy(), p.delete(o));
        continue;
      }
      o.write(e);
    }
  }
  let I, d;
  try {
    ((I = new Bun.Terminal({
      cols: l,
      rows: u,
      data(e, o) {
        G = !0;
        let n = Buffer.from(o);
        if ((b.push(n), D?.write(n), p.size)) K(Zan(n));
      }
    })),
      (d = Bun.spawn([m, ...h], {
        cwd: process.cwd(),
        env: { ...process.env, TERM: "xterm-256color" },
        terminal: I,
        windowsHide: !0,
        detached: !1,
        ...(r && { argv0: "claude bg-spare" })
      })));
  } catch (e) {
    P(c, `spawn failed: ${String(e)}`);
  }
  function w(e, o) {
    if (!e.destroyed) e.write(o);
  }
  function z(e) {
    switch (e.t) {
      case "resize": {
        let o = Number(e.cols),
          n = Number(e.rows);
        if (o > 0 && o <= bDe && n > 0 && n <= bDe && !S && !y) {
          if ((I.resize(o, n), O() !== "windows")) {
            try {
              process.kill(-process.pid, "SIGWINCH");
            } catch {}
            try {
              d.kill("SIGWINCH");
            } catch {}
          }
        }
        return;
      }
      case "kill": {
        let o = e.sig === "SIGKILL" ? "SIGKILL" : "SIGTERM";
        try {
          y = oe(o, d, I) || y;
        } catch {}
        if (o === "SIGTERM")
          setTimeout(() => {
            if (!S)
              try {
                d.kill("SIGKILL");
              } catch {}
          }, 5000).unref();
        return;
      }
      default:
        return;
    }
  }
  await x(c).catch(() => {});
  let g = ee((e) => {
    (e.on("error", () => e.destroy()),
      e.once("close", () => p.delete(e)),
      w(
        e,
        ZF({
          t: "hello",
          replPid: d.pid,
          version:
            typeof {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __sourceFilePath_a0d1e55633cb3209(
                new __sourceFilePath_a0d1e55633cb3209_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            } < "u"
              ? {
                  ISSUES_EXPLAINER:
                    "report the issue at https://github.com/anthropics/claude-code/issues",
                  PACKAGE_URL: "@anthropic-ai/claude-code",
                  README_URL: "https://code.claude.com/docs/en/overview",
                  VERSION: "2.1.310",
                  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                  BUILD_TIME: "2026-10-23T17:43:32Z",
                  GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                  HOOKS_WORKER_URL: __sourceFilePath_a0d1e55633cb3209(
                    new __sourceFilePath_a0d1e55633cb3209_URL(
                      "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                      import.meta.url
                    )
                  ),
                  DD_SOURCEMAP_GROUP: "default"
                }.VERSION
              : void 0
        })
      ));
    for (let n of b.chunks) w(e, Zan(n));
    if (
      (w(e, ZF({ t: "live" })),
      p.add(e),
      (B = 0),
      R.set(e, { armed: !1, missed: 0 }),
      w(e, ZF({ t: "ping" })),
      S)
    ) {
      (w(e, ZF({ t: "exit", code: v, signal: U })), e.end());
      return;
    }
    let o = e4n(
      (n) => {
        if (n.kind === Mht) {
          if (k && !H.has(e)) {
            if (!N.has(e)) (N.add(e), w(e, ZF({ t: "auth-required" })));
            return;
          }
          if (!S && !y) {
            if ((I.write(n.payload), a && O() !== "windows")) {
              let f = n.payload.includes(3) ? "SIGINT" : n.payload.includes(28) ? "SIGQUIT" : null;
              if (f) {
                T = f;
                try {
                  process.kill(-process.pid, f);
                } catch {}
                setImmediate(() => {
                  T = null;
                });
              }
            }
          }
        } else if (n.kind === Zqn)
          if (n.ctrl.t === "pong") {
            let f = R.get(e);
            if (f) ((f.armed = !0), (f.missed = 0));
          } else if (n.ctrl.t === "auth") {
            if (A0(n.ctrl.token, k)) H.add(e);
          } else z(n.ctrl);
      },
      () => e.destroy()
    );
    e.on("data", o);
  });
  (g.on("error", (e) => {
    try {
      d.kill("SIGTERM");
    } catch {}
    P(c, `server error: ${String(e)}`);
  }),
    g.listen(c),
    g.unref());
  let E, _;
  if (O() !== "windows") {
    let e = R2(process.env.CLAUDE_PTY_HEARTBEAT_MS) || 60000,
      o = 3;
    ((_ = setInterval(() => {
      if (S) return;
      for (let A of p) {
        let L = R.get(A);
        if (!L?.armed) continue;
        if ((L.missed++, L.missed >= 3)) (A.destroy(), p.delete(A));
        else w(A, ZF({ t: "ping" }));
      }
    }, e)),
      _.unref());
    let n = R2(process.env.CLAUDE_PTY_ORPHAN_CHECK_MS) || 2000,
      f = 30;
    ((E = setInterval(() => {
      if (S) return;
      if (process.ppid === M || p.size > 0) {
        B = 0;
        return;
      }
      if (++B < f) return;
      (clearInterval(E),
        clearInterval(_),
        Y(c, `orphan watchdog: ppid ${M}\u2192${process.ppid}, no client for ${f * n}ms`),
        Kw("ptyhost_orphan_watchdog"));
      try {
        d.kill("SIGTERM");
      } catch {}
      setTimeout(() => {
        if (!S)
          try {
            d.kill("SIGKILL");
          } catch {}
      }, 5000).unref();
    }, n)),
      E.unref());
  }
  for (let e of ["SIGTERM", "SIGINT", "SIGHUP"])
    process.on(e, () => {
      if (T === e) return;
      try {
        d.kill(e === "SIGHUP" ? "SIGTERM" : e);
      } catch {}
    });
  if (a && O() !== "windows")
    process.on("SIGQUIT", () => {
      if (T === "SIGQUIT") return;
      try {
        d.kill("SIGQUIT");
      } catch {}
    });
  let v = 0;
  v = await d.exited;
  let W = 0;
  for (let e = 0; e < 20; e++)
    if (((G = !1), await X(5), G)) W = 0;
    else if (++W >= 2) break;
  let U = d.signalCode ?? void 0;
  if (((S = !0), a))
    try {
      let e = UQ(c),
        o = Buffer.concat(b.chunks).subarray(-4096),
        n = 0;
      while (n < 3 && n < o.length && (o[n] & 192) === 128) n++;
      let f = o.subarray(n).toString("utf8");
      X0(e, JSON.stringify({ code: v, signal: U, tail: f }), 384);
    } catch {}
  if (E) clearInterval(E);
  if (_) clearInterval(_);
  if (!y) I.close();
  if ((D?.close(), a && O() !== "windows")) {
    T = "SIGHUP";
    try {
      process.kill(-process.pid, "SIGHUP");
    } catch {}
  }
  if ((K(ZF({ t: "exit", code: v, signal: U })), p.size === 0))
    await ie(g, a ? () => Z(KL(c), Buffer.concat(b.chunks)) : void 0);
  for (let e of p) e.end();
  if (
    (await Promise.race([new Promise((e) => g.close(() => e())), X(2000, void 0, { unref: !0 })]),
    O() !== "windows")
  )
    await x(c).catch(() => {});
  process.exit(v);
}
async function ie(s, t, r = 5000) {
  let c = new Promise((u) => s.once("connection", () => u())),
    l = (t ? t().catch(() => {}) : Promise.resolve()).then(() => X(r));
  await Promise.race([c, l]);
}
function oe(s, t, r) {
  if (s === "SIGTERM" && O() === "windows") return (r.close(), !0);
  return (t.kill(s), !1);
}
function se(s) {
  let t = [],
    r = 0,
    c = 0;
  function l() {
    if (r > 0) ((t = t.slice(r)), (r = 0));
  }
  return {
    get chunks() {
      return (l(), t);
    },
    push(u) {
      (t.push(u), (c += u.length));
      while (c > s && t.length - r > 1) {
        c -= t[r++].length;
        for (let m = 0; m < 3;) {
          let h = t[r],
            a = 0;
          while (m + a < 3 && a < h.length && (h[a] & 192) === 128) a++;
          if (a > 0) ((t[r] = h.subarray(a)), (c -= a), (m += a));
          if (t[r].length > 0 || t.length - r === 1) break;
          r++;
        }
      }
      if (r >= t.length - r) l();
    }
  };
}
function ce(s, t, r) {
  if (!s) return;
  let c = process.hrtime.bigint(),
    l;
  try {
    l = V(s, { flags: "w" });
  } catch {
    return;
  }
  l.on("error", () => {
    (l?.destroy(), (l = void 0));
  });
  let u = Buffer.allocUnsafe(8);
  return (
    u.writeUInt32BE(t, 0),
    u.writeUInt32BE(r, 4),
    l.write(u),
    {
      write(m) {
        if (!l) return;
        let h = Buffer.allocUnsafe(8 + m.length),
          a = Number((process.hrtime.bigint() - c) / 1000n);
        (h.writeUInt32BE(a >>> 0, 0), h.writeUInt32BE(m.length, 4), m.copy(h, 8), l.write(h));
      },
      close() {
        l?.end();
      }
    }
  );
}
async function Y(s, t) {
  try {
    let r = GA(s);
    (await J(F(r), { recursive: !0 }),
      await q(
        r,
        `${new Date().toISOString()} ${t}
`
      ));
  } catch {}
}
function P(s, t) {
  if (s)
    try {
      let r = GA(s);
      (j(F(r), { recursive: !0 }),
        Q(
          r,
          `${new Date().toISOString()} ${t}
`
        ));
    } catch {}
  process.exit(1);
}
export { _e as runPtyHost };

//# sourceMappingURL=chunk-7aasgh0z.js.map
