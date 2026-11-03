// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, U, J } from "./chunk-wrtp8qz8.js";
import { b } from "./chunk-acd8w9vv.js";
import { R, N, E } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { bt, Kg, _, te, t } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { se } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { Dw, nf, xqr, gn, Lw, H$, k, Wn } from "./chunk-ajtyjx88.js";
import { Ast } from "./chunk-cjnzngfc.js";
import { p } from "./chunk-qmkm2x59.js";
import { b_ } from "./chunk-4nzy53ma.js";
import { vSn } from "./chunk-qakn3b85.js";
import { hd } from "./chunk-zem4yd4w.js";
import { eu, On, md, mot } from "./chunk-5rw2zfa0.js";
import { Xbe } from "./chunk-928ws1pg.js";
import { jh } from "./chunk-d54avynm.js";
import { qi } from "./chunk-rh5ymkjp.js";
import { Isi } from "./chunk-t86k189s.js";
import { ms } from "./chunk-tbj8hqy2.js";
import { Kzt, Xtt, ker, Jtt } from "./chunk-gq77tz5k.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { Hte, v1e } from "./chunk-1bh1hcpt.js";
import { jD, OG } from "./chunk-36ftx0qt.js";
import { Oft, f1, h9e, Mft, s1n, a1n } from "./chunk-9c9qtnk1.js";
import { uqs, _He } from "./chunk-14k612dp.js";
import { aEe } from "./chunk-aqr6n7ck.js";
import { Fr } from "./chunk-w1mqqc2v.js";
import { y9e } from "./chunk-ra80mpyg.js";
import { d1n } from "./chunk-e0nmwvd2.js";
import { tne, KWn, cje } from "./chunk-j0tbz6ra.js";
import { T7e } from "./chunk-1jwvas5k.js";
import { K8 } from "./chunk-stzrz9z3.js";
import { za, IRe, vii, Hor } from "./chunk-j4601ec1.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, oe, u, me } from "./chunk-0bqrj5ah.js";
function _e(e, n, r) {
  var s = -1,
    i = e.length,
    d = n.length,
    l = {};
  while (++s < i) {
    var c = s < d ? n[s] : void 0;
    r(l, e[s], c);
  }
  return l;
}
var ie = _e;
function Ce(e, n) {
  return ie(e || [], n || [], Ast);
}
var MUn = Ce;
var Se =
  /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function DUn(e) {
  if (!Se.test(e)) return;
  (a("tengu_git_operation", { operation: b("pr_create") }), T7e()?.add(1));
}
var we = 0,
  B = 1;
class fft {
  ws;
  parseMessage;
  started = !1;
  opened;
  constructor(e, n) {
    this.ws = e;
    this.parseMessage = n;
    ((this.opened = new Promise((s, i) => {
      if (this.ws.readyState === B) s();
      else {
        let d = this.ws,
          l = () => {
            (d.removeEventListener("open", l), d.removeEventListener("error", c), s());
          },
          c = (h) => {
            (d.removeEventListener("open", l),
              d.removeEventListener("error", c),
              Y("error", "mcp_websocket_connect_fail"),
              i(N(h.error ?? h)));
          };
        (d.addEventListener("open", l), d.addEventListener("error", c));
      }
    })),
      this.opened.catch(() => {}));
    let r = this.ws;
    (r.addEventListener("message", this.onBunMessage),
      r.addEventListener("error", this.onBunError),
      r.addEventListener("close", this.onBunClose));
  }
  onclose;
  onerror;
  onmessage;
  onBunMessage = (e) => {
    try {
      let n = typeof e.data === "string" ? e.data : String(e.data);
      if (Buffer.byteLength(n) > K8) {
        (this.handleError(
          new R(
            `MCP server sent a WebSocket message over ${K8 / 1024 / 1024} MiB. Claude Code did not read it and closed the connection.`,
            "mcp websocket message over the cap"
          )
        ),
          this.close().catch(() => {}));
        return;
      }
      let r = te(n),
        s = this.parseMessage(r);
      this.onmessage?.(s);
    } catch (n) {
      this.handleError(n);
    }
  };
  onBunError = () => {
    this.handleError(Error("WebSocket error"));
  };
  onBunClose = () => {
    this.handleCloseCleanup();
  };
  handleError(e) {
    (Y("error", "mcp_websocket_message_fail"), this.onerror?.(N(e)));
  }
  handleCloseCleanup() {
    this.onclose?.();
    let e = this.ws;
    (e.removeEventListener("message", this.onBunMessage),
      e.removeEventListener("error", this.onBunError),
      e.removeEventListener("close", this.onBunClose));
  }
  async start() {
    if (this.started) throw Error("Start can only be called once per transport.");
    if ((await this.opened, this.ws.readyState !== B))
      throw (
        Y("error", "mcp_websocket_start_not_opened"),
        Error("WebSocket is not open. Cannot start transport.")
      );
    this.started = !0;
  }
  async close() {
    if (this.ws.readyState === B || this.ws.readyState === we) this.ws.close();
    this.handleCloseCleanup();
  }
  async send(e) {
    if (this.ws.readyState !== B)
      throw (
        Y("error", "mcp_websocket_send_not_opened"),
        Error("WebSocket is not open. Cannot send message.")
      );
    let n = _(e);
    try {
      this.ws.send(n);
    } catch (r) {
      throw (this.handleError(r), r);
    }
  }
}
var Bae = "CONNECT_SUSPENDED",
  V = 10;
