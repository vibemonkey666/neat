// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { mu } from "./chunk-64ygy579.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, A6 } from "./chunk-fs43t96t.js";
import { nt, U, J, Il } from "./chunk-wrtp8qz8.js";
import { LTt, jh, _fe } from "./chunk-d54avynm.js";
import { l } from "./chunk-ewvf3tep.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { mf } from "./chunk-4nzy53ma.js";
import { nr } from "./chunk-tcvjb2c0.js";
import { Hu } from "./chunk-dvghjmtr.js";
import { hd } from "./chunk-zem4yd4w.js";
import { bqo, Sqo, Uvt, wtr, _Vr, Yk, wv, jnt, kn, k, Ij } from "./chunk-ajtyjx88.js";
import { Ks, pS, iB, zz } from "./chunk-znkwh1rm.js";
import { brt, AVt, xor, vSn, _kt } from "./chunk-qakn3b85.js";
import { gbe, hbe, twn, Pqe } from "./chunk-zf79f62g.js";
import { wV } from "./chunk-cr7a2cdd.js";
import { ae } from "./chunk-ar6ynjt8.js";
import { pU } from "./chunk-e0ax8qma.js";
import { et } from "./chunk-c9re0p40.js";
import { _e } from "./chunk-n8wdmnah.js";
function bHe(e) {
  let n = Ie().loadedModules.find((r) => r.name === e);
  return n === void 0 || mu(n);
}
function GNo() {
  let e = new Map(),
    n = new Map(),
    r = new Set();
  return {
    list: (t) => (bHe(t) ? [...(e.get(t)?.values() ?? [])] : []),
    own: (t) => {
      let s = e.get(t) ?? new Map();
      return (e.set(t, s), s);
    },
    serverKey: (t) => n.get(t),
    ownerOfKey: (t) => [...n.entries()].find(([, s]) => s === t)?.[0],
    keyed: (t, s) => {
      (n.set(t, s), r.add(s));
    },
    minted: (t) => r.has(t),
    forget: (t) => {
      (e.delete(t), n.delete(t));
    }
  };
}
var a$ = GNo();
var cqs = "anthropic/chromeUploadFiles",
  be = "anthropic/chromeUploadMaxBytes",
  uqs = "anthropic/chromeUploadAutoModeOnly",
  _He = new nt(() => ({}));
function r3n(e, n) {
  let r = e?.[be];
  return typeof r === "number" && Number.isInteger(r) && r > 0 ? Math.min(r, n) : n;
}
function d_t(e) {
  return e !== void 0 && LTt(e.type) && e.scope !== "project" && e.relayed !== !0 && !jh(e);
}
function UD(e, n) {
  if (n.type === "sdk" && d_t(n)) return "sdk";
  if (jh(n) || ce(e, n.scope)) return "plugin";
  return n.scope;
}
function o3n(e) {
  return {
    name: e.serverName,
    source:
      e.source ??
      (e.pluginTelemetry !== void 0 || ce(e.serverName, e.scope ?? "dynamic")
        ? "plugin"
        : e.serverType === "sdk"
          ? "sdk"
          : (e.scope ?? "dynamic"))
  };
}
function ce(e, n) {
  return n === "dynamic" && a$.ownerOfKey(e) !== void 0;
}
var XBt = "x-mcp-server-origin",
  KFr = "x-ccr-owner-slack-user-id";
