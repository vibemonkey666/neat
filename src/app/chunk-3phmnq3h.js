// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ke, Ol, wW } from "./chunk-wrtp8qz8.js";
import { p } from "./chunk-qmkm2x59.js";
import { t } from "./chunk-4kxznmzw.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { c1o } from "./chunk-d5zj5299.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { Qit, x5t, aCn } from "./chunk-afgt35yk.js";
import { P8e } from "./chunk-kkjb9rfw.js";
import { o, u, $e } from "./chunk-0bqrj5ah.js";
import { relative as f, sep as h } from "path";
var Fcr = "RegisterRepoRoot",
  w = 32,
  uQr = 4096,
  y = p(() => u({ directory: o().max(uQr) })),
  E = p(() => $e([u({ directory: o().min(1).max(4096) }), u({ refusal: o().min(1).max(64) })]));
async function Wis(s, R, l) {
  let { directory: c } = y().parse(s),
    m = l.toolUseContext(),
    { workspaceRoot: e = { kind: "absent" } } = l,
    r;
  try {
    r = await aCn(
      c,
      () => ({
        ...ae(m),
        additionalWorkingDirectories: new Map(
          e.kind === "valid" ? [[e.root, { path: e.root, source: "cliArg" }]] : []
        )
      }),
      ke()
    );
  } catch (i) {
    let a = Qit(i);
    if (a === void 0) throw i;
    if (a === "outside_scope") {
      let g =
        e.kind === "valid"
          ? "the folder is not below the workspace root"
          : e.kind === "invalid"
            ? `the workspace root is invalid: ${e.fault}`
            : "no workspace root";
      t(`${Fcr}: outside_scope: ${g}`, { level: "warn" });
    }
    return d(a);
  }
  if (
    e.kind === "valid" &&
    !x5t(r, ke(), [], []).allowed &&
    f(e.real, r)
      .split(h)
      .some((i) => i === "" || i.startsWith("."))
  )
    return (
      t(
        `${Fcr}: outside_scope: the folder is not strictly below where the workspace root led at the daemon's start, or a folder on the way has a name that starts with a dot`,
        { level: "warn" }
      ),
      d("outside_scope")
    );
  R.throwIfAborted();
  let n = Ol();
  if (!n.includes(r)) {
    if (n.length >= w) return d("too_many");
    (wW([...n, r]), c1o(r), ze.refreshConfig());
  }
  return (await P8e(), { summary: "folder registered", output: { directory: r } });
}
function d(s) {
  return { summary: `folder not registered: ${s}`, output: { refusal: s } };
}
export { Fcr, uQr, Wis };

//# sourceMappingURL=chunk-3phmnq3h.js.map
