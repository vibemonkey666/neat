// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import { dl } from "./chunk-h5gbmqm1.js";
import { p } from "./chunk-qmkm2x59.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-jgvfzp2r.js";
import { _ } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-dc0nzty2.js";
import "./chunk-rhk37je5.js";
import "./chunk-xe386mry.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxy1036.js";
import "./chunk-afxq0vrk.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-13nwb0xt.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-arw2bgak.js";
import "./chunk-vw9e882a.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-ak0cmk10.js";
import "./chunk-azq9hjy0.js";
import { Aan, Mne } from "./chunk-skfqvf9h.js";
import "./chunk-65jwz3rm.js";
import { o, T, Ue } from "./chunk-0bqrj5ah.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import { isAbsolute as m, normalize as k } from "path";
var c = () =>
    o()
      .min(1)
      .max(4096)
      .refine(
        (t) => !t.includes("\x00") && m(t) && !dl(t),
        "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character"
      ),
  g = p(() => Ue({ repoRoot: c(), worktreePaths: T(c()).min(1).max(4) }));
async function D(t) {
  let e = g().safeParse(t);
  if (!e.success) {
    let r = e.error.issues[0];
    return {
      ok: !1,
      error: r
        ? `Not a worktree registration request (${r.path.map(String).join(".") || "request"}: ${r.message}).`
        : "Not a worktree registration request."
    };
  }
  let { worktreePaths: n } = e.data,
    s = k(e.data.repoRoot),
    a = await Aan(s);
  if (a === null) {
    let r = `the repository at ${s} could not be vetted`;
    return { ok: !0, outcomes: n.map(() => ({ outcome: "kept", reason: r })) };
  }
  let u = [];
  for (let r of n) {
    let i = await Mne(a, { worktreePath: r, repoSpelled: s }, { locked: "keep" });
    u.push(i.outcome === "kept" ? { outcome: "kept", reason: i.reason } : { outcome: i.outcome });
  }
  return { ok: !0, outcomes: u };
}
function y(t) {
  return _({ ok: !0, outcomes: t });
}
export { y as registrationDropsLine, D as runWorktreeRegistrationDrops };

//# sourceMappingURL=chunk-perrq2m3.js.map