function WDt(e) {
  return { clock: e, awakeStart: e.monotonicNow(), wallStart: e.now() };
}
function GDt({ clock: e, awakeStart: n, wallStart: r }) {
  return `${Math.round(e.now() - r)}ms, ${Math.round(e.monotonicNow() - n)}ms of it awake`;
}
function HUn(e, { clock: n, awakeStart: r, wallStart: s }) {
  if (!(n.now() - s - (n.monotonicNow() - r) > Isi) || !k("tengu_mcp_connect_suspend_redial", !0))
    return;
  return `MCP server "${e}" connection timed out. Your computer went to sleep or its clock changed while connecting.`;
}
async function LUn(e, n, r) {
  let s = Fr(),
    i = await e(),
    d = 0;
  while (d < V && i.type === "failed" && i.errorCode === Bae && n() && Fr() === s)
    (d++,
      se(i.name, `Connecting again after a sleep or a clock change (${d} of at most ${V})`),
      (i = await e()));
  if (d === 0) return i;
  if (i.type !== "failed") g("mcp_connect_suspend_redial");
  else if (i.errorCode !== Bae) f("mcp_connect_suspend_redial", "failed");
  else if ((f("mcp_connect_suspend_redial", "slept_again"), d === V && n())) r();
  return i;
}
var ye = 100,
  Ee = 400,
  ve = 100,
  le = 300,
  be = 600;
function NUn() {
  if (Kg()) throw Error("Claude Code is shutting down; not starting this MCP server process");
}
function zDt(e) {
  let n = bt(() => Te(e));
  return (e.once("exit", () => n()), n);
}
function K(e) {
  return e.exitCode !== null || e.signalCode !== null;
}
async function Te(e) {
  let n = e.pid;
  if (n === void 0 || K(e)) return;
  if (O() === "windows") {
    (t(`[MCP] stdio server process ${n} has no established connection at exit; closing its stdin`),
      await Zen(e));
    return;
  }
  let r = new Promise((i) => {
      e.once("exit", () => i());
    }),
    s = [
      ["SIGINT", ye],
      ["SIGTERM", Ee],
      ["SIGKILL", ve]
    ];
  for (let [i, d] of s) {
    if (K(e)) return;
    t(`[MCP] stdio server process ${n} has no established connection at exit; sending ${i}`);
    try {
      e.kill(i);
    } catch {
      return;
    }
    await Pe(r, d);
  }
}
async function Zen(e) {
  let n = e.pid;
  if (n === void 0 || K(e)) return;
  let r = new Promise((s) => {
    e.once("exit", () => s());
  });
  if ((e.stdin?.end(), await Pe(r, le), K(e))) return;
  (t(
    `[MCP] stdio server process ${n} is still running ${le}ms after stdin closed; terminating its process tree`
  ),
    Dw(n),
    await Pe(r, be));
}
function Ae() {
  return b_() && Wn("tengu_eventual_noodle", !1) === !0;
}
function de(e) {
  return typeof e === "object" && e !== null && "type" in e && e.type === "text";
}
async function $Un(e, n) {
  if (!Ae()) return;
  let r = await n([...e.filter((s) => !de(s)), ...e.filter(de)]);
  if (r.content.every((s) => s.type === "text" && s.text.trim() === "")) {
    if (r.content.length > 0) f("mcp_content_over_structured", "blank_text");
    return;
  }
  return (g("mcp_content_over_structured"), r);
}
function FUn() {
  return k("tengu_serene_teapot", !0) !== !1;
}
var ue = new WeakSet();
function XCs(e) {
  return ue.has(e);
}
function UUn(e, n, r) {
  let s = new URL(r).href,
    i = !1;
  return async (d, l) => {
    if (new URL(d).href !== s) return e(d, l);
    if (i && l?.method === "GET" && !new Headers(l.headers).has("last-event-id")) {
      se(
        n,
        "Listen-stream GET not sent: the server's last answer had an Allow header that does not list GET, so Claude Code answered the GET with 405 itself"
      );
      let C = new Response(null, { status: 405, statusText: "Method Not Allowed" });
      return (ue.add(C), C);
    }
    let c = await e(d, l),
      h = c.headers.get("allow");
    return ((i = h !== null && !h.split(",").some((C) => C.trim().toUpperCase() === "GET")), c);
  };
}
var ce = 1000,
  Re = 30000,
  Me = {
    now: () => performance.now(),
    arm: (e, n) => {
      let r = setTimeout(e, n).unref();
      return () => clearTimeout(r);
    }
  };
