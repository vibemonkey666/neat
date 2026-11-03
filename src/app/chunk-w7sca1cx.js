// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { is } from "./chunk-2qx8pe6s.js";
import { L } from "./chunk-wrtp8qz8.js";
import { m } from "./chunk-brszmkb3.js";
import { _, t } from "./chunk-4kxznmzw.js";
import { Vg } from "./chunk-a16y5hcz.js";
import { Na } from "./chunk-ddpw2j06.js";
import { i } from "./chunk-cj37hmns.js";
import { O } from "./chunk-19xvg81r.js";
import { Uu, Nc } from "./chunk-4nzy53ma.js";
import { fe } from "./chunk-xe386mry.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Ut } from "./chunk-ajtyjx88.js";
import { cA } from "./chunk-5rw2zfa0.js";
import { dn } from "./chunk-9z5ybxhe.js";
import { lc } from "./chunk-wr0p4ndg.js";
import {
  Lt,
  Bg,
  kNe,
  je,
  Jt,
  LRe,
  al,
  xn,
  wH,
  rB,
  s5r,
  Kl,
  jz,
  f_,
  qSn
} from "./chunk-r1dvrqha.js";
import { fc } from "./chunk-vchq4g74.js";
import { Z } from "./chunk-p27rr8yn.js";
import { two, jAr, Ag } from "./chunk-2nwr73hs.js";
import { $Y, kU, K1o, Qpn, emn, V1o } from "./chunk-hp871ge6.js";
import { du } from "./chunk-1vdj04pp.js";
import { Dce, vwt, ny } from "./chunk-6dwr3g2n.js";
import { ip, xw } from "./chunk-nvjx6a4x.js";
import { IT } from "./chunk-v3dqhn7m.js";
import { Ct, vGt, dz, $f, rtt, zE, tc } from "./chunk-khq9hq2s.js";
import { Ih, pb, sh, ae } from "./chunk-ar6ynjt8.js";
import { VZt, fCs } from "./chunk-ft3tfmt7.js";
import { u1, _tn } from "./chunk-322wstk9.js";
import { E4, Fv, kOe, h3, Fft } from "./chunk-2mvh88ym.js";
import { T7, k$ } from "./chunk-fh50nzzj.js";
import { KOt, r3, GW, rJ, t1, Aae, Ip, AT, xF } from "./chunk-hkkvy507.js";
import { mAe } from "./chunk-mb8tf9mz.js";
import { p$ } from "./chunk-r5xsp8d0.js";
import { WW, WOt } from "./chunk-8xk8sdq7.js";
import { bN, MIe } from "./chunk-w40awxqs.js";
import { pen, CT, rEe } from "./chunk-p6azhqzg.js";
import { TDt, S_o, w_o, v_o, IA, Cen, Ren } from "./chunk-3fa21dzg.js";
import { NZt, SP, Tg, VBe, Jve } from "./chunk-2zzds0nf.js";
import { _4s } from "./chunk-f6febadb.js";
import { z4, aG } from "./chunk-j0tbz6ra.js";
import { LUe } from "./chunk-twf5mfyf.js";
import { J6 } from "./chunk-jc2m6x50.js";
import { i1 } from "./chunk-4jv79ccn.js";
import { Yc } from "./chunk-9v1g0mex.js";
import { qn } from "./chunk-0ex22bw7.js";
import { Mgn } from "./chunk-6jn0brsm.js";
import { H } from "./chunk-p8tprgqa.js";
function k() {
  return Ut()
    ? "bg"
    : fc()
      ? "teammate"
      : p$()
        ? "remote"
        : Nc()
          ? "desktop"
          : Uu() === "claude-vscode"
            ? "vscode"
            : null;
}
function qao(e, n, r) {
  let o = Z();
  if (
    n.agentId !== void 0 ||
    !xF(n).hasInteractiveUI ||
    o.accountEpoch !== r.account ||
    o.conversationEpoch !== r.conversation
  )
    return;
  o.deferredSurface.set(e.slug, { slug: e.slug, url: e.url });
}
function Yao(e, n) {
  let r = Z(),
    o = r.deferredSurface.get(n);
  if (o === void 0) return;
  if (r.remoteControlSkippedSlugs.has(n) && mAe(e.options.messageClientPlatform)) return;
  if ((r.deferredSurface.delete(n), Udt(e, !0, o, !1) === "auto_open_skipped_remote_control"))
    r.deferredSurface.set(n, o);
}
function Udt(e, n, r, o, s) {
  if (!n) return null;
  let u = two(),
    a = k(),
    l = mAe(e.options.messageClientPlatform),
    d = Z(),
    p =
      o && !d.remoteControlSkippedSlugs.has(r.slug)
        ? "auto_open_skipped_redeploy"
        : a !== null
          ? `auto_open_skipped_${a}`
          : l
            ? "auto_open_skipped_remote_control"
            : is(i.CLAUDE_CODE_ARTIFACT_AUTO_OPEN)
              ? "auto_open_skipped_env"
              : null;
  if (p !== null) {
    if (p === "auto_open_skipped_remote_control") d.remoteControlSkippedSlugs.add(r.slug);
    return (
      jAr("frame_surfaced", { slug: r.slug, via: u, mode: p, credentials: e.credentials }),
      p
    );
  }
  d.remoteControlSkippedSlugs.delete(r.slug);
  let g = r.url;
  try {
    let c = new URL(r.url);
    (c.searchParams.set("via", "auto_preview"), (g = c.toString()));
  } catch {}
  return (
    Mgn(g).then((c) => {
      if (!c.ok) t(`[artifact] auto-open failed (${c.reason}): ${c.detail ?? ""}`);
      (s?.(c.ok),
        jAr("frame_surfaced", {
          slug: r.slug,
          via: u,
          mode: c.ok ? "auto_open_ok" : `auto_open_failed_${c.reason}`,
          credentials: e.credentials
        }));
    }),
    null
  );
}
import { join as T } from "path";
var E = null;
function Wys(e, n) {
  return e.getAppState().frameUrls[n];
}
function e3e(e, n) {
  return e
    ? { type: "safetyCheck", reason: n, classifierApprovable: !1 }
    : { type: "other", reason: n };
}
function Xg(e, n) {
  let r = jz(
    Ct(e.slug)?.title ||
      aG(n.getAppState().frameUrls).find(([, o]) => o.title && al(o.url) === e.slug)?.[1].title
  );
  return { url: xn(e), ...(r && { title: r }) };
}
function Xao(e, n, r, { mcpPublished: o = !1 } = {}) {
  let s = `${z4}${n.slug}`,
    u = s,
    a = !1,
    l = !1,
    d;
  if (
    (e.setAppState((f) => {
      let [p, g] = Object.entries(f.frameUrls).find(([, h]) => al(h.url) === n.slug) ?? [];
      if (
        ((a = p !== void 0 && g?.dismissed !== !0),
        (u = p !== void 0 && p !== s ? p : s),
        (l = f.frameOpenFailedPath === u),
        o && p !== void 0 && p !== s && g !== void 0)
      ) {
        let { [p]: h, ...R } = f.frameUrls,
          { dismissed: J, ...v } = g;
        return ((d = { ...R, [p]: { ...v, updatedAt: Date.now() } }), { ...f, frameUrls: d });
      }
      if (p !== void 0 && g?.dismissed === !0) {
        let { dismissed: h, ...R } = g;
        return { ...f, frameUrls: { ...f.frameUrls, [p]: R } };
      }
      if (a && f.frameUrls[s] === void 0) return f;
      let { [s]: c, ...w } = f.frameUrls;
      return (
        (d = {
          ...w,
          [s]: {
            url: xn(n),
            updatedAt: Date.now(),
            ...((r ?? c?.title) !== void 0 && { title: r ?? c?.title }),
            ...((o || c?.mcpPublished === !0) && { mcpPublished: !0 }),
            ...((o || c?.mcpPublishedHere === !0) && { mcpPublishedHere: !0 })
          }
        }),
        { ...f, frameUrls: d }
      );
    }),
    o && d !== void 0)
  )
    i1(d);
  return { rowKey: u, alreadyShown: a, lastOpenFailed: l };
}
function F(e, n) {
  LUe(n, { updateAppState: e.setAppState, context: e });
}
function EXt(e, n, r) {
  e.setAppState((o) => {
    if (r) return o.frameOpenFailedPath === n ? { ...o, frameOpenFailedPath: null } : o;
    if (o.frameOpenFailedPath === n) return o;
    return { ...o, frameOpenFailedPath: n, frameOpenFailedSeen: !1 };
  });
}
function Bdt(e, n) {
  return tc(e) && GW(e) && !t1(e)
    ? " (yours; a co-writer has also published to it)"
    : n === "files" && tc(e) && rJ(e)
      ? " (yours; its files come from an Artifact type its publisher wrote)"
      : $f(e);
}
function x_r(e, n) {
  return tc(e) && GW(e) && !t1(e)
    ? " [ownership: yours, co-written: a non-owner has also published to it]"
    : n === "files" && tc(e) && rJ(e)
      ? qSn
      : `${zE(e)}${dz(e)}`;
}
function I(e) {
  return _([e.path, e.from.slug, e.from.path, e.from.ver ?? ""]);
}
function Jao(e) {
  return L(e.map(I)).sort().join(`
`);
}
function P_r(e, n) {
  return (e ?? "") === Jao(n);
}
function jdt(e, n) {
  let { mode: r, modeBeforeRewrite: o } = ae(e);
  if (r === "auto" || o === "auto") return !1;
  return T7(
    e.getAppState(),
    r === "plan" ? "artifactAssetUploadHumanConsentSlugs" : "artifactAssetUploadConsentSlugs",
    n
  );
}
function I_r(e, n, r, o, s, u, a = !1) {
  let l = s && !t1(Ct(r.slug));
  if (
    WW(n) &&
    (l || a) &&
    o &&
    !r3(e, n) &&
    !MIe(n, r, tc(Ct(r.slug))) &&
    (Ih(n) || pb(n) || bN(n))
  )
    throw (
      m("artifact_cowritten_consent", "refused_unasked", {
        assets: u === "assets",
        ...(!l && { from_type: !0 })
      }),
      new je(
        l
          ? `a co-writer has published to this artifact, so its ${u} are someone else's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`
          : `this artifact was created from an Artifact type, so its ${u} are the type publisher's content \u2014 nothing was returned; retry the same action so it is checked again (the user is asked once where a prompt can reach them)`,
        `${u === "files" ? "file" : "asset"}_${l ? "cowritten" : "from_type"}_unasked`
      )
    );
}
function kXt(e, n, r) {
  return (
    m("artifact_outside_org_consent", "refused_unasked", { assets: n === "asset_copy" }),
    new je(WOt(e, !0, n === "file_copy" ? { retryUrl: r } : void 0), `${n}_outside_org_unasked`)
  );
}
function ADn(e, n, r) {
  if (e === Dce) N(n, r);
}
function N(e, n) {
  throw (
    m("artifact_outside_org_consent", "refused_unasked", { assets: n !== "files" }),
    new je(WOt(e), `${n === "files" ? "file" : "asset"}_outside_org_unasked`)
  );
}
function t3e(e) {
  let { assetId: n, outDir: r } = Aae(e);
  if (n === void 0 || !Bg.test(n)) return;
  let o,
    s = !1;
  try {
    if (r === void 0 || r === "") {
      let { url: u } = e,
        a = typeof u === "string" ? Jt(u) : null,
        l = a !== null ? J6(a.slug) : null;
      ((s = l !== null), (o = l ?? fe()));
    } else o = ut(r);
  } catch {
    return;
  }
  return { stem: T(o, n), ...(s && { defaultDir: !0 }) };
}
function GR(e, n = "", r = "url") {
  if (LRe(e) === void 0) return;
  let o = Jt(e),
    s = o !== null ? ` (${xn(o)})` : "";
  return {
    result: !1,
    message: `\`${r}\` names a path inside the artifact \u2014 pass the artifact's own URL${s} as \`${r}\`${n}.`,
    errorCode: 4
  };
}
function e4(e) {
  let n = (d) => {
      let f = e[d];
      return typeof f === "string" ? f : void 0;
    },
    r = e.data,
    o = r !== null && typeof r === "object" && !Array.isArray(r) ? r : void 0,
    { replace_all: s, if_version: u, query: a } = e,
    l = a !== null && typeof a === "object" && !Array.isArray(a) ? a : void 0;
  return {
    dbOp: n("db_op"),
    collection: n("collection"),
    docId: n("doc_id"),
    data: o,
    query: l,
    outDir: n("out_dir"),
    filePath: n("file_path"),
    strReplace: {
      field: n("field"),
      oldStr: n("old_str"),
      newStr: n("new_str"),
      replaceAll: s === void 0 ? void 0 : cA(s) === !0
    },
    ifVersion: O_r(u) ? u : void 0
  };
}
function O_r(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 1;
}
var Qao = ["set", "update", Fv, "delete"];
function q6(e) {
  let n = Zao(e);
  return n === ip ? [] : n;
}
function Zao(e) {
  let n = xw(e.writes);
  if (n === void 0 || n === ip) return n ?? [];
  return n.map((r) => {
    let o = (g) => (r !== null && typeof r === "object" ? r[g] : void 0),
      s = {
        db_op: o("op"),
        collection: o("collection"),
        doc_id: o("doc_id"),
        data: o("data"),
        file_path: o("file_path"),
        if_version: o("if_version")
      },
      { dbOp: u, collection: a, docId: l, data: d, filePath: f, ifVersion: p } = e4(s);
    return {
      op: u,
      collection: a,
      docId: l,
      data: d,
      filePath: f,
      ifVersion: p,
      ifVersionGiven: s.if_version !== void 0
    };
  });
}
function U(e) {
  return e.db_op === IA ? q6(e).map((n) => n.ifVersion) : [];
}
function elo(e) {
  return e4(e).ifVersion !== void 0 || U(e).some((n) => n !== void 0);
}
function M_r(e) {
  return typeof e === "object" && e !== null && e.action === "write_db" && e.db_op === IA;
}
function TXt(e) {
  return s5r(Kl(ny(e.ruleValue.ruleContent ?? "", { max: 1024 }).replace(f_, " ")));
}
function Ek(e) {
  let n = e?.type_url;
  return typeof n === "string" ? n : void 0;
}
function Wdt(e) {
  let n = e?.type;
  return typeof n === "string" ? n : void 0;
}
function D_r(e) {
  return `type_url: not an Artifact type's link: ${e} \u2014 pass a ${kNe()} link from a list_types result`;
}
function H_r(e) {
  return e.auto_open === "after_first_write" ? "after_first_write" : "at_create";
}
function iIe(e) {
  let { outDir: n, collection: r } = e4(e);
  if (n === void 0) return { kind: "inline" };
  let o;
  try {
    o = ut(n === "" ? fe() : n);
  } catch {
    return { kind: "unresolvable" };
  }
  let s = r !== void 0 && E4.test(r) ? T(o, ...r.split("/").map(tlo)) : o;
  return { kind: "dir", outDir: o, dir: s };
}
function tlo(e) {
  let n = e.replaceAll("~", "@"),
    r = O();
  return r === "windows" || r === "wsl" ? n.replaceAll(":", "%3A") : n;
}
function nlo(e, n) {
  return `${e}\x00${dn(n)}`;
}
var Gys = {
  changed:
    "file_path no longer names the file that was approved (it moved, was replaced, or was rewritten) \u2014 retry the write so it is checked again",
  via_link:
    "file_path reaches its file through a symbolic link that resolves somewhere this session may not read without asking \u2014 pass the resolved path, or copy the file under the working directory first",
  hard_link:
    "file_path is one of several hard links to its file, and this approval did not examine that \u2014 copy the file to a fresh path under the working directory and pass the copy",
  read_denied:
    "reading where file_path resolves is blocked by a Read permission rule \u2014 the write was not attempted",
  no_identity: Ren,
  not_a_file: Cen,
  size: `file_path is empty or larger than ${Fft} bytes \u2014 write_db reads at most that much JSON, and the document must serialize to ${h3} bytes or fewer`
};
function Gdt(e) {
  return (
    typeof e === "object" && e !== null && e.action === "read_db" && typeof e.out_dir === "string"
  );
}
function TIt(e) {
  if (typeof e !== "object" || e === null || e.action !== "write_db") return !1;
  if (typeof e.file_path === "string") return !0;
  return q6(e).some((n) => n.filePath !== void 0);
}
var rlo = 3000;
function L_r(e) {
  try {
    return Buffer.byteLength(_(e), "utf8");
  } catch {
    return null;
  }
}
var j = 1024,
  zys = 49152,
  B = /data:[a-z0-9.+-]+\/[a-z0-9.+-]+(?:;[a-z0-9=.+-]+)*;base64,[A-Za-z0-9+/_-]{1000,}/gi,
  C = /^[A-Za-z0-9+/_-]+$/,
  P = /^[A-Za-z0-9+/_-]+={0,2}$/,
  M = new Set([60, 64, 76]);
