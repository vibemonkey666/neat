// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Br, MB } from "./chunk-6bbdndfe.js";
import { U, q, xSe, ke, ci, J } from "./chunk-wrtp8qz8.js";
import { W } from "./chunk-jgvfzp2r.js";
import { _r } from "./chunk-pgnjjhxv.js";
import { Le } from "./chunk-jazcqqqr.js";
import { fT, Fst } from "./chunk-t0wrcf3t.js";
import { la } from "./chunk-8fp2d2p3.js";
import { z } from "./chunk-p197ae0z.js";
import { readdir as d } from "fs/promises";
import { basename as u, dirname as p, join as i } from "path";
function Np() {
  return i(Le(), "projects");
}
function WG(t) {
  return p(t) === Np() ? u(t) : void 0;
}
function H1o(t) {
  if (typeof t === "string") return WG(t);
  let { scope: e } = t;
  return e.namespace === "transcript" && e.sessionId === void 0 ? e.projectKey : void 0;
}
class g {
  projectDirCache = new Map();
  agentTranscriptSubdirs = new Map();
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}
var c = new W(() => new g());
function Zb(t) {
  let e = c.of(U().host),
    n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = i(Np(), fT(t));
  return (e.cacheProjectDir(t, r), r);
}
function ZHe() {
  let t = ci();
  if (t !== null) return Zb(t);
  return Fst() ?? Zb(ke());
}
function $8() {
  return xSe() ?? ZHe();
}
function bf() {
  return i($8(), `${q()}.jsonl`);
}
function L1o() {
  return $8();
}
function N1o(t, e) {
  c.of(U().host).setAgentTranscriptSubdir(t, e);
}
function ljr(t) {
  c.of(U().host).clearAgentTranscriptSubdir(t);
}
function yet() {
  return i($8(), q(), "subagents");
}
function A2e(t) {
  return $m(t);
}
function $m(t) {
  let e = c.of(U().host).agentTranscriptSubdirs.get(t),
    n = e ? i(yet(), e) : yet();
  return i(n, `agent-${t}.jsonl`);
}
function Vpn(t) {
  return MB(t) ? $m(Br(t)) : void 0;
}
async function _et(t) {
  let e = WG($8());
  if (z() && t !== void 0 && e !== void 0) return f(t, e, q());
  if (J()) return [];
  let n;
  try {
    n = await d(yet(), { withFileTypes: !0 });
  } catch {
    return [];
  }
  return n
    .filter((r) => r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl"))
    .map((r) => r.name.slice(6, -6));
}
async function f(t, e, n) {
  let r = [];
  try {
    return (
      await la(
        (a) =>
          t.listEntries(
            { namespace: "transcript", projectKey: e, sessionId: n },
            { skipKeyStats: !0, skipScopeStats: !0, ...(a !== void 0 && { cursor: a }) }
          ),
        (a) => {
          for (let s of a)
            if (
              s.kind === "key" &&
              s.key.namespace === "transcript" &&
              s.key.agentId !== void 0 &&
              s.key.agentRelPath === void 0 &&
              _r(s.key.agentId)
            )
              r.push(s.key.agentId);
        }
      )
    ).status === "done"
      ? r
      : [];
  } catch {
    return [];
  }
}
function $1o(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let o = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0)
      n[r.identity.agentId] = o;
  }
  return n;
}
export { Np, WG, H1o, Zb, ZHe, $8, bf, L1o, N1o, ljr, yet, A2e, $m, Vpn, _et, $1o };

//# sourceMappingURL=chunk-zjm5ncxc.js.map
