// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E } from "./chunk-fs43t96t.js";
import { Yn, Sg } from "./chunk-h5gbmqm1.js";
import { E6 } from "./chunk-6bbdndfe.js";
import { ke } from "./chunk-wrtp8qz8.js";
import { gX } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { he } from "./chunk-95k4nfdh.js";
import { w } from "./chunk-7m7t89vx.js";
import { Me, Zw } from "./chunk-rf7g1m78.js";
import { Nu } from "./chunk-5rw2zfa0.js";
import { ds } from "./chunk-1kj0zhn3.js";
import { fn, s, n } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { a } from "./chunk-4cgvah10.js";
import { wu } from "./chunk-dc0nzty2.js";
import { le } from "./chunk-vw9e882a.js";
import { G4t } from "./chunk-t0wrcf3t.js";
import { gt, m_, skn } from "./chunk-wr0p4ndg.js";
import { zbe } from "./chunk-d54avynm.js";
import { FDe } from "./chunk-b08qnart.js";
import { Pc } from "./chunk-t776tmr7.js";
import { ls } from "./chunk-vgsmcxaz.js";
import { Te } from "./chunk-pbpv20s6.js";
import { wYn, WQe } from "./chunk-6h7ejyet.js";
import { Q_, rw } from "./chunk-gxc8pd9p.js";
import { ST } from "./chunk-en1bapsd.js";
import { dMe, dne, qGn, YKn, oY, Hm, Gle, GMe } from "./chunk-j0tbz6ra.js";
import { V } from "./chunk-j32s98r9.js";
import { bT } from "./chunk-bf8qkzmg.js";
import { Ee } from "./chunk-xzcese97.js";
import { Ub } from "./chunk-pp7zwndm.js";
import { Tr } from "./chunk-nh2498vy.js";
import { bpe, Spe } from "./chunk-p8z8s65a.js";
import { wpe } from "./chunk-92hm4yb6.js";
import { Je } from "./chunk-fgf47p3n.js";
import { Ho } from "./chunk-6dqmkjzd.js";
import { qr } from "./chunk-avncq6qa.js";
import { iw, Hs } from "./chunk-j7vwsewt.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { de, b8, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { wo } from "./chunk-rnxkk435.js";
import { S } from "./chunk-a2y39866.js";
import { basename as Sn, sep as Cn } from "path";
j();
j();
function St(o) {
  let p = w(36),
    { log: d, onExit: c, onSelect: l } = o,
    [u, m] = y(null),
    { storageV5: b } = Me(),
    R,
    F;
  if (p[0] !== d || p[1] !== b)
    ((R = () => {
      if ((m(null), Gle(d))) GMe(d, { storageV5: b }).then(m);
    }),
      (F = [d, b]),
      (p[0] = d),
      (p[1] = b),
      (p[2] = R),
      (p[3] = F));
  else ((R = p[2]), (F = p[3]));
  P(R, F);
  let L = Gle(d) && u === null,
    g = u ?? d,
    X;
  if (p[4] !== g.messages)
    ((X = dMe(dne(qGn(g.messages)), { site: "preview" })), (p[4] = g.messages), (p[5] = X));
  else X = p[5];
  let B = X,
    Ve;
  if (p[6] !== g) ((Ve = Hm(g) || ""), (p[6] = g), (p[7] = Ve));
  else Ve = p[7];
  let Fe = Ve,
    Se;
  if (p[8] === S) ((Se = Ub()), (p[8] = Se));
  else Se = p[8];
  let Ce = Se,
    J;
  if (p[9] === S) ((J = { context: "Confirmation" }), (p[9] = J));
  else J = p[9];
  lt("confirm:no", c, J);
  let M;
  if (p[10] !== u || p[11] !== d || p[12] !== l)
    ((M = () => {
      l(u ?? d);
    }),
      (p[10] = u),
      (p[11] = d),
      (p[12] = l),
      (p[13] = M));
  else M = p[13];
  let I = M,
    qe;
  if (p[14] === S) ((qe = { context: "Confirmation" }), (p[14] = qe));
  else qe = p[14];
  if ((lt("confirm:yes", I, qe), L)) {
    let te;
    if (p[15] === S) ((te = e(qr, { message: "Loading session\u2026" })), (p[15] = te));
    else te = p[15];
    let G;
    if (p[16] === S)
      ((G = r(s, {
        flexDirection: "column",
        padding: 1,
        children: [
          te,
          e(n, {
            dimColor: !0,
            children: e(Ee, {
              children: e(ft, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              })
            })
          })
        ]
      })),
        (p[16] = G));
    else G = p[16];
    return G;
  }
  let te;
  if (p[17] === S) ((te = e(bpe, { latchAnnouncementSlot: !1 })), (p[17] = te));
  else te = p[17];
  let G;
  if (p[18] !== Fe || p[19] !== B)
    ((G = { kind: "static", messages: B, conversationId: Fe }),
      (p[18] = Fe),
      (p[19] = B),
      (p[20] = G));
  else G = p[20];
  let Y;
  if (p[21] === S) ((Y = []), (p[21] = Y));
  else Y = p[21];
  let Le;
  if (p[22] !== G)
    ((Le = e(Spe, { source: G, tools: Ce, commands: Y, screen: "transcript", history: "all" })),
      (p[22] = G),
      (p[23] = Le));
  else Le = p[23];
  let ne;
  if (p[24] !== g.modified) ((ne = m_(g.modified)), (p[24] = g.modified), (p[25] = ne));
  else ne = p[25];
  const oe = g.gitBranch ? ` \xB7 ${g.gitBranch}` : "";
  let re;
  if (p[26] !== g.messageCount || p[27] !== ne || p[28] !== oe)
    ((re = r(n, { children: [ne, " \xB7", " ", g.messageCount, " messages", oe] })),
      (p[26] = g.messageCount),
      (p[27] = ne),
      (p[28] = oe),
      (p[29] = re));
  else re = p[29];
  let A;
  if (p[30] === S)
    ((A = e(n, {
      dimColor: !0,
      children: r(Ee, {
        children: [
          e(V, { chord: "enter", action: "resume" }),
          e(ft, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })
        ]
      })
    })),
      (p[30] = A));
  else A = p[30];
  let W;
  if (p[31] !== re)
    ((W = r(s, {
      flexShrink: 0,
      flexDirection: "column",
      borderTopDimColor: !0,
      borderBottom: !1,
      borderLeft: !1,
      borderRight: !1,
      borderStyle: "single",
      paddingLeft: 2,
      children: [re, A]
    })),
      (p[31] = re),
      (p[32] = W));
  else W = p[32];
  let K;
  if (p[33] !== Le || p[34] !== W)
    ((K = r(s, { flexDirection: "column", children: [te, Le, W] })),
      (p[33] = Le),
      (p[34] = W),
      (p[35] = K));
  else K = p[35];
  return K;
}
j();
function Eo(Ot) {
  return Ot ? "\u25BC " : "\u25B6 ";
}
function To(_) {
  return "  \u25B8 ";
}
function Dt(o) {
  let I = w(49),
    {
      nodes: d,
      onSelect: c,
      onCancel: l,
      onFocus: u,
      focusNodeId: m,
      visibleOptionCount: b,
      layout: p,
      isDisabled: R,
      hidePromptWhileDisabled: F,
      hideIndexes: L,
      isNodeExpanded: g,
      onExpand: X,
      onCollapse: B,
      getParentPrefix: Ve,
      getChildPrefix: Fe,
      onUpFromFirstItem: Se
    } = o,
    Ce = p === void 0 ? "expanded" : p,
    J = R === void 0 ? !1 : R,
    M = L === void 0 ? !1 : L,
    qe;
  if (I[0] === S) ((qe = new Set()), (I[0] = qe));
  else qe = I[0];
  let [te, G] = y(qe),
    Y = C(!1),
    Le = C(null),
    ne;
  if (I[1] !== te || I[2] !== g)
    ((ne = (oe) => {
      if (g) {
        return g(oe);
      }
      return te.has(oe);
    }),
      (I[1] = te),
      (I[2] = g),
      (I[3] = ne));
  else ne = I[3];
  let re = ne,
    A;
  if (I[4] !== re || I[5] !== d) {
    A = [];
    function ze(W, K, Pt) {
      let ae = !!W.children && W.children.length > 0;
      let ut = re(W.id);
      if (
        (A.push({ node: W, depth: K, isExpanded: ut, hasChildren: ae, parentId: Pt }),
        ae && ut && W.children)
      ) {
        for (const Ie of W.children) ze(Ie, K + 1, W.id);
      }
    }
    for (const _t of d) ze(_t, 0);
    ((I[4] = re), (I[5] = d), (I[6] = A));
  } else A = I[6];
  let q = A,
    Xe = Eo,
    Rt = To,
    Oe = Ve ?? Xe,
    Ye = Fe ?? Rt,
    Ze;
  if (I[7] !== Ye || I[8] !== Oe)
    ((Ze = (ce) => {
      let et = "";
      if (ce.hasChildren) et = Oe(ce.isExpanded);
      else if (ce.depth > 0) et = Ye(ce.depth);
      return et + ce.node.label;
    }),
      (I[7] = Ye),
      (I[8] = Oe),
      (I[9] = Ze));
  else Ze = I[9];
  let H = Ze,
    Be;
  if (I[10] !== H || I[11] !== q)
    ((Be = q.map((Z) => ({
      label: H(Z),
      description: Z.node.description,
      dimDescription: Z.node.dimDescription ?? !0,
      value: Z.node.id
    }))),
      (I[10] = H),
      (I[11] = q),
      (I[12] = Be));
  else Be = I[12];
  let tt = Be,
    pt;
  if (I[13] !== q) {
    let nt = new Map();
    pt = (q.forEach((ot) => nt.set(ot.node.id, ot.node)), nt);
    ((I[13] = q), (I[14] = pt));
  } else pt = I[14];
  let U = pt,
    mt;
  if (I[15] !== q) ((mt = (we) => q.find((Ft) => Ft.node.id === we)), (I[15] = q), (I[16] = mt));
  else mt = I[16];
  let x = mt,
    N;
  if (I[17] !== x || I[18] !== B || I[19] !== X)
    ((N = (ue, ht) => {
      let fe = x(ue);
      if (!fe || !fe.hasChildren) {
        return;
      }
      if (ht) {
        if (X) X(ue);
        else G((rt) => new Set(rt).add(ue));
      } else if (B) B(ue);
      else
        G((kt) => {
          let xt = new Set(kt);
          return (xt.delete(ue), xt);
        });
    }),
      (I[17] = x),
      (I[18] = B),
      (I[19] = X),
      (I[20] = N));
  else N = I[20];
  let De = N,
    Ne;
  if (I[21] !== x || I[22] !== m || I[23] !== J || I[24] !== U || I[25] !== u || I[26] !== De)
    ((Ne = (z) => {
      if (!m || J) {
        return;
      }
      let k = x(m);
      if (!k) {
        return;
      }
      if (z.key === "right" && k.hasChildren) (z.preventDefault(), De(m, !0));
      else if (z.key === "left") {
        if (k.hasChildren && k.isExpanded) (z.preventDefault(), De(m, !1));
        else if (k.parentId !== void 0) {
          if ((z.preventDefault(), (Y.current = !0), De(k.parentId, !1), u)) {
            let st = U.get(k.parentId);
            if (st) u(st);
          }
        }
      }
    }),
      (I[21] = x),
      (I[22] = m),
      (I[23] = J),
      (I[24] = U),
      (I[25] = u),
      (I[26] = De),
      (I[27] = Ne));
  else Ne = I[27];
  let se = Ne,
    We;
  if (I[28] !== U || I[29] !== c)
    ((We = (bt) => {
      let it = U.get(bt);
      if (!it) {
        return;
      }
      c(it);
    }),
      (I[28] = U),
      (I[29] = c),
      (I[30] = We));
  else We = I[30];
  let $e = We,
    pe;
  if (I[31] !== U || I[32] !== u)
    ((pe = (Ae) => {
      if (Y.current) {
        Y.current = !1;
        return;
      }
      if (Le.current === Ae) {
        return;
      }
      if (((Le.current = Ae), u)) {
        let v = U.get(Ae);
        if (v) u(v);
      }
    }),
      (I[31] = U),
      (I[32] = u),
      (I[33] = pe));
  else pe = I[33];
  let ve = pe,
    me;
  if (
    I[34] !== m ||
    I[35] !== $e ||
    I[36] !== ve ||
    I[37] !== M ||
    I[38] !== F ||
    I[39] !== J ||
    I[40] !== Ce ||
    I[41] !== l ||
    I[42] !== Se ||
    I[43] !== tt ||
    I[44] !== b
  )
    ((me = e(Je, {
      options: tt,
      onChange: $e,
      onFocus: ve,
      onCancel: l,
      defaultFocusValue: m,
      visibleOptionCount: b,
      layout: Ce,
      isDisabled: J,
      hidePromptWhileDisabled: F,
      hideIndexes: M,
      onUpFromFirstItem: Se
    })),
      (I[34] = m),
      (I[35] = $e),
      (I[36] = ve),
      (I[37] = M),
      (I[38] = F),
      (I[39] = J),
      (I[40] = Ce),
      (I[41] = l),
      (I[42] = Se),
      (I[43] = tt),
      (I[44] = b),
      (I[45] = me));
  else me = I[45];
  let Pe;
  if (I[46] !== se || I[47] !== me)
    ((Pe = e(s, { tabIndex: 0, autoFocus: !0, onKeyDown: se, children: me })),
      (I[46] = se),
      (I[47] = me),
      (I[48] = Pe));
  else Pe = I[48];
  return Pe;
}
function Lo(o, d) {
  let c = o.replace(/\s+/g, " ").trim();
  return gt(c, d);
}
var Io = 2,
  Do = 4,
  No = 2000,
  En = 1000,
  Tn = 50000,
  vo = 0.3;
