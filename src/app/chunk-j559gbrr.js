// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { dR, gn, XE, jt, k, Re, ue } from "./chunk-ajtyjx88.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { t } from "./chunk-4kxznmzw.js";
import { nN } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { g, f } from "./chunk-brszmkb3.js";
import { p } from "./chunk-qmkm2x59.js";
import { $bn } from "./chunk-at88wjsn.js";
import { Yd } from "./chunk-ddpw2j06.js";
import { _Z } from "./chunk-x8k0r295.js";
import { QP } from "./chunk-yw4wqxm9.js";
import { o, u, B } from "./chunk-0bqrj5ah.js";
class Smo {
  #t;
  constructor(e) {
    this.#t = e;
  }
  reveal() {
    return this.#t;
  }
  toString() {
    return "[REDACTED:gh-token]";
  }
  toJSON() {
    return "[REDACTED:gh-token]";
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return "[REDACTED:gh-token]";
  }
}
async function wmo(e, n) {
  let r;
  try {
    r = await jt.post(
      "/v1/code/github/import-token",
      { token: e.reveal() },
      {
        headers: { "anthropic-beta": $bn.header },
        auth: "teleport-org",
        timeout: 15000,
        validateStatus: () => !0,
        credentials: n
      }
    );
  } catch (s) {
    if (Yd(s)) {
      t(`import-token network error: ${s.code ?? "unknown"}`, { level: "error" });
      let a = _Z(s);
      return { ok: !1, error: { kind: "network", ...(a && { sslHint: a }) } };
    }
    return { ok: !1, error: { kind: "not_signed_in" } };
  }
  if (!r.ok) return { ok: !1, error: { kind: "not_signed_in" } };
  if (r.status === 200) return { ok: !0, result: r.data };
  if (r.status === 400) {
    let s = nN(QP(r.data) ?? "");
    return { ok: !1, error: { kind: "invalid_token", ...(s && { message: s }) } };
  }
  if (r.status === 401) return { ok: !1, error: { kind: "not_signed_in" } };
  return (
    t(`import-token returned ${r.status}`, { level: "error" }),
    { ok: !1, error: { kind: "server", status: r.status } }
  );
}
async function Sks(e) {
  try {
    return (await XE(e), !0);
  } catch {
    return !1;
  }
}
async function c(e, { timeout: n, isBackground: r }) {
  try {
    let s = await jt.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: n,
      isBackground: r,
      validateStatus: () => !0,
      credentials: e
    });
    if (!s.ok || s.status !== 200) return null;
    let a = s.data?.auth_source;
    return {
      isAuthenticated: s.data?.is_authenticated === !0,
      authSource: a === "oauth" || a === "cli_import" ? a : null
    };
  } catch {
    return null;
  }
}
async function vmo(e) {
  let n = await c(e, { timeout: 1e4, isBackground: !1 });
  return n?.isAuthenticated ? n.authSource : null;
}
async function h(e) {
  let n = await c(e, { timeout: 3000, isBackground: !0 });
  if (n === null) return (f("api_github_connection_status", "request_failed"), "unknown");
  return (g("api_github_connection_status"), n.isAuthenticated ? "connected" : "not_connected");
}
function $Ie() {
  return `${rn().CLAUDE_AI_ORIGIN}/code`;
}
class S {
  inFlight = void 0;
  status = void 0;
  generation = 0;
  async read(e, n) {
    if ((this.seedFromPersisted(), this.inFlight)) await this.inFlight;
    else if (!d()) await this.fetch(e, n);
    return this.status ?? "unknown";
  }
  async readLive(e, n) {
    if ((this.seedFromPersisted(), !this.inFlight && d())) return "unknown";
    let r = this.generation,
      s = await (this.inFlight ?? this.fetch(e, n));
    return r === this.generation ? s : "unknown";
  }
  peek(e, n) {
    if ((this.seedFromPersisted(), this.status === void 0 && !this.inFlight && !d()))
      this.fetch(e, n);
    return this.status;
  }
  markConnected(e) {
    (this.generation++, (this.inFlight = void 0), (this.status = "connected"), m("connected", e));
  }
  clear() {
    (this.generation++, (this.inFlight = void 0), (this.status = void 0));
  }
  seedFromPersisted() {
    if (this.status !== void 0 || this.inFlight) return;
    let e = b();
    if (e) this.status = C(ue(), e);
  }
  fetch(e, n) {
    let r = this.generation,
      s = h(e).then(
        (a) => (this.settle(r, a, n), a),
        (a) => (l(a), this.settle(r, "unknown", n), "unknown")
      );
    return ((this.inFlight = s), s);
  }
  settle(e, n, r) {
    if (e !== this.generation) return;
    if (((this.inFlight = void 0), n === "unknown")) {
      this.status ??= n;
      return;
    }
    ((this.status = n), m(n, r));
  }
}
var oK = new W(() => new S());
function d() {
  return k("tengu_cheerful_horizon", !1);
}
var _ = p(() => u({ accountUuid: o(), orgUuid: o(), status: B(["connected", "not_connected"]) }));
function b() {
  let e = gn();
  if (!e?.organizationUuid) return;
  let n = i.CLAUDE_CODE_ORGANIZATION_UUID;
  if (n && n !== e.organizationUuid) return;
  if (dR() !== "store") return;
  return { accountUuid: e.accountUuid, orgUuid: e.organizationUuid };
}
function C(e, n) {
  let r = _().safeParse(e.githubWebConnectionStatusCache);
  if (!r.success || r.data.accountUuid !== n.accountUuid || r.data.orgUuid !== n.orgUuid) return;
  return r.data.status;
}
function m(e, n) {
  let r = b();
  if (!r) return;
  Re((s) => (C(s, r) === e ? s : { ...s, githubWebConnectionStatusCache: { ...r, status: e } }), n);
}
export { Smo, wmo, Sks, vmo, $Ie, oK };

//# sourceMappingURL=chunk-j559gbrr.js.map
