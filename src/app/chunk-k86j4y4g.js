// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { F, tt, Ol, wW } from "./chunk-wrtp8qz8.js";
import { In, Fa, MR, zs } from "./chunk-h5gbmqm1.js";
import { Po, ie, t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Qt } from "./chunk-1e5yp9hx.js";
import { BNt, UA, IP, ODr } from "./chunk-j0tbz6ra.js";
import { he } from "./chunk-95k4nfdh.js";
import { Jn, Ju, s7, Ry, Iu } from "./chunk-d5zj5299.js";
import { ud } from "./chunk-rve8yzwm.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { mr } from "./chunk-spwjh8kb.js";
import { jhe } from "./chunk-z0mss2jj.js";
import { NOo } from "./chunk-fnsjs1v2.js";
import { P8e } from "./chunk-kkjb9rfw.js";
import { randomUUID as k } from "crypto";
import { resolve as P } from "path";
function h(e, o) {
  let s = Ol();
  if (s.some((m) => In(P(m)) === o)) return !1;
  return (wW([...s, o]), UA(e), IP(e, "directory_added"), P8e(), !0);
}
async function pFn(e, o, s) {
  let n = {
    type: "addDirectories",
    directories: [o],
    destination: s ? "localSettings" : "session"
  };
  (e.setToolPermissionContext((i) => Ju(i, n)),
    h(e.session, o),
    ze.refreshConfig(),
    e.storageV5 ? ODr(o, e.storageV5) : ODr(o),
    NOo("--add-dir", o, e.storageV5));
  let d;
  if (s)
    try {
      (await s7(n, e.storageV5),
        (d = `Added ${he.bold(o)} as a working directory and saved to local settings`));
    } catch (i) {
      d = `Added ${he.bold(o)} as a working directory. Failed to save to local settings: ${i instanceof Error ? i.message : "Unknown error"}`;
    }
  else d = `Added ${he.bold(o)} as a working directory for this session`;
  let u = k();
  return (
    BNt(e.session, o, "slash_command", { storageV5: e.storageV5, credentials: e.credentials })
      .then(async ({ results: i, systemMessages: l }) => {
        for (let r of i)
          if (!r.succeeded && r.output)
            t(`DirectoryAdded hook failed: ${r.output}`, { level: "error" });
        let a = F(i, (r) => !r.succeeded),
          g = [
            ...(await Promise.all(
              l.map((r, f) =>
                jhe(r, `add-dir-${u}-${f}`, "systemMessage", { storageV5: e.storageV5 }).then(
                  (p) => `DirectoryAdded hook: ${p}`
                )
              )
            )),
            ...(a > 0
              ? [
                  `${a} DirectoryAdded ${I(a, "hook")} failed; output is in the debug log, not shown here`
                ]
              : [])
          ];
        if (g.length > 0)
          e.messageQueue.enqueuePendingNotification({
            value: g.join(`
`),
            mode: "task-notification",
            skipAttachments: !0,
            agentId: tt(),
            isMeta: !0
          });
      })
      .catch((i) => {
        e.messageQueue.enqueuePendingNotification({
          value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`,
          mode: "task-notification",
          skipAttachments: !0,
          agentId: tt(),
          isMeta: !0
        });
      }),
    d
  );
}
function MZt(e, o) {
  let s = ae(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = ie(),
    { resolvedPath: n, isCanonical: d } = Po(m, o.absolutePath),
    { resolvedPath: u, isCanonical: i } = Po(m, o.workingDir),
    l = he.bold(Jn(o.directoryPath));
  if (!d || !i) {
    if ([o.absolutePath, o.workingDir].some((c) => zs(c) || Fa(c) || MR(c))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (
    !Ry(o.absolutePath, { ...s, additionalWorkingDirectories: new Map() }) ||
    !Iu(n, u, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 })
  ) {
    let c = Jn(n);
    return n === o.absolutePath
      ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.`
      : `${l} leads outside the working directory through a link (it resolves to ${he.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
  }
  if (n === u) return null;
  let a = `${l} is inside the current working directory ${he.bold(Jn(o.workingDir))}`,
    g = Qt("projectSettings"),
    r = g && !mr("skills", { explicitlyRequested: !0 }) && !ud("skills"),
    f = g && !mr("agents") && !ud("agents");
  if (!r && !f)
    return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents",
    y = h(e.session, o.absolutePath);
  if (y) ze.refreshConfig();
  return y
    ? `${a}; loading its ${p} for this session.`
    : `${a}; its ${p} are already included for this session.`;
}
export { pFn, MZt };

//# sourceMappingURL=chunk-k86j4y4g.js.map
