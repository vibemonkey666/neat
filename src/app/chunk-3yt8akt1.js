// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Vt } from "./chunk-fs43t96t.js";
import { yZ } from "./chunk-znkwh1rm.js";
import { _, Vo, Vkn, t } from "./chunk-4kxznmzw.js";
import { b6 } from "./chunk-a16y5hcz.js";
import { Z0, bC, Xl, xm, Tq, l } from "./chunk-ewvf3tep.js";
import { _r } from "./chunk-pgnjjhxv.js";
import { vxe, im } from "./chunk-t0wrcf3t.js";
import { own } from "./chunk-1g9x3zw8.js";
import {
  QE,
  ENe,
  WYr,
  l3o,
  xVt,
  d3o,
  Akt,
  RSn,
  c3o,
  xSn,
  PSn,
  PVt,
  Ckt,
  Rkt,
  f3o,
  ISn,
  IVt,
  OVt,
  OSn
} from "./chunk-r1dvrqha.js";
import { C7, on, Sp, Xc } from "./chunk-cr7a2cdd.js";
import { MBt } from "./chunk-dggktcda.js";
import { hg, la, _lr, cfi, ufi } from "./chunk-8fp2d2p3.js";
var he = "allow_usage_transcript_scan",
  Me = "allow_skill_doctor_transcript_scan",
  be = "allow_stats_transcript_scan",
  Oe = {
    policy: he,
    hipaaReason:
      "Not shown under your organization's policy: this breakdown is built by scanning the session transcripts saved on this machine."
  },
  Ae = {
    policy: Me,
    hipaaReason:
      "Not shown under your organization's policy: measured by scanning the session transcripts saved on this machine."
  },
  ke = {
    policy: be,
    hipaaReason:
      "Not shown under your organization's policy: these stats are built by scanning the session transcripts saved on this machine."
  };
