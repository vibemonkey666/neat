// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { u5 } from "./chunk-zz58ttwp.js";
import { F, q, Fts } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, d, E, G } from "./chunk-fs43t96t.js";
import { uy, zs } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { _, te, w2, ie, t } from "./chunk-4kxznmzw.js";
import { Ft } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { J8r, iW, iP, Os, aW } from "./chunk-qywdxehb.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { U4t, N8r, h_, ulr, $8r, Sxe, wxe, xR } from "./chunk-13nwb0xt.js";
import { p } from "./chunk-qmkm2x59.js";
import { Hgn } from "./chunk-70kfjmfv.js";
import { cE } from "./chunk-dc0nzty2.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { Axe, Dfi } from "./chunk-4nzy53ma.js";
import { gfe, om, CI } from "./chunk-5rw2zfa0.js";
import { Tb } from "./chunk-1e5yp9hx.js";
import { Ykt, SZ, ln } from "./chunk-7c3thgax.js";
import { Z9s, eXs } from "./chunk-wany0nxw.js";
import { Gi, vo, Pye, Wbt, Gjt, a1o } from "./chunk-d5zj5299.js";
import { vw } from "./chunk-bqffg6mb.js";
import { VLo } from "./chunk-1jwvas5k.js";
import { o, oe, T, u, me, B, A } from "./chunk-0bqrj5ah.js";
import { bB, zfe, jse, y_ } from "./chunk-hc5j8sxy.js";
import { et } from "./chunk-c9re0p40.js";
var tht = 3,
  ZHr = 5000;
function tqn(n, e) {
  if (e === 0) return n;
  return n.map((r) => ({ ...r, oldStart: r.oldStart + e, newStart: r.newStart + e }));
}
function nqn(n, e, r, i) {
  let s = 0,
    h = 0;
  if (n.length === 0 && (r || i))
    ((s = r
      ? Ft(
          r,
          `
`
        ) + 1
      : 0),
      (h = i
        ? Ft(
            i,
            `
`
          ) + 1
        : 0));
  else
    ((s = n.reduce((f, w) => f + F(w.lines, (S) => S.startsWith("+")), 0)),
      (h = n.reduce((f, w) => f + F(w.lines, (S) => S.startsWith("-")), 0)));
  return (
    Fts(s, h),
    VLo()?.add(s, { type: "added", model: Hgn(e) }),
    VLo()?.add(h, { type: "removed", model: Hgn(e) }),
    { lines_added: s, lines_removed: h }
  );
}
function tFt(...n) {
  a("tengu_file_changed", nqn(...n));
}
function ihe({
  filePath: n,
  oldContent: e,
  newContent: r,
  ignoreWhitespace: i = !1,
  singleHunk: s = !1,
  convertTabs: h = !1
}) {
  let f = u5(n, n, e, r, void 0, void 0, {
    ignoreWhitespace: i,
    context: s ? 1e5 : tht,
    timeout: ZHr
  });
  if (!f) return [];
  return h ? nFt(f.hunks) : f.hunks;
}
function J3({ filePath: n, fileContents: e, edits: r, ignoreWhitespace: i = !1 }) {
  let s = u5(
    n,
    n,
    e,
    r.reduce((h, f) => {
      let { old_string: w, new_string: S } = f;
      if ("replace_all" in f ? f.replace_all : !1) return h.replaceAll(w, () => S);
      else return h.replace(w, () => S);
    }, e),
    void 0,
    void 0,
    { context: tht, ignoreWhitespace: i, timeout: ZHr }
  );
  if (!s) return [];
  return nFt(s.hunks);
}
function nFt(n) {
  return n.map((e) => ({ ...e, lines: e.lines.map((r) => r.slice(0, 1) + wxe(r.slice(1))) }));
}
import { join as ze } from "path";
import { randomBytes as pe } from "crypto";
import { constants as ge } from "fs";
import {
  lstat as re,
  open as Te,
  readdir as xe,
  realpath as _e,
  stat as Fe,
  unlink as he
} from "fs/promises";
import { homedir as Re } from "os";
import { basename as Se, dirname as N, join as H } from "path";
function aQ(n) {
  return (n.startsWith("\uFEFF") ? n.slice(1) : n).replaceAll(
    `\r
`,
    `
`
  );
}
var KHr = 1,
  Ie = 64,
  Oe = 1048576,
  VHr = ".proposed-",
  De = /^[0-9a-f]{8}$/,
  Ne = 900000,
  We = {
    userSettings: "user_settings",
    projectSettings: "project_settings",
    localSettings: "local_settings",
    flagSettings: "policy_settings",
    policySettings: "policy_settings"
  },
  Ae = p(() =>
    u({
      id: o().min(1),
      path: o().min(1),
      resolvedPath: o().min(1),
      baseSha256: o().nullable(),
      proposedSha256: o(),
      proposedContent: o(),
      stagedAt: o(),
      by: u({ tool: B(["Write", "Edit"]), origin: B(["local", "served"]), sessionId: o() })
    })
  ),
  Be = p(() => u({ version: A(KHr), entries: T(Ae()) }));
