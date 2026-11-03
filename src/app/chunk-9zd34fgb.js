import {
  fileURLToPath as __filePath_ded567c00c6844fb,
  URL as __filePath_ded567c00c6844fb_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bg } from "./chunk-6bbdndfe.js";
import { L, q, tt } from "./chunk-wrtp8qz8.js";
import { d, G } from "./chunk-fs43t96t.js";
import { cy } from "./chunk-h5gbmqm1.js";
import { rr } from "./chunk-ak0cmk10.js";
import { Le } from "./chunk-jazcqqqr.js";
import { _C } from "./chunk-cj37hmns.js";
import { _, Vo, t } from "./chunk-4kxznmzw.js";
import { S2, rF, g6, Wkn, cYe, pX } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { gi, Wz, Q3o, iwn } from "./chunk-7svjr0za.js";
import { oc } from "./chunk-vchq4g74.js";
import { p } from "./chunk-qmkm2x59.js";
import { Dn } from "./chunk-qywdxehb.js";
import { un } from "./chunk-wr0p4ndg.js";
import { We } from "./chunk-pgnjjhxv.js";
import { bl, cM, $j, Ya, cNe, ckt, P6o, u_, $$, Kue, TYr, TRe } from "./chunk-jwqtbev0.js";
import { qm, RRe, vb, T0, ese, kd } from "./chunk-bh50mq9d.js";
import { hR, A0 } from "./chunk-tv3shk24.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { o, u } from "./chunk-0bqrj5ah.js";
import { hg, la } from "./chunk-8fp2d2p3.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { basename as Ie } from "path";
var oe = [g6, S2, Wkn],
  Pe = [...cYe, "system-reminder"],
  D;
