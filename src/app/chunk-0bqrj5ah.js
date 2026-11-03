// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  xar,
  c7o,
  Par,
  Iar,
  Oci,
  EEn,
  Mci,
  kEn,
  Pfe,
  Oar,
  tSe,
  Dci,
  Hci,
  u7o,
  TEn,
  Lci,
  h4t,
  f7o,
  Nci,
  mAt,
  I4e,
  yd,
  p7o,
  $ci,
  Q3r,
  m7o,
  Kwi,
  Vwi,
  qwi,
  Ywi,
  Xwi,
  Fci,
  Jwi,
  ixe,
  Uci,
  E$e,
  g7o,
  O4e,
  Z3r,
  e8r,
  Bci,
  y4t,
  sst,
  h7o,
  jci,
  jw,
  Qwi,
  Wci,
  Cr,
  M4e,
  Mar,
  BZ,
  jZ
} from "./chunk-tezcm8zk.js";
function ns() {
  let e = this._zod;
  return (e.message ?? (e.message = JSON.stringify(e.def, Par, 2)), e.message);
}
function is(e) {
  this._zod.message = e;
}
var ss = { get: ns, set: is, enumerable: !0, configurable: !0 },
  Ie = { value: void 0, enumerable: !1 },
  Kt = new WeakSet([Object.prototype, Error.prototype]),
  Wt = (e, t) => {
    ((e.name = "$ZodError"),
      (Ie.value = t),
      Object.defineProperty(e, "issues", Ie),
      (Ie.value = void 0),
      Object.defineProperty(e, "message", ss));
    let r = Object.getPrototypeOf(e);
    if (!Kt.has(r))
      (Kt.add(r),
        Object.defineProperty(r, "toString", {
          configurable: !0,
          enumerable: !1,
          get() {
            let n = () => this.message;
            return (
              Object.defineProperty(this, "toString", { value: n, configurable: !0, writable: !0 }),
              n
            );
          },
          set(n) {
            Object.defineProperty(this, "toString", { value: n, configurable: !0, writable: !0 });
          }
        }));
  },
  Gt = Cr("$ZodError", Wt),
  qt = Cr("$ZodError", Wt, void 0, { Parent: Error });
function cs(e, t, r) {
  if (!Object.prototype.hasOwnProperty.call(e, t))
    if (t === "__proto__")
      Object.defineProperty(e, t, { value: r(), writable: !0, enumerable: !0, configurable: !0 });
    else e[t] = r();
  return e[t];
}
function Yt(e, t = (r) => r.message) {
  let r = {},
    n = [];
  for (let i of e.issues)
    if (i.path.length > 0) cs(r, i.path[0], () => []).push(t(i));
    else n.push(t(i));
  return { formErrors: n, fieldErrors: r };
}
function Xt(e, t = (r) => r.message) {
  let r = { _errors: [] },
    n = (i, s = []) => {
      for (let c of i.issues)
        if (c.code === "invalid_union" && c.errors.length)
          c.errors.map((a) => n({ issues: a }, [...s, ...c.path]));
        else if (c.code === "invalid_key") n({ issues: c.issues }, [...s, ...c.path]);
        else if (c.code === "invalid_element") n({ issues: c.issues }, [...s, ...c.path]);
        else {
          let a = [...s, ...c.path];
          if (a.length === 0) r._errors.push(t(c));
          else {
            let l = r,
              p = 0;
            while (p < a.length) {
              let f = a[p],
                d = p === a.length - 1;
              if (f === "_errors") {
                if (d) l._errors.push(t(c));
                p++;
                continue;
              }
              if (!Object.prototype.hasOwnProperty.call(l, f))
                Object.defineProperty(l, f, {
                  value: { _errors: [] },
                  enumerable: !0,
                  writable: !0,
                  configurable: !0
                });
              let _ = l[f];
              if (d) _._errors.push(t(c));
              ((l = _), p++);
            }
          }
        }
    };
  return (n(e), r);
}
function se(e, t) {
  return { callee: t?.callee ?? e, Err: t?.Err };
}
var ce = (e) => {
  let t = (r, n, i, s) => {
    let c = i ? { ...i, async: !1 } : { async: !1 },
      a = r._zod.run({ value: n, issues: [] }, c);
    if (a instanceof Promise) throw new M4e();
    if (a.issues.length) {
      let l = new (s?.Err ?? e)(a.issues.map((p) => O4e(p, c, jZ())));
      throw (u7o(l, s?.callee ?? t), l);
    }
    return a.value;
  };
  return t;
};
var ue = (e) => {
  let t = async (r, n, i, s) => {
    let c = i ? { ...i, async: !0 } : { async: !0 },
      a = r._zod.run({ value: n, issues: [] }, c);
    if (a instanceof Promise) a = await a;
    if (a.issues.length) {
      let l = new (s?.Err ?? e)(a.issues.map((p) => O4e(p, c, jZ())));
      throw (u7o(l, s?.callee ?? t), l);
    }
    return a.value;
  };
  return t;
};
var J = (e) => (t, r, n) => {
    let i = n ? { ...n, async: !1 } : { async: !1 },
      s = t._zod.run({ value: r, issues: [] }, i);
    if (s instanceof Promise) throw new M4e();
    return s.issues.length ? Qt(e, s.issues, i) : { success: !0, data: s.value };
  },
  s7o = J(qt);
function Qt(e, t, r) {
  let n;
  return {
    success: !1,
    get error() {
      if (!n) ((n = new e(t.map((i) => O4e(i, r, jZ())))), (t = void 0), (r = void 0));
      return n;
    },
    set error(i) {
      ((n = i), (t = void 0), (r = void 0));
    }
  };
}
var ae = (e) => async (t, r, n) => {
  let i = n ? { ...n, async: !0 } : { async: !0 },
    s = t._zod.run({ value: r, issues: [] }, i);
  if (s instanceof Promise) s = await s;
  return s.issues.length ? Qt(e, s.issues, i) : { success: !0, data: s.value };
};
var as = Symbol.for("zod.compile.invalid"),
  ls = Symbol.for("zod.compile.fallback"),
  Oe = (e, t, r) => {
    let n = e._zod.bag.validator;
    if (n !== void 0) {
      if (n(t) !== as) return !0;
      if (n.definite === !0 && r === void 0) return !1;
    }
    return ps(e, t, r);
  };
function ps(e, t, r) {
  let n = r ? { ...r, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 },
    i = e._zod.bag.fallbackRun,
    s;
  if (i) ((n[ls] = !0), (s = i({ value: t, issues: [] }, n)));
  else s = e._zod.run({ value: t, issues: [] }, n);
  if (s instanceof Promise) throw new M4e();
  return s.issues.length === 0;
}
var Ae = async (e, t, r) => {
    let n = r ? { ...r, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 },
      i = e._zod.run({ value: t, issues: [] }, n);
    if (i instanceof Promise) i = await i;
    return i.issues.length === 0;
  },
  er = (e) => {
    let t = ce(e),
      r = (n, i, s, c) => {
        let a = s ? { ...s, direction: "backward" } : { direction: "backward" };
        return t(n, i, a, se(r, c));
      };
    return r;
  };
var tr = (e) => {
  let t = ce(e),
    r = (n, i, s, c) => t(n, i, s, se(r, c));
  return r;
};
var rr = (e) => {
  let t = ue(e),
    r = async (n, i, s, c) => {
      let a = s ? { ...s, direction: "backward" } : { direction: "backward" };
      return await t(n, i, a, se(r, c));
    };
  return r;
};
var or = (e) => {
  let t = ue(e),
    r = async (n, i, s, c) => await t(n, i, s, se(r, c));
  return r;
};
var nr = (e) => (t, r, n) => {
  let i = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return J(e)(t, r, i);
};
var ir = (e) => (t, r, n) => J(e)(t, r, n);
var sr = (e) => async (t, r, n) => {
  let i = n ? { ...n, direction: "backward" } : { direction: "backward" };
  return ae(e)(t, r, i);
};
var cr = (e) => async (t, r, n) => ae(e)(t, r, n);
var ur = /^[cC][0-9a-z]{6,}$/,
  ar = /^[0-9a-z]+$/,
  lr = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
  pr = /^[0-9a-vA-V]{20}$/,
  fr = /^[A-Za-z0-9]{27}$/,
  dr = /^[a-zA-Z0-9_-]{21}$/;
function mr(e) {
  return new RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
var hr =
  /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var _r = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
  Te = (e) => {
    if (!e)
      return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(
      `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`
    );
  };
var gr =
  /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var fs =
  "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function xr() {
  return new RegExp(fs, "u");
}
var vr =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  yr =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var $r =
    /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
  zr =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  br = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
  kr = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/;
var Zr = /^https?$/,
  wr = /^\+[1-9]\d{6,14}$/;
var Pr =
  "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function ds(e) {
  return new RegExp(`^${e}$`);
}
var Sr = ds(Pr);
function Ee(e) {
  return typeof e.precision === "number"
    ? e.precision === -1
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d"
      : e.precision === 0
        ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
        : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}`
    : e.seconds
      ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d(?:\\.\\d+)?"
      : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function Ir(e) {
  return new RegExp(`^${Ee(e)}$`);
}
function Or(e) {
  let t = ["Z"];
  if (e.offset) t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let r = `${Ee({ precision: e.precision, seconds: !0 })}(?:${t.join("|")})`,
    n = e.local ? `${r}|${Ee({ precision: e.precision })}` : r;
  return new RegExp(`^${Pr}T(?:${n})$`);
}
var Ar = /^[\s\S]{0,}$/;
var Ne = /^-?\d+$/,
  V = /^-?\d+(?:\.\d+)?$/,
  Er = /^(?:true|false)$/i,
  Tr = /^null$/i;
var Nr = /^undefined$/i;
var Rr = /^[^A-Z]*$/,
  Dr = /^[^a-z]*$/;
var i2 = Cr("$ZodCheck", (e, t) => {
  var r;
  (e._zod ?? (e._zod = {}), (e._zod.def = t), (r = e._zod).onattach ?? (r.onattach = []));
});
var Ce = (e) => {
    let t = e.value;
    return !Oci(t) && t.length !== void 0;
  },
  le = { number: "number", bigint: "bigint", object: "date" },
  Re = Cr("$ZodCheckLessThan", (e, t) => {
    i2.init(e, t);
    let r = le[typeof t.value];
    e._zod.check = (n) => {
      if (t.inclusive ? n.value <= t.value : n.value < t.value) return;
      n.issues.push({
        origin: le[typeof n.value] ?? r,
        code: "too_big",
        maximum: typeof t.value === "object" ? t.value.getTime() : t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }),
  De = Cr("$ZodCheckGreaterThan", (e, t) => {
    i2.init(e, t);
    let r = le[typeof t.value];
    e._zod.check = (n) => {
      if (t.inclusive ? n.value >= t.value : n.value > t.value) return;
      n.issues.push({
        origin: le[typeof n.value] ?? r,
        code: "too_small",
        minimum: typeof t.value === "object" ? t.value.getTime() : t.value,
        input: n.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }),
  jr = Cr("$ZodCheckMultipleOf", (e, t) => {
    (i2.init(e, t),
      (e._zod.check = (r) => {
        if (typeof r.value !== typeof t.value)
          throw Error("Cannot mix number and bigint in multiple_of check.");
        if (
          typeof r.value === "bigint"
            ? t.value !== BigInt(0) && r.value % t.value === BigInt(0)
            : Mci(r.value, t.value) === 0
        )
          return;
        r.issues.push({
          origin: typeof r.value,
          code: "not_multiple_of",
          divisor: t.value,
          input: r.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Lr = Cr("$ZodCheckNumberFormat", (e, t) => {
    (i2.init(e, t), (t.format = t.format || "float64"));
    let r = t.format?.includes("int"),
      n = r ? "int" : "number",
      [i, s] = Q3r[t.format];
    e._zod.check = (c) => {
      let a = c.value;
      if (r) {
        if (!Number.isInteger(a)) {
          c.issues.push({
            expected: n,
            format: t.format,
            code: "invalid_type",
            continue: !1,
            input: a,
            inst: e
          });
          return;
        }
        if (!Number.isSafeInteger(a)) {
          if (a > 0)
            c.issues.push({
              input: a,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst: e,
              origin: n,
              inclusive: !0,
              continue: !t.abort
            });
          else
            c.issues.push({
              input: a,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst: e,
              origin: n,
              inclusive: !0,
              continue: !t.abort
            });
          return;
        }
      }
      if (a < i)
        c.issues.push({
          origin: "number",
          input: a,
          code: "too_small",
          minimum: i,
          inclusive: !0,
          inst: e,
          continue: !t.abort
        });
      if (a > s)
        c.issues.push({
          origin: "number",
          input: a,
          code: "too_big",
          maximum: s,
          inclusive: !0,
          inst: e,
          continue: !t.abort
        });
    };
  });
var Fr = Cr("$ZodCheckMaxLength", (e, t) => {
    var r;
    (i2.init(e, t),
      (r = e._zod.def).when ?? (r.when = Ce),
      (e._zod.check = (n) => {
        let i = n.value,
          s = i.length;
        if ((typeof i === "string" && s > t.maximum ? Z3r(i) : s) <= t.maximum) return;
        let a = e8r(i);
        n.issues.push({
          origin: a,
          code: "too_big",
          maximum: t.maximum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Mr = Cr("$ZodCheckMinLength", (e, t) => {
    var r;
    (i2.init(e, t),
      (r = e._zod.def).when ?? (r.when = Ce),
      (e._zod.check = (n) => {
        let i = n.value,
          s = i.length;
        if (
          (typeof i === "string" && s >= t.minimum && s < t.minimum * 2 ? Z3r(i) : s) >= t.minimum
        )
          return;
        let a = e8r(i);
        n.issues.push({
          origin: a,
          code: "too_small",
          minimum: t.minimum,
          inclusive: !0,
          input: i,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Ur = Cr("$ZodCheckLengthEquals", (e, t) => {
    var r;
    (i2.init(e, t),
      (r = e._zod.def).when ?? (r.when = Ce),
      (e._zod.check = (n) => {
        let i = n.value,
          s = i.length,
          c = typeof i === "string" && s >= t.length && s <= t.length * 2 ? Z3r(i) : s;
        if (c === t.length) return;
        let a = e8r(i),
          l = c > t.length;
        n.issues.push({
          origin: a,
          ...(l
            ? { code: "too_big", maximum: t.length }
            : { code: "too_small", minimum: t.length }),
          inclusive: !0,
          exact: !0,
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  W = Cr("$ZodCheckStringFormat", (e, t) => {
    var r, n;
    if ((i2.init(e, t), t.pattern))
      (r = e._zod).check ??
        (r.check = (i) => {
          if (((t.pattern.lastIndex = 0), t.pattern.test(i.value))) return;
          i.issues.push({
            origin: "string",
            code: "invalid_format",
            format: t.format,
            input: i.value,
            ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
            inst: e,
            continue: !t.abort
          });
        });
    else (n = e._zod).check ?? (n.check = () => {});
  }),
  Jr = Cr("$ZodCheckRegex", (e, t) => {
    (W.init(e, t),
      (e._zod.check = (r) => {
        if (((t.pattern.lastIndex = 0), t.pattern.test(r.value))) return;
        r.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: r.value,
          pattern: t.pattern.toString(),
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Br = Cr("$ZodCheckLowerCase", (e, t) => {
    (t.pattern ?? (t.pattern = Rr), W.init(e, t));
  }),
  Vr = Cr("$ZodCheckUpperCase", (e, t) => {
    (t.pattern ?? (t.pattern = Dr), W.init(e, t));
  }),
  Kr = Cr("$ZodCheckIncludes", (e, t) => {
    i2.init(e, t);
    let r = mAt(t.includes),
      n = new RegExp(typeof t.position === "number" ? `^.{${t.position},}${r}` : r);
    ((t.pattern = n),
      (e._zod.check = (i) => {
        if (i.value.includes(t.includes, t.position)) return;
        i.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: t.includes,
          input: i.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Wr = Cr("$ZodCheckStartsWith", (e, t) => {
    i2.init(e, t);
    let r = new RegExp(`^${mAt(t.prefix)}.*`);
    (t.pattern ?? (t.pattern = r),
      (e._zod.check = (n) => {
        if (n.value.startsWith(t.prefix)) return;
        n.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: t.prefix,
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  qr = Cr("$ZodCheckEndsWith", (e, t) => {
    i2.init(e, t);
    let r = new RegExp(`.*${mAt(t.suffix)}$`);
    (t.pattern ?? (t.pattern = r),
      (e._zod.check = (n) => {
        if (n.value.endsWith(t.suffix)) return;
        n.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: t.suffix,
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }));
  });
var Yr = Cr("$ZodCheckOverwrite", (e, t) => {
  (i2.init(e, t),
    (e._zod.check = (r) => {
      r.value = t.tx(r.value);
    }));
});
class je {
  constructor(e = [], t = {}) {
    ((this.content = []), (this.indent = 0), (this.args = e), (this.closed = t));
  }
  indented(e) {
    this.indent += 1;
    try {
      e(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(e) {
    if (typeof e === "function") {
      (e(this, { execution: "sync" }), e(this, { execution: "async" }));
      return;
    }
    let r = e
        .split(
          `
