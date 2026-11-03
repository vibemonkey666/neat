// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { J } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R } from "./chunk-fs43t96t.js";
import { Yn } from "./chunk-h5gbmqm1.js";
import { a } from "./chunk-4cgvah10.js";
import { g, m, f } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import { Le } from "./chunk-jazcqqqr.js";
import { Vut } from "./chunk-1qnzd4ya.js";
import { p } from "./chunk-qmkm2x59.js";
import { N7o, Ww, UEn } from "./chunk-dc0nzty2.js";
import { nce, Are, R9n, $5s, x9n } from "./chunk-8ydpj4c7.js";
import { qut } from "./chunk-5v1ebyk2.js";
import { yx } from "./chunk-1ky5r8qb.js";
import { o, v, T, u } from "./chunk-0bqrj5ah.js";
import { et } from "./chunk-c9re0p40.js";
import { randomUUID as A } from "crypto";
import {
  lstat as I,
  mkdir as H,
  readdir as U,
  stat as O,
  unlink as N,
  writeFile as M
} from "fs/promises";
import { basename as E, dirname as B, isAbsolute as C, join as y, resolve as j } from "path";
var G = x9n * 24 * 60 * 60 * 1000,
  k = "file-transfers";
function b(r) {
  t(`[peer-file-transfer] ${r}`);
}
function H8e(r) {
  let e = E(r).replace(/[^a-zA-Z0-9._-]/g, "_") || "attachment",
    i = e.lastIndexOf("."),
    n = i > 0 && e.length - i <= 16 ? e.slice(i) : "",
    s = n ? e.slice(0, i) : e,
    l = 200 - n.length;
  return (s.length > l ? s.slice(0, l) : s) + n;
}
function CFn(r, e) {
  return `[SendFile: "${H8e(r)}" was not delivered \u2014 ${e}]`;
}
function RFn(r) {
  return `[SendFile: ${r} additional attachment(s) were dropped \u2014 max ${Are} per message]`;
}
function xFn(r, e) {
  if (typeof e.file_size === "number" && r.length !== e.file_size) return !1;
  return et(r) === e.sha256;
}
function Vkr(r, e, i) {
  if (
    (a("tengu_send_file_received", { transport: c(r), file_count: e, verified_count: i }), i === e)
  )
    g("peer_file_receive");
  else if (i > 0) f("peer_file_receive", "partial_failed");
  else m("peer_file_receive", "all_failed");
}
async function Tte(r, e) {
  try {
    let n = await O(r);
    if (!n.isFile() || n.size > e) return null;
  } catch {
    return null;
  }
  let i;
  try {
    i = await UEn(r);
  } catch {
    return null;
  }
  try {
    let n = await i.stat();
    if (!n.isFile() || n.size > e) return null;
    let s = await Ww(i, e, n.size);
    return s.overLimit ? null : s.bytes;
  } catch {
    return null;
  } finally {
    await i.close().catch(() => {});
  }
}
function qkr(r, e) {
  if (!e) return r;
  let i = /^<cross-session-message\b[^>]*>\n?/.exec(r);
  return i ? i[0] + e + r.slice(i[0].length) : e + r;
}
function YZt() {
  return y(Le(), k);
}
function X() {
  return yx();
}
var Y = /^[0-9a-f]{64}$/,
  K = p(() =>
    u({
      path: o(),
      file_name: o(),
      file_size: v().int().nonnegative(),
      sha256: o().regex(Y),
      media_type: o().optional()
    })
  ),
  V = p(() => T(K()));
async function Dyo(r) {
  if (J()) throw new R($5s, "peer file transfer: no disk in this session");
  let e = await Tte(r, nce);
  if (e === null) throw new R(R9n, "peer file transfer: source unreadable or over the size limit");
  let i = et(e),
    n = YZt();
  await H(n, { recursive: !0, mode: 448 });
  let s = E(r),
    l = y(n, `${i.slice(0, 8)}-${A().slice(0, 8)}-${H8e(s)}`);
  return (
    await M(l, e, { mode: 384 }),
    { path: l, file_name: s, file_size: e.length, sha256: i, media_type: qut(s) }
  );
}
async function Hyo() {
  if (J()) return;
  let r = YZt();
  try {
    let e = await U(r),
      i = Date.now() - G;
    for (let n of e.slice(0, 200)) {
      let s = y(r, n);
      try {
        let l = await O(s);
        if (l.isFile() && l.mtimeMs < i) await N(s);
      } catch {}
    }
  } catch {}
}
var L = { prefix: "", received: 0, verified: 0 };
async function CAi(r) {
  if (J()) return L;
  let e = V().safeParse(r);
  if (!e.success || e.data.length === 0) {
    if (!e.success) b(`ignoring malformed file_attachments: ${e.error.message}`);
    return L;
  }
  let i = [],
    n = e.data;
  if (n.length > Are) (i.push(RFn(n.length - Are)), (n = n.slice(0, Are)));
  let s = X(),
    l = YZt(),
    z = [],
    x = 0;
  for (let d of n) {
    let h = (_) => {
      (b(`${d.file_name}: ${_}`), i.push(CFn(d.file_name, _)));
    };
    if (Yn(d.path) || N7o(d.path) || !C(d.path)) {
      h("invalid transfer path");
      continue;
    }
    let F = j(d.path),
      w = B(F);
    if (Yn(F) || N7o(F) || E(w) !== k) {
      h("transfer path is outside the file-transfer spool");
      continue;
    }
    try {
      if (!(await I(w)).isDirectory() || !(await I(F)).isFile()) {
        h("the transfer copy is not a regular file");
        continue;
      }
    } catch {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    let P = await Tte(F, nce);
    if (P === null) {
      h("the transfer copy could not be read (it may have expired)");
      continue;
    }
    if (!xFn(P, d)) {
      h("it failed integrity verification");
      continue;
    }
    let S = y(s, `${d.sha256.slice(0, 8)}-${A().slice(0, 8)}-${H8e(d.file_name)}`);
    try {
      let _ = await Vut(s);
      try {
        await M(y(_.at, E(S)), P, { mode: 384, flag: "wx" });
      } finally {
        await _.release();
      }
    } catch (_) {
      (h("it could not be written to the uploads directory"), b(`write ${S} failed: ${_}`));
      continue;
    }
    if ((x++, z.push(`@"${S}"`), w === l)) N(F).catch(() => {});
  }
  let D = [...z, ...i];
  return { prefix: D.length > 0 ? D.join(" ") + " " : "", received: n.length, verified: x };
}
export { H8e, CFn, RFn, xFn, Vkr, Tte, qkr, YZt, Dyo, Hyo, CAi };

//# sourceMappingURL=chunk-220dv0wx.js.map
