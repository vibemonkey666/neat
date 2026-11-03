// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn, ke, VTn, J } from "./chunk-wrtp8qz8.js";
import { R, d, E, G, Vt, I2 } from "./chunk-fs43t96t.js";
import {
  Rc,
  ml,
  DB,
  _T,
  gl,
  JYt,
  Gu,
  TAn,
  wA,
  T6,
  Uq,
  WCt,
  pcr,
  mcr,
  gcr,
  pE,
  QYt,
  ew,
  xf,
  GM
} from "./chunk-h5gbmqm1.js";
import { Pm, te, ie, Les, pW, Hb, Cn, tpe, t } from "./chunk-4kxznmzw.js";
import { Le, up } from "./chunk-jazcqqqr.js";
import { va, I, gYt, Nb, Ze, lCt } from "./chunk-a16y5hcz.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { xM } from "./chunk-qywdxehb.js";
import { Fu, Y$ } from "./chunk-13nwb0xt.js";
import { p } from "./chunk-qmkm2x59.js";
import { cT, We } from "./chunk-pgnjjhxv.js";
import {
  Uvn,
  sQo,
  $y,
  rxe,
  zvn,
  h3r,
  y3r,
  uQo,
  rar,
  Kvn,
  fQo,
  Vvn,
  _3r,
  Uot,
  Am,
  Ybe,
  vfe
} from "./chunk-d54avynm.js";
import { Mt, t4t, J9, hi, Ve } from "./chunk-adv24f35.js";
import { vr, f6 } from "./chunk-azq9hjy0.js";
import { bR } from "./chunk-znkwh1rm.js";
import { wl, pl, Sn, uA, AXo, Eqt, On, or, Vn, Bh, Pqt } from "./chunk-5rw2zfa0.js";
import { nT } from "./chunk-1e5yp9hx.js";
import { ua, Lh, uf } from "./chunk-ajtyjx88.js";
import { iSe, eX } from "./chunk-v4kbwz0z.js";
import { Vrt, pe, a9o, l9o, U5r, dse, ek } from "./chunk-7c3thgax.js";
import { bl } from "./chunk-jwqtbev0.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { qY, Iy } from "./chunk-nsr849np.js";
import { Up } from "./chunk-t1ptejf0.js";
import { _9 } from "./chunk-mg0tfavz.js";
import { o, u, B } from "./chunk-0bqrj5ah.js";
import { xEn } from "./chunk-527647eb.js";
import { m2 } from "./chunk-njpzwa1b.js";
import { Ac } from "./chunk-mapzg9k3.js";
import { en } from "./chunk-rc7xvf0x.js";
import { vt } from "./chunk-dsrz10z8.js";
import { z } from "./chunk-p197ae0z.js";
import { readdir as _e, rm as mt, stat as ht } from "fs/promises";
import { delimiter as yt, join as v } from "path";
import { isAbsolute as ct } from "path";
var aSt = ".claude-plugin-link",
  Mjr = p(() =>
    u({
      target: o()
        .min(1)
        .max(4096)
        .refine((e) => ct(e), { message: "must be an absolute path" })
        .refine((e) => !GM(e) && !gl(e), { message: "must be a local path" })
        .refine((e) => !DB(e), { message: "must be canonical" })
    })
  ),
  dmn = `
[mode: link]`;
import { isAbsolute as Ee, join as b, relative as Re, sep as M } from "path";
import { isAbsolute as dt, join as ye, relative as Se, sep as Pe } from "path";
function O2e() {
  let e = up();
  return e === null ? null : ye(e, "skills");
}
function pt(e) {
  let n = O2e();
  if (n === null) return !1;
  let r = Se(n, e);
  return r !== "" && r !== ".." && !r.startsWith(`..${Pe}`) && !dt(r);
}
function be(e) {
  let n = O2e();
  if (n === null || !pt(e)) return null;
  let r = Se(n, e).split(Pe);
  return cT(r) && ye(n, ...r) === e ? r : null;
}
function Djr(e) {
  let n = be(e);
  return n === null ? null : We.userConfigDir("skills", n);
}
function p3s(e) {
  let n = be(e);
  return n === null ? null : { namespace: "userConfigDir", dir: "skills", relPath: n };
}
var GG = ".orphaned_at",
  lg = ".in_use",
  lSt = ".gcs-sha",
  X1 = ".links_materialized";
function W() {
  return b(Le(), "plugins", "cache");
}
function Y(e, n) {
  let r = W();
  if (n !== r) return null;
  let s = Re(r, e);
  if (s === "" || s === ".." || s.startsWith(`..${M}`) || Ee(s)) return null;
  let a = s.split(M);
  return b(r, ...a) === e ? a : null;
}
function V(e) {
  return e.endsWith(".zip");
}
function U8(e, n) {
  let r = Y(e, n);
  if (r === null || r.length !== 3 || !cT(r) || V(r[2])) return null;
  let [s, a, c] = r;
  return { marketplace: s, plugin: a, version: c };
}
function m3s(e) {
  return (
    e.namespace === "pluginCache" &&
    e.marketplace !== void 0 &&
    e.plugin !== void 0 &&
    e.version !== void 0 &&
    e.relPath === void 0
  );
}
function yWt(e, n) {
  let r = U8(e, n);
  return r === null ? null : { namespace: "pluginCache", ...r };
}
function g3s(e, n) {
  let r = [e.marketplace, e.plugin, e.version];
  if (n !== W() || !cT(r) || V(e.version)) return null;
  return b(n, ...r);
}
function gt(e, n) {
  let r = Y(e, n);
  if (r === null || r.length < 4 || !cT(r) || V(r[2])) return null;
  let [s, a, c, ...l] = r;
  return We.pluginCache(s, a, c, l);
}
function cmn(e, n) {
  return gt(e, n) ?? Djr(e);
}
function Hjr(e, n) {
  return q(n) ? We.pluginRegistry(e) : null;
}
function Ljr(e, n, r) {
  return q(r) && cT([e]) ? We.marketplaceCache(e, n) : null;
}
function q(e) {
  return e === b(Le(), "plugins");
}
function ft(e, n) {
  if (!q(n)) return null;
  let r = b(n, "marketplaces"),
    s = Re(r, e);
  if (s === "" || s === ".." || s.startsWith(`..${M}`) || Ee(s)) return null;
  let a = s.split(M);
  return b(r, ...a) === e ? a : null;
}
function umn(e, n) {
  let r = ft(e, n);
  if (r === null || r.length < 2 || !cT(r)) return null;
  return We.marketplaceTree(r[0], r.slice(1));
}
function h3s(e) {
  return e === b(Le(), "plugins", "asset-cache") ? { namespace: "pluginAssetCache" } : null;
}
function XXn(e, n) {
  if (e === n) return n === W() ? { namespace: "pluginCache" } : null;
  let r = Y(e, n);
  if (r === null || r.length > 2 || !cT(r)) return null;
  let [s, a] = r;
  return a === void 0
    ? { namespace: "pluginCache", marketplace: s }
    : { namespace: "pluginCache", marketplace: s, plugin: a };
}
var Aet = new Set([aSt, lg, GG]);
function _$(e) {
  return _T(e).replace(/[. ]+$/, "");
}
function dSt(e, n) {
  let r = _$(e);
  if (n.has(r)) return !0;
  for (let s of n) if (xM(r, s)) return !0;
  return !1;
}
function cSt(e) {
  return _$(e) === "node_modules";
}
var Ce = "plugins",
  Z = "cowork_plugins";
function X() {
  if (VTn()) return Z;
  if (i.CLAUDE_CODE_USE_COWORK_PLUGINS) return Z;
  return Ce;
}
function fmn() {
  return X() === Ce && !i.CLAUDE_CODE_PLUGIN_CACHE_DIR;
}
function Njr() {
  return X() === Z;
}
function Fd() {
  let e = i.CLAUDE_CODE_PLUGIN_CACHE_DIR;
  if (e) return Gu(e);
  return v(Le(), X());
}
function e0() {
  let e = i.CLAUDE_CODE_PLUGIN_SEED_DIR;
  if (!e) return [];
  return e.split(yt).filter(Boolean).map(Gu);
}
function _Wt(e) {
  return e.replace(/[^a-zA-Z0-9\-_]/g, "-");
}
function gce(e) {
  return _Wt(e).toLowerCase();
}
function Cet(e) {
  let n = _$(e.normalize("NFKC"));
  return n.startsWith(vfe) || _Wt(n).toLowerCase().startsWith(vfe);
}
function pmn(e) {
  return _Wt(_$(e.normalize("NFKC"))).toLowerCase();
}
function ijo(e) {
  return e.replace(/[^a-z0-9-]/gu, (n) => {
    let r = n.codePointAt(0) ?? 0;
    return r <= 255 ? `_${r.toString(16).padStart(2, "0")}` : `__${r.toString(16)}_`;
  });
}
function L(e) {
  if (Ybe(e)) {
    let n = e.slice(0, e.lastIndexOf("@"));
    return `${ijo(n)}-${$y}`;
  }
  return _Wt(e);
}
function JXn(e, n) {
  return L(e).toLowerCase() === L(n).toLowerCase();
}
function y3s(e, n) {
  return `installed_plugins.set-aside.${e.toISOString().slice(0, 10)}.${n}.json`;
}
function QXn(e) {
  return /^installed_plugins\.set-aside\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.json$/.test(e);
}
function _3s(e, n) {
  return `installed_plugins.unreadable.${e.toISOString().slice(0, 10)}.${n}.kept`;
}
function ZXn(e) {
  return /^installed_plugins\.unreadable\.\d{4}-\d{2}-\d{2}\.[0-9a-f]{12}\.kept$/.test(e);
}
function $p(e) {
  return v(Fd(), "data", L(e));
}
function M2e(e) {
  let n = $p(e);
  if (J()) return n;
  return (ie().mkdirSync(n), n);
}
async function eJn(e, { throwIfUnreadable: n = !1 } = {}) {
  let r = $p(e),
    s = 0,
    a = async (c) => {
      for (let l of await _e(c, { withFileTypes: !0 })) {
        let g = v(c, l.name);
        if (l.isDirectory()) await a(g);
        else
          try {
            s += (await ht(g)).size;
          } catch {}
      }
    };
  try {
    await a(r);
  } catch (c) {
    if (n) {
      if ((await Y$(r)) === "gone") return null;
      throw c;
    }
    if (Vt(c)) return null;
    throw c;
  }
  if (s === 0) return null;
  return { bytes: s, human: en(s) };
}
async function mmn(e) {
  let n = $p(e);
  try {
    return (await mt(n, { recursive: !0 }), "removed");
  } catch (r) {
    if (G(r)) return "absent";
    return (t(`Failed to delete plugin data dir ${n}: ${d(r)}`, { level: "warn" }), "failed");
  }
}
async function b3s(e) {
  let n = v(Fd(), "data"),
    r = L(e).toLowerCase();
  try {
    return (await _e(n)).filter((s) => s.toLowerCase() === r).map((s) => v(n, s));
  } catch (s) {
    return G(s) || E(s) === "ENOTDIR" ? [] : void 0;
  }
}
async function tJn(e) {
  return (await Y$($p(e))) === "gone";
}
function fWt(e) {
  if (VXn())
    return `Claude Code won't load marketplace "${Ve(e)}": its name looks like the name of one of Anthropic's own marketplaces`;
  return `Claude Code refuses the marketplace name "${Ve(e)}": it looks like one of Anthropic's own`;
}
function KXn(e, n) {
  return `Failed to load marketplace "${Ve(e)}": ${n}`;
}
function VXn() {
  return !1;
}
var kt = 64;
function T(e, n = "it") {
  let r = e.length <= kt ? wl("plugin marketplace remove", e) : null;
  return r === null ? `Remove ${n} in /plugin \u2192 Marketplaces` : `Remove ${n} with: ${r}`;
}
var we = "this also uninstalls its plugins and deletes their data, options and secrets",
  ve = "if its maintainer renames it, update it instead",
  St = [
    "Removing it is the only fix. That also uninstalls its plugins and deletes what they saved:",
    "their data, options and secrets."
  ],
  Pt =
    "After removing it, you can add it again from the same source; if that is refused, its maintainer has to rename it first.",
  bt = [
    "It was added from a settings file. To keep it, do these in order (if your organization's managed settings add it, an administrator does step 1):",
    "1. In each settings file that lists it under extraKnownMarketplaces, rename its entry (the key and its source.name) to a plain-ASCII name that doesn't look like one of Anthropic's."
  ],
  Et = "(this also uninstalls its plugins and deletes their data, options and secrets).",
  Rt =
    "3. Start Claude Code again, in that project's folder if it is a project's settings file, then install its plugins from the renamed one.";
