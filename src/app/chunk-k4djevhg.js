// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { _, te, ie, t } from "./chunk-4kxznmzw.js";
import { CAt } from "./chunk-arw2bgak.js";
import { Tir } from "./chunk-5rw2zfa0.js";
import { VTt } from "./chunk-d54avynm.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import {
  kJ,
  Jjn,
  qvo,
  vIs,
  EIs,
  fRr,
  TIs,
  AIs,
  uJe,
  zF,
  Rd,
  wKn,
  Kge,
  vne,
  qge,
  fi,
  O_,
  yJe
} from "./chunk-j0tbz6ra.js";
import { CRn, RRn } from "./chunk-63tnj3vh.js";
import { z } from "./chunk-p197ae0z.js";
import { readFile as P } from "fs/promises";
import { join as h } from "path";
async function M() {
  try {
    let n = await P(qvo(), "utf-8"),
      e = VTt().safeParse(te(n));
    if (!e.success)
      return (
        t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, { level: "error" }),
        {}
      );
    return e.data;
  } catch {
    return {};
  }
}
async function S(n) {
  await fRr(qvo(), _(n, null, 2));
}
async function F(n, e) {
  let s = Jjn();
  if (!s) return;
  let r = await I(e);
  if (r !== null) {
    let o = TIs(n);
    await fRr(h(s, o), r);
  }
}
async function I(n) {
  let e = [h(n, ".claude-plugin", "marketplace.json"), h(n, "marketplace.json"), n];
  for (let s of e)
    try {
      return await P(s, "utf-8");
    } catch {}
  return null;
}
async function w(n) {
  let e = await Rd(n),
    s = Object.entries(Tir(e)).filter(([i, c]) => Kge(i, c) === null && !vne(i, c));
  for (let [i, c] of s) {
    if (!c.installLocation) continue;
    try {
      await F(i, c.installLocation);
    } catch (f) {
      t(`Failed to save marketplace JSON for ${i}: ${f}`);
    }
  }
  let o = { ...(await M()), ...Object.fromEntries(s) };
  await S(o);
}
function Jit(n, e, s) {
  let r = Ie(),
    o = (r.headlessInstallPass ?? Promise.resolve()).then(() => v(n, e, s));
  return (
    (r.headlessInstallPass = o.then(
      () => {
        return;
      },
      () => {
        return;
      }
    )),
    o
  );
}
async function v(n, e, s) {
  let r = kJ();
  t(`installPluginsForHeadless: starting${r ? " (zip cache mode)" : ""}`);
  let o = await wKn(),
    i,
    c = () => i !== void 0 && Ie().pluginLoadCacheOnly === i;
  if (o)
    (uJe(),
      O_("headlessPluginInstall: seed marketplaces registered"),
      (i = yJe(e, "headlessPluginInstall")));
  if (r) (await ie().mkdir(vIs()), await ie().mkdir(EIs()));
  let f = Object.keys(zF()).length,
    g = { marketplaces_installed: 0, delisted_count: 0 },
    p = o;
  try {
    if (f === 0) t("installPluginsForHeadless: no marketplaces declared");
    else {
      let u = await CAt(
        "headless_marketplace_reconcile",
        () =>
          CRn({
            skip: r ? (l, C) => !AIs(C) : void 0,
            onProgress: (l) => {
              if (l.type === "installed")
                (n?.({ status: "installed", name: l.name }),
                  t(`installPluginsForHeadless: installed marketplace ${l.name}`));
              else if (l.type === "failed")
                (n?.({ status: "failed", name: l.name, error: l.error }),
                  t(
                    `installPluginsForHeadless: failed to install marketplace ${l.name}: ${l.error}`
                  ));
            },
            storageV5: e
          }),
        (l) => ({
          installed_count: l.installed.length,
          updated_count: l.updated.length,
          failed_count: l.failed.length,
          skipped_count: l.skipped.length
        })
      );
      if (u.skipped.length > 0)
        t(
          `installPluginsForHeadless: skipped ${u.skipped.length} marketplace(s) unsupported by zip cache: ${u.skipped.join(", ")}`
        );
      let k = u.installed.length + u.updated.length;
      if (k > 0)
        (uJe(),
          O_("headlessPluginInstall: marketplaces reconciled"),
          (i = yJe(e, "headlessPluginInstall")),
          (p = !0));
      g.marketplaces_installed = k;
    }
    if (r) ((i = void 0), await w(e));
    let m = await RRn(e);
    if (((g.delisted_count = m.length), m.length > 0)) ((p = !0), (i = void 0));
    if (p && !c()) (O_("headlessPluginInstall: plugins changed"), yJe(e, "headlessPluginInstall"));
    return (y(e, s), p);
  } catch (m) {
    if ((t(`installPluginsForHeadless: failed: ${d(m)}`, { level: "error" }), p && !c())) {
      if (z() && e !== void 0) O_("headlessPluginInstall: pass failed after a change");
      yJe(e, "headlessPluginInstall");
    }
    return (y(e, s), !1);
  } finally {
    a("tengu_headless_plugin_install", g);
  }
}
function y(n, e) {
  if (qge(e)) fi(n, e).catch(() => {});
}
export { Jit };

//# sourceMappingURL=chunk-k4djevhg.js.map
