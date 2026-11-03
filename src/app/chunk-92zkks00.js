// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { ke, yS, hT } from "./chunk-wrtp8qz8.js";
import { R, d, E } from "./chunk-fs43t96t.js";
import { i } from "./chunk-cj37hmns.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { hYt, oTn, sTn } from "./chunk-45h8cn90.js";
import { l } from "./chunk-ewvf3tep.js";
import { yM, Dbe, Hbe } from "./chunk-5rw2zfa0.js";
import { pn, lj, rs } from "./chunk-0evsancd.js";
import { irt, Be, At } from "./chunk-at88wjsn.js";
import { p } from "./chunk-qmkm2x59.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { uo, Ar, yl } from "./chunk-ajtyjx88.js";
import { PAn } from "./chunk-c3npf81n.js";
import { rj } from "./chunk-wany0nxw.js";
import { No } from "./chunk-8r2m7vfp.js";
import { Ro, Tf } from "./chunk-1e5yp9hx.js";
import { Bn } from "./chunk-9z5ybxhe.js";
import { oli, Y8o, pe, Vz, S9o } from "./chunk-7c3thgax.js";
import { tm, toe, s5 } from "./chunk-h2tyaevk.js";
import { Gi } from "./chunk-d5zj5299.js";
import { Si } from "./chunk-crvt0hax.js";
import { ULe } from "./chunk-wdgmsxyg.js";
import { oe, T, u, yt, A } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { resolve as y } from "path";
var Y = 268435456,
  C = Symbol("first line too long"),
  D = 65536,
  b,
  w,
  Q = p(() =>
    u({
      type: A("control_request"),
      request: yt({ subtype: A("initialize"), plugins: oe().optional() })
    })
  );
