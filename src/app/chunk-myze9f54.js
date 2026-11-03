// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn, ao, $c, Rp } from "./chunk-wrtp8qz8.js";
import { b } from "./chunk-acd8w9vv.js";
import { vA, Ke, N, Us } from "./chunk-fs43t96t.js";
import { X, Pe } from "./chunk-4hww8411.js";
import { br } from "./chunk-wejdb0zs.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { ma, ie, t } from "./chunk-4kxznmzw.js";
import { re } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { xo, aa, wqt, Uw, ni, Fbe, Vs, or } from "./chunk-5rw2zfa0.js";
import { Wg, lQo, IZ, KTt, qTt } from "./chunk-d54avynm.js";
import { er } from "./chunk-1e5yp9hx.js";
import { vp } from "./chunk-pbffp8rf.js";
import { mr } from "./chunk-spwjh8kb.js";
import { Qk } from "./chunk-jwqtbev0.js";
import { $p, t0, _p, j8 } from "./chunk-p56qmwgb.js";
import { n_, op, $0o, rVs, oVs, sVs, sze, ure, PO } from "./chunk-xt7fs806.js";
import {
  S3,
  Yme,
  Xme,
  Q9e,
  QHt,
  W1e,
  WCr,
  cpt,
  tXe,
  BEe,
  nWn,
  Yte,
  Unn,
  sXe,
  M4,
  LA,
  $F,
  kL,
  C3,
  IEo,
  FMs,
  cke,
  Ege,
  ane,
  kge,
  Eje,
  _Ds,
  Tge,
  kje,
  omt,
  $3,
  Hd,
  $le,
  Vge,
  sv,
  fi,
  Uke,
  Xsn,
  PHr,
  eDe,
  R1,
  JPo,
  fFs,
  LJe,
  GWe
} from "./chunk-j0tbz6ra.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { ht } from "./chunk-gdcb8skc.js";
import { Rt } from "./chunk-wany0nxw.js";
import { Ao } from "./chunk-ar6ynjt8.js";
import { YOo } from "./chunk-6h7ejyet.js";
import { jP } from "./chunk-s72xe0e3.js";
import { XQ } from "./chunk-b6tgsycv.js";
import { KW } from "./chunk-5hjs1kac.js";
import { zOn, $pe } from "./chunk-tgw6g4qf.js";
import { pIe } from "./chunk-n7dvjfwp.js";
import { ZSe } from "./chunk-vm37ezht.js";
import { YJr } from "./chunk-17n5qmhn.js";
import { Tie, JYe } from "./chunk-w6j1j35n.js";
import { Jit } from "./chunk-k4djevhg.js";
import { o, v, M, oe, T, u, Ue, $e, Gr, me, B, A } from "./chunk-0bqrj5ah.js";
import { Mb, et } from "./chunk-c9re0p40.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { dirname as rt, resolve as it } from "path";
import { basename as fe, dirname as je, join as ge } from "path";
var Ne = 1e4,
  Te = IEo,
  ae = { reason: "timed_out" };
async function le(e) {
  if (!wqt(e)) return { reason: "file_absent" };
  let n = op().hostCatalog,
    a = n.texts.get(e);
  if (a !== void 0) return a;
  let r = n.readingForCalls.get(e);
  if (r === void 0) {
    if (rVs()) return { reason: "earlier_work_outstanding" };
    if (n.readingForCalls.size >= Te) return { reason: "too_many_reads" };
    let c = n.lastReadForCalls.then((S) => De(n, e, S));
    ((n.lastReadForCalls = c.then(
      ({ probed: S }) => S,
      () => {
        return;
      }
    )),
      (r = {
        reading: c
          .then(({ outcome: S }) => S)
          .finally(() => {
            if ((n.readingForCalls.delete(e), n.readingForCalls.size === 0))
              n.lastReadForCalls = Promise.resolve(void 0);
          }),
        since: performance.now()
      }),
      n.readingForCalls.set(e, r));
  }
  let s = r.since + Ne - performance.now();
  return (s > 0 ? await Pe(r.reading, s) : void 0) ?? { reason: "timed_out" };
}
async function De(e, n, a) {
  let r = () => op().hostCatalog === e;
  if (a === void 0) await Wg();
  let s = a ?? (await $0o(async () => (r() ? oVs() : ae)));
  if ("reason" in s) return { outcome: s, probed: void 0 };
  await Wg();
  let c = await $0o(async () => {
    let d = r() ? await sVs(s.root, n, s.device) : ae;
    if (!("reason" in d)) e.texts.set(n, d);
    return d;
  });
  return { outcome: c, probed: "reason" in c ? void 0 : s };
}
import { join as Fe } from "path";
var kis = "ListProjectCommands",
  He = 8388608,
  de = 2000;
