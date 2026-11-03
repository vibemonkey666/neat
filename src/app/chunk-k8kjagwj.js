// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { I5, Uoe } from "./chunk-ajtyjx88.js";
import { R, N, d, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Le } from "./chunk-jazcqqqr.js";
import { _, te, y6, t } from "./chunk-4kxznmzw.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { g, f, fo } from "./chunk-brszmkb3.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { p } from "./chunk-qmkm2x59.js";
import { N0, Ny } from "./chunk-63a6mqbs.js";
import { cQ } from "./chunk-b9vagsrs.js";
import { o4 } from "./chunk-mbserca2.js";
import { ZT } from "./chunk-3eqwf73w.js";
import { nzt, Dhn, rzt } from "./chunk-csks5ccj.js";
import { Sx } from "./chunk-nyp7c93y.js";
import { d9t, Nro, $ro, Yfs } from "./chunk-rk9gqbt8.js";
import { bms } from "./chunk-5gx8aqe4.js";
import { Kj, $Ne } from "./chunk-qzh3w7y7.js";
import { o, v, M, u, B, Ia } from "./chunk-0bqrj5ah.js";
import { z } from "./chunk-p197ae0z.js";
import { randomUUID as ge } from "crypto";
import { join as fe } from "path";
function ve(r) {
  return (
    typeof r === "object" &&
    r !== null &&
    "type" in r &&
    (r.type === "token_update" || r.type === "auth_401_result")
  );
}
function Te(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "auth_401";
}
var Ae = 300000,
  ue = 240000,
  Se = 300000,
  be = 30000,
  _e = 86400000;