function Sze(e, n) {
  return Object.entries(e ?? {})
    .filter(([r]) => r.toLowerCase() === n)
    .map(([, r]) => r);
}
var re = new nt(() => ({}));
var Pe = "anthropic/claudeAiConnector";
function pe(e, n) {
  return (
    e.protocol === "https:" &&
    e.username === "" &&
    e.password === "" &&
    Hu(e.href) &&
    e.pathname === n
  );
}
function s3n(e, { path: n, serverId: r }) {
  try {
    if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !1;
    let t = e.config,
      s = brt(t);
    if (s !== void 0) {
      if (
        s !== r ||
        t.type !== "http" ||
        J() ||
        i.CLAUDE_CODE_REMOTE ||
        i.CLAUDE_CODE_ENVIRONMENT_KIND
      )
        return !1;
      let A = new URL(t.url);
      return A.search === "" && pe(A, n);
    }
    if (t.type === "claudeai-proxy") {
      if (!_fe(t)) return !1;
      return pe(new URL(t.url), n);
    }
    if (t.type === "sdk") return q(e)?.serverId === r;
    let y = i.CLAUDE_CODE_ENVIRONMENT_KIND;
    return (
      i.CLAUDE_CODE_REMOTE === !0 &&
      (!y || y === "anthropic_cloud") &&
      t.type === "http" &&
      t.scope === "dynamic" &&
      !jh(t) &&
      gbe(t) === r
    );
  } catch {
    return !1;
  }
}
function q(e) {
  try {
    let n = e.config,
      r = e.capabilities?.experimental?.[Pe];
    if (
      n.type !== "sdk" ||
      !d_t(n) ||
      J() ||
      i.CLAUDE_CODE_REMOTE ||
      i.CLAUDE_CODE_ENVIRONMENT_KIND ||
      !mf() ||
      typeof r !== "object" ||
      r === null ||
      !("serverId" in r) ||
      r.serverId !== (n.connectorId ?? e.name)
    )
      return;
    return r;
  } catch {
    return;
  }
}
function JBt(e) {
  if (J() && _He.peek(U())?.host === void 0) return "diskless";
  let n = Oe();
  if (n !== void 0) return n;
  if (iB()) return "policy_not_loaded";
  if (!pS(e.policy)) return "policy_denied";
  if (Ks("hipaa")) return "hipaa";
  return;
}
function Oe() {
  let e;
  try {
    e = wV();
  } catch {
    return "policy_not_asked";
  }
  switch (e) {
    case void 0:
    case "prosumer_oauth":
      return;
    case "third_party_provider":
    case "custom_base_url":
      return "policy_never_served";
    default:
      return "policy_not_asked";
  }
}
var pun = [
    {
      path: Pqe,
      serverId: hbe,
      policy: "allow_cobalt_plinth",
      uploadPathPrefix: `${Pqe}/upload/`,
      ccrEntryPath: twn
    }
  ],
  Ae = {
    connectorOrigin: "https://drivemcp.googleapis.com",
    connectorPath: "/mcp/v1",
    desktopMark: "googleDriveFill",
    desktopHostFillMark: "googleDriveHostFill",
    toolName: "create_file",
    argument: "base64Content",
    wrongArguments: ["content"],
    flag: "tengu_wobbly_dewdrop",
    policy: "allow_drive_file_references",
    serviceName: "Google Drive",
    maxFileBytes: 10485760,
    maxFileText: "10 MB"
  },
  M = [Ae];
var me =
  "FILE REFERENCES: to upload a file you can read here, don't type its base64; set base64Content to a file reference, sha256:<64 lowercase hex>:<its absolute path, with / between folders>. The app fills in the file's content once the user approves the call.";