function V(e) {
  let n = e.trim(),
    r = n.indexOf(`
`),
    o = n.slice(r + 1, r + 513);
  if (!/[A-Z]/.test(o) || !/[a-z]/.test(o) || !/[0-9]/.test(o)) return !1;
  if (r === -1) return P.test(n);
  let s = Vg(n.slice(0, r), "\r");
  if (!C.test(s)) return !1;
  let u = n.slice(r + 1).replaceAll(
      `\r
`,
      `
`
    ).split(`
`),
    a = u.pop() ?? "",
    l = u[0]?.length ?? s.length;
  return (
    M.has(l) &&
    s.length <= l &&
    a.length <= l &&
    P.test(a) &&
    u.every((d) => d.length === l && C.test(d))
  );
}
function G(e) {
  if (V(e)) return e.length;
  let n = 0;
  for (let r of e.matchAll(B)) n += r[0].length;
  return n;
}
function Kys(e) {
  let n = 0,
    r = 0,
    o = [...e];
  while (o.length > 0) {
    let s = o.pop();
    if (typeof s === "string") {
      let u = s.length >= j ? G(s) : 0;
      if (u > 0) (n++, (r += u));
    } else if (typeof s === "object" && s !== null) for (let u of Object.values(s)) o.push(u);
  }
  return { strings: n, chars: r };
}
function Vys(e, n, r, o, s, u) {
  let a = u1(e, r),
    l = s.get(e),
    d = `${l ?? "viewer"}${!a && u.has(e) ? ", outside your organization" : ""} ${e.slice(0, 8)}`,
    f =
      n === "assistant"
        ? a
          ? "Claude (via the user)"
          : `Claude (via ${d})`
        : n !== void 0 && n !== ""
          ? `viewer ${e.slice(0, 8)} (unverified lane)`
          : a
            ? l !== void 0
              ? `the user (${l})`
              : "the user"
            : d;
  return o ? `${f}, posted by the artifact` : f;
}
var qys = 5,
  olo = 10;
