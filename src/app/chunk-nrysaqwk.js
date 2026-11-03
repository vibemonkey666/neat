// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { X } from "./chunk-4hww8411.js";
import { w6, FM, LYt, hXr, NYt, yXr, _Xr, NTn, NSe, $Se, bXr, Hdr, J } from "./chunk-wrtp8qz8.js";
import { d, E, G } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { O } from "./chunk-19xvg81r.js";
import { i } from "./chunk-cj37hmns.js";
import { s2, EM } from "./chunk-tcvjb2c0.js";
import { Ost, ofi, F8r } from "./chunk-13nwb0xt.js";
import { fEn } from "./chunk-rd4v4n77.js";
import { sd } from "./chunk-6jbh8yja.js";
import { mkdirSync as I, writeFileSync as b } from "fs";
import { unlink as R } from "fs/promises";
var C = "/home/claude/.claude/remote",
  LZ = `${C}/.oauth_token`,
  aAt = `${C}/.api_key`,
  Pse = `${C}/.session_ingress_token`,
  YQo = [LZ, aAt, Pse],
  _$e = fEn;
function D(e, n, r, { skipInReviewOrigin: o = !1 } = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (J()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if (sd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (o && s2()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  try {
    (I(C, { recursive: !0, mode: 448 }),
      b(e, n, { encoding: "utf8", mode: 384 }),
      t(`Persisted ${r} to ${e} for subprocess access`));
  } catch (s) {
    t(`Failed to persist ${r} to disk (non-fatal): ${d(s)}`, { level: "error" });
  }
}
async function fci() {
  if (!i.CLAUDE_CODE_REMOTE || J()) return;
  for (let e of YQo)
    try {
      (await R(e), t(`Removed the credential file at ${e}`));
    } catch (n) {
      if (!G(n))
        t(`Failed to remove the credential file at ${e} (non-fatal): ${E(n) ?? "unknown error"}`, {
          level: "error"
        });
    }
}
function v(e) {
  return i.platform !== "linux" && e.startsWith(`${C}/`);
}
function uEn(e, n) {
  return i4t(e, n).token;
}
function i4t(e, n) {
  if (sd()) return { token: null, miss: "enoent" };
  if (EM()) return { token: null, miss: "enoent" };
  if (J() || v(e)) return { token: null, miss: "enoent" };
  try {
    let r = Ost(e, { maxBytes: _$e, regularFileOnly: !0 }).trim();
    if (!r) return { token: null, miss: "empty" };
    return (t(`Read ${n} from well-known file ${e}`), { token: r });
  } catch (r) {
    if (G(r)) return { token: null, miss: "enoent" };
    return (
      t(`Failed to read ${n} from ${e}: ${d(r)}`, { level: "debug" }),
      { token: null, miss: E(r) === "EACCES" ? "eacces" : "other" }
    );
  }
}
async function F(e, n, r, o, { skipInReviewOrigin: s = !1 } = {}) {
  if (!i.CLAUDE_CODE_REMOTE) return;
  if (J()) {
    t(`Skipping ${r} disk persistence in a session with no disk`);
    return;
  }
  if (sd()) {
    t(`Skipping ${r} disk persistence in a tool server's daemon`);
    return;
  }
  if (s && s2()) {
    t(`Skipping ${r} disk persistence in review-origin session`);
    return;
  }
  let m = await o.writeHandoffCredential(e, n);
  if (m.state === "written") {
    t(`Persisted ${r} to ${e} for subprocess access`);
    return;
  }
  t(`Failed to persist ${r} to disk (non-fatal): ${m.code ?? "unknown error"}`, { level: "error" });
}
async function h(e, n, r) {
  if (sd() || EM() || J() || v(e)) return null;
  let o = await r.readHandoffCredential(e, { symlinkAtPath: "follow" });
  switch (o.state) {
    case "present": {
      let s = o.contents.trim();
      if (!s) return null;
      return (t(`Read ${n} from well-known file ${e}`), s);
    }
    case "absent":
      return null;
    case "read-failed":
      return (
        t(`Failed to read ${n} from ${e}: ${o.code ?? "unknown error"}`, { level: "debug" }),
        null
      );
  }
}
function $3r({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: m,
  setCached: a,
  skipInReviewOrigin: _ = !1
}) {
  let g = m();
  if (g !== void 0) return g;
  let A = process.env[e];
  if (!A) {
    let l = uEn(r, s);
    return ($Se(e, "file", l), a(l), l);
  }
  let p = parseInt(A, 10);
  if (Number.isNaN(p))
    return (
      t(`${e} must be a valid file descriptor number, got: ${A}`, { level: "error" }),
      a(null),
      null
    );
  if (F8r(p)) {
    let l = w(),
      c = l ? k4e(p, o) : uEn(r, s);
    if (l) (delete process.env[e], NSe(e));
    if (($Se(e, l ? "descriptor_direct" : "file_after_socket", c), a(c), c && l))
      D(n, c, s, { skipInReviewOrigin: _ });
    return c;
  }
  try {
    let l = `/proc/self/fd/${p}`,
      c = Ost(l, { maxBytes: _$e }).trim();
    if (!c) return (t(`File descriptor contained empty ${o}`, { level: "error" }), a(null), null);
    return (
      t(`Successfully read ${o} from file descriptor ${p}`),
      $Se(e, "descriptor_by_path", c),
      a(c),
      D(n, c, s, { skipInReviewOrigin: _ }),
      c
    );
  } catch (l) {
    t(`Failed to read ${o} from file descriptor ${p}: ${d(l)}`, { level: "error" });
    let c = uEn(r, s);
    if (c) return ($Se(e, "file_after_failed_read", c), a(c), c);
    let T = E(l);
    if ((T === "EACCES" || T === "EPERM") && w()) {
      let u = k4e(p, o);
      if ((delete process.env[e], NSe(e), u))
        return ($Se(e, "descriptor_direct", u), a(u), D(n, u, s, { skipInReviewOrigin: _ }), u);
    }
    return (a(null), null);
  }
}
function w() {
  return (!i.CLAUDE_CODE_REMOTE || EM()) && typeof process.send !== "function";
}
function k4e(e, n) {
  try {
    t(`Reading ${n} from inherited descriptor ${e} (until newline or end-of-stream)`);
    let r = ofi(e, { maxBytes: _$e }).trim();
    if (!r) return (t(`File descriptor ${e} contained empty ${n}`, { level: "error" }), null);
    return (t(`Successfully read ${n} directly from inherited descriptor ${e}`), r);
  } catch (r) {
    return (
      t(`Failed to read ${n} directly from descriptor ${e}: ${d(r)}`, { level: "error" }),
      null
    );
  }
}
async function F3r({
  envVar: e,
  wellKnownPath: n,
  readPath: r = n,
  label: o,
  fileLabel: s = o,
  getCached: m,
  setCached: a,
  credentials: _,
  skipInReviewOrigin: g = !1
}) {
  let A = m();
  if (A !== void 0) return A;
  let p = process.env[e];
  if (!p) {
    let u = await h(r, s, _);
    return ($Se(e, "file", u), S(m, a, u));
  }
  let l = parseInt(p, 10);
  if (Number.isNaN(l))
    return (
      t(`${e} must be a valid file descriptor number, got: ${p}`, { level: "error" }),
      a(null),
      null
    );
  let c = w(),
    T = () => {
      (delete process.env[e], NSe(e));
    };
  if (F8r(l)) {
    if (!c) {
      let f = await h(r, s, _);
      return ($Se(e, "file_after_socket", f), S(m, a, f));
    }
    let u = k4e(l, o);
    if ((T(), $Se(e, "descriptor_direct", u), a(u), u))
      await F(n, u, s, _, { skipInReviewOrigin: g });
    return u;
  }
  try {
    let u = `/proc/self/fd/${l}`,
      f = Ost(u, { maxBytes: _$e }).trim();
    if (!f) return (t(`File descriptor contained empty ${o}`, { level: "error" }), a(null), null);
    return (
      t(`Successfully read ${o} from file descriptor ${l}`),
      $Se(e, "descriptor_by_path", f),
      a(f),
      await F(n, f, s, _, { skipInReviewOrigin: g }),
      f
    );
  } catch (u) {
    t(`Failed to read ${o} from file descriptor ${l}: ${d(u)}`, { level: "error" });
    let f = await h(r, s, _);
    if (f) return ($Se(e, "file_after_failed_read", f), S(m, a, f));
    let P = E(u);
    if ((P === "EACCES" || P === "EPERM") && c) {
      let y = k4e(l, o);
      if ((T(), y))
        return (
          $Se(e, "descriptor_direct", y),
          a(y),
          await F(n, y, s, _, { skipInReviewOrigin: g }),
          y
        );
    }
    return S(m, a, null);
  }
}
function S(e, n, r) {
  let o = e();
  if (o !== void 0) return o;
  return (n(r), r);
}
function b$e() {
  return Boolean(process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) && !J();
}
async function pci({ attempts: e = 10, delayMs: n = 100 } = {}) {
  for (let r = 0; r < e && b$e(); r++) (await X(n), war());
  return !b$e();
}
function k() {
  (i.unset("CLAUDE_BG_AUTH_SNAPSHOT_PATH"), NSe("CLAUDE_BG_AUTH_SNAPSHOT_PATH"));
}
function war() {
  let e = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!e || J()) return;
  let n;
  try {
    n = L(e);
  } catch (r) {
    if (H(r))
      return (
        t(`bg auth snapshot busy, will retry on the next read: ${d(r)}`, { level: "warn" }),
        E(r)
      );
    if (!G(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, { level: "warn" });
  }
  if ((k(), n === void 0)) return;
  try {
    R(e).catch(() => {});
    let r = JSON.parse(n);
    if (typeof r?.gatewayToken === "string" && r.gatewayToken) {
      (Hdr(r.gatewayToken), t("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof r?.accessToken !== "string" || !r.accessToken) {
      t("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if (
      (FM(r.accessToken),
      LYt(!0),
      hXr(typeof r.organizationUuid === "string" ? r.organizationUuid : null),
      Array.isArray(r.scopes) && r.scopes.length > 0)
    )
      NYt(r.scopes);
    if (r.subscriptionType) process.env.CLAUDE_CODE_SUBSCRIPTION_TYPE = r.subscriptionType;
    if (r.rateLimitTier) process.env.CLAUDE_CODE_RATE_LIMIT_TIER = r.rateLimitTier;
    t("Consumed bg auth snapshot from sockDir");
  } catch (r) {
    if (!G(r)) t(`Failed to consume bg auth snapshot: ${d(r)}`, { level: "warn" });
  }
}
async function XQo(e) {
  let n = process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH;
  if (!n || J()) return;
  let r = await e.readHandoffCredential(n, {
    symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse"
  });
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH !== n) return;
  switch (r.state) {
    case "absent":
      k();
      return;
    case "read-failed":
      if (r.code !== "EBUSY" && r.code !== "EPERM" && !(r.code === "EACCES" && O() === "windows"))
        k();
      t(`Failed to consume bg auth snapshot: ${r.code ?? "unknown error"}`, { level: "warn" });
      return;
    case "present":
      break;
  }
  (k(), e.discardSpentCredentialFile(n).catch(() => {}));
  try {
    let o = JSON.parse(r.contents);
    if (typeof o?.gatewayToken === "string" && o.gatewayToken) {
      (Hdr(o.gatewayToken), t("Consumed gateway token from bg auth snapshot"));
      return;
    }
    if (typeof o?.accessToken !== "string" || !o.accessToken) {
      t("bg auth snapshot missing accessToken", { level: "warn" });
      return;
    }
    if (
      (FM(o.accessToken),
      LYt(!0),
      hXr(typeof o.organizationUuid === "string" ? o.organizationUuid : null),
      Array.isArray(o.scopes) && o.scopes.length > 0)
    )
      NYt(o.scopes);
    if (o.subscriptionType) i.set("CLAUDE_CODE_SUBSCRIPTION_TYPE", String(o.subscriptionType));
    if (o.rateLimitTier) i.set("CLAUDE_CODE_RATE_LIMIT_TIER", String(o.rateLimitTier));
    t("Consumed bg auth snapshot from sockDir");
  } catch (o) {
    t(`Failed to consume bg auth snapshot: ${d(o)}`, { level: "warn" });
  }
}
function NZ(e) {
  return (process.env[e]?.trim() ?? "") !== "" || NTn(e);
}
function dE() {
  return (
    war(),
    $3r({
      envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
      wellKnownPath: LZ,
      label: "OAuth token",
      getCached: w6,
      setCached: FM,
      skipInReviewOrigin: !0
    })
  );
}
async function U3r(e) {
  return (await XQo(e), JQo(e));
}
async function JQo(e) {
  return F3r({
    envVar: "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR",
    wellKnownPath: LZ,
    label: "OAuth token",
    getCached: w6,
    setCached: FM,
    credentials: e,
    skipInReviewOrigin: !0
  });
}
function lAt() {
  let e = bXr();
  if (e !== void 0) return e;
  war();
  let n = bXr();
  if (n !== void 0) return n;
  if (process.env.CLAUDE_BG_AUTH_SNAPSHOT_PATH) return null;
  let r = i.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR,
    o = r ? parseInt(r, 10) : Number.NaN,
    s =
      Number.isNaN(o) || i.CLAUDE_CODE_REMOTE || typeof process.send === "function" || !F8r(o)
        ? null
        : k4e(o, "gateway token");
  if ((Hdr(s), delete process.env.CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR, r?.trim()))
    NSe("CLAUDE_CODE_GATEWAY_TOKEN_FILE_DESCRIPTOR");
  return s;
}
function tW() {
  return $3r({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: aAt,
    label: "API key",
    getCached: yXr,
    setCached: _Xr
  });
}
async function mci(e) {
  return F3r({
    envVar: "CLAUDE_CODE_API_KEY_FILE_DESCRIPTOR",
    wellKnownPath: aAt,
    label: "API key",
    getCached: yXr,
    setCached: _Xr,
    credentials: e
  });
}
function H(e) {
  let n = E(e);
  return n === "EBUSY" || n === "EPERM" || (n === "EACCES" && O() === "windows");
}
function L(e) {
  let n = () =>
    Ost(e, {
      maxBytes: _$e,
      symlinkAtPath: i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST ? "follow" : "refuse",
      regularFileOnly: !0
    });
  try {
    return n();
  } catch (r) {
    if (H(r)) return n();
    throw r;
  }
}
export {
  LZ,
  aAt,
  Pse,
  YQo,
  _$e,
  fci,
  uEn,
  i4t,
  $3r,
  k4e,
  F3r,
  b$e,
  pci,
  war,
  XQo,
  NZ,
  dE,
  U3r,
  JQo,
  lAt,
  tW,
  mci
};

//# sourceMappingURL=chunk-nrysaqwk.js.map
