import {
  fileURLToPath as __sourceFilePath_2e11ba294bf5ab07,
  URL as __sourceFilePath_2e11ba294bf5ab07_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Lo } from "./chunk-ws40g1dv.js";
import { i } from "./chunk-cj37hmns.js";
var n = 3;
var _ = "tengu_hazel_trellis";
function $k() {
  let e = i.CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH;
  if (e !== void 0) return e;
  let t = Lo();
  if (t.maxSubagentSpawnDepthFromGrowthBook === void 0) {
    let { getFeatureValue_CACHED_MAY_BE_STALE: a } = import.meta.require(
        __sourceFilePath_2e11ba294bf5ab07(
          new __sourceFilePath_2e11ba294bf5ab07_URL("./chunk-4m15ar7w.js", import.meta.url)
        )
      ),
      { getCachedClientData: A } = import.meta.require(
        __sourceFilePath_2e11ba294bf5ab07(
          new __sourceFilePath_2e11ba294bf5ab07_URL("./chunk-ng9bf6hw.js", import.meta.url)
        )
      ),
      o = A()?.[_],
      r = u(o) ? o : a(_, n);
    t.maxSubagentSpawnDepthFromGrowthBook = u(r) ? r : n;
  }
  return t.maxSubagentSpawnDepthFromGrowthBook;
}
function u(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 1;
}
export { $k };

//# sourceMappingURL=chunk-2gvtp5cn.js.map
