// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { He, CCe } from "./chunk-1hp0t8kv.js";
import { d, E } from "./chunk-fs43t96t.js";
import {
  BS,
  iH,
  ti,
  WLe,
  KZn,
  k_e,
  Wk,
  UKe,
  tue,
  YLe,
  D7,
  fer,
  per,
  mer,
  ger,
  Uzt,
  Bzt,
  dvt,
  Eyn,
  yer,
  _er,
  HZs,
  LZs,
  NZs,
  $Zs,
  Ayn,
  RKr,
  CVo,
  Cer,
  WZs,
  GZs
} from "./chunk-gq77tz5k.js";
import { Gl, JKe } from "./chunk-d65ze5ng.js";
import { te, t } from "./chunk-4kxznmzw.js";
import { De } from "./chunk-2qx8pe6s.js";
import { Nt } from "./chunk-4hww8411.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { vG } from "./chunk-mpcygg5e.js";
import { mu } from "./chunk-64ygy579.js";
import {
  jK,
  Yht,
  gQ,
  hDo,
  Dhe,
  vTe,
  sYn,
  ETe,
  eNr,
  tNr,
  nNr,
  xDo,
  rNr,
  oNr,
  aYn,
  zln
} from "./chunk-6h7ejyet.js";
import { hY } from "./chunk-g240bny9.js";
import { NDe } from "./chunk-7jgmpv5v.js";
import { LOe, Ann, _gt } from "./chunk-j0tbz6ra.js";
import { Sh } from "./chunk-r4m4whra.js";
import { $De } from "./chunk-qry0merp.js";
import { to } from "./chunk-vjef4vba.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { H } from "./chunk-p8tprgqa.js";
import { ve } from "./chunk-vk5p9xv3.js";
function Iso(r = {}) {
  let i = r.run ?? zln,
    f =
      r.schedule ??
      ((m) => {
        let c = setTimeout(m, Sh);
        return () => {
          clearTimeout(c);
        };
      }),
    w =
      r.warn ??
      ((m) => {
        t(m, { level: "warn" });
      }),
    p = new Map(),
    T,
    a = 0;
  function u() {
    T = void 0;
    let m = [...p.values()];
    p.clear();
    for (let { message: c, reply: y } of m)
      ((a += 1),
        i(c).then(y, (v) => {
          w(`ui.message ${c.plugin}/${c.message.element}: the chain threw (${d(v)}); no reply`);
        }));
  }
  return {
    post(m, c, y) {
      (p.set(m, { message: c, reply: y }), (T ??= f(u)));
    },
    cancel(m) {
      if ((p.delete(m), p.size === 0 && T !== void 0)) (T(), (T = void 0));
    },
    dispatched: () => a
  };
}
var Ye = Iso();
var Oso = (r, i) => `${r}\x00client\x00${i}`;
var Ee = (r) => ({
  component: r.component,
  requestId: Oso(r.requestId, r.key),
  surface: r.surface
});
var ne = (r, i, f) => `Client ${i}: ${nNr(r, i, f)}`;
var j6e = ve(Ps({ focusedId: null }), (r) => r.setState(() => ({ focusedId: null })));
var mMn = (r) => j6e.setState((i) => (i.focusedId === r ? i : { focusedId: r }));
var Bgs = (r) => j6e.setState((i) => (i.focusedId === r ? { focusedId: null } : i));
var U = (r) => (r === WLe ? 1 : 0);
function Ce(r, i) {
  let f = { surface: r.drawing.surface, component: i, requestId: r.requestId };
  return { site: f, bornAt: ETe(f), holders: 0 };
}
var Se = (r, i) => ({ plugin: r, handle: i });
function ke(r, i, f) {
  function w(p) {
    if (!H(p)) return p;
    let { props: T, hover: a, children: u, held: m } = p,
      c = { type: p.type };
    if (T !== void 0) c.props = T;
    if (a !== void 0) c.hover = a;
    if (Uzt(p.type) && Bzt(a) !== void 0) c.group = { plugin: r };
    if (typeof m === "number") c.press = Se(r, f(m));
    if ((typeof m !== "number" || p.type === "Button") && Array.isArray(u)) c.children = u.map(w);
    return c;
  }
  return JKe(w(YLe(te(i))));
}
var se = (r) => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ie = 20;
var ae = 8;
var Re = 3;
var he = (r) => ({
  plugin: r.plugin,
  module: r.module,
  component: r.drawing.component,
  requestId: r.requestId,
  key: r.element
});
var Oe = (r, i) => ({
  id: se(r),
  plugin: r.plugin,
  module: r.module,
  element: r.key,
  drawing: Ee(r),
  requestId: r.requestId,
  clock: r.clock,
  props: r.props,
  handedProps: r.props,
  columns: 0,
  rows: 0,
  surface: void 0,
  snapshot: { status: "loading" },
  listeners: new Set(),
  held: [],
  holders: 1,
  dialogHolders: U(r.component),
  rowSite: U(r.component) === 0 ? r.component : void 0,
  drawnSite: void 0,
  isOverBudget: !1,
  isDirty: !1,
  isRendering: !1,
  unpromptedRenders: 0,
  renderTimer: void 0,
  measurings: 0,
  frameOutcome: "unmeasured",
  isUnsettled: !1,
  terminal: i,
  selfDrawnTimer: void 0,
  renderedAt: i,
  thrownAt: void 0,
  toldLast: void 0,
  isDestroyed: !1,
  destroyTimer: void 0,
  mountGeneration: 0,
  heldIn: new Map(),
  environmentId: void 0
});
var L = (r, i, f) =>
  vTe({
    key: [`${r.plugin}#${r.environmentId}`, `Client ${r.module}`, i].join(" "),
    lead: r.plugin,
    text: ne(r.plugin, r.module, f)
  });
