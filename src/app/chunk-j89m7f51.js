// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { De } from "./chunk-2qx8pe6s.js";
import { L, q, ke, ao, J } from "./chunk-wrtp8qz8.js";
import { d } from "./chunk-fs43t96t.js";
import { a } from "./chunk-4cgvah10.js";
import { ie, t } from "./chunk-4kxznmzw.js";
import { tr, Pt, ll, fe } from "./chunk-xe386mry.js";
import { l } from "./chunk-ewvf3tep.js";
import { ut } from "./chunk-jtb5bzvb.js";
import { rce, XZe, Rbt } from "./chunk-d5zj5299.js";
import { hr, It } from "./chunk-dc0nzty2.js";
import { ct } from "./chunk-qmmh8tq2.js";
import { Wg, Lvn, Nvn } from "./chunk-d54avynm.js";
import { pt } from "./chunk-7c3thgax.js";
import { ue } from "./chunk-ajtyjx88.js";
import { k8 } from "./chunk-1ww4jg8j.js";
import { RPs, tle, NRr, qu, bRo } from "./chunk-j0tbz6ra.js";
import { Eut } from "./chunk-f3r42dej.js";
import { Ce } from "./chunk-a2y39866.js";
var S = Ce(rce(), 1);
import { statSync as M } from "fs";
import * as p from "path";
function G() {
  return {
    fileIndex: null,
    fileListRefreshPromise: null,
    cacheGeneration: 0,
    untrackedFetchPromise: null,
    cachedTrackedFiles: [],
    cachedConfigFiles: [],
    cachedTrackedDirs: [],
    ignorePatternsCache: null,
    ignorePatternsCacheKey: null,
    lastRefreshMs: 0,
    lastScanDurationMs: null,
    lastGitIndexMtime: null,
    loadedTrackedSignature: null,
    loadedMergedSignature: null,
    normalizedTrackedInputs: null,
    indexBuildComplete: De(),
    indexBaseDir: null,
    indexLoadCount: 0
  };
}
var Wve = G();
function Fgo(e) {
  ((e.fileIndex = null),
    (e.fileListRefreshPromise = null),
    e.cacheGeneration++,
    (e.untrackedFetchPromise = null),
    (e.cachedTrackedFiles = []),
    (e.cachedConfigFiles = []),
    (e.cachedTrackedDirs = []),
    (e.ignorePatternsCache = null),
    (e.ignorePatternsCacheKey = null),
    (e.lastRefreshMs = 0),
    (e.lastScanDurationMs = null),
    (e.lastGitIndexMtime = null),
    (e.loadedTrackedSignature = null),
    (e.loadedMergedSignature = null),
    (e.normalizedTrackedInputs = null),
    (e.indexBaseDir = null),
    e.indexLoadCount++);
}
function P(e, r, i, n) {
  let o = ++e.indexLoadCount,
    s = r.loadFromFileListAsync(i);
  return (
    s.queryable.then(() => {
      if (e.indexLoadCount === o) e.indexBaseDir = n;
    }),
    s.done
  );
}
function v(e) {
  let r = e.length,
    i = Math.max(1, Math.floor(r / 500)),
    n = -2128831035;
  for (let o = 0; o < r; o += i) {
    let s = e[o];
    for (let g = 0; g < s.length; g++) n = ((n ^ s.charCodeAt(g)) * 16777619) | 0;
    n = (n * 16777619) | 0;
  }
  if (r > 0) {
    let o = e[r - 1];
    for (let s = 0; s < o.length; s++) n = ((n ^ o.charCodeAt(s)) * 16777619) | 0;
  }
  return `${r}:${(n >>> 0).toString(16)}`;
}
function w(e, r) {
  return `${e}\x00${v(r)}`;
}
function j() {
  let e = hr(fe());
  if (!e) return null;
  try {
    return M(p.join(e, ".git", "index")).mtimeMs;
  } catch {
    return null;
  }
}
async function y(e, r, i) {
  if (i === r) return e;
  let n = Array(e.length),
    o = performance.now();
  for (let s = 0; s < e.length; s++) {
    let g = p.join(r, e[s]);
    if (((n[s] = p.relative(i, g)), (s & 255) === 255 && performance.now() - o > Lvn))
      (await Wg(), (o = performance.now()));
  }
  return n;
}
async function B(e, r, i) {
  if (r.length === 0) return;
  if (!e.fileIndex) return;
  let n = await D(r);
  if (e.normalizedTrackedInputs?.cwd !== i) return;
  let o = [...e.cachedTrackedFiles, ...e.cachedConfigFiles, ...e.cachedTrackedDirs, ...r, ...n],
    s = w(i, o);
  if (s === e.loadedMergedSignature) {
    t("[FileIndex] skipped index rebuild \u2014 merged paths unchanged");
    return;
  }
  if (await P(e, e.fileIndex, o, i))
    ((e.loadedMergedSignature = s),
      t(
        `[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`
      ));
}
async function b(e, r, i) {
  let n = `${r}:${i}`;
  if (e.ignorePatternsCacheKey === n) return e.ignorePatternsCache;
  let o = ie(),
    s = [".ignore", ".rgignore"],
    g = L([r, i]),
    m = S.default(),
    u = !1,
    c = g.flatMap((x) => s.map((F) => p.join(x, F))),
    f = await Promise.all(c.map((x) => o.readFile(x, { encoding: "utf8" }).catch(() => null)));
  for (let [x, F] of f.entries()) {
    if (F === null) continue;
    (m.add(XZe(Rbt(F), "file_suggestions_ignore")),
      (u = !0),
      t(`[FileIndex] loaded ignore patterns from ${c[x]}`));
  }
  let h = u ? m : null;
  return ((e.ignorePatternsCache = h), (e.ignorePatternsCacheKey = n), h);
}
async function T(e, r) {
  let i = [],
    n = performance.now();
  for (let o = 0; o < r.length; o++) {
    let s = r[o];
    if (!S.default.isPathValid(s) || !e.ignores(s)) i.push(s);
    if ((o & 255) === 255 && performance.now() - n > Lvn) (await Wg(), (n = performance.now()));
  }
  return i;
}
async function A(e, r, i, n) {
  let o = Date.now(),
    s = e.cacheGeneration;
  t("[FileIndex] getFilesUsingGit called");
  let g = hr(n);
  if (!g) return (t("[FileIndex] not a git repo, returning null"), null);
  try {
    let m = Date.now(),
      u = await ct(It(), ["-c", "core.quotepath=false", "ls-files", "--recurse-submodules"], {
        timeout: 5000,
        abortSignal: r,
        cwd: g
      });
    if ((t(`[FileIndex] git ls-files (tracked) took ${Date.now() - m}ms`), u.code !== 0))
      return (
        t(
          `[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`
        ),
        null
      );
    let c = e.normalizedTrackedInputs,
      f,
      h = null;
    if (
      c !== null &&
      c.repoRoot === g &&
      c.cwd === n &&
      c.rawStdout === u.stdout &&
      e.cachedTrackedFiles.length > 0
    )
      ((f = e.cachedTrackedFiles),
        t("[FileIndex] skipped path normalization \u2014 raw git paths unchanged"));
    else {
      let F = u.stdout
        .trim()
        .split(
          `
`
        )
        .filter(Boolean);
      f = await y(F, g, n);
      let I = await b(e, g, n);
      if (I) {
        let _ = f.length;
        ((f = await T(I, f)), t(`[FileIndex] applied ignore patterns: ${_} -> ${f.length} files`));
      }
      h = { repoRoot: g, cwd: n, rawStdout: u.stdout };
    }
    if (s !== e.cacheGeneration)
      return (t("[FileIndex] discarding refresh results \u2014 cache was reset mid-refresh"), f);
    if (h !== null) e.normalizedTrackedInputs = h;
    e.cachedTrackedFiles = f;
    let x = Date.now() - o;
    return (
      t(`[FileIndex] git ls-files: ${f.length} tracked files in ${x}ms`),
      a("tengu_file_suggestions_git_ls_files", {
        file_count: f.length,
        tracked_count: f.length,
        untracked_count: 0,
        duration_ms: x
      }),
      X(e, g, n, i),
      f
    );
  } catch (m) {
    return (t(`[FileIndex] git ls-files error: ${d(m)}`), null);
  }
}
async function D(e) {
  let r = new Set(),
    i = performance.now();
  for (let n = 0; n < e.length; n++)
    if ((E(e, n, n + 1, r), (n & 255) === 255 && performance.now() - i > Lvn))
      (await Wg(), (i = performance.now()));
  return [...r].map((n) => n + p.sep);
}
function E(e, r, i, n) {
  for (let o = r; o < i; o++) {
    let s = p.dirname(e[o]);
    while (s !== "." && !n.has(s)) {
      let g = p.dirname(s);
      if (g === s) break;
      (n.add(s), (s = g));
    }
  }
}
async function N(e, r) {
  return (await Promise.all(RPs.map((n) => tle(n, e, r)))).flatMap((n) => n.map((o) => o.filePath));
}
async function z(e, r, i, n) {
  t(`[FileIndex] getProjectFiles called, respectGitignore=${i}`);
  let o = await A(e, r, i, n);
  if (o !== null) return (t(`[FileIndex] using git ls-files result (${o.length} files)`), o);
  (t("[FileIndex] git ls-files returned null, falling back to ripgrep"),
    (e.normalizedTrackedInputs = null));
  let s = Date.now(),
    g = null,
    m;
  {
    let f = [
      "--files",
      "--follow",
      "--hidden",
      "--glob",
      "!.git/",
      "--glob",
      "!.svn/",
      "--glob",
      "!.hg/",
      "--glob",
      "!.bzr/",
      "--glob",
      "!.jj/",
      "--glob",
      "!.sl/"
    ];
    if (!i) f.push("--no-ignore-vcs");
    m = await k8(f, n, r, { searchOtherAppsData: !0 });
  }
  let u = m.map((f) => p.relative(n, f)),
    c = Date.now() - s;
  return (
    t(`[FileIndex] ripgrep: ${u.length} files in ${c}ms`),
    a("tengu_file_suggestions_ripgrep", { file_count: u.length, duration_ms: c }),
    u
  );
}
async function O(e, r) {
  let i = AbortSignal.timeout(1e4),
    n = (e.fileIndex ??= new Nvn());
  try {
    let o = pt(),
      s = ue(),
      g = o.respectGitignore ?? s.respectGitignore ?? !0,
      m = fe(),
      [u, c] = await Promise.all([z(e, i, g, m), N(m, r)]);
    e.cachedConfigFiles = c;
    let f = [...u, ...c],
      h = await D(f);
    e.cachedTrackedDirs = h;
    let x = [...h, ...f],
      F = w(m, x);
    if (F !== e.loadedTrackedSignature) {
      if (await P(e, n, x, m)) ((e.loadedTrackedSignature = F), (e.loadedMergedSignature = null));
    } else t("[FileIndex] skipped index rebuild \u2014 tracked paths unchanged");
  } catch (o) {
    t(`[FileIndex] getPathsForSuggestions failed: ${d(o)}`, { level: "error" });
  }
  return n;
}
function K(e, r) {
  let i = Math.min(e.length, r.length),
    n = 0;
  while (n < i && e[n] === r[n]) n++;
  return e.substring(0, n);
}
function Ugo(e) {
  if (e.length === 0) return "";
  let r = e.map((n) => n.displayText),
    i = r[0];
  for (let n = 1; n < r.length; n++) {
    let o = r[n];
    if (((i = K(i, o)), i === "")) return "";
  }
  return i;
}
function C(e, r) {
  return { id: `file-${e}`, displayText: e, metadata: r !== void 0 ? { score: r } : void 0 };
}
function k(e) {
  let r = e.slice(0, Eut);
  return r.map((i, n) => C(i, n / Math.max(r.length, 1)));
}
var U = 5000,
  W = 1000;
