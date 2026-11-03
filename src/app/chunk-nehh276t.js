// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { _r, cT, We } from "./chunk-pgnjjhxv.js";
import { G } from "./chunk-fs43t96t.js";
import { im } from "./chunk-t0wrcf3t.js";
import { Rm, yAt } from "./chunk-dc0nzty2.js";
import { la } from "./chunk-8fp2d2p3.js";
import { z } from "./chunk-p197ae0z.js";
import { readdir as b, readFile as fe } from "fs/promises";
import { isAbsolute as y, join as f, relative as h, sep as p } from "path";
function T(i) {
  let e = h(im(), i);
  if (e === "" || e.startsWith(`..${p}`) || e === ".." || y(e)) return null;
  let t = e.split(p);
  return t.length < 4 || t[2] !== "subagents" ? null : t;
}
function Gfs(i) {
  let e = T(i),
    t = e?.at(-1);
  if (!e || !t?.startsWith("agent-") || !t.endsWith(".jsonl")) return null;
  let r = t.slice(6, -6),
    o = e.slice(3, -1);
  if (!cT([e[0], e[1], r]) || (o.length > 0 && !cT(o))) return null;
  let a = We.transcript(e[0], e[1], r, o.length > 0 ? o : void 0);
  return Rm(a) === void 0 ? a : null;
}
async function zfs(i, e, { rejectUnlistable: t = !1 } = {}) {
  let r = z() && e !== void 0 ? k(i) : null;
  if (e !== void 0 && r !== null) return U(e, r, i, M, t);
  let o = [];
  async function a(u) {
    let d;
    try {
      d = await b(u, { withFileTypes: !0 });
    } catch (s) {
      if (t && !G(s)) throw s;
      return;
    }
    for (let s of d)
      if (s.isFile() && s.name.startsWith("agent-") && s.name.endsWith(".jsonl")) {
        let c = s.name.slice(6, -6);
        o.push({ agentId: c, filePath: f(u, s.name) });
      } else if (s.isDirectory()) await a(f(u, s.name));
  }
  return (await a(i), o);
}
function k(i) {
  let e = h(im(), i);
  if (e === "" || e.startsWith(`..${p}`) || y(e)) return null;
  let t = e.split(p);
  if (t.length !== 3 || t[2] !== "subagents" || !cT([t[0], t[1]])) return null;
  let r = { namespace: "transcript", projectKey: t[0], sessionId: t[1] };
  return yAt(r) === void 0 ? r : null;
}
var M = 1e4;
async function U(i, e, t, r, o) {
  let a = [],
    u = [e],
    d = new Set([""]),
    s = 0;
  try {
    while (u.length > 0) {
      if (++s > r) throw Error("sub-agent listing incomplete");
      let c = u.shift(),
        m = [];
      if (
        (
          await la(
            (l) =>
              i.listEntries(c, {
                skipKeyStats: !0,
                skipScopeStats: !0,
                ...(l !== void 0 && { cursor: l })
              }),
            (l) => {
              for (let n of l)
                if (
                  n.kind === "key" &&
                  n.key.namespace === "transcript" &&
                  n.key.agentId !== void 0 &&
                  _r(n.key.agentId) &&
                  (n.key.agentRelPath === void 0 || cT(n.key.agentRelPath))
                )
                  a.push({
                    agentId: n.key.agentId,
                    filePath: f(t, ...(n.key.agentRelPath ?? []), `agent-${n.key.agentId}.jsonl`)
                  });
                else if (
                  n.kind === "scope" &&
                  n.scope.namespace === "transcript" &&
                  n.scope.agentRelPath !== void 0 &&
                  cT(n.scope.agentRelPath) &&
                  !d.has(n.scope.agentRelPath.join("/"))
                ) {
                  let g = { ...e, agentRelPath: n.scope.agentRelPath };
                  if (yAt(g) === void 0) (d.add(n.scope.agentRelPath.join("/")), m.push(g));
                }
            }
          )
        ).status !== "done"
      )
        throw Error("sub-agent listing incomplete");
      u.unshift(...m);
    }
  } catch (c) {
    if (o) throw c;
    return [];
  }
  return a;
}
export { Gfs, zfs };

//# sourceMappingURL=chunk-nehh276t.js.map
