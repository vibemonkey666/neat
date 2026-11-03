// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { bdr, fCt, pCt, Sdr, vdr, hCt, Edr, xos, jM, ps } from "./chunk-wrtp8qz8.js";
import { K7 } from "./chunk-ajtyjx88.js";
import { GEn, R4t } from "./chunk-dc0nzty2.js";
import { mIs, GEe, cMs, Qzn, FN, hsn, xke, Tsn, mKn, MVn, gFs } from "./chunk-j0tbz6ra.js";
import { Lo } from "./chunk-ws40g1dv.js";
import { AEn } from "./chunk-5y69fhjv.js";
import { rcn } from "./chunk-ybr49gcx.js";
import { I9s } from "./chunk-wany0nxw.js";
import { LWo } from "./chunk-q1myka9a.js";
import { Mmn } from "./chunk-183gveyz.js";
import { Wve, Fgo } from "./chunk-j89m7f51.js";
import { YTs } from "./chunk-3yfnz98y.js";
import { _8e } from "./chunk-9afmk2xz.js";
import { qIe } from "./chunk-nc9krs44.js";
import { $Mt } from "./chunk-4jeswg4q.js";
import { LTs } from "./chunk-w3wwf73p.js";
import { BBe } from "./chunk-zga5371a.js";
function $go(t, r = new Set(), s, o, n, m = !1) {
  let a = r.size > 0;
  if ((mKn(t), R4t(t), Mmn.of(t).clear(), Fgo(Wve), FN(), I9s(r), !a)) rcn.peek(t)?.clear();
  let l = hsn();
  if (l?.getTeleportCacheState().status === "active")
    l.revertTeleportCache("transcript_cleared", "main");
  if (
    (xke(t, void 0, s, void 0, void 0, n),
    jM("clear"),
    bdr(ps()),
    pCt(ps()),
    Sdr(ps()),
    fCt(ps()),
    vdr(ps()),
    hCt(ps()),
    Edr(ps()),
    !m)
  )
    (qEr(), Qzn(t.host));
  if (
    (Tsn(t, "session_start"),
    GEe.of(t).reset(),
    LWo.of(t).clear(),
    _8e.of(t).reset(),
    s?.((e) => {
      if (
        e.storedImagePaths.size === 0 &&
        e.imageDescriptions.size === 0 &&
        Object.keys(e.displayedMessageContent).length === 0
      )
        return e;
      return {
        ...e,
        storedImagePaths: new Map(),
        imageDescriptions: new Map(),
        displayedMessageContent: {}
      };
    }),
    mIs(),
    !a)
  )
    LTs();
  if ((AEn(), !a)) YTs();
  if ((xos(r), GEn(), gFs(), MVn().catch(() => {}), cMs(t), o))
    (o.get($Mt).clear(),
      o.get(BBe).clear(),
      o.get(qIe).clear(),
      import("./chunk-42zasfgh.js").then(({ WebFetchCache: e }) => o.get(e).clear()),
      import("./chunk-k31ndt1h.js").then(({ WebFetchHistory: e }) => o.get(e).clear()),
      import("./chunk-g5gdkpzw.js").then(({ ToolSearchDescriptionCache: e }) => o.get(e).clear()));
  import("./chunk-28aykk9j.js").then(({ clearAgentDefinitionsCache: e }) => e());
}
function qEr() {
  let t = Lo();
  ((t.bashPromptSkillCommands = void 0), (t.workflowAuthoringSkillAvailable = void 0), K7());
}
export { $go, qEr };

//# sourceMappingURL=chunk-vvh1h2k6.js.map
