// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Stn } from "./chunk-9cvhnn3s.js";
import { n9e } from "./chunk-x3ssc7j1.js";
import { btn } from "./chunk-q0e6vzt5.js";
import { vH, Ewi } from "./chunk-51fcr7jp.js";
import { o6, g$e } from "./chunk-vt31n0jt.js";
import {
  ost,
  X3r,
  o,
  xci,
  x4e,
  v,
  M,
  sm,
  UZ,
  oe,
  T,
  u,
  yt,
  $e,
  Gr,
  Zbe,
  me,
  B,
  A,
  wa,
  gA,
  Ia
} from "./chunk-0bqrj5ah.js";
import { hq } from "./chunk-tezcm8zk.js";
var {
    create: Rc,
    defineProperty: ws,
    getOwnPropertyDescriptor: zc,
    getOwnPropertyNames: wc,
    getPrototypeOf: $c
  } = Object,
  Ec = Object.prototype.hasOwnProperty,
  K = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Pn = (e, t) => {
    let r = {};
    for (var s in e) ws(r, s, { get: e[s], enumerable: !0 });
    if (t) ws(r, Symbol.toStringTag, { value: "Module" });
    return r;
  },
  Pc = (e, t, r, s) => {
    if ((t && typeof t === "object") || typeof t === "function") {
      for (var a = wc(t), n = 0, i = a.length, l; n < i; n++)
        if (((l = a[n]), !Ec.call(e, l) && l !== r))
          ws(e, l, {
            get: ((c) => t[c]).bind(null, l),
            enumerable: !(s = zc(t, l)) || s.enumerable
          });
    }
    return e;
  },
  $s = (e, t, r) => (
    (r = e != null ? Rc($c(e)) : {}),
    Pc(t || !e || !e.__esModule ? ws(r, "default", { value: e, enumerable: !0 }) : r, e)
  );
var Ot = "2025-11-25";
var aft = [Ot, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"],
  Wen = "io.modelcontextprotocol/related-task",
  Fe = "io.modelcontextprotocol/protocolVersion",
  Nt = "io.modelcontextprotocol/clientInfo",
  He = "io.modelcontextprotocol/serverInfo",
  pOe = "io.modelcontextprotocol/clientCapabilities",
  vr = "io.modelcontextprotocol/subscriptionId",
  Mt = "io.modelcontextprotocol/logLevel";
var gt = "2.0";
var PUn = -32601;
var Qe = gA(() => $e([o(), v(), M(), sm(), me(o(), Qe), T(Qe)])),
  de = me(o(), Qe),
  Eo = T(Qe),
  br = $e([o(), v().int()]),
  Rr = o(),
  Es = u({ ttl: v().optional() }),
  Gen = u({ taskId: o() }),
  zr = yt({ progressToken: br.optional(), [Wen]: Gen.optional() }),
  be = u({ _meta: zr.optional() }),
  _t = be.extend({ task: Es.optional() }),
  he = u({ method: o(), params: be.loose().optional() }),
  Ee = u({ _meta: zr.optional() }),
  Pe = u({ method: o(), params: Ee.loose().optional() }),
  wr = yt({
    get [He]() {
      return lft.optional().catch(void 0);
    }
  }),
  tO = yt({ _meta: wr.optional() }),
  et = $e([o(), v().int()]),
  $r = u({ jsonrpc: A(gt), id: et, ...he.shape }).strict(),
  Er = u({ jsonrpc: A(gt), ...Pe.shape }).strict(),
  jt = u({ jsonrpc: A(gt), id: et, result: tO }).strict(),
  At = u({
    jsonrpc: A(gt),
    id: et.optional(),
    error: u({ code: v().int(), message: o(), data: oe().optional() })
  }).strict(),
  Fae = $e([$r, Er, jt, At]),
  Po = $e([jt, At]),
  Pr = tO.strict(),
  Ps = Ee.extend({ requestId: et.optional(), reason: o().optional() }),
  Tr = Pe.extend({ method: A("notifications/cancelled"), params: Ps }),
  Ts = u({
    src: o(),
    mimeType: o().optional(),
    sizes: T(o()).optional(),
    theme: B(["light", "dark"]).optional()
  }),
  tt = u({ icons: T(Ts).optional() }),
  xe = u({ name: o(), title: o().optional() }),
  lft = xe.extend({
    ...xe.shape,
    ...tt.shape,
    version: o(),
    websiteUrl: o().optional(),
    description: o().optional()
  }),
  kc = Zbe(u({ applyDefaults: M().optional() }), de),
  qc = Ia(
    (e) => {
      if (e && typeof e === "object" && !Array.isArray(e) && Object.keys(e).length === 0)
        return { form: {} };
      return e;
    },
    Zbe(u({ form: kc.optional(), url: de.optional() }), de.optional())
  ),
  Cs = yt({
    list: de.optional(),
    cancel: de.optional(),
    requests: yt({
      sampling: yt({ createMessage: de.optional() }).optional(),
      elicitation: yt({ create: de.optional() }).optional()
    }).optional()
  }),
  ks = yt({
    list: de.optional(),
    cancel: de.optional(),
    requests: yt({ tools: yt({ call: de.optional() }).optional() }).optional()
  }),
  qs = u({
    experimental: me(o(), de).optional(),
    sampling: u({ context: de.optional(), tools: de.optional() }).optional(),
    elicitation: qc.optional(),
    roots: u({ listChanged: M().optional() }).optional(),
    tasks: Cs.optional(),
    extensions: me(o(), de).optional()
  }),
  Is = be.extend({ protocolVersion: o(), capabilities: qs, clientInfo: lft }),
  Cr = he.extend({ method: A("initialize"), params: Is }),
  MDt = u({
    experimental: me(o(), de).optional(),
    logging: de.optional(),
    completions: de.optional(),
    prompts: u({ listChanged: M().optional() }).optional(),
    resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(),
    tools: u({ listChanged: M().optional() }).optional(),
    tasks: ks.optional(),
    extensions: me(o(), de).optional()
  }),
  dft = tO.extend({
    protocolVersion: o(),
    capabilities: MDt,
    serverInfo: lft,
    instructions: o().optional()
  }),
  kr = Pe.extend({ method: A("notifications/initialized"), params: Ee.optional() }),
  Os = he.extend({ method: A("server/discover"), params: be.optional() }),
  z8e = tO.extend({ supportedVersions: T(o()), capabilities: MDt, instructions: o().optional() }),
  qr = he.extend({ method: A("ping"), params: be.optional() }),
  Ns = u({ progress: v(), total: wa(v()), message: wa(o()) }),
  Ms = u({ ...Ee.shape, ...Ns.shape, progressToken: br }),
  Ir = Pe.extend({ method: A("notifications/progress"), params: Ms }),
  js = be.extend({ cursor: Rr.optional() }),
  rt = he.extend({ params: js.optional() }),
  st = tO.extend({ nextCursor: Rr.optional() }),
  Or = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }),
  Nr = Or.extend({ text: o() }),
  To = o().refine(
    (e) => {
      try {
        return (atob(e), !0);
      } catch {
        return !1;
      }
    },
    { message: "Invalid Base64 string" }
  ),
  Mr = Or.extend({ blob: To }),
  at = B(["user", "assistant"]),
  Ke = u({
    audience: T(at).optional(),
    priority: v().min(0).max(1).optional(),
    lastModified: $e([vH({ offset: !0 }), vH({ offset: !0, precision: -1 })]).optional()
  }),
  DDt = u({
    ...xe.shape,
    ...tt.shape,
    uri: o(),
    description: wa(o()),
    mimeType: wa(o()),
    size: wa(v()),
    annotations: Ke.optional(),
    _meta: wa(yt({}))
  }),
  zen = u({
    ...xe.shape,
    ...tt.shape,
    uriTemplate: o(),
    description: wa(o()),
    mimeType: wa(o()),
    annotations: Ke.optional(),
    _meta: wa(yt({}))
  }),
  As = rt.extend({ method: A("resources/list") }),
  K8e = st.extend({ resources: T(DDt) }),
  Ls = rt.extend({ method: A("resources/templates/list") }),
  Ken = st.extend({ resourceTemplates: T(zen) }),
  Lt = be.extend({ uri: o() }),
  Us = Lt,
  Ds = he.extend({ method: A("resources/read"), params: Us }),
  Vs = tO.extend({ contents: T($e([Nr, Mr])) }),
  xs = Pe.extend({ method: A("notifications/resources/list_changed"), params: Ee.optional() }),
  Fs = Lt,
  Hs = he.extend({ method: A("resources/subscribe"), params: Fs }),
  Ks = Lt,
  Js = he.extend({ method: A("resources/unsubscribe"), params: Ks }),
  jr = u({
    toolsListChanged: M().optional(),
    promptsListChanged: M().optional(),
    resourcesListChanged: M().optional(),
    resourceSubscriptions: T(o()).optional()
  }),
  Gs = be.extend({ notifications: jr }),
  Bs = he.extend({ method: A("subscriptions/listen"), params: Gs }),
  Ws = Ee.extend({ notifications: jr }),
  Ys = Pe.extend({ method: A("notifications/subscriptions/acknowledged"), params: Ws }),
  Xs = wr.extend({ [vr]: et }),
  Zs = tO.extend({ _meta: Xs }),
  Qs = Ee.extend({ uri: o() }),
  ea = Pe.extend({ method: A("notifications/resources/updated"), params: Qs }),
  ra = u({ name: o(), description: wa(o()), required: wa(M()) }),
  Ven = u({
    ...xe.shape,
    ...tt.shape,
    description: wa(o()),
    arguments: wa(T(ra)),
    _meta: wa(yt({}))
  }),
  sa = rt.extend({ method: A("prompts/list") }),
  qen = st.extend({ prompts: T(Ven) }),
  aa = be.extend({ name: o(), arguments: me(o(), o()).optional() }),
  oa = he.extend({ method: A("prompts/get"), params: aa }),
  Ut = u({
    type: A("text"),
    text: o(),
    annotations: Ke.optional(),
    _meta: me(o(), oe()).optional()
  }),
  Dt = u({
    type: A("image"),
    data: To,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: me(o(), oe()).optional()
  }),
  Vt = u({
    type: A("audio"),
    data: To,
    mimeType: o(),
    annotations: Ke.optional(),
    _meta: me(o(), oe()).optional()
  }),
  na = u({
    type: A("tool_use"),
    name: o(),
    id: o(),
    input: me(o(), oe()),
    _meta: me(o(), oe()).optional()
  }),
  ia = u({
    type: A("resource"),
    resource: $e([Nr, Mr]),
    annotations: Ke.optional(),
    _meta: me(o(), oe()).optional()
  }),
  ca = DDt.extend({ type: A("resource_link") }),
  xt = $e([Ut, Dt, Vt, ca, ia]),
  la = u({ role: at, content: xt }),
  ua = tO.extend({ description: o().optional(), messages: T(la) }),
  da = Pe.extend({ method: A("notifications/prompts/list_changed"), params: Ee.optional() }),
  ha = u({
    title: o().optional(),
    readOnlyHint: M().optional(),
    destructiveHint: M().optional(),
    idempotentHint: M().optional(),
    openWorldHint: M().optional()
  }),
  ma = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }),
  HDt = u({
    ...xe.shape,
    ...tt.shape,
    description: o().optional(),
    inputSchema: u({
      type: A("object"),
      properties: me(o(), Qe).optional(),
      required: T(o()).optional()
    }).catchall(oe()),
    outputSchema: yt({ $schema: o().optional() }).optional(),
    annotations: ha.optional(),
    execution: ma.optional(),
    _meta: me(o(), oe()).optional()
  }),
  pa = rt.extend({ method: A("tools/list") }),
  V8e = st.extend({ tools: T(HDt) }),
  Ar = tO.extend({
    content: T(xt).default([]),
    structuredContent: oe().optional(),
    isError: M().optional()
  }),
  Yen = Ar.or(tO.extend({ toolResult: oe() })),
  fa = _t.extend({ name: o(), arguments: me(o(), oe()).optional() }),
  Sa = he.extend({ method: A("tools/call"), params: fa }),
  ga = Pe.extend({ method: A("notifications/tools/list_changed"), params: Ee.optional() }),
  Lr = u({ autoRefresh: M().default(!0), debounceMs: v().int().nonnegative().default(300) }),
  Ur = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
  _a = be.extend({ level: Ur }),
  ya = he.extend({ method: A("logging/setLevel"), params: _a }),
  va = Ee.extend({ level: Ur, logger: o().optional(), data: oe() }),
  ba = Pe.extend({ method: A("notifications/message"), params: va }),
  Ra = u({ name: o().optional() }),
  za = u({
    hints: T(Ra).optional(),
    costPriority: v().min(0).max(1).optional(),
    speedPriority: v().min(0).max(1).optional(),
    intelligencePriority: v().min(0).max(1).optional()
  }),
  $a = u({ mode: B(["auto", "required", "none"]).optional() }),
  Ea = u({
    type: A("tool_result"),
    toolUseId: o().describe("The unique identifier for the corresponding tool call."),
    content: T(xt),
    structuredContent: oe().optional(),
    isError: M().optional(),
    _meta: me(o(), oe()).optional()
  }),
  Pa = Gr("type", [Ut, Dt, Vt]),
  St = Gr("type", [Ut, Dt, Vt, na, Ea]),
  Ta = u({ role: at, content: $e([St, T(St)]), _meta: me(o(), oe()).optional() }),
  Ca = _t.extend({
    messages: T(Ta),
    modelPreferences: za.optional(),
    systemPrompt: o().optional(),
    includeContext: B(["none", "thisServer", "allServers"]).optional(),
    temperature: v().optional(),
    maxTokens: v().int(),
    stopSequences: T(o()).optional(),
    metadata: de.optional(),
    tools: T(HDt).optional(),
    toolChoice: $a.optional()
  }),
  ka = he.extend({ method: A("sampling/createMessage"), params: Ca }),
  qa = tO.extend({
    model: o(),
    stopReason: wa(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
    role: at,
    content: Pa
  }),
  Oa = tO.extend({
    model: o(),
    stopReason: wa(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
    role: at,
    content: $e([St, T(St)])
  }),
  Dr = u({
    type: A("boolean"),
    title: o().optional(),
    description: o().optional(),
    default: M().optional()
  }),
  Ft = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    minLength: v().optional(),
    maxLength: v().optional(),
    format: B(["email", "uri", "date", "date-time"]).optional(),
    default: o().optional()
  }),
  Ht = u({
    type: B(["number", "integer"]),
    title: o().optional(),
    description: o().optional(),
    minimum: v().optional(),
    maximum: v().optional(),
    default: v().optional()
  }),
  Vr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    default: o().optional()
  }),
  xr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    oneOf: T(u({ const: o(), title: o() })),
    default: o().optional()
  }),
  Fr = u({
    type: A("string"),
    title: o().optional(),
    description: o().optional(),
    enum: T(o()),
    enumNames: T(o()).optional(),
    default: o().optional()
  }),
  Na = $e([Vr, xr]),
  Hr = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({ type: A("string"), enum: T(o()) }),
    default: T(o()).optional()
  }),
  Kr = u({
    type: A("array"),
    title: o().optional(),
    description: o().optional(),
    minItems: v().optional(),
    maxItems: v().optional(),
    items: u({ anyOf: T(u({ const: o(), title: o() })) }),
    default: T(o()).optional()
  }),
  Ma = $e([Hr, Kr]),
  ja = $e([Fr, Na, Ma]),
  Jr = $e([ja, Dr, Ft, Ht]),
  Kt = _t.extend({
    mode: A("form").optional(),
    message: o(),
    requestedSchema: u({
      type: A("object"),
      properties: me(o(), Jr),
      required: T(o()).optional()
    }).catchall(oe())
  }),
  LDt = _t.extend({ mode: A("url"), message: o(), elicitationId: o(), url: o().url() }),
  Xen = $e([Kt, LDt]),
  Aa = he.extend({ method: A("elicitation/create"), params: Xen }),
  La = Ee.extend({ elicitationId: o() }),
  Ua = Pe.extend({ method: A("notifications/elicitation/complete"), params: La }),
  Da = tO.extend({
    action: B(["accept", "decline", "cancel"]),
    content: Ia((e) => (e === null ? void 0 : e), me(o(), $e([o(), v(), M(), T(o())])).optional())
  }),
  Va = u({ type: A("ref/resource"), uri: o() }),
  xa = u({ type: A("ref/prompt"), name: o() }),
  Fa = be.extend({
    ref: $e([xa, Va]),
    argument: u({ name: o(), value: o() }),
    context: u({ arguments: me(o(), o()).optional() }).optional()
  }),
  Ha = he.extend({ method: A("completion/complete"), params: Fa }),
  Ka = tO.extend({
    completion: yt({ values: T(o()).max(100), total: wa(v().int()), hasMore: wa(M()) })
  }),
  Ja = u({ uri: o().startsWith("file://"), name: o().optional(), _meta: me(o(), oe()).optional() }),
  Ga = he.extend({ method: A("roots/list"), params: be.optional() }),
  Ba = tO.extend({ roots: T(Ja) }),
  Wa = Pe.extend({ method: A("notifications/roots/list_changed"), params: Ee.optional() }),
  Co = yt({ ttl: v().optional(), pollInterval: v().optional() }),
  Ya = B(["working", "input_required", "completed", "failed", "cancelled"]),
  ot = u({
    taskId: o(),
    status: Ya,
    ttl: $e([v(), sm()]),
    createdAt: o(),
    lastUpdatedAt: o(),
    pollInterval: wa(v()),
    statusMessage: wa(o())
  }),
  ko = tO.extend({ task: ot }),
  Xa = Ee.merge(ot),
  qo = Pe.extend({ method: A("notifications/tasks/status"), params: Xa }),
  Io = he.extend({ method: A("tasks/get"), params: be.extend({ taskId: o() }) }),
  Oo = tO.merge(ot),
  No = he.extend({ method: A("tasks/result"), params: be.extend({ taskId: o() }) }),
  Mo = tO.loose(),
  jo = rt.extend({ method: A("tasks/list") }),
  Ao = st.extend({ tasks: T(ot) }),
  Lo = he.extend({ method: A("tasks/cancel"), params: be.extend({ taskId: o() }) }),
  Uo = tO.merge(ot),
  Do = $e([qr, Cr, Os, Ha, ya, oa, sa, As, Ls, Ds, Hs, Js, Bs, Sa, pa]),
  Vo = $e([Tr, Ir, kr, Wa]),
  xo = $e([Pr, qa, Oa, Da, Ba]),
  Fo = $e([qr, ka, Aa, Ga]),
  Ho = $e([Tr, Ir, ba, ea, xs, ga, da, Ys, Ua]),
  Ko = $e([Pr, dft, z8e, Ka, ua, qen, K8e, Ken, Vs, Ar, V8e, Zs]),
  ve = x4e()
    .superRefine((e, t) => {
      if (!URL.canParse(e))
        return (t.addIssue({ code: o6.custom, message: "URL must be parseable", fatal: !0 }), hq);
    })
    .refine(
      (e) => {
        let t = new URL(e);
        return t.protocol !== "javascript:" && t.protocol !== "data:" && t.protocol !== "vbscript:";
      },
      { message: "URL cannot use javascript:, data:, or vbscript: scheme" }
    ),
  Br = yt({
    resource: o().url(),
    authorization_servers: T(ve).optional(),
    jwks_uri: o().url().optional(),
    scopes_supported: T(o()).optional(),
    bearer_methods_supported: T(o()).optional(),
    resource_signing_alg_values_supported: T(o()).optional(),
    resource_name: o().optional(),
    resource_documentation: o().optional(),
    resource_policy_uri: o().url().optional(),
    resource_tos_uri: o().url().optional(),
    tls_client_certificate_bound_access_tokens: M().optional(),
    authorization_details_types_supported: T(o()).optional(),
    dpop_signing_alg_values_supported: T(o()).optional(),
    dpop_bound_access_tokens_required: M().optional()
  }),
  cft = yt({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    service_documentation: ve.optional(),
    revocation_endpoint: ve.optional(),
    revocation_endpoint_auth_methods_supported: T(o()).optional(),
    revocation_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    introspection_endpoint: o().optional(),
    introspection_endpoint_auth_methods_supported: T(o()).optional(),
    introspection_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    code_challenge_methods_supported: T(o()).optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M()
      .optional()
      .catch(void 0)
  }),
  Za = yt({
    issuer: o(),
    authorization_endpoint: ve,
    token_endpoint: ve,
    userinfo_endpoint: ve.optional(),
    jwks_uri: ve,
    registration_endpoint: ve.optional(),
    scopes_supported: T(o()).optional(),
    response_types_supported: T(o()),
    response_modes_supported: T(o()).optional(),
    grant_types_supported: T(o()).optional(),
    acr_values_supported: T(o()).optional(),
    subject_types_supported: T(o()),
    id_token_signing_alg_values_supported: T(o()),
    id_token_encryption_alg_values_supported: T(o()).optional(),
    id_token_encryption_enc_values_supported: T(o()).optional(),
    userinfo_signing_alg_values_supported: T(o()).optional(),
    userinfo_encryption_alg_values_supported: T(o()).optional(),
    userinfo_encryption_enc_values_supported: T(o()).optional(),
    request_object_signing_alg_values_supported: T(o()).optional(),
    request_object_encryption_alg_values_supported: T(o()).optional(),
    request_object_encryption_enc_values_supported: T(o()).optional(),
    token_endpoint_auth_methods_supported: T(o()).optional(),
    token_endpoint_auth_signing_alg_values_supported: T(o()).optional(),
    display_values_supported: T(o()).optional(),
    claim_types_supported: T(o()).optional(),
    claims_supported: T(o()).optional(),
    service_documentation: o().optional(),
    claims_locales_supported: T(o()).optional(),
    ui_locales_supported: T(o()).optional(),
    claims_parameter_supported: M().optional(),
    request_parameter_supported: M().optional(),
    request_uri_parameter_supported: M().optional(),
    require_request_uri_registration: M().optional(),
    op_policy_uri: ve.optional(),
    op_tos_uri: ve.optional(),
    client_id_metadata_document_supported: M().optional(),
    authorization_response_iss_parameter_supported: M()
      .optional()
      .catch(void 0)
  }),
  NDt = u({ ...Za.shape, ...cft.pick({ code_challenge_methods_supported: !0 }).shape }),
  $Dt = u({
    access_token: o(),
    id_token: o().optional(),
    token_type: o(),
    expires_in: g$e().optional(),
    scope: o().optional(),
    refresh_token: o().optional()
  }).strip(),
  Qa = u({
    issued_token_type: A("urn:ietf:params:oauth:token-type:id-jag"),
    access_token: o(),
    token_type: o().optional(),
    expires_in: v().optional(),
    scope: o().optional()
  }).strip(),
  FDt = u({ error: o(), error_description: o().optional(), error_uri: o().optional() }),
  $o = ve.optional().or(
    A("").transform(() => {
      return;
    })
  ),
  eo = u({
    redirect_uris: T(ve),
    token_endpoint_auth_method: o().optional(),
    grant_types: T(o()).optional(),
    response_types: T(o()).optional(),
    application_type: o().optional(),
    client_name: o().optional(),
    client_uri: ve.optional(),
    logo_uri: $o,
    scope: o().optional(),
    contacts: T(o()).optional(),
    tos_uri: $o,
    policy_uri: o().optional(),
    jwks_uri: ve.optional(),
    jwks: UZ().optional(),
    software_id: o().optional(),
    software_version: o().optional(),
    software_statement: o().optional()
  }).strip(),
  to = u({
    client_id: o(),
    client_secret: o().optional(),
    client_id_issued_at: v().optional(),
    client_secret_expires_at: v().optional()
  }).strip(),
  Wr = eo.merge(to),
  Jo = u({ error: o(), error_description: o().optional() }).strip(),
  Go = u({ token: o(), token_type_hint: o().optional() }).strip();
var Zo = Symbol.for("mcp.sdk.errorBrands");
function bt(e, t) {
  let r = new Set(),
    s = t;
  while (typeof s === "function") {
    let a = s.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(s, "mcpBrand") && typeof a === "string") r.add(a);
    s = Object.getPrototypeOf(s);
  }
  if (r.size === 0) return;
  Object.defineProperty(e, Zo, { value: r, enumerable: !1, configurable: !0 });
}
function Oe(e, t) {
  try {
    if (
      typeof t === "object" &&
      t !== null &&
      Object.prototype.hasOwnProperty.call(e, "mcpBrand") &&
      typeof e.mcpBrand === "string" &&
      Object.prototype.hasOwnProperty.call(t, Zo)
    ) {
      let r = t[Zo];
      if (r && typeof r.has === "function" && r.has(e.mcpBrand)) return !0;
    }
  } catch {}
  return Function.prototype[Symbol.hasInstance].call(e, t);
}
var Uae = (function (e) {
    return (
      (e.InvalidRequest = "invalid_request"),
      (e.InvalidClient = "invalid_client"),
      (e.InvalidGrant = "invalid_grant"),
      (e.UnauthorizedClient = "unauthorized_client"),
      (e.UnsupportedGrantType = "unsupported_grant_type"),
      (e.InvalidScope = "invalid_scope"),
      (e.AccessDenied = "access_denied"),
      (e.ServerError = "server_error"),
      (e.TemporarilyUnavailable = "temporarily_unavailable"),
      (e.UnsupportedResponseType = "unsupported_response_type"),
      (e.UnsupportedTokenType = "unsupported_token_type"),
      (e.InvalidToken = "invalid_token"),
      (e.MethodNotAllowed = "method_not_allowed"),
      (e.TooManyRequests = "too_many_requests"),
      (e.InvalidClientMetadata = "invalid_client_metadata"),
      (e.InvalidRedirectUri = "invalid_redirect_uri"),
      (e.InsufficientScope = "insufficient_scope"),
      (e.InvalidTarget = "invalid_target"),
      e
    );
  })({}),
  y4 = class e extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
    }
    static [Symbol.hasInstance](t) {
      return Oe(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
        );
      return Oe(this, t);
    }
    constructor(t, r, s) {
      super(r);
      ((this.code = t), (this.errorUri = s), (this.name = "OAuthError"), bt(this, new.target));
    }
    toResponseObject() {
      let t = { error: this.code, error_description: this.message };
      if (this.errorUri) t.error_uri = this.errorUri;
      return t;
    }
    static fromResponse(t) {
      return new e(t.error, t.error_description ?? t.error, t.error_uri);
    }
  },
  ii = (function (e) {
    return (
      (e.NotConnected = "NOT_CONNECTED"),
      (e.AlreadyConnected = "ALREADY_CONNECTED"),
      (e.NotInitialized = "NOT_INITIALIZED"),
      (e.CapabilityNotSupported = "CAPABILITY_NOT_SUPPORTED"),
      (e.RequestTimeout = "REQUEST_TIMEOUT"),
      (e.ConnectionClosed = "CONNECTION_CLOSED"),
      (e.SendFailed = "SEND_FAILED"),
      (e.InvalidResult = "INVALID_RESULT"),
      (e.UnsupportedResultType = "UNSUPPORTED_RESULT_TYPE"),
      (e.InputRequiredRoundsExceeded = "INPUT_REQUIRED_ROUNDS_EXCEEDED"),
      (e.ListPaginationExceeded = "LIST_PAGINATION_EXCEEDED"),
      (e.MethodNotSupportedByProtocolVersion = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION"),
      (e.EraNegotiationFailed = "ERA_NEGOTIATION_FAILED"),
      (e.ClientHttpNotImplemented = "CLIENT_HTTP_NOT_IMPLEMENTED"),
      (e.ClientHttpAuthentication = "CLIENT_HTTP_AUTHENTICATION"),
      (e.ClientHttpForbidden = "CLIENT_HTTP_FORBIDDEN"),
      (e.ClientHttpUnexpectedContent = "CLIENT_HTTP_UNEXPECTED_CONTENT"),
      (e.ClientHttpFailedToOpenStream = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM"),
      (e.ClientHttpFailedToTerminateSession = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION"),
      e
    );
  })({}),
  bi = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
        );
      return Oe(this, e);
    }
    constructor(e, t, r) {
      super(t);
      ((this.code = e), (this.data = r), (this.name = "SdkError"), bt(this, new.target));
    }
  },
  RT = class extends bi {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
    }
    constructor(e, t, r) {
      super(e, t, r);
      this.name = "SdkHttpError";
    }
    get status() {
      return this.data.status;
    }
    get statusText() {
      return this.data.statusText;
    }
  };
function Jn(e) {
  let t = typeof e === "string" ? new URL(e) : new URL(e.href);
  return ((t.hash = ""), t);
}
function Gn({ requestedResource: e, configuredResource: t }) {
  let r = typeof e === "string" ? new URL(e) : new URL(e.href),
    s = typeof t === "string" ? new URL(t) : new URL(t.href);
  if (r.origin !== s.origin) return !1;
  if (r.pathname.length < s.pathname.length) return !1;
  let a = r.pathname.endsWith("/") ? r.pathname : r.pathname + "/",
    n = s.pathname.endsWith("/") ? s.pathname : s.pathname + "/";
  return a.startsWith(n);
}
var Bn = "2026-07-28",
  sn = [Bn];
function Ge(e) {
  return e >= Bn;
}
function an(e) {
  return e.filter((t) => !Ge(t));
}
function rs(e) {
  return e.filter((t) => Ge(t));
}
function Wn(e) {
  let t = e.structuredContent;
  if (t === void 0) return e;
  if (!(typeof t !== "object" || t === null || Array.isArray(t))) return e;
  if (e.content?.some((r) => r.type === "text") ?? !1) return e;
  return { ...e, content: [...(e.content ?? []), { type: "text", text: JSON.stringify(t) }] };
}
var Yn = ["task", "inputRequests", "requestState"];
function Ic(e) {
  if (
    e === null ||
    typeof e !== "object" ||
    Array.isArray(e) ||
    e.content !== void 0 ||
    Yn.some((t) => t in e)
  )
    return e;
  return { ...e, content: [] };
}
function Oc() {
  let e = gA(() => $e([o(), v(), M(), sm(), me(o(), e), T(e)])),
    t = me(o(), e),
    r = $e([o(), v().int()]),
    s = o(),
    a = u({ ttl: v().optional() }),
    n = u({ taskId: o() }),
    i = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": n.optional() }),
    l = u({ _meta: i.optional() }),
    c = l.extend({ task: a.optional() }),
    d = u({ method: o(), params: l.loose().optional() }),
    m = u({ _meta: i.optional() }),
    _ = u({ method: o(), params: m.loose().optional() }),
    E = yt({ _meta: i.optional() }),
    P = $e([o(), v().int()]),
    y = E.strict(),
    b = m.extend({ requestId: P.optional(), reason: o().optional() }),
    p = _.extend({ method: A("notifications/cancelled"), params: b }),
    h = u({
      src: o(),
      mimeType: o().optional(),
      sizes: T(o()).optional(),
      theme: B(["light", "dark"]).optional()
    }),
    g = u({ icons: T(h).optional() }),
    f = u({ name: o(), title: o().optional() }),
    z = f.extend({
      ...f.shape,
      ...g.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    }),
    C = Zbe(u({ applyDefaults: M().optional() }), t),
    R = Ia(
      (we) => {
        if (we && typeof we === "object" && !Array.isArray(we) && Object.keys(we).length === 0)
          return { form: {} };
        return we;
      },
      Zbe(u({ form: C.optional(), url: t.optional() }), t.optional())
    ),
    S = yt({
      list: t.optional(),
      cancel: t.optional(),
      requests: yt({
        sampling: yt({ createMessage: t.optional() }).optional(),
        elicitation: yt({ create: t.optional() }).optional()
      }).optional()
    }),
    k = yt({
      list: t.optional(),
      cancel: t.optional(),
      requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional()
    }),
    L = u({
      experimental: me(o(), t).optional(),
      sampling: u({ context: t.optional(), tools: t.optional() }).optional(),
      elicitation: R.optional(),
      roots: u({ listChanged: M().optional() }).optional(),
      tasks: S.optional(),
      extensions: me(o(), t).optional()
    }),
    H = l.extend({ protocolVersion: o(), capabilities: L, clientInfo: z }),
    N = d.extend({ method: A("initialize"), params: H }),
    x = u({
      experimental: me(o(), t).optional(),
      logging: t.optional(),
      completions: t.optional(),
      prompts: u({ listChanged: M().optional() }).optional(),
      resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(),
      tools: u({ listChanged: M().optional() }).optional(),
      tasks: k.optional(),
      extensions: me(o(), t).optional()
    }),
    W = E.extend({
      protocolVersion: o(),
      capabilities: x,
      serverInfo: z,
      instructions: o().optional()
    }),
    G = _.extend({ method: A("notifications/initialized"), params: m.optional() }),
    se = d.extend({ method: A("ping"), params: l.optional() }),
    le = u({ progress: v(), total: wa(v()), message: wa(o()) }),
    ie = u({ ...m.shape, ...le.shape, progressToken: r }),
    Se = _.extend({ method: A("notifications/progress"), params: ie }),
    ae = l.extend({ cursor: s.optional() }),
    O = d.extend({ params: ae.optional() }),
    U = E.extend({ nextCursor: s.optional() }),
    F = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }),
    w = F.extend({ text: o() }),
    I = o().refine(
      (we) => {
        try {
          return (atob(we), !0);
        } catch {
          return !1;
        }
      },
      { message: "Invalid Base64 string" }
    ),
    j = F.extend({ blob: I }),
    J = B(["user", "assistant"]),
    Y = u({
      audience: T(J).optional(),
      priority: v().min(0).max(1).optional(),
      lastModified: $e([vH({ offset: !0 }), vH({ offset: !0, precision: -1 })]).optional()
    }),
    re = u({
      ...f.shape,
      ...g.shape,
      uri: o(),
      description: wa(o()),
      mimeType: wa(o()),
      size: wa(v()),
      annotations: Y.optional(),
      _meta: wa(yt({}))
    }),
    Q = u({
      ...f.shape,
      ...g.shape,
      uriTemplate: o(),
      description: wa(o()),
      mimeType: wa(o()),
      annotations: Y.optional(),
      _meta: wa(yt({}))
    }),
    ce = O.extend({ method: A("resources/list") }),
    Te = U.extend({ resources: T(re) }),
    q = O.extend({ method: A("resources/templates/list") }),
    D = U.extend({ resourceTemplates: T(Q) }),
    V = l.extend({ uri: o() }),
    X = V,
    Z = d.extend({ method: A("resources/read"), params: X }),
    ee = E.extend({ contents: T($e([w, j])) }),
    pe = _.extend({ method: A("notifications/resources/list_changed"), params: m.optional() }),
    _e = V,
    Re = d.extend({ method: A("resources/subscribe"), params: _e }),
    ge = V,
    ue = d.extend({ method: A("resources/unsubscribe"), params: ge }),
    Ne = m.extend({ uri: o() }),
    ye = _.extend({ method: A("notifications/resources/updated"), params: Ne }),
    De = u({ name: o(), description: wa(o()), required: wa(M()) }),
    je = u({
      ...f.shape,
      ...g.shape,
      description: wa(o()),
      arguments: wa(T(De)),
      _meta: wa(yt({}))
    }),
    Ve = O.extend({ method: A("prompts/list") }),
    Be = U.extend({ prompts: T(je) }),
    We = l.extend({ name: o(), arguments: me(o(), o()).optional() }),
    nt = d.extend({ method: A("prompts/get"), params: We }),
    it = u({
      type: A("text"),
      text: o(),
      annotations: Y.optional(),
      _meta: me(o(), oe()).optional()
    }),
    ct = u({
      type: A("image"),
      data: I,
      mimeType: o(),
      annotations: Y.optional(),
      _meta: me(o(), oe()).optional()
    }),
    lt = u({
      type: A("audio"),
      data: I,
      mimeType: o(),
      annotations: Y.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Gt = u({
      type: A("tool_use"),
      name: o(),
      id: o(),
      input: me(o(), oe()),
      _meta: me(o(), oe()).optional()
    }),
    Ye = u({
      type: A("resource"),
      resource: $e([w, j]),
      annotations: Y.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Bt = re.extend({ type: A("resource_link") }),
    Me = $e([it, ct, lt, Bt, Ye]),
    Rt = u({ role: J, content: Me }),
    zt = E.extend({ description: o().optional(), messages: T(Rt) }),
    ut = _.extend({ method: A("notifications/prompts/list_changed"), params: m.optional() }),
    Wt = u({
      title: o().optional(),
      readOnlyHint: M().optional(),
      destructiveHint: M().optional(),
      idempotentHint: M().optional(),
      openWorldHint: M().optional()
    }),
    wt = u({ taskSupport: B(["required", "optional", "forbidden"]).optional() }),
    dt = u({
      ...f.shape,
      ...g.shape,
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
      annotations: Wt.optional(),
      execution: wt.optional(),
      _meta: me(o(), oe()).optional()
    }),
    $t = O.extend({ method: A("tools/list") }),
    Et = U.extend({ tools: T(dt) }),
    Pt = E.extend({
      content: T(Me),
      structuredContent: me(o(), oe()).optional(),
      isError: M().optional()
    }),
    ze = c.extend({ name: o(), arguments: me(o(), oe()).optional() }),
    Yt = d.extend({ method: A("tools/call"), params: ze }),
    is = _.extend({ method: A("notifications/tools/list_changed"), params: m.optional() }),
    Tt = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    Xt = l.extend({ level: Tt }),
    Zt = d.extend({ method: A("logging/setLevel"), params: Xt }),
    Qt = m.extend({ level: Tt, logger: o().optional(), data: oe() }),
    er = _.extend({ method: A("notifications/message"), params: Qt }),
    tr = u({ name: o().optional() }),
    rr = u({
      hints: T(tr).optional(),
      costPriority: v().min(0).max(1).optional(),
      speedPriority: v().min(0).max(1).optional(),
      intelligencePriority: v().min(0).max(1).optional()
    }),
    sr = u({ mode: B(["auto", "required", "none"]).optional() }),
    cs = u({
      type: A("tool_result"),
      toolUseId: o().describe("The unique identifier for the corresponding tool call."),
      content: T(Me),
      structuredContent: u({}).loose().optional(),
      isError: M().optional(),
      _meta: me(o(), oe()).optional()
    }),
    ar = Gr("type", [it, ct, lt]),
    Xe = Gr("type", [it, ct, lt, Gt, cs]),
    or = u({ role: J, content: $e([Xe, T(Xe)]), _meta: me(o(), oe()).optional() }),
    nr = c.extend({
      messages: T(or),
      modelPreferences: rr.optional(),
      systemPrompt: o().optional(),
      includeContext: B(["none", "thisServer", "allServers"]).optional(),
      temperature: v().optional(),
      maxTokens: v().int(),
      stopSequences: T(o()).optional(),
      metadata: t.optional(),
      tools: T(dt).optional(),
      toolChoice: sr.optional()
    }),
    ir = d.extend({ method: A("sampling/createMessage"), params: nr }),
    cr = E.extend({
      model: o(),
      stopReason: wa(B(["endTurn", "stopSequence", "maxTokens"]).or(o())),
      role: J,
      content: ar
    }),
    lr = E.extend({
      model: o(),
      stopReason: wa(B(["endTurn", "stopSequence", "maxTokens", "toolUse"]).or(o())),
      role: J,
      content: $e([Xe, T(Xe)])
    }),
    ur = u({
      type: A("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    dr = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: v().optional(),
      maxLength: v().optional(),
      format: B(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    hr = u({
      type: B(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: v().optional(),
      maximum: v().optional(),
      default: v().optional()
    }),
    mr = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      default: o().optional()
    }),
    pr = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: T(u({ const: o(), title: o() })),
      default: o().optional()
    }),
    fr = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      enumNames: T(o()).optional(),
      default: o().optional()
    }),
    Sr = $e([mr, pr]),
    ht = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({ type: A("string"), enum: T(o()) }),
      default: T(o()).optional()
    }),
    mt = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({ anyOf: T(u({ const: o(), title: o() })) }),
      default: T(o()).optional()
    }),
    ls = $e([ht, mt]),
    us = $e([fr, Sr, ls]),
    qe = $e([us, ur, dr, hr]),
    Ie = c.extend({
      mode: A("form").optional(),
      message: o(),
      requestedSchema: u({
        type: A("object"),
        properties: me(o(), qe),
        required: T(o()).optional()
      }).catchall(oe())
    }),
    gr = c.extend({ mode: A("url"), message: o(), elicitationId: o(), url: o().url() }),
    Ae = $e([Ie, gr]),
    ds = d.extend({ method: A("elicitation/create"), params: Ae }),
    hs = m.extend({ elicitationId: o() }),
    ms = _.extend({ method: A("notifications/elicitation/complete"), params: hs }),
    ps = E.extend({
      action: B(["accept", "decline", "cancel"]),
      content: Ia(
        (we) => (we === null ? void 0 : we),
        me(o(), $e([o(), v(), M(), T(o())])).optional()
      )
    }),
    fs = u({ type: A("ref/resource"), uri: o() }),
    Ss = u({ type: A("ref/prompt"), name: o() }),
    gs = l.extend({
      ref: $e([Ss, fs]),
      argument: u({ name: o(), value: o() }),
      context: u({ arguments: me(o(), o()).optional() }).optional()
    }),
    _r = d.extend({ method: A("completion/complete"), params: gs }),
    _s = E.extend({
      completion: yt({ values: T(o()).max(100), total: wa(v().int()), hasMore: wa(M()) })
    }),
    ys = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: me(o(), oe()).optional()
    }),
    Ct = d.extend({ method: A("roots/list"), params: l.optional() }),
    yr = E.extend({ roots: T(ys) }),
    vs = _.extend({ method: A("notifications/roots/list_changed"), params: m.optional() }),
    bs = yt({ ttl: v().optional(), pollInterval: v().optional() }),
    Rs = B(["working", "input_required", "completed", "failed", "cancelled"]),
    Ze = u({
      taskId: o(),
      status: Rs,
      ttl: $e([v(), sm()]),
      createdAt: o(),
      lastUpdatedAt: o(),
      pollInterval: wa(v()),
      statusMessage: wa(o())
    }),
    Ce = E.extend({ task: Ze }),
    zs = m.merge(Ze),
    pt = _.extend({ method: A("notifications/tasks/status"), params: zs }),
    kt = d.extend({ method: A("tasks/get"), params: l.extend({ taskId: o() }) }),
    qt = E.merge(Ze),
    It = d.extend({ method: A("tasks/result"), params: l.extend({ taskId: o() }) }),
    wo = E.loose(),
    ke = O.extend({ method: A("tasks/list") }),
    fe = U.extend({ tasks: T(Ze) }),
    ft = d.extend({ method: A("tasks/cancel"), params: l.extend({ taskId: o() }) });
  return {
    JSONValueSchema: e,
    JSONObjectSchema: t,
    ProgressTokenSchema: r,
    CursorSchema: s,
    TaskMetadataSchema: a,
    RelatedTaskMetadataSchema: n,
    RequestMetaSchema: i,
    BaseRequestParamsSchema: l,
    TaskAugmentedRequestParamsSchema: c,
    RequestSchema: d,
    NotificationsParamsSchema: m,
    NotificationSchema: _,
    ResultSchema: E,
    RequestIdSchema: P,
    EmptyResultSchema: y,
    CancelledNotificationParamsSchema: b,
    CancelledNotificationSchema: p,
    IconSchema: h,
    IconsSchema: g,
    BaseMetadataSchema: f,
    ImplementationSchema: z,
    ClientTasksCapabilitySchema: S,
    ServerTasksCapabilitySchema: k,
    ClientCapabilitiesSchema: L,
    InitializeRequestParamsSchema: H,
    InitializeRequestSchema: N,
    ServerCapabilitiesSchema: x,
    InitializeResultSchema: W,
    InitializedNotificationSchema: G,
    PingRequestSchema: se,
    ProgressSchema: le,
    ProgressNotificationParamsSchema: ie,
    ProgressNotificationSchema: Se,
    PaginatedRequestParamsSchema: ae,
    PaginatedRequestSchema: O,
    PaginatedResultSchema: U,
    ResourceContentsSchema: F,
    TextResourceContentsSchema: w,
    BlobResourceContentsSchema: j,
    RoleSchema: J,
    AnnotationsSchema: Y,
    ResourceSchema: re,
    ResourceTemplateSchema: Q,
    ListResourcesRequestSchema: ce,
    ListResourcesResultSchema: Te,
    ListResourceTemplatesRequestSchema: q,
    ListResourceTemplatesResultSchema: D,
    ResourceRequestParamsSchema: V,
    ReadResourceRequestParamsSchema: X,
    ReadResourceRequestSchema: Z,
    ReadResourceResultSchema: ee,
    ResourceListChangedNotificationSchema: pe,
    SubscribeRequestParamsSchema: _e,
    SubscribeRequestSchema: Re,
    UnsubscribeRequestParamsSchema: ge,
    UnsubscribeRequestSchema: ue,
    ResourceUpdatedNotificationParamsSchema: Ne,
    ResourceUpdatedNotificationSchema: ye,
    PromptArgumentSchema: De,
    PromptSchema: je,
    ListPromptsRequestSchema: Ve,
    ListPromptsResultSchema: Be,
    GetPromptRequestParamsSchema: We,
    GetPromptRequestSchema: nt,
    TextContentSchema: it,
    ImageContentSchema: ct,
    AudioContentSchema: lt,
    ToolUseContentSchema: Gt,
    EmbeddedResourceSchema: Ye,
    ResourceLinkSchema: Bt,
    ContentBlockSchema: Me,
    PromptMessageSchema: Rt,
    GetPromptResultSchema: zt,
    PromptListChangedNotificationSchema: ut,
    ToolAnnotationsSchema: Wt,
    ToolExecutionSchema: wt,
    ToolSchema: dt,
    ListToolsRequestSchema: $t,
    ListToolsResultSchema: Et,
    CallToolResultSchema: Pt,
    CallToolRequestParamsSchema: ze,
    CallToolRequestSchema: Yt,
    ToolListChangedNotificationSchema: is,
    LoggingLevelSchema: Tt,
    SetLevelRequestParamsSchema: Xt,
    SetLevelRequestSchema: Zt,
    LoggingMessageNotificationParamsSchema: Qt,
    LoggingMessageNotificationSchema: er,
    ModelHintSchema: tr,
    ModelPreferencesSchema: rr,
    ToolChoiceSchema: sr,
    ToolResultContentSchema: cs,
    SamplingContentSchema: ar,
    SamplingMessageContentBlockSchema: Xe,
    SamplingMessageSchema: or,
    CreateMessageRequestParamsSchema: nr,
    CreateMessageRequestSchema: ir,
    CreateMessageResultSchema: cr,
    CreateMessageResultWithToolsSchema: lr,
    BooleanSchemaSchema: ur,
    StringSchemaSchema: dr,
    NumberSchemaSchema: hr,
    UntitledSingleSelectEnumSchemaSchema: mr,
    TitledSingleSelectEnumSchemaSchema: pr,
    LegacyTitledEnumSchemaSchema: fr,
    SingleSelectEnumSchemaSchema: Sr,
    UntitledMultiSelectEnumSchemaSchema: ht,
    TitledMultiSelectEnumSchemaSchema: mt,
    MultiSelectEnumSchemaSchema: ls,
    EnumSchemaSchema: us,
    PrimitiveSchemaDefinitionSchema: qe,
    ElicitRequestFormParamsSchema: Ie,
    ElicitRequestURLParamsSchema: gr,
    ElicitRequestParamsSchema: Ae,
    ElicitRequestSchema: ds,
    ElicitationCompleteNotificationParamsSchema: hs,
    ElicitationCompleteNotificationSchema: ms,
    ElicitResultSchema: ps,
    ResourceTemplateReferenceSchema: fs,
    PromptReferenceSchema: Ss,
    CompleteRequestParamsSchema: gs,
    CompleteRequestSchema: _r,
    CompleteResultSchema: _s,
    RootSchema: ys,
    ListRootsRequestSchema: Ct,
    ListRootsResultSchema: yr,
    RootsListChangedNotificationSchema: vs,
    TaskCreationParamsSchema: bs,
    TaskStatusSchema: Rs,
    TaskSchema: Ze,
    CreateTaskResultSchema: Ce,
    TaskStatusNotificationParamsSchema: zs,
    TaskStatusNotificationSchema: pt,
    GetTaskRequestSchema: kt,
    GetTaskResultSchema: qt,
    GetTaskPayloadRequestSchema: It,
    GetTaskPayloadResultSchema: wo,
    ListTasksRequestSchema: ke,
    ListTasksResultSchema: fe,
    CancelTaskRequestSchema: ft,
    CancelTaskResultSchema: E.merge(Ze),
    ClientRequestSchema: $e([se, N, _r, Zt, nt, Ve, ce, q, Z, Re, ue, Yt, $t, kt, It, ke, ft]),
    ClientNotificationSchema: $e([p, Se, G, vs, pt]),
    ClientResultSchema: $e([y, cr, lr, ps, yr, qt, fe, Ce]),
    ServerRequestSchema: $e([se, ir, ds, Ct, kt, It, ke, ft]),
    ServerNotificationSchema: $e([p, Se, er, ye, pe, is, ut, pt, ms]),
    ServerResultSchema: $e([y, W, _s, zt, Be, Te, D, ee, Pt, Et, qt, fe, Ce]),
    CallToolResultWireSchema: oe()
      .superRefine((we, bc) => {
        if (typeof we !== "object" || we === null || Array.isArray(we) || we.content !== void 0)
          return;
        for (let En of Yn)
          if (En in we) {
            bc.addIssue({
              code: "custom",
              message: `content is required when the body carries '${En}' \u2014 another result family cannot default into an empty tools/call success`
            });
            return;
          }
      })
      .transform(Ic)
      .pipe(Pt)
  };
}
var Nc;
function Xn() {
  return (Nc ??= Oc());
}
function Zn(e) {
  return e.type !== "object";
}
var Mc = new Set(["const", "enum", "default", "examples"]),
  jc = new Set(["properties", "patternProperties", "$defs", "definitions", "dependentSchemas"]);
function Ac(e) {
  let t = typeof e.$schema === "string" ? e.$schema : void 0;
  if (e.$id !== void 0)
    return {
      ...(t !== void 0 && { $schema: t }),
      type: "object",
      properties: { result: e },
      required: ["result"]
    };
  let r = (s, a) => {
    if (Array.isArray(s)) return s.map((i) => r(i, !1));
    if (s === null || typeof s !== "object") return s;
    if (!a && s.$id !== void 0) return s;
    let n = {};
    for (let [i, l] of Object.entries(s))
      if (a) n[i] = r(l, !1);
      else if ((i === "$ref" || i === "$dynamicRef") && typeof l === "string")
        n[i] =
          l === "#"
            ? "#/properties/result"
            : l.startsWith("#/")
              ? `#/properties/result${l.slice(1)}`
              : l;
      else if (Mc.has(i)) n[i] = l;
      else if (jc.has(i)) n[i] = r(l, !0);
      else n[i] = r(l, !1);
    return n;
  };
  return {
    ...(t !== void 0 && { $schema: t }),
    type: "object",
    properties: { result: r(e, !1) },
    required: ["result"]
  };
}
var Qn = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "tasks/get": null,
    "tasks/result": null,
    "tasks/list": null,
    "tasks/cancel": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
  },
  ei = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/initialized": null,
    "notifications/roots/list_changed": null,
    "notifications/tasks/status": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/elicitation/complete": null
  },
  Lc = {
    ping: null,
    initialize: null,
    "completion/complete": null,
    "logging/setLevel": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "resources/subscribe": null,
    "resources/unsubscribe": null,
    "tools/call": null,
    "tools/list": null,
    "sampling/createMessage": null,
    "elicitation/create": null,
    "roots/list": null
  },
  ro;
function on() {
  if (ro) return ro;
  let e = Xn();
  return (
    (ro = {
      requestSchemas: {
        ping: e.PingRequestSchema,
        initialize: e.InitializeRequestSchema,
        "completion/complete": e.CompleteRequestSchema,
        "logging/setLevel": e.SetLevelRequestSchema,
        "prompts/get": e.GetPromptRequestSchema,
        "prompts/list": e.ListPromptsRequestSchema,
        "resources/list": e.ListResourcesRequestSchema,
        "resources/templates/list": e.ListResourceTemplatesRequestSchema,
        "resources/read": e.ReadResourceRequestSchema,
        "resources/subscribe": e.SubscribeRequestSchema,
        "resources/unsubscribe": e.UnsubscribeRequestSchema,
        "tools/call": e.CallToolRequestSchema,
        "tools/list": e.ListToolsRequestSchema,
        "tasks/get": e.GetTaskRequestSchema,
        "tasks/result": e.GetTaskPayloadRequestSchema,
        "tasks/list": e.ListTasksRequestSchema,
        "tasks/cancel": e.CancelTaskRequestSchema,
        "sampling/createMessage": e.CreateMessageRequestSchema,
        "elicitation/create": e.ElicitRequestSchema,
        "roots/list": e.ListRootsRequestSchema
      },
      notificationSchemas: {
        "notifications/cancelled": e.CancelledNotificationSchema,
        "notifications/progress": e.ProgressNotificationSchema,
        "notifications/initialized": e.InitializedNotificationSchema,
        "notifications/roots/list_changed": e.RootsListChangedNotificationSchema,
        "notifications/tasks/status": e.TaskStatusNotificationSchema,
        "notifications/message": e.LoggingMessageNotificationSchema,
        "notifications/resources/updated": e.ResourceUpdatedNotificationSchema,
        "notifications/resources/list_changed": e.ResourceListChangedNotificationSchema,
        "notifications/tools/list_changed": e.ToolListChangedNotificationSchema,
        "notifications/prompts/list_changed": e.PromptListChangedNotificationSchema,
        "notifications/elicitation/complete": e.ElicitationCompleteNotificationSchema
      },
      resultSchemas: {
        ping: e.EmptyResultSchema,
        initialize: e.InitializeResultSchema,
        "completion/complete": e.CompleteResultSchema,
        "logging/setLevel": e.EmptyResultSchema,
        "prompts/get": e.GetPromptResultSchema,
        "prompts/list": e.ListPromptsResultSchema,
        "resources/list": e.ListResourcesResultSchema,
        "resources/templates/list": e.ListResourceTemplatesResultSchema,
        "resources/read": e.ReadResourceResultSchema,
        "resources/subscribe": e.EmptyResultSchema,
        "resources/unsubscribe": e.EmptyResultSchema,
        "tools/call": e.CallToolResultWireSchema,
        "tools/list": e.ListToolsResultSchema,
        "sampling/createMessage": e.CreateMessageResultWithToolsSchema,
        "elicitation/create": e.ElicitResultSchema,
        "roots/list": e.ListRootsResultSchema
      }
    }),
    ro
  );
}
function ti(e) {
  return Object.prototype.hasOwnProperty.call(Qn, e);
}
function ri(e) {
  return Object.prototype.hasOwnProperty.call(ei, e);
}
function Uc(e) {
  return Object.prototype.hasOwnProperty.call(Lc, e);
}
function Dc(e) {
  return Uc(e) ? on().resultSchemas[e] : void 0;
}
function Vc(e) {
  return ti(e) ? on().requestSchemas[e] : void 0;
}
function xc(e) {
  return ri(e) ? on().notificationSchemas[e] : void 0;
}
var Eh = Object.keys(Qn),
  Ph = Object.keys(ei);
function Qo(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function so(e, t) {
  if (e === void 0) return { ok: !1, reason: "not-in-era" };
  let r = e.safeParse(t);
  return r.success
    ? { ok: !0, value: r.data }
    : { ok: !1, reason: "invalid", message: String(r.error) };
}
var jn = { ok: !1, reason: "not-in-era" };
function An(e) {
  return Qo(e) && Qo(e.outputSchema) && Zn(e.outputSchema);
}
function Ln(e) {
  return e;
}
var nn = {
  era: "2025-11-25",
  hasRequestMethod: ti,
  hasNotificationMethod: ri,
  validateRequest: (e, t) => so(Vc(e), t),
  validateResult: (e, t) => so(Dc(e), t),
  validateNotification: (e, t) => so(xc(e), t),
  hasInputRequestMethod: () => !1,
  validateInputRequest: () => jn,
  validateInputResponse: () => jn,
  samplingResultVariant: (e, t) => {
    let r = Xn();
    return so(e ? r.CreateMessageResultWithToolsSchema : r.CreateMessageResultSchema, t);
  },
  outboundEnvelope: (e) => {
    return;
  },
  validateEnvelopeMeta: (e) => [],
  projectCallToolResult(e, t) {
    let r = Wn(e),
      s = r.structuredContent;
    if (s === void 0) return r;
    let a = typeof s !== "object" || s === null || Array.isArray(s),
      n = t !== void 0 && Zn(t);
    if (!a && !n) return r;
    return { ...r, structuredContent: { result: s } };
  },
  decodeResult(e, t) {
    if (Qo(t) && "resultType" in t) {
      let r = { ...t };
      return (delete r.resultType, { kind: "complete", result: Ln(r) });
    }
    return { kind: "complete", result: Ln(t) };
  },
  encodeResult(e, t) {
    if (e !== "tools/list") return t;
    let r = t.tools;
    if (!Array.isArray(r) || !r.some((s) => An(s))) return t;
    return { ...t, tools: r.map((s) => (An(s) ? { ...s, outputSchema: Ac(s.outputSchema) } : s)) };
  },
  encodeErrorCode: (e) => (e === -32002 ? -32602 : e),
  checkInboundEnvelope: (e) => {
    return;
  }
};
function Fc() {
  let e = gA(() => $e([o(), v(), M(), sm(), me(o(), e), T(e)])),
    t = me(o(), e),
    r = $e([o(), v().int()]),
    s = o(),
    a = $e([o(), v().int()]),
    n = B(["user", "assistant"]),
    i = B(["debug", "info", "notice", "warning", "error", "critical", "alert", "emergency"]),
    l = o().refine(
      (fe) => {
        try {
          return (atob(fe), !0);
        } catch {
          return !1;
        }
      },
      { message: "Invalid Base64 string" }
    ),
    c = u({ ttl: v().optional() }),
    d = u({ taskId: o() }),
    m = yt({ progressToken: r.optional(), "io.modelcontextprotocol/related-task": d.optional() }),
    _ = u({ _meta: m.optional() }),
    E = _.extend({ task: c.optional() }),
    P = u({ _meta: m.optional() }),
    y = u({ method: o(), params: P.loose().optional() }),
    b = u({
      src: o(),
      mimeType: o().optional(),
      sizes: T(o()).optional(),
      theme: B(["light", "dark"]).optional()
    }),
    p = u({ icons: T(b).optional() }),
    h = u({ name: o(), title: o().optional() }),
    g = h.extend({
      ...h.shape,
      ...p.shape,
      version: o(),
      websiteUrl: o().optional(),
      description: o().optional()
    }),
    f = Zbe(u({ applyDefaults: M().optional() }), t),
    z = Ia(
      (fe) => {
        if (fe && typeof fe === "object" && !Array.isArray(fe) && Object.keys(fe).length === 0)
          return { form: {} };
        return fe;
      },
      Zbe(u({ form: f.optional(), url: t.optional() }), t.optional())
    ),
    C = yt({
      list: t.optional(),
      cancel: t.optional(),
      requests: yt({
        sampling: yt({ createMessage: t.optional() }).optional(),
        elicitation: yt({ create: t.optional() }).optional()
      }).optional()
    }),
    R = yt({
      list: t.optional(),
      cancel: t.optional(),
      requests: yt({ tools: yt({ call: t.optional() }).optional() }).optional()
    }),
    S = u({
      experimental: me(o(), t).optional(),
      sampling: u({ context: t.optional(), tools: t.optional() }).optional(),
      elicitation: z.optional(),
      roots: u({ listChanged: M().optional() }).optional(),
      tasks: C.optional(),
      extensions: me(o(), t).optional()
    }),
    k = u({
      experimental: me(o(), t).optional(),
      logging: t.optional(),
      completions: t.optional(),
      prompts: u({ listChanged: M().optional() }).optional(),
      resources: u({ subscribe: M().optional(), listChanged: M().optional() }).optional(),
      tools: u({ listChanged: M().optional() }).optional(),
      tasks: R.optional(),
      extensions: me(o(), t).optional()
    }),
    L = u({ progress: v(), total: wa(v()), message: wa(o()) }),
    H = u({ ...P.shape, ...L.shape, progressToken: r }),
    N = y.extend({ method: A("notifications/progress"), params: H }),
    x = P.extend({ level: i, logger: o().optional(), data: oe() }),
    W = y.extend({ method: A("notifications/message"), params: x }),
    G = u({ uri: o(), mimeType: wa(o()), _meta: me(o(), oe()).optional() }),
    se = G.extend({ text: o() }),
    le = G.extend({ blob: l }),
    ie = u({
      audience: T(n).optional(),
      priority: v().min(0).max(1).optional(),
      lastModified: $e([vH({ offset: !0 }), vH({ offset: !0, precision: -1 })]).optional()
    }),
    Se = u({
      ...h.shape,
      ...p.shape,
      uri: o(),
      description: wa(o()),
      mimeType: wa(o()),
      size: wa(v()),
      annotations: ie.optional(),
      _meta: wa(yt({}))
    }),
    ae = u({
      ...h.shape,
      ...p.shape,
      uriTemplate: o(),
      description: wa(o()),
      mimeType: wa(o()),
      annotations: ie.optional(),
      _meta: wa(yt({}))
    }),
    O = y.extend({ method: A("notifications/resources/list_changed"), params: P.optional() }),
    U = P.extend({ uri: o() }),
    F = y.extend({ method: A("notifications/resources/updated"), params: U }),
    w = u({ name: o(), description: wa(o()), required: wa(M()) }),
    I = u({ ...h.shape, ...p.shape, description: wa(o()), arguments: wa(T(w)), _meta: wa(yt({})) }),
    j = y.extend({ method: A("notifications/prompts/list_changed"), params: P.optional() }),
    J = u({
      type: A("text"),
      text: o(),
      annotations: ie.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Y = u({
      type: A("image"),
      data: l,
      mimeType: o(),
      annotations: ie.optional(),
      _meta: me(o(), oe()).optional()
    }),
    re = u({
      type: A("audio"),
      data: l,
      mimeType: o(),
      annotations: ie.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Q = u({
      type: A("tool_use"),
      name: o(),
      id: o(),
      input: me(o(), oe()),
      _meta: me(o(), oe()).optional()
    }),
    ce = u({
      type: A("resource"),
      resource: $e([se, le]),
      annotations: ie.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Te = Se.extend({ type: A("resource_link") }),
    q = $e([J, Y, re, Te, ce]),
    D = u({ role: n, content: q }),
    V = u({
      title: o().optional(),
      readOnlyHint: M().optional(),
      destructiveHint: M().optional(),
      idempotentHint: M().optional(),
      openWorldHint: M().optional()
    }),
    X = y.extend({ method: A("notifications/tools/list_changed"), params: P.optional() }),
    Z = u({ name: o().optional() }),
    ee = u({
      hints: T(Z).optional(),
      costPriority: v().min(0).max(1).optional(),
      speedPriority: v().min(0).max(1).optional(),
      intelligencePriority: v().min(0).max(1).optional()
    }),
    pe = u({ mode: B(["auto", "required", "none"]).optional() }),
    _e = u({
      type: A("boolean"),
      title: o().optional(),
      description: o().optional(),
      default: M().optional()
    }),
    Re = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      minLength: v().optional(),
      maxLength: v().optional(),
      format: B(["email", "uri", "date", "date-time"]).optional(),
      default: o().optional()
    }),
    ge = u({
      type: B(["number", "integer"]),
      title: o().optional(),
      description: o().optional(),
      minimum: v().optional(),
      maximum: v().optional(),
      default: v().optional()
    }),
    ue = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      default: o().optional()
    }),
    Ne = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      oneOf: T(u({ const: o(), title: o() })),
      default: o().optional()
    }),
    ye = u({
      type: A("string"),
      title: o().optional(),
      description: o().optional(),
      enum: T(o()),
      enumNames: T(o()).optional(),
      default: o().optional()
    }),
    De = $e([ue, Ne]),
    je = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({ type: A("string"), enum: T(o()) }),
      default: T(o()).optional()
    }),
    Ve = u({
      type: A("array"),
      title: o().optional(),
      description: o().optional(),
      minItems: v().optional(),
      maxItems: v().optional(),
      items: u({ anyOf: T(u({ const: o(), title: o() })) }),
      default: T(o()).optional()
    }),
    Be = $e([je, Ve]),
    We = $e([ye, De, Be]),
    nt = $e([We, _e, Re, ge]),
    it = E.extend({
      mode: A("form").optional(),
      message: o(),
      requestedSchema: u({
        type: A("object"),
        properties: me(o(), nt),
        required: T(o()).optional()
      }).catchall(oe())
    }),
    ct = u({ type: A("ref/resource"), uri: o() }),
    lt = u({ type: A("ref/prompt"), name: o() }),
    Gt = u({
      uri: o().startsWith("file://"),
      name: o().optional(),
      _meta: me(o(), oe()).optional()
    }),
    Ye = S.shape,
    Bt = u({
      experimental: Ye.experimental,
      sampling: Ye.sampling,
      elicitation: Ye.elicitation,
      roots: Ye.roots,
      extensions: Ye.extensions
    }),
    Me = k.shape,
    Rt = u({
      experimental: Me.experimental,
      logging: Me.logging,
      completions: Me.completions,
      prompts: Me.prompts,
      resources: Me.resources,
      tools: Me.tools,
      extensions: Me.extensions
    }),
    zt = yt({
      progressToken: r.optional(),
      [Fe]: o(),
      [Nt]: g.optional(),
      [pOe]: Bt,
      [Mt]: i.optional()
    }),
    ut = u({
      ...h.shape,
      ...p.shape,
      description: o().optional(),
      inputSchema: yt({ $schema: o().optional(), type: A("object") }),
      outputSchema: yt({ $schema: o().optional() }).optional(),
      annotations: V.optional(),
      _meta: me(o(), oe()).optional()
    }),
    Wt = u({
      type: A("tool_result"),
      toolUseId: o(),
      content: T(q),
      structuredContent: oe().optional(),
      isError: M().optional(),
      _meta: me(o(), oe()).optional()
    }),
    wt = $e([J, Y, re, Q, Wt]),
    dt = u({ role: n, content: $e([wt, T(wt)]), _meta: me(o(), oe()).optional() }),
    $t = o(),
    Et = yt({ [He]: g.optional().catch(void 0) }),
    Pt = Et.optional();
  function ze(fe) {
    return yt({ _meta: Pt, resultType: $t.default("complete"), ...fe });
  }
  let Yt = ze({}),
    is = ze({ nextCursor: s.optional() }),
    Tt = ze({ content: T(q), structuredContent: oe().optional(), isError: M().optional() }),
    Xt = ze({
      ttlMs: v().int().min(0),
      cacheScope: B(["public", "private"]),
      tools: T(ut),
      nextCursor: s.optional()
    }),
    Zt = ze({
      ttlMs: v().int().min(0),
      cacheScope: B(["public", "private"]),
      prompts: T(I),
      nextCursor: s.optional()
    }),
    Qt = ze({ description: o().optional(), messages: T(D) }),
    er = ze({
      ttlMs: v().int().min(0),
      cacheScope: B(["public", "private"]),
      resources: T(Se),
      nextCursor: s.optional()
    }),
    tr = ze({
      ttlMs: v().int().min(0),
      cacheScope: B(["public", "private"]),
      resourceTemplates: T(ae),
      nextCursor: s.optional()
    }),
    rr = ze({
      ttlMs: v().int().min(0),
      cacheScope: B(["public", "private"]),
      contents: T($e([se, le]))
    }),
    sr = ze({
      completion: u({
        values: T(o()).max(100),
        total: v().int().optional(),
        hasMore: M().optional()
      }).loose()
    }),
    cs = ze({ ttlMs: v().int().min(0), cacheScope: B(["public", "private"]) }),
    ar = ze({
      ttlMs: v().int().min(0).catch(0),
      cacheScope: B(["public", "private"]).catch("private"),
      supportedVersions: T(o()),
      capabilities: Rt,
      instructions: o().optional()
    }),
    Xe = u({
      messages: T(dt),
      modelPreferences: ee.optional(),
      systemPrompt: o().optional(),
      includeContext: B(["none", "thisServer", "allServers"]).optional(),
      temperature: v().optional(),
      maxTokens: v().int(),
      stopSequences: T(o()).optional(),
      metadata: t.optional(),
      tools: T(ut).optional(),
      toolChoice: pe.optional()
    }),
    or = u({ method: A("sampling/createMessage"), params: Xe }),
    nr = u({ method: A("roots/list"), params: u({ _meta: me(o(), oe()).optional() }).optional() }),
    ir = u({ ...dt.shape, model: o(), stopReason: o().optional() }),
    cr = u({ roots: T(Gt) }),
    lr = u({
      action: B(["accept", "decline", "cancel"]),
      content: me(o(), $e([o(), v(), M(), T(o())])).optional()
    }),
    ur = u({ mode: A("url"), message: o(), url: o().url() }),
    dr = $e([it, ur]),
    hr = u({ method: A("elicitation/create"), params: dr }),
    mr = $e([or, nr, hr]),
    pr = $e([ir, cr, lr]),
    fr = me(o(), mr),
    Sr = me(o(), pr),
    ht = ze({ inputRequests: fr.optional(), requestState: o().optional() }),
    mt = { inputResponses: Sr.optional(), requestState: o().optional() },
    ls = u({ _meta: zt, ...mt }),
    us = yt({ progressToken: r.optional() });
  function qe(fe, ft) {
    return u({ method: A(fe), params: u({ _meta: zt, ...ft }) });
  }
  function Ie(fe, ft) {
    return u({ method: A(fe), params: u({ _meta: us.optional(), ...ft }).optional() });
  }
  let gr = { name: o(), arguments: me(o(), oe()).optional(), ...mt },
    Ae = { cursor: s.optional() },
    ds = qe("tools/call", gr),
    hs = qe("tools/list", Ae),
    ms = qe("prompts/list", Ae),
    ps = qe("prompts/get", { name: o(), arguments: me(o(), o()).optional(), ...mt }),
    fs = qe("resources/list", Ae),
    Ss = qe("resources/templates/list", Ae),
    gs = qe("resources/read", { uri: o(), ...mt }),
    _r = {
      ref: $e([lt, ct]),
      argument: u({ name: o(), value: o() }),
      context: u({ arguments: me(o(), o()).optional() }).optional()
    },
    _s = qe("completion/complete", _r),
    ys = qe("server/discover", {}),
    Ct = u({
      toolsListChanged: M().optional(),
      promptsListChanged: M().optional(),
      resourcesListChanged: M().optional(),
      resourceSubscriptions: T(o()).optional()
    }),
    yr = { notifications: Ct },
    vs = qe("subscriptions/listen", yr),
    bs = Et.extend({ "io.modelcontextprotocol/subscriptionId": a }),
    Rs = yt({ _meta: bs, resultType: $t.default("complete") }),
    Ze = {
      "tools/call": Ie("tools/call", gr),
      "tools/list": Ie("tools/list", Ae),
      "prompts/get": Ie("prompts/get", { name: o(), arguments: me(o(), o()).optional() }),
      "prompts/list": Ie("prompts/list", Ae),
      "resources/list": Ie("resources/list", Ae),
      "resources/templates/list": Ie("resources/templates/list", Ae),
      "resources/read": Ie("resources/read", { uri: o() }),
      "completion/complete": Ie("completion/complete", _r),
      "server/discover": Ie("server/discover", {}),
      "subscriptions/listen": Ie("subscriptions/listen", yr)
    };
  function Ce(fe) {
    return yt({ _meta: Pt, ...fe });
  }
  let zs = {
      "tools/call": Ce({
        content: T(q),
        structuredContent: oe().optional(),
        isError: M().optional()
      }),
      "tools/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: B(["public", "private"]),
        tools: T(ut),
        nextCursor: s.optional()
      }),
      "prompts/get": Ce({ description: o().optional(), messages: T(D) }),
      "prompts/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: B(["public", "private"]),
        prompts: T(I),
        nextCursor: s.optional()
      }),
      "resources/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: B(["public", "private"]),
        resources: T(Se),
        nextCursor: s.optional()
      }),
      "resources/templates/list": Ce({
        ttlMs: v().int().min(0),
        cacheScope: B(["public", "private"]),
        resourceTemplates: T(ae),
        nextCursor: s.optional()
      }),
      "resources/read": Ce({
        ttlMs: v().int().min(0),
        cacheScope: B(["public", "private"]),
        contents: T($e([se, le]))
      }),
      "completion/complete": Ce({
        completion: u({
          values: T(o()).max(100),
          total: v().int().optional(),
          hasMore: M().optional()
        }).loose()
      }),
      "server/discover": Ce({
        ttlMs: v().int().min(0).catch(0),
        cacheScope: B(["public", "private"]).catch("private"),
        supportedVersions: T(o()),
        capabilities: Rt,
        instructions: o().optional()
      }),
      "subscriptions/listen": Ce({})
    },
    pt = yt({ "io.modelcontextprotocol/subscriptionId": a.optional() }),
    kt = u({
      method: A("notifications/subscriptions/acknowledged"),
      params: u({ _meta: pt.optional(), notifications: Ct })
    }),
    qt = u({ _meta: pt.optional(), requestId: a, reason: o().optional() }),
    It = u({ method: A("notifications/cancelled"), params: qt }),
    wo = {
      "notifications/cancelled": It,
      "notifications/progress": N,
      "notifications/message": W,
      "notifications/resources/updated": F,
      "notifications/resources/list_changed": O,
      "notifications/tools/list_changed": X,
      "notifications/prompts/list_changed": j,
      "notifications/subscriptions/acknowledged": kt
    },
    ke = (fe) => u({ jsonrpc: A("2.0"), id: $e([o(), v().int()]), result: fe }).strict();
  return {
    JSONValueSchema: e,
    JSONObjectSchema: t,
    ProgressTokenSchema: r,
    CursorSchema: s,
    RequestIdSchema: a,
    RoleSchema: n,
    LoggingLevelSchema: i,
    TaskMetadataSchema: c,
    RelatedTaskMetadataSchema: d,
    RequestMetaSchema: m,
    BaseRequestParamsSchema: _,
    TaskAugmentedRequestParamsSchema: E,
    NotificationsParamsSchema: P,
    NotificationSchema: y,
    IconSchema: b,
    IconsSchema: p,
    BaseMetadataSchema: h,
    ImplementationSchema: g,
    ClientTasksCapabilitySchema: C,
    ServerTasksCapabilitySchema: R,
    ClientCapabilitiesSchema: S,
    ServerCapabilitiesSchema: k,
    ProgressSchema: L,
    ProgressNotificationParamsSchema: H,
    ProgressNotificationSchema: N,
    LoggingMessageNotificationParamsSchema: x,
    LoggingMessageNotificationSchema: W,
    ResourceContentsSchema: G,
    TextResourceContentsSchema: se,
    BlobResourceContentsSchema: le,
    AnnotationsSchema: ie,
    ResourceSchema: Se,
    ResourceTemplateSchema: ae,
    ResourceListChangedNotificationSchema: O,
    ResourceUpdatedNotificationParamsSchema: U,
    ResourceUpdatedNotificationSchema: F,
    PromptArgumentSchema: w,
    PromptSchema: I,
    PromptListChangedNotificationSchema: j,
    TextContentSchema: J,
    ImageContentSchema: Y,
    AudioContentSchema: re,
    ToolUseContentSchema: Q,
    EmbeddedResourceSchema: ce,
    ResourceLinkSchema: Te,
    ContentBlockSchema: q,
    PromptMessageSchema: D,
    ToolAnnotationsSchema: V,
    ToolListChangedNotificationSchema: X,
    ModelHintSchema: Z,
    ModelPreferencesSchema: ee,
    ToolChoiceSchema: pe,
    BooleanSchemaSchema: _e,
    StringSchemaSchema: Re,
    NumberSchemaSchema: ge,
    UntitledSingleSelectEnumSchemaSchema: ue,
    TitledSingleSelectEnumSchemaSchema: Ne,
    LegacyTitledEnumSchemaSchema: ye,
    SingleSelectEnumSchemaSchema: De,
    UntitledMultiSelectEnumSchemaSchema: je,
    TitledMultiSelectEnumSchemaSchema: Ve,
    MultiSelectEnumSchemaSchema: Be,
    EnumSchemaSchema: We,
    PrimitiveSchemaDefinitionSchema: nt,
    ElicitRequestFormParamsSchema: it,
    ResourceTemplateReferenceSchema: ct,
    PromptReferenceSchema: lt,
    RootSchema: Gt,
    ClientCapabilities2026Schema: Bt,
    ServerCapabilities2026Schema: Rt,
    RequestMetaEnvelopeSchema: zt,
    ToolSchema: ut,
    ToolResultContentSchema: Wt,
    SamplingMessageContentBlockSchema: wt,
    SamplingMessageSchema: dt,
    ResultTypeSchema: $t,
    ResultMetaSchema: Et,
    ResultSchema: Yt,
    PaginatedResultSchema: is,
    CallToolResultSchema: Tt,
    ListToolsResultSchema: Xt,
    ListPromptsResultSchema: Zt,
    GetPromptResultSchema: Qt,
    ListResourcesResultSchema: er,
    ListResourceTemplatesResultSchema: tr,
    ReadResourceResultSchema: rr,
    CompleteResultSchema: sr,
    CacheableResultSchema: cs,
    DiscoverResultSchema: ar,
    CreateMessageRequestParamsSchema: Xe,
    CreateMessageRequestSchema: or,
    ListRootsRequestSchema: nr,
    CreateMessageResultSchema: ir,
    ListRootsResultSchema: cr,
    ElicitResultSchema: lr,
    ElicitRequestURLParamsSchema: ur,
    ElicitRequestParamsSchema: dr,
    ElicitRequestSchema: hr,
    InputRequestSchema: mr,
    InputResponseSchema: pr,
    InputRequestsSchema: fr,
    InputResponsesSchema: Sr,
    InputRequiredResultSchema: ht,
    InputResponseRequestParamsSchema: ls,
    CallToolRequestSchema: ds,
    ListToolsRequestSchema: hs,
    ListPromptsRequestSchema: ms,
    GetPromptRequestSchema: ps,
    ListResourcesRequestSchema: fs,
    ListResourceTemplatesRequestSchema: Ss,
    ReadResourceRequestSchema: gs,
    CompleteRequestSchema: _s,
    DiscoverRequestSchema: ys,
    SubscriptionFilterSchema: Ct,
    SubscriptionsListenRequestSchema: vs,
    SubscriptionsListenResultMetaSchema: bs,
    SubscriptionsListenResultSchema: Rs,
    dispatchRequestSchemas: Ze,
    dispatchResultSchemas: zs,
    NotificationMetaSchema: pt,
    SubscriptionsAcknowledgedNotificationSchema: kt,
    CancelledNotificationParamsSchema: qt,
    CancelledNotificationSchema: It,
    notificationSchemas2026: wo,
    JSONRPCResultResponseSchema: ke(Yt),
    CallToolResultResponseSchema: ke($e([Tt, ht])),
    ListToolsResultResponseSchema: ke(Xt),
    ListPromptsResultResponseSchema: ke(Zt),
    GetPromptResultResponseSchema: ke($e([Qt, ht])),
    ListResourcesResultResponseSchema: ke(er),
    ListResourceTemplatesResultResponseSchema: ke(tr),
    ReadResourceResultResponseSchema: ke($e([rr, ht])),
    CompleteResultResponseSchema: ke(sr),
    DiscoverResultResponseSchema: ke(ar)
  };
}
var Hc;
function vt() {
  return (Hc ??= Fc());
}
var Kc = [
  "tools/list",
  "prompts/list",
  "resources/list",
  "resources/templates/list",
  "resources/read",
  "server/discover"
];
function Jc(e) {
  return Kc.includes(e);
}
var cn = Symbol("modelcontextprotocol.resultCacheHintFallback");
function Gc(e) {
  return e[cn];
}
function si(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function ai(e) {
  return e === "public" || e === "private";
}
var ta = (function (e) {
    return (
      (e[(e.ParseError = -32700)] = "ParseError"),
      (e[(e.InvalidRequest = -32600)] = "InvalidRequest"),
      (e[(e.MethodNotFound = -32601)] = "MethodNotFound"),
      (e[(e.InvalidParams = -32602)] = "InvalidParams"),
      (e[(e.InternalError = -32603)] = "InternalError"),
      (e[(e.ResourceNotFound = -32002)] = "ResourceNotFound"),
      (e[(e.MissingRequiredClientCapability = -32021)] = "MissingRequiredClientCapability"),
      (e[(e.UnsupportedProtocolVersion = -32022)] = "UnsupportedProtocolVersion"),
      (e[(e.UrlElicitationRequired = -32042)] = "UrlElicitationRequired"),
      e
    );
  })({}),
  Cd = class e extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
    }
    static [Symbol.hasInstance](t) {
      return Oe(this, t);
    }
    static isInstance(t) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
        );
      return Oe(this, t);
    }
    constructor(t, r, s) {
      super(r);
      ((this.code = t), (this.data = s), (this.name = "ProtocolError"), bt(this, new.target));
    }
    static fromError(t, r, s) {
      if (t === ta.UrlElicitationRequired && s) {
        let a = s;
        if (a.elicitations) return new ni(a.elicitations, r);
      }
      if (t === ta.UnsupportedProtocolVersion && s) {
        let a = s;
        if (Array.isArray(a.supported) && typeof a.requested === "string")
          return new co({ supported: a.supported, requested: a.requested }, r);
      }
      if (t === ta.InvalidParams || t === ta.ResourceNotFound) {
        let a = s;
        if (
          typeof a?.uri === "string" &&
          (t === ta.ResourceNotFound || Object.keys(a).length === 1)
        )
          return new oi(a.uri, r);
      }
      if (t === ta.MissingRequiredClientCapability && s) {
        let a = s;
        if (
          a.requiredCapabilities !== null &&
          typeof a.requiredCapabilities === "object" &&
          !Array.isArray(a.requiredCapabilities)
        )
          return new ci({ requiredCapabilities: a.requiredCapabilities }, r);
      }
      return new e(t, r, s);
    }
  },
  oi = class extends Cd {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
    }
    constructor(e, t = `Resource not found: ${e}`) {
      super(ta.InvalidParams, t, { uri: e });
    }
    get uri() {
      return this.data.uri;
    }
  },
  ni = class extends Cd {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
    }
    constructor(e, t = `URL elicitation${e.length > 1 ? "s" : ""} required`) {
      super(ta.UrlElicitationRequired, t, { elicitations: e });
    }
    get elicitations() {
      return this.data?.elicitations ?? [];
    }
  },
  co = class extends Cd {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" });
    }
    constructor(e, t = `Unsupported protocol version: ${e.requested}`) {
      super(ta.UnsupportedProtocolVersion, t, e);
    }
    get supported() {
      return this.data.supported;
    }
    get requested() {
      return this.data.requested;
    }
  },
  ci = class extends Cd {
    static {
      Object.defineProperty(this, "mcpBrand", {
        value: "mcp.MissingRequiredClientCapabilityError"
      });
    }
    constructor(
      e,
      t = `Missing required client capabilities: ${Object.keys(e.requiredCapabilities).join(", ")}`
    ) {
      super(ta.MissingRequiredClientCapability, t, e);
    }
    get requiredCapabilities() {
      return this.data.requiredCapabilities;
    }
  },
  Bc = 0,
  Wc = "private",
  Yc = ["tools/call", "prompts/get", "resources/read"];
function Xc(e, t) {
  let r = t.resultType;
  if (r === void 0) return { ...t, resultType: "complete" };
  if (r === "complete") return t;
  if (Yc.includes(e)) return t;
  throw new Cd(
    ta.InternalError,
    `Handler for ${e} returned resultType '${String(r)}', but results of ${e} only support 'complete' on protocol revision 2026-07-28`
  );
}
function Zc(e, t) {
  let r = Gc(t);
  if (t.resultType !== "complete" || !Jc(e)) return r === void 0 ? t : sl(t);
  let s = t,
    a = si(s.ttlMs) ? s.ttlMs : tl(r),
    n = ai(s.cacheScope) ? s.cacheScope : rl(r),
    i = { ...s, ttlMs: a, cacheScope: n };
  return (delete i[cn], i);
}
function Qc(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function el(e, t) {
  if (t === void 0) return e;
  let r = e._meta;
  if (r === void 0) return { ...e, _meta: { [He]: t } };
  if (!Qc(r)) return e;
  if (r[He] !== void 0) return e;
  return { ...e, _meta: { ...r, [He]: t } };
}
function tl(e) {
  return e !== void 0 && si(e.ttlMs) ? e.ttlMs : Bc;
}
function rl(e) {
  return e !== void 0 && ai(e.cacheScope) ? e.cacheScope : Wc;
}
function sl(e) {
  let t = { ...e };
  return (delete t[cn], t);
}
var al = ["elicitation/create", "sampling/createMessage", "roots/list"],
  ao;
function li() {
  if (ao) return ao;
  let e = vt();
  return (
    (ao = {
      request: {
        "elicitation/create": u({
          method: A("elicitation/create"),
          params: e.ElicitRequestParamsSchema
        }),
        "sampling/createMessage": u({
          method: A("sampling/createMessage"),
          params: e.CreateMessageRequestParamsSchema
        }),
        "roots/list": u({ method: A("roots/list"), params: yt({}).optional() })
      },
      response: {
        "elicitation/create": e.ElicitResultSchema,
        "sampling/createMessage": e.CreateMessageResultSchema,
        "roots/list": e.ListRootsResultSchema
      }
    }),
    ao
  );
}
function ui(e) {
  return al.includes(e);
}
function Bo(e) {
  return ui(e) ? li().request[e] : void 0;
}
function ol(e) {
  return ui(e) ? li().response[e] : void 0;
}
var ln = {
    "tools/call": null,
    "tools/list": null,
    "prompts/get": null,
    "prompts/list": null,
    "resources/list": null,
    "resources/templates/list": null,
    "resources/read": null,
    "completion/complete": null,
    "server/discover": null,
    "subscriptions/listen": null
  },
  di = {
    "notifications/cancelled": null,
    "notifications/progress": null,
    "notifications/message": null,
    "notifications/resources/updated": null,
    "notifications/resources/list_changed": null,
    "notifications/tools/list_changed": null,
    "notifications/prompts/list_changed": null,
    "notifications/subscriptions/acknowledged": null
  };
function hi(e) {
  return Object.prototype.hasOwnProperty.call(ln, e);
}
function mi(e) {
  return Object.prototype.hasOwnProperty.call(di, e);
}
function nl(e) {
  return Object.prototype.hasOwnProperty.call(ln, e);
}
function il(e) {
  return hi(e) ? vt().dispatchRequestSchemas[e] : void 0;
}
function cl(e) {
  return nl(e) ? vt().dispatchResultSchemas[e] : void 0;
}
function ll(e) {
  return mi(e) ? vt().notificationSchemas2026[e] : void 0;
}
var Th = Object.keys(ln),
  Ch = Object.keys(di);
function Zr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Yr(e, t) {
  if (e === void 0) return { ok: !1, reason: "not-in-era" };
  let r = e.safeParse(t);
  return r.success
    ? { ok: !0, value: r.data }
    : { ok: !1, reason: "invalid", message: String(r.error) };
}
var ul = { ok: !1, reason: "not-in-era" },
  dl = [Fe, pOe];
function hl(e, t) {
  let r = t,
    s = !1,
    a = () => {
      if (!s) ((r = { ...r }), (s = !0));
      return r;
    },
    n = t.tools;
  if (e === "tools/list" && Array.isArray(n) && n.some((l) => Zr(l) && "execution" in l))
    a().tools = n.map((l) => {
      if (!Zr(l) || !("execution" in l)) return l;
      let c = { ...l };
      return (delete c.execution, c);
    });
  let i = t.capabilities;
  if (Zr(i) && "tasks" in i) {
    let l = { ...i };
    (delete l.tasks, (a().capabilities = l));
  }
  return r;
}
var ml = "io.modelcontextprotocol/tasks",
  pl = new Set(["working", "input_required", "completed", "failed", "cancelled"]);
function fl(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return !1;
  return (
    typeof e.taskId === "string" &&
    e.taskId.length > 0 &&
    pl.has(e.status) &&
    typeof e.createdAt === "string" &&
    typeof e.lastUpdatedAt === "string" &&
    (e.ttlMs === null || typeof e.ttlMs === "number") &&
    (e.pollIntervalMs === void 0 || typeof e.pollIntervalMs === "number")
  );
}
var un = {
    era: "2026-07-28",
    hasRequestMethod: hi,
    hasNotificationMethod: mi,
    hasInputRequestMethod: (e) => Bo(e) !== void 0,
    validateRequest: (e, t) => Yr(il(e), t),
    validateResult: (e, t) => Yr(cl(e), t),
    validateNotification: (e, t) => Yr(ll(e), t),
    validateInputRequest: (e, t) => Yr(Bo(e), t),
    validateInputResponse: (e, t) => Yr(ol(e), t),
    samplingResultVariant: () => ul,
    outboundEnvelope(e) {
      return {
        [Fe]: e.protocolVersion,
        [Nt]: e.clientInfo,
        [pOe]: e.clientCapabilities,
        ...(e.logLevel !== void 0 && { [Mt]: e.logLevel })
      };
    },
    validateEnvelopeMeta(e) {
      let t = [];
      for (let s of dl) if (!(s in e)) t.push({ key: s, problem: "missing" });
      let r = vt().RequestMetaEnvelopeSchema.safeParse(e);
      if (!r.success)
        for (let s of r.error.issues) {
          let a = s.path.map(String),
            n = a.length > 0 ? a.join(".") : "_meta";
          if (a.length === 1 && t.some((i) => i.key === n && i.problem === "missing")) continue;
          t.push({ key: n, problem: s.message });
        }
      return t;
    },
    projectCallToolResult: (e) => Wn(e),
    inputRequestSchema: Bo,
    decodeResult(e, t) {
      if (!Zr(t))
        return {
          kind: "invalid",
          error: new bi(ii.InvalidResult, `Invalid result for ${e}: not an object`, { method: e })
        };
      let r = t.resultType;
      if (r === void 0)
        return {
          kind: "invalid",
          error: new bi(
            ii.InvalidResult,
            `Invalid result for ${e}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`,
            { method: e, violation: "missing-resultType" }
          )
        };
      if (typeof r !== "string")
        return {
          kind: "invalid",
          error: new bi(ii.InvalidResult, `Invalid result for ${e}: non-string resultType`, {
            method: e,
            resultType: r
          })
        };
      if (r === "input_required") {
        let i = t.inputRequests,
          l = Zr(i) ? i : {},
          c = t.requestState;
        if (Object.keys(l).length === 0 && typeof c !== "string")
          return {
            kind: "invalid",
            error: new bi(
              ii.InvalidResult,
              `Invalid result for ${e}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`,
              { method: e, violation: "input-required-missing-both" }
            )
          };
        return {
          kind: "input_required",
          inputRequests: l,
          ...(typeof c === "string" && { requestState: c })
        };
      }
      if (r === "task") return { kind: "task", result: t };
      if (r !== "complete")
        return {
          kind: "invalid",
          error: new bi(ii.UnsupportedResultType, `Unsupported result type '${r}' for ${e}`, {
            resultType: r,
            method: e
          })
        };
      let s = Sl(),
        a = Object.hasOwn(s, e) ? s[e] : void 0;
      if (a !== void 0) {
        let i = a.safeParse(t);
        if (!i.success)
          return {
            kind: "invalid",
            error: new bi(ii.InvalidResult, `Invalid result for ${e}: ${i.error}`, { method: e })
          };
      }
      let n = { ...t };
      return (delete n.resultType, { kind: "complete", result: n });
    },
    encodeResult(e, t, r) {
      return el(Zc(e, Xc(e, hl(e, t))), r);
    },
    encodeErrorCode: (e) => (e === -32002 ? -32602 : e),
    checkInboundEnvelope(e) {
      if (e.envelope === void 0)
        return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
      let t = vt().RequestMetaEnvelopeSchema.safeParse(e.envelope);
      if (!t.success)
        return `Invalid _meta envelope for protocol revision 2026-07-28: ${t.error.issues.map((r) => r.message).join("; ")}`;
    }
  },
  oo;
function Sl() {
  if (oo) return oo;
  let e = vt();
  return (
    (oo = {
      "tools/call": e.CallToolResultSchema,
      "tools/list": e.ListToolsResultSchema,
      "prompts/get": e.GetPromptResultSchema,
      "prompts/list": e.ListPromptsResultSchema,
      "resources/list": e.ListResourcesResultSchema,
      "resources/templates/list": e.ListResourceTemplatesResultSchema,
      "resources/read": e.ReadResourceResultSchema,
      "completion/complete": e.CompleteResultSchema,
      "server/discover": e.DiscoverResultSchema
    }),
    oo
  );
}
var lo = "2026-07-28";
function Je(e) {
  return e !== void 0 && Ge(e) ? un : nn;
}
function Un(e) {
  if (e.revision !== void 0) return Je(e.revision).era;
  return e.era === "modern" ? un.era : nn.era;
}
function Wo(e) {
  return pi.some((t) => t.hasRequestMethod(e));
}
function Yo(e) {
  return pi.some((t) => t.hasNotificationMethod(e));
}
var pi = [nn, un],
  gl = Pn({
    AnnotationsSchema: () => Ke,
    AudioContentSchema: () => Vt,
    BaseMetadataSchema: () => xe,
    BaseRequestParamsSchema: () => be,
    BlobResourceContentsSchema: () => Mr,
    BooleanSchemaSchema: () => Dr,
    CallToolRequestParamsSchema: () => fa,
    CallToolRequestSchema: () => Sa,
    CallToolResultSchema: () => Ar,
    CancelTaskRequestSchema: () => Lo,
    CancelTaskResultSchema: () => Uo,
    CancelledNotificationParamsSchema: () => Ps,
    CancelledNotificationSchema: () => Tr,
    ClientCapabilitiesSchema: () => qs,
    ClientNotificationSchema: () => Vo,
    ClientRequestSchema: () => Do,
    ClientResultSchema: () => xo,
    ClientTasksCapabilitySchema: () => Cs,
    CompatibilityCallToolResultSchema: () => Yen,
    CompleteRequestParamsSchema: () => Fa,
    CompleteRequestSchema: () => Ha,
    CompleteResultSchema: () => Ka,
    ContentBlockSchema: () => xt,
    CreateMessageRequestParamsSchema: () => Ca,
    CreateMessageRequestSchema: () => ka,
    CreateMessageResultSchema: () => qa,
    CreateMessageResultWithToolsSchema: () => Oa,
    CreateTaskResultSchema: () => ko,
    CursorSchema: () => Rr,
    DiscoverRequestSchema: () => Os,
    DiscoverResultSchema: () => z8e,
    ElicitRequestFormParamsSchema: () => Kt,
    ElicitRequestParamsSchema: () => Xen,
    ElicitRequestSchema: () => Aa,
    ElicitRequestURLParamsSchema: () => LDt,
    ElicitResultSchema: () => Da,
    ElicitationCompleteNotificationParamsSchema: () => La,
    ElicitationCompleteNotificationSchema: () => Ua,
    EmbeddedResourceSchema: () => ia,
    EmptyResultSchema: () => Pr,
    EnumSchemaSchema: () => ja,
    GetPromptRequestParamsSchema: () => aa,
    GetPromptRequestSchema: () => oa,
    GetPromptResultSchema: () => ua,
    GetTaskPayloadRequestSchema: () => No,
    GetTaskPayloadResultSchema: () => Mo,
    GetTaskRequestSchema: () => Io,
    GetTaskResultSchema: () => Oo,
    IconSchema: () => Ts,
    IconsSchema: () => tt,
    ImageContentSchema: () => Dt,
    ImplementationSchema: () => lft,
    InitializeRequestParamsSchema: () => Is,
    InitializeRequestSchema: () => Cr,
    InitializeResultSchema: () => dft,
    InitializedNotificationSchema: () => kr,
    JSONArraySchema: () => Eo,
    JSONObjectSchema: () => de,
    JSONRPCErrorResponseSchema: () => At,
    JSONRPCMessageSchema: () => Fae,
    JSONRPCNotificationSchema: () => Er,
    JSONRPCRequestSchema: () => $r,
    JSONRPCResponseSchema: () => Po,
    JSONRPCResultResponseSchema: () => jt,
    JSONValueSchema: () => Qe,
    LegacyTitledEnumSchemaSchema: () => Fr,
    ListChangedOptionsBaseSchema: () => Lr,
    ListPromptsRequestSchema: () => sa,
    ListPromptsResultSchema: () => qen,
    ListResourceTemplatesRequestSchema: () => Ls,
    ListResourceTemplatesResultSchema: () => Ken,
    ListResourcesRequestSchema: () => As,
    ListResourcesResultSchema: () => K8e,
    ListRootsRequestSchema: () => Ga,
    ListRootsResultSchema: () => Ba,
    ListTasksRequestSchema: () => jo,
    ListTasksResultSchema: () => Ao,
    ListToolsRequestSchema: () => pa,
    ListToolsResultSchema: () => V8e,
    LoggingLevelSchema: () => Ur,
    LoggingMessageNotificationParamsSchema: () => va,
    LoggingMessageNotificationSchema: () => ba,
    ModelHintSchema: () => Ra,
    ModelPreferencesSchema: () => za,
    MultiSelectEnumSchemaSchema: () => Ma,
    NotificationSchema: () => Pe,
    NotificationsParamsSchema: () => Ee,
    NumberSchemaSchema: () => Ht,
    PaginatedRequestParamsSchema: () => js,
    PaginatedRequestSchema: () => rt,
    PaginatedResultSchema: () => st,
    PingRequestSchema: () => qr,
    PrimitiveSchemaDefinitionSchema: () => Jr,
    ProgressNotificationParamsSchema: () => Ms,
    ProgressNotificationSchema: () => Ir,
    ProgressSchema: () => Ns,
    ProgressTokenSchema: () => br,
    PromptArgumentSchema: () => ra,
    PromptListChangedNotificationSchema: () => da,
    PromptMessageSchema: () => la,
    PromptReferenceSchema: () => xa,
    PromptSchema: () => Ven,
    ReadResourceRequestParamsSchema: () => Us,
    ReadResourceRequestSchema: () => Ds,
    ReadResourceResultSchema: () => Vs,
    RelatedTaskMetadataSchema: () => Gen,
    RequestIdSchema: () => et,
    RequestMetaSchema: () => zr,
    RequestSchema: () => he,
    ResourceContentsSchema: () => Or,
    ResourceLinkSchema: () => ca,
    ResourceListChangedNotificationSchema: () => xs,
    ResourceRequestParamsSchema: () => Lt,
    ResourceSchema: () => DDt,
    ResourceTemplateReferenceSchema: () => Va,
    ResourceTemplateSchema: () => zen,
    ResourceUpdatedNotificationParamsSchema: () => Qs,
    ResourceUpdatedNotificationSchema: () => ea,
    ResultMetaObjectSchema: () => wr,
    ResultSchema: () => tO,
    RoleSchema: () => at,
    RootSchema: () => Ja,
    RootsListChangedNotificationSchema: () => Wa,
    SamplingContentSchema: () => Pa,
    SamplingMessageContentBlockSchema: () => St,
    SamplingMessageSchema: () => Ta,
    ServerCapabilitiesSchema: () => MDt,
    ServerNotificationSchema: () => Ho,
    ServerRequestSchema: () => Fo,
    ServerResultSchema: () => Ko,
    ServerTasksCapabilitySchema: () => ks,
    SetLevelRequestParamsSchema: () => _a,
    SetLevelRequestSchema: () => ya,
    SingleSelectEnumSchemaSchema: () => Na,
    StringSchemaSchema: () => Ft,
    SubscribeRequestParamsSchema: () => Fs,
    SubscribeRequestSchema: () => Hs,
    SubscriptionFilterSchema: () => jr,
    SubscriptionsAcknowledgedNotificationParamsSchema: () => Ws,
    SubscriptionsAcknowledgedNotificationSchema: () => Ys,
    SubscriptionsListenRequestParamsSchema: () => Gs,
    SubscriptionsListenRequestSchema: () => Bs,
    SubscriptionsListenResultMetaSchema: () => Xs,
    SubscriptionsListenResultSchema: () => Zs,
    TaskAugmentedRequestParamsSchema: () => _t,
    TaskCreationParamsSchema: () => Co,
    TaskMetadataSchema: () => Es,
    TaskSchema: () => ot,
    TaskStatusNotificationParamsSchema: () => Xa,
    TaskStatusNotificationSchema: () => qo,
    TaskStatusSchema: () => Ya,
    TextContentSchema: () => Ut,
    TextResourceContentsSchema: () => Nr,
    TitledMultiSelectEnumSchemaSchema: () => Kr,
    TitledSingleSelectEnumSchemaSchema: () => xr,
    ToolAnnotationsSchema: () => ha,
    ToolChoiceSchema: () => $a,
    ToolExecutionSchema: () => ma,
    ToolListChangedNotificationSchema: () => ga,
    ToolResultContentSchema: () => Ea,
    ToolSchema: () => HDt,
    ToolUseContentSchema: () => na,
    UnsubscribeRequestParamsSchema: () => Ks,
    UnsubscribeRequestSchema: () => Js,
    UntitledMultiSelectEnumSchemaSchema: () => Hr,
    UntitledSingleSelectEnumSchemaSchema: () => Vr
  });
var Pte = (e) => $r.safeParse(e).success,
  FTr = (e) => Er.safeParse(e).success,
  mOe = (e) => jt.safeParse(e).success,
  sEe = (e) => At.safeParse(e).success;
var fi = (e) =>
  typeof e === "object" && e !== null && !Array.isArray(e) && e.resultType === "input_required";
var IUn = (e) => Cr.safeParse(e).success,
  UTr = (e) => kr.safeParse(e).success;
var _l = "Mcp-Param-",
  Dn = "x-mcp-header",
  yl = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,
  vl = new Set(["string", "integer", "boolean", "number"]);
function dn(e) {
  let t = [],
    r = new Map(),
    s = (n, i, l) => {
      if (n === null || typeof n !== "object") return;
      let c = n;
      if (Dn in c) {
        if (!l || i.length === 0)
          return `${no(i)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
        let m = c[Dn];
        if (typeof m !== "string" || m.length === 0)
          return `${no(i)}: x-mcp-header MUST be a non-empty string`;
        if (!yl.test(m))
          return `${no(i)}: x-mcp-header '${m}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
        let _ = typeof c.type === "string" ? c.type : void 0;
        if (_ === void 0 || !vl.has(_))
          return `${no(i)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${_ ?? "<none>"}`;
        let E = m.toLowerCase(),
          P = r.get(E);
        if (P !== void 0)
          return `x-mcp-header '${m}' is not case-insensitively unique (also declared as '${P}')`;
        (r.set(E, m), t.push({ path: i, headerName: m, type: _ }));
      }
      let d = c.properties;
      if (d !== null && typeof d === "object")
        for (let [m, _] of Object.entries(d)) {
          let E = s(_, [...i, m], l);
          if (E !== void 0) return E;
        }
      for (let m of bl) {
        let _ = c[m];
        if (_ === void 0) continue;
        let E = Array.isArray(_)
          ? _
          : _ !== null && typeof _ === "object" && Rl.has(m)
            ? Object.values(_)
            : [_];
        for (let P of E) {
          let y = s(P, [...i, `<${m}>`], !1);
          if (y !== void 0) return y;
        }
      }
    },
    a = s(e, [], !0);
  return a === void 0 ? { valid: !0, declarations: t } : { valid: !1, reason: a };
}
var bl = [
    "items",
    "prefixItems",
    "contains",
    "additionalProperties",
    "unevaluatedProperties",
    "unevaluatedItems",
    "propertyNames",
    "patternProperties",
    "dependentSchemas",
    "oneOf",
    "anyOf",
    "allOf",
    "not",
    "if",
    "then",
    "else",
    "$defs",
    "definitions"
  ],
  Rl = new Set(["patternProperties", "dependentSchemas", "$defs", "definitions"]);
function no(e) {
  return e.length === 0 ? "<root>" : e.join(".");
}
var Si = "=?base64?",
  gi = "?=";
function zl(e) {
  if (typeof e === "string") return e;
  if (typeof e === "boolean") return e ? "true" : "false";
  if (typeof e === "number") {
    if (!Number.isFinite(e)) return;
    if (Number.isInteger(e) && !Number.isSafeInteger(e)) return;
    return String(e);
  }
}
function wl(e) {
  if (e.length === 0) return !0;
  if (e.startsWith(Si) && e.endsWith(gi)) return !0;
  if (e !== e.trim()) return !0;
  for (let t = 0; t < e.length; t++) {
    let r = e.codePointAt(t);
    if (r === 9 || (r >= 32 && r <= 126)) continue;
    return !0;
  }
  return !1;
}
function $l(e) {
  let t = new TextEncoder().encode(e),
    r = "";
  for (let s of t) r += String.fromCodePoint(s);
  return btoa(r);
}
function uo(e) {
  return wl(e) ? `${Si}${$l(e)}${gi}` : e;
}
function El(e, t) {
  let r = e;
  for (let s of t) {
    if (r === null || typeof r !== "object") return;
    r = r[s];
  }
  return r;
}
function _i(e, t) {
  let r = {};
  for (let s of e) {
    let a = El(t, s.path);
    if (a === void 0 || a === null) continue;
    let n = zl(a);
    if (n === void 0) continue;
    r[`${_l}${s.headerName}`] = uo(n);
  }
  return r;
}
var Jt = -32020,
  kh = [
    {
      rung: "http-method",
      order: 1,
      evaluatedAt: "edge",
      codes: [-32000],
      conformance: [],
      rationale:
        "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read."
    },
    {
      rung: "jsonrpc-shape",
      order: 2,
      evaluatedAt: "edge",
      codes: [ta.InvalidRequest],
      conformance: ["server-stateless"],
      rationale:
        "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
    },
    {
      rung: "era-classification",
      order: 3,
      evaluatedAt: "edge",
      codes: [Jt, ta.UnsupportedProtocolVersion],
      conformance: [
        "server-stateless",
        "http-header-validation",
        "http-custom-header-server-validation"
      ],
      rationale:
        "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
    },
    {
      rung: "envelope",
      order: 4,
      evaluatedAt: "edge",
      codes: [ta.InvalidParams],
      conformance: ["server-stateless"],
      rationale:
        "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
    },
    {
      rung: "method-registry",
      order: 5,
      evaluatedAt: "dispatch",
      codes: [ta.MethodNotFound],
      conformance: ["server-stateless"],
      rationale:
        "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
    },
    {
      rung: "request-params",
      order: 6,
      evaluatedAt: "dispatch",
      codes: [ta.InvalidParams],
      conformance: [],
      rationale:
        "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
    },
    {
      rung: "standard-header-validation",
      order: 7,
      evaluatedAt: "pre-dispatch",
      codes: [Jt],
      conformance: ["http-header-validation"],
      rationale:
        "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted."
    },
    {
      rung: "client-capabilities",
      order: 8,
      evaluatedAt: "pre-dispatch",
      codes: [ta.MissingRequiredClientCapability],
      conformance: ["server-stateless"],
      rationale:
        "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
    },
    {
      rung: "param-header-validation",
      order: 9,
      evaluatedAt: "pre-dispatch",
      codes: [Jt],
      conformance: ["http-custom-header-server-validation"],
      rationale:
        "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
    }
  ],
  qh = {
    [ta.ParseError]: 400,
    [ta.InvalidRequest]: 400,
    [ta.MethodNotFound]: 404,
    [ta.UnsupportedProtocolVersion]: 400,
    [ta.MissingRequiredClientCapability]: 400,
    [Jt]: 400
  };
function ho(e, t) {
  return X3r(e, t);
}
function Xr(e) {
  return new Set(e.flatMap((t) => Object.keys(t.shape)));
}
function en(e) {
  if (e == null) return !1;
  let t = typeof e;
  if (t !== "object" && t !== "function") return !1;
  if (!("~standard" in e)) return !1;
  return typeof e["~standard"]?.validate === "function";
}
var Vn = !1,
  tn = "draft-2020-12";
function Pl(e, t = "input") {
  let r = e["~standard"],
    s;
  if (r.jsonSchema) s = r.jsonSchema[t]({ target: tn });
  else if (r.vendor === "zod") {
    if (!("_zod" in e))
      throw Error(
        "Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema()."
      );
    if (!Vn)
      ((Vn = !0),
        console.warn(
          "[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning."
        ));
    s = ost(e, { target: tn, io: t });
  } else
    throw Error(
      `Schema library "${r.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`
    );
  if (t === "output") {
    if (s.type !== void 0) return s;
    return yi(s) ? { type: "object", ...s } : s;
  }
  if (s.type !== void 0 && s.type !== "object")
    throw Error(
      `MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(s.type)}). Wrap your schema in z.object({...}) or equivalent.`
    );
  return { type: "object", ...s };
}
function yi(e) {
  if (
    "properties" in e ||
    "patternProperties" in e ||
    "additionalProperties" in e ||
    "required" in e
  )
    return !0;
  for (let t of ["oneOf", "anyOf", "allOf"]) {
    let r = e[t];
    if (Array.isArray(r) && r.length > 0)
      return r.every((s) => s !== null && typeof s === "object" && (s.type === "object" || yi(s)));
  }
  return !1;
}
function Tl(e) {
  if (!e.path?.length) return e.message;
  return `${e.path.map((t) => String(typeof t === "object" ? t.key : t)).join(".")}: ${e.message}`;
}
async function Xo(e, t) {
  let r = await e["~standard"].validate(t);
  if (r.issues && r.issues.length > 0)
    return { success: !1, error: r.issues.map((s) => Tl(s)).join(", ") };
  return { success: !0, data: r.value };
}
function Cl(e) {
  let t = ost(e, { target: tn, io: "input" });
  return typeof t.pattern === "string" ? t.pattern : void 0;
}
var kl = /\\\.\\d\{(\d+)\}/;
function ql(e) {
  let t = kl.exec(e),
    r = [void 0, -1, 0];
  if (t) r.push(Number(t[1]));
  return [!1, !0].flatMap((s) =>
    [!1, !0].flatMap((a) => r.map((n) => vH({ local: s, offset: a, precision: n })))
  );
}
function Il(e, t) {
  let r;
  switch (e) {
    case "email":
      r = [xci()];
      break;
    case "uri":
      r = [x4e()];
      break;
    case "date":
      r = [Ewi()];
      break;
    case "date-time":
      r = ql(t);
      break;
  }
  return new Set(r.map((s) => Cl(s)).filter((s) => s !== void 0));
}
function Ol(e, t, r) {
  if (r !== "zod") return !0;
  return Il(e, t).has(t);
}
function es(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Nl(e) {
  try {
    return Pl(e, "input");
  } catch (t) {
    let r = t instanceof Error ? t.message : String(t);
    throw new Cd(
      ta.InvalidParams,
      `Elicitation requestedSchema must describe an object with flat primitive properties: ${r}`
    );
  }
}
var Ml = new Set([
  "$comment",
  "deprecated",
  "description",
  "examples",
  "readOnly",
  "title",
  "writeOnly"
]);
function hn(e) {
  return Ml.has(e) || e.startsWith("x-");
}
var jl = new Set(["$schema", ...Object.keys(Kt.shape.requestedSchema.shape)]),
  xn = {
    string: Xr([Ft, Vr, xr, Fr]),
    number: Xr([Ht]),
    integer: Xr([Ht]),
    boolean: Xr([Dr]),
    array: Xr([Hr, Kr])
  },
  Al = new Set(Ft.shape.format.unwrap().options);
function Ll(e, t, r, s) {
  if (!es(e)) return e;
  let a = typeof e.type === "string" && Object.hasOwn(xn, e.type) ? xn[e.type] : void 0;
  if (a === void 0) return e;
  let n = {};
  for (let [i, l] of Object.entries(e))
    if (a.has(i) || hn(i)) n[i] = l;
    else if (i === "pattern" && e.type === "string" && typeof e.format === "string") {
      if (!Al.has(e.format)) n[i] = l;
      else if (typeof l !== "string" || !Ol(e.format, l, r)) s.push(`${t}.${i}`);
    } else s.push(`${t}.${i}`);
  return n;
}
function Ul(e, t) {
  let r = {},
    s = [];
  for (let [a, n] of Object.entries(e))
    if (a === "properties" && es(n))
      r[a] = Object.fromEntries(
        Object.entries(n).map(([i, l]) => [i, Ll(l, `properties.${i}`, t, s)])
      );
    else if (jl.has(a)) r[a] = n;
    else if (!hn(a)) s.push(a);
  if (s.length > 0)
    throw new Cd(
      ta.InvalidParams,
      `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${s.join(", ")}`
    );
  return r;
}
function Dl(e, t) {
  if (!es(e.properties)) return t;
  let r = Object.entries(e.properties)
    .filter(([, s]) => !ho(Jr, s).success)
    .map(([s]) => `properties.${s}`);
  return r.length > 0 ? r.join(", ") : t;
}
function rn(e, t, r = "") {
  if (Array.isArray(e) && Array.isArray(t)) return e.flatMap((s, a) => rn(s, t[a], `${r}[${a}]`));
  if (!es(e) || !es(t)) return [];
  return Object.entries(e).flatMap(([s, a]) => {
    let n = r ? `${r}.${s}` : s;
    if (!Object.prototype.hasOwnProperty.call(t, s)) return hn(s) ? [] : [n];
    return rn(a, t[s], n);
  });
}
function Vl(e) {
  if (!en(e.requestedSchema)) return { ...e, mode: "form", requestedSchema: e.requestedSchema };
  let t = e.requestedSchema["~standard"].vendor,
    r = Ul(Nl(e.requestedSchema), t),
    s = ho(Kt.shape.requestedSchema, r);
  if (!s.success)
    throw new Cd(
      ta.InvalidParams,
      `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${Dl(r, s.error.message)}`
    );
  let a = rn(r, s.data);
  if (a.length > 0)
    throw new Cd(
      ta.InvalidParams,
      `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${a.join(", ")}`
    );
  let n = (s.data.required ?? []).filter(
    (i) => !Object.prototype.hasOwnProperty.call(s.data.properties, i)
  );
  if (n.length > 0)
    throw new Cd(
      ta.InvalidParams,
      `Elicitation requestedSchema lists required properties that are not defined in properties: ${n.join(", ")}`
    );
  return { ...e, mode: "form", requestedSchema: s.data };
}
function xl(e) {
  let t = e.inputRequests !== void 0 && Object.keys(e.inputRequests).length > 0,
    r = typeof e.requestState === "string";
  if (!t && !r)
    throw TypeError(
      "inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)"
    );
  return {
    resultType: "input_required",
    ...(e.inputRequests !== void 0 && { inputRequests: e.inputRequests }),
    ...(e.requestState !== void 0 && { requestState: e.requestState })
  };
}
var Ih = Object.assign(xl, {
  elicit(e) {
    try {
      return { method: "elicitation/create", params: Vl(e) };
    } catch (t) {
      throw t instanceof Cd ? TypeError(t.message, { cause: t }) : t;
    }
  },
  elicitUrl(e) {
    return { method: "elicitation/create", params: { ...e, mode: "url" } };
  },
  createMessage(e) {
    return { method: "sampling/createMessage", params: e };
  },
  listRoots() {
    return { method: "roots/list" };
  }
});
var Fl = !0,
  Hl = 10,
  Kl = 250;
function vi(e) {
  return { autoFulfill: e?.autoFulfill ?? Fl, maxRounds: e?.maxRounds ?? Hl };
}
function Jl(e, t, r) {
  let s = t !== void 0 && Object.keys(t).length > 0;
  if (!s && r === void 0) return e;
  return { ...e, ...(s && { inputResponses: t }), ...(r !== void 0 && { requestState: r }) };
}
function Gl(e, t) {
  return `Multi-round-trip request '${e}' still required input after ${t} rounds (inputRequired.maxRounds)`;
}
function Bl(e, t) {
  return new Promise((r, s) => {
    if (t?.aborted) {
      s(t.reason instanceof bi ? t.reason : new bi(ii.RequestTimeout, String(t.reason)));
      return;
    }
    let a = setTimeout(() => {
        (t?.removeEventListener("abort", n), r());
      }, e),
      n = () => {
        (clearTimeout(a),
          s(t?.reason instanceof bi ? t.reason : new bi(ii.RequestTimeout, String(t?.reason))));
      };
    t?.addEventListener("abort", n, { once: !0 });
  });
}
function Wl(e) {
  let t = new AbortController(),
    r = () => t.abort(e?.reason);
  if ((e?.addEventListener("abort", r, { once: !0 }), e?.aborted)) t.abort(e.reason);
  return {
    signal: t.signal,
    abort: (s) => t.abort(s),
    dispose: () => e?.removeEventListener("abort", r)
  };
}
async function Yl(e) {
  let { config: t, method: r, originalParams: s, requestOptions: a, hooks: n, signal: i } = e,
    l = e.flowStartedAt ?? Date.now(),
    c = e.firstPayload,
    d = 0;
  while (!0) {
    if (((d += 1), d > t.maxRounds))
      throw new bi(ii.InputRequiredRoundsExceeded, Gl(r, t.maxRounds), {
        rounds: t.maxRounds,
        lastResult: {
          inputRequests: c.inputRequests,
          ...(c.requestState !== void 0 && { requestState: c.requestState })
        }
      });
    a.onprogress?.({ progress: d, message: `Fulfilling input required by '${r}' (round ${d})` });
    let m = Object.entries(c.inputRequests ?? {}),
      _;
    if (m.length > 0) {
      let y = Wl(i);
      try {
        let b = await Promise.all(
          m.map(async ([p, h]) => {
            try {
              return [p, await n.dispatchInputRequest(p, h, y.signal)];
            } catch (g) {
              throw (y.abort(g), g);
            }
          })
        );
        _ = Object.fromEntries(b);
      } finally {
        y.dispose();
      }
    } else await Bl(Kl, i);
    let E = { ...(a.timeout !== void 0 && { timeout: a.timeout }) };
    if (a.maxTotalTimeout !== void 0) {
      let y = Date.now() - l,
        b = a.maxTotalTimeout - y;
      if (b <= 0)
        throw new bi(ii.RequestTimeout, "Maximum total timeout exceeded", {
          maxTotalTimeout: a.maxTotalTimeout,
          totalElapsed: y
        });
      E.maxTotalTimeout = b;
    }
    let P = await n.retry(Jl(s, _, c.requestState), E);
    if (fi(P)) {
      c = {
        inputRequests: P.inputRequests ?? {},
        ...(P.requestState !== void 0 && { requestState: P.requestState })
      };
      continue;
    }
    return P;
  }
}
var Xl = [
    "AnnotationsSchema",
    "AudioContentSchema",
    "BaseMetadataSchema",
    "BlobResourceContentsSchema",
    "BooleanSchemaSchema",
    "CallToolRequestSchema",
    "CallToolRequestParamsSchema",
    "CallToolResultSchema",
    "CancelledNotificationSchema",
    "CancelledNotificationParamsSchema",
    "CancelTaskRequestSchema",
    "CancelTaskResultSchema",
    "ClientCapabilitiesSchema",
    "ClientNotificationSchema",
    "ClientRequestSchema",
    "ClientResultSchema",
    "CompatibilityCallToolResultSchema",
    "CompleteRequestSchema",
    "CompleteRequestParamsSchema",
    "CompleteResultSchema",
    "ContentBlockSchema",
    "CreateMessageRequestSchema",
    "CreateMessageRequestParamsSchema",
    "CreateMessageResultSchema",
    "CreateMessageResultWithToolsSchema",
    "CreateTaskResultSchema",
    "CursorSchema",
    "DiscoverRequestSchema",
    "DiscoverResultSchema",
    "ElicitationCompleteNotificationSchema",
    "ElicitationCompleteNotificationParamsSchema",
    "ElicitRequestSchema",
    "ElicitRequestFormParamsSchema",
    "ElicitRequestParamsSchema",
    "ElicitRequestURLParamsSchema",
    "ElicitResultSchema",
    "EmbeddedResourceSchema",
    "EmptyResultSchema",
    "EnumSchemaSchema",
    "GetPromptRequestSchema",
    "GetPromptRequestParamsSchema",
    "GetPromptResultSchema",
    "GetTaskPayloadRequestSchema",
    "GetTaskPayloadResultSchema",
    "GetTaskRequestSchema",
    "GetTaskResultSchema",
    "IconSchema",
    "IconsSchema",
    "ImageContentSchema",
    "ImplementationSchema",
    "InitializedNotificationSchema",
    "InitializeRequestSchema",
    "InitializeRequestParamsSchema",
    "InitializeResultSchema",
    "JSONArraySchema",
    "JSONObjectSchema",
    "JSONRPCErrorResponseSchema",
    "JSONRPCMessageSchema",
    "JSONRPCNotificationSchema",
    "JSONRPCRequestSchema",
    "JSONRPCResponseSchema",
    "JSONRPCResultResponseSchema",
    "JSONValueSchema",
    "LegacyTitledEnumSchemaSchema",
    "ListPromptsRequestSchema",
    "ListPromptsResultSchema",
    "ListResourcesRequestSchema",
    "ListResourcesResultSchema",
    "ListResourceTemplatesRequestSchema",
    "ListResourceTemplatesResultSchema",
    "ListRootsRequestSchema",
    "ListRootsResultSchema",
    "ListTasksRequestSchema",
    "ListTasksResultSchema",
    "ListToolsRequestSchema",
    "ListToolsResultSchema",
    "LoggingLevelSchema",
    "LoggingMessageNotificationSchema",
    "LoggingMessageNotificationParamsSchema",
    "ModelHintSchema",
    "ModelPreferencesSchema",
    "MultiSelectEnumSchemaSchema",
    "NotificationSchema",
    "NumberSchemaSchema",
    "PaginatedRequestSchema",
    "PaginatedRequestParamsSchema",
    "PaginatedResultSchema",
    "PingRequestSchema",
    "PrimitiveSchemaDefinitionSchema",
    "ProgressSchema",
    "ProgressNotificationSchema",
    "ProgressNotificationParamsSchema",
    "ProgressTokenSchema",
    "PromptSchema",
    "PromptArgumentSchema",
    "PromptListChangedNotificationSchema",
    "PromptMessageSchema",
    "PromptReferenceSchema",
    "ReadResourceRequestSchema",
    "ReadResourceRequestParamsSchema",
    "ReadResourceResultSchema",
    "RelatedTaskMetadataSchema",
    "RequestSchema",
    "RequestIdSchema",
    "RequestMetaSchema",
    "ResourceSchema",
    "ResourceContentsSchema",
    "ResourceLinkSchema",
    "ResourceListChangedNotificationSchema",
    "ResourceRequestParamsSchema",
    "ResourceTemplateSchema",
    "ResourceTemplateReferenceSchema",
    "ResourceUpdatedNotificationSchema",
    "ResourceUpdatedNotificationParamsSchema",
    "ResultMetaObjectSchema",
    "ResultSchema",
    "RoleSchema",
    "RootSchema",
    "RootsListChangedNotificationSchema",
    "SamplingContentSchema",
    "SamplingMessageSchema",
    "SamplingMessageContentBlockSchema",
    "ServerCapabilitiesSchema",
    "ServerNotificationSchema",
    "ServerRequestSchema",
    "ServerResultSchema",
    "SetLevelRequestSchema",
    "SetLevelRequestParamsSchema",
    "SingleSelectEnumSchemaSchema",
    "StringSchemaSchema",
    "SubscribeRequestSchema",
    "SubscribeRequestParamsSchema",
    "SubscriptionFilterSchema",
    "SubscriptionsAcknowledgedNotificationSchema",
    "SubscriptionsAcknowledgedNotificationParamsSchema",
    "SubscriptionsListenRequestSchema",
    "SubscriptionsListenRequestParamsSchema",
    "SubscriptionsListenResultSchema",
    "SubscriptionsListenResultMetaSchema",
    "TaskAugmentedRequestParamsSchema",
    "TaskCreationParamsSchema",
    "TaskMetadataSchema",
    "TaskSchema",
    "TaskStatusSchema",
    "TaskStatusNotificationSchema",
    "TaskStatusNotificationParamsSchema",
    "TextContentSchema",
    "TextResourceContentsSchema",
    "TitledMultiSelectEnumSchemaSchema",
    "TitledSingleSelectEnumSchemaSchema",
    "ToolSchema",
    "ToolAnnotationsSchema",
    "ToolChoiceSchema",
    "ToolExecutionSchema",
    "ToolListChangedNotificationSchema",
    "ToolResultContentSchema",
    "ToolUseContentSchema",
    "UnsubscribeRequestSchema",
    "UnsubscribeRequestParamsSchema",
    "UntitledMultiSelectEnumSchemaSchema",
    "UntitledSingleSelectEnumSchemaSchema"
  ],
  Zl = {
    IdJagTokenExchangeResponseSchema: Qa,
    OAuthClientInformationFullSchema: Wr,
    OAuthClientInformationSchema: to,
    OAuthClientMetadataSchema: eo,
    OAuthClientRegistrationErrorSchema: Jo,
    OAuthErrorResponseSchema: FDt,
    OAuthMetadataSchema: cft,
    OAuthProtectedResourceMetadataSchema: Br,
    OAuthTokenRevocationRequestSchema: Go,
    OAuthTokensSchema: $Dt,
    OpenIdProviderDiscoveryMetadataSchema: NDt,
    OpenIdProviderMetadataSchema: Za
  },
  Ri = {},
  zi = {};
function wi(e, t) {
  let r = e.slice(0, -6);
  ((Ri[r] = t), (zi[r] = (s) => t.safeParse(s).success));
}
for (let e of Xl) wi(e, gl[e]);
for (let [e, t] of Object.entries(Zl)) wi(e, t);
var Ql = Object.freeze(Ri),
  $i = Object.freeze(zi);
function eu(e) {
  switch (e) {
    case "initialize":
    case "notifications/initialized":
      return Je(void 0);
    case "server/discover":
      return Je(lo);
    default:
      return;
  }
}
var ss = 60000,
  tu = [Fe, Nt, pOe, Mt],
  ru = ["inputResponses", "requestState"];
function Fn(e, t) {
  let r = e.params;
  if (!Qr(r)) return { message: e, lifted: {} };
  let s = r._meta,
    a = Qr(s) ? tu.filter((c) => c in s) : [],
    n = t === "request" ? ru.filter((c) => c in r) : [];
  if (a.length === 0 && n.length === 0) return { message: e, lifted: {} };
  let i = {},
    l = { ...r };
  if (a.length > 0 && Qr(s)) {
    let c = {},
      d = { ...s };
    for (let m of a) ((c[m] = s[m]), delete d[m]);
    if (((i.envelope = c), Object.keys(d).length > 0)) l._meta = d;
    else delete l._meta;
  }
  for (let c of n) {
    if (c === "inputResponses") i.inputResponses = l[c];
    if (c === "requestState") i.requestState = l[c];
    delete l[c];
  }
  return { message: { ...e, params: l }, lifted: i };
}
function Hn(e, t) {
  let r = e.validateResult(t, void 0);
  if (!r.ok && r.reason === "not-in-era") return;
  return {
    "~standard": {
      version: 1,
      vendor: "mcp-wire-codec",
      validate(s) {
        let a = e.validateResult(t, s);
        if (a.ok) return { value: a.value };
        return { issues: [{ message: a.reason === "invalid" ? a.message : `not-in-era: ${t}` }] };
      }
    }
  };
}
function mn(e) {
  return () => e;
}
var su = mn(void 0),
  au,
  Ei = class {
    _transport;
    _requestMessageId = 0;
    _requestHandlers = new Map();
    _requestHandlerAbortControllers = new Map();
    _notificationHandlers = new Map();
    _responseHandlers = new Map();
    _progressHandlers = new Map();
    _timeoutInfo = new Map();
    _pendingDebouncedNotifications = new Set();
    _negotiatedProtocolVersion;
    static {
      au = (e, t) => {
        e._negotiatedProtocolVersion = t;
      };
    }
    _supportedProtocolVersions;
    onclose;
    onerror;
    fallbackRequestHandler;
    fallbackNotificationHandler;
    constructor(e) {
      ((this._options = e),
        (this._supportedProtocolVersions = e?.supportedProtocolVersions ?? aft),
        this.setNotificationHandler("notifications/cancelled", (t) => {
          this._oncancel(t);
        }),
        this.setNotificationHandler("notifications/progress", (t) => {
          this._onprogress(t);
        }),
        this.setRequestHandler("ping", (t) => ({})));
    }
    _shouldDropInbound(e) {}
    _outboundMetaEnvelope() {}
    _envelopeOutbound(e) {
      let t = this._outboundMetaEnvelope();
      if (t === void 0) return e;
      let r = e.params ?? {};
      return { ...e, params: { ...r, _meta: { ...t, ...r._meta } } };
    }
    _resolveNonCompleteResult(e, t) {
      return Promise.reject(
        new bi(
          ii.UnsupportedResultType,
          `Unsupported result type '${e.kind}' for ${t.request.method}`,
          { resultType: e.kind, method: t.request.method }
        )
      );
    }
    _getRequestHandler(e) {
      return this._requestHandlers.get(e);
    }
    async _oncancel(e) {
      if (!e.params.requestId) return;
      this._requestHandlerAbortControllers.get(e.params.requestId)?.abort(e.params.reason);
    }
    _setupTimeout(e, t, r, s, a = !1) {
      this._timeoutInfo.set(e, {
        timeoutId: setTimeout(s, t),
        startTime: Date.now(),
        timeout: t,
        maxTotalTimeout: r,
        resetTimeoutOnProgress: a,
        onTimeout: s
      });
    }
    _resetTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (!t) return !1;
      let r = Date.now() - t.startTime;
      if (t.maxTotalTimeout && r >= t.maxTotalTimeout)
        throw (
          this._timeoutInfo.delete(e),
          new bi(ii.RequestTimeout, "Maximum total timeout exceeded", {
            maxTotalTimeout: t.maxTotalTimeout,
            totalElapsed: r
          })
        );
      return (clearTimeout(t.timeoutId), (t.timeoutId = setTimeout(t.onTimeout, t.timeout)), !0);
    }
    _cleanupTimeout(e) {
      let t = this._timeoutInfo.get(e);
      if (t) (clearTimeout(t.timeoutId), this._timeoutInfo.delete(e));
    }
    async connect(e) {
      this._transport = e;
      let t = this.transport?.onclose;
      this._transport.onclose = () => {
        try {
          t?.();
        } finally {
          this._onclose();
        }
      };
      let r = this.transport?.onerror;
      this._transport.onerror = (a) => {
        (r?.(a), this._onerror(a));
      };
      let s = this._transport?.onmessage;
      ((this._transport.onmessage = (a, n) => {
        if ((s?.(a, n), mOe(a) || sEe(a))) this._onresponse(a);
        else if (Pte(a)) this._onrequest(a, n);
        else if (FTr(a)) this._onnotification(a, n);
        else this._onerror(Error(`Unknown message type: ${JSON.stringify(a)}`));
      }),
        e.setSupportedProtocolVersions?.(this._supportedProtocolVersions),
        await this._transport.start());
    }
    _onclose() {
      let e = this._responseHandlers;
      ((this._responseHandlers = new Map()),
        this._progressHandlers.clear(),
        this._pendingDebouncedNotifications.clear());
      for (let s of this._timeoutInfo.values()) clearTimeout(s.timeoutId);
      this._timeoutInfo.clear();
      let t = this._requestHandlerAbortControllers;
      this._requestHandlerAbortControllers = new Map();
      let r = new bi(ii.ConnectionClosed, "Connection closed");
      this._transport = void 0;
      try {
        this.onclose?.();
      } finally {
        for (let s of e.values()) s(r);
        for (let s of t.values()) s.abort(r);
      }
    }
    _onerror(e) {
      this.onerror?.(e);
    }
    _onnotification(e, t) {
      let { message: r } = Fn(e, "notification"),
        s = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") return;
      if (t?.classification !== void 0) {
        let i = Un(t.classification);
        if (i !== s.era) {
          this._onerror(
            Error(
              `Era mismatch on inbound notification '${r.method}': classified as ${i} but this instance serves ${s.era}`
            )
          );
          return;
        }
      }
      if (Yo(r.method) && !s.hasNotificationMethod(r.method)) return;
      let a = this._notificationHandlers.get(r.method),
        n = this.fallbackNotificationHandler;
      if (a === void 0 && n === void 0) return;
      Promise.resolve()
        .then(() => (a === void 0 ? n(r) : a(r, s)))
        .catch((i) => this._onerror(Error(`Uncaught error in notification handler: ${i}`)));
    }
    _onrequest(e, t) {
      let { message: r, lifted: s } = Fn(e, "request"),
        a = this._negotiatedWireCodec();
      if (t?.classification === void 0 && this._shouldDropInbound(e) === "drop") {
        this._onerror(
          Error(
            `Dropped inbound request '${e.method}': not servable on this connection's protocol era`
          )
        );
        return;
      }
      let n = this._transport,
        i = (b, p, h) => {
          let g = {
            jsonrpc: "2.0",
            id: r.id,
            error: { code: b, message: p, ...(h !== void 0 && { data: h }) }
          };
          n?.send(g).catch((f) => this._onerror(Error(`Failed to send an error response: ${f}`)));
        };
      if (t?.classification !== void 0) {
        let b = Un(t.classification);
        if (b !== a.era) {
          this._onerror(
            Error(
              `Era mismatch on inbound request '${r.method}': classified as ${b} but this instance serves ${a.era}`
            )
          );
          let p = t.classification.revision ?? b;
          i(ta.UnsupportedProtocolVersion, `Unsupported protocol version: ${p}`, {
            supported: this._supportedProtocolVersions,
            requested: p
          });
          return;
        }
      }
      if (Wo(r.method) && !a.hasRequestMethod(r.method)) {
        i(ta.MethodNotFound, "Method not found");
        return;
      }
      let l = this._requestHandlers.get(r.method) ?? this.fallbackRequestHandler;
      if (l === void 0) {
        i(ta.MethodNotFound, "Method not found");
        return;
      }
      let c = a.checkInboundEnvelope(s);
      if (c !== void 0) {
        i(ta.InvalidParams, c);
        return;
      }
      let d = (b, p) =>
          this._notificationViaCodec(this._resolveOutboundCodec(b.method), b, {
            ...p,
            relatedRequestId: r.id
          }),
        m = (b, p, h) =>
          this._requestWithSchemaViaCodec(this._resolveOutboundCodec(b.method), b, p, {
            ...h,
            relatedRequestId: r.id
          }),
        _ = new AbortController();
      this._requestHandlerAbortControllers.set(r.id, _);
      let E = s.inputResponses === void 0 ? void 0 : ou(s.inputResponses),
        P = {
          sessionId: n?.sessionId,
          mcpReq: {
            id: r.id,
            method: r.method,
            _meta: r.params?._meta,
            ...(s.envelope !== void 0 && { envelope: s.envelope }),
            ...(E !== void 0 && { inputResponses: E.accepted }),
            ...(E !== void 0 &&
              E.droppedKeys.length > 0 && { droppedInputResponseKeys: E.droppedKeys }),
            requestState: s.requestState === void 0 ? su : mn(s.requestState),
            signal: _.signal,
            send: (b, p, h) => {
              let g = this._resolveOutboundCodec(b.method);
              if ((this._assertOutboundRequestInEra(g, b.method), en(p))) return m(b, p, h);
              let f = Hn(g, b.method);
              if (f === void 0)
                throw TypeError(
                  `'${b.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`
                );
              return m(b, f, p);
            },
            notify: d
          },
          http: t?.authInfo ? { authInfo: t.authInfo } : void 0
        },
        y = this.buildContext(P, t);
      Promise.resolve()
        .then(() => l(r, y))
        .then(
          async (b) => {
            if (_.signal.aborted) return;
            let p;
            try {
              p = a.encodeResult(r.method, b, this._outboundServerInfo());
            } catch (g) {
              (this._onerror(Error(`Failed to encode result for ${r.method}: ${g}`)),
                i(ta.InternalError, "Internal error"));
              return;
            }
            let h = { result: p, jsonrpc: "2.0", id: r.id };
            await n?.send(h);
          },
          async (b) => {
            if (_.signal.aborted) return;
            let p = Number.isSafeInteger(b.code) ? b.code : ta.InternalError,
              h = {
                jsonrpc: "2.0",
                id: r.id,
                error: {
                  code: a.encodeErrorCode(p),
                  message: b.message ?? "Internal error",
                  ...(b.data !== void 0 && { data: b.data })
                }
              };
            await n?.send(h);
          }
        )
        .catch((b) => this._onerror(Error(`Failed to send response: ${b}`)))
        .finally(() => {
          if (this._requestHandlerAbortControllers.get(r.id) === _)
            this._requestHandlerAbortControllers.delete(r.id);
        });
    }
    _onprogress(e) {
      let { progressToken: t, ...r } = e.params,
        s = Number(t),
        a = this._progressHandlers.get(s);
      if (!a) {
        this._onerror(
          Error(`Received a progress notification for an unknown token: ${JSON.stringify(e)}`)
        );
        return;
      }
      let n = this._responseHandlers.get(s),
        i = this._timeoutInfo.get(s);
      if (i && n && i.resetTimeoutOnProgress)
        try {
          this._resetTimeout(s);
        } catch (l) {
          (this._responseHandlers.delete(s),
            this._progressHandlers.delete(s),
            this._cleanupTimeout(s),
            n(l));
          return;
        }
      a(r);
    }
    _onresponse(e) {
      let t = Number(e.id),
        r = this._responseHandlers.get(t);
      if (r === void 0) {
        this._onerror(Error(`Received a response for an unknown message ID: ${JSON.stringify(e)}`));
        return;
      }
      if (
        (this._responseHandlers.delete(t),
        this._cleanupTimeout(t),
        this._progressHandlers.delete(t),
        mOe(e))
      )
        r(e);
      else r(Cd.fromError(e.error.code, e.error.message, e.error.data));
    }
    get transport() {
      return this._transport;
    }
    async close() {
      await this._transport?.close();
    }
    request(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      if ((this._assertOutboundRequestInEra(s, e.method), en(t)))
        return this._requestWithSchemaViaCodec(s, e, t, r);
      let a = Hn(s, e.method);
      if (a === void 0)
        throw TypeError(
          `'${e.method}' is not a spec method; pass a result schema as the second argument to request().`
        );
      return this._requestWithSchemaViaCodec(s, e, a, t);
    }
    _negotiatedWireCodec() {
      return Je(this._negotiatedProtocolVersion);
    }
    _wireCodec() {
      return this._negotiatedWireCodec();
    }
    _resolveOutboundCodec(e) {
      if (this._negotiatedProtocolVersion === void 0) {
        let t = eu(e);
        if (t) return t;
      }
      return this._negotiatedWireCodec();
    }
    _assertOutboundRequestInEra(e, t) {
      if (t.startsWith("tasks/")) return;
      if (Wo(t) && !e.hasRequestMethod(t))
        throw new bi(
          ii.MethodNotSupportedByProtocolVersion,
          `Method '${t}' is not supported by the negotiated protocol version (wire era ${e.era})`,
          { method: t, era: e.era }
        );
    }
    _requestWithSchema(e, t, r) {
      let s = this._resolveOutboundCodec(e.method);
      return (
        this._assertOutboundRequestInEra(s, e.method),
        this._requestWithSchemaViaCodec(s, e, t, r)
      );
    }
    _requestWithSchemaViaCodec(e, t, r, s) {
      let { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i, headers: l } = s ?? {},
        c = Date.now(),
        d,
        m;
      return new Promise((_, E) => {
        let P = (R) => {
          E(R);
        };
        if (!this._transport) {
          P(Error("Not connected"));
          return;
        }
        if (this._options?.enforceStrictCapabilities === !0)
          try {
            this.assertCapabilityForMethod(t.method);
          } catch (R) {
            P(R);
            return;
          }
        if (s?.signal?.aborted) {
          let R = s.signal.reason;
          throw R instanceof bi ? R : new bi(ii.RequestTimeout, String(R));
        }
        let y =
            e.era === lo && this._transport.hasPerRequestStream === !0
              ? new AbortController()
              : void 0,
          b = this._requestMessageId++;
        m = b;
        let p = { ...t, jsonrpc: "2.0", id: b };
        if (s?.onprogress)
          (this._progressHandlers.set(b, s.onprogress),
            (p.params = { ...t.params, _meta: { ...t.params?._meta, progressToken: b } }));
        let h = this._envelopeOutbound(p),
          g = !1,
          f = (R) => {
            if (g) return;
            if ((this._progressHandlers.delete(b), y === void 0))
              this._transport
                ?.send(
                  this._envelopeOutbound({
                    jsonrpc: "2.0",
                    method: "notifications/cancelled",
                    params: { requestId: b, reason: String(R) }
                  }),
                  { relatedRequestId: a, resumptionToken: n, onresumptiontoken: i }
                )
                .catch((S) => this._onerror(Error(`Failed to send cancellation: ${S}`)));
            else y.abort();
            E(R instanceof bi ? R : new bi(ii.RequestTimeout, String(R)));
          };
        (this._responseHandlers.set(b, (R) => {
          if (s?.signal?.aborted) return;
          if (((g = !0), R instanceof Error)) return E(R);
          let S;
          try {
            S = e.decodeResult(t.method, R.result);
          } catch (L) {
            return E(L instanceof Error ? L : Error(String(L)));
          }
          if (S.kind === "invalid") return E(S.error);
          if (S.kind === "task") {
            if (
              s?.allowTask === !0 &&
              this._capabilities?.extensions?.[ml] !== void 0 &&
              fl(S.result)
            )
              return _(S.result);
            return E(
              new bi(ii.UnsupportedResultType, `Unsupported result type 'task' for ${t.method}`, {
                method: t.method
              })
            );
          }
          if (S.kind === "input_required") {
            if (s?.allowInputRequired === !0) return _(lu(S));
            let L = {
              codec: e,
              request: t,
              resultSchema: r,
              options: s,
              flowStartedAt: c,
              retry: (H, N) =>
                this._requestWithSchemaViaCodec(
                  e,
                  H === void 0 ? { method: t.method } : { method: t.method, params: H },
                  r,
                  N
                )
            };
            return _(this._resolveNonCompleteResult(S, L));
          }
          let k = S.result;
          Xo(r, k).then((L) => {
            if (L.success) _(L.data);
            else E(new bi(ii.InvalidResult, `Invalid result for ${t.method}: ${L.error}`));
          }, E);
        }),
          (d = () => f(s?.signal?.reason)),
          s?.signal?.addEventListener("abort", d, { once: !0 }));
        let z = s?.timeout ?? ss,
          C = () => f(new bi(ii.RequestTimeout, "Request timed out", { timeout: z }));
        (this._setupTimeout(b, z, s?.maxTotalTimeout, C, s?.resetTimeoutOnProgress ?? !1),
          this._transport
            .send(h, {
              relatedRequestId: a,
              resumptionToken: n,
              onresumptiontoken: i,
              headers: l,
              requestSignal: y?.signal
            })
            .catch((R) => {
              (this._progressHandlers.delete(b), E(R));
            }));
      }).finally(() => {
        if (d) s?.signal?.removeEventListener("abort", d);
        if (m !== void 0) (this._responseHandlers.delete(m), this._cleanupTimeout(m));
      });
    }
    async notification(e, t) {
      return this._notificationViaCodec(this._resolveOutboundCodec(e.method), e, t);
    }
    async _notificationViaCodec(e, t, r) {
      if (!this._transport) throw new bi(ii.NotConnected, "Not connected");
      if (Yo(t.method) && !e.hasNotificationMethod(t.method))
        throw new bi(
          ii.MethodNotSupportedByProtocolVersion,
          `Notification '${t.method}' is not supported by the negotiated protocol version (wire era ${e.era})`,
          { method: t.method, era: e.era }
        );
      this.assertNotificationCapability(t.method);
      let s = this._envelopeOutbound({ jsonrpc: "2.0", ...t });
      if (
        (this._options?.debouncedNotificationMethods ?? []).includes(t.method) &&
        !t.params &&
        !r?.relatedRequestId
      ) {
        if (this._pendingDebouncedNotifications.has(t.method)) return;
        (this._pendingDebouncedNotifications.add(t.method),
          Promise.resolve().then(() => {
            if ((this._pendingDebouncedNotifications.delete(t.method), !this._transport)) return;
            this._transport?.send(s, r).catch((a) => this._onerror(a));
          }));
        return;
      }
      await this._transport.send(s, r);
    }
    setRequestHandler(e, t, r) {
      this.assertRequestHandlerCapability(e);
      let s;
      if (typeof t === "function") {
        if (!Wo(e))
          throw TypeError(
            `'${e}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`
          );
        s = (a, n) => {
          let i = this._negotiatedWireCodec(),
            l = i.validateRequest(e, a);
          if (!l.ok && l.reason === "not-in-era") l = i.validateInputRequest(e, a);
          if (!l.ok) {
            if (l.reason === "not-in-era")
              throw new Cd(ta.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(l.message);
          }
          return Promise.resolve(t(l.value, n));
        };
      } else if (r)
        s = async (a, n) => {
          let i = await Xo(t.params, { ...a.params });
          if (!i.success) throw new Cd(ta.InvalidParams, `Invalid params for ${e}: ${i.error}`);
          return r(i.data, n);
        };
      else throw TypeError("setRequestHandler: handler is required");
      this._requestHandlers.set(e, this._wrapHandler(e, s));
    }
    _wrapHandler(e, t) {
      return t;
    }
    _outboundServerInfo() {}
    removeRequestHandler(e) {
      this._requestHandlers.delete(e);
    }
    assertCanSetRequestHandler(e) {
      if (this._requestHandlers.has(e))
        throw Error(`A request handler for ${e} already exists, which would be overridden`);
    }
    setNotificationHandler(e, t, r) {
      if (typeof t === "function") {
        if (!Yo(e))
          throw TypeError(
            `'${e}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`
          );
        this._notificationHandlers.set(e, (s, a) => {
          let n = a.validateNotification(e, s);
          if (!n.ok) {
            if (n.reason === "not-in-era")
              throw new Cd(ta.InternalError, `No wire schema for ${e} in the resolved era`);
            throw Error(n.message);
          }
          return Promise.resolve(t(n.value));
        });
        return;
      }
      if (!r) throw TypeError("setNotificationHandler: handler is required");
      this._notificationHandlers.set(e, async (s) => {
        let a = await Xo(t.params, { ...s.params });
        if (!a.success)
          throw new Cd(ta.InvalidParams, `Invalid params for notification ${e}: ${a.error}`);
        await r(a.data, s);
      });
    }
    removeNotificationHandler(e) {
      this._notificationHandlers.delete(e);
    }
  };
function Qr(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function Pi(e, t) {
  let r = { ...e };
  for (let s in t) {
    let a = s,
      n = t[a];
    if (n === void 0) continue;
    let i = r[a];
    r[a] = Qr(i) && Qr(n) ? { ...i, ...n } : n;
  }
  return r;
}
function io(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function ou(e) {
  let t = {},
    r = [];
  if (!io(e)) return { accepted: t, droppedKeys: r };
  for (let [s, a] of Object.entries(e)) {
    if (!io(a) || "method" in a || "result" in a) {
      r.push(s);
      continue;
    }
    t[s] = a;
  }
  return { accepted: t, droppedKeys: r };
}
function Kn(e) {
  throw new bi(
    ii.SendFailed,
    `ctx.mcpReq.${e} is not available while fulfilling an embedded input request: the request is fulfilled locally and has no related peer request`
  );
}
function nu(e, t, r, s, a) {
  return {
    sessionId: a,
    mcpReq: {
      id: e,
      method: t,
      _meta: r?._meta,
      requestState: mn(void 0),
      signal: s,
      send: () => Kn("send"),
      notify: () => Kn("notify")
    }
  };
}
async function iu(e, t, r, s, a) {
  if (!io(s) || typeof s.method !== "string")
    throw new bi(
      ii.InvalidResult,
      `Invalid input request '${r}': each inputRequests entry must be an embedded request object with a method`,
      { key: r }
    );
  let n = s.method;
  if (!t.hasInputRequestMethod(n))
    throw new bi(
      ii.InvalidResult,
      `Invalid input request '${r}': '${n}' is not an embedded request the ${t.era} revision defines (expected elicitation/create, sampling/createMessage, or roots/list)`,
      { key: r, method: n }
    );
  let i = e.getRequestHandler(n);
  if (i === void 0)
    throw new bi(
      ii.CapabilityNotSupported,
      `Cannot fulfil input request '${r}': no handler is registered for '${n}' on this client. Declare the corresponding capability and register a handler, or handle input_required results manually.`,
      { key: r, method: n }
    );
  let l = io(s.params) ? s.params : void 0;
  return await i(
    { jsonrpc: "2.0", id: r, method: n, ...(l !== void 0 && { params: l }) },
    e.buildContext(nu(r, n, l, a, e.sessionId))
  );
}
function cu(e, t) {
  return {
    ...(e?.signal !== void 0 && { signal: e.signal }),
    ...(e?.onprogress !== void 0 && { onprogress: e.onprogress }),
    ...(e?.resetTimeoutOnProgress !== void 0 && {
      resetTimeoutOnProgress: e.resetTimeoutOnProgress
    }),
    ...(e?.headers !== void 0 && { headers: e.headers }),
    ...(t.timeout !== void 0 && { timeout: t.timeout }),
    ...(t.maxTotalTimeout !== void 0 && { maxTotalTimeout: t.maxTotalTimeout }),
    ...(e?.allowTask === !0 && { allowTask: !0 }),
    allowInputRequired: !0
  };
}
function Ti(e, t, r, s) {
  let { codec: a, request: n, options: i, flowStartedAt: l } = s,
    c = {
      inputRequests: r.inputRequests,
      ...(r.requestState !== void 0 && { requestState: r.requestState })
    },
    d = {
      dispatchInputRequest: (m, _, E) => iu(e, a, m, _, E),
      retry: (m, _) => s.retry(m, cu(i, _))
    };
  return Yl({
    config: t,
    method: n.method,
    originalParams: n.params,
    firstPayload: c,
    flowStartedAt: l,
    signal: i?.signal,
    requestOptions: {
      ...(i?.timeout !== void 0 && { timeout: i.timeout }),
      ...(i?.maxTotalTimeout !== void 0 && { maxTotalTimeout: i.maxTotalTimeout }),
      ...(i?.onprogress !== void 0 && { onprogress: i.onprogress })
    },
    hooks: d
  });
}
function lu(e) {
  return {
    resultType: "input_required",
    inputRequests: e.inputRequests,
    ...(e.requestState !== void 0 && { requestState: e.requestState })
  };
}
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ var uu = K((e) => {
    var t =
        /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
      r = /\\([\u000b\u0020-\u00ff])/g,
      s = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
    e.parse = a;
    function a(l) {
      if (!l) throw TypeError("argument string is required");
      var c = typeof l === "object" ? n(l) : l;
      if (typeof c !== "string") throw TypeError("argument string is required to be a string");
      var d = c.indexOf(";"),
        m = d !== -1 ? c.slice(0, d).trim() : c.trim();
      if (!s.test(m)) throw TypeError("invalid media type");
      var _ = new i(m.toLowerCase());
      if (d !== -1) {
        var E, P, y;
        t.lastIndex = d;
        while ((P = t.exec(c))) {
          if (P.index !== d) throw TypeError("invalid parameter format");
          if (((d += P[0].length), (E = P[1].toLowerCase()), (y = P[2]), y.charCodeAt(0) === 34)) {
            if (((y = y.slice(1, -1)), y.indexOf("\\") !== -1)) y = y.replace(r, "$1");
          }
          _.parameters[E] = y;
        }
        if (d !== c.length) throw TypeError("invalid parameter format");
      }
      return _;
    }
    function n(l) {
      var c;
      if (typeof l.getHeader === "function") c = l.getHeader("content-type");
      else if (typeof l.headers === "object") c = l.headers && l.headers["content-type"];
      if (typeof c !== "string") throw TypeError("content-type header is missing from object");
      return c;
    }
    function i(l) {
      ((this.parameters = Object.create(null)), (this.type = l));
    }
  }),
  du = $s(uu(), 1);
function Ci(e) {
  if (!e) return;
  try {
    return du.parse(e).type;
  } catch {
    let t = (e.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (t === "" || e.slice(t.length).includes(",")) return;
    return t;
  }
}
var ki = 10485760,
  hbo = class {
    _buffer;
    _maxBufferSize;
    constructor(e) {
      this._maxBufferSize = e?.maxBufferSize ?? ki;
    }
    append(e) {
      if ((this._buffer?.length ?? 0) + e.length > this._maxBufferSize)
        throw (
          this.clear(),
          Error(`ReadBuffer exceeded maximum size of ${this._maxBufferSize} bytes`)
        );
      this._buffer = this._buffer ? Buffer.concat([this._buffer, e]) : e;
    }
    readMessage() {
      while (this._buffer) {
        let e = this._buffer.indexOf(`
`);
        if (e === -1) return null;
        let t = this._buffer.toString("utf8", 0, e).replace(/\r$/, "");
        this._buffer = this._buffer.subarray(e + 1);
        try {
          return BTr(t);
        } catch (r) {
          if (r instanceof SyntaxError) continue;
          throw r;
        }
      }
      return null;
    }
    clear() {
      this._buffer = void 0;
    }
  };
function BTr(e) {
  return Fae.parse(JSON.parse(e));
}
function ybo(e) {
  return (
    JSON.stringify(e) +
    `
`
  );
}
function ts(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return { ...e };
}
function UDt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) =>
    e(r, { ...t, ...s, headers: s?.headers ? { ...ts(t.headers), ...ts(s.headers) } : t.headers });
}
var mo = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.regexpCode =
        e.getEsmExportName =
        e.getProperty =
        e.safeStringify =
        e.stringify =
        e.strConcat =
        e.addCodeArg =
        e.str =
        e._ =
        e.nil =
        e._Code =
        e.Name =
        e.IDENTIFIER =
        e._CodeOrName =
          void 0));
    var t = class {};
    ((e._CodeOrName = t), (e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i));
    var r = class extends t {
      constructor(h) {
        super();
        if (!e.IDENTIFIER.test(h)) throw Error("CodeGen: name must be a valid identifier");
        this.str = h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    e.Name = r;
    var s = class extends t {
      constructor(h) {
        super();
        this._items = typeof h === "string" ? [h] : h;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return !1;
        let h = this._items[0];
        return h === "" || h === '""';
      }
      get str() {
        var h;
        return (h = this._str) !== null && h !== void 0
          ? h
          : (this._str = this._items.reduce((g, f) => `${g}${f}`, ""));
      }
      get names() {
        var h;
        return (h = this._names) !== null && h !== void 0
          ? h
          : (this._names = this._items.reduce((g, f) => {
              if (f instanceof r) g[f.str] = (g[f.str] || 0) + 1;
              return g;
            }, {}));
      }
    };
    ((e._Code = s), (e.nil = new s("")));
    function a(h, ...g) {
      let f = [h[0]],
        z = 0;
      while (z < g.length) (l(f, g[z]), f.push(h[++z]));
      return new s(f);
    }
    e._ = a;
    let n = new s("+");
    function i(h, ...g) {
      let f = [P(h[0])],
        z = 0;
      while (z < g.length) (f.push(n), l(f, g[z]), f.push(n, P(h[++z])));
      return (c(f), new s(f));
    }
    e.str = i;
    function l(h, g) {
      if (g instanceof s) h.push(...g._items);
      else if (g instanceof r) h.push(g);
      else h.push(_(g));
    }
    e.addCodeArg = l;
    function c(h) {
      let g = 1;
      while (g < h.length - 1) {
        if (h[g] === n) {
          let f = d(h[g - 1], h[g + 1]);
          if (f !== void 0) {
            h.splice(g - 1, 3, f);
            continue;
          }
          h[g++] = "+";
        }
        g++;
      }
    }
    function d(h, g) {
      if (g === '""') return h;
      if (h === '""') return g;
      if (typeof h == "string") {
        if (g instanceof r || h[h.length - 1] !== '"') return;
        if (typeof g != "string") return `${h.slice(0, -1)}${g}"`;
        if (g[0] === '"') return h.slice(0, -1) + g.slice(1);
        return;
      }
      if (typeof g == "string" && g[0] === '"' && !(h instanceof r)) return `"${h}${g.slice(1)}`;
    }
    function m(h, g) {
      return g.emptyStr() ? h : h.emptyStr() ? g : i`${h}${g}`;
    }
    e.strConcat = m;
    function _(h) {
      return typeof h == "number" || typeof h == "boolean" || h === null
        ? h
        : P(Array.isArray(h) ? h.join(",") : h);
    }
    function E(h) {
      return new s(P(h));
    }
    e.stringify = E;
    function P(h) {
      return JSON.stringify(h)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = P;
    function y(h) {
      return typeof h == "string" && e.IDENTIFIER.test(h) ? new s(`.${h}`) : a`[${h}]`;
    }
    e.getProperty = y;
    function b(h) {
      if (typeof h == "string" && e.IDENTIFIER.test(h)) return new s(`${h}`);
      throw Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`);
    }
    e.getEsmExportName = b;
    function p(h) {
      return new s(h.toString());
    }
    e.regexpCode = p;
  }),
  qi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0));
    let t = mo();
    var r = class extends Error {
        constructor(c) {
          super(`CodeGen: "code" for ${c} not defined`);
          this.value = c.value;
        }
      },
      s;
    ((function (c) {
      ((c[(c.Started = 0)] = "Started"), (c[(c.Completed = 1)] = "Completed"));
    })(s || (e.UsedValueState = s = {})),
      (e.varKinds = {
        const: new t.Name("const"),
        let: new t.Name("let"),
        var: new t.Name("var")
      }));
    var a = class {
      constructor({ prefixes: c, parent: d } = {}) {
        ((this._names = {}), (this._prefixes = c), (this._parent = d));
      }
      toName(c) {
        return c instanceof t.Name ? c : this.name(c);
      }
      name(c) {
        return new t.Name(this._newName(c));
      }
      _newName(c) {
        let d = this._names[c] || this._nameGroup(c);
        return `${c}${d.index++}`;
      }
      _nameGroup(c) {
        var d, m;
        if (
          ((m = (d = this._parent) === null || d === void 0 ? void 0 : d._prefixes) === null ||
          m === void 0
            ? void 0
            : m.has(c)) ||
          (this._prefixes && !this._prefixes.has(c))
        )
          throw Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
        return (this._names[c] = { prefix: c, index: 0 });
      }
    };
    e.Scope = a;
    var n = class extends t.Name {
      constructor(c, d) {
        super(d);
        this.prefix = c;
      }
      setValue(c, { property: d, itemIndex: m }) {
        ((this.value = c), (this.scopePath = t._`.${new t.Name(d)}[${m}]`));
      }
    };
    e.ValueScopeName = n;
    let i = t._`\n`;
    var l = class extends a {
      constructor(c) {
        super(c);
        ((this._values = {}),
          (this._scope = c.scope),
          (this.opts = { ...c, _n: c.lines ? i : t.nil }));
      }
      get() {
        return this._scope;
      }
      name(c) {
        return new n(c, this._newName(c));
      }
      value(c, d) {
        var m;
        if (d.ref === void 0) throw Error("CodeGen: ref must be passed in value");
        let _ = this.toName(c),
          { prefix: E } = _,
          P = (m = d.key) !== null && m !== void 0 ? m : d.ref,
          y = this._values[E];
        if (y) {
          let h = y.get(P);
          if (h) return h;
        } else y = this._values[E] = new Map();
        y.set(P, _);
        let b = this._scope[E] || (this._scope[E] = []),
          p = b.length;
        return ((b[p] = d.ref), _.setValue(d, { property: E, itemIndex: p }), _);
      }
      getValue(c, d) {
        let m = this._values[c];
        if (!m) return;
        return m.get(d);
      }
      scopeRefs(c, d = this._values) {
        return this._reduceValues(d, (m) => {
          if (m.scopePath === void 0) throw Error(`CodeGen: name "${m}" has no value`);
          return t._`${c}${m.scopePath}`;
        });
      }
      scopeCode(c = this._values, d, m) {
        return this._reduceValues(
          c,
          (_) => {
            if (_.value === void 0) throw Error(`CodeGen: name "${_}" has no value`);
            return _.value.code;
          },
          d,
          m
        );
      }
      _reduceValues(c, d, m = {}, _) {
        let E = t.nil;
        for (let P in c) {
          let y = c[P];
          if (!y) continue;
          let b = (m[P] = m[P] || new Map());
          y.forEach((p) => {
            if (b.has(p)) return;
            b.set(p, s.Started);
            let h = d(p);
            if (h) {
              let g = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              E = t._`${E}${g} ${p} = ${h};${this.opts._n}`;
            } else if ((h = _ === null || _ === void 0 ? void 0 : _(p)))
              E = t._`${E}${h}${this.opts._n}`;
            else throw new r(p);
            b.set(p, s.Completed);
          });
        }
        return E;
      }
    };
    e.ValueScope = l;
  }),
  te = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.or =
        e.and =
        e.not =
        e.CodeGen =
        e.operators =
        e.varKinds =
        e.ValueScopeName =
        e.ValueScope =
        e.Scope =
        e.Name =
        e.regexpCode =
        e.stringify =
        e.getProperty =
        e.nil =
        e.strConcat =
        e.str =
        e._ =
          void 0));
    let t = mo(),
      r = qi();
    var s = mo();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return s._;
      }
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return s.str;
        }
      }),
      Object.defineProperty(e, "strConcat", {
        enumerable: !0,
        get: function () {
          return s.strConcat;
        }
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return s.nil;
        }
      }),
      Object.defineProperty(e, "getProperty", {
        enumerable: !0,
        get: function () {
          return s.getProperty;
        }
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return s.stringify;
        }
      }),
      Object.defineProperty(e, "regexpCode", {
        enumerable: !0,
        get: function () {
          return s.regexpCode;
        }
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return s.Name;
        }
      }));
    var a = qi();
    (Object.defineProperty(e, "Scope", {
      enumerable: !0,
      get: function () {
        return a.Scope;
      }
    }),
      Object.defineProperty(e, "ValueScope", {
        enumerable: !0,
        get: function () {
          return a.ValueScope;
        }
      }),
      Object.defineProperty(e, "ValueScopeName", {
        enumerable: !0,
        get: function () {
          return a.ValueScopeName;
        }
      }),
      Object.defineProperty(e, "varKinds", {
        enumerable: !0,
        get: function () {
          return a.varKinds;
        }
      }),
      (e.operators = {
        GT: new t._Code(">"),
        GTE: new t._Code(">="),
        LT: new t._Code("<"),
        LTE: new t._Code("<="),
        EQ: new t._Code("==="),
        NEQ: new t._Code("!=="),
        NOT: new t._Code("!"),
        OR: new t._Code("||"),
        AND: new t._Code("&&"),
        ADD: new t._Code("+")
      }));
    var n = class {
        optimizeNodes() {
          return this;
        }
        optimizeNames(w, I) {
          return this;
        }
      },
      i = class extends n {
        constructor(w, I, j) {
          super();
          ((this.varKind = w), (this.name = I), (this.rhs = j));
        }
        render({ es5: w, _n: I }) {
          let j = w ? r.varKinds.var : this.varKind,
            J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
          return `${j} ${this.name}${J};` + I;
        }
        optimizeNames(w, I) {
          if (!w[this.name.str]) return;
          if (this.rhs) this.rhs = G(this.rhs, w, I);
          return this;
        }
        get names() {
          return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
        }
      },
      l = class extends n {
        constructor(w, I, j) {
          super();
          ((this.lhs = w), (this.rhs = I), (this.sideEffects = j));
        }
        render({ _n: w }) {
          return `${this.lhs} = ${this.rhs};` + w;
        }
        optimizeNames(w, I) {
          if (this.lhs instanceof t.Name && !w[this.lhs.str] && !this.sideEffects) return;
          return ((this.rhs = G(this.rhs, w, I)), this);
        }
        get names() {
          return W(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
        }
      },
      c = class extends l {
        constructor(w, I, j, J) {
          super(w, j, J);
          this.op = I;
        }
        render({ _n: w }) {
          return `${this.lhs} ${this.op}= ${this.rhs};` + w;
        }
      },
      d = class extends n {
        constructor(w) {
          super();
          ((this.label = w), (this.names = {}));
        }
        render({ _n: w }) {
          return `${this.label}:` + w;
        }
      },
      m = class extends n {
        constructor(w) {
          super();
          ((this.label = w), (this.names = {}));
        }
        render({ _n: w }) {
          return `break${this.label ? ` ${this.label}` : ""};` + w;
        }
      },
      _ = class extends n {
        constructor(w) {
          super();
          this.error = w;
        }
        render({ _n: w }) {
          return `throw ${this.error};` + w;
        }
        get names() {
          return this.error.names;
        }
      },
      E = class extends n {
        constructor(w) {
          super();
          this.code = w;
        }
        render({ _n: w }) {
          return `${this.code};` + w;
        }
        optimizeNodes() {
          return `${this.code}` ? this : void 0;
        }
        optimizeNames(w, I) {
          return ((this.code = G(this.code, w, I)), this);
        }
        get names() {
          return this.code instanceof t._CodeOrName ? this.code.names : {};
        }
      },
      P = class extends n {
        constructor(w = []) {
          super();
          this.nodes = w;
        }
        render(w) {
          return this.nodes.reduce((I, j) => I + j.render(w), "");
        }
        optimizeNodes() {
          let { nodes: w } = this,
            I = w.length;
          while (I--) {
            let j = w[I].optimizeNodes();
            if (Array.isArray(j)) w.splice(I, 1, ...j);
            else if (j) w[I] = j;
            else w.splice(I, 1);
          }
          return w.length > 0 ? this : void 0;
        }
        optimizeNames(w, I) {
          let { nodes: j } = this,
            J = j.length;
          while (J--) {
            let Y = j[J];
            if (Y.optimizeNames(w, I)) continue;
            (se(w, Y.names), j.splice(J, 1));
          }
          return j.length > 0 ? this : void 0;
        }
        get names() {
          return this.nodes.reduce((w, I) => x(w, I.names), {});
        }
      },
      y = class extends P {
        render(w) {
          return "{" + w._n + super.render(w) + "}" + w._n;
        }
      },
      b = class extends P {},
      p = class extends y {};
    p.kind = "else";
    var h = class w extends y {
      constructor(I, j) {
        super(j);
        this.condition = I;
      }
      render(I) {
        let j = `if(${this.condition})` + super.render(I);
        if (this.else) j += "else " + this.else.render(I);
        return j;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let I = this.condition;
        if (I === !0) return this.nodes;
        let j = this.else;
        if (j) {
          let J = j.optimizeNodes();
          j = this.else = Array.isArray(J) ? new p(J) : J;
        }
        if (j) {
          if (I === !1) return j instanceof w ? j : j.nodes;
          if (this.nodes.length) return this;
          return new w(le(I), j instanceof w ? [j] : j.nodes);
        }
        if (I === !1 || !this.nodes.length) return;
        return this;
      }
      optimizeNames(I, j) {
        var J;
        if (
          ((this.else = (J = this.else) === null || J === void 0 ? void 0 : J.optimizeNames(I, j)),
          !(super.optimizeNames(I, j) || this.else))
        )
          return;
        return ((this.condition = G(this.condition, I, j)), this);
      }
      get names() {
        let I = super.names;
        if ((W(I, this.condition), this.else)) x(I, this.else.names);
        return I;
      }
    };
    h.kind = "if";
    var g = class extends y {};
    g.kind = "for";
    var f = class extends g {
        constructor(w) {
          super();
          this.iteration = w;
        }
        render(w) {
          return `for(${this.iteration})` + super.render(w);
        }
        optimizeNames(w, I) {
          if (!super.optimizeNames(w, I)) return;
          return ((this.iteration = G(this.iteration, w, I)), this);
        }
        get names() {
          return x(super.names, this.iteration.names);
        }
      },
      z = class extends g {
        constructor(w, I, j, J) {
          super();
          ((this.varKind = w), (this.name = I), (this.from = j), (this.to = J));
        }
        render(w) {
          let I = w.es5 ? r.varKinds.var : this.varKind,
            { name: j, from: J, to: Y } = this;
          return `for(${I} ${j}=${J}; ${j}<${Y}; ${j}++)` + super.render(w);
        }
        get names() {
          return W(W(super.names, this.from), this.to);
        }
      },
      C = class extends g {
        constructor(w, I, j, J) {
          super();
          ((this.loop = w), (this.varKind = I), (this.name = j), (this.iterable = J));
        }
        render(w) {
          return (
            `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(w)
          );
        }
        optimizeNames(w, I) {
          if (!super.optimizeNames(w, I)) return;
          return ((this.iterable = G(this.iterable, w, I)), this);
        }
        get names() {
          return x(super.names, this.iterable.names);
        }
      },
      R = class extends y {
        constructor(w, I, j) {
          super();
          ((this.name = w), (this.args = I), (this.async = j));
        }
        render(w) {
          return (
            `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(w)
          );
        }
      };
    R.kind = "func";
    var S = class extends P {
      render(w) {
        return "return " + super.render(w);
      }
    };
    S.kind = "return";
    var k = class extends y {
        render(w) {
          let I = "try" + super.render(w);
          if (this.catch) I += this.catch.render(w);
          if (this.finally) I += this.finally.render(w);
          return I;
        }
        optimizeNodes() {
          var w, I;
          return (
            super.optimizeNodes(),
            (w = this.catch) === null || w === void 0 || w.optimizeNodes(),
            (I = this.finally) === null || I === void 0 || I.optimizeNodes(),
            this
          );
        }
        optimizeNames(w, I) {
          var j, J;
          return (
            super.optimizeNames(w, I),
            (j = this.catch) === null || j === void 0 || j.optimizeNames(w, I),
            (J = this.finally) === null || J === void 0 || J.optimizeNames(w, I),
            this
          );
        }
        get names() {
          let w = super.names;
          if (this.catch) x(w, this.catch.names);
          if (this.finally) x(w, this.finally.names);
          return w;
        }
      },
      L = class extends y {
        constructor(w) {
          super();
          this.error = w;
        }
        render(w) {
          return `catch(${this.error})` + super.render(w);
        }
      };
    L.kind = "catch";
    var H = class extends y {
      render(w) {
        return "finally" + super.render(w);
      }
    };
    H.kind = "finally";
    var N = class {
      constructor(w, I = {}) {
        ((this._values = {}),
          (this._blockStarts = []),
          (this._constants = {}),
          (this.opts = {
            ...I,
            _n: I.lines
              ? `
`
              : ""
          }),
          (this._extScope = w),
          (this._scope = new r.Scope({ parent: w })),
          (this._nodes = [new b()]));
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(w) {
        return this._scope.name(w);
      }
      scopeName(w) {
        return this._extScope.name(w);
      }
      scopeValue(w, I) {
        let j = this._extScope.value(w, I);
        return ((this._values[j.prefix] || (this._values[j.prefix] = new Set())).add(j), j);
      }
      getScopeValue(w, I) {
        return this._extScope.getValue(w, I);
      }
      scopeRefs(w) {
        return this._extScope.scopeRefs(w, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(w, I, j, J) {
        let Y = this._scope.toName(I);
        if (j !== void 0 && J) this._constants[Y.str] = j;
        return (this._leafNode(new i(w, Y, j)), Y);
      }
      const(w, I, j) {
        return this._def(r.varKinds.const, w, I, j);
      }
      let(w, I, j) {
        return this._def(r.varKinds.let, w, I, j);
      }
      var(w, I, j) {
        return this._def(r.varKinds.var, w, I, j);
      }
      assign(w, I, j) {
        return this._leafNode(new l(w, I, j));
      }
      add(w, I) {
        return this._leafNode(new c(w, e.operators.ADD, I));
      }
      code(w) {
        if (typeof w == "function") w();
        else if (w !== t.nil) this._leafNode(new E(w));
        return this;
      }
      object(...w) {
        let I = ["{"];
        for (let [j, J] of w) {
          if (I.length > 1) I.push(",");
          if ((I.push(j), j !== J || this.opts.es5)) (I.push(":"), (0, t.addCodeArg)(I, J));
        }
        return (I.push("}"), new t._Code(I));
      }
      if(w, I, j) {
        if ((this._blockNode(new h(w)), I && j)) this.code(I).else().code(j).endIf();
        else if (I) this.code(I).endIf();
        else if (j) throw Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(w) {
        return this._elseNode(new h(w));
      }
      else() {
        return this._elseNode(new p());
      }
      endIf() {
        return this._endBlockNode(h, p);
      }
      _for(w, I) {
        if ((this._blockNode(w), I)) this.code(I).endFor();
        return this;
      }
      for(w, I) {
        return this._for(new f(w), I);
      }
      forRange(w, I, j, J, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        let re = this._scope.toName(w);
        return this._for(new z(Y, re, I, j), () => J(re));
      }
      forOf(w, I, j, J = r.varKinds.const) {
        let Y = this._scope.toName(w);
        if (this.opts.es5) {
          let re = I instanceof t.Name ? I : this.var("_arr", I);
          return this.forRange("_i", 0, t._`${re}.length`, (Q) => {
            (this.var(Y, t._`${re}[${Q}]`), j(Y));
          });
        }
        return this._for(new C("of", J, Y, I), () => j(Y));
      }
      forIn(w, I, j, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(w, t._`Object.keys(${I})`, j);
        let Y = this._scope.toName(w);
        return this._for(new C("in", J, Y, I), () => j(Y));
      }
      endFor() {
        return this._endBlockNode(g);
      }
      label(w) {
        return this._leafNode(new d(w));
      }
      break(w) {
        return this._leafNode(new m(w));
      }
      return(w) {
        let I = new S();
        if ((this._blockNode(I), this.code(w), I.nodes.length !== 1))
          throw Error('CodeGen: "return" should have one node');
        return this._endBlockNode(S);
      }
      try(w, I, j) {
        if (!I && !j) throw Error('CodeGen: "try" without "catch" and "finally"');
        let J = new k();
        if ((this._blockNode(J), this.code(w), I)) {
          let Y = this.name("e");
          ((this._currNode = J.catch = new L(Y)), I(Y));
        }
        if (j) ((this._currNode = J.finally = new H()), this.code(j));
        return this._endBlockNode(L, H);
      }
      throw(w) {
        return this._leafNode(new _(w));
      }
      block(w, I) {
        if ((this._blockStarts.push(this._nodes.length), w)) this.code(w).endBlock(I);
        return this;
      }
      endBlock(w) {
        let I = this._blockStarts.pop();
        if (I === void 0) throw Error("CodeGen: not in self-balancing block");
        let j = this._nodes.length - I;
        if (j < 0 || (w !== void 0 && j !== w))
          throw Error(`CodeGen: wrong number of nodes: ${j} vs ${w} expected`);
        return ((this._nodes.length = I), this);
      }
      func(w, I = t.nil, j, J) {
        if ((this._blockNode(new R(w, I, j)), J)) this.code(J).endFunc();
        return this;
      }
      endFunc() {
        return this._endBlockNode(R);
      }
      optimize(w = 1) {
        while (w-- > 0)
          (this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants));
      }
      _leafNode(w) {
        return (this._currNode.nodes.push(w), this);
      }
      _blockNode(w) {
        (this._currNode.nodes.push(w), this._nodes.push(w));
      }
      _endBlockNode(w, I) {
        let j = this._currNode;
        if (j instanceof w || (I && j instanceof I)) return (this._nodes.pop(), this);
        throw Error(`CodeGen: not in block "${I ? `${w.kind}/${I.kind}` : w.kind}"`);
      }
      _elseNode(w) {
        let I = this._currNode;
        if (!(I instanceof h)) throw Error('CodeGen: "else" without "if"');
        return ((this._currNode = I.else = w), this);
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let w = this._nodes;
        return w[w.length - 1];
      }
      set _currNode(w) {
        let I = this._nodes;
        I[I.length - 1] = w;
      }
    };
    e.CodeGen = N;
    function x(w, I) {
      for (let j in I) w[j] = (w[j] || 0) + (I[j] || 0);
      return w;
    }
    function W(w, I) {
      return I instanceof t._CodeOrName ? x(w, I.names) : w;
    }
    function G(w, I, j) {
      if (w instanceof t.Name) return J(w);
      if (!Y(w)) return w;
      return new t._Code(
        w._items.reduce((re, Q) => {
          if (Q instanceof t.Name) Q = J(Q);
          if (Q instanceof t._Code) re.push(...Q._items);
          else re.push(Q);
          return re;
        }, [])
      );
      function J(re) {
        let Q = j[re.str];
        if (Q === void 0 || I[re.str] !== 1) return re;
        return (delete I[re.str], Q);
      }
      function Y(re) {
        return (
          re instanceof t._Code &&
          re._items.some((Q) => Q instanceof t.Name && I[Q.str] === 1 && j[Q.str] !== void 0)
        );
      }
    }
    function se(w, I) {
      for (let j in I) w[j] = (w[j] || 0) - (I[j] || 0);
    }
    function le(w) {
      return typeof w == "boolean" || typeof w == "number" || w === null ? !w : t._`!${F(w)}`;
    }
    e.not = le;
    let ie = U(e.operators.AND);
    function Se(...w) {
      return w.reduce(ie);
    }
    e.and = Se;
    let ae = U(e.operators.OR);
    function O(...w) {
      return w.reduce(ae);
    }
    e.or = O;
    function U(w) {
      return (I, j) => (I === t.nil ? j : j === t.nil ? I : t._`${F(I)} ${w} ${F(j)}`);
    }
    function F(w) {
      return w instanceof t.Name ? w : t._`(${w})`;
    }
  }),
  ne = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.checkStrictMode =
        e.getErrorPath =
        e.Type =
        e.useFunc =
        e.setEvaluated =
        e.evaluatedPropsToName =
        e.mergeEvaluated =
        e.eachItem =
        e.unescapeJsonPointer =
        e.escapeJsonPointer =
        e.escapeFragment =
        e.unescapeFragment =
        e.schemaRefOrVal =
        e.schemaHasRulesButRef =
        e.schemaHasRules =
        e.checkUnknownRules =
        e.alwaysValidSchema =
        e.toHash =
          void 0));
    let t = te(),
      r = mo();
    function s(R) {
      let S = {};
      for (let k of R) S[k] = !0;
      return S;
    }
    e.toHash = s;
    function a(R, S) {
      if (typeof S == "boolean") return S;
      if (Object.keys(S).length === 0) return !0;
      return (n(R, S), !i(S, R.self.RULES.all));
    }
    e.alwaysValidSchema = a;
    function n(R, S = R.schema) {
      let { opts: k, self: L } = R;
      if (!k.strictSchema) return;
      if (typeof S === "boolean") return;
      let H = L.RULES.keywords;
      for (let N in S) if (!H[N]) C(R, `unknown keyword: "${N}"`);
    }
    e.checkUnknownRules = n;
    function i(R, S) {
      if (typeof R == "boolean") return !R;
      for (let k in R) if (S[k]) return !0;
      return !1;
    }
    e.schemaHasRules = i;
    function l(R, S) {
      if (typeof R == "boolean") return !R;
      for (let k in R) if (k !== "$ref" && S.all[k]) return !0;
      return !1;
    }
    e.schemaHasRulesButRef = l;
    function c({ topSchemaRef: R, schemaPath: S }, k, L, H) {
      if (!H) {
        if (typeof k == "number" || typeof k == "boolean") return k;
        if (typeof k == "string") return t._`${k}`;
      }
      return t._`${R}${S}${(0, t.getProperty)(L)}`;
    }
    e.schemaRefOrVal = c;
    function d(R) {
      return E(decodeURIComponent(R));
    }
    e.unescapeFragment = d;
    function m(R) {
      return encodeURIComponent(_(R));
    }
    e.escapeFragment = m;
    function _(R) {
      if (typeof R == "number") return `${R}`;
      return R.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    e.escapeJsonPointer = _;
    function E(R) {
      return R.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    e.unescapeJsonPointer = E;
    function P(R, S) {
      if (Array.isArray(R)) for (let k of R) S(k);
      else S(R);
    }
    e.eachItem = P;
    function y({ mergeNames: R, mergeToName: S, mergeValues: k, resultToName: L }) {
      return (H, N, x, W) => {
        let G =
          x === void 0
            ? N
            : x instanceof t.Name
              ? (N instanceof t.Name ? R(H, N, x) : S(H, N, x), x)
              : N instanceof t.Name
                ? (S(H, x, N), N)
                : k(N, x);
        return W === t.Name && !(G instanceof t.Name) ? L(H, G) : G;
      };
    }
    e.mergeEvaluated = {
      props: y({
        mergeNames: (R, S, k) =>
          R.if(t._`${k} !== true && ${S} !== undefined`, () => {
            R.if(
              t._`${S} === true`,
              () => R.assign(k, !0),
              () => R.assign(k, t._`${k} || {}`).code(t._`Object.assign(${k}, ${S})`)
            );
          }),
        mergeToName: (R, S, k) =>
          R.if(t._`${k} !== true`, () => {
            if (S === !0) R.assign(k, !0);
            else (R.assign(k, t._`${k} || {}`), p(R, k, S));
          }),
        mergeValues: (R, S) => (R === !0 ? !0 : { ...R, ...S }),
        resultToName: b
      }),
      items: y({
        mergeNames: (R, S, k) =>
          R.if(t._`${k} !== true && ${S} !== undefined`, () =>
            R.assign(k, t._`${S} === true ? true : ${k} > ${S} ? ${k} : ${S}`)
          ),
        mergeToName: (R, S, k) =>
          R.if(t._`${k} !== true`, () =>
            R.assign(k, S === !0 ? !0 : t._`${k} > ${S} ? ${k} : ${S}`)
          ),
        mergeValues: (R, S) => (R === !0 ? !0 : Math.max(R, S)),
        resultToName: (R, S) => R.var("items", S)
      })
    };
    function b(R, S) {
      if (S === !0) return R.var("props", !0);
      let k = R.var("props", t._`{}`);
      if (S !== void 0) p(R, k, S);
      return k;
    }
    e.evaluatedPropsToName = b;
    function p(R, S, k) {
      Object.keys(k).forEach((L) => R.assign(t._`${S}${(0, t.getProperty)(L)}`, !0));
    }
    e.setEvaluated = p;
    let h = {};
    function g(R, S) {
      return R.scopeValue("func", { ref: S, code: h[S.code] || (h[S.code] = new r._Code(S.code)) });
    }
    e.useFunc = g;
    var f;
    (function (R) {
      ((R[(R.Num = 0)] = "Num"), (R[(R.Str = 1)] = "Str"));
    })(f || (e.Type = f = {}));
    function z(R, S, k) {
      if (R instanceof t.Name) {
        let L = S === f.Num;
        return k
          ? L
            ? t._`"[" + ${R} + "]"`
            : t._`"['" + ${R} + "']"`
          : L
            ? t._`"/" + ${R}`
            : t._`"/" + ${R}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return k ? (0, t.getProperty)(R).toString() : "/" + _(R);
    }
    e.getErrorPath = z;
    function C(R, S, k = R.opts.strictSchema) {
      if (!k) return;
      if (((S = `strict mode: ${S}`), k === !0)) throw Error(S);
      R.self.logger.warn(S);
    }
    e.checkStrictMode = C;
  }),
  Le = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        data: new t.Name("data"),
        valCxt: new t.Name("valCxt"),
        instancePath: new t.Name("instancePath"),
        parentData: new t.Name("parentData"),
        parentDataProperty: new t.Name("parentDataProperty"),
        rootData: new t.Name("rootData"),
        dynamicAnchors: new t.Name("dynamicAnchors"),
        vErrors: new t.Name("vErrors"),
        errors: new t.Name("errors"),
        this: new t.Name("this"),
        self: new t.Name("self"),
        scope: new t.Name("scope"),
        json: new t.Name("json"),
        jsonPos: new t.Name("jsonPos"),
        jsonLen: new t.Name("jsonLen"),
        jsonPart: new t.Name("jsonPart")
      };
    e.default = r;
  }),
  fo = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.extendErrors =
        e.resetErrorsCount =
        e.reportExtraError =
        e.reportError =
        e.keyword$DataError =
        e.keywordError =
          void 0));
    let t = te(),
      r = ne(),
      s = Le();
    ((e.keywordError = { message: ({ keyword: p }) => t.str`must pass "${p}" keyword validation` }),
      (e.keyword$DataError = {
        message: ({ keyword: p, schemaType: h }) =>
          h ? t.str`"${p}" keyword must be ${h} ($data)` : t.str`"${p}" keyword is invalid ($data)`
      }));
    function a(p, h = e.keywordError, g, f) {
      let { it: z } = p,
        { gen: C, compositeRule: R, allErrors: S } = z,
        k = _(p, h, g);
      if (f !== null && f !== void 0 ? f : R || S) c(C, k);
      else d(z, t._`[${k}]`);
    }
    e.reportError = a;
    function n(p, h = e.keywordError, g) {
      let { it: f } = p,
        { gen: z, compositeRule: C, allErrors: R } = f;
      if ((c(z, _(p, h, g)), !(C || R))) d(f, s.default.vErrors);
    }
    e.reportExtraError = n;
    function i(p, h) {
      (p.assign(s.default.errors, h),
        p.if(t._`${s.default.vErrors} !== null`, () =>
          p.if(
            h,
            () => p.assign(t._`${s.default.vErrors}.length`, h),
            () => p.assign(s.default.vErrors, null)
          )
        ));
    }
    e.resetErrorsCount = i;
    function l({ gen: p, keyword: h, schemaValue: g, data: f, errsCount: z, it: C }) {
      if (z === void 0) throw Error("ajv implementation error");
      let R = p.name("err");
      p.forRange("i", z, s.default.errors, (S) => {
        if (
          (p.const(R, t._`${s.default.vErrors}[${S}]`),
          p.if(t._`${R}.instancePath === undefined`, () =>
            p.assign(t._`${R}.instancePath`, (0, t.strConcat)(s.default.instancePath, C.errorPath))
          ),
          p.assign(t._`${R}.schemaPath`, t.str`${C.errSchemaPath}/${h}`),
          C.opts.verbose)
        )
          (p.assign(t._`${R}.schema`, g), p.assign(t._`${R}.data`, f));
      });
    }
    e.extendErrors = l;
    function c(p, h) {
      let g = p.const("err", h);
      (p.if(
        t._`${s.default.vErrors} === null`,
        () => p.assign(s.default.vErrors, t._`[${g}]`),
        t._`${s.default.vErrors}.push(${g})`
      ),
        p.code(t._`${s.default.errors}++`));
    }
    function d(p, h) {
      let { gen: g, validateName: f, schemaEnv: z } = p;
      if (z.$async) g.throw(t._`new ${p.ValidationError}(${h})`);
      else (g.assign(t._`${f}.errors`, h), g.return(!1));
    }
    let m = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function _(p, h, g) {
      let { createErrors: f } = p.it;
      if (f === !1) return t._`{}`;
      return E(p, h, g);
    }
    function E(p, h, g = {}) {
      let { gen: f, it: z } = p,
        C = [P(z, g), y(p, g)];
      return (b(p, h, C), f.object(...C));
    }
    function P({ errorPath: p }, { instancePath: h }) {
      let g = h ? t.str`${p}${(0, r.getErrorPath)(h, r.Type.Str)}` : p;
      return [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, g)];
    }
    function y({ keyword: p, it: { errSchemaPath: h } }, { schemaPath: g, parentSchema: f }) {
      let z = f ? h : t.str`${h}/${p}`;
      if (g) z = t.str`${z}${(0, r.getErrorPath)(g, r.Type.Str)}`;
      return [m.schemaPath, z];
    }
    function b(p, { params: h, message: g }, f) {
      let { keyword: z, data: C, schemaValue: R, it: S } = p,
        { opts: k, propertyName: L, topSchemaRef: H, schemaPath: N } = S;
      if (
        (f.push([m.keyword, z], [m.params, typeof h == "function" ? h(p) : h || t._`{}`]),
        k.messages)
      )
        f.push([m.message, typeof g == "function" ? g(p) : g]);
      if (k.verbose) f.push([m.schema, R], [m.parentSchema, t._`${H}${N}`], [s.default.data, C]);
      if (L) f.push([m.propertyName, L]);
    }
  }),
  hu = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0));
    let t = fo(),
      r = te(),
      s = Le(),
      a = { message: "boolean schema is false" };
    function n(c) {
      let { gen: d, schema: m, validateName: _ } = c;
      if (m === !1) l(c, !1);
      else if (typeof m == "object" && m.$async === !0) d.return(s.default.data);
      else (d.assign(r._`${_}.errors`, null), d.return(!0));
    }
    e.topBoolOrEmptySchema = n;
    function i(c, d) {
      let { gen: m, schema: _ } = c;
      if (_ === !1) (m.var(d, !1), l(c));
      else m.var(d, !0);
    }
    e.boolOrEmptySchema = i;
    function l(c, d) {
      let { gen: m, data: _ } = c,
        E = {
          gen: m,
          keyword: "false schema",
          data: _,
          schema: !1,
          schemaCode: !1,
          schemaValue: !1,
          params: {},
          it: c
        };
      (0, t.reportError)(E, a, void 0, d);
    }
  }),
  Ii = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.getRules = e.isJSONType = void 0));
    let t = new Set(["string", "number", "integer", "boolean", "null", "object", "array"]);
    function r(a) {
      return typeof a == "string" && t.has(a);
    }
    e.isJSONType = r;
    function s() {
      let a = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] }
      };
      return {
        types: { ...a, integer: !0, boolean: !0, null: !0 },
        rules: [{ rules: [] }, a.number, a.string, a.array, a.object],
        post: { rules: [] },
        all: {},
        keywords: {}
      };
    }
    e.getRules = s;
  }),
  Oi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0));
    function t({ schema: a, self: n }, i) {
      let l = n.RULES.types[i];
      return l && l !== !0 && r(a, l);
    }
    e.schemaHasRulesForType = t;
    function r(a, n) {
      return n.rules.some((i) => s(a, i));
    }
    e.shouldUseGroup = r;
    function s(a, n) {
      var i;
      return (
        a[n.keyword] !== void 0 ||
        ((i = n.definition.implements) === null || i === void 0
          ? void 0
          : i.some((l) => a[l] !== void 0))
      );
    }
    e.shouldUseRule = s;
  }),
  po = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.reportTypeError =
        e.checkDataTypes =
        e.checkDataType =
        e.coerceAndCheckDataType =
        e.getJSONTypes =
        e.getSchemaTypes =
        e.DataType =
          void 0));
    let t = Ii(),
      r = Oi(),
      s = fo(),
      a = te(),
      n = ne();
    var i;
    (function (f) {
      ((f[(f.Correct = 0)] = "Correct"), (f[(f.Wrong = 1)] = "Wrong"));
    })(i || (e.DataType = i = {}));
    function l(f) {
      let z = c(f.type);
      if (z.includes("null")) {
        if (f.nullable === !1) throw Error("type: null contradicts nullable: false");
      } else {
        if (!z.length && f.nullable !== void 0)
          throw Error('"nullable" cannot be used without "type"');
        if (f.nullable === !0) z.push("null");
      }
      return z;
    }
    e.getSchemaTypes = l;
    function c(f) {
      let z = Array.isArray(f) ? f : f ? [f] : [];
      if (z.every(t.isJSONType)) return z;
      throw Error("type must be JSONType or JSONType[]: " + z.join(","));
    }
    e.getJSONTypes = c;
    function d(f, z) {
      let { gen: C, data: R, opts: S } = f,
        k = _(z, S.coerceTypes),
        L =
          z.length > 0 &&
          !(k.length === 0 && z.length === 1 && (0, r.schemaHasRulesForType)(f, z[0]));
      if (L) {
        let H = b(z, R, S.strictNumbers, i.Wrong);
        C.if(H, () => {
          if (k.length) E(f, z, k);
          else h(f);
        });
      }
      return L;
    }
    e.coerceAndCheckDataType = d;
    let m = new Set(["string", "number", "integer", "boolean", "null"]);
    function _(f, z) {
      return z ? f.filter((C) => m.has(C) || (z === "array" && C === "array")) : [];
    }
    function E(f, z, C) {
      let { gen: R, data: S, opts: k } = f,
        L = R.let("dataType", a._`typeof ${S}`),
        H = R.let("coerced", a._`undefined`);
      if (k.coerceTypes === "array")
        R.if(a._`${L} == 'object' && Array.isArray(${S}) && ${S}.length == 1`, () =>
          R.assign(S, a._`${S}[0]`)
            .assign(L, a._`typeof ${S}`)
            .if(b(z, S, k.strictNumbers), () => R.assign(H, S))
        );
      R.if(a._`${H} !== undefined`);
      for (let x of C) if (m.has(x) || (x === "array" && k.coerceTypes === "array")) N(x);
      (R.else(),
        h(f),
        R.endIf(),
        R.if(a._`${H} !== undefined`, () => {
          (R.assign(S, H), P(f, H));
        }));
      function N(x) {
        switch (x) {
          case "string":
            R.elseIf(a._`${L} == "number" || ${L} == "boolean"`)
              .assign(H, a._`"" + ${S}`)
              .elseIf(a._`${S} === null`)
              .assign(H, a._`""`);
            return;
          case "number":
            R.elseIf(
              a._`${L} == "boolean" || ${S} === null
              || (${L} == "string" && ${S} && ${S} == +${S})`
            ).assign(H, a._`+${S}`);
            return;
          case "integer":
            R.elseIf(
              a._`${L} === "boolean" || ${S} === null
              || (${L} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`
            ).assign(H, a._`+${S}`);
            return;
          case "boolean":
            R.elseIf(a._`${S} === "false" || ${S} === 0 || ${S} === null`)
              .assign(H, !1)
              .elseIf(a._`${S} === "true" || ${S} === 1`)
              .assign(H, !0);
            return;
          case "null":
            (R.elseIf(a._`${S} === "" || ${S} === 0 || ${S} === false`), R.assign(H, null));
            return;
          case "array":
            R.elseIf(
              a._`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${S} === null`
            ).assign(H, a._`[${S}]`);
        }
      }
    }
    function P({ gen: f, parentData: z, parentDataProperty: C }, R) {
      f.if(a._`${z} !== undefined`, () => f.assign(a._`${z}[${C}]`, R));
    }
    function y(f, z, C, R = i.Correct) {
      let S = R === i.Correct ? a.operators.EQ : a.operators.NEQ,
        k;
      switch (f) {
        case "null":
          return a._`${z} ${S} null`;
        case "array":
          k = a._`Array.isArray(${z})`;
          break;
        case "object":
          k = a._`${z} && typeof ${z} == "object" && !Array.isArray(${z})`;
          break;
        case "integer":
          k = L(a._`!(${z} % 1) && !isNaN(${z})`);
          break;
        case "number":
          k = L();
          break;
        default:
          return a._`typeof ${z} ${S} ${f}`;
      }
      return R === i.Correct ? k : (0, a.not)(k);
      function L(H = a.nil) {
        return (0, a.and)(a._`typeof ${z} == "number"`, H, C ? a._`isFinite(${z})` : a.nil);
      }
    }
    e.checkDataType = y;
    function b(f, z, C, R) {
      if (f.length === 1) return y(f[0], z, C, R);
      let S,
        k = (0, n.toHash)(f);
      if (k.array && k.object) {
        let L = a._`typeof ${z} != "object"`;
        ((S = k.null ? L : a._`!${z} || ${L}`), delete k.null, delete k.array, delete k.object);
      } else S = a.nil;
      if (k.number) delete k.integer;
      for (let L in k) S = (0, a.and)(S, y(L, z, C, R));
      return S;
    }
    e.checkDataTypes = b;
    let p = {
      message: ({ schema: f }) => `must be ${f}`,
      params: ({ schema: f, schemaValue: z }) =>
        typeof f == "string" ? a._`{type: ${f}}` : a._`{type: ${z}}`
    };
    function h(f) {
      let z = g(f);
      (0, s.reportError)(z, p);
    }
    e.reportTypeError = h;
    function g(f) {
      let { gen: z, data: C, schema: R } = f,
        S = (0, n.schemaRefOrVal)(f, R, "type");
      return {
        gen: z,
        keyword: "type",
        data: C,
        schema: R.type,
        schemaCode: S,
        schemaValue: S,
        parentSchema: R,
        params: {},
        it: f
      };
    }
  }),
  mu = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.assignDefaults = void 0));
    let t = te(),
      r = ne();
    function s(n, i) {
      let { properties: l, items: c } = n.schema;
      if (i === "object" && l) for (let d in l) a(n, d, l[d].default);
      else if (i === "array" && Array.isArray(c)) c.forEach((d, m) => a(n, m, d.default));
    }
    e.assignDefaults = s;
    function a(n, i, l) {
      let { gen: c, compositeRule: d, data: m, opts: _ } = n;
      if (l === void 0) return;
      let E = t._`${m}${(0, t.getProperty)(i)}`;
      if (d) {
        (0, r.checkStrictMode)(n, `default is ignored for: ${E}`);
        return;
      }
      let P = t._`${E} === undefined`;
      if (_.useDefaults === "empty") P = t._`${P} || ${E} === null || ${E} === ""`;
      c.if(P, t._`${E} = ${(0, t.stringify)(l)}`);
    }
  }),
  Ue = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateUnion =
        e.validateArray =
        e.usePattern =
        e.callValidateCode =
        e.schemaProperties =
        e.allSchemaProperties =
        e.noPropertyInData =
        e.propertyInData =
        e.isOwnProperty =
        e.hasPropFunc =
        e.reportMissingProp =
        e.checkMissingProp =
        e.checkReportMissingProp =
          void 0));
    let t = te(),
      r = ne(),
      s = Le(),
      a = ne();
    function n(f, z) {
      let { gen: C, data: R, it: S } = f;
      C.if(_(C, R, z, S.opts.ownProperties), () => {
        (f.setParams({ missingProperty: t._`${z}` }, !0), f.error());
      });
    }
    e.checkReportMissingProp = n;
    function i({ gen: f, data: z, it: { opts: C } }, R, S) {
      return (0, t.or)(...R.map((k) => (0, t.and)(_(f, z, k, C.ownProperties), t._`${S} = ${k}`)));
    }
    e.checkMissingProp = i;
    function l(f, z) {
      (f.setParams({ missingProperty: z }, !0), f.error());
    }
    e.reportMissingProp = l;
    function c(f) {
      return f.scopeValue("func", {
        ref: Object.prototype.hasOwnProperty,
        code: t._`Object.prototype.hasOwnProperty`
      });
    }
    e.hasPropFunc = c;
    function d(f, z, C) {
      return t._`${c(f)}.call(${z}, ${C})`;
    }
    e.isOwnProperty = d;
    function m(f, z, C, R) {
      let S = t._`${z}${(0, t.getProperty)(C)} !== undefined`;
      return R ? t._`${S} && ${d(f, z, C)}` : S;
    }
    e.propertyInData = m;
    function _(f, z, C, R) {
      let S = t._`${z}${(0, t.getProperty)(C)} === undefined`;
      return R ? (0, t.or)(S, (0, t.not)(d(f, z, C))) : S;
    }
    e.noPropertyInData = _;
    function E(f) {
      return f ? Object.keys(f).filter((z) => z !== "__proto__") : [];
    }
    e.allSchemaProperties = E;
    function P(f, z) {
      return E(z).filter((C) => !(0, r.alwaysValidSchema)(f, z[C]));
    }
    e.schemaProperties = P;
    function y(
      {
        schemaCode: f,
        data: z,
        it: { gen: C, topSchemaRef: R, schemaPath: S, errorPath: k },
        it: L
      },
      H,
      N,
      x
    ) {
      let W = x ? t._`${f}, ${z}, ${R}${S}` : z,
        G = [
          [s.default.instancePath, (0, t.strConcat)(s.default.instancePath, k)],
          [s.default.parentData, L.parentData],
          [s.default.parentDataProperty, L.parentDataProperty],
          [s.default.rootData, s.default.rootData]
        ];
      if (L.opts.dynamicRef) G.push([s.default.dynamicAnchors, s.default.dynamicAnchors]);
      let se = t._`${W}, ${C.object(...G)}`;
      return N !== t.nil ? t._`${H}.call(${N}, ${se})` : t._`${H}(${se})`;
    }
    e.callValidateCode = y;
    let b = t._`new RegExp`;
    function p({ gen: f, it: { opts: z } }, C) {
      let R = z.unicodeRegExp ? "u" : "",
        { regExp: S } = z.code,
        k = S(C, R);
      return f.scopeValue("pattern", {
        key: k.toString(),
        ref: k,
        code: t._`${S.code === "new RegExp" ? b : (0, a.useFunc)(f, S)}(${C}, ${R})`
      });
    }
    e.usePattern = p;
    function h(f) {
      let { gen: z, data: C, keyword: R, it: S } = f,
        k = z.name("valid");
      if (S.allErrors) {
        let H = z.let("valid", !0);
        return (L(() => z.assign(H, !1)), H);
      }
      return (z.var(k, !0), L(() => z.break()), k);
      function L(H) {
        let N = z.const("len", t._`${C}.length`);
        z.forRange("i", 0, N, (x) => {
          (f.subschema({ keyword: R, dataProp: x, dataPropType: r.Type.Num }, k),
            z.if((0, t.not)(k), H));
        });
      }
    }
    e.validateArray = h;
    function g(f) {
      let { gen: z, schema: C, keyword: R, it: S } = f;
      if (!Array.isArray(C)) throw Error("ajv implementation error");
      if (C.some((H) => (0, r.alwaysValidSchema)(S, H)) && !S.opts.unevaluated) return;
      let k = z.let("valid", !1),
        L = z.name("_valid");
      (z.block(() =>
        C.forEach((H, N) => {
          let x = f.subschema({ keyword: R, schemaProp: N, compositeRule: !0 }, L);
          if ((z.assign(k, t._`${k} || ${L}`), !f.mergeValidEvaluated(x, L))) z.if((0, t.not)(k));
        })
      ),
        f.result(
          k,
          () => f.reset(),
          () => f.error(!0)
        ));
    }
    e.validateUnion = g;
  }),
  pu = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateKeywordUsage =
        e.validSchemaType =
        e.funcKeywordCode =
        e.macroKeywordCode =
          void 0));
    let t = te(),
      r = Le(),
      s = Ue(),
      a = fo();
    function n(P, y) {
      let { gen: b, keyword: p, schema: h, parentSchema: g, it: f } = P,
        z = y.macro.call(f.self, h, g, f),
        C = m(b, p, z);
      if (f.opts.validateSchema !== !1) f.self.validateSchema(z, !0);
      let R = b.name("valid");
      (P.subschema(
        {
          schema: z,
          schemaPath: t.nil,
          errSchemaPath: `${f.errSchemaPath}/${p}`,
          topSchemaRef: C,
          compositeRule: !0
        },
        R
      ),
        P.pass(R, () => P.error(!0)));
    }
    e.macroKeywordCode = n;
    function i(P, y) {
      var b;
      let { gen: p, keyword: h, schema: g, parentSchema: f, $data: z, it: C } = P;
      d(C, y);
      let R = m(p, h, !z && y.compile ? y.compile.call(C.self, g, f, C) : y.validate),
        S = p.let("valid");
      (P.block$data(S, k), P.ok((b = y.valid) !== null && b !== void 0 ? b : S));
      function k() {
        if (y.errors === !1) {
          if ((N(), y.modifying)) l(P);
          x(() => P.error());
        } else {
          let W = y.async ? L() : H();
          if (y.modifying) l(P);
          x(() => c(P, W));
        }
      }
      function L() {
        let W = p.let("ruleErrs", null);
        return (
          p.try(
            () => N(t._`await `),
            (G) =>
              p.assign(S, !1).if(
                t._`${G} instanceof ${C.ValidationError}`,
                () => p.assign(W, t._`${G}.errors`),
                () => p.throw(G)
              )
          ),
          W
        );
      }
      function H() {
        let W = t._`${R}.errors`;
        return (p.assign(W, null), N(t.nil), W);
      }
      function N(W = y.async ? t._`await ` : t.nil) {
        let G = C.opts.passContext ? r.default.this : r.default.self,
          se = !(("compile" in y && !z) || y.schema === !1);
        p.assign(S, t._`${W}${(0, s.callValidateCode)(P, R, G, se)}`, y.modifying);
      }
      function x(W) {
        var G;
        p.if((0, t.not)((G = y.valid) !== null && G !== void 0 ? G : S), W);
      }
    }
    e.funcKeywordCode = i;
    function l(P) {
      let { gen: y, data: b, it: p } = P;
      y.if(p.parentData, () => y.assign(b, t._`${p.parentData}[${p.parentDataProperty}]`));
    }
    function c(P, y) {
      let { gen: b } = P;
      b.if(
        t._`Array.isArray(${y})`,
        () => {
          (b
            .assign(
              r.default.vErrors,
              t._`${r.default.vErrors} === null ? ${y} : ${r.default.vErrors}.concat(${y})`
            )
            .assign(r.default.errors, t._`${r.default.vErrors}.length`),
            (0, a.extendErrors)(P));
        },
        () => P.error()
      );
    }
    function d({ schemaEnv: P }, y) {
      if (y.async && !P.$async) throw Error("async keyword in sync schema");
    }
    function m(P, y, b) {
      if (b === void 0) throw Error(`keyword "${y}" failed to compile`);
      return P.scopeValue(
        "keyword",
        typeof b == "function" ? { ref: b } : { ref: b, code: (0, t.stringify)(b) }
      );
    }
    function _(P, y, b = !1) {
      return (
        !y.length ||
        y.some((p) =>
          p === "array"
            ? Array.isArray(P)
            : p === "object"
              ? P && typeof P == "object" && !Array.isArray(P)
              : typeof P == p || (b && typeof P > "u")
        )
      );
    }
    e.validSchemaType = _;
    function E({ schema: P, opts: y, self: b, errSchemaPath: p }, h, g) {
      if (Array.isArray(h.keyword) ? !h.keyword.includes(g) : h.keyword !== g)
        throw Error("ajv implementation error");
      let f = h.dependencies;
      if (
        f === null || f === void 0
          ? void 0
          : f.some((z) => !Object.prototype.hasOwnProperty.call(P, z))
      )
        throw Error(`parent schema must have dependencies of ${g}: ${f.join(",")}`);
      if (h.validateSchema) {
        if (!h.validateSchema(P[g])) {
          let z =
            `keyword "${g}" value is invalid at path "${p}": ` +
            b.errorsText(h.validateSchema.errors);
          if (y.validateSchema === "log") b.logger.error(z);
          else throw Error(z);
        }
      }
    }
    e.validateKeywordUsage = E;
  }),
  fu = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0));
    let t = te(),
      r = ne();
    function s(
      i,
      { keyword: l, schemaProp: c, schema: d, schemaPath: m, errSchemaPath: _, topSchemaRef: E }
    ) {
      if (l !== void 0 && d !== void 0)
        throw Error('both "keyword" and "schema" passed, only one allowed');
      if (l !== void 0) {
        let P = i.schema[l];
        return c === void 0
          ? {
              schema: P,
              schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}`,
              errSchemaPath: `${i.errSchemaPath}/${l}`
            }
          : {
              schema: P[c],
              schemaPath: t._`${i.schemaPath}${(0, t.getProperty)(l)}${(0, t.getProperty)(c)}`,
              errSchemaPath: `${i.errSchemaPath}/${l}/${(0, r.escapeFragment)(c)}`
            };
      }
      if (d !== void 0) {
        if (m === void 0 || _ === void 0 || E === void 0)
          throw Error(
            '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"'
          );
        return { schema: d, schemaPath: m, topSchemaRef: E, errSchemaPath: _ };
      }
      throw Error('either "keyword" or "schema" must be passed');
    }
    e.getSubschema = s;
    function a(i, l, { dataProp: c, dataPropType: d, data: m, dataTypes: _, propertyName: E }) {
      if (m !== void 0 && c !== void 0)
        throw Error('both "data" and "dataProp" passed, only one allowed');
      let { gen: P } = l;
      if (c !== void 0) {
        let { errorPath: b, dataPathArr: p, opts: h } = l;
        (y(P.let("data", t._`${l.data}${(0, t.getProperty)(c)}`, !0)),
          (i.errorPath = t.str`${b}${(0, r.getErrorPath)(c, d, h.jsPropertySyntax)}`),
          (i.parentDataProperty = t._`${c}`),
          (i.dataPathArr = [...p, i.parentDataProperty]));
      }
      if (m !== void 0) {
        if ((y(m instanceof t.Name ? m : P.let("data", m, !0)), E !== void 0)) i.propertyName = E;
      }
      if (_) i.dataTypes = _;
      function y(b) {
        ((i.data = b),
          (i.dataLevel = l.dataLevel + 1),
          (i.dataTypes = []),
          (l.definedProperties = new Set()),
          (i.parentData = l.data),
          (i.dataNames = [...l.dataNames, b]));
      }
    }
    e.extendSubschemaData = a;
    function n(
      i,
      { jtdDiscriminator: l, jtdMetadata: c, compositeRule: d, createErrors: m, allErrors: _ }
    ) {
      if (d !== void 0) i.compositeRule = d;
      if (m !== void 0) i.createErrors = m;
      if (_ !== void 0) i.allErrors = _;
      ((i.jtdDiscriminator = l), (i.jtdMetadata = c));
    }
    e.extendSubschemaMode = n;
  }),
  Ni = K((e, t) => {
    t.exports = function r(s, a) {
      if (s === a) return !0;
      if (s && a && typeof s == "object" && typeof a == "object") {
        if (s.constructor !== a.constructor) return !1;
        var n, i, l;
        if (Array.isArray(s)) {
          if (((n = s.length), n != a.length)) return !1;
          for (i = n; i-- !== 0;) if (!r(s[i], a[i])) return !1;
          return !0;
        }
        if (s.constructor === RegExp) return s.source === a.source && s.flags === a.flags;
        if (s.valueOf !== Object.prototype.valueOf) return s.valueOf() === a.valueOf();
        if (s.toString !== Object.prototype.toString) return s.toString() === a.toString();
        if (((l = Object.keys(s)), (n = l.length), n !== Object.keys(a).length)) return !1;
        for (i = n; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(a, l[i])) return !1;
        for (i = n; i-- !== 0;) {
          var c = l[i];
          if (!r(s[c], a[c])) return !1;
        }
        return !0;
      }
      return s !== s && a !== a;
    };
  }),
  Su = K((e, t) => {
    var r = (t.exports = function (n, i, l) {
      if (typeof i == "function") ((l = i), (i = {}));
      l = i.cb || l;
      var c = typeof l == "function" ? l : l.pre || function () {},
        d = l.post || function () {};
      s(i, c, d, n, "", n);
    });
    ((r.keywords = {
      additionalItems: !0,
      items: !0,
      contains: !0,
      additionalProperties: !0,
      propertyNames: !0,
      not: !0,
      if: !0,
      then: !0,
      else: !0
    }),
      (r.arrayKeywords = { items: !0, allOf: !0, anyOf: !0, oneOf: !0 }),
      (r.propsKeywords = {
        $defs: !0,
        definitions: !0,
        properties: !0,
        patternProperties: !0,
        dependencies: !0
      }),
      (r.skipKeywords = {
        default: !0,
        enum: !0,
        const: !0,
        required: !0,
        maximum: !0,
        minimum: !0,
        exclusiveMaximum: !0,
        exclusiveMinimum: !0,
        multipleOf: !0,
        maxLength: !0,
        minLength: !0,
        pattern: !0,
        format: !0,
        maxItems: !0,
        minItems: !0,
        uniqueItems: !0,
        maxProperties: !0,
        minProperties: !0
      }));
    function s(n, i, l, c, d, m, _, E, P, y) {
      if (c && typeof c == "object" && !Array.isArray(c)) {
        i(c, d, m, _, E, P, y);
        for (var b in c) {
          var p = c[b];
          if (Array.isArray(p)) {
            if (b in r.arrayKeywords)
              for (var h = 0; h < p.length; h++)
                s(n, i, l, p[h], d + "/" + b + "/" + h, m, d, b, c, h);
          } else if (b in r.propsKeywords) {
            if (p && typeof p == "object")
              for (var g in p) s(n, i, l, p[g], d + "/" + b + "/" + a(g), m, d, b, c, g);
          } else if (b in r.keywords || (n.allKeys && !(b in r.skipKeywords)))
            s(n, i, l, p, d + "/" + b, m, d, b, c);
        }
        l(c, d, m, _, E, P, y);
      }
    }
    function a(n) {
      return n.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  }),
  So = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getSchemaRefs =
        e.resolveUrl =
        e.normalizeId =
        e._getFullPath =
        e.getFullPath =
        e.inlineRef =
          void 0));
    let t = ne(),
      r = Ni(),
      s = Su(),
      a = new Set([
        "type",
        "format",
        "pattern",
        "maxLength",
        "minLength",
        "maxProperties",
        "minProperties",
        "maxItems",
        "minItems",
        "maximum",
        "minimum",
        "uniqueItems",
        "multipleOf",
        "required",
        "enum",
        "const"
      ]);
    function n(p, h = !0) {
      if (typeof p == "boolean") return !0;
      if (h === !0) return !l(p);
      if (!h) return !1;
      return c(p) <= h;
    }
    e.inlineRef = n;
    let i = new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function l(p) {
      for (let h in p) {
        if (i.has(h)) return !0;
        let g = p[h];
        if (Array.isArray(g) && g.some(l)) return !0;
        if (typeof g == "object" && l(g)) return !0;
      }
      return !1;
    }
    function c(p) {
      let h = 0;
      for (let g in p) {
        if (g === "$ref") return 1 / 0;
        if ((h++, a.has(g))) continue;
        if (typeof p[g] == "object") (0, t.eachItem)(p[g], (f) => (h += c(f)));
        if (h === 1 / 0) return 1 / 0;
      }
      return h;
    }
    function d(p, h = "", g) {
      if (g !== !1) h = E(h);
      return m(p, p.parse(h));
    }
    e.getFullPath = d;
    function m(p, h) {
      return p.serialize(h).split("#")[0] + "#";
    }
    e._getFullPath = m;
    let _ = /#\/?$/;
    function E(p) {
      return p ? p.replace(_, "") : "";
    }
    e.normalizeId = E;
    function P(p, h, g) {
      return ((g = E(g)), p.resolve(h, g));
    }
    e.resolveUrl = P;
    let y = /^[a-z_][-a-z0-9._]*$/i;
    function b(p, h) {
      if (typeof p == "boolean") return {};
      let { schemaId: g, uriResolver: f } = this.opts,
        z = E(p[g] || h),
        C = { "": z },
        R = d(f, z, !1),
        S = {},
        k = new Set();
      return (
        s(p, { allKeys: !0 }, (N, x, W, G) => {
          if (G === void 0) return;
          let se = R + x,
            le = C[G];
          if (typeof N[g] == "string") le = ie.call(this, N[g]);
          (Se.call(this, N.$anchor), Se.call(this, N.$dynamicAnchor), (C[x] = le));
          function ie(ae) {
            let O = this.opts.uriResolver.resolve;
            if (((ae = E(le ? O(le, ae) : ae)), k.has(ae))) throw H(ae);
            k.add(ae);
            let U = this.refs[ae];
            if (typeof U == "string") U = this.refs[U];
            if (typeof U == "object") L(N, U.schema, ae);
            else if (ae !== E(se))
              if (ae[0] === "#") (L(N, S[ae], ae), (S[ae] = N));
              else this.refs[ae] = se;
            return ae;
          }
          function Se(ae) {
            if (typeof ae == "string") {
              if (!y.test(ae)) throw Error(`invalid anchor "${ae}"`);
              ie.call(this, `#${ae}`);
            }
          }
        }),
        S
      );
      function L(N, x, W) {
        if (x !== void 0 && !r(N, x)) throw H(W);
      }
      function H(N) {
        return Error(`reference "${N}" resolves to more than one schema`);
      }
    }
    e.getSchemaRefs = b;
  }),
  as = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getData = e.KeywordCxt = e.validateFunctionCode = void 0));
    let t = hu(),
      r = po(),
      s = Oi(),
      a = po(),
      n = mu(),
      i = pu(),
      l = fu(),
      c = te(),
      d = Le(),
      m = So(),
      _ = ne(),
      E = fo();
    function P(q) {
      if (R(q)) {
        if ((k(q), C(q))) {
          h(q);
          return;
        }
      }
      y(q, () => (0, t.topBoolOrEmptySchema)(q));
    }
    e.validateFunctionCode = P;
    function y({ gen: q, validateName: D, schema: V, schemaEnv: X, opts: Z }, ee) {
      if (Z.code.es5)
        q.func(D, c._`${d.default.data}, ${d.default.valCxt}`, X.$async, () => {
          (q.code(c._`"use strict"; ${f(V, Z)}`), p(q, Z), q.code(ee));
        });
      else q.func(D, c._`${d.default.data}, ${b(Z)}`, X.$async, () => q.code(f(V, Z)).code(ee));
    }
    function b(q) {
      return c._`{${d.default.instancePath}="", ${d.default.parentData}, ${d.default.parentDataProperty}, ${d.default.rootData}=${d.default.data}${q.dynamicRef ? c._`, ${d.default.dynamicAnchors}={}` : c.nil}}={}`;
    }
    function p(q, D) {
      q.if(
        d.default.valCxt,
        () => {
          if (
            (q.var(d.default.instancePath, c._`${d.default.valCxt}.${d.default.instancePath}`),
            q.var(d.default.parentData, c._`${d.default.valCxt}.${d.default.parentData}`),
            q.var(
              d.default.parentDataProperty,
              c._`${d.default.valCxt}.${d.default.parentDataProperty}`
            ),
            q.var(d.default.rootData, c._`${d.default.valCxt}.${d.default.rootData}`),
            D.dynamicRef)
          )
            q.var(d.default.dynamicAnchors, c._`${d.default.valCxt}.${d.default.dynamicAnchors}`);
        },
        () => {
          if (
            (q.var(d.default.instancePath, c._`""`),
            q.var(d.default.parentData, c._`undefined`),
            q.var(d.default.parentDataProperty, c._`undefined`),
            q.var(d.default.rootData, d.default.data),
            D.dynamicRef)
          )
            q.var(d.default.dynamicAnchors, c._`{}`);
        }
      );
    }
    function h(q) {
      let { schema: D, opts: V, gen: X } = q;
      y(q, () => {
        if (V.$comment && D.$comment) G(q);
        if ((N(q), X.let(d.default.vErrors, null), X.let(d.default.errors, 0), V.unevaluated)) g(q);
        (L(q), se(q));
      });
    }
    function g(q) {
      let { gen: D, validateName: V } = q;
      ((q.evaluated = D.const("evaluated", c._`${V}.evaluated`)),
        D.if(c._`${q.evaluated}.dynamicProps`, () =>
          D.assign(c._`${q.evaluated}.props`, c._`undefined`)
        ),
        D.if(c._`${q.evaluated}.dynamicItems`, () =>
          D.assign(c._`${q.evaluated}.items`, c._`undefined`)
        ));
    }
    function f(q, D) {
      let V = typeof q == "object" && q[D.schemaId];
      return V && (D.code.source || D.code.process) ? c._`/*# sourceURL=${V} */` : c.nil;
    }
    function z(q, D) {
      if (R(q)) {
        if ((k(q), C(q))) {
          S(q, D);
          return;
        }
      }
      (0, t.boolOrEmptySchema)(q, D);
    }
    function C({ schema: q, self: D }) {
      if (typeof q == "boolean") return !q;
      for (let V in q) if (D.RULES.all[V]) return !0;
      return !1;
    }
    function R(q) {
      return typeof q.schema != "boolean";
    }
    function S(q, D) {
      let { schema: V, gen: X, opts: Z } = q;
      if (Z.$comment && V.$comment) G(q);
      (x(q), W(q));
      let ee = X.const("_errs", d.default.errors);
      (L(q, ee), X.var(D, c._`${ee} === ${d.default.errors}`));
    }
    function k(q) {
      ((0, _.checkUnknownRules)(q), H(q));
    }
    function L(q, D) {
      if (q.opts.jtd) return ie(q, [], !1, D);
      let V = (0, r.getSchemaTypes)(q.schema);
      ie(q, V, !(0, r.coerceAndCheckDataType)(q, V), D);
    }
    function H(q) {
      let { schema: D, errSchemaPath: V, opts: X, self: Z } = q;
      if (D.$ref && X.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(D, Z.RULES))
        Z.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
    }
    function N(q) {
      let { schema: D, opts: V } = q;
      if (D.default !== void 0 && V.useDefaults && V.strictSchema)
        (0, _.checkStrictMode)(q, "default is ignored in the schema root");
    }
    function x(q) {
      let D = q.schema[q.opts.schemaId];
      if (D) q.baseId = (0, m.resolveUrl)(q.opts.uriResolver, q.baseId, D);
    }
    function W(q) {
      if (q.schema.$async && !q.schemaEnv.$async) throw Error("async schema in sync schema");
    }
    function G({ gen: q, schemaEnv: D, schema: V, errSchemaPath: X, opts: Z }) {
      let ee = V.$comment;
      if (Z.$comment === !0) q.code(c._`${d.default.self}.logger.log(${ee})`);
      else if (typeof Z.$comment == "function") {
        let pe = c.str`${X}/$comment`,
          _e = q.scopeValue("root", { ref: D.root });
        q.code(c._`${d.default.self}.opts.$comment(${ee}, ${pe}, ${_e}.schema)`);
      }
    }
    function se(q) {
      let { gen: D, schemaEnv: V, validateName: X, ValidationError: Z, opts: ee } = q;
      if (V.$async)
        D.if(
          c._`${d.default.errors} === 0`,
          () => D.return(d.default.data),
          () => D.throw(c._`new ${Z}(${d.default.vErrors})`)
        );
      else {
        if ((D.assign(c._`${X}.errors`, d.default.vErrors), ee.unevaluated)) le(q);
        D.return(c._`${d.default.errors} === 0`);
      }
    }
    function le({ gen: q, evaluated: D, props: V, items: X }) {
      if (V instanceof c.Name) q.assign(c._`${D}.props`, V);
      if (X instanceof c.Name) q.assign(c._`${D}.items`, X);
    }
    function ie(q, D, V, X) {
      let { gen: Z, schema: ee, data: pe, allErrors: _e, opts: Re, self: ge } = q,
        { RULES: ue } = ge;
      if (ee.$ref && (Re.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(ee, ue))) {
        Z.block(() => re(q, "$ref", ue.all.$ref.definition));
        return;
      }
      if (!Re.jtd) ae(q, D);
      Z.block(() => {
        for (let ye of ue.rules) Ne(ye);
        Ne(ue.post);
      });
      function Ne(ye) {
        if (!(0, s.shouldUseGroup)(ee, ye)) return;
        if (ye.type) {
          if (
            (Z.if((0, a.checkDataType)(ye.type, pe, Re.strictNumbers)),
            Se(q, ye),
            D.length === 1 && D[0] === ye.type && V)
          )
            (Z.else(), (0, a.reportTypeError)(q));
          Z.endIf();
        } else Se(q, ye);
        if (!_e) Z.if(c._`${d.default.errors} === ${X || 0}`);
      }
    }
    function Se(q, D) {
      let {
        gen: V,
        schema: X,
        opts: { useDefaults: Z }
      } = q;
      if (Z) (0, n.assignDefaults)(q, D.type);
      V.block(() => {
        for (let ee of D.rules)
          if ((0, s.shouldUseRule)(X, ee)) re(q, ee.keyword, ee.definition, D.type);
      });
    }
    function ae(q, D) {
      if (q.schemaEnv.meta || !q.opts.strictTypes) return;
      if ((O(q, D), !q.opts.allowUnionTypes)) U(q, D);
      F(q, q.dataTypes);
    }
    function O(q, D) {
      if (!D.length) return;
      if (!q.dataTypes.length) {
        q.dataTypes = D;
        return;
      }
      (D.forEach((V) => {
        if (!I(q.dataTypes, V))
          J(q, `type "${V}" not allowed by context "${q.dataTypes.join(",")}"`);
      }),
        j(q, D));
    }
    function U(q, D) {
      if (D.length > 1 && !(D.length === 2 && D.includes("null")))
        J(q, "use allowUnionTypes to allow union type keyword");
    }
    function F(q, D) {
      let V = q.self.RULES.all;
      for (let X in V) {
        let Z = V[X];
        if (typeof Z == "object" && (0, s.shouldUseRule)(q.schema, Z)) {
          let { type: ee } = Z.definition;
          if (ee.length && !ee.some((pe) => w(D, pe)))
            J(q, `missing type "${ee.join(",")}" for keyword "${X}"`);
        }
      }
    }
    function w(q, D) {
      return q.includes(D) || (D === "number" && q.includes("integer"));
    }
    function I(q, D) {
      return q.includes(D) || (D === "integer" && q.includes("number"));
    }
    function j(q, D) {
      let V = [];
      for (let X of q.dataTypes)
        if (I(D, X)) V.push(X);
        else if (D.includes("integer") && X === "number") V.push("integer");
      q.dataTypes = V;
    }
    function J(q, D) {
      let V = q.schemaEnv.baseId + q.errSchemaPath;
      ((D += ` at "${V}" (strictTypes)`), (0, _.checkStrictMode)(q, D, q.opts.strictTypes));
    }
    var Y = class {
      constructor(q, D, V) {
        if (
          ((0, i.validateKeywordUsage)(q, D, V),
          (this.gen = q.gen),
          (this.allErrors = q.allErrors),
          (this.keyword = V),
          (this.data = q.data),
          (this.schema = q.schema[V]),
          (this.$data = D.$data && q.opts.$data && this.schema && this.schema.$data),
          (this.schemaValue = (0, _.schemaRefOrVal)(q, this.schema, V, this.$data)),
          (this.schemaType = D.schemaType),
          (this.parentSchema = q.schema),
          (this.params = {}),
          (this.it = q),
          (this.def = D),
          this.$data)
        )
          this.schemaCode = q.gen.const("vSchema", Te(this.$data, q));
        else if (
          ((this.schemaCode = this.schemaValue),
          !(0, i.validSchemaType)(this.schema, D.schemaType, D.allowUndefined))
        )
          throw Error(`${V} value must be ${JSON.stringify(D.schemaType)}`);
        if ("code" in D ? D.trackErrors : D.errors !== !1)
          this.errsCount = q.gen.const("_errs", d.default.errors);
      }
      result(q, D, V) {
        this.failResult((0, c.not)(q), D, V);
      }
      failResult(q, D, V) {
        if ((this.gen.if(q), V)) V();
        else this.error();
        if (D) {
          if ((this.gen.else(), D(), this.allErrors)) this.gen.endIf();
        } else if (this.allErrors) this.gen.endIf();
        else this.gen.else();
      }
      pass(q, D) {
        this.failResult((0, c.not)(q), void 0, D);
      }
      fail(q) {
        if (q === void 0) {
          if ((this.error(), !this.allErrors)) this.gen.if(!1);
          return;
        }
        if ((this.gen.if(q), this.error(), this.allErrors)) this.gen.endIf();
        else this.gen.else();
      }
      fail$data(q) {
        if (!this.$data) return this.fail(q);
        let { schemaCode: D } = this;
        this.fail(c._`${D} !== undefined && (${(0, c.or)(this.invalid$data(), q)})`);
      }
      error(q, D, V) {
        if (D) {
          (this.setParams(D), this._error(q, V), this.setParams({}));
          return;
        }
        this._error(q, V);
      }
      _error(q, D) {
        (q ? E.reportExtraError : E.reportError)(this, this.def.error, D);
      }
      $dataError() {
        (0, E.reportError)(this, this.def.$dataError || E.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw Error('add "trackErrors" to keyword definition');
        (0, E.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(q) {
        if (!this.allErrors) this.gen.if(q);
      }
      setParams(q, D) {
        if (D) Object.assign(this.params, q);
        else this.params = q;
      }
      block$data(q, D, V = c.nil) {
        this.gen.block(() => {
          (this.check$data(q, V), D());
        });
      }
      check$data(q = c.nil, D = c.nil) {
        if (!this.$data) return;
        let { gen: V, schemaCode: X, schemaType: Z, def: ee } = this;
        if ((V.if((0, c.or)(c._`${X} === undefined`, D)), q !== c.nil)) V.assign(q, !0);
        if (Z.length || ee.validateSchema) {
          if ((V.elseIf(this.invalid$data()), this.$dataError(), q !== c.nil)) V.assign(q, !1);
        }
        V.else();
      }
      invalid$data() {
        let { gen: q, schemaCode: D, schemaType: V, def: X, it: Z } = this;
        return (0, c.or)(ee(), pe());
        function ee() {
          if (V.length) {
            if (!(D instanceof c.Name)) throw Error("ajv implementation error");
            let _e = Array.isArray(V) ? V : [V];
            return c._`${(0, a.checkDataTypes)(_e, D, Z.opts.strictNumbers, a.DataType.Wrong)}`;
          }
          return c.nil;
        }
        function pe() {
          if (X.validateSchema) {
            let _e = q.scopeValue("validate$data", { ref: X.validateSchema });
            return c._`!${_e}(${D})`;
          }
          return c.nil;
        }
      }
      subschema(q, D) {
        let V = (0, l.getSubschema)(this.it, q);
        ((0, l.extendSubschemaData)(V, this.it, q), (0, l.extendSubschemaMode)(V, q));
        let X = { ...this.it, ...V, items: void 0, props: void 0 };
        return (z(X, D), X);
      }
      mergeEvaluated(q, D) {
        let { it: V, gen: X } = this;
        if (!V.opts.unevaluated) return;
        if (V.props !== !0 && q.props !== void 0)
          V.props = _.mergeEvaluated.props(X, q.props, V.props, D);
        if (V.items !== !0 && q.items !== void 0)
          V.items = _.mergeEvaluated.items(X, q.items, V.items, D);
      }
      mergeValidEvaluated(q, D) {
        let { it: V, gen: X } = this;
        if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
          return (X.if(D, () => this.mergeEvaluated(q, c.Name)), !0);
      }
    };
    e.KeywordCxt = Y;
    function re(q, D, V, X) {
      let Z = new Y(q, V, D);
      if ("code" in V) V.code(Z, X);
      else if (Z.$data && V.validate) (0, i.funcKeywordCode)(Z, V);
      else if ("macro" in V) (0, i.macroKeywordCode)(Z, V);
      else if (V.compile || V.validate) (0, i.funcKeywordCode)(Z, V);
    }
    let Q = /^\/(?:[^~]|~0|~1)*$/,
      ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function Te(q, { dataLevel: D, dataNames: V, dataPathArr: X }) {
      let Z, ee;
      if (q === "") return d.default.rootData;
      if (q[0] === "/") {
        if (!Q.test(q)) throw Error(`Invalid JSON-pointer: ${q}`);
        ((Z = q), (ee = d.default.rootData));
      } else {
        let ge = ce.exec(q);
        if (!ge) throw Error(`Invalid JSON-pointer: ${q}`);
        let ue = +ge[1];
        if (((Z = ge[2]), Z === "#")) {
          if (ue >= D) throw Error(Re("property/index", ue));
          return X[D - ue];
        }
        if (ue > D) throw Error(Re("data", ue));
        if (((ee = V[D - ue]), !Z)) return ee;
      }
      let pe = ee,
        _e = Z.split("/");
      for (let ge of _e)
        if (ge)
          ((ee = c._`${ee}${(0, c.getProperty)((0, _.unescapeJsonPointer)(ge))}`),
            (pe = c._`${pe} && ${ee}`));
      return pe;
      function Re(ge, ue) {
        return `Cannot access ${ge} ${ue} levels up, current level is ${D}`;
      }
    }
    e.getData = Te;
  }),
  go = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    var t = class extends Error {
      constructor(r) {
        super("validation failed");
        ((this.errors = r), (this.ajv = this.validation = !0));
      }
    };
    e.default = t;
  }),
  os = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = So();
    var r = class extends Error {
      constructor(s, a, n, i) {
        super(i || `can't resolve reference ${n} from id ${a}`);
        ((this.missingRef = (0, t.resolveUrl)(s, a, n)),
          (this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(s, this.missingRef))));
      }
    };
    e.default = r;
  }),
  _o = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.resolveSchema =
        e.getCompilingSchema =
        e.resolveRef =
        e.compileSchema =
        e.SchemaEnv =
          void 0));
    let t = te(),
      r = go(),
      s = Le(),
      a = So(),
      n = ne(),
      i = as();
    var l = class {
      constructor(h) {
        var g;
        ((this.refs = {}), (this.dynamicAnchors = {}));
        let f;
        if (typeof h.schema == "object") f = h.schema;
        ((this.schema = h.schema),
          (this.schemaId = h.schemaId),
          (this.root = h.root || this),
          (this.baseId =
            (g = h.baseId) !== null && g !== void 0
              ? g
              : (0, a.normalizeId)(f === null || f === void 0 ? void 0 : f[h.schemaId || "$id"])),
          (this.schemaPath = h.schemaPath),
          (this.localRefs = h.localRefs),
          (this.meta = h.meta),
          (this.$async = f === null || f === void 0 ? void 0 : f.$async),
          (this.refs = {}));
      }
    };
    e.SchemaEnv = l;
    function c(h) {
      let g = _.call(this, h);
      if (g) return g;
      let f = (0, a.getFullPath)(this.opts.uriResolver, h.root.baseId),
        { es5: z, lines: C } = this.opts.code,
        { ownProperties: R } = this.opts,
        S = new t.CodeGen(this.scope, { es5: z, lines: C, ownProperties: R }),
        k;
      if (h.$async)
        k = S.scopeValue("Error", {
          ref: r.default,
          code: t._`require("ajv/dist/runtime/validation_error").default`
        });
      let L = S.scopeName("validate");
      h.validateName = L;
      let H = {
          gen: S,
          allErrors: this.opts.allErrors,
          data: s.default.data,
          parentData: s.default.parentData,
          parentDataProperty: s.default.parentDataProperty,
          dataNames: [s.default.data],
          dataPathArr: [t.nil],
          dataLevel: 0,
          dataTypes: [],
          definedProperties: new Set(),
          topSchemaRef: S.scopeValue(
            "schema",
            this.opts.code.source === !0
              ? { ref: h.schema, code: (0, t.stringify)(h.schema) }
              : { ref: h.schema }
          ),
          validateName: L,
          ValidationError: k,
          schema: h.schema,
          schemaEnv: h,
          rootId: f,
          baseId: h.baseId || f,
          schemaPath: t.nil,
          errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
          errorPath: t._`""`,
          opts: this.opts,
          self: this
        },
        N;
      try {
        (this._compilations.add(h),
          (0, i.validateFunctionCode)(H),
          S.optimize(this.opts.code.optimize));
        let x = S.toString();
        if (((N = `${S.scopeRefs(s.default.scope)}return ${x}`), this.opts.code.process))
          N = this.opts.code.process(N, h);
        let W = Function(`${s.default.self}`, `${s.default.scope}`, N)(this, this.scope.get());
        if (
          (this.scope.value(L, { ref: W }),
          (W.errors = null),
          (W.schema = h.schema),
          (W.schemaEnv = h),
          h.$async)
        )
          W.$async = !0;
        if (this.opts.code.source === !0)
          W.source = { validateName: L, validateCode: x, scopeValues: S._values };
        if (this.opts.unevaluated) {
          let { props: G, items: se } = H;
          if (
            ((W.evaluated = {
              props: G instanceof t.Name ? void 0 : G,
              items: se instanceof t.Name ? void 0 : se,
              dynamicProps: G instanceof t.Name,
              dynamicItems: se instanceof t.Name
            }),
            W.source)
          )
            W.source.evaluated = (0, t.stringify)(W.evaluated);
        }
        return ((h.validate = W), h);
      } catch (x) {
        if ((delete h.validate, delete h.validateName, N))
          this.logger.error("Error compiling schema, function code:", N);
        throw x;
      } finally {
        this._compilations.delete(h);
      }
    }
    e.compileSchema = c;
    function d(h, g, f) {
      var z;
      f = (0, a.resolveUrl)(this.opts.uriResolver, g, f);
      let C = h.refs[f];
      if (C) return C;
      let R = P.call(this, h, f);
      if (R === void 0) {
        let S = (z = h.localRefs) === null || z === void 0 ? void 0 : z[f],
          { schemaId: k } = this.opts;
        if (S) R = new l({ schema: S, schemaId: k, root: h, baseId: g });
      }
      if (R === void 0) return;
      return (h.refs[f] = m.call(this, R));
    }
    e.resolveRef = d;
    function m(h) {
      if ((0, a.inlineRef)(h.schema, this.opts.inlineRefs)) return h.schema;
      return h.validate ? h : c.call(this, h);
    }
    function _(h) {
      for (let g of this._compilations) if (E(g, h)) return g;
    }
    e.getCompilingSchema = _;
    function E(h, g) {
      return h.schema === g.schema && h.root === g.root && h.baseId === g.baseId;
    }
    function P(h, g) {
      let f;
      while (typeof (f = this.refs[g]) == "string") g = f;
      return f || this.schemas[g] || y.call(this, h, g);
    }
    function y(h, g) {
      let f = this.opts.uriResolver.parse(g),
        z = (0, a._getFullPath)(this.opts.uriResolver, f),
        C = (0, a.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
      if (Object.keys(h.schema).length > 0 && z === C) return p.call(this, f, h);
      let R = (0, a.normalizeId)(z),
        S = this.refs[R] || this.schemas[R];
      if (typeof S == "string") {
        let k = y.call(this, h, S);
        if (typeof (k === null || k === void 0 ? void 0 : k.schema) !== "object") return;
        return p.call(this, f, k);
      }
      if (typeof (S === null || S === void 0 ? void 0 : S.schema) !== "object") return;
      if (!S.validate) c.call(this, S);
      if (R === (0, a.normalizeId)(g)) {
        let { schema: k } = S,
          { schemaId: L } = this.opts,
          H = k[L];
        if (H) C = (0, a.resolveUrl)(this.opts.uriResolver, C, H);
        return new l({ schema: k, schemaId: L, root: h, baseId: C });
      }
      return p.call(this, f, S);
    }
    e.resolveSchema = y;
    let b = new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function p(h, { baseId: g, schema: f, root: z }) {
      var C;
      if (((C = h.fragment) === null || C === void 0 ? void 0 : C[0]) !== "/") return;
      for (let k of h.fragment.slice(1).split("/")) {
        if (typeof f === "boolean") return;
        let L = f[(0, n.unescapeFragment)(k)];
        if (L === void 0) return;
        f = L;
        let H = typeof f === "object" && f[this.opts.schemaId];
        if (!b.has(k) && H) g = (0, a.resolveUrl)(this.opts.uriResolver, g, H);
      }
      let R;
      if (typeof f != "boolean" && f.$ref && !(0, n.schemaHasRulesButRef)(f, this.RULES)) {
        let k = (0, a.resolveUrl)(this.opts.uriResolver, g, f.$ref);
        R = y.call(this, z, k);
      }
      let { schemaId: S } = this.opts;
      if (
        ((R = R || new l({ schema: f, schemaId: S, root: z, baseId: g })),
        R.schema !== R.root.schema)
      )
        return R;
    }
  }),
  gu = K((e, t) => {
    t.exports = {
      $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
      description: "Meta-schema for $data reference (JSON AnySchema extension proposal)",
      type: "object",
      required: ["$data"],
      properties: {
        $data: {
          type: "string",
          anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
        }
      },
      additionalProperties: !1
    };
  }),
  Mi = K((e, t) => {
    let r = RegExp.prototype.test.bind(
        /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu
      ),
      s = RegExp.prototype.test.bind(
        /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u
      );
    function a(y) {
      let b = "",
        p = 0,
        h = 0;
      for (h = 0; h < y.length; h++) {
        if (((p = y[h].charCodeAt(0)), p === 48)) continue;
        if (!((p >= 48 && p <= 57) || (p >= 65 && p <= 70) || (p >= 97 && p <= 102))) return "";
        b += y[h];
        break;
      }
      for (h += 1; h < y.length; h++) {
        if (
          ((p = y[h].charCodeAt(0)),
          !((p >= 48 && p <= 57) || (p >= 65 && p <= 70) || (p >= 97 && p <= 102)))
        )
          return "";
        b += y[h];
      }
      return b;
    }
    let n = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function i(y) {
      return ((y.length = 0), !0);
    }
    function l(y, b, p) {
      if (y.length) {
        let h = a(y);
        if (h !== "") b.push(h);
        else return ((p.error = !0), !1);
        y.length = 0;
      }
      return !0;
    }
    function c(y) {
      let b = 0,
        p = { error: !1, address: "", zone: "" },
        h = [],
        g = [],
        f = !1,
        z = !1,
        C = l;
      for (let R = 0; R < y.length; R++) {
        let S = y[R];
        if (S === "[" || S === "]") continue;
        if (S === ":") {
          if (f === !0) z = !0;
          if (!C(g, h, p)) break;
          if (++b > 7) {
            p.error = !0;
            break;
          }
          if (R > 0 && y[R - 1] === ":") f = !0;
          h.push(":");
          continue;
        } else if (S === "%") {
          if (!C(g, h, p)) break;
          C = i;
        } else {
          g.push(S);
          continue;
        }
      }
      if (g.length)
        if (C === i) p.zone = g.join("");
        else if (z) h.push(g.join(""));
        else h.push(a(g));
      return ((p.address = h.join("")), p);
    }
    function d(y) {
      if (m(y, ":") < 2) return { host: y, isIPV6: !1 };
      let b = c(y);
      if (!b.error) {
        let { address: p, address: h } = b;
        if (b.zone) ((p += "%" + b.zone), (h += "%25" + b.zone));
        return { host: p, isIPV6: !0, escapedHost: h };
      } else return { host: y, isIPV6: !1 };
    }
    function m(y, b) {
      let p = 0;
      for (let h = 0; h < y.length; h++) if (y[h] === b) p++;
      return p;
    }
    function _(y) {
      let b = y,
        p = [],
        h = -1,
        g = 0;
      while ((g = b.length)) {
        if (g === 1)
          if (b === ".") break;
          else if (b === "/") {
            p.push("/");
            break;
          } else {
            p.push(b);
            break;
          }
        else if (g === 2) {
          if (b[0] === ".") {
            if (b[1] === ".") break;
            else if (b[1] === "/") {
              b = b.slice(2);
              continue;
            }
          } else if (b[0] === "/") {
            if (b[1] === "." || b[1] === "/") {
              p.push("/");
              break;
            }
          }
        } else if (g === 3) {
          if (b === "/..") {
            if (p.length !== 0) p.pop();
            p.push("/");
            break;
          }
        }
        if (b[0] === ".") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(3);
              continue;
            }
          } else if (b[1] === "/") {
            b = b.slice(2);
            continue;
          }
        } else if (b[0] === "/") {
          if (b[1] === ".") {
            if (b[2] === "/") {
              b = b.slice(2);
              continue;
            } else if (b[2] === ".") {
              if (b[3] === "/") {
                if (((b = b.slice(3)), p.length !== 0)) p.pop();
                continue;
              }
            }
          }
        }
        if ((h = b.indexOf("/", 1)) === -1) {
          p.push(b);
          break;
        } else (p.push(b.slice(0, h)), (b = b.slice(h)));
      }
      return p.join("");
    }
    function E(y, b) {
      let p = b !== !0 ? escape : unescape;
      if (y.scheme !== void 0) y.scheme = p(y.scheme);
      if (y.userinfo !== void 0) y.userinfo = p(y.userinfo);
      if (y.host !== void 0) y.host = p(y.host);
      if (y.path !== void 0) y.path = p(y.path);
      if (y.query !== void 0) y.query = p(y.query);
      if (y.fragment !== void 0) y.fragment = p(y.fragment);
      return y;
    }
    function P(y) {
      let b = [];
      if (y.userinfo !== void 0) (b.push(y.userinfo), b.push("@"));
      if (y.host !== void 0) {
        let p = unescape(y.host);
        if (!s(p)) {
          let h = d(p);
          if (h.isIPV6 === !0) p = `[${h.escapedHost}]`;
          else p = y.host;
        }
        b.push(p);
      }
      if (typeof y.port === "number" || typeof y.port === "string")
        (b.push(":"), b.push(String(y.port)));
      return b.length ? b.join("") : void 0;
    }
    t.exports = {
      nonSimpleDomain: n,
      recomposeAuthority: P,
      normalizeComponentEncoding: E,
      removeDotSegments: _,
      isIPv4: s,
      isUUID: r,
      normalizeIPv6: d,
      stringArrayToHexStripped: a
    };
  }),
  _u = K((e, t) => {
    let { isUUID: r } = Mi(),
      s = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,
      a = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function n(S) {
      return a.indexOf(S) !== -1;
    }
    function i(S) {
      if (S.secure === !0) return !0;
      else if (S.secure === !1) return !1;
      else if (S.scheme)
        return (
          S.scheme.length === 3 &&
          (S.scheme[0] === "w" || S.scheme[0] === "W") &&
          (S.scheme[1] === "s" || S.scheme[1] === "S") &&
          (S.scheme[2] === "s" || S.scheme[2] === "S")
        );
      else return !1;
    }
    function l(S) {
      if (!S.host) S.error = S.error || "HTTP URIs must have a host.";
      return S;
    }
    function c(S) {
      let k = String(S.scheme).toLowerCase() === "https";
      if (S.port === (k ? 443 : 80) || S.port === "") S.port = void 0;
      if (!S.path) S.path = "/";
      return S;
    }
    function d(S) {
      return (
        (S.secure = i(S)),
        (S.resourceName = (S.path || "/") + (S.query ? "?" + S.query : "")),
        (S.path = void 0),
        (S.query = void 0),
        S
      );
    }
    function m(S) {
      if (S.port === (i(S) ? 443 : 80) || S.port === "") S.port = void 0;
      if (typeof S.secure === "boolean")
        ((S.scheme = S.secure ? "wss" : "ws"), (S.secure = void 0));
      if (S.resourceName) {
        let [k, L] = S.resourceName.split("?");
        ((S.path = k && k !== "/" ? k : void 0), (S.query = L), (S.resourceName = void 0));
      }
      return ((S.fragment = void 0), S);
    }
    function _(S, k) {
      if (!S.path) return ((S.error = "URN can not be parsed"), S);
      let L = S.path.match(s);
      if (L) {
        let H = k.scheme || S.scheme || "urn";
        ((S.nid = L[1].toLowerCase()), (S.nss = L[2]));
        let N = R(`${H}:${k.nid || S.nid}`);
        if (((S.path = void 0), N)) S = N.parse(S, k);
      } else S.error = S.error || "URN can not be parsed.";
      return S;
    }
    function E(S, k) {
      if (S.nid === void 0) throw Error("URN without nid cannot be serialized");
      let L = k.scheme || S.scheme || "urn",
        H = S.nid.toLowerCase(),
        N = R(`${L}:${k.nid || H}`);
      if (N) S = N.serialize(S, k);
      let x = S,
        W = S.nss;
      return ((x.path = `${H || k.nid}:${W}`), (k.skipEscape = !0), x);
    }
    function P(S, k) {
      let L = S;
      if (((L.uuid = L.nss), (L.nss = void 0), !k.tolerant && (!L.uuid || !r(L.uuid))))
        L.error = L.error || "UUID is not valid.";
      return L;
    }
    function y(S) {
      let k = S;
      return ((k.nss = (S.uuid || "").toLowerCase()), k);
    }
    let b = { scheme: "http", domainHost: !0, parse: l, serialize: c },
      p = { scheme: "https", domainHost: b.domainHost, parse: l, serialize: c },
      h = { scheme: "ws", domainHost: !0, parse: d, serialize: m },
      g = { scheme: "wss", domainHost: h.domainHost, parse: h.parse, serialize: h.serialize },
      C = {
        http: b,
        https: p,
        ws: h,
        wss: g,
        urn: { scheme: "urn", parse: _, serialize: E, skipNormalize: !0 },
        "urn:uuid": { scheme: "urn:uuid", parse: P, serialize: y, skipNormalize: !0 }
      };
    Object.setPrototypeOf(C, null);
    function R(S) {
      return (S && (C[S] || C[S.toLowerCase()])) || void 0;
    }
    t.exports = { wsIsSecure: i, SCHEMES: C, isValidSchemeName: n, getSchemeHandler: R };
  }),
  yu = K((e, t) => {
    let {
        normalizeIPv6: r,
        removeDotSegments: s,
        recomposeAuthority: a,
        normalizeComponentEncoding: n,
        isIPv4: i,
        nonSimpleDomain: l
      } = Mi(),
      { SCHEMES: c, getSchemeHandler: d } = _u();
    function m(g, f) {
      if (typeof g === "string") g = y(p(g, f), f);
      else if (typeof g === "object") g = p(y(g, f), f);
      return g;
    }
    function _(g, f, z) {
      let C = z ? Object.assign({ scheme: "null" }, z) : { scheme: "null" },
        R = E(p(g, C), p(f, C), C, !0);
      return ((C.skipEscape = !0), y(R, C));
    }
    function E(g, f, z, C) {
      let R = {};
      if (!C) ((g = p(y(g, z), z)), (f = p(y(f, z), z)));
      if (((z = z || {}), !z.tolerant && f.scheme))
        ((R.scheme = f.scheme),
          (R.userinfo = f.userinfo),
          (R.host = f.host),
          (R.port = f.port),
          (R.path = s(f.path || "")),
          (R.query = f.query));
      else {
        if (f.userinfo !== void 0 || f.host !== void 0 || f.port !== void 0)
          ((R.userinfo = f.userinfo),
            (R.host = f.host),
            (R.port = f.port),
            (R.path = s(f.path || "")),
            (R.query = f.query));
        else {
          if (!f.path)
            if (((R.path = g.path), f.query !== void 0)) R.query = f.query;
            else R.query = g.query;
          else {
            if (f.path[0] === "/") R.path = s(f.path);
            else {
              if ((g.userinfo !== void 0 || g.host !== void 0 || g.port !== void 0) && !g.path)
                R.path = "/" + f.path;
              else if (!g.path) R.path = f.path;
              else R.path = g.path.slice(0, g.path.lastIndexOf("/") + 1) + f.path;
              R.path = s(R.path);
            }
            R.query = f.query;
          }
          ((R.userinfo = g.userinfo), (R.host = g.host), (R.port = g.port));
        }
        R.scheme = g.scheme;
      }
      return ((R.fragment = f.fragment), R);
    }
    function P(g, f, z) {
      if (typeof g === "string")
        ((g = unescape(g)), (g = y(n(p(g, z), !0), { ...z, skipEscape: !0 })));
      else if (typeof g === "object") g = y(n(g, !0), { ...z, skipEscape: !0 });
      if (typeof f === "string")
        ((f = unescape(f)), (f = y(n(p(f, z), !0), { ...z, skipEscape: !0 })));
      else if (typeof f === "object") f = y(n(f, !0), { ...z, skipEscape: !0 });
      return g.toLowerCase() === f.toLowerCase();
    }
    function y(g, f) {
      let z = {
          host: g.host,
          scheme: g.scheme,
          userinfo: g.userinfo,
          port: g.port,
          path: g.path,
          query: g.query,
          nid: g.nid,
          nss: g.nss,
          uuid: g.uuid,
          fragment: g.fragment,
          reference: g.reference,
          resourceName: g.resourceName,
          secure: g.secure,
          error: ""
        },
        C = Object.assign({}, f),
        R = [],
        S = d(C.scheme || z.scheme);
      if (S && S.serialize) S.serialize(z, C);
      if (z.path !== void 0)
        if (!C.skipEscape) {
          if (((z.path = escape(z.path)), z.scheme !== void 0))
            z.path = z.path.split("%3A").join(":");
        } else z.path = unescape(z.path);
      if (C.reference !== "suffix" && z.scheme) R.push(z.scheme, ":");
      let k = a(z);
      if (k !== void 0) {
        if (C.reference !== "suffix") R.push("//");
        if ((R.push(k), z.path && z.path[0] !== "/")) R.push("/");
      }
      if (z.path !== void 0) {
        let L = z.path;
        if (!C.absolutePath && (!S || !S.absolutePath)) L = s(L);
        if (k === void 0 && L[0] === "/" && L[1] === "/") L = "/%2F" + L.slice(2);
        R.push(L);
      }
      if (z.query !== void 0) R.push("?", z.query);
      if (z.fragment !== void 0) R.push("#", z.fragment);
      return R.join("");
    }
    let b =
      /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function p(g, f) {
      let z = Object.assign({}, f),
        C = {
          scheme: void 0,
          userinfo: void 0,
          host: "",
          port: void 0,
          path: "",
          query: void 0,
          fragment: void 0
        },
        R = !1;
      if (z.reference === "suffix")
        if (z.scheme) g = z.scheme + ":" + g;
        else g = "//" + g;
      let S = g.match(b);
      if (S) {
        if (
          ((C.scheme = S[1]),
          (C.userinfo = S[3]),
          (C.host = S[4]),
          (C.port = parseInt(S[5], 10)),
          (C.path = S[6] || ""),
          (C.query = S[7]),
          (C.fragment = S[8]),
          isNaN(C.port))
        )
          C.port = S[5];
        if (C.host)
          if (i(C.host) === !1) {
            let L = r(C.host);
            ((C.host = L.host.toLowerCase()), (R = L.isIPV6));
          } else R = !0;
        if (
          C.scheme === void 0 &&
          C.userinfo === void 0 &&
          C.host === void 0 &&
          C.port === void 0 &&
          C.query === void 0 &&
          !C.path
        )
          C.reference = "same-document";
        else if (C.scheme === void 0) C.reference = "relative";
        else if (C.fragment === void 0) C.reference = "absolute";
        else C.reference = "uri";
        if (z.reference && z.reference !== "suffix" && z.reference !== C.reference)
          C.error = C.error || "URI is not a " + z.reference + " reference.";
        let k = d(z.scheme || C.scheme);
        if (!z.unicodeSupport && (!k || !k.unicodeSupport)) {
          if (C.host && (z.domainHost || (k && k.domainHost)) && R === !1 && l(C.host))
            try {
              C.host = URL.domainToASCII(C.host.toLowerCase());
            } catch (L) {
              C.error = C.error || "Host's domain name can not be converted to ASCII: " + L;
            }
        }
        if (!k || (k && !k.skipNormalize)) {
          if (g.indexOf("%") !== -1) {
            if (C.scheme !== void 0) C.scheme = unescape(C.scheme);
            if (C.host !== void 0) C.host = unescape(C.host);
          }
          if (C.path) C.path = escape(unescape(C.path));
          if (C.fragment) C.fragment = encodeURI(decodeURIComponent(C.fragment));
        }
        if (k && k.parse) k.parse(C, z);
      } else C.error = C.error || "URI can not be parsed.";
      return C;
    }
    let h = {
      SCHEMES: c,
      normalize: m,
      resolve: _,
      resolveComponent: E,
      equal: P,
      serialize: y,
      parse: p
    };
    ((t.exports = h), (t.exports.default = h), (t.exports.fastUri = h));
  }),
  vu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = yu();
    ((t.code = 'require("ajv/dist/runtime/uri").default'), (e.default = t));
  }),
  ji = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0));
    var t = as();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return t.KeywordCxt;
      }
    });
    var r = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return r._;
      }
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return r.str;
        }
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return r.stringify;
        }
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return r.nil;
        }
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return r.Name;
        }
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return r.CodeGen;
        }
      }));
    let s = go(),
      a = os(),
      n = Ii(),
      i = _o(),
      l = te(),
      c = So(),
      d = po(),
      m = ne(),
      _ = gu(),
      E = vu(),
      P = (O, U) => new RegExp(O, U);
    P.code = "new RegExp";
    let y = ["removeAdditional", "useDefaults", "coerceTypes"],
      b = new Set([
        "validate",
        "serialize",
        "parse",
        "wrapper",
        "root",
        "schema",
        "keyword",
        "pattern",
        "formats",
        "validate$data",
        "func",
        "obj",
        "Error"
      ]),
      p = {
        errorDataPath: "",
        format: "`validateFormats: false` can be used instead.",
        nullable: '"nullable" keyword is supported by default.',
        jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
        extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
        missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
        processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
        sourceCode: "Use option `code: {source: true}`",
        strictDefaults: "It is default now, see option `strict`.",
        strictKeywords: "It is default now, see option `strict`.",
        uniqueItems: '"uniqueItems" keyword is always validated.',
        unknownFormats:
          "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
        cache: "Map is used as cache, schema object as key.",
        serialize: "Map is used as cache, schema object as key.",
        ajvErrors: "It is default now."
      },
      h = {
        ignoreKeywordsWithRef: "",
        jsPropertySyntax: "",
        unicode: '"minLength"/"maxLength" account for unicode characters by default.'
      },
      g = 200;
    function f(O) {
      var U, F, w, I, j, J, Y, re, Q, ce, Te, q, D, V, X, Z, ee, pe, _e, Re, ge, ue, Ne, ye, De;
      let je = O.strict,
        Ve = (U = O.code) === null || U === void 0 ? void 0 : U.optimize,
        Be = Ve === !0 || Ve === void 0 ? 1 : Ve || 0,
        We =
          (w = (F = O.code) === null || F === void 0 ? void 0 : F.regExp) !== null && w !== void 0
            ? w
            : P,
        nt = (I = O.uriResolver) !== null && I !== void 0 ? I : E.default;
      return {
        strictSchema:
          (J = (j = O.strictSchema) !== null && j !== void 0 ? j : je) !== null && J !== void 0
            ? J
            : !0,
        strictNumbers:
          (re = (Y = O.strictNumbers) !== null && Y !== void 0 ? Y : je) !== null && re !== void 0
            ? re
            : !0,
        strictTypes:
          (ce = (Q = O.strictTypes) !== null && Q !== void 0 ? Q : je) !== null && ce !== void 0
            ? ce
            : "log",
        strictTuples:
          (q = (Te = O.strictTuples) !== null && Te !== void 0 ? Te : je) !== null && q !== void 0
            ? q
            : "log",
        strictRequired:
          (V = (D = O.strictRequired) !== null && D !== void 0 ? D : je) !== null && V !== void 0
            ? V
            : !1,
        code: O.code ? { ...O.code, optimize: Be, regExp: We } : { optimize: Be, regExp: We },
        loopRequired: (X = O.loopRequired) !== null && X !== void 0 ? X : g,
        loopEnum: (Z = O.loopEnum) !== null && Z !== void 0 ? Z : g,
        meta: (ee = O.meta) !== null && ee !== void 0 ? ee : !0,
        messages: (pe = O.messages) !== null && pe !== void 0 ? pe : !0,
        inlineRefs: (_e = O.inlineRefs) !== null && _e !== void 0 ? _e : !0,
        schemaId: (Re = O.schemaId) !== null && Re !== void 0 ? Re : "$id",
        addUsedSchema: (ge = O.addUsedSchema) !== null && ge !== void 0 ? ge : !0,
        validateSchema: (ue = O.validateSchema) !== null && ue !== void 0 ? ue : !0,
        validateFormats: (Ne = O.validateFormats) !== null && Ne !== void 0 ? Ne : !0,
        unicodeRegExp: (ye = O.unicodeRegExp) !== null && ye !== void 0 ? ye : !0,
        int32range: (De = O.int32range) !== null && De !== void 0 ? De : !0,
        uriResolver: nt
      };
    }
    var z = class {
      constructor(O = {}) {
        ((this.schemas = {}),
          (this.refs = {}),
          (this.formats = {}),
          (this._compilations = new Set()),
          (this._loading = {}),
          (this._cache = new Map()),
          (O = this.opts = { ...O, ...f(O) }));
        let { es5: U, lines: F } = this.opts.code;
        ((this.scope = new l.ValueScope({ scope: {}, prefixes: b, es5: U, lines: F })),
          (this.logger = x(O.logger)));
        let w = O.validateFormats;
        if (
          ((O.validateFormats = !1),
          (this.RULES = (0, n.getRules)()),
          C.call(this, p, O, "NOT SUPPORTED"),
          C.call(this, h, O, "DEPRECATED", "warn"),
          (this._metaOpts = H.call(this)),
          O.formats)
        )
          k.call(this);
        if ((this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords))
          L.call(this, O.keywords);
        if (typeof O.meta == "object") this.addMetaSchema(O.meta);
        (S.call(this), (O.validateFormats = w));
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        let { $data: O, meta: U, schemaId: F } = this.opts,
          w = _;
        if (F === "id") ((w = { ..._ }), (w.id = w.$id), delete w.$id);
        if (U && O) this.addMetaSchema(w, w[F], !1);
      }
      defaultMeta() {
        let { meta: O, schemaId: U } = this.opts;
        return (this.opts.defaultMeta = typeof O == "object" ? O[U] || O : void 0);
      }
      validate(O, U) {
        let F;
        if (typeof O == "string") {
          if (((F = this.getSchema(O)), !F)) throw Error(`no schema with key or ref "${O}"`);
        } else F = this.compile(O);
        let w = F(U);
        if (!("$async" in F)) this.errors = F.errors;
        return w;
      }
      compile(O, U) {
        let F = this._addSchema(O, U);
        return F.validate || this._compileSchemaEnv(F);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw Error("options.loadSchema should be a function");
        let { loadSchema: F } = this.opts;
        return w.call(this, O, U);
        async function w(Q, ce) {
          await I.call(this, Q.$schema);
          let Te = this._addSchema(Q, ce);
          return Te.validate || j.call(this, Te);
        }
        async function I(Q) {
          if (Q && !this.getSchema(Q)) await w.call(this, { $ref: Q }, !0);
        }
        async function j(Q) {
          try {
            return this._compileSchemaEnv(Q);
          } catch (ce) {
            if (!(ce instanceof a.default)) throw ce;
            return (J.call(this, ce), await Y.call(this, ce.missingSchema), j.call(this, Q));
          }
        }
        function J({ missingSchema: Q, missingRef: ce }) {
          if (this.refs[Q]) throw Error(`AnySchema ${Q} is loaded but ${ce} cannot be resolved`);
        }
        async function Y(Q) {
          let ce = await re.call(this, Q);
          if (!this.refs[Q]) await I.call(this, ce.$schema);
          if (!this.refs[Q]) this.addSchema(ce, Q, U);
        }
        async function re(Q) {
          let ce = this._loading[Q];
          if (ce) return ce;
          try {
            return await (this._loading[Q] = F(Q));
          } finally {
            delete this._loading[Q];
          }
        }
      }
      addSchema(O, U, F, w = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (let j of O) this.addSchema(j, void 0, F, w);
          return this;
        }
        let I;
        if (typeof O === "object") {
          let { schemaId: j } = this.opts;
          if (((I = O[j]), I !== void 0 && typeof I != "string"))
            throw Error(`schema ${j} must be string`);
        }
        return (
          (U = (0, c.normalizeId)(U || I)),
          this._checkUnique(U),
          (this.schemas[U] = this._addSchema(O, F, U, w, !0)),
          this
        );
      }
      addMetaSchema(O, U, F = this.opts.validateSchema) {
        return (this.addSchema(O, U, !0, F), this);
      }
      validateSchema(O, U) {
        if (typeof O == "boolean") return !0;
        let F;
        if (((F = O.$schema), F !== void 0 && typeof F != "string"))
          throw Error("$schema must be a string");
        if (((F = F || this.opts.defaultMeta || this.defaultMeta()), !F))
          return (this.logger.warn("meta-schema not available"), (this.errors = null), !0);
        let w = this.validate(F, O);
        if (!w && U) {
          let I = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(I);
          else throw Error(I);
        }
        return w;
      }
      getSchema(O) {
        let U;
        while (typeof (U = R.call(this, O)) == "string") O = U;
        if (U === void 0) {
          let { schemaId: F } = this.opts,
            w = new i.SchemaEnv({ schema: {}, schemaId: F });
          if (((U = i.resolveSchema.call(this, w, O)), !U)) return;
          this.refs[O] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      removeSchema(O) {
        if (O instanceof RegExp)
          return (
            this._removeAllSchemas(this.schemas, O),
            this._removeAllSchemas(this.refs, O),
            this
          );
        switch (typeof O) {
          case "undefined":
            return (
              this._removeAllSchemas(this.schemas),
              this._removeAllSchemas(this.refs),
              this._cache.clear(),
              this
            );
          case "string": {
            let U = R.call(this, O);
            if (typeof U == "object") this._cache.delete(U.schema);
            return (delete this.schemas[O], delete this.refs[O], this);
          }
          case "object": {
            let U = O;
            this._cache.delete(U);
            let F = O[this.opts.schemaId];
            if (F) ((F = (0, c.normalizeId)(F)), delete this.schemas[F], delete this.refs[F]);
            return this;
          }
          default:
            throw Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(O) {
        for (let U of O) this.addKeyword(U);
        return this;
      }
      addKeyword(O, U) {
        let F;
        if (typeof O == "string") {
          if (((F = O), typeof U == "object"))
            (this.logger.warn("these parameters are deprecated, see docs for addKeyword"),
              (U.keyword = F));
        } else if (typeof O == "object" && U === void 0) {
          if (((U = O), (F = U.keyword), Array.isArray(F) && !F.length))
            throw Error("addKeywords: keyword must be string or non-empty array");
        } else throw Error("invalid addKeywords parameters");
        if ((G.call(this, F, U), !U)) return ((0, m.eachItem)(F, (I) => se.call(this, I)), this);
        ie.call(this, U);
        let w = {
          ...U,
          type: (0, d.getJSONTypes)(U.type),
          schemaType: (0, d.getJSONTypes)(U.schemaType)
        };
        return (
          (0, m.eachItem)(
            F,
            w.type.length === 0
              ? (I) => se.call(this, I, w)
              : (I) => w.type.forEach((j) => se.call(this, I, w, j))
          ),
          this
        );
      }
      getKeyword(O) {
        let U = this.RULES.all[O];
        return typeof U == "object" ? U.definition : !!U;
      }
      removeKeyword(O) {
        let { RULES: U } = this;
        (delete U.keywords[O], delete U.all[O]);
        for (let F of U.rules) {
          let w = F.rules.findIndex((I) => I.keyword === O);
          if (w >= 0) F.rules.splice(w, 1);
        }
        return this;
      }
      addFormat(O, U) {
        if (typeof U == "string") U = new RegExp(U);
        return ((this.formats[O] = U), this);
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: F = "data" } = {}) {
        if (!O || O.length === 0) return "No errors";
        return O.map((w) => `${F}${w.instancePath} ${w.message}`).reduce((w, I) => w + U + I);
      }
      $dataMetaSchema(O, U) {
        let F = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (let w of U) {
          let I = w.split("/").slice(1),
            j = O;
          for (let J of I) j = j[J];
          for (let J in F) {
            let Y = F[J];
            if (typeof Y != "object") continue;
            let { $data: re } = Y.definition,
              Q = j[J];
            if (re && Q) j[J] = ae(Q);
          }
        }
        return O;
      }
      _removeAllSchemas(O, U) {
        for (let F in O) {
          let w = O[F];
          if (!U || U.test(F)) {
            if (typeof w == "string") delete O[F];
            else if (w && !w.meta) (this._cache.delete(w.schema), delete O[F]);
          }
        }
      }
      _addSchema(O, U, F, w = this.opts.validateSchema, I = this.opts.addUsedSchema) {
        let j,
          { schemaId: J } = this.opts;
        if (typeof O == "object") j = O[J];
        else if (this.opts.jtd) throw Error("schema must be object");
        else if (typeof O != "boolean") throw Error("schema must be object or boolean");
        let Y = this._cache.get(O);
        if (Y !== void 0) return Y;
        F = (0, c.normalizeId)(j || F);
        let re = c.getSchemaRefs.call(this, O, F);
        if (
          ((Y = new i.SchemaEnv({ schema: O, schemaId: J, meta: U, baseId: F, localRefs: re })),
          this._cache.set(Y.schema, Y),
          I && !F.startsWith("#"))
        ) {
          if (F) this._checkUnique(F);
          this.refs[F] = Y;
        }
        if (w) this.validateSchema(O, !0);
        return Y;
      }
      _checkUnique(O) {
        if (this.schemas[O] || this.refs[O])
          throw Error(`schema with key or id "${O}" already exists`);
      }
      _compileSchemaEnv(O) {
        if (O.meta) this._compileMetaSchema(O);
        else i.compileSchema.call(this, O);
        if (!O.validate) throw Error("ajv implementation error");
        return O.validate;
      }
      _compileMetaSchema(O) {
        let U = this.opts;
        this.opts = this._metaOpts;
        try {
          i.compileSchema.call(this, O);
        } finally {
          this.opts = U;
        }
      }
    };
    ((z.ValidationError = s.default), (z.MissingRefError = a.default), (e.default = z));
    function C(O, U, F, w = "error") {
      for (let I in O) {
        let j = I;
        if (j in U) this.logger[w](`${F}: option ${I}. ${O[j]}`);
      }
    }
    function R(O) {
      return ((O = (0, c.normalizeId)(O)), this.schemas[O] || this.refs[O]);
    }
    function S() {
      let O = this.opts.schemas;
      if (!O) return;
      if (Array.isArray(O)) this.addSchema(O);
      else for (let U in O) this.addSchema(O[U], U);
    }
    function k() {
      for (let O in this.opts.formats) {
        let U = this.opts.formats[O];
        if (U) this.addFormat(O, U);
      }
    }
    function L(O) {
      if (Array.isArray(O)) {
        this.addVocabulary(O);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let U in O) {
        let F = O[U];
        if (!F.keyword) F.keyword = U;
        this.addKeyword(F);
      }
    }
    function H() {
      let O = { ...this.opts };
      for (let U of y) delete O[U];
      return O;
    }
    let N = { log() {}, warn() {}, error() {} };
    function x(O) {
      if (O === !1) return N;
      if (O === void 0) return console;
      if (O.log && O.warn && O.error) return O;
      throw Error("logger must implement log, warn and error methods");
    }
    let W = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(O, U) {
      let { RULES: F } = this;
      if (
        ((0, m.eachItem)(O, (w) => {
          if (F.keywords[w]) throw Error(`Keyword ${w} is already defined`);
          if (!W.test(w)) throw Error(`Keyword ${w} has invalid name`);
        }),
        !U)
      )
        return;
      if (U.$data && !("code" in U || "validate" in U))
        throw Error('$data keyword must have "code" or "validate" function');
    }
    function se(O, U, F) {
      var w;
      let I = U === null || U === void 0 ? void 0 : U.post;
      if (F && I) throw Error('keyword with "post" flag cannot have "type"');
      let { RULES: j } = this,
        J = I ? j.post : j.rules.find(({ type: re }) => re === F);
      if (!J) ((J = { type: F, rules: [] }), j.rules.push(J));
      if (((j.keywords[O] = !0), !U)) return;
      let Y = {
        keyword: O,
        definition: {
          ...U,
          type: (0, d.getJSONTypes)(U.type),
          schemaType: (0, d.getJSONTypes)(U.schemaType)
        }
      };
      if (U.before) le.call(this, J, Y, U.before);
      else J.rules.push(Y);
      ((j.all[O] = Y),
        (w = U.implements) === null || w === void 0 || w.forEach((re) => this.addKeyword(re)));
    }
    function le(O, U, F) {
      let w = O.rules.findIndex((I) => I.keyword === F);
      if (w >= 0) O.rules.splice(w, 0, U);
      else (O.rules.push(U), this.logger.warn(`rule ${F} is not defined`));
    }
    function ie(O) {
      let { metaSchema: U } = O;
      if (U === void 0) return;
      if (O.$data && this.opts.$data) U = ae(U);
      O.validateSchema = this.compile(U, !0);
    }
    let Se = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function ae(O) {
      return { anyOf: [O, Se] };
    }
  });
var bu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = {
      keyword: "id",
      code() {
        throw Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
      }
    };
    e.default = t;
  }),
  pn = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.callRef = e.getValidate = void 0));
    let t = os(),
      r = Ue(),
      s = te(),
      a = Le(),
      n = _o(),
      i = ne(),
      l = {
        keyword: "$ref",
        schemaType: "string",
        code(m) {
          let { gen: _, schema: E, it: P } = m,
            { baseId: y, schemaEnv: b, validateName: p, opts: h, self: g } = P,
            { root: f } = b;
          if ((E === "#" || E === "#/") && y === f.baseId) return C();
          let z = n.resolveRef.call(g, f, y, E);
          if (z === void 0) throw new t.default(P.opts.uriResolver, y, E);
          if (z instanceof n.SchemaEnv) return R(z);
          return S(z);
          function C() {
            if (b === f) return d(m, p, b, b.$async);
            let k = _.scopeValue("root", { ref: f });
            return d(m, s._`${k}.validate`, f, f.$async);
          }
          function R(k) {
            d(m, c(m, k), k, k.$async);
          }
          function S(k) {
            let L = _.scopeValue(
                "schema",
                h.code.source === !0 ? { ref: k, code: (0, s.stringify)(k) } : { ref: k }
              ),
              H = _.name("valid"),
              N = m.subschema(
                { schema: k, dataTypes: [], schemaPath: s.nil, topSchemaRef: L, errSchemaPath: E },
                H
              );
            (m.mergeEvaluated(N), m.ok(H));
          }
        }
      };
    function c(m, _) {
      let { gen: E } = m;
      return _.validate
        ? E.scopeValue("validate", { ref: _.validate })
        : s._`${E.scopeValue("wrapper", { ref: _ })}.validate`;
    }
    e.getValidate = c;
    function d(m, _, E, P) {
      let { gen: y, it: b } = m,
        { allErrors: p, schemaEnv: h, opts: g } = b,
        f = g.passContext ? a.default.this : s.nil;
      if (P) z();
      else C();
      function z() {
        if (!h.$async) throw Error("async schema referenced by sync schema");
        let k = y.let("valid");
        (y.try(
          () => {
            if ((y.code(s._`await ${(0, r.callValidateCode)(m, _, f)}`), S(_), !p)) y.assign(k, !0);
          },
          (L) => {
            if ((y.if(s._`!(${L} instanceof ${b.ValidationError})`, () => y.throw(L)), R(L), !p))
              y.assign(k, !1);
          }
        ),
          m.ok(k));
      }
      function C() {
        m.result(
          (0, r.callValidateCode)(m, _, f),
          () => S(_),
          () => R(_)
        );
      }
      function R(k) {
        let L = s._`${k}.errors`;
        (y.assign(
          a.default.vErrors,
          s._`${a.default.vErrors} === null ? ${L} : ${a.default.vErrors}.concat(${L})`
        ),
          y.assign(a.default.errors, s._`${a.default.vErrors}.length`));
      }
      function S(k) {
        var L;
        if (!b.opts.unevaluated) return;
        let H =
          (L = E === null || E === void 0 ? void 0 : E.validate) === null || L === void 0
            ? void 0
            : L.evaluated;
        if (b.props !== !0)
          if (H && !H.dynamicProps) {
            if (H.props !== void 0) b.props = i.mergeEvaluated.props(y, H.props, b.props);
          } else {
            let N = y.var("props", s._`${k}.evaluated.props`);
            b.props = i.mergeEvaluated.props(y, N, b.props, s.Name);
          }
        if (b.items !== !0)
          if (H && !H.dynamicItems) {
            if (H.items !== void 0) b.items = i.mergeEvaluated.items(y, H.items, b.items);
          } else {
            let N = y.var("items", s._`${k}.evaluated.items`);
            b.items = i.mergeEvaluated.items(y, N, b.items, s.Name);
          }
      }
    }
    ((e.callRef = d), (e.default = l));
  }),
  Ai = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = bu(),
      r = pn(),
      s = [
        "$schema",
        "$id",
        "$defs",
        "$vocabulary",
        { keyword: "$comment" },
        "definitions",
        t.default,
        r.default
      ];
    e.default = s;
  }),
  Ru = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = t.operators,
      s = {
        maximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
        minimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
        exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
        exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
      },
      a = {
        keyword: Object.keys(s),
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({ keyword: n, schemaCode: i }) => t.str`must be ${s[n].okStr} ${i}`,
          params: ({ keyword: n, schemaCode: i }) => t._`{comparison: ${s[n].okStr}, limit: ${i}}`
        },
        code(n) {
          let { keyword: i, data: l, schemaCode: c } = n;
          n.fail$data(t._`${l} ${s[i].fail} ${c} || isNaN(${l})`);
        }
      };
    e.default = a;
  }),
  zu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: "multipleOf",
        type: "number",
        schemaType: "number",
        $data: !0,
        error: {
          message: ({ schemaCode: s }) => t.str`must be multiple of ${s}`,
          params: ({ schemaCode: s }) => t._`{multipleOf: ${s}}`
        },
        code(s) {
          let { gen: a, data: n, schemaCode: i, it: l } = s,
            c = l.opts.multipleOfPrecision,
            d = a.let("res"),
            m = c ? t._`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : t._`${d} !== parseInt(${d})`;
          s.fail$data(t._`(${i} === 0 || (${d} = ${n}/${i}, ${m}))`);
        }
      };
    e.default = r;
  }),
  wu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    function t(r) {
      let s = r.length,
        a = 0,
        n = 0,
        i;
      while (n < s)
        if ((a++, (i = r.charCodeAt(n++)), i >= 55296 && i <= 56319 && n < s)) {
          if (((i = r.charCodeAt(n)), (i & 64512) === 56320)) n++;
        }
      return a;
    }
    ((e.default = t), (t.code = 'require("ajv/dist/runtime/ucs2length").default'));
  }),
  $u = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = wu(),
      a = {
        keyword: ["maxLength", "minLength"],
        type: "string",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: n, schemaCode: i }) {
            let l = n === "maxLength" ? "more" : "fewer";
            return t.str`must NOT have ${l} than ${i} characters`;
          },
          params: ({ schemaCode: n }) => t._`{limit: ${n}}`
        },
        code(n) {
          let { keyword: i, data: l, schemaCode: c, it: d } = n,
            m = i === "maxLength" ? t.operators.GT : t.operators.LT,
            _ =
              d.opts.unicode === !1
                ? t._`${l}.length`
                : t._`${(0, r.useFunc)(n.gen, s.default)}(${l})`;
          n.fail$data(t._`${_} ${m} ${c}`);
        }
      };
    e.default = a;
  }),
  Eu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ue(),
      r = ne(),
      s = te(),
      a = {
        keyword: "pattern",
        type: "string",
        schemaType: "string",
        $data: !0,
        error: {
          message: ({ schemaCode: n }) => s.str`must match pattern "${n}"`,
          params: ({ schemaCode: n }) => s._`{pattern: ${n}}`
        },
        code(n) {
          let { gen: i, data: l, $data: c, schema: d, schemaCode: m, it: _ } = n,
            E = _.opts.unicodeRegExp ? "u" : "";
          if (c) {
            let { regExp: P } = _.opts.code,
              y = P.code === "new RegExp" ? s._`new RegExp` : (0, r.useFunc)(i, P),
              b = i.let("valid");
            (i.try(
              () => i.assign(b, s._`${y}(${m}, ${E}).test(${l})`),
              () => i.assign(b, !1)
            ),
              n.fail$data(s._`!${b}`));
          } else {
            let P = (0, t.usePattern)(n, d);
            n.fail$data(s._`!${P}.test(${l})`);
          }
        }
      };
    e.default = a;
  }),
  Pu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: ["maxProperties", "minProperties"],
        type: "object",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: s, schemaCode: a }) {
            let n = s === "maxProperties" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${a} properties`;
          },
          params: ({ schemaCode: s }) => t._`{limit: ${s}}`
        },
        code(s) {
          let { keyword: a, data: n, schemaCode: i } = s,
            l = a === "maxProperties" ? t.operators.GT : t.operators.LT;
          s.fail$data(t._`Object.keys(${n}).length ${l} ${i}`);
        }
      };
    e.default = r;
  }),
  Tu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ue(),
      r = te(),
      s = ne(),
      a = {
        keyword: "required",
        type: "object",
        schemaType: "array",
        $data: !0,
        error: {
          message: ({ params: { missingProperty: n } }) =>
            r.str`must have required property '${n}'`,
          params: ({ params: { missingProperty: n } }) => r._`{missingProperty: ${n}}`
        },
        code(n) {
          let { gen: i, schema: l, schemaCode: c, data: d, $data: m, it: _ } = n,
            { opts: E } = _;
          if (!m && l.length === 0) return;
          let P = l.length >= E.loopRequired;
          if (_.allErrors) y();
          else b();
          if (E.strictRequired) {
            let g = n.parentSchema.properties,
              { definedProperties: f } = n.it;
            for (let z of l)
              if ((g === null || g === void 0 ? void 0 : g[z]) === void 0 && !f.has(z)) {
                let C = `required property "${z}" is not defined at "${_.schemaEnv.baseId + _.errSchemaPath}" (strictRequired)`;
                (0, s.checkStrictMode)(_, C, _.opts.strictRequired);
              }
          }
          function y() {
            if (P || m) n.block$data(r.nil, p);
            else for (let g of l) (0, t.checkReportMissingProp)(n, g);
          }
          function b() {
            let g = i.let("missing");
            if (P || m) {
              let f = i.let("valid", !0);
              (n.block$data(f, () => h(g, f)), n.ok(f));
            } else
              (i.if((0, t.checkMissingProp)(n, l, g)), (0, t.reportMissingProp)(n, g), i.else());
          }
          function p() {
            i.forOf("prop", c, (g) => {
              (n.setParams({ missingProperty: g }),
                i.if((0, t.noPropertyInData)(i, d, g, E.ownProperties), () => n.error()));
            });
          }
          function h(g, f) {
            (n.setParams({ missingProperty: g }),
              i.forOf(
                g,
                c,
                () => {
                  (i.assign(f, (0, t.propertyInData)(i, d, g, E.ownProperties)),
                    i.if((0, r.not)(f), () => {
                      (n.error(), i.break());
                    }));
                },
                r.nil
              ));
          }
        }
      };
    e.default = a;
  }),
  Cu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: ["maxItems", "minItems"],
        type: "array",
        schemaType: "number",
        $data: !0,
        error: {
          message({ keyword: s, schemaCode: a }) {
            let n = s === "maxItems" ? "more" : "fewer";
            return t.str`must NOT have ${n} than ${a} items`;
          },
          params: ({ schemaCode: s }) => t._`{limit: ${s}}`
        },
        code(s) {
          let { keyword: a, data: n, schemaCode: i } = s,
            l = a === "maxItems" ? t.operators.GT : t.operators.LT;
          s.fail$data(t._`${n}.length ${l} ${i}`);
        }
      };
    e.default = r;
  }),
  fn = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ni();
    ((t.code = 'require("ajv/dist/runtime/equal").default'), (e.default = t));
  }),
  ku = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = po(),
      r = te(),
      s = ne(),
      a = fn(),
      n = {
        keyword: "uniqueItems",
        type: "array",
        schemaType: "boolean",
        $data: !0,
        error: {
          message: ({ params: { i, j: l } }) =>
            r.str`must NOT have duplicate items (items ## ${l} and ${i} are identical)`,
          params: ({ params: { i, j: l } }) => r._`{i: ${i}, j: ${l}}`
        },
        code(i) {
          let { gen: l, data: c, $data: d, schema: m, parentSchema: _, schemaCode: E, it: P } = i;
          if (!d && !m) return;
          let y = l.let("valid"),
            b = _.items ? (0, t.getSchemaTypes)(_.items) : [];
          (i.block$data(y, p, r._`${E} === false`), i.ok(y));
          function p() {
            let z = l.let("i", r._`${c}.length`),
              C = l.let("j");
            (i.setParams({ i: z, j: C }),
              l.assign(y, !0),
              l.if(r._`${z} > 1`, () => (h() ? g : f)(z, C)));
          }
          function h() {
            return b.length > 0 && !b.some((z) => z === "object" || z === "array");
          }
          function g(z, C) {
            let R = l.name("item"),
              S = (0, t.checkDataTypes)(b, R, P.opts.strictNumbers, t.DataType.Wrong),
              k = l.const("indices", r._`{}`);
            l.for(r._`;${z}--;`, () => {
              if ((l.let(R, r._`${c}[${z}]`), l.if(S, r._`continue`), b.length > 1))
                l.if(r._`typeof ${R} == "string"`, r._`${R} += "_"`);
              l.if(r._`typeof ${k}[${R}] == "number"`, () => {
                (l.assign(C, r._`${k}[${R}]`), i.error(), l.assign(y, !1).break());
              }).code(r._`${k}[${R}] = ${z}`);
            });
          }
          function f(z, C) {
            let R = (0, s.useFunc)(l, a.default),
              S = l.name("outer");
            l.label(S).for(r._`;${z}--;`, () =>
              l.for(r._`${C} = ${z}; ${C}--;`, () =>
                l.if(r._`${R}(${c}[${z}], ${c}[${C}])`, () => {
                  (i.error(), l.assign(y, !1).break(S));
                })
              )
            );
          }
        }
      };
    e.default = n;
  }),
  qu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = fn(),
      a = {
        keyword: "const",
        $data: !0,
        error: {
          message: "must be equal to constant",
          params: ({ schemaCode: n }) => t._`{allowedValue: ${n}}`
        },
        code(n) {
          let { gen: i, data: l, $data: c, schemaCode: d, schema: m } = n;
          if (c || (m && typeof m == "object"))
            n.fail$data(t._`!${(0, r.useFunc)(i, s.default)}(${l}, ${d})`);
          else n.fail(t._`${m} !== ${l}`);
        }
      };
    e.default = a;
  }),
  Iu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = fn(),
      a = {
        keyword: "enum",
        schemaType: "array",
        $data: !0,
        error: {
          message: "must be equal to one of the allowed values",
          params: ({ schemaCode: n }) => t._`{allowedValues: ${n}}`
        },
        code(n) {
          let { gen: i, data: l, $data: c, schema: d, schemaCode: m, it: _ } = n;
          if (!c && d.length === 0) throw Error("enum must have non-empty array");
          let E = d.length >= _.opts.loopEnum,
            P,
            y = () => (P !== null && P !== void 0 ? P : (P = (0, r.useFunc)(i, s.default))),
            b;
          if (E || c) ((b = i.let("valid")), n.block$data(b, p));
          else {
            if (!Array.isArray(d)) throw Error("ajv implementation error");
            let g = i.const("vSchema", m);
            b = (0, t.or)(...d.map((f, z) => h(g, z)));
          }
          n.pass(b);
          function p() {
            (i.assign(b, !1),
              i.forOf("v", m, (g) => i.if(t._`${y()}(${l}, ${g})`, () => i.assign(b, !0).break())));
          }
          function h(g, f) {
            let z = d[f];
            return typeof z === "object" && z !== null
              ? t._`${y()}(${l}, ${g}[${f}])`
              : t._`${l} === ${z}`;
          }
        }
      };
    e.default = a;
  }),
  Li = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ru(),
      r = zu(),
      s = $u(),
      a = Eu(),
      n = Pu(),
      i = Tu(),
      l = Cu(),
      c = ku(),
      d = qu(),
      m = Iu(),
      _ = [
        t.default,
        r.default,
        s.default,
        a.default,
        n.default,
        i.default,
        l.default,
        c.default,
        { keyword: "type", schemaType: ["string", "array"] },
        { keyword: "nullable", schemaType: "boolean" },
        d.default,
        m.default
      ];
    e.default = _;
  }),
  Ui = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.validateAdditionalItems = void 0));
    let t = te(),
      r = ne(),
      s = {
        keyword: "additionalItems",
        type: "array",
        schemaType: ["boolean", "object"],
        before: "uniqueItems",
        error: {
          message: ({ params: { len: n } }) => t.str`must NOT have more than ${n} items`,
          params: ({ params: { len: n } }) => t._`{limit: ${n}}`
        },
        code(n) {
          let { parentSchema: i, it: l } = n,
            { items: c } = i;
          if (!Array.isArray(c)) {
            (0, r.checkStrictMode)(
              l,
              '"additionalItems" is ignored when "items" is not an array of schemas'
            );
            return;
          }
          a(n, c);
        }
      };
    function a(n, i) {
      let { gen: l, schema: c, data: d, keyword: m, it: _ } = n;
      _.items = !0;
      let E = l.const("len", t._`${d}.length`);
      if (c === !1) (n.setParams({ len: i.length }), n.pass(t._`${E} <= ${i.length}`));
      else if (typeof c == "object" && !(0, r.alwaysValidSchema)(_, c)) {
        let y = l.var("valid", t._`${E} <= ${i.length}`);
        (l.if((0, t.not)(y), () => P(y)), n.ok(y));
      }
      function P(y) {
        l.forRange("i", i.length, E, (b) => {
          if ((n.subschema({ keyword: m, dataProp: b, dataPropType: r.Type.Num }, y), !_.allErrors))
            l.if((0, t.not)(y), () => l.break());
        });
      }
    }
    ((e.validateAdditionalItems = a), (e.default = s));
  }),
  Di = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.validateTuple = void 0));
    let t = te(),
      r = ne(),
      s = Ue(),
      a = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "array", "boolean"],
        before: "uniqueItems",
        code(i) {
          let { schema: l, it: c } = i;
          if (Array.isArray(l)) return n(i, "additionalItems", l);
          if (((c.items = !0), (0, r.alwaysValidSchema)(c, l))) return;
          i.ok((0, s.validateArray)(i));
        }
      };
    function n(i, l, c = i.schema) {
      let { gen: d, parentSchema: m, data: _, keyword: E, it: P } = i;
      if ((p(m), P.opts.unevaluated && c.length && P.items !== !0))
        P.items = r.mergeEvaluated.items(d, c.length, P.items);
      let y = d.name("valid"),
        b = d.const("len", t._`${_}.length`);
      c.forEach((h, g) => {
        if ((0, r.alwaysValidSchema)(P, h)) return;
        (d.if(t._`${b} > ${g}`, () => i.subschema({ keyword: E, schemaProp: g, dataProp: g }, y)),
          i.ok(y));
      });
      function p(h) {
        let { opts: g, errSchemaPath: f } = P,
          z = c.length,
          C = z === h.minItems && (z === h.maxItems || h[l] === !1);
        if (g.strictTuples && !C) {
          let R = `"${E}" is ${z}-tuple, but minItems or maxItems/${l} are not specified or different at path "${f}"`;
          (0, r.checkStrictMode)(P, R, g.strictTuples);
        }
      }
    }
    ((e.validateTuple = n), (e.default = a));
  }),
  Ou = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Di(),
      r = {
        keyword: "prefixItems",
        type: "array",
        schemaType: ["array"],
        before: "uniqueItems",
        code: (s) => (0, t.validateTuple)(s, "items")
      };
    e.default = r;
  }),
  Nu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = Ue(),
      a = Ui(),
      n = {
        keyword: "items",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        error: {
          message: ({ params: { len: i } }) => t.str`must NOT have more than ${i} items`,
          params: ({ params: { len: i } }) => t._`{limit: ${i}}`
        },
        code(i) {
          let { schema: l, parentSchema: c, it: d } = i,
            { prefixItems: m } = c;
          if (((d.items = !0), (0, r.alwaysValidSchema)(d, l))) return;
          if (m) (0, a.validateAdditionalItems)(i, m);
          else i.ok((0, s.validateArray)(i));
        }
      };
    e.default = n;
  }),
  Mu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = {
        keyword: "contains",
        type: "array",
        schemaType: ["object", "boolean"],
        before: "uniqueItems",
        trackErrors: !0,
        error: {
          message: ({ params: { min: a, max: n } }) =>
            n === void 0
              ? t.str`must contain at least ${a} valid item(s)`
              : t.str`must contain at least ${a} and no more than ${n} valid item(s)`,
          params: ({ params: { min: a, max: n } }) =>
            n === void 0 ? t._`{minContains: ${a}}` : t._`{minContains: ${a}, maxContains: ${n}}`
        },
        code(a) {
          let { gen: n, schema: i, parentSchema: l, data: c, it: d } = a,
            m,
            _,
            { minContains: E, maxContains: P } = l;
          if (d.opts.next) ((m = E === void 0 ? 1 : E), (_ = P));
          else m = 1;
          let y = n.const("len", t._`${c}.length`);
          if ((a.setParams({ min: m, max: _ }), _ === void 0 && m === 0)) {
            (0, r.checkStrictMode)(
              d,
              '"minContains" == 0 without "maxContains": "contains" keyword ignored'
            );
            return;
          }
          if (_ !== void 0 && m > _) {
            ((0, r.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'),
              a.fail());
            return;
          }
          if ((0, r.alwaysValidSchema)(d, i)) {
            let f = t._`${y} >= ${m}`;
            if (_ !== void 0) f = t._`${f} && ${y} <= ${_}`;
            a.pass(f);
            return;
          }
          d.items = !0;
          let b = n.name("valid");
          if (_ === void 0 && m === 1) h(b, () => n.if(b, () => n.break()));
          else if (m === 0) {
            if ((n.let(b, !0), _ !== void 0)) n.if(t._`${c}.length > 0`, p);
          } else (n.let(b, !1), p());
          a.result(b, () => a.reset());
          function p() {
            let f = n.name("_valid"),
              z = n.let("count", 0);
            h(f, () => n.if(f, () => g(z)));
          }
          function h(f, z) {
            n.forRange("i", 0, y, (C) => {
              (a.subschema(
                { keyword: "contains", dataProp: C, dataPropType: r.Type.Num, compositeRule: !0 },
                f
              ),
                z());
            });
          }
          function g(f) {
            if ((n.code(t._`${f}++`), _ === void 0))
              n.if(t._`${f} >= ${m}`, () => n.assign(b, !0).break());
            else if ((n.if(t._`${f} > ${_}`, () => n.assign(b, !1).break()), m === 1))
              n.assign(b, !0);
            else n.if(t._`${f} >= ${m}`, () => n.assign(b, !0));
          }
        }
      };
    e.default = s;
  }),
  Sn = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0));
    let t = te(),
      r = ne(),
      s = Ue();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: m } }) => {
        let _ = d === 1 ? "property" : "properties";
        return t.str`must have ${_} ${m} when property ${c} is present`;
      },
      params: ({
        params: { property: c, depsCount: d, deps: m, missingProperty: _ }
      }) => t._`{property: ${c},
    missingProperty: ${_},
    depsCount: ${d},
    deps: ${m}}`
    };
    let a = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        let [d, m] = n(c);
        (i(c, d), l(c, m));
      }
    };
    function n({ schema: c }) {
      let d = {},
        m = {};
      for (let _ in c) {
        if (_ === "__proto__") continue;
        let E = Array.isArray(c[_]) ? d : m;
        E[_] = c[_];
      }
      return [d, m];
    }
    function i(c, d = c.schema) {
      let { gen: m, data: _, it: E } = c;
      if (Object.keys(d).length === 0) return;
      let P = m.let("missing");
      for (let y in d) {
        let b = d[y];
        if (b.length === 0) continue;
        let p = (0, s.propertyInData)(m, _, y, E.opts.ownProperties);
        if ((c.setParams({ property: y, depsCount: b.length, deps: b.join(", ") }), E.allErrors))
          m.if(p, () => {
            for (let h of b) (0, s.checkReportMissingProp)(c, h);
          });
        else
          (m.if(t._`${p} && (${(0, s.checkMissingProp)(c, b, P)})`),
            (0, s.reportMissingProp)(c, P),
            m.else());
      }
    }
    e.validatePropertyDeps = i;
    function l(c, d = c.schema) {
      let { gen: m, data: _, keyword: E, it: P } = c,
        y = m.name("valid");
      for (let b in d) {
        if ((0, r.alwaysValidSchema)(P, d[b])) continue;
        (m.if(
          (0, s.propertyInData)(m, _, b, P.opts.ownProperties),
          () => {
            let p = c.subschema({ keyword: E, schemaProp: b }, y);
            c.mergeValidEvaluated(p, y);
          },
          () => m.var(y, !0)
        ),
          c.ok(y));
      }
    }
    ((e.validateSchemaDeps = l), (e.default = a));
  }),
  ju = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = {
        keyword: "propertyNames",
        type: "object",
        schemaType: ["object", "boolean"],
        error: {
          message: "property name must be valid",
          params: ({ params: a }) => t._`{propertyName: ${a.propertyName}}`
        },
        code(a) {
          let { gen: n, schema: i, data: l, it: c } = a;
          if ((0, r.alwaysValidSchema)(c, i)) return;
          let d = n.name("valid");
          (n.forIn("key", l, (m) => {
            (a.setParams({ propertyName: m }),
              a.subschema(
                {
                  keyword: "propertyNames",
                  data: m,
                  dataTypes: ["string"],
                  propertyName: m,
                  compositeRule: !0
                },
                d
              ),
              n.if((0, t.not)(d), () => {
                if ((a.error(!0), !c.allErrors)) n.break();
              }));
          }),
            a.ok(d));
        }
      };
    e.default = s;
  }),
  Vi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ue(),
      r = te(),
      s = Le(),
      a = ne(),
      n = {
        keyword: "additionalProperties",
        type: ["object"],
        schemaType: ["boolean", "object"],
        allowUndefined: !0,
        trackErrors: !0,
        error: {
          message: "must NOT have additional properties",
          params: ({ params: i }) => r._`{additionalProperty: ${i.additionalProperty}}`
        },
        code(i) {
          let { gen: l, schema: c, parentSchema: d, data: m, errsCount: _, it: E } = i;
          if (!_) throw Error("ajv implementation error");
          let { allErrors: P, opts: y } = E;
          if (((E.props = !0), y.removeAdditional !== "all" && (0, a.alwaysValidSchema)(E, c)))
            return;
          let b = (0, t.allSchemaProperties)(d.properties),
            p = (0, t.allSchemaProperties)(d.patternProperties);
          (h(), i.ok(r._`${_} === ${s.default.errors}`));
          function h() {
            l.forIn("key", m, (R) => {
              if (!b.length && !p.length) z(R);
              else l.if(g(R), () => z(R));
            });
          }
          function g(R) {
            let S;
            if (b.length > 8) {
              let k = (0, a.schemaRefOrVal)(E, d.properties, "properties");
              S = (0, t.isOwnProperty)(l, k, R);
            } else if (b.length) S = (0, r.or)(...b.map((k) => r._`${R} === ${k}`));
            else S = r.nil;
            if (p.length)
              S = (0, r.or)(S, ...p.map((k) => r._`${(0, t.usePattern)(i, k)}.test(${R})`));
            return (0, r.not)(S);
          }
          function f(R) {
            l.code(r._`delete ${m}[${R}]`);
          }
          function z(R) {
            if (y.removeAdditional === "all" || (y.removeAdditional && c === !1)) {
              f(R);
              return;
            }
            if (c === !1) {
              if ((i.setParams({ additionalProperty: R }), i.error(), !P)) l.break();
              return;
            }
            if (typeof c == "object" && !(0, a.alwaysValidSchema)(E, c)) {
              let S = l.name("valid");
              if (y.removeAdditional === "failing")
                (C(R, S, !1),
                  l.if((0, r.not)(S), () => {
                    (i.reset(), f(R));
                  }));
              else if ((C(R, S), !P)) l.if((0, r.not)(S), () => l.break());
            }
          }
          function C(R, S, k) {
            let L = { keyword: "additionalProperties", dataProp: R, dataPropType: a.Type.Str };
            if (k === !1) Object.assign(L, { compositeRule: !0, createErrors: !1, allErrors: !1 });
            i.subschema(L, S);
          }
        }
      };
    e.default = n;
  }),
  Au = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = as(),
      r = Ue(),
      s = ne(),
      a = Vi(),
      n = {
        keyword: "properties",
        type: "object",
        schemaType: "object",
        code(i) {
          let { gen: l, schema: c, parentSchema: d, data: m, it: _ } = i;
          if (_.opts.removeAdditional === "all" && d.additionalProperties === void 0)
            a.default.code(new t.KeywordCxt(_, a.default, "additionalProperties"));
          let E = (0, r.allSchemaProperties)(c);
          for (let h of E) _.definedProperties.add(h);
          if (_.opts.unevaluated && E.length && _.props !== !0)
            _.props = s.mergeEvaluated.props(l, (0, s.toHash)(E), _.props);
          let P = E.filter((h) => !(0, s.alwaysValidSchema)(_, c[h]));
          if (P.length === 0) return;
          let y = l.name("valid");
          for (let h of P) {
            if (b(h)) p(h);
            else {
              if ((l.if((0, r.propertyInData)(l, m, h, _.opts.ownProperties)), p(h), !_.allErrors))
                l.else().var(y, !0);
              l.endIf();
            }
            (i.it.definedProperties.add(h), i.ok(y));
          }
          function b(h) {
            return _.opts.useDefaults && !_.compositeRule && c[h].default !== void 0;
          }
          function p(h) {
            i.subschema({ keyword: "properties", schemaProp: h, dataProp: h }, y);
          }
        }
      };
    e.default = n;
  }),
  Lu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ue(),
      r = te(),
      s = ne(),
      a = ne(),
      n = {
        keyword: "patternProperties",
        type: "object",
        schemaType: "object",
        code(i) {
          let { gen: l, schema: c, data: d, parentSchema: m, it: _ } = i,
            { opts: E } = _,
            P = (0, t.allSchemaProperties)(c),
            y = P.filter((C) => (0, s.alwaysValidSchema)(_, c[C]));
          if (P.length === 0 || (y.length === P.length && (!_.opts.unevaluated || _.props === !0)))
            return;
          let b = E.strictSchema && !E.allowMatchingProperties && m.properties,
            p = l.name("valid");
          if (_.props !== !0 && !(_.props instanceof r.Name))
            _.props = (0, a.evaluatedPropsToName)(l, _.props);
          let { props: h } = _;
          g();
          function g() {
            for (let C of P) {
              if (b) f(C);
              if (_.allErrors) z(C);
              else (l.var(p, !0), z(C), l.if(p));
            }
          }
          function f(C) {
            for (let R in b)
              if (new RegExp(C).test(R))
                (0, s.checkStrictMode)(
                  _,
                  `property ${R} matches pattern ${C} (use allowMatchingProperties)`
                );
          }
          function z(C) {
            l.forIn("key", d, (R) => {
              l.if(r._`${(0, t.usePattern)(i, C)}.test(${R})`, () => {
                let S = y.includes(C);
                if (!S)
                  i.subschema(
                    {
                      keyword: "patternProperties",
                      schemaProp: C,
                      dataProp: R,
                      dataPropType: a.Type.Str
                    },
                    p
                  );
                if (_.opts.unevaluated && h !== !0) l.assign(r._`${h}[${R}]`, !0);
                else if (!S && !_.allErrors) l.if((0, r.not)(p), () => l.break());
              });
            });
          }
        }
      };
    e.default = n;
  }),
  Uu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: "not",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        code(s) {
          let { gen: a, schema: n, it: i } = s;
          if ((0, t.alwaysValidSchema)(i, n)) {
            s.fail();
            return;
          }
          let l = a.name("valid");
          (s.subschema({ keyword: "not", compositeRule: !0, createErrors: !1, allErrors: !1 }, l),
            s.failResult(
              l,
              () => s.reset(),
              () => s.error()
            ));
        },
        error: { message: "must NOT be valid" }
      };
    e.default = r;
  }),
  Du = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = {
      keyword: "anyOf",
      schemaType: "array",
      trackErrors: !0,
      code: Ue().validateUnion,
      error: { message: "must match a schema in anyOf" }
    };
    e.default = t;
  }),
  Vu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = {
        keyword: "oneOf",
        schemaType: "array",
        trackErrors: !0,
        error: {
          message: "must match exactly one schema in oneOf",
          params: ({ params: a }) => t._`{passingSchemas: ${a.passing}}`
        },
        code(a) {
          let { gen: n, schema: i, parentSchema: l, it: c } = a;
          if (!Array.isArray(i)) throw Error("ajv implementation error");
          if (c.opts.discriminator && l.discriminator) return;
          let d = i,
            m = n.let("valid", !1),
            _ = n.let("passing", null),
            E = n.name("_valid");
          (a.setParams({ passing: _ }),
            n.block(P),
            a.result(
              m,
              () => a.reset(),
              () => a.error(!0)
            ));
          function P() {
            d.forEach((y, b) => {
              let p;
              if ((0, r.alwaysValidSchema)(c, y)) n.var(E, !0);
              else p = a.subschema({ keyword: "oneOf", schemaProp: b, compositeRule: !0 }, E);
              if (b > 0)
                n.if(t._`${E} && ${m}`)
                  .assign(m, !1)
                  .assign(_, t._`[${_}, ${b}]`)
                  .else();
              n.if(E, () => {
                if ((n.assign(m, !0), n.assign(_, b), p)) a.mergeEvaluated(p, t.Name);
              });
            });
          }
        }
      };
    e.default = s;
  }),
  xu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: "allOf",
        schemaType: "array",
        code(s) {
          let { gen: a, schema: n, it: i } = s;
          if (!Array.isArray(n)) throw Error("ajv implementation error");
          let l = a.name("valid");
          n.forEach((c, d) => {
            if ((0, t.alwaysValidSchema)(i, c)) return;
            let m = s.subschema({ keyword: "allOf", schemaProp: d }, l);
            (s.ok(l), s.mergeEvaluated(m));
          });
        }
      };
    e.default = r;
  }),
  Fu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = {
        keyword: "if",
        schemaType: ["object", "boolean"],
        trackErrors: !0,
        error: {
          message: ({ params: n }) => t.str`must match "${n.ifClause}" schema`,
          params: ({ params: n }) => t._`{failingKeyword: ${n.ifClause}}`
        },
        code(n) {
          let { gen: i, parentSchema: l, it: c } = n;
          if (l.then === void 0 && l.else === void 0)
            (0, r.checkStrictMode)(c, '"if" without "then" and "else" is ignored');
          let d = a(c, "then"),
            m = a(c, "else");
          if (!d && !m) return;
          let _ = i.let("valid", !0),
            E = i.name("_valid");
          if ((P(), n.reset(), d && m)) {
            let b = i.let("ifClause");
            (n.setParams({ ifClause: b }), i.if(E, y("then", b), y("else", b)));
          } else if (d) i.if(E, y("then"));
          else i.if((0, t.not)(E), y("else"));
          n.pass(_, () => n.error(!0));
          function P() {
            let b = n.subschema(
              { keyword: "if", compositeRule: !0, createErrors: !1, allErrors: !1 },
              E
            );
            n.mergeEvaluated(b);
          }
          function y(b, p) {
            return () => {
              let h = n.subschema({ keyword: b }, E);
              if ((i.assign(_, E), n.mergeValidEvaluated(h, _), p)) i.assign(p, t._`${b}`);
              else n.setParams({ ifClause: b });
            };
          }
        }
      };
    function a(n, i) {
      let l = n.schema[i];
      return l !== void 0 && !(0, r.alwaysValidSchema)(n, l);
    }
    e.default = s;
  }),
  Hu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: ["then", "else"],
        schemaType: ["object", "boolean"],
        code({ keyword: s, parentSchema: a, it: n }) {
          if (a.if === void 0) (0, t.checkStrictMode)(n, `"${s}" without "if" is ignored`);
        }
      };
    e.default = r;
  }),
  xi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ui(),
      r = Ou(),
      s = Di(),
      a = Nu(),
      n = Mu(),
      i = Sn(),
      l = ju(),
      c = Vi(),
      d = Au(),
      m = Lu(),
      _ = Uu(),
      E = Du(),
      P = Vu(),
      y = xu(),
      b = Fu(),
      p = Hu();
    function h(g = !1) {
      let f = [
        _.default,
        E.default,
        P.default,
        y.default,
        b.default,
        p.default,
        l.default,
        c.default,
        i.default,
        d.default,
        m.default
      ];
      if (g) f.push(r.default, a.default);
      else f.push(t.default, s.default);
      return (f.push(n.default), f);
    }
    e.default = h;
  }),
  Ku = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = {
        keyword: "format",
        type: ["number", "string"],
        schemaType: "string",
        $data: !0,
        error: {
          message: ({ schemaCode: s }) => t.str`must match format "${s}"`,
          params: ({ schemaCode: s }) => t._`{format: ${s}}`
        },
        code(s, a) {
          let { gen: n, data: i, $data: l, schema: c, schemaCode: d, it: m } = s,
            { opts: _, errSchemaPath: E, schemaEnv: P, self: y } = m;
          if (!_.validateFormats) return;
          if (l) b();
          else p();
          function b() {
            let h = n.scopeValue("formats", { ref: y.formats, code: _.code.formats }),
              g = n.const("fDef", t._`${h}[${d}]`),
              f = n.let("fType"),
              z = n.let("format");
            (n.if(
              t._`typeof ${g} == "object" && !(${g} instanceof RegExp)`,
              () => n.assign(f, t._`${g}.type || "string"`).assign(z, t._`${g}.validate`),
              () => n.assign(f, t._`"string"`).assign(z, g)
            ),
              s.fail$data((0, t.or)(C(), R())));
            function C() {
              if (_.strictSchema === !1) return t.nil;
              return t._`${d} && !${z}`;
            }
            function R() {
              let S = P.$async
                  ? t._`(${g}.async ? await ${z}(${i}) : ${z}(${i}))`
                  : t._`${z}(${i})`,
                k = t._`(typeof ${z} == "function" ? ${S} : ${z}.test(${i}))`;
              return t._`${z} && ${z} !== true && ${f} === ${a} && !${k}`;
            }
          }
          function p() {
            let h = y.formats[c];
            if (!h) {
              C();
              return;
            }
            if (h === !0) return;
            let [g, f, z] = R(h);
            if (g === a) s.pass(S());
            function C() {
              if (_.strictSchema === !1) {
                y.logger.warn(k());
                return;
              }
              throw Error(k());
              function k() {
                return `unknown format "${c}" ignored in schema at path "${E}"`;
              }
            }
            function R(k) {
              let L =
                  k instanceof RegExp
                    ? (0, t.regexpCode)(k)
                    : _.code.formats
                      ? t._`${_.code.formats}${(0, t.getProperty)(c)}`
                      : void 0,
                H = n.scopeValue("formats", { key: c, ref: k, code: L });
              if (typeof k == "object" && !(k instanceof RegExp))
                return [k.type || "string", k.validate, t._`${H}.validate`];
              return ["string", k, H];
            }
            function S() {
              if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
                if (!P.$async) throw Error("async format in sync schema");
                return t._`await ${z}(${i})`;
              }
              return typeof f == "function" ? t._`${z}(${i})` : t._`${z}.test(${i})`;
            }
          }
        }
      };
    e.default = r;
  }),
  Fi = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = [Ku().default];
    e.default = t;
  }),
  Hi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.contentVocabulary = e.metadataVocabulary = void 0),
      (e.metadataVocabulary = [
        "title",
        "description",
        "default",
        "deprecated",
        "readOnly",
        "writeOnly",
        "examples"
      ]),
      (e.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"]));
  }),
  Ju = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ai(),
      r = Li(),
      s = xi(),
      a = Fi(),
      n = Hi(),
      i = [
        t.default,
        r.default,
        (0, s.default)(),
        a.default,
        n.metadataVocabulary,
        n.contentVocabulary
      ];
    e.default = i;
  }),
  Gu = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.DiscrError = void 0));
    var t;
    (function (r) {
      ((r.Tag = "tag"), (r.Mapping = "mapping"));
    })(t || (e.DiscrError = t = {}));
  }),
  Ki = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = Gu(),
      s = _o(),
      a = os(),
      n = ne(),
      i = {
        keyword: "discriminator",
        type: "object",
        schemaType: "object",
        error: {
          message: ({ params: { discrError: l, tagName: c } }) =>
            l === r.DiscrError.Tag
              ? `tag "${c}" must be string`
              : `value of tag "${c}" must be in oneOf`,
          params: ({ params: { discrError: l, tag: c, tagName: d } }) =>
            t._`{error: ${l}, tag: ${d}, tagValue: ${c}}`
        },
        code(l) {
          let { gen: c, data: d, schema: m, parentSchema: _, it: E } = l,
            { oneOf: P } = _;
          if (!E.opts.discriminator) throw Error("discriminator: requires discriminator option");
          let y = m.propertyName;
          if (typeof y != "string") throw Error("discriminator: requires propertyName");
          if (m.mapping) throw Error("discriminator: mapping is not supported");
          if (!P) throw Error("discriminator: requires oneOf keyword");
          let b = c.let("valid", !1),
            p = c.const("tag", t._`${d}${(0, t.getProperty)(y)}`);
          (c.if(
            t._`typeof ${p} == "string"`,
            () => h(),
            () => l.error(!1, { discrError: r.DiscrError.Tag, tag: p, tagName: y })
          ),
            l.ok(b));
          function h() {
            let z = f();
            c.if(!1);
            for (let C in z) (c.elseIf(t._`${p} === ${C}`), c.assign(b, g(z[C])));
            (c.else(),
              l.error(!1, { discrError: r.DiscrError.Mapping, tag: p, tagName: y }),
              c.endIf());
          }
          function g(z) {
            let C = c.name("valid"),
              R = l.subschema({ keyword: "oneOf", schemaProp: z }, C);
            return (l.mergeEvaluated(R, t.Name), C);
          }
          function f() {
            var z;
            let C = {},
              R = k(_),
              S = !0;
            for (let N = 0; N < P.length; N++) {
              let x = P[N];
              if (
                (x === null || x === void 0 ? void 0 : x.$ref) &&
                !(0, n.schemaHasRulesButRef)(x, E.self.RULES)
              ) {
                let G = x.$ref;
                if (
                  ((x = s.resolveRef.call(E.self, E.schemaEnv.root, E.baseId, G)),
                  x instanceof s.SchemaEnv)
                )
                  x = x.schema;
                if (x === void 0) throw new a.default(E.opts.uriResolver, E.baseId, G);
              }
              let W =
                (z = x === null || x === void 0 ? void 0 : x.properties) === null || z === void 0
                  ? void 0
                  : z[y];
              if (typeof W != "object")
                throw Error(
                  `discriminator: oneOf subschemas (or referenced schemas) must have "properties/${y}"`
                );
              ((S = S && (R || k(x))), L(W, N));
            }
            if (!S) throw Error(`discriminator: "${y}" must be required`);
            return C;
            function k({ required: N }) {
              return Array.isArray(N) && N.includes(y);
            }
            function L(N, x) {
              if (N.const) H(N.const, x);
              else if (N.enum) for (let W of N.enum) H(W, x);
              else throw Error(`discriminator: "properties/${y}" must have "const" or "enum"`);
            }
            function H(N, x) {
              if (typeof N != "string" || N in C)
                throw Error(`discriminator: "${y}" values must be unique strings`);
              C[N] = x;
            }
          }
        }
      };
    e.default = i;
  }),
  Bu = K((e, t) => {
    t.exports = {
      $schema: "http://json-schema.org/draft-07/schema#",
      $id: "http://json-schema.org/draft-07/schema#",
      title: "Core schema meta-schema",
      definitions: {
        schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } },
        nonNegativeInteger: { type: "integer", minimum: 0 },
        nonNegativeIntegerDefault0: {
          allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }]
        },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] }
      },
      type: ["object", "boolean"],
      properties: {
        $id: { type: "string", format: "uri-reference" },
        $schema: { type: "string", format: "uri" },
        $ref: { type: "string", format: "uri-reference" },
        $comment: { type: "string" },
        title: { type: "string" },
        description: { type: "string" },
        default: !0,
        readOnly: { type: "boolean", default: !1 },
        examples: { type: "array", items: !0 },
        multipleOf: { type: "number", exclusiveMinimum: 0 },
        maximum: { type: "number" },
        exclusiveMaximum: { type: "number" },
        minimum: { type: "number" },
        exclusiveMinimum: { type: "number" },
        maxLength: { $ref: "#/definitions/nonNegativeInteger" },
        minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        pattern: { type: "string", format: "regex" },
        additionalItems: { $ref: "#" },
        items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 },
        maxItems: { $ref: "#/definitions/nonNegativeInteger" },
        minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        uniqueItems: { type: "boolean", default: !1 },
        contains: { $ref: "#" },
        maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
        minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: { $ref: "#" },
        definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
        properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} },
        patternProperties: {
          type: "object",
          additionalProperties: { $ref: "#" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependencies: {
          type: "object",
          additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
        },
        propertyNames: { $ref: "#" },
        const: !0,
        enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 },
        type: {
          anyOf: [
            { $ref: "#/definitions/simpleTypes" },
            {
              type: "array",
              items: { $ref: "#/definitions/simpleTypes" },
              minItems: 1,
              uniqueItems: !0
            }
          ]
        },
        format: { type: "string" },
        contentMediaType: { type: "string" },
        contentEncoding: { type: "string" },
        if: { $ref: "#" },
        then: { $ref: "#" },
        else: { $ref: "#" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
      },
      default: !0
    };
  }),
  Ji = K((e, t) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MissingRefError =
        e.ValidationError =
        e.CodeGen =
        e.Name =
        e.nil =
        e.stringify =
        e.str =
        e._ =
        e.KeywordCxt =
        e.Ajv =
          void 0));
    let r = ji(),
      s = Ju(),
      a = Ki(),
      n = Bu(),
      i = ["/properties"],
      l = "http://json-schema.org/draft-07/schema";
    var c = class extends r.default {
      _addVocabularies() {
        if (
          (super._addVocabularies(),
          s.default.forEach((P) => this.addVocabulary(P)),
          this.opts.discriminator)
        )
          this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        if ((super._addDefaultMetaSchema(), !this.opts.meta)) return;
        let P = this.opts.$data ? this.$dataMetaSchema(n, i) : n;
        (this.addMetaSchema(P, l, !1), (this.refs["http://json-schema.org/schema"] = l));
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0));
      }
    };
    ((e.Ajv = c),
      (t.exports = e = c),
      (t.exports.Ajv = c),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = c));
    var d = as();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return d.KeywordCxt;
      }
    });
    var m = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return m._;
      }
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return m.str;
        }
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return m.stringify;
        }
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return m.nil;
        }
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return m.Name;
        }
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return m.CodeGen;
        }
      }));
    var _ = go();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
    var E = os();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return E.default;
      }
    });
  }),
  Gi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.dynamicAnchor = void 0));
    let t = te(),
      r = Le(),
      s = _o(),
      a = pn(),
      n = { keyword: "$dynamicAnchor", schemaType: "string", code: (c) => i(c, c.schema) };
    function i(c, d) {
      let { gen: m, it: _ } = c;
      _.schemaEnv.root.dynamicAnchors[d] = !0;
      let E = t._`${r.default.dynamicAnchors}${(0, t.getProperty)(d)}`,
        P = _.errSchemaPath === "#" ? _.validateName : l(c);
      m.if(t._`!${E}`, () => m.assign(E, P));
    }
    e.dynamicAnchor = i;
    function l(c) {
      let { schemaEnv: d, schema: m, self: _ } = c.it,
        { root: E, baseId: P, localRefs: y, meta: b } = d.root,
        { schemaId: p } = _.opts,
        h = new s.SchemaEnv({ schema: m, schemaId: p, root: E, baseId: P, localRefs: y, meta: b });
      return (s.compileSchema.call(_, h), (0, a.getValidate)(c, h));
    }
    e.default = n;
  }),
  Bi = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.dynamicRef = void 0));
    let t = te(),
      r = Le(),
      s = pn(),
      a = { keyword: "$dynamicRef", schemaType: "string", code: (i) => n(i, i.schema) };
    function n(i, l) {
      let { gen: c, keyword: d, it: m } = i;
      if (l[0] !== "#") throw Error(`"${d}" only supports hash fragment reference`);
      let _ = l.slice(1);
      if (m.allErrors) E();
      else {
        let y = c.let("valid", !1);
        (E(y), i.ok(y));
      }
      function E(y) {
        if (m.schemaEnv.root.dynamicAnchors[_]) {
          let b = c.let("_v", t._`${r.default.dynamicAnchors}${(0, t.getProperty)(_)}`);
          c.if(b, P(b, y), P(m.validateName, y));
        } else P(m.validateName, y)();
      }
      function P(y, b) {
        return b
          ? () =>
              c.block(() => {
                ((0, s.callRef)(i, y), c.let(b, !0));
              })
          : () => (0, s.callRef)(i, y);
      }
    }
    ((e.dynamicRef = n), (e.default = a));
  }),
  Wu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Gi(),
      r = ne(),
      s = {
        keyword: "$recursiveAnchor",
        schemaType: "boolean",
        code(a) {
          if (a.schema) (0, t.dynamicAnchor)(a, "");
          else (0, r.checkStrictMode)(a.it, "$recursiveAnchor: false is ignored");
        }
      };
    e.default = s;
  }),
  Yu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Bi(),
      r = {
        keyword: "$recursiveRef",
        schemaType: "string",
        code: (s) => (0, t.dynamicRef)(s, s.schema)
      };
    e.default = r;
  }),
  Xu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Gi(),
      r = Bi(),
      s = Wu(),
      a = Yu(),
      n = [t.default, r.default, s.default, a.default];
    e.default = n;
  }),
  Zu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Sn(),
      r = {
        keyword: "dependentRequired",
        type: "object",
        schemaType: "object",
        error: t.error,
        code: (s) => (0, t.validatePropertyDeps)(s)
      };
    e.default = r;
  }),
  Qu = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Sn(),
      r = {
        keyword: "dependentSchemas",
        type: "object",
        schemaType: "object",
        code: (s) => (0, t.validateSchemaDeps)(s)
      };
    e.default = r;
  }),
  ed = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = ne(),
      r = {
        keyword: ["maxContains", "minContains"],
        type: "array",
        schemaType: "number",
        code({ keyword: s, parentSchema: a, it: n }) {
          if (a.contains === void 0)
            (0, t.checkStrictMode)(n, `"${s}" without "contains" is ignored`);
        }
      };
    e.default = r;
  }),
  td = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Zu(),
      r = Qu(),
      s = ed(),
      a = [t.default, r.default, s.default];
    e.default = a;
  }),
  rd = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = Le(),
      a = {
        keyword: "unevaluatedProperties",
        type: "object",
        schemaType: ["boolean", "object"],
        trackErrors: !0,
        error: {
          message: "must NOT have unevaluated properties",
          params: ({ params: n }) => t._`{unevaluatedProperty: ${n.unevaluatedProperty}}`
        },
        code(n) {
          let { gen: i, schema: l, data: c, errsCount: d, it: m } = n;
          if (!d) throw Error("ajv implementation error");
          let { allErrors: _, props: E } = m;
          if (E instanceof t.Name)
            i.if(t._`${E} !== true`, () => i.forIn("key", c, (p) => i.if(y(E, p), () => P(p))));
          else if (E !== !0)
            i.forIn("key", c, (p) => (E === void 0 ? P(p) : i.if(b(E, p), () => P(p))));
          ((m.props = !0), n.ok(t._`${d} === ${s.default.errors}`));
          function P(p) {
            if (l === !1) {
              if ((n.setParams({ unevaluatedProperty: p }), n.error(), !_)) i.break();
              return;
            }
            if (!(0, r.alwaysValidSchema)(m, l)) {
              let h = i.name("valid");
              if (
                (n.subschema(
                  { keyword: "unevaluatedProperties", dataProp: p, dataPropType: r.Type.Str },
                  h
                ),
                !_)
              )
                i.if((0, t.not)(h), () => i.break());
            }
          }
          function y(p, h) {
            return t._`!${p} || !${p}[${h}]`;
          }
          function b(p, h) {
            let g = [];
            for (let f in p) if (p[f] === !0) g.push(t._`${h} !== ${f}`);
            return (0, t.and)(...g);
          }
        }
      };
    e.default = a;
  }),
  sd = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = te(),
      r = ne(),
      s = {
        keyword: "unevaluatedItems",
        type: "array",
        schemaType: ["boolean", "object"],
        error: {
          message: ({ params: { len: a } }) => t.str`must NOT have more than ${a} items`,
          params: ({ params: { len: a } }) => t._`{limit: ${a}}`
        },
        code(a) {
          let { gen: n, schema: i, data: l, it: c } = a,
            d = c.items || 0;
          if (d === !0) return;
          let m = n.const("len", t._`${l}.length`);
          if (i === !1) (a.setParams({ len: d }), a.fail(t._`${m} > ${d}`));
          else if (typeof i == "object" && !(0, r.alwaysValidSchema)(c, i)) {
            let E = n.var("valid", t._`${m} <= ${d}`);
            (n.if((0, t.not)(E), () => _(E, d)), a.ok(E));
          }
          c.items = !0;
          function _(E, P) {
            n.forRange("i", P, m, (y) => {
              if (
                (a.subschema(
                  { keyword: "unevaluatedItems", dataProp: y, dataPropType: r.Type.Num },
                  E
                ),
                !c.allErrors)
              )
                n.if((0, t.not)(E), () => n.break());
            });
          }
        }
      };
    e.default = s;
  }),
  ad = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = rd(),
      r = sd(),
      s = [t.default, r.default];
    e.default = s;
  }),
  od = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = Ai(),
      r = Li(),
      s = xi(),
      a = Xu(),
      n = td(),
      i = ad(),
      l = Fi(),
      c = Hi(),
      d = [
        a.default,
        t.default,
        r.default,
        (0, s.default)(!0),
        l.default,
        c.metadataVocabulary,
        c.contentVocabulary,
        n.default,
        i.default
      ];
    e.default = d;
  }),
  nd = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/schema",
      $vocabulary: {
        "https://json-schema.org/draft/2020-12/vocab/core": !0,
        "https://json-schema.org/draft/2020-12/vocab/applicator": !0,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
        "https://json-schema.org/draft/2020-12/vocab/validation": !0,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
        "https://json-schema.org/draft/2020-12/vocab/content": !0
      },
      $dynamicAnchor: "meta",
      title: "Core and Validation specifications meta-schema",
      allOf: [
        { $ref: "meta/core" },
        { $ref: "meta/applicator" },
        { $ref: "meta/unevaluated" },
        { $ref: "meta/validation" },
        { $ref: "meta/meta-data" },
        { $ref: "meta/format-annotation" },
        { $ref: "meta/content" }
      ],
      type: ["object", "boolean"],
      $comment:
        "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
      properties: {
        definitions: {
          $comment: '"definitions" has been replaced by "$defs".',
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          deprecated: !0,
          default: {}
        },
        dependencies: {
          $comment:
            '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.',
          type: "object",
          additionalProperties: {
            anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }]
          },
          deprecated: !0,
          default: {}
        },
        $recursiveAnchor: {
          $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".',
          $ref: "meta/core#/$defs/anchorString",
          deprecated: !0
        },
        $recursiveRef: {
          $comment: '"$recursiveRef" has been replaced by "$dynamicRef".',
          $ref: "meta/core#/$defs/uriReferenceString",
          deprecated: !0
        }
      }
    };
  }),
  id = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/applicator",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 },
      $dynamicAnchor: "meta",
      title: "Applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        prefixItems: { $ref: "#/$defs/schemaArray" },
        items: { $dynamicRef: "#meta" },
        contains: { $dynamicRef: "#meta" },
        additionalProperties: { $dynamicRef: "#meta" },
        properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} },
        patternProperties: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          propertyNames: { format: "regex" },
          default: {}
        },
        dependentSchemas: {
          type: "object",
          additionalProperties: { $dynamicRef: "#meta" },
          default: {}
        },
        propertyNames: { $dynamicRef: "#meta" },
        if: { $dynamicRef: "#meta" },
        then: { $dynamicRef: "#meta" },
        else: { $dynamicRef: "#meta" },
        allOf: { $ref: "#/$defs/schemaArray" },
        anyOf: { $ref: "#/$defs/schemaArray" },
        oneOf: { $ref: "#/$defs/schemaArray" },
        not: { $dynamicRef: "#meta" }
      },
      $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }
    };
  }),
  cd = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/unevaluated",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 },
      $dynamicAnchor: "meta",
      title: "Unevaluated applicator vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        unevaluatedItems: { $dynamicRef: "#meta" },
        unevaluatedProperties: { $dynamicRef: "#meta" }
      }
    };
  }),
  ld = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/content",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": !0 },
      $dynamicAnchor: "meta",
      title: "Content vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        contentEncoding: { type: "string" },
        contentMediaType: { type: "string" },
        contentSchema: { $dynamicRef: "#meta" }
      }
    };
  }),
  ud = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/core",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": !0 },
      $dynamicAnchor: "meta",
      title: "Core vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        $id: {
          $ref: "#/$defs/uriReferenceString",
          $comment: "Non-empty fragments not allowed.",
          pattern: "^[^#]*#?$"
        },
        $schema: { $ref: "#/$defs/uriString" },
        $ref: { $ref: "#/$defs/uriReferenceString" },
        $anchor: { $ref: "#/$defs/anchorString" },
        $dynamicRef: { $ref: "#/$defs/uriReferenceString" },
        $dynamicAnchor: { $ref: "#/$defs/anchorString" },
        $vocabulary: {
          type: "object",
          propertyNames: { $ref: "#/$defs/uriString" },
          additionalProperties: { type: "boolean" }
        },
        $comment: { type: "string" },
        $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } }
      },
      $defs: {
        anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" },
        uriString: { type: "string", format: "uri" },
        uriReferenceString: { type: "string", format: "uri-reference" }
      }
    };
  }),
  dd = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/format-annotation",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 },
      $dynamicAnchor: "meta",
      title: "Format vocabulary meta-schema for annotation results",
      type: ["object", "boolean"],
      properties: { format: { type: "string" } }
    };
  }),
  hd = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/meta-data",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 },
      $dynamicAnchor: "meta",
      title: "Meta-data vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        title: { type: "string" },
        description: { type: "string" },
        default: !0,
        deprecated: { type: "boolean", default: !1 },
        readOnly: { type: "boolean", default: !1 },
        writeOnly: { type: "boolean", default: !1 },
        examples: { type: "array", items: !0 }
      }
    };
  }),
  md = K((e, t) => {
    t.exports = {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      $id: "https://json-schema.org/draft/2020-12/meta/validation",
      $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": !0 },
      $dynamicAnchor: "meta",
      title: "Validation vocabulary meta-schema",
      type: ["object", "boolean"],
      properties: {
        type: {
          anyOf: [
            { $ref: "#/$defs/simpleTypes" },
            { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }
          ]
        },
        const: !0,
        enum: { type: "array", items: !0 },
        multipleOf: { type: "number", exclusiveMinimum: 0 },
        maximum: { type: "number" },
        exclusiveMaximum: { type: "number" },
        minimum: { type: "number" },
        exclusiveMinimum: { type: "number" },
        maxLength: { $ref: "#/$defs/nonNegativeInteger" },
        minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        pattern: { type: "string", format: "regex" },
        maxItems: { $ref: "#/$defs/nonNegativeInteger" },
        minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        uniqueItems: { type: "boolean", default: !1 },
        maxContains: { $ref: "#/$defs/nonNegativeInteger" },
        minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 },
        maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
        minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
        required: { $ref: "#/$defs/stringArray" },
        dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } }
      },
      $defs: {
        nonNegativeInteger: { type: "integer", minimum: 0 },
        nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 },
        simpleTypes: {
          enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] }
      }
    };
  }),
  pd = K((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let t = nd(),
      r = id(),
      s = cd(),
      a = ld(),
      n = ud(),
      i = dd(),
      l = hd(),
      c = md(),
      d = ["/properties"];
    function m(_) {
      return (
        [t, r, s, a, n, E(this, i), l, E(this, c)].forEach((P) =>
          this.addMetaSchema(P, void 0, !1)
        ),
        this
      );
      function E(P, y) {
        return _ ? P.$dataMetaSchema(y, d) : y;
      }
    }
    e.default = m;
  }),
  fd = K((e, t) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.MissingRefError =
        e.ValidationError =
        e.CodeGen =
        e.Name =
        e.nil =
        e.stringify =
        e.str =
        e._ =
        e.KeywordCxt =
        e.Ajv2020 =
          void 0));
    let r = ji(),
      s = od(),
      a = Ki(),
      n = pd(),
      i = "https://json-schema.org/draft/2020-12/schema";
    var l = class extends r.default {
      constructor(E = {}) {
        super({ ...E, dynamicRef: !0, next: !0, unevaluated: !0 });
      }
      _addVocabularies() {
        if (
          (super._addVocabularies(),
          s.default.forEach((E) => this.addVocabulary(E)),
          this.opts.discriminator)
        )
          this.addKeyword(a.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        let { $data: E, meta: P } = this.opts;
        if (!P) return;
        (n.default.call(this, E), (this.refs["http://json-schema.org/schema"] = i));
      }
      defaultMeta() {
        return (this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(i) ? i : void 0));
      }
    };
    ((e.Ajv2020 = l),
      (t.exports = e = l),
      (t.exports.Ajv2020 = l),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.default = l));
    var c = as();
    Object.defineProperty(e, "KeywordCxt", {
      enumerable: !0,
      get: function () {
        return c.KeywordCxt;
      }
    });
    var d = te();
    (Object.defineProperty(e, "_", {
      enumerable: !0,
      get: function () {
        return d._;
      }
    }),
      Object.defineProperty(e, "str", {
        enumerable: !0,
        get: function () {
          return d.str;
        }
      }),
      Object.defineProperty(e, "stringify", {
        enumerable: !0,
        get: function () {
          return d.stringify;
        }
      }),
      Object.defineProperty(e, "nil", {
        enumerable: !0,
        get: function () {
          return d.nil;
        }
      }),
      Object.defineProperty(e, "Name", {
        enumerable: !0,
        get: function () {
          return d.Name;
        }
      }),
      Object.defineProperty(e, "CodeGen", {
        enumerable: !0,
        get: function () {
          return d.CodeGen;
        }
      }));
    var m = go();
    Object.defineProperty(e, "ValidationError", {
      enumerable: !0,
      get: function () {
        return m.default;
      }
    });
    var _ = os();
    Object.defineProperty(e, "MissingRefError", {
      enumerable: !0,
      get: function () {
        return _.default;
      }
    });
  }),
  Sd = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.formatNames = e.fastFormats = e.fullFormats = void 0));
    function t(N, x) {
      return { validate: N, compare: x };
    }
    ((e.fullFormats = {
      date: t(n, i),
      time: t(c(!0), d),
      "date-time": t(E(!0), P),
      "iso-time": t(c(), m),
      "iso-date-time": t(E(), y),
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: h,
      "uri-reference":
        /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      "uri-template":
        /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname:
        /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex: H,
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      byte: f,
      int32: { type: "number", validate: R },
      int64: { type: "number", validate: S },
      float: { type: "number", validate: k },
      double: { type: "number", validate: k },
      password: !0,
      binary: !0
    }),
      (e.fastFormats = {
        ...e.fullFormats,
        date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, i),
        time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
        "date-time": t(
          /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
          P
        ),
        "iso-time": t(
          /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
          m
        ),
        "iso-date-time": t(
          /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
          y
        ),
        uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
        "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
        email:
          /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
      }),
      (e.formatNames = Object.keys(e.fullFormats)));
    function r(N) {
      return N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0);
    }
    let s = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
      a = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function n(N) {
      let x = s.exec(N);
      if (!x) return !1;
      let W = +x[1],
        G = +x[2],
        se = +x[3];
      return G >= 1 && G <= 12 && se >= 1 && se <= (G === 2 && r(W) ? 29 : a[G]);
    }
    function i(N, x) {
      if (!(N && x)) return;
      if (N > x) return 1;
      if (N < x) return -1;
      return 0;
    }
    let l = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(N) {
      return function (W) {
        let G = l.exec(W);
        if (!G) return !1;
        let se = +G[1],
          le = +G[2],
          ie = +G[3],
          Se = G[4],
          ae = G[5] === "-" ? -1 : 1,
          O = +(G[6] || 0),
          U = +(G[7] || 0);
        if (O > 23 || U > 59 || (N && !Se)) return !1;
        if (se <= 23 && le <= 59 && ie < 60) return !0;
        let F = le - U * ae,
          w = se - O * ae - (F < 0 ? 1 : 0);
        return (w === 23 || w === -1) && (F === 59 || F === -1) && ie < 61;
      };
    }
    function d(N, x) {
      if (!(N && x)) return;
      let W = new Date("2020-01-01T" + N).valueOf(),
        G = new Date("2020-01-01T" + x).valueOf();
      if (!(W && G)) return;
      return W - G;
    }
    function m(N, x) {
      if (!(N && x)) return;
      let W = l.exec(N),
        G = l.exec(x);
      if (!(W && G)) return;
      if (((N = W[1] + W[2] + W[3]), (x = G[1] + G[2] + G[3]), N > x)) return 1;
      if (N < x) return -1;
      return 0;
    }
    let _ = /t|\s/i;
    function E(N) {
      let x = c(N);
      return function (G) {
        let se = G.split(_);
        return se.length === 2 && n(se[0]) && x(se[1]);
      };
    }
    function P(N, x) {
      if (!(N && x)) return;
      let W = new Date(N).valueOf(),
        G = new Date(x).valueOf();
      if (!(W && G)) return;
      return W - G;
    }
    function y(N, x) {
      if (!(N && x)) return;
      let [W, G] = N.split(_),
        [se, le] = x.split(_),
        ie = i(W, se);
      if (ie === void 0) return;
      return ie || d(G, le);
    }
    let b = /\/|:/,
      p =
        /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function h(N) {
      return b.test(N) && p.test(N);
    }
    let g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function f(N) {
      return ((g.lastIndex = 0), g.test(N));
    }
    let z = -2147483648,
      C = 2147483647;
    function R(N) {
      return Number.isInteger(N) && N <= C && N >= z;
    }
    function S(N) {
      return Number.isInteger(N);
    }
    function k() {
      return !0;
    }
    let L = /[^\\]\\Z/;
    function H(N) {
      if (L.test(N)) return !1;
      try {
        return (new RegExp(N), !0);
      } catch (x) {
        return !1;
      }
    }
  }),
  gd = K((e) => {
    (Object.defineProperty(e, "__esModule", { value: !0 }), (e.formatLimitDefinition = void 0));
    let t = Ji(),
      r = te(),
      s = r.operators,
      a = {
        formatMaximum: { okStr: "<=", ok: s.LTE, fail: s.GT },
        formatMinimum: { okStr: ">=", ok: s.GTE, fail: s.LT },
        formatExclusiveMaximum: { okStr: "<", ok: s.LT, fail: s.GTE },
        formatExclusiveMinimum: { okStr: ">", ok: s.GT, fail: s.LTE }
      },
      n = {
        message: ({ keyword: l, schemaCode: c }) => r.str`should be ${a[l].okStr} ${c}`,
        params: ({ keyword: l, schemaCode: c }) => r._`{comparison: ${a[l].okStr}, limit: ${c}}`
      };
    e.formatLimitDefinition = {
      keyword: Object.keys(a),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: n,
      code(l) {
        let { gen: c, data: d, schemaCode: m, keyword: _, it: E } = l,
          { opts: P, self: y } = E;
        if (!P.validateFormats) return;
        let b = new t.KeywordCxt(E, y.RULES.all.format.definition, "format");
        if (b.$data) p();
        else h();
        function p() {
          let f = c.scopeValue("formats", { ref: y.formats, code: P.code.formats }),
            z = c.const("fmt", r._`${f}[${b.schemaCode}]`);
          l.fail$data(
            (0, r.or)(
              r._`typeof ${z} != "object"`,
              r._`${z} instanceof RegExp`,
              r._`typeof ${z}.compare != "function"`,
              g(z)
            )
          );
        }
        function h() {
          let f = b.schema,
            z = y.formats[f];
          if (!z || z === !0) return;
          if (typeof z != "object" || z instanceof RegExp || typeof z.compare != "function")
            throw Error(`"${_}": format "${f}" does not define "compare" function`);
          let C = c.scopeValue("formats", {
            key: f,
            ref: z,
            code: P.code.formats ? r._`${P.code.formats}${(0, r.getProperty)(f)}` : void 0
          });
          l.fail$data(g(C));
        }
        function g(f) {
          return r._`${f}.compare(${d}, ${m}) ${a[_].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    let i = (l) => (l.addKeyword(e.formatLimitDefinition), l);
    e.default = i;
  }),
  _d = K((e, t) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
    let r = Sd(),
      s = gd(),
      a = te(),
      n = new a.Name("fullFormats"),
      i = new a.Name("fastFormats"),
      l = (d, m = { keywords: !0 }) => {
        if (Array.isArray(m)) return (c(d, m, r.fullFormats, n), d);
        let [_, E] = m.mode === "fast" ? [r.fastFormats, i] : [r.fullFormats, n];
        if ((c(d, m.formats || r.formatNames, _, E), m.keywords)) (0, s.default)(d);
        return d;
      };
    l.get = (d, m = "full") => {
      let _ = (m === "fast" ? r.fastFormats : r.fullFormats)[d];
      if (!_) throw Error(`Unknown format "${d}"`);
      return _;
    };
    function c(d, m, _, E) {
      var P, y;
      ((P = (y = d.opts.code).formats) !== null && P !== void 0) ||
        (y.formats = a._`require("ajv-formats/dist/formats").${E}`);
      for (let b of m) d.addFormat(b, _[b]);
    }
    ((t.exports = e = l), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = l));
  }),
  yd = Ji(),
  vd = fd(),
  bd = $s(_d(), 1),
  Rd = new Set([
    "https://json-schema.org/draft/2020-12/schema",
    "http://json-schema.org/draft/2020-12/schema"
  ]),
  zd = bd.default;
function wd() {
  let e = new vd.Ajv2020({ strict: !1, validateFormats: !0, validateSchema: !1, allErrors: !0 });
  return (zd(e), e);
}
var Jen = class {
    _ajv;
    _userAjv;
    constructor(e) {
      ((this._userAjv = e !== void 0), (this._ajv = e));
    }
    get ajv() {
      return (this._ajv ??= wd());
    }
    getValidator(e) {
      if (
        !this._userAjv &&
        "$schema" in e &&
        typeof e.$schema === "string" &&
        !Rd.has(e.$schema.replace(/#$/, ""))
      ) {
        let s = e.$schema.slice(0, 200);
        throw Error(
          `JSON Schema declares an unsupported dialect ("$schema": "${s}"). The default validator supports JSON Schema 2020-12 only; pass a pre-configured Ajv instance to AjvJsonSchemaValidator(ajv) to validate other dialects.`
        );
      }
      let t = this.ajv,
        r =
          "$id" in e && typeof e.$id === "string"
            ? (t.getSchema(e.$id) ?? t.compile(e))
            : t.compile(e);
      return (s) =>
        r(s)
          ? { valid: !0, data: s, errorMessage: void 0 }
          : { valid: !1, data: void 0, errorMessage: t.errorsText(r.errors) };
    }
  },
  Fh = yd.Ajv;
var Wi = !1;
var ns = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthClientFlowError" });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
        );
      return Oe(this, e);
    }
    constructor(e) {
      super(e);
      ((this.name = new.target.name), bt(this, new.target));
    }
  },
  uft = class extends ns {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.IssuerMismatchError" });
    }
    kind;
    expected;
    received;
    constructor(e, t, r) {
      super(
        `Issuer mismatch in ${e === "metadata" ? "authorization server metadata (RFC 8414 \xA73.3)" : "authorization response (RFC 9207)"}: expected ${JSON.stringify(t)}, received ${JSON.stringify(r)}`
      );
      ((this.kind = e), (this.expected = t), (this.received = r));
    }
  },
  jTr = class extends ns {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.RegistrationRejectedError" });
    }
    status;
    body;
    submittedMetadata;
    constructor(e) {
      super(`Dynamic Client Registration rejected (HTTP ${e.status}): ${e.body}`);
      ((this.status = e.status),
        (this.body = e.body),
        (this.submittedMetadata = e.submittedMetadata));
    }
  },
  uc = class extends ns {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.InsecureTokenEndpointError" });
    }
    tokenEndpoint;
    constructor(e) {
      super(
        `Refusing to send credentials to non-https token endpoint '${e}'. OAuth token requests MUST use TLS (localhost / 127.0.0.1 / ::1 are exempt).`
      );
      this.tokenEndpoint = e;
    }
  },
  gn = class extends ns {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.AuthorizationServerMismatchError" });
    }
    constructor(e, t) {
      super(
        `Authorization server changed between redirect and callback (redirected to ${JSON.stringify(e)}, callback resolved ${JSON.stringify(t)}); refusing to send authorization_code/code_verifier to a different token endpoint`
      );
      ((this.recordedIssuer = e), (this.currentIssuer = t));
    }
  },
  Yi = class extends ns {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.InsufficientScopeError" });
    }
    requiredScope;
    resourceMetadataUrl;
    errorDescription;
    constructor(e) {
      super(`Insufficient scope${e.requiredScope ? `: required "${e.requiredScope}"` : ""}`);
      ((this.requiredScope = e.requiredScope),
        (this.resourceMetadataUrl = e.resourceMetadataUrl),
        (this.errorDescription = e.errorDescription));
    }
  };
function Xi(e, t, r) {
  if (e === void 0) return;
  if (e.issuer === void 0) {
    if (r?.canPersistStamp !== !1)
      console.warn(
        "[mcp-sdk] SEP-2352: stored OAuth credential has no 'issuer' stamp (pre-upgrade storage or provider not round-tripping the value). SEP-2352 isolation is inactive for this read; ensure your provider round-trips the issuer field."
      );
    return e;
  }
  return dc(e.issuer, t) ? e : void 0;
}
function dc(e, t) {
  return (
    e === t ||
    (e.endsWith("/") && e.slice(0, -1) === t) ||
    (t.endsWith("/") && t.slice(0, -1) === e)
  );
}
function hc(e) {
  if (e == null) return !1;
  let t = e;
  return typeof t.tokens === "function" && typeof t.clientInformation === "function";
}
async function $d(e, t, r) {
  let { resourceMetadataUrl: s, scope: a } = o1e(t.response);
  if (
    (await BDt(e, {
      serverUrl: t.serverUrl,
      resourceMetadataUrl: s,
      scope: a,
      fetchFn: t.fetchFn,
      ...r
    })) !== "AUTHORIZED"
  )
    throw new nO();
}
function mc(e, t) {
  return {
    token: async () => (await e.tokens())?.access_token,
    onUnauthorized: async (r) => $d(e, r, t)
  };
}
var nO = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnauthorizedError" });
  }
  static [Symbol.hasInstance](e) {
    return Oe(this, e);
  }
  static isInstance(e) {
    if (typeof this !== "function")
      throw TypeError(
        "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
      );
    return Oe(this, e);
  }
  constructor(e) {
    super(e ?? "Unauthorized");
    ((this.name = "UnauthorizedError"), bt(this, new.target));
  }
};
function Ro(e) {
  return e?.authorization_response_iss_parameter_supported === !0;
}
function zo({ iss: e, expectedIssuer: t, issParameterSupported: r }) {
  if (t === void 0) return;
  if (e === void 0) {
    if (r) throw new uft("authorization_response", t, void 0);
    return;
  }
  if (e !== t) throw new uft("authorization_response", t, e);
}
function _n(...e) {
  let t = new Set();
  for (let r of e) {
    if (!r) continue;
    for (let s of r.split(/\s+/)) if (s) t.add(s);
  }
  return t.size > 0 ? [...t].join(" ") : void 0;
}
function Ed(e, t) {
  if (!e) return !1;
  let r = new Set((t ?? "").split(/\s+/).filter(Boolean));
  for (let s of e.split(/\s+/)) if (s && !r.has(s)) return !0;
  return !1;
}
async function pc(e, t, r, s, a) {
  if (typeof e === "string") return { authorizationCode: e, iss: t };
  let n = e.get("iss") ?? void 0,
    i = e.get("code");
  if (i) return { authorizationCode: i, iss: n };
  let l = (await r.discoveryState?.())?.authorizationServerMetadata;
  if (!l)
    try {
      l = (await GTr(s, a)).authorizationServerMetadata;
    } catch {
      l = void 0;
    }
  if (!l) throw new nO("Authorization callback failed and the issuer could not be verified");
  zo({ iss: n, expectedIssuer: l.issuer, issParameterSupported: Ro(l) });
  let c = e.get("error");
  if (c) throw new y4(c, e.get("error_description") ?? c, e.get("error_uri") ?? void 0);
  throw new nO("Authorization callback contained neither `code` nor `error`");
}
function Pd(e) {
  return ["client_secret_basic", "client_secret_post", "none"].includes(e);
}
var yn = "code",
  vn = "S256";
function Td(e, t) {
  let r = e.client_secret !== void 0;
  if (
    "token_endpoint_auth_method" in e &&
    e.token_endpoint_auth_method &&
    Pd(e.token_endpoint_auth_method) &&
    (t.length === 0 || t.includes(e.token_endpoint_auth_method))
  )
    return e.token_endpoint_auth_method;
  if (t.length === 0) return r ? "client_secret_basic" : "none";
  if (r && t.includes("client_secret_basic")) return "client_secret_basic";
  if (r && t.includes("client_secret_post")) return "client_secret_post";
  if (t.includes("none")) return "none";
  return r ? "client_secret_post" : "none";
}
function kd(e, t, r, s) {
  let { client_id: a, client_secret: n } = t;
  switch (e) {
    case "client_secret_basic":
      qd(a, n, r);
      return;
    case "client_secret_post":
      Id(a, n, s);
      return;
    case "none":
      Od(a, s);
      return;
    default:
      throw Error(`Unsupported client authentication method: ${e}`);
  }
}
function qd(e, t, r) {
  if (!t) throw Error("client_secret_basic authentication requires a client_secret");
  let s = btoa(`${e}:${t}`);
  r.set("Authorization", `Basic ${s}`);
}
function Id(e, t, r) {
  if ((r.set("client_id", e), t)) r.set("client_secret", t);
}
function Od(e, t) {
  t.set("client_id", e);
}
function fc(e) {
  return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e === "::1";
}
function Nd(e) {
  let t = new URL(String(e));
  if (t.protocol !== "https:" && !fc(t.hostname)) throw new uc(t.href);
  return t;
}
function Md(e) {
  for (let t of e ?? []) {
    let r;
    try {
      r = new URL(t);
    } catch {
      continue;
    }
    if (r.protocol !== "http:" && r.protocol !== "https:") return "native";
    if (fc(r.hostname)) return "native";
  }
  return "web";
}
function jd(e) {
  let t = e.clientMetadata;
  return {
    ...t,
    grant_types:
      t.grant_types ??
      (e.redirectUrl === void 0 ? void 0 : ["authorization_code", "refresh_token"]),
    application_type: t.application_type ?? Md(t.redirect_uris)
  };
}
async function Zi(e) {
  let t = e instanceof Response ? e.status : void 0,
    r = e instanceof Response ? await e.text() : e;
  try {
    let s = FDt.parse(JSON.parse(r));
    return y4.fromResponse(s);
  } catch (s) {
    let a = `${t ? `HTTP ${t}: ` : ""}Invalid OAuth error response: ${s}. Raw body: ${r}`;
    return new y4(Uae.ServerError, a);
  }
}
async function BDt(e, t) {
  try {
    return await bn(e, t);
  } catch (r) {
    if (r instanceof y4) {
      if (r.code === Uae.InvalidClient || r.code === Uae.UnauthorizedClient)
        return (
          await e.invalidateCredentials?.("client"),
          await e.invalidateCredentials?.("tokens"),
          await bn(e, t)
        );
      else if (r.code === Uae.InvalidGrant)
        return (await e.invalidateCredentials?.("tokens"), await bn(e, t));
    }
    throw r;
  }
}
function Ad(e) {
  let { requestedScope: t, resourceMetadata: r, authServerMetadata: s, clientMetadata: a } = e,
    n = t || r?.scopes_supported?.join(" ") || a.scope;
  if (
    n &&
    s?.scopes_supported?.includes("offline_access") &&
    !n.split(" ").includes("offline_access") &&
    a.grant_types?.includes("refresh_token")
  )
    n = `${n} offline_access`;
  return n;
}
async function bn(
  e,
  {
    serverUrl: t,
    authorizationCode: r,
    iss: s,
    scope: a,
    resourceMetadataUrl: n,
    fetchFn: i,
    skipIssuerMetadataValidation: l,
    forceReauthorization: c
  }
) {
  let d = jd(e),
    m = await e.discoveryState?.(),
    _,
    E,
    P,
    y,
    b = n;
  if (!b && m?.resourceMetadataUrl) b = new URL(m.resourceMetadataUrl);
  if (m?.authorizationServerUrl) {
    if (
      ((E = m.authorizationServerUrl),
      (_ = m.resourceMetadata),
      (P =
        m.authorizationServerMetadata ?? (await jDt(E, { fetchFn: i, skipIssuerValidation: l }))),
      !_)
    )
      try {
        _ = await WTr(t, { resourceMetadataUrl: b }, i);
      } catch (N) {
        if (N instanceof TypeError) throw N;
      }
    if (P !== m.authorizationServerMetadata || _ !== m.resourceMetadata)
      await e.saveDiscoveryState?.({
        authorizationServerUrl: String(E),
        resourceMetadataUrl: b?.toString(),
        resourceMetadata: _,
        authorizationServerMetadata: P
      });
  } else {
    let N = await GTr(t, { resourceMetadataUrl: b, fetchFn: i, skipIssuerMetadataValidation: l });
    ((E = N.authorizationServerUrl),
      (P = N.authorizationServerMetadata),
      (_ = N.resourceMetadata),
      (y = {
        authorizationServerUrl: String(E),
        resourceMetadataUrl: b?.toString(),
        resourceMetadata: _,
        authorizationServerMetadata: P
      }));
  }
  let p = P?.issuer ?? String(E),
    h = { issuer: p };
  if ((await e.saveAuthorizationServerUrl?.(p), r !== void 0)) {
    let N = m?.authorizationServerMetadata?.issuer ?? m?.authorizationServerUrl;
    if (N === void 0) {
      if (e.saveDiscoveryState !== void 0)
        throw new gn(
          "discoveryState was not available on the callback leg; ensure your provider persists discoveryState alongside codeVerifier",
          p
        );
      console.warn(
        "[mcp-sdk] OAuthClientProvider does not implement saveDiscoveryState()/discoveryState(); the SEP-2352 callback-leg authorization-server binding cannot be checked. Implement discoveryState (persist alongside codeVerifier) \u2014 see docs/migration/upgrade-to-v2.md \xA7SEP-2352."
      );
    } else if (!dc(N, p)) throw new gn(N, p);
  }
  if (y) await e.saveDiscoveryState?.(y);
  let g = await Ud(t, e, _);
  if (g) await e.saveResourceUrl?.(String(g));
  let f = Ad({
      requestedScope: a,
      resourceMetadata: _,
      authServerMetadata: P,
      clientMetadata: e.clientMetadata
    }),
    z = await Promise.resolve(e.clientInformation(h)),
    C = Xi(z, p, { canPersistStamp: e.saveClientInformation !== void 0 });
  if (C === void 0 && z?.issuer && e.saveClientInformation === void 0) throw new gn(z.issuer, p);
  if (C && C.issuer === void 0) ((C = { ...C, issuer: p }), await e.saveClientInformation?.(C, h));
  if (!C) {
    if (r !== void 0)
      throw Error(
        "Existing OAuth client information is required when exchanging an authorization code"
      );
    let N = P?.client_id_metadata_document_supported === !0,
      x = e.clientMetadataUrl;
    if (x && !Ld(x))
      throw new y4(
        Uae.InvalidClientMetadata,
        `clientMetadataUrl must be a valid HTTPS URL with a non-root pathname, got: ${x}`
      );
    if (N && x) ((C = { client_id: x, issuer: p }), await e.saveClientInformation?.(C, h));
    else {
      if (!e.saveClientInformation)
        throw Error("OAuth client information must be saveable for dynamic registration");
      ((C = {
        ...(await Kd(E, { metadata: P, clientMetadata: d, scope: f, fetchFn: i })),
        issuer: p
      }),
        await e.saveClientInformation(C, h));
    }
  }
  let R = !e.redirectUrl;
  if (r !== void 0 || R) {
    if (r !== void 0) zo({ iss: s, expectedIssuer: P?.issuer, issParameterSupported: Ro(P) });
    let N = await Hd(e, E, {
      metadata: P,
      resource: g,
      authorizationCode: r,
      iss: s,
      scope: f,
      fetchFn: i
    });
    return (await e.saveTokens({ ...N, issuer: p }, h), "AUTHORIZED");
  }
  let S = Xi(await e.tokens(h), p);
  if (S && S.issuer === void 0) ((S = { ...S, issuer: p }), await e.saveTokens(S, h));
  if (S?.refresh_token && !c)
    try {
      let N = await bbo(E, {
        metadata: P,
        clientInformation: C,
        refreshToken: S.refresh_token,
        resource: g,
        addClientAuthentication: e.addClientAuthentication,
        fetchFn: i
      });
      return (await e.saveTokens({ ...N, issuer: p }, h), "AUTHORIZED");
    } catch (N) {
      if (N instanceof uc) throw N;
      if (!(N instanceof y4) || N.code === Uae.ServerError)
        ;
      else throw N;
    }
  let k = e.state ? await e.state() : void 0,
    { authorizationUrl: L, codeVerifier: H } = await _bo(E, {
      metadata: P,
      clientInformation: C,
      state: k,
      redirectUrl: e.redirectUrl,
      scope: f,
      resource: g
    });
  return (await e.saveCodeVerifier(H), await e.redirectToAuthorization(L), "REDIRECT");
}
function Ld(e) {
  if (!e) return !1;
  try {
    let t = new URL(e);
    return t.protocol === "https:" && t.pathname !== "/";
  } catch {
    return !1;
  }
}
async function Ud(e, t, r) {
  let s = Jn(e);
  if (t.validateResourceURL) return await t.validateResourceURL(s, r?.resource);
  if (!r) return;
  if (!Gn({ requestedResource: s, configuredResource: r.resource }))
    throw Error(`Protected resource ${r.resource} does not match expected ${s} (or origin)`);
  return new URL(r.resource);
}
function o1e(e) {
  let t = e.headers.get("WWW-Authenticate");
  if (!t) return {};
  let [r, s] = t.split(" ");
  if (r?.toLowerCase() !== "bearer" || !s) return {};
  let a = yo(e, "resource_metadata") || void 0,
    n;
  if (a)
    try {
      n = new URL(a);
    } catch {}
  let i = yo(e, "scope") || void 0,
    l = yo(e, "error") || void 0,
    c = yo(e, "error_description") || void 0;
  return { resourceMetadataUrl: n, scope: i, error: l, errorDescription: c };
}
function yo(e, t) {
  let r = e.headers.get("WWW-Authenticate");
  if (!r) return null;
  let s = new RegExp(String.raw`${t}=(?:"([^"]+)"|([^\s,]+))`),
    a = r.match(s);
  if (a) {
    let n = a[1] || a[2];
    if (n) return n;
  }
  return null;
}
async function WTr(e, t, r = fetch) {
  let s = await xd(e, "oauth-protected-resource", r, {
    protocolVersion: t?.protocolVersion,
    metadataUrl: t?.resourceMetadataUrl
  });
  if (!s || s.status === 404)
    throw (
      await s?.text?.().catch(() => {}),
      Error("Resource server does not implement OAuth 2.0 Protected Resource Metadata.")
    );
  if (!s.ok)
    throw (
      await s.text?.().catch(() => {}),
      Error(`HTTP ${s.status} trying to load well-known OAuth protected resource metadata.`)
    );
  return Br.parse(await s.json());
}
async function Sc(e, t, r = fetch) {
  try {
    return await r(e, { headers: t });
  } catch (s) {
    if (!(s instanceof TypeError) || !Wi) throw s;
    if (t)
      try {
        return await r(e, {});
      } catch (a) {
        if (!(a instanceof TypeError)) throw a;
        return;
      }
    return;
  }
}
function Dd(e, t = "", r = {}) {
  if (t.endsWith("/")) t = t.slice(0, -1);
  return r.prependPathname ? `${t}/.well-known/${e}` : `/.well-known/${e}${t}`;
}
async function Qi(e, t, r = fetch) {
  return await Sc(e, { "MCP-Protocol-Version": t }, r);
}
function Vd(e, t) {
  if (!e) return !0;
  if (t === "/") return !1;
  return (e.status >= 400 && e.status < 500) || e.status === 502;
}
async function xd(e, t, r, s) {
  let a = new URL(e),
    n = s?.protocolVersion ?? Ot,
    i;
  if (s?.metadataUrl) i = new URL(s.metadataUrl);
  else {
    let c = Dd(t, a.pathname);
    ((i = new URL(c, s?.metadataServerUrl ?? a)), (i.search = a.search));
  }
  let l = await Qi(i, n, r);
  if (!s?.metadataUrl && Vd(l, a.pathname)) l = await Qi(new URL(`/.well-known/${t}`, a), n, r);
  return l;
}
function Fd(e) {
  let t = typeof e === "string" ? new URL(e) : e,
    r = t.pathname !== "/",
    s = [];
  if (!r)
    return (
      s.push(
        { url: new URL("/.well-known/oauth-authorization-server", t.origin), type: "oauth" },
        { url: new URL("/.well-known/openid-configuration", t.origin), type: "oidc" }
      ),
      s
    );
  let a = t.pathname;
  if (a.endsWith("/")) a = a.slice(0, -1);
  return (
    s.push(
      { url: new URL(`/.well-known/oauth-authorization-server${a}`, t.origin), type: "oauth" },
      { url: new URL(`/.well-known/openid-configuration${a}`, t.origin), type: "oidc" },
      { url: new URL(`${a}/.well-known/openid-configuration`, t.origin), type: "oidc" }
    ),
    s
  );
}
async function jDt(
  e,
  { fetchFn: t = fetch, protocolVersion: r = Ot, skipIssuerValidation: s = !1 } = {}
) {
  let a = { "MCP-Protocol-Version": r, Accept: "application/json" },
    n = Fd(e);
  for (let { url: i, type: l } of n) {
    let c = await Sc(i, a, t);
    if (!c) continue;
    if (!c.ok) {
      if (
        (await c.text?.().catch(() => {}), (c.status >= 400 && c.status < 500) || c.status === 502)
      )
        continue;
      throw Error(
        `HTTP ${c.status} trying to load ${l === "oauth" ? "OAuth" : "OpenID provider"} metadata from ${i}`
      );
    }
    let d = l === "oauth" ? cft.parse(await c.json()) : NDt.parse(await c.json());
    if (!s) {
      let m = typeof e === "string" ? e : e.href;
      if (!(d.issuer === m || (m.endsWith("/") && d.issuer === m.slice(0, -1))))
        throw new uft("metadata", m, d.issuer);
    }
    return d;
  }
}
async function GTr(e, t) {
  let r, s;
  try {
    if (
      ((r = await WTr(e, { resourceMetadataUrl: t?.resourceMetadataUrl }, t?.fetchFn)),
      r.authorization_servers && r.authorization_servers.length > 0)
    )
      s = r.authorization_servers[0];
  } catch (n) {
    if (n instanceof TypeError) throw n;
  }
  if (!s) s = String(new URL("/", e));
  let a = await jDt(s, {
    fetchFn: t?.fetchFn,
    skipIssuerValidation: t?.skipIssuerMetadataValidation
  });
  return { authorizationServerUrl: s, authorizationServerMetadata: a, resourceMetadata: r };
}
async function _bo(
  e,
  { metadata: t, clientInformation: r, redirectUrl: s, scope: a, state: n, resource: i }
) {
  let l;
  if (t) {
    if (((l = new URL(t.authorization_endpoint)), !t.response_types_supported.includes(yn)))
      throw Error(`Incompatible auth server: does not support response type ${yn}`);
    if (t.code_challenge_methods_supported && !t.code_challenge_methods_supported.includes(vn))
      throw Error(`Incompatible auth server: does not support code challenge method ${vn}`);
  } else l = new URL("/authorize", e);
  let c = await Stn(),
    { code_verifier: d, code_challenge: m } = c;
  if (
    (l.searchParams.set("response_type", yn),
    l.searchParams.set("client_id", r.client_id),
    l.searchParams.set("code_challenge", m),
    l.searchParams.set("code_challenge_method", vn),
    l.searchParams.set("redirect_uri", String(s)),
    n)
  )
    l.searchParams.set("state", n);
  if (a) l.searchParams.set("scope", a);
  if (a?.split(" ").includes("offline_access")) l.searchParams.append("prompt", "consent");
  if (i) l.searchParams.set("resource", i.href);
  return { authorizationUrl: l, codeVerifier: d };
}
function gc(e, t, r) {
  return new URLSearchParams({
    grant_type: "authorization_code",
    code: e,
    code_verifier: t,
    redirect_uri: String(r)
  });
}
async function $n(
  e,
  {
    metadata: t,
    tokenRequestParams: r,
    clientInformation: s,
    addClientAuthentication: a,
    resource: n,
    fetchFn: i
  }
) {
  let l = Nd(t?.token_endpoint ?? new URL("/token", e)),
    c = new Headers({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    });
  if (n) r.set("resource", n.href);
  if (a) await a(c, r, l, t);
  else if (s) kd(Td(s, t?.token_endpoint_auth_methods_supported ?? []), s, c, r);
  let d = await (i ?? fetch)(l, { method: "POST", headers: c, body: r });
  if (!d.ok) throw await Zi(d);
  let m = await d.json();
  try {
    return $Dt.parse(m);
  } catch (_) {
    if (typeof m === "object" && m !== null && "error" in m) throw await Zi(JSON.stringify(m));
    throw _;
  }
}
async function YCs(
  e,
  {
    metadata: t,
    clientInformation: r,
    authorizationCode: s,
    iss: a,
    codeVerifier: n,
    redirectUri: i,
    resource: l,
    addClientAuthentication: c,
    fetchFn: d
  }
) {
  return (
    zo({ iss: a, expectedIssuer: t?.issuer, issParameterSupported: Ro(t) }),
    $n(e, {
      metadata: t,
      tokenRequestParams: gc(s, n, i),
      clientInformation: r,
      addClientAuthentication: c,
      resource: l,
      fetchFn: d
    })
  );
}
async function bbo(
  e,
  {
    metadata: t,
    clientInformation: r,
    refreshToken: s,
    resource: a,
    addClientAuthentication: n,
    fetchFn: i
  }
) {
  return {
    refresh_token: s,
    ...(await $n(e, {
      metadata: t,
      tokenRequestParams: new URLSearchParams({ grant_type: "refresh_token", refresh_token: s }),
      clientInformation: r,
      addClientAuthentication: n,
      resource: a,
      fetchFn: i
    }))
  };
}
async function Hd(
  e,
  t,
  { metadata: r, resource: s, authorizationCode: a, iss: n, scope: i, fetchFn: l } = {}
) {
  if (a !== void 0) zo({ iss: n, expectedIssuer: r?.issuer, issParameterSupported: Ro(r) });
  let c = i ?? e.clientMetadata.scope,
    d;
  if (e.prepareTokenRequest) d = await e.prepareTokenRequest(c);
  if (!d) {
    if (!a) throw Error("Either provider.prepareTokenRequest() or authorizationCode is required");
    if (!e.redirectUrl) throw Error("redirectUrl is required for authorization_code flow");
    d = gc(a, await e.codeVerifier(), e.redirectUrl);
  }
  let m = await e.clientInformation({ issuer: r?.issuer ?? String(t) });
  return $n(t, {
    metadata: r,
    tokenRequestParams: d,
    clientInformation: m ?? void 0,
    addClientAuthentication: e.addClientAuthentication,
    resource: s,
    fetchFn: l
  });
}
async function Kd(e, { metadata: t, clientMetadata: r, scope: s, fetchFn: a }) {
  let n;
  if (t) {
    if (!t.registration_endpoint)
      throw Error("Incompatible auth server: does not support dynamic client registration");
    n = new URL(t.registration_endpoint);
  } else n = new URL("/register", e);
  let i = { ...r, ...(s === void 0 ? {} : { scope: s }) },
    l = await (a ?? fetch)(n, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(i)
    });
  if (!l.ok) throw new jTr({ status: l.status, body: await l.text(), submittedMetadata: i });
  return Wr.parse(await l.json());
}
var vo = new Set([
    "tools/list",
    "prompts/list",
    "resources/list",
    "resources/templates/list",
    "server/discover"
  ]),
  Jd = class {
    _entries = new Map();
    _maxEntries;
    _stamp = 0;
    _cappedSize = 0;
    constructor(e) {
      this._maxEntries = e?.maxEntries ?? 512;
    }
    get size() {
      return this._entries.size;
    }
    get(e) {
      return this._entries.get(Rn(e));
    }
    set(e, t) {
      let r = Rn(e),
        s = vo.has(e.method),
        a = !this._entries.has(r);
      if (!s && a && this._maxEntries > 0 && this._cappedSize >= this._maxEntries) {
        for (let i of this._entries.keys())
          if (!vo.has(i.slice(0, i.indexOf("\x00")))) {
            (this._entries.delete(i), this._cappedSize--);
            break;
          }
      }
      let n = ++this._stamp;
      if ((this._entries.set(r, { ...t, stamp: n }), a && !s)) this._cappedSize++;
      return n;
    }
    delete(e) {
      if (this._entries.delete(Rn(e)) && !vo.has(e.method)) this._cappedSize--;
    }
    evict(e) {
      let t = `${e}\x00`,
        r = vo.has(e);
      for (let s of this._entries.keys())
        if (s.startsWith(t)) {
          if ((this._entries.delete(s), !r)) this._cappedSize--;
        }
    }
    clear() {
      (this._entries.clear(), (this._cappedSize = 0));
    }
  };
function Rn(e) {
  return `${e.method}\x00${JSON.stringify([e.partition ?? "", e.params ?? ""])}`;
}
function zn(e, t) {
  return t === void 0 ? e : `${e}\x00${t}`;
}
var Gd = 86400000,
  Bd = class {
    _evictionGeneration = new Map();
    _toolIndex;
    _toolOutputValidatorIndex;
    _serverIdentity = "";
    constructor(e, t, r = () => {}, s = "", a = Date.now) {
      ((this._store = e),
        (this._isUserSupplied = t),
        (this._reportError = r),
        (this._cachePartition = s),
        (this._now = a));
    }
    now() {
      return this._now();
    }
    setServerIdentity(e) {
      this._serverIdentity = e;
    }
    _partitionFor(e) {
      return JSON.stringify([this._serverIdentity, e === "public" ? "" : this._cachePartition]);
    }
    async _probe(e, t) {
      let r = { method: e, params: t ?? "" },
        s = this._partitionFor("private"),
        a = await this._store.get({ ...r, partition: s });
      if (a !== void 0) return a;
      let n = this._partitionFor("public");
      if (n === s) return;
      let i = await this._store.get({ ...r, partition: n });
      return i?.scope === "public" ? i : void 0;
    }
    async evict(e) {
      (this._evictionGeneration.set(e, (this._evictionGeneration.get(e) ?? 0) + 1),
        await this._deleteBoth(e, ""));
    }
    async _deleteBoth(e, t) {
      let r = this._partitionFor("private"),
        s = this._partitionFor("public");
      try {
        await this._store.delete({ method: e, params: t, partition: r });
      } catch (a) {
        this._reportError(a);
      }
      if (s !== r)
        try {
          await this._store.delete({ method: e, params: t, partition: s });
        } catch (a) {
          this._reportError(a);
        }
    }
    async evictKey(e, t) {
      let r = zn(e, t),
        s = this._evictionGeneration.get(r);
      if (s !== void 0) this._evictionGeneration.set(r, s + 1);
      await this._deleteBoth(e, t);
    }
    captureGeneration(e, t) {
      let r = zn(e, t),
        s = this._evictionGeneration.get(r) ?? 0;
      return (this._evictionGeneration.set(r, s), s);
    }
    async write(e, t, r, s) {
      if ((this._evictionGeneration.get(zn(e, s?.params)) ?? 0) !== r) return;
      let a = s?.params ?? "",
        n = this._partitionFor("private"),
        i = this._partitionFor("public"),
        l = (s?.scope ?? "private") === "public" ? i : n;
      try {
        await this._store.set(
          { method: e, params: a, partition: l },
          { value: Wd(t), expiresAt: s?.expiresAt, scope: s?.scope }
        );
      } catch (c) {
        this._reportError(c);
      }
      if (i !== n)
        try {
          await this._store.delete({ method: e, params: a, partition: l === n ? i : n });
        } catch (c) {
          this._reportError(c);
        }
    }
    async read(e, t) {
      let r = await this._probe(e, t);
      if (r?.expiresAt === void 0 || !(r.expiresAt > this.now())) return;
      try {
        let s = JSON.parse(r.value);
        if (typeof s !== "object" || s === null || Array.isArray(s))
          throw TypeError("cached document is not an object");
        return { value: s };
      } catch (s) {
        (this._reportError(s), await this._deleteBoth(e, t ?? ""));
        return;
      }
    }
    resetForReconnect() {
      if (!this._isUserSupplied) this._store.clear();
      (this._evictionGeneration.clear(),
        (this._toolIndex = void 0),
        (this._toolOutputValidatorIndex = void 0),
        (this._serverIdentity = ""));
    }
    async toolDefinition(e) {
      let t = await this._probe("tools/list");
      if (t === void 0) {
        this._toolIndex = void 0;
        return;
      }
      if (this._toolIndex?.stamp !== t.stamp) {
        let r = this._decodeListTools(t),
          s = new Map();
        if (r !== void 0) for (let a of r.tools) s.set(a.name, a);
        this._toolIndex = { stamp: t.stamp, byName: s };
      }
      return this._toolIndex.byName.get(e);
    }
    async outputValidator(e, t) {
      let r = await this._probe("tools/list");
      if (r === void 0) {
        this._toolOutputValidatorIndex = void 0;
        return;
      }
      if (this._toolOutputValidatorIndex?.stamp !== r.stamp) {
        let s = this._decodeListTools(r) ?? { tools: [] },
          a = new Map();
        for (let n of s.tools) {
          let i = t(n);
          if (i !== void 0) a.set(n.name, i);
        }
        this._toolOutputValidatorIndex = { stamp: r.stamp, byName: a };
      }
      return this._toolOutputValidatorIndex.byName.get(e);
    }
    _decodeListTools(e) {
      try {
        let t = JSON.parse(e.value);
        if (!Array.isArray(t?.tools) || !t.tools.every((r) => r !== null && typeof r === "object"))
          throw TypeError("cached tools/list document has a malformed tools array");
        return t;
      } catch (t) {
        this._reportError(t);
        return;
      }
    }
  };
function Wd(e) {
  let t;
  try {
    t = JSON.stringify(e);
  } catch (r) {
    throw TypeError(
      `cache value is not JSON-serializable: ${r instanceof Error ? r.message : String(r)}`
    );
  }
  if (typeof t !== "string")
    throw TypeError("cache value is not JSON-serializable: it has no JSON representation");
  return t;
}
var Yd = -32022,
  Xd = new Set([-32001, -32020, -32021]);
function Zd(e, t) {
  switch (e.kind) {
    case "result":
      return Qd(e.result, t);
    case "rpc-error":
      return _c(e, t);
    case "http-error":
      return eh(e, t);
    case "network-error":
      return ec(e.error, t);
    case "auth-required":
      return { kind: "error", error: e.error };
    case "closed":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return ec(Error("Connection closed during the version negotiation probe"), t);
    case "timeout":
      if (t.transportKind === "stdio") return { kind: "legacy" };
      return {
        kind: "error",
        error: new bi(
          ii.RequestTimeout,
          `Version negotiation probe timed out after ${e.timeoutMs}ms`,
          { timeout: e.timeoutMs }
        )
      };
    case "id-mismatch":
    case "malformed":
    case "stream-end":
      return { kind: "legacy" };
  }
}
function Qd(e, t) {
  let r = Je(lo).validateResult("server/discover", e);
  if (!r.ok) return { kind: "legacy" };
  let s = r.value.supportedVersions,
    a = t.clientModernVersions.find((n) => s.includes(n));
  if (a !== void 0) return { kind: "modern", version: a, discover: r.value };
  if (t.fallbackAvailable) return { kind: "legacy" };
  return { kind: "error", error: new co({ supported: [...s], requested: t.requestedVersion }) };
}
function _c(e, t) {
  let { code: r, message: s, data: a } = e;
  if (r === Yd) {
    let n = yc(a);
    if (n === void 0) return { kind: "legacy" };
    let i = new co({ supported: n, requested: sh(a) ?? t.requestedVersion }, s),
      l = rs(n),
      c = t.clientModernVersions.find((d) => l.includes(d));
    if (c !== void 0) return { kind: "corrective", version: c, error: i };
    if (l.length > 0) return { kind: "error", error: i };
    return t.fallbackAvailable ? { kind: "legacy" } : { kind: "error", error: i };
  }
  if (Xd.has(r)) return { kind: "legacy" };
  return { kind: "legacy" };
}
function eh(e, t) {
  let r = ah(e.body);
  if (r !== void 0) return _c(r, t);
  return { kind: "legacy" };
}
function ec(e, t) {
  if (t.environment === "browser" && th(e)) return { kind: "legacy" };
  return {
    kind: "error",
    error: new bi(ii.EraNegotiationFailed, `Version negotiation probe failed: ${rh(e)}`, {
      cause: e
    })
  };
}
function th(e) {
  return e instanceof TypeError || (e instanceof Error && e.name === "TypeError");
}
function rh(e) {
  return e instanceof Error ? e.message : String(e);
}
function yc(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.supported;
  if (!Array.isArray(t) || t.length === 0 || !t.every((r) => typeof r === "string")) return;
  return t;
}
function sh(e) {
  if (typeof e !== "object" || e === null) return;
  let t = e.requested;
  return typeof t === "string" ? t : void 0;
}
function ah(e) {
  if (e === void 0 || e === "") return;
  let t;
  try {
    t = JSON.parse(e);
  } catch {
    return;
  }
  if (typeof t !== "object" || t === null) return;
  let r = t.error;
  if (typeof r !== "object" || r === null) return;
  let { code: s, message: a, data: n } = r;
  if (typeof s !== "number") return;
  return { code: s, message: typeof a === "string" ? a : "", data: n };
}
var oh = "legacy";
function nh(e, t) {
  let r = e?.mode ?? oh;
  if (r === "legacy") return { kind: "legacy" };
  let s = e?.probe ?? {};
  if (typeof r === "object") {
    if (!Ge(r.pin))
      throw TypeError(
        `versionNegotiation: { pin: '${r.pin}' } is not a modern protocol revision \u2014 pinning is for 2026-07-28 and later; omit versionNegotiation (or use mode: 'legacy') for 2025-era servers.`
      );
    return { kind: "pin", version: r.pin, probe: s };
  }
  let a = t ? rs(t) : [];
  return {
    kind: "auto",
    modernVersions: a.length > 0 ? a : [...sn],
    fallbackAvailable: t ? an(t).length > 0 : !0,
    probe: s
  };
}
function tc() {
  let e = globalThis;
  return e.window !== void 0 && e.document !== void 0 ? "browser" : "node";
}
function rc(e) {
  return "stderr" in e && "pid" in e ? "stdio" : "http";
}
var ih = class e {
    _pending;
    _probeCounter = 0;
    _transportKind;
    _issuedIds = new Set();
    _errorSinceSend;
    _savedOnMessage;
    _savedOnError;
    _savedOnClose;
    _closeDelivered = !1;
    constructor(t) {
      ((this._transport = t),
        (this._savedOnMessage = t.onmessage),
        (this._savedOnError = t.onerror),
        (this._savedOnClose = t.onclose));
    }
    static async open(t, r) {
      let s = new e(t);
      ((s._transportKind = r),
        (t.onmessage = (a) => {
          let n = s._pending;
          if (n !== void 0 && (mOe(a) || sEe(a)) && a.id === n.id) {
            if (((s._pending = void 0), mOe(a))) n.resolve({ kind: "response", result: a.result });
            else n.resolve({ kind: "response", error: a.error });
            return;
          }
          if (
            n !== void 0 &&
            s._transportKind === "http" &&
            (mOe(a) || sEe(a)) &&
            !s._issuedIds.has(a.id)
          ) {
            s._pending = void 0;
            let i = sc(JSON.stringify(a.id)),
              l = Error(
                `server/discover probe reply did not echo the request id (expected ${JSON.stringify(n.id)}, got ${i}) \u2014 treating the server as pre-2026-07-28`
              );
            ((l.name = "McpProbeIdMismatchError"),
              s._savedOnError?.(l),
              n.resolve({ kind: "id-mismatch" }));
            return;
          }
        }),
        (t.onerror = (a) => {
          if (s._pending !== void 0 && s._errorSinceSend === void 0) s._errorSinceSend = a;
          let n = s._pending;
          if (n !== void 0 && s._transportKind === "http" && ac(a))
            setTimeout(() => {
              if (s._pending !== n) return;
              s._pending = void 0;
              let i = Error(
                `server/discover probe reply failed JSON-RPC message decoding (${sc(a instanceof Error ? a.message : String(a))}) \u2014 treating the server as pre-2026-07-28`
              );
              ((i.name = "McpProbeMalformedReplyError"),
                s._savedOnError?.(i),
                n.resolve({ kind: "malformed" }));
            }, 0);
          s._savedOnError?.(a);
        }),
        (t.onclose = () => {
          let a = s._pending;
          if (a !== void 0) ((s._pending = void 0), a.resolve({ kind: "closed" }));
          ((s._closeDelivered = !0), s._savedOnClose?.());
        }));
      try {
        await t.start();
      } catch (a) {
        throw (s.detach(), a);
      }
      return s;
    }
    async exchange(t, r) {
      let s = `server-discover-probe-${++this._probeCounter}`;
      return (
        this._issuedIds.add(s),
        (this._errorSinceSend = void 0),
        new Promise((a) => {
          let n = !1,
            i = (c) => {
              if (n) return;
              if (((n = !0), clearTimeout(l), this._pending?.id === s)) this._pending = void 0;
              a(c);
            },
            l = setTimeout(() => i({ kind: "timeout" }), r);
          ((this._pending = { id: s, resolve: i }),
            this._transport
              .send(t(s), {
                onRequestStreamEnd: () => {
                  setTimeout(() => {
                    let c = this._errorSinceSend;
                    if (c !== void 0 && !ac(c)) {
                      i({ kind: "send-error", error: c instanceof Error ? c : Error(String(c)) });
                      return;
                    }
                    i({ kind: "stream-end" });
                  }, 0);
                }
              })
              .catch((c) => i({ kind: "send-error", error: c })));
        })
      );
    }
    detach() {
      if (
        ((this._pending = void 0),
        (this._transport.onmessage = this._savedOnMessage),
        (this._transport.onerror = this._savedOnError),
        this._closeDelivered && this._savedOnClose !== void 0)
      ) {
        let t = this._savedOnClose,
          r = this._transport,
          s = !1,
          a = () => {
            if (!s) {
              s = !0;
              return;
            }
            t();
          };
        ((r.onclose = a),
          wn.set(r, () => {
            if (r.onclose === a) r.onclose = t;
          }));
      } else this._transport.onclose = this._savedOnClose;
    }
    release() {
      this.detach();
      let t = this._transport,
        r = t.start,
        s = !0;
      t.start = async function () {
        if (s) {
          ((s = !1), (t.start = r));
          return;
        }
        return r.call(t);
      };
    }
  },
  wn = new WeakMap();
function sc(e) {
  let t = String(e);
  if (t.length <= 200) return t;
  let r = (t.charCodeAt(199) & 64512) === 55296 ? 199 : 200;
  return `${t.slice(0, r)}\u2026 [truncated]`;
}
function ac(e) {
  if (e instanceof SyntaxError) return !0;
  return typeof e === "object" && e !== null && (e.name === "ZodError" || Array.isArray(e.issues));
}
function oc(e) {
  let t = wn.get(e);
  (wn.delete(e), t?.());
}
function ch(e, t, r, s) {
  return {
    jsonrpc: "2.0",
    id: e,
    method: "server/discover",
    params: {
      _meta: Je(t).outboundEnvelope({ protocolVersion: t, clientInfo: r, clientCapabilities: s })
    }
  };
}
function lh(e, t) {
  switch (e.kind) {
    case "response":
      return e.error === void 0
        ? { kind: "result", result: e.result }
        : { kind: "rpc-error", ...e.error };
    case "send-error": {
      let r = e.error;
      if (r instanceof RT) {
        let s = r.data?.text;
        return {
          kind: "http-error",
          status: r.data.status,
          body: typeof s === "string" ? s : void 0
        };
      }
      if (r instanceof nO || (r instanceof Error && r.name === "UnauthorizedError"))
        return { kind: "auth-required", error: r };
      return { kind: "network-error", error: r };
    }
    case "closed":
      return { kind: "closed" };
    case "id-mismatch":
      return { kind: "id-mismatch" };
    case "malformed":
      return { kind: "malformed" };
    case "stream-end":
      return { kind: "stream-end" };
    case "timeout":
      return { kind: "timeout", timeoutMs: t };
  }
}
async function vc(e, t) {
  let r = e.probe.timeoutMs ?? t.defaultTimeoutMs,
    s = Math.max(0, e.probe.maxRetries ?? 0),
    a = e.kind === "pin" ? [e.version] : e.modernVersions,
    n = e.kind === "auto" && e.fallbackAvailable,
    i = await ih.open(t.transport, t.transportKind),
    l = async () => {
      let d = a[0],
        m = !1,
        _ = s;
      for (;;) {
        let E = await i.exchange((b) => ch(b, d, t.clientInfo, t.capabilities), r);
        if (E.kind === "timeout" && _ > 0) {
          _--;
          continue;
        }
        let P = lh(E, r);
        if (P.kind === "timeout") t.transport._anthropicProbeTimedOut = !0;
        let y = Zd(P, {
          clientModernVersions: a,
          requestedVersion: d,
          fallbackAvailable: n,
          environment: t.environment,
          transportKind: t.transportKind
        });
        switch (y.kind) {
          case "modern":
            return { era: "modern", version: y.version, discover: y.discover };
          case "corrective":
            if (m) throw y.error;
            ((m = !0), (d = y.version));
            continue;
          case "legacy": {
            if (P.kind === "id-mismatch" || P.kind === "malformed" || P.kind === "stream-end")
              t.transport._anthropicProbeLegacyEvidence = P.kind;
            let b =
              P.kind === "closed"
                ? "the connection closed during the server/discover probe"
                : void 0;
            if (e.kind === "pin")
              throw new bi(
                ii.EraNegotiationFailed,
                b === void 0
                  ? `Version negotiation failed: the server did not offer pinned protocol version ${e.version} via server/discover (no fallback in pin mode)`
                  : `Version negotiation failed: ${b} before the server offered pinned protocol version ${e.version} (no fallback in pin mode)`
              );
            if (!e.fallbackAvailable)
              throw new bi(
                ii.EraNegotiationFailed,
                b === void 0
                  ? "Version negotiation failed: the server gave no modern evidence and this client supports no pre-2026-07-28 protocol version to fall back to"
                  : `Version negotiation failed: ${b} and this client supports no pre-2026-07-28 protocol version to fall back to`
              );
            if (b !== void 0 && t.disposableProbe !== !0)
              throw new bi(
                ii.EraNegotiationFailed,
                `Version negotiation failed: ${b} (this transport probed in place \u2014 the disposable sibling probe requires the SDK's base StdioClientTransport)`
              );
            return { era: "legacy" };
          }
          case "error":
            throw y.error;
        }
      }
    },
    c;
  try {
    c = await l();
  } catch (d) {
    throw (i.detach(), d);
  }
  return (i.release(), c);
}
function uh(e) {
  let t = Object.getPrototypeOf(e);
  if (t === null || !Object.prototype.hasOwnProperty.call(t, "_dispose")) return;
  let r = e._serverParams;
  return typeof r === "object" && r !== null && typeof r.command === "string" ? r : void 0;
}
async function dh(e, t, r, s) {
  let n = new t.constructor({ ...r, stderr: "ignore" }),
    i = t.close,
    l = !1,
    c,
    d = new Promise((_, E) => {
      c = () => E(nc());
    });
  t.close = async function () {
    return ((l = !0), c?.(), i.call(t));
  };
  let m;
  try {
    let _ = vc(e, { ...s, transport: n, transportKind: "stdio", disposableProbe: !0 });
    (_.catch(() => {}), (m = await Promise.race([_, d])));
  } finally {
    (await hh(n), (t.close = i));
  }
  if (l) throw nc();
  return m;
}
function nc() {
  return new bi(
    ii.EraNegotiationFailed,
    "Version negotiation failed: the transport was closed during the server/discover probe"
  );
}
async function hh(e) {
  try {
    let t = e._dispose;
    await (typeof t === "function" ? t.call(e) : e.close());
  } catch {}
}
function ic(e) {
  let t = e._meta?.[He];
  return $i.Implementation(t) ? t : void 0;
}
function bo(e, t) {
  if (!e || t === null || typeof t !== "object") return;
  if (e.type === "object" && e.properties && typeof e.properties === "object") {
    let r = t,
      s = e.properties;
    for (let a of Object.keys(s)) {
      let n = s[a];
      if (r[a] === void 0 && Object.prototype.hasOwnProperty.call(n, "default")) r[a] = n.default;
      if (r[a] !== void 0) bo(n, r[a]);
    }
  }
  if (Array.isArray(e.anyOf)) {
    for (let r of e.anyOf) if (typeof r !== "boolean") bo(r, t);
  }
  if (Array.isArray(e.oneOf)) {
    for (let r of e.oneOf) if (typeof r !== "boolean") bo(r, t);
  }
}
function mh(e) {
  if (!e) return { supportsFormMode: !1, supportsUrlMode: !1 };
  let t = e.form !== void 0,
    r = e.url !== void 0;
  return { supportsFormMode: t || (!t && !r), supportsUrlMode: r };
}
function ph(e) {
  if (typeof e === "object" && e !== null) {
    if (e.kind === "legacy" && !("supportedVersions" in e) && !("discover" in e)) return e;
    if (e.kind === "modern" && z8e.safeParse(e.discover).success) return e;
  }
  throw new bi(
    ii.EraNegotiationFailed,
    "connect({ prior }): unrecognized prior \u2014 expected { kind: 'modern', discover } or { kind: 'legacy' }"
  );
}
var cc = {
    "notifications/tools/list_changed": ["tools/list"],
    "notifications/prompts/list_changed": ["prompts/list"],
    "notifications/resources/list_changed": ["resources/list", "resources/templates/list"]
  },
  fh = 64,
  Sbo = class extends Ei {
    _serverCapabilities;
    _serverVersion;
    _capabilities;
    _instructions;
    _jsonSchemaValidator;
    _cache;
    _defaultCacheTtlMs;
    _listMaxPages;
    _listChangedDebounceTimers = new Map();
    _listChangedConfig;
    _enforceStrictCapabilities;
    _versionNegotiation;
    _supportedProtocolVersionsOption;
    _inputRequiredDriverConfig;
    _listenState = new Map();
    _nextListenId = 0;
    _autoOpenedSubscription;
    _discoverResult;
    _resetConnectionState() {
      if (
        ((this._negotiatedProtocolVersion = void 0),
        (this._serverCapabilities = void 0),
        (this._serverVersion = void 0),
        (this._instructions = void 0),
        (this._discoverResult = void 0),
        (this._autoOpenedSubscription = void 0),
        this._listenState.size > 0)
      ) {
        let e = new bi(
          ii.ConnectionClosed,
          "subscriptions/listen: client reconnected or closed; subscription state from the previous connection was reset"
        );
        for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e });
      }
      this._listenState.clear();
      for (let e of this._listChangedDebounceTimers.values()) clearTimeout(e);
      (this._listChangedDebounceTimers.clear(), this._cache.resetForReconnect());
    }
    async close() {
      try {
        await super.close();
      } finally {
        this._resetConnectionState();
      }
    }
    constructor(e, t) {
      super(t);
      if (
        ((this._clientInfo = e),
        (this._capabilities = t?.capabilities ? { ...t.capabilities } : {}),
        (this._jsonSchemaValidator = t?.jsonSchemaValidator ?? new Jen()),
        (this._enforceStrictCapabilities = t?.enforceStrictCapabilities ?? !1),
        (this._versionNegotiation = t?.versionNegotiation),
        (this._supportedProtocolVersionsOption = t?.supportedProtocolVersions),
        (this._inputRequiredDriverConfig = vi(t?.inputRequired)),
        (this._cache = new Bd(
          t?.responseCacheStore ?? new Jd(),
          t?.responseCacheStore !== void 0,
          (r) => this._reportStoreError(r),
          t?.cachePartition ?? ""
        )),
        (this._defaultCacheTtlMs = t?.defaultCacheTtlMs ?? 0),
        (this._listMaxPages = t?.listMaxPages ?? fh),
        t?.listChanged)
      )
        this._listChangedConfig = t.listChanged;
    }
    buildContext(e, t) {
      return e;
    }
    _shouldDropInbound(e) {
      if (
        this._negotiatedProtocolVersion !== void 0 &&
        Ge(this._negotiatedProtocolVersion) &&
        Pte(e)
      )
        return "drop";
    }
    _outboundMetaEnvelope() {
      let e = this._negotiatedProtocolVersion;
      if (e === void 0) return;
      return this._wireCodec().outboundEnvelope({
        protocolVersion: e,
        clientInfo: this._clientInfo,
        clientCapabilities: this._capabilities
      });
    }
    _resolveNonCompleteResult(e, t) {
      if (!this._inputRequiredDriverConfig.autoFulfill)
        return Promise.reject(
          new bi(
            ii.UnsupportedResultType,
            `Unsupported result type 'input_required' for ${t.request.method}: multi-round-trip auto-fulfilment is not enabled on this instance \u2014 pass allowInputRequired: true to handle it manually, or enable inputRequired.autoFulfill`,
            { resultType: "input_required", method: t.request.method }
          )
        );
      return Ti(
        {
          getRequestHandler: (r) => this._getRequestHandler(r),
          buildContext: (r) => this.buildContext(r, void 0),
          sessionId: this.transport?.sessionId
        },
        this._inputRequiredDriverConfig,
        e,
        t
      );
    }
    _setupListChangedHandlers(e) {
      if (e.tools && this._serverCapabilities?.tools?.listChanged)
        this._setupListChangedHandler(
          "tools",
          "notifications/tools/list_changed",
          e.tools,
          async () => (await this.listTools(void 0, { cacheMode: "refresh" })).tools
        );
      if (e.prompts && this._serverCapabilities?.prompts?.listChanged)
        this._setupListChangedHandler(
          "prompts",
          "notifications/prompts/list_changed",
          e.prompts,
          async () => (await this.listPrompts(void 0, { cacheMode: "refresh" })).prompts
        );
      if (e.resources && this._serverCapabilities?.resources?.listChanged)
        this._setupListChangedHandler(
          "resources",
          "notifications/resources/list_changed",
          e.resources,
          async () => (await this.listResources(void 0, { cacheMode: "refresh" })).resources
        );
    }
    registerCapabilities(e) {
      if (this.transport) throw Error("Cannot register capabilities after connecting to transport");
      this._capabilities = Pi(this._capabilities, e);
    }
    setVersionNegotiation(e) {
      if (this.transport)
        throw Error("Cannot configure version negotiation after connecting to transport");
      this._versionNegotiation = e;
    }
    _wrapHandler(e, t) {
      if (e === "elicitation/create")
        return async (r, s) => {
          let a = Je(this._negotiatedProtocolVersion),
            n = a.validateRequest("elicitation/create", r);
          if (!n.ok && n.reason === "not-in-era")
            n = a.validateInputRequest("elicitation/create", r);
          if (!n.ok)
            throw new Cd(
              n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams,
              n.reason === "not-in-era"
                ? "No wire schema for elicitation/create in the resolved era"
                : `Invalid elicitation request: ${n.message}`
            );
          let { params: i } = n.value;
          i.mode = i.mode ?? "form";
          let { supportsFormMode: l, supportsUrlMode: c } = mh(this._capabilities.elicitation);
          if (i.mode === "form" && !l)
            throw new Cd(
              ta.InvalidParams,
              "Client does not support form-mode elicitation requests"
            );
          if (i.mode === "url" && !c)
            throw new Cd(ta.InvalidParams, "Client does not support URL-mode elicitation requests");
          let d = await t(r, s),
            m = a.validateResult("elicitation/create", d);
          if (!m.ok && m.reason === "not-in-era")
            m = a.validateInputResponse("elicitation/create", d);
          if (!m.ok)
            throw new Cd(
              m.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams,
              m.reason === "not-in-era"
                ? "No wire schema for elicitation/create in the resolved era"
                : `Invalid elicitation result: ${m.message}`
            );
          let _ = m.value,
            E = i.mode === "form" ? i.requestedSchema : void 0;
          if (
            i.mode === "form" &&
            _.action === "accept" &&
            _.content &&
            E &&
            this._capabilities.elicitation?.form?.applyDefaults
          )
            try {
              bo(E, _.content);
            } catch {}
          return _;
        };
      if (e === "sampling/createMessage")
        return async (r, s) => {
          let a = Je(this._negotiatedProtocolVersion),
            n = a.validateRequest("sampling/createMessage", r);
          if (!n.ok && n.reason === "not-in-era")
            n = a.validateInputRequest("sampling/createMessage", r);
          if (!n.ok)
            throw new Cd(
              n.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams,
              n.reason === "not-in-era"
                ? "No wire schema for sampling/createMessage in the resolved era"
                : `Invalid sampling request: ${n.message}`
            );
          let { params: i } = n.value,
            l = await t(r, s),
            c = Boolean(i.tools || i.toolChoice),
            d = a.samplingResultVariant(c, l);
          if (!d.ok && d.reason === "not-in-era")
            d = a.validateInputResponse("sampling/createMessage", l);
          if (!d.ok)
            throw new Cd(
              d.reason === "not-in-era" ? ta.InternalError : ta.InvalidParams,
              d.reason === "not-in-era"
                ? "No result schema for sampling/createMessage in the resolved era"
                : `Invalid sampling result: ${d.message}`
            );
          return d.value;
        };
      return t;
    }
    assertCapability(e, t) {
      if (!this._serverCapabilities?.[e])
        throw new bi(ii.CapabilityNotSupported, `Server does not support ${e} (required for ${t})`);
    }
    async connect(e, t) {
      if (t?.prior != null) return this._connectFromPrior(e, ph(t.prior), t);
      let r = nh(this._versionNegotiation, this._supportedProtocolVersionsOption);
      if (r.kind !== "legacy") return this._connectNegotiated(e, r, t);
      return this._connectPlainLegacy(e, t);
    }
    async _connectPlainLegacy(e, t) {
      if ((await super.connect(e), e.sessionId !== void 0)) {
        let r = this._negotiatedProtocolVersion;
        if (r !== void 0) e.setProtocolVersion?.(r);
        return;
      }
      (this._resetConnectionState(), await this._legacyHandshake(e, t));
    }
    async _legacyHandshake(e, t, r = !0) {
      let s = an(this._supportedProtocolVersions);
      try {
        let a = s[0];
        if (a === void 0)
          throw new bi(
            ii.EraNegotiationFailed,
            "Cannot run the initialize handshake: supportedProtocolVersions contains no pre-2026-07-28 protocol version"
          );
        let n = await this.request(
          {
            method: "initialize",
            params: {
              protocolVersion: a,
              capabilities: this._capabilities,
              clientInfo: this._clientInfo
            }
          },
          t
        );
        if (n === void 0) throw Error(`Server sent invalid initialize result: ${n}`);
        if (!s.includes(n.protocolVersion))
          throw Error(`Server's protocol version is not supported: ${n.protocolVersion}`);
        if (
          ((this._serverCapabilities = n.capabilities),
          (this._serverVersion = n.serverInfo),
          this._cache.setServerIdentity(this._deriveServerIdentity(e)),
          e.setProtocolVersion)
        )
          e.setProtocolVersion(n.protocolVersion);
        if (
          ((this._instructions = n.instructions),
          await this.notification({ method: "notifications/initialized" }),
          (this._negotiatedProtocolVersion = n.protocolVersion),
          this._listChangedConfig)
        )
          this._setupListChangedHandlers(this._listChangedConfig);
      } catch (a) {
        if (r) this.close();
        throw a;
      }
    }
    async _discoverAfterRejectedInitialize(e, t, r, s) {
      let a = r.kind === "auto" && e._anthropicProbeTimedOut === !0 && t instanceof Cd,
        n = a && t.code === ta.UnsupportedProtocolVersion ? yc(t.data) : void 0,
        i = !a
          ? void 0
          : n === void 0
            ? r.modernVersions[0]
            : r.modernVersions.find((l) => n.includes(l));
      if (i === void 0) throw (this.close(), t);
      try {
        this._negotiatedProtocolVersion = i;
        let l = await this.discover({
          ...s,
          timeout: Math.min(3000, r.probe.timeoutMs ?? s?.timeout ?? ss)
        });
        if (!l.supportedVersions.includes(i))
          throw Error(`the second server/discover does not offer ${i}`);
        return { era: "modern", version: i, discover: l };
      } catch (l) {
        throw (
          (e._anthropicRediscoverError = l),
          (this._negotiatedProtocolVersion = void 0),
          this.close(),
          t
        );
      }
    }
    async _connectNegotiated(e, t, r) {
      if (e.sessionId !== void 0) {
        await super.connect(e);
        let a = this._negotiatedProtocolVersion;
        if (a !== void 0 && e.setProtocolVersion) e.setProtocolVersion(a);
        return;
      }
      this._resetConnectionState();
      let s;
      try {
        let a = rc(e),
          n = {
            clientInfo: this._clientInfo,
            capabilities: this._capabilities,
            environment: tc(),
            defaultTimeoutMs: r?.timeout ?? ss
          },
          i = a === "stdio" ? uh(e) : void 0;
        s =
          i === void 0
            ? await vc(t, { ...n, transport: e, transportKind: a })
            : await dh(t, e, i, n);
      } catch (a) {
        throw (await e.close().catch(() => {}), oc(e), a);
      }
      if ((oc(e), await super.connect(e), s.era === "legacy"))
        try {
          await this._legacyHandshake(e, r, !1);
          return;
        } catch (a) {
          s = await this._discoverAfterRejectedInitialize(e, a, t, r);
        }
      if (
        ((this._serverCapabilities = s.discover.capabilities),
        (this._serverVersion = ic(s.discover)),
        this._cache.setServerIdentity(this._deriveServerIdentity(e)),
        (this._instructions = s.discover.instructions),
        (this._discoverResult = s.discover),
        (this._negotiatedProtocolVersion = s.version),
        e.setProtocolVersion)
      )
        e.setProtocolVersion(s.version);
      if (this._listChangedConfig) {
        let a = this._listChangedConfig,
          n = this._serverCapabilities,
          i = {
            ...(a.tools && n?.tools?.listChanged && { tools: a.tools }),
            ...(a.prompts && n?.prompts?.listChanged && { prompts: a.prompts }),
            ...(a.resources && n?.resources?.listChanged && { resources: a.resources })
          },
          l = !0;
        try {
          this._setupListChangedHandlers(i);
        } catch (d) {
          ((l = !1), this.onerror?.(d instanceof Error ? d : Error(String(d))));
        }
        let c = l
          ? {
              ...(i.tools && { toolsListChanged: !0 }),
              ...(i.prompts && { promptsListChanged: !0 }),
              ...(i.resources && { resourcesListChanged: !0 })
            }
          : {};
        if (Object.keys(c).length > 0) {
          let d = new AbortController(),
            m = () => d.abort(r?.signal?.reason);
          if (r?.signal?.aborted) m();
          r?.signal?.addEventListener("abort", m);
          try {
            this._autoOpenedSubscription = await this.listen(c, {
              timeout: r?.timeout,
              signal: d.signal
            });
          } catch (_) {
            if (r?.signal?.aborted) throw (await this.close().catch(() => {}), _);
            this.onerror?.(_ instanceof Error ? _ : Error(String(_)));
          } finally {
            r?.signal?.removeEventListener("abort", m);
          }
        }
      }
    }
    async _connectFromPrior(e, t, r) {
      if (t.kind === "legacy") return this._connectPlainLegacy(e, r);
      let s = t.discover;
      this._resetConnectionState();
      let a = this._supportedProtocolVersionsOption,
        n = (a && rs(a).length > 0 ? rs(a) : sn).find((i) => s.supportedVersions.includes(i));
      if (n === void 0)
        throw new bi(
          ii.EraNegotiationFailed,
          "connect({ prior }) with a modern verdict requires a 2026-07-28+ mutual protocol version; the supplied DiscoverResult and this client's supportedProtocolVersions have no modern overlap. For a server known to be legacy, pass prior: { kind: 'legacy' } to skip the probe and initialize directly, or use versionNegotiation: { mode: 'auto' } to re-probe with legacy fallback."
        );
      if (
        (await super.connect(e),
        (this._discoverResult = s),
        (this._serverCapabilities = s.capabilities),
        (this._serverVersion = ic(s)),
        this._cache.setServerIdentity(this._deriveServerIdentity(e)),
        (this._instructions = s.instructions),
        (this._negotiatedProtocolVersion = n),
        e.setProtocolVersion?.(n),
        this._listChangedConfig)
      )
        try {
          this._setupListChangedHandlers(this._listChangedConfig);
        } catch (i) {
          this.onerror?.(i instanceof Error ? i : Error(String(i)));
        }
    }
    getServerCapabilities() {
      return this._serverCapabilities;
    }
    getServerVersion() {
      return this._serverVersion;
    }
    _deriveServerIdentity(e) {
      let t = this._serverVersion;
      if (t !== void 0) return `${t.name}@${t.version}`;
      return e.sessionId ?? `anonymous:${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    getNegotiatedProtocolVersion() {
      return this._negotiatedProtocolVersion;
    }
    getProtocolEra() {
      let e = this._negotiatedProtocolVersion;
      if (e === void 0) return;
      return Ge(e) ? "modern" : "legacy";
    }
    getInstructions() {
      return this._instructions;
    }
    getDiscoverResult() {
      return this._discoverResult;
    }
    assertCapabilityForMethod(e) {
      switch (e) {
        case "logging/setLevel":
          if (!this._serverCapabilities?.logging)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support logging (required for ${e})`
            );
          break;
        case "prompts/get":
        case "prompts/list":
          if (!this._serverCapabilities?.prompts)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support prompts (required for ${e})`
            );
          break;
        case "resources/list":
        case "resources/templates/list":
        case "resources/read":
        case "resources/subscribe":
        case "resources/unsubscribe":
          if (!this._serverCapabilities?.resources)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support resources (required for ${e})`
            );
          if (e === "resources/subscribe" && !this._serverCapabilities.resources.subscribe)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support resource subscriptions (required for ${e})`
            );
          break;
        case "tools/call":
        case "tools/list":
          if (!this._serverCapabilities?.tools)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support tools (required for ${e})`
            );
          break;
        case "completion/complete":
          if (!this._serverCapabilities?.completions)
            throw new bi(
              ii.CapabilityNotSupported,
              `Server does not support completions (required for ${e})`
            );
          break;
        case "initialize":
          break;
        case "server/discover":
          break;
        case "ping":
          break;
      }
    }
    assertNotificationCapability(e) {
      switch (e) {
        case "notifications/roots/list_changed":
          if (!this._capabilities.roots?.listChanged)
            throw new bi(
              ii.CapabilityNotSupported,
              `Client does not support roots list changed notifications (required for ${e})`
            );
          break;
        case "notifications/initialized":
          break;
        case "notifications/cancelled":
          break;
        case "notifications/progress":
          break;
      }
    }
    assertRequestHandlerCapability(e) {
      switch (e) {
        case "sampling/createMessage":
          if (!this._capabilities.sampling)
            throw new bi(
              ii.CapabilityNotSupported,
              `Client does not support sampling capability (required for ${e})`
            );
          break;
        case "elicitation/create":
          if (!this._capabilities.elicitation)
            throw new bi(
              ii.CapabilityNotSupported,
              `Client does not support elicitation capability (required for ${e})`
            );
          break;
        case "roots/list":
          if (!this._capabilities.roots)
            throw new bi(
              ii.CapabilityNotSupported,
              `Client does not support roots capability (required for ${e})`
            );
          break;
        case "ping":
          break;
      }
    }
    async ping(e) {
      return this.request({ method: "ping" }, e);
    }
    async discover(e) {
      let t = await this._requestWithSchema({ method: "server/discover" }, z8e, e);
      return ((this._discoverResult = t), t);
    }
    async complete(e, t) {
      return this.request({ method: "completion/complete", params: e }, t);
    }
    async setLoggingLevel(e, t) {
      return this.request({ method: "logging/setLevel", params: { level: e } }, t);
    }
    async getPrompt(e, t) {
      return this.request({ method: "prompts/get", params: e }, t);
    }
    async listPrompts(e, t) {
      if (!this._serverCapabilities?.prompts && !this._enforceStrictCapabilities)
        return (
          console.debug(
            "Client.listPrompts() called but server does not advertise prompts capability - returning empty list"
          ),
          { prompts: [] }
        );
      if (e?.cursor !== void 0) return this.request({ method: "prompts/list", params: e }, t);
      let r = await this._serveFromCache("prompts/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("prompts/list", e, t, (s, a) => s.prompts.push(...a.prompts));
    }
    async listResources(e, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities)
        return (
          console.debug(
            "Client.listResources() called but server does not advertise resources capability - returning empty list"
          ),
          { resources: [] }
        );
      if (e?.cursor !== void 0) return this.request({ method: "resources/list", params: e }, t);
      let r = await this._serveFromCache("resources/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/list", e, t, (s, a) => s.resources.push(...a.resources));
    }
    async listResourceTemplates(e, t) {
      if (!this._serverCapabilities?.resources && !this._enforceStrictCapabilities)
        return (
          console.debug(
            "Client.listResourceTemplates() called but server does not advertise resources capability - returning empty list"
          ),
          { resourceTemplates: [] }
        );
      if (e?.cursor !== void 0)
        return this.request({ method: "resources/templates/list", params: e }, t);
      let r = await this._serveFromCache("resources/templates/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages("resources/templates/list", e, t, (s, a) =>
        s.resourceTemplates.push(...a.resourceTemplates)
      );
    }
    async _listAllPages(e, t, r, s, a) {
      let n = r?.cacheMode === "bypass",
        i = this._cache.captureGeneration(e),
        l = await this.request({ method: e, ...(t && { params: { ...t } }) }, r),
        c = l.nextCursor,
        d = new Set(),
        m = 1;
      while (c !== void 0 && !d.has(c)) {
        if (this._listMaxPages !== 0 && m >= this._listMaxPages)
          throw new bi(
            ii.ListPaginationExceeded,
            `${e}: exceeded listMaxPages (${this._listMaxPages}); server pagination did not terminate`,
            { method: e, listMaxPages: this._listMaxPages }
          );
        d.add(c);
        let _ = await this.request({ method: e, params: { ...t, cursor: c } }, r);
        (s(l, _), (c = _.nextCursor), m++);
      }
      if ((delete l.nextCursor, a?.(l), n)) return l;
      return (await this._cache.write(e, l, i, this._freshness(l)), l);
    }
    _freshness(e, t) {
      let r = e,
        s = typeof r.ttlMs === "number" ? r.ttlMs : this._defaultCacheTtlMs,
        a = r.cacheScope === "public" ? "public" : "private";
      return { expiresAt: this._cache.now() + Math.min(Math.max(0, s), Gd), scope: a, params: t };
    }
    async _serveFromCache(e, t, r) {
      if (r?.cacheMode === "bypass" || r?.cacheMode === "refresh") return;
      let s = await this._cache.read(e, t).catch((a) => void this._reportStoreError(a));
      if (s !== void 0) {
        if (r?.signal?.aborted) {
          let a = r.signal.reason;
          throw a instanceof bi ? a : new bi(ii.RequestTimeout, String(a));
        }
        return s.value;
      }
    }
    _reportStoreError(e) {
      this.onerror?.(e instanceof Error ? e : Error(String(e)));
    }
    _compileOutputValidator(e) {
      if (!e.outputSchema) return;
      try {
        return { ok: !0, validator: this._jsonSchemaValidator.getValidator(e.outputSchema) };
      } catch (t) {
        return { ok: !1, compileError: t };
      }
    }
    async _resolveXMcpHeaderScan(e, t) {
      let r = t ?? (await this._cache.toolDefinition(e));
      return r === void 0 ? void 0 : dn(r.inputSchema);
    }
    async readResource(e, t) {
      let r = await this._serveFromCache("resources/read", e.uri, t);
      if (r !== void 0) return r;
      let s = this._cache.captureGeneration("resources/read", e.uri),
        a = await this.request({ method: "resources/read", params: e }, t);
      if (t?.cacheMode !== "bypass") {
        let n = this._freshness(a, e.uri);
        if (n.expiresAt > this._cache.now()) await this._cache.write("resources/read", a, s, n);
        else if (t?.cacheMode === "refresh") await this._cache.evictKey("resources/read", e.uri);
      }
      return a;
    }
    async subscribeResource(e, t) {
      return this.request({ method: "resources/subscribe", params: e }, t);
    }
    async unsubscribeResource(e, t) {
      return this.request({ method: "resources/unsubscribe", params: e }, t);
    }
    async listen(e, t) {
      if (this.transport === void 0) throw new bi(ii.NotConnected, "Not connected");
      let r = this._negotiatedProtocolVersion;
      if (r === void 0 || !Ge(r))
        throw new bi(
          ii.MethodNotSupportedByProtocolVersion,
          `subscriptions/listen requires a 2026-07-28-era connection (negotiated: ${r ?? "none"}). On a 2025-era connection, change notifications are delivered unsolicited: use ClientOptions.listChanged and resources/subscribe instead.`,
          { method: "subscriptions/listen", protocolVersion: r }
        );
      if (t?.signal?.aborted) {
        let g = t.signal.reason;
        throw g instanceof bi ? g : new bi(ii.RequestTimeout, String(g));
      }
      let s = new AbortController(),
        a = `listen:${this._nextListenId++}`,
        n = "opening",
        i,
        l,
        c,
        d,
        m = new Promise((g, f) => {
          ((c = g), (d = f));
        });
      m.catch(() => {});
      let _,
        E = new Promise((g) => {
          _ = g;
        }),
        P = (g) => {
          if (n === "closed") return;
          let f = n === "opening";
          if (i !== void 0) (clearTimeout(i), (i = void 0));
          if ("ack" in g) {
            ((n = "open"), c(g.ack));
            return;
          }
          if (((n = "closed"), l !== void 0)) t?.signal?.removeEventListener("abort", l);
          if ((this._listenState.delete(a), s.abort(), _(g.cause), f))
            d(
              g.error ??
                new bi(
                  ii.ConnectionClosed,
                  "subscriptions/listen closed before the server acknowledged"
                )
            );
        },
        y = async () => {
          (s.abort(),
            await this.notification({
              method: "notifications/cancelled",
              params: { requestId: a }
            }).catch(() => {}));
        },
        b = async () => {
          if (n === "closed") return;
          (P({ cause: "local" }), await y());
        };
      this._listenState.set(a, { settle: P });
      let p = t?.timeout ?? ss;
      if (
        ((i = setTimeout(() => {
          (P({
            cause: "remote",
            error: new bi(ii.RequestTimeout, "subscriptions/listen ack timed out", { timeout: p })
          }),
            y().catch(() => {}));
        }, p)),
        t?.signal)
      ) {
        let g = t.signal;
        ((l = () => {
          if (n === "closed") return;
          let f = g.reason;
          (P({ cause: "local", error: f instanceof Error ? f : Error(String(f ?? "Aborted")) }),
            y().catch(() => {}));
        }),
          g.addEventListener("abort", l, { once: !0 }));
      }
      let h = {
        jsonrpc: "2.0",
        id: a,
        method: "subscriptions/listen",
        params: { _meta: { ...this._outboundMetaEnvelope() }, notifications: e }
      };
      try {
        await this.transport.send(h, {
          requestSignal: s.signal,
          onRequestStreamEnd: () =>
            P({ cause: "remote", error: Error("subscriptions/listen: stream ended") })
        });
      } catch (g) {
        P({ cause: "remote", error: g instanceof Error ? g : Error(String(g)) });
      }
      return { honoredFilter: await m, close: b, closed: E };
    }
    get autoOpenedSubscription() {
      return this._autoOpenedSubscription;
    }
    _onnotification(e, t) {
      let r = Object.hasOwn(cc, e.method) ? cc[e.method] : void 0;
      if (e.method === "notifications/resources/updated") {
        let s = e.params?.uri;
        if (typeof s === "string") this._cache.evictKey("resources/read", s);
      } else if (r !== void 0) for (let s of r) this._cache.evict(s);
      if (e.method === "notifications/subscriptions/acknowledged") {
        let s = e.params?._meta?.[vr],
          a = typeof s === "string" ? this._listenState.get(s) : void 0;
        if (a !== void 0) {
          let n = this._wireCodec().validateNotification(
            "notifications/subscriptions/acknowledged",
            e
          );
          a.settle({ ack: n.ok ? n.value.params.notifications : {} });
          return;
        }
      }
      if (e.method === "notifications/cancelled") {
        let s = e.params?.requestId,
          a = typeof s === "string" ? this._listenState.get(s) : void 0;
        if (a !== void 0) {
          a.settle({
            cause: "remote",
            error: Error("subscriptions/listen: server cancelled the subscription")
          });
          return;
        }
      }
      super._onnotification(e, t);
    }
    _onresponse(e) {
      let t = e.id,
        r = typeof t === "string" ? this._listenState.get(t) : void 0;
      if (r !== void 0) {
        if (sEe(e))
          r.settle({
            cause: "remote",
            error: Cd.fromError(e.error.code, e.error.message, e.error.data)
          });
        else
          r.settle({
            cause: "graceful",
            error: new bi(
              ii.ConnectionClosed,
              "subscriptions/listen: server closed the subscription gracefully before acknowledging"
            )
          });
        return;
      }
      super._onresponse(e);
    }
    _onclose() {
      if (this._listenState.size > 0) {
        let e = new bi(ii.ConnectionClosed, "Connection closed");
        for (let t of this._listenState.values()) t.settle({ cause: "remote", error: e });
        this._listenState.clear();
      }
      super._onclose();
    }
    async callTool(e, t) {
      let r = this.getProtocolEra() === "modern" && tc() !== "browser",
        s = async () => {
          if (!r) return t;
          let c;
          try {
            c = await this._resolveXMcpHeaderScan(e.name, t?.toolDefinition);
          } catch (m) {
            this._reportStoreError(m);
          }
          if (!c?.valid || c.declarations.length === 0) return t;
          let d = _i(c.declarations, e.arguments);
          return Object.keys(d).length === 0 ? t : { ...t, headers: { ...t?.headers, ...d } };
        },
        a =
          t?.toolDefinition === void 0
            ? await this._cache
                .outputValidator(e.name, (c) => this._compileOutputValidator(c))
                .catch((c) => void this._reportStoreError(c))
            : this._compileOutputValidator(t.toolDefinition),
        n = () => {
          if (a === void 0 || a.ok) return;
          let c = a.compileError,
            d = (c instanceof Error ? c.message : String(c)).slice(0, 200);
          throw new Cd(ta.InvalidParams, `Tool '${e.name}' has an invalid outputSchema: ${d}`);
        };
      n();
      let i;
      try {
        i = await this.request({ method: "tools/call", params: e }, await s());
      } catch (c) {
        let d = c instanceof Cd && c.code === Jt;
        if (!r || !d || t?.toolDefinition !== void 0) throw c;
        let m = { signal: t?.signal, timeout: t?.timeout, cacheMode: "refresh" };
        (await this._cache.evict("tools/list"),
          await this.listTools(void 0, m).catch((_) => this._reportStoreError(_)),
          (a = await this._cache
            .outputValidator(e.name, (_) => this._compileOutputValidator(_))
            .catch((_) => void this._reportStoreError(_))),
          n(),
          (i = await this.request({ method: "tools/call", params: e }, await s())));
      }
      if (t?.allowTask === !0 && i.resultType === "task") return i;
      let l = a !== void 0 && a.ok ? a.validator : void 0;
      if (l) {
        if (i.structuredContent === void 0 && !i.isError)
          throw new Cd(
            ta.InvalidRequest,
            `Tool ${e.name} has an output schema but did not return structured content`
          );
        if (i.structuredContent !== void 0 && !i.isError)
          try {
            let c = l(i.structuredContent);
            if (!c.valid)
              throw new Cd(
                ta.InvalidParams,
                `Structured content does not match the tool's output schema: ${c.errorMessage}`
              );
          } catch (c) {
            if (c instanceof Cd) throw c;
            throw new Cd(
              ta.InvalidParams,
              `Failed to validate structured content: ${c instanceof Error ? c.message : String(c)}`
            );
          }
      }
      return i;
    }
    async listTools(e, t) {
      if (!this._serverCapabilities?.tools && !this._enforceStrictCapabilities)
        return (
          console.debug(
            "Client.listTools() called but server does not advertise tools capability - returning empty list"
          ),
          { tools: [] }
        );
      if (e?.cursor !== void 0) {
        let s = await this.request({ method: "tools/list", params: e }, t);
        return (this._excludeInvalidXMcpHeaderTools(s), s);
      }
      let r = await this._serveFromCache("tools/list", void 0, t);
      if (r !== void 0) return r;
      return this._listAllPages(
        "tools/list",
        e,
        t,
        (s, a) => s.tools.push(...a.tools),
        (s) => this._excludeInvalidXMcpHeaderTools(s)
      );
    }
    _excludeInvalidXMcpHeaderTools(e) {
      if (this.getProtocolEra() !== "modern" || !this.transport || rc(this.transport) === "stdio")
        return;
      let t = e.tools.filter((r) => {
        let s = dn(r.inputSchema);
        if (!s.valid)
          return (
            console.warn(
              `[mcp-sdk] excluding tool '${r.name}' from tools/list: invalid x-mcp-header declaration \u2014 ${s.reason}`
            ),
            !1
          );
        return !0;
      });
      if (t.length !== e.tools.length) e.tools = t;
    }
    _setupListChangedHandler(e, t, r, s) {
      let a = ho(Lr, r);
      if (!a.success) throw Error(`Invalid ${e} listChanged options: ${a.error.message}`);
      if (typeof r.onChanged !== "function")
        throw TypeError(`Invalid ${e} listChanged options: onChanged must be a function`);
      let { autoRefresh: n, debounceMs: i } = a.data,
        { onChanged: l } = r,
        c = async () => {
          if (!n) {
            l(null, null);
            return;
          }
          try {
            l(null, await s());
          } catch (m) {
            l(m instanceof Error ? m : Error(String(m)), null);
          }
        },
        d = () => {
          if (i) {
            let m = this._listChangedDebounceTimers.get(e);
            if (m) clearTimeout(m);
            let _ = setTimeout(c, i);
            this._listChangedDebounceTimers.set(e, _);
          } else c();
        };
      this.setNotificationHandler(t, d);
    }
    async sendRootsListChanged() {
      return this.notification({ method: "notifications/roots/list_changed" });
    }
  };
var zTr = class extends Error {
    static {
      Object.defineProperty(this, "mcpBrand", { value: "mcp.SseError" });
    }
    static [Symbol.hasInstance](e) {
      return Oe(this, e);
    }
    static isInstance(e) {
      if (typeof this !== "function")
        throw TypeError(
          "isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`"
        );
      return Oe(this, e);
    }
    constructor(e, t, r) {
      super(`SSE error: ${t}`);
      ((this.code = e), (this.event = r), bt(this, new.target));
    }
  },
  OUn = class {
    _eventSource;
    _endpoint;
    _abortController;
    _url;
    _resourceMetadataUrl;
    _scope;
    _eventSourceInit;
    _requestInit;
    _authProvider;
    _oauthProvider;
    _skipIssuerMetadataValidation;
    _fetch;
    _fetchWithInit;
    _protocolVersion;
    onclose;
    onerror;
    onmessage;
    constructor(e, t) {
      if (
        ((this._url = e),
        (this._resourceMetadataUrl = void 0),
        (this._scope = void 0),
        (this._eventSourceInit = t?.eventSourceInit),
        (this._requestInit = t?.requestInit),
        (this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation),
        hc(t?.authProvider))
      )
        ((this._oauthProvider = t.authProvider),
          (this._authProvider = mc(t.authProvider, {
            skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
          })));
      else this._authProvider = t?.authProvider;
      ((this._fetch = t?.fetch), (this._fetchWithInit = UDt(t?.fetch, t?.requestInit)));
    }
    _last401Response;
    async _commonHeaders() {
      let e = {},
        t = await this._authProvider?.token();
      if (t) e.Authorization = `Bearer ${t}`;
      if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
      let r = ts(this._requestInit?.headers);
      return new Headers({ ...e, ...r });
    }
    _startOrAuth() {
      let e = this?._eventSourceInit?.fetch ?? this._fetch ?? fetch;
      return new Promise((t, r) => {
        ((this._eventSource = new n9e(this._url.href, {
          ...this._eventSourceInit,
          fetch: async (s, a) => {
            let n = await this._commonHeaders();
            n.set("Accept", "text/event-stream");
            let i = await e(s, { ...a, headers: n });
            if (i.status === 401) {
              if (((this._last401Response = i), i.headers.has("www-authenticate"))) {
                let { resourceMetadataUrl: l, scope: c } = o1e(i);
                ((this._resourceMetadataUrl = l), (this._scope = c));
              }
            }
            return i;
          }
        })),
          (this._abortController = new AbortController()),
          (this._eventSource.onerror = (s) => {
            if (s.code === 401 && this._authProvider) {
              if (this._authProvider.onUnauthorized && this._last401Response) {
                let i = this._last401Response;
                ((this._last401Response = void 0),
                  this._eventSource?.close(),
                  this._authProvider
                    .onUnauthorized({
                      response: i,
                      serverUrl: this._url,
                      fetchFn: this._fetchWithInit
                    })
                    .then(
                      () => this._startOrAuth().then(t, r),
                      (l) => {
                        (this.onerror?.(l), r(l));
                      }
                    ));
                return;
              }
              let n = new nO();
              (r(n), this.onerror?.(n));
              return;
            }
            let a = new zTr(s.code, s.message, s);
            (r(a), this.onerror?.(a));
          }),
          (this._eventSource.onopen = () => {}),
          this._eventSource.addEventListener("endpoint", (s) => {
            let a = s;
            try {
              if (
                ((this._endpoint = new URL(a.data, this._url)),
                this._endpoint.origin !== this._url.origin)
              )
                throw Error(
                  `Endpoint origin does not match connection origin: ${this._endpoint.origin}`
                );
            } catch (n) {
              (r(n), this.onerror?.(n), this.close());
              return;
            }
            t();
          }),
          (this._eventSource.onmessage = (s) => {
            let a = s,
              n;
            try {
              n = Fae.parse(JSON.parse(a.data));
            } catch (i) {
              this.onerror?.(i);
              return;
            }
            this.onmessage?.(n);
          }));
      });
    }
    async start() {
      if (this._eventSource)
        throw Error(
          "SSEClientTransport already started! If using Client class, note that connect() calls start() automatically."
        );
      return await this._startOrAuth();
    }
    async finishAuth(e, t) {
      if (!this._oauthProvider) throw new nO("finishAuth requires an OAuthClientProvider");
      let { authorizationCode: r, iss: s } = await pc(e, t, this._oauthProvider, this._url, {
        fetchFn: this._fetchWithInit,
        resourceMetadataUrl: this._resourceMetadataUrl
      });
      if (
        (await BDt(this._oauthProvider, {
          serverUrl: this._url,
          authorizationCode: r,
          iss: s,
          resourceMetadataUrl: this._resourceMetadataUrl,
          scope: this._scope,
          fetchFn: this._fetchWithInit,
          skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
        })) !== "AUTHORIZED"
      )
        throw new nO("Failed to authorize");
    }
    async close() {
      (this._abortController?.abort(), this._eventSource?.close(), this.onclose?.());
    }
    async send(e) {
      return this._send(e, !1);
    }
    async _send(e, t) {
      if (!this._endpoint) throw new bi(ii.NotConnected, "Not connected");
      try {
        let r = await this._commonHeaders();
        r.set("content-type", "application/json");
        let s = {
            ...this._requestInit,
            method: "POST",
            headers: r,
            body: JSON.stringify(e),
            signal: this._abortController?.signal
          },
          a = await (this._fetch ?? fetch)(this._endpoint, s);
        if (!a.ok) {
          if (a.status === 401 && this._authProvider) {
            if (a.headers.has("www-authenticate")) {
              let { resourceMetadataUrl: i, scope: l } = o1e(a);
              ((this._resourceMetadataUrl = i), (this._scope = l));
            }
            if (this._authProvider.onUnauthorized && !t)
              return (
                await this._authProvider.onUnauthorized({
                  response: a,
                  serverUrl: this._url,
                  fetchFn: this._fetchWithInit
                }),
                await a.text?.().catch(() => {}),
                this._send(e, !0)
              );
            if ((await a.text?.().catch(() => {}), t))
              throw new RT(
                ii.ClientHttpAuthentication,
                "Server returned 401 after re-authentication",
                { status: 401, statusText: a.statusText }
              );
            throw new nO();
          }
          let n = await a.text?.().catch(() => null);
          throw Error(`Error POSTing to endpoint (HTTP ${a.status}): ${n}`);
        }
        await a.text?.().catch(() => {});
      } catch (r) {
        throw (this.onerror?.(r), r);
      }
    }
    setProtocolVersion(e) {
      this._protocolVersion = e;
    }
  },
  Sh = 1,
  gh = {
    initialReconnectionDelay: 1000,
    maxReconnectionDelay: 30000,
    reconnectionDelayGrowFactor: 1.5,
    maxRetries: 2
  },
  _h = new Set([
    "authorization",
    "content-type",
    "mcp-protocol-version",
    "mcp-method",
    "mcp-name",
    "mcp-session-id"
  ]);
function lc(e, t) {
  if (typeof AbortSignal.any === "function") return AbortSignal.any([e, t]);
  let r = new AbortController();
  if (e.aborted) return (r.abort(e.reason), r.signal);
  if (t.aborted) return (r.abort(t.reason), r.signal);
  let s = () => {
    (e.removeEventListener("abort", a), t.removeEventListener("abort", n));
  };
  function a() {
    (s(), r.abort(e.reason));
  }
  function n() {
    (s(), r.abort(t.reason));
  }
  return (
    e.addEventListener("abort", a, { once: !0 }),
    t.addEventListener("abort", n, { once: !0 }),
    r.signal
  );
}
var Qen = class {
  _abortController;
  _url;
  _resourceMetadataUrl;
  _scope;
  _requestInit;
  _authProvider;
  _oauthProvider;
  _skipIssuerMetadataValidation;
  _fetch;
  _fetchWithInit;
  _sessionId;
  _reconnectionOptions;
  _protocolVersion;
  _onInsufficientScope;
  _maxStepUpRetries;
  _serverRetryMs;
  _reconnectionScheduler;
  _cancelReconnection;
  onclose;
  onerror;
  onmessage;
  hasPerRequestStream = !0;
  constructor(e, t) {
    if (
      ((this._url = e),
      (this._resourceMetadataUrl = void 0),
      (this._scope = void 0),
      (this._requestInit = t?.requestInit),
      (this._skipIssuerMetadataValidation = t?.skipIssuerMetadataValidation),
      hc(t?.authProvider))
    )
      ((this._oauthProvider = t.authProvider),
        (this._authProvider = mc(t.authProvider, {
          skipIssuerMetadataValidation: t.skipIssuerMetadataValidation
        })));
    else this._authProvider = t?.authProvider;
    ((this._fetch = t?.fetch),
      (this._fetchWithInit = UDt(t?.fetch, t?.requestInit)),
      (this._sessionId = t?.sessionId),
      (this._protocolVersion = t?.protocolVersion),
      (this._reconnectionOptions = t?.reconnectionOptions ?? gh),
      (this._reconnectionScheduler = t?.reconnectionScheduler),
      (this._onInsufficientScope = t?.onInsufficientScope ?? "reauthorize"),
      (this._maxStepUpRetries = Math.max(0, t?.maxStepUpRetries ?? Sh)));
  }
  async _stepUpAuthorize(e, t) {
    if (this._onInsufficientScope === "throw")
      throw new Yi({
        requiredScope: e.scope,
        resourceMetadataUrl: e.resourceMetadataUrl,
        errorDescription: e.errorDescription
      });
    if (!this._oauthProvider)
      throw new Yi({
        requiredScope: e.scope,
        resourceMetadataUrl: e.resourceMetadataUrl,
        errorDescription: e.errorDescription
      });
    if (t >= this._maxStepUpRetries)
      throw new RT(
        ii.ClientHttpForbidden,
        `Server returned 403 insufficient_scope after step-up re-authorization (retry limit ${this._maxStepUpRetries} reached)`,
        { status: 403, statusText: e.statusText ?? "Forbidden", text: e.text }
      );
    if (e.resourceMetadataUrl) this._resourceMetadataUrl = e.resourceMetadataUrl;
    let r = await this._oauthProvider.tokens(),
      s = _n(this._scope, r?.scope, e.scope);
    this._scope = s;
    let a = Ed(s, r?.scope);
    return BDt(this._oauthProvider, {
      serverUrl: this._url,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: s,
      forceReauthorization: a,
      fetchFn: this._fetchWithInit,
      skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
    });
  }
  async _commonHeaders() {
    let e = {},
      t = await this._authProvider?.token();
    if (t) e.Authorization = `Bearer ${t}`;
    if (this._sessionId) e["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
    let r = ts(this._requestInit?.headers);
    return new Headers({ ...e, ...r });
  }
  _applyBodyDerivedHeaders(e, t) {
    if (Array.isArray(t) || !Pte(t)) return;
    let r = t.params?._meta?.[Fe];
    if (typeof r !== "string") return;
    (e.set("mcp-protocol-version", r), e.set("mcp-method", t.method));
    let s = t.params,
      a =
        t.method === "resources/read"
          ? typeof s?.uri === "string"
            ? s.uri
            : void 0
          : typeof s?.name === "string"
            ? s.name
            : void 0;
    if (a !== void 0) e.set("mcp-name", uo(a));
    let n = t.method.startsWith("tasks/") && typeof s?.taskId === "string" ? s.taskId : void 0;
    if (n !== void 0) e.set("mcp-name", uo(n));
  }
  _isModernEnvelopedRequest(e) {
    if (Array.isArray(e) || !Pte(e)) return !1;
    let t = e.params?._meta?.[Fe];
    return typeof t === "string" && Ge(t);
  }
  async _startOrAuthSse(e, t = !1, r = 0) {
    let { resumptionToken: s, requestSignal: a } = e,
      n = () => this._abortController?.signal.aborted === !0 || a?.aborted === !0;
    try {
      let i = await this._commonHeaders(),
        l = [
          ...(i
            .get("accept")
            ?.split(",")
            .map((_) => _.trim().toLowerCase()) ?? []),
          "text/event-stream"
        ];
      if ((i.set("accept", [...new Set(l)].join(", ")), s)) i.set("last-event-id", s);
      let c = this._abortController?.signal,
        d = a !== void 0 && c !== void 0 ? lc(c, a) : (a ?? c),
        m = await (this._fetch ?? fetch)(this._url, {
          ...this._requestInit,
          method: "GET",
          headers: i,
          signal: d
        });
      if (!m.ok) {
        if (m.status === 401 && this._authProvider) {
          if (m.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: _, scope: E } = o1e(m);
            ((this._resourceMetadataUrl = _), (this._scope = _n(this._scope, E)));
          }
          if (this._authProvider.onUnauthorized && !t)
            return (
              await this._authProvider.onUnauthorized({
                response: m,
                serverUrl: this._url,
                fetchFn: this._fetchWithInit
              }),
              await m.text?.().catch(() => {}),
              this._startOrAuthSse(e, !0, r)
            );
          if ((await m.text?.().catch(() => {}), t))
            throw new RT(
              ii.ClientHttpAuthentication,
              "Server returned 401 after re-authentication",
              { status: 401, statusText: m.statusText }
            );
          throw new nO();
        }
        if (m.status === 403) {
          let { resourceMetadataUrl: _, scope: E, error: P, errorDescription: y } = o1e(m);
          if (P === "insufficient_scope") {
            let b = await m.text?.().catch(() => null);
            if (
              (await this._stepUpAuthorize(
                {
                  scope: E,
                  resourceMetadataUrl: _,
                  errorDescription: y,
                  statusText: m.statusText,
                  text: b
                },
                r
              )) !== "AUTHORIZED"
            )
              throw new nO();
            return this._startOrAuthSse(e, t, r + 1);
          }
        }
        if ((await m.text?.().catch(() => {}), m.status === 405)) {
          e.onRequestStreamEnd?.();
          return;
        }
        throw new RT(
          ii.ClientHttpFailedToOpenStream,
          `Failed to open SSE stream: ${m.statusText}`,
          { status: m.status, statusText: m.statusText }
        );
      }
      this._handleSseStream(m.body, e, !0);
    } catch (i) {
      if (!n()) this.onerror?.(i);
      throw i;
    }
  }
  _getNextReconnectionDelay(e) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let t = this._reconnectionOptions.initialReconnectionDelay,
      r = this._reconnectionOptions.reconnectionDelayGrowFactor,
      s = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(t * Math.pow(r, e), s);
  }
  _scheduleReconnection(e, t = 0) {
    let r = this._reconnectionOptions.maxRetries;
    if (t >= r) {
      (this.onerror?.(Error(`Maximum reconnection attempts (${r}) exceeded.`)),
        e.onRequestStreamEnd?.());
      return;
    }
    let s = this._getNextReconnectionDelay(t),
      a = () => {
        if (
          ((this._cancelReconnection = void 0),
          this._abortController?.signal.aborted || e.requestSignal?.aborted)
        )
          return;
        this._startOrAuthSse(e).catch((n) => {
          if (this._abortController?.signal.aborted || e.requestSignal?.aborted) return;
          this.onerror?.(
            Error(`Failed to reconnect SSE stream: ${n instanceof Error ? n.message : String(n)}`)
          );
          try {
            this._scheduleReconnection(e, t + 1);
          } catch (i) {
            this.onerror?.(i instanceof Error ? i : Error(String(i)));
          }
        });
      };
    if (this._reconnectionScheduler) {
      let n = this._reconnectionScheduler(a, s, t);
      this._cancelReconnection = typeof n === "function" ? n : void 0;
    } else {
      let n = setTimeout(a, s);
      this._cancelReconnection = () => clearTimeout(n);
    }
  }
  _handleSseStream(e, t, r) {
    if (!e) {
      t.onRequestStreamEnd?.();
      return;
    }
    let { onresumptiontoken: s, replayMessageId: a, requestSignal: n, onRequestStreamEnd: i } = t,
      l = () => this._abortController?.signal.aborted === !0 || n?.aborted === !0,
      c,
      d = !1,
      m = !1;
    (async () => {
      try {
        let E = e
          .pipeThrough(new TextDecoderStream())
          .pipeThrough(
            new btn({
              onRetry: (P) => {
                this._serverRetryMs = P;
              }
            })
          )
          .getReader();
        while (!0) {
          let { value: P, done: y } = await E.read();
          if (y) break;
          if (P.id) ((c = P.id), (d = !0), s?.(P.id));
          if (!P.data) continue;
          if (!P.event || P.event === "message")
            try {
              let b = Fae.parse(JSON.parse(P.data));
              if (mOe(b) || sEe(b)) {
                if (((m = !0), a !== void 0)) b.id = a;
              }
              this.onmessage?.(b);
            } catch (b) {
              this.onerror?.(b);
            }
        }
        if ((r || d) && !m && this._abortController && !l())
          this._scheduleReconnection(
            {
              resumptionToken: c,
              onresumptiontoken: s,
              replayMessageId: a,
              requestSignal: n,
              onRequestStreamEnd: i
            },
            0
          );
        else if (!l()) i?.();
      } catch (E) {
        if (l()) return;
        if (
          (this.onerror?.(Error(`SSE stream disconnected: ${E}`)),
          (r || d) && !m && this._abortController && !l())
        )
          try {
            this._scheduleReconnection(
              {
                resumptionToken: c,
                onresumptiontoken: s,
                replayMessageId: a,
                requestSignal: n,
                onRequestStreamEnd: i
              },
              0
            );
          } catch (P) {
            (this.onerror?.(
              Error(`Failed to reconnect: ${P instanceof Error ? P.message : String(P)}`)
            ),
              i?.());
          }
        else i?.();
      }
    })();
  }
  async start() {
    if (this._abortController)
      throw Error(
        "StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically."
      );
    this._abortController = new AbortController();
  }
  async finishAuth(e, t) {
    if (!this._oauthProvider) throw new nO("finishAuth requires an OAuthClientProvider");
    let { authorizationCode: r, iss: s } = await pc(e, t, this._oauthProvider, this._url, {
      fetchFn: this._fetchWithInit,
      resourceMetadataUrl: this._resourceMetadataUrl
    });
    if (
      (await BDt(this._oauthProvider, {
        serverUrl: this._url,
        authorizationCode: r,
        iss: s,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit,
        skipIssuerMetadataValidation: this._skipIssuerMetadataValidation
      })) !== "AUTHORIZED"
    )
      throw new nO("Failed to authorize");
  }
  async close() {
    try {
      this._cancelReconnection?.();
    } finally {
      ((this._cancelReconnection = void 0), this._abortController?.abort(), this.onclose?.());
    }
  }
  async send(e, t) {
    return this._send(e, t, !1);
  }
  async _send(e, t, r, s = 0) {
    try {
      let { resumptionToken: a, onresumptiontoken: n } = t || {};
      if (a) {
        this._startOrAuthSse({
          resumptionToken: a,
          replayMessageId: Pte(e) ? e.id : void 0,
          requestSignal: t?.requestSignal
        }).catch((p) => this.onerror?.(p));
        return;
      }
      let i = await this._commonHeaders();
      this._applyBodyDerivedHeaders(i, e);
      let l = Array.isArray(e) ? e.some((p) => IUn(p)) : IUn(e);
      if (l) i.delete("mcp-session-id");
      if (t?.headers !== void 0)
        for (let [p, h] of Object.entries(t.headers)) {
          if (_h.has(p.toLowerCase())) continue;
          i.set(p, h);
        }
      i.set("content-type", "application/json");
      let c = [
        ...(i
          .get("accept")
          ?.split(",")
          .map((p) => p.trim().toLowerCase()) ?? []),
        "application/json",
        "text/event-stream"
      ];
      i.set("accept", [...new Set(c)].join(", "));
      let d = this._abortController?.signal,
        m =
          t?.requestSignal !== void 0 && d !== void 0
            ? lc(d, t.requestSignal)
            : (t?.requestSignal ?? d),
        _ = {
          ...this._requestInit,
          method: "POST",
          headers: i,
          body: JSON.stringify(e),
          signal: m
        },
        E = await (this._fetch ?? fetch)(this._url, _);
      if (l && E.ok) this._sessionId = E.headers.get("mcp-session-id") || void 0;
      if (!E.ok) {
        if (E.status === 401 && this._authProvider) {
          if (E.headers.has("www-authenticate")) {
            let { resourceMetadataUrl: h, scope: g } = o1e(E);
            ((this._resourceMetadataUrl = h), (this._scope = _n(this._scope, g)));
          }
          if (this._authProvider.onUnauthorized && !r)
            return (
              await this._authProvider.onUnauthorized({
                response: E,
                serverUrl: this._url,
                fetchFn: this._fetchWithInit
              }),
              await E.text?.().catch(() => {}),
              this._send(e, t, !0, s)
            );
          if ((await E.text?.().catch(() => {}), r))
            throw new RT(
              ii.ClientHttpAuthentication,
              "Server returned 401 after re-authentication",
              { status: 401, statusText: E.statusText }
            );
          throw new nO();
        }
        let p = await E.text?.().catch(() => null);
        if (E.status === 403) {
          let { resourceMetadataUrl: h, scope: g, error: f, errorDescription: z } = o1e(E);
          if (f === "insufficient_scope") {
            if (
              (await this._stepUpAuthorize(
                {
                  scope: g,
                  resourceMetadataUrl: h,
                  errorDescription: z,
                  statusText: E.statusText,
                  text: p
                },
                s
              )) !== "AUTHORIZED"
            )
              throw new nO();
            return this._send(e, t, r, s + 1);
          }
        }
        if (E.status === 400 && typeof p === "string" && this._isModernEnvelopedRequest(e))
          try {
            let h = Fae.parse(JSON.parse(p)),
              g = (Array.isArray(e) ? e : [e]).filter((f) => Pte(f));
            if (sEe(h) && g.some((f) => f.id === h.id)) {
              this.onmessage?.(h);
              return;
            }
          } catch {}
        throw new RT(ii.ClientHttpNotImplemented, `Error POSTing to endpoint: ${p}`, {
          status: E.status,
          statusText: E.statusText,
          text: p
        });
      }
      if (E.status === 202) {
        if ((await E.text?.().catch(() => {}), UTr(e)))
          this._startOrAuthSse({ resumptionToken: void 0 }).catch((p) => this.onerror?.(p));
        return;
      }
      let P = (Array.isArray(e) ? e : [e]).some(
          (p) => "method" in p && "id" in p && p.id !== void 0
        ),
        y = E.headers.get("content-type"),
        b = Ci(y);
      if (P)
        if (b === "text/event-stream")
          this._handleSseStream(
            E.body,
            {
              onresumptiontoken: n,
              requestSignal: t?.requestSignal,
              onRequestStreamEnd: t?.onRequestStreamEnd
            },
            !1
          );
        else if (b === "application/json") {
          let p = await E.json(),
            h = Array.isArray(p) ? p.map((g) => Fae.parse(g)) : [Fae.parse(p)];
          for (let g of h) this.onmessage?.(g);
        } else
          throw (
            await E.text?.().catch(() => {}),
            new bi(ii.ClientHttpUnexpectedContent, `Unexpected content type: ${y}`, {
              contentType: y
            })
          );
      else await E.text?.().catch(() => {});
    } catch (a) {
      if (t?.requestSignal?.aborted !== !0) this.onerror?.(a);
      throw a;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let e = await this._commonHeaders(),
        t = {
          ...this._requestInit,
          method: "DELETE",
          headers: e,
          signal: this._abortController?.signal
        },
        r = await (this._fetch ?? fetch)(this._url, t);
      if ((await r.text?.().catch(() => {}), !r.ok && r.status !== 405))
        throw new RT(
          ii.ClientHttpFailedToTerminateSession,
          `Failed to terminate session: ${r.statusText}`,
          { status: r.status, statusText: r.statusText }
        );
      this._sessionId = void 0;
    } catch (e) {
      throw (this.onerror?.(e), e);
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(e, t) {
    await this._startOrAuthSse({ resumptionToken: e, onresumptiontoken: t?.onresumptiontoken });
  }
};
export {
  aft,
  Wen,
  pOe,
  PUn,
  Gen,
  tO,
  Fae,
  lft,
  MDt,
  dft,
  z8e,
  DDt,
  zen,
  K8e,
  Ken,
  Ven,
  qen,
  HDt,
  V8e,
  Yen,
  LDt,
  Xen,
  cft,
  NDt,
  $Dt,
  FDt,
  Uae,
  y4,
  ii,
  bi,
  RT,
  ta,
  Cd,
  Pte,
  FTr,
  mOe,
  sEe,
  IUn,
  UTr,
  hbo,
  BTr,
  ybo,
  UDt,
  Jen,
  uft,
  jTr,
  nO,
  BDt,
  o1e,
  WTr,
  jDt,
  GTr,
  _bo,
  YCs,
  bbo,
  Sbo,
  zTr,
  OUn,
  Qen
};

//# sourceMappingURL=chunk-ktghwym4.js.map