`
        )
        .filter((s) => s),
      n = Math.min(...r.map((s) => s.length - s.trimStart().length)),
      i = r.map((s) => s.slice(n)).map((s) => " ".repeat(this.indent * 2) + s);
    for (let s of i) this.content.push(s);
  }
  compile() {
    let e = Function,
      t = this?.content ?? [""];
    return new e(
      ...Object.keys(this.closed),
      `return function (${this.args.join(", ")}) {
${t.join(`
`)}
};`
    )(...Object.values(this.closed));
  }
}
var Hr = { major: 4, minor: 6, patch: 2 };
var dk = Cr(
    "$ZodType",
    (e, t) => {
      var r;
      (e ?? (e = {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = Hr));
      let n = e._zod.def.checks,
        i = e._zod.traits.has("$ZodCheck") ? [e, ...(n ?? [])] : n?.length ? [...n] : [];
      for (let s of i) for (let c of s._zod.onattach) c(e);
      if (i.length === 0)
        ((r = e._zod).deferred ?? (r.deferred = []),
          e._zod.deferred?.push(() => {
            e._zod.run = e._zod.parse;
          }));
      else {
        let s = (a, l, p) => {
            if (a.memo) return a;
            let f = ixe(a),
              d;
            for (let _ of l) {
              if (_._zod.def.when) {
                if (Uci(a)) continue;
                if (!_._zod.def.when(a)) continue;
              } else if (f) continue;
              let m = a.issues.length,
                h = _._zod.check(a);
              if (h instanceof Promise && p?.async === !1) throw new M4e();
              if (d || h instanceof Promise)
                d = (d ?? Promise.resolve()).then(async () => {
                  if ((await h, a.issues.length === m)) return;
                  if ((g7o(a.issues, m, e), !f)) f = ixe(a, m);
                });
              else {
                if (a.issues.length === m) continue;
                if ((g7o(a.issues, m, e), !f)) f = ixe(a, m);
              }
            }
            if (d) return d.then(() => a);
            return a;
          },
          c = (a, l, p) => {
            if (ixe(a)) return ((a.aborted = !0), a);
            let f = s(l, i, p);
            if (f instanceof Promise) {
              if (p.async === !1) throw new M4e();
              return f.then((d) => e._zod.parse(d, p));
            }
            return e._zod.parse(f, p);
          };
        e._zod.run = (a, l) => {
          if (l.skipChecks) return e._zod.parse(a, l);
          if (l.direction === "backward") {
            let f = e._zod.parse({ value: a.value, issues: [] }, { ...l, skipChecks: !0 });
            if (f instanceof Promise) return f.then((d) => c(d, a, l));
            return c(f, a, l);
          }
          let p = e._zod.parse(a, l);
          if (p instanceof Promise) {
            if (l.async === !1) throw new M4e();
            return p.then((f) => s(f, i, l));
          }
          return s(p, i, l);
        };
      }
    },
    {
      get "~standard"() {
        return h7o(this, "~standard", Fe(this));
      },
      set "~standard"(e) {
        sst(this, "~standard", e);
      }
    }
  ),
  fo = (e, t) =>
    e.issues.length ? { issues: e.issues.map((r) => O4e(r, t, jZ())) } : { value: e.value };
async function ms(e, t) {
  let r = { async: !0 };
  return fo(await e._zod.run({ value: t, issues: [] }, r), r);
}
function Fe(e) {
  return {
    validate: (t) => {
      let r = { async: !1 };
      try {
        let n = e._zod.run({ value: t, issues: [] }, r);
        if (!(n instanceof Promise)) return fo(n, r);
      } catch (n) {}
      return ms(e, t);
    },
    vendor: "zod",
    version: 1
  };
}
var de = Cr("$ZodString", (e, t) => {
    (dk.init(e, t),
      (e._zod.pattern = t.pattern ?? Ar),
      (e._zod.parse = (r, n) => {
        if (t.coerce)
          try {
            r.value = String(r.value);
          } catch (i) {}
        if (typeof r.value === "string") return r;
        return (
          r.issues.push({ expected: "string", code: "invalid_type", input: r.value, inst: e }),
          r
        );
      }));
  }),
  b = Cr("$ZodStringFormat", (e, t) => {
    (W.init(e, t), de.init(e, t));
  }),
  mo = Cr("$ZodGUID", (e, t) => {
    (t.pattern ?? (t.pattern = _r), b.init(e, t));
  }),
  ho = Cr("$ZodUUID", (e, t) => {
    if (t.version) {
      let n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
      if (n === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = Te(n));
    } else t.pattern ?? (t.pattern = Te());
    b.init(e, t);
  }),
  _o = Cr("$ZodEmail", (e, t) => {
    (t.pattern ?? (t.pattern = gr), b.init(e, t));
  }),
  go = 1,
  xo = 2;
function hs(e, t) {
  if (!t.normalize && t.protocol?.source === Zr.source && !/^https?:\/\//i.test(e)) return go;
  try {
    return new URL(e);
  } catch {
    return xo;
  }
}
var _s = /[\t\n\r]/g;
function gs(e) {
  return e.replace(_s, "");
}
function xs(e, t) {
  return ((t.lastIndex = 0), t.test(e.hostname));
}
function vs(e, t) {
  return (
    (t.lastIndex = 0),
    t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol)
  );
}
var vo = Cr("$ZodURL", (e, t) => {
    (b.init(e, t),
      (e._zod.check = (r) => {
        try {
          let n = r.value.trim(),
            i = hs(n, t);
          if (i === go) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid URL format",
              input: r.value,
              inst: e,
              continue: !t.abort
            });
            return;
          }
          if (i === xo) {
            r.issues.push({
              code: "invalid_format",
              format: "url",
              input: r.value,
              inst: e,
              continue: !t.abort
            });
            return;
          }
          if (t.hostname && !xs(i, t.hostname))
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid hostname",
              pattern: t.hostname.source,
              input: r.value,
              inst: e,
              continue: !t.abort
            });
          if (t.protocol && !vs(i, t.protocol))
            r.issues.push({
              code: "invalid_format",
              format: "url",
              note: "Invalid protocol",
              pattern: t.protocol.source,
              input: r.value,
              inst: e,
              continue: !t.abort
            });
          r.value = t.normalize ? i.href : gs(n);
          return;
        } catch (n) {
          r.issues.push({
            code: "invalid_format",
            format: "url",
            input: r.value,
            inst: e,
            continue: !t.abort
          });
        }
      }));
  }),
  yo = Cr("$ZodEmoji", (e, t) => {
    (t.pattern ?? (t.pattern = xr()), b.init(e, t));
  }),
  $o = Cr("$ZodNanoID", (e, t) => {
    if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1))
      throw Error(`Invalid nanoid length: ${t.length}`);
    (t.pattern ?? (t.pattern = t.length === void 0 ? dr : mr(t.length)), b.init(e, t));
  }),
  zo = Cr("$ZodCUID", (e, t) => {
    (t.pattern ?? (t.pattern = ur), b.init(e, t));
  }),
  bo = Cr("$ZodCUID2", (e, t) => {
    (t.pattern ?? (t.pattern = ar), b.init(e, t));
  }),
  ko = Cr("$ZodULID", (e, t) => {
    (t.pattern ?? (t.pattern = lr), b.init(e, t));
  }),
  Zo = Cr("$ZodXID", (e, t) => {
    (t.pattern ?? (t.pattern = pr), b.init(e, t));
  }),
  wo = Cr("$ZodKSUID", (e, t) => {
    (t.pattern ?? (t.pattern = fr), b.init(e, t));
  }),
  Po = Cr("$ZodISODateTime", (e, t) => {
    (t.pattern ?? (t.pattern = Or(t)), b.init(e, t));
  }),
  So = Cr("$ZodISODate", (e, t) => {
    (t.pattern ?? (t.pattern = Sr), b.init(e, t));
  }),
  Io = Cr("$ZodISOTime", (e, t) => {
    (t.pattern ?? (t.pattern = Ir(t)), b.init(e, t));
  }),
  Oo = Cr("$ZodISODuration", (e, t) => {
    (t.pattern ?? (t.pattern = hr), b.init(e, t));
  }),
  Ao = Cr("$ZodIPv4", (e, t) => {
    (t.pattern ?? (t.pattern = vr), b.init(e, t));
  }),
  ys = /^[0-9a-fA-F:.]+$/;
function Eo(e) {
  if (!ys.test(e)) return !1;
  try {
    return (new URL(`http://[${e}]`), !0);
  } catch {
    return !1;
  }
}
var To = Cr("$ZodIPv6", (e, t) => {
  (t.pattern ?? (t.pattern = yr),
    b.init(e, t),
    (e._zod.check = (r) => {
      if (!Eo(r.value))
        r.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
    }));
});
var No = Cr("$ZodCIDRv4", (e, t) => {
  (t.pattern ?? (t.pattern = $r), b.init(e, t));
});
function $s(e) {
  let t = e.split("/");
  if (t.length !== 2) return !1;
  let [r, n] = t;
  if (!n) return !1;
  let i = Number(n);
  if (`${i}` !== n) return !1;
  if (i < 0 || i > 128) return !1;
  return Eo(r);
}
var Co = Cr("$ZodCIDRv6", (e, t) => {
  (t.pattern ?? (t.pattern = zr),
    b.init(e, t),
    (e._zod.check = (r) => {
      if (!$s(r.value))
        r.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
    }));
});
function Ro(e) {
  if (e === "") return !0;
  if (/\s/.test(e)) return !1;
  if (e.length % 4 !== 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
var Me = /^[0-9a-zA-Z+/]*={0,2}$/,
  Do = Cr("$ZodBase64", (e, t) => {
    (t.pattern ?? (t.pattern = Me),
      b.init(e, t),
      (e._zod.check = (r) => {
        if (Ro(r.value)) return;
        r.issues.push({
          code: "invalid_format",
          format: "base64",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  he = /^[A-Za-z0-9_-]*$/;
function zs(e) {
  if (!he.test(e)) return !1;
  let t = e.replace(/[-_]/g, (n) => (n === "-" ? "+" : "/")),
    r = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return Ro(r);
}
var jo = Cr("$ZodBase64URL", (e, t) => {
    (t.pattern ?? (t.pattern = he),
      b.init(e, t),
      (e._zod.check = (r) => {
        if (zs(r.value)) return;
        r.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: r.value,
          inst: e,
          continue: !t.abort
        });
      }));
  }),
  Lo = Cr("$ZodE164", (e, t) => {
    (t.pattern ?? (t.pattern = wr), b.init(e, t));
  });
function bs(e, t = null) {
  try {
    let r = e.split(".");
    if (r.length !== 3) return !1;
    let [n] = r;
    if (!n) return !1;
    let i = JSON.parse(atob(n));
    if ("typ" in i && i?.typ !== "JWT") return !1;
    if (!i.alg) return !1;
    if (t && (!("alg" in i) || i.alg !== t)) return !1;
    return !0;
  } catch {
    return !1;
  }
}
var Fo = Cr("$ZodJWT", (e, t) => {
  (b.init(e, t),
    (e._zod.check = (r) => {
      if (bs(r.value, t.alg)) return;
      r.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    }));
});
var Je = Cr("$ZodNumber", (e, t) => {
    (dk.init(e, t),
      (e._zod.pattern = V),
      (e._zod.parse = (r, n) => {
        if (t.coerce)
          try {
            r.value = Number(r.value);
          } catch (c) {}
        let i = r.value;
        if (typeof i === "number" && !Number.isNaN(i) && Number.isFinite(i)) return r;
        let s =
          typeof i === "number"
            ? Number.isNaN(i)
              ? "NaN"
              : !Number.isFinite(i)
                ? String(i)
                : void 0
            : void 0;
        return (
          r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: i,
            inst: e,
            ...(s ? { received: s } : {})
          }),
          r
        );
      }));
  }),
  Mo = Cr("$ZodNumberFormat", (e, t) => {
    (Lr.init(e, t), Je.init(e, t));
  }),
  Uo = Cr("$ZodBoolean", (e, t) => {
    (dk.init(e, t),
      (e._zod.pattern = Er),
      (e._zod.parse = (r, n) => {
        if (t.coerce)
          try {
            r.value = Boolean(r.value);
          } catch (s) {}
        let i = r.value;
        if (typeof i === "boolean") return r;
        return (r.issues.push({ expected: "boolean", code: "invalid_type", input: i, inst: e }), r);
      }));
  });
var Jo = Cr("$ZodUndefined", (e, t) => {
    (dk.init(e, t),
      (e._zod.pattern = Nr),
      (e._zod.values = new Set([void 0])),
      (e._zod.parse = (r, n) => {
        let i = r.value;
        if (typeof i > "u") return r;
        return (
          r.issues.push({ expected: "undefined", code: "invalid_type", input: i, inst: e }),
          r
        );
      }));
  }),
  Bo = Cr("$ZodNull", (e, t) => {
    (dk.init(e, t),
      (e._zod.pattern = Tr),
      (e._zod.values = new Set([null])),
      (e._zod.parse = (r, n) => {
        let i = r.value;
        if (i === null) return r;
        return (r.issues.push({ expected: "null", code: "invalid_type", input: i, inst: e }), r);
      }));
  }),
  Vo = Cr("$ZodAny", (e, t) => {
    (dk.init(e, t), (e._zod.parse = (r) => r));
  }),
  Ko = Cr("$ZodUnknown", (e, t) => {
    (dk.init(e, t), (e._zod.parse = (r) => r));
  }),
  Wo = Cr("$ZodNever", (e, t) => {
    (dk.init(e, t),
      (e._zod.parse = (r, n) => (
        r.issues.push({ expected: "never", code: "invalid_type", input: r.value, inst: e }),
        r
      )));
  });
function Qr(e, t, r) {
  if (e.issues.length) t.issues.push(...E$e(r, e.issues));
  t.value[r] = e.value;
}
var Go = Cr("$ZodArray", (e, t) => {
  dk.init(e, t);
  let r = BZ.memoizer;
  (r?.attach(e),
    (e._zod.parse = (n, i) => {
      let s = n.value;
      if (!Array.isArray(s))
        return (n.issues.push({ expected: "array", code: "invalid_type", input: s, inst: e }), n);
      n.value = r ? r.alloc(e, n, Array(s.length), i) : Array(s.length);
      let c = [],
        a = i?.abortEarly;
      for (let l = 0; l < s.length; l++) {
        let p = s[l],
          f = t.element._zod.run({ value: p, issues: [] }, i);
        if (f instanceof Promise) c.push(f.then((d) => Qr(d, n, l)));
        else if ((Qr(f, n, l), a && f.issues.length !== 0 && ixe(f))) break;
      }
      if (c.length) return Promise.all(c).then(() => n);
      return n;
    }));
});
function fe(e, t, r, n, i, s) {
  let c = r in n,
    a = s === "optional";
  if (!c && a && i === "optional") return;
  if (e.issues.length) {
    if (i !== void 0 && a && !c) return;
    t.issues.push(...E$e(r, e.issues));
  }
  if (!c && i === void 0) {
    if (!e.issues.length)
      t.issues.push({ code: "invalid_type", expected: "nonoptional", input: void 0, path: [r] });
    return;
  }
  if (e.value === void 0) {
    if (c || (i === "defaulted" && !a)) t.value[r] = void 0;
  } else t.value[r] = e.value;
}
var ks = [];
function qo(e) {
  let t = Object.keys(e.shape),
    r = Object.getOwnPropertySymbols(e.shape),
    n = r.length ? r : ks,
    i = n.length ? [...t, ...n] : t;
  for (let c of i)
    if (!e.shape?.[c]?._zod?.traits?.has("$ZodType"))
      throw Error(`Invalid element at key "${String(c)}": expected a Zod schema`);
  let s = $ci(e.shape);
  return {
    ...e,
    allKeys: i,
    symbolKeys: n,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(s)
  };
}
function Yo(e, t, r, n, i, s, c) {
  let a = [],
    l = i.keySet,
    p = i.catchall._zod,
    f = p.def.type,
    { optin: d, optout: _ } = p,
    m = 0;
  for (let h in t) {
    if (c && r.issues.length !== m) {
      if (ixe(r, m)) break;
      m = r.issues.length;
    }
    if (l.has(h)) continue;
    if (h === "__proto__") {
      if (f === "never") a.push(h);
      continue;
    }
    if (f === "never") {
      a.push(h);
      continue;
    }
    let g = p.run({ value: t[h], issues: [] }, n);
    if (g instanceof Promise) e.push(g.then((x) => fe(x, r, h, t, d, _)));
    else fe(g, r, h, t, d, _);
  }
  if (a.length)
    r.issues.push({ code: "unrecognized_keys", keys: a, input: t, inst: s, continue: !0 });
  if (!e.length) return r;
  return Promise.all(e).then(() => r);
}
var Zs = Cr("$ZodObject", (e, t) => {
    dk.init(e, t);
    let r = Object.getOwnPropertyDescriptor(t, "shape"),
      n = r?.get ? r.get.raw : (t.shape ?? {});
    if (n) {
      let p = () => {
        let f = { ...n };
        return (Object.defineProperty(t, "shape", { value: f }), (p.raw = f), f);
      };
      ((p.raw = n), Object.defineProperty(t, "shape", { get: p }));
    }
    let i = Iar(() => qo(t));
    jw(e, "propValues", (p) => {
      let f = p.def.shape,
        d = {};
      for (let _ in f) {
        let m = f[_]._zod;
        if (m.values) {
          if (!Object.prototype.hasOwnProperty.call(d, _)) Pfe(d, _, new Set());
          for (let h of m.values) d[_].add(h);
          if (m.optin !== void 0) d[_].add(void 0);
        }
      }
      return d;
    });
    let s = TEn,
      c = t.catchall,
      a,
      l = BZ.memoizer;
    (l?.attach(e),
      (e._zod.parse = (p, f) => {
        a ?? (a = i.value);
        let d = p.value;
        if (!s(d))
          return (
            p.issues.push({ expected: "object", code: "invalid_type", input: d, inst: e }),
            p
          );
        p.value = l ? l.alloc(e, p, {}, f) : {};
        let _ = [],
          m = a.shape,
          h = f?.abortEarly,
          g = p.issues.length;
        for (let x of a.allKeys) {
          if (h && p.issues.length !== g) {
            if (ixe(p, g)) break;
            g = p.issues.length;
          }
          if (x === "__proto__") continue;
          let y = m[x],
            O = y._zod.optin,
            F = y._zod.optout,
            U = y._zod.run({ value: d[x], issues: [] }, f);
          if (U instanceof Promise) _.push(U.then((w) => fe(w, p, x, d, O, F)));
          else fe(U, p, x, d, O, F);
        }
        if (!c) return _.length ? Promise.all(_).then(() => p) : p;
        return Yo(_, d, p, f, i.value, e, h === !0);
      }));
  }),
  Xo = Cr("$ZodObjectJIT", (e, t) => {
    Zs.init(e, t);
    let r = e._zod.parse,
      n = Iar(() => qo(t)),
      i = BZ.memoizer,
      s = (m) => {
        let h = n.value,
          g = h.symbolKeys,
          x = new je(["payload", "ctx"], { shape: m, inst: e, memo: i, syms: g }),
          y = (w) => `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`,
          O = (w, z) => `
          let ${w}_ab = false;
          for (let i = 0; i < ${w}.issues.length; i++) {
            const iss = ${w}.issues[i];
            iss.path = iss.path ? [${z}, ...iss.path] : [${z}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${w}_ab = true;
          }
          if (${w}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
        x.write("const input = payload.value;");
        let F = Object.create(null),
          U = 0;
        for (let w of h.allKeys) F[w] = `key_${U++}`;
        x.write(
          i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};"
        );
        for (let w of h.allKeys) {
          if (w === "__proto__") continue;
          let z = F[w],
            E = typeof w === "symbol" ? `syms[${g.indexOf(w)}]` : Dci(w),
            Pe = `${E} in input`,
            Bt = m[w],
            Se = Bt?._zod?.optin,
            Vt = Se !== void 0,
            rs = Bt?._zod?.optout === "optional";
          if ((x.write(`const ${z} = ${y(E)};`), Vt && rs)) {
            let os =
              Se === "optional" ? `${z}_present` : `${z}.value !== undefined || ${z}_present`;
            x.write(`
        const ${z}_present = ${Pe};
        if (!${z}.issues.length || ${z}_present) {
          if (${z}.issues.length) {${O(z, E)}
          }

          if (${os}) {
            newResult[${E}] = ${z}.value;
          }
        }

      `);
          } else if (!Vt)
            x.write(`
        const ${z}_present = ${Pe};
        if (${z}.issues.length) {${O(z, E)}
        }
        if (!${z}_present && !${z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${E}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${z}_present) {
          newResult[${E}] = ${z}.value;
        }

      `);
          else if (
            (x.write(`
        if (${z}.issues.length) {${O(z, E)}
        }
      `),
            Se === "defaulted")
          )
            x.write(`newResult[${E}] = ${z}.value;`);
          else
            x.write(`
        if (${z}.value !== undefined || ${Pe}) {
          newResult[${E}] = ${z}.value;
        }
      `);
        }
        return (x.write("payload.value = newResult;"), x.write("return payload;"), x.compile());
      },
      c,
      a = TEn,
      l = !BZ.jitless,
      f = l && Lci.value,
      d = t.catchall,
      _;
    e._zod.parse = (m, h) => {
      _ ?? (_ = n.value);
      let g = m.value;
      if (!a(g))
        return (m.issues.push({ expected: "object", code: "invalid_type", input: g, inst: e }), m);
      if (l && f && h?.async === !1 && h.jitless !== !0) {
        if (!c) c = s(t.shape);
        if (((m = c(m, h)), !d)) return m;
        return Yo([], g, m, h, _, e, h?.abortEarly === !0);
      }
      return r(m, h);
    };
  });
function eo(e, t, r, n) {
  for (let s of e) if (s.issues.length === 0) return ((t.value = s.value), t);
  let i = e.filter((s) => !ixe(s));
  if (i.length === 1) return ((t.value = i[0].value), i[0]);
  return (
    t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: r,
      errors: e.map((s) => s.issues.map((c) => O4e(c, n, jZ())))
    }),
    t
  );
}
var Be = Cr("$ZodUnion", (e, t) => {
  (dk.init(e, t),
    jw(e, "optin", (n) =>
      n.def.options.some((i) => i._zod.optin === "defaulted")
        ? "defaulted"
        : n.def.options.some((i) => i._zod.optin !== void 0)
          ? "optional"
          : void 0
    ),
    jw(e, "optout", (n) =>
      n.def.options.some((i) => i._zod.optout === "optional") ? "optional" : void 0
    ),
    jw(e, "values", (n) => {
      if (n.def.options.every((i) => i._zod.values))
        return new Set(n.def.options.flatMap((i) => Array.from(i._zod.values)));
      return;
    }),
    jw(e, "pattern", (n) => {
      if (n.def.options.every((i) => i._zod.pattern)) {
        let i = n.def.options.map((s) => s._zod.pattern);
        return new RegExp(`^(${i.map((s) => EEn(s.source)).join("|")})$`);
      }
      return;
    }));
  let r = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (n, i) => {
    if (r) return r(n, i);
    let s = !1,
      c = [];
    for (let a of t.options) {
      let l = a._zod.run({ value: n.value, issues: [] }, i);
      if (l instanceof Promise) (c.push(l), (s = !0));
      else {
        if (l.issues.length === 0) return l;
        c.push(l);
      }
    }
    if (!s) return eo(c, n, e, i);
    return Promise.all(c).then((a) => eo(a, n, e, i));
  };
});
function ws(e) {
  let t = new Map();
  for (let r of e.options) {
    let n = r._zod.propValues?.[e.discriminator];
    if (!n || n.size === 0)
      throw Error(`Invalid discriminated union option at index "${e.options.indexOf(r)}"`);
    for (let i of n)
      if (t.has(i)) {
        if (i !== void 0) throw Error(`Duplicate discriminator value "${String(i)}"`);
        t.set(i, null);
      } else t.set(i, r);
  }
  return t;
}
var Ho = Cr("$ZodDiscriminatedUnion", (e, t) => {
    ((t.inclusive = !1), Be.init(e, t));
    let r = e._zod.parse;
    (jw(e, "propValues", (i) => {
      let s = {},
        c = 0;
      for (let a of i.def.options) {
        let l = a._zod.propValues;
        if (!l || Object.keys(l).length === 0)
          throw Error(`Invalid discriminated union option at index "${i.def.options.indexOf(a)}"`);
        if (l[i.def.discriminator]?.has(void 0)) c++;
        for (let [p, f] of Object.entries(l)) {
          if (!Object.prototype.hasOwnProperty.call(s, p)) Pfe(s, p, new Set());
          for (let d of f) s[p].add(d);
        }
      }
      if (!i.def.unionFallback && c > 1) s[i.def.discriminator]?.delete(void 0);
      return s;
    }),
      t.options.forEach((i, s) => {
        let c = Oar(i._zod.def);
        if (c && !Object.prototype.hasOwnProperty.call(c, t.discriminator))
          throw Error(`Invalid discriminated union option at index "${s}"`);
      }));
    let n = Iar(() => ws(t));
    e._zod.parse = (i, s) => {
      let c = i.value;
      if (!TEn(c))
        return (i.issues.push({ code: "invalid_type", expected: "object", input: c, inst: e }), i);
      let a = c?.[t.discriminator],
        l = n.value.get(a);
      if (l && (a !== void 0 || s.direction !== "backward")) return l._zod.run(i, s);
      if (t.unionFallback || s.direction === "backward") return r(i, s);
      return (
        i.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: t.discriminator,
          options: Array.from(n.value.keys()).filter((p) => n.value.get(p) !== null),
          input: c,
          path: [t.discriminator],
          inst: e
        }),
        i
      );
    };
  }),
  Qo = Cr("$ZodIntersection", (e, t) => {
    (dk.init(e, t),
      (e._zod.parse = (r, n) => {
        let i = r.value,
          s = t.left._zod.run({ value: i, issues: [] }, n),
          c = t.right._zod.run({ value: i, issues: [] }, n);
        if (s instanceof Promise || c instanceof Promise)
          return Promise.all([s, c]).then(([l, p]) => to(r, l, p));
        return to(r, s, c);
      }));
  });
function Le(e, t) {
  if (e === t) return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e === +t) return { valid: !0, data: e };
  if (h4t(e) && h4t(t)) {
    let r = Object.keys(t),
      n = Object.keys(e).filter((s) => r.indexOf(s) !== -1),
      i = { ...e, ...t };
    if (Object.prototype.hasOwnProperty.call(i, "__proto__")) delete i.__proto__;
    for (let s of n) {
      if (s === "__proto__") continue;
      let c = Le(e[s], t[s]);
      if (!c.valid) return { valid: !1, mergeErrorPath: [s, ...c.mergeErrorPath] };
      i[s] = c.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let r = [];
    for (let n = 0; n < e.length; n++) {
      let i = e[n],
        s = t[n],
        c = Le(i, s);
      if (!c.valid) return { valid: !1, mergeErrorPath: [n, ...c.mergeErrorPath] };
      r.push(c.data);
    }
    return { valid: !0, data: r };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function to(e, t, r) {
  let n = new Map(),
    i,
    s = new Map(),
    c = (p, f) => {
      let d;
      if (p.code === "unrecognized_keys" && !p.path?.length) (i ?? (i = p), (d = p.keys));
      else if (p.code === "invalid_key" && p.origin === "record" && p.path?.length === 1) {
        let _ = String(p.path[0]);
        if (!s.has(_)) s.set(_, p);
        d = [_];
      } else return !1;
      for (let _ of d) {
        if (!n.has(_)) n.set(_, {});
        n.get(_)[f] = !0;
      }
      return !0;
    };
  for (let p of t.issues) if (!c(p, "l")) e.issues.push(p);
  for (let p of r.issues) if (!c(p, "r")) e.issues.push(p);
  let a = [...n].filter(([, p]) => p.l && p.r).map(([p]) => p);
  if (a.length) {
    let p = i ? a.filter((f) => i.keys.includes(f)) : [];
    if (p.length) e.issues.push({ ...i, keys: p });
    for (let f of a) if (!p.includes(f) && s.has(f)) e.issues.push(s.get(f));
  }
  let l = Le(t.value, r.value);
  if (!l.valid) {
    if (ixe(e)) return e;
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`);
  }
  return ((e.value = l.data), e);
}
var en = Cr("$ZodTuple", (e, t) => {
  dk.init(e, t);
  let r = t.items,
    n = BZ.memoizer;
  (n?.attach(e),
    (e._zod.parse = (i, s) => {
      let c = i.value;
      if (!Array.isArray(c))
        return (i.issues.push({ input: c, inst: e, expected: "tuple", code: "invalid_type" }), i);
      i.value = n ? n.alloc(e, i, [], s) : [];
      let a = [],
        l = ro(r, "optin"),
        p = ro(r, "optout");
      if (!t.rest) {
        if (c.length < l)
          return (
            i.issues.push({
              code: "too_small",
              minimum: l,
              inclusive: !0,
              input: c,
              inst: e,
              origin: "array"
            }),
            i
          );
        if (c.length > r.length)
          i.issues.push({
            code: "too_big",
            maximum: r.length,
            inclusive: !0,
            input: c,
            inst: e,
            origin: "array"
          });
      }
      let f = Array(r.length),
        d = t.rest ? s?.abortEarly : void 0,
        _ = !1;
      for (let m = 0; m < r.length; m++) {
        let h = r[m]._zod.run({ value: c[m], issues: [] }, s);
        if (h instanceof Promise)
          a.push(
            h.then((g) => {
              f[m] = g;
            })
          );
        else if (((f[m] = h), d && !_ && h.issues.length)) _ = ixe(h);
      }
      if (t.rest && !_) {
        let m = r.length - 1,
          h = c.slice(r.length),
          g = i.issues.length;
        for (let x of h) {
          if (d && i.issues.length !== g) {
            if (ixe(i, g)) break;
            g = i.issues.length;
          }
          m++;
          let y = t.rest._zod.run({ value: x, issues: [] }, s);
          if (y instanceof Promise) a.push(y.then((O) => oo(O, i, m)));
          else oo(y, i, m);
        }
      }
      if (a.length) return Promise.all(a).then(() => no(f, i, r, c, p));
      return no(f, i, r, c, p);
    }));
});
function ro(e, t) {
  for (let r = e.length - 1; r >= 0; r--)
    if (!(t === "optin" ? e[r]._zod.optin !== void 0 : e[r]._zod.optout === "optional"))
      return r + 1;
  return 0;
}
function oo(e, t, r) {
  if (e.issues.length) t.issues.push(...E$e(r, e.issues));
  t.value[r] = e.value;
}
function no(e, t, r, n, i) {
  for (let s = 0; s < r.length; s++) {
    let c = e[s],
      a = s < n.length;
    if (!a && s >= i && r[s]._zod.optin === "optional") {
      t.value.length = s;
      break;
    }
    if (c.issues.length) {
      if (!a && s >= i) {
        t.value.length = s;
        break;
      }
      t.issues.push(...E$e(s, c.issues));
    }
    t.value[s] = c.value;
  }
  for (let s = t.value.length - 1; s >= n.length; s--)
    if (r[s]._zod.optout === "optional" && t.value[s] === void 0) t.value.length = s;
    else break;
  return t;
}
var tn = Cr("$ZodRecord", (e, t) => {
  dk.init(e, t);
  let r = BZ.memoizer;
  (r?.attach(e),
    (e._zod.parse = (n, i) => {
      let s = n.value;
      if (!h4t(s))
        return (n.issues.push({ expected: "record", code: "invalid_type", input: s, inst: e }), n);
      let c = [],
        a = t.keyType._zod.values;
      if (a && !t.partial) {
        n.value = r ? r.alloc(e, n, {}, i) : {};
        let l = new Set();
        for (let f of a)
          if (typeof f === "string" || typeof f === "number" || typeof f === "symbol") {
            if ((l.add(typeof f === "number" ? f.toString() : f), f === "__proto__")) continue;
            let d = t.keyType._zod.run({ value: f, issues: [] }, i);
            if (d instanceof Promise)
              throw Error("Async schemas not supported in object keys currently");
            if (d.issues.length) {
              n.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: d.issues.map((h) => O4e(h, i, jZ())),
                input: f,
                path: [f],
                inst: e
              });
              continue;
            }
            let _ = d.value;
            if (_ === "__proto__") continue;
            let m = t.valueType._zod.run({ value: s[f], issues: [] }, i);
            if (m instanceof Promise)
              c.push(
                m.then((h) => {
                  if (h.issues.length) n.issues.push(...E$e(f, h.issues));
                  n.value[_] = h.value;
                })
              );
            else {
              if (m.issues.length) n.issues.push(...E$e(f, m.issues));
              n.value[_] = m.value;
            }
          }
        let p;
        for (let f in s)
          if (!l.has(f))
            if (t.mode === "loose") {
              if (f === "__proto__") continue;
              n.value[f] = s[f];
            } else ((p = p ?? []), p.push(f));
        if (p && p.length > 0)
          n.issues.push({ code: "unrecognized_keys", input: s, inst: e, keys: p, continue: !0 });
      } else {
        n.value = r ? r.alloc(e, n, {}, i) : {};
        let l;
        for (let p of Reflect.ownKeys(s)) {
          if (p === "__proto__") continue;
          if (!Object.prototype.propertyIsEnumerable.call(s, p)) continue;
          let f = t.keyType._zod.run({ value: p, issues: [] }, i);
          if (f instanceof Promise)
            throw Error("Async schemas not supported in object keys currently");
          if (typeof p === "string" && V.test(p) && f.issues.length) {
            let h = t.keyType._zod.run({ value: Number(p), issues: [] }, i);
            if (h instanceof Promise)
              throw Error("Async schemas not supported in object keys currently");
            if (h.issues.length === 0) f = h;
          }
          if (f.issues.length) {
            if (t.mode === "loose") n.value[p] = s[p];
            else if (a) ((l = l ?? []), l.push(p));
            else
              n.issues.push({
                code: "invalid_key",
                origin: "record",
                issues: f.issues.map((h) => O4e(h, i, jZ())),
                input: p,
                path: [p],
                inst: e
              });
            continue;
          }
          let _ = f.value;
          if (_ === "__proto__") continue;
          let m = t.valueType._zod.run({ value: s[p], issues: [] }, i);
          if (m instanceof Promise)
            c.push(
              m.then((h) => {
                if (h.issues.length) n.issues.push(...E$e(p, h.issues));
                n.value[_] = h.value;
              })
            );
          else {
            if (m.issues.length) n.issues.push(...E$e(p, m.issues));
            n.value[_] = m.value;
          }
        }
        if (l && l.length > 0)
          n.issues.push({ code: "unrecognized_keys", input: s, inst: e, keys: l, continue: !0 });
      }
      if (c.length) return Promise.all(c).then(() => n);
      return n;
    }));
});
var rn = Cr("$ZodEnum", (e, t) => {
    dk.init(e, t);
    let r = xar(t.entries),
      n = new Set(r);
    ((e._zod.values = n),
      jw(e, "pattern", (i) => {
        let s = xar(i.def.entries).filter((c) => Nci.has(typeof c));
        return new RegExp(
          s.length ? `^(${s.map((c) => mAt(c.toString())).join("|")})$` : "^[^\\s\\S]$"
        );
      }),
      (e._zod.parse = (i, s) => {
        let c = i.value;
        if (n.has(c)) return i;
        return (i.issues.push({ code: "invalid_value", values: r, input: c, inst: e }), i);
      }));
  }),
  on = Cr("$ZodLiteral", (e, t) => {
    dk.init(e, t);
    let r = new Set(t.values);
    ((e._zod.values = r),
      jw(e, "pattern", (n) => {
        let i = n.def.values;
        return new RegExp(
          i.length
            ? `^(${i.map((s) => (typeof s === "string" ? mAt(s) : s ? mAt(s.toString()) : String(s))).join("|")})$`
            : "^[^\\s\\S]$"
        );
      }),
      (e._zod.parse = (n, i) => {
        let s = n.value;
        if (r.has(s)) return n;
        return (n.issues.push({ code: "invalid_value", values: t.values, input: s, inst: e }), n);
      }));
  });
var nn = Cr("$ZodTransform", (e, t) => {
  (dk.init(e, t),
    (e._zod.optin = "optional"),
    BZ.memoizer?.guard(e),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") throw new Mar(e.constructor.name);
      let i = t.transform(r.value, r);
      if (n.async)
        return (i instanceof Promise ? i : Promise.resolve(i)).then((c) => ((r.value = c), r));
      if (i instanceof Promise) throw new M4e();
      return ((r.value = i), r);
    }));
});
function io(e, t) {
  return ((e.value = t.issues.length ? void 0 : t.value), e);
}
var Ve = Cr("$ZodOptional", (e, t) => {
    (dk.init(e, t),
      jw(e, "optin", (r) =>
        r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"
      ),
      (e._zod.optout = "optional"),
      jw(e, "values", (r) => {
        let n = r.def.innerType._zod.values;
        return n ? new Set([...n, void 0]) : void 0;
      }),
      jw(e, "pattern", (r) => {
        let n = r.def.innerType._zod.pattern;
        return n ? new RegExp(`^(${EEn(n.source)})?$`) : void 0;
      }),
      (e._zod.parse = (r, n) => {
        if (r.value === void 0) {
          if (t.innerType._zod.optin !== "defaulted") return r;
          let i = t.innerType._zod.run({ value: r.value, issues: [] }, n);
          if (i instanceof Promise) return i.then((s) => io(r, s));
          return io(r, i);
        }
        return t.innerType._zod.run(r, n);
      }));
  }),
  sn = Cr("$ZodExactOptional", (e, t) => {
    (Ve.init(e, t),
      jw(e, "values", (r) => r.def.innerType._zod.values),
      jw(e, "pattern", (r) => r.def.innerType._zod.pattern),
      (e._zod.parse = (r, n) => t.innerType._zod.run(r, n)));
  }),
  cn = Cr("$ZodNullable", (e, t) => {
    (dk.init(e, t),
      jw(e, "optin", (r) => r.def.innerType._zod.optin),
      jw(e, "optout", (r) => r.def.innerType._zod.optout),
      jw(e, "pattern", (r) => {
        let n = r.def.innerType._zod.pattern;
        return n ? new RegExp(`^(${EEn(n.source)}|null)$`) : void 0;
      }),
      jw(e, "values", (r) =>
        r.def.innerType._zod.values ? new Set([...r.def.innerType._zod.values, null]) : void 0
      ),
      (e._zod.parse = (r, n) => {
        if (r.value === null) return r;
        return t.innerType._zod.run(r, n);
      }));
  }),
  un = Cr("$ZodDefault", (e, t) => {
    (dk.init(e, t),
      (e._zod.optin = "defaulted"),
      jw(e, "values", (r) => r.def.innerType._zod.values),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") return t.innerType._zod.run(r, n);
        if (r.value === void 0) return ((r.value = t.defaultValue), r);
        let i = t.innerType._zod.run(r, n);
        if (i instanceof Promise) return i.then((s) => so(s, t));
        return so(i, t);
      }));
  });
