// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { Zs } from "./chunk-4cgvah10.js";
import { p } from "./chunk-qmkm2x59.js";
import "./chunk-a16y5hcz.js";
import { Hli } from "./chunk-5rw2zfa0.js";
import "./chunk-brszmkb3.js";
import "./chunk-jazcqqqr.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-45h8cn90.js";
import "./chunk-vw9e882a.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-qywdxehb.js";
import "./chunk-6xjawpfq.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-4kxy1036.js";
import "./chunk-4nzy53ma.js";
import "./chunk-cjnzngfc.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-xe386mry.js";
import "./chunk-afxq0vrk.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-rhk37je5.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import { pt, Sa } from "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c3npf81n.js";
import "./chunk-c57c64b0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-ya7n419k.js";
import { M, Ue } from "./chunk-0bqrj5ah.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var u = null,
  l = p(() => {
    let r = { autoMemoryEnabled: M().optional(), autoDreamEnabled: M().optional() };
    return Ue(r).refine((a) => Object.values(a).some((o) => o !== void 0), {
      error: `it sets none of ${new Intl.ListFormat("en", { type: "disjunction" }).format(Object.keys(r))}`
    });
  });
async function S(r, a) {
  let o = l().safeParse(r);
  if (!o.success) {
    let t = o.error.issues[0];
    return {
      ok: !1,
      error: t
        ? t.path.length > 0
          ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).`
          : `Not a memory settings edit: ${t.message}.`
        : "Not a memory settings edit."
    };
  }
  let e = o.data,
    d = e.autoDreamEnabled === !0 && pt().autoDreamEnabled === void 0,
    i = e,
    n,
    s = Hli(e.accountMemory),
    m = await Sa(
      "userSettings",
      (t) => {
        if (((n = s === void 0 ? void 0 : u?.accountSettingRaiseRefusal(t, s)), n !== void 0))
          return null;
        return (
          (i = {
            ...e,
            ...(e.autoMemoryEnabled !== void 0 &&
              e.accountMemory === void 0 &&
              u?.accountKeyKeptWithAutoMemory(t, e.autoMemoryEnabled))
          }),
          i
        );
      },
      void 0,
      a
    );
  if (m.error) return { ok: !1, error: m.error.message };
  if (n !== void 0) return { ok: !1, error: n };
  if (typeof e.autoMemoryEnabled === "boolean")
    await Zs("tengu_auto_memory_toggled", { enabled: e.autoMemoryEnabled });
  if (typeof e.autoDreamEnabled === "boolean")
    await Zs("tengu_auto_dream_toggled", { enabled: e.autoDreamEnabled, is_first_enable: d });
  return { ok: !0, written: i };
}
export { S as runMemorySettingsEdit };

//# sourceMappingURL=chunk-kqkn29pt.js.map
