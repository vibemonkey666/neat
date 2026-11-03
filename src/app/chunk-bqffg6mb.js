// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { OR, L, ke, yS, hT, J } from "./chunk-wrtp8qz8.js";
import {
  dcr,
  uy,
  JYt,
  Fl,
  fcr,
  pcr,
  mcr,
  gcr,
  pE,
  Kxe,
  qSe,
  ew,
  xf,
  GM
} from "./chunk-h5gbmqm1.js";
import { Le } from "./chunk-jazcqqqr.js";
import { jo } from "./chunk-4kxznmzw.js";
import { pl } from "./chunk-5rw2zfa0.js";
import { jE } from "./chunk-x2h5w7zv.js";
import { l } from "./chunk-ewvf3tep.js";
import { p } from "./chunk-qmkm2x59.js";
import { Fd, e0, ajo } from "./chunk-p56qmwgb.js";
import { Ie } from "./chunk-g2mvjkdk.js";
import { i7 } from "./chunk-5nq3yzmr.js";
import { o, oe, T, u } from "./chunk-0bqrj5ah.js";
import { join as O, resolve as f, sep as _ } from "path";
function N8(e, r, n = Date.now()) {
  return Number.isFinite(e) && Math.abs(n - e) < r;
}
import { normalize as v, sep as b } from "path";
var x = 1024;
function vw(e) {
  let r = jE().foldedSegmentsBySpelling,
    n = r.get(e);
  if (n === void 0) {
    if (((n = v(e).split(b).map(pl).join(b)), r.size >= x)) r.clear();
    r.set(e, n);
  }
  return n;
}
var Npn = "cache";
function eR() {
  return f(ke(), Fd());
}
function Hre() {
  return O(eR(), Npn);
}
function _Xn() {
  return L([f(Le(), "plugins"), f(Le(), "cowork_plugins"), eR(), ...e0().map((e) => f(ke(), e))]);
}
function C1o() {
  return L([...yS(), ...hT()].map((e) => f(ke(), e)));
}
function D6s(e) {
  let r = C1o();
  if (r.length === 0) return !1;
  if (Kxe(e, h)) return !0;
  let n = r.join("\x00"),
    i = Ie(),
    t = i.inlinePluginRootsComparableMemo;
  if (t?.roots !== n || !N8(t.at, N))
    ((t = {
      roots: n,
      comparable: r.map((s) => ew(s, { foldCase: !0, knownNotSuspect: !Kxe(s, h) })),
      at: Date.now()
    }),
      (i.inlinePluginRootsComparableMemo = t));
  let g = ew(e, { foldCase: !0, knownNotSuspect: !0 });
  return t.comparable.some((s) => xf(s, g, { alreadyComparable: !0 }));
}
var N = 30000,
  h = { allowLocalWsl: !0, eisdirIsFolder: !0 };
function H6s(e) {
  if (J()) return !0;
  let r = jo(f(i7())),
    n = vw(f(e));
  if (r.map(vw).some((s) => n === s || n.startsWith(s + _))) return !0;
  let i = GM(e) || pE(e),
    t = !uy(e) && (!i || Fl(e));
  if (t && Kxe(e, h)) return !0;
  let g = ew(e, { foldCase: !0, knownNotSuspect: t });
  return r.some((s) => xf(ew(s, { foldCase: !0 }), g, { alreadyComparable: !0 }));
}
import { readFileSync as W, statSync as I } from "fs";
import { isAbsolute as w, join as M, resolve as S } from "path";
var k = 4194304,
  E = p(() =>
    u({
      sourceCommand: o()
        .optional()
        .catch(void 0),
      sourceProducerPath: o()
        .optional()
        .catch(void 0),
      previousProducerPaths: T(oe())
        .transform((e) => e.filter((r) => typeof r === "string"))
        .optional()
        .catch(void 0)
    }).passthrough()
  );
