import {
  fileURLToPath as __filePath_88136f3c97a38402,
  URL as __filePath_88136f3c97a38402_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F_, yv, lH, yVr, sA, pa, FV, Ai, k, Re, ue } from "./chunk-ajtyjx88.js";
import { Ne, is } from "./chunk-2qx8pe6s.js";
import { U } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, $I, N, d, E, yh, Fs, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { W } from "./chunk-jgvfzp2r.js";
import { i } from "./chunk-cj37hmns.js";
import { bt, _, te, ie, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { X0 } from "./chunk-qywdxehb.js";
import { p } from "./chunk-qmkm2x59.js";
import { vl, Gci } from "./chunk-6xjawpfq.js";
import { oy, _l } from "./chunk-at88wjsn.js";
import { Na, Yd } from "./chunk-ddpw2j06.js";
import { o2 } from "./chunk-7zgz07kc.js";
import { aB, XV, Ym } from "./chunk-x8k0r295.js";
import { F6o } from "./chunk-bh50mq9d.js";
import { ZFt, hQe } from "./chunk-6h7ejyet.js";
import { ACr, ipt, z9e, CCr, Ejn, RCr, U1e, K9e, V9e } from "./chunk-8d5aa3j3.js";
import { $1e } from "./chunk-wr09hc4c.js";
import { IY } from "./chunk-d89f5ek5.js";
import { VQs, qQs, lhn, s9 } from "./chunk-ny2y84j1.js";
import { o, v, u, yt, me, A } from "./chunk-0bqrj5ah.js";
import { Ce } from "./chunk-a2y39866.js";
var St = Ce(oy(), 1);
import { constants as _n } from "fs";
import {
  access as hn,
  chmod as wn,
  copyFile as Et,
  mkdir as ce,
  readdir as $e,
  readlink as kt,
  realpath as pt,
  rename as ge,
  rm as we,
  rmdir as yn,
  stat as Y,
  symlink as gt,
  unlink as ne,
  utimes as vn,
  writeFile as En
} from "fs/promises";
import { homedir as $t } from "os";
import { randomBytes as Rt } from "crypto";
import { basename as Ue, delimiter as bn, dirname as re, join as H, resolve as le } from "path";
import { createHash as Ie } from "crypto";
import { createReadStream as Bt, createWriteStream as zt } from "fs";
import { chmod as Gt, rm as Ht } from "fs/promises";
import { join as jt } from "path";
import { Readable as Wt, Transform as qe } from "stream";
import { pipeline as Me } from "stream/promises";
import { createZstdDecompress as qt } from "zlib";
var Pt = !1;
function Q() {
  let e = i.platform,
    n = "x64";
  if (!n) {
    let r = Error("Unsupported architecture: x64");
    throw (t("Native installer does not support architecture: x64", { level: "error" }), r);
  }
  if (Pt) n = "arm64";
  if (e === "linux") {
    if (sA.isAndroidEnvironment()) return `linux-${n}-android`;
    if (sA.isMuslEnvironment()) return `linux-${n}-musl`;
  }
  return `${e}-${n}`;
}
import { createHash as Ot, createPublicKey as Dt, verify as Nt } from "crypto";
function Ge() {
  return `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAp28rSV5I8HmK8CK9GixB
UZR/gtJxeOCsRXO4EJiej40jzBmQA3cWXGosVO82ZfFsRKVTtMC5iB/HH9sxjncr
mYNWGroJNbx29m/FgYQBgkCXT4AfFl6rnnXqRGLZOerj/4AqE4yQ1GZbhBgR55Z7
ro0ieKK8RHYUspBKAFHyWRhCCz6THW6YRbf0p/hG/08TOY6Sj3cJ7/AEoTRf9ZmV
NX1k0KvbUSiVGpGY9OIHWgxRJUF2pArU4o/hk+sqGAgEUh8Bjvjwvz6+quLXPg+y
0Y8Ugb1Fg6BUppam/zydYY/Q/+yNjnuF154gD1jEeeir8R5czs6zUHSbo2yXUpAs
IdWYo5End8vGsluVmFExnUWm/fTVMGoM5Wm3v1VRepMydEnJ+atz4oQdmPQcKNAi
p5GJO2uyk++xFr9CpKvlR5jral92toYV/m+mur3va8ydamWBo/qG7/wt0sdS81Iw
H6lcu0SQ39rgKD+bdoPLv05EqVMYTFRI2QZEsWGYTMs0DOrfCIJFH50qyD0x4sWw
1gEWeG3jDgY8cj2StZz+zjqzUd05CibcCzEAGm1EQg5y9D40tIsAU1OI7bpgQ9V0
lC8lrqE7zJY66UK9Z1daA8jrdDi6migNjHFrXfT3V4QvMthCIO05q05SS3x2G3Zp
IgmI+CePUPB1pDf+lhPkU1MCAwEAAQ==
-----END PUBLIC KEY-----
`;
}
var He = Buffer.from("claude-code-manifest-v1\x00"),
  Te = "2.1.207",
  je = "flag";
var Lt = 1,
  Vt = "RSASSA-PKCS1-v1_5-SHA512",
  Ut = p(() =>
    u({
      schema: A(Lt),
      algorithm: A(Vt),
      signature: o().min(1),
      publicKeySha256: o().regex(/^[0-9a-f]{64}$/)
    })
  ),
  xe = p(() =>
    yt({
      version: o(),
      manifestSignatureEnforcement: o().optional(),
      platforms: me(o(), yt({ checksum: o(), size: v().optional(), binary: o().optional() }))
    })
  );
class vL extends R {
  reason;
  constructor(e, n) {
    super(
      `Release verification failed for Claude Code ${e} (${n}). The update was not installed.`,
      "Release manifest signature verification failed",
      n
    );
    ((this.name = "ManifestSignatureError"), (this.reason = n));
  }
}
function We({ manifestBytes: e, sidecar: n, expectedVersion: r, publicKeyPem: s }) {
  let h = Ut().safeParse(n);
  if (!h.success) throw new vL(r, "sidecar_malformed");
  let { signature: w, publicKeySha256: b } = h.data;
  if (Buffer.from(w, "base64").toString("base64") !== w) throw new vL(r, "sidecar_malformed");
  let y;
  try {
    y = Dt(s);
  } catch {
    throw new vL(r, "key_mismatch");
  }
  let S = Ot("sha256")
    .update(y.export({ type: "spki", format: "der" }))
    .digest("hex");
  if (b !== S) throw new vL(r, "key_mismatch");
  let T = !1;
  try {
    T = Nt("sha512", Buffer.concat([He, e]), y, Buffer.from(w, "base64"));
  } catch {
    T = !1;
  }
  if (!T) throw new vL(r, "signature_invalid");
  let F;
  try {
    let P = xe().safeParse(te(e.toString("utf8")));
    F = P.success ? P.data : void 0;
  } catch {
    F = void 0;
  }
  if (!F || F.version !== r) throw new vL(r, "version_mismatch");
  return F;
}
class Ae extends R {
  last;
  constructor(e, n, r) {
    super(e, n);
    this.last = r;
  }
}
function uvo(e) {
  return e instanceof Ae ? e.last : e;
}
var Fe = "https://downloads.claude.ai/claude-code-releases";
var Ke = 30000,
  Ye = 3;
function Oe(e, n) {
  return o2(e) ? IY.get(e, n) : _l.get(e, n);
}
async function Kt(e = "latest", n, r) {
  let s = Date.now(),
    h = 0,
    w;
  try {
    w = await ACr(
      (T) => (h++, Oe(`${n}/${e}`, { timeout: Ke, responseType: "text", signal: T, ...r })),
      {
        attempts: Ye,
        timeoutMs: Ke,
        onRetry: (T, F) => {
          t(
            `Version check failed on attempt ${T}/${Ye}, retrying: ${F instanceof Error ? F.message : String(F)}`
          );
        }
      }
    );
  } catch (T) {
    let F = Date.now() - s,
      P = T instanceof Error ? T.message : String(T),
      D = _e(T);
    (m("update_check", "update_check_binary_repo_failed"),
      a("tengu_version_check_failure", {
        latency_ms: F,
        http_status: D,
        is_timeout: Ee(T),
        attempt: h,
        platform: FV(ln()),
        channel: c(e)
      }));
    let L = new R(
      `Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${P}`,
      "Failed to fetch version from binary repo"
    );
    throw (
      t(`Failed to fetch version from ${n}/${e} after ${h} attempt(s): ${P}`, { level: "error" }),
      L
    );
  }
  let b = Date.now() - s,
    y = w.data.trim(),
    S = y.length;
  if (!yVr(y))
    throw (
      m("update_check", "update_check_binary_repo_invalid_response"),
      new R(
        `Version pointer for ${e} did not return a version (got ${S} bytes)`,
        "Version pointer returned a non-version body"
      )
    );
  if ((a("tengu_version_check_success", { latency_ms: b, attempt: h }), h > 1))
    f("update_check", "update_check_binary_repo_retry");
  else g("update_check");
  return y;
}
async function _jn(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let r = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(r))
      throw new R(
        `Version ${r} is not available for installation. Use 'stable' or 'latest'.`,
        "Test-fixture version rejected outside test builds"
      );
    return r;
  }
  let n = e;
  if (n !== "stable" && n !== "latest" && n !== "rc")
    throw new R(`Invalid channel: ${e}. Use 'latest' or 'stable'`, "Invalid release channel");
  if (n === "rc")
    throw new R(`Invalid channel: ${e}. Use 'stable' or 'latest'`, "Invalid release channel");
  return Kt(n, Fe);
}
var Gr = p(() => u({ dist: u({ integrity: o().min(1), tarball: o().min(1).optional() }) }));
var Yt = 120000,
  se = 3,
  Ze = 600000,
  ve = 1e4,
  Je = 1000,
  et = se * (ve + Je),
  Xt = 2 * et;
