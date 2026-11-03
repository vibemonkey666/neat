// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, U, J } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { E, jq } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Oh } from "./chunk-yw4wqxm9.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import {
  uti,
  Kvt,
  E2t,
  xVr,
  pti,
  mti,
  Ox,
  fa,
  jri,
  Wri,
  kYo,
  z0e,
  lrr,
  K0e,
  drr,
  V0e,
  jt,
  k
} from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { nr, Gg, vM } from "./chunk-tcvjb2c0.js";
import { Na } from "./chunk-ddpw2j06.js";
import { OH, iAt, Cm } from "./chunk-7zgz07kc.js";
import { bbe } from "./chunk-x8k0r295.js";
import { Z } from "./chunk-p27rr8yn.js";
import { ejn, Uwo, Bwo } from "./chunk-0hcnhpx5.js";
import { M5s } from "./chunk-j9zrt0sr.js";
import { cjt, Jfn, H5s } from "./chunk-wfjw07k3.js";
var we = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/,
  Oe = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function Ae(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let a = r.trim().toLowerCase();
    if (a === "") continue;
    let l = a.split(".");
    if (a.length > 253 || !l.every((y) => we.test(y)) || l.every((y) => Oe.test(y))) return;
    n ??= a;
  }
  return n;
}
function Q(e) {
  if (OH(e) !== void 0) return !0;
  return (
    jq(e, (n) => {
      let r = E(n);
      return r === "ECONNREFUSED" || r === "ConnectionRefused" || (r !== void 0 && bbe.has(r));
    }) !== void 0
  );
}
class ee {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new iAt(e.proxyUrl, { ca: e.gatewayCa });
      ((n.options = { ...n.options, ca: e.gatewayCa }), (this.builtFor = e), (this.agent = n));
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    ((this.warnedMalformed = e),
      t("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", {
        level: "warn"
      }));
  }
}
var Pe = new W(() => new ee());
function te() {
  if (!nr()) return;
  let e = i.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let n = Pe.of(U().host),
    r = Ae(e);
  if (r === void 0) {
    n.warnMalformedOnce(e);
    return;
  }
  let a = M5s();
  if (a === void 0 || Cm() !== void 0) return;
  return { host: r, agent: n.agentFor(a) };
}
var Y = 60,
  ke = 180,
  xe = 32768,
  ve = 1048576,
  ne = 262144,
  Me = 1.25,
  re = { "Content-Encoding": "gzip", "Content-Type": "application/json" };
