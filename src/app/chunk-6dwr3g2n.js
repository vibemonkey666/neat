// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { L, nt, J } from "./chunk-wrtp8qz8.js";
import { I, yi, Ze } from "./chunk-a16y5hcz.js";
import { p } from "./chunk-qmkm2x59.js";
import { Av } from "./chunk-v19xty83.js";
import { y4e } from "./chunk-928ws1pg.js";
import { fH, dR, Lh, Et, Poe, gn, uf, k } from "./chunk-ajtyjx88.js";
import { K3o, nwn, Ukt, rai } from "./chunk-zf79f62g.js";
import { wH, rB, Bz, zx, Prt, Kor, Vor, Kl, Kf, $3o, Lkt } from "./chunk-r1dvrqha.js";
import { ip, n5, xw, eoe } from "./chunk-nvjx6a4x.js";
import { n2, En } from "./chunk-errevp3y.js";
import { o, T, u, A } from "./chunk-0bqrj5ah.js";
function itt(e) {
  return e
    ? `this session holds no gateway credential (${e})`
    : "this session holds no gateway credential";
}
function PLe() {
  return Et() || ge();
}
function ge() {
  if (Av() !== "env-quad") return !1;
  try {
    return fH() && Poe();
  } catch {
    return !1;
  }
}
function PGt() {
  return !Et() && ge();
}
function ILe() {
  let { info: e, storeBearerOnly: n } = P7n();
  if (!n || e === void 0) return e;
  return dR() === "store" ? e : void 0;
}
function P7n() {
  let e = gn();
  if (e !== void 0) return { info: e, storeBearerOnly: !1 };
  return PGt() ? { info: uf(), storeBearerOnly: !0 } : { info: void 0, storeBearerOnly: !1 };
}
async function fCe(e) {
  let { info: n, storeBearerOnly: t } = P7n();
  if (!t || n === void 0) return n;
  return (await Lh(e)) === "store" ? n : void 0;
}
function Oy(e) {
  return J()
    ? `This session could not reach Artifacts: ${e}`
    : `Not authenticated \u2014 run /login (${e})`;
}
function QT() {
  return k("tengu_cobalt_plinth_sedge", !1);
}
var Dce = "public_unasked",
  Qgn =
    "this is a public artifact from outside your organization, and no person has approved reading it here \u2014 nothing was fetched";
var JJs = "[a-z][a-z_-]{0,31}",
  att = new RegExp("^[a-z][a-z_-]{0,31}$");
var ZA = "live-doc",
  Zre = "index.html";
var pzo = 128,
  mzo = 32,
  _e = /^[A-Za-z0-9_.-]{1,128}$/,
  K = 64,
  Me = "\u2800\uD834\uDD59\uD80D\uDC41\uD80D\uDC42\uFFFC",
  U = `${Me}\\p{Cf}\\p{Default_Ignorable_Code_Point}`,
  ve = "\u2026\u22EF\uFE19",
  ue = new RegExp(`^(?:[<>\\\\${ve}]|[${U}]|[^ \\P{Z}]|\\p{C})$`, "u");
function we(e) {
  let n = Array.from(e).length - 1,
    t = "";
  return (r, s) => {
    let i = r === " " && (s === 0 || s === n || t === " ");
    return ((t = r), i);
  };
}
function Pe(e) {
  let n = we(e),
    t = -1;
  return (r) => (t++, n(r, t) || ue.test(r));
}
var Ie = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Cf} ]+$/u,
  je = new RegExp(`^(?![${U}])[\\p{L}\\p{N}\\p{P}\\p{S}](?:.*[^ ${U}\\p{M}])?\\p{M}*$`, "su"),
  De = /\p{Bidi_Control}/u,
  He = new RegExp(`\\p{M}(?:[${U}]*\\p{M}){8}`, "u"),
  me = new RegExp(`[ ${U}\\p{Mn}\\p{Me}\\p{Variation_Selector}]`, "gu"),
  Y =
    ":\u02D0\u02D1\u02F8\u0589\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709\u0903\u0983\u0A03\u0A83\u0B03\u0C03\u0C83\u0D03\u0D83\u0F7F\u1038\u1361\u1365\u1366\u16EC\u17C7\u1803\u1804\u1809\u1B04\u1B82\u205A\u205D\u205E\u2236\u2237\u2806\u2982\u2D42\u2D53\u2D57\uA4FD\uA6F4\uA789\uA881\uA983\uAAF5\uFE13\uFE30\uFE55\uFF1A\uD804\uDC02\uD804\uDC82\uD804\uDD82\uD804\uDF03\uD805\uDC45\uD805\uDCC1\uD805\uDDBE\uD805\uDE3E\uD805\uDEAC\uD806\uDC38\uD806\uDDDF\uD806\uDE39\uD806\uDE97\uD807\uDC3E\uD807\uDD96\uD807\uDF03\uD801\uDF81\uD801\uDF82",
  ze = new RegExp(`^host[${Y}]`, "iu"),
  Ae = "\u05C3\u0703\u0704\u0705\u0706\u0707\u0708\u0709",
  Ke = new RegExp(`^host.*[${Ae}]`, "iu"),
  Ue = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFE\u{10800}-\u{10FFF}\u{1E800}-\u{1EFFF}]/u,
  Be = new RegExp(`(?:^|[^a-z])host[${Y}]|[${Y}]host(?:$|[^a-z])`, "iu"),
  We = new RegExp(`^[^\\p{L}]*[${Y}]host(?:$|[^a-z])`, "iu"),
  Ge = /[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2]/u,
  Ve = new RegExp(`(?![${Ae}])[${Y}]`, "gu"),
  Ee = new RegExp(`["<>\\\\\`${U}${ve}]|${wH.source}|${rB.source}`, "gu"),
  Ye = new RegExp(`^\\p{M}+|[^ \\P{Z}]|[\\p{C}\\p{Cn}]|${Ee.source}`, "gu");