function eys(e) {
  if (b) return;
  let n = x(e);
  ((b = Z(n)
    .then(ne, (r) => ((n.error = r), f("sdk_launch_initialize", "stdin_error"), { kind: "absent" }))
    .catch(() => (m("sdk_launch_initialize", "parse_threw"), { kind: "absent" }))),
    b.then(() => j(n)));
}
function tys(e) {
  if (w) return;
  let n = x(e);
  j(n);
}
function nys(e) {
  let n = w;
  if (!n || !n.pumping || n.capped || n.adopted || n.watch) return;
  let r = { watcher: e, held: [], heldChars: 0, passing: !1 };
  n.watch = r;
  for (let s of n.stash.splice(0)) G(n, s);
  if (n.ended || n.error !== void 0) e.ended();
  return () => F(n, r);
}
function c_r() {
  return b ?? Promise.resolve(void 0);
}
function u_r() {
  let e = w;
  if (!e || e.adopted) return;
  if (e.watch) F(e, e.watch);
  return ((e.adopted = !0), ee(e));
}
function Qio(e) {
  let n = T(irt()).optional().safeParse(e);
  if (!n.success) return !1;
  let r = n.data;
  if (r === void 0 || r.length === 0) return;
  let s = yl(),
    a = s?.preEnterOriginalCwd ?? s?.originalCwd ?? ke(),
    o = new Set(yS().map((h) => y(a, h))),
    c = new Set(hT().map((h) => y(a, h)));
  return r.every((h) => (h.skipMcpDiscovery ? c.has(y(a, h.path)) : o.has(y(a, h.path))));
}
function x(e) {
  let n = {
    generator: e(),
    stash: [],
    inflight: void 0,
    ended: !1,
    error: void 0,
    adopted: !1,
    capped: !1,
    pumping: !1,
    watch: void 0
  };
  return ((w = n), n);
}
async function Z(e) {
  let n = "";
  for (;;) {
    let r = n.indexOf(`
`);
    if (r !== -1) {
      let a = n.slice(0, r);
      if (a.trim() !== "") return a;
      n = n.slice(r + 1);
      continue;
    }
    if (n.length > Y) return ((e.capped = !0), C);
    e.inflight = e.generator.next();
    let s = await e.inflight;
    if (((e.inflight = void 0), s.done)) return ((e.ended = !0), null);
    (e.stash.push(s.value), (n += s.value));
  }
}
async function j(e) {
  e.pumping = !0;
  try {
    while (!e.adopted && !e.ended && !e.capped && e.error === void 0) {
      e.inflight = e.generator.next();
      let n = await e.inflight;
      if (((e.inflight = void 0), n.done)) e.ended = !0;
      else G(e, n.value);
    }
  } catch (n) {
    ((e.inflight = void 0), (e.error = n));
  }
  if (e.ended || e.error !== void 0) e.watch?.watcher.ended();
}
function G(e, n) {
  let r = e.watch;
  if (!r) {
    e.stash.push(n);
    return;
  }
  let s = 0;
  for (;;) {
    let o = n.indexOf(
      `
`,
      s
    );
    if (o === -1) break;
    let c = n.slice(s, o);
    s = o + 1;
    let h = !r.passing && r.heldChars + c.length <= D;
    if (((r.passing = !1), h && r.watcher.takes(r.held.join("") + c))) {
      ((r.held = []), (r.heldChars = 0));
      continue;
    }
    (k(e, r),
      e.stash.push(
        c +
          `
`
      ));
  }
  if (s === n.length) return;
  let a = s === 0 ? n : n.slice(s);
  if (r.passing) {
    e.stash.push(a);
    return;
  }
  if ((r.held.push(a), (r.heldChars += a.length), r.heldChars > D)) (k(e, r), (r.passing = !0));
}
function k(e, n) {
  for (let r of n.held) e.stash.push(r);
  ((n.held = []), (n.heldChars = 0));
}
function F(e, n) {
  if (e.watch !== n) return;
  (k(e, n), (e.watch = void 0));
}
async function* ee(e) {
  let n = !1;
  try {
    while (e.stash.length > 0) yield e.stash.shift();
    if (e.inflight) {
      await e.inflight.catch(() => {});
      while (e.stash.length > 0) yield e.stash.shift();
    }
    if (e.error !== void 0) throw e.error;
    if (e.ended) return;
    ((n = !0), yield* e.generator);
  } finally {
    if (!n && !e.ended) e.generator.return(void 0).catch(() => {});
  }
}
function ne(e) {
  if (e === null)
    return (
      t("--await-initialize: stdin ended before an initialize request arrived", { level: "warn" }),
      f("sdk_launch_initialize", "stdin_ended"),
      { kind: "absent" }
    );
  if (e === C)
    return (
      t("--await-initialize: first stdin line exceeds the line-size ceiling; not parsed", {
        level: "error"
      }),
      m("sdk_launch_initialize", "first_line_too_long"),
      { kind: "absent" }
    );
  let n;
  try {
    n = ULe(te(No(e)));
  } catch {
    return (
      m("sdk_launch_initialize", "first_line_not_json"),
      {
        kind: "violation",
        message:
          "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is not valid JSON."
      }
    );
  }
  let r = Q().safeParse(n);
  if (!r.success)
    return (
      m("sdk_launch_initialize", "first_line_not_initialize"),
      {
        kind: "violation",
        message:
          "Error: --await-initialize requires the initialize control request as the first stdin line, and the first line is a different message."
      }
    );
  let s = T(irt()).optional().safeParse(r.data.request.plugins);
  if (!s.success)
    return (
      m("sdk_launch_initialize", "plugins_malformed"),
      {
        kind: "violation",
        message:
          "Error: initialize.plugins must be an array of { type: 'local', path: string, skipMcpDiscovery?: boolean } entries."
      }
    );
  let a = s.data ?? [];
  return (
    g("sdk_launch_initialize"),
    {
      kind: "applied",
      pluginDirs: a.filter((o) => !o.skipMcpDiscovery).map((o) => o.path),
      pluginDirsNoMcp: a.filter((o) => o.skipMcpDiscovery).map((o) => o.path)
    }
  );
}
var H = 10485760,
  W = Symbol("stream-json messages of this process's stdin");
