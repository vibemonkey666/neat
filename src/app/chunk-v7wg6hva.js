import {
  fileURLToPath as __filePath_37a7cd314eed8345,
  URL as __filePath_37a7cd314eed8345_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, Gc } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { bt, t } from "./chunk-4kxznmzw.js";
import { Re, ue, Cbn } from "./chunk-ajtyjx88.js";
import { ots } from "./chunk-45h8cn90.js";
import { l } from "./chunk-ewvf3tep.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { go } from "./chunk-c57c64b0.js";
import { qm } from "./chunk-bh50mq9d.js";
import { lY, Oan, Zl, QF, jqn } from "./chunk-3xhvyvev.js";
import { ys } from "./chunk-j0tbz6ra.js";
import { hostname as v } from "os";
var w = 2,
  D = 1e4,
  R = 600000,
  P = 2592000000;
function S() {
  try {
    return v();
  } catch {
    return "unknown";
  }
}
function x(e) {
  return {
    now: e,
    version: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_37a7cd314eed8345(
        new __filePath_37a7cd314eed8345_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.VERSION,
    host: S(),
    platform: O(),
    ownPid: process.pid,
    isGone: qm
  };
}
function _(e, n) {
  let o = n.stickyStrikes ?? w,
    s = { ...e.fullscreenBootPending },
    u = e.fullscreenAutoDisabled,
    d = e.fullscreenBootStrikes?.version === n.version ? e.fullscreenBootStrikes.count : 0;
  if (u && u.version !== n.version) u = void 0;
  let r = 0,
    f = !1,
    y = Number.POSITIVE_INFINITY;
  for (let [m, p] of Object.entries(s)) {
    let k = Number(m);
    if (!Number.isInteger(k) || k < 1 || typeof p !== "object" || !p) {
      delete s[m];
      continue;
    }
    let g = Math.max(0, n.now - p.startedAt);
    if (p.host !== n.host || p.platform !== n.platform) {
      if (g > P) delete s[m];
      continue;
    }
    if (p.died !== void 0 || k === n.ownPid || n.isGone(k)) {
      if ((delete s[m], p.version === n.version)) ((r += 1), (y = Math.min(y, g)));
    } else if (g > R) delete s[m];
    else f = !0;
  }
  let h = { kind: "none" };
  if (u) h = { kind: "disabled" };
  else if (r > 0) {
    d += r;
    let m = Number.isFinite(y) ? y : 0;
    if (d >= o)
      ((u = { version: n.version, at: n.now, strikes: d }),
        (h = { kind: "tripped", strikes: d, newStrikes: r, pendingAgeMs: m }),
        (d = 0));
    else h = { kind: "strike", strikes: d, newStrikes: r, pendingAgeMs: m };
  } else if (f) h = { kind: "pending_alive" };
  return {
    next: {
      fullscreenBootPending: Object.keys(s).length > 0 ? s : void 0,
      fullscreenBootStrikes: d > 0 ? { count: d, version: n.version } : void 0,
      fullscreenAutoDisabled: u
    },
    decision: h
  };
}
function B(e, n) {
  let o = (s) =>
    Object.keys(s.fullscreenBootPending ?? {})
      .sort()
      .join(",");
  return (
    o(e) !== o(n) ||
    (e.fullscreenBootStrikes?.count ?? 0) !== (n.fullscreenBootStrikes?.count ?? 0) ||
    e.fullscreenBootStrikes?.version !== n.fullscreenBootStrikes?.version ||
    e.fullscreenAutoDisabled?.version !== n.fullscreenAutoDisabled?.version ||
    e.fullscreenAutoDisabled?.at !== n.fullscreenAutoDisabled?.at
  );
}
function pHn() {
  let e = ue();
  return (
    e.fullscreenAutoDisabled?.version ===
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_37a7cd314eed8345(
          new __filePath_37a7cd314eed8345_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION ||
    (e.fullscreenBootStrikes?.version ===
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_37a7cd314eed8345(
          new __filePath_37a7cd314eed8345_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION &&
      e.fullscreenBootStrikes.count > 0)
  );
}
var T = `Claude Code's fullscreen renderer didn't finish starting last time on this machine, so this launch is using the classic renderer. It will try fullscreen again next launch; /tui default keeps the classic renderer.
`,
  M = `Claude Code's fullscreen renderer has repeatedly failed to start on this machine, so it has been turned off here. Run /tui fullscreen to try it again (this also resets after an update).
`;
function _bs(e) {
  let n = e?.state ?? lY,
    o = QF(n);
  if (o === "env_on" || o === "bg_forced_on" || i.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER)
    return { kind: "none" };
  let s = x(e?.now ?? Date.now()),
    u = ue(),
    { next: d, decision: r } = _(u, s);
  if (B(u, d))
    Re((f) => {
      let y = _(f, s).next;
      return B(f, y) ? { ...f, ...y } : f;
    }, e?.storageV5);
  if (r.kind === "strike" || r.kind === "tripped" || r.kind === "disabled") {
    n.crashAutoOff = !0;
    let f = jqn(o) === "fullscreen";
    if (r.kind !== "disabled") {
      if (
        (a("tengu_fullscreen_crash_auto_off", {
          sticky: r.kind === "tripped",
          strikes: r.strikes,
          new_strikes: r.newStrikes,
          pending_age_ms: r.pendingAgeMs,
          would_be_entry_path: c(o),
          overrides_fullscreen: f
        }),
        f)
      )
        process.stderr.write(r.kind === "tripped" ? M : T);
    }
    t(
      `fullscreen disabled: a previous fullscreen launch on this machine died before it was healthy (${r.kind}) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override`
    );
  } else if (r.kind !== "none") t(`fullscreen boot canary: ${r.kind}`);
  return r;
}
function $br(e) {
  return Re(
    (n) =>
      n.fullscreenAutoDisabled === void 0 && n.fullscreenBootStrikes === void 0
        ? n
        : { ...n, fullscreenAutoDisabled: void 0, fullscreenBootStrikes: void 0 },
    e
  );
}
var F = new Set([
  "settings_on",
  "upsell_trial_on",
  "ant_default",
  "fresh_install_on",
  "downsell_on",
  "gb_on"
]);
class C {
  canary = { status: "idle" };
  recordMaybeOnDisk = void 0;
  exitHook = void 0;
  retire() {
    if (this.canary.status === "armed") {
      if ((this.canary.cleanup(), this.canary.timer !== void 0)) clearTimeout(this.canary.timer);
    }
    if (
      ((this.canary = { status: "idle" }),
      (this.recordMaybeOnDisk = void 0),
      this.exitHook !== void 0)
    )
      (process.off("exit", this.exitHook), (this.exitHook = void 0));
  }
}
var I = new W(() => new C());
function b() {
  return I.of(U().host);
}
function E(e, n, o) {
  let s = e.fullscreenBootPending?.[String(n)] !== void 0;
  if (!s && !(o && e.fullscreenBootStrikes)) return e;
  let u = e.fullscreenBootPending;
  if (s && u) {
    let { [String(n)]: d, ...r } = u;
    u = Object.keys(r).length > 0 ? r : void 0;
  }
  return {
    ...e,
    fullscreenBootPending: u,
    fullscreenBootStrikes: o ? void 0 : e.fullscreenBootStrikes
  };
}
function N(e) {
  if (e.exitHook !== void 0) return;
  ((e.exitHook = () => {
    if (e.recordMaybeOnDisk !== void 0 && ys()) {
      let n = e.recordMaybeOnDisk;
      Cbn((o) => E(o, n, !1));
    }
  }),
    process.on("exit", e.exitHook));
}
async function bbs(e) {
  let n = e?.state ?? lY,
    o = b();
  if (o.canary.status !== "idle") return o.canary.status === "armed";
  if (!Gc() || i.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) return !1;
  if (!n.crashAutoOff && Oan() && F.has(QF(n)))
    ((n.crashAutoOff = !0),
      t(
        "fullscreen disabled: turned off on this machine after repeated failed starts (recorded sticky auto-disable, honoured at REPL mount) \xB7 /tui fullscreen or CLAUDE_CODE_NO_FLICKER=1 to override"
      ));
  if (!Zl(n)) return !1;
  if (!F.has(QF(n))) return !1;
  let s = process.pid,
    u = {
      startedAt: Date.now(),
      version: {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_37a7cd314eed8345(
          new __filePath_37a7cd314eed8345_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      host: S(),
      platform: O()
    },
    d = bt(() =>
      A(
        o,
        o.canary.status === "armed" &&
          o.canary.firstFrameAt !== void 0 &&
          (process.exitCode === void 0 || process.exitCode === 0) &&
          !ots()
          ? "healthy"
          : "withdrawn"
      )
    );
  (N(o),
    (o.canary = {
      status: "armed",
      pid: s,
      cleanup: d,
      onHealthy: e?.onHealthy,
      healthyAfterMs: e?.healthyAfterMs ?? D,
      firstFrameAt: void 0,
      timer: void 0,
      storageV5: e?.storageV5
    }),
    (o.recordMaybeOnDisk = s),
    go("fullscreen_canary_arm_start"));
  try {
    await Re(
      (r) => ({ ...r, fullscreenBootPending: { ...r.fullscreenBootPending, [String(s)]: u } }),
      e?.storageV5
    );
  } catch (r) {
    l(r);
  } finally {
    go("fullscreen_canary_armed");
  }
  return o.canary.status === "armed";
}
function Sbs(e = Date.now()) {
  let n = b();
  if (n.canary.status !== "armed" || n.canary.firstFrameAt !== void 0) return;
  ((n.canary.firstFrameAt = e),
    (n.canary.timer = setTimeout(
      (o) => {
        A(o, "healthy").catch(l);
      },
      n.canary.healthyAfterMs,
      n
    )),
    n.canary.timer.unref?.());
}
async function A(e, n) {
  if (e.canary.status !== "armed") return;
  let { pid: o, cleanup: s, timer: u, onHealthy: d, storageV5: r } = e.canary;
  if (((e.canary = { status: "settled" }), s(), u !== void 0)) clearTimeout(u);
  if ((await Re((f) => E(f, o, n === "healthy"), r), e.recordMaybeOnDisk === o))
    e.recordMaybeOnDisk = void 0;
  if ((t(`fullscreen boot canary: ${n}`), n === "healthy" && d))
    try {
      await d();
    } catch (f) {
      l(f);
    }
}
async function mHn() {
  let e = b();
  if (e.canary.status !== "armed") return !1;
  let { pid: n, cleanup: o, timer: s, storageV5: u } = e.canary;
  if (((e.canary = { status: "settled" }), o(), s !== void 0)) clearTimeout(s);
  if (e.recordMaybeOnDisk === n) e.recordMaybeOnDisk = void 0;
  let d = !1;
  return (
    await Re((r) => {
      let f = r.fullscreenBootPending?.[String(n)];
      if (f === void 0 || f.died !== void 0) return r;
      return (
        (d = !0),
        {
          ...r,
          fullscreenBootPending: {
            ...r.fullscreenBootPending,
            [String(n)]: { ...f, died: "render_error" }
          }
        }
      );
    }, u),
    t("fullscreen boot canary: failure recorded"),
    d
  );
}
export { pHn, _bs, $br, bbs, Sbs, mHn };

//# sourceMappingURL=chunk-v7wg6hva.js.map
