// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { L, es, wX, J } from "./chunk-wrtp8qz8.js";
import { c } from "./chunk-acd8w9vv.js";
import { R, Rr, E, Vt } from "./chunk-fs43t96t.js";
import { Pe } from "./chunk-4hww8411.js";
import { In, BCt } from "./chunk-h5gbmqm1.js";
import { W } from "./chunk-jgvfzp2r.js";
import { a } from "./chunk-4cgvah10.js";
import { xxe, Qse, ie, t } from "./chunk-4kxznmzw.js";
import { x5 } from "./chunk-ajtyjx88.js";
import { Ww, FEn } from "./chunk-dc0nzty2.js";
import { fe } from "./chunk-xe386mry.js";
import { ut, hSe, Ib, Y4e } from "./chunk-jtb5bzvb.js";
import { ws } from "./chunk-v4kbwz0z.js";
import { Zt } from "./chunk-d54avynm.js";
import { pv, f1o, Iu, xa, Lye } from "./chunk-d5zj5299.js";
import { GD } from "./chunk-1ww4jg8j.js";
import { ZN, Cjs, MD } from "./chunk-6h7ejyet.js";
import { Up } from "./chunk-t1ptejf0.js";
import { constants as N } from "fs";
import { lstat as pe, open as me, readlink as he, realpath as G } from "fs/promises";
import { normalize as _e } from "path";
import { normalize as te, parse as ne, sep as v } from "path";
var re = 512,
  oe = 4096;
function D(e) {
  return Array.isArray(e) && e.length > 0 && e.length <= re && e.every(se) ? e : void 0;
}
function se(e) {
  return typeof e === "string" && e.length <= oe && !e.includes("\x00") && Y4e(e) && te(e) === e;
}
function C(e, r) {
  return e.some((n) => {
    let o = n.endsWith(v) && ne(n).root !== n ? n.slice(0, -v.length) : n;
    return r === o || r.startsWith(o + v);
  });
}
import { dirname as K, join as ue, resolve as X } from "path";
import { isAbsolute as O, normalize as H, parse as ae, sep as x } from "path";
var le = 32,
  de = 4096;
