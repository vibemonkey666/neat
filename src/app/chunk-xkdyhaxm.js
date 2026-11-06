import {
  fileURLToPath as __sourceFilePath_6730ee2edbd6a62f,
  URL as __sourceFilePath_6730ee2edbd6a62f_URL
} from "node:url";
// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ozt, Kzr, nKo, rKo, Itt } from "./chunk-csks5ccj.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { d } from "./chunk-fs43t96t.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { F, S6 } from "./chunk-wrtp8qz8.js";
import { Ky, X, UI, Pe } from "./chunk-4hww8411.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { lH, Bvt, ul, L4r, k, Re, ue } from "./chunk-ajtyjx88.js";
import { iN } from "./chunk-jazcqqqr.js";
import { Xse, bt, dee, t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Xl, _t, l } from "./chunk-ewvf3tep.js";
import { mo, Yl, rr } from "./chunk-ak0cmk10.js";
import { Y } from "./chunk-arw2bgak.js";
import { Ko } from "./chunk-cjnzngfc.js";
import { hs } from "./chunk-wr0p4ndg.js";
import { p } from "./chunk-qmkm2x59.js";
import { Xo } from "./chunk-928ws1pg.js";
import { An, Be, At } from "./chunk-at88wjsn.js";
import { qm, JE, vb } from "./chunk-bh50mq9d.js";
import { csr, qVt } from "./chunk-38g9s4wc.js";
import { rm } from "./chunk-1g9x3zw8.js";
import { HRe, vm } from "./chunk-r1dvrqha.js";
import { bbt } from "./chunk-wfjw07k3.js";
import { ht, cf } from "./chunk-gdcb8skc.js";
import { ns } from "./chunk-g82naabm.js";
import { wf } from "./chunk-5z6t3gwt.js";
import { X1t, RBr, fUo, rbt, SAe, PBr, bUo, yU } from "./chunk-r5xsp8d0.js";
import { Wce, Nhn, n2r, wZn, L7s, $7s, vZn, lKo, P7, TZn, AZn } from "./chunk-tzrn3e6a.js";
import { Rx } from "./chunk-yw4wqxm9.js";
import { $4s, PFo, F4s, W4s, G4s, gfn, S8n, x8n, bfn, q_t, XC } from "./chunk-mrftwq54.js";
import { KHt, Zwo, cjn, ovo, svo } from "./chunk-bc0w6gb3.js";
import { wJ, L1e } from "./chunk-qkh6s1m8.js";
import { TUo, PUo, IUo, OUo, MUo, DUo, HUo } from "./chunk-07aq7e5p.js";
import { W1t } from "./chunk-mb8tf9mz.js";
import { pjn, $9e } from "./chunk-mam24wdr.js";
import { zZe, Y5s } from "./chunk-bxxdf8d7.js";
import { h_e, f9, Ow, Uce, FU, tzt, eKo, loe } from "./chunk-w89b9cst.js";
import { Iwt, GGt, soe, LU, MLe, V7n, fzr, uhn, pzr } from "./chunk-njnxaswh.js";
import { Aye, a2e } from "./chunk-nyp7c93y.js";
import { O1e, Qft } from "./chunk-svmjd1ce.js";
import { tPs } from "./chunk-astq50qw.js";
import { ept } from "./chunk-4v7cqzm4.js";
import { Vme } from "./chunk-0yxktkgq.js";
import { VFo } from "./chunk-4072fsq4.js";
import { $O } from "./chunk-e2shv4sr.js";
import { sS } from "./chunk-nhj692ya.js";
import { k7 } from "./chunk-pzpqyt29.js";
import { wKe, mzr } from "./chunk-dcmkyehf.js";
import { qoe } from "./chunk-6t3m5fvf.js";
import { Xa } from "./chunk-4b5gpbbs.js";
import { cn } from "./chunk-4q6qmmwb.js";
import { o, v, M, u, yt, B } from "./chunk-0bqrj5ah.js";
import { _e } from "./chunk-n8wdmnah.js";
async function rs({ heldEpoch: n, send: h, maySendAgain: E }) {
  let T = n,
    H;
  for (let L = 0; ; L++) {
    let J = [],
      q = await h(T, (Q) => {
        J.push(Q);
      });
    if (J.length === 0)
      return {
        ending: L === 0 ? "not_refused" : "followed_up",
        answer: q,
        followUps: L,
        sessionEpoch: H
      };
    let A = J.at(-1);
    if (((H = A ?? H), !E()))
      return { ending: "withheld", answer: null, followUps: L, sessionEpoch: H };
    if (A === void 0 || L === 2)
      return {
        ending: "unfenced_fallback",
        answer: await h(void 0, () => {}),
        followUps: L,
        sessionEpoch: H,
        fallbackReason: A === void 0 ? "no_session_epoch" : "follow_up_cap"
      };
    T = A;
  }
}
var Wa = 50;
async function os(n, h) {
  let E = h.now ?? Date.now,
    T = h.sleep ?? ((se, ge) => X(se, ge)),
    H = h.pollMs ?? Wa,
    L = Number.isFinite(h.budgetMs) ? h.budgetMs : 0,
    J = 0,
    q = 0,
    A = () => {
      try {
        return E() - J;
      } catch {
        return 0;
      }
    },
    Q = [],
    K = "live",
    oe = "connect",
    $e = (se) => {
      try {
        h.log?.(se);
      } catch {}
    },
    Ce = () => {
      if (h.signal?.aborted) return "aborted";
      if (n.isSessionOver()) return "session_changed";
      if (n.hasFailedForGood()) return "bridge_failed";
      return E() >= q ? "budget_passed" : void 0;
    },
    rt = (se) => {
      ((oe = se), Q.push(se));
    },
    Ee = async (se) => {
      for (;;) {
        let ge = Ce();
        if (ge === "aborted" || ge === "session_changed" || ge === "bridge_failed") return ge;
        if (se()) return;
        if (ge !== void 0) return ge;
        await T(Math.min(H, q - E()), h.signal);
      }
    },
    ne = async (se) => {
      let ge = "pending",
        z,
        Ne = se.then(
          () => {
            ge = "settled";
          },
          (xe) => {
            ((ge = "threw"), (z = xe));
          }
        );
      await Promise.race([Ne, Promise.resolve()]);
      for (;;) {
        let xe = (() => ge)();
        if (xe === "threw") throw z;
        if (xe === "settled") return;
        let st = Ce();
        if (st !== void 0) return st;
        await Promise.race([Ne, T(Math.min(H, q - E()), h.signal)]);
      }
    },
    nt = (se) => {
      let ge = se.ok ? "uploads handed over, queues empty" : `${se.reason} on ${se.waitingOn}`;
      return (
        $e(
          `[handoff-wait] end: ${ge} after ${se.elapsedMs} ms; session kind ${se.sessionKind}; awaited ${Q.join(", ") || "nothing"}`
        ),
        se
      );
    },
    me = (se, ge) => {
      if (se === "budget_passed")
        try {
          h.onBudgetPassed?.(ge);
        } catch {}
      return nt({ ok: !1, reason: se, sessionKind: K, waitingOn: ge, elapsedMs: A() });
    },
    it = () => T(Math.max(0, Math.min(H, q - E())), h.signal),
    We = async () => {
      if (((K = n.sessionKind()), K !== "deferred")) return;
      let se = Ce();
      if (se !== void 0) return se;
      return (rt("release"), ne(n.release()));
    };
  try {
    ((J = E()),
      (q = J + L),
      (K = n.sessionKind()),
      $e(`[handoff-wait] start: session kind ${K}, budget ${L} ms`));
    let se = n.transport(),
      ge = n.droppedBatches(se),
      z = await We();
    if (z !== void 0) return me(z, "release");
    let Ne = n.transcriptCopy;
    for (;;) {
      if (((z = Ce()), z !== void 0)) return me(z, "connect");
      let xe = n.transport(),
        st = xe === se ? ge : 0,
        at = () => {
          let Xe = n.droppedBatches(xe) - st;
          if (Xe > 0) $e(`[handoff-wait] batches dropped during the wait: ${Xe}`);
          return Xe > 0;
        };
      if ((rt("connect"), (z = await Ee(n.isConnected)), z !== void 0)) return me(z, "connect");
      if (((z = await We()), z !== void 0)) return me(z, "release");
      if (Ne !== void 0) {
        if (
          (rt("transcript_copy_install"),
          (z = await Ee(Ne.isInstalledOnCurrentTransport)),
          z !== void 0)
        )
          return me(z, "transcript_copy_install");
        rt("transcript_copy_catch_up");
        let Xe = Ne.catchUp();
        if ((Ne.wakeCatchUp(), (z = await ne(Xe)), z !== void 0))
          return me(z, "transcript_copy_catch_up");
        if (Ne.catchUp() !== Xe) {
          if (at()) return me("rows_dropped", "transcript_copy_catch_up");
          await it();
          continue;
        }
      }
      oe = "first_history_flush";
      let dt = n.firstHistoryFlush();
      if (dt !== void 0) {
        if ((Q.push("first_history_flush"), (z = await ne(dt)), z !== void 0))
          return me(z, "first_history_flush");
      }
      if (((oe = "held_writes"), n.holdsWrites())) {
        if ((Q.push("held_writes"), (z = await Ee(() => !n.holdsWrites())), z !== void 0))
          return me(z, "held_writes");
      }
      rt("upload_lanes");
      let Pt = !1;
      if (
        ((z = await ne(
          n.drainLanes(Math.max(0, q - E())).then((Xe) => {
            Pt = Xe === !1;
          })
        )),
        z !== void 0 || Pt)
      )
        return me(z ?? "budget_passed", "upload_lanes");
      if (at()) return me("rows_dropped", "upload_lanes");
      if (n.transport() !== xe || !n.isConnected() || n.holdsWrites()) {
        await it();
        continue;
      }
      break;
    }
    if (h.signal?.aborted) return me("aborted", "upload_lanes");
    if (n.isSessionOver()) return me("session_changed", "upload_lanes");
    if (n.hasFailedForGood()) return me("bridge_failed", "upload_lanes");
    return nt({ ok: !0, reason: "handed_over", sessionKind: K, elapsedMs: A() });
  } catch (se) {
    $e(`[handoff-wait] ${oe} threw: ${d(se)}`);
    try {
      h.onFault?.(oe);
    } catch {}
    return me("fault", oe);
  }
}
async function Jxs() {
  return;
}
function sjn(n) {}
function ijn(n, h) {}
var Xt = "[account memory withheld from Remote Control; shown in the terminal session]",
  wo = "[tool result withheld from Remote Control; shown in the terminal session]",
  Sn = "[message content withheld from Remote Control; shown in the terminal session]",
  qa =
    "[command output withheld from Remote Control: it may repeat the conversation summary, which can include account memory; shown in the terminal session]",
  Ga =
    "This session is being continued from a previous conversation that ran out of context. The summary of that conversation is not included here: it was withheld from Remote Control because it may include account memory, and can be read only in the terminal session where it was written. If you need details from the earlier conversation, ask the user.",
  Dr = 32768,
  Va = new Set(["assistant", "user", "stream_event", "attachment", "system", "control_request"]),
  is = new Set(["cowork_memory_context", "account_memory_recall"]),
  Ka = "anthropic/memory.",
  ss = "account_memory_saved",
  za = "account_memory",
  To = [
    "type",
    "subtype",
    "uuid",
    "parentUuid",
    "logicalParentUuid",
    "timestamp",
    "sessionId",
    "cwd",
    "version",
    "gitBranch",
    "isSidechain",
    "agentId",
    "userType",
    "entrypoint",
    "teamName",
    "agentName",
    "promptId",
    "requestId",
    "isMeta",
    "isVirtual",
    "isCompactSummary",
    "repeatsCompactSummary",
    "isVisibleInTranscriptOnly",
    "sourceToolAssistantUUID"
  ],
  as = ["role", "id", "type", "model", "stop_reason", "usage"],
  Ya = {
    string: [
      "type",
      "toolUseID",
      "processId",
      "hookName",
      "hookEvent",
      "toolName",
      "permissionMode",
      "host",
      "decision",
      "disposition",
      "traceparent"
    ],
    number: ["exitCode", "durationMs", "timeoutMs"],
    boolean: ["timedOut", "unverified", "heldForServedCall", "accountMemoryBatch"]
  },
  Ja = ["content", "message", "stdout", "stderr", "lines"],
  ds = ["wireToolInputs", "wire_tool_inputs", "wireIngestContext", "wire_ingest_context"],
  wn = new Set(["tool_use", "server_tool_use", "mcp_tool_use"]),
  Co = new Set(["tool_result", "mcp_tool_result"]),
  Qa = new Set(["PostToolBatch", "Elicitation", "ElicitationResult"]),
  Za = new Set([
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "PermissionRequest",
    "PermissionDenied",
    "Elicitation",
    "ElicitationResult"
  ]),
  ed = "PostCompact",
  td = new Set(["text", "thinking", "redacted_thinking"]);