function m$n(e, r) {
  if (e.fileListRefreshPromise || J()) return;
  let i = j();
  if (e.fileIndex) {
    if (
      i === null &&
      e.lastRefreshMs > 0 &&
      e.lastScanDurationMs !== null &&
      e.lastScanDurationMs > W
    )
      return;
    if (!(i !== null && i !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < U) return;
  }
  let n = e.cacheGeneration,
    o = Date.now();
  ((e.fileIndex ??= new Nvn()),
    (e.fileListRefreshPromise = O(e, r)
      .then((s) => {
        if (n !== e.cacheGeneration) return s;
        ((e.fileListRefreshPromise = null), e.indexBuildComplete.emit(), (e.lastGitIndexMtime = i));
        let g = Date.now();
        return (
          (e.lastRefreshMs = g),
          (e.lastScanDurationMs = g - o),
          t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`),
          s
        );
      })
      .catch((s) => {
        if ((t(`[FileIndex] Cache refresh failed: ${d(s)}`), l(s), n === e.cacheGeneration))
          e.fileListRefreshPromise = null;
        return (e.fileIndex ??= new Nvn());
      })));
}
async function H(e) {
  let r = ie();
  try {
    return (await r.readdir(e)).map((n) => {
      let o = p.join(e, n.name),
        s = p.relative(e, o);
      return n.isDirectory() ? s + p.sep : s;
    });
  } catch (i) {
    return (t(`[FileSuggestions] readdir failed for cwd: ${d(i)}`, { level: "error" }), []);
  }
}
async function Z7t(e, r, i = !1, n) {
  let { items: o } = await mhi(e, r, i, n);
  return o;
}
async function mhi(e, r, i, n, o = !0) {
  if (J()) return { items: [], baseDir: void 0 };
  if (Pt()) {
    if (!r && !i) return { items: [], baseDir: void 0 };
    return { items: await V(r), baseDir: void 0 };
  }
  let s = fe();
  if (!r && !i) return { items: [], baseDir: s };
  if ((o ? NRr(pt().fileSuggestion) : void 0)?.type === "command") {
    let u = { id: q(), project: { originalCwd: ke(), projectRoot: ao() } },
      c = { ...qu(u, s), query: r },
      f = await bRo(u, c);
    return { items: k(f), baseDir: s };
  }
  if (r === "" || r === "." || r === "./") {
    let u = await H(s);
    return (m$n(e, n), { items: k(u), baseDir: s });
  }
  let m = Date.now();
  try {
    let u = e.fileListRefreshPromise !== null;
    m$n(e, n);
    let c = r,
      f = "." + p.sep;
    if (r.startsWith(f)) c = r.substring(2);
    if (c.startsWith("~")) c = ut(c);
    let h = e.fileIndex ? e.fileIndex.search(c, Eut).map((I) => C(I.path, I.score)) : [],
      x = e.indexBaseDir ?? s,
      F = Date.now() - m;
    return (
      t(
        `[FileIndex] generateFileSuggestions: ${h.length} results in ${F}ms (${u ? "partial" : "full"} index)`
      ),
      a("tengu_file_suggestions_query", {
        duration_ms: F,
        cache_hit: !u,
        result_count: h.length,
        query_length: r.length
      }),
      { items: h, baseDir: x }
    );
  } catch (u) {
    return (l(u), { items: [], baseDir: s });
  }
}
async function V(e) {
  let r = tr();
  if (!r || !ll()) return [];
  try {
    return (await r.sendControlRequest({ subtype: "file_suggestions", query: e })).suggestions.map(
      (n) => C(n.path, n.score)
    );
  } catch (i) {
    return (t(`[FileIndex] remote file_suggestions RPC failed: ${d(i)}`), []);
  }
}
function g$n({
  suggestion: e,
  input: r,
  partialPath: i,
  startPos: n,
  onInputChange: o,
  setCursorOffset: s
}) {
  let g = typeof e === "string" ? e : e.displayText,
    m = r.substring(0, n) + g + r.substring(n + i.length);
  o(m);
  let u = n + g.length;
  return (s(u), m);
}
function X(e, r, i, n) {
  if (e.untrackedFetchPromise) return;
  let o = n
      ? ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard"]
      : ["-c", "core.quotepath=false", "ls-files", "--others"],
    s = e.cacheGeneration;
  e.untrackedFetchPromise = ct(It(), o, { timeout: 1e4, cwd: r })
    .then(async (g) => {
      if (s !== e.cacheGeneration) return;
      if (g.code !== 0) return;
      let m = g.stdout
          .trim()
          .split(
            `
`
          )
          .filter(Boolean),
        u = await y(m, r, i),
        c = await b(e, r, i);
      if (c && u.length > 0) {
        let f = u.length;
        ((u = await T(c, u)),
          t(`[FileIndex] applied ignore patterns to untracked: ${f} -> ${u.length} files`));
      }
      return (t(`[FileIndex] background untracked fetch: ${u.length} files`), B(e, u, i));
    })
    .catch((g) => {
      t(`[FileIndex] background untracked fetch failed: ${g}`);
    })
    .finally(() => {
      e.untrackedFetchPromise = null;
    });
}
export { Wve, Fgo, Ugo, m$n, Z7t, mhi, g$n };

//# sourceMappingURL=chunk-j89m7f51.js.map