function so(e, t) {
  if (e.value === void 0) e.value = t.defaultValue;
  return e;
}
var an = Cr("$ZodPrefault", (e, t) => {
    (dk.init(e, t),
      (e._zod.optin = "defaulted"),
      jw(e, "values", (r) => r.def.innerType._zod.values),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") return t.innerType._zod.run(r, n);
        if (r.value === void 0) r.value = t.defaultValue;
        return t.innerType._zod.run(r, n);
      }));
  }),
  ln = Cr("$ZodNonOptional", (e, t) => {
    (dk.init(e, t),
      jw(e, "values", (r) => {
        let n = r.def.innerType._zod.values;
        return n ? new Set([...n].filter((i) => i !== void 0)) : void 0;
      }),
      (e._zod.parse = (r, n) => {
        let i = t.innerType._zod.run(r, n);
        if (i instanceof Promise) return i.then((s) => co(s, e));
        return co(i, e);
      }));
  });
function co(e, t) {
  if (!e.issues.length && e.value === void 0)
    e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: t });
  return e;
}
function uo(e, t, r, n) {
  if (!t.issues.length) {
    if (((e.value = t.value), t.memo)) e.memo = !0;
    return e;
  }
  return (
    (e.value = r.catchValue({
      ...t,
      value: e.value,
      error: { issues: t.issues.map((i) => O4e(i, n, jZ())) },
      input: e.value
    })),
    e
  );
}
var pn = Cr("$ZodCatch", (e, t) => {
  (dk.init(e, t),
    jw(e, "optin", (r) => (r.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional")),
    jw(e, "optout", (r) => r.def.innerType._zod.optout),
    jw(e, "values", (r) => r.def.innerType._zod.values),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") return t.innerType._zod.run(r, n);
      let i = t.innerType._zod.run({ value: r.value, issues: [] }, n);
      if (i instanceof Promise) return i.then((s) => uo(r, s, t, n));
      return uo(r, i, t, n);
    }));
});
var Ke = Cr("$ZodPipe", (e, t) => {
  (dk.init(e, t),
    jw(e, "values", (r) => r.def.in._zod.values),
    jw(e, "optin", (r) => r.def.in._zod.optin),
    jw(e, "optout", (r) => r.def.out._zod.optout),
    jw(e, "propValues", (r) => r.def.in._zod.propValues),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") {
        let s = t.out._zod.run(r, n);
        if (s instanceof Promise) return s.then((c) => pe(c, t.in, n));
        return pe(s, t.in, n);
      }
      let i = t.in._zod.run(r, n);
      if (i instanceof Promise) return i.then((s) => pe(s, t.out, n));
      return pe(i, t.out, n);
    }));
});
function pe(e, t, r) {
  if (e.issues.some((n) => n.code !== "unrecognized_keys")) return ((e.aborted = !0), e);
  return t._zod.run({ value: e.value, issues: e.issues }, r);
}
var fn = Cr("$ZodPreprocess", (e, t) => {
    Ke.init(e, t);
  }),
  dn = Cr("$ZodReadonly", (e, t) => {
    (dk.init(e, t),
      jw(e, "propValues", (r) => r.def.innerType._zod.propValues),
      jw(e, "values", (r) => r.def.innerType._zod.values),
      jw(e, "optin", (r) => r.def.innerType?._zod?.optin),
      jw(e, "optout", (r) => r.def.innerType?._zod?.optout),
      (e._zod.parse = (r, n) => {
        if (n.direction === "backward") return t.innerType._zod.run(r, n);
        let i = t.innerType._zod.run(r, n);
        if (i instanceof Promise) return i.then(ao);
        return ao(i);
      }));
  });
