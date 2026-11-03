// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { c } from "./chunk-acd8w9vv.js";
import { Ye, G } from "./chunk-fs43t96t.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { ke } from "./chunk-wrtp8qz8.js";
import { X } from "./chunk-4hww8411.js";
import { Qi, Fa, aN, zs } from "./chunk-h5gbmqm1.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { _, h6, t } from "./chunk-4kxznmzw.js";
import { di, Ad, Ze } from "./chunk-a16y5hcz.js";
import { s6, OH } from "./chunk-7zgz07kc.js";
import {
  zAt,
  Yfi,
  Xfi,
  Jfi,
  Qfi,
  Zfi,
  epi,
  tpi,
  npi,
  rpi,
  opi,
  lYe,
  pX
} from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { roe, uj, gCe, Yzo, xwt, Pwt, ooe } from "./chunk-8v77jr62.js";
import { Na, Yd } from "./chunk-ddpw2j06.js";
import { D5, _l } from "./chunk-at88wjsn.js";
import { i } from "./chunk-cj37hmns.js";
import { Z$, Eq, Kst } from "./chunk-4nzy53ma.js";
import { nr, vM, aT } from "./chunk-tcvjb2c0.js";
import { Ox, gti, hti, jt } from "./chunk-ajtyjx88.js";
import { Co, U$, Lt, kNe, ar, R3o, Jt, nB, xn, Kl, N3o } from "./chunk-r1dvrqha.js";
import { sB } from "./chunk-7svjr0za.js";
import { Z } from "./chunk-p27rr8yn.js";
import {
  Dtn,
  Ome,
  x9e,
  $Ar,
  Dm,
  BSo,
  jSo,
  Mme,
  IHt,
  Bft,
  A1e,
  BAr,
  bJ,
  MHt,
  x1n,
  Xae
} from "./chunk-2nwr73hs.js";
import { $Y, Ga, tmn } from "./chunk-hp871ge6.js";
import { Oh } from "./chunk-yw4wqxm9.js";
import { mK } from "./chunk-0hcnhpx5.js";
import {
  Oxs,
  SJ,
  Mxs,
  zft,
  Kft,
  Ute,
  RN,
  Bte,
  m1,
  jte,
  nCr,
  Jae,
  D9e,
  Vft,
  ROe,
  qR,
  du
} from "./chunk-1vdj04pp.js";
import { XAr } from "./chunk-76g26p0f.js";
import { itt, Oy, QT, Dce, ZA, Zre } from "./chunk-6dwr3g2n.js";
import { u$ } from "./chunk-tzm7jehf.js";
import { g3n } from "./chunk-qg3fkqqr.js";
import { LF } from "./chunk-6bkgpjsk.js";
import {
  wGt,
  ALe,
  CLe,
  BGr,
  gKe,
  Ct,
  Ygn,
  kGt,
  azo,
  lzo,
  WGr,
  hwt,
  dCe,
  TGt,
  lz,
  AGt,
  cCe,
  ywt,
  _wt,
  rH,
  n9
} from "./chunk-khq9hq2s.js";
import { YL, Yc, xY } from "./chunk-9v1g0mex.js";
import { o, M, u } from "./chunk-0bqrj5ah.js";
var Fe = {
    chat: { family: "chat", needsId: !0 },
    share: { family: "share", needsId: !0 },
    task: { family: "task", needsId: !0 },
    cowork: { family: "cowork", needsId: !0 },
    "cowork-artifact": { family: "cowork_artifact", needsId: !0 },
    project: { family: "project", needsId: !0 },
    design: { family: "design", needsId: !1 },
    settings: { family: "settings", needsId: !1 },
    api: { family: "api", needsId: !1 }
  },
  pt = {
    chat: "chat",
    share: "shared chat",
    task: "task",
    cowork: "task",
    code_session: "session",
    epitaxy: "session",
    project: "project"
  };
