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
import { te } from "./chunk-4kxznmzw.js";
import { LCt } from "./chunk-jazcqqqr.js";
import { I } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { w } from "./chunk-7m7t89vx.js";
import { lt } from "./chunk-kk8f9f8q.js";
import { a } from "./chunk-4cgvah10.js";
import { sI, jCe, y_n, __n } from "./chunk-ajtyjx88.js";
import { os } from "./chunk-jtb5bzvb.js";
import { ln, Un } from "./chunk-7c3thgax.js";
import { $o } from "./chunk-dvghjmtr.js";
import { aM, KKt, hRe, yRe } from "./chunk-at88wjsn.js";
import { tce } from "./chunk-bbw420pv.js";
import { Me } from "./chunk-rf7g1m78.js";
import { t6e, ep, su, SF, Oxt, PPn } from "./chunk-3gehn1tm.js";
import { Je } from "./chunk-fgf47p3n.js";
import { V } from "./chunk-j32s98r9.js";
import { mt } from "./chunk-18g32wet.js";
import { Ee } from "./chunk-xzcese97.js";
import { Tr } from "./chunk-nh2498vy.js";
import { dr } from "./chunk-zgvc8m5v.js";
import { YI } from "./chunk-m59vztgd.js";
import { sn } from "./chunk-ngj43h87.js";
import { qr } from "./chunk-avncq6qa.js";
import { vs } from "./chunk-artk45zy.js";
import { ft } from "./chunk-g2kc6h82.js";
import { e, r } from "./chunk-f790ajz4.js";
import { eFn } from "./chunk-7yf7msy4.js";
import { ro, Yr, P, C, y, j } from "./chunk-bq35vvkw.js";
import { S } from "./chunk-a2y39866.js";
var k = {
  AUTH_METHOD: 0,
  SERVICE_ACCOUNT: 1,
  PROJECT: 2,
  REGION: 3,
  VERIFY: 4,
  PIN_MODELS: 5,
  CONFIRM: 6
};
function ee() {
  let t = w(10),
    { goBack: o, goToStep: l, updateWizardData: c, wizardData: m } = ep(),
    h;
  if (t[0] === S)
    ((h = [
      { label: "Application Default Credentials (gcloud auth)", value: "adc" },
      { label: "Service account key file", value: "serviceAccount" },
      { label: "Use credentials already in my environment", value: "environment" }
    ]),
      (t[0] = h));
  else h = t[0];
  let p = h,
    f;
  if (t[1] === S)
    ((f = { adc: k.PROJECT, serviceAccount: k.SERVICE_ACCOUNT, environment: k.PROJECT }),
      (t[1] = f));
  else f = t[1];
  let u = f,
    R;
  if (t[2] !== l || t[3] !== c)
    ((R = (g) => {
      let O = g;
      (c({ authMethod: O }), l(u[O]));
    }),
      (t[2] = l),
      (t[3] = c),
      (t[4] = R));
  else R = t[4];
  let E = R,
    d;
  if (t[5] === S)
    ((d = e(n, {
      dimColor: !0,
      children:
        "Claude Code uses the standard GCP credential chain. Pick the method you already use with gcloud or in your deployment."
    })),
      (t[5] = d));
  else d = t[5];
  let x;
  if (t[6] !== o || t[7] !== E || t[8] !== m.authMethod)
    ((x = e(su, {
      subtitle: "How do you authenticate to Google Cloud?",
      children: r(s, {
        flexDirection: "column",
        gap: 1,
        children: [d, e(Je, { options: p, defaultValue: m.authMethod, onChange: E, onCancel: o })]
      })
    })),
      (t[6] = o),
      (t[7] = E),
      (t[8] = m.authMethod),
      (t[9] = x));
  else x = t[9];
  return x;
}
j();
function St(J) {
  return J[1] !== void 0;
}
function kt(o) {
  let [z, U] = o;
  return r(n, { children: ["  ", e(n, { color: "suggestion", children: z }), " = ", U] }, z);
}
function _e(o) {
  let l = {
    CLAUDE_CODE_USE_VERTEX: "1",
    CLAUDE_CODE_USE_BEDROCK: void 0,
    CLAUDE_CODE_USE_FOUNDRY: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0,
    CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0,
    CLAUDE_CODE_USE_MANTLE: void 0,
    ANTHROPIC_VERTEX_PROJECT_ID: o.projectId,
    CLOUD_ML_REGION: o.region,
    GOOGLE_APPLICATION_CREDENTIALS: void 0,
    ANTHROPIC_DEFAULT_SONNET_MODEL: void 0,
    ANTHROPIC_DEFAULT_OPUS_MODEL: void 0,
    ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0,
    ANTHROPIC_DEFAULT_FABLE_MODEL: void 0,
    ANTHROPIC_SMALL_FAST_MODEL: void 0
  };
  if (o.authMethod === "serviceAccount") l.GOOGLE_APPLICATION_CREDENTIALS = o.keyFile;
  if (o.pinSonnet) l.ANTHROPIC_DEFAULT_SONNET_MODEL = o.pinSonnet;
  if (o.pinOpus) l.ANTHROPIC_DEFAULT_OPUS_MODEL = o.pinOpus;
  if (o.pinFable) l.ANTHROPIC_DEFAULT_FABLE_MODEL = o.pinFable;
  if (o.pinHaiku) l.ANTHROPIC_DEFAULT_HAIKU_MODEL = o.pinHaiku;
  return l;
}
function oe(o) {
  let f = w(30),
    { onComplete: l } = o,
    { storageV5: c } = Me(),
    { goBack: m, wizardData: t } = ep(),
    [h, p] = y(null),
    u;
  if (f[0] === S) ((u = os(ln("userSettings") ?? "~/.claude/settings.json")), (f[0] = u));
  else u = f[0];
  let R = u,
    g;
  if (f[1] !== t) ((g = _e(t)), (f[1] = t), (f[2] = g));
  else g = f[2];
  let O = g,
    E;
  if (f[3] !== O) ((E = Object.entries(O).filter(St)), (f[3] = O), (f[4] = E));
  else E = f[4];
  let d = E,
    x = C(!1),
    A;
  if (
    f[5] !== O ||
    f[6] !== l ||
    f[7] !== c ||
    f[8] !== t.authMethod ||
    f[9] !== t.pinFable ||
    f[10] !== t.pinHaiku ||
    f[11] !== t.pinOpus ||
    f[12] !== t.pinSonnet ||
    f[13] !== t.verifiedIdentity
  )
    ((A = async () => {
      if (x.current) {
        return;
      }
      x.current = !0;
      let { error: T } = await Un("userSettings", { env: O }, void 0, c);
      if (T) {
        ((x.current = !1), p(T.message));
        return;
      }
      (a("tengu_vertex_setup_complete", {
        auth_method: ce(t.authMethod),
        pinned_models: Boolean(t.pinSonnet || t.pinOpus || t.pinFable || t.pinHaiku),
        verified: Boolean(t.verifiedIdentity)
      }),
        l(
          `Vertex AI configuration saved to ${R}.${t.authMethod === "adc" ? " When your ADC token expires, run `gcloud auth application-default login` \u2014 Claude Code picks up refreshed credentials automatically." : ""}`
        ));
    }),
      (f[5] = O),
      (f[6] = l),
      (f[7] = c),
      (f[8] = t.authMethod),
      (f[9] = t.pinFable),
      (f[10] = t.pinHaiku),
      (f[11] = t.pinOpus),
      (f[12] = t.pinSonnet),
      (f[13] = t.verifiedIdentity),
      (f[14] = A));
  else A = f[14];
  let D = A,
    v;
  if (f[15] === S)
    ((v = r(n, { children: ["These will be written to ", R, " under env:"] })), (f[15] = v));
  else v = f[15];
  let _;
  if (f[16] !== d)
    ((_ = e(s, { flexDirection: "column", children: d.map(kt) })), (f[16] = d), (f[17] = _));
  else _ = f[17];
  let b;
  if (f[18] !== t.verifiedIdentity)
    ((b =
      t.verifiedIdentity &&
      r(n, {
        dimColor: !0,
        children: [e(mt, { status: "success", withSpace: !0 }), "Verified as ", t.verifiedIdentity]
      })),
      (f[18] = t.verifiedIdentity),
      (f[19] = b));
  else b = f[19];
  let F;
  if (f[20] !== h) ((F = e(vs, { error: h })), (f[20] = h), (f[21] = F));
  else F = f[21];
  let Y;
  if (f[22] !== m || f[23] !== D)
    ((Y = e(dr, { confirmLabel: "Save", cancelLabel: "Cancel", onConfirm: D, onCancel: m })),
      (f[22] = m),
      (f[23] = D),
      (f[24] = Y));
  else Y = f[24];
  let G;
  if (f[25] !== _ || f[26] !== b || f[27] !== F || f[28] !== Y)
    ((G = e(su, {
      subtitle: "Confirm and save",
      children: r(s, { flexDirection: "column", gap: 1, children: [v, _, b, F, Y] })
    })),
      (f[25] = _),
      (f[26] = b),
      (f[27] = F),
      (f[28] = Y),
      (f[29] = G));
  else G = f[29];
  return G;
}
function ne() {
  return {
    sonnet: $o[sI].vertex,
    opus: $o[y_n].vertex,
    haiku: $o[jCe].vertex,
    fable: $o[__n].vertex
  };
}
function ke(o) {
  let l = new Set();
  for (let c of Object.values($o))
    if (c.vertex !== null && c.vertex.toLowerCase().includes(o)) l.add(c.vertex);
  return [...l].sort().reverse();
}
function Pe(o) {
  if (o.authMethod === "serviceAccount" && o.keyFile) return { kind: "keyFile", path: o.keyFile };
  return { kind: "default" };
}
var Pt = 12000;
async function ae(o) {
  let l;
  try {
    let t = await KKt(Pe(o), o.projectId),
      h = (async () => {
        await (await t.getClient()).getAccessToken();
      })();
    await Nt(h, Pt, "Timed out waiting for GCP credentials");
    let p;
    try {
      p = (await t.getCredentials()).client_email;
    } catch {
      p = void 0;
    }
    l =
      p ??
      (o.authMethod === "serviceAccount"
        ? `service account (${o.keyFile})`
        : "Application Default Credentials");
  } catch (t) {
    return { status: "error", ...bt(t, o) };
  }
  let c = ne().haiku,
    m = await se(o, c);
  if (m.ok) return { status: "ok", identity: l, note: `Test request to ${c} succeeded.` };
  switch (m.reason) {
    case "auth":
      return {
        status: "error",
        error:
          "Got a token, but Vertex AI rejected it. The credential may lack the cloud-platform scope."
      };
    case "permission":
      return {
        status: "error",
        error: `Permission denied calling Vertex AI in project "${o.projectId}". The principal needs the aiplatform.endpoints.predict permission (Vertex AI User role), and the Vertex AI API must be enabled.`
      };
    case "model":
      return {
        status: "ok",
        identity: l,
        note: `Credentials work, but ${c} returned not-found in ${o.region}. Pin a model you have access to on the next step, or try the 'global' region.`
      };
    case "network":
      return {
        status: "error",
        error: `Could not reach Vertex AI in region "${o.region}". Check the region name and your network.`
      };
    case "other":
      return {
        status: "ok",
        identity: l,
        note: `Credentials work, but the test request to ${c} failed. You can pin a different model on the next step.`
      };
  }
}
async function se(o, l) {
  return PPn(
    () => Rt(o),
    l,
    () => "auth"
  );
}
async function Rt(o) {
  let [{ AnthropicVertex: l }, { getProxyFetchOptions: c }] = await Promise.all([
      import("./chunk-hant4jvy.js"),
      import("./chunk-pzqns6vt.js")
    ]),
    m = await KKt(Pe(o), o.projectId);
  return hRe(
    new l({
      region: o.region,
      projectId: o.projectId,
      googleAuth: m,
      maxRetries: 0,
      defaultHeaders: { ...tce(), ...yRe() },
      ...aM,
      timeout: 15000,
      fetchOptions: c({ url: i.ANTHROPIC_VERTEX_BASE_URL || LCt(o.region) })
    })
  );
}
var ie = "gcloud auth application-default login";
function bt(o, l) {
  let c = o?.message ?? String(o);
  if (/ENOENT|no such file/i.test(c)) {
    if (l.authMethod === "serviceAccount" && l.keyFile && c.includes(l.keyFile))
      return { error: `Service account key file not found: ${l.keyFile}` };
    let m = i.GOOGLE_APPLICATION_CREDENTIALS
      ? ["GOOGLE_APPLICATION_CREDENTIALS", i.GOOGLE_APPLICATION_CREDENTIALS]
      : i.google_application_credentials
        ? ["google_application_credentials", i.google_application_credentials]
        : void 0;
    if (m && l.authMethod !== "serviceAccount" && c.includes(`The file at ${m[1]} does not exist`))
      return { error: `Key file named by ${m[0]} not found: ${m[1]}` };
  }
  if (/Could not load the default credentials/i.test(c))
    return l.authMethod === "adc"
      ? { error: "No Application Default Credentials found. Run:", command: ie }
      : {
          error:
            "No GCP credentials found in the environment. Set GOOGLE_APPLICATION_CREDENTIALS or run gcloud auth application-default login."
        };
  if (/invalid_grant|Token has been expired|reauth/i.test(c)) {
    if (l.authMethod === "serviceAccount")
      return {
        error:
          "Service account credentials have been revoked or expired. Obtain a new key file from GCP IAM (IAM \u2192 Service Accounts \u2192 Keys \u2192 Add Key)."
      };
    if (l.authMethod === "adc") return { error: "GCP credentials expired. Run:", command: ie };
    return {
      error:
        "GCP credentials in the environment have expired or been revoked. Refresh them (gcloud auth application-default login for ADC, or replace the GOOGLE_APPLICATION_CREDENTIALS key file)."
    };
  }
  if (/Unable to detect a Project Id/i.test(c))
    return {
      error:
        "Could not determine a GCP project from the credentials. Go back and set the project ID explicitly."
    };
  if (/Timed out waiting for GCP/i.test(c))
    return {
      error:
        "Timed out resolving GCP credentials (no ADC, no key file, and no GCE metadata server).",
      ...(l.authMethod === "adc" && { command: ie })
    };
  return { error: c };
}
var Re = {
  reasonLabel: {
    auth: "auth failed",
    permission: "no aiplatform.endpoints.predict permission",
    model: "not enabled in this project",
    network: "unreachable",
    other: "request failed"
  },
  intro:
    "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have.",
  resolveTierDefaults: () => {
    let o = ne();
    return Object.fromEntries(SF.map((l) => [l, { fallback: o[l] }]));
  },
  listTierCandidates: (o) => ke(o),
  pickerSubtitle: (o) =>
    `Available ${YI[o]} versions on Vertex AI \xB7 each tested with a one-token request.`,
  preferOnSettle: ["current", "fallback"],
  probe: (o, l) => se(o, l)
};
function le() {
  let l = w(2),
    { updateWizardData: o } = ep(),
    c;
  if (l[0] !== o) ((c = e(Oxt, { provider: Re, onPins: o })), (l[0] = o), (l[1] = c));
  else c = l[1];
  return c;
}
j();
import { readdir as Lt, readFile as be } from "fs/promises";
import { join as de } from "path";
async function ue() {
  let o = new Set(),
    l = eFn();
  try {
    let c = de(l, "configurations");
    for (let m of await Lt(c)) {
      if (!m.startsWith("config_")) continue;
      try {
        let t = await be(de(c, m), "utf8");
        for (let h of t.matchAll(/^project\s*=\s*(\S+)/gm)) {
          let p = h[1]?.trim();
          if (p) o.add(p);
        }
      } catch {}
    }
  } catch {}
  try {
    let c = te(await be(de(l, "application_default_credentials.json"), "utf8"));
    if (c.quota_project_id) o.add(c.quota_project_id);
  } catch {}
  return [...o].sort();
}
function Jt() {
  return [];
}
function Yt() {
  return ue().catch(Jt);
}
function Xt(st) {
  return e(sn.Item, { label: st }, st);
}
var Ve = "__manual__",
  Le = 12;
