import {
  fileURLToPath as __sourceFilePath_cad88bd3b3f643de,
  URL as __sourceFilePath_cad88bd3b3f643de_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br, bg } from "./chunk-6bbdndfe.js";
import {
  pT,
  F,
  L,
  vi,
  nt,
  q,
  ke,
  ao,
  MI,
  Lxe,
  Oq,
  wCt,
  ye,
  dP,
  ars,
  lrs,
  J,
  eg,
  aAn,
  xCt,
  ps
} from "./chunk-wrtp8qz8.js";
import { b, c, ce, Vr } from "./chunk-acd8w9vv.js";
import { Ye, Xd, R, Rr, N, d, G, Us, Vt, EA } from "./chunk-fs43t96t.js";
import { uy, zs, Fq } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m } from "./chunk-brszmkb3.js";
import { Wy, _, te, Vo, Ies, LM, Im, Ui, ie, hh, yc, gf, Yf, Cn, t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { I, re, vC, TSe } from "./chunk-a16y5hcz.js";
import { p } from "./chunk-qmkm2x59.js";
import { Lr, YY, oz, wf } from "./chunk-5z6t3gwt.js";
import { i } from "./chunk-cj37hmns.js";
import { pX, _t, l } from "./chunk-ewvf3tep.js";
import { Jv, vd, nS, $mn, Zu, $9s, Rt, Xye, iXs, tn, BE } from "./chunk-wany0nxw.js";
import { b_, Mlr } from "./chunk-4nzy53ma.js";
import { at, Be } from "./chunk-at88wjsn.js";
import { G9 } from "./chunk-5rw2zfa0.js";
import { Ef, zn, Ki, Ha, yb, st, Hh, Xe, w4o, REt, yl, kn, k, $x } from "./chunk-ajtyjx88.js";
import { Rm, E4t, c6, oi, It } from "./chunk-dc0nzty2.js";
import { vB, fe } from "./chunk-xe386mry.js";
import { _n, oX } from "./chunk-cjnzngfc.js";
import { it, ct } from "./chunk-qmmh8tq2.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Ap } from "./chunk-v4kbwz0z.js";
import { B4t, Zo } from "./chunk-13nwb0xt.js";
import { hs, hn } from "./chunk-wr0p4ndg.js";
import { _r, We } from "./chunk-pgnjjhxv.js";
import { ri } from "./chunk-63a6mqbs.js";
import { Mt, r2, hB } from "./chunk-adv24f35.js";
import { io, jc } from "./chunk-928ws1pg.js";
import { dC, T5r } from "./chunk-7c3thgax.js";
import { Ae, Fn, qx } from "./chunk-dvghjmtr.js";
import { BZe } from "./chunk-bbw420pv.js";
import { Wt, sB } from "./chunk-7svjr0za.js";
import { rm, Lrt, q3o, Y3o, X3o } from "./chunk-1g9x3zw8.js";
import { R0, yR } from "./chunk-r1dvrqha.js";
import { bo } from "./chunk-9zd34fgb.js";
import { gI, rE, oc, Wx } from "./chunk-vchq4g74.js";
import { ez, tGt } from "./chunk-rve8yzwm.js";
import { ht, cf } from "./chunk-gdcb8skc.js";
import { zO } from "./chunk-cn4azb2f.js";
import { Cw } from "./chunk-hhgrzgnb.js";
import { btt, on } from "./chunk-cr7a2cdd.js";
import { jm } from "./chunk-m83s757k.js";
import { TQ } from "./chunk-ybr49gcx.js";
import { D5n } from "./chunk-csvfdyfe.js";
import { ySt, Ejo, B3s, XG, qa, RU, GY, xmn, b$, Q3s, Z3s } from "./chunk-gmxe4kpt.js";
import { oo } from "./chunk-39ayby14.js";
import { Omn, uWr, zi } from "./chunk-ynkasage.js";
import { g3n } from "./chunk-qg3fkqqr.js";
import {
  EJ,
  tRr,
  Lvo,
  LEe,
  knn,
  iLt,
  YPs,
  XPs,
  DA,
  zte,
  rge,
  gpt,
  NOe,
  qjn,
  kP,
  pp,
  H4,
  N4,
  ale,
  Fpt,
  y1,
  nke,
  Wpt,
  pje,
  uMs,
  mje,
  FF,
  kh,
  Ck,
  SD,
  wD,
  Gxr,
  lke,
  pO,
  aPr,
  b0t,
  MDs,
  umt,
  OXe,
  bke,
  mp,
  N0t,
  Ske,
  V4,
  FA,
  mO,
  Gzn,
  rp,
  Uje,
  Mge,
  Ton,
  FIr,
  bAo,
  SAo,
  wAo,
  Cle,
  Gje,
  K0t,
  V0t,
  oLs,
  YXe,
  kAo,
  TAo,
  sNt,
  ILs,
  zAo,
  OLs,
  KAo,
  Jje,
  CS,
  cNt,
  yOr,
  k1,
  NNt,
  vMr,
  zNt,
  hRo,
  ksn,
  UA,
  BMe,
  z3,
  xgt,
  HT,
  Pgt,
  zKn,
  KN,
  jv,
  Oe,
  Fo,
  na
} from "./chunk-j0tbz6ra.js";
import { Jb, CAe, $E, qT } from "./chunk-d5zj5299.js";
import { Ex, oh } from "./chunk-q7wmjzj5.js";
import { mv, H8, Ec } from "./chunk-1fnv3zry.js";
import { ize } from "./chunk-xt7fs806.js";
import { cd, G1 } from "./chunk-5bpsfngr.js";
import { KC } from "./chunk-783pymr7.js";
import { Ght, Xne, iyt, rdn, gY, GQe, ZWs } from "./chunk-6h7ejyet.js";
import { el, I7e, nHe, f6n, zKs, KKs, qC, $d, p6n, VKs } from "./chunk-n3589fe4.js";
import { Li } from "./chunk-f7aya6cs.js";
import { _s } from "./chunk-hk4fpv24.js";
import { YZe } from "./chunk-m5rm7nsm.js";
import {
  UHr,
  vIo,
  EIo,
  Xgt,
  kIo,
  X$t,
  J$t,
  dUs,
  Jgt,
  iY,
  rTe,
  cUs,
  UJe,
  Q$t,
  fUs,
  eFt,
  mUs,
  QVn
} from "./chunk-yxz1j0e5.js";
import { mAe } from "./chunk-mb8tf9mz.js";
import { Da } from "./chunk-6b3j8amt.js";
import { AE, jJe, xUs, QWe, iht, Df, aFt, FK, vy, SLr, Tn } from "./chunk-yyq6mj0n.js";
import { I9n, pjt } from "./chunk-wdvpwq3x.js";
import { zd } from "./chunk-07aq7e5p.js";
import { VTe, IO, Nk, OVs, TY, Zhe, DBt, jL, HBt, LBt, Vv } from "./chunk-bydv9c9r.js";
import { $D, jP, C0o, sHe, R0o } from "./chunk-s72xe0e3.js";
import {
  mx,
  Lk,
  WA,
  S8,
  UTe,
  hKs,
  yKs,
  _Ks,
  bKs,
  SKs,
  wKs,
  vKs,
  nze,
  B1,
  c0o,
  BTe,
  TKs,
  AKs,
  BP,
  CKs,
  t6n
} from "./chunk-s4n2rnah.js";
import { zan } from "./chunk-fnsjs1v2.js";
import { eze } from "./chunk-57dzd89j.js";
import { ND } from "./chunk-egrbwnxe.js";
import { Wze } from "./chunk-f6febadb.js";
import { Kv } from "./chunk-8mtqgphq.js";
import { tze } from "./chunk-5qtb3hv4.js";
import { VQ, dAe, Vde } from "./chunk-y1rk2re8.js";
import { Ufo, Lwr, $wr, sEs } from "./chunk-34151x92.js";
import { e3 } from "./chunk-t7ft03m9.js";
import { U9t } from "./chunk-qnd362wh.js";
import { pSr, YHn, RSs } from "./chunk-m3dmd0bf.js";
import { QDn, l3e } from "./chunk-sb2f74gp.js";
import { cbs, fbs } from "./chunk-0m847w4m.js";
import { xte } from "./chunk-jz8fz1z5.js";
import { EN, S4, kN } from "./chunk-tm6hmh5z.js";
import { aae } from "./chunk-3nrh7z4g.js";
import { D3e, Wct, iBe } from "./chunk-gdqrmwqs.js";
import { cDn, lys, dys } from "./chunk-d02rasrq.js";
import { oIt } from "./chunk-x3wzswk3.js";
import { sIt } from "./chunk-1vw5s89k.js";
import { dDn } from "./chunk-g7nfbdtr.js";
import { ZDn, M_s, oct, JXt } from "./chunk-ck8hzf69.js";
import { c4 } from "./chunk-wjr82d4q.js";
import { FMt } from "./chunk-28117reb.js";
import { IFn, OFn, MFn, hCs, DFn, HFn } from "./chunk-5v1ebyk2.js";
import { len } from "./chunk-98t1ehjk.js";
import { cs } from "./chunk-eacq4pgt.js";
import { _Q, zYn } from "./chunk-9mh6r102.js";
import { BL } from "./chunk-n32nf3yj.js";
import { GL } from "./chunk-hghhgcvq.js";
import { ww } from "./chunk-1wbxh4p6.js";
import { xy } from "./chunk-b10syt1j.js";
import { qn } from "./chunk-0ex22bw7.js";
import { ki } from "./chunk-ngmg7f2n.js";
import { OU } from "./chunk-5bd63sq9.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { nc, _a } from "./chunk-fcym4pv0.js";
import { ge, lr, Tt } from "./chunk-522pfw8k.js";
import { N9 } from "./chunk-tmsmfr3r.js";
import { H } from "./chunk-p8tprgqa.js";
import { o, m4t, v, M, oe, T, u, Ue, $e, Gr, Cv, me, B, A } from "./chunk-0bqrj5ah.js";
import { la } from "./chunk-8fp2d2p3.js";
import { z } from "./chunk-p197ae0z.js";
var wn = p(() => Ue({})),
  vn = p(() =>
    u({
      notifications: T(
        u({
          notification_id: o().describe(
            "Server-assigned stable id \u2014 the dedup key across redeliveries."
          ),
          origin: o().describe(
            'Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown well-formed tokens pass through verbatim, off-grammar values coerce to "unknown").'
          ),
          queued_at: o().describe("RFC3339 timestamp of when the backend queued it."),
          content: o().describe("Verbatim notification body."),
          arrived_at: o()
            .optional()
            .describe(
              "RFC3339 timestamp, by this machine's clock, of when the notification reached this session's queue. Missing from results saved before this field existed."
            )
        })
      ),
      remaining: v().describe(
        "Notifications still queued after this drain (drains are size-budgeted); call the tool again to read them."
      ),
      read_at: o()
        .optional()
        .describe(
          "RFC3339 timestamp, by this machine's clock, of when this call read the queue. Missing from results saved before this field existed."
        )
    })
  ),
  jt = tn({
    name: BP,
    searchHint: "read queued external notifications (webhooks, triggers)",
    backgrounding: "never",
    maxResultSizeChars: pSr,
    persistenceThresholdCeiling: pSr,
    skipAggregateToolResultBudget: !0,
    get inputSchema() {
      return wn();
    },
    get outputSchema() {
      return vn();
    },
    isEnabled: YHn,
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    async description() {
      return CKs;
    },
    async prompt() {
      return t6n;
    },
    toAutoClassifierInput() {
      return "read queued notifications";
    },
    create({ agentId: e, queuedNotificationsRegistry: r }) {
      return {
        async call(n) {
          if (e !== void 0)
            throw Error(
              "ReadNotifications can only be called from the main conversation \u2014 subagents must not drain the session notification buffer."
            );
          let s = new Date(Date.now()).toISOString(),
            { notifications: f, remaining: y } = r.drain();
          return {
            data: {
              notifications: f.map((h) => ({
                notification_id: h.notificationId,
                origin: h.origin,
                queued_at: h.queuedAt,
                content: h.content,
                arrived_at: h.arrivedAt
              })),
              remaining: y,
              read_at: s
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return {
        tool_use_id: r,
        type: "tool_result",
        content: RSs(e.notifications, e.remaining, e.read_at)
      };
    },
    renderToolUseMessage() {
      return "";
    },
    extractSearchText(e) {
      return e.notifications.map((r) => r.content).join(`
`);
    }
  });
import { readFile as Ut, stat as Ht } from "fs/promises";
import { join as qt } from "path";
var Rn = p(() =>
    Ue({
      mode: B(["check", "update", "create", "delete"])
        .default("check")
        .describe(
          "'check' (default): if ONBOARDING.md is present locally, uploads it to the most-recent guide (creates one if none exist); otherwise reports the existing link without uploading. 'update': upload to a specific guide by short_code. 'create': always make a new link. 'delete': remove a guide."
        ),
      short_code: o()
        .regex(/^[A-Za-z0-9_-]{1,64}$/)
        .optional()
        .describe(
          "Short code of a specific guide to target (returned by a previous call). Honored by check, update, and delete \u2014 skips the org-wide lookup and targets this guide directly."
        )
    })
  ),
  En = p(() =>
    u({
      status: B(["created", "updated", "deleted", "has_existing", "unavailable"]),
      share_url: o().optional(),
      short_code: o().optional(),
      message: o()
    })
  ),
  _e = "ONBOARDING.md",
  Ne = 65536,
  Gt = tn({
    name: sHe,
    searchHint: "upload ONBOARDING.md and get a team share link",
    backgrounding: "never",
    maxResultSizeChars: 1000,
    async description() {
      return R0o;
    },
    isEnabled() {
      return sNt();
    },
    isConcurrencySafe() {
      return !1;
    },
    isReadOnly() {
      return !1;
    },
    get inputSchema() {
      return Rn();
    },
    get outputSchema() {
      return En();
    },
    async prompt() {
      return R0o;
    },
    toAutoClassifierInput(e) {
      return `share onboarding guide (mode: ${e.mode ?? "check"})`;
    },
    isDestructive(e) {
      return e.mode === "delete";
    },
    renderToolUseMessage(e) {
      return e.mode && e.mode !== "check" ? e.mode : null;
    },
    create({ credentials: e }) {
      return {
        async call({ mode: r = "check", short_code: n }) {
          if (r === "delete")
            try {
              let h = n ?? (await lt(e))?.short_code;
              if (!h) return pe("No guide found for this org to delete.");
              return (
                await OLs(h, e),
                { data: { status: "deleted", message: `Guide ${h} deleted.` } }
              );
            } catch (h) {
              let S = h instanceof Error ? h.message : String(h);
              return pe(`Delete didn't go through (${S}).`);
            }
          if (r === "check")
            try {
              let h = n ? (await KAo(e)).find((S) => S.short_code === n) : await lt(e);
              if (h) {
                let S = qt(ke(), _e),
                  C = null;
                try {
                  C = (await Ht(S)).size;
                } catch (O) {
                  if (!G(O)) throw O;
                }
                if (C === null)
                  return {
                    data: {
                      status: "has_existing",
                      share_url: h.share_url,
                      short_code: h.short_code,
                      message: `A guide already exists for this org at ${h.share_url} (short_code: ${h.short_code}). If this link is what the user needed, share it. If they want to create or update a guide, tell them to run /team-onboarding themselves (it scans local session data and cannot be invoked by the model).`
                    }
                  };
                if (C > Ne) return pe(`${_e} is over ${Ne / 1024}KB. Trim it before sharing.`);
                let w = await Ut(S, "utf8"),
                  E = await zAo(h.short_code, w, e);
                return dt("updated", E, !1);
              }
            } catch (h) {
              let S = h instanceof Error ? h.message : String(h);
              return pe(`Upload didn't go through (${S}). Fall back to the manual share copy.`);
            }
          let s = qt(ke(), _e),
            f;
          try {
            f = (await Ht(s)).size;
          } catch (h) {
            if (G(h)) return pe(`${_e} not found in the current directory. Write the guide first.`);
            throw h;
          }
          if (f > Ne) return pe(`${_e} is over ${Ne / 1024}KB. Trim it before sharing.`);
          let y = await Ut(s, "utf8");
          try {
            if (r === "update") {
              let S = n ?? (await lt(e))?.short_code;
              if (S) {
                let C = await zAo(S, y, e);
                return dt("updated", C, !0);
              }
            }
            let h = await ILs(y, void 0, e);
            return dt("created", h, !1);
          } catch (h) {
            let S = h instanceof Error ? h.message : String(h);
            return pe(`Upload didn't go through (${S}). Fall back to the manual share copy.`);
          }
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return { tool_use_id: r, type: "tool_result", content: `[${e.status}] ${e.message}` };
    }
  });
async function lt(e) {
  let r = await KAo(e);
  if (r.length === 0) return;
  return r.reduce((n, s) => (n.updated_at > s.updated_at ? n : s));
}
function dt(e, r, n) {
  let s = n
      ? `

Close with: "Here's your onboarding guide: ${r.share_url}" followed by the send-to-teammates line.`
      : "",
    f = "";
  return {
    data: {
      status: e,
      share_url: r.share_url,
      short_code: r.short_code,
      message: `Share link ${e}: ${r.share_url} (short_code: ${r.short_code})${s}`
    }
  };
}
function pe(e) {
  return { data: { status: "unavailable", message: e } };
}
var Kt = 1e4;
function Yt(e, r) {
  try {
    let n = Object.getPrototypeOf(r);
    if (n !== Object.prototype && n !== null) return de("not_an_object");
    let s = Object.keys(r),
      f = s[0];
    if (f === void 0 || s.length > 1) return de("unknown_field");
    if (Object.keys(e).length > 0) return de("changed_shown_field");
    let y = r[f];
    switch (f) {
      case "role":
        if (typeof y !== "string") return de("response");
        return y.length > 9991 || JSON.stringify(y).length > 9991
          ? de("too_large")
          : { kind: "admitted", input: { role: y } };
      case "dismissed":
        return y === !0 ? { kind: "admitted", input: { dismissed: !0 } } : de("response");
      default:
        return de("unknown_field");
    }
  } catch {
    return de("threw");
  }
}
function de(e) {
  return { kind: "refused", rule: e };
}
var In = p(() => Ue({})),
  On = p(() => u({ role: o().optional(), dismissed: M().optional() }));
function An() {
  return i.CLAUDE_CODE_REMOTE;
}
var Xt = tn({
  name: BTe,
  searchHint: "show the Cowork onboarding role picker",
  backgrounding: "never",
  maxResultSizeChars: Kt,
  get inputSchema() {
    return In();
  },
  get outputSchema() {
    return On();
  },
  isEnabled: An,
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  requiresUserInteraction() {
    return !0;
  },
  admitCardAnswer: Yt,
  async description() {
    return TKs;
  },
  async prompt() {
    return AKs;
  },
  toAutoClassifierInput() {
    return "show onboarding role picker";
  },
  create() {
    return {
      async checkPermissions(e) {
        return { behavior: "ask", message: "Pick your role?", updatedInput: {} };
      },
      async call(e) {
        let { role: r, dismissed: n } = e;
        return {
          data: {
            ...(typeof r === "string" && r.trim() !== "" && { role: r }),
            ...(typeof n === "boolean" && { dismissed: n })
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: _(e) };
  },
  renderToolUseMessage() {
    return null;
  }
});
function Qt(e, r) {
  try {
    let n = Object.getPrototypeOf(r);
    if (n !== Object.prototype && n !== null) return Fe("not_an_object");
    let s = {};
    for (let f of Object.keys(e)) {
      if (!Object.hasOwn(r, f) || r[f] !== e[f]) return Fe("changed_shown_field");
      s[f] = e[f];
    }
    for (let f of Object.keys(r)) {
      if (Object.hasOwn(e, f)) continue;
      if (f !== "outcome") return Fe("unknown_field");
      if (r[f] === "connected") s.outcome = "connected";
    }
    return { kind: "admitted", input: s };
  } catch {
    return Fe("threw");
  }
}
function Fe(e) {
  return { kind: "refused", rule: e };
}
var xn = "tengu_brass_kite",
  Pn = "tengu_gentle_dijkstra";
function Dn() {
  return b_() ? Pn : xn;
}
function pyr() {
  return Fn() && H4() && Nn() && wCt() && len() && Ln();
}
function Ln() {
  let e = zi();
  if (e.chromeSetupOfferArm !== void 0) return e.chromeSetupOfferArm;
  if (e.chromeSetupOfferStateUnread || !Mn()) return !1;
  let { value: r, source: n } = kn(Dn(), !1);
  if (n === "fallback" || n === "disabled") return !1;
  return ((e.chromeSetupOfferArm = r === !0), e.chromeSetupOfferArm);
}
function Sgs(e, r) {
  let n = uWr.of(e.host);
  if (r !== void 0 && mAe(r)) n.lastTurnClientPlatform = r;
  else if (n.lastTurnClientPlatform === void 0) n.lastTurnClientPlatform = null;
}
function Zt(e, r) {
  return Omn(r !== void 0 && mAe(r) ? r : uWr.of(e.host).lastTurnClientPlatform);
}
function mt() {
  return b_();
}
function Mn() {
  if (!mt()) return !0;
  let e = zi().lastTurnClientPlatform;
  return e !== void 0 && e !== null && !Omn(e);
}
function Jt() {
  return $n() || len();
}
function Nn() {
  return Ef() && oh() && !Ex().includes(UTe);
}
function $n() {
  return xCt().has("tool_attempted");
}
var Bn = new nt(() => ({ calls: 0 }));
function je(e, r, n) {
  let s = Bn.of(e);
  (s.calls++,
    a("tengu_chrome_setup_offered", {
      outcome: c(r),
      nth_call: s.calls,
      chrome_tool_attempted: xCt().has("tool_attempted"),
      isRemoteSession: Boolean(i.CLAUDE_CODE_REMOTE_SESSION_ID),
      ...(n && { messageClientPlatform: y1(n) })
    }));
}
var jn = p(() =>
    Ue({
      reason: o()
        .max(200)
        .optional()
        .describe("A short phrase naming what the task needs the user's own browser for.")
    })
  ),
  Wn = p(() => u({ outcome: B(["connected", "not_now", "no_attempt_yet"]) }));
function Un(e) {
  let { reason: r } = e;
  return r === void 0 ? {} : { reason: r };
}
var eo = tn({
  name: UTe,
  searchHint: "offer the user Claude in Chrome setup for their own browser",
  shouldDefer: !0,
  whenToUse: hKs,
  backgrounding: "never",
  maxResultSizeChars: 2000,
  get inputSchema() {
    return jn();
  },
  get outputSchema() {
    return Wn();
  },
  isEnabled: pyr,
  isConcurrencySafe() {
    return !1;
  },
  isReadOnly() {
    return !0;
  },
  requiresUserInteraction() {
    return !0;
  },
  admitCardAnswer: Qt,
  async description() {
    return yKs;
  },
  async prompt() {
    return _Ks;
  },
  toAutoClassifierInput(e) {
    return e.reason ? `offer Claude in Chrome setup: ${e.reason}` : "offer Claude in Chrome setup";
  },
  create({ messageClientPlatform: e, session: r }) {
    return {
      async validateInput() {
        if (mt() && Zt(r, e))
          return (je(r, "phone", e), { result: !1, message: wKs, errorCode: 2 });
        if (Jt()) return { result: !0 };
        return (je(r, "no_attempt_yet", e), { result: !1, message: vKs, errorCode: 1 });
      },
      async checkPermissions(n) {
        return {
          behavior: "ask",
          message: "Set up Claude in Chrome?",
          suppressAlwaysAllowRule: !0,
          updatedInput: Un(n)
        };
      },
      async call(n) {
        let { outcome: s } = n,
          f = s === "connected" ? "connected" : "not_now";
        return (je(r, f, e), { data: { outcome: f } });
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: e.outcome === "connected" ? bKs : SKs };
  },
  renderToolUseMessage(e) {
    return e.reason ?? null;
  }
});
var iMn = {
  name: "AutoModeScanTask",
  type: "auto_mode_scan",
  async kill(e, r) {
    let n = !1;
    if (
      (r.update(e, (s) => {
        if (s.status !== "running") return s;
        return (
          s.abortController?.abort(),
          (n = !0),
          { ...s, status: "killed", endTime: Date.now(), notified: !0, abortController: void 0 }
        );
      }),
      n)
    )
      Ha(e, "stopped", { skipTranscript: !0, ambient: !0 });
  }
};
var aMn = {
  name: "DreamTask",
  type: "dream",
  async kill(e, r) {
    let n, s;
    if (
      (r.update(e, (f) => {
        if (f.status !== "running") return f;
        return (
          f.abortController?.abort(),
          (n = f.priorMtime),
          (s = f.storageV5),
          { ...f, status: "killed", endTime: Date.now(), notified: !0, abortController: void 0 }
        );
      }),
      n !== void 0)
    )
      (Ha(e, "stopped", { skipTranscript: !0, ambient: !0 }), await sIt(n, s));
  }
};
var lMn = {
  name: "LocalAgentTask",
  type: "local_agent",
  async kill(e, r, n, s) {
    FA(e, r, s);
  }
};
var dMn = {
  name: "LocalMemoryImportTask",
  type: "local_memory_import",
  async kill(e, r) {
    let n = !1;
    if (
      (r.update(e, (s) => {
        if (s.status !== "running") return s;
        return (
          s.abortController?.abort(),
          (n = !0),
          { ...s, status: "killed", endTime: Date.now(), notified: !0, abortController: void 0 }
        );
      }),
      n)
    )
      Ha(e, "stopped", { skipTranscript: !0, ambient: !0 });
  }
};
var cMn = {
  name: "LocalShellTask",
  type: "local_bash",
  async kill(e, r) {
    V4(e, r);
  }
};
var to = {
  name: "MonitorMcpTask",
  type: "monitor_mcp",
  async kill(e, r) {
    Hn(e, r);
  }
};
function Hn(e, r, n) {
  $wr(e, r, {
    ...n,
    onKilled: () => {
      n?.onKilled?.();
      let { streamedMonitorStops: s } = zn(),
        f = s.get(e);
      s.delete(e);
      try {
        f?.();
      } catch (y) {
        l(N(y));
      }
    }
  });
}
class ro {
  dispatch = void 0;
  lookup(e) {
    return ((this.dispatch ??= Vn()), this.dispatch.get(e));
  }
}
var Kn = new ro();
function Vn() {
  let e = [
    cMn,
    lMn,
    Jje,
    aMn,
    iMn,
    dMn,
    to,
    sEs,
    JXt,
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-7qpdk161.js", import.meta.url)
      )
    ).LocalWorkflowTask
  ];
  return (
    e.push(
      import.meta.require(
        __sourceFilePath_cad88bd3b3f643de(
          new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-qbx6p7zc.js", import.meta.url)
        )
      ).MCP_TASK
    ),
    new Map(e.map((r) => [r.type, r]))
  );
}
function wdt(e) {
  return Kn.lookup(e);
}
function Ce(e) {
  return !cs(e.status) || pO(e);
}
function He(e, r, n) {
  let s = r.all(),
    f = ZDn(e, s),
    y = lo((w) => w === e, r, n);
  if (f.status !== "not_found" && y) {
    let w = f.status === "found" ? [f.task.identity.agentId] : f.candidates,
      E = f.status === "found" ? Ce(f.task) : f.anyLive;
    return { status: "ambiguous", message: so(e, w, y.id), anyLiveCandidate: E || Ce(y) };
  }
  if (f.status === "ambiguous")
    return { status: "ambiguous", message: no(e, f.candidates), anyLiveCandidate: f.anyLive };
  if (f.status === "found") return { status: "found", task: f.task };
  if (y) return { status: "found", task: y };
  let h = bo(e),
    S = Xn(h, s),
    C = lo((w) => bo(w) === h, r, n);
  if (S.length > 0 && C)
    return {
      status: "ambiguous",
      message: so(
        e,
        S.map((w) => w.identity.agentId),
        C.id
      ),
      anyLiveCandidate: S.some(Ce) || Ce(C)
    };
  if (S.length > 1)
    return {
      status: "ambiguous",
      message: no(
        e,
        S.map((w) => w.identity.agentId)
      ),
      anyLiveCandidate: S.some(Ce)
    };
  if (S.length === 1) return { status: "found", task: S[0] };
  if (C) return { status: "found", task: C };
  return { status: "not_found", suggestion: Yn(h, r, n) };
}
function no(e, r) {
  return `Multiple teammates match "${r2(e)}": ${r.map((n) => r2(n)).join(", ")}. Use the full address (name@team).`;
}
function so(e, r, n) {
  return `"${r2(e)}" matches both teammate ${r.map((s) => r2(s)).join(", ")} and background agent ${r2(n)}. Use the full address (name@team) for the teammate or the task ID for the background agent.`;
}
function Yn(e, r, n) {
  let s = new Map();
  for (let h of oct(r.all())) {
    if (h.status !== "running") continue;
    s.set(bo(h.identity.agentName), h.identity.agentId);
  }
  let f = n?.().agentNameRegistry;
  if (f)
    for (let [h, S] of f) {
      let C = r.get(S);
      if (C?.type === "local_agent" && (C.status === "running" || pO(C))) s.set(bo(h), h);
    }
  let y = G9(e, [...s.keys()], 1)[0];
  return y === void 0 ? void 0 : s.get(y);
}
function Xn(e, r) {
  let n = new Map();
  for (let y of oct(r)) {
    if (bo(y.identity.agentName) !== e) continue;
    let h = n.get(y.identity.agentId);
    if (!h || (h.status !== "running" && y.status === "running")) n.set(y.identity.agentId, y);
  }
  let s = [...n.values()],
    f = s.filter((y) => y.status === "running");
  return f.length > 0 ? f : s;
}
function lo(e, r, n) {
  let s = n?.().agentNameRegistry;
  if (!s) return;
  for (let [f, y] of s) {
    if (!e(f)) continue;
    let h = r.get(y);
    if (h?.type === "local_agent") return h;
  }
  return;
}
function uo(e, r, n) {
  let s = new Set(r?.().agentNameRegistry?.values() ?? []),
    f = Object.values(e.all())
      .filter(
        (y) =>
          y.type === "local_agent" &&
          y.id !== n &&
          y.agentType !== "main-session" &&
          y.isBackgrounded &&
          y.isObserver !== !0 &&
          !s.has(y.id) &&
          (y.status === "running" || pO(y))
      )
      .map((y) => (y.description ? `${y.id} (${Mt(y.description)})` : y.id));
  return f.length > 0 ? `. Running background agents: ${f.join(", ")}` : "";
}
function D9t(e) {
  for (let r of zn().cascadeStopExemptions) if (r(e)) return !0;
  return !1;
}
function myr(e, r, n) {
  let s = "agentId" in e && typeof e.agentId === "string" ? e.agentId : void 0;
  return s !== void 0 && D9t(s) && aFt(e, r, n, (f) => f !== s && D9t(f));
}
function gyr(e, r, n, s) {
  if (r.length === 0) return;
  zn().cascadeSpared.emit({ stoppedAgentId: e, sparedAgentIds: r, killedBy: n, taskRegistry: s });
}
class ue extends Rr {
  code;
  taskStatus;
  constructor(e, r, n) {
    super(e, `StopTask: ${r}`, "stop_task_refused");
    this.code = r;
    this.taskStatus = n;
    this.name = "StopTaskError";
  }
}
function Qn(e, r) {
  let n = r?.().agentNameRegistry?.entries();
  if (!n) return [];
  let s = [];
  for (let [f, y] of n) {
    let h = e.get(y);
    if (h?.type === "local_agent" && (h.status === "running" || pO(h))) s.push(f);
  }
  return s;
}
function pt(e, r, n, s, f) {
  let y = M_s(r.all()),
    h = Qn(r, n),
    S = `No task found with ID: ${r2(e)}`;
  if (s !== void 0) S += `. Did you mean: ${r2(s)}?`;
  if (y.length > 0) S += `. Running teammates: ${y.map((C) => r2(C)).join(", ")}`;
  if (h.length > 0) S += `. Running named agents: ${h.map((C) => r2(C)).join(", ")}`;
  return S + uo(r, n, f);
}
var Zn =
  "No result will follow. The MCP server may already have done some of the work, or may still finish it.";
async function ZPe(e, r) {
  let {
      taskRegistry: n,
      setAppState: s,
      getAppState: f,
      callerAgentId: y,
      killedBy: h = "user",
      storageV5: S
    } = r,
    C = e,
    w = n.get(C),
    E;
  if (!w) {
    let W = He(e, n, f);
    if (W.status === "ambiguous") {
      if (!W.anyLiveCandidate) throw new ue(W.message, "not_running", "completed");
      throw new ue(W.message, "ambiguous");
    }
    if (W.status === "found") ((w = W.task), (C = W.task.id));
    else E = W.suggestion;
  }
  if (!w) throw new ue(pt(e, n, f, E, y), "not_found");
  let O = C === e ? C : `${r2(e)} (${C})`;
  if (Df(w)) {
    if (y !== void 0 && y === w.agentId)
      throw new ue(
        `Observer ${O} cannot stop itself; use the task UI or a main-session TaskStop.`,
        "not_owner"
      );
    if (!iyt(y, w.agentId))
      throw new ue(
        `Task ${O} is owned by ${r2(rdn(w.agentId))}; agent ${r2(String(y))} cannot stop it.`,
        "not_owner"
      );
    if (r.source !== void 0) FMt(r.session, C, { agentType: w.agentType }, S);
    if (w.status !== "running" && !(cs(w.status) && !AE(C)))
      return (FA(C, n), { taskId: C, taskType: w.type, command: w.description });
  }
  let D = w.status !== "running" && w.type === "monitor_ws" && r.source !== void 0,
    x = ft(w, C),
    j = x ? jJe(C) : void 0;
  if (w.status !== "running" && !pO(w) && !D && !x)
    throw new ue(`Task ${O} is not running (status: ${w.status})`, "not_running", w.status);
  if (!Df(w) && !iyt(y, w.agentId))
    throw new ue(
      `Task ${O} is owned by ${r2(rdn(w.agentId))}; agent ${r2(String(y))} cannot stop it.`,
      "not_owner"
    );
  let Y = wdt(w.type);
  if (!Y) throw new ue(`Unsupported task type: ${w.type}`, "unsupported_type");
  if (r.source !== void 0) Bpe(C, n, S);
  if (x) {
    let W = xUs(C);
    if (W && !W.signal.aborted) W.abort();
    for (let X of iht(C)) X.abort(new DOMException("workflow-abort", "AbortError"));
    let U = new Set(QWe(C));
    if (w.type === "local_agent") U.add(C);
    let V = 0;
    for (let X of U) {
      if (jJe(C) !== j) break;
      let le = gpt(X);
      (qjn(le), (V += (await le).length));
    }
    return (
      NOe(C, w.type === "local_agent" ? [C] : [], { expectedLoopToken: j }),
      {
        taskId: C,
        taskType: w.type,
        command: pp(w) ? w.command : w.description,
        note: `had already ended (${w.status}) but its loop had not exited; re-signalled it and killed ${V} process group(s). The record remains listed while the loop is still live.`
      }
    );
  }
  let P = pO(w);
  if ((await Y.kill(C, n, s, h, S), P)) {
    let W = w.agentId ?? C,
      U = n.all(),
      V = [];
    for (let X of Object.values(U)) {
      if (X.type !== "local_agent" || X.id === C || (X.status !== "running" && !pO(X))) continue;
      if (myr(X, W, U)) {
        V.push(X.id);
        continue;
      }
      if (aFt(X, W, U, D9t)) {
        if ((mO(X.id, n), !Df(X)))
          Ha(X.id, "stopped", { toolUseId: X.toolUseId, summary: X.description });
        if (r.source !== void 0) Bpe(X.id, n, S);
        await Y.kill(X.id, n, s, h, S);
      }
    }
    gyr(W, V, h, n);
  }
  if (pp(w)) {
    let W = !1;
    if (
      (n.update(C, (U) => {
        if (U.notified) return U;
        return ((W = !0), { ...U, notified: !0 });
      }),
      W)
    )
      Ha(C, "stopped", { toolUseId: w.toolUseId, summary: w.description });
  }
  if (pp(w) && w.agentId !== void 0 && y !== w.agentId)
    Ufo({ taskId: C, toolUseId: w.toolUseId, description: w.description, ownerAgentId: w.agentId });
  if (pp(w) && w.agentId === void 0 && r.source !== void 0 && rge())
    Lwr({
      taskId: C,
      toolUseId: w.toolUseId,
      description: w.description,
      source: r.source,
      outputFile: w.elsewhere ? Wt(w.outputFile) : w.outputFile
    });
  if (w.type === "mcp_task" && r.source !== void 0 && rge() && n.get(C)?.status === "killed")
    Lwr({
      taskId: C,
      toolUseId: w.toolUseId,
      description: w.description,
      source: r.source,
      note: Zn
    });
  let K = pp(w) ? w.command : w.description;
  return { taskId: C, taskType: w.type, command: K };
}
async function eIe(e, r) {
  try {
    (await ZPe(e, r), g("task_stop_user"));
  } catch (n) {
    if (n instanceof ue) {
      if (n.code === "not_found") {
        if (r.source !== void 0 && bg(e) !== null)
          xgt(
            Br(e),
            "stoppedByUser",
            () => z3(Br(e), { stoppedByUser: !0 }, r.storageV5, Us),
            r.storageV5
          );
        g("task_stop_user");
        return;
      }
      if (n.code === "not_running" && n.taskStatus !== void 0 && cs(n.taskStatus)) {
        g("task_stop_user");
        return;
      }
      throw (m("task_stop_user", n.code), n);
    }
    throw (m("task_stop_user", "unexpected"), n);
  }
}
function Upe(e) {
  let { taskRegistry: r, setAppState: n, shouldStop: s, storageV5: f } = e;
  H9t(e);
  for (let y of Object.values(r.all())) {
    let h = pO(y) && FK(y);
    if (Df(y) || (!h && (y.status !== "running" || !vy(y) || !FK(y))) || (s !== void 0 && !s(y)))
      continue;
    if ((Bpe(y.id, r, f), y.type === "local_agent")) (mO(y.id, r), Gzn(y.id));
    if ((wdt(y.type)?.kill(y.id, r, n, "system", f), y.type === "local_agent"))
      Ha(y.id, "stopped", { toolUseId: y.toolUseId, summary: y.description });
  }
}
function H9t(e) {
  for (let r of Object.values(e.taskRegistry.all()))
    if (Df(r) && r.status === "running")
      wdt(r.type)?.kill(r.id, e.taskRegistry, e.setAppState, "system");
}
function Bpe(e, r, n) {
  r.update(e, (f) =>
    Tn(f)
      ? { ...f, stoppedByUser: !0, userStopCount: (f.userStopCount ?? 0) + 1 }
      : f.stoppedByUser
        ? f
        : { ...f, stoppedByUser: !0 }
  );
  let s = r.get(e);
  if (s?.type === "local_agent") {
    let f = "agentType" in s && typeof s.agentType === "string" ? s.agentType : "general-purpose";
    Jn(e, f, n);
  }
}
function ft(e, r) {
  return cs(e.status) && (e.type === "local_agent" || e.type === "local_workflow") && !AE(r);
}
async function Jn(e, r, n) {
  await xgt(
    Br(e),
    "stoppedByUser",
    async () => {
      let s = await HT(Br(e), n, Us);
      if (s?.stoppedByUser) return;
      await BMe(Br(e), { ...(s ?? { agentType: r }), stoppedByUser: !0 }, n);
    },
    n
  );
}
var mo = p(() =>
    Ue({
      task_id: o()
        .optional()
        .describe(
          "The ID of the background task to stop. Agent-team teammates and named background agents are also accepted by agent ID or name."
        ),
      shell_id: o().optional().describe("Deprecated: use task_id instead")
    })
  ),
  es = p(() => mo().extend(YY())),
  ts = p(() =>
    u({
      message: o().describe("Status message about the operation"),
      task_id: o().describe("The ID of the task that was stopped"),
      task_type: o().describe("The type of the task that was stopped"),
      command: o().optional().describe("The command or description of the stopped task")
    })
  ),
  qe = tn({
    name: $d,
    searchHint: "kill a running background task",
    aliases: [...p6n],
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    userFacingName: () => "Stop Task",
    get remoteExecution() {
      return { supported: gY() };
    },
    get inputSchema() {
      return gY() ? es() : mo();
    },
    get outputSchema() {
      return ts();
    },
    shouldDefer: !0,
    isConcurrencySafe() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.task_id ?? e.shell_id ?? "";
    },
    async description() {
      return "Stop a running background task by ID";
    },
    async prompt() {
      return VKs;
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return { tool_use_id: r, type: "tool_result", content: _(e) };
    },
    renderToolUseMessage() {
      return "";
    },
    create(e) {
      return {
        async validateInput(r, n) {
          let { taskRegistry: s, namedAgents: f } = e;
          if (wf(r)) return { result: !1, message: oz(), errorCode: 3 };
          let y = r.task_id ?? r.shell_id;
          if (!y)
            return { result: !1, message: "Missing required parameter: task_id", errorCode: 1 };
          let h = n.remoteCall;
          if (h !== void 0)
            return h.ownBackgroundShells?.holds(y) === !0
              ? { result: !0 }
              : { result: !1, message: co(y, h), errorCode: 1 };
          let S = s.get(y),
            C;
          if (!S) {
            let w = He(y, s, f);
            if (w.status === "ambiguous") return { result: !1, message: w.message, errorCode: 1 };
            if (w.status === "found") S = w.task;
            else C = w.suggestion;
          }
          if (!S) {
            let w = Xne(e),
              E = gY() ? e.toolState.get(GQe).find(y, w) : void 0;
            return {
              result: !1,
              message: E !== void 0 ? `Task ${y} needs ${Lr}: "${E.hostName}".` : pt(y, s, f, C, w),
              errorCode: 1
            };
          }
          if (S.status !== "running" && !pO(S) && !Df(S) && !ft(S, S.id))
            return {
              result: !1,
              message: `Task ${y} is not running (status: ${S.status})`,
              errorCode: 3
            };
          return { result: !0 };
        },
        async call({ task_id: r, shell_id: n }, s) {
          let { taskRegistry: f, setTaskKillState: y, namedAgents: h } = e,
            S = r ?? n;
          if (!S) throw Error("Missing required parameter: task_id");
          let C = s.remoteCall;
          if (C !== void 0)
            return {
              data: {
                message:
                  C.ownBackgroundShells?.stop(S) === !0
                    ? `Successfully stopped background command ${S} on ${C.origin.hostName}`
                    : co(S, C),
                task_id: S,
                task_type: "local_bash"
              }
            };
          let w = await ZPe(S, {
            taskRegistry: f,
            setAppState: y,
            session: e.session,
            getAppState: h,
            callerAgentId: Xne(e),
            killedBy: "parent",
            storageV5: e.storageV5
          });
          return {
            data: {
              message: w.note
                ? `Task ${w.taskId} ${w.note}`
                : `Successfully stopped task: ${w.taskId} (${w.command})`,
              task_id: w.taskId,
              task_type: w.taskType,
              command: w.command
            }
          };
        }
      };
    }
  });
function co(e, r) {
  return `No background command with ID ${e} is running on ${r.origin.hostName} for this session: it has already finished or been stopped, or it was never this session's.`;
}
var os = p(() =>
    Ue({
      file_uuid: o(),
      file_name: o(),
      size: v(),
      is_image: M(),
      media_type: o().optional()
    }).describe(
      "A file already uploaded to the filestore (e.g. by the device attach_file tool). Passed through without local stat or upload."
    )
  ),
  fo = "The message for the user. Supports markdown formatting.",
  rs = p(() =>
    Ue({
      message: o().describe(fo),
      attachments: T($e([o(), os()]))
        .optional()
        .describe(
          "Optional attachments for the user to see alongside your message. Each entry is either a file path (absolute or relative to cwd) for a file you can read locally, or a pre-resolved {file_uuid, file_name, size, is_image} object you obtained from a device tool such as attach_file."
        ),
      status: B(["normal", "proactive"]).describe(
        "Use 'proactive' when you're surfacing something the user hasn't asked for and needs to see now \u2014 task completion while they're away, a blocker you hit, an unsolicited status update. Use 'normal' when replying to something the user just said."
      )
    })
  ),
  ns = p(() => u({ message: o().describe(fo) }));
function po(e) {
  return ND() && "attachments" in e ? e.attachments : void 0;
}
var ss = p(() =>
    u({
      message: o().describe("The message"),
      attachments: T(
        u({
          path: o(),
          size: v(),
          isImage: M(),
          file_uuid: o().optional(),
          media_type: o().optional(),
          pathValidated: M().optional(),
          upload_error: o().optional(),
          upload_error_code: o().optional(),
          upload_suspected_limit_bytes: v().optional(),
          scaled: u({
            width: v(),
            height: v(),
            original_width: v(),
            original_height: v()
          }).optional()
        })
      )
        .optional()
        .describe("Resolved attachment metadata"),
      sentAt: o()
        .optional()
        .describe(
          "ISO timestamp captured at tool execution on the emitting process. Optional \u2014 resumed sessions replay pre-sentAt outputs verbatim."
        ),
      rendered_locally: M().optional()
    })
  ),
  ho = tn({
    name: rm,
    aliases: [Lrt],
    searchHint: "send a message to the user \u2014 your primary visible output channel",
    briefStandalone: !0,
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    userFacingName() {
      return "";
    },
    get inputSchema() {
      return ND() ? rs() : ns();
    },
    get outputSchema() {
      return ss();
    },
    isEnabled() {
      return ND() || eze();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.message;
    },
    async description() {
      return q3o;
    },
    async prompt() {
      return ND() ? Y3o : X3o;
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let n = (e.attachments ?? []).map((C) => ({
          ...C,
          path: yc(C.path),
          ...(C.upload_error !== void 0 && { upload_error: gf(C.upload_error) })
        })),
        s = n.filter((C) => C.upload_error !== void 0),
        f = n.length - s.length,
        y = HFn(n),
        h =
          (f === 0 ? "" : ` (${f} ${I(f, "attachment")} included)`) +
          (y === void 0
            ? ""
            : `
${y}`);
      if (s.length === 0)
        return { tool_use_id: r, type: "tool_result", content: `Message delivered to user.${h}` };
      let S = s.map((C) => `  ${C.path}: ${I9n(C)}`).join(`
`);
      if (e.rendered_locally)
        return {
          tool_use_id: r,
          type: "tool_result",
          content:
            `Message delivered to user.${h}
${s.length} ${I(s.length, "attachment")} NOT delivered to Remote Control (phone/web) viewers \u2014 only visible in the desktop app on this machine:
` +
            S +
            `
Tell the user the ${I(s.length, "attachment is", "attachments are")} only visible in the desktop app, and why.${pjt(s)}`
        };
      return {
        tool_use_id: r,
        type: "tool_result",
        is_error: !0,
        content:
          `Message delivered to user.${h}
${s.length} ${I(s.length, "attachment")} could NOT be delivered:
` +
          S +
          `
Tell the user the ${I(s.length, "attachment was", "attachments were")} not delivered and why.${pjt(s)}`
      };
    },
    renderToolUseMessage() {
      return "";
    },
    create(e) {
      return {
        async validateInput(r) {
          let n = po(r);
          if (!n?.length) return { result: !0 };
          return MFn(n, e.permissions());
        },
        async call(r, n) {
          let { message: s } = r,
            f = po(r),
            y = new Date().toISOString(),
            h = IFn({ replBridgeEnabled: e.replBridgeEnabled() });
          if (
            (a("tengu_brief_send", {
              proactive: "status" in r && r.status === "proactive",
              attachment_count: f?.length ?? 0,
              ignored_attachments: f === void 0 && "attachments" in r,
              upload_lane: c(h)
            }),
            !f?.length)
          )
            return { data: { message: s, sentAt: y } };
          let { verdict: S, judged: C } = await hCs(f, e.permissions());
          if (!S.result) throw new R(S.message, "attachment refused at the call");
          let w = await DFn(f, {
            lane: h,
            signal: n.signal,
            credentials: e.credentials,
            judged: C
          });
          return {
            data: { message: s, attachments: w, sentAt: y, ...(OFn(h) && { rendered_locally: !0 }) }
          };
        }
      };
    }
  });
class ve extends Error {
  constructor(e) {
    super(e);
    this.name = "ScheduleWakeupInputError";
  }
}
var is = p(() =>
    Ue({
      delaySeconds: GL(v())
        .optional()
        .describe(
          "Seconds from now to wake up. Clamped to [60, 3600] by the runtime. Required unless `stop` is true."
        ),
      reason: o()
        .optional()
        .describe(
          "One short sentence explaining the chosen delay. Goes to telemetry and is shown to the user. Be specific. Required unless `stop` is true."
        ),
      prompt: o()
        .optional()
        .describe(
          `The /loop input to fire on wake-up. Pass the same /loop input verbatim each turn so the next firing re-enters the skill and continues the loop. For autonomous /loop (no user prompt), pass the literal sentinel \`${nHe}\` instead (the dynamic-pacing variant, not the CronCreate-mode \`${I7e}\`). Required unless \`stop\` is true.`
        ),
      stop: M()
        .optional()
        .describe(
          "Set to true to end the dynamic loop immediately instead of scheduling another wakeup. When true, all other fields are ignored and no further wakeups fire."
        ),
      noop: M()
        .optional()
        .describe(
          "true = nothing changed (you checked and there is nothing to report). false = something happened worth keeping (edited a file, posted a message, advanced state, surfaced a finding). Consecutive noop:true ticks are collapsed in the user's terminal view and tracked as a streak. Required unless `stop` is true."
        )
    })
  ),
  as = p(() =>
    u({
      scheduledFor: v().describe("Epoch ms timestamp when the next wakeup will fire"),
      clampedDelaySeconds: v().describe("Actual delay used after clamping to runtime bounds"),
      wasClamped: M().describe("True if the requested delaySeconds was outside [60, 3600]"),
      stopped: M().optional().describe("True when the model ended the loop via `stop: true`"),
      cancelledWakeups: v()
        .optional()
        .describe(
          "How many pending dynamic-loop wakeups stop:true cancelled. 0 means nothing was pending \u2014 a recurring /loop cron is not cancelled by stop:true."
        )
    })
  ),
  go = tn({
    name: el,
    searchHint: `self-pace the dynamic /loop: pick a delay before the next tick, or stop/end/cancel the dynamic loop with stop:true (a fixed-interval /loop is a recurring cron \u2014 cancel it with ${Kv})`,
    backgrounding: "never",
    maxResultSizeChars: 1000,
    async description() {
      return KKs;
    },
    async prompt() {
      let e = k1("repl_main_thread", { ignoreOverage: !0 }),
        r = k1("sdk", { ignoreOverage: !0 });
      return zKs(e === r ? e : void 0);
    },
    get inputSchema() {
      return is();
    },
    get outputSchema() {
      return as();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !1,
    toAutoClassifierInput(e) {
      if (e.stop === !0) return "stop the /loop \u2014 cancel pending wakeups, schedule nothing";
      if (e.delaySeconds == null || e.prompt == null)
        return `malformed ${el} call missing delaySeconds/prompt \u2014 the tool will reject it`;
      return `wake in ${e.delaySeconds}s: ${e.prompt}`;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      let { permissions: r } = e;
      return {
        async checkPermissions(n) {
          if (r().mode === "auto")
            return {
              behavior: "passthrough",
              message: "Scheduling a /loop wakeup requires classifier review."
            };
          return { behavior: "allow", updatedInput: n };
        },
        async call(n, { toolUseId: s }) {
          let { delaySeconds: f, reason: y, prompt: h, stop: S, noop: C } = n,
            w = S !== !0 && _Q(e) ? zYn : void 0;
          if (w !== void 0) throw (t(`ScheduleWakeup refused: ${w}`), new ve(w));
          if (S === !0)
            return {
              data: {
                scheduledFor: 0,
                clampedDelaySeconds: 0,
                wasClamped: !1,
                stopped: !0,
                cancelledWakeups: fbs()
              }
            };
          if (f === void 0 || y === void 0)
            throw new ve("`delaySeconds` and `reason` are required when `stop` is not true.");
          if (h === void 0) throw new ve("`prompt` is required when `stop` is not true.");
          if (C === void 0) throw new ve("`noop` is required when `stop` is not true.");
          let E = cbs(f, h, y, s, e);
          if (E === null)
            return { data: { scheduledFor: 0, clampedDelaySeconds: 0, wasClamped: !1 } };
          return {
            data: {
              scheduledFor: E.scheduledFor,
              clampedDelaySeconds: E.clampedDelaySeconds,
              wasClamped: E.wasClamped
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(
      { scheduledFor: e, clampedDelaySeconds: r, wasClamped: n, stopped: s, cancelledWakeups: f },
      y
    ) {
      let h = ND(),
        S = `Then ${f6n({ briefMode: h })} \u2014 and end the turn.`;
      if (s === !0) {
        let j = `If you armed a ${Gs} for this loop, ${$d} it now. ${S}`;
        if (f === 0)
          return {
            tool_use_id: y,
            type: "tool_result",
            content: `Loop stopped \u2014 any dynamic loop in this session is ended; there was no pending wakeup to cancel. If you are running a fixed-interval /loop (a recurring cron), it is NOT stopped by this call \u2014 cancel it with ${Kv}. ${j}`
          };
        let Y =
          f === void 0
            ? "no further wakeups scheduled"
            : `cancelled ${f} pending wakeup(s); no further dynamic-loop wakeups scheduled`;
        return { tool_use_id: y, type: "tool_result", content: `Loop stopped \u2014 ${Y}. ${j}` };
      }
      if (e === 0)
        return {
          tool_use_id: y,
          type: "tool_result",
          content: `Wakeup not scheduled. The loop reached its maximum duration \u2014 the loop has ended; do not re-issue. ${S}`
        };
      let C = new Date(e).toTimeString().slice(0, 8),
        w = Math.max(0, Math.round((e - Date.now()) / 1000)),
        E = n ? ` (clamped to ${r}s from your requested value)` : "",
        O = h
          ? `send it now via ${rm} (\`status: 'proactive'\`) \u2014 plain response text is treated as unread in this session`
          : "write it now as ordinary response text",
        D = st(),
        x = OU(Xe(D), D)
          ? `When this call is your only tool call, the turn ends when it returns \u2014 there is no post-arm slot for a status update, so ${h ? `send the per-tick update via ${rm} (\`status: 'proactive'\`)` : "write the per-tick update as ordinary response text"} immediately BEFORE calling ${el}. If you are reading this mid-turn, end the turn now \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`
          : `If you owe the user a status update this tick, ${O}; then end the turn \u2014 the harness re-invokes you when the wakeup fires or a task-notification arrives.`;
      return {
        tool_use_id: y,
        type: "tool_result",
        content: `Next wakeup scheduled for ${C} (in ${w}s)${E}. ${x}`
      };
    }
  });
var ls = p(() =>
    Tt({
      results: lr(
        Tt({
          title: ge().optional().default(""),
          url: ge().optional().default(""),
          snippet: ge().optional().default("")
        })
      )
        .optional()
        .default([]),
      error: Tt({ error_type: ge(), error_message: ge() }).nullable().optional()
    })
  ),
  us = 1e4,
  ds = R0,
  ms = 500,
  fs = 2048;
function yo(e) {
  if (Ae() !== "firstParty") return !1;
  if (!i.CLAUDE_CODE_WEBSEARCH_USE_CCR_PROXY) return !1;
  return !!ize(e);
}
async function ko(e, r, n, s, f) {
  let y = await TAo({
    session: e,
    route: "web-search",
    toolName: "WebSearch",
    logLabel: "websearch-proxy",
    targetErrorLabel: "search error",
    body: {
      query: r,
      ...(s?.allowed_domains?.length && { allowed_domains: s.allowed_domains }),
      ...(s?.blocked_domains?.length && { blocked_domains: s.blocked_domains }),
      ...(f && { search_profile: f })
    },
    schema: ls(),
    signal: n
  });
  if (!y.ok) return y;
  let h = ds;
  return {
    ok: !0,
    results: y.data.results
      .filter((S) => S.url)
      .flatMap((S) => {
        if (!i.CLAUDE_CODE_WEBSEARCH_CITATIONS) return [{ title: S.title, url: S.url }];
        if (gt(S.url, fs) !== S.url) return [];
        let C = gt(S.snippet, Math.min(us, h));
        return (
          (h -= C.length),
          [{ title: gt(S.title, ms), url: S.url, ...(C && { snippet: C }) }]
        );
      })
  };
}
function gt(e, r) {
  return g3n(sB("system-reminder", re(e.trimStart(), r)), pX).trim();
}
var wo = p(() =>
    Ue({
      query: o().min(2).describe("The search query to use"),
      allowed_domains: T(o()).optional().describe("Only include search results from these domains"),
      blocked_domains: T(o()).optional().describe("Never include search results from these domains")
    })
  ),
  gs = p(() =>
    wo().extend({
      mode: B(["standard", "extended"])
        .describe(ySt()?.mode_description ?? "")
        .prefault("extended")
    })
  ),
  ys = p(() => {
    let e = u({
      title: o().describe("The title of the search result"),
      url: o().describe("The URL of the search result"),
      snippet: o()
        .optional()
        .describe("Page text. PostToolUse hooks get it; tool_use_result does not.")
    });
    return u({
      tool_use_id: o().describe("ID of the tool use"),
      content: T(e).describe("Array of search hits")
    });
  });
function To({ snippet: e, ...r }) {
  return r;
}
var ks = p(() =>
  u({
    query: o().describe("The search query that was executed"),
    results: T($e([ys(), o()])).describe("Search results and/or text commentary from the model"),
    durationSeconds: v().describe("Time taken to complete the search operation"),
    searchCount: v().optional().describe("Number of web searches performed")
  })
);
function Ts(e, r, n) {
  let s = [],
    f = "",
    y = 0,
    h = 0;
  for (let S of e) {
    if (S.type === "server_tool_use") {
      if ((y++, f.trim().length > 0)) s.push(f.trim());
      f = "";
      continue;
    }
    if (S.type === "web_search_tool_result") {
      if ((h++, !Array.isArray(S.content))) {
        let w = `Web search error: ${S.content.error_code}`;
        (t(w, { level: "error" }), s.push(w));
        continue;
      }
      let C = S.content.map((w) => ({ title: w.title, url: w.url }));
      s.push({ tool_use_id: S.tool_use_id, content: C });
    }
    if (S.type === "text") f += S.text;
  }
  if (f.trim().length > 0) s.push(f.trim());
  return { query: r, results: s, durationSeconds: n, searchCount: Math.max(y, h) };
}
function So(e) {
  if (!e?.query) return null;
  return hs(e.query, yR);
}
var _o = tn({
  name: Zu,
  searchHint: "search the web for current information",
  backgrounding: "detach",
  maxResultSizeChars: 1e5,
  shouldDefer: !0,
  async description(e) {
    return `Claude wants to search the web for: ${e.query}`;
  },
  userFacingName() {
    return "Web Search";
  },
  getToolUseSummary: So,
  getActivityDescription(e) {
    let r = So(e);
    return r ? `Searching for ${r}` : "Searching the web";
  },
  isEnabled() {
    if (!on($9s)) return !1;
    let e = Ae();
    if (e === "firstParty" || qx(e)) return !0;
    if (e === "gateway") return !1;
    if (e === "vertex") return w4o(Xe(st()));
    if (e === "foundry") return !0;
    return !1;
  },
  get inputSchema() {
    return ySt() ? gs() : wo();
  },
  get outputSchema() {
    return ks();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  coerceInput(e) {
    if (ySt() || !H(e) || !("mode" in e)) return null;
    let { mode: r, ...n } = e;
    return { input: n, shapeClass: "mode_while_off" };
  },
  toAutoClassifierInput(e) {
    return e.query;
  },
  async prompt({ model: e, leanPrompt: r }) {
    let n = B3s(e, r),
      s = ySt()?.web_search_addendum;
    return s
      ? `${n.trimEnd()}

${s}
`
      : n;
  },
  renderToolUseMessage({ query: e, allowed_domains: r, blocked_domains: n }, { verbose: s }) {
    if (!e) return null;
    let f = "";
    if (e) f += `"${e}"`;
    if (s) {
      if (r && r.length > 0) f += `, only allowing domains: ${r.join(", ")}`;
      if (n && n.length > 0) f += `, blocking domains: ${n.join(", ")}`;
    }
    return f;
  },
  extractSearchText() {
    return "";
  },
  create(e) {
    return {
      async checkPermissions(r) {
        return {
          behavior: "passthrough",
          message: "WebSearchTool requires permission.",
          suggestions: [
            {
              type: "addRules",
              rules: [{ toolName: Zu }],
              behavior: "allow",
              destination: "localSettings"
            }
          ]
        };
      },
      async validateInput(r) {
        let { query: n, allowed_domains: s, blocked_domains: f } = r;
        if (!n.length) return { result: !1, message: "Error: Missing query", errorCode: 1 };
        if (s?.length && f?.length)
          return {
            result: !1,
            message:
              "Error: Cannot specify both allowed_domains and blocked_domains in the same request",
            errorCode: 2
          };
        return { result: !0 };
      },
      async call(r, { signal: n, onProgress: s, timing: f }) {
        let y = e,
          h = performance.now(),
          { query: S } = r,
          C = Ejo(r) ? "fast" : void 0,
          w = y.taskRegistry.getWebSearchBudget();
        if (!w.tryConsume()) {
          let ee = SLr(),
            ne = w.refillsPerHour(),
            se = w.msUntilNextCall();
          m("tool_web_search", "web_search_session_cap", {
            max_web_searches_per_session: ee,
            web_search_refills_per_hour: ne,
            ...(Number.isFinite(se) && { ms_until_next_web_search: se })
          });
          let ae = ye() ? "turn" : "session",
            Se = `${ee} ${Zu} ${I(ee, "call")}`,
            we = ne > 0,
            gn =
              ae === "turn"
                ? `limit: ${Se} per turn, shared by every agent in it`
                : `limit: ${Se}, shared by every agent in this session; it does not refill`,
            yn = we
              ? `limit: ${Se} shared by every agent in this ${ae}; the budget refills at about ${ne} ${I(ne, "call")} per hour, so searching becomes possible again later in the ${ae}`
              : gn,
            bn = we
              ? "Do not pause or wait for the refill: continue with the information already gathered and say so in your answer"
              : "Continue with the information already gathered instead of searching again, and say so in your answer",
            Bt = [
              ...(ae === "turn"
                ? [
                    "tell the user they can send a follow-up message after this reply to continue the search"
                  ]
                : []),
              ...(Mlr()
                ? [
                    ae === "turn"
                      ? "ask them to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION"
                      : "ask the user to raise CLAUDE_CODE_MAX_WEB_SEARCHES_PER_SESSION"
                  ]
                : [])
            ],
            Sn =
              Bt.length > 0 ? ` If more searches are genuinely needed, ${Bt.join(", or ")}.` : "";
          return {
            data: {
              query: S,
              results: [
                `Web search was not performed: this ${ae}'s web search budget is used up (${yn}). ${bn}; do not work around the limit by querying search engines with curl or wget from ${Be}, by querying them in a browser or through a computer-use tool, or by searching or fetching through a third-party reader, proxy or archive service.${Sn}`
              ],
              durationSeconds: 0,
              searchCount: 0
            }
          };
        }
        if (yo(y.session)) {
          let ee = f?.mark("external"),
            ne = await ko(
              y.session,
              S,
              n,
              { allowed_domains: r.allowed_domains, blocked_domains: r.blocked_domains },
              C
            ).finally(ee),
            se = (performance.now() - h) / 1000;
          if (!ne.ok)
            throw new R(
              _({ error_type: ne.errorType, source: ne.source, message: ne.errorMessage }),
              "web-search-ccr-proxy"
            );
          if (s)
            s({
              type: "progress",
              toolUseID: "ccr-proxy-search-1",
              data: { type: "search_results_received", resultCount: ne.results.length, query: S }
            });
          return {
            data: {
              query: S,
              results: [
                {
                  tool_use_id: "ccr-proxy-search-1",
                  content: y.agentId === void 0 ? ne.results : ne.results.map(To)
                }
              ],
              durationSeconds: se,
              searchCount: 1
            }
          };
        }
        let E = Oe({ content: "Perform a web search for the query: " + S }),
          O = {
            type: "web_search_20250305",
            name: "web_search",
            allowed_domains: r.allowed_domains,
            blocked_domains: r.blocked_domains,
            max_uses: 8,
            ...(C && { search_profile: C })
          },
          x = k("tengu_plum_vx3", !1) ? yb() : y.mainLoopModel();
        if (Ae() === "foundry" && !BZe(x, "web_search"))
          throw Error("Web search is not available on this Foundry deployment.");
        let j = f?.mark("model"),
          Y = NNt({
            messages: [E],
            systemPrompt: Li([
              "You run a web search for another Claude model, which is waiting on the result and can search again. Search once, then reply with a brief summary of the results."
            ]),
            thinkingConfig: { type: "disabled", mechanical: !0 },
            tools: [],
            signal: n,
            options: {
              getToolPermissionContext: async () => y.permissions(),
              model: x,
              toolChoice: { type: "tool", name: "web_search" },
              isNonInteractiveSession: y.isNonInteractiveSession,
              hasAppendSystemPrompt: !!y.appendSystemPrompt,
              extraToolSchemas: [O],
              querySource: "web_search_tool",
              enablePromptCaching: !1,
              agents: y.agentDefinitions.activeAgents,
              mcpTools: [],
              agentId: y.agentId,
              agentContext: y.agentContext,
              credentials: y.credentials,
              storageV5: y.storageV5,
              stickyBetas: pT(ps()),
              proactivityLevel: y.proactivityLevel(),
              ...y.helperEffortFor(x)
            }
          }),
          P = [],
          K = null,
          W = "",
          U = 0,
          V = new Map(),
          X = null;
        for await (let ee of Y) {
          if (ee.type === "assistant") {
            if (ee.isApiErrorMessage) {
              X = ee.truncatedAfterOutput
                ? "The search was cut off before any results arrived. Try again."
                : Fo(ee.message.content);
              continue;
            }
            P.push(...ee.message.content);
            continue;
          }
          if (ee.type !== "stream_event") continue;
          if (ee.event?.type === "content_block_start") {
            let se = ee.event.content_block;
            if (se?.type === "server_tool_use") {
              ((K = se.id), (W = ""));
              continue;
            }
            if (se?.type === "web_search_tool_result") {
              let ae = se.tool_use_id,
                Se = V.get(ae) || S,
                we = se.content;
              if ((U++, s))
                s({
                  type: "progress",
                  toolUseID: ae || `search-progress-${U}`,
                  data: {
                    type: "search_results_received",
                    resultCount: Array.isArray(we) ? we.length : 0,
                    query: Se
                  }
                });
            }
            continue;
          }
          if (ee.event?.type !== "content_block_delta" || !K) continue;
          let ne = ee.event.delta;
          if (ne?.type !== "input_json_delta" || !ne.partial_json) continue;
          W += ne.partial_json;
          try {
            let se = W.match(/"query"\s*:\s*"((?:[^"\\]|\\.)*)"/);
            if (!se?.[1]) continue;
            let ae = te('"' + se[1] + '"');
            if (V.has(K) && V.get(K) === ae) continue;
            if ((V.set(K, ae), U++, s))
              s({
                type: "progress",
                toolUseID: `search-progress-${U}`,
                data: { type: "query_update", query: ae }
              });
          } catch {}
        }
        if ((j?.(), Ae() === "foundry" && !BZe(x, "web_search")))
          throw Error("Web search is not available on this Foundry deployment.");
        let De = (performance.now() - h) / 1000,
          Me = Ts(P, S, De);
        if (X !== null && Me.results.length === 0)
          throw new R(X, "web-search-side-query-api-error");
        return { data: Me };
      }
    };
  },
  stripForCreation: (e) => ({
    ...e,
    results: e.results?.map((r) =>
      r == null || typeof r === "string" ? r : { ...r, content: r.content?.map(To) }
    )
  }),
  mapToolResultToToolResultBlockParam(e, r) {
    let { query: n, results: s } = e,
      f = (s ?? []).flatMap((h) => (h == null || typeof h === "string" ? [] : (h.content ?? [])));
    if (i.CLAUDE_CODE_WEBSEARCH_CITATIONS && f.some((h) => h.snippet))
      return {
        tool_use_id: r,
        type: "tool_result",
        content: f.map((h) => ({
          type: "search_result",
          source: h.url,
          title: h.title || h.url,
          content: [{ type: "text", text: h.snippet || h.title || h.url }],
          citations: { enabled: !0 }
        }))
      };
    let y = `Web search results for query: "${n}"

`;
    return (
      (s ?? []).forEach((h) => {
        if (h == null) return;
        if (typeof h === "string")
          y +=
            h +
            `

`;
        else if (h.content?.length > 0)
          y += `Links: ${_(h.content)}

`;
        else
          y += `No links found.

`;
      }),
      (y += `
REMINDER: You MUST include the sources above in your response to the user using markdown hyperlinks.`),
      { tool_use_id: r, type: "tool_result", content: y.trim() }
    );
  }
});
var yt = p(() =>
    u({
      file: o().describe("Repo-relative path of the file the finding is in"),
      line: v().int().optional().describe("1-indexed line the finding anchors to"),
      summary: o().describe("One-sentence statement of the defect"),
      short_summary: o()
        .max(60)
        .optional()
        .describe(
          "Compressed label for compact UI (\u226460 chars): the claim alone, no rationale or consequence clause"
        ),
      failure_scenario: o().describe("Concrete inputs/state \u2192 wrong output/crash"),
      category: o()
        .max(40)
        .optional()
        .describe(
          'Short kebab-case slug of the finding type, e.g. "correctness", "simplification", "efficiency", "test-coverage"'
        ),
      verdict: B(["CONFIRMED", "PLAUSIBLE"])
        .optional()
        .describe("Set when a verify pass ran; absent on inline-only reviews"),
      outcome: B(["fixed", "skipped", "no_change_needed"])
        .optional()
        .describe("Set ONLY when re-reporting after applying fixes: what happened to this finding")
    })
  ),
  Co = p(() =>
    Ue({
      level: B(["low", "medium", "high", "xhigh", "max"])
        .optional()
        .describe("Effort level the review ran at"),
      findings: T(yt())
        .max(32)
        .describe("Verified findings, most-severe first; empty if none survived")
    })
  );
var bs = p(() =>
    u({
      count: v().describe("Number of findings reported"),
      level: B(["low", "medium", "high", "xhigh", "max"])
        .optional()
        .describe("Effort level the review ran at"),
      findings: T(yt()).describe("Echoed for the result body")
    })
  ),
  vo = tn({
    name: jP,
    searchHint: "report code-review findings as a structured list",
    backgrounding: "never",
    maxResultSizeChars: 256,
    strict: !0,
    async description() {
      return C0o;
    },
    async prompt() {
      return C0o;
    },
    get inputSchema() {
      return Co();
    },
    get outputSchema() {
      return bs();
    },
    isReadOnly() {
      return !0;
    },
    isConcurrencySafe() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return `${e.findings.length} findings`;
    },
    userFacingName() {
      return "Code review";
    },
    renderToolUseMessage(e) {
      let r = e.findings?.length ?? 0;
      return `${e.level ?? "review"} \xB7 ${r} ${I(r, "finding")}`;
    },
    create() {
      return {
        async call({ findings: e, level: r }) {
          return { data: { count: e.length, level: r, findings: e } };
        }
      };
    },
    mapToolResultToToolResultBlockParam({ count: e }, r) {
      return {
        tool_use_id: r,
        type: "tool_result",
        content: e === 0 ? "No findings reported." : `${e} ${I(e, "finding")} reported.`
      };
    }
  });
var Ss =
  'Create and update a task list for the current session. The list is rendered to the user as your working plan.\n\n- Each todo has `content`, `status` ("pending" | "in_progress" | "completed"), and `activeForm` (present-tense label shown while in progress).\n- Send the full list each call; it replaces the previous one.\n- Keep one item `in_progress` at a time and mark it `completed` when done.';
function Ro(e, r) {
  return zO({ model: e, leanPrompt: r }) ? Ss : ws;
}
var ws = `Use this tool to create and manage a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool
Use this tool proactively in these scenarios:

1. Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
2. Non-trivial and complex tasks - Tasks that require careful planning or multiple operations
3. User explicitly requests todo list - When the user directly asks you to use the todo list
4. User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
5. After receiving new instructions - Immediately capture user requirements as todos
6. When you start working on a task - Mark it as in_progress BEFORE beginning work. Ideally you should only have one todo as in_progress at a time
7. After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
1. There is only a single, straightforward task
2. The task is trivial and tracking it provides no organizational benefit
3. The task can be completed in less than 3 trivial steps
4. The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Examples of When to Use the Todo List

<example>
User: I want to add a dark mode toggle to the application settings. Make sure you run the tests and build when you're done!
Assistant: *Creates todo list with the following items:*
1. Creating dark mode toggle component in Settings page
2. Adding dark mode state management (context/store)
3. Implementing CSS-in-JS styles for dark theme
4. Updating existing components to support theme switching
5. Running tests and build process, addressing any failures or errors that occur
*Begins working on the first task*

<reasoning>
The assistant used the todo list because:
1. Adding dark mode is a multi-step feature requiring UI, state management, and styling changes
2. The user explicitly requested tests and build be run afterward
3. The assistant inferred that tests and build need to pass by adding "Ensure tests and build succeed" as the final task
</reasoning>
</example>

<example>
User: Help me rename the function getCwd to getCurrentWorkingDirectory across my project
Assistant: *Uses grep or search tools to locate all instances of getCwd in the codebase*
I've found 15 instances of 'getCwd' across 8 different files.
*Creates todo list with specific items for each file that needs updating*

<reasoning>
The assistant used the todo list because:
1. First, the assistant searched to understand the scope of the task
2. Upon finding multiple occurrences across different files, it determined this was a complex task with multiple steps
3. The todo list helps ensure every instance is tracked and updated systematically
4. This approach prevents missing any occurrences and maintains code consistency
</reasoning>
</example>


<example>
User: I need to implement these features for my e-commerce site: user registration, product catalog, shopping cart, and checkout flow.
Assistant: *Creates a todo list breaking down each feature into specific tasks based on the project architecture*
Let's start with user registration. This will involve creating database models, API endpoints, and frontend forms that integrate with your existing authentication system.

<reasoning>
The assistant used the todo list because:
1. The user provided multiple complex features to implement in a comma separated list
2. The todo list helps organize these large features into manageable tasks
3. This approach allows for tracking progress across the entire implementation
</reasoning>
</example>

<example>
User: Can you help optimize my React application? It's rendering slowly and has performance issues.
Assistant: *Reviews component structure, render patterns, state management, and data fetching*
After analyzing your codebase, I've identified several performance issues.
*Creates todo list with items like: 1) Implementing memoization for expensive calculations in ProductList, 2) Adding virtualization for long lists in Dashboard, 3) Optimizing image loading in Gallery component, 4) Fixing state update loops in ShoppingCart, 5) Reviewing bundle size and implementing code splitting*
Let's start by implementing memoization for the expensive calculations in your ProductList component.

<reasoning>
The assistant used the todo list because:
1. First, the assistant examined the codebase to identify specific performance issues
2. Based on this analysis, it identified multiple optimization opportunities
3. Performance optimization is a non-trivial task requiring multiple steps
4. The todo list helps methodically track improvements across different components
5. This systematic approach ensures all performance bottlenecks are addressed
</reasoning>
</example>

## Examples of When NOT to Use the Todo List

<example>
User: How do I print 'Hello World' in Python?
Assistant: In Python, you can print "Hello World" with this simple code:

python
print("Hello World")

This will output the text "Hello World" to the console when executed.

<reasoning>
The assistant did not use the todo list because this is a single, trivial task that can be completed in one step. There's no need to track multiple tasks or steps for such a straightforward request.
</reasoning>
</example>

<example>
User: What does the git status command do?
Assistant: The git status command shows the current state of your working directory and staging area. It displays which changes have been staged, which haven't, and which files aren't being tracked by Git. This is a fundamental command for understanding the current state of your repository before making commits.

<reasoning>
The assistant did not use the todo list because this is an informational request with no actual coding task to complete. The user is simply asking for an explanation, not for the assistant to perform multiple steps or tasks.
</reasoning>
</example>

<example>
User: Can you add a comment to the calculateTotal function to explain what it does?
Assistant: Sure, let me add a comment to the calculateTotal function to explain what it does.
* Uses the ${at} tool to add a comment to the calculateTotal function *

<reasoning>
The assistant did not use the todo list because this is a single, straightforward task confined to one location in the code. Adding a comment doesn't require tracking multiple steps or systematic organization.
</reasoning>
</example>

<example>
User: Run npm install for me and tell me what happens.
Assistant: I'll run the npm install command for you.

*Executes: npm install*

The command completed successfully. Here's the output:
[Output of npm install command]

All dependencies have been installed according to your package.json file.

<reasoning>
The assistant did not use the todo list because this is a single command execution with immediate results. There are no multiple steps to track or organize, making the todo list unnecessary for this straightforward task.
</reasoning>
</example>

## Task States and Management

1. **Task States**: Use these states to track progress:
   - pending: Task not yet started
   - in_progress: Currently working on (limit to ONE task at a time)
   - completed: Task finished successfully

   **IMPORTANT**: Task descriptions must have two forms:
   - content: The imperative form describing what needs to be done (e.g., "Run tests", "Build the project")
   - activeForm: The present continuous form shown during execution (e.g., "Running tests", "Building the project")

2. **Task Management**:
   - Update task status in real-time as you work
   - Mark tasks complete IMMEDIATELY after finishing (don't batch completions)
   - Exactly ONE task must be in_progress at any time (not less, not more)
   - Complete current tasks before starting new ones
   - Remove tasks that are no longer relevant from the list entirely

3. **Task Completion Requirements**:
   - ONLY mark a task as completed when you have FULLY accomplished it
   - If you encounter errors, blockers, or cannot finish, keep the task as in_progress
   - When blocked, create a new task describing what needs to be resolved
   - Never mark a task as completed if:
     - Tests are failing
     - Implementation is partial
     - You encountered unresolved errors
     - You couldn't find necessary files or dependencies

4. **Task Breakdown**:
   - Create specific, actionable items
   - Break complex tasks into smaller, manageable steps
   - Use clear, descriptive task names
   - Always provide both forms:
     - content: "Fix authentication bug"
     - activeForm: "Fixing authentication bug"

When in doubt, use this tool. Being proactive with task management demonstrates attentiveness and ensures you complete all requirements successfully.
`,
  Eo =
    "Update the todo list for the current session. To be used proactively and often to track progress and pending tasks. Make sure that at least one task is in_progress at all times. Always provide both content (imperative) and activeForm (present continuous) for each task.";
var Cs = p(() => Ue({ todos: OXe().describe("The updated todo list") })),
  vs = p(() =>
    u({
      oldTodos: OXe().describe("The todo list before the update"),
      newTodos: OXe().describe("The todo list after the update")
    })
  ),
  Io = tn({
    name: mx,
    searchHint: "manage the session task checklist",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    strict: !0,
    async description() {
      return Eo;
    },
    async prompt({ model: e, leanPrompt: r }) {
      return Ro(e, r);
    },
    get inputSchema() {
      return Cs();
    },
    get outputSchema() {
      return vs();
    },
    userFacingName() {
      return "";
    },
    shouldDefer: !0,
    isEnabled() {
      return !IO() && N4();
    },
    toAutoClassifierInput(e) {
      return `${e.todos.length} items`;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async call({ todos: r }) {
          let n = e.agentId ?? q(),
            s = e.todos.get(n) ?? [],
            f = r.every((y) => y.status === "completed");
          return (e.todos.set(n, f ? [] : r), { data: { oldTodos: s, newTodos: r } });
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return {
        tool_use_id: r,
        type: "tool_result",
        content:
          "Todos have been modified successfully. Ensure that you continue to use the todo list to track your progress. Please proceed with the current tasks if applicable"
      };
    }
  });
var Oo = "TestingPermission",
  Rs = p(() => Ue({})),
  Nd = tn({
    name: Oo,
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Test tool that always asks for permission";
    },
    async prompt() {
      return "Test tool that always asks for permission before executing. Used for end-to-end testing.";
    },
    get inputSchema() {
      return Rs();
    },
    userFacingName() {
      return "TestingPermission";
    },
    isEnabled() {
      return !1;
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create() {
      return {
        async checkPermissions() {
          return { behavior: "ask", message: "Run test?" };
        },
        async call() {
          return { data: `${Oo} executed successfully` };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return { type: "tool_result", content: String(e), tool_use_id: r };
    }
  });
var Es = 50,
  Is = p(() =>
    Ue({
      store: o()
        .optional()
        .describe(
          "Id of the memory store to list. Omit to list the memory stores available in this session (id, description, writable or read-only, and the path of its index document)."
        ),
      path_prefix: o()
        .optional()
        .describe(
          "Optional directory prefix to list only documents under it (e.g. /feedback/). Matching is directory-aligned (/x is the same as /x/). Omit to list the whole store."
        ),
      cursor: o()
        .optional()
        .describe("Path of the last entry from a previous call. Returns entries after this path.")
    })
  ),
  Os = p(() =>
    u({
      outcome: B(["ok", "refused", "failed"]),
      store_kind: B(["personal", "project"]).optional(),
      entries: T(u({ path: o(), bytes: v().optional(), updatedAt: o().optional() })).optional(),
      remaining: v().optional(),
      stores: T(u({ id: o(), description: o(), writable: M(), index: o() })).optional(),
      reason: o().optional(),
      message: o().optional()
    })
  );
function As(e) {
  let r = e.bytes === void 0 ? "" : `${e.bytes} bytes`,
    n = e.updatedAt?.match(/^\d{4}-\d{2}-\d{2}/)?.[0],
    s = n === void 0 ? "" : `updated ${n}`,
    f = [r, s].filter(Boolean).join(", "),
    y = JSON.stringify(e.path);
  return f === "" ? y : `${y}  (${f})`;
}
var Ao = tn({
  name: ww,
  searchHint: "list the memory stores and the documents in them",
  shouldDefer: !1,
  backgrounding: "never",
  maxResultSizeChars: 1 / 0,
  async description() {
    return fUs;
  },
  async prompt() {
    return mUs;
  },
  get inputSchema() {
    return Is();
  },
  get outputSchema() {
    return Os();
  },
  userFacingName() {
    return ww;
  },
  isEnabled() {
    return CAe();
  },
  isReadOnly() {
    return !0;
  },
  isConcurrencySafe() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return `list ${e.store ?? "stores"} ${e.path_prefix ?? ""}`.trim();
  },
  renderToolUseMessage(e) {
    return rTe(e.store, e.path_prefix);
  },
  extractSearchText() {
    return "";
  },
  getActivityDescription() {
    return "Listing memory documents";
  },
  create() {
    return {
      async call({ store: e, path_prefix: r, cursor: n }, { signal: s }) {
        if (e === void 0) {
          let h = kIo();
          if (h)
            return (
              iY("stores", `refused_${h.reason}`),
              { data: { outcome: "refused", reason: h.reason, message: h.message }, ...Xgt(h) }
            );
          let S = UHr(),
            C = dUs(S),
            w = EIo(S);
          if (C.length === 0) iY("stores", w ? "stores_connecting" : "stores_none");
          else Jgt("stores", "none");
          return { data: { outcome: "ok", stores: C, ...(w && { message: vIo }) } };
        }
        let f = X$t({ storeId: e });
        if (f.outcome === "refused")
          return (
            iY("list", `refused_${f.reason}`),
            { data: { outcome: "refused", reason: f.reason, message: f.message }, ...Xgt(f) }
          );
        let { kind: y } = f.served;
        try {
          let h = r === void 0 ? void 0 : $E(r),
            S =
              r === void 0 || h === void 0
                ? null
                : (J$t(r, f.served.promptIndex) ?? UJe(h, { trailingSlashAllowed: !0 }));
          if (S)
            return (
              iY("list", `refused_${S.reason}`, y),
              { data: { outcome: "refused", reason: S.reason, message: S.message } }
            );
          let C = h === void 0 || h === "/" ? void 0 : h.endsWith("/") ? h : `${h}/`,
            w = await f.backend.list(C, { signal: s }).catch((x) => {
              if (x instanceof Jb && x.kind === "store") return [];
              throw x;
            });
          if (s.aborted) throw new Ye();
          let E = w
              .filter((x) => cUs(x.path))
              .sort((x, j) => (x.path < j.path ? -1 : x.path > j.path ? 1 : 0)),
            O = n === void 0 ? E : E.filter((x) => x.path > n),
            D = O.slice(0, Es);
          return (
            Jgt("list", y),
            {
              data: {
                outcome: "ok",
                store_kind: y,
                entries: D.map((x) => ({
                  path: x.path,
                  bytes: x.sizeBytes,
                  updatedAt: x.updatedAt
                })),
                remaining: O.length - D.length
              }
            }
          );
        } catch (h) {
          if (s.aborted) throw new Ye();
          let S = Q$t("list", h);
          return { data: { outcome: "failed", reason: S.reason, message: S.message } };
        }
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    if (e.outcome !== "ok")
      return {
        tool_use_id: r,
        type: "tool_result",
        is_error: !0,
        content: e.message ?? `${ww} failed: ${e.reason}`
      };
    if (e.stores !== void 0)
      return {
        tool_use_id: r,
        type: "tool_result",
        content:
          e.stores.length === 0
            ? (e.message ?? "No memory stores are available in this session.")
            : `Memory stores available in this session \u2014 pass an id as store to list or read one:
${e.stores.map(
  (y) => `${y.id}  (${y.description}, ${y.writable ? "writable" : "read-only"}, index ${y.index})`
).join(`
`)}${
                e.message === void 0
                  ? ""
                  : `
${e.message}`
              }`
      };
    let n = e.entries ?? [];
    if (n.length === 0) return { tool_use_id: r, type: "tool_result", content: "(empty)" };
    let s = e.remaining ?? 0,
      f =
        s > 0
          ? `
\u2026 ${s} more \u2014 call again with cursor=${JSON.stringify(n.at(-1)?.path ?? "")} to continue.`
          : "";
    return {
      tool_use_id: r,
      type: "tool_result",
      content: `${eFt(e.store_kind)}

${n.map(As).join(`
`)}${f}`
    };
  }
});
var xo = [Ao, Gxr, QVn];
var xs = 10,
  Ps = 3,
  Ds = 50,
  Ls = 20;
function Re() {
  return $x("tengu_juniper_relay_config", {});
}
function Po(e, r, n, s) {
  return typeof e === "number" && Number.isInteger(e) && e >= n && e <= s ? e : r;
}
function Ge() {
  return Po(Re().maxToolCallsPerSession, xs, 1, Ds);
}
function zo() {
  return Po(Re().maxDraftPromptsPerSession, Ps, 0, Ls);
}
import { randomUUID as Ms } from "crypto";
import { basename as kt, dirname as bt, join as Ee } from "path";
var Ve = 10,
  Ns = 30,
  Fs = Ns * 24 * 60 * 60 * 1000,
  hyr = 10240,
  $s = 200,
  Ke = 32768,
  Bs = 5,
  js = 64,
  yyr = 32,
  _yr = 64,
  Mo = 512,
  Ws = 64;
function L9t(e) {
  return Te(Cn(Yf(e)), $s);
}
function byr(e) {
  return TSe(
    Yf(e)
      .replace(
        /\r\n/g,
        `
`
      )
      .split(
        `
`
      )
      .map((r) => Cn(r)).join(`
`),
    hyr
  );
}
function tIe(e, r) {
  return Te(Cn(Yf(e)).trim(), r);
}
var Hs = /[^A-Za-z0-9.:_/@[\]-]/g;
function Syr(e) {
  return Te(e.replace(Hs, ""), js);
}
function wyr(e) {
  if (e === void 0) return;
  let r = tIe(e, Ws);
  return r === "" ? void 0 : r;
}
function vdt(e) {
  return e.filter(N9).slice(-Bs);
}
var uMn = ["bug", "idea", "missing_capability"],
  qs = ["tool_error", "user_frustration", "missing_capability", "model_judgment", "exit_nudge"],
  N9t = [
    "instruction_following",
    "destructive_actions",
    "code_quality",
    "repetition_and_looping",
    "model_regression",
    "overconfidence_and_hallucination",
    "context_and_memory",
    "overeager",
    "over_correction",
    "stopping_short",
    "dispute_or_decline",
    "subagent_overspawn",
    "tone_or_preachiness",
    "excessive_questions",
    "unwanted_scope",
    "other"
  ],
  $9t = ["code_edit", "debug", "explain", "plan", "shell", "search", "review", "other"];
function wgs(e) {
  return e !== void 0 && N9t.includes(e) ? e : void 0;
}
function vgs(e) {
  return e !== void 0 && $9t.includes(e) ? e : void 0;
}
var No = ["adaptive", "enabled", "disabled"];
function Egs(e) {
  return e !== void 0 && No.includes(e) ? e : void 0;
}
var Ks = 16;
function vyr(e) {
  if (e === void 0) return;
  let r = tIe(e, Ks);
  return r === "" ? void 0 : r;
}
var Vs = 1e6;
function jpe(e) {
  return e !== void 0 && Number.isInteger(e) && e >= 0 && e <= Vs ? e : void 0;
}
var Ys = p(() =>
  u({
    draft_id: m4t(),
    created_at: o()
      .refine((e) => Number.isFinite(Date.parse(e)))
      .transform((e) => new Date(Date.parse(e)).toISOString()),
    source_session_id: o().regex($o),
    cwd: o().transform((e) => tIe(e, Mo)),
    model: o().transform((e) => Syr(e)),
    cli_version: o().transform((e) => tIe(e, yyr)),
    os: o().transform((e) => tIe(e, _yr)),
    request_ids: T(o()).transform((e) => vdt(e)),
    type: B(uMn),
    title: o()
      .min(1)
      .transform((e) => L9t(e)),
    details: o().transform((e) => byr(e)),
    area: o()
      .optional()
      .transform((e) => wyr(e)),
    trigger: B(qs),
    failure_mode: B(N9t)
      .optional()
      .catch(void 0),
    task_category: B($9t)
      .optional()
      .catch(void 0),
    effort: o()
      .optional()
      .catch(void 0)
      .transform(vyr),
    thinking_type: B(No)
      .optional()
      .catch(void 0),
    thinking_budget: v()
      .optional()
      .catch(void 0)
      .transform(jpe),
    message_count: v()
      .optional()
      .catch(void 0)
      .transform(jpe),
    assistant_turn_count: v()
      .optional()
      .catch(void 0)
      .transform(jpe),
    subagent_count: v()
      .optional()
      .catch(void 0)
      .transform(jpe),
    transcript_ref: u({
      session_file: o(),
      message_range: Cv([v(), v()]).nullable(),
      project_dir_key: o()
        .optional()
        .transform((e) => (e !== void 0 && wt.test(e) ? e : void 0))
    }).nullable(),
    status: B(["queued", "submitted", "discarded", "expired"])
  })
);
function Qe() {
  return Ee(Le(), "feedback", "drafts");
}
var St = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
  $o = /^[A-Za-z0-9_-]{1,128}$/,
  wt = /^[A-Za-z0-9-]{1,255}$/;
function Bo(e) {
  if (!St.test(e)) throw Error("invalid feedback draft id");
  return Ee(Qe(), `${e}.json`);
}
function jo(e) {
  if (!St.test(e)) throw Error("invalid feedback draft id");
  return We.feedbackDraft(e);
}
function Ct(e) {
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
function Ze(e) {
  let r = Ct(e);
  return r === void 0 ? e.code : `${e.code} ${r}`;
}
async function Xs(e) {
  let r = [],
    n = await la(
      (s) => e.listEntries({ namespace: "feedbackDraft" }, { cursor: s, skipKeyStats: !0 }),
      (s) => {
        for (let f of s) if (f.kind === "key" && f.key.namespace === "feedbackDraft") r.push(f.key);
      }
    );
  if (n.status === "done") return r;
  if (n.status === "capped")
    return (
      t(
        "feedbackDrafts: draft listing kept offering cursors past the page cap; treating it as failed",
        { level: "error" }
      ),
      null
    );
  if (EA(Ct(n.error)))
    return (t(`feedbackDrafts: draft listing failed: ${Ze(n.error)}`, { level: "error" }), null);
  throw new R(`feedback draft listing failed: ${Ze(n.error)}`, "feedback draft listing failed");
}
var Do = 8;
function Qs(e, r, n) {
  let s = (S) => (S.found ? Buffer.from(S.value) : null),
    f = async (S) => {
      try {
        let C = await e.read([{ key: S, tail: n }]);
        return C.ok ? s(C.value.items[0]) : null;
      } catch {
        return null;
      }
    },
    y = -1,
    h = [];
  return async (S) => {
    let C = S - (S % Do);
    if (C !== y) {
      let w = r.slice(C, C + Do),
        E = await e.read(w.map((O) => ({ key: O, tail: n }))).catch(() => {
          return;
        });
      if (((h = []), E?.ok && E.value.items.length === w.length)) h = E.value.items.map(s);
      else for (let O of w) h.push(await f(O));
      y = C;
    }
    return h[S - C] ?? null;
  };
}
async function Aso(e) {
  if (!e.transcript_ref) return null;
  if (!$o.test(e.source_session_id)) return null;
  let { getSessionId: r } = await import("./chunk-k19pbtc6.js");
  if (e.source_session_id === r()) {
    let { getTranscriptPathForSession: y } = await import("./chunk-n2tmxb90.js");
    return y(e.source_session_id);
  }
  let { getProjectDir: n, getProjectsDir: s } = await import("./chunk-35q1n1qb.js"),
    f = e.transcript_ref.project_dir_key;
  if (f !== void 0 && wt.test(f)) return Ee(s(), f, `${e.source_session_id}.jsonl`);
  return Ee(n(e.cwd), `${e.source_session_id}.jsonl`);
}
var Lo = 262144;
function Eyr(e, r) {
  using n = Wy`transcriptContentCorroboratesDraft(${e.length})`;
  for (let s of e.split(`
`)) {
    if (!s) continue;
    let f;
    try {
      f = Vo(s);
    } catch {
      continue;
    }
    if (typeof f !== "object" || f === null) continue;
    if ("sessionId" in f && "cwd" in f && f.sessionId === r.source_session_id && f.cwd === r.cwd)
      return !0;
  }
  return !1;
}
function Te(e, r) {
  let n = Array.from(e);
  return n.length <= r ? e : n.slice(0, r).join("");
}
function Wo(e, r = new Date()) {
  let n = e.transcriptFile ? Zs(e.transcriptFile) : void 0;
  return {
    draft_id: Ms(),
    created_at: r.toISOString(),
    source_session_id: e.sessionId,
    cwd: tIe(e.cwd, Mo),
    model: Syr(e.model),
    cli_version: tIe(e.cliVersion, yyr),
    os: tIe(e.os, _yr),
    request_ids: vdt(e.requestIds),
    type: e.type,
    title: L9t(e.title),
    details: byr(e.details),
    area: wyr(e.area),
    failure_mode: e.failureMode,
    task_category: e.taskCategory,
    trigger: e.trigger,
    effort: vyr(e.effort),
    thinking_type: e.thinkingType,
    thinking_budget: jpe(e.thinkingBudget),
    message_count: jpe(e.messageCount),
    assistant_turn_count: jpe(e.assistantTurnCount),
    subagent_count: jpe(e.subagentCount),
    transcript_ref: e.transcriptFile
      ? { session_file: e.transcriptFile, message_range: null, project_dir_key: n }
      : null,
    status: "queued"
  };
}
function Zs(e) {
  let r = kt(bt(e));
  return wt.test(r) ? r : void 0;
}
async function kyr(e, r = new Date(), n) {
  let s = _(e, null, 2);
  if (s === void 0 || Buffer.byteLength(s, "utf8") > Ke)
    return { success: !1, reason: "too_large" };
  if (n) {
    let y;
    try {
      y = await n.write(jo(e.draft_id), s, { mode: 384 });
    } catch (h) {
      return (
        t(`feedbackDrafts: draft write failed: ${h instanceof Error ? h.name : "unknown"}`, {
          level: "error"
        }),
        { success: !1, reason: "write_failed" }
      );
    }
    if (!y.ok)
      return (
        t(`feedbackDrafts: draft write failed: ${Ze(y.error)}`, { level: "error" }),
        { success: !1, reason: "write_failed" }
      );
  } else {
    if (J())
      return (dC("feedback_draft", "feedback/drafts"), { success: !1, reason: "write_failed" });
    let y = hn();
    try {
      (await y.mkdir(Qe()), await y.atomicWrite(Bo(e.draft_id), s, 384));
    } catch (h) {
      return (
        t(`feedbackDrafts: draft write failed: ${h instanceof Error ? h.name : "unknown"}`, {
          level: "error"
        }),
        { success: !1, reason: "write_failed" }
      );
    }
  }
  let f = [];
  try {
    let { queued: y } = await Wpe({ now: r, skipTranscriptCheck: !0 }, n);
    if (y.length > Ve) {
      let h = y.slice().sort((S, C) => S.created_at.localeCompare(C.created_at));
      for (let S of h.slice(0, y.length - Ve)) (await fMn(S.draft_id, n), f.push(S));
    }
  } catch (y) {
    t(`feedbackDrafts: eviction sweep failed: ${y instanceof Error ? y.name : "unknown"}`, {
      level: "error"
    });
  }
  return { success: !0, draft: e, evicted: f };
}
async function Wpe(e, r) {
  let n = e?.now ?? new Date(),
    s = e?.lightweight === !0,
    f = s || e?.skipTranscriptCheck === !0,
    y,
    h,
    S = r ? void 0 : hn();
  if (r) {
    let D = await Xs(r);
    if (D === null) return { queued: [], expired: [] };
    ((y = D.map((x) => `${x.draftId}.json`)), (h = Qs(r, D, Ke + 1)));
  } else {
    if (J()) return { queued: [], expired: [] };
    let D;
    try {
      D = await S.list(Qe());
    } catch (x) {
      if (Vt(x)) return { queued: [], expired: [] };
      throw x;
    }
    y = D.filter((x) => x.endsWith(".json"));
  }
  let C = [],
    w = [],
    E = 0,
    O = 0;
  for (let [D, x] of y.entries()) {
    let j;
    try {
      let P = h === void 0 ? await S.readTail(Ee(Qe(), x), Ke + 1) : await h(D);
      if (P === null) continue;
      if (P.length > Ke) {
        O++;
        continue;
      }
      using K = Wy`listFeedbackDrafts parse(${P.length})`;
      let W = Vo(P.toString("utf8")),
        U = Ys().safeParse(W);
      if (!U.success) {
        let V = W?.draft_id;
        if (typeof V === "string" && !St.test(V)) E++;
        continue;
      }
      j = U.data;
    } catch {
      continue;
    }
    if (x !== `${j.draft_id}.json`) {
      E++;
      continue;
    }
    if (j.status !== "queued") continue;
    let Y = Date.parse(j.created_at);
    if (Number.isFinite(Y) && n.getTime() - Y > Fs) {
      if (s) continue;
      if (await fMn(j.draft_id, r).catch(() => !1))
        (w.push(j),
          a("tengu_feedback_draft_expired", {
            type: c(j.type),
            trigger: c(j.trigger),
            age_days: Vr(Math.round((n.getTime() - Y) / 86400000))
          }));
      continue;
    }
    C.push({ ...j, transcriptAvailable: f ? !1 : await ei(j, r) });
  }
  if ((C.sort((D, x) => x.created_at.localeCompare(D.created_at)), E > 0))
    a("tengu_feedback_draft_invalid_id", { count: Vr(E) });
  if (O > 0) a("tengu_feedback_draft_oversized_file", { count: Vr(O) });
  return { queued: C, expired: w };
}
function Js(e, r) {
  if (!e.endsWith(".jsonl")) return;
  let n = bt(e),
    s = kt(n),
    f = kt(e).slice(0, -6);
  if (bt(n) !== r || !_r(s) || !_r(f)) return;
  let y = We.transcript(s, f);
  return Rm(y) === void 0 ? y : void 0;
}
async function ei(e, r) {
  let n = await Aso(e);
  if (n === null) return !1;
  let { getSessionId: s } = await import("./chunk-k19pbtc6.js"),
    f = e.source_session_id === s();
  if (r) {
    let { getProjectsDir: y } = await import("./chunk-35q1n1qb.js"),
      h = Js(n, y());
    if (h !== void 0)
      try {
        if (f) return (await r.statMeta(h)).ok;
        let S = await r.read([{ key: h, tail: Lo }]);
        if (!S.ok) return !1;
        let [C] = S.value.items;
        return C.found && Eyr(Buffer.from(C.value).toString("utf8"), e);
      } catch {
        return !1;
      }
  }
  if (f)
    try {
      return (await hn().stat(n), !0);
    } catch {
      return !1;
    }
  try {
    let y = await hn().readTail(n, Lo);
    return Eyr(y.toString("utf8"), e);
  } catch {
    return !1;
  }
}
async function fMn(e, r) {
  if (r) {
    let n = await r.delete(jo(e));
    if (!n.ok) {
      if (EA(Ct(n.error))) return !1;
      throw new R(`feedback draft delete failed: ${Ze(n.error)}`, "feedback draft delete failed");
    }
    return n.value.existed;
  }
  if (J()) return !1;
  try {
    return (await hn().delete(Bo(e)), !0);
  } catch (n) {
    if (!G(n) && !Vt(n)) throw n;
    return !1;
  }
}
async function kgs(e, r) {
  let { queued: n } = await Wpe({ lightweight: !0 }, r);
  return F(n, (s) => s.source_session_id === e);
}
var Tgs = 20,
  Uo = 160,
  vt = 4,
  Ags = 6;
function Ho(e) {
  let r = "silent";
  return (
    Da.feedbackNotice.setState((n) => {
      let s = { ...n, sessionDraftCount: n.sessionDraftCount + 1 };
      if (n.notice !== null) return ((r = "notice_pending"), (s.notice = e), s);
      if (n.promptedCount >= zo()) return ((r = "silent"), s);
      return ((s.promptedCount = n.promptedCount + 1), (r = "notice_pending"), (s.notice = e), s);
    }),
    r
  );
}
function qo() {
  let e = !1;
  return (
    Da.feedbackNotice.setState((r) => {
      if (r.toolCallCount >= Ge()) return r;
      return ((e = !0), { ...r, toolCallCount: r.toolCallCount + 1 });
    }),
    e
  );
}
function rIt(e) {
  Da.feedbackNotice.setState((r) => (r.notice?.draftId === e ? { ...r, notice: null } : r));
}
function Cso() {
  Da.feedbackNotice.setState((e) => (e.notice === null ? e : { ...e, notice: null }));
}
function Cgs(e) {
  let r = !1;
  return (
    Da.feedbackNotice.setState((n) => {
      if (n.shownLoggedForDraftId === e) return n;
      return ((r = !0), { ...n, shownLoggedForDraftId: e });
    }),
    r
  );
}
function pMn(e = 1) {
  Da.feedbackNotice.setState((r) => ({
    ...r,
    sessionDraftCount: Math.max(0, r.sessionDraftCount - e)
  }));
}
function Rgs() {
  let e = !1;
  return (
    Da.feedbackNotice.setState((r) => {
      if (r.seedStarted || r.seededFromDisk) return r;
      return ((e = !0), { ...r, seedStarted: !0 });
    }),
    e
  );
}
function xgs(e) {
  Da.feedbackNotice.setState((r) => {
    if (r.seededFromDisk) return r;
    return { ...r, seededFromDisk: !0, sessionDraftCount: Math.max(r.sessionDraftCount, e) };
  });
}
function Pgs(e) {
  Da.feedbackNotice.setState((r) =>
    r.sessionDraftCount === e && r.seededFromDisk
      ? r
      : { ...r, seededFromDisk: !0, sessionDraftCount: e }
  );
}
var Go = "SendFeedback";
var Ko =
    "Queue a draft feedback report about Claude Code (the product OR the model's own behavior in this session) for the user to review and send later. Nothing is sent anywhere by this tool: it writes a local draft the user can review, edit, and explicitly submit (or discard) via /feedback.",
  Yo = `Use this tool to draft feedback about Claude Code when you hit a high-signal moment. That includes both PRODUCT issues and MODEL-BEHAVIOR issues:
- a reproducible tool or product failure was just resolved or abandoned
- the user clearly expressed frustration with Claude Code or with how you handled the task
- you hit a missing capability that blocked a reasonable request
- you notice, or the user points out, that your own behavior in this session went wrong, for example: you gave a confident answer then had to retract it; you stopped short and handed work back when you could have finished; you declined or disputed a reasonable request; you spawned more subagents than the task warranted; your tone was off; you asked more clarifying questions than needed; you expanded scope beyond what was asked

The draft is QUEUED LOCALLY. It is never sent without the user's explicit approval, and calling this tool renders no UI and does not interrupt the conversation, so never announce it or ask the user about it mid-task.

Write \`details\` as short labeled bullets in this exact order, one to three lines each, no narrative paragraphs:
- **What happened:** the observed behavior vs. what was expected, with exact error text if short. Facts only.
- **What the user said:** the user's own words that prompted this, quoted. If nothing did, write "User didn't comment; observed by the model." Never paraphrase sentiment into a stronger claim.
- **Repro:** the minimal steps or shape that reproduces it.
- **Evidence:** identifiers a reader can chase, such as request IDs, timestamps, file paths, versions. Omit the bullet if there are none.

Constraints:
- Never fabricate or exaggerate user sentiment; report only what actually happened.
- Everything in the draft must be sourced from the user or the session, never inferred: leave unknown fields blank rather than guess, and add a final **Cause:** bullet only for a root cause you verified in-session.
- Use \`area\` to name the part of Claude Code the feedback is about (a feature, command, or workflow, e.g. "hooks config", "/help", "file editing") when there is a clear one; leave it blank otherwise.
- Use \`failure_mode\` ONLY when the report is about model behavior (how Claude responded), not a product bug. Pick the single closest value, or \`other\` when it is a model-behavior issue that fits no listed value; omit the field only when the report is a product/tool bug with no model-behavior component.
- Use \`task_category\` to name what kind of task the session was doing, or \`other\` when it is a clear task that fits no listed value. Omit only if genuinely unclear.
- Do not include secrets or credentials. Refer to people by role ("a teammate", "the PR reviewer"), never by name, email address, or chat/user ID. This applies inside quoted user words too: replace a name or handle with a bracketed role (e.g. "[a teammate]") and keep the rest verbatim. Do not include customer-facing channel or DM IDs, or excerpts of customer content. Session, request, and run IDs, timestamps, repo/PR numbers, and file paths (written relative to the working directory, or ~-prefixed, not absolute paths under the user's home) remain the right evidence.
- If the issue looks like a security vulnerability: describe the class of problem, never a working exploit or step-by-step extraction path.
- Draft only at the natural moments listed above, and at most one draft per distinct issue; never re-draft the same issue in a session.`;
var ti = 3;
function ni(e) {
  if (e === void 0) return;
  return typeof e === "number" ? String(e) : e;
}
function si(e) {
  if (e === void 0) return;
  return typeof e === "number" ? Vr(e) : c(e);
}
function ii(e) {
  let r = 0;
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let s of n.message.content)
      if (s.type === "tool_use" && (s.name === ht || s.name === cf)) r++;
  }
  return r;
}
var ai = p(() =>
    Ue({
      type: B(uMn).describe("What kind of feedback this is."),
      title: o().min(1).describe("Short, specific one-line summary of the issue."),
      details: o()
        .min(1)
        .describe(
          `Labeled bullets, in order: **What happened:** (observed vs. expected, exact error text if short); **What the user said:** (quoted, or "User didn't comment; observed by the model."); **Repro:** (minimal steps); **Evidence:** (request IDs, timestamps, paths, versions; omit if none); optionally a final **Cause:** only if verified in-session. One to three lines per bullet. No narrative paragraphs, no speculation, no secrets.`
        ),
      area: o()
        .optional()
        .describe(
          'Optional short tag naming the part of Claude Code this is about (e.g. "hooks config", "/help", "file editing"). Leave blank if unclear.'
        ),
      failure_mode: B(N9t)
        .optional()
        .describe(
          "When the report is about MODEL BEHAVIOR (not a product bug), the closest failure mode, or `other` when it is a model-behavior issue that fits no listed value. Omit only when the report is a product/tool bug with no model-behavior component."
        ),
      task_category: B($9t)
        .optional()
        .describe(
          "What kind of task the session was doing when the issue occurred, or `other` when it is a clear task that fits no listed value. Omit only if genuinely unclear."
        )
    })
  ),
  li = p(() => u({ success: M(), message: o() })),
  Xo = tn({
    name: Go,
    backgrounding: "never",
    maxResultSizeChars: 1000,
    searchHint: "draft product or model-behavior feedback report queue",
    async description() {
      let { description: e } = Re();
      return typeof e === "string" && e !== "" ? e : Ko;
    },
    async prompt() {
      let { prompt: e } = Re();
      return typeof e === "string" && e !== "" ? e : Yo;
    },
    get inputSchema() {
      return ai();
    },
    get outputSchema() {
      return li();
    },
    isReadOnly() {
      return !1;
    },
    isConcurrencySafe() {
      return !0;
    },
    isEnabled() {
      return c4();
    },
    create(e) {
      return {
        async checkPermissions(r) {
          return { behavior: "allow", updatedInput: r };
        },
        async call(r) {
          if (!c4())
            return {
              data: { success: !1, message: "SendFeedback is not enabled in this session." }
            };
          if (!qo()) {
            let V = Ge();
            return (
              a("tengu_feedback_draft_call_capped", { cap: Vr(V) }),
              {
                data: {
                  success: !1,
                  message: `SendFeedback has reached its limit of ${V} calls per session. Do not call it again this session; drafts already queued are unaffected and the user can review them with /feedback.`
                }
              }
            );
          }
          let n = q(),
            { getTranscriptPathForSession: s } = await import("./chunk-n2tmxb90.js"),
            f = Oq(),
            y = e.messages(),
            h = [];
          for (let V of y) if (V.type === "assistant" && V.requestId) h.push(V.requestId);
          let S = f ? [...h, f] : h,
            C = L(S),
            w = C.slice(-ti),
            E =
              h.length === 0
                ? new Set(
                    y.flatMap((V) =>
                      V.type === "assistant" && !V.isVirtual && V.message.model !== vi
                        ? [V.message.id]
                        : []
                    )
                  ).size
                : 0,
            O = Math.max(C.length, E + (f ? 1 : 0)),
            D = e.permissions().mode,
            x = Hh({
              permissionMode: D,
              mainLoopModel: e.model(),
              exceeds200kTokens: D === "plan" && lke(y)
            }),
            j = Cw(x, e.effort(), { turnEffort: e.effortLayerOverride() }),
            Y = e.thinkingConfig(),
            P = Wo({
              type: r.type,
              title: r.title,
              details: r.details,
              area: r.area,
              failureMode: r.failure_mode,
              taskCategory: r.task_category,
              trigger: "model_judgment",
              requestIds: w,
              sessionId: n,
              cwd: fe(),
              model: x,
              cliVersion: {
                ISSUES_EXPLAINER:
                  "report the issue at https://github.com/anthropics/claude-code/issues",
                PACKAGE_URL: "@anthropic-ai/claude-code",
                README_URL: "https://code.claude.com/docs/en/overview",
                VERSION: "2.1.310",
                FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
                BUILD_TIME: "2026-10-23T17:43:32Z",
                GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
                HOOKS_WORKER_URL: __sourceFilePath_cad88bd3b3f643de(
                  new __sourceFilePath_cad88bd3b3f643de_URL(
                    "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                    import.meta.url
                  )
                ),
                DD_SOURCEMAP_GROUP: "default"
              }.VERSION,
              os: `${i.platform} x64`,
              effort: ni(j),
              thinkingType: Y.type,
              thinkingBudget: Y.type === "enabled" ? Y.budgetTokens : void 0,
              messageCount: y.length,
              assistantTurnCount: O,
              subagentCount: ii(y),
              transcriptFile: s(n)
            }),
            K = await kyr(P, new Date(), e.storageV5);
          if (!K.success)
            return (
              m("feedback_drafts", K.reason),
              {
                data: {
                  success: !1,
                  message:
                    K.reason === "too_large"
                      ? "Draft too large. Shorten the details and try once more."
                      : "Could not write the feedback draft to disk."
                }
              }
            );
          let W = F(K.evicted, (V) => V.source_session_id === n);
          if (W > 0) pMn(W);
          let U = Ho({
            draftId: P.draft_id,
            title: P.title,
            type: P.type,
            detailsPreview: (() => {
              let V = P.details.split(`
`),
                X = V.slice(0, vt).join(`
`),
                le = Te(X, Uo);
              return le !== X || V.slice(vt).some((Me) => Me.trim() !== "") ? `${le}\u2026` : le;
            })()
          });
          return (
            a("tengu_feedback_draft_created", {
              type: c(P.type),
              trigger: c(P.trigger),
              presentation: c(U),
              request_id_count: Vr(P.request_ids.length),
              evicted_count: Vr(K.evicted.length),
              failure_mode: ce(P.failure_mode),
              task_category: ce(P.task_category),
              effort: si(j),
              thinking_type: ce(P.thinking_type),
              thinking_budget: P.thinking_budget !== void 0 ? Vr(P.thinking_budget) : void 0,
              message_count: P.message_count !== void 0 ? Vr(P.message_count) : void 0,
              assistant_turn_count:
                P.assistant_turn_count !== void 0 ? Vr(P.assistant_turn_count) : void 0,
              subagent_count: P.subagent_count !== void 0 ? Vr(P.subagent_count) : void 0
            }),
            g("feedback_drafts"),
            Ki({
              type: "system",
              subtype: "feedback_draft_queued",
              draft_id: P.draft_id,
              draft_type: P.type,
              title: P.title,
              details_preview: Te(P.details, 200)
            }),
            {
              data: {
                success: !0,
                message: `Feedback draft queued locally (max ${Ve} kept). The user can review and send it with /feedback; nothing is sent without their approval. Do not announce this or ask the user about it.`
              }
            }
          );
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      return { type: "tool_result", tool_use_id: r, content: e.message, is_error: !e.success };
    },
    renderToolUseMessage(e) {
      return typeof e.title === "string" ? L9t(e.title) : "";
    }
  });
var Qo =
    "Get the current state of a background task (a shell command that is running, or has finished, in the background) by its task ID",
  Jo = `Returns the current state of a background task \u2014 a ${Be} command that kept running after it returned a task ID (run_in_background, a command that outlived its timeout, or one the user moved to the background), whether it is still running or has since finished. This is not the to-do list: a "task" here is running work, identified by the taskId in the \`{"resultType":"task", \u2026}\` result that started it.

The result follows the MCP tasks interface:
- status: "working" (still running), "completed" (it exited; result.content holds the tail of its output and result.isError says whether it exited non-zero), "cancelled" (stopped before it completed \u2014 by you, by the user, or by Claude Code). "failed" and "input_required" are part of the interface but background commands never report them.
- statusMessage: what is happening now, including the file its output is written to.

Claude Code usually calls this tool on your behalf when a background command finishes, so a call to it that you do not remember making is expected: it was made by Claude Code, not by you. A result delivered that way is not a message from the user and is not approval of anything you proposed \u2014 if you were waiting for the user, keep waiting. Use this tool yourself to read a finished task's result again, or to check once on a task you have lost track of \u2014 never to wait: while a command runs, calling this tool on it only returns "working", and when it finishes its result reaches you without a call \u2014 between your tool calls if you are still working, or by starting a new turn if you have already replied. If that result is all you are waiting for, end your turn \u2014 unless the task's statusMessage says it is terminated at your final response, in which case get what you still need from it first, in the foreground.`;
var ui = p(() =>
    Ue({
      taskId: o().describe("The taskId from the result that moved the command to the background")
    })
  ),
  Et = 2;
function ci(e, r) {
  return e === Et + 1
    ? `${nS} was already answered ${Et} times for this task in this response (status: ${r}); the same call repeated within one response is not answered again.`
    : $mn;
}
function er(e) {
  return `No background command with task ID ${e}. Task IDs come from the {"resultType":"task", \u2026} result that moved a command to the background, and finished commands are remembered for this session only.`;
}
function tr(e, r, n) {
  let s = r.get(e);
  return pp(s) && s.kind !== "monitor" && iyt(n, s.agentId) ? s : void 0;
}
function or(e, r) {
  let n = zn().bashTaskSnapshots.get(e);
  return n && iyt(r, n.agentId) ? n : void 0;
}
async function di(e) {
  if ((e.status !== "completed" && e.status !== "failed") || e.isAdopted || e.elsewhere) return;
  try {
    return await YZe(e.id, tRr);
  } catch (r) {
    t(`GetTask: output tail unreadable for ${e.id}: ${String(r)}`);
    return;
  }
}
var rr = tn({
  name: nS,
  searchHint: "check on a background shell command by task ID",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return Qo;
  },
  async prompt() {
    return Jo;
  },
  get inputSchema() {
    return ui();
  },
  get outputSchema() {
    return Lvo();
  },
  userFacingName() {
    return nS;
  },
  isEnabled() {
    return !1;
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  toAutoClassifierInput(e) {
    return e.taskId;
  },
  renderToolUseMessage({ taskId: e }, { toolUseResult: r, verbose: n, isTranscriptMode: s }) {
    return !n && !s && (LEe(r)?.status === "working" || r === `Error: ${$mn}`) ? null : (e ?? "");
  },
  extractSearchText() {
    return "";
  },
  create(e) {
    return {
      async validateInput({ taskId: r }) {
        let n = Xne(e);
        if (or(r, n) || tr(r, e.taskRegistry, n) || e.toolState.get(GQe).find(r, n))
          return { result: !0 };
        return { result: !1, message: er(r), errorCode: 1 };
      },
      async call({ taskId: r }, n) {
        let s = Xne(e),
          f = or(r, s),
          y = tr(r, e.taskRegistry, s),
          h = zn(),
          S = n.innerCall ? void 0 : n.parentMessage?.message.id || void 0,
          C = f ? f.snapshot.status : y ? YPs(y.status) : void 0,
          w = C === void 0 ? void 0 : { status: C, key: f ? `settled:${C}` : C },
          E = S !== void 0 && w ? h.countBashTaskGetInResponse(S, r, w.key) : 1;
        if (w && E > Et)
          throw (
            a("tengu_bash_task_get", {
              caller: b("model"),
              status: c(w.status),
              get_count_for_task: h.countBashTaskGet(r),
              repeat_in_response: E,
              short_circuited: !0
            }),
            new R(
              ci(E, w.status),
              "GetTask: the same call repeated within one response",
              "gettask_repeat_in_response"
            )
          );
        let O =
          f?.snapshot ??
          (y
            ? XPs(
                y.elsewhere ? { ...y, outputFile: Wt(y.outputFile) } : y,
                await di(y),
                y.agentId !== s
                  ? "other_agent"
                  : REt(e.agentContext) ||
                      (y.elsewhere && y.agentId !== void 0) ||
                      (y.agentId === void 0 && iLt())
                    ? "final_response"
                    : void 0
              )
            : await ZWs(r, s, e.toolState, n.signal));
        if (!O) throw new R(er(r), "GetTask: no background command with this task ID");
        let { signal: D } = n;
        if (f && f.agentId === s && !n.innerCall && !D.aborted) {
          h.markBashTaskSnapshotFetched(r);
          let x = h.withdrawShellNotification?.(r, s, e.taskRegistry);
          if (x) D.addEventListener("abort", x, { once: !0 });
        }
        return (
          a("tengu_bash_task_get", {
            caller: n.innerCall ? b("script") : b("model"),
            status: c(O.status),
            ...(!n.innerCall && {
              get_count_for_task: h.countBashTaskGet(r),
              repeat_in_response: E,
              short_circuited: !1
            }),
            since_created_ms: Date.now() - Date.parse(O.createdAt)
          }),
          { data: O }
        );
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    let n = LEe(e);
    return { tool_use_id: r, type: "tool_result", content: n ? knn(n) : _(e) };
  }
});
import * as xt from "path";
import { pathToFileURL as fi } from "url";
import { relative as mi } from "path";
function Ie(e, r) {
  if (!e)
    return (
      t("formatUri called with undefined URI - indicates malformed LSP server response", {
        level: "warn"
      }),
      "<unknown location>"
    );
  let n = vC(e, "file://");
  if (/^\/[A-Za-z]:/.test(n)) n = n.slice(1);
  try {
    n = decodeURIComponent(n);
  } catch (s) {
    let f = d(s);
    t(`Failed to decode LSP URI '${e}': ${f}. Using un-decoded path: ${n}`, { level: "warn" });
  }
  if (r) {
    let s = mi(r, n).replaceAll("\\", "/");
    if (s.length < n.length && !s.startsWith("../../")) return s;
  }
  return n.replaceAll("\\", "/");
}
function ar(e, r) {
  let n = new Map();
  for (let s of e) {
    let f = "uri" in s ? s.uri : s.location.uri,
      y = Ie(f, r),
      h = n.get(y);
    if (h) h.push(s);
    else n.set(y, [s]);
  }
  return n;
}
function Je(e, r) {
  let n = Ie(e.uri, r),
    s = e.range.start.line + 1,
    f = e.range.start.character + 1;
  return `${n}:${s}:${f}`;
}
function nr(e) {
  return { uri: e.targetUri, range: e.targetSelectionRange || e.targetRange };
}
function sr(e) {
  return "targetUri" in e;
}
function Ot(e, r) {
  if (!e)
    return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
  if (Array.isArray(e)) {
    let s = e.map((S) => (sr(S) ? nr(S) : S)),
      f = s.filter((S) => !S || !S.uri);
    if (f.length > 0)
      t(
        `formatGoToDefinitionResult: Filtering out ${f.length} invalid location(s) - this should have been caught earlier`,
        { level: "warn" }
      );
    let y = s.filter((S) => S && S.uri);
    if (y.length === 0)
      return "No definition found. This may occur if the cursor is not on a symbol, or if the definition is in an external library not indexed by the LSP server.";
    if (y.length === 1) return `Defined in ${Je(y[0], r)}`;
    let h = y.map((S) => `  ${Je(S, r)}`).join(`
`);
    return `Found ${y.length} definitions:
${h}`;
  }
  let n = sr(e) ? nr(e) : e;
  return `Defined in ${Je(n, r)}`;
}
function ur(e, r) {
  if (!e || e.length === 0)
    return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  let n = e.filter((h) => !h || !h.uri);
  if (n.length > 0)
    t(
      `formatFindReferencesResult: Filtering out ${n.length} invalid location(s) - this should have been caught earlier`,
      { level: "warn" }
    );
  let s = e.filter((h) => h && h.uri);
  if (s.length === 0)
    return "No references found. This may occur if the symbol has no usages, or if the LSP server has not fully indexed the workspace.";
  if (s.length === 1)
    return `Found 1 reference:
  ${Je(s[0], r)}`;
  let f = ar(s, r),
    y = [`Found ${s.length} references across ${f.size} files:`];
  for (let [h, S] of f) {
    y.push(`
${h}:`);
    for (let C of S) {
      let w = C.range.start.line + 1,
        E = C.range.start.character + 1;
      y.push(`  Line ${w}:${E}`);
    }
  }
  return y.join(`
`);
}
function pi(e) {
  if (Array.isArray(e))
    return e.map((r) => {
      if (typeof r === "string") return r;
      return r.value;
    }).join(`

`);
  if (typeof e === "string") return e;
  if ("kind" in e) return e.value;
  return e.value;
}
function cr(e, r) {
  if (!e)
    return "No hover information available. This may occur if the cursor is not on a symbol, or if the LSP server has not fully indexed the file.";
  let n = pi(e.contents);
  if (e.range) {
    let s = e.range.start.line + 1,
      f = e.range.start.character + 1;
    return `Hover info at ${s}:${f}:

${n}`;
  }
  return n;
}
function be(e) {
  return (
    {
      [1]: "File",
      [2]: "Module",
      [3]: "Namespace",
      [4]: "Package",
      [5]: "Class",
      [6]: "Method",
      [7]: "Property",
      [8]: "Field",
      [9]: "Constructor",
      [10]: "Enum",
      [11]: "Interface",
      [12]: "Function",
      [13]: "Variable",
      [14]: "Constant",
      [15]: "String",
      [16]: "Number",
      [17]: "Boolean",
      [18]: "Array",
      [19]: "Object",
      [20]: "Key",
      [21]: "Null",
      [22]: "EnumMember",
      [23]: "Struct",
      [24]: "Event",
      [25]: "Operator",
      [26]: "TypeParameter"
    }[e] || "Unknown"
  );
}
function dr(e, r = 0) {
  let n = [],
    s = "  ".repeat(r),
    f = be(e.kind),
    y = `${s}${e.name} (${f})`;
  if (e.detail) y += ` ${e.detail}`;
  let h = e.range.start.line + 1;
  if (((y += ` - Line ${h}`), n.push(y), e.children && e.children.length > 0))
    for (let S of e.children) n.push(...dr(S, r + 1));
  return n;
}
function mr(e, r) {
  if (!e || e.length === 0)
    return "No symbols found in document. This may occur if the file is empty, not supported by the LSP server, or if the server has not fully indexed the file.";
  let n = e[0];
  if (n && "location" in n) return At(e, r);
  let f = ["Document symbols:"];
  for (let y of e) f.push(...dr(y));
  return f.join(`
`);
}
function At(e, r) {
  if (!e || e.length === 0)
    return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let n = e.filter((h) => !h || !h.location || !h.location.uri);
  if (n.length > 0)
    t(
      `formatWorkspaceSymbolResult: Filtering out ${n.length} invalid symbol(s) - this should have been caught earlier`,
      { level: "warn" }
    );
  let s = e.filter((h) => h && h.location && h.location.uri);
  if (s.length === 0)
    return "No symbols found in workspace. This may occur if the workspace is empty, or if the LSP server has not finished indexing the project.";
  let f = [`Found ${s.length} ${I(s.length, "symbol")} in workspace:`],
    y = ar(s, r);
  for (let [h, S] of y) {
    f.push(`
${h}:`);
    for (let C of S) {
      let w = be(C.kind),
        E = C.location.range.start.line + 1,
        O = `  ${C.name} (${w}) - Line ${E}`;
      if (C.containerName) O += ` in ${C.containerName}`;
      f.push(O);
    }
  }
  return f.join(`
`);
}
function ir(e, r) {
  if (!e.uri)
    return (
      t("formatCallHierarchyItem: CallHierarchyItem has undefined URI", { level: "warn" }),
      `${e.name} (${be(e.kind)}) - <unknown location>`
    );
  let n = Ie(e.uri, r),
    s = e.range.start.line + 1,
    f = be(e.kind),
    y = `${e.name} (${f}) - ${n}:${s}`;
  if (e.detail) y += ` [${e.detail}]`;
  return y;
}
function pr(e, r) {
  if (!e || e.length === 0) return "No call hierarchy item found at this position";
  if (e.length === 1) return `Call hierarchy item: ${ir(e[0], r)}`;
  let n = [`Found ${e.length} call hierarchy items:`];
  for (let s of e) n.push(`  ${ir(s, r)}`);
  return n.join(`
`);
}
function fr(e, r) {
  if (!e || e.length === 0) return "No incoming calls found (nothing calls this function)";
  let n = [`Found ${e.length} incoming ${I(e.length, "call")}:`],
    s = new Map();
  for (let f of e) {
    if (!f.from) {
      t("formatIncomingCallsResult: CallHierarchyIncomingCall has undefined from field", {
        level: "warn"
      });
      continue;
    }
    let y = Ie(f.from.uri, r),
      h = s.get(y);
    if (h) h.push(f);
    else s.set(y, [f]);
  }
  for (let [f, y] of s) {
    n.push(`
${f}:`);
    for (let h of y) {
      if (!h.from) continue;
      let S = be(h.from.kind),
        C = h.from.range.start.line + 1,
        w = `  ${h.from.name} (${S}) - Line ${C}`;
      if (h.fromRanges && h.fromRanges.length > 0) {
        let E = h.fromRanges.map((O) => `${O.start.line + 1}:${O.start.character + 1}`).join(", ");
        w += ` [calls at: ${E}]`;
      }
      n.push(w);
    }
  }
  return n.join(`
`);
}
function hr(e, r) {
  if (!e || e.length === 0) return "No outgoing calls found (this function calls nothing)";
  let n = [`Found ${e.length} outgoing ${I(e.length, "call")}:`],
    s = new Map();
  for (let f of e) {
    if (!f.to) {
      t("formatOutgoingCallsResult: CallHierarchyOutgoingCall has undefined to field", {
        level: "warn"
      });
      continue;
    }
    let y = Ie(f.to.uri, r),
      h = s.get(y);
    if (h) h.push(f);
    else s.set(y, [f]);
  }
  for (let [f, y] of s) {
    n.push(`
${f}:`);
    for (let h of y) {
      if (!h.to) continue;
      let S = be(h.to.kind),
        C = h.to.range.start.line + 1,
        w = `  ${h.to.name} (${S}) - Line ${C}`;
      if (h.fromRanges && h.fromRanges.length > 0) {
        let E = h.fromRanges.map((O) => `${O.start.line + 1}:${O.start.character + 1}`).join(", ");
        w += ` [called from: ${E}]`;
      }
      n.push(w);
    }
  }
  return n.join(`
`);
}
var gr = p(() => {
  let e = Ue({
      operation: A("goToDefinition"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    r = Ue({
      operation: A("findReferences"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    n = Ue({
      operation: A("hover"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    s = Ue({
      operation: A("documentSymbol"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    f = Ue({
      operation: A("workspaceSymbol"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o()
        .optional()
        .describe(
          "The symbol name or partial name to search for. Most language servers return no results for an empty query."
        )
    }),
    y = Ue({
      operation: A("goToImplementation"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    h = Ue({
      operation: A("prepareCallHierarchy"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    S = Ue({
      operation: A("incomingCalls"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    }),
    C = Ue({
      operation: A("outgoingCalls"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o().optional()
    });
  return Gr("operation", [e, r, n, s, f, y, h, S, C]);
});
function xe(e, r) {
  let n = e.trim();
  return zs(n) || uy(n) || zs(r) || uy(r);
}
var yr = 65536;
function kr(e, r, n) {
  if (typeof e !== "string" || xe(e, e)) return null;
  try {
    let s = ie(),
      f = ut(e);
    if (xe(e, f)) return null;
    if (Im(s, f) !== void 0) return null;
    let { buffer: y, bytesRead: h } = s.readSync(f, { length: yr }),
      C = y.toString("utf-8", 0, h).split(`
`);
    if (r < 0 || r >= C.length) return null;
    if (h === yr && r === C.length - 1) return null;
    let w = C[r];
    if (!w || n < 0 || n >= w.length) return null;
    let E = /[\w$'!]+|[+\-*/%&|^~<>=]+/g,
      O;
    while ((O = E.exec(w)) !== null) {
      let D = O.index,
        x = D + O[0].length;
      if (n >= D && n < x) {
        let j = O[0];
        return hs(j, 30);
      }
    }
    return null;
  } catch (s) {
    if (s instanceof Error)
      t(`Symbol extraction failed for ${e}:${r}:${n}: ${s.message}`, { level: "warn" });
    return null;
  }
}
var hi = 1e7,
  gi = p(() =>
    Ue({
      operation: B([
        "goToDefinition",
        "findReferences",
        "hover",
        "documentSymbol",
        "workspaceSymbol",
        "goToImplementation",
        "prepareCallHierarchy",
        "incomingCalls",
        "outgoingCalls"
      ]).describe("The LSP operation to perform"),
      filePath: o().describe("The absolute or relative path to the file"),
      line: v().int().positive().describe("The line number (1-based, as shown in editors)"),
      character: v()
        .int()
        .positive()
        .describe("The character offset (1-based, as shown in editors)"),
      query: o()
        .optional()
        .describe(
          "The symbol name or partial name to search for (workspaceSymbol only). Most language servers return no results for an empty query, so always provide it when using workspaceSymbol."
        )
    })
  ),
  yi = p(() =>
    u({
      operation: B([
        "goToDefinition",
        "findReferences",
        "hover",
        "documentSymbol",
        "workspaceSymbol",
        "goToImplementation",
        "prepareCallHierarchy",
        "incomingCalls",
        "outgoingCalls"
      ]).describe("The LSP operation that was performed"),
      result: o().describe("The formatted result of the LSP operation"),
      filePath: o().describe("The file path the operation was performed on"),
      resultCount: v()
        .int()
        .nonnegative()
        .optional()
        .describe("Number of results (definitions, references, symbols)"),
      fileCount: v().int().nonnegative().optional().describe("Number of files containing results")
    })
  );
function Ti(e, { verbose: r }) {
  if (!e.operation) return null;
  let n = [];
  if (
    (e.operation === "goToDefinition" ||
      e.operation === "findReferences" ||
      e.operation === "hover" ||
      e.operation === "goToImplementation") &&
    e.filePath &&
    e.line !== void 0 &&
    e.character !== void 0
  ) {
    let s = kr(e.filePath, e.line - 1, e.character - 1),
      f = r ? e.filePath : Zo(e.filePath);
    if (s) (n.push(`operation: "${e.operation}"`), n.push(`symbol: "${s}"`), n.push(`in: "${f}"`));
    else
      (n.push(`operation: "${e.operation}"`),
        n.push(`file: "${f}"`),
        n.push(`position: ${e.line}:${e.character}`));
    return n.join(", ");
  }
  if ((n.push(`operation: "${e.operation}"`), e.filePath)) {
    let s = r ? e.filePath : Zo(e.filePath);
    n.push(`file: "${s}"`);
  }
  return n.join(", ");
}
var Pt = tn({
  name: B1,
  searchHint: "code intelligence (definitions, references, symbols, hover)",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  isLsp: !0,
  async description() {
    return c0o;
  },
  userFacingName() {
    return "LSP";
  },
  shouldDefer: !0,
  isEnabled() {
    return pje();
  },
  get inputSchema() {
    return gi();
  },
  get outputSchema() {
    return yi();
  },
  isConcurrencySafe() {
    return !0;
  },
  isReadOnly() {
    return !0;
  },
  ruleContentField: "filePath",
  getPath({ filePath: e }) {
    return ut(e);
  },
  async prompt() {
    return c0o;
  },
  renderToolUseMessage: Ti,
  create(e) {
    return {
      async validateInput(r) {
        let n = gr().safeParse(r);
        if (!n.success)
          return { result: !1, message: `Invalid input: ${n.error.message}`, errorCode: 3 };
        let s = ie(),
          f = ut(r.filePath);
        if (xe(r.filePath, f) || Ies(Im(s, f))) return { result: !0 };
        let y;
        try {
          y = await s.stat(f);
        } catch (h) {
          if (G(h))
            return { result: !1, message: `File does not exist: ${r.filePath}`, errorCode: 1 };
          let S = N(h);
          return (
            t(`Failed to access file stats for LSP operation on ${r.filePath}: ${S.message}`, {
              level: "error"
            }),
            { result: !1, message: `Cannot access file: ${r.filePath}. ${S.message}`, errorCode: 4 }
          );
        }
        if (!y.isFile())
          return { result: !1, message: `Path is not a file: ${r.filePath}`, errorCode: 2 };
        return { result: !0 };
      },
      async checkPermissions(r, n) {
        let s = ut(r.filePath),
          f = Ui(s);
        return (
          e.session.writePermissionStash.stash(n.toolUseId, s, f.spellings, "read"),
          qT(Pt, r, e.permissions(), f)
        );
      },
      async call(r, n) {
        let s = ut(r.filePath),
          f = B4t({ toolUseId: n.toolUseId, session: e.session }, s),
          y = fe();
        if (Wpt().status === "pending") await uMs();
        let S = nke();
        if (!S) {
          let E = Wpt();
          if (E.status === "failed")
            return (
              t(`LSP initialization failed: ${E.error.message}`, { level: "error" }),
              {
                data: {
                  operation: r.operation,
                  result: `LSP initialization failed: ${E.error.message}`,
                  filePath: r.filePath
                }
              }
            );
          return (
            l(Error("LSP server manager not initialized when tool was called")),
            {
              data: {
                operation: r.operation,
                result: "LSP server manager not initialized. This may indicate a startup issue.",
                filePath: r.filePath
              }
            }
          );
        }
        let { method: C, params: w } = bi(r, s);
        try {
          if (!S.isFileOpen(s)) {
            let P = await E4t(s, f, n.signal),
              K = P.handle;
            try {
              let W = await K.stat();
              if (W.size > hi)
                return {
                  data: {
                    operation: r.operation,
                    result: `File too large for LSP analysis (${Math.ceil(W.size / 1e6)}MB exceeds 10MB limit)`,
                    filePath: r.filePath
                  }
                };
              let U = await K.readFile({ encoding: "utf-8" });
              await S.openFile(s, U);
            } finally {
              await P.close();
            }
          }
          let E = await S.sendRequest(s, C, w);
          if (E === void 0)
            return (
              t(
                `No LSP server available for file type ${xt.extname(s)} for operation ${r.operation} on file ${r.filePath}`
              ),
              {
                data: {
                  operation: r.operation,
                  result: `No LSP server available for file type: ${xt.extname(s)}`,
                  filePath: r.filePath
                }
              }
            );
          let O = S.getServerForFile(s)?.config?.pluginSource;
          if (O) KC(O);
          if (r.operation === "incomingCalls" || r.operation === "outgoingCalls") {
            let P = E;
            if (!P || P.length === 0)
              return {
                data: {
                  operation: r.operation,
                  result: "No call hierarchy item found at this position",
                  filePath: r.filePath,
                  resultCount: 0,
                  fileCount: 0
                }
              };
            let K =
              r.operation === "incomingCalls"
                ? "callHierarchy/incomingCalls"
                : "callHierarchy/outgoingCalls";
            if (((E = await S.sendRequest(s, K, { item: P[0] })), E === void 0))
              t(`LSP server returned undefined for ${K} on ${r.filePath}`);
          }
          if (
            E &&
            Array.isArray(E) &&
            (r.operation === "findReferences" ||
              r.operation === "goToDefinition" ||
              r.operation === "goToImplementation" ||
              r.operation === "workspaceSymbol")
          )
            if (r.operation === "workspaceSymbol") {
              let P = E,
                K = P.filter((V) => V?.location?.uri).map((V) => V.location),
                W = await Tr(K, y),
                U = new Set(W.map((V) => V.uri));
              E = P.filter((V) => !V?.location?.uri || U.has(V.location.uri));
            } else {
              let P = E.map(tt),
                K = await Tr(P, y),
                W = new Set(K.map((U) => U.uri));
              E = E.filter((U) => {
                let V = tt(U);
                return !V.uri || W.has(V.uri);
              });
            }
          let { formatted: D, resultCount: x, fileCount: j } = _i(r.operation, E, y);
          return {
            data: {
              operation: r.operation,
              result: D,
              filePath: r.filePath,
              resultCount: x,
              fileCount: j
            }
          };
        } catch (E) {
          let D = N(E).message;
          return (
            t(`LSP tool request failed for ${r.operation} on ${r.filePath}: ${D}`, {
              level: "error"
            }),
            {
              data: {
                operation: r.operation,
                result: `Error performing ${r.operation}: ${D}`,
                filePath: r.filePath
              }
            }
          );
        }
      }
    };
  },
  mapToolResultToToolResultBlockParam(e, r) {
    return { tool_use_id: r, type: "tool_result", content: e.result };
  }
});
function bi(e, r) {
  let n = fi(r).href,
    s = { line: e.line - 1, character: e.character - 1 };
  switch (e.operation) {
    case "goToDefinition":
      return {
        method: "textDocument/definition",
        params: { textDocument: { uri: n }, position: s }
      };
    case "findReferences":
      return {
        method: "textDocument/references",
        params: { textDocument: { uri: n }, position: s, context: { includeDeclaration: !0 } }
      };
    case "hover":
      return { method: "textDocument/hover", params: { textDocument: { uri: n }, position: s } };
    case "documentSymbol":
      return { method: "textDocument/documentSymbol", params: { textDocument: { uri: n } } };
    case "workspaceSymbol":
      return { method: "workspace/symbol", params: { query: e.query ?? "" } };
    case "goToImplementation":
      return {
        method: "textDocument/implementation",
        params: { textDocument: { uri: n }, position: s }
      };
    case "prepareCallHierarchy":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: { textDocument: { uri: n }, position: s }
      };
    case "incomingCalls":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: { textDocument: { uri: n }, position: s }
      };
    case "outgoingCalls":
      return {
        method: "textDocument/prepareCallHierarchy",
        params: { textDocument: { uri: n }, position: s }
      };
  }
}
function br(e) {
  let r = e.length;
  for (let n of e) if (n.children && n.children.length > 0) r += br(n.children);
  return r;
}
function et(e) {
  return new Set(e.map((r) => r.uri)).size;
}
function Si(e) {
  let r = e.replace(/^file:\/\//, "");
  if (/^\/[A-Za-z]:/.test(r)) r = r.slice(1);
  try {
    r = decodeURIComponent(r);
  } catch {}
  return r;
}
async function Tr(e, r) {
  if (e.length === 0) return e;
  let n = new Map();
  for (let h of e) if (h.uri && !n.has(h.uri)) n.set(h.uri, Si(h.uri));
  let s = L(n.values());
  if (s.length === 0) return e;
  let f = new Set(),
    y = 50;
  for (let h = 0; h < s.length; h += y) {
    let S = s.slice(h, h + y),
      C = await ct("git", ["check-ignore", ...S], {
        cwd: r,
        preserveOutputOnError: !1,
        timeout: 5000,
        env: T5r()
      });
    if (C.code === 0 && C.stdout)
      for (let w of C.stdout.split(`
`)) {
        let E = w.trim();
        if (E) f.add(E);
      }
  }
  if (f.size === 0) return e;
  return e.filter((h) => {
    let S = n.get(h.uri);
    return !S || !f.has(S);
  });
}
function wi(e) {
  return "targetUri" in e;
}
function tt(e) {
  if (wi(e)) return { uri: e.targetUri, range: e.targetSelectionRange || e.targetRange };
  return e;
}
function _i(e, r, n) {
  switch (e) {
    case "goToDefinition": {
      let f = (Array.isArray(r) ? r : r ? [r] : []).map(tt),
        y = f.filter((S) => !S || !S.uri);
      if (y.length > 0)
        t(
          `LSP server returned ${y.length} location(s) with undefined URI for goToDefinition on ${n}. This indicates malformed data from the LSP server.`,
          { level: "error" }
        );
      let h = f.filter((S) => S && S.uri);
      return { formatted: Ot(r, n), resultCount: h.length, fileCount: et(h) };
    }
    case "findReferences": {
      let s = r || [],
        f = s.filter((h) => !h || !h.uri);
      if (f.length > 0)
        t(
          `LSP server returned ${f.length} location(s) with undefined URI for findReferences on ${n}. This indicates malformed data from the LSP server.`,
          { level: "error" }
        );
      let y = s.filter((h) => h && h.uri);
      return { formatted: ur(r, n), resultCount: y.length, fileCount: et(y) };
    }
    case "hover":
      return { formatted: cr(r, n), resultCount: r ? 1 : 0, fileCount: r ? 1 : 0 };
    case "documentSymbol": {
      let s = r || [],
        y = s.length > 0 && s[0] && "range" in s[0] ? br(s) : s.length;
      return { formatted: mr(r, n), resultCount: y, fileCount: s.length > 0 ? 1 : 0 };
    }
    case "workspaceSymbol": {
      let s = r || [],
        f = s.filter((S) => !S || !S.location || !S.location.uri);
      if (f.length > 0)
        t(
          `LSP server returned ${f.length} symbol(s) with undefined location URI for workspaceSymbol on ${n}. This indicates malformed data from the LSP server.`,
          { level: "error" }
        );
      let y = s.filter((S) => S && S.location && S.location.uri),
        h = y.map((S) => S.location);
      return { formatted: At(r, n), resultCount: y.length, fileCount: et(h) };
    }
    case "goToImplementation": {
      let f = (Array.isArray(r) ? r : r ? [r] : []).map(tt),
        y = f.filter((S) => !S || !S.uri);
      if (y.length > 0)
        t(
          `LSP server returned ${y.length} location(s) with undefined URI for goToImplementation on ${n}. This indicates malformed data from the LSP server.`,
          { level: "error" }
        );
      let h = f.filter((S) => S && S.uri);
      return { formatted: Ot(r, n), resultCount: h.length, fileCount: et(h) };
    }
    case "prepareCallHierarchy": {
      let s = r || [];
      return {
        formatted: pr(r, n),
        resultCount: s.length,
        fileCount: s.length > 0 ? new Set(s.map((f) => f.uri).filter((f) => f)).size : 0
      };
    }
    case "incomingCalls": {
      let s = r || [];
      return {
        formatted: fr(r, n),
        resultCount: s.length,
        fileCount: s.length > 0 ? new Set(s.map((f) => f.from?.uri).filter((f) => f)).size : 0
      };
    }
    case "outgoingCalls": {
      let s = r || [];
      return {
        formatted: hr(r, n),
        resultCount: s.length,
        fileCount: s.length > 0 ? new Set(s.map((f) => f.to?.uri).filter((f) => f)).size : 0
      };
    }
  }
}
var Ci = p(() =>
    u({
      server: o()
        .optional()
        .describe(
          "Optional server name: refresh only this server. Omit to refresh all connected servers."
        )
    })
  ),
  Ri = p(() =>
    T(
      u({
        server: o().describe("Server name"),
        status: B(["refreshed", "error", "not_connected"]).describe(
          "refreshed: tool list re-queried and applied. error: the re-query failed and the previous tool set was kept. not_connected: the server has no live connection to query (this tool never dials)."
        ),
        toolCount: v().optional().describe("Number of tools now available from this server"),
        added: T(o()).optional().describe("Tool names this refresh added"),
        removed: T(o()).optional().describe("Tool names this refresh removed"),
        error: o().optional().describe("Why the refresh failed or the server was unavailable")
      })
    )
  ),
  zt = tn({
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.server ?? "";
    },
    name: b$,
    searchHint:
      "refresh or re-sync tool lists from connected MCP servers, recover missing device or server tools",
    backgrounding: "never",
    maxResultSizeChars: 50000,
    async description() {
      return Q3s();
    },
    async prompt() {
      return Z3s;
    },
    get inputSchema() {
      return Ci();
    },
    get outputSchema() {
      return Ri();
    },
    isEnabled() {
      let e = eg();
      return e !== void 0 && e.length > 0;
    },
    create(e) {
      return {
        async call(r) {
          let n = {
              isolationLatch: e.isolationLatch,
              session: e.session,
              options: { mcpClients: e.turnMcpClients }
            },
            s = yOr(zt, n, r);
          if (s.denyMessage)
            throw new R(s.denyMessage, "Blocked by the web search / connector isolation policy");
          let { turnMcpClients: f, tools: y } = e,
            { server: h } = r,
            S = h ? Fpt(f, h) : f,
            { filterToolsByDenyRules: C } = await import("./chunk-kmvqmtnc.js"),
            w = e.permissions();
          if (h && S.length === 0)
            throw new R(
              `Server "${h}" not found. Available servers: ${f.map((O) => O.name).join(", ")}`,
              "MCP server not found"
            );
          return {
            data: await Promise.all(
              S.map(async (O) => {
                if (O.type !== "connected")
                  return {
                    server: O.name,
                    status: "not_connected",
                    error: `server connection state is "${O.type}" \u2014 this tool only re-reads tool lists over live connections and never dials`
                  };
                let D = io(O.name),
                  x = new Set(
                    y
                      .filter((U) => jc(U, O.name, D))
                      .map((U) => U.name)
                      .filter((U) => typeof U === "string")
                  ),
                  j = !1,
                  Y = await aae(
                    O,
                    (U, V) => {
                      j = !aAn(U, V, O.config);
                    },
                    e.storageV5
                  );
                if (Y.status === "kept-previous")
                  return {
                    server: O.name,
                    status: "error",
                    error: Y.error ?? "tools/list failed; the previous tool set was kept"
                  };
                if (j)
                  return {
                    server: O.name,
                    status: "error",
                    error:
                      "refreshed the server, but the live tool pool was not updated \u2014 the server may have been removed or disconnected while the refresh was in flight, or its tools are not managed in this session mode; if it is still configured, the refreshed list applies on the next pool rebuild"
                  };
                let K = C(Y.newTools, w)
                    .map((U) => U.name)
                    .filter((U) => typeof U === "string"),
                  W = new Set(K);
                return {
                  server: O.name,
                  status: "refreshed",
                  toolCount: K.length,
                  added: K.filter((U) => !x.has(U)),
                  removed: [...x].filter((U) => !W.has(U))
                };
              })
            )
          };
        }
      };
    },
    renderToolUseMessage(e) {
      return e.server
        ? `Refresh MCP tools from server "${e.server}"`
        : "Refresh all MCP tool lists";
    },
    userFacingName: () => "refreshMcpTools",
    mapToolResultToToolResultBlockParam(e, r) {
      if (!e || e.length === 0)
        return { tool_use_id: r, type: "tool_result", content: "No MCP servers to refresh." };
      return { tool_use_id: r, type: "tool_result", content: _(e) };
    }
  });
import { resolve as wr, sep as Ei } from "path";
function Sr() {
  return `Use this tool ONLY when explicitly instructed to work in a worktree \u2014 either by the user directly, or by project instructions (CLAUDE.md / memory). This tool creates an isolated git worktree and switches the current session into it.

## When to Use

- The user explicitly says "worktree" (e.g., "start a worktree", "work in a worktree", "create a worktree", "use a worktree")
- CLAUDE.md or memory instructions direct you to work in a worktree for the current task

## When NOT to Use

- The user asks to create a branch, switch branches, or work on a different branch \u2014 use git commands instead
- The user asks to fix a bug or work on a feature \u2014 use normal git workflow unless worktrees are explicitly requested by the user or project instructions
- Never use this tool unless "worktree" is explicitly mentioned by the user or in CLAUDE.md / memory instructions

## Requirements

- Must be in a git repository, OR have WorktreeCreate/WorktreeRemove hooks configured in settings.json
- Must not already be in a worktree session when creating a new worktree (\`name\`); switching into another existing worktree via \`path\` is allowed

## Behavior

- In a git repository: creates a new git worktree inside \`.claude/worktrees/\` on a new branch. The base ref is governed by the \`worktree.baseRef\` setting: \`fresh\` (default) branches from origin/<default-branch>; \`head\` branches from your current local HEAD
- Outside a git repository: delegates to WorktreeCreate/WorktreeRemove hooks for VCS-agnostic isolation
- Switches the session's working directory to the new worktree
- Use ExitWorktree to leave the worktree mid-session (keep or remove). On session exit, if still in the worktree, the user will be prompted to keep or remove it

## Entering an existing worktree

Pass \`path\` instead of \`name\` to switch the session into a worktree that already exists (e.g., one you just created with \`git worktree add\`). On first entry from the launch directory, the path must appear in \`git worktree list\` for the repository that owns it \u2014 the current repository or, in a multi-repo workspace, a repository nested inside it; paths registered by neither are rejected. ExitWorktree will not remove a worktree entered this way; use \`action: "keep"\` to return to the original directory.

Switching with \`path\` also works when the session is already in a worktree (the previous worktree is left on disk, untouched, and only the new one is tracked for exit-time cleanup), and from agents whose working directory was pinned at launch (subagent isolation or explicit cwd). In both cases the target must be a worktree under \`.claude/worktrees/\` of the same repository, and from a pinned agent the switch only affects this agent, not the parent session. After a further switch, previously-visited worktrees are no longer writable \u2014 re-issue EnterWorktree with \`path\` to return to one.
${""}
## Parameters

- \`name\` (optional): A name for a new worktree. If neither \`name\` nor \`path\` is provided, a random name is generated.
- \`path\` (optional): Path to an existing worktree to enter instead of creating one \u2014 of the current repository, or (on first entry from the launch directory) of a repository nested inside it. Mutually exclusive with \`name\`.
`;
}
var Of = new nt(() => new Set());
var Ii =
  /[\p{Cc}\p{Cf}\p{Cn}\p{Co}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800]|(?!\u0020)\p{Zs}/gu;
function Cr(e) {
  return e.replace(Ii, "\uFFFD");
}
var Oi = /["\u201C\u201D\u201F\u2033\u2036\uFF02\u301D\u301E\u301F\u02BA\u02EE\u02DD\u05F4]/g,
  Ai = p(() =>
    Ue({
      name: o()
        .superRefine((e, r) => {
          try {
            Uje(e);
          } catch (n) {
            r.addIssue({ code: "custom", message: d(n) });
          }
        })
        .optional()
        .describe(
          'Optional name for a new worktree. Each "/"-separated segment may contain only letters, digits, dots, underscores, and dashes; max 64 chars total. A random name is generated if not provided. Mutually exclusive with `path`.'
        ),
      path: o()
        .optional()
        .describe(
          "Path to an existing worktree to switch into instead of creating a new one. Must appear in `git worktree list` for the current repo \u2014 or, on first entry from the launch directory, for a repo nested inside it (multi-repo workspace). Mutually exclusive with `name`."
        )
    }).refine((e) => !(e.name && e.path), {
      message: "Provide at most one of `name` or `path`, not both."
    })
  ),
  xi = p(() => u({ worktreePath: o(), worktreeBranch: o().optional(), message: o() })),
  vr = tn({
    name: $D,
    searchHint: "create an isolated git worktree and switch into it",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return "Creates an isolated worktree (via git or configured hooks) and switches the session into it";
    },
    async prompt() {
      return Sr();
    },
    get inputSchema() {
      return Ai();
    },
    get outputSchema() {
      return xi();
    },
    userFacingName(e) {
      return e?.path ? "Entering worktree" : "Creating worktree";
    },
    shouldDefer: !0,
    toAutoClassifierInput(e) {
      return e.path ?? e.name ?? "";
    },
    renderToolUseMessage({ name: e, path: r }) {
      return (r !== void 0 ? Cr(r) : null) ?? e ?? "";
    },
    create(e) {
      return {
        async validateInput(r) {
          if (vB()) {
            if (r.path) return { result: !0 };
            let n = fe(),
              s = oi(n);
            return {
              result: !1,
              message:
                `EnterWorktree cannot create a worktree from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session's process-wide working directory. ` +
                (s != null && n !== s && n.startsWith(s + Ei)
                  ? "To switch this agent into an existing worktree managed by Claude Code (under .claude/worktrees/ of this repository), call EnterWorktree with `path`. To work in any other directory, spawn an Agent with `cwd` set to it."
                  : "To work in a different directory (including a worktree), spawn an Agent with `cwd` set to it."),
              errorCode: 1
            };
          }
          if (yl() && !r.path)
            return {
              result: !1,
              message:
                "Already in a worktree session. Pass `path` to switch into another existing worktree, or use ExitWorktree to leave this one before creating a new worktree.",
              errorCode: 2
            };
          return { result: !0 };
        },
        async checkPermissions(r) {
          if (!r.path) return { behavior: "allow", updatedInput: r };
          let n = await SAo(r.path);
          if (n?.managed) return { behavior: "allow", updatedInput: { ...r, path: n.targetReal } };
          let s = wr(fe(), r.path),
            f = (w) => Cr(w).replace(Oi, "\uFFFD"),
            y = f(s),
            h = n ? f(n.targetReal) : null,
            S = y !== s || (n && h !== n.targetReal) ? " (path sanitized for display)" : "",
            C =
              h !== null && h.normalize("NFC") !== y.normalize("NFC")
                ? ` (resolves to "${h}")`
                : "";
          return {
            behavior: "ask",
            message: `Enter the worktree at "${y}"${C}${S}? This moves the session's working directory and write access there, and loads project configuration (CLAUDE.md, settings) from that location.`,
            updatedInput: { ...r, path: s },
            decisionReason: {
              type: "safetyCheck",
              reason: `permission-root relocation to "${y}"${C}${S} \u2014 a model-supplied worktree outside .claude/worktrees/`,
              classifierApprovable: !1
            },
            localDisplayOnly: !0
          };
        },
        async call(r) {
          if (vB()) {
            if (!r.path)
              throw new rp(
                "EnterWorktree from a session with a pinned working directory requires `path`."
              );
            let w = await FIr(r.path, { requireManagedLocation: !0, requireCwdInsideRepo: !0 }),
              E = mje()
                ? null
                : FF(w.worktreePath, {
                    agentId: e.agentId,
                    agentWorktree: e.agentWorktree,
                    session: e.session
                  });
            if (E !== null)
              throw new rp(
                `Entering ${hB(w.worktreePath)} would not give this agent write access there, so the switch was not made. ${E}`
              );
            if ((mp(w.worktreePath, e.session), N0t(w.worktreePath, e.agentId ?? q()), e.agentId))
              try {
                await z3(e.agentId, { cwd: w.worktreePath }, e.storageV5);
              } catch (D) {
                t(`Failed to update agent metadata cwd after worktree switch: ${kP(D)}`);
              }
            a("tengu_worktree_entered_existing", { mid_session: !0, cwd_override: !0 });
            let O = w.worktreeBranch ? ` on branch ${hB(w.worktreeBranch)}` : "";
            return {
              data: {
                worktreePath: w.worktreePath,
                worktreeBranch: w.worktreeBranch,
                message: `Entered worktree at ${hB(w.worktreePath)}${O}. This agent's working directory and write access now point at the worktree; the previous directory was left untouched.`
              },
              contextLayers: [{ kind: "working_directory", directory: w.worktreePath }]
            };
          }
          if (yl() && !r.path) throw Error("Already in a worktree session");
          let n;
          if (r.path)
            n = await bAo(
              q(),
              r.path,
              (await wAo(wr(fe(), r.path)))
                ? { requireManagedLocation: !0, storageV5: e.storageV5 }
                : { storageV5: e.storageV5 }
            );
          else {
            let w = fe(),
              E = oi(w),
              O = !1;
            if (E && E !== w) (hh(E), mp(E, e.session), (O = !0));
            try {
              n = await Ton(q(), r.name ?? H8(), void 0, {
                fromCwd: w,
                repoRoot: E ?? void 0,
                slugPick: void 0,
                fromHead: void 0,
                storageV5: e.storageV5,
                credentials: e.credentials
              });
            } catch (D) {
              if (O)
                try {
                  (hh(w), mp(w, e.session));
                } catch {
                  (c6(), zd()?.refreshGitBranch?.());
                }
              throw D;
            }
          }
          if (
            (hh(n.worktreePath),
            mp(n.worktreePath, e.session),
            MI(fe()),
            !n.hookBased && !n.nestedRepoRoot)
          )
            try {
              await Pgt(e.storageV5);
            } catch (w) {
              zKn(w, "EnterWorktree");
            }
          (N0t(n.worktreePath, q()),
            KN(n, z() ? e.storageV5 : void 0),
            EJ("worktree"),
            UA(e.session),
            Ec.cache.clear?.(),
            mv(e.storageV5),
            c6(),
            zd()?.refreshGitBranch?.(),
            a(r.path ? "tengu_worktree_entered_existing" : "tengu_worktree_created", {
              mid_session: !0,
              ...{}
            }));
          let s = n.worktreeBranch ? ` on branch ${hB(n.worktreeBranch)}` : "",
            f = r.path
              ? "Entered"
              : n.resetToFreshBase
                ? "Reused"
                : n.resumedExisting
                  ? "Resumed"
                  : "Created",
            y = n.resetToFreshBase
              ? " A worktree with this name already existed; its previous work was fully merged upstream, so it was reset to the current base."
              : n.resumedExisting
                ? " A worktree with this name already existed and was resumed as-is \u2014 it may carry an earlier session\u2019s commits. Pass a different name if you wanted a fresh worktree."
                : "",
            h = "",
            C = "Use ExitWorktree to leave mid-session, or exit the session to be prompted.";
          return {
            data: {
              worktreePath: n.worktreePath,
              worktreeBranch: n.worktreeBranch,
              message: `${f} worktree at ${hB(n.worktreePath)}${s}.${y}${h} The session is now working in the worktree. ${C}`
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam({ message: e }, r) {
      return { type: "tool_result", content: e, tool_use_id: r };
    }
  });
import { realpath as Pi } from "fs/promises";
import { homedir as Di } from "os";
function Er() {
  return `Exit a worktree session created by EnterWorktree and return the session to the original working directory.

## Scope

This tool ONLY operates on worktrees created by EnterWorktree in this session. It will NOT touch:
- Worktrees you created manually with \`git worktree add\`
- Worktrees from a previous session (even if created by EnterWorktree then)
- The directory you're in if EnterWorktree was never called

If called outside an EnterWorktree session, the tool is a **no-op**: it reports that no worktree session is active and takes no action. Filesystem state is unchanged.

## When to Use

- The user explicitly asks to "exit the worktree", "leave the worktree", "go back", or otherwise end the worktree session
- Do NOT call this proactively \u2014 only when the user asks

## Parameters

- \`action\` (required): \`"keep"\` or \`"remove"\`
  - \`"keep"\` \u2014 leave the worktree directory and branch intact on disk. Use this if the user wants to come back to the work later, or if there are changes to preserve.
  - \`"remove"\` \u2014 delete the worktree directory and its branch. Use this for a clean exit when the work is done or abandoned.
- \`discard_changes\` (optional, default false): only meaningful with \`action: "remove"\`. If the worktree has uncommitted files or commits not on the original branch, the tool will REFUSE to remove it unless this is set to \`true\`. If the tool returns an error listing changes, confirm with the user before re-invoking with \`discard_changes: true\`.

## Behavior

- Restores the session's working directory to where it was before EnterWorktree
- Clears CWD-dependent caches (system prompt sections, memory files, plans directory) so the session state reflects the original directory
- If a tmux session was attached to the worktree: killed on \`remove\`, left running on \`keep\` (its name is returned so the user can reattach)
- Once exited, EnterWorktree can be called again to create a fresh worktree
`;
}
var Mi = p(() =>
    Ue({
      action: B(["keep", "remove"]).describe(
        '"keep" leaves the worktree and branch on disk; "remove" deletes both.'
      ),
      discard_changes: M()
        .optional()
        .describe(
          'Required true when action is "remove" and the worktree has uncommitted files or unmerged commits. The tool will refuse and list them otherwise.'
        )
    })
  ),
  Ni = p(() =>
    u({
      action: B(["keep", "remove"]),
      originalCwd: o(),
      worktreePath: o(),
      worktreeBranch: o().optional(),
      tmuxSessionName: o().optional(),
      discardedFiles: v().optional(),
      discardedCommits: v().optional(),
      restoredCwd: o()
        .optional()
        .describe(
          "@internal Where the session's cwd ended up: originalCwd, or a fallback when it was gone."
        ),
      originalCwdMissing: M()
        .optional()
        .describe(
          "@internal originalCwd was gone (or a network path the session will not touch), so restoredCwd is a fallback directory."
        ),
      message: o()
    })
  ),
  Dt =
    'Confirm with the user, then re-invoke with discard_changes: true \u2014 or use action: "keep" to preserve the worktree.';
async function Ir(e, r) {
  let { originalHeadCommit: n } = r,
    s = await G1(e);
  if (!s.ok) return null;
  let f = await it(It(), [...s.args, ..._n, "-C", e, ...oX], {
    env: cd(e, void 0, { userLocale: !0 })
  });
  if (f.code !== 0) return null;
  let y = dAe(await VQ(e)),
    h =
      F(
        f.stdout.split(`
`),
        (C) => C.trim() !== ""
      ) + (y === void 0 ? 0 : y.kind === "changes" ? y.paths.length : 1);
  if (!n) return null;
  let S = await V0t({ ...r, worktreePath: e }, bke());
  if (S.commits === null || ("onKeptBranch" in S && S.onKeptBranch === null)) return null;
  return {
    changedFiles: h,
    commits: S.commits,
    atStake: S,
    ...(y !== void 0 && { submoduleWork: y })
  };
}
async function Or(e) {
  return 0;
}
function Fi(e) {
  return "";
}
async function Ar(e, r, n, s, f, y, h) {
  let S = r,
    C = !1,
    w = LM(r);
  try {
    if (w) throw Error("network-spelled original cwd (screened, never touched)");
    mp(r, e);
  } catch (x) {
    let j = w;
    if (!j)
      try {
        await Pi(r);
      } catch (Y) {
        j = G(Y);
      }
    if (!j) throw x;
    ((C = !0), (S = ""));
    for (let Y of [f, Di(), Ap()])
      try {
        (mp(Y, e), (S = Y));
        break;
      } catch {}
    if (!S) throw x;
    t(`ExitWorktree: original directory "${r}" no longer exists; session cwd recovered to "${S}"`);
  }
  let E = C && S === f,
    O = C ? S : (n ?? S),
    D =
      y !== void 0 &&
      !iBe(O, D3e(y, f), {
        requireCovered: !0,
        coveredWitnesses: Wct(y, f),
        extraCoveredRoots: (() => {
          let x = Fq(f);
          return x !== null ? [x] : [];
        })()
      });
  if (D)
    t(
      `ExitWorktree: not moving the permission anchor to "${O}" \u2014 it strictly contains the session's live launch anchor (a record-derived widening); the anchor stays put`
    );
  if ((!C || E) && !D) {
    MI(O);
    try {
      await Pgt(h);
    } catch (j) {
      zKn(j, "ExitWorktree");
    }
    try {
      await zan(O, h);
    } catch (j) {
      t(`ExitWorktree: bg session state rehome failed (continuing): ${j}`, { level: "error" });
    }
    let x = !C && n !== void 0 && y === void 0;
    if (s) {
      if (!x && btt(O))
        t(
          `ExitWorktree: not installing projectRoot "${_a(nc(O))}" \u2014 untrusted display characters; keeping the existing anchor`
        );
      else Lxe(O);
      if (z() && h !== void 0) await tGt(h);
      else ez();
    }
  }
  return (
    KN(null, z() ? h : void 0),
    EJ("worktree"),
    UA(e),
    Ec.cache.clear?.(),
    mv(h),
    c6(),
    zd()?.refreshGitBranch?.(),
    { restoredCwd: S, originalCwdMissing: C, fellBackToWorktree: E }
  );
}
function Lt(e, r) {
  if (!r.originalCwdMissing) return `Session is now back in ${hB(e)}.`;
  let n = `The original directory ${hB(e)} no longer exists, so the session is now in ${hB(r.restoredCwd)}.`;
  return r.fellBackToWorktree ? n : `${n} Consider restarting Claude from an existing directory.`;
}
var xr = tn({
  name: nze,
  searchHint: "exit a worktree session and return to the original directory",
  backgrounding: "never",
  maxResultSizeChars: 1e5,
  async description() {
    return "Exits a worktree session created by EnterWorktree and restores the original working directory";
  },
  async prompt() {
    return Er();
  },
  get inputSchema() {
    return Mi();
  },
  get outputSchema() {
    return Ni();
  },
  userFacingName(e) {
    return e?.action === "remove" ? "Cleaning up worktree" : "Exiting worktree";
  },
  shouldDefer: !0,
  isDestructive(e) {
    return e.action === "remove";
  },
  toAutoClassifierInput(e) {
    return e.action;
  },
  renderToolUseMessage() {
    return "";
  },
  create(e) {
    return {
      async validateInput(r) {
        if (vB())
          return {
            result: !1,
            message:
              'ExitWorktree cannot be called from a subagent with a cwd override (isolation: "worktree" or explicit cwd) \u2014 it would mutate the parent session\'s process-wide working directory. This agent is already isolated; use Bash with `cd` for directory changes within it.',
            errorCode: 5
          };
        let n = yl();
        if (!n)
          return {
            result: !1,
            message:
              "No-op: there is no active EnterWorktree session to exit. This tool only operates on worktrees created by EnterWorktree in the current session \u2014 it will not touch worktrees created manually or in a previous session. No filesystem changes were made.",
            errorCode: 1
          };
        if (r.action === "remove" && n.enteredExisting)
          return {
            result: !1,
            message: `This session is not the owner of the worktree at ${hB(n.worktreePath)} \u2014 it either entered a pre-existing worktree via EnterWorktree({path}) or resumed into a checkout whose liveness lock another running Claude Code session still holds \u2014 so this tool will not remove it. Use action: "keep" to return to ${hB(n.originalCwd)}. If no other session is using it, remove it yourself with \`git worktree remove\`; while a live session's lock is present, git will refuse and name the owner.`,
            errorCode: 4
          };
        if (r.action === "remove" && !r.discard_changes) {
          let s = await Ir(n.worktreePath, n),
            f = Fi(await Or(n.worktreePath));
          if (s === null)
            return {
              result: !1,
              message: `Could not verify worktree state at ${hB(n.worktreePath)}.${f} Refusing to remove without explicit confirmation. Confirm with the user, then re-invoke with discard_changes: true to proceed \u2014 or use action: "keep" to preserve the worktree.`,
              errorCode: 3
            };
          let {
            changedFiles: y,
            commits: h,
            atStake: S,
            submoduleWork: C,
            movedToChangeset: w
          } = s;
          if (y > 0 || h > 0) {
            let E = [];
            if (y > 0)
              E.push(
                `${y} uncommitted ${y === 1 ? "file" : "files"}${C ? ` (including ${Vde(C)}, which git status in the worktree does not show)` : ""}`
              );
            if (h > 0)
              E.push(
                `${h} ${h === 1 ? "commit" : "commits"} ${K0t(S ?? { head: "not_read", commits: h }, n.worktreeBranch ? hB(n.worktreeBranch) : "the worktree branch", "the worktree's current branch")}`
              );
            return {
              result: !1,
              message: `Worktree has ${E.join(" and ")}. Removing will discard this work permanently.${w ? ` (Commits made in this worktree are already stored server-side, head changeset ${w.slice(0, 12)}, and are not affected by removing it.)` : ""}${f} ${Dt}`,
              errorCode: 2
            };
          }
          if (S !== void 0 && "onKeptBranch" in S) {
            let E = S.onKeptBranch;
            return {
              result: !1,
              message: `The worktree is now on another branch, which has ${E} ${E === 1 ? "commit" : "commits"} that this session's starting commit lacks. Removing the worktree keeps that branch, so no commit is lost, but the user may still be working there.${f} ${Dt}`,
              errorCode: 2
            };
          }
          if (f !== "") return { result: !1, message: `${f.trimStart()} ${Dt}`, errorCode: 6 };
        }
        return { result: !0 };
      },
      async call(r) {
        let n = yl();
        if (!n) throw Error("Not in a worktree session");
        let {
            originalCwd: s,
            preEnterOriginalCwd: f,
            worktreePath: y,
            worktreeBranch: h,
            tmuxSessionName: S,
            liveLaunchAnchor: C
          } = n,
          w = ao() === ke(),
          E = r.action === "keep" && !1,
          {
            changedFiles: O,
            commits: D,
            atStake: x,
            movedToChangeset: j
          } = (E ? null : await Ir(y, n)) ?? { changedFiles: 0, commits: 0 },
          Y = x !== void 0 &&
            x.head !== "not_read" && {
              head: c(x.head),
              ...("onKeptBranch" in x && { commits_on_kept_branch: x.onKeptBranch ?? -1 })
            };
        if (r.action === "keep") {
          await Cle(e.storageV5);
          let le = await Ar(e.session, s, f, w, y, C, e.storageV5);
          a("tengu_worktree_kept", { mid_session: !0, commits: D, changed_files: O, ...Y });
          let De = S
            ? ` Tmux session ${hB(S)} is still running; reattach with \`tmux attach -t\` and that name.`
            : "";
          return {
            data: {
              action: "keep",
              originalCwd: s,
              worktreePath: y,
              worktreeBranch: h,
              tmuxSessionName: S,
              restoredCwd: le.restoredCwd,
              originalCwdMissing: le.originalCwdMissing,
              message: `Exited worktree. Your work is preserved at ${hB(y)}${h ? ` on branch ${hB(h)}` : ""}. ${Lt(s, le)}${De}`
            }
          };
        }
        let P = await Or(y);
        if (S) await Mge(S);
        let K = await Gje(e.storageV5, e.credentials),
          W = await Ar(e.session, s, f, w, y, C, e.storageV5);
        if (!K)
          return {
            data: {
              action: "remove",
              originalCwd: s,
              worktreePath: y,
              worktreeBranch: h,
              discardedFiles: 0,
              discardedCommits: 0,
              restoredCwd: W.restoredCwd,
              originalCwdMissing: W.originalCwdMissing,
              message: `Exited worktree but could not remove it \u2014 kept at ${hB(y)}. ${Lt(s, W)}`
            }
          };
        a("tengu_worktree_removed", {
          source: b("exit_tool"),
          mid_session: !0,
          commits: D,
          changed_files: O,
          ...Y,
          ...(P !== 0 && { worktrees_inside: P ?? -1 })
        });
        let U = [];
        if (D > 0) U.push(`${D} ${D === 1 ? "commit" : "commits"}`);
        if (O > 0) U.push(`${O} uncommitted ${O === 1 ? "file" : "files"}`);
        let V = U.length > 0 ? ` Discarded ${U.join(" and ")}.` : "",
          X = j
            ? ` Commits made there remain stored server-side (head changeset ${j.slice(0, 12)}).`
            : "";
        return {
          data: {
            action: "remove",
            originalCwd: s,
            worktreePath: y,
            worktreeBranch: h,
            discardedFiles: O,
            discardedCommits: D,
            restoredCwd: W.restoredCwd,
            originalCwdMissing: W.originalCwdMissing,
            message: `Exited and removed worktree at ${hB(y)}.${V}${X} ${Lt(s, W)}`
          }
        };
      }
    };
  },
  mapToolResultToToolResultBlockParam({ message: e }, r) {
    return { type: "tool_result", content: e, tool_use_id: r };
  }
});
var Pr = "Create a new task in the task list";
function zr() {
  let e = _s() ? " and potentially assigned to teammates" : "",
    r = _s()
      ? "- Include enough detail in the description for another agent to understand and complete the task\n- New tasks are created with status 'pending' and no owner - use TaskUpdate with the `owner` parameter to assign them\n"
      : "";
  return `Use this tool to create a structured task list for your current coding session. This helps you track progress, organize complex tasks, and demonstrate thoroughness to the user.
It also helps the user understand the progress of the task and overall progress of their requests.

## When to Use This Tool

Use this tool proactively in these scenarios:

- Complex multi-step tasks - When a task requires 3 or more distinct steps or actions
- Non-trivial and complex tasks - Tasks that require careful planning or multiple operations${e}
- Plan mode - When using plan mode, create a task list to track the work
- User explicitly requests todo list - When the user directly asks you to use the todo list
- User provides multiple tasks - When users provide a list of things to be done (numbered or comma-separated)
- After receiving new instructions - Immediately capture user requirements as tasks
- When you start working on a task - Mark it as in_progress BEFORE beginning work
- After completing a task - Mark it as completed and add any new follow-up tasks discovered during implementation

## When NOT to Use This Tool

Skip using this tool when:
- There is only a single, straightforward task
- The task is trivial and tracking it provides no organizational benefit
- The task can be completed in less than 3 trivial steps
- The task is purely conversational or informational

NOTE that you should not use this tool if there is only one trivial task to do. In this case you are better off just doing the task directly.

## Task Fields

- **subject**: A brief, actionable title in imperative form (e.g., "Fix authentication bug in login flow")
- **description**: What needs to be done
- **activeForm** (optional): Present continuous form shown in the spinner when the task is in_progress (e.g., "Fixing authentication bug"). If omitted, the spinner shows the subject instead.

All tasks are created with status \`pending\`.

## Tips

- Create tasks with clear, specific subjects that describe the outcome
- After creating tasks, use TaskUpdate to set up dependencies (blocks/blockedBy) if needed
${r}- Check TaskList first to avoid creating duplicate tasks
`;
}
var $i = p(() =>
    Ue({
      subject: o().describe("A brief title for the task"),
      description: o().describe("What needs to be done"),
      activeForm: o()
        .optional()
        .describe(
          'Present continuous form shown in spinner when in_progress (e.g., "Running tests")'
        ),
      metadata: me(o(), oe()).optional().describe("Arbitrary metadata to attach to the task")
    })
  ),
  Bi = p(() => u({ task: u({ id: o(), subject: o() }) })),
  Dr = tn({
    name: Lk,
    searchHint: "create a task in the task list",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Pr;
    },
    async prompt() {
      return zr();
    },
    get inputSchema() {
      return $i();
    },
    get outputSchema() {
      return Bi();
    },
    userFacingName() {
      return "TaskCreate";
    },
    shouldDefer: !0,
    coerceInput: b0t,
    validationErrorSteer: MDs,
    isEnabled() {
      return ale();
    },
    isConcurrencySafe() {
      return !1;
    },
    toAutoClassifierInput(e) {
      return e.subject;
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async call(
          { subject: r, description: n, activeForm: s, metadata: f },
          { signal: y, onProgress: h }
        ) {
          let S = await OVs(
              Nk(),
              {
                subject: r,
                description: n,
                activeForm: s,
                status: "pending",
                owner: void 0,
                blocks: [],
                blockedBy: [],
                metadata: f
              },
              e.storageV5
            ),
            C = [],
            w = e.runTaskHooks(vMr, S, r, n, rE(), oc(), void 0, y);
          try {
            for await (let E of w) if (E.blockingError) C.push(hRo(E.blockingError));
          } catch (E) {
            if (!(E instanceof Xd)) throw E;
            t("TaskCreated hooks cancelled (control stream closed)");
          }
          if (C.length > 0)
            throw (
              await DBt(Nk(), S, e.storageV5),
              Error(
                C.join(`
`)
              )
            );
          return (
            h?.({ type: "set_expanded_view", expandedView: "tasks" }),
            { data: { task: { id: S, subject: r } } }
          );
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let { task: n } = e;
      return {
        tool_use_id: r,
        type: "tool_result",
        content: `Task #${n.id} created successfully: ${n.subject}`
      };
    }
  });
var Mr = "Get a task by ID from the task list",
  Nr = `Use this tool to retrieve a task by its ID from the task list.

## When to Use This Tool

- When you need the full description and context before starting work on a task
- To understand task dependencies (what it blocks, what blocks it)
- After being assigned a task, to get complete requirements

## Output

Returns full task details:
- **subject**: Task title
- **description**: Detailed requirements and context
- **status**: 'pending', 'in_progress', or 'completed'
- **blocks**: Tasks waiting on this one to complete
- **blockedBy**: Tasks that must complete before this one can start

## Tips

- After fetching a task, verify its blockedBy list is empty before beginning work.
- Use TaskList to see all tasks in summary form.
`;
var ji = p(() => Ue({ taskId: o().describe("The ID of the task to retrieve") })),
  Wi = p(() =>
    u({
      task: u({
        id: o(),
        subject: o(),
        description: o(),
        status: VTe(),
        blocks: T(o()),
        blockedBy: T(o())
      }).nullable()
    })
  ),
  Fr = tn({
    name: S8,
    searchHint: "retrieve a task by ID",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Mr;
    },
    async prompt() {
      return Nr;
    },
    get inputSchema() {
      return ji();
    },
    get outputSchema() {
      return Wi();
    },
    userFacingName() {
      return "TaskGet";
    },
    shouldDefer: !0,
    isEnabled() {
      return ale();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    toAutoClassifierInput(e) {
      return e.taskId;
    },
    renderToolUseMessage() {
      return null;
    },
    create({ storageV5: e }) {
      return {
        async call({ taskId: r }) {
          let n = Nk(),
            s = await TY(n, r, e);
          if (!s) return { data: { task: null } };
          return {
            data: {
              task: {
                id: s.id,
                subject: s.subject,
                description: s.description,
                status: s.status,
                blocks: s.blocks,
                blockedBy: s.blockedBy
              }
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let { task: n } = e;
      if (!n) return { tool_use_id: r, type: "tool_result", content: "Task not found" };
      let s = [
        `Task #${n.id}: ${n.subject}`,
        `Status: ${n.status}`,
        `Description: ${n.description}`
      ];
      if (n.blockedBy.length > 0)
        s.push(`Blocked by: ${n.blockedBy.map((f) => `#${f}`).join(", ")}`);
      if (n.blocks.length > 0) s.push(`Blocks: ${n.blocks.map((f) => `#${f}`).join(", ")}`);
      return {
        tool_use_id: r,
        type: "tool_result",
        content: s.join(`
`)
      };
    }
  });
var $r = "Update a task in the task list",
  jr = `Use this tool to update a task in the task list.

## When to Use This Tool

**Mark tasks as resolved:**
- When you have completed the work described in a task
- When a task is no longer needed or has been superseded
- IMPORTANT: Always mark your assigned tasks as resolved when you finish them
- After resolving, call TaskList to find your next task

- ONLY mark a task as completed when you have FULLY accomplished it
- If you encounter errors, blockers, or cannot finish, keep the task as in_progress
- When blocked, create a new task describing what needs to be resolved
- Never mark a task as completed if:
  - Tests are failing
  - Implementation is partial
  - You encountered unresolved errors
  - You couldn't find necessary files or dependencies

**Delete tasks:**
- When a task is no longer relevant or was created in error
- Setting status to \`deleted\` permanently removes the task

**Update task details:**
- When requirements change or become clearer
- When establishing dependencies between tasks

## Fields You Can Update

- **status**: The task status (see Status Workflow below)
- **subject**: Change the task title (imperative form, e.g., "Run tests")
- **description**: Change the task description
- **activeForm**: Present continuous form shown in spinner when in_progress (e.g., "Running tests")
- **owner**: Change the task owner (agent name)
- **metadata**: Merge metadata keys into the task (set a key to null to delete it)
- **addBlocks**: Mark tasks that cannot start until this one completes
- **addBlockedBy**: Mark tasks that must complete before this one can start

## Status Workflow

Status progresses: \`pending\` \u2192 \`in_progress\` \u2192 \`completed\`

Use \`deleted\` to permanently remove a task.

## Staleness

Make sure to read a task's latest state using \`TaskGet\` before updating it.

## Examples

Mark task as in progress when starting work:
\`\`\`json
{"taskId": "1", "status": "in_progress"}
\`\`\`

Mark task as completed after finishing work:
\`\`\`json
{"taskId": "1", "status": "completed"}
\`\`\`

Delete a task:
\`\`\`json
{"taskId": "1", "status": "deleted"}
\`\`\`

Claim a task by setting owner:
\`\`\`json
{"taskId": "1", "owner": "my-name"}
\`\`\`

Set up task dependencies:
\`\`\`json
{"taskId": "2", "addBlockedBy": ["1"]}
\`\`\`
`;
var Hi = p(() => {
    let e = VTe().or(A("deleted"));
    return Ue({
      taskId: o().describe("The ID of the task to update"),
      subject: o().optional().describe("New subject for the task"),
      description: o().optional().describe("New description for the task"),
      activeForm: o()
        .optional()
        .describe(
          'Present continuous form shown in spinner when in_progress (e.g., "Running tests")'
        ),
      status: e.optional().describe("New status for the task"),
      addBlocks: T(o()).optional().describe("Task IDs that this task blocks"),
      addBlockedBy: T(o()).optional().describe("Task IDs that block this task"),
      owner: o().optional().describe("New owner for the task"),
      metadata: me(o(), oe())
        .optional()
        .describe("Metadata keys to merge into the task. Set a key to null to delete it.")
    });
  }),
  qi = p(() =>
    u({
      success: M(),
      taskId: o(),
      updatedFields: T(o()),
      error: o().optional(),
      statusChange: u({ from: o(), to: o() }).optional()
    })
  ),
  Wr = tn({
    name: WA,
    searchHint: "update a task",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return $r;
    },
    async prompt() {
      return jr;
    },
    get inputSchema() {
      return Hi();
    },
    get outputSchema() {
      return qi();
    },
    userFacingName() {
      return "TaskUpdate";
    },
    coerceInput: umt,
    shouldDefer: !0,
    isEnabled() {
      return ale();
    },
    isConcurrencySafe() {
      return !0;
    },
    toAutoClassifierInput(e) {
      let r = umt(e)?.input ?? e,
        n = [r.taskId];
      if (r.status) n.push(r.status);
      if (r.subject) n.push(r.subject);
      return n.join(" ");
    },
    renderToolUseMessage() {
      return null;
    },
    create(e) {
      return {
        async call(
          {
            taskId: r,
            subject: n,
            description: s,
            activeForm: f,
            status: y,
            owner: h,
            addBlocks: S,
            addBlockedBy: C,
            metadata: w
          },
          { signal: E, onProgress: O }
        ) {
          let D = Nk();
          O?.({ type: "set_expanded_view", expandedView: "tasks" });
          let x = e.storageV5,
            j = await TY(D, r, x);
          if (!j)
            return { data: { success: !1, taskId: r, updatedFields: [], error: "Task not found" } };
          let Y = [],
            P = {};
          if (n !== void 0 && n !== j.subject) ((P.subject = n), Y.push("subject"));
          if (s !== void 0 && s !== j.description) ((P.description = s), Y.push("description"));
          if (f !== void 0 && f !== j.activeForm) ((P.activeForm = f), Y.push("activeForm"));
          if (h !== void 0 && h !== j.owner) ((P.owner = h), Y.push("owner"));
          if (_s() && y === "in_progress" && h === void 0 && !j.owner) {
            let K = rE();
            if (K) ((P.owner = K), Y.push("owner"));
          }
          if (w !== void 0) ((P.metadata = HBt(j.metadata, w)), Y.push("metadata"));
          if (y !== void 0) {
            if (y === "deleted") {
              let K = await DBt(D, r, x);
              return {
                data: {
                  success: K,
                  taskId: r,
                  updatedFields: K ? ["deleted"] : [],
                  error: K ? void 0 : "Failed to delete task",
                  statusChange: K ? { from: j.status, to: "deleted" } : void 0
                }
              };
            }
            if (y !== j.status) {
              if (y === "completed") {
                let K = [],
                  W = e.runTaskHooks(zNt, r, j.subject, j.description, rE(), oc(), void 0, E);
                try {
                  for await (let U of W) if (U.blockingError) K.push(ksn(U.blockingError));
                } catch (U) {
                  if (!(U instanceof Xd)) throw U;
                  t("TaskCompleted hooks cancelled (control stream closed)");
                }
                if (K.length > 0)
                  return {
                    data: {
                      success: !1,
                      taskId: r,
                      updatedFields: [],
                      error: K.join(`
`)
                    }
                  };
              }
              ((P.status = y), Y.push("status"));
            }
          }
          if (Object.keys(P).length > 0) await Zhe(D, r, P, x);
          if (P.owner && _s()) {
            let K = rE() || "team-lead",
              W = Wx(),
              U = _({
                type: "task_assignment",
                taskId: r,
                subject: j.subject,
                description: j.description,
                assignedBy: K,
                timestamp: new Date().toISOString()
              });
            await Vv(
              P.owner,
              { from: K, text: U, timestamp: new Date().toISOString(), color: W },
              D,
              x
            );
          }
          if (S && S.length > 0) {
            let K = S.filter((W) => !j.blocks.includes(W));
            for (let W of K) await LBt(D, r, W, x);
            if (K.length > 0) Y.push("blocks");
          }
          if (C && C.length > 0) {
            let K = C.filter((W) => !j.blockedBy.includes(W));
            for (let W of K) await LBt(D, W, r, x);
            if (K.length > 0) Y.push("blockedBy");
          }
          return {
            data: {
              success: !0,
              taskId: r,
              updatedFields: Y,
              statusChange: P.status !== void 0 ? { from: j.status, to: P.status } : void 0
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let { success: n, taskId: s, updatedFields: f, error: y, statusChange: h } = e;
      if (!n) return { tool_use_id: r, type: "tool_result", content: y || `Task #${s} not found` };
      let S = `Updated task #${s} ${f.join(", ")}`;
      if (h?.to === "completed" && gI() && _s())
        S += `

Task completed. Call TaskList now to find your next available task or see if your work unblocked others.`;
      return { tool_use_id: r, type: "tool_result", content: S };
    }
  });
var Ur = "List all tasks in the task list";
function Hr() {
  let e = _s()
      ? `- Before assigning tasks to teammates, to see what's available
`
      : "",
    r = _s()
      ? "- **id**: Task identifier (use with TaskGet, TaskUpdate)"
      : "- **id**: Task identifier (use with TaskGet, TaskUpdate)",
    n = _s()
      ? `
## Teammate Workflow

When working as a teammate:
1. After completing your current task, call TaskList to find available work
2. Look for tasks with status 'pending', no owner, and empty blockedBy
3. **Prefer tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones
4. Claim an available task using TaskUpdate (set \`owner\` to your name), or wait for leader assignment
5. If blocked, focus on unblocking tasks or notify the team lead
`
      : "";
  return `Use this tool to list all tasks in the task list.

## When to Use This Tool

- To see what tasks are available to work on (status: 'pending', no owner, not blocked)
- To check overall progress on the project
- To find tasks that are blocked and need dependencies resolved
${e}- After completing a task, to check for newly unblocked work or claim the next available task
- **Prefer working on tasks in ID order** (lowest ID first) when multiple tasks are available, as earlier tasks often set up context for later ones

## Output

Returns a summary of each task:
${r}
- **subject**: Brief description of the task
- **status**: 'pending', 'in_progress', or 'completed'
- **owner**: Agent ID if assigned, empty if available
- **blockedBy**: List of open task IDs that must be resolved first (tasks with blockedBy cannot be claimed until dependencies resolve)

Use TaskGet with a specific task ID to view full details including description and comments.
${n}`;
}
var Gi = p(() => Ue({})),
  Vi = p(() =>
    u({
      tasks: T(
        u({ id: o(), subject: o(), status: VTe(), owner: o().optional(), blockedBy: T(o()) })
      )
    })
  ),
  qr = tn({
    name: qC,
    searchHint: "list all tasks",
    backgrounding: "never",
    maxResultSizeChars: 1e5,
    async description() {
      return Ur;
    },
    async prompt() {
      return Hr();
    },
    get inputSchema() {
      return Gi();
    },
    get outputSchema() {
      return Vi();
    },
    userFacingName() {
      return "TaskList";
    },
    shouldDefer: !0,
    isEnabled() {
      return ale();
    },
    isConcurrencySafe() {
      return !0;
    },
    isReadOnly() {
      return !0;
    },
    renderToolUseMessage() {
      return null;
    },
    create({ storageV5: e }) {
      return {
        async call(r) {
          let n = Nk(),
            s = (await jL(n, e)).filter((h) => !h.metadata?._internal),
            f = new Set(s.filter((h) => h.status === "completed").map((h) => h.id));
          return {
            data: {
              tasks: s.map((h) => ({
                id: h.id,
                subject: h.subject,
                status: h.status,
                owner: h.owner,
                blockedBy: h.blockedBy.filter((S) => !f.has(S))
              }))
            }
          };
        }
      };
    },
    mapToolResultToToolResultBlockParam(e, r) {
      let { tasks: n } = e;
      if (n.length === 0) return { tool_use_id: r, type: "tool_result", content: "No tasks found" };
      let s = n.map((f) => {
        let y = f.owner ? ` (${f.owner})` : "",
          h =
            f.blockedBy.length > 0
              ? ` [blocked by ${f.blockedBy.map((S) => `#${S}`).join(", ")}]`
              : "";
        return `#${f.id} [${f.status}] ${f.subject}${y}${h}`;
      });
      return {
        tool_use_id: r,
        type: "tool_result",
        content: s.join(`
`)
      };
    }
  });
function Kr(e, r) {
  let n,
    s = () => (n ??= r()),
    f = new Set(Reflect.ownKeys(e));
  return new Proxy(e, {
    get(y, h, S) {
      if (f.has(h)) return Reflect.get(y, h, S);
      return typeof h === "symbol" && n === void 0 ? void 0 : Reflect.get(s(), h, S);
    },
    has(y, h) {
      if (f.has(h)) return !0;
      return typeof h === "symbol" && n === void 0 ? !1 : h in s();
    },
    ownKeys() {
      return Reflect.ownKeys(s());
    },
    getOwnPropertyDescriptor(y, h) {
      let S = f.has(h)
        ? Reflect.getOwnPropertyDescriptor(y, h)
        : Reflect.getOwnPropertyDescriptor(s(), h);
      return S && { ...S, configurable: !0 };
    },
    set(y, h, S) {
      return (f.delete(h), Reflect.set(s(), h, S));
    },
    defineProperty(y, h, S) {
      return (f.delete(h), Reflect.defineProperty(s(), h, S));
    },
    deleteProperty(y, h) {
      return (f.delete(h), Reflect.deleteProperty(s(), h));
    }
  });
}
function Igs() {
  ars(!0);
}
function Yr() {
  return lrs();
}
var Yi = [
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-fmtkn1kz.js", import.meta.url)
      )
    ).CronCreateTool,
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-vs84tyzt.js", import.meta.url)
      )
    ).CronDeleteTool,
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-vbwnkrad.js", import.meta.url)
      )
    ).CronListTool
  ],
  Xi = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-g5hxk6wx.js", import.meta.url)
    )
  ).SELF_HOSTED_RUNNER_TOOLS,
  Xr = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-mq1a69zj.js", import.meta.url)
    )
  ).RemoteTriggerTool,
  Qr = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-ved4xavg.js", import.meta.url)
    )
  ).SearchMcpRegistryTool,
  Zr = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-w4c29bwg.js", import.meta.url)
    )
  ).SuggestConnectorsTool,
  Jr = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-4nn5ck1g.js", import.meta.url)
    )
  ).ListConnectorsTool,
  Qi = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-84dhhtyx.js", import.meta.url)
    )
  ).PLUGIN_SKILL_TOOLS,
  en = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-ntrt1a7a.js", import.meta.url)
    )
  ).MonitorTool,
  Zi = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-fhn0d2g2.js", import.meta.url)
    )
  ).SendUserFileTool,
  Ji = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-gybjz6vc.js", import.meta.url)
    )
  ).ProposeSkillsTool,
  ea = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-p53f4vzn.js", import.meta.url)
    )
  ).ProposeGoalTool,
  ta = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-8qqy3s1k.js", import.meta.url)
    )
  ).PublishPluginTool,
  rn = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-5q1fx7z3.js", import.meta.url)
    )
  ).PushNotificationTool,
  oa = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-vs02frgz.js", import.meta.url)
    )
  ).DesignSyncTool,
  ra = () => {
    if (_t()) return null;
    return import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-zv285rrn.js", import.meta.url)
      )
    ).DesignTool;
  },
  sa = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-7v6e212y.js", import.meta.url)
    )
  ).ProjectsTool,
  ze = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-whdvwma2.js", import.meta.url)
    )
  ).FetchInboxMessageTool,
  nn = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-1wh8z2w4.js", import.meta.url)
    )
  ).EndConversationTool,
  Nt = () =>
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-wmsskgr6.js", import.meta.url)
      )
    ).SendMessageTool,
  ia = () =>
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-kgtfxq5e.js", import.meta.url)
      )
    ).SendFileTool,
  aa = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-std20qbf.js", import.meta.url)
    )
  ).ENABLE_STUB_TOOLS,
  he = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-nzks5xy5.js", import.meta.url)
    )
  ).PollTool,
  sn = Kr(
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-nzxsmhw1.js", import.meta.url)
      )
    ).ARTIFACT_TOOL_HEAD,
    () =>
      import.meta.require(
        __sourceFilePath_cad88bd3b3f643de(
          new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-k3k0encx.js", import.meta.url)
        )
      ).ArtifactTool
  );
