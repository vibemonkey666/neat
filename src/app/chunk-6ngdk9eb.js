import {
  fileURLToPath as __sourceFilePath_7b790b5ab1819b08,
  URL as __sourceFilePath_7b790b5ab1819b08_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { uc } from "./chunk-n0rk533j.js";
import { nt } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { t } from "./chunk-4kxznmzw.js";
import { W0 } from "./chunk-adv24f35.js";
import { q7n } from "./chunk-yw4wqxm9.js";
import { rr } from "./chunk-ak0cmk10.js";
import { i } from "./chunk-cj37hmns.js";
import { uqe, _Vt, cSn } from "./chunk-9zd34fgb.js";
import { L8n } from "./chunk-4072fsq4.js";
import { Mn } from "./chunk-8gjxvrgz.js";
var SY = "SendFile",
  jzs = "Send one or more files to another Claude Code session";
function Wzs(e, r) {
  return `Send files to another Claude Code session \u2014 a peer session on this machine, or a Remote Control / cloud session on another machine. The receiving Claude gets the files on its own filesystem with @path references, plus your message.

Use this when a file is the thing to hand over \u2014 a doc with figures, a screenshot, a report, a build artifact. For plain text, use ${Mn} instead. For agents inside this session (subagents, teammates), also use ${Mn} \u2014 they share your filesystem and can read the file at its path directly.

\`to\` accepts a peer session name from ${uc}, or an explicit \`uds:<socket>\` / \`bridge:<session id>\` address.

Each file is capped at ${r} MiB, at most ${e} files per send. Files must exist on the local filesystem \u2014 write content to a file first if needed. The receiver verifies each file against a sha256 digest of what was sent (where the transport carries it) and refuses a mismatch with a visible note.

Example: ${SY}({ to: "devbox", files: ["report.pdf", "figures/plot.png"], message: "Here's the doc with figures." })`;
}
var u$r = "Remote Control";
function fLo(e) {
  return uqe(e) ? "cloud" : u$r;
}
var v = 300000;
class _ {
  listed = void 0;
  inFlight = void 0;
  record(e, r, n) {
    this.listed = { at: Date.now(), listed: e, identityKey: r, truncated: n };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var b = new nt(() => new _());
async function Pyt(e = { refresh: !0 }) {
  {
    let { primePeerIdentityOwner: r } = import.meta.require(
      __sourceFilePath_7b790b5ab1819b08(
        new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-5jan5sjs.js", import.meta.url)
      )
    );
    await r(e);
  }
}
function p() {
  let { getPeerBridgeIdentity: e } = import.meta.require(
      __sourceFilePath_7b790b5ab1819b08(
        new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-5jan5sjs.js", import.meta.url)
      )
    ),
    r = e();
  return r?.live ? r.key : null;
}
async function b5n(e, r) {
  {
    let n = p();
    if (!n) return { rows: [], failed: !1, identityKey: null };
    let o = b.of(e),
      s = o.inFlight;
    if (s !== void 0 && s.identityKey === n) return s.promise;
    let { listBridgePeerSessions: a } = import.meta.require(
        __sourceFilePath_7b790b5ab1819b08(
          new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-41hs5s43.js", import.meta.url)
        )
      ),
      l = { record: void 0 },
      c = Date.now(),
      f = (async () => {
        try {
          let g = { failed: !1, truncated: !1 },
            h;
          try {
            h = await a(g, r);
          } catch (y) {
            return (
              t(`[bridge:population] fetch threw: ${d(y)} \u2014 treated as failed`, {
                level: "warn"
              }),
              { rows: [], failed: !0, identityKey: n }
            );
          }
          return (
            t(
              `[bridge:population] fetched ${h.length} rows in ${Date.now() - c}ms${g.failed ? " (FAILED \u2014 not recordable)" : ""}${g.truncated ? " (truncated at page budget)" : ""}`
            ),
            { rows: h, failed: g.failed, ...(g.truncated && { truncated: !0 }), identityKey: n }
          );
        } finally {
          o.settle(l.record);
        }
      })();
    return ((l.record = { identityKey: n, promise: f }), o.begin(l.record), f);
  }
  return { rows: [], failed: !1, identityKey: null };
}
function S5n(e) {
  {
    let r = p();
    return r !== null && e.identityKey === r;
  }
  return !1;
}
function Wdn(e, r, n) {
  {
    let o = p();
    if (!o) return;
    if (r.identityKey !== o) {
      t(
        "[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one"
      );
      return;
    }
    let s = b.of(e);
    if (r.failed) {
      let a = s.listed;
      if (a !== void 0 && a.identityKey === o)
        (s.forget(),
          t(
            "[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)"
          ));
      return;
    }
    (s.record(n, o, r.truncated === !0),
      t(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`));
  }
}
function w5n(e, r) {
  {
    let n = p();
    if (!n || r.identityKey !== n) return;
    let o = b.of(e),
      s = o.listed;
    if (s !== void 0 && s.identityKey === n)
      (o.forget(),
        t("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)"));
  }
}
function v5n(e) {
  return pLo(e)?.rows;
}
function pLo(e) {
  {
    let r = p(),
      n = b.of(e).listed;
    if (!r || n === void 0 || n.identityKey !== r) return;
    let o = Date.now() - n.at;
    if (o >= 0 && o < v)
      return (
        t(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${o}ms)`),
        { rows: n.listed, truncated: n.truncated }
      );
  }
  return;
}
function mLo(e, r, n) {
  let o = _Vt(r),
    s = new Set(n.filter((a) => !cSn(r, a.id)).map((a) => rr(a.id)));
  return e.filter((a) => {
    let l = rr(a.id);
    return !o.has(l) && !s.has(l);
  });
}
function Gdn(e, r) {
  return mLo(e, [], r);
}
function aBt(e) {
  return e === "timeout" || e === "fetch_failed";
}
var I = 30000,
  P = 5000;
class C {
  memo = void 0;
  inFlight = void 0;
  record(e, r, n) {
    if (n !== S()) return;
    this.memo = { at: Date.now(), sessions: e, truncated: r, credential: n };
  }
  begin(e, r) {
    this.inFlight = { promise: e, credential: r };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let r = this.memo;
    if (r === void 0 || r.credential !== e) return;
    let n = Date.now() - r.at;
    return n >= 0 && n < I ? r : void 0;
  }
}
function S() {
  let { walkCredentialKey: e } = import.meta.require(
    __sourceFilePath_7b790b5ab1819b08(
      new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-5jan5sjs.js", import.meta.url)
    )
  );
  return e();
}
var B = new nt(() => new C());
async function g7e(e, r) {
  {
    let { hasCloudPeerAccess: n } = import.meta.require(
      __sourceFilePath_7b790b5ab1819b08(
        new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-t9f04kg3.js", import.meta.url)
      )
    );
    if (!n()) return { sessions: [], unavailable: "gate_off" };
    let { walkCcrSessionList: o } = import.meta.require(
        __sourceFilePath_7b790b5ab1819b08(
          new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-cz68ft82.js", import.meta.url)
        )
      ),
      s = B.of(e),
      a = S(),
      l = s.warm(a);
    if (l !== void 0)
      return { sessions: l.sessions, unavailable: void 0, ...(l.truncated && { truncated: !0 }) };
    let c = s.inFlight,
      f = c !== void 0 && c.credential === a ? c.promise : R(s, o, a, r),
      g = await Pe(f, P);
    if (g === void 0)
      return (
        t(
          `[agents:cloud] session list not ready within ${P}ms \u2014 not searched this call, disclosing`,
          { level: "warn" }
        ),
        { sessions: [], unavailable: "timeout" }
      );
    if (a !== S())
      return (
        t(
          "[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing",
          { level: "warn" }
        ),
        { sessions: [], unavailable: "fetch_failed" }
      );
    return g;
  }
  return { sessions: [], unavailable: void 0 };
}
function R(e, r, n, o) {
  let s = i.CLAUDE_CODE_REMOTE === !0,
    a = s ? rr(i.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (a === "") {
    let { getPeerBridgeIdentity: c } = import.meta.require(
        __sourceFilePath_7b790b5ab1819b08(
          new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-5jan5sjs.js", import.meta.url)
        )
      ),
      f = c()?.bridgeSessionId;
    a = typeof f === "string" ? rr(f) : "";
  }
  let l = (async () => {
    let c,
      f = { truncated: !1 };
    try {
      c = await r({
        status: f,
        throwOnError: !0,
        exhaustive: !0,
        includeBridgeKind: s,
        credentials: o
      });
    } catch (u) {
      return (
        t(
          `[agents:cloud] session list threw: ${u instanceof TypeError ? "malformed session-list response \u2014 " : ""}${q7n(u)}`,
          { level: "error" }
        ),
        { sessions: [], unavailable: "fetch_failed" }
      );
    }
    let g = !1;
    if (s) {
      let { isRemoteControlPeerUnreachableFromHere: u } = import.meta.require(
        __sourceFilePath_7b790b5ab1819b08(
          new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-yad5vxrm.js", import.meta.url)
        )
      );
      g = u();
    }
    let y = (a === "" ? c : c.filter((u) => rr(u.id) !== a)).map((u) => {
      let w = Date.parse(u.last_event_at ?? u.created_at ?? "");
      return {
        id: u.id,
        title: u.title ?? null,
        lastActive: Number.isNaN(w) ? void 0 : w,
        workerStatus:
          u.worker_status === "running" ||
          u.worker_status === "idle" ||
          u.worker_status === "requires_action"
            ? u.worker_status
            : void 0,
        remoteControl: u.environment_kind === "bridge",
        unreachableFromHere: g && u.environment_kind === "bridge",
        ...L8n(u.external_metadata),
        ...(u.environment_kind === "bridge" &&
          u.connection_status === "disconnected" && { offline: !0 })
      };
    });
    return (
      e.record(y, f.truncated, n),
      { sessions: y, unavailable: void 0, ...(f.truncated && { truncated: !0 }) }
    );
  })();
  return (e.begin(l, n), l.finally(() => e.settle(l)), l);
}
function E5n(e) {
  {
    let { hasCloudPeerAccess: r } = import.meta.require(
      __sourceFilePath_7b790b5ab1819b08(
        new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-t9f04kg3.js", import.meta.url)
      )
    );
    if (!r()) return;
    return B.of(e).warm(S())?.sessions;
  }
  return;
}
var lBt = "target is an elevated-security session unreachable from a cloud session",
  dBt = "target session reports it cannot receive cross-session messages";
function gLo(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === lBt) return "bridge_auth";
    if (e.decisionReason.reason === dBt) return "recipient_gate_off";
  }
  return "permission_denied";
}
function Iyt(e, r, n, o) {
  try {
    let s = E5n(e)?.find((c) => rr(c.id) === rr(r));
    if (!s?.unreachableFromHere) return;
    let { formatUnreachableElevatedRefusal: a } = import.meta.require(
        __sourceFilePath_7b790b5ab1819b08(
          new __sourceFilePath_7b790b5ab1819b08_URL("./chunk-yad5vxrm.js", import.meta.url)
        )
      ),
      l;
    try {
      l = s.acceptsPeerMessages === !1 ? void 0 : o?.();
    } catch {
      l = void 0;
    }
    return a(n, l === void 0 ? void 0 : { sendTool: l, sessionId: s.id });
  } catch (s) {
    t(
      `[agents:cloud] warm unreachable lookup failed (${W0(d(s))}) \u2014 treating as not known unreachable`,
      { level: "warn" }
    );
    return;
  }
}
var zdn = "can't receive cross-session messages (off in that session)";
function KGe(e, r, n) {
  try {
    let o = rr(r);
    if (!(
      E5n(e)?.some((a) => rr(a.id) === o && a.acceptsPeerMessages === !1) === !0 ||
      v5n(e)?.some((a) => rr(a.id) === o && a.acceptsPeerMessages === !1) === !0
    ))
      return;
    return `Not sent: '${n}' ${zdn} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (o) {
    t(`[agents:cloud] warm cannot-receive lookup failed (${W0(d(o))}) \u2014 treating as unknown`, {
      level: "warn"
    });
    return;
  }
}
function k5n(e, r) {
  try {
    let n = rr(r),
      o = E5n(e)?.find((a) => rr(a.id) === n),
      s = v5n(e)?.find((a) => rr(a.id) === n);
    if ((o !== void 0 && !o.remoteControl) || (s !== void 0 && uqe(s))) return !1;
    if (s?.inboundReportUnavailable && o?.acceptsPeerMessages === void 0) return !1;
    return !(o?.acceptsPeerMessages === !0 || s?.acceptsPeerMessages === !0);
  } catch (n) {
    return (
      t(
        `[agents:cloud] warm inbound-report lookup failed (${W0(d(n))}) \u2014 treating as unreported`,
        { level: "warn" }
      ),
      !0
    );
  }
}
export {
  u$r,
  fLo,
  Pyt,
  b5n,
  S5n,
  Wdn,
  w5n,
  v5n,
  pLo,
  mLo,
  Gdn,
  aBt,
  g7e,
  E5n,
  lBt,
  dBt,
  gLo,
  Iyt,
  zdn,
  KGe,
  k5n,
  SY,
  jzs,
  Wzs
};

//# sourceMappingURL=chunk-6ngdk9eb.js.map
