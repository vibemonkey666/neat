// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { fA } from "./chunk-5rw2zfa0.js";
import { t } from "./chunk-4kxznmzw.js";
import { p } from "./chunk-qmkm2x59.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { Awn } from "./chunk-7c3thgax.js";
import { ag, FY } from "./chunk-krgv9fvy.js";
import { SN } from "./chunk-5hjs1kac.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { u, Ue, A } from "./chunk-0bqrj5ah.js";
var n = 262144,
  s = { deny: [], ask: [] };
function R() {
  if (ag()) return { kind: "read", rules: { projectSettings: s, localSettings: s } };
  let r = l("projectSettings");
  if (r === void 0) return { kind: "unread", source: "projectSettings" };
  let e = l("localSettings");
  return e === void 0
    ? { kind: "unread", source: "localSettings" }
    : { kind: "read", rules: { projectSettings: r, localSettings: e } };
}
function l(r) {
  if (!Qt(r)) return s;
  let e = Awn(r, n);
  if (e === "unreadable" || e.kind !== "in_effect") return;
  let o = FY(e.settings, r);
  return { deny: a(o, "deny"), ask: a(o, "ask") };
}
function a(r, e) {
  return r.filter((o) => o.ruleBehavior === e).map((o) => dn(o.ruleValue));
}
var i = "anthropic/repoRulesReadHere",
  b = { [i]: { v: 1 } },
  c = p(() => u({ [i]: Ue({ v: A(1) }) })),
  f = { repoRules: void 0 };
function ZSe(r, e) {
  if (!mn(e) || !Object.hasOwn(e, i)) return f;
  return c().safeParse(e).success
    ? m(r)
    : {
        refused: {
          cause: "repo_rules_ask_malformed",
          message: `${r} was not run: its request asks this server to read the repository's permission rules in a form that this server does not know. Retrying won't help.`
        }
      };
}
async function m(r) {
  try {
    await SN();
    let e = R();
    return e.kind === "read"
      ? { repoRules: e.rules }
      : {
          refused: {
            cause: "repo_rules_file_unread",
            message: `${r} was not run: this server could not load the repository's ${fA(e.source)} (it cannot be read, is not valid settings, or is over ${n / 1024} KiB), so it cannot tell which of its permission rules apply. Tell the user: that file has to be fixed or removed.`
          }
        };
  } catch (e) {
    return (
      t(`The repo's permission rules could not be read: ${d(e)}`, { level: "error" }),
      {
        refused: {
          cause: "repo_rules_read_failed",
          message: `${r} was not run: this server could not read the repository's permission rules to judge it.`
        }
      }
    );
  }
}
export { ZSe };

//# sourceMappingURL=chunk-vm37ezht.js.map