function rys(e) {
  return typeof e !== "string" && W in e;
}
async function* bIt() {
  try {
    (process.stdin.setEncoding("utf8"), yield* sTn(process.stdin));
  } catch (e) {
    if (!hYt(e)) throw e;
    (t(`getInputPrompt: stream-json stdin unreadable: ${d(e)}`, { level: "error" }),
      l(Object.assign(Error("getInputPrompt: stream-json stdin unreadable"), { code: E(e) })),
      await rs(
        `Error: cannot read --input-format=stream-json messages from stdin (${E(e)}): stdin is unreadable. stream-json input requires a readable stdin for the lifetime of the session.`
      ));
  }
}
async function oys(e, n) {
  if (!process.stdin.isTTY && PAn() !== "mcp") {
    if (n === "stream-json") return Object.defineProperty(u_r() ?? bIt(), W, { value: !0 });
    let r = "",
      s = (o) => {
        if (r.length + o.length > H)
          return (
            process.stdin.off("data", s),
            pn(
              `Error: piped stdin input exceeds ${H / 1024 / 1024}MB. Pass large content as a file path in your prompt instead.`
            )
          );
        r += o;
      };
    try {
      (process.stdin.setEncoding("utf8"), process.stdin.on("data", s));
    } catch (o) {
      if ((process.stdin.off("data", s), !hYt(o))) throw o;
      return (
        t(`getInputPrompt: piped stdin unreadable: ${d(o)}`, { level: "error" }),
        l(Object.assign(Error("getInputPrompt: piped stdin unreadable"), { code: E(o) })),
        lj(
          `Warning: stdin is unreadable (${E(o)}), proceeding without piped input. ` +
            "If you piped input, it was not received \u2014 pass it as a prompt argument, or check that the process launching Claude Code wires stdin to a pipe or /dev/null."
        ),
        e
      );
    }
    let a = await oTn(process.stdin, 3000);
    if ((process.stdin.off("data", s), a))
      lj(
        "Warning: no stdin data received in 3s, proceeding without it. If piping from a slow command, redirect stdin explicitly: < /dev/null to skip, or wait longer."
      );
    return [e, r].filter(Boolean).join(`
`);
  }
  return e;
}
var S = "[REDACTED]";
function z(e) {
  let n = e;
  for (let r = 0; n && r < 32; r++) {
    let s = n._zod.def;
    switch (s.type) {
      case "optional":
      case "nullable":
      case "default":
      case "prefault":
      case "catch":
      case "nonoptional":
      case "readonly":
        n = s.innerType;
        break;
      case "pipe":
        n = s.in?._zod.def.type === "transform" ? s.out : s.in;
        break;
      case "lazy":
        n = s.getter?.();
        break;
      default:
        return n;
    }
  }
  return;
}
function P(e, n) {
  let r = z(e);
  if (r?._zod.def.type !== "union") return r;
  let s = r._zod.def.options?.find((a) => a.safeParse(n).success);
  return s && P(s, n);
}
function ie(e) {
  let n = e?._zod.def.type;
  return n !== void 0 && n !== "unknown" && n !== "any";
}
function re(e, n) {
  let r = P(e, n)?._zod.def;
  return r?.type === "array" ? r.element : void 0;
}
function N(e, n) {
  let r = z(e)?._zod.def;
  switch (r?.type) {
    case "boolean":
      return typeof n === "boolean";
    case "number":
      return typeof n === "number";
    case "enum":
      return Object.values(r.entries ?? {}).includes(n);
    case "literal":
      return r.values?.includes(n) ?? !1;
    case "union":
      return r.options?.some((s) => N(s, n)) ?? !1;
    default:
      return !1;
  }
}
var B = new Set(["permissions.allow", "permissions.deny", "permissions.ask"]),
  se = /^mcp__[\w-]+(?:__(?:[\w.-]+|\*))?$/;
