// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, ke, kC, MI, Lxe, FTn, UM, OYe } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { E, Vt } from "./chunk-fs43t96t.js";
import { In } from "./chunk-h5gbmqm1.js";
import { i } from "./chunk-cj37hmns.js";
import { jo, hh, gf, t } from "./chunk-4kxznmzw.js";
import { l } from "./chunk-ewvf3tep.js";
import { tT, pe } from "./chunk-7c3thgax.js";
import { GEn, c6, R4t } from "./chunk-dc0nzty2.js";
import { a } from "./chunk-4cgvah10.js";
import { fe } from "./chunk-xe386mry.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { nu } from "./chunk-13nwb0xt.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { hH, Fg, sM, u5o, eqe } from "./chunk-ajtyjx88.js";
import { AEn } from "./chunk-5y69fhjv.js";
import { zd } from "./chunk-07aq7e5p.js";
import { zan } from "./chunk-fnsjs1v2.js";
import { C4n, ZN, MD } from "./chunk-6h7ejyet.js";
import { Gi, y2e, qHe, cet } from "./chunk-d5zj5299.js";
import { ez } from "./chunk-rve8yzwm.js";
import { rmn } from "./chunk-krgv9fvy.js";
import {
  Gte,
  EJ,
  Dje,
  mp,
  kNs,
  YNt,
  XNt,
  yw,
  Tsn,
  ANs,
  PNs,
  OMr,
  pWe,
  tx,
  mKn,
  HNs,
  Pgt,
  Bl,
  HJe
} from "./chunk-j0tbz6ra.js";
import { mv, Ec } from "./chunk-1fnv3zry.js";
import { Mmn } from "./chunk-183gveyz.js";
import { YD, Pd } from "./chunk-39ayby14.js";
import { ze } from "./chunk-1ww4jg8j.js";
import { han } from "./chunk-yyq6mj0n.js";
import { Oae } from "./chunk-xpkw9eye.js";
import { homedir as B } from "os";
import { realpath as D, stat as N } from "fs/promises";
import { dirname as x, parse as O } from "path";
var R = "Cd";
function b(e, r) {
  let s = L([...jo(e.requestedPath), e.canonicalPath]),
    n = L([e.canonicalPath, cet(e.canonicalPath)]),
    d = (o, m, f) => f.some((g) => M(o, m, g));
  for (let o of Pd(r)) {
    if (o.ruleValue.toolName !== R) continue;
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || d(m, o.source, s)) return { result: "blockedByRule", rule: o };
  }
  let u = YD(r).filter((o) => o.ruleValue.toolName === R);
  if (u.length === 0) return { result: "allowed" };
  for (let o of u) {
    let m = o.ruleValue.ruleContent;
    if (m === void 0 || d(m, o.source, n)) return { result: "allowed" };
  }
  return {
    result: "outsideAllowedPatterns",
    allowedPatterns: u.map((o) => o.ruleValue.ruleContent).filter((o) => o !== void 0)
  };
}
function M(e, r, s) {
  let { relativePattern: n, root: d } = qHe(e, r),
    u = y2e(d ?? fe(), s);
  if (u === ".." || u.startsWith("../")) return !1;
  let o = n
    .replace(/\/{2,}/g, "/")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  return F(o).test(u);
}
function F(e) {
  let r = "^";
  for (let s = 0; s < e.length; s++) {
    let n = e[s];
    if (s === 0 && n === "*" && e[1] === "*" && e[2] === "/") ((r += "(?:.*/)?"), (s += 2));
    else if (n === "/" && e[s + 1] === "*" && e[s + 2] === "*") ((r += "(/.*)?"), (s += 2));
    else if (n === "*")
      if (e[s + 1] === "*") ((r += ".*"), s++);
      else r += "[^/]+";
    else if ("\\^$.|?+()[]{}".includes(n)) r += `\\${n}`;
    else r += n;
  }
  return new RegExp(`${r}$`, "i");
}
async function qwe(e, r) {
  if (await G(e)) return (UM(!0), OYe(!0), !1);
  return u5o(e, r);
}
async function G(e) {
  let r = async (s) => {
    let n = s;
    try {
      n = await D(s);
    } catch {}
    return nu(In(n));
  };
  return (await r(e)) === (await r(B()));
}
async function Hhr(e, r) {
  let s = ut(e);
  try {
    if (!(await N(s)).isDirectory()) return { result: "not_a_directory", path: s, parent: x(s) };
  } catch (o) {
    if (!Vt(o)) l(Object.assign(Error("cd: unexpected stat errno"), { code: E(o) }));
    return { result: "not_found", path: s };
  }
  let n = s;
  try {
    n = await D(s);
  } catch {
    n = s;
  }
  let d = In(n);
  if (d === fe() && d === ke()) return { result: "same", directory: n };
  let u = b({ requestedPath: s, canonicalPath: n }, r);
  if (u.result !== "allowed") return { result: "blocked_by_rule", directory: n, check: u };
  return { result: "ok", directory: n };
}
function Lhr(e, r, s = (d) => d, n) {
  let d = n?.terminalAffordances !== !1,
    u = n?.display ?? ((o) => o);
  if (((e = u(e)), r.result === "blockedByRule")) {
    let o = u(dn(r.rule.ruleValue)),
      m = Dje(r.rule.source);
    if (r.rule.ruleValue.ruleContent === void 0)
      return d
        ? `Can't move to ${s(e)} \u2014 /cd is turned off by the ${s(o)} rule in ${m}. Update the rule in /permissions to move between directories again.`
        : `Can't move to ${s(e)} \u2014 directory changes are turned off by the ${s(o)} permission rule in ${m}.`;
    return d
      ? `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} rule in ${m}. Pick a directory outside that rule, or update it in /permissions.`
      : `Can't move to ${s(e)} \u2014 it's excluded by the ${s(o)} permission rule in ${m}. Pick a directory outside that rule.`;
  }
  return d
    ? `Can't move to ${s(e)} \u2014 /cd is limited to directories matching ${r.allowedPatterns.map((o) => s(u(o))).join(", ")}. Pick a matching directory, or add a Cd rule in /permissions.`
    : `Can't move to ${s(e)} \u2014 directory changes are limited to ${r.allowedPatterns.map((o) => s(u(o))).join(", ")}. Pick a matching directory.`;
}
async function H(e, r, s) {
  if (i.CLAUDE_CODE_DISABLE_CLAUDE_MDS) return "";
  let n = new Set();
  for (let y of await yw(e, !1, s)) n.add(nu(y.path));
  let d = [],
    u = r;
  while (u !== O(u).root) (d.push(u), (u = x(u)));
  let o = YNt(r),
    { held: m, keep: f } = kNs(e),
    g = [];
  for (let y of d.reverse())
    g.push(
      ...(await OMr(y, r, n, { skipProject: XNt(y, o), held: y === r ? m?.within : m?.above(y) }))
    );
  return (f(), PNs(g));
}
async function UPt(
  e,
  r,
  s,
  { storageV5: n, credentials: d, freshSession: u = !1, confirmFresh: o, requestBuilt: m } = {}
) {
  let f = fe(),
    g = ke(),
    y = L([g, f]),
    k = L(
      [
        ...(pe("projectSettings")?.permissions?.additionalDirectories ?? []),
        ...(pe("localSettings")?.permissions?.additionalDirectories ?? [])
      ].flatMap((p) => {
        try {
          return y.map((S) => ut(p, S));
        } catch {
          return [];
        }
      })
    );
  (hh(r), mp(r), MI(fe()));
  let w = !0;
  try {
    await Pgt(n);
  } catch (p) {
    w = !1;
    let S = !1;
    try {
      (hh(f), (S = !0));
    } catch {
      t(
        `directory move: transcript move failed and rollback chdir failed; completing the move with the transcript left in its previous home: ${p}`,
        { level: "error" }
      );
    }
    if (S) throw (mp(f), MI(g), p);
  }
  if (w)
    try {
      await zan(fe(), n);
    } catch (p) {
      t(`directory move: bg session state rehome failed (continuing): ${p}`, { level: "error" });
    }
  eqe();
  try {
    await Gi.rehome();
  } catch (p) {
    t(
      `directory move: re-targeting the settings watcher failed (continuing with the previous watch): ${p}`,
      { level: "error" }
    );
  }
  try {
    (ez(), Gi.notifyChange("projectSettings", { prevCwd: g }));
  } catch (p) {
    t(
      `directory move: re-resolving settings and hooks for the new directory failed (continuing): ${p}`,
      { level: "error" }
    );
  }
  try {
    await Oae.rehome();
  } catch (p) {
    t(
      `directory move: re-targeting the skill watcher failed (continuing with the previous watch): ${p}`,
      { level: "error" }
    );
  }
  let h = u && (o === void 0 || o());
  if (h) Lxe(fe());
  else
    try {
      await HJe(await Gte("skills", fe()));
    } catch (p) {
      t(
        `directory move: registering the new directory's skills failed (continuing without them): ${p}`,
        { level: "error" }
      );
    }
  if (
    (c6(),
    R4t(e),
    zd()?.refreshGitBranch?.(),
    ze.refreshConfig(),
    C4n(),
    a("tengu_cd_command", { source: c(s), fresh_session: h }),
    h)
  ) {
    try {
      (EJ(),
        Tsn(e, "session_start"),
        ANs(e),
        HNs(e),
        Mmn.of(e).clear(),
        mKn(e),
        FTn(null),
        AEn(),
        GEn(),
        Ec.cache.clear?.(),
        mv(n),
        hH().reset(),
        pWe(e),
        tx(e, n, d));
    } catch (p) {
      t(
        `directory move: re-deriving start-of-session state for the new directory failed (continuing): ${p}`,
        { level: "error" }
      );
    }
    return {
      modelMessage: "",
      transcriptRelocated: w,
      projectGrantsGated: !1,
      gatedNotice: "",
      departedAdditionalDirectories: k,
      freshSession: !0
    };
  }
  let C = "";
  try {
    C = await H(e, r, n);
  } catch (p) {
    t(
      `directory move: loading the new directory's memory context failed (continuing without it): ${p}`,
      { level: "error" }
    );
  }
  let v = gf(r),
    T = s === "cd_command" ? "via /cd" : "by the user",
    j =
      m === void 0 || m()
        ? "The environment block at the start of this conversation still names the " +
          "previous directory \u2014 that information is stale. "
        : "",
    A = Bl(
      `The session's working directory has changed to ${v} (${T}). ` +
        j +
        `All tool calls and relative paths now resolve from ${v}. Project settings (permission rules, hooks), project MCP servers, and project skills now come from ${v}; its CLAUDE.md, if any, follows below. Environment variables set by the previous directory's ` +
        "settings stay in effect for this process \u2014 they cannot be unset \u2014 and " +
        "the new directory's settings env is applied on top of them."
    ),
    P = !1;
  try {
    P = !i.CLAUDE_CODE_SANDBOXED && !kC() && !Fg() && rmn();
  } catch (p) {
    t(`directory move: probing the gated project grants failed (continuing): ${p}`, {
      level: "error"
    });
  }
  let _ = P
    ? Bl(
        `Note: ${v} declares project permission rules and/or additional directories in its settings, but they are NOT applied \u2014 the workspace is trusted only through a parent directory's grant, and project-scoped grants require trusting this directory explicitly. Tool calls those rules would have pre-approved will ask for permission.`
      )
    : "";
  return {
    modelMessage: [A, _, C].filter(Boolean).join(`

`),
    transcriptRelocated: w,
    projectGrantsGated: P,
    gatedNotice: _,
    departedAdditionalDirectories: k,
    freshSession: !1
  };
}
function Nhr() {
  (eqe(), ez(), Gi.notifyChange("projectSettings", { trustFlip: !0 }));
}
function $hr(e) {
  if (e.gatedNotice === "") return e.modelMessage;
  return e.modelMessage.replace(
    e.gatedNotice,
    Bl(
      "The user trusted this directory explicitly: its project permission rules and additional directories are now applied."
    )
  );
}
function hgi(e, r) {
  return han.test(e) ? r : e;
}
async function Ski(e, r) {
  if (r.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message:
          "A turn is in progress \u2014 the working directory can only change while the session is idle. Wait for the turn to finish (or interrupt it), then retry."
      }
    };
  if (typeof e.path !== "string" || e.path.trim() === "")
    return {
      kind: "invalid",
      message: "set_cwd: invalid request \u2014 path must be a non-empty string"
    };
  let s = e.trust_accepted === !0;
  if (s && typeof e.trusted_directory !== "string")
    return {
      kind: "invalid",
      message:
        "set_cwd: invalid request \u2014 trust_accepted requires trusted_directory (echo the directory from the needs_trust response)"
    };
  let n = !1;
  try {
    n = ZN(e.path, ut(e.path), r.toolPermissionContext.trustedNetworkDirectories, {
      allowLinkTextClimbs: !0
    }).ok;
  } catch {
    n = !1;
  }
  if (!n)
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target is a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
      }
    };
  let d = await Hhr(e.path.trim(), r.toolPermissionContext),
    u = "directory" in d ? d.directory : d.path;
  if (han.test(u))
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target path contains invisible or non-printing characters (control, formatting, zero-width, or non-standard space characters such as the narrow no-break space macOS puts in screenshot folder names), so it cannot safely cross the trust boundary. The path is deliberately not echoed back."
      }
    };
  if (
    "directory" in d &&
    MD(d.directory, r.toolPermissionContext.trustedNetworkDirectories) !== void 0
  )
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "unsafe_path",
        message:
          "The target resolved to a network path or an obfuscated spelling, which cannot be set as the working directory from a remote host. The path is deliberately not echoed back."
      }
    };
  if (d.result === "not_found")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "not_found",
        message: `Couldn't find a directory at ${d.path}.`
      }
    };
  if (d.result === "not_a_directory")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "not_a_directory",
        message: `${d.path} is not a directory.`
      }
    };
  if (d.result === "blocked_by_rule")
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "blocked_by_rule",
        message: hgi(
          Lhr(d.directory, d.check, void 0, { terminalAffordances: !1 }),
          "A Cd permission rule blocks this directory. The rule text contains control or invisible characters, so it is not echoed here \u2014 check the Cd(...) entries in your settings."
        )
      }
    };
  if (d.result === "same")
    return {
      kind: "response",
      response: { status: "ok", cwd: d.directory, changed: !1, transcript_relocated: !0 }
    };
  let o = d.directory;
  if (!sM(o)) {
    let h = tT(o),
      C = h != null && h !== o && !han.test(h) ? h : void 0;
    if (!s)
      return {
        kind: "response",
        response:
          C != null
            ? { status: "needs_trust", directory: o, trust_root: C }
            : { status: "needs_trust", directory: o }
      };
    if (e.trusted_directory !== o)
      return {
        kind: "response",
        response:
          C != null
            ? { status: "needs_trust", directory: o, trust_root: C }
            : { status: "needs_trust", directory: o }
      };
    await qwe(o, r.storageV5);
  }
  if (r.isBusy())
    return {
      kind: "response",
      response: {
        status: "rejected",
        reason: "busy",
        message:
          "A turn started while the request was being validated. Retry when the session is idle."
      }
    };
  let m = r.isFreshSession(),
    {
      modelMessage: f,
      transcriptRelocated: g,
      departedAdditionalDirectories: y,
      freshSession: k
    } = await UPt(r.session, o, "set_cwd", {
      storageV5: r.storageV5,
      credentials: r.credentials,
      freshSession: m,
      confirmFresh: () => !r.isBusy() && r.isFreshSession(),
      requestBuilt: r.requestBuilt
    });
  try {
    if (k) r.settlePlanAutoMode();
  } catch (h) {
    t(`set_cwd: settling the plan setting for the new directory failed (continuing): ${h}`, {
      level: "error"
    });
  }
  try {
    r.retireDepartedAdditionalDirectories?.(y);
  } catch (h) {
    t(`set_cwd: retiring the previous project's additional directories failed (continuing): ${h}`, {
      level: "error"
    });
  }
  try {
    if (f) r.enqueueMoveNotice(f);
  } catch (h) {
    t(`set_cwd: enqueueing the move notice failed (continuing): ${h}`, { level: "error" });
  }
  let w = fe();
  return {
    kind: "response",
    response: { status: "ok", cwd: han.test(w) ? o : w, changed: !0, transcript_relocated: g },
    freshSession: k
  };
}
export { qwe, Hhr, Lhr, UPt, Nhr, $hr, hgi, Ski };

//# sourceMappingURL=chunk-mnwtt54e.js.map
