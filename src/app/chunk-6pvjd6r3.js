// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { Ne } from "./chunk-2qx8pe6s.js";
import { ye, zc } from "./chunk-wrtp8qz8.js";
import { i } from "./chunk-cj37hmns.js";
import { t } from "./chunk-4kxznmzw.js";
import { X4t } from "./chunk-4nzy53ma.js";
import { zo } from "./chunk-zf79f62g.js";
import { bA } from "./chunk-xe386mry.js";
import { Nr } from "./chunk-928ws1pg.js";
import { Sb, Ut, pbn, mbn, k } from "./chunk-ajtyjx88.js";
import { Jze } from "./chunk-07aq7e5p.js";
import { uhe, fhe } from "./chunk-1rjw35bb.js";
import { Zl } from "./chunk-3xhvyvev.js";
import { t8, Uqn } from "./chunk-byyv32qz.js";
import { Jye } from "./chunk-b10syt1j.js";
import { mZn } from "./chunk-fcym4pv0.js";
import { z } from "./chunk-p197ae0z.js";
var l = new Set(["remote", "remote_cowork", "remote_desktop", "remote_mobile", "remote_projects"]);
function zgi(e) {
  if (Ut()) return new Set(["bg"]);
  let r = new Set();
  if ((e ?? pbn()) || Sb() !== null) r.add("watched");
  if (mSr()) r.add("ccr");
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge" || zc()) r.add("bridge");
  let o = i.CLAUDE_CODE_ENTRYPOINT;
  if (o !== void 0 && X4t.has(o)) r.add("desktop");
  if (Ygi()) r.add("cli");
  if (!ye() && Zl()) r.add("repl");
  return r;
}
function mSr() {
  if (bA("fanout")) return !0;
  if (i.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return !0;
  if (i.CLAUDE_CODE_REMOTE)
    return l.has(i.CLAUDE_CODE_ENTRYPOINT ?? "") && !process.env.BUGHUNTER_FLEET_SIZE;
  return !1;
}
async function ETi(e) {
  return z() && e !== void 0 ? mbn(e) : void 0;
}
var u = {
  bg: ["state"],
  watched: ["state"],
  ccr: ["summary"],
  bridge: ["summary"],
  desktop: ["summary"],
  cli: ["summary"],
  repl: ["headline"]
};
function Kgi(e) {
  let r = new Set(),
    o = Vgi();
  for (let n of e) {
    if (o.has(n)) continue;
    for (let s of u[n]) r.add(s);
  }
  if (e.has("bg")) r.delete("summary");
  if (k("tengu_classifier_summary_kill", !1)) r.delete("summary");
  return r;
}
function Vgi() {
  return f(k("tengu_classifier_disabled_surfaces", ""));
}
function f(e) {
  let r = new Set();
  for (let o of e.split(",")) {
    let n = o.trim();
    if (!n) continue;
    if (n in u) r.add(n);
    else if (!t8().warnedUnknownDisabledSurface)
      ((t8().warnedUnknownDisabledSurface = !0),
        t(`[classifier] tengu_classifier_disabled_surfaces: unknown surface '${n}' ignored`));
  }
  return r;
}
function qgi(e) {
  if (e.size === 0) return null;
  let r = e.has("state")
    ? "llm"
    : !e.has("summary")
      ? "heuristic"
      : process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY !== void 0
        ? Ne(process.env.CLAUDE_CODE_CLASSIFIER_SUMMARY)
          ? "llm"
          : "heuristic"
        : m();
  return r === "llm" && k("tengu_cobalt_wren", !1) ? "heuristic" : r;
}
function m() {
  if (k("tengu_classifier_summary_llm_emit", !1)) return "llm";
  return "heuristic";
}
function Ygi() {
  return !1;
}
function kTi(e) {
  return uhe() && fhe(e) && k("tengu_projects_thread_recap", !1);
}
var a = new Map([
  ["blocked", "blocked"],
  ["done", "completed"],
  ["working", "review_ready"]
]);
function TTi(e, r) {
  if (e.recap)
    return {
      status_category: e.state === "failed" ? "failed" : (a.get(e.state) ?? "review_ready"),
      status_detail: e.recap.headline,
      needs_action: e.state === "blocked" ? e.recap.needs : "",
      recent_action: e.recap.needsYou,
      description: e.recap.happened,
      reply: e.recap.reply
    };
  return {
    status_category: a.get(e.state) ?? "review_ready",
    status_detail: e.detail,
    needs_action: e.state === "blocked" ? (e.needs ?? "") : "",
    recent_action: e.output.result ?? "",
    ...(r?.projectsRecap && { description: Uqn(e.detail).text })
  };
}
function ATi(e, r) {
  let o = Kgi(zgi(!1));
  if (!o.has("summary") || qgi(o) === null) return;
  let n = Nr(e.tool_name),
    s =
      !n?.toolName || n.serverName === zo
        ? Jye(e.tool_name)
        : mZn({ serverName: n.serverName, toolName: n.toolName }),
    c = e.tool_name.startsWith("dialog:")
      ? {
          status_category: "blocked",
          status_detail: "Waiting on a user dialog",
          needs_action: e.action_description
        }
      : {
          status_category: "blocked",
          status_detail: `Waiting on permission: ${s}`,
          needs_action: `Approve or deny ${s}`
        };
  Jze(r, c);
}
export { zgi, mSr, ETi, Kgi, Vgi, qgi, Ygi, kTi, TTi, ATi };

//# sourceMappingURL=chunk-6pvjd6r3.js.map