function N_r(e, n) {
  let r = e.length > n ? ` and ${e.length - n} more` : "";
  return `${e.slice(0, n).join(", ")}${r}`;
}
var b = (e) => e.outsideAsk || e.flaggedOutside;
function CDn(e) {
  let [n] = e;
  if (e.length === 1 && n !== void 0) {
    let a = [];
    if (b(n))
      a.push(
        n.resolvesOutside
          ? "reaches, through a symbolic link, a file outside the folders this session can read"
          : "is outside the folders this session can read"
      );
    if (n.linkNote !== "" && !b(n))
      a.push("is a hard link to a file that may also live elsewhere on this machine");
    return a.length === 0 ? "" : ` The local file "${lc(n.askPath, 256)}" ${a.join(" and ")}.`;
  }
  let r = (a) =>
      ` (${N_r(
        a.map((l) => `"${lc(l.askPath, 256)}"`),
        olo
      )})`,
    o = [
      {
        group: e.filter((a) => b(a) && !a.resolvesOutside),
        one: "is outside the folders this session can read",
        many: "are outside the folders this session can read"
      },
      {
        group: e.filter((a) => a.resolvesOutside),
        one: "reaches, through a symbolic link, a file outside the folders this session can read",
        many: "reach, through symbolic links, files outside the folders this session can read"
      },
      {
        group: e.filter((a) => a.linkNote !== "" && !b(a)),
        one: "is a hard link to a file that may also live elsewhere on this machine",
        many: "are hard links to files that may also live elsewhere on this machine"
      }
    ].filter((a) => a.group.length > 0),
    [s] = o;
  if (s === void 0) return "";
  if (o.length === 1 && s.group.length === e.length)
    return ` ${e.length === 2 ? "Both" : `All ${e.length}`} local files being copied ${s.many}${r(s.group)}.`;
  let u = o.map((a) => `${a.group.length} ${a.group.length === 1 ? a.one : a.many}${r(a.group)}`);
  return ` Of the ${e.length} local files being copied, ${u.join("; ")}.`;
}
function qpe(e) {
  if (e === void 0) return "";
  try {
    let n = _(e);
    return `${ny(n, { max: 300 }).replace(f_, " ")}${RDn(n, 300)}`;
  } catch {
    return "(unserializable payload)";
  }
}
function RDn(e, n) {
  return Array.from(e.slice(0, 2 * n + 2)).length <= n
    ? ""
    : `\u2026 [truncated \u2014 ${Buffer.byteLength(e, "utf8")} bytes total]`;
}
function Yys({ field: e, oldStr: n, newStr: r, replaceAll: o }) {
  let s = (u, a) => {
    if (u === void 0) return "(missing)";
    let l = _(u);
    return `${ny(l, { max: a }).replace(f_, " ").replace(wH, "'").replace(rB, "'")}${RDn(l, a)}`;
  };
  return `field ${s(e, kOe)}: replace ${o === !0 ? "every " : ""}${s(n, 200)} with ${s(r, 200)}`;
}
function slo(e) {
  return e !== null && typeof e === "object" && e.live === !1 && Object.keys(e).length === 1;
}
var D = new Set([...Qpn, ...emn]);
function S(e, n) {
  if (typeof n === "string") return D.has(kU(n));
  return typeof e === "string" && D.has($Y(e) ?? "");
}
function ilo(e) {
  if (typeof e !== "object" || e === null) return 0;
  let { file_path: n, files: r } = e,
    o = S(n) ? 1 : 0,
    s = xw(r);
  if (s === ip) return ip;
  if (s !== void 0)
    for (let u of s) o += S(typeof u === "string" ? u : u?.path, u?.contentType) ? 1 : 0;
  else if (r !== null && typeof r === "object")
    for (let [u, a] of Object.entries(r)) {
      if (a === null || slo(a)) continue;
      let l = typeof a === "object" && typeof a.artifact === "string" ? a.path : void 0;
      o += (l !== void 0 ? S(u) || S(l) : S(u, a?.contentType)) ? 1 : 0;
    }
  return o;
}
var W = new Set([...V1o, ...K1o]);
function y(e, n, r) {
  if (typeof e !== "string") return !1;
  let o = $Y(e);
  if (o === void 0 || !r.has(kU(o))) return !1;
  return n === void 0 || (typeof n === "string" && r.has(kU(n)));
}
function Y(e, n, r) {
  return y(e, void 0, r) && y(n, void 0, r);
}
function A(e) {
  return e.live !== void 0 || e.reseed !== void 0;
}
function Xys(e) {
  return e !== null && typeof e === "object" && Object.hasOwn(e, "mcp");
}
function alo(e, n) {
  if (typeof e !== "object" || e === null) return !1;
  let r = n.documents ? W : V1o,
    { file_path: o, files: s } = e;
  if (A(e) || !y(o, void 0, r)) return !1;
  if (s === void 0) return !0;
  let u = xw(s);
  if (u === ip) return !1;
  if (u !== void 0)
    return u.every((a) =>
      typeof a === "string"
        ? y(a, void 0, r)
        : a !== null && typeof a === "object" && !A(a) && y(a.path, a.contentType, r)
    );
  if (s === null || typeof s !== "object") return !1;
  return Object.entries(s).every(([a, l]) => {
    if (l === null) return !0;
    if (typeof l === "string") return y(a, void 0, r);
    if (typeof l !== "object" || Array.isArray(l)) return !1;
    if (A(l)) return !1;
    let d = l;
    if (typeof d.from === "string" && d.artifact !== void 0) return !1;
    if (typeof d.artifact === "string") return Y(a, l.path, r);
    return y(a, l.contentType, r);
  });
}
function llo() {
  return Jve(SP().shape.action, "read_file");
}
function dlo() {
  return Jve(SP().shape.action, "delete");
}
function zdt() {
  return Jve(SP().shape.action, "open");
}
function AIt() {
  return Jve(SP().shape.action, "pin");
}
function AXt() {
  return Jve(SP().shape.action, "share");
}
function clo() {
  return "version" in SP().shape;
}
function Jys(e, n) {
  if (e?.title === void 0) return;
  if (n === void 0) return e.title;
  let r = al(n);
  return r !== null && al(e.url) === r ? e.title : void 0;
}
var Qys = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);
function n3e(e) {
  if (ae(e).mode === "plan") return "plan";
  if (bN(e)) return "cowork_no_surface";
  if (sh(e)) return "no_surface";
  return null;
}
function x(e, n, r) {
  let o = r
      ? "Copying from this artifact is"
      : e.ruleValue.toolName === qn
        ? "Artifact reads are"
        : "Reading this artifact is",
    s = n === "" ? "" : ` \u2014 ${n}`;
  return `${o} blocked by ${rEe(e)}${s}`;
}
function hP(e, n = "", r = !1) {
  return { behavior: "deny", message: `${x(e, n, r)}.`, decisionReason: { type: "rule", rule: e } };
}
function t4(e, n, r, o, s) {
  let u = CT(ae(e), n, r, "deny", s);
  return u === null ? void 0 : new je(x(u, o, s.copySource === !0), "read_denied");
}
function Xee(e) {
  return e.ruleValue.toolName === qn
    ? ` (your ${qn} ask rule covers artifact reads)`
    : ` (your ${e.ruleValue.toolName} ask rule covers this url)`;
}
function CXt(e) {
  if (!VBe() || e === null || e === void 0) return !1;
  if (e.action !== void 0 && e.action !== "publish") return !1;
  let n = vwt(e);
  if (n !== void 0) return H(n) && n.room !== void 0;
  let r = Ek(e);
  if (r !== void 0) {
    let u = Jt(r);
    return u !== null && KOt(u.slug);
  }
  let o = typeof e.url === "string" ? Jt(e.url) : null,
    s;
  try {
    s = o !== null ? Ct(o.slug) : typeof e.file_path === "string" ? vGt(ut(e.file_path)) : void 0;
  } catch {
    s = void 0;
  }
  return s?.capabilities?.room !== void 0;
}
var $_r = { threadIds: new Set(), commentIds: new Set() };
function ulo(e) {
  return { url: Ag(e.slug), release: e.current };
}
function uL(e) {
  let n = typeof e === "string" ? Jt(e) : null;
  if (!n) throw new je(`not an artifact URL: ${String(e)}`, "invalid_url");
  return n;
}
function xDn(e, n, r, o) {
  if (typeof r !== "object" || r === null || !M_r(r)) return;
  let { writes: s, ...u } = r;
  for (let [a, l] of q6(r).entries()) {
    let d = pen(
      n,
      e,
      {
        ...u,
        db_op: l.op,
        collection: l.collection,
        doc_id: l.docId,
        ...(l.data !== void 0 && { data: l.data }),
        ...(l.filePath !== void 0 && { file_path: l.filePath })
      },
      o
    );
    if (d) return { index: a, rule: d };
  }
  return;
}
function F_r(e, n, r, o) {
  if (typeof r !== "object" || r === null || r.db_op !== Fv) return;
  return pen(n, e, { ...r, db_op: "update" }, o) ?? void 0;
}
function hN(e) {
  return e.ruleValue.ruleContent === void 0
    ? e.ruleValue.toolName
    : `${e.ruleValue.toolName}(${TXt(e)})`;
}
function PDn(e, n, r) {
  let o = xDn(e, n, r, "deny");
  return o === void 0
    ? void 0
    : {
        behavior: "deny",
        message: `Permission to use ${Lt} has been denied by your rule ${hN(o.rule)} (writes[${o.index}] of this batch matches it), so nothing in the batch was written.`,
        decisionReason: { type: "rule", rule: o.rule }
      };
}
function Zys(e, n, r) {
  let o = F_r(e, n, r, "deny");
  return o === void 0
    ? void 0
    : {
        behavior: "deny",
        message: `Permission to use ${Lt} has been denied by your rule ${hN(o)} (a str_replace is an update of one field), so nothing was written.`,
        decisionReason: { type: "rule", rule: o }
      };
}
function e_s(e, n, r, o) {
  let s = xDn(e, r, o, "ask");
  if (s === void 0 || typeof o !== "object" || o === null) return;
  let u = Reflect.get(o, "url"),
    a = typeof u === "string" ? Jt(u) : null;
  return {
    behavior: "ask",
    message: `Claude wants to write a batch to this artifact's database, and writes[${s.index}] matches your ask rule ${hN(s.rule)} \u2014 the full permission check could not complete, so approving covers only this call.`,
    updatedInput: { ...o, [Ip]: !1, [AT]: a === null ? null : Xg(a, n) },
    suppressAlwaysAllowRule: !0,
    decisionReason: { type: "rule", rule: s.rule }
  };
}
function vT(e, n) {
  if (!rtt(Ct(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${xn(e)}: ${TDt}. ${n}; tell the user.`,
    decisionReason: { type: "other", reason: S_o }
  };
}
function flo(e, n) {
  let r = vT(e, n);
  if (r !== null) return r;
  if (!k$(Ct(e.slug))) return null;
  return {
    behavior: "deny",
    message: `${xn(e)}: ${w_o}. ${n}; tell the user.`,
    decisionReason: { type: "other", reason: v_o }
  };
}
function RXt(e, n, r) {
  let o = e === "watch" && Tg();
  if (o && n.path !== void 0 && E?.livePathFrom(n) === void 0)
    return { result: !1, message: E?.LIVE_PATH_INVALID ?? "invalid path", errorCode: 8 };
  let s = Object.keys(n).filter(
    (l) =>
      l !== "action" &&
      l !== "url" &&
      !(e === "read_page_data" && l === "schema") &&
      !(o && l === "path") &&
      n[l] !== void 0
  );
  if (s.length > 0)
    return {
      result: !1,
      message: `action "${e}" takes only ${e === "read_page_data" ? "`url` and `schema`" : o ? "`url` (and `path`)" : "`url`"} \u2014 remove ${s.join(", ")}.`,
      errorCode: 8
    };
  if (e === "read_page_data") {
    let l = n.schema,
      d = Z().frozenReadPageDataSchemaNames;
    if (l === void 0)
      return {
        result: !1,
        message: `action "read_page_data" requires \`schema\` \u2014 the registered interaction schema to validate against${d?.size ? ` (e.g. "${[...d][0]}")` : ""}.`,
        errorCode: 7
      };
    if (!NZt(l))
      return {
        result: !1,
        message: `interaction schema "${ny(l)}" is not available in this session. Available schemas: ${[...(d ?? [])].join(", ") || "(none)"}.`,
        errorCode: 8
      };
    let f = VZt(l);
    if (!f.ok)
      return {
        result: !1,
        message:
          f.reason === "unknown"
            ? `unknown interaction schema "${l}" \u2014 registered schemas: ${fCs().join(", ") || "(none)"}.`
            : `interaction schema "${l}" failed validation in this build \u2014 report this; nothing can be read against it.`,
        errorCode: 8
      };
  }
  if (r === void 0) {
    if (e === "status") return { result: !0 };
    if (e === "verify") return { result: !0 };
    return {
      result: !1,
      message: `action "${e}" requires \`url\` \u2014 the artifact's claude.ai URL (find it with action: "list" or action: "status").`,
      errorCode: 7
    };
  }
  let u = GR(r);
  if (u) return u;
  let a = IT(r);
  if (!a.ok) return { result: !1, message: a.message, errorCode: a.errorCode };
  return { result: !0 };
}
_4s({
  addOpenedFrameRow: Xao,
  forgetArtifactDeletedThroughMcp: F,
  markFrameOpenOutcome: EXt,
  derivePublishContext: xF,
  surfacePublishedArtifact: Udt
});
var Kdt = 64,
  z = 15000,
  K = 65536;
async function t_s(e, n, r, o) {
  let s = Z(),
    u = s.accountEpoch,
    a = s.profileIdsForgets.get(e) ?? 0,
    l;
  try {
    l = await du.postRelayBound(
      `/api/frame/user/profiles/${encodeURIComponent(e)}`,
      { ids: n },
      {
        refreshOAuth: !0,
        credentials: o,
        headers: Yc(),
        timeout: z,
        maxContentLength: K,
        signal: r
      }
    );
  } catch (c) {
    if (Na(c)) throw c;
    return { ok: !1 };
  }
  if (!l.ok) return { ok: !1 };
  let d = () => Z() === s && s.accountEpoch === u && (s.profileIdsForgets.get(e) ?? 0) === a;
  if (!l.fromFrame || l.status < 200 || l.status >= 300) {
    if (l.fromFrame && d() && l.status === 403 && H(l.data) && l.data.error === "not_declared")
      s.profileIdsServed.set(e, !1);
    return { ok: !1, status: l.status };
  }
  let f = H(l.data) ? l.data.profiles : void 0;
  if (!H(f)) return { ok: !1, status: l.status };
  let p = new Set(n),
    g = {};
  for (let [c, w] of Object.entries(f)) {
    if (!p.has(c)) continue;
    let h = plo(w);
    if (h.name !== void 0 || h.guest === !0) g[c] = h;
  }
  if (d())
    (s.profileIdsServed.set(e, !0), Q(e, { ...Object.fromEntries(n.map((c) => [c, {}])), ...g }));
  return { ok: !0, profiles: g };
}
function plo(e) {
  if (!H(e)) return {};
  let n = _tn(e.name);
  return { ...(n !== void 0 && { name: n }), ...(e.guest === !0 && { guest: !0 }) };
}
var q = 512;
function X(e, n) {
  return `${e}\x00${n}`;
}
function Q(e, n) {
  let r = Z().profileNames;
  for (let [o, s] of Object.entries(n)) {
    let u = X(e, o);
    (r.delete(u), r.set(u, s.name === void 0 ? { ...s, at: Date.now() } : s));
  }
  while (r.size > q) {
    let o = r.keys().next().value;
    if (o === void 0) break;
    r.delete(o);
  }
}
export {
  qao,
  Yao,
  Udt,
  Wys,
  e3e,
  Xg,
  Xao,
  EXt,
  Bdt,
  x_r,
  Jao,
  P_r,
  jdt,
  I_r,
  kXt,
  ADn,
  t3e,
  GR,
  e4,
  O_r,
  Qao,
  q6,
  Zao,
  elo,
  M_r,
  TXt,
  Ek,
  Wdt,
  D_r,
  H_r,
  iIe,
  tlo,
  nlo,
  Gys,
  Gdt,
  TIt,
  rlo,
  L_r,
  zys,
  Kys,
  Vys,
  qys,
  olo,
  N_r,
  CDn,
  qpe,
  RDn,
  Yys,
  slo,
  ilo,
  Xys,
  alo,
  llo,
  dlo,
  zdt,
  AIt,
  AXt,
  clo,
  Jys,
  Qys,
  n3e,
  hP,
  t4,
  Xee,
  CXt,
  $_r,
  ulo,
  uL,
  xDn,
  F_r,
  hN,
  PDn,
  Zys,
  e_s,
  vT,
  flo,
  RXt,
  Kdt,
  t_s,
  plo
};

//# sourceMappingURL=chunk-w7sca1cx.js.map
