// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { G, ui } from "./chunk-fs43t96t.js";
import { _l } from "./chunk-at88wjsn.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { ot } from "./chunk-8r2m7vfp.js";
import { g5, MCe, tnt, Hei } from "./chunk-ajtyjx88.js";
import { Tm, Qj } from "./chunk-5rw2zfa0.js";
import { i } from "./chunk-cj37hmns.js";
import { Ase, d4e, bfe } from "./chunk-d54avynm.js";
import { ek } from "./chunk-7c3thgax.js";
import { IY } from "./chunk-d89f5ek5.js";
import { Afe, o2 } from "./chunk-7zgz07kc.js";
import { createHash as K } from "crypto";
import { fileURLToPath as O } from "url";
import { createPublicKey as w } from "crypto";
var L = {
    id: "claude-code-release-signing-key",
    spkiBase64:
      "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixBUZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncrmYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmVNX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAsIdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAip5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81IwH6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3ZpIgmI+CePUPB1pDf+lhPkU1MCAwEAAQ=="
  },
  dnn = [L],
  mjn = "managed-model-catalog-public-key";
function gjn(e) {
  if (e === void 0) return;
  return e === mjn ? "managed_key" : "compiled_roots";
}
function B(e) {
  let r = /^-----BEGIN PUBLIC KEY-----([\s\S]*?)-----END PUBLIC KEY-----$/.exec(e.trim());
  if (r === null || r[1] === void 0) return;
  let n = r[1].replace(/\s+/g, "");
  if (n.length === 0 || !/^[A-Za-z0-9+/]+=*$/.test(n)) return;
  let o = Buffer.from(n, "base64");
  return o.length > 0 && o.toString("base64") === n ? new Uint8Array(o) : void 0;
}
var g = 2048;
function C(e) {
  let r = B(e);
  if (r === void 0) return { ok: !1, reason: "not_spki_pem" };
  let n, o;
  try {
    let a = w({ key: Buffer.from(r), format: "der", type: "spki" });
    ((n = a.asymmetricKeyType), (o = a.asymmetricKeyDetails?.modulusLength));
  } catch {
    return { ok: !1, reason: "not_spki_pem" };
  }
  if (n !== "rsa") return { ok: !1, reason: "not_rsa" };
  if (o === void 0 || o < g) return { ok: !1, reason: "modulus_too_short" };
  return { ok: !0, der: r };
}
function S(e) {
  return new Uint8Array(Buffer.from(e.spkiBase64, "base64"));
}
var _ = "https://downloads.claude.ai/model-catalog/v1/catalog.json",
  h = ".raw-sig.json";