function eCr(e) {
  if (e === void 0 || e <= 0) return Y;
  return Math.min(ke, Y + Math.floor(e / xe));
}
function Le(e, n) {
  return n * eCr(e) <= e * Y;
}
async function De({ url: e, body: n, storageV5: r }) {
  let a = _(n),
    l = a.length,
    y = cjt(e, a, r, "frame_publish");
  if (y === void 0) return { gzipped: null, encoding: void 0, jsonChars: l };
  let d = Buffer.byteLength(a),
    S = (R) => ({
      gzipped: null,
      jsonChars: l,
      encoding: { json_bytes: d, wire_bytes: d, body_gzip: !1, gzip_skip: R }
    });
  if (!y.gzip) return S(y.reason);
  let u = eCr(d) / Y;
  if (d >= ve) {
    let R = a.slice(0, ne),
      O = Buffer.byteLength(R) / (await jri(R)).length;
    if (O * Me < u)
      return (
        t(
          `[artifact] publish body sent uncompressed: its first ${ne} characters compress only ${O.toFixed(2)}x, and a body of ${d} bytes needs ${u.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`
        ),
        S("deadline_ratio")
      );
  }
  let s = await Wri(a);
  if (!Le(d, s.length))
    return (
      t(
        `[artifact] publish body sent uncompressed: gzip only got ${d} bytes down to ${s.length}, too little to finish inside the server's 60-second read limit for a compressed upload`
      ),
      S("deadline_ratio")
    );
  return {
    gzipped: s,
    jsonChars: l,
    encoding: { json_bytes: d, wire_bytes: s.length, body_gzip: !0 }
  };
}
function Be(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return !1;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
function Ce(e) {
  if (!e.ok)
    return {
      status: 0,
      header: () => {
        return;
      },
      bodyText: async () => ""
    };
  return {
    status: e.status,
    header: (n) => {
      let r = e.response?.headers?.[n];
      return typeof r === "string" ? r : void 0;
    },
    bodyText: async () => (typeof e.data === "string" ? e.data : e.data === void 0 ? "" : _(e.data))
  };
}
async function oe({ url: e, body: n, storageV5: r, signal: a, send: l, onEncoding: y }) {
  if (!Be(n)) return l(null);
  let { gzipped: d, encoding: S, jsonChars: u } = await De({ url: e, body: n, storageV5: r });
  if (S !== void 0) y?.(S);
  if (d === null || S === void 0) return l(null);
  Jfn("frame_publish");
  let s = await l(d);
  return H5s({
    answer: s,
    facts: Ce,
    resendIdentity: () => (
      y?.({
        json_bytes: S.json_bytes,
        wire_bytes: S.json_bytes,
        body_gzip: !1,
        gzip_fallback_status: s.ok ? s.status : 0
      }),
      l(null)
    ),
    aborted: () => a?.aborted === !0,
    bodyChars: u,
    storageV5: r,
    rollout: "frame_publish"
  });
}
function O9e(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
var Ue = "x-ccr-relay-upstream",
  Ne = "x-ccr-sandbox-egress",
  Ye = new Set(["disabled", "restricted", "unrestricted"]);
function Oxs(e) {
  if (!e.ok || e.route !== "relay" || !_3(e)) return;
  let n = e.response.headers?.[Ne];
  return typeof n === "string" && Ye.has(n) ? n : void 0;
}
var fK = "forbidden: CCR agent tokens";
function SJ(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function Mxs(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var Ie = new Set([401, 403, 404, 413]),
  ze = new Set([
    "organization network policy denies artifact storage reads for this session",
    "organization network policy could not be determined for this session; artifact storage reads denied"
  ]);
var je = new Set([
  "organization network policy denies artifact storage writes for this session",
  "organization network policy could not be determined for this session; artifact storage writes denied"
]);
function ae(e) {
  if (!e.ok || _3(e) || e.status !== 403 || typeof e.data !== "string") return !1;
  let n = e.data.trim();
  return ze.has(n) || (RN() && je.has(n));
}
var We = "relay approval required: this change was not approved by the person for this session";
function se(e) {
  return e.ok && !_3(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === We;
}
var He = new Set([
    "organization network policy denies artifact reads for this session",
    "organization network policy could not be determined for this session"
  ]),
  zft =
    "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function Kft(e, n) {
  return (
    e === 403 &&
    n !== void 0 &&
    n.byteLength <= 256 &&
    He.has(Buffer.from(n).toString("utf8").trim())
  );
}
var I = 300000,
  $e = 15000,
  Ve = 65536,
  de = new WeakSet(),
  fe = new WeakMap(),
  Xe = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;
function qe(e) {
  if (!e) return e;
  return Ko(e, (n, r) => Xe.test(r));
}
var tCr = b("boot"),
  pK = b("blobs"),
  Vtn = b("comments"),
  H1n = b("subscriptions"),
  ce = b("types"),
  ye = b("type_files"),
  L1n = b("type_create"),
  pe = b("db"),
  gwo = b("sharing"),
  me = b("publish"),
  ge = b("frames_external"),
  Ke = new Set([Vtn, H1n, tCr, ge, ce, ye, L1n, pe, me, pK, ...[]]),
  Ze = "tengu_cobalt_plinth_burnet",
  Je = [
    ...w(tCr, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]),
    ...w(ge, ["GET /frames/external"]),
    ...w(me, [
      "POST /deploy/direct",
      "POST /deploy/prepare",
      "POST /upload",
      "GET /contract/latest",
      "GET /contract/{v}",
      "GET /contract/{v}/{file}",
      "GET /contract/{v}/prompt",
      "GET /read/{slug}"
    ]),
    ...w(Vtn, [
      "GET /comments/{slug}",
      "POST /comments/{slug}/{thread}",
      "POST /comments/{slug}/{thread}/resolve",
      "POST /comments/{slug}/{thread}/summon-status"
    ]),
    ...w(pe, ["POST /db/agent"]),
    ...w(ce, ["GET /types", "GET /types/{slug}"]),
    ...w(L1n, ["POST /types/{slug}/create"]),
    ...w(b("type_instances"), ["GET /types/{slug}/instances"]),
    ...w(ye, [
      "GET /types/{slug}/files/{a}",
      "GET /types/{slug}/files/{a}/{b}",
      "GET /types/{slug}/files/{a}/{b}/{c}",
      "GET /types/{slug}/files/{a}/{b}/{c}/{d}",
      "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"
    ]),
    ...w(H1n, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]),
    ...w(b("delete"), ["DELETE /{slug}"]),
    ...w(gwo, ["GET /perm/{slug}", "PATCH /perm/{slug}"]),
    ...w(b("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]),
    ...[]
  ].sort((e, n) => ie(e) - ie(n));
function w(e, n) {
  return n.map((r) => {
    let [a, l] = r.split(" ");
    return { method: a, pattern: l.split("/"), family: e };
  });
}
function ie(e) {
  return F(e.pattern, (n) => n.startsWith("{"));
}
function FHt(e, n) {
  let r = n
    .slice(10)
    .replace(/[?#].*$/s, "")
    .split("/");
  return (
    Je.find(
      (l) =>
        l.method === e &&
        l.pattern.length === r.length &&
        l.pattern.every((y, d) => (y.startsWith("{") ? r[d] !== "" : y === r[d]))
    )?.family ?? null
  );
}
var hwo = "tengu_cobalt_plinth_madder";
function Ute() {
  if (!vM()) return !1;
  if (z0e() !== void 0) return !1;
  if (!k("tengu_cobalt_plinth_sorrel", !0)) return !1;
  if (!nr() && !k(hwo, !0)) return !1;
  return uti();
}
function RN() {
  return J();
}
function _D(e = null) {
  return Ute() && !Re(e);
}
function Re(e) {
  if (!Kvt() && !_e()) return !1;
  if (e !== null && BHt(e)) return !1;
  let n = Z().frameRelay;
  if (!n.botContextNoted)
    ((n.botContextNoted = !0),
      f("artifact_frame_relay", "bot_context_not_served", { hosted: nr() }));
  return !0;
}
function Bte() {
  return nr() && Ute();
}
var Qe = "tengu_cobalt_plinth_medlar";
function _e() {
  return Gg() && k(Qe, !1) && xVr();
}
function UHt() {
  if (nr()) return Kvt() && E2t();
  return _e();
}
function M9e() {
  return vM() && k("tengu_cobalt_plinth_fennel", !1) && UHt();
}
var et = "tengu_cobalt_plinth_comfrey";
function N1n() {
  return Gg() && k(et, !1) && M9e();
}
function BHt(e) {
  return Ke.has(e) && nr() && k(Ze, !1) && pti();
}
function m1(e) {
  return (Z().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function jte(e, n = !1) {
  let r = Z().frameRelay,
    a = Date.now() + I;
  if ((r.declinedUntil.set(e, a), n)) r.hopFailedUntil.set(e, a);
  else r.hopFailedUntil.delete(e);
}
function ywo(e) {
  return (Z().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function nCr(e) {
  return (Z().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function Jae(e) {
  let n = Z().frameRelay;
  (n.declinedUntil.delete(e), n.servedUntil.set(e, Date.now() + I), n.vouched.add(e));
}
function D9e(e) {
  return Z().frameRelay.vouched.has(e);
}
function _wo(e) {
  Z().frameRelay.vouched.delete(e);
}
function tt(e) {
  return (Z().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}
function $1n(e) {
  return e.ok && e.status === 403 && bwo(e.data);
}
function bwo(e) {
  return typeof e === "string" && e.trimStart().startsWith(fK);
}
function le(e, n) {
  if (!n.ok) return;
  let { directRefusedUntil: r } = Z().frameRelay;
  if ($1n(n)) r.set(e, Date.now() + I);
  else r.delete(e);
}
function Vft(e) {
  if (Bte() || !(e === 401 || e === 403 || e === 404)) return !1;
  if (D9e(Ox)) {
    if (e !== 404) _wo(Ox);
    return !1;
  }
  return (jte(Ox), !0);
}
function ROe(e) {
  if (Bte() || D9e(Ox)) return;
  if (e === void 0 || e === 499) jte(Ox, !0);
}
var be = () => !0;
function z(e, n, r) {
  (Z().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + I),
    f("artifact_frame_relay", "tunnel_declined", { family: e, cause: c(n), status: r }));
}
var Te = new WeakSet();
function ue(e) {
  return typeof e === "object" && e !== null && Te.has(e);
}
async function rCr(e, n, r, a, l) {
  let d = (Z().frameRelay.tunnelDeclinedUntil.get(l) ?? 0) > Date.now() ? void 0 : te();
  if (d !== void 0) {
    let u = 0;
    try {
      let s = await B(e, n, r, {
        ...a,
        host: "frame",
        auth: "session-jwt",
        frameTunnel: d,
        maxRedirects: 0
      });
      if (!s.ok || _3(s)) return { res: s, tunnelled: !0 };
      if (((u = s.status), u >= 500 || u === 499))
        return (z(l, "hop_failed", u), { res: s, tunnelled: !0 });
    } catch (s) {
      if (Na(s)) throw s;
      if (!Q(s)) {
        if ((z(l, "threw", 0), typeof s === "object" && s !== null)) Te.add(s);
        throw s;
      }
    }
    z(l, u === 0 ? "never_opened" : "refused", u);
  }
  return {
    res: await B(e, mti(n), r, { ...a, host: "ccr-gateway", auth: "session-jwt", maxRedirects: 0 }),
    tunnelled: !1
  };
}
function B(e, n, r, a) {
  switch (e) {
    case "GET":
      return jt.get(n, a);
    case "POST":
      return jt.post(n, r, a);
    case "PATCH":
      return jt.patch(n, r, a);
    case "DELETE":
      return jt.delete(n, r, a);
  }
}
async function nt(e, n) {
  let r = "answered";
  try {
    let a = await e();
    if (a !== null) return { ...a, mcpWire: r };
    return ((r = "stood_aside"), { ...(await n()), mcpWire: r });
  } catch (a) {
    if (typeof a === "object" && a !== null) fe.set(a, r);
    throw a;
  }
}
function Se(e, n, r, a, l = !0) {
  if (RN()) throw Error("frameApi: this session may not make the direct call");
  let { recoverOAuth401: y, gzipBody: d, httpOnly: S, ...u } = a,
    s = {
      ...u,
      host: "frame",
      auth: "claude-ai-oauth",
      maxRedirects: 0,
      validateStatus: be,
      ...(y && !i.CLAUDE_CODE_REMOTE && !i.CLAUDE_CODE_REMOTE_SESSION_ID && { recoverOAuth401: y })
    },
    R = l && !S ? Uwo(e, n) : null;
  if (R)
    return nt(
      () => Bwo(R, n, r, s, d?.onEncoding),
      () => Se(e, n, r, a, !1)
    );
  let { streamUpload: O } = u;
  return ejn({
    isRead: e === "GET",
    wire: "http",
    signal: u.signal,
    timeoutMs: s.timeout ?? kYo,
    send: (L, x) => {
      let A = { ...s, ...(L && { freshConnection: L }), ...(x !== void 0 && { timeout: x }) };
      if (e !== "POST" || d === void 0 || O === void 0) return B(e, n, r, A);
      return oe({
        url: `${lrr()}${n}`,
        body: r,
        storageV5: u.storageV5,
        signal: u.signal,
        onEncoding: d.onEncoding,
        send: (p) =>
          p === null
            ? B(e, n, r, A)
            : B(e, n, p, {
                ...A,
                headers: { ...A.headers, ...re },
                streamUpload: { ...O, tailFloorMs: () => d.tailFloorMs }
              })
      });
    }
  });
}
function rt() {
  return z0e() !== void 0 ? i.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function oCr() {
  let e = rt();
  if (e) return K0e(`Bearer ${e}`);
  return drr();
}
async function Dxs(e) {
  if (!V0e()) return;
  try {
    await fa({ credentials: e });
  } catch {}
}
function _3(e) {
  return e.ok && e.response.headers?.[Ue] !== void 0;
}
function j(e) {
  return e.ok && !_3(e) && Ie.has(e.status);
}
function Swo(e) {
  return { refused: j(e), vouched: _3(e) || (e.ok && e.status < 300) };
}
function qtn() {
  return Ute() && !nr();
}
function he(e, n, r, a = !1) {
  let l = r !== "fallback",
    y = r === "strict" && vM(),
    d = RN(),
    S = Ute(),
    u = S ? FHt(e, n) : null;
  if (S && Re(u))
    return d || y || (r === "only" && nr())
      ? { leg: "not-served", relaying: !1, family: null }
      : { leg: "direct", relaying: !1, family: null };
  let s = S;
  if (u === null)
    return { leg: d || y || (l && nr() && s) ? "unsent" : "direct", relaying: s, family: u };
  let R = (r === "fallback" || (r === "bound" && !Ee(u))) && !(a && nr() && tt(u));
  if (!d && m1(u) && (R || (!nr() && !y && ywo(u))))
    return { leg: "direct", relaying: s, family: u };
  return { leg: "relay", relaying: !0, family: u };
}
function Ee(e) {
  return RN() || (nr() && (e === null || !BHt(e)));
}
function ot(e, n) {
  switch (e) {
    case "strict":
      return vM();
    case "only":
      return nr();
    case "bound":
      return Ee(n);
    case "fallback":
      return !1;
  }
}
function F1n(e, n, r = "fallback") {
  return RN() || he(e, n, r).leg === "relay" ? "relay" : "direct";
}
async function P(e, n, r, a, l = "fallback") {
  let y = RN() || ot(l, FHt(e, n)),
    { relayProbe: d, relayOnCredentialRefusal: S, ...u } = a,
    s = async () => ({ ...(await Se(e, n, r, u)), route: "direct", fromFrame: !0 }),
    R = he(e, n, l, S),
    O = R.relaying && !nr(),
    L = (o, h) =>
      l === "fallback"
        ? {
            ok: !1,
            reason: "no-auth",
            detail: `its artifact connection did not carry the request${h ? ` (HTTP ${h})` : ""}, so nothing was sent${o === "relay-unavailable" ? "; one retry is safe" : ""}`,
            route: "relay",
            fromFrame: !1
          }
        : { ok: !1, reason: o, status: h, route: "relay", fromFrame: !1 },
    x = (o, h) => (
      f("artifact_frame_relay", "relay_only_unavailable", {
        ...(R.family !== null && { family: R.family }),
        status: o,
        probed: h,
        ...(O && { runner: !0 })
      }),
      L("relay-unavailable", o)
    );
  if (R.leg === "not-served") return L("relay-not-served", 0);
  if (R.leg === "unsent") return x(0, !1);
  let A, p;
  if (R.leg === "relay") p = R.family;
  else {
    let o = await s();
    if (R.family === null || !nr()) return o;
    if ((le(R.family, o), !o.ok || !$1n(o))) return o;
    if (
      (f("artifact_frame_relay", "direct_refused", {
        family: R.family,
        status: o.status,
        reoffered: S === !0
      }),
      !S)
    )
      return o;
    ((p = R.family), (A = o));
  }
  let C = !1,
    v = () => ({
      ...(O && { runner: !0 }),
      ...(C && { tunnel: !0 }),
      ...(A !== void 0 && { reoffered: !0 })
    }),
    G = async () => {
      if (A !== void 0) return A;
      let o = await s();
      if (!O) {
        if ((le(p, o), o.ok && $1n(o)))
          f("artifact_frame_relay", "direct_refused", {
            family: p,
            status: o.status,
            reoffered: !1
          });
      }
      return o;
    },
    {
      refreshOAuth: at,
      isBackground: st,
      credentials: it,
      recoverOAuth401: lt,
      gzipBody: ut,
      httpOnly: dt,
      ...H
    } = u,
    V = async (o, h, D, M) => {
      let K = await rCr(o, h, D, { ...M, headers: qe(M.headers), validateStatus: be }, p);
      return ((C = K.tunnelled), K.res);
    },
    N = async (o, h) => {
      if ((jte(p, o === 0 || o >= 500), y)) return x(o, h);
      let D;
      try {
        let M = await G();
        return ((D = M.ok ? M.status : void 0), { ...M, gatewayDeclined: o });
      } finally {
        f("artifact_frame_relay", "relay_unavailable", {
          family: p,
          status: o,
          probed: h,
          ...(D !== void 0 && { direct_status: D }),
          ...v()
        });
      }
    };
  if (d !== void 0 && !nCr(p)) {
    let o;
    try {
      o = await V("GET", d, void 0, { signal: H.signal, timeout: $e, maxContentLength: Ve });
    } catch (h) {
      if (Na(h)) throw h;
      return ((C = ue(h)), N(0, !0));
    }
    if (!o.ok) return y ? x(0, !0) : G();
    if (ae(o))
      f("artifact_frame_relay", "relay_policy_refused", {
        family: p,
        status: o.status,
        probed: !0,
        ...v()
      });
    else if (j(o) || (!_3(o) && (o.status >= 500 || o.status === 499))) return N(o.status, !0);
    else if (!_3(o) && o.status >= 300) return y ? x(o.status, !0) : G();
    Jae(p);
  }
  let T;
  try {
    T = await V(e, n, r, H);
  } catch (o) {
    if (!Na(o)) {
      if (((C = ue(o)), OH(o) !== void 0)) return N(0, !1);
      if (
        (jte(p, !0),
        m("artifact_frame_relay", "request_error", { family: p, ...v() }),
        typeof o === "object" && o !== null)
      )
        de.add(o);
    }
    throw o;
  }
  if (!T.ok) return y ? x(0, !1) : G();
  if (ae(T) || se(T)) {
    let o = se(T);
    return (
      Jae(p),
      f("artifact_frame_relay", o ? "relay_approval_refused" : "relay_policy_refused", {
        family: p,
        status: T.status,
        ...v()
      }),
      { ...T, route: "relay", fromFrame: !1, gatewayPolicy: o ? "unapproved" : "network-off" }
    );
  }
  if (j(T)) return N(T.status, !1);
  let X = _3(T),
    q = X || T.status < 300;
  if (q) (Jae(p), g("artifact_frame_relay", { family: p, status: T.status, upstream: X, ...v() }));
  else if (T.status >= 500 || T.status === 499) {
    let o = l !== "fallback" && T.status === 503 ? T.response.headers?.["retry-after"] : void 0,
      h = Oh(typeof o === "string" ? o : void 0);
    if (h !== void 0)
      return (
        f("artifact_frame_relay", "relay_busy", {
          family: p,
          status: T.status,
          retry_after_ms: h,
          ...v()
        }),
        { ...T, route: "relay", fromFrame: !1, gatewayRetryAfterMs: h }
      );
    (jte(p, !0), m("artifact_frame_relay", "relay_error", { family: p, status: T.status, ...v() }));
  } else f("artifact_frame_relay", "relay_refused", { family: p, status: T.status, ...v() });
  return { ...T, route: "relay", fromFrame: q };
}
function qR(e) {
  return typeof e === "object" && e !== null && de.has(e);
}
function Fe(e) {
  switch (e) {
    case "answered":
      return b("mcp");
    case "stood_aside":
      return b("http_fallback");
    case void 0:
      return b("http");
  }
}
function Qae(e) {
  return e.route === "relay" ? b("relay") : Fe(e.mcpWire);
}
function $me(e) {
  if (qR(e)) return b("relay");
  return Fe(typeof e === "object" && e !== null ? fe.get(e) : void 0);
}
var du = {
  get(e, n) {
    return P("GET", e, void 0, n);
  },
  post(e, n, r) {
    return P("POST", e, n, r);
  },
  postRelayOnly(e, n, r) {
    return P("POST", e, n, r, "only");
  },
  postRelayStrict(e, n, r) {
    return P("POST", e, n, r, "strict");
  },
  getRelayOnly(e, n) {
    return P("GET", e, void 0, n, "only");
  },
  postRelayBound(e, n, r) {
    return P("POST", e, n, r, "bound");
  },
  getRelayBound(e, n) {
    return P("GET", e, void 0, n, "bound");
  },
  patchRelayOnly(e, n, r) {
    return P("PATCH", e, n, r, "only");
  },
  deleteRelayOnly(e, n) {
    return P("DELETE", e, void 0, n, "only");
  }
};
export {
  eCr,
  O9e,
  Oxs,
  fK,
  SJ,
  Mxs,
  zft,
  Kft,
  tCr,
  pK,
  Vtn,
  H1n,
  L1n,
  gwo,
  FHt,
  hwo,
  Ute,
  RN,
  _D,
  Bte,
  UHt,
  M9e,
  N1n,
  BHt,
  m1,
  jte,
  ywo,
  nCr,
  Jae,
  D9e,
  _wo,
  $1n,
  bwo,
  Vft,
  ROe,
  rCr,
  oCr,
  Dxs,
  _3,
  Swo,
  qtn,
  F1n,
  qR,
  Qae,
  $me,
  du
};

//# sourceMappingURL=chunk-1vdj04pp.js.map