function Re(e) {
  let n = Sqo();
  if (n !== null) return n && P(e);
  let r = kn(e.flag, !1);
  if (!r.value) {
    if (Ij(r.source)) Uvt(!1);
    return !1;
  }
  let t = JBt(e);
  if (!Ij(r.source) || t === "policy_not_loaded" || t === "policy_not_asked" || zz()) return !1;
  let s = t === void 0;
  return (Uvt(s), s);
}
function uRi(e) {
  let n =
    e.mcpInfo?.fileReference === !0 &&
    (!i.CLAUDE_CODE_REMOTE || e.mcpInfo.remoteFileReferenceFill === !0)
      ? M.find((r) => r.toolName === e.mcpInfo?.toolName)
      : void 0;
  return n !== void 0 && Re(n) ? "FR1:" : "";
}
function he(e, n) {
  if (!M.some((t) => t.toolName === n)) return;
  if (e.config.type === "sdk") {
    let t = q(e);
    return t === void 0
      ? void 0
      : M.find((s) => s.toolName === n && (z(t, s) === "fill" || z(t, s) === "hostFill"));
  }
  if (pU(e.config) === void 0 || !("url" in e.config) || typeof e.config.url !== "string") return;
  let { url: r } = e.config;
  return M.find((t) => {
    let s = `${t.connectorOrigin}${t.connectorPath}`;
    return t.toolName === n && (r === s || r === `${s}/`);
  });
}
function wze(e, n) {
  try {
    let r = q(e),
      t =
        he(e, n) ??
        (r === void 0 ? void 0 : M.find((E) => E.toolName === n && z(r, E) === "conflicting"));
    if (t !== void 0 || i.CLAUDE_CODE_REMOTE !== !0 || !M.some((E) => E.toolName === n)) return t;
    let { config: s } = e;
    if (
      s.type !== "http" ||
      s.scope !== "dynamic" ||
      jh(s) ||
      !("url" in s) ||
      typeof s.url !== "string"
    )
      return;
    let y = new URL(s.url, "https://no-origin.invalid"),
      A = AVt.find((E) => y.pathname.startsWith(E));
    if (A === void 0 || !/^[^/]+\/mcp$/.test(y.pathname.slice(A.length))) return;
    let F = y.searchParams.getAll("mcp_url");
    return M.find((E) => {
      let S = `${E.connectorOrigin}${E.connectorPath}`;
      return E.toolName === n && F.some((h) => h === S || h === `${S}/`);
    });
  } catch (r) {
    if (i.CLAUDE_CODE_REMOTE !== !0) throw r;
    return (
      l(
        new R(
          `[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents (${A6(r instanceof Error ? r.name : typeof r)}), so it is treated as one: the text of errors from its upload tool is left out of logs and traces.`,
          "[file reference] could not check whether an MCP server is a connector whose uploads may carry a file's contents; it is treated as one"
        )
      ),
      M.find((t) => t.toolName === n)
    );
  }
}
function mun(e, n) {
  if (!i.CLAUDE_CODE_REMOTE) {
    let r = he(e, n),
      t = q(e);
    if (r !== void 0) return t !== void 0 && z(t, r) === "hostFill" ? { ...r, hostFills: !0 } : r;
    let s = M.find((y) => y.toolName === n);
    if (s === void 0 || t === void 0) return;
    return { ...s, refusesReferences: z(t, s) === "conflicting" ? "conflicting" : "undeclared" };
  }
  try {
    let { config: r } = e,
      t = Il();
    if (
      !(nr() || t) ||
      r.type !== "http" ||
      r.scope !== "dynamic" ||
      jh(r) ||
      hd.bridgeCarrier !== void 0 ||
      !vSn(r.url) ||
      !jnt(r.url, xor)
    )
      return;
    let s = t ? re.peek(U())?.read?.(e.name, r.url) : r.headers;
    if (s === void 0 || Sze(s, KFr).length > 0) return;
    let y = Sze(s, XBt);
    if (y.length !== 1 || (y[0] !== "directory" && y[0] !== "custom")) return;
    let A = _kt(r.url)?.upstreamUrl,
      F = M.find((h) => {
        let H = `${h.connectorOrigin}${h.connectorPath}`;
        return h.toolName === n && (A === H || A === `${H}/`);
      });
    if (F === void 0) return;
    if (!t) return { ...F, approvalSeesContent: !0 };
    let { name: E } = e,
      { url: S } = r;
    return {
      ...F,
      approvalSeesContent: !0,
      stillHeld: () => re.peek(U())?.read?.(E, S) !== void 0
    };
  } catch {
    return;
  }
}
var De = "anthropic/filledFromFileReference",
  Ue = "anthropic/hostFillsFileReference";