function ae() {
  return new Set([...(rj() ?? []).flatMap((e) => [e.name, ...(e.aliases ?? [])]), Be, At, uo, Ar]);
}
function de(e, n) {
  if (typeof e !== "string") return S;
  let { toolName: r, ruleContent: s } = Bn(e);
  if (!(n.has(r) || se.test(r))) return S;
  return s === void 0 ? r : `${r}(${S})`;
}
var ce = "sandbox.ignoreViolations";
function le(e, n) {
  let r = P(n, e)?._zod.def;
  if (r?.type === "object" && r.shape) {
    let { shape: o } = r;
    return Object.keys(e)
      .filter((c) => Object.hasOwn(o, c))
      .map((c) => [c, o[c]]);
  }
  let { keyType: s, valueType: a } = r ?? {};
  if (r?.type === "record" && s && a && ie(z(a)))
    return Object.keys(e)
      .filter((o) => s.safeParse(o).success)
      .map((o) => [o, a]);
  return;
}
var ue = new Set(["sandbox.network.httpProxyPort", "sandbox.network.socksProxyPort"]);
function v(e, n, r, s) {
  switch (typeof e) {
    case "string":
    case "boolean":
      return N(n, e) ? e : S;
    case "number":
      return N(n, e) && !ue.has(r) ? e : S;
    case "undefined":
      return;
    case "object":
      break;
    default:
      return S;
  }
  if (e === null) return null;
  if (Array.isArray(e)) {
    if (B.has(r)) return e.map((h) => de(h, s));
    let c = re(n, e);
    return c ? e.map((h) => v(h, c, r, s)) : S;
  }
  if (B.has(r)) return S;
  let a = le(e, n);
  if (!a) return S;
  let o = e;
  if (r === ce) return a.map(([c, h]) => v(o[c], h, r, s));
  return Object.fromEntries(a.map(([c, h]) => [c, v(o[c], h, r ? `${r}.${c}` : c, s)]));
}
var q = 8192;
function fe(e) {
  let n = _(v(e, Dbe(e), "", ae()));
  if (Buffer.byteLength(n) <= q) return { content: n, truncated: !1 };
  let r = 0,
    s = 0;
  for (let a of n) {
    if (((r += Buffer.byteLength(a)), r > q)) break;
    s += a.length;
  }
  return { content: n.slice(0, s), truncated: !0 };
}
function U(e) {
  let { sources: n, behavior: r } = S9o(),
    s = oli(),
    a = s.entry,
    o =
      s.state === "none" &&
      a?.path === void 0 &&
      a?.script === void 0 &&
      Vz() === "remote" &&
      Y8o().errors.some((h) => Hbe().chain.some((O) => h.path === `policyHelpers.${O}`)),
    c = {
      "managed_settings.trigger": e,
      "managed_settings.sources": n,
      "managed_settings.source_behavior": r,
      "managed_settings.helper.state": o ? "entry_invalid" : s.state,
      "managed_settings.helper.applied": s.applied
    };
  if (a) {
    if (((c["managed_settings.helper.entry"] = a.key), a.path !== void 0))
      c["managed_settings.helper.path"] = a.path;
    else if (a.script !== void 0) c["managed_settings.helper.script_sha256"] = et(a.script);
  }
  return c;
}
function L(e) {
  let n = e instanceof Error ? e.constructor.name : typeof e;
  l(new R(`managed_settings_resolved emit failed (${n})`, "managed_settings_resolved emit failed"));
}
function K() {
  let e = toe()?.OTEL_LOG_MANAGED_SETTINGS;
  for (let r of Ro()) {
    if (Tf.has(r)) continue;
    e = s5(pe(r)?.env, r).OTEL_LOG_MANAGED_SETTINGS ?? e;
  }
  let n = tm();
  return Ne(e ?? (n ? n.OTEL_LOG_MANAGED_SETTINGS : i.OTEL_LOG_MANAGED_SETTINGS));
}
function J(e, n) {
  if (!n)
    (delete e["managed_settings.resolved_sha256"],
      delete e["managed_settings.helper.script_sha256"]);
}
function sys() {
  let e = !1,
    n = null,
    r = (a) => {
      try {
        let o = U(a),
          c = pe("policySettings");
        if (c) o["managed_settings.resolved_sha256"] = et(_(yM(c)));
        let { "managed_settings.trigger": h, ...O } = o,
          I = _(O);
        if (I === n) return;
        n = I;
        let M = K();
        if ((J(o, M), c && M)) {
          let { content: V, truncated: X } = fe(c);
          ((o["managed_settings.settings"] = V), (o["managed_settings.settings_truncated"] = X));
        }
        Si("managed_settings_resolved", o).catch(L);
      } catch (o) {
        L(o);
      }
    },
    s = Gi.subscribe((a) => {
      if (a === "policySettings" && e) r("change");
    });
  return (r("startup"), (e = !0), s);
}
function Zio(e) {
  try {
    let n = U("refused");
    (J(n, K()), Si("managed_settings_resolved", { ...n, "error.type": e }).catch(L));
  } catch (n) {
    L(n);
  }
}
export { eys, tys, nys, c_r, u_r, Qio, rys, bIt, oys, sys, Zio };

//# sourceMappingURL=chunk-92zkks00.js.map