function ht(e) {
  let [n, r, s] = e;
  if (n === void 0) return "other";
  if (n === "artifact") return r === void 0 ? "artifact_bare" : "artifact";
  if (n === "artifacts")
    return r === void 0 || r === "design" ? "artifacts_gallery" : "chat_artifact";
  if (n === "public" && r === "artifacts") return "chat_artifact";
  if (n === "code") {
    if (r === "artifact" || r === "frame") return s === void 0 ? "artifact_bare" : "artifact";
    if (r === "artifacts") return "artifacts_gallery";
    return r === void 0 ? "other" : "code_session";
  }
  if (n === "epitaxy") {
    if (r === "artifact") return "epitaxy_artifact";
    return r === void 0 ? "other" : "epitaxy";
  }
  let a = Object.hasOwn(Fe, n) ? Fe[n] : void 0;
  if (a === void 0 || (a.needsId && r === void 0)) return "other";
  return a.family;
}
function mSo(e) {
  let n = nB(e),
    r = R3o(n);
  if (r === null) return null;
  let s;
  try {
    s = new URL(n);
  } catch {
    return null;
  }
  let a = s.searchParams.get("artifact") || s.searchParams.get("frame"),
    l = null;
  if (a !== null) {
    let d = a.toLowerCase();
    l = ar.test(d) ? d : U$(a);
  }
  return {
    family: ht(s.pathname.split("/").filter((d) => d !== "")),
    env: r,
    artifact: l === null ? null : { slug: l }
  };
}
function vAr(e, n = {}) {
  let r = `not an artifact URL: ${e} \u2014`,
    s = mSo(e),
    a = s === null ? void 0 : pt[s.family];
  if (s !== null && a !== void 0 && s.artifact !== null) {
    let b = xn({ slug: s.artifact.slug, env: s.env });
    return `${r} that is a claude.ai ${a} link; pass the artifact's own URL (${b}) as \`${n.field ?? "url"}\`.`;
  }
  if (s?.family === "design") {
    let b = n.designToolName === void 0 ? "" : `; use the ${n.designToolName} tool`;
    return `${r} that is a Claude Design link, which the ${Lt} tool cannot open${b}.`;
  }
  if (
    s?.family === "chat_artifact" ||
    /^https:\/\/(?:www\.)?claude\.site(?:[/?#]|$)/.test(nB(e.trim()))
  )
    return `${r} that is an artifact from a claude.ai chat (the chat's artifact panel or its public page), which is separate from artifacts published with this tool and has no ${kNe()} link, so this tool cannot read it. If the user wants its content used here, ask them to paste it or save it to a file in this session; if they meant one of their published artifacts, action: "list" shows those.`;
  if (a !== void 0)
    return `${r} that is a claude.ai ${a} link, not a published artifact, and this tool cannot read a ${a}. If the user meant an artifact shown in that ${a}, ask them for the artifact's own ${kNe()} link or find it with action: "list"; otherwise ask them to paste the content they want used.`;
  let d = e.trim(),
    y = ar.test(d.toLowerCase()) ? d.toLowerCase() : U$(d);
  if (s === null && y !== null)
    return `${r} that looks like an artifact id on its own; if it is one, pass the full link ${xn({ slug: y, env: Co() })} as \`${n.field ?? "url"}\`.`;
  return `${r} pass the artifact's ${kNe()} link (action: "list" shows them).`;
}
import { lstat as le, open as gt, readlink as mt, realpath as ye, stat as yt } from "fs/promises";
async function cK(e, n) {
  let r = Buffer.alloc(n + 1),
    s = 0;
  while (s < r.length) {
    let { bytesRead: a } = await e.read(r, s, r.length - s, s);
    if (a === 0) break;
    s += a;
  }
  return s === n ? r.subarray(0, n) : null;
}
import { constants as ve } from "fs";
import {
  dirname as Le,
  isAbsolute as ee,
  join as _e,
  normalize as J,
  relative as _t,
  sep as te
} from "path";
function _9e(e) {
  return zs(e) || Fa(e) || aN(e);
}
function oO(e) {
  if (_9e(e)) return !0;
  let { paths: n, vetted: r } = h6(e);
  return !r || n.some(_9e);
}
function se(e) {
  return zs(e) || Fa(e) || aN(e);
}
var PT = 512,
  yD = 255,
  u1n = x1n - 1,
  Vae = yD + 1;
function xe(e, n) {
  if (e.length === 0) return { errMsg: `${n} may not be empty` };
  if (e.length > PT) return { errMsg: `${n} is longer than ${PT} characters` };
  let r = e.normalize("NFC");
  if (/[\p{Cc}\p{Cf}\p{Co}\p{Zl}\p{Zp}]/u.test(r) || !Ad(r))
    return {
      errMsg: `${n} ${Ga(e)} contains control, formatting, line-separator, or private-use characters, or a malformed one`
    };
  if (r.includes("\\"))
    return {
      errMsg: `${n} ${Ga(e)} contains a backslash \u2014 published paths use forward slashes on every platform`
    };
  if (/[?#%]/.test(r))
    return {
      errMsg: `${n} ${Ga(e)} contains characters that cannot appear in a served URL path ("?", "#", "%")`
    };
  if (r.startsWith("/"))
    return {
      errMsg: `${n} ${Ga(e)} is absolute \u2014 published paths are relative to the artifact root`
    };
  let s = r.split("/");
  if (s.some((a) => a === "")) return { errMsg: `${n} ${Ga(e)} has an empty path segment` };
  if (s.some((a) => a === "." || a === ".."))
    return {
      errMsg: `${n} ${Ga(e)} contains "." or ".." segments \u2014 pass the plain served path`
    };
  if (s.some((a) => a === "__proto__" || a === "constructor" || a === "prototype"))
    return {
      errMsg: `${n} ${Ga(e)} contains a reserved name ("__proto__", "constructor", "prototype")`
    };
  if (/[:;]/.test(r))
    return { errMsg: `${n} ${Ga(e)} contains ":" or ";", which no published path may` };
  return { nfc: r };
}
function wtn(e, { removal: n = !1 } = {}) {
  let r = xe(e, "files: published path");
  if ("errMsg" in r) return r;
  let { nfc: s } = r;
  if (s === "index.html")
    return {
      errMsg:
        'files: "index.html" cannot be a published path \u2014 the `html` argument is always the index. Pass that file\'s content as `html` and remove the "index.html" mapping.'
    };
  if (s.startsWith("_"))
    return {
      errMsg: `files: published path ${Ga(e)} starts with "_", which the artifact service reserves for its own names \u2014 rename the file or its top-level directory`
    };
  if (!n && EAr(s))
    return {
      errMsg: `files: published path ${Ga(e)} is a name the artifact service answers with one of its own views, so the file could never be read back \u2014 rename it`
    };
  return { key: s };
}
function EAr(e) {
  return e.startsWith("_") || e === "index.html.json" || e === ".json";
}
function w4(e) {
  let n = xe(e, "path");
  if ("errMsg" in n) return n;
  let { nfc: r } = n;
  if (EAr(r))
    return {
      errMsg: `path ${Ga(e)} names one of the artifact service's own views, not a published file; list_files shows the readable paths`
    };
  return { key: r };
}
var VRs = 1048576,
  bt = /\.(?:png|jpe?g)$/i;
function qRs(e) {
  let n = xe(e, "thumbnail href");
  if ("errMsg" in n) return n;
  if (!bt.test(n.nfc))
    return {
      errMsg: `thumbnail href ${JSON.stringify(e)} is not a .png, .jpg or .jpeg file \u2014 custom thumbnails are PNG or JPEG images`
    };
  return { rel: n.nfc };
}
function b9e(e, n, r) {
  return e === n || e.startsWith(n + te) || e === r || e.startsWith(r + te);
}
function EEe(e, n, r) {
  let s = S9e(J(n));
  if (s === r) return e;
  if (e === s) return r;
  return e.startsWith(s + te) ? r + e.slice(s.length) : e;
}
function S9e(e) {
  let n = e.replace(/\/+$/, "");
  return n === "" ? e : n;
}
function w9e(e, n) {
  if (se(e)) return null;
  if (e === "~" || e.startsWith(`~${te}`) || e.startsWith("~/")) return null;
  if (ee(e)) {
    let s = J(e);
    return se(s) ? null : s;
  }
  let r = J(e);
  if (r === ".." || r.startsWith(`..${te}`)) return null;
  return _e(n, r);
}
function gSo(e) {
  return `files: ${JSON.stringify(e)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 list the link's target path instead`;
}
async function yJ(e) {
  let n = S9e(e);
  for (let r = 0; r < 40; r++) {
    let s;
    try {
      s = await mt(n);
    } catch {
      return !1;
    }
    if (Qi(s, Le(n))) return !0;
    if (s.split(/\/+/).includes("..")) return !0;
    if (((n = S9e(ee(s) ? J(s) : _e(Le(n), s))), se(n))) return !0;
  }
  return !0;
}
function wt(e, n) {
  return n.some((r) => b9e(e, r.lex, r.real));
}
function Ae(e, n) {
  return n.some((r) => e === r.real || e.startsWith(r.real + te));
}
function Re(e) {
  return !e.isSymbolicLink() && e.isDirectory();
}
async function At(e) {
  if (e === void 0 || !ee(e)) return [];
  let n = S9e(J(e)),
    r;
  try {
    r = await le(n);
  } catch (l) {
    return G(l) ? [{ kind: "scratchpad", lex: n, real: n }] : [];
  }
  if (!Re(r) || (await yJ(n))) return [];
  let s = await ye(n).catch(() => n),
    a = await le(n).catch(() => {
      return;
    });
  return a !== void 0 && Re(a) && a.ino === r.ino && a.dev === r.dev
    ? [{ kind: "scratchpad", lex: n, real: s }]
    : [];
}
async function hSo(e, n) {
  let r = [];
  for (let s of e ?? []) {
    if (!ee(s) || se(s)) continue;
    let a = S9e(J(s));
    if (a === n.lex || a === n.real) continue;
    try {
      let l = await le(a);
      if (!Re(l) || (await yJ(a))) continue;
      if (i.CLAUDE_CODE_EVAL_CONFINED && a === ke()) {
        r.push({ kind: "dir", lex: a, real: a });
        continue;
      }
      let d = await ye(a);
      if (se(d)) continue;
      let y = await le(a);
      if (Re(y) && y.ino === l.ino && y.dev === l.dev) r.push({ kind: "dir", lex: a, real: d });
    } catch {}
  }
  return r;
}
function Ue(e) {
  let n = e.filter((a) => a.kind !== "scratchpad"),
    r = n.map((a) => _(a.lex)).join(", "),
    s = e.some((a) => a.kind === "scratchpad") ? " or your scratchpad directory" : "";
  return n.length > 1
    ? { where: `the session's working directories (${r})${s}`, under: "a path under one of them" }
    : {
        where: `the working directory (${r})${s}`,
        under: s === "" ? "a path under it" : "a path under one of them"
      };
}
function De(e) {
  return e.kind === "scratchpad"
    ? "your scratchpad directory"
    : e.kind === "cwd"
      ? `the working directory (${_(e.lex)})`
      : `${_(e.lex)} (one of the session's working directories)`;
}
async function Rt(e, n, r) {
  let s = await ye(e),
    a = { kind: "cwd", lex: S9e(J(e)), real: s },
    l = [a, ...(await hSo(r?.workingDirs, a)), ...(await At(r?.scratchpadDir))],
    { where: d, under: y } = Ue(l);
  if (n === void 0) return { anchors: l, realRoot: s, lexRoot: J(e) };
  if (se(n))
    return {
      errMsg: `root: ${JSON.stringify(n)} is a network path \u2014 the publish base must lie within ${d}`
    };
  let b = J(n);
  if (!ee(b) && (b === ".." || b.startsWith(`..${te}`)))
    return {
      errMsg:
        `root: ${JSON.stringify(n)} escapes the working directory \u2014 ` +
        "a relative publish base must lie within it"
    };
  let x = ee(b) ? l.find((S) => b9e(b, S.lex, S.real)) : l[0];
  if (x === void 0)
    return { errMsg: `root: ${JSON.stringify(n)} is outside ${d} \u2014 pass ${y}` };
  let B = ee(b) ? b : _e(s, b),
    T = r?.denyPath?.(B, !1, n);
  if (T !== void 0) return { errMsg: T };
  if (oO(B) || (await yJ(B)))
    return {
      errMsg: `root: ${JSON.stringify(n)} is a symlink whose chain cannot be safely resolved (network target, a \`..\` segment in link text, or too many links) \u2014 pass the target directory itself`
    };
  let N;
  try {
    N = await ye(B);
  } catch {
    return { errMsg: `root: ${JSON.stringify(n)} not found` };
  }
  if (se(N))
    return {
      errMsg: `root: ${JSON.stringify(n)} resolves to a network path \u2014 the publish base must lie within ${d}`
    };
  if (!Ae(N, [x]))
    return {
      errMsg: Ae(N, l)
        ? `root: ${_(n)} is a link from ${De(x)} into ${De(l.find((S) => Ae(N, [S])) ?? x)} \u2014 pass the directory it points to instead`
        : `root: ${JSON.stringify(n)} resolves outside ${d} \u2014 the publish base must lie within it`
    };
  let k;
  try {
    k = await yt(N);
  } catch {
    return { errMsg: `root: ${JSON.stringify(n)} not found` };
  }
  if (!k.isDirectory()) return { errMsg: `root: ${JSON.stringify(n)} is not a directory` };
  let W = S9e(ee(b) ? b : _e(J(e), b));
  return { anchors: l, realRoot: N, lexRoot: W };
}
async function ySo(e, n, r, s) {
  let a = await Rt(n, r, s);
  if ("errMsg" in a) return a;
  let { anchors: l, realRoot: d, lexRoot: y } = a,
    { where: b, under: x } = Ue(l);
  if (s?.expectedRealRoot !== void 0 && s.expectedRealRoot !== d)
    return {
      errMsg:
        "root: the publish base resolves to a different location than " +
        "was approved \u2014 it changed between approval and publishing; " +
        "retry the publish"
    };
  if (e.length === 0)
    return { errMsg: "files: the file map is empty \u2014 list at least one file" };
  if (e.length > yD)
    return {
      errMsg: `files: ${e.length} files + index.html exceeds the ${yD + 1} entries one publish may name; send at most ${yD} now and the rest in another publish to the same url`
    };
  let B = [],
    T = new Set(),
    N = 0;
  for (let k of e) {
    let W = wtn(k.to);
    if ("errMsg" in W) return W;
    let S = W.key;
    if (T.has(S)) return { errMsg: `files: published path ${Ga(S)} appears more than once` };
    T.add(S);
    let R = k.from;
    if (se(R))
      return {
        errMsg: `files: ${JSON.stringify(R)} is a network path \u2014 only files under ${b} can be published`
      };
    if (R === "~" || R.startsWith(`~${te}`) || R.startsWith("~/"))
      return {
        errMsg: `files: ${JSON.stringify(R)} \u2014 "~" is not expanded here; pass a base-relative or absolute path`
      };
    let K = ee(R) ? void 0 : J(R);
    if (K !== void 0 && (K === ".." || K.startsWith(`..${te}`)))
      return {
        errMsg:
          `files: ${JSON.stringify(R)} escapes the publish base \u2014 ` +
          `only files under ${b} can be published`
      };
    let F = w9e(R, d);
    if (F === null) return { errMsg: `files: ${JSON.stringify(R)} cannot be resolved` };
    if (ee(R) && !wt(F, l))
      return { errMsg: `files: ${JSON.stringify(R)} is outside ${b} \u2014 pass ${x}` };
    let E = s?.denyPath?.(F, !1, R);
    if (E !== void 0) return { errMsg: E };
    if (y !== d) {
      let v = K ?? (F.startsWith(d + te) ? _t(d, F) : void 0);
      if (v !== void 0) {
        let I = s?.denyPath?.(_e(y, v), !0, R);
        if (I !== void 0) return { errMsg: I };
      }
    }
    if (oO(F) || (await yJ(F))) return { errMsg: gSo(R) };
    let U;
    try {
      U = await ye(F);
    } catch (v) {
      return { errMsg: `files: ${JSON.stringify(R)} not found`, ...(G(v) && { missing: !0 }) };
    }
    if (se(U))
      return {
        errMsg: `files: ${JSON.stringify(R)} resolves to a network path \u2014 only files under ${b} can be published`
      };
    if (!Ae(U, l))
      return {
        errMsg: `files: ${JSON.stringify(R)} resolves outside ${b} (symlink?) \u2014 only files under it can be published`
      };
    if (U !== F) {
      let v = s?.denyPath?.(U, !0, R);
      if (v !== void 0) return { errMsg: v };
    }
    try {
      let v = await le(U);
      if (v.isSymbolicLink())
        return {
          errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      if (!v.isFile()) return { errMsg: `files: ${JSON.stringify(R)} is not a regular file` };
    } catch (v) {
      return { errMsg: `files: ${JSON.stringify(R)} not found`, ...(G(v) && { missing: !0 }) };
    }
    let A;
    try {
      A = await gt(U, ve.O_RDONLY | (ve.O_NOFOLLOW | ve.O_NONBLOCK));
    } catch (v) {
      if (v?.code === "ELOOP")
        return {
          errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
        };
      return { errMsg: `files: ${JSON.stringify(R)} not found`, ...(G(v) && { missing: !0 }) };
    }
    let j, H;
    try {
      try {
        if ((await le(U)).isSymbolicLink())
          return {
            errMsg: `files: ${JSON.stringify(R)} changed to a symlink after it was checked \u2014 retry the publish`
          };
      } catch (I) {
        return { errMsg: `files: ${JSON.stringify(R)} not found`, ...(G(I) && { missing: !0 }) };
      }
      let v = await A.stat();
      if (!v.isFile()) return { errMsg: `files: ${JSON.stringify(R)} is not a regular file` };
      if ((i.CLAUDE_CODE_EVAL_CONFINED || s?.refuseHardLinks === !0) && v.nlink > 1)
        return { errMsg: `files: ${JSON.stringify(R)} has more than one hard link` };
      if (v.size > Dm)
        return {
          errMsg: `files: ${JSON.stringify(R)} is ${Math.ceil(v.size / 1024 / 1024)}MB (per-file max ${Dm / 1024 / 1024}MB)`,
          tooLarge: !0
        };
      if (((N += v.size), N > bJ))
        return {
          errMsg: `files: total content exceeds ${bJ / 1024 / 1024}MB at ${JSON.stringify(R)} \u2014 the most one publish sends; publish the files up to it now and the rest in another publish to the same url (a version may total ${MHt / 1024 / 1024}MB)`
        };
      if (((H = k.contentType ?? $Y(S)), H === void 0))
        return { errMsg: tmn("files", S), notServedPath: S };
      try {
        let I = await cK(A, v.size);
        if (I === null)
          return {
            errMsg: `files: ${JSON.stringify(R)} changed while it was read \u2014 retry the publish`
          };
        j = I;
      } catch {
        return { errMsg: `files: ${JSON.stringify(R)} could not be read` };
      }
      B.push({
        path: S,
        content: j,
        contentType: H,
        ...(k.live !== void 0 && { live: k.live }),
        ...(k.reseed === !0 && { reseed: !0 })
      });
    } finally {
      await A.close();
    }
  }
  return { files: B };
}
async function YRs(e, n, r, s) {
  let a = /\.png$/i.test(n) ? ".png" : ".jpg",
    l = await ySo([{ to: `thumbnail${a}`, from: n }], r, void 0, s);
  if ("errMsg" in l)
    return {
      errMsg: `thumbnail ${JSON.stringify(e)}: ${l.errMsg.replace(/^files: /, "")}`,
      missing: l.missing === !0,
      tooLarge: l.tooLarge === !0
    };
  let d = l.files[0].content;
  return { content: typeof d === "string" ? Buffer.from(d) : d };
}
var kHt = "passive";
var kt = 600000,
  He = /^(\d{1,15})-/;
function Ee(e) {
  let n = e === void 0 ? void 0 : He.exec(e)?.[1];
  return n !== void 0 && Number(n) * 1000 <= Date.now() + kt ? e : void 0;
}
function _So(e, n) {
  let { live: r } = Z();
  if (Ee(n) === void 0) {
    if (!r.heardAheadOfClockReported && He.test(n))
      ((r.heardAheadOfClockReported = !0),
        f("artifact_live_subscribe", "heard_version_skipped_ahead_of_clock"));
    return;
  }
  let s = r.heardVersions.get(e),
    a = s === void 0 ? 1 : u$(n, s.ver);
  if (a !== null && a > 0) r.heardVersions.set(e, { ver: n, toldTo: new Set() });
}
function vtn(e, n) {
  let { supervisors: r, heardVersions: s } = Z().live,
    a = r.get(e);
  if (a === void 0 || n === void 0) return { behind: !1 };
  let l = Et(Ee(s.get(e)?.ver), Ee(a.carriedVer));
  if (l === void 0 || x9e(a.ownPublishes, e) || Dtn(a.ownPublishes, e, l)) return { behind: !1 };
  let d = u$(l, n);
  return d !== null && d > 0 ? { behind: !0, liveVer: l } : { behind: !1 };
}
function XRs(e, n, r) {
  let s = vtn(e, n);
  if (!s.behind) return;
  let a = Z().live.heardVersions.get(e);
  return a?.ver === s.liveVer && a.toldTo.has(r ?? "main") ? void 0 : { liveVer: s.liveVer };
}
function JRs(e, n, r) {
  if (Ee(n) === void 0) return;
  let s = Z().live.heardVersions,
    a = s.get(e),
    l = r ?? "main";
  if (a?.ver === n) {
    a.toldTo.add(l);
    return;
  }
  let d = a === void 0 ? -1 : u$(a.ver, n);
  if (d !== null && d < 0) s.set(e, { ver: n, toldTo: new Set([l]) });
}
function f1n(e, n) {
  let r = Z().live.heardVersions;
  if (n === void 0 || r.get(e)?.ver === n) r.delete(e);
}
function Et(e, n) {
  if (e === void 0 || n === void 0) return e ?? n;
  let r = u$(e, n);
  return r !== null && r < 0 ? n : e;
}
var QRs = ["org_pinned_instance", "pipeline_instance", "template_instance"],
  We = { first_party_type: 0, org_pinned_instance: 1, pipeline_instance: 2, template_instance: 3 };
function Etn(e, n, r) {
  if (rH(r)) return;
  let { attestedTypeArtifacts: s } = Z(),
    a = s.get(e) ?? {},
    l = a.revokedAt?.[n];
  if (l !== void 0 && r <= l) return;
  let d = a.mark;
  if (d === void 0 || r > d.issuedAt || (r === d.issuedAt && We[n] < We[d.kind]))
    s.set(e, { ...a, mark: { kind: n, issuedAt: r } });
}
function kAr(e, n, r) {
  if (rH(r)) return;
  let { attestedTypeArtifacts: s } = Z(),
    a = s.get(e) ?? {},
    l = { ...a.revokedAt };
  for (let b of n) l[b] = Math.max(l[b] ?? r, r);
  let d = a.mark,
    y = d !== void 0 && !(n.includes(d.kind) && d.issuedAt <= r) ? d : void 0;
  s.set(e, { ...(y && { mark: y }), revokedAt: l });
}
var Tt = p(() =>
  u({ firstPartyType: M().optional(), typeFirstParty: M().optional(), template: M().optional() })
);
function Ke(e, n, r, s, a) {
  if (n === void 0) return;
  let l = Tt().safeParse(n);
  if (!l.success) return;
  let d = l.data,
    y = a.external;
  if (d.firstPartyType === !0) {
    if (!y) Etn(e, "first_party_type", s);
    return;
  }
  if (d.typeFirstParty !== !0) return;
  if (r !== void 0 && ar.test(r)) Etn(r, "first_party_type", s);
  if (y) return;
  if (d.template === !0) Etn(e, "template_instance", s);
  else kAr(e, ["template_instance"], s);
}
function gw(e) {
  return Z().attestedTypeArtifacts.get(e)?.mark?.kind;
}
function ZRs(e) {
  return gw(e) !== void 0;
}
function bSo(e) {
  switch (e) {
    case "first_party_type":
      return "a published first-party Artifact type";
    case "org_pinned_instance":
      return "an Artifact the organization's admins pinned for its type (its design system or template)";
    case "pipeline_instance":
      return "a template the organization's publishing pipeline owns";
    case "template_instance":
      return "a design system (an Artifact made from a template Artifact type) in the user's organization";
  }
}
function Dft(e) {
  let n = gw(e);
  return n === void 0 ? "" : ` [attested: ${bSo(n)}]`;
}
var St = 600000;
function je(e, n) {
  let r = Z();
  if (n === void 0) {
    if (r.sandboxEgress.delete(e)) t(`[artifact] sandbox egress setting for ${e} withdrawn`);
    return;
  }
  (r.sandboxEgress.set(e, { setting: n, at: Date.now() }),
    t(`[artifact] sandbox egress setting for ${e}: ${n}`));
}
function exs(e = Co()) {
  if (!vM()) return i.CLAUDE_CODE_REMOTE === !0 && !aT() ? void 0 : !1;
  let n = Z().sandboxEgress.get(e);
  if (n === void 0 || Date.now() - n.at >= St) return;
  return n.setting === "disabled";
}
var txs =
  "what the artifact is for and the key decisions; the repo, branch, and commit it was built from; data sources used (MCP servers, load-bearing files); whether embedded data is a snapshot and as of when; known limitations and suggested next steps";
var vt = 16384;
var Xn = `
[prompt truncated: exceeded ${vt / 1024}KB]`;
var xt = /^[\w.:@+-]{1,56}(?:\[[A-Za-z0-9]{1,6}\])?$/,
  Ot = p(() => {
    let e = o()
        .refine((r) => r.trim() !== "")
        .optional()
        .catch(void 0),
      n = o()
        .trim()
        .regex(xt)
        .optional()
        .catch(void 0);
    return u({ prompt: e, context: e, model: n, client_version: n });
  });
function ze(e) {
  let n = Ot().safeParse(e);
  if (!n.success) return;
  let { prompt: r, context: s, model: a, client_version: l } = n.data,
    d = {
      ...(r !== void 0 && { prompt: r }),
      ...(s !== void 0 && { context: s }),
      ...(a !== void 0 && { model: a }),
      ...(l !== void 0 && { clientVersion: l })
    };
  return Object.keys(d).length > 0 ? d : void 0;
}
var $t = 2000,
  Mt = 6000;
function Bt(e) {
  return {
    prompt: Math.min($t, Math.floor(e / 16)),
    context: Math.min(Mt, Math.floor((3 * e) / 16))
  };
}
function Ge(e, n, r) {
  let s = e.trim(),
    a = Array.from(s);
  return a.length <= n
    ? s
    : `${a.slice(0, n).join("")}
[${r} truncated after ${n} characters]`;
}
function SSo(e, n) {
  return "";
}
var Pt = /[\x00-\x08\x0b-\x1f\x7f-\x9f\u2028\u2029]+/g;
function wSo(e) {
  return Kl(sB(lYe, e.replace(Pt, " ")));
}
var vSo = 4194304,
  Je = 3149824;
function Xe(e) {
  let n = e.length;
  while (
    n > 0 &&
    ` 	\r
`.includes(e[n - 1])
  )
    n--;
  let r = e.slice(0, n);
  if (!r.endsWith("</script>")) return e;
  let s = r.slice(0, r.length - 9),
    a = s.lastIndexOf('<script type="application/json" id="__frame_comments__">');
  if (a === -1) return e;
  let l = s.slice(a + 56);
  if (l.includes("<")) return e;
  let d;
  try {
    d = JSON.parse(l);
  } catch {
    return e;
  }
  if (typeof d !== "object" || d === null || Array.isArray(d)) return e;
  let y = d;
  if (typeof y.mac !== "string" || y.mac.length === 0) return e;
  if (!Object.hasOwn(d, "payload")) return e;
  let b = s.slice(0, a);
  if (
    b.endsWith(`
`)
  )
    b = b.slice(0, -1);
  return b;
}
function Lte(e) {
  return TAr(e) || e.outsideOrg === !0;
}
function p1n(e) {
  return TAr(e) || e.outsideWriter === !0;
}
function TAr(e) {
  return (
    e.authoredByOthers === !0 || e.role !== "owner" || e.publicRead || e.cowritten || e.typeLocked
  );
}
function ESo(e) {
  if (!Array.isArray(e)) return;
  let n = {};
  for (let s of e) {
    if (typeof s !== "object" || s === null || typeof s.path !== "string") return;
    n[s.path] = s;
  }
  let r = IHt({ manifest: n });
  return r !== void 0 && r.type.length > 0 ? r : void 0;
}
var Nt = /^[a-z][a-z0-9_-]{0,63}$/,
  qe = ["users", "org", "public"];
function It(e) {
  let n = e?.documents;
  return typeof n === "number" && Number.isSafeInteger(n) && n >= 0 ? n : void 0;
}
var E1e = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/,
  Ft = new RegExp(E1e, "g");
function m1n(e) {
  return e.replace(Ft, "");
}
function rt(e, n, r, s, a) {
  let l = Ome(n, r, e.ver),
    d = !e.typeLocked && !e.publicRead && !s && !a,
    y = d && !Lte(e);
  return { workshopPage: s, ownVersion: l, ownBytesPage: d, plainOwner: y, vouchedOwn: y && l };
}
async function nxs(e, n, r, s = {}) {
  let a = await LF(e.html, "ws-decisions");
  return { ...rt(e, n, r, a !== null, s.savedInPage === !0), island: a };
}
async function rxs(e, n, r) {
  return rt(e, n, r, !1, !1).vouchedOwn && (await LF(e.html, "ws-decisions")) === null;
}
function AAr(e) {
  if (e.publicRead || e.offOrgRamp === !0 || e.external === !0 || e.role === "owner") return null;
  if (e.role === "writer" && e.sameChannel === !0 && BSo()) return "channel";
  return jSo() ? "shared" : null;
}
function g1n(e) {
  let n = e.role !== "owner" || e.cowritten || e.typeLocked === !0 || e.outsideOrg === !0,
    r = DF(e.html, "page"),
    s = (a) => h1n(r, a, "page");
  if (n || !e.vouchedOwn) {
    let [a, l] =
      n && e.sameChannel === !0
        ? [Zfi, epi]
        : e.typeLocked
          ? [tpi, npi]
          : e.role === "owner" && e.outsideOrg === !0
            ? [Jfi, Qfi]
            : n
              ? [Yfi, Xfi]
              : [rpi, opi];
    return {
      enveloped: !0,
      otherWriters: n,
      lead: `${a}
<${zAt}>
`,
      body: r,
      tail: `
</${zAt}>

${l}`,
      head: s
    };
  }
  return { enveloped: !1, otherWriters: !1, lead: "", body: r, tail: "", head: s };
}
function CAr(e) {
  return g3n(e, pX);
}
function DF(e, n = "all") {
  return CAr(Kl(e, n));
}
function h1n(e, n, r = "all") {
  if (n <= 0) return "";
  for (let s = n; ; s--) {
    let a = CAr(N3o(e, s, r));
    if (a.length <= n) return a;
  }
}
function RAr(e) {
  if (!Mme()) return;
  if (e.syncClient === !0)
    return typeof e.syncToken === "string" && e.syncToken !== ""
      ? { transport: "sync", token: e.syncToken }
      : void 0;
  return e.subscriptionToken ? { transport: "live", token: e.subscriptionToken } : void 0;
}
function IT(e, n = {}) {
  let r = Jt(e);
  if (r === null)
    return { ok: !1, message: n.notUrlMessage ?? vAr(e, { field: n.field }), errorCode: 4 };
  let s = Co();
  if (r.env !== s) {
    let a = n.envHint ? ` \u2014 ${n.envHint(s)}` : "";
    return {
      ok: !1,
      message: `that artifact URL is for ${r.env}, but this session targets ${s} claude.ai${a}`,
      errorCode: 5
    };
  }
  return { ok: !0, parsed: r };
}
var ot = 60000;
function xme(e) {
  return e.gone === !0;
}
function Hft(e) {
  return e.neverPublished === !0;
}
function v4(e) {
  return e.otherOrg === !0;
}
function Dt(e) {
  return (
    typeof e === "object" &&
    e !== null &&
    Xae(e)?.reason === "org_mismatch" &&
    "owner_org" in e &&
    typeof e.owner_org === "string" &&
    Kt(e.owner_org) !== null
  );
}
var v9e =
    "this Artifact is in another of the user's organizations, not the one this session is signed in to",
  E9e = "the user runs /login and signs in to that organization",
  ktn =
    "this is a public artifact from outside the user's organization: it can be read, but not watched";
var Ut = `${v9e} \u2014 it opens here only after ${E9e}`,
  st =
    "If it was shared with you by email, accept the invitation in a browser first, and check that Claude Code is signed in to the invited account",
  Ce =
    "If this was shared with you from another organization, open it in Claude Code on your computer or in a Claude Code on the web session",
  Ht = new Set([
    _wt,
    "boot_403_agent_not_added",
    "boot_403_agent_owned",
    "boot_403_request_access"
  ]),
  oxs =
    "Do not retry this read; tell the user now that the artifact could not be read, then go on without it.";
function sxs(e) {
  return xme(e) || (e.errorCode !== void 0 && Ht.has(e.errorCode));
}
function ixs(e) {
  return e.replace(`. ${st}`, "").replace(`. ${Ce}`, "");
}
var Wt = p(() => u({ request_access: M(), reason: o().optional() })),
  xAr = 15000;
async function y1n(
  { slug: e, env: n, sk: r, vanity: s },
  a,
  {
    kind: l = "probe",
    relayOnly: d = !1,
    agentPeer: y = !1,
    actorId: b = !1,
    syncLive: x = !1,
    watchBoot: B = !1,
    readBack: T = !1,
    lean: N,
    pastVer: k,
    credentials: W
  }
) {
  let S = Co();
  if (n !== S)
    return {
      err: `that artifact URL is for ${n} claude.ai, but this session targets ${S}`,
      errorCode: "env_mismatch"
    };
  let R =
      "via=model_read" +
      (l === "probe" ? "&bk=probe" : "") +
      (l === "probe" && N !== void 0 ? `&lean=${encodeURIComponent(N)}` : "") +
      (y ? "&peer=agent" : "") +
      (b ? "&actor=id" : "") +
      (x ? "&live=sync" : "") +
      (B || y || x ? `&vn=${kHt}` : "") +
      (T ? "&readback=1" : "") +
      (k !== void 0 ? `&ver=${encodeURIComponent(k)}` : ""),
    K = r === void 0 ? "" : `&sk=${encodeURIComponent(r)}`,
    F = s === void 0 ? "" : `&vanity=${encodeURIComponent(s)}`,
    E = `/api/frame/${e}?${R}${K}${F}`,
    U = { refreshOAuth: !0, credentials: W, headers: Yc(), timeout: xAr, signal: a },
    A,
    j = Date.now(),
    H = performance.now();
  try {
    A = d || RN() ? await du.getRelayOnly(E, U) : await du.get(E, U);
  } catch (L) {
    if (Na(L)) throw L;
    return {
      err: "artifact read failed (network error)",
      errorCode: "boot_request_error",
      ...(D5(L) && { transient: !0 }),
      request: { ...mK(L, H), wall_elapsed_ms: Date.now() - j, ...(qR(L) && { relay: !0 }) }
    };
  }
  if ((je(n, Oxs(A)), !A.ok)) {
    if (A.reason === "relay-unavailable")
      return {
        err: `artifact read failed (relay unavailable${A.status ? `, HTTP ${A.status}` : ""})`,
        ...(A.status !== 0 && { status: A.status }),
        errorCode: "boot_relay_error"
      };
    if (A.reason === "relay-not-served")
      return {
        err: "artifact read failed (the session gateway does not serve this session)",
        errorCode: "boot_relay_not_served"
      };
    return {
      err: A.reason === "no-auth" ? Oy(A.detail) : `artifact read unavailable: ${A.reason}`,
      errorCode: A.reason.replace(/-/g, "_")
    };
  }
  if (!A.fromFrame)
    return {
      err: `artifact read failed (relay HTTP ${A.status})`,
      status: A.status,
      errorCode: "boot_relay_error"
    };
  let v = Eq() ? "Slack" : Kst() ? "Teams" : void 0,
    I = `${v ?? "chat"} channel`,
    de = `add this ${I} (under "Add people, groups, or Claude Tags", paste the channel ID)`,
    pe = `sharing with a person or service account does not reach a ${I}'s Claude \u2014 ask the owner to open Share and ${de}, or widen General access to the organization`,
    be = `${pe}.`;
  if (A.status === 404) {
    let L = Mxs(A.data),
      fe = nr() && A.route === "direct";
    return {
      err: L
        ? "this artifact exists but nothing has been published to it yet, so there is nothing to read"
        : `artifact not found \u2014 it may have been deleted, or it has not been shared with you${v === void 0 ? (fe ? `. ${Ce}` : `. ${st}`) : `. If it is restricted to specific people, ${pe}${fe ? `. ${Ce}` : ""}`}`,
      status: 404,
      ...(SJ(A.data) && { gone: !0 }),
      ...(L && { neverPublished: !0 }),
      errorCode: "boot_404"
    };
  }
  if (A.status === 403 && Dt(A.data)) return { err: Ut, status: 403, otherOrg: !0, errorCode: _wt };
  if (A.status === 403) {
    let L = Wt().safeParse(A.data);
    if (L.success && L.data.reason === "agent_not_added")
      return {
        err: `this artifact is restricted to specific people, and this ${I}'s Claude is not one of them: ${be}`,
        status: 403,
        errorCode: "boot_403_agent_not_added"
      };
    if (L.success && L.data.reason === "agent_owned")
      return {
        err:
          v === void 0
            ? "this artifact belongs to a chat channel's Claude and has not been shared with you \u2014 ask someone in the channel it was published from to open Share on it and add you."
            : `this artifact belongs to another ${I}'s Claude and has not been shared with this one \u2014 ask someone in the channel it was published from to open Share on it and ${de}.`,
        status: 403,
        errorCode: "boot_403_agent_owned"
      };
    if (L.success && L.data.request_access)
      return {
        err: "you do not have access to this artifact. Open the link in a browser to request access from the owner.",
        status: 403,
        errorCode: "boot_403_request_access"
      };
  }
  if (A.status === 400 && k !== void 0)
    return {
      err: "the server refused that version id (HTTP 400). Most likely it is not among the ones kept for this artifact: list its versions for the ids that are.",
      status: 400,
      errorCode: "boot_unknown_ver"
    };
  if (A.status < 200 || A.status >= 300)
    return {
      err: `artifact read failed (HTTP ${A.status})`,
      status: A.status,
      errorCode: "boot_failed"
    };
  let P = A.data ?? {},
    { ver: ne, assetToken: ie } = P,
    he = P.mode === "public" || P.kind === "public";
  if (!ne || (!ie && !he))
    return { err: "artifact read failed: incomplete boot response", errorCode: "boot_incomplete" };
  if (!xY.test(ne))
    return { err: "artifact read failed: malformed boot response", errorCode: "boot_bad_ver" };
  if (k !== void 0) {
    if ((kGt(e, P.cowritten), WGr(e, P.authoredByOthers), P.outsideWriter === !0)) hwt(e, !0);
    if (ne !== k)
      return {
        err: "artifact read failed: the server served a different version from the one asked for, so nothing was read. It does that for an account that cannot edit the artifact; for one that can, the server ignored the version asked for.",
        errorCode: "boot_past_ver_ignored"
      };
    return { err: null, data: P, ver: ne, assetToken: ie || void 0, route: A.route };
  }
  (Ygn(e, P.artifactKind),
    AGt(e, $Ar(P), j),
    kGt(e, P.cowritten),
    WGr(e, P.authoredByOthers),
    hwt(e, P.outsideWriter));
  let re = P.lean === !0,
    Y = P.mode === "external";
  if (!re) lzo(e, Y);
  if (QT()) azo(e, !ie);
  TGt(e, P.type);
  let { probeBoots: ue } = Z().shareStatus,
    ce = ue.get(e);
  if (ce !== void 0 && ce.boot.ver !== ne) ue.delete(e);
  if (!re && !he && (!Y || P.perm?.role === "writer"))
    Ke(e, P.typeFacts, lz(Ct(e)), j, { external: Y });
  return { err: null, data: P, ver: ne, assetToken: ie || void 0, route: A.route };
}
async function wP(
  e,
  n,
  r,
  {
    kind: s = "probe",
    gatePublicRead: a = !0,
    relayOnly: l = !1,
    agentPeer: d = !1,
    actorId: y = !1,
    syncLive: b = !1,
    watchBoot: x = !1,
    lean: B,
    speculative: T = !1,
    readBack: N = !1,
    pastVer: k,
    credentials: W,
    probeToolUseId: S
  }
) {
  let R = T ? f : m,
    K;
  if (S !== void 0 && !d && !y && !b && !x && B === void 0 && k === void 0 && !T) {
    let { probeBoots: A } = Z().shareStatus,
      j = Date.now();
    for (let [v, I] of A) if (j - I.issuedAt > ot) A.delete(v);
    let H = A.get(e.slug);
    if (
      H !== void 0 &&
      H.toolUseId === S &&
      (s === "probe" || H.boot.data.typeInstance === !1) &&
      !(l && nr() && H.boot.route !== "relay") &&
      !vtn(e.slug, H.boot.ver).behind
    )
      ((K = { ...H.boot, reused: !0 }),
        t(
          `[artifact] ${n}: ${s}-kind boot served from this tool use's share probe (probe issued ${j - H.issuedAt}ms ago) slug=${e.slug}`
        ));
  }
  let F = {
      kind: s,
      relayOnly: l,
      agentPeer: d,
      actorId: y,
      syncLive: b,
      watchBoot: x,
      readBack: N,
      pastVer: k,
      credentials: W
    },
    E = K ?? (await y1n(e, r, { ...F, lean: B?.version }));
  if (
    B !== void 0 &&
    (E.err === null
      ? E.data.lean === !0 && !B.mustCarry(E.data)
      : E.errorCode === "boot_incomplete")
  )
    (f(n, "lean_boot_incomplete"),
      t(
        `[artifact] ${n}: the answer to a lean boot request was incomplete; booting in full slug=${e.slug}`
      ),
      (E = await y1n(e, r, F)));
  if (E.err !== null) {
    let A =
      E.errorCode === "boot_request_error" || E.errorCode === "boot_failed"
        ? {
            ...E.request,
            ...(E.status !== void 0 && { http_status: E.status }),
            ...(b && { sync_live: !0 }),
            ...(d && { agent_peer: !0 }),
            ...(l && { relay_only: !0 })
          }
        : void 0;
    if (A !== void 0) R(n, E.errorCode, A);
    else R(n, E.errorCode);
    return {
      err: E.err,
      ...(E.status !== void 0 && { status: E.status }),
      ...(E.gone && { gone: !0 }),
      ...(E.neverPublished && { neverPublished: !0 }),
      ...(E.otherOrg && { otherOrg: !0 }),
      ...(E.transient && { transient: !0 }),
      errorCode: E.errorCode
    };
  }
  let U = E;
  if (a && U.assetToken === void 0 && !QT())
    return (
      R(n, "public_read_disabled"),
      {
        err: "artifact read failed: this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet",
        errorCode: "public_read_disabled"
      }
    );
  return U;
}
async function axs(e, n, r, { syncLive: s = !1, lean: a } = {}) {
  let l = Co(),
    d = await wP({ slug: e, env: l }, "artifact_live_subscribe", n, {
      agentPeer: s,
      syncLive: s,
      watchBoot: !0,
      ...(a !== void 0 && {
        lean: {
          version: a,
          mustCarry: (x) =>
            "subscriptionToken" in x &&
            "syncToken" in x &&
            "syncClient" in x &&
            "subscriptionTokenExp" in x &&
            "watchTokenRenewEnabled" in x &&
            "perm" in x
        }
      }),
      credentials: r
    });
  if (d.err !== null)
    return {
      err: d.err,
      ...(d.status && { status: d.status }),
      ...(d.otherOrg && { otherOrg: !0 }),
      ...(g3(d.status) && { unavailable: !0 }),
      ...(d.errorCode === "boot_request_error" && { noAnswer: !0 })
    };
  if (d.assetToken === void 0) return { err: ktn, publicOutsideOrg: !0 };
  let y = RAr(d.data),
    b = d.data.syncClient === !0;
  return {
    err: null,
    token: y?.token,
    transport: y?.transport ?? (b ? "sync" : "live"),
    ver: d.ver,
    editor: Vt(d),
    tokenExp: b ? void 0 : it(d.data.subscriptionTokenExp),
    renewable: y?.transport === "live" && d.data.watchTokenRenewEnabled === !0,
    ...(typeof d.data.title === "string" && { title: d.data.title })
  };
}
function it(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function g3(e) {
  return e !== void 0 && (e >= 500 || e === 429 || e === 408);
}
async function lxs(e, n, r) {
  let s;
  try {
    s = await du.post(
      `/api/frame/watch-token/${e}?vn=${kHt}`,
      {},
      { refreshOAuth: !0, credentials: r, headers: Yc(), timeout: xAr, signal: n }
    );
  } catch (y) {
    if (Na(y)) throw y;
    return { err: "renew_miss" };
  }
  if (!s.ok || !s.fromFrame || s.status < 200 || s.status >= 300)
    return { err: "renew_miss", ...(s.ok && { status: s.status }) };
  let a = s.data ?? {},
    l = RAr(a),
    d = l?.transport === "live" ? l.token : void 0;
  if (!a.ver || !xY.test(a.ver) || d === void 0) return { err: "renew_miss", status: s.status };
  return {
    err: null,
    token: d,
    transport: "live",
    ver: a.ver,
    editor: void 0,
    tokenExp: it(a.subscriptionTokenExp),
    renewable: !0
  };
}
function Vt(e) {
  return e.assetToken !== void 0 && Pme(e.data.perm?.role);
}
function Pme(e) {
  return e === "owner" || e === "writer";
}
function at(e, n) {
  return n && e === "owner" ? void 0 : e;
}
function kSo(e) {
  return e === "reader" || e === "viewer" || e === "commenter";
}
async function Lft(e, n, r, s) {
  let a = await y1n(e, n, { readBack: s?.readBack === !0, credentials: r });
  if (a.err !== null) return { err: a.err, errorCode: a.errorCode, ...(a.gone && { gone: !0 }) };
  let l = a.assetToken === void 0,
    d = a.data.perm?.role,
    y = CLe(a.data.outsideWriter),
    b = Me(a.data);
  return {
    err: null,
    mode: l ? "public" : (a.data.perm?.mode ?? a.data.mode),
    shared: a.data.shared,
    role: at(d, l),
    outsideOrgReader: l,
    cowritten: a.data.cowritten === !0,
    ...(y !== void 0 && { outsideWriter: y }),
    ...(typeof a.data.title === "string" && { title: a.data.title }),
    ...(b !== void 0 && { readBack: b }),
    boot: a
  };
}
function Me(e) {
  if (e.readback === void 0 || typeof e.typeInstance !== "boolean") return;
  let n = BAr(e.readback);
  if (n === void 0) return;
  let r = e.typeInstance || Bft(e.type) !== void 0,
    s = n.typeLock;
  if (r && s === void 0) return;
  if (s?.latest !== void 0 && s.latest !== s.current) return;
  return n;
}
function THt(e, n) {
  if (n === void 0) return;
  let r = Z().shareStatus.probeBoots.get(e);
  return r !== void 0 &&
    r.toolUseId === n &&
    Date.now() - r.issuedAt <= ot &&
    !vtn(e, r.boot.ver).behind
    ? Me(r.boot.data)
    : void 0;
}
var $e = Dm + A1e + Je + 65536,
  kEe = YL + A1e + 1,
  Qe = {
    relayed: !1,
    why: "the session gateway declined an artifact read a few minutes ago, so this read did not retry it",
    code: "declined"
  },
  Gt = 5000,
  zt = 1000;
function k9e() {
  return { remaining: 1 };
}
function Ttn(e) {
  return `the session gateway could not serve this read just now (HTTP ${e}, after one retry); this is transient \u2014 retry shortly`;
}
async function Atn(e, n, r) {
  let s = () =>
      jt.get(gti(e, n), {
        host: "ccr-gateway",
        auth: "session-jwt",
        headers: hti(r.token),
        timeout: r.timeout,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: r.maxContentLength,
        validateStatus: () => !0,
        signal: r.signal
      }),
    a = await s();
  if (!a.ok || !g3(a.status) || r.retryBudget.remaining < 1) return a;
  r.retryBudget.remaining--;
  let l = a.response.headers?.["retry-after"],
    d = Math.min(Oh(typeof l === "string" ? l : void 0) ?? zt, Gt);
  return (
    t(`[artifact] mount answered HTTP ${a.status}; retrying once in ${d}ms slug=${e}`),
    await X(d, r.signal, { abortError: () => new Ye() }),
    s()
  );
}
function Ctn(e) {
  return e.contentVia === "frame" && !i.CLAUDE_CODE_REMOTE;
}
var Yt = "x-frame-content-route",
  Xt = 3,
  qt = 1e4;
async function Rtn(e, n, r) {
  let s = `/api/frame/content/${encodeURIComponent(e)}${n}`,
    a = Date.now() + r.timeout,
    l = !1,
    d = 0;
  for (;;) {
    let y;
    try {
      y = await du.get(s, {
        headers: { ...Yc(), "x-frame-asset-token": r.token },
        credentials: r.credentials,
        recoverOAuth401: !0,
        responseType: "arraybuffer",
        timeout: Math.max(a - Date.now(), 1),
        maxContentLength: r.maxContentLength,
        signal: r.signal
      });
    } catch (x) {
      if (Na(x) || x instanceof Ye || l || !D5(x) || Date.now() >= a) throw x;
      l = !0;
      continue;
    }
    if (!y.ok) return { kind: "declined" };
    let b = y.response.headers;
    if ((y.status === 429 || y.status === 503) && d < Xt) {
      let x = b?.["retry-after"],
        B = Math.min(Oh(typeof x === "string" ? x : void 0) ?? 500 * 2 ** d, qt);
      if (Date.now() + B + 1000 < a) {
        (d++, await X(B, r.signal, { abortError: () => new Ye() }));
        continue;
      }
    }
    if (b?.[Yt] !== "served") return { kind: "declined" };
    return { kind: "answer", status: y.status, headers: b, data: y.data };
  }
}
function T9e(e) {
  let n = e;
  return n?.["x-frame-asset-content-type"] ?? n?.["content-type"];
}
async function Zt(e, n) {
  let r = k9e(),
    s = (d) =>
      Atn(e.slug, d, {
        token: e.token,
        timeout: 30000,
        maxContentLength: e.fileRead ? kEe : $e,
        signal: e.signal,
        retryBudget: r
      });
  if (e.source !== void 0 && !e.source.fellBack) {
    let d;
    try {
      d = await s(e.source.path);
    } catch (y) {
      if (Na(y) || y instanceof Ye) throw y;
    }
    if (d?.ok && d.status === 200)
      return (
        Jae(Ox),
        {
          relayed: !0,
          result: n(Buffer.from(d.data ?? new ArrayBuffer(0)), T9e(d.response.headers), !0)
        }
      );
    ((e.source.fellBack = d?.ok ? d.status : 0),
      t(
        `[artifact] stored-source read via the gateway fell back (${e.source.fellBack}) slug=${e.slug}`
      ));
  }
  let a = (d, y, b) => {
      if (b === 404 && !e.fileRead && !nCr(Ox) && (Bte() || !D9e(Ox))) jte(Ox);
      return { relayed: !1, why: d, code: y, ...(b !== void 0 && { status: b }) };
    },
    l;
  try {
    l = await s(e.servedPath);
  } catch (d) {
    if (Na(d) || d instanceof Ye) throw d;
    return (ROe(), a("the gateway request failed in transport", "request_error"));
  }
  if (!l.ok)
    return l.reason === "no-auth"
      ? a(itt(), "no_auth")
      : a(`the gateway request was skipped (${l.reason})`, "client_policy");
  if (Vft(l.status))
    return a(
      "artifact reads through the session gateway are not enabled for this session",
      "not_served",
      l.status
    );
  if (l.status === 404 && e.fileRead)
    return (
      m(e.feature, "asset_file_not_found", { relay: !0 }),
      {
        relayed: !0,
        result: {
          err: "no file is published at that path in the served version \u2014 or artifact reads through the session gateway are not enabled for this session",
          status: 404,
          ...(nCr(Ox) &&
            wGt(
              l.response.headers,
              roe(l.response.headers, l.data, (y) => $ft(y, e.token))
            ) && { missingFile: !0 })
        }
      }
    );
  if (l.status === 404)
    return a(
      "artifact reads through the session gateway are not enabled for this session, or the artifact service no longer serves this version",
      "not_served",
      404
    );
  if (Kft(l.status, l.data)) return a(zft, "network_off", 403);
  if (g3(l.status))
    return a(
      `temporarily unable: HTTP ${l.status} after one retry, so a later read may succeed`,
      "unavailable",
      l.status
    );
  if (l.status < 200 || l.status >= 300)
    return (
      ROe(l.status),
      a(`the gateway refused the relay with HTTP ${l.status}`, "http", l.status)
    );
  return (
    Jae(Ox),
    {
      relayed: !0,
      result: n(Buffer.from(l.data ?? new ArrayBuffer(0)), T9e(l.response.headers), !1)
    }
  );
}
function Qt(e) {
  if (e === void 0) return "";
  if (!Ad(e) || Buffer.byteLength(e, "utf8") > 512) return;
  let n = e.split("/");
  for (let r of n) if (r === "" || r === "." || r === ".." || /[\\%\x00-\x1f\x7f]/.test(r)) return;
  return n.map(encodeURIComponent).join("/");
}
function PAr(e) {
  return (
    e.servedAudienceVersion === !0 ||
    e.audience === "owner" ||
    e.audienceView === "live" ||
    e.audienceView === "pinned-current"
  );
}
var en = "_src";
function TSo(e) {
  return e.assetToken !== void 0 && (e.data.mode !== "external" || e.data.perm?.role === "writer");
}
function ASo(e) {
  let { mode: n, perm: r } = e.data;
  if (n === "external") return "external";
  if (e.assetToken === void 0) return "public";
  if (n !== void 0) return "unproven";
  if (r?.role === "owner") return "own";
  return typeof r?.mode === "string" && r.mode !== "" ? "same" : "unproven";
}
function CSo(e) {
  return e !== "own" && e !== "same";
}
function RSo(e, n) {
  return `/_f/${e}/${en}/${n === "" ? "index.html" : n}`;
}
var IAr = 30000;
function xtn(e) {
  let n = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    r = void 0;
  return { host: n, base: `https://${n}` };
}
function dt(e) {
  return e === "staging"
    ? "*.frame.staging.claudeusercontent.com"
    : "*.frame.claudeusercontent.com";
}
function Ptn(e) {
  let n = dt(e);
  return Z$()
    ? XAr(n)
    : nr()
      ? `To allow direct artifact reads here, add ${n} to the environment's allowed domains: environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access.`
      : i.CLAUDE_CODE_REMOTE
        ? `To allow artifact reads here, add ${n} to the network allowlist of the environment this remote session runs in.`
        : `To allow artifact reads here, add ${n} to the network allowlist this session runs behind \u2014 the sandbox's allowed domains, or the Claude desktop app's network settings (Settings \u2192 Capabilities; a workspace admin can add it on Team/Enterprise).`;
}
function sO(e, n, r, s = "artifact_webfetch_read", a = "probe", l, d, y = !1) {
  return Be(e, n, s, e.file, r, a, l, d, y);
}
async function Nft(e, n, r, s, a = "artifact_webfetch_read", l) {
  let d = w4(n);
  if ("errMsg" in d) return (m(a, "invalid_path"), { err: `artifact read failed: ${d.errMsg}` });
  return Be(e, r, a, d.key, s, "probe", void 0, l);
}
function dxs(e, n, r, s, a) {
  return Be(e, r, a, void 0, s, "probe", void 0, void 0, !1, n);
}
async function Be(e, n, r, s, a, l, d, y, b = !1, x) {
  let B = Qt(s);
  if (B === void 0)
    return (m(r, "invalid_file_path"), { err: "artifact file path is not a clean relative path" });
  let T = await wP(e, r, n, {
    kind: l,
    readBack: b,
    pastVer: x,
    credentials: a,
    probeToolUseId: y
  });
  if (T.err !== null) return T;
  let { ver: N, assetToken: k } = T;
  if (s !== void 0 && k === void 0)
    return (
      m(r, "public_file"),
      {
        err: "the files of a public artifact read from outside its organization are not readable this way",
        status: 403,
        publicFile: !0
      }
    );
  if (k === void 0 && d?.() !== !0)
    return (
      f(r, Dce),
      {
        err: "this is a public artifact from outside your organization; its page is fetched only on a read the user approved, and this call carries no such approval \u2014 nothing was fetched",
        status: 403,
        publicUnasked: !0
      }
    );
  let W = `/_f/${N}/${B}`,
    S = TSo(T) ? { path: RSo(N, B) } : void 0,
    R = (h) => {
      let w = {
        ...(h && { source: !0 }),
        ...(!h && S?.fellBack !== void 0 && { source_fallback_status: S.fellBack }),
        ...(T.reused && { boot_reused: !0 })
      };
      return Object.keys(w).length > 0 ? w : void 0;
    },
    { title: K, favicon: F, perm: E, cowritten: U } = T.data,
    A = T.data.artifactKind === ZA || Ct(e.slug)?.artifactKind === ZA,
    j = k === void 0 ? "public" : E?.mode,
    H = ASo(T),
    v = E?.role === "owner" ? "owner" : E?.role === "writer" ? "writer" : "reader",
    I = n9({ role: ywt(at(E?.role, k === void 0)) }),
    de = E?.assignableReadModes,
    pe =
      v === "owner" &&
      Array.isArray(de) &&
      de.every((h) => h === "owner" || qe.some((w) => w === h))
        ? {
            modes: qe.filter((h) => de.includes(h) && !(A && h === "public")),
            ...(typeof E?.externalSharingEnabled === "boolean" && {
              externalSharing: E.externalSharingEnabled
            }),
            ...(typeof E?.externalInvitesEnabled === "boolean" && {
              externalInvites: E.externalInvitesEnabled
            })
          }
        : void 0,
    be = ze(T.data.origin_metadata),
    P = Me(T.data),
    ne = ESo(T.data.files),
    ie = It(T.data.dbUsage),
    he =
      typeof T.data.contentStore === "string" && Nt.test(T.data.contentStore)
        ? T.data.contentStore
        : void 0,
    re = (h, w, O, q = () => g(r, R(O))) => {
      q();
      let C =
          s === void 0 ? "text/html" : typeof w === "string" ? Ze(w, ";").trim().toLowerCase() : "",
        z = h.toString("utf-8"),
        oe = C === "text/html" ? Xe(z) : z,
        ge = CLe(T.data.outsideWriter),
        Q = BGr(ge, Ct(e.slug)?.outsideWriter);
      return {
        err: null,
        html: oe,
        contentType: C,
        raw: h,
        role: v,
        ...(O && { source: !0 }),
        cowritten: U === !0 || A || Ct(e.slug)?.cowritten === !0,
        publicRead: k === void 0,
        ...(kSo(E?.role) && { servedAudienceVersion: !0 }),
        ...(I !== void 0 && { owned: I }),
        sameChannel: E?.sameChannel === !0 && v === "writer",
        ...(H === "external" && { external: !0 }),
        ...(CSo(H) && { offOrgRamp: !0 }),
        typeLocked: dCe(e.slug, T.data.type),
        ...((T.data.authoredByOthers === !0 || Ct(e.slug)?.authoredByOthers === !0) && {
          authoredByOthers: !0
        }),
        ...(gKe(v === "owner" && k !== void 0, ge, Q) && { outsideOrg: !0 }),
        ...(Q !== void 0 && { outsideWriter: Q }),
        ...(pe !== void 0 && { shareMenu: pe }),
        ...(j !== void 0 &&
          (() => {
            let V = cCe(j, T.data.shared),
              ct = Pme(E?.role),
              { live: Ie, shared: me } = T.data,
              ft = typeof Ie === "string" && xY.test(Ie),
              Se = typeof me === "string" && xY.test(me) ? me : void 0,
              lt = (ft && (me === void 0 || me === "")) || Se !== void 0;
            return {
              audience: V.mode,
              ...(ct &&
                lt &&
                V.mode !== "owner" && {
                  audienceView:
                    Se === void 0 ? "live" : Se === N ? "pinned-current" : "pinned-earlier"
                })
            };
          })()),
        bytes: C === "text/html" ? Buffer.byteLength(oe, "utf8") : h.length,
        title: typeof K === "string" ? K : "",
        ...(F !== void 0 && { favicon: F }),
        ver: N,
        ...(typeof T.data.fileCount === "number" &&
          Number.isSafeInteger(T.data.fileCount) &&
          T.data.fileCount > 0 && { fileCount: T.data.fileCount }),
        ...(ne !== void 0 && { manifestPaths: ne }),
        ...(ie !== void 0 && { storeDocuments: ie }),
        ...(he !== void 0 && { contentStore: he }),
        ...(be !== void 0 && { origin: be }),
        ...(P !== void 0 && { readBack: P })
      };
    };
  if (A && s === void 0 && x === void 0) {
    let h = await Z().liveReplicas.renderLevel?.(e.slug, Zre, T.data.headSeq, n);
    if (h !== void 0) {
      t(`[artifact] read served from the local replica at seq ${h.head} slug=${e.slug}`);
      let w = re(Buffer.from(h.html, "utf8"), "text/html", !1);
      return w.err === null ? { ...w, localReplica: { head: h.head } } : w;
    }
  }
  let Y = `${e.slug}.frame.${e.env === "staging" ? "staging." : ""}claudeusercontent.com`,
    ue = Ptn(e.env),
    ce = (h, w) => {
      if (h.code === "unavailable" && h.status !== void 0)
        return (
          m(r, "asset_relay_unavailable", { relay_status: h.status }),
          {
            err: `${Ttn(h.status)}. Your access to the artifact itself is fine (the permission check passed); this environment cannot reach ${Y} directly, so its reads go through the gateway.`,
            status: h.status
          }
        );
      return (
        m(r, "asset_egress_blocked", {
          relay: c(h.code),
          ...(h.status !== void 0 && { relay_status: h.status }),
          ...(!w && { connect: !0 })
        }),
        {
          err: `this environment's network allowlist blocks ${Y}, and the session gateway could not serve the read either (${h.why}); your access to the artifact itself is fine (the permission check passed). ${ue}`,
          status: 403,
          ...(w && { deterministic: "egress-blocked" })
        }
      );
    },
    L = async (h) => {
      let w = (C) =>
          Rtn(e.slug, C, {
            token: h,
            timeout: IAr,
            maxContentLength: s === void 0 ? $e : kEe,
            signal: n,
            credentials: a
          }),
        O;
      try {
        if (S !== void 0 && S.fellBack === void 0) {
          let C = await w(S.path).catch((z) => {
            if (Na(z) || z instanceof Ye) throw z;
            return { kind: "answer", status: 0, headers: void 0, data: void 0 };
          });
          if (C.kind === "answer" && C.status === 200)
            return re(Buffer.from(C.data ?? new ArrayBuffer(0)), T9e(C.headers), !0, () =>
              g(r, { ...R(!0), frame_content: !0 })
            );
          if (C.kind === "answer") S.fellBack = C.status;
        }
        O = await w(W);
      } catch (C) {
        if (Na(C) || C instanceof Ye) throw C;
        m(r, "asset_request_error", { frame_content: !0 });
        let z = D5(C),
          oe = Yd(C) && /^[A-Z][A-Z0-9_]{1,48}$/.test(C.code ?? "") ? ` ${C.code}` : "";
        return {
          err: `artifact content fetch failed (${z ? `network error${oe} reaching the artifact service` : "read failed"})`,
          ...(z && { transient: !0 })
        };
      }
      if (O.kind === "declined") {
        if (S !== void 0) S.fellBack = void 0;
        return;
      }
      if (O.status >= 200 && O.status < 300)
        return re(Buffer.from(O.data ?? new ArrayBuffer(0)), T9e(O.headers), !1, () =>
          g(r, { ...R(!1), frame_content: !0 })
        );
      let q = roe(O.headers, O.data, (C) => $ft(C, h));
      if (O.status === 404 && B !== "" && wGt(O.headers, q))
        return (
          f(r, "file_not_in_manifest"),
          {
            err: "this version of the artifact has no file at that path",
            status: 404,
            missingFile: !0
          }
        );
      return (
        m(r, "asset_failed", { frame_content: !0 }),
        {
          err: `artifact content fetch failed (${et(O.status, O.headers, q)})`,
          status: O.status,
          respondent: !0
        }
      );
    },
    fe = (h, w) =>
      Zt(
        {
          slug: e.slug,
          servedPath: W,
          fileRead: s !== void 0,
          feature: r,
          token: h,
          signal: n,
          ...(S !== void 0 && { source: S })
        },
        (O, q, C) => re(O, q, C, () => f(r, w, R(C)))
      );
  if (k !== void 0 && Ctn(T.data)) {
    let h = await L(k);
    if (h !== void 0) return h;
  }
  let ae;
  if (k !== void 0 && Z().contentHostEgressDenied.has(e.env) && Ute() && !m1(Ox)) {
    let h = await fe(k, "asset_egress_relayed");
    if (h.relayed) return h.result;
    ae = h;
  }
  let Pe = void 0,
    Te = Pe ?? `https://${Y}`,
    ut = k === void 0 ? `${Te}${W}` : `${Te}${W}?__frame_t=${encodeURIComponent(k)}`,
    we = async (h) => {
      Z().contentHostEgressDenied.add(e.env);
      let w = Ute();
      if (k !== void 0 && w) {
        if (ae !== void 0) return ce(ae, h);
        if (m1(Ox)) return ce(Qe, h);
        let O = await fe(k, "asset_egress_relayed");
        return O.relayed ? O.result : ce(O, h);
      }
      return (
        m(r, "asset_egress_blocked", { ...(!h && { connect: !0 }) }),
        {
          err:
            k === void 0 && w
              ? `this environment's network allowlist blocks ${Y}, and public (tokenless) artifacts are not served through the session gateway, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}`
              : `this environment's network allowlist blocks ${Y}, so the artifact's content cannot be fetched (your access to the artifact itself is fine \u2014 the permission check passed). ${ue}`,
          status: 403,
          ...(h && { deterministic: "egress-blocked" })
        }
      );
    },
    Ne = (h) =>
      _l.get(h, {
        signal: n,
        timeout: IAr,
        responseType: "arraybuffer",
        maxRedirects: 0,
        maxContentLength: s === void 0 ? $e : kEe,
        validateStatus: () => !0,
        ...(Pe && { headers: { Host: `${e.slug}.frame.localhost` } })
      });
  if (
    S !== void 0 &&
    k !== void 0 &&
    S.fellBack === void 0 &&
    !Z().contentHostEgressDenied.has(e.env)
  ) {
    let h;
    try {
      h = await Ne(`${Te}${S.path}?__frame_t=${encodeURIComponent(k)}`);
    } catch (w) {
      if (Na(w)) throw w;
      if (gCe(w)) return we(!1);
    }
    if (h !== void 0 && uj(h.status, h.headers)) return we(!0);
    if (h !== void 0 && h.status === 200)
      return re(Buffer.from(h.data), h.headers?.["content-type"], !0);
    ((S.fellBack = h?.status ?? 0),
      t(`[artifact] stored-source read fell back (${S.fellBack}) slug=${e.slug}`));
  }
  let D;
  try {
    D = await Ne(ut);
  } catch (h) {
    if (Na(h)) throw h;
    if (gCe(h)) return we(!1);
    let w = OH(h),
      O = w === void 0 ? void 0 : (Pwt(w.headers) ?? ooe(w.headers)),
      q = D5(h),
      C = Yd(h) && /^[A-Z][A-Z0-9_]{1,48}$/.test(h.code ?? "") ? ` ${h.code}` : "",
      z =
        w !== void 0
          ? `proxy refused the connection: ${s6(w.connectStatus)}${O === void 0 ? "" : `, ${O}`}`
          : q
            ? `network error${C}: could not connect to ${Y} on port 443 \u2014 the machine running Claude Code needs outbound HTTPS to ${dt(e.env)} when the Artifact tool is enabled`
            : "read failed",
      oe = (V) =>
        V === void 0 ? "" : `, and the session gateway could not serve the read either (${V.why})`,
      ge = (V) =>
        V !== void 0 && {
          relay: c(V.code),
          ...(V.status !== void 0 && { relay_status: V.status })
        };
    if (w !== void 0 && w.connectStatus === 407)
      return (
        m(r, "asset_proxy_refused", { status: w.connectStatus, ...ge(ae) }),
        {
          err: `artifact content fetch failed (${z})${oe(ae)}`,
          status: w.connectStatus,
          ...(O !== void 0 && {
            respondent: !0,
            safeErr: `artifact content fetch failed (proxy refused the connection: ${s6(w.connectStatus)})${oe(ae)}`
          })
        }
      );
    let Q = ae;
    if (k !== void 0 && Q === void 0 && q && Ute())
      if (m1(Ox)) Q = Qe;
      else {
        let V = await fe(k, "asset_unreachable_relayed");
        if (V.relayed) return V.result;
        Q = V;
      }
    return (
      m(r, "asset_request_error", { ...(w !== void 0 && { status: w.connectStatus }), ...ge(Q) }),
      {
        err: `artifact content fetch failed (${z})${oe(Q)}`,
        ...(q && w === void 0 && { transient: !0 }),
        ...(w !== void 0 && w.connectStatus !== 0 && { status: w.connectStatus }),
        ...(w !== void 0 &&
          O !== void 0 && {
            respondent: !0,
            safeErr: `artifact content fetch failed (proxy refused the connection: ${s6(w.connectStatus)})${oe(Q)}`
          })
      }
    );
  }
  if (uj(D.status, D.headers)) return we(!0);
  if ((Z().contentHostEgressDenied.delete(e.env), D.status < 200 || D.status >= 300)) {
    let h = roe(D.headers, D.data, (O) => $ft(O, k));
    if (D.status === 403 && k === void 0 && ALe(D.headers, h))
      return (
        m(r, "public_asset_forbidden"),
        { err: "artifact is not publicly readable at this version", status: 403 }
      );
    if (D.status === 404 && B !== "" && k !== void 0 && wGt(D.headers, h))
      return (
        f(r, "file_not_in_manifest"),
        {
          err: "this version of the artifact has no file at that path",
          status: 404,
          missingFile: !0
        }
      );
    let w = Yzo(D.status, h);
    return (
      m(r, w ?? "asset_failed"),
      {
        err: `artifact content fetch failed (${et(D.status, D.headers, h)})`,
        status: D.status,
        respondent: !0,
        ...(w !== void 0 && { safeErr: xwt[w], proxyDeny: w })
      }
    );
  }
  return re(Buffer.from(D.data), D.headers?.["content-type"], !1);
}
function et(e, n, r) {
  let s = [`HTTP ${e}`],
    a = ooe(n);
  if (a === void 0 && r.reason !== void 0)
    s.push(`response body: "${Kl(r.reason.replaceAll('"', "'"))}"`);
  else if (a !== void 0) s.push(`the environment's egress proxy reported: ${a}`);
  else if (r.proxyError !== void 0)
    s.push(`x-proxy-error header: "${Kl(r.proxyError.replaceAll('"', "'"))}"`);
  if (r.requestId !== void 0) s.push(`x-request-id: ${r.requestId}`);
  return s.join("; ");
}
function Nte(e) {
  return e.respondent
    ? (e.safeErr ?? `artifact content fetch failed (HTTP ${e.status ?? "error"})`)
    : e.err;
}
function $ft(e, n) {
  let r = e.replace(
    /(?:_|%(?:25)*5f){2}frame(?:_|%(?:25)*5f)t(?:=|%(?:25)*3d)["']?[^\s&"'<>]*/gi,
    "__frame_t=[redacted]"
  );
  if (n !== void 0 && n !== "") {
    r = nt(r, n, "g");
    let s = encodeURIComponent(n);
    if (s !== n) r = nt(r, s, "gi");
  }
  return r;
}
var Oe = 16,
  tt = /[A-Za-z0-9._~%-]/;
function nt(e, n, r) {
  if (n.length <= Oe) return e.replaceAll(n, "[redacted]");
  let s = new Set();
  for (let y = 0; y + Oe <= n.length; y++) s.add(di(n.slice(y, y + Oe)));
  let a = new RegExp(`(?:${[...s].join("|")})${tt.source}*`, r),
    l = "",
    d = 0;
  for (let y of e.matchAll(a)) {
    let b = y.index;
    while (b > d && tt.test(e.charAt(b - 1))) b--;
    ((l += `${e.slice(d, b)}[redacted]`), (d = y.index + y[0].length));
  }
  return l + e.slice(d);
}
export {
  mSo,
  vAr,
  cK,
  _9e,
  oO,
  PT,
  yD,
  u1n,
  Vae,
  wtn,
  EAr,
  w4,
  VRs,
  qRs,
  b9e,
  EEe,
  S9e,
  w9e,
  gSo,
  yJ,
  hSo,
  ySo,
  YRs,
  kHt,
  _So,
  vtn,
  XRs,
  JRs,
  f1n,
  QRs,
  Etn,
  kAr,
  gw,
  ZRs,
  bSo,
  Dft,
  exs,
  txs,
  SSo,
  wSo,
  vSo,
  Lte,
  p1n,
  TAr,
  ESo,
  E1e,
  m1n,
  nxs,
  rxs,
  AAr,
  g1n,
  CAr,
  DF,
  h1n,
  RAr,
  IT,
  xme,
  Hft,
  v4,
  v9e,
  E9e,
  ktn,
  oxs,
  sxs,
  ixs,
  xAr,
  y1n,
  wP,
  axs,
  g3,
  lxs,
  Pme,
  kSo,
  Lft,
  THt,
  kEe,
  k9e,
  Ttn,
  Atn,
  Ctn,
  Rtn,
  T9e,
  PAr,
  TSo,
  ASo,
  CSo,
  RSo,
  IAr,
  xtn,
  Ptn,
  sO,
  Nft,
  dxs,
  Nte,
  $ft
};

//# sourceMappingURL=chunk-v3dqhn7m.js.map
