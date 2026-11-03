// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ao } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { W } from "./chunk-jgvfzp2r.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { z7o } from "./chunk-dc0nzty2.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { tr, bA } from "./chunk-xe386mry.js";
import { ul, Re, ue, La, ch } from "./chunk-ajtyjx88.js";
import { U8r } from "./chunk-13nwb0xt.js";
import { lc } from "./chunk-wr0p4ndg.js";
import { DL, I1, yqn, cFt, $Us, uFt, O1, wqn, eGe } from "./chunk-yyq6mj0n.js";
import { btt } from "./chunk-cr7a2cdd.js";
import { w } from "./chunk-7m7t89vx.js";
import { nD, vk } from "./chunk-t776tmr7.js";
import { K } from "./chunk-61vn6n52.js";
import { NDe } from "./chunk-7jgmpv5v.js";
import { Es } from "./chunk-en1bapsd.js";
import { n, Yt } from "./chunk-h56pfqh7.js";
import { Wd } from "./chunk-358y3whe.js";
import { e } from "./chunk-f790ajz4.js";
import { Qne, hyt } from "./chunk-d24cd7f5.js";
import { Gt, be, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { resolve as bt, sep as De, win32 as ke } from "path";
j();
var V = () => ({ isSidebarOn: eGe(), isOwnedByPlugin: wqn() });
function Ito() {
  let [t, r] = y(V),
    o = Wd(),
    s = K((i) => i.panelFileView !== null);
  return (
    P(() => {
      let i = () =>
        r((p) => {
          let D = V();
          return p.isSidebarOn === D.isSidebarOn && p.isOwnedByPlugin === D.isOwnedByPlugin ? p : D;
        });
      i();
      let a = ul(i),
        u = NDe(i);
      return () => {
        (a(), u());
      };
    }, [o]),
    t.isSidebarOn && (s || !t.isOwnedByPlugin)
  );
}
j();
var q = 400,
  nmr = 150,
  de = 2000,
  I = { hunks: new Map(), skippedLarge: new Set() };
async function z(t, r, o) {
  try {
    let s = await yqn(t, o, r);
    if (o?.aborted) return null;
    if (s === null) return (f("repl_diff_read", "git_diff_failed"), null);
    let i = s.stats.filesCount === 0 ? I : await $Us(o, cFt(s));
    if (o?.aborted) return null;
    if (i === null) f("repl_diff_read", "git_hunks_failed");
    else g("repl_diff_read");
    return { result: s, hunks: i };
  } catch (s) {
    if (o?.aborted) return null;
    return (l(s), f("repl_diff_read", "git_diff_threw"), null);
  }
}
class X {
  #e = null;
  set(t, r, o, s) {
    this.#e = { baseMode: t, refreshKey: r, round: o, at: s };
  }
  take(t, r) {
    let o = this.#e;
    if (o === null) return;
    if (r - o.at > de) {
      this.#e = null;
      return;
    }
    if (o.baseMode !== t) return;
    return ((this.#e = null), { round: o.round, refreshKey: o.refreshKey });
  }
  get isPrimed() {
    return this.#e !== null;
  }
}
var Y = new W(() => new X());
async function pPn(t, r, o, s) {
  let i = await z(t, r, s);
  if (s?.aborted) return;
  Y.of(t).set(r, o, i && { result: i.result, baseMode: r, hunks: i.hunks ?? I }, Date.now());
}
function rmr(t = 0, r = !0, o = "auto") {
  let i = be(vk)?.setTimeout ?? nD,
    a = Es(),
    [u] = y(() => (r ? Y.of(a).take(o, Date.now()) : void 0)),
    [p, D] = y(u?.round ?? null),
    [k, M] = y(u === void 0),
    L = C(u !== void 0),
    U = C(u !== void 0 && u.refreshKey === t),
    [se, ae] = y(0);
  return (
    P(() => z7o(() => ae((R) => R + 1)), []),
    P(() => {
      if (!r) return;
      if (U.current) {
        U.current = !1;
        return;
      }
      let R = !1,
        F = new AbortController();
      async function G() {
        let b = await z(a, o, F.signal);
        if (R) return;
        if (b !== null) {
          let h = cFt(b.result);
          D((x) => ({
            result: b.result,
            baseMode: o,
            hunks: b.hunks ?? (x !== null && cFt(x.result) === h ? x.hunks : I)
          }));
        }
        ((L.current = !0), M(!1));
      }
      let _ = i(G, L.current || t !== 0 ? nmr : 0);
      return () => {
        ((R = !0), _(), F.abort());
      };
    }, [t, r, se, o, a]),
    ee(() => {
      if (!p)
        return {
          stats: null,
          files: [],
          hunks: new Map(),
          loading: r && k,
          source: { kind: "working-tree" },
          baseMode: o
        };
      let { stats: R, perFileStats: F, source: G } = p.result,
        _ = [];
      for (let [b, h] of F) {
        let x = h.isUntracked,
          N = p.hunks.skippedLarge.has(b),
          fe = h.added + h.removed,
          le = !N && !h.isBinary && fe > q;
        _.push({
          path: b,
          linesAdded: h.added,
          linesRemoved: h.removed,
          isBinary: h.isBinary,
          isLargeFile: N,
          isTruncated: le,
          isUntracked: x,
          preSession: h.preSession
        });
      }
      return (
        _.sort((b, h) => b.path.localeCompare(h.path)),
        {
          stats: R,
          files: _,
          hunks: p.hunks.hunks,
          loading: !1,
          source: G,
          baseMode: p.baseMode,
          noCommits: p.result.noCommits
        }
      );
    }, [p, k, r, o])
  );
}
function T(t) {
  return {
    stats: null,
    files: [],
    hunks: new Map(),
    loading: t,
    source: { kind: "working-tree" },
    baseMode: "auto"
  };
}
function pe(t) {
  let r = new Set(t.skippedLarge),
    o = new Set(t.restricted),
    s = t.perFileStats
      .map((i) => {
        let a = r.has(i.path);
        return {
          path: i.path,
          linesAdded: i.added,
          linesRemoved: i.removed,
          isBinary: i.isBinary,
          isLargeFile: a,
          isTruncated: !a && !i.isBinary && i.added + i.removed > q,
          isUntracked: i.isUntracked,
          isRestricted: o.has(i.path)
        };
      })
      .sort((i, a) => i.path.localeCompare(a.path));
  return {
    stats: t.stats,
    files: s,
    hunks: new Map(t.hunks.map((i) => [i.path, i.hunks])),
    loading: !1,
    source: t.source,
    baseMode: "branch-point"
  };
}
function ce(t) {
  let [r, o] = y(() => ({ data: T(t), notice: null }));
  return (
    P(() => {
      if (!t) return;
      let s = tr();
      if (!s || !bA("controlChannel")) {
        (f("remote_workspace_diff_fetch", "no_channel"),
          o({
            data: T(!1),
            notice:
              "Workspace changes aren't available over this connection \u2014 showing per-turn changes only"
          }));
        return;
      }
      let i = !1;
      return (
        s
          .sendControlRequest({ subtype: "get_workspace_diff" })
          .then((a) => {
            if (i) return;
            (g("remote_workspace_diff_fetch"),
              o({ data: a.diff ? pe(a.diff) : T(!1), notice: null }));
          })
          .catch((a) => {
            if (i) return;
            let u = d(a),
              p = u.includes("Unsupported control request subtype") ? "unsupported_subtype" : I1(a);
            if (p === "unsupported_subtype") f("remote_workspace_diff_fetch", p);
            else m("remote_workspace_diff_fetch", p);
            o({
              data: T(!1),
              notice:
                p === "unsupported_subtype"
                  ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only"
                  : a instanceof DL
                    ? "Timed out fetching workspace changes \u2014 showing per-turn changes only"
                    : p === "disconnected" || p === "not_connected"
                      ? "Lost the connection to the cloud session \u2014 showing per-turn changes only"
                      : p === "not_delivered"
                        ? "Couldn't reach the cloud session \u2014 showing per-turn changes only"
                        : `Couldn't fetch workspace changes: ${u}`
            });
          }),
        () => {
          i = !0;
        }
      );
    }, [t]),
    r
  );
}
function Tto(t) {
  let r = rmr(0, !t),
    o = ce(t);
  return t ? o : { data: r, notice: null };
}
class J {
  lastLoggedSessionId = null;
  autoOpenPending = !1;
}
var j3t = new W(() => new J()),
  aus = new W(() => ({ lastLoggedSessionId: null })),
  mPn = new W(() =>
    ve({ cycled: !1 }, (t) => {
      t.cycled = !1;
    })
  );
var me =
    "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository",
  Ato = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";
function Cto(t) {
  j3t.of(t).autoOpenPending = !0;
}
function lus(t) {
  let r = j3t.of(t),
    o = r.autoOpenPending;
  return ((r.autoOpenPending = !1), o);
}
function Q(t) {
  j3t.of(t).autoOpenPending = !1;
}
function gPn() {
  return uFt();
}
function omr({
  enabled: t,
  fullscreen: r,
  columns: o,
  isThinClient: s,
  isMainFocused: i,
  hasGitRepo: a
}) {
  return t && r && !s && i && o >= Qne && a;
}
function Rto(t) {
  let r = ue().diffSidebarOpen;
  if (r === !1) return !1;
  return t >= (r === !0 ? Qne : hyt) && gPn();
}
function Z(t, r, o, s) {
  let i = o === "diff" ? "convo" : "diff";
  (Q(t),
    r((u) =>
      u.replTab === i && u.panelFileView === null ? u : { ...u, replTab: i, panelFileView: null }
    ));
  let a = i === "diff";
  if (ue().diffSidebarOpen !== a) Re((u) => ({ ...u, diffSidebarOpen: a }), s);
  return (g("repl_tab_switch", { tab: c(i) }), i);
}
async function he(t, r, o, s, i) {
  if ((await pPn(t, W3t(), s), r() === "diff")) return;
  Z(t, o, "convo", i);
}
var ge = "Diff panel shown",
  Se = "Diff panel hidden",
  dus = 2000;
function cus(t) {
  switch (t.status) {
    case "shown":
      return ge;
    case "hidden":
      return Se;
    case "refused":
      return t.text;
  }
}
function hPn({
  host: t,
  getReplTab: r,
  setAppState: o,
  columns: s,
  trackSequence: i,
  storageV5: a
}) {
  if (r() === "diff") return (Z(t, o, "diff", a), { status: "hidden" });
  if (!eGe()) return { status: "refused", reason: "unavailable", text: Ato };
  if (!gPn()) return { status: "refused", reason: "no-git", text: me };
  if (s < Qne)
    return {
      status: "refused",
      reason: "too-narrow",
      text: `Resize your terminal to at least ${Qne} columns to show the diff panel`
    };
  return { status: "shown", settled: he(t, r, o, i, a).catch(l) };
}
function tUe(t, r) {
  (Q(t),
    r((o) =>
      o.replTab === "convo" && o.panelFileView === null
        ? o
        : { ...o, replTab: "convo", panelFileView: null }
    ));
}
function xto(t, r, o) {
  if ((tUe(t, r), ue().diffSidebarOpen !== !1)) Re((s) => ({ ...s, diffSidebarOpen: !1 }), o);
  g("repl_tab_switch", { tab: c("convo") });
}
var v = ["session", "uncommitted", "branch"];
function W3t() {
  let t = La().diffSidebarBaseMode;
  return t === "uncommitted" || t === "branch" ? t : "session";
}
function Pto(t, r) {
  let o = v[(v.indexOf(t) + 1) % v.length] ?? "session";
  return (
    ch((s) => (s.diffSidebarBaseMode === o ? s : { ...s, diffSidebarBaseMode: o }), r),
    g("repl_diff_base_switch", { mode: c(o) }),
    o
  );
}
function G3t(t) {
  return btt(we(t));
}
function we(t) {
  let r = ao(),
    o = O() === "windows",
    s = o ? ke.sep : De,
    i = (D) => (o ? D.replaceAll("/", s).toLowerCase() : D),
    a = i(t),
    u = i(r);
  if (a.length !== t.length || u.length !== r.length) return t;
  if (a === u) return "";
  let p = u.endsWith(s) ? u : u + s;
  return a.startsWith(p) ? t.slice(p.length) : t;
}
j();
import { homedir as ne } from "os";
import { isAbsolute as _e, sep as Pe } from "path";
import { isAbsolute as ye, win32 as te } from "path";
function H(t) {
  if (O() === "windows") return te.isAbsolute(t) && te.parse(t).root.length > 1;
  return ye(t);
}
var yPn = Gt(null);
function my(t) {
  let a = w(9),
    { filePath: r, children: o } = t,
    s = be(yPn),
    i = o ?? r;
  if (E(r) || (typeof i === "string" && E(i))) {
    let u;
    if (a[0] === S) ((u = e(n, { dimColor: !0, children: U8r })), (a[0] = u));
    else u = a[0];
    return u;
  }
  let u;
  if (a[1] !== s || a[2] !== i)
    ((u = s !== null && typeof i === "string" ? lc(i, s) : i), (a[1] = s), (a[2] = i), (a[3] = u));
  else u = a[3];
  let p = u,
    D;
  if (a[4] !== r) ((D = H(r) ? O1(r) : null), (a[4] = r), (a[5] = D));
  else D = a[5];
  let k = D,
    M;
  if (a[6] !== p || a[7] !== k)
    ((M = k === null ? e(n, { children: p }) : e(Yt, { url: k, children: p })),
      (a[6] = p),
      (a[7] = k),
      (a[8] = M));
  else M = a[8];
  return M;
}
function E(t) {
  let r = Ae(t);
  return _e(r) ? G3t(r) : btt(r);
}
function Ae(t) {
  if (t === "~") return ne();
  return t.startsWith("~" + Pe) ? ne() + t.slice(1) : t;
}
export {
  nmr,
  pPn,
  rmr,
  Tto,
  j3t,
  aus,
  mPn,
  Ato,
  Cto,
  lus,
  gPn,
  omr,
  Rto,
  dus,
  cus,
  hPn,
  tUe,
  xto,
  W3t,
  Pto,
  Ito,
  G3t,
  yPn,
  my
};

//# sourceMappingURL=chunk-mmhbf5yf.js.map
