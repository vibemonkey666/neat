// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d } from "./chunk-fs43t96t.js";
import { uVt } from "./chunk-zkq2y8s1.js";
import { Kj, $Ne } from "./chunk-qzh3w7y7.js";
import { $r } from "./chunk-a2y39866.js";
var nio = {};
$r(nio, {
  default: () => nio,
  endsInARowOf: () => _gi,
  unsettledBy: () => xyr,
  workerEndingOf: () => bgi
});
function _gi(e) {
  let n = Number(e);
  return Number.isSafeInteger(n) && n > 0 ? n : 0;
}
var xyr = (e) => ({ reason: `Error: ${d(e)}`, kind: e instanceof uVt ? "passing" : "lasting" });
var o = 5,
  m = `It did not pass in ${o} tries`,
  p = "it is held for good, or refused to this process",
  t = "Start the daemon again once this is mended.",
  a = `${m}: ${p}. ${t}`;
function bgi(e, n) {
  let r = e.kind === "passing",
    s = r && n + 1 < o,
    i = r ? a : t;
  return s
    ? {
        code: $Ne,
        said: `${e.reason}
`
      }
    : {
        code: Kj,
        said: `${e.reason}
${i}
`
      };
}
export { _gi, xyr, bgi, nio };

//# sourceMappingURL=chunk-2af27mew.js.map