function Qt() {
  return Number(i.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || Yt;
}
function Zt() {
  return Number(i.CLAUDE_CODE_DOWNLOAD_DEADLINE_MS_FOR_TESTING) || Ze;
}
class unn extends Error {
  constructor() {
    super("Download stalled: no data received for 120 seconds");
    this.name = "StallTimeoutError";
  }
}
function tt(e) {
  if (Yd(e) && e.response) return !1;
  let n = Ym(e)?.code;
  if (n === "ECONNABORTED" || n === "ETIMEDOUT") return !1;
  if (n !== void 0 && (XV.has(n) || aB.has(n))) return !0;
  return $I(e, "aborted");
}
async function Xe(e, n, r, s = {}, h) {
  let w,
    b = !1,
    y = !1;
  for (let S = 1; S <= se; S++) {
    let T = new AbortController(),
      F = !1,
      P = !1,
      D,
      L,
      O,
      x = () => {
        if (D) (clearTimeout(D), (D = void 0));
        if (L) (clearTimeout(L), (L = void 0));
      },
      I = () => {
        if (D) D.refresh();
        else D = setTimeout((C) => C.abort("stall"), Qt(), T);
      };
    try {
      (I(), (L = setTimeout((j) => j.abort("deadline"), Zt(), T)));
      let C = await Oe(e, { timeout: Ze, responseType: "stream", signal: T.signal, ...s }),
        M = Ie("sha256"),
        B = h ? Ie("sha256") : void 0,
        V = B ?? M,
        q = new qe({
          transform(j, z, K) {
            (I(), V.update(j), K(null, j));
          }
        });
      if (((O = zt(r, { highWaterMark: 4194304 })), O.on("drain", I), h)) {
        let j = 0,
          z = new qe({
            transform(K, ee, oe) {
              if (((j += K.length), j > h.decompressedSize)) {
                oe(
                  new R(
                    `Decompressed binary exceeds the manifest size of ${h.decompressedSize} bytes`,
                    "Decompressed binary larger than manifest size"
                  )
                );
                return;
              }
              (M.update(K), oe(null, K));
            }
          });
        await Me(C.data, q, qt(), z, O, { signal: T.signal });
      } else await Me(C.data, q, O, { signal: T.signal });
      if (((F = !0), x(), h)) {
        let j = B?.digest("hex");
        if (j !== h.checksum)
          throw new R(
            `Checksum mismatch: expected ${h.checksum}, got ${j} (compressed)`,
            "Checksum mismatch during compressed binary download"
          );
      }
      let Z = M.digest("hex");
      if (Z !== n)
        throw Object.assign(
          new R(
            `Checksum mismatch: expected ${n}, got ${Z}`,
            "Checksum mismatch during binary download"
          ),
          { deterministic: h !== void 0 }
        );
      return ((P = !0), await Gt(r, 493), { checksumRetried: b, dropRetried: y });
    } catch (C) {
      x();
      let M = nn(C)
        ? Object.assign(
            new R(
              `Checksum mismatch: zstd decoder rejected the frame (${E(C)})`,
              "zstd decoder rejected the frame"
            ),
            { cause: C }
          )
        : C;
      if (Yd(M) && M.response?.data instanceof Wt) M.response.data.destroy();
      if (O && !P) {
        let K = O;
        (await new Promise((ee) => K.close(() => ee())),
          await Ht(r, { force: !0 }).catch((ee) =>
            t(
              `Failed to remove partial download: ${ee instanceof Error ? ee.message : String(ee)}`,
              { level: "error" }
            )
          ));
      }
      let B = T.signal.aborted ? T.signal.reason : void 0,
        V = B === "deadline",
        q = !V && (B === "stall" || Na(M));
      if (V)
        throw Object.assign(new R("Download timed out: exceeded the total deadline"), {
          attempt: S
        });
      let Z = M instanceof Error && M.message.includes("Checksum mismatch"),
        j = !F && (tt(M) || Ym(M)?.code === "ERR_STREAM_PREMATURE_CLOSE"),
        z = q ? new unn() : N(M);
      if (((w = z), (q || Z || j) && !an(M) && S < se)) {
        if (Z) b = !0;
        else if (j) y = !0;
        (t(
          `Download ${Z ? "checksum mismatch" : q ? "stalled" : "connection dropped"} on attempt ${S}/${se}, retrying...`
        ),
          await X(1000));
        continue;
      }
      if (j) {
        let K = E(z);
        throw Object.assign(
          new R(
            `The connection dropped while downloading the update (attempt ${S}/${se}: ${z.message}). Check your network \u2014 proxies sometimes cut off large downloads.`,
            "Connection dropped repeatedly during binary download"
          ),
          { attempt: S, connectionDrop: !0, cause: z, ...(K && { code: K }) }
        );
      }
      throw Object.assign(z, { attempt: S });
    }
  }
  throw w ?? Error("Download failed after all retries");
}
function nt() {
  return k("tengu_elegant_pancake", null);
}
function De(e, n = nt()) {
  return e === "always" ? n !== !1 : n === !0;
}
function rt() {
  return je;
}
function Jt() {
  return De(rt());
}
function en(e, n) {
  return e === "always" || (e === "flag" && De("flag", n));
}
async function it(
  e,
  n,
  { authConfig: r, signaturePolicy: s, platform: h, startTime: w, purpose: b = "download" }
) {
  let y = b === "download",
    S,
    T,
    F = !1,
    P = bjn(h);
  try {
    let O = await Pe(`${e}/${n}/manifest.json`, {
      timeout: ve,
      ...r,
      responseType: "arraybuffer",
      maxContentLength: 1048576
    });
    ((F = O.dropRetried), (S = Buffer.from(O.data)));
    let x = xe().safeParse(te(S.toString("utf8")));
    if (!x.success)
      throw new R(
        `Manifest for ${n} is not a valid release manifest`,
        "Release manifest failed schema validation"
      );
    T = x.data;
  } catch (O) {
    let x = Date.now() - w,
      I = O instanceof Error ? O.message : String(O);
    if (y) m("update_download", "update_download_manifest_failed");
    throw (
      a("tengu_binary_manifest_fetch_failure", {
        latency_ms: x,
        http_status: _e(O),
        is_timeout: Ee(O),
        platform: FV(h)
      }),
      t(`Failed to fetch manifest from ${e}/${n}/manifest.json: ${I}`, { level: "error" }),
      O
    );
  }
  let D = !1,
    L = !1;
  if (s !== "skip") {
    let O = `${e}/${n}/manifest.json.raw-sig.json`,
      x = Date.now(),
      I,
      C;
    try {
      let M,
        B = !1;
      try {
        let V = await Pe(O, {
          timeout: ve,
          ...r,
          responseType: "json",
          maxContentLength: 65536,
          signal: AbortSignal.timeout(et)
        });
        ((F ||= V.dropRetried), (M = V.data));
      } catch (V) {
        if (((I = _e(V)), I !== 404))
          throw new vL(
            n,
            I !== void 0
              ? "sidecar_fetch_http_error"
              : Date.now() - x > Xt
                ? "sidecar_fetch_interrupted"
                : Ee(V)
                  ? "sidecar_fetch_timeout"
                  : "sidecar_fetch_connection_error"
          );
        if (s !== "allow-unsigned-legacy") throw new vL(n, "sidecar_missing");
        B = !0;
      }
      if (B)
        (f("update_manifest_signature", "unsigned_legacy"),
          t(
            `No manifest signature published for ${n} (predates ${Te}); continuing with checksum-only verification`,
            { level: "warn" }
          ));
      else {
        let V = We({ manifestBytes: S, sidecar: M, expectedVersion: n, publicKeyPem: Ge() });
        t(`Verified manifest signature for ${n}`);
        let q = V.platforms[h];
        if (q && q.binary !== P) throw new vL(n, "binary_name_mismatch");
        if (((T = V), (D = !0), s === "require-enforcing-release")) {
          if (
            (await Ai().catch(() => null),
            (C = { flag: nt() }),
            !en(V.manifestSignatureEnforcement, C.flag))
          )
            throw new vL(n, "release_predates_enforcement");
        }
        ((L = !0), g("update_manifest_signature"));
      }
    } catch (M) {
      if (!(M instanceof vL)) throw M;
      let B = Date.now() - x;
      await Ai().catch(() => null);
      let V = C ? De(rt(), C.flag) : Jt();
      if (
        (a("tengu_binary_manifest_signature_failed", {
          reason: c(M.reason),
          http_status: I,
          enforced: V,
          platform: FV(h),
          latency_ms: B
        }),
        V)
      ) {
        if (M.reason === "release_predates_enforcement")
          (f("update_manifest_signature", M.reason),
            t(
              `${n} is signed but predates manifest-signature enforcement; not eligible as a channel target for this client`,
              { level: "warn" }
            ));
        else if (M.reason === "sidecar_fetch_interrupted")
          (f("update_manifest_signature", M.reason),
            t(
              `Signature sidecar fetch for ${n} was interrupted (process suspended mid-request); will retry on the next update check`,
              { level: "warn" }
            ));
        else {
          if ((m("update_manifest_signature", M.reason), y))
            m("update_download", "update_download_manifest_signature");
          t(`Manifest signature check failed for ${O}: ${M.reason}`, { level: "error" });
        }
        throw M;
      }
      (f("update_manifest_signature", M.reason),
        t(
          `Manifest signature check failed for ${O}: ${M.reason} (enforcement disabled; continuing)`,
          { level: "warn" }
        ));
    }
  }
  return { manifest: T, manifestAuthenticated: D, signatureVerified: L, metadataDropRetried: F };
}
async function tn(e, n, r, { authConfig: s, signaturePolicy: h }) {
  let w = ie();
  await w.rm(n, { recursive: !0, force: !0 });
  let b = Q(),
    y = bjn(b),
    S = Date.now();
  a("tengu_binary_download_attempt", {});
  let [T, F] = await Promise.all([
      it(r, e, { authConfig: s, signaturePolicy: h, platform: b, startTime: S }),
      Pe(`${r}/${e}/manifest.zst.json`, {
        timeout: ve,
        ...s,
        responseType: "json",
        maxContentLength: 1048576
      }).catch((z) => {
        t(`No compressed manifest for ${e}: ${d(z)}`);
        return;
      })
    ]),
    { manifest: P, signatureVerified: D } = T,
    L = F?.data,
    O = T.metadataDropRetried || F?.dropRetried === !0,
    x = P.platforms[b];
  if (!x)
    throw (
      m("update_download", "update_download_platform_not_found"),
      a("tengu_binary_platform_not_found", {}),
      new R(
        `Native binaries for ${b} are not available on this release channel (version ${e} ships: ${Object.keys(P.platforms).sort().join(", ")}).`,
        "Native binaries not available for platform on this channel"
      )
    );
  let I = x.checksum,
    C = L?.platforms?.[b]?.checksum,
    M = x.size,
    B =
      C !== void 0 && /^[a-f0-9]{64}$/.test(C) && M !== void 0 && Number.isInteger(M) && M > 0
        ? { checksum: C, decompressedSize: M }
        : void 0,
    V = `${r}/${e}/${b}/${y}`;
  await w.mkdir(n);
  let q = jt(n, y),
    Z = B !== void 0,
    j = Z ? `${V}.zst` : V;
  try {
    let z;
    if (B)
      try {
        z = await Xe(j, I, q, s || {}, B);
      } catch (de) {
        if (_e(de) === void 0 && !rn(de)) throw de;
        ((Z = !1),
          (j = V),
          t(
            `Compressed binary unusable (${de instanceof Error ? de.message : String(de)}), falling back to ${V}`
          ));
      }
    let { checksumRetried: K, dropRetried: ee } = z ?? (await Xe(j, I, q, s || {})),
      oe = Date.now() - S;
    if (B && !Z) f("update_download", "update_download_zst_fallback");
    else if (K) f("update_download", "update_download_checksum_retry");
    else if (ee || O) f("update_download", "update_download_drop_retry");
    else g("update_download");
    return (
      a("tengu_binary_download_success", { latency_ms: oe, compressed: Z }),
      { signatureVerified: D, expectedChecksum: I }
    );
  } catch (z) {
    let K = Date.now() - S,
      ee = z instanceof Error ? z.message : String(z),
      oe = ee.includes("Checksum mismatch");
    if (oe) m("update_download", "update_download_checksum_mismatch");
    else if (z instanceof unn) m("update_download", "update_download_stall_timeout");
    else if (on(z)) m("update_download", "update_download_connection_drop");
    else m("update_download", "update_download_binary_failed");
    throw (
      a("tengu_binary_download_failure", {
        latency_ms: K,
        http_status: _e(z),
        is_timeout: Ee(z),
        is_checksum_mismatch: oe,
        attempt: sn(z),
        platform: FV(b),
        compressed: Z
      }),
      t(`Failed to download binary from ${j}: ${ee}`, { level: "error" }),
      z
    );
  }
}
function at(e, { explicitVersionRequested: n, requireEnforcingRelease: r }) {
  return r ? "require-enforcing-release" : n && lH(e, Te) ? "allow-unsigned-legacy" : "require";
}
async function ot(e, n, r) {
  let s = Q(),
    {
      manifest: h,
      manifestAuthenticated: w,
      signatureVerified: b
    } = await it(Fe, e, {
      signaturePolicy: at(e, r),
      platform: s,
      startTime: Date.now(),
      purpose: "reverify"
    });
  if (!w)
    return (
      t(
        `Manifest for retained ${e} is unauthenticated; activating the retained copy without a checksum comparison`,
        { level: "warn" }
      ),
      { signatureVerified: !1, binaryMatches: !0, expectedChecksum: void 0 }
    );
  let y = h.platforms[s]?.checksum,
    S = y !== void 0 && (await ke(n, y));
  if (!S) t(`Retained ${e} does not match its signed manifest checksum; re-downloading`);
  return { signatureVerified: b, binaryMatches: S, expectedChecksum: y };
}
function st(e) {
  if (!Yd(e) || e.response) return !1;
  let n = Ym(e)?.code;
  return n !== void 0 && (aB.has(n) || n === "ETIMEDOUT");
}
async function be(e) {
  let n = Ie("sha256");
  return (await Me(Bt(e), n), n.digest("hex"));
}
async function ke(e, n) {
  try {
    return (await be(e)) === n;
  } catch (r) {
    return (t(`Could not hash ${e} (${E(r) ?? N(r).name}); treating as mismatched`), !1);
  }
}
async function lt(e, n, { explicitVersionRequested: r, requireEnforcingRelease: s }) {
  let { signatureVerified: h, expectedChecksum: w } = await tn(e, n, Fe, {
    signaturePolicy: at(e, { explicitVersionRequested: r, requireEnforcingRelease: s })
  });
  return { downloadType: "binary", signatureVerified: h, expectedChecksum: w };
}
function _e(e) {
  if (Yd(e) && e.response) return e.response.status;
  return;
}
function Ee(e) {
  if (e instanceof unn) return !0;
  if (Na(e)) return !0;
  if (Yd(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return !0;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return !0;
  let n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("timeout") || n.includes("timed out");
}
function nn(e) {
  return E(e)?.startsWith("ZSTD_error_") === !0;
}
function rn(e) {
  let n = e instanceof Error ? e.message : String(e);
  return n.includes("Checksum mismatch") || n.includes("exceeds the manifest size");
}
function an(e) {
  return e !== null && typeof e === "object" && "deterministic" in e && e.deterministic === !0;
}
function on(e) {
  return e !== null && typeof e === "object" && "connectionDrop" in e && e.connectionDrop === !0;
}
function sn(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number")
    return e.attempt;
  return;
}
function ln() {
  try {
    return Q();
  } catch {
    return "unknown";
  }
}
async function Pe(e, n) {
  let r = !1;
  for (let s = 1; ; s++)
    try {
      return { data: (await Oe(e, n)).data, dropRetried: r };
    } catch (h) {
      if (s >= se || !tt(h)) throw h;
      ((r = !0),
        t(`Fetch of ${e} connection dropped on attempt ${s}/${se}, retrying...`),
        await X(Je));
    }
}
import { lstat as cn, readdir as un } from "fs/promises";
import { basename as dn, join as fn } from "path";
function pe() {
  return !is(void 0);
}
var mn = 7200000;
function Le(e) {
  if (e <= 1) return !1;
  try {
    return (process.kill(e, 0), !0);
  } catch {
    return !1;
  }
}
function pn(e, n) {
  if (!Le(e)) return !1;
  if (e === process.pid) return !0;
  try {
    let r = F6o(e);
    if (!r) return !0;
    let s = r.toLowerCase(),
      h = n.toLowerCase();
    return s.includes("claude") || s.includes(h);
  } catch {
    return !0;
  }
}
function fe(e) {
  let n = ie();
  try {
    let r = n.readFileSync(e, { encoding: "utf8" });
    if (!r || r.trim() === "") return null;
    let s = te(r);
    if (typeof s.pid !== "number" || !s.version || !s.execPath) return null;
    return s;
  } catch {
    return null;
  }
}
function he(e) {
  let n = fe(e);
  if (!n) return !1;
  let { pid: r, execPath: s } = n;
  if (!Le(r)) return !1;
  if (!pn(r, s))
    return (t(`Lock PID ${r} is running but does not appear to be Claude - treating as stale`), !1);
  let h = ie();
  try {
    let w = h.statSync(e);
    if (Date.now() - w.mtimeMs > mn) {
      if (!Le(r)) return !1;
    }
  } catch {}
  return !0;
}
function gn(e, n) {
  X0(e, _(n, null, 2));
}
async function ut(e, n) {
  let r = ie(),
    s = dn(e);
  if (he(n)) {
    let w = fe(n);
    return (t(`Cannot acquire lock for ${s} - held by PID ${w?.pid}`), null);
  }
  let h = { pid: process.pid, version: s, execPath: process.execPath, acquiredAt: Date.now() };
  try {
    if ((gn(n, h), fe(n)?.pid !== process.pid)) return null;
    return (
      t(`Acquired PID lock for ${s} (PID ${process.pid})`),
      () => {
        try {
          if (fe(n)?.pid === process.pid) (r.unlinkSync(n), t(`Released PID lock for ${s}`));
        } catch (b) {
          t(`Failed to release lock for ${s}: ${b}`);
        }
      }
    );
  } catch (w) {
    return (t(`Failed to acquire lock for ${s}: ${w}`), null);
  }
}
async function dt(e, n) {
  let r = await ut(e, n);
  if (!r) return !1;
  let s = () => {
    try {
      r();
    } catch {}
  };
  return (process.on("exit", s), process.on("SIGINT", s), process.on("SIGTERM", s), !0);
}
async function ft(e, n, r) {
  let s = await ut(e, n);
  if (!s) return !1;
  try {
    return (await r(), !0);
  } finally {
    s();
  }
}
async function mt(e) {
  let n = ie(),
    r = 0,
    s;
  try {
    s = (await un(e)).filter((h) => h.endsWith(".lock"));
  } catch (h) {
    if (G(h)) return 0;
    return (t(`Failed to readdir locks directory: ${N(h).message}`, { level: "error" }), 0);
  }
  for (let h of s) {
    let w = fn(e, h);
    try {
      if ((await cn(w)).isDirectory())
        (n.rmSync(w, { recursive: !0, force: !0 }),
          r++,
          t(`Cleaned up legacy directory lock: ${h}`));
      else if (!he(w)) (n.unlinkSync(w), r++, t(`Cleaned up stale lock: ${h}`));
    } catch {}
    await new Promise((b) => setImmediate(b));
  }
  return r;
}
var Ve = 2,
  Be = 604800000;
function bjn(e) {
  return e.startsWith("win32") ? "claude.exe" : "claude";
}
function J() {
  let e = Q(),
    n = bjn(e);
  return {
    versions: lhn(),
    staging: H(qQs(), "claude", "staging"),
    locks: H(VQs(), "claude", "locks"),
    executable: H(s9(), n)
  };
}
async function Tt(e) {
  return Y(e).then(
    (n) => n.isFile() && n.size > 0,
    () => !1
  );
}
async function kn(e, n) {
  for (let r of e) if (await Tt(n(r))) return r;
  return;
}
function $n(e) {
  return `${e}.old.${Date.now()}.${process.pid}`;
}
var Rn = 2592000000;
function Sn(e, n) {
  if (!e.toLowerCase().startsWith(`${n.toLowerCase()}.`)) return;
  let r = /^(?:old\.(\d+)(?:\.(\d+))?|new\.\d+\.(\d+)\.[0-9a-f]+)$/i.exec(e.slice(n.length + 1));
  return r === null
    ? void 0
    : r[1] !== void 0
      ? {
          kind: "backup",
          stampedMs: Number(r[1]),
          ownerPid: r[2] === void 0 ? void 0 : Number(r[2])
        }
      : { kind: "staged", stampedMs: Number(r[3]) };
}
async function ae(e) {
  try {
    let n = await Y(e);
    if (!n.isFile() || n.size === 0) return !1;
    return (n.mode & _n.S_IXUSR) !== 0;
  } catch {
    return !1;
  }
}
async function ze(e) {
  let n = J(),
    r = [n.versions, n.staging, n.locks];
  await Promise.all(r.map((w) => ce(w, { recursive: !0 })));
  let s = re(n.executable);
  if (
    (await ce(s, { recursive: !0 }), !/^[a-zA-Z0-9._+-]+$/.test(e) || e.includes("..") || e === ".")
  )
    throw Error(`Invalid version string "${e}": contains path-unsafe characters`);
  let h = H(n.versions, e);
  try {
    await En(h, "", { encoding: "utf8", flag: "wx" });
  } catch (w) {
    if (E(w) !== "EEXIST") throw w;
    try {
      if ((await Y(h)).size === 0) {
        let b = new Date();
        await vn(h, b, b);
      }
    } catch {}
  }
  return { stagingPath: H(n.staging, e), installPath: h };
}
async function Ct(e, n, r = 0) {
  let s = J(),
    h = ye(s, e);
  if ((await ce(s.locks, { recursive: !0 }), pe())) {
    let b = 0,
      y = r + 1,
      S = r > 0 ? 1000 : 100,
      T = r > 0 ? 5000 : 500;
    while (b < y) {
      if (
        await ft(e, h, async () => {
          try {
            await n();
          } catch (P) {
            throw (t(`Native installer version-lock callback failed: ${P}`, { level: "error" }), P);
          }
        })
      )
        return (
          a("tengu_version_lock_acquired", {
            is_pid_based: !0,
            is_lifetime_lock: !1,
            attempts: b + 1
          }),
          !0
        );
      if ((b++, b < y)) {
        let P = Math.min(S * Math.pow(2, b - 1), T);
        await X(P);
      }
    }
    return (
      a("tengu_version_lock_failed", { is_pid_based: !0, is_lifetime_lock: !1, attempts: y }),
      Se(e, Error("Lock held by another process")),
      !1
    );
  }
  let w = null;
  try {
    try {
      w = await vl(e, {
        stale: Be,
        retries: { retries: r, minTimeout: r > 0 ? 1000 : 100, maxTimeout: r > 0 ? 5000 : 500 },
        lockfilePath: h,
        onCompromised: (b) => {
          t(`NON-FATAL: Version lock was compromised during operation: ${b.message}`, {
            level: "info"
          });
        }
      });
    } catch (b) {
      return (
        a("tengu_version_lock_failed", { is_pid_based: !1, is_lifetime_lock: !1 }),
        Se(e, b),
        !1
      );
    }
    try {
      return (
        await n(),
        a("tengu_version_lock_acquired", { is_pid_based: !1, is_lifetime_lock: !1 }),
        !0
      );
    } catch (b) {
      throw (
        t(`tryWithVersionLock: callback failed under version lock: ${d(b)}`, { level: "error" }),
        b
      );
    }
  } finally {
    if (w) await w();
  }
}
var _t = [100, 500, 2000];
class fnn extends R {
  constructor() {
    super(
      "Staged binary no longer matches the verified checksum; refusing to install",
      "Staged binary checksum mismatch at install"
    );
  }
}
async function xt(e, n, r) {
  await ce(re(n), { recursive: !0 });
  let s;
  for (let h = 1; h <= _t.length + 1; h++) {
    let w = `${n}.tmp.${process.pid}.${Date.now()}.${h}`;
    try {
      if ((await Et(e, w), await wn(w, 493), r !== void 0 && (await be(w)) !== r)) throw new fnn();
      return (
        await ge(w, n),
        t(`Atomically installed binary to ${n}` + (h > 1 ? ` (attempt ${h})` : "")),
        { attempts: h }
      );
    } catch (b) {
      s = b;
      try {
        await ne(w);
      } catch {}
      let y = E(b),
        S = y === "EBUSY" || (y === "EPERM" && !1),
        T = _t[h - 1];
      if (!S || T === void 0) throw b;
      (t(`atomicMoveToInstallPath attempt ${h} failed with ${y}; retrying in ${T}ms`), await X(T));
    }
  }
  throw s;
}
async function Tn(e, n, r) {
  try {
    let s = H(e, "node_modules", "@anthropic-ai"),
      w = (await $e(s)).find((S) => S.startsWith("claude-cli-native-"));
    if (!w)
      throw (
        a("tengu_native_install_package_failure", {
          stage_find_package: !0,
          error_package_not_found: !0
        }),
        Error("Could not find platform-specific native package")
      );
    let b = H(s, w, "cli");
    try {
      await Y(b);
    } catch {
      throw (
        a("tengu_native_install_package_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0
        }),
        Error("Native binary not found in staged package")
      );
    }
    let { attempts: y } = await xt(b, n, r);
    return (
      await we(e, { recursive: !0, force: !0 }),
      a("tengu_native_install_package_success", { install_attempts: y }),
      { moveRetried: y > 1 }
    );
  } catch (s) {
    let h = d(s);
    if (!(h.includes("Could not find platform-specific") || h.includes("Native binary not found")))
      if (
        (a("tengu_native_install_package_failure", {
          stage_atomic_move: !0,
          error_move_failed: !0
        }),
        m("update_apply", "update_apply_native_move_failed"),
        Fs(s))
      )
        t(`installVersionFromPackage: atomic move failed: ${h}`, { level: "error" });
      else l(N(s));
    else
      (m("update_apply", "update_apply_native_staging_missing"),
        t(`installVersionFromPackage: ${h}`, { level: "error" }));
    throw s;
  }
}
async function Cn(e, n, r) {
  try {
    let s = Q(),
      h = bjn(s),
      w = H(e, h);
    try {
      await Y(w);
    } catch (y) {
      throw (
        a("tengu_native_install_binary_failure", {
          stage_binary_exists: !0,
          error_binary_not_found: !0,
          error_code: yh(y)
        }),
        Error("Staged binary not found")
      );
    }
    let { attempts: b } = await xt(w, n, r);
    return (
      await we(e, { recursive: !0, force: !0 }),
      a("tengu_native_install_binary_success", { install_attempts: b }),
      { moveRetried: b > 1 }
    );
  } catch (s) {
    if (s instanceof fnn)
      (a("tengu_native_install_binary_failure", {
        stage_atomic_move: !0,
        error_checksum_mismatch: !0
      }),
        m("update_apply", "update_apply_staged_checksum_mismatch"));
    else if (!d(s).includes("Staged binary not found"))
      (a("tengu_native_install_binary_failure", {
        stage_atomic_move: !0,
        error_move_failed: !0,
        error_code: yh(s)
      }),
        m("update_apply", "update_apply_native_move_failed"));
    else m("update_apply", "update_apply_native_staging_missing");
    if (Fs(s)) t(`installVersionFromBinary: atomic move failed: ${d(s)}`, { level: "error" });
    else l(N(s));
    throw s;
  }
}
async function xn(e, n, r, s) {
  if (r === "npm") return Tn(e, n, s);
  return Cn(e, n, s);
}
var An = new W(() => new Map());
async function ht(
  e,
  { forceReinstall: n, explicitVersionRequested: r, requireEnforcingRelease: s }
) {
  let { stagingPath: h, installPath: w } = await ze(e),
    { executable: b } = J(),
    y = Ne("true"),
    S = y ? `${h}.${process.pid}.${Date.now()}.${Rt(4).toString("hex")}` : h,
    T = An.of(U().host),
    F = T.get(e),
    P = !(F && (F.enforcingRelease || !s)),
    D = {
      wasNewInstall: !1,
      moveRetried: !1,
      activationFailed: !1,
      activationRefused: !1,
      skippedUnverifiedRelease: !0
    },
    L = P ? void 0 : F?.checksum,
    O = n || !(await At(e));
  if (!O && P)
    try {
      let C = await ot(e, w, { explicitVersionRequested: r, requireEnforcingRelease: s });
      if (((L = C.expectedChecksum), !C.binaryMatches)) O = !0;
      else if (C.signatureVerified) T.set(e, { enforcingRelease: s, checksum: L });
    } catch (C) {
      if (C instanceof vL) {
        if (s && C.reason === "release_predates_enforcement") return D;
        throw C;
      }
      if (!r || s || !st(C)) throw C;
      t(`Could not re-verify retained ${e} (${N(C).name}); offline, activating as requested`, {
        level: "warn"
      });
    }
  else if (!O && F?.checksum !== void 0) {
    if (!(await ke(w, F.checksum)))
      (t(
        `Retained ${e} no longer matches the checksum verified earlier in this process; re-downloading`,
        { level: "warn" }
      ),
        T.delete(e),
        (O = !0));
  }
  let x = !1;
  if (O) {
    (t(
      n
        ? `Force reinstalling native installer version ${e}`
        : `Downloading native installer version ${e}`
    ),
      await Mt(re(S)));
    let C, M;
    try {
      (({
        downloadType: C,
        signatureVerified: M,
        expectedChecksum: L
      } = await lt(e, S, { explicitVersionRequested: r, requireEnforcingRelease: s })),
        ({ moveRetried: x } = await xn(S, w, C, L)));
    } catch (B) {
      if (s && B instanceof vL && B.reason === "release_predates_enforcement") return D;
      throw B;
    } finally {
      if (y)
        await we(S, { recursive: !0, force: !0 }).catch((B) =>
          t(
            `Could not remove the update staging directory (a later update removes it after one hour): ${d(B)}`,
            { level: "warn" }
          )
        );
    }
    if (M) T.set(e, { enforcingRelease: s, checksum: L });
  } else t(`Version ${e} already installed, updating symlink`);
  await Dn(b);
  let I = await Nn(b, w, { expectedChecksum: L });
  if (I !== "updated" && !(await ae(b))) {
    let C = !1;
    try {
      (await Y(w), (C = !0));
    } catch {}
    throw (
      m("update_apply", "update_apply_native_symlink_failed"),
      Error(
        `Failed to create executable at ${b}. Source file exists: ${C}. Either ${b} is not writable, or the existing file there was not created by the native installer and is not a working launcher \u2014 the updater will not overwrite a launcher it does not own. Remove it and re-run the update.`
      )
    );
  }
  return {
    wasNewInstall: O,
    moveRetried: x,
    activationFailed: I === "failed",
    activationRefused: I === "refused",
    skippedUnverifiedRelease: !1
  };
}
async function At(e) {
  let { installPath: n } = await ze(e);
  return ae(n);
}
async function In() {
  if (await Mn()) return !0;
  let { executable: e } = J();
  return (await ae(e)) && !(await hQe(e).catch(() => !1));
}
async function Mn() {
  let { versions: e, executable: n } = J(),
    r = !1,
    s = [{ versions: e, executable: n }],
    [h, w] = await Promise.all([pt(e).catch(() => e), pt(re(n)).catch(() => re(n))]),
    b = H(w, Ue(n));
  if (h !== e || b !== n) s.push({ versions: h, executable: b });
  return s.some((y) => Pn(process.execPath, { ...y, isWindows: !1 }));
}
function Pn(e, { versions: n, executable: r, isWindows: s }) {
  let h = (y) => (s ? y.replaceAll("\\", "/").toLowerCase() : y),
    w = h(e),
    b = h(n).replace(/\/+$/, "") + "/";
  return w.startsWith(b) || w === h(r);
}
function Fn() {
  try {
    let e = k("tengu_canary", {});
    return (typeof e.external === "string" && St.valid(e.external)) || null;
  } catch (e) {
    return (t(`getCanaryVersion: GB read failed, falling through: ${d(e)}`), null);
  }
}
async function On(e, n = !1) {
  let r = Date.now(),
    { executable: s } = J(),
    h = !/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e),
    { maxVersion: w, forceDowngradeEnabled: b } = await U1e(),
    y =
      b &&
      !n &&
      h &&
      !!w &&
      K9e(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
            new __filePath_88136f3c97a38402_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        w,
        "native_update"
      ),
    S = y ? w : await _jn(e),
    T = S.length;
  if (!yVr(S))
    throw new R(
      `Invalid version string from ${h ? "version pointer" : "argument"}: not a well-formed version (${T} characters)`,
      "Invalid version string: not a well-formed version"
    );
  t(`Checking for native installer update to version ${S}`);
  let F = h && (await In());
  if (e === "latest" && !y) {
    let C = Fn(),
      M = C && w && F_(C, w);
    if (C && F_(C, S) && !M) (t(`Native installer: canary ${C} active, overriding ${S}`), (S = C));
    else if (M) t(`Native installer: canary ${C} exceeds maxVersion ${w}, not applying`);
  }
  if (!y && !n && w && F_(S, w)) {
    if (
      (t(`Native installer: maxVersion ${w} is set, capping update from ${S} to ${w}`),
      yv(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
            new __filePath_88136f3c97a38402_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION,
        w
      ))
    )
      return (
        t(
          `Native installer: current version ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_88136f3c97a38402(new __filePath_88136f3c97a38402_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION} is already at or above maxVersion ${w}, skipping update`
        ),
        a("tengu_native_update_skipped_max_version", {
          latency_ms: Date.now() - r,
          max_version: pa(w),
          available_version: pa(S)
        }),
        { success: !0, wasSkipped: !0, latestVersion: S }
      );
    S = w;
  }
  if (
    !n &&
    S ===
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
          new __filePath_88136f3c97a38402_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION &&
    (await At(S)) &&
    (await ae(s))
  )
    return (
      t(`Found ${S} at ${s}, skipping install`),
      a("tengu_native_update_complete", {
        latency_ms: Date.now() - r,
        was_new_install: !1,
        was_force_reinstall: !1,
        was_already_running: !0
      }),
      { success: !0, wasSkipped: !0, latestVersion: S }
    );
  if (!n && V9e(S))
    return (
      a("tengu_native_update_skipped_minimum_version", {
        latency_ms: Date.now() - r,
        target_version: pa(S)
      }),
      { success: !0, wasSkipped: !0, latestVersion: S }
    );
  if (y)
    a("tengu_native_update_forced_downgrade", {
      from_version: pa(
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.310",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-10-23T17:43:32Z",
          GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
          HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
            new __filePath_88136f3c97a38402_URL(
              "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
              import.meta.url
            )
          ),
          DD_SOURCEMAP_GROUP: "default"
        }.VERSION
      ),
      to_version: pa(S)
    });
  let P = !1,
    D = !1,
    L = !1,
    O = !1,
    x = !1,
    I;
  if (Ne("true"))
    (({
      wasNewInstall: P,
      moveRetried: D,
      activationFailed: L,
      activationRefused: O,
      skippedUnverifiedRelease: x
    } = await ht(S, {
      forceReinstall: n,
      explicitVersionRequested: !h,
      requireEnforcingRelease: F
    })),
      (I = Date.now() - r));
  else {
    let { installPath: C } = await ze(S);
    if (n) await Un(C);
    let M = await Ct(
      C,
      async () => {
        ({
          wasNewInstall: P,
          moveRetried: D,
          activationFailed: L,
          activationRefused: O,
          skippedUnverifiedRelease: x
        } = await ht(S, {
          forceReinstall: n,
          explicitVersionRequested: !h,
          requireEnforcingRelease: F
        }));
      },
      3
    );
    if (((I = Date.now() - r), !M)) {
      let B = J(),
        V;
      if (pe()) {
        let q = ye(B, C);
        if (he(q)) V = fe(q)?.pid;
      }
      return (
        f("update_apply", "update_apply_native_lock_failed"),
        a("tengu_native_update_lock_failed", { latency_ms: I, lock_holder_pid: V }),
        { success: !1, latestVersion: S, lockFailed: !0, lockHolderPid: V }
      );
    }
  }
  if (x)
    return (
      a("tengu_native_update_skipped_unverified_release", { latency_ms: I, target_version: pa(S) }),
      t(
        `Native installer: resolved ${S} predates manifest signature enforcement; staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __filePath_88136f3c97a38402(new __filePath_88136f3c97a38402_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}`,
        { level: "warn" }
      ),
      { success: !0, wasSkipped: !0, skippedUnverifiedRelease: !0, latestVersion: S }
    );
  if (L) f("update_apply", "update_apply_native_activation_failed_old_binary_kept");
  else if (O) f("update_apply", "update_apply_native_activation_refused_external_launcher");
  else if (D) f("update_apply", "update_apply_native_move_retry");
  else g("update_apply");
  return (
    a("tengu_native_update_complete", {
      latency_ms: I,
      was_new_install: P,
      was_force_reinstall: n
    }),
    t(`Successfully updated to version ${S}`),
    { success: !0, latestVersion: S }
  );
}
async function Dn(e) {
  try {
    (await yn(e), t(`Removed empty directory at ${e}`));
  } catch (n) {
    let r = E(n);
    if (r !== "ENOTDIR" && r !== "ENOENT" && r !== "ENOTEMPTY")
      t(`Could not remove directory at ${e}: ${n}`);
  }
}
async function Nn(e, n, { expectedChecksum: r } = {}) {
  if (Q().startsWith("win32"))
    try {
      let y = re(e);
      await ce(y, { recursive: !0 });
      let S;
      try {
        S = await Y(e);
      } catch {}
      if (S)
        try {
          let P = await Y(n);
          if (S.size === P.size && (r === void 0 || (await ke(e, r)))) return "noop";
        } catch {}
      let T = `${e}.new.${process.pid}.${Date.now()}.${Rt(4).toString("hex")}`;
      try {
        await Et(n, T);
      } catch (P) {
        if (G(P)) throw Error(`Source file does not exist: ${n}`);
        throw P;
      }
      let F;
      try {
        F = r === void 0 || (await be(T)) === r;
      } catch (P) {
        throw (await ne(T).catch(() => {}), P);
      }
      if (!F)
        return (
          await ne(T).catch(() => {}),
          t(`Refusing to install a launcher copy of ${n} that does not match its signed checksum`, {
            level: "error"
          }),
          "failed"
        );
      try {
        let P = S !== void 0;
        if (!P)
          try {
            await ge(T, e);
          } catch (D) {
            let L = E(D);
            if (L !== "EEXIST" && L !== "EPERM" && L !== "EBUSY") throw D;
            P = !0;
          }
        if (P) {
          let D = $n(e);
          await ge(e, D);
          try {
            await ge(T, e);
          } catch (L) {
            try {
              await ge(D, e);
            } catch (O) {
              let x = Error(`Failed to restore old executable: ${O}`, { cause: L });
              throw (l(x), x);
            }
            throw L;
          }
        }
      } catch (P) {
        throw (await ne(T).catch(() => {}), P);
      }
      return "updated";
    } catch (y) {
      return (t(`Failed to copy executable from ${n} to ${e}: ${y}`, { level: "error" }), "failed");
    }
  let w = re(e);
  try {
    (await ce(w, { recursive: !0 }), t(`Created directory ${w} for symlink`));
  } catch (y) {
    return (t(`Failed to create directory ${w}: ${y}`, { level: "error" }), "failed");
  }
  try {
    return (await gt(n, e), t(`Created symlink ${e} -> ${n}`), "updated");
  } catch (y) {
    if (E(y) !== "EEXIST")
      return (t(`Failed to create symlink from ${e} to ${n}: ${y}`, { level: "error" }), "failed");
  }
  if (!(await ZFt(e)) && !(await hQe(e).catch(() => !1)))
    return (
      t(
        `Not replacing ${e}: it was not created by the native installer (not a symlink into a claude/versions/ directory) and is not an npm shim, so this update will not overwrite it. New versions still install under the versions/ directory; remove ${e} and re-run the update to let the installer manage the launcher again.`,
        { level: "warn" }
      ),
      "refused"
    );
  let b = `${e}.tmp.${process.pid}.${Date.now()}`;
  try {
    return (
      await gt(n, b),
      await ge(b, e),
      t(`Atomically updated symlink ${e} -> ${n}`),
      "updated"
    );
  } catch (y) {
    try {
      await ne(b);
    } catch {}
    return (t(`Failed to create symlink from ${e} to ${n}: ${y}`, { level: "error" }), "failed");
  }
}
async function j9e(e = !1) {
  if (Ne(process.env.DISABLE_INSTALLATION_CHECKS)) return [];
  let n = await $1e();
  if (n === "development") return [];
  let r = ue();
  if (!(e || n === "native" || r.installMethod === "native")) return [];
  let h = J(),
    w = [],
    b = [],
    y = re(h.executable),
    S = le(y),
    F = Q().startsWith("win32");
  try {
    await hn(y);
  } catch {
    (w.push({
      message: `claude command at ${h.executable} missing or broken (${y} does not exist)`,
      userActionRequired: !0,
      type: "error"
    }),
      b.push("bin_dir_missing"));
  }
  if (F) {
    if (!(await ae(h.executable)))
      (w.push({
        message: `claude command at ${h.executable} missing or broken`,
        userActionRequired: !0,
        type: "error"
      }),
        b.push("executable_missing"));
  } else
    try {
      let D = await kt(h.executable),
        L = le(re(h.executable), D);
      if (!(await ae(L)))
        (w.push({
          message: `claude command at ${h.executable} missing or broken (symlink points to ${D})`,
          userActionRequired: !0,
          type: "error"
        }),
          b.push("executable_invalid"));
    } catch (D) {
      if (G(D))
        (w.push({
          message: `claude command at ${h.executable} missing or broken`,
          userActionRequired: !0,
          type: "error"
        }),
          b.push("executable_missing"));
      else if (!(await ae(h.executable)))
        (w.push({
          message: `claude command at ${h.executable} missing or broken (not a valid Claude binary)`,
          userActionRequired: !0,
          type: "error"
        }),
          b.push("executable_invalid"));
    }
  if (
    !(i.PATH || "").split(bn).some((D) => {
      try {
        let L = le(D);
        if (F) return L.toLowerCase() === S.toLowerCase();
        return L === S;
      } catch {
        return !1;
      }
    })
  )
    if ((b.push("not_in_path"), F)) {
      let D = y.replaceAll("/", "\\");
      w.push({
        message: `Native installation exists but ${D} is not in your PATH. Add it by opening: System Properties \u2192 Environment Variables \u2192 Edit User PATH \u2192 New \u2192 Add the path above. Then restart your terminal.`,
        userActionRequired: !0,
        type: "path"
      });
    } else {
      let D = ipt(),
        O = z9e()[D],
        x = O ? O.replace($t(), "~") : "your shell config file";
      w.push({
        message: `Native installation exists but ~/.local/bin is not in your PATH. Run:

echo 'export PATH="$HOME/.local/bin:$PATH"' >> ${x} && source ${x}`,
        userActionRequired: !0,
        type: "path"
      });
    }
  if (b.length === 0) g("native_check_install");
  else f("native_check_install", b[0]);
  return w;
}
class It {
  inFlight = null;
  begin(e) {
    this.inFlight = e;
  }
  reset() {
    this.inFlight = null;
  }
}
var Ln = new W(() => new It());
function W9e(e, n = !1, r) {
  if (n) return wt(e, n, r);
  let s = Ln.of(U().host);
  if (s.inFlight) return (t("installLatest: joining in-flight call"), s.inFlight);
  let h = wt(e, n, r);
  s.begin(h);
  let w = () => {
    s.reset();
  };
  return (h.then(w, w), h);
}
async function wt(e, n = !1, r) {
  let s = await On(e, n);
  if (!s.success)
    return {
      latestVersion: null,
      wasUpdated: !1,
      lockFailed: s.lockFailed,
      lockHolderPid: s.lockHolderPid
    };
  if (s.skippedUnverifiedRelease)
    return {
      latestVersion: s.latestVersion,
      wasUpdated: !1,
      wasSkipped: !0,
      skippedUnverifiedRelease: !0,
      lockFailed: !1
    };
  if (ue().installMethod !== "native")
    (await Re(
      (w) => ({
        ...w,
        installMethod: "native",
        autoUpdates: !1,
        autoUpdatesProtectedForNative: !0
      }),
      r
    ),
      t(
        'Native installer: Set installMethod to "native" and disabled legacy auto-updater for protection'
      ));
  return (
    ECr(),
    {
      latestVersion: s.latestVersion,
      wasUpdated: s.success && !s.wasSkipped,
      wasSkipped: s.wasSkipped,
      lockFailed: !1
    }
  );
}
async function Vn(e) {
  try {
    let n = await kt(e),
      r = le(re(e), n);
    if (await ae(r)) return r;
  } catch {}
  return null;
}
function ye(e, n) {
  let r = Ue(n);
  return H(e.locks, `${r}.lock`);
}
async function MEe() {
  let e = J();
  if (!process.execPath.includes(e.versions)) return;
  let n = le(process.execPath);
  try {
    let r = ye(e, n);
    if ((await ce(e.locks, { recursive: !0 }), pe())) {
      if (!(await dt(n, r))) {
        (a("tengu_version_lock_failed", { is_pid_based: !0, is_lifetime_lock: !0 }),
          Se(n, Error("Lock already held by another process")));
        return;
      }
      (a("tengu_version_lock_acquired", { is_pid_based: !0, is_lifetime_lock: !0 }),
        t(`Acquired PID lock on running version: ${n}`));
    } else {
      let s;
      try {
        ((s = await vl(n, {
          stale: Be,
          retries: 0,
          lockfilePath: r,
          onCompromised: (h) => {
            t(`NON-FATAL: Lock on running version was compromised: ${h.message}`, {
              level: "info"
            });
          }
        })),
          a("tengu_version_lock_acquired", { is_pid_based: !1, is_lifetime_lock: !0 }),
          t(`Acquired mtime-based lock on running version: ${n}`),
          bt(async () => {
            try {
              await s?.();
            } catch {}
          }));
      } catch (h) {
        if (G(h)) {
          t(`Cannot lock current version - file does not exist: ${n}`, { level: "info" });
          return;
        }
        (a("tengu_version_lock_failed", { is_pid_based: !1, is_lifetime_lock: !0 }), Se(n, h));
        return;
      }
    }
  } catch (r) {
    if (G(r)) {
      t(`Cannot lock current version - file does not exist: ${n}`, { level: "info" });
      return;
    }
    t(`NON-FATAL: Failed to lock current version during execution ${d(r)}`, { level: "info" });
  }
}
function Se(e, n) {
  t(`NON-FATAL: Lock acquisition failed for ${e} (expected in multi-process scenarios): ${d(n)}`, {
    level: "error"
  });
}
async function Un(e) {
  let n = J(),
    r = ye(n, e);
  try {
    (await ne(r), t(`Force-removed lock file at ${r}`));
  } catch (s) {
    t(`Failed to force-remove lock file: ${d(s)}`);
  }
}
var Bn = 3600000;
async function Mt(e) {
  let n = Date.now() - Bn;
  try {
    let r = await $e(e),
      s = 0;
    for (let h of r) {
      let w = H(e, h);
      try {
        if ((await Y(w)).mtime.getTime() < n)
          (await we(w, { recursive: !0, force: !0 }),
            s++,
            t(`Cleaned up old staging directory: ${h}`));
      } catch {}
    }
    if (s > 0)
      (t(`Cleaned up ${s} orphaned staging directories`),
        a("tengu_native_staging_cleanup", { cleaned_count: s }));
  } catch (r) {
    if (!G(r)) t(`Failed to clean up staging directories: ${r}`);
  }
}
async function ECr() {
  await Promise.resolve();
  let e = J(),
    n = Date.now() - 3600000,
    r = Date.now() - 1209600000,
    s = Date.now() - Rn;
  if (Q().startsWith("win32")) {
    let y = re(e.executable),
      S = Ue(e.executable);
    try {
      let T = await $e(y),
        F = T.flatMap((I) => {
          let C = Sn(I, S);
          return C === void 0 ? [] : [{ file: I, ...C }];
        }),
        P = F.filter((I) => I.kind === "backup").sort((I, C) => C.stampedMs - I.stampedMs),
        D = T.find((I) => I.toLowerCase() === S.toLowerCase()),
        L = P.length > 0 && !(D !== void 0 && (await Tt(H(y, D)))),
        O = L ? await kn(P, (I) => H(y, I.file)) : void 0,
        x = 0;
      for (let I of F) {
        if (I.kind === "backup" && L && ((I === O && I.stampedMs >= s) || I.stampedMs >= r))
          continue;
        try {
          let C = H(y, I.file);
          if (I.stampedMs >= n || (await Y(C)).mtime.getTime() >= n) continue;
          (await ne(C), x++);
        } catch {}
      }
      if (x > 0) t(`Cleaned up ${x} old Windows executables on startup`);
    } catch (T) {
      if (!G(T)) t(`Failed to clean up old Windows executables: ${T}`);
    }
  }
  if ((await Mt(e.staging), pe())) {
    let y = await mt(e.locks);
    if (y > 0)
      (t(`Cleaned up ${y} stale version locks`),
        a("tengu_native_stale_locks_cleanup", { cleaned_count: y }));
  }
  let h;
  try {
    h = await $e(e.versions);
  } catch (y) {
    if (!G(y))
      (t(`Failed to readdir versions directory: ${y}`),
        f("native_cleanup_versions", "readdir_failed"));
    else g("native_cleanup_versions");
    return;
  }
  let w = [],
    b = 0;
  for (let y of h) {
    let S = H(e.versions, y);
    if (/\.tmp\.\d+\.\d+(\.\d+)?$/.test(y)) {
      try {
        if ((await Y(S)).mtime.getTime() < n)
          (await ne(S), b++, t(`Cleaned up orphaned temp install file: ${y}`));
      } catch {}
      continue;
    }
    try {
      let T = await Y(S);
      if (!T.isFile()) continue;
      if (T.size > 0 && (T.mode & 73) === 0) continue;
      w.push({ name: y, path: S, resolvedPath: le(S), mtime: T.mtime, size: T.size });
    } catch {}
  }
  if (b > 0)
    (t(`Cleaned up ${b} orphaned temp install files`),
      a("tengu_native_temp_files_cleanup", { cleaned_count: b }));
  if (w.length === 0) {
    g("native_cleanup_versions");
    return;
  }
  if (!(await ZFt(e.executable)) && !(await hQe(e.executable).catch(() => !1))) {
    (t(
      `Skipping native version cleanup: the launcher at ${e.executable} is externally managed, so the version(s) it needs cannot be determined`
    ),
      f("native_cleanup_versions", "skipped_external_launcher"));
    return;
  }
  try {
    let y = process.execPath,
      S = new Set();
    if (y && y.includes(e.versions)) S.add(le(y));
    let T = await Vn(e.executable);
    if (T) S.add(T);
    else if (Q().startsWith("win32"))
      try {
        let x = await Y(e.executable);
        for (let I of w) if (I.size === x.size) S.add(I.resolvedPath);
      } catch {}
    for (let x of w) {
      if (S.has(x.resolvedPath)) continue;
      let I = ye(e, x.resolvedPath),
        C = !1;
      if (pe()) C = he(I);
      else
        try {
          C = await Gci(x.resolvedPath, { stale: Be, lockfilePath: I });
        } catch {
          C = !1;
        }
      if (C) (S.add(x.resolvedPath), t(`Protecting locked version from cleanup: ${x.name}`));
      await new Promise((M) => setImmediate(M));
    }
    let F = w
        .filter((x) => !S.has(x.resolvedPath))
        .sort((x, I) => I.mtime.getTime() - x.mtime.getTime()),
      P = [
        ...F.filter((x) => x.size > 0).slice(Ve),
        ...F.filter((x) => x.size === 0 && x.mtime.getTime() < n)
      ];
    if (P.length === 0) {
      (a("tengu_native_version_cleanup", {
        total_count: w.length,
        deleted_count: 0,
        protected_count: S.size,
        retained_count: Ve,
        lock_failed_count: 0,
        error_count: 0
      }),
        g("native_cleanup_versions"));
      return;
    }
    let D = 0,
      L = 0,
      O = 0;
    if (
      (await Promise.all(
        P.map(async (x) => {
          try {
            let I = !0,
              C = await Ct(x.path, async () => {
                if (x.size === 0) {
                  let M = await Y(x.path);
                  if (M.size > 0 || M.mtime.getTime() >= n) {
                    I = !1;
                    return;
                  }
                }
                await ne(x.path);
              });
            if (C && I) D++;
            else if (!C) (L++, t(`Skipping deletion of ${x.name} - locked by another process`));
          } catch (I) {
            (O++, t(`Failed to delete version ${x.name}: ${I}`, { level: "error" }));
          }
        })
      ),
      a("tengu_native_version_cleanup", {
        total_count: w.length,
        deleted_count: D,
        protected_count: S.size,
        retained_count: Ve,
        lock_failed_count: L,
        error_count: O
      }),
      O > 0)
    )
      f("native_cleanup_versions", "delete_errors");
    else if (L > 0) f("native_cleanup_versions", "lock_failed");
    else g("native_cleanup_versions");
  } catch (y) {
    if (!G(y))
      (l(Error(`Version cleanup failed: ${y}`)), f("native_cleanup_versions", "unexpected_error"));
    else g("native_cleanup_versions");
  }
}
async function YHt() {
  let e = J();
  try {
    if (
      await hQe(e.executable).catch((n) => {
        if (G(n)) return !1;
        throw n;
      })
    ) {
      (t(`Skipping removal of ${e.executable} - appears to be npm-managed`),
        g("native_remove_symlink"));
      return;
    }
    if (!(await ZFt(e.executable))) {
      (t(`Skipping removal of ${e.executable} - not created by the native installer`),
        g("native_remove_symlink"));
      return;
    }
    (await ne(e.executable),
      t(`Removed claude symlink at ${e.executable}`),
      g("native_remove_symlink"));
  } catch (n) {
    if (G(n)) {
      g("native_remove_symlink");
      return;
    }
    (t(`Failed to remove claude symlink: ${n}`, { level: "error" }),
      m("native_remove_symlink", "unlink_failed"));
  }
}
async function fvo() {
  let e = [],
    n = z9e(),
    r = !1;
  for (let [s, h] of Object.entries(n))
    try {
      let w = await Ejn(h);
      if (!w) continue;
      let { filtered: b, hadAlias: y } = CCr(w);
      if (y)
        (await RCr(h, b),
          e.push({
            message: `Removed claude alias from ${h}. Run: unalias claude`,
            userActionRequired: !0,
            type: "alias"
          }),
          t(`Cleaned up claude alias from ${s} config`));
    } catch (w) {
      ((r = !0),
        t(`Failed to clean up claude alias from ${h}: ${w}`, { level: "error" }),
        e.push({
          message: `Failed to clean up ${h}: ${w}`,
          userActionRequired: !1,
          type: "error"
        }));
    }
  if (r) f("native_cleanup_aliases", "config_write_failed");
  else g("native_cleanup_aliases");
  return e;
}
async function zn(e) {
  try {
    let n = await ct("npm", ["config", "get", "prefix"], { useToolMemoryCgroup: !1 });
    if (n.code !== 0 || !n.stdout) return { success: !1, error: "Failed to get npm global prefix" };
    let r = n.stdout.trim(),
      s = !1;
    async function h(w, b) {
      try {
        return (await ne(w), t(`Manually removed ${b}: ${w}`), !0);
      } catch {
        return !1;
      }
    }
    if (Q().startsWith("win32")) {
      let w = H(r, "claude.cmd"),
        b = H(r, "claude.ps1"),
        y = H(r, "claude");
      if (await h(w, "bin script")) s = !0;
      if (await h(b, "PowerShell script")) s = !0;
      if (await h(y, "bin executable")) s = !0;
    } else {
      let w = H(r, "bin", "claude");
      if (await h(w, "bin symlink")) s = !0;
    }
    if (s) {
      t(`Successfully removed ${e} manually`);
      let w = Q().startsWith("win32") ? H(r, "node_modules", e) : H(r, "lib", "node_modules", e);
      return {
        success: !0,
        warning: `${e} executables removed, but node_modules directory was left intact for safety. You may manually delete it later at: ${w}`
      };
    } else return { success: !1 };
  } catch (n) {
    return (
      t(`Manual removal failed: ${n}`, { level: "error" }),
      { success: !1, error: `Manual removal failed: ${n}` }
    );
  }
}
async function vt(e) {
  let { code: n, stderr: r } = await ct("npm", ["uninstall", "-g", e], {
    cwd: process.cwd(),
    useToolMemoryCgroup: !1
  });
  if (n === 0) return (t(`Removed global npm installation of ${e}`), { success: !0 });
  else if (r && !r.includes("npm ERR! code E404")) {
    if (r.includes("npm error code ENOTEMPTY")) {
      (t(`Failed to uninstall global npm package ${e}: ${r}`, { level: "error" }),
        t("Attempting manual removal due to ENOTEMPTY error"));
      let s = await zn(e);
      if (s.success) return { success: !0, warning: s.warning };
      else if (s.error)
        return {
          success: !1,
          error: `Failed to remove global npm installation of ${e}: ${r}. Manual removal also failed: ${s.error}`
        };
    }
    return (
      t(`Failed to uninstall global npm package ${e}: ${r}`, { level: "error" }),
      { success: !1, error: `Failed to remove global npm installation of ${e}: ${r}` }
    );
  }
  return { success: !1 };
}
async function pvo() {
  let e = [],
    n = [],
    r = 0,
    s = !1,
    h = !1,
    w = await vt("@anthropic-ai/claude-code");
  if (w.success) {
    if ((r++, w.warning)) n.push(w.warning);
  } else if (w.error) (e.push(w.error), (s = !0));
  if (
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
        new __filePath_88136f3c97a38402_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL &&
    {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.310",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-10-23T17:43:32Z",
      GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
      HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
        new __filePath_88136f3c97a38402_URL(
          "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
          import.meta.url
        )
      ),
      DD_SOURCEMAP_GROUP: "default"
    }.PACKAGE_URL !== "@anthropic-ai/claude-code"
  ) {
    let y = await vt(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __filePath_88136f3c97a38402(
          new __filePath_88136f3c97a38402_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.PACKAGE_URL
    );
    if (y.success) {
      if ((r++, y.warning)) n.push(y.warning);
    } else if (y.error) (e.push(y.error), (s = !0));
  }
  let b = H($t(), ".claude", "local");
  try {
    (await we(b, { recursive: !0 }), r++, t(`Removed local installation at ${b}`));
  } catch (y) {
    if (!G(y))
      (e.push(`Failed to remove ${b}: ${y}`),
        t(`Failed to remove local installation: ${y}`, { level: "error" }),
        (h = !0));
  }
  if (e.length === 0) g("native_cleanup_npm");
  else if (r > 0) f("native_cleanup_npm", "partial_errors");
  else if (s && !h) m("native_cleanup_npm", "npm_uninstall_failed");
  else if (h && !s) m("native_cleanup_npm", "local_install_remove_failed");
  else m("native_cleanup_npm", "npm_uninstall_failed");
  return { removed: r, errors: e, warnings: n };
}
export { vL, uvo, _jn, unn, bjn, fnn, j9e, W9e, MEe, ECr, YHt, fvo, pvo };

//# sourceMappingURL=chunk-bejrkm5n.js.map
