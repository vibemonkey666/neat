// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { De } from "./chunk-2qx8pe6s.js";
import { U, q } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { g, m } from "./chunk-brszmkb3.js";
import { QU, Xk, GVe, $V, k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { Vi } from "./chunk-at88wjsn.js";
import { cM, u_, Kue } from "./chunk-jwqtbev0.js";
import { bo } from "./chunk-9zd34fgb.js";
import { ha } from "./chunk-cqrqqt4t.js";
import { ey, lfn, _re, zQ } from "./chunk-4sp6n814.js";
import { qoe, Psi } from "./chunk-6t3m5fvf.js";
var M = 16,
  Y = 64;
function b(e, n) {
  if (e.startedAt !== n.startedAt) return e.startedAt < n.startedAt;
  let s = e.procStart ?? "",
    i = n.procStart ?? "";
  if (s !== i) return s < i;
  return e.pid < n.pid;
}
function L(e, n, s) {
  return n.filter(
    (i) => i.pid !== s && i.name !== void 0 && i.procStart !== void 0 && bo(i.name) === e
  );
}
function D(e) {
  return new Set(e.flatMap((n) => (n.name === void 0 ? [] : [bo(n.name)])));
}
function O(e, n, s = qoe) {
  let i = (r) => `${re(e, cM - r.length - 1)}-${r}`;
  for (let r = 0; r < M; r++) {
    let u = i(s());
    if (!n.has(bo(u))) return u;
  }
  for (let r = 2; ; r++) {
    let u = i(`${s()}-${r}`);
    if (!n.has(bo(u))) return u;
  }
}
function B(e) {
  let { desiredName: n, self: s, live: i, moment: r, slug: u } = e,
    c = e.suffixBase ?? n,
    p = bo(n);
  if (!p) return { kind: "keep" };
  let f = L(p, i, s.pid),
    o =
      r === "rename"
        ? f
        : r === "startup"
          ? f.filter((a) => b(a, s))
          : f.filter((a) =>
              b(
                { ...a, startedAt: a.nameSince ?? a.startedAt },
                { ...s, startedAt: s.nameSince ?? s.startedAt }
              )
            );
  if (o.length === 0) return { kind: "keep" };
  return { kind: "yield", newName: O(c, D(i), u), holders: o };
}
class A {
  correspondents = new Map();
  senderMode = null;
  userTypedName = void 0;
  hasAdopter = !1;
  lastYield = void 0;
  yielded = De();
  pendingYield = void 0;
  noteCorrespondent(e, n, s) {
    if (!e || u_(e).scheme !== "uds") return;
    if (
      (this.correspondents.delete(e),
      this.correspondents.set(e, { pid: n, procStart: s }),
      this.correspondents.size > Y)
    ) {
      let i = this.correspondents.keys().next().value;
      if (i !== void 0) this.correspondents.delete(i);
    }
  }
  announceYield(e, n) {
    ((this.pendingYield = [e, n]), this.yielded.emit(e, n));
  }
  reset() {
    (this.correspondents.clear(),
      (this.lastYield = void 0),
      this.yielded.clear(),
      (this.pendingYield = void 0),
      (this.senderMode = null),
      (this.userTypedName = void 0),
      (this.hasAdopter = !1));
  }
}
var F = new W(() => new A());
function jT() {
  return F.of(U().host);
}
function hLo() {
  let e = Xk();
  return e !== void 0 &&
    (e.source === "user" || e.source === "collision") &&
    jT().userTypedName === e.name
    ? e.name
    : void 0;
}
function yLo(e, n, s) {
  jT().noteCorrespondent(e, n, s);
}
function f$r() {
  let e = jT(),
    n = e.pendingYield;
  return ((e.pendingYield = void 0), n);
}
var N = { whenRegistered: GVe, listLive: _re };
function C() {
  return k("tengu_session_name_uniqueness", !0);
}
async function Kdn(e, n, s = N, i = e) {
  if (!C()) return { name: e, yielded: !1 };
  if (((i = P(i) ?? i), !(await s.whenRegistered()))) return { name: e, yielded: !1 };
  try {
    let r = q(),
      u = (await s.listLive()).filter((a) => a.pid === process.pid || a.sessionId !== r),
      c = u.find((a) => a.pid === process.pid);
    if (!c) return { name: e, yielded: !1 };
    let p = B({ desiredName: e, self: c, live: u, moment: n, slug: s.slug, suffixBase: i });
    if (p.kind === "keep") return { name: e, yielded: !1 };
    let f = I(e, c),
      o = Vi(f !== void 0 && bo(f) !== bo(e) ? f : p.newName) || p.newName;
    return (
      t(
        `[session-name] "${e}" is held by live pid ${p.holders[0]?.pid}; this session takes "${o}"`,
        { level: "info" }
      ),
      g("session_name_collision"),
      (jT().lastYield = { base: bo(i), name: o }),
      { name: o, yielded: !0 }
    );
  } catch (r) {
    return (
      t(`[session-name] uniqueness check failed, keeping "${e}": ${d(r)}`, { level: "warn" }),
      m("session_name_collision", "check_failed"),
      { name: e, yielded: !1 }
    );
  }
}
function I(e, n) {
  let s = h7e(e, n.name);
  if (s !== void 0) return s;
  let i = n.name,
    r = i === void 0 ? void 0 : T(i);
  if (i === void 0 || r === void 0) return;
  let u = P(e) ?? e,
    c = re(u, cM - r.suffix.length - 1);
  return r.base.toLowerCase() === c.toLowerCase() ? i : void 0;
}
function T(e) {
  let n = /-([a-z]+-[a-z]+)(-\d{1,4})?$/i.exec(e);
  if (!n || !Psi(n[1].toLowerCase())) return;
  let s = e.slice(0, e.length - n[0].length);
  return s.length > 0 ? { base: s, suffix: n[0].slice(1) } : void 0;
}
function h7e(e, n) {
  if (!C()) return;
  let s = jT().lastYield,
    i = P(e) ?? e;
  return s !== void 0 && n !== void 0 && bo(s.name) === bo(n) && s.base === bo(i) ? n : void 0;
}
function w(e) {
  let n = Xk();
  return n !== void 0 && bo(n.name) === bo(e);
}
function P(e) {
  return T(e)?.base;
}
var z = 3000;
function R(e) {
  setTimeout(e, z).unref();
}
async function _Lo(e) {
  let { sessionNameArg: n, interactive: s, writeName: i, onRenamed: r, deps: u } = e,
    c = e.scheduleRecheck ?? R;
  if (n && s) jT().userTypedName = n;
  if (n) await i(n, e.sessionNameArgSource ?? "user");
  let p = Xk();
  if (!s || !p || p.source === "derived") return;
  let f = async (o, a, S = o) => {
    if (a && !w(o)) return;
    let l = await Kdn(o, a ? "recheck" : "startup", u, S);
    if (!w(o)) return;
    if (!l.yielded) {
      if (!a) c(() => void f(o, !0));
      return;
    }
    if (jT().userTypedName === o) jT().userTypedName = l.name;
    if ((await i(l.name, "collision"), r?.(l.name, o), jT().announceYield(l.name, o), !a))
      c(() => void f(l.name, !0, o));
  };
  await f(p.name, !1);
}
function T5n(e) {
  let { name: n, onYield: s, deps: i } = e,
    r = e.suffixBase ?? n;
  (e.scheduleRecheck ?? R)(() => {
    (async () => {
      if (!w(n)) return;
      let c = await Kdn(n, "recheck", i, r);
      if (!c.yielded || !w(n)) return;
      if (jT().userTypedName === n) jT().userTypedName = c.name;
      await s(c.name, n);
    })();
  });
}
function p$r(e, n, s) {
  let i = Xk();
  if (i === void 0 || i.source === "derived" || i.source === "auto") return;
  if (i.source === "collision" && h7e(e?.name ?? n, i.name) !== void 0) return;
  let r = bo(i.name);
  if ((e !== void 0 && r === bo(e.name)) || r === bo(n) || r === bo(s)) return;
  return i;
}
async function nre(e, n, s = {}) {
  let i = s.deps ?? N,
    r = e ? Vi(e) : "";
  if (!r) return;
  let u = QU(),
    c = u.adoptions,
    p = ++u.restores,
    f = () => u.adoptions === c && (!s.yieldToLaterRestore || u.restores === p);
  if (!(await i.whenRegistered()) || !f()) return;
  if (s.keepLaunchName && Xk()?.givenAtLaunch) return;
  if (s.autoOnly) {
    await $V(r, n, "auto");
    return;
  }
  let o = Xk();
  if (o !== void 0 && o.source !== "auto" && o.source !== "derived" && bo(o.name) === bo(r)) return;
  let a = await Kdn(r, "rename", i);
  if (!f() || p$r(o, r, a.name)) return;
  let S = Xk();
  if (
    s.source === "auto" &&
    S !== void 0 &&
    S.source !== "derived" &&
    (S.name !== o?.name || S.source !== o.source)
  )
    return;
  let l = s.source === "auto" ? "auto" : "collision",
    h = async (y, x) => {
      if (l === "auto" && Xk()?.source !== "auto") return;
      (await $V(y, n, l), jT().announceYield(y, x));
    };
  if (!a.yielded) {
    (await $V(r, n, s.source), T5n({ name: r, deps: i, onYield: h }));
    return;
  }
  if ((await $V(a.name, n, l), jT().userTypedName === r)) jT().userTypedName = a.name;
  if ((T5n({ name: a.name, suffixBase: r, deps: i, onYield: h }), a.name === o?.name)) return;
  jT().announceYield(a.name, r);
}
async function bLo(e, n, s, i, r = lfn, u = N.listLive) {
  if (!C() || !ha() || jT().correspondents.size === 0) return;
  let c = zQ(),
    [p, f, o] = [e, n, s].map(Vi),
    a = `This session was renamed from "${p}" to "${f}" ("${o}" is held by another live session on this machine). Address this one as "${f}" from now on.`,
    S;
  try {
    S = new Map((await u(i)).map((l) => [l.pid, l.sock]));
  } catch (l) {
    t(`[session-name] rename notice skipped: registry unreadable (${E(l) ?? d(l)})`);
    return;
  }
  await Promise.all(
    [...jT().correspondents].map(async ([l, { pid: h, procStart: y }]) => {
      let { scheme: x, target: v } = u_(l);
      if (x !== "uds" || !v || (c !== void 0 && Kue(v, c)) || S.get(h) !== v) return;
      try {
        await r(v, a, i, f, void 0, void 0, jT().senderMode?.(), {
          trackReceipts: !1,
          expectPeerPid: h,
          ...(y !== void 0 && { expectPeerProcStart: y })
        });
      } catch (_) {
        t(`[session-name] rename notice to ${ey(l)} failed: ${E(_) ?? "send error"}`);
      }
    })
  );
}
export { jT, hLo, yLo, f$r, Kdn, h7e, _Lo, T5n, p$r, nre, bLo };

//# sourceMappingURL=chunk-4n57vbs9.js.map
