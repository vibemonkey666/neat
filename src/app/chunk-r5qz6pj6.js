// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { d, G } from "./chunk-fs43t96t.js";
import { X } from "./chunk-4hww8411.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { _n, q_ } from "./chunk-cjnzngfc.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { zp, Pb, It, Z9 } from "./chunk-dc0nzty2.js";
import { cd, G1, _Ze, z_t } from "./chunk-5bpsfngr.js";
import { VQ } from "./chunk-y1rk2re8.js";
import { lstat as p, open as E } from "fs/promises";
import { join as l, resolve as y } from "path";
var Xxs = 1e4,
  v = 500;
async function gCr(e, r = Xxs) {
  let s = new AbortController();
  try {
    return await Promise.race([
      e,
      X(r, s.signal).then(() => {
        throw Error("worktree probe timed out");
      })
    ]);
  } finally {
    s.abort();
  }
}
async function Ywo(e, r, s = Xxs) {
  let i = Pb(e);
  if (!i) return null;
  try {
    let n = await gCr(k(i, r, Date.now() + s), s);
    if (n.submodules_unverified) f("bridge_worktree_state", "submodules_unverifiable");
    else g("bridge_worktree_state");
    return n;
  } catch (n) {
    return (
      m("bridge_worktree_state", "collect_failed"),
      t(`[bridge:worktree] collectWorktreeState failed: ${d(n)}`),
      null
    );
  }
}
async function k(e, r, s) {
  let i = await Z9(e);
  if (!i) (zp().gitDirByCwd.delete(y(e)), (i = await Z9(e)));
  if (!i) throw Error("getGitDir returned null \u2014 cannot verify worktree state");
  let [n, o, a, b, h, w] = await Promise.all([
    O(e),
    S(e, r),
    D(e, s),
    x(e, i),
    _(l(e, ".gitmodules")),
    R(e)
  ]);
  return {
    branch: r,
    head_sha: n,
    unpushed_count: o.count,
    is_dirty: a.dirty,
    upstream_exists: o.upstreamExists,
    mid_operation: b,
    has_submodules: h,
    submodules_unverified: a.submodulesUnverified,
    has_lfs: w,
    reported_at: new Date().toISOString()
  };
}
var T = 4194304;
function u(e, r, { userLocale: s } = {}) {
  return ct(It(), [..._n, ...r], {
    cwd: e,
    env: cd(e, void 0, { userLocale: s }),
    preserveOutputOnError: !1,
    maxBuffer: T,
    timeout: 1e4
  });
}
async function O(e) {
  let { code: r, stdout: s } = await u(e, ["rev-parse", "HEAD"]);
  return r === 0 ? s.trim() : null;
}
async function S(e, r) {
  if (!r) return { count: null, upstreamExists: !1 };
  let s = `refs/remotes/origin/${r}`,
    i = await u(e, ["rev-parse", "--verify", "--quiet", `${s}^{commit}`]);
  if (i.code !== 0 || !i.stdout.trim()) return { count: null, upstreamExists: !1 };
  let { code: n, stdout: o } = await u(e, ["rev-list", "--count", `${s}..HEAD`]);
  if (n !== 0) return { count: null, upstreamExists: !1 };
  let a = parseInt(o.trim(), 10);
  return { count: Number.isFinite(a) ? a : null, upstreamExists: !0 };
}
async function D(e, r) {
  let s = await G1(e);
  if (!s.ok) throw Error("repository config could not be vetted");
  let { code: i, stdout: n } = await u(
    e,
    [...s.args, "--no-optional-locks", "status", "--porcelain", "-unormal", q_],
    { userLocale: !0 }
  );
  if (i !== 0) throw Error("git status failed");
  if (n.trim().length > 0) return { dirty: !0, submodulesUnverified: !1 };
  let o = await VQ(e, { deadlineMs: Math.max(0, r - Date.now() - v) });
  if (o.kind === "verified")
    return {
      dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0,
      submodulesUnverified: !1
    };
  switch (o.reason) {
    case "unreadable":
      throw Error("submodule state unreadable \u2014 cannot verify worktree is clean");
    case "nested_submodules":
    case "too_many":
    case "nested_repository":
    case "unconfigured_gitlink":
    case "gitdir_outside_modules":
    case "timeout":
      return (
        t(
          `[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`,
          { level: "warn" }
        ),
        { dirty: !0, submodulesUnverified: !0 }
      );
  }
}
async function _(e) {
  try {
    let r = await p(e);
    return r.isFile() || r.isDirectory();
  } catch (r) {
    if (G(r)) return !1;
    throw r;
  }
}
var c = [
  ["rebase-merge", "rebase"],
  ["rebase-apply", "rebase"],
  ["MERGE_HEAD", "merge"],
  ["CHERRY_PICK_HEAD", "cherry-pick"],
  ["REVERT_HEAD", "revert"],
  ["BISECT_LOG", "bisect"],
  ["sequencer", "cherry-pick"]
];
async function x(e, r) {
  let i = (await Promise.all(c.map(([o]) => _(l(r, o))))).indexOf(!0);
  if (i !== -1) return c[i][1];
  let n = await z_t(r, _Ze, async (o) => (await u(e, o)).exitCode);
  if (n === null) throw Error("git could not say whether a cherry-pick or revert is in progress");
  return n.has("CHERRY_PICK_HEAD") ? "cherry-pick" : n.has("REVERT_HEAD") ? "revert" : null;
}
async function R(e) {
  let r = l(e, ".gitattributes");
  try {
    if (!(await p(r)).isFile()) return !1;
  } catch (i) {
    if (G(i)) return !1;
    throw i;
  }
  let s;
  try {
    s = await E(r, "r");
    let { buffer: i, bytesRead: n } = await s.read(Buffer.alloc(65536), 0, 65536, 0);
    return i.toString("utf8", 0, n).includes("filter=lfs");
  } catch (i) {
    if (G(i)) return !1;
    throw i;
  } finally {
    await s?.close();
  }
}
export { Xxs, gCr, Ywo };

//# sourceMappingURL=chunk-r5qz6pj6.js.map
