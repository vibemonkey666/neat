// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { au } from "./chunk-fgf47p3n.js";
import { Te } from "./chunk-pbpv20s6.js";
import { fn, rt, s, n } from "./chunk-h56pfqh7.js";
import { F } from "./chunk-wrtp8qz8.js";
import { Vr } from "./chunk-acd8w9vv.js";
import { w } from "./chunk-7m7t89vx.js";
import { Yf, Cn } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Me } from "./chunk-rf7g1m78.js";
import { a } from "./chunk-4cgvah10.js";
import { hyr, vdt, N9t, $9t, kyr, Wpe, Pgs } from "./chunk-pp7zwndm.js";
import { Cpe } from "./chunk-65wf35er.js";
import { sl, ds } from "./chunk-1kj0zhn3.js";
import { Es, Jr } from "./chunk-en1bapsd.js";
import { Jn, jbt } from "./chunk-d5zj5299.js";
import { ne } from "./chunk-39xmt821.js";
import { Ee } from "./chunk-xzcese97.js";
import { we } from "./chunk-bf8qkzmg.js";
import { V } from "./chunk-j32s98r9.js";
import { Sd, sn } from "./chunk-ngj43h87.js";
import { mt } from "./chunk-18g32wet.js";
import { Tr } from "./chunk-nh2498vy.js";
import { W5t } from "./chunk-mdxeekqd.js";
import { Do } from "./chunk-bffrn2r2.js";
import { hlt, Z3t } from "./chunk-53svjtvq.js";
import { vs } from "./chunk-artk45zy.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { de, P, ee, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
function Xt(Y) {
  return e(sn.Item, { label: Jn(Y.title), meta: Le(Y) }, Y.draft_id);
}
function Jt(te) {
  return e(sn.Item, { label: Jn(te.title), meta: Le(te) }, te.draft_id);
}
var Fe = ["bug", "idea", "missing_capability"],
  xt = { bug: "bug", idea: "idea", missing_capability: "missing capability" },
  Ne = [void 0, ...N9t],
  Ke = [void 0, ...$9t];
function st(h) {
  return h === void 0 ? "(none)" : h.replace(/_/g, " ");
}
function ot(h) {
  return [
    "type",
    "title",
    "area",
    "failure_mode",
    "task_category",
    "details",
    ...(h.transcriptAvailable ? ["transcript"] : []),
    "send"
  ];
}
var Pe = 500,
  at = 6,
  lt = 3,
  dt = 5;