function q8e(e, n, r = Me) {
  let s = !0,
    i,
    d = Number.NEGATIVE_INFINITY,
    l = ce,
    c = () => {
      ((l = ce), (s = !0));
    },
    h = () => {
      let y = i;
      if (((i = void 0), y === void 0)) {
        c();
        return;
      }
      (async () => n(y.cause))()
        .catch((A) => {
          se(e.name, `list_changed refetch failed: ${ms(A, e.config)}`);
        })
        .finally(() => {
          if (((d = r.now()), y.settle(), i === void 0)) {
            c();
            return;
          }
          (T(), (l = Math.min(l * 2, Re)));
        });
    },
    C = () => {
      if (aEe(e)) {
        (i?.settle(), (i = void 0), c());
        return;
      }
      h();
    },
    T = () => {
      s = !1;
      let y = d + l - r.now();
      if (y > 0) r.arm(C, y);
      else h();
    };
  return (y) => {
    let A = i;
    if (A === void 0) {
      let v = () => {},
        G = new Promise((P) => (v = P));
      if (((A = i = { cause: y, settled: G, settle: v }), s)) T();
    } else A.cause = y;
    return A.settled;
  };
}
var ke = p(() =>
    u({
      server_instructions: o().optional(),
      server_instructions_by_server: me(o(), o()).optional(),
      tools: me(o(), o()).optional(),
      search_hints: me(o(), o()).optional(),
      param_descriptions: me(o(), me(o(), o())).optional(),
      prompts: me(o(), o()).optional(),
      skills: me(o(), o()).optional()
    })
  ),
  Oe = p(() => me(o(), oe()));
