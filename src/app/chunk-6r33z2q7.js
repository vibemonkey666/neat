// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ir } from "./chunk-5rw2zfa0.js";
import { c } from "./chunk-acd8w9vv.js";
import { _, bd } from "./chunk-4kxznmzw.js";
import { ss, se } from "./chunk-ewvf3tep.js";
import { yft, PBn, ltn } from "./chunk-bedhwrf8.js";
import { gJ, kme } from "./chunk-jmeqy39x.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { rx } from "./chunk-nzbb091t.js";
class k {
  urlFlows = new Map();
  deps;
  client;
  constructor(e, t) {
    ((this.deps = e), (this.client = t));
  }
  hasCompletionChannel() {
    return this.client?.getProtocolEra?.() !== "modern";
  }
  rebind(e) {
    this.deps = e;
  }
  handle = async (e, t) => {
    let { signal: o } = t,
      { serverName: i, pluginSource: d } = this.deps;
    if (rx({ name: i }) !== void 0) return { action: "cancel" };
    let l = "transportErrorState" in t ? t.transportErrorState : this.deps.transportErrorState;
    if (l) l.pendingElicitations++;
    se(i, `Received elicitation request: ${_(e)}`);
    let { params: s } = e,
      p = F(s);
    a("tengu_mcp_elicitation_shown", { mode: c(p) });
    let u = PBn(i, d);
    try {
      let n = await this.deps.runElicitationHooks(i, u ? bd(s) : s, o);
      if (u && n?.action === "accept")
        se(
          i,
          "An Elicitation hook answered accept. Only a person can accept the questions of a built-in plugin's server of this name, so the question goes to the person"
        );
      else if (n) {
        let w = u ? { action: "cancel" } : n;
        return (
          se(
            i,
            u
              ? `An Elicitation hook answered ${n.action}. The person was not asked, and this server gets cancel: it takes only the person's own accept or decline`
              : `Elicitation resolved by hook: ${_(n)}`
          ),
          a("tengu_mcp_elicitation_response", { mode: c(p), action: c(w.action), byHook: !0 }),
          g("mcp_elicitation_handle"),
          w
        );
      }
      let f = s.mode === "url" && this.hasCompletionChannel() ? s.elicitationId : void 0,
        { result: r, flow: q } = await this.ask(s, o, p, f, l),
        C = "requestedSchema" in s ? s.requestedSchema.properties : void 0,
        M =
          r.content === void 0
            ? r
            : {
                ...r,
                content: Ir(r.content, (w, S) => {
                  let v = C?.[S];
                  return typeof v === "object" && v !== null && ltn(i, d, S, v) ? "[masked]" : w;
                })
              };
      se(i, `Elicitation response: ${_(M)}`);
      let R = u ? bd(r) : r,
        h = await this.deps.runElicitationResultHooks(i, R, o, p, f),
        y = r.action === "accept" && h.action !== "accept",
        P = y ? { action: "cancel" } : r;
      if (u && h !== R)
        se(
          i,
          y
            ? `An ElicitationResult hook answered ${h.action}, so the person's accept goes to this server as cancel`
            : `An ElicitationResult hook answered ${h.action}. For this server a hook can only turn the person's accept into cancel, so the server gets the person's own answer: ${r.action}`
        );
      let E = u ? P : h;
      if (E.action !== r.action)
        a("tengu_mcp_elicitation_result_hook", { mode: c(p), action: c(E.action) });
      if (s.mode === "url" && r.action === "accept" && E.action !== "accept")
        this.abandonWaiting(f, q);
      return (g("mcp_elicitation_handle"), E);
    } catch (n) {
      return (
        ss(i, `Elicitation error: ${n}`),
        m("mcp_elicitation_handle", "handler_error"),
        { action: "cancel" }
      );
    } finally {
      if (l) (l.pendingElicitations--, (l.lastElicitationClosedAt = Date.now()));
    }
  };
  complete = (e) => {
    let t = this.urlFlows.get(e);
    if (!t || t.size === 0) return !1;
    for (let o of t) ((o.completed = !0), o.closeWaiting?.());
    return !0;
  };
  abandonWaiting(e, t) {
    (t?.closeWaiting?.(), this.forget(e, t));
  }
  async ask(e, t, o, i, d) {
    if (t.aborted) return { result: { action: "cancel" }, flow: void 0 };
    let { serverName: l, pluginSource: s, requestDialog: p } = this.deps,
      u = yft(l, s),
      n;
    if (i !== void 0) {
      n = { completed: !1, closeWaiting: void 0 };
      let r = this.urlFlows.get(i);
      if (r) r.add(n);
      else this.urlFlows.set(i, new Set([n]));
    }
    let f = await p(
      gJ,
      {
        serverName: l,
        ...(s !== void 0 && { pluginSource: s }),
        params: e,
        ...(e.mode === "url" && i === void 0 && { userConfirmsCompletion: !0 })
      },
      { place: "under", signal: t, ...(u && { alsoHideWhile: ["draft"] }) }
    );
    if (!t.aborted) a("tengu_mcp_elicitation_response", { mode: c(o), action: c(f.action) });
    if (e.mode === "url" && f.action === "accept" && n)
      if (n.completed) this.forget(i, n);
      else this.showWaiting(e, i, n, t, d);
    else this.forget(i, n);
    return { result: f, flow: n };
  }
  async showWaiting(e, t, o, i, d) {
    let l = new AbortController();
    if (((o.closeWaiting = () => l.abort()), d)) d.pendingElicitations++;
    try {
      await this.deps.requestDialog(
        kme,
        {
          serverName: this.deps.serverName,
          params: e,
          waitingState: { actionLabel: "Skip confirmation" }
        },
        { signal: AbortSignal.any([l.signal, i]), succeeds: !0 }
      );
    } finally {
      if (d) (d.pendingElicitations--, (d.lastElicitationClosedAt = Date.now()));
    }
    this.forget(t, o);
  }
  forget(e, t) {
    if (e === void 0 || t === void 0) return;
    let o = this.urlFlows.get(e);
    if (!o) return;
    if ((o.delete(t), o.size === 0)) this.urlFlows.delete(e);
  }
}
function F(e) {
  return e.mode === "url" ? "url" : "form";
}
var b = new WeakMap();
function tHt(e, t) {
  let o = b.get(e);
  if (o) return (o.rebind(t), o);
  let i = new k(t, e);
  return (b.set(e, i), i);
}
export { tHt };

//# sourceMappingURL=chunk-6r33z2q7.js.map