function v(e) {
  if (on(e.policy)) return { allowed: !0 };
  if (Xc(e.policy) === "org_denied" && yZ().includes("hipaa"))
    return { allowed: !1, reason: e.hipaaReason };
  let { featureLabel: n, verb: o } = C7(e.policy);
  return { allowed: !1, reason: Sp(e.policy, n, o) ?? `${n} ${o} unavailable right now.` };
}
function xve() {
  return v(Oe);
}
function o7t() {
  return v(Ae);
}
function lNn() {
  return v(ke);
}
import { readdir as G, stat as we } from "fs/promises";
import { extname as J, join as P, sep as F } from "path";
var rks = 2.5;
function z() {
  return {
    lastRequest: void 0,
    lastContext: 0,
    carriedTokens: 0,
    firstPromptBytes: 0,
    startTokens: 0,
    pendingToolResultBytes: 0,
    largeToolResultTokens: 0
  };
}
function U(e, n) {
  if (e.lastRequest === void 0) e.firstPromptBytes += n;
}
function s7t(e) {
  return e / 2.5 > 1e4;
}
function V(e, n) {
  if (s7t(n)) e.pendingToolResultBytes += n;
}
function Q(e, n) {
  let o = n.cached + n.cacheCreate + n.uncached;
  if (n.uuid === e.lastRequest) e.carriedTokens = Math.max(e.carriedTokens, o + n.output);
  else {
    if (e.lastRequest === void 0) e.startTokens = o - Math.round(e.firstPromptBytes / 2.5);
    else if (o < e.lastContext)
      e.largeToolResultTokens = Math.max(0, e.largeToolResultTokens - (e.lastContext - o));
    else {
      let s = Math.min(o - e.carriedTokens, e.pendingToolResultBytes / 2.5);
      if (s > 1e4) e.largeToolResultTokens += s;
    }
    ((e.startTokens = Math.min(e.startTokens, o)),
      (e.lastRequest = n.uuid),
      (e.lastContext = o),
      (e.carriedTokens = o + n.output),
      (e.pendingToolResultBytes = 0));
  }
  ((n.largeToolResultTokens = e.largeToolResultTokens),
    (n.alwaysOnTokens = !n.isSubagent && e.startTokens > 40000 ? e.startTokens : 0));
}
var B = 4,
  ce = 4194304,
  Le = ce,
  ae = 604800000,
  xe = 1e5,
  Ne = 150000,
  Ie = 3,
  De = 0.5,
  Pe = 300000,
  Be = 4,
  ve = 8,
  Ue = `${F}subagents${F}${MBt}${F}`,
  p = new TextEncoder(),
  Evr = p.encode('"type":"assistant"'),
  Fe = p.encode('"usage":{'),
  ue = p.encode('"timestamp":"'),
  He = p.encode('"sessionId":"'),
  Ke = p.encode('"model":"'),
  Ge = p.encode('"requestId":"'),
  kvr = p.encode('"id":"'),
  qe = p.encode("msg_"),
  le = p.encode('"uuid":"'),
  We = p.encode('"input_tokens":'),
  $e = p.encode('"output_tokens":'),
  Ye = p.encode('"cache_creation_input_tokens":'),
  je = p.encode('"cache_read_input_tokens":'),
  Xe = p.encode('"isSidechain":true'),
  ze = p.encode('"isSidechain": true'),
  Ve = p.encode('"effort":"max"'),
  Qe = p.encode('"attribution'),
  Je = p.encode('"attributionAgent":"'),
  Ze = p.encode('"attributionSkill":"'),
  et = p.encode('"attributionPlugin":"'),
  tt = p.encode('"attributionMcpServer":"'),
  rmo = p.encode('"type":"user"'),
  H = p.encode('"isMeta":true'),
  nt = p.encode('"subtype":"scheduled_task_fire"'),
  ot = p.encode('"taskId":"'),
  K = p.encode('"scheduledTaskId":"'),
  st = p.encode('"scheduledFireId":"'),
  omo = p.encode('"type":"tool_result"'),
  smo = p.encode('"toolUseResult":'),
  rt = p.encode('"turnCompanion":true'),
  it = p.encode(`"text":"${QE.slice(0, -1)}`),
  Z = p.encode('"content":"['),
  ct = p.encode(" prior /loop wakeup"),
  at = p.encode('"isCompactSummary":true'),
  ut = p.encode('"type":"attachment"'),
  lt = p.encode('"attachment":{"type":"file"'),
  dt = p.encode('"type":"queued_command"'),
  pt = p.encode('"origin":{'),
  ft = p.encode('"origin":{"kind":"human"'),
  mt = p.encode('"promptSource":"'),
  Tt = p.encode('"type":"system"'),
  _t = p.encode('"subtype":"local_command"'),
  k = (e) => [p.encode(`"content":"<${e}>`), p.encode(`"text":"<${e}>`)],
  ee = [...k("command-message"), ...k("command-name")],
  St = k(Tq),
  te = [...k(Xl), ...k(xm)],
  Rt = [...k(Z0), ...k(bC)],
  A = (e, n, o) => n.some((s) => Eh(e, s, 0, o) >= 0),
  gt = [p.encode(`"content":${_(ENe).slice(0, -1)}`), p.encode(`"text":${_(ENe).slice(0, -1)}`)],
  de = (e, n = !1) => {
    let o = n ? _(e) : _(e).slice(0, -1);
    return [p.encode(`"content":${o}`), p.encode(`"text":${o}`)];
  },
  Et = [...l3o.map((e) => `${e}${WYr}`), xVt, d3o, Akt, own, OSn]
    .filter((e) => e.length > 0)
    .flatMap((e) => de(e)),
  Ct = [RSn, c3o, xSn, PSn, PVt, Ckt, Rkt, ISn, f3o, IVt, OVt].flatMap((e) => de(e, !0)),
  yt = p.encode('"cron":"'),
  ht = p.encode('"prompt":"'),
  Mt = p.encode('"taskKind":"loop"'),
  bt = p.encode('"content":"'),
  Ot = p.encode('"text":"'),
  x = 34,
  pe = 92,
  At = 123,
  ne = 125,
  kt = 91,
  wt = 93,
  q = 48,
  fe = 57;