function ao(e) {
  if (!e.memo) e.value = Object.freeze(e.value);
  return e;
}
var V3r = Cr("$ZodLazy", (e, t) => {
    (dk.init(e, t),
      kEn(e._zod, "innerType", () => {
        let r = t;
        if (!r._cachedInner) r._cachedInner = t.getter();
        return r._cachedInner;
      }),
      jw(e, "pattern", (r) => r.innerType?._zod?.pattern),
      jw(e, "propValues", (r) => r.innerType?._zod?.propValues),
      jw(e, "optin", (r) => r.innerType?._zod?.optin ?? void 0),
      jw(e, "optout", (r) => r.innerType?._zod?.optout ?? void 0),
      (e._zod.parse = (r, n) => e._zod.innerType._zod.run(r, n)));
  }),
  mn = Cr("$ZodCustom", (e, t) => {
    (i2.init(e, t),
      dk.init(e, t),
      (e._zod.parse = (r, n) => r),
      (e._zod.check = (r) => {
        let n = r.value,
          i = t.fn(n);
        if (i instanceof Promise) return i.then((s) => lo(s, r, n, e));
        lo(i, r, n, e);
        return;
      }));
  });
function lo(e, t, r, n) {
  if (!e) {
    let i = {
      code: "custom",
      input: r,
      inst: n,
      path: [...(n._zod.def.path ?? [])],
      continue: !n._zod.def.abort
    };
    if (n._zod.def.params) i.params = n._zod.def.params;
    t.issues.push(y4t(i));
  }
}
function po(e, t, r) {
  if (e.issues.length) t.issues.push(...E$e(r, e.issues));
}
var Ps = Cr(
  "$ZodProperties",
  (e, t) => {
    (dk.init(e, t), i2.init(e, t));
    let r = BZ.memoizer;
    r?.attach(e);
    let n,
      i = (s, c) => {
        n ?? (n = Reflect.ownKeys(t.shape).map((p) => [p, t.shape[p]]));
        let a = s.value,
          l;
        for (let [p, f] of n) {
          let d = f._zod.run({ value: a[p], issues: [] }, c);
          if (d instanceof Promise) (l ?? (l = []), l.push(d.then((_) => po(_, s, p))));
          else po(d, s, p);
        }
        if (l)
          return Promise.all(l).then(() => {
            return;
          });
        return;
      };
    ((e._zod.parse = (s, c) => {
      let a = s.value;
      if (a === null || (typeof a !== "object" && typeof a !== "function"))
        return (s.issues.push({ expected: "object", code: "invalid_type", input: a, inst: e }), s);
      if (c.direction === "backward") c = { ...c, direction: "forward" };
      if (r) r.alloc(e, s, a, c);
      let l = i(s, c);
      return l instanceof Promise ? l.then(() => s) : s;
    }),
      (e._zod.check = (s) => {
        if (s.value == null) {
          s.issues.push({ expected: "object", code: "invalid_type", input: s.value, inst: e });
          return;
        }
        return i(s, {});
      }));
  },
  {
    *[Symbol.iterator]() {
      yield this;
    }
  }
);
class _n extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform");
    this.name = "ZodCyclicError";
  }
}
var Ge = "~memo",
  hn = [];
function gn(e) {
  return e !== null && (typeof e === "object" || typeof e === "function");
}
function We(e) {
  return e.map((t) => (t.path ? { ...t, path: t.path.slice() } : { ...t }));
}
var xn = new WeakMap(),
  G = 0,
  xe = 1,
  q = 2;
function ve(e, t, r) {
  let n = xn.get(e);
  if (n !== void 0) return n ? q : G;
  if (t.has(e)) return q;
  t.add(e);
  let i = G,
    s = (f) => {
      if (i !== q && f?._zod) {
        let d = ve(f, t, r);
        if (d > i) i = d;
      }
    },
    c = (f, d) => {
      let _ = G;
      for (let m of Reflect.ownKeys(f)) {
        let h = Object.getOwnPropertyDescriptor(f, m);
        if (d && !h.enumerable) continue;
        let g = h.get ? xe : h.value?._zod ? ve(h.value, t, r) : G;
        if (g > _) _ = g;
      }
      return _;
    },
    a = (f) => {
      if (f > i) i = f;
    },
    l = e._zod.def,
    p = l.type;
  switch (p) {
    case "object": {
      let f = Oar(l);
      (a(f ? c(f, !0) : xe), s(l.catchall));
      break;
    }
    case "properties":
      a(c(l.shape, !1));
      break;
    case "array":
      s(l.element);
      break;
    case "tuple":
      for (let f of l.items) s(f);
      s(l.rest);
      break;
    case "record":
    case "map":
      (s(l.keyType), s(l.valueType));
      break;
    case "set":
      s(l.valueType);
      break;
    case "union":
      for (let f of l.options) s(f);
      break;
    case "intersection":
      (s(l.left), s(l.right));
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      s(l.innerType);
      break;
    case "pipe":
      (s(l.in), s(l.out));
      break;
    case "function":
      (s(l.input), s(l.output));
      break;
    case "lazy": {
      let f = l._cachedInner ?? (r ? e._zod.innerType : void 0);
      a(f ? ve(f, t, !1) : xe);
      break;
    }
    case "template_literal":
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (let f in l) {
        let d = Object.getOwnPropertyDescriptor(l, f);
        if (!d || d.get) continue;
        let _ = d.value;
        if (!_ || typeof _ !== "object") continue;
        if (_._zod) s(_);
        else if (Array.isArray(_)) for (let m of _) s(m);
      }
  }
  return (t.delete(e), Ss(e, i));
}
function Ss(e, t) {
  if (t !== xe) xn.set(e, t === q);
  return t;
}
function Is(e, t) {
  let r = e.buckets.get(t);
  if (!r) ((r = new WeakMap()), e.buckets.set(t, r));
  return r;
}
var _e,
  ge = [],
  Os = {
    alloc(e, t, r) {
      let n = _e;
      if (!n) return r;
      _e = void 0;
      let i = { value: r, issues: null };
      return (n.set(t.value, i), ge.push(i), r);
    },
    guard(e) {
      var t;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          let r = e._zod.parse,
            n = (i, s) => {
              if (s.direction !== "backward" && As(s, i.value)) throw new _n();
              return r(i, s);
            };
          if (((e._zod.parse = n), e._zod.run === r)) e._zod.run = n;
        }));
    },
    attach(e) {
      var t;
      let r,
        n = !1,
        i,
        s;
      ((t = e._zod).deferred ?? (t.deferred = []),
        e._zod.deferred.push(() => {
          let c = e._zod.parse,
            a = (l, p) => {
              if (r === void 0) {
                let y = ve(e, new Set(), !1);
                if (y === G) {
                  if (((e._zod.parse = c), e._zod.run === a)) e._zod.run = c;
                  return c(l, p);
                }
                if (y === q || n) r = !0;
                else n = !0;
              }
              let f = l.value;
              if (!gn(f)) return c(l, p);
              let d = p[Ge];
              if (!d) ((d = { buckets: new WeakMap(), backEdges: void 0 }), (p[Ge] = d));
              let _;
              if (i === p) _ = s;
              else ((_ = Is(d, e)), (i = p), (s = _));
              let m = _.get(f);
              if (m) {
                if (((l.value = m.value), m.issues)) {
                  if (m.issues.length) l.issues.push(...We(m.issues));
                } else
                  ((l.memo = !0),
                    d.backEdges ?? (d.backEdges = new WeakSet()),
                    d.backEdges.add(m.value));
                return l;
              }
              _e = _;
              let h = ge.length,
                g = c(l, p);
              _e = void 0;
              let x = ge.length > h ? ge.pop() : void 0;
              if (g instanceof Promise)
                return g.then((y) => {
                  if (x) x.issues = y.issues.length ? We(y.issues) : hn;
                  return y;
                });
              if (x) x.issues = g.issues.length ? We(g.issues) : hn;
              return g;
            };
          if (((e._zod.parse = a), e._zod.run === c)) e._zod.run = a;
        }));
    }
  };
