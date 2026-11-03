// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { R, Qe, N, d, Vt } from "./chunk-fs43t96t.js";
import { Hq } from "./chunk-wrtp8qz8.js";
import { a, Zs } from "./chunk-4cgvah10.js";
import { f, jr, zt, da } from "./chunk-brszmkb3.js";
import {
  Ir,
  xo,
  so,
  Qz,
  wl,
  Sn,
  L0,
  uA,
  Hr,
  Lbe,
  wTt,
  pfe,
  uvn,
  km,
  tu,
  Af,
  ni,
  Ns,
  Vf,
  G_,
  pB,
  On,
  _se,
  pot,
  Vs,
  jg,
  or,
  md,
  ER,
  QNe,
  Vn,
  ic,
  Jm,
  rd
} from "./chunk-5rw2zfa0.js";
import { _, te, tN, wC, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { sTn } from "./chunk-45h8cn90.js";
import { I } from "./chunk-a16y5hcz.js";
import { Mt, hi, Ve, gd, uC } from "./chunk-adv24f35.js";
import { l } from "./chunk-ewvf3tep.js";
import { pr } from "./chunk-7c3thgax.js";
import { os } from "./chunk-jtb5bzvb.js";
import { qbe, r6 } from "./chunk-d54avynm.js";
import { wd } from "./chunk-w35wpr7b.js";
import { st, F0e, Bri } from "./chunk-ajtyjx88.js";
import {
  ejo,
  pWt,
  mWt,
  imn,
  gWt,
  gv,
  Ure,
  eJn,
  Bre,
  hmn,
  eS,
  CU,
  mSt,
  ymn,
  Ou
} from "./chunk-p56qmwgb.js";
import { OE, WDe } from "./chunk-783pymr7.js";
import {
  _pt,
  iXe,
  aXe,
  lXe,
  Qvo,
  pLt,
  Ept,
  $Oe,
  Q1e,
  kpt,
  jEe,
  Xte,
  I4,
  lWn,
  dO,
  dWn,
  hNt,
  v1,
  Fge,
  T2n,
  A2n,
  lCo,
  Hd,
  Dle,
  OP,
  sDr,
  r$t,
  Hle,
  fJe,
  Ic,
  Rd,
  vKn,
  Lle,
  mJe,
  vne,
  Pk,
  Usn,
  cDr,
  uDr,
  e$s,
  tY,
  MP,
  s$t,
  Bsn,
  nY,
  W3,
  o$s,
  s$s,
  KJ,
  yO,
  gG,
  Egt,
  sv,
  Xn
} from "./chunk-j0tbz6ra.js";
import { jDe, c7e, Odn } from "./chunk-d2975tv6.js";
import { wQ, ig, byt, AO, UDe, BDe } from "./chunk-mpcygg5e.js";
import { Ocn } from "./chunk-xt7fs806.js";
import { Fre, Sf } from "./chunk-vn4qkmxw.js";
import { ne } from "./chunk-39xmt821.js";
import { w } from "./chunk-7m7t89vx.js";
import { n } from "./chunk-h56pfqh7.js";
import { Fp, pn, Ff, dj, Oo, rs } from "./chunk-0evsancd.js";
import { E5e, Iie, Q6t, Z6t, QZr, VRt } from "./chunk-nsach619.js";
import {
  KAn,
  MJr,
  Eie,
  DJr,
  QSe,
  ais,
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
} from "./chunk-btxtgj66.js";
import {
  fP,
  v5e,
  Wfr,
  Gfr,
  wxn,
  K6t,
  vxn,
  Exn,
  Vfr,
  qfr,
  cPe,
  V6t,
  q6t,
  GRt,
  Y6t,
  X6t
} from "./chunk-6vmxe8k2.js";
import { j_s, wh, pdo, d3e } from "./chunk-pxfm2rr2.js";
import { qPt } from "./chunk-rv4ymqf0.js";
import { XM, JM } from "./chunk-wa4mxzf9.js";
import { IJr } from "./chunk-0gzc2q7a.js";
import { h5t } from "./chunk-mh7sh27p.js";
import { fwe } from "./chunk-188443zx.js";
import { e, r } from "./chunk-f790ajz4.js";
import { bae } from "./chunk-y04rbgmk.js";
import { a8e, x7t, P7t } from "./chunk-1w30mhyz.js";
import { ro, Yr, j } from "./chunk-bq35vvkw.js";
import { P_e } from "./chunk-mg0tfavz.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { z } from "./chunk-p197ae0z.js";
import { S } from "./chunk-a2y39866.js";
j();
import { join as ye, relative as Xe, resolve as Ze } from "path";
var We = (s, o) => (s === void 0 ? void 0 : o?.manifest.version);
async function ze(s, o, i) {
  if (o !== void 0) return o.readFromFolderAt === void 0 ? void 0 : o.path;
  let u = await IJr(s, i);
  return u.kind === "folder" ? u.path : void 0;
}
async function Ke(s, o, i) {
  let u = await Promise.all(s.map((p) => ze(p, o.get(p), i)));
  return new Map(s.map((p, g) => [p, u[g]]));
}
function qe(s, o, i) {
  return (i === void 0 ? s : (o?.manifest.version ?? s)) || "unknown";
}
async function le(s) {
  await Ff(
    tN(_({ ...s, nonce: ais() })) +
      `
`
  );
}
function Pcr(s) {
  if (s instanceof Dle) return s.reason.kind;
  return sDr(s) ?? HJr(s);
}
function en(s, o) {
  return ejo(s, { declaredInSettings: o }).map(
    (i, u) => `${u === 0 ? "    Error: " : "           "}${i}`
  );
}
async function pe(s, o, i) {
  if (o instanceof wd) await da(s, "command_source_refused");
  else await zt(s, i);
  await dj();
}
function nn(s, o, i, u = 0, p = []) {
  let g = s - o.length - i.length,
    P = [];
  if (o.length > 0)
    P.push(
      ymn(
        o.length,
        o.map((y) => fP(y))
      )
    );
  if (i.length > 0)
    P.push(
      lCo(
        i.length,
        i.map((y) => fP(y))
      )
    );
  if (u > 0)
    P.push(
      `${u} ${I(u, "marketplace")} skipped (nothing to refresh: declared in settings, managed, or not allowed)`
    );
  if (p.length > 0) P.push(`${Hr} (built in) could not be refreshed and was skipped (see --debug)`);
  return { messages: P, summary: tn(g, o.length, i.length) };
}
function tn(s, o, i) {
  let u = A2n({ failedCount: i, updatedCount: s, policyRefusedCount: o }),
    p =
      i > 0
        ? s > 0
          ? `Updated ${s} ${I(s, "marketplace")}, but not all`
          : "No marketplaces were updated"
        : s > 0
          ? `Successfully updated ${s} ${I(s, "marketplace")}`
          : o > 0
            ? "No marketplaces were updated"
            : "No marketplaces needed updating";
  return u === null ? p : `${u} ${p}`;
}
function qxe(s, o) {
  if (s instanceof wd) return (t(`${o} refused: ${s.message}`), pn(ic(s.message)));
  (t(`Failed to ${o}: ${d(s)}`, { level: "error" }), pn(ic(`${ne.cross} Failed to ${o}: ${d(s)}`)));
}
async function we(s, o, i, u = s) {
  if (i !== void 0) await le({ ...i, outcome: "failed", message: ic(d(s)), failureCode: Pcr(u) });
  return qxe(s, o);
}
function Fe(s, o = 300) {
  return s instanceof wd ? s : Mt(d(s), o);
}
function be(s) {
  let o = [];
  if (s.errors.length > 0)
    (o.push(`${ne.cross} Found ${s.errors.length} ${I(s.errors.length, "error")}:`, ""),
      s.errors.forEach((i) => {
        o.push(`  ${ne.pointer} ${i.path}: ${i.message}`);
      }),
      o.push(""));
  if (s.warnings.length > 0)
    (o.push(`${ne.warning} Found ${s.warnings.length} ${I(s.warnings.length, "warning")}:`, ""),
      s.warnings.forEach((i) => {
        o.push(`  ${ne.pointer} ${i.path}: ${i.message}`);
      }),
      o.push(""));
  if (s.notes !== void 0)
    (s.notes.forEach((i) => {
      o.push(`  ${ne.pointer} ${i}`);
    }),
      o.push(""));
  return o;
}
var Oe =
  "one with .claude-plugin/plugin.json, or one with no plugin.json and a skills/<name>/SKILL.md; a symbolic link in place of the folder, of skills, of <name> or of SKILL.md does not count, and SKILL.md must be a file";
async function mvi(s, o, i) {
  if (i.cowork) Hq(!0);
  let u;
  try {
    u = await d3e(o);
  } catch (D) {
    if (Vt(D)) t(`Plugin validation failed for ${o}: ${d(D)}`, { level: "error" });
    else l(D);
    return (
      console.error(`${ne.cross} Unexpected error during validation: ${wh(d(D), 200)}`),
      await zt("cli_plugin_validate", "cli_plugin_validate_exception"),
      Oo(2)
    );
  }
  let { manifest: p, contents: g } = u,
    { noErrors: P, hasWarnings: y, ...E } = j_s(p ? [p, ...g] : g, i),
    v = await X6t(o, p, g),
    m = await import("./chunk-tq7yhg6w.js"),
    k = null,
    F = [],
    B = !1,
    h = m.directoryChecksRoot(u);
  if (h !== null)
    try {
      if (((k = await m.lintPluginForDirectory(h)), k !== null))
        F = m.formatDirectoryReport(
          h,
          k,
          i.profile === "directory" ? null : "this command with --profile directory"
        );
    } catch (D) {
      (l(D), (B = !0), (k = null), (F = m.formatDirectoryChecksFailure(h)));
    }
  let A;
  if (i.profile === "directory")
    if (B) A = { reason: "--profile directory: the plugin directory checks could not run" };
    else if (k === null)
      A = {
        reason:
          u.pluginRoot !== null
            ? "--profile directory could not read the plugin's manifest"
            : "--profile directory needs a plugin folder",
        note:
          u.pluginRoot !== null
            ? "--profile directory could not read this plugin's .claude-plugin/plugin.json as a regular file holding a JSON object (a symlink is not followed), so none of the plugin directory's rules were checked."
            : u.manifest?.fileType === "marketplace"
              ? `--profile directory needs a plugin folder (${Oe}), and this target was validated as a marketplace. To check a plugin in it, pass that plugin's folder or its .claude-plugin/plugin.json. None of the plugin directory's rules were checked.`
              : m.isProjectClaudeFolder(u.resolvedPath)
                ? "--profile directory needs a plugin folder, and this is a project's .claude folder, which nobody submits to the plugin directory. None of its rules were checked."
                : `--profile directory needs a plugin folder (${Oe}). None of the plugin directory's rules were checked.`
      };
    else {
      let D = i.strict === !0,
        x = m.undecidedRulesThatFail(k.undecided, { strict: D }),
        T = m.directoryProfileFails(k.findings, { strict: D })
          ? k.findings.some((G) => G.blocking)
            ? "--profile directory: the plugin directory would refuse a submission of this plugin"
            : "--profile directory with --strict treats the plugin directory's warnings as errors"
          : void 0,
        M =
          x.length === 0
            ? void 0
            : `${x.length === 1 ? "a plugin directory rule" : "plugin directory rules"} could not be decided, because MCP or hooks files were not checked or could not be used: ${x.join(", ")}`;
      if (T !== void 0 || M !== void 0)
        A = {
          reason:
            T === void 0 ? `--profile directory: ${M}` : M === void 0 ? T : `${T}; also, ${M}`,
          ...(M !== void 0 && {
            note: '--profile directory fails this run because one or more rules could not be decided. The notes under "About these checks" (directory.notes in --json) name the files and say what to do.'
          })
        };
    }
  let W =
      k !== null || A !== void 0 || B
        ? {
            profile: i.profile === "directory" ? "directory" : null,
            findings: k?.findings ?? [],
            undecided: k?.undecided ?? [],
            incomplete: k?.incomplete ?? !0,
            failure: A?.reason ?? null,
            notes: [
              ...(k?.notes ?? []),
              ...(B ? [m.DIRECTORY_CHECKS_COULD_NOT_RUN] : []),
              ...(A?.note === void 0 ? [] : [A.note])
            ]
          }
        : null,
    L = E.allSuccess && A === void 0,
    O = () =>
      L ? jr("cli_plugin_validate") : da("cli_plugin_validate", "cli_plugin_validate_failed");
  if (i.json)
    return (
      await Ff(
        se(kn(u, { success: L, strict: i.strict === !0 }, v, W)) +
          `
`
      ),
      await O(),
      Oo(L ? 0 : 1)
    );
  let C = p
    ? [`Validating ${p.fileType} manifest: ${p.filePath}`, "", ...be(p)]
    : [`Validating components in: ${u.resolvedPath}`, ""];
  for (let D of g) (C.push(`Validating ${D.fileType}: ${D.filePath}`, ""), C.push(...be(D)));
  for (let D of F) C.push(D);
  if (A?.note !== void 0) C.push(A.note, "");
  if ((C.push(...Y6t(v)), L))
    C.push(y ? `${ne.tick} Validation passed with warnings` : `${ne.tick} Validation passed`);
  else if (E.allSuccess && A !== void 0) C.push(`${ne.cross} Validation failed (${A.reason})`);
  else if (P && y) C.push(`${ne.cross} Validation failed (--strict treats warnings as errors)`);
  else C.push(`${ne.cross} Validation failed`);
  return (await JM(await s(), e(n, { children: ae(C) })), await O(), Oo(L ? 0 : 1));
}
async function gvi(s, o, i) {
  let u = await V6t(o ?? ".", { force: i.force }),
    p = [];
  for (let k of u.warnings) p.push(`${ne.warning} ${k}`);
  if (!u.ok) {
    (await zt("cli_plugin_tag", "cli_plugin_tag_prepare_failed"),
      p.push(`${ne.cross} ${u.error}`),
      ie(s, p, 1));
    return;
  }
  let { plan: g } = u;
  if (
    (p.push(`Plugin:  ${g.pluginName}`, `Version: ${g.version} (from ${g.versionFrom})`),
    g.marketplace)
  )
    p.push(
      `Marketplace entry: plugins[${g.marketplace.entryIndex}] in ${g.marketplace.path}` +
        (g.marketplace.entryVersion ? ` (version: ${g.marketplace.entryVersion})` : "")
    );
  p.push(`Tag:     ${g.tag}`, "");
  let P = i.remote ?? "origin",
    y = i.force ?? !1,
    E = GRt(g, i.message),
    v = `git -C ${g.gitRoot} push ${y ? "--force " : ""}${P} refs/tags/${g.tag}`;
  if (i.dryRun) {
    (await jr("cli_plugin_tag"),
      p.push(
        `${ne.tick} Dry run \u2014 would create tag ${g.tag} at HEAD in ${g.gitRoot}`,
        `  git -C ${g.gitRoot} tag ${y ? "-f " : ""}-a ${g.tag} -m ${_(E)}`,
        `  ${v}`
      ),
      ie(s, p, 0));
    return;
  }
  let m = await q6t(g, {
    push: i.push ?? !1,
    force: y,
    message: i.message,
    remote: P,
    allowGitTerminalPrompt: !0
  });
  if (!m.ok) {
    (await zt("cli_plugin_tag", "cli_plugin_tag_create_failed"),
      p.push(`${ne.cross} ${m.error}`),
      ie(s, p, 1));
    return;
  }
  if ((await jr("cli_plugin_tag"), p.push(`${ne.tick} Created tag ${g.tag}`), m.pushed))
    p.push(`${ne.tick} Pushed to ${P}`);
  else p.push(`  Push with: ${v}`);
  ie(s, p, 0);
}
function ie(s, o, i) {
  (s.render(e(XM, { children: e(n, { children: ae(o) }) })), s.waitUntilExit().then(() => Oo(i)));
}
async function hvi(s, o, i, u) {
  let p = [],
    g = yis(o);
  if (g) {
    (await zt("cli_plugin_init", "invalid_name"),
      p.push(`${ne.cross} Invalid plugin name "${o}": ${g}`),
      ie(s, p, 1));
    return;
  }
  let P = [];
  for (let T of i.with ?? [])
    if (_5t.includes(T)) P.push(T);
    else {
      (await zt("cli_plugin_init", "invalid_component"),
        p.push(`${ne.cross} Unknown --with component "${T}". Valid: ${_5t.join(", ")}`),
        ie(s, p, 1));
      return;
    }
  if (!Bre()) {
    (await zt("cli_plugin_init", "policy_blocked"),
      p.push(`${ne.cross} ${hmn(os(ye(Le(), "skills")))}`),
      ie(s, p, 1));
    return;
  }
  let y = ye(Le(), "skills"),
    E = ye(y, o);
  if (Xe(y, Ze(E)).startsWith("..")) {
    (await zt("cli_plugin_init", "invalid_name"),
      p.push(`${ne.cross} Plugin name "${o}" would write outside ${os(y)}`),
      ie(s, p, 1));
    return;
  }
  let v = i.author ?? (await Bri()),
    m = i.authorEmail ?? (await F0e());
  if (!v && i.authorEmail)
    p.push(
      `${ne.warning} --author-email was ignored because no author name was found. Pass --author or set git config user.name.`
    );
  let k = v ? (m ? { name: v, email: m } : { name: v }) : void 0,
    F = _is({ name: o, description: i.description, author: k, with: P }),
    B;
  try {
    let T = await bis(E, F, { force: i.force });
    if (!T.ok) {
      (await zt("cli_plugin_init", "target_exists"), p.push(`${ne.cross} ${T.error}`), ie(s, p, 1));
      return;
    }
    B = T.skipped;
  } catch (T) {
    (await zt("cli_plugin_init", "write_failed"),
      l(T),
      p.push(`${ne.cross} Failed to write scaffold: ${d(T)}`),
      ie(s, p, 1));
    return;
  }
  for (let T of B) p.push(`  kept existing ${T} (use --force to overwrite)`);
  let h = await pdo(E, { unrecordableNames: "warn" });
  if (!h.success || h.warnings.length > 0) p.push(...be(h));
  if (!h.success) {
    (await zt("cli_plugin_init", "self_validate_failed"), ie(s, p, 1));
    return;
  }
  await jr("cli_plugin_init");
  let A = `${o}@${Af}`;
  p.push(`${ne.tick} Created plugin "${o}" at ${os(E)}`);
  let W = pr().enabledPlugins ?? {},
    L = Sf()?.has(o) ?? !1,
    O = await Rd(u),
    C = Object.keys(W).find((T) => {
      let M = On(T);
      return (
        M.name === o &&
        M.marketplace !== void 0 &&
        M.marketplace !== Ns &&
        !Vf(M.marketplace) &&
        O[M.marketplace] !== void 0
      );
    }),
    D = W[A] === !1;
  if (L)
    p.push(
      `  ${ne.warning} A plugin named "${o}" is locked by managed settings, which takes precedence \u2014 ${A} won't load. To load this copy, give it a different "name" in .claude-plugin/plugin.json.`
    );
  else if (C)
    p.push(
      `  ${ne.warning} The name "${o}" is already taken by ${C} \u2014 when that plugin loads, ${A} won't. To load this copy, give it a different "name" in .claude-plugin/plugin.json or uninstall the conflicting plugin.`
    );
  else if (D) {
    let T = wl("plugin enable", A);
    p.push(
      `  ${ne.warning} A disabled setting for ${A} exists, so it won't load until you re-enable it${T ? `: ${T}` : " in /plugin"}`
    );
  } else p.push(`  It will auto-load next session as ${A}. Run /reload-plugins to load it now.`);
  let x = wl("plugin disable", A);
  (p.push(`  ${x ? `Disable: ${x}. ` : "Disable: in /plugin. "}Remove: delete the directory.`),
    ie(s, p, 0));
}
async function yvi(s, o, i, u) {
  if (o.cowork) Hq(!0);
  (h5t(), a("tengu_plugin_list_command", {}));
  let p = await nY(i);
  if (
    o.json &&
    typeof o.dataSize === "string" &&
    !(Object.hasOwn(p.plugins, o.dataSize) && (p.plugins[o.dataSize]?.length ?? 0) > 0)
  )
    return rs(`${ne.cross} --data-size names a plugin that is not installed`);
  let { getPluginEditableScopes: g, editableScopeOf: P } = await import("./chunk-72fxbr4f.js"),
    y = g(),
    E = Object.keys(p.plugins);
  await iXe();
  let { enabled: v, disabled: m, errors: k, warnings: F } = await sv(i, u),
    B = [...v, ...m],
    h = new Map(B.map((M) => [M.source, M])),
    A = { plugins: B, errors: k, warnings: F },
    W = [
      {
        header: "Session-only plugins (--plugin-dir / --plugin-url):",
        scopeOf: () => "session",
        standaloneErrorScope: "session",
        standaloneWarningScope: "session",
        pathOf: (M) => M.path,
        showScope: !1,
        ...$e(tu, A)
      },
      {
        header: `Synced from claude.ai${Ocn() ? "" : " \u2014 sync is off in this shell; these load only in a synced session"}:`,
        scopeOf: () => "synced",
        standaloneErrorScope: "synced",
        standaloneWarningScope: "synced",
        pathOf: (M) => M.path,
        showScope: !1,
        ...$e(ni, A)
      },
      {
        header: "Skills-directory plugins (.claude/skills/*):",
        scopeOf: (M) => M.scope ?? "user",
        standaloneErrorScope: "user",
        standaloneWarningScope: "project",
        pathOf: Egt,
        showScope: !0,
        ...$e(Af, A)
      }
    ],
    L = await Ke(E, h, i);
  if (o.json) {
    let M = [];
    for (let J of E.sort()) {
      let q = p.plugins[J];
      if (!q || q.length === 0) continue;
      let ee = h.get(J),
        Q = ee?.name ?? On(J).name,
        U = k.filter((re) => cPe(re, J, Q)),
        H = F.filter((re) => cPe(re, J, Q)),
        V = U.map(gv),
        X = H.map(Ure),
        Z = U.map(ue),
        K = H.map(ue),
        he = Z6t(J),
        ke,
        fe;
      if (o.dataSize === !0 || o.dataSize === J)
        try {
          ke = (await eJn(J, { throwIfUnreadable: !0 })) ?? void 0;
        } catch {
          fe = !0;
        }
      for (let re of q) {
        let Ie;
        if (ee) {
          let _e = ee.mcpServers || (await _pt(ee, void 0, i, void 0, { readOnlyListing: !0 }));
          if (_e && Object.keys(_e).length > 0) Ie = Ye(_e);
        }
        M.push({
          id: J,
          version: re.version || "unknown",
          scope: re.scope,
          enabled: P(y, J) !== void 0,
          installPath: re.installPath,
          readFromFolder: L.get(J),
          folderVersion: We(L.get(J), ee),
          installedAt: re.installedAt,
          lastUpdated: re.lastUpdated,
          projectPath: re.projectPath,
          mcpServers: Ie,
          errors: V.length > 0 ? V : void 0,
          notes: X.length > 0 ? X : void 0,
          errorDetails: Z.length > 0 ? Z : void 0,
          noteDetails: K.length > 0 ? K : void 0,
          projectEnabled: he,
          dataDirSize: ke,
          dataDirUnreadable: fe,
          hasUserConfig: Je(ee)
        });
      }
    }
    for (let J of W) M.push(...(await wn(J, i)));
    let G;
    if (o.available) {
      let J = [];
      try {
        let [q, ee] = await Promise.all([Ic(i), r$t(i)]),
          { marketplaces: Q } = await Fge(q, i),
          U =
            (await MP()) !== "unavailable"
              ? new Set(
                  Exn(
                    K6t(
                      Q.flatMap(({ name: H, data: V }) =>
                        (V?.plugins ?? []).map((X) => {
                          let Z = v1(X.name, H);
                          return { entry: X, marketplaceName: H, pluginId: Z, isInstalled: gG(Z) };
                        })
                      ),
                      q
                    ),
                    q,
                    await vxn(q, i)
                  ).map((H) => H.pluginId)
                )
              : null;
        for (let { name: H, data: V } of Q)
          if (V) {
            let X = V.plugins.filter((Z) => {
              let K = v1(Z.name, H);
              return !gG(K) && (U === null || U.has(K));
            });
            for (let Z of await v5e(H, X, q, i)) {
              let K = v1(Z.name, H);
              J.push({
                pluginId: K,
                name: Z.name,
                description: Z.description,
                marketplaceName: H,
                version: Z.version,
                source: Z.source,
                installCount: ee?.get(K)
              });
            }
          }
      } catch {}
      G = se({ installed: M, available: J });
    } else G = se(M);
    (await Ff(
      G +
        `
`
    ),
      await jr("cli_plugin_list"));
    return;
  }
  let O = [],
    C = await KJ(i);
  if (C !== void 0) O.push(`Note: ${W3(C)}`, "");
  else if (E.length === 0 && !W.some(He))
    O.push("No plugins installed. Use `claude plugin install` to install a plugin.");
  let D = await s$s();
  if (D.length > 0) {
    if (O.length > 0 && O.at(-1) !== "") O.push("");
    O.push(
      `Note: install records under names that no version of Claude Code can use were removed from installed_plugins.json. Their copy is kept for a while in ${D.join(", ")}. Nothing needs doing about these copies.`,
      ""
    );
  }
  let x = await o$s();
  if (x.length > 0) {
    if (O.length > 0 && O.at(-1) !== "") O.push("");
    O.push(
      `Note: installed_plugins.json could not be read and was rebuilt. What it held is kept for a while in ${x.join(", ")}. Plugins it listed may need installing again; look there for what was recorded.`,
      ""
    );
  }
  if (E.length > 0) O.push("Installed plugins:", "");
  for (let M of E.sort()) {
    let G = p.plugins[M];
    if (!G || G.length === 0) continue;
    let J = h.get(M)?.name ?? On(M).name,
      q = k.filter((Q) => cPe(Q, M, J)),
      ee = F.filter((Q) => cPe(Q, M, J));
    for (let Q of G) {
      let U = P(y, M) !== void 0,
        H =
          q.length > 0
            ? `${ne.cross} failed to load`
            : U
              ? `${ne.tick} enabled`
              : `${ne.cross} disabled`,
        V = L.get(M),
        X = qe(Q.version, h.get(M), V),
        Z = Q.scope;
      if ((O.push(`  ${ne.pointer} ${M}`), O.push(`    Version: ${X}`), V !== void 0))
        O.push(`    Read from: ${hi(V)}`);
      (O.push(`    Scope: ${Z}`), O.push(`    Status: ${H}`));
      for (let K of q) {
        if (K.type === "marketplace-load-failed" && K.nameRefused) {
          O.push(...en(K.marketplace, K.nameRefusedDeclaredInSettings === !0));
          continue;
        }
        O.push(
          `    Error: ${gv(K)}${pWt(K) ? ` ${mWt}` : ""}${imn(K) !== void 0 ? `. ${imn(K)}` : ""}`
        );
      }
      for (let K of ee) O.push(`    Note: ${Ure(K)}`);
      O.push("");
    }
  }
  for (let M of W) O.push(...hn(M));
  let T = await s();
  (await JM(T, e(n, { children: ae(O) })), await jr("cli_plugin_list"));
}
function ve(s) {
  let u = w(4),
    { promise: o } = s,
    i = Yr(o),
    p;
  if (u[0] !== i) ((p = ae(i)), (u[0] = i), (u[1] = p));
  else p = u[1];
  let g;
  if (u[2] !== p) ((g = e(XM, { children: e(n, { children: p }) })), (u[2] = p), (u[3] = g));
  else g = u[3];
  return g;
}
var WAn = "Invalid marketplace source format. Try: owner/repo, https://..., or ./path";
async function _vi(s, o, i, u, p) {
  if (i.cowork) Hq(!0);
  if (i.resolveOnly === !0 && i.fromLink !== !0)
    return pn(`${ne.cross} --resolve-only needs --from-link`);
  if (i.claudeai) {
    if (i.sparse !== void 0 || i.scope !== void 0)
      return pn(
        `${ne.cross} --claudeai takes only the marketplace name (no --sparse or --scope: a claude.ai marketplace is hosted for your account, not declared in settings)`
      );
    if (i.fromLink === !0) return pn(`${ne.cross} --claudeai can't be combined with --from-link`);
    await sn(s, o, u, p);
    return;
  }
  if (i.resolveOnly === !0) {
    if (i.sparse !== void 0 || i.scope !== void 0)
      return pn(`${ne.cross} --resolve-only can't be combined with --sparse or --scope`);
    await on(o, u);
    return;
  }
  if (i.fromLink !== !0 && L0(o)) {
    {
      let h = await MP();
      if (h === "blocked") {
        Odn({ reason: "policy_blocked", sourceKind: void 0, surface: "cli" });
        let A = eS();
        if (A !== null) c7e(A);
        return (
          await zt("cli_marketplace_add", "cli_marketplace_add_blocked_by_policy"),
          rs(
            `${ne.cross} ${Hr} is blocked by your organization. ${CU()} It can't be turned on here.`
          )
        );
      }
      if (h !== "unavailable") {
        if (i.sparse !== void 0 || i.scope !== void 0)
          return pn(
            `${ne.cross} ${Hr} is built in and not declared in any settings scope. Omit --sparse and --scope to turn it on.`
          );
        if (h === "off") {
          try {
            await s$t(!0);
          } catch (A) {
            return (
              jDe({ enabled: !0, surface: "cli", failure: "settings_write_failed" }),
              await zt("cli_marketplace_add", "cli_marketplace_add_failed"),
              await dj(),
              qxe(Fe(A), "add marketplace")
            );
          }
          (jDe({ enabled: !0, surface: "cli" }), Hd(u, p));
        } else await Bsn(!0);
        (await jr("cli_marketplace_add"),
          await JM(
            s,
            r(n, {
              children: [
                ne.tick,
                " ",
                h === "off"
                  ? `${Hr} is on. Its plugins are back in /plugin \u2192 Discover.`
                  : `${Hr} is already on`
              ]
            })
          ),
          await Oo(0));
        return;
      }
      return (
        Odn({ reason: "reserved_name", sourceKind: void 0, surface: "cli" }),
        await zt("cli_marketplace_add", "cli_marketplace_add_directory_unavailable"),
        rs(`${ne.cross} The ${Hr} isn't available in this session.`)
      );
    }
    return (
      await zt("cli_marketplace_add", "cli_marketplace_add_reserved_name"),
      rs(`${ne.cross} ${Lbe(o)}`)
    );
  }
  let g,
    P,
    y,
    E = i.fromLink === !0,
    v = i.json ? { command: "marketplace-add" } : void 0,
    m = async (h, A = !1) => {
      if (v !== void 0)
        await le({
          ...v,
          outcome: "failed",
          message: ic(h),
          ...(!A && { failureCode: "invalid_source" })
        });
      return rs(`${ne.cross} ${h}`);
    };
  try {
    if (E)
      try {
        qPt(o);
      } catch (A) {
        throw OP(A, "invalid_source");
      }
    let h = await qbe(o);
    if (!h) return (await zt("cli_marketplace_add", "cli_marketplace_add_invalid_source"), m(WAn));
    if ("error" in h)
      return (
        await zt("cli_marketplace_add", "cli_marketplace_add_parse_failed"),
        m(rd(h.error), h.unreadable === !0)
      );
    if (((y = i.scope ?? "user"), y !== "user" && y !== "project" && y !== "local"))
      return rs(rd(`${ne.cross} Invalid scope '${y}'. Use: user, project, or local`));
    if (((P = ER(y)), (g = h), i.sparse && i.sparse.length > 0))
      if (g.source === "github" || g.source === "git") g = { ...g, sparsePaths: i.sparse };
      else
        return rs(
          `${ne.cross} --sparse is only supported for github and git marketplace sources (got: ${g.source})`
        );
  } catch (h) {
    return (
      await pe("cli_marketplace_add", h, "cli_marketplace_add_failed"),
      we(h, "add marketplace", v)
    );
  }
  let k,
    F = "",
    B = (async () => {
      try {
        let h = [];
        if (E) {
          let J = await GAn(g, u);
          if (J !== void 0)
            return (
              (k = { name: J, added: !1 }),
              (F = `Marketplace '${J}' is already added; nothing changed`),
              await jr("cli_marketplace_add"),
              []
            );
        }
        let {
            name: A,
            alreadyMaterialized: W,
            resolvedSource: L,
            replacedSource: O
          } = await Lle(
            g,
            (J) => {
              h.push(J);
            },
            u,
            void 0,
            { refuseNameCollision: E }
          ),
          { error: C } = await fJe(A, { source: L }, P, u);
        if (C) throw C;
        (Hd(u, p),
          await Zs("tengu_marketplace_added", {
            _PROTO_marketplace_name: A,
            source_type: c(g.source),
            repo_hash: g.source === "github" ? cn(g.repo) : void 0,
            is_official_marketplace: md(A)
          }),
          await jr("cli_marketplace_add"));
        let D = [];
        if (!E)
          try {
            D = (await bae((await sv(u, p)).errors, u)).installed;
          } catch (J) {
            t(`marketplace add: dep auto-resolve skipped: ${d(J)}`, { level: "warn" });
          }
        k = { name: A, added: !0 };
        let x = Fre(D),
          T = W
            ? `Marketplace '${A}' already on disk \u2014 declared in ${y} settings${x}`
            : `Successfully added marketplace: ${A} (declared in ${y} settings)${x}`,
          M = T2n({ name: A, replacedSource: O, resolvedSource: L, settingSource: P });
        ((F = [...h, T, ...M].join(`
`)),
          h.push(`${ne.tick} ${T}`, ...M.map((J) => `  ${J}`)));
        let G = MJr(QNe(P));
        if (G !== null) h.push(`${ne.warning} ${G}`);
        return h;
      } catch (h) {
        if (E && h instanceof Dle)
          await Ff(`${tN(_({ refused: h.reason }))}
`);
        return (
          await pe("cli_marketplace_add", h, "cli_marketplace_add_failed"),
          we(h, "add marketplace", v)
        );
      }
    })();
  if ((B.catch(() => {}), E)) {
    if ((await B, k === void 0))
      return pn(
        `${ne.cross} Failed to add marketplace: the add finished without naming the marketplace it used`
      );
    await Ff(`${tN(_(k))}
`);
  } else if (v !== void 0) await B;
  if (E || v !== void 0) {
    if (v !== void 0) await le({ ...v, outcome: "ok", marketplace: k?.name, message: ic(F) });
    await Oo(0);
    return;
  }
  (s.render(
    e(ro, {
      fallback: e(n, { children: "Adding marketplace\u2026" }),
      children: e(ve, { promise: B })
    })
  ),
    await s.waitUntilExit(),
    await Oo(0));
}
async function on(s, o) {
  let i;
  try {
    (qPt(s), (i = await qbe(s)));
  } catch (p) {
    return (
      await zt("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_refused_source"),
      await dj(),
      qxe(p, "look up the marketplace")
    );
  }
  if (!i || "error" in i)
    return (
      await zt(
        "cli_marketplace_link_lookup",
        i
          ? "cli_marketplace_link_lookup_parse_failed"
          : "cli_marketplace_link_lookup_invalid_source"
      ),
      rs(`${ne.cross} ${i?.error ?? WAn}`)
    );
  let u;
  try {
    u = await GAn(i, o);
  } catch (p) {
    return (
      await zt("cli_marketplace_link_lookup", "cli_marketplace_link_lookup_read_failed"),
      await dj(),
      qxe(p, "read the added marketplaces")
    );
  }
  (await jr("cli_marketplace_link_lookup"),
    await Ff(`${tN(_({ existing: u ?? null }))}
`),
    await Oo(0));
}
async function GAn(s, o) {
  if (!Ou(s)) return;
  return vKn(await Ic(o), s);
}
async function sn(s, o, i, u) {
  let p = (async () => {
    try {
      let g = await Ic(i),
        P = await aXe(u).catch(() => null);
      if (P === null)
        throw new dO(
          "claude.ai marketplaces are not available here \u2014 sign in to claude.ai (claude /login) with plugin sync on, then run: claude plugin marketplace list",
          "tier_unavailable"
        );
      let y = Qvo(P.hosted, o);
      if (y.kind === "ambiguous")
        throw new dO(
          `claude.ai hosts more than one marketplace called "${o}" for this account \u2014 add it by its unique name instead: ${y.localNames.join(", ")} (claude plugin marketplace list)`,
          "ambiguous_name"
        );
      if (y.kind === "none") {
        if (Qvo(P.policyBlocked, o).kind !== "none")
          throw new dO(
            `"${o}" is hosted on claude.ai for this account but not allowed by your organization's marketplace policy (personal claude.ai uploads and blocked hosts are not admitted)`,
            "policy_blocked"
          );
        throw new dO(
          `claude.ai hosts no marketplace named "${o}" for this account \u2014 run: claude plugin marketplace list`,
          "not_listed"
        );
      }
      let E = y.row,
        { name: v, marketplace: m, status: k } = await dWn(E, { configured: g, credentials: u });
      (Hd(i, u),
        await Zs("tengu_marketplace_added", { source_type: b("claudeai") }),
        await jr("cli_marketplace_add"));
      let F = kpt(k),
        B = m.plugins.length;
      return [
        `${ne.tick} Successfully added marketplace: ${pLt(E)} \u2014 hosted on claude.ai, ${$Oe(E.scope)} \u2014 ${B} ${I(B, "plugin")}${F ? ` (${F})` : ""}`,
        `  Install its plugins with: claude plugin install <plugin>@${v}`
      ];
    } catch (g) {
      if (g instanceof dO)
        (await zt("cli_marketplace_add", `cli_marketplace_add_claudeai_${g.code}`), await dj());
      else await pe("cli_marketplace_add", g, "cli_marketplace_add_failed");
      return qxe(g, "add marketplace");
    }
  })();
  (p.catch(() => {}),
    s.render(
      e(ro, {
        fallback: e(n, { children: "Adding marketplace\u2026" }),
        children: e(ve, { promise: p })
      })
    ),
    await s.waitUntilExit(),
    await Oo(0));
}
function de(s) {
  return /^[A-Za-z0-9._/\\:~-]{1,200}$/.test(s)
    ? s
    : gd(Mt(s, 4096), { head: 120, tail: 80 }) || "\u201C\u201D";
}
function Ae(s) {
  return s === wC || /^[A-Za-z0-9._/\\:~@%+=&?,*-]{1,200}$/.test(s) ? s : de(s);
}
async function bvi(s, o, i) {
  if (o.cowork) Hq(!0);
  let u;
  try {
    u = await Ic(i);
  } catch (L) {
    return (
      await zt("cli_marketplace_list", "cli_marketplace_list_load_failed"),
      await dj(),
      qxe(L, "list marketplaces")
    );
  }
  let p = Object.keys(u),
    g = await aXe().catch(() => null),
    { available: P, hosted: y } = lXe(g, u),
    E = g?.browseOnly ?? [],
    v = await Xte(),
    m = new Map();
  for (let L of p) {
    let O = u[L]?.source;
    if (I4(O)) m.set(L, (await jEe(L, O, { mode: "cache-only", credentials: void 0 })).status);
  }
  let k = await MP(),
    F = k === "off" && !p.includes(Sn);
  if (o.json) {
    let C = p
      .filter((D) => {
        let x = u[D]?.source;
        return !(x && km(x));
      })
      .map((D) => {
        let x = u[D],
          T = x?.source,
          M = T?.source === "github" || T?.source === "git" ? T.ref : void 0;
        return {
          name: D,
          source: T?.source,
          ...(T?.source === "github" && { repo: T.repo }),
          ...(T?.source === "git" && { url: T.url }),
          ...(T?.source === "url" && { url: T.url }),
          ...(T?.source === "directory" && { path: T.path }),
          ...(T?.source === "file" && { path: T.path }),
          ...(M && { ref: M }),
          ...(T?.source === "claudeai"
            ? {
                marketplaceId: T.marketplaceId,
                organizationUuid: T.organizationUuid,
                ...(v[D]?.scope !== void 0 && { scope: v[D]?.scope }),
                status: m.get(D)?.kind
              }
            : { installLocation: x?.installLocation })
        };
      })
      .sort((D, x) => (D.name < x.name ? -1 : D.name > x.name ? 1 : 0));
    (await Ff(
      se(C) +
        `
`
    ),
      await jr("cli_marketplace_list"));
    return;
  }
  let B = !1,
    h = u[Sn];
  if (k === "on" && h !== void 0 && km(h.source) && mSt(void 0)) {
    let L = await Pk(Sn, i, { registryEntry: h });
    B = L !== null && (OE().catalogEntryNames?.size ?? 0) > L.plugins.length;
  }
  Re(u);
  let A;
  if (p.length === 0 && !F && P.length === 0 && y.length === 0 && E.length === 0)
    A = e(n, { children: "No marketplaces configured" });
  else {
    let L =
      p.length > 0 || F ? ["Configured marketplaces:", ""] : ["No marketplaces configured", ""];
    if (F)
      L.push(
        `  ${ne.pointer} ${Sn}`,
        `    Source: Built in (${Hr}) \u2014 off`,
        `    Turn it back on: claude plugin marketplace add ${Sn}`,
        ""
      );
    if (
      ((h !== void 0 && km(h.source) ? [Sn, ...p.filter((C) => C !== Sn)] : p).forEach((C) => {
        let D = u[C],
          x = fP(C);
        if ((L.push(`  ${ne.pointer} ${x}`), x !== C)) {
          let T = Qz(C);
          if (T || r6(C))
            L.push(
              `    Shown in quotes: the name looks like one of Anthropic's own, and is not.${T ? ` In a command, type: ${C}` : ""}`
            );
        }
        if (D?.source) {
          let T = D.source;
          if (T.source === "github") {
            let M = T.ref ? `@${de(T.ref)}` : "";
            L.push(`    Source: GitHub (${de(T.repo)}${M})`);
          } else if (T.source === "git") {
            let M = T.ref ? `@${de(T.ref)}` : "";
            L.push(`    Source: Git (${Ae(hNt(T.url))}${M})`);
          } else if (T.source === "url") L.push(`    Source: URL (${Ae(hNt(T.url))})`);
          else if (T.source === "directory")
            L.push(`    Source: ${k !== "unavailable" ? "Folder" : "Directory"} (${de(T.path)})`);
          else if (T.source === "file") L.push(`    Source: File (${de(T.path)})`);
          else if (T.source === "pluginDirectory")
            L.push(
              `    Source: Built in (${Hr})${k === "blocked" ? " \u2014 blocked by your organization" : B ? " \u2014 some plugins hidden by your organization's policy" : ""}`
            );
          else if (T.source === "claudeai") {
            let M = m.get(C),
              G = M === void 0 ? void 0 : kpt(M);
            L.push(`    Source: ${lWn(v[C])}${G === void 0 ? "" : ` \u2014 ${G}`}`);
          }
        }
        if (D !== void 0 && vne(C, D) && r6(C))
          L.push(
            ...ejo(C, { declaredInSettings: D.source.source === "settings" }).map((T) => `    ${T}`)
          );
        L.push("");
      }),
      P.length > 0 || y.length > 0 || E.length > 0)
    )
      L.push("From claude.ai:", "");
    for (let C of P)
      (L.push(
        `  ${ne.pointer} ${C.name} (available from claude.ai${C.scope ? `, ${C.scope}` : ""} \u2014 not added)`
      ),
        L.push(`    Source: ${C.source.source === "github" ? "GitHub" : "Git"} (${Q1e(C.source)})`),
        L.push(""));
    for (let C of y)
      (L.push(
        `  ${ne.pointer} ${pLt(C)} \u2014 hosted on claude.ai, ${$Oe(C.scope)} \xB7 not added`
      ),
        L.push(
          `    Add: claude plugin marketplace add --claudeai ${Qz(C.name) ? C.name : "<name>"}`
        ),
        L.push(""));
    for (let C of E) (L.push(`  ${ne.pointer} ${Ept(C)} (browse on claude.ai)`), L.push(""));
    A = e(n, { children: ae(L) });
  }
  let W = await s();
  (await JM(W, A), await jr("cli_marketplace_list"));
}
async function Svi(s, o, i, u) {
  if (i.cowork) Hq(!0);
  let p;
  if (i.scope !== void 0) {
    let k = i.scope;
    if (k !== "user" && k !== "project" && k !== "local")
      return pn(`${ne.cross} Invalid scope '${k}'. Use: user, project, or local`);
    p = ER(k);
  }
  let g = uA(o) ? await MP() : void 0,
    P;
  try {
    if (g === "blocked" && L0(o) && !Hle(await Ic(u)).some(({ name: k }) => L0(k))) {
      (await JM(s, e(Se, {})), await jr("cli_marketplace_remove"));
      return;
    }
    if (((P = await mJe(o, p, u)), Hd(u), P.kind !== "plugin-directory-built-in"))
      a("tengu_marketplace_removed", {
        marketplace_name: WDe(o),
        _PROTO_marketplace_name: o,
        is_official_marketplace: md(o)
      });
  } catch (k) {
    return (
      await zt("cli_marketplace_remove", "cli_marketplace_remove_failed"),
      await dj(),
      we(
        Fe(k, 2000),
        "remove marketplace",
        i.json ? { command: "marketplace-remove", marketplace: o } : void 0,
        k
      )
    );
  }
  if (
    (await jr("cli_marketplace_remove"), P.kind === "ignored-plugin-directory-name-entry-removed")
  ) {
    let k = P.removedNames.map((B) => `${ne.tick} ${wTt(B, g !== void 0 && g !== "unavailable")}`),
      F = pfe(P.disabledPluginIds, P.disabledReason);
    if (F !== null) k.push(F);
    await JM(s, e(n, { children: ae(k) }));
    return;
  }
  if (P.kind === "plugin-directory-built-in") {
    let k = await MP();
    if (k === "blocked") {
      await JM(s, e(Se, {}));
      return;
    }
    if (g === "on" && k === "off") jDe({ enabled: !1, surface: "cli" });
    await JM(
      s,
      r(n, {
        children: [
          ne.tick,
          " ",
          Hr,
          " is off. Plugins you installed from it stay installed and keep updating. Turn it back on: claude plugin marketplace add",
          " ",
          Sn
        ]
      })
    );
    return;
  }
  let y = P.kind === "removed" ? P.removedPluginIds : [],
    E = `Successfully removed marketplace: ${Vn(o)}${i.scope ? ` (from ${i.scope} settings)` : ""}`,
    v =
      y.length > 0
        ? [
            `Also uninstalled ${y.length} ${I(y.length, "plugin")} from this marketplace:`,
            ...y.map((k) => `  ${k}`),
            "The removal also deletes their saved options, secrets and data where it can.",
            "To use a plugin again, add the marketplace back and reinstall the plugin."
          ]
        : [];
  if (i.json) {
    await le({
      command: "marketplace-remove",
      outcome: "ok",
      marketplace: o,
      message: ic(
        [E, ...v].join(`
`)
      )
    });
    return;
  }
  let m = [`${ne.tick} ${E}`, ...v];
  await JM(s, e(n, { children: ae(m) }));
}
function Se() {
  let s = w(1),
    o;
  if (s[0] === S) ((o = e(n, { children: uvn(CU()) })), (s[0] = o));
  else o = s[0];
  return o;
}
function xe(s) {
  let p = w(11),
    { promise: o } = s,
    { messages: i, summary: u } = Yr(o),
    g,
    P,
    y;
  if (p[0] !== i || p[1] !== u) {
    let E = [...i, u];
    P = XM;
    g = n;
    y = ae(E);
    ((p[0] = i), (p[1] = u), (p[2] = g), (p[3] = P), (p[4] = y));
  } else ((g = p[2]), (P = p[3]), (y = p[4]));
  let v;
  if (p[5] !== g || p[6] !== y) ((v = e(g, { children: y })), (p[5] = g), (p[6] = y), (p[7] = v));
  else v = p[7];
  let m;
  if (p[8] !== P || p[9] !== v) ((m = e(P, { children: v })), (p[8] = P), (p[9] = v), (p[10] = m));
  else m = p[10];
  return m;
}
async function wvi(s, o, i, u) {
  if (i.json && !o)
    return pn(
      `${ne.cross} --json needs a marketplace name, for example: claude plugin marketplace update <name> --json`
    );
  if (i.cowork) Hq(!0);
  let p = o !== void 0 && L0(o) ? Sn : o,
    g,
    P = 0,
    y;
  if (p) {
    g = `Updating marketplace: ${p}...`;
    let E = [],
      v = `Successfully updated marketplace: ${p}`;
    if (
      ((y = tY(p, u, (m) => {
        E.push(m);
      })
        .then(
          async () => (
            Hd(u),
            await Zs("tengu_marketplace_updated", {
              marketplace_name: WDe(p),
              _PROTO_marketplace_name: p,
              is_official_marketplace: md(p)
            }),
            await jr("cli_marketplace_update"),
            { messages: E, summary: `${ne.tick} ${v}` }
          )
        )
        .catch(
          async (m) => (
            await pe("cli_marketplace_update", m, "cli_marketplace_update_failed"),
            we(
              m,
              "update marketplace(s)",
              i.json ? { command: "marketplace-update", marketplace: o } : void 0
            )
          )
        )),
      i.json)
    ) {
      (await y,
        await le({
          command: "marketplace-update",
          outcome: "ok",
          marketplace: o,
          message: ic(
            [...E, v].join(`
`)
          )
        }),
        await Oo(0));
      return;
    }
  } else {
    let E;
    try {
      E = await Ic(u);
    } catch (m) {
      return (
        await pe("cli_marketplace_update", m, "cli_marketplace_update_load_failed"),
        qxe(m, "update marketplace(s)")
      );
    }
    let v = Object.keys(E);
    if (v.length === 0)
      return (
        await JM(s, e(n, { children: "No marketplaces configured" })),
        await jr("cli_marketplace_update"),
        Oo(0)
      );
    ((g = "Updating marketplaces..."),
      (y = e$s(u)
        .then(async ({ policyRefused: m, failed: k, attempted: F, builtInSkipped: B }) => {
          if (
            ((P = k.length > 0 ? 1 : 0),
            Hd(u),
            await Zs("tengu_marketplace_updated_all", {
              count: v.length,
              attempted: F,
              refreshed: F - m.length - k.length,
              policy_refused: m.length,
              failed: k.length,
              built_in_skipped: B.length
            }),
            k.length > 0)
          )
            await da("cli_marketplace_update", "marketplace_refresh_failed");
          else if (m.length > 0) await da("cli_marketplace_update", "command_source_refused");
          else
            await (B.length > 0
              ? da("cli_marketplace_update", "built_in_directory_skipped")
              : jr("cli_marketplace_update"));
          return nn(F, m, k, v.length - F - B.length, B);
        })
        .catch(
          async (m) => (
            await pe("cli_marketplace_update", m, "cli_marketplace_update_failed"),
            qxe(m, "update marketplace(s)")
          )
        )));
  }
  (s.render(e(ro, { fallback: e(n, { children: g }), children: e(xe, { promise: y }) })),
    await s.waitUntilExit(),
    await Oo(P));
}
function Ue(s) {
  let u = w(4),
    { promise: o } = s,
    i = Yr(o),
    p;
  if (u[0] !== i) ((p = ic(i)), (u[0] = i), (u[1] = p));
  else p = u[1];
  let g;
  if (u[2] !== p)
    ((g = e(XM, { children: r(n, { children: [ne.tick, " ", p] }) })), (u[2] = p), (u[3] = g));
  else g = u[3];
  return g;
}
function Be(s) {
  return Iie.some((o) => o === s);
}
function g5t(s) {
  let o = s.scope || "user";
  if (s.cowork && o !== "user") pn("--cowork can only be used with user scope");
  if (!Be(o)) pn(`Invalid scope: ${o}. Must be one of: ${Iie.join(", ")}.`);
  return o;
}
function Ge(s) {
  let o;
  if (s.scope) {
    if (!Be(s.scope)) pn(`Invalid scope "${s.scope}". Valid scopes: ${Iie.join(", ")}`);
    o = s.scope;
  }
  if (s.cowork && o !== void 0 && o !== "user") pn("--cowork can only be used with user scope");
  if (s.cowork && o === void 0) o = "user";
  return o;
}
function me(s, o, i) {
  let { name: u, marketplace: p } = _se(o);
  a(s, {
    _PROTO_plugin_name: u,
    ...(p && { _PROTO_marketplace_name: p }),
    ...(i !== void 0 && { scope: i })
  });
}
async function PJr(s, o, i, u) {
  if (i.cowork) Hq(!0);
  let p = g5t(i);
  if ((me("tengu_plugin_install_command", o, c(p)), !i.json)) Re(await Rd(u));
  let g,
    P = (x) => {
      g = x;
    },
    y = async (x, T) => {
      if (i.json)
        await QSe({
          command: "install",
          outcome: "failed",
          plugin: o,
          scope: p,
          message: T,
          failureCode: x,
          shownCommand: g && DJr(g)
        });
    },
    E,
    v,
    m = (x) => {
      if (E) E5e(E.outcome);
      return zYe(x, "install", o, u, i.json ? { scope: p, shownCommand: g } : void 0);
    };
  if (i.replace && !On(o).marketplace)
    return m(new Eie(QZr(), { failureCode: "replace_needs_full_id" }));
  let k = (await KJ(u).catch(m)) !== void 0,
    F = k
      ? void 0
      : await cis(
          o,
          {
            yes: i.yes,
            acceptCommand: i.acceptCommand,
            onShown: P,
            scope: p,
            onMarketplaceRefreshResult: (x) => {
              E = x;
            },
            onResolvedMarketplace: (x) => {
              v = x;
            }
          },
          u
        ).catch(m);
  if (F?.kind === "accepted") g = void 0;
  if (F?.kind === "declined") {
    if (E) E5e(E.outcome);
    if ((f("cli_plugin_install", "command_source_declined"), i.json))
      await y("command_source_declined", "Aborted.");
    else await JM(await s(), e(n, { children: "Aborted." }));
    await Xn(1);
    return;
  }
  let B = F?.grantKey,
    h = k
      ? null
      : await dis(
          o,
          {
            yes: i.yes,
            acceptCommand: i.acceptCommand,
            onShown: P,
            scope: p,
            resolvedMarketplace: v
          },
          u
        ).catch(m);
  if (h !== null && h !== "declined" && h !== "unconfirmed") g = void 0;
  if (h === "declined" || h === "unconfirmed") {
    if (
      (f(
        "cli_plugin_install",
        h === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed"
      ),
      E)
    )
      E5e(E.outcome);
    if (i.json)
      await y(
        h === "declined" ? "entry_helper_declined" : "entry_helper_unconfirmed",
        "Aborted \u2014 the command was not run."
      );
    else await JM(await s(), e(n, { children: "Aborted \u2014 the command was not run." }));
    await Xn(1);
    return;
  }
  let { name: A, marketplace: W } = On(o),
    L = F?.kind === "accepted" || h !== null,
    O = i.acceptCommand !== void 0 && L && W === void 0 && A && v !== void 0 ? `${A}@${v}` : void 0,
    C = uis(o, p, i.config, B, k ? void 0 : h, u, E, {
      json: i.json,
      shownCommand: g,
      resolvedPlugin: O,
      replaceInstalledCopy: i.replace,
      npmRegistry: i.registry
    }).then(async (x) => (await jr("cli_plugin_install"), x));
  if (i.json) {
    (await C, await Xn(0));
    return;
  }
  let D = await s();
  (D.render(
    e(ro, {
      fallback: e(n, { children: Vn(`Installing plugin "${o}"...`) }),
      children: e(Ue, { promise: C })
    })
  ),
    await D.waitUntilExit(),
    await Xn(0));
}
async function vvi(s, o, i, u) {
  if (i.json && i.prune) pn("--json cannot be used with --prune");
  if (i.cowork) Hq(!0);
  let p = g5t(i);
  me("tengu_plugin_uninstall_command", o, c(p));
  let g = await fis(o, p, i.keepData, i.prune, i.yes, u, { json: i.json });
  if (!i.json) await JM(await s(), e(n, { children: ic(i.prune ? g : `${ne.tick} ${g}`) }));
  (await jr("cli_plugin_uninstall"), await Oo(0));
}
async function Evi(s, o, i) {
  if (o.cowork) Hq(!0);
  let u = g5t(o);
  a("tengu_plugin_prune_command", { scope: c(u), dry_run: o.dryRun ?? !1 });
  let p = await pis(u, { dryRun: o.dryRun, yes: o.yes }, i);
  (await JM(s, e(n, { children: ic(p) })), await jr("cli_plugin_prune"), await Oo(0));
}
async function kvi(s, o, i, u) {
  if (i.cowork) Hq(!0);
  let p = Ge(i);
  me("tengu_plugin_enable_command", o, c(p ?? "auto"));
  let g,
    P = !1,
    y = o;
  try {
    (await iXe(), h5t());
    let v = await y5t(o, i.json, u, { unlessNamedInSettings: !0 });
    if (((P = v.aliased), (y = v.plugin), (g = await VRt(v.plugin, p, u)), !g.success))
      throw new Eie(g.message, g);
  } catch (v) {
    return await zYe(v, "enable", o, u, i.json ? { scope: p } : void 0, P ? y : void 0);
  }
  let E = KAn(g.message, g.scope ?? p);
  if (i.json)
    await QSe({
      command: "enable",
      outcome: "ok",
      plugin: o,
      pluginId: g.pluginId,
      scope: g.scope ?? p,
      message: ic(E)
    });
  else await JM(await s(), r(n, { children: [ne.tick, " ", ic(E)] }));
  (await Zs("tengu_plugin_enabled_cli", {
    ...(await fwe(g.pluginId || y, Sf(), u)),
    scope: ce(g.scope),
    ...(P ? { aliased_id: !0 } : {})
  }),
    await jr("cli_plugin_enable"),
    await Oo(0));
}
async function Tvi(s, o, i, u) {
  if (i.all && o) pn("Cannot use --all with a specific plugin");
  if (!i.all && !o) pn("Please specify a plugin name or use --all to disable all plugins");
  if (i.cowork) Hq(!0);
  let p;
  if (i.all) {
    if (i.scope) pn("Cannot use --scope with --all");
    (a("tengu_plugin_disable_command", {}), h5t(), (p = await gis(u, { json: i.json })));
  } else {
    let g = Ge(i);
    (me("tengu_plugin_disable_command", o, c(g ?? "auto")),
      await iXe(),
      h5t(),
      (p = await mis(o, g, u, { json: i.json })));
  }
  if (!i.json) await JM(await s(), e(n, { children: ic(p) }));
  (await jr("cli_plugin_disable"), await Oo(0));
}
async function Avi(s, o, i) {
  if (o.cowork) Hq(!0);
  let u = o.cowork ? "user" : void 0;
  if (o.scope) {
    if (!Q6t.includes(o.scope)) pn(`Invalid scope "${o.scope}". Valid scopes: ${Q6t.join(", ")}`);
    u = o.scope;
  }
  if (o.cowork && u !== "user") pn("--cowork can only be used with user scope");
  if ((me("tengu_plugin_update_command", s), !o.json)) Re(await Rd(i));
  await his(s, u, { yes: o.yes, json: o.json, acceptCommand: o.acceptCommand }, i);
}
async function Cvi(s, o, i, u, p) {
  if (i.cowork) Hq(!0);
  (h5t(), a("tengu_plugin_details_command", {}));
  let {
      getPluginInventory: g,
      computePluginTokenCost: P,
      scaleCharsToTokens: y
    } = await import("./chunk-0d1xg4jc.js"),
    { formatTokenEstimate: E } = await import("./chunk-pf757fg0.js");
  await iXe();
  let { enabled: v, disabled: m } = await sv(z() ? u : void 0, p),
    k = _se((await y5t(o, i.json, u)).plugin),
    F = k.marketplace ? pot(k.name, k.marketplace) : k.name,
    B = Vf(k.marketplace) ? (U) => or(U) === or(F) : (U) => jg(U, F),
    h = [...v, ...m].find((U) => B(k.marketplace ? U.source : U.name));
  if (!h) {
    let U =
        (await MP()) !== "unavailable"
          ? Object.entries((await nY(u)).plugins).find(([he, ke]) => {
              let fe = On(he);
              return fe.marketplace === Sn && jg(k.marketplace ? he : fe.name, F) && ke.some(yO);
            })?.[0]
          : void 0,
      H = eS(),
      V = U !== void 0 && H !== null ? On(U).name : void 0,
      X = U !== void 0 && H === null && (await Usn(On(U).name, u)) === null ? On(U).name : void 0,
      Z =
        V !== void 0 ? "policy_blocked" : X !== void 0 ? "directory_catalog_missing" : "not_found",
      K =
        V !== void 0 && H !== null
          ? `${ne.cross} ${gWt(V, H)}`
          : X !== void 0
            ? `${ne.cross} Details for "${Ve(X)}" are not available: ${cDr}. ${mWt}`
            : `Plugin "${Ve(o)}" not found. ${k.marketplace === Ns ? "Built-in plugins don't appear in `claude plugin list`. To see the ones available in a session, run /plugin in Claude Code and open the Installed tab." : "Run `claude plugin list` to see installed plugins, or pass --plugin-dir <path> to load one from disk."}`;
    return je(s, i.json, K, Z);
  }
  let A = Vs(h.source) ?? tu,
    W = i.models?.length ? i.models : [st()],
    L;
  try {
    let U = await g(h, A);
    L = await P(U, W, h.name);
  } catch (U) {
    let H = U instanceof uDr;
    if (!H) l(Qe(N(U), "plugin details: inventory/token-cost failed"));
    let V = H ? "directory_catalog_missing" : "inventory_failed",
      X = H
        ? `${ne.cross} Details for "${Ve(h.name)}" are not available: ${cDr}. ${mWt}`
        : `${ne.cross} Could not load details for "${Ve(h.name)}": ${uC(U)}`;
    return je(s, i.json, X, V);
  }
  let { tokens: O, inventory: C } = L;
  if (i.json) {
    let U = ({ path: H, ...V }) => V;
    (await Ff(
      se({
        plugin: h.name,
        version: h.manifest.version,
        source: h.source,
        sha: h.sha ?? null,
        tokens: O,
        components: {
          ...C,
          commands: C.commands.map(U),
          agents: C.agents.map(U),
          skills: C.skills.map(U)
        }
      }) +
        `
`
    ),
      await jr("cli_plugin_details"));
    return;
  }
  let D = [],
    x = Jm(h),
    T = x === h.name ? h.name : `${x} (${h.name})`;
  if ((D.push(`${T} ${h.manifest.version ?? ""}`.trimEnd()), h.manifest.description)) {
    let [U, ...H] = h.manifest.description.split(`
`);
    D.push(`  Description: ${U}`);
    for (let V of H) D.push(`      ${V}`);
  }
  (D.push(`  Source: ${h.source}`), D.push(""), D.push("Component inventory"));
  let M = [
    ["Skills", [...C.skills, ...C.commands].map((U) => U.name).sort(), ""],
    ["Agents", C.agents.map((U) => U.name), ""],
    ["Hooks", C.hooks, "  (harness-only \u2014 no model context cost)"],
    ["MCP servers", C.mcpServers, "  (tool schemas resolved at runtime; not counted)"],
    ["LSP servers", C.lspServers, "  (out-of-process tooling; no model context cost)"]
  ];
  for (let [U, H, V] of M)
    D.push(
      `  ${U} (${H.length})${H.length > 0 ? `  ${H.join(", ")}` : ""}${H.length > 0 ? V : ""}`
    );
  D.push("");
  let G = [...C.skills, ...C.agents, ...C.commands].filter((U) => U.chars != null),
    J = {
      always_on: G.reduce((U, H) => U + H.chars.always_on, 0),
      on_invoke: G.reduce((U, H) => U + H.chars.on_invoke, 0)
    },
    q = O[W[0]],
    ee = q?.always_on ?? y(J.always_on, J.always_on, void 0);
  if (
    (D.push("Projected token cost"),
    D.push(`  Always-on:   ~${ee.toLocaleString()} tok   added to every session`),
    G.length > 0)
  ) {
    (D.push(""), D.push("Per-component (rounded)"));
    let U = Math.max(...G.map((H) => H.name.length), 9);
    D.push(`  ${"component".padEnd(U)}  ${"always-on".padStart(9)}  ${"on-invoke".padStart(9)}`);
    for (let H of G) {
      let V = y(H.chars.always_on, J.always_on, q?.always_on),
        X = y(H.chars.on_invoke, J.on_invoke, q?.on_invoke);
      D.push(`  ${H.name.padEnd(U)}  ${E(V).padStart(9)}  ${E(X).padStart(9)}`);
    }
    (D.push(""),
      D.push("  On-invoke cost is paid each time a skill or agent fires."),
      D.push("  Token counts are estimates and may differ from actual usage."));
  }
  let Q = await s();
  if ((await JM(Q, e(n, { children: ae(D) })), q)) await jr("cli_plugin_details");
  else await da("cli_plugin_details", "count_tokens_unreachable");
}
async function je(s, o, i, u) {
  let p = ic(i);
  if (o) Fp(p);
  else await JM(await s(), e(n, { children: p }));
  return (await zt("cli_plugin_details", u), o ? rs() : Oo(1));
}
function ae(s) {
  return s.map(Vn).join(`
`);
}
function Re(s) {
  for (let { message: o } of Hle(s)) console.error(`${ne.warning} ${o}`);
}
function se(s) {
  return tN(_(s, null, 2));
}
function $e(s, o) {
  let i = (P) => G_(P.source) === s,
    u = o.plugins.filter(i),
    p = o.errors.filter(i),
    g = o.warnings.filter(i);
  return {
    plugins: u,
    errors: p,
    warnings: g,
    standaloneErrorRows: p.filter((P) => !u.some((y) => Vfr(P, y))),
    standaloneWarningRows: g.filter((P) => !u.some((y) => qfr(P, y)))
  };
}
function He(s) {
  return (
    s.plugins.length > 0 || s.standaloneErrorRows.length > 0 || s.standaloneWarningRows.length > 0
  );
}
function hn(s) {
  if (!He(s)) return [];
  let { standaloneErrorRows: o, standaloneWarningRows: i } = s,
    u = [s.header, ""];
  for (let p of i) u.push(`  ${ne.warning} ${Ure(p)}`, "");
  for (let p of s.plugins) {
    let g = s.errors.filter((v) => Vfr(v, p)),
      P = s.warnings.filter((v) => qfr(v, p)),
      y =
        p.enabled !== !1 && pB(p.source, p.installationPreference)
          ? " \xB7 required by your org"
          : "",
      E =
        (p.enabled === !1
          ? `${ne.cross} disabled`
          : g.length > 0
            ? `${ne.cross} loaded with errors`
            : `${ne.tick} loaded`) + y;
    if (
      (u.push(`  ${ne.pointer} ${p.source}`),
      u.push(`    Version: ${p.manifest.version ?? "unknown"}`),
      s.showScope)
    )
      u.push(`    Scope: ${s.scopeOf(p)}`);
    (u.push(`    Path: ${s.pathOf(p)}`), u.push(`    Status: ${E}`));
    for (let v of g) u.push(`    Error: ${gv(v)}`);
    for (let v of P) u.push(`    Note: ${Ure(v)}`);
    u.push("");
  }
  for (let p of o) u.push(`  ${ne.pointer} ${p.source}: ${ne.cross} ${gv(p)}`, "");
  return u;
}
function Me({ path: s, message: o }) {
  return { path: s, message: o, code: null };
}
function Ne(s) {
  return {
    file: s.filePath,
    type: s.fileType,
    errors: s.errors.map(Me),
    warnings: s.warnings.map(Me),
    notes: s.notes ?? [],
    gatingHooks: (s.gatingHooks ?? []).map((o) => ({
      module: o.module,
      pattern: o.pattern,
      hook: o.hook,
      hasCatch: o.hasCatch
    }))
  };
}
function kn(s, o, i, u) {
  return {
    success: o.success,
    strict: o.strict,
    target: s.resolvedPath,
    manifest: s.manifest ? Ne(s.manifest) : null,
    contents: s.contents.map(Ne),
    advice: i,
    directory: u
  };
}
function ue(s) {
  let o = s,
    i = (A) => {
      let W = o[A];
      return typeof W === "string" ? W : void 0;
    },
    u = { type: s.type },
    p = i("plugin") ?? i("pluginId");
  if (p !== void 0) u.plugin = p;
  let g = i("marketplace");
  if (g !== void 0) u.marketplace = g;
  let P = i("dependency");
  if (P !== void 0) u.dependency = P;
  let y = i("serverName");
  if (y !== void 0) u.serverName = y;
  let E = i("component");
  if (E !== void 0) u.component = E;
  let v =
    i("manifestPath") ??
    i("path") ??
    i("folderPath") ??
    i("hookPath") ??
    i("mcpbPath") ??
    i("installPath") ??
    i("filePath") ??
    i("heldAt");
  if (v !== void 0) u.path = v;
  let m = i("url") ?? i("gitUrl");
  if (m !== void 0) u.url = m;
  if (s.type === "marketplace-not-found" && s.registrationHidden !== void 0)
    u.registrationHidden = s.registrationHidden;
  let k = i("duplicateOf") ?? i("activeServer"),
    F = k?.startsWith("plugin:") ? k.split(":")[1] : void 0,
    B = o.blockedBy,
    h =
      i("shadowedBy") ??
      i("renamedTo") ??
      F ??
      (Array.isArray(B) && B.every((A) => typeof A === "string") ? B.join(", ") : void 0);
  if (h !== void 0) u.related = h;
  return u;
}
async function wn(s, o) {
  let i = [];
  for (let u of s.plugins) {
    let p = u.mcpServers || (await _pt(u, void 0, o, void 0, { readOnlyListing: !0 })),
      g = s.errors.filter((v) => Vfr(v, u)),
      P = s.warnings.filter((v) => qfr(v, u)),
      y = g.map(gv),
      E = P.map(Ure);
    i.push({
      id: u.source,
      version: u.manifest.version ?? "unknown",
      scope: s.scopeOf(u),
      enabled: u.enabled !== !1,
      installPath: u.path,
      mcpServers: p && Object.keys(p).length > 0 ? Ye(p) : void 0,
      errors: y.length > 0 ? y : void 0,
      notes: E.length > 0 ? E : void 0,
      errorDetails: g.length > 0 ? g.map(ue) : void 0,
      noteDetails: P.length > 0 ? P.map(ue) : void 0,
      hasUserConfig: Je(u)
    });
  }
  for (let u of s.standaloneErrorRows)
    i.push({
      id: u.source,
      version: "unknown",
      scope: s.standaloneErrorScope,
      enabled: !1,
      installPath: ("path" in u ? u.path : void 0) ?? "",
      errors: [gv(u)],
      errorDetails: [ue(u)]
    });
  for (let u of s.standaloneWarningRows)
    i.push({
      id: u.source,
      version: "unknown",
      scope: s.standaloneWarningScope,
      enabled: u.type === "synced-plugin-shadowed",
      installPath: "",
      notes: [Ure(u)],
      noteDetails: [ue(u)]
    });
  return i;
}
function Je(s) {
  let o = s?.manifest.userConfig;
  return o && Object.keys(o).length > 0 ? !0 : void 0;
}
function ge(s, o) {
  return Vn(o?.title || s);
}
class oe extends R {
  option;
  constructor(s, o, i) {
    super(s, o);
    this.option = i;
  }
}
function _n(s) {
  if (typeof s !== "object" || s === null || Array.isArray(s)) return;
  let o = Object.create(null);
  for (let [i, u] of Object.entries(s)) {
    if (typeof u !== "string") return;
    o[i] = u;
  }
  return o;
}
var yn = 262144,
  $n = 65536;
async function Pn() {
  process.stdin.setEncoding("utf8");
  let s = "",
    o = 0;
  for await (let i of sTn(process.stdin)) {
    if (((o += Buffer.byteLength(i, "utf8")), o > yn)) return;
    s += i;
  }
  return s;
}
async function bn(s, o, i, u) {
  let p = s.manifest.userConfig ?? {},
    g = Object.keys(o).filter((m) => !Object.hasOwn(p, m));
  if (g.length > 0) {
    let m = Object.keys(p).map(Vn);
    throw new oe(
      `This plugin has no ${I(g.length, "option")} ${g.map((k) => `"${Vn(k)}"`).join(", ")}.` +
        (m.length > 0 ? ` Known options: ${m.join(", ")}.` : ""),
      "plugin configure: option not declared in userConfig"
    );
  }
  let P = ig(s),
    y = await AO(P, u);
  for (let [m, k] of Object.entries(o)) {
    if (Buffer.byteLength(k, "utf8") > $n)
      throw new oe(
        `${ge(m, p[m])} is too long (over 64 KB).`,
        "plugin configure: option value over the size cap",
        m
      );
    if (/[\r\n]/.test(k))
      throw new oe(
        `${ge(m, p[m])} must be a single line.`,
        "plugin configure: option value contains a line break",
        m
      );
    let F = p[m],
      B = k.trim(),
      h = so(y, m);
    if (B === "" && F?.required === !0 && !(F.sensitive === !0 && h !== void 0 && h !== ""))
      throw new oe(
        `${ge(m, F)} is required but not provided`,
        "plugin configure: required option blank",
        m
      );
    if (F?.type === "boolean" && B !== "" && a8e(B) === void 0)
      throw new oe(
        `${ge(m, F)} must be true or false (or 1/0, yes/no, on/off).`,
        "plugin configure: option value is not a boolean",
        m
      );
    if (F?.type === "number" && B !== "" && P7t(B, F) === void 0)
      throw new oe(
        `${ge(m, F)}: ${x7t(F)}`,
        "plugin configure: option value is not a number the field takes",
        m
      );
  }
  let E = Wfr(Object.keys(o), o, p, y),
    v = Object.keys(E);
  if (v.length === 0) return [];
  for (let m of v) {
    let k = wQ({ [m]: E[m] }, { [m]: p[m] });
    if (!k.valid)
      throw new oe(
        Vn(k.errors.join("; ")),
        "plugin configure: value rejected by the userConfig schema",
        m
      );
  }
  return (await UDe(P, E, p, i, u), v);
}
function Pe(s, o) {
  return s.reduce((i, u) => i.split(u).join("\u2026"), o);
}
async function Rvi(s, o, i, u) {
  if (o.cowork) Hq(!0);
  (h5t(), a("tengu_plugin_configure_command", {}), await iXe());
  let { enabled: p, disabled: g } = await sv(i, u),
    P = byt([...p, ...g], s);
  if (!P)
    return (
      await zt("cli_plugin_configure", "not_found"),
      rs(
        ic(
          `No installed plugin has the id "${Vn(s)}". Use its full id (name@marketplace), as \`claude plugin list${o.cowork ? " --cowork" : ""}\` shows it.`
        )
      )
    );
  let y = ig(P),
    E = P.manifest.userConfig ?? {},
    v = Jm(P),
    m = "Example: claude plugin configure <plugin> --values-stdin < values.json";
  if (o.valuesStdin) {
    if (process.stdin.isTTY)
      return (
        await zt("cli_plugin_configure", "invalid_stdin"),
        rs(ic(`No option values were piped in. ${m}`))
      );
    let O,
      C = !1;
    try {
      let G = await Pn();
      ((C = G === void 0), (O = G === void 0 ? void 0 : te(G)));
    } catch {
      O = void 0;
    }
    let D = _n(O);
    if (D === void 0)
      return (
        await zt("cli_plugin_configure", "invalid_stdin"),
        rs(
          ic(
            C
              ? "The input on stdin is over the 256 KB limit."
              : `The input on stdin isn't a JSON object of strings. ${m}`
          )
        )
      );
    let x = Object.entries(D)
        .filter(([G]) => Object.hasOwn(E, G) && E[G]?.sensitive)
        .flatMap(([, G]) => [G, G.trim()])
        .filter((G) => G !== "")
        .sort((G, J) => J.length - G.length),
      T;
    try {
      T = await bn(P, D, i, u);
    } catch (G) {
      if (G instanceof oe) await da("cli_plugin_configure", "value_refused");
      else await zt("cli_plugin_configure", "save_failed");
      if (o.json && G instanceof oe) {
        let J = {
          pluginId: y,
          displayName: v,
          refused: { option: G.option, message: Pe(x, G.message) }
        };
        await Ff(
          se(J) +
            `
`
        );
      }
      return rs(ic(Pe(x, `Failed to save configuration: ${d(G)}`)));
    }
    let M;
    try {
      M = Object.keys(await BDe(P, u));
    } catch (G) {
      t(Pe(x, `plugin configure: saved, but the re-read of unset options failed: ${d(G)}`), {
        level: "error"
      });
    }
    if ((await jr("cli_plugin_configure"), o.json)) {
      let G = {
        pluginId: y,
        displayName: v,
        saved: T,
        ...(M === void 0 ? {} : { unconfigured: M })
      };
      await Ff(
        se(G) +
          `
`
      );
    } else
      await Ff(
        (T.length > 0
          ? "Configuration saved. Restart Claude Code to apply it."
          : "No configuration changes.") +
          `
`
      );
    await Oo(0);
    return;
  }
  let k, F;
  try {
    ((k = await AO(y, u)), (F = Object.keys(await BDe(P, u))));
  } catch (O) {
    return (
      await zt("cli_plugin_configure", "saved_options_read_failed"),
      rs(ic(`Could not read the saved options for "${y}": ${d(O)}`))
    );
  }
  let B = P_e(y).options ?? {},
    h = [],
    A = Object.create(null);
  for (let [O, C] of Object.entries(E)) {
    let D = so(k, O);
    if (D === void 0 || D === "") continue;
    if ((h.push(O), C.type === "boolean")) {
      A[O] = D;
      continue;
    }
    let x = Object.hasOwn(B, O) ? B[O] : void 0;
    if (C.sensitive !== !0 && x !== void 0 && x !== "") A[O] = x;
  }
  let W = {};
  for (let [O, C] of Object.entries(E)) {
    let D = wxn(C);
    if (D !== void 0) W[O] = D;
  }
  if ((await jr("cli_plugin_configure"), o.json)) {
    let O = {
      pluginId: y,
      displayName: v,
      schema: E,
      inputs: Gfr(E, A),
      choices: W,
      configured: h,
      unconfigured: F
    };
    (await Ff(
      se(O) +
        `
`
    ),
      await Oo(0));
    return;
  }
  let L = [];
  if (Object.keys(E).length === 0) L.push(`${v} (${y}) has no options to set.`);
  else {
    L.push(`Options for ${v} (${y}):`);
    for (let [O, C] of Object.entries(E)) {
      let D = [
          C.required ? "required" : "optional",
          C.sensitive ? "sensitive" : void 0,
          h.includes(O) ? "set" : "not set"
        ].filter(Boolean),
        x = C.title && C.title !== O ? ` \u2014 ${C.title}` : "";
      L.push(`  ${ne.pointer} ${O}${x} (${D.join(", ")})`);
    }
    L.push(
      "",
      "Set values with /plugin configure <plugin> in Claude Code, or pipe a JSON object to `claude plugin configure <plugin> --values-stdin`."
    );
  }
  (await Ff(
    ae(L) +
      `
`
  ),
    await Oo(0));
}
function Ye(s) {
  return Ir(s, (o) => xo(o, "configuredCommand"));
}
export {
  Pcr,
  qxe,
  mvi,
  gvi,
  hvi,
  yvi,
  WAn,
  _vi,
  GAn,
  bvi,
  Svi,
  wvi,
  g5t,
  PJr,
  vvi,
  Evi,
  kvi,
  Tvi,
  Avi,
  Cvi,
  Rvi
};

//# sourceMappingURL=chunk-7kz3kchp.js.map
