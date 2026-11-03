// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, E } from "./chunk-fs43t96t.js";
import { aee } from "./chunk-4kxznmzw.js";
import { No, ot } from "./chunk-8r2m7vfp.js";
import { ffi, kxe } from "./chunk-hc5j8sxy.js";
import { open as l, realpath as f, stat as g } from "fs/promises";
import { resolve as h } from "path";
var mgs =
    "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.",
  s = 268435456;
function nMn(t) {
  let e = No(t).trimStart();
  return e.startsWith("{") || ot(e, !1) !== null;
}
async function ggs(t) {
  let e = h(t);
  try {
    await using r = await l(e, aee());
    let a = await r.stat({ bigint: !0 });
    ffi(a, e);
    let o = await f(e).catch(() => e),
      n = await g(o, { bigint: !0 });
    if (n.dev !== a.dev || n.ino !== a.ino)
      return { ok: !1, error: `Error: --agents file changed while it was read: ${e}` };
    let { content: i } = await kxe(r, e, s);
    return { ok: !0, json: i, filePath: e, realPath: o };
  } catch (r) {
    switch (E(r)) {
      case "ENOENT":
        return {
          ok: !1,
          error: `Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)`
        };
      case "ERR_FILE_TOO_LARGE":
        return { ok: !1, error: `Error: --agents file is larger than ${s} bytes: ${e}` };
      case "ERR_MULTIPLE_LINKS":
        return {
          ok: !1,
          error: `Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)`
        };
      default:
        return { ok: !1, error: `Error reading --agents file ${e}: ${d(r)}` };
    }
  }
}
export { mgs, nMn, ggs };

//# sourceMappingURL=chunk-zcdwnz6s.js.map
