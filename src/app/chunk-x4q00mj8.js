// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { zYt } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { Qf, d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { fo } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { bYo } from "./chunk-ajtyjx88.js";
import { gt, d2 } from "./chunk-wr0p4ndg.js";
import { Vi } from "./chunk-at88wjsn.js";
import { ist } from "./chunk-5y69fhjv.js";
import { Nje } from "./chunk-j0tbz6ra.js";
import { w } from "./chunk-7m7t89vx.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { V } from "./chunk-j32s98r9.js";
import { Te } from "./chunk-pbpv20s6.js";
import { ds } from "./chunk-1kj0zhn3.js";
import { qs } from "./chunk-y43e6aw3.js";
import { Je } from "./chunk-fgf47p3n.js";
import { Ee } from "./chunk-xzcese97.js";
import { ji } from "./chunk-jfdswx4x.js";
import { qr } from "./chunk-avncq6qa.js";
import { uxn } from "./chunk-a3h68jg3.js";
import { TA } from "./chunk-63zjsa96.js";
import { ft } from "./chunk-g2kc6h82.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { de, P, y, j } from "./chunk-bq35vvkw.js";
import { _e } from "./chunk-n8wdmnah.js";
import { S } from "./chunk-a2y39866.js";
j();
j();
function J(h) {
  let C = w(8),
    [i, R] = y(!1),
    [p, I] = y(null),
    [u, N] = y(null),
    K;
  if (C[0] !== h)
    ((K = async (l) => {
      (R(!0),
        I(null),
        N(l),
        a("tengu_teleport_resume_session", { source: c(h), session_id: _e(l.id) }));
      ;
      try {
        let m = await fo("teleport_resume", () => Nje(l.id));
        return (zYt({ sessionId: l.id }), R(!1), m);
      } catch (T) {
        let x = T;
        let G = {
          message: x instanceof Qf ? x.message : d(x),
          formattedMessage: x instanceof Qf ? x.formattedMessage : void 0,
          isOperationError: x instanceof Qf
        };
        return (I(G), R(!1), null);
      }
    }),
      (C[0] = h),
      (C[1] = K));
  else K = C[1];
  let _ = K,
    T;
  if (C[2] === S)
    ((T = () => {
      I(null);
    }),
      (C[2] = T));
  else T = C[2];
  let X = T,
    k;
  if (C[3] !== p || C[4] !== i || C[5] !== _ || C[6] !== u)
    ((k = { resumeSession: _, isResuming: i, error: p, selectedSession: u, clearError: X }),
      (C[3] = p),
      (C[4] = i),
      (C[5] = _),
      (C[6] = u),
      (C[7] = k));
  else k = C[7];
  return k;
}
j();
var fe = "Updated",
  ge = "Origin",
  xe = "Remote Control",
  le = Math.max(ge.length, xe.length),
  F = "  ";
