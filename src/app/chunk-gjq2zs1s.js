// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-qmkm2x59.js";
import "./chunk-at88wjsn.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { c } from "./chunk-acd8w9vv.js";
import { E } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxy1036.js";
import { Wht, KMo, Rhe, lb, ade, P4n, I4n } from "./chunk-6h7ejyet.js";
import { Dn } from "./chunk-qywdxehb.js";
import "./chunk-arw2bgak.js";
import { a } from "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-8w2npe9a.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-vw9e882a.js";
import "./chunk-6xjawpfq.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-4nzy53ma.js";
import "./chunk-cjnzngfc.js";
import "./chunk-gg53p5cf.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-xe386mry.js";
import "./chunk-afxq0vrk.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-rhk37je5.js";
import { fxe } from "./chunk-v4kbwz0z.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c3npf81n.js";
import "./chunk-c57c64b0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-rve8yzwm.js";
import "./chunk-5tf578w6.js";
import "./chunk-ajtyjx88.js";
import "./chunk-95k4nfdh.js";
import "./chunk-ddpw2j06.js";
import "./chunk-nrysaqwk.js";
import "./chunk-zem4yd4w.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-qakn3b85.js";
import "./chunk-rj6gws00.js";
import "./chunk-exz0w70z.js";
import "./chunk-zf79f62g.js";
import "./chunk-jwqtbev0.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import { Mo } from "./chunk-r00j5r9s.js";
import "./chunk-g82naabm.js";
import "./chunk-x2h5w7zv.js";
import { Oat, Nxn } from "./chunk-eq8vmbm3.js";
import { Um } from "./chunk-wany0nxw.js";
import "./chunk-enp5gvra.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
import { spawn as L } from "child_process";
import { createHash as F } from "crypto";
import { constants as O } from "fs";
import { lstat as S, mkdir as I, open as J, realpath as j } from "fs/promises";
import { homedir as B } from "os";
import { join as x } from "path";
var U = ["/usr/bin/python3", "/usr/local/bin/python3", "/bin/python3"],
  N = 86,
  z = () =>
    [
      "import hashlib,os,sys",
      "p,d,n=sys.argv[1],sys.argv[2],int(sys.argv[3])",
      `fail=lambda m:(sys.stderr.write('device hook template integrity check failed: '+m+'\\n'),sys.exit(${N}))`,
      "os.path.isfile(p) or fail('not a regular file')",
      "os.path.getsize(p)<=n or fail('too large')",
      "b=None",
      'try: b=open(p,"rb").read()',
      "except OSError as e: fail(type(e).__name__)",
      "hashlib.sha256(b).hexdigest()==d or fail('digest mismatch')",
      "sys.argv=[p]",
      "exec(compile(b,p,'exec'),{'__name__':'__main__','__file__':p})"
    ].join(`
`),
  V = z();
