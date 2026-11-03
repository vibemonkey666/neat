// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qX } from "./chunk-v0wrmzez.js";
import { aF, gee, wit, Wr, gFe, Pn } from "./chunk-wrtp8qz8.js";
import { N, d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { l } from "./chunk-ewvf3tep.js";
import { HCt } from "./chunk-jazcqqqr.js";
import { t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { k$n } from "./chunk-3bmk6ayz.js";
import { DX } from "./chunk-kext8zwr.js";
import { qvt, zni, hnt, Ej, $g, gn, JU, Ut, lI } from "./chunk-ajtyjx88.js";
import { Wg } from "./chunk-d54avynm.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { An } from "./chunk-at88wjsn.js";
import { DYs } from "./chunk-bbw420pv.js";
import { uZ } from "./chunk-rj6gws00.js";
import { RKe } from "./chunk-csks5ccj.js";
import { Ohn, tKo, _Zn, Mhn } from "./chunk-w89b9cst.js";
import { gQs } from "./chunk-p27rr8yn.js";
import { Cx } from "./chunk-h2tyaevk.js";
import { l_o } from "./chunk-7dave9w0.js";
import { YGo } from "./chunk-fh50nzzj.js";
import { w } from "./chunk-7m7t89vx.js";
import { wMe, Qa, Xn, Sy, Bt } from "./chunk-j0tbz6ra.js";
import { $L } from "./chunk-6h7ejyet.js";
import { lce, Ore, $Bo, GBo, zBo } from "./chunk-d5zj5299.js";
import { ae, ZAe } from "./chunk-ar6ynjt8.js";
import { I$o } from "./chunk-1ww4jg8j.js";
import { ytt, whn } from "./chunk-gjpjdnzc.js";
import { ghe, Nne, hhe, kht } from "./chunk-fnsjs1v2.js";
import { Ovr, gks, l7t, yBe, fNn } from "./chunk-5hjs1kac.js";
import { sl } from "./chunk-1kj0zhn3.js";
import { n, BR } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { Gn } from "./chunk-61vn6n52.js";
import { ls } from "./chunk-vgsmcxaz.js";
import { Nlt } from "./chunk-1xqkrp78.js";
import { we } from "./chunk-bf8qkzmg.js";
import { APe } from "./chunk-214fx1an.js";
import { Gxt, XPn } from "./chunk-0v24azm8.js";
import { nxt } from "./chunk-vvkq8t3h.js";
import { ou } from "./chunk-dxycrgwg.js";
import { z3t } from "./chunk-3rqpqe4q.js";
import { pgs } from "./chunk-fr8850hj.js";
import { Q2, s4 } from "./chunk-6z861t7d.js";
import { Wxn } from "./chunk-t69dhb0p.js";
import { iw, IC } from "./chunk-j7vwsewt.js";
import { ft } from "./chunk-g2kc6h82.js";
import { e, r } from "./chunk-f790ajz4.js";
import { NW } from "./chunk-gbrwsgcg.js";
import { C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function Wmi() {
  $Bo(lce());
}
async function hPe(o, s, a) {
  if ((o.onChangeAPIKey(), !s))
    return { bridgeDisconnected: !1, accountSwitched: !1, relaunching: !1 };
  let u = Wr(),
    c = u !== null && u !== a.previousGatewayAuth;
  if (Ae() === "gateway") {
    let f = a.onConsentNeeded,
      m = { release: null },
      U = f ? gks(() => ((m.release ??= Ovr()), f())) : null;
    try {
      let M;
      try {
        M = await fNn(nxt, o.storageV5, o.credentials);
      } finally {
        U?.();
      }
      let D = Wr(),
        A = ce(D);
      if (c && !M.fetchSucceeded && M.failure?.errorKind === "gateway_cert_mismatch")
        return await de(o, D, Gmi(A, M.failure.gatewayPinMismatch));
      if (!M.fetchSucceeded || z3t()) {
        let B = M.fetchSucceeded ? void 0 : M.failure;
        return (await ue(o, zmi(A, B, c), (H) => Kmi(A, B, H, c)), x);
      }
      if (An()) return x;
      (Wxn("gateway"), Cx(), I$o());
    } finally {
      if (!An()) m.release?.();
    }
  } else yBe(nxt, o.storageV5, o.credentials);
  wit();
  let g = whn().catch(() => {});
  (g
    .then(() => {
      if (YGo()) l_o({ credentials: o.credentials, storageV5: o.storageV5, timeoutMs: 5000 });
    })
    .catch(() => {}),
    JU(),
    lI(),
    Nt(g, ytt, "post-login policy limits refresh")
      .catch(() => {})
      .then(() => pgs())
      .then(() => {})
      .catch((f) => l(f)));
  let { setAppState: p } = a,
    h = qX.of(o.session),
    v = () => h.credentialsPersisted(),
    O = a.previousAccount,
    E = gn(),
    b = $g(O, E),
    { replBridgeEnabled: F, replBridgeOutboundOnly: I } = o.getAppState(),
    R = O?.accountUuid !== void 0 && !b,
    _ = R && F && !I;
  if (R)
    p((f) => {
      if (!(f.replBridgeEnabled || f.replBridgeError !== void 0)) return f;
      return (
        t("[bridge:repl] Account changed via /login \u2014 disconnecting Remote Control session"),
        {
          ...f,
          replBridgeEnabled: !1,
          replBridgeExplicit: !1,
          replBridgeOutboundOnly: !1,
          replBridgeError: void 0,
          replBridgeErrorKind: void 0,
          notifications: Nlt(f.notifications, NW)
        }
      );
    });
  if ((Ore(), GBo(), gQs(E), a.setAppState(k$n), R))
    if (
      (zBo(),
      a.setAppState((f) => ({
        ...f,
        replBridgeSessionGroupingId: void 0,
        replBridgeInitialName: void 0,
        ultrareviewOverageConfirmed: !1
      })),
      DYs(),
      o.dialogStore)
    )
      o.dialogStore.dismissKind(DX.kind);
    else
      l(
        Error(
          "runPostLoginHooks: no dialog store to dismiss a pending Remote Control callout on account switch"
        )
      );
  if (b && (await Ohn()))
    (t("[trusted-device] Same account+org re-login with existing token, skipping re-enrollment"),
      await _Zn(),
      v());
  else {
    tKo();
    let f = Mhn({ credentials: o.credentials }).then(v, v);
    if (a.awaitEnrollment) await f;
  }
  let { host: G } = o.session,
    k = o.getAppState();
  if ((XPn(G), qvt(), !Pn())) Gxt(G, ae(o), p, k.fastMode);
  return (
    Wmi(),
    h.loginCompleted(),
    { bridgeDisconnected: _, accountSwitched: R, relaunching: !1 }
  );
}
var se = 16;
function J(o) {
  return `${o.slice(0, se)}\u2026`;
}
function ce(o) {
  try {
    return o ? new URL(o.url).hostname : "gateway";
  } catch {
    return o?.url ?? "gateway";
  }
}
var x = { bridgeDisconnected: !1, accountSwitched: !1, relaunching: !0 };
async function de(o, s, a) {
  for (let g = gFe(); g; g = gFe()) await g.catch(() => {});
  let u = Wr();
  if ((await zni(u && s && u.url === s.url ? u : s, o.credentials), await l7t(o.storageV5), An()))
    return { ...x, gatewayLoginError: a };
  let c = !Qa();
  if (c) await Q2(o.messages, o.storageV5);
  return (
    await Xn(0, "other", {
      finalMessage: `${a}
This session is ending so that nothing from that gateway stays half-applied. Start claude again${c ? " to continue (your conversation can be resumed)" : ""} and sign in once that is fixed.`
    }),
    { ...x, gatewayLoginError: a }
  );
}
function Gmi(o, s) {
  let a =
    s?.presentedFingerprint && s.pinnedFingerprint
      ? `TLS certificate ${J(s.presentedFingerprint)} instead of the one you trusted (${J(s.pinnedFingerprint)})`
      : "a different TLS certificate from the one you trusted";
  return `Cloud gateway sign-in was not completed: on the first request after sign-in, ${o} presented ${a}. No gateway credentials were kept. Usually this means the gateway runs several nodes behind one address that serve different certificates (they must all serve the same one), or something on the network path is intercepting TLS.`;
}
function le(o, s) {
  switch (o.errorKind) {
    case "timeout":
      return "the request timed out";
    case "network_error":
      return "couldn't connect to the gateway";
    case "http_401":
    case "api_key_not_sent":
      return s
        ? "the gateway did not accept the new credential"
        : "the gateway did not accept this session's credential";
    case "http_403":
      return "the gateway refused them for this account: Claude Code may not be enabled for your organization; contact your administrator";
    case "no_auth_available":
      return "no credential was on hand for the request";
    case "profile_credential_error":
      return "the profile credential could not authenticate the request (details with --debug)";
    case "http_4xx":
    case "http_5xx":
      return o.httpStatus === void 0
        ? "the gateway answered with an unexpected status"
        : `the gateway answered HTTP ${o.httpStatus}`;
    case "parse_error":
      return "the gateway's response was not valid managed settings";
    case "ruled_empty":
      return "no setting in the gateway's response could be applied as written";
    case "gateway_cert_mismatch":
      return "the gateway's TLS certificate did not match the one you trusted";
    case "gateway_public_address":
      return "the gateway's name resolved to a public address, so the request was not sent";
    case "gateway_pin_refused":
      return "the credentials file that keeps the gateway's TLS pin is a symlink, which is not followed";
    case "gateway_pin_unreadable":
      return "the credentials file that keeps the gateway's TLS pin could not be read (try again)";
    case "unknown_error":
      return "something unexpected went wrong (details with --debug)";
  }
}
function oe(o, s, a) {
  if (s) {
    let u = le(s, a);
    return a
      ? `Signed in to Cloud gateway ${o}, but couldn't load your organization's managed settings (${u})`
      : `Couldn't reload your organization's managed settings from Cloud gateway ${o} (${u})`;
  }
  return a
    ? `Signed in to Cloud gateway ${o}`
    : `Your organization's managed settings on Cloud gateway ${o} changed`;
}
function zmi(o, s, a, u = !Qa()) {
  let c = u ? "\u2026" : " (this conversation is not saved, so it starts fresh)\u2026",
    g = oe(o, s, a);
  return s
    ? `${g}. Restarting Claude Code to retry${c}`
    : `${g}. Restarting Claude Code to apply ${a ? "your organization's managed settings" : "them"}${c}`;
}
function Kmi(o, s, a, u, c = !Qa()) {
  return `${oe(o, s, u)}. ${s ? "Claude Code has to restart to retry" : `Claude Code has to restart to apply ${u ? "your organization's managed settings" : "them"}`}, and ${a}, so this session is ending instead. Your sign-in is saved: start claude again the same way${c ? " (add --continue to return to this conversation)" : ""}.`;
}
async function ue(o, s, a) {
  if (An()) return;
  let u = (h) => Xn(0, "other", { finalMessage: a(h) });
  if ((await Q2($L(o), o.storageV5), An())) return;
  if (Ut())
    return u(
      "a background session cannot restart itself (sign in from a session started directly with `claude`)"
    );
  let c = ae(o),
    g = Nne(c, aF());
  if (g.length > 0)
    return u(`this session has restrictions a restart can't carry over (${g.join("; ")})`);
  let p = { proactivityLevel: o.getProactivityLevel(), toolPermissionContext: c };
  try {
    await s4(
      {
        freshIfNoTranscript: !0,
        extraArgs: [...ghe(c, ZAe(o)), ...hhe(c, gee())],
        proactivity: p,
        env: { ...uZ(), ...kht(c.additionalWorkingDirectories) },
        preSpawn: () =>
          process.stdout.write(`
${s}
`)
      },
      o.storageV5
    );
  } catch (h) {
    return (l(N(h)), u(`it could not restart itself (${d(h)})`));
  }
}
function txt(o, s, a, { envTokenWasSet: u = !1, envWarningOnce: c } = {}) {
  if (a.gatewayLoginError !== void 0 || a.relaunching) return [a.gatewayLoginError];
  let g = s ? void 0 : wMe();
  if (g?.kind === "refused") return [g.notice, { display: "system" }];
  let p = s ? Vmi(o, a) : void 0,
    h = Xmi({
      envTokenWasSet: u,
      gatewayActive: Ae() === "gateway",
      willAutoQuery: p?.shouldQuery === !0
    });
  if (h === "out-of-band" && c && !c.delivered)
    ((c.delivered = !0), o.applyMessageOp({ type: "append", messages: [Bt(ccs, "notice")] }));
  return [
    Jmi(s, { bridgeDisconnected: a.bridgeDisconnected, includeEnvTokenWarning: h === "inline" }),
    p
  ];
}
function Vmi(o, s) {
  if (s.accountSwitched || s.relaunching) return;
  let a = Sy(o.messages);
  if (a?.isApiErrorMessage && a.error === "authentication_failed")
    return { display: "system", shouldQuery: !0 };
  return;
}
var re =
  "but if that variable is set in your shell profile or a Claude Code settings file, new `claude` sessions will keep using the old token until you remove it there.";
function qmi() {
  return "Signed in. Review your organization's managed settings to continue.";
}
function Ymi() {
  return i.CLAUDE_CODE_OAUTH_TOKEN
    ? `Warning: CLAUDE_CODE_OAUTH_TOKEN is set in your environment. This session will switch to your new credentials after logging in, ${re}`
    : void 0;
}
var ccs = `Note: CLAUDE_CODE_OAUTH_TOKEN was set in your environment when /login started. This session will use your new credentials, ${re}`;
function Xmi(o) {
  if (!o.envTokenWasSet || o.gatewayActive) return "none";
  return o.willAutoQuery ? "out-of-band" : "inline";
}
function Jmi(o, s) {
  if (!o) return "Login interrupted";
  let a = s.bridgeDisconnected ? `Login successful. ${RKe}` : "Login successful";
  return s.includeEnvTokenWarning
    ? `${a}

${ccs}`
    : a;
}
async function SEi(o, s) {
  if (Ae() === "firstParty" && Ej())
    return (
      o(
        `Bare mode doesn't use the sign-in from /login. It reads ANTHROPIC_API_KEY or an apiKeyHelper from --settings: set or change one and restart, or ${HCt()} to sign in.`,
        { display: "system" }
      ),
      null
    );
  let a = Ymi(),
    u = a !== void 0,
    c = gn(),
    g = c && { accountUuid: c.accountUuid, organizationUuid: c.organizationUuid },
    p = Wr(),
    h = { delivered: !1 };
  return e(mwe, {
    startingMessage: a,
    onDone: async (v, O, E) => {
      let b = !1,
        F = await hPe(s, v, {
          setAppState: E,
          previousAccount: g,
          previousGatewayAuth: p,
          onConsentNeeded: () => ((b = !0), o(qmi(), { display: "system" }), Wg())
        }),
        I = txt(s, v, F, { envTokenWasSet: u, envWarningOnce: h });
      if (b) {
        let [R] = I;
        if (R) s.applyMessageOp({ type: "append", messages: [Bt(R, "notice")] });
        return;
      }
      o(...I);
    },
    onHybridSignIn: void 0
  });
}
function mwe(o) {
  let p = w(33),
    s = ou(),
    a = Gn(),
    u = sl(),
    [c, g] = y(!1),
    h;
  if (p[0] === S) ((h = () => g(!0)), (p[0] = h));
  else h = p[0];
  let v = h,
    O = C(!1),
    E = C(null),
    [b, F] = y(!1),
    I;
  if (p[1] !== s || p[2] !== o || p[3] !== a)
    ((I = (R) => {
      if (O.current) {
        return;
      }
      if (((O.current = !0), F(!0), E.current !== null && o.onHybridSignIn)) {
        o.onHybridSignIn(E.current);
        return;
      }
      o.onDone(R, s, a);
    }),
      (p[1] = s),
      (p[2] = o),
      (p[3] = a),
      (p[4] = I));
  else I = p[4];
  let _ = I,
    G;
  if (p[5] !== c || p[6] !== _) ((G = () => _(c)), (p[5] = c), (p[6] = _), (p[7] = G));
  else G = p[7];
  let k = G,
    f;
  if (p[8] === S) ((f = { context: "Settings" }), (p[8] = f));
  else f = p[8];
  lt("confirm:no", k, f);
  let [m] = y(wMe),
    U;
  if (p[9] !== m.kind)
    ((U = () => m.kind === "any-method" && hnt() !== void 0), (p[9] = m.kind), (p[10] = U));
  else U = p[10];
  let [M] = y(U),
    { exit: D } = BR(),
    [A, B] = y(m.kind === "refused"),
    H;
  if (p[11] !== D || p[12] !== _ || p[13] !== A)
    ((H = () => {
      if (A && !O.current) {
        _(!1);
        return;
      }
      D();
    }),
      (p[11] = D),
      (p[12] = _),
      (p[13] = A),
      (p[14] = H));
  else H = p[14];
  let T = ls(H);
  const Q = (c || M) && !T.pending;
  let K;
  if (p[15] !== b || p[16] !== T.keyName || p[17] !== T.pending || p[18] !== A || p[19] !== m.kind)
    ((K = T.pending
      ? r(n, { children: ["Press ", T.keyName, " again to", " ", A && !b ? "cancel" : "exit"] })
      : e(ft, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: m.kind === "refused" ? "close" : "cancel"
        })),
      (p[15] = b),
      (p[16] = T.keyName),
      (p[17] = T.pending),
      (p[18] = A),
      (p[19] = m.kind),
      (p[20] = K));
  else K = p[20];
  let z;
  if (
    p[21] !== _ ||
    p[22] !== u ||
    p[23] !== o.onHybridSignIn ||
    p[24] !== o.startingMessage ||
    p[25] !== m.kind ||
    p[26] !== m.notice
  )
    ((z =
      m.kind === "refused"
        ? e(n, { children: m.notice })
        : e(APe, {
            onDone: () => _(!0),
            onAuthSuccess: v,
            onHybridSignIn:
              o.onHybridSignIn &&
              ((be) => {
                ((E.current = be), v());
              }),
            onFreshPickerChange: B,
            startingMessage: o.startingMessage,
            forceLoginMethod: m.kind === "claudeai-only" ? "claudeai" : void 0,
            urlOutdent: u ? IC : iw
          })),
      (p[21] = _),
      (p[22] = u),
      (p[23] = o.onHybridSignIn),
      (p[24] = o.startingMessage),
      (p[25] = m.kind),
      (p[26] = m.notice),
      (p[27] = z));
  else z = p[27];
  let ie;
  if (p[28] !== k || p[29] !== Q || p[30] !== K || p[31] !== z)
    ((ie = e(we, {
      title: "Login",
      onCancel: k,
      color: "permission",
      isCancelActive: !1,
      hideInputGuide: Q,
      inputGuide: K,
      children: z
    })),
      (p[28] = k),
      (p[29] = Q),
      (p[30] = K),
      (p[31] = z),
      (p[32] = ie));
  else ie = p[32];
  return ie;
}
export { Wmi, hPe, Gmi, zmi, Kmi, txt, Vmi, qmi, Ymi, ccs, Xmi, Jmi, SEi, mwe };

//# sourceMappingURL=chunk-7m50s6j1.js.map