function vn() {
  return Os;
}
function As(e, t) {
  let r = e[Ge]?.backEdges;
  return r !== void 0 && gn(t) && r.has(t);
}
var Es = () => {
  let e = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function t(s) {
    return e[s] ?? null;
  }
  let r = {
      regex: "input",
      email: "email address",
      url: "URL",
      emoji: "emoji",
      uuid: "UUID",
      uuidv4: "UUIDv4",
      uuidv6: "UUIDv6",
      nanoid: "nanoid",
      guid: "GUID",
      cuid: "cuid",
      cuid2: "cuid2",
      ulid: "ULID",
      xid: "XID",
      ksuid: "KSUID",
      datetime: "ISO datetime",
      date: "ISO date",
      time: "ISO time",
      duration: "ISO duration",
      ipv4: "IPv4 address",
      ipv6: "IPv6 address",
      mac: "MAC address",
      cidrv4: "IPv4 range",
      cidrv6: "IPv6 range",
      base64: "base64-encoded string",
      base64url: "base64url-encoded string",
      json_string: "JSON string",
      e164: "E.164 number",
      credit_card: "credit card number",
      iban: "IBAN",
      jwt: "JWT",
      template_literal: "input"
    },
    n = { nan: "NaN" };
  function i(s, c) {
    if (s === "number" && typeof c === "number" && !Number.isFinite(c)) return String(c);
    return n[s] ?? s;
  }
  return (s) => {
    switch (s.code) {
      case "invalid_type": {
        let c = i(s.expected),
          a = Bci(s.input),
          l = i(a, s.input);
        return `Invalid input: expected ${c}, received ${l}`;
      }
      case "invalid_value":
        if (s.values.length === 1) return `Invalid input: expected ${p7o(s.values[0])}`;
        return `Invalid option: expected one of ${c7o(s.values, "|")}`;
      case "too_big": {
        let c = s.exact ? "exactly " : s.inclusive ? "<=" : "<",
          a = t(s.origin);
        if (a)
          return `Too big: expected ${s.origin ?? "value"} to have ${c}${s.maximum.toString()} ${a.unit ?? "elements"}`;
        return `Too big: expected ${s.origin ?? "value"} to be ${c}${s.maximum.toString()}`;
      }
      case "too_small": {
        let c = s.exact ? "exactly " : s.inclusive ? ">=" : ">",
          a = t(s.origin);
        if (a)
          return `Too small: expected ${s.origin} to have ${c}${s.minimum.toString()} ${a.unit}`;
        return `Too small: expected ${s.origin} to be ${c}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        let c = s;
        if (c.format === "starts_with") return `Invalid string: must start with "${c.prefix}"`;
        if (c.format === "ends_with") return `Invalid string: must end with "${c.suffix}"`;
        if (c.format === "includes") return `Invalid string: must include "${c.includes}"`;
        if (c.format === "regex") return `Invalid string: must match pattern ${c.pattern}`;
        return `Invalid ${r[c.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${c7o(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        if (s.options && Array.isArray(s.options) && s.options.length > 0)
          return `Invalid discriminator value. Expected ${s.options.map((a) => `'${a}'`).join(" | ")}`;
        if (s.inclusive === !1) return "Invalid input: more than one option matched";
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function qe() {
  return { localeError: Es() };
}
var yn;
class $n {
  constructor() {
    ((this._map = new WeakMap()), (this._idmap = new Map()));
  }
  add(e, ...t) {
    let r = t[0];
    if ((this._map.set(e, r), r && typeof r === "object" && "id" in r)) this._idmap.set(r.id, e);
    return this;
  }
  clear() {
    return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
  }
  remove(e) {
    let t = this._map.get(e);
    if (t && typeof t === "object" && "id" in t) this._idmap.delete(t.id);
    return (this._map.delete(e), this);
  }
  get(e) {
    let t = e._zod.parent;
    if (t) {
      let r = { ...(this.get(t) ?? {}) };
      delete r.id;
      let n = { ...r, ...this._map.get(e) };
      return Object.keys(n).length ? n : void 0;
    }
    return this._map.get(e);
  }
  has(e) {
    return this._map.has(e);
  }
}
function Ts() {
  return new $n();
}
(yn = globalThis).__zod_globalRegistry ?? (yn.__zod_globalRegistry = Ts());
var rst = globalThis.__zod_globalRegistry;
function zn(e, t) {
  return new e({ type: "string", ...yd(t) });
}
function Tci(e, t) {
  return new e({ type: "string", coerce: !0, ...yd(t) });
}
function Ye(e, t) {
  return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...yd(t) });
}
function bn(e, t) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...yd(t) });
}
function Xe(e, t) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...yd(t) });
}
function kn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...yd(t)
  });
}
function Zn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...yd(t)
  });
}
function wn(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...yd(t)
  });
}
function He(e, t) {
  return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...yd(t) });
}
function Pn(e, t) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...yd(t) });
}
function Sn(e, t) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...yd(t) });
}
function In(e, t) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...yd(t) });
}
function On(e, t) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...yd(t) });
}
function An(e, t) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...yd(t) });
}
function En(e, t) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...yd(t) });
}
function Tn(e, t) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...yd(t) });
}
function Nn(e, t) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...yd(t) });
}
function Cn(e, t) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...yd(t) });
}
function Rn(e, t) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...yd(t) });
}
function Dn(e, t) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...yd(t) });
}
function Qe(e, t) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...yd(t) });
}
function jn(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...yd(t)
  });
}
function Ln(e, t) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...yd(t) });
}
function Fn(e, t) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...yd(t) });
}
var Aci = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function q3r(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...yd(t)
  });
}
function Y3r(e, t) {
  return new e({ type: "string", format: "date", check: "string_format", ...yd(t) });
}
function Mn(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...yd(t)
  });
}
function Un(e, t) {
  return new e({ type: "string", format: "duration", check: "string_format", ...yd(t) });
}
function Jn(e, t) {
  return new e({ type: "number", checks: [], ...yd(t) });
}
function Cci(e, t) {
  return new e({ type: "number", coerce: !0, checks: [], ...yd(t) });
}
function Bn(e, t) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...yd(t) });
}
function Vn(e, t) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...yd(t) });
}
function Kn(e, t) {
  return new e({ type: "boolean", ...yd(t) });
}
function Rci(e, t) {
  return new e({ type: "boolean", coerce: !0, ...yd(t) });
}
function Wn(e, t) {
  return new e({ type: "undefined", ...yd(t) });
}
function Gn(e, t) {
  return new e({ type: "null", ...yd(t) });
}
function qn(e) {
  return new e({ type: "any" });
}
function Yn(e) {
  return new e({ type: "unknown" });
}
function Xn(e, t) {
  return new e({ type: "never", ...yd(t) });
}
function ye(e, t) {
  return new Re({ check: "less_than", ...yd(t), value: e, inclusive: !1 });
}
function Y(e, t) {
  return new Re({ check: "less_than", ...yd(t), value: e, inclusive: !0 });
}
function ze(e, t) {
  return new De({ check: "greater_than", ...yd(t), value: e, inclusive: !1 });
}
function X(e, t) {
  return new De({ check: "greater_than", ...yd(t), value: e, inclusive: !0 });
}
function be(e, t) {
  return new jr({ check: "multiple_of", ...yd(t), value: e });
}
function SEn(e, t) {
  return new Fr({ check: "max_length", ...yd(t), maximum: e });
}
function R(e, t) {
  return new Mr({ check: "min_length", ...yd(t), minimum: e });
}
function ke(e, t) {
  return new Ur({ check: "length_equals", ...yd(t), length: e });
}
function et(e, t) {
  return new Jr({ check: "string_format", format: "regex", ...yd(t), pattern: e });
}
function tt(e) {
  return new Br({ check: "string_format", format: "lowercase", ...yd(e) });
}
function rt(e) {
  return new Vr({ check: "string_format", format: "uppercase", ...yd(e) });
}
function ot(e, t) {
  return new Kr({ check: "string_format", format: "includes", ...yd(t), includes: e });
}
function nt(e, t) {
  return new Wr({ check: "string_format", format: "starts_with", ...yd(t), prefix: e });
}
function it(e, t) {
  return new qr({ check: "string_format", format: "ends_with", ...yd(t), suffix: e });
}
function C(e) {
  return new Yr({ check: "overwrite", tx: e });
}
function st(e) {
  return C((t) => t.normalize(e));
}
function ct() {
  return C((e) => e.trim());
}
function ut() {
  return C((e) => e.toLowerCase());
}
function at() {
  return C((e) => e.toUpperCase());
}
function lt() {
  return C((e) => Hci(e));
}
function Hn(e, t, r) {
  return new e({ type: "array", element: t, ...yd(r) });
}
function Qn(e, t, r) {
  let n = yd(r);
  return (n.abort ?? (n.abort = !0), new e({ type: "custom", check: "custom", fn: t, ...n }));
}
function ei(e, t, r) {
  return new e({ type: "custom", check: "custom", fn: t, ...yd(r) });
}
function ti(e, t) {
  let r = Ns(
    (n) => (
      (n.addIssue = (i) => {
        if (typeof i === "string") n.issues.push(y4t(i, n.value, r._zod.def));
        else {
          let s = i;
          if (s.fatal) s.continue = !1;
          if ((s.code ?? (s.code = "custom"), !("input" in s))) s.input = n.value;
          (s.inst ?? (s.inst = r),
            s.continue ?? (s.continue = !r._zod.def.abort),
            n.issues.push(y4t(s)));
        }
      }),
      e(n.value, n)
    ),
    t
  );
  return r;
}
function Ns(e, t) {
  let r = new i2({ check: "custom", ...yd(t) });
  return ((r._zod.check = e), r);
}
function H(e, ...t) {
  for (let r of t)
    for (let n of Reflect.ownKeys(r))
      if (Object.prototype.propertyIsEnumerable.call(r, n)) Pfe(e, n, r[n]);
  return e;
}
function ee(e) {
  let t = e?.target ?? "draft-2020-12";
  if (t === "draft-4") t = "draft-04";
  if (t === "draft-7") t = "draft-07";
  return {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? rst,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {}),
    io: e?.io ?? "output",
    counter: 0,
    seen: new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: e?.external ?? void 0
  };
}
function Z(e, t, r, n, i) {
  let s =
    typeof t.unrepresentable === "function"
      ? t.unrepresentable({ zodSchema: e, path: n.path, message: i })
      : t.unrepresentable;
  if (s === "any") return !1;
  if (s === void 0 || s === "throw") throw Error(i);
  return (Object.assign(r, s), !0);
}
function fC(e, t, r = { path: [], schemaPath: [] }) {
  var n;
  let i = e._zod.def,
    s = t.seen.get(e);
  if (s) {
    if ((s.count++, r.schemaPath.includes(e))) s.cycle = r.path;
    return s.schema;
  }
  let c = { schema: {}, count: 1, cycle: void 0, path: r.path };
  (t.seen.set(e, c), (t.sharedDefsExtractedFor = void 0), (t.sharedEmitDoneFor = void 0));
  let a = e._zod.toJSONSchema?.();
  if (a) c.schema = a;
  else {
    let f = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, c.schema, f);
    else {
      let _ = c.schema,
        m = t.processors[i.type];
      if (!m) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      m(e, t, _, f);
    }
    let d = e._zod.parent;
    if (d) {
      if (!c.ref) c.ref = d;
      (fC(d, t, f), (t.seen.get(d).isParent = !0));
    }
  }
  let l = t.metadataRegistry.get(e);
  if (l) H(c.schema, l);
  if (t.io === "input" && P(e)) (delete c.schema.examples, delete c.schema.default);
  if (t.io === "input" && "_prefault" in c.schema)
    (n = c.schema).default ?? (n.default = c.schema._prefault);
  return (delete c.schema._prefault, t.seen.get(e).schema);
}
function ri(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function te(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  if (e.external && e.sharedDefsExtractedFor === e.external) return;
  let n = new Map();
  for (let c of e.seen.entries()) {
    let a = e.metadataRegistry.get(c[0])?.id;
    if (a) {
      let l = n.get(a);
      if (l && l !== c[0])
        throw Error(
          `Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`
        );
      n.set(a, c[0]);
    }
  }
  let i = (c) => {
      let a = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        let d = e.external.registry.get(c[0])?.id,
          _ = e.external.uri ?? ((h) => h);
        if (d) return { ref: _(d) };
        let m = c[1].defId ?? c[1].schema.id ?? `schema${e.counter++}`;
        return ((c[1].defId = m), { defId: m, ref: `${_("__shared")}#/${a}/${ri(m)}` });
      }
      let l = "#",
        p = `${l}/${a}/`;
      if (c[1] === r && !c[1].schema.id) return { ref: l };
      let f = c[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: f, ref: p + ri(f) };
    },
    s = (c) => {
      if (c[1].schema.$ref) return;
      let a = c[1],
        { ref: l, defId: p } = i(c);
      if (((a.def = { ...a.schema }), p)) a.defId = p;
      let f = a.schema;
      for (let d in f) delete f[d];
      f.$ref = l;
    };
  if (e.cycles === "throw")
    for (let c of e.seen.entries()) {
      let a = c[1];
      if (a.cycle)
        throw Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let c of e.seen.entries()) {
    let a = c[1];
    if (t === c[0]) {
      s(c);
      continue;
    }
    if (e.external) {
      let p = e.external.registry.get(c[0])?.id;
      if (t !== c[0] && p) {
        s(c);
        continue;
      }
    }
    if (e.metadataRegistry.get(c[0])?.id) {
      s(c);
      continue;
    }
    if (a.cycle) {
      s(c);
      continue;
    }
    if (a.count > 1) {
      if (e.reused === "ref") s(c);
    }
  }
  if (e.external) e.sharedDefsExtractedFor = e.external;
}
function ii(e) {
  let t = e.anyOf;
  if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
  let r = [];
  for (let n of t) {
    if (!n || typeof n !== "object") return;
    ii(n);
    let i = Object.keys(n);
    if (i.length !== 1 || i[0] !== "type") return;
    let s = n.type;
    for (let c of Array.isArray(s) ? s : [s]) {
      if (typeof c !== "string") return;
      if (!r.includes(c)) r.push(c);
    }
  }
  (delete e.anyOf, (e.type = r.length === 1 ? r[0] : r));
}
var si = new Set(["type", "properties", "required", "additionalProperties"]),
  oi = ["oneOf", "anyOf"];