function Eh(e, n, o, s) {
  let r = e.subarray(o, s).indexOf(n);
  return r < 0 ? -1 : o + r;
}
function rK(e, n, o, s) {
  let r = Eh(e, n, o, s);
  if (r < 0) return;
  let i = r + n.length,
    c = i;
  while (c < s && e[c] !== x) c++;
  return e.toString("utf8", i, c);
}
function tMt(e, n, o, s, r) {
  let i = Eh(e, n, o, s);
  if (i < 0) return;
  let c = i + n.length,
    d = c,
    T = Math.min(s, c + r);
  while (d < T && e[d] !== x) {
    if (e[d] === pe) d++;
    d++;
  }
  let a = d >= T;
  if (d > T) d = T - 1;
  if (a) d = Lt(e, c, d);
  let u = e.toString("utf8", c, d);
  if (a) u = u.replace(/(^|[^\\])((?:\\\\)*)\\u[0-9a-fA-F]{0,3}$/, "$1$2");
  try {
    let S = Vo(`"${u}"`);
    return typeof S === "string" ? S : void 0;
  } catch {
    return;
  }
}
function Lt(e, n, o) {
  let s = o;
  while (s > n && (e[s - 1] & 192) === 128) s--;
  if (s === n) return n;
  let r = e[s - 1],
    i = r >= 240 ? 4 : r >= 224 ? 3 : r >= 192 ? 2 : 1;
  return o - (s - 1) < i ? s - 1 : o;
}
function xt(e, n, o) {
  let s = n;
  while (!0) {
    if (((s = Eh(e, kvr, s, o)), s < 0)) return;
    let r = s + kvr.length;
    if (Eh(e, qe, r, r + 4) === r) {
      let i = r;
      while (i < o && e[i] !== x) i++;
      return e.toString("utf8", r, i);
    }
    s = r;
  }
}
function N(e, n, o, s) {
  let r = Eh(e, n, o, s);
  if (r < 0) return 0;
  let i = r + n.length,
    c = 0;
  while (i < s && e[i] >= q && e[i] <= fe) ((c = c * 10 + (e[i] - q)), i++);
  return c;
}
function Nt(e) {
  if (!e) return 3;
  let n = e.toLowerCase();
  if (n.includes("fable")) return 10;
  if (n.includes("opus")) return 5;
  if (n.includes("haiku")) return 1;
  return 3;
}
function imo(e) {
  return (e.cached + e.uncached * 10 + e.cacheCreate * 12.5 + e.output * 50) * e.modelTier;
}
async function oks(e, n) {
  let o = Date.now() - ae,
    s = Date.now() - 86400000,
    r = oe(),
    i = oe();
  return (
    await me(
      o,
      (c) => {
        if ((re(i, c), c.ts >= s)) re(r, c, s);
      },
      e,
      (c) => {
        if ((se(i, c), c.ts >= s)) se(r, c);
      },
      n
    ),
    { day: ie(r), week: ie(i) }
  );
}
async function me(e, n, o, s, r) {
  if (o) return It(o, e, n, s, r);
  let i = im(),
    c;
  try {
    c = await G(i);
  } catch (u) {
    if (Vt(u)) return;
    throw u;
  }
  let T = (await Promise.all(c.map((u) => Ut(P(i, u))))).flat(),
    a = Te(n, s);
  for (let u = 0; u < T.length; u += B) {
    let S = T.slice(u, u + B),
      R = S.map(() => r && Ee(r()));
    (await Promise.all(S.map((E, w) => Ft(E, e, R[w])))).forEach((E, w) => {
      (a(E), R[w]?.end(E));
    });
  }
}
function Te(e, n) {
  let o = new Set(),
    s = (r) => {
      if (!r) return !0;
      if (o.has(r)) return !1;
      return (o.add(r), !0);
    };
  return (r) => {
    for (let i of r.records) if (s(i.uuid)) e(i);
    if (n) {
      for (let i of r.fires) if (s(i.uuid)) n(i);
    }
  };
}
async function It(e, n, o, s, r) {
  let i = [],
    c = _lr(),
    d = await la(
      (R) =>
        e.listEntries(
          { namespace: "transcript" },
          { skipScopeStats: !0, ...(R !== void 0 && { cursor: R }) }
        ),
      (R) => {
        for (let b of R) {
          let E = vxe(b, _r);
          if (E !== void 0) i.push(E);
        }
      },
      { budget: c }
    );
  Y("project", d, c);
  let a = (await Promise.all(i.map((R) => Dt(e, R, n, c)))).flat(),
    u = Te(o, s);
  for (let R = 0; R < a.length; R += B) {
    let b = a.slice(R, R + B),
      E = b.map(() => r && Ee(r()));
    (await Promise.all(b.map((L, f) => Pt(e, L, n, E[f])))).forEach((L, f) => {
      (u(L), E[f]?.end(L));
    });
  }
  let S = ufi(c);
  if (S > 0)
    t(
      `foldRecentRecords: ${S} more v5 listings were cut short after the scan's ${hg}-page budget ran out`
    );
}
async function Dt(e, n, o, s) {
  let r = [],
    i = [],
    c = await la(
      (u) =>
        e.listEntries(
          { namespace: "transcript", projectKey: n },
          { skipScopeStats: !0, ...(u !== void 0 && { cursor: u }) }
        ),
      (u) => {
        for (let S of u)
          if (S.kind === "key") Se(r, S);
          else if (
            S.scope.namespace === "transcript" &&
            S.scope.sessionId !== void 0 &&
            _r(S.scope.sessionId)
          )
            i.push(S.scope.sessionId);
      },
      { budget: s }
    );
  Y("session", c, s);
  let d = new Map();
  for (let u of r)
    if (u.key.namespace === "transcript" && u.key.agentId === void 0 && u.key.journal !== !0)
      d.set(u.key.sessionId, u.mtimeMs);
  let T = i.filter((u) => (d.get(u) ?? 1 / 0) >= o),
    a = await Promise.all(T.map((u) => _e(e, n, u, s)));
  return r.concat(a.flat());
}
async function _e(e, n, o, s, r) {
  let i = [],
    c = [],
    d = await la(
      (a) =>
        e.listEntries(
          {
            namespace: "transcript",
            projectKey: n,
            sessionId: o,
            ...(r !== void 0 && { agentRelPath: r })
          },
          { skipScopeStats: !0, ...(a !== void 0 && { cursor: a }) }
        ),
      (a) => {
        for (let u of a)
          if (u.kind === "key") {
            if (
              u.key.namespace === "transcript" &&
              (u.key.agentId !== void 0 || u.key.journal === !0)
            )
              Se(i, u);
          } else if (
            u.scope.namespace === "transcript" &&
            u.scope.agentRelPath !== void 0 &&
            u.scope.agentRelPath.length > (r?.length ?? 0)
          )
            c.push(u.scope.agentRelPath);
      },
      { budget: s }
    );
  Y("subagent", d, s);
  let T = await Promise.all(c.map((a) => _e(e, n, o, s, a)));
  return i.concat(T.flat());
}
function Y(e, n, o) {
  let s = cfi(n, o);
  if (n.status === "error") t(`foldRecentRecords: v5 ${e} listing failed: ${n.error.code}`);
  else if (s === "first-truncation")
    t(
      `foldRecentRecords: v5 ${e} listing cut short (the scan's ${hg}-page budget is spent); keeping what was listed`
    );
}
function Se(e, n) {
  if (
    n.kind === "key" &&
    n.key.namespace === "transcript" &&
    n.size !== void 0 &&
    n.mtimeMs !== void 0
  )
    e.push({ key: n.key, size: n.size, mtimeMs: n.mtimeMs });
}
async function Pt(e, n, o, s) {
  let r = Re();
  if (n.mtimeMs >= o)
    await Bt(
      e,
      n,
      ge(r, o, n.key.namespace === "transcript" && n.key.agentRelPath?.[0] === MBt, s)
    );
  return r;
}
async function Bt(e, n, o) {
  let { key: s } = n,
    r = n.size <= ce,
    i = 0,
    c = [],
    d = 0;
  while (!0) {
    let T = await e.read([r ? s : { key: s, offset: i, length: Le }]);
    if (!T.ok) {
      t(`readRecordsFromStream: v5 read failed: ${T.error.code}`);
      return;
    }
    let a = T.value.items[0];
    if (!a.found) return;
    let u = Buffer.from(a.value.buffer, a.value.byteOffset, a.value.byteLength),
      S = 0;
    while (S < u.length) {
      let R = u.indexOf(10, S);
      if (R === -1) {
        (c.push(Buffer.from(u.subarray(S))), (d += u.length - S));
        break;
      }
      if (d === 0) o(u.subarray(S, R));
      else (o(Buffer.concat([...c, u.subarray(S, R)], d + (R - S))), (c = []), (d = 0));
      S = R + 1;
    }
    if (((i += a.value.byteLength), r || a.value.byteLength === 0 || i >= a.totalBytes)) break;
  }
  if (d > 0) o(c.length === 1 ? c[0] : Buffer.concat(c, d));
}
function vt(e, n) {
  if (!n.attributionSkill) return;
  e.set(
    n.attributionSkill,
    (e.get(n.attributionSkill) ?? 0) + n.cached + n.cacheCreate + n.uncached + n.output
  );
}
async function sks(e) {
  let n = Date.now() - ae,
    o = new Map();
  return (await me(n, (s) => vt(o, s), e), o);
}
async function Ut(e) {
  let n;
  try {
    n = await G(e, { withFileTypes: !0 });
  } catch (i) {
    if (Vt(i)) return [];
    throw i;
  }
  let o = [],
    s = [];
  for (let i of n)
    if (i.isFile() && J(i.name) === ".jsonl") o.push(P(e, i.name));
    else if (i.isDirectory()) s.push(i.name);
  let r = await Promise.all(
    s.map(async (i) => {
      let c = P(e, i, "subagents");
      try {
        return (await G(c, { recursive: !0 })).filter((T) => J(T) === ".jsonl").map((T) => P(c, T));
      } catch (d) {
        if (Vt(d)) return [];
        throw d;
      }
    })
  );
  for (let i of r) for (let c of i) o.push(c);
  return o;
}
async function Ft(e, n, o) {
  let s = Re();
  return (await Ht(e, n, ge(s, n, e.includes(Ue), o)), s);
}
async function Ht(e, n, o) {
  let s;
  try {
    s = await we(e);
  } catch (r) {
    if (Vt(r)) return;
    throw r;
  }
  if (!s.isFile() || s.mtimeMs < n) return;
  try {
    for await (let r of Vkn(e)) o(r);
  } catch (r) {
    if (Vt(r)) return;
    throw r;
  }
}
function Re() {
  return { records: [], fires: [] };
}
function ge(e, n, o, s) {
  let r = Gt(e, n, o);
  if (!s) return r;
  return (i) => {
    (r(i), s.line(i, e));
  };
}
function Ee(e) {
  let n = !0,
    o = (s) => {
      if (!n) return;
      try {
        s();
      } catch (r) {
        ((n = !1), l(r));
      }
    };
  return { line: (s, r) => o(() => e.line(s, r)), end: (s) => o(() => e.end(s)) };
}
var Kt = /<command-name>([^<]{1,200})<\/command-name>/,
  j = 200,
  W = 6 * j;
