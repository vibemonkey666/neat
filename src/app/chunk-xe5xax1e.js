// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { U, ku } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { nit, ie, t } from "./chunk-4kxznmzw.js";
import { Ze, Ft } from "./chunk-a16y5hcz.js";
import { EB, i } from "./chunk-cj37hmns.js";
import { Gv, N1, Kne, Phe } from "./chunk-6h7ejyet.js";
import { II, H8r } from "./chunk-8w2npe9a.js";
import { gxe } from "./chunk-v4kbwz0z.js";
import { Ws } from "./chunk-f451a1hs.js";
import { N_ } from "./chunk-d5zj5299.js";
import { spawnSync as I } from "child_process";
import { spawn as _, spawnSync as y } from "child_process";
import { basename as h } from "path";
function v(n) {
  return !!EB(n);
}
var L = new Set(["start", "cmd", "cmd.exe"]);
function x(n) {
  let e = n.trim().split(/\s+/);
  for (let r of e) {
    if (/^\/[^/]+$/.test(r)) continue;
    if (r.startsWith("-")) continue;
    let o = h(r);
    if (L.has(o.toLowerCase())) continue;
    return o;
  }
  return h(e[0] ?? n);
}
var T = ["code", "cursor", "windsurf", "codium", "subl", "atom", "gedit", "notepad++", "notepad"],
  b = /\b(vi|vim|nvim|nano|emacs|pico|micro|helix|hx)\b/,
  D = new Set(["code", "cursor", "windsurf", "codium"]);
function E(n) {
  let e = x(n);
  return T.find((r) => e.includes(r));
}
function A(n, e, r) {
  if (!r) return [e];
  if (D.has(n)) return ["-g", `${e}:${r}`];
  if (n === "subl") return [`${e}:${r}`];
  return [e];
}
function R(n, e, r) {
  let o = E(n);
  if (o) return A(o, e, r);
  return r && b.test(h(Ze(n, " "))) ? [`+${r}`, e] : [e];
}
function s8e(n, e) {
  let r = XI();
  if (!r) return !1;
  let o = r.split(" "),
    a = o[0] ?? r,
    d = o.slice(1),
    g = E(r);
  if (g) {
    let p = A(g, n, e),
      l = { detached: !0, stdio: "ignore", windowsHide: !0 },
      s;
    return (
      (s = _(a, [...d, ...p], l)),
      s.on("error", (c) => t(`editor spawn failed: ${c}`, { level: "error" })),
      II(s.pid),
      s.unref(),
      !0
    );
  }
  let u = Ws().get(process.stdout);
  if (!u) return !1;
  let m = e && b.test(h(a));
  u.enterAlternateScreen();
  try {
    let p = { stdio: "inherit" },
      l;
    {
      let s = [...d, ...(m ? [`+${e}`, n] : [n])],
        c = H8r();
      if (((l = y(a, s, { ...p, ...c })), l.error && c.cgroup !== void 0)) l = y(a, s, p);
    }
    if (l.error) return (t(`editor spawn failed: ${l.error}`, { level: "error" }), !1);
    return !0;
  } finally {
    u.exitAlternateScreen();
  }
}
class C {
  isResolved = !1;
  editor = void 0;
  resolve() {
    if (this.isResolved) return this.editor;
    if (i.VISUAL) this.editor = i.VISUAL;
    else if (i.EDITOR) this.editor = i.EDITOR;
    else {
      let n = ["code", "vi", "nano"];
      this.editor = n.find((e) => v(e));
    }
    return ((this.isResolved = !0), this.editor);
  }
  reset() {
    ((this.isResolved = !1), (this.editor = void 0));
  }
}
var F = new W(() => new C());
function P() {
  return F.of(U().host);
}
function XI() {
  return ku()?.editor ?? P().resolve();
}
function d4() {
  let n = XI();
  if (!n) return;
  let e = x(n);
  return e && e.length <= 8 ? e : void 0;
}
var N = { code: "code -w", subl: "subl --wait" };
function ume(n, e) {
  let r = ie(),
    o = Ws().get(process.stdout);
  if (!o) throw Error("Ink instance not found - cannot pause rendering");
  let a = XI();
  if (!a) return { content: null };
  try {
    r.statSync(n);
  } catch {
    return { content: null };
  }
  let d = E(a) === void 0;
  if (d) o.enterAlternateScreen();
  else o.prepareTerminalForHandoff();
  try {
    let g = N[a] ?? a,
      u = g.split(" "),
      m = u[0] ?? g,
      p = u.slice(1),
      l = R(a, n, e),
      s;
    {
      let f = H8r();
      if (((s = I(m, [...p, ...l], { stdio: "inherit", ...f })), s.error && f.cgroup !== void 0))
        s = I(m, [...p, ...l], { stdio: "inherit" });
    }
    if (s.error || s.signal || (s.status !== null && s.status !== 0)) {
      let f = Gv(a);
      return {
        content: null,
        error: s.error
          ? `Couldn't open ${f} \u2014 ${s.error.message}`
          : s.signal
            ? `${f} closed unexpectedly (${s.signal})`
            : `${f} quit unexpectedly (exit code ${s.status})`
      };
    }
    return { content: r.readFileSync(n, { encoding: "utf-8" }) };
  } catch {
    return { content: null };
  } finally {
    if (d) o.exitAlternateScreen();
    else o.restoreTerminalAfterHandoff();
  }
}
function k(n, e, r) {
  let o = n;
  for (let [a, d] of Object.entries(r))
    if (d.type === "text") {
      let g = parseInt(a),
        u = d.content;
      if (d.unavailable || u === "") continue;
      if (d.inline) continue;
      let m = o.indexOf(u);
      if (m !== -1) {
        let p = N1(u),
          l = Kne(g, p);
        o = o.slice(0, m) + l + o.slice(m + u.length);
      }
    }
  return o;
}
var S =
    "# \u2500\u2500\u2500 Write your reply below this line \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  O = 50;
function H(n) {
  let e = N_(n).split(`
`);
  if (e.length > O) ((e = e.slice(-O)), e.unshift("\u2026 (earlier output truncated)"));
  return (
    `# \u2500\u2500\u2500 Claude's last response (for reference; removed on save) \u2500\u2500\u2500
` +
    `${e.map((o) => (o ? `# ${o}` : "#")).join(`
`)}
${S}

`
  );
}
function G(n) {
  let e = n.indexOf(S);
  if (e === -1) return n;
  return n.slice(e + S.length).replace(/^\r?\n\r?\n?/, "");
}
function sK(n, e, r, o) {
  let a = ie(),
    d = gxe();
  try {
    let g = e ? Phe(n, e) : n,
      u = r ? H(r) : "",
      m = u + g,
      p = n.slice(0, o),
      l =
        o === void 0
          ? void 0
          : 1 +
            Ft(
              u,
              `
`
            ) +
            Ft(
              e ? Phe(p, e) : p,
              `
`
            );
    nit(d, m, { encoding: "utf-8", flush: !0 });
    let s = ume(d, l);
    if (s.content === null) return s;
    let c = s.content;
    if (r) c = G(c);
    let f = c.endsWith(`\r
`)
      ? `\r
`
      : `
`;
    if (c.endsWith(f) && !c.endsWith(f + f)) c = c.slice(0, -f.length);
    if (e) c = k(c, n, e);
    return { content: c };
  } finally {
    try {
      a.unlinkSync(d);
    } catch {}
  }
}
export { s8e, XI, d4, ume, sK };

//# sourceMappingURL=chunk-xe5xax1e.js.map
