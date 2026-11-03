// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { V_t, GFo } from "./chunk-mrftwq54.js";
function VIn(i) {
  let n = {
    entries: new Map(),
    burst: i?.burst ?? 3,
    refillMs: i?.refillMs ?? 1e4,
    retryMs: i?.retryMs ?? 60000,
    isOwnTitle: i?.isOwnTitle ?? (() => !1),
    onRemoteTitleAdopted: i?.onRemoteTitleAdopted ?? (() => {})
  };
  return {
    update: (e, r, s) => h(n, e, r, s),
    noteRemoteTitle: (e, r) => S(n, e, r),
    forget: (e) => R(n, e),
    hasSent: (e, r) => n.entries.get(e)?.sentTitles.has(r) ?? !1,
    isKnownTitle: (e, r) => n.entries.get(e)?.knownTitles.has(r) ?? !1
  };
}
function c(i, n) {
  let e = i.entries.get(n);
  if (!e)
    ((e = {
      lastSentTitle: void 0,
      lastSentOk: !1,
      sentTitles: new Set(),
      knownTitles: new Set(),
      tokens: i.burst,
      refilledAt: Date.now(),
      pending: void 0,
      inFlight: !1,
      timer: void 0,
      retryTimer: void 0,
      sendingRetry: !1,
      suppressed: 0
    }),
      i.entries.set(n, e));
  return e;
}
function h(i, n, e, r) {
  let s = c(i, n);
  if (y(s, e, r)) return (p(s), Promise.resolve());
  return new Promise((l) => {
    let u = [l];
    if ((a(s), s.pending || s.inFlight)) {
      if (s.suppressed === 0) f("bridge_session_patch", "title_write_coalesced");
      s.suppressed += 1;
    }
    (g(s.pending?.waiters),
      (s.pending = { title: e, opts: r, waiters: u }),
      (s.sendingRetry = !1),
      T(i, n));
  });
}
function k(i, n, e) {
  let r = Math.floor((e - n.refilledAt) / i.refillMs);
  if (r > 0) ((n.tokens = Math.min(i.burst, n.tokens + r)), (n.refilledAt += r * i.refillMs));
  if (n.tokens === i.burst) n.refilledAt = e;
}
function T(i, n) {
  let e = i.entries.get(n);
  if (!e || e.inFlight || !e.pending) return;
  let r = Date.now();
  if ((k(i, e, r), e.tokens <= 0 && !e.pending.opts?.userInitiated)) {
    if (!e.timer) {
      let o = Math.max(0, e.refilledAt + i.refillMs - r);
      ((e.timer = setTimeout(W, o, i, n)), e.timer.unref?.());
    }
    return;
  }
  let { title: s, opts: l, waiters: u } = e.pending;
  if (((e.pending = void 0), y(e, s, l) || (l?.shouldSend !== void 0 && !l.shouldSend()))) {
    (a(e), (e.sendingRetry = !1), (e.suppressed = 0), g(u));
    return;
  }
  ((e.tokens = Math.max(0, e.tokens - 1)),
    (e.inFlight = !0),
    (e.lastSentTitle = s),
    (e.lastSentOk = !1),
    e.sentTitles.add(s),
    e.knownTitles.add(s),
    a(e));
  let b = e.sendingRetry;
  if (((e.sendingRetry = !1), e.suppressed > 0))
    (t(`[bridge] title write: sending latest after coalescing ${e.suppressed} update(s)`),
      (e.suppressed = 0));
  GFo(n, s, l)
    .then(
      (o) => {
        if (o === "landed") ((e.lastSentTitle = s), (e.lastSentOk = !0));
        else if (e.lastSentTitle === s) e.lastSentOk = !1;
        if (i.entries.get(n) !== e) return;
        if (o === "failed" && !b && !e.retryTimer && !e.pending)
          ((e.retryTimer = setTimeout(v, i.retryMs, i, n, s, l)), e.retryTimer.unref?.());
      },
      (o) => {
        t(`[bridge] title write failed: ${d(o)}`);
      }
    )
    .finally(() => {
      ((e.inFlight = !1), g(u), T(i, n));
    });
}
function W(i, n) {
  let e = i.entries.get(n);
  if (e) ((e.timer = void 0), T(i, n));
}
function v(i, n, e, r) {
  let s = i.entries.get(n);
  if (!s) return;
  if (((s.retryTimer = void 0), !m(i, s, n, e))) return;
  if (r?.shouldSend !== void 0 && !r.shouldSend()) {
    t("[bridge] title write retry dropped: sending is now barred");
    return;
  }
  V_t(n, {
    baseUrl: r?.baseUrl,
    getAccessToken: r?.getAccessToken,
    credentials: r?.credentials
  }).then(
    (l) => {
      if (!m(i, s, n, e)) return;
      if (l === null) {
        t("[bridge] title write retry skipped: server state unreadable");
        return;
      }
      if (l.title && !s.knownTitles.has(l.title) && !i.isOwnTitle(n, l.title)) {
        (t("[bridge] title write retry dropped: the session was renamed elsewhere"),
          S(i, n, l.title),
          i.onRemoteTitleAdopted(n, l.title));
        return;
      }
      ((s.pending = { title: e, opts: r, waiters: [] }), (s.sendingRetry = !0), T(i, n));
    },
    (l) => {
      t(`[bridge] title write retry skipped: ${d(l)}`);
    }
  );
}
function m(i, n, e, r) {
  return (
    i.entries.get(e) === n &&
    n.lastSentTitle === r &&
    !n.lastSentOk &&
    !n.inFlight &&
    !n.pending &&
    !n.retryTimer
  );
}
function S(i, n, e) {
  let r = c(i, n);
  ((r.lastSentTitle = e), (r.lastSentOk = !0), r.knownTitles.add(e), a(r), p(r));
}
function R(i, n) {
  let e = i.entries.get(n);
  if (!e) return;
  if (e.timer) clearTimeout(e.timer);
  (a(e), p(e), i.entries.delete(n));
}
function p(i) {
  (g(i.pending?.waiters), (i.pending = void 0), (i.sendingRetry = !1), (i.suppressed = 0));
}
function a(i) {
  if (i.retryTimer) (clearTimeout(i.retryTimer), (i.retryTimer = void 0));
}
function g(i) {
  for (let n of i ?? []) n();
}
function y(i, n, e) {
  if (i.lastSentTitle !== n) return !1;
  if (i.inFlight || i.retryTimer !== void 0) return !0;
  return i.lastSentOk && !e?.userInitiated;
}
export { VIn };

//# sourceMappingURL=chunk-ar2qp04r.js.map