function Gt(e, n, o) {
  let s = 0,
    r = [],
    i = [],
    c = 0,
    d = z(),
    T = !0,
    a,
    u = () => {
      (s++, (i = []), (c = 0), (T = !1));
    },
    S = () => {
      (s++, (i = []), (c = 0), (T = !0), (E = void 0), (a = void 0));
    },
    R = () => {
      if (!a) return;
      if (((c = Math.max(0, c - 1)), a.run)) (e.fires.pop(), i.pop());
      if (a.fire && a.fire.taskId === void 0) r.unshift(a.fire);
      a = void 0;
    },
    b = () => {
      if (a?.isCommandRecord) (R(), S());
    },
    E,
    w = (f, m) => {
      let g = rK(f, st, 0, m);
      if (g !== void 0) {
        let C = r.findIndex((y) => y.uuid === g);
        return C < 0 ? void 0 : r.splice(C, 1)[0];
      }
      let h = rK(f, K, 0, m);
      if (h !== void 0) {
        let C = r.findLastIndex((O) => O.taskId === h);
        if (C < 0) return;
        let y = r[C];
        return ((r = r.filter((O) => O.taskId !== h)), y);
      }
      if (!(Eh(f, pt, 0, m) < 0 && (Eh(f, H, 0, m) >= 0 || A(f, ee, m)))) {
        r = r.filter((C) => C.taskId !== void 0);
        return;
      }
      if (r[0]?.taskId === void 0) return r.shift();
      return;
    },
    L = (f, m) =>
      Eh(f, H, 0, m) >= 0 &&
      (Et.some((g) => Eh(f, g, 0, m) >= 0) || Ct.some((g) => Eh(f, g, 0, m) >= 0));
  return (f) => {
    let m = f.length;
    if (Eh(f, Evr, 0, m) >= 0) {
      let g = jt(f, 0, m, o);
      if (((T = !0), (a = void 0), g)) Q(d, g);
      if (g && g.ts >= n) {
        if (c > 1 && i.length > 0) {
          let h = 1 / c;
          g.loopShares = i.map((M) => ({ ...M, share: h }));
        } else if (i[0]) ((g.loop = i[0].loop), (g.loopFireTs = i[0].fireTs));
        e.records.push(g);
      }
      return;
    }
    if (Eh(f, rmo, 0, m) >= 0) {
      let g = Eh(f, omo, 0, m);
      if (g < 0) U(d, m);
      else if (s7t(m - g)) {
        let X = Eh(f, smo, g, m);
        V(d, (X < 0 ? m : X) - g);
      }
      if (
        g >= 0 ||
        Eh(f, rt, 0, m) >= 0 ||
        Eh(f, at, 0, m) >= 0 ||
        A(f, Rt, m) ||
        qt(f, m) ||
        L(f, m)
      )
        return;
      if (Eh(f, it, 0, m) >= 0) {
        S();
        return;
      }
      let h = Eh(f, H, 0, m) >= 0;
      if (h && A(f, gt, m)) {
        if ((R(), c === 0)) S();
        return;
      }
      if (A(f, te, m)) {
        b();
        return;
      }
      let M = A(f, ee, m);
      if (A(f, St, m) || (h && !M && Eh(f, mt, 0, m) < 0 && Eh(f, K, 0, m) < 0)) return;
      let C = Eh(f, ft, 0, m) >= 0 || (!h && !M && Eh(f, K, 0, m) < 0),
        y = w(f, m);
      if (y?.openBatch === s && !T && c > 0) S();
      if (T || C) u();
      if ((c++, (a = { fire: y, run: !1, isCommandRecord: M }), !y)) {
        E = void 0;
        return;
      }
      let O = y.loop ?? Yt(f, m);
      if (!O) return;
      if (!O.isDynamic) E = void 0;
      if (y.ts < n) return;
      (e.fires.push({ ts: y.ts, uuid: y.uuid, loop: O }),
        i.push({ loop: O, fireTs: y.ts }),
        (a.run = !0));
      return;
    }
    if (d.lastRequest === void 0 && Eh(f, lt, 0, m) >= 0) {
      U(d, m);
      return;
    }
    if (Eh(f, Tt, 0, m) >= 0 && Eh(f, _t, 0, m) >= 0 && A(f, te, m)) {
      b();
      return;
    }
    if (Eh(f, ut, 0, m) >= 0 && Eh(f, dt, 0, m) >= 0) {
      S();
      return;
    }
    if (Eh(f, nt, 0, m) >= 0) {
      let g = rK(f, ue, 0, m),
        h = g ? Date.parse(g) : NaN;
      if (Number.isNaN(h)) return;
      let M = tMt(f, ht, 0, m, W),
        C = M ? b6(M, j) : void 0,
        y = Eh(f, Mt, 0, m) >= 0;
      if (C && y) ((E ??= C), (C = E));
      r.push({
        ts: h,
        openBatch: c > 0 && !T ? s : void 0,
        uuid: rK(f, le, 0, m) ?? "",
        taskId: rK(f, ot, 0, m),
        loop: C ? { prompt: C, cron: $t(tMt(f, yt, 0, m, Wt)), isDynamic: y } : null
      });
    }
  };
}
function qt(e, n) {
  let o = Eh(e, Z, 0, n);
  if (o < 0) return !1;
  let s = o + Z.length,
    r = s;
  while (s < n && e[s] >= q && e[s] <= fe) s++;
  return s > r && Eh(e, ct, s, n) === s;
}
var Ce = 64,
  Wt = 6 * Ce;