function ke(n) {
  return typeof n === "object" && n !== null;
}
class gt {
  max;
  ids = new Set();
  constructor(n) {
    this.max = n;
  }
  has(n) {
    return this.ids.has(n);
  }
  add(n) {
    if (this.ids.has(n)) return;
    if ((this.ids.add(n), this.ids.size > this.max)) {
      let h = this.ids.values().next().value;
      if (h !== void 0) this.ids.delete(h);
    }
  }
  delete(n) {
    return this.ids.delete(n);
  }
}
function Mo(n) {
  for (let h of O1e) {
    let E = n[h];
    if (!ke(E)) continue;
    let T = ke(E._meta) ? E._meta : E;
    if (Object.keys(T).some((H) => H.startsWith(Ka))) return !0;
  }
  return !1;
}
function rd(n) {
  if (typeof n.name !== "string") return;
  if (n.type !== "mcp_tool_use") return n.name;
  return typeof n.server_name === "string" ? Xo(n.server_name, n.name) : void 0;
}
function Oo(n, h) {
  if (n.subtype === "can_use_tool")
    return typeof n.tool_name !== "string" || k7(n.tool_name, h, "live");
  if (n.subtype === "request_user_dialog")
    return typeof n.dialog_kind !== "string" || n.dialog_kind.includes(za);
  return !1;
}
function ko(n) {
  return n.isCompactSummary === !0 || n.is_compact_summary === !0;
}
function ls(n) {
  return (
    n.repeatsCompactSummary === !0 || (n.type === "user" && ke(n.message) && bfn(n.message.content))
  );
}
function Ao(n) {
  let h = n.content;
  return Array.isArray(h) ? h.filter(ke) : void 0;
}
function nd(n) {
  return ke(n.message) ? Ao(n.message) : void 0;
}
function od(n, h) {
  return h.some((E) => n[E] !== void 0);
}
function jr(n, h) {
  let E = {};
  for (let T of h) if (n[T] !== void 0) E[T] = n[T];
  return E;
}
function hCr(n) {
  let h = n.placeAccountMemoryTool,
    E = new gt(Dr),
    T = new gt(Dr),
    H = new gt(Dr),
    L = new gt(Dr),
    J = new gt(Dr),
    q = !1,
    A = new Map(),
    Q = Symbol("drop");
  function K(i, D) {
    let O = rd(i),
      te = O === void 0 || k7(O, h, "live"),
      G = !te && O !== void 0 && k7(O, h, "history");
    if (typeof i.id === "string") {
      if (te) E.add(i.id);
      else if (G) T.add(i.id);
    }
    return te || (D === "history" && G);
  }
  function oe(i, D) {
    return E.has(i) || (D === "history" && T.has(i));
  }
  function $e(i, D) {
    if (!ke(i)) return;
    if (i.type === "progress") {
      if (ke(i.data)) $e(i.data.message, D);
      return;
    }
    (rt(i), Ce(i));
    for (let O of nd(i) ?? []) {
      if (!wn.has(O.type) || typeof O.id !== "string") continue;
      if ((H.add(O.id), K(O, D))) q = !0;
    }
  }
  function Ce(i) {
    if (
      (i.type === "attachment" &&
        ke(i.attachment) &&
        is.has(i.attachment.type) &&
        i.attachment.content !== null) ||
      Mo(i)
    )
      q = !0;
  }
  function rt(i) {
    if (typeof i.uuid !== "string") return;
    if (ko(i)) L.add(i.uuid);
    else if (ls(i)) J.add(i.uuid);
  }
  function Ee(i, D) {
    let O;
    try {
      O = D.type;
    } catch {
      O = void 0;
    }
    try {
      n.onDropped?.(i, typeof O === "string" && Va.has(O) ? O : "other");
    } catch {}
  }
  function ne(i, D) {
    return (Ee(i, D), Q);
  }
  function nt() {
    try {
      return n.mode() === "drop" ? "drop" : "redact";
    } catch {
      return "redact";
    }
  }
  function me(i) {
    return typeof i === "string" ? i : Xt;
  }
  function it(i, D) {
    return {
      type: i.type,
      id: me(i.id),
      name: me(i.name),
      ...(i.server_name !== void 0 && { server_name: me(i.server_name) }),
      input: D ? {} : gfn(i.input, 0, Xt, !0)
    };
  }
  function We(i, D) {
    return {
      type: i.type,
      tool_use_id: me(i.tool_use_id),
      content: D,
      ...(i.is_error === !0 && { is_error: !0 })
    };
  }
  function se(i, D, O) {
    let te = Mo(i),
      G = ke(i.message) ? i.message : void 0,
      le = G === void 0 ? void 0 : Ao(G);
    if (G === void 0 || le === void 0) {
      if (te) return ((q = !0), D === "transcript" ? Ne(i, []) : ne("memory_row", i));
      let he = [...ds, ...O1e];
      if (!od(i, he)) return i;
      let qe = { ...i };
      for (let ot of he) delete qe[ot];
      return qe;
    }
    let Se = !1,
      Ue = !1,
      It = !1,
      Dt = !1,
      Wr = new Set(),
      Bn = le.map((he) => {
        if (wn.has(he.type)) {
          if (typeof he.id === "string") H.add(he.id);
          if (!K(he, O)) {
            if (typeof he.id === "string") Wr.add(he.id);
            return he;
          }
          return ((q = !0), (Se = !0), it(he, !1));
        }
        if (Co.has(he.type)) {
          let qe = he.tool_use_id,
            ot = Xt;
          if (typeof qe === "string" && oe(qe, O)) ;
          else if (typeof qe === "string" && H.has(qe)) return ((It = !0), he);
          else if (typeof qe === "string" && te) ;
          else ot = wo;
          if (ot === Xt) q = !0;
          return ((Ue = !0), We(he, ot));
        }
        return he;
      });
    if (te && !Ue) {
      if (!It) return ((q = !0), D === "transcript" ? Ne(i, le) : ne("memory_row", i));
      Dt = !0;
    }
    if (!Se && !Ue && !Dt) return i;
    if (nt() === "drop") return D === "transcript" ? Ne(i, le) : ne("kill_switch", i);
    let vt = { ...i, message: { ...G, content: Bn } };
    for (let he of Qft) delete vt[he];
    if (Ue || Dt) for (let he of O1e) delete vt[he];
    if (Se)
      for (let he of ds) {
        let qe = vt[he];
        if (!ke(qe)) continue;
        let ot = Ko(qe, (Lo, Nn) => Wr.has(Nn));
        if (Object.keys(ot).length > 0) vt[he] = ot;
        else delete vt[he];
      }
    return vt;
  }
  function ge(i, D, O) {
    let te = ko(i) || (typeof i.uuid === "string" && L.has(i.uuid));
    if ((rt(i), !z())) return se(i, D, O);
    let G = ke(i.message) ? i.message : void 0;
    if (nt() === "drop")
      return D === "transcript" ? Ne(i, G === void 0 ? [] : (Ao(G) ?? [])) : ne("kill_switch", i);
    let le = te ? Ga : `<${Xl}>${qa}</${Xl}>`,
      Se = {
        ...i,
        message: {
          ...(G === void 0 ? { role: "user" } : jr(G, as)),
          content: G !== void 0 && typeof G.content === "string" ? le : [{ type: "text", text: le }]
        }
      };
    delete Se.modelOnlyText;
    for (let Ue of [...O1e, ...Qft]) if (Ue !== "summarizeMetadata") delete Se[Ue];
    return Se;
  }
  function z() {
    if (q) return !0;
    try {
      return n.accountMemoryInPlay?.() !== !1;
    } catch {
      return !0;
    }
  }
  function Ne(i, D) {
    let O = jr(i, To);
    if (i.type === "system") return O;
    if (ke(i.attachment))
      return ((O.attachment = { type: i.attachment.type, version: null, content: null }), O);
    let te = D.map((G) =>
      wn.has(G.type)
        ? it(G, !0)
        : Co.has(G.type)
          ? We(G, typeof G.tool_use_id === "string" && oe(G.tool_use_id, "history") ? Xt : wo)
          : { type: "text", text: Sn }
    );
    return (
      (O.message = {
        role: i.type === "assistant" ? "assistant" : "user",
        ...jr(ke(i.message) ? i.message : {}, as),
        content: te.length > 0 ? te : [{ type: "text", text: Sn }]
      }),
      O
    );
  }
  function xe(i, D) {
    if (i.type === "async_hook_response") {
      if (typeof i.toolName === "string") return k7(i.toolName, h, D);
      if (typeof i.hookEvent !== "string") return !0;
      return i.hookEvent === ed ? z() : Za.has(i.hookEvent);
    }
    return (
      (Qa.has(i.hookEvent) && i.accountMemoryBatch !== !1) ||
      (typeof i.toolUseID === "string" && oe(i.toolUseID, D))
    );
  }
  function st(i, D) {
    return (
      (typeof i.toolName === "string" && k7(i.toolName, h, D)) ||
      (typeof i.toolUseID === "string" && oe(i.toolUseID, D))
    );
  }
  function at(i, D) {
    let O = jr(i, To),
      te = {};
    for (let [G, le] of Object.entries(Ya))
      for (let Se of le) if (typeof D[Se] === G) te[Se] = D[Se];
    for (let G of Ja) if (D[G] !== void 0) te[G] = Array.isArray(D[G]) ? [] : "";
    if (D.type === "hook_system_message") te.content = Sn;
    if (D.blockingError !== void 0) te.blockingError = { blockingError: "", command: "" };
    if (D.response !== void 0) te.response = {};
    if (D.toolInput !== void 0) te.toolInput = {};
    return ((O.attachment = te), O);
  }
  function dt(i) {
    let D = A.get(i);
    if (D === void 0) ((D = new Map()), A.set(i, D));
    return D;
  }
  function Pt(i, D, O, te, G, le) {
    let Se = O.tool_use_id,
      Ue = Xt;
    if (typeof Se === "string" && oe(Se, le)) ;
    else if (Mo(i)) ;
    else if (typeof Se === "string" && H.has(Se)) {
      if (G !== void 0) dt(te).delete(G);
      return i;
    } else Ue = wo;
    if (G !== void 0) dt(te).set(G, !0);
    if (Ue === Xt) q = !0;
    if (nt() === "drop") return ne("kill_switch", i);
    let It = { ...i, event: { ...D, content_block: We(O, Ue) } };
    for (let Dt of [...O1e, ...Qft]) delete It[Dt];
    return It;
  }
  function Xe(i, D) {
    let O = i.event;
    if (!ke(O)) return i;
    let te = typeof i.parent_tool_use_id === "string" ? i.parent_tool_use_id : "";
    if (O.type === "message_start" || O.type === "message_stop") return (A.delete(te), i);
    let G = typeof O.index === "number" ? O.index : void 0;
    if (O.type === "content_block_start") {
      let le = ke(O.content_block) ? O.content_block : {};
      if (Co.has(le.type)) return Pt(i, O, le, te, G, D);
      let Se = wn.has(le.type),
        Ue = Se && K(le, D);
      if (Se && typeof le.id === "string") H.add(le.id);
      if (Ue) q = !0;
      if (G !== void 0)
        if (Se || td.has(le.type)) dt(te).set(G, Ue);
        else dt(te).delete(G);
      if (!Ue) return i;
      if (nt() === "drop") return ne("kill_switch", i);
      return { ...i, event: { ...O, content_block: it(le, !1) } };
    }
    if (O.type === "content_block_stop" && G !== void 0) return (A.get(te)?.delete(G), i);
    if (O.type === "content_block_delta") {
      let le = G === void 0 ? void 0 : A.get(te)?.get(G);
      if (le === !0) return ne("memory_row", i);
      if (le === void 0) return ne("untracked_delta", i);
    }
    return i;
  }
  function Hr(i, D, O) {
    if (!ke(i)) return;
    switch (i.type) {
      case "stream_event":
        return Xe(i, O);
      case "attachment":
        if (!ke(i.attachment)) return i;
        if (is.has(i.attachment.type)) {
          if (i.attachment.content === null) return i;
          return ((q = !0), D === "transcript" ? Ne(i, []) : ne("memory_row", i));
        }
        if (xe(i.attachment, O)) {
          if (st(i.attachment, O)) q = !0;
          return D === "transcript" ? at(i, i.attachment) : ne("memory_row", i);
        }
        return i;
      case "system":
        if (
          i.subtype !== ss &&
          i.persist !== !1 &&
          ![i.tool_use_id, i.toolUseID].some((te) => typeof te === "string" && oe(te, O))
        )
          return i;
        if (i.subtype === ss || i.persist !== !1) q = !0;
        return D === "transcript" ? Ne(i, []) : ne("memory_row", i);
      case "control_request":
        if (ke(i.request) && Oo(i.request, h)) {
          if (typeof i.request.tool_name === "string" || typeof i.request.dialog_kind === "string")
            q = !0;
          return ne("memory_row", i);
        }
        return i;
      default:
        return ko(i) || ls(i) || (typeof i.uuid === "string" && (L.has(i.uuid) || J.has(i.uuid)))
          ? ge(i, D, O)
          : se(i, D, O);
    }
  }
  function xr(i, D) {
    if (D === "transcript")
      try {
        let O = jr(i, To);
        return (
          (O.message = {
            role: O.type === "assistant" ? "assistant" : "user",
            content: [{ type: "text", text: Sn }]
          }),
          Ee("unreadable", i),
          O
        );
      } catch {}
    return ne("unreadable", i);
  }
  function jn(i, D, O) {
    try {
      return Hr(i, D, O) ?? i;
    } catch {
      return ke(i) ? xr(i, D) : Q;
    }
  }
  function Lr(i, D = "events", O = "history") {
    return i.flatMap((te) => {
      let G = jn(te, D, O);
      return G === Q ? [] : [G];
    });
  }
  function $r(i, D = "history") {
    for (let O of i)
      try {
        $e(O, D);
      } catch {}
  }
  return {
    note: $r,
    redact: Lr,
    withoutMemoryCallAttachments(i, D = "history") {
      return (
        $r(i, D),
        i.filter((O) => {
          if (!ke(O)) return !0;
          try {
            if (O.type !== "attachment" || !ke(O.attachment) || !xe(O.attachment, D)) return !0;
            if (st(O.attachment, D)) q = !0;
            return (Ee("memory_row", O), !1);
          } catch {
            return (Ee("unreadable", O), !1);
          }
        })
      );
    },
    wrapInternalEventWriter(i, D = "history") {
      return (O, te, G) => {
        let [le] = Lr([te], "transcript", D);
        return le === void 0 ? Promise.resolve() : i(O, le, G);
      };
    }
  };
}
var id = new Set(["auto_default", "auto_settings", "explicit", "sdk"]);
function Po(n) {
  return typeof n === "string" && id.has(n);
}
var cs = 200,
  sd = 50,
  ad = 500,
  Io = { scope: "off", backfillMessages: cs, eagerResult: !1 },
  dd = p(() =>
    u({
      scope: B(["off", "auto_default", "auto", "auto_and_sdk", "all"]).catch("off"),
      backfill_messages: v()
        .int()
        .transform((n) => Math.min(ad, Math.max(sd, n)))
        .catch(cs),
      eager_result: M().catch(!1)
    })
  );
function ld(n) {
  let h = dd().safeParse(n);
  if (!h.success) return Io;
  return {
    scope: h.data.scope,
    backfillMessages: h.data.backfill_messages,
    eagerResult: h.data.eager_result
  };
}
function fs() {
  return ld(k("tengu_noble_snowflake", null));
}
function Br(n, h) {
  if (h === void 0) return !1;
  switch (n) {
    case "off":
      return !1;
    case "auto_default":
      return h === "auto_default";
    case "auto":
      return h === "auto_default" || h === "auto_settings";
    case "auto_and_sdk":
      return h === "auto_default" || h === "auto_settings" || h === "sdk";
    case "all":
      return !0;
  }
}
function Do(n) {
  return (
    n.type === "assistant" &&
    Array.isArray(n.message.content) &&
    n.message.content.some((h) => h.type === "tool_use" && (h.name === rm || h.name === $O))
  );
}
function Tn(n) {
  return (
    Zwo(n) ||
    (n.type === "system" &&
      "subtype" in n &&
      (n.subtype === "post_turn_summary" ||
        n.subtype === "task_started" ||
        n.subtype === "task_updated" ||
        n.subtype === "task_notification"))
  );
}
class Cn {
  _active = !1;
  _pending = [];
  _evictedCount = 0;
  get active() {
    return this._active;
  }
  get pendingCount() {
    return this._pending.length;
  }
  get pending() {
    return this._pending;
  }
  get evictedCount() {
    return this._evictedCount;
  }
  start() {
    this._active = !0;
  }
  end() {
    return ((this._active = !1), (this._evictedCount = 0), this._pending.splice(0));
  }
  enqueue(...n) {
    if (!this._active) return !1;
    return (this._pending.push(...n), !0);
  }
  evictOldest(n, h) {
    let E = F(this._pending, n) - h;
    if (E <= 0) return;
    ((this._evictedCount += E), (this._pending = this._pending.filter((T) => !n(T) || E-- <= 0)));
  }
  drop() {
    ((this._active = !1), (this._evictedCount = 0));
    let n = this._pending.length;
    return ((this._pending.length = 0), n);
  }
  deactivate() {
    this._active = !1;
  }
}
var _s = 3,
  ps = 3600000,
  ms = 24 * _s,
  ud = 24 * ps,
  cd = 600000,
  gs = 30000,
  jo = 300000,
  vs = 5000,
  fd = 14,
  _d = "could not reach the Remote Control server for about 30 minutes",
  bs = "the connection to the Remote Control server kept dropping after each reconnect",
  ys = `the connection to the Remote Control server dropped more than ${ms} times in 24 hours`,
  Rs = { attempts: fd, exhaustedDetail: _d };
function Es() {
  let n = [],
    h = Number.NEGATIVE_INFINITY;
  return {
    charge(E, T) {
      if (((n = n.filter((L) => E - L < ud)), T && n.length >= ms)) return "daily_exhausted";
      if (F(n, (L) => E - L < ps && (!T || L >= h)) >= _s) return "hourly_exhausted";
      return (n.push(E), "charged");
    },
    noteHealthyBeat(E) {
      let T = n.at(-1);
      if (T !== void 0 && E - T >= cd) h = E;
    }
  };
}
var pd = p(() =>
  yt({
    pid: v().int(),
    procStart: o()
      .optional()
      .catch(void 0),
    createdAt: v(),
    titleSha: o().optional(),
    usedAt: v().optional()
  })
);
function Ur(n) {
  if (typeof n !== "object" || n === null || Array.isArray(n)) return [];
  return Object.entries(n).flatMap(([h, E]) => {
    let T = pd().safeParse(E);
    if (!T.success) return [];
    let { procStart: H, ...L } = T.data;
    return [[h, H === void 0 ? L : { ...L, procStart: H }]];
  });
}
var hd = 300000,
  md = 2592000000,
  Ss = 20,
  gd = 15000,
  vd = /^(session|cse)_[A-Za-z0-9_-]+$/;
async function Ts() {
  if (_t()) return !1;
  let { getFeatureValue_CACHED_MAY_BE_STALE: n } = await import("./chunk-4m15ar7w.js");
  return n("tengu_bridge_placeholder_sweep", !0);
}
function Bo(n) {
  let h = mo();
  return ((h.placeholderWriteChain = h.placeholderWriteChain.then(n, n)), h.placeholderWriteChain);
}
function Cs(n, h, E) {
  return Bo(async () => {
    if (!(await Ts())) return;
    let T = await vb(),
      H = {
        pid: process.pid,
        procStart: T,
        createdAt: Date.now(),
        ...(h !== void 0 && { titleSha: cn(h) })
      };
    await Re((L) => {
      let J = Ur(L.replBridgePlaceholders),
        q = J.filter(([K]) => !Nr(K, n)),
        A = h === void 0 ? J.find(([K]) => Nr(K, n))?.[1] : void 0;
      (q.push([
        n,
        {
          ...H,
          ...(A?.titleSha !== void 0 && { titleSha: A.titleSha }),
          ...(A?.usedAt !== void 0 && { usedAt: A.usedAt })
        }
      ]),
        q.sort((K, oe) => oe[1].createdAt - K[1].createdAt));
      let Q = q.slice(Ss);
      if (Q.length > 0)
        t(
          `[bridge:placeholder] evicting ${Q.length} record(s) past cap: ${Q.map(([K]) => K).join(", ")}`
        );
      return { ...L, replBridgePlaceholders: Object.fromEntries(q.slice(0, Ss)) };
    }, E);
  });
}
async function Qxs() {
  try {
    let n = Ur(ue().replBridgePlaceholders).map(([, T]) => T),
      h = 1,
      E = new Set();
    for (let T of n) {
      if (T.pid === process.pid || E.has(T.pid)) continue;
      if (T.procStart !== void 0 ? Xa(T.pid) && (await JE(T.pid, T.procStart)) : Xa(T.pid))
        (E.add(T.pid), h++);
    }
    return h;
  } catch {
    return 0;
  }
}
function Fr(n, h) {
  return Bo(async () => {
    await Re((E) => {
      let T = Object.keys(E.replBridgePlaceholders ?? {}).filter((L) => Nr(L, n));
      if (T.length === 0) return E;
      let H = { ...E.replBridgePlaceholders };
      for (let L of T) delete H[L];
      return { ...E, replBridgePlaceholders: H };
    }, h);
  });
}
function Ms(n, h) {
  return Bo(async () => {
    await Re((E) => {
      let T = Ur(E.replBridgePlaceholders).filter(([L, J]) => Nr(L, n) && J.usedAt === void 0);
      if (T.length === 0) return E;
      let H = { ...E.replBridgePlaceholders };
      for (let [L, J] of T) H[L] = { ...J, usedAt: Date.now() };
      return { ...E, replBridgePlaceholders: H };
    }, h);
  }).catch((E) => {
    t(`[bridge:placeholder] use stamp failed: ${d(E)}`, { level: "error" });
  });
}
function Nr(n, h) {
  return rr(n) === rr(h);
}
async function bd(n) {
  if (qm(n.pid)) return !0;
  return Xa(n.pid) && !(await JE(n.pid, n.procStart));
}
function kn(n) {
  if (n === "invalid" || n === "skipped_superseded" || n === "skipped_owner_changed") return !0;
  return typeof n === "number" && n < 500 && n !== 401 && n !== 408 && n !== 429;
}
function ws(n) {
  if (!n) return;
  let h = Vme(n.replace(/\.\d+/, ""));
  if (Number.isNaN(h)) return;
  let E = /\.(\d+)/.exec(n)?.[1] ?? "";
  return `${h}.${E.replace(/0+$/, "")}`;
}
async function yd(n, h, E) {
  if (!(await bd(h))) return "keep";
  if (h.usedAt !== void 0) return Mn("used_marker");
  let { session: T, notFound: H } = await q_t(n, {
    baseUrl: E.baseUrl,
    getAccessToken: E.getAccessToken
  });
  if (H) return "remove";
  if (!T) return "keep";
  if (h.titleSha !== void 0) {
    if (typeof T.title !== "string")
      return (t(`[bridge:placeholder] session GET carried no title for ${n}; keeping`), "keep");
    if (cn(T.title) !== h.titleSha) return Mn("retitled");
  }
  let L = T.connection_status;
  if (L !== void 0 && L !== "disconnected")
    return L === "connected" ? "keep_connected" : "keep_unreadable";
  let J = ws(T.created_at),
    q = ws(T.updated_at);
  if (J === void 0 || q === void 0) return "keep_unreadable";
  if (q !== J)
    return (
      Mn("updated_at"),
      L === void 0 ? "remove_active_no_connection_state" : "remove_active_disconnected"
    );
  let A = Ur(ue().replBridgePlaceholders).find(([K]) => Nr(K, n))?.[1];
  if (A === void 0) return "remove";
  if (A.pid !== h.pid || A.procStart !== h.procStart || A.createdAt !== h.createdAt) return "keep";
  if (A.usedAt !== void 0) return Mn("used_marker");
  let Q = await E.archive(n);
  if (!kn(Q))
    return (m("bridge_placeholder_sweep", typeof Q === "number" ? `http_${Q}` : Q), "keep");
  return (
    g("bridge_placeholder_sweep"),
    t(`[bridge:placeholder] archived orphaned placeholder ${n} (status=${Q})`),
    "remove"
  );
}
function ks(n) {
  let h = mo();
  if (h.placeholderSweepStarted) return Promise.resolve();
  return (
    (h.placeholderSweepStarted = !0),
    (async () => {
      if ((await X(n.startDelayMs ?? gd), !(await Ts()))) return;
      let E = ue().replBridgePlaceholders;
      if (!E) return;
      let T = n.skipSessionId ? rr(n.skipSessionId) : void 0,
        H = Ur(E),
        L = new Set(H.map(([A]) => A)),
        J = Object.keys(E).filter((A) => !L.has(A)),
        q = {
          keep_connected: 0,
          keep_unreadable: 0,
          remove_active_disconnected: 0,
          remove_active_no_connection_state: 0
        };
      for (let [A, Q] of H) {
        let K = Date.now() - Q.createdAt;
        if (Math.abs(K) < hd || rr(A) === T) continue;
        if (!vd.test(A)) {
          J.push(A);
          continue;
        }
        let oe = await yd(A, Q, n);
        if (oe !== "remove" && oe !== "keep") (q[oe]++, t(`[bridge:placeholder] ${A}: ${oe}`));
        if (!(oe === "keep" || oe === "keep_connected" || oe === "keep_unreadable") || K > md)
          J.push(A);
      }
      if (Object.values(q).some((A) => A > 0))
        f("bridge_placeholder_sweep", "not_archived_on_server_state", q);
      if (J.length > 0)
        await Re((A) => {
          if (!A.replBridgePlaceholders) return A;
          let Q = { ...A.replBridgePlaceholders };
          for (let K of J) delete Q[K];
          return { ...A, replBridgePlaceholders: Q };
        }, n.storageV5);
    })().catch((E) => {
      t(`[bridge:placeholder] sweep failed: ${d(E)}`, { level: "error" });
    })
  );
}
function Mn(n) {
  return (a("tengu_bridge_placeholder_used_session", { signal: c(n) }), "remove");
}
var Rd = 120000;
function On(n) {
  return n <= Rd ? b("le_2m") : b("gt_2m");
}
var As = {
    init_retry_max_attempts: 3,
    init_retry_base_delay_ms: 500,
    init_retry_jitter_fraction: 0.25,
    init_retry_max_delay_ms: 4000,
    http_timeout_ms: 1e4,
    uuid_dedup_buffer_size: 2000,
    heartbeat_interval_ms: 20000,
    heartbeat_jitter_fraction: 0.1,
    token_refresh_buffer_ms: 300000,
    teardown_archive_timeout_ms: 1500,
    connect_timeout_ms: 15000,
    oauth_retry_max_attempts: 3,
    oauth_retry_base_delay_ms: 2000,
    min_version: "0.0.0"
  },
  Ed = p(() =>
    u({
      init_retry_max_attempts: v().int().min(1).max(10).default(3),
      init_retry_base_delay_ms: v().int().min(100).default(500),
      init_retry_jitter_fraction: v().min(0).max(1).default(0.25),
      init_retry_max_delay_ms: v().int().min(500).default(4000),
      http_timeout_ms: v().int().min(2000).default(1e4),
      uuid_dedup_buffer_size: v().int().min(100).max(50000).default(2000),
      heartbeat_interval_ms: v().int().min(5000).max(30000).default(20000),
      heartbeat_jitter_fraction: v().min(0).max(0.5).default(0.1),
      token_refresh_buffer_ms: v().int().min(30000).max(1800000).default(300000),
      teardown_archive_timeout_ms: v().int().min(500).max(2000).default(1500),
      connect_timeout_ms: v().int().min(5000).max(60000).default(15000),
      oauth_retry_max_attempts: v().int().min(0).max(6).default(3),
      oauth_retry_base_delay_ms: v().int().min(100).max(1e4).default(2000),
      min_version: o()
        .refine((n) => {
          try {
            return (lH(n, "0.0.0"), !0);
          } catch {
            return !1;
          }
        })
        .default("0.0.0")
    })
  );