async function U(e, { directories: r, unprobedDirectories: n = [], gate: o, heldFiles: s }) {
  try {
    if (
      e === "" ||
      e !== e.trim() ||
      e.length > de ||
      e.includes("\x00") ||
      /^~(?:\/|$)/.test(e) ||
      (ae(e).root !== "" && !Y4e(e))
    )
      return { path: null, why: "unfit_text" };
    let i = r.filter((d) => Y4e(d)),
      p = n.filter((d) => Y4e(d)),
      m = new Set((O(e) ? [e] : i).map((d) => Ib(e, d))),
      l = await I([...m], e, o);
    if (l === null) return { path: null, why: "too_many" };
    let u = new Set(s()),
      h = new Set(l.flat());
    if ([...m, ...p.map((d) => Ib(e, d))].some((d) => u.has(d) && !h.has(d)))
      return { path: null, why: "held_file_unreadable" };
    let f = l.filter((d) => d.some((y) => u.has(y)));
    if (l.length > 0) return j(f.length > 0 ? f : l, "directories");
    let _ = H(e);
    if (
      i.length === 0 ||
      O(e) ||
      _.length !== e.length ||
      _.split(x).some((d) => ["", ".", ".."].includes(d))
    )
      return { path: null, why: "no_file" };
    let w = M(x + _, u, i),
      b = new Set(w);
    if (M(x + _, u, p).some((d) => !b.has(d))) return { path: null, why: "held_file_unreadable" };
    if (w.length === 0) return { path: null, why: "needs_file_search" };
    let F = await I(w, e, o);
    return F !== null && F.flat().length < w.length
      ? { path: null, why: "held_file_unreadable" }
      : j(F, "file_state");
  } catch (i) {
    if (i instanceof hSe) return { path: null, why: "unfit_text" };
    try {
      let p = E(i),
        m = i instanceof Error ? i.name : typeof i;
      t(`resolveAsWrittenPath failed: ${p === void 0 ? m : `${m}/${p}`}`, { level: "error" });
    } catch {}
    return { path: null, why: "fault" };
  }
}
async function I(e, r, n) {
  if (e.length > le) return null;
  let o = new Map();
  for (let s of e) {
    let i = await n(s, r);
    if (i !== null) o.set(i, [...(o.get(i) ?? []), s]);
  }
  return [...o.values()];
}
function j(e, r) {
  if (e === null) return { path: null, why: "too_many" };
  let n = e[0]?.[0];
  return n === void 0
    ? { path: null, why: "no_file" }
    : e.length > 1
      ? { path: null, why: "tie" }
      : { path: n, step: r };
}
function M(e, r, n) {
  let o = new Set();
  for (let s of r)
    if (s.endsWith(e) && Y4e(s) && H(s) === s && n.some((i) => Up(i, s, !1))) o.add(s);
  return [...o];
}
async function ce(e, r, n) {
  if (J()) return null;
  let o = X(e);
  if (r.unresolved || r.landing !== In(o)) return null;
  let s = ie();
  for (let i = o; !n(); i = K(i)) {
    let p = await s.lstat(ue(i, ".git")).catch(() => {
      return;
    });
    if (p?.isDirectory() === !0 || p?.isFile() === !0 || p?.isSymbolicLink() === !0) return In(i);
    if (K(i) === i) return null;
  }
  return null;
}
async function z(e, { heldFiles: r, timeLimitMs: n, stranded: o, whyNotBegin: s }, i, p) {
  if (o.probes > 0) return { path: null, why: "stranded" };
  let m = s();
  if (m !== void 0) return { path: null, why: m };
  let l = fe(),
    u = (y) => MD(y, i.trustedNetworkDirectories) === void 0,
    h = performance.now() + n,
    f = !1,
    _ = () => f || performance.now() >= h,
    w = 0,
    b = (y) => (
      w++,
      y.finally(() => {
        (w--, (o.probes -= f ? 1 : 0));
      })
    ),
    F = { path: null, why: "no_file" },
    d = async () => {
      let y = null;
      if (u(l)) {
        let g = await b(Qse(X(l)));
        if (_()) return F;
        y = await b(ce(l, g, _));
      }
      if (_()) return F;
      let T = L([l, y ?? l, ...pv(i)]),
        S = T.filter(u);
      for (let g of S) {
        if (_()) return F;
        if (g !== l) await b(Qse(g));
      }
      if (_()) return F;
      return U(e, {
        directories: S,
        unprobedDirectories: T.filter((g) => !u(g)),
        gate: (g, k) => (_() ? Promise.resolve(null) : b(p(g, k, i))),
        heldFiles: r
      });
    };
  try {
    let y = await Pe(d(), n);
    return y === void 0 || _() ? { path: null, why: "time_limit" } : y;
  } finally {
    ((f = !0), (o.probes += w));
  }
}
var ge = 1e6,
  yfr = N.O_RDONLY | (N.O_NONBLOCK ?? 0) | (N.O_NOCTTY ?? 0) | ws,
  Q = { realpath: G, lstat: pe, readlink: he },
  _fr = 1e7,
  ye = new W(() => ({ promise: void 0 }));
