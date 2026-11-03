// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import { F } from "./chunk-wrtp8qz8.js";
import { g, m } from "./chunk-brszmkb3.js";
import { hH, Fx, Foe } from "./chunk-ajtyjx88.js";
import { kq, i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ist } from "./chunk-8w2npe9a.js";
import { J$ } from "./chunk-afxq0vrk.js";
import { Ss, er } from "./chunk-1e5yp9hx.js";
import { ZVt, eTt, wZ, t9o, Esr, n9o, r9o, o9o } from "./chunk-7c3thgax.js";
import { wb } from "./chunk-at88wjsn.js";
import { ez } from "./chunk-rve8yzwm.js";
import { Gi } from "./chunk-d5zj5299.js";
import { mYn, AWs, Ei } from "./chunk-6h7ejyet.js";
import { Uwe } from "./chunk-cag24fch.js";
import { aQ } from "./chunk-hzhehd3n.js";
import { gr } from "./chunk-z2vz1f06.js";
import { homedir as B } from "os";
var z = "tengu_synchronous_bunny";
function C() {
  return gr(z, { safe: !0 });
}
var W = "served-settings-changed",
  D = "served-settings-changed-between",
  L = "served-settings-taken-as-found",
  G = "served-settings-record-unavailable",
  H = 5000;
function j() {
  try {
    Foe();
    let s = kq("git", i.PATH ?? "");
    if (s === null || J$("git") === null) return !1;
    let r = Ist(s, ["--version"], { reject: !1, timeout: H, cwd: B(), stdin: "ignore" });
    if (r.exitCode !== 0 || !String(r.stdout).startsWith("git version")) return !1;
    return !Fx({ onIndeterminate: "untracked" });
  } catch (s) {
    return (l(N(s)), !1);
  }
}
var K = { project: "projectSettings", local: "localSettings", legacy: "localSettings" };
function w(s) {
  try {
    (er(), ez({ userLayer: "retain" }));
  } catch (r) {
    l(N(r));
  }
  try {
    hH().reset();
  } catch (r) {
    l(N(r));
  }
  for (let r of s)
    try {
      Gi.notifyChange(r);
    } catch (a) {
      l(N(a));
    }
}
var P = 2000,
  x = new WeakSet();
function V(s, r, a) {
  let d = a,
    t = r,
    f = performance.now(),
    u = () => {
      queueMicrotask(() => w(["projectSettings", "localSettings"]));
      return;
    };
  return () => {
    let h = n9o() !== t;
    if (!h && performance.now() - f < P) return d;
    f = performance.now();
    try {
      let p = eTt(),
        S = mYn(s, p, wZ, "look", ZVt);
      if (S.heldBack.filter((T) => !S.firstSeen.some((E) => E.slot === T)).length === 0) return u();
      ((t = p.key), (d = Esr(S.seeds)));
    } catch (p) {
      if ((l(N(p)), h)) return u();
    }
    return d;
  };
}
function tOn(s, r = Uwe()) {
  if (!C()) return;
  let a = (e) => {
      try {
        g("remote_served_settings_freeze", e);
      } catch (o) {
        l(N(o));
      }
    },
    d = (e, o) => {
      try {
        s?.(e, o);
      } catch (n) {
        l(N(n));
      }
    },
    t,
    f,
    u,
    h = !1,
    p,
    S = !0;
  try {
    S = AWs();
  } catch (e) {
    l(N(e));
  }
  try {
    let e = eTt();
    ((p = e.key), (t = mYn(r, e, wZ, "engage", ZVt, wb(j))));
    let o = t.matching;
    ((u = Esr(t.sandboxTurnedOn ? mYn(r, e, wZ, "look", ZVt).seeds : t.seeds)),
      (f = t9o({
        files: t.seeds,
        onOwnWrite: (n, _) => {
          if (!o.has(n)) return;
          try {
            (r.recordFile(n, aQ(_), "own_write"), (h = !0));
          } catch (v) {
            throw (o.delete(n), m("remote_served_settings_freeze", "own_write_not_recorded"), v);
          }
        }
      })));
  } catch (e) {
    throw (
      m("remote_served_settings_freeze", "engage_failed"),
      d(G, Ei["served_settings.record_unavailable"]),
      e
    );
  }
  if ((a({ op: b("engaged") }), t.firstSeen.length > 0)) {
    let e = t.firstSeen.some((o) => o.widening);
    if (
      (a({
        op: b("baseline"),
        files_present: F(t.firstSeen, (o) => o.present),
        prior_serving: S,
        widening_keys: e
      }),
      S && e)
    )
      d(L, Ei["served_settings.taken_as_found"]);
  }
  if (t.heldBack.length > 0)
    (a({
      op: b("held_back"),
      files: t.heldBack.length,
      unreadable: t.unreadable,
      hook_waiting: t.hookWaiting
    }),
      d(D, Ei["served_settings.held_back"]));
  let y = Ss(),
    T = x.has(y);
  if (f.began && (t.heldBack.length > 0 || T))
    w(T ? ["projectSettings", "localSettings"] : new Set(t.heldBack.map((e) => K[e])));
  x.add(y);
  let E = (e) => {
      (a({ op: b("held_change"), when: c(e) }), d(W, Ei["served_settings.changed_while_attached"]));
    },
    k = !1,
    R = (e) => {
      if (k) return;
      try {
        if (o9o() === "changed") ((k = !0), E(e));
      } catch (o) {
        (l(N(o)), (k = !0), E(e));
      }
    },
    A = Ss().onInvalidate(() => R("during_attach")),
    O = !1,
    I =
      t.sandboxTurnedOn ||
      (!f.began && y.repoTierFreeze.tier("localSettings")?.settings?.sandbox?.enabled === !0);
  return {
    hookWaiting: t.hookWaiting,
    sandboxTurnedOn: I,
    end: () => {
      if (O) return;
      ((O = !0), A(), R("at_end"));
      let e;
      try {
        let n = eTt(),
          _ = mYn(r, n, wZ, "look", ZVt);
        e = _.heldBack.length > 0 ? Esr(_.seeds) : void 0;
        try {
          r.noteServed(n.key, [..._.matching]);
        } catch (v) {
          l(N(v));
        }
      } catch (n) {
        (l(N(n)), (e = u));
      }
      let o;
      try {
        o = f.release().last;
      } catch (n) {
        (l(N(n)), (o = !0));
      }
      if (!o) return;
      try {
        if (e !== void 0) r9o(e, V(r, p, e));
        else if (k || h || t.heldBack.length > 0) w(["projectSettings", "localSettings"]);
      } catch (n) {
        l(N(n));
      }
    }
  };
}
export { tOn };

//# sourceMappingURL=chunk-kvgf3sc0.js.map