async function No() {
  let n = await L4r("tengu_bridge_repl_v2_config", As),
    h = Ed().safeParse(n);
  return h.success ? h.data : As;
}
async function ajn() {
  let n = await No();
  if (
    n.min_version &&
    lH(
      {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.310",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-23T17:43:32Z",
        GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
        HOOKS_WORKER_URL: __sourceFilePath_6730ee2edbd6a62f(
          new __sourceFilePath_6730ee2edbd6a62f_URL(
            "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            import.meta.url
          )
        ),
        DD_SOURCEMAP_GROUP: "default"
      }.VERSION,
      n.min_version
    )
  )
    return `Your version of Claude Code (${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.310", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-10-23T17:43:32Z", GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add", HOOKS_WORKER_URL: __sourceFilePath_6730ee2edbd6a62f(new __sourceFilePath_6730ee2edbd6a62f_URL("./src/plugins/functionHooks/hooks-worker/hooks-worker.js", import.meta.url)), DD_SOURCEMAP_GROUP: "default" }.VERSION}) is too old for Remote Control.
Version ${n.min_version} or higher is required. Run \`claude update\` to update.`;
  return null;
}
function Uo(n, h, E) {
  switch (n) {
    case void 0:
      return "no close code received";
    case 4090:
      switch (h) {
        case "superseded_by_worker":
          return "another connection took over this session (usually another device or Claude Code session) \u2014 this device is standing down (code 4090)";
        case "session_not_active":
          return "this session was ended or archived from another device or app (code 4090)";
        case "session_not_found":
          return "the server no longer reports this session \u2014 it may have been deleted from another device or app (code 4090)";
        case "epoch_stale":
          return "the session worker registration went stale \u2014 no active worker holds it (code 4090)";
        default:
          return "this connection is no longer the active worker for the session (code 4090)";
      }
    case 4091:
      return "transport init failed (code 4091)";
    case 4092:
      return "connection dropped \u2014 no close reason from server (code 4092)";
    case 4093:
      return "presence heartbeats to the server kept failing (code 4093)";
    case 4094:
      return "worker credential expired or rejected (code 4094)";
    case 401:
      return "auth token expired (code 401)";
    case 403: {
      if (!wKe(E?.rejectSource)) return "server rejected connection (code 403)";
      let T = mzr(E.rejectSource);
      if (E.streak === void 0) return T;
      let H = Math.max(1, Math.round(E.streak.streakMs / 60000));
      return `${T}, and kept refusing for ${H} ${I(H, "minute")}`;
    }
    case 404:
      return "session not found on server (code 404)";
    case 1002:
      return "server rejected the connection handshake (code 1002)";
    case 4001:
      return "session expired or not found on server (code 4001)";
    case 4003:
      return "server rejected credentials (code 4003)";
    default:
      return `code ${n}`;
  }
}
var Sd = 5000;
var Os = 300,
  wd = 200,
  xs = 300,
  Td = 600,
  Cd = Xse - xs - Td,
  Fo = 2000,
  Md = 3000,
  Ho = 100,
  kd = 5000,
  Ps = 200,
  Is = 20000,
  Ad = 8,
  Od = 1048576,
  Pd = 30000,
  Id = "tengu_encapsulated_dusk";
