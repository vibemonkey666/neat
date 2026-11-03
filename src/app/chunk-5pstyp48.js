// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ZS, rpe, tt } from "./chunk-wrtp8qz8.js";
import { R } from "./chunk-fs43t96t.js";
import { l } from "./chunk-ewvf3tep.js";
import { pt } from "./chunk-7c3thgax.js";
import { xe } from "./chunk-pnyqvnxs.js";
import { t5n } from "./chunk-0ftmer97.js";
import { Gt, be, j } from "./chunk-bq35vvkw.js";
import { Ps } from "./chunk-5b88xb0z.js";
import { tYe } from "./chunk-f9x3sh8a.js";
var { floor: I, random: N } = Math;
function D(e, n) {
  return e + I(N() * (n - e + 1));
}
var T = D;
function F(e) {
  var n = e.length;
  return n ? e[T(0, n - 1)] : void 0;
}
var v = F;
function B(e, n) {
  return tYe(n, function (i) {
    return e[i];
  });
}
var k = B;
function V(e) {
  return e == null ? [] : k(e, rpe(e));
}
var M = V;
function G(e) {
  return v(M(e));
}
var w = G;
function W(e) {
  var n = ZS(e) ? v : w;
  return n(e);
}
var IW = W;
j();
function A8t() {
  let n = pt().spinnerVerbs;
  if (!n) return E;
  if (n.mode === "replace") return n.verbs.length > 0 ? n.verbs : E;
  return [...E, ...n.verbs];
}
var E = [
  "Accomplishing",
  "Actioning",
  "Actualizing",
  "Architecting",
  "Baking",
  "Beaming",
  "Beboppin'",
  "Befuddling",
  "Billowing",
  "Blanching",
  "Bloviating",
  "Boogieing",
  "Boondoggling",
  "Booping",
  "Bootstrapping",
  "Brewing",
  "Bunning",
  "Burrowing",
  "Calculating",
  "Caramelizing",
  "Cascading",
  "Catapulting",
  "Cerebrating",
  "Channeling",
  "Choreographing",
  "Churning",
  "Clauding",
  "Coalescing",
  "Cogitating",
  "Combobulating",
  "Composing",
  "Computing",
  "Concocting",
  "Considering",
  "Contemplating",
  "Cooking",
  "Crafting",
  "Creating",
  "Crunching",
  "Crystallizing",
  "Cultivating",
  "Deciphering",
  "Deliberating",
  "Determining",
  "Dilly-dallying",
  "Discombobulating",
  "Doing",
  "Doodling",
  "Drizzling",
  "Ebbing",
  "Effecting",
  "Elucidating",
  "Embellishing",
  "Enchanting",
  "Envisioning",
  "Fermenting",
  "Fiddle-faddling",
  "Finagling",
  "Flamb\xE9ing",
  "Flibbertigibbeting",
  "Flowing",
  "Flummoxing",
  "Fluttering",
  "Forging",
  "Forming",
  "Frolicking",
  "Frosting",
  "Gallivanting",
  "Galloping",
  "Garnishing",
  "Generating",
  "Gesticulating",
  "Germinating",
  "Gitifying",
  "Grooving",
  "Gusting",
  "Harmonizing",
  "Hashing",
  "Hatching",
  "Herding",
  "Honking",
  "Hullaballooing",
  "Hyperspacing",
  "Ideating",
  "Imagining",
  "Improvising",
  "Incubating",
  "Inferring",
  "Infusing",
  "Ionizing",
  "Jitterbugging",
  "Julienning",
  "Kerfuffling",
  "Kneading",
  "Leavening",
  "Levitating",
  "Lollygagging",
  "Manifesting",
  "Marinating",
  "Meandering",
  "Metamorphosing",
  "Misting",
  "Moonwalking",
  "Moseying",
  "Mulling",
  "Mustering",
  "Nebulizing",
  "Nesting",
  "Newspapering",
  "Noodling",
  "Nucleating",
  "Onioning",
  "Orbiting",
  "Orchestrating",
  "Osmosing",
  "Perambulating",
  "Percolating",
  "Perusing",
  "Philosophizing",
  "Photosynthesizing",
  "Polishing",
  "Pollinating",
  "Pondering",
  "Pontificating",
  "Pouncing",
  "Precipitating",
  "Prestidigitating",
  "Processing",
  "Proofing",
  "Propagating",
  "Puttering",
  "Puzzling",
  "Quantumizing",
  "Razzle-dazzling",
  "Razzmatazzing",
  "Recombobulating",
  "Reticulating",
  "Roosting",
  "Ruminating",
  "Saut\xE9ing",
  "Scampering",
  "Schlepping",
  "Scurrying",
  "Seasoning",
  "Shenaniganing",
  "Shimmying",
  "Simmering",
  "Skedaddling",
  "Sketching",
  "Slithering",
  "Smooshing",
  "Sock-hopping",
  "Spelunking",
  "Spinning",
  "Sprouting",
  "Stewing",
  "Sublimating",
  "Swirling",
  "Swooping",
  "Symbioting",
  "Synthesizing",
  "Tempering",
  "Thinking",
  "Thundering",
  "Tinkering",
  "Tomfoolering",
  "Topsy-turvying",
  "Transfiguring",
  "Transmogrifying",
  "Transmuting",
  "Twisting",
  "Undulating",
  "Unfurling",
  "Unraveling",
  "Vibing",
  "Waddling",
  "Wandering",
  "Warping",
  "Whatchamacalliting",
  "Whirlpooling",
  "Whirring",
  "Whisking",
  "Wibbling",
  "Working",
  "Wrangling",
  "Zesting",
  "Zigzagging"
];
var aIn = "API error";
function P(e) {
  try {
    let n = Y(e);
    if (n === null || n === "not_a_retry_status" || e === null || e.kind !== "retrying")
      return { status: n === null ? e : null, malformed: n };
    if (![e.attempt, e.maxRetries, e.deadline].every(Number.isFinite))
      return { status: null, malformed: "counters_are_not_numbers" };
    let i = e.error,
      g = typeof i === "object" && i !== null && "status" in i ? i.status : void 0;
    return {
      status: {
        ...e,
        error: { ...U, status: typeof g === "number" && Number.isFinite(g) ? g : void 0 }
      },
      malformed: n
    };
  } catch {
    return { status: null, malformed: "unreadable" };
  }
}
function x(e) {
  l(new A(K[e]));
}
var O = { retrying: !0, stalled: !1, auto_mode_unavailable: !1, low_priority_waiting: !1 },
  U = {
    message: aIn,
    status: void 0,
    requestId: void 0,
    formatted: aIn,
    connection: null,
    isNetworkDown: !1,
    rateLimits: null,
    noResponse: null
  },
  C = "Spinner ignored an API retry status it could not draw (session unaffected): ",
  d =
    "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ",
  K = {
    not_a_retry_status: C + "it is not an object with a known kind",
    unreadable: C + "reading it threw",
    counters_are_not_numbers: C + "its error field is unusable and its counters are not numbers",
    error_is_nullish: d + "its error field is undefined or null",
    error_is_a_string: d + "its error field is a string",
    error_is_not_an_object: d + "its error field is a number, boolean, bigint, symbol or function",
    formatted_is_not_a_string: d + "error.formatted is set but is not a string",
    rate_limit_type_is_not_a_string:
      d + "error.rateLimits.rateLimitType is set but is not a string",
    error_is_an_error_instance: d + "error.formatted is undefined on an Error instance",
    error_has_no_keys: d + "error.formatted is undefined on an object with no keys",
    error_has_api_error_keys:
      d +
      "error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError",
    error_has_snapshot_keys:
      d +
      "error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot",
    error_is_another_object: d + "error.formatted is undefined on another kind of object"
  };