function ni(e) {
  let t = e.additionalProperties;
  if (t === void 0 || t === !1 || typeof t !== "object" || t === null) return null;
  return Object.keys(t).length ? t : null;
}
function pt(e) {
  let t = [];
  for (let s of e) {
    if (typeof s !== "object" || s.type !== "object") return null;
    for (let c in s) if (!si.has(c)) return null;
    t.push(s);
  }
  let r = {},
    n = new Set();
  for (let s of t) {
    for (let c in s.properties) {
      if (Object.prototype.hasOwnProperty.call(r, c)) continue;
      let a = [];
      for (let p of t) {
        let f = p.properties?.[c] ?? ni(p);
        if (f === null || f === void 0) continue;
        if (!a.some((d) => JSON.stringify(d) === JSON.stringify(f))) a.push(f);
      }
      let l = a.length === 1 ? a[0] : (pt(a) ?? { allOf: a });
      Pfe(r, c, l);
    }
    for (let c of s.required ?? []) n.add(c);
  }
  let i = { type: "object", properties: r };
  if (n.size) i.required = [...n];
  if (t.every((s) => s.additionalProperties === !1)) i.additionalProperties = !1;
  else {
    let s = [];
    for (let c of t) {
      let a = ni(c);
      if (a && !s.some((l) => JSON.stringify(l) === JSON.stringify(a))) s.push(a);
    }
    if (s.length === 1) i.additionalProperties = s[0];
    else if (s.length > 1) i.additionalProperties = { allOf: s };
  }
  return i;
}
function Cs(e) {
  let t = e.allOf;
  if (!Array.isArray(t) || t.length < 2) return;
  for (let i of si) if (i in e) return;
  let r = t.filter((i) => oi.some((s) => Array.isArray(i[s]))),
    n = null;
  if (!r.length) n = pt(t);
  else {
    let i = r[0],
      s = oi.find((l) => Array.isArray(i[l]));
    if (Object.keys(i).length !== 1) return;
    let c = t.filter((l) => l !== i),
      a = i[s].map((l) => pt([...c, l]));
    if (a.some((l) => !l)) return;
    n = { [s]: a };
  }
  if (!n) return;
  (delete e.allOf, H(e, n));
}
function re(e, t) {
  let r = e.seen.get(t);
  if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
  let n = (a) => {
    let l = e.seen.get(a);
    if (l.ref === null) return;
    let p = l.def ?? l.schema,
      f = { ...p },
      d = l.ref;
    if (((l.ref = null), d)) {
      n(d);
      let m = e.seen.get(d),
        h = m.schema;
      if (
        h.$ref &&
        (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0")
      )
        ((p.allOf = p.allOf ?? []), p.allOf.push(h));
      else H(p, h);
      if ((H(p, f), a._zod.parent === d))
        for (let x in p) {
          if (x === "$ref" || x === "allOf") continue;
          if (!(x in f)) delete p[x];
        }
      if (h.$ref && m.def)
        for (let x in p) {
          if (x === "$ref" || x === "allOf") continue;
          if (x in m.def && JSON.stringify(p[x]) === JSON.stringify(m.def[x])) delete p[x];
        }
    }
    let _ = a._zod.parent;
    if (_ && _ !== d) {
      n(_);
      let m = e.seen.get(_);
      if (m?.schema.$ref) {
        if (((p.$ref = m.schema.$ref), m.def))
          for (let h in p) {
            if (h === "$ref" || h === "allOf") continue;
            if (h in m.def && JSON.stringify(p[h]) === JSON.stringify(m.def[h])) delete p[h];
          }
      }
    }
    e.override({ zodSchema: a, jsonSchema: p, path: l.path ?? [] });
  };
  if (!e.external || e.sharedEmitDoneFor !== e.external) {
    for (let a of [...e.seen.entries()].reverse()) n(a[0]);
    if (e.target !== "openapi-3.0") for (let a of e.seen.entries()) ii(a[1].def ?? a[1].schema);
    for (let a of e.deferred) a();
    if (e.intersections.length) {
      let a = new Map();
      for (let l of e.seen.values())
        for (let p of [l.schema, l.def]) {
          let f = p?.allOf;
          if (!Array.isArray(f)) continue;
          let d = a.get(f);
          if (d) d.push(p);
          else a.set(f, [p]);
        }
      for (let l of e.intersections) for (let p of a.get(l) ?? []) Cs(p);
    }
  }
  let i = {};
  if (e.target === "draft-2020-12") i.$schema = "https://json-schema.org/draft/2020-12/schema";
  else if (e.target === "draft-07") i.$schema = "http://json-schema.org/draft-07/schema#";
  else if (e.target === "draft-04") i.$schema = "http://json-schema.org/draft-04/schema#";
  else if (e.target === "openapi-3.0") ;
  if (e.external?.uri) {
    let a = e.external.registry.get(t)?.id;
    if (!a) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(a);
  }
  H(i, r.defId ? r.schema : (r.def ?? r.schema));
  let s = e.metadataRegistry.get(t)?.id;
  if (s !== void 0 && i.id === s) delete i.id;
  let c = e.external?.defs ?? {};
  if (!e.external || e.sharedEmitDoneFor !== e.external)
    for (let a of e.seen.entries()) {
      let l = a[1];
      if (l.def && l.defId) {
        if (l.def.id === l.defId) delete l.def.id;
        Pfe(c, l.defId, l.def);
      }
    }
  if (e.external) e.sharedEmitDoneFor = e.external;
  if (e.external) ;
  else if (Object.keys(c).length > 0)
    if (e.target === "draft-2020-12") i.$defs = c;
    else i.definitions = c;
  try {
    let a = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(a, "~standard", {
        value: {
          ...t["~standard"],
          jsonSchema: { input: Q(t, "input", e.processors), output: Q(t, "output", e.processors) }
        },
        enumerable: !1,
        writable: !1
      }),
      a
    );
  } catch (a) {
    throw Error("Error converting schema to JSON.");
  }
}
function P(e, t) {
  let r = t ?? { seen: new Set() };
  if (r.seen.has(e)) return !1;
  r.seen.add(e);
  let n = e._zod.def;
  if (n.type === "transform") return !0;
  if (n.type === "array") return P(n.element, r);
  if (n.type === "set") return P(n.valueType, r);
  if (n.type === "lazy") return P(n.getter(), r);
  if (
    n.type === "promise" ||
    n.type === "optional" ||
    n.type === "nonoptional" ||
    n.type === "nullable" ||
    n.type === "readonly" ||
    n.type === "default" ||
    n.type === "prefault" ||
    n.type === "catch"
  )
    return P(n.innerType, r);
  if (n.type === "intersection") return P(n.left, r) || P(n.right, r);
  if (n.type === "record" || n.type === "map") return P(n.keyType, r) || P(n.valueType, r);
  if (n.type === "pipe") {
    if (e._zod.traits.has("$ZodCodec")) return !0;
    return P(n.in, r) || P(n.out, r);
  }
  if (n.type === "object") {
    for (let i in n.shape) if (P(n.shape[i], r)) return !0;
    return !1;
  }
  if (n.type === "union") {
    for (let i of n.options) if (P(i, r)) return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (let i of n.items) if (P(i, r)) return !0;
    if (n.rest && P(n.rest, r)) return !0;
    return !1;
  }
  return !1;
}
var ci =
    (e, t = {}) =>
    (r) => {
      let n = ee({ ...r, processors: t });
      return (fC(e, n), te(n, e), re(n, e));
    },
  Q =
    (e, t, r = {}) =>
    (n) => {
      let { libraryOptions: i, target: s } = n ?? {},
        c = ee({ ...(i ?? {}), target: s, io: t, processors: r });
      return (fC(e, c), te(c, e), re(c, e));
    };
var D = (e, t, r) => {
    if (e[t] === void 0 || r > e[t]) e[t] = r;
  },
  j = (e, t, r) => {
    if (e[t] === void 0 || r < e[t]) e[t] = r;
  },
  ui = (e, t) => {
    (D(e, "minimum", t), j(e, "maximum", t));
  },
  di = (e, t) => {
    if ((e.multipleOf ?? (e.multipleOf = []), !e.multipleOf.includes(t))) e.multipleOf.push(t);
  },
  mi = (e, t) => {
    (e.patterns ?? (e.patterns = new Set()), e.patterns.add(t));
  },
  hi = (e, t) => {
    e.mime = e.mime ? e.mime.filter((r) => t.includes(r)) : [...t];
  },
  _i = (e, t) => {
    if (((e.format = t), t.includes("int"))) e.isInt = !0;
  },
  ai = (e, t) => D(e, "minimum", t.minimum),
  li = (e, t) => j(e, "maximum", t.maximum),
  pi = (e) => (t, r) => {
    _i(t, r.format);
    let [n, i] = e[r.format];
    (D(t, "minimum", n), j(t, "maximum", i));
  },
  Rs = {
    greater_than: (e, t) => D(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
    less_than: (e, t) => j(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
    multiple_of: (e, t) => di(e, t.value),
    number_format: pi(Q3r),
    bigint_format: pi(m7o),
    min_length: ai,
    max_length: li,
    length_equals: (e, t) => ui(e, t.length),
    min_size: ai,
    max_size: li,
    size_equals: (e, t) => ui(e, t.size),
    string_format: (e, t) => {
      if ((_i(e, t.format), t.pattern)) mi(e, t.pattern);
      if (t.format === "base64" || t.format === "base64url") e.contentEncoding = t.format;
      if (t.local || t.precision === -1) e.laxFormat = !0;
    },
    mime_type: (e, t) => hi(e, t.mime)
  };
function S(e) {
  let t = {},
    r = e._zod.def,
    n = e._zod.traits.has("$ZodCheck") ? [e, ...(r.checks ?? [])] : (r.checks ?? []);
  for (let s of n) Rs[s._zod.def.check]?.(t, s._zod.def);
  let i = e._zod.bag;
  if (i.minimum !== void 0) D(t, "minimum", i.minimum);
  if (i.exclusiveMinimum !== void 0) D(t, "exclusiveMinimum", i.exclusiveMinimum);
  if (i.maximum !== void 0) j(t, "maximum", i.maximum);
  if (i.exclusiveMaximum !== void 0) j(t, "exclusiveMaximum", i.exclusiveMaximum);
  if (i.multipleOf !== void 0) di(t, i.multipleOf);
  if (i.format !== void 0) {
    if ((t.format ?? (t.format = i.format), i.format.includes("int"))) t.isInt = !0;
  }
  if (i.mime) hi(t, i.mime);
  for (let s of i.patterns ?? []) mi(t, s);
  return t;
}
var Ds = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" },
  js = new Map([
    [Me, br],
    [he, kr]
  ]),
  gi = (e) => js.get(e) ?? e,
  mt = (e, t, r, n) => {
    let i = r;
    i.type = "string";
    let { minimum: s, maximum: c, format: a, patterns: l, contentEncoding: p, laxFormat: f } = S(e);
    if (typeof s === "number") i.minLength = s;
    if (typeof c === "number") i.maxLength = c;
    if (a) {
      if (((i.format = Ds[a] ?? a), i.format === "")) delete i.format;
      if (a === "time" || f) delete i.format;
    }
    if (p) i.contentEncoding = p;
    if (l && l.size > 0) {
      let d = [...l].map(gi);
      if (d.length === 1) i.pattern = d[0].source;
      else if (d.length > 1)
        i.allOf = [
          ...d.map((_) => ({
            ...(t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0"
              ? { type: "string" }
              : {}),
            pattern: _.source
          }))
        ];
    }
  },
  ht = (e, t, r, n) => {
    let i = r,
      {
        minimum: s,
        maximum: c,
        multipleOf: a,
        exclusiveMaximum: l,
        exclusiveMinimum: p,
        isInt: f
      } = S(e);
    i.type = f ? "integer" : "number";
    let d = typeof p === "number" && p >= (s ?? Number.NEGATIVE_INFINITY),
      _ = typeof l === "number" && l <= (c ?? Number.POSITIVE_INFINITY),
      m = t.target === "draft-04" || t.target === "openapi-3.0";
    if (d)
      if (m) ((i.minimum = p), (i.exclusiveMinimum = !0));
      else i.exclusiveMinimum = p;
    else if (typeof s === "number") i.minimum = s;
    if (_)
      if (m) ((i.maximum = l), (i.exclusiveMaximum = !0));
      else i.exclusiveMaximum = l;
    else if (typeof c === "number") i.maximum = c;
    if (a) {
      let h = new Set();
      for (let y of a)
        if (Number.isFinite(y) && y !== 0) h.add(Math.abs(y));
        else Z(e, t, i, n, `A multipleOf divisor of ${y} cannot be represented in JSON Schema`);
      let [g, ...x] = h;
      if (g !== void 0) i.multipleOf = g;
      if (x.length) i.allOf = [...(i.allOf ?? []), ...x.map((y) => ({ multipleOf: y }))];
    }
  },
  _t = (e, t, r, n) => {
    r.type = "boolean";
  },
  xi = (e, t, r, n) => {
    Z(e, t, r, n, "BigInt cannot be represented in JSON Schema");
  },
  vi = (e, t, r, n) => {
    Z(e, t, r, n, "Symbols cannot be represented in JSON Schema");
  },
  gt = (e, t, r, n) => {
    if (t.target === "openapi-3.0") ((r.type = "string"), (r.nullable = !0), (r.enum = [null]));
    else r.type = "null";
  },
  xt = (e, t, r, n) => {
    Z(e, t, r, n, "Undefined cannot be represented in JSON Schema");
  },
  yi = (e, t, r, n) => {
    Z(e, t, r, n, "Void cannot be represented in JSON Schema");
  },
  vt = (e, t, r, n) => {
    r.not = {};
  },
  $t = (e, t, r, n) => {},
  zt = (e, t, r, n) => {},
  $i = (e, t, r, n) => {
    Z(e, t, r, n, "Date cannot be represented in JSON Schema");
  },
  bt = (e, t, r, n) => {
    let i = e._zod.def,
      s = xar(i.entries);
    if (s.length === 0) {
      r.not = {};
      return;
    }
    if (s.every((c) => typeof c === "number")) r.type = "number";
    if (s.every((c) => typeof c === "string")) r.type = "string";
    r.enum = s;
  },
  kt = (e, t, r, n) => {
    let i = e._zod.def;
    if (i.values.length === 0) {
      r.not = {};
      return;
    }
    let s = [];
    for (let c of i.values)
      if (c === void 0) {
        if (Z(e, t, r, n, "Literal `undefined` cannot be represented in JSON Schema")) return;
      } else if (typeof c === "bigint") {
        if (Z(e, t, r, n, "BigInt literals cannot be represented in JSON Schema")) return;
        s.push(Number(c));
      } else s.push(c);
    if (s.length === 0) ;
    else if (s.length === 1) {
      let c = s[0];
      if (
        ((r.type = c === null ? "null" : typeof c),
        t.target === "draft-04" || t.target === "openapi-3.0")
      )
        r.enum = [c];
      else r.const = c;
    } else {
      if (s.every((c) => typeof c === "number")) r.type = "number";
      if (s.every((c) => typeof c === "string")) r.type = "string";
      if (s.every((c) => typeof c === "boolean")) r.type = "boolean";
      if (s.every((c) => c === null)) r.type = "null";
      r.enum = s;
    }
  },
  zi = (e, t, r, n) => {
    Z(e, t, r, n, "NaN cannot be represented in JSON Schema");
  },
  bi = (e, t, r, n) => {
    let i = r,
      s = e._zod.pattern;
    if (!s) throw Error("Pattern not found in template literal");
    ((i.type = "string"), (i.pattern = s.source));
  },
  ki = (e, t, r, n) => {
    let i = r;
    ((i.type = "string"), (i.format = "binary"), (i.contentEncoding = "binary"));
    let { minimum: s, maximum: c, mime: a } = S(e);
    if (s !== void 0) i.minLength = s;
    if (c !== void 0) i.maxLength = c;
    if (!a) return;
    if (a.length === 0) i.not = {};
    else if (a.length === 1) i.contentMediaType = a[0];
    else i.anyOf = a.map((l) => ({ contentMediaType: l }));
  },
  Zi = (e, t, r, n) => {
    r.type = "boolean";
  },
  Zt = (e, t, r, n) => {
    Z(e, t, r, n, "Custom types cannot be represented in JSON Schema");
  },
  wi = (e, t, r, n) => {
    Z(e, t, r, n, "Function types cannot be represented in JSON Schema");
  },
  wt = (e, t, r, n) => {
    Z(e, t, r, n, "Transforms cannot be represented in JSON Schema");
  },
  Pi = (e, t, r, n) => {
    Z(e, t, r, n, "Map cannot be represented in JSON Schema");
  },
  Si = (e, t, r, n) => {
    Z(e, t, r, n, "Set cannot be represented in JSON Schema");
  },
  Pt = (e, t, r, n) => {
    let i = r,
      s = e._zod.def,
      { minimum: c, maximum: a } = S(e);
    if (typeof c === "number") i.minItems = c;
    if (typeof a === "number") i.maxItems = a;
    ((i.type = "array"), (i.items = fC(s.element, t, { ...n, path: [...n.path, "items"] })));
  };
function L(e) {
  let t = e._zod.def;
  if (t.type === "pipe" && t.in._zod.traits.has("$ZodTransform")) return L(t.out);
  if (t.type === "catch") return L(t.innerType);
  return e._zod.optin;
}
var St = (e, t, r, n) => {
    let i = r,
      s = e._zod.def,
      c = s.shape;
    if (
      Object.getOwnPropertySymbols(c).length &&
      Z(e, t, i, n, "Symbol keys cannot be represented in JSON Schema")
    )
      return;
    ((i.type = "object"), (i.properties = {}));
    for (let f in c)
      Pfe(i.properties, f, fC(c[f], t, { ...n, path: [...n.path, "properties", f] }));
    let l = new Set(Object.keys(c)),
      p = new Set(
        [...l].filter((f) => {
          let d = s.shape[f];
          if (t.io === "input") return L(d) === void 0;
          else return d._zod.optout === void 0;
        })
      );
    if (p.size > 0) i.required = Array.from(p);
    if (s.catchall?._zod.def.type === "never") i.additionalProperties = !1;
    else if (!s.catchall) {
      if (t.io === "output") i.additionalProperties = !1;
    } else if (s.catchall)
      i.additionalProperties = fC(s.catchall, t, {
        ...n,
        path: [...n.path, "additionalProperties"]
      });
  },
  Ls = (e, t, r, n) => {
    let i = r,
      s = e._zod.def;
    if (
      Object.getOwnPropertySymbols(s.shape).length &&
      Z(e, t, i, n, "Symbol keys cannot be represented in JSON Schema")
    )
      return;
    if (t.io === "output") {
      for (let a in s.shape)
        if (
          P(s.shape[a]) &&
          Z(
            e,
            t,
            i,
            n,
            `z.properties() returns its input, so the output of a transforming schema at key "${a}" cannot be represented in JSON Schema`
          )
        )
          return;
    }
    ((i.type = "object"), (i.properties = {}));
    for (let a in s.shape)
      Pfe(i.properties, a, fC(s.shape[a], t, { ...n, path: [...n.path, "properties", a] }));
    let c = Object.keys(s.shape).filter((a) => L(s.shape[a]) === void 0);
    if (c.length > 0) i.required = c;
  },
  It = (e, t, r, n) => {
    let i = e._zod.def,
      s = i.inclusive === !1,
      c = i.options.map((a, l) => fC(a, t, { ...n, path: [...n.path, s ? "oneOf" : "anyOf", l] }));
    if (s) r.oneOf = c;
    else r.anyOf = c;
  },
  Ot = (e, t, r, n) => {
    let i = e._zod.def,
      s = fC(i.left, t, { ...n, path: [...n.path, "allOf", 0] }),
      c = fC(i.right, t, { ...n, path: [...n.path, "allOf", 1] }),
      a = (p) => "allOf" in p && Object.keys(p).length === 1,
      l = [...(a(s) ? s.allOf : [s]), ...(a(c) ? c.allOf : [c])];
    ((r.allOf = l), t.intersections.push(l));
  },
  At = (e, t, r, n) => {
    let i = r,
      s = e._zod.def;
    i.type = "array";
    let c = t.target === "draft-2020-12" ? "prefixItems" : "items",
      a =
        t.target === "draft-2020-12"
          ? "items"
          : t.target === "openapi-3.0"
            ? "items"
            : "additionalItems",
      l = s.items.map((g, x) => fC(g, t, { ...n, path: [...n.path, c, x] })),
      p = s.rest
        ? fC(s.rest, t, {
            ...n,
            path: [...n.path, a, ...(t.target === "openapi-3.0" ? [s.items.length] : [])]
          })
        : null,
      f = s.items.length;
    while (f > 0) {
      let g = s.items[f - 1];
      if (!(t.io === "input" ? L(g) !== void 0 : g._zod.optout === "optional")) break;
      f--;
    }
    let d = s.items.length,
      _ = !s.rest;
    if (t.target === "draft-2020-12") {
      if (((i.prefixItems = l), _)) i.items = !1;
      else if (p) i.items = p;
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    } else if (t.target === "openapi-3.0") {
      if (((i.items = { anyOf: l }), p)) i.items.anyOf.push(p);
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    } else {
      if (((i.items = l), _)) i.additionalItems = !1;
      else if (p) i.additionalItems = p;
      if (f > 0) i.minItems = f;
      if (_) i.maxItems = d;
    }
    let { minimum: m, maximum: h } = S(e);
    if (typeof m === "number") i.minItems = m;
    if (typeof h === "number") i.maxItems = h;
  };
function ft(e, t, r) {
  if (t.$ref) {
    if (r.has(t)) return t;
    r.add(t);
    let h = e.get(t)?.def;
    if (!h) return t;
    let g = ft(e, h, r);
    return g === h ? t : g;
  }
  for (let h of ["anyOf", "oneOf"]) {
    let g = t[h];
    if (!Array.isArray(g)) continue;
    let x = g.map((y) => ft(e, y, r));
    if (x.some((y, O) => y !== g[O])) t = { ...t, [h]: x };
  }
  let n = Array.isArray(t.type) ? t.type : [t.type],
    i = !n.includes("string") && n.some((h) => h === "number" || h === "integer"),
    s = t.enum ?? (t.const !== void 0 ? [t.const] : void 0);
  if (!i && !s?.some((h) => typeof h === "number")) return t;
  let {
    minimum: c,
    maximum: a,
    exclusiveMinimum: l,
    exclusiveMaximum: p,
    multipleOf: f,
    format: d,
    id: _,
    ...m
  } = t;
  if (m.enum) m.enum = m.enum.map((h) => (typeof h === "number" ? String(h) : h));
  else if (typeof m.const === "number") m.const = String(m.const);
  if (!i) return m;
  if (((m.type = "string"), !s)) m.pattern = (n.includes("number") ? V : Ne).source;
  return m;
}
var dt = new WeakMap();
function Fs(e) {
  let t = new Map();
  for (let n of e.seen.values()) if (n.def && !t.has(n.schema)) t.set(n.schema, n);
  let r = new Map();
  for (let n of dt.get(e) ?? []) {
    let i = e.seen.get(n),
      s = (i?.def ?? i?.schema)?.propertyNames;
    if (!s || s === !0 || r.has(s)) continue;
    let c = ft(t, s, new Set());
    if (c !== s) r.set(s, c);
  }
  if (!r.size) return;
  for (let n of e.seen.values())
    for (let i of [n.schema, n.def]) {
      let s = i && r.get(i.propertyNames);
      if (s) i.propertyNames = s;
    }
}
var Et = (e, t, r, n) => {
    let i = r,
      s = e._zod.def;
    i.type = "object";
    let c = s.keyType,
      a = S(c).patterns;
    if (s.mode === "loose" && a && a.size > 0) {
      let f = fC(s.valueType, t, { ...n, path: [...n.path, "patternProperties", "*"] });
      i.patternProperties = {};
      for (let d of a) Pfe(i.patternProperties, gi(d).source, f);
    } else {
      if (t.target === "draft-07" || t.target === "draft-2020-12") {
        i.propertyNames = fC(s.keyType, t, { ...n, path: [...n.path, "propertyNames"] });
        let f = dt.get(t);
        if (!f) ((f = []), dt.set(t, f), t.deferred.push(() => Fs(t)));
        f.push(e);
      }
      i.additionalProperties = fC(s.valueType, t, {
        ...n,
        path: [...n.path, "additionalProperties"]
      });
    }
    let l = c._zod.values,
      p = t.io === "input" && L(s.valueType) !== void 0;
    if (l && !s.partial && !p) {
      let f = [...l].filter((d) => typeof d === "string" || typeof d === "number");
      if (f.length > 0) i.required = f.map(String);
    }
  },
  Tt = (e, t, r, n) => {
    let i = e._zod.def,
      s = fC(i.innerType, t, n),
      c = t.seen.get(e);
    if (t.target === "openapi-3.0") ((c.ref = i.innerType), (r.nullable = !0));
    else r.anyOf = [s, { type: "null" }];
  },
  Nt = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = i.innerType;
  },
  Ct = Symbol();
function Ii(e, t, r, n, i) {
  let s = !1,
    c = JSON.stringify(e, (a, l) => {
      if (typeof l !== "bigint") return l;
      return ((s = !0), null);
    });
  if (!s) return JSON.parse(c);
  return (Z(t, r, n, i, "BigInt defaults cannot be represented in JSON Schema"), Ct);
}
var Rt = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = i.innerType;
    let c = Ii(i.defaultValue, e, t, r, n);
    if (c !== Ct) r.default = c;
  },
  Dt = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    if (((s.ref = i.innerType), t.io !== "input")) return;
    let c = Ii(i.defaultValue, e, t, r, n);
    if (c !== Ct) r._prefault = c;
  },
  jt = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = i.innerType;
    let c;
    try {
      c = i.catchValue(void 0);
    } catch {
      Z(e, t, r, n, "Dynamic catch values are not supported in JSON Schema");
      return;
    }
    r.default = c;
  },
  Lt = (e, t, r, n) => {
    let i = e._zod.def,
      s = i.in._zod.traits.has("$ZodTransform"),
      c = t.io === "input" ? (s ? i.out : i.in) : i.out;
    fC(c, t, n);
    let a = t.seen.get(e);
    a.ref = c;
  },
  Ft = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    ((s.ref = i.innerType), (r.readOnly = !0));
  },
  Oi = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = i.innerType;
  },
  Ze = (e, t, r, n) => {
    let i = e._zod.def;
    fC(i.innerType, t, n);
    let s = t.seen.get(e);
    s.ref = i.innerType;
  },
  Mt = (e, t, r, n) => {
    let i = e._zod.innerType;
    fC(i, t, n);
    let s = t.seen.get(e);
    s.ref = i;
  },
  fi = {
    string: mt,
    number: ht,
    boolean: _t,
    bigint: xi,
    symbol: vi,
    null: gt,
    undefined: xt,
    void: yi,
    never: vt,
    any: $t,
    unknown: zt,
    date: $i,
    enum: bt,
    literal: kt,
    nan: zi,
    template_literal: bi,
    file: ki,
    success: Zi,
    custom: Zt,
    properties: Ls,
    function: wi,
    transform: wt,
    map: Pi,
    set: Si,
    array: Pt,
    object: St,
    union: It,
    intersection: Ot,
    tuple: At,
    record: Et,
    nullable: Tt,
    nonoptional: Nt,
    default: Rt,
    prefault: Dt,
    catch: jt,
    pipe: Lt,
    readonly: Ft,
    promise: Oi,
    optional: Ze,
    lazy: Mt
  };
