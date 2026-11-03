// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { R, Qe, N, d, E } from "./chunk-fs43t96t.js";
import { It } from "./chunk-dc0nzty2.js";
import { _, te, tN, t } from "./chunk-4kxznmzw.js";
import { Ur } from "./chunk-45h8cn90.js";
import { I } from "./chunk-a16y5hcz.js";
import { a, Zs } from "./chunk-4cgvah10.js";
import { jr, zt, da } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { l } from "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import { _xe, ct } from "./chunk-qmmh8tq2.js";
import { Dn } from "./chunk-qywdxehb.js";
import { lSt, zG, vWt, B8, BY, BO, f7, VG } from "./chunk-p56qmwgb.js";
import { IZ } from "./chunk-d54avynm.js";
import { Mt, hi, Ve } from "./chunk-adv24f35.js";
import { so, Uh, kZ, On, e4e, ER, Vn, ic, yot, rT } from "./chunk-5rw2zfa0.js";
import { pa } from "./chunk-ajtyjx88.js";
import { No } from "./chunk-8r2m7vfp.js";
import { ln, ZE } from "./chunk-7c3thgax.js";
import { U7e, ABt, lU, Hcn, wd, Ode, B7e } from "./chunk-w35wpr7b.js";
import { Ff, Oo } from "./chunk-0evsancd.js";
import { kx, a3s, l3s, Sf } from "./chunk-vn4qkmxw.js";
import { Kk } from "./chunk-d65ze5ng.js";
import { dUt } from "./chunk-6h7ejyet.js";
import {
  dO,
  qIs,
  COr,
  Jmt,
  b0s,
  M2n,
  egt,
  Hd,
  ib,
  Rd,
  I_,
  eY,
  Qg,
  Mf,
  mDr,
  sv,
  fi,
  Xn
} from "./chunk-j0tbz6ra.js";
import { ne } from "./chunk-39xmt821.js";
import { HD, XGs, OTe, _yt, wQ, s7e, ig, byt, UDe, BDe } from "./chunk-mpcygg5e.js";
import { Ndn, _de, nBt, g8 } from "./chunk-783pymr7.js";
import { Idn, qb, zC, Fhe, yde } from "./chunk-d2975tv6.js";
import {
  zRt,
  fPe,
  Fds,
  Uds,
  JZr,
  xat,
  _pe,
  Pat,
  Bds,
  Iat,
  qRt,
  Qfr,
  Zfr
} from "./chunk-nsach619.js";
import { c3e } from "./chunk-fydq2gm2.js";
import { fwe } from "./chunk-188443zx.js";
import { pdt, N6e } from "./chunk-16vs4h5f.js";
import { a8e } from "./chunk-1w30mhyz.js";
import { z } from "./chunk-p197ae0z.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { createHash as K, randomUUID as we } from "crypto";
import { readFile as B, stat as Ce } from "fs/promises";
import { join as H } from "path";
function X(e) {
  let n = e.manifest.mcpServers,
    r = (typeof n === "string" ? [n] : Array.isArray(n) ? n : []).filter(
      (f) => typeof f === "string" && HD(f)
    ),
    p = r.filter((f) => XGs(f));
  return { local: p, remoteCount: r.length - p.length };
}
async function Z(e, n, r) {
  let p = await Promise.all(
      n.map(async (m) => {
        try {
          let u = await s7e(m, e.path, e.repository, void 0, void 0, !0, r);
          return { spec: m, result: u };
        } catch (u) {
          return (
            t(`post-install bundle read failed for ${m}: ${d(u)}`, { level: "warn" }),
            { spec: m, result: void 0 }
          );
        }
      })
    ),
    f = new Map(),
    o = [];
  for (let { spec: m, result: u } of p)
    if (!u) o.push(m);
    else if ("status" in u)
      f.set(u.manifest.name, {
        serverName: u.manifest.name,
        schema: u.configSchema,
        existingConfig: u.existingConfig
      });
  return { bundles: [...f.values()], unreadable: o };
}
function j(e) {
  let n = e.indexOf("=");
  if (n <= 0)
    throw new R(
      `--config expects KEY=VALUE, got "${e}". Use --config key=value (repeatable).`,
      "--config pair has no key"
    );
  return { key: e.slice(0, n), raw: e.slice(n + 1) };
}
function Q(e, n, r, p) {
  let f = [],
    o = new Map();
  for (let m of e) {
    let { key: u, raw: g } = j(m);
    if (n && Object.hasOwn(n, u)) {
      f.push(m);
      continue;
    }
    let s = r.flatMap(({ serverName: y, schema: v }) => {
        let C = [],
          k = `${y}.`;
        if (u.startsWith(k) && Object.hasOwn(v, u.slice(k.length)))
          C.push({ serverName: y, field: u.slice(k.length), bare: !1 });
        if (Object.hasOwn(v, u)) C.push({ serverName: y, field: u, bare: !0 });
        return C;
      }),
      [h, ...S] = s;
    if (h && S.length === 0) {
      if (h.bare && p.unreadable.length + p.remoteCount > 0)
        throw new R(
          `--config key "${u}" must name its server, because a bundled MCP server whose keys are unknown may declare it too; use ${Mt(`${h.serverName}.${h.field}`)}.` +
            M(p),
          "--config bare key with an unread bundled server"
        );
      let y = o.get(h.serverName) ?? [];
      (y.push(`${h.field}=${g}`), o.set(h.serverName, y));
      continue;
    }
    if (h)
      throw new R(
        `--config key "${u}" is declared by more than one bundled MCP server; use ${s.map((y) => Mt(`${y.serverName}.${y.field}`)).join(" or ")}.`,
        "--config key is ambiguous between bundled servers"
      );
    let w = [
      ...Object.keys(n ?? {}),
      ...r.flatMap(({ serverName: y, schema: v }) => Object.keys(v).map((C) => Mt(`${y}.${C}`)))
    ];
    throw new R(
      `--config key "${u}" isn't declared in this plugin's userConfig` +
        (r.length > 0 ? " or by its bundled MCP servers." : ".") +
        (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : "") +
        M(p),
      "--config key is not declared"
    );
  }
  return { pluginPairs: f, bundlePairs: o };
}
function M({ unreadable: e, remoteCount: n }) {
  let r = [];
  if (e.length > 0)
    r.push(
      `the bundled ${e.map((f) => Ve(f)).join(", ")} could not be read, so its keys are unknown \u2014 re-run with --debug-file <path> to log why`
    );
  if (n > 0)
    r.push(
      `${n} bundled ${I(n, "server is", "servers are")} fetched from a URL at session start and can only be configured in Claude Code (/plugin \u2192 Installed \u2192 Configure)`
    );
  let p = r.join("; ");
  return p ? ` (${p[0].toUpperCase()}${p.slice(1)}.)` : "";
}
function V(e, n) {
  let r = wQ(e.existingConfig, e.schema);
  if (r.valid) return;
  let p = Mt(e.serverName),
    f = Object.entries(e.schema)
      .filter(([m, u]) => {
        let g = so(e.existingConfig, m);
        return u.required === !0 && (g === void 0 || g === "");
      })
      .map(([m]) => Mt(`${p}.${m}`)),
    o =
      f.length > 0
        ? `set ${f.join(", ")} with --config KEY=VALUE`
        : `${r.errors.map((m) => Mt(m)).join("; ")} \u2014 fix it with --config ${p}.KEY=VALUE`;
  return `MCP server "${Ve(e.serverName)}" needs configuration before it can start: ${o}, or in Claude Code run /plugin, select "${Ve(n)}" in the Installed tab, and choose Configure.`;
}
import { basename as ye } from "path";
function KAn(e, n) {
  let r = MJr(n);
  return r === null
    ? e
    : `${e}
${ne.warning} ${r}`;
}
function MJr(e) {
  try {
    if (e === void 0 || e === "managed") return null;
    let n = ER(e),
      r = ln(n);
    if (r === void 0 || (n === "userSettings" && ye(r) === rT.cowork)) return null;
    if (Jmt(n) || (n !== "userSettings" && COr(r))) return null;
    let p = ZE(n).filter((u) => u.file === r && u.severity !== "warning"),
      [f] = p;
    if (f === void 0) return null;
    let o = p.length - 1,
      m =
        f.path !== ""
          ? `its "${Ve(f.path, 80)}" ${o > 0 ? `and ${o} other ${I(o, "value")} are` : "is"} not valid`
          : f.errorClass === "unreadable"
            ? "it could not be read"
            : "it is not a JSON object";
    return `${hi(r)} does not load (${m}), so Claude Code ignores the whole file, including anything this command wrote there. Fix the file, then run this command again if its change is missing. If a newer Claude Code wrote the file, update Claude Code instead.`;
  } catch (n) {
    return (
      t(`settings file check after a plugin command skipped: ${d(n)}`, { level: "warn" }),
      null
    );
  }
}
class Eie extends R {
  result;
  pluginCommandErrorCategory;
  constructor(e, n = {}) {
    super(e, "plugin operation returned a failure result");
    if (
      ((this.name = "PluginOperationFailedError"),
      (this.result = n),
      n.failureCode === "invalid_plugin_id" ||
        n.failureCode === "plugin_folder_held" ||
        n.failureCode === "install_records_unreadable" ||
        n.failureCode === "directory_identity_changed" ||
        n.failureCode === "directory_binding_unreadable" ||
        n.failureCode === "directory_loaded")
    )
      this.pluginCommandErrorCategory = "validation";
  }
}
function oe(e) {
  let n =
    e.kind === "command_source"
      ? [e.kind, e.pluginId, e.command, e.mode, e.catalogRevision]
      : [e.kind, e.pluginId, e.command, e.archiveUrl, e.catalogRevision];
  return K("sha256").update(_(n), "utf8").digest("hex");
}
function DJr(e) {
  return { ...e, sha256: oe(e) };
}
function q(e, n) {
  return n === void 0 ? e : { ...e, acceptCommandMatched: Y(n, e) };
}
async function ae(e, n, r) {
  return {
    kind: "entry_helper",
    pluginId: n,
    command: e.command,
    archiveUrl: yot(e).destination,
    catalogRevision: await se(n, r)
  };
}
async function se(e, n) {
  let r = `unreadable:${we()}`;
  if (z() && n !== void 0) return r;
  let { marketplace: p } = On(e),
    f = p === void 0 ? void 0 : ib(await Rd(n), p);
  if (f === void 0) return r;
  if (f.source.source === "claudeai") return r;
  let o = f.installLocation;
  try {
    if (f.source.source === "github" || f.source.source === "git") {
      if (
        await Ce(H(o, ".git")).then(
          () => !0,
          () => !1
        )
      ) {
        let u = _xe(o, {}),
          g = await ct(It(), [...u.inCheckoutArgs, "rev-parse", "HEAD"], {
            cwd: o,
            env: u.env,
            stdin: "ignore"
          });
        return g.code === 0 ? `git:${g.stdout.trim()}` : r;
      }
      if (I_(o) === void 0) {
        let u = (await B(H(o, lSt), "utf8")).trim();
        return /^(?:[0-9a-f]{40}|[0-9a-f]{64})$/i.test(u) ? `gcs:${u}` : r;
      }
    }
    return f.source.source === "settings"
      ? `settings:${be([await ee(o), F(f.source)])}`
      : `sha256:${await ee(o)}`;
  } catch {
    return r;
  }
}
async function ee(e) {
  let n = (o) => ["ENOENT", "ENOTDIR"].includes(E(o) ?? ""),
    r,
    p = !0;
  try {
    r = await B(H(e, ".claude-plugin", "marketplace.json"), "utf8");
  } catch (o) {
    if (!n(o)) throw o;
    ((r = await B(e, "utf8")), (p = !1));
  }
  let f = p
    ? await B(H(e, "package.json"), "utf8").catch((o) => {
        if (n(o)) return null;
        throw o;
      })
    : null;
  return K("sha256")
    .update(_([F(te(No(r))), f === null ? null : F(te(No(f)))]), "utf8")
    .digest("hex");
}
function be(e) {
  return K("sha256").update(_(e), "utf8").digest("hex");
}
function F(e) {
  if (Array.isArray(e)) return ["[", ...e.map(F)];
  if (e !== null && typeof e === "object")
    return [
      "{",
      ...Object.keys(e)
        .sort()
        .map((n) => [n, F(e[n])])
    ];
  return e;
}
function Y(e, n) {
  return e !== void 0 && e.trim().toLowerCase() === oe(n);
}
async function QSe(e) {
  let n = e.failureCode !== void 0 && Se.has(e.failureCode) ? e : { ...e, shownCommand: void 0 };
  await Ff(
    tN(_({ ...n, nonce: W.value })) +
      `
`
  );
}
var W = ve({ value: void 0 }, (e) => {
  e.value = void 0;
});
function ais() {
  return W.value;
}
function lis() {
  ((W.value = i.CLAUDE_CODE_RESULT_NONCE || void 0), i.unset("CLAUDE_CODE_RESULT_NONCE"));
}
var Se = new Set([
  "command_source_refused",
  "command_source_declined",
  "entry_helper_unconfirmed",
  "entry_helper_declined"
]);
function ie(e, n) {
  if (e instanceof Eie) return e.result.failureCode ?? "op_failed";
  if (e instanceof wd && n === "update") {
    let r = e.telemetryMessage;
    if (r.startsWith(Ndn)) return r.slice(Ndn.length);
  }
  return HJr(e);
}
function HJr(e) {
  if (e instanceof wd) return B7e(e).code;
  if (e instanceof dO) return `claudeai_${e.code}`;
  return `error_${le(g8(e))}`;
}
function le(e) {
  return e.replaceAll("-", "_");
}
var _e = {
    invalid_plugin_id: "validation",
    plugin_folder_held: "validation",
    marketplace_policy_blocked: "policy",
    plugin_policy_blocked: "policy",
    dependency_policy_blocked: "policy",
    directory_unavailable: "network",
    directory_off: "validation",
    directory_not_in_session: "validation",
    installed_from_other_marketplace: "validation",
    dependency_pinned_version_unsatisfied: "validation",
    directory_listing_not_installable: "validation",
    directory_identity_changed: "validation",
    directory_binding_unreadable: "validation",
    replace_unavailable: "validation",
    replace_needs_full_id: "validation",
    replace_needs_fresh_listing: "network",
    install_records_unreadable: "validation",
    not_installed: "validation",
    not_installed_at_scope: "validation",
    already_in_goal_state: "validation",
    settings_still_on: "validation"
  },
  ke = {
    install: "claude plugin install failed with an unclassified error",
    uninstall: "claude plugin uninstall failed with an unclassified error",
    enable: "claude plugin enable failed with an unclassified error",
    disable: "claude plugin disable failed with an unclassified error",
    "disable-all": "claude plugin disable --all failed with an unclassified error",
    update: "claude plugin update failed with an unclassified error",
    prune: "claude plugin prune failed with an unclassified error"
  };
