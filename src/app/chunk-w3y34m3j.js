// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import { PF, vme, uJ } from "./chunk-0szbzt7f.js";
import "./chunk-fmf16p94.js";
import { Qpe } from "./chunk-1enm1nhw.js";
import "./chunk-6bbdndfe.js";
import "./chunk-2qx8pe6s.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import { b } from "./chunk-acd8w9vv.js";
import { N } from "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { rr } from "./chunk-ak0cmk10.js";
import { a } from "./chunk-4cgvah10.js";
import { _, t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-ewvf3tep.js";
import { O } from "./chunk-19xvg81r.js";
import "./chunk-brszmkb3.js";
import "./chunk-qmkm2x59.js";
import "./chunk-at88wjsn.js";
import "./chunk-63a6mqbs.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-4kxy1036.js";
import "./chunk-6z6dbjsw.js";
import "./chunk-ajtyjx88.js";
import "./chunk-4nzy53ma.js";
import "./chunk-jwqtbev0.js";
import "./chunk-adv24f35.js";
import "./chunk-tzrn3e6a.js";
import "./chunk-exz0w70z.js";
import "./chunk-rhk37je5.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-ddpw2j06.js";
import "./chunk-dc0nzty2.js";
import "./chunk-xe386mry.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-cjnzngfc.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-afxq0vrk.js";
import "./chunk-azq9hjy0.js";
import "./chunk-vw9e882a.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-qywdxehb.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-13nwb0xt.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-qakn3b85.js";
import "./chunk-zf79f62g.js";
import "./chunk-c3npf81n.js";
import "./chunk-zem4yd4w.js";
import "./chunk-gg53p5cf.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-6xjawpfq.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-tcvjb2c0.js";
import "./chunk-c57c64b0.js";
import "./chunk-dvghjmtr.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-95k4nfdh.js";
import "./chunk-nrysaqwk.js";
import "./chunk-7zgz07kc.js";
import "./chunk-znkwh1rm.js";
import "./chunk-x8k0r295.js";
import "./chunk-vbnb89qh.js";
import "./chunk-52ssztep.js";
import "./chunk-v19xty83.js";
import "./chunk-rh5ymkjp.js";
import "./chunk-bh50mq9d.js";
import "./chunk-tv3shk24.js";
import "./chunk-awy6yynp.js";
import "./chunk-38g9s4wc.js";
import "./chunk-t86k189s.js";
import "./chunk-rj6gws00.js";
import "./chunk-drhbqmbg.js";
import "./chunk-6dsz7zr0.js";
import "./chunk-ws40g1dv.js";
import "./chunk-5y69fhjv.js";
import "./chunk-7svjr0za.js";
import "./chunk-1g9x3zw8.js";
import "./chunk-r1dvrqha.js";
import "./chunk-wvbfdbhr.js";
import "./chunk-wejdb0zs.js";
import "./chunk-9zd34fgb.js";
import "./chunk-vchq4g74.js";
import "./chunk-xt4k95hv.js";
import "./chunk-r00j5r9s.js";
import "./chunk-csks5ccj.js";
import "./chunk-w89b9cst.js";
import { cdt } from "./chunk-ce3aa670.js";
import { vOn } from "./chunk-pw1f3tmw.js";
import "./chunk-m18k9mtt.js";
import "./chunk-z2vz1f06.js";
import "./chunk-3hjc969z.js";
import "./chunk-zkq2y8s1.js";
import "./chunk-hk0dvhmb.js";
import "./chunk-4q6qmmwb.js";
import "./chunk-ya7n419k.js";
import "./chunk-gvf25gp4.js";
import "./chunk-ge5t5c4x.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
var p = "claude-code-device",
  m = "get_device_info";
function h(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e))
    return { sessionId: void 0, toolArgs: {} };
  let { session_id: o, trigger_id: n, ...s } = e;
  return { sessionId: typeof o === "string" && o.length > 0 ? o : void 0, toolArgs: s };
}
function A(e) {
  return PF.parse(e);
}
function B(e) {
  let o = 0,
    n = [],
    s = () => {
      if (o !== 0) return;
      let i = n;
      ((n = []), i.forEach((r) => r()));
    },
    l = new Qpe({ name: p, version: e.version }, { capabilities: { tools: {} } });
  return (
    l.setRequestHandler(vme, async () => ({ tools: [...e.registry.definitions()] })),
    l.setRequestHandler(uJ, async ({ params: { name: i, arguments: r } }, f) => {
      let d = e.registry.get(i);
      if (!d) return { content: [{ type: "text", text: `Unknown tool: ${i}` }], isError: !0 };
      let { sessionId: c, toolArgs: g } = h(r);
      if (c !== void 0 && rr(c) !== rr(e.sessionId)) return v(d, c, e.sessionId);
      if (d.senderJudgedBy === "dispatch") {
        let u = vOn();
        if (u.heldBack) return y(d, u.attestation);
      }
      o++;
      try {
        return await d.call(g, { sessionId: c, signal: f.signal });
      } catch (u) {
        return (
          t(`[deviceBridge] tool ${i} failed: ${N(u).message}`),
          { content: [{ type: "text", text: `Tool ${i} failed: internal error` }], isError: !0 }
        );
      } finally {
        if ((o--, o === 0)) setTimeout(s, 0);
      }
    }),
    {
      server: l,
      inFlightCalls: () => o,
      whenIdle: () => {
        let i = new Promise((r) => {
          n.push(r);
        });
        if (o === 0) setTimeout(s, 0);
        return i;
      }
    }
  );
}
function v(e, o, n) {
  let s = e.definition.name;
  return (
    t(
      `[deviceBridge] refused ${s}: call asserted for session ${_(o.slice(0, 48))}, this device serves ${n}`
    ),
    a("tengu_device_tool_refused", { tool: e.analyticsName, reason: b("session_mismatch") }),
    {
      content: [
        {
          type: "text",
          text: `${s} refused: the user's machine is currently connected on behalf of a different Claude Code cloud session (usually another session started from the same machine), so it cannot run device tools for this session and nothing was run. Tell the user, and continue with the tools in this cloud environment; if this session was also started with Claude Code on that machine, its device tools may work again once the other session ends. Do not retry in a loop.`
        }
      ],
      isError: !0
    }
  );
}
function y(e, o) {
  let n = o?.status ?? "UNSPECIFIED";
  return (
    t(
      `[deviceBridge] refused ${e.definition.name}: its sender is held back under the trusted-device policy (${n})`
    ),
    a("tengu_device_tool_refused", { tool: e.analyticsName, reason: b("unattested_request") }),
    {
      content: [
        {
          type: "text",
          text: cdt({ targetName: "this machine", status: n, subtype: "remote_tool_call" })
        }
      ],
      isError: !0
    }
  );
}
var T = "This machine is attached but does not run commands for this session.";
function J(e) {
  let o = e.now ?? (() => new Date());
  return {
    definition: {
      name: m,
      description:
        "Returns runtime environment details for this device (platform, architecture, Claude Code version, and device name). Call this to confirm the device connection is live." +
        (e.idle ? ` ${T}` : ""),
      inputSchema: { type: "object", properties: {} }
    },
    analyticsName: b(m),
    senderJudgedBy: {
      notJudged:
        "The bridge service's own identify probe, sent with no session. It takes no input, runs nothing and reads nothing here, and answers the name this machine dialed the bridge under plus platform, architecture, Claude Code version and the time. Refusing it would hide the machine from the bridge, not keep anything from a sender."
    },
    call: async () => {
      let n = {
        platform: O(),
        arch: "x64",
        claudeCodeVersion: e.version,
        deviceName: e.getDeviceName(),
        timestamp: o().toISOString()
      };
      return { content: [{ type: "text", text: _(n, null, 2) }] };
    }
  };
}
export { B as createDeviceMcpServer, J as deviceInfoProbeTool, A as parseJsonRpcMessage };

//# sourceMappingURL=chunk-w3y34m3j.js.map
