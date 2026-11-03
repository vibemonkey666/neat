// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { qg } from "./chunk-a16y5hcz.js";
import { zj, Isr, nT, Qt } from "./chunk-1e5yp9hx.js";
import { ty } from "./chunk-p56qmwgb.js";
import { os } from "./chunk-jtb5bzvb.js";
import { pe } from "./chunk-7c3thgax.js";
import { Uo, Bs } from "./chunk-6h7ejyet.js";
import { HA, VEe, ije, aje, Znn, Dpt, qEe, Lpt, trn, DJe } from "./chunk-j0tbz6ra.js";
import { jY } from "./chunk-39ayby14.js";
var yPt = ["on", "name-only", "user-invocable-only", "off"];
function x(e) {
  return (
    e.type === "prompt" &&
    e.hiddenBehindPlugin === void 0 &&
    (e.loadedFrom === "skills" ||
      e.loadedFrom === "syncedSkills" ||
      e.loadedFrom === "commands_DEPRECATED" ||
      e.loadedFrom === "plugin" ||
      e.loadedFrom === "mcp")
  );
}
function vro(e) {
  let n = Dpt(e);
  if (n) {
    let t = e.source === "plugin" ? qEe(e) : n.value;
    return {
      value: t,
      source: t !== n.value ? "plugin" : n.source === "policySettings" ? "policy" : "flag"
    };
  }
  if (!VEe(e.name))
    return {
      value: e.disableModelInvocation ? "user-invocable-only" : "on",
      source: "reserved-name"
    };
  if (e.disableModelInvocation) return { value: "user-invocable-only", source: "author" };
  if (e.source === "plugin") return { value: qEe(e), source: "plugin" };
  return;
}
function F(e, { skipLocalBareKey: n = !1 } = {}) {
  if (e.loadedFrom === "mcp") {
    let a = [e.name, ...Znn(e)];
    for (let y of ["projectSettings", "userSettings"]) {
      if (!Qt(y)) continue;
      let m = aje(pe(y)?.skillOverrides, a);
      if (m !== void 0) return m;
    }
    return;
  }
  let t = (a) => (Qt(a) ? pe(a)?.skillOverrides : void 0),
    o = (a) => HA(t("projectSettings"), a) ?? HA(t("userSettings"), a),
    i = ije(e),
    f = n ? void 0 : HA(pe("localSettings")?.skillOverrides, i);
  return o(e.name) ?? (i != null ? (f ?? o(i)) : void 0);
}
function b(e, n) {
  return e.loadedFrom === "mcp" ? aje(n, [e.name, ...Znn(e)]) : HA(n, e.name);
}
function vUe({ source: e, loadedFrom: n, pluginInfo: t }) {
  if (n === "syncedSkills" || jY(t?.repository)) return zj;
  switch (e) {
    case "mcp":
    case "plugin":
      return e;
    case "memoryStore":
      return "memory store";
    case "bundled":
    case "builtin":
      return "built-in";
    default:
      return nT(e);
  }
}
function w6e(e) {
  let n = trn(e);
  return n !== void 0 && Uo(e) === n ? n : e.name;
}
function Ero(e, n) {
  let t = n.filter((l) => l.loadedFrom !== "syncedSkills"),
    o = [];
  for (let l of e) {
    let S = l.unqualifiedName;
    if (l.loadedFrom !== "syncedSkills" || S === void 0 || Lpt(l) !== void 0) continue;
    let r = qg(S),
      u = Bs(S, t),
      O = ty(S),
      v = (g) => [g.name, Uo(g), ...(g.aliases ?? [])],
      C = (g) => v(g).find((R) => ty(R) === O),
      d = u ?? t.find((g) => C(g));
    if (!d) {
      o.push({
        bare: r,
        sentence: `Your claude.ai skill can't use /${r} in this session.`,
        held: !1,
        userCanFree: !1,
        renameNeedsNameLine: !1
      });
      continue;
    }
    let p = d.type === "prompt" ? d : void 0,
      k = p?.skillRoot !== void 0 ? "skill" : `command file ${qg(d.name)}.md`,
      c,
      s = "",
      h = !1;
    if (d.kind === "workflow") c = "a workflow";
    else if (d.loadedFrom === "plugin") c = "a command from a plugin";
    else
      switch (Isr(d)) {
        case "user": {
          let g = p?.skillRoot !== void 0 ? ` in ${qg(os(p.skillRoot))}` : "";
          ((c = `your own ${k}${g}`),
            (h = d.loadedFrom === "skills"),
            (s = h
              ? " Rename it (folder and SKILL.md name) or delete it to use the claude.ai one."
              : " Rename or delete it to use the claude.ai one."));
          break;
        }
        case "project":
          c = `this project's ${k}`;
          break;
        case "managed":
          c = `a ${k} your organization manages`;
          break;
        case "plugin":
          c = "a command from a plugin";
          break;
        case "remote":
          c =
            d.loadedFrom === "mcp"
              ? "a skill from an MCP server"
              : d.isMcp
                ? "a prompt from an MCP server"
                : "another command";
          break;
        case "builtin":
        case "bundled":
          c = "a built-in Claude Code command";
          break;
        default:
          c = "another command";
      }
    let w = `/${qg(C(d) ?? d.name)}`,
      N =
        u !== void 0
          ? `/${r} runs ${c}${s ? `.${s}` : ", not your claude.ai skill."}`
          : `/${r} is too close to ${w}, ${c}${s ? `.${s}` : ", so your claude.ai skill can't use it."}`;
    o.push({ bare: r, sentence: N, held: !0, userCanFree: s !== "", renameNeedsNameLine: h });
  }
  if (o.length === 0) return;
  if (o.length === 1) return o[0].sentence;
  let i = o.every((l) => l.held)
      ? "are taken by other commands"
      : "are taken by other commands or unavailable in this session",
    f = `${L(o)} ${i}, so they don't run your claude.ai skills.`,
    a = o.filter((l) => l.userCanFree);
  if (a.length === 0) return f;
  let y = a.some((l) => l.renameNeedsNameLine) ? "Rename (folder and SKILL.md name)" : "Rename",
    m = a.length === 1 ? "one" : "ones";
  return `${f} ${y} or delete your own ${L(a)} to use the claude.ai ${m}.`;
}
function L(e) {
  let n = e.map((t) => `/${t.bare}`);
  if (n.length === 1) return n[0];
  if (n.length <= 4) return `${n.slice(0, -1).join(", ")} and ${n.at(-1)}`;
  return `${n.slice(0, 3).join(", ")} and ${n.length - 3} more`;
}
function v6e(e, { sortByTokens: n = !1 } = {}) {
  let t = e.filter(x);
  if (n) {
    let o = new Map(t.map((i) => [i, DJe(i)]));
    return t.sort((i, f) => (o.get(f) ?? 0) - (o.get(i) ?? 0) || w6e(i).localeCompare(w6e(f)));
  }
  return t.sort((o, i) => vUe(o).localeCompare(vUe(i)) || w6e(o).localeCompare(w6e(i)));
}
function Jgr() {
  return Object.assign(Object.create(null), pe("localSettings")?.skillOverrides);
}
function E6e(e, n = Jgr()) {
  let t = new Map(),
    o = new Map();
  for (let i of e) {
    let f = F(i);
    if (f) t.set(i.name, f);
    let a = vro(i);
    if (a) o.set(i, a);
  }
  return { localOverrides: n, lowerTier: t, locked: o };
}
function k6e(e, n) {
  let t = Object.create(null);
  for (let o of e) {
    if (Object.hasOwn(t, o.name)) continue;
    t[o.name] = n.locked.get(o)?.value ?? b(o, n.localOverrides) ?? n.lowerTier.get(o.name) ?? "on";
  }
  return t;
}
function n9t(e, n, t) {
  let { localOverrides: o, lowerTier: i, locked: f } = t,
    a = new Set(Array.from(f.keys(), (r) => r.name)),
    y = new Set(a),
    m = Object.create(null),
    l = 0,
    S = 0;
  for (let r of e) {
    if (y.has(r.name)) continue;
    y.add(r.name);
    let u = HA(n, r.name) ?? "on",
      O = i.get(r.name) ?? "on",
      v = b(r, o) ?? O;
    if (r.loadedFrom === "mcp") {
      if (u === v) continue;
      let p = !1,
        k = u === O ? void 0 : u;
      if (k !== HA(o, r.name) || Object.hasOwn(m, r.name)) ((m[r.name] = k), (p = !0));
      for (let c of Znn(r)) {
        if (HA(o, c) === void 0) continue;
        for (let s of e) {
          if (
            s.name === r.name ||
            s.loadedFrom !== "mcp" ||
            !Znn(s).includes(c) ||
            Object.hasOwn(m, s.name)
          )
            continue;
          let h = b(s, o);
          if (
            (a.has(s.name) || (HA(n, s.name) ?? "on") === (h ?? i.get(s.name) ?? "on")) &&
            h !== void 0
          )
            m[s.name] = h;
        }
        ((m[c] = void 0), (p = !0));
      }
      if (p) l++;
      S++;
      continue;
    }
    let C = r.loadedFrom === "syncedSkills" ? ije(r) : void 0;
    if (C != null && HA(o, C) !== void 0 && u !== v) {
      let p = F(r, { skipLocalBareKey: !0 }) ?? "on",
        k = u === p ? void 0 : u;
      if (k !== HA(o, r.name)) m[r.name] = k;
      ((m[C] = void 0), l++, S++);
      continue;
    }
    if (r.loadedFrom === "syncedSkills" && u === v) continue;
    let d = u === O ? void 0 : u;
    if (d !== HA(o, r.name)) ((m[r.name] = d), l++);
    if (u !== v) S++;
  }
  return { diff: m, writes: l, effectiveChanged: S };
}
export { yPt, vro, vUe, w6e, Ero, v6e, Jgr, E6e, k6e, n9t };

//# sourceMappingURL=chunk-5xzc8vzk.js.map
