// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { s, n } from "./chunk-h56pfqh7.js";
import { ce } from "./chunk-acd8w9vv.js";
import { Nt } from "./chunk-4hww8411.js";
import { I } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { w } from "./chunk-7m7t89vx.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { a } from "./chunk-4cgvah10.js";
import { Dvt, l0e, sVe, sI, jCe, h_n, __n, RVe } from "./chunk-ajtyjx88.js";
import { os } from "./chunk-jtb5bzvb.js";
import { ln, Un } from "./chunk-7c3thgax.js";
import { $o } from "./chunk-dvghjmtr.js";
import { Ux, zS, ZU, aM, xrr } from "./chunk-at88wjsn.js";
import { v4e, E4e, DZ } from "./chunk-7zgz07kc.js";
import { tce } from "./chunk-bbw420pv.js";
import { Me } from "./chunk-rf7g1m78.js";
import { t6e, ep, su, SF, Oxt, PPn } from "./chunk-3gehn1tm.js";
import { Tr } from "./chunk-nh2498vy.js";
import { Ee } from "./chunk-xzcese97.js";
import { V } from "./chunk-j32s98r9.js";
import { $2 } from "./chunk-9ctchnmq.js";
import { Je } from "./chunk-fgf47p3n.js";
import { mt } from "./chunk-18g32wet.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { YI } from "./chunk-m59vztgd.js";
import { qr } from "./chunk-avncq6qa.js";
import { vs } from "./chunk-artk45zy.js";
import { ft } from "./chunk-g2kc6h82.js";
import { e, r } from "./chunk-f790ajz4.js";
import { ro, Yr, P, C, y, j } from "./chunk-bq35vvkw.js";
import { axe } from "./chunk-ge5t5c4x.js";
import { Ce, S } from "./chunk-a2y39866.js";
j();
var be = [
  {
    type: "text",
    key: "accessKeyId",
    label: "Access key ID",
    placeholder: "AKIA\u2026",
    required: !0
  },
  { type: "text", key: "secretAccessKey", label: "Secret access key", mask: "*", required: !0 },
  {
    type: "text",
    key: "sessionToken",
    label: "Session token",
    mask: "*",
    hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys."
  }
];
function te() {
  let u = w(16),
    { goBack: o, goNext: d, updateWizardData: c, wizardData: l, title: t } = ep();
  const m = l.accessKeyId ?? "",
    g = l.secretAccessKey ?? "",
    h = l.sessionToken ?? "";
  let O;
  if (u[0] !== m || u[1] !== g || u[2] !== h)
    ((O = { accessKeyId: m, secretAccessKey: g, sessionToken: h }),
      (u[0] = m),
      (u[1] = g),
      (u[2] = h),
      (u[3] = O));
  else O = u[3];
  let [p, D] = y(O),
    A;
  if (
    u[4] !== d ||
    u[5] !== c ||
    u[6] !== p.accessKeyId ||
    u[7] !== p.secretAccessKey ||
    u[8] !== p.sessionToken
  )
    ((A = () => {
      (c({
        accessKeyId: p.accessKeyId.trim(),
        secretAccessKey: p.secretAccessKey.trim(),
        sessionToken: p.sessionToken.trim() || void 0
      }),
        d());
    }),
      (u[4] = d),
      (u[5] = c),
      (u[6] = p.accessKeyId),
      (u[7] = p.secretAccessKey),
      (u[8] = p.sessionToken),
      (u[9] = A));
  else A = u[9];
  let k = A;
  const f = t ?? "Set up AWS Bedrock";
  let E;
  if (u[10] === S) ((E = (b, v) => D((T) => ({ ...T, [b]: v }))), (u[10] = E));
  else E = u[10];
  let _;
  if (u[11] !== o || u[12] !== k || u[13] !== f || u[14] !== p)
    ((_ = e($2, {
      title: f,
      subtitle: "AWS access keys",
      fields: be,
      values: p,
      onChange: E,
      onSubmit: k,
      onCancel: o,
      submitLabel: "Continue"
    })),
      (u[11] = o),
      (u[12] = k),
      (u[13] = f),
      (u[14] = p),
      (u[15] = _));
  else _ = u[15];
  return _;
}
var B = {
  AUTH_METHOD: 0,
  PROFILE: 1,
  BEARER: 2,
  ACCESS_KEY_ID: 3,
  REGION: 4,
  VERIFY: 5,
  PIN_MODELS: 6,
  CONFIRM: 7
};
function ie() {
  let l = w(9),
    { goBack: o, goToStep: d, updateWizardData: c } = ep(),
    t;
  if (l[0] === S)
    ((t = [
      { label: "AWS profile (SSO or named profile)", value: "profile" },
      { label: "Bedrock API key (bearer token)", value: "bearer" },
      { label: "Access key + secret", value: "accessKey" },
      { label: "Use credentials already in my environment", value: "environment" }
    ]),
      (l[0] = t));
  else t = l[0];
  let m = t,
    g;
  if (l[1] === S)
    ((g = {
      profile: B.PROFILE,
      bearer: B.BEARER,
      accessKey: B.ACCESS_KEY_ID,
      environment: B.REGION
    }),
      (l[1] = g));
  else g = l[1];
  let h = g,
    u;
  if (l[2] !== d || l[3] !== c)
    ((u = (O) => {
      let p = O;
      (c({ authMethod: p }), d(h[p]));
    }),
      (l[2] = d),
      (l[3] = c),
      (l[4] = u));
  else u = l[4];
  let D = u,
    A;
  if (l[5] === S)
    ((A = e(n, {
      dimColor: !0,
      children:
        "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI."
    })),
      (l[5] = A));
  else A = l[5];
  let k;
  if (l[6] !== o || l[7] !== D)
    ((k = e(su, {
      subtitle: "How do you authenticate to AWS?",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [A, e(Je, { options: m, onChange: D, onCancel: o })]
      })
    })),
      (l[6] = o),
      (l[7] = D),
      (l[8] = k));
  else k = l[8];
  return k;
}
j();
function se() {
  let p = w(17),
    { goBack: o, goToStep: d, updateWizardData: c, wizardData: l } = ep(),
    [t, m] = y(l.bearerToken ?? ""),
    [g, h] = y(t.length),
    [u, O] = y(null),
    D;
  if (p[0] === S) ((D = { context: "Settings" }), (p[0] = D));
  else D = p[0];
  lt("confirm:no", o, D);
  let A;
  if (p[1] !== d || p[2] !== c || p[3] !== t)
    ((A = () => {
      let k = t.trim();
      if (!k) {
        O("API key is required");
        return;
      }
      (O(null), c({ bearerToken: k }), d(B.REGION));
    }),
      (p[1] = d),
      (p[2] = c),
      (p[3] = t),
      (p[4] = A));
  else A = p[4];
  let f = A,
    E;
  if (p[5] === S)
    ((E = r(Ee, {
      children: [
        e(V, { chord: "enter", action: "continue" }),
        e(ft, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      ]
    })),
      (p[5] = E));
  else E = p[5];
  let b, v;
  if (p[6] === S)
    ((b = e(n, { children: "Paste your Bedrock API key." })),
      (v = e(n, {
        dimColor: !0,
        children: "Generate one in the AWS console under Bedrock \u2192 API keys."
      })),
      (p[6] = b),
      (p[7] = v));
  else ((b = p[6]), (v = p[7]));
  let T;
  if (p[8] !== g || p[9] !== f || p[10] !== t)
    ((T = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: t,
        onChange: m,
        onSubmit: f,
        placeholder: "bedrock-api-key-\u2026",
        mask: "*",
        columns: 60,
        cursorOffset: g,
        onChangeCursorOffset: h,
        focus: !0,
        showCursor: !0
      })
    })),
      (p[8] = g),
      (p[9] = f),
      (p[10] = t),
      (p[11] = T));
  else T = p[11];
  let _;
  if (p[12] !== u)
    ((_ = u && e(s, { marginTop: 1, children: e(vs, { error: u }) })), (p[12] = u), (p[13] = _));
  else _ = p[13];
  let R;
  if (p[14] !== T || p[15] !== _)
    ((R = e(su, {
      subtitle: "Bedrock API key",
      footerText: E,
      children: r(s, { flexDirection: "column", children: [b, v, T, _] })
    })),
      (p[14] = T),
      (p[15] = _),
      (p[16] = R));
  else R = p[16];
  return R;
}
j();
function Jr(U) {
  return U[1] !== void 0;
}
function Zr(o) {
  let [H, F] = o;
  return r(
    n,
    {
      children: [
        "  ",
        e(n, { color: "suggestion", children: H }),
        " =",
        " ",
        Ie.has(H) ? e(n, { dimColor: !0, children: "(hidden)" }) : F
      ]
    },
    H
  );
}
function We(o) {
  let d = {
    CLAUDE_CODE_USE_BEDROCK: "1",
    CLAUDE_CODE_USE_VERTEX: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    AWS_REGION: o.region,
    AWS_PROFILE: void 0,
    AWS_BEARER_TOKEN_BEDROCK: void 0,
    AWS_ACCESS_KEY_ID: void 0,
    AWS_SECRET_ACCESS_KEY: void 0,
    AWS_SESSION_TOKEN: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  switch (o.authMethod) {
    case "profile":
      d.AWS_PROFILE = o.awsProfile;
      break;
    case "bearer":
      d.AWS_BEARER_TOKEN_BEDROCK = o.bearerToken;
      break;
    case "accessKey":
      if (
        ((d.AWS_ACCESS_KEY_ID = o.accessKeyId),
        (d.AWS_SECRET_ACCESS_KEY = o.secretAccessKey),
        o.sessionToken)
      )
        d.AWS_SESSION_TOKEN = o.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (o.pinSonnet) d.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) d.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) d.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) d.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return d;
}
var Ie = new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);
function le(o) {
  let h = w(31),
    { onComplete: d } = o,
    { storageV5: c } = Me(),
    { goBack: l, wizardData: t } = ep(),
    [m, g] = y(null),
    u;
  if (h[0] === S) ((u = os(ln("userSettings") ?? "~/.claude/settings.json")), (h[0] = u));
  else u = h[0];
  let O = u,
    p;
  if (h[1] !== t) ((p = We(t)), (h[1] = t), (h[2] = p));
  else p = h[2];
  let D = p,
    A;
  if (h[3] !== D) ((A = Object.entries(D).filter(Jr)), (h[3] = D), (h[4] = A));
  else A = h[4];
  let k = A,
    f = C(!1),
    E;
  if (
    h[5] !== D ||
    h[6] !== d ||
    h[7] !== c ||
    h[8] !== t.authMethod ||
    h[9] !== t.awsProfile ||
    h[10] !== t.pinFable ||
    h[11] !== t.pinHaiku ||
    h[12] !== t.pinOpus ||
    h[13] !== t.pinSonnet ||
    h[14] !== t.verifiedIdentity
  )
    ((E = async () => {
      if (f.current) {
        return;
      }
      f.current = !0;
      let { error: b } = await Un("userSettings", { env: D }, void 0, c);
      if (b) {
        ((f.current = !1), g(b.message));
        return;
      }
      (a("tengu_bedrock_setup_complete", {
        auth_method: ce(t.authMethod),
        pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
        verified: Boolean(t.verifiedIdentity)
      }),
        d(
          `Bedrock configuration saved to ${O}.${t.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${t.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`
        ));
    }),
      (h[5] = D),
      (h[6] = d),
      (h[7] = c),
      (h[8] = t.authMethod),
      (h[9] = t.awsProfile),
      (h[10] = t.pinFable),
      (h[11] = t.pinHaiku),
      (h[12] = t.pinOpus),
      (h[13] = t.pinSonnet),
      (h[14] = t.verifiedIdentity),
      (h[15] = E));
  else E = h[15];
  let v = E,
    T;
  if (h[16] === S)
    ((T = r(n, { children: ["These will be written to ", O, " under env:"] })), (h[16] = T));
  else T = h[16];
  let _;
  if (h[17] !== k)
    ((_ = e(s, { flexDirection: "column", children: k.map(Zr) })), (h[17] = k), (h[18] = _));
  else _ = h[18];
  let R;
  if (h[19] !== t.verifiedIdentity)
    ((R =
      t.verifiedIdentity &&
      r(n, {
        dimColor: !0,
        children: [e(mt, { status: "success", withSpace: !0 }), "Verified as ", t.verifiedIdentity]
      })),
      (h[19] = t.verifiedIdentity),
      (h[20] = R));
  else R = h[20];
  let G;
  if (h[21] !== m) ((G = e(vs, { error: m })), (h[21] = m), (h[22] = G));
  else G = h[22];
  let X;
  if (h[23] !== l || h[24] !== v)
    ((X = e(dr, { confirmLabel: "Save", cancelLabel: "Cancel", onConfirm: v, onCancel: l })),
      (h[23] = l),
      (h[24] = v),
      (h[25] = X));
  else X = h[25];
  let Te;
  if (h[26] !== _ || h[27] !== R || h[28] !== G || h[29] !== X)
    ((Te = e(su, {
      subtitle: "Confirm and save",
      children: r(s, { flexDirection: "column", gap: 1, children: [T, _, R, G, X] })
    })),
      (h[26] = _),
      (h[27] = R),
      (h[28] = G),
      (h[29] = X),
      (h[30] = Te));
  else Te = h[30];
  return Te;
}
var Ke = Ce(axe(), 1);
var Q = "Bedrock setup verification timed out";
function ue(o) {
  let d = sVe(o),
    c = (l) => {
      let t = $o[l].bedrock;
      if (t === null)
        throw Error(
          "A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier"
        );
      return { needle: $o[l].firstParty, fallback: l0e(t, d) };
    };
  return { sonnet: c(sI), opus: c(h_n), haiku: c(jCe), fable: c(__n) };
}
async function fe(o) {
  if (o.authMethod === "bearer") return to(o);
  let d = xrr();
  try {
    let c = await Le(o),
      t = {
        ...(await E4e({
          url: `https://bedrock.${o.region}.amazonaws.com`,
          region: o.region,
          requestTimeoutMs: RVe
        })),
        region: o.region,
        ...(c && { credentials: c })
      },
      { STSClient: m, GetCallerIdentityCommand: g } = await import("./chunk-0k7jdy19.js"),
      h = await Nt(new m(t).send(new g({})), d, Q),
      u = h.Arn ?? h.UserId ?? "(unknown)",
      { BedrockClient: O, ListInferenceProfilesCommand: p } = await import("./chunk-rsw8cmmq.js"),
      D = new O(t),
      A = [],
      k;
    do {
      let f = await Nt(
        D.send(new p({ ...(k && { nextToken: k }), typeEquals: "SYSTEM_DEFINED" })),
        d,
        Q
      );
      for (let E of f.inferenceProfileSummaries ?? [])
        if (E.inferenceProfileId?.includes("anthropic")) A.push(E.inferenceProfileId);
      k = f.nextToken;
    } while (k);
    return { status: "ok", identity: u, profiles: A };
  } catch (c) {
    return { status: "error", ...io(c, o, d) };
  }
}
async function me(o, d) {
  return PPn(
    () => eo(o),
    d,
    (c) => (c instanceof Error && (c.message === Q || Ue(c)) ? "network" : "auth")
  );
}
async function eo(o) {
  let [{ AnthropicBedrock: d }, { getProxyFetchOptions: c }] = await Promise.all([
      import("./chunk-6s1629fd.js"),
      import("./chunk-pzqns6vt.js")
    ]),
    l = {
      awsRegion: o.region,
      maxRetries: 0,
      fetchOptions: c({
        url: i.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${o.region}.amazonaws.com`
      })
    },
    t = await oo(o),
    m = tce(),
    g = {
      authToken: null,
      defaultHeaders: {
        ...m,
        ...zS(),
        ...ZU(),
        Authorization: null,
        ...(!Ux() && { "X-Api-Key": null })
      },
      ...aM
    };
  switch (t.kind) {
    case "bearer":
      return new d({
        ...l,
        apiKey: t.token,
        defaultHeaders: {
          ...m,
          ...zS(),
          ...ZU(),
          Authorization: `Bearer ${t.token}`,
          ...(!Ux() && { "X-Api-Key": null })
        }
      });
    case "sigv4":
      return new d({
        ...l,
        ...g,
        awsAccessKey: t.accessKeyId,
        awsSecretKey: t.secretAccessKey,
        awsSessionToken: t.sessionToken
      });
    case "default": {
      let h = i.AWS_BEARER_TOKEN_BEDROCK;
      if (h)
        return new d({
          ...l,
          apiKey: h,
          defaultHeaders: {
            ...m,
            ...zS(),
            ...ZU(),
            Authorization: `Bearer ${h}`,
            ...(!Ux() && { "X-Api-Key": null })
          }
        });
      return new d({ ...l, ...g, providerChainResolver: () => Fe(o, void 0) });
    }
  }
}
async function oo(o) {
  if (o.authMethod === "bearer") return { kind: "bearer", token: o.bearerToken };
  let d = await Le(o);
  if (!d) return { kind: "default" };
  let c = await d();
  return {
    kind: "sigv4",
    accessKeyId: c.accessKeyId,
    secretAccessKey: c.secretAccessKey,
    sessionToken: c.sessionToken
  };
}
async function to(o) {
  let d = ue(o.region).haiku.fallback,
    c = await me(o, d);
  if (c.ok)
    return {
      status: "ok",
      identity: "Bedrock API key",
      profiles: [],
      note: `Test request to ${d} succeeded.`
    };
  switch (c.reason) {
    case "auth":
      return { status: "error", error: "Invalid Bedrock API key. Check the key and try again." };
    case "permission":
      return {
        status: "error",
        error:
          "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel."
      };
    case "model":
      return {
        status: "ok",
        identity: "Bedrock API key",
        profiles: [],
        note: `The key works, but ${d} is not enabled in your account. Pin a model you have access to on the next step.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Bedrock in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return { status: "error", error: "The test request failed. Check the key and region." };
  }
}
async function Le(o) {
  switch (o.authMethod) {
    case "profile":
      return Fe(o, o.awsProfile);
    case "accessKey":
      return async () => ({
        accessKeyId: o.accessKeyId,
        secretAccessKey: o.secretAccessKey,
        ...(o.sessionToken && { sessionToken: o.sessionToken })
      });
    case "environment":
      return;
    default:
      return;
  }
}
async function Fe(o, d) {
  let [{ fromNodeProviderChain: c }, l] = await Promise.all([
      import("./chunk-axg8eadd.js"),
      DZ({ url: v4e(String(o.region)), requestTimeoutMs: RVe })
    ]),
    t = l ?? new Ke.FetchHttpHandler({ requestTimeout: RVe }),
    m = c({
      profile: d,
      ignoreCache: !0,
      parentClientConfig: { region: o.region, requestHandler: t },
      clientConfig: { requestHandler: t }
    });
  return (g) => Nt(m(g), xrr(), Q);
}
function Ue(o) {
  return (
    o?.name === "TimeoutError" ||
    (o?.name === "CredentialsProviderError" && (o.message ?? "").startsWith("TimeoutError:"))
  );
}
function io(o, d, c) {
  let l = o,
    t = l?.name ?? "Error",
    m = l?.message ?? String(o);
  if (m === Q)
    return {
      error: `Timed out after ${Math.ceil(c / 1000)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.`
    };
  if (Ue(l))
    return {
      error: "A request to AWS timed out. Check your network and proxy settings, then try again."
    };
  let g = d.authMethod === "profile" ? `aws sso login --profile ${d.awsProfile}` : void 0;
  switch (t) {
    case "CredentialsProviderError":
      return d.authMethod === "profile"
        ? {
            error: `Could not load credentials for profile "${d.awsProfile}". If this is an SSO profile, run:`,
            command: g
          }
        : { error: `No AWS credentials found. ${m}` };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return d.authMethod === "profile"
        ? { error: "SSO session expired. Run:", command: g }
        : { error: `Credentials expired. ${m}` };
    case "ForbiddenException":
      return d.authMethod === "profile"
        ? {
            error: `SSO portal denied access to the role for profile "${d.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.`
          }
        : { error: `Forbidden. ${m}` };
    case "AccessDeniedException":
      return {
        error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${m}`
      };
    case "UnrecognizedClientException":
    case "InvalidSignatureException":
      return { error: `Invalid credentials. ${m}` };
    case "UnknownEndpoint":
    case "ENOTFOUND":
      return {
        error: `Cannot reach AWS in region "${d.region}". Check the region name and your network.`
      };
    default:
      return { error: `${t}: ${m}` };
  }
}
function He(o, d) {
  return (o.discoveredProfiles ?? []).filter((c) => c.toLowerCase().includes(d));
}
var $e = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no InvokeModel permission",
    model: "not enabled in this account",
    network: "unreachable",
    other: "request failed"
  },
  intro:
    "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.",
  resolveTierDefaults: (o) => {
    let d = ue(o.region),
      c = sVe(o.region);
    return Object.fromEntries(
      SF.map((l) => [
        l,
        { auto: Dvt(o.discoveredProfiles ?? [], d[l].needle, c) ?? void 0, fallback: d[l].fallback }
      ])
    );
  },
  listTierCandidates: (o, d) => He(d, o).sort().reverse(),
  pickerSubtitle: (o, d) => {
    let c = He(d, o).length;
    return c > 0
      ? `${c} ${YI[o]} ${I(c, "profile")} in your account \xB7 each tested with a one-token request.`
      : `No ${YI[o]} profiles found in your account.`;
  },
  probe: (o, d) => me(o, d)
};
function pe() {
  let d = w(2),
    { updateWizardData: o } = ep(),
    c;
  if (d[0] !== o) ((c = e(Oxt, { provider: $e, onPins: o })), (d[0] = o), (d[1] = c));
  else c = d[1];
  return c;
}
j();
import { readFile as so } from "fs/promises";
import { homedir as ao } from "os";
import { join as Ve } from "path";
async function ge() {
  let o = new Set(),
    d = ao();
  for (let { path: c, re: l } of [
    { path: Ve(d, ".aws", "config"), re: /^\[(?:profile\s+)?([^\]]+)\]/gm },
    { path: Ve(d, ".aws", "credentials"), re: /^\[([^\]]+)\]/gm }
  ])
    try {
      for (let t of (await so(c, "utf8")).matchAll(l)) {
        let m = t[1]?.trim();
        if (m && !m.startsWith("sso-session ")) o.add(m);
      }
    } catch {}
  return [...o].sort();
}
function Ao() {
  return [];
}
function Eo() {
  return ge().catch(Ao);
}
function Do(Mo) {
  return Mo.toLowerCase().includes("bedrock");
}
function wo(gr) {
  return { label: gr, value: gr };
}
var ee = "__manual__",
  qe = 12;
function Ae() {
  let d = w(3),
    [o] = y(Eo),
    c;
  if (d[0] === S)
    ((c = e(su, {
      subtitle: "AWS profile",
      children: e(qr, { message: "Reading ~/.aws/config\u2026" })
    })),
      (d[0] = c));
  else c = d[0];
  let l;
  if (d[1] !== o)
    ((l = e(ro, { fallback: c, children: e(Se, { profilesPromise: o }) })), (d[1] = o), (d[2] = l));
  else l = d[2];
  return l;
}
function Se(o) {
  let u = w(52),
    { profilesPromise: d } = o,
    c = Yr(d),
    { goBack: l, goToStep: t, updateWizardData: m, wizardData: g } = ep(),
    h = c.length > qe,
    O;
  if (u[0] !== c || u[1] !== g.awsProfile)
    ((O = g.awsProfile && !c.includes(g.awsProfile)),
      (u[0] = c),
      (u[1] = g.awsProfile),
      (u[2] = O));
  else O = u[2];
  let p = Boolean(O),
    [D, A] = y(c.length === 0 || h || p),
    k;
  if (u[3] !== c || u[4] !== h) ((k = h ? c.find(Do) : void 0), (u[3] = c), (u[4] = h), (u[5] = k));
  else k = u[5];
  let f = k,
    [E, b] = y(g.awsProfile ?? f ?? ""),
    [v, T] = y(E.length),
    [_, R] = y(null),
    G;
  if (u[6] !== D) ((G = { context: "Settings", isActive: D }), (u[6] = D), (u[7] = G));
  else G = u[7];
  lt("confirm:no", l, G);
  let X;
  if (u[8] !== t || u[9] !== m)
    ((X = (Te) => {
      (m({ awsProfile: Te }), t(B.REGION));
    }),
      (u[8] = t),
      (u[9] = m),
      (u[10] = X));
  else X = u[10];
  let U = X;
  if (!D) {
    const H = c.length;
    let F;
    if (u[11] !== c.length) ((F = I(c.length, "profile")), (u[11] = c.length), (u[12] = F));
    else F = u[12];
    let q;
    if (u[13] !== c.length || u[14] !== F)
      ((q = r(n, {
        dimColor: !0,
        children: ["Found ", H, " ", F, " in ~/.aws/config and ~/.aws/credentials."]
      })),
        (u[13] = c.length),
        (u[14] = F),
        (u[15] = q));
    else q = u[15];
    let M;
    if (u[16] !== c) {
      const K = c.map(wo);
      let W;
      if (u[18] === S) ((W = { label: "Type a different name\u2026", value: ee }), (u[18] = W));
      else W = u[18];
      M = [...K, W];
      ((u[16] = c), (u[17] = M));
    } else M = u[17];
    let K;
    if (u[19] !== c || u[20] !== g.awsProfile)
      ((K = g.awsProfile && c.includes(g.awsProfile) ? g.awsProfile : void 0),
        (u[19] = c),
        (u[20] = g.awsProfile),
        (u[21] = K));
    else K = u[21];
    let W;
    if (u[22] !== U)
      ((W = (mr) => {
        if (mr === ee) A(!0);
        else U(mr);
      }),
        (u[22] = U),
        (u[23] = W));
    else W = u[23];
    let L;
    if (u[24] !== l || u[25] !== W || u[26] !== M || u[27] !== K)
      ((L = e(Je, { options: M, defaultValue: K, onChange: W, onCancel: l })),
        (u[24] = l),
        (u[25] = W),
        (u[26] = M),
        (u[27] = K),
        (u[28] = L));
    else L = u[28];
    let J;
    if (u[29] !== L || u[30] !== q)
      ((J = e(su, {
        subtitle: "AWS profile",
        children: r(s, { flexDirection: "column", gap: 1, children: [q, L] })
      })),
        (u[29] = L),
        (u[30] = q),
        (u[31] = J));
    else J = u[31];
    return J;
  }
  let H;
  if (u[32] !== U || u[33] !== E)
    ((H = () => {
      let pr = E.trim();
      if (!pr) {
        R("Profile name is required");
        return;
      }
      (R(null), U(pr));
    }),
      (u[32] = U),
      (u[33] = E),
      (u[34] = H));
  else H = u[34];
  let ve = H,
    F;
  if (u[35] === S)
    ((F = r(Ee, {
      children: [
        e(V, { chord: "enter", action: "continue" }),
        e(ft, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      ]
    })),
      (u[35] = F));
  else F = u[35];
  let q;
  if (u[36] === S)
    ((q = e(n, { children: "The name from ~/.aws/config (after [profile \u2026])." })),
      (u[36] = q));
  else q = u[36];
  let M;
  if (u[37] !== f || u[38] !== c.length || u[39] !== h)
    ((M =
      h &&
      r(n, {
        dimColor: !0,
        children: [
          "Found ",
          c.length,
          " profiles \u2014 too many to list.",
          f && ` Prepopulated with "${f}".`
        ]
      })),
      (u[37] = f),
      (u[38] = c.length),
      (u[39] = h),
      (u[40] = M));
  else M = u[40];
  let K;
  if (u[41] === S)
    ((K = e(n, {
      dimColor: !0,
      children: "If this is an SSO profile, run `aws sso login --profile NAME` first."
    })),
      (u[41] = K));
  else K = u[41];
  let W;
  if (u[42] !== v || u[43] !== ve || u[44] !== E)
    ((W = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: E,
        onChange: b,
        onSubmit: ve,
        placeholder: "my-bedrock-profile",
        columns: 60,
        cursorOffset: v,
        onChangeCursorOffset: T,
        focus: !0,
        showCursor: !0
      })
    })),
      (u[42] = v),
      (u[43] = ve),
      (u[44] = E),
      (u[45] = W));
  else W = u[45];
  let L;
  if (u[46] !== _)
    ((L = _ && e(s, { marginTop: 1, children: e(vs, { error: _ }) })), (u[46] = _), (u[47] = L));
  else L = u[47];
  let J;
  if (u[48] !== W || u[49] !== L || u[50] !== M)
    ((J = e(su, {
      subtitle: "AWS profile name",
      footerText: F,
      children: r(s, { flexDirection: "column", children: [q, M, K, W, L] })
    })),
      (u[48] = W),
      (u[49] = L),
      (u[50] = M),
      (u[51] = J));
  else J = u[51];
  return J;
}
j();
function we() {
  let p = w(17),
    { goBack: o, goNext: d, updateWizardData: c, wizardData: l } = ep(),
    [t, m] = y(l.region ?? "us-east-1"),
    [g, h] = y(t.length),
    [u, O] = y(null),
    D;
  if (p[0] === S) ((D = { context: "Settings" }), (p[0] = D));
  else D = p[0];
  lt("confirm:no", o, D);
  let A;
  if (p[1] !== d || p[2] !== c || p[3] !== t)
    ((A = () => {
      let k = t.trim();
      if (!k) {
        O("Region is required");
        return;
      }
      (O(null), c({ region: k }), d());
    }),
      (p[1] = d),
      (p[2] = c),
      (p[3] = t),
      (p[4] = A));
  else A = p[4];
  let f = A,
    E;
  if (p[5] === S)
    ((E = r(Ee, {
      children: [
        e(V, { chord: "enter", action: "continue" }),
        e(ft, {
          action: "confirm:no",
          context: "Settings",
          fallback: "Esc",
          description: "go back"
        })
      ]
    })),
      (p[5] = E));
  else E = p[5];
  let b, v;
  if (p[6] === S)
    ((b = e(n, { children: "Where your Bedrock models are enabled." })),
      (v = e(n, {
        dimColor: !0,
        children:
          "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region."
      })),
      (p[6] = b),
      (p[7] = v));
  else ((b = p[6]), (v = p[7]));
  let T;
  if (p[8] !== g || p[9] !== f || p[10] !== t)
    ((T = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: t,
        onChange: m,
        onSubmit: f,
        placeholder: "us-east-1",
        columns: 40,
        cursorOffset: g,
        onChangeCursorOffset: h,
        focus: !0,
        showCursor: !0
      })
    })),
      (p[8] = g),
      (p[9] = f),
      (p[10] = t),
      (p[11] = T));
  else T = p[11];
  let _;
  if (p[12] !== u)
    ((_ = u && e(s, { marginTop: 1, children: e(vs, { error: u }) })), (p[12] = u), (p[13] = _));
  else _ = p[13];
  let R;
  if (p[14] !== T || p[15] !== _)
    ((R = e(su, {
      subtitle: "AWS region",
      footerText: E,
      children: r(s, { flexDirection: "column", children: [b, v, T, _] })
    })),
      (p[14] = T),
      (p[15] = _),
      (p[16] = R));
  else R = p[16];
  return R;
}
j();
function _e() {
  let t = w(39),
    { goBack: o, goNext: d, updateWizardData: c, wizardData: l } = ep(),
    m;
  if (t[0] === S) ((m = { phase: "checking" }), (t[0] = m));
  else m = t[0];
  let [g, h] = y(m),
    u;
  if (t[1] !== c || t[2] !== l)
    ((u = () => {
      let O = !1;
      return (
        fe(l).then((p) => {
          if (O) {
            return;
          }
          if (p.status === "ok")
            c({ verifiedIdentity: p.identity, discoveredProfiles: p.profiles });
          else c({ verifiedIdentity: void 0, discoveredProfiles: void 0 });
          h({ phase: "done", result: p });
        }),
        () => {
          O = !0;
        }
      );
    }),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u));
  else u = t[3];
  let D;
  if (t[4] === S) ((D = []), (t[4] = D));
  else D = t[4];
  if ((P(u, D), g.phase === "checking")) {
    const A =
      l.authMethod === "bearer"
        ? "Sending a test request to Bedrock\u2026"
        : "Calling AWS STS and Bedrock\u2026";
    let k;
    if (t[5] !== A)
      ((k = e(su, {
        subtitle: "Verifying credentials",
        children: e(qr, { message: A, subtitle: "This may take a few seconds." })
      })),
        (t[5] = A),
        (t[6] = k));
    else k = t[6];
    return k;
  }
  let { result: f } = g;
  switch (f.status) {
    case "ok": {
      let A;
      if (t[7] === S) ((A = e(mt, { status: "success", withSpace: !0 })), (t[7] = A));
      else A = t[7];
      let k;
      if (t[8] !== f.identity)
        ((k = r(n, {
          children: [A, "Authenticated as ", e(n, { bold: !0, children: f.identity })]
        })),
          (t[8] = f.identity),
          (t[9] = k));
      else k = t[9];
      let E;
      if (t[10] !== f.note || t[11] !== f.profiles)
        ((E =
          f.note ??
          (f.profiles.length > 0
            ? `Found ${f.profiles.length} Anthropic inference ${I(f.profiles.length, "profile")} in this region.`
            : "No Anthropic inference profiles found in this region. You may still proceed \u2014 model defaults will use the built-in IDs.")),
          (t[10] = f.note),
          (t[11] = f.profiles),
          (t[12] = E));
      else E = t[12];
      let b;
      if (t[13] !== E) ((b = e(n, { dimColor: !0, children: E })), (t[13] = E), (t[14] = b));
      else b = t[14];
      let v;
      if (t[15] === S) ((v = [{ label: "Continue", value: "continue" }]), (t[15] = v));
      else v = t[15];
      let T;
      if (t[16] !== d) ((T = () => d()), (t[16] = d), (t[17] = T));
      else T = t[17];
      let _;
      if (t[18] !== o || t[19] !== T)
        ((_ = e(Je, { options: v, onChange: T, onCancel: o })),
          (t[18] = o),
          (t[19] = T),
          (t[20] = _));
      else _ = t[20];
      let R;
      if (t[21] !== k || t[22] !== b || t[23] !== _)
        ((R = e(su, {
          subtitle: "Verification",
          children: r(s, { flexDirection: "column", gap: 1, children: [k, b, _] })
        })),
          (t[21] = k),
          (t[22] = b),
          (t[23] = _),
          (t[24] = R));
      else R = t[24];
      return R;
    }
    case "error": {
      let A;
      if (t[25] === S) ((A = e(mt, { status: "error", withSpace: !0 })), (t[25] = A));
      else A = t[25];
      let k;
      if (t[26] !== f.error)
        ((k = r(n, { children: [A, f.error] })), (t[26] = f.error), (t[27] = k));
      else k = t[27];
      let E;
      if (t[28] !== f.command)
        ((E = f.command && r(n, { bold: !0, color: "suggestion", children: ["    ", f.command] })),
          (t[28] = f.command),
          (t[29] = E));
      else E = t[29];
      let b;
      if (t[30] !== k || t[31] !== E)
        ((b = r(s, { flexDirection: "column", children: [k, E] })),
          (t[30] = k),
          (t[31] = E),
          (t[32] = b));
      else b = t[32];
      let v;
      if (t[33] !== o || t[34] !== d)
        ((v = e(dr, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: d,
          onCancel: o
        })),
          (t[33] = o),
          (t[34] = d),
          (t[35] = v));
      else v = t[35];
      let T;
      if (t[36] !== b || t[37] !== v)
        ((T = e(su, {
          subtitle: "Verification failed",
          color: "error",
          children: r(s, { flexDirection: "column", gap: 1, children: [b, v] })
        })),
          (t[36] = b),
          (t[37] = v),
          (t[38] = T));
      else T = t[38];
      return T;
    }
  }
}
function No() {}
var fr = [ie, Ae, se, te, we, _e, pe, le];
function Pxt(o) {
  let t = w(7),
    { onComplete: d, onCancel: c, exitOnCtrlCD: l } = o,
    m;
  if (t[0] !== d) ((m = { onComplete: d }), (t[0] = d), (t[1] = m));
  else m = t[1];
  let g;
  if (t[2] === S) ((g = {}), (t[2] = g));
  else g = t[2];
  let h;
  if (t[3] !== l || t[4] !== c || t[5] !== m)
    ((h = e(t6e, {
      steps: fr,
      stepProps: m,
      initialData: g,
      onComplete: No,
      onCancel: c,
      exitOnCtrlCD: l,
      title: "Set up Amazon Bedrock",
      showStepCounter: !1
    })),
      (t[3] = l),
      (t[4] = c),
      (t[5] = m),
      (t[6] = h));
  else h = t[6];
  return h;
}
export { Pxt };

//# sourceMappingURL=chunk-8pw39z3t.js.map