function m() {
  return { url: void 0, publicKey: void 0 };
}
function k() {
  let { url: e, publicKey: r } = m();
  if (e === void 0 && r === void 0) return { url: void 0, publicKey: void 0 };
  let n = ek();
  if (!Qj(n) && !(n === "remote" && Tm()))
    return (
      t(
        `[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`
      ),
      { url: void 0, publicKey: void 0 }
    );
  return { url: e, publicKey: r };
}
function cnn() {
  let { url: e, publicKey: r } = m();
  if (e === void 0 && r === void 0) return !1;
  return ek() === "remote" && !Tm();
}
function gPs() {
  if (!cnn()) return !1;
  let { url: e } = m();
  if (e === void 0) return !1;
  try {
    return y(new URL(e)) === "file";
  } catch {
    return !1;
  }
}
function A(e = k()) {
  return e.url ?? D(i.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function lvo() {
  let e = A();
  if (e === void 0) return !1;
  try {
    return y(new URL(e)) === "file";
  } catch {
    return !1;
  }
}
function D(e) {
  let r = e?.trim();
  return r ? r : void 0;
}
function B9e({ ignoreEnvUrl: e = !1 } = {}) {
  let r = k(),
    n = (e ? r.url : A(r)) ?? _,
    o;
  try {
    o = new URL(n);
  } catch {
    return (
      t("[publishedCatalog] configured catalog URL is not a URL; published path off"),
      { ok: !1, reason: "invalid_url" }
    );
  }
  let a = y(o);
  if (a === void 0)
    return (
      t(
        `[publishedCatalog] configured catalog URL has unsupported scheme ${o.protocol}; published path off`
      ),
      { ok: !1, reason: "invalid_url" }
    );
  if (a !== "file" && Ase(o.hostname))
    return (
      t(
        "[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"
      ),
      { ok: !1, reason: "invalid_url" }
    );
  let s = o.toString();
  return { ok: !0, source: { kind: a, url: s, trust: I(a, r), cacheKey: dvo(s) } };
}
function y(e) {
  if (e.protocol === "file:")
    return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === _ ? "hosted" : "custom_url";
}
function I(e, r) {
  if (e === "hosted" || r.publicKey === void 0) return { kind: "compiled_roots", roots: dnn };
  if (r.url === void 0)
    return (
      t(
        "[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"
      ),
      { kind: "compiled_roots", roots: dnn }
    );
  let n = C(r.publicKey);
  if (!n.ok)
    return (
      t(
        `[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${g} bits (${n.reason}); custom source refused`
      ),
      { kind: "untrusted", reason: "invalid_public_key" }
    );
  return {
    kind: "managed_key",
    roots: [...dnn, { id: mjn, spkiBase64: Buffer.from(n.der).toString("base64") }]
  };
}
function dvo(e) {
  return K("sha256").update(e).digest("hex").slice(0, 32);
}
function P(e) {
  return O(e.url);
}
var R = 1e4;
async function hjn(e, { etag: r, noCache: n = !1 } = {}) {
  try {
    return e.kind === "file" ? await H(e) : await F(e, { etag: r, noCache: n });
  } catch (o) {
    let { kind: a, status: s } = ui(o);
    switch ((t(`[publishedCatalog] fetch failed: ${a}${s !== void 0 ? ` ${s}` : ""}`), a)) {
      case "timeout":
        return { status: "error", reason: "timeout" };
      case "network":
        return { status: "error", reason: "network" };
      case "auth":
      case "http":
        return s === void 0
          ? { status: "error", reason: j(o) ? "too_large" : "network" }
          : { status: "error", reason: "http_status", httpStatus: s };
      case "other":
        return { status: "error", reason: "exception" };
    }
  }
}
async function F(e, { etag: r, noCache: n }) {
  let o = v(e.url),
    a = n ? { "Cache-Control": "no-cache", Pragma: "no-cache" } : void 0,
    s = await U(e.url, {
      responseType: "arraybuffer",
      timeout: R,
      maxContentLength: MCe,
      maxBodyLength: MCe,
      validateStatus: () => !0,
      beforeRedirect: o,
      ...((r !== void 0 || a !== void 0) && {
        headers: { ...a, ...(r !== void 0 && { "If-None-Match": r }) }
      })
    }),
    u = s.status;
  if (u === 304 && r !== void 0)
    return (t("[publishedCatalog] fetch: not modified"), { status: "not_modified", httpStatus: u });
  if (u < 200 || u >= 300)
    return (
      t(`[publishedCatalog] fetch: HTTP ${u}`),
      { status: "error", reason: "http_status", httpStatus: u }
    );
  let l = E(s.data);
  if (l.length > MCe) return { status: "error", reason: "too_large", httpStatus: u };
  let f = void 0,
    c = !1,
    d = await U(Y(e.url), {
      responseType: "arraybuffer",
      timeout: R,
      maxContentLength: tnt,
      maxBodyLength: tnt,
      validateStatus: () => !0,
      beforeRedirect: o,
      ...(a !== void 0 && { headers: a })
    });
  if (d.status >= 200 && d.status < 300) {
    let p = E(d.data);
    if (p.length <= tnt) ((c = !0), (f = ot(Buffer.from(p).toString("utf8"), !1)));
  } else t(`[publishedCatalog] sidecar fetch: HTTP ${d.status}`);
  return (
    t(`[publishedCatalog] fetch ok: ${l.length} bytes${c ? ", sidecar present" : ", no sidecar"}`),
    {
      status: "ok",
      documentBytes: l,
      sidecar: f,
      hasSidecar: c,
      sidecarHttpStatus: d.status,
      etag: V(s.headers),
      httpStatus: u
    }
  );
}
async function H(e) {
  if (J())
    return (
      t("[publishedCatalog] file not read: a diskless session"),
      { status: "error", reason: "read_failed" }
    );
  let r = P(e),
    n = ie(),
    o;
  try {
    o = await n.readFileBytes(r, MCe + 1);
  } catch (u) {
    return (
      t(`[publishedCatalog] file read failed${G(u) ? " (no such file)" : ""}`),
      { status: "error", reason: "read_failed" }
    );
  }
  if (o.length > MCe) return { status: "error", reason: "too_large" };
  let a = void 0,
    s = !1;
  try {
    let u = await n.readFileBytes(`${r}${h}`, tnt + 1);
    if (u.length <= tnt) ((s = !0), (a = ot(u.toString("utf8"), !1)));
  } catch (u) {
    if (!G(u)) t("[publishedCatalog] sidecar read failed");
  }
  return (
    t(
      `[publishedCatalog] file read ok: ${o.length} bytes${s ? ", sidecar present" : ", no sidecar"}`
    ),
    {
      status: "ok",
      documentBytes: new Uint8Array(o),
      sidecar: a,
      hasSidecar: s,
      sidecarHttpStatus: void 0,
      etag: void 0,
      httpStatus: void 0
    }
  );
}
function U(e, r) {
  return o2(e) ? IY.get(e, r) : _l.get(e, r);
}
function v(e) {
  let r = o2(e),
    n = e.toLowerCase().startsWith("https:");
  return (o) => {
    let a = d4e(o),
      s = M(a),
      u = N(a),
      l = bfe(e, a),
      f = n ? u === "https:" : l || u === "https:";
    if (!(s !== "" && (r ? o2(s) : !Afe(s)) && f && (l || !Ase(s))))
      throw Error(
        "[publishedCatalog] redirect refused: a hop left the host the request was pinned to"
      );
  };
}
function M(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function N(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function Y(e) {
  let r = new URL(e);
  return ((r.pathname += h), r.toString());
}
function E(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return new TextEncoder().encode(e);
  return new Uint8Array(0);
}
function j(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "code" in e &&
    (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE")
  );
}
function V(e) {
  let r = e?.etag;
  return g5(r) ? r : void 0;
}
var x = "claude-code-model-catalog-v1\x00",
  T = { name: "RSASSA-PKCS1-v1_5", hash: "SHA-512" };
async function VHt({ documentBytes: e, sidecar: r, roots: n, context: o = x }) {
  let a = Hei().safeParse(r);
  if (!a.success) return { ok: !1, reason: "sidecar_invalid" };
  let s = Buffer.from(a.data.signature, "base64");
  if (s.length === 0 || s.toString("base64") !== a.data.signature)
    return { ok: !1, reason: "sidecar_invalid" };
  let u, l;
  for (let d of n) {
    let p = b(S(d));
    if ((await q(p)) === a.data.publicKeySha256) {
      ((u = d), (l = p));
      break;
    }
  }
  if (u === void 0 || l === void 0) return { ok: !1, reason: "unknown_key" };
  let f;
  try {
    f = await crypto.subtle.importKey("spki", l, T, !1, ["verify"]);
  } catch (d) {
    return (
      t(
        `[publishedCatalog] trust root ${u.id} is not an importable RSA key: ${d instanceof Error ? d.name : "error"}`
      ),
      { ok: !1, reason: "key_unusable" }
    );
  }
  let c;
  try {
    c = await crypto.subtle.verify(T.name, f, b(s), X(e, o));
  } catch {
    c = !1;
  }
  return c ? { ok: !0, rootId: u.id } : { ok: !1, reason: "bad_signature" };
}
function X(e, r = x) {
  let n = new TextEncoder().encode(r),
    o = new Uint8Array(n.length + e.length);
  return (o.set(n), o.set(e, n.length), o);
}
async function q(e) {
  let r = await crypto.subtle.digest("SHA-256", b(e));
  return Buffer.from(r).toString("hex");
}
function b(e) {
  let r = new Uint8Array(e.byteLength);
  return (r.set(e), r);
}
export { dnn, mjn, gjn, cnn, gPs, lvo, B9e, dvo, hjn, VHt };

//# sourceMappingURL=chunk-qd2ec3fx.js.map