function we() {
  let e = es(ye);
  return (
    (e.promise ??= Promise.all([import("./chunk-e8c4mwqx.js"), import("./chunk-vnnbf779.js")])
      .then(([r, n]) => [...r.FIXED_USER_DATA_ROOTS, n.SYNCED_FILE_ROOT])
      .catch((r) => {
        throw ((e.promise = void 0), r);
      })),
    e.promise
  );
}
function Re(e, r) {
  if (!r || r.size === 0) return !1;
  for (let n of r.values()) if (n.includes(e)) return !0;
  return !1;
}
async function txn(e, r) {
  let n = [];
  try {
    n = await we();
  } catch {}
  for (let o of pv(r)) {
    if (
      r.additionalWorkingDirectories.has(o) &&
      !Re(o, r.trustedNetworkDirectories) &&
      (await xxe(o, wX()))
    )
      continue;
    let s;
    try {
      s = f1o(o) ? o : await G(o);
    } catch {
      continue;
    }
    if (BCt(o, s, wX())) continue;
    if (Iu(e, s, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 })) return !0;
  }
  for (let o of n)
    if (Iu(e, o, { caseFold: !1, skipPrivateAlias: !0, uncShapeParity: !0 })) return !0;
  return Lye(e, {}, [e], { remoteSurface: !0 }).behavior === "allow";
}
var Fe = {
  nt_namespace: "read_file: NT-namespace path rejected before filesystem access",
  untrusted_unc: "read_file: untrusted UNC path rejected before filesystem access",
  untrusted_automount: "read_file: automount path rejected before filesystem access",
  unvettable_chain: "read_file: unvettable path ancestry rejected before filesystem access",
  link_text_climbs:
    'read_file: path through a symlink whose target has ".." past its leading "../" segments rejected',
  suspicious_windows_spelling_nt_device_namespace:
    "read_file: suspicious Windows path spelling rejected (NT device namespace)",
  suspicious_windows_spelling_colon_past_drive_position:
    "read_file: suspicious Windows path spelling rejected (colon past the drive-letter position)",
  suspicious_windows_spelling_tilde_digit:
    "read_file: suspicious Windows path spelling rejected (tilde followed by a digit)",
  suspicious_windows_spelling_device_path_prefix:
    "read_file: suspicious Windows path spelling rejected (device-path prefix)",
  suspicious_windows_spelling_trailing_dot_or_whitespace:
    "read_file: suspicious Windows path spelling rejected (trailing dot or whitespace in a segment)",
  suspicious_windows_spelling_dos_device_suffix:
    "read_file: suspicious Windows path spelling rejected (DOS device-name suffix)",
  suspicious_windows_spelling_dot_run_segment:
    "read_file: suspicious Windows path spelling rejected (dot-run segment)",
  suspicious_windows_spelling_unc_or_webdav_form:
    "read_file: suspicious Windows path spelling rejected (UNC-like form: doubled or mixed separators, embedded NT root, or WebDAV marker)"
};
function A(e, r = "remote read denied") {
  return new Rr(`read denied: ${Zt(e)}`, r);
}
var P = { refused: !0, telemetryMessage: void 0, unsettled: !1, openFailure: void 0 },
  B = { ...P, unsettled: !0 };
