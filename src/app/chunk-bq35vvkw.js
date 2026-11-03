// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ua } from "./chunk-a2y39866.js";
function D(t) {
  if (t === null || typeof t !== "object") return null;
  return ((t = (m && t[m]) || t["@@iterator"]), typeof t === "function" ? t : null);
}
function c(t, e, n) {
  ((this.props = t), (this.context = e), (this.refs = d), (this.updater = n || g));
}
function h() {}
function T(t, e, n) {
  ((this.props = t), (this.context = e), (this.refs = d), (this.updater = n || g));
}
function a() {}
function H(t, e, n) {
  var r = n.ref;
  return { $$typeof: v, type: t, key: e, ref: r !== void 0 ? r : null, props: n };
}
function G(t, e) {
  return H(t.type, e, t.props);
}
function R(t) {
  return typeof t === "object" && t !== null && t.$$typeof === v;
}
function K(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
function E(t, e) {
  return typeof t === "object" && t !== null && t.key != null ? K("" + t.key) : e.toString(36);
}
function B(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (
        (typeof t.status === "string"
          ? t.then(a, a)
          : ((t.status = "pending"),
            t.then(
              function (e) {
                t.status === "pending" && ((t.status = "fulfilled"), (t.value = e));
              },
              function (e) {
                t.status === "pending" && ((t.status = "rejected"), (t.reason = e));
              }
            )),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
      }
  }
  throw t;
}
function p(t, e, n, r, o) {
  var f = typeof t;
  if (f === "undefined" || f === "boolean") t = null;
  var u = !1;
  if (t === null) u = !0;
  else
    switch (f) {
      case "bigint":
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case v:
          case N:
            u = !0;
            break;
          case U:
            return ((u = t._init), p(u(t._payload), e, n, r, o));
        }
    }
  if (u)
    return (
      (o = o(t)),
      (u = r === "" ? "." + E(t, 0) : r),
      A(o)
        ? ((n = ""),
          u != null && (n = u.replace(S, "$&/") + "/"),
          p(o, e, n, "", function (O) {
            return O;
          }))
        : o != null &&
          (R(o) &&
            (o = G(
              o,
              n +
                (o.key == null || (t && t.key === o.key)
                  ? ""
                  : ("" + o.key).replace(S, "$&/") + "/") +
                u
            )),
          e.push(o)),
      1
    );
  u = 0;
  var _ = r === "" ? "." : r + ":";
  if (A(t))
    for (var i = 0; i < t.length; i++) ((r = t[i]), (f = _ + E(r, i)), (u += p(r, e, n, f, o)));
  else if (((i = D(t)), typeof i === "function"))
    for (t = i.call(t), i = 0; !(r = t.next()).done;)
      ((r = r.value), (f = _ + E(r, i++)), (u += p(r, e, n, f, o)));
  else if (f === "object") {
    if (typeof t.then === "function") return p(B(t), e, n, r, o);
    throw (
      (e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) +
          "). If you meant to render a collection of children, use an array instead."
      )
    );
  }
  return u;
}
function l(t, e, n) {
  if (t == null) return t;
  var r = [],
    o = 0;
  return (
    p(t, r, "", "", function (f) {
      return e.call(n, f, o++);
    }),
    r
  );
}
var v,
  N,
  Y,
  I,
  M,
  L,
  k,
  U,
  b,
  m,
  g,
  q,
  d,
  x,
  A,
  s,
  z,
  S,
  w,
  W,
  V$r,
  Jh,
  o0o,
  Sc,
  s0o,
  ro,
  wcn,
  Gt = function (t) {
    return (
      (t = {
        $$typeof: M,
        _currentValue: t,
        _currentValue2: t,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }),
      (t.Provider = t),
      (t.Consumer = { $$typeof: I, _context: t }),
      t
    );
  },
  wc = function (t, e, n) {
    var r,
      o = {},
      f = null;
    if (e != null)
      for (r in (e.key !== void 0 && (f = "" + e.key), e))
        z.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e[r]);
    var u = arguments.length - 2;
    if (u === 1) o.children = n;
    else if (1 < u) {
      for (var _ = Array(u), i = 0; i < u; i++) _[i] = arguments[i + 2];
      o.children = _;
    }
    if (t && t.defaultProps) for (r in ((u = t.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
    return H(t, f, o);
  },
  i0o = function () {
    return { current: null };
  },
  Og,
  th = function (t, e) {
    return { $$typeof: k, type: t, compare: e === void 0 ? null : e };
  },
  q$r = function (t) {
    var e = s.T,
      n = {};
    s.T = n;
    try {
      var r = t(),
        o = s.S;
      (o !== null && o(n, r),
        typeof r === "object" && r !== null && typeof r.then === "function" && r.then(a, w));
    } catch (f) {
      w(f);
    } finally {
      (e !== null && n.types !== null && (e.types = n.types), (s.T = e));
    }
  },
  Yr = function (t) {
    return s.H.use(t);
  },
  de = function (t, e) {
    return s.H.useCallback(t, e);
  },
  be = function (t) {
    return s.H.useContext(t);
  },
  b8 = function (t, e) {
    return s.H.useDeferredValue(t, e);
  },
  P = function (t, e) {
    return s.H.useEffect(t, e);
  },
  Bo = function (t) {
    return s.H.useEffectEvent(t);
  },
  a0o = function () {
    return s.H.useId();
  },
  $Te = function (t, e, n) {
    return s.H.useImperativeHandle(t, e, n);
  },
  Xhe = function (t, e) {
    return s.H.useInsertionEffect(t, e);
  },
  Xt = function (t, e) {
    return s.H.useLayoutEffect(t, e);
  },
  ee = function (t, e) {
    return s.H.useMemo(t, e);
  },
  Qh = function (t, e, n) {
    return s.H.useReducer(t, e, n);
  },
  C = function (t) {
    return s.H.useRef(t);
  },
  y = function (t) {
    return s.H.useState(t);
  },
  kt = function (t, e, n) {
    return s.H.useSyncExternalStore(t, e, n);
  },
  Y$r = function () {
    return s.H.useTransition();
  };
var j = Ua(() => {
  ((v = Symbol.for("react.transitional.element")),
    (N = Symbol.for("react.portal")),
    (Y = Symbol.for("react.fragment")),
    (I = Symbol.for("react.consumer")),
    (M = Symbol.for("react.context")),
    (L = Symbol.for("react.suspense")),
    (k = Symbol.for("react.memo")),
    (U = Symbol.for("react.lazy")),
    (b = Symbol.for("react.activity")),
    (m = Symbol.iterator));
  ((g = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  }),
    (q = Object.assign),
    (d = {}));
  c.prototype.isReactComponent = {};
  c.prototype.setState = function (t, e) {
    if (typeof t !== "object" && typeof t !== "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, e, "setState");
  };
  c.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  h.prototype = c.prototype;
  x = T.prototype = new h();
  x.constructor = T;
  q(x, c.prototype);
  x.isPureReactComponent = !0;
  A = Array.isArray;
  ((s = { H: null, A: null, T: null, S: null }), (z = Object.prototype.hasOwnProperty));
  S = /\/+/g;
  ((w =
    typeof reportError === "function"
      ? reportError
      : function (t) {
          if (typeof window === "object" && typeof window.ErrorEvent === "function") {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t === "object" && t !== null && typeof t.message === "string"
                  ? String(t.message)
                  : String(t),
              error: t
            });
            if (!window.dispatchEvent(e)) return;
          } else if (typeof process === "object" && typeof process.emit === "function") {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        }),
    (W = {
      map: l,
      forEach: function (t, e, n) {
        l(
          t,
          function () {
            e.apply(this, arguments);
          },
          n
        );
      },
      count: function (t) {
        var e = 0;
        return (
          l(t, function () {
            e++;
          }),
          e
        );
      },
      toArray: function (t) {
        return (
          l(t, function (e) {
            return e;
          }) || []
        );
      },
      only: function (t) {
        if (!R(t))
          throw Error("React.Children.only expected to receive a single React element child.");
        return t;
      }
    }));
  ((V$r = b), (Jh = W), (o0o = c), (Sc = Y), (s0o = T), (ro = L), (wcn = s), (Og = R));
});
export {
  V$r,
  Jh,
  o0o,
  Sc,
  s0o,
  ro,
  wcn,
  Gt,
  wc,
  i0o,
  Og,
  th,
  q$r,
  Yr,
  de,
  be,
  b8,
  P,
  Bo,
  a0o,
  $Te,
  Xhe,
  Xt,
  ee,
  Qh,
  C,
  y,
  kt,
  Y$r,
  j
};

//# sourceMappingURL=chunk-bq35vvkw.js.map
