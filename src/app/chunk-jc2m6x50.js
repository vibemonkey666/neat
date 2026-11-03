// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { E } from "./chunk-fs43t96t.js";
import { Iv } from "./chunk-h5gbmqm1.js";
import { O } from "./chunk-19xvg81r.js";
import { iP, Os } from "./chunk-qywdxehb.js";
import { fe } from "./chunk-xe386mry.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { Jt } from "./chunk-r1dvrqha.js";
import { Ga } from "./chunk-hp871ge6.js";
import { ip, xw } from "./chunk-nvjx6a4x.js";
import { Vae, w4 } from "./chunk-v3dqhn7m.js";
import { vo, VT, YA, sV } from "./chunk-d5zj5299.js";
import { unlink as D } from "fs/promises";
import { join as g, normalize as y, sep as w } from "path";
function m(n) {
  let t = n.split("/"),
    r = O();
  if (r === "windows" && t.some((e) => /[<>"|*]/.test(e) || Iv(e) || /[. ]$/.test(e)))
    return `path ${Ga(n)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
  if ((r === "windows" || r === "wsl") && t.some((e) => /~\d/.test(e)))
    return `path ${Ga(n)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
  return;
}
function YX(n) {
  let t = n,
    r = (i) => {
      let o = t[i];
      return typeof o === "string" ? o : void 0;
    },
    e = xw(t.paths),
    s = e === void 0 ? void 0 : e === ip ? [] : e.filter((i) => typeof i === "string");
  return { path: r("path"), paths: s, outDir: r("out_dir") };
}
function Jpe(n, { outDirJudged: t = !1 } = {}) {
  let { path: r, outDir: e } = YX(n);
  if (r === void 0)
    return { reason: "read_file requires `path` \u2014 a published path from a list_files result" };
  let s = w4(r);
  if ("errMsg" in s) return { reason: s.errMsg };
  let i = s.key.split("/"),
    o = m(s.key);
  if (o !== void 0) return { reason: o };
  let d = O(),
    a = d === "windows" || d === "wsl",
    l,
    f = !1;
  try {
    if (e === void 0 || e === "") {
      let { url: u } = n,
        c = typeof u === "string" ? Jt(u) : null,
        p = c !== null ? J6(c.slug) : null;
      ((f = p !== null), (l = p ?? fe()));
    } else l = ut(e);
  } catch {
    return { reason: "out_dir cannot be resolved to a local directory" };
  }
  if (!t && d === "windows" && l.split(w).some((u) => u !== "" && /[. ]$/.test(u)))
    return {
      reason: `${e === void 0 || e === "" ? "the default save directory" : `out_dir ${Ga(e)}`} has a name ending in a dot or space, which Windows would save under a different name`
    };
  if (!t && a && e !== void 0 && e.split(/[\\/]/).some((u) => /~\d/.test(u)))
    return {
      reason: `out_dir ${Ga(e)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
    };
  return { dest: g(l, ...i), base: l, ...(f && { defaultDir: !0 }) };
}
var h = new WeakMap();
function h3e(n, t = {}) {
  let r = n,
    { paths: e, url: s, out_dir: i } = r,
    o = typeof e === "object" && e !== null ? e : void 0,
    d = [
      typeof s === "string" ? s : "",
      typeof i === "string" ? i : "",
      t.outDirJudged === !0 ? "judged" : "",
      fe(),
      (VT() ? YA() : null) ?? ""
    ].join("\x00"),
    a = o === void 0 ? void 0 : h.get(o);
  if (a !== void 0 && a.key === d) return a.value;
  let l = b(n, t);
  if (o !== void 0) h.set(o, { key: d, value: l });
  return l;
}
function b(n, t) {
  let { paths: r } = YX(n);
  if (r === void 0 || r.length === 0)
    return { reason: "read_file requires `path`, or `paths` naming at least one published path" };
  if (r.length > Vae)
    return { reason: `\`paths\` names ${r.length} paths; at most ${Vae} can be read in one call` };
  let e = { ...n };
  delete e.paths;
  let s,
    i = [],
    o = new Map();
  for (let d of r) {
    let a = Jpe({ ...e, path: d }, t);
    if ("reason" in a) return a;
    let l = w4(d),
      f = "key" in l ? l.key : d,
      u = vo(y(a.dest).normalize("NFC").toUpperCase().toLowerCase()),
      c = o.get(u);
    if (c !== void 0)
      return {
        reason:
          c === f
            ? `\`paths\` names ${Ga(d)} more than once`
            : `\`paths\` names ${Ga(c)} and ${Ga(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
      };
    (o.set(u, f),
      (s ??= { base: a.base, ...(a.defaultDir && { defaultDir: a.defaultDir }) }),
      i.push({ path: f, dest: a.dest }));
  }
  return { ...s, files: i };
}
var ico = "artifact-files";
function J6(n) {
  let t = VT() ? YA() : null;
  return t === null ? null : g(t, ico, n);
}
function mae(n) {
  return n.length > 0 && n.every((t) => t.length > 0 && t.every((r) => sV(r)));
}
function y3e(n) {
  let t = VT() ? YA() : null;
  return t !== null && vo(y(n)).startsWith(vo(t) + w);
}
class Qee extends Error {
  partial;
  renameError;
  removedEarlier;
  constructor(n, t, r) {
    super("the staged file could not be moved into place");
    this.partial = n;
    this.renameError = t;
    this.removedEarlier = r;
    this.name = "PartialKeptError";
  }
}
async function _3e(n, t, r) {
  let e = !0;
  try {
    await Os(n, t, r);
    return;
  } catch (s) {
    let i = E(s);
    if (i === void 0 || !iP.has(i)) throw s;
    await D(t).catch((o) => {
      if (E(o) !== "ENOENT") throw s;
      e = !1;
    });
  }
  try {
    await Os(n, t, r);
  } catch (s) {
    throw new Qee(n, s, e);
  }
}
export { YX, Jpe, h3e, ico, J6, mae, y3e, Qee, _3e };

//# sourceMappingURL=chunk-jc2m6x50.js.map