async function V(e, r, n, o, s, i) {
  let p = i ? await Cjs(e, r, n.trustedNetworkDirectories) : ZN(e, r, n.trustedNetworkDirectories);
  if (!p.ok) {
    let l =
      p.reason === "suspicious_windows_spelling"
        ? `suspicious_windows_spelling_${p.spelling}`
        : p.reason;
    return { ...P, telemetryMessage: Fe[l] };
  }
  for (let l of p.pathsToCheck)
    if (!GD(l, n, "read").allowed || xa(l, n, "read", "ask") !== null) return P;
  let m;
  try {
    m = await me(r, yfr);
  } catch (l) {
    return { ...P, openFailure: { error: l } };
  }
  try {
    let l = await m.stat({ bigint: !0 });
    if (!l.isFile()) return P;
    let u;
    try {
      u = await o.realpath(r);
    } catch {
      return B;
    }
    let h = await FEn(m, l, u, o);
    if (h === void 0) return B;
    if (((u = h), !GD(u, n, "read").allowed || xa(u, n, "read", "ask") !== null)) return P;
    if (MD(u, n.trustedNetworkDirectories) !== void 0) return P;
    if (!(await txn(u, n))) return P;
    return { refused: !1, value: await s({ handle: m, openedStat: l, canonicalPath: u }) };
  } finally {
    await m.close();
  }
}
function Y(e) {
  return e === void 0 ? void 0 : c(e);
}
async function LFe(
  e,
  r,
  n,
  {
    encoding: o = "utf-8",
    anchor: s,
    telemetrySource: i,
    containmentFs: p = Q,
    asWrittenSources: m
  } = {}
) {
  let l = Math.min(r && r > 0 ? r : ge, _fr),
    u = s?.kind === "as_written",
    h = u ? "not_served" : void 0;
  try {
    let f =
      s === void 0 || u
        ? void 0
        : await (await import("./chunk-qgn83ma1.js")).resolveAnchoredReadPath(e, s);
    if (f === null) throw A(e);
    let _ = () => {
        let S = m?.whyNotServed();
        if (S !== void 0) throw ((h = S), A(e));
      },
      w;
    if (u) {
      if (m === void 0) throw A(e);
      _();
      let S = D(s.within);
      if (S === void 0) throw ((h = "unfit_within"), A(e));
      h = "fault";
      let g = await z(e, m, typeof n === "function" ? n() : n, (k, q, ee) => Se(k, q, ee, p));
      if (((h = g.path === null ? g.why : g.step), g.path === null)) throw A(e);
      if (!C(S, g.path)) throw ((h = "outside"), A(e));
      w = g.path;
    }
    let b = typeof n === "function" ? n() : n,
      F = f?.absPath ?? w ?? ut(e),
      d = await V(e, F, b, p, ({ handle: S, openedStat: g }) => Ww(S, l, g.size), u);
    if (d.refused) throw d.openFailure === void 0 ? A(e, d.telemetryMessage) : d.openFailure.error;
    let { bytes: y, overLimit: T } = d.value;
    if (w !== void 0) _();
    if (i)
      a("tengu_bridge_read_file_served", {
        success: !0,
        source: c(i),
        size_bytes: y.length,
        requested_max_bytes: l,
        truncated: T,
        ext: x5(F),
        as_written_lookup: Y(h)
      });
    return {
      contents: y.toString(o === "base64" ? "base64" : "utf-8"),
      absPath: F,
      ...(T && { truncated: T }),
      ...(o === "base64" && { encoding: o }),
      ...(f !== void 0 && { anchor: f.kind }),
      ...(w !== void 0 && { anchor: "as_written" })
    };
  } catch (f) {
    try {
      let _ =
        f instanceof Error
          ? "code" in f && typeof f.code === "string"
            ? `${f.name}/${f.code}`
            : f.name
          : typeof f;
      t(
        `readFileForRemote failed pre-deny: ${_}${h === void 0 ? "" : `, as_written look-up: ${h}`}`,
        { level: "error" }
      );
    } catch {}
    try {
      if (i)
        a("tengu_bridge_read_file_served", { success: !1, source: c(i), as_written_lookup: Y(h) });
    } catch {}
    try {
      if (h !== void 0) m?.onRefusal(h);
    } catch {}
    if (f instanceof R && f.message.startsWith("read denied: ")) throw f;
    throw A(e);
  }
}
class Z extends Error {
  constructor() {
    super("probeFileForRemote: cannot tell whether the path names a file");
    this.name = "UnsettledRemoteFileError";
  }
}
async function Se(e, r, n, o = Q) {
  if (!Y4e(e) || _e(e) !== e) return null;
  let s = await V(r, e, n, o, ({ canonicalPath: i }) => Promise.resolve(i), !0);
  if (!s.refused) return s.value;
  if (s.openFailure !== void 0) {
    let { error: i } = s.openFailure;
    if (Vt(i) || ["EISDIR", "ENXIO", "ENOTSUP", "EOPNOTSUPP"].includes(E(i) ?? "")) return null;
    throw i;
  }
  if (s.unsettled) throw new Z();
  return null;
}
export { yfr, _fr, txn, LFe };

//# sourceMappingURL=chunk-j36zp7t4.js.map