function ua() {
  import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-k3k0encx.js", import.meta.url)
    )
  );
}
var ca = () =>
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-03htth44.js", import.meta.url)
      )
    ).ARTIFACT_ADDON_TOOLS,
  an = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-72xgh5c7.js", import.meta.url)
    )
  ).AppifactReplTool,
  ln = null,
  da = [],
  un = null,
  cn = null,
  rt = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-atxvbyzx.js", import.meta.url)
    )
  ),
  dn = null,
  ma = null,
  mn = null,
  pn = import.meta.require(
    __sourceFilePath_cad88bd3b3f643de(
      new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-awsbef4p.js", import.meta.url)
    )
  ).ListAgentsTool,
  Ft = (() => (
    import.meta
      .require(
        __sourceFilePath_cad88bd3b3f643de(
          new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-cythmdgr.js", import.meta.url)
        )
      )
      .initBundledWorkflows(),
    import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-y8f7x7xv.js", import.meta.url)
      )
    ).WorkflowTool
  ))(),
  $t = () => {
    if (!Jv()) return null;
    return import.meta.require(
      __sourceFilePath_cad88bd3b3f643de(
        new __sourceFilePath_cad88bd3b3f643de_URL("./chunk-3ykk7zcv.js", import.meta.url)
      )
    ).PowerShellTool;
  };
