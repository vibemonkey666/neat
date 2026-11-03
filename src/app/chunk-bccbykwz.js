// Recovered JavaScript source; compiled-input directive removed
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import "./chunk-2qx8pe6s.js";
import "./chunk-6bbdndfe.js";
import "./chunk-wrtp8qz8.js";
import "./chunk-qq3ygwcj.js";
import "./chunk-acd8w9vv.js";
import "./chunk-fs43t96t.js";
import "./chunk-4hww8411.js";
import "./chunk-h5gbmqm1.js";
import "./chunk-jgvfzp2r.js";
import { t } from "./chunk-4kxznmzw.js";
import "./chunk-w2jwj725.js";
import "./chunk-jazcqqqr.js";
import "./chunk-45h8cn90.js";
import "./chunk-a16y5hcz.js";
import "./chunk-3b9j76mf.js";
import "./chunk-cj37hmns.js";
import "./chunk-xc1j8sdj.js";
import "./chunk-ewvf3tep.js";
import "./chunk-19xvg81r.js";
import "./chunk-4kxy1036.js";
import "./chunk-4nzy53ma.js";
import "./chunk-tcvjb2c0.js";
import { eo } from "./chunk-bxamkenk.js";
import "./chunk-4cgvah10.js";
import "./chunk-brszmkb3.js";
import "./chunk-xe386mry.js";
import "./chunk-qywdxehb.js";
import "./chunk-afxq0vrk.js";
import "./chunk-jtb5bzvb.js";
import "./chunk-t0wrcf3t.js";
import "./chunk-13nwb0xt.js";
import "./chunk-5rw2zfa0.js";
import "./chunk-vw9e882a.js";
import "./chunk-qmkm2x59.js";
import "./chunk-6xjawpfq.js";
import "./chunk-pgnjjhxv.js";
import "./chunk-cjnzngfc.js";
import "./chunk-63a6mqbs.js";
import "./chunk-dmtyt8s1.js";
import "./chunk-gg53p5cf.js";
import "./chunk-adv24f35.js";
import "./chunk-9z5ybxhe.js";
import "./chunk-928ws1pg.js";
import "./chunk-d54avynm.js";
import "./chunk-azq9hjy0.js";
import "./chunk-8r2m7vfp.js";
import "./chunk-nrysaqwk.js";
import "./chunk-dvghjmtr.js";
import "./chunk-dc0nzty2.js";
import "./chunk-ak0cmk10.js";
import "./chunk-arw2bgak.js";
import "./chunk-8w2npe9a.js";
import "./chunk-qmmh8tq2.js";
import "./chunk-rhk37je5.js";
import "./chunk-v4kbwz0z.js";
import "./chunk-wr0p4ndg.js";
import "./chunk-1e5yp9hx.js";
import "./chunk-va73d26h.js";
import "./chunk-7c3thgax.js";
import "./chunk-c3npf81n.js";
import "./chunk-c57c64b0.js";
import "./chunk-yhnvfh6c.js";
import "./chunk-38g9s4wc.js";
import { kuo } from "./chunk-8h689vdr.js";
import "./chunk-ya7n419k.js";
import "./chunk-527647eb.js";
import "./chunk-m25ae09s.js";
import "./chunk-hc5j8sxy.js";
import "./chunk-ct112gdr.js";
import "./chunk-njpzwa1b.js";
import "./chunk-f9x3sh8a.js";
import "./chunk-n8wdmnah.js";
import "./chunk-6jbh8yja.js";
import { basename as l } from "path";
async function x(r, e) {
  let o = await kuo(),
    a = eo(e.session);
  if (!o.success) {
    if (a)
      return (
        t(`heapdump failed: ${o.error}`, { level: "error" }),
        { type: "text", value: "Failed to create heap dump (detail withheld on this connection)" }
      );
    return { type: "text", value: `Failed to create heap dump: ${o.error}` };
  }
  let i = a ? l(o.heapPath) : o.heapPath,
    p = a ? l(o.diagPath) : o.diagPath;
  if (a) t(`heapdump written: ${o.heapPath} ${o.diagPath}`);
  let h = [i, p, "", d(o.diagnostics)];
  return (
    h.push(
      "",
      "Open the .heapsnapshot in Chrome DevTools \u2192 Memory \u2192 Load to inspect retainers."
    ),
    {
      type: "text",
      value: h.join(`
`)
    }
  );
}
function d(r) {
  let { memoryUsage: e, resourceUsage: o, analysis: a } = r,
    i = a.potentialLeaks.length
      ? a.potentialLeaks.map((n) => `  \u26A0 ${n}`).join(`
`)
      : "  (no obvious leak indicators)",
    p = (n, u) =>
      `RSS ${s(e.rss)} (peak ${s(o.maxRSS)}) ${n > u ? "\u2014 most memory is JS heap (inspect the .heapsnapshot)" : "\u2014 most memory is native (NOT in the .heapsnapshot)"}`;
  if (r.runtime === "bun") {
    let n = Math.max(0, e.rss - e.heapUsed);
    return [
      p(e.heapUsed, n),
      `  JS heap          ${s(e.heapUsed).padStart(8)}  in snapshot`,
      `  strings, buffers ${s(e.external).padStart(8)}  part of the JS heap, in snapshot`,
      `  outside the heap ${s(n).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
      i
    ].join(`
`);
  }
  let h = e.external - e.arrayBuffers,
    c = Math.max(0, e.rss - e.heapTotal - e.external);
  return [
    p(e.heapTotal, e.external + c),
    `  JS heap        ${s(e.heapTotal).padStart(8)}  in snapshot`,
    `  array buffers  ${s(e.arrayBuffers).padStart(8)}  not in snapshot`,
    `  other external ${s(h).padStart(8)}  not in snapshot`,
    `  unaccounted    ${s(c).padStart(8)}  not in snapshot (code/JIT/stacks/allocator)`,
    i
  ].join(`
`);
}
function s(r) {
  return `${(r / 1073741824).toFixed(2)} GB`;
}
export { x as call };

//# sourceMappingURL=chunk-bccbykwz.js.map
