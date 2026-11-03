// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { wn } from "./chunk-wrtp8qz8.js";
import { t } from "./chunk-4kxznmzw.js";
import { qj } from "./chunk-5rw2zfa0.js";
import { kfe, Bn, dn } from "./chunk-9z5ybxhe.js";
import { at } from "./chunk-at88wjsn.js";
import { vx, u1o, IAe } from "./chunk-d5zj5299.js";
import { jE } from "./chunk-x2h5w7zv.js";
import { ej } from "./chunk-39ayby14.js";
import { jis } from "./chunk-bha6jwbq.js";
import { qe } from "./chunk-0np0053t.js";
function M2(e, o, n, s) {
  let r = jis(e);
  for (let [i, { source: l }] of r.additionalWorkingDirectories) if (l !== "cliArg") u1o(i);
  return { ...r, ...aQr(r, o, n, s, "native") };
}
function aQr(e, o, n, s, r) {
  let i = (u) =>
      Object.fromEntries(
        ej.map((m) => [
          m,
          [
            ...f(e[u][m] ?? [], m, u === "alwaysDenyRules" ? "deny" : "ask", s),
            ...(o[u][m] ?? [])
              .filter((a) => {
                if (!qj.test(a)) return !0;
                return (
                  t(
                    `Ignoring the launch ${u === "alwaysDenyRules" ? "deny" : "ask"} rule "${a}" (from CLAUDE_CODE_MCP_SERVE_SETTINGS, or for ReadFileForRemote and ListDirectoryForRemote a settings file here): a rule starting with "!" removes paths from the rules listed before it instead of restricting anything, and here those include the calling session's own rules. Spell the rule without the exception instead.`,
                    { level: "warn" }
                  ),
                  !1
                );
              })
              .flatMap((a) => [a, ...d(a, n)])
          ]
        ])
      ),
    l = { alwaysDenyRules: i("alwaysDenyRules"), alwaysAskRules: i("alwaysAskRules") };
  return s === void 0 ? l : p(l, r);
}
function p(e, o) {
  let { composedRepoRules: n } = jE(),
    s = n[o];
  if (s !== void 0 && wn(s, e)) return s;
  let r = { alwaysDenyRules: R(e.alwaysDenyRules), alwaysAskRules: R(e.alwaysAskRules) };
  return ((n[o] = r), r);
}
function R(e) {
  return (Object.values(e).forEach((o) => Object.freeze(o)), Object.freeze(e));
}
function f(e, o, n, s) {
  if (s === void 0 || (o !== "projectSettings" && o !== "localSettings")) return e;
  return [...s[o][n], ...e.filter((r) => !qj.test(r))];
}
function d(e, o) {
  let { toolName: n, ruleContent: s } = Bn(e);
  if (s === void 0 || (n !== qe && n !== at)) return [];
  let { relativePattern: r, root: i } = IAe(s, o);
  if (i !== null) return [];
  return [dn({ toolName: n, ruleContent: `/${kfe(`${vx(o)}/`, { escapeGlobs: !0 })}**/${r}` })];
}
export { M2, aQr };

//# sourceMappingURL=chunk-seveay88.js.map