class A extends R {
  constructor(e) {
    super(e);
    this.name = "MalformedRetryStatusError";
  }
}
function Y(e) {
  if (e === null) return null;
  let n = typeof e === "object" && "kind" in e ? e.kind : void 0;
  if (!q(n)) return "not_a_retry_status";
  if (!O[n]) return null;
  let i = typeof e === "object" && "error" in e ? e.error : void 0;
  if (i === void 0 || i === null) return "error_is_nullish";
  if (typeof i === "string") return "error_is_a_string";
  if (typeof i !== "object") return "error_is_not_an_object";
  let g = "formatted" in i ? i.formatted : void 0;
  if (typeof g === "string") {
    let s = "rateLimits" in i ? i.rateLimits : void 0,
      c =
        (typeof s === "object" || typeof s === "function") && s !== null && "rateLimitType" in s
          ? s.rateLimitType
          : void 0;
    return c === void 0 || c === null || typeof c === "string"
      ? null
      : "rate_limit_type_is_not_a_string";
  }
  if (g !== void 0) return "formatted_is_not_a_string";
  return i instanceof Error
    ? "error_is_an_error_instance"
    : Object.keys(i).length === 0
      ? "error_has_no_keys"
      : "headers" in i || "requestID" in i
        ? "error_has_api_error_keys"
        : "connection" in i || "isNetworkDown" in i
          ? "error_has_snapshot_keys"
          : "error_is_another_object";
}
function q(e) {
  return typeof e === "string" && Object.hasOwn(O, e);
}
var y = Object.freeze({
  mode: "responding",
  overrideMessage: null,
  overrideHeading: null,
  overrideColor: null,
  overrideShimmerColor: null,
  isCompacting: !1,
  compactingHintText: null,
  compactingStartTime: null,
  turnEffort: null,
  turnModel: null,
  retryStatus: null,
  thinkingStartedAt: null,
  outputLimitRecovery: null,
  defaultVerb: ""
});
function Nno({ onMalformedRetryStatus: e = x } = {}) {
  let n = Ps({}),
    i = new Set();
  function g(t, u, { materialize: f = !0 } = {}) {
    n.setState((p) => {
      let h = t in p;
      if (!h && !f) return p;
      let b = p[t] ?? { ...y, defaultVerb: IW(A8t()) ?? "" },
        _ = u(b);
      if (_ === b && h) return p;
      return { ...p, [t]: _ };
    });
  }
  function s(t) {
    function u(r, a) {
      let o = Date.now(),
        m = r === "requesting" ? (a ?? null) : null;
      g(t, (S) =>
        S.mode === r && S.outputLimitRecovery === m
          ? S
          : {
              ...S,
              mode: r,
              thinkingStartedAt: r === "thinking" ? o : null,
              outputLimitRecovery: m
            }
      );
    }
    function f(r, a = null) {
      g(t, (o) =>
        o.overrideMessage === r &&
        o.overrideHeading?.words === a?.words &&
        o.overrideHeading?.detail === a?.detail
          ? o
          : { ...o, overrideMessage: r, overrideHeading: a }
      );
    }
    function p(r, a) {
      g(t, (o) =>
        o.overrideColor === r && o.overrideShimmerColor === a
          ? o
          : { ...o, overrideColor: r, overrideShimmerColor: a }
      );
    }
    function h(r, a = null) {
      g(
        t,
        (o) =>
          o.turnEffort === r && o.turnModel === a ? o : { ...o, turnEffort: r, turnModel: a },
        { materialize: r !== null || a !== null }
      );
    }
    function b(r) {
      let { status: a, malformed: o } = P(r);
      if (o !== null && !i.has(o)) {
        i.add(o);
        try {
          e(o);
        } catch {}
      }
      g(t, (m) => (m.retryStatus === a ? m : { ...m, retryStatus: a }));
    }
    function _(r, a = null) {
      let o = Date.now();
      g(t, (m) => {
        if (m.isCompacting === r && m.compactingHintText === a) return m;
        let S = r ? (m.compactingStartTime ?? o) : null;
        return { ...m, isCompacting: r, compactingHintText: a, compactingStartTime: S };
      });
    }
    function L() {
      g(t, (r) =>
        r.overrideMessage === null &&
        r.overrideColor === null &&
        r.overrideShimmerColor === null &&
        !r.isCompacting &&
        r.compactingHintText === null &&
        r.compactingStartTime === null
          ? r
          : {
              ...r,
              overrideMessage: null,
              overrideHeading: null,
              overrideColor: null,
              overrideShimmerColor: null,
              isCompacting: !1,
              compactingHintText: null,
              compactingStartTime: null
            }
      );
    }
    function z() {
      let r = IW(A8t()) ?? "";
      g(t, (a) => ({
        ...a,
        overrideMessage: null,
        overrideHeading: null,
        overrideColor: null,
        overrideShimmerColor: null,
        isCompacting: !1,
        compactingHintText: null,
        compactingStartTime: null,
        turnEffort: null,
        turnModel: null,
        retryStatus: null,
        outputLimitRecovery: null,
        defaultVerb: r
      }));
    }
    function H(r) {
      switch (r.type) {
        case "hooks_start":
          (p("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"),
            f(
              r.hookType === "pre_compact"
                ? "Running PreCompact hooks\u2026"
                : r.hookType === "post_compact"
                  ? "Running PostCompact hooks\u2026"
                  : t5n
            ));
          return;
        case "compact_start":
          (f("Compacting conversation"), _(!0, r.hintText ?? null));
          return;
        case "compact_end":
          L();
          return;
      }
    }
    return {
      setMode: u,
      setMessage: f,
      setColors: p,
      setTurnEffort: h,
      setRetryStatus: b,
      setCompacting: _,
      resetOverrides: z,
      applyCompactProgress: H
    };
  }
  let c = {
    setMode: (t, u) => s(tt()).setMode(t, u),
    setMessage: (t, u) => s(tt()).setMessage(t, u),
    setColors: (t, u) => s(tt()).setColors(t, u),
    setTurnEffort: (t, u) => s(tt()).setTurnEffort(t, u),
    setRetryStatus: (t) => s(tt()).setRetryStatus(t),
    setCompacting: (t, u) => s(tt()).setCompacting(t, u),
    resetOverrides: () => s(tt()).resetOverrides(),
    applyCompactProgress: (t) => s(tt()).applyCompactProgress(t)
  };
  return {
    getSnapshot: n.getSnapshot,
    getState: n.getState,
    setState: n.setState,
    subscribe: n.subscribe,
    get(t) {
      return n.getState()[t ?? tt()] ?? y;
    },
    bind: s,
    main: c,
    evict(t) {
      n.setState((u) => {
        if (!(t in u)) return u;
        let { [t]: f, ...p } = u;
        return p;
      });
    },
    applyEvent(t) {
      switch (t.kind) {
        case "agent-mode":
          s(t.agentId).setMode(t.mode, t.outputLimitRecovery);
          return;
        case "agent-retry-status":
          s(t.agentId).setRetryStatus(t.retryStatus);
          return;
        case "agent-turn-effort":
          s(t.agentId).setTurnEffort(t.turnEffort, t.turnModel);
          return;
        case "main-message":
          c.setMessage(t.message);
          return;
        case "main-colors":
          c.setColors(t.color, t.shimmerColor);
          return;
      }
    }
  };
}
var Olt = Gt(null);
function Pwe() {
  let e = be(Olt);
  if (!e)
    throw ReferenceError(
      "useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)"
    );
  return e;
}
function Jxt(e) {
  let n = e ?? tt();
  return xe(Pwe(), (i) => i[n] ?? y);
}
function $no(e) {
  return xe(Pwe(), (n) => (n[e] ?? y).thinkingStartedAt);
}
function Fno(e) {
  return xe(Pwe(), (n) => (n[e] ?? y).retryStatus);
}
export { IW, A8t, aIn, Nno, Olt, Pwe, Jxt, $no, Fno };

//# sourceMappingURL=chunk-5pstyp48.js.map