function gun(e) {
  return e.config.type === "sdk" ? { [De]: "true" } : void 0;
}
function QBt(e, n) {
  return e !== void 0 && (wtr(n) || P(e));
}
function J7e(e, n) {
  return e !== void 0 && (i.CLAUDE_CODE_REMOTE || QBt(e, n));
}
function VFr(e, n) {
  return (
    e.mcpInfo?.fileReference === !0 &&
    J7e(
      M.find((r) => r.toolName === e.mcpInfo?.toolName),
      n
    )
  );
}
function c_t(e, n, r = "McpToolCallError") {
  return `${r}; its message (${n.length} characters) is not logged because errors from ${e.serviceName}'s ${e.toolName} tool can contain the file being uploaded. The tool result in this session's transcript shows the message, shortened if long.`;
}
var we = /^[\r\n]*[A-Za-z0-9+/_-][A-Za-z0-9+/_\r\n-]*(?:=[\r\n]*){0,2}$/,
  Le = 100,
  Ne = 16;
function G(e, n) {
  if (typeof e !== "string") return;
  let r = Buffer.from(e, "base64");
  if (et(r) !== n.split(":")[1]) return;
  let t = (s) => s.replace(/[\s=]/g, "").replace(/-/g, "+").replace(/_/g, "/");
  return t(e) === t(r.toString("base64")) ? r.length : void 0;
}
function hun(e, n, r, t, s) {
  let y = () => import("./chunk-kdkjmffp.js");
  if (n.refusesReferences) {
    let p = { validateInput: e.validateInput, call: e.call },
      o =
        n.refusesReferences === "conflicting"
          ? "desktop_drive_fill_declaration_conflict"
          : "desktop_drive_fill_not_declared";
    ((e.validateInput = async (d, u) => {
      let v = Ee(n, d, !1);
      if (v === void 0) return (await p.validateInput?.(d, u)) ?? { result: !0 };
      (f("mcp_drive_file_reference", "not_available"),
        L({
          stage: "plan",
          outcome: "refused",
          reason: "not_available",
          detail: o,
          toolUseId: u.toolUseId
        }));
      let { refusalText: _ } = await y();
      return { result: !1, message: _(v, "not_available", {}), errorCode: 2, notAnError: !0 };
    }),
      (e.call = async (d, u, ...v) => {
        let _ = Ee(n, d, u.toolUseId !== void 0 && wtr(u.toolUseId));
        if (_ === void 0) return p.call(d, u, ...v);
        (f("mcp_drive_file_reference", "not_available"),
          L({
            stage: "fill",
            outcome: "refused",
            reason: "not_available",
            detail: o,
            toolUseId: u.toolUseId,
            requestId: v[1]?.requestId
          }));
        let { refusalText: b } = await y();
        return { data: b(_, "not_available", {}) };
      }));
    return;
  }
  let A = e.prompt;
  e.prompt = async (p) => {
    let o = await A(p);
    if (!Re(n)) return o;
    return o === "" ? me : `${me} ${o}`;
  };
  let F = new Map(),
    E = new Set(),
    S,
    h = new Map(),
    H = { validateInput: e.validateInput, call: e.call, askInputPreparer: e.askInputPreparer },
    oe = (p) => (p !== void 0 && wtr(p) ? r : H);
  if (
    ((e.validateInput = async (p, o) => {
      S = void 0;
      let d = h.size > 0 ? p[n.argument] : void 0;
      if (typeof d === "string") {
        let N = et(Buffer.from(d, "base64")),
          D = h.get(N);
        if (D !== void 0 && !D.toolUses.has(o.toolUseId ?? "") && G(d, D.reference) !== void 0)
          h.delete(N);
      }
      let u = o.toolUseId === void 0 ? void 0 : F.get(o.toolUseId);
      if (
        o.toolUseId !== void 0 &&
        u !== void 0 &&
        !(n.approvalSeesContent && G(p[n.argument], u.reference) !== void 0)
      )
        F.delete(o.toolUseId);
      if (!P(n)) return (await oe(o.toolUseId).validateInput?.(p, o)) ?? { result: !0 };
      let v = (await r.validateInput?.(p, o)) ?? { result: !0 };
      if (!v.result) return v;
      _Vr(o.toolUseId);
      let _ = { ...p };
      if (!te(_, n)) return v;
      let { readReferencedFile: b } = await y(),
        K = Date.now(),
        C = await b(_, ae(o), "check", n, { session: o.session, signal: o.abortController.signal }),
        x = Date.now() - K;
      if ("refusal" in C)
        return (
          L({
            stage: C.beforeRead ? "plan" : "check",
            outcome: "refused",
            reason: C.refusal,
            detail: C.detail,
            fileRefPathKind: C.fileRefPathKind,
            checkReadMs: x,
            toolUseId: o.toolUseId
          }),
          {
            result: !1,
            message: C.message,
            errorCode: 2,
            ...(C.notAnError && { notAnError: C.notAnError })
          }
        );
      L(
        "buf" in C
          ? {
              stage: "check",
              outcome: "passed",
              sizeBytes: C.buf.length,
              checkReadMs: x,
              toolUseId: o.toolUseId
            }
          : {
              stage: "plan",
              outcome: "passed",
              detail: "host_fills",
              checkReadMs: x,
              toolUseId: o.toolUseId
            }
      );
      let B = _[n.argument];
      if (o.toolUseId !== void 0 && typeof B === "string") {
        if (F.size >= Le) {
          let N = F.keys().next().value;
          if (N !== void 0) {
            if ((F.delete(N), n.approvalSeesContent)) {
              let D = E.values().next().value;
              if (E.size >= bqo && D !== void 0) E.delete(D);
              E.add(N);
            }
          }
        }
        if (
          (E.delete(o.toolUseId),
          F.set(o.toolUseId, { reference: B, checkReadMs: x }),
          n.approvalSeesContent && "buf" in C)
        )
          S = { reference: B, base64: C.buf.toString("base64"), toolUseId: o.toolUseId };
      }
      return v;
    }),
    n.approvalSeesContent)
  ) {
    if (e.mcpInfo !== void 0) e.mcpInfo = { ...e.mcpInfo, remoteFileReferenceFill: !0 };
    let p = e.backfillObservableInput;
    e.backfillObservableInput = (d) => {
      let u = p?.call(e, d);
      if (S !== void 0 && d[n.argument] === S.reference) {
        if (P(n)) {
          d[n.argument] = S.base64;
          let v = S.reference.split(":")[1] ?? "",
            _ = h.get(v);
          (h.delete(v),
            h.set(v, {
              reference: S.reference,
              toolUses: (_?.toolUses ?? new Set()).add(S.toolUseId)
            }));
          let b = h.keys().next().value;
          if (h.size > Ne && b !== void 0) h.delete(b);
        }
        S = void 0;
      }
      return u;
    };
    let o = e.toAutoClassifierInput;
    e.toAutoClassifierInput = (d) => {
      let u = h.size > 0 ? d[n.argument] : void 0,
        v = typeof u === "string" ? h.get(et(Buffer.from(u, "base64"))) : void 0;
      return o.call(
        e,
        v !== void 0 && G(u, v.reference) !== void 0 ? { ...d, [n.argument]: v.reference } : d
      );
    };
  }
  let Y = r.call;
  if (
    ((e.call = async (p, o, ...d) => {
      let { toolUseId: u } = o;
      for (let [I, T] of h) if (T.toolUses.delete(u ?? "") && T.toolUses.size === 0) h.delete(I);
      if (!(u !== void 0 && (F.has(u) || E.has(u) || wtr(u))) && !P(n)) return H.call(p, o, ...d);
      _Vr(u ?? (d[1] === void 0 ? void 0 : t(d[1])));
      let _ = { ...p },
        b = u === void 0 ? void 0 : F.get(u),
        K = te(_, n),
        C = b !== void 0 && n.approvalSeesContent && !K ? G(_[n.argument], b.reference) : void 0,
        x =
          !K &&
          b === void 0 &&
          u !== void 0 &&
          E.has(u) &&
          (!P(n) || JBt(n) !== void 0 || n.stillHeld?.() === !1);
      if (C === void 0 && !K && !x) {
        if (Sqo() !== !0 || !P(n)) return Y(_, o, ...d);
        let I = [n.argument, ...n.wrongArguments]
          .map((O) => _[O])
          .find((O) => typeof O === "string" && we.test(O));
        if (typeof I !== "string") return Y(_, o, ...d);
        let T = 0;
        for (let O = 0; O < I.length; O++) {
          let V = I.charCodeAt(O);
          T += Number(V !== 10 && V !== 13 && V !== 61);
        }
        let w = {
            stage: "typed_base64",
            sizeBytes: Math.floor((T * 3) / 4),
            toolUseId: u,
            requestId: d[1]?.requestId
          },
          ue = Date.now(),
          ne;
        try {
          ne = await Y(_, o, ...d);
        } catch (O) {
          let V = Date.now() - ue;
          throw (X(() => L({ ...w, result: ge(O, o.abortController.signal), callMs: V })), O);
        }
        let Ce = Date.now() - ue;
        return (X(() => L({ ...w, result: ye(ne, o.taskRegistry, u), callMs: Ce })), ne);
      }
      let B = { toolUseId: u, requestId: d[1]?.requestId, checkReadMs: b?.checkReadMs },
        { readReferencedFile: N, refusalText: D } = await y(),
        j = (I, T, w) =>
          L({ ...B, stage: "fill", outcome: "refused", reason: I, detail: T, fileRefPathKind: w });
      if (!P(n))
        return (
          f("mcp_drive_file_reference", "not_available"),
          j("not_available", "flag_off_at_fill"),
          { data: D(n, "not_available", {}) }
        );
      let ie =
        C === void 0 && !x
          ? void 0
          : (JBt(n) ?? (n.stillHeld?.() === !1 ? "entry_not_held" : void 0));
      if (ie !== void 0)
        return (
          f("mcp_drive_file_reference", "not_available"),
          j("not_available", ie),
          { data: D(n, "not_available", {}) }
        );
      let Z = _,
        se,
        le = C,
        Q = !1;
      if (C === void 0) {
        let I = Date.now(),
          T = await N(
            _,
            ae(o),
            "send",
            n,
            { session: o.session, signal: o.abortController.signal },
            b?.reference
          );
        if (((se = Date.now() - I), "refusal" in T)) {
          if ((j(T.refusal, T.detail, T.fileRefPathKind), T.notAnError)) return { data: T.message };
          throw new R(T.message, "file reference refused");
        }
        if ("buf" in T)
          ((Z = { ..._, [n.argument]: T.buf.toString("base64") }), (le = T.buf.length));
        else if (!P(n))
          return (
            f("mcp_drive_file_reference", "not_available"),
            j("not_available", "flag_off_at_fill"),
            { data: D(n, "not_available", {}) }
          );
        else ((Z = _), (Q = !0));
      }
      let W = Q ? void 0 : { ...B, stage: "fill", outcome: "filled", fillMs: se, sizeBytes: le },
        de = Q ? { [Ue]: "true" } : s,
        fe = Date.now(),
        ee;
      try {
        ee = await Y(
          Z,
          de === void 0 ? o : { ...o, mcpRequestMeta: { ...o.mcpRequestMeta, ...de } },
          ...d
        );
      } catch (I) {
        let T = Date.now() - fe;
        throw (
          X(() => {
            if (W === void 0) return;
            let w = ge(I, o.abortController.signal);
            if (w === "aborted" || w === "auth_failed") f("mcp_drive_file_reference", w);
            else m("mcp_drive_file_reference", w);
            L({ ...W, result: w, callMs: T });
          }),
          I
        );
      }
      let ve = Date.now() - fe;
      return (
        X(() => {
          if (W === void 0) return;
          let I = ye(ee, o.taskRegistry, u);
          if (I === "auth_failed") f("mcp_drive_file_reference", I);
          else if (I === "uploaded") g("mcp_drive_file_reference");
          L({ ...W, result: I, callMs: ve });
        }),
        ee
      );
    }),
    H.askInputPreparer !== r.askInputPreparer)
  )
    e.askInputPreparer = async (p, o, d) => {
      if (!P(n)) return oe(d).askInputPreparer?.(p, o, d);
      return (_Vr(d), r.askInputPreparer?.(p, o, d));
    };
}
function X(e) {
  try {
    e();
  } catch {}
}
function ge(e, n) {
  if (n.aborted) return "aborted";
  if (xe(e)) return "auth_failed";
  return e instanceof wv ? "error_result" : "call_failed";
}
function ye(e, n, r) {
  if (e.urlElicitationDeclined !== void 0) return "auth_failed";
  return He(n, r) ? "backgrounded" : "uploaded";
}
function xe(e) {
  if (e instanceof Yk) return !0;
  if (!(e instanceof Error)) return !1;
  if ("code" in e && e.code === "CLAUDEAI_BEARER_REJECTED") return !0;
  return e instanceof R && /^(McpError|ProtocolError) -32042$/.test(e.telemetryMessage);
}
function He(e, n) {
  return (
    n !== void 0 && Object.values(e.all()).some((r) => r.type === "mcp_task" && r.toolUseId === n)
  );
}
function L(e) {
  a("tengu_mcp_drive_file_reference_upload", {
    stage: c(e.stage),
    ...(e.outcome !== void 0 && { outcome: c(e.outcome) }),
    ...(e.reason !== void 0 && { reason: A6(e.reason) }),
    ...(e.detail !== void 0 && { detail: A6(e.detail) }),
    ...(e.fileRefPathKind !== void 0 && { fileRefPathKind: A6(e.fileRefPathKind) }),
    ...(e.result !== void 0 && { result: c(e.result) }),
    ...(e.checkReadMs !== void 0 && { checkReadMs: e.checkReadMs }),
    ...(e.fillMs !== void 0 && { fill_ms: e.fillMs }),
    ...(e.callMs !== void 0 && { callMs: e.callMs }),
    ...(e.sizeBytes !== void 0 && { size_bytes: e.sizeBytes }),
    toolUseID: _e(e.toolUseId),
    requestId: _e(e.requestId)
  });
}
function te(e, n) {
  return [n.argument, ...n.wrongArguments].some((r) => Te(e?.[r]));
}
function Te(e) {
  return typeof e === "string" && e.startsWith("sha256:");
}
var Be = /^sha256:[0-9a-f]{64}:(?:[A-Za-z]:)?\//;
function Ee(e, n, r) {
  return M.find(
    (t) =>
      t.toolName === e.toolName &&
      (r
        ? te(n, t)
        : (Te(n?.[t.argument]) ||
            t.wrongArguments.some((s) => {
              let y = n?.[s];
              return typeof y === "string" && Be.test(y);
            })) &&
          P(t))
  );
}
function z(e, n) {
  let r = Reflect.get(e, n.desktopMark) === !0,
    t = Reflect.get(e, n.desktopHostFillMark);
  if (r && t !== void 0 && t !== !1) return "conflicting";
  if (r) return "fill";
  return t === !0 ? "hostFill" : void 0;
}
function P(e) {
  return k(e.flag, !1);
}
var Ke = 1048576,
  Ve = 40,
  qe = 300000;
function yun(e, n) {
  if (typeof n !== "string" || n.length <= Ke || !M.some(P)) return e;
  return Math.max(e, Math.min(qe, Math.ceil(n.length / Ve)));
}
export {
  cqs,
  uqs,
  _He,
  r3n,
  bHe,
  GNo,
  a$,
  d_t,
  UD,
  o3n,
  XBt,
  KFr,
  Sze,
  s3n,
  JBt,
  pun,
  uRi,
  wze,
  mun,
  gun,
  QBt,
  J7e,
  VFr,
  c_t,
  hun,
  yun
};

//# sourceMappingURL=chunk-14k612dp.js.map
