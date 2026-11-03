// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { q, J } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { Nt } from "./chunk-4hww8411.js";
import { rn } from "./chunk-xc1j8sdj.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { fa, Rue, k } from "./chunk-ajtyjx88.js";
import { i } from "./chunk-cj37hmns.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { Gf } from "./chunk-qakn3b85.js";
import { iB } from "./chunk-znkwh1rm.js";
import { MQe, mGe, rDo, $4n } from "./chunk-6h7ejyet.js";
import { gUn, xDt } from "./chunk-pkean76j.js";
import { xze, THe, Pze } from "./chunk-frrn501g.js";
import { ZP, eI } from "./chunk-160x3d5g.js";
import { oRs, sRs, pEe, iRs, o9e, Ote } from "./chunk-fvxn5ew5.js";
import { fJ, Rte } from "./chunk-w3ssq3dv.js";
import { W8e, Hen, Len, HCs, bUn, HTr, dbo, SUn, wUn } from "./chunk-5tt7a3m0.js";
import { mn } from "./chunk-6hzmc7zs.js";
import { et } from "./chunk-c9re0p40.js";
import { posix as te } from "path";
var re = 20,
  P = mGe,
  K = 3600,
  ne = 2700000,
  L = 600000,
  x = {
    arg: "files",
    feature: "managed_agents_task_file_upload",
    local: "path",
    ref: "file_id",
    refWord: "id",
    maxFiles: re
  },
  D = {
    start_task: {
      words: { ...x, tool: "start_task", nothingDone: "No task was started." },
      withoutFiles: "Start the task without files.",
      offerWithoutFiles: "start the task without files",
      offerWithoutTheFiles: "start the task without the files",
      withoutThisFile: "Start the task without this file",
      offerWithoutThisFile: "start the task without this file",
      wordsArg: "task_description"
    },
    update_task: {
      words: { ...x, tool: "update_task", nothingDone: "Nothing was sent to the task." },
      withoutFiles: "Send the update without files.",
      offerWithoutFiles: "send the update without files",
      offerWithoutTheFiles: "send the update without the files",
      withoutThisFile: "Send the update without this file",
      offerWithoutThisFile: "send the update without this file",
      wordsArg: "update_instructions"
    }
  };
function U(r, e) {
  let n = J(),
    s = n ? iRs.peek(e)?.host : void 0,
    o = s?.servers.get(r.name);
  if (
    !(n
      ? s !== void 0 &&
        o !== void 0 &&
        r.config.type === "http" &&
        r.config.url === o &&
        s.heldSinceBoot(r.name)
      : Ote(r)) ||
    !k("tengu_twinkling_cosmos", !1)
  )
    return;
  return { host: s };
}
async function Zki(r, e, n, s, o, u) {
  let a = n.files;
  if (!Array.isArray(a) || a.length === 0) return {};
  let h = D[e],
    c;
  try {
    let F = U(r, u);
    if (F === void 0) return {};
    let { host: T } = F;
    c = T === void 0 ? await Y(a, h, s, o) : await z(a, h, T, s, o);
  } catch (F) {
    (l(F),
      (c = {
        error: `The files could not be attached. ${h.words.nothingDone} ${h.withoutFiles}`,
        code: "unexpected"
      }));
  }
  if ("error" in c) {
    if (c.code !== "canceled" && c.code !== "upload_canceled")
      m("managed_agents_task_file_upload", c.code);
    return { error: c.error };
  }
  return (g("managed_agents_task_file_upload"), { input: { ...n, files: c.files } });
}
var oe = 600000,
  N = "start-task-upload-before-ask",
  ie = P,
  se = 300000,
  B = new WeakMap();