function V(e) {
  return (
    (e.source === "projectSettings" || e.source === "userSettings") &&
    (e.loadedFrom === "skills" || e.loadedFrom === "commands_DEPRECATED")
  );
}
var ce = p(() =>
    u({
      name: o().min(1).max(1024),
      source: A("userSettings").optional(),
      loadedFrom: B(["skills", "commands_DEPRECATED"]),
      text: o().max(cpt)
    })
  ),
  jt = p(() => u({ commands: T(ce()).max(de), cut: M(), refused: v().int().min(0) }));
function ee(e) {
  return br().skillFiles.get(e) ?? (e.skillRoot ? Fe(e.skillRoot, "SKILL.md") : "");
}
async function te(e) {
  let n = ee(e);
  if (n === "") return null;
  try {
    return await Qk(ie(), n, cpt);
  } catch {
    return null;
  }
}
function qYe(e) {
  return Buffer.byteLength(ma(e));
}
async function Tis(e, n, a) {
  let { storageV5: r } = a.toolUseContext();
  (R1(), er());
  let s = [...(await eDe(ao(), r)), ...GWe(), ...LJe()];
  n.throwIfAborted();
  let c = new Set(),
    d = [],
    S = 0,
    y = !1,
    h = 0;
  for (let _ of s) {
    if (_.type !== "prompt" || c.has(_.name)) continue;
    c.add(_.name);
    let { name: P, source: C, loadedFrom: k } = _;
    if (!V(_) || W1e(_) || LA(_)) continue;
    let w = await te(_);
    n.throwIfAborted();
    let x = ce().safeParse({
      name: P,
      ...(C === "userSettings" && { source: C }),
      loadedFrom: k,
      text: w
    });
    if (!x.success) {
      (h++, t(`ListProjectCommands: ${P} refused from the listing`, { level: "warn" }));
      continue;
    }
    if (d.length === de) {
      y = !0;
      break;
    }
    let z = qYe(x.data);
    if (S + z > He) {
      y = !0;
      continue;
    }
    ((S += z), d.push(x.data));
  }
  return {
    summary: `${d.length} commands${y ? ", cut at a limit" : ""}${h > 0 ? `, ${h} refused` : ""}`,
    output: { commands: d, cut: y, refused: h }
  };
}
var Ais = "ReadSkill",
  Cis = "RenderSkill",
  Ris = "RenderPinnedSkill",
  xis = "RenderBuiltInCommand",
  Se = 110000,
  ye = 2000,
  U = 1e5,
  Be = WCr,
  Ge = 60000,
  Xe = 4096,
  Ce = 256,
  he = 256,
  _e = 32768,
  Ye = [ht, jP, Ao],
  pe = ve({ last: Promise.resolve() }, (e) => {
    e.last = Promise.resolve();
  }),
  ke = p(() =>
    A(!0)
      .optional()
      .catch(void 0)
  ),
  We = p(() =>
    u({
      name: o().min(1).max(1024),
      updatedAt: o().max(64).nullable(),
      waitMs: v().int().min(0).max(Se),
      fromHostCatalog: ke()
    })
  ),
  xe = p(() =>
    u({
      outcome: A("missing"),
      syncing: M(),
      fromHostCatalog: A(!0).optional(),
      withheld: A(!0).optional()
    })
  ),
  Tn = p(() =>
    Gr("outcome", [
      u({ outcome: A("found"), text: o().max(n_), fromHostCatalog: A(!0).optional() }),
      xe()
    ])
  ),
  G = p(() => oe().optional()),
  qe = p(() =>
    u({
      name: o().min(1).max(1024),
      args: o().max(U),
      readOnly: M(),
      waitMs: v().int().min(0).max(Se),
      fromHostCatalog: ke(),
      expectSha256: o().regex(Mb).optional(),
      sessionRules: G()
    })
  ),
  Je = p(() =>
    u({
      name: o().min(1).max(1024),
      args: o().max(U),
      readOnly: M(),
      sessionRules: G(),
      model: o().min(1).max(256),
      session: u({
        tools: T(o().min(1).max(Ce)).max(Xe).catch([]),
        isSkillPreload: M()
          .optional()
          .catch(void 0),
        modelScheduledOrigin: M()
          .optional()
          .catch(void 0),
        remoteSessionId: o()
          .min(1)
          .max(256)
          .optional()
          .catch(void 0),
        effort: $e([B(aa), v().int().min(0).max(1000)])
          .optional()
          .catch(void 0)
      })
        .optional()
        .catch(void 0)
    })
  ),
  K = p(() =>
    u({
      outcome: A("rendered"),
      blocks: T(u({ type: A("text"), text: o().max(Be) })).max(16),
      handedOff: T(Ue({ command: o().min(1).max(_e), tool: o().max(Ce) }))
        .max(he)
        .optional(),
      fromHostCatalog: A(!0).optional()
    })
  ),
  se = p(() => u({ outcome: A("failed"), message: o().max(ye) })),
  In = p(() => Gr("outcome", [K(), xe(), se()]));