async function Y(o) {
  for (let r of U) {
    let e = await o.vet(r);
    if (e !== null) return e;
  }
  return null;
}
async function G(o, r, e) {
  await e.mkdir(e.templateDir, 448);
  let n = x(e.templateDir, `${o}.py`);
  return (await e.writeFileAtomic(n, r, 384), n);
}
function W(o, r, e, n = 262144) {
  return [o, "-I", "-S", "-c", V, r, e, String(n)];
}
var K = /^(?:LD_|DYLD_|GCONV_PATH$|NLSPATH$|DEVELOPER_DIR$|PYTHON)/;
function X(o) {
  let r = { ...o };
  for (let e of Object.keys(r)) if (K.test(e)) delete r[e];
  return r;
}
var P = 65536;
async function q(o, r, e) {
  let n = await H(r.cwd, o, r, e);
  return n.status === null &&
    n.signal === void 0 &&
    !n.timedOut &&
    /ENOENT|spawn .* cwd|uv_cwd|not a directory/i.test(n.stderr)
    ? H(B(), o, r, e)
    : n;
}
function H(o, r, e, n) {
  return new Promise((i) => {
    let [l, ...s] = r;
    if (l === void 0) {
      i({ stdout: "", stderr: "no command", status: null, timedOut: !1 });
      return;
    }
    let p = !1,
      k = (d) => {
        if (!p) ((p = !0), i(d));
      },
      u;
    try {
      u = L(l, s, {
        cwd: o,
        env: { ...X(n.env ?? Mo()), CLAUDE_PROJECT_DIR: n.projectDir },
        stdio: ["pipe", "pipe", "pipe"],
        detached: !0,
        windowsHide: !0,
        ...Wht(e.hook_event_name)
      });
    } catch (d) {
      k({
        stdout: "",
        stderr: d instanceof Error ? d.message : "spawn failed",
        status: null,
        timedOut: !1
      });
      return;
    }
    let f = () => {
        try {
          if (u.pid !== void 0) process.kill(-u.pid, "SIGKILL");
        } catch {
          u.kill("SIGKILL");
        }
      },
      m = "",
      y = "",
      w = !1,
      g = !1,
      v = !1,
      D = setTimeout(
        (d) => {
          ((w = !0), d());
        },
        n.timeoutMs,
        f
      ),
      h = () => f();
    if (n.signal !== void 0)
      if (n.signal.aborted) h();
      else n.signal.addEventListener("abort", h, { once: !0 });
    let T = (d, b, M) => {
      if (d.length + b.length > P) M();
      return d.length >= P ? d : (d + b).slice(0, P);
    };
    (u.stdout?.setEncoding("utf8"),
      u.stderr?.setEncoding("utf8"),
      u.stdout?.on("data", (d) => (m = T(m, d, () => (g = !0)))),
      u.stderr?.on("data", (d) => (y = T(y, d, () => (v = !0)))),
      u.stdin?.on("error", () => {}));
    let C = (d, b) => {
      (clearTimeout(D),
        n.signal?.removeEventListener("abort", h),
        k({
          stdout: m,
          stderr: y,
          status: d,
          ...(b !== void 0 && { signal: b }),
          timedOut: w,
          ...(g && { stdoutTruncated: g }),
          ...(v && { stderrTruncated: v })
        }));
    };
    (u.on("error", (d) => {
      ((y = y || d.message), C(null));
    }),
      u.on("close", (d, b) => C(d, b ?? void 0)));
    let R;
    try {
      R = _(e);
    } catch {
      R = "";
    }
    u.stdin?.end(R);
  });
}
function A(o) {
  let r = o.stdout.trim();
  if (o.stdoutTruncated === !0) return { kind: "unreadable" };
  if (!r.startsWith("{")) return r === "" ? { kind: "silent" } : { kind: "unreadable" };
  try {
    let e = ade().safeParse(te(r));
    if (!e.success) return { kind: "unreadable" };
    let n = e.data;
    return "async" in n ? { kind: "unreadable" } : { kind: "answer", answer: n };
  } catch {
    return { kind: "unreadable" };
  }
}
function Q(o) {
  if (o.status === 2)
    return { decision: "block", reason: o.stderr.trim() || "blocked by a device hook template" };
  if (o.status !== 0) return {};
  let r = A(o);
  if (r.kind !== "answer") return {};
  let e = r.answer,
    n = {
      ...(e.continue === !1 && {
        continue: !1,
        ...(e.stopReason !== void 0 && { stopReason: e.stopReason })
      }),
      ...(e.decision === "block" && {
        decision: "block",
        ...(e.reason !== void 0 && { reason: e.reason })
      }),
      ...(e.systemMessage !== void 0 && { systemMessage: e.systemMessage })
    },
    i = e.hookSpecificOutput;
  if (i?.hookEventName === "PreToolUse") {
    let l =
      i.permissionDecision === "deny" || i.permissionDecision === "ask"
        ? i.permissionDecision
        : void 0;
    return {
      ...n,
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        ...(l !== void 0 && { permissionDecision: l }),
        ...(l !== void 0 &&
          i.permissionDecisionReason !== void 0 && {
            permissionDecisionReason: i.permissionDecisionReason
          }),
        ...(i.additionalContext !== void 0 && { additionalContext: i.additionalContext })
      }
    };
  }
  if (i?.hookEventName === "PostToolUse" && i.additionalContext !== void 0)
    return {
      ...n,
      hookSpecificOutput: { hookEventName: "PostToolUse", additionalContext: i.additionalContext }
    };
  return n;
}
function Z(o, r) {
  if (r) return "aborted";
  if (o.timedOut) return "timeout";
  if (o.signal !== void 0) return "killed";
  if (o.status === null) return "spawn_failed";
  if (o.status === N) return "integrity_failed";
  if (o.status === 0) return A(o).kind === "unreadable" ? "error" : "ok";
  return o.status === 2 ? "blocked" : "error";
}
var ee = {
  integrity_failed: "its file no longer matched what was verified",
  error: "it exited with an error or an unreadable answer",
  spawn_failed: "it could not be started",
  killed: "it was killed before it answered",
  interpreter_untrusted: "its interpreter can no longer be trusted",
  timeout: "it took too long"
};
function ne(o, r, e, n, i, l) {
  return async (s, p, k) => {
    let u = Date.now(),
      f = await i(),
      m = f
        ? await q(o, s, {
            timeoutMs: Math.max(1000, r * 1000 - 2000),
            projectDir: l(),
            ...(k !== void 0 && { signal: k })
          })
        : { stdout: "", stderr: "interpreter no longer trusted", status: null, timedOut: !1 },
      y = Q({ ...m, stderr: KMo(m.stderr, 2000).text }),
      { answer: w, report: g } = Rhe(y, e.event),
      v = f ? Z(m, k?.aborted === !0) : "interpreter_untrusted",
      D = v === "ok" && lb(w) ? "blocked" : v;
    if (
      (n({
        outcome: D,
        durationMs: Date.now() - u,
        fieldsDropped: g.dropped.length > 0 || g.truncated.length > 0
      }),
      D === "aborted")
    )
      return e.failClosed
        ? {
            decision: "block",
            reason: `cloud template ${e.id} was interrupted before it could answer`
          }
        : {};
    let h = ee[D];
    if (h !== void 0) {
      let T = `cloud template ${e.id} did not run cleanly: ${h}`;
      return e.failClosed
        ? { decision: "block", reason: T, systemMessage: T }
        : { ...w, systemMessage: T };
    }
    return w;
  };
}
function re(o) {
  return {
    vet: async (r) => {
      try {
        let e = typeof process.getuid === "function" ? process.getuid() : void 0,
          n = (p) => e !== void 0 && e !== 0 && p === e,
          i = async (p) => {
            let k = p.split("/").filter(Boolean);
            for (let u = 0; u < k.length; u += 1) {
              let f = await S("/" + k.slice(0, u).join("/"));
              if (!f.isDirectory() || (f.mode & 18) !== 0 || n(f.uid)) return !1;
            }
            return !0;
          };
        if (!(await i(r))) return null;
        let l = await j(r);
        if (!(await i(l))) return null;
        let s = await S(l);
        return s.isFile() && (s.mode & 73) !== 0 && (s.mode & 18) === 0 && !n(s.uid) ? l : null;
      } catch {
        return null;
      }
    },
    mkdir: async (r, e) => {
      try {
        await I(r, { mode: e });
      } catch (l) {
        if (E(l) !== "EEXIST") throw l;
      }
      let n = await S(r),
        i = typeof process.getuid === "function" ? process.getuid() : void 0;
      if (!n.isDirectory() || (i !== void 0 && n.uid !== i) || (n.mode & 63) !== 0)
        throw Error("unsafe device-hook template directory");
    },
    writeFileAtomic: (r, e, n) => Dn(r, e, n),
    templateDir: o
  };
}
function Oe(o) {
  let r = Um(),
    e = re(x(r, "device-hook-templates", String(process.pid))),
    n,
    i = () => (
      (n ??= Y(e).then((s) => {
        if (s === null) n = void 0;
        return s;
      })),
      n
    ),
    l = new Map();
  return {
    resolveInterpreter: i,
    async prepare(s, p, k, u) {
      let f = await i();
      if (f === null) throw Error("no absolute python3 for a device hook template");
      (await I(r, { recursive: !0, mode: 448 }), fxe(r));
      let m = l.get(p);
      if (m !== void 0 && !(await oe(await m.catch(() => null), p, s.maxBytes)))
        (l.delete(p), (m = void 0));
      if (m === void 0)
        ((m = (async () => (await e.mkdir(x(r, "device-hook-templates"), 448), G(p, k, e)))()),
          l.set(p, m),
          m.catch(() => l.delete(p)));
      let y = await m,
        w = Nxn(s);
      return ne(
        W(f, y, p, s.maxBytes),
        u,
        { id: s.id, event: s.event, failClosed: w },
        (g) => {
          if (
            (a("tengu_device_hook_template_run", {
              template: c(ie(s.id)),
              outcome: c(g.outcome),
              duration_ms: g.durationMs,
              fields_dropped: g.fieldsDropped
            }),
            g.outcome === "integrity_failed")
          )
            t(`Device hook template ${s.id} refused at run time: integrity check failed (${y})`, {
              level: "warn"
            });
          else if (g.outcome === "interpreter_untrusted")
            t(
              `Device hook template ${s.id} refused at run time: ${f} no longer vets as a trusted interpreter`,
              { level: "warn" }
            );
        },
        async () => {
          let g = (await e.vet(f)) === f;
          if (!g) n = void 0;
          return g;
        },
        o
      );
    },
    install: (s, p, k) => P4n(s, p, "templates", k),
    remove: (s) => I4n(s, "templates")
  };
}
async function oe(o, r, e) {
  if (o === null) return !1;
  let n;
  try {
    n = await J(o, O.O_RDONLY | O.O_NONBLOCK | O.O_NOFOLLOW);
    let i = await n.stat();
    if (!i.isFile() || i.size > e) return !1;
    let l = Buffer.alloc(i.size),
      { bytesRead: s } = await n.read(l, 0, i.size, 0);
    return s === i.size && F("sha256").update(l).digest("hex") === r;
  } catch {
    return !1;
  } finally {
    await n?.close().catch(() => {});
  }
}
function ie(o) {
  return Oat(o)?.id ?? "unknown";
}
export { Oe as productionDeviceHookTemplateRunner, ie as telemetryTemplateId };

//# sourceMappingURL=chunk-gjq2zs1s.js.map