function H() {
  return ((D ??= iwn([{ tags: oe }])), D);
}
function nkt(e) {
  return H().neutralize(e);
}
function yYr(e) {
  return H().openerOffsets(e);
}
var K;
function j() {
  return (
    (K ??= iwn([
      { tags: pX.filter((e) => e !== rF) },
      { tags: [rF], tail: Q3o },
      { tags: ["antml"], tail: ({ colon: e }) => `[${e}]` }
    ])),
    K
  );
}
function $5(e) {
  return j().neutralize(e);
}
function Osi(e) {
  return j().openerOffsets(e);
}
var ae = new RegExp(`[${Wz.open}]`, "u");
function U(e) {
  return ae.test(e) || e.includes("\\u");
}
var de = /^\s*(?:\{\s*["}]|\[\s*(?:["{[\]\d-]|true\b|false\b|null\b))/,
  ue = new Map([
    ['"', '"'],
    ["\\", "\\"],
    ["/", "/"],
    ["b", "\b"],
    ["f", "\f"],
    [
      "n",
      `
`
    ],
    ["r", "\r"],
    ["t", "\t"]
  ]);
function X(e, n) {
  let r = n,
    i = 1;
  while (i % 2 === 1) {
    if (((r = e.indexOf('"', r + 1)), r === -1)) return -1;
    i = 0;
    while (e.charCodeAt(r - i - 1) === 92) i++;
  }
  return r;
}
function ce(e) {
  let n = [],
    r = e.indexOf('"');
  while (r !== -1) {
    let i = X(e, r);
    if (i === -1) {
      n.push([r + 1, e.length]);
      break;
    }
    (n.push([r + 1, i]), (r = e.indexOf('"', i + 1)));
  }
  return n;
}
function fe(e) {
  if (de.test(e)) return !0;
  let n = e.search(/\S/),
    r = e[n] === '"' ? X(e, n) : -1;
  return r !== -1 && e.slice(r + 1).trim() === "";
}
function le(e, n, r) {
  let i = "",
    c = [],
    a = [];
  for (let f = n; f < r;) {
    let g = e[f],
      k = 1;
    if (g === "\\" && f + 1 < r) {
      let S = ue.get(e[f + 1]),
        m = e.slice(f + 2, f + 6);
      if (S !== void 0) ((g = S), (k = 2));
      else if (e[f + 1] === "u" && f + 6 <= r && /^[0-9a-fA-F]{4}$/.test(m))
        ((g = String.fromCharCode(parseInt(m, 16))), (k = 6));
    }
    ((i += g), c.push(f), a.push(f + k), (f += k));
  }
  return { value: i, starts: c, ends: a };
}
function me(e) {
  let n = new Map();
  for (let c of yYr(e)) n.set(c, { end: c + 1, keepsOpener: e[c] === "<" });
  for (let [c, a] of ce(e)) {
    if (!U(e.slice(c, a))) continue;
    let { value: f, starts: g, ends: k } = le(e, c, a);
    for (let S of yYr(f)) n.set(g[S], { end: k[S], keepsOpener: f[S] === "<" });
  }
  let r = "",
    i = 0;
  for (let c of [...n.keys()].sort((a, f) => a - f)) {
    let { end: a, keepsOpener: f } = n.get(c);
    ((r += e.slice(i, f ? a : c) + (f ? "\\\\" : "<\\\\")), (i = a));
  }
  return r + e.slice(i);
}
function rkt(e) {
  if (!U(e)) return e;
  return fe(e) ? me(e) : nkt(e);
}
var sy = "main";
function vRe(e, n) {
  return `<${Wkn} from="${gi(e)}">
${okt(n)}
</${Wkn}>`;
}
function okt(e) {
  return rkt(e);
}
import { createHash as ge, randomBytes as Y } from "crypto";
import { mkdir as pe, readdir as W, unlink as v } from "fs/promises";
import { basename as Se, join as A, resolve as ke } from "path";
async function _Yr(e, n) {
  let r = [],
    i;
  try {
    i = await la(
      (c) => e.listEntries({ namespace: "session" }, { cursor: c, skipKeyStats: !0 }),
      (c) => {
        for (let a of c) if (a.kind === "key" && a.key.namespace === "session") r.push(a.key.file);
      }
    );
  } catch (c) {
    n.onIssue?.(`failed: ${d(c)}`);
    return;
  }
  switch (i.status) {
    case "done":
      return r;
    case "error":
      n.onIssue?.(`failed: ${vt(i.error)}`);
      return;
    case "capped":
      return (
        n.onIssue?.(`truncated at ${hg} pages; ${r.length} names seen`, "warn"),
        n.partialOnCap ? r : void 0
      );
  }
}
var J = "auth",
  oor = /^(\d+)\.[0-9a-f]{64}\.key$/,
  he = /^(\d+)\.[0-9a-f]{64}\.key\.tmp\.[0-9a-f]+$/,
  C = 16,
  be = /^[0-9a-f]{32}$/,
  x = 4096,
  Q = p(() =>
    u({
      peerToken: o().regex(be),
      procStart: o().optional(),
      procStartFt: o().optional(),
      pidDomain: o().optional()
    })
  );
function sor() {
  return O() === "windows";
}
function Msi() {
  return { peerToken: Y(C).toString("hex"), childToken: Y(C).toString("hex") };
}
var ior = 25;
function Qoe() {
  return A(Le(), "sessions");
}
function gR(e) {
  let n = TRe(e);
  if (n !== void 0) return `\\\\.\\pipe\\${TYr(n)}`;
  if (cy(e)) return;
  return ke(e);
}
function Z(e) {
  let n = gR(e);
  return n === void 0 ? void 0 : ge("sha256").update(n).digest("hex");
}
function V(e, n) {
  let r = Z(n);
  if (r === void 0)
    throw Error("refusing to derive a messaging key name for a non-canonical socket path");
  return `${e}.${r}.key`;
}
async function Dsi(e, n, r, { sweepPermitted: i }) {
  if (z() && r !== void 0) return ye(r, e, n);
  let c = Qoe();
  (await pe(c, { recursive: !0, mode: 448 }), await Ee(c, i));
  let a = A(c, V(process.pid, e));
  try {
    await v(a);
  } catch {}
  return (await Dn(a, _({ peerToken: n, ...ese(await vb()), pidDomain: await hR() }), 384), a);
}
async function ye(e, n, r) {
  let i = V(process.pid, n),
    c = await e.ensureScope({ namespace: "session" });
  if (!c.ok)
    throw (
      t(`[uds-auth] sessions scope unavailable: ${vt(c.error)}`),
      Error("messaging key folder could not be made through storage")
    );
  try {
    await e.delete(We.session(i));
  } catch {}
  let a = await e.write(
    We.session(i),
    _({ peerToken: r, ...ese(await vb()), pidDomain: await hR() }),
    { publishDiscipline: "atomic", mode: 384, exactMode: 384 }
  );
  if (!a.ok)
    throw (
      t(`[uds-auth] key publish failed: ${vt(a.error)}`),
      Error("messaging key could not be published through storage")
    );
  return A(Qoe(), i);
}
async function aor(e) {
  try {
    let n = await bl(e, x);
    if (n === null) return;
    let r = Q().safeParse(Vo(n));
    return r.success ? r.data.pidDomain : void 0;
  } catch {
    return;
  }
}
async function Ee(e, n) {
  if (!n) return;
  let r;
  try {
    r = await W(e);
  } catch {
    return;
  }
  let i = await hR();
  await Promise.all(
    r.map(async (c) => {
      let a = he.exec(c);
      if (!a || !qm(parseInt(a[1], 10))) return;
      let f = await aor(A(e, c));
      if (f !== void 0 && f !== i) return;
      try {
        await v(A(e, c));
      } catch {}
    })
  );
}
async function Hsi(e, n) {
  if (z() && n !== void 0) {
    try {
      await n.delete(We.session(Se(e)));
    } catch {}
    return;
  }
  try {
    await v(e);
  } catch {}
}
async function Lsi(e, n, r) {
  let i = Qoe(),
    c;
  if (z() && n !== void 0) {
    let m = await _Yr(n, { partialOnCap: !1 });
    if (m === void 0) return { kind: "unusable" };
    c = m;
  } else
    try {
      c = await W(i);
    } catch (m) {
      return G(m) ? { kind: "no-key" } : { kind: "unusable" };
    }
  let a = Z(e);
  if (a === void 0) return { kind: "no-key" };
  let f = `.${a}.key`,
    g = c
      .filter((m) => m.endsWith(f))
      .map((m) => {
        let h = oor.exec(m);
        return h ? { file: m, pid: parseInt(h[1], 10) } : void 0;
      })
      .filter((m) => m !== void 0);
  if (g.length === 0) return { kind: "no-key" };
  let k = async (m) => {
    let h = z() && n !== void 0 ? await we(n, m) : await bl(A(i, m), x);
    if (h === null) return;
    try {
      let y = Q().safeParse(Vo(h));
      return y.success ? y.data : void 0;
    } catch {
      return;
    }
  };
  if (g.length === 1) {
    let m = g[0];
    if (r?.requireLiveOwner && qm(m.pid)) return { kind: "dead-owner" };
    let h = await k(m.file);
    if (h === void 0) return { kind: "unusable" };
    if (r?.requireLiveOwner) {
      let y = T0(h);
      if (y !== void 0) {
        let E = await kd(m.pid, { skipCache: !0 });
        if (E !== void 0 && !RRe(y, E)) return { kind: "dead-owner" };
      }
    }
    return { kind: "token", token: h.peerToken };
  }
  let S;
  for (let { file: m, pid: h } of g) {
    let y = await k(m);
    if (y === void 0) continue;
    let E = 0;
    if (!qm(h)) {
      let w = T0(y),
        T = w === void 0 ? void 0 : await kd(h, { skipCache: !0 });
      if (w === void 0 || T === void 0) E = 1;
      else E = RRe(w, T) ? 2 : 0;
    }
    if (S === void 0 || E > S.rank) S = { rank: E, peerToken: y.peerToken };
  }
  if (S === void 0) return { kind: "unusable" };
  if (r?.requireLiveOwner && S.rank === 0) return { kind: "dead-owner" };
  return { kind: "token", token: S.peerToken };
}
async function we(e, n) {
  try {
    let r = await e.readText([{ key: We.session(n), offset: 0, length: x + 1 }]);
    if (!r.ok) return null;
    let i = r.value.items[0];
    if (!i.found || i.totalBytes > x) return null;
    return i.value;
  } catch {
    return null;
  }
}
function E6o(e) {
  return (
    _({ type: J, token: e }) +
    `
`
  );
}
var Nsi = E6o("0".repeat(C * 2)).length;
function $si(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === J;
}
function Fsi(e, n) {
  if (n === void 0) return;
  if (A0(e, n.peerToken)) return "peer";
  if (A0(e, n.childToken)) return "child";
  return;
}
function pZ() {
  let { getFeatureValue_SESSION_PINNED: e } = import.meta.require(
    __filePath_ded567c00c6844fb(
      new __filePath_ded567c00c6844fb_URL("./chunk-4m15ar7w.js", import.meta.url)
    )
  );
  try {
    return e("tengu_session_stable_address", !1);
  } catch {
    return !1;
  }
}
var ee = "sid:";
function hVt(e) {
  return `${ee}${e}`;
}
function skt(e) {
  return e.startsWith(ee);
}
function drt(e) {
  return !skt(e.sock);
}
function bYr(e) {
  let n = typeof e === "string" ? e.trim() : "",
    r = obe(n);
  return !n || !r || (r === "untitled session" && n.toLowerCase() !== "untitled session");
}
function uqe(e) {
  return e.environmentKind !== void 0 && e.environmentKind !== "bridge";
}
function SYr(e) {
  return !uqe(e) && e.connected === !1;
}
function bo(e) {
  return e
    .normalize("NFKC")
    .replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, (n) => (/\s/.test(n) ? n : ""))
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}
function Usi(e) {
  return bg(bo(e)) !== null;
}
function crt(e) {
  return typeof e !== "string" || dM(e);
}
function ikt(e, n) {
  return e.name === Ya && n !== void 0 && e.agentId === n;
}
function Zoe(e) {
  let n = e.teamContext;
  if (n?.leadAgentId && n.isLeader !== !1) return n.leadAgentId;
  let r = oc(n);
  return r ? $j(Ya, r) : void 0;
}
function urt(e, n) {
  return e.members.filter((r) => ikt(r, n) || !crt(r.name));
}
function dM(e) {
  let n = bo(e);
  return n === sy || n === Ya || n === cNe || n === ckt || bg(n) !== null;
}
var N = 6,
  k6o = 12,
  lNe = `[0-9a-f]{${N},${k6o}}`,
  Ae = new RegExp(`^(.*\\S)\\s*\\[(${lNe})\\]$`);
