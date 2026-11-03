// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vH } from "./chunk-51fcr7jp.js";
import { o, v, M, sm, oe, T, u, yt, $e, Gr, Zbe, me, B, A, wa, $u, Ia } from "./chunk-0bqrj5ah.js";
var aOe = "2025-11-25",
  qyo = "2025-03-26",
  Ate = [aOe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  eEe = "io.modelcontextprotocol/related-task",
  R = "2.0",
  e = $u((t) => t !== null && (typeof t === "object" || typeof t === "function")),
  L = $e([o(), v().int()]),
  _ = o(),
  ee = yt({ ttl: v().optional(), pollInterval: v().optional() }),
  F = u({ ttl: v().optional() }),
  Zkr = u({ taskId: o() }),
  y = yt({ progressToken: L.optional(), [eEe]: Zkr.optional() }),
  s = u({ _meta: y.optional() }),
  z = s.extend({ task: F.optional() }),
  Yyo = (t) => z.safeParse(t).success,
  n = u({ method: o(), params: s.loose().optional() }),
  i = u({ _meta: y.optional() }),
  r = u({ method: o(), params: i.loose().optional() }),
  a = yt({ _meta: y.optional() }),
  f = $e([o(), v().int()]),
  w = u({ jsonrpc: A(R), id: f, ...n.shape }).strict(),
  p3 = (t) => w.safeParse(t).success,
  U = u({ jsonrpc: A(R), ...r.shape }).strict(),
  ZZt = (t) => U.safeParse(t).success,
  j = u({ jsonrpc: A(R), id: f, result: a }).strict(),
  $ae = (t) => j.safeParse(t).success;
var ea;
(function (t) {
  ((t[(t.ConnectionClosed = -32000)] = "ConnectionClosed"),
    (t[(t.RequestTimeout = -32001)] = "RequestTimeout"),
    (t[(t.ParseError = -32700)] = "ParseError"),
    (t[(t.InvalidRequest = -32600)] = "InvalidRequest"),
    (t[(t.MethodNotFound = -32601)] = "MethodNotFound"),
    (t[(t.InvalidParams = -32602)] = "InvalidParams"),
    (t[(t.InternalError = -32603)] = "InternalError"),
    (t[(t.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"));
})(ea || (ea = {}));
var P = u({
  jsonrpc: A(R),
  id: f.optional(),
  error: u({ code: v().int(), message: o(), data: oe().optional() })
}).strict();
var lOe = (t) => P.safeParse(t).success;
var PF = $e([w, U, j, P]),
  ne = $e([j, P]),
  dOe = a.strict(),
  H = i.extend({ requestId: f.optional(), reason: o().optional() }),
  UFn = r.extend({ method: A("notifications/cancelled"), params: H }),
  W = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: B(["light", "dark"]).optional()
  }),
  d = u({ icons: T(W).optional() }),
  l = u({ name: o(), title: o().optional() }),
  BFn = l.extend({
    ...l.shape,
    ...d.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  K = Zbe(u({ applyDefaults: M().optional() }), me(o(), oe())),
  Y = Ia(
    (t) => {
      if (t && typeof t === "object" && !Array.isArray(t)) {
        if (Object.keys(t).length === 0) return { form: {} };
      }
      return t;
    },
    Zbe(u({ form: K.optional(), url: e.optional() }), me(o(), oe()).optional())
  ),
  Q = yt({
    list: e.optional(),
    cancel: e.optional(),
    requests: yt({
      sampling: yt({ createMessage: e.optional() }).optional(),
      elicitation: yt({ create: e.optional() }).optional()
    }).optional()
  }),
  X = yt({
    list: e.optional(),
    cancel: e.optional(),
    requests: yt({ tools: yt({ call: e.optional() }).optional() }).optional()
  }),
  Z = u({
    experimental: me(o(), e).optional(),
    sampling: u({ context: e.optional(), tools: e.optional() }).optional(),
    elicitation: Y.optional(),
    roots: u({ listChanged: M().optional() }).optional(),
    tasks: Q.optional(),
    extensions: me(o(), e).optional()
  }),
  tt = s.extend({ protocolVersion: o(), capabilities: Z, clientInfo: BFn }),
  jFn = n.extend({ method: A("initialize"), params: tt }),
  eTr = (t) => jFn.safeParse(t).success,
  tTr = u({
    experimental: me(o(), e).optional(),
    logging: e.optional(),
    completions: e.optional(),
    prompts: u({ listChanged: M().optional() }).optional(),
    resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(),
    tools: u({ listChanged: M().optional() }).optional(),
    tasks: X.optional(),
    extensions: me(o(), e).optional()
  }),
  Qut = a.extend({
    protocolVersion: o(),
    capabilities: tTr,
    serverInfo: BFn,
    instructions: o().optional()
  }),
  WFn = r.extend({ method: A("notifications/initialized"), params: i.optional() }),
  Xyo = (t) => WFn.safeParse(t).success,
  GFn = n.extend({ method: A("ping"), params: s.optional() }),
  et = u({ progress: v(), total: wa(v()), message: wa(o()) }),
  ot = u({ ...i.shape, ...et.shape, progressToken: L }),
  zFn = r.extend({ method: A("notifications/progress"), params: ot }),
  nt = s.extend({ cursor: _.optional() }),
  x = n.extend({ params: nt.optional() }),
  h = a.extend({ nextCursor: _.optional() }),
  at = B(["working", "input_required", "completed", "failed", "cancelled"]),
  g = u({
    taskId: o(),
    status: at,
    ttl: $e([v(), sm()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: wa(v()),
    statusMessage: wa(o())
  }),
  tEe = a.extend({ task: g }),
  st = i.merge(g),
  een = r.extend({ method: A("notifications/tasks/status"), params: st }),
  KFn = n.extend({ method: A("tasks/get"), params: s.extend({ taskId: o() }) }),
  VFn = a.merge(g),
  qFn = n.extend({ method: A("tasks/result"), params: s.extend({ taskId: o() }) }),
  ae = a.loose(),
  YFn = x.extend({ method: A("tasks/list") }),
  XFn = h.extend({ tasks: T(g) }),
  JFn = n.extend({ method: A("tasks/cancel"), params: s.extend({ taskId: o() }) }),
  Jyo = a.merge(g),
  J = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }),
  G = J.extend({ text: o() }),
  k = o().refine(
    (t) => {
      try {
        return (atob(t), !0);
      } catch {
        return !1;
      }
    },
    { message: "Invalid Base64 string" }
  ),
  D = J.extend({ blob: k }),
  S = B(["user", "assistant"]),
  p = u({
    audience: T(S).optional(),
    priority: v().min(0).max(1).optional(),
    lastModified: $e([vH({ offset: !0 }), vH({ offset: !0, precision: -1 })]).optional()
  }),
  QFn = u({
    ...l.shape,
    ...d.shape,
    uri: o(),
    description: wa(o()),
    mimeType: wa(o()),
    size: wa(v()),
    annotations: p.optional(),
    _meta: wa(yt({}))
  }),
  nTr = u({
    ...l.shape,
    ...d.shape,
    uriTemplate: o(),
    description: wa(o()),
    mimeType: wa(o()),
    annotations: p.optional(),
    _meta: wa(yt({}))
  }),
  vhi = x.extend({ method: A("resources/list") }),
  N8e = h.extend({ resources: T(QFn) }),
  Ehi = x.extend({ method: A("resources/templates/list") }),
  ten = h.extend({ resourceTemplates: T(nTr) }),
  q = s.extend({ uri: o() }),
  it = q,
  khi = n.extend({ method: A("resources/read"), params: it }),
  rTr = a.extend({ contents: T($e([G, D])) }),
  nen = r.extend({ method: A("notifications/resources/list_changed"), params: i.optional() }),
  rt = q,
  ct = n.extend({ method: A("resources/subscribe"), params: rt }),
  lt = q,
  pt = n.extend({ method: A("resources/unsubscribe"), params: lt }),
  mt = i.extend({ uri: o() }),
  zt = r.extend({ method: A("notifications/resources/updated"), params: mt }),
  ut = u({ name: o(), description: wa(o()), required: wa(M()) }),
  oTr = u({
    ...l.shape,
    ...d.shape,
    description: wa(o()),
    arguments: wa(T(ut)),
    _meta: wa(yt({}))
  }),
  Thi = x.extend({ method: A("prompts/list") }),
  ren = h.extend({ prompts: T(oTr) }),
  dt = s.extend({ name: o(), arguments: me(o(), o()).optional() }),
  Ahi = n.extend({ method: A("prompts/get"), params: dt }),
  C = u({ type: A("text"), text: o(), annotations: p.optional(), _meta: me(o(), oe()).optional() }),
  O = u({
    type: A("image"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  N = u({
    type: A("audio"),
    data: k,
    mimeType: o(),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  xt = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: me(o(), oe()),
    _meta: me(o(), oe()).optional()
  }),
  ht = u({
    type: A("resource"),
    resource: $e([G, D]),
    annotations: p.optional(),
    _meta: me(o(), oe()).optional()
  }),
  gt = QFn.extend({ type: A("resource_link") }),
  I = $e([C, O, N, gt, ht]),
  St = u({ role: S, content: I }),
  sTr = a.extend({ description: o().optional(), messages: T(St) }),
  oen = r.extend({ method: A("notifications/prompts/list_changed"), params: i.optional() }),
  bt = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  Rt = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }),
  ZFn = u({
    ...l.shape,
    ...d.shape,
    description: o().optional(),
    inputSchema: u({
      type: A("object"),
      properties: me(o(), e).optional(),
      required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: u({
      type: A("object"),
      properties: me(o(), e).optional(),
      required: T(o()).optional()
    })
      .catchall(oe())
      .optional(),
    annotations: bt.optional(),
    execution: Rt.optional(),
    _meta: me(o(), oe()).optional()
  }),
  vme = x.extend({ method: A("tools/list") }),
  yDt = h.extend({ tools: T(ZFn) }),
  nEe = a.extend({
    content: T(I).default([]),
    structuredContent: me(o(), oe()).optional(),
    isError: M().optional()
  }),
  Qyo = nEe.or(a.extend({ toolResult: oe() })),
  ft = z.extend({ name: o(), arguments: me(o(), oe()).optional() }),
  uJ = n.extend({ method: A("tools/call"), params: ft }),
  sen = r.extend({ method: A("notifications/tools/list_changed"), params: i.optional() }),
  Zyo = u({ autoRefresh: M().default(!0), debounceMs: v().int().nonnegative().default(300) }),
  ien = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  jt = s.extend({ level: ien }),
  iTr = n.extend({ method: A("logging/setLevel"), params: jt }),
  Pt = i.extend({ level: ien, logger: o().optional(), data: oe() }),
  Tt = r.extend({ method: A("notifications/message"), params: Pt }),
  kt = u({ name: o().optional() }),
  qt = u({
    hints: T(kt).optional(),
    costPriority: v().min(0).max(1).optional(),
    speedPriority: v().min(0).max(1).optional(),
    intelligencePriority: v().min(0).max(1).optional()
  }),
  Ct = u({ mode: B(["auto", "required", "none"]).optional() }),
  Ot = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(I).default([]),
    structuredContent: u({}).loose().optional(),
    isError: M().optional(),
    _meta: me(o(), oe()).optional()
  }),
  Nt = Gr("type", [C, O, N]),
  b = Gr("type", [C, O, N, xt, Ot]),
  It = u({ role: S, content: $e([b, T(b)]), _meta: me(o(), oe()).optional() }),
  Et = z.extend({
    messages: T(It),
    modelPreferences: qt.optional(),
    systemPrompt: o().optional(),
    includeContext: B(["none", "thisServer", "allServers"]).optional(),
    temperature: v().optional(),
    maxTokens: v().int(),
    stopSequences: T(o()).optional(),
    metadata: e.optional(),
    tools: T(ZFn).optional(),
    toolChoice: Ct.optional()
  }),
  aTr = n.extend({ method: A("sampling/createMessage"), params: Et }),
  $8e = a.extend({
    model: o(),
    stopReason: wa(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: S,
    content: Nt
  }),
  _Dt = a.extend({
    model: o(),
    stopReason: wa(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: S,
    content: $e([b, T(b)])
  }),
  Lt = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  _t = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: v().optional(),
    maxLength: v().optional(),
    format: B(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  wt = u({
    type: B(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: v().optional(),
    maximum: v().optional(),
    default: v().optional()
  }),
  Mt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
  }),
  vt = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({ const: o(), title: o() })),
    default: o().optional()
  }),
  Ut = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
  }),
  At = $e([Mt, vt]),
  Jt = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({ type: A("string"), enum: T(o()) }),
    default: T(o()).optional()
  }),
  Bt = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({ anyOf: T(u({ const: o(), title: o() })) }),
    default: T(o()).optional()
  }),
  Gt = $e([Jt, Bt]),
  Dt = $e([Ut, At, Gt]),
  Vt = $e([Dt, Lt, _t, wt]),
  Ft = z.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({ type: A("object"), properties: me(o(), Vt), required: T(o()).optional() })
  }),
  lTr = z.extend({ mode: A("url"), message: o(), elicitationId: o(), url: o().url() }),
  Ht = $e([Ft, lTr]),
  JBe = n.extend({ method: A("elicitation/create"), params: Ht }),
  $t = i.extend({ elicitationId: o() }),
  bDt = r.extend({ method: A("notifications/elicitation/complete"), params: $t }),
  QBe = a.extend({
    action: B(["accept", "decline", "cancel"]),
    content: Ia((t) => (t === null ? void 0 : t), me(o(), $e([o(), v(), M(), T(o())])).optional())
  }),
  Wt = u({ type: A("ref/resource"), uri: o() });