function G(e, n) {
  return n.length === 0
    ? e
    : [e.trimEnd(), ...n].join(`
`);
}
async function zYe(e, n, r, p, f, o, m = []) {
  let u = e instanceof Eie ? e.result.failureCode : void 0,
    g = g8(e),
    s = g === "unknown" && u !== void 0 ? (_e[u] ?? g) : g,
    h = n === "disable-all" ? "disable" : n === "prune" ? void 0 : n;
  if (f && h) {
    let C = e instanceof Eie ? e.result : {};
    await QSe({
      command: h,
      outcome: "failed",
      ...(n === "disable-all" ? { all: !0 } : { plugin: r }),
      pluginId: C.pluginId ?? f.pluginId ?? o,
      scope: f.scope,
      message: ic(G(d(e), m)),
      failureCode: ie(e, n),
      alreadyInGoalState: C.alreadyInGoalState,
      installedScope: C.installedScope,
      reverseDependents: C.reverseDependents,
      dependencies: C.dependencies,
      disableFirst: C.disableFirst,
      governingScope: C.governingScope,
      shownCommand: f.shownCommand && DJr(f.shownCommand)
    });
  }
  if (e instanceof wd && (n === "install" || n === "update")) {
    if ((console.error(ic(G(d(e), m))), n === "install")) {
      let { code: C, kind: k } = B7e(e);
      if (k === "bad") await zt("cli_plugin_install", C);
      else await da("cli_plugin_install", C);
    } else if (n === "update") await da("cli_plugin_update", ie(e, "update"));
    return Oo(1);
  }
  let S = e instanceof dO ? `claudeai_${e.code}` : void 0;
  if (s === "unknown" && !(e instanceof Eie) && S === void 0) l(Qe(N(e), ke[n]));
  else t(`Plugin command "${n}" failed: ${d(e)}`, { level: "error" });
  let w = r ? `${n} plugin "${r}"` : n === "disable-all" ? "disable all plugins" : `${n} plugins`;
  console.error(ic(G(`${ne.cross} Failed to ${w}: ${d(e)}`, m)));
  let y = S ?? (u !== void 0 && (g === "unknown" || u === "not_installed") ? u : le(s));
  switch (n) {
    case "install":
      await zt("cli_plugin_install", y);
      break;
    case "uninstall":
      await zt("cli_plugin_uninstall", y);
      break;
    case "update":
      await zt("cli_plugin_update", y);
      break;
    case "enable":
      await zt("cli_plugin_enable", "cli_plugin_enable_failed");
      break;
    default:
      break;
  }
  let v = r ? await fwe(o ?? r, Sf(), p) : {};
  return (
    await Zs("tengu_plugin_command_failed", {
      command: c(n),
      error_category: c(s),
      ...{ failure_code: ce(u) },
      ...v,
      ...(o !== void 0 ? { aliased_id: !0 } : {})
    }),
    Oo(1)
  );
}
function re(e, n, r = "") {
  let p = {};
  for (let m of e) {
    let { key: u, raw: g } = j(m),
      s = Mt(`${r}${u}`),
      h = (g.split(/\r\n|\r|\n/, 1)[0] ?? "").trim(),
      S = Object.hasOwn(n, u) ? n[u] : void 0;
    if (!S) {
      let w = Object.keys(n).map((y) => Mt(`${r}${y}`));
      throw Error(
        `--config key "${s}" isn't declared in this plugin's userConfig.` +
          (w.length > 0 ? ` Known keys: ${w.join(", ")}.` : "")
      );
    }
    if (h === "")
      throw Error(`--config ${s}: value is empty. Omit the flag to leave "${s}" unset.`);
    if (S.type === "number") {
      let w = Number(h);
      if (Number.isNaN(w)) throw Error(`--config ${s}: "${h}" is not a number`);
      p[u] = w;
    } else if (S.type === "boolean") {
      let w = a8e(h);
      if (w === void 0)
        throw Error(`--config ${s}: "${h}" is not a boolean (use true/false, 1/0, yes/no, on/off)`);
      p[u] = w;
    } else p[u] = h;
  }
  let f = Kk(n, (m, u) => Object.hasOwn(p, u)),
    o = wQ(p, f);
  if (!o.valid) throw Error(`--config validation failed: ${o.errors.map((m) => Mt(m)).join("; ")}`);
  return p;
}
async function Pe(e, n, r) {
  Hd(r);
  let { enabled: p, disabled: f } = await sv(r),
    o = byt([...p, ...f], e),
    m = n ?? [],
    u = m.length > 0;
  if (!o) {
    if (u)
      throw Error(
        `--config was given but plugin "${e}" failed to load after install \u2014 run \`claude plugin list\` to see why.`
      );
    return "";
  }
  let g = o.manifest.userConfig,
    s = g && Object.keys(g).length > 0 ? g : void 0,
    h = m.map(j).some(({ key: P }) => !(s && Object.hasOwn(s, P))),
    { local: S, remoteCount: w } = X(o),
    { bundles: y, unreadable: v } =
      S.length > 0 && (o.enabled || h) ? await Z(o, S, r) : { bundles: [], unreadable: [] },
    C = { unreadable: v, remoteCount: w };
  if (u) {
    if (!s && y.length === 0)
      throw Error(
        `--config was given but plugin "${e}" declares no userConfig options` +
          (S.length > v.length ? " and its bundled MCP servers declare no user_config." : ".") +
          M(C)
      );
    let { pluginPairs: P, bundlePairs: A } = Q(m, s, y, C),
      U = s && P.length > 0 ? re(P, s) : void 0,
      he = y.flatMap((x) => {
        let L = A.get(x.serverName);
        return L ? [{ bundle: x, values: re(L, x.schema, `${x.serverName}.`) }] : [];
      });
    if (s && U) await UDe(ig(o), U, s, r);
    for (let { bundle: x, values: L } of he)
      (await _yt(o.repository, x.serverName, L, x.schema, r),
        (x.existingConfig = (await OTe(o.repository, x.serverName)) ?? {}));
  }
  let k = [];
  if (s) {
    let P = Object.keys(await BDe(o));
    if (P.length > 0) {
      let A = P.filter((U) => s[U]?.required === !0);
      k.push(
        `${P.length} userConfig ${I(P.length, "option")} not yet set` +
          (A.length > 0 ? ` (${A.length} required)` : "") +
          ` \u2014 run /plugin configure ${e} in Claude Code, or pass --config KEY=VALUE.`
      );
    }
  }
  if (o.enabled)
    for (let P of y) {
      let A = V(P, o.name);
      if (A) k.push(A);
    }
  return k.join(`
`);
}
async function de(
  e,
  n,
  { yes: r = !1, acceptedCommand: p, acceptCommand: f, onShown: o, storageV5: m } = {}
) {
  if (typeof n.source !== "object" || n.source.source !== "command") return;
  if (BO()) {
    Ur(`${f7()}
`);
    return;
  }
  if (n.source.mode === "link" && O() === "windows") {
    Ur(`${ABt}
`);
    return;
  }
  let u = n.source.command,
    g = lU(n.source);
  if (p === g && !U7e()) return;
  let s = {
    kind: "command_source",
    pluginId: e,
    command: u,
    mode: n.source.mode === "link" ? "link" : "copy",
    catalogRevision: await se(e, m)
  };
  o?.({
    ...q(s, f),
    ...(p !== void 0 && { previousAcceptance: p !== g ? "changed" : "unreliable" })
  });
  let { name: h, marketplace: S } = On(e),
    w = Mt(h ?? "", 200),
    y = Mt(S ?? "", 200),
    v =
      `"${w}" is installed by running a command from marketplace "${y}" on this machine` +
      (p === void 0
        ? ""
        : p !== g
          ? " \u2014 and that command (or how its output is used) CHANGED since you accepted it"
          : " \u2014 your earlier acceptance is recorded where it cannot be relied on (a plugins root inside a workspace, on a network location, or one that could not be resolved), so please confirm it again") +
      `:
  ${u}
  (${Hcn(n.source)})
`;
  Ur(v);
  let C = await J({ yes: r, acceptCommand: f, shown: s, disclosure: v });
  return C === "accepted"
    ? { kind: "accepted", grantKey: g }
    : C === "declined"
      ? { kind: "declined" }
      : void 0;
}
async function J({ yes: e = !1, acceptCommand: n, shown: r, disclosure: p = "" }) {
  let f = process.stdout.isTTY && process.stdin.isTTY;
  if (e || (r !== void 0 && Y(n, r))) {
    if (!dUt()) return "accepted";
    if (!f)
      return (
        Ur(`${e ? "-y/--yes" : "--accept-command"} is ignored inside a Claude Code session: run this in your own terminal to accept the command shown above.
`),
        "unconfirmed"
      );
  }
  if (!f && n !== void 0 && r !== void 0 && !Y(n, r))
    return (
      Ur(`--accept-command does not name the command shown above (it may have changed since it was shown), so it was not run. Show it to the person again before accepting it.
`),
      "unconfirmed"
    );
  if (!f)
    return (
      Ur(
        dUt()
          ? `Not an interactive terminal, so the command was only displayed, not accepted. Run this in your own terminal (outside the Claude Code session) to confirm the command shown above.
`
          : `Not an interactive terminal, so the command was only displayed, not accepted. Re-run in a terminal to confirm it, or pass -y/--yes to accept the command shown above.
`
      ),
      "unconfirmed"
    );
  return (await N6e("Run this command now?", process.stdin, {
    ignoreAnswersWithinMs: pdt,
    reaskPreamble: p
  }))
    ? "accepted"
    : "declined";
}
async function dis(e, n = {}, r) {
  if (e4e(e) !== null) return null;
  let { name: p, marketplace: f } = On(e);
  if (!p) return null;
  let o = f ?? n.resolvedMarketplace;
  if (!o)
    try {
      o = (await Zfr(p, r))?.marketplace;
    } catch (S) {
      if (S instanceof wd) return null;
      throw S;
    }
  if (!o) return null;
  let m = `${p}@${o}`;
  if (await JZr(m, n.scope ?? "user", r)) return null;
  let u = await qRt(m, void 0, r);
  if (u === null) return null;
  let g = `${Qfr(u)}
`;
  Ur(g);
  let s = await ae(u, m, r);
  n.onShown?.(q(s, n.acceptCommand));
  let h = await J({ yes: n.yes, acceptCommand: n.acceptCommand, shown: s, disclosure: g });
  return h === "accepted" ? u : h;
}
async function cis(e, n = {}, r) {
  if (e4e(e) !== null) return;
  let { name: p, marketplace: f } = On(e);
  if (!p) return;
  let o = await Rd(r),
    m = f,
    u;
  if (!m) {
    let k;
    try {
      k = await Zfr(p, r);
    } catch (P) {
      if (P instanceof wd) return;
      throw P;
    }
    if (!k) return;
    ((m = k.marketplace), (u = k.entry), n.onResolvedMarketplace?.(m));
  }
  let g = ib(o, m);
  if (VG(g?.source)) return;
  let s = `${p}@${m}`,
    h = u && n.acceptCommand === void 0 ? { entry: u } : void 0;
  if (!h) {
    let k = await zRt(m, g, r);
    n.onMarketplaceRefreshResult?.(k);
    try {
      h = await eY(s, r);
    } catch (P) {
      if (P instanceof wd) return;
      throw P;
    }
  }
  let S = h ? Ode(h.entry.source) : void 0;
  if (!h || !S) return;
  let w = (z() && r !== void 0 ? await Mf(r) : Qg()).plugins[s] ?? [],
    y = lU(S),
    v = !U7e(),
    C = v && w.some((k) => k.sourceCommand === y);
  if (await M2n(s, n.scope ?? "user", r)) {
    if (!C) {
      let k = w.every((P) => P.sourceCommand === void 0);
      Ur(
        `"${Mt(On(s).name ?? "", 200)}" is already installed, and its marketplace ` +
          (k
            ? "entry now installs it by running a command on this machine that has not been reviewed yet."
            : "has since changed the command that installs it (or how its output is used).") +
          ` Review and accept it: ${Uh("plugin update", s, { extra: (n.scope ?? "user") === "user" ? void 0 : `--scope ${n.scope}`, fallback: "an explicit plugin update reviews it" })}.
`
      );
    }
    return;
  }
  if (C) return { kind: "accepted", grantKey: y };
  return de(s, h.entry, {
    yes: n.yes,
    acceptedCommand: v ? w.find((k) => k.sourceCommand !== void 0)?.sourceCommand : void 0,
    acceptCommand: n.acceptCommand,
    onShown: n.onShown,
    storageV5: r
  });
}
async function uis(e, n = "user", r, p, f, o, m, u = {}) {
  let g = [];
  try {
    let s = await xat(
      u.resolvedPlugin ?? e,
      n,
      {
        shownSourceCommand: p,
        shownEntryHelper: f,
        announceRefreshResult: m,
        replaceInstalledCopy: u.replaceInstalledCopy,
        npmRegistry: u.npmRegistry,
        gitHubHttpsFallback: qIs((C) => {
          g.push(C);
        })
      },
      o
    );
    if (!s.success) throw new Eie(s.message, s);
    let h = s.pluginId || e,
      S = s.scope || n;
    a("tengu_plugin_installed_cli", {
      ...(await fwe(h, Sf(), o)),
      plugin_id: _de(h),
      scope: c(S),
      install_source: b("cli-explicit"),
      ...nBt(h, mDr(h, { scope: S })),
      ...Idn({ pluginId: h, surface: "cli", replaced: s.switched !== void 0 }),
      ...(s.aliasedId ? { aliased_id: !0, ...(s.reenabled && { reenabled: !0 }) } : {})
    });
    let w = "",
      y = r && r.length > 0 ? !0 : void 0;
    try {
      if (s.nothingWritten) {
        if (y)
          ((w = `${ne.warning} --config values were not saved, because this command changed nothing. To set them, run /plugin configure ${s.pluginId || e} in Claude Code.`),
            (y = !1));
      } else w = await Pe(s.pluginId || e, r, o);
    } catch (C) {
      let k = d(C);
      if ((t(`post-install userConfig step failed: ${k}`, { level: "warn" }), r && r.length > 0))
        ((w = `${ne.warning} Installed, but --config not applied: ${k}`), (y = !1));
    }
    let v = KAn(
      [s.message, ...g, ...(w ? [w] : [])].join(`
`),
      s.scope ?? n
    );
    if (u.json)
      await QSe({
        command: "install",
        outcome: "ok",
        plugin: e,
        pluginId: s.pluginId,
        scope: s.scope || n,
        message: ic(v),
        configApplied: y,
        installedVersion: s.installedVersion,
        availableVersion: s.availableVersion
      });
    return v;
  } catch (s) {
    return zYe(
      s,
      "install",
      e,
      o,
      u.json ? { scope: n, shownCommand: u.shownCommand } : void 0,
      s instanceof Eie && s.result.aliasedId ? s.result.pluginId : void 0,
      g
    );
  }
}
async function ue(e, n) {
  let r = fPe(e),
    { enabled: p, disabled: f } = await fi(z() ? n : void 0);
  return a3s((z() && n !== void 0 ? await Mf(n) : Qg()).plugins, [...p, ...f], e, r);
}
async function y5t(
  e,
  n,
  r,
  { unlessNamedInSettings: p = !1, unlessDirectoryNameHeld: f = !1 } = {}
) {
  {
    let o = await egt(e, r);
    if (o && !(p && Uds(e))) {
      if (f && qb(e)) {
        let u = await yde().catch(() => {
          return;
        });
        if (u === void 0 || Fhe(u) || zC(u.keys(), e).length > 0) return { plugin: e, aliased: !1 };
      }
      let m = o.installed.pluginId;
      if (!n)
        Ur(`${Vn(`"${Ve(e, 120)}" is installed as ${m} (the same plugin from ${kZ(On(m).marketplace ?? "")}).`)}
`);
      return { plugin: m, aliased: !0 };
    }
  }
  return { plugin: e, aliased: !1 };
}
async function fis(e, n = "user", r = !1, p = !1, f = !1, o, m = {}) {
  let u = { plugin: e, aliased: !1 };
  try {
    u = await y5t(e, m.json, o, { unlessDirectoryNameHeld: !0 });
    let g = await _pe(u.plugin, n, !r, o);
    if (!g.success) throw new Eie(g.message, g);
    await Zs("tengu_plugin_uninstalled_cli", {
      ...(await fwe(g.pluginId || u.plugin, Sf(), o)),
      scope: c(g.scope || n),
      ...(u.aliased ? { aliased_id: !0 } : {}),
      ...(g.savedKept !== void 0 && { saved_kept: !0 })
    });
    let s = !1,
      h = async (S) => {
        if (m.json)
          await QSe({
            command: "uninstall",
            outcome: "ok",
            plugin: e,
            pluginId: g.pluginId,
            scope: g.scope || n,
            keptData: g.dataDirKept ?? r,
            ...(g.savedKept !== void 0 && { savedKept: g.savedKept.reason }),
            message: ic(S)
          });
        return S;
      };
    try {
      let S = await ue(n, o);
      if (p)
        return (
          Ur(`${ne.tick} ${Vn(g.message)}
`),
          (s = !0),
          await pe(S, n, { dryRun: !1, yes: f, deleteDataDir: !r }, o)
        );
      return h(g.message + l3s(S.orphans, n));
    } catch (S) {
      l(Qe(N(S), "claude plugin uninstall: post-uninstall orphan scan or prune failed"));
      let y = `(${p ? "prune" : "orphan scan"} failed: ${d(S)})`;
      if (s) return y;
      let v = p ? `${ne.tick} ${g.message}` : g.message;
      return h(`${v}
${y}`);
    }
  } catch (g) {
    return zYe(g, "uninstall", e, o, m.json ? { scope: n } : void 0, u.aliased ? u.plugin : void 0);
  }
}
async function pis(e = "user", { dryRun: n = !1, yes: r = !1 } = {}, p) {
  try {
    let f = await ue(e, p);
    return await pe(f, e, { dryRun: n, yes: r, deleteDataDir: !0 }, p);
  } catch (f) {
    return zYe(f, "prune");
  }
}
async function pe(e, n, r, p) {
  if (e.unloadable.length > 0)
    return `Skipped \u2014 cannot determine orphans: ${e.unloadable.map(Vn).join(", ")} failed to load. Fix or uninstall, then retry.`;
  if (e.orphans.size === 0)
    return e.autoCount === 0
      ? `Nothing to prune (no auto-installed plugins at ${n} scope).`
      : `Nothing to prune (${e.autoCount} auto-installed ${I(e.autoCount, "plugin", "plugins")} at ${n} scope, all still needed).`;
  let f = (z() && p !== void 0 ? await Mf(p) : Qg()).plugins,
    o = fPe(n),
    m = [...e.orphans].map((s) => {
      let h = kx(f[s], n, o);
      return `  ${Vn(s)}${h?.version ? ` (${Vn(h.version)})` : ""}`;
    }),
    u = `${e.orphans.size} auto-installed ${I(e.orphans.size, "plugin", "plugins")} no longer needed at ${n} scope:
${m.join(`
`)}`;
  if (r.dryRun)
    return `${u}
(dry run \u2014 nothing removed)`;
  if (!r.yes) {
    if (!process.stdin.isTTY || !process.stdout.isTTY) {
      let h = n === "user" ? "" : ` --scope ${n}`;
      return `${u}
Not a TTY \u2014 run \`claude plugin prune${h} -y\` to remove.`;
    }
    if (
      (Ur(`${u}
`),
      !(await N6e("Remove?")))
    )
      return "Aborted.";
  }
  let g = await b0s(e.orphans, n, o, { deleteDataDir: r.deleteDataDir }, p);
  return (
    await Zs("tengu_plugin_prune_cli", { scope: c(n), removed_count: g.length }),
    `Removed ${g.length} auto-installed ${I(g.length, "plugin", "plugins")}: ${g.map((s) => Vn(On(s).name)).join(", ")}`
  );
}
async function mis(e, n, r, p = {}) {
  let f = { plugin: e, aliased: !1 };
  try {
    f = await y5t(e, p.json, r, { unlessNamedInSettings: !0 });
    let o = await Pat(f.plugin, n, r);
    if (!o.success) throw new Eie(o.message, o);
    await Zs("tengu_plugin_disabled_cli", {
      ...(await fwe(o.pluginId || f.plugin, Sf(), r)),
      scope: ce(o.scope),
      ...(f.aliased ? { aliased_id: !0 } : {})
    });
    let m = KAn(o.message, o.scope ?? n);
    if (p.json)
      await QSe({
        command: "disable",
        outcome: "ok",
        plugin: e,
        pluginId: o.pluginId,
        scope: o.scope ?? n,
        message: ic(m)
      });
    return `${ne.tick} ${m}`;
  } catch (o) {
    return zYe(o, "disable", e, r, p.json ? { scope: n } : void 0, f.aliased ? f.plugin : void 0);
  }
}
async function gis(e, n = {}) {
  try {
    let r = await Bds(e);
    if (!r.success) throw new Eie(r.message, r);
    if ((await Zs("tengu_plugin_disabled_all_cli", {}), n.json))
      await QSe({ command: "disable", outcome: "ok", all: !0, message: ic(r.message) });
    return `${ne.tick} ${r.message}`;
  } catch (r) {
    return zYe(r, "disable-all", void 0, void 0, n.json ? {} : void 0);
  }
}
async function his(e, n, { yes: r = !1, json: p = !1, acceptCommand: f } = {}, o) {
  let m,
    u,
    g = { plugin: e, aliased: !1 };
  try {
    if (((g = await y5t(e, p, o)), !p))
      Ur(`${Vn(`Checking for updates for plugin "${g.plugin}"${n ? ` at ${n} scope` : ""}\u2026`)}
`);
    let s = await Iat(
        g.plugin,
        n,
        {
          explicit: !0,
          onEntryHelperDisclosure: async (w, y, v) => {
            Ur(`${w}
`);
            let C = await ae(y, v, o),
              k = await J({
                yes: r,
                acceptCommand: f,
                shown: C,
                disclosure: `${w}
`
              });
            return ((u = k === "accepted" ? void 0 : q(C, f)), k);
          },
          announceCommandSource: async (w, y, v) => {
            let C = await de(w, y, {
              yes: r,
              acceptedCommand: v,
              acceptCommand: f,
              onShown: (k) => {
                u = k;
              },
              storageV5: o
            });
            if (C?.kind === "accepted") u = void 0;
            if (C?.kind === "declined")
              throw new wd(
                "Aborted \u2014 the command was not run.",
                "plugin command source declined at the prompt"
              );
            return C?.grantKey;
          }
        },
        o
      ),
      h = Vn(s.message);
    m = s.pluginId;
    let { outcome: S } = s;
    if (S === "failed") {
      if (s.failureCode !== void 0 && Fds(s.failureCode)) throw new wd(h, `${Ndn}${s.failureCode}`);
      throw new Eie(h, { failureCode: s.failureCode, pluginId: s.pluginId });
    }
    if (p)
      await QSe({
        command: "update",
        outcome: "ok",
        plugin: e,
        pluginId: s.pluginId,
        scope: s.scope ?? n,
        message: h,
        updateOutcome: S,
        oldVersion: s.oldVersion,
        newVersion: s.newVersion,
        skipReason: s.skipReason,
        blockedBy: s.blockedBy,
        refreshFailed: s.refreshFailed,
        refreshRefusedByPolicy: s.refreshRefusedByPolicy
      });
    else {
      if (s.folderNote !== void 0)
        Ur(`${Vn(s.folderNote)}
`);
      Ur(`${ne.tick} ${h}
`);
    }
    if (s.outcome === "updated") {
      let w = s.pluginId || g.plugin;
      a("tengu_plugin_updated_cli", {
        ...(await fwe(w, Sf(), o)),
        old_version: pa(s.oldVersion),
        new_version: pa(s.newVersion),
        ...nBt(w, s.gitCommitSha),
        ...(g.aliased ? { aliased_id: !0 } : {})
      });
    }
    if (g.aliased) await jr("cli_plugin_update", { aliased_id: !0 });
    else await jr("cli_plugin_update");
    await Xn(0);
  } catch (s) {
    return zYe(
      s,
      "update",
      e,
      o,
      p ? { scope: n, pluginId: m, shownCommand: u } : void 0,
      g.aliased ? g.plugin : void 0
    );
  }
}
import { mkdir as fe, writeFile as $e } from "fs/promises";
import { dirname as Ie, join as T, relative as Re, resolve as me, sep as Ee } from "path";
var Oe = "https://anthropic.com/claude-code/plugin.schema.json",
  _5t = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];