function xe(e) {
  return [...bt, `2. ${T(e, "the old name")}`, Et, Rt];
}
function Ne(e) {
  return [...St, Pt, T(e)];
}
function qXn(e, n = {}) {
  if (n.declaredInSettings === !0) return `Reloading won't help. ${xe(e).join(" ")}`;
  if (VXn()) return `Reloading won't help. ${Ne(e).join(" ")}`;
  return `Reloading won't help. ${T(e)} (${we}; ${ve})`;
}
function ejo(e, n = {}) {
  let r = VXn(),
    s = r
      ? [
          `Claude Code won't load marketplace "${Ve(e)}":`,
          "its name looks like the name of one of Anthropic's own marketplaces. Reloading won't help."
        ]
      : [
          `Claude Code refuses the marketplace name "${Ve(e)}":`,
          "it looks like one of Anthropic's own. Reloading won't help."
        ];
  if (n.declaredInSettings === !0) return [...s, ...xe(e)];
  if (r) return [...s, ...Ne(e)];
  return [...s, T(e), `(${we};`, `${ve}).`];
}
var tjo =
    "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Reloading won't help. Remove it in /plugin \u2192 Marketplaces (deletes its plugins and their data, options and secrets).",
  _t =
    "Claude Code refuses this marketplace's name: it looks like one of Anthropic's own. Rename it in its settings file, remove the old name in /plugin \u2192 Marketplaces (plugins and data go), then restart.";
function njo(e) {
  return e ? _t : tjo;
}
var Q = (e, n) =>
  `${e} only while "${Ve(n)}" is disabled. Disable or uninstall the copy you don't need`;
var Tet = {
  "network-location":
    "re-add the marketplace (one added from a folder or file must be re-added from a copy on this computer), or, to trust a folder on a network drive, declare it under extraKnownMarketplaces in user or managed settings",
  source: "re-add the marketplace with a supported source",
  declaration: "re-add the marketplace from the source that entry lists, or change the entry"
};
var wt = ["available", "required", "auto_install", "not_available"],
  YXn = p(() => B(wt));
function xjr(e) {
  return YXn().safeParse(e).data;
}
function rjo(e, n, r, s, a = !1) {
  {
    let c = Ve(e),
      l =
        n && n.length > 0
          ? `now lists it as ${n.map((g) => Ve(g)).join(" or ")}`
          : s !== void 0
            ? `still lists it, but Claude Code cannot install it (${Ve(s)})`
            : r
              ? "now lists a different repository under that name"
              : a
                ? "does not list it (or your organization blocks it)"
                : "no longer lists it (removed, or blocked by your organization)";
    return a
      ? `Plugin "${c}" is not loaded: installed_plugins.json could not be read, so its install could not be checked, and the Anthropic Directory ${l}`
      : `Plugin "${c}" is not loaded: the Anthropic Directory ${l}`;
  }
  return "";
}
function pWt(e) {
  return (
    e.type === "marketplace-load-failed" &&
    e.reason === "cache-miss" &&
    e.marketplace === Sn &&
    e.directoryBlockedBy === void 0
  );
}
var mWt = `Run /reload-plugins, or: claude plugin marketplace update ${Sn}`;
function imn(e) {
  if (
    e.type === "marketplace-not-found" &&
    e.marketplace !== Sn &&
    uA(e.marketplace) &&
    e.registrationHidden !== void 0
  ) {
    let n = AXo(e.marketplace);
    return n === null
      ? "Remove that entry from known_marketplaces.json, then uninstall this plugin if it is still listed"
      : `Remove it: ${n}`;
  }
  return;
}
function ee(e) {
  switch (e) {
    case "managed_setting":
      return "Your administrator turned it off with disablePluginDirectory in managed settings.";
    case "allowlist":
      return "Your administrator's marketplace allowlist (strictKnownMarketplaces) does not include the Anthropic Directory.";
    case "blocklist":
      return "Your administrator listed it in blockedMarketplaces in managed settings.";
    case "policy_limit":
      return "Your organization's policy does not allow it.";
  }
  return "";
}
function Pjr(e) {
  if (e.directoryDisabledByOrganization) return "managed_setting";
  if (e.marketplace !== Sn || e.sourceUnverifiable) return null;
  return e.blockedByBlocklist ? "blocklist" : "allowlist";
}
function gWt(e, n) {
  {
    let r = ee(n),
      s =
        e === void 0
          ? "The Anthropic Directory is blocked by your organization"
          : `Plugin "${Ve(e)}" is not loaded: the Anthropic Directory is blocked by your organization`;
    return r === "" ? s : `${s}. ${r}`;
  }
  return "";
}
var amn = "(not recorded)",
  xt = {
    "path-not-found": !1,
    "path-traversal": !1,
    "mcp-config-invalid": !1,
    "lsp-config-invalid": !1,
    "hook-load-failed": !1,
    "component-load-failed": !1,
    "mcpb-download-failed": !1,
    "mcpb-extract-failed": !1,
    "mcpb-invalid-manifest": !1,
    "lsp-server-start-failed": !1,
    "lsp-server-crashed": !1,
    "lsp-request-timeout": !1,
    "lsp-request-failed": !1,
    "plugin-not-installed": !1,
    "marketplace-blocked-by-policy": !1,
    "autoupdate-blocked-by-pinner": !1,
    "autoupdate-deferred-entry-helper": !1,
    "autoupdate-disabled-by-policy": !1,
    "plugin-cache-miss": !0,
    "generic-error": !0,
    "manifest-parse-error": !0,
    "manifest-validation-error": !0,
    "marketplace-not-found": !0,
    "marketplace-load-failed": !0,
    "plugin-not-found": !0,
    "git-auth-failed": !0,
    "git-timeout": !0,
    "network-error": !0,
    "dependency-unsatisfied": !0,
    "dependency-version-unsatisfied": !0
  };
