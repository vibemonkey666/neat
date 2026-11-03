// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { Nc } from "./chunk-4nzy53ma.js";
import { Lu, rot } from "./chunk-5rw2zfa0.js";
import { ue } from "./chunk-ajtyjx88.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { _I, pe } from "./chunk-7c3thgax.js";
import { z7n } from "./chunk-h2tyaevk.js";
import { sd } from "./chunk-6jbh8yja.js";
function yct() {
  if (i.NODE_EXTRA_CA_CERTS) return;
  let o = g();
  if (o)
    ((process.env.NODE_EXTRA_CA_CERTS = o),
      t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`));
}
function g() {
  try {
    if (i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && !Nc() && rot("NODE_EXTRA_CA_CERTS")) {
      t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");
      return;
    }
    if (Lu()) return;
    if (_I() || sd()) return;
    let o = ue(),
      e = z7n(o?.env, "globalConfig"),
      s = Qt("userSettings") ? pe("userSettings") : void 0,
      n = z7n(s?.env, "userSettings");
    t(
      `CA certs: Config fallback - globalEnv keys: ${e ? Object.keys(e).join(",") : "none"}, settingsEnv keys: ${n ? Object.keys(n).join(",") : "none"}`
    );
    let r = n?.NODE_EXTRA_CA_CERTS || e?.NODE_EXTRA_CA_CERTS;
    if (r) t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);
    return r;
  } catch (o) {
    (t(`CA certs: Config fallback failed: ${o}`, { level: "error" }),
      f("ca_certs_load", "config_read_failed"));
    return;
  }
}
export { yct };

//# sourceMappingURL=chunk-acspzcxd.js.map