function yis(e) {
  let n = IZ().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".")
    return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!vWt(e) || BY(e) || B8(e))
    return `Plugin name cannot be "${zG}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  let p = c3e(e);
  if (p?.severity === "error") return p.message;
  return null;
}
function _is(e) {
  let { name: n, description: r, author: p } = e,
    f = e.with ?? [],
    o = [],
    m = {
      $schema: Oe,
      name: n,
      version: "0.1.0",
      description: r ?? "TODO: describe what this plugin provides"
    };
  if (p) m.author = p;
  if (
    ((m.skills = ["./"]),
    o.push({
      relPath: T(".claude-plugin", "plugin.json"),
      contents:
        _(m, null, 2) +
        `
`
    }),
    o.push({ relPath: "SKILL.md", contents: ge(n) }),
    f.includes("skills"))
  )
    o.push({ relPath: T("skills", "example", "SKILL.md"), contents: ge("example") });
  if (f.includes("agents")) o.push({ relPath: T("agents", "example.md"), contents: Ne() });
  if (f.includes("hooks"))
    o.push(
      { relPath: T("hooks", "hooks.json"), contents: De() },
      { relPath: T("hooks-handlers", "on-session-start.ts"), contents: xe(), mode: 493 }
    );
  if (f.includes("mcp") && !f.includes("channel")) o.push({ relPath: ".mcp.json", contents: Te() });
  if (f.includes("lsp")) o.push({ relPath: ".lsp.json", contents: Ae() });
  if (f.includes("output-style"))
    o.push({ relPath: T("output-styles", `${n}.md`), contents: Fe(n) });
  if (f.includes("channel"))
    ((m.channels = [{ server: n, displayName: n }]),
      o.push(
        { relPath: ".mcp.json", contents: Ue(n) },
        { relPath: "server.ts", contents: Me(n) },
        { relPath: "package.json", contents: Le(n) }
      ));
  return (
    (o[0].contents =
      _(m, null, 2) +
      `
