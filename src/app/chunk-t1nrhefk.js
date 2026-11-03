// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { N, ui } from "./chunk-fs43t96t.js";
import { Y } from "./chunk-arw2bgak.js";
import { l } from "./chunk-ewvf3tep.js";
import { Uu } from "./chunk-4nzy53ma.js";
import { jt } from "./chunk-ajtyjx88.js";
import { GTe } from "./chunk-w35wpr7b.js";
import { oFr, eVs, iVs, lVs, lFr, dFr, IQ, k6n } from "./chunk-xt7fs806.js";
import { wAs } from "./chunk-3gxbxty5.js";
import { writeFile as p } from "fs/promises";
var k = 30000,
  Aho = 300000,
  m = GTe,
  y = 16777216,
  c = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";
function _(r) {
  return r ? `${c}&entrypoint=${encodeURIComponent(r)}` : c;
}
var f = "&wrapped_skills_as_plugins=true";
async function gZt(r = {}) {
  let s = await d(r);
  if (!s.success && IQ(s)) return d(r);
  return s;
}
async function d(r) {
  try {
    let s = `${_(Uu())}${r.convertedSkillsAsPlugins === !0 ? f : ""}`,
      e = await jt.get(s, {
        auth: "teleport-org",
        isBackground: r.isBackground,
        timeout: k,
        maxContentLength: y,
        credentials: r.credentials,
        earlyAnswer: r.earlyAnswer
      });
    if (!e.ok || !Array.isArray(e.data?.skills)) return lFr("skills", e);
    let n = e.data.skills.filter(lVs),
      a = n.map(iVs);
    try {
      wAs(n);
    } catch (t) {
      (Y("warn", "skills_sync_ownerships_not_recorded"), l(N(t)));
    }
    try {
      eVs(n);
    } catch (t) {
      (Y("warn", "skills_sync_host_mount_kinds_not_recorded"), l(N(t)));
    }
    return { success: !0, skills: a };
  } catch (s) {
    return dFr(s);
  }
}
async function SAs(r, s, e, n = {}) {
  let a = Uu(),
    t = [];
  if (a) t.push(`entrypoint=${encodeURIComponent(a)}`);
  if (e) t.push(`version=${encodeURIComponent(e)}`);
  let u = t.length > 0 ? `?${t.join("&")}` : "";
  try {
    let o = await jt.get(
      `/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(r)}/download${u}`,
      {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: Aho,
        responseType: "arraybuffer",
        maxContentLength: m,
        credentials: n.credentials
      }
    );
    if (!o.ok || !o.data)
      return (
        Y("warn", "skills_sync_download_not_ok", { reason: o.ok ? "empty_body" : o.reason }),
        !1
      );
    let i = Buffer.from(o.data);
    if (!oFr(i))
      return (
        Y("warn", "skills_sync_download_not_zip", { serverError: k6n(i), bodyLen: i.length }),
        !1
      );
    return (await p(s, i), !0);
  } catch (o) {
    let { kind: i } = ui(o);
    return (Y("warn", "skills_sync_download_exception", { kind: i }), !1);
  }
}
export { Aho, gZt, SAs };

//# sourceMappingURL=chunk-t1nrhefk.js.map