function ne() {
  return H(Re(), ".claude", "state", "settings-review.json");
}
var we = ["policySettings", "flagSettings", ...Tb];
function z(n) {
  let e = vo(n);
  return we.find((r) => {
    let i = ln(r);
    return i !== void 0 && vo(i) === e;
  });
}
async function ye(n) {
  let e;
  try {
    e = await j(n);
  } catch {
    return z(n);
  }
  return J(n, e);
}
async function J(n, e) {
  let r = z(n);
  if (r !== void 0) return r;
  let i = vo(e);
  for (let s of we) {
    let h = ln(s);
    if (h === void 0) continue;
    try {
      if (vo(await j(h)) === i) return s;
    } catch {}
  }
  return;
}
function fe(n) {
  let e = n.content.startsWith("\uFEFF");
  return {
    text: e ? n.content.slice(1) : n.content,
    encoding: n.encoding,
    bom: e,
    lineEndings: n.lineEndings
  };
}
function Y(n) {
  return {
    readStore: async () => {
      try {
        return await hn().read(ne());
      } catch (e) {
        if (G(e)) return;
        throw e;
      }
    },
    writeStore: async (e) => {
      let r = ne();
      (await hn().mkdir(N(r), 448), await hn().atomicWrite(r, e, 384));
    },
    deleteStore: async () => {
      try {
        await hn().delete(ne());
      } catch (e) {
        if (!G(e)) throw e;
      }
    },
    readTarget: async (e) => {
      try {
        return fe(await y_(await Ce(e), om)).text;
      } catch (r) {
        if (G(r)) return null;
        throw r;
      }
    },
    writeTarget: async ({
      path: e,
      resolvedPath: r,
      baseSha256: i,
      content: s,
      blockedOnceWritten: h
    }) => {
      let f;
      try {
        f = await cE(r, [r], { createParents: !0 });
      } catch (v) {
        if (v instanceof h_) return "redirected";
        throw v;
      }
      let w = Se(r),
        S = `${VHr}${pe(4).toString("hex")}`,
        y = H(N(r), iW),
        C = H(N(f.ioPath), `${w}${S}`),
        P = !1;
      try {
        C = N8r(y, f.ioPath, S, !1);
        let v = N(C) !== N(f.ioPath);
        await He(N(C), w);
        let k = async () => {
            let M;
            try {
              M = await f.readExisting(om);
            } catch (ue) {
              if (bB(ue)) return "changed";
              throw ue;
            }
            let ee = M === null ? null : fe(M);
            return (ee === null ? null : et(ee.text)) === i ? ee : "changed";
          },
          I = await k();
        if (I === "changed") return "changed";
        let x = I?.encoding ?? "utf8",
          D = (I?.bom ? "\uFEFF" : "") + Sxe(s, I?.lineEndings ?? "LF"),
          L = Buffer.from(D, x);
        (await aW(C, L, 384), (P = !0));
        let X = v ? C : H(N(r), `${w}${S}`);
        if (await h(X)) return "blocked";
        if ((await k()) === "changed") return "changed";
        let b = await Le(C, X, L);
        if (b === null) return "tampered";
        await f.recheckBeforeWrite();
        let W = await re(C).catch(() => null);
        if (W === null || W.isSymbolicLink() || W.ino !== b.ino || W.dev !== b.dev)
          return "tampered";
        if (v) U4t(y);
        try {
          (await Os(C, f.ioPath), (P = !1));
        } catch (M) {
          if (!iP.has(E(M) ?? "")) throw M;
          await xR(f.ioPath, D, { encoding: x, stagingDir: y, refuseHardLinkedInPlace: !0 });
        }
        let ce = await J(e, r),
          de = ce === void 0 ? void 0 : ln(ce);
        if (de !== void 0) Ykt(de);
        return "written";
      } catch (v) {
        if (v instanceof ulr) return "hard_linked";
        if (v instanceof h_) return "redirected";
        if (v instanceof $8r) return "tampered";
        throw v;
      } finally {
        if (P)
          await he(C).catch((v) => {
            t(
              `settings review store: could not remove the proposal sibling (${d(v)}); the next accept of this file sweeps it`,
              { level: "warn" }
            );
          });
        await f.close();
      }
    },
    locate: j,
    isSettingsFile: async (e) => Pye(e) || (Gjt(e) && Wbt(e, await K())),
    configChangeBlocked: async (e, r, i) => {
      let s = await J(e, r);
      if (s === void 0) return !1;
      if (n?.configChangeHookGate === void 0)
        return (l(Error("settings review store: ConfigChange hook gate not wired")), !0);
      return n.configChangeHookGate(We[s], i);
    },
    afterApplied: async (e, r) => {
      let i = await J(e, r);
      if (i !== void 0) Gi.notifyChange(i);
    },
    now: () => new Date()
  };
}
async function Le(n, e, r) {
  try {
    let i = O() === "windows";
    if (i && (await re(n)).isSymbolicLink()) return null;
    let s = await Te(n, ge.O_RDONLY | (i ? 0 : ge.O_NOFOLLOW));
    try {
      let h = await s.stat();
      if (!h.isFile() || h.nlink !== 1) return null;
      if (et(await s.readFile()) !== et(r)) return null;
      let f = await Fe(e);
      return f.dev === h.dev && f.ino === h.ino ? { dev: h.dev, ino: h.ino } : null;
    } finally {
      await s.close();
    }
  } catch {
    return null;
  }
}
async function He(n, e) {
  let r;
  try {
    r = await xe(n);
  } catch {
    return;
  }
  let i = `${e}${VHr}`,
    s = Date.now() - Ne;
  for (let h of r) {
    if (!h.startsWith(i) || !De.test(h.slice(i.length))) continue;
    try {
      if ((await re(H(n, h))).mtimeMs < s) await he(H(n, h));
    } catch {}
  }
}
async function Ce(n) {
  if (z(n) === "policySettings" || CI(n)) return n;
  let e = await w2(ie(), n);
  return e.linksResolvedPath ?? e.resolvedPath;
}
async function j(n) {
  return ae(await Ce(n));
}
async function ae(n) {
  try {
    return await _e(n);
  } catch (e) {
    if (!G(e) || N(n) === n) throw e;
    return H(await ae(N(n)), Se(n));
  }
}
async function K() {
  return a1o(ae);
}
async function U(n) {
  let e = await n.readStore();
  if (e === void 0) return [];
  let r;
  try {
    r = te(e);
  } catch {
    r = void 0;
  }
  let i = Be().safeParse(r);
  if (!i.success) throw new ve();
  return i.data.entries;
}
class ve extends Error {
  constructor() {
    super("settings review store: malformed or of an unknown version");
  }
}
async function Me(n, e) {
  return (await e.isSettingsFile(n.path)) || (await e.isSettingsFile(n.resolvedPath));
}
async function Z(n, e) {
  if (n.length === 0) {
    await e.deleteStore();
    return;
  }
  await e.writeStore(
    _({ version: KHr, entries: n }, null, 2) +
      `
`
  );
}
async function be(n, e = Y()) {
  let r = await U(e),
    i = await e.readTarget(n.path),
    s = aQ(n.proposedContent),
    h = {
      id: pe(6).toString("hex"),
      path: n.path,
      resolvedPath: await e.locate(n.path),
      baseSha256: i === null ? null : et(i),
      proposedSha256: et(s),
      proposedContent: s,
      stagedAt: e.now().toISOString(),
      by: n.by
    },
    f = vo(h.path),
    w = vo(h.resolvedPath),
    S = [...r.filter((C) => vo(C.path) !== f && vo(C.resolvedPath) !== w), h],
    y = 0;
  while (S.length > Ie || _(S).length > Oe) {
    let C = S.findIndex((P) => P !== h && P.by.sessionId === h.by.sessionId);
    if (C === -1) throw Error("settings review store: no room, proposal not staged");
    (S.splice(C, 1), y++);
  }
  if (y > 0)
    t(`settings review store: full, dropped the ${y} oldest pending proposal(s)`, {
      level: "warn"
    });
  return (await Z(S, e), h);
}
async function wUs(n, e = Y()) {
  let i = (await U(e)).find((w) => w.id === n.id);
  if (i === void 0 || !(await Me(i, e))) return "gone";
  if (_(i) !== _(n) || et(i.proposedContent) !== i.proposedSha256) return "stale";
  if ((await e.locate(i.path)) !== i.resolvedPath) return "redirected";
  let s = await e.readTarget(i.resolvedPath);
  if ((s === null ? null : et(s)) !== i.baseSha256) return "conflict";
  let f;
  try {
    f = await e.writeTarget({
      path: i.path,
      resolvedPath: i.resolvedPath,
      baseSha256: i.baseSha256,
      content: i.proposedContent,
      blockedOnceWritten: (w) => e.configChangeBlocked(i.path, i.resolvedPath, w)
    });
  } catch (w) {
    let S = E(w);
    if (S === "EACCES" || S === "EPERM" || S === "EROFS" || S === "EBUSY") return "not_writable";
    throw w;
  }
  switch (f) {
    case "changed":
      return "conflict";
    case "redirected":
    case "hard_linked":
    case "blocked":
    case "tampered":
      return f;
    case "written":
      break;
  }
  await e.afterApplied(i.path, i.resolvedPath);
  try {
    let w = await U(e);
    await Z(
      w.filter((S) => S.id !== i.id),
      e
    );
  } catch (w) {
    t(`settings review store: applied, but the store could not be updated (${d(w)})`, {
      level: "warn"
    });
  }
  return "applied";
}
async function vUs(n, e = Y()) {
  let r = await U(e),
    i = r.filter((s) => s.id !== n);
  if (i.length === r.length) return !1;
  return (await Z(i, e), !0);
}
async function EUs(n, e = Y()) {
  let r = await U(e),
    i = e.now().getTime(),
    s = r.filter((h) => {
      let f = Date.parse(h.stagedAt);
      return Number.isFinite(f) && f >= n.getTime() && f <= i;
    });
  if (s.length !== r.length || r.length === 0) await Z(s, e);
  return r.length - s.length;
}
function qHr(n, e) {
  let r = (f) => {
      if (f === null) return {};
      try {
        let w = me(o(), oe()).safeParse(te(aQ(f)));
        return w.success ? w.data : void 0;
      } catch {
        return;
      }
    },
    i = r(n),
    s = r(e);
  if (s === void 0) return ["not valid JSON"];
  if (i === void 0) return ["replaces a file that was not valid JSON"];
  let h = [];
  for (let f of new Set([...Object.keys(i), ...Object.keys(s)]))
    if (!(f in i)) h.push(`adds ${f}`);
    else if (!(f in s)) h.push(`removes ${f}`);
    else if (_(i[f]) !== _(s[f])) h.push(`changes ${f}`);
  return h;
}
function $e({ session: n, served: e }) {
  return !e && Axe() && Z9s(n);
}
function YHr({ session: n, served: e, cause: r }) {
  if (r !== "unapproved") return r;
  if ($e({ session: n, served: e })) return "card";
  return !e && Dfi() ? "cloud" : "review";
}
function XHr(n, e) {
  switch (e) {
    case "card":
      return `Not applied: ${n} was NOT modified. In the Claude desktop app, a change to a Claude Code settings file applies only when the user approves that edit on its permission card. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "cloud":
      return `Not applied: ${n} was NOT modified. A change to a Claude Code settings file applies only when a person approves it at the computer that Claude Code runs on, and a cloud session cannot take that approval. Approving the edit in this session does not apply it. The /settings-review command does not run in a cloud session, and on another computer it would not list this change. Tell the user what you meant to change. If the file is committed to a repository, the user can make the change themselves outside this session and push it. Do not retry the edit or try to make the same change another way.`;
    case "linked":
      return `Not applied: ${n} was NOT modified. The user approved this edit on its permission card, but this path reaches a Claude Code settings file through a symbolic link, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "policy":
      return `Not applied: ${n} was NOT modified. The user approved this edit on its permission card, but this path is, or may be, a managed policy settings file or the --settings file, so the approval does not apply it. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`;
    case "review":
      return `Staged for review: ${n} was NOT modified. Changes to Claude Code settings files made without the owner of this computer approving them in person are held for their review; the owner applies or discards them with /settings-review, and the change takes effect only if they accept it. Do not retry the edit or try to make the same change another way.`;
  }
}
class se extends R {
  constructor(n) {
    super(
      `Not written: ${n} was NOT modified. Claude Code could not resolve where its managed settings folder is, so it cannot rule out that this path is a managed settings file, and it does not write the file. Tell the user what you meant to change. Do not retry the edit or try to make the same change another way.`,
      "settings write refused: a managed drop-in directory did not resolve"
    );
  }
}
var eqn = "Staged for your review \xB7 not applied until you accept it in /settings-review";
async function JHr(n, e, r) {
  let i = n.remoteCall !== void 0;
  if (!J8r({ served: i })) return;
  if (i) {
    let { settingsSpellings: y, unclassified: C } = await Pe(e),
      [P] = y;
    if (P !== void 0) return { path: P, cause: "unapproved" };
    if (C !== void 0) throw new se(r.absolutePath);
    return;
  }
  if (n.permissionSurface !== void 0) return;
  let { settingsSpellings: s, unclassified: h, dropIns: f } = await Pe(e),
    [w] = s;
  if (w === void 0) {
    if (h !== void 0) throw new se(r.absolutePath);
    return;
  }
  if (!eXs(n.session, n.toolUseId, r)) return { path: w, cause: "unapproved" };
  let S = await je(r.absolutePath, e, s, f ?? (await K()));
  return S === "covered" ? void 0 : { path: w, cause: S };
}
async function Pe(n) {
  let e = n.some(Gjt) ? await K() : void 0;
  return {
    settingsSpellings: n.filter((r) => Pye(r) || (e !== void 0 && Wbt(r, e))),
    unclassified: e === void 0 || e.allResolved ? void 0 : n.find(Gjt),
    dropIns: e
  };
}
async function je(n, e, r, i) {
  if (!r.includes(n)) return "linked";
  let s = e.filter((f) => f !== n);
  if (await Ge(e, i)) return s.length === 0 ? "policy" : "linked";
  if (s.length === 0) return "covered";
  let h = z(n);
  if (h === void 0) return "linked";
  for (let f of s) if ((await ye(f)) !== h) return "linked";
  return "covered";
}
async function Ge(n, e) {
  if (!e.allResolved || !e.allLocated) return !0;
  let r = new Set();
  for (let i of Ue()) {
    r.add(vw(i));
    try {
      r.add(vw(await j(i)));
    } catch {
      return !0;
    }
  }
  for (let i of n) {
    let s;
    try {
      s = await j(i);
    } catch {
      return !0;
    }
    if (Wbt(i, e) || Wbt(s, e) || r.has(vw(ut(i))) || r.has(vw(s))) return !0;
  }
  return !1;
}
function Ue() {
  let n = ln("flagSettings");
  return [...gfe(SZ()).map((e) => ze(e, "managed-settings.json")), ...(n === void 0 ? [] : [n])];
}
async function QHr(n) {
  let e = n.writeCtx.remoteCall === void 0 ? "local" : "served",
    r;
  try {
    r = await be({
      path: n.absolutePath,
      proposedContent: n.proposedContent,
      by: {
        tool: n.tool,
        origin: e,
        sessionId: n.writeCtx.remoteCall?.origin.callerSessionId ?? q()
      }
    });
  } catch (i) {
    throw (
      m("settings_quarantine", "stage_failed"),
      new R(
        `Could not stage this change to a Claude Code settings file for the owner's review, so nothing was written. (${d(i)})`,
        "settings review store: stage failed"
      )
    );
  }
  return (
    a("tengu_settings_change_staged", {
      origin: c(e),
      tool: c(n.tool),
      source_kind: c(z(n.absolutePath) ?? "other"),
      key_count: qHr(n.currentContent, n.proposedContent).length
    }),
    g("settings_quarantine"),
    r
  );
}
import { open as Ve } from "fs/promises";
var V = 8192,
  BJe = 10485760,
  Q = 10,
  Xe = 13;