function vxt({ messages: h, onDone: u, abortSignal: c, onWriteNew: d }) {
  let [f, D] = y(null),
    [b, B] = y(0),
    J = rt(),
    [m, L] = y("list"),
    [i, A] = y(null),
    [_, K] = y(!1),
    [H, T, M] = au(0),
    [R, k, q] = au(null),
    [G, z] = y(null),
    ce = C(-1 / 0),
    [se, E] = y(null),
    [oe, ue] = y(null),
    Z = Te().columns - 6,
    x = fn(),
    ae = C(0),
    Y = C(!1),
    te = C(0),
    fe = C(!1),
    ye = C(!1),
    { storageV5: W, credentials: je } = Me(),
    Ve = Es(),
    ie = Jr((t) => t.id),
    me = d !== void 0,
    le = de(async () => {
      let { queued: t } = await Wpe(void 0, W).catch(() => ({ queued: [], expired: [] }));
      (Pgs(F(t, (l) => l.source_session_id === ie)), D(t));
      let o = t.length - (me ? 0 : 1);
      return (B((l) => Math.min(l, Math.max(0, o))), t);
    }, [ie, me, W, B]);
  P(() => {
    le().then((t) => {
      a("tengu_feedback_queue_opened", {
        queued_count: Vr(t.length),
        this_session_count: Vr(F(t, (o) => o.source_session_id === ie))
      });
    });
  }, [le, ie]);
  let Xe = (f ?? []).filter((t) => t.source_session_id === ie),
    Je = (f ?? []).filter((t) => t.source_session_id !== ie),
    re = [...Xe, ...Je],
    ze = me && b === re.length,
    Qe = re.length + (me ? 1 : 0),
    Dt = re[b],
    Oe = i ? vdt(i.request_ids).length : 0,
    pe = de(
      (t) => {
        if (t === void 0) u();
        else u(t, { display: "system" });
      },
      [u]
    ),
    O = ee(() => (i ? ot(i) : []), [i]),
    ke = de(
      (t) => {
        ((ae.current = x.now()), T(t.length - 1));
      },
      [x, T]
    ),
    p = O[H],
    he = p === "title" || p === "area" || p === "details",
    _t = de(
      (t) => {
        (A(t),
          K(t.transcriptAvailable),
          E(null),
          k({
            type: t.type,
            title: Jn(t.title),
            area: Jn(t.area ?? ""),
            failureMode: t.failure_mode,
            taskCategory: t.task_category,
            details: jbt(t.details)
          }),
          z(null),
          (ce.current = -1 / 0),
          ke(ot(t)),
          (te.current = x.now()),
          (Y.current = !1),
          (ye.current = !1),
          L("review"));
      },
      [x, ke, k]
    ),
    Ze = de(
      async (t) => {
        let o = x.now(),
          l = te.current;
        if (((te.current = Math.max(o, l)), o - l < Pe || fe.current || Y.current)) return;
        fe.current = !0;
        try {
          (await Z3t(t, "panel", W).catch(() => {}), await le(), L("list"), A(null));
        } finally {
          fe.current = !1;
        }
      },
      [le, x, W]
    ),
    xe = de(
      (t) => {
        (A(t), D((g) => (g ? g.map((v) => (v.draft_id === t.draft_id ? t : v)) : g)));
        let { transcriptAvailable: o, ...l } = t;
        return kyr(l, new Date(), W).then((g) => {
          if (!g.success)
            E(
              g.reason === "too_large"
                ? "That draft is too large to save. Trim the details."
                : "Could not save the draft to disk."
            );
        });
      },
      [W]
    ),
    ve = de(() => {
      let t = q();
      if (!i || !t) return i;
      let o = Jn(i.title),
        l = Jn(i.area ?? ""),
        g = jbt(i.details),
        v = t.title === o || t.title.trim() === "" ? i.title : t.title.trim(),
        Ce = t.area === l ? (i.area ?? "") : t.area.trim(),
        it = t.details === g ? i.details : t.details.trim() === "" ? "" : t.details;
      if (
        t.type === i.type &&
        v === i.title &&
        (Ce === "" ? void 0 : Ce) === i.area &&
        t.failureMode === i.failure_mode &&
        t.taskCategory === i.task_category &&
        it === i.details
      )
        return i;
      return {
        ...i,
        type: t.type,
        title: v,
        area: Ce === "" ? void 0 : Ce,
        failure_mode: t.failureMode,
        task_category: t.taskCategory,
        details: it
      };
    }, [i, q]),
    et = de(() => {
      let t = ve();
      if (t && t !== i) {
        if (i && t.details === "" && i.details !== "" && x.now() - ce.current < Pe)
          t = { ...t, details: i.details };
        xe(t);
      }
    }, [ve, i, xe, x]),
    U = de(
      (t) => {
        (z(null),
          E((o) => (o === De ? null : o)),
          T((o) => {
            let l = Math.max(0, Math.min(O.length - 1, o + t));
            if (l !== o && O[l] === "send") ae.current = x.now();
            return l;
          }));
      },
      [O, x, T]
    ),
    Tt = de(
      (t, o) => {
        if (t === "type")
          k((l) => {
            if (!l) return l;
            let g = Fe.indexOf(l.type),
              v = Fe[(g + o + Fe.length) % Fe.length];
            return v ? { ...l, type: v } : l;
          });
        else if (t === "failure_mode")
          k((l) => {
            if (!l) return l;
            let g = Ne.indexOf(l.failureMode),
              v = Ne.length;
            return { ...l, failureMode: Ne[(g + o + v) % v] };
          });
        else if (t === "task_category")
          k((l) => {
            if (!l) return l;
            let g = Ke.indexOf(l.taskCategory),
              v = Ke.length;
            return { ...l, taskCategory: Ke[(g + o + v) % v] };
          });
        else if (t === "transcript") K((l) => !l);
      },
      [k]
    ),
    Rt = de(async () => {
      if (!i || Y.current || fe.current) return;
      let t = x.now(),
        o = ae.current;
      if (((ae.current = Math.max(t, o)), t - o < Pe)) return;
      if (q()?.title.trim() === "") {
        E("Title is blank. Type a title, or press esc on the field to restore it.");
        return;
      }
      let l = ve() ?? i;
      if (((Y.current = !0), L("submitting"), E(null), l !== i)) await xe(l);
      let g;
      try {
        g = await hlt({
          draft: l,
          includeTranscript: _ && l.transcriptAvailable,
          currentSessionMessages: h,
          signal: c,
          storageV5: W,
          host: Ve,
          credentials: je
        });
      } catch {
        g = {
          success: !1,
          error: "Couldn't send feedback. The draft is still queued. Try again later."
        };
      }
      if (((Y.current = !1), g.success)) (await le(), ue(g.feedbackId), L("receipt"));
      else {
        if ((E(g.error), g.payloadTooLarge)) {
          let v = O.indexOf("transcript");
          if (v >= 0) T(v);
        }
        L("review");
      }
    }, [i, q, _, h, c, le, x, ve, xe, W, je, Ve, O, T]);
  function St(t) {
    if (t.ctrl || t.meta) return;
    if (m === "submitting") {
      t.preventDefault();
      return;
    }
    if (t.key === "escape" && !(m === "review" && he)) return;
    if (m === "receipt") {
      if ((t.preventDefault(), (f?.length ?? 0) > 0)) (L("list"), A(null));
      else pe(`Feedback sent (receipt ${oe})`);
      return;
    }
    if (m === "list") {
      if (!f) {
        t.preventDefault();
        return;
      }
      if (t.key.toLowerCase() === "w" && d) {
        (t.preventDefault(), d());
        return;
      }
      if (Qe === 0) {
        (t.preventDefault(), pe());
        return;
      }
      if (re.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault();
      else if (t.key === "return" && d) (t.preventDefault(), d());
      else if (t.key !== "escape") (t.preventDefault(), pe());
      return;
    }
    if (m === "review" && i) {
      if (ye.current) {
        t.preventDefault();
        return;
      }
      if (he) {
        if (t.key === "escape") (t.preventDefault(), tt());
        return;
      }
      let o = O[M()];
      if (t.key === "up") (t.preventDefault(), U(-1));
      else if (t.key === "down") (t.preventDefault(), U(1));
      else if (t.key === "left" || t.key === "right")
        (t.preventDefault(), Tt(o, t.key === "left" ? -1 : 1));
      else if (t.key === " " && o === "transcript") (t.preventDefault(), K((l) => !l));
      else if (t.key === "return")
        if ((t.preventDefault(), o === "send")) Rt();
        else U(1);
      else if (t.key.toLowerCase() === "d" && o !== "title" && o !== "area" && o !== "details")
        (t.preventDefault(), Ze(i));
    }
  }
  let ge = de(() => {
      if (ye.current || Y.current || fe.current) return;
      ((ye.current = !0), et(), (te.current = -1 / 0), L("list"), A(null));
    }, [et]),
    tt = de(() => {
      if (m !== "review") {
        pe();
        return;
      }
      let t = O[M()];
      if (t !== "title" && t !== "area" && t !== "details") {
        ge();
        return;
      }
      (k((o) => (o && i ? { ...o, [t]: t === "details" ? jbt(i.details) : Jn(i[t] ?? "") } : o)),
        z(null),
        ke(O),
        E((o) => (o === De ? null : o)));
    }, [m, i, O, M, ge, k, ke, pe]),
    nt = !(J && re.length > 0),
    Et =
      m === "list"
        ? r(Ee, {
            children: [
              Qe > 0 &&
                nt &&
                e(V, { chord: "enter", action: ze ? "write new feedback" : "review" }),
              Dt !== void 0 && nt && e(V, { chord: "d", action: "discard" }),
              e(V, { chord: "esc", action: "close" })
            ]
          })
        : m === "review"
          ? r(Ee, {
              children: [
                e(V, { chord: ["up", "down"], action: "move" }),
                (p === "type" ||
                  p === "failure_mode" ||
                  p === "task_category" ||
                  p === "transcript") &&
                  e(V, { chord: ["left", "right"], action: "change" }),
                e(V, { chord: "enter", action: p === "send" ? "send" : "next" }),
                p === "details" &&
                  e(V, { chord: Cpe() ? "shift+enter" : "ctrl+j", action: "new line" }),
                !he && e(V, { chord: "d", action: "discard" }),
                e(V, { chord: "esc", action: he ? "cancel edit" : "later" })
              ]
            })
          : null;
  return e(Do, {
    onKeyDown: St,
    children: r(we, {
      title: "Feedback drafts",
      onCancel: tt,
      isCancelActive: m !== "submitting" && !he,
      hideInputGuide: m === "receipt" || m === "submitting",
      inputGuide: Et,
      children: [
        m === "list" && f === null && e(n, { dimColor: !0, children: "Loading\u2026" }),
        m === "list" &&
          f !== null &&
          re.length === 0 &&
          r(s, {
            flexDirection: "column",
            gap: 1,
            children: [
              e(n, { children: "No feedback drafts queued." }),
              e(n, {
                dimColor: !0,
                children:
                  "Claude drafts feedback at high-signal moments; drafts appear here for your review."
              }),
              d
                ? r(s, {
                    flexDirection: "column",
                    gap: 1,
                    children: [
                      e(vt, { isSelected: ze }),
                      e(n, {
                        dimColor: !0,
                        children: "/bug works anytime. Any other key closes this panel."
                      })
                    ]
                  })
                : e(n, { dimColor: !0, children: "Any key closes this panel." })
            ]
          }),
        m === "list" &&
          f !== null &&
          re.length > 0 &&
          r(s, {
            flexDirection: "column",
            children: [
              e(Ct, {
                thisSession: Xe,
                others: Je,
                hasWriteNew: me,
                defaultFocusIndex: b,
                onFocus: B,
                onOpen: _t,
                onWriteNew: () => d?.(),
                onDiscard: (t) => void Ze(t)
              }),
              e(s, {
                marginTop: 1,
                children: e(n, {
                  dimColor: !0,
                  wrap: "wrap",
                  children:
                    "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
                })
              })
            ]
          }),
        m === "review" &&
          i &&
          R &&
          r(s, {
            flexDirection: "column",
            children: [
              r(s, {
                children: [
                  e(N, { isFocused: p === "type" }),
                  e(n, { children: "Type: " }),
                  e(be, { value: xt[R.type], isFocused: p === "type" })
                ]
              }),
              e(Ae, {
                label: "Title:",
                value: R.title,
                isFocused: p === "title",
                bold: !0,
                columns: Z,
                cursorOffset: G,
                onChange: (t) => k((o) => (o ? { ...o, title: t } : o)),
                onCursorChange: z,
                onNext: () => U(1),
                onPrev: () => U(-1),
                onExit: ge
              }),
              e(Ae, {
                label: "Area:",
                value: R.area,
                isFocused: p === "area",
                dim: !0,
                columns: Z,
                cursorOffset: G,
                onChange: (t) => k((o) => (o ? { ...o, area: t } : o)),
                onCursorChange: z,
                onNext: () => U(1),
                onPrev: () => U(-1),
                onExit: ge
              }),
              r(s, {
                children: [
                  e(N, { isFocused: p === "failure_mode" }),
                  e(n, { children: "Failure mode: " }),
                  e(be, { value: st(R.failureMode), isFocused: p === "failure_mode" })
                ]
              }),
              r(s, {
                children: [
                  e(N, { isFocused: p === "task_category" }),
                  e(n, { children: "Task: " }),
                  e(be, { value: st(R.taskCategory), isFocused: p === "task_category" })
                ]
              }),
              e(Ae, {
                label: "Details:",
                value: R.details,
                isFocused: p === "details",
                dim: !0,
                multiline: !0,
                columns: Z,
                cursorOffset: G,
                onChange: (t) => {
                  let o = Buffer.byteLength(t, "utf8");
                  if (o > hyr && o >= Buffer.byteLength(R.details, "utf8")) {
                    E(De);
                    return;
                  }
                  (k((l) => {
                    if (l && l.details.trim() !== "" && t.trim() === "") ce.current = x.now();
                    return l ? { ...l, details: t } : l;
                  }),
                    E((l) => (l === De ? null : l)));
                },
                onCursorChange: z,
                onNext: () => U(1),
                onPrev: () => U(-1),
                onExit: ge
              }),
              i.transcriptAvailable
                ? r(s, {
                    flexDirection: "column",
                    children: [
                      r(s, {
                        children: [
                          e(N, { isFocused: p === "transcript" }),
                          e(n, { children: "Send transcript: " }),
                          e(be, { value: _ ? "yes" : "no", isFocused: p === "transcript" }),
                          r(n, {
                            dimColor: !0,
                            children: [
                              " \xB7 ",
                              _ ? "sends this conversation to Anthropic" : "report only"
                            ]
                          })
                        ]
                      }),
                      i.source_session_id !== ie &&
                        e(s, {
                          marginLeft: 4,
                          children: r(n, {
                            dimColor: !0,
                            wrap: "wrap",
                            children: [
                              "from ",
                              Jn(i.cwd),
                              " \xB7 session",
                              " ",
                              Jn(i.source_session_id)
                            ]
                          })
                        })
                    ]
                  })
                : r(s, {
                    children: [
                      e(N, { isFocused: !1 }),
                      r(n, {
                        children: [
                          "Send transcript: ",
                          e(n, { dimColor: !0, children: "expired (report only)" })
                        ]
                      })
                    ]
                  }),
              r(s, {
                marginTop: 1,
                children: [
                  e(N, { isFocused: !1 }),
                  r(n, {
                    dimColor: !0,
                    wrap: "wrap",
                    children: [
                      "Environment info (",
                      Jn(i.os),
                      ", v",
                      Jn(i.cli_version),
                      ",",
                      " ",
                      Jn(i.model),
                      i.effort !== void 0 && r(Q, { children: [", effort", " ", Jn(i.effort)] }),
                      i.thinking_type !== void 0 &&
                        r(Q, {
                          children: [
                            ", thinking ",
                            i.thinking_type,
                            i.thinking_budget !== void 0 &&
                              r(Q, { children: [" (budget ", i.thinking_budget, ")"] })
                          ]
                        }),
                      i.assistant_turn_count !== void 0 &&
                        r(Q, {
                          children: [
                            ", turn ",
                            i.assistant_turn_count,
                            i.message_count !== void 0 &&
                              r(Q, { children: ["/", i.message_count] }),
                            i.subagent_count !== void 0 &&
                              i.subagent_count > 0 &&
                              r(Q, {
                                children: [
                                  " ",
                                  "with ",
                                  i.subagent_count,
                                  " ",
                                  I(i.subagent_count, "subagent")
                                ]
                              })
                          ]
                        }),
                      ", drafted ",
                      Ft(i.created_at),
                      " ago)",
                      Oe > 0 ? ` and ${Oe} API request ${I(Oe, "id")} are` : " is",
                      " ",
                      "always attached."
                    ]
                  })
                ]
              }),
              se && e(s, { marginTop: 1, children: e(vs, { error: se }) }),
              r(s, {
                marginTop: 1,
                children: [
                  e(N, { isFocused: p === "send" }),
                  e(n, { bold: p === "send", children: "Send feedback" })
                ]
              }),
              e(s, {
                marginTop: 1,
                children: e(n, {
                  dimColor: !0,
                  wrap: "wrap",
                  children:
                    "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config."
                })
              })
            ]
          }),
        m === "submitting" && e(n, { children: "Sending feedback\u2026" }),
        m === "receipt" &&
          r(s, {
            flexDirection: "column",
            children: [
              r(n, {
                color: "success",
                children: [
                  e(mt, { status: "success", withSpace: !0 }),
                  "Feedback sent (receipt ",
                  oe,
                  "). Thanks!"
                ]
              }),
              e(s, {
                marginTop: 1,
                children: e(n, { dimColor: !0, italic: !0, children: "Any key to continue" })
              })
            ]
          })
      ]
    })
  });
}
var De = `That edit would push Details past the ${Math.floor(hyr / 1024)}KB limit. Trim the details first.`;
function ct(h, u) {
  return Yf(
    h.replace(
      /\r\n|\r/g,
      `
`
    )
  )
    .split(
      `
`
    )
    .map((c) => Cn(c))
    .join(
      u
        ? `
`
        : " "
    );
}
function N(h) {
  let f = w(3),
    { isFocused: u } = h;
  const c = u ? "suggestion" : void 0,
    d = u ? `${ne.pointer} ` : "  ";
  let D;
  if (f[0] !== c || f[1] !== d)
    ((D = e(n, { color: c, children: d })), (f[0] = c), (f[1] = d), (f[2] = D));
  else D = f[2];
  return D;
}
function be(h) {
  let d = w(6),
    { value: u, isFocused: c } = h;
  if (!c) {
    let f;
    if (d[0] !== u) ((f = e(n, { dimColor: !0, children: u })), (d[0] = u), (d[1] = f));
    else f = d[1];
    return f;
  }
  let f;
  if (d[2] === S) ((f = r(n, { dimColor: !0, children: [ne.triangleLeft, " "] })), (d[2] = f));
  else f = d[2];
  let D;
  if (d[3] === S) ((D = r(n, { dimColor: !0, children: [" ", ne.triangleRight] })), (d[3] = D));
  else D = d[3];
  let b;
  if (d[4] !== u) ((b = r(n, { children: [f, u, D] })), (d[4] = u), (d[5] = b));
  else b = d[5];
  return b;
}
function Ae(h) {
  let H = w(24),
    {
      label: u,
      value: c,
      isFocused: d,
      bold: f,
      dim: D,
      multiline: b,
      columns: B,
      cursorOffset: J,
      onChange: m,
      onCursorChange: L,
      onNext: i,
      onPrev: A,
      onExit: _
    } = h,
    K = rt(),
    T;
  if (H[0] !== d) ((T = e(N, { isFocused: d })), (H[0] = d), (H[1] = T));
  else T = H[1];
  let M;
  if (H[2] !== u) ((M = e(n, { children: u })), (H[2] = u), (H[3] = M));
  else M = H[3];
  let R;
  if (H[4] !== T || H[5] !== M)
    ((R = r(s, { children: [T, M] })), (H[4] = T), (H[5] = M), (H[6] = R));
  else R = H[6];
  let k;
  if (
    H[7] !== f ||
    H[8] !== B ||
    H[9] !== J ||
    H[10] !== D ||
    H[11] !== d ||
    H[12] !== K ||
    H[13] !== b ||
    H[14] !== m ||
    H[15] !== L ||
    H[16] !== _ ||
    H[17] !== i ||
    H[18] !== A ||
    H[19] !== c
  )
    ((k = e(s, {
      marginLeft: 4,
      children: d
        ? e(s, {
            borderStyle: b && !K ? "single" : void 0,
            borderLeft: !0,
            borderTop: !1,
            borderBottom: !1,
            borderRight: !1,
            borderDimColor: !0,
            paddingLeft: b && !K ? 1 : 0,
            children: e(Tr, {
              value: c,
              onChange: m,
              columns: b && !K ? B - 2 : B,
              onSubmit: i,
              onExit: _,
              onHistoryUp: A,
              onHistoryDown: i,
              cursorOffset: J ?? c.length,
              onChangeCursorOffset: L,
              multiline: b,
              inputFilter: (q) => ct(q, b),
              clearOnSubmit: !1,
              disableCtrlCClear: !0,
              disableBackslashReturn: b,
              disableCursorMovementForUpDownKeys: !b,
              disableEscapeDoublePress: !0,
              showCursor: !0,
              focus: !0
            })
          })
        : b
          ? e(W5t, { value: c, bold: f, dim: D, columns: B })
          : e(n, { bold: f, dimColor: D, wrap: "wrap", children: Jn(c) })
    })),
      (H[7] = f),
      (H[8] = B),
      (H[9] = J),
      (H[10] = D),
      (H[11] = d),
      (H[12] = K),
      (H[13] = b),
      (H[14] = m),
      (H[15] = L),
      (H[16] = _),
      (H[17] = i),
      (H[18] = A),
      (H[19] = c),
      (H[20] = k));
  else k = H[20];
  let G;
  if (H[21] !== R || H[22] !== k)
    ((G = r(s, { flexDirection: "column", children: [R, k] })),
      (H[21] = R),
      (H[22] = k),
      (H[23] = G));
  else G = H[23];
  return G;
}
var Ie = "+ Write new feedback";
function vt(h) {
  let f = w(3),
    { isSelected: u } = h;
  const c = u ? "suggestion" : void 0,
    d = u ? `${ne.pointer} ` : "  ";
  let D;
  if (f[0] !== c || f[1] !== d)
    ((D = r(n, { color: c, children: [d, Ie] })), (f[0] = c), (f[1] = d), (f[2] = D));
  else D = f[2];
  return D;
}
function Ct(h) {
  let i = w(34),
    {
      thisSession: u,
      others: c,
      hasWriteNew: d,
      defaultFocusIndex: f,
      onFocus: D,
      onOpen: b,
      onWriteNew: B,
      onDiscard: J
    } = h,
    { rows: m } = ds(Te()),
    L = sl(),
    A;
  if (i[0] !== c || i[1] !== u) ((A = [...u, ...c]), (i[0] = c), (i[1] = u), (i[2] = A));
  else A = i[2];
  let _ = A,
    K = (u.length > 0 ? 1 : 0) + (c.length > 0 ? 1 : 0) + _.length + (d ? 2 : 0),
    H = Math.max(dt, m - lt - (L ? 0 : at));
  const T = K > H ? H - 2 : H;
  let M;
  if (i[3] !== b || i[4] !== B || i[5] !== _)
    ((M = (R) => {
      let k = _[R];
      if (k) b(k);
      else B();
    }),
      (i[3] = b),
      (i[4] = B),
      (i[5] = _),
      (i[6] = M));
  else M = i[6];
  let q;
  if (i[7] !== J || i[8] !== _)
    ((q = (G, z) => {
      let ce = _[z];
      if (G.key.toLowerCase() === "d" && ce && !G.ctrl && !G.meta) (G.preventDefault(), J(ce));
    }),
      (i[7] = J),
      (i[8] = _),
      (i[9] = q));
  else q = i[9];
  let se;
  if (i[10] !== u.length)
    ((se =
      u.length > 0 &&
      e(Sd.Heading, { children: e(n, { bold: !0, children: "This session" }) }, "this-session")),
      (i[10] = u.length),
      (i[11] = se));
  else se = i[11];
  let E;
  if (i[12] !== u) ((E = u.map(Xt)), (i[12] = u), (i[13] = E));
  else E = i[13];
  let oe;
  if (i[14] !== c.length)
    ((oe =
      c.length > 0 &&
      e(
        Sd.Heading,
        { children: e(n, { bold: !0, children: "Other sessions" }) },
        "other-sessions"
      )),
      (i[14] = c.length),
      (i[15] = oe));
  else oe = i[15];
  let ue;
  if (i[16] !== c) ((ue = c.map(Jt)), (i[16] = c), (i[17] = ue));
  else ue = i[17];
  let Z;
  if (i[18] !== d) ((Z = d && e(Sd.Heading, {}, "gap")), (i[18] = d), (i[19] = Z));
  else Z = i[19];
  let x;
  if (i[20] !== d) ((x = d && e(sn.Item, { label: Ie }, "write-new")), (i[20] = d), (i[21] = x));
  else x = i[21];
  let ae;
  if (
    i[22] !== f ||
    i[23] !== D ||
    i[24] !== x ||
    i[25] !== T ||
    i[26] !== M ||
    i[27] !== q ||
    i[28] !== se ||
    i[29] !== E ||
    i[30] !== oe ||
    i[31] !== ue ||
    i[32] !== Z
  )
    ((ae = r(sn, {
      visibleCount: T,
      defaultFocusIndex: f,
      overflowHint: "count",
      onFocus: D,
      onSelect: M,
      onRowKeyDown: q,
      children: [se, E, oe, ue, Z, x]
    })),
      (i[22] = f),
      (i[23] = D),
      (i[24] = x),
      (i[25] = T),
      (i[26] = M),
      (i[27] = q),
      (i[28] = se),
      (i[29] = E),
      (i[30] = oe),
      (i[31] = ue),
      (i[32] = Z),
      (i[33] = ae));
  else ae = i[33];
  return ae;
}
function Le(h) {
  return [
    xt[h.type],
    Ft(h.created_at),
    Jn(h.cwd),
    h.transcriptAvailable ? "transcript available" : "transcript expired (report only)"
  ];
}
function Ft(h, u = Date.now()) {
  let c = u - Date.parse(h);
  if (!Number.isFinite(c) || c < 0) return "now";
  let d = Math.floor(c / 60000);
  if (d < 60) return `${Math.max(1, d)}m`;
  let f = Math.floor(d / 60);
  if (f < 24) return `${f}h`;
  return `${Math.floor(f / 24)}d`;
}
export { vxt };

//# sourceMappingURL=chunk-tfpf8e6s.js.map
