// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { AR } from "./chunk-dc0nzty2.js";
import { _t, l } from "./chunk-ewvf3tep.js";
import { Zye } from "./chunk-h6j5xbav.js";
import { b, c } from "./chunk-acd8w9vv.js";
import { E, Er, tw } from "./chunk-fs43t96t.js";
import { Kt } from "./chunk-6bbdndfe.js";
import { q, gts, vYt, kX, WSe, J, Il } from "./chunk-wrtp8qz8.js";
import { X, UI } from "./chunk-4hww8411.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { WS, gEt, il, vue, j_n, oKt, M0e, D0e, kn, k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { Y } from "./chunk-arw2bgak.js";
import { sP } from "./chunk-jtb5bzvb.js";
import { aP, PM, Dn } from "./chunk-qywdxehb.js";
import { _r, We } from "./chunk-pgnjjhxv.js";
import { dC } from "./chunk-7c3thgax.js";
import { oa } from "./chunk-7zgz07kc.js";
import { M9n, Rre, z5s } from "./chunk-nahqyybs.js";
import { F5s } from "./chunk-wdvpwq3x.js";
import { nce, Are } from "./chunk-8ydpj4c7.js";
import { Vut } from "./chunk-1qnzd4ya.js";
import { H8e, CFn, RFn, xFn, Vkr, Tte, qkr } from "./chunk-220dv0wx.js";
import { Sx, NE, Fk, h$ } from "./chunk-nyp7c93y.js";
import { _x, Dfn } from "./chunk-7faha9cq.js";
import { oUo } from "./chunk-mb8tf9mz.js";
import { gK } from "./chunk-9kh63k93.js";
import { hHe } from "./chunk-6a9zzk1k.js";
import { yx, q3n, B$o, d4s } from "./chunk-1ky5r8qb.js";
import { Ca } from "./chunk-87f056s4.js";
import { oSn, sNe } from "./chunk-0np0053t.js";
import { et } from "./chunk-c9re0p40.js";
import { Zm, vt } from "./chunk-dsrz10z8.js";
import { Ds } from "./chunk-tdv74tcm.js";
import { z } from "./chunk-p197ae0z.js";
import { randomUUID as ve } from "crypto";
import { link as Ze, lstat as Qe, realpath as tt, unlink as nt } from "fs/promises";
import { dirname as it, join as Me } from "path";
import { extname as Re } from "path";
function gCs(e) {
  return Re(e).toLowerCase().slice(1) !== "" && !sNe(e) && !hHe(e) && !sP(e);
}
function Iyo(e) {
  return q3n("", H8e(e.file_name));
}
function uDt(e) {
  let i = 0,
    r = 0,
    n = 0,
    _ = 0,
    a = 0,
    s = 0;
  for (let p of e) {
    if (p.is_image === !0) continue;
    let y = Iyo(p),
      o = p.sha256 === void 0;
    if (oSn.has(Re(y).toLowerCase().slice(1))) i++;
    else if (sNe(y)) {
      if ((r++, o)) s++;
    } else if (hHe(y)) {
      if ((n++, o)) (a++, s++);
    } else _++;
  }
  let u = e.length > 0;
  return {
    binary_ext_file_count: n,
    pdf_file_count: r,
    text_like_file_count: _,
    image_ext_file_count: i,
    all_files_binary_ext_no_sha256: u && a === e.length ? 1 : 0,
    all_files_binary_ext_or_pdf_no_sha256: u && s === e.length ? 1 : 0
  };
}
var rt = 30000,
  Se = 36700160,
  Be = { startsTurn: 3, noTurn: 2 },
  Ae = 1e4,
  be = 250,
  ot = 1000,
  He = 25000,
  Pe = 16,
  at = 20,
  st = 64,
  dt = 16;
function $e() {
  return (Il() ? 16 : 64) * 1024 * 1024;
}
var je = 300000,
  ut = 60000,
  xe = { min: 15000, max: je },
  lt = 3,
  ft = "x-anthropic-attachment-prefetch",
  De = { name: "x-anthropic-attachment-prefetch-seen", value: "1" },
  ct = 409,
  mt = 64,
  ht = 300000,
  gt = 32,
  pt = 60000,
  bt = {
    no_token: "failed_no_token_count",
    http_status: "failed_http_status_count",
    too_large: "failed_too_large_count",
    held_limit: "failed_held_limit_count",
    stalled: "failed_stalled_count",
    stopped: "failed_stopped_count",
    error: "failed_error_count"
  },
  wt = { override: !0, payload: !0, disk: !0, disabled: !1, fallback: !1 },
  yt = {
    no_token: 1,
    http_status: 2,
    too_large: 3,
    held_limit: 4,
    stalled: 5,
    stopped: 6,
    error: 7
  },
  At = 8,
  kt = 9;