function Y8e(e) {
  if (!e.pluginSource) return;
  let { name: n, marketplace: r } = On(e.pluginSource);
  if (!md(r) && !mot(n, r)) return;
  let s = k("tengu_official_plugin_prompt_overrides", {}),
    i = Oe().safeParse(s);
  if (!i.success) {
    t("tengu_official_plugin_prompt_overrides: GB payload is not an object; ignoring", {
      level: "error"
    });
    return;
  }
  let d = i.data[n];
  if (d === void 0) return;
  let l = ke().safeParse(d);
  if (!l.success) {
    t(
      `tengu_official_plugin_prompt_overrides: entry for '${n}' failed schema (${l.error.issues[0]?.message}); using baked-in text`,
      { level: "error" }
    );
    return;
  }
  let c = l.data;
  if (Object.keys(c).length === 0) return;
  return {
    ...c,
    server_instructions_by_server: D(c.server_instructions_by_server),
    tools: D(c.tools),
    search_hints: D(c.search_hints),
    param_descriptions: D(c.param_descriptions),
    prompts: D(c.prompts),
    skills: D(c.skills)
  };
}
function D(e) {
  if (e === void 0) return;
  let n = Object.create(null);
  return Object.assign(n, e);
}
function BUn(e, n) {
  if (!e) return;
  let r = e.server_instructions_by_server;
  if (r) {
    let s = Xbe(n),
      i = s && r[s.serverName];
    if (i !== void 0) return i;
  }
  return e.server_instructions;
}
function jUn(e, n) {
  if (!n || !e.properties) return e;
  let r = { ...e.properties },
    s = !1;
  for (let [i, d] of Object.entries(n)) {
    let l = r[i];
    if (l !== null && typeof l === "object") ((r[i] = { ...l, description: d }), (s = !0));
  }
  if (!s) return e;
  return { ...e, properties: r };
}
var Ie = new W(() => new Map());
function Ne() {
  return Ie.of(U().host);
}
function WUn(e, n, r) {
  let s = Ne().get(e);
  if (s === void 0 || !s.toolNames.has(n)) return { mayOverlap: !1, call: r };
  return {
    mayOverlap: !0,
    call: (i, d, ...l) => s.slots.run(d.abortController.signal, () => r(i, d, ...l))
  };
}
var wbo = new Set([
  "ECONNREFUSED",
  "ConnectionRefused",
  "ENOTFOUND",
  "EAI_AGAIN",
  "FailedToOpenSocket",
  "ERR_PROXY_TUNNEL"
]);
function GUn(e, n, r) {
  let s = { started: 0, ranNothing: [] },
    i = e.send.bind(e);
  return (
    (e.send = (d, l) => {
      if (typeof d !== "object" || d === null || !("method" in d) || d.method !== "tools/call")
        return i(d, l);
      let c = ++s.started,
        h = "params" in d ? d.params : void 0,
        C = typeof h === "object" && h !== null && "_meta" in h ? h._meta : void 0,
        T =
          typeof C === "object" && C !== null && "claudecode/toolUseId" in C
            ? C["claudecode/toolUseId"]
            : void 0,
        y = typeof T === "string" ? [...r].filter((v) => v.toolUseId === T) : [];
      for (let v of y) if (v.ownSends !== void 0) v.ownSends.started++;
      let A = y.length === 1 ? y[0]?.ownSends : void 0;
      return i(d, l).catch((v) => {
        if (wbo.has(E(v) ?? "") || (v instanceof Error && n(v))) {
          if ((s.ranNothing.push(c), A !== void 0)) A.ranNothing++;
        }
        throw v;
      });
    }),
    s
  );
}
function zUn(e, n, r) {
  if (r !== void 0 && r.started > 0) return r.ranNothing === r.started;
  if (e === void 0 || n === void 0) return !1;
  let s = e.started - n;
  return s > 0 && F(e.ranNothing, (i) => i > n) === s;
}
var KDt = {
  getValidator(e) {
    if (qi().claim("mcp_output_schema_unchecked"))
      t(
        "An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it",
        { level: "warn" }
      );
    return (n) => ({ valid: !0, data: n, errorMessage: void 0 });
  }
};
function pe(e) {
  return (
    e.scope === "dynamic" &&
    !jh(e) &&
    hd.bridgeCarrier === void 0 &&
    "url" in e &&
    typeof e.url === "string" &&
    vSn(e.url)
  );
}
function KUn(e, n) {
  return pe(e) ? n : Jtt(n);
}
function VUn(e, n) {
  if (n === void 0 || !Object.hasOwn(n, Kzt) || !pe(e)) return n;
  return { ...n, [Xtt]: ker };
}
class q {
  byMessageId = new Map();
}
function qUn(e, n) {
  if (!n) return {};
  let r = e.get(q).byMessageId.get(n);
  return {
    ["anthropic/memory.response_id"]: n,
    ...(r !== void 0 && { ["anthropic/memory.chain"]: r })
  };
}
function YUn(e, n, r) {
  if (!n || !r || !("anthropic/memory.chain" in r)) return;
  let s = r["anthropic/memory.chain"],
    i = e.get(q).byMessageId;
  if ((i.delete(n), typeof s !== "string" || s.length > 16384)) return;
  i.set(n, s);
  for (let d of i.keys()) {
    if (i.size <= 8) break;
    i.delete(d);
  }
}
function X8e(e) {
  return async (n, r) => {
    let s = await e(n, r);
    if (![301, 302, 303, 307, 308].includes(s.status) || !s.headers.has("Location")) return s;
    let i = new Headers(s.headers);
    return (
      i.delete("Location"),
      new Response(s.body, { status: s.status, statusText: s.statusText, headers: i })
    );
  };
}
function XUn() {
  let e = gn();
  if (!e) return;
  return {
    accountUuid: e.accountUuid,
    organizationUuid: e.organizationUuid,
    credentialInstalled: nf() || xqr()
  };
}
function JUn(e, n, r) {
  let s = () => import("./chunk-y81mnd7z.js"),
    i = (h, C) => ({
      listed: n,
      input: h,
      toolPermissionContext: ae(C),
      callTool: r(C),
      signal: C.abortController.signal,
      session: C.session
    }),
    d = e.validateInput;
  e.validateInput = async (h, C) => (await s()).validateToolFileInputs(n, d, h, C);
  let l = e.call;
  e.call = async (h, C, ...T) => {
    let { argsWithFileInputs: y } = await s(),
      A = await y({ ...i(h ?? {}, C), toolUseId: C.toolUseId });
    return l(A, C, ...T);
  };
  let c = e.askInputPreparer;
  e.askInputPreparer = async (h, C, T) =>
    (await s()).fileInputAskPreparer({ ...i(h, C), toolUseId: T }) ?? c?.(h, C, T);
}
var QUn = "claudecode/chromeSite",
  fe = 253,
  X = /^[a-z0-9._-]+$/,
  Le = /^\[[0-9a-f:.]+\]$/;
