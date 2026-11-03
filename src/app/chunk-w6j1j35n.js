// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ra, uo, Ar } from "./chunk-ajtyjx88.js";
import { at, qt, Be, At } from "./chunk-at88wjsn.js";
import { Ug } from "./chunk-wvbfdbhr.js";
import { d2r, vf, Y7s } from "./chunk-6z6dbjsw.js";
import { GCr, zte, SD, wD, IGn, xge, yMr, _Mr } from "./chunk-j0tbz6ra.js";
import { ht } from "./chunk-gdcb8skc.js";
import { tWo, Zu, Ll, Rt, kw, JD } from "./chunk-wany0nxw.js";
import { Lr } from "./chunk-5z6t3gwt.js";
import { U3s } from "./chunk-gmxe4kpt.js";
import { e$ } from "./chunk-6h7ejyet.js";
import { rae } from "./chunk-c5v3q13y.js";
import { TF } from "./chunk-pp7zwndm.js";
import { qe } from "./chunk-0np0053t.js";
var Tie = () => rae({ promptSuggestionEnabled: !1 });
var c = new Set([Be, qe, at, qt, Ar, uo, ra, At]),
  TFe = new Set([Ug]),
  AFe = GCr;
function Kit(e) {
  return `[serve-mode] Stripped client-supplied privilege field(s): ${e.join(", ")}`;
}
function E(e, i) {
  if (e.properties === void 0 || i.length === 0) return e;
  let s = { ...e.properties };
  for (let n of i) delete s[n];
  let t = Array.isArray(e.required) ? e.required.filter((n) => !i.includes(n)) : e.required;
  return { ...e, properties: s, required: t };
}
function JYe(e, { skipSearchToolRestore: i = !1 } = {}) {
  let s = TF(Ll(), { skipReplFilter: !0, skipSimpleModeFilter: e }).filter((o) => !JD(o));
  if (!e) return s;
  let t = s.filter((o) => c.has(o.name));
  if (i) return t;
  let n = zte(),
    p = [SD, wD].filter((o) => n.has(o.name) && c.has(o.name) && !t.includes(o) && o.isEnabled());
  return [...t, ...p];
}
async function qis(e, i = {}, s) {
  let t = e === "http",
    n = Ll(),
    p = JYe(t, i),
    o = i.agentDefinitions ?? { activeAgents: [], allAgents: [] },
    d = t ? [] : await xge(IGn(o.activeAgents, []), o.allowedAgentTypes, n),
    T =
      d.length > 0
        ? `Available agent types:
${d.map((r) => yMr(r, !1)).join(`
`)}`
        : "",
    m = () =>
      Promise.all(
        p.map(async (r) => {
          let f = e$(r.inputSchema),
            { remoteExecution: _, outputSchemaAcrossProcesses: S, ...u } = r,
            l = await r.prompt({
              getToolPermissionContext: async () => n,
              tools: p,
              agents: o.activeAgents,
              ...(s !== void 0 && {
                model: s.model,
                leanPrompt: s.leanPrompt,
                bashFirstTrimmed: !1
              })
            });
          return {
            ...u,
            description: Rt(r, Zu)
              ? U3s(l)
              : Rt(r, ht)
                ? l.replace(l.includes(_Mr) ? _Mr : tWo, () => T)
                : l,
            inputSchema: E(f, [...(t ? AFe : []), ...(kw(r).supported ? [Lr] : [])]),
            outputSchema: void 0
          };
        })
      );
  if (!t) return m();
  let a = vf();
  if (
    a.backgroundTasksDisabled &&
    a.unsandboxedCommandsDisabled &&
    !a.backgroundShellsKeptElsewhere
  )
    return m();
  for (let r of p) r.inputSchema;
  return Y7s(yQr(), m);
}
function yQr(e = new d2r()) {
  return (e.disableBackgroundTasks(), e.disableUnsandboxedCommands(), e);
}
export { Tie, TFe, AFe, Kit, JYe, qis, yQr };

//# sourceMappingURL=chunk-w6j1j35n.js.map