async function kUs(n, e, r = 3) {
  let i = await uan(n);
  if (i === null) return null;
  try {
    return await eLr(i, e, r);
  } finally {
    await i.close();
  }
}
async function uan(n) {
  if (zs(n) || uy(n)) return null;
  if (n.includes("\x00")) return null;
  try {
    return await Ve(n, "r");
  } catch (e) {
    if (G(e)) return null;
    throw e;
  }
}
async function eLr(n, e, r) {
  if (e === "") return { content: "", lineOffset: 1, truncated: !1 };
  let i = Buffer.from(e, "utf8"),
    s = 0;
  for (let v = 0; v < i.length; v++) if (i[v] === Q) s++;
  let h,
    f = i.length + s - 1,
    w = Math.max(V, f),
    S = Buffer.allocUnsafe(w + f),
    y = 0,
    C = 0,
    P = 0;
  while (y < BJe) {
    let { bytesRead: v } = await n.read(S, P, w, y);
    if (v === 0) break;
    let k = P + v;
    if (y === 0 && zfe(S.subarray(0, k)) !== "utf8")
      return { content: "", lineOffset: 1, truncated: !1 };
    let I = ke(S, i, k),
      x = i.length;
    if (I === -1 && s > 0)
      ((h ??= Buffer.from(
        e.replaceAll(
          `
`,
          `\r
`
        ),
        "utf8"
      )),
        (I = ke(S, h, k)),
        (x = h.length));
    if (I !== -1) {
      let L = y - P + I;
      return await qe(n, S, L, x, r, C + le(S, 0, I));
    }
    y += v;
    let D = Math.min(f, k);
    ((C += le(S, 0, k - D)), (P = D), S.copyWithin(0, k - P, k));
  }
  return { content: "", lineOffset: 1, truncated: y >= BJe };
}
async function rqn(n) {
  let e = Buffer.allocUnsafe(V),
    r = 0;
  for (;;) {
    if (r === e.length) {
      let s = Buffer.allocUnsafe(Math.min(e.length * 2, BJe + V));
      (e.copy(s, 0, 0, r), (e = s));
    }
    let { bytesRead: i } = await n.read(e, r, e.length - r, r);
    if (i === 0) break;
    if (((r += i), r > BJe)) return null;
  }
  return jse(e.subarray(0, r));
}
function ke(n, e, r) {
  let i = n.indexOf(e);
  return i === -1 || i + e.length > r ? -1 : i;
}
function le(n, e, r) {
  let i = 0;
  for (let s = e; s < r; s++) if (n[s] === Q) i++;
  return i;
}
function Ee(n) {
  return (n & 192) === 128;
}
function Je(n) {
  return n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
}
function Ye(n, e) {
  let r = n.toString("utf8", 0, e);
  return r.includes("\r")
    ? r.replaceAll(
        `\r
`,
        `
`
      )
    : r;
}
async function qe(n, e, r, i, s, h) {
  let f = Math.min(r, V),
    { bytesRead: w } = await n.read(e, 0, f, r - f),
    S = r,
    y = 0;
  for (let b = w - 1; b >= 0 && y <= s; b--) {
    if (e[b] === Q) {
      if ((y++, y > s)) break;
    }
    S--;
  }
  let C = r - w;
  for (let b = 0; b < 3 && S < r && Ee(e[S - C]); b++) S++;
  let P = r - S,
    v = h - le(e, w - P, w) + 1,
    k = r + i,
    { bytesRead: I } = await n.read(e, 0, V, k),
    x = k;
  y = 0;
  for (let b = 0; b < I; b++)
    if ((x++, e[b] === Q)) {
      if ((y++, y >= s + 1)) break;
    }
  for (let b = 0; b <= 3 && x - 1 - b >= k; b++) {
    let W = e[x - 1 - b - k];
    if (Ee(W)) continue;
    if (W >= 192 && Je(W) > b + 1) x -= b + 1;
    break;
  }
  if (x > k && e[x - 1 - k] === Xe) x--;
  let D = x - S,
    L = D <= e.length ? e : Buffer.allocUnsafe(D),
    { bytesRead: X } = await n.read(L, 0, D, S);
  return { content: Ye(L, X), lineOffset: v, truncated: !1 };
}
export {
  aQ,
  KHr,
  VHr,
  wUs,
  vUs,
  EUs,
  qHr,
  YHr,
  XHr,
  eqn,
  JHr,
  QHr,
  tht,
  ZHr,
  tqn,
  nqn,
  tFt,
  ihe,
  J3,
  nFt,
  BJe,
  kUs,
  uan,
  eLr,
  rqn
};

//# sourceMappingURL=chunk-hzhehd3n.js.map