function Z(e) {
  return e.length <= fe && X.test(e);
}
function ZUn(e, n) {
  if (
    e.name !== za ||
    !H$(e.config) ||
    !H(n) ||
    (n.chrome_site === void 0 && n.chrome_site_port === void 0)
  )
    return;
  let { chrome_site: r, chrome_site_port: s } = n;
  if (
    typeof r !== "string" ||
    r.length > fe ||
    !(X.test(r) || Le.test(r)) ||
    ge(`https://${r}`) !== r ||
    (s !== void 0 && !xe(s))
  )
    return { kind: "unreadable" };
  return {
    kind: "named",
    site: s === void 0 ? r : `${r}:${s}`,
    offersGrant: s === void 0 && X.test(r) && n.chrome_offers_site_grant === "true"
  };
}
function eBn(e, n) {
  let r = h9e(n);
  if (e.kind !== "unreadable") {
    let s = Mft(r, e.site);
    return s && { ...s, decideLocation: "pre-ask" };
  }
  if (r.denied.size === 0) return;
  return {
    behavior: "deny",
    message:
      "Claude in Chrome could not tell which site this call would act on, so it could not check the sites that are denied.",
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: unreadable site",
      classifierApprovable: !1
    },
    decideLocation: "pre-ask"
  };
}
function tBn(e, n, r, s) {
  if (e.kind !== "named") return;
  let { site: i } = e,
    d = De(n, r).some((c) => ge(c) !== i),
    l = !d && e.offersGrant && !Lw(s) && s.forRemoteExecution !== !0;
  return {
    behavior: "ask",
    message: "Claude in Chrome requires permission.",
    decisionReason: {
      type: "other",
      reason: d
        ? `Claude in Chrome action on ${i}, which may also leave that site`
        : `Claude in Chrome action on ${i}`
    },
    ...(l
      ? {
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: OG, ruleContent: i }],
              behavior: "allow",
              destination: "session"
            }
          ]
        }
      : { suppressAlwaysAllowRule: !0 })
  };
}
function xe(e) {
  return (
    typeof e === "string" && /^[0-9]{1,5}$/.test(e) && String(Number(e)) === e && Number(e) <= 65535
  );
}
function ge(e) {
  if (typeof e !== "string" || s1n(e)) return;
  let n = a1n(e);
  return n && f1(n.host);
}
function De(e, n) {
  if (e === "navigate") return [n.url];
  if (e !== "browser_batch" || !Array.isArray(n.actions)) return [];
  return n.actions.flatMap((r) =>
    H(r) && r.name === "navigate" ? [H(r.input) ? r.input.url : void 0] : []
  );
}
var Ue = new Set(v1e.map((e) => e.name)),
  He = "anthropic/chromeWorkerDecides",
  Fe = "claudecode/chromeJudgedSite",
  je = 259,
  ze = 5000;