function ce({ onSelect: h, onCancel: i, isEmbedded: R = !1 }) {
  let { rows: p, columns: I } = ds(Te()),
    [u, N] = y([]),
    [C, K] = y(null),
    [l, T] = y(!0),
    [m, x] = y(null),
    [G, _] = y(null),
    [X, k] = y(!1),
    [q, H] = y(!1),
    [L, W] = y(1),
    Y = qs("confirm:no", "Confirmation", "Esc"),
    D = de(async () => {
      try {
        (T(!0), x(null));
        let o = await ist();
        (K(o), t(`Current repository: ${o || "not detected"}`));
        let f = await bYo(),
          E = f;
        if (o)
          ((E = f.filter((v) => {
            if (!v.repo) return !1;
            return `${v.repo.owner.login}/${v.repo.name}` === o;
          })),
            t(`Filtered ${E.length} sessions for repo ${o} from ${f.length} total`));
        let te = [...E].sort((v, ne) => {
          let De = new Date(v.updated_at);
          return new Date(ne.updated_at).getTime() - De.getTime();
        });
        N(te);
      } catch (o) {
        let f = o instanceof Error ? o.message : String(o);
        if (
          (t(`Error loading code sessions: ${f}`),
          o instanceof Error && o.name === "CloudSessionAccessError")
        )
          (_(o.message), x("refused"));
        else x(Oe(f));
      } finally {
        (T(!1), k(!1));
      }
    }, []),
    Z = () => {
      (k(!0), D());
    };
  lt("confirm:no", i, { context: "Confirmation" });
  function g(o) {
    if (o.ctrl && o.key === "c") {
      (o.preventDefault(), i());
      return;
    }
    if (o.ctrl && o.key === "r" && m) {
      (o.preventDefault(), Z());
      return;
    }
    if (m !== null && o.key === "return") {
      (o.preventDefault(), i());
      return;
    }
  }
  let b = de(() => {
    (H(!0), D());
  }, [H, D]);
  if (!q) return e(uxn, { onComplete: b, onCancel: R ? i : void 0 });
  if (l)
    return e(s, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: g,
      children: e(qr, {
        message: "Loading Claude Code sessions\u2026",
        bold: !0,
        subtitle: X ? "Retrying\u2026" : "Fetching your Claude Code sessions\u2026"
      })
    });
  if (m)
    return r(s, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: g,
      children: [
        e(n, { bold: !0, color: "error", children: "Error loading Claude Code sessions" }),
        Pe(m, G),
        r(n, {
          dimColor: !0,
          children: [
            "Press ",
            e(n, { bold: !0, children: "Ctrl+R" }),
            " to retry \xB7 Press",
            " ",
            e(n, { bold: !0, children: Y }),
            " to cancel"
          ]
        })
      ]
    });
  if (u.length === 0)
    return r(s, {
      flexDirection: "column",
      padding: 1,
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: g,
      children: [
        r(n, {
          bold: !0,
          children: ["No Claude Code sessions found", C && r(n, { children: [" for ", C] })]
        }),
        e(s, {
          marginTop: 1,
          children: r(n, {
            dimColor: !0,
            children: ["Press ", e(n, { bold: !0, children: Y }), " to cancel"]
          })
        })
      ]
    });
  let z = u.map((o) => ({ ...o, timeString: d2(new Date(o.updated_at)) })),
    O = Math.max(fe.length, ...z.map((o) => o.timeString.length)),
    ee = u.some((o) => o.environment_kind === "bridge"),
    Se = ee ? le + F.length : 0,
    ue = String(u.length).length + 2,
    ye = I - 4 - ue - O - F.length - Se,
    pe = z.map(({ timeString: o, title: f, id: E, environment_kind: te }) => {
      let v = o.padEnd(O, " ");
      return {
        label: r(Q, {
          children: [
            v,
            F,
            ee &&
              r(Q, {
                children: [
                  e(n, { dimColor: !0, children: (te === "bridge" ? xe : "").padEnd(le, " ") }),
                  F
                ]
              }),
            gt(Vi(f).replace(/\s+/g, " ").trim(), ye)
          ]
        }),
        value: E
      };
    }),
    oe = 7,
    re = Math.max(1, R ? Math.min(u.length, 5, p - 6 - oe) : Math.min(u.length, p - 1 - oe)),
    Re = re + oe,
    be = u.length > re;
  return r(s, {
    flexDirection: "column",
    padding: 1,
    height: Re,
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: g,
    children: [
      r(n, {
        bold: !0,
        children: [
          "Select a session to resume",
          be && r(n, { dimColor: !0, children: [" ", "(", L, " of ", u.length, ")"] }),
          C && r(n, { dimColor: !0, children: [" (", C, ")"] }),
          ":"
        ]
      }),
      r(s, {
        flexDirection: "column",
        marginTop: 1,
        flexGrow: 1,
        children: [
          e(s, {
            marginLeft: 2 + ue,
            children: r(n, {
              bold: !0,
              children: [fe.padEnd(O, " "), F, ee && ge.padEnd(le, " ") + F, "Session Title"]
            })
          }),
          e(Je, {
            visibleOptionCount: re,
            options: pe,
            onChange: (o) => {
              let f = u.find((E) => E.id === o);
              if (f) h(f);
            },
            onFocus: (o) => {
              let f = pe.findIndex((E) => E.value === o);
              if (f >= 0) W(f + 1);
            }
          })
        ]
      }),
      e(s, {
        flexDirection: "row",
        children: e(n, {
          dimColor: !0,
          children: r(Ee, {
            children: [
              e(V, { chord: ["up", "down"], action: "select" }),
              e(V, { chord: "enter", action: "confirm" }),
              e(ft, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel"
              })
            ]
          })
        })
      })
    ]
  });
}
function Oe(h) {
  let i = h.toLowerCase();
  if (i.includes("fetch") || i.includes("network") || i.includes("timeout")) return "network";
  if (
    i.includes("auth") ||
    i.includes("token") ||
    i.includes("permission") ||
    i.includes("oauth") ||
    i.includes("not authenticated") ||
    i.includes("/login") ||
    i.includes("console account") ||
    i.includes("403")
  )
    return "auth";
  if (i.includes("api") || i.includes("rate limit") || i.includes("500") || i.includes("529"))
    return "api";
  return "other";
}
function Pe(h, i) {
  switch (h) {
    case "refused":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, { dimColor: !0, children: i })
      });
    case "network":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, { dimColor: !0, children: "Check your internet connection" })
      });
    case "auth":
      return r(s, {
        marginY: 1,
        flexDirection: "column",
        children: [
          e(n, { dimColor: !0, children: "Teleport requires a Claude account" }),
          r(n, {
            dimColor: !0,
            children: [
              "Run ",
              e(n, { bold: !0, children: "/login" }),
              ' and select "Claude account with subscription"'
            ]
          })
        ]
      });
    case "api":
      return e(s, {
        marginY: 1,
        flexDirection: "column",
        children: e(n, { dimColor: !0, children: "Sorry, Claude encountered an error" })
      });
    case "other":
      return e(s, {
        marginY: 1,
        flexDirection: "row",
        children: e(n, { dimColor: !0, children: "Sorry, Claude Code encountered an error" })
      });
  }
}
function Aat(h) {
  let m = w(30),
    { onComplete: i, onCancel: R, onError: p, isEmbedded: I, source: u } = h,
    N = I === void 0 ? !1 : I,
    { resumeSession: C, isResuming: K, error: l, selectedSession: T } = J(u),
    x,
    G;
  if (m[0] !== u)
    ((x = () => {
      a("tengu_teleport_started", { source: c(u) });
    }),
      (G = [u]),
      (m[0] = u),
      (m[1] = x),
      (m[2] = G));
  else ((x = m[1]), (G = m[2]));
  P(x, G);
  let _;
  if (m[3] !== l || m[4] !== i || m[5] !== p || m[6] !== C)
    ((_ = async (X) => {
      let k = await C(X);
      if (k) i(k);
      else if (l) {
        if (p) p(l.message, l.formattedMessage);
      }
    }),
      (m[3] = l),
      (m[4] = i),
      (m[5] = p),
      (m[6] = C),
      (m[7] = _));
  else _ = m[7];
  let q = _,
    H;
  if (m[8] !== R)
    ((H = () => {
      (a("tengu_teleport_cancelled", {}), R());
    }),
      (m[8] = R),
      (m[9] = H));
  else H = m[9];
  let L = H;
  const W = !!l && !p;
  let Y;
  if (m[10] !== W) ((Y = { context: "Global", isActive: W }), (m[10] = W), (m[11] = Y));
  else Y = m[11];
  lt("app:interrupt", L, Y);
  let D;
  if (m[12] !== l || m[13] !== p) ((D = !!l && !p && TA()), (m[12] = l), (m[13] = p), (m[14] = D));
  else D = m[14];
  let Z;
  if (m[15] !== D) ((Z = { context: "Confirmation", isActive: D }), (m[15] = D), (m[16] = Z));
  else Z = m[16];
  if ((lt("confirm:no", L, Z), K && T)) {
    let g;
    if (m[17] === S)
      ((g = r(s, {
        flexDirection: "row",
        children: [e(ji, {}), e(n, { bold: !0, children: "Resuming session\u2026" })]
      })),
        (m[17] = g));
    else g = m[17];
    let b;
    if (m[18] !== T.title)
      ((b = r(s, {
        flexDirection: "column",
        padding: 1,
        children: [g, r(n, { dimColor: !0, children: ['Loading "', T.title, '"\u2026'] })]
      })),
        (m[18] = T.title),
        (m[19] = b));
    else b = m[19];
    return b;
  }
  if (l && !p) {
    let g;
    if (m[20] === S)
      ((g = e(n, { bold: !0, color: "error", children: "Failed to resume session" })), (m[20] = g));
    else g = m[20];
    let b;
    if (m[21] !== l.message)
      ((b = e(n, { dimColor: !0, children: l.message })), (m[21] = l.message), (m[22] = b));
    else b = m[22];
    let z;
    if (m[23] === S)
      ((z = e(s, {
        marginTop: 1,
        children: e(n, {
          dimColor: !0,
          italic: !0,
          children: e(V, { chord: "escape", action: "cancel" })
        })
      })),
        (m[23] = z));
    else z = m[23];
    let O;
    if (m[24] !== b)
      ((O = r(s, { flexDirection: "column", padding: 1, children: [g, b, z] })),
        (m[24] = b),
        (m[25] = O));
    else O = m[25];
    return O;
  }
  let g;
  if (m[26] !== L || m[27] !== q || m[28] !== N)
    ((g = e(ce, { onSelect: q, onCancel: L, isEmbedded: N })),
      (m[26] = L),
      (m[27] = q),
      (m[28] = N),
      (m[29] = g));
  else g = m[29];
  return g;
}
export { Aat };

//# sourceMappingURL=chunk-x4q00mj8.js.map
