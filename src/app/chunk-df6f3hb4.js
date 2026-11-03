// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ai } from "./chunk-ajtyjx88.js";
import { N } from "./chunk-fs43t96t.js";
import { t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { Dy } from "./chunk-gjpjdnzc.js";
import { Lsn, Nsn, bKn } from "./chunk-j0tbz6ra.js";
import { tz } from "./chunk-rve8yzwm.js";
import { KW } from "./chunk-5hjs1kac.js";
import { zGe } from "./chunk-eq25erm1.js";
var f = 3000;
function qro(e = {}) {
  let r = e.firstFlagFetchWaitMs ?? f,
    o = !1,
    i;
  return {
    get ready() {
      return o;
    },
    whenReady: () =>
      (i ??= d(r).then(() => {
        ((o = !0), c());
      }))
  };
}
async function d(e) {
  let r = performance.now();
  try {
    tz();
  } catch (s) {
    l(N(s));
  }
  let o = !1,
    [i, a, m, g] = await Promise.all([
      n("the plugin-hook registration pass", async () => {
        await Nsn();
      }),
      n("the remote managed-settings load", KW),
      n("the policy-limits load", Dy),
      n("the first flag fetch", async () => {
        let { timedOut: s } = await zGe({ initialize: Ai, budgetMs: e });
        o = !s;
      })
    ]);
  t(
    `[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${g}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`
  );
}
async function n(e, r) {
  let o = performance.now();
  try {
    await r();
  } catch (i) {
    (t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, { level: "error" }),
      l(N(i)));
  }
  return Math.round(performance.now() - o);
}
async function c() {
  try {
    let e = (await Lsn(!1)) ?? (await bKn());
    if (e !== void 0)
      t(
        `[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`,
        { level: "error" }
      );
  } catch (e) {
    l(N(e));
  }
}
export { qro };

//# sourceMappingURL=chunk-df6f3hb4.js.map