var Pe = {
  instance: `its region changed size on each of ${ae} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`,
  frame: `the Clients on screen were measured again in ${ie} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns`
};
var vo = (r, i) => L(r, `unsettled ${i}`, Pe[i]);
function B() {
  let r = hY.get();
  return [r?.columns, r?.rows, r?.conversationColumns].join("x");
}
function Po(r = eNr()) {
  return (i) =>
    void r(i).catch((f) => {
      Gl().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${d(f)})`, "warn");
    });
}
function be(r, i) {
  let { name: f, message: w } = Ayn(r) ? r : i(r);
  return w.trim() !== "" ? w : f === "Error" ? tNr : f;
}
var Fe = (r) =>
  `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
var _e = ({ pluginName: r, environmentId: i, owns: f }) =>
  Ann((w, p) => {
    if (![p, w].some((u) => !LOe(u) && f(u))) return;
    let a = Fe(Dhe(Cer(w)));
    try {
      jK({ key: `${r}#${i} Client rejection`, lead: r, text: a });
    } catch (u) {
      t(`${r}: the fault could not be said: ${d(u)}`, { level: "error" });
    }
    return `${r}: ${a}`;
  });
import * as fe from "vm";
var je = (r) => Ayn(r) && E(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var Te = 1000;
var Ne = 60000;
var Ue = "__surface__.run()";
var Le = (r, i) => ({ ...r, timers: new Map(), tick: i });
async function Vo(r, i = {}) {
  let { pluginName: f, pluginRoot: w, environmentId: p, surfaceModules: T } = r,
    a = !1,
    { sandbox: u, context: m } = WZs(),
    c = NZs(m),
    y = (o) => JKe(c(o)),
    v = $Zs(m, w),
    O = LZs(m),
    C = tue(m),
    { intoEnvironment: M } = RKr(C, v, O),
    I = GZs(m, M);
  Object.assign(u, { console: HZs(I, `[${f}] surface`) });
  let me = _e({ pluginName: f, environmentId: p, owns: O }),
    S = new Map(),
    A = 0,
    pe = 0;
  function D(o) {
    let n = S.get(o);
    if (!n) throw new He(`${f}: no client instance ${o}`);
    return n;
  }
  function ue(o, n) {
    let s = D(o),
      l = `${f}: Client ${s.module}: post: the data`;
    if (n.length > KZn)
      throw new He(`${l} serializes to ${n.length} characters, over the ${KZn} limit; not sent`);
    let x = te(n),
      g = k_e(x);
    if (g !== void 0) throw new He(`${l} ${g}; not sent`);
    s.host.post(x);
  }
  function W(o, n) {
    let s = D(o),
      l = ++pe;
    return (
      s.timers.set(
        l,
        s.host.startTimer(n, () => {
          if (S.get(o)?.timers.has(l) === !0) s.tick(l);
        })
      ),
      l
    );
  }
  let R = BS({
      schedule: iH(
        I((o) => {
          S.get(o)?.host.schedule();
        })
      ),
      post: iH(I(ue)),
      startTimer: iH(I(W)),
      stopTimer: iH(
        I((o, n) => {
          let s = S.get(o);
          (s?.timers.get(n)?.(), s?.timers.delete(n));
        })
      ),
      fault: iH(
        I((o, n) => {
          let s = S.get(o);
          if (s === void 0) {
            t(
              `${f}: Client: a promise an instance since unmounted returned was rejected: ${Dhe(n)}`,
              { level: "warn" }
            );
            return;
          }
          s.host.fault(
            new He(`${f}: Client ${s.module}: a promise it returned was rejected: ${n}`)
          );
        })
      )
    }),
    {
      mount: ce,
      setProps: de,
      resize: q,
      stage: Y,
      dropHeld: J,
      hasListener: G,
      unmount: Q
    } = fe.runInContext(Wk(rNr), m)(R, y(oNr())),
    le = new fe.Script(Wk(Ue), { filename: `${f} surface` }),
    xe = i.budgetMs ?? Te,
    j = UKe(Te, i.budgetMs),
    Z = (o) => (je(o) ? `ran longer than its ${xe}ms budget` : be(o, C)),
    ee = (o, n) => new He(`${f}: Client ${o}: ${Z(n)}`);
  function b(o, n, s) {
    if (a) throw CCe(f);
    Y(o.id, n, s === void 0 ? void 0 : y(s));
    try {
      return le.runInContext(m, j);
    } catch (l) {
      throw ee(o.module, l);
    }
  }
  let oe = CVo({
      args: {
        pluginName: f,
        pluginRoot: w,
        linked: T.flatMap((o) => o.linked),
        links: T.flatMap((o) => o.links)
      },
      context: m,
      isScanned: !0,
      stamped: (o) => o(),
      evaluateOptions: j
    }),
    z = i.readyMs ?? _gt,
    F = new Map();
  for (let o of T) F.set(o.module, await N(o));
  async function N(o) {
    try {
      let n = await Nt(
        oe.load(o.modulePath, o.source),
        z,
        `its top level did not settle in ${z}ms`
      );
      return { component: o.component, exports: n };
    } catch (n) {
      return {
        error: new He(`${f}: Client ${o.module}: the surface module did not load: ${Z(n)}`)
      };
    }
  }
  function X(o) {
    if (!S.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if ((o.timers.clear(), !a)) Q(o.id);
  }
  function re(o) {
    let n = F.get(o);
    if (!n) {
      let g = [...F.keys()].join(", ") || "none";
      throw new He(
        `${f}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`
      );
    }
    if ("error" in n) throw n.error;
    let { component: s, exports: l } = n,
      x = Object.hasOwn(l, s) && l[s];
    if (typeof x !== "function")
      throw new He(`${f}: Client ${o}: its export ${s} is not a function (props, surface) => tree`);
    return x;
  }
  function K(o) {
    if (!a) o();
  }
  function e(o) {
    let { props: n, host: s } = o;
    if (a) throw CCe(f);
    let l = re(o.module),
      x = ++A,
      g = Le({ id: x, module: o.module, host: s }, (h) => {
        b(g, "tick", h);
      });
    return (
      S.set(x, g),
      ce(x, l, y(n)),
      {
        id: x,
        render: () => {
          let h = b(g, "render");
          if (typeof h !== "string") throw ee(o.module, Error("the module returned no tree"));
          return h;
        },
        setProps: (h) => K(() => de(x, y(h))),
        resize: (h, P) => K(() => q(x, h, P)),
        pointer: (h) => {
          b(g, "pointer", h);
        },
        key: (h) => {
          b(g, "key", h);
        },
        runHeld: (h, P) => {
          b(g, "held", { handle: h, event: P });
        },
        dropHeld: (h) => K(() => J(x, y(h))),
        hasPointerListener: () => !a && G(x, "pointer"),
        hasKeyListener: () => !a && G(x, "key"),
        unmount: () => X(g)
      }
    );
  }
  return {
    pluginName: f,
    environmentId: p,
    mount: e,
    dispose() {
      if (a) return;
      for (let o of [...S.values()]) X(o);
      (setTimeout(me, Ne).unref(), (a = !0));
    },
    isDisposed: () => a
  };
}
var Ge = (r, i) => ({ environmentId: r, loading: i, loaded: void 0 });
var ze = ve(to(), (r) => r.set(void 0));
function Xe() {
  let r = new Map(),
    i = De(),
    f;
  function w(a, u) {
    if (r.get(a) === u) r.delete(a);
    (u.loading.then(
      (c) => {
        (c.dispose(),
          Yht.forget(a),
          t(`surface environment of ${a} (environment ${u.environmentId}) disposed`));
      },
      () => {}
    ),
      queueMicrotask(() => i.emit(a)));
  }
  function p() {
    let a = new Map(
      Ie()
        .loadedModules.filter(mu)
        .map((u) => [u.name, u.environmentId])
    );
    for (let [u, m] of [...r]) if (a.get(u) !== m.environmentId) w(u, m);
  }
  function T(a) {
    let u = $De(a);
    if (!u) return Promise.reject(new He(`${a}: Client: the plugin is not loaded`));
    let m = r.get(a);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) w(a, m);
    let { surfaceModules: c, pluginRoot: y } = u.args;
    if (!c || c.length === 0)
      return Promise.reject(
        new He(
          `${a}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`
        )
      );
    let v = ze.get(),
      { environmentId: O } = u,
      C = Ge(
        O,
        Vo(
          { pluginName: a, pluginRoot: y, environmentId: O, surfaceModules: c },
          v === void 0 ? {} : { budgetMs: v }
        ).then(
          (M) => (
            (C.loaded = M),
            t(
              `surface environment of ${a} (environment ${O}) loaded ` +
                c.map((I) => I.module).join(", ")
            ),
            M
          )
        )
      );
    return (r.set(a, C), C.loading);
  }
  return {
    environmentFor(a) {
      return ((f ??= NDe(p)), T(a));
    },
    sweep: p,
    onDisposed: i.subscribe,
    disposeAll() {
      for (let [a, u] of [...r]) w(a, u);
      (f?.(), (f = void 0));
    },
    count: () => r.size
  };
}
var Ke = Xe();
function Mso(r = {}) {
  let i = r.environments ?? Ke,
    f = r.port ?? Ye,
    w = r.raiseFault ?? Po(),
    p = new Map(),
    T,
    a = 0,
    u = !1,
    m;
  function c(e, o) {
    e.snapshot = o;
    for (let n of e.listeners) n();
  }
  function y(e) {
    (S(e, e.held), (e.held = []));
  }
  function v(e) {
    if (
      ((e.mountGeneration += 1),
      R(e),
      (e.isDirty = !1),
      (e.isOverBudget = !1),
      (e.thrownAt = void 0),
      (e.drawnSite = void 0),
      D7.dropClient(D(e)),
      e.renderTimer)
    )
      (clearImmediate(e.renderTimer), (e.renderTimer = void 0));
    (clearImmediate(e.selfDrawnTimer),
      j(e),
      (e.measurings = 0),
      (e.frameOutcome = "unmeasured"),
      (e.isUnsettled = !1),
      gQ.holdDrawing(e.plugin, e.drawing, []),
      y(e),
      e.surface?.unmount(),
      (e.surface = void 0),
      f.cancel(e.id),
      Bgs(e.id));
  }
  function O(e, o, n) {
    let s = ne(e.plugin, e.module, o),
      l = `${e.plugin}: ${s}`;
    return (
      Gl().log(`${l}; ${n}`, "warn"),
      vG(e.plugin, s, e.toldLast === s ? "once" : "again"),
      (e.toldLast = s),
      l
    );
  }
  function C(e, o, n) {
    let s = d(o),
      l = O(e, s, "the instance unmounted"),
      x = new Map(e.heldIn);
    (v(e),
      c(e, { status: "failed", text: l }),
      w(
        xDo(he(e), e.drawing.surface, {
          phase: n,
          reason: s,
          sites: () =>
            [...e.heldIn.values()]
              .filter((g) => g.holders > 0)
              .map((g) => ({ site: g.site, bornAt: (x.get(g.site.component) ?? g).bornAt }))
        })
      ));
  }
  let M = (e, o) => `${o} ${ti({ props: e.handedProps })}`;
  function I(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o();
    } catch (n) {
      C(e, n, "run");
    }
  }
  function me(e, o) {
    let n = [],
      s = [],
      l = [],
      x = 0,
      g = 0;
    try {
      let h = ke(e.plugin, o.render(), (k) => {
          let V = Yht.hold(e.plugin, (ge) => {
            (R(e), I(e, () => o.runHeld(k, ge)));
          });
          return (n.push({ surfaceHandle: V, environmentHandle: k }), V);
        }),
        P = dvt(h, void 0, {
          surface: e.drawing.surface,
          within: N(e),
          measured: (k, V) => {
            ((x = k), (g = V));
          }
        });
      if (P !== void 0) throw new He(`returned a tree that does not validate (${P})`);
      return [
        _er(
          yer(
            Eyn(h, (k) => L(e, "borderStyle", sYn(k))),
            (k) => {
              s.push(k);
            }
          ),
          e.drawing.surface,
          (k) => {
            l.push(k);
          }
        ),
        n,
        x,
        s,
        l,
        g
      ];
    } catch (h) {
      throw (S(e, n), h);
    }
  }
  function S(e, o) {
    (Yht.release(
      e.plugin,
      o.map((n) => n.surfaceHandle)
    ),
      e.surface?.dropHeld(o.map((n) => n.environmentHandle)));
  }
  function A(e) {
    let { surface: o } = e;
    if (!o || e.isDestroyed) return;
    ((e.isDirty = !1), (e.isRendering = !0), (e.renderedAt = B()));
    let n;
    try {
      n = me(e, o);
    } catch (_) {
      C(e, _, "render");
      return;
    } finally {
      e.isRendering = !1;
    }
    let [s, l, x, g, h, P] = n,
      k = N(e) === WLe;
    if (k && !D7.fits(D(e), x, P)) {
      ((e.isOverBudget = !0),
        S(e, l),
        O(
          e,
          `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${P}`,
          "the frame before it kept"
        ));
      return;
    }
    e.isOverBudget = !1;
    let ge = e.held;
    e.held = l;
    let Ve = hDo(s, e.drawing);
    (S(e, ge), (e.drawnSite = N(e)), c(e, { status: "drawn", tree: Ve }));
    for (let _ of g) L(e, fer(_), per(_));
    for (let _ of h) L(e, `${e.drawing.surface} ${mer(_)}`, ger(_));
    if (k) D7.recordClient(D(e), x);
  }
  function pe(e) {
    for (let o of p.values())
      if (
        o.isOverBudget &&
        o.requestId === e.requestId &&
        o.drawing.surface === e.surface &&
        !o.isDirty &&
        !o.isDestroyed &&
        o.surface !== void 0
      )
        ((o.isDirty = !0), (o.unpromptedRenders = 0), (o.renderTimer = setImmediate(W, o)));
  }
  let D = (e) => ({
    requestId: e.requestId,
    surface: e.drawing.surface,
    plugin: e.plugin,
    key: e.element
  });
  function ue(e) {
    if (e.isDirty || e.isDestroyed || !e.surface) return;
    if (e.unpromptedRenders >= Re) {
      let o = new He(
        `set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`
      );
      if (e.isRendering) throw o;
      C(e, o, "run");
      return;
    }
    ((e.isDirty = !0), (e.renderTimer = setImmediate(W, e)));
  }
  function W(e) {
    if (((e.renderTimer = void 0), e.isDirty))
      ((e.unpromptedRenders += 1),
        clearImmediate(e.selfDrawnTimer),
        (e.selfDrawnTimer = setImmediate(j, e)),
        A(e));
  }
  function R(e) {
    for (let o of p.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  function ce(e, o) {
    let n = e.mountGeneration;
    f.post(e.id, aYn(he(e), e.drawing.surface, o), (s) => {
      if (s.props !== void 0 && !e.isDestroyed && e.mountGeneration === n) Y(e, s.props);
    });
  }
  function de(e, o) {
    if (e.isDestroyed || e.surface) return;
    if (e.thrownAt !== void 0) {
      if (e.thrownAt === M(e, B())) return;
      ((e.thrownAt = void 0), (e.props = e.handedProps));
      for (let [n, s] of e.heldIn)
        if (s.holders > 0) e.heldIn.set(n, { ...s, bornAt: ETe(s.site) });
    }
    try {
      ((e.environmentId = o.environmentId),
        (e.surface = o.mount({
          module: e.module,
          props: e.props,
          host: {
            schedule: () => ue(e),
            post: (n) => ce(e, n),
            startTimer: (n, s) =>
              e.clock.every(n, () => {
                (R(e), I(e, s));
              }),
            fault: (n) =>
              I(e, () => {
                throw n;
              })
          }
        })),
        e.surface.resize(e.columns, e.rows));
    } catch (n) {
      C(e, n, "load");
      return;
    }
    A(e);
  }
  function q(e) {
    e.mountGeneration += 1;
    let o = e.mountGeneration,
      n = () => e.mountGeneration === o && !e.isDestroyed;
    i.environmentFor(e.plugin).then(
      (s) => {
        if (n()) de(e, s);
      },
      (s) => {
        if (n()) C(e, s, "load");
      }
    );
  }
  function Y(e, o) {
    if (ti(o) === ti(e.props)) return;
    ((e.props = o),
      R(e),
      I(e, () => {
        e.surface?.setProps(o);
      }),
      A(e));
  }
  function J(e, o) {
    ((e.handedProps = o), Y(e, o));
  }
  function G(e) {
    if (e.isDestroyed) return;
    if (((e.isDestroyed = !0), clearTimeout(e.destroyTimer), v(e), p.get(e.id) === e))
      p.delete(e.id);
  }
  function Q() {
    ((m = void 0), (a = 0));
    for (let e of p.values())
      ((e.isUnsettled &&= e.frameOutcome !== "measured"),
        (e.measurings = 0),
        (e.frameOutcome = "unmeasured"));
  }
  function le(e) {
    let o = e.measurings >= (e.isUnsettled ? 1 : ae),
      n = e.measurings > 0 && a > ie;
    return o ? "instance" : n ? "frame" : void 0;
  }
  function xe(e, o) {
    if (((e.frameOutcome = "passed over"), e.surface?.resize(e.columns, e.rows), !e.isUnsettled))
      ((e.isUnsettled = !0), vo(e, o));
  }
  function j(e) {
    e.selfDrawnTimer = void 0;
  }
  function Z(e) {
    if (e.holders === 0) G(e);
  }
  function ee(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    let n = B(),
      s = n !== e.terminal,
      l = u && !s && e.measurings > 0;
    if (((e.terminal = n), (e.columns = o.columns), (e.rows = o.rows), l)) ((a += 1), (u = !1));
    let x = s ? void 0 : le(e);
    if (x !== void 0) {
      xe(e, x);
      return;
    }
    if (!s) e.measurings += 1;
    if (e.frameOutcome === "unmeasured") e.frameOutcome = "measured";
    if (((m ??= setImmediate(Q)), s || e.selfDrawnTimer === void 0)) R(e);
    if (e.surface) (e.surface.resize(o.columns, o.rows), A(e));
  }
  function b(e, o) {
    if (
      (F(e, o, -1),
      (e.holders = Math.max(0, e.holders - 1)),
      (e.dialogHolders = Math.max(0, e.dialogHolders - U(o))),
      e.holders === 0 && !e.isDestroyed)
    )
      (clearTimeout(e.destroyTimer), (e.destroyTimer = setTimeout(Z, 0, e)));
    else if (!oe(e)) z(e);
  }
  function oe(e) {
    return e.surface === void 0 || e.drawnSite === N(e);
  }
  function z(e) {
    if ((R(e), D7.dropClient(D(e)), (e.drawnSite = void 0), e.snapshot.status === "drawn"))
      c(e, { status: "loading" });
    A(e);
  }
  function F(e, o, n) {
    let s = e.heldIn.get(o) ?? Ce(e, o);
    e.heldIn.set(o, { ...s, holders: Math.max(0, s.holders + n) });
  }
  function N(e) {
    return e.dialogHolders > 0 ? WLe : (e.rowSite ?? e.drawing.component);
  }
  let X = (e, o) => ({
    id: e.id,
    plugin: e.plugin,
    module: e.module,
    subscribe: (n) => (e.listeners.add(n), () => e.listeners.delete(n)),
    getSnapshot: () => e.snapshot,
    setProps: (n) => J(e, n),
    laidOut: () => {
      u = !0;
    },
    resize: (n, s) => ee(e, { columns: n, rows: s }),
    pointer: (n) => {
      (R(e), I(e, () => e.surface?.pointer(n)));
    },
    key: (n) => {
      (R(e), I(e, () => e.surface?.key(n)));
    },
    acceptsPointer: () => e.surface?.hasPointerListener() === !0,
    acceptsKeys: () => e.surface?.hasKeyListener() === !0,
    threw: (n) => {
      if (e.surface === void 0 || e.isDestroyed) return;
      (C(e, n, "render"), (e.thrownAt = M(e, e.renderedAt)));
    },
    drawnAgain: () =>
      e.thrownAt !== void 0 && e.thrownAt !== M(e, B()) && e.holders > 0 ? q(e) : void 0,
    release: () => b(e, o)
  });
  function re(e) {
    for (let o of p.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if ((v(o), (o.toldLast = void 0), c(o, { status: "loading" }), o.holders > 0)) q(o);
    }
  }
  function K(e, o) {
    (clearTimeout(e.destroyTimer),
      (e.destroyTimer = void 0),
      (e.holders += 1),
      F(e, o.component, 1),
      (e.clock = o.clock));
    let n = U(o.component);
    if (((e.dialogHolders += n), (e.rowSite = n === 0 ? o.component : e.rowSite), oe(e)))
      J(e, o.props);
    else
      ((e.handedProps = o.props),
        (e.props = o.props),
        I(e, () => {
          e.surface?.setProps(o.props);
        }),
        z(e));
    return X(e, o.component);
  }
  return {
    acquire(e) {
      T ??= [i.onDisposed(re), D7.onFreed(pe)];
      let o = p.get(se(e));
      if (o !== void 0 && !o.isDestroyed && o.module === e.module) return K(o, e);
      if (o) G(o);
      let s = Oe(e, B());
      return (p.set(s.id, s), F(s, e.component, 1), q(s), X(s, e.component));
    },
    remountPlugin: re,
    count: () => p.size,
    dispose() {
      for (let e of T ?? []) e();
      ((T = void 0), clearImmediate(m), Q());
      for (let e of p.values()) (clearImmediate(e.selfDrawnTimer), j(e));
    }
  };
}
var jgs = Mso();
export { Iso, Oso, j6e, mMn, Bgs, Mso, jgs };

//# sourceMappingURL=chunk-v9j8zz4r.js.map