function ost(e, t) {
  if ("_idmap" in e) {
    let n = e,
      i = ee({ ...t, processors: fi }),
      s = {};
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      fC(f, i);
    }
    let c = {},
      a = { registry: n, uri: t?.uri, defs: s };
    i.external = a;
    for (let l of n._idmap.entries()) {
      let [p, f] = l;
      (te(i, f), Pfe(c, p, re(i, f)));
    }
    if (Object.keys(s).length > 0) {
      let l = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = { [l]: s };
    }
    return { schemas: c };
  }
  let r = ee({ ...t, processors: fi });
  return (fC(e, r), te(r, e), re(r, e));
}
var Ai = new WeakSet([Object.prototype, Error.prototype]);
function we(e, t, r) {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    get() {
      let n = r(this);
      return (Object.defineProperty(this, t, { value: n, configurable: !0, writable: !0 }), n);
    },
    set(n) {
      Object.defineProperty(this, t, { value: n, configurable: !0, writable: !0 });
    }
  });
}
var Ei = (e, t) => {
    (Gt.init(e, t), (e.name = "ZodError"));
    let r = Object.getPrototypeOf(e);
    if (Ai.has(r)) return;
    (Ai.add(r),
      we(r, "format", (n) => (i) => Xt(n, i)),
      we(r, "flatten", (n) => (i) => Yt(n, i)),
      we(r, "addIssue", (n) => (i) => {
        (n.issues.push(i), (n.message = JSON.stringify(n.issues, Par, 2)));
      }),
      we(r, "addIssues", (n) => (i) => {
        (n.issues.push(...i), (n.message = JSON.stringify(n.issues, Par, 2)));
      }),
      Object.defineProperty(r, "isEmpty", {
        configurable: !0,
        enumerable: !1,
        get() {
          return this.issues.length === 0;
        }
      }));
  },
  pC = Cr("ZodError", Ei),
  I = Cr("ZodError", Ei, void 0, { Parent: Error });
var Ti = ce(I),
  Ni = ue(I),
  X3r = J(I),
  Ci = ae(I),
  Ri = er(I),
  Di = tr(I),
  ji = rr(I),
  Li = or(I),
  Fi = nr(I),
  Mi = ir(I),
  Ui = sr(I),
  Ji = cr(I);
function Gs() {
  if (!BZ.localeError) jZ(qe());
}
function ie() {
  if (!BZ.memoizer) jZ({ memoizer: vn() });
}
var lT = Cr("ZodType", (e, t) => (Gs(), dk.init(e, t), (e.def = t), (e.type = t.type), e), {
    check(...e) {
      let t = this.def;
      return this.clone(
        tSe(t, {
          checks: [
            ...(t.checks ?? []),
            ...e.map((r) =>
              typeof r === "function"
                ? { _zod: { check: r, def: { check: "custom" }, onattach: [] } }
                : r
            )
          ]
        }),
        { parent: !0 }
      );
    },
    with(...e) {
      return this.check(...e);
    },
    clone(e, t) {
      return I4e(this, e, t);
    },
    brand() {
      return this;
    },
    register(e, t) {
      return (e.add(this, t), this);
    },
    refine(e, t) {
      return this.check(Tc(e, t));
    },
    superRefine(e, t) {
      return this.check(Nc(e, t));
    },
    overwrite(e) {
      return this.check(C(e));
    },
    optional() {
      return wa(this);
    },
    exactOptional() {
      return $c(this);
    },
    nullable() {
      return Bi(this);
    },
    nullish() {
      return wa(Bi(this));
    },
    nonoptional(e) {
      return Pc(this, e);
    },
    array() {
      return T(this);
    },
    or(e) {
      return $e([this, e]);
    },
    and(e) {
      return Zbe(this, e);
    },
    transform(e) {
      return Vi(this, Hi(e));
    },
    default(e) {
      return kc(this, e);
    },
    prefault(e) {
      return wc(this, e);
    },
    catch(e) {
      return Sc(this, e);
    },
    pipe(e) {
      return Vi(this, e);
    },
    readonly() {
      return Ac(this);
    },
    describe(e) {
      let t = this.clone();
      return (rst.add(t, { description: e }), t);
    },
    meta(...e) {
      if (e.length === 0) return rst.get(this);
      let t = this.clone();
      return (rst.add(t, e[0]), t);
    },
    isOptional() {
      return this.safeParse(void 0).success;
    },
    isNullable() {
      return this.safeParse(null).success;
    },
    apply(e, ...t) {
      return t.length === 0 ? e(this) : e(this, ...t);
    },
    get "~standard"() {
      return h7o(this, "~standard", {
        ...Fe(this),
        jsonSchema: { input: Q(this, "input"), output: Q(this, "output") }
      });
    },
    set "~standard"(e) {
      sst(this, "~standard", e);
    },
    parse: function e(t, r) {
      return Ti(this, t, r, { callee: e });
    },
    parseAsync: async function e(t, r) {
      return await Ni(this, t, r, { callee: e });
    },
    safeParse(e, t) {
      return X3r(this, e, t);
    },
    async safeParseAsync(e, t) {
      return Ci(this, e, t);
    },
    get spa() {
      return this?.safeParseAsync;
    },
    set spa(e) {
      sst(this, "spa", e);
    },
    validate(e, t) {
      return Oe(this, e, t);
    },
    validateAsync(e, t) {
      return Ae(this, e, t);
    },
    encode: function e(t, r) {
      return Ri(this, t, r, { callee: e });
    },
    decode: function e(t, r) {
      return Di(this, t, r, { callee: e });
    },
    encodeAsync: async function e(t, r) {
      return await ji(this, t, r, { callee: e });
    },
    decodeAsync: async function e(t, r) {
      return await Li(this, t, r, { callee: e });
    },
    safeEncode(e, t) {
      return Fi(this, e, t);
    },
    safeDecode(e, t) {
      return Mi(this, e, t);
    },
    async safeEncodeAsync(e, t) {
      return Ui(this, e, t);
    },
    async safeDecodeAsync(e, t) {
      return Ji(this, e, t);
    },
    toJSONSchema(e) {
      return ci(this, {})(e);
    },
    get description() {
      return rst.get(this)?.description;
    },
    get _def() {
      return this._zod.def;
    }
  }),
  Ki = Cr(
    "_ZodString",
    (e, t) => {
      (de.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => mt(e, r, n, i)));
    },
    jci(
      {
        format: (e) => S(e).format ?? null,
        minLength: (e) => S(e).minimum ?? null,
        maxLength: (e) => S(e).maximum ?? null
      },
      {
        regex(...e) {
          return this.check(et(...e));
        },
        includes(...e) {
          return this.check(ot(...e));
        },
        startsWith(...e) {
          return this.check(nt(...e));
        },
        endsWith(...e) {
          return this.check(it(...e));
        },
        min(...e) {
          return this.check(R(...e));
        },
        max(...e) {
          return this.check(SEn(...e));
        },
        length(...e) {
          return this.check(ke(...e));
        },
        nonempty(...e) {
          return this.check(R(1, ...e));
        },
        lowercase(e) {
          return this.check(tt(e));
        },
        uppercase(e) {
          return this.check(rt(e));
        },
        trim() {
          return this.check(ct());
        },
        normalize(...e) {
          return this.check(st(...e));
        },
        toLowerCase() {
          return this.check(ut());
        },
        toUpperCase() {
          return this.check(at());
        },
        slugify() {
          return this.check(lt());
        }
      }
    )
  ),
  wEn = Cr(
    "ZodString",
    (e, t) => {
      (de.init(e, t), Ki.init(e, t));
    },
    {
      email(e) {
        return this.check(Ye(Wi, e));
      },
      url(e) {
        return this.check(He(Gi, e));
      },
      jwt(e) {
        return this.check(Fn(pc, e));
      },
      emoji(e) {
        return this.check(Pn(Hs, e));
      },
      guid(e) {
        return this.check(bn(Xs, e));
      },
      uuid(e) {
        return this.check(Xe(ne, e));
      },
      uuidv4(e) {
        return this.check(kn(ne, e));
      },
      uuidv6(e) {
        return this.check(Zn(ne, e));
      },
      uuidv7(e) {
        return this.check(wn(ne, e));
      },
      nanoid(e) {
        return this.check(Sn(Qs, e));
      },
      cuid(e) {
        return this.check(In(ec, e));
      },
      cuid2(e) {
        return this.check(On(tc, e));
      },
      ulid(e) {
        return this.check(An(rc, e));
      },
      base64(e) {
        return this.check(Qe(qi, e));
      },
      base64url(e) {
        return this.check(jn(ac, e));
      },
      xid(e) {
        return this.check(En(oc, e));
      },
      ksuid(e) {
        return this.check(Tn(nc, e));
      },
      ipv4(e) {
        return this.check(Nn(ic, e));
      },
      ipv6(e) {
        return this.check(Cn(sc, e));
      },
      cidrv4(e) {
        return this.check(Rn(cc, e));
      },
      cidrv6(e) {
        return this.check(Dn(uc, e));
      },
      e164(e) {
        return this.check(Ln(lc, e));
      },
      datetime(e) {
        return this.check(q3r(i7o, e));
      },
      date(e) {
        return this.check(Y3r(a7o, e));
      },
      time(e) {
        return this.check(Mn(qs, e));
      },
      duration(e) {
        return this.check(Un(Ys, e));
      }
    }
  );
