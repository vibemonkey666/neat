import {
  fileURLToPath as __sourceFilePath_7418acfcd0411d37,
  URL as __sourceFilePath_7418acfcd0411d37_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { hc, i } from "./chunk-cj37hmns.js";
import { q, aF, gee, PB } from "./chunk-wrtp8qz8.js";
import { uW, ie } from "./chunk-4kxznmzw.js";
import { Rf, zw, b2, Xl, l } from "./chunk-ewvf3tep.js";
import { he } from "./chunk-95k4nfdh.js";
import { eo } from "./chunk-bxamkenk.js";
import { a } from "./chunk-4cgvah10.js";
import { Ut, X_e, pa } from "./chunk-ajtyjx88.js";
import { r2r } from "./chunk-tzrn3e6a.js";
import { fc } from "./chunk-vchq4g74.js";
import { uT, II } from "./chunk-8w2npe9a.js";
import { os } from "./chunk-jtb5bzvb.js";
import { Nst, Wfe, ySe } from "./chunk-t0wrcf3t.js";
import { CI } from "./chunk-5rw2zfa0.js";
import { _rt } from "./chunk-r00j5r9s.js";
import { uZ } from "./chunk-rj6gws00.js";
import { zd } from "./chunk-07aq7e5p.js";
import { ghe, Nne, hhe, kht, Pg, jan, rde } from "./chunk-fnsjs1v2.js";
import { Zb } from "./chunk-zjm5ncxc.js";
import { MY } from "./chunk-d5zj5299.js";
import { ae, ZAe } from "./chunk-ar6ynjt8.js";
import { D2n, TNt, H2n, xd, Qa, K3, Ik, Ru, V3 } from "./chunk-j0tbz6ra.js";
import { eU } from "./chunk-6h7ejyet.js";
import { nm } from "./chunk-0hjcje8e.js";
import { i_t } from "./chunk-ssq884a9.js";
import { FQ, xu, E8 } from "./chunk-zvsmc5fn.js";
import { ZX, pve, Rct, Q2, C3e, mve, nLn } from "./chunk-6z861t7d.js";
import { Bco, FSs, QUe } from "./chunk-1axdbe50.js";
import { QX } from "./chunk-vj6rv7ck.js";
import { ve } from "./chunk-vk5p9xv3.js";
import { spawn as x } from "child_process";
import { randomUUID as H } from "crypto";
import { existsSync as N, statSync as B } from "fs";
import { realpath as M } from "fs/promises";
import { homedir as W } from "os";
import { basename as G, dirname as j, join as U } from "path";
async function hSr() {
  let r = await hc("claude"),
    e = nm()[0],
    [n, p] = await Promise.all([r ? M(r).catch(() => r) : null, e ? M(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return E8({ cmd: r, prefixArgs: [], target: r });
  return xu();
}
function Y(r) {
  switch (r.kind) {
    case "newer":
      return `Successfully updated from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_7418acfcd0411d37(new __sourceFilePath_7418acfcd0411d37_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION} to version ${r.version}`;
    case "older":
      return `Successfully downgraded from ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_7418acfcd0411d37(new __sourceFilePath_7418acfcd0411d37_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION} to version ${r.version}`;
    case "same":
    case "unknown":
      return "Session resumed";
  }
}
var J = Symbol("staff, over Remote Control");
function z(r) {
  if (eU(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return QX(e) ? e : "not_typed";
}
function K(r, ...e) {
  if (r !== J && !QX(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return Rct(...e);
}
var P = (r) => ({
    type: "system",
    subtype: "local_command",
    content: r,
    level: "info",
    timestamp: new Date().toISOString(),
    uuid: H(),
    isMeta: !1
  }),
  L = ve(new Map(), (r) => r.clear());
function Q(r, e) {
  let n = (o, u) => (a("tengu_update_refused", { foreground: c(o) }), u),
    p = "To use the installed version, exit and start Claude Code again";
  if (C3e(r) !== void 0) {
    let u = Qa(),
      m = xd();
    if (u || m === null)
      return n(
        u ? "saving_off" : "not_written",
        "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session."
      );
    if (K3() !== 0)
      return n(
        "write_failed",
        "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it."
      );
    if (e === void 0) {
      let f = L.get(m);
      if (f === void 0)
        try {
          f = B(m).size > 0 ? void 0 : "empty";
        } catch {
          f = "missing";
        }
      if (f !== void 0)
        return (
          L.set(m, f),
          n(
            "gone",
            f === "empty"
              ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session."
              : "Can't restart this session. Its saved file can't be found. It may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit."
          )
        );
    }
  }
  let y = nLn();
  if (!N(y))
    return n(
      "no_folder",
      `Can't restart this session here. Its folder, ${MY(os(y))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`
    );
  let v = PB().map((o) => o.trim()),
    C = v.find((o, u) => {
      let m = v[u - 1];
      if ((m !== "--settings" && m !== "--mcp-config") || o === "" || o.startsWith("{")) return !1;
      try {
        let f = m === "--settings" && !CI(o) ? uW(ie(), o).resolvedPath : o;
        return !B(f).isFile();
      } catch {
        return !0;
      }
    });
  if (C !== void 0)
    return (
      a("tengu_update_refused_launch_file", {}),
      n(
        "launch_file",
        `Can't restart this session. It was started with ${MY(os(C))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`
      )
    );
  if (zd()?.bridgeSessionId)
    return n(
      "remote_control",
      "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume."
    );
  if (!N(xu().target))
    return n(
      "no_launcher",
      "Can't restart. The installed version wasn't found. To check your installs, run /doctor."
    );
  let S = H2n(D2n);
  if (S !== void 0)
    return n(
      "above_max_version",
      `Can't restart on the installed version. Version ${S} is on hold, so this session is staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_7418acfcd0411d37(new __sourceFilePath_7418acfcd0411d37_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}. Nothing was changed.`
    );
  return;
}
var RTi = async (r, e) => {
  if (uT()) return { type: "text", value: "/restart isn't available in this environment." };
  let n = z(e);
  if (n === "not_owner")
    return (
      a("tengu_update_refused", { not_owner: !0 }),
      a("tengu_update_refused_not_owner", {}),
      { type: "text", value: "/restart isn't available over Remote Control." }
    );
  let p = Ut() ? i.CLAUDE_JOB_DIR : void 0;
  if (Ut() && (!X_e() || !p)) {
    a("tengu_update_refused", { bg_session: !0 });
    let t = X_e() ? null : Pg();
    return {
      type: "text",
      value: t
        ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
        : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)."
    };
  }
  if (!p) {
    let t = xd(),
      b = U(Zb(nLn()), `${q()}.jsonl`);
    if (t && t !== b) {
      a("tengu_update_refused", { transcript_path_drift: !0 });
      let _ = MY(os(nLn())),
        A = j(t),
        g = await ySe(t),
        s = g && (Nst(g.tail, "relocated", "relocatedCwd") ?? Wfe(g.head, "cwd"));
      return {
        type: "text",
        value: `Cannot /update \u2014 ${s && Zb(s) === A ? `this session belongs to ${MY(os(s))} but is running in ${_}` : `this session is running in ${_} but its transcript is in ${MY(os(A))}`}. Restart manually with --resume to continue on the latest version.`
      };
    }
  }
  let y = (t) => {
      if (!QUe(e.taskRegistry.all())) return;
      return (
        a("tengu_update_refused", { active_tasks: !0, ...(t && { deferred: t }) }),
        "Can't restart while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then try again."
      );
    },
    v = (t) => {
      let b = Nne(ae(e), aF());
      if (b.length === 0) return y(t);
      a("tengu_update_refused", { uncarriable: !0 });
      let _ = Qa() ? "" : " (add --continue to return to this conversation)";
      return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${_}.`;
    },
    C = p ? y() : v();
  if (C !== void 0) return { type: "text", value: C };
  if (p) {
    let t = G(p);
    if (
      (await Q2(e.messages, e.storageV5),
      !(await Nt(Ru(), 30000, "session flush").then(
        () => !0,
        () => !1
      )))
    )
      return (
        a("tengu_update_refused", { bg_flush_failed: !0 }),
        {
          type: "text",
          value:
            "Couldn't save the session to disk, so nothing was restarted \u2014 try /restart again in a moment."
        }
      );
    let _ = await hSr(),
      A = y(!0);
    if (A !== void 0) return { type: "text", value: A };
    let g = i_t({ ...process.env });
    for (let s of _rt) delete g[s];
    delete g.CLAUDE_JOB_DIR;
    for (let s of Object.keys(g)) if (s.startsWith("CLAUDE_BG_")) delete g[s];
    a("tengu_update_bg_respawn", { carried_comment_monitor: Bco() && FSs(e.taskRegistry.all()) });
    try {
      let s = x(_.cmd, [..._.prefixArgs, "respawn", t], {
        detached: !0,
        stdio: "ignore",
        windowsHide: !0,
        env: g,
        cwd: W()
      });
      (II(s.pid),
        s.on("error", (I) => {
          l(I);
        }),
        s.unref());
    } catch (s) {
      return (
        l(s),
        a("tengu_update_refused", { bg_spawn_failed: !0 }),
        {
          type: "text",
          value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.`
        }
      );
    }
    return {
      type: "text",
      value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.`
    };
  }
  if (n === "not_typed")
    return (
      a("tengu_update_refused", { foreground: c(n) }),
      a("tengu_update_refused_not_typed", {}),
      { type: "text", value: "Can't restart automatically. Type /restart at the prompt." }
    );
  let S = Q(e.messages, e.storageV5);
  if (S !== void 0) return { type: "text", value: S };
  await Q2(e.messages, e.storageV5);
  let o = v(!0);
  if (o !== void 0) return { type: "text", value: o };
  let u = ae(e),
    m = [...ghe(u, ZAe(e)), ...hhe(u, gee())],
    f = fc() ? void 0 : e.getAppState().teamContext?.teamName;
  await mve();
  let k = v(!0);
  if (k !== void 0) return { type: "text", value: k };
  let h = zd(),
    O = h?.bridgeSessionId,
    D = h?.getLastSequenceNum(),
    F = h?.outboundOnly,
    V = h?.sessionGroupingId;
  if (O)
    (e.setAppState((t) =>
      t.replBridgeSkipNextArchive ? t : { ...t, replBridgeSkipNextArchive: !0 }
    ),
      h.writeSdkMessages([r2r("Switching to latest Claude Code\u2026 reconnecting", q())]),
      await Nt(h.flush(), 2000, "bridge flush").catch(() => {}),
      await h.teardown({ skipArchive: !0 }));
  let w = {};
  if (f) w.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = f;
  (Object.assign(w, uZ()),
    Object.assign(w, kht(u.additionalWorkingDirectories)),
    Object.assign(w, rde(O, D, F, V, jan(h, V3())) ?? {}));
  let E = xu(),
    T = await ZX(e.messages, "relaunch", {}, e.storageV5),
    R = C3e(e.messages) !== void 0;
  if (R && !T) {
    try {
      await Ik(
        [
          ...e.messages,
          P(`<${Rf}>/restart</${Rf}>
<${zw}>restart</${zw}>
<${b2}></${b2}>`),
          P(`<${Xl}>${Y(TNt(E.target))}</${Xl}>`)
        ],
        void 0,
        void 0,
        void 0,
        e.storageV5
      );
    } catch (t) {
      l(t);
    }
    await Q2(e.messages, e.storageV5);
  }
  a(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", {
    from_version: pa(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_7418acfcd0411d37(
          new __sourceFilePath_7418acfcd0411d37_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION
    ),
    target_version: pa(D2n(E.target)),
    native_install: FQ()
  });
  try {
    return await K(
      n,
      T,
      {
        launcher: E,
        freshIfNoTranscript: !R,
        extraArgs: m,
        proactivity: { proactivityLevel: e.getProactivityLevel(), toolPermissionContext: u },
        env: Object.keys(w).length > 0 ? w : void 0,
        preSpawn: () => {
          process.stdout.write(
            R && K3() !== 0
              ? he.dim(`
Claude's last response couldn't be saved, so it may be missing.

`)
              : `
`
          );
        }
      },
      e.storageV5
    );
  } catch (t) {
    if (!T) throw t;
    return (
      l(t),
      {
        type: "text",
        value: eo(e.session)
          ? pve("Couldn't restart Claude Code (detail withheld on this connection).", d(t))
          : `Couldn't restart Claude Code \u2014 ${d(t)}.`
      }
    );
  }
};
export { hSr, RTi };

//# sourceMappingURL=chunk-f7xqx2r2.js.map
