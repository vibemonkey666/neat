// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, L, Jf, Gc, J } from "./chunk-wrtp8qz8.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { d, Fs } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { Le } from "./chunk-jazcqqqr.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { wl, Sn, On } from "./chunk-5rw2zfa0.js";
import { a } from "./chunk-4cgvah10.js";
import { We } from "./chunk-pgnjjhxv.js";
import { Mt } from "./chunk-adv24f35.js";
import { jTt, d$e } from "./chunk-d54avynm.js";
import { Pt } from "./chunk-xe386mry.js";
import { Fm, BO, gSt, VG, Ou } from "./chunk-p56qmwgb.js";
import { Due } from "./chunk-ajtyjx88.js";
import { vBt } from "./chunk-xt7fs806.js";
import { I4, AK, zF, LMe, Ic, Rd, Pk, tY, Qg, Mf, Ene, fi, O_, LDr } from "./chunk-j0tbz6ra.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { E2e } from "./chunk-bqffg6mb.js";
import { TBt, lU, wd, EY } from "./chunk-w35wpr7b.js";
import { A7e } from "./chunk-tsf65jkw.js";
import { g8 } from "./chunk-783pymr7.js";
import { Zne, p7e } from "./chunk-d2975tv6.js";
import { Coo } from "./chunk-7xfqdpcc.js";
import { ops } from "./chunk-zsyd2kjt.js";
import { yme, xho, Pho, Iho } from "./chunk-wapyem7a.js";
import { ECr } from "./chunk-bejrkm5n.js";
import { hls } from "./chunk-705btg35.js";
import { Iat } from "./chunk-nsach619.js";
import { bae } from "./chunk-y04rbgmk.js";
import { Iy } from "./chunk-nsr849np.js";
import { z } from "./chunk-p197ae0z.js";
import { stat as H, writeFile as G } from "fs/promises";
import { join as O } from "path";
var I = 600000;
function gls(n) {
  let o = Ie();
  if (((o.autoUpdateListener = n), o.pendingAutoUpdateNotification !== null))
    (n(
      o.pendingAutoUpdateNotification.updated,
      o.pendingAutoUpdateNotification.blocked,
      o.pendingAutoUpdateNotification.reresolved,
      o.pendingAutoUpdateNotification.announce
    ),
      (o.pendingAutoUpdateNotification = null));
  return () => {
    o.autoUpdateListener = null;
  };
}
async function B(n) {
  let o = await Ic(n),
    m = zF(),
    r = new Set();
  for (let [s, i] of Object.entries(o)) {
    if (!Ou(i.source)) continue;
    if (I4(i.source) && !vBt()) continue;
    if (d$e(s, i, LMe(s, m))) r.add(s.toLowerCase());
  }
  if (!r.has(Sn) && !Object.hasOwn(o, Sn) && AK() && Ou({ source: "pluginDirectory" })) {
    if (
      Object.keys((z() && n !== void 0 ? await Mf(n) : Qg()).plugins).some((i) =>
        i.endsWith(`@${Sn}`)
      )
    )
      r.add(Sn);
  }
  return r;
}
async function D(n, o, m, r, s) {
  let i = !1,
    u = !1,
    C = null,
    h = null,
    _ = !1,
    k = !1,
    S = !1,
    y = !1;
  for (let { scope: f } of o)
    try {
      let e = await Iat(n, f, r ?? {}, s);
      switch (e.outcome) {
        case "updated":
          ((i = !0), t(`Plugin autoupdate: updated ${n} from ${e.oldVersion} to ${e.newVersion}`));
          break;
        case "skipped": {
          if ((t(`Plugin autoupdate: ${n} ${e.message}`), e.skipReason === "entry_helper_deferred"))
            h = {
              type: "autoupdate-deferred-entry-helper",
              source: n,
              plugin: On(n).name,
              message: e.message
            };
          else if (e.blockedBy && e.blockedBy.length > 0) {
            let g = e.blockedBy.map((P) => On(P).name),
              R = e.blockedBy.filter((P) => m.has(P)).map((P) => On(P).name);
            h = {
              type: "autoupdate-blocked-by-pinner",
              source: n,
              plugin: On(n).name,
              heldAt: e.oldVersion,
              blockedBy: g,
              disabledPinners: R
            };
          }
          break;
        }
        case "failed":
          if (
            ((_ = e.failureCode === "not_found" || e.failureCode === "not_cached"),
            (k ||= e.failureCode === "directory_identity_changed"),
            (S ||= e.failureCode === "directory_listing_not_installable"),
            (y ||=
              e.failureCode === "directory_unavailable" ||
              e.failureCode === "marketplace_policy_blocked" ||
              e.failureCode === "directory_binding_unreadable"),
            e.failureCode === "command_source_skipped")
          )
            C = n;
          else if (
            e.failureCode === "entry_helper_disabled_by_policy" ||
            e.failureCode === "entry_helper_remote_policy_unconsented" ||
            e.failureCode === "entry_helper_organization_unanswered" ||
            e.failureCode === "plugin_policy_blocked" ||
            (e.failureCode === "command_source_refused" && (BO() || !gSt()))
          )
            h = {
              type: "autoupdate-disabled-by-policy",
              source: n,
              plugin: On(n).name,
              message: e.message
            };
          else if (e.failureCode === "entry_helper_not_inlined")
            ((h = { type: "generic-error", source: n, plugin: On(n).name, error: e.message }),
              (u = !0));
          else if (e.failureCode !== "command_source_inactive") u = !0;
          t(`Plugin autoupdate: failed to update ${n}: ${e.message}`, { level: "warn" });
          break;
        case "up_to_date":
          break;
      }
    } catch (e) {
      ((u = !0), t(`Plugin autoupdate: error updating ${n}: ${d(e)}`, { level: "warn" }));
    }
  let p = u && !_ && !k && !S && !y && h === null && n.endsWith(`@${Sn}`);
  if (p)
    h = {
      type: "generic-error",
      source: n,
      plugin: On(n).name,
      error:
        'The Anthropic Directory lists a different commit, but the background update failed, so this plugin is still on the old one. Choose "Update now" in /plugin \u2192 Installed to retry and see the error'
    };
  return {
    updated: i ? n : null,
    blocked: h,
    failed: u,
    directoryStuck: p,
    directoryIdentityChanged: k,
    commandSourceSkipped: C
  };
}
async function Q7r(n, o = new Set(), { skipCommandSources: m = !1 } = {}, r) {
  let s = z() && r !== void 0 ? await Mf(r) : Qg(),
    i = Object.keys(s.plugins);
  if (i.length === 0)
    return {
      updated: [],
      blocked: [],
      updateFailedCount: 0,
      commandSourceSkipped: [],
      directory: { updated: 0, updateFailed: 0, stuck: 0, identityChanged: 0 }
    };
  let { disabled: u } = await fi(r),
    C = new Set(u.map((f) => f.source));
  if (n.has(Sn)) await p7e(Object.entries(s.plugins));
  let h = await Promise.allSettled(
      i.map(async (f) => {
        let { marketplace: e } = On(f);
        if (!e || !n.has(e.toLowerCase())) return null;
        if (o.has(f)) return null;
        let g = s.plugins[f];
        if (!g || g.length === 0) return null;
        let R = Ene(g);
        if (R.length === 0) return null;
        return D(f, R, C, m ? { skipCommandSources: !0 } : void 0, r);
      })
    ),
    _ = [],
    k = [],
    S = [],
    y = 0,
    p = { updated: 0, updateFailed: 0, stuck: 0, identityChanged: 0 };
  for (let [f, e] of h.entries()) {
    if (e.status !== "fulfilled" || e.value === null) continue;
    let g = Zne(i[f] ?? "");
    if (e.value.updated !== null) {
      if ((_.push(e.value.updated), g)) p.updated++;
    }
    if (e.value.blocked !== null) k.push(e.value.blocked);
    if (e.value.failed) {
      if ((y++, g)) p.updateFailed++;
    }
    if (e.value.directoryStuck) p.stuck++;
    if (e.value.directoryIdentityChanged) p.identityChanged++;
    if (e.value.commandSourceSkipped !== null) S.push(e.value.commandSourceSkipped);
  }
  return { updated: _, blocked: k, updateFailedCount: y, commandSourceSkipped: S, directory: p };
}
async function x(n) {
  let o = {
      attemptedCount: 0,
      commandSourced: new Set(),
      updated: [],
      blocked: [],
      failedCount: 0
    },
    m = BO(),
    r = !TBt();
  if (m || r)
    t(
      m
        ? `Plugin autoupdate: command-source refresh ${Iy() === "unanswered" ? "held for the organization's settings, not yet read" : "disabled by managed settings"} (still excluding command-sourced plugins from the regular pass)`
        : "Plugin autoupdate: command-source refresh disabled by tengu_plugin_command_source_refresh (still excluding command-sourced plugins from the regular pass)"
    );
  try {
    let s = z() && n !== void 0 ? await Mf(n) : Qg(),
      i = new Map();
    for (let [_, k] of Object.entries(s.plugins)) {
      let S = Ene(k ?? []),
        { name: y, marketplace: p } = On(_);
      if (S.length === 0 || !y || !p) continue;
      let f = i.get(p) ?? [];
      (f.push({ pluginId: _, name: y, installations: S }), i.set(p, f));
    }
    let u,
      C = new Set(),
      h = i.size > 0 ? await Rd(n) : {};
    for (let [_, k] of i) {
      let S = h[_];
      if (VG(S?.source)) {
        for (let { pluginId: p, installations: f } of k)
          if (f.some((e) => e.sourceCommand !== void 0)) o.commandSourced.add(p);
        continue;
      }
      let y = await Pk(_, n);
      if (!y) continue;
      for (let { pluginId: p, name: f, installations: e } of k) {
        let g = y.plugins.find((w) => w.name === f);
        if (!g || typeof g.source === "string" || g.source.source !== "command") continue;
        if ((o.commandSourced.add(p), m || r)) continue;
        if (!u)
          ((u = new Set(await A7e())), (C = new Set((await fi(n)).disabled.map((w) => w.source))));
        if (!u.has(p) || Fm(p)) {
          t(`Plugin autoupdate: not re-resolving ${p} (disabled or blocked by policy)`);
          continue;
        }
        let R = lU(g.source),
          P = e.filter((w) => w.sourceCommand !== R);
        if (P.length > 0) {
          let w = P.every((v) => v.sourceCommand === void 0),
            T = L(P.map((v) => v.scope))
              .map((v) => wl("plugin update", p, `--scope ${v}`))
              .filter((v) => v !== null)
              .map((v) => `\`${v}\``);
          (t(
            `Plugin autoupdate: not re-resolving ${p}: marketplace command differs from the accepted one`,
            { level: "warn" }
          ),
            o.blocked.push({
              type: "generic-error",
              source: p,
              plugin: f,
              error:
                (w
                  ? `${Mt(f, 200)}'s marketplace entry now installs it by running a command`
                  : `${Mt(f, 200)}'s marketplace entry changed the command it runs`) +
                ` (\`${Mt(g.source.command, jTt)}${g.source.mode === "link" ? " [mode: link]" : ""}\`). It was not re-run in the background; ${T.length > 0 ? `run ${T.join(" and ")}` : "an explicit per-scope plugin update is needed"} to review and accept it.`
            }));
        }
        let U = e.filter((w) => w.sourceCommand === R);
        if (U.length === 0) continue;
        (o.attemptedCount++, t(`Plugin autoupdate: re-resolving command-sourced plugin ${p}`));
        let E = await D(p, U, C, { skipMarketplaceRefresh: !0 }, n);
        if (E.updated !== null) o.updated.push(E.updated);
        if (E.blocked !== null) o.blocked.push(E.blocked);
        if (E.failed) o.failedCount++;
      }
    }
  } catch (s) {
    t(`Plugin autoupdate: command-source refresh failed: ${d(s)}`, { level: "warn" });
  }
  return o;
}
function ifr(n, o, m = [], { announce: r = !0 } = {}) {
  if (n.length === 0 && o.length === 0) return;
  let s = Ie();
  if (s.autoUpdateListener) s.autoUpdateListener(n, o, m, r);
  else {
    let i = s.pendingAutoUpdateNotification;
    s.pendingAutoUpdateNotification = {
      updated: L([...(i?.updated ?? []), ...n]),
      blocked: [...(i?.blocked ?? []), ...o],
      reresolved: L([...(i?.reresolved ?? []), ...m]),
      announce: (i?.announce ?? !1) || r
    };
  }
}
function j() {
  return { attemptedCount: 0, commandSourced: new Set(), updated: [], blocked: [], failedCount: 0 };
}
function afr(n) {
  let o = Ie();
  return (
    (o.commandSourceReresolve ??= (async () => {
      if (Pt()) return j();
      if (Iy() === "unanswered") await EY.wait?.();
      let m = Iy() === "unanswered",
        r = await x(n);
      if (m) o.commandSourceReresolve = null;
      if (m && r.commandSourced.size > 0)
        ((o.organizationAsk.isCommandHeld = !0),
          (o.organizationAsk.heldReresolve = () => afr(n).then(() => {})));
      if (r.attemptedCount > 0) E2e();
      try {
        ifr(r.updated, r.blocked, r.updated);
      } catch (s) {
        l(s);
      }
      return r;
    })()),
    o.commandSourceReresolve
  );
}
function M(n) {
  return (async () => {
    let o = await afr(n),
      m = Date.now(),
      r = {
        marketplaces_refreshed: 0,
        marketplace_refresh_failed: 0,
        marketplace_refresh_policy_skipped: 0,
        plugins_updated: 0,
        plugin_update_failed: 0,
        plugins_blocked_by_pin: 0,
        plugins_helper_deferred: 0,
        plugins_policy_blocked: 0,
        command_plugins_refreshed: o.attemptedCount,
        command_plugin_refresh_failed: o.failedCount
      },
      s = {};
    s = {
      directory_updated: 0,
      directory_update_failed: 0,
      directory_update_stuck: 0,
      directory_identity_changed: 0
    };
    let i = () => {
      if (o.attemptedCount > 0 || o.failedCount > 0)
        a("tengu_plugin_autoupdate_pass", {
          outcome: b("skipped"),
          ...r,
          ...s,
          duration_ms: Date.now() - m
        });
    };
    if (Due()) {
      (t("Plugin autoupdate: skipped (auto-updater disabled)"), i());
      return;
    }
    try {
      let u = await B(n);
      if (u.size === 0) {
        i();
        return;
      }
      let C = Math.floor(Math.random() * I);
      (await X(C, void 0, { unref: !0 }), (m = Date.now()));
      let h = await Promise.allSettled(
        Array.from(u).map(async (e) => {
          try {
            return (await tY(e, n, void 0, { isBackground: !0 }), "refreshed");
          } catch (g) {
            if (g instanceof wd)
              return (
                t(`Plugin autoupdate: marketplace ${e} not refreshed (managed policy): ${d(g)}`),
                "policy"
              );
            return (
              t(`Plugin autoupdate: failed to refresh marketplace ${e}: ${d(g)}`, {
                level: "warn"
              }),
              "failed"
            );
          }
        })
      );
      ((r.marketplace_refresh_failed = F(
        h,
        (e) => e.status === "fulfilled" && e.value === "failed"
      )),
        (r.marketplace_refresh_policy_skipped = F(
          h,
          (e) => e.status === "fulfilled" && e.value === "policy"
        )),
        (r.marketplaces_refreshed =
          u.size - r.marketplace_refresh_failed - r.marketplace_refresh_policy_skipped),
        t("Plugin autoupdate: checking installed plugins"));
      let {
        updated: _,
        blocked: k,
        updateFailedCount: S,
        directory: y
      } = await Q7r(u, o.commandSourced, { skipCommandSources: !0 }, n);
      if (
        ((r.plugins_updated = _.length),
        (r.plugin_update_failed = S),
        (s = {
          directory_updated: y.updated,
          directory_update_failed: y.updateFailed,
          directory_update_stuck: y.stuck,
          directory_identity_changed: y.identityChanged
        }),
        (r.plugins_blocked_by_pin = F(k, (e) => e.type === "autoupdate-blocked-by-pinner")),
        (r.plugins_helper_deferred = F(k, (e) => e.type === "autoupdate-deferred-entry-helper")),
        (r.plugins_policy_blocked = F(k, (e) => e.type === "autoupdate-disabled-by-policy")),
        _.length > 0)
      )
        O_("autoupdate dep-resolution");
      let { errors: p } = await fi(n),
        f = await bae(
          p.filter((e) => {
            if (e.type !== "dependency-unsatisfied") return !1;
            let g = On(e.source).marketplace;
            return g !== void 0 && u.has(g.toLowerCase());
          }),
          n
        );
      if (f.installed.length > 0)
        (t(
          `Plugin autoupdate: resolved ${f.installed.length} missing plugin dependencies: ${f.installed.join(", ")}`
        ),
          _.push(...f.installed));
      (ifr(_, k),
        a("tengu_plugin_autoupdate_pass", {
          outcome:
            r.marketplace_refresh_failed > 0 || r.plugin_update_failed > 0 ? b("partial") : b("ok"),
          ...r,
          ...s,
          duration_ms: Date.now() - m
        }));
    } catch (u) {
      (t(`Plugin autoupdate: failed: ${d(u)}`, { level: "error" }),
        a("tengu_plugin_autoupdate_pass", {
          outcome: b("failed"),
          error_kind: c(g8(u)),
          ...r,
          ...s,
          duration_ms: Date.now() - m
        }));
    }
  })();
}
var N = 86400000,
  Z7r = 600000,
  $mi = 5000,
  Fmi = 3600000;