function fn() {
  return null;
}
function Ub() {
  Wze.loadWriters = ua;
  let e = ra(),
    r = fn();
  return [
    U9t,
    ...(vd() ? [na] : []),
    ...[SD, wD].filter((n) => !zte().has(n.name)),
    e3,
    jv,
    kh,
    Ck,
    ...(ma?.() ?? []).filter((n) => !zte().has(n.underlyingV1ToolName)),
    Ske,
    ...xo,
    CS,
    Io,
    vo,
    _o,
    qe,
    xte,
    Xo,
    l3e,
    QDn,
    ...[],
    oa,
    ...(e ? [e] : []),
    sa,
    ...(cn ? [cn] : []),
    ...(IO() ? [Dr, Fr, Wr, qr] : []),
    ...(sn ? [sn] : []),
    ...ca(),
    ...(an ? [an] : []),
    ...(un ? [un] : []),
    ...da,
    ...(tze() ? [Pt] : []),
    ...(oIt() ? [vr, xr] : []),
    Nt(),
    ia(),
    ...(pn ? [pn] : []),
    Gt,
    ...(r ? [r] : []),
    ...(ln ? [ln] : []),
    ...(he ? [he] : []),
    Ft,
    ...Yi,
    ...(Yr() ? Xi : []),
    go,
    ...(Xr ? [Xr] : []),
    ...(Qr ? [Qr] : []),
    ...(Zr ? [Zr] : []),
    Xt,
    eo,
    jt,
    ...aa,
    ...(Jr ? [Jr] : []),
    ...Qi,
    ...(en ? [en] : []),
    ho,
    Zi,
    Ji,
    ea,
    ta,
    ...(rn ? [rn] : []),
    ...(ze ? [ze] : []),
    ...(nn ? [nn] : []),
    ...($t() ? [$t()] : []),
    ...(dn ? [dn] : []),
    ...(mn ? [mn()] : []),
    ...[],
    EN,
    kN,
    S4,
    ...(i.CLAUDE_CODE_ENABLE_REFRESH_MCP_TOOLS ? [zt] : []),
    ...(oh() ? [aPr] : []),
    kAo,
    rr
  ];
}
iXs(Ub);
function Ogs(e, r) {
  let n = [];
  if (he !== null && !e.includes(he)) n.push(he);
  if (ze && !e.includes(ze)) n.push(ze);
  if (n.length === 0) return e;
  let s = TF(r),
    f = n.filter((y) => s.includes(y));
  return f.length === 0 ? e : [...e, ...f];
}
var TF = (e, r) => {
    if (i.CLAUDE_CODE_SIMPLE && !r?.skipSimpleModeFilter) {
      let w = fn();
      if (w !== null && RU() && !r?.skipReplFilter) {
        let x = dP() || (e.restricted === !0 && oo(e, w) !== null) ? [jv, kh, Ck] : [w, kh, Ck];
        if (he !== null && XG()) x.push(he);
        if (rt.isCoordinatorMode()) x.push(U9t, qe, Nt(), ...(jm() ? [Ft] : []));
        return TQ(x, e);
      }
      let E = $t(),
        O = [...(vd() ? [na] : []), ...(E ? [E] : []), jv, kh];
      if (rt.isCoordinatorMode()) O.push(U9t, qe, Nt(), ...(jm() ? [Ft] : []));
      return TQ(O, e);
    }
    let n = new Set([EN.name, kN.name, S4.name, qa]),
      s = Ub().filter((w) => !n.has(w.name)),
      f = TQ(s, e),
      y = f.some((w) => Rt(w, Be)) && na.isEnabled(),
      h = !1;
    if (RU() && !r?.skipReplFilter) {
      if (f.some((E) => Rt(E, xy))) ((f = f.filter((E) => !BE(E, xmn))), (h = !0));
    }
    if (!r?.skipReplFilter && cNt(f, e, { activeAgents: r?.activeAgents }))
      f = f.filter((w) => !Rt(w, qn));
    let S = f.map((w) => w.isEnabled()),
      C = f.filter((w, E) => S[E]);
    if (DA() && !y && !h) {
      let w = TQ(
        [SD, wD, ...D5n([wD.name, SD.name])].filter((E) => !C.includes(E)),
        e
      );
      C = [...C, ...w];
    }
    if ((oLs() || YXe()) && !GY(C) && !C.some((w) => Rt(w, ki)) && !C.some((w) => Rt(w, BL)))
      C = [...C, ...TQ([kAo], e)];
    return C;
  },
  Mgs = 30000;
