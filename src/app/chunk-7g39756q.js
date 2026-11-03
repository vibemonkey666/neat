import {
  fileURLToPath as __filePath_b9404fc1667d8bc7,
  URL as __filePath_b9404fc1667d8bc7_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { So, HI, X_ } from "./chunk-wrtp8qz8.js";
import { i, _C } from "./chunk-cj37hmns.js";
import { tr, Pt } from "./chunk-xe386mry.js";
import { I0 } from "./chunk-znkwh1rm.js";
import { pe } from "./chunk-7c3thgax.js";
import { Ae } from "./chunk-dvghjmtr.js";
import { O$, Ut, kp } from "./chunk-ajtyjx88.js";
import { w } from "./chunk-7m7t89vx.js";
import { sl } from "./chunk-1kj0zhn3.js";
import { Pr } from "./chunk-rf7g1m78.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { QB } from "./chunk-3b0cphjr.js";
import { ha } from "./chunk-cqrqqt4t.js";
import { Mct } from "./chunk-jtzfpbna.js";
import { Jr } from "./chunk-en1bapsd.js";
import { Zf, TPe } from "./chunk-dgmaqhd1.js";
import { K } from "./chunk-61vn6n52.js";
import { kwe } from "./chunk-dxycrgwg.js";
import { zN } from "./chunk-j0tbz6ra.js";
import { Xln } from "./chunk-6h7ejyet.js";
import { gDe, zBs } from "./chunk-fnsjs1v2.js";
import { KDe } from "./chunk-7f6g2yy3.js";
import { Oyr } from "./chunk-k4sr74rj.js";
import {
  Y5e,
  uus,
  fus,
  pus,
  mus,
  gus,
  hus,
  yus,
  _us,
  bus,
  Sus,
  wus,
  vus,
  X5e,
  wPn,
  vPn,
  Eus
} from "./chunk-4a46xy3v.js";
import { oK } from "./chunk-j559gbrr.js";
import { mt } from "./chunk-18g32wet.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { ro, Yr, P, ee, y, j } from "./chunk-bq35vvkw.js";
import { l5 } from "./chunk-pfc5159p.js";
import { Zii, Nkt, XSn, JSn } from "./chunk-hk0dvhmb.js";
import { S } from "./chunk-a2y39866.js";
j();
function Mto(o, t, a) {
  if (Ae() !== "firstParty" || !O$() || !KDe()) return;
  let l = oK.of(o);
  return { current: () => l.peek(t, a), settled: l.read(t, a) };
}
function V(o) {
  switch (o) {
    case "connected":
      return [{ label: "Cloud sessions", value: "GitHub connected" }];
    case "not_connected":
      return [{ label: "Cloud sessions", value: "Not set up \xB7 /web-setup to connect GitHub" }];
    case "unknown":
    case void 0:
      return [];
  }
}
function He(A) {
  return A.mainLoopModel;
}
function $e(O) {
  return O.mcp;
}
function Be(B) {
  return B.toolPermissionContext.mode;
}
function We(W) {
  return W.id;
}
function Ue(Ke) {
  return So(Ke).cwd;
}
function Ve(qe) {
  return qe.length > 0;
}
function Ye(ze, U) {
  return [
    U > 0 && r(Zf.Row, { children: [e(Q, { children: " " }), e(Q, { children: "" })] }, `gap-${U}`),
    ...ze.map((o, Fe) => {
      let { label: de, value: Je } = o;
      return r(
        Zf.Row,
        { children: [e(Q, { children: de !== void 0 ? `${de}:` : "" }), e(k, { value: Je })] },
        `${U}-${Fe}`
      );
    })
  ];
}
function Xe(C, p) {
  return r(
    s,
    {
      flexDirection: "row",
      gap: 1,
      paddingX: 1,
      children: [
        e(mt, { status: "warning" }),
        typeof C === "string" ? e(n, { wrap: "wrap", children: C }) : C
      ]
    },
    p
  );
}
var Dto = " (details in the --debug log)";
function imr({ sessionId: o, cwd: t, accountStatus: a, machineStatus: l, webSetupStatus: c }) {
  let d = i.CLAUDE_CODE_TMUX_SESSION,
    u = gDe(),
    C = zBs(),
    p = tr()?.sessionId,
    g = zN(o) ?? e(n, { dimColor: !0, children: "/rename to add a name" }),
    h = X_(),
    m = "";
  if (h.length > 0) {
    let M = h
        .map((v) =>
          v.kind === "plugin" ? `plugin:${v.name}@${v.marketplace}` : `server:${v.name}`
        )
        .join(", "),
      f =
        Ae() !== "firstParty"
          ? "not available on third-party providers"
          : !QB()
            ? "not currently available"
            : Mct(pe("policySettings"))
              ? "blocked by org policy"
              : void 0;
    m = f ? `Configured but not active (${f}): ${M}` : `Listening for messages from ${M}`;
  }
  return [
    {
      label: "Version",
      value: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_b9404fc1667d8bc7(new __filePath_b9404fc1667d8bc7_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}${l5()}`
    },
    ...[],
    { label: "Session name", value: g },
    { label: p === o ? "Cloud session ID" : "Session ID", value: o },
    ...(p !== void 0 && p !== o ? [{ label: "Cloud session ID", value: p }] : []),
    {
      label: "Session kind",
      value: !Ut()
        ? "interactive"
        : kp()
          ? "background job \xB7 unattended"
          : "background job \xB7 attached"
    },
    ...(d ? [{ label: "tmux session", value: d }] : []),
    ...(m ? [{ label: "Channels", value: m }] : []),
    ...(ha() && _C.CLAUDE_CODE_MESSAGING_SOCKET
      ? [{ label: "Peer address", value: `uds:${_C.CLAUDE_CODE_MESSAGING_SOCKET}` }]
      : []),
    ...(ha() && !_C.CLAUDE_CODE_MESSAGING_SOCKET && Oyr() !== void 0
      ? [{ label: "Peer address", value: `unavailable \u2014 ${Oyr()}${Dto}` }]
      : []),
    ...(HI()
      ? [
          {
            label: "Memory",
            value: Xln()
              ? "Paused for this session \xB7 /pause-memory to resume"
              : "Paused for this session \xB7 see /account-memory"
          }
        ]
      : []),
    ...[],
    { label: "cwd", value: t },
    ...wPn(a),
    ...V(c),
    ...Se(),
    ...vPn()
  ];
}
function Se() {
  let o = I0();
  if (o.length === 0) return [];
  return [
    { label: "Organization configuration", value: JSn(o).map((t) => (XSn(t) ? Zii(t) : t)) },
    ...(o.includes("hipaa") ? [{ value: e(n, { dimColor: !0, children: Nkt }) }] : [])
  ];
}
function amr({ mainLoopModel: o, mcp: t, theme: a, ideInstallationStatus: l, permissionMode: c }) {
  return [
    { label: "Model", value: Eus(o) },
    ...pus(),
    ...(Pt() ? [] : [...mus(t.clients, l, a), ...gus(t.clients, a), ...fus(), ...uus()]),
    ...yus(),
    ..._us(c),
    ...bus()
  ];
}
async function Hto(o, t, a) {
  return (await Promise.all([Sus(), vus(t), wus(t), Pt() ? [] : hus(o, t, a)])).flat();
}
function k(o) {
  let a = w(8),
    { value: t } = o;
  if (Array.isArray(t)) {
    let l;
    if (a[0] !== t) {
      let c;
      if (a[2] !== t.length)
        ((c = (d, u) => r(n, { children: [d, u < t.length - 1 ? "," : ""] }, u)),
          (a[2] = t.length),
          (a[3] = c));
      else c = a[3];
      l = t.map(c);
      ((a[0] = t), (a[1] = l));
    } else l = a[1];
    let c;
    if (a[4] !== l)
      ((c = e(s, { flexWrap: "wrap", columnGap: 1, flexShrink: 99, children: l })),
        (a[4] = l),
        (a[5] = c));
    else c = a[5];
    return c;
  }
  if (typeof t === "string") {
    let l;
    if (a[6] !== t) ((l = e(n, { children: t })), (a[6] = t), (a[7] = l));
    else l = a[7];
    return l;
  }
  return t;
}
function lmr(o) {
  let u = w(26),
    {
      credentials: t,
      ideInstallationStatus: a,
      diagnosticsPromise: l,
      getWebSetupRead: c,
      getMachineStatusRead: d
    } = o,
    C;
  if (u[0] !== t) ((C = () => X5e(t)), (u[0] = t), (u[1] = C));
  else C = u[1];
  let [p] = y(C),
    E;
  if (u[2] !== d) ((E = () => d()), (u[2] = d), (u[3] = E));
  else E = u[3];
  let [g] = y(E),
    h;
  if (u[4] !== c) ((h = () => c()), (u[4] = c), (u[5] = h));
  else h = u[5];
  let [m] = y(h),
    M;
  if (u[6] !== m) ((M = () => m?.current()), (u[6] = m), (u[7] = M));
  else M = u[7];
  let [f, v] = y(M),
    D,
    T;
  if (u[8] !== m)
    ((D = () => {
      let x = !0;
      return (
        m?.settled.then(() => {
          if (x) v(m.current());
        }),
        () => {
          x = !1;
        }
      );
    }),
      (T = [m]),
      (u[8] = m),
      (u[9] = D),
      (u[10] = T));
  else ((D = u[9]), (T = u[10]));
  P(D, T);
  let b = sl() ? 1 : void 0,
    I;
  if (u[11] !== p || u[12] !== a || u[13] !== g || u[14] !== f)
    ((I = e(ro, {
      fallback: null,
      children: e(G, {
        ideInstallationStatus: a,
        accountStatusRead: p,
        machineStatusRead: g,
        webSetupStatus: f
      })
    })),
      (u[11] = p),
      (u[12] = a),
      (u[13] = g),
      (u[14] = f),
      (u[15] = I));
  else I = u[15];
  let A;
  if (u[16] !== l)
    ((A = e(ro, { fallback: null, children: e(H, { promise: l }) })), (u[16] = l), (u[17] = A));
  else A = u[17];
  let O;
  if (u[18] !== b || u[19] !== I || u[20] !== A)
    ((O = r(s, { flexDirection: "column", gap: 1, flexGrow: b, children: [I, A] })),
      (u[18] = b),
      (u[19] = I),
      (u[20] = A),
      (u[21] = O));
  else O = u[21];
  let B;
  if (u[22] === S)
    ((B = e(n, {
      dimColor: !0,
      children: e(ft, {
        action: "confirm:no",
        context: "Settings",
        fallback: "Esc",
        description: "cancel"
      })
    })),
      (u[22] = B));
  else B = u[22];
  let W;
  if (u[23] !== b || u[24] !== O)
    ((W = r(s, { flexDirection: "column", gap: 1, flexGrow: b, children: [O, B] })),
      (u[23] = b),
      (u[24] = O),
      (u[25] = W));
  else W = u[25];
  return W;
}
function G(o) {
  let f = w(17),
    { ideInstallationStatus: t, accountStatusRead: a, machineStatusRead: l, webSetupStatus: c } = o,
    d = a === void 0 ? void 0 : Yr(a),
    u = l === void 0 ? void 0 : Yr(l),
    C = K(He),
    p = kwe() ?? C,
    E = K($e),
    g = K(Be),
    [h] = Pr(),
    m = Jr(We),
    M = TPe(Jr(Ue)),
    v;
  if (
    f[0] !== d ||
    f[1] !== M ||
    f[2] !== t ||
    f[3] !== u ||
    f[4] !== p ||
    f[5] !== E ||
    f[6] !== g ||
    f[7] !== m ||
    f[8] !== h ||
    f[9] !== c
  )
    ((v = Y5e([
      imr({ sessionId: m, cwd: M, accountStatus: d, machineStatus: u, webSetupStatus: c }),
      amr({ mainLoopModel: p, mcp: E, theme: h, ideInstallationStatus: t, permissionMode: g })
    ])),
      (f[0] = d),
      (f[1] = M),
      (f[2] = t),
      (f[3] = u),
      (f[4] = p),
      (f[5] = E),
      (f[6] = g),
      (f[7] = m),
      (f[8] = h),
      (f[9] = c),
      (f[10] = v));
  else v = f[10];
  let D = v,
    T;
  if (f[11] === S)
    ((T =
      Pt() &&
      r(n, {
        dimColor: !0,
        children: [
          "Model and cwd are the",
          " ",
          tr()?.sessionId ? "cloud" : "remote",
          " session's; the other rows describe this terminal. /mcp asks the session too."
        ]
      })),
      (f[11] = T));
  else T = f[11];
  let x;
  if (f[12] === S) ((x = [{ bold: !0 }, { width: "fill" }]), (f[12] = x));
  else x = f[12];
  let b;
  if (f[13] !== D) ((b = D.filter(Ve).flatMap(Ye)), (f[13] = D), (f[14] = b));
  else b = f[14];
  let I;
  if (f[15] !== b)
    ((I = r(s, {
      flexDirection: "column",
      gap: 1,
      children: [T, e(Zf, { columns: x, children: b })]
    })),
      (f[15] = b),
      (f[16] = I));
  else I = f[16];
  return I;
}
function H(o) {
  let l = w(5),
    { promise: t } = o,
    a = Yr(t);
  if (a.length === 0) {
    return null;
  }
  let c;
  if (l[0] === S) ((c = e(n, { bold: !0, children: "System diagnostics" })), (l[0] = c));
  else c = l[0];
  let d;
  if (l[1] !== a) ((d = a.map(Xe)), (l[1] = a), (l[2] = d));
  else d = l[2];
  let u;
  if (l[3] !== d)
    ((u = r(s, { flexDirection: "column", paddingBottom: 1, children: [c, d] })),
      (l[3] = d),
      (l[4] = u));
  else u = l[4];
  return u;
}
export { Mto, Dto, imr, amr, Hto, lmr };

//# sourceMappingURL=chunk-7g39756q.js.map