function nBn(e, n, r) {
  let s = `${jD}${e}`,
    i = new WeakMap();
  return {
    coerceInput: (l) => {
      let c = KWn(l);
      return c === l ? null : { input: c, shapeClass: "chrome_host_only_args_removed" };
    },
    checkPermissions: async (l, c) => {
      d1n(c.options?.messageClientPlatform);
      let h = [],
        C = !1,
        T = !0,
        y = () => J() && _He.peek(c.session)?.host === void 0;
      if (e === "file_upload" && y()) return Q(IRe);
      if (
        e === "file_upload" &&
        n?.[uqs] === !0 &&
        eu(
          { mcpInfo: { serverName: za, toolName: e }, excludedFromModeBypassAllow: () => !0 },
          ae(c)
        ) !== "auto"
      )
        return Q(vii);
      if (e === "navigate") {
        if (typeof l.url !== "string") return j("navigate url is not a string");
        h.push(l.url);
      } else if (e === "browser_batch") {
        if (l.actions !== void 0 && !Array.isArray(l.actions))
          return j("batch actions is not an array");
        for (let S of Array.isArray(l.actions) ? l.actions : []) {
          if (!H(S) || typeof S.name !== "string") return j("unreadable batch item");
          if (S.name === "browser_batch") return j("nested batch");
          if (!Ue.has(S.name)) return j("unrecognized batch item name");
          if (S.name === "file_upload") return Q(y() ? IRe : Hor);
          if (S.name === "navigate") {
            if (!H(S.input) || typeof S.input.url !== "string")
              return j("batch navigate url is not a string");
            if ((h.push(S.input.url), (C = !0), s1n(S.input.url))) T = !1;
          } else if (
            !Hte.has(S.name) ||
            (S.input !== void 0 && !H(S.input)) ||
            !tne(S.name, H(S.input) ? S.input : {})
          )
            T = !1;
        }
      }
      let A = n?.[He] === !0 && r !== void 0 && ae(c).mode !== "plan",
        v = e === "browser_batch" && C && T,
        G = h.filter((S) => !s1n(S)),
        P,
        z = new Map();
      if (G.length > 0) {
        let S = ae(c),
          M = h9e(S);
        for (let I of G) {
          let w = a1n(I);
          if (!w)
            return (
              m("chrome_permission_prompt", "non_web_url"),
              {
                behavior: "deny",
                message:
                  "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
                decisionReason: {
                  type: "safetyCheck",
                  reason: "Claude in Chrome: non-web or unparseable URL",
                  classifierApprovable: !1
                }
              }
            );
          let L = Mft(M, w.host);
          if (L) return (f("chrome_permission_prompt", "domain_rule_denied"), L);
          let x = f1(w.host);
          if (!M.allowed.has(x) && !z.has(x)) z.set(x, w.host);
          P ??= w;
        }
        if (P !== void 0 && z.size === 0 && (e === "navigate" || v)) {
          if (A && e === "navigate" && Z(Oft(P.host))) cje(c, l, P.host, s);
          let I = f1(P.host),
            w = M.sourceOf.get(I) ?? M.sourceOf.get(Oft(I)) ?? "session";
          if (S.chromeClassifierFloorEnabled !== !0)
            return {
              behavior: "allow",
              updatedInput: l,
              decisionReason: {
                type: "rule",
                rule: {
                  source: w,
                  ruleBehavior: "allow",
                  ruleValue: { toolName: OG, ruleContent: P.host }
                }
              }
            };
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: l,
            decisionReason: { type: "other", reason: `Claude in Chrome action on ${P.host}` },
            metadata: { command: { name: s, chrome: { ...P, domainAllowed: !0 } } }
          };
        }
      }
      if (Hte.has(e) && tne(e, l)) return { behavior: "allow", updatedInput: l };
      if (A) {
        let S = !["navigate", "browser_batch", "file_upload"].includes(e) && !Hte.has(e) && l.tabId,
          M =
            typeof S === "number" && c.toolUseId !== void 0 && c.permissionRound !== void 0
              ? await r?.(S, c.abortController.signal)
              : void 0,
          I = M === void 0 ? void 0 : a1n(M),
          w = e === "navigate" ? P : I !== void 0 && I.host.length <= je ? I : void 0,
          L = ae(c),
          x = h9e(L),
          ee = w && Mft(x, w.host);
        if (L.mode === "plan") ;
        else if (M !== void 0 && w === void 0)
          return (
            m("chrome_permission_prompt", "non_web_tab_url"),
            {
              behavior: "deny",
              message:
                "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.",
              decisionReason: {
                type: "safetyCheck",
                reason: "Claude in Chrome: non-web or unparseable tab URL",
                classifierApprovable: !1
              }
            }
          );
        else if (ee) return (f("chrome_permission_prompt", "domain_rule_denied"), ee);
        else if (w !== void 0 && Z(Oft(w.host))) {
          if (M !== void 0) g("chrome_permission_prompt");
          cje(c, l, w.host, s);
          let ne = x.allowed.has(f1(w.host)),
            re = !ne && L.chromeClassifierFloorEnabled === !0 && L.canAutoClassifierRun === !0;
          if (re) i.set(l, w.host);
          return {
            behavior: "ask",
            message: "Claude in Chrome requires permission.",
            updatedInput: l,
            suggestions: re
              ? [
                  {
                    type: "addRules",
                    rules: [{ toolName: OG, ruleContent: w.host }],
                    behavior: "allow",
                    destination: "session"
                  }
                ]
              : void 0,
            decisionReason: { type: "other", reason: `Claude in Chrome action on ${w.host}` },
            metadata: {
              command: {
                name: s,
                description: `Allow Claude in Chrome to ${y9e(e, l)} on ${w.host}?`,
                chrome: { ...w, domainAllowed: ne }
              }
            }
          };
        }
      }
      let he = !J();
      return {
        behavior: "passthrough",
        message: "Claude in Chrome requires permission.",
        suggestions:
          z.size === 1 && (e === "navigate" || v) && he
            ? [
                {
                  type: "addRules",
                  rules: [...z.values()].map((S) => ({ toolName: OG, ruleContent: S })),
                  behavior: "allow",
                  destination: "session"
                }
              ]
            : void 0
      };
    },
    suggestedAllowRule: (l, c) =>
      l.toolName === OG && l.ruleContent !== void 0 && l.ruleContent === i.get(c),
    suppressesAlwaysAllowRule: () => !0,
    ignoresWholeToolAllowRule: () => !0,
    excludedFromAutoModeAllowlist: () => !0,
    excludedFromModeBypassAllow: () => !0
  };
}
async function rBn(e, n, r) {
  try {
    let s = await e(
        "tabs_context_mcp",
        { createIfEmpty: !1 },
        AbortSignal.any([r, AbortSignal.timeout(ze)])
      ),
      i = Array.isArray(s) ? s[0] : void 0,
      d = te(H(i) ? String(i.text) : String(s)),
      l = H(d) ? d.availableTabs : void 0,
      c = Array.isArray(l) ? l.find((h) => H(h) && h.tabId === n) : void 0;
    if (H(c) && typeof c.url === "string" && c.url) return c.url;
    f("chrome_permission_prompt", "tab_url_unresolved_tab_not_listed");
  } catch (s) {
    if (!r.aborted)
      (t(`Claude in Chrome: the tab read failed: ${String(s)}`, { level: "error" }),
        f("chrome_permission_prompt", "tab_url_unresolved_call_threw"));
  }
  return;
}
function oBn({ permissionPhase: e, toolUseId: n, allowGivenBy: r }) {
  let s =
    e?.pipeline !== void 0 &&
    r !== void 0 &&
    r.toolUseId === n &&
    (r.approver === "user" || r.approver === "classifier")
      ? e.checked?.note
      : void 0;
  return typeof s === "string" ? { [Fe]: f1(s) } : void 0;
}
function Q(e) {
  return {
    behavior: "deny",
    message: e,
    decisionReason: {
      type: "safetyCheck",
      reason: "Claude in Chrome: a file_upload that cannot be served",
      classifierApprovable: !1
    }
  };
}
function j(e) {
  return (
    m("chrome_permission_prompt", "unjudgeable_chrome_input"),
    {
      behavior: "deny",
      message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.",
      decisionReason: {
        type: "safetyCheck",
        reason: `Claude in Chrome: ${e}`,
        classifierApprovable: !1
      }
    }
  );
}
export {
  MUn,
  DUn,
  fft,
  Bae,
  WDt,
  GDt,
  HUn,
  LUn,
  NUn,
  zDt,
  Zen,
  $Un,
  FUn,
  XCs,
  UUn,
  q8e,
  Y8e,
  BUn,
  jUn,
  WUn,
  wbo,
  GUn,
  zUn,
  KDt,
  KUn,
  VUn,
  qUn,
  YUn,
  X8e,
  XUn,
  JUn,
  QUn,
  ZUn,
  eBn,
  tBn,
  nBn,
  rBn,
  oBn
};

//# sourceMappingURL=chunk-mk5qemdy.js.map
