import {
  fileURLToPath as __sourceFilePath_4c5d112bc9fb36ec,
  URL as __sourceFilePath_4c5d112bc9fb36ec_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Cn, t } from "./chunk-4kxznmzw.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { Sr, Ae, of } from "./chunk-dvghjmtr.js";
import { o2 } from "./chunk-7zgz07kc.js";
import { Iei, Oei, Mei, Kyn, lH, O_e, st, XU, K7 } from "./chunk-ajtyjx88.js";
import { on } from "./chunk-cr7a2cdd.js";
import { vKe } from "./chunk-gjpjdnzc.js";
import { yjn, qHt } from "./chunk-ze6ha8yq.js";
import { dnn, dvo, hjn, VHt } from "./chunk-qd2ec3fx.js";
import { $n } from "./chunk-ya7n419k.js";
import { stripVTControlCharacters as R } from "util";
function f(e) {
  return `Error: --client-data-url: ${e}. Claude Code does not start without the configuration it was given; to start without it, remove the flag, or remove CLAUDE_CODE_CLIENT_DATA_URL from your environment or settings.`;
}
function m(e, { httpStatus: n, minClaudeCodeVersion: r, buildVersion: o } = {}) {
  switch (e) {
    case "invalid_url":
      return "the URL must be the https://downloads.claude.ai/ address Anthropic gave you, exactly as given";
    case "remote_session":
      return "it cannot be used in a cloud, remote-environment or ssh session, which runs Claude Code on another machine";
    case "third_party_provider":
      return "it only works when Claude Code talks to the Anthropic API directly, not through a cloud provider such as Bedrock, Vertex or Foundry, or a cloud gateway";
    case "policy_denied":
      return "your organization's policy does not allow it";
    case "not_found":
      return "there is nothing at that URL; it may have been withdrawn, so ask Anthropic for a new one";
    case "http_status":
    case "timeout":
    case "network":
    case "read_failed":
      return `Claude Code could not fetch the document from downloads.claude.ai (${e === "http_status" ? `HTTP ${n ?? "error"}` : e}); check that your network or proxy allows https://downloads.claude.ai`;
    case "too_large":
      return "the server returned something too large to be a configuration document; try again, and if it keeps happening ask Anthropic";
    case "unsigned":
    case "sidecar_invalid":
    case "bad_signature":
    case "parse_failed":
      return `the document or its signature is not valid (${e}); ask Anthropic for a new URL`;
    case "unknown_key":
    case "key_unusable":
    case "unsupported_schema":
      return `this version of Claude Code cannot read the document (${e}); update Claude Code`;
    case "replayed_version":
      return "the server returned an older document than one already accepted on this machine; a proxy on your network may be serving an old copy; if not, ask Anthropic for a new URL";
    case "below_minimum_version":
      return `the document requires Claude Code ${r} or newer and this build is ${o}; run claude update`;
    case "exception":
      return "Claude Code hit an internal error loading it; run with --debug for details";
  }
}
function A(e, n) {
  let r = E(e);
  return r === ""
    ? "Error: --client-data-url: the document has nothing for any model (its publisher switched it off). Remove --client-data-url or CLAUDE_CODE_CLIENT_DATA_URL, or pass --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it."
    : `Error: --client-data-url: the document has no entry for ${p(n)}; it has entries for models matching ${r}. Pass a matching --model, or --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it.`;
}
function v(e, n, r) {
  let o = E(e),
    a =
      Kyn(e, n) !== null
        ? `applied to ${p(n)} (document v${e.version})`
        : o === ""
          ? `loaded (document v${e.version}), nothing in it for any model (its publisher switched it off)`
          : `loaded (document v${e.version}), nothing in it for ${p(n)}; it has entries for models matching ${o}`;
  return r ? `${a}; base URL treated as the Anthropic API` : a;
}
function E(e) {
  return p(e.entries.map((n) => n.pattern.source).join(", "));
}
function p(e) {
  return Cn(R(e));
}
function D() {
  let e = i.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
  if (!e) return { kind: "unset" };
  let n;
  try {
    n = new URL(e);
  } catch {
    return { kind: "invalid_url" };
  }
  if (
    n.protocol !== "https:" ||
    n.username !== "" ||
    n.password !== "" ||
    n.port !== "" ||
    !o2(n.hostname) ||
    /[?#]/.test(e) ||
    !Iei.test(n.pathname)
  )
    return { kind: "invalid_url" };
  return {
    kind: "ok",
    source: {
      url: n.toString(),
      signingContext: Oei(n.pathname),
      cacheKey: dvo(n.pathname),
      roots: dnn
    }
  };
}
function d() {
  return Sr().clientDataUrl;
}
function lPs({
  flagUrl: e,
  runsOnAnotherMachine: n = !1,
  buildVersion: r = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.310",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-23T17:43:32Z",
    GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
    HOOKS_WORKER_URL: __sourceFilePath_4c5d112bc9fb36ec(
      new __sourceFilePath_4c5d112bc9fb36ec_URL(
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        import.meta.url
      )
    ),
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION
} = {}) {
  try {
    if (e !== void 0) i.set("CLAUDE_CODE_CLIENT_DATA_URL", e);
    let o = D();
    if (o.kind === "unset" || !k() || U(o, n) !== void 0) return;
    let a = g(o, n, r);
    (a.catch(() => {}), (d().pending = { resolution: o, loaded: a }));
  } catch (o) {
    l(o);
  }
}
async function dPs() {
  try {
    let e = d().pending;
    if (e === void 0) return !1;
    let n = await e.loaded;
    return "document" in n && L(n.document);
  } catch (e) {
    return (l(e), !1);
  }
}
async function cPs({
  runsOnAnotherMachine: e = !1,
  buildVersion: n = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.310",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-23T17:43:32Z",
    GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
    HOOKS_WORKER_URL: __sourceFilePath_4c5d112bc9fb36ec(
      new __sourceFilePath_4c5d112bc9fb36ec_URL(
        "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        import.meta.url
      )
    ),
    DD_SOURCEMAP_GROUP: "default"
  }.VERSION
} = {}) {
  try {
    let r = D(),
      o = d().pending;
    d().pending = void 0;
    let a = o !== void 0 && b(o.resolution, r) ? o : void 0;
    if (r.kind === "unset") {
      w();
      return;
    }
    let s = U(r, e);
    if (s !== void 0 || (o !== void 0 && a === void 0)) w();
    if (s === void 0 && a === void 0 && !on("allow_model_catalog")) return f(m("policy_denied"));
    let u = s !== void 0 ? { failure: s } : a !== void 0 ? await a.loaded : await g(r, e, n);
    if (a !== void 0 && "failure" in u && S.has(u.failure)) u = await g(r, e, n);
    if ("failure" in u) return f(m(u.failure, u));
    if (a !== void 0 && !on("allow_model_catalog")) return f(m("policy_denied"));
    if (L(u.document)) vKe();
    if (r.kind === "ok") await qHt(r.source.cacheKey, u.document);
    ((d().document = u.document),
      t(
        `[clientDataUrl] loaded document v${u.document.version} covering ${u.document.entries.length} model pattern(s)`
      ));
    return;
  } catch (r) {
    return (l(r), f(m("exception")));
  }
}
function L(e) {
  if (d().assumesFirstPartyBaseUrl) return !1;
  let n = e.entries.find((r) => r.clientData.assume_first_party_base_url === !0);
  if (n === void 0 || of()) return !1;
  if (i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== void 0 || y())
    return (
      t(
        `[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`
      ),
      !1
    );
  return (
    (d().assumesFirstPartyBaseUrl = !0),
    XU(),
    K7(),
    t(
      `[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`
    ),
    !0
  );
}
function uPs() {
  let { document: e } = d();
  if (e === void 0 || i.CLAUDE_CODE_ALLOW_OTHER_MODELS) return;
  let n = $n(st());
  return Kyn(e, n) === null ? A(e, n) : void 0;
}
function fPs(e, n) {
  let { document: r } = d();
  if (r === void 0) return e;
  let o = Kyn(r, $n(n ?? st()));
  return o === null ? e : { ...e, ...o };
}
function pPs(e) {
  let { document: n } = d();
  return n !== void 0 && n.entries.length > 0 && Kyn(n, $n(e ?? st())) === null;
}
function mPs() {
  let { document: e } = d();
  return e === void 0 ? void 0 : v(e, $n(st()), d().assumesFirstPartyBaseUrl);
}
async function g(e, n, r) {
  let o = U(e, n);
  if (o !== void 0 || e.kind !== "ok") return { failure: o ?? "invalid_url" };
  let { source: a } = e,
    s = await hjn(
      {
        kind: "hosted",
        url: a.url,
        trust: { kind: "compiled_roots", roots: a.roots },
        cacheKey: a.cacheKey
      },
      { noCache: !0 }
    );
  if (s.status !== "ok") {
    let { httpStatus: c } = s;
    if (c === 404 || c === 410) return { failure: "not_found" };
    return { failure: s.status === "error" ? s.reason : "http_status", httpStatus: c };
  }
  if (!s.hasSidecar) {
    let { sidecarHttpStatus: c } = s;
    if (c === void 0 || c === 404 || c === 410) return { failure: "unsigned" };
    return c >= 200 && c < 300
      ? { failure: "too_large" }
      : { failure: "http_status", httpStatus: c };
  }
  let u = await VHt({
    documentBytes: s.documentBytes,
    sidecar: s.sidecar,
    roots: a.roots,
    context: a.signingContext
  });
  if (!u.ok) return { failure: u.reason };
  let _ = Mei(s.documentBytes);
  if (!_.ok) return { failure: _.reason };
  let { document: h } = _;
  if (h.version < (await yjn(a.cacheKey))) return { failure: "replayed_version" };
  let { minClaudeCodeVersion: C } = h;
  if (C !== void 0 && lH(O_e(r), C))
    return { failure: "below_minimum_version", minClaudeCodeVersion: C, buildVersion: r };
  return { document: h };
}
function U(e, n) {
  if (e.kind === "invalid_url") return "invalid_url";
  if (n) return "remote_session";
  if (Ae() !== "firstParty") return "third_party_provider";
  return;
}
function y() {
  return i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || i.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== void 0;
}
function k() {
  return (
    Ae() === "firstParty" && !of() && i._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === void 0 && !y()
  );
}
var S = new Set(["network", "http_status", "read_failed"]);
function b(e, n) {
  return e.kind === "ok"
    ? n.kind === "ok" && e.source.url === n.source.url
    : n.kind === "invalid_url";
}
function w() {
  if (!d().assumesFirstPartyBaseUrl) return;
  ((d().assumesFirstPartyBaseUrl = !1),
    XU(),
    K7(),
    t(
      "[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from"
    ));
}
export { lPs, dPs, cPs, uPs, fPs, pPs, mPs };

//# sourceMappingURL=chunk-c7qyd6px.js.map
