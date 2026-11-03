// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Da } from "./chunk-6b3j8amt.js";
import { w } from "./chunk-7m7t89vx.js";
import { xe } from "./chunk-pnyqvnxs.js";
import { Gn, xr } from "./chunk-61vn6n52.js";
import { F8t, Ogr, fn, rt } from "./chunk-h56pfqh7.js";
import { lw } from "./chunk-nkq17e49.js";
import { e } from "./chunk-f790ajz4.js";
import { Gt, de, be, P, Xt, y, j } from "./chunk-bq35vvkw.js";
j();
function D8t() {
  return lw();
}
function Q(i) {
  return i.mounts > 0;
}
function Nlt(i, n) {
  let a = i.current?.key === n,
    N = i.queue.some((s) => s.key === n),
    m = i.pinned.some((s) => s.key === n);
  if (!a && !N && !m) return i;
  return {
    current: a ? null : i.current,
    queue: i.queue.filter((s) => s.key !== n),
    pinned: m ? i.pinned.filter((s) => s.key !== n) : i.pinned
  };
}
function WB(i) {
  return i.diffPanelVisible || i.paneHoldsToasts;
}
function Rpe(i, n) {
  return i !== null && (!n || i.exemptFromDiffPanelHold === !0);
}
function MPe(i, n) {
  return n && i !== null && Agr(i)?.surface === "gauge";
}
function Iwe() {
  return xe(Da.headerGauge, Q);
}
var T = 8000;
function V() {
  return {
    clearTimer: { current: null },
    mountCount: { current: 0 },
    transcriptSink: { registered: null },
    saidInTranscript: new Map()
  };
}
var b = Gt(null);
function Tgr(i) {
  let N = w(3),
    { children: n } = i,
    [a] = y(V),
    m;
  if (N[0] !== n || N[1] !== a)
    ((m = e(b.Provider, { value: a, children: n })), (N[0] = n), (N[1] = a), (N[2] = m));
  else m = N[2];
  return m;
}
function I({ presentationContext: i, isScreenReaderEnabled: n }) {
  return D8t() && !n && Ogr(i) === "fullscreen";
}
function C(i, { transcriptSink: n, saidInTranscript: a }, N) {
  if (!1)
    switch (m.routeNotification(i.key, !0)) {
      case "suppress":
      case "queue":
      case "transcript":
    }
  return i;
}
function Agr(i) {
  return;
}
function nfs(i) {
  let n = be(b);
  Xt(() => {
    if (n === null) return;
    return (
      (n.transcriptSink.registered = i),
      () => {
        if (n.transcriptSink.registered === i) n.transcriptSink.registered = null;
      }
    );
  }, [n, i]);
}
function To() {
  let i = xr(),
    n = Gn(),
    a = fn(),
    N = be(b),
    [m] = y(V),
    s = N ?? m,
    { clearTimer: o, mountCount: x } = s,
    S = be(F8t),
    h = rt(),
    d = de(() => {
      let p = I({ presentationContext: S, isScreenReaderEnabled: h }),
        r = D8t() ? i.getState().notifications.queue.filter((u) => C(u, s, p) === "handled") : [];
      n((u) => {
        let t =
            r.length === 0
              ? u
              : {
                  ...u,
                  notifications: {
                    ...u.notifications,
                    queue: u.notifications.queue.filter((f) => !r.includes(f))
                  }
                },
          c = U(
            WB(t)
              ? t.notifications.queue.filter((f) => f.exemptFromDiffPanelHold)
              : t.notifications.queue
          );
        if (!c) return t;
        let k =
          t.notifications.current !== null &&
          c.priority === "immediate" &&
          c.heldDuringDiffPanel === !0 &&
          t.notifications.current.priority !== "immediate"
            ? t.notifications.current
            : null;
        if (t.notifications.current !== null && k === null) return t;
        let D = c.key;
        return (
          o.current?.(),
          (o.current = a.setTimeout(() => {
            ((o.current = null),
              n((f) => {
                if (f.notifications.current?.key !== D) return f;
                return { ...f, notifications: { ...f.notifications, current: null } };
              }),
              d());
          }, c.timeoutMs ?? T)),
          {
            ...t,
            notifications: {
              ...t.notifications,
              queue: [
                ...(k !== null && q(k, c) ? [k] : []),
                ...t.notifications.queue.filter((f) => f !== c)
              ],
              current: c.heldDuringDiffPanel ? { ...c, heldDuringDiffPanel: void 0 } : c
            }
          }
        );
      });
    }, [n, i, s, o, a, S, h]),
    E = de(
      (p) => {
        let r = D8t() ? C(p, s, I({ presentationContext: S, isScreenReaderEnabled: h })) : p;
        if (r === "handled") return;
        if (r.pinned) {
          n((t) => {
            if (t.notifications.pinned.some((c) => c.key === r.key)) return t;
            return {
              ...t,
              notifications: { ...t.notifications, pinned: [...t.notifications.pinned, r] }
            };
          });
          return;
        }
        if (r.priority === "immediate" && r.waitsItsTurn !== !0 && !WB(i.getState())) {
          if (o.current) (o.current(), (o.current = null));
          ((o.current = a.setTimeout(() => {
            ((o.current = null),
              n((t) => {
                if (t.notifications.current?.key !== r.key) return t;
                return {
                  ...t,
                  notifications: {
                    ...t.notifications,
                    queue: t.notifications.queue.filter((c) => !r.invalidates?.includes(c.key)),
                    current: null
                  }
                };
              }),
              d());
          }, r.timeoutMs ?? T)),
            n((t) => ({
              ...t,
              notifications: {
                ...t.notifications,
                current: r,
                queue: [
                  ...(t.notifications.current ? [t.notifications.current] : []),
                  ...t.notifications.queue
                ].filter((c) => q(c, r))
              }
            })));
          return;
        }
        let u = r.priority === "immediate" ? { ...r, heldDuringDiffPanel: !0 } : r;
        (n((t) => {
          if (u.fold && t.notifications.current?.key === u.key) {
            let l = u.fold(t.notifications.current, u);
            if (o.current) (o.current(), (o.current = null));
            let g = l.key;
            return (
              (o.current = a.setTimeout(() => {
                ((o.current = null),
                  n((R) => {
                    if (R.notifications.current?.key !== g) return R;
                    return { ...R, notifications: { ...R.notifications, current: null } };
                  }),
                  d());
              }, l.timeoutMs ?? T)),
              { ...t, notifications: { ...t.notifications, current: l } }
            );
          }
          let c = u.fold ? t.notifications.queue.findIndex((l) => l.key === u.key) : -1;
          if (u.fold && c !== -1) {
            let l = u.fold(t.notifications.queue[c], u),
              g = [...t.notifications.queue];
            return ((g[c] = l), { ...t, notifications: { ...t.notifications, queue: g } });
          }
          if (!(
            !new Set(t.notifications.queue.map((l) => l.key)).has(u.key) &&
            t.notifications.current?.key !== u.key
          ))
            return t;
          let f =
            t.notifications.current !== null &&
            u.invalidates?.includes(t.notifications.current.key);
          if (f && o.current) (o.current(), (o.current = null));
          return {
            ...t,
            notifications: {
              ...t.notifications,
              current: f ? null : t.notifications.current,
              queue: [...t.notifications.queue.filter((l) => q(l, u)), u]
            }
          };
        }),
          d());
      },
      [n, i, s, d, o, a, S, h]
    ),
    A = de(
      (p) => {
        (n((r) => {
          let u = Nlt(r.notifications, p);
          if (u === r.notifications) return r;
          if (r.notifications.current?.key === p && o.current) (o.current(), (o.current = null));
          return { ...r, notifications: u };
        }),
          d());
      },
      [n, d, o, s, S, h]
    );
  return (
    P(() => {
      if ((x.current++, i.getState().notifications.queue.length > 0)) d();
      return () => {
        if ((x.current--, x.current === 0 && o.current)) (o.current(), (o.current = null));
      };
    }, []),
    { addNotification: E, removeNotification: A, processQueue: d }
  );
}
var sPt = { immediate: 0, high: 1, medium: 2, low: 3 };
function q(i, n) {
  return (
    (i.priority !== "immediate" || i.requeueOnPreempt === !0 || i.heldDuringDiffPanel === !0) &&
    !n.invalidates?.includes(i.key)
  );
}
function U(i) {
  if (i.length === 0) return;
  return i.reduce((n, a) => (sPt[a.priority] < sPt[n.priority] ? a : n));
}
export { D8t, Nlt, WB, Rpe, MPe, Iwe, Tgr, Agr, nfs, To, sPt };

//# sourceMappingURL=chunk-1xqkrp78.js.map
