// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { ql } from "./chunk-5rw2zfa0.js";
import { jS, $t, q_n } from "./chunk-ajtyjx88.js";
import { QQ, d9n, Zde, _bt } from "./chunk-bbw420pv.js";
import { Nrn, Vje, zJ } from "./chunk-j0tbz6ra.js";
import { mat } from "./chunk-3827ysmv.js";
import { nXt } from "./chunk-wybpgt3b.js";
import { xr } from "./chunk-61vn6n52.js";
import { pxn, Ads } from "./chunk-z2rjm3ha.js";
import { p6e } from "./chunk-j663s3w1.js";
import { pN } from "./chunk-tqjdehqd.js";
import { bbs, mHn } from "./chunk-v7wg6hva.js";
import { nCn } from "./chunk-hyard2nm.js";
import { Vit } from "./chunk-j70ksy2n.js";
import { Kie } from "./chunk-5htn7psj.js";
import { e } from "./chunk-f790ajz4.js";
import { eDn } from "./chunk-e40v5eqb.js";
import { de, P, C, y, j } from "./chunk-bq35vvkw.js";
j();
function YCt(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  return (_bt(t), Smi(...n));
}
async function Smi(n, t, p, l) {
  let { AppRoot: c } = await import("./chunk-mdnndfkc.js"),
    { REPL: d } = await import("./chunk-qqepz469.js");
  function S(r) {
    let a = xr();
    pxn();
    let f = C(r.commands),
      A = de((s) => {
        f.current = s;
      }, []),
      g = C(() => {
        throw Error("engine: queryParams called before REPL registered builder");
      }),
      E = de((s) => {
        g.current = s;
      }, []),
      [m] = y(() =>
        mat({
          run: pN,
          queryParams: async (s) => g.current(),
          commands: () => zJ(f.current),
          models: () => Zde(QQ()),
          unavailableModels: () => Zde(d9n()),
          agents: () => Nrn(a.getState().agentDefinitions.activeAgents),
          account: q_n(),
          outputStyle: Vje(),
          mcpServers: () => eDn(a.getState().mcp.clients),
          ambient: nXt,
          initialModel: () => {
            let s = a.getState();
            return $t(s.mainLoopModelForSession ?? s.mainLoopModel ?? jS());
          },
          initialPermissionMode: () => ql(a.getState().toolPermissionContext.mode),
          hostOwnsPermissionMode: !0,
          hostOwnsModel: !0
        })
      );
    return (
      P(() => () => m.close(), [m]),
      e(d, { ...r, engine: m, onCommandsChange: A, onQueryParamsChange: E })
    );
  }
  let {
      session: i,
      storageV5: o,
      credentials: u,
      fleetNudgeStore: R = new p6e({ storageV5: o })
    } = t,
    M = Vit(o);
  await bbs({ onHealthy: () => Ads(o), storageV5: o });
  let h = nCn(i, t.initialState, (r) => Kie(r, i, o, u));
  try {
    await l(
      n,
      e(c, {
        session: i,
        storageV5: o,
        messageQueue: M,
        store: h,
        fleetNudgeStore: R,
        sessionHooks: t.sessionHooks,
        writesExitHandoff: !0,
        getFpsMetrics: t.getFpsMetrics,
        stats: t.stats,
        keybindings: !1,
        children: e(S, { ...p })
      }),
      i,
      o,
      u
    );
  } catch (r) {
    throw (await mHn().catch(() => !1), r);
  }
}
export { YCt, Smi };

//# sourceMappingURL=chunk-h1w5cjyw.js.map