function F9t(e, r, n) {
  dys();
  let s = TF(e, n),
    f = ri(Ght([...(n?.machineMcpTools ?? []), ...r]), "name"),
    y = cDn(dDn(TQ(f, e), f), f),
    h = lys(s, y);
  return ri(h.toSorted(Xye).concat(y.sort(Xye)), "name");
}
var V6 = { getAllBaseTools: Ub, getTools: TF, assembleToolPool: F9t };
export {
  pyr,
  Sgs,
  iMn,
  aMn,
  lMn,
  dMn,
  cMn,
  wdt,
  D9t,
  myr,
  gyr,
  ZPe,
  eIe,
  Upe,
  H9t,
  Bpe,
  hyr,
  yyr,
  _yr,
  L9t,
  byr,
  tIe,
  Syr,
  wyr,
  vdt,
  uMn,
  N9t,
  $9t,
  wgs,
  vgs,
  Egs,
  vyr,
  jpe,
  Aso,
  Eyr,
  kyr,
  Wpe,
  fMn,
  kgs,
  Tgs,
  Ags,
  rIt,
  Cso,
  Cgs,
  pMn,
  Rgs,
  xgs,
  Pgs,
  Igs,
  Ub,
  Ogs,
  TF,
  Mgs,
  F9t,
  V6
};

//# sourceMappingURL=chunk-pp7zwndm.js.map
