// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { G } from "./chunk-fs43t96t.js";
import { g, f } from "./chunk-brszmkb3.js";
import { I } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { ck } from "./chunk-13nwb0xt.js";
import { bj } from "./chunk-9r0d28dm.js";
import { DG } from "./chunk-gwryn340.js";
import { ij, Z } from "./chunk-p27rr8yn.js";
import { eG, Lme, Yae, P9e } from "./chunk-2nwr73hs.js";
import { u$ } from "./chunk-tzm7jehf.js";
import { H2s } from "./chunk-j9t13sne.js";
import { OSt } from "./chunk-wany0nxw.js";
import { createHash as M } from "crypto";
import { readFile as U, stat as z, unlink as K } from "fs/promises";
function ame(e, i, n) {
  return e.ver === i && (e.observers === void 0 || Object.hasOwn(e.observers, n));
}
function O(e, i, n) {
  return ame(e.getArtifactReadObservation(i), n, e.agentId ?? "main") && !Lme(e.agentId, i, n);
}
function zwr(e) {
  return e.fileReadingLimits?.maxTokens ?? bj().maxTokens;
}
function UOt(e, i) {
  let n = zwr(i),
    t = [],
    d = 0,
    r = 0;
  while (r <= e.length) {
    let o = e.indexOf(
        `
`,
        r
      ),
      u = o === -1 ? e.length : o;
    if ((d++, OSt(e.slice(r, u), "html") > n / 4)) t.push({ line: d, start: r, end: u });
    r = u + 1;
  }
  return {
    lines: d,
    unterminated: !e.endsWith(`
`),
    overlong: t
  };
}
var T = 3,
  X = 8,
  Q = 32;
