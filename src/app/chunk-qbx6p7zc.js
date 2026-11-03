// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import "./chunk-4cgvah10.js";
import { g } from "./chunk-brszmkb3.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import { l } from "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-qywdxehb.js";
import "./chunk-vw9e882a.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-qmkm2x59.js";
import "./chunk-rhk37je5.js";
import "./chunk-afxq0vrk.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-zjm5ncxc.js";
import { b3 } from "./chunk-tqd8rcc8.js";
import "./chunk-m11n0fm9.js";
import "./chunk-vxpcbg5q.js";
import "./chunk-ct112gdr.js";
import "./chunk-f9x3sh8a.js";
var y = {
  name: "MCP Task",
  type: "mcp_task",
  async kill(o, s, d, k, i) {
    let e = s.get(o),
      p = e?.type === "mcp_task" ? e.sidecarSessionId : void 0,
      c = e?.type === "mcp_task" ? e.sidecarProjectDir : void 0,
      n = e?.type === "mcp_task" ? e.sidecarWrite : void 0;
    if (e?.type === "mcp_task")
      (e.abortController?.abort(), e.driveAbortController?.abort(), e.sep2663Cancel?.());
    let a = !1;
    if (
      (s.update(o, (r) => {
        if (r.notified || r.status !== "running") return r;
        return (
          (a = !0),
          { ...r, status: "killed", endTime: Date.now(), parked: void 0, notified: !0 }
        );
      }),
      a && e?.type === "mcp_task")
    )
      try {
        e.onWorkerWakeOutcome?.({ kind: "stopped" });
      } catch (r) {
        (t("McpTask.kill: onWorkerWakeOutcome threw, the stop continues"), l(r));
      }
    if (
      ((async () => {
        (await n, await b3(o, i, p, c));
      })().catch((r) => t(`McpTask.kill deleteMcpTaskMetadata: ${String(r)}`)),
      a && e?.type === "mcp_task" && e.protocol === "sep2663")
    )
      g("mcp_task_stop");
  }
};
export { y as MCP_TASK };

//# sourceMappingURL=chunk-qbx6p7zc.js.map
