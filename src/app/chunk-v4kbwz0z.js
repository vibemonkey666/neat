// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, J } from "./chunk-wrtp8qz8.js";
import { R, E, Fit } from "./chunk-fs43t96t.js";
import { Yn, Fa, Fl, zs, QH } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { Im, Po, Pxe, ie, Z$e, tpe, fYt, t } from "./chunk-4kxznmzw.js";
import { u6, vr, NH, yo } from "./chunk-azq9hjy0.js";
import { Y } from "./chunk-arw2bgak.js";
import { i } from "./chunk-cj37hmns.js";
import { j$e, q8r, jse } from "./chunk-hc5j8sxy.js";
import { ve } from "./chunk-vk5p9xv3.js";
function iSe(e) {
  let n = NH(e);
  return yo(n) ? vr : n;
}
function tkn(e) {
  let n = fYt(e);
  return (
    n.includes("\\") ||
    /%[0-9A-Fa-f]{2}/.test(n) ||
    n.split(/[/?#]/).some((r) => r === "." || r === "..")
  );
}
function iZo(e) {
  let n = e.trimStart(),
    r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(n);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return Z$e(n);
  return Z$e(r[0] + fYt(n.slice(r[0].length)));
}
function eX(e) {
  if (e.includes("%00") || e.includes("\x00")) return !0;
  if (u6(e)) return !0;
  let n = [tpe(e)?.host, tpe(e, { asRewritten: !0 })?.host];
  if (e.includes("://")) n.push(Z$e(e.trimStart())?.hostname || void 0, iZo(e)?.hostname || void 0);
  let r = n.map((o) => (o === void 0 ? null : iSe(o)));
  return r.some((o) => o !== r[0]);
}
var ws = 524288,
  gst = 0,
  tX = 2097152;
import {
  closeSync as y,
  constants as m,
  fstatSync as O,
  lstatSync as h,
  openSync as S,
  readlinkSync as F,
  readSync as z,
  statSync as Q
} from "fs";
import { open as Z } from "fs/promises";
import { dirname as b, resolve as q } from "path";
var EAt = 536870912,
  f = ve({ noFollowAny: "untried", localVolumes: void 0 }, (e) => {
    ((e.noFollowAny = "untried"), (e.localVolumes = void 0));
  }),
  ee = ["/", "/System/Volumes/Data"];
function I() {
  if (f.localVolumes !== void 0) return f.localVolumes;
  let e = !0,
    n = ee.flatMap((o) => {
      try {
        return [Q(o).dev];
      } catch (s) {
        if (E(s) !== "ENOENT") e = !1;
        return [];
      }
    }),
    r = new Set(n);
  if (e) f.localVolumes = r;
  return r;
}
function P(e) {
  if (ne() === "rejected") return "unsupported";
  let n;
  try {
    n = T(b(e));
  } catch (r) {
    let o = E(r);
    if (o === "ELOOP") return "link";
    if (o === "EINVAL") return "elsewhere";
    if (o === "EACCES" || o === "EPERM") return x(b(e));
    throw r;
  }
  try {
    return I().has(O(n).dev) ? "local" : "elsewhere";
  } finally {
    y(n);
  }
}
function x(e) {
  let n = I(),
    r = b(e);
  if (r === e) return "elsewhere";
  let o;
  try {
    o = T(r);
  } catch (s) {
    let c = E(s);
    if (c === "ELOOP") return "link";
    if (c === "EACCES" || c === "EPERM") {
      let u = x(r);
      return u === "local" && !n.has(v(e)) ? "elsewhere" : u;
    }
    if (c === "EINVAL") return "elsewhere";
    throw s;
  }
  try {
    let s = O(o).dev;
    return n.has(s) && n.has(v(e)) ? "local" : "elsewhere";
  } finally {
    y(o);
  }
}
function v(e) {
  try {
    return h(e).dev;
  } catch {
    return Number.NaN;
  }
}
function T(e) {
  return S(e, m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | EAt | ws);
}
async function Gar() {
  if (f.noFollowAny === "untried")
    try {
      (await (await Z("/", m.O_RDONLY | m.O_DIRECTORY | m.O_NONBLOCK | EAt | ws)).close(),
        (f.noFollowAny = "works"));
    } catch (e) {
      f.noFollowAny = E(e) === "EINVAL" ? "rejected" : "works";
    }
  return f.noFollowAny === "rejected";
}
function ne() {
  if (f.noFollowAny === "untried")
    try {
      (y(T("/")), (f.noFollowAny = "works"));
    } catch (e) {
      f.noFollowAny = E(e) === "EINVAL" ? "rejected" : "works";
    }
  return f.noFollowAny === "rejected" ? "rejected" : "works";
}
function kAt(e, n) {
  return (n === "windows" && Yn(e) && !Fl(e)) || Fa(e);
}
function hst(e) {
  return QH(e) || Fa(e);
}
function D(e) {
  let n = ie();
  return (
    !zs(e) &&
    !Fa(e) &&
    Im(n, e, {
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0,
      launchAncestry: Pxe(n)
    }) === void 0
  );
}
function re() {
  return "linux";
}
var te = 65536;
function nkn(e, n, r, o, s) {
  let c = re(),
    u = ws | (c === "windows" ? m.O_RDONLY : m.O_RDONLY | m.O_NONBLOCK | m.O_NOCTTY),
    d = !n && kAt(e, c) ? ce(e, u, c, r) : ue(e, n, o, u, c, r);
  if (d === null) return null;
  try {
    if (s === void 0) j$e(O(d), e, r);
    else {
      let a = O(d, { bigint: !0 });
      if (a.ino !== s.ino || a.ctimeNs !== s.ctimeNs || (c !== "windows" && a.dev !== s.dev))
        return p(e, "the file was replaced or changed after its path was checked");
      j$e(
        { isDirectory: () => a.isDirectory(), isFile: () => a.isFile(), size: Number(a.size) },
        e,
        r
      );
    }
    return jse(oe(d, e, r));
  } finally {
    y(d);
  }
}
function oe(e, n, r) {
  let o = [],
    s = 0;
  while (s <= r) {
    let c = Buffer.allocUnsafe(Math.min(te, r + 1 - s)),
      u = z(e, c, 0, c.length, s);
    if (u === 0) break;
    (o.push(c.subarray(0, u)), (s += u));
  }
  return (q8r(s, n, r), Buffer.concat(o, s));
}
function H(e, n, r) {
  if (r === "macos" && f.noFollowAny !== "rejected")
    return { fd: S(e, n | EAt), everyComponent: !0 };
  return { fd: S(e, r === "windows" ? n : n | m.O_NOFOLLOW), everyComponent: !1 };
}
var _ = Symbol("no procfs"),
  se = Symbol("descriptor path unreadable");
function B(e, n) {
  if (n !== "linux") return _;
  try {
    return F(`/proc/self/fd/${e}`);
  } catch {
    try {
      h("/proc/self/fd");
    } catch {
      return _;
    }
    return se;
  }
}
function ce(e, n, r, o) {
  if (r === "macos" && P(e) === "link") return p(e, "a link stands above the spelled name");
  let s = h(e);
  if (s.isSymbolicLink()) return (M(e), p(e, "a link stands at the spelled name"));
  j$e(s, e, o);
  let c;
  try {
    c = H(e, n, r).fd;
  } catch (d) {
    if (E(d) !== "ELOOP") throw d;
    return p(e, "a link stands on the spelled route");
  }
  let u = B(c, r);
  return u === _ || u === e ? c : w(c, e, `the descriptor is on ${String(u)}`);
}
function ue(e, n, r, o, s, c) {
  if (!n && !D(e)) return p(e, "its route could not be examined");
  let u = !1;
  if (s === "macos") {
    let l = P(e);
    if (l === "link") return L(e, n);
    u = l === "local" && !r;
  }
  if (!u) {
    let l = h(e);
    if (!l.isSymbolicLink()) j$e(l, e, c);
    else if (s === "windows") return L(e, n);
  }
  let d;
  try {
    d = H(e, o, s);
  } catch (l) {
    if (E(l) !== "ELOOP") throw l;
    return L(e, n);
  }
  let { fd: a, everyComponent: X } = d;
  try {
    if (X) return a;
    let l = B(a, s);
    if (l !== _) return l === e ? a : w(a, e, `the descriptor is on ${String(l)}`);
    let A = Po(ie(), e);
    return !A.isSymlink && A.resolvedPath === e && (A.isCanonical || (!n && D(e)))
      ? a
      : w(a, e, "the route no longer resolves to it");
  } catch (l) {
    throw (w(a, e, "the binding check threw"), l);
  }
}
function L(e, n) {
  if (!n && D(e)) M(e);
  return p(e, "a link appeared on the route");
}
function M(e) {
  if (!h(e).isSymbolicLink()) return;
  let n = q(b(e), F(e));
  if (!D(n)) return;
  try {
    h(n);
  } catch (r) {
    let o = E(r);
    if ((o === "ENOENT" || o === "ENOTDIR") && typeof r === "object" && r !== null)
      Object.defineProperty(r, V, { value: !0 });
    throw r;
  }
}
var V = Symbol("boundRead.linkToNothing");
function yui(e) {
  return typeof e === "object" && e !== null && V in e;
}
function w(e, n, r) {
  return (y(e), p(n, r));
}
function p(e, n) {
  return (t(`boundRead: not reading ${e}: ${n}`, { level: "warn" }), null);
}
import { createHash as ae, randomUUID as de } from "crypto";
import {
  closeSync as le,
  constants as C,
  fchmodSync as fe,
  fstatSync as me,
  lstatSync as pe,
  mkdirSync as g,
  openSync as he
} from "fs";
import { tmpdir as k } from "os";
import { join as N } from "path";
function Ap() {
  let e = i.CLAUDE_CODE_TMPDIR;
  if (e) return e;
  return k();
}
var zar = 44,
  rkn = "claude-pdf-",
  okn = "claude-preview-";
function fxe(e) {
  let n = process.getuid?.();
  if (n === void 0) return;
  let r = e.replace(/[\/]+$/, "") || e,
    o = "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    s;
  try {
    s = he(r, C.O_RDONLY | C.O_DIRECTORY | C.O_NOFOLLOW);
  } catch (c) {
    let u = E(c);
    if (u === "ELOOP" || u === "ENOTDIR")
      throw Error(
        `Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${o}`
      );
    if (u === "EACCES") {
      let d;
      try {
        let a = pe(r);
        if (a.uid !== n) d = a.uid;
      } catch {}
      if (d !== void 0)
        throw new R(
          `Temp directory ${e} is owned by uid ${d}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`,
          "temp dir owned by another uid (EACCES at open); refusing to use it"
        );
      throw new R(
        `Temp directory ${e} is not readable (its mode may have been altered, or a path component denies search). Refusing to use it \u2014 restore its permissions (chmod 0700) or remove it. ${o}`,
        "temp dir unreadable (owner-read or path search bit missing); refusing to use it"
      );
    }
    throw c;
  }
  try {
    let c = me(s);
    if (c.uid !== n) {
      if (n === 0 && i.CLAUDE_CODE_CONTAINER_ID) {
        Y("warn", "tempdir_owner_mismatch", { observed_uid: c.uid });
        return;
      }
      throw Error(
        `Temp directory ${e} is owned by uid ${c.uid}, expected ${n}. Refusing to use it \u2014 another user may have pre-created it. ${o}`
      );
    }
    if ((c.mode & 511) !== 448) fe(s, 448);
  } finally {
    le(s);
  }
}
class j {
  ensured = void 0;
  childProcessTmpDirMemo = void 0;
  markEnsured(e) {
    this.ensured = e;
  }
  setChildProcessTmpDirMemo(e) {
    this.childProcessTmpDirMemo = e;
  }
}
var G = new W(() => new j());
function I$e() {
  return `claude-${process.getuid?.() ?? 0}`;
}
function jd() {
  return K(G.of(U().host));
}
function K(e) {
  if (J())
    throw Error(
      "The temp directory is unavailable in a diskless session: nothing is created, verified or written under the shared per-uid temp root"
    );
  let n = Ap(),
    r = N(n, I$e());
  if (r !== e.ensured) {
    if (typeof process.getuid === "function") {
      try {
        g(r, { recursive: !0, mode: 448 });
      } catch (o) {
        if (Fit(o)) {
          let s = E(o),
            c =
              s === "EDQUOT"
                ? `your disk quota on the volume holding ${n} is used up (${s})`
                : `the volume holding ${n} is full (${s})`;
          throw new R(
            `Claude Code's temporary directory ${r} could not be created: ${c}. Free space on that volume, or set CLAUDE_CODE_TMPDIR to a directory on another one, then try again.`,
            "claude temp dir not created: volume full (ENOSPC/EDQUOT)"
          );
        }
        throw o;
      }
      fxe(r);
    } else
      try {
        g(r, { recursive: !0, mode: 448 });
      } catch {}
    e.markEnsured(r);
  }
  return r;
}
function pxe() {
  let e = jd();
  (g(e, { recursive: !0, mode: 448 }), fxe(e));
  let n = N(e, "plugin-tool-staging");
  return (g(n, { recursive: !0, mode: 448 }), fxe(n), n);
}
function mxe() {
  let e = G.of(U().host),
    n = K(e);
  if (Buffer.byteLength(n) <= zar) return n;
  let r = k(),
    o = e.childProcessTmpDirMemo;
  if (o?.forDir === n) return o.result;
  let s = N(r, I$e()),
    c = s;
  try {
    (g(s, { recursive: !0, mode: 448 }), fxe(s));
  } catch {
    c = n;
  }
  return (e.setChildProcessTmpDirMemo({ forDir: n, result: c }), c);
}
function aZo() {
  let e = Ap();
  if (Buffer.byteLength(e) <= zar) return e;
  return k();
}
function gxe(e = "claude-prompt", n = ".md", r) {
  let o = r?.contentHash ? ae("sha256").update(r.contentHash).digest("hex").slice(0, 16) : de();
  return N(jd(), `${e}-${o}${n}`);
}
export {
  iSe,
  tkn,
  iZo,
  eX,
  ws,
  gst,
  tX,
  EAt,
  Gar,
  kAt,
  hst,
  nkn,
  yui,
  Ap,
  zar,
  rkn,
  okn,
  fxe,
  I$e,
  jd,
  pxe,
  mxe,
  aZo,
  gxe
};

//# sourceMappingURL=chunk-v4kbwz0z.js.map