function qe(e) {
  let n = e.normalize("NFD"),
    t = Ue.test(n),
    r = n.replace(me, "");
  return he(r, t) || he(r.replace(Ve, ":").normalize("NFKC").replace(me, ""), t);
}
function he(e, n) {
  return ze.test(e) || Ke.test(e) || (n && Be.test(e)) || We.test(e);
}
function ne(e) {
  return e === '"' || e === "\\"
    ? `\\${e}`
    : e
        .split("")
        .map((n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`)
        .join("");
}
function I7n(e) {
  return (
    Array.from(e).length <= K &&
    !e.startsWith(" ") &&
    !e.endsWith(" ") &&
    Ie.test(e) &&
    je.test(e) &&
    !De.test(e) &&
    !Ge.test(e) &&
    !He.test(e) &&
    !qe(e) &&
    !e.startsWith(n2) &&
    !e.startsWith("mcp__") &&
    Kt(e) === null
  );
}
function Wm(e, n) {
  if (typeof e === "string" && I7n(e)) return Kl(e.replace(Ee, ne));
  let t = n?.max ?? K,
    r = e,
    s = !1;
  if (typeof e === "string") ({ text: r, cut: s } = $e(e, Pe(e), t));
  let i = Kl(Kf(ny(r, { ...n, max: t }).replace(/`/g, "'"))?.replace(/^\p{M}+/u, ne) ?? "?");
  return s ? `${i}\u2026` : i;
}
function O7n(e) {
  return Kl(yi(e, K).replace(Ye, ne));
}
function ltt(e) {
  return e.declarable !== !1 && I7n(e.server);
}
var Qe = ["name", "connector", "id", "display_name"];
function G() {
  return { ok: !1, unresolved: [], internal: [], malformed: [], oversized: [], serverCount: null };
}
function SV(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function M7n(e) {
  return Se(e, "rules");
}
function gzo(e) {
  return Se(e, "scopes");
}
function hzo(e) {
  return e.every((n) => typeof n === "string" && /^[a-z][a-z0-9_-]{0,31}$/.test(n));
}
function yzo(e) {
  if (!SV(e)) return !1;
  let { scopes: n, ...t } = e;
  return Object.keys(t).length === 0 && (n === void 0 || (Array.isArray(n) && hzo(n)));
}
function Se(e, n) {
  if (!SV(e)) return;
  let t = e[n];
  return Array.isArray(t) ? t : void 0;
}
var qGr = /^(?:[A-Za-z0-9_.~:@+-]+|\{self\})(?:\/(?:[A-Za-z0-9_.~:@+-]+|\{self\}))*$/,
  YGr = new Set(["view", "interact", "admin", "owner"]);
function _zo(e) {
  if (!SV(e)) return !1;
  let { rules: n, wake: t, ...r } = e;
  return (
    Object.keys(r).length === 0 &&
    (n === void 0 || (Array.isArray(n) && bzo(n))) &&
    (t === void 0 || (Array.isArray(t) && t.every((s) => typeof s === "string" && qGr.test(s))))
  );
}
function bzo(e) {
  return e.every((n) => {
    if (!SV(n)) return !1;
    let { path: t, read: r, write: s, ...i } = n;
    return (
      Object.keys(i).length === 0 &&
      typeof t === "string" &&
      (t === "" || qGr.test(t)) &&
      (r === void 0 || (typeof r === "string" && YGr.has(r))) &&
      (s === void 0 || (typeof s === "string" && YGr.has(s)))
    );
  });
}
function B(e) {
  try {
    return SV(e) ? e : void 0;
  } catch {
    return null;
  }
}
function Ce(e) {
  return Array.isArray(e) && e.every((n) => typeof n === "string");
}
function Je(e) {
  return Ce(e) ? e : null;
}
function ae(e) {
  return [...e].filter((n) => _e.test(n));
}
function X(e) {
  return Kt(e) === null ? e : e.toLowerCase();
}
function Szo(e, n, t, r = {}) {
  let s = e.mcp;
  if (s === void 0) return { ok: !0, caps: e, warnings: [], servers: [], renamed: [] };
  let i = SV(s) ? s.servers : !1;
  if (i === !1 || (i != null && !Array.isArray(i)))
    return { ...G(), malformed: [{ kind: "not_object" }] };
  if (SV(s) && s.dynamic !== void 0 && typeof s.dynamic !== "boolean")
    return { ...G(), malformed: [{ kind: "dynamic_not_boolean" }] };
  if (i == null || i.length === 0) {
    if (SV(s) && MGt(s))
      return {
        ok: !0,
        caps: { ...e, mcp: { ...s, servers: [] } },
        warnings: [],
        servers: [],
        renamed: []
      };
    return { ...G(), malformed: [{ kind: "no_servers" }] };
  }
  let l = new Map(n.map((g) => [X(g.toolPrefix), g])),
    c = new Map(n.map((g) => [g.server, g])),
    d = [],
    m = [],
    a = [],
    b = [],
    y = new Map(),
    C = new Map(),
    O = [],
    P = [];
  for (let [g, h] of i.entries()) {
    let _ = q(h),
      f = _?.startsWith("host:") ? `host:${y4e(_.slice(5))}` : _;
    if (f === void 0) {
      let v = h !== null && typeof h === "object" ? (Qe.find((M) => M in h) ?? null) : null;
      a.push({ kind: "entry_shape", index: g, wrongKey: v });
      continue;
    }
    let w = l.get(X(y4e(f))),
      j = SV(h) ? h.tools : void 0,
      x = Je(j);
    if (j === void 0 || x?.length === 0) {
      let v = w ?? c.get(f);
      a.push({
        kind: "no_tools",
        server: f,
        display: w !== void 0 && ltt(w) ? w.server : null,
        available: ae(v?.toolNames ?? [])
      });
    } else if (x === null) a.push({ kind: "tools_shape", server: f });
    let F = dtt(f),
      Q = F === void 0 ? void 0 : l.get(X(F)),
      W = F === void 0 ? null : nwn(F),
      R = null,
      pe = c.get(f);
    if (w !== void 0) {
      if (!ltt(w)) a.push({ kind: "undeclarable_name", server: f, name: w.server });
      else if (Kt(f) !== null) a.push({ kind: "known_id", server: f, display: w.server });
      else if (((R = w.server), f !== w.server)) y.set(f, w.server);
    } else if (pe !== void 0)
      if (ltt(pe)) R = f;
      else a.push({ kind: "undeclarable_name", server: f, name: f });
    else if (f.startsWith(n2)) d.push(f);
    else if (f.startsWith("mcp__")) {
      let v = l.get(X(Ze(f.slice(5), "__")));
      a.push({ kind: "tool_name", server: f, display: v !== void 0 && ltt(v) ? v.server : null });
    } else if (Kt(f) !== null) a.push({ kind: "opaque_id", server: f });
    else if (Q !== void 0)
      a.push(
        ltt(Q)
          ? { kind: "connector_as_host", server: f, display: Q.server }
          : { kind: "undeclarable_name", server: f, name: Q.server }
      );
    else if (F !== void 0 && Kt(F) !== null) a.push({ kind: "opaque_id", server: f });
    else if (F !== void 0 && r.hostServers === !1) a.push({ kind: "host_unavailable", server: f });
    else if (W !== null) {
      let v = (S) => Ukt(S, W) || Ukt(Ze(`${En(S)}__`, "__"), W) || Ukt(ke(S), W),
        M = t.find(v) ?? n.find((S) => v(S.server))?.server;
      if (M === void 0) R = `host:${W}`;
      else a.push({ kind: "local_server_as_first_party", server: f, local: M });
    } else if (rai(F ?? "")) m.push(f);
    else {
      R = f;
      let v = F === void 0 ? Xe(f, n) : void 0;
      if (v !== void 0 && !C.has(f)) C.set(f, v);
    }
    if (R !== null && _ !== f && !y.has(f)) y.set(_ ?? f, R);
    if (R !== null && x !== null && x.length > 0 && SV(h)) {
      let v = new Set(n.flatMap((S) => (S.server === R && ltt(S) ? (S.toolNames ?? []) : []))),
        M = x;
      if (v.size > 0) {
        M = x.map((D) => {
          if (v.has(D)) return D;
          let Z = [...v].filter((Le) => En(Le) === D);
          if (Z.length !== 1 || !_e.test(Z[0])) return D;
          return (O.push([D, Z[0]]), Z[0]);
        });
        let S = L(M.filter((D) => !v.has(D)));
        if (S.length > 0 && S.length === L(M).length) {
          a.push({
            kind: "unknown_tools",
            server: f,
            display: f === R ? null : R,
            unknown: S,
            available: ae(v)
          });
          continue;
        }
        if (S.length > 0) P.push({ server: R, unknown: S, known: ae(v) });
      }
      b.push({ ...h, server: R, tools: M });
    }
  }
  if (d.length > 0 || m.length > 0 || a.length > 0)
    return { ...G(), unresolved: d, internal: m, malformed: a };
  let E = [],
    z = new Map();
  for (let g of b) {
    let h = z.get(g.server);
    if (h === void 0) (z.set(g.server, { idx: E.length, from: 1 }), E.push(g));
    else {
      h.from++;
      let _ = E[h.idx];
      E[h.idx] = { ..._, tools: L([..._.tools, ...g.tools]) };
    }
  }
  let N = [];
  if (y.size > 0) {
    let g = oH([...y], 8, ([h, _]) => `"${ny(h)}" \u2192 "${Wm(_)}"`).join(", ");
    N.push(
      `resolved ${I(y.size, "a connector name", "connector names")} to the display ${I(y.size, "name")} viewers match \u2014 ${g}; the page must pass exactly ${y.size === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`
    );
  }
  if (C.size > 0) {
    let g = oH([...C], 8, ([h, _]) => `"${Wm(h)}" (closest here: "${Wm(_)}")`).join(", ");
    N.push(
      `no connector in this session is named ${g} \u2014 if the closest name is the one you meant, declare it with exactly that spelling; viewers' connectors are matched by name (ignoring at most letter case and separators), so a name none of them carries works for no viewer.`
    );
  }
  if (O.length > 0) {
    let g = L(O.map(([h, _]) => `"${Wm(h)}" \u2192 "${Wm(_)}"`));
    N.push(
      `rewrote mcp tool ${I(g.length, "name")} to the upstream ${I(g.length, "spelling")} viewers call \u2014 ${oH(g, 8, (h) => h).join(", ")}; the page must pass exactly ${g.length === 1 ? "that name" : "those names"} to callTool(\u2026) / watchTool(\u2026).`
    );
  }
  for (let { server: g, unknown: h, known: _ } of P) {
    let f = oH(h, 8, (x) => `"${Wm(x)}"`).join(", "),
      w = h.length === 1 ? "it" : "them",
      j = _.length === 0 ? "" : ` (its tools here: ${oH(_, 12, (x) => `"${Wm(x)}"`).join(", ")})`;
    N.push(
      `connector "${Wm(g)}" has no ${I(h.length, "tool")} named ${f} in this session${j}, so the page's calls to ${w} fail for any viewer whose "${Wm(g)}" lacks ${w} too \u2014 "tools" takes the connector's own top-level tool names; if ${w === "it" ? "that name is" : "those names are"} wrong, fix "tools" and publish again.`
    );
  }
  let ie = [];
  for (let [g, h] of z) {
    let _ = E[h.idx].tools.length,
      f = nwn(dtt(g) ?? "") !== null;
    if (h.from > 1 && !f) {
      let w = Wm(g),
        j = IGt(g);
      N.push(
        `${h.from} manifest entries resolve to ${j} "${w}" and were merged into one (${_} ${I(_, "tool")}). A viewer with more than one ${j} named "${w}" gets server_ambiguous on every call until the duplicates are renamed or removed.`
      );
    }
    if (_ > pzo) ie.push({ server: g, toolCount: _ });
  }
  let fe = E.length > mzo ? E.length : null;
  if (ie.length > 0 || fe !== null) return { ...G(), oversized: ie, serverCount: fe };
  return {
    ok: !0,
    caps: { ...e, mcp: { ...s, servers: E } },
    warnings: N,
    servers: E.map((g) => g.server),
    renamed: [...y]
  };
}
function wzo(e, n, t = 8) {
  let r = new Set(n),
    s = new Set(),
    i = [],
    l = /\.(?:callTool|watchTool)\(\s*(?:'([^'\\\n]{1,200})'|"([^"\\\n]{1,200})")\s*,/g;
  for (let c of e)
    for (let d of c.matchAll(l)) {
      let m = d[1] ?? d[2];
      if (r.has(m) || s.has(m)) continue;
      if ((s.add(m), i.push(m), i.length >= t)) return i;
    }
  return i;
}
function ee(e) {
  return e
    .toLowerCase()
    .replace(/[\s\p{Pd}\p{Pc}]+/gu, " ")
    .trim();
}
function Xe(e, n) {
  let t = n.filter(ltt),
    r = ee(e);
  if (t.some((a) => ee(a.server) === r)) return;
  let s = (a) => a.replace(/[^\p{L}\p{N}]/gu, ""),
    i = (a) => a.split(/[^\p{L}\p{N}]+/u).filter((b) => b.length >= 3),
    l = s(r);
  if (l.length < 3) return;
  let c = t.find((a) => s(ee(a.server)) === l);
  if (c !== void 0) return c.server;
  let d = i(r),
    m;
  for (let a of t) {
    let b = i(ee(a.server)),
      [y, C] = b.length <= d.length ? [b, d] : [d, b];
    if (y.length > 0 && y.every((O) => C.includes(O)) && (m === void 0 || y.length > m.shared))
      m = { server: a.server, shared: y.length };
  }
  return m?.server;
}
function QJs(e, n) {
  return n.filter(([t]) =>
    e.some((r) => [`'${t}'`, `"${t}"`, `\`${t}\``].some((s) => r.includes(s)))
  );
}
function ZJs(e) {
  let n = e.mcp;
  if (!Te(n)) return [];
  return n.servers.map(q).filter((t) => t !== void 0 && t.startsWith(n2));
}
function eQs(e, n, t) {
  let r = e.mcp,
    s = MGt(r) ? [dn] : [];
  if (!Te(r)) return s;
  let i = L(r.servers.map(q).filter((c) => c !== void 0)),
    l = (c) => t.has(c) && !K3o.has(c) && !n.some((d) => d.toolPrefix === c);
  return i
    .filter((c) => {
      let d = dtt(c);
      if (d !== void 0) {
        let m = nwn(d);
        return m === null ? !l(d) : ![...t].some((a) => nwn(a) === m && l(a));
      }
      return !t.has(c) && !l(ke(c)) && !n.some((m) => m.server === c && t.has(m.toolPrefix));
    })
    .map((c) => {
      let d = Wm(c);
      return `This page declares ${IGt(c)} "${d}" but no successful call to it was observed in this session, so the page is published against an unobserved interface. Check the page's argument names against each tool's input schema if this session has the tool. The result fields the page reads stay unverified unless you can safely make one real call; otherwise tell the user the page's "${d}" integration is unverified.`;
    })
    .concat(s);
}
function ke(e) {
  return En(e).replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 64).replace(/_+$/, "");
}
function q(e) {
  let n = e != null && typeof e === "object" ? e.server : void 0;
  return typeof n === "string" ? n : void 0;
}
function uz(e) {
  return le(e) && Object.keys(e).length > 0;
}
function le(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function te(e) {
  let n = nn(e);
  return le(n) ? n : e;
}
function H(e, n, t) {
  Object.defineProperty(e, n, { value: t, enumerable: !0, writable: !0, configurable: !0 });
}
function vzo(e, n) {
  let t = te(e ?? {}),
    r = te(n ?? {}),
    s = { ...t },
    i = !1,
    l = !1;
  for (let [c, d] of Object.entries(r))
    if (Object.hasOwn(t, c)) l ||= !se(t[c], d);
    else (H(s, c, d), (i = !0));
  return { capabilities: i ? s : e, widened: i, conflict: l };
}
var wwt = "0.0.0";
class Oe {
  served = void 0;
}
var ce = new nt(() => new Oe());
function D7n(e, n) {
  ce.of(e).served = n;
}
function tQs(e) {
  return ce.peek(e)?.served;
}
function nQs(e) {
  ce.of(e).served = void 0;
}
var H7n = "host";
function L7n(e, n, t) {
  let r = e.features;
  return r !== void 0 && Object.hasOwn(r, n) && Object.hasOwn(r[n] ?? {}, t);
}
var Re = /^host:([A-Za-z0-9_-]{1,64})$/;
function dtt(e) {
  return Re.exec(e)?.[1];
}
function IGt(e) {
  return dtt(e) === void 0 ? "connector" : "local server";
}
var Ezo = "CLAUDE_ARTIFACT_HOST_GRANT",
  en = p(() => u({ v: A(1), servers: T(u({ server: o().regex(Re), tools: T(o()) })) }));
function ctt(e) {
  if (e === void 0) return { kind: "absent" };
  let n;
  try {
    n = JSON.parse(e);
  } catch {
    return { kind: "unreadable" };
  }
  let t = en().safeParse(n);
  if (!t.success) return { kind: "unreadable" };
  let r = new Map();
  for (let s of t.data.servers) {
    let i = r.get(s.server) ?? new Set();
    for (let l of s.tools) i.add(l);
    r.set(s.server, i);
  }
  return { kind: "granted", tools: r };
}
function V(e) {
  return e.flatMap((n) => {
    let t = q(n);
    return t === void 0 ? [] : [t];
  });
}
function XGr(e, n) {
  let t = e.mcp;
  if (!SV(t) || !Array.isArray(t.servers)) return { ok: !0, caps: e, dropped: [], servers: [] };
  let r = t.servers;
  if (n.kind === "absent") return { ok: !0, caps: e, dropped: [], servers: V(r) };
  let s = L(V(r).filter((c) => dtt(c) !== void 0));
  if (s.length === 0) return { ok: !0, caps: e, dropped: [], servers: V(r) };
  if (n.kind === "unreadable") return { ok: !1, refused: s };
  let i = [],
    l = [];
  for (let c of r) {
    let d = q(c);
    if (d === void 0 || dtt(d) === void 0) {
      l.push(c);
      continue;
    }
    let m = n.tools.get(d);
    if (m === void 0 || !SV(c)) {
      i.push({ server: d, tool: null });
      continue;
    }
    let a = c.tools;
    if (!Ce(a)) {
      i.push({ server: d, tool: null });
      continue;
    }
    let b = a.filter((y) => m.has(y));
    for (let y of a) if (!m.has(y)) i.push({ server: d, tool: y });
    if (b.length > 0) l.push({ ...c, tools: b });
  }
  if (i.length === 0) return { ok: !0, caps: e, dropped: i, servers: V(r) };
  if (l.length === 0) {
    let { mcp: c, ...d } = e;
    return { ok: !0, caps: d, dropped: i, servers: [] };
  }
  return { ok: !0, caps: { ...e, mcp: { ...t, servers: l } }, dropped: i, servers: V(l) };
}
var r9 = /^(0|[1-9]\d{0,3})\.(0|[1-9]\d{0,4})\.(0|[1-9]\d{0,5})$/;
function rQs(e, n) {
  if (!r9.test(e) || !r9.test(n)) return !1;
  let t = e.split(".").map(Number),
    r = n.split(".").map(Number);
  for (let s = 0; s < 3; s++) if (t[s] !== r[s]) return t[s] > r[s];
  return !1;
}
var e5 = /^[a-z][a-z0-9]{0,23}$/;
function DU(e) {
  return typeof e === "string" && e !== wwt && r9.test(e) ? e : null;
}
function oQs(e, n) {
  if (n.version === wwt) return [];
  let t = new Set(n.capabilities);
  return Object.keys(e).filter((r) => !t.has(r));
}
var T$ = "artifact",
  t5 = "self";
function sQs(e) {
  return e !== void 0 && (Object.hasOwn(e, T$) || Object.hasOwn(e, t5));
}
function re(e) {
  let n = xw(e);
  if (n === ip) return;
  if (n !== void 0) {
    let t = n.map((r) => re(r));
    return t.includes(void 0) ? void 0 : `[${t.join(",")}]`;
  }
  if (e !== null && typeof e === "object") {
    let t = e,
      r = Object.keys(t)
        .sort()
        .map((s) => {
          let i = re(t[s]);
          return i === void 0 ? void 0 : `${JSON.stringify(s)}:${i}`;
        });
    return r.includes(void 0) ? void 0 : `{${r.join(",")}}`;
  }
  return JSON.stringify(e) ?? "null";
}
function se(e, n) {
  let t = re(e);
  return t !== void 0 && t === re(n);
}
function kzo(e) {
  if (!Object.hasOwn(e, T$)) return e;
  if (Object.hasOwn(e, t5)) {
    if (!se(e[T$], e[t5])) return e;
    let t = {};
    for (let [r, s] of Object.entries(e)) if (r !== T$) H(t, r, s);
    return t;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) H(n, t === T$ ? t5 : t, r);
  return n;
}
function nn(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return e;
  let n = e;
  if (!Object.hasOwn(n, t5)) return e;
  if (Object.hasOwn(n, T$) && !se(n[T$], n[t5])) return e;
  let t = {};
  for (let [r, s] of Object.entries(n)) {
    if (r === t5) {
      if (!Object.hasOwn(n, T$)) H(t, T$, s);
      continue;
    }
    H(t, r, s);
  }
  return t;
}
function iQs(e, n) {
  let t = Object.hasOwn(e, T$),
    r = Object.hasOwn(e, t5);
  if ((!t && !r) || n.version === wwt) return { caps: e };
  let s = new Set(n.capabilities),
    i = s.has(T$) ? T$ : s.has(t5) ? t5 : null;
  if (i === null) return { caps: e };
  if (t && r) {
    if (!se(e[T$], e[t5]))
      return {
        errMsg:
          "capabilities declares both `artifact` and `self` \u2014 two " +
          "spellings of the same capability \u2014 with different configs. " +
          "Declare it once (canonically `artifact: {}`)."
      };
  }
  let l = {};
  for (let [c, d] of Object.entries(e)) {
    if (c === T$ || c === t5) {
      if (!Object.hasOwn(l, i)) H(l, i, d);
      continue;
    }
    H(l, c, d);
  }
  return { caps: l };
}
function vwt(e) {
  return "capabilities" in e ? e.capabilities : void 0;
}
var oe = new Set([T$, t5, "downloads", "comments", "room", "db", "assets", "user"]);
function JGr(e) {
  return de(e, oe);
}
var tn = new Set(["downloads", "room", "db", "assets", "user"]);
function QGr(e) {
  return (
    e !== null &&
    JGr(e) &&
    de(e, tn) &&
    Object.entries(e).every(([n, t]) => {
      if (t === !0) return !0;
      if (!SV(t)) return !1;
      switch (n) {
        case "db":
          return !("wake" in t) && _zo(t);
        case "user":
          return yzo(t) && (gzo(t) ?? []).every((r) => r === "profile");
        default:
          return Object.keys(t).length === 0;
      }
    })
  );
}
var xe = new Set([...oe, "mcp", "flags"]);
function Tzo(e) {
  return de(e, xe);
}
function aQs(e) {
  return e.every((n) => xe.has(n));
}
function de(e, n) {
  return e == null || (le(e) && Object.keys(e).every((t) => n.has(t)));
}
var rn = new RegExp(`^${wH.source}$`, "u");
function sn(e) {
  return (
    $3o.test(e) &&
    !/^[\p{P}\p{M}]$/u.test(e) &&
    !rn.test(e) &&
    !Prt(e.codePointAt(0) ?? 0) &&
    !ue.test(e)
  );
}
function on(e) {
  let n = Array.from(e).slice(0, K + 1),
    t = n.length,
    r = n.map(sn),
    s = n.map((a, b) => r[b] || /^\p{M}$/u.test(a) || Prt(a.codePointAt(0) ?? 0)),
    i = n.map((a, b) => !r[b] && /^[\p{L}\p{N}]$/u.test(a)),
    l = Array(t).fill(!1),
    c = Array(t).fill(!1),
    d = !1;
  for (let a = 0; a < t; a++) ((l[a] = d), (d = i[a] || (s[a] && d)));
  d = !1;
  for (let a = t - 1; a >= 0; a--) ((c[a] = d), (d = i[a] || (s[a] && d)));
  let m = new Set();
  for (let a = 0; a < t; a++) if (r[a] && l[a] && c[a]) m.add(a);
  return m;
}
function an(e) {
  let n = on(e),
    t = we(e),
    r = "none",
    s = -1;
  return (i) => {
    s++;
    let l = i.codePointAt(0) ?? 0;
    if (t(i, s)) return ((r = "none"), !0);
    if (n.has(s)) return ((r = "none"), !0);
    if (Prt(l)) {
      let c = Vor(l, r);
      return ((r = c.after), !c.rides);
    }
    if (ue.test(i)) return ((r = "none"), !0);
    return ((r = Kor(i)), !1);
  };
}
function $e(e, n, t) {
  let r = [],
    s = 0;
  for (let i of e) {
    let l = n(i) ? ne(i) : i,
      c = l === i ? 1 : l.length;
    if (s + c > t) return { text: r.join(""), cut: !0 };
    (r.push(l), (s += c));
  }
  return { text: r.join(""), cut: !1 };
}
function un(e) {
  let n = e,
    t = !1;
  if (typeof e === "string") ({ text: n, cut: t } = $e(e, an(e), K));
  let r = Lkt((Kf(ny(n, { max: K })) ?? "?").replace(/[;,(){}]/g, " ")).trim() || "?";
  return t ? `${r}\u2026` : r;
}
function ZGr(e) {
  if (!e) return "";
  let n = [],
    t = [],
    r;
  for (let [a, b] of Object.entries(e)) {
    let y = a === "mcp" ? Fe(b) : void 0,
      C = a === "mcp" && MGt(b);
    if (y === ip) ((r = C ? `${OGt} + ${n5}` : n5), n.unshift("mcp"));
    else if (y !== void 0 && y.length > 0) {
      let O = oH(y, 8, (P) => {
        let E = B(P),
          z = E === null ? ip : xw(E?.tools),
          N = be(z) ?? 0;
        return `${un(E?.server)}[${z === ip ? "?" : N} ${I(N, "tool")}]`;
      }).join(", ");
      ((r = C ? `${OGt} + ${O}` : O), n.unshift("mcp"));
    } else if (C) ((r = OGt), n.unshift("mcp"));
    else if (oe.has(a)) {
      let O = B(b),
        P = O === null ? ip : xw(O?.rules),
        E = be(P);
      t.push(P === void 0 ? a : `${a}[${P === ip ? "?" : E} ${I(E ?? 0, "rule")}]`);
    } else n.push(e5.test(a) ? a : Ne);
  }
  let s = n.length + t.length;
  if (s === 0) return "";
  let i = [...n, ...t.slice(0, Math.max(0, 8 - n.length))],
    l = s > 8 ? `[${s} total]; ` : "",
    c = l + i.join("; ");
  if (r !== void 0) {
    let a = i.slice(1).join("; "),
      b = a === "" ? "" : "; ",
      y = Math.max(16, 400 - Array.from(l + a + b).length - 6),
      C = Array.from(r),
      O = C.length > y ? C.slice(0, y).join("") + "\u2026" : r;
    c = `${l}mcp: ${O}${b}${a}`;
  }
  let d = Array.from(c);
  return ` (${d.length > 400 ? d.slice(0, 400).join("") + "\u2026" : d.join("")})`;
}
function lQs(e, n) {
  let t = te(e ?? {}),
    r = Object.keys(te(n ?? {})).filter((l) => !Object.hasOwn(t, l)),
    s = (l) => (l === "mcp" ? 0 : oe.has(l) ? 2 : 1),
    i = r.sort((l, c) => s(l) - s(c)).map((l) => (e5.test(l) ? l : Ne));
  if (!r.includes("mcp")) {
    if (MGt(n?.mcp) && !MGt(e?.mcp)) i.unshift(cn);
    else if (fn(e?.mcp, n?.mcp)) i.unshift(ln);
  }
  return i;
}
var Ne = "invalid-name",
  ln = "mcp (more servers or tools)",
  OGt = "any connector the viewer approves",
  cn = `mcp (${OGt})`,
  dn =
    "This page's connector declaration is dynamic: beyond any servers it lists, the page can ask each viewer for any connector by name at call time, and the viewer approves each at first use. Connectors and tools the page calls without listing them were not checked against this session. Tell the user which connectors and tools the page calls, and that those integrations are unverified unless one real call was made.";
function MGt(e) {
  return B(e)?.dynamic === !0;
}
function fn(e, n) {
  if (n === void 0) return !1;
  let t = ye(n);
  if (t === void 0) return !0;
  let r = new Map();
  for (let s of ye(e) ?? []) {
    let i = B(s),
      l = i?.server;
    if (typeof l === "string") r.set(l, new Set(eoe(i?.tools) ?? []));
  }
  return t.some((s) => {
    let i = B(s),
      l = i?.server,
      c = typeof l === "string" ? r.get(l) : void 0,
      d = eoe(i?.tools);
    return c === void 0 || d === void 0 || d.some((m) => !c.has(m));
  });
}
function Fe(e) {
  let n = B(e);
  return n === null ? ip : n === void 0 ? void 0 : xw(n.servers);
}
function ye(e) {
  let n = Fe(e);
  return n === ip ? void 0 : n;
}
function be(e) {
  return e === void 0 || e === ip ? void 0 : e.length;
}
function oH(e, n, t) {
  if (e.length <= n) return e.map(t);
  return [`[${e.length} total]`, ...e.slice(0, n).map(t)];
}
function Te(e) {
  return (
    e != null &&
    typeof e === "object" &&
    "servers" in e &&
    Array.isArray(e.servers) &&
    e.servers.length > 0
  );
}
function ny(e, n) {
  if (typeof e !== "string") return "?";
  let t = n?.max ?? 64,
    r = Array.from(e.slice(0, 2 * t), (s) => (zx(s.codePointAt(0) ?? 0) ? " " : s))
      .slice(0, t)
      .join("")
      .replace(Bz, " ")
      .replace(/\s+/g, " ");
  return r.trim() === "" ? "?" : r;
}
function Zgn(e, n) {
  let t = ny(e, { max: n }).replace(Bz, " ").trim();
  return t !== "" && t !== "?" ? t : void 0;
}
export {
  itt,
  PLe,
  PGt,
  ILe,
  P7n,
  fCe,
  Oy,
  QT,
  Dce,
  Qgn,
  JJs,
  att,
  ZA,
  Zre,
  pzo,
  mzo,
  I7n,
  Wm,
  O7n,
  ltt,
  SV,
  M7n,
  gzo,
  hzo,
  yzo,
  qGr,
  YGr,
  _zo,
  bzo,
  Szo,
  wzo,
  QJs,
  ZJs,
  eQs,
  uz,
  vzo,
  wwt,
  D7n,
  tQs,
  nQs,
  H7n,
  L7n,
  dtt,
  IGt,
  Ezo,
  ctt,
  XGr,
  r9,
  rQs,
  e5,
  DU,
  oQs,
  T$,
  t5,
  sQs,
  kzo,
  iQs,
  vwt,
  JGr,
  QGr,
  Tzo,
  aQs,
  ZGr,
  lQs,
  OGt,
  MGt,
  oH,
  ny,
  Zgn
};

//# sourceMappingURL=chunk-6dwr3g2n.js.map