async function Pis(e, n, { toolUseContext: a }) {
  let { name: r, updatedAt: s, waitMs: c, fromHostCatalog: d } = We().parse(e),
    S = d ? await we(r) : await ne(r, c, n, a(), s),
    y = S && w5t(S);
  if (y !== void 0) return { summary: "no such skill", output: j(y, d) };
  let h = d
    ? (S?.getLoadedSkillMd?.() ?? null)
    : S?.skillRoot === void 0
      ? null
      : await Qk(ie(), ge(S.skillRoot, "SKILL.md"), n_).catch(() => null);
  return h === null
    ? { summary: "no such skill", output: j(void 0, d) }
    : { summary: "found", output: { outcome: "found", text: h, ...(d && { fromHostCatalog: d }) } };
}
async function GJr(e, n, { toolUseContext: a, launchPermissionContext: r }) {
  let {
      name: s,
      args: c,
      readOnly: d,
      waitMs: S,
      fromHostCatalog: y,
      expectSha256: h,
      sessionRules: _
    } = qe().parse(e),
    P = await Y(a(), d, _, r, e),
    C = y ? await we(s) : await ne(s, S, n, P);
  if (C !== void 0 && V(C)) (R1(), (C = await ne(s, S, n, P)));
  let k = C && w5t(C);
  if (C === void 0 || k !== void 0) return { summary: "no such skill", output: j(k, y) };
  if (h !== void 0) {
    if (((C = await Qe(C, h)), C === void 0 || w5t(C) !== void 0))
      return {
        summary: "changed since listed",
        output: {
          outcome: "failed",
          message:
            "this skill's file changed after the session listed it, so it was not rendered; a new session lists the current file"
        }
      };
  }
  let w = await W(C, c, P, n);
  return y && w.output.outcome === "rendered"
    ? { ...w, output: { ...w.output, fromHostCatalog: y } }
    : w;
}
async function Y(e, n, a, r, s) {
  if (!n && a === void 0) return e;
  let c = n ? void 0 : await ZSe("The render", s),
    d = c === void 0 || c.refused !== void 0 ? void 0 : YJr(a, r, c.repoRules);
  if (d === void 0) return { ...e, options: { ...e.options, readOnlySkillLoad: !0 } };
  let { toolPermissionContext: S } = d;
  return {
    ...e,
    getAppState: () => ({ ...Tie(), toolPermissionContext: S }),
    ...(d.offersHandOff && { promptShellHandOff: [] }),
    ...(d.classifiesEveryCall && { promptShellCallerClassifiesAll: !0 })
  };
}
async function Qe(e, n) {
  let a = $F(e) ? (e.getLoadedSkillMd?.() ?? null) : await te(e);
  if (a === null || et(a) !== n) return;
  try {
    let r = PHr({
      content: a,
      skillFilePath: ee(e),
      skillName: e.name,
      source: e.source,
      baseDir: e.skillRoot,
      loadedFrom: e.loadedFrom ?? "skills",
      serverAttribution: e.serverAttribution
    });
    return r?.type === "prompt" ? r : void 0;
  } catch (r) {
    l(N(r));
    return;
  }
}
async function Iis(e, n, { toolUseContext: a, launchPermissionContext: r }) {
  let { name: s, args: c, readOnly: d, sessionRules: S, model: y, session: h } = Je().parse(e),
    _ = await Y(a(), d, S, r, e),
    P = h?.effort,
    C = {
      ..._,
      ...(P !== void 0 && {
        permissionLayers: [...(_.permissionLayers ?? []), { kind: "effort", effort: P }]
      }),
      options: {
        ..._.options,
        mainLoopModel: y,
        ...(h && {
          tools: [
            ..._.options.tools,
            ...JYe(!1).filter(
              (w) =>
                Ye.some((x) => Rt(w, x)) &&
                h.tools.some((x) => Rt(w, x)) &&
                !_.options.tools.some((x) => Rt(x, w.name))
            )
          ],
          isSkillPreload: h.isSkillPreload,
          modelScheduledOrigin: h.modelScheduledOrigin
        })
      }
    },
    k = Ze(s);
  if (k === void 0 || w5t(k) !== void 0) return { summary: "no such command", output: j() };
  return Ve(y, () => FMs(h?.remoteSessionId, () => W(k, c, C, n)));
}
function Ze(e) {
  pIe();
  for (let n of [...XQ(), ...$3()]) if (n.type === "prompt" && n.name === e && YOo(n)) return n;
  return;
}
async function Ve(e, n) {
  let a = pe.last.then(async () => {
    let r = $c();
    Rp(e);
    try {
      return await n();
    } finally {
      Rp(r);
    }
  });
  return (
    (pe.last = a.then(
      () => {
        return;
      },
      () => {
        return;
      }
    )),
    a
  );
}
async function W(e, n, a, r) {
  try {
    let s = await e.getPromptForCommand(n, a),
      c = s.flatMap((S) => (S.type === "text" ? [{ type: S.type, text: S.text }] : [])),
      d = K().safeParse({
        outcome: "rendered",
        blocks: c,
        ...(a.promptShellHandOff?.length && { handedOff: a.promptShellHandOff })
      });
    if (c.length !== s.length || !d.success)
      return {
        summary: "render refused",
        output: {
          outcome: "failed",
          message: a.promptShellHandOff?.length
            ? `the rendered skill is not plain text of a usable size, or it leaves Claude more than ${he} inline shell commands or one longer than ${_e} characters`
            : "the rendered skill is not plain text of a usable size"
        }
      };
    return { summary: "rendered", output: d.data };
  } catch (s) {
    if (Ke(s) || r.aborted) throw s;
    if (!(s instanceof vA)) l(N(s));
    return {
      summary: "render failed",
      output: {
        outcome: "failed",
        message: s instanceof vA ? re(s.message, ye) : "the skill could not be rendered"
      }
    };
  }
}
function j(e, n) {
  return {
    outcome: "missing",
    syncing: op().firstSyncPromise !== null,
    ...(e === "account_skill_off" && { withheld: !0 }),
    ...(n && { fromHostCatalog: n })
  };
}
async function ne(e, n, a, r, s = null) {
  let c = op(),
    d = X(n, a, { unref: !0 }),
    S = (P) =>
      Promise.race([
        P.catch(() => {
          return;
        }),
        d
      ]),
    y = await v5t(e, r, s),
    h = Uw(e);
  if (y === void 0 && nWn(h)) (await S(BEe(h)), a.throwIfAborted(), (y = await v5t(e, r, s)));
  if (y !== void 0 || !c.firstSyncPromise) return y;
  let _ = c.firstSyncPromise;
  if (c.firstRoundSettled) {
    let P = Date.now();
    if (P - c.missingSkillResyncAt >= Ge) {
      c.missingSkillResyncAt = P;
      let C = zOn(r.session, r.storageV5, r.credentials).finally(() => {
        if (c.missingSkillResync === C) c.missingSkillResync = null;
      });
      c.missingSkillResync = C;
    }
    _ = c.missingSkillResync ?? c.syncPromise;
  }
  if (!_) return;
  return (await S(_), a.throwIfAborted(), $pe(), v5t(e, r, s));
}
async function we(e) {
  let n = Uw(e);
  if (!wqt(n) || !JPo()) return;
  let a = op().hostCatalog,
    r = { fromMemory: a.texts.has(n), inLine: a.readingForCalls.size, at: performance.now() },
    s,
    c,
    d = !1;
  try {
    let S = await le(n);
    if ("reason" in S) c = S;
    else {
      let y = fFs(S);
      s = y?.type === "prompt" && y.name === e ? y : void 0;
    }
  } catch (S) {
    ((d = !0), l(N(S)));
  } finally {
    try {
      nt({ served: s, miss: c, threw: d, asked: r });
    } catch (S) {
      l(N(S));
    }
  }
  return s;
}
var tt = new Set(["timed_out", "earlier_work_outstanding", "too_many_reads"]);
function nt({ served: e, miss: n, threw: a, asked: r }) {
  let s = e !== void 0 && C3(e),
    c = {
      from: b("call"),
      named: 1,
      loaded: e === void 0 ? 0 : 1,
      withheld: s ? 1 : 0,
      from_memory: r.fromMemory,
      in_line: r.inLine,
      waited_ms: Math.round(performance.now() - r.at),
      ...(n !== void 0 && { [`mount_miss_${n.reason}`]: 1 }),
      ...(a && { threw: a })
    };
  if (s) f("skill_host_catalog", "all_withheld", c);
  else if (e !== void 0) g("skill_host_catalog", c);
  else m("skill_host_catalog", n !== void 0 && tt.has(n.reason) ? "not_in_time" : "none_loaded", c);
}
function w5t(e) {
  er();
  let n = kL(e);
  if (LA(e)) return n ? "account_skill_off" : "other";
  if (W1e(e)) return "other";
  return cke(e) ? "other" : void 0;
}
async function v5t(e, n, a) {
  let r = Uw(e) !== e,
    s = await eDe(ao(), n.storageV5);
  for (let c of [...s, ...GWe(), ...LJe()])
    if (c.type === "prompt" && c.name === e && (c.loadedFrom === "syncedSkills" || !r) && !$F(c))
      return (await ot(c, a)) ? void 0 : c;
  return;
}
async function ot(e, n) {
  if (n === null || e.loadedFrom !== "syncedSkills" || e.skillRoot === void 0) return !1;
  let a = je(e.skillRoot),
    r = await Yme(ge(a, t0), null),
    s = r === null ? null : Xme(r, QHt(), null);
  if (s === null) return !1;
  let c = _p(fe(e.skillRoot)),
    d = !1;
  for (let S of S3(Q9e(), s.skills)) {
    try {
      if (_p(fe(j8(S.name, a))) !== c) continue;
    } catch {
      continue;
    }
    if (S.updatedAt === sze) {
      d = !0;
      continue;
    }
    return S.updatedAt !== null && Date.parse(S.updatedAt) < Date.parse(n);
  }
  return d;
}
var Ois = "ListPluginCommands",
  Mis = "RenderPluginCommand",
  Dis = "RenderPinnedPluginCommand",
  st = 60000,
  at = p(() =>
    $e([
      KTt(),
      u({
        source: A("claudeai"),
        marketplaceId: o(),
        organizationUuid: o(),
        scope: B(qTt).optional()
      }),
      u({ source: A("pluginDirectory") })
    ])
  ),
  lt = p(() =>
    u({
      commandName: o(),
      filePath: o(),
      baseDir: o(),
      sourceName: o(),
      pluginManifest: IZ(),
      pluginPath: o(),
      provenance: u({
        officiallyAttested: M().optional(),
        marketplaceSource: at().optional(),
        npmResolution: u({ packageName: o(), tarballUrl: o() }).optional(),
        home: o().optional()
      }).optional(),
      isSkill: M(),
      config: u({
        isSkillMode: M(),
        serverAttribution: u({ skillId: o().optional(), pluginId: o().optional() }).optional(),
        metadata: lQo().optional()
      })
    })
  ),
  ut = p(() =>
    u({
      filePath: o(),
      pluginName: o(),
      namespace: T(o()).readonly(),
      sourceName: o(),
      pluginPath: o(),
      pluginManifest: IZ()
    })
  ),
  Ee = p(() =>
    o()
      .refine((e) => it(e) === e && rt(e) !== e)
      .optional()
      .catch(void 0)
  ),
  ze = p(() =>
    u({
      source: lt(),
      text: o(),
      pluginDataDir: Ee(),
      sha256: o()
        .regex(Mb)
        .optional()
        .catch(void 0)
    })
  ),
  yo = p(() =>
    u({
      commands: T(ze()),
      skills: T(ze()),
      agents: T(u({ source: ut(), text: o(), pluginDataDir: Ee() })),
      resynced: M().optional(),
      syncsSessionRefs: M().optional(),
      settingsRan: M().optional(),
      comparesSource: M().optional()
    })
  ),
  Ncr = p(() => T(o().max(64000)).max(1000).nullable().optional().catch(null)),
  mt = p(() =>
    u({
      registeredHooks: me(o(), Ncr())
        .optional()
        .catch(void 0),
      resync: M().optional(),
      waitMs: v()
        .int()
        .positive()
        .optional()
        .catch(void 0),
      hashes: M()
        .optional()
        .catch(void 0),
      dataDirs: M()
        .optional()
        .catch(void 0)
    })
  );