function jQt({ html: e, ver: i, shape: n, sent: t, recorded: d, lineCount: r = !0 }) {
  let o = (s) => s.toLocaleString("en-US"),
    u = n.unterminated ? n.lines : n.lines - 1,
    b = `version ${i}: ${o(Buffer.byteLength(e))} bytes${r ? `, ${o(u)} ${I(u, "line")}` : ""}`;
  if (n.overlong.length === 0)
    return `${b}, ${r ? "each" : "every line"} short enough to Read with offset/limit`;
  let p = (t !== void 0 && n.overlong.length <= Q ? t : void 0)?.replace(
      /\r\n/g,
      `
`
    ),
    C;
  try {
    C = p === void 0 ? void 0 : P9e(p);
  } catch (s) {
    if (!(s instanceof Yae)) throw s;
  }
  let P =
      p === void 0
        ? void 0
        : new Set([
            ...p.split(`
`),
            ...(C?.split(`
`) ?? [])
          ]),
    y = n.overlong.map((s) => {
      let B = e.slice(s.start, s.end).replace(/\r$/, ""),
        A = P === void 0 ? void 0 : P.has(B) ? "same" : "differs";
      return { line: s.line, chars: s.end - s.start, verdict: A };
    }),
    x = y.slice(0, T),
    R = y.slice(T),
    v = R.length,
    a = R.filter((s) => s.verdict === "differs"),
    H = v > 0 && R.every((s) => s.verdict === "same"),
    h = a.slice(0, X).map((s) => o(s.line)),
    m = a.length - h.length,
    S =
      a.length === 0
        ? H
          ? ", none differing from what you sent"
          : ""
        : `, of which ${I(a.length, "line")} ${h.join(", ")}${m > 0 ? ` and ${o(m)} more` : ""} ${a.length === 1 ? "differs" : "differ"} from what you sent`,
    w = (s) =>
      `line ${o(s.line)} (${o(s.chars)} characters${s.verdict === "differs" ? ", which differs from the content you sent" : s.verdict === "same" ? ", identical to a line you sent" : ""})`;
  return (
    `${b}; a single Read may not return ${x.map(w).join(", or ")}${v > 0 ? `, or ${o(v)} more such ${I(v, "line")}${S}` : ""}` +
    (d
      ? " \u2014 no whole Read of it is needed: Read the lines you need with offset/limit, and take those long lines from the saved file, never from your own copy"
      : "")
  );
}
async function Zct(
  {
    filepath: e,
    persistId: i,
    html: n,
    slug: t,
    ver: d,
    confirmsResend: r,
    batch: o,
    heldSkipsRead: u
  },
  b
) {
  let c = b.agentId ?? "main",
    { lines: p, overlong: C } = UOt(n, b),
    P = C.length === 0,
    y = O(b, t, d),
    x = y && u ? "held" : "unverifiable",
    R = ut(e),
    v;
  if (J()) DG("handover_read");
  else
    v = await ck(R).catch(() => {
      return;
    });
  if (v === void 0) return x === "held" ? "held" : "unexaminable";
  let a = M("sha256").update(n).digest("hex"),
    H = Z().pendingHandoverReads,
    h = H.get(R),
    m = h !== void 0 && h.slug === t && h.ver === d && h.contentHash === a ? h : void 0;
  if (m !== void 0) m.mtimeMs = v;
  if (!P) return x;
  let S = y && u;
  if (m !== void 0) {
    if ((m.handedTo.add(c), S)) return (m.completedBy.add(c), "held");
    if (r) m.confirmsResendFor.set(c, o ?? "");
    else m.confirmsResendFor.delete(c);
    return (m.completedBy.delete(c), m.unrecordableBy.has(c) ? "unverifiable" : "pending");
  }
  let w = new Set();
  for (let [B, A] of H)
    if (A.slug === t) {
      for (let W of A.unrecordableBy) w.add(W);
      H.delete(B);
    }
  let s = !n.endsWith(`
`);
  return (
    H.set(R, {
      slug: t,
      ver: d,
      mtimeMs: v,
      totalLines: p,
      unterminated: s,
      contentHash: a,
      bytes: Buffer.byteLength(n),
      requiredLines: s ? p : p - 1,
      linesReturned: new Map(),
      linesPrepared: new Map(),
      completedBy: new Set(S ? [c] : []),
      handedTo: new Set([c]),
      unrecordableBy: w,
      persistId: i,
      confirmsResendFor: new Map(r ? [[c, o ?? ""]] : [])
    }),
    S ? "held" : w.has(c) ? "unverifiable" : "pending"
  );
}
async function D0n(e, i, n) {
  for (let [t, d] of Z().pendingHandoverReads)
    if (d.slug === e && d.ver === i) {
      let r = await ck(t).catch(() => {
        return;
      });
      return r !== void 0 && r !== d.mtimeMs
        ? { persistId: `${n}-${Date.now().toString(36)}`, editedCopy: t }
        : { persistId: d.persistId };
    }
  return { persistId: n };
}
async function B3e(e, i) {
  let n = ut(e),
    t = Z().pendingHandoverReads,
    d = t.get(n);
  if (d === void 0) return;
  if (M("sha256").update(i).digest("hex") !== d.contentHash) {
    t.delete(n);
    return;
  }
  let r = await ck(n).catch(() => {
    return;
  });
  if (r !== void 0) d.mtimeMs = r;
}
function N(e, i, n) {
  for (let [t, d] of Z().pendingHandoverReads)
    if (
      d.slug === i &&
      (n === void 0 || d.ver === n) &&
      d.handedTo.has(e) &&
      !d.completedBy.has(e) &&
      !d.unrecordableBy.has(e)
    )
      return [t, d];
  return;
}
function WQt(e, i, n) {
  return N(e ?? "main", i, n) !== void 0;
}
function _(e, i, n, t = !1) {
  let d = e.agentId ?? "main",
    r = N(d, i, n);
  if (r === void 0) return;
  let o = r[1];
  return V(o, e) || (!t && O(e, i, o.ver)) ? void 0 : r;
}
function Kwr(e, i, n, { ignoreHold: t = !1 } = {}) {
  let d = _(e, i, n, t);
  return d === void 0 ? void 0 : k(d[0], d[1], e.agentId);
}
async function Qfo(e, i, n) {
  let t = _(e, i, n);
  if (t === void 0) return;
  let [d, r] = t,
    o;
  try {
    o = (await ck(d)) === r.mtimeMs ? "intact" : "changed";
  } catch (u) {
    o = G(u) ? "changed" : "unknown";
  }
  return { ...k(d, r, e.agentId), file: o };
}
function k(e, i, n) {
  return {
    path: e,
    slug: i.slug,
    ver: i.ver,
    lines: i.requiredLines,
    unterminated: i.unterminated,
    unread: D(i.linesReturned.get(n ?? "main") ?? [], i.requiredLines)
  };
}
function Zfo(e, i, n) {
  let t = _(e, i, n);
  return t !== void 0 && q(t[1], e.agentId, e.agentId ?? "main") === void 0;
}
function epo(e, i, n, t) {
  _(e, i, n)?.[1].confirmsResendFor.set(e.agentId ?? "main", t);
}
function Vwr({ lines: e, unterminated: i, unread: n }) {
  let t = n.reduce((d, [r, o]) => d + o - r + 1, 0);
  return (
    `${e} ${I(e, "line")}` +
    (i
      ? `; the last has no trailing newline, so \`wc -l\` reports ${e - 1} \u2014 Read through line ${e} and leave the file as it is`
      : "") +
    (t > 0 && t < e
      ? `; you have not yet Read ${I(t, "line")} ${n.map(([d, r]) => (d === r ? `${d}` : `${d}-${r}`)).join(", ")}`
      : "")
  );
}
function j3e(e, i, n, t) {
  let d = Kwr(e, i, n, t);
  return d === void 0 ? "" : ` (${Vwr(d)})`;
}
function D(e, i) {
  let n = [],
    t = 0;
  for (let [d, r] of F(e)) {
    if (d > t) n.push([t + 1, Math.min(d, i)]);
    if (((t = Math.max(t, r)), t >= i)) break;
  }
  if (t < i) n.push([t + 1, i]);
  return n;
}
async function tpo(e, i) {
  if ((Z().pendingHandoverReads.delete(ut(e)), H2s(i, e), J())) DG("handover_discard");
  else await K(e).catch(() => {});
}
var L = {
  artifactRead: void 0,
  remaining: void 0,
  commit: () => {
    return;
  }
};
async function WTi(e, i, n, t) {
  try {
    let d = Z().pendingHandoverReads,
      r = d.get(e),
      o = i.agentId ?? "main";
    if (r === void 0 || n === void 0 || t.lineCount <= 0 || r.completedBy.has(o)) return L;
    if (Math.floor(t.mtimeMs) !== r.mtimeMs || t.totalLines !== r.totalLines)
      return (f("artifact_handover_read", "file_changed"), L);
    if (j(r, e, i)) return L;
    let u = [t.firstLine, t.firstLine + t.lineCount],
      b = await ee(e, r.bytes, r.contentHash);
    if (b === "changed") return (d.delete(e), f("artifact_handover_read", "file_changed"), L);
    if (b === "unreadable") f("artifact_handover_read", "file_unreadable");
    let c = b === "holds",
      p = (r.linesPrepared.get(o) ?? []).filter((a) => a.messageId === n),
      C = F([...(r.linesReturned.get(o) ?? []), ...p.map((a) => a.range), u]),
      P = E(C, r.requiredLines),
      y = { messageId: n, range: u };
    r.linesPrepared.set(o, [...p, y]);
    let x = () => {
        try {
          let a = r.linesPrepared.get(o) ?? [];
          if (d.get(e) !== r || r.completedBy.has(o) || !a.includes(y)) return;
          let H = a.filter((m) => m !== y);
          if (H.length > 0) r.linesPrepared.set(o, H);
          else r.linesPrepared.delete(o);
          let h = F([...(r.linesReturned.get(o) ?? []), u]);
          if (!c || !E(h, r.requiredLines)) {
            r.linesReturned.set(o, h);
            return;
          }
          return (
            r.linesReturned.delete(o),
            r.completedBy.add(o),
            Y(r, e, i, n, o) ? { slug: r.slug, ver: r.ver } : void 0
          );
        } catch (a) {
          l(a);
          return;
        }
      },
      R = !r.unrecordableBy.has(o),
      v = R && r.handedTo.has(o) && !O(i, r.slug, r.ver);
    return {
      artifactRead: P && c && R ? { slug: r.slug, ver: r.ver } : void 0,
      remaining: P || !v ? void 0 : { ...k(e, r, i.agentId), unread: D(C, r.requiredLines) },
      commit: x
    };
  } catch (d) {
    return (l(d), L);
  }
}
function V(e, i) {
  let n = i.getArtifactReadObservation(e.slug).ver;
  return n !== void 0 && n !== e.ver && (u$(n, e.ver) ?? 0) > 0;
}
function j(e, i, n) {
  if (V(e, n))
    return (Z().pendingHandoverReads.delete(i), f("artifact_handover_read", "superseded"), !0);
  return !1;
}
function F(e) {
  let i = e.map((t) => [t[0], t[1]]).sort((t, d) => t[0] - d[0]),
    n = [];
  for (let t of i) {
    let d = n.at(-1);
    if (d !== void 0 && t[0] <= d[1]) d[1] = Math.max(d[1], t[1]);
    else n.push(t);
  }
  return n;
}
function E(e, i) {
  let n = e[0];
  return n !== void 0 && n[0] <= 0 && n[1] >= i;
}
function q(e, i, n) {
  let t = Z().refusedPublishBodies.get(ij(i, e.slug)),
    d = e.confirmsResendFor.get(n);
  return d !== void 0 && (t === void 0 || t.batch !== d) ? void 0 : t;
}
function Y(e, i, n, t, d) {
  if (j(e, i, n)) return !1;
  let r = q(e, n.agentId, d),
    o = r?.observedFrom;
  try {
    n.setArtifactReadVersion(e.slug, e.ver, eG(n.agentId, t));
  } finally {
    if (r !== void 0)
      if (o === void 0) delete r.observedFrom;
      else r.observedFrom = o;
  }
  if (ame(n.getArtifactReadObservation(e.slug), e.ver, d)) return (g("artifact_handover_read"), !0);
  return (e.unrecordableBy.add(d), f("artifact_handover_read", "seed_not_persisted"), !1);
}
async function ee(e, i, n) {
  try {
    return (await z(e)).size === i &&
      M("sha256")
        .update(await U(e))
        .digest("hex") === n
      ? "holds"
      : "changed";
  } catch (t) {
    return G(t) ? "changed" : "unreadable";
  }
}
export { ame, zwr, UOt, jQt, Zct, D0n, B3e, WQt, Kwr, Qfo, Zfo, epo, Vwr, j3e, tpo, WTi };

//# sourceMappingURL=chunk-6fdyd2x4.js.map