function F5(e) {
  let n = Ae.exec(e.trim());
  return n ? { name: n[1], ref: n[2] } : null;
}
function U5(e, n) {
  let r = [];
  r.push({
    name: sy,
    id: tt(),
    kind: "main",
    where: "in-process",
    lastActive: void 0,
    sock: void 0
  });
  let i = new Set();
  for (let [s, l] of Object.entries(e.teamContext?.teammates ?? {}))
    (i.add(s),
      r.push({
        name: l.name,
        id: s,
        kind: "teammate",
        where: "in-process",
        lastActive: void 0,
        sock: void 0
      }));
  for (let [s, l] of e.agentNameRegistry) {
    let b = e.tasks[l],
      I = b?.type === "local_agent" ? b : void 0;
    r.push({
      name: s,
      id: l,
      kind: "subagent",
      where: "in-process",
      lastActive: I?.startTime,
      sock: void 0
    });
  }
  for (let s of n.teamFile?.members ?? []) {
    if (i.has(s.agentId)) continue;
    (i.add(s.agentId),
      r.push({
        name: s.name,
        id: s.agentId,
        kind: "teammate",
        where: "this-machine",
        lastActive: void 0,
        sock: void 0
      }));
  }
  let c = pZ(),
    a = n.sessions.filter(drt),
    f = c ? re(a) : void 0,
    g = c ? se(q(), a, f) : void 0;
  for (let s of a) {
    let l = f?.get(s)?.claims;
    r.push({
      name: s.name || Ie(s.cwd),
      id: s.sock,
      kind: "session",
      where: "this-machine",
      lastActive: s.statusUpdatedAt,
      sock: s.sock,
      ...(l !== void 0 && l.size > 0 && { claimedSessionIds: [...l].sort() }),
      ...(c && s.sessionId !== void 0 && !g.has(s.sessionId) && { stableId: hVt(s.sessionId) }),
      ...(c && s.nameSource === "derived" && { derivedName: !0 }),
      ...(s.hostSessionId !== void 0 && { hostSessionId: s.hostSessionId })
    });
  }
  let k = new Map();
  for (let s of n.sessions)
    if (s.bridgeSessionId !== void 0) {
      let l = rr(s.bridgeSessionId);
      k.set(l, [...(k.get(l) ?? []), s.sock]);
    }
  let S = [];
  for (let s of n.cloud ?? []) {
    if (cSn(n.sessions, s.id)) {
      S.push({ rawName: s.title || "untitled", socks: k.get(rr(s.id)) ?? [] });
      continue;
    }
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "cloud-session",
      ...(bYr(s.title) && { derivedName: !0 }),
      ...(s.acceptsPeerMessages === !0 && { reportsInbound: !0 }),
      where: s.remoteControl ? "remote" : "cloud",
      lastActive: s.lastActive,
      sock: void 0,
      ...(s.offline && { offline: !0 })
    });
  }
  let m = new Set((n.cloud ?? []).map((s) => rr(s.id))),
    h = _Vt(n.sessions);
  for (let s of n.bridge ?? []) {
    let l = rr(s.id);
    if (m.has(l)) continue;
    if (h.has(l)) {
      S.push({ rawName: s.title || "untitled", socks: k.get(l) ?? [] });
      continue;
    }
    let b = Date.parse(s.updated_at);
    r.push({
      name: s.title || "untitled",
      id: s.id,
      kind: "bridge-session",
      ...(bYr(s.title) && { derivedName: !0 }),
      ...(s.acceptsPeerMessages === !0 && { reportsInbound: !0 }),
      ...(s.inboundReportUnavailable && { inboundReportUnavailable: !0 }),
      where: uqe(s) ? "cloud" : "remote",
      lastActive: Number.isNaN(b) ? void 0 : b,
      sock: void 0,
      ...(SYr(s) && { offline: !0 })
    });
  }
  let y = Zoe(e),
    E = r.flatMap((s) => {
      let l = obe(s.name);
      if (l === null || !F(l)) return [];
      let b =
          s.kind === "main" || (s.kind === "teammate" && ikt({ name: s.name, agentId: s.id }, y)),
        I =
          (s.kind === "session" || s.kind === "cloud-session" || s.kind === "bridge-session") &&
          bo(l) === sy;
      return b || I || !crt(l) ? [{ ...s, name: l }] : [];
    }),
    w = new Set(),
    T = _e(
      E.filter((s) => {
        if (s.kind !== "session") return !0;
        let l = `${bo(s.name)}\x00${gR(s.id) ?? s.id}`;
        if (w.has(l)) return !1;
        return (w.add(l), !0);
      })
    ),
    M = new Map();
  for (let s of T) {
    let l = bo(s.name),
      b = M.get(l);
    if (b) b.push(s);
    else M.set(l, [s]);
  }
  let P = new Map();
  for (let { rawName: s, socks: l } of S) {
    let b = obe(s);
    if (b === null || !F(b)) continue;
    let I = bo(b),
      B = P.get(I) ?? new Set();
    for (let ie of l) B.add(ie);
    P.set(I, B);
  }
  return { candidates: T, byName: M, remoteNamesClaimedLocally: P };
}
function akt(e, n, r) {
  let i = e.get(n);
  if (!i || i.length === 0) return;
  let c = r === void 0 ? [] : i.filter((g) => g.name === r),
    f = (c.length > 0 ? c : i)[0];
  if (f.where === "in-process") return { kind: "one", candidate: f };
  return { kind: "ambiguous" };
}
function ERe(e) {
  return `${e.name} [${e.ref}]`;
}
function wYr(e) {
  return e === "remote" ? `${vYr(e)} (Remote Control)` : vYr(e);
}
function vYr(e) {
  switch (e) {
    case "in-process":
      return "in this session";
    case "cloud":
      return "in the cloud";
    case "remote":
      return "on another machine";
    case "this-machine":
      return "on this machine";
  }
}
function aSn(e, n) {
  let r =
      e.kind === "main"
        ? "main conversation"
        : e.kind === "session" || e.kind === "cloud-session" || e.kind === "bridge-session"
          ? "Claude session"
          : e.kind,
    i = wYr(e.where),
    c =
      e.lastActive === void 0
        ? ""
        : `, ${e.kind === "subagent" ? "started" : "active"} ${un(Math.max(0, n - e.lastActive), { mostSignificantOnly: !0 })} ago`;
  return `${ERe(e)} \u2014 ${r}, ${i}${c}`;
}
var Te = cM;
function obe(e) {
  if (typeof e !== "string") return null;
  return (
    [
      ...e
        .replace(/[\p{Cc}\p{Cf}\p{Cs}]/gu, (r) => (/\s/.test(r) ? r : ""))
        .replace(/\s+/g, " ")
        .trim()
    ]
      .slice(0, Te)
      .join("")
      .trim() || "untitled session"
  );
}
function lor(e, n) {
  return e.find((r) => r.name === n) ?? e.find((r) => obe(r.name) === n);
}
function dNe(e) {
  let n = obe(e);
  return n !== null && !yVt(n) && $$(n) ? n : null;
}
function lSn(e) {
  let n = obe(e);
  return n !== null && F(n) && !dM(n) ? n : null;
}
function F(e) {
  return !yVt(e) && $$(e) && !e.includes("@") && e !== "*";
}
function yVt(e) {
  let n = bo(e);
  return u_(e).scheme !== "other" || u_(n).scheme !== "other" || P6o(e) || P6o(n);
}
function _e(e) {
  let n = e.map((a) => R(a.kind, dSn(a))),
    r = xe().map((a) => R("session", a)),
    i = L([...n, ...r]).sort(),
    c = new Map();
  for (let a = 0; a < i.length; a++) {
    let f = i[a],
      g = Math.max(a > 0 ? ne(f, i[a - 1]) : 0, a + 1 < i.length ? ne(f, i[a + 1]) : 0);
    c.set(f, Math.min(f.length, Math.max(N, g + 1)));
  }
  return e.map((a, f) => {
    let g = n[f];
    return { ...a, ref: g.slice(0, c.get(g)) };
  });
}
function ne(e, n) {
  let r = 0;
  while (r < e.length && r < n.length && e[r] === n[r]) r++;
  return r;
}
function R(e, n) {
  return String(cn(`${e}:${n}`));
}
function dSn(e) {
  return e.stableId ?? e.id;
}
function xe() {
  let e = _C.CLAUDE_CODE_MESSAGING_SOCKET;
  return e === void 0 ? [] : te(e);
}
function T6o(e) {
  return pZ() ? hVt(q()) : e;
}
function te(e) {
  let n = T6o(e);
  return n === e ? [e] : [n, e];
}
function A6o(e, n) {
  return te(n).some((r) => Re(e, "session", r));
}
function re(e) {
  let n = [];
  for (let i of e) {
    let c = n.filter((f) => f.records.some((g) => Kue(g.sock, i.sock))),
      a = { records: [], claims: new Set() };
    for (let f of c) {
      a.records.push(...f.records);
      for (let g of f.claims) a.claims.add(g);
    }
    if ((a.records.push(i), i.sessionId !== void 0)) a.claims.add(i.sessionId);
    ((n = n.filter((f) => !c.includes(f))), n.push(a));
  }
  let r = new Map();
  for (let i of n) for (let c of i.records) r.set(c, i);
  return r;
}
function se(e, n, r) {
  let i = new Set([e]),
    c = new Set();
  for (let a of n) {
    if (a.sessionId === void 0) continue;
    if (i.has(a.sessionId)) c.add(a.sessionId);
    i.add(a.sessionId);
  }
  for (let a of new Set(r.values())) if (a.records.length > 1) for (let f of a.claims) c.add(f);
  return c;
}
function Bsi(e, n, r) {
  if (r) return !0;
  let i = q(),
    c = e.filter(drt);
  if (n !== void 0) c.push({ sock: n, sessionId: i });
  let a = re(c);
  return se("", c, a).has(i);
}
function frt(e, n) {
  return R(e, n).slice(0, N);
}
function Re(e, n, r) {
  return e.length >= N && R(n, r).startsWith(e);
}
function _Vt(e) {
  return new Set(e.flatMap((n) => (n.bridgeSessionId ? [rr(n.bridgeSessionId)] : [])));
}
function cSn(e, n) {
  let r = rr(n);
  return e.some((i) => i.bridgeSessionId !== void 0 && rr(i.bridgeSessionId) === r);
}
export {
  nkt,
  yYr,
  $5,
  Osi,
  rkt,
  sy,
  vRe,
  okt,
  _Yr,
  oor,
  sor,
  Msi,
  ior,
  Qoe,
  gR,
  Dsi,
  aor,
  Hsi,
  Lsi,
  E6o,
  Nsi,
  $si,
  Fsi,
  pZ,
  hVt,
  skt,
  drt,
  bYr,
  uqe,
  SYr,
  bo,
  Usi,
  crt,
  ikt,
  Zoe,
  urt,
  dM,
  k6o,
  lNe,
  F5,
  U5,
  akt,
  ERe,
  wYr,
  vYr,
  aSn,
  obe,
  lor,
  dNe,
  lSn,
  yVt,
  dSn,
  T6o,
  A6o,
  Bsi,
  frt,
  _Vt,
  cSn
};

//# sourceMappingURL=chunk-9zd34fgb.js.map