function o(e) {
  return zn(wEn, e);
}
var k = Cr("ZodStringFormat", (e, t) => {
    (b.init(e, t), Ki.init(e, t));
  }),
  i7o = Cr("ZodISODateTime", (e, t) => {
    (Po.init(e, t), k.init(e, t));
  }),
  a7o = Cr("ZodISODate", (e, t) => {
    (So.init(e, t), k.init(e, t));
  }),
  qs = Cr("ZodISOTime", (e, t) => {
    (Io.init(e, t), k.init(e, t));
  }),
  Ys = Cr("ZodISODuration", (e, t) => {
    (Oo.init(e, t), k.init(e, t));
  }),
  Wi = Cr("ZodEmail", (e, t) => {
    (_o.init(e, t), k.init(e, t));
  });
function xci(e) {
  return Ye(Wi, e);
}
var Xs = Cr("ZodGUID", (e, t) => {
  (mo.init(e, t), k.init(e, t));
});
var ne = Cr("ZodUUID", (e, t) => {
  (ho.init(e, t), k.init(e, t));
});
function m4t(e) {
  return Xe(ne, e);
}
var Gi = Cr("ZodURL", (e, t) => {
  (vo.init(e, t), k.init(e, t));
});
function x4e(e) {
  return He(Gi, e);
}
var Hs = Cr("ZodEmoji", (e, t) => {
  (yo.init(e, t), k.init(e, t));
});
var Qs = Cr("ZodNanoID", (e, t) => {
  ($o.init(e, t), k.init(e, t));
});
var ec = Cr("ZodCUID", (e, t) => {
  (zo.init(e, t), k.init(e, t));
});
var tc = Cr("ZodCUID2", (e, t) => {
  (bo.init(e, t), k.init(e, t));
});
var rc = Cr("ZodULID", (e, t) => {
  (ko.init(e, t), k.init(e, t));
});
var oc = Cr("ZodXID", (e, t) => {
  (Zo.init(e, t), k.init(e, t));
});
var nc = Cr("ZodKSUID", (e, t) => {
  (wo.init(e, t), k.init(e, t));
});
var ic = Cr("ZodIPv4", (e, t) => {
  (Ao.init(e, t), k.init(e, t));
});
var sc = Cr("ZodIPv6", (e, t) => {
  (To.init(e, t), k.init(e, t));
});
var cc = Cr("ZodCIDRv4", (e, t) => {
  (No.init(e, t), k.init(e, t));
});
var uc = Cr("ZodCIDRv6", (e, t) => {
  (Co.init(e, t), k.init(e, t));
});
var qi = Cr("ZodBase64", (e, t) => {
  (Do.init(e, t), k.init(e, t));
});
function Pci(e) {
  return Qe(qi, e);
}
var ac = Cr("ZodBase64URL", (e, t) => {
  (jo.init(e, t), k.init(e, t));
});
var lc = Cr("ZodE164", (e, t) => {
  (Lo.init(e, t), k.init(e, t));
});
var pc = Cr("ZodJWT", (e, t) => {
  (Fo.init(e, t), k.init(e, t));
});
var g4t = Cr(
  "ZodNumber",
  (e, t) => {
    (Je.init(e, t),
      lT.init(e, t),
      (e._zod.processJSONSchema = (r, n, i) => ht(e, r, n, i)),
      (e.isFinite = !0));
  },
  jci(
    {
      minValue: (e) => {
        let { minimum: t, exclusiveMinimum: r } = S(e);
        return Math.max(t ?? Number.NEGATIVE_INFINITY, r ?? Number.NEGATIVE_INFINITY);
      },
      maxValue: (e) => {
        let { maximum: t, exclusiveMaximum: r } = S(e);
        return Math.min(t ?? Number.POSITIVE_INFINITY, r ?? Number.POSITIVE_INFINITY);
      },
      isInt: (e) => {
        let { isInt: t, multipleOf: r } = S(e);
        return !!t || !!r?.some(Number.isSafeInteger);
      },
      format: (e) => S(e).format ?? null
    },
    {
      gt(e, t) {
        return this.check(ze(e, t));
      },
      gte(e, t) {
        return this.check(X(e, t));
      },
      min(e, t) {
        return this.check(X(e, t));
      },
      lt(e, t) {
        return this.check(ye(e, t));
      },
      lte(e, t) {
        return this.check(Y(e, t));
      },
      max(e, t) {
        return this.check(Y(e, t));
      },
      int(e) {
        return this.check(Bd(e));
      },
      safe(e) {
        return this.check(Bd(e));
      },
      positive(e) {
        return this.check(ze(0, e));
      },
      nonnegative(e) {
        return this.check(X(0, e));
      },
      negative(e) {
        return this.check(ye(0, e));
      },
      nonpositive(e) {
        return this.check(Y(0, e));
      },
      multipleOf(e, t) {
        return this.check(be(e, t));
      },
      step(e, t) {
        return this.check(be(e, t));
      },
      finite() {
        return this;
      }
    }
  )
);
function v(e) {
  return Jn(g4t, e);
}
var Yi = Cr("ZodNumberFormat", (e, t) => {
  (Mo.init(e, t), g4t.init(e, t));
});
function Bd(e) {
  return Bn(Yi, e);
}
function Ici(e) {
  return Vn(Yi, e);
}
var vEn = Cr("ZodBoolean", (e, t) => {
  (Uo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => _t(e, r, n, i)));
});
function M(e) {
  return Kn(vEn, e);
}
var fc = Cr("ZodUndefined", (e, t) => {
  (Jo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => xt(e, r, n, i)));
});
function kM(e) {
  return Wn(fc, e);
}
var dc = Cr("ZodNull", (e, t) => {
  (Bo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => gt(e, r, n, i)));
});
function sm(e) {
  return Gn(dc, e);
}
var mc = Cr("ZodAny", (e, t) => {
  (Vo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => $t(e, r, n, i)));
});
function UZ() {
  return qn(mc);
}
var hc = Cr("ZodUnknown", (e, t) => {
  (Ko.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => zt(e, r, n, i)));
});
function oe() {
  return Yn(hc);
}
var _c = Cr("ZodNever", (e, t) => {
  (Wo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => vt(e, r, n, i)));
});
function P4e(e) {
  return Xn(_c, e);
}
var l7o = Cr(
  "ZodArray",
  (e, t) => {
    (ie(),
      Go.init(e, t),
      lT.init(e, t),
      (e._zod.processJSONSchema = (r, n, i) => Pt(e, r, n, i)),
      (e.element = t.element));
  },
  {
    min(e, t) {
      return this.check(R(e, t));
    },
    nonempty(e) {
      return this.check(R(1, e));
    },
    max(e, t) {
      return this.check(SEn(e, t));
    },
    length(e, t) {
      return this.check(ke(e, t));
    },
    unwrap() {
      return this.element;
    }
  }
);
function T(e, t) {
  return Hn(l7o, e, t);
}
var v$e = Cr(
  "ZodObject",
  (e, t) => {
    (ie(),
      Xo.init(e, t),
      lT.init(e, t),
      (e._zod.processJSONSchema = (r, n, i) => St(e, r, n, i)),
      Qwi(e, "shape", (r) => r._zod.def.shape, !1));
  },
  {
    keyof() {
      return B(Object.keys(this._zod.def.shape));
    },
    catchall(e) {
      return this.clone(tSe(this._zod.def, { catchall: e }));
    },
    passthrough() {
      return this.clone(tSe(this._zod.def, { catchall: oe() }));
    },
    loose() {
      return this.clone(tSe(this._zod.def, { catchall: oe() }));
    },
    strict() {
      return this.clone(tSe(this._zod.def, { catchall: P4e() }));
    },
    strip() {
      return this.clone(tSe(this._zod.def, { catchall: void 0 }));
    },
    extend(e) {
      return qwi(this, e);
    },
    safeExtend(e) {
      return Ywi(this, e);
    },
    merge(e) {
      return Xwi(this, e);
    },
    pick(e) {
      return Kwi(this, e);
    },
    omit(e) {
      return Vwi(this, e);
    },
    partial(...e) {
      return Fci(Car, this, e[0]);
    },
    exactPartial(...e) {
      return Fci(Qi, this, e[0], "exactPartial");
    },
    required(...e) {
      return Jwi(es, this, e[0]);
    }
  }
);
function u(e, t) {
  let r = { type: "object", shape: e ?? {}, ...yd(t) };
  return new v$e(r);
}
function Ue(e, t) {
  return new v$e({ type: "object", shape: e, catchall: P4e(), ...yd(t) });
}
function yt(e, t) {
  return new v$e({ type: "object", shape: e, catchall: oe(), ...yd(t) });
}
var Xi = Cr("ZodUnion", (e, t) => {
  (Be.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => It(e, r, n, i)),
    (e.options = t.options));
});
function $e(e, t) {
  return new Xi({ type: "union", options: e, ...yd(t) });
}
var gc = Cr("ZodDiscriminatedUnion", (e, t) => {
  (Xi.init(e, t), Ho.init(e, t));
});
function Gr(e, t, r) {
  return new gc({ type: "union", options: t, discriminator: e, ...yd(r) });
}
var xc = Cr("ZodIntersection", (e, t) => {
  (Qo.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => Ot(e, r, n, i)));
});
function Zbe(e, t) {
  return new xc({ type: "intersection", left: e, right: t });
}
var vc = Cr(
  "ZodTuple",
  (e, t) => {
    (ie(), en.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => At(e, r, n, i)));
  },
  {
    rest(e) {
      return this.clone({ ...this._zod.def, rest: e });
    },
    partial() {
      let e = this._zod.def;
      if (e.checks?.length)
        throw Error(".partial() cannot be used on tuple schemas containing refinements");
      return this.clone({
        ...e,
        items: e.items.map((t) => new Car({ type: "optional", innerType: t }))
      });
    }
  }
);
function Cv(e, t, r) {
  let n = t instanceof dk,
    i = n ? r : t;
  return new vc({ type: "tuple", items: e, rest: n ? t : null, ...yd(i) });
}
var Jt = Cr("ZodRecord", (e, t) => {
  (ie(),
    tn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Et(e, r, n, i)),
    (e.keyType = t.keyType),
    (e.valueType = t.valueType));
});
function me(e, t, r) {
  if (!t || !t._zod) return new Jt({ type: "record", keyType: o(), valueType: e, ...yd(t) });
  return new Jt({ type: "record", keyType: e, valueType: t, ...yd(r) });
}
function eSe(e, t, r) {
  return new Jt({ type: "record", keyType: e, valueType: t, ...yd(r), partial: !0 });
}
var Aar = Cr("ZodEnum", (e, t) => {
  (rn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (n, i, s) => bt(e, n, i, s)),
    (e.enum = t.entries),
    (e.options = [...e._zod.values]));
  let r = new Set(Object.keys(t.entries));
  ((e.extract = (n, i) => {
    let s = {};
    for (let c of n)
      if (r.has(c)) s[c] = t.entries[c];
      else throw Error(`Key ${c} not found in enum`);
    return new Aar({ ...t, checks: [], ...yd(i), entries: s });
  }),
    (e.exclude = (n, i) => {
      let s = { ...t.entries };
      for (let c of n)
        if (r.has(c)) delete s[c];
        else throw Error(`Key ${c} not found in enum`);
      return new Aar({ ...t, checks: [], ...yd(i), entries: s });
    }));
});
function B(e, t) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new Aar({ type: "enum", entries: r, ...yd(t) });
}
var d7o = Cr("ZodLiteral", (e, t) => {
  (on.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => kt(e, r, n, i)),
    (e.values = new Set(t.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1)
          throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t.values[0];
      }
    }));
});
function A(e, t) {
  return new d7o({ type: "literal", values: Array.isArray(e) ? e : [e], ...yd(t) });
}
var yc = Cr("ZodTransform", (e, t) => {
  (ie(),
    nn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => wt(e, r, n, i)),
    (e._zod.parse = (r, n) => {
      if (n.direction === "backward") throw new Mar(e.constructor.name);
      r.addIssue = (s) => {
        if (typeof s === "string") r.issues.push(y4t(s, r.value, t));
        else {
          let c = s;
          if (c.fatal) c.continue = !1;
          if ((c.code ?? (c.code = "custom"), !("input" in c))) c.input = r.value;
          (c.inst ?? (c.inst = e), r.issues.push(y4t(c)));
        }
      };
      let i = t.transform(r.value, r);
      if (i instanceof Promise) return i.then((s) => ((r.value = s), r));
      return ((r.value = i), r);
    }));
});
function Hi(e) {
  return new yc({ type: "transform", transform: e });
}
var Car = Cr("ZodOptional", (e, t) => {
  (Ve.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Ze(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType));
});
function wa(e) {
  return new Car({ type: "optional", innerType: e });
}
var Qi = Cr("ZodExactOptional", (e, t) => {
  (sn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Ze(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType));
});
function $c(e) {
  return new Qi({ type: "optional", innerType: e });
}
var zc = Cr("ZodNullable", (e, t) => {
  (cn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Tt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Bi(e) {
  return new zc({ type: "nullable", innerType: e });
}
var bc = Cr("ZodDefault", (e, t) => {
  (un.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Rt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function kc(e, t) {
  return new bc({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : f7o(t);
    }
  });
}
var Zc = Cr("ZodPrefault", (e, t) => {
  (an.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Dt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType));
});
function wc(e, t) {
  return new Zc({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t === "function" ? t() : f7o(t);
    }
  });
}
var es = Cr("ZodNonOptional", (e, t) => {
  (ln.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Nt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Pc(e, t) {
  return new es({ type: "nonoptional", innerType: e, ...yd(t) });
}
var J3r = Cr("ZodCatch", (e, t) => {
  (pn.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => jt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function Sc(e, t) {
  return new J3r({ type: "catch", innerType: e, catchValue: typeof t === "function" ? t : Wci(t) });
}
var Rar = Cr("ZodPipe", (e, t) => {
  (Ke.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Lt(e, r, n, i)),
    (e.in = t.in),
    (e.out = t.out));
});
function Vi(e, t) {
  return new Rar({ type: "pipe", in: e, out: t });
}
var Ic = Cr("ZodPreprocess", (e, t) => {
    (Rar.init(e, t), fn.init(e, t));
  }),
  Oc = Cr("ZodReadonly", (e, t) => {
    (dn.init(e, t),
      lT.init(e, t),
      (e._zod.processJSONSchema = (r, n, i) => Ft(e, r, n, i)),
      (e.unwrap = () => e._zod.def.innerType));
  });
function Ac(e) {
  return new Oc({ type: "readonly", innerType: e });
}
var Ec = Cr("ZodLazy", (e, t) => {
  (V3r.init(e, t),
    lT.init(e, t),
    (e._zod.processJSONSchema = (r, n, i) => Mt(e, r, n, i)),
    (e.unwrap = () => e._zod.def.getter()));
});
function gA(e) {
  return new Ec({ type: "lazy", getter: e });
}
var ts = Cr("ZodCustom", (e, t) => {
  (mn.init(e, t), lT.init(e, t), (e._zod.processJSONSchema = (r, n, i) => Zt(e, r, n, i)));
});
function $u(e, t) {
  return Qn(ts, e ?? (() => !0), t);
}
function Tc(e, t = {}) {
  return ei(ts, e, t);
}
function Nc(e, t) {
  return ti(e, t);
}
function Ia(e, t) {
  return new Ic({ type: "pipe", in: Hi(e), out: t });
}
export {
  s7o,
  i2,
  dk,
  V3r,
  rst,
  Tci,
  Aci,
  q3r,
  Y3r,
  Cci,
  Rci,
  SEn,
  fC,
  ost,
  pC,
  X3r,
  lT,
  wEn,
  o,
  i7o,
  a7o,
  xci,
  m4t,
  x4e,
  Pci,
  g4t,
  v,
  Bd,
  Ici,
  vEn,
  M,
  kM,
  sm,
  UZ,
  oe,
  P4e,
  l7o,
  T,
  v$e,
  u,
  Ue,
  yt,
  $e,
  Gr,
  Zbe,
  Cv,
  me,
  eSe,
  Aar,
  B,
  d7o,
  A,
  Car,
  wa,
  J3r,
  Rar,
  gA,
  $u,
  Ia
};

//# sourceMappingURL=chunk-0bqrj5ah.js.map
