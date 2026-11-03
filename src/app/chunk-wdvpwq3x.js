// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J, Il, cm } from "./chunk-wrtp8qz8.js";
import { b, c, ce } from "./chunk-acd8w9vv.js";
import { d, E, Er, FI } from "./chunk-fs43t96t.js";
import { GZ, _At, AR } from "./chunk-dc0nzty2.js";
import { a } from "./chunk-4cgvah10.js";
import { g, f } from "./chunk-brszmkb3.js";
import { k } from "./chunk-ajtyjx88.js";
import { t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import { Qs } from "./chunk-dvghjmtr.js";
import { Ay, Rre, FG, ABo, W5s, G5s, K5s, mjt, CBo, V5s, q5s } from "./chunk-nahqyybs.js";
import { Ca } from "./chunk-87f056s4.js";
import { Gs } from "./chunk-7f6mb04e.js";
import { H } from "./chunk-p8tprgqa.js";
import { en } from "./chunk-rc7xvf0x.js";
var m1r = "[Image: ",
  fjt = "[Image source: ";
var Ee = [
    "image_dimensions_too_large",
    "image_processing_failed",
    "unsupported_file_format",
    "image_format_mismatch",
    "image_too_large",
    "file_too_large",
    "file_limit_exceeded",
    "upload_busy",
    "upload_timeout"
  ],
  O8 = 8000;
function Ie(e) {
  return Ee.some((n) => n === e);
}
function WZe(e) {
  return Ie(e) ? e : void 0;
}
function ne(e) {
  switch (e) {
    case "image_dimensions_too_large":
      return {
        cause: `the image is more than ${O8} pixels wide or tall`,
        remedy: `send a copy scaled to at most ${O8} pixels on its longer side, or send it in a non-image format such as a .zip`
      };
    case "image_processing_failed":
      return {
        cause:
          "the server could not process this image (it may be damaged, truncated, not an image format it can decode, or took too long to convert)",
        remedy: "re-export it as PNG or JPEG, or send it inside a .zip"
      };
    case "unsupported_file_format":
      return {
        cause:
          "the file's contents are an image format the server does not accept, whatever its extension says (it accepts PNG, JPEG, GIF and WebP)",
        remedy: "convert it to one of those or send it inside a .zip"
      };
    case "image_format_mismatch":
      return {
        cause:
          "the image's contents do not match its file extension (for example JPEG data in a .png file)",
        remedy: "rename or re-export it so the two agree"
      };
    case "image_too_large":
      return {
        cause: "images have a lower size limit than other files",
        remedy: "reduce this image's file size, or send it in a non-image format such as a .zip"
      };
    case "file_too_large":
      return {
        cause: "the file is larger than the server's upload size limit",
        remedy: "send a smaller or compressed copy"
      };
    case "file_limit_exceeded":
      return {
        cause:
          "this account has uploaded as many files as it is allowed for now (a count of files, not a size)",
        remedy:
          "sending again, even a smaller file, will fail the same way until the allowance resets, so tell the user instead of retrying",
        stop: !0
      };
    case "upload_busy":
      return {
        cause: "the server is busy with other large uploads",
        remedy: "try again shortly",
        passes: !0
      };
    case "upload_timeout":
      return { cause: "the server timed out receiving the file", remedy: "try again", passes: !0 };
  }
}
var v = /^upload failed: server returned (\d+)$/,
  xe = {
    cause:
      "this session's cloud environment is not signed in to send files, most likely because its sign-in has expired",
    remedy: `an expired sign-in is renewed once this turn has ended and the environment has then run no tool call or ${Gs} watch for about five minutes, so do not send again or run sleep now; tell the user to wait at least five minutes without sending anything else in this chat, and then to ask for the file again. If a send after such a wait fails like this too, tell the user instead that sending files may not work in this chat for now`,
    stop: !0
  };
function re(e, n) {
  return WZe(n) === void 0 && v.exec(e)?.[1] === "401" && Il();
}
var oe =
    /^upload failed: (?:network error \(|the connection closed before the server answered$|the server did not answer within \d|the transfer stalled \()/,
  ie = /\bInvalid URL\b|certificate/i,
  Se = new Set([429, 500, 502, 503, 504, 520, 521, 522, 523, 524, 529]);
function SBo(e, n, r = !1) {
  let o = WZe(n),
    u = o !== void 0 ? ne(o) : re(e, n) ? xe : void 0;
  if (u === void 0) return e;
  let { cause: s, remedy: i, stop: m } = u,
    h = [...(v.test(e) ? [s] : []), ...(r && !m ? [] : [i])];
  return h.length === 0 ? e : `${e} \u2014 ${h.join("; ")}`;
}
var P9n = 31457280;
function wBo(e) {
  let n = e / 1048576;
  return `${Number.isInteger(n) ? n : n.toFixed(1)} MiB`;
}
var Re = new Set([502, 503, 504, 520, 524]);
function g1r(e, n) {
  if (WZe(n) !== void 0) return !1;
  return Re.has(Number(v.exec(e)?.[1])) || (oe.test(e) && !ie.test(e));
}
function vBo(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e > 0;
}
function Pe(e) {
  return (
    vBo(e.upload_suspected_limit_bytes) && e.size > P9n && g1r(e.upload_error, e.upload_error_code)
  );
}
function I9n(e) {
  return Pe(e)
    ? `${e.upload_error} \u2014 the cause is unknown and may pass. If the same file fails like this again, it may be over the upload limit that applies to this session, which was not named and is never under ${wBo(P9n)}`
    : SBo(e.upload_error, e.upload_error_code);
}
function Te(e, n) {
  let r = WZe(n);
  if (r !== void 0) return ne(r).passes === !0;
  return Se.has(Number(v.exec(e)?.[1])) || (oe.test(e) && !ie.test(e));
}
function pjt(e) {
  let n = e.filter((s) => Te(s.upload_error, s.upload_error_code));
  if (n.length === 0 || e.some((s) => re(s.upload_error, s.upload_error_code))) return "";
  let r = I(n.length, "failure"),
    o = `also tell the user they can ask you to send ${I(n.length, "it", "them")} again in a few minutes.`;
  if (n.length === e.length) return ` The ${r} may be temporary, so ${o}`;
  return ` For ${new Intl.ListFormat("en", { type: "conjunction" }).format(n.map((s) => s.path))}, whose ${r} may be temporary, ${o}`;
}
var Be = !1,
  U = "ERR_IMAGE_DECODING_OFF",
  Me = O8 * O8,
  Ae = 4,
  ze = Ca(Ae, (e) => e.toBuffer()),
  se = 100,
  ae = new WeakMap();
function Oe() {
  return Promise.reject(
    Object.assign(Error("Image is too costly to decode"), { code: "ERR_IMAGE_DECODE_FAILED" })
  );
}
function z(e) {
  return {
    metadata: () => e.metadata(),
    resize: (n, r, o) => z(e.resize(n, r, o)),
    rotate: (n) => z(e.rotate(n)),
    jpeg: (n) => z(e.jpeg(n)),
    png: (n) => z(e.png(n)),
    webp: (n) => z(e.webp(n)),
    toBuffer: () => ze(e)
  };
}
function G(e) {
  let n = {
    metadata: e,
    resize: () => n,
    rotate: () => n,
    jpeg: () => n,
    png: () => n,
    webp: () => n,
    toBuffer: e
  };
  return n;
}
function Ce(e) {
  let n = J() || cm();
  if (n && !Be)
    return G(() =>
      Promise.reject(
        Object.assign(Error("Images are not decoded in a claude-code-server session"), { code: U })
      )
    );
  if (typeof Bun.Image !== "function")
    return G(() =>
      Promise.reject(
        Object.assign(Error("This runtime has no Bun.Image"), { code: "ERR_IMAGE_UNAVAILABLE" })
      )
    );
  let r = q5s(e) ?? e;
  if (!n) return new Bun.Image(r);
  let o = ae.get(r);
  if (o === void 0) ((o = W5s(r, se) > se ? null : G5s(r)), ae.set(r, o));
  return o === null ? G(Oe) : z(new Bun.Image(o, { maxPixels: Me }));
}
function nV() {
  return Promise.resolve(Ce);
}
var je = 1568,
  De = 1568,
  ke = 85,
  ue = 5,
  $e = 10,
  ve = 1398100;
function Y(e, n, r = je, o = De) {
  if (e <= r && n <= r && _At(e, n) <= o) return [e, n];
  if (n > e) {
    let [m, h] = Y(n, e, r, o);
    return [h, m];
  }
  let u = e / n,
    s = 1,
    i = e;
  while (s + 1 < i) {
    let m = (s + i) >> 1,
      h = Math.max(Math.round(m / u), 1);
    if (m <= r && _At(m, h) <= o) s = m;
    else i = m;
  }
  return [s, Math.max(Math.round(s / u), 1)];
}
function q(e, n, r) {
  if (e > r.maxWidth) ((n = Math.round((n * r.maxWidth) / e)), (e = r.maxWidth));
  if (n > r.maxHeight) ((e = Math.round((e * r.maxHeight) / n)), (n = r.maxHeight));
  return r.maxImageTokens === void 0 ? [e, n] : Y(e, n, 1 / 0, r.maxImageTokens);
}
async function h1r(e) {
  let n = await nV(),
    r = Buffer.from(e.buffer, e.byteOffset, e.byteLength),
    o = await n(r).metadata(),
    [u, s] = Y(o.width, o.height),
    i = u !== o.width || s !== o.height,
    m = ke + ue,
    h;
  do {
    m -= ue;
    let y = n(r);
    if (i) y = y.resize(u, s, { fit: "fill" });
    h = await y.jpeg({ quality: m }).toBuffer();
  } while (h.length * 4 > ve * 3 && m > $e);
  return { jpeg: h, w: u, h: s };
}
var Ne = 2,
  de = 3,
  We = 4,
  Fe = 5,
  Le = 8,
  Ge = 9,
  Q = 10,
  X = 11,
  Ue = "tengu_parsed_eagle",
  me = new Set(["png", "jpeg", "gif", "webp"]);
function pe(e) {
  switch (e) {
    case "jpeg":
    case "jpg":
      return "jpeg";
    case "webp":
      return "webp";
    default:
      return "png";
  }
}
class g$ extends Error {
  constructor(e) {
    super(e);
    this.name = "ImageResizeError";
  }
}
function ge(e) {
  if (ABo(e) === 4)
    return {
      reason: "it is a CMYK JPEG, which Claude Code cannot decode",
      advice: "Re-save it as an RGB PNG or JPEG and try again."
    };
  if (mjt(e))
    return {
      reason: "it is an animated WebP whose first frame Claude Code cannot decode",
      advice: "Save its first frame as a PNG or JPEG and try again."
    };
  return {
    reason:
      "its pixels could not be decoded (the file may be damaged, or use an encoding Claude Code cannot read)",
    advice: "Re-save it as a PNG or JPEG and try again."
  };
}
function s2e(e) {
  switch (E(e)) {
    case "ERR_IMAGE_DECODE_FAILED":
      return Q;
    case U:
      return X;
    case "ERR_IMAGE_UNKNOWN_FORMAT":
      return Ne;
    case "ERR_IMAGE_TOO_MANY_PIXELS":
      return We;
    case "ERR_IMAGE_FORMAT_UNSUPPORTED":
      return Ge;
    case "EACCES":
    case "EPERM":
      return Le;
    case "ENOMEM":
      return Fe;
    default:
      return de;
  }
}
function i2e(e) {
  return e === de;
}
function he(e) {
  if (!(e instanceof Error)) return { error_name: c(typeof e), error_code: b("") };
  return {
    error_name: FI(e.name !== "Error" ? e.name : e.constructor?.name) ?? b("Error"),
    error_code: Er(e) ?? b("")
  };
}
function _e(e) {
  let n = Ay(e);
  return {
    ...(n === "image/jpeg" && { jpeg_components: ABo(e) }),
    ...(n === "image/webp" && { webp_animated: mjt(e) })
  };
}
function be(e) {
  let n = 5381;
  for (let r = 0; r < e.length; r++) n = ((n << 5) + n + e.charCodeAt(r)) | 0;
  return n >>> 0;
}
function N(e) {
  return {
    rejectMaxWidth: e.rejectMaxWidth ?? e.maxWidth,
    rejectMaxHeight: e.rejectMaxHeight ?? e.maxHeight
  };
}
var K = 8000;
async function GZe(e, n, r, o, { timings: u, directWebpMaxBytes: s } = {}) {
  if (e.length === 0) throw new g$("Image file is empty (0 bytes)");
  try {
    let i = await nV(),
      m = await i(e).metadata(),
      h = m.format ?? r,
      y = h === "jpg" ? "jpeg" : h,
      p = e,
      S = n;
    if (!me.has(y)) {
      let { width: P, height: T } = m,
        M = P === void 0 || T === void 0 ? void 0 : q(P, T, o),
        A = M !== void 0 && M[0] === P && M[1] === T ? (await fe(() => i(e), s)).webp : void 0;
      ((p = A ?? (await i(e).png().toBuffer())),
        (S = p.length),
        (m = await i(p).metadata()),
        (y = A ? "webp" : "png"));
    }
    if (!m.width || !m.height) {
      let P = FG(p),
        { rejectMaxWidth: T, rejectMaxHeight: M } = N(o);
      if (P === void 0 || P.width > T || P.height > M)
        throw new g$(
          `Unable to resize image \u2014 could not verify image dimensions are within the ${T}x${M}px API limit.`
        );
      if (S > o.targetRawSize)
        return (
          a("tengu_image_resize", {
            over_byte_limit: !0,
            over_dimension_limit: !1,
            resized_for_tokens: !1,
            original_size_bytes: S
          }),
          { buffer: await i(p).jpeg({ quality: 80 }).toBuffer(), mediaType: "jpeg" }
        );
      return { buffer: p, mediaType: y };
    }
    let w = m.width,
      _ = m.height,
      [x, R] = q(w, _, o),
      B = x !== w || R !== _;
    if (S <= o.targetRawSize && !B)
      return {
        buffer: p,
        mediaType: y,
        dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R }
      };
    let D = y === "png";
    if (
      (a("tengu_image_resize", {
        over_byte_limit: S > o.targetRawSize,
        over_dimension_limit: w > o.maxWidth || _ > o.maxHeight,
        resized_for_tokens: B && x < o.maxWidth && R < o.maxHeight,
        original_size_bytes: S,
        original_width: w,
        original_height: _,
        target_width: x,
        target_height: R,
        max_width: o.maxWidth,
        max_height: o.maxHeight,
        max_image_tokens: o.maxImageTokens
      }),
      !B && S > o.targetRawSize)
    ) {
      if (D) {
        let P = await le(() => i(p).png({ compressionLevel: 9, palette: !0 }).toBuffer(), u);
        if (P.length <= o.targetRawSize)
          return {
            buffer: P,
            mediaType: "png",
            dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R }
          };
      }
      for (let P of [80, 60, 40, 20]) {
        let T = await i(p).jpeg({ quality: P }).toBuffer();
        if (T.length <= o.targetRawSize)
          return {
            buffer: T,
            mediaType: "jpeg",
            dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R }
          };
      }
    }
    t(`Resizing to ${x}x${R}`);
    let O =
        B && s !== void 0 && w <= N(o).rejectMaxWidth && _ <= N(o).rejectMaxHeight && CBo(p)
          ? "png"
          : pe(y),
      F = i(p).resize(x, R, { fit: "inside", withoutEnlargement: !0 });
    if (O !== y) F = F.png();
    let L =
        O === "png"
          ? await fe(() => i(p).resize(x, R, { fit: "inside", withoutEnlargement: !0 }), s)
          : {},
      ee = L.webp ?? (await F.toBuffer());
    if (ee.length > o.targetRawSize) {
      if (D) {
        let A = await le(
          () =>
            i(p)
              .resize(x, R, { fit: "inside", withoutEnlargement: !0 })
              .png({ compressionLevel: 9, palette: !0 })
              .toBuffer(),
          u
        );
        if (A.length <= o.targetRawSize)
          return {
            buffer: A,
            mediaType: "png",
            dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R }
          };
      }
      for (let A of [80, 60, 40, 20]) {
        let te = await i(p)
          .resize(x, R, { fit: "inside", withoutEnlargement: !0 })
          .jpeg({ quality: A })
          .toBuffer();
        if (te.length <= o.targetRawSize)
          return {
            buffer: te,
            mediaType: "jpeg",
            dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R }
          };
      }
      let P = Math.min(x, 1000),
        T = Math.round((R * P) / Math.max(x, 1));
      t("Still too large, compressing with JPEG");
      let M = await i(p)
        .resize(P, T, { fit: "inside", withoutEnlargement: !0 })
        .jpeg({ quality: 20 })
        .toBuffer();
      return (
        t(`JPEG compressed buffer size: ${M.length}`),
        {
          buffer: M,
          mediaType: "jpeg",
          dimensions: { originalWidth: w, originalHeight: _, displayWidth: P, displayHeight: T }
        }
      );
    }
    return {
      buffer: ee,
      mediaType: L.webp ? "webp" : O,
      dimensions: { originalWidth: w, originalHeight: _, displayWidth: x, displayHeight: R },
      losslessWebp: L.lossless
    };
  } catch (i) {
    if (i instanceof g$) throw i;
    let m = s2e(i),
      h = d(i);
    if (i2e(m)) l(i);
    else t(`Image resize failed: ${h}`, { level: "error" });
    a("tengu_image_resize_failed", {
      original_size_bytes: n,
      error_type: m,
      error_message_hash: be(h),
      ...he(i),
      ..._e(e)
    });
    let p = Rre(e).slice(6),
      S = Math.ceil((n * 4) / 3),
      w = FG(e);
    if (w === void 0)
      throw new g$(
        "Unable to resize image \u2014 image processing is unavailable and dimensions could not be read from the file header. " +
          "Please convert the image to PNG, JPEG, GIF, or WebP."
      );
    let { rejectMaxWidth: _, rejectMaxHeight: x } =
        m === X && Qs() ? { rejectMaxWidth: K, rejectMaxHeight: K } : N(o),
      R = w.width > _ || w.height > x;
    if (S <= o.maxBase64Size && !R)
      return (
        a("tengu_image_resize_fallback", {
          original_size_bytes: n,
          base64_size_bytes: S,
          error_type: m
        }),
        { buffer: e, mediaType: p }
      );
    if (m === X)
      throw new g$(
        R
          ? `Unable to send image \u2014 at ${w.width}x${w.height}px it is over the ${_}x${x}px limit, and this session cannot shrink images. Resize it to fit within ${_}x${x}px and try again.`
          : `Unable to send image \u2014 it is ${en(S)} in base64, over the API's ${en(o.maxBase64Size)} limit, and this session cannot shrink images. Make it smaller than ${Math.floor((o.targetRawSize / 1024 / 1024) * 10) / 10}MB and try again.`
      );
    if (m === Q) {
      let { reason: B, advice: D } = ge(e),
        O = R
          ? `at ${w.width}x${w.height}px it is over the ${_}x${x}px limit`
          : `it is over the ${en(o.maxBase64Size)} API limit (${en(n)} raw, ${en(S)} base64)`;
      throw new g$(`Unable to resize image \u2014 ${B}, and ${O}, so it cannot be sent. ${D}`);
    }
    throw new g$(
      R
        ? `Unable to resize image \u2014 dimensions exceed the ${_}x${x}px limit and image processing failed. Please resize the image to reduce its pixel dimensions.`
        : `Unable to resize image (${en(n)} raw, ${en(S)} base64). The image exceeds the ${en(o.maxBase64Size)} API limit and compression failed. Please resize the image manually or use a smaller image.`
    );
  }
}
async function le(e, n) {
  let r = performance.now();
  try {
    return await e();
  } finally {
    if (n !== void 0) n.pngPaletteMs += performance.now() - r;
  }
}
async function EBo(e, n, r) {
  let o = await nV(),
    u = (p) => o(e).jpeg({ quality: p }).toBuffer(),
    s = e,
    i = 90;
  if (!/jpe?g/i.test(r)) {
    let p = await u(90);
    if (p.length < s.length) s = p;
    if (p.length <= n) return p;
    i = 89;
  }
  let h = 1,
    y;
  for (let p = 0; p < 5; p++) {
    let S = Math.floor((h + i) / 2),
      w = await u(S);
    if (w.length < s.length) s = w;
    if (w.length <= n) ((y = w), (h = S + 1));
    else i = S - 1;
    if (h > i) break;
  }
  return y ?? s;
}
async function Xb({ data: e, mediaType: n, limits: r, timings: o, allowWebp: u = !0, from: s }) {
  let i = Buffer.isBuffer(e) ? e : Buffer.from(e, "base64");
  if (J()) {
    let _ = FG(i);
    a("tengu_image_input", {
      over_byte_budget: i.length > GZ,
      over_byte_limit: i.length > AR.targetRawSize,
      over_side_limit: _ !== void 0 && Math.max(_.width, _.height) > K,
      from: ce(s)
    });
  }
  let m = u && r.allowWebp !== !1,
    h = n?.includes("/") ? n.split("/")[1] || "png" : n || "png",
    y,
    p = performance.now();
  try {
    y = await GZe(i, i.length, h, r, { timings: o, directWebpMaxBytes: m ? Zfn(GZ) : void 0 });
  } catch (_) {
    if (_ instanceof g$) return C(_.message, "resize_error");
    throw _;
  } finally {
    if (o !== void 0) o.resizeMs = performance.now() - p;
  }
  let S = y.buffer;
  if (S.length > GZ) {
    let _ = performance.now();
    try {
      S = await EBo(y.buffer, GZ, y.mediaType);
    } catch (x) {
      t(`Image byte-budget compression failed, passing through unbudgeted: ${d(x)}`, {
        level: "error"
      });
    }
    if (o !== void 0) o.byteBudgetMs = performance.now() - _;
  }
  return (
    (S = await kBo(i, y.buffer, S, GZ, m, y.losslessWebp)),
    {
      block: {
        type: "image",
        source: { type: "base64", media_type: Rre(S), data: S.toString("base64") }
      },
      dimensions: y.dimensions
    }
  );
}
function V() {
  if (J()) return "off";
  let e = Qs() ? k(Ue, "off") : "off";
  return e === "lossless" || e === "all" ? e : "off";
}
function Zfn(e) {
  return V() === "off" ? void 0 : e;
}
async function W(e) {
  try {
    return await e();
  } catch (n) {
    if (i2e(s2e(n))) l(n);
    else t(`WebP step: an encode failed: ${d(n)}`, { level: "error" });
    return;
  }
}
function Z(e, n) {
  return W(async () => {
    let r = await (await e()).webp(n).toBuffer();
    if (n.lossless && !CBo(r))
      throw Error("a lossless WebP encode wrote a file that is not lossless");
    return r;
  });
}
async function ye(e) {
  let n = await Z(e, { lossless: !0 });
  if (n === void 0 || !V5s(n)) return n;
  let r = await e(),
    o = r === (await e()) ? void 0 : { compressionLevel: 0 },
    u = await nV(),
    [s, i] = await Promise.all([W(() => r.png(o).toBuffer()), W(() => u(n).png(o).toBuffer())]);
  if (s === void 0 || i === void 0) return;
  return i.equals(s) ? n : "not_exact";
}
async function He(e, n, r, o) {
  if (n.length <= r / 2) return { result: "lossless", webp: n };
  if (o !== "all") return { result: "too_large" };
  let u = await Z(e, { lossless: !1, quality: 90 });
  if (u === void 0) return { result: "failed" };
  if (u.length > r) return { result: "too_large" };
  let s = await W(() => e().jpeg({ quality: 90 }).toBuffer());
  if (s === void 0) return { result: "failed" };
  if (s.length > r) return { result: "no_yardstick" };
  if (u.length >= s.length) return { result: "not_smaller" };
  return n.length <= u.length ? { result: "lossless", webp: n } : { result: "lossy", webp: u };
}
async function fe(e, n) {
  let r = V();
  if (n === void 0 || r === "off") return {};
  let o = performance.now(),
    u = await ye(e),
    { result: s, webp: i } =
      u === void 0
        ? { result: "failed", webp: void 0 }
        : u === "not_exact"
          ? { result: u, webp: void 0 }
          : await He(e, u, n, r);
  if (
    (a("tengu_image_webp_direct", {
      mode: c(r),
      result: c(s),
      ...(i !== void 0 && { sent_size_bytes: i.length }),
      encode_ms: Math.round(performance.now() - o)
    }),
    i === void 0)
  )
    return { lossless: u };
  return (g("input_image_webp"), { webp: i });
}
async function kBo(e, n, r, o, u, s) {
  let i = V(),
    m = Rre(n),
    h = m === "image/webp" && Rre(e) !== "image/webp",
    y = n.length > o,
    p = u && m === "image/png" && (y ? i === "all" : i !== "off") && !K5s(n),
    S = performance.now(),
    w = async () => (await nV())(n),
    _ = !p ? void 0 : y ? await Z(w, { lossless: !1, quality: 90 }) : (s ?? (await ye(w))),
    x = _ === "not_exact" ? void 0 : _,
    R = x !== void 0 && x.length < r.length ? x : r,
    B = _ === "not_exact" ? _ : x === void 0 ? "failed" : "not_smaller";
  if (R === x) g("input_image_webp");
  else if (p) f("input_image_webp", B === "failed" ? "encode_failed" : B);
  return (
    a("tengu_image_output", {
      mode: c(i),
      webp_try: c(h ? "direct" : !p ? "none" : y ? "lossy" : "lossless"),
      ...(!h && {
        resized_format: c(m),
        resized_size_bytes: n.length,
        without_webp_size_bytes: r.length
      }),
      sent_format: c(Rre(R)),
      sent_size_bytes: R.length,
      ...(p && {
        webp_result: c(R === x ? "sent" : B),
        webp_encode_ms: Math.round(performance.now() - S)
      })
    }),
    R
  );
}
var we = new WeakSet();
async function F5s(e, n, { timings: r } = {}) {
  let o = Ay(e);
  if (o === null) return null;
  try {
    let { block: u } = await Xb({ data: e, mediaType: o, limits: n, timings: r, from: "file" });
    if (u.type !== "image") return null;
    return (we.add(u), u);
  } catch {
    return null;
  }
}
async function Sbt(e, n) {
  if (!H(e.source))
    return e.source == null
      ? C("image block has no source object", "no_source")
      : C("image block source must be an object", "malformed_source");
  if (e.source.type !== "base64") return { block: e };
  let r = e.source.media_type;
  if (r != null && typeof r !== "string")
    return C("base64 image media_type must be a string", "malformed_source");
  let o = typeof r === "string" ? r : void 0,
    u = e.source.data,
    s;
  try {
    s = Buffer.isBuffer(u) ? u : Buffer.from(u, "base64");
  } catch (i) {
    return C(d(i), "malformed_source");
  }
  return Xb({ data: s, mediaType: o, limits: n, from: we.has(e) ? "built_block" : "block" });
}
function C(e, n) {
  return (
    a("tengu_image_resize_degraded", { reason: c(n) }),
    { block: { type: "text", text: `[Image could not be processed: ${e}]` } }
  );
}
async function y1r(e, n, r) {
  let o = r?.split("/")[1] || "jpeg",
    u = o === "jpg" ? "jpeg" : o;
  try {
    let s = await nV(),
      i = await s(e).metadata(),
      m = i.format || u,
      h = e.length,
      y = e;
    if (!me.has(m === "jpg" ? "jpeg" : m))
      ((y = await s(e).png().toBuffer()), (i = await s(y).metadata()), (m = "png"));
    let p = { imageBuffer: y, metadata: i, format: m, maxBytes: n, originalSize: h };
    if (y.length <= n) return j(y, m, h);
    let S = await Ye(p, s);
    if (S) return S;
    if (m === "png") {
      let _ = await qe(p, s);
      if (_) return _;
    }
    let w = await Xe(p, 50, s);
    if (w) return w;
    return await Ke(p, s);
  } catch (s) {
    let i = s2e(s),
      m = d(s);
    if (i2e(i)) l(s);
    else t(`Image compression failed: ${m}`, { level: "error" });
    if (
      (a("tengu_image_compress_failed", {
        original_size_bytes: e.length,
        max_bytes: n,
        error_type: i,
        error_message_hash: be(m),
        ...he(s),
        ..._e(e)
      }),
      e.length <= n)
    ) {
      let h = Rre(e);
      return { base64: e.toString("base64"), mediaType: h, originalSize: e.length };
    }
    if (i === Q) {
      let { reason: h, advice: y } = ge(e);
      throw new g$(
        `Unable to compress image (${en(e.length)}) to fit within ${en(n)} \u2014 ${h}. ${y}`
      );
    }
    throw new g$(
      `Unable to compress image (${en(e.length)}) to fit within ${en(n)}. Please use a smaller image.`
    );
  }
}
async function U5s(e, n, r) {
  let o = Math.floor(n / 0.125),
    u = Math.floor(o * 0.75);
  return y1r(e, u, r);
}
async function B5s(e, n) {
  if (e.source.type !== "base64") return e;
  let r = Buffer.from(e.source.data, "base64");
  if (r.length <= n) return e;
  let o = await y1r(r, n);
  return { type: "image", source: { type: "base64", media_type: o.mediaType, data: o.base64 } };
}
function j(e, n, r) {
  let o = n === "jpg" ? "jpeg" : n;
  return { base64: e.toString("base64"), mediaType: `image/${o}`, originalSize: r };
}
async function Ye(e, n) {
  let r = [1, 0.75, 0.5, 0.25];
  for (let o of r) {
    let u = Math.round((e.metadata.width || 2000) * o),
      s = Math.round((e.metadata.height || 2000) * o),
      i = n(e.imageBuffer).resize(u, s, { fit: "inside", withoutEnlargement: !0 }),
      m = pe(e.format);
    i = Je(i, m);
    let h = await i.toBuffer();
    if (h.length <= e.maxBytes) return j(h, m, e.originalSize);
  }
  return null;
}
function Je(e, n) {
  switch (n) {
    case "png":
      return e.png({ compressionLevel: 9, palette: !0 });
    case "jpeg":
      return e.jpeg({ quality: 80 });
    case "webp":
      return e.webp({ quality: 80 });
  }
}
async function qe(e, n) {
  let r = await n(e.imageBuffer)
    .resize(800, 800, { fit: "inside", withoutEnlargement: !0 })
    .png({ compressionLevel: 9, palette: !0, colors: 64 })
    .toBuffer();
  if (r.length <= e.maxBytes) return j(r, "png", e.originalSize);
  return null;
}
async function Xe(e, n, r) {
  let o = await r(e.imageBuffer)
    .resize(600, 600, { fit: "inside", withoutEnlargement: !0 })
    .jpeg({ quality: n })
    .toBuffer();
  if (o.length <= e.maxBytes) return j(o, "jpeg", e.originalSize);
  return null;
}
async function Ke(e, n) {
  let r = await n(e.imageBuffer)
    .resize(400, 400, { fit: "inside", withoutEnlargement: !0 })
    .jpeg({ quality: 20 })
    .toBuffer();
  return j(r, "jpeg", e.originalSize);
}
function Cre(e, n) {
  let { originalWidth: r, originalHeight: o, displayWidth: u, displayHeight: s } = e;
  if (!r || !o || !u || !s || u <= 0 || s <= 0) {
    if (n) return `${fjt}${n}]`;
    return null;
  }
  let i = r !== u || o !== s;
  if (!i && !n) return null;
  let m = [];
  if (n) m.push(`source: ${n}`);
  if (i) {
    let h = r / u;
    m.push(
      `original ${r}x${o}, displayed at ${u}x${s}. Multiply coordinates by ${h.toFixed(2)} to map to original image.`
    );
  }
  return `${m1r}${m.join(", ")}]`;
}
export {
  m1r,
  fjt,
  O8,
  WZe,
  SBo,
  P9n,
  wBo,
  g1r,
  vBo,
  I9n,
  pjt,
  nV,
  h1r,
  g$,
  s2e,
  i2e,
  GZe,
  EBo,
  Xb,
  Zfn,
  kBo,
  F5s,
  Sbt,
  y1r,
  U5s,
  B5s,
  Cre
};

//# sourceMappingURL=chunk-wdvpwq3x.js.map