function fe() {
  let l = w(3),
    [o] = y(Yt),
    c;
  if (l[0] === S)
    ((c = e(su, {
      subtitle: "GCP project",
      children: e(qr, { message: "Reading ~/.config/gcloud\u2026" })
    })),
      (l[0] = c));
  else c = l[0];
  let m;
  if (l[1] !== o)
    ((m = e(ro, { fallback: c, children: e(pe, { projectsPromise: o }) })), (l[1] = o), (l[2] = m));
  else m = l[2];
  return m;
}
function pe(o) {
  let u = w(48),
    { projectsPromise: l } = o,
    c = Yr(l),
    { goBack: m, goToStep: t, updateWizardData: h, wizardData: p } = ep(),
    f = c.length > Le,
    R;
  if (u[0] !== c || u[1] !== p.projectId)
    ((R = p.projectId && !c.includes(p.projectId)), (u[0] = c), (u[1] = p.projectId), (u[2] = R));
  else R = u[2];
  let g = Boolean(R),
    [O, E] = y(c.length === 0 || f || g),
    [d, x] = y(p.projectId ?? ""),
    [A, T] = y(d.length),
    [D, v] = y(null);
  const _ = O ? "Settings" : "Confirmation";
  let b;
  if (u[3] !== _) ((b = { context: _ }), (u[3] = _), (u[4] = b));
  else b = u[4];
  lt("confirm:no", m, b);
  let F;
  if (u[5] !== t || u[6] !== h)
    ((F = (Y) => {
      (h({ projectId: Y }), t(k.REGION));
    }),
      (u[5] = t),
      (u[6] = h),
      (u[7] = F));
  else F = u[7];
  let G = F;
  if (!O) {
    const J = c.length;
    let z;
    if (u[8] !== c.length) ((z = I(c.length, "project")), (u[8] = c.length), (u[9] = z));
    else z = u[9];
    let U;
    if (u[10] !== c.length || u[11] !== z)
      ((U = r(n, {
        dimColor: !0,
        children: ["Found ", J, " ", z, " in your gcloud configurations."]
      })),
        (u[10] = c.length),
        (u[11] = z),
        (u[12] = U));
    else U = u[12];
    let H;
    if (u[13] !== c || u[14] !== p.projectId)
      ((H = c.indexOf(p.projectId ?? "")), (u[13] = c), (u[14] = p.projectId), (u[15] = H));
    else H = u[15];
    const K = Math.max(0, H);
    let M;
    if (u[16] !== c || u[17] !== G)
      ((M = (Er) => {
        let it = c[Er];
        if (it === void 0) E(!0);
        else G(it);
      }),
        (u[16] = c),
        (u[17] = G),
        (u[18] = M));
    else M = u[18];
    let W;
    if (u[19] !== c) ((W = c.map(Xt)), (u[19] = c), (u[20] = W));
    else W = u[20];
    let X;
    if (u[21] === S)
      ((X = e(sn.Item, { label: "Type a different project\u2026" }, Ve)), (u[21] = X));
    else X = u[21];
    let Z;
    if (u[22] !== M || u[23] !== W || u[24] !== K)
      ((Z = r(sn, { defaultFocusIndex: K, onSelect: M, children: [W, X] })),
        (u[22] = M),
        (u[23] = W),
        (u[24] = K),
        (u[25] = Z));
    else Z = u[25];
    let nt;
    if (u[26] !== Z || u[27] !== U)
      ((nt = e(su, {
        subtitle: "GCP project",
        children: r(s, { flexDirection: "column", gap: 1, children: [U, Z] })
      })),
        (u[26] = Z),
        (u[27] = U),
        (u[28] = nt));
    else nt = u[28];
    return nt;
  }
  let J;
  if (u[29] !== G || u[30] !== d)
    ((J = () => {
      let at = d.trim();
      if (!at) {
        v("Project ID is required");
        return;
      }
      (v(null), G(at));
    }),
      (u[29] = G),
      (u[30] = d),
      (u[31] = J));
  else J = u[31];
  let Ae = J,
    z;
  if (u[32] === S)
    ((z = r(Ee, {
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
      (u[32] = z));
  else z = u[32];
  let U;
  if (u[33] === S)
    ((U = e(n, { children: "The project where Vertex AI is enabled." })), (u[33] = U));
  else U = u[33];
  let H;
  if (u[34] !== c.length || u[35] !== f)
    ((H =
      f &&
      r(n, { dimColor: !0, children: ["Found ", c.length, " projects \u2014 too many to list."] })),
      (u[34] = c.length),
      (u[35] = f),
      (u[36] = H));
  else H = u[36];
  let K;
  if (u[37] === S)
    ((K = e(n, {
      dimColor: !0,
      children: "Find it with `gcloud config get-value project` or in the GCP console header."
    })),
      (u[37] = K));
  else K = u[37];
  let M;
  if (u[38] !== A || u[39] !== Ae || u[40] !== d)
    ((M = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: d,
        onChange: x,
        onSubmit: Ae,
        placeholder: "my-gcp-project",
        columns: 60,
        cursorOffset: A,
        onChangeCursorOffset: T,
        focus: !0,
        showCursor: !0
      })
    })),
      (u[38] = A),
      (u[39] = Ae),
      (u[40] = d),
      (u[41] = M));
  else M = u[41];
  let W;
  if (u[42] !== D)
    ((W = D && e(s, { marginTop: 1, children: e(vs, { error: D }) })), (u[42] = D), (u[43] = W));
  else W = u[43];
  let X;
  if (u[44] !== M || u[45] !== W || u[46] !== H)
    ((X = e(su, {
      subtitle: "GCP project ID",
      footerText: z,
      children: r(s, { flexDirection: "column", children: [U, H, K, M, W] })
    })),
      (u[44] = M),
      (u[45] = W),
      (u[46] = H),
      (u[47] = X));
  else X = u[47];
  return X;
}
j();
function he() {
  let g = w(17),
    { goBack: o, goNext: l, updateWizardData: c, wizardData: m } = ep(),
    [t, h] = y(m.region ?? "global"),
    [p, f] = y(t.length),
    [u, R] = y(null),
    O;
  if (g[0] === S) ((O = { context: "Settings" }), (g[0] = O));
  else O = g[0];
  lt("confirm:no", o, O);
  let E;
  if (g[1] !== l || g[2] !== c || g[3] !== t)
    ((E = () => {
      let d = t.trim();
      if (!d) {
        R("Region is required");
        return;
      }
      (R(null), c({ region: d }), l());
    }),
      (g[1] = l),
      (g[2] = c),
      (g[3] = t),
      (g[4] = E));
  else E = g[4];
  let x = E,
    A;
  if (g[5] === S)
    ((A = r(Ee, {
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
      (g[5] = A));
  else A = g[5];
  let T, D;
  if (g[6] === S)
    ((T = e(n, { children: "Where Claude models are served from." })),
      (D = e(n, {
        dimColor: !0,
        children:
          "Use 'global', 'us', or 'eu' for a multi-region endpoint (recommended), or a specific location like us-east5 if you have regional quota."
      })),
      (g[6] = T),
      (g[7] = D));
  else ((T = g[6]), (D = g[7]));
  let v;
  if (g[8] !== p || g[9] !== x || g[10] !== t)
    ((v = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: t,
        onChange: h,
        onSubmit: x,
        placeholder: "global",
        columns: 40,
        cursorOffset: p,
        onChangeCursorOffset: f,
        focus: !0,
        showCursor: !0
      })
    })),
      (g[8] = p),
      (g[9] = x),
      (g[10] = t),
      (g[11] = v));
  else v = g[11];
  let _;
  if (g[12] !== u)
    ((_ = u && e(s, { marginTop: 1, children: e(vs, { error: u }) })), (g[12] = u), (g[13] = _));
  else _ = g[13];
  let b;
  if (g[14] !== v || g[15] !== _)
    ((b = e(su, {
      subtitle: "Vertex AI region",
      footerText: A,
      children: r(s, { flexDirection: "column", children: [T, D, v, _] })
    })),
      (g[14] = v),
      (g[15] = _),
      (g[16] = b));
  else b = g[16];
  return b;
}
j();
import { homedir as Ke } from "os";
import { join as qe } from "path";
function ye() {
  let g = w(17),
    { goBack: o, goToStep: l, updateWizardData: c, wizardData: m } = ep(),
    [t, h] = y(m.keyFile ?? ""),
    [p, f] = y(t.length),
    [u, R] = y(null),
    O;
  if (g[0] === S) ((O = { context: "Settings" }), (g[0] = O));
  else O = g[0];
  lt("confirm:no", o, O);
  let E;
  if (g[1] !== l || g[2] !== c || g[3] !== t)
    ((E = () => {
      let d = t.trim();
      if (!d) {
        R("Path is required");
        return;
      }
      R(null);
      let x = d === "~" || d.startsWith("~/") ? qe(Ke(), d.slice(1)) : d;
      (c({ keyFile: x }), l(k.PROJECT));
    }),
      (g[1] = l),
      (g[2] = c),
      (g[3] = t),
      (g[4] = E));
  else E = g[4];
  let A = E,
    T;
  if (g[5] === S)
    ((T = r(Ee, {
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
      (g[5] = T));
  else T = g[5];
  let D, v;
  if (g[6] === S)
    ((D = e(n, { children: "Path to the service account JSON key file." })),
      (v = e(n, {
        dimColor: !0,
        children:
          "Download one from the GCP console under IAM \u2192 Service Accounts \u2192 Keys \u2192 Add key."
      })),
      (g[6] = D),
      (g[7] = v));
  else ((D = g[6]), (v = g[7]));
  let _;
  if (g[8] !== p || g[9] !== A || g[10] !== t)
    ((_ = e(s, {
      marginTop: 1,
      children: e(Tr, {
        value: t,
        onChange: h,
        onSubmit: A,
        placeholder: "~/keys/my-project-vertex.json",
        columns: 60,
        cursorOffset: p,
        onChangeCursorOffset: f,
        focus: !0,
        showCursor: !0
      })
    })),
      (g[8] = p),
      (g[9] = A),
      (g[10] = t),
      (g[11] = _));
  else _ = g[11];
  let b;
  if (g[12] !== u)
    ((b = u && e(s, { marginTop: 1, children: e(vs, { error: u }) })), (g[12] = u), (g[13] = b));
  else b = g[13];
  let F;
  if (g[14] !== _ || g[15] !== b)
    ((F = e(su, {
      subtitle: "Service account key",
      footerText: T,
      children: r(s, { flexDirection: "column", children: [D, v, _, b] })
    })),
      (g[14] = _),
      (g[15] = b),
      (g[16] = F));
  else F = g[16];
  return F;
}
j();
function xe() {
  let t = w(35),
    { goBack: o, goNext: l, updateWizardData: c, wizardData: m } = ep(),
    h;
  if (t[0] === S) ((h = { phase: "checking" }), (t[0] = h));
  else h = t[0];
  let [p, f] = y(h),
    u;
  if (t[1] !== c || t[2] !== m)
    ((u = () => {
      let R = !1;
      return (
        ae(m).then((g) => {
          if (R) {
            return;
          }
          if (g.status === "ok") c({ verifiedIdentity: g.identity });
          else c({ verifiedIdentity: void 0 });
          f({ phase: "done", result: g });
        }),
        () => {
          R = !0;
        }
      );
    }),
      (t[1] = c),
      (t[2] = m),
      (t[3] = u));
  else u = t[3];
  let O;
  if (t[4] === S) ((O = []), (t[4] = O));
  else O = t[4];
  if ((P(u, O), p.phase === "checking")) {
    let E;
    if (t[5] === S)
      ((E = e(su, {
        subtitle: "Verifying credentials",
        children: e(qr, {
          message: "Calling Google Cloud\u2026",
          subtitle: "This may take a few seconds."
        })
      })),
        (t[5] = E));
    else E = t[5];
    return E;
  }
  let { result: d } = p;
  switch (d.status) {
    case "ok": {
      let E;
      if (t[6] === S) ((E = e(mt, { status: "success", withSpace: !0 })), (t[6] = E));
      else E = t[6];
      let x;
      if (t[7] !== d.identity)
        ((x = r(n, {
          children: [E, "Authenticated as ", e(n, { bold: !0, children: d.identity })]
        })),
          (t[7] = d.identity),
          (t[8] = x));
      else x = t[8];
      let A;
      if (t[9] !== d.note)
        ((A = d.note && e(n, { dimColor: !0, children: d.note })), (t[9] = d.note), (t[10] = A));
      else A = t[10];
      let T;
      if (t[11] === S) ((T = [{ label: "Continue", value: "continue" }]), (t[11] = T));
      else T = t[11];
      let D;
      if (t[12] !== l) ((D = () => l()), (t[12] = l), (t[13] = D));
      else D = t[13];
      let v;
      if (t[14] !== o || t[15] !== D)
        ((v = e(Je, { options: T, onChange: D, onCancel: o })),
          (t[14] = o),
          (t[15] = D),
          (t[16] = v));
      else v = t[16];
      let _;
      if (t[17] !== x || t[18] !== A || t[19] !== v)
        ((_ = e(su, {
          subtitle: "Verification",
          children: r(s, { flexDirection: "column", gap: 1, children: [x, A, v] })
        })),
          (t[17] = x),
          (t[18] = A),
          (t[19] = v),
          (t[20] = _));
      else _ = t[20];
      return _;
    }
    case "error": {
      let E;
      if (t[21] === S) ((E = e(mt, { status: "error", withSpace: !0 })), (t[21] = E));
      else E = t[21];
      let x;
      if (t[22] !== d.error)
        ((x = r(n, { children: [E, d.error] })), (t[22] = d.error), (t[23] = x));
      else x = t[23];
      let A;
      if (t[24] !== d.command)
        ((A = d.command && r(n, { bold: !0, color: "suggestion", children: ["    ", d.command] })),
          (t[24] = d.command),
          (t[25] = A));
      else A = t[25];
      let T;
      if (t[26] !== x || t[27] !== A)
        ((T = r(s, { flexDirection: "column", children: [x, A] })),
          (t[26] = x),
          (t[27] = A),
          (t[28] = T));
      else T = t[28];
      let D;
      if (t[29] !== o || t[30] !== l)
        ((D = e(dr, {
          hideIndexes: !0,
          cancelFirst: !0,
          focus: "cancel",
          confirmLabel: "Save anyway (skip verification)",
          cancelLabel: "Go back and fix",
          onConfirm: l,
          onCancel: o
        })),
          (t[29] = o),
          (t[30] = l),
          (t[31] = D));
      else D = t[31];
      let v;
      if (t[32] !== T || t[33] !== D)
        ((v = e(su, {
          subtitle: "Verification failed",
          color: "error",
          children: r(s, { flexDirection: "column", gap: 1, children: [T, D] })
        })),
          (t[32] = T),
          (t[33] = D),
          (t[34] = v));
      else v = t[34];
      return v;
    }
  }
}
function Ar() {}
var ot = [ee, ye, fe, he, xe, le, oe];
function Ixt(o) {
  let t = w(7),
    { onComplete: l, onCancel: c, exitOnCtrlCD: m } = o,
    h;
  if (t[0] !== l) ((h = { onComplete: l }), (t[0] = l), (t[1] = h));
  else h = t[1];
  let p;
  if (t[2] === S) ((p = {}), (t[2] = p));
  else p = t[2];
  let f;
  if (t[3] !== m || t[4] !== c || t[5] !== h)
    ((f = e(t6e, {
      steps: ot,
      stepProps: h,
      initialData: p,
      onComplete: Ar,
      onCancel: c,
      exitOnCtrlCD: m,
      title: "Set up Google Vertex AI",
      showStepCounter: !1
    })),
      (t[3] = m),
      (t[4] = c),
      (t[5] = h),
      (t[6] = f));
  else f = t[6];
  return f;
}
export { Ixt };

//# sourceMappingURL=chunk-sfkydfy5.js.map