async function His(e, n, a) {
  let r = mt().safeParse(e ?? {}).data,
    s = r?.resync === !0,
    { session: c, storageV5: d, credentials: S } = a.toolUseContext(),
    y = r?.registeredHooks;
  er();
  let h = X(Math.min(Yte(), r?.waitMs ?? 1 / 0), n, { unref: !0 }),
    { resynced: _ } = await zJr(c, S, { resync: s, deadline: h });
  (n.throwIfAborted(), Hd(d, S));
  let P = await Promise.race([KJr(c, d, S), h.then(() => !1)]);
  n.throwIfAborted();
  let [C, k, w] = await Promise.all([Tge(d), kje(d), mr("agents") ? [] : omt(d, S)]),
    x = await fi(d, S),
    z = c.pluginsSync.settingsInstall.loaded;
  await Xsn([...x.enabled, ...(z?.plugins.enabled ?? [])], d).catch(l);
  let O = Me(x, z?.plugins),
    I = await Q([...be(w, x, y), ...(z === null ? [] : be(z.agents, z.plugins, y, O))]),
    D = await Uke(d),
    E = new Set(I.map(({ source: R }) => R.sourceName));
  for (let { source: R } of D.enabled) E.delete(R);
  let L = await Le(
      [...x.enabled, ...(z?.plugins.enabled ?? [])].filter((R) => E.has(R.source)),
      d
    ),
    F = r?.hashes === !0 ? pt : ft,
    Z = (R) => (r?.dataDirs === !0 ? gt(R) : R),
    H = {
      commands: Z(F(await Q([...J(C), ...J(z?.commands ?? [], O)], r?.hashes === !0))),
      skills: Z(F(await Q([...J(k), ...J(z?.skills ?? [], O)]))),
      agents: Z(
        I.filter(({ source: R }) => !tRt(R, E.has(R.sourceName) ? L : D, y?.[Vge(R.pluginPath)]))
      ),
      resynced: _,
      syncsSessionRefs: PO(c),
      settingsRan: P,
      comparesSource: !0
    };
  return {
    summary: `${H.commands.length} commands, ${H.skills.length} skills, ${H.agents.length} agents`,
    output: H
  };
}
async function zJr(e, n, { resync: a, deadline: r }) {
  let s = await Promise.race([
    Unn(e, n).catch(() => !1),
    r.then(() => {
      return;
    })
  ]);
  if (s !== !1 && !(a && s !== void 0)) return { resynced: !1 };
  return {
    resynced:
      (await Promise.race([
        sXe(e, n).then(
          () => !0,
          () => !1
        ),
        r.then(() => !1)
      ])) && e.pluginsSync.lastRoundListed
  };
}
function KJr(e, n, a) {
  if (mr("plugins")) return Promise.resolve(!0);
  let r = e.pluginsSync.settingsInstall;
  return (
    (r.next ??= dt(e, n, a).then(
      () => !0,
      (s) => (l(s), !1)
    )),
    r.next
  );
}
async function dt(e, n, a) {
  let r = e.pluginsSync.settingsInstall;
  (await r.current,
    (r.current = r.next),
    (r.next = null),
    await Promise.allSettled([KW()]),
    i.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL"),
    await Promise.allSettled([Jit(void 0, n, a), e.pluginsSync.firstSyncPromise]),
    Hd(n, a));
  let s = sv(n, a);
  (await s, Hd(n, a), (Ie().pluginLoadCacheOnly = s));
  let c = Promise.all([Tge(n), kje(n), mr("agents") ? [] : omt(n, a), s]);
  Hd(n, a);
  let [d, S, y, h] = await c;
  r.loaded = { commands: d, skills: S, agents: y, plugins: h };
}
var ct = p(() =>
    u({
      name: o().min(1).max(1024),
      listedAs: B(["command", "skill"]),
      args: o().max(U),
      readOnly: M(),
      sessionRules: G(),
      sourceName: o().max(1024).optional(),
      registeredHooks: Ncr(),
      expectSha256: o().regex(Mb).optional()
    })
  ),
  Co = p(() =>
    Gr("outcome", [
      K().extend({ sourceName: o().optional() }),
      se().extend({ sourceName: o().optional() }),
      u({ outcome: A("missing") }),
      u({ outcome: A("changed") }),
      u({ outcome: A("guarded") })
    ])
  );