function tLe(e) {
  if (e.type === "path-not-found") return e.plugin === void 0 && e.errno !== void 0;
  if (e.type === "plugin-not-installed")
    return e.seedHasOtherVersion === !0 || e.registryReadFailed === !0;
  if (e.type === "generic-error") return e.orphan !== !0 && e.refused !== !0;
  if (e.type === "marketplace-load-failed")
    return (
      e.untrustedReservedName !== !0 && e.nameRefused !== !0 && e.directoryBlockedBy === void 0
    );
  if (e.type === "marketplace-not-found")
    return e.registrationHidden === void 0 || e.registrationHidden === "network-location";
  if (e.type === "plugin-not-found")
    return e.removedFromDirectory !== !0 || e.registryReadFailed === !0;
  return xt[e.type];
}
function I2e(e) {
  return e.type === "dependency-unsatisfied" || e.type === "dependency-version-unsatisfied";
}
function BAe(e) {
  if ("pluginId" in e && e.pluginId) return e.pluginId;
  if ("plugin" in e && e.plugin) return e.plugin;
  let n = e.source.lastIndexOf("@");
  if (n > 0) return e.source.slice(0, n);
  return;
}
function nLe(e) {
  return (
    e.type === "autoupdate-deferred-entry-helper" || e.type === "autoupdate-disabled-by-policy"
  );
}
function ojo(e) {
  return `"${Ve(e)}" is loaded from your claude.ai account but meets a marketplace dependency only for other claude.ai plugins`;
}
function gv(e) {
  return Vn(Nt(e));
}
function Nt(e) {
  switch (e.type) {
    case "generic-error":
      return J9(e.error);
    case "path-not-found":
      return e.plugin === void 0
        ? `Path not found: ${hi(e.path)}${e.errno ? ` (${Ve(e.errno)})` : ""}`
        : `Path not found: ${hi(e.path)} (${Ve(e.component)}${e.errno ? `, ${Ve(e.errno)}` : ""})`;
    case "path-traversal":
      return `Path escapes plugin directory: ${hi(e.path)} (${Ve(e.component)})${e.reason ? ` \u2014 ${hi(e.reason)}` : ""}`;
    case "git-auth-failed":
      return `Git authentication failed (${Ve(e.authType)}): ${hi(e.gitUrl)}`;
    case "git-timeout":
      return `Git ${Ve(e.operation)} timeout: ${hi(e.gitUrl)}`;
    case "network-error":
      return `Network error: ${hi(e.url)}${e.details ? ` - ${Ve(e.details)}` : ""}`;
    case "manifest-parse-error":
      return `Manifest parse error: ${Ve(e.parseError, 500)} (in ${hi(e.manifestPath)})`;
    case "manifest-validation-error":
      return e.containmentRefused
        ? `Plugin not loaded: its manifest ${hi(e.manifestPath)} was not read, because ${Ve(e.validationErrors.join(", "), 1000)}`
        : `Manifest validation failed: ${Ve(e.validationErrors.join(", "), 1000)} (in ${hi(e.manifestPath)})`;
    case "plugin-not-found":
      if (e.removedFromDirectory)
        return rjo(
          e.pluginId,
          e.directoryRenamedTo,
          e.directoryIdentityChanged === !0,
          e.directoryNotInstallableReason,
          e.registryReadFailed === !0
        );
      return `Plugin ${Ve(e.pluginId)} not found in marketplace ${Ve(e.marketplace)}`;
    case "marketplace-not-found":
      if (e.registrationHidden !== void 0) {
        let n = `Marketplace ${Ve(e.marketplace)} is added but ignored`;
        return e.registrationHiddenReason === void 0
          ? `${n} (see the debug log)`
          : `${n}. ${va(t4t(e.registrationHiddenReason))}. ${va(Tet[e.registrationHidden])}.`;
      }
      return `Marketplace ${Ve(e.marketplace)} not found`;
    case "marketplace-load-failed":
      if (e.directoryBlockedBy !== void 0) return gWt(BAe(e) ?? e.source, e.directoryBlockedBy);
      if (pWt(e))
        return `Plugin "${Ve(BAe(e) ?? e.source)}" is not loaded: the Anthropic Directory's catalog is not on this machine yet.`;
      if (e.nameRefused) return fWt(e.marketplace);
      return `Marketplace ${Ve(e.marketplace)} failed to load: ${Ve(e.reason)}`;
    case "mcp-config-invalid":
      return `MCP server ${Ve(e.serverName)} invalid: ${Ve(e.validationError)}`;
    case "hook-load-failed":
      return `Hook load failed: ${Ve(e.reason)}`;
    case "component-load-failed":
      return `${Ve(e.component)} load failed from ${hi(e.path)}: ${Ve(e.reason)}`;
    case "mcpb-download-failed":
      return `Failed to download MCPB from ${hi(e.url)}: ${Ve(e.reason)}`;
    case "mcpb-extract-failed":
      return `Failed to extract MCPB ${hi(e.mcpbPath)}: ${Ve(e.reason)}`;
    case "mcpb-invalid-manifest":
      return `MCPB manifest invalid at ${hi(e.mcpbPath)}: ${Ve(e.validationError)}`;
    case "lsp-config-invalid":
      return `Plugin "${Ve(e.plugin)}" has invalid LSP server config for "${Ve(e.serverName)}": ${Ve(e.validationError)}`;
    case "lsp-server-start-failed":
      return `Plugin "${Ve(e.plugin)}" failed to start LSP server "${Ve(e.serverName)}": ${Ve(e.reason)}`;
    case "lsp-server-crashed":
      if (e.signal)
        return `Plugin "${Ve(e.plugin)}" LSP server "${Ve(e.serverName)}" crashed with signal ${e.signal}`;
      return `Plugin "${Ve(e.plugin)}" LSP server "${Ve(e.serverName)}" crashed with exit code ${e.exitCode ?? "unknown"}`;
    case "lsp-request-timeout":
      return `Plugin "${Ve(e.plugin)}" LSP server "${Ve(e.serverName)}" timed out on ${Ve(e.method)} request after ${e.timeoutMs}ms`;
    case "lsp-request-failed":
      return `Plugin "${Ve(e.plugin)}" LSP server "${Ve(e.serverName)}" ${Ve(e.method)} request failed: ${Ve(e.error)}`;
    case "marketplace-blocked-by-policy": {
      let n = Pjr(e);
      if (n !== null) return gWt(e.plugin, n);
      if (e.blockedByBlocklist)
        return `Marketplace '${Ve(e.marketplace)}' is blocked by enterprise policy`;
      return `Marketplace '${Ve(e.marketplace)}' is not in the allowed marketplace list`;
    }
    case "dependency-unsatisfied": {
      let n = wl("plugin install", e.dependency),
        r =
          e.reason === "not-enabled"
            ? "disabled \u2014 enable it or remove the dependency"
            : `not installed \u2014 ${e.sameNameSyncedPlugin === void 0 ? "" : `${ojo(e.sameNameSyncedPlugin)}; `}${n ? `run \`${n}\`, or ` : ""}check that its marketplace is added`;
      return `Dependency "${Ve(e.dependency)}" is ${r}`;
    }
    case "dependency-version-unsatisfied":
      return `Requires "${Ve(e.dependency)}" ${Ve(e.required)}, installed ${Ve(e.installed ?? "version unknown")}`;
    case "plugin-cache-miss":
      if (e.registryReadFailed === !0)
        return `Plugin "${Ve(e.plugin)}" is not loaded: installed_plugins.json could not be read, so its install could not be checked \u2014 fix or restore installed_plugins.json in the plugins directory, then run /reload-plugins${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
      return `Plugin "${Ve(e.plugin)}" not cached at ${hi(e.installPath)} \u2014 run /plugin to refresh${e.installedListHeldNote === void 0 ? "" : `. ${e.installedListHeldNote}`}`;
    case "plugin-not-installed": {
      let n = wl("plugin install", e.source, "--scope project");
      if (e.installedListHeldNote !== void 0)
        return `Plugin "${Ve(e.plugin)}" is enabled in project settings, but whether it is installed could not be checked. ${e.installedListHeldNote}`;
      return `Plugin "${Ve(e.plugin)}" is enabled in project settings but isn't installed${n ? ` \u2014 run \`${n}\`` : " \u2014 install it at project scope (from /plugin or claude plugin install)"}`;
    }
    case "autoupdate-deferred-entry-helper":
    case "autoupdate-disabled-by-policy":
      return e.message;
    case "autoupdate-blocked-by-pinner": {
      let n = e.heldAt ? ` at ${hi(e.heldAt)}` : "",
        r = Ve(e.blockedBy.join(", ")),
        s =
          e.disabledPinners.length > 0
            ? ` (note: ${Ve(e.disabledPinners.join(", "))} ${e.disabledPinners.length === 1 ? "is" : "are"} currently disabled)`
            : "";
      return `Autoupdate held "${Ve(e.plugin)}"${n} \u2014 version constraint from ${r}${s}`;
    }
  }
}
function Ure(e) {
  return Vn(At(e));
}
function At(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let n = Ae(e.manifestFields);
      return `Default ${Ve(e.component)}/ folder is ignored because the manifest sets ${n}`;
    }
    case "mcp-server-suppressed-duplicate": {
      let n = e.duplicateOf.startsWith("plugin:")
        ? `server provided by plugin "${Ve(e.duplicateOf.split(":")[1] ?? "?")}"`
        : `already-configured "${Ve(e.duplicateOf)}"`;
      return `MCP server "${Ve(e.serverName)}" skipped \u2014 same command/URL as ${n}`;
    }
    case "mcpb-needs-config":
      return `Bundled MCP server "${Ve(e.serverName)}" was not started: it needs configuration`;
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Removed from the "${Ve(e.marketplace)}" marketplace`
        : `Renamed to "${Ve(e.renamedTo)}" in the "${Ve(e.marketplace)}" marketplace`;
    case "lsp-extension-conflict": {
      let n = e.activeServer.startsWith("plugin:") ? e.activeServer.split(":")[1] : void 0,
        r = n ? `plugin "${Ve(n)}"` : `"${Ve(e.activeServer)}"`;
      return `LSP server "${Ve(e.serverName)}" is not used for ${Ve(e.extension)} files \u2014 ${r} already registered a server for that extension`;
    }
    case "project-scope-suppressed-untrusted":
    case "project-scope-server-stripped":
      return t4t(e.warning);
    case "broken-wikilink":
      return `${Ve(e.raw)} in ${hi(e.filePath)}:${e.line} doesn't resolve to a skill`;
    case "synced-plugin-shadowed":
      return `"${Ve(e.source)}" from claude.ai not loaded \u2014 "${Ve(e.shadowedBy)}" on this machine has the same name and takes precedence`;
    case "hooks-left-out-by-name":
      return `Its hooks.json hooks do not run. "${Ve(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-module-left-out-by-name":
      return `Its hooks module does not load. "${Ve(e.heldBy)}" holds the same plugin name and comes first`;
    case "hooks-passed-over":
      return `Its hooks on ${e.patterns.map((r) => Ve(r)).join(", ")} do not run here: where an organization manages Claude Code, these events pass over the plugins you install`;
    case "managed-hooks-restricted":
      return `"${Ve(e.source)}" loads because its sync attribution matches a plugin your organization's managed settings turn on, but any hooks it ships are NOT running \u2014 allowManagedHooksOnly runs hooks only from plugins installed under managed settings' exact plugin@marketplace id`;
    case "managed-plugin-disabled-by-settings":
      return `"${Ve(e.source)}" is disabled by your settings, though its sync attribution matches a plugin your organization's managed settings turn on \u2014 if this copy is the org's delivery, that plugin is not running`;
    case "ineffective-disable":
      return `Disabled in ~/.claude/settings.json but still loads \u2014 ${nT(e.overriddenBy)} settings enable it, which overrides your user setting`;
    case "dependencies-refused":
      return `The packages it lists were not installed, because ${Ve(Ze(e.reason, ";"))}`;
    case "dependencies-not-installed": {
      let n = wl("plugin update", e.source);
      return `The packages it lists are not installed. ${n ? `Run \`${n}\` to install them` : "Update it from /plugin to install them"}`;
    }
  }
}
function Ijr(e) {
  return Vn(It(e));
}
function It(e) {
  switch (e.type) {
    case "folder-shadowed-by-manifest": {
      let n = Ae(e.manifestFields);
      if (e.manifestFields.length === 1)
        return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder, or add the folder's files to the ${n} list if you want both`;
      return `Remove ${n} from .claude-plugin/plugin.json (or SKILL.md frontmatter) to auto-load the folder`;
    }
    case "project-scope-suppressed-untrusted":
      return "Accept the trust dialog for this workspace, then run /reload-plugins.";
    case "project-scope-server-stripped":
      return "Monitors from project @skills-dir plugins are not supported \u2014 install the plugin at user scope instead.";
    case "broken-wikilink":
      return e.reason === "invalid"
        ? "Wikilink names may use letters, digits, dash, underscore \u2014 rename the link"
        : `Create one of: ${e.tried.map((n) => hi(n)).join(" or ")}, or fix the link spelling`;
    case "mcp-server-suppressed-duplicate": {
      if (e.duplicateOf.startsWith("plugin:")) {
        let n = e.duplicateOf.split(":")[1] ?? "the other plugin";
        return `Disable plugin "${Ve(n)}" if you want this plugin's version instead`;
      }
      return `Remove "${Ve(e.duplicateOf)}" from your MCP config if you want the plugin's version instead`;
    }
    case "mcpb-needs-config":
      return `Open "${Ve(e.plugin)}" in the Installed tab and choose Configure`;
    case "lsp-extension-conflict": {
      let n = e.activeServer.startsWith("plugin:")
        ? (e.activeServer.split(":")[1] ?? "the other plugin")
        : e.activeServer;
      if (n === e.plugin)
        return `Plugin "${Ve(e.plugin)}" declares two LSP servers for ${Ve(e.extension)} \u2014 remove or reorder "${Ve(e.serverName)}" in its lspServers config`;
      return `Disable plugin "${Ve(n)}" to use this plugin's LSP server for ${Ve(e.extension)} files, or disable "${Ve(e.plugin)}" to silence this warning`;
    }
    case "synced-plugin-shadowed": {
      let n = wl("plugin enable", e.source);
      return `To use the claude.ai copy instead, ${n ? `run \`${n}\`` : "enable it from /plugin"}, then disable or remove "${Ve(e.shadowedBy)}"`;
    }
    case "hooks-left-out-by-name":
      return Q("One plugin per name runs hooks.json hooks, so this copy's run", e.heldBy);
    case "hooks-module-left-out-by-name":
      return Q("One plugin per name loads a hooks module, so this copy's loads", e.heldBy);
    case "hooks-passed-over":
      return "Only a plugin that counts as your organization's own runs hooks on these events. An administrator sets that up in managed settings";
    case "managed-hooks-restricted":
      return "If this plugin is org-mandated and its hooks are required, ask your administrator to install it under the exact plugin@marketplace id managed settings name; if you did not expect this copy, remove its directory";
    case "managed-plugin-disabled-by-settings": {
      let n = wl("plugin enable", e.source);
      return `To run it, ${n ? `run \`${n}\`` : "enable it from /plugin"}; if you did not expect this copy, remove its directory`;
    }
    case "plugin-renamed":
      return e.renamedTo === null
        ? `Remove "${Ve(e.source)}" from enabledPlugins if you still see this on the next start`
        : `If you still see this on the next start, update enabledPlugins to use "${Ve(e.renamedTo)}@${Ve(e.marketplace)}" (managed settings are not rewritten automatically)`;
    case "dependencies-refused":
      return "If it needs those packages, parts of it may not work. Updating or reinstalling this version of the plugin will not install them while that is still true";
    case "dependencies-not-installed":
      return "If it needs those packages, parts of it may not work";
    case "ineffective-disable":
      switch (e.overriddenBy) {
        case "projectSettings":
          return `Set "enabledPlugins": {"${Ve(e.source)}": false} in .claude/settings.local.json instead \u2014 project settings override ~/.claude/settings.json`;
        case "localSettings":
          return "Change it to false in .claude/settings.local.json \u2014 that file currently enables it";
        case "flagSettings":
          return `Remove "${Ve(e.source)}" from the --settings value \u2014 that flag overrides all settings files`;
        case "policySettings":
          return "Managed policy can't be overridden locally \u2014 contact your administrator";
        case "userSettings":
          return "";
      }
  }
}
function Ae(e) {
  return e.map((n) => `"${n}"`).join(" and ");
}
import { lstat as jt, realpath as F, stat as _ } from "fs/promises";
import { basename as Kt, dirname as N, isAbsolute as Oe, join as Te, resolve as x } from "path";
import { stat as Dt } from "fs/promises";
import { isAbsolute as $t, resolve as De, sep as Lt } from "path";
function Ot(e) {
  if ($t(e)) return Pm.workspace(e);
  return Pm.workspace(O() === "windows" ? De(e) : ie().cwd() + Lt + e);
}
function ne(e) {
  return Object.assign(
    new R(`ENOENT: no such file or directory, stat '${e}'`, "ENOENT: no such file or directory"),
    { code: "ENOENT", syscall: "stat", path: e }
  );
}
function lmn(e) {
  return Object.assign(
    new R(`ENOENT: no such file or directory, open '${e}'`, "ENOENT: no such file or directory"),
    { code: "ENOENT", syscall: "open", path: e }
  );
}
function Me(e) {
  return e.code === "Failed" &&
    (I2(e.telemetryCode) !== void 0 || /^ERR_/.test(e.telemetryCode ?? "")) &&
    e.cause instanceof Error
    ? e.cause
    : void 0;
}
function re(e, n) {
  return e === "workspace" ? Ot(n) : Pm.system(De(n));
}
async function Ojr(e, n, r = "workspace") {
  if (J()) throw ne(n);
  if (!z() || e === void 0) return Dt(n);
  if (n === "") throw ne(n);
  let s = await e.hostFiles.stat(re(r, n), { follow: !0 });
  if (!s.ok)
    throw (
      Me(s.error) ??
      Object.assign(
        new R(
          `Failed to probe the local marketplace path ${n}: ${vt(s.error)}`,
          "failed to probe a local marketplace path (v5 backend error)"
        ),
        { cause: s.error }
      )
    );
  if (s.value.kind === "absent") throw ne(n);
  let a = s.value.kind === "directory";
  return { isDirectory: () => a };
}
async function hWt(e, n, r) {
  if (r === "" || J()) return { absent: "ENOENT" };
  let s = await e.hostFiles.readText(re(n, r));
  if (!s.ok)
    throw (
      Me(s.error) ??
      Object.assign(
        new R(
          `Failed to read the marketplace file ${r}: ${vt(s.error)}`,
          "failed to read a local marketplace file (v5 backend error)"
        ),
        { cause: s.error }
      )
    );
  return s.value.found ? { text: s.value.value } : { absent: "ENOENT" };
}
async function sjo(e, n, r = "workspace") {
  if (J()) return !1;
  if (!z() || e === void 0) return Fu(n);
  if (n === "") return !1;
  let s = await e.hostFiles.stat(re(r, n), { follow: !0 });
  return s.ok && s.value.kind !== "absent";
}
import { normalize as Tt, parse as Ut, resolve as oe, sep as Ft } from "path";
var Ret = `is on a network drive, has "." or ".." in its path, or couldn't be checked`;
function YP(e, { trustedRoots: n = [] } = {}) {
  let r = Bt(e, n),
    { absolute: s, root: a, tail: c } = r;
  if (r.dotSegmentInTail) return { absolute: s, suspect: !0 };
  if (a !== void 0) {
    let g = oe(ke(), a);
    return { absolute: s, suspect: QYt(g, c) };
  }
  let l = r.networkShapedUnvouched || Uq(s);
  return { absolute: s, suspect: l };
}
function Bt(e, n) {
  if (e.trim() === "")
    return { absolute: e, root: void 0, tail: e, dotSegmentInTail: !1, networkShapedUnvouched: !0 };
  let r = oe(ke(), e),
    { root: s, tail: a } = Gt(e, n);
  return {
    absolute: r,
    root: s,
    tail: a,
    dotSegmentInTail: DB(a),
    networkShapedUnvouched: s === void 0 && (pE(e) || pE(r))
  };
}
function Ht(e) {
  return [Fd(), ...e0(), ...e];
}
function Gt(e, n) {
  let r = WCt(e),
    s;
  for (let a of Ht(n))
    for (let c of [a, Tt(a)]) {
      let l = WCt(c.replace(/[\\/]+$/, ""));
      if (l === "" || l === ".") continue;
      let g;
      if (r === l) g = "";
      else if (r.startsWith(l + Ft) || r.startsWith(l + "/"))
        g = e.slice(e.length - (r.length - l.length));
      if (g !== void 0 && (s === void 0 || g.length < s.tail.length)) s = { root: a, tail: g };
    }
  return s ?? { root: void 0, tail: e };
}
function UY(e) {
  switch (O()) {
    case "windows":
      return _T(WCt(e));
    case "macos":
      return _T(e);
    default:
      return e;
  }
}
function bWt(e) {
  if (e.trim() === "") return;
  return UY(ew(oe(ke(), e), { foldCase: !0 }));
}
function ajo(e) {
  if (O() !== "windows") return;
  let n = Ut(e).root,
    r = (a) => JYt(wA(a)),
    s = r(n);
  if (s === void 0) {
    let a = T6(n);
    if (a === null) return "undeterminable";
    s = r(a);
  }
  return s === void 0 ? void 0 : { walkRoot: n, ...s };
}
function $jr(e) {
  let n = ajo(e);
  if (n === void 0 || n === "undeterminable") return n;
  return { walkRoot: n.walkRoot, distroDir: n.rest.replace(/[\\/]+$/, "").replace(/[\\/]+/g, "/") };
}
function Fjr(e, n) {
  return (
    gcr(e, { exactDots: !0 }) ??
    mcr(e, { exactDots: !0 }) ??
    (n === void 0 ? void 0 : pcr(e, n.walkRoot, n.distroDir))
  );
}
function nJn(e) {
  if (!Oe(e)) return !1;
  return O() !== "windows" || /^(?:[A-Za-z]:[\\/]|[\\/]{2})/.test(e);
}
function rJn(e, n) {
  if (!Am(e)) return e;
  let r = n === void 0 ? Gu(e.path) : TAn(e.path, n),
    s = nJn(r) ? x(r) : r;
  return s === e.path ? e : { ...e, path: s };
}
function se(e, n) {
  let r = Ujr(e);
  if (r === void 0 || e === void 0 || !Am(e)) return [];
  if (
    !(n !== void 0 && n.source === e.source && "path" in n && n.path === e.path) ||
    !nJn(r) ||
    ml(r)
  )
    return [];
  return [r];
}
function Ujr(e) {
  switch (e?.source) {
    case "directory":
      return e.path;
    case "file":
      return Kt(N(e.path)) === ".claude-plugin" ? N(N(e.path)) : void 0;
    default:
      return;
  }
}
async function S3s(e, { entrySource: n, marketplaceLocation: r, pluginPath: s }) {
  let a = Ujr(e);
  if (
    a === void 0 ||
    typeof n !== "string" ||
    !nJn(a) ||
    x(r) !== x(a) ||
    !Up(x(a), x(s), !0) ||
    [a, s].some((g) => Rc(g) || ml(g))
  )
    return !1;
  let [c, l] = await Promise.all([
    F(a).catch(() => {
      return;
    }),
    F(s).catch(() => {
      return;
    })
  ]);
  return c !== void 0 && l !== void 0 && Up(c, l, !0);
}
function jAe(e, n, r) {
  let s = Ue(e, n, r);
  return s === void 0 ? [] : se(s.marketplaceSource, s.corroboratingSource);
}
function ljo(e, n, r) {
  let { absolute: s, suspect: a } = YP(e, { trustedRoots: se(n, r) });
  return a ? void 0 : s;
}
function zt(e) {
  return `Marketplace directory refused: its recorded location ${hi(e)} ${Ret}. ${va(Tet["network-location"])}.`;
}
var oJn = /^\.(?:[\\/]+|$)/;
function sJn(e) {
  let n = e.replace(oJn, "");
  return n !== "" && (Oe(n) || DB(n) || pE(n) || Rc(n));
}
function Wt(e, n) {
  let r = n.replace(oJn, "");
  if (r === "") return e;
  if (sJn(n) || QYt(e, r)) return;
  return Te(e, r);
}
function Yt(e) {
  return `Plugin source path refused: ${Mt(e, 300)} does not stay inside its marketplace directory. Check that the marketplace entry has a plain relative path.`;
}
async function Bjr(
  e,
  n,
  {
    marketplaceSource: r,
    corroboratingSource: s,
    storageV5: a,
    localMarketplaceSpace: c = "workspace"
  }
) {
  let l = ljo(e, r, s);
  if (l === void 0) return { kind: "location-refused" };
  let g, f;
  try {
    g = (r !== void 0 && Am(r) ? await Ojr(a, l, c) : await _(l)).isDirectory();
  } catch (S) {
    f = S;
  }
  let m = Xt(l, r, g);
  if (m === void 0) return { kind: "entry-refused", marketplaceDir: N(l) };
  let h = Wt(m, n);
  if (g === void 0) {
    let S = E(f);
    return S === "ENOENT" || S === "ENOTDIR"
      ? { kind: "location-missing", error: f, marketplaceDir: m, entryPath: h }
      : {
          kind: "location-error",
          error: f,
          marketplaceDir: m,
          entryPath: h,
          entryRefusedLexically: sJn(n)
        };
  }
  if (h === void 0) return { kind: "entry-refused", marketplaceDir: m };
  let w = await $e(m),
    me = !1;
  if (!w) {
    for (let S of se(r, s))
      if (xf(S, m) && !(await $e(S))) {
        me = !0;
        break;
      }
  }
  if (!me) {
    if (w) {
      if (!(await qt(m, n)))
        return { kind: "entry-refused", marketplaceDir: m, cause: "plain-directory-walk" };
    } else if (!xf(m, h) || !(await Zt(m, h))) return { kind: "entry-refused", marketplaceDir: m };
  }
  return { kind: "ok", marketplaceDir: m, entryPath: h };
}
async function $e(e) {
  if (O() === "windows") return !1;
  if (Rc(e)) return !0;
  let n;
  try {
    n = await _(e, { bigint: !0 });
  } catch {
    return !1;
  }
  if (!n.isDirectory()) return !1;
  if (n.ino === 0n) return !0;
  let r;
  try {
    r = await F(e);
  } catch {
    return !0;
  }
  try {
    let s = await _(r, { bigint: !0 });
    return s.ino === 0n || s.dev !== n.dev || s.ino !== n.ino;
  } catch {
    return !0;
  }
}
async function qt(e, n) {
  if (sJn(n)) return !1;
  let r = n.replace(oJn, ""),
    s = e;
  for (let a of r.split("/").filter(Boolean)) {
    s = Te(s, a);
    let c;
    try {
      c = await jt(s);
    } catch (l) {
      let g = E(l);
      if (g === "ENOENT" || g === "ENOTDIR") return !0;
      return (
        t(
          `Marketplace entry ${hi(s)} refused: lstat failed (${E(l) ?? Mt(d(l), 160)}) while walking a tree realpath cannot judge`
        ),
        !1
      );
    }
    if (!c.isDirectory())
      return (
        t(
          `Marketplace entry ${hi(s)} refused: ${c.isSymbolicLink() ? "a symlink" : "not a directory"} under a marketplace directory realpath cannot judge; only plain directories are allowed there`
        ),
        !1
      );
  }
  return !0;
}
async function Zt(e, n) {
  if (O() === "windows") return !0;
  let r = (f) => (
      t(
        `Marketplace entry ${hi(n)} refused: ${f} (its declared spelling does not provably open inside ${hi(e)})`
      ),
      !1
    ),
    s = (f) => E(f) ?? Mt(d(f), 160),
    a;
  try {
    a = await F(n);
  } catch (f) {
    let m = E(f);
    if (m !== "ENOENT" && m !== "ENOTDIR") return r(`realpath failed (${s(f)})`);
    try {
      await _(n);
    } catch (h) {
      let w = E(h);
      return w === "ENOENT" || w === "ENOTDIR" ? !0 : r(`stat failed (${s(h)})`);
    }
    return r("it exists but realpath cannot resolve it as spelled");
  }
  let c;
  try {
    c = await Promise.all([_(n, { bigint: !0 }), _(a, { bigint: !0 })]);
  } catch (f) {
    return r(`stat failed (${s(f)})`);
  }
  let [l, g] = c;
  if (l.ino === 0n || g.ino === 0n) return r("the filesystem reports no inode number");
  if (l.dev !== g.dev || l.ino !== g.ino)
    return r(`its spelling opens a different file from the one realpath names (${hi(a)})`);
  if (!xf(e, a)) return r(`it opens ${hi(a)}, outside the marketplace directory`);
  return !0;
}
function U(e) {
  return e === "location-refused"
    ? `its marketplace's recorded location ${Ret}`
    : "its marketplace entry path does not stay inside the marketplace directory (an absolute, climbing, network-shaped, backslash-containing or link-traversing entry, an entry of a fetched marketplace that resolves or opens outside its tree \u2014 or a relative entry in a url-catalog marketplace, which has no local directory)";
}
function w3s(e) {
  switch (e.kind) {
    case "ok":
    case "location-missing":
      return e.entryPath === void 0
        ? { entryPath: void 0, reason: U("entry-refused") }
        : { entryPath: e.entryPath };
    case "location-error":
      return e.entryPath !== void 0
        ? { entryPath: e.entryPath }
        : e.entryRefusedLexically
          ? { entryPath: void 0, reason: U("entry-refused") }
          : {
              entryPath: void 0,
              reason: `its marketplace directory could not be examined (${E(e.error) ?? "unknown error"})`
            };
    case "location-refused":
    case "entry-refused":
      return { entryPath: void 0, reason: U(e.kind) };
  }
}
function D2e(e) {
  switch (e.kind) {
    case "ok":
      return { entryPath: e.entryPath };
    case "location-missing":
      return { entryPath: void 0, reason: "its marketplace directory does not exist" };
    case "location-error":
      return {
        entryPath: void 0,
        reason: `its marketplace directory could not be examined (${E(e.error) ?? "unknown error"})`
      };
    case "location-refused":
    case "entry-refused":
      return { entryPath: void 0, reason: U(e.kind) };
  }
}
async function lV(e, n, r, s, a, c, l) {
  return Bjr(n, r, {
    ...(Ue(e, s, a) ?? { marketplaceSource: void 0, corroboratingSource: void 0 }),
    storageV5: c,
    localMarketplaceSpace: l
  });
}
function Ue(e, n, r) {
  let { marketplace: s } = On(e);
  if (!s) return;
  let a = Object.hasOwn(r, s) ? r[s]?.source : void 0;
  return {
    marketplaceSource: (n !== void 0 && Object.hasOwn(n, s) ? n[s]?.source : void 0) ?? a,
    corroboratingSource: a
  };
}
var Jt = /[\\/]marketplace\.json$/i;
function Xt(e, n, r) {
  if (r === !0) return e;
  if (n?.source === "url" || (n === void 0 && /\.json$/i.test(e))) return r === !1 ? void 0 : e;
  return r === !1 || Jt.test(e) ? N(e) : e;
}
function xet(e, n, r) {
  switch (e.kind) {
    case "location-refused":
      return { code: "marketplace_location_refused", message: zt(n) };
    case "location-missing":
      return {
        code: "marketplace_dir_missing",
        message: `Marketplace directory not found at path: ${hi(n)}`
      };
    case "location-error":
      return {
        code: "marketplace_dir_unreadable",
        message: `Marketplace directory could not be read at path: ${hi(n)} (${E(e.error) ?? "unknown error"})`
      };
    case "entry-refused":
      return {
        code: "marketplace_entry_path_refused",
        message: Yt(r) + (e.cause === "plain-directory-walk" ? Qt : "")
      };
  }
}
var Qt =
  " The marketplace directory's own path cannot be resolved reliably on this platform (for example, a backslash in one of its components), so only plain directories are accepted as entries there (no links); move the marketplace (or the plugins directory) to a plain path to lift that.";
import { basename as je, isAbsolute as sn, join as k, relative as an, sep as ln } from "path";
import { resolve as tn } from "path";
function Pet(e) {
  let n = tn(e).normalize("NFC");
  return O() === "windows" ? n.toLowerCase() : n;
}
function jjr(e, n, r, s) {
  let a = new Map();
  if (Buffer.byteLength(n) > r) return (t(`Ignoring ${e}: larger than the size cap`), a);
  let c;
  try {
    c = te(n);
  } catch {
    return (t(`Ignoring ${e}: not valid JSON`), a);
  }
  if (typeof c !== "object" || c === null || Array.isArray(c))
    return (t(`Ignoring ${e}: not a JSON object`), a);
  for (let [l, g] of Object.entries(c)) {
    let f = s(g);
    if (f !== void 0) a.set(Pet(l), f);
  }
  return a;
}
var SWt = ".meta.json",
  H2e = "server_plugin_id",
  iJn = "marketplace_name",
  aJn = "installation_preference",
  Fe = new RegExp(`^(?!\\s)(?![\\s\\S]*\\s$)[^@${Hb}]{1,128}$`, "u");
function djo(e) {
  return Fe.test(e);
}
var Wjr = /^plugin_(?:staging_|local_)?[A-Za-z0-9]{1,64}$/;
function hce(e) {
  return Wjr.test(e);
}
var nn = p(() =>
    u({
      [H2e]: o()
        .regex(Wjr)
        .optional()
        .catch(void 0),
      [iJn]: o()
        .regex(Fe)
        .optional()
        .catch(void 0),
      [aJn]: YXn()
        .optional()
        .catch(void 0)
    })
  ),
  cjo = 4096;
async function ujo(e) {
  let n = e + SWt,
    r = await bl(n, cjo);
  if (r === null) return {};
  let s;
  try {
    s = te(r);
  } catch {
    return (t(`Ignoring plugin attribution sidecar at ${n}: not valid JSON`), {});
  }
  return Be(s, `sidecar at ${n}`);
}
function Be(e, n) {
  let r = nn().safeParse(e);
  if (!r.success) return (t(`Ignoring plugin attribution ${n}: not a JSON object`), {});
  let s = {},
    a = r.data[H2e];
  if (typeof a === "string" && hce(a)) s.serverPluginId = a;
  let c = r.data[iJn];
  if (typeof c === "string" && djo(c)) s.marketplaceName = c;
  let l = xjr(r.data[aJn]);
  if (l !== void 0) s.installationPreference = l;
  if (typeof e === "object" && e !== null) {
    for (let [g, f] of [
      [H2e, s.serverPluginId],
      [iJn, s.marketplaceName],
      [aJn, s.installationPreference]
    ])
      if (g in e && f === void 0) t(`Ignoring plugin attribution field (${n}): invalid ${g}`);
  }
  return s;
}
var rn = 65536;
function on(e) {
  let n = i.CLAUDE_CODE_PLUGIN_ATTRIBUTION;
  if (n === void 0) return;
  return jjr("CLAUDE_CODE_PLUGIN_ATTRIBUTION", n, rn, (r) =>
    Be(r, "CLAUDE_CODE_PLUGIN_ATTRIBUTION entry")
  ).get(Pet(e));
}
async function lJn(e) {
  return on(e) ?? (await ujo(e));
}
var t0 = "manifest.json",
  wWt = ".marketplaces.json",
  un = /^[A-Za-z0-9_-]{1,128}$/;
function Wye(e) {
  return un.test(e);
}
var ae = ".marketplace-";
function fjo(e) {
  if (!Wye(e)) throw Error("claude.ai marketplace id is not a tagged id");
  return `${ae}${e}.json`;
}
function v3s(e) {
  return e.startsWith(ae) && e.endsWith(".json") && Wye(e.slice(ae.length, -5));
}
var E3s = ".last-complete-round";
function Gjr(e, n = { pid: process.pid, procStart: void 0 }) {
  return `${n.pid}:${n.procStart ?? ""}/${e}`;
}
function uSt(e) {
  let n = e.indexOf("/");
  if (n === -1) return { name: e, ownerPid: void 0, ownerProcStart: void 0 };
  let r = e.slice(0, n),
    s = r.indexOf(":"),
    a = s === -1 ? r : r.slice(0, s),
    c = s === -1 ? "" : r.slice(s + 1),
    l = Number(a);
  return {
    name: e.slice(n + 1),
    ownerPid: Number.isInteger(l) && l > 0 ? l : void 0,
    ownerProcStart: c || void 0
  };
}
class Iet extends Error {
  constructor() {
    super("synced item name is a legacy alias of a reserved path");
    this.name = "LegacyReservedSpellingError";
  }
}
var zG = "synced",
  zjr = ".trash",
  u7 = ".staging",
  le = "unbound",
  cn = /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
function fSt(e) {
  return cn.test(e);
}
function H(e, n) {
  return `${e.toLowerCase()}_${n?.toLowerCase() ?? le}`;
}
function ue(e) {
  let [n, r, ...s] = e.split("_");
  if (s.length > 0 || n === void 0 || r === void 0 || !fSt(n) || !(r === le || fSt(r))) return null;
  return { org: n, account: r };
}
function L2e(e) {
  return ue(e) !== null;
}
function Oet(e) {
  return ue(e)?.org ?? null;
}
var dn = ".bucket-";
function Kjr(e, n) {
  return k(e, `${dn}${n}`);
}
function k3s(e) {
  let n = ue(e);
  if (n === null) return null;
  return n.account === le ? "<org>_unbound" : "<org>_<account>";
}
var Ke = /~g(?:[2-9]|[1-9]\d+)$/;
function Met(e) {
  return e.replace(Ke, "");
}
function vWt(e) {
  return e.replace(/[. ]+$/, "");
}
function ze(e) {
  let n = vWt(e.replace(/[<>:"|?*\\/]/g, "_"));
  if (!n) throw Error("synced item name resolves to sync root");
  return n;
}
function pn(e, n) {
  let r = k(n, e),
    s = an(n, r);
  if (!s || sn(s) || s === ".." || s.startsWith(`..${ln}`))
    throw Error("synced item name escapes the sync root");
  return r;
}
function _p(e) {
  return e
    .replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "")
    .replace(/\u1e9e/g, "\xDF")
    .normalize("NFD")
    .toUpperCase()
    .toLowerCase();
}
var gn = /^[!-~]+$/,
  fn = 32,
  dJn = 512,
  mn = 16777216,
  hn;
function ty(e) {
  if (gn.test(e)) return e.toLowerCase();
  if (e.length < fn || e.length > dJn) return He(e);
  let n = (hn ??= m2(
      new Ac({ max: 8192, maxSize: mn, sizeCalculation: (s, a) => a.length + s.length })
    )),
    r = n.get(e);
  if (r === void 0) ((r = He(e)), n.set(gYt(e), r));
  return r;
}
function He(e) {
  return _p(
    Les(
      pW(Nb(e))
        .replace(/[\p{Z}\p{Cc}\p{Cf}\p{Default_Ignorable_Code_Point}\u2800]/gu, "")
        .replace(/[\p{Pd}\u2212]/gu, "-")
        .replace(/[\ua789\u2236\u0589\u05c3\u02d0]/g, ":")
    )
  );
}
function B8(e) {
  return pl(e).startsWith(".");
}
function pjo(e) {
  return pl(e) === ".git";
}
function BY(e) {
  return _p(vWt(e)) === zG;
}
function j8(e, n) {
  let r = ze(e);
  if (Cn(r) !== r) throw Error("synced item name contains display-hazard characters");
  if (B8(r)) throw Error("synced item name resolves to reserved path");
  if (_p(r).endsWith(SWt)) throw Error("synced item name resolves to reserved path");
  if (Ke.test(_p(r))) throw Error("synced item name resolves to reserved path");
  if (L2e(_p(r))) throw Error("synced item name resolves to reserved path");
  return pSt(e, n);
}
function mjo(e, n, r) {
  let s = j8(e, r);
  return n <= 1 ? s : k(r, `${je(s)}~g${n}`);
}
function pSt(e, n) {
  let r = ze(e),
    s = _p(pl(r));
  if (s === t0 || s === u7) {
    let a = r.toLowerCase();
    if (a === t0 || a === u7) throw Error("synced item name resolves to reserved path");
    throw new Iet();
  }
  if (Ge(s)) {
    if (Ge(r.toLowerCase())) throw Error("synced item name resolves to reserved path");
    throw new Iet();
  }
  return pn(r, n);
}
function Ge(e) {
  let n = Ze(e, ".").replace(/ +$/, "");
  return /~\d/.test(e) || lCt.test(n);
}
function cJn(e, n) {
  let r;
  try {
    r = JSON.parse(e);
  } catch {
    return "claim-all";
  }
  if (!Array.isArray(r?.skills)) return "claim-all";
  if (r.staleDirs !== void 0 && !Array.isArray(r.staleDirs)) return "claim-all";
  if (r.pendingClaims !== void 0 && !Array.isArray(r.pendingClaims)) return "claim-all";
  let s = new Set(),
    a = r.skills.flatMap((l) =>
      typeof l === "object" && l !== null && typeof l.name === "string" ? [l.name] : []
    ),
    c = (r.pendingClaims ?? []).flatMap((l) => (typeof l === "string" ? [uSt(l).name] : []));
  for (let l of [a, r.staleDirs, c])
    if (Array.isArray(l)) {
      for (let g of l) if (typeof g === "string") for (let f of yn(g, n)) s.add(f);
    }
  return s;
}
function yn(e, n) {
  let r = [EWt(e)];
  try {
    r.push(EWt(je(pSt(e, n))));
  } catch {}
  return r;
}
function EWt(e) {
  return _p(pl(e));
}
var J1 = k("skills", zG),
  Det = k("skills", zjr),
  uJn = k("skills", u7),
  T3s = k(J1, u7),
  Q1 = k("plugins", zG),
  N2e = k("plugins", zjr),
  A3s = k(Q1, u7);
function C(e) {
  return e !== void 0 && fSt(e) ? e : null;
}
function kn() {
  return C(i.CLAUDE_CODE_ORGANIZATION_UUID ?? uf()?.organizationUuid);
}
function Ye() {
  return C(uf()?.organizationUuid);
}
async function n0(e) {
  let n = kn();
  if (n === null) return null;
  switch (await Lh(e)) {
    case "store":
      return kWt();
    case "none":
      if (ua().source === "claude.ai") return null;
      return H(n, C(i.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
    case "env":
    case "fd":
      return H(n, C(i.CLAUDE_CODE_ACCOUNT_UUID) ?? void 0);
  }
}
function kWt() {
  let e = uf(),
    n = C(i.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid),
    r = C(e?.accountUuid);
  return n === null || r === null ? null : H(n, r);
}
function C3s() {
  return ua().source === "claude.ai" ? kWt() : null;
}
function gmn() {
  let e = uf();
  return `${i.CLAUDE_CODE_ORGANIZATION_UUID ?? e?.organizationUuid ?? ""}_${e?.accountUuid ?? i.CLAUDE_CODE_ACCOUNT_UUID ?? ""}`;
}
var qe = { source: "pluginDirectory" };
function Fm(e) {
  let n = pe("policySettings")?.enabledPlugins;
  return [e, Eqt(e) ?? e].some((r) => _9(n, r) === !1);
}
function r0() {
  let e = pe("policySettings");
  if (!e?.strictKnownMarketplaces) return null;
  return e.strictKnownMarketplaces;
}
function Bre() {
  if (D()?.some((n) => n.source === "skills-dir")) return !1;
  let e = r0();
  return e === null || e.some((n) => n.source === "skills-dir");
}
function hmn(e) {
  return `Plugins from ${e}/ are blocked by your organization's managed settings (strictKnownMarketplaces or blockedMarketplaces). Ask your administrator to add {"source":"skills-dir"} to strictKnownMarketplaces, or remove it from blockedMarketplaces.`;
}
function KG() {
  return pe("policySettings")?.disableSideloadFlags === !0;
}
function BO() {
  if (Iy() === "unanswered") return !0;
  return Vjr();
}
function Vjr() {
  let e = pe("policySettings");
  if (e?.disableCommandPluginSources !== void 0) return e.disableCommandPluginSources === !0;
  if (e?.allowManagedHooksOnly !== !0) return !1;
  let n = a9o();
  return !(
    n?.disableAllHooks === !0 &&
    n.allowManagedHooksOnly !== !0 &&
    !l9o() &&
    !U5r().some((r) => r.allowManagedHooksOnly === !0)
  );
}
function fJn() {
  {
    let e = pe("policySettings")?.disablePluginDirectory;
    return e !== void 0 && e !== !1;
  }
  return !1;
}
function eS() {
  {
    if (fJn()) return "managed_setting";
    if (CWt(qe)) return "blocklist";
    if (!Ou(qe)) return "allowlist";
    let e = bR("allow_plugin_directory_search");
    return e === "org_denied" || e === "latched" ? "policy_limit" : null;
  }
  return null;
}
function CU() {
  let e = eS();
  return e === null ? "" : ee(e);
}
function mSt(e) {
  let n = (D() ?? []).filter(ce),
    r = (r0() ?? []).filter(ce);
  if (n.length === 0 && r.length === 0) return !1;
  if (e === void 0) return !0;
  let s = { source: "git", url: e },
    a = it(s);
  if (zvn(e) || f6(e) || A(e) || a === null || a === "") return !0;
  if (n.some((l) => !ot(l.hostPattern) || ge(s, l, { blocklistDirection: !0 }))) return !0;
  let c = /^https:\/\//i.test(e);
  return r.length > 0 && !(c && a !== "" && r.some((l) => st(a, l.hostPattern)));
}
function gSt() {
  return ek() !== "remote" || Pqt();
}
function pJn() {
  return !qY();
}
var mJn =
  "it is declared by remotely managed settings that this session could not verify with the server, or that have not been approved on this machine yet \u2014 make sure Claude Code can reach your managed-settings server, and approve the managed-settings dialog once in an interactive session (or ask your admin)";
function rLe(e, n) {
  if (Iy() === "unanswered") return "organization_unanswered";
  if (!BO()) return null;
  if (e === void 0 || !pJn()) return "lockdown";
  if (!gSt()) return "remote_policy_unconsented";
  let r = pe("policySettings")?.extraKnownMarketplaces ?? {};
  if (e.source === "settings" && n !== void 0)
    return (Object.hasOwn(r, n) ? r[n] : void 0)?.source.source !== "settings" ? "lockdown" : null;
  return Object.values(r).some((s) => K(e, s.source)) ? null : "lockdown";
}
function gjo(e, n) {
  return rLe(e, n) !== null;
}
function ymn(e, n = []) {
  let r = n.length > 0 ? `: ${n.map((a) => Bh(a)).join(", ")}` : "",
    s =
      Iy() === "unanswered"
        ? "(waiting for your organization's settings)"
        : "(managed policy) \u2014 ask your admin";
  return `${e} ${I(e, "marketplace")} not updated ${s}${r}`;
}
var Pn =
  "Command-sourced plugins are disabled by your organization's managed settings (disableCommandPluginSources / allowManagedHooksOnly). The plugin was not installed or updated and its command was not run.";
function Het(e) {
  if (Iy() === "unanswered") {
    let n = Ie().organizationAsk;
    ((n.isCommandHeld = !0), (n.isMarketplaceHeld ||= e === "marketplace"));
  }
}
function f7() {
  return Iy() === "unanswered"
    ? "Command-sourced plugins aren't running in this session yet. Your organization's settings haven't been read, so it isn't known whether it allows them. The plugin was not installed or updated and its command was not run. They'll run once your organization's settings are read, if it allows them."
    : Pn;
}
var qjr = "disabled by your organization's managed settings (disableSideloadFlags)";
function $2e(e) {
  return `${e.join(", ")} ${e.length === 1 ? "is" : "are"} ${qjr}. Plugins, custom agents, and MCP servers can only be loaded from sources your administrator has approved. Ask your administrator to remove disableSideloadFlags from managed settings, or use an approved marketplace / settings file instead.`;
}
function D() {
  let e = pe("policySettings");
  if (!e?.blockedMarketplaces) return null;
  return e.blockedMarketplaces;
}
function oLe() {
  let e = D();
  return (
    r0() !== null ||
    (e !== null && e.some((n) => n.source !== "skills-dir" && n.source !== "pluginDirectory"))
  );
}
function VG(e) {
  return e === void 0 ? oLe() : !Ou(e);
}
function Yjr() {
  return pe("policySettings")?.pluginTrustMessage;
}
function _mn() {
  return pe("policySettings")?.pluginSuggestionMarketplaces ?? [];
}
function bmn(e, n) {
  let r = dse(),
    s = r?.extraKnownMarketplaces?.[e]?.source;
  if (s && K(n, s)) return !0;
  return Vrt(r?.strictKnownMarketplaces)?.some((a) => fe(n, a)) ?? !1;
}
function hjo(e, n) {
  let r = or(e);
  return Object.keys(n?.extraKnownMarketplaces ?? {}).some((s) => or(s) === r);
}
function TWt(e, n, r) {
  if (e.source === "claudeai") {
    let g = Ye();
    return (
      g !== null &&
      e.organizationUuid.toLowerCase() === g.toLowerCase() &&
      (e.scope === "org" || e.scope === "default")
    );
  }
  let s = r ? r.policySettings : dse(),
    a = r?.declaredUnder,
    c = s?.extraKnownMarketplaces,
    l = Uot(e);
  if (l === null) return !1;
  if (l.source === "npm" && (l.registry === void 0 || !rxe(l.package))) return !1;
  if (
    l.source === "settings" &&
    l.plugins.some((g) => {
      if (typeof g.source !== "object") return !0;
      switch (g.source.source) {
        case "npm":
          return g.source.registry === void 0 || !rxe(g.source.package);
        case "url":
        case "github":
        case "git-subdir":
        case "archive":
          return !1;
        default:
          return !0;
      }
    })
  )
    return !1;
  if (
    c !== void 0 &&
    Object.entries(c).some(([g, f]) => {
      if (a !== void 0 && or(g) !== or(a)) return !1;
      let m = rJn(f.source, n),
        h = Uot(m);
      return h !== null && K(l, h) && Je(l, h);
    })
  )
    return !0;
  if (a !== void 0) return !1;
  return (
    Vrt(s?.strictKnownMarketplaces)?.some((g) => {
      if (
        g.source === "hostPattern" ||
        g.source === "pathPattern" ||
        g.source === "pluginDirectory"
      )
        return !1;
      if (
        l.source === "github" &&
        g.source === "github" &&
        (g.path || void 0) !== (l.path || void 0)
      )
        return !1;
      let f = rJn(g, n),
        m = Uot(f);
      return m !== null && fe(l, m) && Je(l, m);
    }) ?? !1
  );
}
function Je(e, n) {
  if (e.source !== "npm") return !0;
  if (n.source !== "npm" || e.registry === void 0 || n.registry === void 0) return !1;
  let r = Xe(e.registry),
    s = Xe(n.registry);
  return r !== null && r === s;
}
function Xe(e) {
  let n;
  try {
    n = new URL(e);
  } catch {
    return null;
  }
  if (((n.hostname = iSe(n.hostname)), !n.pathname.endsWith("/"))) n.pathname = `${n.pathname}/`;
  return n.toString();
}
function yjo(e) {
  let n = Vrt(dse()?.strictKnownMarketplaces);
  if (!n) return !1;
  let r;
  try {
    r = new URL(e.tarballUrl);
  } catch {
    return !1;
  }
  let s = ut(r);
  if (s === null) return !1;
  return n.some(
    (a) => a.source === "npm" && a.registry !== void 0 && lt(a, e.packageName, r, s, "allow")
  );
}
function Smn(e) {
  if (e.source !== "github" && e.source !== "git") return !1;
  if (e.source === "git") {
    if (e.url.includes("://")) {
      let n;
      try {
        n = new URL(e.url).protocol;
      } catch {
        n = null;
      }
      if (n === null || !bn.has(n)) return !1;
    } else if (xEn(e.url) === null) return !1;
  }
  return sQo(e) && (e.ref || void 0) === void 0 && (e.path || void 0) === void 0;
}
var bn = new Set(["https:", "ssh:", "git+https:", "git+ssh:"]);
function K(e, n) {
  if (e.source !== n.source) return !1;
  switch (e.source) {
    case "url":
      return Gye(e.url) === Gye(n.url);
    case "github":
      return (
        e.repo.toLowerCase() === n.repo.toLowerCase() &&
        (e.ref || void 0) === (n.ref || void 0) &&
        (e.path || void 0) === (n.path || void 0)
      );
    case "git": {
      let r = n.url;
      return (
        (A(e.url) || A(r) ? e.url === r : _3r(e.url) === _3r(r)) &&
        (e.ref || void 0) === (n.ref || void 0) &&
        (e.path || void 0) === (n.path || void 0)
      );
    }
    case "npm":
      return e.package === n.package;
    case "file":
      return e.path === n.path;
    case "directory":
      return e.path === n.path;
    case "settings":
      return e.name === n.name && wn(e.plugins, n.plugins);
    case "pluginDirectory":
      return !0;
    default:
      return !1;
  }
}
function AWt(e) {
  let n = En(e);
  return n === null ? null : iSe(n);
}
function En(e) {
  let n = rt(e);
  return n !== null && de(n) ? null : n;
}
function de(e) {
  return e.startsWith("[") && e.endsWith("]") && Uvn(e.slice(1, -1));
}
function A(e) {
  return eX(e);
}
function rt(e) {
  switch (e.source) {
    case "github":
      return vr;
    case "git": {
      if (zvn(e.url)) return null;
      return tpe(e.url)?.host ?? null;
    }
    case "url":
      try {
        return new URL(e.url).hostname;
      } catch {
        return null;
      }
    case "claudeai":
      return "claude.ai";
    default:
      return null;
  }
}
function it(e) {
  if (e.source === "git" && !e.url.includes("://")) {
    let n = xEn(e.url);
    return n ? iSe(n.host) : null;
  }
  return AWt(e);
}
function ge(e, n, r) {
  let s = r?.blocklistDirection ? AWt(e) : it(e);
  if (!s) return !1;
  let a = r?.blocklistDirection && s === h3r ? [s, vr] : [s];
  try {
    let c = new RegExp(n.hostPattern);
    return a.some((l) => c.test(l));
  } catch {
    return (
      t(`Invalid hostPattern regex in policy settings: ${n.hostPattern}`, { level: "error" }),
      !1
    );
  }
}
function ot(e) {
  try {
    return (new RegExp(e), !0);
  } catch {
    return (t(`Invalid hostPattern regex in policy settings: ${e}`, { level: "error" }), !1);
  }
}
function st(e, n) {
  if (!ot(n)) return !1;
  try {
    return new RegExp(`^(?:${n})$`).test(e);
  } catch {
    return !1;
  }
}
function at(e, n) {
  if (e.source !== "file" && e.source !== "directory") return !1;
  try {
    return new RegExp(n.pathPattern).test(e.path);
  } catch {
    return (
      t(`Invalid pathPattern regex in policy settings strictKnownMarketplaces: ${n.pathPattern}`, {
        level: "error"
      }),
      !1
    );
  }
}
function _jo() {
  let e = r0();
  if (!e) return [];
  return e.filter(ce).map((n) => n.hostPattern);
}
function ce(e) {
  return e.source === "hostPattern";
}
function Qe(e) {
  let n = y3r(e);
  if (n !== null && n.includes("*"))
    return (
      t(
        `Invalid owner-wildcard url in policy settings blockedMarketplaces: ${e} (wildcards are only supported in github-form entries, as "<owner>/*"); entry does not match github.com sources`,
        { level: "error" }
      ),
      null
    );
  return n;
}
function Gye(e) {
  try {
    let n = new URL(e);
    return ((n.hostname = iSe(n.hostname)), n.toString());
  } catch {
    return e;
  }
}
function Rn(e, n) {
  let r = e.split("/");
  if (r.length !== 2) return !1;
  let [s, a] = r;
  if (s === void 0 || a === void 0 || !rar(s) || !rar(a)) return !1;
  return s === n;
}
function j(e, n) {
  let r = fQo(n),
    s = Kvn(e);
  if (s === null) {
    if (e.includes("*"))
      t(
        `Invalid owner-wildcard repo in policy settings blockedMarketplaces: ${e} (only "<owner>/*" is supported); entry only matches a literally identical repo string`,
        { level: "error" }
      );
    return r === e || n === e;
  }
  let a = r.split("/");
  if (a.length !== 2) return !1;
  let [c, l] = a;
  if (c === void 0 || l === void 0 || !rar(c) || !uQo.test(l)) return !1;
  return c.toLowerCase() === s.toLowerCase();
}
function et(e) {
  if (e.startsWith("/") || e.startsWith("\\") || /^[A-Za-z]:/.test(e)) return !1;
  return !e.split(/[\\/]/).some((n) => n === "..");
}
function P(e, n) {
  if (!e) return !0;
  return e === (n || void 0);
}
function _n(e, n) {
  if (e.source === n.source)
    switch (e.source) {
      case "github": {
        let r = n;
        if (!j(r.repo, e.repo)) return !1;
        return P(r.ref, e.ref) && P(r.path, e.path);
      }
      case "git": {
        let r = n,
          s = Qe(r.url),
          a = s === null ? null : y3r(e.url);
        if (!(s !== null && a !== null ? j(s, a) : Vvn(e.url) === Vvn(r.url))) return !1;
        return P(r.ref, e.ref) && P(r.path, e.path);
      }
      case "url":
        return Gye(e.url) === Gye(n.url);
      case "npm":
        return e.package === n.package;
      case "file":
        return e.path === n.path;
      case "directory":
        return e.path === n.path;
      case "settings":
        return e.name === n.name;
      case "pluginDirectory":
        return !0;
      default:
        return !1;
    }
  if (e.source === "git" && n.source === "github") {
    let r = y3r(e.url);
    if (r !== null && j(n.repo, r)) return P(n.ref, e.ref) && P(n.path, e.path);
  }
  if (e.source === "github" && n.source === "git") {
    let r = Qe(n.url);
    if (r !== null && j(r, e.repo)) return P(n.ref, e.ref) && P(n.path, e.path);
  }
  if (e.source === "git" && n.source === "url") {
    if (!e.url.includes("://")) return !1;
    let r = { stripDotGit: !0 };
    return Vvn(e.url, r) === Vvn(n.url, r);
  }
  return !1;
}
function CWt(e) {
  let n = D();
  if (n === null) return !1;
  return n.some((r) => {
    if (r.source === "hostPattern") return ge(e, r, { blocklistDirection: !0 });
    if (r.source === "pathPattern") return at(e, r);
    return _n(e, r);
  });
}
function Ou(e) {
  if (e.source === "git" && (zvn(e.url) || A(e.url)) && oLe()) return !1;
  let n = rt(e);
  if (n !== null && de(n) && oLe()) return !1;
  if (e.source === "pluginDirectory" && fJn()) return !1;
  if (CWt(e)) return !1;
  let r = r0();
  if (r === null) return !0;
  return r.some((s) => fe(e, s));
}
function gJn(e) {
  let n = D(),
    r = r0();
  if (n === null && r === null) return null;
  let s;
  try {
    s = new URL(e.tarballUrl);
  } catch {
    s = null;
  }
  let a = Bh(e.packageName);
  if (s === null)
    return `${a} cannot be used: the registry answered with a download URL that could not be parsed, and your organization restricts plugin sources`;
  let c = iSe(s.hostname),
    l = s.port ? `${c}:${s.port}` : c,
    g = ut(s);
  if (g === null)
    return `${a} cannot be used: the registry answered with a download URL whose path climbs or cannot be decoded, and your organization restricts plugin sources`;
  if (de(s.hostname) && oLe())
    return `${a} cannot be used: it downloads from ${l}, an IPv6 spelling of an IPv4 address, which your organization's plugin source rules cannot check. Ask whoever runs the registry to serve it from a hostname or an IPv4 address.`;
  let f = (m) => (h) => {
    switch (h.source) {
      case "npm":
        return lt(h, e.packageName, s, g, m);
      case "hostPattern":
        try {
          return m === "block"
            ? new RegExp(h.hostPattern).test(c)
            : st(c, h.hostPattern) && s.protocol === "https:";
        } catch {
          return (
            t(`Invalid hostPattern regex in policy settings: ${h.hostPattern}`, { level: "error" }),
            m === "block"
          );
        }
      default:
        return !1;
    }
  };
  if (n?.some(f("block")))
    return `${a} cannot be used: it resolves to ${l}, which your organization's managed settings block (blockedMarketplaces)`;
  if (r !== null && !r.some(f("allow")))
    return `${a} cannot be used: it resolves to ${l}, which is not among the plugin sources your organization allows (strictKnownMarketplaces). Ask your administrator to add an npm or hostPattern entry for it.`;
  return null;
}
function lt(e, n, r, s, a) {
  return vn(e.package, n) && (e.registry === void 0 || (xn(r, s, e.registry) ?? a === "block"));
}
function vn(e, n) {
  if (e.endsWith("/*") && e.startsWith("@")) return n.startsWith(e.slice(0, -1));
  return e === n;
}
function ut(e) {
  let n;
  try {
    n = decodeURIComponent(e.pathname);
  } catch {
    return null;
  }
  if (n.includes("\\") || /(^|\/)\.\.?(\/|$)/.test(n)) return null;
  return n;
}
function xn(e, n, r) {
  let s;
  try {
    s = new URL(r);
  } catch {
    return null;
  }
  if (
    e.protocol !== s.protocol ||
    iSe(e.hostname) !== iSe(s.hostname) ||
    (e.port || tt(e.protocol)) !== (s.port || tt(s.protocol))
  )
    return !1;
  let a;
  try {
    a = decodeURIComponent(s.pathname);
  } catch {
    return null;
  }
  if (!a.endsWith("/")) a = `${a}/`;
  return n.startsWith(a);
}
function tt(e) {
  return e === "https:" ? "443" : e === "http:" ? "80" : "";
}
function fe(e, n) {
  if (e.source === "git" && (f6(e.url) || A(e.url))) return !1;
  if (n.source === "hostPattern") {
    if ((e.source === "github" || e.source === "git") && e.path && !et(e.path)) return !1;
    if (e.source === "claudeai" && e.scope !== "org" && e.scope !== "default") return !1;
    return ge(e, n);
  }
  if (n.source === "pathPattern") return at(e, n);
  if (e.source === "github" && n.source === "github") {
    let r = Kvn(n.repo);
    if (r === null && n.repo.includes("*"))
      t(
        `Invalid owner-wildcard repo in policy settings strictKnownMarketplaces: ${n.repo} (only "<owner>/*" is supported); entry only matches a literally identical repo string`,
        { level: "error" }
      );
    if (r !== null)
      return (
        Rn(e.repo, r) &&
        (n.ref || void 0) === (e.ref || void 0) &&
        (n.path ? n.path === (e.path || void 0) : !e.path || et(e.path))
      );
  }
  if (n.source === "skills-dir") return !1;
  return K(e, n);
}
export {
  fWt,
  KXn,
  VXn,
  qXn,
  ejo,
  tjo,
  njo,
  Tet,
  YXn,
  xjr,
  rjo,
  pWt,
  mWt,
  imn,
  Pjr,
  gWt,
  amn,
  tLe,
  I2e,
  BAe,
  nLe,
  ojo,
  gv,
  Ure,
  Ijr,
  lmn,
  Ojr,
  hWt,
  sjo,
  aSt,
  Mjr,
  dmn,
  O2e,
  Djr,
  p3s,
  GG,
  lg,
  lSt,
  X1,
  U8,
  m3s,
  yWt,
  g3s,
  cmn,
  Hjr,
  Ljr,
  umn,
  h3s,
  XXn,
  Aet,
  _$,
  dSt,
  cSt,
  fmn,
  Njr,
  Fd,
  e0,
  _Wt,
  gce,
  Cet,
  pmn,
  ijo,
  JXn,
  y3s,
  QXn,
  _3s,
  ZXn,
  $p,
  M2e,
  eJn,
  mmn,
  b3s,
  tJn,
  Ret,
  YP,
  UY,
  bWt,
  ajo,
  $jr,
  Fjr,
  nJn,
  rJn,
  Ujr,
  S3s,
  jAe,
  ljo,
  oJn,
  sJn,
  Bjr,
  w3s,
  D2e,
  lV,
  xet,
  Pet,
  jjr,
  SWt,
  H2e,
  iJn,
  aJn,
  djo,
  Wjr,
  hce,
  cjo,
  ujo,
  lJn,
  t0,
  wWt,
  Wye,
  fjo,
  v3s,
  E3s,
  Gjr,
  uSt,
  Iet,
  zG,
  zjr,
  u7,
  fSt,
  L2e,
  Oet,
  Kjr,
  k3s,
  Met,
  vWt,
  _p,
  dJn,
  ty,
  B8,
  pjo,
  BY,
  j8,
  mjo,
  pSt,
  cJn,
  EWt,
  J1,
  Det,
  uJn,
  T3s,
  Q1,
  N2e,
  A3s,
  n0,
  kWt,
  C3s,
  gmn,
  Fm,
  r0,
  Bre,
  hmn,
  KG,
  BO,
  Vjr,
  fJn,
  eS,
  CU,
  mSt,
  gSt,
  pJn,
  mJn,
  rLe,
  gjo,
  ymn,
  Het,
  f7,
  qjr,
  $2e,
  oLe,
  VG,
  Yjr,
  _mn,
  bmn,
  hjo,
  TWt,
  yjo,
  Smn,
  AWt,
  _jo,
  Gye,
  CWt,
  Ou,
  gJn
};

//# sourceMappingURL=chunk-p56qmwgb.js.map
