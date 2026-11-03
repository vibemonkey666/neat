// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { He } from "./chunk-1hp0t8kv.js";
import { R, Qe, N, d, E, G } from "./chunk-fs43t96t.js";
import { te, ie, lm, kSe, SA, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { Mt } from "./chunk-adv24f35.js";
import { Kk, Gl, $_, Hyn, tqo, nqo, Evt, Uer, Ber } from "./chunk-d65ze5ng.js";
import { r0e } from "./chunk-0er7yfq4.js";
import { L, ao, ru, no, ye, yS, hT } from "./chunk-wrtp8qz8.js";
import { si } from "./chunk-4hww8411.js";
import { Qr } from "./chunk-jazcqqqr.js";
import { uk, rl, i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { q0 } from "./chunk-jtb5bzvb.js";
import { sW, Os } from "./chunk-qywdxehb.js";
import { Y$ } from "./chunk-13nwb0xt.js";
import { p } from "./chunk-qmkm2x59.js";
import { so, TI } from "./chunk-5rw2zfa0.js";
import { er } from "./chunk-1e5yp9hx.js";
import { Qqt } from "./chunk-928ws1pg.js";
import { ln, pe, Un, Sa } from "./chunk-7c3thgax.js";
import { _l } from "./chunk-at88wjsn.js";
import { o2 } from "./chunk-7zgz07kc.js";
import { Sl, Kn } from "./chunk-x8k0r295.js";
import { nC, LKe, E_e, hoe, JLe, xKr, xVo } from "./chunk-gq77tz5k.js";
import { jVo, ZZs, WVo } from "./chunk-pbffp8rf.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { mu } from "./chunk-64ygy579.js";
import { xvt } from "./chunk-m5htsswa.js";
import { $p, M2e } from "./chunk-p56qmwgb.js";
import { hde } from "./chunk-a51vwwqx.js";
import { FD, kY } from "./chunk-14daspfw.js";
import { IY } from "./chunk-d89f5ek5.js";
import { P_e, lue, o2t } from "./chunk-mg0tfavz.js";
import { to } from "./chunk-vjef4vba.js";
import { o, v, u } from "./chunk-0bqrj5ah.js";
import { ve } from "./chunk-vk5p9xv3.js";
var De = ve(new Map(), (e) => e.clear());
var Le = ve(new Set(), (e) => e.clear());
function X(e, r, n) {
  let s = `${e.name}#${e.environmentId} ${r}`,
    a = De.get(s) ?? 0;
  if (a >= nqo) return;
  De.set(s, a + 1);
  let f = Hyn(e.matcherFor(r), n);
  if (f === void 0) return;
  let m = `${s} ${f.path}`;
  if (Le.has(m)) return;
  (Le.add(m), Gl().log(tqo(e.name, r, f), "warn"));
}
function qNr(e, r, n) {
  let s = e.matcherFor(r),
    a = e.hopKey.kind === "worker";
  if (s === void 0) return !0;
  let f = r0e(r),
    m = a ? Uer(s, n, f) : Evt(s, n, f);
  if (!m) X(e, r, n);
  return m;
}
function ge(e, r, n) {
  let s = e.findIndex((f) => qNr(f, r, n));
  return s === -1 ? [] : e.slice(s);
}
function oe(e, r, n) {
  let s = $_(n)
    ? Object.fromEntries(
        (hoe(r).pinnedKeys ?? []).filter((a) => Object.hasOwn(n, a)).map((a) => [a, n[a]])
      )
    : {};
  return e.catches(r, void 0, (a) => Ber(a, s, r0e(r)));
}
function Z(e, r) {
  let n = [];
  for (let s of e) {
    if (!mu(s)) {
      t(
        `hooks module ${s.label}: judged under a policy text other than the one in force (during ${r}); passing on`
      );
      continue;
    }
    let a = s.status();
    if (a.kind !== "live") {
      let f = a.kind === "retiring" || (a.kind === "unloaded" && a.retired),
        m = a.kind === "unloaded";
      t(
        `hooks module ${f ? `${s.label}: its environment was retired by a reload during ${r}` : m ? `${s.label}: its environment was unloaded (during ${r})` : `${s.label}: ${a.reason} (during ${r})`}; passing on`
      );
      continue;
    }
    n.push(s);
  }
  return n;
}
var he = (e, r, n) => ge(Z(e, r), r, n);
var r5n = ve(to(), (e) => e.set(void 0));
var gde = ve(to(), (e) => e.set(void 0));
var XUt = ve(to(), (e) => e.set(void 0));
function WHo() {
  return i.CLAUDE_CODE_PLUGIN_DIR_WATCH ?? !ye();
}
import { resolve as ke } from "path";
function zNr(e) {
  let r = new Set((gde.get() ?? []).map((s) => ke(s))),
    n = new Set((XUt.get() ?? []).map((s) => ke(s)));
  return e.filter((s) => r.has(ke(s)) || !n.has(ke(s)));
}
import { resolve as ze } from "path";
function KNr(e) {
  if (WHo()) return zNr(e);
  let r = new Set((gde.get() ?? []).map((s) => ze(s)));
  return i.CLAUDE_CODE_PLUGIN_DIR_WATCH === !1 ? [] : e.filter((s) => r.has(ze(s)));
}
var VNr = () => [...yS(), ...hT()];
var $he = () => KNr(VNr()).length > 0;
var o5n = 1e4;
function BGe(e) {
  return e.length <= o5n ? e : `${re(e, o5n)}\u2026`;
}
var We = 100;
function f8(e, r, n = "again") {
  let s = BGe(r),
    a = Ie();
  if ((t(`[${e}] $.ui.log: ${s}`), a.uiLogSink)) {
    a.uiLogSink({ plugin: e, text: s }, n);
    return;
  }
  if (a.pendingUiLog.length < We) a.pendingUiLog = [...a.pendingUiLog, { plugin: e, text: s }];
}
function vG(e, r, n = "again") {
  if ($he()) {
    f8(e, re(r, nC), n);
    return;
  }
  t(`${e}: ${r}`, { level: "error" });
}
var Re = (e, r) =>
  e.filter((n) => {
    let s = n.status();
    return s.kind === "dead" && s.reason === r;
  });
var s5n = (e) => typeof e !== "string" && "rewritten" in e;
function GHo(e) {
  let r = s5n(e),
    n = r ? e.of : e,
    a = typeof n === "string" ? [n] : [n.plugin, n.registration];
  return JSON.stringify([r, ...a]);
}
function xe(e, r, n) {
  let s = typeof e === "string",
    a = !s && "plugin" in e;
  return s ? e : a ? r(e) : n;
}
var i5n = (e) => xe(e, (r) => `${r.plugin}#${r.registration}`, "/rewritten beneath");
var a7e = (e) => xe(e, (r) => r.plugin, void 0);
function we(e, r) {
  let n = new Set();
  for (let s of e ?? []) {
    if (a7e(s) !== r) continue;
    if (typeof s === "string") return "every";
    if ("registration" in s) n.add(s.registration);
  }
  return [...n].sort((s, a) => s - a);
}
function et(e, r) {
  let n = e ?? [],
    s = n.length - 1;
  return { caller: we(n.slice(s), r), above: we(n.slice(0, s), r) };
}
function nzs(e, r) {
  if (typeof e === "string" || typeof r === "string") return e === r;
  let s = "plugin" in e && "plugin" in r,
    a = "rewritten" in e && "rewritten" in r;
  return s ? e.plugin === r.plugin && e.registration === r.registration : a && nzs(e.of, r.of);
}
var Syt = Qr(() => new WeakMap());
var ebi = (e) => (e ?? []).map(GHo).join(" > ");
var YNr = (e) => (e ?? []).map(i5n).join(" > ");
var tbi = (e) => Object.freeze({ rewritten: !0, of: e });
var Rdn = ({ name: e, method: r }) => `$.${e}.${r}`;
var zHo = (e) => Array.from(e).join(",") || "none";
var nbi = "the hooks worker was replaced; the plugin stays loaded for its .catch";
var wyt = (e) => e.map((r) => r.label).join(", ");
function xdn({ pluginName: e, pluginStorageId: r }) {
  return r.startsWith(`${e}@`) ? r : `${r}+${e}`;
}
var rzs = (e) => `next() result not cloneable: ${d(e)}`;
import { lstat as se, rmdir as At } from "fs/promises";
import { basename as ae, dirname as fe } from "path";
import { createHash as Ue } from "crypto";
import { chmod as Tt, writeFile as je } from "fs/promises";
import { dirname as Ft, join as B } from "path";
async function pt(e) {
  let { McpbManifestSchema: r } = await import("./chunk-hwh6c1mz.js"),
    n = r.safeParse(e);
  if (!n.success) {
    let s = n.error.flatten(),
      a = [
        ...Object.entries(s.fieldErrors).map(([f, m]) => `${f}: ${m?.join(", ")}`),
        ...(s.formErrors || [])
      ]
        .filter(Boolean)
        .join("; ");
    throw new R(`Invalid manifest: ${a}`, "MCPB manifest schema validation failed");
  }
  return n.data;
}
async function lt(e) {
  let r;
  try {
    r = te(e);
  } catch (n) {
    throw Error(`Invalid JSON in manifest.json: ${d(n)}`);
  }
  return pt(r);
}
async function Ae(e) {
  let r = new TextDecoder().decode(e);
  return lt(r);
}
import { isAbsolute as ut, normalize as dt } from "path";
import { inflateRawSync as gt } from "zlib";
var K = {
  MAX_FILE_SIZE: 536870912,
  MAX_TOTAL_SIZE: 1073741824,
  MAX_FILE_COUNT: 1e5,
  MAX_COMPRESSION_RATIO: 50
};
function n5n(e) {
  if (q0(e)) return !1;
  for (let n of e.split(/[/\\]/)) if (/^\.\. [ .]*$/.test(n)) return !1;
  let r = dt(e);
  if (ut(r)) return !1;
  return !0;
}
function ht(e, r) {
  r.fileCount++;
  let n;
  if (r.fileCount > K.MAX_FILE_COUNT)
    n = `Archive contains too many files: ${r.fileCount} (max: ${K.MAX_FILE_COUNT})`;
  let s = Mt(e.name, 120);
  if (!n5n(e.name))
    n = `Unsafe file path detected: "${s}". Path traversal or absolute paths are not allowed.`;
  let a = e.originalSize || 0;
  if (a > K.MAX_FILE_SIZE)
    n = `File "${s}" is too large: ${Math.round(a / 1024 / 1024)}MB (max: ${Math.round(K.MAX_FILE_SIZE / 1024 / 1024)}MB)`;
  if (((r.totalUncompressedSize += a), r.totalUncompressedSize > K.MAX_TOTAL_SIZE))
    n = `Archive total size is too large: ${Math.round(r.totalUncompressedSize / 1024 / 1024)}MB (max: ${Math.round(K.MAX_TOTAL_SIZE / 1024 / 1024)}MB)`;
  let f = r.totalUncompressedSize / r.compressedSize;
  if (f > K.MAX_COMPRESSION_RATIO)
    n = `Suspicious compression ratio detected: ${f.toFixed(1)}:1 (max: ${K.MAX_COMPRESSION_RATIO}:1). This may be a zip bomb.`;
  return n ? { isValid: !1, error: n } : { isValid: !0 };
}
async function r7e(e) {
  let r = { fileCount: 0, totalUncompressedSize: 0, compressedSize: e.length, errors: [] },
    n = Ct(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), (s) => {
      let a = ht(s, r);
      if (!a.isValid) throw new R(a.error, "MCPB zip entry validation failed");
    });
  return (
    t(
      `Zip extraction completed: ${r.fileCount} files, ${Math.round(r.totalUncompressedSize / 1024)}KB uncompressed`
    ),
    n
  );
}
var yt = 101010256,
  kt = 101075792,
  xt = 117853008,
  wt = 33639248,
  bt = 65557,
  St = 2048,
  Ht = 0,
  Et = 8;
function I(e) {
  return e === void 0
    ? Error("invalid zip data")
    : new R(`invalid zip data: ${e}`, "invalid zip data");
}
function j(e, r) {
  if (r + 2 > e.length) throw I();
  return e[r] | (e[r + 1] << 8);
}
function U(e, r) {
  if (r + 4 > e.length) throw I();
  return (e[r] | (e[r + 1] << 8) | (e[r + 2] << 16) | (e[r + 3] << 24)) >>> 0;
}
function _e(e, r) {
  return U(e, r) + U(e, r + 4) * 4294967296;
}
function Ot(e) {
  let r = "";
  for (let n = 0; n < e.length; n += 16384) r += String.fromCharCode(...e.subarray(n, n + 16384));
  return r;
}
function Ct(e, r) {
  let n = {},
    s = e.length - 22;
  while (s < 0 || U(e, s) !== yt) {
    if (s <= 0 || e.length - s > bt) throw I();
    s--;
  }
  let a = j(e, s + 8);
  if (a === 0) return n;
  let f = U(e, s + 16),
    m = !1;
  if ((f === 4294967295 || a === 65535) && s >= 20 && U(e, s - 20) === xt) {
    let g = U(e, s - 12);
    if (g + 56 <= e.length && U(e, g) === kt) ((m = !0), (a = U(e, g + 32)), (f = U(e, g + 48)));
  }
  let c = new TextDecoder();
  for (let g = 0; g < a; g++) {
    if (U(e, f) !== wt) throw I();
    let h = j(e, f + 8),
      k = j(e, f + 10),
      x = j(e, f + 28),
      y = j(e, f + 30),
      b = j(e, f + 32),
      w = f + 46;
    if (w + x > e.length) throw I();
    let H = e.subarray(w, w + x),
      M = h & St ? c.decode(H) : Ot(H),
      S = U(e, f + 20),
      T = U(e, f + 24),
      C = U(e, f + 42),
      F = w + x;
    if (m && S === 4294967295) {
      let P = F + y,
        D = F;
      while (D + 4 <= P && j(e, D) !== 1) D += 4 + j(e, D + 2);
      if (D + 28 > P) throw I();
      ((T = _e(e, D + 4)), (S = _e(e, D + 12)), (C = _e(e, D + 20)));
    }
    ((f = F + y + b), r({ name: M, originalSize: T }));
    let V = C + 30 + j(e, C + 26) + j(e, C + 28);
    if (V + S > e.length) throw I();
    let ue = e.subarray(V, V + S);
    if (k === Ht) {
      if (S !== T) throw I("stored entry size mismatch");
      n[M] = ue.slice();
    } else if (k === Et) {
      if (S === 0 && T === 0) {
        n[M] = new Uint8Array(0);
        continue;
      }
      let P;
      try {
        P = gt(ue, {
          maxOutputLength: Math.max(T, 1),
          chunkSize: Math.min(Math.max(T, 64), 1048576)
        });
      } catch (D) {
        let _ = D.code;
        throw I(typeof _ === "string" && _.startsWith("Z_") ? _ : "entry larger than declared");
      }
      n[M] = new Uint8Array(P.buffer, P.byteOffset, P.byteLength);
    } else throw I(`unsupported compression method ${k}`);
  }
  return n;
}
var o7e = 493;
function Cdn(e) {
  let r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    n = {},
    s = Math.max(0, r.length - 22 - 65535),
    a = -1;
  for (let c = r.length - 22; c >= s; c--)
    if (r.readUInt32LE(c) === 101010256) {
      a = c;
      break;
    }
  if (a < 0) return n;
  let f = r.readUInt16LE(a + 10),
    m = r.readUInt32LE(a + 16);
  for (let c = 0; c < f; c++) {
    if (m + 46 > r.length || r.readUInt32LE(m) !== 33639248) break;
    let g = r.readUInt16LE(m + 4),
      h = r.readUInt16LE(m + 28),
      k = r.readUInt16LE(m + 30),
      x = r.readUInt16LE(m + 32),
      y = r.readUInt32LE(m + 38),
      b = r.toString("utf8", m + 46, m + 46 + h);
    if (g >> 8 === 3) {
      let w = (y >>> 16) & 65535;
      if (w) n[b] = w;
    }
    m += 46 + h + k + x;
  }
  return n;
}
import { homedir as vt } from "os";
import { join as q } from "path";
function Xe(e) {
  let r = e?.platform ?? O(),
    n = e?.homedir ?? vt(),
    s = e?.env ?? process.env,
    a = {
      HOME: n,
      DESKTOP: q(n, "Desktop"),
      DOCUMENTS: q(n, "Documents"),
      DOWNLOADS: q(n, "Downloads")
    };
  switch (r) {
    case "windows": {
      let f = s.USERPROFILE || n;
      return {
        HOME: n,
        DESKTOP: q(f, "Desktop"),
        DOCUMENTS: q(f, "Documents"),
        DOWNLOADS: q(f, "Downloads")
      };
    }
    case "linux":
    case "wsl":
      return {
        HOME: n,
        DESKTOP: s.XDG_DESKTOP_DIR || a.DESKTOP,
        DOCUMENTS: s.XDG_DOCUMENTS_DIR || a.DOCUMENTS,
        DOWNLOADS: s.XDG_DOWNLOAD_DIR || a.DOWNLOADS
      };
    case "macos":
    default: {
      if (r === "unknown") t("Unknown platform detected, using default paths");
      return a;
    }
  }
}
var Pt = p(() =>
  u({
    source: o(),
    contentHash: o(),
    extractedPath: o(),
    cachedAt: o(),
    lastChecked: o(),
    sourceMtimeMs: v().optional()
  })
);
function HD(e) {
  return e.endsWith(".mcpb") || e.endsWith(".dxt");
}
function Be(e) {
  return e.startsWith("http://") || e.startsWith("https://");
}
function XGs(e) {
  return HD(e) && !Be(e);
}
function Ze(e) {
  return B(e, ".mcpb-cache");
}
function $t(e, r) {
  let n = Ue("md5").update(r).digest("hex").substring(0, 8);
  return B(e, `${n}.metadata.json`);
}
function qe(e, r) {
  return hde($t(e, r), () => Pt().nullable(), { defaultValue: null, indent: 2 });
}
function Je(e, r) {
  return `${e}/${r}`;
}
async function OTe(e, r, n) {
  try {
    let s = P_e(e).mcpServers?.[r],
      a = (await Kn().readAsync(n))?.pluginSecrets?.[Je(e, r)];
    if (!s && !a) return null;
    return (t(`Loaded user config for ${e}/${r} (settings + secureStorage)`), { ...s, ...a });
  } catch (s) {
    return (t(`Failed to load user config for ${e}/${r}: ${s}`, { level: "error" }), null);
  }
}
async function _yt(e, r, n, s, a, f) {
  try {
    let m = {},
      c = {};
    for (let [M, S] of Object.entries(n))
      if (s[M]?.sensitive === !0) c[M] = String(S);
      else m[M] = S;
    let g = new Set(Object.keys(c)),
      h = new Set(Object.keys(m)),
      k = Je(e, r),
      x = 0,
      y = await Kn().mutate((M) => {
        let S = M.pluginSecrets?.[k],
          T = S ? Kk(S, (C, F) => !h.has(F)) : void 0;
        if (
          ((x = T && S ? Object.keys(S).length - Object.keys(T).length : 0),
          Object.keys(c).length === 0 && x === 0)
        )
          return M;
        return { ...M, pluginSecrets: { ...M.pluginSecrets, [k]: { ...T, ...c } } };
      }, f);
    if (!y.success) throw Error(`Failed to save sensitive config to secure storage for ${k}`);
    if (y.warning) t(`Server secrets save warning: ${y.warning}`, { level: "warn" });
    if (x > 0)
      t(
        `saveMcpServerUserConfig: scrubbed ${x} stale non-sensitive key(s) from secureStorage for ${k}`
      );
    let b = pe("userSettings")?.pluginConfigs,
      w = {},
      H = 0;
    for (let M of lue(e)) {
      let S = Object.keys(b?.[M]?.mcpServers?.[r] ?? {}).filter((F) => g.has(F)),
        T = Object.fromEntries(S.map((F) => [F, void 0])),
        C = M === e ? m : {};
      if (Object.keys(C).length > 0 || S.length > 0)
        ((w[M] = { mcpServers: { [r]: { ...C, ...T } } }), (H += S.length));
    }
    if (Object.keys(w).length > 0) {
      let M = await Un("userSettings", { pluginConfigs: w }, void 0, a);
      if (M.error) throw M.error;
      if (H > 0)
        t(
          `saveMcpServerUserConfig: scrubbed ${H} plaintext sensitive key(s) from settings.json for ${e}/${r}`
        );
    }
    t(
      `Saved user config for ${e}/${r} (${Object.keys(m).length} non-sensitive, ${Object.keys(c).length} sensitive)`
    );
  } catch (m) {
    let c = N(m);
    throw (
      t(`Failed to save user config for ${e}/${r}: ${c.message}`, { level: "error" }),
      Error(`Failed to save user configuration for ${e}/${r}: ${c.message}`)
    );
  }
}
function wQ(e, r) {
  let n = [];
  for (let [s, a] of Object.entries(r)) {
    let f = so(e, s);
    if (a.required && (f === void 0 || f === "")) {
      n.push(`${a.title || s} is required but not provided`);
      continue;
    }
    if (f === void 0 || f === "") continue;
    if (a.type === "string") {
      if (Array.isArray(f)) {
        if (!a.multiple) n.push(`${a.title || s} must be a string, not an array`);
        else if (!f.every((m) => typeof m === "string"))
          n.push(`${a.title || s} must be an array of strings`);
      } else if (typeof f !== "string") n.push(`${a.title || s} must be a string`);
      else if (a.options !== void 0 && !a.options.includes(f))
        n.push(`${a.title || s} must be one of: ${a.options.join(", ")}`);
    } else if (a.type === "number" && typeof f !== "number")
      n.push(`${a.title || s} must be a number`);
    else if (a.type === "boolean" && typeof f !== "boolean")
      n.push(`${a.title || s} must be a boolean`);
    else if ((a.type === "file" || a.type === "directory") && typeof f !== "string")
      n.push(`${a.title || s} must be a path string`);
    if (a.type === "number" && typeof f === "number") {
      if (a.min !== void 0 && f < a.min) n.push(`${a.title || s} must be at least ${a.min}`);
      if (a.max !== void 0 && f > a.max) n.push(`${a.title || s} must be at most ${a.max}`);
    }
  }
  return { valid: n.length === 0, errors: n };
}
async function be(e, r, n = {}) {
  let { getMcpConfigForManifest: s } = await import("./chunk-hwh6c1mz.js"),
    a = await s({
      manifest: e,
      extensionPath: r,
      systemDirs: Xe(),
      userConfig: n,
      pathSeparator: "/"
    });
  if (!a) {
    let m = Qe(
      Error(`Failed to generate MCP server configuration from manifest "${e.name}"`),
      "MCPB manifest: failed to generate MCP server configuration"
    );
    throw (l(m), m);
  }
  let f = Qqt(e.server.mcp_config, a);
  return { ...a, ...(f && { configuredCommand: f }) };
}
async function Ye(e, r) {
  try {
    return await qe(e, r).read();
  } catch (n) {
    return (t(`Failed to load MCPB cache metadata: ${n}`, { level: "error" }), null);
  }
}
async function Ne(e, r, n) {
  (await ie().mkdir(e), await qe(e, r).write(n));
}
async function Dt(e, r, n) {
  let s = lm(e);
  if ((t(`Downloading MCPB from ${s}`), n)) n(`Downloading ${s}...`);
  let a = performance.now(),
    f = !1;
  try {
    let c = await (o2(e) ? IY.get : _l.get)(e, {
        timeout: 120000,
        responseType: "arraybuffer",
        maxRedirects: 5,
        onDownloadProgress: (h) => {
          if (h.total && n) {
            let k = Math.round((h.loaded / h.total) * 100);
            n(`Downloading... ${k}%`);
          }
        }
      }),
      g = new Uint8Array(c.data);
    if (
      (FD("mcpb", e, "success", performance.now() - a),
      (f = !0),
      await je(r, Buffer.from(g)),
      t(`Downloaded ${g.length} bytes to ${r}`),
      n)
    )
      n("Download complete");
    return g;
  } catch (m) {
    if (!f) FD("mcpb", e, "failure", performance.now() - a, kY(m));
    let c = SA(kSe(d(m), e, s)),
      g = Error(`Failed to download MCPB file from ${s}: ${c}`);
    throw (t(`Failed to download MCPB file from ${s}: ${c}`, { level: "error" }), g);
  }
}
async function Lt(e, r, n, s) {
  if (s) s("Extracting files...");
  await ie().mkdir(r);
  let a = 0,
    f = Object.entries(e).filter(([c]) => !c.endsWith("/")),
    m = f.length;
  for (let [c, g] of f) {
    let h = B(r, c),
      k = Ft(h);
    if (k !== r) await ie().mkdir(k);
    if (
      c.endsWith(".json") ||
      c.endsWith(".js") ||
      c.endsWith(".ts") ||
      c.endsWith(".txt") ||
      c.endsWith(".md") ||
      c.endsWith(".yml") ||
      c.endsWith(".yaml")
    ) {
      let b = new TextDecoder().decode(g);
      await je(h, b, "utf-8");
    } else await je(h, Buffer.from(g));
    let y = n[c];
    if (y && y & 73) await Tt(h, y & o7e).catch(() => {});
    if ((a++, s && a % 10 === 0)) s(`Extracted ${a}/${m} files`);
  }
  if ((t(`Extracted ${a} files to ${r}`), s)) s(`Extraction complete (${a} files)`);
}
async function Rt(e, r) {
  let n = ie(),
    s = Ze(r),
    a = await Ye(s, e);
  if (!a) return !0;
  try {
    await n.stat(a.extractedPath);
  } catch (f) {
    if (E(f) === "ENOENT") t(`MCPB extraction path missing: ${a.extractedPath}`);
    else t(`MCPB extraction path inaccessible: ${a.extractedPath}: ${f}`, { level: "error" });
    return !0;
  }
  if (!Be(e)) {
    let f = B(r, e),
      m = B(r, lm(e)),
      c;
    try {
      c = await n.stat(f);
    } catch (h) {
      if (E(h) === "ENOENT") t(`MCPB source file missing: ${m}`);
      else t(`MCPB source file inaccessible: ${m}: ${kSe(String(h), f, m)}`, { level: "error" });
      return !0;
    }
    if (a.sourceMtimeMs === void 0) return !0;
    let g = Math.floor(c.mtimeMs);
    if (g !== a.sourceMtimeMs)
      return (
        t(
          `MCPB file modified: mtime ${new Date(g).toISOString()} != cached ${new Date(a.sourceMtimeMs).toISOString()}`
        ),
        !0
      );
  }
  return !1;
}
async function s7e(e, r, n, s, a, f, m, c) {
  let g = lm(e),
    h = ie(),
    k = Ze(r);
  (await h.mkdir(k), t(`Loading MCPB from source: ${g}`));
  let x = await Ye(k, e);
  if (x && !(await Rt(e, r))) {
    t(`Using cached MCPB from ${x.extractedPath} (hash: ${x.contentHash})`);
    let P = B(x.extractedPath, "manifest.json"),
      D;
    try {
      D = await h.readFile(P, { encoding: "utf-8" });
    } catch (z) {
      if (G(z)) {
        let W = Error(`Cached manifest not found: ${P}`);
        throw (l(W), W);
      }
      throw z;
    }
    let _ = new TextEncoder().encode(D),
      A = await Ae(_);
    if (A.user_config && Object.keys(A.user_config).length > 0) {
      let z = A.name,
        W = await OTe(n, z, c),
        Ke = a || W || {},
        $e = wQ(Ke, A.user_config);
      if (f || !$e.valid)
        return {
          status: "needs-config",
          manifest: A,
          extractedPath: x.extractedPath,
          contentHash: x.contentHash,
          configSchema: A.user_config,
          existingConfig: W || {},
          validationErrors: $e.valid ? [] : $e.errors
        };
      if (a) await _yt(n, z, a, A.user_config ?? {}, m, c);
      let So = await be(A, x.extractedPath, Ke);
      return {
        manifest: A,
        mcpConfig: So,
        extractedPath: x.extractedPath,
        contentHash: x.contentHash
      };
    }
    let Pe = await be(A, x.extractedPath);
    return {
      manifest: A,
      mcpConfig: Pe,
      extractedPath: x.extractedPath,
      contentHash: x.contentHash
    };
  }
  let y, b, w;
  if (Be(e)) {
    let P = Ue("md5").update(e).digest("hex").substring(0, 8);
    ((b = B(k, `${P}.mcpb`)), (y = await Dt(e, b, s)));
  } else {
    let P = B(r, e);
    if (s) s(`Loading ${g}...`);
    try {
      ((y = await h.readFileBytes(P)), (b = P), (w = Math.floor((await h.stat(P)).mtimeMs)));
    } catch (D) {
      let _ = B(r, g);
      if (G(D)) {
        let A = Error(`MCPB file not found: ${_}`);
        throw (t(`MCPB file not found: ${_}`, { level: "error" }), A);
      }
      throw P === _ ? D : new R(kSe(d(D), P, _), "MCPB local file read failed");
    }
  }
  let H = Ue("sha256").update(y).digest("hex").substring(0, 16);
  if ((t(`MCPB content hash: ${H}`), s)) s("Extracting MCPB archive...");
  let M = await r7e(Buffer.from(y)),
    S = Cdn(y),
    T = M["manifest.json"];
  if (!T) {
    let P = Error("No manifest.json found in MCPB file");
    throw (t(`No manifest.json found in MCPB file: ${b}`, { level: "error" }), P);
  }
  let C = await Ae(T);
  if ((t(`MCPB manifest: ${C.name} v${C.version} by ${C.author.name}`), !C.server)) {
    let P = Qe(
      Error(`MCPB manifest for "${C.name}" does not define a server configuration`),
      "MCPB manifest does not define a server configuration"
    );
    throw (l(P), P);
  }
  let F = B(k, H);
  if ((await Lt(M, F, S, s), C.user_config && Object.keys(C.user_config).length > 0)) {
    let P = C.name,
      D = await OTe(n, P, c),
      _ = a || D || {},
      A = wQ(_, C.user_config);
    if (f || !A.valid) {
      let W = {
        source: e,
        contentHash: H,
        extractedPath: F,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: w
      };
      return (
        await Ne(k, e, W),
        {
          status: "needs-config",
          manifest: C,
          extractedPath: F,
          contentHash: H,
          configSchema: C.user_config,
          existingConfig: D || {},
          validationErrors: A.valid ? [] : A.errors
        }
      );
    }
    if (a) await _yt(n, P, a, C.user_config ?? {}, m, c);
    if (s) s("Generating MCP server configuration...");
    let Pe = await be(C, F, _),
      z = {
        source: e,
        contentHash: H,
        extractedPath: F,
        cachedAt: new Date().toISOString(),
        lastChecked: new Date().toISOString(),
        sourceMtimeMs: w
      };
    return (await Ne(k, e, z), { manifest: C, mcpConfig: Pe, extractedPath: F, contentHash: H });
  }
  if (s) s("Generating MCP server configuration...");
  let V = await be(C, F),
    ue = {
      source: e,
      contentHash: H,
      extractedPath: F,
      cachedAt: new Date().toISOString(),
      lastChecked: new Date().toISOString(),
      sourceMtimeMs: w
    };
  return (
    await Ne(k, e, ue),
    t(`Successfully loaded MCPB: ${C.name} (extracted to ${F})`),
    { manifest: C, mcpConfig: V, extractedPath: F, contentHash: H }
  );
}
function ig(e) {
  return e.source;
}
function byt(e, r) {
  return e.find((n) => n.repository === r || n.source === r);
}
function AO(e, r) {
  if (xvt()) return Promise.resolve({});
  let { optionValues: n } = Ie(),
    s = n.get(e);
  if (s !== void 0) return s;
  let a = _t(e, r);
  return (
    n.set(e, a),
    a.catch(() => {
      if (n.get(e) === a) n.delete(e);
    }),
    a
  );
}
async function _t(e, r) {
  let n = P_e(e).options ?? {},
    s = (await Kn().readAsync(r))?.pluginSecrets,
    a = [...TI(e).toReversed(), e].reduce((f, m) => ({ ...f, ...s?.[m] }), {});
  return { ...n, ...a };
}
function MTe() {
  Ie().optionValues.clear();
}
async function UDe(e, r, n, s, a) {
  let f = {},
    m = {};
  for (let [y, b] of Object.entries(r))
    if (n[y]?.sensitive === !0) m[y] = String(b);
    else f[y] = b;
  let c = new Set(Object.keys(m)),
    g = new Set(Object.keys(f)),
    h = await Kn().mutate((y) => {
      let b = o2t(y.pluginSecrets, e),
        w =
          b.replaced.length === 0
            ? y.pluginSecrets?.[b.written]
            : [...b.replaced.toReversed(), b.written].reduce(
                (S, T) => ({ ...S, ...y.pluginSecrets?.[T] }),
                {}
              ),
        H = w ? Kk(w, (S, T) => !g.has(T)) : void 0,
        M = H && w && Object.keys(H).length !== Object.keys(w).length;
      if (Object.keys(m).length === 0 && !M && b.replaced.length === 0) return y;
      return {
        ...y,
        pluginSecrets: {
          ...Kk(y.pluginSecrets ?? {}, (S, T) => !b.replaced.includes(T)),
          [b.written]: { ...H, ...m }
        }
      };
    }, a);
  if (!h.success) {
    let y = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw (t(y.message, { level: "error" }), y);
  }
  if (h.warning) t(`Plugin secrets save warning: ${h.warning}`, { level: "warn" });
  let k = pe("userSettings")?.pluginConfigs,
    x = {};
  for (let y of lue(e)) {
    let b = Object.keys(k?.[y]?.options ?? {}).filter((M) => c.has(M)),
      w = Object.fromEntries(b.map((M) => [M, void 0])),
      H = y === e ? f : {};
    if (Object.keys(H).length > 0 || b.length > 0) x[y] = { options: { ...H, ...w } };
  }
  if (Object.keys(x).length > 0) {
    let y = await Un("userSettings", { pluginConfigs: Nt(k, e, x) }, void 0, s);
    if (y.error)
      throw (
        t(`Failed to save plugin options for ${e} to settings.json: ${d(y.error)}`, {
          level: "error"
        }),
        Error(`Failed to save plugin options for ${e}: ${y.error.message}`)
      );
  }
  MTe();
}
async function JGs(e) {
  let r = [],
    n = new Set();
  er();
  let s = pe("userSettings");
  if (s === null || s === void 0) {
    let a = ln("userSettings");
    if (a !== void 0 && (await Y$(a)) !== "gone") r.push("settings_unreadable");
  }
  for (let a of Object.keys(s?.pluginConfigs ?? {})) n.add(a);
  try {
    let a = Kn(),
      f = a.readAsyncStrict
        ? await a.readAsyncStrict(e, { inaccessibleAs: "failure" })
        : await a.readAsync(e);
    if (f === Sl) r.push("secrets_unreadable");
    else
      for (let m of Object.keys(f?.pluginSecrets ?? {})) {
        let c = m.indexOf("/");
        n.add(c === -1 ? m : m.slice(0, c));
      }
  } catch {
    r.push("secrets_unreadable");
  }
  return { ids: [...n], unreadable: r };
}
async function eo(e) {
  er();
  let r = pe("userSettings");
  if (r !== null && r !== void 0) return r;
  let n = ln("userSettings");
  if (n === void 0 || (await Y$(n)) === "gone") return;
  return (
    t(
      `deletePluginOptions: the user settings file (${n}) is there and could not be read, so options of ${e} may remain in it`,
      { level: "warn" }
    ),
    "unreadable"
  );
}
async function QGs(e, r, n, s) {
  let a = !0,
    f = await eo(e);
  if (f === "unreadable") ((a = !1), s?.push("settings_unreadable"));
  let m = f === "unreadable" ? void 0 : f,
    c = lue(e).filter((k) => m?.pluginConfigs?.[k] !== void 0);
  if (c.length > 0) {
    let k = Object.fromEntries(c.map((y) => [y, void 0])),
      { error: x } = await Un("userSettings", { pluginConfigs: k }, void 0, r);
    if (x)
      (t(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${x.message}`, {
        level: "warn"
      }),
        (a = !1),
        s?.push("settings_write_failed"));
    else {
      let y = await eo(e);
      if (y === "unreadable") ((a = !1), s?.push("settings_unreadable"));
      let b = y === "unreadable" ? void 0 : y?.pluginConfigs;
      if (c.some((w) => b?.[w] !== void 0))
        (t(
          `deletePluginOptions: settings.pluginConfigs[${e}] still reads back after a write that reported no error`,
          { level: "warn" }
        ),
          (a = !1),
          s?.push("settings_remain"));
    }
  }
  let g = [e, ...TI(e)],
    h = (k) => g.some((x) => k === x || k.startsWith(`${x}/`));
  try {
    let k = Kn();
    if (
      !(
        await k.mutate((y) => {
          if (!y.pluginSecrets) return y;
          let b = Object.entries(y.pluginSecrets).filter(([w]) => !h(w));
          if (b.length === Object.keys(y.pluginSecrets).length) return y;
          return { ...y, pluginSecrets: b.length > 0 ? Object.fromEntries(b) : void 0 };
        }, n)
      ).success
    )
      (t(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
        level: "warn"
      }),
        (a = !1),
        s?.push("secrets_write_failed"));
    else {
      let y = k.readAsyncStrict
        ? await k.readAsyncStrict(n, { inaccessibleAs: "failure" })
        : await k.readAsync(n);
      if (y === Sl || Object.keys(y?.pluginSecrets ?? {}).some(h))
        (t(
          `deletePluginOptions: after the delete, secure storage could not be read or still holds pluginSecrets for ${e}`,
          { level: "warn" }
        ),
          (a = !1),
          s?.push(y === Sl ? "secrets_unreadable" : "secrets_remain"));
    }
  } catch (k) {
    (t(`deletePluginOptions: storage lock unavailable for ${e}: ${d(k)}`, { level: "warn" }),
      (a = !1),
      s?.push("secrets_write_failed"));
  }
  return (MTe(), a);
}
async function BHo(e, r, n, s, a) {
  {
    let f = !0,
      m = !1,
      { error: c } = await Sa(
        "userSettings",
        (M) => {
          let S = M?.pluginConfigs?.[e];
          if (S === void 0) return null;
          if (M?.pluginConfigs?.[r] !== void 0) return ((m = !0), null);
          return { pluginConfigs: { [r]: S } };
        },
        void 0,
        s
      );
    if (c)
      ((f = !1),
        t(`copyPluginOptions: failed to copy settings.pluginConfigs[${e}]: ${c.message}`, {
          level: "warn"
        }));
    if (!f)
      return (
        t(`copyPluginOptions: the settings write failed, so the secrets of ${e} were not copied`, {
          level: "warn"
        }),
        MTe(),
        {
          optionsCarried: f,
          secretsCarried: !1,
          oldDataDirDisposable: !1,
          dataDirCopied: !1,
          targetHadOwn: m
        }
      );
    let g = !0;
    try {
      if (
        !(
          await Kn().mutate((S) => {
            if (!S.pluginSecrets) return S;
            let T = {};
            for (let [C, F] of Object.entries(S.pluginSecrets)) {
              let V = ro(C, e, r);
              if (V === void 0) continue;
              if (S.pluginSecrets[V] === void 0) T[V] = F;
              else m = !0;
            }
            return Object.keys(T).length === 0
              ? S
              : { ...S, pluginSecrets: { ...S.pluginSecrets, ...T } };
          }, a)
        ).success
      )
        ((g = !1),
          t(`copyPluginOptions: failed to copy pluginSecrets for ${e}`, { level: "warn" }));
    } catch {
      ((g = !1), t(`copyPluginOptions: secure storage unavailable for ${e}`, { level: "warn" }));
    }
    if (!f || !g)
      return (
        MTe(),
        {
          optionsCarried: f,
          secretsCarried: g,
          oldDataDirDisposable: !1,
          dataDirCopied: !1,
          targetHadOwn: m
        }
      );
    let h = $p(e),
      k = $p(r),
      x = `${k}.switching-${process.pid}`,
      y = !1,
      b = !1,
      w,
      H;
    try {
      let M = await Y$(h);
      if (M === "gone") y = !0;
      else if (M === "unreadable")
        ((w = "copy-failed"),
          t(
            `copyPluginOptions: the data directory of ${e} could not be examined; it is kept and was not copied`,
            { level: "warn" }
          ));
      else if (!(H = await se(h, { bigint: !0 })).isDirectory() || !(await sW(fe(h), ae(h))))
        ((w = "copy-failed"),
          t(
            `copyPluginOptions: the data directory of ${e} is not a real directory; it is kept and was not copied`,
            { level: "warn" }
          ));
      else {
        let S = await At(k).then(
          () => {
            return;
          },
          (T) => (G(T) ? void 0 : E(T))
        );
        if (S === void 0) {
          await rl(x);
          let T = await sW(fe(h), ae(h)),
            C = await se(h, { bigint: !0 });
          if (!T || !C.isDirectory() || C.dev !== H?.dev || C.ino !== H?.ino)
            throw Error("the old data directory is not the real directory first seen");
          await n(h, x, h, x, h, !0, new Set(), void 0, !1, !0);
          let F = await se(h, { bigint: !0 });
          if (!F.isDirectory() || !(await sW(fe(h), ae(h))) || F.dev !== C.dev || F.ino !== C.ino)
            throw Error("the old data directory changed during the copy");
          if (!(await se(x)).isDirectory() || !(await sW(fe(x), ae(x))))
            throw Error("the staging folder is not a real directory");
          if ((await Os(x, k), !(await se(k)).isDirectory() || !(await sW(fe(k), ae(k)))))
            throw (
              await uk(k).catch(() => {}),
              Error("what stands at the target after the move is not a real directory")
            );
          ((y = !0), (b = !0));
        } else
          w =
            S === "ENOTEMPTY" || S === "EEXIST" || S === "ENOTDIR"
              ? "target-had-own"
              : "copy-failed";
      }
    } catch (M) {
      ((w = "copy-failed"),
        t(`copyPluginOptions: failed to copy the data directory of ${e}: ${d(M)}`, {
          level: "warn"
        }),
        await rl(x).catch(() => {}));
    }
    return (
      MTe(),
      {
        optionsCarried: f,
        secretsCarried: g,
        oldDataDirDisposable: y,
        dataDirCopied: b,
        dataDirKeptReason: w,
        targetHadOwn: m
      }
    );
  }
  return {
    optionsCarried: !1,
    secretsCarried: !1,
    oldDataDirDisposable: !1,
    dataDirCopied: !1,
    targetHadOwn: !1
  };
}
function ro(e, r, n) {
  {
    let s = `${r}/`;
    return e === r ? n : e.startsWith(s) ? `${n}/${e.slice(s.length)}` : void 0;
  }
  return;
}
async function ZGs(e, r) {
  {
    let n = pe("userSettings")?.pluginConfigs;
    if (n?.[e] !== void 0 && n[r] !== void 0) return !0;
    try {
      let s = (await Kn().readAsync())?.pluginSecrets ?? {};
      return Object.keys(s).some((a) => {
        let f = ro(a, e, r);
        return f !== void 0 && s[f] !== void 0;
      });
    } catch {
      return (
        t(
          `wouldTargetKeepOwnPluginOptions: secure storage could not be read (switch from ${e}), so the answer is 'unknown'`,
          { level: "warn" }
        ),
        "unknown"
      );
    }
  }
  return !1;
}
async function BDe(e, r) {
  let n = e.manifest.userConfig;
  if (!n || Object.keys(n).length === 0) return {};
  let s = await AO(ig(e), r),
    a = {};
  for (let [f, m] of Object.entries(n)) {
    let c = so(s, f);
    if (c === void 0 || c === "" || (m.sensitive !== !0 && !wQ({ [f]: c }, { [f]: m }).valid))
      a[f] = m;
  }
  return a;
}
function jHo(e, r) {
  let n = e?.options;
  return n !== void 0 && !(typeof r === "string" && n.includes(r));
}
function i7e(e, r) {
  let n = {};
  for (let [a, f] of Object.entries(r)) {
    if (f.required && f.default === void 0) continue;
    n[a] = f.default ?? "";
  }
  let s = Kk(e, (a, f) => {
    let m = r[f]?.options;
    if (m === void 0 || !jHo(r[f], a)) return !0;
    return (
      t(`plugin option ${f} holds a value that is not one of ${m.join(", ")}; it reads as unset`, {
        level: "warn"
      }),
      !1
    );
  });
  return { ...n, ...s };
}
function mde(e, r, n = (s) => s) {
  let s = (f) => n(f),
    a = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => s(r.path));
  if (((a = a.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => s(no() ?? ao()))), r.source)) {
    let { source: f, dataDir: m } = r;
    a = a.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => {
      let c = io({ source: f, dataDir: m }, M2e);
      if (c === null) throw new Ve();
      return s(c);
    });
  }
  return a;
}
class Ve extends Error {
  name = "PluginDataDirUnknownError";
  constructor() {
    super(
      "CLAUDE_PLUGIN_DATA cannot be filled in: the plugin is on another machine, and its data folder there did not come with it"
    );
  }
}
function ezs(e, r) {
  if (r.dataDir !== null) return !1;
  try {
    return (mde(e, r), !1);
  } catch (n) {
    return n instanceof Ve;
  }
}
function io(e, r) {
  return e.dataDir === void 0 ? r(e.source) : e.dataDir;
}
var oo = "${CLAUDE_";
function tzs(e, r, n = "") {
  let s = e.split(oo).length - 1;
  if (s === 0) return 0;
  let a = no() ?? ru() ?? "";
  return r.path.includes(oo) || a.includes("$") || r.dataDir?.includes("$")
    ? 1 / 0
    : s * 3 * Math.max(r.path.length, a.length, (io(r, $p) ?? "").length, n.length);
}
function qUt(e, r, { missingKey: n = "throw" } = {}) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (s, a) => {
    let f = so(r, a);
    if (f === void 0) {
      if (n === "literal") return s;
      throw Error(
        `Plugin option "${a}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${a}".`
      );
    }
    return String(f);
  });
}
function YUt(e, r) {
  try {
    return qUt(e, r) !== e;
  } catch {
    return !0;
  }
}
function GNr(e, r, n, s) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (a, f) => {
    if (n[f]?.sensitive === !0) return `[sensitive option '${f}' not available in skill content]`;
    let m = so(r, f);
    if (m === void 0) return a;
    let c = String(m);
    return s ? s(c) : c;
  });
}
function Nt(e, r, n) {
  let s = o2t(e, r);
  if (s.replaced.length === 0) return n;
  let a = [...s.replaced.toReversed(), s.written],
    f = Kk(n, (g, h) => !s.replaced.includes(h)),
    m = {
      ...Kk(
        a.reduce(
          (g, h) => ({ ...g, ...e?.[h]?.options, ...(h === s.written ? void 0 : n[h]?.options) }),
          {}
        ),
        (g) => g !== void 0
      ),
      ...f[s.written]?.options
    },
    c = L(a.flatMap((g) => Object.keys(e?.[g]?.mcpServers ?? {})));
  return {
    ...f,
    ...Object.fromEntries(s.replaced.map((g) => [g, void 0])),
    [s.written]: {
      options: m,
      ...(c.length === 0
        ? {}
        : {
            mcpServers: Object.fromEntries(
              c.map((g) => [g, a.reduce((h, k) => ({ ...h, ...e?.[k]?.mcpServers?.[g] }), {})])
            )
          })
    }
  };
}
var XNr = (e) => xdn({ pluginName: e.name, pluginStorageId: ig(e) });
var ozs = (e, r, n) => `${e}: ${r} did not answer within ${n}ms`;
var szs = "the plugin is unloaded; /reload-plugins brings it back";
function Y({
  members: e,
  event: r,
  e: n,
  hookOrigin: s,
  origin: a,
  raise: f,
  floors: m,
  cutAt: c,
  gestureAt: g,
  kind: h
}) {
  let [k] = e;
  if (s) t(`hooks module ${wyt(e)}: ${r}${h} nested in ${YNr(s)}`);
  let x = e.flatMap((y) => {
    let b = [...(y.leftOut ?? [])],
      { environmentId: w } = y;
    return b.length > 0 ? [{ environmentId: w, registrations: b }] : [];
  });
  return {
    id: k ? k.hopKey.nextDispatchId() : 0,
    event: r,
    payload: n,
    environments: e.map((y) => y.environmentId),
    leftOut: x.length === 0 ? void 0 : x,
    origin: a,
    hookOrigin: s,
    raise: f,
    floors: m.length === 0 ? void 0 : m,
    cutAt: c,
    ...(g !== void 0 && { gestureAt: g })
  };
}
function Q(e, r, n) {
  if (!n || n.length === 0) return e;
  let s = Syt().get(n) ?? [],
    a = Date.now(),
    f = (b) => s[b]?.isLent !== !0 || s[b].isHeld === !0,
    { caller: m, above: c } = et(
      n.filter((b, w) => f(w) || a < (s[w]?.until ?? 0)),
      e.name
    ),
    g = (b, w) => b === "every" || b.includes(w),
    h = we(
      n.slice(0, -1).filter((b, w) => f(w)),
      e.name
    ),
    x = e.registrationsFor(r).filter((b) => g(m, b) || g(h, b));
  if (x.length === 0) return e;
  let y = `origin ${YNr(n)}`;
  if (!e.hooks(r, x)) {
    let b = m === "every" || c === "every";
    t(
      `hooks module ${e.label} ${r} skipped: re-entry (` +
        (b ? `the plugin's own code raised it; ${y})` : `its own frame is being dispatched; ${y})`)
    );
    return;
  }
  return (
    t(`hooks module ${e.label} ${r}: hooks ${x.join(", ")} left out for re-entry (${y})`),
    {
      ...e,
      leftOut: x,
      hooks: (b, w = []) => e.hooks(b, [...x, ...w]),
      catches: (b, w = [], H) => e.catches(b, [...x, ...w], H),
      matcherFor: (b, w = []) => e.matcherFor(b, [...x, ...w])
    }
  );
}
async function fo({ members: e, event: r, hookOrigin: n, signal: s }) {
  let a = e.find((f) => f.status().kind === "dead")?.hopKey.replaced?.();
  if (a === void 0) return e;
  return (
    t(
      `hooks module ${e.map((f) => f.label).join(", ")}: ${r} waits for the hooks worker's replacement`
    ),
    await new Promise((f) => {
      (s.addEventListener("abort", () => f(), { once: !0 }), a.then(f, f));
    }),
    e.flatMap((f) => {
      let m = Ie().loadedModules.find((h) => h.name === f.name);
      if (!(f.status().kind !== "live" && m !== void 0 && m.environmentId !== f.environmentId))
        return [f];
      let g = m.hooks(r) && mu(m) ? Q(m, r, n) : void 0;
      return g === void 0 ? [] : [g];
    })
  );
}
async function mo({ hop: e, dispatchId: r, members: n, error: s, called: a, beneath: f }) {
  let { event: m, e: c, signal: g } = e,
    h = (w) => w.filter((H) => oe(H, m, c)),
    k = d(s),
    x = Re(h(n), k),
    y = x[0]?.hopKey,
    b = y?.kept;
  while (x.length > 0 && !g.aborted) {
    let w = h(Z(await fo({ ...e, members: x }), m)),
      H = w[0]?.hopKey,
      M = w.find((S) => S.name === b?.plugin);
    if (H === void 0 || g.aborted) break;
    t(
      `hooks module ${wyt(w)}: .catch asked in the replacement after the hooks worker ended during ${m}`
    );
    for (let S of w) S.enter();
    try {
      let S = await H.dispatch(
          {
            ...Y({ ...e, members: w, kind: "" }),
            ended: { reason: k, called: a(), ...(M !== void 0 && { kept: M.environmentId }) }
          },
          f,
          g
        ),
        T = M !== void 0 && b !== void 0 && y?.isKeptVerdict?.(r, S.unmatched !== !0) === !0;
      for (let C of w)
        if (S.answered?.includes(C.environmentId) === !0)
          vG(
            C.name,
            `the hooks worker was replaced during ${m}; ${C.name}'s .catch answered in place of its hook`
          );
      if (T) H.unloadCrashed?.(M.environmentId, b);
      return S;
    } catch (S) {
      ((k = d(S)),
        (x = Re(w, k)),
        t(
          `hooks module ${wyt(w)}: .catch not heard after the hooks worker ended during ${m}: ${k}` +
            (x.length > 0 ? "; asked again of whoever stands" : ""),
          { level: "error" }
        ));
    } finally {
      for (let S of w) S.leave();
    }
  }
  if (x.length > 0)
    t(
      `hooks module ${wyt(x)}: no .catch is asked after the hooks worker ended during ${m}: ` +
        (g.aborted ? "its caller is gone" : "no replacement that may be waited for holds its hook"),
      { level: "error" }
    );
  return;
}
function Ee(e) {
  let r = new He(
    `${wyt(e)}: next refused: the floors handed back are not ones a next.to of these plugins leaves (host rule)`
  );
  return (t(r.message, { level: "error" }), r);
}
import { isDeepStrictEqual as co } from "util";
function po(e, r, n) {
  return r.some((a) => co(a, n))
    ? r
    : e
        .slice(
          Math.max(
            e.findIndex((a) => a.name === r.at(-1)?.plugin),
            0
          )
        )
        .filter((a) => jVo(r, a.tier) === void 0)
        .flatMap((a) =>
          (a.args.scan.nextTo ?? []).map((f) => WVo(r, { from: a.tier, to: f, plugin: a.name }))
        )
        .find((a) => co(a.at(-1), n));
}
function Oe(e, r, n) {
  if (!Array.isArray(n)) return;
  let s = e;
  for (let a of n) if (((s = po(r, s, a)), s === void 0)) return;
  return s;
}
async function JNr(e) {
  let { event: r, e: n, call: s, signal: a, floors: f } = e,
    m = he(e.members, r, n),
    c = m[0]?.hopKey;
  if (!c) return s(n, void 0, f);
  let g,
    h = (H, M, S) => {
      let T = Oe(f, m, S);
      if (T === void 0) return Promise.reject(Ee(m));
      return ((g = s(H, M, T)), g);
    },
    k = Y({ ...e, members: m, kind: "" }),
    x = performance.now();
  for (let H of m) H.enter();
  let y;
  try {
    y = await c.dispatch(
      { ...k, caughtBy: m.filter((H) => oe(H, r, n)).map((H) => H.environmentId) },
      h,
      a
    );
  } catch (H) {
    let M = await mo({
      hop: e,
      dispatchId: k.id,
      members: m,
      error: H,
      called: () => g !== void 0,
      beneath: (S, T, C) => g ?? h(S, T, C)
    });
    if (M === void 0) throw H;
    y = M;
  } finally {
    for (let H of m) H.leave();
  }
  let w =
    typeof n === "object" && "requestId" in n && typeof n.requestId === "string"
      ? ` key=${n.requestId}`
      : "";
  if (
    (t(
      `hooks module ${wyt(m)} ${r} settled in ${(performance.now() - x).toFixed(1)}ms (${c.kind} hop, next() included)${w}`
    ),
    y.withheld === !0)
  )
    e.withheld?.();
  return lo(y.result);
}
function Me(e, r, n) {
  (e.leave(),
    t(
      `hooks module ${e.label} ${r} settled in ${(performance.now() - n).toFixed(1)}ms (native link, next() included)`
    ));
}
function Ce({ loaded: e, event: r, origin: n }, s) {
  let a = Z([e], r).length === 1 && qNr(e, r, s);
  if (a && n) t(`hooks module ${e.label} (native): ${r} nested in ` + YNr(n));
  return a;
}
function Yt(e) {
  let { loaded: r, event: n, origin: s } = e;
  if (r.link === void 0) throw new He(`${r.name}: ${n}: not a native module; it runs in a hop`);
  let a = r.link({ event: n, leftOut: r.leftOut, hookOrigin: s, gestureAt: e.gestureAt }),
    f = a.catch;
  async function m(h) {
    let k = performance.now();
    r.enter();
    try {
      return await h();
    } finally {
      Me(r, n, k);
    }
  }
  async function c(h, k) {
    r.enter();
    try {
      return await f?.(h, k);
    } finally {
      r.leave();
    }
  }
  let g = (h, k, x) => (Ce({ loaded: r, event: n, origin: s }, h) ? m(() => a.run(h, k, x)) : k(h));
  return Qt({ ...a, run: g, ...(f !== void 0 && { catch: c }) });
}
function uo(e) {
  let { event: r, e: n, open: s, signal: a, floors: f } = e,
    m = he(e.members, r, n),
    c = m[0]?.hopKey;
  if (!c) return s(n, void 0, f);
  let g = (x, y, b) => {
      let w = Oe(f, m, b);
      if (w === void 0) throw Ee(m);
      return JLe(s(x, y, w));
    },
    h = performance.now();
  for (let x of m) x.enter();
  let k = c.dispatchStream(Y({ ...e, members: m, kind: " stream" }), g, a);
  return (async function* () {
    try {
      let x = yield* JLe(k);
      return lo(x);
    } finally {
      for (let x of m) x.leave();
      t(
        `hooks module ${wyt(m)} ${r} stream settled in ${(performance.now() - h).toFixed(1)}ms (${c.kind} hop, next() included)`
      );
    }
  })();
}
function nr(e) {
  let { loaded: r, event: n, origin: s } = e;
  if (r.streamLinks === void 0)
    throw new He(`${r.name}: ${n}: not a native module; it runs in a hop`);
  function a(f) {
    let m = performance.now();
    return (
      r.enter(),
      (async function* () {
        try {
          return yield* f;
        } finally {
          Me(r, n, m);
        }
      })()
    );
  }
  return r.streamLinks({ event: n, leftOut: r.leftOut, hookOrigin: s }).map((f) => {
    let m = f.catch;
    return {
      ...f,
      run: async (c, g, h) =>
        Ce({ loaded: r, event: n, origin: s }, c) ? a(await f.run(c, g, h)) : g(c),
      ...(m !== void 0 && { catch: async (c, g, h) => a(await m(c, g, h)) })
    };
  });
}
var Te = (e, r, n) =>
  e.map((s) => {
    let a = r.get(s);
    if (a === void 0) throw new He(`${n}: a hop member is not one of these handlers`);
    return a;
  });
var go = ({ loaded: e, event: r, origin: n, raise: s, gestureAt: a, owners: f, withheld: m }) => ({
  name: e.name,
  tier: e.tier,
  ...(xVo(e.args.modulePath) && { answersForEngine: !0 }),
  ...(m && { withheld: m }),
  run: (c, g, { call: h, floors: k, cutAt: x }) =>
    JNr({
      members: [e],
      event: r,
      e: c,
      call: h,
      signal: g.signal,
      hookOrigin: n,
      raise: s,
      gestureAt: a,
      withheld: m,
      origin: g.origin,
      floors: k,
      cutAt: x
    }),
  hop: {
    key: e.hopKey,
    run: (c) =>
      JNr({
        members: Te(c.members, f, r),
        event: r,
        e: c.e,
        call: c.call,
        signal: c.signal,
        hookOrigin: n,
        raise: s,
        gestureAt: a,
        withheld: m,
        origin: c.origin,
        floors: c.floors,
        cutAt: c.cutAt
      })
  }
});
function ho(e) {
  return e.loaded.link !== void 0 ? Yt(e) : go(e);
}
function Fe(e) {
  let { loadedModules: r, moduleSeats: n } = Ie();
  return r.find((s) => s.name === e)?.tier ?? n.get(e) ?? "user";
}
var JUt = (e) => ZZs.some((r) => r === Fe(e));
function KHo(e, r, n) {
  let s = e.matcherFor(r);
  if (s === void 0) return !0;
  try {
    if (Evt(s, n, r0e(r))) return !0;
  } catch (a) {
    return (
      t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(a)}); the hop decides`),
      !0
    );
  }
  return (X(e, r, n), !1);
}
function yo(e, r, { keys: n, e: s }) {
  let a = e.matcherFor(r);
  if (a === void 0 || !$_(s)) return !1;
  try {
    let m = r0e(r),
      c = n.some((g) => Object.hasOwn(s, g) && !Ber(a, { [g]: s[g] }, m));
    if (c) X(e, r, s);
    return c;
  } catch (m) {
    return (
      t(`hooks module ${e.label}: on('${r}') matcher threw on the host (${d(m)}); the hop decides`),
      !1
    );
  }
}
function jGe(e, r, { only: n, e: s, among: a, pinned: f } = {}) {
  let m = (a ?? Ie().loadedModules).flatMap((g) => {
    if (!(g.hooks(e) && g.name === (n ?? g.name) && mu(g))) return [];
    let k = Q(g, e, r);
    return k === void 0 || (f !== void 0 && yo(k, e, f)) ? [] : [k];
  });
  if (s === void 0) return m;
  let c = m.findIndex((g) => KHo(g, e, s));
  return c === -1 ? [] : m.slice(c);
}
function ko({ event: e, e: r, origin: n, only: s }) {
  let a = ge(jGe(e, n, { only: s }), e, r)
    .filter((m) => m.link === void 0 && m.hopKey.isDeclared?.(m.name) !== !1 && oe(m, e, r))
    .map((m) => m.name);
  return a.length === 0
    ? void 0
    : new He(
        `${e} refused: the hooks worker is being replaced, and a hook on it with a .catch (${a.join(", ")}) cannot be asked until the reload is in`
      );
}
import { AsyncLocalStorage as yr } from "async_hooks";
var Pdn = new yr();
function QNr(e, r) {
  let n = { isOver: !1 },
    s = e.run(n, r),
    a = () => {
      n.isOver = !0;
    };
  return (s.then(a, a), s);
}
var rbi = (e) => QNr(Pdn, e);
var VHo = () => Pdn.getStore()?.isOver === !1;
function a5n(e, r) {
  let n = [...Ie().hooksRespawns],
    s = n.length > 0 && VHo(),
    a = s ? ko(e) : void 0;
  if (a !== void 0) return (t(a.message, { level: "error" }), Promise.reject(a));
  if (n.length === 0 || s) return;
  let f = Promise.all(n).then(() => {
    return;
  });
  return (r !== void 0 ? si(f, r, () => xKr(r)) : f).then(() => a5n(e, r));
}
function QUt(e, r) {
  let n = Ie();
  return n.hooksRespawns.size > 0 &&
    n.loadedModules.some((a) => a.link === void 0 && a.hooks(e.event))
    ? a5n(e, r)
    : void 0;
}
function qHo(e, r) {
  let s = e.event === "classic.SessionEnd" ? void 0 : QUt(e, r);
  return s !== void 0 && r !== void 0 ? s.catch((f) => Promise.reject(r.aborted ? E_e(r) : f)) : s;
}
function CO(e, r, n = {}) {
  let s = [],
    a = new Map();
  for (let f of jGe(e, r, n)) {
    let m = ho({
      loaded: f,
      event: e,
      origin: r,
      raise: n.raise,
      gestureAt: n.gestureAt,
      owners: a,
      withheld: n.withheld
    });
    (a.set(m, f), s.push(m), n.drawn?.(m, f));
  }
  return s;
}
function yY(e, r, n) {
  let s = r0e(e);
  return Ie()
    .loadedModules.filter((a) => {
      let f = a.hooks(e) && mu(a) ? Q(a, e, n) : void 0;
      if (f === void 0) return !1;
      return Ber(f.matcherFor(e), r, s);
    })
    .map((a) => a.name);
}
var lo = (e) => e;
var Qt = (e) => e;
var wo = (e) => [...e];
function p8(e) {
  let r = e?.map(a7e).findLast((n) => n !== void 0);
  if (r === void 0) return LKe;
  return Object.freeze({ plugin: r, tier: Fe(r) });
}
function izs(e) {
  let { promise: r, resolve: n } = Promise.withResolvers();
  return (
    e.add(r),
    {
      respawn: r,
      loaded: () => {
        (e.delete(r), n());
      }
    }
  );
}
var bo = (e, r) => ({
  name: e.loaded.name,
  tier: e.loaded.tier,
  run: (n, s, { open: a, floors: f }) =>
    uo({
      members: [e.loaded],
      event: e.event,
      e: n,
      open: a,
      signal: s.signal,
      hookOrigin: e.origin,
      raise: e.raise,
      origin: s.origin,
      floors: f
    }),
  hop: {
    key: e.loaded.hopKey,
    run: ({ members: n, e: s, open: a, signal: f, origin: m, floors: c }) =>
      uo({
        members: Te(n, r, e.event),
        event: e.event,
        e: s,
        open: a,
        signal: f,
        hookOrigin: e.origin,
        raise: e.raise,
        origin: m,
        floors: c
      })
  }
});
function azs(e, r, n = {}) {
  let s = new Map();
  return jGe(e, r, n).flatMap((a) => {
    if (a.streamLinks !== void 0) return wo(nr({ loaded: a, event: e, origin: r }));
    let f = bo({ loaded: a, event: e, origin: r, raise: n.raise, gestureAt: void 0 }, s);
    return (s.set(f, a), [f]);
  });
}
var obi = 3;
var lzs = (e) => `${e}: the op was aborted: the plugin's environment was unloaded`;
export {
  n5n,
  r7e,
  o7e,
  Cdn,
  HD,
  XGs,
  OTe,
  _yt,
  wQ,
  s7e,
  ig,
  byt,
  AO,
  MTe,
  UDe,
  JGs,
  QGs,
  BHo,
  ZGs,
  BDe,
  jHo,
  i7e,
  mde,
  ezs,
  tzs,
  qUt,
  YUt,
  GNr,
  r5n,
  gde,
  XUt,
  WHo,
  zNr,
  KNr,
  VNr,
  $he,
  o5n,
  BGe,
  f8,
  vG,
  qNr,
  s5n,
  GHo,
  i5n,
  a7e,
  nzs,
  Syt,
  ebi,
  YNr,
  tbi,
  Rdn,
  zHo,
  nbi,
  wyt,
  xdn,
  rzs,
  XNr,
  ozs,
  szs,
  JNr,
  JUt,
  KHo,
  jGe,
  Pdn,
  QNr,
  rbi,
  VHo,
  a5n,
  QUt,
  qHo,
  CO,
  yY,
  p8,
  izs,
  azs,
  obi,
  lzs
};

//# sourceMappingURL=chunk-mpcygg5e.js.map