function Jwo() {
  return k(Id, !1) ? "drop" : "redact";
}
async function Zxs(n) {
  let {
      baseUrl: h,
      orgUUID: E,
      title: T,
      reattachOrFail: H,
      reattachOrigin: L,
      reviveInitiated: J,
      neverArchive: q,
      onAuthProven: A,
      noHistoryBackfill: Q,
      onReattachGoneBounce: K,
      neutralFallbackTitle: oe,
      onReattachPointerDead: $e,
      ownerPin: Ce,
      onOwnerChanged: rt,
      getAccessToken: Ee,
      onAuth401: ne,
      classifyFailedOAuthRefresh: nt,
      onReadFreshOAuthToken: me,
      onClassifyMissingOAuthToken: it,
      onProactiveRefresh: We,
      toSDKMessages: se,
      initialHistoryCap: ge,
      initialMessages: z,
      conversationForPairing: Ne,
      placeAccountMemoryTool: xe,
      accountMemoryInPlay: st,
      onInboundMessage: at,
      onQueuedNotification: dt,
      onUserMessage: Pt,
      onSessionEstablished: Xe,
      onBeforePushTriggeringState: Hr,
      onPermissionResponse: xr,
      onInterrupt: jn,
      onStopTask: Lr,
      onBackgroundTasks: $r,
      onCancelAsyncMessage: i,
      getInitializeState: D,
      getCommands: O,
      isTurnLive: te,
      onDialogKindsDeclared: G,
      onClientInitialize: le,
      onSetModel: Se,
      onSetMaxThinkingTokens: Ue,
      onSetPermissionMode: It,
      onApplyFlagSettings: Dt,
      onRenameSession: Wr,
      onSetColor: Bn,
      onFileSuggestions: vt,
      onReadFile: he,
      onGetWorkspaceDiff: qe,
      onSideQuestion: ot,
      onGetContextUsage: Lo,
      answerSharedControlRequest: Nn,
      onMcpAuthenticate: Ls,
      onMcpOauthCallbackUrl: $s,
      onMcpReconnect: Ws,
      onForkConversation: qs,
      onStateChange: He,
      onBridgeInjectedMcp: xd,
      onProjectsBindingHint: Gs,
      outboundOnly: jt,
      tags: Vs,
      sessionGroupingId: $o,
      requestedSessionGroupingId: pr,
      gitRepoUrl: lt = null,
      branch: Wo = "",
      defaultBranch: qo = null,
      nameSourceForCreate: Ks,
      onTransportPersistenceReady: hr,
      onTransportPersistenceTeardown: zs,
      onTransportRebuilt: Ys,
      remoteControlOrigin: mr,
      getBackfillMessages: Js,
      reattachSessionId: ut,
      reattachSequenceNum: Xs,
      credentialsStore: qr,
      workSecretCredentials: Qe,
      storageV5: Ge
    } = n,
    Ze = hCr({
      mode: Jwo,
      placeAccountMemoryTool: xe,
      accountMemoryInPlay: st,
      onDropped: (e, r) => {
        if (
          (t(
            `[remote-bridge] Kept one '${r}' row's content out of the upload for account memory (reason: ${e})`
          ),
          e === "unreadable")
        )
          m("bridge_account_memory_redaction", `unredactable_${r}_row`);
      }
    });
  Ze.note(Ne?.() ?? z ?? []);
  let Un = (e, r = "history") => Ze.redact(se(Ze.withoutMemoryCallAttachments(e, r)), "events", r),
    Bt = Qe !== void 0 ? !0 : q,
    Fn = T,
    we = !!ut,
    Z = await No(),
    Go = !1,
    Gr = (e) => {
      if (!Qe) Ce?.noteAcceptedToken(e);
    },
    Vo = "work-secret-lane",
    zo = () => (Qe ? Vo : Ee()),
    Hn = Qe
      ? () => {
          let e = Go ? "refresh" : "initial";
          return Qe.register(e, {
            stillWanted: () => !P && Ie === void 0,
            reuseHeldAboveS: Math.ceil(Z.token_refresh_buffer_ms / 1000) + 60
          }).then((r) => {
            if (r !== null && !soe(r)) Go = !0;
            return r;
          });
        }
      : Bd,
    Vr = Ee();
  if (!Vr)
    return (
      t("[remote-bridge] No OAuth token"),
      m("bridge_connect", "bridge_connect_no_token"),
      null
    );
  let gr = () => Ee() ?? Vr,
    Yo = () => Ce?.ownerToken() ?? Ee() ?? Vr,
    xn = new Set(),
    { getOriginalCwd: Ln } = await import("./chunk-k19pbtc6.js"),
    { getMainLoopModel: Qs } = await import("./chunk-sevvsq0r.js"),
    Kr = pr ?? $o,
    zr = $o,
    Jo = !1;
  async function Qo() {
    let e = lt ? void 0 : await Ks?.(),
      r = e ? { repositoryUrl: e } : void 0;
    Jo = r !== void 0;
    let s = {},
      y = async () => {
        if (lt) {
          let { buildGitSessionContext: S } = await import("./chunk-4x7vmtpj.js"),
            { reportGitSessionContext: j } = await import("./chunk-fbbgy0e4.js"),
            { report: U } = await S(lt, Wo, qo ?? void 0);
          j(U);
        }
      },
      R = (S) =>
        xo(
          (j, U) =>
            GGt(
              h,
              j,
              Fn,
              Z.http_timeout_ms,
              Vs,
              lt ? { gitRepoUrl: lt, branch: Wo, defaultBranch: qo ?? void 0 } : r,
              Ln(),
              Qs(),
              S,
              s,
              U
            ).then((x) => {
              if (typeof x === "string") Ce?.noteAcceptedToken(j);
              return x;
            }),
          "createCodeSession",
          Z,
          { getAccessToken: gr, onAuth401: ne, recoveryAttemptedTokens: xn }
        ),
      _ = await R(Kr);
    if (Iwt(_) && _.reason === "grouping_rejected" && pr === void 0 && Kr !== void 0) {
      let S = await R(void 0);
      if (typeof S === "string") {
        if (((zr = void 0), await y(), r)) sjn("connect");
        return (
          Y("info", "bridge_repl_v2_grouping_dropped", { status: _.status }),
          t("[bridge:core] persisted Project no longer available; recreated session outside it"),
          t(`[remote-bridge] Created session ${S}`),
          Y("info", "bridge_repl_v2_session_created"),
          S
        );
      }
      if (r && !LU(S)) ijn("connect", S);
      return _;
    }
    if (typeof _ === "string") {
      if (((zr = Kr), await y(), r)) sjn("connect");
      (t(`[remote-bridge] Created session ${_}`), Y("info", "bridge_repl_v2_session_created"));
    }
    return _;
  }
  function Zs(e) {
    if (e?.reason === "grouping_rejected" && Kr !== void 0) {
      let r = e.detail ? `: ${e.detail}` : "";
      return pr !== void 0
        ? `Couldn't create a session in the requested Project (server ${e.status}${r}). The Project may not exist or may not be available to you.`
        : `Couldn't recreate the session in its previous Project (server ${e.status}${r}) \u2014 the Project may have been deleted or is no longer available.`;
    }
    if (e?.reason === "request_rejected")
      return `Session creation failed (server ${e.status}) \u2014 see debug log`;
    if (e?.reason === "malformed_response") return ozt;
    return "Session creation failed \u2014 see debug log";
  }
  function Zo(e) {
    if (e !== null && e.terminal === !1) {
      (He?.("failed", $n, "auth"),
        Rx("v2_session_create_oauth_rejected", void 0, !0),
        m("bridge_connect", "bridge_connect_create_oauth_rejected"));
      return;
    }
    if (Jo) ijn("connect", Iwt(e) ? e : null);
    (He?.("failed", Zs(Iwt(e) ? e : null)),
      Rx("v2_session_create_failed", void 0, !0),
      m("bridge_connect", "bridge_connect_session_create_failed"));
  }
  let ea = "JWT refresh failed: no OAuth token \u2014 run /login",
    $n = "Claude.ai login was rejected \u2014 run /login, then /remote-control",
    ta = "Claude.ai login expired \u2014 run /login, then /remote-control",
    ra = "Claude.ai login expired \u2014 run /login to restore Remote Control",
    na = "Signed out of Claude \u2014 run /login, then /remote-control",
    Wn = !1,
    Yr = !1;
  if (ut && XC(ut)) {
    if (H)
      return (
        t(
          `[remote-bridge] Reattach-or-fail: ${ut} is teleported; failing terminally instead of minting fresh`
        ),
        Y("info", "bridge_repl_v2_revive_reattach_teleported"),
        $e?.(),
        He?.("failed", Itt, "terminal"),
        Rx("v2_revive_reattach_teleported", void 0, !0),
        m("bridge_connect", "bridge_connect_reattach_teleported"),
        null
      );
    (t(`[remote-bridge] Reattach suppressed for teleported session ${ut} \u2014 minting fresh`),
      (Wn = !0),
      (we = !1));
  }
  let C;
  if (Qe) {
    if (!ut || Wn)
      return (
        t("[remote-bridge] Work-secret attach has no session to reattach; failing", {
          level: "error"
        }),
        He?.(
          "failed",
          "Remote Control could not attach: the host supplied a session credential but no session to attach to",
          "terminal"
        ),
        Rx("v2_work_secret_no_session", void 0, !0),
        m("bridge_connect", "bridge_connect_work_secret_no_session"),
        null
      );
    ((C = ut),
      t(`[remote-bridge] Attaching to session ${C} with the host's work secret`),
      Y("info", "bridge_repl_v2_work_secret_attach"));
  } else if (ut && !Wn) {
    ((C = ut),
      t(`[remote-bridge] Reattaching to session ${C}`),
      Y("info", "bridge_repl_v2_session_reattached"));
    let e = await xo((r, s) => Fd(C, h, r, E, Z.http_timeout_ms, s, qr), "unarchiveSession", Z, {
      getAccessToken: gr,
      onAuth401: ne,
      recoveryAttemptedTokens: xn
    });
    if (e?.outcome === "elevated_auth") {
      (t(
        `[remote-bridge] Reattach ${C}: unarchive elevated-auth (${e.reason}) \u2014 surfacing the failure, pointer preserved`
      ),
        Y("info", "bridge_repl_v2_reattach_elevated_auth"));
      let r = e.reason === "untrusted_device" && !f9(),
        { outcome: s, ...y } = e,
        R = r ? { terminal: !0, reason: "request_rejected", status: 403 } : { terminal: !0, ...y };
      return (
        He?.("failed", MOe(R), Ot(R)),
        Rx("v2_reattach_elevated_auth", void 0, !0),
        m("bridge_connect", "bridge_connect_reattach_elevated_auth"),
        null
      );
    }
    if (e?.outcome === "gone" && H)
      return (
        t(
          `[remote-bridge] Reattach-or-fail: ${C} gone (unarchive ${e.status}); failing terminally instead of minting fresh`
        ),
        Y("info", "bridge_repl_v2_revive_reattach_gone"),
        K(),
        $e?.(),
        He?.("failed", Itt, "terminal"),
        Rx("v2_revive_reattach_gone", void 0, !0, {
          reattach_origin: ce(L),
          revive_initiated: J === !0
        }),
        m("bridge_connect", "bridge_connect_reattach_gone"),
        null
      );
    if (e?.outcome === "gone") {
      (t(`[remote-bridge] Reattach ${C} gone (unarchive ${e.status}); minting fresh session`),
        (Yr = !0),
        K(),
        (Fn = oe ?? `${a2e()}-${qoe()}`),
        Y("info", "bridge_repl_v2_reattach_fallback", { via: "unarchive", status: e.status }),
        a("tengu_bridge_repl_env_expired_fresh_session", {
          v2: !0,
          via: c("unarchive"),
          status: typeof e.status === "number" ? e.status : c(e.status),
          reattach_origin: ce(L),
          revive_initiated: J === !0
        }));
      let r = await Qo();
      if (typeof r !== "string") return (Zo(r), null);
      ((C = r), (we = !1));
    }
  } else {
    if (H)
      return (
        t(
          "[remote-bridge] Reattach-or-fail: no reattach pointer for this init; failing terminally instead of minting fresh"
        ),
        Y("info", "bridge_repl_v2_revive_fresh_refused"),
        K(),
        He?.("failed", Itt, "terminal"),
        Rx("v2_revive_fresh_refused", void 0, !0),
        m("bridge_connect", "bridge_connect_revive_fresh_refused"),
        null
      );
    let e = await Qo();
    if (typeof e !== "string") return (Zo(e), null);
    C = e;
  }
  if (we && pr !== void 0 && pr !== zr)
    t(
      "[bridge:core] --project ignored: reattached to existing session (Project is fixed at create)"
    );
  if (Bt && we) Fr(C, Ge);
  else if (!jt) Cs(C, we ? void 0 : Fn, Ge);
  ks({
    baseUrl: h,
    getAccessToken: gr,
    skipSessionId: C,
    archive: (e) => Qt(e, h, gr(), E, Z.http_timeout_ms, void 0, Ge),
    storageV5: Ge
  });
  let oa = jo + 60000,
    ct;
  function qn() {
    ct = void 0;
  }
  function Gn(e) {
    if (!soe(e) || !Dn(e)) {
      if (e !== null && !soe(e) && !LU(e)) qn();
      return e;
    }
    if (!RBr()) return e;
    let r = Date.now();
    if (ct === void 0 || r - ct.lastAtMs > oa) ct = { startedAtMs: r, lastAtMs: r, refusals: 0 };
    ((ct.lastAtMs = r), ct.refusals++);
    let s = r - ct.startedAtMs;
    if (ct.refusals > 1 && s >= ovo)
      return (
        t(
          `[remote-bridge] /bridge refused by ${e.source} ${ct.refusals}\xD7 over ${Math.round(s / 1000)}s with nothing reaching Anthropic since \u2014 treating as a verdict`
        ),
        e
      );
    return (
      t(
        `[remote-bridge] /bridge 403 not written by Anthropic's origin (${e.source}) \u2014 treating as unreachable`
      ),
      Y("warn", "bridge_repl_v2_bridge_403_nonorigin", { source: e.source }),
      null
    );
  }
  function Jr(e, r) {
    if (P || Ie !== void 0 || ae !== r) return Promise.resolve(null);
    let s = () =>
      Kn(C, e).then((y) => {
        if (ae !== r) return y;
        let R = Gn(y);
        if (R !== null && !soe(R) && !LU(R)) (Gr(e), _o());
        return R;
      });
    if (!Wt()) return s();
    return dr("owner_changed_recovery").then((y) =>
      y || P || Ie !== void 0 || ae !== r ? null : s()
    );
  }
  let ei = Vr,
    fe = await xo(
      (e, r) => ((ei = e), Hn(C, h, e, Z.http_timeout_ms, r, qr)),
      "fetchRemoteCredentials",
      Z,
      { getAccessToken: gr, onAuth401: ne, recoveryAttemptedTokens: xn }
    );
  if (we && fe === null)
    (t(`[remote-bridge] Reattach ${C}: /bridge failed after unarchive; surfacing retry prompt`),
      Y("info", "v2_remote_creds_reattach_transient"));
  if (!fe || soe(fe) || LU(fe)) {
    let e =
        fe === null
          ? we
            ? "Couldn't reconnect to your Remote Control session. Retry, or start a fresh session without --resume."
            : "Remote credentials fetch failed \u2014 see debug log"
          : LU(fe)
            ? ta
            : MOe(fe),
      r = fe === null ? (J ? "auth" : "terminal") : LU(fe) ? "auth" : Ot(fe),
      s =
        fe === null
          ? we
            ? "v2_remote_creds_reattach_transient"
            : "v2_remote_creds_failed"
          : LU(fe)
            ? "v2_remote_creds_oauth_rejected"
            : Dn(fe)
              ? `v2_remote_creds_request_rejected_${fe.source}`
              : `v2_remote_creds_${fe.reason}`;
    if (
      (t(`[remote-bridge] Creds failed; onStateChange ${He ? "set" : "UNSET"}, msg="${e}"`),
      He?.("failed", e, r),
      Rx(s, void 0, !0),
      m("bridge_connect", "bridge_connect_creds_failed"),
      !we)
    )
      Fs(C, () => Qt(C, h, Yo(), E, Z.http_timeout_ms, void 0, Ge));
    return null;
  }
  (t(`[remote-bridge] Fetched bridge credentials (expires_in=${fe.expires_in}s)`), Gr(ei), Xe?.(C));
  let Vn = fe.worker_epoch;
  function ti(e) {
    Vn = Math.max(Vn, e);
  }
  function Kn(e, r) {
    if (Qe || !fUo()) return Hn(e, h, r, Z.http_timeout_ms, void 0, qr);
    let s = Vn,
      y = ae;
    return rs({
      heldEpoch: s,
      send: (R, _) =>
        Hn(
          e,
          h,
          r,
          Z.http_timeout_ms,
          void 0,
          qr,
          R === void 0 ? void 0 : { expectedEpoch: R, onRefused: _ }
        ),
      maySendAgain: () => {
        if (XC(C)) return !1;
        return !P && !re && Ie === void 0 && ae === y;
      }
    }).then((R) => {
      let _ = R.answer;
      try {
        let S = _ !== null && !soe(_) && !LU(_) ? _.worker_epoch : void 0;
        if (S !== void 0 && !P && ae === y) ti(S);
        if (R.ending !== "not_refused" && $t()) {
          let j = S !== void 0;
          a("tengu_bridge_repl_attach_conflict", {
            outcome: c(R.ending === "followed_up" ? (j ? "resolved" : "unresolved") : R.ending),
            accepted: j,
            stated_epoch: s,
            session_epoch: R.sessionEpoch,
            follow_ups: R.followUps,
            fallback_reason: ce(R.ending === "unfenced_fallback" ? R.fallbackReason : void 0)
          });
        }
      } catch (S) {
        (l(S), Y("error", "bridge_repl_v2_attach_fence_failed"));
      }
      return _;
    });
  }
  let ri = L1e(fe.api_base_url, C);
  t(`[remote-bridge] v2 session URL: ${ri}`);
  function ia() {
    return k("tengu_bridge_selfheal_heartbeats", !0);
  }
  function zn() {
    return k("tengu_bridge_recovery_patience", !0);
  }
  function ni() {
    return k("tengu_dazzling_garden", !0);
  }
  function oi() {
    return k("tengu_ccr_stream_event_flush_ms", KHt);
  }
  function ii() {
    return k("tengu_ccr_stream_first_flush_ms", 0);
  }
  function si() {
    return k("tengu_ccr_no_subscriber_flush_ms", 0);
  }
  function Nt() {
    return jt ? 0 : k("tengu_ccr_no_subscriber_hold_ms", 0);
  }
  function Zt() {
    return Nt() > 0 || w.mayHoldUploads?.() === !0;
  }
  function sa() {
    return k("tengu_ccr_sse_keepalive_max_interval_s", 0);
  }
  function ai() {
    return jt ? !1 : k("tengu_ccr_drop_unwatched_stream_events", !1);
  }
  function er() {
    return jt ? Io : fs();
  }
  function aa() {
    return k("tengu_ccr_idle_heartbeat", !1);
  }
  function da() {
    return k("tengu_ccr_reconnect_beat", !1);
  }
  function la() {
    return k("tengu_ccr_reactivation_beat", !1);
  }
  function ua() {
    return k("tengu_ccr_skip_redundant_heartbeat", !1);
  }
  let vr = cjn(),
    ca = bbt("ccr_worker", Ge);
  function di() {
    return {
      heartbeatIntervalMs: Z.heartbeat_interval_ms,
      heartbeatJitterFraction: Z.heartbeat_jitter_fraction,
      onRequestAuthOk: Sa,
      causeTypedCloseCodes: !0,
      selfHealHeartbeats: ia(),
      advertiseHeartbeatProbeSupport: aa(),
      beatOnStaleReconnect: da(),
      idleTracker: vr,
      beatOnReactivation: la(),
      skipRedundantHeartbeats: ua(),
      uploadTrim: () => k("tengu_ccr_upload_trim", {}),
      uploadHoldMarker: () => k("tengu_ccr_upload_hold_marker", !1),
      skipPlainTaskProgress: () => k("tengu_misty_spindle_enabled", !1),
      eventHoldEnabled: () => k("tengu_ccr_event_hold_enabled", !0),
      processExiting: An,
      streamEventFlushIntervalMs: oi(),
      streamEventFirstFlushMs: ii(),
      sseConnectTimeoutMs: () => wJ().sse_connect_timeout_ms,
      gzipRequestBodyFetch: ca,
      noSubscriberStreamEventFlushIntervalMs: si(),
      noSubscriberUploadHoldMs: Nt(),
      dropUnwatchedStreamEvents: ai(),
      sseKeepaliveMaxIntervalSeconds: sa,
      outboundOnly: jt,
      nonOrigin403Retry: RBr(),
      inboundReadReceipts: rbt,
      onNonOriginRejectionRecovered: wa,
      retainUndeliveredOnClose: !0,
      internalEventUploader: { maxConsecutiveFailures: Ad, maxBatchBytes: Od, requestTimeoutMs: Pd }
    };
  }
  let w;
  try {
    w = await svo({
      ...di(),
      sessionUrl: ri,
      ingressToken: fe.worker_jwt,
      sessionId: C,
      epoch: fe.worker_epoch,
      initialSequenceNum: we ? Xs : void 0,
      getAuthToken: () => fe.worker_jwt
    });
  } catch (e) {
    if (
      (t(`[remote-bridge] v2 transport setup failed: ${d(e)}`, { level: "error" }),
      He?.("failed", `Transport setup failed: ${d(e)}`),
      Rx("v2_transport_setup_failed", void 0, !0),
      m("bridge_connect", "bridge_connect_transport_failed"),
      !we)
    )
      Fs(C, () => Qt(C, h, Yo(), E, Z.http_timeout_ms, void 0, Ge));
    return null;
  }
  (t(`[remote-bridge] v2 transport created (epoch=${fe.worker_epoch})`), He?.("ready"));
  let { worker_jwt: Yn, worker_epoch: li, api_base_url: ui } = fe,
    Ld = null,
    $d = new Set(),
    fa = new Set(),
    _a = !1,
    Wd = !1,
    Xr = 0;
  function qd() {
    (Xr++, (_a = !1), (fa = new Set()));
  }
  let pa = null;
  function Gd(e, r = !1) {}
  function Vd() {
    pa = null;
  }
  function ha() {
    return !1;
  }
  function Kd(e, r, s = !1) {
    return { added: [], removed: [] };
  }
  function ma(e, r = !1) {}
  let ga = (e) => {
      if (Object.keys(e).length === 0)
        return (Gs?.(), { ok: !0, added: [], removed: [], errors: {}, unknownServerCount: 0 });
      return {
        ok: !1,
        error: "Server-injected MCP servers are disabled for this Remote Control session"
      };
    },
    Ut = 0,
    Ft = !1;
  function va() {
    if (P) return;
    let e = Date.now();
    if (e - Ut < Sd) {
      Ft = !0;
      return;
    }
    ((Ut = e), (Ft = !1), wt.refreshNow(C));
  }
  function ci() {
    if (P || !Ft) return;
    ((Ft = !1), (Ut = Date.now()), wt.refreshNow(C));
  }
  function Qr() {
    try {
      ba("withdrawn");
    } catch (e) {
      (l(e), m("bridge_webagent_mcp_inject", "relinquish_threw"));
    }
  }
  function ba(e) {}
  let tr = new P7(Z.uuid_dedup_buffer_size),
    Zr = new Set();
  if (z) for (let e of z) (Zr.add(e.uuid), tr.add(e.uuid));
  let ya = new P7(Z.uuid_dedup_buffer_size),
    fi = new Map(),
    Jn = new P7(Z.uuid_dedup_buffer_size),
    Ae = new Cn(),
    ve = new Cn(),
    Xn = 0,
    Ht = !1,
    Rt = !1,
    nr = new Map(),
    Ra = 64,
    br = we,
    Qn,
    yr,
    Oe = !we && !Q && !Yr && Br(er().scope, mr) ? "deferred" : "live",
    en = mr,
    tn = new P7(Z.uuid_dedup_buffer_size),
    Et,
    Rr = {},
    P = !1,
    rn,
    je = !1,
    _i = 0,
    ae = 0;
  function pi() {
    return (_i++, (ae = _i), (je = !0), (or = Date.now()), (Er = !1), ae);
  }
  function hi(e) {
    if (ae !== e) return !1;
    return ((ae = 0), (je = !1), (or = 0), mi(), !0);
  }
  let nn = !1;
  function mi() {
    if (!nn || P || re) {
      nn = !1;
      return;
    }
    if (((nn = !1), ft !== void 0 || !w.isConnectedStatus())) return;
    if (Ae.active || ve.active) Vt();
    yo();
  }
  function gi() {
    ((ae = 0), (je = !1), (or = 0), mi());
  }
  let or = 0,
    Er = !1,
    vi =
      Z.init_retry_max_attempts * Z.http_timeout_ms +
      (Z.init_retry_max_attempts - 1) * Z.init_retry_max_delay_ms,
    Ea =
      Z.oauth_retry_base_delay_ms * (2 ** Z.oauth_retry_max_attempts - 1) +
      Z.oauth_retry_max_attempts * vi,
    bi = 2 * (15000 + vi + Ea),
    ir = 0,
    yi = 3,
    on = 0,
    Ri = Es();
  function Sa() {
    ((on = 0), Ri.noteHealthyBeat(Date.now()), qn(), A?.());
  }
  let sn = !1,
    ft;
  function sr() {
    (clearTimeout(ft), (ft = void 0));
  }
  let xt = !1;
  function an(e) {
    ((xt = !1), He?.("reconnecting", e));
  }
  function Sr() {
    ((xt = !1), He?.("connected"));
  }
  function be(e, r = "terminal") {
    ((xt = !0), sr(), (tt = void 0), dn(), bo?.end(), He?.("failed", e, r));
  }
  function Ei() {
    let e = Zt();
    return Promise.all([
      w.flush({ retryNow: e }),
      e && w.flushInternalEvents?.({ retryNow: e })
    ]).then(() => {});
  }
  function wr(e = Os) {
    let r = X(e),
      s = Promise.race([Ei().then(() => !0), r.then(() => !1)]),
      y = Promise.race([w.flushDeliveryAcks?.({ retryNow: !0 }), r]);
    return Promise.all([s, y]).then(([R]) => R);
  }
  async function Si(e, r = Date.now()) {
    let s = w.getUploadBacklog?.(),
      y = await wr(Cd),
      R = {
        hold_preflush_ms: Date.now() - r,
        hold_preflush_landed: y,
        hold_preflush_inflight_age_ms: s?.oldestInFlightMs,
        hold_preflush_lane_in_backoff: s?.backingOff
      };
    if (!y) f("ccr_no_subscriber_hold", e);
    return R;
  }
  function wi() {
    let e = w.getUploadBacklog?.();
    return {
      unsent_client_events_at_close: e?.unsentClientEvents,
      unsent_internal_events_at_close: e?.unsentInternalEvents
    };
  }
  function dn() {
    let e = Ae.end(),
      r = ve.end().map((s) => s.frame);
    ((Ht = !1), Ti(e.length + r.length, r, w.discardUndeliveredEvents?.() ?? []));
  }
  function Ti(e, r, s) {
    if (e === 0 && s.length === 0) return;
    (Y("warn", "bridge_repl_v2_client_events_lost", { queued: e, undelivered: s.length }),
      f("bridge_repl", "client_events_lost_at_dead_end", { queued: e, undelivered: s.length }));
    let y = [
        ...s.map((S) => S.payload.subtype),
        ...r.map((S) => (S.type === "system" && "subtype" in S ? S.subtype : void 0))
      ],
      R = y.includes("task_notification"),
      _ = y.includes("background_tasks_changed");
    if (R || _)
      f("ccr_task_status_publish", "status_events_lost_at_dead_end", {
        has_terminal_bookend: R,
        has_level: _
      });
  }
  let ye,
    Ie,
    Lt = !1,
    ar,
    St,
    tt,
    Te = !1,
    Tr,
    re = !1,
    Cr;
  function $t() {
    return !0;
  }
  function pt(e, r, s = !0) {
    if (s) ((ar = void 0), (St = void 0));
    if (!Lt || !$t()) return !1;
    if (r === void 0) f("bridge_presence", e);
    else f("bridge_presence", e, r);
    return !0;
  }
  function Me(e, r) {
    if (((ar = void 0), (St = void 0), (Te = !0), !$t())) return !1;
    if (!Lt) return (m("bridge_connect", "bridge_connect_died_before_presence"), !1);
    if (r === void 0) m("bridge_presence", e);
    else m("bridge_presence", e, r);
    return !0;
  }
  let ln = !1;
  function wa(e) {
    if (P || re || Te) return;
    if (
      (t(
        `[remote-bridge] SSE stream live again after ${e.attempts} non-origin 403(s) over ${Math.round(e.streakMs / 1000)}s (source=${e.source})`
      ),
      pt(
        jd[e.source],
        {
          attempts: e.attempts,
          streak_s: Math.round(e.streakMs / 1000),
          first_in_episode: ln ? 0 : 1,
          recovery_bucket: On(e.streakMs)
        },
        !1
      ))
    )
      ln = !0;
  }
  function Zn(e) {
    if (!wKe(e?.rejectSource)) {
      Me(Ds(e));
      return;
    }
    if (
      Me(Ds(e), {
        ...(e.streak !== void 0 && {
          attempts: e.streak.attempts,
          streak_s: Math.round(e.streak.streakMs / 1000)
        }),
        first_in_episode: ln ? 0 : 1
      })
    )
      ln = !0;
  }
  function Ci(e) {
    if (XC(C)) return;
    let r = ye === void 0 ? void 0 : js(ye.code, ye.cause);
    if (Ie !== void 0 || ye === void 0 || r === void 0 || (Er && Bs(r))) return;
    if (
      ((Ie = r),
      t(
        `[remote-bridge] ${e} latched a stashed supersession close (${ye.code}/${ye.cause ?? "uncaused"}) \u2014 archive suppressed`
      ),
      !Te)
    ) {
      if (ye.code === 403) Zn(ye.detail);
      else if (ye.code === 404) Me("transport_closed_404");
      else (pt("transport_closed_4090"), (Te = !0));
      tt = void 0;
    }
  }
  function eo(e) {
    if (!$t()) return;
    switch (e.leg) {
      case "ok":
        g("bridge_token_refresh");
        return;
      case "sad":
        f("bridge_token_refresh", e.code);
        return;
      case "bad":
        m("bridge_token_refresh", e.code);
        return;
    }
  }
  function Mi(e) {
    if (!PBr()) return;
    let r = csr();
    if (r === void 0 || r.generation <= e) return Ai();
    return ki(r.reason);
  }
  function ki(e) {
    switch (e) {
      case "signed_out":
        return "host_signed_out";
      case "identity_changed":
        return "host_account_changed";
      case "transient":
      case "refresh_failed":
        return;
    }
  }
  function Ai() {
    if (St === void 0) return;
    if (St.generation === qVt()) return St.code;
    let e = csr();
    return e === void 0 ? void 0 : ki(e.reason);
  }
  function Oi(e) {
    return e === "host_signed_out" ? nKo : rKo;
  }
  function Pi(e) {
    return e === "host_signed_out" ? "auth" : "terminal";
  }
  function to() {
    return Ce !== void 0 && !P && !re && SAe();
  }
  function Wt() {
    return to() && Ce !== void 0 && Ce.identityLooksChanged();
  }
  async function Ii(e, r) {
    if (re) return "changed";
    if (!to() || Ce === void 0) return "unchanged";
    let s = await Ce.confirmChanged(r);
    if (s === "changed") return (await Ta(e), "changed");
    return re ? "changed" : s;
  }
  async function dr(e) {
    return (await Ii(e)) === "changed";
  }
  async function Mr(e, r) {
    if (Wt() && (await dr(e))) return !0;
    return P || ae !== r;
  }
  async function Ta(e) {
    if (P || re || Ce === void 0) return;
    if (
      ((re = !0),
      Cr?.(),
      (Cr = void 0),
      wt.cancelAll(),
      gi(),
      rt?.(),
      (sn = !1),
      Ci("owner_changed"),
      (ye = void 0),
      clearTimeout(ur),
      sr(),
      fn?.(),
      (fn = void 0),
      Bi(),
      Ni(),
      PFo(uo),
      XC(C))
    ) {
      (t(
        `[remote-bridge] Signed-in account changed under teleported session ${C} (${e}) \u2014 latched only`
      ),
        dn(),
        vn(),
        Qr(),
        w.close());
      return;
    }
    let r = Te || Ie !== void 0;
    if (
      (t(
        `[remote-bridge] Signed-in account changed under ${C} (${e}${r ? ", episode already dead" : ""}) \u2014 stopping`
      ),
      Y("info", "bridge_repl_v2_owner_changed"),
      !r)
    )
      (pt(e),
        (Te = !0),
        be(Kzr, "terminal"),
        w.write(lKo(C, "account_changed")),
        await wr(Zt() ? Z.teardown_archive_timeout_ms : Os).catch(() => {
          return;
        }));
    else if (!xt) be(Kzr, "terminal");
    else dn();
    if ((vn(), Qr(), !P)) w.close();
    if (Ie !== void 0) return;
    let s;
    if (Bt)
      ((s = "skipped_host_owned"),
        t(`[remote-bridge] Owner-changed settle left host-owned session ${C} unarchived`));
    else {
      let y = await Qt(C, h, Ce.ownerToken(), E, Z.teardown_archive_timeout_ms, void 0, Ge);
      ((s = Ns(y, Ie)),
        t(
          `[remote-bridge] Owner-changed settle archived ${C} with the owner's credential (archive=${y})`
        ));
    }
    if ($t())
      a("tengu_bridge_owner_changed", {
        site: c(e),
        archive_status: c(s),
        episode_already_dead: r
      });
  }
  function Di() {
    if (Ie !== void 0) return Ie;
    if (re) return "owner_changed";
    return;
  }
  function ro() {
    if (Ce !== void 0 && SAe() && Ce.identityLooksChanged())
      return { token: Ce.ownerToken(), source: "pinned_owner" };
    return { token: Ee(), source: "current" };
  }
  let un = we,
    De = new Map(),
    zd = void 0,
    qt = new Set(),
    no = new gt(256),
    ji = new gt(Z.uuid_dedup_buffer_size);
  function oo(e, r) {
    if ((qt.delete(e), De.delete(e) && r)) AZn(e);
  }
  function io() {
    let e,
      r = !1;
    for (let [s, y] of De) {
      if (qt.has(s)) continue;
      ((r = !0), (e = y.details ?? e));
    }
    if (r) Le("requires_action", e);
    else Le("running");
  }
  let so,
    Le = (e, r) => {
      if (Hr && !re && (e === "requires_action" || e === "idle")) Hr();
      if ((w.reportState(e, r), e === "requires_action" && r)) {
        un = !0;
        let s = [...De.values()].flatMap((y) => (y.details ? [y.details] : [])).reverse();
        w.reportMetadata({
          pending_action: r,
          pending_actions: VFo(
            r,
            s.filter((y) => y !== r)
          )
        });
      } else if (un) ((un = !1), w.reportMetadata({ pending_action: null, pending_actions: null }));
      if (e === "running" && so !== "running") {
        if ((w.reportMetadata({ post_turn_summary: null, recap: null }), IUo(), Oe === "deferred"))
          (delete Rr.post_turn_summary, delete Rr.recap);
      }
      so = e;
    };
  function Ca() {
    return (qt.clear(), [...De.values()].map((e) => e.request));
  }
  let fn, ao, _n, lo;
  if (lt)
    (async () => {
      let {
          isNestedGitLabProject: e,
          parseGitRemote: r,
          parseGitHubRepository: s
        } = await import("./chunk-bt0dt01v.js"),
        {
          addWatchedRepo: y,
          removeWatchedRepo: R,
          getCachedBranchForRepo: _,
          onRepoBranchChange: S,
          getRemoteUrlForDir: j
        } = await import("./chunk-zw44w5re.js"),
        U = await import("./chunk-g4rkz4md.js"),
        x = r(lt);
      if (x && e(x)) return;
      let N = x ? `${x.owner}/${x.name}` : s(lt);
      if (!N) return;
      let ie = x ? `${x.host}/${x.owner}/${x.name}` : `github.com/${N}`,
        W = Ln();
      if ((await y(W), P || re)) {
        R(W);
        return;
      }
      let ee,
        de = we,
        pe = we,
        Ke = 0,
        ze = !1,
        mt = !1,
        bn = async () => {
          ze = !0;
          try {
            do {
              mt = !1;
              let Fe = Ke;
              if (P || re) return;
              let Jt = Ln();
              if (Jt !== W) {
                if ((R(W), (W = Jt), await y(Jt), P || re)) {
                  R(Jt);
                  return;
                }
              }
              let kt = await _(Jt);
              if (Fe !== Ke) {
                mt = !0;
                continue;
              }
              if (P || et("branch_metadata")) return;
              if (kt === void 0) {
                if (ee !== null)
                  if (((ee = null), de))
                    ((de = !1),
                      w.reportMetadata({
                        current_branches: { [N]: null },
                        worktree_state: { [N]: null }
                      }));
                  else w.reportMetadata({ current_branches: { [N]: null } });
                continue;
              }
              if (k("tengu_ccr_handoff_metadata", !1)) {
                let [$a, Rn] = await Promise.all([
                  U.collectWorktreeState(Jt, kt),
                  U.withCollectTimeout(j(Jt)).catch(() => null)
                ]);
                if (Fe !== Ke) {
                  mt = !0;
                  continue;
                }
                if (P || et("branch_metadata")) return;
                let En = Rn ? r(Rn) : null,
                  Zi = Rn ? s(Rn) : null,
                  es =
                    (En ? `${En.host}/${En.owner}/${En.name}` : Zi ? `github.com/${Zi}` : null) ===
                    ie,
                  So = es ? kt : null,
                  Je = es ? $a : null,
                  ts = Je
                    ? JSON.stringify([
                        So,
                        Je.head_sha,
                        Je.unpushed_count,
                        Je.is_dirty,
                        Je.mid_operation,
                        Je.upstream_exists,
                        Je.has_submodules,
                        Je.submodules_unverified,
                        Je.has_lfs
                      ])
                    : JSON.stringify([So]);
                if (ts === ee) continue;
                if (
                  ((ee = ts),
                  t(`[remote-bridge] worktree_state \u2192 ${N}: ${JSON.stringify(Je)}`),
                  (de = Je !== null),
                  Je !== null)
                )
                  pe = !0;
                w.reportMetadata({ current_branches: { [N]: So }, worktree_state: { [N]: Je } });
                continue;
              }
              if (de) {
                ((de = !1),
                  (ee = kt),
                  w.reportMetadata({
                    current_branches: { [N]: kt },
                    worktree_state: { [N]: null }
                  }));
                continue;
              }
              if (kt === ee) continue;
              ((ee = kt), w.reportMetadata({ current_branches: { [N]: kt } }));
            } while (mt);
          } catch (Fe) {
            t(`[remote-bridge] current_branches emit failed: ${d(Fe)}`);
          } finally {
            ze = !1;
          }
        };
      ao = () => {
        if (((ee = void 0), (de = pe), Ke++, ze)) mt = !0;
      };
      let Mt = Promise.resolve(),
        Ye = () => {
          if (ze) mt = !0;
          else Mt = bn();
          return Mt;
        };
      ((lo = () =>
        Pe(
          Ye().then(() => w.flushWorkerState?.() ?? !0),
          U.WORKTREE_COLLECT_TIMEOUT_MS + Fo
        )),
        (_n = () => void Ye()));
      let yn = S(_n);
      ((fn = () => {
        (yn(), R(W));
      }),
        Ye());
    })().catch((e) => t(`[remote-bridge] current_branches setup failed: ${d(e)}`));
  let Bi = S6(() => vr.noteActivity()),
    Ni = ul(() => {
      (w.setStreamEventFlushIntervalMs?.(oi()),
        w.setStreamEventFirstFlushMs?.(ii()),
        w.setNoSubscriberStreamEventFlushIntervalMs?.(si()),
        w.setNoSubscriberUploadHoldMs?.(Nt()),
        w.setDropUnwatchedStreamEvents?.(ai()),
        Ua());
    }),
    uo = {};
  $4s({ owner: uo, sessionId: C, report: (e, r) => w.reportDelivery(e, r) });
  let lr = new Map(),
    Ui = !Pt,
    Fi = !1,
    pn = "initial",
    co = 0,
    ur;
  function Hi(e) {
    if (P) return;
    if (
      (a("tengu_bridge_repl_connect_timeout", {
        v2: !0,
        elapsed_ms: Z.connect_timeout_ms,
        cause: c(e)
      }),
      m("bridge_connect", "bridge_connect_timeout"),
      Te)
    )
      ;
    else if (Object.values(Ve).some((r) => r.cause === e)) tt = "recovery_connect_timeout";
    else if (e === "proactive_refresh") tt = "refresh_connect_timeout";
  }
  async function Ma(e) {
    if (!ne) return "rejected";
    try {
      if (await ne(e)) return "recovered";
    } catch (r) {
      t(`[remote-bridge] Proactive forced OAuth refresh threw: ${d(r)}`, { level: "error" });
    }
    if (!ni() || !nt) return "rejected";
    return nt();
  }
  let ka = 3,
    fo,
    hn = 0;
  function _o() {
    ((fo = void 0), (hn = 0));
  }
  function xi(e) {
    return e !== void 0 && e === fo && ni();
  }
  let wt = Bvt({
    refreshBufferMs: Z.token_refresh_buffer_ms,
    onExhausted: (e) => {
      if (!P && !Te) eo({ leg: "bad", code: "chain_exhausted_no_oauth" });
      if (je || P) return;
      if (xt) {
        t(
          `[remote-bridge] Token refresh chain exhausted for ${e} \u2014 terminal state already showing, not repainting`
        );
        return;
      }
      (t(`[remote-bridge] Token refresh chain exhausted for ${e} \u2014 surfacing auth failure`, {
        level: "error"
      }),
        He?.(
          "failed",
          "OAuth token unavailable \u2014 run /login to restore Remote Control",
          "auth"
        ));
    },
    getAccessToken: async () => {
      if (re) return;
      if (Wt()) {
        let s = Te;
        if (await dr("owner_changed_refresh")) {
          if (re && !s) eo({ leg: "sad", code: "owner_changed" });
          return;
        }
      }
      if (Qe) return Vo;
      let e = Ee(),
        r = xi(e);
      try {
        if (r) await me?.();
        else await We?.();
      } catch (s) {
        t(`[remote-bridge] scheduler token refresh failed: ${d(s)}`, { level: "error" });
      }
      return Ee() ?? e;
    },
    onRefresh: (e, r) => {
      (async () => {
        if (Ie !== void 0 || re) {
          t(
            `[remote-bridge] Proactive refresh skipped: session ${re ? "stopped for an owner change" : "superseded"}`
          );
          return;
        }
        if (je || P) {
          if (
            (t("[remote-bridge] Recovery already in flight, skipping proactive refresh"),
            je && Ut !== 0)
          )
            Ft = !0;
          return;
        }
        if (XC(e)) {
          t(`[remote-bridge] Proactive refresh suppressed for teleported session ${e}`);
          return;
        }
        let s = pi(),
          y = Te,
          R = !1,
          _,
          S,
          j,
          U,
          x = !1;
        function N(W, ee, de = "refresh_credentials_rejected", pe) {
          if (P) return;
          if (tt !== void 0 && ye === void 0) (Me(tt), (tt = void 0));
          else if (!y) ((ar = de), (St = pe === void 0 ? void 0 : { code: pe, generation: qVt() }));
          ((_ = W), (S = "refresh_credentials_rejected"), (j = ee));
        }
        async function ie() {
          if (!(await Mr("owner_changed_refresh", s))) return !1;
          if (re) U = { leg: "sad", code: "owner_changed" };
          return !0;
        }
        try {
          if (await ie()) return;
          let W = xi(r);
          if (!W) _o();
          let ee = Date.now(),
            de = Xr,
            pe = await _r(
              () => {
                if (W) return Promise.resolve({ terminal: !1, reason: "oauth_rejected" });
                if (P || Ie !== void 0 || ae !== s) return Promise.resolve(null);
                return Kn(e, r).then((ze) => (P || ae !== s ? ze : Gn(ze)));
              },
              "fetchRemoteCredentials (proactive)",
              Z
            );
          if (P || ae !== s) return;
          if (LU(pe)) {
            if (
              (t(
                W
                  ? "[remote-bridge] Proactive cycle: bearer already rejected by /bridge \u2014 retrying the forced OAuth refresh without re-registering"
                  : "[remote-bridge] Proactive /bridge re-mint rejected (oauth_rejected) \u2014 attempting forced OAuth refresh"
              ),
              !W)
            )
              Y("error", "bridge_repl_v2_proactive_oauth_rejected");
            if (await ie()) return;
            let ze = qVt(),
              mt = await Ma(r),
              bn = Ee() ?? r;
            if (await ie()) return;
            if (mt === "unreachable") {
              if (
                (t(
                  "[remote-bridge] Proactive forced OAuth refresh got no verdict (token endpoint unreachable); keeping transport, a later cycle retries the refresh"
                ),
                !W)
              )
                U = { leg: "sad", code: "refresh_deferred_transient" };
              fo = r;
              let Fe = hn < ka;
              if (XC(e)) Fe = !1;
              if (Fe) (hn++, wt.scheduleFromExpiresIn(e, 0));
              Y("info", "bridge_repl_v2_proactive_refresh_unreachable", {
                early_retry: hn,
                rearmed: Fe
              });
              return;
            }
            let Mt = mt === "recovered";
            if (Mt) _o();
            let Ye = Mt
              ? await _r(
                  () => {
                    if (P || Ie !== void 0 || ae !== s) return Promise.resolve(null);
                    return Kn(e, bn).then((Fe) => (P || ae !== s ? Fe : Gn(Fe)));
                  },
                  "fetchRemoteCredentials (proactive post-refresh)",
                  Z
                )
              : null;
            if (P || ae !== s) return;
            if (Mt && Ye === null) {
              if (
                (t(
                  "[remote-bridge] Proactive post-refresh re-mint failed (transient); fallback refresh will retry"
                ),
                Ie === void 0)
              )
                U = { leg: "sad", code: "post_refresh_remint_null" };
              return;
            }
            if (soe(Ye)) {
              ((U = { leg: "bad", code: `post_refresh_credentials_${Ot(Ye)}` }),
                N(MOe(Ye), Ot(Ye), Pn("refresh", Ye)));
              return;
            }
            if (Ye === null || LU(Ye)) {
              let Fe = Mt ? void 0 : Mi(ze);
              if (Fe !== void 0) {
                ((U = { leg: "sad", code: Fe }),
                  Y("info", "bridge_repl_v2_proactive_host_declined"),
                  N(Oi(Fe), Pi(Fe), "refresh_credentials_rejected", Fe));
                return;
              }
              ((U = {
                leg: "bad",
                code: Mt
                  ? "oauth_rejected_after_refresh"
                  : ne
                    ? "oauth_rejected_refresh_failed"
                    : "oauth_rejected_no_refresh_path"
              }),
                N(ra, "auth"));
              return;
            }
            Gr(bn);
            let yn = await po(Ye, "proactive_refresh", 0, ee, de);
            if (yn === "suppressed_teleported") x = !0;
            if (yn === "rebuilt")
              ((R = !0),
                (U = { leg: "sad", code: "oauth_rejected_recovered" }),
                t(
                  "[remote-bridge] Transport rebuilt (proactive refresh after forced OAuth refresh)"
                ));
            return;
          }
          if (!pe) {
            if (
              (t(
                "[remote-bridge] Proactive /bridge re-mint failed (transient); fallback refresh will retry"
              ),
              Y("warn", "bridge_repl_v2_proactive_remint_null"),
              Ie === void 0)
            )
              U = { leg: "sad", code: "remint_null" };
            return;
          }
          if (soe(pe)) {
            ((U = { leg: "bad", code: `credentials_${Ot(pe)}` }),
              N(MOe(pe), Ot(pe), Pn("refresh", pe)));
            return;
          }
          Gr(r);
          let Ke = await po(pe, "proactive_refresh", 0, ee, de);
          if (Ke === "suppressed_teleported") x = !0;
          if (Ke === "rebuilt")
            ((R = !0),
              (U = { leg: "ok" }),
              t("[remote-bridge] Transport rebuilt (proactive refresh)"));
        } catch (W) {
          if (
            (t(`[remote-bridge] Proactive refresh rebuild failed: ${d(W)}`, { level: "error" }),
            Y("error", "bridge_repl_v2_proactive_refresh_failed"),
            !P && !re)
          )
            ((_ = `Refresh failed: ${d(W)}`),
              (S = "refresh_rebuild_failed"),
              (j = "terminal"),
              (U = { leg: "bad", code: "rebuild_threw" }));
        } finally {
          let W = x;
          if (XC(e)) W = !0;
          if (U !== void 0 && !y && !P && !(W && U.leg === "bad")) eo(U);
          if (!hi(s)) return;
          ci();
          let ee = ye;
          if (((ye = void 0), W)) {
            if (ee !== void 0 && !P) be("Session teleported to cloud");
          } else if (ee !== void 0 && !R && !P && !Te) {
            let de = mn(ee.code, ee.cause, ee.detail, !0, ee.at);
            if (_ !== void 0 && !de && !P && !je) be(_, j);
          } else if (ee !== void 0 && R && !P) {
            if (Wi(ee.code) && !y)
              pt(Ve[ee.code].recoveredCode, { recovery_bucket: On(Date.now() - ee.at) });
          } else if (_ !== void 0 && !P) {
            if ((be(_, j), S !== void 0 && S !== "refresh_credentials_rejected" && !y)) Me(S);
          }
        }
      })();
    },
    label: "remote"
  });
  if (
    (wt.scheduleFromExpiresIn(C, fe.expires_in),
    (Cr = Ce?.subscribe(() => {
      dr("owner_changed");
    })),
    Wt())
  )
    dr("owner_changed");
  let Gt;
  function Li() {
    (w.setOnConnect((y) => {
      if (re) return;
      if (
        (clearTimeout(ur),
        (ir = 0),
        (Tr = void 0),
        (tt = void 0),
        (Te = !1),
        (ar = void 0),
        (St = void 0),
        (xt = !1),
        qn(),
        (Ie = void 0),
        De.size > 0)
      ) {
        let R = [...De.values()].findLast((_) => _.details !== void 0);
        (Le("requires_action", R?.details), qt.clear());
      } else if (so === "running" && Tt(() => !0)) Le("running");
      if (
        (t("[remote-bridge] v2 transport connected"),
        Y("info", "bridge_repl_v2_transport_connected"),
        G4s(),
        ja(y),
        Oe === "deferred")
      ) {
        if (zt === void 0 && !Ki)
          gn(en, () => {
            Ki = !0;
          });
      } else {
        if (cr)
          gn(null, () => {
            cr = !1;
          });
        yo();
      }
      if (
        (a("tengu_bridge_repl_ws_connected", {
          v2: !0,
          cause: c(pn),
          ...(co > 0 && { remint_attempts: co })
        }),
        !Lt && $t())
      )
        ((Lt = !0), g("bridge_presence"));
      if (Oe === "deferred") {
        if (!br && De.size === 0) {
          let R = z?.filter((_) => Wce(_)).findLast((_) => !n2r(_));
          if (Tt(() => R !== void 0 && Nhn(R) && !In(R))) Le("running");
        }
        br = !0;
      }
      if (!br && z && z.length > 0 && !Yr) {
        br = !0;
        let R = w,
          _ = Da(z),
          S = Promise.withResolvers();
        (_.catch((j) => t(`[remote-bridge] flushHistory failed: ${j}`)).finally(() => {
          if ((S.resolve(), w !== R || P || re || je)) return;
          (Vt(), Sr());
        }),
          (Qn = Promise.all([_, S.promise])),
          Qn.catch(() => {}));
      } else if (Ar) Sr();
      else if ((Ae.active || ve.active) && !je) (sr(), Vt(), Sr());
      else if (!Ae.active) Sr();
      (Ba(), (yr = w));
    }),
      w.setOnData((y) => {
        if (re) return;
        if (Gt !== void 0) {
          Gt.push(y);
          return;
        }
        if (!Wt()) {
          s(y);
          return;
        }
        ((Gt = [y]), r());
      }));
    let e = w;
    w.setOnClose((y, R, _) => {
      if (yr === e) yr = void 0;
      let S = Date.now();
      return mn(y, R, _, !1, Math.min(S, e.lastFrameReadAt() ?? S));
    });
    function r() {
      dr("owner_changed").then((y) => {
        let R = Gt;
        if (R === void 0) return;
        if (y || P) {
          Gt = void 0;
          return;
        }
        let _ = R.length;
        while (R.length > 0) {
          if (re || P) {
            Gt = void 0;
            return;
          }
          if (_ === 0 && Wt()) {
            r();
            return;
          }
          _ = Math.max(0, _ - 1);
          let S = R.shift();
          if (S !== void 0) s(S);
        }
        Gt = void 0;
      });
    }
    function s(y) {
      L7s(
        y,
        tr,
        ya,
        (R) => {
          if (W1t(R, "bridge")) (vr.noteActivity(), Ct("client_prompt"));
          let _ = at !== void 0 && R.type === "user" && rbt() ? Kt(R.uuid) : null;
          if (_ === null) return at?.(R);
          return F4s(_, () => at?.(R));
        },
        xr
          ? (R) => {
              if (xr(R)) {
                let _ = R.response.subtype === "success" && !!R.response.response;
                if (_) (vr.noteActivity(), Ct("client_input"));
                if ((oo(R.response.request_id, _), !Rt)) io();
              }
            }
          : void 0,
        (R) => {
          if (pjn(R)) (vr.noteActivity(), Ct("client_input"));
          $7s(R, {
            transport: w,
            sessionId: C,
            onInterrupt: jn,
            onStopTask: Lr,
            onBackgroundTasks: $r,
            onCancelAsyncMessage: i,
            reportsInboundReadReceipts: () => at !== void 0 && rbt(),
            getInitializeState: D,
            claudeCodeVersion: {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.310",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-10-23T17:43:32Z",
              GIT_SHA: "0d2056ecf42d9452a8cd8e054600024e7c557add",
              HOOKS_WORKER_URL: __sourceFilePath_6730ee2edbd6a62f(
                new __sourceFilePath_6730ee2edbd6a62f_URL(
                  "./src/plugins/functionHooks/hooks-worker/hooks-worker.js",
                  import.meta.url
                )
              ),
              DD_SOURCEMAP_GROUP: "default"
            }.VERSION,
            getCommands: O,
            getPendingPrompts: Ca,
            onDialogKindsDeclared: G,
            onClientInitialize: Na,
            onSetModel: Se,
            onSetMaxThinkingTokens: Ue,
            onSetPermissionMode: It,
            onApplyFlagSettings: Dt,
            onRenameSession: Wr,
            onSetColor: Bn,
            onFileSuggestions: vt,
            onReadFile: he,
            onGetWorkspaceDiff: qe,
            onSideQuestion: ot,
            onGetContextUsage: Lo,
            answerSharedControlRequest: Nn,
            onMcpAuthenticate: Ls,
            onMcpOauthCallbackUrl: $s,
            onMcpReconnect: Ws,
            onMcpSetServers: ga,
            onForkConversation: qs,
            hasPendingPrompts: () => De.size > 0,
            outboundOnly: jt,
            writeFrame: (_) => {
              if (et(_.type)) return;
              kr(_, _.type);
            },
            cancellableRequests: fi
          });
        },
        (R) => fi.get(R)?.abort(),
        dt
      );
    }
  }
  function mn(e, r, s, y, R) {
    let _ = !1;
    if ((clearTimeout(ur), P || re)) return (Ti(0, [], w.discardUndeliveredEvents?.() ?? []), !1);
    if (!y)
      (t(`[remote-bridge] v2 transport closed (code=${e}${s ? ` source=${s.rejectSource}` : ""})`),
        a("tengu_bridge_repl_ws_closed", {
          code: e,
          v2: !0,
          close_cause: ce(r),
          recovery_in_flight: je,
          ...(s !== void 0 && { reject_source: c(s.rejectSource) })
        }));
    if (je) {
      let N = or ? Date.now() - or : 0;
      if (N <= bi)
        return ((ye = { code: e ?? 4092, cause: r, detail: s, at: ye?.at ?? Tr ?? R }), !1);
      (t(
        `[remote-bridge] authRecoveryInFlight held ${Math.round(N / 1000)}s (> ceiling ${Math.round(bi / 1000)}s) \u2014 treating as leaked, handling close directly`,
        { level: "error" }
      ),
        Y("error", "bridge_repl_v2_recovery_flag_leaked"),
        gi(),
        (ye = void 0),
        (_ = !0));
    }
    if (Wi(e)) {
      if (ir >= yi) {
        if (
          (t(`[remote-bridge] ${e} recovery exhausted after ${ir} attempts`, { level: "error" }),
          be(`Transport recovery exhausted (code ${e})`),
          !Te)
        )
          Me("recovery_exhausted", { close_code: e });
        return !1;
      }
      if (e === 4094 && !y) {
        if (on >= yi) {
          if (
            (t(
              `[remote-bridge] worker-credential recovery exhausted after ${on} attempts with no successful heartbeat between them`,
              { level: "error" }
            ),
            be("Transport recovery exhausted (worker credential failures)", "auth"),
            !Te)
          )
            Me("cred_recovery_exhausted");
          return !1;
        }
        on++;
      }
      if (e === 4093 && !y) {
        let N = Ri.charge(Date.now(), zn());
        switch (N) {
          case "hourly_exhausted":
          case "daily_exhausted": {
            let ie = N === "hourly_exhausted" ? 1 : 24;
            if (
              (t(`[remote-bridge] heartbeat recovery budget exhausted (${ie}h window)`, {
                level: "error"
              }),
              be(N === "hourly_exhausted" ? bs : ys),
              !Te)
            )
              Me("heartbeat_budget_exhausted", { window_h: ie });
            return !1;
          }
          case "charged":
            break;
        }
      }
      return (ir++, (Tr ??= R), Pa(e), !1);
    }
    let S = (y || _) && Er,
      j = js(e, r);
    if (j !== void 0 && !(S && Bs(j))) Ie = j;
    let U = S && r === "superseded_by_worker" ? void 0 : r,
      x =
        e === 4090 &&
        (U === "superseded_by_worker" || U === "session_not_active" || U === "session_not_found");
    if (
      (be(x ? Uo(e, U) : `Transport closed: ${Uo(e, U, s)}`, x ? "ended_elsewhere" : "terminal"),
      Te)
    )
      return x;
    if (e === 4090)
      if (y && Er) Me("transport_closed_4090");
      else (pt("transport_closed_4090"), (Te = !0));
    else if (e === 403) Zn(s);
    else Me(e === 404 ? "transport_closed_404" : "transport_closed_other");
    return x;
  }
  async function po(e, r, s, y, R) {
    if ((ti(e.worker_epoch), XC(C)))
      return (
        t(`[remote-bridge] Rebuild suppressed for teleported session ${C}`),
        "suppressed_teleported"
      );
    ((pn = r), (co = s), (Ie = void 0), (Er = !0), (un = !1), ao?.(), vn(), Ae.start(), ve.start());
    try {
      let _ = w,
        S = _.getLastSequenceNum();
      if (
        ((yr = void 0),
        _.close({ goodbye: !1, retainUndelivered: !0 }),
        (w = await svo({
          ...di(),
          sessionUrl: L1e(e.api_base_url, C),
          ingressToken: e.worker_jwt,
          sessionId: C,
          epoch: e.worker_epoch,
          initialSequenceNum: S,
          getAuthToken: () => e.worker_jwt
        })),
        P)
      )
        return (w.close(), "rebuilt");
      if (re) return (w.close(), "suppressed_owner_changed");
      (Li(),
        w.connect(),
        Ia(_),
        _n?.(),
        TUo(),
        PUo(),
        MUo(),
        HUo(),
        OUo(),
        tPs(),
        DUo(),
        Ys?.(),
        (ur = setTimeout(Hi, Z.connect_timeout_ms, pn)),
        wt.scheduleFromExpiresIn(C, e.expires_in),
        (Yn = e.worker_jwt),
        (li = e.worker_epoch),
        (ui = e.api_base_url));
      let j = Ut !== 0 && (Ft || y < Ut);
      Ut = 0;
      let U = R < Xr;
      Ft = j || U;
      try {
        ma(e, U);
      } catch (x) {
        (l(x), m("bridge_webagent_mcp_inject", "refresh_threw"));
      }
      Vt();
    } finally {
      (Ae.deactivate(), ve.deactivate());
    }
    return "rebuilt";
  }
  async function $i(e, r, s) {
    let y = !s && it !== void 0 && $t() && bUo(),
      R = y ? await it(e) : void 0;
    if (y && (P || ae !== r)) return;
    if (R === "signed_out") {
      if (
        (t(`[remote-bridge] Signed out on this machine under ${C} (${e}) \u2014 stopping`),
        Y("info", "bridge_repl_v2_signed_out"),
        pt("signed_out"),
        !Lt)
      )
        f("bridge_connect", "signed_out");
      ((Te = !0), be(na, "auth"));
      return;
    }
    if ((be(ea, "auth"), !s)) Me("recovery_no_oauth_token");
  }
  async function Aa(e, r, s, y) {
    let R = Date.now();
    (Y("info", "bridge_repl_v2_remint_loop_entered"), (sn = !0));
    let _ = 0;
    try {
      let S = !1,
        j = 0;
      for (let U = 1; !P; U++) {
        if (ae !== r) return { creds: null, attempts: _ };
        let x = Math.round((Date.now() - R) / 60000);
        an(
          `${Qe ? "Remote Control credentials unavailable" : "Remote Control server unreachable"} \u2014 retrying (attempt ${U}${x > 0 ? `, ${x}m elapsed` : ""})`
        );
        let N = Math.min(gs * 2 ** (U - 1), jo);
        if ((await X(Math.max(Math.random() * N, vs)), P)) break;
        if (ae !== r) return { creds: null, attempts: _ };
        if (((or = Date.now()), XC(C)))
          return (
            be("Session teleported to cloud"),
            Y("info", "bridge_repl_v2_remint_loop_teleported"),
            { creds: null, attempts: _ }
          );
        let ie = zo();
        if (!ie)
          return (
            Y("info", "bridge_repl_v2_remint_loop_no_oauth"),
            await $i("remint_loop", r, s),
            { creds: null, attempts: _ }
          );
        let W = await Jr(ie, r);
        if (((_ = U), P)) break;
        if (ae !== r) return { creds: null, attempts: _ };
        if (W === null) {
          if ((j++, y === void 0 || j < y.attempts)) continue;
          if (
            (t(
              `[remote-bridge] Re-mint loop exhausted (code ${e}): ${j} unreachable attempts, ${Math.round((Date.now() - R) / 1000)}s`,
              { level: "error" }
            ),
            Y("info", "bridge_repl_v2_remint_loop_exhausted", {
              attempts: _,
              elapsed_ms: Date.now() - R,
              queued_writes_dropped: Ae.pendingCount + ve.pendingCount + ve.evictedCount
            }),
            be(y.exhaustedDetail),
            !s)
          )
            Me("recovery_exhausted", { close_code: e, remint_attempts: _ });
          return { creds: null, attempts: _ };
        }
        if (LU(W)) {
          if (ne && !S) {
            if (await Mr("owner_changed_recovery", r)) return { creds: null, attempts: _ };
            S = !0;
            let ee = !1;
            try {
              ee = await ne(ie);
            } catch (de) {
              t(`[remote-bridge] Re-mint loop OAuth refresh threw: ${d(de)}`, { level: "error" });
            }
            if (P) break;
            if (ae !== r) return { creds: null, attempts: _ };
            if (ee) {
              t(
                "[remote-bridge] Re-mint rejected after outage \u2014 OAuth refresh succeeded; retrying with the refreshed credential"
              );
              continue;
            }
          }
          if ((be($n, "auth"), !s)) Me("recovery_credentials_rejected");
          return (Y("info", "bridge_repl_v2_remint_loop_rejected"), { creds: null, attempts: _ });
        }
        if (soe(W)) {
          if ((be(MOe(W), Ot(W)), !s)) Me(Pn("recovery", W));
          return (Y("info", "bridge_repl_v2_remint_loop_denied"), { creds: null, attempts: _ });
        }
        return (
          t(
            `[remote-bridge] Re-mint loop succeeded (code ${e}, attempt ${U}, ${Math.round((Date.now() - R) / 1000)}s)`
          ),
          Y("info", "bridge_repl_v2_remint_loop_recovered", {
            attempts: U,
            elapsed_ms: Date.now() - R
          }),
          { creds: W, attempts: _ }
        );
      }
      return { creds: null, attempts: _ };
    } finally {
      if (ae === r) sn = !1;
    }
  }
  let Ve = {
    401: {
      reconnectingDetail: "JWT expired \u2014 refreshing",
      cause: "auth_401_recovery",
      failureDiagnostic: "bridge_repl_v2_jwt_refresh_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_auth_401",
      needsOAuthRefresh: !0
    },
    4091: {
      reconnectingDetail: "CCR init failed \u2014 retrying",
      cause: "init_4091_recovery",
      failureDiagnostic: "bridge_repl_v2_4091_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_init_4091",
      needsOAuthRefresh: !1
    },
    4093: {
      reconnectingDetail: "presence heartbeats failing \u2014 reconnecting",
      cause: "heartbeat_4093_recovery",
      failureDiagnostic: "bridge_repl_v2_4093_recovery_failed",
      fetchFailure: "retry",
      remintCap: Rs,
      recoveredCode: "recovered_heartbeat_4093",
      needsOAuthRefresh: !1
    },
    4094: {
      reconnectingDetail: "worker credential expired \u2014 re-minting",
      cause: "cred_4094_recovery",
      failureDiagnostic: "bridge_repl_v2_4094_recovery_failed",
      fetchFailure: "terminal",
      remintCap: void 0,
      recoveredCode: "recovered_cred_4094",
      needsOAuthRefresh: !0
    }
  };
  function Wi(e) {
    if (e === 4094) return X1t();
    return e === 401 || e === 4091 || e === 4093;
  }
  let qi = 30000,
    Oa = 5000;
  function Gi(e, r) {
    if (Ve[e].fetchFailure === "terminal") {
      be(r);
      return;
    }
    (Ae.start(),
      ve.start(),
      an("presence recovery failed \u2014 retrying"),
      t(`[remote-bridge] ${e} recovery fetch failed \u2014 retrying in ${qi}ms`),
      sr());
    let s = w;
    function y() {
      if (((ft = void 0), P)) return;
      if (ir === 0) {
        if (Ae.active || ve.active) {
          if (je) {
            ft = setTimeout(y, Oa);
            return;
          }
          (Vt(), Sr());
        }
        return;
      }
      if (w !== s) return;
      mn(e, void 0, void 0, !0, Tr ?? Date.now());
    }
    ft = setTimeout(y, qi);
  }
  async function Pa(e) {
    let r = Te,
      s = Tr ?? Date.now();
    if (XC(C)) {
      be("Session teleported to cloud");
      return;
    }
    if (je) return;
    let y = pi();
    (Ae.start(),
      ve.start(),
      an(Ve[e].reconnectingDetail),
      t(`[remote-bridge] ${e} on transport \u2014 attempting credential refresh + rebuild`));
    try {
      if (await Mr("owner_changed_recovery", y)) return;
      let R = Ee(),
        _ = !0,
        S = qVt();
      if (!Qe && Ve[e].needsOAuthRefresh && ne)
        try {
          _ = await ne(R ?? "");
        } catch (ee) {
          ((_ = !1),
            t(`[remote-bridge] ${e} recovery OAuth refresh threw: ${d(ee)}`, { level: "error" }));
        }
      else if (!Qe && We)
        try {
          await We();
        } catch (ee) {
          t(`[remote-bridge] pre-recovery token refresh failed: ${d(ee)}`, { level: "error" });
        }
      if (ae !== y) return;
      let j = zo() ?? R;
      if (!j || P) {
        if (!P) await $i("recovery", y, r);
        return;
      }
      if (XC(C)) {
        be("Session teleported to cloud");
        return;
      }
      let U = Date.now(),
        x = Xr,
        N = await _r(() => Jr(j, y), "fetchRemoteCredentials (recovery)", Z);
      if (ae !== y) return;
      if ((!N || LU(N)) && !P && Ve[e].needsOAuthRefresh && ne && !_) {
        let ee = !1;
        for (let de = 1; de <= Z.oauth_retry_max_attempts && !P; de++) {
          if (
            (an(
              `OAuth refresh failed \u2014 waiting for a fresh login (${de}/${Z.oauth_retry_max_attempts})`
            ),
            await X(
              Ky({
                attempt: de,
                baseMs: Z.oauth_retry_base_delay_ms,
                jitter: { kind: "symmetric", ratio: Z.init_retry_jitter_fraction }
              })
            ),
            await Mr("owner_changed_recovery", y))
          )
            return;
          let pe;
          try {
            pe = me ? await me() : (await ne(R ?? "")) ? Ee() : void 0;
          } catch (ze) {
            t(`[remote-bridge] Adopt-loop token read threw (attempt ${de}): ${d(ze)}`, {
              level: "error"
            });
          }
          if (P || ae !== y) return;
          let Ke = pe !== void 0 && pe !== (R ?? "") ? pe : void 0;
          if (!Ke) continue;
          if (((ee = !0), XC(C))) {
            be("Session teleported to cloud");
            return;
          }
          N = await _r(() => Jr(Ke, y), "fetchRemoteCredentials (recovery re-poll)", Z);
          break;
        }
        if (ae !== y) return;
        if (LU(N) && !ee) {
          if (!P) {
            let de = Mi(S);
            if (de !== void 0) {
              if ((Y("info", "bridge_repl_v2_recovery_host_declined"), be(Oi(de), Pi(de)), !r))
                if (Lt) (pt(de), (Te = !0));
                else Me("recovery_reauth_required");
              return;
            }
            if ((be("OAuth token refresh failed \u2014 run /login to re-authenticate", "auth"), !r))
              Me("recovery_reauth_required");
          }
          return;
        }
      }
      if (P) return;
      if (!N && Ve[e].fetchFailure === "retry" && !zn()) {
        Gi(e, `could not fetch fresh session credentials after code ${e}`);
        return;
      }
      if (LU(N) && !Ve[e].needsOAuthRefresh && ne) {
        if (await Mr("owner_changed_recovery", y)) return;
        let ee = !1;
        try {
          ee = await ne(R ?? "");
        } catch (de) {
          t(`[remote-bridge] ${e} late OAuth refresh threw: ${d(de)}`, { level: "error" });
        }
        if (P || ae !== y) return;
        if (ee) {
          if (
            ((N = await _r(
              () => Jr(Ee() ?? R ?? "", y),
              `fetchRemoteCredentials (${e} late refresh)`,
              Z
            )),
            P || ae !== y)
          )
            return;
        }
      }
      if (LU(N)) {
        if ((be($n, "auth"), !r)) Me("recovery_credentials_rejected");
        return;
      }
      let ie = 0;
      if (!N) {
        let ee = await Aa(e, y, r, zn() ? Ve[e].remintCap : void 0);
        if (((N = ee.creds), (ie = ee.attempts), !N || P || ae !== y)) return;
      }
      if (soe(N)) {
        if (!P) {
          if ((be(MOe(N), Ot(N)), !r)) Me(Pn("recovery", N));
        }
        return;
      }
      if (ae !== y) return;
      let W = await po(N, Ve[e].cause, ie, U, x);
      if (W === "suppressed_teleported") {
        be("Session teleported to cloud");
        return;
      }
      if (W === "suppressed_owner_changed") return;
      if ((t(`[remote-bridge] Transport rebuilt after ${e}`), !P)) {
        if (!r)
          pt(Ve[e].recoveredCode, {
            ...(ie > 0 && { remint_attempts: ie }),
            recovery_bucket: On(Date.now() - s)
          });
      }
    } catch (R) {
      if (
        (t(`[remote-bridge] ${e} recovery failed: ${d(R)}`, { level: "error" }),
        Y("error", Ve[e].failureDiagnostic),
        !P && !re)
      ) {
        if (
          (Gi(e, `Transport recovery failed (${e}): ${d(R)}`),
          Ve[e].fetchFailure === "terminal" && !r)
        )
          Me("recovery_failed");
      }
    } finally {
      if (hi(y)) {
        if ((ci(), ft !== void 0 && ye !== void 0)) {
          sr();
          let R = ye;
          ((ye = void 0), mn(R.code, R.cause, R.detail, !0, R.at));
        } else ye = void 0;
        if (ft === void 0 && !je) (Ae.drop(), ve.drop(), (Ht = !1));
      }
    }
  }
  if ((Li(), !we && z && z.length > 0)) (Ae.start(), ve.start());
  (w.connect(), (ur = setTimeout(Hi, Z.connect_timeout_ms, pn)));
  function Tt(e) {
    return te ? te(e) : e();
  }
  function Vi(e) {
    return Un(e, "live").map((r) => {
      if (r.type !== "assistant" || r.parent_tool_use_id !== null || r.uuid === void 0)
        return { ...r, session_id: C };
      let s = nr.get(r.uuid);
      if (s === void 0) return { ...r, session_id: C };
      return (
        nr.delete(r.uuid),
        { ...r, session_id: C, user_message_uuid: s, user_message_uuids: [s] }
      );
    });
  }
  function Vt() {
    let e = Oe === "deferred",
      r = e ? Ae.end().filter((x) => Do(x.message)) : Ae.end(),
      s = e ? ve.end().filter((x) => !Tn(x.frame)) : ve.end(),
      y = Ht;
    if (((Ht = !1), r.length === 0 && s.length === 0)) {
      if (e && Tt(() => y) && De.size === 0) Le("running");
      return;
    }
    let R = [],
      _ = [],
      S = () => {
        if (_.length > 0) (R.push(...Vi(_)), (_ = []));
      },
      j = 0,
      U = 0;
    while (j < r.length || U < s.length) {
      let x = r[j],
        N = s[U];
      if (x && (!N || x.seq < N.seq))
        (tr.add(x.message.uuid), tn.add(x.message.uuid), (go = !0), _.push(x.message), j++);
      else if (N) {
        S();
        let ie = N.frame;
        if ("uuid" in ie && typeof ie.uuid === "string") Jn.add(ie.uuid);
        (R.push(Object.assign({}, ie, { session_id: C })), U++);
      }
    }
    if ((S(), Tt(() => y) && De.size === 0)) Le("running");
    (t(
      `[remote-bridge] Drained ${r.length} queued message(s) and ${s.length} SDK event(s) / control frame(s) after flush`
    ),
      w.writeBatch(R));
  }
  function Ia(e) {
    let r = e.takeUndeliveredEvents?.() ?? [];
    if (r.length === 0) return;
    (t(
      `[remote-bridge] Carrying ${r.length} undelivered client event(s) over to the rebuilt transport`
    ),
      Y("info", "bridge_repl_v2_events_carried_over", { count: r.length }),
      a("tengu_bridge_repl_events_carried_over", { count: r.length }),
      w.adoptUndeliveredEvents?.(r));
  }
  function kr(e, r) {
    let s = e.type !== "result" && Ar && !je,
      [y] = Ze.redact([e], "events", "live");
    if (y === void 0) return;
    if (!s && ve.enqueue({ seq: Xn++, frame: y })) {
      t(`[remote-bridge] Queued ${r} during flush`);
      return;
    }
    (w.write(y), t(`[remote-bridge] Sent ${r}`));
  }
  async function Da(e) {
    Ze.note(e);
    let r = e.filter(Wce),
      s = yCr(r, ge);
    if (s.length < r.length)
      t(`[remote-bridge] Capped initial flush: ${r.length} -> ${s.length} (cap=${ge})`);
    let y = Un(s).map((_) => ({ ..._, session_id: C, historical: !0 }));
    if (y.length === 0) return;
    let R = r.findLast((_) => !n2r(_));
    if (Tt(() => R !== void 0 && Nhn(R) && !In(R)) && De.size === 0) Le("running");
    (t(`[remote-bridge] Flushing ${y.length} history events`), await w.writeBatch(y));
  }
  let ho = !1,
    Ar = !1,
    go = !1,
    Ki = !1,
    cr = !1;
  function gn(e, r) {
    let s = w,
      y = s.droppedWorkerStatePatchCount?.() ?? 0;
    (s.reportInternalMetadata?.({ transcript_upload_deferred: e }),
      s.flushWorkerState?.().then((R) => {
        if (R && (s.droppedWorkerStatePatchCount?.() ?? 0) === y) r();
      }));
  }
  let Or;
  function ja(e) {
    if (ho) return;
    if (((ho = !0), Oe === "deferred")) {
      (w.reportMetadata({ transcript_mirror: "deferred" }), zi());
      return;
    }
    if (!we || (mr === void 0 && !Q)) return;
    let r = e === void 0 || e.readFailed === !0,
      s = r ? void 0 : e.internal?.transcript_upload_deferred;
    if (Po(s) && (Q || mr === void 0)) {
      if (!re) w.reportMetadata({ transcript_mirror: "live" });
      ((cr = !0),
        gn(null, () => {
          cr = !1;
        }));
    } else if (Po(s)) {
      if (((en = s), (Oe = "deferred"), zi(), go)) zt = "rows_already_live";
      else if (!Br(er().scope, en)) zt = "flag_off";
    } else if ((r || (s !== void 0 && s !== null)) && Br(er().scope, mr))
      ((Oe = "deferred"), (zt = "marker_unreadable"));
  }
  let zt;
  function Ba() {
    if (zt === void 0) return;
    let e = zt;
    ((zt = void 0), Ct(e));
  }
  function zi() {
    ((Or = Date.now()),
      t("[remote-bridge] Transcript upload deferred until a client opens this session"),
      Y("info", "bridge_repl_transcript_deferred", { reattach: we }),
      a("tengu_bridge_transcript_deferral", { phase: c("deferred"), reattach: we, hold_ms: Nt() }));
  }
  let Yi = !1;
  function Na() {
    if (Oe !== "deferred" || Yi) {
      le?.();
      return;
    }
    Yi = !0;
    let e = Fa();
    queueMicrotask(() => {
      Ct("client_open", e);
      try {
        le?.();
      } catch (r) {
        t(`[remote-bridge] onClientInitialize failed after transcript release: ${d(r)}`);
      }
    });
  }
  function Ua() {
    if (Oe === "deferred" && !Br(er().scope, en)) Ct("flag_off");
  }
  function Ct(e, r = Promise.resolve()) {
    if (Et) return Et;
    if (P || Oe !== "deferred") return Promise.resolve();
    if (!re) w.reportMetadata({ ...Rr, transcript_mirror: "live" });
    ((Rr = {}), (Oe = "live"), (br = !0));
    let s = De.size > 0;
    (t(`[remote-bridge] Releasing deferred transcript (${e})`),
      (Ar = !0),
      Ae.start(),
      ve.start(),
      (Pr = hr ? vo() : Promise.resolve()));
    let y = w;
    return (
      (Et = r
        .then(() => Ha(e, s))
        .catch((R) => t(`[remote-bridge] Transcript back-fill failed: ${d(R)}`, { level: "error" }))
        .finally(() => {
          if (((Ar = !1), w !== y || P || re || !ho)) return;
          if (je) {
            nn = !0;
            return;
          }
          (Vt(), yo());
        })),
      Et
    );
  }
  let Yt,
    Pr = Promise.resolve(),
    Ji = [];
  function vo() {
    return new Promise((e) => {
      Ji.push(e);
    });
  }
  let Ir = !1,
    bo;
  function Xi() {
    return Promise.resolve()
      .then(() => bo?.runNow())
      .catch(l);
  }
  function vn() {
    if (Yt !== void 0) ((Ir = !0), (Pr = vo()));
    zs?.();
  }
  function yo() {
    if (!hr || Yt === w) return;
    let e = w.getInternalEventWriter?.(),
      r = e && Ze.wrapInternalEventWriter(e),
      s = e && Ze.wrapInternalEventWriter(e, "live"),
      y = r && s && ((_, S, j) => (typeof S.uuid === "string" && ji.has(S.uuid) ? s : r)(_, S, j)),
      R = w.getInternalEventReaders?.();
    if (r && R) {
      let _ = !we && Yt === void 0,
        S = w;
      ((Yt = S),
        (Ir = !0),
        (Pr = vo()),
        (bo = hr(
          r,
          R,
          C,
          _,
          (j) => {
            if (j && Yt === S) {
              Ir = !1;
              for (let U of Ji.splice(0)) U();
            }
          },
          Ze.note,
          y
        )));
    }
  }
  function Fa() {
    let e = w;
    if (!e.setSubscribersReportedListener) return Promise.resolve();
    let r = new Promise((s) => {
      e.setSubscribersReportedListener?.((y) => {
        if (y) s();
      });
    });
    return Promise.race([r, X(Md, void 0, { unref: !0 })]).finally(() =>
      e.setSubscribersReportedListener?.(void 0)
    );
  }
  async function Ha(e, r) {
    if (P) return;
    let s = et("transcript backfill") ? void 0 : Js?.(C);
    Ze.note(s ?? []);
    let y = new Set(Ae.pending.map((W) => W.message.uuid)),
      R = (s ?? []).filter((W) => Wce(W) && !tn.has(W.uuid) && !y.has(W.uuid)),
      _ = yCr(R, er().backfillMessages);
    (t(
      `[remote-bridge] Back-filling ${_.length} of ${R.length} eligible message(s)${s === void 0 ? " (history withheld by host)" : ""}`
    ),
      Y("info", "bridge_repl_transcript_released", {
        reason: e,
        backfilled: _.length,
        eligible: R.length,
        withheld: s === void 0
      }),
      a("tengu_bridge_transcript_deferral", {
        phase: c("released"),
        reason: c(e),
        backfilled: _.length,
        eligible: R.length,
        history_withheld: s === void 0,
        deferred_ms: Or === void 0 ? void 0 : Date.now() - Or,
        hold_ms: Nt()
      }));
    let S = Un(_).map((W) => ({ ...W, session_id: C, historical: !0 }));
    for (let W of R) (tr.add(W.uuid), Zr.add(W.uuid));
    for (let W of _) tn.add(W.uuid);
    let j = R.findLast((W) => !n2r(W)),
      U = r || De.size > 0 || Tt(() => j !== void 0 && Nhn(j) && !In(j));
    if (e !== "client_prompt" && !U && S.length > 0)
      S.push(Object.assign(vZn(C), { historical: !0 }));
    let x = w.droppedDurableBatchCount?.() ?? 0,
      N = w;
    for (let W = 0; W < S.length; W += Ho) {
      if (P || re) return;
      if (w !== N) {
        await w.writeBatch(S.slice(W));
        break;
      }
      if ((await w.writeBatch(S.slice(W, W + Ho)), W + Ho < S.length))
        await Promise.race([w.flush(), X(kd, void 0, { unref: !0 })]);
    }
    let ie = w;
    ie.flush().then(() => {
      if ((ie.droppedDurableBatchCount?.() ?? 0) > x)
        (Y("warn", "bridge_repl_transcript_backfill_dropped"),
          a("tengu_bridge_transcript_deferral", {
            phase: c("backfill_dropped"),
            reason: c(e),
            hold_ms: Nt()
          }));
      if (P || re) return;
      ((cr = !0),
        gn(null, () => {
          cr = !1;
        }));
    });
  }
  let Ro = Bt === !0,
    fr;
  function xa(e) {
    if (e?.skipArchive) Ro = !0;
    if (e?.reason) fr = e.reason;
    if (rn) return rn;
    return ((P = !0), (rn = La()), rn);
  }
  async function La() {
    if ((Ci("teardown"), Oe === "deferred"))
      a("tengu_bridge_transcript_deferral", {
        phase: c("exited_unopened"),
        deferred_ms: Or === void 0 ? void 0 : Date.now() - Or,
        hold_ms: Nt()
      });
    let e = tt ?? ar;
    if (e !== void 0) {
      if (!XC(C)) {
        let pe = tt === void 0 ? Ai() : void 0;
        if (pe !== void 0 && Lt && PBr()) pt(pe);
        else Me(e);
      }
      ((tt = void 0), (ar = void 0), (St = void 0));
    } else if (!Te && ye?.code === 403 && !XC(C)) Zn(ye.detail);
    else if (
      !Te &&
      ((ir > 0 && (ft !== void 0 || je)) || (ye !== void 0 && ye.code !== 4090)) &&
      !XC(C)
    )
      Me("recovery_abandoned_at_teardown");
    if (
      (fn?.(),
      Bi(),
      Ni(),
      PFo(uo),
      Cr?.(),
      (Cr = void 0),
      vn(),
      Qr(),
      wt.cancelAll(),
      clearTimeout(ur),
      sr(),
      dn(),
      w.writeBatch(fr !== void 0 ? [lKo(C, fr), vZn(C)] : [vZn(C)]),
      Le("idle"),
      Ro || (sn && fr !== "remote_control_disabled"))
    ) {
      let pe = Bt ? "skipped_host_owned" : Ro ? "skipped_teleport" : "skipped_remint_loop",
        Ke;
      if (Zt()) Ke = await Si("skip_archive_flush_timeout");
      else if (fr !== void 0) await wr();
      let ze = wi();
      (w.close(),
        a("tengu_bridge_repl_teardown", {
          v2: !0,
          archive_status: c(pe),
          archive_ok: !1,
          ...Ke,
          ...ze
        }),
        await w.flushGoodbye(),
        t(`[remote-bridge] Teardown complete (skipArchive): session=${C}`),
        Y("info", "bridge_repl_v2_teardown"),
        Qi());
      return;
    }
    let r = Z.teardown_archive_timeout_ms,
      s = Date.now(),
      y = Di(),
      R,
      _ = s,
      S = r;
    if (Zt() && y === void 0) {
      let pe = s + Xse - xs;
      ((R = await Si("exit_flush_timeout", s)),
        (_ = s + R.hold_preflush_ms),
        (S = Math.max(1, Math.min(r, pe - _))));
    }
    let j = _ + S,
      U = y === void 0 ? ro() : void 0,
      x = U?.token,
      N = await Qt(C, h, x, E, S, y, Ge),
      ie = j - Date.now();
    if (N === 401 && U?.source === "current" && ne && ie >= wd)
      try {
        (await Promise.race([ne(x ?? ""), X(ie)]),
          (U = ro()),
          (x = U.token),
          (N = await Qt(C, h, x, E, Math.max(1, j - Date.now()), y, Ge)));
      } catch (pe) {
        t(`[remote-bridge] Teardown 401 retry threw: ${d(pe)}`, { level: "error" });
      }
    let W = Date.now() - _;
    if (fr !== void 0 && R === void 0) await wr();
    let ee = wi();
    w.close();
    let de = Ns(N, Ie);
    (a("tengu_bridge_repl_teardown", {
      v2: !0,
      archive_status: c(de),
      archive_credential: ce(U?.source),
      archive_ok: typeof N === "number" && N < 400,
      archive_http_status: typeof N === "number" ? N : N === "untrusted_device" ? 403 : void 0,
      archive_timeout: N === "timeout",
      archive_no_token: N === "no_token",
      ...R,
      archive_budget_ms: S,
      archive_ms: W,
      ...ee
    }),
      await w.flushGoodbye(),
      t(`[remote-bridge] Torn down (archive=${N})`),
      Y("info", "bridge_repl_v2_teardown"),
      Qi());
  }
  (a("tengu_bridge_repl_started", {
    has_initial_messages: !!(z && z.length > 0),
    v2: !0,
    ccr_session_id: _e(Yl(C)),
    expires_in_s: fe.expires_in,
    inProtectedNamespace: iN(),
    ...ept()
  }),
    g("bridge_connect"));
  function et(e) {
    if (!re) return !1;
    return (t(`[remote-bridge] Dropping ${e} after owner change`), !0);
  }
  let Eo = {
    bridgeSessionId: C,
    titleWriter: n.titleWriter,
    noHistoryBackfill: Q || Yr,
    getJoinedProjectThread: void 0,
    requestInjectedMcpReassert: va,
    canAdoptInjectedMcp: ha,
    detachForHandoff: () => {
      (wt.cancelAll(), Qr());
    },
    sessionGroupingId: zr,
    outboundOnly: jt ?? !1,
    environmentId: "",
    sessionIngressUrl: fe.api_base_url,
    gitRepoUrl: lt,
    ...(Qe && { getWorkerBearerToken: () => (P ? null : Yn), getWorkerEpoch: () => li }),
    getLastSequenceNum: () => w.getLastSequenceNum(),
    settleUploadsBeforeHandoff: () => {
      if (Et !== void 0 || Oe === "deferred" || Ir) {
        let e = async () => {
          let r = Date.now() + Is,
            s = async (y, R, _) => {
              let S = !1;
              if (
                (await Promise.race([
                  y.finally(() => {
                    S = !0;
                  }),
                  X(Math.max(0, _ - Date.now()), void 0, { unref: !0 })
                ]),
                !S)
              )
                Y("warn", "bridge_repl_handoff_wait_expired", { what: R });
            };
          if ((await s(Yt === w ? Xi() : Pr, "transcript_copy_catch_up", r - Fo), Ir))
            Y("warn", "bridge_repl_handoff_transcript_copy_behind");
          await s(
            Promise.all([w.flush({ retryNow: !0 }), w.flushInternalEvents?.({ retryNow: !0 })]),
            "upload_lanes",
            r
          );
        };
        return (Et ?? Ct("handoff")).then(e).then(
          () => {},
          () => {}
        );
      }
      return Zt()
        ? wr(Fo).then(
            () => {},
            () => {}
          )
        : Promise.resolve();
    },
    awaitUploadsForHandoff: (e) =>
      os(
        {
          sessionKind: () => {
            if (Et !== void 0 || Oe === "deferred") return "deferred";
            if (Zt()) return "held";
            return hr ? "live" : "no_transcript_copy";
          },
          release: () => Et ?? (Oe === "deferred" ? Ct("handoff") : Promise.resolve()),
          isSessionOver: () => P || re,
          hasFailedForGood: () => xt,
          transport: () => w,
          droppedBatches: (r) =>
            (r.droppedDurableBatchCount?.() ?? 0) +
            (r.getInternalEventBacklog?.().droppedBatches ?? 0),
          isConnected: () => yr === w && w.isConnectedStatus(),
          transcriptCopy: hr && {
            isInstalledOnCurrentTransport: () => Yt === w,
            catchUp: () => Pr,
            wakeCatchUp: () => void Xi()
          },
          firstHistoryFlush: () => Qn,
          holdsWrites: () => Ae.active || ve.active || Ae.pendingCount + ve.pendingCount > 0,
          drainLanes: () =>
            Promise.all([
              w.flush({ retryNow: !0 }),
              w.flushInternalEvents?.({ retryNow: !0 })
            ]).then(() => {})
        },
        {
          budgetMs: e?.budgetMs ?? Is,
          signal: e?.signal,
          log: (r) => t(r),
          onBudgetPassed: (r) => Y("warn", "bridge_repl_handoff_upload_wait_expired", { what: r }),
          onFault: (r) => Y("warn", "bridge_repl_handoff_upload_wait_fault", { what: r })
        }
      ),
    flush: () => (Vt(), Ei()),
    writeMessages(e) {
      if (et("writeMessages")) return;
      Ze.note(e, "live");
      for (let _ of e) if (!Zr.has(_.uuid)) ji.add(_.uuid);
      let r = e.filter((_) => Wce(_) && !Zr.has(_.uuid) && !tr.has(_.uuid));
      if (r.length === 0) return;
      if (!Ui)
        for (let _ of r) {
          let S = wZn(_);
          if (S !== void 0 && Pt?.(S, C)) {
            Ui = !0;
            break;
          }
        }
      let s = r.some(Rt ? Hd : Nhn);
      if (s) Rt = !1;
      if (!Fi && s) ((Fi = !0), Ms(C, Ge));
      let y = r;
      if (Oe === "deferred") {
        if (((y = r.filter(Do)), y.length === 0)) {
          if (Ae.active) Ht ||= s;
          else if (Tt(() => s) && De.size === 0) Le("running");
          return;
        }
      }
      if (Ae.enqueue(...y.map((_) => ({ seq: Xn++, message: _ })))) {
        if (s) Ht = !0;
        t(`[remote-bridge] Queued ${y.length} message(s) during flush`);
        return;
      }
      for (let _ of y) (tn.add(_.uuid), tr.add(_.uuid));
      go = !0;
      let R = Vi(y);
      if (Tt(() => s) && De.size === 0) Le("running");
      (t(`[remote-bridge] Sending ${y.length} message(s)`), w.writeBatch(R));
    },
    reportMetadata(e) {
      if (et("reportMetadata")) return;
      if (Oe === "deferred") {
        let { post_turn_summary: r, task_summary: s, recap: y, ...R } = e,
          _ = { post_turn_summary: r, task_summary: s, recap: y };
        for (let j of Object.keys(_)) if (j in e) Rr[j] = _[j];
        let S = R;
        if ("post_turn_summary" in e)
          S.post_turn_summary =
            typeof r === "object" && r !== null && "status_category" in r
              ? { status_category: r.status_category }
              : null;
        if (Object.keys(S).length === 0) return;
        w.reportMetadata(S);
        return;
      }
      w.reportMetadata(e);
    },
    reportInternalMetadata(e) {
      if (et("reportInternalMetadata")) return !1;
      return w.reportInternalMetadata?.(e) ?? !1;
    },
    workerEpoch: () => ({ sessionId: C, epoch: w.getEpoch() }),
    refreshGitBranch() {
      _n?.();
    },
    async publishGitStateBeforeHandoff() {
      if (!lo) return;
      try {
        ao?.();
        let e = await lo();
        if (e === void 0) t("[remote-bridge] git state publish before handoff ran past its bound");
        else if (!e)
          t("[remote-bridge] git state publish before handoff ended with the transport closed");
      } catch (e) {
        t(`[remote-bridge] git state publish before handoff failed: ${d(e)}`, { level: "error" });
      }
    },
    writeSdkMessages(e) {
      if (et("writeSdkMessages")) return;
      Ze.note(e);
      let r = e.filter((_) => !_.uuid || !Jn.has(_.uuid)),
        s = Oe === "deferred" ? r.filter((_) => !Tn(_)) : r,
        y = Ze.redact(s);
      if (y.length === 0) return;
      if (ve.active) {
        let _ = y.filter((j) => j.type !== "stream_event"),
          S = y.length - _.length;
        if (S > 0) t(`[remote-bridge] Dropped ${S} stream_event frame(s) during flush`);
        if (_.length > 0) {
          (ve.enqueue(..._.map((j) => ({ seq: Xn++, frame: j }))),
            t(`[remote-bridge] Queued ${_.length} SDK event(s) during flush`));
          try {
            if (_.some(Hs)) {
              let j = ve.evictedCount > 0;
              if ((ve.evictOldest((U) => Hs(U.frame), Ps), !j && ve.evictedCount > 0))
                t(
                  `[remote-bridge] Over ${Ps} subagent frames queued during flush; dropping the oldest until it drains`
                );
            }
          } catch (j) {
            t(`[remote-bridge] Subagent frame cap failed: ${d(j)}`, { level: "error" });
          }
        }
        return;
      }
      for (let _ of y) if (_.uuid) Jn.add(_.uuid);
      let R = y.map((_) => ({ ..._, session_id: C }));
      w.writeBatch(R);
    },
    sendControlRequest(e) {
      TZn(e.request_id, { automated: !$9e(e) });
      let r = e.request;
      if (Oo(r, xe))
        return (
          no.add(e.request_id),
          t(
            `[remote-bridge] Keeping an account memory prompt at the terminal (not sent to Remote Control): ${e.request_id}`
          ),
          !1
        );
      if (r.subtype === "can_use_tool" || r.subtype === "request_user_dialog")
        (De.delete(e.request_id), De.set(e.request_id, { request: e }), qt.delete(e.request_id));
      if (r.subtype === "request_user_dialog" && ((ve.active && !Ar) || je))
        return (
          qt.add(e.request_id),
          t(
            `[remote-bridge] Not forwarding request_user_dialog while writes are gated / transport recovering (local-only): ${e.request_id}`
          ),
          !1
        );
      if (et("control_request")) return !1;
      let s = { ...e, session_id: C };
      if (r.subtype === "can_use_tool") {
        let y;
        if (k("tengu_bridge_requires_action_details", !1)) {
          let R = r.tool_name === Be || r.tool_name === At,
            _;
          if (r.tool_name === ns) {
            let x = Array.isArray(r.input?.questions) ? r.input.questions : [],
              N = x[0],
              ie = N?.header || N?.question;
            _ = {
              label: "Question",
              body: ie ? ie + (x.length > 1 ? ` (+${x.length - 1} more)` : "") : "Tap to answer"
            };
          } else if (r.tool_name === sS) _ = { label: "Plan", body: "Plan ready for review" };
          if (!_ && r.requires_user_interaction)
            _ = { label: r.display_name ?? r.tool_name, body: "" };
          let S = R && typeof r.input?.command === "string" ? dee(r.input.command) : void 0,
            j = R && (r.description === void 0 || wf(r.input)),
            U = R && typeof r.input?.description === "string" ? r.input.description : void 0;
          y = {
            tool_name: r.tool_name,
            display_tool_name: _?.label ?? r.display_name ?? r.tool_name,
            action_description:
              _?.body ?? dee((!j && (r.description || U)) || (S && hs(S, 120)) || ""),
            raw_command: _ ? void 0 : S,
            tool_use_id: r.tool_use_id,
            request_id: _ ? "" : e.request_id,
            ...(_ && e.request_id && { suppressed_request_id: e.request_id }),
            input: r.input
          };
        }
        if (y) De.set(e.request_id, { request: e, details: y });
        ((Rt = !1), Le("requires_action", y));
      } else if (r.subtype === "request_user_dialog") {
        let y;
        if (k("tengu_bridge_requires_action_details", !1))
          y = x8n(r.dialog_kind, r.payload, e.request_id, r.tool_use_id);
        if (y) De.set(e.request_id, { request: e, details: y });
        ((Rt = !1), Le("requires_action", y));
      }
      return (kr(s, `control_request request_id=${e.request_id}`), !0);
    },
    sendControlResponse(e, r) {
      if (no.has(e.response.request_id)) return;
      if (!r?.skipStateReport) oo(e.response.request_id, !0);
      if (et("control_response")) return;
      let s = { ...e, session_id: C };
      if (!r?.skipStateReport && !Rt) io();
      kr(s, "control_response");
    },
    sendControlCancelRequest(e) {
      if (no.delete(e)) return;
      if (qt.delete(e)) {
        (De.delete(e),
          t(`[remote-bridge] Local-only retract of a declined dialog forward request_id=${e}`));
        return;
      }
      if ((oo(e, !0), et("control_cancel_request"))) return;
      let r = { type: "control_cancel_request", request_id: e, session_id: C };
      if (!Rt) io();
      kr(r, `control_cancel_request request_id=${e}`);
    },
    sendResult(e) {
      if (((Ht = !1), (Rt = !0), et("result"))) return;
      if ((W4s(), Le("idle"), Oe === "deferred" && !er().eagerResult)) {
        t("[remote-bridge] Withheld result (transcript deferred)");
        return;
      }
      let r = vZn(
        C,
        Oe === "deferred" && e?.outcome !== void 0
          ? { ...e, outcome: { ...e.outcome, result: void 0 } }
          : e
      );
      kr(
        r,
        `result ${r.subtype} is_error=${r.is_error} num_turns=${r.num_turns}${r.user_message_uuid ? ` user_message_uuid=${r.user_message_uuid}` : ""}`
      );
    },
    stampReply({ assistantUuid: e, userMessageUuid: r }) {
      if ((nr.set(e, r), nr.size > Ra)) {
        let s = nr.keys().next().value;
        if (s !== void 0) nr.delete(s);
      }
    },
    async subscribePR(e, r, s) {
      if (re) return { ok: !1, reason: "owner_changed" };
      let y = `${e}#${r}`,
        R = lr.get(y);
      if (s) lr.set(y, { agentId: s, repo: e, prNumber: r });
      let _ = await zZe("subscribe", {
        sessionId: C,
        repo: e,
        prNumber: r,
        baseUrl: h,
        getAccessToken: Ee,
        getTrustedDeviceToken: Ow
      });
      if (!_.ok && s)
        if (R) lr.set(y, R);
        else lr.delete(y);
      return _;
    },
    async unsubscribePR(e, r) {
      if (re) return { ok: !1, reason: "owner_changed" };
      let s = await zZe("unsubscribe", {
        sessionId: C,
        repo: e,
        prNumber: r,
        baseUrl: h,
        getAccessToken: Ee,
        getTrustedDeviceToken: Ow
      });
      if (s.ok) lr.delete(`${e}#${r}`);
      return s;
    },
    async recordCreatedPR(e, r) {
      if (P) return { ok: !1, skipped: "no_bridge" };
      if (re) return { ok: !1, skipped: "owner_changed" };
      return Y5s({ sessionUrl: L1e(ui, C), workerToken: Yn, ...e, timeoutMs: r });
    },
    async fetchInboxMessage(e) {
      let r = (s) => (m("bridge_inbox_fetch", s), { ok: !1, reason: s });
      if (P) return r("no_bridge");
      if (re) return r("owner_changed");
      {
        let s = async (j) => {
            if (P) return "no_bridge";
            if (re) return "owner_changed";
            if (j?.fresh ? to() : Wt()) {
              let U = await Ii("owner_changed_inbox", j);
              if (U === "changed") return "owner_changed";
              if (U === "inconclusive") return P ? "no_bridge" : "owner_unverified";
            }
            return P ? "no_bridge" : void 0;
          },
          y = await s();
        if (y) return r(y);
        if (We)
          try {
            await We();
          } catch (j) {
            t(`[remote-bridge] inbox fetch: token refresh failed: ${d(j)}`, { level: "error" });
          }
        let R = Ee(),
          _ = await Ow();
        if (We) {
          let j = await s({ fresh: !0 });
          if (j) return r(j);
        }
        let { fetchSessionInboxMessage: S } = import.meta.require(
          __sourceFilePath_6730ee2edbd6a62f(
            new __sourceFilePath_6730ee2edbd6a62f_URL("./chunk-4k2qqhnv.js", import.meta.url)
          )
        );
        return S({
          sessionId: C,
          fileId: e,
          baseUrl: h,
          getAccessToken: () => R,
          getTrustedDeviceToken: () => Promise.resolve(_)
        });
      }
      return r("feature_disabled");
    },
    getPRWebhookTargets() {
      return [...lr.values()];
    },
    teardown: xa,
    neverArchive: Bt,
    async archive() {
      if (Bt) return;
      let e = Di();
      await Qt(C, h, e === void 0 ? ro().token : void 0, E, Z.teardown_archive_timeout_ms, e, Ge);
    },
    [Symbol.asyncDispose]() {
      return Eo.teardown({ reason: "host_exit" });
    }
  };
  if (Bt && !we) Fr(C, Ge);
  let Qi = bt(Eo);
  return Eo;
}
async function _r(n, h, E) {
  let T = E.init_retry_max_attempts;
  for (let H = 1; H <= T; H++) {
    let L = await n();
    if (L !== null) return L;
    if (H < T) {
      let J = Math.min(
        Ky({
          attempt: H,
          baseMs: E.init_retry_base_delay_ms,
          jitter: { kind: "symmetric", ratio: E.init_retry_jitter_fraction }
        }),
        E.init_retry_max_delay_ms
      );
      (t(`[remote-bridge] ${h} failed (attempt ${H}/${T}), retrying in ${Math.round(J)}ms`),
        await X(J));
    }
  }
  return null;
}
async function xo(n, h, E, T) {
  let H = !1,
    L = !1,
    J = await _r(
      async () => {
        if (H) L = !0;
        let q = T.getAccessToken(),
          A = !1,
          Q = await n(q, () => {
            A = !0;
          }),
          K = LU(Q);
        if ((Q === null || K) && A && T.onAuth401 && !H && !T.recoveryAttemptedTokens.has(q)) {
          T.recoveryAttemptedTokens.add(q);
          let oe = !1;
          try {
            oe = await T.onAuth401(q);
          } catch ($e) {
            t(`[remote-bridge] ${h} 401 \u2014 OAuth refresh threw: ${d($e)}`, { level: "error" });
          }
          if (
            ((H = oe),
            t(
              `[remote-bridge] ${h} 401 \u2014 OAuth ${oe ? "refreshed; retrying with the fresh token" : "refresh unavailable"}`
            ),
            Y("info", "bridge_repl_v2_init_401_refresh", { refreshed: oe }),
            H && K)
          )
            return null;
        }
        return Q;
      },
      h,
      E
    );
  if (J === null && H && !L)
    return (
      t(`[remote-bridge] ${h} refreshed on the final attempt; one extra try with the fresh token`),
      n(T.getAccessToken(), () => {})
    );
  return J;
}
function Dd(n) {
  if (n.reason === "untrusted_device") return n.refusal?.kind !== "signature_wanted" && !h_e();
  return n.reason === "session_stale_relogin";
}
function Ot(n) {
  return Dd(n) ? "auth" : "terminal";
}
function Dn(n) {
  return n.reason === "request_rejected" && n.status === 403 && wKe(n.source);
}
function Pn(n, h) {
  return Dn(h) ? `${n}_credentials_rejected_nonorigin` : `${n}_credentials_rejected`;
}
var jd = {
  nonorigin_cf: "recovered_403_nonorigin_cf",
  nonorigin_other: "recovered_403_nonorigin_other"
};
function Ds(n) {
  switch (n?.rejectSource) {
    case "nonorigin_cf":
      return "transport_closed_403_nonorigin_cf";
    case "nonorigin_other":
      return "transport_closed_403_nonorigin_other";
    case "origin":
    case void 0:
      return "transport_closed_403";
  }
}
function MOe(n) {
  switch (n.reason) {
    case "untrusted_device":
      return loe(n.refusal, { justEnrolled: n.justEnrolled === !0 });
    case "session_stale_relogin":
      return eKo;
    case "invalid_session_id":
      return "session id contains unsupported characters \u2014 check the --session-id value";
    case "request_rejected":
      if (Dn(n)) return `${mzr(n.source)} \u2014 run /remote-control to retry`;
      return `Remote Control server rejected the request (HTTP ${n.status}) \u2014 run /remote-control to retry`;
    case "malformed_response":
      return ozt;
  }
}
async function Bd(n, h, E, T, H, L, J) {
  let q = await Ow(),
    A = await fzr(n, h, E, T, q, H, J),
    Q = soe(A) && A.reason === "untrusted_device" ? A.refusal : void 0;
  if (Q !== void 0 && MLe(Q)) {
    let K = await tzt(q, (oe) => fzr(n, h, E, T, oe, H, J), L);
    if (K !== void 0 && K !== null)
      A = soe(K) && K.reason === "untrusted_device" ? { ...K, justEnrolled: !0 } : K;
  } else if (Q !== void 0) (Uce("[remote-bridge]", Q), FU());
  if (!A) return null;
  if (LU(A)) return A;
  if (soe(A)) {
    if (A.reason === "untrusted_device" && !f9())
      return { terminal: !0, reason: "request_rejected", status: 403 };
    return A;
  }
  return Aye() ? { ...A, api_base_url: h } : A;
}
function js(n, h) {
  if (n === 403 || n === 404) return "superseded_unknown";
  if (n !== 4090) return;
  switch (h) {
    case "superseded_by_worker":
      return "superseded";
    case "session_not_active":
      return "session_archived";
    case "epoch_conflict":
    case void 0:
      return "superseded_unknown";
    case "epoch_stale":
    case "session_not_found":
    case "token_expired":
    case "auth_exhausted":
      return;
  }
}
function Bs(n) {
  return n !== "session_archived";
}
function Ns(n, h) {
  return n === "skipped_superseded"
    ? h === "session_archived"
      ? "skipped_archived"
      : "skipped_superseded"
    : n === "skipped_owner_changed"
      ? "skipped_owner_changed"
      : n === "no_token"
        ? "skipped_no_token"
        : n === "invalid"
          ? "invalid_id"
          : n === "untrusted_device"
            ? "server_403_untrusted"
            : n === "timeout" || n === "error"
              ? "network_error"
              : n >= 500
                ? "server_5xx"
                : n >= 400
                  ? "server_4xx"
                  : "ok";
}
async function Qt(n, h, E, T, H, L, J) {
  if (XC(n))
    return (t(`[remote-bridge] Archive suppressed for teleported session ${n}`), Fr(n, J), 200);
  if (L === "owner_changed")
    return (
      t(`[remote-bridge] Archive suppressed for owner-changed session ${n}`),
      Y("info", "bridge_repl_archive_suppressed_owner_changed"),
      "skipped_owner_changed"
    );
  if (L !== void 0)
    return (
      t(`[remote-bridge] Archive suppressed for ${L} session ${n}`),
      Y(
        "info",
        L === "superseded"
          ? "bridge_repl_archive_suppressed_superseded"
          : L === "session_archived"
            ? "bridge_repl_archive_suppressed_archived"
            : "bridge_repl_archive_suppressed_superseded_unknown"
      ),
      "skipped_superseded"
    );
  if (!E) return "no_token";
  let q = await Ow().catch(() => {
      return;
    }),
    A = await uhn(h, E, n, H, { useV2: yU(), orgUUID: T, trustedDeviceToken: q });
  if (kn(A)) Fr(n, J);
  return A;
}
var Us = 8,
  Nd = 5000,
  Ud = 2000;
