// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _, t } from "./chunk-4kxznmzw.js";
import { I } from "./chunk-a16y5hcz.js";
import { Z } from "./chunk-p27rr8yn.js";
import { g, f } from "./chunk-brszmkb3.js";
import { i } from "./chunk-cj37hmns.js";
import { Z$ } from "./chunk-4nzy53ma.js";
import { xn } from "./chunk-r1dvrqha.js";
import { u$ } from "./chunk-tzm7jehf.js";
import { Fte } from "./chunk-etxcb881.js";
import { Dae } from "./chunk-af024f8a.js";
import { np } from "./chunk-c37wkx9w.js";
var C =
    "Nothing was published or removed: this publish touches files whose published content is not what you last saw",
  V = "Changed since you last saw them:",
  E = "Already published, and not read as published or listed by you in this session:";
function qAs(e) {
  if (
    !e.startsWith(
      "Nothing was published or removed: this publish touches files whose published content is not what you last saw"
    )
  )
    return;
  let r = e.indexOf(`
Changed since you last saw them:`),
    n = e.indexOf(`
Already published, and not read as published or listed by you in this session:`),
    s = (c, p) => (c === -1 ? "" : e.slice(c, p === -1 || p < c ? void 0 : p)),
    a = s(r, n),
    o = s(n, -1),
    l = (c) => [...c.matchAll(/^- ("(?:[^"\\]|\\.)*")/gm)].map((p) => p[1]),
    d = (c) => Number(/^- (?:and )?(\d+) (?:more|paths?, not named here):/m.exec(c)?.[1] ?? 0),
    h = l(a),
    u = l(o),
    P = h.length + d(a),
    m = u.length + d(o),
    v = [...a.matchAll(/^- "(?:[^"\\]|\\.)*": [^\n]*it has since been removed/gm)].length;
  if (P > 0 && m > 0)
    return "Not published: some files on the artifact changed since Claude last saw them, and others Claude has not read yet. Claude needs to read the latest versions before publishing again.";
  if (P === 1)
    return v === 1
      ? `Not published: ${h[0]} was removed from the artifact since Claude last saw it. Publishing again creates it afresh.`
      : `Not published: ${h[0]} changed on the artifact since Claude last saw it. Claude needs to read the latest version before publishing again.`;
  if (P > 1)
    return `Not published: ${P} files changed on the artifact since Claude last saw them. Claude needs to read the latest versions before publishing again.`;
  if (m === 1)
    return `Not published: ${u[0]} is already on the artifact and Claude has not read it. Claude needs to read it before replacing or removing it.`;
  return `Not published: ${m} files are already on the artifact and Claude has not read them. Claude needs to read them before replacing or removing them.`;
}
var y = 20,
  yyo = 32000;
function sDt() {
  return i.CLAUDE_CODE_ARTIFACT_PATH_PIN ?? !0;
}
function _yo() {
  return sDt() && !Z$();
}
function g4() {
  return Z().frozenPathPin ?? sDt();
}
function k() {
  return Z().frozenPathPinAck ?? _yo();
}
function b(e) {
  let { pathPins: r } = Z(),
    n = r.get(e);
  if (n === void 0) ((n = new Map()), r.set(e, n));
  return n;
}
function Qve() {
  return ++Z().pathPinSeq;
}
function w(e, r, n, s) {
  let a = e.get(r);
  if (a !== void 0 && a.seq > s) return;
  e.set(r, { ...n, seq: s });
}
function byo(e, r, n, s, a = Qve()) {
  if (!g4()) return;
  w(b(e), r, { sha256: n, ver: s, via: "read" }, a);
}
function Syo(e, r, n, s, a = Qve()) {
  if (!g4()) return;
  w(b(e), r, { sha256: n, ver: s, via: "list" }, a);
}
function wyo(e, r, n = Qve()) {
  if (!g4()) return;
  let s = Z().pathPins.get(e),
    a = s?.get(r);
  if (a !== void 0 && a.seq < n) s.delete(r);
}
function YAs(e, r, n, s = Qve()) {
  if (!g4()) return;
  let a = b(e);
  for (let o of n) {
    let l = a.get(o.path);
    if (l === void 0 || (l.via === "list" && l.sha256 !== null))
      w(a, o.path, { sha256: o.sha256, ver: r, via: "list" }, s);
  }
  N(a, r, s, n, !1);
}
function N(e, r, n, s, a) {
  let o = new Map(s.map((l) => [l.path, l]));
  for (let [l, d] of e) {
    let h = o.get(l);
    if (d.seq > n || (h === void 0 && !a)) continue;
    let u = h?.sha256 ?? null;
    if (h?.live === !0 || u === d.sha256) {
      if (d.behind !== void 0) e.set(l, { sha256: d.sha256, ver: d.ver, via: d.via, seq: d.seq });
    } else e.set(l, { ...d, behind: { sha256: u, sizeBytes: h?.sizeBytes, ver: r } });
  }
}
function XAs(e, r, n) {
  if (!g4()) return;
  let s = b(e),
    a = Qve();
  for (let o of n.written)
    if (o.sha256 === void 0) s.delete(o.path);
    else w(s, o.path, { sha256: o.sha256, ver: r, via: "publish" }, a);
  for (let o of n.removed) w(s, o, { sha256: null, ver: r, via: "publish" }, a);
}
function JAs(e) {
  if (!g4()) return !1;
  let r = Z().pathPins.get(e);
  if (r === void 0) return !1;
  for (let n of r.values()) if (n.via !== "list") return !0;
  return !1;
}
function QAs(e) {
  if (e === void 0) return {};
  let r = e.written.flatMap((n) =>
    n.sha256 === void 0 ? [] : [{ path: n.path, sha256: n.sha256 }]
  );
  return {
    ...(r.length > 0 && { files_written: r }),
    ...(e.removed.length > 0 && { files_removed: [...e.removed] })
  };
}
function vyo(e, r, n, s) {
  if (!g4()) return;
  let a = b(e);
  for (let o of n) w(a, o, { sha256: null, ver: r, via: "list" }, s);
}
function ZAs(e, r, n, s) {
  if (!g4() || n.length === 0) return;
  N(b(e), r, s, n, !1);
}
function S(e, r, n) {
  let s = n.filter((o) => o.liveSha256 === null).map((o) => o.path);
  if (s.length === 0) return;
  let a = Qve();
  return () => vyo(e, r, s, a);
}
function A(e) {
  let r = e.filter((n) => n.kind === "changed");
  return [...r.filter((n) => n.liveSha256 === null), ...r.filter((n) => n.liveSha256 !== null)];
}
function R(e) {
  let r = [],
    n = [
      ...e.writes.map((s) => ({ ...s, operation: "write" })),
      ...e.removes.map((s) => ({ path: s, operation: "remove", sha256: void 0 }))
    ];
  for (let { path: s, operation: a, sha256: o } of n) {
    if (e.liveDocs?.has(s)) continue;
    let l = e.pins?.get(s),
      d = e.live.get(s) ?? null;
    if (l === void 0) {
      if (d === null || e.acknowledged.has(s)) continue;
      if (a === "write" && o === d) continue;
      r.push({ kind: "unread", path: s, operation: a });
      continue;
    }
    if (l.sha256 === d) continue;
    if (a === "write" && o !== void 0 && o === d) continue;
    if (a === "remove" && d === null) continue;
    r.push({
      kind: "changed",
      path: s,
      operation: a,
      readSha256: l.sha256,
      readVer: l.ver,
      readVia: l.via,
      liveSha256: d
    });
  }
  return r;
}
function T(e, r) {
  return _(e.core ? Fte(r) : r);
}
function H(e) {
  return e.core ? 'action "read" with its `path`' : 'action "read_file"';
}
function M(e, r) {
  let n = r.files.get(e);
  if (n === void 0)
    return "  now: deleted; publishing this path again creates it afresh, so do that only if the user wants it back";
  let s = n.sizeBytes === void 0 ? "" : `, ${n.sizeBytes} ${I(n.sizeBytes, "byte")}`;
  return `  now: sha256 ${n.sha256}${s}; read it with ${T(r, { action: "read_file", url: r.url, path: e })}`;
}
function L(e, r, n) {
  let s =
      e.readSha256 !== null
        ? `you last saw it at version ${e.readVer}`
        : e.readVia === "publish"
          ? `you removed it at version ${e.readVer}`
          : `it was gone when you last checked (version ${e.readVer})`,
    a =
      e.liveSha256 === null
        ? `it has since been removed (version ${r})`
        : e.readSha256 === null
          ? `someone has since published a file there (version ${r})`
          : `someone has since replaced it (version ${r})`;
  return `- ${_(e.path)}: ${s}; ${a}
${M(e.path, n)}`;
}
function D(e, r, n) {
  if (e.length <= r)
    return e.join(`
`);
  let s = `- ${r > 0 ? `and ${e.length - r} more` : `${e.length} ${I(e.length, "path")}, not named here`}: ${T(n, { action: "list_files", url: n.url })} lists every file with its size`;
  return r > 0
    ? `${e.slice(0, r).join(`
`)}
${s}`
    : s;
}
function x(e, r, n) {
  let s = A(e),
    a = e.filter((d) => d.kind === "unread"),
    o = [
      s.length > 0
        ? `${C}, and sending your copy would replace a newer edit.`
        : `${C}, and sending your copy could discard content you have not read.`
    ],
    l = Math.min(s.length, y);
  if (s.length > 0) {
    let d = s.some((h) => h.liveSha256 === null);
    o.push(`${V}
${D(
  s.map((h) => L(h, r, n)),
  l,
  n
)}
Read each one${d ? " that still exists" : ""} again (${H(n)}), re-apply your change to what it holds now, and publish again${d ? "; a deleted one needs no read" : ""}. Never resend your earlier copy.${n.forced ? " `force` does not override this." : ""}${n.remembered ? ' The live file list could not be read for this publish, so each "now" line and its version are from an earlier listing or publish result in this session; the reads will show what is there now.' : ""}`);
  }
  if (a.length > 0)
    o.push(`${E}
${D(
  a.map(
    (d) => `- ${_(d.path)}
${M(d.path, n)}`
  ),
  y - l,
  n
)}
Read each one first (${H(n)}) and build on it.${n.ackOffered === !1 ? " Do so even when the user wants the file replaced outright." : " Only when the user asked for the file to be replaced without looking, name it in `overwrite_unread`."}`);
  return o.join(`

`);
}
async function eCs(e) {
  if (e.writes.length === 0 && e.removes.length === 0) return { kind: "pass", liveVer: void 0 };
  let r = Qve(),
    n = await Dae(e.target, e.signal, e.credentials);
  if (n.kind === "error") {
    if (
      (t(`[artifact] path pins: no listing (${n.reason}) slug=${e.target.slug}`),
      n.reason === "single_page")
    )
      return { kind: "pass", liveVer: void 0 };
    let d = Z().pathPins.get(e.target.slug),
      h = new Set(),
      u = new Map(),
      P = new Map(),
      m = "";
    for (let c of [...e.writes.map((p) => p.path), ...e.removes]) {
      let p = d?.get(c)?.behind;
      if (p === void 0) continue;
      if ((h.add(c), p.sha256 !== null))
        (u.set(c, p.sha256),
          P.set(c, {
            sha256: p.sha256,
            ...(p.sizeBytes !== void 0 && { sizeBytes: p.sizeBytes })
          }));
      if (m === "" || (u$(p.ver, m) ?? 1) > 0) m = p.ver;
    }
    let v = R({
      pins: d,
      live: u,
      writes: e.writes.filter((c) => h.has(c.path)),
      removes: e.removes.filter((c) => h.has(c)),
      acknowledged: new Set(e.acknowledged)
    });
    if (
      (f(
        "artifact_path_pin",
        v.length === 0 ? `skipped_${n.reason}` : `refused_without_listing_${n.reason}`
      ),
      v.length === 0)
    )
      return { kind: "pass", liveVer: void 0 };
    return {
      kind: "refuse",
      reasonCode: "path_pin_changed",
      message: x(v, m, {
        url: e.url ?? xn(e.target),
        files: P,
        core: np(),
        forced: e.force === !0,
        ackOffered: k(),
        remembered: !0
      }),
      onCommitted: S(e.target.slug, m, A(v).slice(0, y))
    };
  }
  let s = Z().pathPins.get(e.target.slug);
  if (s !== void 0) N(s, n.ver, r, n.files, !n.narrowed);
  let a = new Map(n.files.map((d) => [d.path, d.sha256])),
    o = new Set(n.files.filter((d) => d.live).map((d) => d.path)),
    l = R({
      pins: s,
      live: a,
      liveDocs: o,
      writes: e.writes,
      removes: e.removes,
      acknowledged: new Set(e.acknowledged)
    });
  if (
    (g("artifact_path_pin", { checked: e.writes.length + e.removes.length, refused: l.length }),
    l.length === 0)
  ) {
    let d = n.publishPreconditions === !0 ? z(a, o, e.writes, e.removes) : void 0,
      h = e.writes
        .filter((u) => u.sha256 !== void 0 && !o.has(u.path) && a.get(u.path) === u.sha256)
        .map((u) => u.path);
    return {
      kind: "pass",
      liveVer: n.ver,
      ...(h.length > 0 && { unchanged: h }),
      ...(!n.narrowed && {
        liveOwnPaths: n.files.map((u) => u.path).filter((u) => n.typePaths?.includes(u) !== !0)
      }),
      ...(n.title !== void 0 && { liveTitle: n.title }),
      ...(n.favicon !== void 0 && { liveFavicon: n.favicon }),
      ...(d !== void 0 && { preconditions: d })
    };
  }
  return {
    kind: "refuse",
    reasonCode: l.some((d) => d.kind === "changed") ? "path_pin_changed" : "path_pin_unread",
    message: x(l, n.ver, {
      url: e.url ?? xn(e.target),
      files: new Map(n.files.map((d) => [d.path, { sha256: d.sha256, sizeBytes: d.sizeBytes }])),
      core: np(),
      forced: e.force === !0,
      ackOffered: k()
    }),
    onCommitted: S(e.target.slug, n.ver, A(l).slice(0, y))
  };
}
function z(e, r, n, s) {
  let a = new Map();
  for (let { path: o } of n) {
    if (r.has(o)) return;
    a.set(o, e.get(o) ?? null);
  }
  for (let o of s) {
    let l = e.get(o);
    if (l === void 0 || r.has(o)) return;
    a.set(o, l);
  }
  return a;
}
function tCs(e) {
  let r = Z().pathPins.get(e.target.slug),
    n = e.paths.map((a) => {
      let o = r?.get(a.path),
        l = e.removes.includes(a.path) ? "remove" : "write";
      return o !== void 0 && o.sha256 === a.expected
        ? {
            kind: "changed",
            path: a.path,
            operation: l,
            readSha256: a.expected,
            readVer: o.ver,
            readVia: o.via,
            liveSha256: a.actual
          }
        : { kind: "unread", path: a.path, operation: l };
    }),
    s = new Map();
  for (let a of e.paths) if (a.actual !== null) s.set(a.path, { sha256: a.actual });
  return {
    message: x(n, e.liveVer, { url: e.url ?? xn(e.target), files: s, core: np(), ackOffered: k() }),
    onCommitted: S(e.target.slug, e.liveVer, A(n).slice(0, y))
  };
}
export { qAs, yyo, sDt, _yo, g4, Qve, byo, Syo, wyo, YAs, XAs, JAs, QAs, vyo, ZAs, eCs, tCs };

//# sourceMappingURL=chunk-15n3scej.js.map