var Kt = u({ type: A("ref/prompt"), name: o() }),
  Yt = s.extend({
    ref: $e([Kt, Wt]),
    argument: u({ name: o(), value: o() }),
    context: u({ arguments: me(o(), o()).optional() }).optional()
  }),
  Chi = n.extend({ method: A("completion/complete"), params: Yt });
function OAi(t) {
  if (t.params.ref.type !== "ref/prompt")
    throw TypeError(`Expected CompleteRequestPrompt, but got ${t.params.ref.type}`);
}
function MAi(t) {
  if (t.params.ref.type !== "ref/resource")
    throw TypeError(`Expected CompleteRequestResourceTemplate, but got ${t.params.ref.type}`);
}
var dTr = a.extend({
    completion: yt({ values: T(o()).max(100), total: wa(v().int()), hasMore: wa(M()) })
  }),
  Qt = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }),
  cTr = n.extend({ method: A("roots/list"), params: s.optional() }),
  uTr = a.extend({ roots: T(Qt) }),
  Xt = r.extend({ method: A("notifications/roots/list_changed"), params: i.optional() }),
  se = $e([GFn, jFn, Chi, iTr, Ahi, Thi, vhi, Ehi, khi, ct, pt, uJ, vme, KFn, qFn, YFn, JFn]),
  ie = $e([UFn, zFn, WFn, Xt, een]),
  re = $e([dOe, $8e, _Dt, QBe, uTr, VFn, XFn, tEe]),
  ce = $e([GFn, aTr, JBe, cTr, KFn, qFn, YFn, JFn]),
  le = $e([UFn, zFn, Tt, zt, nen, sen, oen, een, bDt]),
  pe = $e([dOe, Qut, dTr, sTr, ren, N8e, ten, rTr, nEe, yDt, VFn, XFn, tEe]);