async function Umi(n) {
  if (z() && n !== void 0) {
    let o = await n.statMeta(We.state("last-cleanup"));
    return o.ok && Date.now() - o.value.mtimeMs < N;
  }
  try {
    let o = await H(O(Le(), ".last-cleanup"));
    return Date.now() - o.mtimeMs < N;
  } catch {
    return !1;
  }
}
async function eZr(n, o) {
  if (J()) return;
  if (!n.backgroundHousekeeping.claim()) return;
  if ((Coo(n), ops(n), M(o), Gc())) (hls(o), LDr(o), setInterval(LDr, Fmi, o).unref());
  let m = "sentinel-unchecked";
  async function r() {
    if (Gc() && Jf() > Date.now() - 60000) {
      setTimeout(s, Z7r).unref();
      return;
    }
    if (m !== "done") {
      if (m === "sentinel-unchecked") {
        if (((m = "sweep-due"), await Umi(o))) {
          setTimeout(s, Z7r).unref();
          return;
        }
      }
      m = "done";
      let i = (await Iho(o)) !== "remote_settings_unknowable";
      if (z() && o !== void 0) await Pho(Le(), n.backgroundHousekeeping);
      if (i && z() && o !== void 0) {
        await xho(o);
        let u = await o.write(We.state("last-cleanup"), new Date().toISOString(), {
          publishDiscipline: "inPlace"
        });
        if (!u.ok) t(`.last-cleanup write failed: ${u.error.code}`, { level: "error" });
      } else if (i)
        await G(O(Le(), ".last-cleanup"), new Date().toISOString()).catch((u) =>
          Fs(u) ? t(`.last-cleanup write failed: ${u.code} ${u.message}`, { level: "error" }) : l(u)
        );
    }
    if (Gc() && Jf() > Date.now() - 60000) {
      setTimeout(s, Z7r).unref();
      return;
    }
    await ECr();
  }
  function s() {
    return r().catch((i) =>
      yme(i) ? t(`background housekeeping failed: ${i.message}`, { level: "error" }) : l(i)
    );
  }
  setTimeout(s, $mi).unref();
}
export { gls, Q7r, ifr, afr, Z7r, $mi, Fmi, Umi, eZr };

//# sourceMappingURL=chunk-k8dfd25a.js.map