function eTi(r, e, n, s, o, u, a) {
  let h = n.files;
  if (
    a === "" ||
    !Array.isArray(h) ||
    h.length === 0 ||
    !h.every((p) => mn(p) && typeof p.path === "string" && p.file_id === void 0) ||
    r.config.type !== "http" ||
    !Gf(r.config.url)
  )
    return;
  let c = U(r, u);
  if (c === void 0) return;
  let { host: F } = c,
    T = h,
    S = _(n);
  return {
    prepare: () => {
      let p = sRs(u, a, S),
        y = p && B.get(p);
      if (y !== void 0) return y;
      let w = {
        toolUseId: a,
        pathFormKey: S,
        files: [],
        uploadStartedAt: Date.now(),
        state: "uploading",
        remove: (A) => X(A, F)
      };
      oRs(u, w);
      let R = ae(w, D[e], T, F, s, o, u).then((A) => {
        if ("error" in A) return A;
        let O = w.files;
        return {
          input: { ...n, files: O },
          description: `Attaches ${T.map((ee, W) => `${Rte(String(ee.path))} as ${Rte(O[W]?.name ?? "")} (${de(O[W]?.file_id)})`).join("; ")}`,
          release: () => pEe(u, w)
        };
      });
      return (B.set(w, R), R);
    }
  };
}
async function ae(r, e, n, s, o, u, a) {
  let h = {
      mustStartWithinMs: oe,
      maxTotalBytes: s === void 0 ? ie : void 0,
      onUploaded: (T) => {
        if (r.state === "deleted") r.remove([T.file_id]);
        else r.files.push(T);
      }
    },
    c,
    F = !!i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
  if (F) ZP("tool_exec", N);
  try {
    c = s === void 0 ? await Y(n, e, o, u, h) : await z(n, e, s, o, u, h);
  } catch (T) {
    (l(T),
      (c = {
        error: `The files could not be attached. ${e.words.nothingDone} ${e.withoutFiles}`,
        code: "unexpected"
      }));
  } finally {
    if (F) eI("tool_exec", N);
  }
  if (!("error" in c) && r.state === "deleted") c = E("canceled", e);
  if ("error" in c) {
    if ((await pEe(a, r), c.code !== "canceled" && c.code !== "upload_canceled"))
      m("managed_agents_task_file_upload", c.code);
    return { error: c.error };
  }
  return (g("managed_agents_task_file_upload"), (r.state = "pending"), { ok: !0 });
}
async function X(r, e) {
  if (e === void 0) {
    await sSr(r);
    return;
  }
  await Promise.all(r.map((n) => e.delete?.(n)));
}
function de(r) {
  return r !== void 0 && o9e.test(r) ? r : "?";
}
async function tTi(r, e, n) {
  let s = U(r, e);
  if (s === void 0 || !Array.isArray(n)) return;
  let o = n.flatMap((u) => (mn(u) && typeof u.file_id === "string" ? [u.file_id] : []));
  await X(o, s.host);
}
function nTi(r, e) {
  let n = D[e];
  if (Date.now() > r + K * 1000 - se)
    return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call ${e} again to upload them afresh. ${n.words.nothingDone}`;
  let s = iB(),
    o = fJ();
  if (o !== void 0) return (o === "egress_blocked" ? v(n) : C(n)).error;
  return s ? M(n).error : void 0;
}
function rTi(r, e, n) {
  let s = HTr(n);
  if (s === void 0 || J() || !Ote(r) || !k("tengu_twinkling_cosmos", !1)) return;
  return `In this session, files the user attached to the chat are usually in ${s}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${s}/report.csv"}]. Do that rather than copying the file's text into ${D[e].wordsArg}.`;
}
function oTi(r, e, n, s, o) {
  let u = n.files;
  if (u === void 0 || u === null || (Array.isArray(u) && u.length === 0) || U(r, o) === void 0)
    return;
  let { words: a } = D[e],
    h = xDt(u, a),
    c = Array.isArray(h) ? void 0 : h,
    { files: F, ...T } = n,
    S = Array.isArray(h)
      ? { ...T, files: h.map((R, A) => ({ file_id: `file_${A}`, name: `file_${A}` })) }
      : T,
    p = gUn(S, s, { ...a, ignoreInside: a.arg });
  if (c === void 0 && p === void 0) return;
  if (c === void 0) f("managed_agents_task_file_upload", "input_schema");
  else m("managed_agents_task_file_upload", c.code);
  if (p === void 0) return c.error;
  let y = ` ${a.nothingDone}`,
    w = c === void 0 ? "" : ` ${c.error.endsWith(y) ? c.error.slice(0, -y.length) : c.error}`;
  return `Cannot call ${e} with these arguments: ${p.listed}.${w}${p.takes} ${a.nothingDone}`;
}
var V = { mustStartWithinMs: ne };
async function Y(r, e, n, s, o = V) {
  let u = xDt(r, e.words);
  if (!Array.isArray(u)) return u;
  let a = iB(),
    h = fJ();
  if (h !== void 0) return h === "egress_blocked" ? v(e) : C(e);
  if (a) return M(e);
  if (!Rue()) return Q(e);
  for (let S of u)
    try {
      await THe(S, n);
    } catch (p) {
      return (t(`[task files] rejected path: ${S} (${d(p)})`), b(S, Len(p), "here", n, e));
    }
  let c = [],
    F = Date.now() + o.mustStartWithinMs,
    T = o.maxTotalBytes === void 0 ? void 0 : { remainingBytes: o.maxTotalBytes };
  for (let S of u) {
    if (s.aborted) return E("canceled", e);
    if (Date.now() > F) return I(e);
    let p, y;
    try {
      ({ realPath: p, requiredDigest: y } = await THe(S, n));
    } catch (A) {
      return (t(`[task files] rejected path: ${S} (${d(A)})`), b(S, Len(A), "here", n, e));
    }
    let w = await oSr(p, y, s, T);
    if (!w.ok)
      return (t(`[task files] not uploaded: ${S} (${w.code})`), b(S, w.code, "here", n, e));
    let R = { file_id: w.file_id, name: w.name };
    (c.push(R), o.onUploaded?.(R));
  }
  if (s.aborted) return E("canceled", e);
  if (Date.now() > F + L) return I(e);
  return { files: c };
}
async function z(r, e, n, s, o, u = V) {
  let a = xDt(r, e.words);
  if (!Array.isArray(a)) return a;
  let h = iB(),
    c = fJ();
  if (c !== void 0) return c === "egress_blocked" ? v(e) : C(e);
  if (h) return M(e);
  let F = "elsewhere",
    T = [],
    S = Date.now() + u.mustStartWithinMs;
  for (let p of a) {
    if (o.aborted) return E("canceled", e);
    if (Date.now() > S) return I(e);
    if (n.ruleItCannotApply(s) !== void 0)
      return {
        error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${e.words.nothingDone} ${e.withoutFiles}`,
        code: "rule_not_applicable"
      };
    if (!Hen(te.basename(p)))
      return {
        error: `Cannot attach "${p}": a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a control character or a character that changes text direction. Copy or rename it and attach that. ${e.words.nothingDone}`,
        code: "name_not_plain"
      };
    let y = await n.upload(p, o);
    if (!y.ok) return b(p, y.code, F, s, e);
    if (!o9e.test(y.file_id) || !Hen(y.name)) return b(p, "bad_answer", F, s, e);
    let w = { file_id: y.file_id, name: y.name };
    (T.push(w), u.onUploaded?.(w));
  }
  if (o.aborted) return E("canceled", e);
  if (Date.now() > S + L) return I(e);
  return { files: T };
}
async function oSr(r, e, n, s) {
  let o = await xze(r);
  if (W8e.test(o)) return { ok: !1, code: "name_direction" };
  let u = await Pze(r, P);
  if (!("buf" in u)) return { ok: !1, code: u.refusal };
  if (s !== void 0) {
    if (u.buf.length > s.remainingBytes) return { ok: !1, code: "too_large_total" };
    s.remainingBytes -= u.buf.length;
  }
  if (e !== void 0 && et(u.buf) !== e) return { ok: !1, code: "path_rejected" };
  await fa();
  let a = Rue();
  if (!a) return { ok: !1, code: "no_token" };
  let h;
  try {
    let c = await rDo(
      u.buf,
      o,
      { oauthToken: a, sessionId: q(), baseUrl: rn().BASE_API_URL },
      { signal: n, expiresInSeconds: K, timeoutMs: L, retryAfterTimeout: !1 }
    );
    if (c.success) return { ok: !0, file_id: c.fileId, name: o };
    h = c.reason;
  } catch (c) {
    (t(`[task files] upload threw: ${d(c)}`, { level: "error" }), (h = "network"));
  }
  return { ok: !1, code: `upload_${h}` };
}
var G = {
    file_read: !0,
    too_large: !0,
    auth: !0,
    forbidden: !0,
    canceled: !0,
    server: !0,
    network: !0
  },
  ue = { auth: !0, forbidden: !0, not_found: !0, server: !0, network: !0 },
  hco = [
    "egress_blocked",
    "essential_traffic",
    "no_token",
    "timeout",
    "unexpected",
    ...Object.keys(ue).map((r) => `delete_${r}`)
  ],
  Z = 5000,
  j = "start_task upload cleanup timed out";
async function sSr(r) {
  if (r.length === 0) return;
  let e;
  try {
    e = await Nt(le(r), Z, j);
  } catch (n) {
    if (n instanceof Error && n.message === j) e = "timeout";
    else (l(n), (e = "unexpected"));
  }
  if (e === void 0) g("managed_agents_task_file_cleanup");
  else f("managed_agents_task_file_cleanup", e);
  return e;
}
async function le(r) {
  let e = rn().BASE_API_URL;
  try {
    MQe(e);
  } catch {
    return "egress_blocked";
  }
  if (_t()) return "essential_traffic";
  await fa();
  let n = Rue();
  if (!n) return "no_token";
  let s = { oauthToken: n, sessionId: q(), baseUrl: e },
    u = (await Promise.all(r.map((a) => $4n(a, s, { timeoutMs: Z })))).find((a) => !a.success);
  return u !== void 0 && !u.success ? `delete_${u.reason}` : void 0;
}
var yco = [
  ...Object.keys(dbo),
  ...Object.keys(G).map((r) => `upload_${r}`),
  "path_rejected",
  "no_token",
  "name_direction",
  "too_large_total"
];
function b(r, e, n, s, o) {
  let { tool: u, nothingDone: a } = o.words;
  if (n === "elsewhere" && e === "too_large")
    return {
      error: `Cannot attach "${r}": it is larger than this session's cloud environment can attach. ${a}`,
      code: e
    };
  if (SUn(e)) return wUn(r, e, P, a);
  if (n === "elsewhere" && e === "upload_auth")
    return {
      error: `The sign-in of this session's cloud environment was not accepted while uploading "${r}". ${a} ${o.withoutFiles}`,
      code: e
    };
  let h = e.startsWith("upload_") ? e.slice(7) : void 0;
  if (h !== void 0 && fe(h)) return H(r, h, o);
  switch (e) {
    case "path_rejected":
      return {
        error:
          n === "here"
            ? bUn(r, s, a)
            : `Cannot attach "${r}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${a}`,
        code: e
      };
    case "credential_name":
      return { error: HCs(r, n === "here" ? s : { isRemoteMode: !0 }, a), code: e };
    case "too_large_total":
      return {
        error: `Cannot attach "${r}": with the files before it, the files named to ${u} add up to more than ${P / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${a}`,
        code: e
      };
    case "name_direction":
      return {
        error: `Cannot attach "${r}": its name contains a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without that character, and attach that. ${a}`,
        code: e
      };
    case "no_token":
      return n === "here"
        ? Q(o)
        : {
            error: `This session's cloud environment has no sign-in to upload files with. ${a} ${o.withoutFiles}`,
            code: e
          };
    case "canceled":
      return E("canceled", o);
    case "egress_blocked":
      return v(o);
    case "essential_traffic":
      return C(o);
    case "policy_pending":
      return {
        error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${a} Try again in a moment, or ${o.offerWithoutFiles}.`,
        code: e
      };
    case "repo_rules_unread":
      return {
        error: `This session's cloud environment could not read the repository's permission rules, so the files were not attached. ${a} Retrying won't help: tell the user that .claude/settings.json or .claude/settings.local.json may have to be fixed or removed.`,
        code: e
      };
    case "container_too_old":
      return {
        error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${a} ${o.withoutFiles}`,
        code: e
      };
    case "no_answer":
      return { ...H(r, "network", o), code: e };
    case "no_container":
    case "container_unreachable":
      return {
        error: `This session's cloud environment could not be reached, so the files were not attached. ${a} Try again, or ${o.offerWithoutFiles}.`,
        code: e
      };
    default:
      return {
        error: `The files could not be attached. ${a} ${o.withoutFiles}`,
        code: "unexpected"
      };
  }
}
function fe(r) {
  return Object.hasOwn(G, r);
}
function I(r) {
  return {
    error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${r.words.nothingDone} Attach fewer or smaller files, or ${r.offerWithoutFiles}.`,
    code: "uploads_too_slow"
  };
}
function C(r) {
  return {
    error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${r.words.nothingDone} ${r.withoutFiles}`,
    code: "essential_traffic"
  };
}
function M(r) {
  return {
    error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${r.words.nothingDone} Try again in a minute; if it is refused again, tell the user and offer to ${r.offerWithoutTheFiles}.`,
    code: "policy_pending"
  };
}
function v(r) {
  return {
    error: `Uploading files to Anthropic is not available in this configuration. ${r.words.nothingDone} ${r.withoutFiles}`,
    code: "egress_blocked"
  };
}
function Q(r) {
  return {
    error: `Attaching files needs a claude.ai sign-in (run /login). ${r.words.nothingDone}`,
    code: "no_token"
  };
}
function E(r, e) {
  return { error: `Attaching files was interrupted. ${e.words.nothingDone}`, code: r };
}
function H(r, e, n) {
  let s = `upload_${e}`,
    { nothingDone: o } = n.words;
  switch (e) {
    case "auth":
      return {
        error: `The session's sign-in was not accepted while uploading "${r}". The person may need to sign in again, or restart the session. ${o}`,
        code: s
      };
    case "forbidden":
      return {
        error: `This session's sign-in may not upload files, so "${r}" was not attached. ${o} ${n.withoutFiles}`,
        code: s
      };
    case "too_large":
      return { error: `The Files API refused "${r}" as too large. ${o}`, code: s };
    case "canceled":
      return E(s, n);
    case "server":
      return {
        error: `The Files API did not accept "${r}". ${o} ${n.withoutThisFile}, or tell the user.`,
        code: s
      };
    case "file_read":
    case "network":
      return {
        error: `The upload of "${r}" did not complete. ${o} Try again, or ${n.offerWithoutThisFile}.`,
        code: s
      };
  }
}
export { Zki, eTi, tTi, nTi, rTi, oTi, oSr, hco, sSr, yco };

//# sourceMappingURL=chunk-23vy5pjb.js.map