function R1o(e) {
  let r = Ie(),
    n = r.commandProducerDirsDenied,
    i = R();
  r.commandProducerDirsWslProviderUndeterminable = i === "undeterminable";
  let t = i === "undeterminable" ? void 0 : i;
  ((r.commandProducerDirsScannedAt = Date.now()), (r.commandProducerDirsComparable = null));
  for (let g of new Set(e)) {
    let s;
    try {
      let m = M(g, "installed_plugins.json"),
        P = I(m);
      if (!P.isFile() || P.size > k) continue;
      let c = W(m, "utf8");
      s = JSON.parse(c);
    } catch {
      continue;
    }
    let a = typeof s === "object" && s !== null && "plugins" in s ? s.plugins : void 0;
    if (typeof a !== "object" || a === null) continue;
    for (let m of Object.values(a)) {
      if (!Array.isArray(m)) continue;
      for (let P of m) {
        let c = E().safeParse(P);
        if (!c.success) continue;
        for (let C of [c.data.sourceProducerPath, ...(c.data.previousProducerPaths ?? [])]) {
          let d = C === void 0 ? void 0 : qSe(C),
            D = d === void 0 ? void 0 : y(d, t);
          if (D !== void 0) n.add(D);
        }
      }
    }
  }
  return [...n];
}
function pet(e, { emit: r = !0 } = {}) {
  let n = R(),
    i = y(qSe(e), n === "undeterminable" ? void 0 : n);
  if (i === void 0) return;
  let t = Ie().commandProducerDirsDenied;
  if (t.has(i)) return;
  if ((t.add(i), (Ie().commandProducerDirsComparable = null), r)) E2e();
}
function E2e() {
  try {
    Ie().commandProducerDirsChanged.emit();
  } catch (e) {
    l(e);
  }
}
var x1o = OR(() => Ie().commandProducerDirsChanged);
function L6s(e, r, n, { maxAgeMs: i = 0 } = {}) {
  let t = Ie();
  if (
    !(i > 0 && Date.now() - t.commandProducerDirsScannedAt < i) ||
    t.commandProducerDirsComparable === null
  ) {
    let a = { foldCase: !0 },
      m = ew(ke(), a),
      P = ew(n, a),
      c = r.map((d) => ew(d, a)).filter((d) => !xf(d, m, { alreadyComparable: !0 })),
      C = R1o(r).map((d) => ew(d, a));
    ((t.commandProducerDirsComparable = [...c, ...C]),
      (t.commandProducerDirsNeedCanonicalCandidate =
        C.length > 0 || c.some((d) => !xf(P, d, { alreadyComparable: !0 }))));
  }
  if (
    t.commandProducerDirsWslProviderUndeterminable &&
    (JYt(qSe(e)) !== void 0 || JYt(ew(e, { foldCase: !0 })) !== void 0)
  )
    return !0;
  if (t.commandProducerDirsComparable.length === 0) return !1;
  if (t.commandProducerDirsNeedCanonicalCandidate && Kxe(w(e) ? e : S(e), { allowLocalWsl: !0 }))
    return !0;
  let s = t.commandProducerDirsNeedCanonicalCandidate
    ? ew(e, { foldCase: !0, knownNotSuspect: !0 })
    : S(e).normalize("NFC").toLowerCase();
  return t.commandProducerDirsComparable.some((a) => xf(a, s, { alreadyComparable: !0 }));
}
function R() {
  let e = Ie(),
    r = eR(),
    n = e.wslProviderOfPluginsRootMemo;
  if (n?.root === r && N8(n.at, A)) return n.value;
  let i = ajo(r);
  if (i === "undeterminable") return "undeterminable";
  let t = i === void 0 ? void 0 : { prefix: i.prefix };
  return ((e.wslProviderOfPluginsRootMemo = { root: r, value: t, at: Date.now() }), t);
}
var A = 30000;
function y(e, r) {
  let n = mcr(e, { exactDots: !0 }) ?? (r === void 0 ? void 0 : pcr(e, r.prefix));
  if (n !== void 0) return n;
  if (w(e)) return !dcr(e) && (!pE(e) || fcr(e)) ? e : void 0;
  return gcr(e, { exactDots: !0 });
}
export { N8, vw, Npn, eR, Hre, _Xn, C1o, D6s, H6s, R1o, pet, E2e, x1o, L6s };

//# sourceMappingURL=chunk-bqffg6mb.js.map