async function VJr(e, n, a) {
  let {
      name: r,
      listedAs: s,
      args: c,
      readOnly: d,
      sessionRules: S,
      sourceName: y,
      registeredHooks: h,
      expectSha256: _
    } = ct().parse(e),
    P = a.toolUseContext(),
    C = await q(r, s, P);
  if (C === void 0) {
    let E = X(Yte(), n, { unref: !0 });
    if (
      (await qJr(a, n, async () => ((C = await q(r, s, P)), C !== void 0)),
      (C ??= await q(r, s, P)),
      C === void 0)
    ) {
      let L = P.session.pluginsSync.settingsInstall;
      (await Promise.race([L.next ?? L.current, E]), n.throwIfAborted(), (C = await q(r, s, P)));
    }
  }
  let k = C?.command,
    w = !1;
  if (k !== void 0 && _ !== void 0) {
    let [E] =
        k.pluginSource === void 0
          ? []
          : await Q([k.pluginSource], !0, (F) => {
              w = !Us(F);
            }),
      L = E !== void 0 && Re(E.source, E.text) === _ ? _Ds(E.source, E.text) : null;
    k = L?.type === "prompt" ? L : void 0;
  }
  let x = await Y(P, d, S, a.launchPermissionContext, e);
  er();
  let z = C === void 0 ? void 0 : await Ege(C.command);
  if (
    (er(),
    C === void 0 ||
      Oe(C.command) ||
      (y ?? C.command.pluginSource?.sourceName) !== C.command.pluginSource?.sourceName ||
      (Vs(C.command.pluginSource?.sourceName ?? "") === ni && ure()))
  )
    return { summary: "no such plugin entry", output: { outcome: "missing" } };
  if (kge(z))
    return (ane(C.command, z), { summary: "no such plugin entry", output: { outcome: "missing" } });
  let { judgedBy: O } = C;
  if (w)
    return {
      summary: "entry not read",
      output: {
        outcome: "failed",
        message: "its file could not be read where its plugin is kept, so it was not run",
        sourceName: C.command.pluginSource?.sourceName
      }
    };
  if (k === void 0) return { summary: "changed since listed", output: { outcome: "changed" } };
  if (k.hooks !== void 0 || O.some((E) => tRt(k.pluginSource, E, h)))
    return { summary: "guarded entry", output: { outcome: "guarded" } };
  let { summary: I, output: D } = await W(k, c, x, n);
  return { summary: I, output: { ...D, sourceName: k.pluginSource?.sourceName } };
}
function Re(e, n) {
  let { serverAttribution: a, ...r } = e.config;
  return et(et(n) + tXe({ ...e, config: r }));
}
async function q(e, n, { session: a, storageV5: r, credentials: s }) {
  let c = Ae(await (n === "skill" ? kje : Tge)(r), e),
    d = a.pluginsSync.settingsInstall.loaded,
    S = c ? await fi(r, s) : d?.plugins;
  if (S === void 0) return;
  er();
  let y = await Uke(r),
    h = Me(y, S),
    _ = c ?? Ae((n === "skill" ? d?.skills : d?.commands) ?? [], e, h),
    P = _?.pluginSource?.sourceName ?? "",
    C = y.enabled.some((k) => k.source === P);
  if (_ === void 0 || !(C || h.has(P))) return;
  return {
    command: _,
    judgedBy: [
      S,
      C
        ? y
        : await Le(
            S.enabled.filter((k) => k.source === P),
            r
          )
    ]
  };
}
async function Le(e, n) {
  let a = await Promise.allSettled(
    e.map(({ path: r, source: s, name: c }) => $le(r, s, !0, c, !0, n, void 0, { noTelemetry: !0 }))
  );
  return {
    enabled: a.flatMap((r) => (r.status === "fulfilled" ? [r.value.plugin] : [])),
    errors: a.flatMap((r) => (r.status === "fulfilled" ? r.value.errors : []))
  };
}
function Ae(e, n, a) {
  for (let r of e)
    if (
      r.type === "prompt" &&
      r.name === n &&
      r.pluginSource !== void 0 &&
      !vp(r.pluginSource.sourceName) &&
      a?.has(r.pluginSource.sourceName) !== !1
    )
      return r;
  return;
}
async function qJr(e, n, a) {
  let { session: r, storageV5: s, credentials: c } = e.toolUseContext(),
    d = r.pluginsSync.missingEntry,
    S = X(Yte(), n, { unref: !0 }).then(() => {
      return;
    }),
    y = await Promise.race([Unn(r, c).catch(() => !1), S]);
  if ((n.throwIfAborted(), y === void 0)) return !1;
  let h = () => {
    if (d.resync === null && !d.swept) ((d.swept = !0), Hd(s, c));
  };
  if ((h(), y && (await a()))) return !1;
  if ((n.throwIfAborted(), d.resync === null && Date.now() - d.resyncAt >= st)) {
    d.resyncAt = Date.now();
    let P = sXe(r, c)
      .catch(() => !1)
      .finally(() => {
        ((d.resync = null), (d.swept = !1));
      });
    d.resync = P;
  }
  let _ = d.resync;
  if (_ !== null) (await Promise.race([_, S]), n.throwIfAborted());
  return (h(), _ !== null && d.resync !== _);
}
function Me({ enabled: e, errors: n }, a) {
  let r = new Set(e.flatMap(Fbe).map(or)),
    s = new Set();
  for (let d of n) if (d.type === "plugin-cache-miss") s.add(d.source);
  let c = new Set();
  for (let d of a?.enabled ?? []) if (s.has(d.source) && !r.has(or(d.name))) c.add(d.source);
  return c;
}
function J(e, n) {
  return e.flatMap((a) =>
    a.type === "prompt" &&
    a.pluginSource !== void 0 &&
    !vp(a.pluginSource.sourceName) &&
    n?.has(a.pluginSource.sourceName) !== !1 &&
    !Oe(a)
      ? [a.pluginSource]
      : []
  );
}
function Oe(e) {
  return e.type === "prompt" && e.pluginInfo?.followsSyncedSkillState === !0 && M4(e);
}
function be(e, n, a, r) {
  return e.flatMap((s) =>
    s.source === "plugin" &&
    s.pluginSource !== void 0 &&
    !vp(s.pluginSource.sourceName) &&
    r?.has(s.pluginSource.sourceName) !== !1 &&
    !tRt(s.pluginSource, n, a?.[Vge(s.pluginSource.pluginPath)])
      ? [s.pluginSource]
      : []
  );
}
function ft(e) {
  return e;
}
function pt(e) {
  return e.map((n) => ({ ...n, sha256: Re(n.source, n.text) }));
}
function gt(e) {
  return e.map((n) => ({ ...n, pluginDataDir: $p(n.source.sourceName) }));
}
async function Q(e, n = !1, a) {
  let r = ie();
  return (
    await Promise.all(
      e.map(async (c) => {
        let d = c.config?.metadata?.content,
          y =
            (n && d === "" ? void 0 : d) ??
            (await Qk(r, c.filePath, Eje).catch((h) => (a?.(h), null)));
        if (y === null)
          return (
            t(`ListPluginCommands: ${c.filePath} could not be read again`, { level: "warn" }),
            []
          );
        return [{ source: c, text: y }];
      })
    )
  ).flat();
}
function tRt(e, { enabled: n, errors: a }, r) {
  let s = n.find((S) => S.source === e?.sourceName);
  if (s === void 0 || s.modulePath !== void 0 || r === null) return !0;
  let c = s.hooksConfig === void 0 ? s.manifest.hooks === void 0 && [] : St(s.hooksConfig),
    d = r?.toSorted() ?? [];
  return (
    !c ||
    !wn(c, d) ||
    (c.length > 0 && (Vs(s.source) !== ni || s.path !== e?.pluginPath)) ||
    a.some((S) => "plugin" in S && S.plugin === s.name)
  );
}
function St(e) {
  let n = [];
  for (let [a, r] of Object.entries(e))
    for (let { matcher: s, hooks: c } of r ?? [])
      for (let d of c) {
        if (d.type !== "command") return;
        n.push(
          tXe([a, s ?? "", xo(d, d.onFailure === "block" ? ["cloud"] : ["cloud", "onFailure"])])
        );
      }
  return n.sort();
}
export {
  kis,
  qYe,
  Tis,
  Ais,
  Cis,
  Ris,
  xis,
  Pis,
  GJr,
  Iis,
  w5t,
  v5t,
  Ois,
  Mis,
  Dis,
  Ncr,
  His,
  zJr,
  KJr,
  VJr,
  qJr,
  tRt
};

//# sourceMappingURL=chunk-myze9f54.js.map