function pe() {
  return We.state("daemon-auth-cooldown");
}
function Ce() {
  return We.state("daemon-auth-status");
}
function Vfs(r, n, a, s, h, w = () => !1) {
  let m = () => ({ usesLoginOffFirstParty: a() }),
    k,
    A = !1,
    y = null,
    T = new Set(),
    C = null,
    x = null;
  function W() {
    return (x ??= import("./chunk-8amfvyqf.js"));
  }
  function F(e) {
    let i = { type: "token_update", accessToken: e };
    for (let b of T)
      try {
        b.send(i);
      } catch {}
  }
  let U;
  async function re(e, i = !1) {
    if (U === e || O() !== "macos" || !(i || w()) || _t()) return;
    U = e;
    try {
      let b = await W();
      if (b.isUsing3PServices() && !m().usesLoginOffFirstParty) {
        V(e);
        return;
      }
      if ((await b.getClaudeAIOAuthTokenOriginAsync(h)) !== "store") return;
      let { validateOauthTokenWithOutcome: S, isTransientValidateFailure: c } =
          await import("./chunk-n6hjv3ew.js"),
        E = await S(e);
      if (!E.ok) {
        let de = c(E);
        if (de) V(e);
        (f("daemon_snapshot_org_lookup", E.reason, { transient: de }),
          n(`auth: token organization lookup: no answer (${E.reason})`));
        return;
      }
      let P = E.data?.organization_uuid,
        I = typeof P === "string" && P ? P : null;
      if ((g("daemon_snapshot_org_lookup", { named: I !== null }), k?.accessToken === e))
        k = { ...k, organizationUuid: I };
    } catch {
      (V(e), n("auth: token organization lookup failed"));
    }
  }
  function V(e) {
    if (U === e) U = void 0;
  }
  function D(e) {
    ((k = {
      accessToken: e.accessToken,
      scopes: e.scopes,
      subscriptionType: e.subscriptionType ?? null,
      rateLimitTier: e.rateLimitTier ?? null,
      organizationUuid: null
    }),
      re(e.accessToken));
  }
  async function H() {
    let i = await (await W()).getClaudeAIOAuthTokensAsync(h);
    if (i?.accessToken && i.accessToken !== k?.accessToken) (D(i), F(i.accessToken));
    K(i?.expiresAt ?? null);
  }
  let J,
    Z = !1;
  function j(e) {
    if (((J = e), C || r.aborted)) return;
    if (y) (clearTimeout(y), (y = null));
    (n("auth: no token found, will re-check keychain every 30s"),
      (C = setInterval(function () {
        W()
          .then(async (b) => {
            let S = b.isUsing3PServices() && !a() && !w();
            if (S !== Z)
              ((Z = S),
                n(
                  S
                    ? "auth: re-check skips the keychain (3P provider, no worker uses the token)"
                    : "auth: re-check reads the keychain again"
                ));
            if (S) return;
            b.clearOAuthTokenCache();
            let c = await b.getClaudeAIOAuthTokensAsync(h),
              E;
            if (c?.accessToken && c.accessToken !== J && c.expiresAt && c.expiresAt > Date.now())
              E = "auth: token found via keychain re-check";
            else if (
              c?.refreshToken &&
              (await b.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() }))
            )
              E = "auth: token refreshed via keychain re-check retry";
            if (E) {
              if ((await H(), k && C)) (clearInterval(C), (C = null), n(E));
            }
          })
          .catch((b) => n(`auth: keychain re-check error: ${b}`));
      }, be)),
      C.unref());
  }
  function K(e) {
    if (y) (clearTimeout(y), (y = null));
    if (!e || r.aborted) return;
    let i = Math.min(Math.max(e - Date.now() - ue, 5000), _e);
    (n(`auth: scheduling proactive refresh in ${Math.round(i / 1000)}s`),
      (y = setTimeout(ce, i)),
      y.unref());
  }
  async function ce() {
    if (r.aborted) return;
    try {
      n("auth: proactive refresh starting");
      let e = await W(),
        i = k?.accessToken,
        b = await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() });
      e.clearOAuthTokenCache();
      let S = await e.getClaudeAIOAuthTokensAsync(h),
        c = S?.expiresAt ?? null,
        E = c === null || c > Date.now() + Ae;
      if (
        S?.accessToken &&
        (b || S.accessToken !== i || E) &&
        (c === null || c > Date.now() + ue)
      ) {
        (await H(),
          n(
            b
              ? "auth: proactive refresh succeeded"
              : "auth: token still valid (cross-process refresh or not yet due)"
          ));
        return;
      }
      if (S?.accessToken && c !== null && c > Date.now()) {
        (n("auth: proactive refresh failed, retrying in ~60s (token still valid)"),
          K(Date.now() + 60000 + ue));
        return;
      }
      n("auth: proactive refresh failed, signalling re-auth required");
      let P = S?.accessToken ?? i;
      ((k = void 0), await ie(), j(P));
    } catch (e) {
      (n(`auth: proactive refresh error: ${e}`), K(Date.now() + 60000 + ue));
    }
  }
  async function ne(e) {
    if (A) return (n("auth: 401 ignored (3P provider active, no OAuth)"), !1);
    n("auth: handling 401");
    let i = await W();
    if (await i.handleOAuth401Error(e, h, s, m()))
      return (i.clearOAuthTokenCache(), await H(), n("auth: 401 recovery succeeded"), !0);
    (n("auth: 401 recovery failed, signalling re-auth required"),
      (k = void 0),
      await ie(),
      i.clearOAuthTokenCache());
    let S = await i.getClaudeAIOAuthTokensAsync(h);
    if (S?.accessToken !== void 0 && S.accessToken !== e) return (await H(), !0);
    return (j(e), !1);
  }
  let L = null;
  function ie() {
    if (L) return L;
    return (
      (L = se().finally(() => {
        L = null;
      })),
      L
    );
  }
  async function se() {
    let e = await W();
    if (e.getAnthropicApiKey()) {
      n("auth: browser login skipped (API key auth available)");
      return;
    }
    if (e.isUsing3PServices() && !a()) {
      n("auth: browser login skipped (3P provider, no OAuth-consuming worker)");
      return;
    }
    let i = Le(),
      b = fe(i, "daemon-auth-cooldown"),
      S = fe(i, "daemon-auth-status.json");
    try {
      let c;
      if (z() && s !== void 0) {
        let P = await s.read([pe()]);
        if (!P.ok)
          throw new R(
            `v5 cooldown read failed: ${P.error.code}${"telemetryCode" in P.error && P.error.telemetryCode ? ` (${P.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown read failed"
          );
        let I = P.value.items[0];
        c = I.found ? Buffer.from(I.value).toString("utf8") : null;
      } else c = await hn().read(b);
      let E = c === null ? NaN : parseInt(c, 10);
      if (!Number.isNaN(E) && Date.now() - E < Se) {
        n("auth: browser login skipped (cooldown)");
        return;
      }
    } catch (c) {
      if (!G(c)) n(`auth: cooldown read error: ${c}`);
    }
    try {
      if ((await hn().mkdir(i), z() && s !== void 0)) {
        let c = await s.write(pe(), String(Date.now()), { publishDiscipline: "inPlace" });
        if (!c.ok)
          throw new R(
            `v5 cooldown write failed: ${c.error.code}${"telemetryCode" in c.error && c.error.telemetryCode ? ` (${c.error.telemetryCode})` : ""}`,
            "daemon-auth v5 cooldown write failed"
          );
      } else await hn().write(b, String(Date.now()));
    } catch (c) {
      n(`auth: cooldown write error: ${c}`);
    }
    try {
      let { execFileNoThrow: c } = await import("./chunk-jgwryvss.js");
      c("notify-send", ["Claude", "Your Claude assistant needs re-authentication"]);
    } catch {}
    try {
      if (z() && s !== void 0) {
        let c = await s.write(Ce(), _({ status: "auth_required", since: Date.now() }), {
          publishDiscipline: "inPlace"
        });
        if (!c.ok)
          throw new R(
            `v5 status write failed: ${c.error.code}${"telemetryCode" in c.error && c.error.telemetryCode ? ` (${c.error.telemetryCode})` : ""}`,
            "daemon-auth v5 status write failed"
          );
      } else await hn().write(S, _({ status: "auth_required", since: Date.now() }));
    } catch (c) {
      n(`auth: status write error: ${c}`);
    }
    n("auth: headless daemon cannot complete OAuth \u2014 run `claude auth login` to refresh");
  }
  function Q(e) {
    if (!Te(e)) return;
    ne(e.failedToken)
      .then((i) => {
        for (let b of T)
          try {
            let S = { type: "auth_401_result", refreshed: i, requestId: e.requestId };
            b.send(S);
          } catch {}
      })
      .catch((i) => {
        n(`auth: 401 handler error: ${i}`);
        for (let b of T)
          try {
            let S = { type: "auth_401_result", refreshed: !1, requestId: e.requestId };
            b.send(S);
          } catch {}
      });
  }
  function q(e) {
    if ((T.add(e), e.on("message", Q), k))
      try {
        let i = { type: "token_update", accessToken: k.accessToken };
        e.send(i);
      } catch {}
  }
  function ae(e) {
    (e.removeListener("message", Q), T.delete(e));
  }
  let Y = (async () => {
    if (r.aborted) return;
    try {
      let e = await W(),
        i = await e.getClaudeAIOAuthTokensAsync(h);
      if (!i?.accessToken && e.isUsing3PServices()) {
        ((A = !0), n("auth: 3P provider active, skipping OAuth refresh loop"));
        return;
      }
      if (i?.accessToken) (D(i), K(i.expiresAt ?? null));
      (await e.checkAndRefreshOAuthTokenIfNeeded({ credentials: h, storageV5: s, ...m() }),
        await H());
    } catch (e) {
      n(`auth: init error: ${e}`);
    }
  })();
  return (
    Y.then(() => {
      if (r.aborted || k || A) return;
      j();
    }),
    r.addEventListener(
      "abort",
      () => {
        if (y) (clearTimeout(y), (y = null));
        if (C) (clearInterval(C), (C = null));
      },
      { once: !0 }
    ),
    {
      ready: Y,
      getAccessToken() {
        return k?.accessToken;
      },
      getAuthSnapshot() {
        if (k && !k.organizationUuid) re(k.accessToken, !0);
        return k;
      },
      attachWorker: q,
      detachWorker: ae,
      dispose: ee,
      [Symbol.dispose]: ee
    }
  );
  function ee() {
    if (y) (clearTimeout(y), (y = null));
    if (C) (clearInterval(C), (C = null));
    for (let e of T) e.removeListener("message", Q);
    T.clear();
  }
}
function he(r, n, a) {
  if (typeof process.send === "function") {
    let k = function (A) {
        let y = m.get(A);
        if (y) (m.delete(A), y.resolve(!1));
      },
      w = r;
    process.on("message", (A) => {
      if (!ve(A)) return;
      if (A.type === "token_update") w = A.accessToken;
    });
    let m = new Map();
    return (
      process.on("message", (A) => {
        if (typeof A === "object" && A !== null && "type" in A && A.type === "auth_401_result") {
          let y = A,
            T = m.get(y.requestId);
          if (T) (clearTimeout(T.timer), m.delete(y.requestId), T.resolve(y.refreshed));
        }
      }),
      process.channel?.unref(),
      {
        getAccessToken() {
          return w;
        },
        reportAuth401(A) {
          let y = ge(),
            T = { type: "auth_401", failedToken: A, requestId: y };
          return new Promise((C) => {
            let x = setTimeout(k, 30000, y);
            (x.unref(), m.set(y, { resolve: C, timer: x }));
            try {
              process.send(T);
            } catch {
              (clearTimeout(x), m.delete(y), C(!1));
            }
          });
        }
      }
    );
  }
  let s = null;
  async function h() {
    return (s ??= await import("./chunk-8amfvyqf.js"));
  }
  return (
    h(),
    {
      getAccessToken() {
        return s?.getClaudeAIOAuthTokens()?.accessToken;
      },
      async reportAuth401(w) {
        return (await h()).handleOAuth401Error(w, n, a, { usesLoginOffFirstParty: !0 });
      }
    }
  );
}
function oe(r) {
  return typeof r === "object" && r !== null && "type" in r && r.type === "shutdown";
}
function me(r) {
  if (!oe(r) || typeof r !== "object" || r === null || !("cause" in r)) return;
  return r.cause === "upgrade" || r.cause === "reload" || r.cause === "yield" ? r.cause : void 0;
}
var le = p(() =>
    u({
      dir: o(),
      name: o().optional(),
      spawnMode: B(["same-dir", "worktree"]).default("same-dir"),
      capacity: v().int().positive().default(32),
      permissionMode: Ia(Ny, B(N0)).optional(),
      sandbox: M().optional(),
      sessionTimeoutSeconds: v().int().positive().optional(),
      createSessionOnStart: M().default(!1)
    }).strict()
  ),
  Ee = 60000,
  Pe = 500,
  ye = async (r, n, a, s, h, w) => {
    let m = le().parse(r);
    if (m.sandbox)
      (a(`The sandbox key is not supported for Remote Control. Remove it. ${Dhn}`),
        process.exit(Kj));
    let { initializeErrorLogSink: k } = await import("./chunk-2vtyv1rv.js"),
      { initializeAnalyticsSink: A } = await import("./chunk-f5tk9jgz.js");
    (k(), A());
    let y = () => Sx() ?? s.getAccessToken();
    if (!y()) (a(nzt), process.exit(1));
    let [
      { initialize1PEventLogging: T },
      { initializeGrowthBook: C, getFeatureValue_CACHED_MAY_BE_STALE: x, getUserAttributes: W },
      { flushAnalyticsSinks: F },
      { populateOAuthAccountInfoIfNeeded: U }
    ] = await Promise.all([
      import("./chunk-q3ks4p86.js"),
      import("./chunk-4m15ar7w.js"),
      import("./chunk-zbzq35bn.js"),
      import("./chunk-233jsvfw.js")
    ]);
    if (
      (T(h),
      await U(w, h).catch((e) => {
        t(
          `[daemon:remoteControl] oauthAccount backfill failed (${e instanceof Error ? e.name : typeof e})`
        );
      }),
      !W().organizationUUID)
    )
      t(
        "[daemon:remoteControl] no org identity; GrowthBook not initialized, gates serve cached/default values"
      );
    else
      C().catch((e) => {
        t(
          `[daemon:remoteControl] GrowthBook init failed (${e instanceof Error ? e.name : typeof e}); feature gates keep serving the disk cache`,
          { level: "error" }
        );
      });
    if (!cQ()) {
      let e = await Lro();
      if (e !== void 0) (a(e.reason), await F(), process.exit(e.retry ? 1 : Kj));
    }
    let { runBridgeHeadless: re, BridgeHeadlessPermanentError: V } =
        await import("./chunk-142mjqaf.js"),
      D = null,
      H = !1,
      J = (e) => {
        if (typeof process.send !== "function") return;
        try {
          process.send(e);
        } catch {}
      },
      Z = (e) => J({ type: "rc_busy", busy: e }),
      j = () => {
        if (D !== null) (clearInterval(D), (D = null));
      },
      K = (e) => {
        let i = e > 0;
        if (i !== H) ((H = i), Z(i));
        if (i) {
          if (D === null) ((D = setInterval((b) => b(!0), Ee, Z)), D.unref?.());
        } else j();
      },
      ce = x("tengu_daemon_upgrade_defer_busy", !0),
      ne = null,
      L = () => {},
      ie = new Promise((e) => {
        L = e;
      }),
      se = (e) => {
        if (oe(e)) ((ne = me(e) ?? null), L());
      };
    process.on("message", se);
    let Q = async () => (await Promise.race([ie, X(Pe)]), ne),
      q,
      ae,
      Y;
    try {
      let e = await import("./chunk-awyrhf03.js"),
        i = e.liveToolHostChecks(m.dir, w),
        b = e.liveToolHostSwitches({
          dir: m.dir,
          checks: i,
          isOfferingFolder: () => q?.getToolHostAdvert().kind === "advertise",
          hasAccessToken: () => Boolean(y())
        }),
        S,
        c = !1;
      ((q = await e.watchToolHostAdvert({
        dir: m.dir,
        log: a,
        checks: i,
        refuse: e.helperRefusal,
        onVerdict: (P) => {
          if (S !== void 0 && e.isSwitchedOffRemotely(P)) S.sweep("gate_off").catch((I) => l(N(I)));
        }
      })),
        (ae = (P) => {
          try {
            S = e.buildToolHostWorkHandler(
              {
                folder: m.dir,
                switches: b,
                ...P,
                onLiveCountChange: (I) => J({ type: "rc_serving_tools", count: I })
              },
              { unattendedGrant: void 0, withoutShellSecrets: !1 }
            );
          } catch (I) {
            l(N(I));
          }
          return S;
        }));
      let E;
      ((Y = async () => {
        if (S !== void 0) E ??= e.sweepToolHostForShutdown(S);
        await E;
      }),
        n.addEventListener("abort", () => void Y?.(), { once: !0 }));
    } catch (e) {
      l(N(e));
    }
    let ee = !1;
    try {
      await re(
        {
          dir: m.dir,
          name: m.name,
          spawnMode: m.spawnMode,
          capacity: m.capacity,
          permissionMode: m.permissionMode,
          createSessionOnStart: m.createSessionOnStart,
          getAccessToken: y,
          onAuth401: s.reportAuth401,
          log: a,
          storageV5: h,
          credentials: w,
          onBusyChange: K,
          persistActiveSessionsOnShutdown: ce,
          awaitShutdownCause: Q,
          getToolHostAdvert: q?.getToolHostAdvert,
          createToolHostHandler: ae
        },
        n
      );
    } catch (e) {
      if (!(e instanceof V)) throw e;
      (a(e.message), (ee = !0));
    } finally {
      (await Y?.(), j(), q?.stop(), process.off("message", se), await F());
    }
    if (ee) process.exit(Kj);
  };
async function Lro() {
  let [{ getBridgeBlockedCode: r }, { checkBridgeMinVersion: n }, { getUserAttributes: a }] =
    await Promise.all([
      import("./chunk-rzasmdfc.js"),
      import("./chunk-b67wfa2b.js"),
      import("./chunk-4m15ar7w.js")
    ]);
  if (!a().organizationUUID) return { reason: ke("token_scope_limited"), retry: !1 };
  let s = await r();
  if (s !== null)
    return { reason: ke(s), retry: s === "flags_unreachable" || s === "not_signed_in" };
  let h = n();
  return h === null ? void 0 : { reason: h, retry: !1 };
}
function ke(r) {
  return `Remote Control cannot start (${r}). Run \`claude remote-control\` in a terminal to see why.`;
}
async function a9t(r, n, a) {
  return fo("daemon_rc_add", async () => {
    let s = "added";
    return (
      await d9t(
        (h) => {
          let w = Nro(h.remoteControl),
            m = w.findIndex((k) => k.dir === r.dir);
          if (m >= 0) {
            let k = Ko(r, (A) => A !== void 0);
            ((w[m] = { ...w[m], ...k }), (s = "updated"));
          } else (w.push(r), (s = "added"));
          h.remoteControl = w;
        },
        n,
        a
      ),
      s
    );
  });
}
async function l9t(r, n, a) {
  return fo("daemon_rc_remove", async () => {
    await d9t(
      (s) => {
        let h = Nro(s.remoteControl),
          w = h.filter((m) => m.dir !== r);
        if (w.length === h.length) return !1;
        if (w.length === 0) delete s.remoteControl;
        else s.remoteControl = w;
      },
      n,
      a
    );
  });
}
var we = p(() => u({ intervalSeconds: v().positive().default(30) }).strict()),
  Mpe = {
    heartbeat: { schema: we, run: Oe, needsOAuth: !1 },
    scheduled: { schema: $ro, run: Yfs, needsOAuth: !0 },
    remoteControl: { schema: le, run: ye, needsOAuth: !0 }
  };
function Zlt(r) {
  return r === "heartbeat" || cQ() || (r === "remoteControl" && bms());
}
async function Oe(r, n, a, s) {
  let { intervalSeconds: h } = we().parse(r);
  a(`heartbeat worker started (interval=${h}s)`);
  while (!n.aborted) if ((await X(h * 1000, n), !n.aborted)) a("heartbeat");
}
function Ie(r, n) {
  let a = () => n.abort();
  (r.on("SIGTERM", a),
    r.on("SIGINT", a),
    r.on("message", (s) => {
      if (oe(s)) n.abort();
    }));
}
async function eki(r, n) {
  if (!r || !(r in Mpe))
    (process.stderr.write(`unknown worker kind: ${r}
`),
      process.exit(2));
  if (!Zlt(r))
    (process.stderr.write(`worker kind '${r}' is not available.
`),
      process.exit(Kj));
  let a = Mpe[r],
    s = [];
  for await (let T of process.stdin) s.push(T);
  let h;
  try {
    h = te(Buffer.concat(s).toString("utf8"));
  } catch (T) {
    (process.stderr.write(`invalid config JSON on stdin: ${d(T)}
`),
      process.exit(2));
  }
  let w = a.schema().safeParse(h.config);
  if (!w.success)
    (process.stderr.write(`config validation failed: ${w.error.message}
`),
      process.exit(2));
  let m = new AbortController();
  (Ie(process, m), Be(m));
  let k = o4(n),
    A = ZT(k),
    y = he(h.initialAccessToken, A, k);
  if (z() && k !== void 0) {
    (y6({ storageV5: k }), I5(k));
    let [
      { composePolicyLimitsClient: T, primePolicyLimitsCache: C },
      { primeFastPathCredentials: x },
      { setGrowthBookCredentials: W, setGrowthBookStorageBackend: F }
    ] = await Promise.all([
      import("./chunk-g6pqvqm7.js"),
      import("./chunk-00syj6tm.js"),
      import("./chunk-4m15ar7w.js")
    ]);
    (T({ storageV5: k, credentials: A }), W(A), F(k), await x(A), await C(k), await Uoe(k));
  }
  try {
    await a.run(
      w.data,
      m.signal,
      (T) =>
        process.stdout.write(
          T +
            `
`
        ),
      y,
      k,
      A
    );
  } catch (T) {
    if (De(T) === 429)
      (process.stdout.write(`rate limited (429): ${d(T)}
`),
        process.exit($Ne));
    if (xe(T))
      (process.stdout.write(`folder already served: ${d(T)}
`),
        process.exit($Ne));
    throw T;
  }
}
function xe(r) {
  let n = r;
  for (let a = 0; n != null && a < 8; a++) {
    if (n.errorType === rzt) return !0;
    n = n.cause;
  }
  return !1;
}
function De(r) {
  let n = r;
  for (let a = 0; n != null && a < 8; a++) {
    let s = n.status;
    if (typeof s === "number") return s;
    let h = n.response?.status;
    if (typeof h === "number") return h;
    n = n.cause;
  }
  return;
}
var He = 30000;
function Me(r) {
  try {
    return (process.kill(r, 0), !0);
  } catch {
    return !1;
  }
}
function Be(r, n) {
  let a = {
      ppid: () => process.ppid,
      isAlive: Me,
      log: (m) =>
        process.stdout.write(
          m +
            `
`
        ),
      onGone: () => process.exit(0),
      intervalMs: He,
      exitGraceMs: 2000,
      ...n
    },
    s = a.ppid();
  if (s <= 1) return;
  let h = !1,
    w = setInterval(() => {
      if (h) return;
      if (!(!a.isAlive(s) || (O() !== "windows" && a.ppid() !== s))) return;
      ((h = !0),
        clearInterval(w),
        a.log("parent supervisor gone \u2014 exiting"),
        r.abort(),
        setTimeout(a.onGone, a.exitGraceMs).unref());
    }, a.intervalMs);
  return (w.unref(), w);
}
export { Vfs, Lro, a9t, l9t, Mpe, Zlt, eki };

//# sourceMappingURL=chunk-k8kjagwj.js.map
