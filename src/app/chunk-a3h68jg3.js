// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Qf } from "./chunk-fs43t96t.js";
import { U } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { ekn } from "./chunk-dc0nzty2.js";
import { Kln } from "./chunk-6h7ejyet.js";
import { son, OTo, ai } from "./chunk-j0tbz6ra.js";
import { ne } from "./chunk-39xmt821.js";
import { cd } from "./chunk-5bpsfngr.js";
import { w } from "./chunk-7m7t89vx.js";
import { sl } from "./chunk-1kj0zhn3.js";
import { Me } from "./chunk-rf7g1m78.js";
import { s, n } from "./chunk-h56pfqh7.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { dlt } from "./chunk-cde0823w.js";
import { Uxt } from "./chunk-vgsmcxaz.js";
import { hE, we } from "./chunk-bf8qkzmg.js";
import { V } from "./chunk-j32s98r9.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { ji } from "./chunk-jfdswx4x.js";
import { APe } from "./chunk-214fx1an.js";
import { Ho } from "./chunk-6dqmkjzd.js";
import { iw, IC } from "./chunk-j7vwsewt.js";
import { Q, e, r } from "./chunk-f790ajz4.js";
import { de, P, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
j();
j();
function M({ onStashAndContinue: T, onCancel: d, cancelQuits: l }) {
  let [f, R] = y(null),
    m = f !== null ? [...f.tracked, ...f.untracked] : [],
    [W, E] = y(!0),
    [x, c] = y(!1),
    [L, I] = y(null);
  P(() => {
    (async () => {
      try {
        let { cwd: o } = son(),
          h = await ekn(o, cd(o, void 0, { userLocale: !0 }));
        R(h);
      } catch (o) {
        let h = o instanceof Error ? o.message : String(o);
        (t(`Error getting changed files: ${h}`, { level: "error" }),
          I(o instanceof Qf ? o.message : "Failed to get changed files"));
      } finally {
        E(!1);
      }
    })();
  }, []);
  let v = async () => {
    c(!0);
    try {
      if ((t("Stashing changes before teleport..."), !(await OTo("Teleport auto-stash", son())))) {
        (I("Failed to stash changes"), c(!1));
        return;
      }
      t("Successfully stashed changes");
    } catch (i) {
      let o = i instanceof Error ? i.message : String(i);
      (t(`Error stashing changes: ${o}`, { level: "error" }),
        I(i instanceof Qf ? i.message : "Failed to stash changes"),
        c(!1));
      return;
    }
    try {
      await T();
    } finally {
      c(!1);
    }
  };
  if (W)
    return e(s, {
      flexDirection: "column",
      padding: 1,
      children: r(s, {
        marginBottom: 1,
        children: [e(ji, {}), r(n, { children: [" Checking git status", ne.ellipsis] })]
      })
    });
  if (L)
    return r(s, {
      flexDirection: "column",
      padding: 1,
      children: [
        r(n, { bold: !0, color: "error", children: ["Error: ", L] }),
        e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            children: e(V, { chord: "escape", action: "cancel", bold: !0 })
          })
        })
      ]
    });
  let a = m.length > 8,
    p = x && !l;
  return r(
    we,
    {
      title: "Working directory has changes",
      onCancel: p ? he : d,
      exitOnCtrlCD: l || p,
      inputGuide: p ? "Teleport continues when the stash finishes\u2026" : void 0,
      children: [
        e(n, { children: "Teleport will switch git branches. The following changes were found:" }),
        e(s, {
          flexDirection: "column",
          paddingLeft: 2,
          children:
            m.length > 0
              ? a
                ? r(n, { children: [m.length, " files changed"] })
                : m.map((i, o) => e(n, { children: i }, o))
              : e(Ho, { children: "No changes detected" })
        }),
        e(n, { children: "Would you like to stash these changes and continue with teleport?" }),
        x
          ? r(s, { children: [e(ji, {}), e(n, { children: " Stashing changes..." })] })
          : e(dr, {
              confirmLabel: "Stash changes and continue",
              cancelLabel: l ? "Exit" : "Cancel",
              onConfirm: () => void v(),
              onCancel: d
            })
      ]
    },
    p ? "stashing" : "asking"
  );
}
function he() {}
function xe() {
  return ai(0);
}
var X = new Set();
function uxn(T) {
  let a = w(32),
    { onComplete: d, onCancel: l, errorsToIgnore: f, isStandalone: R } = T,
    m = f === void 0 ? X : f,
    W = R === void 0 ? !1 : R,
    [E, x] = y(null),
    [c, L] = y(!1),
    I = sl(),
    { credentials: v } = Me(),
    p;
  if (a[0] !== v || a[1] !== m || a[2] !== d)
    ((p = async () => {
      let i = await Kln(v, m);
      if (i.size === 0) {
        d();
        return;
      }
      if (i.has("needsLogin")) x("needsLogin");
      else if (i.has("needsGitStash")) x("needsGitStash");
    }),
      (a[0] = v),
      (a[1] = m),
      (a[2] = d),
      (a[3] = p));
  else p = a[3];
  let o = p,
    h,
    ae;
  if (a[4] !== o)
    ((h = () => {
      o();
    }),
      (ae = [o]),
      (a[4] = o),
      (a[5] = h),
      (a[6] = ae));
  else ((h = a[5]), (ae = a[6]));
  P(h, ae);
  let g = l === void 0,
    u = l ?? xe,
    le;
  if (a[7] !== o)
    ((le = () => {
      (L(!1), o());
    }),
      (a[7] = o),
      (a[8] = le));
  else le = a[8];
  let G = le,
    ce;
  if (a[9] === S)
    ((ce = () => {
      L(!0);
    }),
      (a[9] = ce));
  else ce = a[9];
  let Le = ce,
    ge;
  if (a[10] !== o) ((ge = () => o()), (a[10] = o), (a[11] = ge));
  else ge = a[11];
  let H = ge,
    { entries: K, exitState: me } = Uxt(l, void 0, l !== void 0 && c);
  const z = W && E === "needsGitStash";
  let ue;
  if (a[12] !== z) ((ue = { context: "Confirmation", isActive: z }), (a[12] = z), (a[13] = ue));
  else ue = a[13];
  if ((lt("confirm:no", u, ue), !E)) {
    return null;
  }
  switch (E) {
    case "needsGitStash": {
      let C;
      if (a[14] !== g || a[15] !== H || a[16] !== u)
        ((C = e(M, { onStashAndContinue: H, onCancel: u, cancelQuits: g })),
          (a[14] = g),
          (a[15] = H),
          (a[16] = u),
          (a[17] = C));
      else C = a[17];
      return C;
    }
    case "needsLogin": {
      const C = I ? IC : iw;
      let pe;
      if (a[18] !== G || a[19] !== C)
        ((pe = e(APe, { onDone: G, mode: "login", forceLoginMethod: "claudeai", urlOutdent: C })),
          (a[18] = G),
          (a[19] = C),
          (a[20] = pe));
      else pe = a[20];
      let B = pe;
      const Y = c ? G : u;
      const J = me.pending ? `Press ${me.keyName} again to cancel` : void 0;
      let A;
      if (a[21] !== g || a[22] !== c || a[23] !== K || a[24] !== u || a[25] !== B)
        ((A = c
          ? g
            ? B
            : e(hE, { claimFocus: !0, flexDirection: "column", bindings: K, children: B })
          : r(Q, {
              children: [
                r(s, {
                  flexDirection: "column",
                  children: [
                    e(n, { dimColor: !0, children: "Teleport requires a Claude.ai account." }),
                    e(n, {
                      dimColor: !0,
                      children: "Your Claude Pro/Max subscription will be used by Claude Code."
                    })
                  ]
                }),
                e(dr, {
                  confirmLabel: "Login with Claude account",
                  cancelLabel: g ? "Exit" : "Cancel",
                  onConfirm: Le,
                  onCancel: u
                })
              ]
            })),
          (a[21] = g),
          (a[22] = c),
          (a[23] = K),
          (a[24] = u),
          (a[25] = B),
          (a[26] = A));
      else A = a[26];
      let fe;
      if (a[27] !== g || a[28] !== Y || a[29] !== J || a[30] !== A)
        ((fe = e(we, {
          title: "Log in to Claude",
          onCancel: Y,
          exitOnCtrlCD: g,
          inputGuide: J,
          children: A
        })),
          (a[27] = g),
          (a[28] = Y),
          (a[29] = J),
          (a[30] = A),
          (a[31] = fe));
      else fe = a[31];
      return fe;
    }
  }
}
function mEi(T, d) {
  return dlt(T, [(l) => e(uxn, { errorsToIgnore: d, onComplete: () => l(), isStandalone: !0 })], {
    session: U()
  });
}
export { uxn, mEi };

//# sourceMappingURL=chunk-a3h68jg3.js.map