var Po = { format: { modCase: "title", charCase: "upper" } },
  _o = 60000,
  Ro = 50,
  Fo = 5;
function Ln({ before: o, match: d, after: c }, l) {
  return he.dim(o) + l(d) + he.dim(c);
}
function ko(o) {
  return o.replace(new RegExp(wYn.source + '[^,\\s"]*', "g"), (d) => {
    let c = WQe(d);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : d;
  });
}
function Oo(o, d, c) {
  let l = o.toLowerCase().indexOf(d.toLowerCase());
  if (l === -1) return null;
  let u = l + d.length,
    m = Math.max(0, l - c),
    b = Math.min(o.length, u + c),
    p = o.slice(m, l),
    R = o.slice(l, u),
    F = o.slice(u, b);
  return {
    before: (m > 0 ? "\u2026" : "") + p.replace(/\s+/g, " ").trimStart(),
    match: R.trim(),
    after: F.replace(/\s+/g, " ").trimEnd() + (b < o.length ? "\u2026" : "")
  };
}
function Nt(o, d, c) {
  let { isGroupHeader: l = !1, isChild: u = !1, forkCount: m = 0 } = c || {},
    b = l && m > 0 ? Io : u ? Do : 0,
    p = l && m > 0 ? ` (+${m} other ${m === 1 ? "session" : "sessions"})` : "",
    R = o.isSidechain ? " (sidechain)" : "",
    F = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${Nu} ${o.artifactCount}` : "",
    L = d - b - R.length - p.length - le(F);
  return `${Lo(gX(o), L)}${R}${p}${F}`;
}
function vt(o, d) {
  let { isChild: c = !1, showProjectPath: l = !1 } = d || {},
    u = c ? "    " : "",
    m = skn(o),
    b = l && o.projectPath ? ` \xB7 ${o.projectPath}` : "";
  return u + m + b;
}
function gxn({
  logs: o,
  maxHeight: d = 1 / 0,
  forceWidth: c,
  onCancel: l,
  onSelect: u,
  onLogsChanged: m,
  onLoadMore: b,
  initialSearchQuery: p,
  isLoading: R = !1,
  reloadGeneration: F = 0,
  showAllProjects: L = !1,
  onToggleAllProjects: g,
  currentSessionId: X,
  footerNote: B
}) {
  let { storageV5: Ve } = Me(),
    Fe = ds(Te()),
    Se = c === void 0 ? Fe.columns : c,
    Ce = ls(l),
    J = !1,
    M = bT(!1),
    I = Po,
    qe = "show all projects",
    te = 2,
    G = Pc(),
    Y = fn(),
    Le = !1,
    ne = Zw(),
    oe = ee(() => (t) => FDe(t, ne.warning), [ne.warning]),
    re = ee(() => (B === void 0 ? 0 : le(B.join(" \xB7 "))), [B]),
    [A, W] = y(null),
    [K, Pt] = y(!0),
    [ae, ut] = y(!1),
    [Ie, ze] = y(!1),
    [_t, q] = y(null),
    [Xe, Rt] = y(null),
    [Oe, Ye] = y([]),
    [Ze, ce] = y(!1),
    et = ST(),
    [H] = y(() => et.originalCwd),
    [Be, Z] = y(""),
    [tt, pt] = y(0),
    [nt, ot] = y(new Set()),
    [U, mt] = y(null),
    [we, Ft] = y(1),
    [x, N] = y(p ? "search" : "list"),
    [ue, ht] = y(null),
    {
      query: fe,
      setQuery: rt,
      cursorOffset: kt,
      handleKeyDown: xt,
      handlePaste: De
    } = Q_({
      isActive: x === "search",
      onExit: () => {
        (N("list"), a("tengu_session_search_toggled", { enabled: !1 }));
      },
      onExitUp: () => {
        (N("list"), a("tengu_session_search_toggled", { enabled: !1 }));
      },
      passthroughCtrlKeys: o.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: p || ""
    }),
    Ne = ko(fe),
    z = b8(Ne),
    [k, st] = y("");
  P(() => {
    if (!z) {
      st("");
      return;
    }
    return Y.setTimeout(() => st(z), 300);
  }, [z, Y]);
  let [se, We] = y(null),
    bt = !1;
  P(() => {
    wu().then((i) => W(i));
    let t = Date.now();
    G4t(H)
      .then(async (i) => (i.length, i))
      .then((i) => {
        (a("tengu_worktree_detection", {
          duration_ms: Date.now() - t,
          worktree_count: i.length,
          success: !0
        }),
          ze(i.length > 1),
          Ye(i),
          q(i[0] ?? null));
        let h = i.filter((f) => H === f || H.startsWith(f + Cn));
        (h.sort((f, D) => D.length - f.length), Rt(h[0] ?? null), ce(!0));
      })
      .catch(() => {
        (a("tengu_worktree_detection", {
          duration_ms: Date.now() - t,
          worktree_count: 0,
          success: !1
        }),
          ce(!0));
      });
  }, [H]);
  let it = ee(() => new Map(o.map((t) => [t, $o(t)])), [o]),
    $e = ee(() => null, [o, it, !1]),
    pe = ee(() => {
      let t = o.filter((i) => {
        let h = Hm(i);
        if (X && h === X) return !0;
        if (i.customTitle ?? i.aiTitle) return !0;
        if (YKn(i.messages)) return !0;
        if (i.firstPrompt || i.customTitle || i.aiTitle) return !0;
        return !1;
      });
      if (!K && A) t = t.filter((i) => i.gitBranch === A);
      if (Ie && !ae && !L) {
        let i = Xe ?? H;
        t = t.filter((h) => {
          if (h.isAlias) return !0;
          let f = h.projectPath;
          if (f === void 0) return !1;
          let D = null;
          for (let T of Oe)
            if (f === T || f.startsWith(T + Cn)) {
              if (D === null || T.length > D.length) D = T;
            }
          if (D === null) return f === i;
          return D === i;
        });
      }
      return t;
    }, [o, X, K, A, Ie, ae, L, H, Xe, Oe]),
    Ae = ee(() => {
      if (!Ne) return pe;
      let t = Ne.toLowerCase();
      return pe.filter((i) => {
        let h = gX(i).toLowerCase(),
          f = (i.gitBranch || "").toLowerCase(),
          D = (i.tag || "").toLowerCase(),
          T = i.prNumber ? `pr #${i.prNumber} ${i.prRepository || ""}`.toLowerCase() : "";
        return h.includes(t) || f.includes(t) || D.includes(t) || T.includes(t);
      });
    }, [pe, Ne]);
  P(() => {
    We(null);
    return;
  }, [k, z, $e, !1, Y]);
  let { filteredLogs: v, snippets: ve } = ee(() => {
      let t = new Map(),
        i = Ae;
      if (se && k && se.query === k) {
        for (let T of se.results)
          if (T.searchableText) {
            let ge = Oo(T.searchableText, k, Ro);
            if (ge) t.set(T.log, ge);
          }
        let h = new Set(i.map((T) => T.messages[0]?.uuid)),
          f = new Set(pe),
          D = se.results.map((T) => T.log).filter((T) => !h.has(T.messages[0]?.uuid) && f.has(T));
        i = [...i, ...D];
      }
      return { filteredLogs: i, snippets: t };
    }, [Ae, se, k, pe]),
    me = Se - 2 * iw,
    Pe = Math.max(30, me - 4),
    Ot = ee(() => {
      let t = Ao(v);
      return Array.from(t.entries()).map(([i, h]) => {
        let f = h[0],
          D = v.indexOf(f),
          T = ve.get(f),
          ge = T ? Ln(T, oe) : null;
        if (h.length === 1) {
          let ie = vt(f, { showProjectPath: L });
          return {
            id: `log:${i}:0`,
            value: { log: f, indexInFiltered: D },
            label: Nt(f, Pe),
            description: ge
              ? `${ie}
  ${ge}`
              : ie,
            dimDescription: !0
          };
        }
        let Wn = h.length - 1,
          $n = h.slice(1).map((ie, An) => {
            let Hn = v.indexOf(ie),
              Ut = ve.get(ie),
              jt = Ut ? Ln(Ut, oe) : null,
              Gt = vt(ie, { isChild: !0, showProjectPath: L });
            return {
              id: `log:${i}:${An + 1}`,
              value: { log: ie, indexInFiltered: Hn },
              label: Nt(ie, Pe, { isChild: !0 }),
              description: jt
                ? `${Gt}
      ${jt}`
                : Gt,
              dimDescription: !0
            };
          }),
          Ht = vt(f, { showProjectPath: L });
        return {
          id: `group:${i}`,
          value: { log: f, indexInFiltered: D },
          label: Nt(f, Pe, { isGroupHeader: !0, forkCount: Wn }),
          description: ge
            ? `${Ht}
  ${ge}`
            : Ht,
          dimDescription: !0,
          children: $n
        };
      });
    }, [v, Pe, L, ve, oe]),
    _ = U?.value.log ?? null,
    Dn = () => {
      if (!_) return "";
      let t = Hm(_);
      if (!t) return "";
      let i = v.filter((T) => Hm(T) === t);
      if (!(i.length > 1)) return "";
      let f = nt.has(t);
      if (i.indexOf(_) > 0 || f) return e(V, { chord: "left", action: "collapse", ...M });
      return e(V, { chord: "right", action: "expand", ...M });
    },
    Nn = async () => {
      let t = _ ? Hm(_) : void 0;
      if (!_ || !t) {
        (N("list"), Z(""));
        return;
      }
      if (Be.trim()) {
        if ((await oY(t, Be.trim(), _.fullPath, "user", Ve), m)) m();
      }
      (N("list"), Z(""));
    },
    vn = () => {
      (N("list"), rt(""), a("tengu_session_search_toggled", { enabled: !1 }));
    },
    Pn = () => {
      (N("search"), a("tengu_session_search_toggled", { enabled: !0 }));
    };
  P(() => {
    if (F === 0) return;
    We(null);
  }, [F]);
  let _n = (t) => {
    mt(t);
    let i = v.findIndex((h) => Hm(h) === Hm(t.value.log));
    if (i >= 0) Ft(i + 1);
  };
  lt(
    "confirm:no",
    () => {
      (N("list"), Z(""));
    },
    { context: "Settings", isActive: x === "rename" }
  );
  function Rn(t) {
    if (x === "preview") return;
    if (x === "rename") ;
    else if (x === "search") {
      if ((xt(t), t.ctrl && t.key === "n")) (t.preventDefault(), vn());
      else if (t.ctrl && t.key === "a" && g && o.length === 0)
        (t.preventDefault(), g(), a("tengu_session_all_projects_toggled", { enabled: L }));
    } else {
      if (v.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        (t.preventDefault(), N("search"));
        return;
      }
      let i = !t.ctrl && !t.meta,
        h = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && g)
        (t.preventDefault(), g(), a("tengu_session_all_projects_toggled", { enabled: L }));
      else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let f = !K;
        (Pt(f), a("tengu_session_branch_filter_toggled", { enabled: !f }));
      } else if (t.ctrl && t.key === "w" && Ie) {
        t.preventDefault();
        let f = !ae;
        (ut(f), a("tengu_session_worktree_filter_toggled", { enabled: !f }));
      } else if (h === "/" && i)
        (t.preventDefault(), N("search"), a("tengu_session_search_toggled", { enabled: !0 }));
      else if (t.ctrl && t.key === "r" && _)
        (t.preventDefault(), N("rename"), Z(""), a("tengu_session_rename_started", {}));
      else if (((t.key === " " && i) || (t.ctrl && t.key === "v")) && _)
        (t.preventDefault(),
          ht(_),
          N("preview"),
          a("tengu_session_preview_opened", { messageCount: _.messageCount }));
      else if (!t.defaultPrevented && i && t.key.length === 1 && t.key !== " ")
        (t.preventDefault(),
          N("search"),
          rt(t.key),
          a("tengu_session_search_toggled", { enabled: !0 }));
    }
  }
  function Fn(t) {
    if (x === "search") {
      De(t);
      return;
    }
    let i = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (x === "preview" || x === "rename" || !_ || !i) return;
    (t.preventDefault(), N("search"), rt(i), a("tengu_session_search_toggled", { enabled: !0 }));
  }
  let _e = [],
    Mt = !!g && !L && Ze,
    Bt = _t ?? H;
  if (Mt) _e.push(Sn(Bt));
  if (!K && A) _e.push(A);
  if (Ie && !ae && !L) {
    let t = Xe ?? H;
    if (!(Mt && Bt === t)) _e.push(Sn(t));
  }
  let kn = !!g && !L && !Ze,
    Wt = (_e.length > 0 || kn) && x !== "search",
    $t = 3,
    On = 5 + $t + (Wt ? 1 : 0),
    At = B !== void 0 && x !== "rename" && re <= me - 2 && d - (5 + $t + 1) - 3 >= 3,
    Mn = 2 + (At ? 1 : 0),
    He = Math.max(1, Math.floor((d - On - Mn) / 3)),
    Bn = o.length,
    at = C({ focusedIndex: -1, visible: -1, empty: 0 });
  if (
    (P(() => {
      if (!b) return;
      let t = at.current;
      if (t.focusedIndex !== we || t.visible !== v.length)
        at.current = { focusedIndex: we, visible: v.length, empty: 0 };
      let i = He * 2;
      if (we + i >= v.length && at.current.empty < Fo) (at.current.empty++, b(He * 3));
    }, [we, He, v.length, Bn, b]),
    o.length === 0 && !g)
  )
    return null;
  if (x === "preview" && ue)
    return e(St, {
      log: ue,
      onExit: () => {
        (N("list"), ht(null));
      },
      onSelect: u
    });
  return e(s, {
    flexDirection: "column",
    maxHeight: d - 1,
    onKeyDown: Rn,
    onPaste: Fn,
    children: r(wn, {
      isRedesign: !1,
      titleDetail: r(Q, {
        children: [
          x === "list" &&
            v.length > He &&
            r(n, { dimColor: !0, children: [" ", "(", we, " of ", v.length, ")"] }),
          R && e(n, { dimColor: !0, children: " \xB7 Refreshing\u2026" })
        ]
      }),
      children: [
        e(rw, {
          query: fe,
          isFocused: x === "search",
          isTerminalFocused: G,
          cursorOffset: kt,
          isSearchLineUnpadded: !0
        }),
        Wt &&
          (_e.length > 0
            ? e(s, {
                flexShrink: 0,
                paddingLeft: 2,
                children: e(n, { dimColor: !0, children: e(Ee, { children: _e }) })
              })
            : e(s, { flexShrink: 0, height: 1 })),
        e(s, { flexShrink: 0, children: e(n, { children: " " }) }),
        (x === "search" || x === "list") &&
          Boolean(fe.trim()) &&
          v.length === 0 &&
          !bt &&
          !R &&
          e(s, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: r(Ho, { children: ['No sessions match "', fe, '".'] })
          }),
        o.length === 0 &&
          x === "list" &&
          !R &&
          !fe.trim() &&
          e(s, {
            paddingLeft: 1,
            marginBottom: 1,
            flexShrink: 0,
            children: e(Ho, {
              hint: L ? void 0 : e(V, { chord: "ctrl+a", action: "show all projects", ...I }),
              children: L ? "No conversations found." : "No conversations found in this project."
            })
          }),
        x === "rename" && _
          ? r(s, {
              paddingLeft: 2,
              flexDirection: "column",
              children: [
                e(n, { bold: !0, children: "Rename session:" }),
                e(s, {
                  paddingTop: 1,
                  children: e(Tr, {
                    value: Be,
                    onChange: Z,
                    onSubmit: Nn,
                    placeholder: gX(_, "Enter new session name"),
                    columns: me - 2,
                    cursorOffset: tt,
                    onChangeCursorOffset: pt,
                    showCursor: !0,
                    focus: !0
                  })
                })
              ]
            })
          : e(Dt, {
              nodes: Ot,
              onSelect: (t) => {
                u(t.value.log);
              },
              onFocus: _n,
              onCancel: l,
              focusNodeId: U?.id,
              visibleOptionCount: He,
              layout: "expanded",
              isDisabled: x === "search",
              hidePromptWhileDisabled: !0,
              hideIndexes: !1,
              isNodeExpanded: (t) => {
                if (x === "search" || !K) return !0;
                let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                return i ? nt.has(i) : !1;
              },
              onExpand: (t) => {
                let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                if (i) (ot((h) => new Set(h).add(i)), a("tengu_session_group_expanded", {}));
              },
              onCollapse: (t) => {
                let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
                if (i)
                  ot((h) => {
                    let f = new Set(h);
                    return (f.delete(i), f);
                  });
              },
              onUpFromFirstItem: Pn
            }),
        At &&
          e(s, {
            paddingLeft: 2,
            flexShrink: 0,
            children: e(n, { dimColor: !0, wrap: "truncate-end", children: e(Ee, { children: B }) })
          }),
        e(s, {
          paddingLeft: 2,
          children: Ce.pending
            ? r(n, { dimColor: !0, italic: !1, children: ["Press ", Ce.keyName, " again to exit"] })
            : x === "rename"
              ? e(n, {
                  dimColor: !0,
                  italic: !1,
                  children: r(Ee, {
                    children: [
                      e(V, { chord: "enter", action: "save", ...M }),
                      e(ft, {
                        action: "confirm:no",
                        context: "Confirmation",
                        fallback: "Esc",
                        description: "cancel",
                        ...M
                      })
                    ]
                  })
                })
              : x === "search"
                ? e(n, {
                    dimColor: !0,
                    italic: !1,
                    children: r(Ee, {
                      children: [
                        e(n, { children: "Type to Search" }),
                        o.length === 0 &&
                          g &&
                          e(V, {
                            chord: "ctrl+a",
                            action: L ? "only show current repo" : "show all projects",
                            ...I
                          }),
                        e(V, { chord: "enter", action: "select", ...M }),
                        e(ft, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "clear",
                          ...M
                        })
                      ]
                    })
                  })
                : e(n, {
                    dimColor: !0,
                    italic: !1,
                    children: r(Ee, {
                      children: [
                        g &&
                          e(V, {
                            chord: "ctrl+a",
                            action: L ? "only show current repo" : "show all projects",
                            ...I
                          }),
                        A &&
                          e(V, {
                            chord: "ctrl+b",
                            action: K ? "only show current branch" : "show all branches",
                            ...I
                          }),
                        Ie &&
                          e(V, {
                            chord: "ctrl+w",
                            action: ae ? "only show current worktree" : "show all worktrees",
                            ...I
                          }),
                        _ && e(V, { chord: "space", action: "preview", ...M }),
                        _ && e(V, { chord: "ctrl+r", action: "rename", ...I }),
                        e(n, { children: "Type to search" }),
                        e(ft, {
                          action: "confirm:no",
                          context: "Confirmation",
                          fallback: "Esc",
                          description: "cancel",
                          format: M.format
                        }),
                        Dn()
                      ]
                    })
                  })
        })
      ]
    })
  });
}
function wn(o) {
  let l = w(5),
    { titleDetail: d, children: c } = o,
    u;
  if (l[0] !== d)
    ((u = e(s, {
      flexShrink: 0,
      children: r(n, { bold: !0, color: "suggestion", children: ["Resume session", d] })
    })),
      (l[0] = d),
      (l[1] = u));
  else u = l[1];
  let m;
  if (l[2] !== c || l[3] !== u)
    ((m = r(Hs, { color: "suggestion", children: [u, c] })), (l[2] = c), (l[3] = u), (l[4] = m));
  else m = l[4];
  return m;
}
function Wo(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let d = "message" in o ? o.message?.content : void 0;
  if (!d) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof d === "string") return wpe(d, c);
  if (Array.isArray(d))
    return d
      .map((l) => {
        if (typeof l === "string") return l;
        if ("text" in l && typeof l.text === "string") return wpe(l.text, c);
        return "";
      })
      .filter(Boolean)
      .join(" ");
  return "";
}
function $o(o) {
  let c = (
      o.messages.length <= No ? o.messages : [...o.messages.slice(0, En), ...o.messages.slice(-En)]
    )
      .map(Wo)
      .filter(Boolean)
      .join(" "),
    u =
      `${[o.customTitle, o.aiTitle, o.summary, o.firstPrompt, o.gitBranch, o.tag, o.prNumber ? `PR #${o.prNumber}` : void 0, o.prRepository].filter(Boolean).join(" ")} ${c}`.trim();
  return u.length > Tn ? u.slice(0, Tn) : u;
}
function Ao(o) {
  let d = new Map();
  for (let c of o) {
    let l = Hm(c);
    if (l) {
      let u = d.get(l);
      if (u) u.push(c);
      else d.set(l, [c]);
    }
  }
  return (
    d.forEach((c) =>
      c.sort((l, u) => new Date(u.modified).getTime() - new Date(l.modified).getTime())
    ),
    d
  );
}
import { lstat as Uo } from "fs/promises";
import { posix as jo, sep as Go, win32 as Qo } from "path";
function Ffr() {
  return O() === "windows" ? ";" : "&&";
}
async function hxn(o, d, c) {
  let l = ke();
  if (!d || !o.projectPath || o.projectPath === l) return null;
  if (c.some((p) => o.projectPath === p || o.projectPath.startsWith(p + Go))) return null;
  if (!Yn(o.projectPath) && !Sg(o.projectPath) && !(await Ko(o.projectPath))) return null;
  let m = Hm(o),
    b = E6(m) ? ` ${m}` : "";
  return `cd ${wo([o.projectPath])} ${Ffr()} claude --resume${b}`;
}
async function Ko(o) {
  let d = O() === "windows",
    { parse: c, sep: l } = d ? Qo : jo,
    u = d ? c(o).root.replaceAll("/", l) : c(o).root,
    m = o
      .slice(c(o).root.length)
      .split(d ? /[\\/]+/ : l)
      .filter(Boolean),
    b = u;
  for (let p of m) {
    b = b === "" || b.endsWith(l) ? b + p : b + l + p;
    try {
      if ((await Uo(b)).isSymbolicLink()) return !0;
    } catch (R) {
      let F = E(R);
      return F !== "ENOENT" && F !== "ENOTDIR";
    }
  }
  return !0;
}
export { gxn, Ffr, hxn };

//# sourceMappingURL=chunk-rkdma5rx.js.map