class Mi extends Error {
  constructor(t, c, m) {
    super(`MCP error ${t}: ${c}`);
    ((this.code = t), (this.data = m), (this.name = "McpError"));
  }
  static fromError(t, c, m) {
    if (t === ea.UrlElicitationRequired && m) {
      let E = m;
      if (E.elicitations) return new V(E.elicitations, c);
    }
    return new Mi(t, c, m);
  }
}
class V extends Mi {
  constructor(t, c = `URL elicitation${t.length > 1 ? "s" : ""} required`) {
    super(ea.UrlElicitationRequired, c, { elicitations: t });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
}
export {
  aOe,
  qyo,
  Ate,
  eEe,
  Zkr,
  Yyo,
  p3,
  ZZt,
  $ae,
  ea,
  lOe,
  PF,
  dOe,
  UFn,
  BFn,
  jFn,
  eTr,
  tTr,
  Qut,
  WFn,
  Xyo,
  GFn,
  zFn,
  tEe,
  een,
  KFn,
  VFn,
  qFn,
  YFn,
  XFn,
  JFn,
  Jyo,
  QFn,
  nTr,
  vhi,
  N8e,
  Ehi,
  ten,
  khi,
  rTr,
  nen,
  oTr,
  Thi,
  ren,
  Ahi,
  sTr,
  oen,
  ZFn,
  vme,
  yDt,
  nEe,
  Qyo,
  uJ,
  sen,
  Zyo,
  ien,
  iTr,
  aTr,
  $8e,
  _Dt,
  lTr,
  JBe,
  bDt,
  QBe,
  Chi,
  OAi,
  MAi,
  dTr,
  cTr,
  uTr,
  Mi
};

//# sourceMappingURL=chunk-0szbzt7f.js.map
