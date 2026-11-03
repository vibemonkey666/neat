// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { HXr, LXr } from "./chunk-wrtp8qz8.js";
import { R, d, E, Fs } from "./chunk-fs43t96t.js";
import { g, m, f, fo } from "./chunk-brszmkb3.js";
import { _, te, t } from "./chunk-4kxznmzw.js";
import { Oit } from "./chunk-jazcqqqr.js";
import { vl } from "./chunk-6xjawpfq.js";
import { l } from "./chunk-ewvf3tep.js";
import { We } from "./chunk-pgnjjhxv.js";
import { rE, oc, fc } from "./chunk-vchq4g74.js";
import { n_t } from "./chunk-m99mv31n.js";
import { Ya } from "./chunk-jwqtbev0.js";
import { mkdir as M, readFile as O, rm as W, writeFile as j } from "fs/promises";
import { join as A } from "path";
class xG extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}
var C = /\p{Cc}/u;
function CVs(e) {
  return C.test(e);
}
function Jyt(e) {
  let r = C.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new xG(
      `Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`
    );
  }
}
function Bcn(e) {
  return e === "tmux" || e === "iterm2";
}
function D6n(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function Z0o(e) {
  return e.replaceAll("@", "-");
}
function v(e) {
  return A(Oit(), D6n(e));
}
function uze(e) {
  return A(v(e), "config.json");
}
function S(e) {
  return We.team(D6n(e));
}
function w(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "",
    n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`;
}
function I(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function D(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function h(e) {
  return (
    e.code === "Unavailable" ||
    e.code === "NotFound" ||
    (e.code === "Failed" &&
      (e.failureClass === "permission" ||
        e.failureClass === "resource" ||
        e.failureClass === "environment" ||
        (e.failureClass === "unknown" && Fs(e.cause))))
  );
}
function x(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e,
    n = Array.isArray(r.members) ? r.members.filter(L) : [];
  return Array.isArray(r.members) && n.length === r.members.length ? r : { ...r, members: n };
}
function L(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    "agentId" in e &&
    typeof e.agentId === "string" &&
    "name" in e &&
    typeof e.name === "string"
  );
}
async function MS(e, r) {
  if (r) {
    let n = await r.read([S(e)]);
    if (!n.ok)
      return (t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), null);
    let i = n.value.items[0];
    if (!i.found) return null;
    try {
      return x(te(Buffer.from(i.value).toString("utf8")));
    } catch (a) {
      return (t(`[TeammateTool] Failed to read team file for ${e}: ${d(a)}`), null);
    }
  }
  try {
    let n = await O(uze(e), "utf-8");
    return x(te(n));
  } catch (n) {
    if (E(n) === "ENOENT") return null;
    return (t(`[TeammateTool] Failed to read team file for ${e}: ${d(n)}`), null);
  }
}
function bFr(e, r) {
  if (Fs(r))
    t(`[TeammateTool] Failed to write team file for ${e} (${E(r)}): ${d(r)}`, { level: "error" });
  else if (U(r))
    t(`[TeammateTool] Failed to write team file for ${e}: ${d(r)}`, { level: "error" });
  else l(r);
}
function U(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return !1;
  let r = e.cause;
  if (typeof r !== "object" || typeof r.code !== "string") return !1;
  return h(r);
}
var z = {
  realpath: !1,
  retries: { retries: 10, minTimeout: 5, maxTimeout: 100 },
  onCompromised: () => {}
};
function F(e) {
  return new R(
    `Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`,
    "Team file missing (session team not initialized)"
  );
}
async function KTe(e, r, n, i) {
  if (i) return K(e, r, n, i);
  let a = uze(e),
    u;
  try {
    u = await vl(a, { lockfilePath: `${a}.lock`, ...z });
  } catch (s) {
    if (E(s) === "ENOENT") throw F(e);
    throw s;
  }
  try {
    let s = await MS(e);
    if (!s) throw Error("Team config file unreadable (lock acquired, read failed)");
    let c = r(s);
    if (c === !1) return;
    try {
      await SFr(e, s);
    } catch (y) {
      if (!n?.bestEffortWrite) throw y;
      bFr(e, y);
    }
    return c;
  } finally {
    try {
      await u();
    } catch (s) {
      t(`[TeammateTool] updateTeamFile lock release failed: ${d(s)}`);
    }
  }
}
async function eNo(e, r, n) {
  try {
    await KTe(
      e,
      (i) => {
        let a = i.members.findIndex((u) => u.agentId === r);
        if (a === -1) return !1;
        i.members.splice(a, 1);
      },
      void 0,
      n
    );
  } catch (i) {
    t(`[TeammateTool] removeTeamMember(${r}) failed: ${d(i)}`);
  }
}
async function K(e, r, n, i) {
  let a = S(e),
    u = 5,
    s = n_t(50),
    c,
    y = (p) => {
      if (p === void 0) return { skip: !0, result: { kind: "missing" } };
      let T;
      try {
        T = x(te(Buffer.from(p.value).toString("utf8"))) ?? void 0;
      } catch (P) {
        return { skip: !0, result: { kind: "unreadable", parseError: d(P) } };
      }
      if (!T) return { skip: !0, result: { kind: "unreadable" } };
      let b;
      try {
        b = r(T);
      } catch (P) {
        return { skip: !0, result: { kind: "threw", error: P } };
      }
      if (b === !1) return { skip: !0, result: { kind: "declined" } };
      return ((c = b), { write: _(T, null, 2), result: { kind: "applied", result: b } });
    },
    o;
  for (let p = 1; ; p++) {
    if (((o = await i.update(a, y)), !o.ok)) {
      if (I(o.error) && p < 5) {
        await s(p);
        continue;
      }
      break;
    }
    let T = o.value.result;
    if (T === void 0 || T.kind === "declined") return;
    switch (T.kind) {
      case "missing":
        throw F(e);
      case "unreadable":
        if (T.parseError !== void 0)
          t(`[TeammateTool] Failed to read team file for ${e}: ${T.parseError}`);
        if (p < 5) {
          await s(p);
          continue;
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw T.error;
      case "applied":
        return (g("swarm_team_file_update"), T.result);
      default:
        return T;
    }
  }
  let k = D(o.error);
  if (k) f("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let p = new R(
      `Team file update failed (${w(o.error)}) for ${e}`,
      "Team file update failed (storage v5)"
    );
    if (((p.cause = o.error), !k && !h(o.error))) m("swarm_team_file_update", o.error.code);
    throw p;
  }
  if (!I(o.error) && h(o.error))
    t(`[TeammateTool] Failed to update team file for ${e} (${w(o.error)})`, { level: "error" });
  else {
    let p = new R(
      `Team file update failed (${w(o.error)}) for ${e}`,
      "Team file update failed (storage v5)"
    );
    ((p.cause = o.error), m("swarm_team_file_update", o.error.code), l(p));
  }
  return c;
}
async function SFr(e, r, n) {
  if (n) {
    let a = await n.write(S(e), _(r, null, 2), { precondition: { type: "none" } });
    if (!a.ok) {
      let u = new R(
        `Team file write failed (${w(a.error)}) for ${e}`,
        "Team file write failed (storage v5)"
      );
      throw ((u.cause = a.error), u);
    }
    return;
  }
  let i = v(e);
  (await M(i, { recursive: !0 }), await j(uze(e), _(r, null, 2)));
}
async function j7e(e, r, n) {
  let i = r.agentId || r.name;
  if (!i) return (t("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), !1);
  let a = !1;
  try {
    let u =
      (await KTe(
        e,
        (s) => {
          a = !1;
          let c = s.members.length;
          s.members = s.members.filter((o) => {
            if (r.agentId && o.agentId === r.agentId) return !1;
            if (r.name && o.name === r.name) return !1;
            return !0;
          });
          let y = s.members.length !== c;
          return ((a = !y), y);
        },
        { bestEffortWrite: !0 },
        n
      )) ?? !1;
    if (u) t(`[TeammateTool] Removed teammate from team file: ${i}`);
    else if (a) t(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
    return u;
  } catch (u) {
    return (t(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${d(u)}`), !1);
  }
}
async function jcn(e, r, n, i) {
  let a = !1;
  try {
    let u =
      (await KTe(
        e,
        (s) => {
          let c = s.members.findIndex((o) => o.agentId === r),
            y = s.members[c];
          if (!y) return ((a = !1), !1);
          if (n?.onlyIfJoinedBefore !== void 0 && y.joinedAt >= n.onlyIfJoinedBefore)
            return ((a = !0), !1);
          return ((a = !1), s.members.splice(c, 1), !0);
        },
        { bestEffortWrite: !0 },
        i
      )) ?? !1;
    if (u) t(`[TeammateTool] Removed member ${r} from team ${e}`);
    else if (a)
      t(
        `[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`
      );
    return u;
  } catch (u) {
    return (t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${d(u)}`), !1);
  }
}
async function wFr(e, r, n, i) {
  let a = "unchanged";
  try {
    if (
      (await KTe(
        e,
        (u) => {
          let s = u.members.find((c) => c.name === r);
          if (!s) return ((a = "absent"), !1);
          if (s.mode === n) return ((a = "unchanged"), !1);
          ((a = "set"), (s.mode = n));
        },
        void 0,
        i
      ),
      a === "absent")
    )
      t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);
    else if (a === "set") t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
  } catch (u) {
    t(`[TeammateTool] Cannot set member mode: ${d(u)}`);
  }
}
async function Wcn(e, r, n) {
  if (!fc()) return;
  let i = r ?? oc(),
    a = rE();
  if (i && a) await wFr(i, a, e, n);
}
async function Gcn(e, r, n, i) {
  let a = "unchanged";
  try {
    if (
      (await KTe(
        e,
        (u) => {
          let s = u.members.find((c) => c.name === r);
          if (!s) return ((a = "absent"), !1);
          if (s.isActive === n) return ((a = "unchanged"), !1);
          ((a = "set"), (s.isActive = n));
        },
        void 0,
        i
      ),
      a === "absent")
    )
      t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);
    else if (a === "set")
      t(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
  } catch (u) {
    t(`[TeammateTool] Cannot set member active: ${d(u)}`);
  }
}
function tNo(e) {
  HXr().add(e);
}
async function dRi(e) {
  return fo("swarm_session_cleanup", async () => {
    let r = HXr();
    if (r.size === 0) return;
    let n = Array.from(r);
    (t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`),
      await Promise.allSettled(n.map((i) => V(i, e))),
      await Promise.allSettled(n.map((i) => q(i))),
      r.clear());
  });
}
function B(e, r) {
  return `${e}:${r}`;
}
function nNo(e, r) {
  if (Bcn(e) && r) LXr().add(B(e, r));
}
async function V(e, r) {
  let n = await MS(e, r);
  if (!n) return;
  let i = LXr(),
    a = n.members.filter(
      (o) =>
        o.name !== Ya &&
        o.tmuxPaneId &&
        o.backendType &&
        Bcn(o.backendType) &&
        i.has(B(o.backendType, o.tmuxPaneId))
    );
  if (a.length === 0) return;
  let [{ ensureBackendsRegistered: u, getBackendByType: s }, { isInsideTmux: c }] =
    await Promise.all([import("./chunk-s5jx8snd.js"), import("./chunk-ew63mtrw.js")]);
  await u();
  let y = !(await c());
  await Promise.allSettled(
    a.map(async (o) => {
      if (!o.tmuxPaneId || !o.backendType || !Bcn(o.backendType)) return;
      let k = await s(o.backendType).killPane(o.tmuxPaneId, y);
      t(`cleanupSessionTeams: killPane ${o.name} (${o.backendType} ${o.tmuxPaneId}) \u2192 ${k}`);
    })
  );
}
async function q(e) {
  return fo("swarm_team_cleanup", async () => {
    let r = v(e);
    try {
      (await W(r, { recursive: !0, force: !0 }),
        t(`[TeammateTool] Cleaned up team directory: ${r}`));
    } catch (n) {
      t(`[TeammateTool] Failed to clean up team directory ${r}: ${d(n)}`);
    }
  });
}
export {
  xG,
  CVs,
  Jyt,
  Bcn,
  D6n,
  Z0o,
  uze,
  MS,
  bFr,
  KTe,
  eNo,
  SFr,
  j7e,
  jcn,
  wFr,
  Wcn,
  Gcn,
  tNo,
  dRi,
  nNo
};

//# sourceMappingURL=chunk-7yq9w6fa.js.map