async function Fs(n, h) {
  for (let E = 0; E < Us; E++) {
    if (E > 0) await X(UI({ baseMs: Nd, floorMs: Ud, attempt: E - 1 }), void 0, { unref: !0 });
    let T = await h();
    if (kn(T) || T === "untrusted_device") return;
    t(
      `[remote-bridge] Archive of abandoned session ${n} not confirmed (attempt ${E + 1}/${Us}, status=${T})`
    );
  }
}
async function Fd(n, h, E, T, H, L, J) {
  if (!E) return { outcome: "ok" };
  let q = await Ow().catch(() => {
      return;
    }),
    A = await pzr(h, E, n, H, { useV2: yU(), orgUUID: T, trustedDeviceToken: q });
  if (A === "invalid")
    return (
      Y("info", "bridge_repl_v2_unarchive_invalid_id"),
      { outcome: "gone", status: "invalid" }
    );
  if (
    A === "untrusted_device" ||
    A === "untrusted_device_no_enroll" ||
    A === "session_stale_relogin"
  ) {
    if (A === "untrusted_device") {
      let K = await tzt(
        q,
        (oe) => pzr(h, E, n, H, { useV2: yU(), orgUUID: T, trustedDeviceToken: oe }),
        J
      );
      if (typeof K === "number" && (K < 300 || K === 409))
        return (Y("info", "bridge_repl_v2_unarchive_ok"), { outcome: "ok" });
      if (K === "untrusted_device_no_enroll")
        return (
          Y("info", "bridge_repl_v2_unarchive_elevated_auth"),
          { outcome: "elevated_auth", reason: "untrusted_device", refusal: V7n }
        );
    }
    if ((Y("info", "bridge_repl_v2_unarchive_elevated_auth"), A === "untrusted_device_no_enroll"))
      return (
        Uce("[remote-bridge]", V7n),
        FU(),
        { outcome: "elevated_auth", reason: "untrusted_device", refusal: V7n }
      );
    return { outcome: "elevated_auth", reason: A };
  }
  if (typeof A !== "number") return (Y("info", "bridge_repl_v2_unarchive_failed"), null);
  let Q = A < 300 || A === 409;
  if ((Y("info", Q ? "bridge_repl_v2_unarchive_ok" : "bridge_repl_v2_unarchive_failed"), Q))
    return { outcome: "ok" };
  if (A === 400 || A === 403 || A === 404) return { outcome: "gone", status: A };
  if (A === 401) L?.();
  return null;
}
function yCr(n, h) {
  if (h <= 0 || n.length <= h) return n;
  let E = n.length - h;
  for (let { fromIdx: T, toIdx: H } of S8n(n))
    if (E > T && E <= H) {
      E = T;
      break;
    }
  return n.slice(E);
}
function Hd(n) {
  if (n.type !== "user" || !Nhn(n) || In(n)) return !1;
  let h = n.message.content;
  return typeof h === "string" || !h.some((E) => E.type === "tool_result");
}
function Hs(n) {
  if ((n.type !== "assistant" && n.type !== "user") || n.parent_tool_use_id == null || !Tn(n))
    return !1;
  return (
    n.type === "user" ||
    !n.message.content.some((h) => h.type === "tool_use" && (h.name === ht || h.name === cf))
  );
}
function In(n) {
  if (n.type !== "user" || !vm(n)) return !1;
  let h = n.message.content;
  return typeof h === "string"
    ? HRe.includes(h)
    : h.every((E) => E.type !== "text" || HRe.includes(E.text));
}
export { Jxs, sjn, ijn, hCr, Qxs, ajn, Jwo, Zxs, MOe, yCr };

//# sourceMappingURL=chunk-xkdyhaxm.js.map