function x(e) {
  t(`[bridge:inbound-attach] ${e}`);
}
async function ke(e, i) {
  try {
    let r = await Qe(e);
    if (!r.isFile()) return "other";
    if (r.size !== i.length) return "changed";
  } catch (r) {
    let n = E(r);
    if (n === "ENOENT" || n === "ENOTDIR") return "absent";
    return (x(`could not look at ${e}: ${r}`), "unknown");
  }
  return (await Tte(e, i.length))?.equals(i) ? "same" : "changed";
}
async function Ct(e, i, r, n, _, a, s, u, p, y, o = !1, d, C = !1) {
  let S = M0e(ye().recoveries),
    A = p?.accessToken ?? (z() && u !== void 0 ? await Fk(u) : NE());
  if (!A) return (x("skip: no oauth token"), _e(n, "no_token", 0));
  let I = A,
    h,
    N,
    M,
    v = !1,
    O = 0,
    R = _;
  try {
    let T = e.sha256 === void 0 ? Se : nce;
    if (typeof e.file_size === "number" && e.file_size > T) return _e(n, "too_large", 0);
    let w = Fe(p),
      F = Kut(e.file_uuid, p);
    if (
      w !== void 0 &&
      F !== void 0 &&
      F.bearer === et(A) &&
      F.size <= T &&
      (e.sha256 === void 0 || e.sha256 === F.sha256)
    ) {
      let G = await Tte(F.path, F.size);
      if (G !== null && et(G) === F.sha256)
        ((h = G), (N = F.sha256), (M = F.path), n.reusedFileCount++);
      else if (w.get(ne(e.file_uuid)) === F) w.delete(ne(e.file_uuid));
    }
    let D = vYt(),
      j = ne(e.file_uuid);
    D.refusedEarly?.delete(j);
    let B = h === void 0 && p === void 0 && d === void 0 ? D.byFileUuid.get(j) : void 0;
    while (B !== void 0) {
      let G = performance.now(),
        me = Pt(B, G, et(A)),
        ee = B.settledAt === void 0,
        pe = B.startedBy === "prefetch",
        te = await B.bytes,
        he = performance.now() - G;
      if (((O += he), pe && ee)) {
        if (
          (n.joinedInFlightCount++,
          (n.slowestJoinWaitMs = Math.max(n.slowestJoinWaitMs, he)),
          B.headersTimedOut)
        )
          R = Math.max(1, _ - 1);
      }
      let ue = B.bearer === et(A),
        K =
          te !== null &&
          ue &&
          te.length <= T &&
          (typeof e.sha256 !== "string" || xFn(te, { sha256: e.sha256, file_size: e.file_size }));
      if (K) {
        if (p === void 0) D0e(ye(), S);
        ((h = te), (v = !0));
      } else if (te === null && ee && ue && Ge(B, G))
        return _e(n, B.failure ?? "error", B.receivedBytes);
      if (pe && te !== null) {
        if (K) n.prefetchedFileCount++;
        if (me) xt(B, te, { inFlight: ee, passes: K, sameBearer: ue, waitedMs: he });
      }
      let oe = h === void 0 ? D.byFileUuid.get(j) : void 0;
      B = oe !== B && oe?.startedBy === "message" && oe.bearer === et(A) ? oe : void 0;
    }
    if (h === void 0) {
      let G = new AbortController(),
        me = () => G.abort();
      if ((d?.addEventListener("abort", me, { once: !0 }), d?.aborted)) me();
      let ee,
        pe = 0,
        te = {
          fileUuid: e.file_uuid,
          baseUrl: p?.baseUrl,
          forPrefetch: !1,
          maxBytes: T,
          token: () => I,
          admitBytes: (K) => {
            if (((pe = K), ee !== void 0)) ee.receivedBytes = K;
            return !0;
          }
        },
        he = Ue(R, O, G, n, te)
          .then(async (K) => {
            if (p !== void 0 || !("failure" in K) || K.httpStatus !== 401 || Sx() !== void 0)
              return K;
            let oe = await Dt(I, u, s, G.signal, a, n);
            if (oe === void 0) return K;
            if (((I = oe.bearer), (S = oe.stamp), ee !== void 0)) ee.bearer = et(oe.bearer);
            n.retriedAfter401Count++;
            let Ee = await Ue(1, 0, G, n, te);
            if (!("failure" in Ee)) n.recoveredFileCount++;
            return Ee;
          })
          .catch((K) => (l(K), { failure: "error" }));
      if (p === void 0 && d === void 0 && Je().value)
        ((ee = qe("message", G, he, et(A))), D.byFileUuid.set(j, ee));
      let ue = await he;
      if ((d?.removeEventListener("abort", me), "failure" in ue))
        return _e(n, ue.failure, pe, ue.httpStatus);
      if (p === void 0) (D0e(ye(), S), gEt());
      h = ue.data;
    }
  } catch (T) {
    return (x(`fetch ${e.file_uuid} threw: ${T}`), _e(n, "error", 0));
  }
  if (typeof e.sha256 === "string" && !v && !xFn(h, { sha256: e.sha256, file_size: e.file_size }))
    return (
      x(`fetch ${e.file_uuid} failed integrity verification`),
      { failure: "digest_mismatch" }
    );
  let P = { resizeMs: 0, pngPaletteMs: 0, byteBudgetMs: 0 },
    V = performance.now(),
    W =
      r && e.is_image === !0 && e.sha256 === void 0
        ? await F5s(h, AR, { timings: P }).catch(
            (T) => (x(`inline ${e.file_uuid} threw: ${T}`), null)
          )
        : null;
  if (
    ((n.slowestInlineImageBuildMs = Math.max(n.slowestInlineImageBuildMs, performance.now() - V)),
    (n.slowestInlineImageResizeMs = Math.max(n.slowestInlineImageResizeMs, P.resizeMs)),
    (n.slowestInlineImagePngPaletteMs = Math.max(n.slowestInlineImagePngPaletteMs, P.pngPaletteMs)),
    (n.slowestInlineImageByteBudgetMs = Math.max(n.slowestInlineImageByteBudgetMs, P.byteBudgetMs)),
    W && Rre(h) === "image/png")
  ) {
    if ((n.inlinedPngSourceCount++, z5s(h))) n.inlinedPngSourceMaybeTransparentCount++;
    if (W.source.type === "base64" && W.source.media_type === "image/jpeg")
      n.inlinedPngSourceSentAsJpegCount++;
  }
  let le = W ? `image.${M9n[Rre(h)]}` : H8e(e.file_name),
    ge = C
      ? B$o(e.file_uuid)
      : (W ? ve().slice(0, 8) : e.file_uuid.slice(0, 8) || ve().slice(0, 8)).replace(
          /[^a-zA-Z0-9_-]/g,
          "_"
        ),
    ae = y ?? yx(),
    ie = q3n(ge, le),
    L = Me(ae, ie),
    fe = q(),
    re = o && e.sha256 === void 0 && kX() === null && !J(),
    ce = !o || e.sha256 !== void 0 ? "absent" : M === L ? "same" : re ? await ke(L, h) : "absent";
  if (d?.aborted) return _e(n, "stopped", 0);
  let se = performance.now(),
    Z,
    Q,
    U;
  if (ce === "same") n.unchangedOnDiskCount++;
  else if (ce === "changed" || ce === "unknown") n.keptChangedFileCount++;
  else if (
    z() &&
    s !== void 0 &&
    _r(fe) &&
    _r(ie) &&
    (y === void 0 || y === yx()) &&
    (kX() !== null || WSe() === null)
  ) {
    let T = await s.write(
      We.userConfigDir("uploads", [fe, ie]),
      h,
      re ? { mode: 384, precondition: { type: "ifAbsent" } } : { mode: 384 }
    );
    if (re && !T.ok && T.error.code === "AlreadyExists") Q = b("storage_backend");
    else if (!T.ok)
      ((Z = vt(T.error)),
        (n.lastFailedWrite = {
          code: tw(Zm(T.error)) ?? c(T.error.code),
          step: b("storage_backend")
        }));
  } else if (J())
    (dC("inbound_attachment", L),
      (Z = "refused: this session is diskless and writes no files to this machine's disk"),
      (n.lastFailedWrite = { code: b("diskless"), step: b("refused") }));
  else {
    let T = b("mkdir");
    try {
      let w = await Vut(ae);
      try {
        if (d?.aborted) return _e(n, "stopped", 0);
        T = b("write");
        let F = Me(w.at, ie),
          D = !re;
        if (re) {
          let j = await PM(F, h, 384);
          try {
            (await Ze(j, F), n.linkedFileCount++);
          } catch (B) {
            if (E(B) === "EEXIST") Q = b("link");
            else {
              if (
                (x(
                  `link(2) failed for ${ie} (${B}); looking at the name again, to rename into it only if it is free`
                ),
                (U = await ke(F, h)),
                U === "unknown")
              )
                throw ((T = b("look_after_link")), B);
              ((D = U === "absent"), (Q = D ? void 0 : b("link")));
            }
          } finally {
            await aP(() => nt(j)).catch((B) => {
              (x(`the staged name of ${ie} could not be removed: ${B}`), n.stagedNameLeftCount++);
            });
          }
        }
        if (D) {
          if ((await Dn(F, h, 384), re)) n.renamedAfterLinkRefusedCount++;
        }
      } finally {
        await w.release();
      }
    } catch (w) {
      ((Z = `${w}`), (n.lastFailedWrite = { code: Er(w) ?? b("unknown"), step: T }));
    }
  }
  if (Q !== void 0 && Z === void 0)
    if (((U ??= await ke(L, h)), U === "same")) n.unchangedOnDiskCount++;
    else if (U === "changed" || U === "unknown") n.keptChangedFileCount++;
    else
      ((Z =
        "not saved: something that is not a regular file (a link, a pipe or a folder) has this name and was left as it is, or what had the name was gone when checked again"),
        (n.lastFailedWrite = { code: b("EEXIST"), step: Q }));
  if (((n.slowestWriteMs = Math.max(n.slowestWriteMs, performance.now() - se)), Z !== void 0)) {
    if ((x(`write ${L} failed: ${Z}`), n.failedWriteCount++, W))
      return (n.inlinedImageNotSavedCount++, { imageBlock: W });
    return { failure: "write" };
  }
  let H = performance.now();
  if (
    ((N ??= et(h)),
    (n.slowestHashAfterWriteMs = Math.max(n.slowestHashAfterWriteMs, performance.now() - H)),
    i && e.sha256 === void 0 && kX() === null)
  )
    try {
      d4s(await tt(L), N);
    } catch {
      x(`registration skipped for ${L}`);
    }
  let de = Fe(p);
  if (de !== void 0) {
    if ((de.delete(ne(e.file_uuid)), de.size >= st)) {
      let T = de.keys().next().value;
      if (T !== void 0) de.delete(T);
    }
    de.set(ne(e.file_uuid), { path: L, size: h.length, sha256: N, bearer: et(I) });
  }
  if ((x(`resolved ${e.file_uuid} \u2192 ${L} (${h.length} bytes)`), W))
    return (x(`inlined ${e.file_uuid} (${h.length} bytes)`), { imageBlock: W, path: L });
  if (r && e.is_image === !0 && e.sha256 === void 0)
    return (x(`inline ${e.file_uuid} fell back to @path ref`), { path: L, inlineFellBack: !0 });
  return { path: L };
}
var It = {
  download: "it could not be downloaded",
  digest_mismatch: "it failed integrity verification",
  write: "it could not be written to the uploads directory"
};
async function Kkr(e, i, r, n, _, a, s, u, p, y, o = !0, d = !1) {
  if (e.length === 0)
    return { prefix: "", imageBlocks: [], inlinedImagePaths: [], deliveredCount: 0 };
  x(`resolving ${e.length} attachment(s)`);
  let C = vYt().refusedEarly;
  if (C !== void 0 && C.size > 0) for (let w of e) C.delete(ne(w.file_uuid));
  let S = performance.now(),
    A = {
      slowestTimeToHeadersMs: 0,
      slowestDownloadMs: 0,
      slowestJoinWaitMs: 0,
      slowestInlineImageBuildMs: 0,
      slowestInlineImageResizeMs: 0,
      slowestInlineImagePngPaletteMs: 0,
      slowestInlineImageByteBudgetMs: 0,
      slowestWriteMs: 0,
      slowestHashAfterWriteMs: 0,
      downloadedBytes: 0,
      downloadTryCount: 0,
      recoveredFileCount: 0,
      retriedAfter401Count: 0,
      slowest401RefreshWaitMs: 0,
      failedWriteCount: 0,
      inlinedImageNotSavedCount: 0,
      unchangedOnDiskCount: 0,
      keptChangedFileCount: 0,
      linkedFileCount: 0,
      renamedAfterLinkRefusedCount: 0,
      stagedNameLeftCount: 0,
      reusedFileCount: 0,
      prefetchedFileCount: 0,
      joinedInFlightCount: 0,
      inlinedPngSourceCount: 0,
      inlinedPngSourceMaybeTransparentCount: 0,
      inlinedPngSourceSentAsJpegCount: 0,
      failedDownloads: {}
    },
    I = e.filter((w) => typeof w.sha256 === "string"),
    h = Ye(e);
  if (!(a?.accessToken ?? (z() && _ !== void 0 ? await Fk(_) : NE()))) {
    x("skip: no oauth token");
    let w = { ...Le(e.slice(0, h), 0, 0, A, S), ...Ne(p, u) };
    (f("bridge_attachment_resolve", "no_token", w),
      Y("warn", "bridge_attachment_download_timing", {
        outcome: "no_token",
        should_query: s,
        ...w
      }));
    let F = qBe(
      e.filter((D) => typeof D.sha256 !== "string"),
      "no_token"
    );
    if (I.length > 0) {
      let D = I.length - Are,
        j = D > 0 ? I.slice(0, Are) : I;
      Vkr("bridge", j.length, 0);
      let B = D > 0 ? " " + RFn(D) : "";
      return {
        prefix:
          j.map((me) => CFn(me.file_name, "it could not be downloaded (not signed in)")).join(" ") +
          B +
          (F.length > 0 ? " " + Ie(F.length, F.length) : "") +
          " ",
        imageBlocks: [],
        inlinedImagePaths: [],
        deliveredCount: 0,
        ...(F.length > 0 && { missingFiles: F })
      };
    }
    return {
      prefix: Ie(F.length, F.length) + " ",
      imageBlocks: [],
      inlinedImagePaths: [],
      deliveredCount: 0,
      missingFiles: F
    };
  }
  let M = [],
    v = e,
    O = v.length > h;
  if (O) {
    if ((x(`dropping ${v.length - h} attachment(s) over the ${h} cap`), I.length > 0))
      M.push(RFn(v.length - h));
    v = v.slice(0, h);
  }
  let R = i && r,
    P = a === void 0 && y === void 0,
    V = P && v.length > Pe,
    W = Ca(Pe, (w) =>
      Ct(w, i, R, A, s === !1 ? Be.noTurn : Be.startsTurn, o, n, _, a, u, s === !1, y, d).finally(
        () => {
          if (V) Oe(w);
        }
      )
    ),
    le;
  try {
    le = await Promise.all(v.map((w) => W(w)));
  } finally {
    for (let w of P ? v : []) Oe(w);
  }
  let ge = [],
    ae = [],
    ie = [],
    L = 0,
    fe = 0,
    re = 0,
    ce = !1,
    se = [],
    Z = [];
  if (
    (le.forEach((w, F) => {
      let D = v[F],
        j = typeof D.sha256 === "string";
      if (j) fe++;
      if ("path" in w) Z.push({ file_uuid: D.file_uuid, path: w.path, inlined: "imageBlock" in w });
      if ("imageBlock" in w) {
        if ((ae.push(w.imageBlock), "path" in w)) ie.push(w.path);
      } else if ("path" in w) {
        if ((ge.push(`@"${w.path}"`), w.inlineFellBack)) L++;
        if (j) re++;
      } else {
        if (w.failure === "digest_mismatch") ce = !0;
        if (j) M.push(CFn(D.file_name, It[w.failure]));
        else
          se.push({
            file_uuid: D.file_uuid,
            reason: w.failure === "write" ? "write" : (w.cause ?? "download")
          });
      }
    }),
    se.length > 0)
  ) {
    let w = I.length === 0 ? e.slice(h) : [];
    (se.push(...qBe(w, "count_cap")), M.push(Ie(se.length, v.length - fe + w.length)));
  }
  if (fe > 0) Vkr("bridge", fe, re);
  let Q = ge.length + ae.length,
    U = { ...Le(v, Q, ae.length, A, S), ...Ne(p, u) },
    H;
  if (Q === 0) ((H = ce ? "digest_mismatch" : "all_failed"), m("bridge_attachment_resolve", H, U));
  else if (Q < v.length)
    ((H = ce ? "digest_mismatch" : "partial_failed"), f("bridge_attachment_resolve", H, U));
  else if (O) ((H = "over_count_cap"), f("bridge_attachment_resolve", H, U));
  else if (A.inlinedImageNotSavedCount > 0)
    ((H = "inlined_image_not_saved"), f("bridge_attachment_resolve", H, U));
  else ((H = "ok"), g("bridge_attachment_resolve", U));
  let de = (H !== "ok" && H !== "over_count_cap") || A.failedWriteCount > 0;
  if (
    (Y(de ? "warn" : "info", "bridge_attachment_download_timing", {
      outcome: H,
      should_query: s,
      ...U
    }),
    L > 0)
  )
    f("bridge_attachment_inline_image", "fallback_path_ref");
  else if (ae.length > 0) g("bridge_attachment_inline_image");
  let T = [...ge, ...M];
  return {
    prefix: T.length > 0 ? T.join(" ") + " " : "",
    imageBlocks: ae,
    inlinedImagePaths: A.inlinedImageNotSavedCount > 0 ? [] : ie,
    deliveredCount: Q,
    ...(se.length > 0 && { missingFiles: se }),
    ...(Z.length > 0 && { writtenFiles: Z }),
    timing: {
      timeToHeadersMs: Math.round(A.slowestTimeToHeadersMs),
      downloadMs: Math.round(A.slowestDownloadMs),
      joinWaitMs: Math.round(A.slowestJoinWaitMs),
      imageBuildMs: Math.round(A.slowestInlineImageBuildMs),
      approxDownloadedBytes: Number(A.downloadedBytes.toPrecision(2)),
      prefetchedFileCount: A.prefetchedFileCount
    }
  };
}
function ze(e, i) {
  if (!i) return e;
  if (typeof e === "string") return qkr(e, i);
  let r = e.findLastIndex((n) => n.type === "text");
  if (r !== -1) {
    let n = e[r];
    if (n.type === "text")
      return [...e.slice(0, r), { ...n, text: qkr(n.text, i) }, ...e.slice(r + 1)];
  }
  return [...e, { type: "text", text: i.trimEnd() }];
}
function Mt(e, i) {
  if (i.length === 0) return e;
  let r = typeof e === "string" ? (e.trim() === "" ? [] : [{ type: "text", text: e }]) : oUo(e);
  return [...i, ...r];
}
function qBe(e, i) {
  return e.map((r) => ({ file_uuid: r.file_uuid, reason: i }));
}
function fDt(e, i, r, n = !1) {
  let _ = _x(e);
  if (_.length === 0 || _.length > Ye(_)) return;
  let a = [];
  for (let u of _) {
    let p = n ? B$o(u.file_uuid) : u.file_uuid.slice(0, 8).replace(/[^a-zA-Z0-9_-]/g, "_");
    if (p === "") return;
    let y = q3n(p, H8e(u.file_name));
    a.push(Me(r, y));
  }
  let s = a.map((u) => `@"${u}"`);
  return { content: ze(i ?? "", s.join(" ") + " "), refs: s, paths: a };
}
async function qZt(e, i, r, n, _, a, s, u = !0, p = !1) {
  let y = i ?? "",
    o = _x(e);
  if (o.length === 0) return { content: y, inlinedImagePaths: [] };
  let d = r && !(typeof y === "string" && Zye(y)),
    {
      prefix: C,
      imageBlocks: S,
      deliveredCount: A,
      ...I
    } = await Kkr(o, r, d, n, _, void 0, Dfn(e), a, s, void 0, u, p);
  if (A === 0 && typeof y === "string" && y.trim() === "") return { content: C.trimEnd(), ...I };
  return { content: Mt(ze(y, C), S), ...I };
}
function Oe(e) {
  let i = vYt(),
    r = ne(e.file_uuid),
    n = i.byFileUuid.get(r);
  if (n?.taken !== void 0 && n.settledAt !== void 0) i.byFileUuid.delete(r);
}
function Ye(e) {
  return e.every((i) => i.sha256 === void 0) ? at : Are;
}
function Oyo(e) {
  if (!e || k("tengu_amber_ferry", !1) !== !0) return "off";
  return k("tengu_slate_marten", !1) === !0 ? "on_with_pdfs" : "on";
}
function Ne(e, i) {
  return e === void 0
    ? {}
    : {
        ahead_of_files_flag_on: e === "off" ? 0 : 1,
        ahead_of_files_on_with_pdfs: e === "on_with_pdfs" ? 1 : 0,
        queued_ahead_of_files: i === void 0 ? 0 : 1
      };
}
function Le(e, i, r, n, _) {
  return {
    file_count: e.length,
    resolved_count: i,
    download_try_count: n.downloadTryCount,
    recovered_file_count: n.recoveredFileCount,
    reused_file_count: n.reusedFileCount,
    prefetched_file_count: n.prefetchedFileCount,
    joined_in_flight_count: n.joinedInFlightCount,
    inlined_image_count: r,
    ...uDt(e),
    inlined_png_source_count: n.inlinedPngSourceCount,
    inlined_png_source_maybe_transparent_count: n.inlinedPngSourceMaybeTransparentCount,
    inlined_png_source_sent_as_jpeg_count: n.inlinedPngSourceSentAsJpegCount,
    approx_downloaded_bytes: Number(n.downloadedBytes.toPrecision(2)),
    duration_ms: Math.round(performance.now() - _),
    slowest_time_to_headers_ms: Math.round(n.slowestTimeToHeadersMs),
    slowest_download_ms: Math.round(n.slowestDownloadMs),
    slowest_join_wait_ms: Math.round(n.slowestJoinWaitMs),
    slowest_inline_image_build_ms: Math.round(n.slowestInlineImageBuildMs),
    slowest_inline_image_resize_ms: Math.round(n.slowestInlineImageResizeMs),
    slowest_inline_image_png_palette_ms: Math.round(n.slowestInlineImagePngPaletteMs),
    slowest_inline_image_byte_budget_ms: Math.round(n.slowestInlineImageByteBudgetMs),
    slowest_write_ms: Math.round(n.slowestWriteMs),
    slowest_hash_after_write_ms: Math.round(n.slowestHashAfterWriteMs),
    ...n.failedDownloads,
    ...(n.retriedAfter401Count > 0 && { retried_after_401_count: n.retriedAfter401Count }),
    ...(n.slowest401RefreshWaitMs > 0 && {
      slowest_401_refresh_wait_ms: Math.round(n.slowest401RefreshWaitMs)
    }),
    ...(n.failedWriteCount > 0 && { failed_write_count: n.failedWriteCount }),
    ...(n.inlinedImageNotSavedCount > 0 && {
      inlined_image_not_saved_count: n.inlinedImageNotSavedCount
    }),
    ...(n.lastFailedWrite !== void 0 && {
      last_failed_write_code: n.lastFailedWrite.code,
      last_failed_write_step: n.lastFailedWrite.step
    }),
    ...(n.unchangedOnDiskCount > 0 && { unchanged_on_disk_count: n.unchangedOnDiskCount }),
    ...(n.keptChangedFileCount > 0 && { kept_changed_file_count: n.keptChangedFileCount }),
    ...(n.linkedFileCount > 0 && { linked_file_count: n.linkedFileCount }),
    ...(n.renamedAfterLinkRefusedCount > 0 && {
      renamed_after_link_refused_count: n.renamedAfterLinkRefusedCount
    }),
    ...(n.stagedNameLeftCount > 0 && { staged_name_left_count: n.stagedNameLeftCount })
  };
}
var Ft = new Set([404, 410]);
function _e(e, i, r, n) {
  let _ = e.failedDownloads,
    a = bt[i];
  if (((_[a] = (_[a] ?? 0) + 1), r > 0)) _.partway_failed_count = (_.partway_failed_count ?? 0) + 1;
  if (n !== void 0) _.last_failed_http_status = n;
  if (i === "too_large" || i === "no_token") return { failure: "download", cause: i };
  return { failure: "download", ...(i === "http_status" && Ft.has(n) && { cause: "not_found" }) };
}
function Fe(e) {
  return e === void 0 && kX() === null ? gts() : void 0;
}
function Kut(e, i) {
  let r = Fe(i)?.get(ne(e));
  return r !== void 0 && it(r.path) === yx() ? r : void 0;
}
function ne(e) {
  return Kt(e) === null ? e : e.toLowerCase();
}
function Je() {
  return kn("tengu_dapper_brooks", !1);
}
function Xe() {
  return k("tengu_twinkling_hoare", !1) === !0;
}
function St() {
  let e = k("tengu_hazel_lantern", 0),
    i = Il(),
    r = i ? ut : xe.max;
  if (typeof e !== "number" || !(e > 0)) return { ms: r, repeatRenews: !1 };
  return { ms: Math.min(r, Math.max(xe.min, Math.round(e * 1000))), repeatRenews: !i };
}
function Myo(e, { issuedAt: i, credentials: r, onlyThese: n = !1 }) {
  if (_t()) return 0;
  let _ = Je();
  if (!_.value)
    return (
      Zve("bridge_attachment_prefetch_flag_off", {
        file_count: e.length,
        flag_served: wt[_.source]
      }),
      0
    );
  let a = vYt(),
    s = St(),
    u = {
      file_count: e.length,
      started_count: 0,
      already_present_count: 0,
      held_limit_count: 0,
      start_budget_count: 0,
      skipped_count: 0
    },
    p = 0,
    y = 0,
    o = 0,
    d = 0;
  if (a.earlyReadsStopped === !0 && !Xe())
    ((a.earlyReadsStopped = void 0), (a.earlyReadsStopReported = void 0));
  let C = a.earlyReadsStopped === !0,
    S = new Set(),
    A = Date.now() - i,
    I = A > Math.max(lt * s.ms, je),
    h = I ? [] : e.slice(0, Are);
  if (((u.skipped_count = e.length - h.length), n && !I)) {
    let O = new Set(e.map((R) => ne(R.file_uuid)));
    for (let [R, P] of a.byFileUuid)
      if (!O.has(R) && P.release !== void 0 && !P.taken) (P.release("dropped_unused"), y++);
  }
  for (let O of h) {
    let R = ne(O.file_uuid);
    if (Kt(O.file_uuid) === null || (O.file_size !== void 0 && O.file_size > Se)) {
      u.skipped_count++;
      continue;
    }
    let P = a.refusedEarly?.get(R);
    if (P !== void 0) {
      if (performance.now() - P < ht) {
        o++;
        continue;
      }
      a.refusedEarly?.delete(R);
    }
    let V = a.byFileUuid.get(R);
    if (V !== void 0 || Kut(O.file_uuid, void 0) !== void 0) {
      if (
        (u.already_present_count++,
        s.repeatRenews && V?.release !== void 0 && !V.taken && !S.has(R))
      )
        (we(V, s.ms), S.add(R), p++);
      continue;
    }
    if (C) {
      d++;
      continue;
    }
    let W = Tt(O.file_size),
      le = Et(a, W);
    if (le === "held_limit") u.held_limit_count++;
    else if (le === "start_budget") u.start_budget_count++;
    else (Bt(a, R, O.file_uuid, W, r, s.ms, s.repeatRenews), S.add(R), u.started_count++);
  }
  let N = Te(a),
    M = {
      ...u,
      age_ms: Math.round(A),
      held_file_count: N.count,
      approx_held_bytes: Number(N.bytes.toPrecision(2)),
      ...(s.repeatRenews && {
        hold_ms: s.ms,
        refreshed_count: p,
        renewed_since_last_report: a.renewalsNotYetReported ?? 0
      }),
      ...(n && { only_these: !0, dropped_count: y }),
      ...(o > 0 && { refused_before_count: o }),
      ...(d > 0 && { early_reads_stopped_count: d })
    },
    v = a.earlyReadsStopReported === !0 ? d : 0;
  if (p + o + v > 0 && p === u.already_present_count && u.file_count === p + o + v && y === 0)
    return ((a.renewalsNotYetReported = (a.renewalsNotYetReported ?? 0) + p), 0);
  if (((a.renewalsNotYetReported = 0), d > 0)) a.earlyReadsStopReported = !0;
  if (I) f("bridge_attachment_prefetch", "stale", M);
  else if (d > 0) f("bridge_attachment_prefetch", "mark_unseen_stop", M);
  else if (u.held_limit_count > 0) f("bridge_attachment_prefetch", "held_limit", M);
  else if (u.start_budget_count > 0) f("bridge_attachment_prefetch", "start_budget", M);
  else g("bridge_attachment_prefetch", M);
  return (
    Zve(
      u.started_count > 0
        ? "bridge_attachment_prefetch_started"
        : "bridge_attachment_prefetch_not_started",
      { ...M, stale: I }
    ),
    u.started_count
  );
}
function Zve(e, i) {
  Y("info", e, i);
}
function Tt(e) {
  return e !== void 0 && e > 0 ? e : 0;
}
function Et(e, i) {
  let r = performance.now(),
    n = e.recentPrefetchStarts;
  while (n.length > 0 && r - n[0] >= pt) n.shift();
  let _ = Te(e);
  if (_.count >= dt || _.bytes + i > $e()) return "held_limit";
  return n.length < gt ? "ok" : "start_budget";
}
function Te(e) {
  let i = 0,
    r = 0;
  for (let n of e.byFileUuid.values())
    if (n.startedBy === "prefetch" && !n.taken)
      (i++,
        (r += n.settledAt === void 0 ? Math.max(n.receivedBytes, n.statedBytes) : n.receivedBytes));
  return { count: i, bytes: r };
}
function Rt(e) {
  e.release?.("expired_unused");
}
function we(e, i) {
  (clearTimeout(e.expiry), (e.expiry = setTimeout(Rt.bind(void 0, e), i)), e.expiry.unref());
}
function Bt(e, i, r, n, _, a, s) {
  let u = new AbortController(),
    p = !1,
    y = Ke({
      fileUuid: r,
      baseUrl: void 0,
      forPrefetch: !0,
      maxBytes: Se,
      quietLimitMs: Ae,
      token: async () => {
        let d = await Fk(_);
        if (d) o.bearer = et(d);
        return d;
      },
      abort: u,
      totals: void 0,
      onServed: (d) => {
        let C = !d && Xe();
        if (C) e.earlyReadsStopped = !0;
        Zve("bridge_attachment_prefetch_served", {
          mark_seen: d,
          ...(!d && { stops_early_reads: C })
        });
      },
      admitBytes: (d) => {
        if (((o.receivedBytes = d), o.taken || Te(e).bytes <= $e())) return !0;
        return ((o.receivedBytes = 0), (o.statedBytes = 0), !1);
      }
    }),
    o = qe("prefetch", u, y, void 0);
  ((o.statedBytes = n),
    (o.release = (d) => {
      if (e.byFileUuid.get(i) !== o || o.taken) return;
      if (d === "expired_unused" && s && o.settledAt === void 0) {
        we(o, a);
        return;
      }
      ((p = !0), clearTimeout(o.expiry), e.byFileUuid.delete(i), u.abort());
      let C = {
        download_finished: o.settledAt !== void 0,
        approx_bytes: Number(o.receivedBytes.toPrecision(2)),
        ...(d === "dropped_unused" && { held_for_ms: Math.round(performance.now() - o.startedAt) })
      };
      (f("bridge_attachment_prefetch_download", d, C), Zve(`bridge_attachment_prefetch_${d}`, C));
    }),
    we(o, a),
    e.recentPrefetchStarts.push(o.startedAt),
    e.byFileUuid.set(i, o),
    y
      .then((d) => {
        if (!("failure" in d)) {
          if (s && e.byFileUuid.get(i) === o && !o.taken) we(o, a);
          return;
        }
        if (e.byFileUuid.get(i) === o && !o.taken) (e.byFileUuid.delete(i), clearTimeout(o.expiry));
        let C = d.failure === "http_status" && d.httpStatus === ct;
        if (C && !o.taken) {
          let M = (e.refusedEarly ??= new Map());
          if ((M.delete(i), M.size >= mt)) M.delete(M.keys().next().value ?? i);
          M.set(i, performance.now());
        }
        if (p) return;
        let S = {
            duration_ms: Math.round(performance.now() - o.startedAt),
            ...(d.httpStatus !== void 0 && { http_status: d.httpStatus })
          },
          A = Ve(d),
          I = A ? "no_answer" : d.failure;
        if (C) {
          (f("bridge_attachment_prefetch_download", "refused_early", S),
            Zve("bridge_attachment_prefetch_failed", { ...S, failure_code: At }));
          return;
        }
        let h = o.taken,
          N = h?.by === "joiner" && h.bearer === o.bearer && Ge(o, h.at);
        if (N) m("bridge_attachment_prefetch_download", I, S);
        else f("bridge_attachment_prefetch_download", I, S);
        Zve(
          N ? "bridge_attachment_prefetch_failed_file_lost" : "bridge_attachment_prefetch_failed",
          { ...S, failure_code: A ? kt : yt[d.failure] }
        );
      })
      .catch(l));
}
function qe(e, i, r, n) {
  let _ = {
    startedBy: e,
    bytes: r.then((a) => {
      if (((_.settledAt = performance.now()), "failure" in a))
        return ((_.failure = a.failure), (_.headersTimedOut = Ve(a)), null);
      return a.data;
    }),
    startedAt: performance.now(),
    settledAt: void 0,
    failure: void 0,
    headersTimedOut: !1,
    receivedBytes: 0,
    statedBytes: 0,
    abort: i,
    taken: e === "message" ? { by: "starter" } : void 0,
    expiry: void 0,
    bearer: n
  };
  return _;
}
function Ge(e, i) {
  let r = (e.settledAt ?? performance.now()) - i;
  return (
    e.startedBy !== "prefetch" ||
    e.failure === "too_large" ||
    (e.receivedBytes > 0 && e.failure !== "stalled" && r > He)
  );
}
function Pt(e, i, r) {
  if (e.taken) return !1;
  return ((e.taken = { by: "joiner", at: i, bearer: r }), clearTimeout(e.expiry), !0);
}
function xt(e, i, { inFlight: r, passes: n, sameBearer: _, waitedMs: a }) {
  let s = {
    in_flight: r,
    waited_ms: Math.round(a),
    download_ms: Math.round((e.settledAt ?? performance.now()) - e.startedAt),
    approx_bytes: Number(i.length.toPrecision(2))
  };
  if (n)
    (g("bridge_attachment_prefetch_download", s),
      Zve(
        r ? "bridge_attachment_prefetch_used_joined" : "bridge_attachment_prefetch_used_ready",
        s
      ));
  else
    (f("bridge_attachment_prefetch_download", _ ? "attestation_mismatch" : "bearer_changed", s),
      Zve(
        _
          ? "bridge_attachment_prefetch_attestation_mismatch"
          : "bridge_attachment_prefetch_bearer_changed",
        s
      ));
}
async function Ue(e, i, r, n, _) {
  let a = performance.now() - i + He;
  for (let s = 0; ; s++) {
    let u = new AbortController(),
      p = () => u.abort();
    if ((r.signal.addEventListener("abort", p, { once: !0 }), r.signal.aborted)) u.abort();
    (n.downloadTryCount++, _.admitBytes(0));
    let y = s + 1 < e && performance.now() + Ae + be <= a,
      o = await Ke({ ..._, totals: n, abort: u, quietLimitMs: y ? Ae : rt });
    if ((r.signal.removeEventListener("abort", p), !("failure" in o))) {
      if (s > 0) n.recoveredFileCount++;
      return o;
    }
    let d = o.httpStatus ?? 0,
      C =
        o.failure === "stalled" ||
        (o.failure === "error" && o.final !== !0) ||
        (o.failure === "http_status" && (d >= 500 || d === 408 || d === 429)),
      S = performance.now(),
      A = a - S,
      I = Math.min(UI({ baseMs: ot, attempt: s, floorMs: be }), Math.max(be, A)),
      h = y && o.failure === "stalled";
    if (C && s + 1 < e && (h || A >= be)) {
      if ((await X(I, r.signal), !r.signal.aborted)) continue;
    }
    return o;
  }
}
function ye() {
  let e = vYt();
  return (
    (e.signInRefresh ??= { attempted: !1, recoveries: { begun: 0, running: 0 } }),
    e.signInRefresh
  );
}
async function Dt(e, i, r, n, _, a) {
  let s = ye(),
    u = new AbortController(),
    p = X(Ae, AbortSignal.any([n, u.signal])).then(() => {
      return;
    });
  try {
    let y = await Promise.race([
      Fk(i).catch(() => {
        return;
      }),
      p
    ]);
    if (y === e) {
      let o = s.attempted && s.recoveries.running === 0;
      if (!s.attempted) {
        s.attempted = !0;
        let C = !1;
        s.run = oKt(s, () =>
          WS(e, i, r, {
            onForcedRefreshOutcome: (S) => {
              if (j_n.has(S)) s.attempted = !1;
              else C = !0;
            }
          })
        )
          .then(async () => {
            if (!C && (await Fk(i)) !== e) s.attempted = !1;
          })
          .catch(l);
      }
      if (!_) {
        if (!(await Promise.race([il(i).catch(() => null), p]))?.refreshToken) return;
      }
      let d = performance.now();
      ((y = await Promise.race([
        (s.run ?? Promise.resolve())
          .then(() => (o ? vue(i) : void 0))
          .then(() => Fk(i))
          .catch(() => {
            return;
          }),
        p
      ])),
        (a.slowest401RefreshWaitMs = Math.max(a.slowest401RefreshWaitMs, performance.now() - d)));
    }
    return y && y !== e && !n.aborted ? { bearer: y, stamp: M0e(s.recoveries) } : void 0;
  } finally {
    u.abort();
  }
}
async function Ke({
  fileUuid: e,
  baseUrl: i,
  forPrefetch: r,
  maxBytes: n,
  token: _,
  abort: a,
  quietLimitMs: s,
  totals: u,
  onServed: p,
  admitBytes: y
}) {
  let o = r ? "of a prefetched file" : e,
    d = !1,
    C = !1,
    S = () => {
      ((d = !0), a.abort());
    },
    A = setTimeout(S, s),
    I = performance.now();
  try {
    let h = await Promise.race([_(), Ot(a.signal)]);
    if (a.signal.aborted) return d ? Ce(C) : { failure: "stopped" };
    if (!h) return { failure: "no_token" };
    let N;
    try {
      N = `${i ?? h$()}/api/oauth/files/${encodeURIComponent(e)}/content`;
    } catch (P) {
      return (
        x(`fetch ${o} has no URL: ${r ? (P instanceof Error ? P.name : "a non-Error") : P}`),
        { failure: "error", final: !0 }
      );
    }
    let M = await fetch(N, {
      headers: { Authorization: `Bearer ${h}`, "User-Agent": Ds(), ...(r && { [ft]: "1" }) },
      ...(r && { cache: "no-store" }),
      signal: a.signal,
      ...oa({ url: N })
    });
    if (((C = !0), clearTimeout(A), (A = setTimeout(S, s)), u !== void 0))
      u.slowestTimeToHeadersMs = Math.max(u.slowestTimeToHeadersMs, performance.now() - I);
    if (M.status !== 200)
      return (
        x(`fetch ${o} failed: status=${M.status}`),
        await gK(M),
        d ? Ce(C) : { failure: "http_status", httpStatus: M.status }
      );
    p?.(M.headers.get(De.name)?.trim() === De.value);
    let v = M.body?.getReader(),
      O = [],
      R = 0;
    while (v !== void 0) {
      let { done: P, value: V } = await v.read();
      if (P) break;
      if ((A.refresh(), (R += V.byteLength), R > n))
        return (
          x(`fetch ${o} over size cap (${R} bytes so far)`),
          a.abort(),
          { failure: "too_large" }
        );
      if (!y(R))
        return (
          x(`fetch ${o} stopped: unused prefetched files would exceed their limit in memory`),
          a.abort(),
          { failure: "held_limit" }
        );
      O.push(V);
    }
    if (u !== void 0) u.downloadedBytes += R;
    return { data: Buffer.concat(O, R) };
  } catch (h) {
    return (
      x(`fetch ${o} threw: ${r ? (h instanceof Error ? h.name : "a non-Error") : h}`),
      d ? Ce(C) : { failure: a.signal.aborted ? "stopped" : "error" }
    );
  } finally {
    if ((clearTimeout(A), u !== void 0))
      u.slowestDownloadMs = Math.max(u.slowestDownloadMs, performance.now() - I);
  }
}
function Ve(e) {
  return "failure" in e && e.failure === "stalled" && e.beforeHeaders;
}
function Ce(e) {
  return { failure: "stalled", beforeHeaders: !e };
}
function Ot(e) {
  return new Promise((i) => {
    if (e.aborted) {
      i(void 0);
      return;
    }
    e.addEventListener("abort", () => i(void 0), { once: !0 });
  });
}
function Ie(e, i) {
  return i === 1
    ? "[attachment did not arrive]"
    : e === i
      ? `[${i} attachments did not arrive]`
      : `[${e} of ${i} attachments did not arrive]`;
}
export { gCs, Iyo, uDt, Kkr, qBe, fDt, qZt, Oyo, Kut, Myo, Zve };

//# sourceMappingURL=chunk-28mb9yt2.js.map
