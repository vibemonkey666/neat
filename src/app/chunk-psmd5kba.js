// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { vr } from "./chunk-azq9hjy0.js";
async function uzr(s) {
  let {
      isNestedGitLabProject: e,
      parseGitRemote: t,
      parseGitHubRepository: u
    } = await import("./chunk-bt0dt01v.js"),
    r = t(s);
  if (r) return e(r) ? null : r;
  let i = u(s);
  if (i) {
    let [o, n] = i.split("/");
    if (o && n) return { host: vr, owner: o, name: n };
  }
  return null;
}
async function Jzo(s, e, t) {
  let u = { revisionGuessUsed: !1 };
  if (!s) return { sources: [], outcomes: [], report: u };
  let { getDefaultBranch: r } = await import("./chunk-j81amv12.js");
  if (e === "HEAD") e = "";
  let i = !1,
    o = e || t || void 0;
  if (!o) ((o = (await r()) || void 0), (i = o !== void 0));
  let n = e && t && e !== t ? [e] : [],
    c,
    a;
  if (e && n.length === 0)
    ((c = t ? "is_default" : "no_evidence"),
      (a = t
        ? `[bridge] requested branch '${e}' is the default branch \u2014 ` +
          "omitted from outcomes.branches (the runner stays on the clone)"
        : "[bridge] no session-anchored default-branch evidence \u2014 " +
          `omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`));
  let g = { branchDropped: c, revisionGuessUsed: i, warnMessage: a },
    l = (y, d, m) => ({
      report: g,
      sources: [{ type: "git_repository", url: `https://${y}/${d}/${m}`, revision: o }],
      outcomes: [
        { type: "git_repository", git_info: { type: "github", repo: `${d}/${m}`, branches: n } }
      ]
    }),
    p = await uzr(s);
  if (p) return l(p.host, p.owner, p.name);
  return { sources: [], outcomes: [], report: u };
}
export { uzr, Jzo };

//# sourceMappingURL=chunk-psmd5kba.js.map
