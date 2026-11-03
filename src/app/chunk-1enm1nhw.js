// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import {
  aOe,
  Ate,
  ea,
  dOe,
  jFn,
  WFn,
  tEe,
  nEe,
  uJ,
  ien,
  iTr,
  $8e,
  _Dt,
  QBe,
  uTr,
  Mi
} from "./chunk-0szbzt7f.js";
import { w3e, JX, tOt, HJt, jHn, LJt, WHn, GHn } from "./chunk-fmf16p94.js";
class g {
  constructor(e) {
    this._server = e;
  }
  requestStream(e, t, i) {
    return this._server.requestStream(e, t, i);
  }
  createMessageStream(e, t) {
    let i = this._server.getClientCapabilities();
    if ((e.tools || e.toolChoice) && !i?.sampling?.tools)
      throw Error("Client does not support sampling tools capability.");
    if (e.messages.length > 0) {
      let s = e.messages[e.messages.length - 1],
        o = Array.isArray(s.content) ? s.content : [s.content],
        n = o.some((a) => a.type === "tool_result"),
        r = e.messages.length > 1 ? e.messages[e.messages.length - 2] : void 0,
        h = r ? (Array.isArray(r.content) ? r.content : [r.content]) : [],
        c = h.some((a) => a.type === "tool_use");
      if (n) {
        if (o.some((a) => a.type !== "tool_result"))
          throw Error("The last message must contain only tool_result content if any is present");
        if (!c)
          throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (c) {
        let a = new Set(h.filter((u) => u.type === "tool_use").map((u) => u.id)),
          l = new Set(o.filter((u) => u.type === "tool_result").map((u) => u.toolUseId));
        if (a.size !== l.size || ![...a].every((u) => l.has(u)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match"
          );
      }
    }
    return this.requestStream({ method: "sampling/createMessage", params: e }, $8e, t);
  }
  elicitInputStream(e, t) {
    let i = this._server.getClientCapabilities(),
      s = e.mode ?? "form";
    switch (s) {
      case "url": {
        if (!i?.elicitation?.url) throw Error("Client does not support url elicitation.");
        break;
      }
      case "form": {
        if (!i?.elicitation?.form) throw Error("Client does not support form elicitation.");
        break;
      }
    }
    let o = s === "form" && e.mode === void 0 ? { ...e, mode: "form" } : e;
    return this.requestStream({ method: "elicitation/create", params: o }, QBe, t);
  }
  async getTask(e, t) {
    return this._server.getTask({ taskId: e }, t);
  }
  async getTaskResult(e, t, i) {
    return this._server.getTaskResult({ taskId: e }, t, i);
  }
  async listTasks(e, t) {
    return this._server.listTasks(e ? { cursor: e } : void 0, t);
  }
  async cancelTask(e, t) {
    return this._server.cancelTask({ taskId: e }, t);
  }
}
class Qpe extends HJt {
  constructor(e, t) {
    super(t);
    if (
      ((this._serverInfo = e),
      (this._loggingLevels = new Map()),
      (this.LOG_LEVEL_SEVERITY = new Map(ien.options.map((i, s) => [i, s]))),
      (this.isMessageIgnored = (i, s) => {
        let o = this._loggingLevels.get(s);
        return o ? this.LOG_LEVEL_SEVERITY.get(i) < this.LOG_LEVEL_SEVERITY.get(o) : !1;
      }),
      (this._capabilities = t?.capabilities ?? {}),
      (this._instructions = t?.instructions),
      (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new LJt()),
      this.setRequestHandler(jFn, (i) => this._oninitialize(i)),
      this.setNotificationHandler(WFn, () => this.oninitialized?.()),
      this._capabilities.logging)
    )
      this.setRequestHandler(iTr, async (i, s) => {
        let o = s.sessionId || s.requestInfo?.headers["mcp-session-id"] || void 0,
          { level: n } = i.params,
          r = ien.safeParse(n);
        if (r.success) this._loggingLevels.set(o, r.data);
        return {};
      });
  }
  get experimental() {
    if (!this._experimental) this._experimental = { tasks: new g(this) };
    return this._experimental;
  }
  registerCapabilities(e) {
    if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
    this._capabilities = jHn(this._capabilities, e);
  }
  setRequestHandler(e, t) {
    let s = tOt(e)?.method;
    if (!s) throw Error("Schema is missing a method literal");
    let o;
    if (w3e(s)) {
      let r = s;
      o = r._zod?.def?.value ?? r.value;
    } else {
      let r = s;
      o = r._def?.value ?? r.value;
    }
    if (typeof o !== "string") throw Error("Schema method literal must be a string");
    if (o === "tools/call") {
      let r = async (h, c) => {
        let a = JX(uJ, h);
        if (!a.success) {
          let p = a.error instanceof Error ? a.error.message : String(a.error);
          throw new Mi(ea.InvalidParams, `Invalid tools/call request: ${p}`);
        }
        let { params: l } = a.data,
          u = await Promise.resolve(t(h, c));
        if (l.task) {
          let p = JX(tEe, u);
          if (!p.success) {
            let d = p.error instanceof Error ? p.error.message : String(p.error);
            throw new Mi(ea.InvalidParams, `Invalid task creation result: ${d}`);
          }
          return p.data;
        }
        let f = JX(nEe, u);
        if (!f.success) {
          let p = f.error instanceof Error ? f.error.message : String(f.error);
          throw new Mi(ea.InvalidParams, `Invalid tools/call result: ${p}`);
        }
        return f.data;
      };
      return super.setRequestHandler(e, r);
    }
    return super.setRequestHandler(e, t);
  }
  assertCapabilityForMethod(e) {
    switch (e) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling)
          throw Error(`Client does not support sampling (required for ${e})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation)
          throw Error(`Client does not support elicitation (required for ${e})`);
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots)
          throw Error(`Client does not support listing roots (required for ${e})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(e) {
    switch (e) {
      case "notifications/message":
        if (!this._capabilities.logging)
          throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources)
          throw Error(`Server does not support notifying about resources (required for ${e})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools)
          throw Error(`Server does not support notifying of tool list changes (required for ${e})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts)
          throw Error(
            `Server does not support notifying of prompt list changes (required for ${e})`
          );
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error(`Client does not support URL elicitation (required for ${e})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(e) {
    if (!this._capabilities) return;
    switch (e) {
      case "completion/complete":
        if (!this._capabilities.completions)
          throw Error(`Server does not support completions (required for ${e})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging)
          throw Error(`Server does not support logging (required for ${e})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts)
          throw Error(`Server does not support prompts (required for ${e})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources)
          throw Error(`Server does not support resources (required for ${e})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools)
          throw Error(`Server does not support tools (required for ${e})`);
        break;
      case "tasks/get":
      case "tasks/list":
      case "tasks/result":
      case "tasks/cancel":
        if (!this._capabilities.tasks)
          throw Error(`Server does not support tasks capability (required for ${e})`);
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  assertTaskCapability(e) {
    GHn(this._clientCapabilities?.tasks?.requests, e, "Client");
  }
  assertTaskHandlerCapability(e) {
    if (!this._capabilities) return;
    WHn(this._capabilities.tasks?.requests, e, "Server");
  }
  async _oninitialize(e) {
    let t = e.params.protocolVersion;
    return (
      (this._clientCapabilities = e.params.capabilities),
      (this._clientVersion = e.params.clientInfo),
      {
        protocolVersion: Ate.includes(t) ? t : aOe,
        capabilities: this.getCapabilities(),
        serverInfo: this._serverInfo,
        ...(this._instructions && { instructions: this._instructions })
      }
    );
  }
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  getClientVersion() {
    return this._clientVersion;
  }
  getCapabilities() {
    return this._capabilities;
  }
  async ping() {
    return this.request({ method: "ping" }, dOe);
  }
  async createMessage(e, t) {
    if (e.tools || e.toolChoice) {
      if (!this._clientCapabilities?.sampling?.tools)
        throw Error("Client does not support sampling tools capability.");
    }
    if (e.messages.length > 0) {
      let i = e.messages[e.messages.length - 1],
        s = Array.isArray(i.content) ? i.content : [i.content],
        o = s.some((c) => c.type === "tool_result"),
        n = e.messages.length > 1 ? e.messages[e.messages.length - 2] : void 0,
        r = n ? (Array.isArray(n.content) ? n.content : [n.content]) : [],
        h = r.some((c) => c.type === "tool_use");
      if (o) {
        if (s.some((c) => c.type !== "tool_result"))
          throw Error("The last message must contain only tool_result content if any is present");
        if (!h)
          throw Error("tool_result blocks are not matching any tool_use from the previous message");
      }
      if (h) {
        let c = new Set(r.filter((l) => l.type === "tool_use").map((l) => l.id)),
          a = new Set(s.filter((l) => l.type === "tool_result").map((l) => l.toolUseId));
        if (c.size !== a.size || ![...c].every((l) => a.has(l)))
          throw Error(
            "ids of tool_result blocks and tool_use blocks from previous message do not match"
          );
      }
    }
    if (e.tools) return this.request({ method: "sampling/createMessage", params: e }, _Dt, t);
    return this.request({ method: "sampling/createMessage", params: e }, $8e, t);
  }
  async elicitInput(e, t) {
    switch (e.mode ?? "form") {
      case "url": {
        if (!this._clientCapabilities?.elicitation?.url)
          throw Error("Client does not support url elicitation.");
        let s = e;
        return this.request({ method: "elicitation/create", params: s }, QBe, t);
      }
      case "form": {
        if (!this._clientCapabilities?.elicitation?.form)
          throw Error("Client does not support form elicitation.");
        let s = e.mode === "form" ? e : { ...e, mode: "form" },
          o = await this.request({ method: "elicitation/create", params: s }, QBe, t);
        if (o.action === "accept" && o.content && s.requestedSchema)
          try {
            let r = this._jsonSchemaValidator.getValidator(s.requestedSchema)(o.content);
            if (!r.valid)
              throw new Mi(
                ea.InvalidParams,
                `Elicitation response content does not match requested schema: ${r.errorMessage}`
              );
          } catch (n) {
            if (n instanceof Mi) throw n;
            throw new Mi(
              ea.InternalError,
              `Error validating elicitation response: ${n instanceof Error ? n.message : String(n)}`
            );
          }
        return o;
      }
    }
  }
  createElicitationCompletionNotifier(e, t) {
    if (!this._clientCapabilities?.elicitation?.url)
      throw Error(
        "Client does not support URL elicitation (required for notifications/elicitation/complete)"
      );
    return () =>
      this.notification(
        { method: "notifications/elicitation/complete", params: { elicitationId: e } },
        t
      );
  }
  async listRoots(e, t) {
    return this.request({ method: "roots/list", params: e }, uTr, t);
  }
  async sendLoggingMessage(e, t) {
    if (this._capabilities.logging) {
      if (!this.isMessageIgnored(e.level, t))
        return this.notification({ method: "notifications/message", params: e });
    }
  }
  async sendResourceUpdated(e) {
    return this.notification({ method: "notifications/resources/updated", params: e });
  }
  async sendResourceListChanged() {
    return this.notification({ method: "notifications/resources/list_changed" });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
}
export { Qpe };

//# sourceMappingURL=chunk-1enm1nhw.js.map