function $t(e) {
  return e === void 0 ? void 0 : b6(e, Ce);
}
function Yt(e, n) {
  let o = tMt(e, bt, 0, n, W) ?? tMt(e, Ot, 0, n, W);
  if (!o) return null;
  let s = o.match(Kt)?.[1],
    r = b6(s ?? o, j);
  return r ? { prompt: r, cron: void 0, isDynamic: !1 } : null;
}
function jt(e, n, o, s) {
  if (Eh(e, Evr, n, o) < 0) return;
  if (Eh(e, Fe, n, o) < 0) return;
  let r = rK(e, ue, n, o),
    i = rK(e, He, n, o);
  if (!r || !i) return;
  let c = Date.parse(r);
  if (Number.isNaN(c)) return;
  let d = N(e, We, n, o),
    T = N(e, $e, n, o),
    a = N(e, Ye, n, o),
    u = N(e, je, n, o);
  if (d + T + a + u === 0) return;
  let S = Eh(e, Qe, n, o) >= 0,
    R = rK(e, Ke, n, o);
  return {
    ts: c,
    sessionId: i,
    cached: u,
    cacheCreate: a,
    uncached: d,
    output: T,
    isSubagent: Eh(e, Xe, n, o) >= 0 || Eh(e, ze, n, o) >= 0,
    isMaxEffort: Xt(e.subarray(n, o), Ve),
    isWorkflow: s,
    alwaysOnTokens: 0,
    largeToolResultTokens: 0,
    modelTier: Nt(R),
    model: R,
    uuid: rK(e, Ge, n, o) ?? xt(e, n, o) ?? rK(e, le, n, o) ?? "",
    ...(S && {
      attributionAgent: rK(e, Je, n, o),
      attributionSkill: rK(e, Ze, n, o),
      attributionPlugin: rK(e, et, n, o),
      attributionMcpServer: rK(e, tt, n, o)
    })
  };
}
function Xt(e, n) {
  let o = e.lastIndexOf(ne);
  for (let s = e.lastIndexOf(n); s >= 0; s = s === 0 ? -1 : e.lastIndexOf(n, s - 1)) {
    let r = 1,
      i = !1,
      c = s + n.length;
    for (; c < e.length && r > 0; c++) {
      let d = e[c];
      if (i) {
        if (d === pe) c++;
        else if (d === x) i = !1;
      } else if (d === x) i = !0;
      else if (d === At || d === kt) r++;
      else if (d === ne || d === wt) r--;
    }
    if (r === 0 && c - 1 === o) return !0;
  }
  return !1;
}
function oe() {
  return {
    totalCost: 0,
    requestCount: 0,
    cacheMissCost: 0,
    cacheMissCount: 0,
    longCtxCost: 0,
    longCtxCount: 0,
    maxEffortCost: 0,
    maxEffortCount: 0,
    workflowCost: 0,
    workflowCount: 0,
    alwaysOnCost: 0,
    alwaysOnCount: 0,
    largeToolResultCost: 0,
    largeToolResultCount: 0,
    sessions: new Map(),
    buckets: new Map(),
    byAgent: new Map(),
    bySkill: new Map(),
    byPlugin: new Map(),
    byMcpServer: new Map(),
    loops: new Map()
  };
}
function ye(e, n) {
  let o = e.loops.get(n.prompt);
  if (!o)
    ((o = {
      prompt: n.prompt,
      cron: n.cron,
      isDynamic: n.isDynamic,
      runs: 0,
      tokens: 0,
      lastRunMs: 0
    }),
      e.loops.set(n.prompt, o));
  return o;
}
function se(e, n) {
  let o = ye(e, n.loop);
  if ((o.runs++, n.ts >= o.lastRunMs))
    ((o.lastRunMs = n.ts), (o.cron = n.loop.cron ?? o.cron), (o.isDynamic = n.loop.isDynamic));
}
function I(e, n, o) {
  if (n) e.set(n, (e.get(n) ?? 0) + o);
}
function re(e, n, o = -1 / 0) {
  let s = imo(n);
  if (((e.totalCost += s), e.requestCount++, n.attributionAgent))
    I(e.byAgent, n.attributionSkill ?? n.attributionAgent, s);
  else I(e.bySkill, n.attributionSkill, s);
  if (
    (I(e.byPlugin, n.attributionPlugin, s),
    I(e.byMcpServer, n.attributionMcpServer, s),
    n.loop || n.loopShares)
  ) {
    let a = n.cached + n.cacheCreate + n.uncached + n.output;
    for (let { loop: u, fireTs: S, share: R } of n.loopShares ?? [
      { loop: n.loop, fireTs: n.loopFireTs ?? n.ts, share: 1 }
    ])
      if (S >= o) ye(e, u).tokens += a * R;
  }
  let r = n.cached + n.cacheCreate + n.uncached;
  if (n.uncached > xe) ((e.cacheMissCost += s), e.cacheMissCount++);
  if (r > Ne) ((e.longCtxCost += s), e.longCtxCount++);
  if (n.isMaxEffort) ((e.maxEffortCost += s), e.maxEffortCount++);
  if (n.isWorkflow) ((e.workflowCost += s), e.workflowCount++);
  let i = s - n.output * 50 * n.modelTier;
  if (n.alwaysOnTokens > 0)
    ((e.alwaysOnCost += i * Math.min(1, n.alwaysOnTokens / r)), e.alwaysOnCount++);
  if (n.largeToolResultTokens > 0)
    ((e.largeToolResultCost += i * Math.min(1, n.largeToolResultTokens / r)),
      e.largeToolResultCount++);
  let c = e.sessions.get(n.sessionId);
  if (!c)
    ((c = { cost: 0, requests: 0, subCost: 0, subCount: 0, hours: new Set() }),
      e.sessions.set(n.sessionId, c));
  if (((c.cost += s), c.requests++, n.isSubagent)) ((c.subCost += s), c.subCount++);
  c.hours.add(Math.floor(n.ts / 3600000));
  let d = Math.floor(n.ts / Pe),
    T = e.buckets.get(d);
  if (!T) ((T = { sids: new Set(), cost: 0, count: 0 }), e.buckets.set(d, T));
  (T.sids.add(n.sessionId), (T.cost += s), T.count++);
}
function ie(e) {
  let n = 0,
    o = 0,
    s = 0;
  for (let a of e.buckets.values())
    if (((s = Math.max(s, a.sids.size)), a.sids.size >= Be)) ((n += a.cost), (o += a.count));
  let r = 0,
    i = 0,
    c = 0,
    d = 0;
  for (let a of e.sessions.values()) {
    if (a.subCount >= Ie || (a.cost > 0 && a.subCost / a.cost > De)) ((r += a.cost), i++);
    if (a.hours.size >= ve) ((c += a.cost), d++);
  }
  let T = [
    { key: "cache_miss", cost: e.cacheMissCost, count: e.cacheMissCount },
    { key: "long_context", cost: e.longCtxCost, count: e.longCtxCount },
    { key: "subagent_heavy", cost: r, count: i },
    { key: "high_parallel", cost: n, count: o },
    { key: "cron", cost: c, count: d },
    { key: "max_effort", cost: e.maxEffortCost, count: e.maxEffortCount },
    { key: "workflow", cost: e.workflowCost, count: e.workflowCount },
    { key: "always_on_context", cost: e.alwaysOnCost, count: e.alwaysOnCount },
    { key: "large_tool_results", cost: e.largeToolResultCost, count: e.largeToolResultCount }
  ];
  return (
    T.sort((a, u) => u.cost - a.cost),
    {
      totalCost: e.totalCost,
      requestCount: e.requestCount,
      sessionCount: e.sessions.size,
      behaviors: T,
      agents: D(e.byAgent, e.totalCost),
      skills: D(e.bySkill, e.totalCost),
      plugins: D(e.byPlugin, e.totalCost),
      mcpServers: D(e.byMcpServer, e.totalCost),
      loops: [...e.loops.values()]
        .map((a) => ({ ...a, tokens: Math.round(a.tokens) }))
        .sort((a, u) => u.tokens - a.tokens),
      peakParallel: s
    }
  );
}
function D(e, n) {
  if (e.size === 0 || n === 0) return [];
  return [...e.entries()]
    .sort((o, s) => s[1] - o[1])
    .map(([o, s]) => ({ name: o, pct: Math.round((s / n) * 100) }))
    .filter((o) => o.pct > 0);
}
export { xve, o7t, lNn, rks, s7t, Evr, kvr, rmo, omo, smo, Eh, rK, tMt, imo, oks, sks };

//# sourceMappingURL=chunk-3yt8akt1.js.map
