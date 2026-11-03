// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Kt } from "./chunk-6bbdndfe.js";
import { De } from "./chunk-2qx8pe6s.js";
import { q, DXr } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { Ye, Xd, Ke, d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { _, te, ei, t } from "./chunk-4kxznmzw.js";
import { Ur, yYt } from "./chunk-45h8cn90.js";
import { re } from "./chunk-a16y5hcz.js";
import { K3r, p } from "./chunk-qmkm2x59.js";
import { oPs, ivo, $9e, F9e } from "./chunk-mam24wdr.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { An, ff, r6o, Qbn, o6o, Zbn, s6o, nSn, u6o } from "./chunk-at88wjsn.js";
import { Tse } from "./chunk-63a6mqbs.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { vj, Nh } from "./chunk-ajtyjx88.js";
import { M7s, TZn, G7s, z7s, K7s, AZn } from "./chunk-tzrn3e6a.js";
import { Y, D$e } from "./chunk-arw2bgak.js";
import { No } from "./chunk-8r2m7vfp.js";
import { bM } from "./chunk-5rw2zfa0.js";
import { Wg } from "./chunk-d54avynm.js";
import { Ear, _ci } from "./chunk-tcvjb2c0.js";
import { QYs } from "./chunk-bbw420pv.js";
import { Pai, Iai, yI, v8o, k8o } from "./chunk-38g9s4wc.js";
import { iSn } from "./chunk-t86k189s.js";
import { J9s } from "./chunk-wany0nxw.js";
import { ns } from "./chunk-g82naabm.js";
import { nOo, kLr, FT } from "./chunk-zg0g4fdz.js";
import { ade } from "./chunk-6h7ejyet.js";
import { cBn } from "./chunk-j8djan8g.js";
import { KP, jG } from "./chunk-d5zj5299.js";
import { W8 } from "./chunk-39ayby14.js";
import { SEo, HRr, wEo, zOe, y1, Ele } from "./chunk-j0tbz6ra.js";
import { qde, R8n, K_t, x8n } from "./chunk-mrftwq54.js";
import { w1t, T8, $ze, ze } from "./chunk-1ww4jg8j.js";
import { BBs, PLr } from "./chunk-fnsjs1v2.js";
import { r_r, fIt, s_r, Uhs, Bhs } from "./chunk-6wsbfyqy.js";
import { F3e, Z6 } from "./chunk-xcgje7f7.js";
import { lae, VMn } from "./chunk-gwrs245d.js";
import { Gpe } from "./chunk-9t9m4g61.js";
import { g7t, h7t, Amo, y7t } from "./chunk-z1pyxaz3.js";
import { wfn } from "./chunk-4072fsq4.js";
import { Ts } from "./chunk-s6nf0zf1.js";
import { qn } from "./chunk-0ex22bw7.js";
import { ULe } from "./chunk-wdgmsxyg.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { H } from "./chunk-p8tprgqa.js";
import { pC, UZ, oe, u } from "./chunk-0bqrj5ah.js";
import { randomUUID as D } from "crypto";
var I = (e) => nSn().options.some((s) => s === e.subtype);
var Q = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
function Qwe(e) {
  return typeof e === "string" && Q.test(e) ? e : void 0;
}
var G = [
    "interrupt",
    "can_use_tool",
    "initialize",
    "set_permission_mode",
    "set_model",
    "set_max_thinking_tokens",
    "rename_session",
    "set_color",
    "mcp_status",
    "get_context_usage",
    "get_session_cost",
    "list_models",
    "get_usage",
    "get_memory_dialog",
    "get_skills_dialog",
    "get_chrome_dialog",
    "get_chrome_browsers",
    "select_chrome_browser",
    "get_sandbox_dialog",
    "get_status",
    "export_conversation",
    "list_cloud_sessions",
    "get_cloud_session",
    "get_cloud_session_transcript",
    "get_binary_version",
    "mcp_call",
    "file_suggestions",
    "hook_callback",
    "mcp_message",
    "rewind_files",
    "cancel_async_message",
    "read_file",
    "list_directory",
    "get_workspace_diff",
    "get_plan",
    "seed_read_state",
    "mcp_set_servers",
    "register_repo_root",
    "reload_plugins",
    "reload_skills",
    "reload_output_styles",
    "mcp_reconnect",
    "mcp_toggle",
    "set_mcp_permission_mode_override",
    "set_chrome_browser_hints",
    "set_prompt_suggestions_paused",
    "set_cwd",
    "claim_session",
    "register_device_hooks",
    "upload_device_hook_template",
    "message_rated",
    "oauth_token_refresh",
    "host_auth_token_refresh",
    "stop_task",
    "background_tasks",
    "get_task_output",
    "apply_flag_settings",
    "get_settings",
    "get_hooks_listing",
    "update_settings",
    "elicitation",
    "request_user_dialog",
    "submit_feedback",
    "submit_survey_feedback",
    "remote_tools_announce",
    "remote_tool_call",
    "remote_plumbing_call",
    "remote_tools_probe",
    "remote_tools_reannounce",
    "ui_attach",
    "ui_detach",
    "ui_render",
    "ui_press",
    "ui_client_module",
    "ui_client_press",
    "ui_message",
    "ui_client_fault",
    "remote_control_work_secret",
    "turn_handoff",
    "list_permission_rules",
    "mcp_read_resource",
    "ui_input",
    "ui_select",
    "ui_panes",
    "ui_pane_show",
    "ui_pane_focus",
    "ui_close",
    "ui_scroll",
    "ui_focus",
    "ui_prompt_edit",
    "ui_prompt_autocomplete",
    "ui_copy",
    "ui_prompt_read",
    "ui_prompt_fill",
    "ui_prompt_suggest",
    "ui_read_selection"
  ],
  V = new Set(G);
function uIt(e) {
  return typeof e === "string" && V.has(e) ? e : void 0;
}
function zX(e, s) {
  return { [`${e}_${s}`]: !0 };
}
function Xyr(e) {
  let s = Array.isArray(e?.updatedPermissions) ? e.updatedPermissions : [],
    n =
      e?.behavior === "deny"
        ? "deny"
        : e?.behavior !== "allow"
          ? "other"
          : s.length === 0
            ? "allow_once"
            : "allow_with_updates",
    r = (o) =>
      n === "allow_with_updates" && s.some((h) => typeof h === "object" && h !== null && o(h));
  return {
    answer_kind: n,
    ...zX("answer_kind", n),
    ...(r(
      (o) => (o.type === "addRules" || o.type === "replaceRules") && o.behavior === "allow"
    ) && { answer_updates_add_allow_rule: !0 }),
    ...(r((o) => o.type === "setMode") && { answer_updates_set_mode: !0 }),
    ...(r((o) => o.type === "addDirectories") && { answer_updates_add_directories: !0 })
  };
}
function Cdt(e) {
  return Math.round(performance.now() - e);
}
function E(e, s) {
  let n = R8n(e, s);
  return n === void 0 ? {} : { dialog_source: cn(n) };
}
var X = 30000,
  Z = 30000,
  ee = 45000,
  se = new Set(["oauth_token_refresh", "host_auth_token_refresh", "remote_control_work_secret"]),
  j = new Set(["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN"]),
  ne = 300000,
  ie = 70000,
  ae = 0.01,
  ue = 262144,
  de = 1000,
  le = p(() => BBs(u6o())),
  ce = 268435456;
function N(e) {
  return `Error: stream-json input carried over ${Math.round(e / 1024 / 1024)}M characters with no newline. Each stream-json message must be a single newline-terminated JSON line: either the producer is not newline-terminating its messages, or one message exceeded this budget.`;
}
var pe = 64,
  fe = 1048576,
  T = '"control_response"',
  K = 512;
function x(e) {
  let s = ade().safeParse(e);
  if (!s.success) return null;
  return (typeof e === "object" && e !== null ? Object.keys(e).length : 0) > 0 &&
    Object.keys(s.data).length === 0
    ? null
    : s.data;
}
function W(e) {
  let s = ei(re(e, 4096), { maxCodeUnits: 512 });
  return e.length > 512 ? `${s}\u2026 [${e.length} chars total]` : s;
}
function M(e) {
  return typeof e === "string"
    ? ei(re(e, 4096), { maxCodeUnits: 200 })
    : "a non-string error field";
}
function he(e, s) {
  if (e === "delivered" || s === "accepted") return "delivered";
  if (e === "indeterminate" || s === "indeterminate") return "indeterminate";
  return s === "sending" ? "sending" : "queued";
}
function me(e) {
  return typeof e === "object" && e !== null && "subtype" in e ? e.subtype : void 0;
}
function _e(e) {
  switch (e) {
    case "delivered":
      return "delivered";
    case "queued":
      return "queued";
    case "sending":
      return "in_flight";
    case "indeterminate":
      return "indeterminate";
  }
}
function F(e, s) {
  if (e instanceof Xd) return "stream_closed";
  if (e instanceof pC) return "parse_failed";
  return s.aborted ? "timeout" : "aborted";
}
class Zwe {
  input;
  replayUserMessages;
  maxLineChars;
  isRemoteTransport() {
    return !1;
  }
  uiSurfaceFrameOf(e, s) {
    let n = this.redactsWhatItPersists();
    return this.isRemoteTransport()
      ? {
          isRemoteTransport: !0,
          redactsWhatItPersists: n,
          isAnySurfaceAttached: s,
          createdAt: void 0,
          sessionWriters: void 0,
          isAtFloor: !1,
          leavesBelowFloor: !1
        }
      : { isRemoteTransport: !1, redactsWhatItPersists: n, isAnySurfaceAttached: s };
  }
  surfaceRequestJudgedAt(e) {
    let s = this.surfaceRequestsJudgedAt.get(e) ?? Date.now();
    return (this.surfaceRequestsJudgedAt.set(e, s), s);
  }
  surfaceRequestsJudgedAt = new WeakMap();
  redactsWhatItPersists() {
    return Ear({
      hostedWorker: this.isHostedWorker,
      transportPersists: this.persistsOutboundFrames
    });
  }
  uiSurfaceChannel() {
    return {
      redactsWhatItPersists: this.redactsWhatItPersists(),
      isRemoteTransport: this.isRemoteTransport(),
      sessionWriters: this.sessionWriters()
    };
  }
  sessionWriters() {
    return;
  }
  surfaceClientAttached(e, s) {
    return !0;
  }
  controlRequestEnded(e) {}
  answersSurfaceRefusal(e) {
    return !0;
  }
  surfaceSenderStands(e) {
    return !0;
  }
  setSurfaceRoster(e) {}
  setSubscribersReportedListener(e) {}
  taskHoldSince() {
    return;
  }
  structuredInput;
  pendingRequests = new Map();
  requestPending = De();
  sdkHostHookGeneration = 0;
  retiredHostHookAnswer;
  deviceRequests = new Map();
  publishedPendingActionDetails = new Map();
  backgroundPromptIds = new Set();
  flipBackLeftToUnpublishedAsk = !1;
  streamCloseInterruptRequestIds = new Set();
  hostDialogAttestations = new Map();
  timedOutUserDialogs = new Map();
  unansweredSettleHandlers = new Map();
  dialogsANewPromptCloses = new Set();
  restoredWorkerState = Promise.resolve(null);
  rereadWorkerState() {
    return Promise.resolve(null);
  }
  readAgentMetadataEvents(e, s) {
    return Promise.resolve(null);
  }
  readProjectsBinding() {
    return Promise.resolve({ read: !0, assertion: void 0 });
  }
  workerEpoch() {
    return 0;
  }
  hydratePrefetch = Promise.resolve(null);
  inputClosed = !1;
  hasUnconsumedInput = !1;
  answerLinesWritten = 0;
  answerLinesRead = 0;
  receivedAnswersRead;
  tracksRequestDelivery = !1;
  unexpectedResponseCallback;
  unclaimedResponseObserver;
  resolvedToolUseIds = new Set();
  prependedLines = [];
  locallyPrependedMessages = new WeakSet();
  personsOwnPrepends = new WeakSet();
  prependWaker = null;
  stallTimer;
  stallFired = !1;
  sdkSchemaStretchSampled;
  sdkSchemaKept = new Map();
  sdkSchemaResultWritten = !1;
  sdkSchemaCheckTimer;
  createdAt = Date.now();
  onControlRequestSent;
  onControlRequestResolved;
  onStreamClosedWithParkedQuestion;
  onUserDialogParked;
  hostAnswersElicitations = !0;
  onCommandLifecycle;
  resultDelivery;
  commandLifecycleForwarderInstalled = !1;
  hostOwnsStdinOrigin = !0;
  persistsOutboundFrames = !1;
  get isHostedWorker() {
    return !1;
  }
  readOwnClientEvent(e) {
    return Promise.resolve({ kind: "unavailable", why: "no_session_channel" });
  }
  sessionState;
  outbound = new FT();
  heldUntilInit = [];
  constructor(e, s, n, r = ce) {
    this.input = e;
    this.replayUserMessages = s;
    this.maxLineChars = r;
    ((this.input = e),
      (this.sessionState = n ?? new wfn()),
      (this.sessionState.getPendingActionDetails = (o) => {
        let h = [];
        for (let [m, y] of this.publishedPendingActionDetails)
          if (this.pendingRequests.has(m) || m === o) h.push(y);
        return h;
      }),
      this.sessionState.stateChanged.subscribe((o) => {
        if (o !== "requires_action") this.flipBackLeftToUnpublishedAsk = !1;
        if (o === "idle") this.endSdkSchemaStretch();
      }),
      (this.structuredInput = this.read()));
  }
  trackResolvedToolUseId(e) {
    if (e.request.subtype === "can_use_tool") this.resolvedToolUseIds.add(e.request.tool_use_id);
    if ($9e(e)) AZn(e.request_id);
  }
  flushInternalEvents() {
    return Promise.resolve();
  }
  watchInternalEventPosts() {
    return;
  }
  refusedInternalEvents(e) {
    return [];
  }
  sessionServiceNow() {
    return;
  }
  sessionServiceNowAtMost() {
    return;
  }
  readStreamFrameAt() {
    return;
  }
  sessionStreamJoinedAt() {
    return;
  }
  newestSessionStreamCreatedAt() {
    return;
  }
  withdrawQueuedRequest(e) {
    return !1;
  }
  flushDeliveryAcks() {
    return Promise.resolve();
  }
  flushDeliveryAcksConfirmed() {
    return Promise.resolve(!0);
  }
  flushClientEvents() {
    return Promise.resolve(!0);
  }
  flushInternalEventsConfirmed() {
    return Promise.resolve(!0);
  }
  flushSessionState() {
    return Promise.resolve(!0);
  }
  get sessionStatePatchesRefused() {
    return 0;
  }
  get internalEventsPending() {
    return 0;
  }
  get unsentInternalEvents() {
    return 0;
  }
  get droppedInternalBatches() {
    return 0;
  }
  repliesLeftForNextProcess = 0;
  prependUserMessage(e, s = "process") {
    (this.prependedLines.push({
      line: _({
        type: "user",
        session_id: "",
        message: { role: "user", content: e },
        parent_tool_use_id: null
      }),
      hostLocal: !0,
      personsOwn: s === "person"
    }),
      this.prependWaker?.());
  }
  readAgain(e) {
    (this.prependedLines.push({ line: _(e), hostLocal: !1, personsOwn: !1 }),
      this.prependWaker?.());
  }
  noteInputWritten(e) {
    let s = e.indexOf(T);
    while (s !== -1) {
      let n = e.indexOf(
        `
`,
        s
      );
      if (n === -1) return;
      (this.answerLinesWritten++, (s = e.indexOf(T, n)));
    }
  }
  whenReceivedAnswersRead() {
    if (this.answerLinesWritten <= this.answerLinesRead) return;
    return (
      (this.receivedAnswersRead ??= Promise.withResolvers()),
      this.receivedAnswersRead.promise
    );
  }
  noteAnswerLinesRead(e) {
    if (((this.answerLinesRead = e), this.answerLinesWritten <= e))
      (this.receivedAnswersRead?.resolve(), (this.receivedAnswersRead = void 0));
  }
  isLocallyPrependedMessage(e) {
    return this.locallyPrependedMessages.has(e);
  }
  isPersonsOwnPrepend(e) {
    return this.personsOwnPrepends.has(e);
  }
  takeUserFrameReceivedWallMs(e) {
    return;
  }
  userFrameStartedAtMs(e) {
    return;
  }
  userFrameReceivedAtMs(e) {
    return;
  }
  async *read() {
    let e = "",
      s = [],
      n = 0,
      r = !1,
      o = 0,
      h = 0,
      m = !1;
    function y(w) {
      if ((o++, (h += w.length), m)) return;
      ((m = !0),
        Wg().then(() => {
          ((o = 0), (h = 0), (m = !1));
        }));
    }
    let k = async function* () {
        for (;;) {
          if (o >= pe || h >= fe) (await Wg(), (o = 0), (h = 0));
          let w = !1;
          while (this.prependedLines.length > 0) {
            let { line: L, hostLocal: z, personsOwn: J } = this.prependedLines.shift();
            ((w = !0), y(L));
            let U = await this.processLine(L);
            if (U) {
              if (z) this.locallyPrependedMessages.add(U);
              if (J) this.personsOwnPrepends.add(U);
              (Y("info", "cli_stdin_message_parsed", B(U)), yield U);
            }
          }
          if (w) continue;
          let P = e.indexOf(`
`);
          if (P === -1) break;
          let C = e.slice(0, P);
          ((e = e.slice(P + 1)), y(C));
          let O = await this.processLine(C);
          if (O)
            (Y("info", "cli_stdin_message_parsed", B(O)),
              (this.hasUnconsumedInput = e.trim().length > 0),
              yield O);
          if (this.answerLinesRead < this.answerLinesWritten && C.includes(T))
            this.noteAnswerLinesRead(this.answerLinesRead + 1);
        }
        this.hasUnconsumedInput = e.trim().length > 0;
      }.bind(this),
      R = this.input[Symbol.asyncIterator](),
      v = null,
      S = !1;
    try {
      for (;;) {
        if (r || this.prependedLines.length > 0) {
          if (s.length > 0) ((e += s.join("")), (s = []));
          if ((yield* k(), (n = e.length), n > this.maxLineChars))
            (Y("warn", "cli_stream_json_line_budget", { at: "tail" }),
              await this.exitOnFatalInput(N(this.maxLineChars)));
          r = !1;
        }
        v ??= R.next();
        let w = await Promise.race([
          v.then(() => !1),
          new Promise((O) => {
            this.prependWaker = () => O(!0);
          })
        ]);
        if (((this.prependWaker = null), w)) continue;
        let P = await v;
        if (((v = null), P.done)) {
          S = !0;
          break;
        }
        n += P.value.length;
        let C = P.value.includes(`
`);
        if (!C && n > this.maxLineChars)
          (Y("warn", "cli_stream_json_line_budget", { at: "block" }),
            await this.exitOnFatalInput(N(this.maxLineChars)));
        if ((s.push(P.value), C)) r = !0;
        else if (!this.hasUnconsumedInput && /\S/.test(P.value)) this.hasUnconsumedInput = !0;
      }
    } finally {
      if (((this.prependWaker = null), this.noteAnswerLinesRead(Number.POSITIVE_INFINITY), !S))
        await R.return?.();
    }
    if (s.length > 0) ((e += s.join("")), (s = []));
    if (e) {
      let w = await this.processLine(e);
      if (w) yield w;
    }
    this.inputClosed = !0;
    let A = An();
    if (!A && r_r()) {
      for (let [w, P] of this.pendingRequests.entries())
        if (
          !P.forwarded &&
          P.request.request.subtype === "can_use_tool" &&
          P.request.request.tool_name === ns
        )
          this.streamCloseInterruptRequestIds.add(w);
      if (this.streamCloseInterruptRequestIds.size > 0) this.onStreamClosedWithParkedQuestion?.();
    }
    for (let w of this.pendingRequests.values()) {
      if (A && this.asksOurHuman(w)) continue;
      w.reject(new Xd(nOo));
    }
  }
  hasPendingRequests() {
    return this.pendingRequests.size > 0;
  }
  onRequestPending(e) {
    return this.requestPending.subscribe(e);
  }
  getPendingPermissionRequests() {
    return Array.from(this.pendingRequests.values())
      .map((e) => e.request)
      .filter((e) => e.request.subtype === "can_use_tool");
  }
  getPendingUserDialogRequests() {
    return Array.from(this.pendingRequests.values())
      .map((e) => e.request)
      .filter((e) => e.request.subtype === "request_user_dialog");
  }
  hasPendingPrompt() {
    for (let { request: e } of this.pendingRequests.values()) if ($9e(e)) return !0;
    return !1;
  }
  hasStandingPrompt() {
    if (this.sessionState.getState() !== "requires_action") return !1;
    if (this.flipBackLeftToUnpublishedAsk) return this.hasPendingPrompt();
    for (let e of this.publishedPendingActionDetails.keys())
      if (this.pendingRequests.has(e)) return !0;
    return !1;
  }
  hasTurnPrompt() {
    for (let e of this.publishedPendingActionDetails.keys())
      if (!this.backgroundPromptIds.has(e)) return !0;
    return !1;
  }
  listTurnPrompts() {
    return [...this.publishedPendingActionDetails.keys()].filter(
      (e) => !this.backgroundPromptIds.has(e)
    );
  }
  retireSdkHostHookCallbacks(e) {
    (this.sdkHostHookGeneration++, (this.retiredHostHookAnswer = e));
    let s = 0;
    for (let [n, r] of Array.from(this.pendingRequests)) {
      let o = r.request.request;
      if (o.subtype !== "hook_callback") continue;
      let h = e(o.input),
        m = r.schema ? r.schema.parse(h) : h;
      (this.pendingRequests.delete(n), this.enqueueCancelRequest(n), r.resolve(m), s++);
    }
    return s;
  }
  republishSurvivingPendingAction() {
    let e;
    for (let [s, n] of this.publishedPendingActionDetails) if (this.pendingRequests.has(s)) e = n;
    if (!e) {
      this.flipBackLeftToUnpublishedAsk = this.sessionState.getState() === "requires_action";
      return;
    }
    (this.sessionState.republishPendingAction(e),
      a("tengu_pending_action_republished", {
        survivor_kind: c(
          e.tool_name === K_t
            ? "elicitation"
            : e.tool_name.startsWith("dialog:")
              ? "dialog"
              : "permission"
        ),
        pending_permission_requests: this.getPendingPermissionRequests().length,
        pending_dialog_requests: this.getPendingUserDialogRequests().length
      }));
  }
  cancelPendingUserDialogs(e, s) {
    let n = 0;
    for (let { request: r } of Array.from(this.pendingRequests.values())) {
      if (r.request.subtype !== "request_user_dialog" || r.request.dialog_kind !== e) continue;
      if (!this.cancelDialogByMachine(r.request_id, "moved_on")) continue;
      (a("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: cn(e),
        ...E(e, r.request.payload),
        reason: c(s)
      }),
        (n += 1));
    }
    return n;
  }
  cancelDialogsANewPromptCloses(e) {
    let s = 0;
    for (let n of Array.from(this.dialogsANewPromptCloses)) {
      let r = this.pendingRequests.get(n)?.request.request;
      if (r?.subtype !== "request_user_dialog" || !this.cancelDialogByMachine(n, "moved_on"))
        continue;
      (a("tengu_request_user_dialog_implicit_cancel", {
        dialog_kind: cn(r.dialog_kind),
        ...E(r.dialog_kind, r.payload),
        reason: c(e)
      }),
        (s += 1));
    }
    return s;
  }
  logDialogsLeftUp(e) {
    for (let s of this.dialogsANewPromptCloses) {
      let n = this.pendingRequests.get(s)?.request.request;
      if (n?.subtype === "request_user_dialog")
        a("tengu_request_user_dialog_left_up", {
          dialog_kind: cn(n.dialog_kind),
          ...E(n.dialog_kind, n.payload),
          ...(e !== void 0 && { client_platform: y1(e) })
        });
    }
  }
  cancelDialogByMachine(e, s) {
    if (!this.pendingRequests.has(e) || An()) return !1;
    let n = this.injectControlResponse({
      type: "control_response",
      response: { subtype: "success", request_id: e, response: { behavior: "cancelled" } }
    });
    if (n) this.unansweredSettleHandlers.get(e)?.(s);
    return n;
  }
  setUnexpectedResponseCallback(e) {
    this.unexpectedResponseCallback = e;
  }
  setUnclaimedResponseObserver(e) {
    this.unclaimedResponseObserver = e;
  }
  setMainLoopLiveness(e) {
    this.mainLoopLiveness = e;
  }
  mainLoopLiveness;
  ignoresErrorShapedDialogResponse(e, s) {
    if (s.subtype !== "error" || e.request.request.subtype !== "request_user_dialog" || e.forwarded)
      return !1;
    return (
      a("tengu_request_user_dialog_response_ignored", {
        shape: c("error"),
        dialog_kind: cn(e.request.request.dialog_kind),
        ...E(e.request.request.dialog_kind, e.request.request.payload)
      }),
      t(
        `Ignoring error-shaped control_response for parked request_user_dialog request_id=${s.request_id} \u2014 not a human choice; dialog stays parked (error: ${M(s.error)})`
      ),
      !0
    );
  }
  ignoresErrorShapedUiHostResponse(e, s) {
    let { subtype: n } = e.request.request;
    if (s.subtype !== "error" || !I(e.request.request)) return !1;
    return (
      t(
        `Ignoring error-shaped control_response for ${n} request_id=${s.request_id} - not the named client's answer; still waiting (error: ${M(s.error)})`
      ),
      !0
    );
  }
  asksOurHuman(e) {
    return !e.forwarded && $9e(e.request);
  }
  get pendingHumanRequestCount() {
    let e = 0;
    for (let s of this.pendingRequests.values()) if (this.asksOurHuman(s)) e++;
    return e;
  }
  ignoresResponseAtShutdown(e, s) {
    if (!this.asksOurHuman(e) || !An()) return !1;
    return (
      t(
        `Leaving control_response for request_id=${s.request_id} to the next process \u2014 this one is shutting down and settles no question`
      ),
      this.repliesLeftForNextProcess++,
      !0
    );
  }
  ignoresUnsettlingDeviceResponse(e, s) {
    let n = this.deviceRequests.get(s.request_id);
    if (!n) return !1;
    let r = e.request.request.subtype;
    if (s.subtype === "error")
      return (
        (n.errorRepliesIgnored += 1),
        t(
          `Ignoring error-shaped control_response for device ${r} request_id=${s.request_id} \u2014 not the device's answer; still waiting (error: ${M(s.error)})`
        ),
        !0
      );
    if (!n.accepts(s.response))
      return (
        (n.malformedRepliesIgnored += 1),
        t(
          `Ignoring malformed control_response for device ${r} request_id=${s.request_id} \u2014 not an answer to it; still waiting`
        ),
        !0
      );
    return !1;
  }
  hasCanUseToolNameMismatch(e, s) {
    let n = e.request.request;
    if (n.subtype !== "can_use_tool" || s.subtype !== "success") return !1;
    return F3e(s.response?.toolName, n.tool_name, s.request_id);
  }
  injectRemoteControlResponse(e) {
    let s = this.pendingRequests.get(e.response?.request_id ?? "")?.request.request;
    return (
      !(s?.subtype === "request_user_dialog" && s.dialog_kind === qde) &&
      this.injectControlResponse(e)
    );
  }
  injectControlResponse(e) {
    let s = this.blankedPromptDenyTarget(e.response) ?? e.response?.request_id;
    if (!s) return !1;
    let n = this.pendingRequests.get(s);
    if (!n)
      return (
        a("tengu_inject_control_response_unknown_id", {
          pending_control_requests: this.pendingRequests.size
        }),
        !1
      );
    if (this.ignoresErrorShapedDialogResponse(n, e.response)) return !1;
    if (this.ignoresErrorShapedUiHostResponse(n, e.response)) return !1;
    if (this.ignoresResponseAtShutdown(n, e.response)) return !1;
    if (this.ignoresUnsettlingDeviceResponse(n, e.response)) return !1;
    if (this.hasCanUseToolNameMismatch(n, e.response)) return !1;
    if (
      (this.trackResolvedToolUseId(n.request),
      this.pendingRequests.delete(s),
      s !== e.response?.request_id)
    )
      this.onControlRequestResolved?.(s);
    if ((this.sendCancelRequest(s), e.response.subtype === "error"))
      n.reject(Error(e.response.error));
    else {
      let r = e.response.response;
      if (n.schema)
        try {
          n.resolve(n.schema.parse(r));
        } catch (o) {
          n.reject(o);
        }
      else n.resolve({});
    }
    return !0;
  }
  setOnControlRequestSent(e) {
    this.onControlRequestSent = e;
  }
  setOnControlRequestResolved(e) {
    this.onControlRequestResolved = e;
  }
  setOnStreamClosedWithParkedQuestion(e) {
    this.onStreamClosedWithParkedQuestion = e;
  }
  async processLine(e) {
    if (!e.trim()) return;
    e = No(e);
    try {
      let s = ULe(te(e));
      if (s.type === "keep_alive") return;
      if (s.type === "update_environment_variables") {
        if (!this.acceptsInboundEnvUpdates()) {
          let m = s.variables,
            y = typeof m === "object" && m !== null ? Object.keys(m) : [],
            k = y.filter((S) => j.has(S)),
            R = y.length - k.length,
            v = R > 0 ? k.concat(`${R} other`) : k;
          (t(
            `[structuredIO] refused update_environment_variables: this worker does not take environment updates from its inbound stream (keys: ${v.join(", ") || "none"})`,
            { level: "warn" }
          ),
            this.retireDroppedFrame("uuid" in s ? s.uuid : void 0));
          return;
        }
        let n = s.variables;
        if (
          typeof n !== "object" ||
          n === null ||
          Array.isArray(n) ||
          Object.values(n).some((m) => typeof m !== "string")
        ) {
          if (
            (t(
              "[structuredIO] dropped update_environment_variables: variables must be an object of string values"
            ),
            typeof s.request_id === "string" && s.request_id)
          )
            this.writeActivityLine(
              _({
                type: "control_response",
                response: {
                  subtype: "error",
                  request_id: s.request_id,
                  error:
                    "update_environment_variables: variables must be an object of string values"
                }
              }) +
                `
`
            );
          return;
        }
        let r = [],
          o = [],
          h = !1;
        for (let [m, y] of Object.entries(s.variables)) {
          if (!j.has(m)) {
            o.push(m);
            continue;
          }
          if (m === "CLAUDE_CODE_OAUTH_TOKEN" && yI()) {
            let k = k8o(y);
            if (k === null) o.push(m);
            else ((h = !0), k.then(() => Nh()));
            continue;
          }
          if (!_ci(m, y)) process.env[m] = y;
          r.push(m);
        }
        if (o.length > 0)
          t(`[structuredIO] refused update_environment_variables keys: ${o.join(", ")}`);
        if (h || r.includes("CLAUDE_CODE_OAUTH_TOKEN")) Nh();
        else vj();
        if (h)
          t(
            "[structuredIO] update_environment_variables offered CLAUDE_CODE_OAUTH_TOKEN to the session's judge, not applied yet"
          );
        if (r.length > 0) t(`[structuredIO] applied update_environment_variables: ${r.join(", ")}`);
        if (typeof s.request_id === "string" && s.request_id)
          this.writeActivityLine(
            _({
              type: "control_response",
              response: { subtype: "success", request_id: s.request_id }
            }) +
              `
`
          );
        return;
      }
      if (s.type === "control_response") {
        let n = "uuid" in s && typeof s.uuid === "string" ? s.uuid : void 0,
          r = s.response;
        if (typeof r !== "object" || r === null || Array.isArray(r)) {
          if (n) this.onCommandLifecycle?.(n, "completed");
          t("[structuredIO] dropped control_response with malformed response payload");
          return;
        }
        if (v8o(s.response.request_id)) {
          if (n) this.onCommandLifecycle?.(n, "completed");
          return;
        }
        let o = this.blankedPromptDenyTarget(s.response) ?? s.response.request_id,
          h = this.pendingRequests.get(o);
        if (!h) {
          let y = this.settleUnknownResponse(s, n);
          if (y !== void 0) await y;
          return;
        }
        if (An() && this.asksOurHuman(h)) {
          (t(
            `Leaving control_response for request_id=${o} to the next process \u2014 this one is shutting down and settles no question`
          ),
            this.repliesLeftForNextProcess++);
          return;
        }
        if (n) this.onCommandLifecycle?.(n, "completed");
        if (this.ignoresErrorShapedDialogResponse(h, s.response)) return;
        if (this.ignoresErrorShapedUiHostResponse(h, s.response)) return;
        if (this.ignoresUnsettlingDeviceResponse(h, s.response)) return;
        if (this.hasCanUseToolNameMismatch(h, s.response)) return;
        if (
          (this.trackResolvedToolUseId(h.request),
          this.pendingRequests.delete(o),
          this.hostOwnsStdinOrigin &&
            !h.forwarded &&
            this.hostDialogAttestations.has(o) &&
            h.request.request.subtype === "can_use_tool" &&
            s.response.subtype === "success" &&
            J9s(s.response.response))
        )
          this.hostDialogAttestations.set(o, !0);
        if (h.request.request.subtype === "can_use_tool" && this.onControlRequestResolved)
          this.onControlRequestResolved(o);
        if (o !== s.response.request_id) this.enqueueCancelRequest(o);
        if ($9e(h.request) && !(h.forwarded && s.response.subtype === "error"))
          (this.recordUserDrivenInbound(s),
            this.recordAnsweredPrompt(s, h.request.request.subtype));
        if (s.response.subtype === "error") {
          h.reject(Error(s.response.error));
          return;
        }
        let m = s.response.response;
        if (h.schema)
          try {
            h.resolve(h.schema.parse(m));
          } catch (y) {
            h.reject(y);
          }
        else h.resolve({});
        if (this.replayUserMessages && !se.has(h.request.request.subtype)) return M7s(s);
        return;
      }
      if (
        s.type !== "workflow_launch" &&
        s.type !== "user" &&
        !(
          s.type === "control_request" &&
          VMn(
            me(s.request),
            () => this.uiSurfaceFrameOf(s, !1),
            () => this.surfaceRequestJudgedAt(s)
          )
        ) &&
        ivo(s, { hostOwnsOrigin: this.hostOwnsStdinOrigin })
      )
        this.recordUserDrivenInbound(s);
      if (
        s.type !== "user" &&
        s.type !== "bash_command" &&
        s.type !== "control_request" &&
        s.type !== "control_cancel_request" &&
        s.type !== "assistant" &&
        s.type !== "system" &&
        s.type !== "queued_notification" &&
        s.type !== "session_notice" &&
        s.type !== "workflow_launch"
      ) {
        let n = s.type;
        (t(
          `Ignoring unknown message type: ${typeof n === "string" ? W(n) : `(a value of JSON type ${typeof n})`}`,
          { level: "warn" }
        ),
          this.retireDroppedFrame(
            typeof s === "object" && s !== null && "uuid" in s ? s.uuid : void 0
          ));
        return;
      }
      if (s.type === "workflow_launch") return s;
      if (s.type === "control_request") {
        if (this.isRemoteTransport()) {
          let n = s.request,
            r = typeof n !== "object" || n === null || Array.isArray(n);
          if (r || !("subtype" in n) || typeof n.subtype !== "string") {
            (a("tengu_sdk_malformed_input", {
              message_type: b("control_request"),
              reason: c(r ? "missing_request" : "subtype_not_string"),
              transport: b("remote"),
              outcome: b("dropped"),
              has_event_uuid: "uuid" in s && Kt(s.uuid) !== null
            }),
              t("Dropping control_request: missing request object or non-string subtype", {
                level: "warn"
              }),
              this.retireDroppedFrame("uuid" in s ? s.uuid : void 0));
            return;
          }
        } else if (!s.request)
          return this.exitOnFatalInput("Error: Missing request on control_request");
        return s;
      }
      if (s.type === "control_cancel_request") return typeof s.request_id === "string" ? s : void 0;
      if (s.type === "assistant" || s.type === "system") return s;
      if (s.type === "bash_command") return s;
      if (s.type === "queued_notification") return s;
      if (s.type === "session_notice") return s;
      if (s.message?.role !== "user") {
        if (!this.isRemoteTransport())
          return this.exitOnFatalInput(
            `Error: Expected message role 'user', got '${W(String(s.message?.role))}'`
          );
        let n = ke(s.message),
          r =
            n === void 0
              ? "dropped"
              : !n.plain
                ? "unwrap_refused"
                : i.CLAUDE_CODE_DISABLE_NESTED_USER_REPAIR
                  ? "repair_disabled"
                  : "repaired",
          o = ve(s.message),
          h = Kt(s.uuid) !== null;
        if (
          (a("tengu_sdk_malformed_input", {
            message_type: b("user"),
            reason: b("invalid_message_role"),
            transport: b("remote"),
            outcome: c(r),
            wire_shape: c(o),
            has_event_uuid: h
          }),
          Y("warn", "cli_malformed_user_message", { outcome: r, wire_shape: o, has_event_uuid: h }),
          n === void 0 || r !== "repaired")
        ) {
          (t(
            `Dropping malformed user message (${r}, ${o}, event uuid ${h ? "present" : "absent"}): expected message role 'user'`,
            { level: "warn" }
          ),
            this.retireDroppedFrame(s.uuid));
          return;
        }
        let m = s;
        ((m.message = n.inner), t("Repaired a nested user message (one level)"));
      }
      if (ivo(s, { hostOwnsOrigin: this.hostOwnsStdinOrigin })) this.recordUserDrivenInbound(s);
      return s;
    } catch (s) {
      return this.exitOnFatalInput(Se(e, s));
    }
  }
  blankedPromptDenyTarget(e) {
    if (e?.subtype !== "success" || e.response?.behavior !== "deny") return;
    let s = e.response.toolUseID;
    if (typeof s !== "string" || s === "" || e.request_id !== s || this.pendingRequests.has(s))
      return;
    for (let [n, r] of this.publishedPendingActionDetails)
      if (
        r.request_id === "" &&
        r.suppressed_request_id === n &&
        r.tool_use_id === s &&
        this.pendingRequests.get(n)?.request.request.subtype === "can_use_tool"
      )
        return (
          t(
            `[structuredIO] deny keyed on toolUseID=${s} settles its blanked prompt request_id=${n}`
          ),
          n
        );
    return;
  }
  settleUnknownResponse(e, s) {
    if (An()) {
      t(
        `Leaving control_response for request_id=${e.response.request_id} to the next process \u2014 this one is shutting down and settles no question`
      );
      return;
    }
    if (s) this.onCommandLifecycle?.(s, "completed");
    let n = this.timedOutUserDialogs.get(e.response.request_id);
    if (n) {
      this.timedOutUserDialogs.delete(e.response.request_id);
      let h = e.response.subtype === "success" ? e.response.response?.behavior : void 0,
        m = e.response.subtype;
      (a("tengu_request_user_dialog_late_answer", {
        dialog_kind: cn(n.dialogKind),
        ...n.source,
        lateness_ms: Date.now() - n.timedOutAt,
        response_subtype: c(m === "success" || m === "error" ? m : "other"),
        behavior: c(h === "completed" || h === "cancelled" ? h : h === void 0 ? "absent" : "other")
      }),
        t(
          `Ignoring late request_user_dialog answer for request_id=${e.response.request_id}: the park deadline already settled this dialog as cancelled ${Date.now() - n.timedOutAt}ms ago`
        ));
      return;
    }
    let r = e.response.subtype === "success" ? e.response.response : void 0,
      o = r?.toolUseID;
    if (typeof o === "string" && this.resolvedToolUseIds.has(o)) {
      t(
        `Ignoring duplicate control_response for already-resolved toolUseID=${o} request_id=${e.response.request_id}`
      );
      return;
    }
    if (this.unexpectedResponseCallback === void 0) {
      try {
        this.unclaimedResponseObserver?.({
          answerKind: e.response.subtype === "success" ? Xyr(r) : {},
          toolUseId: typeof o === "string" ? o : void 0
        });
      } catch (h) {
        l(h);
      }
      return;
    }
    return this.unexpectedResponseCallback(e);
  }
  resetStallWatchdog() {
    this.stallFired = !1;
  }
  recordUserDrivenInbound(e) {
    oPs();
  }
  recordAnsweredPrompt(e, s) {}
  retireDroppedFrame(e) {
    let s = Kt(e);
    if (s) this.onCommandLifecycle?.(s, "completed");
  }
  trackWrite(e) {
    if (this.stallTimer) clearTimeout(this.stallTimer);
    if (e.type !== "result" && !this.stallFired)
      ((this.stallTimer = setTimeout(
        (n) => {
          if (this.sessionState.getState() !== "running") return;
          ((this.stallFired = !0),
            a("tengu_sdk_stall", {
              session_age_ms: Date.now() - this.createdAt,
              session_state: c(this.sessionState.getState()),
              last_message_type: c(n),
              pending_control_requests: this.pendingRequests.size
            }));
        },
        ne,
        e.type
      )),
        this.stallTimer.unref());
    let s = e.type === "result" && this.resultDelivery ? this.resultDelivery.stamp(e) : e;
    if (s.type !== "system") this.sampleForSdkSchemaCheck(s);
    if (s.type === "result") ((this.sdkSchemaResultWritten = !0), this.armSdkSchemaCheck());
    return s;
  }
  sampleForSdkSchemaCheck(e) {
    if (((this.sdkSchemaStretchSampled ??= Math.random() < ae), !this.sdkSchemaStretchSampled))
      return;
    let s = this.sdkSchemaKept.get(e.type) ?? { frames: 0, json: void 0 };
    if (((s.frames += 1), this.sdkSchemaKept.set(e.type, s), Math.random() >= 1 / s.frames)) return;
    try {
      let n = _(e);
      if (n.length <= ue) s.json = n;
    } catch {}
  }
  sdkSchemaFramesKept() {
    for (let e of this.sdkSchemaKept.values()) if (e.json !== void 0) return !0;
    return !1;
  }
  endSdkSchemaStretch() {
    if (this.sdkSchemaFramesKept()) {
      this.armSdkSchemaCheck();
      return;
    }
    ((this.sdkSchemaStretchSampled = void 0), this.sdkSchemaKept.clear());
  }
  armSdkSchemaCheck() {
    if (!this.sdkSchemaFramesKept() || !this.sdkSchemaResultWritten) return;
    (clearTimeout(this.sdkSchemaCheckTimer),
      (this.sdkSchemaCheckTimer = setTimeout(() => {
        if (this.sessionState.getState() !== "idle" || this.inputClosed || An()) return;
        let e = [...this.sdkSchemaKept.entries()];
        (this.sdkSchemaKept.clear(), (this.sdkSchemaStretchSampled = void 0));
        let s = K3r.builtCount();
        try {
          let n = u6o();
          for (let [r, { json: o }] of e) {
            if (o === void 0) continue;
            let h = te(o),
              m = n.safeParse(h);
            if (!m.success)
              a("tengu_sdk_schema_violation", {
                message_type: c(r),
                error_path: PLr(m.error.issues[0]?.path, le)
              });
          }
        } catch (n) {
          t(
            `Could not check the sampled frames against the SDK output schema; they are dropped: ${d(n)}`
          );
        } finally {
          K3r.releaseBuiltSince(s);
        }
      }, de)),
      this.sdkSchemaCheckTimer.unref());
  }
  writeActivityLine(e) {
    Ur(e);
  }
  acceptsInboundEnvUpdates() {
    return !0;
  }
  exitOnFatalInput(e) {
    return ge(e);
  }
  async write(e) {
    let s = this.heldDueBefore(e);
    if (s.length > 0) await this.writeHeld(s);
    let n = this.trackWrite(e);
    Ur(
      Gpe(n) +
        `
`
    );
    let r = this.heldDueAfter(n);
    if (r.length > 0) await this.writeHeld(r);
  }
  writeAfterInit(e) {
    this.heldUntilInit.push(e);
  }
  heldDueBefore(e) {
    return e.type === "result" ? this.heldUntilInit.splice(0) : [];
  }
  heldDueAfter(e) {
    return e.type === "system" && e.subtype === "init" ? this.heldUntilInit.splice(0) : [];
  }
  async writeHeld(e) {
    for (let s of e)
      try {
        await this.write(s);
      } catch (n) {
        t(`held frame write failed: ${n}`, { level: "warn" });
      }
  }
  passControlRequestToHost(e, { requestId: s, schema: n, signal: r }) {
    if (this.pendingRequests.has(s))
      return Promise.reject(new Ye("a control request with this request_id is already pending"));
    return this.sendRequest(e, n, r, { requestId: s, forwarded: !0 });
  }
  async sendRequest(e, s, n, { requestId: r = D(), forwarded: o = !1, deviceHook: h = !1 } = {}) {
    let m = { type: "control_request", request_id: r, request: e },
      y = { ...m, request: Uhs(e) },
      k = !o && $9e(m);
    if (k && An() && !n?.aborted) return ff();
    if (e.subtype === "elicitation" && !o) z7s(r);
    else if (I(e) && !o) K7s(r);
    else if (!o && !h) TZn(r, { automated: !k });
    else if (h) G7s(r);
    if (this.inputClosed) throw new Xd(kLr);
    if (n?.aborted) throw new Ye("Request aborted");
    if (
      (this.outbound.enqueue(o ? y : m), e.subtype === "can_use_tool" && this.onControlRequestSent)
    )
      this.onControlRequestSent(y);
    if (k) this.sessionState.beginUserDecision();
    let R = () => {
      if (k && An()) return;
      if (m.request.subtype === "can_use_tool" && n !== void 0 && iSn(n))
        this.answerOwnWithdrawnAsk(r, m.request.tool_use_id);
      this.enqueueCancelRequest(r);
      let S = this.pendingRequests.get(r);
      if (S) {
        if (
          (this.trackResolvedToolUseId(S.request),
          S.request.request.subtype === "can_use_tool" && this.onControlRequestResolved)
        )
          this.onControlRequestResolved(r);
        (this.pendingRequests.delete(r), S.reject(new Ye()));
      }
    };
    if (n) n.addEventListener("abort", R, { once: !0 });
    let v;
    try {
      return await new Promise((S, A) => {
        ((v = {
          request: y,
          resolve: (w) => {
            S(w);
          },
          reject: A,
          schema: s,
          ...(o && { forwarded: o })
        }),
          this.pendingRequests.set(r, v),
          this.requestPending.emit());
      });
    } finally {
      if (n) n.removeEventListener("abort", R);
      if (this.pendingRequests.get(r) === v) this.pendingRequests.delete(r);
      if (k) this.sessionState.endUserDecision();
    }
  }
  emitPermissionDenied(e, s, n, r) {
    let o = r.decisionReason;
    this.outbound.enqueue({
      type: "system",
      subtype: "permission_denied",
      tool_name: e,
      tool_use_id: s,
      agent_id: n,
      decision_reason_type: o?.type,
      decision_reason_code: Tse(o),
      decision_reason: zOe(o),
      message: r.message,
      uuid: D(),
      session_id: q()
    });
  }
  createCanUseTool(e, s) {
    return Bhs(e, this.permissionPromptHost(e.kind, s));
  }
  permissionPromptHost(e, s) {
    return {
      request: (n, r, o) => (
        this.hostDialogAttestations.set(o, !1),
        this.sendRequest(n, fIt(e), r, { requestId: o })
      ),
      isPending: (n) => this.pendingRequests.has(n),
      interruptedAtStreamClose: (n) => this.streamCloseInterruptRequestIds.has(n),
      answeredAtHostDialog: (n) => {
        let r = this.hostDialogAttestations.get(n) === !0;
        if (r) this.hostDialogAttestations.set(n, !1);
        return r;
      },
      emitPermissionDenied: (n, r, o, h) => this.emitPermissionDenied(n, r, o, h),
      promptShown:
        s &&
        ((n, r, o, h) => {
          if ((this.publishedPendingActionDetails.set(n, r), h !== void 0))
            this.backgroundPromptIds.add(n);
          if (o !== void 0) this.sessionState.notifyNestedPromptBlocking(o);
          s(r);
        }),
      promptSettled: (n, r) => this.settlePermissionPrompt(n, r)
    };
  }
  settlePermissionPrompt(e, s) {
    if (s !== void 0) this.sessionState.notifyNestedPromptUnblocking(s);
    (this.hostDialogAttestations.delete(e), this.settlePublishedPrompt(e, !0));
  }
  settlePublishedPrompt(e, s) {
    if (
      (this.publishedPendingActionDetails.delete(e),
      this.backgroundPromptIds.delete(e),
      !this.hasPendingPrompt())
    ) {
      this.flipBackFromRequiresAction();
      return;
    }
    if (s) this.sessionState.reteeWaitingOnUser();
    this.republishSurvivingPendingAction();
  }
  flipBackFromRequiresAction() {
    if (An()) return;
    let e = this.sessionState.heldRequiresAction?.();
    if (e) {
      ((this.flipBackLeftToUnpublishedAsk = !1),
        this.sessionState.notifyStateChanged("requires_action", e));
      return;
    }
    this.sessionState.notifyStateChanged(this.mainLoopLiveness?.() === !1 ? "idle" : "running");
  }
  createHookCallback(e, s) {
    let n = this.sdkHostHookGeneration;
    return {
      type: "callback",
      timeout: s,
      callback: async (r, o, h) => {
        if (n !== this.sdkHostHookGeneration && this.retiredHostHookAnswer)
          return this.retiredHostHookAnswer(r);
        try {
          let m = await this.sendRequest(
            { subtype: "hook_callback", callback_id: e, input: r, tool_use_id: o || void 0 },
            ade(),
            h
          );
          return (DXr(), m);
        } catch (m) {
          if (Ke(m)) throw m;
          return (DXr(), console.error(`Error in hook callback ${e}:`, m), {});
        }
      }
    };
  }
  async sendUiHostRequest(e, s, n) {
    if (!lae(this.uiSurfaceChannel())) return;
    let r = this.isRemoteTransport(),
      o = D();
    if (r) this.trackDeviceRequest(o, "host_ask", () => !0);
    let h = AbortSignal.timeout(n),
      m = await this.sendRequest(e, s, h, { requestId: o })
        .then(
          (y) => ({ answer: y, failure: void 0 }),
          (y) => ({ answer: void 0, failure: F(y, h) })
        )
        .finally(() => this.deviceRequests.delete(o));
    if (r && m.failure === void 0) g("plugin_function_hooks_host_ask");
    else if (r && m.failure !== void 0) f("plugin_function_hooks_host_ask", m.failure);
    return m.answer;
  }
  takesUiHostAsks() {
    return !this.isRemoteTransport() || F9e(this.sessionWriters());
  }
  async sendUiHostAsk(e, s, n) {
    if (!lae(this.uiSurfaceChannel())) return { answer: void 0, cause: "not_asked" };
    let r = AbortSignal.timeout(n);
    try {
      return { answer: await this.sendRequest(e, s, r), cause: void 0 };
    } catch (o) {
      return { answer: void 0, cause: F(o, r) };
    }
  }
  sendDeviceHookCallback(e) {
    let s = D(),
      n = this.trackDeviceRequest(s, "hook", (m) => x(m) !== null),
      r = new AbortController(),
      o = e.signal ? AbortSignal.any([e.signal, r.signal]) : r.signal,
      h = this.sendRequest(
        {
          subtype: "hook_callback",
          callback_id: e.callbackId,
          input: e.input,
          tool_use_id: e.toolUseID || void 0,
          issued_at: Math.trunc(e.issuedAt),
          deadline_ms: Math.max(1, Math.ceil(e.deadlineMs))
        },
        oe(),
        o,
        { requestId: s, deviceHook: !0 }
      )
        .then(
          (m) => {
            let y = x(m);
            return y === null ? { malformed: !0 } : { answer: y };
          },
          (m) => {
            if (Ke(m)) throw m;
            return (
              t(
                `Device hook_callback request_id=${s} settled with a non-answer; treating as no opinion`,
                { level: "warn" }
              ),
              { malformed: !0 }
            );
          }
        )
        .finally(() => {
          this.deviceRequests.delete(s);
        });
    return {
      requestId: s,
      reply: h,
      cancel: () => r.abort(),
      errorRepliesIgnored: () => n.errorRepliesIgnored,
      malformedRepliesIgnored: () => n.malformedRepliesIgnored
    };
  }
  trackDeviceRequest(e, s, n, r, o) {
    if (this.deviceRequests.size >= K)
      t(
        `Device request bookkeeping past its expected ceiling (${K} live requests); keeping all of them`,
        { level: "warn" }
      );
    let h = {
      kind: s,
      errorRepliesIgnored: 0,
      malformedRepliesIgnored: 0,
      delivery: "queued",
      instanceId: r,
      accepts: n,
      onUpload: o
    };
    return (this.deviceRequests.set(e, h), h);
  }
  waitsOnHostAsk() {
    for (let e of this.deviceRequests.values()) if (e.kind === "host_ask") return !0;
    return !1;
  }
  liveDeviceRequestKind(e) {
    return this.deviceRequests.get(e)?.kind;
  }
  abandonServedCalls(e, s) {
    let n = 0;
    for (let [r, o] of this.deviceRequests) {
      if (o.kind !== "served_call" || o.instanceId !== e) continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      (this.enqueueCancelRequest(r), this.pendingRequests.delete(r), h.reject(new g7t(s)), n++);
    }
    return n;
  }
  withdrawStandingServedCall(e) {
    if (this.pendingRequests.has(e)) return !1;
    return (this.enqueueCancelRequest(e), !0);
  }
  noteRequestsUpload(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o === void 0) continue;
      let h = he(o.delivery, s);
      if (h !== o.delivery) ((o.delivery = h), n++);
      try {
        o.onUpload?.(s);
      } catch (m) {
        t(
          `A served call's upload listener threw (${s}); the delivery ledger is unaffected: ${d(m)}`,
          { level: "warn" }
        );
      }
    }
    return n;
  }
  rejectUndeliveredRequests(e, s) {
    let n = 0;
    for (let r of e) {
      let o = this.deviceRequests.get(r);
      if (o?.kind !== "served_call") continue;
      let h = this.pendingRequests.get(r);
      if (!h) continue;
      (this.pendingRequests.delete(r),
        h.reject(this.tracksRequestDelivery && o.delivery === "queued" ? new y7t(s) : new h7t(s)),
        n++);
    }
    return n;
  }
  sendServedCallRequest(e) {
    let s = D();
    if (this.inputClosed) {
      let m = Promise.reject(new Xd(kLr));
      return (
        m.catch(() => {}),
        {
          requestId: s,
          sent: !1,
          delivery: () => "queued",
          withdraw: () => !1,
          reply: m,
          cancel: () => {},
          errorRepliesIgnored: () => 0
        }
      );
    }
    let n = this.trackDeviceRequest(s, "served_call", e.accepts, e.request.instance_id, e.onUpload),
      r = new AbortController(),
      o = e.signal ? AbortSignal.any([e.signal, r.signal]) : r.signal,
      h = this.sendRequest(e.request, oe(), o, { requestId: s, deviceHook: !0 }).finally(() => {
        this.deviceRequests.delete(s);
      });
    return {
      requestId: s,
      sent: !0,
      delivery: () => (this.tracksRequestDelivery ? _e(n.delivery) : "untracked"),
      withdraw: () => this.withdrawUnsentServedCall(s),
      reply: h,
      cancel: () => {
        if (this.pendingRequests.has(s)) {
          r.abort();
          return;
        }
        this.enqueueCancelRequest(s);
      },
      errorRepliesIgnored: () => n.errorRepliesIgnored
    };
  }
  askToAnnounce(e, s) {
    this.sendRequest(e, oe(), s, { deviceHook: !0 }).catch(() => {});
  }
  withdrawUnsentServedCall(e) {
    let s = this.deviceRequests.get(e),
      n = this.pendingRequests.get(e);
    if (
      !this.tracksRequestDelivery ||
      n === void 0 ||
      s?.kind !== "served_call" ||
      s.delivery !== "queued"
    )
      return !1;
    if (!this.withdrawQueuedRequest(e)) return !1;
    return (this.pendingRequests.delete(e), n.reject(new Amo()), !0);
  }
  async handleElicitation(e, s, n, r, o, h, m, y, k = !1) {
    if (!this.hostAnswersElicitations) return { action: "cancel" };
    if (An()) {
      if (r?.aborted) return { action: "cancel" };
      return ff();
    }
    if (this.inputClosed || r?.aborted) return { action: "cancel" };
    let R = D(),
      v = {
        tool_name: K_t,
        display_tool_name: "Claude needs your input",
        action_description: "Answer the MCP server's question to continue",
        tool_use_id: "",
        request_id: R
      };
    if ((this.publishedPendingActionDetails.set(R, v), k)) this.backgroundPromptIds.add(R);
    (this.sessionState.notifyStateChanged("requires_action", v), this.onUserDialogParked?.(v));
    let S = n?.properties;
    try {
      return await this.sendRequest(
        {
          subtype: "elicitation",
          mcp_server_name: e,
          message: s,
          mode: o,
          url: h,
          elicitation_id: m,
          requested_schema: n,
          property_order: o !== "url" && H(S) ? Object.keys(S) : void 0,
          title: y?.title,
          display_name: y?.displayName,
          description: y?.description
        },
        r6o(),
        r,
        { requestId: R }
      );
    } catch {
      return { action: "cancel" };
    } finally {
      this.settlePublishedPrompt(R, !r?.aborted);
    }
  }
  async requestUserDialog(e, s, n) {
    if (An()) {
      if (n?.signal?.aborted) return { behavior: "cancelled" };
      return ff();
    }
    let r = D(),
      o = x8n(e, s, r, n?.toolUseId);
    (this.publishedPendingActionDetails.set(r, o),
      this.sessionState.notifyStateChanged("requires_action", o),
      this.onUserDialogParked?.(o));
    let h = E(e, s);
    if (
      (a("tengu_request_user_dialog_requires_action", { dialog_kind: cn(e), ...h }),
      n?.onSettledUnanswered)
    )
      this.unansweredSettleHandlers.set(r, n.onSettledUnanswered);
    if (n?.closesOnNewPrompt) this.dialogsANewPromptCloses.add(r);
    let m = QYs(n?.parkTimeoutMs),
      y;
    if (m > 0)
      ((y = setTimeout(
        (R, v, S, A) => {
          if (
            (this.timedOutUserDialogs.set(R, { dialogKind: v, timedOutAt: Date.now(), source: A }),
            !this.cancelDialogByMachine(R, "deadline"))
          ) {
            this.timedOutUserDialogs.delete(R);
            return;
          }
          a("tengu_request_user_dialog_timeout", { dialog_kind: cn(v), ...A, timeout_ms: S });
        },
        m,
        r,
        e,
        m,
        h
      )),
        y.unref());
    let k = !this.inputClosed && n?.signal?.aborted !== !0;
    try {
      return await this.sendRequest(
        { subtype: "request_user_dialog", dialog_kind: e, payload: s, tool_use_id: n?.toolUseId },
        Qbn(),
        n?.signal,
        { requestId: r }
      );
    } catch {
      return { behavior: "cancelled" };
    } finally {
      if (y !== void 0) clearTimeout(y);
      if (
        (this.unansweredSettleHandlers.delete(r),
        this.dialogsANewPromptCloses.delete(r),
        e === qde && k)
      )
        this.sendCancelRequest(r);
      this.settlePublishedPrompt(r, !this.timedOutUserDialogs.has(r));
    }
  }
  createSandboxAskCallback(e, s, n, r) {
    let o = new Map(),
      h = async (m) => {
        if (T8(m))
          return (
            t(
              `[StructuredIO] Refusing a sandbox network ask for a host srt would re-spell: ${_(m)}`,
              { level: "warn" }
            ),
            !1
          );
        try {
          let y = {
              type: "addRules",
              rules: [{ toolName: qn, ruleContent: `domain:${$ze(m)}` }],
              behavior: "allow",
              destination: w1t() ?? "session"
            },
            k = s_r(Z6(Ele), n, r),
            R;
          try {
            R = await this.sendRequest(
              {
                subtype: "can_use_tool",
                tool_name: Ele,
                display_name: Z6(Ele),
                input: { host: m },
                permission_suggestions: [y],
                tool_use_id: D(),
                description: `Allow network connection to ${m}?`
              },
              fIt(e.kind)
            );
          } finally {
            if ((k(), this.flipBackLeftToUnpublishedAsk && !this.hasPendingPrompt()))
              this.flipBackFromRequiresAction();
          }
          if (R.behavior !== "allow") return !1;
          let v = R.updatedPermissions;
          switch (e.kind) {
            case "launcher":
              if (v && v.length > 0) {
                let S = W8(v, void 0);
                (s?.((A) => ((S = W8(v, void 0, A)), KP(A, S))), await jG(S, n));
              }
              break;
            case "strict":
              if (
                (s
                  ? wEo(e, SEo(v, e.limits), Ele, s, HRr(v, e.limits.ruleLength))
                  : HRr(v, e.limits.ruleLength).length) > 0
              )
                return (
                  t(
                    "refused a sandbox network answer: a deny or ask rule that the answer added, or may have added, is not among the session's rules",
                    { level: "warn" }
                  ),
                  !1
                );
              break;
          }
          return (ze.addSessionAllowedHost(m), !0);
        } catch {
          return !1;
        }
      };
    return (m) => {
      let y = m.host,
        k = o.get(y);
      if (k) return k;
      let R = h(y).finally(() => {
        o.delete(y);
      });
      return (o.set(y, R), R);
    };
  }
  async sendMcpMessage(e, s, n = ie) {
    let o = cBn(s) ? void 0 : Ts(void 0, { timeoutMs: n, refTimer: !0 });
    try {
      return (
        await this.sendRequest(
          { subtype: "mcp_message", server_name: e, message: s },
          u({ mcp_response: UZ().optional() }),
          o?.signal
        )
      ).mcp_response;
    } finally {
      o?.cleanup();
    }
  }
  async requestOAuthTokenRefresh() {
    let e = Date.now(),
      s;
    try {
      s = await this.sendRequest({ subtype: "oauth_token_refresh" }, Zbn(), AbortSignal.timeout(X));
    } catch (r) {
      throw (
        a("tengu_sdk_oauth_refresh_unfulfilled", {
          outcome: c(
            r instanceof Xd
              ? "stream_closed"
              : Ke(r)
                ? "timeout"
                : r instanceof pC
                  ? "invalid_response"
                  : "error"
          ),
          reason: c("none"),
          duration_ms: Date.now() - e
        }),
        r
      );
    }
    if (typeof s.accessToken === "string" && s.accessToken) return (Iai(), s.accessToken);
    let n = s.reason;
    if (n !== void 0) Pai(n);
    return (
      a("tengu_sdk_oauth_refresh_unfulfilled", {
        outcome: c(n !== void 0 ? "declined" : "null"),
        reason: c(n ?? "none"),
        duration_ms: Date.now() - e
      }),
      null
    );
  }
  async requestRemoteControlWorkSecret(e) {
    try {
      return (
        (
          await this.sendRequest(
            { subtype: "remote_control_work_secret", session_id: e },
            o6o(),
            AbortSignal.timeout(ee)
          )
        ).work_secret || null
      );
    } catch (s) {
      return (
        t(
          `[bridge:work-secret] host work-secret request failed (${s instanceof Error ? s.name : "unknown"})`,
          { level: "warn" }
        ),
        null
      );
    }
  }
  async requestHostAuthTokenRefresh(e = Z) {
    return this.sendRequest({ subtype: "host_auth_token_refresh" }, s6o(), AbortSignal.timeout(e));
  }
  enqueueCancelRequest(e) {
    this.outbound.enqueue({ type: "control_cancel_request", request_id: e });
  }
  sendCancelRequest(e) {
    if (!this.outbound.ended) {
      this.enqueueCancelRequest(e);
      return;
    }
    this.write({ type: "control_cancel_request", request_id: e }).catch((s) => {
      t(`control_cancel_request for request_id=${e} not written: ${d(s)}`, { level: "error" });
    });
  }
  answerOwnWithdrawnAsk(e, s) {}
}
async function ge(e) {
  console.error(e);
  let s = Date.now() + 2000;
  (await Nt(bM(), 2000, "write queue drain timeout (exit)").catch(() => {}),
    await Nt(D$e(), Math.max(0, s - Date.now()), "diagnostic log flush timeout (exit)").catch(
      () => {}
    ),
    await yYt(Math.max(0, s - Date.now()), { scaleBudgetToQueue: !1 }),
    process.exit(1));
}
var ye = new Set(["type", "message", "uuid", "session_id", "parent_tool_use_id", "timestamp"]);
function Re([e, s]) {
  return ye.has(e) || (e === "isSynthetic" && s === !1) || (e === "shouldQuery" && s === !0);
}
function ve(e) {
  if (e === void 0 || e === null) return "no_message";
  if (typeof e !== "object" || Array.isArray(e)) return "non_object_message";
  if (!("role" in e)) return "no_role";
  let s = e.role;
  if (s === void 0) return "no_role";
  if (s === null) return "role_null";
  if (Array.isArray(s)) return "role_array";
  switch (typeof s) {
    case "object":
      return "role_object";
    case "string":
      return "role_string";
    default:
      return "role_other";
  }
}
function ke(e) {
  if (typeof e !== "object" || e === null || !("message" in e)) return;
  let s = e.message;
  if (
    typeof s !== "object" ||
    s === null ||
    !("role" in s) ||
    s.role !== "user" ||
    !("content" in s) ||
    (typeof s.content !== "string" && !Array.isArray(s.content))
  )
    return;
  return { inner: s, plain: (!("type" in e) || e.type === "user") && Object.entries(e).every(Re) };
}
function Se(e, s) {
  return `Error parsing streaming input line (type=${/"type"\s*:\s*"([\w-]{1,40})"/.exec(e)?.[1] ?? "unknown"}, ${e.length} chars): ${s instanceof Error ? s.name : typeof s}`;
}
function B(e) {
  return () => ({
    type: e.type,
    ...(e.type === "user" && { uuid: Qwe(e.uuid) }),
    ...(e.type === "control_request" && { subtype: uIt(e.request.subtype) })
  });
}
export { Qwe, uIt, zX, Xyr, Cdt, Zwe };

//# sourceMappingURL=chunk-v1m407rm.js.map