`),
    o
  );
}
async function bis(e, n, r) {
  let p = me(e);
  if (!r.force)
    try {
      await fe(T(p, ".claude-plugin"));
    } catch (o) {
      if (E(o) === "EEXIST")
        return {
          ok: !1,
          error: `${T(p, ".claude-plugin")} already exists. Use --force to overwrite.`
        };
      if (E(o) !== "ENOENT") throw o;
    }
  let f = [];
  for (let o of n) {
    let m = me(p, o.relPath),
      u = Re(p, m);
    if (u.startsWith(".." + Ee) || u === "..")
      return { ok: !1, error: `Refusing to write outside ${p}: ${o.relPath}` };
    if ((await fe(Ie(m), { recursive: !0 }), r.force)) await Dn(m, o.contents, o.mode);
    else
      try {
        await $e(m, o.contents, { flag: "wx", mode: o.mode });
      } catch (g) {
        if (E(g) !== "EEXIST") throw g;
        f.push(o.relPath);
      }
  }
  return { ok: !0, skipped: f };
}
function ge(e) {
  return `---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`;
}
function Ne() {
  return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`;
}
function De() {
  return (
    _(
      {
        hooks: {
          SessionStart: [
            {
              hooks: [
                {
                  type: "command",
                  command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"'
                }
              ]
            }
          ]
        }
      },
      null,
      2
    ) +
    `
`
  );
}
function xe() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function Te() {
  return (
    _(
      {
        mcpServers: {
          "example-remote": { type: "http", url: "https://example.com/mcp" },
          "example-local": { command: "npx", args: ["<your-mcp-server-package>"] }
        }
      },
      null,
      2
    ) +
    `
`
  );
}
function Ae() {
  return (
    _(
      {
        example: {
          command: "example-language-server",
          args: ["--stdio"],
          extensionToLanguage: { ".example": "example" }
        }
      },
      null,
      2
    ) +
    `
`
  );
}
function Fe(e) {
  return `---
name: ${e}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`;
}
function Ue(e) {
  return (
    _(
      {
        mcpServers: {
          [e]: {
            command: "bun",
            args: ["run", "--cwd", "${CLAUDE_PLUGIN_ROOT}", "--shell=bun", "--silent", "start"]
          }
        }
      },
      null,
      2
    ) +
    `
`
  );
}
function Le(e) {
  return (
    _(
      {
        name: `claude-channel-${e}`,
        version: "0.1.0",
        type: "module",
        scripts: { start: "bun install --no-summary && bun server.ts" },
        dependencies: { "@modelcontextprotocol/sdk": "^1.0.0" }
      },
      null,
      2
    ) +
    `
`
  );
}
function Me(e) {
  return `#!/usr/bin/env bun
/**
 * ${e} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${e}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${e} arrive as <channel source=\\"${e}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${e} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`;
}
export {
  KAn,
  MJr,
  Eie,
  DJr,
  QSe,
  ais,
  lis,
  HJr,
  zYe,
  dis,
  cis,
  uis,
  y5t,
  fis,
  pis,
  mis,
  gis,
  his,
  _5t,
  yis,
  _is,
  bis
};

//# sourceMappingURL=chunk-btxtgj66.js.map
