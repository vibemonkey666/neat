import {
  fileURLToPath as __sourceFilePath_7f16e88950b1f266,
  URL as __sourceFilePath_7f16e88950b1f266_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { Au, hk, d, E, G } from "./chunk-fs43t96t.js";
import { TAn } from "./chunk-h5gbmqm1.js";
import { Ym } from "./chunk-x8k0r295.js";
import { _, am, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { jH } from "./chunk-a16y5hcz.js";
import { pSe, $s } from "./chunk-vw9e882a.js";
import { hn } from "./chunk-wr0p4ndg.js";
import { i } from "./chunk-cj37hmns.js";
import { Ux, rNe } from "./chunk-at88wjsn.js";
import { p } from "./chunk-qmkm2x59.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { Nho, eFn } from "./chunk-7yf7msy4.js";
import { QFt } from "./chunk-6h7ejyet.js";
import { o, v, u, Ue, Gr, me, A } from "./chunk-0bqrj5ah.js";
import { ws } from "./chunk-v4kbwz0z.js";
import { Wst } from "./chunk-njpzwa1b.js";
import { Ce } from "./chunk-a2y39866.js";
import { createHash as ie } from "crypto";
import { dirname as oe, join as K } from "path";
import { constants as Y } from "fs";
import { open as q } from "fs/promises";
import { join as O } from "path";
var Z = 4194304,
  Q = 5,
  ee = [
    "sso_account_id",
    "sso_role_name",
    "sso_session",
    "sso_start_url",
    "role_arn",
    "source_profile",
    "credential_source",
    "credential_process",
    "web_identity_token_file",
    "region"
  ],
  te = [
    "type",
    "client_email",
    "audience",
    "service_account_impersonation_url",
    "quota_project_id"
  ],
  re = p(() => {
    let e = o()
      .optional()
      .catch(void 0);
    return u({
      type: e,
      client_email: e,
      audience: e,
      service_account_impersonation_url: e,
      quota_project_id: e
    });
  });
async function w(e) {
  try {
    let r = await q(e, Y.O_RDONLY | pSe | ws);
    try {
      let n = await r.stat();
      if (!n.isFile() || n.size > Z) {
        t(
          "[3p-model-memory] an AWS or gcloud identity file is over 4 MB or not a regular file, so start-up model checks will not reuse saved results"
        );
        return;
      }
      let f = Buffer.alloc(n.size),
        c = 0;
      while (c < n.size) {
        let { bytesRead: s } = await r.read(f, c, n.size - c, c);
        if (s === 0) break;
        c += s;
      }
      return { text: f.subarray(0, c).toString("utf8"), mtimeMs: n.mtimeMs };
    } finally {
      await r.close();
    }
  } catch (r) {
    if (G(r)) return { text: "" };
    t(`[3p-model-memory] identity file unreadable: ${E(r) ?? "unknown"}`);
    return;
  }
}
var L = Wst(
  async () => {
    let { getHomeDir: e, loadSharedConfigFiles: r } = await import("./chunk-kyswkxgg.js").then(
        (m) => Ce(m.default, 1)
      ),
      n = e(),
      f = TAn(i.AWS_CONFIG_FILE || O(n, ".aws", "config"), n),
      c = TAn(i.AWS_SHARED_CREDENTIALS_FILE || O(n, ".aws", "credentials"), n);
    if ((await Promise.all([w(f), w(c)])).includes(void 0)) return;
    try {
      let { configFile: a, credentialsFile: g } = await r({
          configFilepath: f,
          filepath: c,
          ignoreCache: !0
        }),
        l = [],
        m = i.AWS_PROFILE || "default";
      for (let S = 0; m && S <= Q; S++) {
        let b = { ...a[m], ...g[m] };
        l.push(`profile=${m}`);
        for (let h of ee) l.push(`${h}=${b[h] ?? ""}`);
        if (b.sso_session) {
          let h = a[`sso-session.${b.sso_session}`];
          l.push(`sso_session_start_url=${h?.sso_start_url ?? ""}`);
        }
        (l.push(`aws_access_key_id=${b.aws_access_key_id ?? ""}`),
          (m = b.source_profile && b.source_profile !== m ? b.source_profile : void 0));
      }
      return l.join(`
`);
    } catch (a) {
      t(`[3p-model-memory] AWS config unreadable: ${E(a) ?? "unknown"}`);
      return;
    }
  },
  () => "aws"
);
function ne(e) {
  let r = !1,
    n = {};
  for (let f of e.split(/\r?\n/)) {
    let c = f.trim(),
      s = /^\[(.+)\]$/.exec(c);
    if (s) {
      r = s[1].trim() === "core";
      continue;
    }
    let a = /^(project|account)\s*=\s*(.*)$/.exec(c);
    if (r && a) n[a[1]] = a[2].trim();
  }
  return [`project=${n.project ?? ""}`, `account=${n.account ?? ""}`];
}
var j = Wst(
  async () => {
    let e = eFn(),
      r = await w(O(e, "active_config"));
    if (r === void 0) return;
    let n = i.CLOUDSDK_ACTIVE_CONFIG_NAME || r.text.trim() || "default",
      f =
        i.GOOGLE_APPLICATION_CREDENTIALS ||
        i.google_application_credentials ||
        O(Nho(), "application_default_credentials.json"),
      [c, s] = await Promise.all([w(O(e, "configurations", `config_${n}`)), w(f)]);
    if (c === void 0 || s === void 0) return;
    let a = [`config=${n}`, ...ne(c.text)],
      g = s.text ? re().safeParse(ot(s.text, !1)) : void 0,
      l = g?.success ? g.data : {};
    for (let m of te) a.push(`${m}=${l[m] ?? ""}`);
    if (l.type === "authorized_user") a.push(`adc_file=${s.mtimeMs}`);
    return a.join(`
`);
  },
  () => "gcp"
);
var se = 900000,
  Kve = 86400000,
  ce = 600000,
  ae = 604800000,
  de = "1",
  C = 1,
  z = 65536,
  ue = 16,
  fe = 32,
  y = "[3p-model-memory]",
  le = 300,
  pe = {
    refused: "the provider refuses this model for the account",
    denied: "an IAM or SCP policy denies the call",
    temporary: "nothing learned about the model",
    failed: "a failure this build cannot interpret"
  },
  _e = p(() =>
    Gr("s", [Ue({ s: A("ok"), at: v() }), Ue({ s: A("refused"), at: v(), rc: v().optional() })])
  ),
  ge = p(() => Ue({ version: A(C), entries: me(o(), me(o(), _e())) })),
  be = p(() => u({ version: v() })),
  D = Symbol("newer format");
function J$n() {
  return K(Le(), "cache", "model-access.json");
}
function TAs() {
  return K(Le(), "cache", "provider-probe-verdicts.json");
}
function Ae() {
  return (
    Boolean(i.AWS_BEARER_TOKEN_BEDROCK) ||
    Boolean(i.CLOUDSDK_AUTH_ACCESS_TOKEN) ||
    Boolean(i.CLAUDE_CODE_SKIP_VERTEX_AUTH && i.ANTHROPIC_API_KEY) ||
    Ux() ||
    rNe() !== void 0
  );
}
function Out() {
  let e = i.ANTHROPIC_CUSTOM_HEADERS;
  if (!e) return "";
  let r = [];
  for (let n of e.split(/\n|\r\n/)) {
    let f = n.indexOf(":");
    if (f !== -1) r.push(n.slice(0, f).trim().toLowerCase());
  }
  return r
    .filter((n) => n !== "")
    .sort()
    .join(",");
}
async function Mut(
  e,
  r,
  n = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.310",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-23T17:43:32Z",
    GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
    HOOKS_WORKER_URL: __sourceFilePath_7f16e88950b1f266(
      new __sourceFilePath_7f16e88950b1f266_URL(
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        import.meta.url
      )
    ),
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION
) {
  try {
    if (J() || i.CLAUDE_CODE_SKIP_MODEL_ACCESS_MEMORY || Ae()) return;
    let f = e === "vertex" ? await j() : await L();
    if (f === void 0) return;
    let c = await r();
    return ie("sha256")
      .update([e, de, n, ...c.map((s) => s ?? ""), f].join("\x00"))
      .digest("hex")
      .slice(0, 24);
  } catch (f) {
    t(`${y} not used this start: ${E(f) ?? "unknown"}`);
    return;
  }
}
var R = Wst(async (e) => {
    let r = await H(e);
    return r === D ? {} : r;
  }),
  N = Wst(async (e) => {});
async function H(e) {
  if (J()) return {};
  let r;
  try {
    let s = hn();
    if ($s === 0) {
      let a = await s.lstat(e);
      if (a !== void 0 && !a.isFile) return {};
    }
    r = await s.readTail(e, z + 1, { noFollow: !0 });
  } catch (s) {
    if (!G(s)) t(`${y} read failed: ${E(s) ?? "unknown"}`);
    return {};
  }
  if (r.length > z) return (t(`${y} file over 64 KB; ignoring it`), {});
  let n = ot(r.toString("utf8"), !1),
    f = be().safeParse(n);
  if (f.success && f.data.version > C) return D;
  let c = ge().safeParse(n);
  if (!c.success) return (t(`${y} file not in this format; ignoring it`), {});
  return c.data.entries;
}
function M(e, r) {
  if (e === void 0 || e.at > r) return;
  if (e.s === "ok") return r - e.at <= se ? { state: "ok", at: e.at } : void 0;
  if (r - e.at > Kve) return;
  return {
    state: "refused",
    at: e.at,
    ...(e.rc !== void 0 && e.rc <= r && { recheckClaimedAt: e.rc })
  };
}
async function jBe(e, r, n = Date.now()) {
  return M((await R(J$n()))[e]?.[r], n);
}
function V(e, r = Date.now()) {
  return e.state === "refused" && r - Math.max(e.at, e.recheckClaimedAt ?? 0) >= ce;
}
function T(e, r, n, f) {
  if (J()) return Promise.resolve(n(void 0));
  let c = J$n(),
    a = N(c)
      .then(async () => {
        let g = await H(c);
        if (g === D) return n(void 0);
        let l = W(g, e, r, n, f);
        try {
          let m = hn();
          (await m.mkdir(oe(c)), await m.atomicWrite(c, _({ version: C, entries: l }), 384));
        } catch (m) {
          t(`${y} write failed: ${E(m) ?? "unknown"}`);
        }
        return l[e]?.[r];
      })
      .catch(() => {
        return;
      });
  return (
    N.cache.set(
      c,
      a.then(() => {})
    ),
    a
  );
}
function F(e, r, n, f) {
  let c = J$n(),
    s = R(c);
  R.cache.set(
    c,
    s.then(
      (a) => W(a, e, r, () => n, f),
      () => ({})
    )
  );
}
async function WBe(e, r, n, f = Date.now()) {
  let c = { s: n, at: f };
  (F(e, r, c, f), await T(e, r, () => c, f));
}
async function Ee(e, r, n = Date.now()) {
  (F(e, r, void 0, n),
    await T(
      e,
      r,
      () => {
        return;
      },
      n
    ));
}
async function he(e, r, n = Date.now()) {
  let f = !1,
    c = await T(
      e,
      r,
      (a) => {
        let g = M(a, n);
        if (g !== void 0 && V(g, n)) return ((f = !0), { s: "refused", at: g.at, rc: n });
        return a;
      },
      n
    );
  if ((F(e, r, c, n), f)) return { claimed: !0 };
  let s = M(c, n);
  return s === void 0 ? { claimed: !1 } : { claimed: !1, current: s };
}
function W(e, r, n, f, c) {
  let s = {};
  for (let [l, m] of Object.entries(e)) {
    let S = {};
    for (let [b, h] of Object.entries(m)) {
      let P = h.s === "ok" ? ae : Kve;
      if (h.at <= c + P && c - h.at <= P) S[b] = h;
    }
    s[l] = S;
  }
  let a = f(s[r]?.[n]),
    g = { ...s[r] };
  if ((delete g[n], a !== void 0)) g[n] = a;
  return (
    (s[r] = Object.fromEntries(
      Object.entries(g)
        .sort(([, l], [, m]) => m.at - l.at)
        .slice(0, fe)
    )),
    Object.fromEntries(
      Object.entries(s)
        .filter(([, l]) => Object.keys(l).length > 0)
        .sort(([, l], [, m]) => k(m) - k(l))
        .slice(0, ue)
    )
  );
}
function k(e) {
  return Math.max(...Object.values(e).map((r) => r.at));
}
function B(e) {
  if (typeof e !== "object" || e === null || !("status" in e)) return;
  return typeof e.status === "number" ? e.status : void 0;
}
function Se(e, r) {
  if (e === "refused" || e === "denied") return e;
  let n = B(r);
  return e === "credential" || n === void 0 || n === 408 || n === 429 || n >= 500
    ? "temporary"
    : "failed";
}
async function Q$n(e, r, n, f, c) {
  let s = await ye(e, r, n, f, c);
  return (c?.onVerdict?.(s.verdict, s.rememberedAt), s.verdict);
}
async function ye(e, r, n, f, c) {
  if (r !== void 0 && !c?.live) {
    let s = await jBe(r, n),
      a = !1;
    if (s !== void 0 && c?.isDefault && V(s)) {
      let l = await he(r, n);
      ((a = l.claimed), (s = l.claimed ? void 0 : l.current));
    }
    if (s !== void 0)
      return (
        t(`${y} ${e} ${n}: ${s.state} (remembered)`),
        { verdict: s.state === "ok" ? "accessible" : "refused", rememberedAt: s.at }
      );
    let g = await I(e, r, n, f, c);
    if (a && g === "denied") return (WBe(r, n, "refused"), { verdict: "refused" });
    return { verdict: g };
  }
  return { verdict: await I(e, r, n, f, c) };
}
async function I(e, r, n, f, c) {
  let s = await f(),
    a = s.accessible ? void 0 : QFt(e, s.error);
  if (a === "outdated") {
    let x = c?.versionTooOld === "unavailable",
      U = x ? "not switching to it" : "keeping it, so the first request shows the update message";
    if (
      (t(
        `${y} ${e} ${n}: needs a newer Claude Code than ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_7f16e88950b1f266(new __sourceFilePath_7f16e88950b1f266_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}; ${U} (not saved; any earlier answer cleared)`
      ),
      r !== void 0)
    )
      Ee(r, n);
    return x ? "failed" : "accessible";
  }
  if (r !== void 0 && (s.accessible || a === "refused")) WBe(r, n, s.accessible ? "ok" : "refused");
  if (s.accessible || a === void 0) return "accessible";
  let g = Se(a, s.error),
    l = B(s.error),
    m = l !== void 0 ? null : Ym(s.error),
    S =
      s.error instanceof hk
        ? "timeout"
        : l !== void 0
          ? `HTTP ${l}`
          : m !== null
            ? am(m.code)
            : s.error instanceof Au
              ? "connection error"
              : "no HTTP status",
    b = m?.message ?? d(s.error),
    h = l !== void 0 ? `${l} ` : m !== null ? `${m.code}: ` : void 0,
    P = am(h !== void 0 && b.startsWith(h) ? b.slice(h.length) : b);
  return (
    t(
      `${y} ${e} ${n}: check failed: ${pe[g]} (${a === "credential" ? "a credential error, " : ""}${S}: ${jH(P, le)})`,
      { level: g === "refused" || g === "denied" ? "debug" : "error" }
    ),
    g
  );
}
async function Z$n(e, r, n, f) {
  let c = [];
  for (let a of e) {
    let g = await Promise.all(a.map(n)),
      l = await Promise.all(a.map((S) => r(S, !1))),
      m = a.find((S, b) => l[b]);
    if (m !== void 0) return m;
    c.push(...a.filter((S, b) => g[b]));
  }
  if (c.length === 0 || Date.now() > f) return;
  let s = await Promise.all(c.map((a) => r(a, !0)));
  return c.find((a, g) => s[g]);
}
export { Kve, J$n, TAs, Out, Mut, jBe, WBe, Q$n, Z$n };

//# sourceMappingURL=chunk-5vb15gre.js.map
